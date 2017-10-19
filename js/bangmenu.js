
$(function(){
	/*侧边栏 伸缩*/
	$(".menuAside h3").click(function(){
		$(this).next().slideToggle(700,"linear");
	})

	/*展开 关闭箭头*/
	$("h3 div").click(function(){
		$(this).next(".open").toggleClass("close");
	})
	/*点击选择排行榜单*/
	$(".bang").click(function(){
		$(this).addClass("bang-show").siblings().removeClass("bang-show");
		var index=$(this).index();
		$(".menuBox").eq(index).css("display","block").siblings(".menuBox").css("display","none");
	})


	/*点击 选择歌曲对勾*/
	// 单选
	$(".current").click(function(){
		$(this).toggleClass("show");
	})
	// 全选
	$(".choice").click(function(){
		$(this).toggleClass("all");
		$(".current").toggleClass("show");
	})

	/*登录界面跳出*/
	$(".show").mousedown(function(){
		$(".loginWrap").css("display","block");
		$("body").css("background","rgba(0,0,0,.2)");
	})

	/*登录验证*/
	$(".sub").mousedown(function(){
		// 判断是否为空
		if($(".user").val()==""){
			$(".mistake").css("display","block").text("请先填用户名!");
		}
		else if($(".pwd").val()==""){
			$(".mistake").css("display","block").text("请先填密码!");
		}
		// 判断输入的格式是否正确
		else if($(".user").val().search(/^\w{4,12}$/)===-1||$(".user").val().match(/^[\w-]+@[\w-]+(\.\w+){1,3}$/)===null||$(".pwd").val().match(/^\w{6,12}$/)===null){
			$(".mistake").css("display","block").text("用户名或密码不正确!");
		}
		else{
			alert("登录成功！");
		}
		
	});


});
