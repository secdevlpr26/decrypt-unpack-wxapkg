var a = {
    name: "hello weChat"
};

Page({
    data: a,
    changeName: function() {
        this.setData({
            name: "hello 张三"
        });
    },
    loginRedirect: function() {
        wx.navigateTo({
            url: "main?username=qingtian&password=qingtian"
        });
    }
});