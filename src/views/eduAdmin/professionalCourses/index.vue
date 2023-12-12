<script setup lang="ts">
import { ref } from 'vue'
import { tableData } from "./data"
import { ElMessage } from "element-plus"
import type { tableDataType } from "./data"

const courseKey = ref("")
let typeList = ref<string[]>(["2021年1年制", "2021年3年制", "2023年3年制", "2023年1年制", "2022年3年制", "2022年1年制"])

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

//编辑功能
const handleEdit = (row: tableDataType) => {
  ElMessage({
    type: "success",
    message: "编辑成功"
  })
  console.log(row);
}
</script>

<template>
  <div class="professionalCourses card">
    <div class="operation">
      <el-input v-model="courseKey" style="width: 250px;" placeholder="请输入课程名称">
        <template #append>
          <el-icon>
            <Search />
          </el-icon>
        </template>
      </el-input> &nbsp;
      <el-button type="primary" icon="Plus">添加专业课</el-button>
      <el-button type="primary" v-for="item in typeList" plain :key="item">{{ item }}</el-button>
    </div>
    <el-table :data="tableData" border>
      <el-table-column type="index" label="#" align="center"></el-table-column>
      <el-table-column label="编号" prop="code" align="center"></el-table-column>
      <el-table-column label="编码" prop="coding" align="center"></el-table-column>
      <el-table-column label="课程分类" prop="cate" align="center"></el-table-column>
      <el-table-column label="课程名称" prop="name" align="center"></el-table-column>
      <el-table-column label="课程图片" align="center">
        <template #default="{ row }">
          <el-tooltip effect="light" placement="right">
            <template #content>
              <el-image :src="row.img" style="width:200px;height:250px"></el-image>
            </template>
            <el-image :src="row.img" style="width:150px;height:150px"></el-image>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="排序" prop="sort" align="center"></el-table-column>
      <el-table-column label="状态" align="center">
        <template #default="{ row }">
          <el-switch v-model="row.status" :active-value="1" :inactive-value="0"></el-switch>
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
      <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[5, 10, 15, 20]"
        :background="true" layout="total, sizes, prev, pager, next, jumper" :total="50" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" 
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.professionalCourses {
  .el-table {
    margin: 30px 0;
  }
}
</style>
