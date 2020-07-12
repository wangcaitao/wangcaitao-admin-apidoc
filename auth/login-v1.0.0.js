/**
 * @api {POST} /login 登陆
 * @apiVersion 1.0.0
 * @apiName login
 * @apiGroup auth
 * @apiPermission 无
 *
 * @apiDescription 登陆
 *
 * @apiUse commonRequestHeaderWithoutToken
 *
 * @apiParam {String} phoneNumber 手机号码
 * @apiParam {String} password 密码
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 * @apiSuccess {Object} data 数据
 * @apiSuccess {String} data.token token
 * @apiSuccess {String} data.name 姓名
 * @apiSuccess {String} data.avatarImgUrl 头像
 * @apiSuccess {Object[]} data.menus 菜单
 * @apiSuccess {String} data.menus.name 名称
 * @apiSuccess {String} data.menus.url 地址
 * @apiSuccess {String} data.menus.icon 图标
 * @apiSuccess {Object[]} data.menus.children 子集数据. 字段与父级相同
 * @apiSuccess {String} data.menus.children.name 名称
 * @apiSuccess {String} data.menus.children.url 地址
 * @apiSuccess {String} data.menus.children.icon 图标
 * @apiSuccess {String[]} data.authorizedResources 已授权资源
 */
