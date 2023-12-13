<script setup lang="ts">
import { ElMessage } from "element-plus"
import { tableData } from "./data"
import type { tableDataType } from "./data"
import { ref } from 'vue'
//查询
const handleSearch = () => {
  ElMessage({
    type: "success",
    message: "查询成功"
  })
}
const addTime = () => {
  ElMessage({
    type: "success",
    message: "添加成功"
  })
}
//处理编辑
const handleEdit = (row: tableDataType) => {
  ElMessage({
    type: "success",
    message: "编辑成功"
  })
  console.log(row);
}
//分页功能
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
</script>

<template>
  <div class="schoolTime card">
    <div class="opeartion">
      <el-input style="width: 250px;" placeholder="请输入入学时间">
        <template #append>
          <el-icon @click="handleSearch">
            <Search />
          </el-icon>
        </template>
      </el-input> &nbsp;
      <el-button icon="Plus" type="primary" @click="addTime">添加入学时间</el-button>
    </div>
    <el-table :data="tableData" border>
      <el-table-column label="#" type="index" align="center"></el-table-column>
      <el-table-column label="编号" prop="code" align="center"></el-table-column>
      <el-table-column label="入学时间" prop="time" align="center"></el-table-column>
      <el-table-column label="创建时间" prop="createTime" align="center"></el-table-column>
      <el-table-column label="更新时间" prop="updateTime" align="center"></el-table-column>
      <el-table-column label="更新时间" align="center">
        <template #default="{ row }">
          <el-switch v-model="row.status" :active-value="1" :inactive-value="0"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button type="primary" icon="Edit" @click="handleEdit(row)"></el-button>
          <el-button type="danger" icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
     <div class="size">
            <el-pagination
v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[5, 10, 15, 20]"
              :background="true" layout="total, sizes, prev, pager, next, jumper" :total="50" @size-change="handleSizeChange"
              @current-change="handleCurrentChange" 
            />
          </div>
  </div>
</template>

<style scoped lang="scss">
.schoolTime {
  .el-table {
    margin: 30px 0;
  }
}
</style>
