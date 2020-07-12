/**
 * @api {PUT} /account-avatar 帐号设置 - 修改头像
 * @apiVersion 1.0.0
 * @apiName account-avatar-update
 * @apiGroup personal_center
 * @apiPermission 认证请求
 *
 * @apiDescription 修改
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiParam {String} avatarImgUrl 头像地址
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
