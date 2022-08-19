function e(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

var a = require("../../utils/util.js"), t = require("../../config.js"), s = getApp(), i = a.getImgUrl();

Page({
    data: {
        scaleWidth: "",
        scaleHeight: "",
        dataimg: "",
        gradient1: "#3A4A80",
        gradient2: "#6294A6",
        swipIndex: 0,
        arrayStatus: [],
        despage: "tupianku",
        title: "tupianku",
        likeImg: i + "wepy_pro/v1-2/Thumbup@2x.png",
        likeImgRed: i + "wepy_pro/v1-2/Thumbup-red.png",
        isChosed: 1,
        imgTotal: [],
        currentType: {
            atlasResponseList: [ {} ]
        },
        movableWidth: 0
    },
    likeAdd: function(e) {
        var i = this, n = i.data.imgTotal, r = !1;
        return n.forEach(function(a) {
            a.groupType == e.currentTarget.dataset.type && a.atlasResponseList.forEach(function(a) {
                a.id == e.currentTarget.dataset.id && (r = a.like);
            });
        }), 1 != r && (console.log("that.data.flag:", i.data.flag, r), 0 != i.data.flag && (i.data.flag = !1, 
        console.log("that.data.flag:", i.data.flag, r), void wx.request({
            url: a.newUrl() + "elab-marketing-content/atlas/updateLike",
            method: "POST",
            data: {
                appVersion: "",
                authToken: "",
                environment: "3",
                houseId: t.houseId,
                imageId: e.currentTarget.dataset.id,
                imageType: e.currentTarget.dataset.type,
                like: 1 == r ? -1 : 1,
                openId: s.globalData.openid,
                uid: ""
            },
            success: function(t) {
                n.forEach(function(a) {
                    a.groupType == e.currentTarget.dataset.type && a.atlasResponseList.forEach(function(a) {
                        a.id == e.currentTarget.dataset.id && (console.log("item.likeNumber:", a.likeNumber, r, a.like), 
                        a.likeNumber = a.likeNumber + (1 == r ? -1 : 1), a.like = !r);
                    });
                }), i.setData({
                    imgTotal: n,
                    flag: !0
                }), console.log(i.data.imgTotal), n.forEach(function(a) {
                    a.groupType == e.currentTarget.dataset.type && i.setData({
                        currentType: a
                    });
                }), console.log(i.data.currentType);
                var o = {
                    pvCurPageName: i.data.title || "",
                    clkId: "clk_2cmina_37",
                    clkParams: {
                        imageCode: e.currentTarget.dataset.id
                    },
                    clkName: "dianzan",
                    type: "CLK"
                };
                a.trackRequest(o, s);
            }
        })));
    },
    selectTap: function(e) {
        switch (e.currentTarget.dataset.type) {
          case 1:
            t = "xiaoguotu";
            break;

          case 2:
            t = "yangbanjiantu";
            break;

          case 3:
            t = "shijingtu";
            break;

          case 4:
            var t = "peitaotu";
        }
        var i = this;
        console.log(e.currentTarget.dataset.type), this.setData({
            swipIndex: 0,
            isChosed: e.currentTarget.dataset.type
        }), console.log(this.data.imgTotal), this.data.imgTotal.forEach(function(a) {
            if (a.groupType == e.currentTarget.dataset.type) {
                i.setData({
                    currentType: a
                });
                var t = [];
                t.length = a.atlasResponseList.length, t.fill(!1), a.atlasResponseList[0] && (t[0] = a.atlasResponseList[0]), 
                a.atlasResponseList[1] && (t[1] = a.atlasResponseList[1]), i.setData({
                    arrayStatus: t
                });
            }
        });
        var n = {
            pvCurPageName: "tupianku",
            clkId: "clk_2cmina_38",
            clkName: "tupiankuleixing",
            clkParams: {
                imageCode: this.data.currentType.atlasResponseList[this.data.swipIndex].id,
                real_view: t,
                buttonType: "show_rooom"
            },
            type: "CLK"
        };
        a.trackRequest(n, s), console.log(i.data.currentType);
    },
    swipChange: function(a) {
        if (a.detail.current < this.data.arrayStatus.length - 1) {
            var t = "arrayStatus[" + (a.detail.current + 1) + "]";
            this.setData(e({}, t, this.data.currentType.atlasResponseList[a.detail.current + 1]));
        }
    },
    onLoad: function(e) {
        wx.showLoading({
            title: "正在加载"
        });
        var i = this;
        console.log(e.type), wx.request({
            url: a.newUrl() + "elab-marketing-content/atlas/listGroup",
            method: "post",
            data: {
                appVersion: "",
                authToken: "",
                environment: "",
                houseId: t.houseId,
                openId: s.globalData.openid,
                uid: ""
            },
            success: function(a) {
                var t = 0;
                i.setData({
                    imgTotal: a.data.list
                }), e.type && i.data.imgTotal.forEach(function(a) {
                    if (t += 30 * a.groupName.length + 38, a.groupType == e.type) {
                        i.setData({
                            currentType: a,
                            isChosed: e.type
                        }), console.log(i.data.currentType);
                        var s = [];
                        s.length = a.atlasResponseList.length, s.fill(!1), a.atlasResponseList[0] && (s[0] = a.atlasResponseList[0]), 
                        a.atlasResponseList[1] && (s[1] = a.atlasResponseList[1]), i.setData({
                            arrayStatus: s
                        });
                    }
                }), i.setData({
                    movableWidth: t
                }), console.log(i.data.currentType, "PPPPPPPPPPPPPPPPPPP", i.data.movableWidth), 
                wx.hideLoading();
            },
            fail: function(e) {
                wx.hideLoading();
            }
        });
    },
    onReady: function() {
        wx.setNavigationBarTitle({
            title: "图片库"
        });
    },
    previewImage: function(e) {
        var a = e.target.dataset.src;
        wx.previewImage({
            current: a,
            urls: [ e.target.dataset.src ]
        });
    },
    onShow: function() {
        wx.setStorageSync("loadTime", new Date().getTime()), console.log("路由", getCurrentPages());
        var e = {
            pvId: "P_2cMINA_14",
            pvCurPageName: this.data.despage || "",
            pvCurPageParams: "",
            pvLastPageName: "zhuye",
            pvLastPageParams: "",
            pvPageLoadTime: new Date().getTime() - wx.getStorageSync("loadTime"),
            type: "PV"
        };
        a.trackRequest(e, s);
    },
    onHide: function() {},
    onUnload: function() {
        var e = {
            pvPageStayTime: (new Date().getTime() - wx.getStorageSync("loadTime")) / 1e3,
            pvCurPageName: this.data.despage || "",
            clkDesPage: "zhuye",
            clkName: "fanhui",
            clkId: "clk_2cmina_36",
            clkParams: {
                imageCode: this.data.currentType.atlasResponseList[this.data.swipIndex].id || ""
            },
            type: "CLK"
        };
        a.trackRequest(e, s);
    }
});