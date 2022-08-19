function a(a, t, r) {
    return t in a ? Object.defineProperty(a, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = r, a;
}

var t;

Page((t = {
    data: {
        dataArr: [],
        faultArr: [],
        btnClicked: !1
    },
    onLoad: function(a) {
        if (a.dataArr) {
            var t = a.dataArr.split("，");
            this.setData({
                dataArr: t
            });
        }
    },
    openCamera: function() {
        wx.chooseImage({
            count: 1,
            sourceType: [ "camera" ],
            success: function(a) {}
        }), this.setData({
            btnClicked: !this.data.btnClicked
        });
    },
    setResult: function() {
        var a = this.data.dataArr;
        a.push(JSON.stringify({
            name: "主摄像头",
            val: "0"
        }), JSON.stringify({
            name: "前置摄像头",
            val: "0"
        }), JSON.stringify({
            name: "闪光灯",
            val: "0"
        }));
        var t = a.join("，");
        wx.redirectTo({
            url: "../receiverAndSenorTest/receiverAndSenorTest?dataArr=" + t
        });
    },
    checkboxChange: function(a) {
        var t = [ {
            name: "主摄像头",
            val: 0
        }, {
            name: "前置摄像头",
            val: 0
        }, {
            name: "闪光灯",
            val: 0
        } ];
        a.detail.value.forEach(function(a, r, e) {
            t.map(function(t, r, e) {
                r == a && (t.val = 1);
            });
        }), this.setData({
            faultArr: t
        });
    },
    submitErr: function() {
        if (0 != this.data.faultArr.length) {
            var a = this.data.dataArr, t = this.data.faultArr;
            t.map(function(a, r, e) {
                t[r] = JSON.stringify(a);
            });
            var r = (a = a.concat(t)).join("，");
            wx.redirectTo({
                url: "../receiverAndSenorTest/receiverAndSenorTest?dataArr=" + r
            });
        } else wx.showModal({
            title: "提示",
            content: "请至少选择一项",
            showCancel: !1
        });
    }
}, a(t, "submitErr", function() {
    if (0 != this.data.faultArr.length) {
        var a = this.data.dataArr, t = this.data.faultArr;
        t.map(function(a, r, e) {
            t[r] = JSON.stringify(a);
        });
        var r = (a = a.concat(t)).join("，");
        wx.redirectTo({
            url: "../labaAndMikeTest/labaAndMikeTest?dataArr=" + r
        });
    } else wx.showModal({
        title: "提示",
        content: "请至少选择一项",
        showCancel: !1
    });
}), a(t, "errItemBind", function(a) {
    var t = a.currentTarget.dataset.index, r = "[]" === JSON.stringify(this.data.faultArr) ? [ {
        name: "主摄像头",
        val: 0
    }, {
        name: "前置摄像头",
        val: 0
    }, {
        name: "闪光灯",
        val: 0
    } ] : this.data.faultArr;
    r.map(function(a, e, n) {
        e == t && (a.val = "0" == a.val ? "1" : "0", r[e] = a, console.log(r));
    }), this.setData({
        faultArr: r
    });
}), a(t, "errBtnBind", function() {
    var a = !1, t = this.data.faultArr;
    if (t.map(function(t, r, e) {
        1 == t.val && (a = !0);
    }), a) {
        var r = this.data.dataArr;
        t.map(function(a, r, e) {
            t[r] = JSON.stringify(a);
        });
        var e = (r = r.concat(t)).join("，");
        wx.redirectTo({
            url: "../receiverAndSenorTest/receiverAndSenorTest?dataArr=" + e
        });
    } else wx.showModal({
        title: "提示",
        content: "请至少选择一项",
        showCancel: !1
    });
}), t));