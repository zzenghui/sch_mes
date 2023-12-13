<script setup lang="ts">
import { ref } from 'vue'
import { tableData } from "./data"
import type { tableDataType } from "./data"
import { ElMessage } from "element-plus"
const schoolKey = ref("")
const majorKey = ref("")
const teacherKey = ref("")
const studentInfo = ref("")

//处理编辑
const handleEdit = (row: tableDataType) => {
  ElMessage({
    type: "success",
    message: "编辑成功"
  })
  console.log(row);
}
//分页
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
  <div class="all card">
    <div class="operation">
      <el-select v-model="schoolKey" placeholder="请选择所在学校" size="large">
        <el-option v-for="item in 4" :key="item" :label="item" :value="item" />
      </el-select>&nbsp;
      <el-select v-model="majorKey" placeholder="请选择专业" size="large">
        <el-option v-for="item in 4" :key="item" :label="item" :value="item" />
      </el-select>&nbsp;
      <el-select v-model="teacherKey" placeholder="请选择学期" size="large">
        <el-option v-for="item in 4" :key="item" :label="item" :value="item" />
      </el-select>&nbsp;
      <el-input v-model="studentInfo" size="large" style="width: 270px;" placeholder="请输入学生姓名或身份证号">
        <template #append>
          <el-icon>
            <Search />
          </el-icon>
        </template>
      </el-input>
    </div>
    <el-table :data="tableData" border>
      <el-table-column label="#" type="index" align="center"></el-table-column>
      <el-table-column label="编号" prop="code" align="center"></el-table-column>
      <el-table-column label="所属学校" prop="school" align="center"></el-table-column>
      <el-table-column label="学年" prop="schoolYear" align="center"></el-table-column>
      <el-table-column label="所在专业" prop="major" align="center"></el-table-column>
      <el-table-column label="学制" prop="educationalSystem" align="center"></el-table-column>
      <el-table-column label="学生姓名" prop="name" align="center"></el-table-column>
      <el-table-column label="身份证号" prop="idCard" align="center"></el-table-column>
      <el-table-column label="性别" align="center">
        <template #default="{ row }">
          {{ row.sex == 0 ? "女" : "男" }}
        </template>
      </el-table-column>
      <el-table-column label="班主任名称" prop="teacherName" align="center"></el-table-column>
      <el-table-column label="学习进度" align="center">
        <template #default="{ row }">
          <el-tag v-if="row.progress == 100" type="success">已完成</el-tag>
          <el-tag v-else type="danger">进度{{ row.progress }}%</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="最近登录" prop="preLogin" align="center"></el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button type="primary" icon="Edit" @click="handleEdit(row)"></el-button>
          <el-button type="primary" icon="Setting"></el-button>
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
.all {
  .el-table {
    margin: 30px 0;
  }
}
</style>
