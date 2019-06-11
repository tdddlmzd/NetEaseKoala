<?php
    $regist_Username = $_POST['username'];
    $regist_Password = $_POST['password'];

    
    $servername = 'localhost';
    $dbms_username = 'root';
    $dbms_password = '';
    $db_name = 'user';

    $conn = new mysqli($servername, $dbms_username, $dbms_password, $db_name);

    if($conn->connect_error) {
        echo '连接数据库失败';
        return;
    }

    $conn->query('set names utf8');

    //1.    检测用户名是否存在
    $sql = "
        SELECT id FROM `users` WHERE `users`.`username`='$username'
    ";

    //$conn->query()执行参数指定的SQL语句
    $result = $conn->query($sql);
    //SELECT语句在执行之后，会返回一个对象。这个对象有一个属性num_rows，代表的是查询到的数据的条数
    if($result->num_rows > 0) {
        echo '{"result":false,"msg":"用户名已经存在"}';
        return;
    }

    //2.    插入新用户到表中
    $sql = "
        INSERT INTO `username`
        (`id`, `username`, `password`)
        VALUES
        (NULL, '$regist_Username', '$regist_Password')
    ";

    $result = $conn->query($sql);
    if($result) {
        // header("location: http://localhost:8080/koumili/html/login.html");
        echo '{"result":true}';
    } else {
        echo '{"result":false,"msg":"用户名已经存在"}';
    }

?>