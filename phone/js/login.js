(function($) {
    appcan.button("#nav-left", "btn-act", function() {
        appcan.window.close(-1);
    });
    appcan.button("#nav-right", "btn-act", function() {
    });
    appcan.ready(function() {
        
        $("#forgetPwd").on("click", function() {
            appcan.window.openToast({
                msg:'不好意思，这个功能还没做！',
                duration:'2000',
                type:'0'
            });
        });
        
        appcan.button("#submit", "ani-act", function() {
            login();
        })
    });
    function login() {
        var name = $("#uid").val();
        var pwd = $("#upwd").val();
        if (name == "") {
            appcan.window.openToast('账号不能为空', '2000');
            return;
        } else if (pwd == "") {
            appcan.window.openToast('密码不能为空', '2000');
            return;
        } else {
            $("form").submit();
        }

    }
    $("form").on('submit', function() {
        if($("#uid").val().trim() == "luo" && $("#upwd").val() == "luo") {
            appcan.openWinWithUrl('index', 'index.html');
            return;
        } else {
            appcan.window.openToast({
                msg:'无效账号或错误密码!',
                duration:'2000',
                type:'0'
            });
            return;
        }
        /*
        appcan.request.postForm($("form"), function() {
                    appcan.window.alert({
                        title : "鎻愰啋",
                        content : "鎮ㄥ凡缁忔彁浜や簡琛ㄥ崟:)",
                        buttons : '纭畾',
                        callback : function(err, data, dataType, optId) {
                            console.log(err, data, dataType, optId);
                        }
                    });
                }, function(err) {
                });*/
        
       // return false;
    });
})($); 