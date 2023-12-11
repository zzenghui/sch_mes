interface tableDataType {
    title:string
    content:string
    sort:number
    createTime:string
    updateTime:string
    isUp:boolean
    status:number // 0代表禁用  1代表启用
}

export const tableData:tableDataType[] = [
    {
        title:"关于2022级非全日制中专学生第二学期线上学习的通知",
        content:"根据新学期春季教学计划,现安排非全日制教学",
        sort:10,
        createTime:"2023-03-15 13:31:37",
        updateTime:"2023-03-15 16:20:22",
        isUp:true,
        status:1
    },
    {
        title:"关于2022级非全日制中专学生第二学期线上学习的通知",
        content:"根据新学期春季教学计划,现安排非全日制教学",
        sort:10,
        createTime:"2023-03-15 13:31:37",
        updateTime:"2023-03-15 16:20:22",
        isUp:false,
        status:1
    },
    {
        title:"关于2022级非全日制中专学生第二学期线上学习的通知",
        content:"根据新学期春季教学计划,现安排非全日制教学",
        sort:10,
        createTime:"2023-03-15 13:31:37",
        updateTime:"2023-03-15 16:20:22",
        isUp:false,
        status:1
    },
    {
        title:"关于2022级非全日制中专学生第二学期线上学习的通知",
        content:"根据新学期春季教学计划,现安排非全日制教学",
        sort:10,
        createTime:"2023-03-15 13:31:37",
        updateTime:"2023-03-15 16:20:22",
        isUp:false,
        status:1
    },
]