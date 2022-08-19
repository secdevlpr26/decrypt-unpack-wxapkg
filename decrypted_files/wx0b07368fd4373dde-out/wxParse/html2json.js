function e(e) {
    for (var t = {}, r = e.split(","), n = 0; n < r.length; n++) t[r[n]] = !0;
    return t;
}

function t(e) {
    return e.replace(/<\?xml.*\?>\n/, "").replace(/<.*!doctype.*\>\n/, "").replace(/<.*!DOCTYPE.*\>\n/, "");
}

function r(e) {
    return e.replace(/\n+/g, "").replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<");
}

function n(e) {
    var t = [];
    if (0 == a.length || !i) return (d = {}).node = "text", d.text = e, n = [ d ];
    e = e.replace(/\[([^\[\]]+)\]/g, ":$1:");
    for (var r = new RegExp("[:]"), n = e.split(r), s = 0; s < n.length; s++) {
        var l = n[s], d = {};
        i[l] ? (d.node = "element", d.tag = "emoji", d.text = i[l], d.baseSrc = o) : (d.node = "text", 
        d.text = l), t.push(d);
    }
    return t;
}

var s = "https", a = "", o = "", i = {}, l = require("./wxDiscode.js"), d = require("./htmlparser.js"), c = (e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), 
e("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")), u = e("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), p = e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), 
e("wxxxcode-style,script,style,view,scroll-view,block");

module.exports = {
    html2json: function(e, a) {
        e = r(e = t(e)), e = l.strDiscode(e);
        var o = [], i = {
            node: a,
            nodes: [],
            images: [],
            imageUrls: []
        }, m = 0;
        return d(e, {
            start: function(e, t, r) {
                var n = {
                    node: "element",
                    tag: e
                };
                if (0 === o.length ? (n.index = m.toString(), m += 1) : (void 0 === (x = o[0]).nodes && (x.nodes = []), 
                n.index = x.index + "." + x.nodes.length), c[e] ? n.tagType = "block" : u[e] ? n.tagType = "inline" : p[e] && (n.tagType = "closeSelf"), 
                0 !== t.length && (n.attr = t.reduce(function(e, t) {
                    var r = t.name, s = t.value;
                    return "class" == r && (n.classStr = s), "style" == r && (n.styleStr = s), s.match(/ /) && (s = s.split(" ")), 
                    e[r] ? Array.isArray(e[r]) ? e[r].push(s) : e[r] = [ e[r], s ] : e[r] = s, e;
                }, {})), "img" === n.tag) {
                    n.imgIndex = i.images.length;
                    var d = n.attr.src;
                    null == d || "" == d || "undefined" == d || ("" != d[0] && "undefined" != d[0] && null != d[0] || d.splice(0, 1), 
                    d = l.urlToHttpUrl(d, s), n.attr.src = d, n.from = a, i.images.push(n), i.imageUrls.push(d));
                }
                if ("font" === n.tag) {
                    var f = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large" ], g = {
                        color: "color",
                        face: "font-family",
                        size: "font-size"
                    };
                    n.attr.style || (n.attr.style = []), n.styleStr || (n.styleStr = "");
                    for (var h in g) if (n.attr[h]) {
                        var v = "size" === h ? f[n.attr[h] - 1] : n.attr[h];
                        n.attr.style.push(g[h]), n.attr.style.push(v), n.styleStr += g[h] + ": " + v + ";";
                    }
                }
                if ("source" === n.tag && (i.source = n.attr.src), r) {
                    var x = o[0] || i;
                    void 0 === x.nodes && (x.nodes = []), x.nodes.push(n);
                } else o.unshift(n);
            },
            end: function(e) {
                var t = o.shift();
                if (t.tag !== e && console.error("invalid state: mismatch end tag"), "video" === t.tag && i.source && (t.attr.src = i.source, 
                delete i.source), 0 === o.length) i.nodes.push(t); else {
                    var r = o[0];
                    void 0 === r.nodes && (r.nodes = []), r.nodes.push(t);
                }
            },
            chars: function(e) {
                var t = {
                    node: "text",
                    text: e,
                    textArray: n(e)
                };
                if (0 === o.length) i.nodes.push(t); else {
                    var r = o[0];
                    void 0 === r.nodes && (r.nodes = []), t.index = r.index + "." + r.nodes.length, 
                    r.nodes.push(t);
                }
            },
            comment: function(e) {}
        }), i;
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", r = arguments[2];
        a = e, o = t, i = r;
    }
};