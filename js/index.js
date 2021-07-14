$(document).ready(function() {
    
    var wow = new WOW({
        mobile:false// إلغاء حركة تأثيرات على هواتف صغيرة 
    });
    wow.init();

    $(function () {
        $("#emailForm").validate();// حقل إلزامي 
    });

});