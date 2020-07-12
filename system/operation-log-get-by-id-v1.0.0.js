/**
 * @api {GET} /operation-log/{id} 操作日志 - 详情
 * @apiVersion 1.0.0
 * @apiName operation-log-get-by-id
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 详情
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiParam {Number} id id
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 * @apiSuccess {Object} data 数据
 * @apiSuccess {Number} data.id id
 * @apiSuccess {String} data.operatorName 操作人姓名
 * @apiSuccess {String} data.operatorPhoneNumber 操作人手机号码
 * @apiSuccess {String} data.module 操作模块
 * @apiSuccess {String} data.type 操作类型
 * @apiSuccess {String} data.ip IP
 * @apiSuccess {String} data.location 地理位置
 * @apiSuccess {String} data.os 操作系统
 * @apiSuccess {String} data.browser 浏览器
 * @apiSuccess {String} data.requestMethod 请求方式
 * @apiSuccess {String} data.requestUrl 请求地址
 * @apiSuccess {String} data.requestContentType 请求 content-type
 * @apiSuccess {String} data.requestUserAgent 请求 user-agent
 * @apiSuccess {String} data.requestParam 请求参数
 * @apiSuccess {String} data.responseResult 响应结果
 * @apiSuccess {Number} data.waitTime 耗时 (毫秒)
 * @apiSuccess {String} data.status 状态
 * @apiSuccess {String} data.errorMsg 错误信息
 * @apiSuccess {String} data.createGmt 操作时间
 */
