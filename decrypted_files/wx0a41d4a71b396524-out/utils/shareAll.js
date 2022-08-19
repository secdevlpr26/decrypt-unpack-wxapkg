!function() {
    var e = Page;
    Page = function(n) {
        var t = "";
        wx.onAppRoute(function(e) {
            var n = getCurrentPages(), r = n[n.length - 1];
            t = r.route;
        }), n = Object.assign({
            onShareAppMessage: function() {
                var e = {}, n = [ "index/index" ];
                return t.includes(n) || (e = {
                    title: "自定义全局分享",
                    imageUrl: wx.getStorageSync("shareUrl")
                }), e;
            }
        }, n), e(n);
    };
}();