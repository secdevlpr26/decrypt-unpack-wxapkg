Page({
    data: {
        url: ""
    },
    onLoad: function(o) {
        var e = this;
        console.log("---进入的url", decodeURIComponent(decodeURIComponent(o.url))), this.setData({
            url: decodeURIComponent(decodeURIComponent(o.url))
        }, function() {
            console.log("设置完url后url的值", e.data.url);
        });
    }
});