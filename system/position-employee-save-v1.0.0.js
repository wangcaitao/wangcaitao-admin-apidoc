/**
 * @api {POST} /position-employee 职位关联员工 - 保存
 * @apiVersion 1.0.0
 * @apiName position-employee-save
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 保存
 *
 * @apiUse commonRequestHeader
 *
 * @apiParam {Number} positionId 职位 id
 * @apiParam {Number[]} employeeIds 员工 id
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
