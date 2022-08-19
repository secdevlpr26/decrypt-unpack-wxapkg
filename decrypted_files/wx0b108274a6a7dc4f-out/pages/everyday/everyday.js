var t = getApp(), o = require("../../request/api.js");

Page({
    data: {
        imgUrl: o.API_IMG,
        ind: 0,
        setIntervalId: "",
        page: 0,
        pageSize: 4,
        hasMore: !0,
        contentList: []
    },
    onLoad: function(t) {},
    getList: function() {
        var t = this;
        wx.request({
            url: o.look1(this.data.page),
            success: function(o) {
                console.log(o), 1 == o.data.status && o.data.re.length < 4 ? (console.log("合并后的新数组", t.data.contentList.concat(o.data.re)), 
                t.setData({
                    hasMore: !1,
                    contentList: t.data.contentList.concat(o.data.re)
                })) : 1 == o.data.status && o.data.re.length >= 4 ? (t.setData({
                    hasMore: !0,
                    page: t.data.page + 1
                }), console.log("合并后的新数组", t.data.contentList.concat(o.data.re)), t.setData({
                    contentList: t.data.contentList.concat(o.data.re)
                })) : (console.log("获取失败"), t.setData({
                    hasMore: !1
                }));
            }
        });
    },
    toDetail: function(t) {
        console.log(t), wx.navigateTo({
            url: "/pages/video_detail2/video_detail2?id=" + t.currentTarget.dataset.id
        });
    },
    play: function(t) {
        console.log("视频开始/继续播放"), wx.request({
            url: o.look3(t.currentTarget.dataset.id),
            success: function(t) {
                console.log(t);
            }
        });
    },
    video_zan: function(a) {
        wx.request({
            url: o.look4(t.globalData.openid, a.currentTarget.dataset.id),
            success: function(t) {
                console.log(t), wx.showToast({
                    title: t.data.msg
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        this.getList();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        var t = this;
        console.log("上拉加载"), this.data.hasMore ? (wx.showLoading({
            title: "加载中"
        }), setTimeout(function() {
            t.getList(), wx.hideLoading();
        }, 1500)) : wx.showToast({
            title: "没有下一页了",
            icon: "none"
        });
    },
    onShareAppMessage: function() {}
});