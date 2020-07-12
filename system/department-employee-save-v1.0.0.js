/**
 * @api {POST} /department-employee 部门关联员工 - 保存
 * @apiVersion 1.0.0
 * @apiName department-employee-save
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 保存
 *
 * @apiUse commonRequestHeader
 *
 * @apiParam {Number} departmentId 部门 id
 * @apiParam {Object[]} employeeIds 员工 id
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
