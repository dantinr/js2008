<?php
    //echo "Hello PHP";
    //echo time();
    //let arr = [];

    //echo "111";
    $data = [
        "name"  => "zhangsan",
        "age"   => 22,
        "email" => "zhangsan@qq.com"
    ];


    //将 数组转为 JSON字符串
    echo json_encode($data);
