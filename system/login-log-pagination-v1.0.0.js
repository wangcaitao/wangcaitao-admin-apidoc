/**
 * @api {GET} /login-log 登陆日志 - 分页查询
 * @apiVersion 1.0.0
 * @apiName login-log-pagination
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 分页查询
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiParam {Number} [pageNum=1] 当前页码
 * @apiParam {Number} [pageSize=10] 每页大小
 * @apiParam {String} [loginUserName] 用户姓名
 * @apiParam {String} [loginUserPhoneNumber] 用户手机号码
 * @apiParam {Number="详细说明见 附录 -> 字典 -> 登陆状态"} [statusCode] 状态编码
 * @apiParam {String} [startCreateGmt] 开始登陆时间
 * @apiParam {String} [endCreateGmt] 结束登陆时间
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 * @apiSuccess {Number} pageNum 当前页码
 * @apiSuccess {Number} pageSize 每页大小
 * @apiSuccess {Number} pages 总页数
 * @apiSuccess {Number} rows 总行数
 * @apiSuccess {Object[]} data 数据
 * @apiSuccess {Number} data.id id
 * @apiSuccess {String} data.loginUserName 用户姓名
 * @apiSuccess {String} data.loginUserPhoneNumber 用户手机号码
 * @apiSuccess {String} data.ip IP
 * @apiSuccess {String} data.location 地理位置
 * @apiSuccess {String} data.os 操作系统
 * @apiSuccess {String} data.browser 浏览器
 * @apiSuccess {String} data.status 状态
 * @apiSuccess {String} data.errorMsg 错误信息
 * @apiSuccess {String} data.createGmt 登陆时间
 */
