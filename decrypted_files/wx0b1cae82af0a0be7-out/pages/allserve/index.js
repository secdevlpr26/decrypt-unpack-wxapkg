var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/api"));

getApp();

Page({
    data: {
        currIndex: 0,
        menuList: []
    },
    onLoad: function(t) {
        console.log(t);
        var u = this;
        e.default.serveMenusList("/service/menuList", {
            menuId: t.id
        }).then(function(e) {
            u.data.menuList = e.result, e.result.forEach(function(e, t) {
                1 == e.isDefault && (u.data.currMenu = e, u.data.currIndex = t), e.picture || (e.picture = "../../images/sda23@3x.png");
            }), u.setData({
                menuList: u.data.menuList,
                currMenu: u.data.currMenu,
                currIndex: u.data.currIndex
            });
        });
    },
    selectMenu: function(e) {
        var t = e.currentTarget.dataset.index;
        this.setData({
            currMenu: this.data.menuList[t],
            currIndex: t
        });
    }
});