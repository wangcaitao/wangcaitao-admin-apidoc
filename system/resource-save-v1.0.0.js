/**
 * @api {POST} /resource 资源管理 - 保存
 * @apiVersion 1.0.0
 * @apiName resource-save
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 保存
 *
 * @apiUse commonRequestHeader
 *
 * @apiParam {Number} [parentId] 父级 id
 * @apiParam {Number="详细说明见 附录 -> 字典 -> 资源状态"} statusCode=1 状态编码
 * @apiParam {String} name 名称
 * @apiParam {String} [url] 地址
 * @apiParam {String="详细说明见 附录 -> 字典 -> 请求方式"} requestMethod=GET 请求方式
 * @apiParam {Number="详细说明见 附录 -> 字典 -> 资源类型"} typeCode=1 类型编码
 * @apiParam {String} [icon] 图标
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
