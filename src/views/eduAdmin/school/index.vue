<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from "element-plus"
import { tableData } from "./data"
import type { tableDataType } from "./data"
let inputKey = ref<string>("")
//搜索
const handleSearch = () => {
  ElMessage({
    type: "success",
    message: "搜索成功"
  })
}
//添加学校
const addSchool = () => {
  ElMessage({
    type: "success",
    message: "添加成功"
  })
}
//编辑功能
const handleEdit = (row: tableDataType) => {
  ElMessage({
    type: "success",
    message: "编辑成功"
  })
  console.log(row);
}
//分页数据
let currentPage4 = ref<number>(4)
let pageSize4 = ref<number>(5)
const handleSizeChange = () => {
  ElMessage({
    type: "success",
    message: "长度改变"
  })
}
const handleCurrentChange = () => {
  ElMessage({
    type: "success",
    message: "页码改变"
  })
}
//复制域名
const copyDomain = (data: string) => {
  let txa = document.createElement("textarea");
  txa.value = data;
  document.body.appendChild(txa)
  txa.select();
  document.execCommand("Copy");
  document.body.removeChild(txa);
  ElMessage({
    type: "success",
    message: "复制成功"
  })
}
</script>

<template>
  <div class="school card">
    <div class="operation">
      <el-input v-model="inputKey" style="width: 250px;" placeholder="请输入学校名称">
        <template #append>
          <el-icon @click="handleSearch">
            <Search />
          </el-icon>
        </template>
      </el-input> &nbsp;
      <el-button icon="Plus" type="primary" @click="addSchool">添加学校</el-button>
    </div>
    <el-table :data="tableData" border>
      <el-table-column type="index" label="#" align="center"></el-table-column>
      <el-table-column label="学校名称" prop="name" align="center"></el-table-column>
      <el-table-column label="创建时间" prop="createTime" align="center"></el-table-column>
      <el-table-column label="更新时间" prop="updateTime" align="center"></el-table-column>
      <el-table-column label="学生页域名" align="center">
        <template #default="{ row }">
          {{ row.domainName }}
          <el-button type="primary" plain @click="copyDomain(row.domainName)">复制</el-button>
        </template>
      </el-table-column>
      <el-table-column label="状态" align="center">
        <template #default="{ row }">
          <el-switch v-model="row.status" :active-value="1" :inactive-value="0"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="{ row }">
          <el-button type="primary" icon="Edit" @click="handleEdit(row)"></el-button>
          <el-button type="danger" icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="size">
      <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[5, 10, 15, 20]"
        :background="true" layout="total, sizes, prev, pager, next, jumper" :total="50" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" 
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.school {
  .el-table {
    margin: 30px 0;
  }
}
</style>
