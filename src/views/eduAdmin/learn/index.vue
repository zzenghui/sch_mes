<script setup lang="ts">
import { ref } from 'vue'
import { tableData } from "./data"
import { ElMessage } from "element-plus"
import exportExcel from '@/utils/exportExcel'
const studentKey = ref("")
const majorKey = ref("")
const semesterKey = ref("")
const courseKey = ref("")
const sutdentInfo = ref("")
const dateTime = ref("")
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
//导出excel
const exportXlsx = () => {
  exportExcel(tableData,["code","school","schoolYear","major","name","idCard","chapterName","learnTime"],["编号","所属学校","学年","专业","名称","身份证号","小结名称","学习时间"])
}
</script>

<template>
  <div class="learn card">
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
        <el-button type="success" icon="Download" @click="exportXlsx">导出</el-button>
      </div>
    </div>
    <el-table :data="tableData" border>
      <el-table-column label="#" type="selection" align="center"></el-table-column>
      <el-table-column label="编号" prop="code" align="center"></el-table-column>
      <el-table-column label="所属学校" prop="school" align="center"></el-table-column>
      <el-table-column label="学年" prop="schoolYear" align="center"></el-table-column>
      <el-table-column label="专业名称" prop="major" align="center"></el-table-column>
      <el-table-column label="学生姓名" prop="name" align="center"></el-table-column>
      <el-table-column label="学生身份证号" prop="idCard" align="center"></el-table-column>
      <el-table-column label="小结名称" prop="chapterName" align="center"></el-table-column>
      <el-table-column label="学习时间" prop="learnTime" align="center"></el-table-column>
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
.learn {
  .operation {
    .line2 {
      display: flex;
      align-items: center;
      width: 600px;
    }

    .line1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
   .el-table {
      margin: 30px 0;
    }
}
</style>
