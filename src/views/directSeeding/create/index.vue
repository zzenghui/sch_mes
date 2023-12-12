<script setup lang="ts">
import Operation from "../operation/index.vue"
import type { FormInstance } from "element-plus"
import { ref } from 'vue'
const form = ref({
  name: "",
  startTime: "",
  endTime: ""
})
const onSubmit = () => {
  console.log("创建成功");
}
const ruleFormRef = ref<FormInstance>()
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
  <div class="create card">
    <Operation></Operation>
    <el-form :model="form" label-width="120px" ref="ruleFormRef">
      <el-form-item label="直播名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入直播名称" style="width: 300px" />
      </el-form-item>
      <el-form-item label="开始时间" prop="startTime">
        <el-date-picker v-model="form.startTime" type="dates" placeholder="请选择开始时间" />
      </el-form-item>
      <el-form-item label="结束时间" prop="endTime">
        <el-date-picker v-model="form.endTime" type="dates" placeholder="请选择结束时间" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.create {
  .el-form {
    margin-top: 30px;
  }
}
</style>
