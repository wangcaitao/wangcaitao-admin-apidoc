# 文档说明

## 规范说明

1. 状态码说明. `200` 表示成功， `401` 表示未认证，其他状态码全部当错误处理.
1. `Content-Type` 说明. `POST`, `PUT`, `DELETE` 请求是 `application/json`, 上传文件是 `multipart/form-data`, `GET` 请求可为空.
1. 参数说明. 无 `可选` 标记为 `必选` 参数.
1. 批量删除接口的请求参数是数组形式.

    ```json
    [1, 2, 3]
    ```

1. 上传文件参数为 `file`.
1. 返回数据结构说明.

    ```json
    {
        "code": 200,
        "msg": "请求成功",
        "pageNum": 1,
        "pageSize": 10,
        "pages": 1,
        "rows": 10,
        "data": []
    }
    ```

    | 字段     | 类型              | 描述                         |
    | -------- | ----------------- | ---------------------------- |
    | code     | Number            | 状态码                       |
    | msg      | String            | 消息                         |
    | pageNum  | Number            | 当前页码. 仅在分页查询时返回 |
    | pageSize | Number            | 每页大小. 仅在分页查询时返回 |
    | pages    | Number            | 总页数. 仅在分页查询时返回   |
    | rows     | Number            | 总行数. 仅在分页查询时返回   |
    | data     | Object / Object[] | 数据                         |
