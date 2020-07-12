/**
 * @api {GET} /employee 员工管理 - 分页查询
 * @apiVersion 1.0.0
 * @apiName employee-pagination
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 分页查询
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiParam {Number} [pageNum=1] 当前页码
 * @apiParam {Number} [pageSize=10] 每页大小
 * @apiParam {Number} [departmentId] 部门 id
 * @apiParam {Number="详细说明见 附录 -> 字典 -> 员工状态"} [statusCode] 状态编码
 * @apiParam {String} [name] 姓名
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
 * @apiSuccess {String} data.name 姓名
 * @apiSuccess {String} data.phoneNumber 手机号码
 * @apiSuccess {String} data.avatarImgUrl 头像
 * @apiSuccess {Number} data.accountStatusCode 帐号状态编码
 * @apiSuccess {String} data.accountStatus 帐号状态
 * @apiSuccess {Number} data.statusCode 状态编码
 * @apiSuccess {String} data.status 状态
 * @apiSuccess {String} data.jobNumber 工号
 * @apiSuccess {String} data.email 邮箱
 * @apiSuccess {Number} data.genderCode 性别编码
 * @apiSuccess {String} data.gender 性别
 * @apiSuccess {String} data.departmentNames 部门名称, 英文逗号分开
 * @apiSuccess {String} data.positionNames 职位名称, 英文逗号分开
 * @apiSuccess {String} data.roleName 角色名称
 * @apiSuccess {String} data.createGmt 创建时间
 * @apiSuccess {String} data.modifiedGmt 修改时间
 */
