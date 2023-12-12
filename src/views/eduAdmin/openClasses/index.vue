<script setup lang="ts">
import { ref } from 'vue'
import { dataTypes, tableData } from "./data"
import type { tableDataTypes } from "./data"
import { ElMessage } from "element-plus"
const inputKey = ref<string>("")
//搜索功能
const handleSearch = () => {
  ElMessage({
    type: "success",
    message: "搜索成功"
  })
}
//添加公开课
const addOpenClass = () => {
  ElMessage({
    type: "success",
    message: "添加成功"
  })
}
//编辑一项
const handleEdit = (row: tableDataTypes) => {
  ElMessage({
    type: "success",
    message: "修改成功"
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
</script>

<template>
  <div class="openClass card">
    <div class="operation">
      <el-input v-model="inputKey" style="width: 250px;" placeholder="请输入课程名称">
        <template #append>
          <el-icon @click="handleSearch">
            <Search />
          </el-icon>
        </template>
      </el-input> &nbsp;
      <el-button type="primary" icon="Plus" @click="addOpenClass">添加公开课</el-button>
      <el-button v-for="item in dataTypes" type="primary" plain :key="item.id">{{ item.title }}</el-button>
    </div>
    <el-table :data="tableData" border>
      <el-table-column label="#" type="index" align="center"></el-table-column>
      <el-table-column label="课程编码" prop="code" align="center"></el-table-column>
      <el-table-column label="课程分类" prop="cate" align="center"></el-table-column>
      <el-table-column label="课程名称" prop="name" align="center">
        <template #default="{ row }">
          <el-tooltip placement="right-start" effect="light">
            <template #content>
              <el-image :src="row.img" style="width: 300px;height: 150px;" lazy></el-image>
            </template>
            <el-image :src="row.img" style="width: 100px;height: 50px;" lazy></el-image>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="排序" prop="sort" align="center"></el-table-column>
      <el-table-column label="状态" align="center">
        <template #default="{ row }">
          <el-switch v-model="row.status" :inactive-value="0" :active-value="1"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="{ row }">
          <el-button type="primary" icon="Edit" @click="handleEdit(row)"></el-button>
          <el-button type="danger" icon="Delete"></el-button>
          <el-button type="warning" icon="Setting"></el-button>
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
.openClass {
  .el-table {
    margin: 30px 0;
  }
}
</style>
