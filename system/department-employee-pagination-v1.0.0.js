/**
 * @api {GET} /department-employee 部门关联员工 - 分页查询
 * @apiVersion 1.0.0
 * @apiName department-employee-pagination
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 分页查询
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiParam {Number} [pageNum=1] 当前页码
 * @apiParam {Number} [pageSize=10] 每页大小
 * @apiParam {Number} departmentId 部门 id
 * @apiParam {Number="0: 未关联, 1: 已关联"} [relationStatusCode=1] 关联状态. 0: 未关联, 1: 已关联
 * @apiParam {String} [employeeName] 员工姓名
 * @apiParam {String} [phoneNumber] 手机号码
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 * @apiSuccess {Number} pageNum 当前页码
 * @apiSuccess {Number} pageSize 每页大小
 * @apiSuccess {Number} pages 总页数
 * @apiSuccess {Number} rows 总行数
 * @apiSuccess {Object[]} data 数据
 * @apiSuccess {Number} data.id id
 * @apiSuccess {String} data.departmentName 部门名称
 * @apiSuccess {Number} data.employeeId 员工 id
 * @apiSuccess {String} data.employeeName 员工姓名
 * @apiSuccess {String} data.phoneNumber 手机号码
 */
