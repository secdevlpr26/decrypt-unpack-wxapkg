Page({
    data: {
        star: 0,
        awardMedal: {},
        starList: [],
        goldNumber: 0,
        silverNumber: 0,
        copperNumber: 0,
        id: 0
    },
    onLoad: function(a) {
        var r = this;
        a.star && a.awardMedal ? r.setData({
            starList: new Array(parseInt(a.star)).fill("star"),
            goldNumber: JSON.parse(a.awardMedal).gold,
            silverNumber: JSON.parse(a.awardMedal).silver,
            copperNumber: JSON.parse(a.awardMedal).copper,
            id: a.id
        }) : r.setData({
            id: a.id
        });
    },
    toVideo: function() {
        var a = this.data.id;
        wx.redirectTo({
            url: "/pages/liveclass/index/index?id=" + a
        });
    }
});