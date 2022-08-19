var a = getApp();

Page({
    data: {
        photo_url: a.globalData.fileimg,
        imgurl: a.globalData.imgurl,
        hiddenLoading: !1,
        page: 1
    },
    onLoad: function() {
        this.GetList();
    },
    GetList: function(t) {
        (t = this).setData({
            hiddenLoading: !1
        }), wx.request({
            url: a.globalData.url + a.globalData.parameter + "&r=groups.wxapp_index",
            data: {
                page: t.data.page,
                pagesize: 2
            },
            success: function(a) {
                var e = a.data.result.advs;
                1 == a.data.status && t.setData({
                    images: e,
                    hiddenLoading: !0,
                    navs: a.data.result.category,
                    goods_recommend: a.data.result.recgoods
                });
            },
            complete: function(a) {
                wx.stopPullDownRefresh(), t.setData({
                    hiddenLoading: !0
                }), wx.hideLoading && wx.hideLoading();
            }
        });
    },
    toDetailsTap: function(a) {
        wx.navigateTo({
            url: "../../groups/pages/pintuan_goods-details/index?id=" + a.currentTarget.dataset.id
        });
    },
    getNavDetail: function(a) {
        var t = a.currentTarget.id.split("_")[0], e = a.currentTarget.id.split("_")[1];
        wx.navigateTo({
            url: "../../groups/pages/pintuan_classify/index?type=classify&categoryid=" + t + "&categoryTitle=" + e
        });
    },
    onPullDownRefresh: function() {
        var a = this;
        a.data.page = 1, this.setData({
            list: []
        }), this.GetList(a);
    },
    onReachBottom: function() {
        var a = this;
        a.data.page++, this.GetList(a);
    }
});