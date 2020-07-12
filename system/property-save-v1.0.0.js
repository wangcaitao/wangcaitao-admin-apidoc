/**
 * @api {POST} /property 参数管理 - 保存
 * @apiVersion 1.0.0
 * @apiName property-save
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 保存
 *
 * @apiUse commonRequestHeader
 *
 * @apiParam {String} name 属性名
 * @apiParam {String} value 属性值
 * @apiParam {String} [description] 说明
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
