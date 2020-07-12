/**
 * @api {GET} /position 职位管理 - 列表查询
 * @apiVersion 1.0.0
 * @apiName position-list
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 列表查询
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiParam {Number} pagination 不分页标记. 固定 `0`
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 * @apiSuccess {Object[]} data 数据
 * @apiSuccess {Number} data.id id
 * @apiSuccess {String} data.name 名称
 */
