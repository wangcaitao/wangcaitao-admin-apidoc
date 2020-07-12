/**
 * @api {GET} /dict-code/{parentCode}/{codes} 字典管理 - 获取名称
 * @apiVersion 1.0.0
 * @apiName dict-code-get-name-by-code
 * @apiGroup system
 * @apiPermission 认证请求
 *
 * @apiDescription 根据编号获取名称
 *
 * @apiParam {String} parentCode 父级编码
 * @apiParam {String} codes 子级编码, 可以是英文逗号分开的字符串
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 * @apiSuccess {Object} data 数据
 */
