/**
 * @api {POST} /upload-batch 文件上传 - 批量
 * @apiVersion 1.0.0
 * @apiName upload-batch
 * @apiGroup common
 * @apiPermission 授权请求
 *
 * @apiDescription 多文件上传
 *
 * @apiUse commonFormDataRequest
 *
 * @apiParam prefix 地址前缀
 * @apiParam file 文件, 支持多个
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 * @apiSuccess {String[]} data url
 */
