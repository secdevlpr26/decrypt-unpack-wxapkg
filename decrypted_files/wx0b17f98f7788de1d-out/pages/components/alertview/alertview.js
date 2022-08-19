var t = void 0;

getApp().globalData.httpUrl;

Component({
    properties: {
        displayy: {
            type: String,
            value: "none"
        },
        display_alone1: {
            type: String,
            value: "none"
        },
        cancel: {
            type: String,
            value: "关 闭"
        },
        titlename: {
            type: String,
            value: "标题 "
        },
        carname: {
            type: String,
            value: "内容 "
        }
    },
    data: {
        text: "text"
    },
    methods: {
        chkOrder1: function() {
            var e = {}, a = {};
            (t = this).triggerEvent("chkOrder1", e, a), t.setData({
                displayy: "none"
            });
        },
        chkOrder0: function() {
            var e = {}, a = {};
            (t = this).triggerEvent("chkOrder0", e, a), t.setData({
                displayy: "none"
            }), console.log(this.data.text);
        },
        cancel: function() {
            var e = {}, a = {};
            (t = this).triggerEvent("cancel", e, a), t.setData({
                display_alone1: "none"
            });
        }
    }
});