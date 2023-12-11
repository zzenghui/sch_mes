//搜索功能的数据选择的类型以及数据  和控制台中相同
interface selectOptionsType  {
    value:string
    label:string
}

export const selectOptions:selectOptionsType[] = [
    {
        value:"2021年",
        label:"2021年"
    },
    {
        value:"2022年",
        label:"2022年"
    },
    {
        value:"2023年",
        label:"2023年"
    }
]

//表格数据类型
export interface tableDataType {
    identificationCode:string
    schoolYear:string
    major:string
    educationalSystem:number
    sort:number
    createTime:string
    updateTime:string
    status:number //1代表启用   0代表禁用
}
export const tableData:tableDataType[] = [
    {
        identificationCode:"20210245###",
        schoolYear:"2021年",
        major:"电子商务两年制",
        educationalSystem:2,
        sort:10,
        createTime:"2023-01-15 14:05:20",
        updateTime:"2023-01-15 14:05:20",
        status:1
    },
    {
        identificationCode:"20210245###",
        schoolYear:"2021年",
        major:"电子商务两年制",
        educationalSystem:2,
        sort:10,
        createTime:"2023-01-15 14:05:20",
        updateTime:"2023-01-15 14:05:20",
        status:0
    },
    {
        identificationCode:"20210245###",
        schoolYear:"2021年",
        major:"电子商务两年制",
        educationalSystem:2,
        sort:10,
        createTime:"2023-01-15 14:05:20",
        updateTime:"2023-01-15 14:05:20",
        status:1
    },
    {
        identificationCode:"20210245###",
        schoolYear:"2021年",
        major:"电子商务两年制",
        educationalSystem:2,
        sort:10,
        createTime:"2023-01-15 14:05:20",
        updateTime:"2023-01-15 14:05:20",
        status:1
    },
    {
        identificationCode:"20210245###",
        schoolYear:"2021年",
        major:"电子商务两年制",
        educationalSystem:2,
        sort:10,
        createTime:"2023-01-15 14:05:20",
        updateTime:"2023-01-15 14:05:20",
        status:1
    }
]