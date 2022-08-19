function e(e) {
    for (var t = {}, r = e.split(","), n = 0; n < r.length; n++) t[r[n]] = !0;
    return t;
}

function t(e) {
    return e.replace(/<\?xml.*\?>\n/, "").replace(/<.*!doctype.*\>\n/, "").replace(/<.*!DOCTYPE.*\>\n/, "");
}

function r(e) {
    var t = [];
    if (0 == s.length || !a) return (d = {}).node = "text", d.text = e, n = [ d ];
    e = e.replace(/\[([^\[\]]+)\]/g, ":$1:");
    for (var r = new RegExp("[:]"), n = e.split(r), i = 0; i < n.length; i++) {
        var l = n[i], d = {};
        a[l] ? (d.node = "element", d.tag = "emoji", d.text = a[l], d.baseSrc = o) : (d.node = "text", 
        d.text = l), t.push(d);
    }
    return t;
}

var n = "https", s = "", o = "", a = {}, i = require("./wxDiscode.js"), l = require("./htmlparser.js"), d = (e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), 
e("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")), c = e("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), p = e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), 
e("wxxxcode-style,script,style,view,scroll-view,block");

module.exports = {
    html2json: function(e, s) {
        e = t(e), e = i.strDiscode(e);
        var o = [], a = {
            node: s,
            nodes: [],
            images: [],
            imageUrls: []
        };
        return l(e, {
            start: function(e, t, r) {
                var l = {
                    node: "element",
                    tag: e
                };
                if (d[e] ? l.tagType = "block" : c[e] ? l.tagType = "inline" : p[e] && (l.tagType = "closeSelf"), 
                0 !== t.length && (l.attr = t.reduce(function(e, t) {
                    var r = t.name, n = t.value;
                    return "class" == r && (console.dir(n), l.classStr = n), "style" == r && (console.dir(n), 
                    l.styleStr = n), n.match(/ /) && (n = n.split(" ")), e[r] ? Array.isArray(e[r]) ? e[r].push(n) : e[r] = [ e[r], n ] : e[r] = n, 
                    e;
                }, {})), "img" === l.tag) {
                    l.imgIndex = a.images.length;
                    var u = l.attr.src;
                    u = i.urlToHttpUrl(u, n), l.attr.src = u, l.from = s, a.images.push(l), a.imageUrls.push(u);
                }
                if (r) {
                    var m = o[0] || a;
                    void 0 === m.nodes && (m.nodes = []), m.nodes.push(l);
                } else o.unshift(l);
            },
            end: function(e) {
                var t = o.shift();
                if (t.tag !== e && console.error("invalid state: mismatch end tag"), 0 === o.length) a.nodes.push(t); else {
                    var r = o[0];
                    void 0 === r.nodes && (r.nodes = []), r.nodes.push(t);
                }
            },
            chars: function(e) {
                var t = {
                    node: "text",
                    text: e,
                    textArray: r(e)
                };
                if (0 === o.length) a.nodes.push(t); else {
                    var n = o[0];
                    void 0 === n.nodes && (n.nodes = []), n.nodes.push(t);
                }
            },
            comment: function(e) {}
        }), a;
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", r = arguments[2];
        s = e, o = t, a = r;
    }
};