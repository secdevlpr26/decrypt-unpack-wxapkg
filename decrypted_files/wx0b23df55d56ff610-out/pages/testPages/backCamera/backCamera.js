Page({
    data: {
        dataArr: [],
        faultArr: []
    },
    onLoad: function(a) {
        if (a.dataArr) {
            var t = a.dataArr.split("，");
            this.setData({
                dataArr: t
            });
        }
        wx.showToast({
            icon: "loading",
            title: "打开摄像头中",
            duration: 1500
        });
    },
    stop: function() {
        console.log("stop");
    },
    setResult: function(a) {
        var t = a.currentTarget.dataset.val;
        console.log(t);
        var r = {
            name: "后置摄像头",
            val: t
        };
        this.goToJiasuyiTest(r);
    },
    goToJiasuyiTest: function(a) {
        var t = this.data.dataArr, r = JSON.stringify(a);
        t.push(r), console.log(t);
        var o = t.join("，");
        wx.redirectTo({
            url: "../frontCamera/frontCamera?dataArr=" + o
        });
    }
});