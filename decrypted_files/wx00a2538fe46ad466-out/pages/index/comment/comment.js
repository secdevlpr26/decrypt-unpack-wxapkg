var t = getApp();

Page({
    data: {
        type: "",
        vid: "",
        status: "",
        texthidden: "",
        pinglun_content: ""
    },
    bindinput: function(t) {
        var n = this, a = t.detail.value;
        n.setData({
            pinglun_content: a
        });
    },
    tocomment: function() {
        var t = this, n = t.data.status, a = "", e = "";
        "jubao" == n && (e = t.data.pinglun_content, t.getList(n, a, e)), "pinglun" == n && (a = t.data.pinglun_content, 
        t.getList(n, a, e));
    },
    getList: function(n, a, e) {
        var o = this;
        o.data.pinglun_content ? wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=" + n,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                type: o.data.type,
                vid: o.data.vid,
                pinglun_content: a,
                jubao_content: e
            },
            success: function(t) {
                wx.showModal({
                    title: "提示",
                    content: t.data.result.message,
                    showCancel: !1,
                    success: function(t) {
                        t.confirm && wx.navigateBack();
                    }
                });
            }
        }) : wx.showToast({
            title: o.data.texthidden,
            image: "/images/tongcheng/icon-nomore.png"
        });
    },
    onLoad: function(t) {
        var n = "";
        "jubao" == t.status && (n = "请输入举报内容", wx.setNavigationBarTitle({
            title: "举报"
        })), "pinglun" == t.status && (n = "请输入评论内容", wx.setNavigationBarTitle({
            title: "评论"
        })), this.setData({
            vid: t.vid,
            type: t.type,
            texthidden: n,
            status: t.status
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});