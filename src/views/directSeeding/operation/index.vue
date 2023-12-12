<script setup lang='ts' >
import { useRoute, useRouter } from "vue-router"
const route = useRoute()
const router = useRouter()
const goBack = () => {
    router.back(-1)
}
</script>

<template>
    <div class="operation">
        <div class="back" @click="goBack">
            <el-icon>
                <Back />
            </el-icon> &nbsp;
            <span>返回</span>&nbsp; |&nbsp;
        </div>&nbsp;
        <span>{{ route.meta.title }}</span>
    </div>
</template>
 
<style scoped lang="scss">
.operation {
    display: flex;
    align-items: center;

    .back {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
}
</style>