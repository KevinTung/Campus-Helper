var timeParser = require('../../tools/timeparser.js')
var avatarWrapper = require('../../tools/avatarwrap.js')

Component({
  data: {
    commentList: [],
    inputFocus: 'true',
    currentInput: '',
    showPopup: false,
  },

  methods: {
    initData: function (comments, topComment) {
      console.log(comments)
      var commentList = []
      var rank = []
      for (var i = 0; i < comments.length; i++) {
        comments[i].avatar = avatarWrapper.wrapAvatar(comments[i].avatar)
        comments[i].time = timeParser.timeAgo(comments[i].time)
        if (comments[i].replyto != 0) {
          comments[i].replyuser = comments[comments[i].replyto - 1].nickname
        }
        
        if (comments[i].replyto == 0) {
          rank.push(commentList.length)
          commentList.push({
            comment: comments[i],
            replies: []
          })
        } else {
          const r = rank[comments[i].replyto - 1]
          rank.push(r)
          commentList[r].replies.push(comments[i])
        }
      }

      if (topComment) {
        for (var i = 0; i < commentList.length; i++) {
          if (commentList[i].comment.id == topComment) {
            [commentList[0], commentList[i]] = [commentList[i], commentList[0]]
            break
          }
          if (commentList[i].replies) {
            let len = commentList[i].replies.length
            for (var j = 0; j < len; j++) {
              if (commentList[i].replies[j].id == topComment) {
                [commentList[0], commentList[i]] = [commentList[i], commentList[0]]
                break
              }
            }
          }
        }
      }

      this.setData({
        commentList: commentList
      })
    },
    comment: function (e) {
      this.setData({
        inputFocus: 'true'
      })
      console.log(e.target.id)
    },
    getInput: function (e) {
      this.setData({
        currentInput: e.detail.value
      })
      console.log(this.data.currentInput)
    },
    reply: function (e) {
      console.log(e)
      var id = e.currentTarget.id.split('*')[0]
      this.triggerEvent('reply', {
        replyto: id
      })
    }
  }

})
