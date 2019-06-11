
window.onload = function () {
	var changes = document.querySelectorAll('#banner .all .wheel li')
	var id
	//统一样式  当调用这个函数时 调到哪个索引就会出现哪个图片
	var count = 0

	function start(index) {

		document.querySelector('#banner .all .wheel li.current').classList.remove('current')

		changes[index].classList.add('current')

		var dians = document.querySelectorAll('.dian li')
		document.querySelector('.diandian').classList.remove('diandian')
		dians[index].classList.add('diandian')
	}


	// 两个span  
	// //<当点击这个时候图片向下走  

	function up() {

		count--

		if (count === -1) {

			count = (changes.length - 1)
		}

		start(count)
	}

	function play() {

		clearInterval(id)

		id = setInterval(function () {

			down()

		}, 3000)
	}
	play()

	function stop() {

		clearInterval(id)
	}
	var left = document.querySelector('#banner .all span.left')

	left.onclick = function () {
		up()
	}
	//>当点击这个时候图片向上走

	function down() {

		count++

		if (count === changes.length) {

			count = 0
		}


		start(count)
	}
	var right = document.querySelector('#banner .all span.right')
	right.onclick = function () {
		down()
	}

	//  有几个小点点 当点击哪个小点点的时候 图片就切换到哪个

	var dians = document.querySelectorAll('#banner .all .dian li')

	for (var i = 0; i < dians.length; i++) {

		dians[i].dangqian = i

		dians[i].onmousedown = function () {

			count = this.dangqian

			start(count)
		}
	}

	//鼠标移到all盒子上的时候  自动播放就结束  离开的时候自动播放就开始
	var all = document.querySelector('#banner')

	all.onmouseover = function () {

		stop()
	}

	all.onmouseout = function () {

		play()
	}


	//header 的二级菜单
	$('header .box1 .right .er').on('mouseenter', function () {
		$(this).children('header .box1 .right .er .erji').css({
			display: 'block'
		})
	})

	$('header .box1 .right .er').on('mouseleave', function () {
		$(this).children('header .box1 .right .er .erji').css({
			display: 'none'
		})
	})

	// $('nav .top .input input').on('mouseenter', function () {
	// 	$('nav .top .input ul.jiaul').css({
	// 		display:'block'
	// 	})
	// })

	// $('nav .top .input input').on('mouseleave', function () {
	// 	$('nav .top .input ul.jiaul').css({
	// 		display:'none'
	// 	})
	// })


}

	//nav 的input 搜索

	var ul = document.querySelector("nav .top .input ul.jiaul")
    function GETE(data) {
      if (data.g === undefined) return;
      var lis = data.g.map(itam => `<li>${itam.q}</li>`)
      ul.innerHTML = lis.join("")
    }
    var put = document.querySelector("nav .top .input input")
    var btn = document.querySelector("nav .top .input .search")
    put.oninput = function () {
      var word = put.value
      if(word.length<1){
        ul.style.display = "none"
      } else{
		ul.style.display = "block"
		ul.style.backgroundColor = 'white'
		ul.style.border = '1px solid black'
		ul.style.zIndex = 3
	  }

      var s = document.createElement("script");
      s.src = `
      https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=wise_web&sugsid=1458,28777,21126,28775,28724,28831,28584,26350,28603,28890&wd=$${word}&req=2&bs=dadadadadadadadadadadadadadadadadadada&csor=1&cb=GETE
      `
      document.head.appendChild(s)
    }
    btn.onclick = function () {
      location.href = "http://www.baidu.com/s?wd=" + put.value
	}
    ul.onclick = function (evt) {
      if (evt.target.tagName === 'LI') {
        var word = evt.target.innerHTML
        location.href = `https://www.baidu.com/s?wd=${word}`
      }
    }

			var lunbo = document.querySelectorAll('main #con3 .left .all .wheel li')
			var id
			//统一样式  当调用这个函数时 调到哪个索引就会出现哪个图片
			var num = 0
		
			function start(index) {
		
				document.querySelector('main #con3 .left .all .wheel li.current').classList.remove('current')
		
				lunbo[index].classList.add('current')
		
				var dians = document.querySelectorAll('main #con3 .left .all .dian li')
				document.querySelector('main #con3 .left .all .dian .diandian').classList.remove('diandian')
				dians[index].classList.add('diandian')
			}
		
		
			// 两个span  
			// //<当点击这个时候图片向下走  
		
			function up() {
		
				num--
		
				if (num === -1) {
		
					num = (lunbo.length - 1)
				}
		
				start(num)
			}
		
			function play() {
		
				clearInterval(id)
		
				id = setInterval(function () {
		
					down()
		
				}, 3000)
			}
			play()
		
			function stop() {
		
				clearInterval(id)
			}
			var left = document.querySelector('main #con3 .left .all span.left')
		
			left.onclick = function () {
				up()
			}
			//>当点击这个时候图片向上走
		
			function down() {
		
				num++
		
				if (num === lunbo.length) {
		
					num = 0
				}
		
		
				start(num)
			}
			var right = document.querySelector('main #con3 .left .all span.right')
			// console.log(right)
			right.onclick = function () {
				down()
			}
		
			//  有几个小点点 当点击哪个小点点的时候 图片就切换到哪个
		
			var dians = document.querySelectorAll('main #con3 .left .all .dian li')
		
			for (var i = 0; i < dians.length; i++) {
		
				dians[i].dangqian = i
		
				dians[i].onmousedown = function () {
		
					num = this.dangqian
		
					start(num)
				}
			}
		
			//鼠标移到all盒子上的时候  自动播放就结束  离开的时候自动播放就开始
			var all = document.querySelector('main #con3 .left')
		
			all.onmouseover = function () {
		
				stop()
			}
		
			all.onmouseout = function () {
		
				play()
			}

			var asideL = document.querySelector('aside .left')
			var aside = document.querySelector('aside')
			window.onscroll = function (){

				var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
				// document.body.scrollTop = document.documentElement.scrollTop = scrollTop - 300//点击图片时滚轮变0
				if(scrollTop<=677){

					asideL.style.position = 'absolute'
					aside.style.position = 'relative'
					aside.style.top = 0
					aside.style.left = 0
				}else if(scrollTop>677){
		
					aside.style.position = 'fixed'
		
				}		
			}

		



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
console.log(btn1)
console.log(btn2)
console.log(iphonee)
console.log(emai)
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






