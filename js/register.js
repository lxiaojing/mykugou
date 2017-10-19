$(function(){
	/*购物车显示和隐藏*/
	$(".loginContent>div").mouseenter(function(){
		$(this).css("display","block");
		});
	$(".loginContent>div").mouseleave(function(){
		$(this).css("display","none");
	})
	$(".loginContent td:nth-child(4)").hover(function(){
		$(".loginContent>div").css("display","block");
	},function(){
		
		$(".loginContent>div").css("display","none");
		
	});


	/*tel获取值验证*/
	$(".tel").focus(function(){
		$(this).closest("span").next().css("display","inline");
	}).blur(function(){
		/*手机号码验证*/
		 telVal=$(".tel").val();
		if(telVal.match(/^1\d{10}$/)==null){
			$(".tel").closest("span").next().text("！请输入可用的手机号").css("color","#d70f0f").css("background","#fadada");
			return false;
		}
		else{
			$(".tel").closest("span").next().text("手机号码可用~").css("color","green").css("background","#def1db");
		}
	})
	/*pwd获取值验证*/
	$(".pwd").focus(function(){
		$(this).closest("span").next().css("display","inline");
	}).blur(function(){
		/*密码验证*/
		 pwd=$(".pwd").val();
		if(pwd.match(/^\w{6,16}$/)==null){
			$(".pwd").closest("span").next().text("！请输入6-16位的数字或字符").css("color","#d70f0f").css("background","#fadada");
			return false;
		}
		else{
			$(".pwd").closest("span").next().text("密码输入通过~").css("color","green").css("background","#def1db");
		}
	})
	/*repwd获取值验证*/
	$(".repwd").focus(function(){
		$(this).closest("span").next().css("display","inline");
	}).blur(function(){
		/*重复密码验证*/
		 repwd=$(".repwd").val();
		if(repwd!==pwd){
			$(".repwd").closest("span").next().text("！密码不一致，请确认后输入").css("color","#d70f0f").css("background","#fadada");
			return false;
		}
		else{
			$(".repwd").closest("span").next().text("确认密码通过~").css("color","green").css("background","#def1db");
		}
	})
	/*注册验证*/
		$(".sub").mousedown(function(){
			if(($(".f1").text()=="手机号码可用~")&&($(".f2").text()=="密码输入通过~")&&($(".f3").text()=="确认密码通过~")){
				alert("恭喜你，注册成功！")
			}
			else{
				alert("信息有误，注册失败！")
			}
		});



	/*滚动条显示和隐藏*/
		$(window).scroll(function(){
			var scrollTop=$(this).scrollTop();
			if(scrollTop>300){
				$(".scroll-Top").css("display","block");
			}
			else{
				$(".scroll-Top").css("display","none");
			}
		})



});