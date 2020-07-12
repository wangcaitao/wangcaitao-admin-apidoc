/**
 * @api {PUT} /account-password 帐号设置 - 修改密码
 * @apiVersion 1.0.0
 * @apiName account-password-update
 * @apiGroup personal_center
 * @apiPermission 认证请求
 *
 * @apiDescription 修改
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiParam {String} originalPassword 原密码
 * @apiParam {String} newPassword 新密码
 * @apiParam {String} confirmPassword 确认密码
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
