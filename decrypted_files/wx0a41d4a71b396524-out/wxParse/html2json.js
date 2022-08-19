function e(e) {
    for (var t = {}, r = e.split(","), s = 0; s < r.length; s++) t[r[s]] = !0;
    return t;
}

function t(e) {
    return e.replace(/<\?xml.*\?>\n/, "").replace(/<.*!doctype.*\>\n/, "").replace(/<.*!DOCTYPE.*\>\n/, "");
}

function r(e) {
    return e.replace(/\r?\n+/g, "").replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<");
}

function s(e) {
    var t = [];
    if (0 == o.length || !l) return (d = {}).node = "text", d.text = e, s = [ d ];
    e = e.replace(/\[([^\[\]]+)\]/g, ":$1:");
    for (var r = new RegExp("[:]"), s = e.split(r), a = 0; a < s.length; a++) {
        var n = s[a], d = {};
        l[n] ? (d.node = "element", d.tag = "emoji", d.text = l[n], d.baseSrc = i) : (d.node = "text", 
        d.text = n), t.push(d);
    }
    return t;
}

var a = require("../utils/config.js"), n = "https", o = "", i = "", l = {}, d = require("./wxDiscode.js"), c = require("./htmlparser.js"), u = (e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), 
e("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")), p = e("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), g = e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), 
e("wxxxcode-style,script,style,view,scroll-view,block");

module.exports = {
    html2json: function(e, o) {
        e = r(e = t(e)), e = d.strDiscode(e);
        var i = [], l = {
            node: o,
            nodes: [],
            images: [],
            imageUrls: []
        }, m = 0;
        return c(e, {
            start: function(e, t, r) {
                var s = {
                    node: "element",
                    tag: e
                };
                if (0 === i.length ? (s.index = m.toString(), m += 1) : (void 0 === (b = i[0]).nodes && (b.nodes = []), 
                s.index = b.index + "." + b.nodes.length), u[e] ? s.tagType = "block" : p[e] ? s.tagType = "inline" : g[e] && (s.tagType = "closeSelf"), 
                0 !== t.length && (s.attr = t.reduce(function(e, t) {
                    var r = t.name, a = t.value;
                    return "class" == r && (console.dir(a), s.classStr = a), "style" == r && (console.dir(a), 
                    s.styleStr = a), a.match(/ /) && (a = a.split(" ")), e[r] ? Array.isArray(e[r]) ? e[r].push(a) : e[r] = [ e[r], a ] : e[r] = a, 
                    e;
                }, {})), "img" === s.tag) {
                    s.imgIndex = l.images.length;
                    var c = a.imgRootPath + s.attr.src;
                    (s.attr.src.includes("http://") || s.attr.src.includes("https://")) && (c = s.attr.src), 
                    "" == c[0] && c.splice(0, 1), c = d.urlToHttpUrl(c, n), s.attr.src = c, s.from = o, 
                    l.images.push(s), l.imageUrls.push(c);
                }
                if ("font" === s.tag) {
                    var h = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large" ], f = {
                        color: "color",
                        face: "font-family",
                        size: "font-size"
                    };
                    s.attr.style || (s.attr.style = []), s.styleStr || (s.styleStr = "");
                    for (var v in f) if (s.attr[v]) {
                        var x = "size" === v ? h[s.attr[v] - 1] : s.attr[v];
                        s.attr.style.push(f[v]), s.attr.style.push(x), s.styleStr += f[v] + ": " + x + ";";
                    }
                }
                if ("source" === s.tag && (l.source = s.attr.src), r) {
                    var b = i[0] || l;
                    void 0 === b.nodes && (b.nodes = []), b.nodes.push(s);
                } else i.unshift(s);
            },
            end: function(e) {
                var t = i.shift();
                if (t.tag !== e && console.error("invalid state: mismatch end tag"), "video" === t.tag && l.source && (t.attr.src = l.source, 
                delete l.source), 0 === i.length) l.nodes.push(t); else {
                    var r = i[0];
                    void 0 === r.nodes && (r.nodes = []), r.nodes.push(t);
                }
            },
            chars: function(e) {
                var t = {
                    node: "text",
                    text: e,
                    textArray: s(e)
                };
                if (0 === i.length) t.index = m.toString(), m += 1, l.nodes.push(t); else {
                    var r = i[0];
                    void 0 === r.nodes && (r.nodes = []), t.index = r.index + "." + r.nodes.length, 
                    r.nodes.push(t);
                }
            },
            comment: function(e) {}
        }), l;
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", r = arguments[2];
        o = e, i = t, l = r;
    }
};