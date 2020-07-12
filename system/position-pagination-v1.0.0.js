/**
 * @api {GET} /position 职位管理 - 分页查询
 * @apiVersion 1.0.0
 * @apiName position-pagination
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 分页查询
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiParam {Number} [pageNum=1] 当前页码
 * @apiParam {Number} [pageSize=10] 每页大小
 * @apiParam {String} [name] 名称
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 * @apiSuccess {Number} pageNum 当前页码
 * @apiSuccess {Number} pageSize 每页大小
 * @apiSuccess {Number} pages 总页数
 * @apiSuccess {Number} rows 总行数
 * @apiSuccess {Object[]} data 数据
 * @apiSuccess {Number} data.id id
 * @apiSuccess {String} data.name 名称
 * @apiSuccess {String} data.createGmt 创建时间
 * @apiSuccess {String} data.modifiedGmt 修改时间
 */
