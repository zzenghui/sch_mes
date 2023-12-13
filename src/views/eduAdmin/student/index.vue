<script setup lang="ts">
import { ref } from 'vue'
import { tableData } from "./data"
import type { tableDataTypes } from "./data"
import { ElMessage } from "element-plus"
import exportExcel from "../../../utils/exportExcel"
const schoolKey = ref("")
const majorKey = ref("")
const semesterKey = ref("")
const classKey = ref("")
const IDKey = ref("")

//导出excel
const exportXlsx = () => {
  exportExcel(tableData,["code","school","schoolYear","major","educationalSystem","name","IdCard","sex","classTeacher"],["编号","学校名称","学年","专业","学制","名称","身份证号","性别(0:女/1:男)","老师"])
}

//修改一项
const handleEdit = (row: tableDataTypes) => {
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
  <div class="student card">
    <div class="operation">
      <el-select v-model="schoolKey" placeholder="请选择所在学校" size="large">
        <el-option v-for="item in 4" :key="item" :label="item" :value="item" />
      </el-select>&nbsp;
      <el-select v-model="majorKey" placeholder="请选择专业" size="large">
        <el-option v-for="item in 4" :key="item" :label="item" :value="item" />
      </el-select>&nbsp;
      <el-select v-model="semesterKey" placeholder="请选择学期" size="large">
        <el-option v-for="item in 4" :key="item" :label="item" :value="item" />
      </el-select>&nbsp;
      <el-select v-model="classKey" placeholder="请选择所属班级" size="large">
        <el-option v-for="item in 4" :key="item" :label="item" :value="item" />
      </el-select>&nbsp;
      <el-input v-model="IDKey" style="width: 250px;" size="large" placeholder="请输入学生姓名和身份证">
        <template #append>
          <el-icon>
            <Search />
          </el-icon>
        </template>
      </el-input>&nbsp;
      <el-button type="success" size="large" @click="exportXlsx">导出</el-button> <br><br>
      <el-button type="primary" icon="Plus">添加学生</el-button>
      <el-button type="primary" icon="Download">导入</el-button>
      <el-button type="primary" icon="Upload">上传身份证</el-button>
      <el-button type="primary" icon="Upload">上传学号</el-button>
      <el-button type="primary" icon="Upload">检测异常</el-button>
      <el-button type="primary" icon="Camera">打印毕业照</el-button>
      <el-button type="primary" icon="Edit">批量完成</el-button>
      <el-button type="primary" icon="Edit">批量操作学习记录</el-button>
    </div>
    <el-table border :data="tableData">
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column label="编号" prop="code" align="center"></el-table-column>
      <el-table-column label="所属学校" prop="school" align="center"></el-table-column>
      <el-table-column label="学年" prop="schoolYear" align="center"></el-table-column>
      <el-table-column label="专业" prop="major" align="center"></el-table-column>
      <el-table-column label="年制" align="center">
        <template #default="{ row }">
          <el-tag type="success">{{ row.educationalSystem }}年制</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="学生姓名" prop="name" align="center"></el-table-column>
      <el-table-column label="身份证号" prop="IdCard" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column label="性别" align="center">
        <template #default="{ row }">
          {{ row == 0 ? "女" : "男" }}
        </template>
      </el-table-column>
      <el-table-column label="班主任名称" prop="classTeacher" align="center"></el-table-column>
      <el-table-column label="状态" align="center">
        <template #default="{ row }">
          <el-switch v-model="row.status" :inactive-value="0" :active-value="1"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="200px">
        <template #default="{ row }">
          <el-button type="primary" icon="Edit" @click="handleEdit(row)"></el-button>
          <el-button type="danger" icon="Delete"></el-button>
          <el-button type="warning" icon="Setting"></el-button>
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
.student {
  .el-table {
    margin: 30px 0;
  }
}
</style>
