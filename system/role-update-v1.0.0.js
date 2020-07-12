/**
 * @api {PUT} /role 角色管理 - 修改
 * @apiVersion 1.0.0
 * @apiName role-update
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 修改
 *
 * @apiUse commonRequestHeader
 *
 * @apiParam {String} id id
 * @apiParam {String} code 编码
 * @apiParam {String} name 名称
 * @apiParam {Number[]} [resourceIds] 资源 id 数组
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
