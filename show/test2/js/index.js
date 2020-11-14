new Vue({
    el: '#app',
    data: function () {
        return {
            editableTabsValue: "全部",
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                isdone: "未落实"
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                isdone: "已落实"
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                isdone: "超时"
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                isdone: "未落实"
            }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                isdone: "未落实"
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                isdone: "未落实"
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                isdone: "已落实"
            }],
            form: {
                date1: '',
                region: '',
                name: ''
            },
            // 人员树型结构
            depart: []
        }
    },
    methods: {
        // 获取数据
        getData() {
            axios.get("http://192.168.8.124:8808/system/user/getUserByDept").then((res) => {
                // console.log(res);
                this.depart = res.data.data;


                let data = [
                    { 
                        "id": 100, 
                        "label": "总办公室", 
                        "children": 
                        [
                            { "id": 101, "label": "总公司", "children": [{ "id": 103, "label": "研发部门", "children": [{ "id": 1, "label": "admin" }, { "id": 10005, "label": "王五" }] }, { "id": 104, "label": "市场部门", "children": [{ "id": 10006, "label": "张三" }] }, { "id": 105, "label": "测试部门", "children": [{ "id": 10007, "label": "李四" }] }, { "id": 106, "label": "财务部门" }, { "id": 107, "label": "运维部门" }] }, { "id": 102, "label": "分公司", "children": [{ "id": 108, "label": "市场部门" }, { "id": 109, "label": "财务部门", "children": [{ "id": 10008, "label": "嘟嘟呆" }] }] }] }]

            }).catch((err) => {
                console.log(err);
            })
        }
    },
    created() {
        // 发送请求
        this.getData();
    }
})