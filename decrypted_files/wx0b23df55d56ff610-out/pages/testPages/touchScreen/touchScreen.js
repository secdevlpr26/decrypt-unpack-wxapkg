Page({
    data: {
        itemWidth: 0,
        itemHeight: 0,
        arr: [],
        blockArr: [],
        itemArr: []
    },
    onLoad: function(t) {
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                console.log(t), t.windowWidth;
                var a = t.windowWidth / 11, i = t.windowHeight / 21;
                e.setData({
                    itemWidth: a,
                    itemHeight: i
                });
            }
        });
        var a = [];
        Array(21).fill("0").forEach(function(t, e, i) {
            a.push(Array(11).fill({
                val: !1
            }, 0, 11));
        });
        var i = [];
        if (Array(4).fill("0").forEach(function(t, e, a) {
            var r = 5 * e + 1;
            i.push({
                top: r,
                left: 1
            }), i.push({
                top: r,
                left: 6
            });
        }), this.setData({
            arr: a,
            blockArr: i
        }), t.dataArr) {
            var r = t.dataArr.split("，");
            this.setData({
                dataArr: r
            });
        }
    },
    touchStart: function(t) {
        this.itemSlect(t);
    },
    touchMove: function(t) {
        this.itemSlect(t);
    },
    touchEnd: function(t) {
        this.itemSlect(t);
    },
    itemSlect: function(t) {
        var e = this.data.itemWidth, a = this.data.itemHeight, i = t.changedTouches[0].clientX, r = t.changedTouches[0].clientY, o = Math.floor(i / e), n = Math.floor(r / a);
        if (!(o > 10 || o < 0 || n > 20 || n < 0)) {
            var c = this.data.arr;
            0 == c[n][o].val && (c[n][o] = {
                val: !0
            }, this.setData({
                arr: c
            }));
        }
    },
    setResult: function() {
        var t = this;
        wx.showModal({
            title: "提交结果",
            content: "触摸屏功能正常吗？",
            confirmText: "正常",
            cancelText: "异常",
            success: function(e) {
                if (e.confirm) {
                    console.log("用户点击确定");
                    var a = {
                        name: "触摸屏",
                        val: "0"
                    };
                    t.goToScreenTest(a);
                } else if (e.cancel) {
                    console.log("用户点击取消");
                    var i = {
                        name: "触摸屏",
                        val: "1"
                    };
                    t.goToScreenTest(i);
                }
            }
        });
    },
    goToScreenTest: function(t) {
        var e = this.data.dataArr, a = JSON.stringify(t);
        e.push(a);
        var i = e.join("，");
        wx.redirectTo({
            url: "../screenTest/screenTest?dataArr=" + i
        });
    }
});