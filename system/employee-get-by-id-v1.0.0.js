/**
 * @api {GET} /employee/{id} 员工管理 - 详情
 * @apiVersion 1.0.0
 * @apiName employee-get-by-id
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
 * @apiSuccess {Number[]} data.departmentIds 已勾选部门 ids
 * @apiSuccess {String} data.departmentNames 已勾选部门名称, 英文逗号分开
 * @apiSuccess {Number[]} data.positionIds 已选择职位 ids
 * @apiSuccess {String} data.positionNames 已选择职位名称, 英文逗号分开
 * @apiSuccess {Number[]} data.roleId 已选择角色 id
 * @apiSuccess {String} data.roleName 已选择角色名称
 * @apiSuccess {String} data.createGmt 创建时间
 * @apiSuccess {String} data.modifiedGmt 修改时间
 */
