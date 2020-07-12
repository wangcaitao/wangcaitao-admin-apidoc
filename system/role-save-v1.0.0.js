/**
 * @api {POST} /role 角色管理 - 保存
 * @apiVersion 1.0.0
 * @apiName role-save
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 保存
 *
 * @apiUse commonRequestHeader
 *
 * @apiParam {String} code 编码
 * @apiParam {String} name 名称
 * @apiParam {Number[]} [resourceIds] 资源 id 数组
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
