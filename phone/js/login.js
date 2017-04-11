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
            appcan.ajax({
                url : 'http://localhost:8080/RepairCarApp/admin/adminLogin',
                type : 'POST',
                data : {
                    name : $("#uid").val().trim(),
                    password : $("#upwd").val()
                },
                offline : true,
                success : function(data) {
                    var obj = JSON.parse(data);
                    if(obj.success) {
                        appcan.window.openToast({
                            msg:'登陆成功！',
                            duration:'2000',
                            type:'0'
                        });
                        appcan.openWinWithUrl('index', 'index.html');
                        return;
                    } else {
                        appcan.window.openToast({
                            msg : obj.reason,
                            duration: '2000',
                            type:'0'
                        });
                        return;
                    }
                },
                error : function(e) {
                    alert(e);
                }
            });
        }

    }
    
    /**
     * 构造返回值对象
 * @param {Object} success
 * @param {Object} reason
 * @param {Object} maxCount
 * @param {Object} allOrders
     */
    var ReturnObj = function(success, reason) {
        this.success = success;
        this.reason = reason;
        ReturnObj.prototype.setSuccess = function(success) {
            this.success = success;
        }
        ReturnObj.prototype.setReason = function(reason) {
            this.reason = reason;
        }
    }
    
})($); 