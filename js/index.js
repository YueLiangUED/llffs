(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //第一个我要办理按钮
    $('.button.one').on('touchend',function () {
        window.location.href = '';
    });
    //第二个我要办理按钮
    $('.button.two').on('touchend',function () {
        window.location.href = '';
    });
});
