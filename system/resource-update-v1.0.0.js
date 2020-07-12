/**
 * @api {PUT} /resource 资源管理 - 修改
 * @apiVersion 1.0.0
 * @apiName resource-update
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 修改
 *
 * @apiUse commonRequestHeader
 *
 * @apiParam {Number} id id
 * @apiParam {String} name 名称
 * @apiParam {String} [url] 地址
 * @apiParam {Number="详细说明见 附录 -> 字典 -> 资源状态"} statusCode 状态编码
 * @apiParam {String="详细说明见 附录 -> 字典 -> 请求方式"} requestMethod 请求方式
 * @apiParam {Number="详细说明见 附录 -> 字典 -> 资源类型"} typeCode 类型编码
 * @apiParam {String} [icon] 图标
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
