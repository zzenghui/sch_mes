import { ref } from "vue"
import { ElMessage } from "element-plus"
const usePagination = (data: any) => {
    console.log(data);
    let currentPage4 = ref<number>(4)
    let pageSize4 = ref<number>(5)
    const handleSizeChange = (size: any) => {
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
    return {
        currentPage4,
        pageSize4,
        handleCurrentChange,
        handleSizeChange
    }
}

export default usePagination