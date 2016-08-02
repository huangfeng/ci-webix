<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
    <link rel="stylesheet" type="text/css" href="/public/css/reset.css"/>
    <link rel="stylesheet" type="text/css" href="/public/css/login.css"/>
    <!--[if lt IE 9]>
    <script src="/public/js/html5shiv.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="/public/js/respond.min.js" type="text/javascript" charset="utf-8"></script>
    <![endif]-->
    <!--[if IE 6]>
    <script src="/public/js/DD_belatedPNG_0.0.8a.js" type="text/javascript"></script>
    <script>DD_belatedPNG.fix('.centerIcon');</script>
    <![endif]-->
    <title>信研黄金-登录</title>
</head>

<body>
<div class="loginWrapper clearfix">
    <div class="banWrapper" style="background: #21db8a">
        <div class="banContent"></div>
    </div>
    <div class="loginMain">
        <div class="loginWidth">
            <div class="loginLogoDiv">
                <a class="loginLogo" href="<?php echo base_url();?>"></a>
            </div>
            <?php echo form_open("login", ['class' => 'formLogin', 'id' => "login_form"]); ?>

            <div class="loginList loginListUser">
                <label></label>
                <input type="text" class="loginText" name="identity" id="identity" value="" placeholder="用户名/手机号/邮箱"/>
                <span class="errorTips"><i></i><em></em></span>
            </div>
            <div class="loginList loginListPwd">
                <label></label>
                <input type="password" class="loginText" name="password" id="password" value="" placeholder="密码"/>
                <span class="errorTips"><i></i><em></em></span>
            </div>
            <div class="loginList loginListCode" style="display: none;">
                <label></label>
                <input type="text" class="loginText" name="captcha" id="captcha" value="" placeholder="计算结果"/>
                <img src="<?php echo base_url('login/captcha'); ?>" id="captcha_img"
                     onclick="this.src='<?php echo base_url('login/captcha'); ?>?_t=' + Math.random();"
                     style="width:100%;height:35px;">

                <span class="errorTips"><i></i><em></em></span>
            </div>
            <div class="sysError" style="display:none">
                <label></label>
                <span><i></i><em></em></span>
            </div>
            <input class="loginBtn" type="button" id="loginBtn" value="登录"/>
            <?php echo form_close(); ?>
        </div>
    </div>
</div>

<script src="/public/js/jquery.min.js" type="text/javascript" charset="utf-8"></script>
<script src="/public/js/layer/layer.js" type="text/javascript" charset="utf-8"></script>
<script src="/public/js/json.parse.js" type="text/javascript" charset="utf-8"></script>
<script src="/public/js/jquery.form.js" type="text/javascript" charset="utf-8"></script>
<script src="/public/js/regPublic.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
    var refer = '<?php echo base_url();?>';
    var active = ''
    $(document).ready(function () {

        if (active != '') {
            layer.msg('账号激活成功', {icon: 1, time: 1500}, function () {
            });
        }
        $("#loginBtn").click(function () {
            $('.sysError').css('display', 'none');
            $('.errorTips').css('display', 'none');
            $("#loginBtn").val('登录中...').prop("disabled", true);
            var identity = $("#identity").val();
            var userpass = $("#password").val();
            var captcha = $("#captcha").val();
            identity = $.trim(identity);
            userpass = $.trim(userpass);
            captcha = $.trim(captcha);

            if (identity.length < 5) {
                showError('请输入正确格式的用户名!', $("#identity"));
            }
            else if (userpass.length < 6) {
                showError('请输入正确格式的密码!', $("#password"));
            }
            else if ($(".loginListCode").css('display') == 'block' && captcha == '') {
                showError('请输入正确的验证码', $("#captcha"));
            }
            else {
                $("#login_form").ajaxSubmit(function (e) {
                    var obj = json_parse(e);
                    var code = obj.code;
                    //当用户登录错误且次数超过3次,显示验证码
                    if (code != '1' && $(".loginListCode").css('display') == 'none' && obj.errcount > 2) {
                        $(".loginListCode").css('display', 'block');
                    }

                    if (code == '1') {
                        window.location.href = obj.redirect;
                    }
                    else {
                        if (code == '-1') {//登录数据库验证,登录失败显示
                            $('.sysError').show().find('em').html(obj.info);
                        } else if (code == '-4') {//未激活状态显示
                            if (!isEmail(obj.email)) {
                                var info = '账户未激活且未绑定邮箱,' + '<a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=800076065&f=1&ty=1&aty=0&a=&from=6" target="_blank">联系客服</a>';
                            }
                            else {
                                var info = obj.info + '或&nbsp;<a id="resendEmail" href="javascript:;" identity="' + obj.identity + '" email="' + obj.email + '">重新发送邮件</a>';
                            }
                            $('.sysError').show().find('em').html(info);
                        } else if (code == '-6') {//验证码错误显示
                            $(".loginListCode").css('display', 'block');
                            showError(obj.info, $("#captcha"));
                        } else if (code == '-3') {//验证码错误显示
                            showError(obj.info, $("#identity"));
                        } else {
                            var errcount = obj.errcount;
                            if (errcount > 2) {
                                $(".loginListCode").css('display', 'block');
                            }
                            $('.sysError').show().find('em').html(obj.info);
                        }

                        if ($(".loginListCode").css('display') == 'block') {
                            $("#captchaimg").click();
                        }

                        $("#loginBtn").val('登录').prop("disabled", false);
                        return false;
                    }
                })
            }


            $(".sysError").on('click', '#resendEmail', function () {
                layer.closeAll();
                layer.load(1, {shade: 0.3});
                var identity = $(this).attr('identity').trim();
                var email = $(this).attr('email').trim();
                if (identity.length < 5 && !isEmail(email)) {
                    layer.msg('用户信息有误,请联系管理员', {icon: 2, time: '3000', shade: 0.3, shadeClose: true});
                    return false;
                }
                else {
                    $.post('/register/resendEmail', {identity: identity, email: email}, function (e) {
                        var obj = json_parse(e);
                        if (obj.code == '1') {
                            window.location.href = obj.acturl;
                        }
                        else {
                            layer.closeAll()
                            layer.msg(obj.info, {icon: 2, time: '3000', shade: 0.3, shadeClose: true});
                        }
                    })
                }
            })
        })

        //bind keyCode=13 Event
        document.onkeydown = function (e) {
            var ev = document.all ? window.event : e;
            if (ev.keyCode == 13) {

                $("#loginBtn").click();

            }
        }
    })

    //错误显示
    function showError(msg, selector) {
        selector.parent().find('.errorTips').find('em').html(msg)
        selector.parent().find('.errorTips').fadeIn();
        $("#loginBtn").val('登录').prop('disabled', false);
    }
</script>
</body>
</html>