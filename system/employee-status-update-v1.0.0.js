/**
 * @api {PUT} /employee-status 员工管理 - 修改状态
 * @apiVersion 1.0.0
 * @apiName employee-status-update
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 修改状态
 *
 * @apiUse commonRequestHeader
 *
 * @apiParam {Number} id id
 * @apiParam {Number="详细说明见 附录 -> 字典 -> 员工状态"} statusCode 状态
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
