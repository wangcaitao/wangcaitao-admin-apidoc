/**
 * @api {GET} /dict-tree 字典管理 - 字典树
 * @apiVersion 1.0.0
 * @apiName dict-tree
 * @apiGroup system
 * @apiPermission 认证请求
 *
 * @apiDescription 字典树
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 * @apiSuccess {Object} data 数据
 * @apiSuccess {String} data.code 编码
 * @apiSuccess {String} data.name 名称
 * @apiSuccess {Object[]} data.children 子集数据. 字段与父级相同
 * @apiSuccess {String} data.children.code 编码
 * @apiSuccess {String} data.children.name 名称
 */
