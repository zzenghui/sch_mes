<script setup lang="ts">
import { ref } from 'vue'
import { tableData } from "./data"
import type { tableDataType } from "./data"
import { ElMessage } from "element-plus"
const testKey = ref("")
//处理编辑
const handleEdit = (row: tableDataType) => {
  ElMessage({
    type: "success",
    message: "修改成功"
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
  <div class="testPaperQuestion card">
    <div class="operation">
        <el-input v-model="testKey" style="width: 250px;" size="large" placeholder="请输入测验题目">
          <template #append>
            <el-icon>
              <Search />
            </el-icon>
          </template>
        </el-input>
      </div>
      <el-table :data="tableData" border>
        <el-table-column label="#" type="index" align="center"></el-table-column>
        <el-table-column label="题目标题" prop="title" align="center"></el-table-column>
        <el-table-column label="题目类型" align="center">
          <template #default="{ row }">
            <el-tag type="success" v-if="row.cate == 1">单选题</el-tag>
            <el-tag type="info" v-else-if="row.cate == 2">多选题</el-tag>
            <el-tag type="danger" v-else>简答题</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="题目分数" prop="fraction" align="center"></el-table-column>
        <el-table-column label="创建时间" prop="createTime" align="center"></el-table-column>
        <el-table-column label="更新时间" prop="updateTime" align="center"></el-table-column>
        <el-table-column label="状态" align="center">
          <template #default="{ row }">
            <el-switch v-model="row.status" :inactive-value="0" :active-value="1"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="{ row }">
            <el-button type="primary" icon="Edit" @click="handleEdit(row)"></el-button>
            <el-button type="danger" icon="Delete"></el-button>
            <el-button type="success" icon="Setting"></el-button>
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
.testPaperQuestion{
  .el-table{
    margin: 30px 0;
  }
}
</style>
