# 数据库说明

## Database
所有表都储存在同一个数据库中。在服务器上，这个数据库的名字为`production`。

## userinfo
保存所有 user 信息的一张表。含有以下列：
```sql
username varchar(255),
uid int auto_increment primary key,
password varchar(255),
nickname varchar(255),
gender varchar(255),
email varchar(255),
birthday varchar(255),
briefintro text,
avatar varchar(255),
cnt_upvoted int default 0,
cnt_follower int default 0
```

+ `username`: `varchar(255)`，储存用户名
+ `uid`: `int`，自增，主键，储存用户的 uid
+ `password`: `varchar(255)`，储存用户经过哈希的密码
+ `nickname`: `varchar(255)`，储存用户设定的昵称
+ `gender`: `varchar(255)`，储存用户设定的性别
+ `email`: `varchar(255)`，储存用户设定的邮箱
+ `birthday`: `varchar(255)`，储存用户设定的生日字符串
+ `briefintro`: `text`，储存用户设定的个性签名
+ `avatar`: `varchar(255)`，储存用户头像的 uri
+ `cnt_upvoted`: `int`，默认值为 0，储存用户获得过的点赞数
+ `cnt_follower`: `int`，默认值为 0，储存用户的粉丝数

## posters
保存所有 poster 信息的一张表。含有以下列：
```sql
uid int,
pid int auto_increment primary key,
time bigint,
content text,
pics text,
cnt_upvote int default 0,
cnt_comment int default 0,
cnt_repost int default 0,
privacy int default 0,
tags text
```

+ `uid`: `int`，储存发布此动态的用户的 uid
+ `pid`: `int`，自增，主键，储存此条动态的 pid
+ `time`: `bigint`，储存此动态发布时的时间戳（1970年1月1日至当时的毫秒数）
+ `content`: `text`，储存此动态携带的文本内容
+ `pics`: `text`，一个以`json`格式字符串存储的`js`对象。存入时需要`JSON.stringify`，读取时需要`JSON.parse`。储存图片列表，列表中的每一项是一个对象，包含此图片的 uri 和宽高信息
+ `cnt_upvote`: `int`，默认值为 0，储存此动态获得的点赞数
+ `cnt_comment`: `int`，默认值为 0，储存此动态的评论数
+ `cnt_repost`: `int`，默认值为 0，储存此动态的转发数
+ `privacy`: `int`，默认值为 0，储存此动态的隐私权限设置。0 代表所有人可见，1 代表仅好友可见，2 代表仅自己可见
+ `tags`: `text`，一个以`json`格式字符串存储的`js`对象。存入时需要`JSON.stringify`，读取时需要`JSON.parse`。储存图片的标签列表，列表中的每一项是一个标签

## `user_<uid>_following`
保存 uid 为 \<uid\> 的用户关注的用户列表。含有以下列：
```sql
uid int primary key
```

+ `uid`: `int`，主键，储存一个关注的用户的 uid

## `user_<uid>_upvote`
保存 uid 为 \<uid\> 的用户曾点赞的动态列表。含有以下列：
```sql
pid int primary key
```

+ `pid`: `int`，主键，储存一条点赞过的动态的 pid

## `poster_<pid>_comment`
保存 pid 为 \<pid\> 的动态的评论列表。含有以下列：
```sql
id int auto_increment primary key,
username varchar(255),
time bigint,
content text,
replyto int default 0
```

+ `id`: `int`，自增，主键，代表此条评论的编号
+ `username`: `varchar(255)`，储存发布此评论的用户的用户名
+ `time`: `bigint`，储存此评论发布时的时间戳
+ `content`: `text`，储存此评论的文本内容
+ `replyto`: `int`，默认值为 0，代表此条评论回复的对象。如果为 0，表示直接评论动态，是一条一级评论；否则表示评论了`id`为`replyto`的那条评论，是一条二级评论

## `user_<uid>_notice`

保存`uid`对应的用户当前的提醒消息

```
type varchar(255),
username varchar(255),
pid int,
commentid int default 0
```

+ `type`表示提醒的种类，分为`comment_pic`, `comment_comment`, `upvote`三种
+ `username`表示该动作的执行人，即点赞/评论的用户的用户名
+ `pid`表示被评论/点赞的poster
+ 如果`type`为前两种，则还会有`commentid`键，表示该评论的`id`, 否则为 0

## im_message

保存所有即时聊天的消息记录

```
_from varchar(255),
_to varchar(255),
content text,
time bigint,
_read int default 0
```

+ `_from`表示发送信息的用户的`username`
+ `_to`表示接收信息的用户的`username`
+ `content`表示信息的内容
+ `time`表示发送的时间
+ `_read`表示是否已读。0 表示未读，1 表示已读

