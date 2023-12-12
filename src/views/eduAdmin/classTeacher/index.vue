<script setup lang="ts">
import { ElMessage } from "element-plus"
import { tableData } from "./data"
import type { tableDataTypes } from "./data"
import { ref } from 'vue'
//查询功能
const handleSearch = () => {
  ElMessage({
    type: "success",
    message: "查询成功"
  })
}
//添加老师
const addTeacher = () => {
  ElMessage({
    type: "success",
    message: "添加成功"
  })
}
//编辑功能
const handleEdit = (row: tableDataTypes) => {
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
  <div class="classTeacher card">
    <div class="opeartion">
      <el-input style="width: 250px;" placeholder="请输入班主任姓名">
        <template #append>
          <el-icon @click="handleSearch">
            <Search />
          </el-icon>
        </template>
      </el-input> &nbsp;
      <el-button icon="Plus" type="primary" @click="addTeacher">添加老师</el-button>
    </div>
    <el-table :data="tableData" border>
      <el-table-column type="index" label="#" align="center"></el-table-column>
      <el-table-column label="班主任id" prop="teaId" align="center"></el-table-column>
      <el-table-column label="姓名" prop="name" align="center"></el-table-column>
      <el-table-column label="电话" prop="tel" align="center"></el-table-column>
      <el-table-column label="电话" align="center">
        <template #default="{ row }">
          <el-switch v-model="row.status" :inactive-value="0" :active-value="1"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="{ row }">
          <el-button icon="Edit" type="primary" @click="handleEdit(row)"></el-button>
          <el-button icon="Delete" type="danger"></el-button>
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
.classTeacher {
  .el-table {
    margin: 30px 0;
  }
}
</style>
