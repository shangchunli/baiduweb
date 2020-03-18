$(function () { 
    //获得手机号
    var $username=$('#username');
        $tel=$('#tel');
        $pwd=$('#pwd');
        $checkma=$('#checkma');
        $sbt=$('#sbt');

    //验证用户名
    $username.focus(function () { 
      $('.tips1').html('用户名仅支持中英文、数字和下划线,且不能为纯数字')
    })
    $username.blur(function () { 
      var usertest=/^[0-9][a-zA-Z_\u4e00-\u9fa5]+[0-9]$/
      if($username.val()==''){
        $('.tips1').html('不能为空');
      }else if(!usertest.test($username)){
        $('.tips1').html('格式不正确');
      }
     })

    //验证密码
    $pwd.focus(function () { 
      $('.tips3').html('至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他任意')
     })

    $pwd.blur(function () { 
      var pwdtest=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
      if($pwd.val()==''){
        $('.tips3').html('不能为空')
      }else if(!pwdtest.test($pwd)){
        $('.tips3').html('格式不正确');
      }
    })

    //验证手机号
    $tel.blur(function () { 
      if(!(/^1[3456789]\d{9}$/.test($tel))){ 
        $('.tips2').html('手机号码格式不正确');
      }
    });

    //验证码
    $('#checkma').click(function(){
        var num = 60;
        var timer=setInterval(function() {
          if (num > 1) {
              num--;
              // alert("num:"+num);
              $checkma.html("重新发送(" + num + ")");
              $checkma.css('background', '#B8B8B8');
              $checkma.attr('disabled',false); 
          }else {
              $checkma.html('获取验证码');
              $checkma.removeAttr("disabled");
              $checkma.css('background', 'red');
              clearInterval(timer);
              $('.tips4').html('请求超时请稍后再试')
          }
        }, 1000);     
    })
    
 })