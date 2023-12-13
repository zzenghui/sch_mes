<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { TabsPaneContext, UploadProps, UploadUserFile, FormInstance } from 'element-plus'
import { ElMessage } from "element-plus"
import { Plus } from '@element-plus/icons-vue'
const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const ruleFormRef = ref<FormInstance>()
interface RuleForm {
  name: string,
  phone: string,
  logoImg: string,
  code: string
}
const ruleForm = ref<RuleForm>({
  name: "",
  phone: "",
  logoImg: "",
  code: ""
})
//表单规则
const rules = reactive({
  name: [
    { required: true, message: "请输入公司名称", trigger: "blur" }
  ],
  phone: [
    { required: true, message: "请输入公司热线", trigger: "blur" }
  ],
  logoImg: [
    { required: true, message: "请选择公司logo", trigger: "blur" }
  ],
  code: [
    { required: true, message: "请输百度统计代码", trigger: "blur" }
  ]
})

//更新成功
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

//重置
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const fileList = ref<UploadUserFile[]>([])

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}

const handleLimit = () => {
  ElMessage({
    type: "warning",
    message: "只能上传一张图片"
  })
}

//上传成功
const handleSuccessPicture: UploadProps['onSuccess'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
}

</script>

<template>
  <el-card>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="系统配置" name="first">
        <el-form ref="ruleFormRef" :model="ruleForm" label-width="120px" class="demo-ruleForm" status-icon :rules="rules">
          <el-form-item label="公司名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入公司名称" style="width: 300px;"></el-input>
          </el-form-item>
          <el-form-item label="公司热线" prop="phone">
            <el-input v-model="ruleForm.phone" placeholder="请输入公司热线" style="width: 300px;"></el-input>
          </el-form-item>
          <el-form-item label="公司logo" prop="logoImg">
            <el-upload
v-model:file-list="fileList" :on-preview="handlePictureCardPreview" action="#" :limit="1"
              list-type="picture-card" :auto-upload="false" :on-exceed="handleLimit" :on-success="handleSuccessPicture"
>
              <el-icon>
                <Plus />
              </el-icon>
            </el-upload>
            <el-dialog v-model="dialogVisible">
              <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
          </el-form-item>
          <el-form-item label="百度统计代码" prop="code">
            <el-input v-model="ruleForm.code" placeholder="百度统计代码" style="width: 300px;"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">
              确定
            </el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<style scoped lang="scss"></style>
