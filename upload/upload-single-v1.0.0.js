/**
 * @api {POST} /upload 文件上传 - 单个
 * @apiVersion 1.0.0
 * @apiName upload-single
 * @apiGroup common
 * @apiPermission 授权请求
 *
 * @apiDescription 单文件上传
 *
 * @apiUse commonFormDataRequest
 *
 * @apiParam prefix 地址前缀
 * @apiParam file 文件
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 * @apiSuccess {String} data url
 */
