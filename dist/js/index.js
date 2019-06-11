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
		var put = $("nav .top .input input")[0]
		console.log(put)
				put.oninput = function () {
					var word = put.value
					var data1 = new Date()
					var date = data1.getTime()
					$.ajax({
							method: 'get',
							url: `/xhr/search/searchAutoComplete.json?`,
							data:{
			
									// __timestamp=date,//当前发送时间的时间戳
									keywordPrefix:word
			
							},
								dataType:"json",
								jsonp:'cb',
						success: function (resp) {
								var num = resp.data
									if(num === undefined) {
										return
									}

									var lis = num.map(function(itam) {

										return "<li><a>"+itam+"</a></li>"
									}) 
									ul.innerHTML = lis.join("")
									ul.style.display = 'block'
						    	ul.style.backgroundColor = 'white'
						    	ul.style.border = '1px solid #ccc'
						    	ul.style.zIndex = 3
},
						
						error:function () {
							console.log('aaa')
						}
					})
			}
    var btn = document.querySelector("nav .top .input .search")
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
			var dropDown = document.querySelector('#drop-down')
			window.onscroll = function (){

				var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
				// document.body.scrollTop = document.documentElement.scrollTop = scrollTop - 300//点击图片时滚轮变0
				if(scrollTop<20){
					dropDown.style.display = 'none'
				}
				
				if(scrollTop>=20){
					dropDown.style.display = 'block'
					dropDown.style.position='fixed'
				}

				if(scrollTop<=677){

					asideL.style.position = 'absolute'
					aside.style.position = 'relative'
					aside.style.top = 0
					aside.style.left = 0
				}else if(scrollTop>677){
		
					aside.style.position = 'fixed'
					aside.style.top = '60px'
		
				}		
			}

				//二级菜单美容彩妆
			let $erji1 = $('nav .bottom li ul li:nth-child(1)')
			let $erji1_1=$('nav .bottom li ul li:nth-child(1) span:first-of-type')
			$erji1.on('mouseenter', function () {
				$erji1_1.removeClass('icon-jiuping')
				$erji1_1.addClass('icon-hjiuping')
				SecondMenu_1.show()

				})
			
		
			$erji1.on('mouseleave', function () {
				$erji1_1.addClass('icon-jiuping')
				$erji1_1.removeClass('icon-hjiuping')
				SecondMenu_1.hide()
				})



			//二级菜单母婴儿童
				let $erji2 = $('nav .bottom li ul li:nth-child(2)')
				let $erji2_1=$('nav .bottom li ul li:nth-child(2) span:first-of-type')
				$erji2.on('mouseenter', function () {
					$erji2_1.removeClass('icon-gouwuche')
					$erji2_1.addClass('icon-hgouwuche')
					SecondMenu_2.show()
				})
				
			
				$erji2.on('mouseleave', function () {
					$erji2_1.addClass('icon-gouwuche')
					$erji2_1.removeClass('icon-hgouwuche')
					SecondMenu_2.hide()
				})
			
		
					//二级菜单 营养保健
					let $erji3 = $('nav .bottom li ul li:nth-child(3)')
					let $erji3_1=$('nav .bottom li ul li:nth-child(3) span:first-of-type')
					$erji3.on('mouseenter', function () {
						$erji3_1.removeClass('icon-xin')
						$erji3_1.addClass('icon-hxin')
						SecondMenu_3.show()
					})
					
				
					$erji3.on('mouseleave', function () {
						$erji3_1.addClass('icon-xin')
						$erji3_1.removeClass('icon-hxin')
						SecondMenu_3.hide()
					})


						// 二级菜单 数码家电
						let $erji4 = $('nav .bottom li ul li:nth-child(4)')
						let $erji4_1=$('nav .bottom li ul li:nth-child(4) span:first-of-type')
						$erji4.on('mouseenter', function () {
							$erji4_1.removeClass('icon-zhaoxiangji')
							$erji4_1.addClass('icon-hzhaoxiangji')
							SecondMenu_4.show()
						})
						
					
						$erji4.on('mouseleave', function () {
							$erji4_1.addClass('icon-zhaoxiangji')
							$erji4_1.removeClass('icon-hzhaoxiangji')
							SecondMenu_4.hide()
						})
	
					// 二级菜单 个人洗护
					let $erji5 = $('nav .bottom li ul li:nth-child(5)')
					let $erji5_1=$('nav .bottom li ul li:nth-child(5) span:first-of-type')
					$erji5.on('mouseenter', function () {
						$erji5_1.removeClass('icon-jiubei')
						$erji5_1.addClass('icon-hjiubei')
						SecondMenu_5.show()
						})
					
				
					$erji5.on('mouseleave', function () {
						$erji5_1.addClass('icon-jiubei')
						$erji5_1.removeClass('icon-hjiubei')
						SecondMenu_5.hide()
						})



					// 二级菜单 服饰鞋靴

					let $erji6 = $('nav .bottom li ul li:nth-child(6)')
					let $erji6_1=$('nav .bottom li ul li:nth-child(6) span:first-of-type')
					$erji6.on('mouseenter', function () {
						$erji6_1.removeClass('icon-yijia')
						$erji6_1.addClass('icon-hyijia')
						SecondMenu_1.show()
						})
					
				
					$erji6.on('mouseleave', function () {
						$erji6_1.addClass('icon-yijia')
						$erji6_1.removeClass('icon-hyijia')
						SecondMenu_1.hide()
						})

					// 二级菜单 运动户外
					let $erji7 = $('nav .bottom li ul li:nth-child(7)')
					let $erji7_1=$('nav .bottom li ul li:nth-child(7) span:first-of-type')
					$erji7.on('mouseenter', function () {
						$erji7_1.removeClass('icon-yanjing')
						$erji7_1.addClass('icon-hyanjing')
						SecondMenu_2.show()
						})
					
				
					$erji7.on('mouseleave', function () {
						$erji7_1.addClass('icon-yanjing')
						$erji7_1.removeClass('icon-hyanjing')
						SecondMenu_2.hide()
						})


					// 二级菜单 手表配饰
					let $erji8 = $('nav .bottom li ul li:nth-child(8)')
					let $erji8_1=$('nav .bottom li ul li:nth-child(8) span:first-of-type')
					$erji8.on('mouseenter', function () {
						$erji8_1.removeClass('icon-shizhong')
						$erji8_1.addClass('icon-hshizhong')
						SecondMenu_3.show()
						})
					
				
					$erji8.on('mouseleave', function () {
						$erji8_1.addClass('icon-shizhong')
						$erji8_1.removeClass('icon-hshizhong')
						SecondMenu_3.hide()
						})


					// 二级菜单 轻奢

					let $erji9 = $('nav .bottom li ul li:nth-child(9)')
					let $erji9_1=$('nav .bottom li ul li:nth-child(9) span:first-of-type')
					$erji9.on('mouseenter', function () {
						$erji9_1.removeClass('icon-baobao')
						$erji9_1.addClass('icon-hbaobao')
						SecondMenu_4.show()
						})
					
				
					$erji9.on('mouseleave', function () {
						$erji9_1.addClass('icon-baobao')
						$erji9_1.removeClass('icon-hbaobao')
						SecondMenu_4.hide()
						})


					// 二级菜单 家居生活
					let $erji10 = $('nav .bottom li ul li:nth-child(10)')
					let $erji10_1=$('nav .bottom li ul li:nth-child(10) span:first-of-type')
					$erji10.on('mouseenter', function () {
						$erji10_1.removeClass('icon-shafa')
						$erji10_1.addClass('icon-hsahfa')
						SecondMenu_5.show()
						})
					
				
					$erji10.on('mouseleave', function () {
						$erji10_1.addClass('icon-shafa')
						$erji10_1.removeClass('icon-hsahfa')
						SecondMenu_5.hide()
						})


					// 二级菜单 环球美食
					let $erji11 = $('nav .bottom li ul li:nth-child(11)')
					let $erji11_1=$('nav .bottom li ul li:nth-child(11) span:first-of-type')
					$erji11.on('mouseenter', function () {
						$erji11_1.removeClass('icon-shafa')
						$erji11_1.addClass('icon-hsahfa')
						SecondMenu_1.show()
						})
					
				
					$erji11.on('mouseleave', function () {
						$erji11_1.addClass('icon-shafa')
						$erji11_1.removeClass('icon-hsahfa')
						SecondMenu_1.hide()
						})

						////////////////////////////////////////////////////////////
						////////////////////////////////////////////////////////////

						//二级菜单 二级第一个
								var SecondMenu_1 = $('nav .SecondMenu_1')
								SecondMenu_1.css({
									width: 960,
									height: 460,
									backgroundColor: 'white',
									border: '1px solid #ff1e32',
									display:'flex',
									position:"absolute",
									left:410,
									top:145,
									display:'none'
							
								})
								var SecondMenu_left = $('nav .SecondMenu_1 .left')
										SecondMenu_left.css({
											width:695,
										})
							
										var SecondMenu_ul = $('nav .SecondMenu_1 .left ul')
										SecondMenu_ul.css({
											display:'flex',
											flexWrap:'wrap',
											justifyContent:'space-start'
											
										})
							
										var SecondMenu_li = $('nav .SecondMenu_1 .left ul li')
										SecondMenu_li.css({
											width:320,
											paddingLeft:10
										})
										var SecondMenu_h1 = $('nav .SecondMenu_1 .left ul li h1')
										SecondMenu_h1.css({
											height:40,
											lineHeight:'40px',
											fontSize:20,
											fontWeight:100,
											borderBottom:'1px solid #ccc'
										})
										var SecondMenu_span = $('nav .SecondMenu_1 .left ul li span')
										SecondMenu_span.css({
											height:20,
											lineHeight:'20px',
											padding:5,
											display:'inline-block'
										})
							
										var SecondMenu_a = $('nav .SecondMenu_1 .left ul li span a')
										SecondMenu_a.css({
											color:'#666666',
										})

							
										var SecondMenu_right = $('nav .SecondMenu_1 .right')
										SecondMenu_right.css({
											width:250,
											display:'flex',
											flexWrap:'wrap',
											// backgroundColor:'yellow',
											justifyContent:'space-around'
										})
										var SecondMenuImg = document.querySelectorAll('nav .SecondMenu_1 .right img')
										for(let i=0;i<SecondMenuImg.length;i++){
										SecondMenuImg[i].style.display = 'inline-block'
										SecondMenuImg[i].style.width = '100px'
										SecondMenuImg[i].style.height = '100px'
										SecondMenuImg[i].style.backgroundColor = 'pink'
										SecondMenuImg[i].style.margin = '10px'
										}



										/////////////////////////////////////////////////////////////
										////////////////////////////////////////////////////////////////////
										//二级菜单 第二个
										var SecondMenu_2 = $('nav .SecondMenu_2')
										SecondMenu_2.css({
											width: 960,
											height: 460,
											backgroundColor: 'white',
											border: '1px solid #ff1e32',
											display:'flex',
											position:"absolute",
											left:410,
											top:145,
											display:'none'
									
										})
										var SecondMenu_left_2 = $('nav .SecondMenu_2 .left')
												SecondMenu_left_2.css({
													width:695,
												})
									
												var SecondMenu_ul_2 = $('nav .SecondMenu_2 .left ul')
												SecondMenu_ul_2.css({
													display:'flex',
													flexWrap:'wrap',
													justifyContent:'space-start'
													
												})
									
												var SecondMenu_li_2 = $('nav .SecondMenu_2 .left ul li')
												SecondMenu_li_2.css({
													width:320,
													paddingLeft:10
												})
												var SecondMenu_h1_2 = $('nav .SecondMenu_2 .left ul li h1')
												SecondMenu_h1_2.css({
													height:40,
													lineHeight:'40px',
													fontSize:20,
													fontWeight:100,
													borderBottom:'1px solid #ccc'
												})
												var SecondMenu_span_2 = $('nav .SecondMenu_2 .left ul li span')
												SecondMenu_span_2.css({
													height:20,
													lineHeight:'20px',
													padding:5,
													display:'inline-block'
												})
									
												var SecondMenu_a_2 = $('nav .SecondMenu_2 .left ul li span a')
												SecondMenu_a_2.css({
													color:'#666666',
												})
		
									
												var SecondMenu_right_2 = $('nav .SecondMenu_2 .right')
												SecondMenu_right_2.css({
													width:250,
													display:'flex',
													flexWrap:'wrap',
													// backgroundColor:'yellow',
													justifyContent:'space-around'
												})
												var SecondMenuImg_2 = document.querySelectorAll('nav .SecondMenu_2 .right img')
												for(let i=0;i<SecondMenuImg_2.length;i++){
												SecondMenuImg_2[i].style.display = 'inline-block'
												SecondMenuImg_2[i].style.width = '100px'
												SecondMenuImg_2[i].style.height = '100px'
												SecondMenuImg_2[i].style.backgroundColor = 'pink'
												SecondMenuImg_2[i].style.margin = '10px'
												}


												////////////////////////////////////////////////
												//////////////////////////////////////////////////
												//////第三个二级菜单


												var SecondMenu_3 = $('nav .SecondMenu_3')
												SecondMenu_3.css({
													width: 960,
													height: 460,
													backgroundColor: 'white',
													border: '1px solid #ff1e32',
													display:'flex',
													position:"absolute",
													left:410,
													top:145,
													display:'none'
											
												})
												var SecondMenu_left_3 = $('nav .SecondMenu_3 .left')
														SecondMenu_left_3.css({
															width:695,
														})
											
														var SecondMenu_ul_3 = $('nav .SecondMenu_3 .left ul')
														SecondMenu_ul_3.css({
															display:'flex',
															flexWrap:'wrap',
															justifyContent:'space-start'
															
														})
											
														var SecondMenu_li_3 = $('nav .SecondMenu_3 .left ul li')
														SecondMenu_li_3.css({
															width:320,
															paddingLeft:10
														})
														var SecondMenu_h1_3 = $('nav .SecondMenu_3 .left ul li h1')
														SecondMenu_h1_3.css({
															height:40,
															lineHeight:'40px',
															fontSize:20,
															fontWeight:100,
															borderBottom:'1px solid #ccc'
														})
														var SecondMenu_span_3 = $('nav .SecondMenu_3 .left ul li span')
														SecondMenu_span_3.css({
															height:20,
															lineHeight:'20px',
															padding:5,
															display:'inline-block'
														})
											
														var SecondMenu_a_3 = $('nav .SecondMenu_3 .left ul li span a')
														SecondMenu_a_3.css({
															color:'#666666',
														})
				
											
														var SecondMenu_right_3 = $('nav .SecondMenu_3 .right')
														SecondMenu_right_3.css({
															width:250,
															display:'flex',
															flexWrap:'wrap',
															// backgroundColor:'yellow',
															justifyContent:'space-around'
														})
														var SecondMenuImg_3 = document.querySelectorAll('nav .SecondMenu_3 .right img')
														for(let i=0;i<SecondMenuImg_3.length;i++){
														SecondMenuImg_3[i].style.display = 'inline-block'
														SecondMenuImg_3[i].style.width = '100px'
														SecondMenuImg_3[i].style.height = '100px'
														SecondMenuImg_3[i].style.backgroundColor = 'pink'
														SecondMenuImg_3[i].style.margin = '10px'
														}


																										////////////////////////////////////////////////
												//////////////////////////////////////////////////
												//////第4个二级菜单


												var SecondMenu_4 = $('nav .SecondMenu_4')
												SecondMenu_4.css({
													width: 960,
													height: 460,
													backgroundColor: 'white',
													border: '1px solid #ff1e32',
													display:'flex',
													position:"absolute",
													left:410,
													top:145,
													display:'none'
											
												})
												var SecondMenu_left_4 = $('nav .SecondMenu_4 .left')
														SecondMenu_left_4.css({
															width:695,
														})
											
														var SecondMenu_ul_4 = $('nav .SecondMenu_4 .left ul')
														SecondMenu_ul_4.css({
															display:'flex',
															flexWrap:'wrap',
															justifyContent:'space-start'
															
														})
											
														var SecondMenu_li_4 = $('nav .SecondMenu_4 .left ul li')
														SecondMenu_li_4.css({
															width:320,
															paddingLeft:10
														})
														var SecondMenu_h1_4 = $('nav .SecondMenu_4 .left ul li h1')
														SecondMenu_h1_4.css({
															height:40,
															lineHeight:'40px',
															fontSize:20,
															fontWeight:100,
															borderBottom:'1px solid #ccc'
														})
														var SecondMenu_span_4 = $('nav .SecondMenu_4 .left ul li span')
														SecondMenu_span_4.css({
															height:20,
															lineHeight:'20px',
															padding:5,
															display:'inline-block'
														})
											
														var SecondMenu_a_4 = $('nav .SecondMenu_4 .left ul li span a')
														SecondMenu_a_4.css({
															color:'#666666',
														})
				
											
														var SecondMenu_right_4 = $('nav .SecondMenu_4 .right')
														SecondMenu_right_4.css({
															width:250,
															display:'flex',
															flexWrap:'wrap',
															// backgroundColor:'yellow',
															justifyContent:'space-around'
														})
														var SecondMenuImg_4 = document.querySelectorAll('nav .SecondMenu_4 .right img')
														for(let i=0;i<SecondMenuImg_4.length;i++){
														SecondMenuImg_4[i].style.display = 'inline-block'
														SecondMenuImg_4[i].style.width = '100px'
														SecondMenuImg_4[i].style.height = '100px'
														SecondMenuImg_4[i].style.backgroundColor = 'pink'
														SecondMenuImg_4[i].style.margin = '10px'
														}



																																								////////////////////////////////////////////////
												//////////////////////////////////////////////////
												//////第5个二级菜单


												var SecondMenu_5 = $('nav .SecondMenu_5')
												SecondMenu_5.css({
													width: 960,
													height: 460,
													backgroundColor: 'white',
													border: '1px solid #ff1e32',
													display:'flex',
													position:"absolute",
													left:410,
													top:145,
													display:'none'
											
												})
												var SecondMenu_left_5 = $('nav .SecondMenu_5 .left')
														SecondMenu_left_5.css({
															width:695,
														})
											
														var SecondMenu_ul_5 = $('nav .SecondMenu_5 .left ul')
														SecondMenu_ul_5.css({
															display:'flex',
															flexWrap:'wrap',
															justifyContent:'space-start'
															
														})
											
														var SecondMenu_li_5 = $('nav .SecondMenu_5 .left ul li')
														SecondMenu_li_5.css({
															width:320,
															paddingLeft:10
														})
														var SecondMenu_h1_5 = $('nav .SecondMenu_5 .left ul li h1')
														SecondMenu_h1_5.css({
															height:40,
															lineHeight:'40px',
															fontSize:20,
															fontWeight:100,
															borderBottom:'1px solid #ccc'
														})
														var SecondMenu_span_5 = $('nav .SecondMenu_5 .left ul li span')
														SecondMenu_span_5.css({
															height:20,
															lineHeight:'20px',
															padding:5,
															display:'inline-block'
														})
											
														var SecondMenu_a_5 = $('nav .SecondMenu_5 .left ul li span a')
														SecondMenu_a_5.css({
															color:'#666666',
														})
				
											
														var SecondMenu_right_5 = $('nav .SecondMenu_5 .right')
														SecondMenu_right_5.css({
															width:250,
															display:'flex',
															flexWrap:'wrap',
															// backgroundColor:'yellow',
															justifyContent:'space-around'
														})
														var SecondMenuImg_5 = document.querySelectorAll('nav .SecondMenu_5 .right img')
														for(let i=0;i<SecondMenuImg_5.length;i++){
														SecondMenuImg_5[i].style.display = 'inline-block'
														SecondMenuImg_5[i].style.width = '100px'
														SecondMenuImg_5[i].style.height = '100px'
														SecondMenuImg_5[i].style.backgroundColor = 'pink'
														SecondMenuImg_5[i].style.margin = '10px'
														}


		
		
														
			
	

