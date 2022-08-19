var t = getApp();

require("../../../utils/api/product.js");

Page({
    data: {
        product: {},
        descList: []
    },
    onLoad: function(e) {
        this.setData({
            product: t.globalData.product
        }), console.log("product:", this.data.product), this.parseHTML();
    },
    parseHTML: function() {
        var t = this.data.product.base_attr.desc_html;
        if (t) {
            var e = [];
            console.log("HTML:", t);
            var s = (t = (t = t.replace(/<p([^>]*)?>(.*?)<\/p>/g, "txt|QQ|$2|WX|")).replace(/<div([^>]*)?>(\s*)<img([^>]*)src="([^"]*)"([^>]*)>(\s*)<\/div>/g, "img|QQ|$4|WX|")).split("|WX|");
            if (console.log(s), s.length > 0) for (var a = 0, o = s.length; a < o; a++) {
                var r = s[a].trim();
                if ("" != r) {
                    var l = r.split("|QQ|");
                    "txt" == l[0] ? "" != l[1] && e.push({
                        type: 1,
                        value: l[1].replace(/\<br ?\/?\>/g, "\n")
                    }) : e.push({
                        type: 2,
                        value: l[1]
                    });
                }
            }
            this.setData({
                descList: e
            }), console.log("descList:", e);
        } else console.log("No html_content.");
    }
});