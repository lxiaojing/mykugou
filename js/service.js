/*登录界面跳出*/
$(function(){
	$(".show").mousedown(function(){
		$(".loginWrap").css("display","block");
		$("body").css("background","rgba(0,0,0,.2)");
	});
	
});
/*登录界面跳出验证*/
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

/*VIP登录界面跳出*/
$(function(){
	$("form .VIP").mousedown(function(){
		$(".loginWrap").css("display","block");
		$("body").css("opacity",".8");
		$("body").css("background","rgba(0,0,0,.2)");
	});
});

/*选择平台*/
$(function(){
	$(".choose a").mousedown(function(){
		$(this).addClass("current").siblings().removeClass("current");
	})
})


$(function(){
	/*卸载方法查看*/
	$(".check .method").mouseenter(function(){
		$(".position").css("display","block").click(function(){
			$(this).css("display","none");
		});
	});
});

/*文本域获得焦点*/
$(function(){
	$(".back td textarea").focus(function(){
		$(this).text(" ").css("color","#000");
	})
})
/*发送 验证*/
$(function(){
	$(".sub").children().eq(1).click(function(){
		var qqVal=$(".qq").val();
		var kugouVal=$(".kugou").val();
		if(kugouVal==""||qqVal==""){
			alert("请输入信息！")
		}
		else if(kugouVal.match(/^\w{1,12}$/)==null){
			alert("酷狗账号不正确！");
		}		
		else if(qqVal.match(/^\d{9,12}$/)==null){
			alert("qq格式输入错误！")
		}
		else{
			alert("您的问题已经成功提交!")
		}		
		
	})
})