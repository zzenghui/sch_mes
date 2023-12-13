<script setup lang="ts">
import { ref } from 'vue'
import { tableData } from "./data"
import type { tableDataType } from "./data"
import {ElMessage} from "element-plus"
const roleKey = ref("")
const handleEdit = (row: tableDataType) => {
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
  <div class="role card">
    <div class="operation">
      <el-input v-model="roleKey" style="width: 250px;" size="large" placeholder="请输入角色名称">
        <template #append>
          <el-icon>
            <Search></Search>
          </el-icon>
        </template>
      </el-input> &nbsp;
      <el-button type="primary" icon="Plus">添加角色</el-button>
    </div>
    <el-table :data="tableData" border>
      <el-table-column label="#" type="index" align="center"></el-table-column>
      <el-table-column label="角色名称" prop="roleName" align="center"></el-table-column>
      <el-table-column label="角色秒速" prop="desc" align="center"></el-table-column>
      <el-table-column label="创建时间" prop="createTime" align="center"></el-table-column>
      <el-table-column label="更新时间" prop="updateTime" align="center"></el-table-column>
      <el-table-column label="状态" align="center">
        <template #default="{ row }">
          <el-switch v-model="row.status" :inactive-value="0" :active-value="1"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="{ row }">
          <el-button icon="Edit" type="primary" @click="handleEdit(row)"></el-button>
          <el-button icon="Delete" type="danger"></el-button>
          <el-button icon="Setting" type="warning"></el-button>
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
.role {
  .el-table {
    margin: 30px 0;
  }
}
</style>
