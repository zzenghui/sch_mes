<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from "element-plus"
import { tableData } from "./data"
let inputKey = ref<string>("")
//搜索功能
const searchData = () => {
  ElMessage({
    type: "success",
    message: "查找成功"
  })
}
//添加公告
const addNotice = () => {
  ElMessage({
    type: "success",
    message: "添加成功"
  })
}
//处理置顶
const handleUp = () => {
  ElMessage({
    type: "success",
    message: "修改成功"
  })
}
//处理状态
const handleStatus = () => {
  ElMessage({
    type: "success",
    message: "修改成功"
  })
}
//修改某一项
const handleUpdateItem = () => {
  ElMessage({
    type: "success",
    message: "修改成功"
  })
}
//删除某一项
const handleDeleteItem = () => {
  ElMessage({
    type: "success",
    message: "删除成功"
  })
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
  <div class="notice card">
    <!-- 头部操作功能 -->
    <div class="operation">
      <el-input v-model="inputKey" style="width: 250px;" placeholder="请输入标题">
        <template #append>
          <el-icon @click="searchData">
            <Search />
          </el-icon>
        </template>
      </el-input> &emsp;
      <el-button type="primary" icon="Plus" @click="addNotice">
        添加通知、公告
      </el-button>
    </div>
    <!-- 表格数据 -->
    <el-table :data="tableData" border>
      <el-table-column type="index" label="#" align="center" />
      <el-table-column prop="title" label="标题" align="center" />
      <el-table-column prop="content" label="通知内容" align="center" />
      <el-table-column prop="sort" label="排序" align="center" />
      <el-table-column prop="createTime" label="创建时间" align="center" />
      <el-table-column prop="updateTime" label="更新时间" align="center" />
      <el-table-column label="是否置顶" align="center">
        <template #default="{ row }">
          <el-switch v-model="row.isUp" :active-value="true" :inactive-value="false" @change="handleUp" />
        </template>
      </el-table-column>
      <el-table-column label="状态" align="center">
        <template #default="{ row }">
          <el-switch v-model="row.status" :active-value="1" :inactive-value="0" @change="handleStatus" />
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <el-button type="primary" icon="Edit" @click="handleUpdateItem"></el-button>
        <el-button type="danger" icon="Delete" @click="handleDeleteItem"></el-button>
      </el-table-column>
    </el-table>
    <!-- 分页功能 -->
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
.notice {
  .operation {
    margin-bottom: 20px;
  }

  .size {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
}
</style>
