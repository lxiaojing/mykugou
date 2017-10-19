


/*轮播图*/
$(function(){

			var m = 1;
			/*图片滚动*/
			function runPlay(){
				if (m > 8) {
					m = 0;
				}				
				controlImage(m);
				m ++;
			}
			var timer = setInterval(runPlay, 2500);
			/*鼠标进入、离开 轮播图*/
			$(".play-box").mouseenter(function(){
				$(".control-icon span").css("display","block");
				clearInterval(timer);
			}).mouseleave(function(){
				 timer = setInterval(runPlay, 2500);
				 $(".control-icon span").css("display","none");
			});

			//点击向右的按钮
			rightIcon.onclick = function(){
				if (m > 8) {
					m = 0;
				}

				controlImage(m);
				m ++;
			}
			//点击向左的按钮
			leftIcon.onclick = function(){
				m -= 2;//控制一下
				if (m < 0) {
					m = 8;
				}
				controlImage(m);
				m ++;//时刻保证m是下一次
			}

			/*鼠标进入 小圆圈*/
			$(".icon-list span").mouseenter(function(){
				controlImage($(this).index());
				m = $(this).index() + 1;//m值应该修改一下，走之后，下一个
			})
			/*图片转换时的函数*/
			function controlImage(n){
				$(".image-list a").removeClass("current").eq(n).addClass("current");
				$(".icon-list span").removeClass("current").eq(n).addClass("current");
			}

		});


/*登录界面跳出*/
$(function(){
	$(".show").mousedown(function(){
		$(".loginWrap").css("display","block");
		$("body").css("background","rgba(0,0,0,.2)");
	});
	
});


/*登录验证*/
$(function(){
	$(".sub").mousedown(function(){
		// 判断是否为空
		if($(".user").val()==""){
			$(".mistake").css("display","block").text("请先填用户名!");
		}
		else if($(".pwd").val()==""){
			$(".mistake").css("display","block").text("请先填密码!");
		}
		// 判断输入的格式是否正确
		else if($(".user").val().search(/^\w{4,12}$/)===-1||$(".pwd").val().match(/^\w{6,12}$/)===null){
			$(".mistake").css("display","block").text("用户名或密码不正确!");
		}
		else{
			$(".mistake").css("display","block").text("登录成功!").css("color","green");
		}
		
	})
})





/*新歌首发-选择跳转*/
$(function(){
	$(".left .itemTitle div span").mouseenter(function(){
		var a=$(this).index();
		$(this).css("color","#009af3").siblings().css("color","#000");
		$(".tabC").children("ul").eq(a).css("display","block").siblings().css("display","none");
		$(".itemPages").children("span").eq(1).text(a+1);
	})
})

/*新歌首发-选择页面跳转*/
$(function(){
	$(".before").click(function(){
		var index=$(this).next().text();
		if(index>=2){
			$(this).next().text(index-1);
			$(".itemTitle div").children("span").eq(index-2).css("color","#009af3").siblings().css("color","#000");
			$(".tabC").children("ul").eq(index-2).css("display","block").siblings().css("display","none");		
		}
	})
	$(".after").click(function(){
		var index=Number($(this).prevUntil().eq(1).text());
		if(index<=3){
			$(this).prevUntil().eq(1).text(index+1);
			$(".itemTitle div").children("span").eq(index).css("color","#009af3").siblings().css("color","#000");
			$(".tabC").children("ul").eq(index).css("display","block").siblings().css("display","none");		
		}
	})

})

/*热门歌手选择跳转*/
$(function(){
	$(".hotSinger .smallFont span").mouseenter(function(){
		var b=$(this).index();
		$(this).css("color","#009af3").siblings().css("color","#000");
		$(".circle").children("div").eq(b).addClass("current").siblings().removeClass("current");
		$(".hotSinger .content").children("ul").eq(b).children("li").eq(1).css("width","157px");
		$(".hotSinger .content").children("ul").eq(b).css("display","block").siblings().css("display","none");
	})
})

/*scrollTop*/
$(function(){
	$(window).scroll(function(){
		var scrollTop=$(this).scrollTop();
		if(scrollTop>450){
			$(".scrollTop").css("display","block");
		}
		else{
			$(".scrollTop").css("display","none");
		}
	})
})

