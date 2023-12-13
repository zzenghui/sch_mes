<script setup lang='ts' >
import { ref } from 'vue'
import { tableData } from "./data"
import type { tableDataType } from "./data"
import { ElMessage } from "element-plus"
const courseKey = ref("")
const exerName = ref("")
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
  <div class="exercise card">
    <div class="operation">
      <el-select v-model="courseKey" placeholder="请选择课程" size="large">
        <el-option v-for="item in 4" :key="item" :label="item" :value="item" />
      </el-select>&nbsp;
      <el-input v-model="exerName" style="width: 250px;" size="large" placeholder="请输入习题集名称">
        <template #append>
          <el-icon>
            <Search />
          </el-icon>
        </template>
      </el-input> &nbsp;
      <el-button type="primary" icon="Plus">导入习题集</el-button>
    </div>
    <el-table :data="tableData" border>
      <el-table-column label="#" type="index" align="center"></el-table-column>
      <el-table-column label="习题集编号" prop="code" align="center"></el-table-column>
      <el-table-column label="课程名称" prop="courseName" align="center"></el-table-column>
      <el-table-column label="课程编码" prop="coding" align="center"></el-table-column>
      <el-table-column label="习题集名称" prop="testName" align="center"></el-table-column>
      <el-table-column label="习题集类型" align="center">
        <template #default="{ row }">
          <el-tag type="warning" v-if="row.testCate == 1">综合作业 </el-tag>
          <el-tag type="success" v-else>简答练习</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="习题集描述" prop="testDesc" align="center"></el-table-column>
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
.exercise {
  .el-table {
    margin: 30px 0;
  }
}
</style>