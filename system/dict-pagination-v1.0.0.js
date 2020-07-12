/**
 * @api {GET} /dict 字典管理 - 分页查询
 * @apiVersion 1.0.0
 * @apiName dict-pagination
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 分页查询. `parentCode` 为空查询父级, 否则查询父级下的数据.
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiParam {Number} [pageNum=1] 当前页码
 * @apiParam {Number} [pageSize=10] 每页大小
 * @apiParam {String} [parentCode] 父级编码
 * @apiParam {String} [code] 编码
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
 * @apiSuccess {String} data.code 编码
 * @apiSuccess {String} data.name 名称
 * @apiSuccess {String} data.createGmt 创建时间
 * @apiSuccess {String} data.modifiedGmt 修改时间
 */
