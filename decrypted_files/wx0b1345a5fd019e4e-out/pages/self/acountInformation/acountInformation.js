var a = getApp();

Page({
    data: {
        imgPath: "",
        nickname: "",
        sex: ""
    },
    onLoad: function() {},
    onShow: function() {
        switch (this.setData({
            imgPath: a.globalData.wxUserInfo.avatarUrl,
            sex: a.globalData.wxUserInfo.sex,
            nickname: a.globalData.wxUserInfo.nickName
        }), a.globalData.wxUserInfo.gender) {
          case 0:
            this.setData({
                sex: "未知"
            });
            break;

          case 1:
            this.setData({
                sex: "男"
            });
            break;

          case 2:
            this.setData({
                sex: "女"
            });
        }
    },
    followtap: function() {
        wx.navigateTo({
            url: "qrCode/qrCode"
        });
    }
});