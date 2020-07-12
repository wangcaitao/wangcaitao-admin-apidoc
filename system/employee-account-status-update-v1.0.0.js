/**
 * @api {PUT} /employee-account-status 员工管理 - 修改帐号状态
 * @apiVersion 1.0.0
 * @apiName employee-account-status-update
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 修改状态
 *
 * @apiUse commonRequestHeader
 *
 * @apiParam {Number} id id
 * @apiParam {Number="详细说明见 附录 -> 字典 -> 员工帐号状态"} accountStatusCode 状态
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
