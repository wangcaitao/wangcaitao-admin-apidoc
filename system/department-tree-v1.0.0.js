/**
 * @api {GET} /department-tree 部门管理 - 部门树
 * @apiVersion 1.0.0
 * @apiName department-tree
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 部门树
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 * @apiSuccess {Object} data 数据
 * @apiSuccess {Number} data.id id
 * @apiSuccess {String} data.name 名称
 * @apiSuccess {Object[]} data.children 子集数据. 字段与父级相同
 * @apiSuccess {Number} data.children.id id
 * @apiSuccess {String} data.children.name 名称
 */
