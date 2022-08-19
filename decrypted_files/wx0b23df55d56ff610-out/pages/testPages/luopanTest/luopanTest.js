Page({
    data: {
        direction: 0
    },
    onReady: function() {
        var t = this;
        wx.onCompassChange(function(a) {
            t.setData({
                direction: parseInt(a.direction)
            });
        });
    },
    setResult: function(t) {
        var a = t.currentTarget.dataset.val;
        console.log(a);
        var i = {
            name: "指南针",
            val: a
        };
        this.goToJiasuyiTest(i);
    },
    goToJiasuyiTest: function(t) {
        var a = [], i = JSON.stringify(t);
        a.push(i), console.log(a);
        var e = a.join("，");
        wx.redirectTo({
            url: "../jiasuyiTest/jiasuyiTest?dataArr=" + e
        });
    }
});