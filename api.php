<?php

    $list = [
      [
          "id"      => 100,
          "name"    => "zhangsan",
          "age"     => 11,
          "sex"     => "男"
      ],
        [
            "id"      => 101,
            "name"    => "lisi",
            "age"     => 22,
            "sex"     => "女"
        ],
        [
            "id"      => 102,
            "name"    => "wangwu",
            "age"     => 33,
            "sex"     => "保密"
        ],
        [
            "id"      => 100,
            "name"    => "zhaoliu",
            "age"     => 44,
            "sex"     => "男"
        ]
    ];

    echo json_encode($list);
