<?php
    $server_name = 'localhost';
    $db_username = 'root';
    $db_password = '';
    $db_name = 'bingxixi';
    
    //连接数据库
    $conn = new mysqli($server_name, $db_username, $db_password, $db_name);

    //判断连接是否成功
    if($conn->connect_error) {
        echo "连接数据库失败。" . $conn->connect_error;
        return; //可以在文件的最外层return
    }

    $conn->query('set names utf8');


    $sql = "
        SELECT `id`, `name`, `price`, `description` as `desc`, `stock` as `count`, `img`, `username` 
        FROM `cart` 
        WHERE username='cuijn'
    ";

    //执行SQL语句
    $result = $conn->query($sql);

    //执行SQL语句时，如果SQL语句为INSERT、UPDATE、DELETE，执行结果返回值为Boolean值
    //SELECT语句时，返回值为一个对象。这个对象有一个属性num_rows，它标识了查询结果的条目数
    //当条目数大于0时，我们就可以通过这个对象的fetch_assoc()函数，将一条数据从$result中取出
    //它取出的数据结构为一个关联数组(JS中的对象,键值对)
    //array("id"=>"1", "name"=>"鼠标", ...)
    $resp = array();    //空数组

    //设定响应头为json，这样jQuery就能帮我们去进行parse
    header("Content-Type: text/json");
    if($result->num_rows > 0) {
        //有数据
        while(($row=$result->fetch_assoc()) !== null) {
            $resp []= $row; //  相当于JS数组中的push
        }

        echo json_encode($resp);    //将resp转换为JSON字符串，并返回
    } else {
        //没有数据
        // echo '{"result":false, data: []}'
        echo "[]";
    }

    


?>