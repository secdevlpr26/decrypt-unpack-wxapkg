function makeMap(e) {
    for (var t = {}, r = e.split(","), s = 0; s < r.length; s++) t[r[s]] = !0;
    return t;
}

function q(e) {
    return '"' + e + '"';
}

function removeDOCTYPE(e) {
    return e.replace(/<\?xml.*\?>\n/, "").replace(/<.*!doctype.*\>\n/, "").replace(/<.*!DOCTYPE.*\>\n/, "");
}

function html2json(e, t) {
    e = removeDOCTYPE(e), e = wxDiscode.strDiscode(e);
    var r = [], s = {
        node: t,
        nodes: [],
        images: [],
        videos: [],
        imageUrls: []
    };
    return HTMLParser(e, {
        start: function(e, a, o) {
            var i = {
                node: "element",
                tag: e
            };
            if (block[e] ? i.tagType = "block" : inline[e] ? i.tagType = "inline" : closeSelf[e] && (i.tagType = "closeSelf"), 
            0 !== a.length && (i.attr = a.reduce(function(e, t) {
                var r = t.name, s = t.value;
                return "class" == r && (i.classStr = s), "style" == r && (i.styleStr = s), s.match(/ /) && (s = s.split(" ")), 
                e[r] ? Array.isArray(e[r]) ? e[r].push(s) : e[r] = [ e[r], s ] : e[r] = s, e;
            }, {})), "img" === i.tag) {
                i.imgIndex = s.images.length;
                var n = i.attr.src;
                n = wxDiscode.urlToHttpUrl(n, __placeImgeUrlHttps), i.attr.src = n, i.from = t, 
                s.images.push(i), s.imageUrls.push(n);
            }
            if ("video" === i.tag) {
                var n = i.attr.src;
                n = wxDiscode.urlToHttpUrl(n, __placeImgeUrlHttps), i.attr.src = n, i.from = t, 
                s.videos.push(i);
            }
            if ("font" === i.tag) {
                var l = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large" ], c = {
                    color: "color",
                    face: "font-family",
                    size: "font-size"
                };
                void 0 == i.attr && (i.attr = {}), i.attr.style || (i.attr.style = []), i.styleStr || (i.styleStr = "");
                for (var d in c) if (i.attr[d]) {
                    var m = "size" === d ? l[i.attr[d] - 1] : i.attr[d];
                    i.attr.style.push(c[d]), i.attr.style.push(m), i.styleStr += c[d] + ": " + m + ";";
                }
            }
            if ("source" === i.tag && (s.source = i.attr.src), o) {
                var p = r[0] || s;
                void 0 === p.nodes && (p.nodes = []), p.nodes.push(i);
            } else r.unshift(i);
        },
        end: function(e) {
            var t = r.shift();
            if (t.tag !== e && console.error("invalid state: mismatch end tag"), "video" === t.tag && s.source && (t.attr.src = s.source, 
            delete s.source), 0 === r.length) s.nodes.push(t); else {
                var a = r[0];
                void 0 === a.nodes && (a.nodes = []), a.nodes.push(t);
            }
        },
        chars: function(e) {
            var t = {
                node: "text",
                text: e,
                textArray: transEmojiStr(e)
            };
            if (0 === r.length) s.nodes.push(t); else {
                var a = r[0];
                void 0 === a.nodes && (a.nodes = []), a.nodes.push(t);
            }
        },
        comment: function(e) {}
    }), s;
}

function transEmojiStr(e) {
    var t = [];
    if (0 == __emojisReg.length || !__emojis) {
        var r = {};
        return r.node = "text", r.text = e, a = [ r ];
    }
    e = e.replace(/\[([^\[\]]+)\]/g, ":$1:");
    for (var s = new RegExp("[:]"), a = e.split(s), o = 0; o < a.length; o++) {
        var i = a[o], r = {};
        __emojis[i] ? (r.node = "element", r.tag = "emoji", r.text = __emojis[i], r.baseSrc = __emojisBaseSrc) : (r.node = "text", 
        r.text = i), t.push(r);
    }
    return t;
}

function emojisInit() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", r = arguments[2];
    __emojisReg = e, __emojisBaseSrc = t, __emojis = r;
}

var __placeImgeUrlHttps = "https", __emojisReg = "", __emojisBaseSrc = "", __emojis = {}, wxDiscode = require("./wxDiscode.js"), HTMLParser = require("./htmlparser.js"), empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), block = makeMap("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"), fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), special = makeMap("wxxxcode-style,script,style,view,scroll-view,block");

module.exports = {
    html2json: html2json,
    emojisInit: emojisInit
};