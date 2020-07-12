/**
 * @api {PUT} /role-sort 角色管理 - 修改排序
 * @apiVersion 1.0.0
 * @apiName role-sort-update
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 上移或下移
 *
 * @apiUse commonRequestHeader
 *
 * @apiParam {Number} id id
 * @apiParam {Number="详细说明见 附录 -> 字典 -> 移动类型"} moveTypeCode 类型编码
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
