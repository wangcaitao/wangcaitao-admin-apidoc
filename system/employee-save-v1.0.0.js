/**
 * @api {POST} /employee 员工管理 - 保存
 * @apiVersion 1.0.0
 * @apiName employee-save
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 保存
 *
 * @apiUse commonRequestHeader
 *
 * @apiParam {Number="详细说明见 附录 -> 字典 -> 帐号状态"} accountStatusCode=1 帐号状态
 * @apiParam {Number="详细说明见 附录 -> 字典 -> 员工状态"} statusCode=1 状态
 * @apiParam {String} name 姓名
 * @apiParam {String} phoneNumber 手机号码
 * @apiParam {String} [jobNumber] 工号
 * @apiParam {String} [email] 邮箱
 * @apiParam {Number="详细说明见 附录 -> 字典 -> 性别"} } genderCode=2 性别
 * @apiParam {Number[]} departmentIds 部门 id
 * @apiParam {Number[]} positionIds 职位 id
 * @apiParam {Number} [roleId] 角色 id
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
