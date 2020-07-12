/**
 * @api {GET} /property/{id} 参数管理 - 详情
 * @apiVersion 1.0.0
 * @apiName property-get-by-id
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
 * @apiSuccess {String} data.name 属性名
 * @apiSuccess {String} data.value 属性值
 * @apiSuccess {String} data.description 说明
 * @apiSuccess {String} data.createGmt 创建时间
 * @apiSuccess {String} data.modifiedGmt 修改时间
 */
