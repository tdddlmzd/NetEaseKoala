
var regist_btn1 = document.querySelector('#regist-main .bottom .btn1')
console.log(regist_btn1)

regist_btn1.onclick = function(){

    var regist_Username = document.querySelector('#regist-main .usermima .shouji input').value

    var regist_Password = document.querySelector('#regist-main .usermima .mima input').value

    let xhr = new XMLHttpRequest()

    xhr.open('post','/php/regist.php',true)

    xhr.onreadystatechange = function(){
        if(this.readyState !==4){
            return
        }
        if(this.status >=200 && this.status<300){
            console.log(this.responseText)
            var resp = JSON.parse(this.responseText)
            if (resp.result) {
                // location.href = './login.html'
                console.log('你已经注册成功')
                console.log(regist_Username)
                location.href = '../html/loginpage.html'
                // localStorage.setItem('regist_Username',regist_Username);

            } else {
                document.querySelector('.error-message').innerHTML = '用户名已存在'
            }
    }else{
            console.error('请求错误')
        }
    }

    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    xhr.send(`username=${regist_Username}&&password=${regist_Password}`)
}
