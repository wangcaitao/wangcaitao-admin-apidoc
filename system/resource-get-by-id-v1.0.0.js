/**
 * @api {GET} /resource/{id} 资源管理 - 详情
 * @apiVersion 1.0.0
 * @apiName resource-get-by-id
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 详情
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiParam {Number} id id
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 * @apiSuccess {Object} data 数据
 * @apiSuccess {Number} data.id id
 * @apiSuccess {String} data.name 名称
 * @apiSuccess {String} data.type 类型
 * @apiSuccess {Number} data.typeCode 类型编码
 * @apiSuccess {String} data.requestMethod 请求方式
 * @apiSuccess {String} data.url 地址
 * @apiSuccess {Number} data.statusCode 状态编码
 * @apiSuccess {String} data.status 状态
 * @apiSuccess {String} data.icon 图标地址
 * @apiSuccess {String} data.createGmt 创建时间
 * @apiSuccess {String} data.modifiedGmt 修改时间
 */
