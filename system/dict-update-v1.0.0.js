/**
 * @api {PUT} /dict 字典管理 - 修改
 * @apiVersion 1.0.0
 * @apiName dict-update
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 修改
 *
 * @apiUse commonRequestHeader
 *
 * @apiParam {Number} id 字典 id
 * @apiParam {String} code 编码
 * @apiParam {String} name 名称
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
