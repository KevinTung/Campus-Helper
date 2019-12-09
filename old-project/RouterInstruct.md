# 路由说明

## 定义
+ `poster object` 见数据库`posters`表，上传时不带`pid`
+ `poster object after wrap` 添加了 `avatar, nickname, username`, 以及 `hasUpvoted`(`true/false`), 表示用户是否已经点过赞
+ `user object` 见数据库`userinfo`表
+ `comment object` 见数据库`poster_<pid>_comment`表
+ `comment object after wrap` 添加了 `avatar, nickname, username`
+ `notice object`见数据库`user_<uid>_notice`表，获取列表时会加上`nickname`
+ `message object`见数据库`im_message`表

## GET 请求

#### 获取用户公开信息
+ URI: `GET /user-info-pub`
+ request 格式: 在 query 中包含 `username`
+ response 格式: 一个`json`，包含所请求用户的 **public** 信息 (包括 `nickname`, `avatar`... 不包括 private 信息如 `password`...)

#### 获取动态信息
+ URI: `GET /poster-info`
+ request 格式: 在 query 中包含 `pid`
+ response 格式: 一个`json`，包含此动态的 `posterInfo`。如果找不到动态，则返回空对象

## POST 请求

#### 注册
+ URI: `POST /register`
+ request 格式: 在 body 中包含 username, password
+ response 格式: 一个`json`，包含:
    + status (表明请求是否成功，值可能为 'admitted'/'rejected')
    + info (后端返回的提示信息) 

### 带信息地注册

+ URI: `POST /register/withinfo`

+ ```
  request
  username，字符串
  password，字符串
  avatar：字符串，头像URL（可选）
  nickname：字符串，昵称（可选)
  gender：字符串，取male/female（可选）
  ```

+ ```
  response
  status: 字符串，取admitted/rejected
  info: 字符串，提示信息
  ```



#### 登录
+ URI: `POST /login`
+ request 格式: 在 body 中包含 username, password
+ response 格式: 一个`json`，包含:
    + status (表明请求是否成功，值可能为 'admitted'/'rejected')
    + info (后端返回的提示信息)
    + token (一个临时生成的字符串，在本次登录期间用此 token 在后端进行验证) 

#### 获取用户完整信息
+ URI: `POST /user-info-pri`
+ request 格式: 在 body 中包含 username, token
+ response 格式: 一个`json`，包含:
    + status (表明请求是否成功，值可能为 'admitted'/'rejected')
    + info (后端返回的提示信息。若 status 为 'admitted' 则无此项)
    + userinfo (后端返回的用户完整信息) 

#### 编辑用户信息
+ URI: `POST /user-edit`
+ request 格式: 一个`json`，包含 username, token, 以及:
    + userinfo: 一个`json`，包含所有修改之后的用户信息的键值对。后端会将该用户相应的信息更新 (注意: 传递的 \_private\_ 项是一个列表，包含所有用户设置为 **private** 的信息。另外，尝试修改 username 或者 uid 的行为会被后端自动忽略)
+ response 格式: 一个`json`，包含:
    + status (表明请求是否成功，值可能为 'admitted'/'rejected')
    + info (后端返回的提示信息)

#### 更改用户密码
+ URI: `POST /user-edit-pwd`
+ request 格式: 一个`json`，包含 username, token, 以及:
    + password: 此操作需要强验证，即还需要验证原密码
    + newPWD: 用户设置的新密码
+ response 格式: 一个`json`，包含:
    + status (表明session验证是否成功，值可能为 'admitted'/'rejected')
    + result (若status为'admitted'则有此项，表明修改密码是否成功，取值为'success'/'fail')
    + info (后端返回的提示信息)

#### 上传用户头像
+ URI: `POST /user-upload-avatar`
+ request 格式: 一个`multipart`，包含 username, token, 以及:
    + 上传的图片文件，'name' 为 'images'
+ response 格式: 一个`json`，包含:
    + status (表明请求是否成功，值可能为 'admitted'/'rejected')
    + info (后端返回的提示信息)

#### 获取首页动态列表
+ URI: `POST /frontpage`
+ request: `username, token`, response: `status` 用户身份认证
+ response 格式: `list`, 一个`array of poster object after wrap`，包含`pageLength`条 **最新** 动态（`pageLength`目前设定为 100）

#### 上传新动态
+ URI: `POST /upload-poster`
+ request 格式: 一个`multipart`，包含 username, token, 以及:
    + 上传的图片文件，'name' 为 'images'
    + content: 动态的文本
    + time: 动态的发布时间
    + tags: 一个字符串的`list`(列表)，包含此条动态的所有标签
+ response 格式: 一个`json`，包含:
    + status (表明请求是否成功，值可能为 'admitted'/'rejected')
    + info (后端返回的提示信息)

#### 删除动态
+ URI: `POST /delete-poster`
+ request: `username, token`, response: `status` 用户身份认证
+ request: `pid`: 将要删除的动态的`pid`
+ response: `result`，如果`pid`不存在或者这不是自己发布的动态则为`fail`，否则删除成功，为`success`

