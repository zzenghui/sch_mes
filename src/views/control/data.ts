//控制台头部数据展示的数据标注以及数据
interface DataListItem{
    id:number
    icon:string
    count:number
    title:string
    bgcolor:string
    iconColor:string
}

export const DataList:DataListItem[] = [
    {
        id:1,
        icon:"CreditCard",
        iconColor:"#FC6437",
        count:13986,
        title:"总学员数",
        bgcolor:"#28ACEF"
    },
    {
        id:2,
        icon:"Operation",
        iconColor:"#0CD7B3",
        count:72,
        title:"总课程数",
        bgcolor:"#FC6D43"
    },
    {
        id:3,
        icon:"CreditCard",
        iconColor:"#FC6437",
        count:155,
        title:"总测验集数",
        bgcolor:"#1DDAB8"
    },
    {
        id:4,
        icon:"GobletSquareFull",
        iconColor:"#46ADE3",
        count:20,
        title:"试卷总数",
        bgcolor:"#008000"
    }
]

//控制台表格的数据标注及数据
interface tableDataType {
    time:string //入学时间
    major:string  //专业名称
    identification:string //专业标识码
    educationalSystem:number  //学制
    num:number          //学生数量
}

export const tableData:tableDataType[] = [
    {
        time:"2021年",               
        major:"新能源汽车运用与维修专业",
        identification:"003xjsyghrksl",
        educationalSystem:3,        
        num:100                    
    },
    {
        time:"2021年",               
        major:"新能源汽车运用与维修专业",
        identification:"003xjsyghrksl",
        educationalSystem:3,      
        num:100    
    },
    {
        time:"2021年",               
        major:"新能源汽车运用与维修专业",
        identification:"003xjsyghrksl",
        educationalSystem:3,      
        num:100   
    }
]

//搜索功能的数据选择的类型以及数据
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