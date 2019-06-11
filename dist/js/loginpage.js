var p1 = document.querySelector('#login-main .loginpage .iphonee .short p')
var p2 = document.querySelector('#login-main .loginpage .iphonee .usermima p')
p1.style.opacity = 0

p1.onclick = function(){
    document.querySelector('#login-main .loginpage .iphonee .short').style.zIndex = 0
    document.querySelector('#login-main .loginpage .iphonee .usermima').style.zIndex = 1
    p1.style.opacity = 0
    p2.style.opacity = 1
}
p2.onclick = function(){
    document.querySelector('#login-main .loginpage .iphonee .short').style.zIndex = 1
    document.querySelector('#login-main .loginpage .iphonee .usermima').style.zIndex = 0
    p1.style.opacity = 1
    p2.style.opacity = 0

}


var btn1 = document.querySelector('#login-main .loginpage .iphonee .button .iphone')
var btn2 = document.querySelector('#login-main .loginpage .iphonee .button .email')
var btn3 = document.querySelector('#login-main .loginpage .emai .button .iphone')
var btn4 = document.querySelector('#login-main .loginpage .emai .button .email')
var iphonee = document.querySelector('#login-main .loginpage .iphonee')
var emai = document.querySelector('#login-main .loginpage .emai')
// console.log(btn1)
// console.log(btn2)
// console.log(iphonee)
// console.log(emai)
emai.style.display = 'none'

btn1.onclick = function(){
    iphonee.style.display = 'block'
    emai.style.display = 'none'
}
btn2.onclick = function(){
    iphonee.style.display = 'none'
    emai.style.display = 'block'

}

btn3.onclick = function(){
    iphonee.style.display = 'block'
    emai.style.display = 'none'
}
btn4.onclick = function(){
    iphonee.style.display = 'none'
    emai.style.display = 'block'

}


// var short = document.querySelector('#login-main .loginpage .iphonee .short .shouji input')

// short.onblur = function(){


// 	var regexp = /^1\d{10}$/

// 	var spanOne = document.querySelector('#login-main .loginpage .iphonee .short span')


// 		if(regexp.test(this.value) === true){

// 			// console.log(regexp.test(this.value))

// 			spanOne.style.display = 'none'

// 		}else{
//             spanOne.innerHTML = '手机格式错误'
// 			spanOne.style.display = 'block'
// 		}

// 	}
    
//     var mimaY = document.querySelector('#login-main .loginpage .usermima .shouji input')

//     mimaY.onblur = function(){
    
    
//         var regexp = /^1\d{10}$/
    
//         var spanTwo = document.querySelector('#login-main .loginpage .usermima span')
    
    
//             if(regexp.test(this.value) === true){
    
//                 // console.log(regexp.test(this.value))
    
//                 spanTwo.style.display = 'none'
    
//             }else{
//                 spanTwo.innerHTML = '手机格式错误'
//                 spanTwo.style.display = 'block'
//             }
    
//         }

        var login_btn1 = document.querySelector('#login-main .bottom .btn1')
        login_btn1.onclick = function(){
        
            var login_Username = document.querySelector('#login-main .loginpage .iphonee .short .shouji input').value
        
            var login_Password = document.querySelector('#login-main .loginpage .iphonee .short .mima input').value
        
            let xhr = new XMLHttpRequest()
        
            xhr.open('get','/php/login.php',true)
        
            xhr.onreadystatechange = function(){
                if(this.readyState !==4){
                    return
                }
                if(this.status >=200 && this.status<300){
                    console.log(this.responseText)
                    var resp = JSON.parse(this.responseText)
                    console.log(resp)
                    if (resp.result) {
                        // location.href = './login.html'
                        location.href = 'http://localhost:7777'
                        localStorage.setItem('login_Username',login_Username);
                        
                    } else {
                        // document.querySelector('.error-message').innerHTML = '用户名不已存在'
                    }
            }else{
                    console.error('请求错误')
                }
            }
        
            // xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            xhr.send("")
        }
        




