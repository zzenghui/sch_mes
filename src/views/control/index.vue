<script setup lang="ts">
//引入控制台头部数据
import { DataList, tableData, selectOptions } from "./data"
import { ElMessage } from "element-plus"
import { ref } from 'vue'
let selectKey = ref("")
let inputKey = ref("")
const searchData = () => {
  ElMessage({
    type: "success",
    message: "查找成功"
  })
}
</script>

<template>
  <div class="control card">
    <!-- 头部数据展示 -->
    <div class="date_list">
      <div class="date_list_item" v-for="item in DataList" :key="item.id" :style="{ backgroundColor: item.bgcolor }">
        <div class="circle">
          <el-icon :size="25" :color="item.iconColor">
            <component :is="item.icon" />
          </el-icon>
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="num">{{ item.count }}</div>
      </div>
    </div>
    <!-- 搜索功能 -->
    <div class="search">
      <el-select v-model="selectKey" placeholder="请选择入学时间" size="large">
        <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-input v-model="inputKey" style="width: 250px;" placeholder="请输入专业名称">
        <template #append>
          <el-icon @click="searchData">
            <Search />
          </el-icon>
        </template>
      </el-input>
    </div>
    <!-- 表格展示 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="time" label="入学时间" align="center" />
      <el-table-column prop="major" label="专业名称" align="center" />
      <el-table-column prop="identification" label="专业识别码" align="center" />
      <el-table-column label="学制" align="center">
        <template #default="{ row }">
          <el-tag type="success">{{ row.educationalSystem }}学制</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="num" label="学生数量" align="center" />
    </el-table>
  </div>
</template>

<style scoped lang="scss">
.control {
  .search {
    display: flex;
    margin-bottom: 20px;
  }

  .date_list {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 180px;
    margin-bottom: 50px;

    .date_list_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 20%;
      min-width: 200px;
      border-radius: 15px;
      padding: 20px 0;

      .circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 70px;
        background-color: #fff;
        border-radius: 50%;
      }

      .title {
        color: #fff;
        font-size: 18px;
        margin: 15px 0;
      }

      .num {
        color: #fff;
        font-size: 18px;
      }
    }
  }
}
</style>
