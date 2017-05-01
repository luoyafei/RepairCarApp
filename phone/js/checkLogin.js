(function($) {
    appcan.ajax({
        url : 'http://localhost:8080/RepairCarApp/admin/checkLogin',
        type : 'GET',
        data : {},
        offline : true,
        success : function(data) {
            var obj = JSON.parse(data);
            alert(1);
            alert(JSON.stringify(obj))
            if(!obj.success) {
                appcan.openWinWithUrl('login', 'login.html');
                return;
            }
        },
        error : function(e) {
            alert(e);
        }
    });
})($); 