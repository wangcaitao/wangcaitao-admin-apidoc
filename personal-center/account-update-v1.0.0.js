/**
 * @api {PUT} /account 帐号设置 - 修改信息
 * @apiVersion 1.0.0
 * @apiName account-update
 * @apiGroup personal_center
 * @apiPermission 认证请求
 *
 * @apiDescription 修改信息
 *
 * @apiUse commonRequestHeader
 *
 * @apiParam {Number} name 姓名
 * @apiParam {String} phoneNumber 手机号码
 * @apiParam {String} [email] 邮箱
 * @apiParam {String} genderCode 性别编码
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
