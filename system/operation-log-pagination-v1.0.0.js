/**
 * @api {GET} /operation-log 操作日志 - 分页查询
 * @apiVersion 1.0.0
 * @apiName operation-log-pagination
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 分页查询
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiParam {Number} [pageNum=1] 当前页码
 * @apiParam {Number} [pageSize=10] 每页大小
 * @apiParam {String} [operatorName] 操作人姓名
 * @apiParam {String} [operatorPhoneNumber] 操作人手机号码
 * @apiParam {Number="详细说明见 附录 -> 字典 -> 操作状态"} [statusCode] 状态编码
 * @apiParam {String="详细说明见 附录 -> 字典 -> 请求方式"} [requestMethod] 请求方式
 * @apiParam {String} [requestUrl] 请求地址
 * @apiParam {String} [startCreateGmt] 开始操作时间
 * @apiParam {String} [endCreateGmt] 结束操作时间
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 * @apiSuccess {Number} pageNum 当前页码
 * @apiSuccess {Number} pageSize 每页大小
 * @apiSuccess {Number} pages 总页数
 * @apiSuccess {Number} rows 总行数
 * @apiSuccess {Object[]} data 数据
 * @apiSuccess {Number} data.id id
 * @apiSuccess {String} data.operatorName 操作人姓名
 * @apiSuccess {String} data.operatorPhoneNumber 操作人手机号码
 * @apiSuccess {String} data.module 操作模块
 * @apiSuccess {String} data.type 操作类型
 * @apiSuccess {String} data.ip IP
 * @apiSuccess {String} data.location 地理位置
 * @apiSuccess {String} data.os 操作系统
 * @apiSuccess {String} data.browser 浏览器
 * @apiSuccess {String} data.status 状态
 * @apiSuccess {String} data.errorMsg 错误信息
 * @apiSuccess {String} data.requestMethod 请求方式
 * @apiSuccess {String} data.requestUrl 请求地址
 * @apiSuccess {Number} data.waitTime 耗时 (毫秒)
 * @apiSuccess {String} data.createGmt 操作时间
 */