#### 查询用户发布图片的列表
+ URI: `POST /user/publish/list`
+ request: `username, token`, response: `status` 用户身份认证
+ request: `targetuser` 被查询用户的用户名
+ response: `result`，该用户发布过的`poster object after wrap`列表，如果该用户不存在则会返回空列表

#### 点赞
+ URI: `POST /poster/upvote`
+ request: `username, token`, response: `status` 用户身份认证
+ request: `pid` 被点赞的poster
+ response: `result` 如果该`pid`不存在则为`fail`，否则点赞成功，为`success`

#### 查询当前用户是否点赞了某条poster
+ URI: `POST /poster/isupvoted`
+ request:`username, token`, response: `status` 用户身份认证
+ request:`pid` 被查询的poster
+ response:`result` 查询结果`yes/no`，如果该`pid`不存在也会返回`no`

#### 发布评论
+ URI: `POST /poster/comment`
+ request: `username, token`, response: `status` 用户身份认证
+ request: `pid`, number, 用于标识被评论的poster
+ request: `content`, 要发布的评论内容
+ request: `replyto`，要回复的评论id（如果本身是一级评论则为0）
+ request: `time`, 评论发布时的时间戳
+ response: `result`, 如果评论成功则为`success`，否则为`fail`

#### 获取某条poster的评论列表
+ URI: `POST /poster/comment/list`
+ request: `username, token`, response: `status` 用户身份认证
+ request: `pid`, number, 用于标识被评论的poster
+ response: `comments`, `comment object after wrap`的列表

#### 转发某条poster
+ URI: `POST /poster/repost`
+ request: `username, token`, response: `status` 用户身份认证
+ request: `pid`, number, 用于标识被转发的poster
+ request: `content`, 转发时的文本
+ response: `result`, `success/fail`

#### 关注某人
+ URI: `POST /user/follow`
+ request: `username, token`, response: `status` 用户身份认证
+ request: `targetuser`, 被关注者的用户名
+ response: `result`, 若目标用户不存在则`fail`，否则不论是否已经关注都得到`success`，并置为关注

#### 取消关注某人
+ URI: `POST /user/unfollow`
+ request: `username, token`, response: `status` 用户身份认证
+ request: `targetuser`, 被取消关注者的用户名
+ response: `result`, 若目标用户不存在则`fail`，否则不论是否已经关注都得到`success`，并置为未关注

#### 询问当前用户是否关注了某人
+ URI: `POST /user/isfollowing`
+ request: `username, token`, response: `status` 用户身份认证
+ request: `targetuser`, 被查询者的用户名
+ response: `result = yes/no`, 如果该用户不存在也返回`no`

#### 获取所有关注对象发布的动态
+ URI: `POST /poster/list-following`
+ request: `username, token`, response: `status` 用户身份认证
+ response: `list`, 是一个`poster object after wrap`,（特别地，如果有评论，还包含第一条评论）是按发布时间逆序排列的动态列表

### 获取用户提醒消息数量

+ URI: `POST /user/notification/count`
+ request: `username, token`, response: `status` 用户身份认证
+ response: `count`, 一个数字，表示该用户提醒消息数量

### 获取用户提醒消息列表

+ URI: `POST /user/notification/list`
+ request: `username, token`, response: `status` 用户身份认证
+ response: `list`, 是`array of notice object`，其中添加了`nickname`

### 清空用户某种类型的消息提醒

+ URI: `POST /user/notification/clear`
+ request: `username, token`, response: `status` 用户身份认证
+ request: `type`, 字符串，取`comment_pic`, `comment_comment`, `upvote`之一，清除相应类型的消息提醒

如果身份认证成功，则动作完成，无其他返回

### 搜索

+ URI: `POST /search`
+ 带身份认证（`username, token in request, status in response`)
+ request
  keyword: 字符串，表示要搜索的关键字
+ response
  result: 数组，其中的元素为`poster object`，即搜索结果按相关性排序，并按隐私设置过滤后的结果

### 即时通讯：发送消息

+ URI: `POST /im/send`
+ 带身份认证（`username, token in request, status in response`)
+ request:
    + _to: 接收者的`username`
    + content: 消息内容
    + time: 消息发送的时间戳

### 即时通讯：获取消息列表

+ URI: `POST /im/get`
+ 带身份认证（`username, token in request, status in response`)
+ response
    list: 数组，每一项是一个字典，代表和某个用户的聊天详情:
    + message: 和此用户聊天的 **最后一条** 消息的`message_object`。保证列表按照消息时间降序有序
    + unread: 此用户发来的消息的未读数量
    + avatar: 此用户的头像
    + nickname: 此用户的昵称

### 即时通讯：获取和指定用户的消息

+ URI: `POST /im/with`
+ 带身份认证（`username, token in request, status in response`)
+ request
    + `targetuser`: 获取和`targetuser`的聊天记录，并且把`targetuser`发来的消息全部设置为已读
+ response
    + list: 数组，每一项是一个`message_object`。保证列表按照消息时间升序有序
    + avatar: 此用户头像
    + nickname: 此用户昵称

