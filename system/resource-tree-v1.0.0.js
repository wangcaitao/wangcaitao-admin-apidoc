/**
 * @api {GET} /resource-tree 资源管理 - 资源树
 * @apiVersion 1.0.0
 * @apiName resource-tree
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 资源树
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 * @apiSuccess {Object} data 数据
 * @apiSuccess {Number} data.id id
 * @apiSuccess {String} data.name 名称
 * @apiSuccess {String} data.typeCode 类型编码
 * @apiSuccess {String} data.requestMethod 请求方式
 * @apiSuccess {String} data.url 地址
 * @apiSuccess {Number} data.statusCode 状态编码
 * @apiSuccess {String} data.icon 图标地址
 * @apiSuccess {Object[]} data.children 子集数据. 字段与父级相同
 * @apiSuccess {Number} data.children.id id
 * @apiSuccess {String} data.children.name 名称
 * @apiSuccess {String} data.children.typeCode 类型编码
 * @apiSuccess {String} data.children.requestMethod 请求方式
 * @apiSuccess {String} data.children.url 地址
 * @apiSuccess {Number} data.children.statusCode 状态编码
 * @apiSuccess {String} data.children.icon 图标地址
 */
