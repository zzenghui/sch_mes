interface dataTypesType {
    id: number
    title: string
}

export const dataTypes: dataTypesType[] = [
    {
        id: 1,
        title: "2021年1年制"
    },
    {
        id: 2,
        title: "2021年3年制"
    },
    {
        id: 3,
        title: "2023年3年制"
    },
    {
        id: 4,
        title: "2023年1年制"
    },
    {
        id: 5,
        title: "2022年3年制"
    },
    {
        id: 6,
        title: "2022年1年制"
    },
]

//表格数据
export interface tableDataTypes {
    code: string
    cate: string
    name: string
    img: string
    sort: number
    status: number // 1代表启动 0代表禁用
}

export const tableData: tableDataTypes[] = [
    {
        code: "test00",
        cate: "测试",
        name: "测试课程",
        img: new URL("../../../assets/images/course.jpg", import.meta.url).href,
        sort: 10,
        status: 1
    },
    {
        code: "test00",
        cate: "测试",
        name: "测试课程",
        img: new URL("../../../assets/images/course.jpg", import.meta.url).href,
        sort: 10,
        status: 1
    },
    {
        code: "test00",
        cate: "测试",
        name: "测试课程",
        img: new URL("../../../assets/images/course.jpg", import.meta.url).href,
        sort: 10,
        status: 1
    },
    {
        code: "test00",
        cate: "测试",
        name: "测试课程",
        img: new URL("../../../assets/images/course.jpg", import.meta.url).href,
        sort: 10,
        status: 1
    },
    {
        code: "test00",
        cate: "测试",
        name: "测试课程",
        img: new URL("../../../assets/images/course.jpg", import.meta.url).href,
        sort: 10,
        status: 1
    },
    {
        code: "test00",
        cate: "测试",
        name: "测试课程",
        img: new URL("../../../assets/images/course.jpg", import.meta.url).href,
        sort: 10,
        status: 1
    },
]