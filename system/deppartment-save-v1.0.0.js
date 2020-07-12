/**
 * @api {POST} /department 部门管理 - 保存
 * @apiVersion 1.0.0
 * @apiName department-save
 * @apiGroup system
 * @apiPermission 授权请求
 *
 * @apiDescription 保存. 新增子集 `parentId` 不能为空.
 *
 * @apiUse commonRequestHeader
 *
 * @apiParam {Number} [parentId] 父级 id
 * @apiParam {String} name 名称
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 消息
 */
