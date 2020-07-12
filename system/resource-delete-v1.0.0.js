/**
 * @api {DELETE} /resource/{id} 资源管理 - 删除
 * @apiVersion 1.0.0
 * @apiName resource-delete
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 删除
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiParam {Number} id id
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
