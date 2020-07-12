#!/bin/bash

# 删除文档
rm -rf docs

# 生成文档
apidoc . -o docs
