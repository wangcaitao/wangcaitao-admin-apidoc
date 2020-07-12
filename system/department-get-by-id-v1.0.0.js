/**
 * @api {GET} /department/{id} 部门管理 - 详情
 * @apiVersion 1.0.0
 * @apiName department-get-by-id
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
 * @apiSuccess {String} data.createGmt 创建时间
 * @apiSuccess {String} data.modifiedGmt 修改时间
 */
