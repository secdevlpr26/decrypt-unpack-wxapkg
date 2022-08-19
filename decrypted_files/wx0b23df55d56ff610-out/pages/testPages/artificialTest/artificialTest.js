Page({
    data: {
        faultArr: [ {
            name: "外观有无磨损",
            val: "0"
        }, {
            name: "无重摔变形",
            val: "0"
        }, {
            name: "液晶屏幕",
            val: "0"
        }, {
            name: "触摸IC",
            val: "0"
        }, {
            name: "3D-TOUCH",
            val: "0"
        }, {
            name: "耳机接口",
            val: "0"
        }, {
            name: "充电",
            val: "0"
        }, {
            name: "指纹验证",
            val: "0"
        }, {
            name: "进水/受潮",
            val: "0"
        }, {
            name: "拆修/缺少零部件",
            val: "0"
        } ],
        dataArr: []
    },
    onLoad: function(a) {
        if (a.dataArr) {
            var t = a.dataArr.split("，");
            this.setData({
                dataArr: t
            });
        }
    },
    radioChange: function(a) {
        var t = a.target.dataset.index, r = a.detail.value, e = this.data.faultArr, n = e[t].name;
        e[t] = {
            name: n,
            val: r
        }, this.setData({
            faultArr: e
        });
    },
    createReport: function() {
        var a = this.data.dataArr, t = this.data.faultArr;
        t.map(function(a, r, e) {
            t[r] = JSON.stringify(a);
        });
        var r = (a = a.concat(t)).join("，");
        wx.redirectTo({
            url: "../reportPage/reportPage?dataArr=" + r
        });
    },
    switchBind: function(a) {
        var t = a.currentTarget.dataset.index, r = this.data.faultArr, e = r[t].name, n = 0 == r[t].val ? 1 : 0;
        r[t] = {
            name: e,
            val: n
        }, this.setData({
            faultArr: r
        });
    }
});