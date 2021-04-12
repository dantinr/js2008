const http = require("http")            //引入nodejs的 http模块

const url = "http://vue.api.comcto.com/api/helloworld.php"     // 接口地址

// 发送get请求

http.get(url, (res) => {            // res是一个对象 包含HTTP响应信息
    res.on('data',function (d){     // data 是一个事件名  当程序接收完数据时触发
        console.log(d)              // d为接收到的 Buffer数据（16进制）
        console.log(d.toString())   // 将Buffer转为 字符串
    })
});

