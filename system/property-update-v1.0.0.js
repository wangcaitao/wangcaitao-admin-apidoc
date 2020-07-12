/**
 * @api {PUT} /property 参数管理 - 修改
 * @apiVersion 1.0.0
 * @apiName property-update
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 修改
 *
 * @apiUse commonRequestHeader
 *
 * @apiParam {Number} id id
 * @apiParam {String} name 属性名
 * @apiParam {String} value 属性值
 * @apiParam {String} [description] 说明
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
