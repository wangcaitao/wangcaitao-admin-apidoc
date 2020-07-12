/**
 * @api {POST} /dict 字典管理 - 保存
 * @apiVersion 1.0.0
 * @apiName dict-save
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 保存. 新增子集 `parentCode` 不能为空.
 *
 * @apiUse commonRequestHeader
 *
 * @apiParam {String} [parentCode] 父级编码
 * @apiParam {String} code 编码
 * @apiParam {String} name 名称
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
