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
