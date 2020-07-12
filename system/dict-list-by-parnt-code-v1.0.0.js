/**
 * @api {GET} /dict-code/{parentCode} 字典管理 - 获取子集
 * @apiVersion 1.0.0
 * @apiName dict-code-list-by-parent-code
 * @apiGroup system
 * @apiPermission 认证请求
 *
 * @apiDescription 根据父级编号获取子集
 *
 * @apiParam {String} parentCode 父级编码
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 * @apiSuccess {Object[]} data 数据
 * @apiSuccess {String} data.code 编码
 * @apiSuccess {String} data.name 名称
 */
