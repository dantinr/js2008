const axios = require("axios")          // 引入 axios模块

let url = "http://vue.api.comcto.com/api/helloworld.php"
axios.get(url).then(function(d){
    console.log(d.data)
})