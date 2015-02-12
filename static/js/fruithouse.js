$(document).ready(function() {
    $(".btn-navbar_").click(function() {
        $(".nav-collapse").toggleClass("collapse").animate();
    });
    $('#btn-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
    $.browserTips("../img/browsers.png");
});
;(function() {
    $.browserTips = function(img) {
        var _html = '<!--[if (lt IE 8) ]><style>.browser-suport {margin:0; padding:10px 0 0 0; position:absolute; z-index:999; width:100%; top: 0; background:#fff;text-align: center;}.browser-suport-title {background-color: yellow;border-bottom: 1px solid #ddd;padding: 5px;font-weight: bold;color: #333;}.browser-suport a {display: block;background: url(' + img + ') no-repeat;width: 50px;height: 50px;}.browser-suport table {margin: 0 auto 10px auto;}.browser-suport th {vertical-align: middle;padding:0 10px;font-size: 30px;font-weight: bold;color: #ccc;}.browser-suport td {vertical-align: middle;padding:0 10px;}.browser-suport .browser-suport-chrome {background-position: 0 5px;}.browser-suport .browser-suport-firefox {background-position: 0 -45px;}.browser-suport .browser-suport-360 {background-position: 0 -149px;}.browser-suport .browser-suport-sougou {background-position: 0 -96px;}</style><div class="browser-suport"><table><tr><th>推荐浏览器</th><td><a target="_blank" href="http://www.google.cn/intl/zh-CN/chrome/" title="chrome" class="browser-suport-chrome"></a></td><td><a target="_blank" href="http://www.firefox.com.cn/download/" title="firefox" class="browser-suport-firefox"></a></td><td><a target="_blank" href="http://se.360.cn/" title="360" class="browser-suport-360"></a></td><td><a target="_blank" href="http://ie.sogou.com/" title="sougou" class="browser-suport-sougou"></a></td></tr></table><div class="browser-suport-title">您的浏览器版本过低,部分功能无法正常使用,请使用IE8及以上浏览器重新登录</div></div><![endif]-->'
        $('body').append(_html);
    }
})(jQuery);