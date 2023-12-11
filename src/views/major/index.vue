<script setup lang="ts">
import { ref } from 'vue'
import { selectOptions, tableData } from "./data"
import type { tableDataType } from "./data"
import { ElMessage } from "element-plus"
let selectKey = ref<string>("")
let inputKey = ref<string>("")
//搜索功能
const searchData = () => {
  ElMessage({
    type: "success",
    message: "搜索成功"
  })
}
//改变状态
const handleStatus = () => {
  ElMessage({
    type: "success",
    message: "修改成功"
  })
}
//编辑功能
const handleEdit = (row: tableDataType) => {
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
  <div class="major card">
    <!-- 头部操作功能 -->
    <div class="operation">
      <el-select v-model="selectKey" placeholder="请选择入学时间">
        <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-input v-model="inputKey" style="width: 250px;" placeholder="请输入专业名称">
        <template #append>
          <el-icon @click="searchData">
            <Search />
          </el-icon>
        </template>
      </el-input> &nbsp;
      <el-button type="primary" icon="plus">增加专业</el-button>
    </div>
    <!-- 表格 -->
    <el-table border :data="tableData">
      <el-table-column type="index" label="#"></el-table-column>
      <el-table-column prop="identificationCode" label="专业标识码" align="center"></el-table-column>
      <el-table-column prop="schoolYear" label="学年" align="center"></el-table-column>
      <el-table-column prop="major" label="专业名称" align="center"></el-table-column>
      <el-table-column label="学制" align="center">
        <template #default="{ row }">
          <el-tag type="success">{{ row.educationalSystem }}年</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序" align="center"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" align="center" width="200px"></el-table-column>
      <el-table-column prop="updateTime" label="更新时间" align="center" width="200px"></el-table-column>
      <el-table-column label="状态" align="center">
        <template #default="{ row }">
          <el-switch v-model="row.status" :active-value="1" :inactive-value="0" @change="handleStatus" />
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
    <!-- 分页 -->
    <div class="size">
      <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[5, 10, 15, 20]"
            :background="true" layout="total, sizes, prev, pager, next, jumper" :total="50" @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
      />
    </div>
   
  </div>
</template>

<style scoped lang="scss">
.major {
  .size{
    display: flex;
    justify-content: center;
  }
  .el-table {
    margin: 30px 0;
  }
}
</style>
