/**
 * @api {GET} /resource 资源管理 - 分页查询
 * @apiVersion 1.0.0
 * @apiName resource-list
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 列表查询
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiParam {Number} [pageNum=1] 当前页码
 * @apiParam {Number} [pageSize=10] 每页大小
 * @apiParam {Number} [parentId] 父级 id
 * @apiParam {Number} [statusCode] 状态编码
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
