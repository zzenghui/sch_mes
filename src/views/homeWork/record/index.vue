<script setup lang="ts">
import exportExcel from '@/utils/exportExcel';
import { ref } from 'vue'
import { tableData } from './data';
import { ElMessage } from "element-plus"
const studentKey = ref("")
const majorKey = ref("")
const semesterKey = ref("")
const courseKey = ref("")
const sutdentInfo = ref("")
const dateTime = ref("")
const exportXlsx = () => {
  exportExcel(tableData, ["schoolName", "entrance", "major", "studentName", "idCard", "courseName", "testName", "allTest", "completeNum", "successNum", "score", "testTime"], ["学校名称", "入学时间", "专业名称", "学生姓名", "学生身份证号", "课程名称", "习题集名称", "总提数", "已完成题目数", "正确题目数", "测验得分", "测验时间"])
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
  <div class="record card">
    <div class="operation">
      <div class="line1">
        <div class="left">
          <el-select v-model="studentKey" placeholder="请选择所在学校" size="large">
            <el-option v-for="item in 4" :key="item" :label="item" :value="item" />
          </el-select>&nbsp;
          <el-select v-model="majorKey" placeholder="请选择专业" size="large">
            <el-option v-for="item in 4" :key="item" :label="item" :value="item" />
          </el-select>&nbsp;
          <el-select v-model="semesterKey" placeholder="请选择学期" size="large">
            <el-option v-for="item in 4" :key="item" :label="item" :value="item" />
          </el-select>&nbsp;
          <el-select v-model="courseKey" placeholder="请选择课程" size="large">
            <el-option v-for="item in 4" :key="item" :label="item" :value="item" />
          </el-select>&nbsp;
          <el-input v-mode="sutdentInfo" placeholder="请输入学生姓名或电话" style="width: 250px;" size="large"></el-input>
        </div>
        <el-button type="primary">置底</el-button>
      </div> <br>
      <div class="line2">
        <el-date-picker v-model="dateTime" type="datetimerange" start-placeholder="请选择开始时间" end-placeholder="请选择结束时间" />
        &nbsp;<el-button type="primary" icon="Search">搜索</el-button>
        <el-button type="success" icon="Download" @click="exportXlsx">批量导出</el-button>
      </div>
    </div>
    <el-table :data="tableData" border>
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column label="学校名称" prop="schoolName" align="center"></el-table-column>
      <el-table-column label="入学时间" prop="entrance" align="center"></el-table-column>
      <el-table-column label="专业名称" prop="major" align="center"></el-table-column>
      <el-table-column label="学生姓名" prop="studentName" align="center"></el-table-column>
      <el-table-column label="身份证号" prop="idCard" align="center"></el-table-column>
      <el-table-column label="课程名称" prop="courseName" align="center"></el-table-column>
      <el-table-column label="习题集名称" prop="testName" align="center"></el-table-column>
      <el-table-column label="总提数" prop="allTest" align="center"></el-table-column>
      <el-table-column label="已完成题目数" prop="completeNum" align="center"></el-table-column>
      <el-table-column label="正确题目数" prop="successNum" align="center"></el-table-column>
      <el-table-column label="测验得分" prop="score" align="center"></el-table-column>
      <el-table-column label="测验时间" prop="testTime" align="center"></el-table-column>
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
.record {
  .operation {
    .line1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .el-table {
    margin: 30px 0;
  }
}
</style>
