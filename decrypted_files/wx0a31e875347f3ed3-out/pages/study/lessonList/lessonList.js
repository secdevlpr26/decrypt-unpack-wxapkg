var t = require("../../../utils/api").getUserGroupList;

Page({
    data: {
        groupList: []
    },
    onLoad: function(t) {
        this.getList();
    },
    getList: function() {
        var n = this;
        t().then(function(t) {
            var o = t.currently_learning_list.concat(t.closed_list);
            o.forEach(function(t) {
                console.log(t), t.course_cover_url || (t.course_cover_url = "http://static2.rainbowclass.cn/static/static-rainbow/img/default.jpg");
            }), n.setData({
                groupList: o
            });
        });
    },
    goToStudyIndex: function() {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});