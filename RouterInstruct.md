# 路由说明

## 定义


## GET 请求


## POST 请求


#### 获取首页动态列表
+ URI: `POST /frontpage`
+ request: `username, token`, response: `status` 用户身份认证
+ response 格式: `list`, 一个`array of poster object after wrap`，包含`pageLength`条 **最新** 动态（`pageLength`目前设定为 100）

