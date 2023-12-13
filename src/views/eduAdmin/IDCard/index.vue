<script setup lang="ts">
import { ElMessage } from "element-plus"
import { ref } from 'vue'
import { tableData } from "./data"
import type { tableDataType } from "./data"
import exportExcel from "@/utils/exportExcel"
//获取日期
const dateValue = ref("")
const IdKey = ref("")
//查询功能
const handleSearch = () => {
  ElMessage({
    type: "success",
    message: "查询成功"
  })
}
//查看某一项
const handleShow = (row: tableDataType) => {
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
//导出学生信息
const exportStudentInfo = () => {
  exportExcel(tableData, ["name", "sex", "nation", "birthday", "address", "idCard", "Issuance", "validityPeriod", "ImportTime"], ["姓名", "性别", "民族", "出生日期", "地址", "身份证号", "签发机关", "有效日期", "导入时间"])
}
</script>

<template>
  <div class="IdCard card">
    <div class="opeartion">
      <el-date-picker v-model="dateValue" type="datetimerange" start-placeholder="请选择起始日期" end-placeholder="请选择结束日期" />
      &nbsp;
      <el-input v-model="IdKey" style="width: 250px;" placeholder="请输入学生姓名或身份证号">
        <template #append>
          <el-icon @click="handleSearch">
            <Search />
          </el-icon>
        </template>
      </el-input>
      &nbsp;
      <el-button type="primary" @click="exportStudentInfo">导出学生信息</el-button>
    </div>
    <el-table :data="tableData" border>
      <el-table-column label="#" type="index" align="center"></el-table-column>
      <el-table-column label="学生姓名" prop="name" align="center" width="100px"></el-table-column>
      <el-table-column label="性别" align="center" width="60px">
        <template #default="{ row }">
          {{ row.sex == 0 ? "女" : "男" }}
        </template>
      </el-table-column>
      <el-table-column label="民族" prop="nation" align="center" width="60px"></el-table-column>
      <el-table-column label="出生年月日" prop="birthday" align="center"></el-table-column>
      <el-table-column label="地址" prop="address" align="center"></el-table-column>
      <el-table-column label="公民身份号码" prop="idCard" align="center"></el-table-column>
      <el-table-column label="签发机关" prop="Issuance" align="center"></el-table-column>
      <el-table-column label="有效期限" prop="validityPeriod" align="center"></el-table-column>
      <el-table-column label="导入时间" prop="ImportTime" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="{ row }">
          <el-button type="primary" icon="Rank" @click="handleShow(row)"></el-button>
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
.IdCard {
  .opeartion {
    display: flex;
    align-items: center;
    width: 700px;

    .el-date-picker {
      width: 300px !important;
    }
  }

  .el-table {
    margin: 30px 0;
  }
}
</style>
