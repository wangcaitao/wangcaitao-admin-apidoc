/**
 * @api {GET} /account-profile 帐号设置 - 我的信息
 * @apiVersion 1.0.0
 * @apiName account-profile
 * @apiGroup personal_center
 * @apiPermission 认证请求
 *
 * @apiDescription 我的信息
 *
 * @apiUse commonAuthorizationHeader
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 * @apiSuccess {Object} data 数据
 * @apiSuccess {String} data.name 姓名
 * @apiSuccess {String} data.phoneNumber 手机号码
 * @apiSuccess {String} data.avatarImgUrl 头像
 * @apiSuccess {String} data.jobNumber 工号
 * @apiSuccess {String} data.email 邮箱
 * @apiSuccess {Number} data.genderCode 性别编码
 * @apiSuccess {String} data.gender 性别
 * @apiSuccess {String[]} data.departmentNames 部门名称
 * @apiSuccess {String[]} data.positionNames 职位名称
 * @apiSuccess {String} data.createGmt 创建时间
 */
