	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};
	/*v0.6vv_20180522_fbi*/global.__wcc_version__='v0.6vv_20180522_fbi';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};
if(typeof __WXML_GLOBAL__ === 'undefined') __WXML_GLOBAL__={};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if("undefined"!==typeof debugInfo)
e.stack += "\n "+" "+" "+" at "+debugInfo[g.opindex][0]+":"+debugInfo[g.opindex][1]+":"+debugInfo[g.opindex][2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
return rev;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
if ( !__WXML_GLOBAL__.ops_init.$gwx){
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[8],'wxParseData',[[6],[[7],[3,'detailDescription']],[3,'nodes']]]);Z([3,'wxParse']);Z([[2,'=='],[[7],[3,'detailList']],[1,0]]);Z([[2,'&&'],[[6],[[7],[3,'activityDistribution']],[3,'enable']],[[2,'!'],[[7],[3,'isLoading']]]]);Z([3,'login-frame']);Z([[7],[3,'hideLogin']]);Z([[2,'!'],[[2,'&&'],[[2,'=='],[[7],[3,'disType']],[1,3]],[[2,'!'],[[7],[3,'activated']]]]]);Z(z[6]);Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'activityDistribution']],[3,'enable']]],[[2,'!'],[[7],[3,'isLoading']]]]);Z([3,'wrap']);Z([[2,'!='],[[6],[[6],[[7],[3,'applyCash']],[3,'bank']],[3,'type']],[1,2]]);Z([[2,'=='],[[6],[[7],[3,'applyCash']],[3,'status']],[1,4]]);Z([[7],[3,'disposeDate']]);Z([3,'group-wrap']);Z([3,'member-frame']);Z([[2,'=='],[[7],[3,'activityStatus']],[1,'2']]);Z([[2,'?:'],[[2,'>='],[[6],[[7],[3,'groupDetail']],[3,'orderCount']],[1,10]],[1,10],[[6],[[7],[3,'groupDetail']],[3,'orderCount']]]);Z([[2,'<'],[[7],[3,'index']],[[6],[[7],[3,'memberList']],[3,'length']]]);Z([[2,'=='],[[7],[3,'index']],[1,0]]);Z([[2,'=='],[[7],[3,'activityStatus']],[1,'3']]);Z([[2,'!='],[[7],[3,'activityStatus']],[1,'2']]);Z([[7],[3,'isJoin']]);Z([[2,'!'],[[7],[3,'isJoin']]]);Z([[2,'!='],[[7],[3,'activityStatus']],[1,'3']]);Z(z[21]);Z([[8],'wxParseData',[[6],[[7],[3,'scoreRule']],[3,'nodes']]]);Z(z[1]);Z([[2,'&&'],[[2,'!'],[[7],[3,'isQuery']]],[[7],[3,'isLoading']]]);Z([[2,'!'],[[6],[[7],[3,'minaInfo']],[3,'rollNewsHidden']]]);Z([[2,'!='],[[6],[[7],[3,'couponList']],[3,'length']],[1,0]]);Z([[2,'>'],[[6],[[6],[[7],[3,'activitySeckill']],[3,'productList']],[3,'length']],[1,0]]);Z([3,'group-countdown']);Z([[2,'!='],[[6],[[6],[[7],[3,'activitySeckill']],[3,'countDown']],[3,'d']],[1,'0']]);Z(z[32]);Z([[2,'&&'],[[2,'=='],[[7],[3,'hasGroup']],[1,'1']],[[2,'>'],[[6],[[6],[[7],[3,'activityInfo']],[3,'productList']],[3,'length']],[1,0]]]);Z(z[31]);Z([[2,'!='],[[6],[[6],[[7],[3,'activityInfo']],[3,'countDown']],[3,'d']],[1,'0']]);Z(z[36]);Z([[2,'!='],[[6],[[7],[3,'advertiseProducts']],[3,'length']],[1,0]]);Z([[2,'&&'],[[6],[[6],[[7],[3,'videoList']],[1,0]],[3,'video']],[[2,'!'],[[6],[[7],[3,'minaInfo']],[3,'videoHidden']]]]);Z([[2,'!'],[[6],[[7],[3,'minaInfo']],[3,'listNewsHidden']]]);Z([[2,'!'],[[6],[[7],[3,'minaInfo']],[3,'storeHidden']]]);Z([3,'hotPro-frame']);Z([[2,'=='],[[6],[[7],[3,'hotSaleList']],[3,'length']],[1,0]]);Z([[7],[3,'hotSaleList1']]);Z([[6],[[7],[3,'item']],[3,'id']]);Z([3,'toProductDetail']);Z([3,'hotPro-item']);Z(z[45]);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'actType']],[1,'5']]);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'actType']],[1,'3']]);Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'actType']],[1,'6']],[[2,'=='],[[7],[3,'memberType']],[1,'3']]],[[6],[[7],[3,'actDistribution']],[3,'enable']]],[[6],[[7],[3,'actDistribution']],[3,'identificationOpened']]]);Z([[2,'=='],[[2,'!'],[[6],[[7],[3,'item']],[3,'video']]],[1,'']]);Z([[7],[3,'hotSaleList2']]);Z(z[45]);Z(z[46]);Z(z[47]);Z(z[45]);Z(z[49]);Z(z[50]);Z(z[51]);Z(z[52]);Z([[2,'&&'],[[6],[[7],[3,'advertiseProducts']],[1,1]],[[6],[[6],[[7],[3,'advertiseProducts']],[1,1]],[3,'advertisingImage']]]);Z([[2,'&&'],[[6],[[7],[3,'advertiseProducts']],[1,2]],[[6],[[6],[[7],[3,'advertiseProducts']],[1,2]],[3,'advertisingImage']]]);Z([[7],[3,'disProList']]);Z(z[46]);Z([3,'disPro-item']);Z([[6],[[7],[3,'item']],[3,'produceId']]);Z([[6],[[7],[3,'actDistribution']],[3,'identificationOpened']]);Z([[2,'&&'],[[2,'=='],[[7],[3,'recProStyle']],[1,1]],[[2,'!='],[[6],[[7],[3,'productArr']],[3,'length']],[1,0]]]);Z([[7],[3,'productArr']]);Z(z[45]);Z(z[46]);Z([3,'rec-pros-item']);Z(z[45]);Z(z[49]);Z(z[50]);Z(z[51]);Z(z[52]);Z([[6],[[7],[3,'item']],[3,'newArrival']]);Z([[2,'&&'],[[2,'=='],[[7],[3,'recProStyle']],[1,2]],[[2,'!='],[[6],[[7],[3,'proList']],[3,'length']],[1,0]]]);Z([[7],[3,'proList']]);Z(z[45]);Z([3,'rec-pros-list clearfix']);Z([[2,'!='],[[7],[3,'hotRecommendStyle']],[1,2]]);Z([3,'productItem']);Z([[6],[[7],[3,'item']],[3,'productList']]);Z(z[45]);Z(z[46]);Z(z[73]);Z([[6],[[7],[3,'productItem']],[3,'id']]);Z([[2,'=='],[[6],[[7],[3,'productItem']],[3,'actType']],[1,'5']]);Z([[2,'=='],[[6],[[7],[3,'productItem']],[3,'actType']],[1,'3']]);Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'productItem']],[3,'actType']],[1,'6']],[[2,'=='],[[7],[3,'memberType']],[1,'3']]],[[6],[[7],[3,'actDistribution']],[3,'enable']]],[[6],[[7],[3,'actDistribution']],[3,'identificationOpened']]]);Z([[2,'=='],[[2,'!'],[[6],[[7],[3,'productItem']],[3,'video']]],[1,'']]);Z([[6],[[7],[3,'productItem']],[3,'newArrival']]);Z(z[86]);Z(z[46]);Z([3,'newstyle-item']);Z(z[45]);Z([3,'rec-pro-info']);Z(z[94]);Z(z[49]);Z([[2,'&&'],[[7],[3,'isQuery']],[[7],[3,'isLoading']]]);Z(z[27]);Z(z[28]);Z(z[29]);Z(z[30]);Z(z[31]);Z(z[32]);Z(z[32]);Z([[2,'&&'],[[2,'=='],[[7],[3,'isGroup']],[1,'1']],[[2,'>'],[[6],[[6],[[7],[3,'activityInfo']],[3,'productList']],[3,'length']],[1,0]]]);Z(z[31]);Z(z[36]);Z(z[36]);Z([[2,'&&'],[[6],[[7],[3,'advertiseProducts']],[1,0]],[[6],[[6],[[7],[3,'advertiseProducts']],[1,0]],[3,'advertisingImage']]]);Z(z[39]);Z(z[40]);Z(z[41]);Z(z[42]);Z(z[43]);Z(z[44]);Z(z[45]);Z(z[46]);Z(z[47]);Z(z[45]);Z(z[49]);Z(z[50]);Z(z[52]);Z(z[53]);Z(z[45]);Z(z[46]);Z(z[47]);Z(z[45]);Z(z[49]);Z(z[50]);Z(z[52]);Z(z[62]);Z(z[63]);Z(z[69]);Z(z[70]);Z(z[45]);Z(z[46]);Z(z[73]);Z(z[45]);Z(z[49]);Z(z[50]);Z(z[52]);Z(z[79]);Z(z[80]);Z(z[81]);Z(z[45]);Z(z[83]);Z(z[84]);Z(z[85]);Z(z[86]);Z(z[45]);Z(z[46]);Z(z[73]);Z(z[90]);Z(z[91]);Z(z[92]);Z(z[94]);Z(z[95]);Z(z[86]);Z(z[46]);Z(z[98]);Z(z[45]);Z(z[100]);Z(z[94]);Z(z[49]);Z(z[103]);Z(z[27]);Z(z[30]);Z(z[31]);Z(z[32]);Z(z[32]);Z(z[111]);Z(z[31]);Z(z[36]);Z(z[36]);Z(z[39]);Z(z[28]);Z(z[40]);Z(z[41]);Z(z[42]);Z(z[43]);Z(z[44]);Z(z[45]);Z(z[46]);Z(z[47]);Z(z[45]);Z(z[49]);Z(z[50]);Z(z[52]);Z(z[53]);Z(z[45]);Z(z[46]);Z(z[47]);Z(z[45]);Z(z[49]);Z(z[50]);Z(z[52]);Z(z[81]);Z(z[45]);Z(z[83]);Z(z[84]);Z(z[85]);Z(z[86]);Z(z[45]);Z(z[46]);Z(z[73]);Z(z[90]);Z(z[91]);Z(z[92]);Z(z[94]);Z(z[86]);Z(z[46]);Z(z[98]);Z(z[45]);Z(z[100]);Z(z[94]);Z(z[49]);Z(z[103]);Z([[2,'!'],[[7],[3,'isQuery']]]);Z(z[111]);Z(z[31]);Z(z[36]);Z(z[36]);Z(z[28]);Z(z[40]);Z(z[41]);Z([[2,'!='],[[6],[[7],[3,'productArr']],[3,'length']],[1,0]]);Z(z[70]);Z(z[45]);Z(z[46]);Z(z[73]);Z(z[45]);Z(z[49]);Z([[8],'wxParseData',[[6],[[7],[3,'content']],[3,'nodes']]]);Z(z[1]);Z([[2,'&&'],[[7],[3,'isShowPrePay']],[[7],[3,'cardNo']]]);Z([[2,'!='],[[7],[3,'curCity']],[1,'全国']]);Z([3,'detail']);Z([a,[3,'border: 2rpx solid '],[[2,'?:'],[[6],[[7],[3,'styleConfig']],[3,'isWhite']],[1,'#95D9FA'],[[6],[[7],[3,'styleConfig']],[3,'mainColor']]],[3,';']]);Z([[2,'=='],[[6],[[6],[[7],[3,'detailList']],[1,0]],[3,'status']],[1,1]]);Z([[2,'=='],[[6],[[6],[[7],[3,'detailList']],[1,0]],[3,'status']],[1,2]]);Z([[2,'=='],[[6],[[6],[[7],[3,'detailList']],[1,0]],[3,'status']],[1,0]]);Z([[7],[3,'commentList']]);Z([[6],[[7],[3,'item']],[3,'pic']]);Z([3,'pro-wrap']);Z([[2,'=='],[[6],[[7],[3,'proInfoDetail']],[3,'activityType']],[1,3]]);Z([3,'seckill-countdown']);Z([[2,'!='],[[6],[[7],[3,'seckillCount']],[3,'day']],[1,'0']]);Z(z[253]);Z([3,'pro-info']);Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'proInfoDetail']],[3,'activityType']],[1,'3']],[1,'margin-top:70rpx;'],[1,'']]);Z([[7],[3,'showShareBox']]);Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'proInfoDetail']],[3,'purpose']],[1,'2']],[[2,'!='],[[6],[[7],[3,'proInfoDetail']],[3,'purpose']],[1,'4']]]);Z([[2,'=='],[[7],[3,'activityType']],[1,'5']]);Z([3,'pro-nav-content']);Z([[2,'=='],[[7],[3,'navIdx']],[1,0]]);Z([[2,'=='],[[7],[3,'navIdx']],[1,1]]);Z([3,'comment-list']);Z([[2,'>'],[[6],[[7],[3,'commentList']],[3,'length']],[1,0]]);Z([[6],[[7],[3,'commentList']],[1,0]]);Z([[6],[[7],[3,'commentList']],[1,1]]);Z([[2,'=='],[[7],[3,'navIdx']],[1,2]]);Z([3,'btn-wrap']);Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'proInfoDetail']],[3,'activityType']],[1,3]],[[7],[3,'seckillStart']]]);Z([[2,'=='],[[6],[[7],[3,'proInfoDetail']],[3,'activityType']],[1,'5']]);Z([[2,'&&'],[[2,'=='],[[7],[3,'activityType']],[1,'6']],[[2,'||'],[[2,'=='],[[7],[3,'memberType']],[1,3]],[[7],[3,'parentId']]]]);Z([3,'btn-frame']);Z([[2,'=='],[[6],[[7],[3,'proInfoDetail']],[3,'purpose']],[1,'2']]);Z([[2,'=='],[[6],[[7],[3,'proInfoDetail']],[3,'purpose']],[1,'1']]);Z([[2,'=='],[[6],[[7],[3,'proInfoDetail']],[3,'purpose']],[1,'4']]);Z([[2,'=='],[[6],[[7],[3,'proInfoDetail']],[3,'purpose']],[1,'3']]);Z([[6],[[7],[3,'productList']],[3,'pageList']]);Z(z[45]);Z([3,'toProDetail']);Z([3,'pro-item']);Z(z[45]);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'activityType']],[1,'5']]);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'activityType']],[1,'3']]);Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'activityType']],[1,'6']],[[2,'=='],[[7],[3,'memberType']],[1,'3']]],[[6],[[7],[3,'actDistribution']],[3,'enable']]],[[6],[[7],[3,'actDistribution']],[3,'identificationOpened']]]);Z(z[255]);Z(z[52]);Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'purpose']],[1,2]],[[2,'!='],[[6],[[7],[3,'item']],[3,'purpose']],[1,4]]]);Z([[2,'=='],[[7],[3,'changeclass']],[1,1]]);Z([3,'scrolltolower']);Z([3,'blanktap']);Z([3,'main']);Z([3,'true']);Z([[2,'=='],[[7],[3,'search_type']],[1,'1']]);Z([[2,'=='],[[7],[3,'search_type']],[1,'2']]);Z([[7],[3,'pageList']]);Z(z[45]);Z(z[279]);Z([3,'recommend-item']);Z(z[45]);Z(z[287]);Z([[2,'&&'],[[2,'!'],[[7],[3,'isShowGetCard']]],[[2,'!'],[[7],[3,'isloading']]]]);Z([[2,'&&'],[[7],[3,'isShowGetCard']],[[2,'!'],[[7],[3,'isloading']]]]);Z([[2,'=='],[[7],[3,'projectType']],[1,'o2o-shop']]);Z([3,'product-list-1']);Z(z[81]);Z(z[45]);Z(z[46]);Z(z[73]);Z(z[45]);Z(z[49]);Z(z[50]);Z(z[51]);Z(z[52]);Z(z[303]);Z(z[81]);Z(z[45]);Z(z[46]);Z(z[73]);Z(z[45]);Z(z[49]);Z(z[50]);Z(z[51]);Z(z[52]);Z([[2,'=='],[[7],[3,'projectType']],[1,'shop']]);Z([[7],[3,'productList']]);Z(z[45]);Z(z[279]);Z(z[73]);Z(z[45]);Z(z[282]);Z(z[283]);Z(z[284]);Z(z[52]);Z(z[25]);Z(z[1]);Z([3,'order-detail-wrap']);Z([[2,'=='],[[7],[3,'status']],[1,3]]);Z([[7],[3,'expressNO']]);Z([[2,'=='],[[6],[[7],[3,'orderDetail']],[3,'status']],[1,3]]);Z([3,'order-item']);Z([[6],[[7],[3,'orderDetail']],[3,'productOrderVOList']]);Z(z[45]);Z([[2,'&&'],[[2,'=='],[[7],[3,'payStatus']],[1,1]],[[2,'=='],[[7],[3,'status']],[1,4]]]);Z([[2,'&&'],[[2,'=='],[[7],[3,'payStatus']],[1,1]],[[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'status']],[1,1]],[[2,'=='],[[7],[3,'status']],[1,2]]],[[2,'=='],[[7],[3,'status']],[1,3]]]]);Z([[7],[3,'orderList']]);Z([[6],[[7],[3,'item']],[3,'orderNO']]);Z([3,'orderNoItem']);Z([[6],[[7],[3,'item']],[3,'children']]);Z([[6],[[6],[[7],[3,'orderNoItem']],[3,'children']],[3,'id']]);Z([3,'proItem']);Z([[6],[[7],[3,'orderNoItem']],[3,'productOrderVOList']]);Z([[6],[[6],[[7],[3,'orderNoItem']],[3,'productOrderVOList']],[3,'productId']]);Z([3,'product']);Z([[2,'!='],[[6],[[7],[3,'item']],[3,'groupOrderNo']],[1,'']]);Z([[2,'=='],[[6],[[7],[3,'orderNoItem']],[3,'status']],[1,'4']]);Z([3,'tab-content']);Z([[2,'=='],[[7],[3,'showtab']],[1,0]]);Z([[2,'>'],[[6],[[7],[3,'couponInfo']],[3,'length']],[1,0]]);Z([[7],[3,'couponInfo']]);Z(z[45]);Z([3,'test-item-b-left']);Z([[6],[[7],[3,'item']],[3,'branchName']]);Z([[2,'!'],[[6],[[7],[3,'item']],[3,'branchName']]]);Z(z[362]);Z([[2,'=='],[[7],[3,'showtab']],[1,1]]);Z(z[358]);Z([[2,'=='],[[7],[3,'showtab']],[1,2]]);Z(z[358]);Z([3,'self']);Z(z[224]);Z([3,'func-wrap']);Z([[2,'!'],[[7],[3,'isPerson']]]);Z([3,'my-orderInfo']);Z([3,'toOrderList']);Z([3,'func1-item']);Z([3,'0']);Z([[2,'>'],[[6],[[7],[3,'orderCount']],[3,'waitPayOrderCount']],[1,0]]);Z(z[374]);Z(z[375]);Z([3,'1']);Z([[2,'>'],[[6],[[7],[3,'orderCount']],[3,'waitDeliverOrderCount']],[1,0]]);Z(z[374]);Z(z[375]);Z([3,'2']);Z([[2,'>'],[[6],[[7],[3,'orderCount']],[3,'waitSignOrderCount']],[1,0]]);Z(z[374]);Z(z[375]);Z([3,'4']);Z([[2,'>'],[[6],[[7],[3,'orderCount']],[3,'refundOrderCount']],[1,0]]);Z([3,'my-func']);Z([[6],[[7],[3,'showCustomizeTabId']],[3,'Activity']]);Z([[6],[[7],[3,'showCustomizeTabId']],[3,'CardNo']]);Z([[6],[[7],[3,'showCustomizeTabId']],[1,'Activity-Group']]);Z([[6],[[7],[3,'showCustomizeTabId']],[1,'Flexi-Form']]);Z([[6],[[7],[3,'showCustomizeTabId']],[3,'LynxPhoto_Info_Post_Tab']]);Z([[2,'&&'],[[6],[[7],[3,'showCustomizeTabId']],[3,'ZXMarketModuleOrder']],[[7],[3,'isPerson']]]);Z([[6],[[7],[3,'showCustomizeTabId']],[1,'Activity-Distribution']]);Z(z[390]);Z([[6],[[7],[3,'showCustomizeTabId']],[1,'Photo-Info-Tab-Level2']]);Z([[6],[[7],[3,'showCustomizeTabId']],[3,'Member']]);Z([[6],[[7],[3,'showCustomizeTabId']],[3,'Video_Gallery']]);Z([[6],[[7],[3,'showCustomizeTabId']],[3,'LynxApplyFor_About_Merchant']]);Z(z[291]);Z([[2,'=='],[[7],[3,'tapIndex']],[1,1]]);Z(z[70]);Z(z[45]);Z(z[279]);Z([3,'product-item']);Z(z[45]);Z(z[282]);Z(z[283]);Z(z[284]);Z(z[52]);Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'purpose']],[1,2]],[[2,'=='],[[6],[[7],[3,'item']],[3,'purpose']],[1,4]]]);Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'purpose']],[1,1]],[[2,'=='],[[6],[[7],[3,'item']],[3,'purpose']],[1,3]]]);Z([[2,'=='],[[7],[3,'tapIndex']],[1,2]]);Z([[8],'wxParseData',[[6],[[7],[3,'shortDescription']],[3,'nodes']]]);Z(z[1]);Z([[7],[3,'show']]);Z(z[291]);Z(z[404]);Z(z[70]);Z(z[45]);Z(z[279]);Z(z[408]);Z(z[45]);Z(z[282]);Z(z[52]);Z(z[416]);Z(z[417]);Z(z[1]);Z(z[419]);Z(z[291]);Z(z[404]);Z(z[70]);Z(z[45]);Z(z[279]);Z(z[408]);Z(z[45]);Z(z[282]);Z(z[416]);Z(z[417]);Z(z[1]);Z(z[419]);Z([[8],'wxParseData',[[6],[[7],[3,'detailDescription']],[3,'nodes']]]);Z(z[1]);Z([3,'wxParseVideo']);Z([3,'wxParseImg']);Z([3,'WxEmojiView']);Z(z[1]);Z([[7],[3,'wxParseData']]);Z([3,'']);Z([[8],'item',[[7],[3,'item']]]);Z([3,'wxParse0']);Z(z[454]);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'node']],[1,'element']]);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'button']]);Z([3,'item']);Z([[6],[[7],[3,'item']],[3,'nodes']]);Z(z[452]);Z(z[453]);Z([3,'wxParse1']);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'li']]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[462]);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'video']]);Z(z[453]);Z(z[447]);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'img']]);Z(z[453]);Z(z[448]);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'a']]);Z([3,'wxParseTagATap']);Z([a,[3,'wxParse-inline '],[[6],[[7],[3,'item']],[3,'classStr']],[3,' wxParse-'],[[6],[[7],[3,'item']],[3,'tag']]]);Z([[6],[[6],[[7],[3,'item']],[3,'attr']],[3,'href']]);Z([[6],[[7],[3,'item']],[3,'styleStr']]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[462]);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'table']]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[462]);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tagType']],[1,'block']]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[462]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[462]);Z([[2,'=='],[[6],[[7],[3,'item']],[3,'node']],[1,'text']]);Z(z[453]);Z(z[449]);Z(z[462]);Z(z[456]);Z(z[457]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z([3,'wxParse2']);Z(z[463]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[512]);Z(z[469]);Z(z[453]);Z(z[447]);Z(z[472]);Z(z[453]);Z(z[448]);Z(z[475]);Z(z[476]);Z([a,z[477][1],z[477][2],z[477][3],z[477][4]]);Z(z[478]);Z(z[479]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[512]);Z(z[491]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[512]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[512]);Z(z[502]);Z(z[453]);Z(z[449]);Z(z[512]);Z(z[456]);Z(z[457]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z([3,'wxParse3']);Z(z[463]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[556]);Z(z[469]);Z(z[453]);Z(z[447]);Z(z[472]);Z(z[453]);Z(z[448]);Z(z[475]);Z(z[476]);Z([a,z[477][1],z[477][2],z[477][3],z[477][4]]);Z(z[478]);Z(z[479]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[556]);Z(z[491]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[556]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[556]);Z(z[502]);Z(z[453]);Z(z[449]);Z(z[556]);Z(z[456]);Z(z[457]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z([3,'wxParse4']);Z(z[463]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[600]);Z(z[469]);Z(z[453]);Z(z[447]);Z(z[472]);Z(z[453]);Z(z[448]);Z(z[475]);Z(z[476]);Z([a,z[477][1],z[477][2],z[477][3],z[477][4]]);Z(z[478]);Z(z[479]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[600]);Z(z[491]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[600]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[600]);Z(z[502]);Z(z[453]);Z(z[449]);Z(z[600]);Z(z[456]);Z(z[457]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z([3,'wxParse5']);Z(z[463]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[644]);Z(z[469]);Z(z[453]);Z(z[447]);Z(z[472]);Z(z[453]);Z(z[448]);Z(z[475]);Z(z[476]);Z([a,z[477][1],z[477][2],z[477][3],z[477][4]]);Z(z[478]);Z(z[479]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[644]);Z(z[491]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[644]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[644]);Z(z[502]);Z(z[453]);Z(z[449]);Z(z[644]);Z(z[456]);Z(z[457]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z([3,'wxParse6']);Z(z[463]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[688]);Z(z[469]);Z(z[453]);Z(z[447]);Z(z[472]);Z(z[453]);Z(z[448]);Z(z[475]);Z(z[476]);Z([a,z[477][1],z[477][2],z[477][3],z[477][4]]);Z(z[478]);Z(z[479]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[688]);Z(z[491]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[688]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[688]);Z(z[502]);Z(z[453]);Z(z[449]);Z(z[688]);Z(z[456]);Z(z[457]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z([3,'wxParse7']);Z(z[463]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[732]);Z(z[469]);Z(z[453]);Z(z[447]);Z(z[472]);Z(z[453]);Z(z[448]);Z(z[475]);Z(z[476]);Z([a,z[477][1],z[477][2],z[477][3],z[477][4]]);Z(z[478]);Z(z[479]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[732]);Z(z[491]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[732]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[732]);Z(z[502]);Z(z[453]);Z(z[449]);Z(z[732]);Z(z[456]);Z(z[457]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z([3,'wxParse8']);Z(z[463]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[776]);Z(z[469]);Z(z[453]);Z(z[447]);Z(z[472]);Z(z[453]);Z(z[448]);Z(z[475]);Z(z[476]);Z([a,z[477][1],z[477][2],z[477][3],z[477][4]]);Z(z[478]);Z(z[479]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[776]);Z(z[491]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[776]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[776]);Z(z[502]);Z(z[453]);Z(z[449]);Z(z[776]);Z(z[456]);Z(z[457]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z([3,'wxParse9']);Z(z[463]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[820]);Z(z[469]);Z(z[453]);Z(z[447]);Z(z[472]);Z(z[453]);Z(z[448]);Z(z[475]);Z(z[476]);Z([a,z[477][1],z[477][2],z[477][3],z[477][4]]);Z(z[478]);Z(z[479]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[820]);Z(z[491]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[820]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[820]);Z(z[502]);Z(z[453]);Z(z[449]);Z(z[820]);Z(z[456]);Z(z[457]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z([3,'wxParse10']);Z(z[463]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[864]);Z(z[469]);Z(z[453]);Z(z[447]);Z(z[472]);Z(z[453]);Z(z[448]);Z(z[475]);Z(z[476]);Z([a,z[477][1],z[477][2],z[477][3],z[477][4]]);Z(z[478]);Z(z[479]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[864]);Z(z[491]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[864]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[864]);Z(z[502]);Z(z[453]);Z(z[449]);Z(z[864]);Z(z[456]);Z(z[457]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z([3,'wxParse11']);Z(z[463]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[908]);Z(z[469]);Z(z[453]);Z(z[447]);Z(z[472]);Z(z[453]);Z(z[448]);Z(z[475]);Z(z[476]);Z([a,z[477][1],z[477][2],z[477][3],z[477][4]]);Z(z[478]);Z(z[479]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[908]);Z(z[491]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[908]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[908]);Z(z[502]);Z(z[453]);Z(z[449]);Z(z[908]);Z(z[456]);Z(z[457]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z([3,'wxParse12']);Z(z[463]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[952]);Z(z[469]);Z(z[453]);Z(z[447]);Z(z[472]);Z(z[453]);Z(z[448]);Z(z[475]);Z(z[476]);Z([a,z[477][1],z[477][2],z[477][3],z[477][4]]);Z(z[478]);Z(z[479]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[952]);Z(z[491]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[952]);Z(z[458]);Z(z[459]);Z(z[452]);Z(z[453]);Z(z[952]);Z(z[502]);Z(z[453]);Z(z[449]);})(z);__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
}
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./pages/about-us/about-us.wxml','../../utils/wxParse/wxParse.wxml','./pages/address/address.wxml','./pages/distribute/account-select/account-select.wxml','./pages/distribute/account-setting/account-setting.wxml','./pages/distribute/applycash/applycash.wxml','./pages/distribute/distribute-fee/distribute-fee.wxml','./pages/distribute/distribute-order/distribute-order.wxml','./pages/distribute/distribute-product/distribute-product.wxml','./pages/distribute/distribute-qrcode/distribute-qrcode.wxml','./pages/distribute/distribute-rule/distribute-rule.wxml','./pages/distribute/distribute.wxml','./pages/distribute/withdraw-list/withdraw-detail/withdraw-detail.wxml','./pages/distribute/withdraw-list/withdraw-list.wxml','./pages/group/group-detail/group-detail.wxml','../../product/common/pro-attr.wxml','./pages/group/group-introduce/group-introduce.wxml','../../../utils/wxParse/wxParse.wxml','./pages/group/group-prolist/group-prolist.wxml','./pages/group/my-group/my-group.wxml','./pages/index/index.wxml','./pages/index/rich-text/rich-text.wxml','./pages/indexStyle1/index.wxml','./pages/indexStyle2/index.wxml','./pages/indexStyle3/index.wxml','./pages/join/join.wxml','./pages/login/forget/forget.wxml','./pages/login/login.wxml','./pages/login/register/register.wxml','./pages/logs/logs.wxml','./pages/news/news-detail/news-detail.wxml','./pages/news/news.wxml','./pages/order/calendar/calendar.wxml','./pages/order/order.wxml','./pages/position/position.wxml','./pages/product/beforehand/beforehand.wxml','./pages/product/beforehand/bh-detail/bh-detail.wxml','./pages/product/comment/comment.wxml','./pages/product/comment/publish-comment/publish-comment.wxml','./pages/product/common/pro-attr.wxml','./pages/product/pro-detail/pro-detail.wxml','../common/pro-attr.wxml','./pages/product/pro-list/pro-list.wxml','./pages/product/product.wxml','./pages/product/sub-category/sub-category.wxml','./pages/publicity/publicity-detail/publicity-detail.wxml','./pages/publicity/publicity.wxml','./pages/query/query.wxml','./pages/search/search.wxml','./pages/seckill/seckill.wxml','./pages/self/acountInformation/acountInformation.wxml','./pages/self/acountInformation/qrCode/qrCode.wxml','./pages/self/bindPhone/bindPhone.wxml','./pages/self/card/card.wxml','./pages/self/card/prestore-detail/prestore-detail.wxml','./pages/self/card/prestore-money/prestore-money.wxml','./pages/self/card/prestore-rule/prestore-rule.wxml','./pages/self/card/recharge/recharge.wxml','./pages/self/cart/cart.wxml','./pages/self/cart2/cart.wxml','./pages/self/cart2/component/c-product-list-1/c-product-list-1.wxml','./pages/self/cart3/cart.wxml','./pages/self/collect/collect.wxml','./pages/self/memRights/memRights.wxml','./pages/self/myBeforehand/myBeforehand.wxml','./pages/self/myCustom/myCustom.wxml','./pages/self/myOrder/myOrder-detail/logistics/logistics.wxml','./pages/self/myOrder/myOrder-detail/myOrder-detail.wxml','./pages/self/myOrder/myOrder.wxml','./pages/self/myOrder/refund/refund.wxml','./pages/self/mySupply/mySupply.wxml','./pages/self/mycoupon/mycoupon.wxml','./pages/self/self.wxml','./pages/store/store-detail/custom/custom.wxml','./pages/store/store-detail/location/location.wxml','./pages/store/store-detail/store-detail.wxml','./pages/store/store.wxml','./pages/storeStyle1/store-detail/custom/custom.wxml','./pages/storeStyle1/store-detail/location/location.wxml','./pages/storeStyle1/store-detail/store-detail.wxml','./pages/storeStyle1/store.wxml','./pages/storeStyle2/store-detail/custom/custom.wxml','./pages/storeStyle2/store-detail/location/location.wxml','./pages/storeStyle2/store-detail/store-detail.wxml','./pages/storeStyle2/store.wxml','./pages/supply/supply-detail/supply-detail.wxml','./pages/supply/supply-publish/supply-publish.wxml','./pages/supply/supply.wxml','./utils/wxParse/wxParse.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
var xC=_v()
_(r,xC)
var oD=_o(1,e,s,gg)
var fE=_gd(x[0],oD,e_,d_)
if(fE){
var cF=_1(0,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[0],30,23)
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[2]]={}
var m1=function(e,s,r,gg){
return r
}
e_[x[2]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m2=function(e,s,r,gg){
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m3=function(e,s,r,gg){
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m4=function(e,s,r,gg){
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m5=function(e,s,r,gg){
var aL=_v()
_(r,aL)
if(_o(2,e,s,gg)){aL.wxVkey=1
}
aL.wxXCkey=1
return r
}
e_[x[6]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m6=function(e,s,r,gg){
return r
}
e_[x[7]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m7=function(e,s,r,gg){
return r
}
e_[x[8]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m8=function(e,s,r,gg){
return r
}
e_[x[9]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m9=function(e,s,r,gg){
return r
}
e_[x[10]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m10=function(e,s,r,gg){
var oR=_v()
_(r,oR)
if(_o(3,e,s,gg)){oR.wxVkey=1
var cT=_m('view',['class',4,'hidden',1],[],e,s,gg)
var hU=_v()
_(cT,hU)
if(_o(6,e,s,gg)){hU.wxVkey=1
}
var oV=_v()
_(cT,oV)
if(_o(7,e,s,gg)){oV.wxVkey=1
}
hU.wxXCkey=1
oV.wxXCkey=1
_(oR,cT)
}
var fS=_v()
_(r,fS)
if(_o(8,e,s,gg)){fS.wxVkey=1
}
oR.wxXCkey=1
fS.wxXCkey=1
return r
}
e_[x[11]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m11=function(e,s,r,gg){
var oX=_n('view')
_r(oX,'class',9,e,s,gg)
var lY=_v()
_(oX,lY)
if(_o(10,e,s,gg)){lY.wxVkey=1
}
var aZ=_v()
_(oX,aZ)
if(_o(11,e,s,gg)){aZ.wxVkey=1
}
var t1=_v()
_(oX,t1)
if(_o(12,e,s,gg)){t1.wxVkey=1
}
lY.wxXCkey=1
aZ.wxXCkey=1
t1.wxXCkey=1
_(r,oX)
return r
}
e_[x[12]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m12=function(e,s,r,gg){
return r
}
e_[x[13]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m13=function(e,s,r,gg){
var o4=_n('view')
_r(o4,'class',13,e,s,gg)
var x5=e_[x[14]].j
var f7=_n('view')
_r(f7,'class',14,e,s,gg)
var c8=_v()
_(f7,c8)
if(_o(15,e,s,gg)){c8.wxVkey=1
}
var cAB=_v()
_(f7,cAB)
var oBB=function(aDB,lCB,tEB,gg){
var bGB=_v()
_(tEB,bGB)
if(_o(17,aDB,lCB,gg)){bGB.wxVkey=1
var oHB=_v()
_(bGB,oHB)
if(_o(18,aDB,lCB,gg)){oHB.wxVkey=1
}
oHB.wxXCkey=1
}
else{bGB.wxVkey=2
}
bGB.wxXCkey=1
return tEB
}
cAB.wxXCkey=2
_2(16,oBB,e,s,gg,cAB,'item','index','')
var h9=_v()
_(f7,h9)
if(_o(19,e,s,gg)){h9.wxVkey=1
}
var o0=_v()
_(f7,o0)
if(_o(20,e,s,gg)){o0.wxVkey=1
var xIB=_v()
_(o0,xIB)
if(_o(21,e,s,gg)){xIB.wxVkey=1
}
var oJB=_v()
_(o0,oJB)
if(_o(22,e,s,gg)){oJB.wxVkey=1
}
xIB.wxXCkey=1
oJB.wxXCkey=1
}
c8.wxXCkey=1
h9.wxXCkey=1
o0.wxXCkey=1
_(o4,f7)
var o6=_v()
_(o4,o6)
if(_o(23,e,s,gg)){o6.wxVkey=1
var fKB=_v()
_(o6,fKB)
if(_o(24,e,s,gg)){fKB.wxVkey=1
}
fKB.wxXCkey=1
}
_ic(x[15],e_,x[14],e,s,o4,gg);
o6.wxXCkey=1
x5.pop()
_(r,o4)
return r
}
e_[x[14]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m14=function(e,s,r,gg){
var hMB=e_[x[16]].i
_ai(hMB,x[17],e_,x[16],1,1)
var oNB=_v()
_(r,oNB)
var cOB=_o(26,e,s,gg)
var oPB=_gd(x[16],cOB,e_,d_)
if(oPB){
var lQB=_1(25,e,s,gg) || {}
var cur_globalf=gg.f
oNB.wxXCkey=3
oPB(lQB,lQB,oNB,gg)
gg.f=cur_globalf
}
else _w(cOB,x[16],3,18)
hMB.pop()
return r
}
e_[x[16]]={f:m14,j:[],i:[],ti:[x[17]],ic:[]}
d_[x[18]]={}
var m15=function(e,s,r,gg){
return r
}
e_[x[18]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m16=function(e,s,r,gg){
return r
}
e_[x[19]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m17=function(e,s,r,gg){
var bUB=_v()
_(r,bUB)
if(_o(27,e,s,gg)){bUB.wxVkey=1
var xWB=_n('view')
var oXB=_v()
_(xWB,oXB)
if(_o(28,e,s,gg)){oXB.wxVkey=1
}
var fYB=_v()
_(xWB,fYB)
if(_o(29,e,s,gg)){fYB.wxVkey=1
}
var cZB=_v()
_(xWB,cZB)
if(_o(30,e,s,gg)){cZB.wxVkey=1
var o0B=_n('view')
_r(o0B,'class',31,e,s,gg)
var xAC=_v()
_(o0B,xAC)
if(_o(32,e,s,gg)){xAC.wxVkey=1
}
var oBC=_v()
_(o0B,oBC)
if(_o(33,e,s,gg)){oBC.wxVkey=1
}
xAC.wxXCkey=1
oBC.wxXCkey=1
_(cZB,o0B)
}
var h1B=_v()
_(xWB,h1B)
if(_o(34,e,s,gg)){h1B.wxVkey=1
var fCC=_n('view')
_r(fCC,'class',35,e,s,gg)
var cDC=_v()
_(fCC,cDC)
if(_o(36,e,s,gg)){cDC.wxVkey=1
}
var hEC=_v()
_(fCC,hEC)
if(_o(37,e,s,gg)){hEC.wxVkey=1
}
cDC.wxXCkey=1
hEC.wxXCkey=1
_(h1B,fCC)
}
var o2B=_v()
_(xWB,o2B)
if(_o(38,e,s,gg)){o2B.wxVkey=1
}
var c3B=_v()
_(xWB,c3B)
if(_o(39,e,s,gg)){c3B.wxVkey=1
}
var o4B=_v()
_(xWB,o4B)
if(_o(40,e,s,gg)){o4B.wxVkey=1
}
var l5B=_v()
_(xWB,l5B)
if(_o(41,e,s,gg)){l5B.wxVkey=1
}
var oFC=_m('view',['class',42,'hidden',1],[],e,s,gg)
var cGC=_v()
_(oFC,cGC)
var oHC=function(aJC,lIC,tKC,gg){
var bMC=_m('view',['bindtap',46,'class',1,'data-pid',2],[],aJC,lIC,gg)
var oNC=_v()
_(bMC,oNC)
if(_o(49,aJC,lIC,gg)){oNC.wxVkey=1
}
var xOC=_v()
_(bMC,xOC)
if(_o(50,aJC,lIC,gg)){xOC.wxVkey=1
}
var oPC=_v()
_(bMC,oPC)
if(_o(51,aJC,lIC,gg)){oPC.wxVkey=1
}
var fQC=_v()
_(bMC,fQC)
if(_o(52,aJC,lIC,gg)){fQC.wxVkey=1
}
oNC.wxXCkey=1
xOC.wxXCkey=1
oPC.wxXCkey=1
fQC.wxXCkey=1
_(tKC,bMC)
return tKC
}
cGC.wxXCkey=2
_2(44,oHC,e,s,gg,cGC,'item','index','{{item.id}}')
var cRC=_v()
_(oFC,cRC)
var hSC=function(cUC,oTC,oVC,gg){
var aXC=_m('view',['bindtap',55,'class',1,'data-pid',2],[],cUC,oTC,gg)
var tYC=_v()
_(aXC,tYC)
if(_o(58,cUC,oTC,gg)){tYC.wxVkey=1
}
var eZC=_v()
_(aXC,eZC)
if(_o(59,cUC,oTC,gg)){eZC.wxVkey=1
}
var b1C=_v()
_(aXC,b1C)
if(_o(60,cUC,oTC,gg)){b1C.wxVkey=1
}
var o2C=_v()
_(aXC,o2C)
if(_o(61,cUC,oTC,gg)){o2C.wxVkey=1
}
tYC.wxXCkey=1
eZC.wxXCkey=1
b1C.wxXCkey=1
o2C.wxXCkey=1
_(oVC,aXC)
return oVC
}
cRC.wxXCkey=2
_2(53,hSC,e,s,gg,cRC,'item','index','{{item.id}}')
_(xWB,oFC)
var a6B=_v()
_(xWB,a6B)
if(_o(62,e,s,gg)){a6B.wxVkey=1
}
var t7B=_v()
_(xWB,t7B)
if(_o(63,e,s,gg)){t7B.wxVkey=1
}
var x3C=_v()
_(xWB,x3C)
var o4C=function(c6C,f5C,h7C,gg){
var c9C=_m('view',['bindtap',65,'class',1,'data-pid',2],[],c6C,f5C,gg)
var o0C=_v()
_(c9C,o0C)
if(_o(68,c6C,f5C,gg)){o0C.wxVkey=1
}
o0C.wxXCkey=1
_(h7C,c9C)
return h7C
}
x3C.wxXCkey=2
_2(64,o4C,e,s,gg,x3C,'item','index','')
var e8B=_v()
_(xWB,e8B)
if(_o(69,e,s,gg)){e8B.wxVkey=1
var lAD=_v()
_(e8B,lAD)
var aBD=function(eDD,tCD,bED,gg){
var xGD=_m('view',['bindtap',72,'class',1,'data-pid',2],[],eDD,tCD,gg)
var oHD=_v()
_(xGD,oHD)
if(_o(75,eDD,tCD,gg)){oHD.wxVkey=1
}
var fID=_v()
_(xGD,fID)
if(_o(76,eDD,tCD,gg)){fID.wxVkey=1
}
var cJD=_v()
_(xGD,cJD)
if(_o(77,eDD,tCD,gg)){cJD.wxVkey=1
}
var hKD=_v()
_(xGD,hKD)
if(_o(78,eDD,tCD,gg)){hKD.wxVkey=1
}
var oLD=_v()
_(xGD,oLD)
if(_o(79,eDD,tCD,gg)){oLD.wxVkey=1
}
oHD.wxXCkey=1
fID.wxXCkey=1
cJD.wxXCkey=1
hKD.wxXCkey=1
oLD.wxXCkey=1
_(bED,xGD)
return bED
}
lAD.wxXCkey=2
_2(70,aBD,e,s,gg,lAD,'item','index','{{item.id}}')
}
var b9B=_v()
_(xWB,b9B)
if(_o(80,e,s,gg)){b9B.wxVkey=1
var cMD=_v()
_(b9B,cMD)
var oND=function(aPD,lOD,tQD,gg){
var bSD=_n('view')
_r(bSD,'class',83,aPD,lOD,gg)
var oTD=_v()
_(bSD,oTD)
if(_o(84,aPD,lOD,gg)){oTD.wxVkey=1
var xUD=_v()
_(oTD,xUD)
var oVD=function(cXD,fWD,hYD,gg){
var c1D=_m('view',['bindtap',88,'class',1,'data-pid',2],[],cXD,fWD,gg)
var o2D=_v()
_(c1D,o2D)
if(_o(91,cXD,fWD,gg)){o2D.wxVkey=1
}
var l3D=_v()
_(c1D,l3D)
if(_o(92,cXD,fWD,gg)){l3D.wxVkey=1
}
var a4D=_v()
_(c1D,a4D)
if(_o(93,cXD,fWD,gg)){a4D.wxVkey=1
}
var t5D=_v()
_(c1D,t5D)
if(_o(94,cXD,fWD,gg)){t5D.wxVkey=1
}
var e6D=_v()
_(c1D,e6D)
if(_o(95,cXD,fWD,gg)){e6D.wxVkey=1
}
o2D.wxXCkey=1
l3D.wxXCkey=1
a4D.wxXCkey=1
t5D.wxXCkey=1
e6D.wxXCkey=1
_(hYD,c1D)
return hYD
}
xUD.wxXCkey=2
_2(86,oVD,aPD,lOD,gg,xUD,'productItem','index','{{item.id}}')
}
else{oTD.wxVkey=2
var b7D=_v()
_(oTD,b7D)
var o8D=function(o0D,x9D,fAE,gg){
var hCE=_m('view',['bindtap',97,'class',1,'data-pid',2],[],o0D,x9D,gg)
var oDE=_n('view')
_r(oDE,'class',100,o0D,x9D,gg)
var cEE=_v()
_(oDE,cEE)
if(_o(101,o0D,x9D,gg)){cEE.wxVkey=1
}
var oFE=_v()
_(oDE,oFE)
if(_o(102,o0D,x9D,gg)){oFE.wxVkey=1
}
cEE.wxXCkey=1
oFE.wxXCkey=1
_(hCE,oDE)
_(fAE,hCE)
return fAE
}
b7D.wxXCkey=2
_2(96,o8D,aPD,lOD,gg,b7D,'item','index','')
}
oTD.wxXCkey=1
_(tQD,bSD)
return tQD
}
cMD.wxXCkey=2
_2(81,oND,e,s,gg,cMD,'item','index','{{item.id}}')
}
oXB.wxXCkey=1
fYB.wxXCkey=1
cZB.wxXCkey=1
h1B.wxXCkey=1
o2B.wxXCkey=1
c3B.wxXCkey=1
o4B.wxXCkey=1
l5B.wxXCkey=1
a6B.wxXCkey=1
t7B.wxXCkey=1
e8B.wxXCkey=1
b9B.wxXCkey=1
_(bUB,xWB)
}
var oVB=_v()
_(r,oVB)
if(_o(103,e,s,gg)){oVB.wxVkey=1
}
bUB.wxXCkey=1
oVB.wxXCkey=1
return r
}
e_[x[20]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m18=function(e,s,r,gg){
return r
}
e_[x[21]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m19=function(e,s,r,gg){
var tIE=_v()
_(r,tIE)
if(_o(104,e,s,gg)){tIE.wxVkey=1
var bKE=_n('view')
var oLE=_v()
_(bKE,oLE)
if(_o(105,e,s,gg)){oLE.wxVkey=1
}
var xME=_v()
_(bKE,xME)
if(_o(106,e,s,gg)){xME.wxVkey=1
}
var oNE=_v()
_(bKE,oNE)
if(_o(107,e,s,gg)){oNE.wxVkey=1
var eXE=_n('view')
_r(eXE,'class',108,e,s,gg)
var bYE=_v()
_(eXE,bYE)
if(_o(109,e,s,gg)){bYE.wxVkey=1
}
var oZE=_v()
_(eXE,oZE)
if(_o(110,e,s,gg)){oZE.wxVkey=1
}
bYE.wxXCkey=1
oZE.wxXCkey=1
_(oNE,eXE)
}
var fOE=_v()
_(bKE,fOE)
if(_o(111,e,s,gg)){fOE.wxVkey=1
var x1E=_n('view')
_r(x1E,'class',112,e,s,gg)
var o2E=_v()
_(x1E,o2E)
if(_o(113,e,s,gg)){o2E.wxVkey=1
}
var f3E=_v()
_(x1E,f3E)
if(_o(114,e,s,gg)){f3E.wxVkey=1
}
o2E.wxXCkey=1
f3E.wxXCkey=1
_(fOE,x1E)
}
var cPE=_v()
_(bKE,cPE)
if(_o(115,e,s,gg)){cPE.wxVkey=1
}
var hQE=_v()
_(bKE,hQE)
if(_o(116,e,s,gg)){hQE.wxVkey=1
}
var oRE=_v()
_(bKE,oRE)
if(_o(117,e,s,gg)){oRE.wxVkey=1
}
var cSE=_v()
_(bKE,cSE)
if(_o(118,e,s,gg)){cSE.wxVkey=1
}
var c4E=_m('view',['class',119,'hidden',1],[],e,s,gg)
var h5E=_v()
_(c4E,h5E)
var o6E=function(o8E,c7E,l9E,gg){
var tAF=_m('view',['bindtap',123,'class',1,'data-pid',2],[],o8E,c7E,gg)
var eBF=_v()
_(tAF,eBF)
if(_o(126,o8E,c7E,gg)){eBF.wxVkey=1
}
var bCF=_v()
_(tAF,bCF)
if(_o(127,o8E,c7E,gg)){bCF.wxVkey=1
}
var oDF=_v()
_(tAF,oDF)
if(_o(128,o8E,c7E,gg)){oDF.wxVkey=1
}
eBF.wxXCkey=1
bCF.wxXCkey=1
oDF.wxXCkey=1
_(l9E,tAF)
return l9E
}
h5E.wxXCkey=2
_2(121,o6E,e,s,gg,h5E,'item','index','{{item.id}}')
var xEF=_v()
_(c4E,xEF)
var oFF=function(cHF,fGF,hIF,gg){
var cKF=_m('view',['bindtap',131,'class',1,'data-pid',2],[],cHF,fGF,gg)
var oLF=_v()
_(cKF,oLF)
if(_o(134,cHF,fGF,gg)){oLF.wxVkey=1
}
var lMF=_v()
_(cKF,lMF)
if(_o(135,cHF,fGF,gg)){lMF.wxVkey=1
}
var aNF=_v()
_(cKF,aNF)
if(_o(136,cHF,fGF,gg)){aNF.wxVkey=1
}
oLF.wxXCkey=1
lMF.wxXCkey=1
aNF.wxXCkey=1
_(hIF,cKF)
return hIF
}
xEF.wxXCkey=2
_2(129,oFF,e,s,gg,xEF,'item','index','{{item.id}}')
_(bKE,c4E)
var oTE=_v()
_(bKE,oTE)
if(_o(137,e,s,gg)){oTE.wxVkey=1
}
var lUE=_v()
_(bKE,lUE)
if(_o(138,e,s,gg)){lUE.wxVkey=1
}
var aVE=_v()
_(bKE,aVE)
if(_o(139,e,s,gg)){aVE.wxVkey=1
var tOF=_v()
_(aVE,tOF)
var ePF=function(oRF,bQF,xSF,gg){
var fUF=_m('view',['bindtap',142,'class',1,'data-pid',2],[],oRF,bQF,gg)
var cVF=_v()
_(fUF,cVF)
if(_o(145,oRF,bQF,gg)){cVF.wxVkey=1
}
var hWF=_v()
_(fUF,hWF)
if(_o(146,oRF,bQF,gg)){hWF.wxVkey=1
}
var oXF=_v()
_(fUF,oXF)
if(_o(147,oRF,bQF,gg)){oXF.wxVkey=1
}
var cYF=_v()
_(fUF,cYF)
if(_o(148,oRF,bQF,gg)){cYF.wxVkey=1
}
cVF.wxXCkey=1
hWF.wxXCkey=1
oXF.wxXCkey=1
cYF.wxXCkey=1
_(xSF,fUF)
return xSF
}
tOF.wxXCkey=2
_2(140,ePF,e,s,gg,tOF,'item','index','{{item.id}}')
}
var tWE=_v()
_(bKE,tWE)
if(_o(149,e,s,gg)){tWE.wxVkey=1
var oZF=_v()
_(tWE,oZF)
var l1F=function(t3F,a2F,e4F,gg){
var o6F=_n('view')
_r(o6F,'class',152,t3F,a2F,gg)
var x7F=_v()
_(o6F,x7F)
if(_o(153,t3F,a2F,gg)){x7F.wxVkey=1
var o8F=_v()
_(x7F,o8F)
var f9F=function(hAG,c0F,oBG,gg){
var oDG=_m('view',['bindtap',157,'class',1,'data-pid',2],[],hAG,c0F,gg)
var lEG=_v()
_(oDG,lEG)
if(_o(160,hAG,c0F,gg)){lEG.wxVkey=1
}
var aFG=_v()
_(oDG,aFG)
if(_o(161,hAG,c0F,gg)){aFG.wxVkey=1
}
var tGG=_v()
_(oDG,tGG)
if(_o(162,hAG,c0F,gg)){tGG.wxVkey=1
}
var eHG=_v()
_(oDG,eHG)
if(_o(163,hAG,c0F,gg)){eHG.wxVkey=1
}
lEG.wxXCkey=1
aFG.wxXCkey=1
tGG.wxXCkey=1
eHG.wxXCkey=1
_(oBG,oDG)
return oBG
}
o8F.wxXCkey=2
_2(155,f9F,t3F,a2F,gg,o8F,'productItem','index','{{item.id}}')
}
else{x7F.wxVkey=2
var bIG=_v()
_(x7F,bIG)
var oJG=function(oLG,xKG,fMG,gg){
var hOG=_m('view',['bindtap',165,'class',1,'data-pid',2],[],oLG,xKG,gg)
var oPG=_n('view')
_r(oPG,'class',168,oLG,xKG,gg)
var cQG=_v()
_(oPG,cQG)
if(_o(169,oLG,xKG,gg)){cQG.wxVkey=1
}
var oRG=_v()
_(oPG,oRG)
if(_o(170,oLG,xKG,gg)){oRG.wxVkey=1
}
cQG.wxXCkey=1
oRG.wxXCkey=1
_(hOG,oPG)
_(fMG,hOG)
return fMG
}
bIG.wxXCkey=2
_2(164,oJG,t3F,a2F,gg,bIG,'item','index','')
}
x7F.wxXCkey=1
_(e4F,o6F)
return e4F
}
oZF.wxXCkey=2
_2(150,l1F,e,s,gg,oZF,'item','index','{{item.id}}')
}
oLE.wxXCkey=1
xME.wxXCkey=1
oNE.wxXCkey=1
fOE.wxXCkey=1
cPE.wxXCkey=1
hQE.wxXCkey=1
oRE.wxXCkey=1
cSE.wxXCkey=1
oTE.wxXCkey=1
lUE.wxXCkey=1
aVE.wxXCkey=1
tWE.wxXCkey=1
_(tIE,bKE)
}
var eJE=_v()
_(r,eJE)
if(_o(171,e,s,gg)){eJE.wxVkey=1
}
tIE.wxXCkey=1
eJE.wxXCkey=1
return r
}
e_[x[22]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m20=function(e,s,r,gg){
var aTG=_v()
_(r,aTG)
if(_o(172,e,s,gg)){aTG.wxVkey=1
var eVG=_n('view')
var bWG=_v()
_(eVG,bWG)
if(_o(173,e,s,gg)){bWG.wxVkey=1
var h3G=_n('view')
_r(h3G,'class',174,e,s,gg)
var o4G=_v()
_(h3G,o4G)
if(_o(175,e,s,gg)){o4G.wxVkey=1
}
var c5G=_v()
_(h3G,c5G)
if(_o(176,e,s,gg)){c5G.wxVkey=1
}
o4G.wxXCkey=1
c5G.wxXCkey=1
_(bWG,h3G)
}
var oXG=_v()
_(eVG,oXG)
if(_o(177,e,s,gg)){oXG.wxVkey=1
var o6G=_n('view')
_r(o6G,'class',178,e,s,gg)
var l7G=_v()
_(o6G,l7G)
if(_o(179,e,s,gg)){l7G.wxVkey=1
}
var a8G=_v()
_(o6G,a8G)
if(_o(180,e,s,gg)){a8G.wxVkey=1
}
l7G.wxXCkey=1
a8G.wxXCkey=1
_(oXG,o6G)
}
var xYG=_v()
_(eVG,xYG)
if(_o(181,e,s,gg)){xYG.wxVkey=1
}
var oZG=_v()
_(eVG,oZG)
if(_o(182,e,s,gg)){oZG.wxVkey=1
}
var f1G=_v()
_(eVG,f1G)
if(_o(183,e,s,gg)){f1G.wxVkey=1
}
var c2G=_v()
_(eVG,c2G)
if(_o(184,e,s,gg)){c2G.wxVkey=1
}
var t9G=_m('view',['class',185,'hidden',1],[],e,s,gg)
var e0G=_v()
_(t9G,e0G)
var bAH=function(xCH,oBH,oDH,gg){
var cFH=_m('view',['bindtap',189,'class',1,'data-pid',2],[],xCH,oBH,gg)
var hGH=_v()
_(cFH,hGH)
if(_o(192,xCH,oBH,gg)){hGH.wxVkey=1
}
var oHH=_v()
_(cFH,oHH)
if(_o(193,xCH,oBH,gg)){oHH.wxVkey=1
}
var cIH=_v()
_(cFH,cIH)
if(_o(194,xCH,oBH,gg)){cIH.wxVkey=1
}
hGH.wxXCkey=1
oHH.wxXCkey=1
cIH.wxXCkey=1
_(oDH,cFH)
return oDH
}
e0G.wxXCkey=2
_2(187,bAH,e,s,gg,e0G,'item','index','{{item.id}}')
var oJH=_v()
_(t9G,oJH)
var lKH=function(tMH,aLH,eNH,gg){
var oPH=_m('view',['bindtap',197,'class',1,'data-pid',2],[],tMH,aLH,gg)
var xQH=_v()
_(oPH,xQH)
if(_o(200,tMH,aLH,gg)){xQH.wxVkey=1
}
var oRH=_v()
_(oPH,oRH)
if(_o(201,tMH,aLH,gg)){oRH.wxVkey=1
}
var fSH=_v()
_(oPH,fSH)
if(_o(202,tMH,aLH,gg)){fSH.wxVkey=1
}
xQH.wxXCkey=1
oRH.wxXCkey=1
fSH.wxXCkey=1
_(eNH,oPH)
return eNH
}
oJH.wxXCkey=2
_2(195,lKH,e,s,gg,oJH,'item','index','{{item.id}}')
_(eVG,t9G)
var cTH=_v()
_(eVG,cTH)
var hUH=function(cWH,oVH,oXH,gg){
var aZH=_n('view')
_r(aZH,'class',205,cWH,oVH,gg)
var t1H=_v()
_(aZH,t1H)
if(_o(206,cWH,oVH,gg)){t1H.wxVkey=1
var e2H=_v()
_(t1H,e2H)
var b3H=function(x5H,o4H,o6H,gg){
var c8H=_m('view',['bindtap',210,'class',1,'data-pid',2],[],x5H,o4H,gg)
var h9H=_v()
_(c8H,h9H)
if(_o(213,x5H,o4H,gg)){h9H.wxVkey=1
}
var o0H=_v()
_(c8H,o0H)
if(_o(214,x5H,o4H,gg)){o0H.wxVkey=1
}
var cAI=_v()
_(c8H,cAI)
if(_o(215,x5H,o4H,gg)){cAI.wxVkey=1
}
h9H.wxXCkey=1
o0H.wxXCkey=1
cAI.wxXCkey=1
_(o6H,c8H)
return o6H
}
e2H.wxXCkey=2
_2(208,b3H,cWH,oVH,gg,e2H,'productItem','index','{{item.id}}')
}
else{t1H.wxVkey=2
var oBI=_v()
_(t1H,oBI)
var lCI=function(tEI,aDI,eFI,gg){
var oHI=_m('view',['bindtap',217,'class',1,'data-pid',2],[],tEI,aDI,gg)
var xII=_n('view')
_r(xII,'class',220,tEI,aDI,gg)
var oJI=_v()
_(xII,oJI)
if(_o(221,tEI,aDI,gg)){oJI.wxVkey=1
}
var fKI=_v()
_(xII,fKI)
if(_o(222,tEI,aDI,gg)){fKI.wxVkey=1
}
oJI.wxXCkey=1
fKI.wxXCkey=1
_(oHI,xII)
_(eFI,oHI)
return eFI
}
oBI.wxXCkey=2
_2(216,lCI,cWH,oVH,gg,oBI,'item','index','')
}
t1H.wxXCkey=1
_(oXH,aZH)
return oXH
}
cTH.wxXCkey=2
_2(203,hUH,e,s,gg,cTH,'item','index','{{item.id}}')
bWG.wxXCkey=1
oXG.wxXCkey=1
xYG.wxXCkey=1
oZG.wxXCkey=1
f1G.wxXCkey=1
c2G.wxXCkey=1
_(aTG,eVG)
}
var tUG=_v()
_(r,tUG)
if(_o(223,e,s,gg)){tUG.wxVkey=1
}
aTG.wxXCkey=1
tUG.wxXCkey=1
return r
}
e_[x[23]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m21=function(e,s,r,gg){
var hMI=_v()
_(r,hMI)
if(_o(224,e,s,gg)){hMI.wxVkey=1
var oNI=_n('view')
var cOI=_v()
_(oNI,cOI)
if(_o(225,e,s,gg)){cOI.wxVkey=1
var eTI=_n('view')
_r(eTI,'class',226,e,s,gg)
var bUI=_v()
_(eTI,bUI)
if(_o(227,e,s,gg)){bUI.wxVkey=1
}
var oVI=_v()
_(eTI,oVI)
if(_o(228,e,s,gg)){oVI.wxVkey=1
}
bUI.wxXCkey=1
oVI.wxXCkey=1
_(cOI,eTI)
}
var oPI=_v()
_(oNI,oPI)
if(_o(229,e,s,gg)){oPI.wxVkey=1
}
var lQI=_v()
_(oNI,lQI)
if(_o(230,e,s,gg)){lQI.wxVkey=1
}
var aRI=_v()
_(oNI,aRI)
if(_o(231,e,s,gg)){aRI.wxVkey=1
}
var tSI=_v()
_(oNI,tSI)
if(_o(232,e,s,gg)){tSI.wxVkey=1
var xWI=_v()
_(tSI,xWI)
var oXI=function(cZI,fYI,h1I,gg){
var c3I=_m('view',['bindtap',235,'class',1,'data-pid',2],[],cZI,fYI,gg)
var o4I=_v()
_(c3I,o4I)
if(_o(238,cZI,fYI,gg)){o4I.wxVkey=1
}
o4I.wxXCkey=1
_(h1I,c3I)
return h1I
}
xWI.wxXCkey=2
_2(233,oXI,e,s,gg,xWI,'item','index','{{item.id}}')
}
cOI.wxXCkey=1
oPI.wxXCkey=1
lQI.wxXCkey=1
aRI.wxXCkey=1
tSI.wxXCkey=1
_(hMI,oNI)
}
else{hMI.wxVkey=2
}
hMI.wxXCkey=1
return r
}
e_[x[24]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m22=function(e,s,r,gg){
var a6I=e_[x[25]].i
_ai(a6I,x[1],e_,x[25],1,1)
var t7I=_v()
_(r,t7I)
var e8I=_o(240,e,s,gg)
var b9I=_gd(x[25],e8I,e_,d_)
if(b9I){
var o0I=_1(239,e,s,gg) || {}
var cur_globalf=gg.f
t7I.wxXCkey=3
b9I(o0I,o0I,t7I,gg)
gg.f=cur_globalf
}
else _w(e8I,x[25],50,26)
a6I.pop()
return r
}
e_[x[25]]={f:m22,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[26]]={}
var m23=function(e,s,r,gg){
return r
}
e_[x[26]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m24=function(e,s,r,gg){
return r
}
e_[x[27]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m25=function(e,s,r,gg){
return r
}
e_[x[28]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m26=function(e,s,r,gg){
return r
}
e_[x[29]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m27=function(e,s,r,gg){
var oFJ=e_[x[30]].i
_ai(oFJ,x[17],e_,x[30],1,1)
oFJ.pop()
return r
}
e_[x[30]]={f:m27,j:[],i:[],ti:[x[17]],ic:[]}
d_[x[31]]={}
var m28=function(e,s,r,gg){
return r
}
e_[x[31]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m29=function(e,s,r,gg){
return r
}
e_[x[32]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m30=function(e,s,r,gg){
var aJJ=_v()
_(r,aJJ)
if(_o(241,e,s,gg)){aJJ.wxVkey=1
}
aJJ.wxXCkey=1
return r
}
e_[x[33]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m31=function(e,s,r,gg){
var eLJ=_v()
_(r,eLJ)
if(_o(242,e,s,gg)){eLJ.wxVkey=1
}
eLJ.wxXCkey=1
return r
}
e_[x[34]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m32=function(e,s,r,gg){
return r
}
e_[x[35]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m33=function(e,s,r,gg){
var xOJ=_m('view',['class',243,'style',1],[],e,s,gg)
var oPJ=_v()
_(xOJ,oPJ)
if(_o(245,e,s,gg)){oPJ.wxVkey=1
}
var fQJ=_v()
_(xOJ,fQJ)
if(_o(246,e,s,gg)){fQJ.wxVkey=1
}
var cRJ=_v()
_(xOJ,cRJ)
if(_o(247,e,s,gg)){cRJ.wxVkey=1
}
oPJ.wxXCkey=1
fQJ.wxXCkey=1
cRJ.wxXCkey=1
_(r,xOJ)
return r
}
e_[x[36]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m34=function(e,s,r,gg){
var oTJ=_v()
_(r,oTJ)
var cUJ=function(lWJ,oVJ,aXJ,gg){
var eZJ=_v()
_(aXJ,eZJ)
if(_o(249,lWJ,oVJ,gg)){eZJ.wxVkey=1
}
eZJ.wxXCkey=1
return aXJ
}
oTJ.wxXCkey=2
_2(248,cUJ,e,s,gg,oTJ,'item','index','')
return r
}
e_[x[37]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m35=function(e,s,r,gg){
return r
}
e_[x[38]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m36=function(e,s,r,gg){
return r
}
e_[x[39]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m37=function(e,s,r,gg){
var o4J=e_[x[40]].i
_ai(o4J,x[17],e_,x[40],1,1)
var f5J=_n('view')
_r(f5J,'class',250,e,s,gg)
var c6J=e_[x[40]].j
var h7J=_v()
_(f5J,h7J)
if(_o(251,e,s,gg)){h7J.wxVkey=1
var c9J=_n('view')
_r(c9J,'class',252,e,s,gg)
var o0J=_v()
_(c9J,o0J)
if(_o(253,e,s,gg)){o0J.wxVkey=1
}
var lAK=_v()
_(c9J,lAK)
if(_o(254,e,s,gg)){lAK.wxVkey=1
}
o0J.wxXCkey=1
lAK.wxXCkey=1
_(h7J,c9J)
}
var aBK=_m('view',['class',255,'style',1],[],e,s,gg)
var tCK=_v()
_(aBK,tCK)
if(_o(257,e,s,gg)){tCK.wxVkey=1
}
var eDK=_v()
_(aBK,eDK)
if(_o(258,e,s,gg)){eDK.wxVkey=1
}
tCK.wxXCkey=1
eDK.wxXCkey=1
_(f5J,aBK)
var o8J=_v()
_(f5J,o8J)
if(_o(259,e,s,gg)){o8J.wxVkey=1
}
var bEK=_n('view')
_r(bEK,'class',260,e,s,gg)
var oFK=_v()
_(bEK,oFK)
if(_o(261,e,s,gg)){oFK.wxVkey=1
}
var xGK=_v()
_(bEK,xGK)
if(_o(262,e,s,gg)){xGK.wxVkey=1
var fIK=_n('view')
_r(fIK,'class',263,e,s,gg)
var cJK=_v()
_(fIK,cJK)
if(_o(264,e,s,gg)){cJK.wxVkey=1
var hKK=_v()
_(cJK,hKK)
if(_o(265,e,s,gg)){hKK.wxVkey=1
}
var oLK=_v()
_(cJK,oLK)
if(_o(266,e,s,gg)){oLK.wxVkey=1
}
hKK.wxXCkey=1
oLK.wxXCkey=1
}
else{cJK.wxVkey=2
}
cJK.wxXCkey=1
_(xGK,fIK)
}
var oHK=_v()
_(bEK,oHK)
if(_o(267,e,s,gg)){oHK.wxVkey=1
}
oFK.wxXCkey=1
xGK.wxXCkey=1
oHK.wxXCkey=1
_(f5J,bEK)
var cMK=_n('view')
_r(cMK,'class',268,e,s,gg)
var oNK=_v()
_(cMK,oNK)
if(_o(269,e,s,gg)){oNK.wxVkey=1
}
else if(_o(270,e,s,gg)){oNK.wxVkey=2
}
else if(_o(271,e,s,gg)){oNK.wxVkey=3
}
else{oNK.wxVkey=4
var lOK=_n('view')
_r(lOK,'class',272,e,s,gg)
var aPK=_v()
_(lOK,aPK)
if(_o(273,e,s,gg)){aPK.wxVkey=1
}
var tQK=_v()
_(lOK,tQK)
if(_o(274,e,s,gg)){tQK.wxVkey=1
}
var eRK=_v()
_(lOK,eRK)
if(_o(275,e,s,gg)){eRK.wxVkey=1
}
var bSK=_v()
_(lOK,bSK)
if(_o(276,e,s,gg)){bSK.wxVkey=1
}
aPK.wxXCkey=1
tQK.wxXCkey=1
eRK.wxXCkey=1
bSK.wxXCkey=1
_(oNK,lOK)
}
oNK.wxXCkey=1
_(f5J,cMK)
_ic(x[41],e_,x[40],e,s,f5J,gg);
h7J.wxXCkey=1
o8J.wxXCkey=1
c6J.pop()
_(r,f5J)
o4J.pop()
return r
}
e_[x[40]]={f:m37,j:[],i:[],ti:[x[17]],ic:[]}
d_[x[42]]={}
var m38=function(e,s,r,gg){
var xUK=_v()
_(r,xUK)
var oVK=function(cXK,fWK,hYK,gg){
var c1K=_m('view',['bindtap',279,'class',1,'data-pid',2],[],cXK,fWK,gg)
var o2K=_v()
_(c1K,o2K)
if(_o(282,cXK,fWK,gg)){o2K.wxVkey=1
}
var l3K=_v()
_(c1K,l3K)
if(_o(283,cXK,fWK,gg)){l3K.wxVkey=1
}
var a4K=_v()
_(c1K,a4K)
if(_o(284,cXK,fWK,gg)){a4K.wxVkey=1
}
var t5K=_n('view')
_r(t5K,'class',285,cXK,fWK,gg)
var e6K=_v()
_(t5K,e6K)
if(_o(286,cXK,fWK,gg)){e6K.wxVkey=1
}
var b7K=_v()
_(t5K,b7K)
if(_o(287,cXK,fWK,gg)){b7K.wxVkey=1
}
e6K.wxXCkey=1
b7K.wxXCkey=1
_(c1K,t5K)
o2K.wxXCkey=1
l3K.wxXCkey=1
a4K.wxXCkey=1
_(hYK,c1K)
return hYK
}
xUK.wxXCkey=2
_2(277,oVK,e,s,gg,xUK,'item','index','{{item.id}}')
return r
}
e_[x[42]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m39=function(e,s,r,gg){
var x9K=_v()
_(r,x9K)
if(_o(288,e,s,gg)){x9K.wxVkey=1
}
x9K.wxXCkey=1
return r
}
e_[x[43]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m40=function(e,s,r,gg){
return r
}
e_[x[44]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m41=function(e,s,r,gg){
return r
}
e_[x[45]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m42=function(e,s,r,gg){
return r
}
e_[x[46]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m43=function(e,s,r,gg){
return r
}
e_[x[47]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m44=function(e,s,r,gg){
var cEL=_m('scroll-view',['bindscrolltolower',289,'bindtap',1,'class',2,'scrollY',3],[],e,s,gg)
var oFL=_v()
_(cEL,oFL)
if(_o(293,e,s,gg)){oFL.wxVkey=1
}
else if(_o(294,e,s,gg)){oFL.wxVkey=2
}
else{oFL.wxVkey=3
var lGL=_v()
_(oFL,lGL)
var aHL=function(eJL,tIL,bKL,gg){
var xML=_m('view',['bindtap',297,'class',1,'data-pid',2],[],eJL,tIL,gg)
var oNL=_v()
_(xML,oNL)
if(_o(300,eJL,tIL,gg)){oNL.wxVkey=1
}
oNL.wxXCkey=1
_(bKL,xML)
return bKL
}
lGL.wxXCkey=2
_2(295,aHL,e,s,gg,lGL,'item','index','{{item.id}}')
}
oFL.wxXCkey=1
_(r,cEL)
return r
}
e_[x[48]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m45=function(e,s,r,gg){
return r
}
e_[x[49]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m46=function(e,s,r,gg){
return r
}
e_[x[50]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m47=function(e,s,r,gg){
return r
}
e_[x[51]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[52]]={}
var m48=function(e,s,r,gg){
return r
}
e_[x[52]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[53]]={}
var m49=function(e,s,r,gg){
var oTL=_v()
_(r,oTL)
if(_o(301,e,s,gg)){oTL.wxVkey=1
}
var lUL=_v()
_(r,lUL)
if(_o(302,e,s,gg)){lUL.wxVkey=1
}
oTL.wxXCkey=1
lUL.wxXCkey=1
return r
}
e_[x[53]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
var m50=function(e,s,r,gg){
return r
}
e_[x[54]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[55]]={}
var m51=function(e,s,r,gg){
return r
}
e_[x[55]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[56]]={}
var m52=function(e,s,r,gg){
return r
}
e_[x[56]]={f:m52,j:[],i:[],ti:[],ic:[]}
d_[x[57]]={}
var m53=function(e,s,r,gg){
return r
}
e_[x[57]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[58]]={}
var m54=function(e,s,r,gg){
return r
}
e_[x[58]]={f:m54,j:[],i:[],ti:[],ic:[]}
d_[x[59]]={}
var m55=function(e,s,r,gg){
var o2L=_v()
_(r,o2L)
if(_o(303,e,s,gg)){o2L.wxVkey=1
var f3L=_n('component-tag-name')
_r(f3L,'id',304,e,s,gg)
_(o2L,f3L)
}
o2L.wxXCkey=1
o2L.wxXCkey=3
return r
}
e_[x[59]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[60]]={}
var m56=function(e,s,r,gg){
var h5L=_v()
_(r,h5L)
var o6L=function(o8L,c7L,l9L,gg){
var tAM=_m('view',['bindtap',307,'class',1,'data-pid',2],[],o8L,c7L,gg)
var eBM=_v()
_(tAM,eBM)
if(_o(310,o8L,c7L,gg)){eBM.wxVkey=1
}
var bCM=_v()
_(tAM,bCM)
if(_o(311,o8L,c7L,gg)){bCM.wxVkey=1
}
var oDM=_v()
_(tAM,oDM)
if(_o(312,o8L,c7L,gg)){oDM.wxVkey=1
}
var xEM=_v()
_(tAM,xEM)
if(_o(313,o8L,c7L,gg)){xEM.wxVkey=1
}
eBM.wxXCkey=1
bCM.wxXCkey=1
oDM.wxXCkey=1
xEM.wxXCkey=1
_(l9L,tAM)
return l9L
}
h5L.wxXCkey=2
_2(305,o6L,e,s,gg,h5L,'item','index','{{item.id}}')
return r
}
e_[x[60]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[61]]={}
var m57=function(e,s,r,gg){
var fGM=_v()
_(r,fGM)
if(_o(314,e,s,gg)){fGM.wxVkey=1
var hIM=_v()
_(fGM,hIM)
var oJM=function(oLM,cKM,lMM,gg){
var tOM=_m('view',['bindtap',317,'class',1,'data-pid',2],[],oLM,cKM,gg)
var ePM=_v()
_(tOM,ePM)
if(_o(320,oLM,cKM,gg)){ePM.wxVkey=1
}
var bQM=_v()
_(tOM,bQM)
if(_o(321,oLM,cKM,gg)){bQM.wxVkey=1
}
var oRM=_v()
_(tOM,oRM)
if(_o(322,oLM,cKM,gg)){oRM.wxVkey=1
}
var xSM=_v()
_(tOM,xSM)
if(_o(323,oLM,cKM,gg)){xSM.wxVkey=1
}
ePM.wxXCkey=1
bQM.wxXCkey=1
oRM.wxXCkey=1
xSM.wxXCkey=1
_(lMM,tOM)
return lMM
}
hIM.wxXCkey=2
_2(315,oJM,e,s,gg,hIM,'item','index','{{item.id}}')
}
var cHM=_v()
_(r,cHM)
if(_o(324,e,s,gg)){cHM.wxVkey=1
var oTM=_v()
_(cHM,oTM)
var fUM=function(hWM,cVM,oXM,gg){
var oZM=_m('view',['bindtap',327,'class',1,'data-pid',2],[],hWM,cVM,gg)
var l1M=_v()
_(oZM,l1M)
if(_o(330,hWM,cVM,gg)){l1M.wxVkey=1
}
var a2M=_v()
_(oZM,a2M)
if(_o(331,hWM,cVM,gg)){a2M.wxVkey=1
}
var t3M=_v()
_(oZM,t3M)
if(_o(332,hWM,cVM,gg)){t3M.wxVkey=1
}
var e4M=_v()
_(oZM,e4M)
if(_o(333,hWM,cVM,gg)){e4M.wxVkey=1
}
l1M.wxXCkey=1
a2M.wxXCkey=1
t3M.wxXCkey=1
e4M.wxXCkey=1
_(oXM,oZM)
return oXM
}
oTM.wxXCkey=2
_2(325,fUM,e,s,gg,oTM,'item','index','{{item.id}}')
}
fGM.wxXCkey=1
cHM.wxXCkey=1
return r
}
e_[x[61]]={f:m57,j:[],i:[],ti:[],ic:[]}
d_[x[62]]={}
var m58=function(e,s,r,gg){
return r
}
e_[x[62]]={f:m58,j:[],i:[],ti:[],ic:[]}
d_[x[63]]={}
var m59=function(e,s,r,gg){
var x7M=e_[x[63]].i
_ai(x7M,x[17],e_,x[63],1,1)
var o8M=_v()
_(r,o8M)
var f9M=_o(335,e,s,gg)
var c0M=_gd(x[63],f9M,e_,d_)
if(c0M){
var hAN=_1(334,e,s,gg) || {}
var cur_globalf=gg.f
o8M.wxXCkey=3
c0M(hAN,hAN,o8M,gg)
gg.f=cur_globalf
}
else _w(f9M,x[63],3,18)
x7M.pop()
return r
}
e_[x[63]]={f:m59,j:[],i:[],ti:[x[17]],ic:[]}
d_[x[64]]={}
var m60=function(e,s,r,gg){
return r
}
e_[x[64]]={f:m60,j:[],i:[],ti:[],ic:[]}
d_[x[65]]={}
var m61=function(e,s,r,gg){
return r
}
e_[x[65]]={f:m61,j:[],i:[],ti:[],ic:[]}
d_[x[66]]={}
var m62=function(e,s,r,gg){
return r
}
e_[x[66]]={f:m62,j:[],i:[],ti:[],ic:[]}
d_[x[67]]={}
var m63=function(e,s,r,gg){
var aFN=_n('view')
_r(aFN,'class',336,e,s,gg)
var tGN=_v()
_(aFN,tGN)
if(_o(337,e,s,gg)){tGN.wxVkey=1
}
var eHN=_v()
_(aFN,eHN)
if(_o(338,e,s,gg)){eHN.wxVkey=1
}
var bIN=_v()
_(aFN,bIN)
if(_o(339,e,s,gg)){bIN.wxVkey=1
}
var oJN=_n('view')
_r(oJN,'class',340,e,s,gg)
var oLN=_v()
_(oJN,oLN)
var fMN=function(hON,cNN,oPN,gg){
var oRN=_v()
_(oPN,oRN)
if(_o(343,hON,cNN,gg)){oRN.wxVkey=1
}
oRN.wxXCkey=1
return oPN
}
oLN.wxXCkey=2
_2(341,fMN,e,s,gg,oLN,'item','index','{{item.id}}')
var xKN=_v()
_(oJN,xKN)
if(_o(344,e,s,gg)){xKN.wxVkey=1
}
xKN.wxXCkey=1
_(aFN,oJN)
tGN.wxXCkey=1
eHN.wxXCkey=1
bIN.wxXCkey=1
_(r,aFN)
return r
}
e_[x[67]]={f:m63,j:[],i:[],ti:[],ic:[]}
d_[x[68]]={}
var m64=function(e,s,r,gg){
var aTN=_v()
_(r,aTN)
var tUN=function(bWN,eVN,oXN,gg){
var oZN=_v()
_(oXN,oZN)
var f1N=function(h3N,c2N,o4N,gg){
var o6N=_v()
_(o4N,o6N)
var l7N=function(t9N,a8N,e0N,gg){
var oBO=_n('view')
_r(oBO,'class',353,t9N,a8N,gg)
var xCO=_v()
_(oBO,xCO)
if(_o(354,t9N,a8N,gg)){xCO.wxVkey=1
}
var oDO=_v()
_(oBO,oDO)
if(_o(355,t9N,a8N,gg)){oDO.wxVkey=1
}
xCO.wxXCkey=1
oDO.wxXCkey=1
_(e0N,oBO)
return e0N
}
o6N.wxXCkey=2
_2(351,l7N,h3N,c2N,gg,o6N,'proItem','index','{{orderNoItem.productOrderVOList.productId}}')
return o4N
}
oZN.wxXCkey=2
_2(348,f1N,bWN,eVN,gg,oZN,'orderNoItem','index','{{orderNoItem.children.id}}')
return oXN
}
aTN.wxXCkey=2
_2(345,tUN,e,s,gg,aTN,'item','index','{{item.orderNO}}')
return r
}
e_[x[68]]={f:m64,j:[],i:[],ti:[],ic:[]}
d_[x[69]]={}
var m65=function(e,s,r,gg){
return r
}
e_[x[69]]={f:m65,j:[],i:[],ti:[],ic:[]}
d_[x[70]]={}
var m66=function(e,s,r,gg){
return r
}
e_[x[70]]={f:m66,j:[],i:[],ti:[],ic:[]}
d_[x[71]]={}
var m67=function(e,s,r,gg){
var oHO=_n('view')
_r(oHO,'class',356,e,s,gg)
var cIO=_v()
_(oHO,cIO)
if(_o(357,e,s,gg)){cIO.wxVkey=1
var aLO=_v()
_(cIO,aLO)
if(_o(358,e,s,gg)){aLO.wxVkey=1
var tMO=_v()
_(aLO,tMO)
var eNO=function(oPO,bOO,xQO,gg){
var fSO=_n('view')
_r(fSO,'class',361,oPO,bOO,gg)
var cTO=_v()
_(fSO,cTO)
if(_o(362,oPO,bOO,gg)){cTO.wxVkey=1
}
var hUO=_v()
_(fSO,hUO)
if(_o(363,oPO,bOO,gg)){hUO.wxVkey=1
}
var oVO=_v()
_(fSO,oVO)
if(_o(364,oPO,bOO,gg)){oVO.wxVkey=1
}
cTO.wxXCkey=1
hUO.wxXCkey=1
oVO.wxXCkey=1
_(xQO,fSO)
return xQO
}
tMO.wxXCkey=2
_2(359,eNO,e,s,gg,tMO,'item','index','{{item.id}}')
}
aLO.wxXCkey=1
}
var oJO=_v()
_(oHO,oJO)
if(_o(365,e,s,gg)){oJO.wxVkey=1
var cWO=_v()
_(oJO,cWO)
if(_o(366,e,s,gg)){cWO.wxVkey=1
}
cWO.wxXCkey=1
}
var lKO=_v()
_(oHO,lKO)
if(_o(367,e,s,gg)){lKO.wxVkey=1
var oXO=_v()
_(lKO,oXO)
if(_o(368,e,s,gg)){oXO.wxVkey=1
}
oXO.wxXCkey=1
}
cIO.wxXCkey=1
oJO.wxXCkey=1
lKO.wxXCkey=1
_(r,oHO)
return r
}
e_[x[71]]={f:m67,j:[],i:[],ti:[],ic:[]}
d_[x[72]]={}
var m68=function(e,s,r,gg){
var aZO=_n('view')
_r(aZO,'class',369,e,s,gg)
var t1O=_v()
_(aZO,t1O)
if(_o(370,e,s,gg)){t1O.wxVkey=1
var e2O=_n('view')
_r(e2O,'class',371,e,s,gg)
var b3O=_v()
_(e2O,b3O)
if(_o(372,e,s,gg)){b3O.wxVkey=1
var x5O=_n('view')
_r(x5O,'class',373,e,s,gg)
var o6O=_m('view',['catchtap',374,'class',1,'data-index',2],[],e,s,gg)
var f7O=_v()
_(o6O,f7O)
if(_o(377,e,s,gg)){f7O.wxVkey=1
}
f7O.wxXCkey=1
_(x5O,o6O)
var c8O=_m('view',['catchtap',378,'class',1,'data-index',2],[],e,s,gg)
var h9O=_v()
_(c8O,h9O)
if(_o(381,e,s,gg)){h9O.wxVkey=1
}
h9O.wxXCkey=1
_(x5O,c8O)
var o0O=_m('view',['catchtap',382,'class',1,'data-index',2],[],e,s,gg)
var cAP=_v()
_(o0O,cAP)
if(_o(385,e,s,gg)){cAP.wxVkey=1
}
cAP.wxXCkey=1
_(x5O,o0O)
var oBP=_m('view',['catchtap',386,'class',1,'data-index',2],[],e,s,gg)
var lCP=_v()
_(oBP,lCP)
if(_o(389,e,s,gg)){lCP.wxVkey=1
}
lCP.wxXCkey=1
_(x5O,oBP)
_(b3O,x5O)
}
var aDP=_n('view')
_r(aDP,'class',390,e,s,gg)
var tEP=_v()
_(aDP,tEP)
if(_o(391,e,s,gg)){tEP.wxVkey=1
}
var eFP=_v()
_(aDP,eFP)
if(_o(392,e,s,gg)){eFP.wxVkey=1
}
var bGP=_v()
_(aDP,bGP)
if(_o(393,e,s,gg)){bGP.wxVkey=1
}
var oHP=_v()
_(aDP,oHP)
if(_o(394,e,s,gg)){oHP.wxVkey=1
}
var xIP=_v()
_(aDP,xIP)
if(_o(395,e,s,gg)){xIP.wxVkey=1
}
var oJP=_v()
_(aDP,oJP)
if(_o(396,e,s,gg)){oJP.wxVkey=1
}
var fKP=_v()
_(aDP,fKP)
if(_o(397,e,s,gg)){fKP.wxVkey=1
}
tEP.wxXCkey=1
eFP.wxXCkey=1
bGP.wxXCkey=1
oHP.wxXCkey=1
xIP.wxXCkey=1
oJP.wxXCkey=1
fKP.wxXCkey=1
_(e2O,aDP)
var cLP=_n('view')
_r(cLP,'class',398,e,s,gg)
var hMP=_v()
_(cLP,hMP)
if(_o(399,e,s,gg)){hMP.wxVkey=1
}
var oNP=_v()
_(cLP,oNP)
if(_o(400,e,s,gg)){oNP.wxVkey=1
}
var cOP=_v()
_(cLP,cOP)
if(_o(401,e,s,gg)){cOP.wxVkey=1
}
hMP.wxXCkey=1
oNP.wxXCkey=1
cOP.wxXCkey=1
_(e2O,cLP)
var o4O=_v()
_(e2O,o4O)
if(_o(402,e,s,gg)){o4O.wxVkey=1
}
b3O.wxXCkey=1
o4O.wxXCkey=1
_(t1O,e2O)
}
else{t1O.wxVkey=2
}
t1O.wxXCkey=1
_(r,aZO)
return r
}
e_[x[72]]={f:m68,j:[],i:[],ti:[],ic:[]}
d_[x[73]]={}
var m69=function(e,s,r,gg){
return r
}
e_[x[73]]={f:m69,j:[],i:[],ti:[],ic:[]}
d_[x[74]]={}
var m70=function(e,s,r,gg){
return r
}
e_[x[74]]={f:m70,j:[],i:[],ti:[],ic:[]}
d_[x[75]]={}
var m71=function(e,s,r,gg){
var tSP=e_[x[75]].i
_ai(tSP,x[17],e_,x[75],1,1)
var eTP=_n('view')
_r(eTP,'class',403,e,s,gg)
var bUP=_v()
_(eTP,bUP)
if(_o(404,e,s,gg)){bUP.wxVkey=1
var oVP=_v()
_(bUP,oVP)
var xWP=function(fYP,oXP,cZP,gg){
var o2P=_m('view',['bindtap',407,'class',1,'data-pid',2],[],fYP,oXP,gg)
var c3P=_v()
_(o2P,c3P)
if(_o(410,fYP,oXP,gg)){c3P.wxVkey=1
}
var o4P=_v()
_(o2P,o4P)
if(_o(411,fYP,oXP,gg)){o4P.wxVkey=1
}
var l5P=_v()
_(o2P,l5P)
if(_o(412,fYP,oXP,gg)){l5P.wxVkey=1
}
var a6P=_v()
_(o2P,a6P)
if(_o(413,fYP,oXP,gg)){a6P.wxVkey=1
}
var t7P=_v()
_(o2P,t7P)
if(_o(414,fYP,oXP,gg)){t7P.wxVkey=1
}
var e8P=_v()
_(o2P,e8P)
if(_o(415,fYP,oXP,gg)){e8P.wxVkey=1
}
c3P.wxXCkey=1
o4P.wxXCkey=1
l5P.wxXCkey=1
a6P.wxXCkey=1
t7P.wxXCkey=1
e8P.wxXCkey=1
_(cZP,o2P)
return cZP
}
oVP.wxXCkey=2
_2(405,xWP,e,s,gg,oVP,'item','index','{{item.id}}')
}
else if(_o(416,e,s,gg)){bUP.wxVkey=2
var b9P=_v()
_(bUP,b9P)
var o0P=_o(418,e,s,gg)
var xAQ=_gd(x[75],o0P,e_,d_)
if(xAQ){
var oBQ=_1(417,e,s,gg) || {}
var cur_globalf=gg.f
b9P.wxXCkey=3
xAQ(oBQ,oBQ,b9P,gg)
gg.f=cur_globalf
}
else _w(o0P,x[75],60,26)
}
else{bUP.wxVkey=3
}
bUP.wxXCkey=1
_(r,eTP)
tSP.pop()
return r
}
e_[x[75]]={f:m71,j:[],i:[],ti:[x[17]],ic:[]}
d_[x[76]]={}
var m72=function(e,s,r,gg){
var cDQ=_v()
_(r,cDQ)
if(_o(419,e,s,gg)){cDQ.wxVkey=1
}
cDQ.wxXCkey=1
return r
}
e_[x[76]]={f:m72,j:[],i:[],ti:[],ic:[]}
d_[x[77]]={}
var m73=function(e,s,r,gg){
return r
}
e_[x[77]]={f:m73,j:[],i:[],ti:[],ic:[]}
d_[x[78]]={}
var m74=function(e,s,r,gg){
return r
}
e_[x[78]]={f:m74,j:[],i:[],ti:[],ic:[]}
d_[x[79]]={}
var m75=function(e,s,r,gg){
var oHQ=e_[x[79]].i
_ai(oHQ,x[17],e_,x[79],1,1)
var lIQ=_n('view')
_r(lIQ,'class',420,e,s,gg)
var aJQ=_v()
_(lIQ,aJQ)
if(_o(421,e,s,gg)){aJQ.wxVkey=1
var tKQ=_v()
_(aJQ,tKQ)
var eLQ=function(oNQ,bMQ,xOQ,gg){
var fQQ=_m('view',['bindtap',424,'class',1,'data-pid',2],[],oNQ,bMQ,gg)
var cRQ=_v()
_(fQQ,cRQ)
if(_o(427,oNQ,bMQ,gg)){cRQ.wxVkey=1
}
var hSQ=_v()
_(fQQ,hSQ)
if(_o(428,oNQ,bMQ,gg)){hSQ.wxVkey=1
}
cRQ.wxXCkey=1
hSQ.wxXCkey=1
_(xOQ,fQQ)
return xOQ
}
tKQ.wxXCkey=2
_2(422,eLQ,e,s,gg,tKQ,'item','index','{{item.id}}')
}
else if(_o(429,e,s,gg)){aJQ.wxVkey=2
var oTQ=_v()
_(aJQ,oTQ)
var cUQ=_o(431,e,s,gg)
var oVQ=_gd(x[79],cUQ,e_,d_)
if(oVQ){
var lWQ=_1(430,e,s,gg) || {}
var cur_globalf=gg.f
oTQ.wxXCkey=3
oVQ(lWQ,lWQ,oTQ,gg)
gg.f=cur_globalf
}
else _w(cUQ,x[79],45,26)
}
else{aJQ.wxVkey=3
}
aJQ.wxXCkey=1
_(r,lIQ)
oHQ.pop()
return r
}
e_[x[79]]={f:m75,j:[],i:[],ti:[x[17]],ic:[]}
d_[x[80]]={}
var m76=function(e,s,r,gg){
var tYQ=_v()
_(r,tYQ)
if(_o(432,e,s,gg)){tYQ.wxVkey=1
}
tYQ.wxXCkey=1
return r
}
e_[x[80]]={f:m76,j:[],i:[],ti:[],ic:[]}
d_[x[81]]={}
var m77=function(e,s,r,gg){
return r
}
e_[x[81]]={f:m77,j:[],i:[],ti:[],ic:[]}
d_[x[82]]={}
var m78=function(e,s,r,gg){
return r
}
e_[x[82]]={f:m78,j:[],i:[],ti:[],ic:[]}
d_[x[83]]={}
var m79=function(e,s,r,gg){
var x3Q=e_[x[83]].i
_ai(x3Q,x[17],e_,x[83],1,1)
var o4Q=_n('view')
_r(o4Q,'class',433,e,s,gg)
var f5Q=_v()
_(o4Q,f5Q)
if(_o(434,e,s,gg)){f5Q.wxVkey=1
var c6Q=_v()
_(f5Q,c6Q)
var h7Q=function(c9Q,o8Q,o0Q,gg){
var aBR=_m('view',['bindtap',437,'class',1,'data-pid',2],[],c9Q,o8Q,gg)
var tCR=_v()
_(aBR,tCR)
if(_o(440,c9Q,o8Q,gg)){tCR.wxVkey=1
}
tCR.wxXCkey=1
_(o0Q,aBR)
return o0Q
}
c6Q.wxXCkey=2
_2(435,h7Q,e,s,gg,c6Q,'item','index','{{item.id}}')
}
else if(_o(441,e,s,gg)){f5Q.wxVkey=2
var eDR=_v()
_(f5Q,eDR)
var bER=_o(443,e,s,gg)
var oFR=_gd(x[83],bER,e_,d_)
if(oFR){
var xGR=_1(442,e,s,gg) || {}
var cur_globalf=gg.f
eDR.wxXCkey=3
oFR(xGR,xGR,eDR,gg)
gg.f=cur_globalf
}
else _w(bER,x[83],43,26)
}
else{f5Q.wxVkey=3
}
f5Q.wxXCkey=1
_(r,o4Q)
x3Q.pop()
return r
}
e_[x[83]]={f:m79,j:[],i:[],ti:[x[17]],ic:[]}
d_[x[84]]={}
var m80=function(e,s,r,gg){
var fIR=_v()
_(r,fIR)
if(_o(444,e,s,gg)){fIR.wxVkey=1
}
fIR.wxXCkey=1
return r
}
e_[x[84]]={f:m80,j:[],i:[],ti:[],ic:[]}
d_[x[85]]={}
var m81=function(e,s,r,gg){
var hKR=e_[x[85]].i
_ai(hKR,x[17],e_,x[85],1,1)
var oLR=_v()
_(r,oLR)
var cMR=_o(446,e,s,gg)
var oNR=_gd(x[85],cMR,e_,d_)
if(oNR){
var lOR=_1(445,e,s,gg) || {}
var cur_globalf=gg.f
oLR.wxXCkey=3
oNR(lOR,lOR,oLR,gg)
gg.f=cur_globalf
}
else _w(cMR,x[85],14,22)
hKR.pop()
return r
}
e_[x[85]]={f:m81,j:[],i:[],ti:[x[17]],ic:[]}
d_[x[86]]={}
var m82=function(e,s,r,gg){
return r
}
e_[x[86]]={f:m82,j:[],i:[],ti:[],ic:[]}
d_[x[87]]={}
var m83=function(e,s,r,gg){
return r
}
e_[x[87]]={f:m83,j:[],i:[],ti:[],ic:[]}
d_[x[88]]={}
d_[x[88]]["wxParseVideo"]=function(e,s,r,gg){
var b=x[88]+':wxParseVideo'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[88]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[88]]["wxParseImg"]=function(e,s,r,gg){
var b=x[88]+':wxParseImg'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[88]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[88]]["WxEmojiView"]=function(e,s,r,gg){
var b=x[88]+':WxEmojiView'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[88]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[88]]["wxParse"]=function(e,s,r,gg){
var b=x[88]+':wxParse'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[88]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
var cI=_o(454,fE,oD,gg)
var oJ=_gd(x[88],cI,e_,d_)
if(oJ){
var lK=_1(453,fE,oD,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[88],40,22)
return cF
}
oB.wxXCkey=2
_2(451,xC,e,s,gg,oB,'item','index','')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[88]]["wxParse0"]=function(e,s,r,gg){
var b=x[88]+':wxParse0'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[88]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_o(456,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_o(457,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_o(462,hG,cF,gg)
var aL=_gd(x[88],lK,e_,d_)
if(aL){
var tM=_1(461,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[88],53,34)
return oH
}
oD.wxXCkey=2
_2(459,fE,e,s,gg,oD,'item','index','')
}
else if(_o(463,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_o(468,xQ,oP,gg)
var oV=_gd(x[88],hU,e_,d_)
if(oV){
var cW=_1(467,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[88],66,42)
return oR
}
eN.wxXCkey=2
_2(465,bO,e,s,gg,eN,'item','index','')
}
else if(_o(469,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_o(471,e,s,gg)
var aZ=_gd(x[88],lY,e_,d_)
if(aZ){
var t1=_1(470,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[88],75,26)
}
else if(_o(472,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_o(474,e,s,gg)
var o4=_gd(x[88],b3,e_,d_)
if(o4){
var x5=_1(473,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[88],80,26)
}
else if(_o(475,e,s,gg)){xC.wxVkey=5
var o6=_m('view',['bindtap',476,'class',1,'data-c',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_o(484,o0,h9,gg)
var tEB=_gd(x[88],aDB,e_,d_)
if(tEB){
var eFB=_1(483,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[88],87,34)
return cAB
}
f7.wxXCkey=2
_2(481,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_o(485,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_o(490,oJB,xIB,gg)
var cOB=_gd(x[88],oNB,e_,d_)
if(cOB){
var oPB=_1(489,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[88],94,34)
return fKB
}
bGB.wxXCkey=2
_2(487,oHB,e,s,gg,bGB,'item','index','')
}
else if(_o(491,e,s,gg)){xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_o(496,eTB,tSB,gg)
var fYB=_gd(x[88],oXB,e_,d_)
if(fYB){
var cZB=_1(495,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[88],103,34)
return bUB
}
lQB.wxXCkey=2
_2(493,aRB,e,s,gg,lQB,'item','index','')
}
else{xC.wxVkey=8
var h1B=_v()
_(xC,h1B)
var o2B=function(o4B,c3B,l5B,gg){
var t7B=_v()
_(l5B,t7B)
var e8B=_o(501,o4B,c3B,gg)
var b9B=_gd(x[88],e8B,e_,d_)
if(b9B){
var o0B=_1(500,o4B,c3B,gg) || {}
var cur_globalf=gg.f
t7B.wxXCkey=3
b9B(o0B,o0B,t7B,gg)
gg.f=cur_globalf
}
else _w(e8B,x[88],111,30)
return l5B
}
h1B.wxXCkey=2
_2(498,o2B,e,s,gg,h1B,'item','index','')
}
xC.wxXCkey=1
}
else if(_o(502,e,s,gg)){oB.wxVkey=2
var xAC=_v()
_(oB,xAC)
var oBC=_o(504,e,s,gg)
var fCC=_gd(x[88],oBC,e_,d_)
if(fCC){
var cDC=_1(503,e,s,gg) || {}
var cur_globalf=gg.f
xAC.wxXCkey=3
fCC(cDC,cDC,xAC,gg)
gg.f=cur_globalf
}
else _w(oBC,x[88],120,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[88]]["wxParse1"]=function(e,s,r,gg){
var b=x[88]+':wxParse1'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[88]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_o(506,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_o(507,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_o(512,hG,cF,gg)
var aL=_gd(x[88],lK,e_,d_)
if(aL){
var tM=_1(511,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[88],135,34)
return oH
}
oD.wxXCkey=2
_2(509,fE,e,s,gg,oD,'item','index','')
}
else if(_o(513,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_o(518,xQ,oP,gg)
var oV=_gd(x[88],hU,e_,d_)
if(oV){
var cW=_1(517,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[88],148,42)
return oR
}
eN.wxXCkey=2
_2(515,bO,e,s,gg,eN,'item','index','')
}
else if(_o(519,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_o(521,e,s,gg)
var aZ=_gd(x[88],lY,e_,d_)
if(aZ){
var t1=_1(520,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[88],157,26)
}
else if(_o(522,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_o(524,e,s,gg)
var o4=_gd(x[88],b3,e_,d_)
if(o4){
var x5=_1(523,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[88],162,26)
}
else if(_o(525,e,s,gg)){xC.wxVkey=5
var o6=_m('view',['bindtap',526,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_o(534,o0,h9,gg)
var tEB=_gd(x[88],aDB,e_,d_)
if(tEB){
var eFB=_1(533,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[88],169,34)
return cAB
}
f7.wxXCkey=2
_2(531,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_o(535,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_o(540,oJB,xIB,gg)
var cOB=_gd(x[88],oNB,e_,d_)
if(cOB){
var oPB=_1(539,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[88],178,34)
return fKB
}
bGB.wxXCkey=2
_2(537,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_o(545,eTB,tSB,gg)
var fYB=_gd(x[88],oXB,e_,d_)
if(fYB){
var cZB=_1(544,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[88],186,30)
return bUB
}
lQB.wxXCkey=2
_2(542,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_o(546,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_o(548,e,s,gg)
var c3B=_gd(x[88],o2B,e_,d_)
if(c3B){
var o4B=_1(547,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[88],195,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[88]]["wxParse2"]=function(e,s,r,gg){
var b=x[88]+':wxParse2'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[88]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_o(550,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_o(551,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_o(556,hG,cF,gg)
var aL=_gd(x[88],lK,e_,d_)
if(aL){
var tM=_1(555,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[88],209,34)
return oH
}
oD.wxXCkey=2
_2(553,fE,e,s,gg,oD,'item','index','')
}
else if(_o(557,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_o(562,xQ,oP,gg)
var oV=_gd(x[88],hU,e_,d_)
if(oV){
var cW=_1(561,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[88],222,42)
return oR
}
eN.wxXCkey=2
_2(559,bO,e,s,gg,eN,'item','index','')
}
else if(_o(563,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_o(565,e,s,gg)
var aZ=_gd(x[88],lY,e_,d_)
if(aZ){
var t1=_1(564,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[88],231,26)
}
else if(_o(566,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_o(568,e,s,gg)
var o4=_gd(x[88],b3,e_,d_)
if(o4){
var x5=_1(567,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[88],236,26)
}
else if(_o(569,e,s,gg)){xC.wxVkey=5
var o6=_m('view',['bindtap',570,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_o(578,o0,h9,gg)
var tEB=_gd(x[88],aDB,e_,d_)
if(tEB){
var eFB=_1(577,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[88],243,34)
return cAB
}
f7.wxXCkey=2
_2(575,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_o(579,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_o(584,oJB,xIB,gg)
var cOB=_gd(x[88],oNB,e_,d_)
if(cOB){
var oPB=_1(583,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[88],252,34)
return fKB
}
bGB.wxXCkey=2
_2(581,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_o(589,eTB,tSB,gg)
var fYB=_gd(x[88],oXB,e_,d_)
if(fYB){
var cZB=_1(588,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[88],260,30)
return bUB
}
lQB.wxXCkey=2
_2(586,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_o(590,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_o(592,e,s,gg)
var c3B=_gd(x[88],o2B,e_,d_)
if(c3B){
var o4B=_1(591,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[88],269,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[88]]["wxParse3"]=function(e,s,r,gg){
var b=x[88]+':wxParse3'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[88]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_o(594,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_o(595,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_o(600,hG,cF,gg)
var aL=_gd(x[88],lK,e_,d_)
if(aL){
var tM=_1(599,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[88],282,34)
return oH
}
oD.wxXCkey=2
_2(597,fE,e,s,gg,oD,'item','index','')
}
else if(_o(601,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_o(606,xQ,oP,gg)
var oV=_gd(x[88],hU,e_,d_)
if(oV){
var cW=_1(605,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[88],295,42)
return oR
}
eN.wxXCkey=2
_2(603,bO,e,s,gg,eN,'item','index','')
}
else if(_o(607,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_o(609,e,s,gg)
var aZ=_gd(x[88],lY,e_,d_)
if(aZ){
var t1=_1(608,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[88],304,26)
}
else if(_o(610,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_o(612,e,s,gg)
var o4=_gd(x[88],b3,e_,d_)
if(o4){
var x5=_1(611,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[88],309,26)
}
else if(_o(613,e,s,gg)){xC.wxVkey=5
var o6=_m('view',['bindtap',614,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_o(622,o0,h9,gg)
var tEB=_gd(x[88],aDB,e_,d_)
if(tEB){
var eFB=_1(621,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[88],316,34)
return cAB
}
f7.wxXCkey=2
_2(619,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_o(623,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_o(628,oJB,xIB,gg)
var cOB=_gd(x[88],oNB,e_,d_)
if(cOB){
var oPB=_1(627,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[88],325,34)
return fKB
}
bGB.wxXCkey=2
_2(625,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_o(633,eTB,tSB,gg)
var fYB=_gd(x[88],oXB,e_,d_)
if(fYB){
var cZB=_1(632,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[88],333,30)
return bUB
}
lQB.wxXCkey=2
_2(630,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_o(634,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_o(636,e,s,gg)
var c3B=_gd(x[88],o2B,e_,d_)
if(c3B){
var o4B=_1(635,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[88],342,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[88]]["wxParse4"]=function(e,s,r,gg){
var b=x[88]+':wxParse4'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[88]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_o(638,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_o(639,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_o(644,hG,cF,gg)
var aL=_gd(x[88],lK,e_,d_)
if(aL){
var tM=_1(643,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[88],355,34)
return oH
}
oD.wxXCkey=2
_2(641,fE,e,s,gg,oD,'item','index','')
}
else if(_o(645,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_o(650,xQ,oP,gg)
var oV=_gd(x[88],hU,e_,d_)
if(oV){
var cW=_1(649,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[88],368,42)
return oR
}
eN.wxXCkey=2
_2(647,bO,e,s,gg,eN,'item','index','')
}
else if(_o(651,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_o(653,e,s,gg)
var aZ=_gd(x[88],lY,e_,d_)
if(aZ){
var t1=_1(652,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[88],377,26)
}
else if(_o(654,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_o(656,e,s,gg)
var o4=_gd(x[88],b3,e_,d_)
if(o4){
var x5=_1(655,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[88],382,26)
}
else if(_o(657,e,s,gg)){xC.wxVkey=5
var o6=_m('view',['bindtap',658,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_o(666,o0,h9,gg)
var tEB=_gd(x[88],aDB,e_,d_)
if(tEB){
var eFB=_1(665,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[88],389,34)
return cAB
}
f7.wxXCkey=2
_2(663,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_o(667,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_o(672,oJB,xIB,gg)
var cOB=_gd(x[88],oNB,e_,d_)
if(cOB){
var oPB=_1(671,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[88],398,34)
return fKB
}
bGB.wxXCkey=2
_2(669,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_o(677,eTB,tSB,gg)
var fYB=_gd(x[88],oXB,e_,d_)
if(fYB){
var cZB=_1(676,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[88],406,30)
return bUB
}
lQB.wxXCkey=2
_2(674,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_o(678,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_o(680,e,s,gg)
var c3B=_gd(x[88],o2B,e_,d_)
if(c3B){
var o4B=_1(679,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[88],415,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[88]]["wxParse5"]=function(e,s,r,gg){
var b=x[88]+':wxParse5'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[88]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_o(682,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_o(683,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_o(688,hG,cF,gg)
var aL=_gd(x[88],lK,e_,d_)
if(aL){
var tM=_1(687,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[88],428,34)
return oH
}
oD.wxXCkey=2
_2(685,fE,e,s,gg,oD,'item','index','')
}
else if(_o(689,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_o(694,xQ,oP,gg)
var oV=_gd(x[88],hU,e_,d_)
if(oV){
var cW=_1(693,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[88],441,42)
return oR
}
eN.wxXCkey=2
_2(691,bO,e,s,gg,eN,'item','index','')
}
else if(_o(695,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_o(697,e,s,gg)
var aZ=_gd(x[88],lY,e_,d_)
if(aZ){
var t1=_1(696,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[88],450,26)
}
else if(_o(698,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_o(700,e,s,gg)
var o4=_gd(x[88],b3,e_,d_)
if(o4){
var x5=_1(699,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[88],455,26)
}
else if(_o(701,e,s,gg)){xC.wxVkey=5
var o6=_m('view',['bindtap',702,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_o(710,o0,h9,gg)
var tEB=_gd(x[88],aDB,e_,d_)
if(tEB){
var eFB=_1(709,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[88],462,34)
return cAB
}
f7.wxXCkey=2
_2(707,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_o(711,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_o(716,oJB,xIB,gg)
var cOB=_gd(x[88],oNB,e_,d_)
if(cOB){
var oPB=_1(715,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[88],471,34)
return fKB
}
bGB.wxXCkey=2
_2(713,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_o(721,eTB,tSB,gg)
var fYB=_gd(x[88],oXB,e_,d_)
if(fYB){
var cZB=_1(720,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[88],479,30)
return bUB
}
lQB.wxXCkey=2
_2(718,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_o(722,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_o(724,e,s,gg)
var c3B=_gd(x[88],o2B,e_,d_)
if(c3B){
var o4B=_1(723,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[88],488,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[88]]["wxParse6"]=function(e,s,r,gg){
var b=x[88]+':wxParse6'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[88]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_o(726,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_o(727,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_o(732,hG,cF,gg)
var aL=_gd(x[88],lK,e_,d_)
if(aL){
var tM=_1(731,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[88],501,34)
return oH
}
oD.wxXCkey=2
_2(729,fE,e,s,gg,oD,'item','index','')
}
else if(_o(733,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_o(738,xQ,oP,gg)
var oV=_gd(x[88],hU,e_,d_)
if(oV){
var cW=_1(737,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[88],514,42)
return oR
}
eN.wxXCkey=2
_2(735,bO,e,s,gg,eN,'item','index','')
}
else if(_o(739,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_o(741,e,s,gg)
var aZ=_gd(x[88],lY,e_,d_)
if(aZ){
var t1=_1(740,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[88],523,26)
}
else if(_o(742,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_o(744,e,s,gg)
var o4=_gd(x[88],b3,e_,d_)
if(o4){
var x5=_1(743,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[88],528,26)
}
else if(_o(745,e,s,gg)){xC.wxVkey=5
var o6=_m('view',['bindtap',746,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_o(754,o0,h9,gg)
var tEB=_gd(x[88],aDB,e_,d_)
if(tEB){
var eFB=_1(753,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[88],535,34)
return cAB
}
f7.wxXCkey=2
_2(751,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_o(755,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_o(760,oJB,xIB,gg)
var cOB=_gd(x[88],oNB,e_,d_)
if(cOB){
var oPB=_1(759,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[88],544,34)
return fKB
}
bGB.wxXCkey=2
_2(757,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_o(765,eTB,tSB,gg)
var fYB=_gd(x[88],oXB,e_,d_)
if(fYB){
var cZB=_1(764,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[88],552,30)
return bUB
}
lQB.wxXCkey=2
_2(762,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_o(766,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_o(768,e,s,gg)
var c3B=_gd(x[88],o2B,e_,d_)
if(c3B){
var o4B=_1(767,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[88],561,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[88]]["wxParse7"]=function(e,s,r,gg){
var b=x[88]+':wxParse7'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[88]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_o(770,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_o(771,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_o(776,hG,cF,gg)
var aL=_gd(x[88],lK,e_,d_)
if(aL){
var tM=_1(775,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[88],573,34)
return oH
}
oD.wxXCkey=2
_2(773,fE,e,s,gg,oD,'item','index','')
}
else if(_o(777,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_o(782,xQ,oP,gg)
var oV=_gd(x[88],hU,e_,d_)
if(oV){
var cW=_1(781,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[88],586,42)
return oR
}
eN.wxXCkey=2
_2(779,bO,e,s,gg,eN,'item','index','')
}
else if(_o(783,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_o(785,e,s,gg)
var aZ=_gd(x[88],lY,e_,d_)
if(aZ){
var t1=_1(784,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[88],595,26)
}
else if(_o(786,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_o(788,e,s,gg)
var o4=_gd(x[88],b3,e_,d_)
if(o4){
var x5=_1(787,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[88],600,26)
}
else if(_o(789,e,s,gg)){xC.wxVkey=5
var o6=_m('view',['bindtap',790,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_o(798,o0,h9,gg)
var tEB=_gd(x[88],aDB,e_,d_)
if(tEB){
var eFB=_1(797,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[88],607,34)
return cAB
}
f7.wxXCkey=2
_2(795,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_o(799,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_o(804,oJB,xIB,gg)
var cOB=_gd(x[88],oNB,e_,d_)
if(cOB){
var oPB=_1(803,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[88],616,34)
return fKB
}
bGB.wxXCkey=2
_2(801,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_o(809,eTB,tSB,gg)
var fYB=_gd(x[88],oXB,e_,d_)
if(fYB){
var cZB=_1(808,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[88],624,30)
return bUB
}
lQB.wxXCkey=2
_2(806,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_o(810,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_o(812,e,s,gg)
var c3B=_gd(x[88],o2B,e_,d_)
if(c3B){
var o4B=_1(811,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[88],633,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[88]]["wxParse8"]=function(e,s,r,gg){
var b=x[88]+':wxParse8'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[88]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_o(814,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_o(815,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_o(820,hG,cF,gg)
var aL=_gd(x[88],lK,e_,d_)
if(aL){
var tM=_1(819,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[88],646,34)
return oH
}
oD.wxXCkey=2
_2(817,fE,e,s,gg,oD,'item','index','')
}
else if(_o(821,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_o(826,xQ,oP,gg)
var oV=_gd(x[88],hU,e_,d_)
if(oV){
var cW=_1(825,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[88],659,42)
return oR
}
eN.wxXCkey=2
_2(823,bO,e,s,gg,eN,'item','index','')
}
else if(_o(827,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_o(829,e,s,gg)
var aZ=_gd(x[88],lY,e_,d_)
if(aZ){
var t1=_1(828,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[88],668,26)
}
else if(_o(830,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_o(832,e,s,gg)
var o4=_gd(x[88],b3,e_,d_)
if(o4){
var x5=_1(831,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[88],673,26)
}
else if(_o(833,e,s,gg)){xC.wxVkey=5
var o6=_m('view',['bindtap',834,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_o(842,o0,h9,gg)
var tEB=_gd(x[88],aDB,e_,d_)
if(tEB){
var eFB=_1(841,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[88],680,34)
return cAB
}
f7.wxXCkey=2
_2(839,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_o(843,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_o(848,oJB,xIB,gg)
var cOB=_gd(x[88],oNB,e_,d_)
if(cOB){
var oPB=_1(847,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[88],689,34)
return fKB
}
bGB.wxXCkey=2
_2(845,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_o(853,eTB,tSB,gg)
var fYB=_gd(x[88],oXB,e_,d_)
if(fYB){
var cZB=_1(852,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[88],697,30)
return bUB
}
lQB.wxXCkey=2
_2(850,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_o(854,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_o(856,e,s,gg)
var c3B=_gd(x[88],o2B,e_,d_)
if(c3B){
var o4B=_1(855,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[88],706,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[88]]["wxParse9"]=function(e,s,r,gg){
var b=x[88]+':wxParse9'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[88]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_o(858,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_o(859,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_o(864,hG,cF,gg)
var aL=_gd(x[88],lK,e_,d_)
if(aL){
var tM=_1(863,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[88],719,34)
return oH
}
oD.wxXCkey=2
_2(861,fE,e,s,gg,oD,'item','index','')
}
else if(_o(865,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_o(870,xQ,oP,gg)
var oV=_gd(x[88],hU,e_,d_)
if(oV){
var cW=_1(869,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[88],732,42)
return oR
}
eN.wxXCkey=2
_2(867,bO,e,s,gg,eN,'item','index','')
}
else if(_o(871,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_o(873,e,s,gg)
var aZ=_gd(x[88],lY,e_,d_)
if(aZ){
var t1=_1(872,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[88],741,26)
}
else if(_o(874,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_o(876,e,s,gg)
var o4=_gd(x[88],b3,e_,d_)
if(o4){
var x5=_1(875,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[88],746,26)
}
else if(_o(877,e,s,gg)){xC.wxVkey=5
var o6=_m('view',['bindtap',878,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_o(886,o0,h9,gg)
var tEB=_gd(x[88],aDB,e_,d_)
if(tEB){
var eFB=_1(885,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[88],753,34)
return cAB
}
f7.wxXCkey=2
_2(883,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_o(887,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_o(892,oJB,xIB,gg)
var cOB=_gd(x[88],oNB,e_,d_)
if(cOB){
var oPB=_1(891,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[88],762,34)
return fKB
}
bGB.wxXCkey=2
_2(889,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_o(897,eTB,tSB,gg)
var fYB=_gd(x[88],oXB,e_,d_)
if(fYB){
var cZB=_1(896,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[88],770,30)
return bUB
}
lQB.wxXCkey=2
_2(894,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_o(898,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_o(900,e,s,gg)
var c3B=_gd(x[88],o2B,e_,d_)
if(c3B){
var o4B=_1(899,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[88],779,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[88]]["wxParse10"]=function(e,s,r,gg){
var b=x[88]+':wxParse10'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[88]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_o(902,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_o(903,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_o(908,hG,cF,gg)
var aL=_gd(x[88],lK,e_,d_)
if(aL){
var tM=_1(907,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[88],792,34)
return oH
}
oD.wxXCkey=2
_2(905,fE,e,s,gg,oD,'item','index','')
}
else if(_o(909,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_o(914,xQ,oP,gg)
var oV=_gd(x[88],hU,e_,d_)
if(oV){
var cW=_1(913,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[88],805,42)
return oR
}
eN.wxXCkey=2
_2(911,bO,e,s,gg,eN,'item','index','')
}
else if(_o(915,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_o(917,e,s,gg)
var aZ=_gd(x[88],lY,e_,d_)
if(aZ){
var t1=_1(916,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[88],814,26)
}
else if(_o(918,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_o(920,e,s,gg)
var o4=_gd(x[88],b3,e_,d_)
if(o4){
var x5=_1(919,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[88],819,26)
}
else if(_o(921,e,s,gg)){xC.wxVkey=5
var o6=_m('view',['bindtap',922,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_o(930,o0,h9,gg)
var tEB=_gd(x[88],aDB,e_,d_)
if(tEB){
var eFB=_1(929,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[88],826,34)
return cAB
}
f7.wxXCkey=2
_2(927,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_o(931,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_o(936,oJB,xIB,gg)
var cOB=_gd(x[88],oNB,e_,d_)
if(cOB){
var oPB=_1(935,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[88],835,34)
return fKB
}
bGB.wxXCkey=2
_2(933,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_o(941,eTB,tSB,gg)
var fYB=_gd(x[88],oXB,e_,d_)
if(fYB){
var cZB=_1(940,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[88],843,30)
return bUB
}
lQB.wxXCkey=2
_2(938,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_o(942,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_o(944,e,s,gg)
var c3B=_gd(x[88],o2B,e_,d_)
if(c3B){
var o4B=_1(943,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[88],852,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[88]]["wxParse11"]=function(e,s,r,gg){
var b=x[88]+':wxParse11'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[88]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_o(946,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_o(947,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_o(952,hG,cF,gg)
var aL=_gd(x[88],lK,e_,d_)
if(aL){
var tM=_1(951,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[88],865,34)
return oH
}
oD.wxXCkey=2
_2(949,fE,e,s,gg,oD,'item','index','')
}
else if(_o(953,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_o(958,xQ,oP,gg)
var oV=_gd(x[88],hU,e_,d_)
if(oV){
var cW=_1(957,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[88],878,42)
return oR
}
eN.wxXCkey=2
_2(955,bO,e,s,gg,eN,'item','index','')
}
else if(_o(959,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_o(961,e,s,gg)
var aZ=_gd(x[88],lY,e_,d_)
if(aZ){
var t1=_1(960,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[88],887,26)
}
else if(_o(962,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_o(964,e,s,gg)
var o4=_gd(x[88],b3,e_,d_)
if(o4){
var x5=_1(963,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[88],892,26)
}
else if(_o(965,e,s,gg)){xC.wxVkey=5
var o6=_m('view',['bindtap',966,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_o(974,o0,h9,gg)
var tEB=_gd(x[88],aDB,e_,d_)
if(tEB){
var eFB=_1(973,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[88],899,34)
return cAB
}
f7.wxXCkey=2
_2(971,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_o(975,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_o(980,oJB,xIB,gg)
var cOB=_gd(x[88],oNB,e_,d_)
if(cOB){
var oPB=_1(979,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[88],908,34)
return fKB
}
bGB.wxXCkey=2
_2(977,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_o(985,eTB,tSB,gg)
var fYB=_gd(x[88],oXB,e_,d_)
if(fYB){
var cZB=_1(984,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[88],916,30)
return bUB
}
lQB.wxXCkey=2
_2(982,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_o(986,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_o(988,e,s,gg)
var c3B=_gd(x[88],o2B,e_,d_)
if(c3B){
var o4B=_1(987,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[88],925,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m84=function(e,s,r,gg){
return r
}
e_[x[88]]={f:m84,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['pages/self/cart2/cart.json'] = {"navigationBarTitleText":"购物车","usingComponents":{"component-tag-name":"./component/c-product-list-1/c-product-list-1"}};
		__wxAppCode__['pages/self/cart2/cart.wxml'] = $gwx( './pages/self/cart2/cart.wxml' );
		__wxAppCode__['pages/self/cart2/component/c-product-list-1/c-product-list-1.json'] = {
    "component": true
};
		__wxAppCode__['pages/self/cart2/component/c-product-list-1/c-product-list-1.wxml'] = $gwx( './pages/self/cart2/component/c-product-list-1/c-product-list-1.wxml' );
	
	define("data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e={},a=require("theme-config.js");e.styleConfig=a.blue_new,e.isPerson=!1,e.setting={name:"大理装饰装修",autoId:"60279",hasWxPay:!0,wxAppId:"wx0a49ecb2be1e930b",secret:"43d1b1c2cb44846a99e3931bab69e3da",comUrl:"https://mg.vzmapp.com",payUrl:"https://pay-gw.vzmapp.com"},e.dataInfo={appId:"2c92cf4e646bd17301646e4ac8ab3f46",theme:{name:"blue_new",mainColor:"#80B8F9",foregroundColor:"white",mainColorHighlight:"#91C2F8",mainRGB:{r:128,g:184,b:249},tabSelectIconKey:"tab_blue_new",navigationBarTextStyle:"white",backgroundTextStyle:"dark",remark:"通用蓝色风格2"},projectType:"o2o",homePageLayout:"1",version:"1.0.0",versionDesc:"",ext:{},projectIcon:"http://img1.vzmapp.com/TabIconLib/icon-wip-app-011.png",projectName:"大理装饰装修",PCStatus:"2",customizeTabsList:[{id:"2c92cf4e646bd17301646e4ac8f03f82",sysTabName:"Home-Page",sysTabNameTag:"LynxHomePage",pcModule:"Home-Page",iconURL:"http://img1.vzmapp.com/uploadPic/2017/03/21/20170321050615068.png",folder:"HomePage",tabTitle:"首页"},{id:"2c92cf4e646bd17301646e4acb0840cc",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"PCAdevertising",pcModule:"HOMEPAGE_TOP",iconURL:"http://img1.vzmapp.com/TabIconLib/orange/icon-0021.png",folder:"PhotoInfoTabLevel1",tabTitle:"PC首页顶部广告"},{id:"2c92cf4e646bd17301646e4ac8b73f4f",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"PCAdevertising",pcModule:"HOMEPAGE_MIDDLE",iconURL:"http://img1.vzmapp.com/TabIconLib/orange/icon-0021.png",folder:"PhotoInfoTabLevel1",tabTitle:"PC首页中部广告"},{id:"2c92cf4e646bd17301646e4acaf640c7",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"PCAdevertising",pcModule:"HOMEPAGE_BOTTOM",iconURL:"http://img1.vzmapp.com/TabIconLib/orange/icon-0021.png",folder:"PhotoInfoTabLevel1",tabTitle:"PC首页底部广告"},{id:"2c92cf4e646bd17301646e4ac8e73f70",sysTabName:"Product-Level3",sysTabNameTag:"LynxProductList",pcModule:"Product-Level3",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316111344393.png",folder:"ProductLevel3",tabTitle:"全部商品"},{id:"2c92cf4e646bd17301646e4ac9023fa0",sysTabName:"Branches-Enquiry",sysTabNameTag:"LynxAbout_Merchant",pcModule:"Branches-Enquiry",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316111344394.png",folder:"BranchesEnquiry",tabTitle:"品牌店铺"},{id:"2c92cf4e646bd17301646e4acb1340cf",sysTabName:"Activity-Distribution",sysTabNameTag:"",pcModule:"Activity-Distribution",iconURL:"http://img1.vzmapp.com/uploadPic/2018/06/28/20180628114650652.png",folder:"ActivityDistribution",tabTitle:"全员分销"},{id:"2c92cf4e646bd17301646e4acb0740cb",sysTabName:"Activity-Group",sysTabNameTag:"",pcModule:"Activity-Group",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316111344433.png",folder:"ActivityGroup",tabTitle:"拼团"},{id:"2c92cf4e646bd17301646e4ac8b63f4e",sysTabName:"Activity-Kill",sysTabNameTag:"",pcModule:"Activity-Kill",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316111344431.png",folder:"ActivityKill",tabTitle:"秒杀"},{id:"2c92cf4e646bd17301646e4acadc40ad",sysTabName:"Photo-Info-Tab-Level2",sysTabNameTag:"",pcModule:"Photo-Info-Tab-Level2",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316111344459.png",folder:"PhotoInfoTabLevel2",tabTitle:"资讯动态"},{id:"2c92cf4e646bd17301646e4ac8f63f8a",sysTabName:"Photo-Info-Tab-Level2",sysTabNameTag:"LynxPhoto_H_Info_Tab_Level2",pcModule:"Photo-Info-Tab-Level2",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316111344448.png",folder:"PhotoInfoTabLevel2",tabTitle:"建材资讯"},{id:"2c92cf4e646bd17301646e4acafc40c8",sysTabName:"Activity",sysTabNameTag:"",pcModule:"Activity",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316111344447.png",folder:"Activity",tabTitle:"优惠券"},{id:"2c92cf4e646bd17301646e4ac8e23f6c",sysTabName:"About-Merchant",sysTabNameTag:"LynxApplyFor_About_Merchant",pcModule:"About-Merchant",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316111344438.png",folder:"AboutMerchant",tabTitle:"商家入驻"},{id:"2c92cf4e646bd17301646e4ac8d13f5b",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"LynxPhoto_Info_Post_Tab",pcModule:"Photo-Info-Tab-Level1",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316111344407.png",folder:"PhotoInfoTabLevel1",tabTitle:"供/求信息"},{id:"2c92cf4e646bd17301646e4ac8e43f6e",sysTabName:"Video-Gallery",sysTabNameTag:"Video_Gallery",pcModule:"Video-Gallery",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316111344440.png",folder:"VideoGallery",tabTitle:"企业宣传"},{id:"2c92cf4e646bd17301646e4acacb409f",sysTabName:"Flexi-Form",sysTabNameTag:"",pcModule:"Flexi-Form",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316111344406.png",folder:"FlexiForm",tabTitle:"定制服务"},{id:"2c92cf4e646bd17301646e4acad540aa",sysTabName:"Online-Chat",sysTabNameTag:"",pcModule:"Online-Chat",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316111344424.png",folder:"OnlineChat",tabTitle:"在线客服"},{id:"2c92cf4e646bd17301646e4ac8df3f6a",sysTabName:"About-Merchant",sysTabNameTag:"",pcModule:"About-Merchant",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316111344419.png",folder:"AboutMerchant",tabTitle:"关于我们"},{id:"2c92cf4e646bd17301646e4ac8ad3f47",sysTabName:"CardNo",sysTabNameTag:"",pcModule:"",iconURL:"http://img1.vzmapp.com/uploadPic/2018/05/09/20180509094946241.png",folder:"CardNo",tabTitle:"电子会员卡"},{id:"2c92cf4e646bd17301646e4ac8bc3f50",sysTabName:"Flexi-Form",sysTabNameTag:"Flexi-Form-Booking",pcModule:"Flexi-Form-Booking",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0010.png",folder:"FlexiForm",tabTitle:"预约信息"},{id:"2c92cf4e646bd17301646e4acab9409d",sysTabName:"Member",sysTabNameTag:"",pcModule:"Member",iconURL:"http://img1.vzmapp.com/TabIconLib/orange/icon-0003.png",folder:"Member",tabTitle:"会员中心"},{id:"2c92cf4e646bd17301646e4ac8ef3f81",sysTabName:"Product-Order",sysTabNameTag:"ZXMarketModuleOrder",pcModule:"Product-Order",iconURL:"http://img1.vzmapp.com/TabIconLib/green/icon-0028.png",folder:"ProductOrder",tabTitle:"订单列表"},{id:"2c92cf4e646bd17301646e4ac8bf3f51",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"PCAdevertising_top",pcModule:"Photo-Info-Tab-Level1",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0021.png",folder:"PhotoInfoTabLevel1",tabTitle:"顶部广告"},{id:"2c92cf4e646bd17301646e4acb0040c9",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"PCAdevertising_activity",pcModule:"Photo-Info-Tab-Level1",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0021.png",folder:"PhotoInfoTabLevel1",tabTitle:"优惠券广告"},{id:"2c92cf4e646bd17301646e4ac8cc3f55",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"LynxAdvertisingH_Photo_Info_Tab_Level1",pcModule:"Photo-Info-Tab-Level1",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0052.png",folder:"PhotoInfoTabLevel1",tabTitle:"资讯广告"},{id:"2c92cf4e646bd17301646e4ac8c33f53",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"PCAdevertising_mid",pcModule:"Photo-Info-Tab-Level1",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0021.png",folder:"PhotoInfoTabLevel1",tabTitle:"中部广告"},{id:"2c92cf4e646bd17301646e4ac8c83f54",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"PCAdevertising_btm",pcModule:"Photo-Info-Tab-Level1",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0021.png",folder:"PhotoInfoTabLevel1",tabTitle:"底部广告"},{id:"2c92cf4e646bd17301646e4acaf540c6",sysTabName:"taoShangChengFT",sysTabNameTag:"",pcModule:"taoShangChengFT",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0002.png",folder:"taoShangChengFT",tabTitle:"运费模板"},{id:"2c92cf4e646bd17301646e4acad040a7",sysTabName:"Circle",sysTabNameTag:"",pcModule:"Circle",iconURL:"http://img1.vzmapp.com/TabIconLib/green/icon-0005.png",folder:"Circle",tabTitle:"朋友圈"},{id:"2c92cf4e646bd17301646e4acaf240c4",sysTabName:"Share",sysTabNameTag:"",pcModule:"Share",iconURL:"http://img1.vzmapp.com/TabIconLib/orange/icon-0036.png",folder:"Share",tabTitle:"二维码分享"},{id:"2c92cf4e646bd17301646e4acb1140ce",sysTabName:"About-Merchant",sysTabNameTag:"SQ_CallMe",pcModule:"PC",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0055.png",folder:"AboutMerchant",tabTitle:"PC配置"},{id:"2c92cf4e646bd17301646e4acacf40a6",sysTabName:"LongPush",sysTabNameTag:"",pcModule:"LongPush",iconURL:"http://img1.vzmapp.com/TabIconLib/blue/icon-0029.png",folder:"LongPush",tabTitle:"信息中心"},{id:"2c92cf4e646bd17301646e4acaef40c3",sysTabName:"Photo-Gallery",sysTabNameTag:"",pcModule:"Photo-Gallery",iconURL:"http://img1.vzmapp.com/TabIconLib/blue/icon-0035.png",folder:"PhotoGallery",tabTitle:"中心认证"},{id:"2c92cf4e646bd17301646e4ac8da3f68",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"LynxcLink_Web_Info_Tab",pcModule:"Photo-Info-Tab-Level1",iconURL:"http://img1.vzmapp.com/TabIconLib/red/icon-0025.png",folder:"PhotoInfoTabLevel1",tabTitle:"便民服务"},{id:"2c92cf4e646bd17301646e4ac8d73f66",sysTabName:"User-Feedback",sysTabNameTag:"",pcModule:"User-Feedback",iconURL:"http://img1.vzmapp.com/TabIconLib/blue/icon-0059.png",folder:"UserFeedback",tabTitle:"留言反馈"},{id:"2c92cf4e646bd17301646e4acaf340c5",sysTabName:"Lynxforum",sysTabNameTag:"",pcModule:"Lynxforum",iconURL:"http://img1.vzmapp.com/TabIconLib/red/icon-0030.png",folder:"Lynxforum",tabTitle:"论坛"},{id:"2c92cf4e646bd17301646e4acad140a8",sysTabName:"About-Team",sysTabNameTag:"",pcModule:"About-Team",iconURL:"http://img1.vzmapp.com/TabIconLib/red/icon-0055.png",folder:"AboutTeam",tabTitle:"联系我们"},{id:"2c92cf4e646bd17301646e4acad840ac",sysTabName:"Roulette-Lottery",sysTabNameTag:"",pcModule:"Roulette-Lottery",iconURL:"http://img1.vzmapp.com/TabIconLib/orange/icon-0034.png",folder:"RouletteLottery",tabTitle:"抽奖活动"},{id:"2c92cf4e646bd17301646e4acb0e40cd",sysTabName:"About-Merchant",sysTabNameTag:"About-APP",pcModule:"About-APP",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0022.png",folder:"AboutMerchant",tabTitle:"应用描述"},{id:"2c92cf4e646bd17301646e4ac8f53f89",sysTabName:"More",sysTabNameTag:"",pcModule:"More",iconURL:"http://img1.vzmapp.com/uploadPic/2017/03/21/20170321050655906.png",folder:"More",tabTitle:"更多"}]},module.exports=e; 
 			}); 
		define("data51.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e={},a=require("./theme-config.js");e.styleConfig=a.blue_new,e.isPerson=!1,e.setting={name:"51家政服务",autoId:"55212",hasWxPay:!1,type:1,comUrl:"https://mg.vzmapp.com",payUrl:"https://pay-gw.vzmapp.com"},e.dataInfo={appId:"2c92cf3c625e88ce01625ffc5d6809e1",theme:{},projectType:"o2o",homePageLayout:"1",version:"1.0.0",versionDesc:"",ext:{},projectIcon:"http://img1.vzmapp.com/TabIconLib/icon-wip-app-005.png",projectName:"51家政服务",PCStatus:"2",customizeTabsList:[{id:"2c92cf3c625e88ce01625ffc5daf0a27",sysTabName:"Home-Page",sysTabNameTag:"LynxHomePage",pcModule:"Home-Page",iconURL:"http://img1.vzmapp.com/uploadPic/2016/11/21/20161121022939208.png",folder:"HomePage",tabTitle:"首页"},{id:"2c92cf3c625e88ce01625ffc5d9e09fd",sysTabName:"Product-Level3",sysTabNameTag:"LynxProductList",pcModule:"Product-Level3",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316084017568.png",folder:"ProductLevel3",tabTitle:"家政服务"},{id:"2c92cf3c625e88ce01625ffc61880ba5",sysTabName:"Activity-Group",sysTabNameTag:"",pcModule:"Activity-Group",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316084017634.png",folder:"ActivityGroup",tabTitle:"拼团"},{id:"2c92cf3c625e88ce01625ffc5d6b09e2",sysTabName:"Activity-Kill",sysTabNameTag:"",pcModule:"Activity-Kill",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316084017650.png",folder:"ActivityKill",tabTitle:"秒杀"},{id:"2c92cf3c625e88ce01625ffc61720ba1",sysTabName:"Activity",sysTabNameTag:"",pcModule:"Activity",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316084017638.png",folder:"Activity",tabTitle:"优惠券"},{id:"2c92cf3c625e88ce01625ffc5d8f09f9",sysTabName:"About-Merchant",sysTabNameTag:"LynxApplyFor_About_Merchant",pcModule:"About-Merchant",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316084017639.png",folder:"AboutMerchant",tabTitle:"商家入驻"},{id:"2c92cf3c625e88ce01625ffc5db90a2f",sysTabName:"Photo-Info-Tab-Level2",sysTabNameTag:"LynxPhoto_H_Info_Tab_Level2",pcModule:"Photo-Info-Tab-Level2",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316084017665.png",folder:"PhotoInfoTabLevel2",tabTitle:"资讯动态"},{id:"2c92cf3c625e88ce01625ffc5dcf0a42",sysTabName:"Branches-Enquiry",sysTabNameTag:"LynxAbout_Merchant",pcModule:"Branches-Enquiry",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316084017580.png",folder:"BranchesEnquiry",tabTitle:"品牌商铺"},{id:"2c92cf3c625e88ce01625ffc612c0b86",sysTabName:"Photo-Info-Tab-Level2",sysTabNameTag:"",pcModule:"Photo-Info-Tab-Level2",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316084017652.png",folder:"PhotoInfoTabLevel2",tabTitle:"家政资讯"},{id:"2c92cf3c625e88ce01625ffc5d7609e9",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"LynxPhoto_Info_Post_Tab",pcModule:"Photo-Info-Tab-Level1",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316084017576.png",folder:"PhotoInfoTabLevel1",tabTitle:"供/求信息"},{id:"2c92cf3c625e88ce01625ffc5d9309fb",sysTabName:"Video-Gallery",sysTabNameTag:"Video_Gallery",pcModule:"Video-Gallery",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316084017649.png",folder:"VideoGallery",tabTitle:"企业宣传"},{id:"2c92cf3c625e88ce01625ffc610a0b78",sysTabName:"Flexi-Form",sysTabNameTag:"",pcModule:"Flexi-Form",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316084017573.png",folder:"FlexiForm",tabTitle:"定制服务"},{id:"2c92cf3c625e88ce01625ffc611e0b83",sysTabName:"Online-Chat",sysTabNameTag:"",pcModule:"Online-Chat",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316084017582.png",folder:"OnlineChat",tabTitle:"在线客服"},{id:"2c92cf3c625e88ce01625ffc618e0ba7",sysTabName:"Flexi-Form",sysTabNameTag:"Flexi-Form-Booking",pcModule:"Flexi-Form-Booking",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0010.png",folder:"FlexiForm",tabTitle:"自定义表格"},{id:"2c92cf3c625e88ce01625ffc61820ba4",sysTabName:"Flexi-Form",sysTabNameTag:"Flexi-Form-Booking",pcModule:"Flexi-Form-Booking",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0010.png",folder:"FlexiForm",tabTitle:"预约信息"},{id:"2c92cf3c625e88ce01625ffc5d6d09e3",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"LynxAdvertisingH_Photo_Info_Tab_Level1",pcModule:"Photo-Info-Tab-Level1",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0021.png",folder:"PhotoInfoTabLevel1",tabTitle:"资讯广告"},{id:"2c92cf3c625e88ce01625ffc5d8b09f7",sysTabName:"About-Merchant",sysTabNameTag:"",pcModule:"About-Merchant",iconURL:"http://img1.vzmapp.com/uploadPic/2018/03/16/20180316084017572.png",folder:"AboutMerchant",tabTitle:"关于我们"},{id:"2c92cf3c625e88ce01625ffc5dad0a26",sysTabName:"Product-Order",sysTabNameTag:"ZXMarketModuleOrder",pcModule:"Product-Order",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0028.png",folder:"ProductOrder",tabTitle:"订单列表"},{id:"2c92cf3c625e88ce01625ffc61530b9d",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"PCAdevertising_top",pcModule:"Photo-Info-Tab-Level1",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0021.png",folder:"PhotoInfoTabLevel1",tabTitle:"顶部广告"},{id:"2c92cf3c625e88ce01625ffc61780ba2",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"PCAdevertising_activity",pcModule:"Photo-Info-Tab-Level1",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0021.png",folder:"PhotoInfoTabLevel1",tabTitle:"优惠券广告"},{id:"2c92cf3c625e88ce01625ffc615e0b9f",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"PCAdevertising_mid",pcModule:"Photo-Info-Tab-Level1",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0021.png",folder:"PhotoInfoTabLevel1",tabTitle:"中部广告"},{id:"2c92cf3c625e88ce01625ffc61680ba0",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"PCAdevertising_btm",pcModule:"Photo-Info-Tab-Level1",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0021.png",folder:"PhotoInfoTabLevel1",tabTitle:"底部广告"},{id:"2c92cf3c625e88ce01625ffc5d7f09f2",sysTabName:"User-Feedback",sysTabNameTag:"",pcModule:"User-Feedback",iconURL:"http://img1.vzmapp.com/uploadPic/20140811111421259.png",folder:"UserFeedback",tabTitle:"留言反馈"},{id:"2c92cf3c625e88ce01625ffc61240b85",sysTabName:"Roulette-Lottery",sysTabNameTag:"",pcModule:"Roulette-Lottery",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0024.png",folder:"RouletteLottery",tabTitle:"抽奖活动"},{id:"2c92cf3c625e88ce01625ffc61510b9c",sysTabName:"taoShangChengFT",sysTabNameTag:"",pcModule:"taoShangChengFT",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0002.png",folder:"taoShangChengFT",tabTitle:"运费模板"},{id:"2c92cf3c625e88ce01625ffc61150b80",sysTabName:"Circle",sysTabNameTag:"",pcModule:"Circle",iconURL:"http://img1.vzmapp.com/uploadPic/20140811111618414.png",folder:"Circle",tabTitle:"朋友圈"},{id:"2c92cf3c625e88ce01625ffc614e0b9b",sysTabName:"Lynxforum",sysTabNameTag:"",pcModule:"Lynxforum",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0005.png",folder:"Lynxforum",tabTitle:"论坛中心"},{id:"2c92cf3c625e88ce01625ffc61140b7f",sysTabName:"LongPush",sysTabNameTag:"",pcModule:"LongPush",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0029.png",folder:"LongPush",tabTitle:"信息中心"},{id:"2c92cf3c625e88ce01625ffc60fe0b76",sysTabName:"Member",sysTabNameTag:"",pcModule:"Member",iconURL:"http://img1.vzmapp.com/uploadPic/2017/07/11/20170711104522981.png",folder:"Member",tabTitle:"会员中心"},{id:"2c92cf3c625e88ce01625ffc614b0b9a",sysTabName:"Share",sysTabNameTag:"",pcModule:"Share",iconURL:"http://img1.vzmapp.com/uploadPic/20140811111350728.png",folder:"Share",tabTitle:"二维码分享"},{id:"2c92cf3c625e88ce01625ffc618a0ba6",sysTabName:"About-Merchant",sysTabNameTag:"About-APP",pcModule:"About-APP",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0022.png",folder:"AboutMerchant",tabTitle:"应用描述"},{id:"2c92cf3c625e88ce01625ffc5d8409f4",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"LynxcLink_Web_Info_Tab",pcModule:"Photo-Info-Tab-Level1",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0025.png",folder:"PhotoInfoTabLevel1",tabTitle:"便民服务"},{id:"2c92cf3c625e88ce01625ffc61170b81",sysTabName:"About-Team",sysTabNameTag:"",pcModule:"About-Team",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0034.png",folder:"AboutTeam",tabTitle:"联系我们"},{id:"2c92cf3c625e88ce01625ffc61450b99",sysTabName:"Photo-Gallery",sysTabNameTag:"",pcModule:"Photo-Gallery",iconURL:"http://img1.vzmapp.com/TabIconLib/icon-0003.png",folder:"PhotoGallery",tabTitle:"中心认证"},{id:"2c92cf3c625e88ce01625ffc5db80a2e",sysTabName:"More",sysTabNameTag:"",pcModule:"More",iconURL:"http://img1.vzmapp.com/uploadPic/2016/11/21/20161121022939166.png",folder:"More",tabTitle:"更多"}]},module.exports=e; 
 			}); 
		define("img/data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e={},c={custom:{mainColor:"#3388FF",foregroundColor:"#FFFFFF",mainColorHighlight:"#1571FA",mainRGB:{r:51,g:136,b:255},tabSelectIconKey:"tab_blue"},orange:{mainColor:"#FF903C",foregroundColor:"white",mainColorHighlight:"#DD6408",mainRGB:{r:255,g:144,b:60},tabSelectIconKey:"tab_orange"},red:{mainColor:"#E50029",foregroundColor:"white",mainColorHighlight:"#AC3B39",mainRGB:{r:221,g:0,b:41},tabSelectIconKey:"tab_red"},blue:{mainColor:"#3388FF",foregroundColor:"white",mainColorHighlight:"#1571FA",mainRGB:{r:51,g:136,b:255},tabSelectIconKey:"tab_blue"},blue_new:{mainColor:"#80B8F9",foregroundColor:"white",mainColorHighlight:"#91C2F8",mainRGB:{r:128,g:184,b:249},tabSelectIconKey:"tab_blue_new"},pink:{mainColor:"#E272A7",foregroundColor:"white",mainColorHighlight:"#E58AB5",mainRGB:{r:226,g:114,b:167},tabSelectIconKey:"tab_pink"},green:{mainColor:"#73B448",foregroundColor:"white",mainColorHighlight:"#8BC267",mainRGB:{r:115,g:180,b:72},tabSelectIconKey:"tab_green"},brownLight:{mainColor:"#D8B98A",foregroundColor:"white",mainColorHighlight:"#8D6D54",mainRGB:{r:216,g:185,b:138},tabSelectIconKey:"tab_brown"},brownDark:{mainColor:"#503518",foregroundColor:"white",mainColorHighlight:"#8D6D54",mainRGB:{r:80,g:53,b:24},tabSelectIconKey:"tab_brown_dark"},white_in_red:{isWhite:!0,mainColor:"#E50029",foregroundColor:"white",mainColorHighlight:"#AC3B39",mainRGB:{r:221,g:0,b:41},tabSelectIconKey:"tab_red"}};e.styleConfig=c.brownLight,e.isPerson="false",e.setting={name:"皮肤保养中心888",autoId:"42752",hasWxPay:!1,wxAppId:"wxc29a5eb29192d13b",secret:"dd358f5550aa33bd0e5ce492c06bc89b",comUrl:"https://mg.vzmapp.com",payUrl:"https://pay-gw.vzmapp.com"},e.dataInfo={appId:"2c92cf3c5cb40f6d015cc38c36ad1d27",projectIcon:"http://img1.scspcn.com/TabIconLib/icon-wip-app-011.png",projectName:"皮肤保养中心888",PCStatus:"2",customizeTabsList:[{id:"2c92cf3c5cb40f6d015cc38c36db1d4c",sysTabName:"Home-Page",sysTabNameTag:"LynxHomePage",iconURL:"../../../images/icon/20170619110259831.png",folder:"HomePage",tabTitle:"首页"},{id:"2c92cf3c5cb40f6d015cc38c36d41d3e",sysTabName:"Product-Level3",sysTabNameTag:"LynxProductList",iconURL:"../../../images/icon/20170619110233468.png",folder:"ProductLevel3",tabTitle:"全部商品"},{id:"2c92cf3c5cb40f6d015cc38c37a61df4",sysTabName:"Photo-Info-Tab-Level2",sysTabNameTag:"",iconURL:"../../../images/icon/20170619110250541.png",folder:"PhotoInfoTabLevel2",tabTitle:"资讯中心"},{id:"2c92cf3c5cb40f6d015cc38c36e21d54",sysTabName:"Photo-Info-Tab-Level2",sysTabNameTag:"LynxPhoto_H_Info_Tab_Level2",iconURL:"../../../images/icon/20170619110250578.png",folder:"PhotoInfoTabLevel2",tabTitle:"创业资讯"},{id:"2c92cf3c5cb40f6d015cc38c36c11d31",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"LynxPhoto_Info_Post_Tab",iconURL:"../../../images/icon/20170619110250882.png",folder:"PhotoInfoTabLevel1",tabTitle:"供求关系"},{id:"2c92cf3c5cb40f6d015cc38c36eb1d67",sysTabName:"Branches-Enquiry",sysTabNameTag:"LynxAbout_Merchant",iconURL:"../../../images/icon/20170619110250870.png",folder:"BranchesEnquiry",tabTitle:"品牌店铺"},{id:"2c92cf3c5cb40f6d015cc38c36d21d3c",sysTabName:"Video-Gallery",sysTabNameTag:"Video_Gallery",iconURL:"../../../images/icon/20170619110250853.png",folder:"VideoGallery",tabTitle:"企业宣传"},{id:"2c92cf3c5cb40f6d015cc38c37911de3",sysTabName:"Flexi-Form",sysTabNameTag:"",iconURL:"../../../images/icon/20170619110250942.png",folder:"FlexiForm",tabTitle:"定制服务"},{id:"2c92cf3c5cb40f6d015cc38c379d1def",sysTabName:"Online-Chat",sysTabNameTag:"",iconURL:"../../../images/icon/20170619110259842.png",folder:"OnlineChat",tabTitle:"在线客服"},{id:"2c92cf3c5cb40f6d015cc38c378b1de1",sysTabName:"Member",sysTabNameTag:"",iconURL:"../../../images/icon/20140811103813342.png",folder:"Member",tabTitle:"会员"},{id:"2c92cf3c5cb40f6d015cc38c37b81e0d",sysTabName:"taoShangChengFT",sysTabNameTag:"",iconURL:"../../../images/icon/icon-0002.png",folder:"taoShangChengFT",tabTitle:"运费模板"},{id:"2c92cf3c5cb40f6d015cc38c36da1d4b",sysTabName:"Product-Order",sysTabNameTag:"ZXMarketModuleOrder",iconURL:"../../../images/icon/icon-0028.png",folder:"ProductOrder",tabTitle:"订单列表"},{id:"2c92cf3c5cb40f6d015cc38c37a01df2",sysTabName:"Roulette-Lottery",sysTabNameTag:"",iconURL:"../../../images/icon/icon-0014.png",folder:"RouletteLottery",tabTitle:"抽奖活动"},{id:"2c92cf3c5cb40f6d015cc38c36c81d36",sysTabName:"Photo-Info-Tab-Level1",sysTabNameTag:"LynxcLink_Web_Info_Tab",iconURL:"../../../images/icon/icon-0025.png",folder:"PhotoInfoTabLevel1",tabTitle:"便民服务"},{id:"2c92cf3c5cb40f6d015cc38c37b61e0c",sysTabName:"Lynxforum",sysTabNameTag:"",iconURL:"../../../images/icon/20150129120727702.png",folder:"Lynxforum",tabTitle:"论坛中心"},{id:"2c92cf3c5cb40f6d015cc38c37b51e0b",sysTabName:"Share",sysTabNameTag:"",iconURL:"../../../images/icon/20140811111350728.png",folder:"Share",tabTitle:"二维码分享"},{id:"2c92cf3c5cb40f6d015cc38c36c61d35",sysTabName:"User-Feedback",sysTabNameTag:"",iconURL:"../../../images/icon/20140811111421259.png",folder:"UserFeedback",tabTitle:"留言反馈"},{id:"2c92cf3c5cb40f6d015cc38c37961deb",sysTabName:"Circle",sysTabNameTag:"",iconURL:"../../../images/icon/20140811111618414.png",folder:"Circle",tabTitle:"朋友圈"},{id:"2c92cf3c5cb40f6d015cc38c37951dea",sysTabName:"LongPush",sysTabNameTag:"",iconURL:"../../../images/icon/icon-0029.png",folder:"LongPush",tabTitle:"信息中心"},{id:"2c92cf3c5cb40f6d015cc38c37b11e08",sysTabName:"Photo-Gallery",sysTabNameTag:"",iconURL:"../../../images/icon/icon-0003.png",folder:"PhotoGallery",tabTitle:"中心认证"},{id:"2c92cf3c5cb40f6d015cc38c36cd1d38",sysTabName:"About-Merchant",sysTabNameTag:"",iconURL:"../../../images/icon/icon-0022.png",folder:"AboutMerchant",tabTitle:"关于我们"},{id:"2c92cf3c5cb40f6d015cc38c37971dec",sysTabName:"About-Team",sysTabNameTag:"",iconURL:"../../../images/icon/icon-0034.png",folder:"AboutTeam",tabTitle:"联系我们"},{id:"2c92cf3c5cb40f6d015cc38c36e11d53",sysTabName:"More",sysTabNameTag:"",iconURL:"../../../images/icon/20160530023515537.png",folder:"More",tabTitle:"更多"}]},module.exports=e; 
 			}); 
		define("pages/indexStyle1/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a="",e="",o=1,i=1,n="",s="",r="",c=!1,l=["LynxProductList","LynxAbout_Merchant","LynxPhoto_Info_Post_Tab","LynxPhoto_H_Info_Tab_Level2","Photo-Info-Tab-Level2","Video_Gallery","Flexi-Form","Online-Chat","Activity","LynxApplyFor_About_Merchant","Activity-Group","About-Merchant","Activity-Kill"];Page({data:{styleConfig:t.globalData.styleConfig,advertisements:[],PCAdevertising_top:"",productArr:[],productClass:[],moreArr:[],headlineImage:"",headlineArr:[],recommendNews:[],entrepreneurshipList:[],adcyList:[],proList:[],hotSaleList:[],hotSaleList1:[],hotSaleList2:[],branchInfo:[],bottomHint:!0,posCity:"",hideNews:!0,hasBranch:!1,minaInfo:{},hiddenMerchant:!0,activityInfo:"",isGroup:"",isPerson:t.globalData.isPerson,isQuery:1==t.globalData.isPerson,isLoading:!1,videoLink:"",netWorkType:!1,videoList:{},couponAdImg:"",activitySeckill:{},activityStart:"",hasSeckill:"",advertiseProducts:[],couponList:[],loadCount:1,recProStyle:""},checkIfHasAutoId:function(a){var e=this;if("undefined"!=typeof sessionStorage&&(!sessionStorage.getItem("globalAutoId")||a&&a.autoId||(a={autoId:sessionStorage.getItem("globalAutoId")})),a&&a.autoId){if(a.autoId){sessionStorage.setItem("globalAutoId",a.autoId);var o=a.autoId,i=wx.getStorageSync("autoId-"+o);i?(t.initProjectData(i),t.getProjectData(),t.refreshProjectData(o).then(function(t){wx.clearStorage(),wx.setStorageSync("autoId-"+o,t)}),e.initData()):t.refreshProjectData(o).then(function(a){wx.setStorageSync("autoId-"+o,a),t.initProjectData(a),t.getProjectData(),e.initData()})}}else e.initData()},onShow:function(){this.data.loadCount>1&&this.initData(),this.setData({loadCount:this.data.loadCount+1})},onLoad:function(t){console.log(" ------------ index:onLoad ------------- ");var a=this;wx.getNetworkType({success:function(t){a.setData({netWorkType:t.networkType})}}),a.checkIfHasAutoId(t)},initData:function(){var i=this;a=t.globalData.projectInfo,e=t.globalData.customizeTabId,!a.appId||a.appId.length<1||(console.log(" ------------ index:onShow ------------- "),console.log(t.globalData.city),i.getJoinPhone(),wx.setNavigationBarTitle({title:a.projectName}),""==t.globalData.city?(n="",o=1,i.setData({posCity:"",productArr:[]}),clearInterval(s),i.getHomepageBaseInfo().then(function(a){i.getHomePageTop(),i.getCouponList(),i.getCustomizeTabList().then(function(){"1"==t.globalData.isGroup&&i.getActivity(),"1"==i.data.hasSeckill&&i.getSeckillActivity(),i.getHomepageAdvertise(),i.getHomepageProduct()}),a.minaInfo.showCategory?i.getProCategory():i.getReommendProducts()}),i.getBranchList()):void 0==t.globalData.city||"{}"==JSON.stringify(t.globalData.city)?(t.globalData.city={},o=1,i.setData({productArr:[]}),clearInterval(s),i.getHomepageBaseInfo().then(function(a){i.getHomePageTop(),i.getCouponList(),i.getCustomizeTabList().then(function(){"1"==t.globalData.isGroup&&i.getActivity(),"1"==i.data.hasSeckill&&i.getSeckillActivity(),i.getHomepageAdvertise(),i.getHomepageProduct()}),a.minaInfo.showCategory?i.getProCategory():i.getReommendProducts()}),i.getLocation().then(function(t){i.getBranchList()})):t.globalData.city.cityName==this.data.posCity||(n=t.globalData.city.cityID,o=1,i.setData({posCity:t.globalData.city.cityName}),clearInterval(s),i.getHomepageBaseInfo().then(function(a){i.getHomePageTop(),i.getCouponList(),i.getCustomizeTabList().then(function(){"1"==t.globalData.isGroup&&i.getActivity(),"1"==i.data.hasSeckill&&i.getSeckillActivity(),i.getHomepageAdvertise(),i.getHomepageProduct()}),a.minaInfo.showCategory?i.getProCategory():i.getReommendProducts()}),i.getBranchList()))},getHomePageTop:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getHomepageTop.action",data:{advertisementsCId:e.LynxHomePage,informationsCId:e.LynxPhoto_H_Info_Tab_Level2,productCId:e.LynxProductList},success:function(e){for(var o=t.getJsonData(e.data),i=0;i<o.advertisements.length;i++)o.advertisements[i].image=t.modifyPicSize(o.advertisements[i].image,"_r750x400p");for(var n=Math.ceil(o.productClass.length/8),s=[],r=0;r<n;r++)s[r]=[],s[r].push(o.productClass.slice(8*r,8*(r+1)));a.setData({advertisements:o.advertisements,productClass:s}),wx.stopPullDownRefresh()}})},getHomepageBaseInfo:function(){var e=this;return new Promise(function(o,i){wx.request({url:t.globalData.comUrl+"tabs_getHomepageBaseInfo.action",data:{projectId:a.appId},success:function(a){var i=t.getJsonData(a.data);e.setData({minaInfo:i.minaInfo,isQuery:i.minaInfo.allHidden,isLoading:!0,recProStyle:i.minaInfo.showCategory?2:1}),t.globalData.isQuery=i.minaInfo.allHidden,i.minaInfo.rollNewsHidden||e.getCategory().then(function(t){e.getNewsInfo(t)}),i.minaInfo.listNewsHidden||e.getcyCategory().then(function(t){e.getcyNewsInfo(t),e.getcyAdList()}),i.minaInfo.videoHidden||e.getVideoList(),o(i)}})})},getHomepageProduct:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getHomepageProduct.action",data:{advertise:"advertise",cityId:"",hotSale:"hotSale",isGroup:"1",productCId:e.LynxProductList,scroll:""},success:function(e){for(var o=t.getJsonData(e.data),i=0;i<o.advertiseProducts.length;i++)o.advertiseProducts[i].advertisingImage=t.modifyPicSize(o.advertiseProducts[i].advertisingImage,"_r750x200p");for(var n=0;n<o.hotSaleList.length;n++)o.hotSaleList[n].hotSaleImage=t.modifyPicSize(o.hotSaleList[n].hotSaleImage,"_r220x220p");a.setData({hotSaleList:o.hotSaleList,hotSaleList1:o.hotSaleList.slice(0,5),hotSaleList2:o.hotSaleList.slice(5,10),advertiseProducts:o.advertiseProducts}),a.getJoinPhone()}})},getHomepageAdvertise:function(){var e=this;wx.request({url:t.globalData.comUrl+"tabs_getHomepageAdvertising.action",data:{projectId:a.appId},success:function(a){var o=t.getJsonData(a.data);o.PCAdevertising_activity[0]&&e.setData({couponAdImg:o.PCAdevertising_activity[0].picture1}),o.PCAdevertising_top[0]&&e.setData({PCAdevertising_top:o.PCAdevertising_top[0].picture1})}})},getSeckillActivity:function(){var a=this;wx.request({url:t.globalData.comUrl+"activityProduct_groupsIndex.action",data:{appId:t.globalData.projectInfo.appId,actType:"3"},success:function(t){clearInterval(r);var e=new Date(t.data.beginTime),o=new Date(t.data.nowTime),i=parseInt((e-o)/1e3);if(i>0)t.data.activityStart=!1,t.data.countDown=a.secondToTime(i),r=setInterval(function(){i--,t.data.countDown=a.secondToTime(i),a.setData({activitySeckill:t.data}),i<1&&(clearInterval(r),a.refresh())},1e3);else{if(t.data.activityTime<=0)return;t.data.activityStart=!0,t.data.countDown=a.secondToTime(t.data.activityTime),r=setInterval(function(){t.data.activityTime--,t.data.countDown=a.secondToTime(t.data.activityTime),a.setData({activitySeckill:t.data}),t.data.activityTime<=0&&(clearInterval(r),a.refresh())},1e3)}}})},getVideoList:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getVideoGalleryList.action",data:{appId:t.globalData.projectInfo.appId,customizeTabId:t.globalData.customizeTabId.Video_Gallery,isNeedHttps:0},success:function(e){var o=t.getJsonData(e.data);a.setData({videoList:o})},fail:function(){}})},getActivity:function(){var a=this;wx.request({url:t.globalData.comUrl+"activityProduct_groupsIndex.action",data:{appId:t.globalData.projectInfo.appId},success:function(t){clearInterval(s);var e=new Date(t.data.beginTime),o=new Date(t.data.nowTime),i=parseInt((e-o)/1e3);if(i>0)t.data.activityStart=!1,t.data.countDown=a.secondToTime(i),s=setInterval(function(){i--,t.data.countDown=a.secondToTime(i),a.setData({activityInfo:t.data}),i<1&&(clearInterval(s),a.refresh())},1e3);else{if(t.data.activityTime<=0)return;t.data.activityStart=!0,t.data.countDown=a.secondToTime(t.data.activityTime),s=setInterval(function(){t.data.activityTime--,t.data.countDown=a.secondToTime(t.data.activityTime),a.setData({activityInfo:t.data}),t.data.activityTime<=0&&(clearInterval(s),a.refresh())},1e3)}}})},secondToTime:function(t){var a=Math.floor(t/3600/24),e=Math.floor(t/3600%24),o=Math.floor(t/60%60),i=Math.floor(t%60);return e<10&&(e="0"+e),o<10&&(o="0"+o),i<10&&(i="0"+i),{d:a,h:e,m:o,s:i}},getCouponList:function(){var a=this,e=t.getMemberId()||"";wx.request({url:t.globalData.comUrl+"act_getActivityList.action",data:{branchInfoId:"",customizetabId:t.getCustomizeId("Activity"),memberId:e},success:function(e){var o=t.getJsonData(e.data);a.setData({couponList:o})},fail:function(a){t.hint()}})},coupontap:function(a){var e=this,o=t.getMemberId()||"";""!=o?0!=a.currentTarget.dataset.info.getCoupon&&wx.request({url:t.globalData.comUrl+"act_addMemberActivity.action",data:{activityId:a.currentTarget.dataset.info.id,memberId:o,customizetabId:t.getCustomizeId("Activity")},success:function(a){"0"!=t.getJsonData(a.data).code?wx.showToast({title:"领取成功",icon:"success"}):t.hint("领取失败"),e.getCouponList()},fail:function(a){t.hint()}}):wx.navigateTo({url:"../../login/login"})},getLocation:function(){var a=this;return new Promise(function(e,o){wx.getLocation({type:"wgs84",success:function(o){t.globalData.location={lat:o.latitude,lng:o.longitude},wx.request({url:"https://api.map.baidu.com/geocoder/v2/?ak=KM5p19PFWrU83vSkqpuC01LLCzlEFZpw&location="+o.latitude+","+o.longitude+"&output=json&pois=1",data:{},jsonp:!0,success:function(o){t.globalData.city.cityName=o.data.result.addressComponent.city,wx.request({method:"GET",url:t.globalData.comUrl+"tabs_getCityIdByName.action",data:{cityName:o.data.result.addressComponent.city},success:function(o){t.globalData.city.cityID=o.data.cityId,t.globalData.city.provinceId="",a.setData({posCity:t.globalData.city.cityName}),e(t.globalData.city)}})}})}})})},getCategory:function(){return new Promise(function(o,i){wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabCategory.action",data:{appId:a.appId,customizeTabId:e["Photo-Info-Tab-Level2"]},success:function(a){var e=t.getJsonData(a.data);o(e)}})})},getcyCategory:function(){return new Promise(function(o,i){wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabCategory.action",data:{appId:a.appId,customizeTabId:e.LynxPhoto_H_Info_Tab_Level2},success:function(a){var e=t.getJsonData(a.data);o(e)}})})},getCustomizeTabList:function(){var e=this;return new Promise(function(o,i){wx.request({url:t.globalData.comUrl+"tabs_getCustomizeTabList.action",data:{appId:a.appId},success:function(a){for(var i=t.getJsonData(a.data),n=!0,s=0;s<i.length;s++)"Activity-Group"==i[s].sysTabName&&(t.globalData.isGroup="1",e.setData({isGroup:"1"})),"Activity-Kill"==i[s].sysTabName&&e.setData({hasSeckill:"1"}),"LynxAbout_Merchant"==i[s].sysTabNameTag&&(n=!1);e.setData({hiddenMerchant:n});for(var r=l,c=[],u=0;u<i.length;u++)for(var g=0;g<r.length;g++)""!=i[u].sysTabNameTag&&i[u].sysTabNameTag==r[g]?c.push(i[u]):""==i[u].sysTabNameTag&&i[u].sysTabName==r[g]&&c.push(i[u]);if("O2O_V1"==e.data.minaInfo.subVersion){for(var d=Math.ceil(c.length/8),p=[],h=0;h<d;h++)p[h]=[],p[h].push(c.slice(8*h,8*(h+1)));console.log(p),e.setData({moreArr:p})}else e.setData({moreArr:c});o(i)}})})},toMoreFunction:function(a){switch(console.log(a.currentTarget.dataset.title),a.currentTarget.dataset.location){case"LynxProductList":t.globalData.isPerson?wx.navigateTo({url:"../product/product"}):wx.switchTab({url:"../product/product"});break;case"LynxAbout_Merchant":1==this.data.isPerson?wx.navigateTo({url:"../store/store"}):wx.switchTab({url:"../store/store"});break;case"LynxPhoto_Info_Post_Tab":wx.navigateTo({url:"../supply/supply"});break;case"LynxPhoto_H_Info_Tab_Level2":wx.navigateTo({url:"../news/news?sysTabName=LynxPhoto_H_Info_Tab_Level2&title="+a.currentTarget.dataset.title});break;case"Photo-Info-Tab-Level2":wx.navigateTo({url:"../news/news?sysTabName=Photo-Info-Tab-Level2&title="+a.currentTarget.dataset.title});break;case"Video_Gallery":wx.navigateTo({url:"../publicity/publicity"});break;case"Flexi-Form":wx.navigateTo({url:"../store/store-detail/custom/custom"});break;case"Activity":wx.navigateTo({url:"../self/mycoupon/mycoupon"});break;case"LynxApplyFor_About_Merchant":t.getMemberId()?wx.navigateTo({url:"../join/join"}):wx.navigateTo({url:"../login/login"});break;case"Activity-Group":wx.navigateTo({url:"../group/group-prolist/group-prolist"});break;case"About-Merchant":1==this.data.isPerson?wx.switchTab({url:"../about-us/about-us"}):wx.navigateTo({url:"../about-us/about-us"});break;case"Activity-Kill":wx.navigateTo({url:"../seckill/seckill"})}},getBranchList:function(){var o=this,i={appId:a.appId,customizeTabId:e.LynxAbout_Merchant,advertisement:1,current:1,level:0};t.globalData.city.cityID>0&&(i.cityId=t.globalData.city.cityID),t.globalData.city.provinceId>0&&(i.provinceId=t.globalData.city.provinceId),wx.request({url:t.globalData.comUrl+"mctab_searchBranchInfo.action",data:i,success:function(a){var e=t.getJsonData(a.data);if(e.pageList.length>0){for(var i=0;i<e.pageList.length;i++)e.pageList[i].pic1=t.modifyPicSize(e.pageList[i].pic1,"_r192x90p");o.setData({branchInfo:e.pageList,hasBranch:!0})}else o.setData({hasBranch:!1})},fail:function(a){t.hint()}})},getNewsInfo:function(o){var i=this;o.length>=1&&(i.setData({headlineImage:o[0].categoryIcon}),wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabFromL2ToL1.action",data:{appId:a.appId,customizeTabId:e["Photo-Info-Tab-Level2"],categoryId:o[0].code,current:1},success:function(a){for(var e=t.getJsonData(a.data),o=[],n=Math.ceil(e.pageList.length/2),s=0;s<n;s++)o[s]=[],o[s].push(e.pageList.slice(2*s,2*(s+1)));for(var r=0;r<e.pageList.length;r++)e.pageList[r].picture1=t.modifyPicSize(e.pageList[r].picture1,"_r140x140p");i.setData({recommendNews:e.pageList.slice(0,3),headlineArr:o})}}))},getcyNewsInfo:function(o){var i=this;o.length>=1&&wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabFromL2ToL1.action",data:{appId:a.appId,customizeTabId:e.LynxPhoto_H_Info_Tab_Level2,categoryId:o[0].code,current:1},success:function(a){for(var e=t.getJsonData(a.data),o=[],n=Math.ceil(e.pageList.length/2),s=0;s<n;s++)o[s]=[],o[s].push(e.pageList.slice(2*s,2*(s+1)));for(var r=0;r<e.pageList.length;r++)e.pageList[r].picture1=t.modifyPicSize(e.pageList[r].picture1,"_r140x140p");i.setData({entrepreneurshipList:e.pageList.slice(0,3),headlineArr:o})}})},getcyAdList:function(){var o=this;wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabFromL2ToL1.action",data:{appId:a.appId,customizeTabId:e.LynxAdvertisingH_Photo_Info_Tab_Level1,current:1},success:function(a){var e=t.getJsonData(a.data);o.setData({adcyList:e.pageList})},fail:function(){t.hint()}})},getProCategory:function(){var o=this;wx.request({url:t.globalData.comUrl+"tabs_getAppCategoryProductByCity.action",data:{appId:a.appId,customizeTabId:e.LynxProductList,count:4,jsoncallback:"",productName:"",isGroup:t.globalData.isGroup},success:function(t){var a='{"list":'+t.data.substring(1).slice(0,-1)+"}",e=JSON.parse(a);console.log(e.list),o.setData({proList:e.list})}})},getJoinPhone:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getAboutMerchant.action",data:{customizetabId:e.LynxApplyFor_About_Merchant},success:function(e){var o=t.getJsonData(e.data);a.setData({joinPhone:o.phone})}})},getReommendProducts:function(){if(!c){c=!0;var n=this;wx.request({url:t.globalData.comUrl+"tabs_getAppProductByCity.action",data:{appId:a.appId,customizeTabId:e.LynxProductList,proId:"",disId:"",productName:"",current:o,cityId:"",isGroup:t.globalData.isGroup},success:function(a){var e=t.getJsonData(a.data);i=e.pages;for(var o=0;o<e.pageList.length;o++)e.pageList[o].productModelList[0]&&String(e.pageList[o].productModelList[0].stock).length>3&&(e.pageList[o].productModelList[0].stock=String(e.pageList[o].productModelList[0].stock).substring(0,3)),String(Math.abs(e.pageList[o].quantity)).length>3&&(e.pageList[o].quantity=String(Math.abs(e.pageList[o].quantity)).substring(0,3)),String(e.pageList[o].readTimes).length>3&&(e.pageList[o].readTimes=String(e.pageList[o].readTimes).substring(0,3));n.setData({productArr:n.data.productArr.concat(e.pageList)}),c=!1}})}},joinPhoneCall:function(){var t=this;t.data.joinPhone&&wx.makePhoneCall({phoneNumber:t.data.joinPhone})},toSearch:function(t){wx.navigateTo({url:"../search/search?type=0"})},toPosition:function(){wx.navigateTo({url:"../position/position"})},toProductList:function(t){wx.navigateTo({url:"../product/pro-list/pro-list?bigCateCode="+t.currentTarget.dataset.code+"&title="+t.currentTarget.dataset.title})},toProductDetail:function(t){wx.navigateTo({url:"../product/pro-detail/pro-detail?productId="+t.currentTarget.dataset.pid})},toGroupActivity:function(){wx.navigateTo({url:"../group/group-prolist/group-prolist"})},toStore:function(){wx.switchTab({url:"../store/store"})},toStoreDetail:function(t){wx.navigateTo({url:"../store/store-detail/store-detail?tabContentId="+t.currentTarget.dataset.sid})},toNewsList:function(){wx.navigateTo({url:"../news/news?sysTabName=Photo-Info-Tab-Level2"})},toNewsDetail:function(t){wx.navigateTo({url:"../news/news-detail/news-detail?tabContentId="+t.currentTarget.dataset.nid+"&type=4"})},toMyCoupon:function(){wx.navigateTo({url:"../self/mycoupon/mycoupon"})},toSeckillActivity:function(){wx.navigateTo({url:"../seckill/seckill"})},formSubmit:function(t){""!=t.detail.value.branchName?""!=t.detail.value.mainProject?""!=t.detail.value.phone?""!=t.detail.value.textCon?""!=t.detail.value.email?""!=t.detail.value.project?(wx.showToast({title:"正在提交...",icon:"loading",duration:2e3,mask:!0}),setTimeout(function(){wx.showToast({title:"提交成功",icon:"success",duration:2e3,mask:!0,success:function(){}})},2e3)):this.warn("预约不能为空"):this.warn("邮箱不能为空"):this.warn("请输入您的问题描述!"):this.warn("请输入您的联系方式!!"):this.warn("请输入您的年龄!"):this.warn("请输入您的名字!")},bindDateChange:function(t){this.setData({date:t.detail.value})},warn:function(t){wx.showModal({title:"提示",content:t,showCancel:!1})},onPullDownRefresh:function(){this.setData({productArr:[],activityInfo:"",posCity:t.globalData.city.cityName}),n="",clearInterval(s);var a=this;a.getHomepageBaseInfo().then(function(e){a.getHomePageTop(),a.getCouponList(),a.getCustomizeTabList().then(function(){"1"==t.globalData.isGroup&&a.getActivity(),"1"==a.data.hasSeckill&&a.getSeckillActivity(),a.getHomepageAdvertise(),a.getHomepageProduct()}),e.minaInfo.showCategory?a.getProCategory():a.getReommendProducts()}),a.getBranchList()},refresh:function(){this.setData({productArr:[],activityInfo:"",posCity:t.globalData.city.cityName}),n="",clearInterval(s);var a=this;a.getHomepageBaseInfo().then(function(e){a.getHomePageTop(),a.getCouponList(),a.getCustomizeTabList().then(function(){"1"==t.globalData.isGroup&&a.getActivity(),"1"==a.data.hasSeckill&&a.getSeckillActivity(),a.getHomepageAdvertise(),a.getHomepageProduct()}),e.minaInfo.showCategory?a.getProCategory():a.getReommendProducts()}),a.getBranchList()},onReachBottom:function(){1==this.data.recProStyle&&o<i&&(o++,this.getReommendProducts())},onShareAppMessage:function(){return{title:a.productName,path:"/pages/index/index",success:function(t){},fail:function(t){}}}}); 
 			}); 
		define("pages/indexStyle2/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a="",e="",o=1,i=1,n="",s="",r="",c=["LynxProductList","LynxAbout_Merchant","LynxPhoto_Info_Post_Tab","LynxPhoto_H_Info_Tab_Level2","Photo-Info-Tab-Level2","Video_Gallery","Flexi-Form","Online-Chat","Activity","LynxApplyFor_About_Merchant","Activity-Group","About-Merchant","Activity-Kill"];Page({data:{styleConfig:t.globalData.styleConfig,advertisements:[],PCAdevertising_top:"",productArr:[],productClass:[],moreArr:[],headlineImage:"",headlineArr:[],recommendNews:[],entrepreneurshipList:[],adcyList:[],proList:[],hotSaleList:[],hotSaleList1:[],hotSaleList2:[],branchInfo:[],bottomHint:!0,posCity:"",hideNews:!0,hasBranch:!1,minaInfo:{},hiddenMerchant:!0,activityInfo:"",isGroup:"",isPerson:t.globalData.isPerson,isQuery:1==t.globalData.isPerson,isLoading:!1,videoLink:"",netWorkType:!1,videoList:{},couponAdImg:"",activitySeckill:{},activityStart:"",hasSeckill:""},checkIfHasAutoId:function(a){var e=this;if(!sessionStorage.getItem("globalAutoId")||a&&a.autoId||(a={autoId:sessionStorage.getItem("globalAutoId")}),a&&a.autoId){if(a.autoId){sessionStorage.setItem("globalAutoId",a.autoId);var o=a.autoId,i=wx.getStorageSync("autoId-"+o);i?(t.initProjectData(i),t.getProjectData(),t.refreshProjectData(o).then(function(t){wx.clearStorage(),wx.setStorageSync("autoId-"+o,t)}),e.initData()):t.refreshProjectData(o).then(function(a){wx.setStorageSync("autoId-"+o,a),t.initProjectData(a),t.getProjectData(),e.initData()})}}else e.initData()},onLoad:function(t){console.log(" ------------ index:onLoad ------------- ");var a=this;wx.getNetworkType({success:function(t){a.setData({netWorkType:t.networkType})}}),a.checkIfHasAutoId(t)},initData:function(){var i=this;a=t.globalData.projectInfo,e=t.globalData.customizeTabId,!a.appId||a.appId.length<1||(console.log(" ------------ index:onShow ------------- "),console.log(t.globalData.city),i.getJoinPhone(),wx.setNavigationBarTitle({title:a.projectName}),""==t.globalData.city?(n="",o=1,i.setData({posCity:"",productArr:[]}),clearInterval(s),i.getHomepageBaseInfo().then(function(){i.getHomePageTop(),i.getCustomizeTabList().then(function(){"1"==t.globalData.isGroup&&i.getActivity(),"1"==i.data.hasSeckill&&i.getSeckillActivity(),i.getHomepageAdvertise(),i.getHomepageProduct(),i.getProCategory()})}),i.getBranchList()):void 0==t.globalData.city||"{}"==JSON.stringify(t.globalData.city)?(t.globalData.city={},o=1,i.setData({productArr:[]}),clearInterval(s),i.getHomepageBaseInfo().then(function(){i.getHomePageTop(),i.getCustomizeTabList().then(function(){"1"==t.globalData.isGroup&&i.getActivity(),"1"==i.data.hasSeckill&&i.getSeckillActivity(),i.getHomepageAdvertise(),i.getHomepageProduct(),i.getProCategory()})}),i.getLocation().then(function(t){i.getBranchList()})):t.globalData.city.cityName==this.data.posCity||(n=t.globalData.city.cityID,o=1,i.setData({posCity:t.globalData.city.cityName}),clearInterval(s),i.getHomepageBaseInfo().then(function(){i.getHomePageTop(),i.getCustomizeTabList().then(function(){"1"==t.globalData.isGroup&&i.getActivity(),"1"==i.data.hasSeckill&&i.getSeckillActivity(),i.getHomepageAdvertise(),i.getHomepageProduct(),i.getProCategory()})}),i.getBranchList()))},getHomePageTop:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getHomepageTop.action",data:{advertisementsCId:e.LynxHomePage,informationsCId:e.LynxPhoto_H_Info_Tab_Level2,productCId:e.LynxProductList},success:function(e){for(var o=t.getJsonData(e.data),i=0;i<o.advertisements.length;i++)o.advertisements[i].image=t.modifyPicSize(o.advertisements[i].image,"_r750x400p");for(var n=Math.ceil(o.productClass.length/8),s=[],r=0;r<n;r++)s[r]=[],s[r].push(o.productClass.slice(8*r,8*(r+1)));a.setData({advertisements:o.advertisements,productClass:s}),wx.stopPullDownRefresh()}})},getHomepageBaseInfo:function(){var e=this;return new Promise(function(o,i){wx.request({url:t.globalData.comUrl+"tabs_getHomepageBaseInfo.action",data:{projectId:a.appId},success:function(a){var i=t.getJsonData(a.data);e.setData({minaInfo:i.minaInfo,isQuery:i.minaInfo.allHidden,isLoading:!0}),getApp().globalData.isQuery=i.minaInfo.allHidden,i.minaInfo.rollNewsHidden||e.getCategory().then(function(t){e.getNewsInfo(t)}),i.minaInfo.listNewsHidden||e.getcyCategory().then(function(t){e.getcyNewsInfo(t),e.getcyAdList()}),i.minaInfo.videoHidden||e.getVideoList(),o(i)}})})},getHomepageProduct:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getHomepageProduct.action",data:{advertise:"advertise",cityId:"",hotSale:"hotSale",isGroup:"1",productCId:e.LynxProductList,scroll:""},success:function(e){for(var o=t.getJsonData(e.data),i=0;i<o.advertiseProducts.length;i++)o.advertiseProducts[i].advertisingImage=t.modifyPicSize(o.advertiseProducts[i].advertisingImage,"_r750x200p");for(var n=0;n<o.hotSaleList.length;n++)o.hotSaleList[n].hotSaleImage=t.modifyPicSize(o.hotSaleList[n].hotSaleImage,"_r220x220p");a.setData({hotSaleList:o.hotSaleList,hotSaleList1:o.hotSaleList.slice(0,5),hotSaleList2:o.hotSaleList.slice(5,10),advertiseProducts:o.advertiseProducts}),a.getJoinPhone()}})},getHomepageAdvertise:function(){var e=this;wx.request({url:t.globalData.comUrl+"tabs_getHomepageAdvertising.action",data:{projectId:a.appId},success:function(a){var o=t.getJsonData(a.data);o.PCAdevertising_activity[0]&&e.setData({couponAdImg:o.PCAdevertising_activity[0].picture1}),o.PCAdevertising_top[0]&&e.setData({PCAdevertising_top:o.PCAdevertising_top[0].picture1})}})},getSeckillActivity:function(){var a=this;wx.request({url:t.globalData.comUrl+"activityProduct_groupsIndex.action",data:{appId:t.globalData.projectInfo.appId,actType:"3"},success:function(t){clearInterval(r);var e=new Date(t.data.beginTime),o=new Date(t.data.nowTime),i=parseInt((e-o)/1e3);if(i>0)t.data.activityStart=!1,t.data.countDown=a.secondToTime(i),r=setInterval(function(){i--,t.data.countDown=a.secondToTime(i),a.setData({activitySeckill:t.data}),i<1&&(clearInterval(r),a.refresh())},1e3);else{if(t.data.activityTime<=0)return;t.data.activityStart=!0,t.data.countDown=a.secondToTime(t.data.activityTime),r=setInterval(function(){t.data.activityTime--,t.data.countDown=a.secondToTime(t.data.activityTime),a.setData({activitySeckill:t.data}),t.data.activityTime<=0&&(clearInterval(r),a.refresh())},1e3)}}})},getVideoList:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getVideoGalleryList.action",data:{appId:t.globalData.projectInfo.appId,customizeTabId:t.globalData.customizeTabId.Video_Gallery,isNeedHttps:0},success:function(e){var o=t.getJsonData(e.data);a.setData({videoList:o})},fail:function(){}})},getActivity:function(){var a=this;wx.request({url:t.globalData.comUrl+"activityProduct_groupsIndex.action",data:{appId:t.globalData.projectInfo.appId},success:function(t){clearInterval(s);var e=new Date(t.data.beginTime),o=new Date(t.data.nowTime),i=parseInt((e-o)/1e3);if(i>0)t.data.activityStart=!1,t.data.countDown=a.secondToTime(i),s=setInterval(function(){i--,t.data.countDown=a.secondToTime(i),a.setData({activityInfo:t.data}),i<1&&(clearInterval(s),a.refresh())},1e3);else{if(t.data.activityTime<=0)return;t.data.activityStart=!0,t.data.countDown=a.secondToTime(t.data.activityTime),s=setInterval(function(){t.data.activityTime--,t.data.countDown=a.secondToTime(t.data.activityTime),a.setData({activityInfo:t.data}),t.data.activityTime<=0&&(clearInterval(s),a.refresh())},1e3)}}})},secondToTime:function(t){var a=Math.floor(t/3600/24),e=Math.floor(t/3600%24),o=Math.floor(t/60%60),i=Math.floor(t%60);return e<10&&(e="0"+e),o<10&&(o="0"+o),i<10&&(i="0"+i),{d:a,h:e,m:o,s:i}},getMerchantHidden:function(){var o=this;wx.request({url:t.globalData.comUrl+"tabs_getCustomizeTabsById.action",data:{appId:a.appId,customizeTabId:e.LynxAbout_Merchant},success:function(a){var e=t.getJsonData(a.data);o.setData({hiddenMerchant:e.isDeleted})}})},getLocation:function(){var a=this;return new Promise(function(e,o){wx.getLocation({type:"wgs84",success:function(o){t.globalData.location={lat:o.latitude,lng:o.longitude},wx.request({url:"https://api.map.baidu.com/geocoder/v2/?ak=KM5p19PFWrU83vSkqpuC01LLCzlEFZpw&location="+o.latitude+","+o.longitude+"&output=json&pois=1",data:{},jsonp:!0,success:function(o){t.globalData.city.cityName=o.data.result.addressComponent.city,wx.request({method:"GET",url:t.globalData.comUrl+"tabs_getCityIdByName.action",data:{cityName:o.data.result.addressComponent.city},success:function(o){t.globalData.city.cityID=o.data.cityId,t.globalData.city.provinceId="",a.setData({posCity:t.globalData.city.cityName}),e(t.globalData.city)}})}})}})})},getCategory:function(){return new Promise(function(o,i){wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabCategory.action",data:{appId:a.appId,customizeTabId:e["Photo-Info-Tab-Level2"]},success:function(a){var e=t.getJsonData(a.data);o(e)}})})},getcyCategory:function(){return new Promise(function(o,i){wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabCategory.action",data:{appId:a.appId,customizeTabId:e.LynxPhoto_H_Info_Tab_Level2},success:function(a){var e=t.getJsonData(a.data);o(e)}})})},getCustomizeTabList:function(){var e=this;return new Promise(function(o,i){wx.request({url:t.globalData.comUrl+"tabs_getCustomizeTabList.action",data:{appId:a.appId},success:function(a){for(var i=t.getJsonData(a.data),n=!0,s=0;s<i.length;s++)"Activity-Group"==i[s].sysTabName&&(t.globalData.isGroup="1",e.setData({isGroup:"1"})),"Activity-Kill"==i[s].sysTabName&&e.setData({hasSeckill:"1"}),"LynxAbout_Merchant"==i[s].sysTabNameTag&&(n=!1);e.setData({hiddenMerchant:n});for(var r=c,l=[],u=0;u<i.length;u++)for(var g=0;g<r.length;g++)""!=i[u].sysTabNameTag&&i[u].sysTabNameTag==r[g]?l.push(i[u]):""==i[u].sysTabNameTag&&i[u].sysTabName==r[g]&&l.push(i[u]);if("O2O_V1"==e.data.minaInfo.subVersion){for(var d=Math.ceil(l.length/8),p=[],h=0;h<d;h++)p[h]=[],p[h].push(l.slice(8*h,8*(h+1)));console.log(p),e.setData({moreArr:p})}else e.setData({moreArr:l});o(i)}})})},toMoreFunction:function(a){switch(console.log(a.currentTarget.dataset.title),a.currentTarget.dataset.location){case"LynxProductList":t.globalData.isPerson?wx.navigateTo({url:"../product/product"}):wx.switchTab({url:"../product/product"});break;case"LynxAbout_Merchant":1==this.data.isPerson?wx.navigateTo({url:"../store/store"}):wx.switchTab({url:"../store/store"});break;case"LynxPhoto_Info_Post_Tab":wx.navigateTo({url:"../supply/supply"});break;case"LynxPhoto_H_Info_Tab_Level2":wx.navigateTo({url:"../news/news?sysTabName=LynxPhoto_H_Info_Tab_Level2&title="+a.currentTarget.dataset.title});break;case"Photo-Info-Tab-Level2":wx.navigateTo({url:"../news/news?sysTabName=Photo-Info-Tab-Level2&title="+a.currentTarget.dataset.title});break;case"Video_Gallery":wx.navigateTo({url:"../publicity/publicity"});break;case"Flexi-Form":wx.navigateTo({url:"../store/store-detail/custom/custom"});break;case"Activity":wx.navigateTo({url:"../self/mycoupon/mycoupon"});break;case"LynxApplyFor_About_Merchant":t.getMemberId()?wx.navigateTo({url:"../join/join"}):wx.navigateTo({url:"../login/login"});break;case"Activity-Group":wx.navigateTo({url:"../group/group-prolist/group-prolist"});break;case"About-Merchant":1==this.data.isPerson?wx.switchTab({url:"../about-us/about-us"}):wx.navigateTo({url:"../about-us/about-us"});break;case"Activity-Kill":wx.navigateTo({url:"../seckill/seckill"})}},getBranchList:function(){var o=this,i={appId:a.appId,customizeTabId:e.LynxAbout_Merchant,advertisement:1,current:1,level:0};t.globalData.city.cityID>0&&(i.cityId=t.globalData.city.cityID),t.globalData.city.provinceId>0&&(i.provinceId=t.globalData.city.provinceId),wx.request({url:t.globalData.comUrl+"mctab_searchBranchInfo.action",data:i,success:function(a){var e=t.getJsonData(a.data);if(e.pageList.length>0){for(var i=0;i<e.pageList.length;i++)e.pageList[i].pic1=t.modifyPicSize(e.pageList[i].pic1,"_r192x90p");o.setData({branchInfo:e.pageList,hasBranch:!0})}else o.setData({hasBranch:!1})},fail:function(a){t.hint()}})},getNewsInfo:function(o){var i=this;o.length>=1&&(i.setData({headlineImage:o[0].categoryIcon}),wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabFromL2ToL1.action",data:{appId:a.appId,customizeTabId:e["Photo-Info-Tab-Level2"],categoryId:o[0].code,current:1},success:function(a){for(var e=t.getJsonData(a.data),o=[],n=Math.ceil(e.pageList.length/2),s=0;s<n;s++)o[s]=[],o[s].push(e.pageList.slice(2*s,2*(s+1)));for(var r=0;r<e.pageList.length;r++)e.pageList[r].picture1=t.modifyPicSize(e.pageList[r].picture1,"_r140x140p");i.setData({recommendNews:e.pageList.slice(0,3),headlineArr:o})}}))},getcyNewsInfo:function(o){var i=this;o.length>=1&&(i.setData({headlineImage:o[0].categoryIcon}),wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabFromL2ToL1.action",data:{appId:a.appId,customizeTabId:e.LynxPhoto_H_Info_Tab_Level2,categoryId:o[0].code,current:1},success:function(a){for(var e=t.getJsonData(a.data),o=[],n=Math.ceil(e.pageList.length/2),s=0;s<n;s++)o[s]=[],o[s].push(e.pageList.slice(2*s,2*(s+1)));for(var r=0;r<e.pageList.length;r++)e.pageList[r].picture1=t.modifyPicSize(e.pageList[r].picture1,"_r140x140p");i.setData({entrepreneurshipList:e.pageList.slice(0,3),headlineArr:o})}}))},getcyAdList:function(){var o=this;wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabFromL2ToL1.action",data:{appId:a.appId,customizeTabId:e.LynxAdvertisingH_Photo_Info_Tab_Level1,current:1},success:function(a){var e=t.getJsonData(a.data);o.setData({adcyList:e.pageList})},fail:function(){t.hint()}})},getProCategory:function(){var o=this;wx.request({url:t.globalData.comUrl+"tabs_getAppCategoryProductByCity.action",data:{appId:a.appId,customizeTabId:e.LynxProductList,count:4,jsoncallback:"",productName:"",isGroup:t.globalData.isGroup},success:function(t){var a='{"list":'+t.data.substring(1).slice(0,-1)+"}",e=JSON.parse(a);console.log(e.list),o.setData({proList:e.list})}})},getJoinPhone:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getAboutMerchant.action",data:{customizetabId:e.LynxApplyFor_About_Merchant},success:function(e){var o=t.getJsonData(e.data);a.setData({joinPhone:o.phone})}})},getReommendProducts:function(){var o=this,n={appId:a.appId,customizeTabId:e.LynxProductList,proId:"",disId:"",productName:"",current:4,isGroup:t.globalData.isGroup};wx.request({url:t.globalData.comUrl+"tabs_getAppProductByCity.action",data:n,success:function(a){var e=t.getJsonData(a.data);i=e.pages;for(var n=0;n<e.pageList.length;n++)e.pageList[n].productModelList[0]&&String(e.pageList[n].productModelList[0].stock).length>3&&(e.pageList[n].productModelList[0].stock=String(e.pageList[n].productModelList[0].stock).substring(0,3)),String(Math.abs(e.pageList[n].quantity)).length>3&&(e.pageList[n].quantity=String(Math.abs(e.pageList[n].quantity)).substring(0,3)),String(e.pageList[n].readTimes).length>3&&(e.pageList[n].readTimes=String(e.pageList[n].readTimes).substring(0,3));o.setData({productArr:o.data.productArr.concat(e.pageList)})}})},joinPhoneCall:function(){var t=this;t.data.joinPhone&&wx.makePhoneCall({phoneNumber:t.data.joinPhone})},toSearch:function(t){wx.navigateTo({url:"../search/search?type=0"})},toPosition:function(){wx.navigateTo({url:"../position/position"})},toProductList:function(t){wx.navigateTo({url:"../product/pro-list/pro-list?bigCateCode="+t.currentTarget.dataset.code+"&title="+t.currentTarget.dataset.title})},toProductDetail:function(t){wx.navigateTo({url:"../product/pro-detail/pro-detail?productId="+t.currentTarget.dataset.pid})},toGroupActivity:function(){wx.navigateTo({url:"../group/group-prolist/group-prolist"})},toStore:function(){wx.switchTab({url:"../store/store"})},toStoreDetail:function(t){wx.navigateTo({url:"../store/store-detail/store-detail?tabContentId="+t.currentTarget.dataset.sid})},toNewsList:function(){wx.navigateTo({url:"../news/news?sysTabName=Photo-Info-Tab-Level2"})},toNewsDetail:function(t){wx.navigateTo({url:"../news/news-detail/news-detail?tabContentId="+t.currentTarget.dataset.nid+"&type=4"})},toMyCoupon:function(){wx.navigateTo({url:"../self/mycoupon/mycoupon"})},toSeckillActivity:function(){wx.navigateTo({url:"../seckill/seckill"})},formSubmit:function(t){""!=t.detail.value.branchName?""!=t.detail.value.mainProject?""!=t.detail.value.phone?""!=t.detail.value.textCon?""!=t.detail.value.email?""!=t.detail.value.project?(wx.showToast({title:"正在提交...",icon:"loading",duration:2e3,mask:!0}),setTimeout(function(){wx.showToast({title:"提交成功",icon:"success",duration:2e3,mask:!0,success:function(){}})},2e3)):this.warn("预约不能为空"):this.warn("邮箱不能为空"):this.warn("请输入您的问题描述!"):this.warn("请输入您的联系方式!!"):this.warn("请输入您的年龄!"):this.warn("请输入您的名字!")},bindDateChange:function(t){this.setData({date:t.detail.value})},warn:function(t){wx.showModal({title:"提示",content:t,showCancel:!1})},onPullDownRefresh:function(){this.setData({productArr:[],activityInfo:"",posCity:t.globalData.city.cityName}),n="",clearInterval(s);var a=this;a.getHomepageBaseInfo().then(function(){a.getHomePageTop(),a.getCustomizeTabList().then(function(){"1"==t.globalData.isGroup&&a.getActivity(),"1"==a.data.hasSeckill&&a.getSeckillActivity(),a.getHomepageAdvertise(),a.getHomepageProduct(),a.getProCategory()})}),a.getBranchList()},refresh:function(){this.setData({productArr:[],activityInfo:"",posCity:t.globalData.city.cityName}),n="",clearInterval(s);var a=this;a.getHomepageBaseInfo().then(function(){a.getHomePageTop(),a.getCustomizeTabList().then(function(){"1"==t.globalData.isGroup&&a.getActivity(),"1"==a.data.hasSeckill&&a.getSeckillActivity(),a.getHomepageAdvertise(),a.getHomepageProduct(),a.getProCategory()})}),a.getBranchList()},onReachBottom:function(){o<i&&o++},onShareAppMessage:function(){return{title:a.productName,path:"/pages/index/index",success:function(t){},fail:function(t){}}}}); 
 			}); 
		define("pages/logs/logs.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../utils/util.js");Page({data:{logs:[]},onLoad:function(){this.setData({logs:(wx.getStorageSync("logs")||[]).map(function(a){return t.formatTime(new Date(a))})})}}); 
 			}); 
		define("pages/self/acountInformation/qrCode/qrCode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{imgPath:"",sex:""},onLoad:function(){},onShow:function(){this.setData({imgPath:a.globalData.wxUserInfo.avatarUrl,sex:a.globalData.wxUserInfo.sex})},followtap:function(){wx.navigateTo({url:"../login/login"})}}); 
 			}); 
		define("pages/storeStyle1/store-detail/custom/custom.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),t="",e="",o="",i=!0;Page({data:{styleConfig:a.globalData.styleConfig,imagePath:"",storeName:"",name:"",phone:"",detail:""},takephoto:function(){var t=this;wx.chooseImage({count:1,success:function(a){var e=a.tempFilePaths[0];t.setData({imagePath:e})},fail:function(t){a.hint("上传失败")}})},onLoad:function(){},formSubmit:function(l){if(i){i=!1;var n=this,s=/^1[3|4|5|8|7][0-9]\d{4,8}$/;if(""==l.detail.value.storeName)return i=!0,void this.warn("店铺不能为空!");if(""==l.detail.value.name)return i=!0,void this.warn("姓名不能为空!");if(""==l.detail.value.phone)return i=!0,void this.warn("请输入电话号码!");if(!s.test(l.detail.value.phone))return i=!0,void this.warn("请输入正确的电话号码");wx.showToast({title:"正在提交...",icon:"loading",duration:1e4,mask:!0});var u=new Date;t="店铺,姓名,电话,描述,附图说明",e=l.detail.value.storeName+","+l.detail.value.name+","+l.detail.value.phone+","+l.detail.value.detail;var r={storeName:l.detail.value.storeName,name:l.detail.value.name,phone:l.detail.value.phone,detail:l.detail.value.detail,imagePath:this.data.imagePath,date:u.toLocaleDateString()},c=wx.getStorageSync("customArr"+a.globalData.autoId)||[];c.push(r),wx.setStorageSync("customArr"+a.globalData.autoId,c),n.data.imagePath?wx.uploadFile({url:a.globalData.comUrl+"tabs_uploadPicMina.action",filePath:n.data.imagePath,name:"file",success:function(a){var t=JSON.parse(a.data);console.log(t),"1"==t.isSuccess&&(o=t.path)},fail:function(t){a.hint("图片上传失败")},complete:function(){o?e=e+","+o:e+=",null",wx.request({url:a.globalData.comUrl+"tabs_saveFlexiForm",data:{projectId:a.globalData.projectInfo.appId,customizeTabId:a.globalData.customizeTabId["Flexi-Form"],token:"html5",fieldKey:t,fieldValue:e},success:function(a){n.setData({imagePath:"",storeName:"",name:"",phone:"",detail:""}),wx.showToast({title:"提交成功",icon:"success",duration:2e3})},fail:function(t){a.hint("提交失败"),wx.hideToast()},complete:function(){i=!0}})}}):(e+=",null",wx.request({url:a.globalData.comUrl+"tabs_saveFlexiForm",data:{projectId:a.globalData.projectInfo.appId,customizeTabId:a.globalData.customizeTabId["Flexi-Form"],token:"html5",fieldKey:t,fieldValue:e},success:function(a){n.setData({imagePath:"",storeName:"",name:"",phone:"",detail:""}),wx.showToast({title:"提交成功",icon:"success",duration:2e3})},fail:function(t){a.hint("提交失败"),wx.hideToast()},complete:function(){i=!0}}))}},formReset:function(){this.setData({imagePath:""})},warn:function(a){wx.showToast({title:a,image:"../../../../img/warn.png",duration:2e3})}}); 
 			}); 
		define("pages/storeStyle1/store-detail/location/location.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{longitude:"",latitude:"",markers:[{iconPath:"../../../../img/location.png",id:0,latitude:"",longitude:"",width:50,height:50}]},regionchange:function(t){console.log(t.type)},markertap:function(t){console.log(t.markerId)},controltap:function(t){console.log(t.controlId)},onLoad:function(t){this.setData({longitude:t.gdLongitude,latitude:t.gdLatitude,markers:[{iconPath:"../../../../img/location.png",id:0,latitude:t.gdLatitude,longitude:t.gdLongitude,width:30,height:40}]})}}); 
 			}); 
		define("pages/storeStyle1/store-detail/store-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../utils/wxParse/wxParse.js"),a=getApp(),o=a.globalData.projectInfo,e=a.globalData.customizeTabId,n="",r="",i={},s=!0,c=!0,d=1,l=1;Page({data:{storeInfo:{},productArr:[],collectStatus:"0",tapIndex:1,bottomHint:!0,isGroup:a.globalData.isGroup},onLoad:function(t){o=a.globalData.projectInfo,e=a.globalData.customizeTabId;var n=this;d=1,n.getStoreInfo(t),n.getCollectStatus()},nav_tap:function(t){var a=0;"1"==t.currentTarget.dataset.index?(a=1,this.getProductList()):a="2"==t.currentTarget.dataset.index?2:3,this.setData({tapIndex:a})},getStoreInfo:function(e){var r=this;n=e.tabContentId,wx.request({url:a.globalData.comUrl+"tabs_getSingleBranchInfo.action",data:{appId:o.appId,tabContentId:n},success:function(o){i=a.getJsonData(o.data),t.wxParse("shortDescription","html",i.shortDescription,r,5),r.setData({storeInfo:i}),wx.setNavigationBarTitle({title:i.branchName}),r.getProductList()},fail:function(t){a.hint()}})},getProductList:function(){var t=this,n=t.data.storeInfo.id;wx.request({url:a.globalData.comUrl+"tabs_getZXProductListByCategory.action",data:{appId:o.appId,customizeTabId:e.LynxProductList,current:"1",status:"2",branchInfoId:n,isGroup:a.globalData.isGroup},success:function(o){var e=a.getJsonData(o.data);l=e.pages,t.setData({productArr:e.pageList}),wx.hideToast()},fail:function(t){a.hint()}})},getMoreProduct:function(){var t=this,n=t.data.storeInfo.id;wx.request({url:a.globalData.comUrl+"tabs_getZXProductListByCategory.action",data:{appId:o.appId,customizeTabId:e.LynxProductList,current:d,status:"2",branchInfoId:n},success:function(o){var e=a.getJsonData(o.data);t.setData({productArr:t.data.productArr.concat(e.pageList)})},fail:function(t){a.hint()}})},toProDetail:function(t){wx.redirectTo({url:"../../product/pro-detail/pro-detail?productId="+t.currentTarget.dataset.pid})},collect:function(){if(0!=s){s=!1;var t=this;(r=a.getMemberId())?wx.request({url:a.globalData.comUrl+"tabs_addCollection.action",data:{appId:o.appId,memberId:r,type:2,objId:i.id,name:i.branchName,address:i.address,tell:i.tel,pic_url:i.pic1},success:function(a){t.getCollectStatus()},fail:function(t){a.hint("收藏失败")}}):(s=!0,wx.navigateTo({url:"../../login/login"}))}},cancelCollect:function(){if(0!=c){c=!1;var t=this;(r=a.getMemberId())?wx.request({url:a.globalData.comUrl+"tabs_delCollectionByObjId.action",data:{id:n,memberId:r},success:function(a){t.getCollectStatus()},fail:function(t){a.hint("取消收藏失败")}}):(c=!0,wx.navigateTo({url:"../../login/login"}))}},getCollectStatus:function(){if(r=a.getMemberId()){var t=this;wx.request({url:a.globalData.comUrl+"tabs_checkCollection.action",data:{appId:o.appId,memberId:r,id:n},success:function(o){var e=a.getJsonData(o.data);t.setData({collectStatus:e.isExisted})},fail:function(t){a.hint()},complete:function(){c=!0,s=!0}})}},phonecall:function(){var t=this.data.storeInfo.phone;wx.makePhoneCall({phoneNumber:t})},locationtap:function(){var t=this,a=t.data.storeInfo.gdLatitude;a=(1*a).toFixed(6);var o=t.data.storeInfo.gdLongitude;o=(1*o).toFixed(6),wx.openLocation({latitude:parseFloat(a),longitude:parseFloat(o),name:t.data.storeInfo.branchName,address:t.data.storeInfo.address,scale:28})},customtap:function(){wx.navigateTo({url:"custom/custom"})},onReachBottom:function(){d<l?(d++,this.getMoreProduct()):d>1&&(this.data.productArr.length>1?this.setData({bottomHint:!1}):this.setData({bottomHint:!0}))},onShareAppMessage:function(){var t=this;return{title:t.data.storeInfo.branchName,path:"/pages/store/store-detail/store-detail?tabContentId="+t.data.storeInfo.id,success:function(t){},fail:function(t){}}}}); 
 			}); 
		define("pages/storeStyle1/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var a,e=getApp(),o=e.globalData.projectInfo,r=e.globalData.customizeTabId,s=1,n=1;Page({data:(a={styleConfig:e.globalData.styleConfig,adArr:[],storeArr:[],show:!1,bCate_code:0,smCate_code:0,provinceId:-1,cityId:-1,categoryId:-1,level:0,bigCategory:[],showBigCate:!1,smallCategory:[],showSmallCate:!0,provinceArr:[],cityArr:[],showProvince:!1,showCity:!1},t(a,"show",!1),t(a,"noStore",!0),t(a,"bottomHint",!0),a),onLoad:function(){wx.showToast({title:"加载中...",icon:"loading",duration:1e4,mask:!0});var t=this;t.storeInfo(),t.getBigCategory()},toSearch:function(t){wx.navigateTo({url:"../search/search?type=1"})},menutap:function(){this.setData({show:!this.data.show})},confirm:function(){this.setData({storeArr:[],adArr:[],noStore:!0,bottomHint:!0}),s=1,this.setData({show:!this.data.show}),this.storeInfo()},storeInfo:function(){var t=this,a={appId:o.appId,customizeTabId:r.LynxAbout_Merchant,advertisement:1,current:s};t.data.level>0&&(a.level=t.data.level),t.data.provinceId>0&&(a.provinceId=t.data.provinceId),t.data.cityId>0&&(a.cityId=t.data.cityId),t.data.categoryId>0&&(a.categoryId=t.data.categoryId);try{wx.request({url:e.globalData.comUrl+"mctab_searchBranchInfo.action",data:a,success:function(a){var o=e.getJsonData(a.data);n=o.pages;for(var r=0;r<o.pageList.length;r++)o.pageList[r].isAdvertisement&&t.data.adArr.push(o.pageList[r]),o.pageList[r].pic1=e.modifyPicSize(o.pageList[r].pic1,"_rx160p");t.setData({storeArr:t.data.storeArr.concat(o.pageList),bottomHint:!0}),1==s&&t.setData({adArr:t.data.adArr}),0==t.data.storeArr.length?t.setData({noStore:!1}):t.setData({noStore:!0}),wx.hideToast(),wx.stopPullDownRefresh()},fail:function(t){e.hint()}})}catch(t){e.hint(t)}},onReachBottom:function(){s<n?(s++,this.storeInfo()):s>1&&(this.data.storeArr.length>1?this.setData({bottomHint:!1}):this.setData({bottomHint:!0}))},onPullDownRefresh:function(){this.reset()},getBigCategory:function(){var t=this;wx.request({url:e.globalData.comUrl+"tabs_getPhotoInfoTabCategory.action",data:{appId:o.appId,customizeTabId:r.LynxAbout_Merchant},success:function(a){var o=e.getJsonData(a.data);t.setData({bigCategory:o})},fail:function(t){e.hint("获取大类失败")}})},bigCate_unfold:function(){this.setData({showBigCate:!this.data.showBigCate})},getSmallCategory:function(t){var a=this;a.setData({bCate_code:t.currentTarget.dataset.code,categoryId:t.currentTarget.dataset.code}),wx.request({url:e.globalData.comUrl+"tabs_getPhotoInfoTabCategoryFromL1toL2.action",data:{appId:o.appId,customizeTabId:r.LynxAbout_Merchant,categoryCode:t.currentTarget.dataset.code},success:function(t){var o=e.getJsonData(t.data);a.setData({smallCategory:o,showSmallCate:!1}),s=1,a.setData({level:1})},fail:function(t){e.hint()}})},smCateTap:function(t){0!=t.currentTarget.dataset.code?this.setData({level:"",smCate_code:t.currentTarget.dataset.code,categoryId:t.currentTarget.dataset.code}):this.setData({level:1,smCate_code:t.currentTarget.dataset.code,categoryId:this.data.bCate_code})},getProvinceInfo:function(){var t=this;wx.request({url:e.globalData.comUrl+"mctab_getBranchProvinces.action",data:{appId:o.appId,customizeTabId:r.LynxAbout_Merchant},success:function(a){var o=e.getJsonData(a.data);t.setData({provinceArr:o})},fail:function(t){e.hint()}})},getCityInfo:function(t){var a=this;a.setData({provinceId:t.currentTarget.dataset.proid}),"0"==t.currentTarget.dataset.proid?(s=1,a.setData({provinceId:"",cityId:"",showCity:!1})):wx.request({url:e.globalData.comUrl+"mctab_getBranchCitys.action",data:{appId:o.appId,customizeTabId:r.LynxAbout_Merchant,provinceId:t.currentTarget.dataset.proid},success:function(t){var o=e.getJsonData(t.data);a.setData({cityArr:o,showCity:!0})},fail:function(t){e.hint()}})},citytap:function(t){"0"==t.currentTarget.dataset.cityid?this.setData({cityId:""}):this.setData({cityId:t.currentTarget.dataset.cityid}),s=1},prov_unfold:function(){this.setData({showProvince:!this.data.showProvince}),this.getProvinceInfo()},reset:function(){s=1,n=1,this.setData({adArr:[],storeArr:[],showBigCate:!1,showSmallCate:!1,showProvince:!1,showCity:!1,bottomHint:!0,bCate_code:0,smCate_code:0,provinceId:-1,cityId:-1,categoryId:-1,level:0}),this.storeInfo()},onShareAppMessage:function(){return{title:"商铺",path:"/pages/store/store",success:function(t){},fail:function(t){}}}}); 
 			}); 
		define("pages/storeStyle2/store-detail/custom/custom.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),t="",e="",o="",i=!0;Page({data:{styleConfig:a.globalData.styleConfig,imagePath:"",storeName:"",name:"",phone:"",detail:""},takephoto:function(){var t=this;wx.chooseImage({count:1,success:function(a){var e=a.tempFilePaths[0];t.setData({imagePath:e})},fail:function(t){a.hint("上传失败")}})},onLoad:function(){},formSubmit:function(l){if(i){i=!1;var n=this,s=/^1[3|4|5|8|7][0-9]\d{4,8}$/;if(""==l.detail.value.storeName)return i=!0,void this.warn("店铺不能为空!");if(""==l.detail.value.name)return i=!0,void this.warn("姓名不能为空!");if(""==l.detail.value.phone)return i=!0,void this.warn("请输入电话号码!");if(!s.test(l.detail.value.phone))return i=!0,void this.warn("请输入正确的电话号码");wx.showToast({title:"正在提交...",icon:"loading",duration:1e4,mask:!0});var u=new Date;t="店铺,姓名,电话,描述,附图说明",e=l.detail.value.storeName+","+l.detail.value.name+","+l.detail.value.phone+","+l.detail.value.detail;var r={storeName:l.detail.value.storeName,name:l.detail.value.name,phone:l.detail.value.phone,detail:l.detail.value.detail,imagePath:this.data.imagePath,date:u.toLocaleDateString()},c=wx.getStorageSync("customArr"+a.globalData.autoId)||[];c.push(r),wx.setStorageSync("customArr"+a.globalData.autoId,c),n.data.imagePath?wx.uploadFile({url:a.globalData.comUrl+"tabs_uploadPicMina.action",filePath:n.data.imagePath,name:"file",success:function(a){var t=JSON.parse(a.data);console.log(t),"1"==t.isSuccess&&(o=t.path)},fail:function(t){a.hint("图片上传失败")},complete:function(){o?e=e+","+o:e+=",null",wx.request({url:a.globalData.comUrl+"tabs_saveFlexiForm",data:{projectId:a.globalData.projectInfo.appId,customizeTabId:a.globalData.customizeTabId["Flexi-Form"],token:"html5",fieldKey:t,fieldValue:e},success:function(a){n.setData({imagePath:"",storeName:"",name:"",phone:"",detail:""}),wx.showToast({title:"提交成功",icon:"success",duration:2e3})},fail:function(t){a.hint("提交失败"),wx.hideToast()},complete:function(){i=!0}})}}):(e+=",null",wx.request({url:a.globalData.comUrl+"tabs_saveFlexiForm",data:{projectId:a.globalData.projectInfo.appId,customizeTabId:a.globalData.customizeTabId["Flexi-Form"],token:"html5",fieldKey:t,fieldValue:e},success:function(a){n.setData({imagePath:"",storeName:"",name:"",phone:"",detail:""}),wx.showToast({title:"提交成功",icon:"success",duration:2e3})},fail:function(t){a.hint("提交失败"),wx.hideToast()},complete:function(){i=!0}}))}},formReset:function(){this.setData({imagePath:""})},warn:function(a){wx.showToast({title:a,image:"../../../../img/warn.png",duration:2e3})}}); 
 			}); 
		define("pages/storeStyle2/store-detail/location/location.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{longitude:"",latitude:"",markers:[{iconPath:"../../../../img/location.png",id:0,latitude:"",longitude:"",width:50,height:50}]},regionchange:function(t){console.log(t.type)},markertap:function(t){console.log(t.markerId)},controltap:function(t){console.log(t.controlId)},onLoad:function(t){this.setData({longitude:t.gdLongitude,latitude:t.gdLatitude,markers:[{iconPath:"../../../../img/location.png",id:0,latitude:t.gdLatitude,longitude:t.gdLongitude,width:30,height:40}]})}}); 
 			}); 
		define("pages/storeStyle2/store-detail/store-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../utils/wxParse/wxParse.js"),a=getApp(),o=a.globalData.projectInfo,e=a.globalData.customizeTabId,n="",r="",i={},s=!0,c=!0,d=1,l=1;Page({data:{storeInfo:{},productArr:[],collectStatus:"0",tapIndex:1,bottomHint:!0,isGroup:a.globalData.isGroup},onLoad:function(t){o=a.globalData.projectInfo,e=a.globalData.customizeTabId;var n=this;d=1,n.getStoreInfo(t),n.getCollectStatus()},nav_tap:function(t){var a=0;"1"==t.currentTarget.dataset.index?(a=1,this.getProductList()):a="2"==t.currentTarget.dataset.index?2:3,this.setData({tapIndex:a})},getStoreInfo:function(e){var r=this;n=e.tabContentId,wx.request({url:a.globalData.comUrl+"tabs_getSingleBranchInfo.action",data:{appId:o.appId,tabContentId:n},success:function(o){i=a.getJsonData(o.data),t.wxParse("shortDescription","html",i.shortDescription,r,5),r.setData({storeInfo:i}),wx.setNavigationBarTitle({title:i.branchName}),r.getProductList()},fail:function(t){a.hint()}})},getProductList:function(){var t=this,n=t.data.storeInfo.id;wx.request({url:a.globalData.comUrl+"tabs_getZXProductListByCategory.action",data:{appId:o.appId,customizeTabId:e.LynxProductList,current:"1",status:"2",branchInfoId:n,isGroup:a.globalData.isGroup},success:function(o){var e=a.getJsonData(o.data);l=e.pages,t.setData({productArr:e.pageList}),wx.hideToast()},fail:function(t){a.hint()}})},getMoreProduct:function(){var t=this,n=t.data.storeInfo.id;wx.request({url:a.globalData.comUrl+"tabs_getZXProductListByCategory.action",data:{appId:o.appId,customizeTabId:e.LynxProductList,current:d,status:"2",branchInfoId:n},success:function(o){var e=a.getJsonData(o.data);t.setData({productArr:t.data.productArr.concat(e.pageList)})},fail:function(t){a.hint()}})},toProDetail:function(t){wx.redirectTo({url:"../../product/pro-detail/pro-detail?productId="+t.currentTarget.dataset.pid})},collect:function(){if(0!=s){s=!1;var t=this;(r=a.getMemberId())?wx.request({url:a.globalData.comUrl+"tabs_addCollection.action",data:{appId:o.appId,memberId:r,type:2,objId:i.id,name:i.branchName,address:i.address,tell:i.tel,pic_url:i.pic1},success:function(a){t.getCollectStatus()},fail:function(t){a.hint("收藏失败")}}):(s=!0,wx.navigateTo({url:"../../login/login"}))}},cancelCollect:function(){if(0!=c){c=!1;var t=this;(r=a.getMemberId())?wx.request({url:a.globalData.comUrl+"tabs_delCollectionByObjId.action",data:{id:n,memberId:r},success:function(a){t.getCollectStatus()},fail:function(t){a.hint("取消收藏失败")}}):(c=!0,wx.navigateTo({url:"../../login/login"}))}},getCollectStatus:function(){if(r=a.getMemberId()){var t=this;wx.request({url:a.globalData.comUrl+"tabs_checkCollection.action",data:{appId:o.appId,memberId:r,id:n},success:function(o){var e=a.getJsonData(o.data);t.setData({collectStatus:e.isExisted})},fail:function(t){a.hint()},complete:function(){c=!0,s=!0}})}},phonecall:function(){var t=this.data.storeInfo.phone;wx.makePhoneCall({phoneNumber:t})},locationtap:function(){var t=this,a=t.data.storeInfo.gdLatitude;a=(1*a).toFixed(6);var o=t.data.storeInfo.gdLongitude;o=(1*o).toFixed(6),wx.openLocation({latitude:parseFloat(a),longitude:parseFloat(o),name:t.data.storeInfo.branchName,address:t.data.storeInfo.address,scale:28})},customtap:function(){wx.navigateTo({url:"custom/custom"})},onReachBottom:function(){d<l?(d++,this.getMoreProduct()):d>1&&(this.data.productArr.length>1?this.setData({bottomHint:!1}):this.setData({bottomHint:!0}))},onShareAppMessage:function(){var t=this;return{title:t.data.storeInfo.branchName,path:"/pages/store/store-detail/store-detail?tabContentId="+t.data.storeInfo.id,success:function(t){},fail:function(t){}}}}); 
 			}); 
		define("pages/storeStyle2/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var a,e=getApp(),o=e.globalData.projectInfo,r=e.globalData.customizeTabId,s=1,n=1;Page({data:(a={styleConfig:e.globalData.styleConfig,adArr:[],storeArr:[],show:!1,bCate_code:0,smCate_code:0,provinceId:-1,cityId:-1,categoryId:-1,level:0,bigCategory:[],showBigCate:!1,smallCategory:[],showSmallCate:!0,provinceArr:[],cityArr:[],showProvince:!1,showCity:!1},t(a,"show",!1),t(a,"noStore",!0),t(a,"bottomHint",!0),a),onLoad:function(){e.loginVzSystem(),wx.showToast({title:"加载中...",icon:"loading",duration:1e4,mask:!0});var t=this;t.storeInfo(),t.getBigCategory()},toSearch:function(t){wx.navigateTo({url:"../search/search?type=1"})},menutap:function(){this.setData({show:!this.data.show})},confirm:function(){this.setData({storeArr:[],adArr:[],noStore:!0,bottomHint:!0}),s=1,this.setData({show:!this.data.show}),this.storeInfo()},storeInfo:function(){var t=this,a={appId:o.appId,customizeTabId:r.LynxAbout_Merchant,advertisement:1,current:s};t.data.level>0&&(a.level=t.data.level),t.data.provinceId>0&&(a.provinceId=t.data.provinceId),t.data.cityId>0&&(a.cityId=t.data.cityId),t.data.categoryId>0&&(a.categoryId=t.data.categoryId);try{wx.request({url:e.globalData.comUrl+"mctab_searchBranchInfo.action",data:a,success:function(a){var o=e.getJsonData(a.data);n=o.pages;for(var r=0;r<o.pageList.length;r++)o.pageList[r].isAdvertisement&&t.data.adArr.push(o.pageList[r]),o.pageList[r].pic1=e.modifyPicSize(o.pageList[r].pic1,"_rx300p");t.setData({storeArr:t.data.storeArr.concat(o.pageList),bottomHint:!0}),1==s&&t.setData({adArr:t.data.adArr}),0==t.data.storeArr.length?t.setData({noStore:!1}):t.setData({noStore:!0}),wx.hideToast(),wx.stopPullDownRefresh()},fail:function(t){e.hint()}})}catch(t){e.hint(t)}},onReachBottom:function(){s<n?(s++,this.storeInfo()):s>1&&(this.data.storeArr.length>1?this.setData({bottomHint:!1}):this.setData({bottomHint:!0}))},onPullDownRefresh:function(){this.reset()},getBigCategory:function(){var t=this;wx.request({url:e.globalData.comUrl+"tabs_getPhotoInfoTabCategory.action",data:{appId:o.appId,customizeTabId:r.LynxAbout_Merchant},success:function(a){var o=e.getJsonData(a.data);t.setData({bigCategory:o})},fail:function(t){e.hint("获取大类失败")}})},bigCate_unfold:function(){this.setData({showBigCate:!this.data.showBigCate})},getSmallCategory:function(t){var a=this;a.setData({bCate_code:t.currentTarget.dataset.code,categoryId:t.currentTarget.dataset.code}),wx.request({url:e.globalData.comUrl+"tabs_getPhotoInfoTabCategoryFromL1toL2.action",data:{appId:o.appId,customizeTabId:r.LynxAbout_Merchant,categoryCode:t.currentTarget.dataset.code},success:function(t){var o=e.getJsonData(t.data);a.setData({smallCategory:o,showSmallCate:!1}),s=1,a.setData({level:1})},fail:function(t){e.hint()}})},smCateTap:function(t){0!=t.currentTarget.dataset.code?this.setData({level:"",smCate_code:t.currentTarget.dataset.code,categoryId:t.currentTarget.dataset.code}):this.setData({level:1,smCate_code:t.currentTarget.dataset.code,categoryId:this.data.bCate_code})},getProvinceInfo:function(){var t=this;wx.request({url:e.globalData.comUrl+"mctab_getBranchProvinces.action",data:{appId:o.appId,customizeTabId:r.LynxAbout_Merchant},success:function(a){var o=e.getJsonData(a.data);t.setData({provinceArr:o})},fail:function(t){e.hint()}})},getCityInfo:function(t){var a=this;a.setData({provinceId:t.currentTarget.dataset.proid}),"0"==t.currentTarget.dataset.proid?(s=1,a.setData({provinceId:"",cityId:"",showCity:!1})):wx.request({url:e.globalData.comUrl+"mctab_getBranchCitys.action",data:{appId:o.appId,customizeTabId:r.LynxAbout_Merchant,provinceId:t.currentTarget.dataset.proid},success:function(t){var o=e.getJsonData(t.data);a.setData({cityArr:o,showCity:!0})},fail:function(t){e.hint()}})},citytap:function(t){"0"==t.currentTarget.dataset.cityid?this.setData({cityId:""}):this.setData({cityId:t.currentTarget.dataset.cityid}),s=1},prov_unfold:function(){this.setData({showProvince:!this.data.showProvince}),this.getProvinceInfo()},reset:function(){s=1,n=1,this.setData({adArr:[],storeArr:[],showBigCate:!1,showSmallCate:!1,showProvince:!1,showCity:!1,bottomHint:!0,bCate_code:0,smCate_code:0,provinceId:-1,cityId:-1,categoryId:-1,level:0}),this.storeInfo()},onShareAppMessage:function(){return{title:"商铺",path:"/pages/store/store",success:function(t){},fail:function(t){}}}}); 
 			}); 
		define("theme-config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e={custom:{name:"custom",mainColor:"#3388FF",foregroundColor:"#FFFFFF",mainColorHighlight:"#1571FA",mainRGB:{r:51,g:136,b:255},tabbarTextColor:"grey",tabbarTextSelectedColor:"#c471e7",tabbarBackgroundColor:"#FFF",tabSelectIconKey:"tab_blue",navigationBarBackgroundColor:"#3388FF",navigationBarTextStyle:"white",backgroundTextStyle:"dark",isWhite:!0,remark:"自定义的风格"},rab_blue:{name:"rab_blue",mainColor:"#3388FF",foregroundColor:"white",mainColorHighlight:"#1571FA",mainRGB:{r:51,g:136,b:255},tabSelectIconKey:"tab_blue",navigationBarTextStyle:"white",remark:"通用蓝色风格"},blue_green:{name:"blue_green",mainColor:"#54B8AF",foregroundColor:"white",mainColorHighlight:"#1571FA",mainRGB:{r:84,g:174,b:175},tabSelectIconKey:"tab_blue_green",navigationBarTextStyle:"white",remark:"通用蓝绿色风格"},blue_new:{name:"blue_new",mainColor:"#80B8F9",foregroundColor:"white",mainColorHighlight:"#91C2F8",mainRGB:{r:128,g:184,b:249},tabSelectIconKey:"tab_blue_new",navigationBarTextStyle:"white",remark:"通用蓝色风格2"},brown:{name:"brown",mainColor:"#9A700C",foregroundColor:"white",mainColorHighlight:"#91C2F8",mainRGB:{r:154,g:112,b:12},tabSelectIconKey:"tab_brown",navigationBarTextStyle:"white",remark:"通用深棕色风格"},brownDark:{name:"brownDark",mainColor:"#503518",foregroundColor:"white",mainColorHighlight:"#8D6D54",mainRGB:{r:80,g:53,b:24},tabSelectIconKey:"tab_brownDark",navigationBarTextStyle:"white",remark:"通用棕色风格深色"},brownLight:{name:"brownLight",mainColor:"#D8B98A",foregroundColor:"white",mainColorHighlight:"#8D6D54",mainRGB:{r:216,g:185,b:138},tabSelectIconKey:"tab_brownLight",navigationBarTextStyle:"white",remark:"通用棕色风格浅色"},dark_blue:{name:"dark_blue",mainColor:"#151f52",foregroundColor:"white",mainColorHighlight:"#4a65bb",mainRGB:{r:21,g:31,b:82},tabSelectIconKey:"tab_dark_blue",navigationBarTextStyle:"white",remark:"通用蓝色风格深色"},green:{name:"green",mainColor:"#73B448",foregroundColor:"white",mainColorHighlight:"#8BC267",mainRGB:{r:115,g:180,b:72},tabSelectIconKey:"tab_green",navigationBarTextStyle:"white",remark:"通用绿色风格"},orange:{name:"orange",mainColor:"#FF903C",foregroundColor:"white",mainColorHighlight:"#DD6408",mainRGB:{r:255,g:144,b:60},tabSelectIconKey:"tab_orange",navigationBarTextStyle:"white",remark:"通用橙色风格"},rose:{name:"rose",mainColor:"#E272A7",foregroundColor:"white",mainColorHighlight:"#E58AB5",mainRGB:{r:226,g:114,b:167},tabSelectIconKey:"tab_pink",navigationBarTextStyle:"white",remark:"通用玫红色风格"},pink:{name:"pink",mainColor:"#f78ea5",foregroundColor:"white",mainColorHighlight:"#e5b9ca",mainRGB:{r:247,g:142,b:165},tabSelectIconKey:"tab_pink",navigationBarTextStyle:"white",remark:"通用粉色风格"},red:{name:"red",mainColor:"#E50029",foregroundColor:"white",mainColorHighlight:"#AC3B39",mainRGB:{r:221,g:0,b:41},tabSelectIconKey:"tab_red",navigationBarTextStyle:"white",remark:"通用红色风格"},violet:{name:"violet",mainColor:"#c492e6",foregroundColor:"white",mainColorHighlight:"#6D5CFA",mainRGB:{r:196,g:146,b:230},tabSelectIconKey:"tab_violet",navigationBarTextStyle:"white",remark:"通用紫色风格"},deeppurple:{name:"deeppurple",mainColor:"#981064",foregroundColor:"white",mainColorHighlight:"#E557AF",mainRGB:{r:152,g:16,b:100},tabSelectIconKey:"tab_deeppurple",navigationBarTextStyle:"white",remark:"通用深紫色风格"},yellow:{name:"yellow",mainColor:"#E9C330",foregroundColor:"white",mainColorHighlight:"#AC3B39",mainRGB:{r:233,g:195,b:48},tabSelectIconKey:"tab_yellow",navigationBarTextStyle:"white",remark:"通用黄色风格"},white_in_red:{name:"white_in_red",isWhite:!0,mainColor:"#E50029",foregroundColor:"white",mainColorHighlight:"#AC3B39",mainRGB:{r:221,g:0,b:41},tabSelectIconKey:"tab_red",navigationBarBackgroundColor:"#FFF",navigationBarTextStyle:"black",remark:"通用红白风格"},enterprise_purple:{name:"enterprise_purple",mainColor:"#5143a6",tabbarTextColor:"#a8a1d3",foregroundColor:"white",mainColorHighlight:"#9a8de0",mainRGB:{r:196,g:146,b:230},navigationBarTextStyle:"black",remark:"企业版专用蓝紫色风格"},enterprise_dark_blue:{name:"enterprise_dark_blue",mainColor:"#151f52",tabbarTextColor:"#8387a3",foregroundColor:"white",mainColorHighlight:"#4a65bb",mainRGB:{r:21,g:31,b:82},navigationBarTextStyle:"black",remark:"企业版专用深蓝色风格"},enterprise_grey:{name:"enterprise_grey",mainColor:"#222",tabbarTextColor:"#999",foregroundColor:"white",mainColorHighlight:"#666",mainRGB:{r:2,g:2,b:2},navigationBarTextStyle:"black",remark:"企业版专用高级灰风格"},enterprise_doderBlue:{name:"enterprise_doderBlue",mainColor:"#1E90FF",tabbarTextColor:"#89c2ff",foregroundColor:"white",mainColorHighlight:"#666",mainRGB:{r:30,g:144,b:255},navigationBarTextStyle:"black",remark:"企业版专用道奇蓝风格"},enterprise_dark_cyan:{name:"enterprise_dark_cyan",mainColor:"#008B8B",tabbarTextColor:"#78c2c0",foregroundColor:"white",mainColorHighlight:"#666",mainRGB:{r:0,g:139,b:139},navigationBarTextStyle:"black",remark:"企业版专用深青色风格"},enterprise_forest_green:{name:"enterprise_forest_green",mainColor:"#228B22",tabbarTextColor:"#8bc38a",foregroundColor:"white",mainColorHighlight:"#666",mainRGB:{r:34,g:139,b:34},navigationBarTextStyle:"black",remark:"企业版专用森林绿风格"},enterprise_tomato:{name:"enterprise_tomato",mainColor:"#FF6347",tabbarTextColor:"#fdaa9d",foregroundColor:"white",mainColorHighlight:"#666",mainRGB:{r:255,g:99,b:71},navigationBarTextStyle:"black",remark:"企业版专用番茄色风格"},enterprise_dark_voilet:{name:"enterprise_dark_voilet",mainColor:"#9400D3",tabbarTextColor:"#c471e7",foregroundColor:"white",mainColorHighlight:"#666",mainRGB:{r:148,g:0,b:211},navigationBarTextStyle:"black",remark:"企业版专用深紫色风格"}};module.exports=e; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return(t=t.toString())[1]?t:"0"+t}module.exports={formatTime:function(e){var n=e.getFullYear(),o=e.getMonth()+1,r=e.getDate(),u=e.getHours(),i=e.getMinutes(),g=e.getSeconds();return[n,o,r].map(t).join("/")+" "+[u,i,g].map(t).join(":")}}; 
 			}); 
		define("utils/wxParse/html2json.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){for(var t={},r=e.split(","),s=0;s<r.length;s++)t[r[s]]=!0;return t}function t(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<.*!doctype.*\>\n/,"").replace(/<.*!DOCTYPE.*\>\n/,"")}function r(e){var t=[];if(0==a.length||!n)return(d={}).node="text",d.text=e,s=[d];e=e.replace(/\[([^\[\]]+)\]/g,":$1:");for(var r=new RegExp("[:]"),s=e.split(r),i=0;i<s.length;i++){var l=s[i],d={};n[l]?(d.node="element",d.tag="emoji",d.text=n[l],d.baseSrc=o):(d.node="text",d.text=l),t.push(d)}return t}var s="https",a="",o="",n={},i=require("./wxDiscode.js"),l=require("./htmlparser.js"),d=(e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),e("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")),c=e("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),u=e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),e("wxxxcode-style,script,style,view,scroll-view,block");module.exports={html2json:function(e,a){e=t(e),e=i.strDiscode(e);var o=[],n={node:a,nodes:[],images:[],imageUrls:[]};return l(e,{start:function(e,t,r){var l={node:"element",tag:e};if(d[e]?l.tagType="block":c[e]?l.tagType="inline":u[e]&&(l.tagType="closeSelf"),0!==t.length&&(l.attr=t.reduce(function(e,t){var r=t.name,s=t.value;return"class"==r&&(l.classStr=s),"style"==r&&(l.styleStr=s),s.match(/ /)&&(s=s.split(" ")),e[r]?Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]:e[r]=s,e},{})),"img"===l.tag){l.imgIndex=n.images.length;var p=l.attr.src;p=i.urlToHttpUrl(p,s),l.attr.src=p,l.from=a,n.images.push(l),n.imageUrls.push(p)}if("font"===l.tag){var m=["x-small","small","medium","large","x-large","xx-large","-webkit-xxx-large"],f={color:"color",face:"font-family",size:"font-size"};l.attr.style||(l.attr.style=[]),l.styleStr||(l.styleStr="");for(var h in f)if(l.attr[h]){var g="size"===h?m[l.attr[h]-1]:l.attr[h];l.attr.style.push(f[h]),l.attr.style.push(g),l.styleStr+=f[h]+": "+g+";"}}if("source"===l.tag&&(n.source=l.attr.src),r){var v=o[0]||n;void 0===v.nodes&&(v.nodes=[]),v.nodes.push(l)}else o.unshift(l)},end:function(e){var t=o.shift();if(t.tag!==e&&console.error("invalid state: mismatch end tag"),"video"===t.tag&&n.source&&(t.attr.src=n.source,delete result.source),0===o.length)n.nodes.push(t);else{var r=o[0];void 0===r.nodes&&(r.nodes=[]),r.nodes.push(t)}},chars:function(e){var t={node:"text",text:e,textArray:r(e)};if(0===o.length)n.nodes.push(t);else{var s=o[0];void 0===s.nodes&&(s.nodes=[]),s.nodes.push(t)}},comment:function(e){}}),n},emojisInit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/wxParse/emojis/",r=arguments[2];a=e,o=t,n=r}}; 
 			}); 
		define("utils/wxParse/htmlparser.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){for(var t={},r=e.split(","),s=0;s<r.length;s++)t[r[s]]=!0;return t}var t=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,r=/^<\/([-A-Za-z0-9_]+)[^>]*>/,s=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,a=e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),n=e("a,address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),i=e("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),o=e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),l=e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),c=e("wxxxcode-style,script,style,view,scroll-view,block");module.exports=function(e,d){function f(e,t){if(t)for(t=t.toLowerCase(),r=b.length-1;r>=0&&b[r]!=t;r--);else var r=0;if(r>=0){for(var s=b.length-1;s>=r;s--)d.end&&d.end(b[s]);b.length=r}}var p,u,h,b=[],m=e;for(b.last=function(){return this[this.length-1]};e;){if(u=!0,b.last()&&c[b.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+b.last()+"[^>]*>"),function(e,t){return t=t.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),d.chars&&d.chars(t),""}),f(0,b.last());else if(0==e.indexOf("\x3c!--")?(p=e.indexOf("--\x3e"))>=0&&(d.comment&&d.comment(e.substring(4,p)),e=e.substring(p+3),u=!1):0==e.indexOf("</")?(h=e.match(r))&&(e=e.substring(h[0].length),h[0].replace(r,f),u=!1):0==e.indexOf("<")&&(h=e.match(t))&&(e=e.substring(h[0].length),h[0].replace(t,function(e,t,r,c){if(t=t.toLowerCase(),n[t])for(;b.last()&&i[b.last()];)f(0,b.last());if(o[t]&&b.last()==t&&f(0,t),(c=a[t]||!!c)||b.push(t),d.start){var p=[];r.replace(s,function(e,t){var r=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:l[t]?t:"";p.push({name:t,value:r,escaped:r.replace(/(^|[^\\])"/g,'$1\\"')})}),d.start&&d.start(t,p,c)}}),u=!1),u){p=e.indexOf("<");for(var g="";0===p;)g+="<",p=(e=e.substring(1)).indexOf("<");g+=p<0?e:e.substring(0,p),e=p<0?"":e.substring(p),d.chars&&d.chars(g)}if(e==m)throw"Parse Error: "+e;m=e}f()}; 
 			}); 
		define("utils/wxParse/showdown.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){var r={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Specify a prefix to generated header ids",type:"string"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,description:"Tries to smartly fix identation in es6 strings",type:"boolean"}};if(!1===e)return JSON.parse(JSON.stringify(r));var t={};for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n].defaultValue);return t}function r(e,r){var t=r?"Error in "+r+" extension->":"Error in unnamed extension",a={valid:!0,error:""};s.helper.isArray(e)||(e=[e]);for(var o=0;o<e.length;++o){var i=t+" sub-extension "+o+": ",l=e[o];if("object"!==(void 0===l?"undefined":n(l)))return a.valid=!1,a.error=i+"must be an object, but "+(void 0===l?"undefined":n(l))+" given",a;if(!s.helper.isString(l.type))return a.valid=!1,a.error=i+'property "type" must be a string, but '+n(l.type)+" given",a;var c=l.type=l.type.toLowerCase();if("language"===c&&(c=l.type="lang"),"html"===c&&(c=l.type="output"),"lang"!==c&&"output"!==c&&"listener"!==c)return a.valid=!1,a.error=i+"type "+c+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',a;if("listener"===c){if(s.helper.isUndefined(l.listeners))return a.valid=!1,a.error=i+'. Extensions of type "listener" must have a property called "listeners"',a}else if(s.helper.isUndefined(l.filter)&&s.helper.isUndefined(l.regex))return a.valid=!1,a.error=i+c+' extensions must define either a "regex" property or a "filter" method',a;if(l.listeners){if("object"!==n(l.listeners))return a.valid=!1,a.error=i+'"listeners" property must be an object but '+n(l.listeners)+" given",a;for(var u in l.listeners)if(l.listeners.hasOwnProperty(u)&&"function"!=typeof l.listeners[u])return a.valid=!1,a.error=i+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+u+" must be a function but "+n(l.listeners[u])+" given",a}if(l.filter){if("function"!=typeof l.filter)return a.valid=!1,a.error=i+'"filter" must be a function, but '+n(l.filter)+" given",a}else if(l.regex){if(s.helper.isString(l.regex)&&(l.regex=new RegExp(l.regex,"g")),!l.regex instanceof RegExp)return a.valid=!1,a.error=i+'"regex" property must either be a string or a RegExp object, but '+n(l.regex)+" given",a;if(s.helper.isUndefined(l.replace))return a.valid=!1,a.error=i+'"regex" extensions must implement a replace string or function',a}}return a}function t(e,r){return"~E"+r.charCodeAt(0)+"E"}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s={},a={},o={},i=e(!0),l={github:{omitExtraWLInCodeBlocks:!0,prefixHeaderId:"user-content-",simplifiedAutoLink:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0},vanilla:e(!0)};s.helper={},s.extensions={},s.setOption=function(e,r){return i[e]=r,this},s.getOption=function(e){return i[e]},s.getOptions=function(){return i},s.resetOptions=function(){i=e(!0)},s.setFlavor=function(e){if(l.hasOwnProperty(e)){var r=l[e];for(var t in r)r.hasOwnProperty(t)&&(i[t]=r[t])}},s.getDefaultOptions=function(r){return e(r)},s.subParser=function(e,r){if(s.helper.isString(e)){if(void 0===r){if(a.hasOwnProperty(e))return a[e];throw Error("SubParser named "+e+" not registered!")}a[e]=r}},s.extension=function(e,t){if(!s.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=s.helper.stdExtName(e),s.helper.isUndefined(t)){if(!o.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return o[e]}"function"==typeof t&&(t=t()),s.helper.isArray(t)||(t=[t]);var n=r(t,e);if(!n.valid)throw Error(n.error);o[e]=t},s.getAllExtensions=function(){return o},s.removeExtension=function(e){delete o[e]},s.resetExtensions=function(){o={}},s.validateExtension=function(e){var t=r(e,null);return!!t.valid||(console.warn(t.error),!1)},s.hasOwnProperty("helper")||(s.helper={}),s.helper.isString=function(e){return"string"==typeof e||e instanceof String},s.helper.isFunction=function(e){var r={};return e&&"[object Function]"===r.toString.call(e)},s.helper.forEach=function(e,r){if("function"==typeof e.forEach)e.forEach(r);else for(var t=0;t<e.length;t++)r(e[t],t,e)},s.helper.isArray=function(e){return e.constructor===Array},s.helper.isUndefined=function(e){return void 0===e},s.helper.stdExtName=function(e){return e.replace(/[_-]||\s/g,"").toLowerCase()},s.helper.escapeCharactersCallback=t,s.helper.escapeCharacters=function(e,r,n){var s="(["+r.replace(/([\[\]\\])/g,"\\$1")+"])";n&&(s="\\\\"+s);var a=new RegExp(s,"g");return e=e.replace(a,t)};var c=function(e,r,t,n){var s,a,o,i,l,c=n||"",u=c.indexOf("g")>-1,p=new RegExp(r+"|"+t,"g"+c.replace(/g/g,"")),h=new RegExp(r,c.replace(/g/g,"")),d=[];do{for(s=0;o=p.exec(e);)if(h.test(o[0]))s++||(i=(a=p.lastIndex)-o[0].length);else if(s&&!--s){l=o.index+o[0].length;var f={left:{start:i,end:a},match:{start:a,end:o.index},right:{start:o.index,end:l},wholeMatch:{start:i,end:l}};if(d.push(f),!u)return d}}while(s&&(p.lastIndex=a));return d};s.helper.matchRecursiveRegExp=function(e,r,t,n){for(var s=c(e,r,t,n),a=[],o=0;o<s.length;++o)a.push([e.slice(s[o].wholeMatch.start,s[o].wholeMatch.end),e.slice(s[o].match.start,s[o].match.end),e.slice(s[o].left.start,s[o].left.end),e.slice(s[o].right.start,s[o].right.end)]);return a},s.helper.replaceRecursiveRegExp=function(e,r,t,n,a){if(!s.helper.isFunction(r)){var o=r;r=function(){return o}}var i=c(e,t,n,a),l=e,u=i.length;if(u>0){var p=[];0!==i[0].wholeMatch.start&&p.push(e.slice(0,i[0].wholeMatch.start));for(var h=0;h<u;++h)p.push(r(e.slice(i[h].wholeMatch.start,i[h].wholeMatch.end),e.slice(i[h].match.start,i[h].match.end),e.slice(i[h].left.start,i[h].left.end),e.slice(i[h].right.start,i[h].right.end))),h<u-1&&p.push(e.slice(i[h].wholeMatch.end,i[h+1].wholeMatch.start));i[u-1].wholeMatch.end<e.length&&p.push(e.slice(i[u-1].wholeMatch.end)),l=p.join("")}return l},s.helper.isUndefined(console)&&(console={warn:function(e){alert(e)},log:function(e){alert(e)},error:function(e){throw e}}),s.Converter=function(e){function t(e,t){if(t=t||null,s.helper.isString(e)){if(e=s.helper.stdExtName(e),t=e,s.extensions[e])return console.warn("DEPRECATION WARNING: "+e+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void a(s.extensions[e],e);if(s.helper.isUndefined(o[e]))throw Error('Extension "'+e+'" could not be loaded. It was either not found or is not a valid extension.');e=o[e]}"function"==typeof e&&(e=e()),s.helper.isArray(e)||(e=[e]);var n=r(e,t);if(!n.valid)throw Error(n.error);for(var i=0;i<e.length;++i){switch(e[i].type){case"lang":h.push(e[i]);break;case"output":d.push(e[i])}if(e[i].hasOwnProperty(f))for(var l in e[i].listeners)e[i].listeners.hasOwnProperty(l)&&c(l,e[i].listeners[l])}}function a(e,t){"function"==typeof e&&(e=e(new s.Converter)),s.helper.isArray(e)||(e=[e]);var n=r(e,t);if(!n.valid)throw Error(n.error);for(var a=0;a<e.length;++a)switch(e[a].type){case"lang":h.push(e[a]);break;case"output":d.push(e[a]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function c(e,r){if(!s.helper.isString(e))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+(void 0===e?"undefined":n(e))+" given");if("function"!=typeof r)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+(void 0===r?"undefined":n(r))+" given");f.hasOwnProperty(e)||(f[e]=[]),f[e].push(r)}function u(e){var r=e.match(/^\s*/)[0].length,t=new RegExp("^\\s{0,"+r+"}","gm");return e.replace(t,"")}var p={},h=[],d=[],f={};!function(){e=e||{};for(var r in i)i.hasOwnProperty(r)&&(p[r]=i[r]);if("object"!==(void 0===e?"undefined":n(e)))throw Error("Converter expects the passed parameter to be an object, but "+(void 0===e?"undefined":n(e))+" was passed instead.");for(var a in e)e.hasOwnProperty(a)&&(p[a]=e[a]);p.extensions&&s.helper.forEach(p.extensions,t)}(),this._dispatch=function(e,r,t,n){if(f.hasOwnProperty(e))for(var s=0;s<f[e].length;++s){var a=f[e][s](e,r,this,t,n);a&&void 0!==a&&(r=a)}return r},this.listen=function(e,r){return c(e,r),this},this.makeHtml=function(e){if(!e)return e;var r={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:h,outputModifiers:d,converter:this,ghCodeBlocks:[]};return e=e.replace(/~/g,"~T"),e=e.replace(/\$/g,"~D"),e=e.replace(/\r\n/g,"\n"),e=e.replace(/\r/g,"\n"),p.smartIndentationFix&&(e=u(e)),e=e,e=s.subParser("detab")(e,p,r),e=s.subParser("stripBlankLines")(e,p,r),s.helper.forEach(h,function(t){e=s.subParser("runExtension")(t,e,p,r)}),e=s.subParser("hashPreCodeTags")(e,p,r),e=s.subParser("githubCodeBlocks")(e,p,r),e=s.subParser("hashHTMLBlocks")(e,p,r),e=s.subParser("hashHTMLSpans")(e,p,r),e=s.subParser("stripLinkDefinitions")(e,p,r),e=s.subParser("blockGamut")(e,p,r),e=s.subParser("unhashHTMLSpans")(e,p,r),e=s.subParser("unescapeSpecialChars")(e,p,r),e=e.replace(/~D/g,"$$"),e=e.replace(/~T/g,"~"),s.helper.forEach(d,function(t){e=s.subParser("runExtension")(t,e,p,r)}),e},this.setOption=function(e,r){p[e]=r},this.getOption=function(e){return p[e]},this.getOptions=function(){return p},this.addExtension=function(e,r){t(e,r=r||null)},this.useExtension=function(e){t(e)},this.setFlavor=function(e){if(l.hasOwnProperty(e)){var r=l[e];for(var t in r)r.hasOwnProperty(t)&&(p[t]=r[t])}},this.removeExtension=function(e){s.helper.isArray(e)||(e=[e]);for(var r=0;r<e.length;++r){for(var t=e[r],n=0;n<h.length;++n)h[n]===t&&h[n].splice(n,1);for(;0<d.length;++n)d[0]===t&&d[0].splice(n,1)}},this.getAllExtensions=function(){return{language:h,output:d}}},s.subParser("anchors",function(e,r,t){var n=function(e,r,n,a,o,i,l,c){s.helper.isUndefined(c)&&(c=""),e=r;var u=n,p=a.toLowerCase(),h=o,d=c;if(!h)if(p||(p=u.toLowerCase().replace(/ ?\n/g," ")),h="#"+p,s.helper.isUndefined(t.gUrls[p])){if(!(e.search(/\(\s*\)$/m)>-1))return e;h=""}else h=t.gUrls[p],s.helper.isUndefined(t.gTitles[p])||(d=t.gTitles[p]);var f='<a href="'+(h=s.helper.escapeCharacters(h,"*_",!1))+'"';return""!==d&&null!==d&&(d=d.replace(/"/g,"&quot;"),f+=' title="'+(d=s.helper.escapeCharacters(d,"*_",!1))+'"'),f+=">"+u+"</a>"};return e=(e=t.converter._dispatch("anchors.before",e,r,t)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g,n),e=e.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,n),e=e.replace(/(\[([^\[\]]+)])()()()()()/g,n),e=t.converter._dispatch("anchors.after",e,r,t)}),s.subParser("autoLinks",function(e,r,t){function n(e,r){var t=r;return/^www\./i.test(r)&&(r=r.replace(/^www\./i,"http://www.")),'<a href="'+r+'">'+t+"</a>"}function a(e,r){var t=s.subParser("unescapeSpecialChars")(r);return s.subParser("encodeEmailAddress")(t)}var o=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/gi,i=/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi,l=/(?:^|[ \n\t])([A-Za-z0-9!#$%&'*+-/=?^_`\{|}~\.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?:$|[ \n\t])/gi,c=/<(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;return e=(e=t.converter._dispatch("autoLinks.before",e,r,t)).replace(i,n),e=e.replace(c,a),r.simplifiedAutoLink&&(e=(e=e.replace(o,n)).replace(l,a)),e=t.converter._dispatch("autoLinks.after",e,r,t)}),s.subParser("blockGamut",function(e,r,t){e=t.converter._dispatch("blockGamut.before",e,r,t),e=s.subParser("blockQuotes")(e,r,t),e=s.subParser("headers")(e,r,t);var n=s.subParser("hashBlock")("<hr />",r,t);return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,n),e=e.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,n),e=e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,n),e=s.subParser("lists")(e,r,t),e=s.subParser("codeBlocks")(e,r,t),e=s.subParser("tables")(e,r,t),e=s.subParser("hashHTMLBlocks")(e,r,t),e=s.subParser("paragraphs")(e,r,t),e=t.converter._dispatch("blockGamut.after",e,r,t)}),s.subParser("blockQuotes",function(e,r,t){return e=t.converter._dispatch("blockQuotes.before",e,r,t),e=e.replace(/((^[ \t]{0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(e,n){var a=n;return a=a.replace(/^[ \t]*>[ \t]?/gm,"~0"),a=a.replace(/~0/g,""),a=a.replace(/^[ \t]+$/gm,""),a=s.subParser("githubCodeBlocks")(a,r,t),a=s.subParser("blockGamut")(a,r,t),a=a.replace(/(^|\n)/g,"$1  "),a=a.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,r){var t=r;return t=t.replace(/^  /gm,"~0"),t=t.replace(/~0/g,"")}),s.subParser("hashBlock")("<blockquote>\n"+a+"\n</blockquote>",r,t)}),e=t.converter._dispatch("blockQuotes.after",e,r,t)}),s.subParser("codeBlocks",function(e,r,t){e=t.converter._dispatch("codeBlocks.before",e,r,t);var n=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g;return e=(e+="~0").replace(n,function(e,n,a){var o=n,i=a,l="\n";return o=s.subParser("outdent")(o),o=s.subParser("encodeCode")(o),o=s.subParser("detab")(o),o=o.replace(/^\n+/g,""),o=o.replace(/\n+$/g,""),r.omitExtraWLInCodeBlocks&&(l=""),o="<pre><code>"+o+l+"</code></pre>",s.subParser("hashBlock")(o,r,t)+i}),e=e.replace(/~0/,""),e=t.converter._dispatch("codeBlocks.after",e,r,t)}),s.subParser("codeSpans",function(e,r,t){return void 0===(e=t.converter._dispatch("codeSpans.before",e,r,t))&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,r,t,n){var a=n;return a=a.replace(/^([ \t]*)/g,""),a=a.replace(/[ \t]*$/g,""),a=s.subParser("encodeCode")(a),r+"<code>"+a+"</code>"}),e=t.converter._dispatch("codeSpans.after",e,r,t)}),s.subParser("detab",function(e){return e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"~A~B"),e=e.replace(/~B(.+?)~A/g,function(e,r){for(var t=r,n=4-t.length%4,s=0;s<n;s++)t+=" ";return t}),e=e.replace(/~A/g,"    "),e=e.replace(/~B/g,"")}),s.subParser("encodeAmpsAndAngles",function(e){return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?\$!])/gi,"&lt;")}),s.subParser("encodeBackslashEscapes",function(e){return e=e.replace(/\\(\\)/g,s.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,s.helper.escapeCharactersCallback)}),s.subParser("encodeCode",function(e){return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=s.helper.escapeCharacters(e,"*_{}[]\\",!1)}),s.subParser("encodeEmailAddress",function(e){var r=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}];return e="mailto:"+e,e=e.replace(/./g,function(e){if("@"===e)e=r[Math.floor(2*Math.random())](e);else if(":"!==e){var t=Math.random();e=t>.9?r[2](e):t>.45?r[1](e):r[0](e)}return e}),e='<a href="'+e+'">'+e+"</a>",e=e.replace(/">.+:/g,'">')}),s.subParser("escapeSpecialCharsWithinTagAttributes",function(e){var r=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return e=e.replace(r,function(e){var r=e.replace(/(.)<\/?code>(?=.)/g,"$1`");return r=s.helper.escapeCharacters(r,"\\`*_",!1)})}),s.subParser("githubCodeBlocks",function(e,r,t){return r.ghCodeBlocks?(e=t.converter._dispatch("githubCodeBlocks.before",e,r,t),e+="~0",e=e.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(e,n,a){var o=r.omitExtraWLInCodeBlocks?"":"\n";return a=s.subParser("encodeCode")(a),a=s.subParser("detab")(a),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),a="<pre><code"+(n?' class="'+n+" language-"+n+'"':"")+">"+a+o+"</code></pre>",a=s.subParser("hashBlock")(a,r,t),"\n\n~G"+(t.ghCodeBlocks.push({text:e,codeblock:a})-1)+"G\n\n"}),e=e.replace(/~0/,""),t.converter._dispatch("githubCodeBlocks.after",e,r,t)):e}),s.subParser("hashBlock",function(e,r,t){return e=e.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n"}),s.subParser("hashElement",function(e,r,t){return function(e,r){var n=r;return n=n.replace(/\n\n/g,"\n"),n=n.replace(/^\n/,""),n=n.replace(/\n+$/g,""),n="\n\n~K"+(t.gHtmlBlocks.push(n)-1)+"K\n\n"}}),s.subParser("hashHTMLBlocks",function(e,r,t){for(var n=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],a=0;a<n.length;++a)e=s.helper.replaceRecursiveRegExp(e,function(e,r,n,s){var a=e;return-1!==n.search(/\bmarkdown\b/)&&(a=n+t.converter.makeHtml(r)+s),"\n\n~K"+(t.gHtmlBlocks.push(a)-1)+"K\n\n"},"^(?: |\\t){0,3}<"+n[a]+"\\b[^>]*>","</"+n[a]+">","gim");return e=e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,s.subParser("hashElement")(e,r,t)),e=e.replace(/(<!--[\s\S]*?-->)/g,s.subParser("hashElement")(e,r,t)),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,s.subParser("hashElement")(e,r,t))}),s.subParser("hashHTMLSpans",function(e,r,t){for(var n=s.helper.matchRecursiveRegExp(e,"<code\\b[^>]*>","</code>","gi"),a=0;a<n.length;++a)e=e.replace(n[a][0],"~L"+(t.gHtmlSpans.push(n[a][0])-1)+"L");return e}),s.subParser("unhashHTMLSpans",function(e,r,t){for(var n=0;n<t.gHtmlSpans.length;++n)e=e.replace("~L"+n+"L",t.gHtmlSpans[n]);return e}),s.subParser("hashPreCodeTags",function(e,r,t){return e=s.helper.replaceRecursiveRegExp(e,function(e,r,n,a){var o=n+s.subParser("encodeCode")(r)+a;return"\n\n~G"+(t.ghCodeBlocks.push({text:e,codeblock:o})-1)+"G\n\n"},"^(?: |\\t){0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^(?: |\\t){0,3}</code>\\s*</pre>","gim")}),s.subParser("headers",function(e,r,t){function n(e){var r,n=e.replace(/[^\w]/g,"").toLowerCase();return t.hashLinkCounts[n]?r=n+"-"+t.hashLinkCounts[n]++:(r=n,t.hashLinkCounts[n]=1),!0===a&&(a="section"),s.helper.isString(a)?a+r:r}e=t.converter._dispatch("headers.before",e,r,t);var a=r.prefixHeaderId,o=isNaN(parseInt(r.headerLevelStart))?1:parseInt(r.headerLevelStart),i=r.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,l=r.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;return e=e.replace(i,function(e,a){var i=s.subParser("spanGamut")(a,r,t),l=r.noHeaderId?"":' id="'+n(a)+'"',c=o,u="<h"+c+l+">"+i+"</h"+c+">";return s.subParser("hashBlock")(u,r,t)}),e=e.replace(l,function(e,a){var i=s.subParser("spanGamut")(a,r,t),l=r.noHeaderId?"":' id="'+n(a)+'"',c=o+1,u="<h"+c+l+">"+i+"</h"+c+">";return s.subParser("hashBlock")(u,r,t)}),e=e.replace(/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm,function(e,a,i){var l=s.subParser("spanGamut")(i,r,t),c=r.noHeaderId?"":' id="'+n(i)+'"',u=o-1+a.length,p="<h"+u+c+">"+l+"</h"+u+">";return s.subParser("hashBlock")(p,r,t)}),e=t.converter._dispatch("headers.after",e,r,t)}),s.subParser("images",function(e,r,t){function n(e,r,n,a,o,i,l,c){var u=t.gUrls,p=t.gTitles,h=t.gDimensions;if(n=n.toLowerCase(),c||(c=""),""===a||null===a){if(""!==n&&null!==n||(n=r.toLowerCase().replace(/ ?\n/g," ")),a="#"+n,s.helper.isUndefined(u[n]))return e;a=u[n],s.helper.isUndefined(p[n])||(c=p[n]),s.helper.isUndefined(h[n])||(o=h[n].width,i=h[n].height)}r=r.replace(/"/g,"&quot;"),r=s.helper.escapeCharacters(r,"*_",!1);var d='<img src="'+(a=s.helper.escapeCharacters(a,"*_",!1))+'" alt="'+r+'"';return c&&(c=c.replace(/"/g,"&quot;"),d+=' title="'+(c=s.helper.escapeCharacters(c,"*_",!1))+'"'),o&&i&&(d+=' width="'+(o="*"===o?"auto":o)+'"',d+=' height="'+(i="*"===i?"auto":i)+'"'),d+=" />"}var a=/!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g,o=/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g;return e=(e=t.converter._dispatch("images.before",e,r,t)).replace(o,n),e=e.replace(a,n),e=t.converter._dispatch("images.after",e,r,t)}),s.subParser("italicsAndBold",function(e,r,t){return e=t.converter._dispatch("italicsAndBold.before",e,r,t),e=r.literalMidWordUnderscores?(e=(e=(e=e.replace(/(^|\s|>|\b)__(?=\S)([\s\S]+?)__(?=\b|<|\s|$)/gm,"$1<strong>$2</strong>")).replace(/(^|\s|>|\b)_(?=\S)([\s\S]+?)_(?=\b|<|\s|$)/gm,"$1<em>$2</em>")).replace(/(\*\*)(?=\S)([^\r]*?\S[*]*)\1/g,"<strong>$2</strong>")).replace(/(\*)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"):(e=e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>")).replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"),e=t.converter._dispatch("italicsAndBold.after",e,r,t)}),s.subParser("lists",function(e,r,t){function n(e,n){t.gListLevel++,e=e.replace(/\n{2,}$/,"\n"),e+="~0";var a=/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,o=/\n[ \t]*\n(?!~0)/.test(e);return e=e.replace(a,function(e,n,a,i,l,c,u){u=u&&""!==u.trim();var p=s.subParser("outdent")(l,r,t),h="";return c&&r.tasklists&&(h=' class="task-list-item" style="list-style-type: none;"',p=p.replace(/^[ \t]*\[(x|X| )?]/m,function(){var e='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return u&&(e+=" checked"),e+=">"})),n||p.search(/\n{2,}/)>-1?(p=s.subParser("githubCodeBlocks")(p,r,t),p=s.subParser("blockGamut")(p,r,t)):(p=(p=s.subParser("lists")(p,r,t)).replace(/\n$/,""),p=o?s.subParser("paragraphs")(p,r,t):s.subParser("spanGamut")(p,r,t)),p="\n<li"+h+">"+p+"</li>\n"}),e=e.replace(/~0/g,""),t.gListLevel--,n&&(e=e.replace(/\s+$/,"")),e}function a(e,r,t){var s="ul"===r?/^ {0,2}\d+\.[ \t]/gm:/^ {0,2}[*+-][ \t]/gm,a=[],o="";if(-1!==e.search(s)){!function e(a){var i=a.search(s);-1!==i?(o+="\n\n<"+r+">"+n(a.slice(0,i),!!t)+"</"+r+">\n\n",s="ul"===(r="ul"===r?"ol":"ul")?/^ {0,2}\d+\.[ \t]/gm:/^ {0,2}[*+-][ \t]/gm,e(a.slice(i))):o+="\n\n<"+r+">"+n(a,!!t)+"</"+r+">\n\n"}(e);for(var i=0;i<a.length;++i);}else o="\n\n<"+r+">"+n(e,!!t)+"</"+r+">\n\n";return o}e=t.converter._dispatch("lists.before",e,r,t),e+="~0";var o=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return t.gListLevel?e=e.replace(o,function(e,r,t){return a(r,t.search(/[*+-]/g)>-1?"ul":"ol",!0)}):(o=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,e=e.replace(o,function(e,r,t,n){return a(t,n.search(/[*+-]/g)>-1?"ul":"ol")})),e=e.replace(/~0/,""),e=t.converter._dispatch("lists.after",e,r,t)}),s.subParser("outdent",function(e){return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,"")}),s.subParser("paragraphs",function(e,r,t){for(var n=(e=(e=(e=t.converter._dispatch("paragraphs.before",e,r,t)).replace(/^\n+/g,"")).replace(/\n+$/g,"")).split(/\n{2,}/g),a=[],o=n.length,i=0;i<o;i++){var l=n[i];l.search(/~(K|G)(\d+)\1/g)>=0?a.push(l):(l=(l=s.subParser("spanGamut")(l,r,t)).replace(/^([ \t]*)/g,"<p>"),l+="</p>",a.push(l))}for(o=a.length,i=0;i<o;i++){for(var c="",u=a[i],p=!1;u.search(/~(K|G)(\d+)\1/)>=0;){var h=RegExp.$1,d=RegExp.$2;c=(c="K"===h?t.gHtmlBlocks[d]:p?s.subParser("encodeCode")(t.ghCodeBlocks[d].text):t.ghCodeBlocks[d].codeblock).replace(/\$/g,"$$$$"),u=u.replace(/(\n\n)?~(K|G)\d+\2(\n\n)?/,c),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u)&&(p=!0)}a[i]=u}return e=a.join("\n\n"),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),t.converter._dispatch("paragraphs.after",e,r,t)}),s.subParser("runExtension",function(e,r,t,n){if(e.filter)r=e.filter(r,n.converter,t);else if(e.regex){var s=e.regex;!s instanceof RegExp&&(s=new RegExp(s,"g")),r=r.replace(s,e.replace)}return r}),s.subParser("spanGamut",function(e,r,t){return e=t.converter._dispatch("spanGamut.before",e,r,t),e=s.subParser("codeSpans")(e,r,t),e=s.subParser("escapeSpecialCharsWithinTagAttributes")(e,r,t),e=s.subParser("encodeBackslashEscapes")(e,r,t),e=s.subParser("images")(e,r,t),e=s.subParser("anchors")(e,r,t),e=s.subParser("autoLinks")(e,r,t),e=s.subParser("encodeAmpsAndAngles")(e,r,t),e=s.subParser("italicsAndBold")(e,r,t),e=s.subParser("strikethrough")(e,r,t),e=e.replace(/  +\n/g," <br />\n"),e=t.converter._dispatch("spanGamut.after",e,r,t)}),s.subParser("strikethrough",function(e,r,t){return r.strikethrough&&(e=(e=t.converter._dispatch("strikethrough.before",e,r,t)).replace(/(?:~T){2}([\s\S]+?)(?:~T){2}/g,"<del>$1</del>"),e=t.converter._dispatch("strikethrough.after",e,r,t)),e}),s.subParser("stripBlankLines",function(e){return e.replace(/^[ \t]+$/gm,"")}),s.subParser("stripLinkDefinitions",function(e,r,t){var n=/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=~0))/gm;return e+="~0",e=e.replace(n,function(e,n,a,o,i,l,c){return n=n.toLowerCase(),t.gUrls[n]=s.subParser("encodeAmpsAndAngles")(a),l?l+c:(c&&(t.gTitles[n]=c.replace(/"|'/g,"&quot;")),r.parseImgDimensions&&o&&i&&(t.gDimensions[n]={width:o,height:i}),"")}),e=e.replace(/~0/,"")}),s.subParser("tables",function(e,r,t){function n(e){return/^:[ \t]*--*$/.test(e)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(e)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(e)?' style="text-align:center;"':""}function a(e,n){var a="";return e=e.trim(),r.tableHeaderId&&(a=' id="'+e.replace(/ /g,"_").toLowerCase()+'"'),e=s.subParser("spanGamut")(e,r,t),"<th"+a+n+">"+e+"</th>\n"}function o(e,n){return"<td"+n+">"+s.subParser("spanGamut")(e,r,t)+"</td>\n"}function i(e,r){for(var t="<table>\n<thead>\n<tr>\n",n=e.length,s=0;s<n;++s)t+=e[s];for(t+="</tr>\n</thead>\n<tbody>\n",s=0;s<r.length;++s){t+="<tr>\n";for(var a=0;a<n;++a)t+=r[s][a];t+="</tr>\n"}return t+="</tbody>\n</table>\n"}if(!r.tables)return e;var l=/^[ \t]{0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm;return e=t.converter._dispatch("tables.before",e,r,t),e=e.replace(l,function(e){var r,t=e.split("\n");for(r=0;r<t.length;++r)/^[ \t]{0,3}\|/.test(t[r])&&(t[r]=t[r].replace(/^[ \t]{0,3}\|/,"")),/\|[ \t]*$/.test(t[r])&&(t[r]=t[r].replace(/\|[ \t]*$/,""));var l=t[0].split("|").map(function(e){return e.trim()}),c=t[1].split("|").map(function(e){return e.trim()}),u=[],p=[],h=[],d=[];for(t.shift(),t.shift(),r=0;r<t.length;++r)""!==t[r].trim()&&u.push(t[r].split("|").map(function(e){return e.trim()}));if(l.length<c.length)return e;for(r=0;r<c.length;++r)h.push(n(c[r]));for(r=0;r<l.length;++r)s.helper.isUndefined(h[r])&&(h[r]=""),p.push(a(l[r],h[r]));for(r=0;r<u.length;++r){for(var f=[],g=0;g<p.length;++g)s.helper.isUndefined(u[r][g]),f.push(o(u[r][g],h[g]));d.push(f)}return i(p,d)}),e=t.converter._dispatch("tables.after",e,r,t)}),s.subParser("unescapeSpecialChars",function(e){return e=e.replace(/~E(\d+)E/g,function(e,r){var t=parseInt(r);return String.fromCharCode(t)})}),module.exports=s; 
 			}); 
		define("utils/wxParse/wxDiscode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e=e.replace(/&forall;/g,"∀"),e=e.replace(/&part;/g,"∂"),e=e.replace(/&exists;/g,"∃"),e=e.replace(/&empty;/g,"∅"),e=e.replace(/&nabla;/g,"∇"),e=e.replace(/&isin;/g,"∈"),e=e.replace(/&notin;/g,"∉"),e=e.replace(/&ni;/g,"∋"),e=e.replace(/&prod;/g,"∏"),e=e.replace(/&sum;/g,"∑"),e=e.replace(/&minus;/g,"−"),e=e.replace(/&lowast;/g,"∗"),e=e.replace(/&radic;/g,"√"),e=e.replace(/&prop;/g,"∝"),e=e.replace(/&infin;/g,"∞"),e=e.replace(/&ang;/g,"∠"),e=e.replace(/&and;/g,"∧"),e=e.replace(/&or;/g,"∨"),e=e.replace(/&cap;/g,"∩"),e=e.replace(/&cap;/g,"∪"),e=e.replace(/&int;/g,"∫"),e=e.replace(/&there4;/g,"∴"),e=e.replace(/&sim;/g,"∼"),e=e.replace(/&cong;/g,"≅"),e=e.replace(/&asymp;/g,"≈"),e=e.replace(/&ne;/g,"≠"),e=e.replace(/&le;/g,"≤"),e=e.replace(/&ge;/g,"≥"),e=e.replace(/&sub;/g,"⊂"),e=e.replace(/&sup;/g,"⊃"),e=e.replace(/&nsub;/g,"⊄"),e=e.replace(/&sube;/g,"⊆"),e=e.replace(/&supe;/g,"⊇"),e=e.replace(/&oplus;/g,"⊕"),e=e.replace(/&otimes;/g,"⊗"),e=e.replace(/&perp;/g,"⊥"),e=e.replace(/&sdot;/g,"⋅")}function a(e){return e=e.replace(/&Alpha;/g,"Α"),e=e.replace(/&Beta;/g,"Β"),e=e.replace(/&Gamma;/g,"Γ"),e=e.replace(/&Delta;/g,"Δ"),e=e.replace(/&Epsilon;/g,"Ε"),e=e.replace(/&Zeta;/g,"Ζ"),e=e.replace(/&Eta;/g,"Η"),e=e.replace(/&Theta;/g,"Θ"),e=e.replace(/&Iota;/g,"Ι"),e=e.replace(/&Kappa;/g,"Κ"),e=e.replace(/&Lambda;/g,"Λ"),e=e.replace(/&Mu;/g,"Μ"),e=e.replace(/&Nu;/g,"Ν"),e=e.replace(/&Xi;/g,"Ν"),e=e.replace(/&Omicron;/g,"Ο"),e=e.replace(/&Pi;/g,"Π"),e=e.replace(/&Rho;/g,"Ρ"),e=e.replace(/&Sigma;/g,"Σ"),e=e.replace(/&Tau;/g,"Τ"),e=e.replace(/&Upsilon;/g,"Υ"),e=e.replace(/&Phi;/g,"Φ"),e=e.replace(/&Chi;/g,"Χ"),e=e.replace(/&Psi;/g,"Ψ"),e=e.replace(/&Omega;/g,"Ω"),e=e.replace(/&alpha;/g,"α"),e=e.replace(/&beta;/g,"β"),e=e.replace(/&gamma;/g,"γ"),e=e.replace(/&delta;/g,"δ"),e=e.replace(/&epsilon;/g,"ε"),e=e.replace(/&zeta;/g,"ζ"),e=e.replace(/&eta;/g,"η"),e=e.replace(/&theta;/g,"θ"),e=e.replace(/&iota;/g,"ι"),e=e.replace(/&kappa;/g,"κ"),e=e.replace(/&lambda;/g,"λ"),e=e.replace(/&mu;/g,"μ"),e=e.replace(/&nu;/g,"ν"),e=e.replace(/&xi;/g,"ξ"),e=e.replace(/&omicron;/g,"ο"),e=e.replace(/&pi;/g,"π"),e=e.replace(/&rho;/g,"ρ"),e=e.replace(/&sigmaf;/g,"ς"),e=e.replace(/&sigma;/g,"σ"),e=e.replace(/&tau;/g,"τ"),e=e.replace(/&upsilon;/g,"υ"),e=e.replace(/&phi;/g,"φ"),e=e.replace(/&chi;/g,"χ"),e=e.replace(/&psi;/g,"ψ"),e=e.replace(/&omega;/g,"ω"),e=e.replace(/&thetasym;/g,"ϑ"),e=e.replace(/&upsih;/g,"ϒ"),e=e.replace(/&piv;/g,"ϖ"),e=e.replace(/&middot;/g,"·")}function r(e){return e=e.replace(/&nbsp;/g," "),e=e.replace(/&quot;/g,"'"),e=e.replace(/&amp;/g,"&"),e=e.replace(/&lt;/g,"<"),e=e.replace(/&gt;/g,">")}function l(e){return e=e.replace(/&OElig;/g,"Œ"),e=e.replace(/&oelig;/g,"œ"),e=e.replace(/&Scaron;/g,"Š"),e=e.replace(/&scaron;/g,"š"),e=e.replace(/&Yuml;/g,"Ÿ"),e=e.replace(/&fnof;/g,"ƒ"),e=e.replace(/&circ;/g,"ˆ"),e=e.replace(/&tilde;/g,"˜"),e=e.replace(/&ensp;/g,""),e=e.replace(/&emsp;/g,""),e=e.replace(/&thinsp;/g,""),e=e.replace(/&zwnj;/g,""),e=e.replace(/&zwj;/g,""),e=e.replace(/&lrm;/g,""),e=e.replace(/&rlm;/g,""),e=e.replace(/&ndash;/g,"–"),e=e.replace(/&mdash;/g,"—"),e=e.replace(/&lsquo;/g,"‘"),e=e.replace(/&rsquo;/g,"’"),e=e.replace(/&sbquo;/g,"‚"),e=e.replace(/&ldquo;/g,"“"),e=e.replace(/&rdquo;/g,"”"),e=e.replace(/&bdquo;/g,"„"),e=e.replace(/&dagger;/g,"†"),e=e.replace(/&Dagger;/g,"‡"),e=e.replace(/&bull;/g,"•"),e=e.replace(/&hellip;/g,"…"),e=e.replace(/&permil;/g,"‰"),e=e.replace(/&prime;/g,"′"),e=e.replace(/&Prime;/g,"″"),e=e.replace(/&lsaquo;/g,"‹"),e=e.replace(/&rsaquo;/g,"›"),e=e.replace(/&oline;/g,"‾"),e=e.replace(/&euro;/g,"€"),e=e.replace(/&trade;/g,"™"),e=e.replace(/&larr;/g,"←"),e=e.replace(/&uarr;/g,"↑"),e=e.replace(/&rarr;/g,"→"),e=e.replace(/&darr;/g,"↓"),e=e.replace(/&harr;/g,"↔"),e=e.replace(/&crarr;/g,"↵"),e=e.replace(/&lceil;/g,"⌈"),e=e.replace(/&rceil;/g,"⌉"),e=e.replace(/&lfloor;/g,"⌊"),e=e.replace(/&rfloor;/g,"⌋"),e=e.replace(/&loz;/g,"◊"),e=e.replace(/&spades;/g,"♠"),e=e.replace(/&clubs;/g,"♣"),e=e.replace(/&hearts;/g,"♥"),e=e.replace(/&diams;/g,"♦")}function p(e){return e=e.replace(/\r\n/g,""),e=e.replace(/\n/g,""),e=e.replace(/code/g,"wxxxcode-style")}module.exports={strDiscode:function(c){return c=e(c),c=a(c),c=r(c),c=l(c),c=p(c)},urlToHttpUrl:function(e,a){return new RegExp("^//").test(e)&&(e=a+":"+e),e}}; 
 			}); 
		define("utils/wxParse/wxParse.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e){var t=this,a=e.target.dataset.src,i=e.target.dataset.from;void 0!==i&&i.length>0&&wx.previewImage({current:a,urls:t.data[i].imageUrls})}function a(e){var t=this,a=e.target.dataset.from,r=e.target.dataset.idx;void 0!==a&&a.length>0&&i(e,r,t,a)}function i(e,t,a,i){var d=a.data[i];if(0!=d.images.length){var n=d.images,s=r(e.detail.width,e.detail.height,a,i);n[t].width=s.imageWidth,n[t].height=s.imageheight,d.images=n;var o={};o[i]=d,a.setData(o)}}function r(e,t,a,i){var r=0,d=0,n=0,s=0,o={};return wx.getSystemInfo({success:function(g){var h=a.data[i].view.imagePadding;r=g.windowWidth-2*h,d=g.windowHeight,e>r?(s=(n=r)*t/e,o.imageWidth=n,o.imageheight=s):(o.imageWidth=e,o.imageheight=t)}}),o}var d=e(require("./showdown.js")),n=e(require("./html2json.js"));module.exports={wxParse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wxParseData",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'<div class="color:red;">数据不能为空</div>',s=arguments[3],o=arguments[4],g=s,h={};if("html"==i)h=n.default.html2json(r,e);else if("md"==i||"markdown"==i){var m=(new d.default.Converter).makeHtml(r);h=n.default.html2json(m,e)}h.view={},h.view.imagePadding=0,void 0!==o&&(h.view.imagePadding=o);var l={};l[e]=h,g.setData(l),g.wxParseImgLoad=a,g.wxParseImgTap=t},wxParseTemArray:function(e,t,a,i){for(var r=[],d=i.data,n=null,s=0;s<a;s++){var o=d[t+s].nodes;r.push(o)}e=e||"wxParseTemArray",(n=JSON.parse('{"'+e+'":""}'))[e]=r,i.setData(n)},emojisInit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/wxParse/emojis/",a=arguments[2];n.default.emojisInit(e,t,a)}}; 
 			}); 
		define("utils/wxcharts-min.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),n=1;n<arguments.length;n++){var a=arguments[n];if(null!=a)for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(i[o]=a[o])}return i}function e(t,e,i){if(isNaN(t))throw new Error("[wxCharts] unvalid series data!");i=i||10,e=e||"upper";for(var n=1;i<1;)i*=10,n*=10;for(t="upper"===e?Math.ceil(t*n):Math.floor(t*n);t%i!=0;)"upper"===e?t++:t--;return t/n}function i(t,e,i,n){var a=n.width-i.padding-e.xAxisPoints[0],o=e.eachSpacing*n.categories.length,r=t;return t>=0?r=0:Math.abs(t)>=o-a&&(r=a-o),r}function n(t,e,i){function n(t){for(;t<0;)t+=2*Math.PI;for(;t>2*Math.PI;)t-=2*Math.PI;return t}return t=n(t),e=n(e),i=n(i),e>i&&(i+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=i}function a(t,e,i){var n=t,a=i-e,o=n+(i-a-n)/Math.sqrt(2);return o*=-1,{transX:o,transY:(i-a)*(Math.sqrt(2)-1)-(i-a-n)/Math.sqrt(2)}}function o(t,e){function i(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var n=null,a=null,o=null,r=null;if(e<1?(n=t[0].x+.2*(t[1].x-t[0].x),a=t[0].y+.2*(t[1].y-t[0].y)):(n=t[e].x+.2*(t[e+1].x-t[e-1].x),a=t[e].y+.2*(t[e+1].y-t[e-1].y)),e>t.length-3){var s=t.length-1;o=t[s].x-.2*(t[s].x-t[s-1].x),r=t[s].y-.2*(t[s].y-t[s-1].y)}else o=t[e+1].x-.2*(t[e+2].x-t[e].x),r=t[e+1].y-.2*(t[e+2].y-t[e].y);return i(t,e+1)&&(r=t[e+1].y),i(t,e)&&(a=t[e].y),{ctrA:{x:n,y:a},ctrB:{x:o,y:r}}}function r(t,e,i){return{x:i.x+t,y:i.y-e}}function s(t,e){if(e)for(;et.isCollision(t,e);)t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function l(t,e){var i=0;return t.map(function(t){return t.color||(t.color=e.colors[i],i=(i+1)%e.colors.length),t})}function h(t,i){var n=0,a=i-t;return n=a>=1e4?1e3:a>=1e3?100:a>=100?10:a>=10?5:a>=1?1:a>=.1?.1:.01,{minRange:e(t,"lower",n),maxRange:e(i,"upper",n)}}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=0;return(t=(t=String(t)).split("")).forEach(function(t){/[a-zA-Z]/.test(t)?i+=7:/[0-9]/.test(t)?i+=5.5:/\./.test(t)?i+=2.7:/-/.test(t)?i+=3.25:/[\u4e00-\u9fa5]/.test(t)?i+=10:/\(|\)/.test(t)?i+=3.73:/\s/.test(t)?i+=2.5:/%/.test(t)?i+=8:i+=10}),i*e/10}function f(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function d(t,e){var i=[];return t.forEach(function(t){if(null!==t.data[e]&&void 0!==t.data[e]){var n={};n.color=t.color,n.name=t.name,n.data=t.format?t.format(t.data[e]):t.data[e],i.push(n)}}),i}function x(t){var e=t.map(function(t){return c(t)});return Math.max.apply(null,e)}function u(t){for(var e=2*Math.PI/t,i=[],n=0;n<t;n++)i.push(e*n);return i.map(function(t){return-1*t+Math.PI/2})}function g(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.map(function(t){return{text:a.format?a.format(t,n[i]):t.name+": "+t.data,color:t.color}}),r=[],s={x:0,y:0};return e.forEach(function(t){void 0!==t[i]&&null!==t[i]&&r.push(t[i])}),r.forEach(function(t){s.x=Math.round(t.x),s.y+=t.y}),s.y/=r.length,{textList:o,offset:s}}function p(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=-1;return y(t,i,n)&&e.forEach(function(e,i){t.x+a>e&&(o=i)}),o}function y(t,e,i){return t.x<e.width-i.padding&&t.x>i.padding+i.yAxisWidth+i.yAxisTitleWidth&&t.y>i.padding&&t.y<e.height-i.legendHeight-i.xAxisHeight-i.padding}function v(t,e,i){var n=2*Math.PI/i,a=-1;if(P(t,e.center,e.radius)){var o=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},r=Math.atan2(e.center.y-t.y,t.x-e.center.x);(r*=-1)<0&&(r+=2*Math.PI),e.angleList.map(function(t){return t=o(-1*t)}).forEach(function(t,e){var i=o(t-n/2),s=o(t+n/2);s<i&&(s+=2*Math.PI),(r>=i&&r<=s||r+2*Math.PI>=i&&r+2*Math.PI<=s)&&(a=e)})}return a}function m(t,e){var i=-1;if(P(t,e.center,e.radius)){var a=Math.atan2(e.center.y-t.y,t.x-e.center.x);a=-a;for(var o=0,r=e.series.length;o<r;o++){var s=e.series[o];if(n(a,s._start_,s._start_+2*s._proportion_*Math.PI)){i=o;break}}}return i}function P(t,e,i){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(i,2)}function S(t){var e=[],i=[];return t.forEach(function(t,n){null!==t?i.push(t):(i.length&&e.push(i),i=[])}),i.length&&e.push(i),e}function T(t,e,i){if(!1===e.legend)return{legendList:[],legendHeight:0};var n=[],a=0,o=[];return t.forEach(function(t){var i=30+c(t.name||"undefined");a+i>e.width?(n.push(o),a=i,o=[t]):(a+=i,o.push(t))}),o.length&&n.push(o),{legendList:n,legendHeight:n.length*(i.fontSize+8)+5}}function A(t,e,i){var n={angle:0,xAxisHeight:i.xAxisHeight},a=F(t,e,i).eachSpacing,o=t.map(function(t){return c(t)}),r=Math.max.apply(this,o);return r+2*i.xAxisTextPadding>a&&(n.angle=45*Math.PI/180,n.xAxisHeight=2*i.xAxisTextPadding+r*Math.sin(n.angle)),n}function b(t,e,i,n,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=a.extra.radar||{};s.max=s.max||0;var l=Math.max(s.max,Math.max.apply(null,f(n))),h=[];return n.forEach(function(n){var a={};a.color=n.color,a.data=[],n.data.forEach(function(n,s){var h={};h.angle=t[s],h.proportion=n/l,h.position=r(i*h.proportion*o*Math.cos(h.angle),i*h.proportion*o*Math.sin(h.angle),e),a.data.push(h)}),h.push(a)}),h}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=0,n=0;return t.forEach(function(t){t.data=null===t.data?0:t.data,i+=t.data}),t.forEach(function(t){t.data=null===t.data?0:t.data,t._proportion_=t.data/i*e}),t.forEach(function(t){t._start_=n,n+=2*t._proportion_*Math.PI}),t}function _(t){var e=0;return(t=M(t)).forEach(function(t){var i=t.format?t.format(+t._proportion_.toFixed(2)):et.toFixed(100*t._proportion_)+"%";e=Math.max(e,c(i))}),e}function E(t,e,i,n,a,o){return t.map(function(t){return null===t?null:(t.width=(e-2*a.columePadding)/i,o.extra.column&&o.extra.column.width&&+o.extra.column.width>0?t.width=Math.min(t.width,+o.extra.column.width):t.width=Math.min(t.width,25),t.x+=(n+.5-i/2)*t.width,t)})}function F(t,e,i){var n=i.yAxisWidth+i.yAxisTitleWidth,a=(e.width-2*i.padding-n)/(e.enableScroll?Math.min(5,t.length):t.length),o=[],r=i.padding+n,s=e.width-i.padding;return t.forEach(function(t,e){o.push(r+e*a)}),!0===e.enableScroll?o.push(r+t.length*a):o.push(s),{xAxisPoints:o,startX:r,endX:s,eachSpacing:a}}function w(t,e,i,n,a,o,r){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],h=o.height-2*r.padding-r.xAxisHeight-r.legendHeight;return t.forEach(function(t,c){if(null===t)l.push(null);else{var f={};f.x=n[c]+Math.round(a/2);var d=h*(t-e)/(i-e);d*=s,f.y=o.height-r.xAxisHeight-r.legendHeight-Math.round(d)-r.padding,l.push(f)}}),l}function L(t,e,i){var n=f(t);n=n.filter(function(t){return null!==t});var a=Math.min.apply(this,n),o=Math.max.apply(this,n);if("number"==typeof e.yAxis.min&&(a=Math.min(e.yAxis.min,a)),"number"==typeof e.yAxis.max&&(o=Math.max(e.yAxis.max,o)),a===o){var r=o||1;a-=r,o+=r}for(var s=h(a,o),l=s.minRange,c=[],d=(s.maxRange-l)/i.yAxisSplit,x=0;x<=i.yAxisSplit;x++)c.push(l+d*x);return c.reverse()}function k(t,e,i){var n=L(t,e,i),a=i.yAxisWidth,o=n.map(function(t){return t=et.toFixed(t,2),t=e.yAxis.format?e.yAxis.format(Number(t)):t,a=Math.max(a,c(t)+5),t});return!0===e.yAxis.disabled&&(a=0),{rangesFormat:o,ranges:n,yAxisWidth:a}}function C(t,e,i,n){n.beginPath(),n.setStrokeStyle("#ffffff"),n.setLineWidth(1),n.setFillStyle(e),"diamond"===i?t.forEach(function(t,e){null!==t&&(n.moveTo(t.x,t.y-4.5),n.lineTo(t.x-4.5,t.y),n.lineTo(t.x,t.y+4.5),n.lineTo(t.x+4.5,t.y),n.lineTo(t.x,t.y-4.5))}):"circle"===i?t.forEach(function(t,e){null!==t&&(n.moveTo(t.x+3.5,t.y),n.arc(t.x,t.y,4,0,2*Math.PI,!1))}):"rect"===i?t.forEach(function(t,e){null!==t&&(n.moveTo(t.x-3.5,t.y-3.5),n.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===i&&t.forEach(function(t,e){null!==t&&(n.moveTo(t.x,t.y-4.5),n.lineTo(t.x-4.5,t.y+4.5),n.lineTo(t.x+4.5,t.y+4.5),n.lineTo(t.x,t.y-4.5))}),n.closePath(),n.fill(),n.stroke()}function H(t,e,i){var n=t.title.fontSize||e.titleFontSize,a=t.subtitle.fontSize||e.subtitleFontSize,o=t.title.name||"",r=t.subtitle.name||"",s=t.title.color||e.titleColor,l=t.subtitle.color||e.subtitleColor,h=o?n:0,f=r?a:0;if(r){var d=c(r,a),x=(t.width-d)/2+(t.subtitle.offsetX||0),u=(t.height-e.legendHeight+a)/2;o&&(u-=(h+5)/2),i.beginPath(),i.setFontSize(a),i.setFillStyle(l),i.fillText(r,x,u),i.stroke(),i.closePath()}if(o){var g=c(o,n),p=(t.width-g)/2+(t.title.offsetX||0),y=(t.height-e.legendHeight+n)/2;r&&(y+=(f+5)/2),i.beginPath(),i.setFontSize(n),i.setFillStyle(s),i.fillText(o,p,y),i.stroke(),i.closePath()}}function I(t,e,i,n){var a=e.data;n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle("#666666"),t.forEach(function(t,i){if(null!==t){var o=e.format?e.format(a[i]):a[i];n.fillText(o,t.x-c(o)/2,t.y-2)}}),n.closePath(),n.stroke()}function z(t,e,i,n,a,o){var s=n.extra.radar||{};e+=a.radarLabelTextMargin,o.beginPath(),o.setFontSize(a.fontSize),o.setFillStyle(s.labelColor||"#666666"),t.forEach(function(t,s){var l={x:e*Math.cos(t),y:e*Math.sin(t)},h=r(l.x,l.y,i),f=h.x,d=h.y;et.approximatelyEqual(l.x,0)?f-=c(n.categories[s]||"")/2:l.x<0&&(f-=c(n.categories[s]||"")),o.fillText(n.categories[s]||"",f,d+a.fontSize/2)}),o.stroke(),o.closePath()}function D(t,e,i,n,a,o){var l=a+i.pieChartLinePadding,h=[],f=null;t.map(function(t){return{arc:2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),text:t.format?t.format(+t._proportion_.toFixed(2)):et.toFixed(100*t._proportion_)+"%",color:t.color}}).forEach(function(t){var e=Math.cos(t.arc)*l,n=Math.sin(t.arc)*l,o=Math.cos(t.arc)*a,r=Math.sin(t.arc)*a,d=e>=0?e+i.pieChartTextPadding:e-i.pieChartTextPadding,x=n,u=c(t.text),g=x;f&&et.isSameXCoordinateArea(f.start,{x:d})&&(g=d>0?Math.min(x,f.start.y):e<0?Math.max(x,f.start.y):x>0?Math.max(x,f.start.y):Math.min(x,f.start.y)),d<0&&(d-=u);var p={lineStart:{x:o,y:r},lineEnd:{x:e,y:n},start:{x:d,y:g},width:u,height:i.fontSize,text:t.text,color:t.color};f=s(p,f),h.push(f)}),h.forEach(function(t){var e=r(t.lineStart.x,t.lineStart.y,o),a=r(t.lineEnd.x,t.lineEnd.y,o),s=r(t.start.x,t.start.y,o);n.setLineWidth(1),n.setFontSize(i.fontSize),n.beginPath(),n.setStrokeStyle(t.color),n.setFillStyle(t.color),n.moveTo(e.x,e.y);var l=t.start.x<0?s.x+t.width:s.x,h=t.start.x<0?s.x-5:s.x+5;n.quadraticCurveTo(a.x,a.y,l,s.y),n.moveTo(e.x,e.y),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(s.x+t.width,s.y),n.arc(l,s.y,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFillStyle("#666666"),n.fillText(t.text,h,s.y+3),n.closePath(),n.stroke(),n.closePath()})}function W(t,e,i,n){var a=i.padding,o=e.height-i.padding-i.xAxisHeight-i.legendHeight;n.beginPath(),n.setStrokeStyle("#cccccc"),n.setLineWidth(1),n.moveTo(t,a),n.lineTo(t,o),n.stroke(),n.closePath()}function O(e,i,n,a,o){var r=!1;(i=t({x:0,y:0},i)).y-=8;var s=e.map(function(t){return c(t.text)}),l=9+4*a.toolTipPadding+Math.max.apply(null,s),h=2*a.toolTipPadding+e.length*a.toolTipLineHeight;i.x-Math.abs(n._scrollDistance_)+8+l>n.width&&(r=!0),o.beginPath(),o.setFillStyle(n.tooltip.option.background||a.toolTipBackground),o.setGlobalAlpha(a.toolTipOpacity),r?(o.moveTo(i.x,i.y+10),o.lineTo(i.x-8,i.y+10-5),o.lineTo(i.x-8,i.y+10+5),o.moveTo(i.x,i.y+10),o.fillRect(i.x-l-8,i.y,l,h)):(o.moveTo(i.x,i.y+10),o.lineTo(i.x+8,i.y+10-5),o.lineTo(i.x+8,i.y+10+5),o.moveTo(i.x,i.y+10),o.fillRect(i.x+8,i.y,l,h)),o.closePath(),o.fill(),o.setGlobalAlpha(1),e.forEach(function(t,e){o.beginPath(),o.setFillStyle(t.color);var n=i.x+8+2*a.toolTipPadding,s=i.y+(a.toolTipLineHeight-a.fontSize)/2+a.toolTipLineHeight*e+a.toolTipPadding;r&&(n=i.x-l-8+2*a.toolTipPadding),o.fillRect(n,s,4,a.fontSize),o.closePath()}),o.beginPath(),o.setFontSize(a.fontSize),o.setFillStyle("#ffffff"),e.forEach(function(t,e){var n=i.x+8+2*a.toolTipPadding+4+5;r&&(n=i.x-l-8+2*a.toolTipPadding+4+5);var s=i.y+(a.toolTipLineHeight-a.fontSize)/2+a.toolTipLineHeight*e+a.toolTipPadding;o.fillText(t.text,n,s+a.fontSize)}),o.stroke(),o.closePath()}function X(t,e,i,n){var a=i.xAxisHeight+(e.height-i.xAxisHeight-c(t))/2;n.save(),n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.yAxis.titleFontColor||"#333333"),n.translate(0,e.height),n.rotate(-90*Math.PI/180),n.fillText(t,a,i.padding+.5*i.fontSize),n.stroke(),n.closePath(),n.restore()}function G(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=k(t,e,i).ranges,r=F(e.categories,e,i),s=r.xAxisPoints,l=r.eachSpacing,h=o.pop(),c=o.shift();return n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&n.translate(e._scrollDistance_,0),t.forEach(function(o,r){var f=w(o.data,h,c,s,l,e,i,a);f=E(f,l,t.length,r,i,e),n.beginPath(),n.setFillStyle(o.color),f.forEach(function(t,a){if(null!==t){var o=t.x-t.width/2+1,r=e.height-t.y-i.padding-i.xAxisHeight-i.legendHeight;n.moveTo(o,t.y),n.rect(o,t.y,t.width-2,r)}}),n.closePath(),n.fill()}),t.forEach(function(o,r){var f=w(o.data,h,c,s,l,e,i,a);f=E(f,l,t.length,r,i,e),!1!==e.dataLabel&&1===a&&I(f,o,i,n)}),n.restore(),{xAxisPoints:s,eachSpacing:l}}function R(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=k(t,e,i).ranges,s=F(e.categories,e,i),l=s.xAxisPoints,h=s.eachSpacing,c=r.pop(),f=r.shift(),d=e.height-i.padding-i.xAxisHeight-i.legendHeight,x=[];return n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&n.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===a&&W(e.tooltip.offset.x,e,i,n),t.forEach(function(t,r){var s=w(t.data,c,f,l,h,e,i,a);if(x.push(s),S(s).forEach(function(i){if(n.beginPath(),n.setStrokeStyle(t.color),n.setFillStyle(t.color),n.setGlobalAlpha(.6),n.setLineWidth(2),i.length>1){var a=i[0],r=i[i.length-1];n.moveTo(a.x,a.y),"curve"===e.extra.lineStyle?i.forEach(function(t,e){if(e>0){var a=o(i,e-1);n.bezierCurveTo(a.ctrA.x,a.ctrA.y,a.ctrB.x,a.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&n.lineTo(t.x,t.y)}),n.lineTo(r.x,d),n.lineTo(a.x,d),n.lineTo(a.x,a.y)}else{var s=i[0];n.moveTo(s.x-h/2,s.y),n.lineTo(s.x+h/2,s.y),n.lineTo(s.x+h/2,d),n.lineTo(s.x-h/2,d),n.moveTo(s.x-h/2,s.y)}n.closePath(),n.fill(),n.setGlobalAlpha(1)}),!1!==e.dataPointShape){var u=i.dataPointShape[r%i.dataPointShape.length];C(s,t.color,u,n)}}),!1!==e.dataLabel&&1===a&&t.forEach(function(t,o){I(w(t.data,c,f,l,h,e,i,a),t,i,n)}),n.restore(),{xAxisPoints:l,calPoints:x,eachSpacing:h}}function q(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=k(t,e,i).ranges,s=F(e.categories,e,i),l=s.xAxisPoints,h=s.eachSpacing,c=r.pop(),f=r.shift(),d=[];return n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&n.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===a&&W(e.tooltip.offset.x,e,i,n),t.forEach(function(t,r){var s=w(t.data,c,f,l,h,e,i,a);if(d.push(s),S(s).forEach(function(i,a){n.beginPath(),n.setStrokeStyle(t.color),n.setLineWidth(2),1===i.length?(n.moveTo(i[0].x,i[0].y),n.arc(i[0].x,i[0].y,1,0,2*Math.PI)):(n.moveTo(i[0].x,i[0].y),"curve"===e.extra.lineStyle?i.forEach(function(t,e){if(e>0){var a=o(i,e-1);n.bezierCurveTo(a.ctrA.x,a.ctrA.y,a.ctrB.x,a.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&n.lineTo(t.x,t.y)}),n.moveTo(i[0].x,i[0].y)),n.closePath(),n.stroke()}),!1!==e.dataPointShape){var x=i.dataPointShape[r%i.dataPointShape.length];C(s,t.color,x,n)}}),!1!==e.dataLabel&&1===a&&t.forEach(function(t,o){I(w(t.data,c,f,l,h,e,i,a),t,i,n)}),n.restore(),{xAxisPoints:l,calPoints:d,eachSpacing:h}}function B(t,e,i,n){i.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&i.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===n&&O(t.tooltip.textList,t.tooltip.offset,t,e,i),i.restore()}function j(t,e,i,n){var o=F(t,e,i),r=o.xAxisPoints,s=(o.startX,o.endX,o.eachSpacing),l=e.height-i.padding-i.xAxisHeight-i.legendHeight,h=l+i.xAxisLineHeight;n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&n.translate(e._scrollDistance_,0),n.beginPath(),n.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),!0!==e.xAxis.disableGrid&&("calibration"===e.xAxis.type?r.forEach(function(t,e){e>0&&(n.moveTo(t-s/2,l),n.lineTo(t-s/2,l+4))}):r.forEach(function(t,e){n.moveTo(t,l),n.lineTo(t,h)})),n.closePath(),n.stroke();var f=e.width-2*i.padding-i.yAxisWidth-i.yAxisTitleWidth,d=Math.min(t.length,Math.ceil(f/i.fontSize/1.5)),x=Math.ceil(t.length/d);t=t.map(function(t,e){return e%x!=0?"":t}),0===i._xAxisTextAngle_?(n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.xAxis.fontColor||"#666666"),t.forEach(function(t,e){var a=s/2-c(t)/2;n.fillText(t,r[e]+a,l+i.fontSize+5)}),n.closePath(),n.stroke()):t.forEach(function(t,o){n.save(),n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.xAxis.fontColor||"#666666");var h=c(t),f=s/2-h,d=a(r[o]+s/2,l+i.fontSize/2+5,e.height),x=d.transX,u=d.transY;n.rotate(-1*i._xAxisTextAngle_),n.translate(x,u),n.fillText(t,r[o]+f,l+i.fontSize+5),n.closePath(),n.stroke(),n.restore()}),n.restore()}function N(t,e,i){for(var n=t.height-2*e.padding-e.xAxisHeight-e.legendHeight,a=Math.floor(n/e.yAxisSplit),o=e.yAxisWidth+e.yAxisTitleWidth,r=e.padding+o,s=t.width-e.padding,l=[],h=0;h<e.yAxisSplit;h++)l.push(e.padding+a*h);l.push(e.padding+a*e.yAxisSplit+2),i.beginPath(),i.setStrokeStyle(t.yAxis.gridColor||"#cccccc"),i.setLineWidth(1),l.forEach(function(t,e){i.moveTo(r,t),i.lineTo(s,t)}),i.closePath(),i.stroke()}function Y(t,e,i,n){if(!0!==e.yAxis.disabled){var a=k(t,e,i).rangesFormat,o=i.yAxisWidth+i.yAxisTitleWidth,r=e.height-2*i.padding-i.xAxisHeight-i.legendHeight,s=Math.floor(r/i.yAxisSplit),l=i.padding+o,h=e.width-i.padding,c=e.height-i.padding-i.xAxisHeight-i.legendHeight;n.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&n.fillRect(0,0,l,c+i.xAxisHeight+5),n.fillRect(h,0,e.width,c+i.xAxisHeight+5);for(var f=[],d=0;d<=i.yAxisSplit;d++)f.push(i.padding+s*d);n.stroke(),n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.yAxis.fontColor||"#666666"),a.forEach(function(t,e){var a=f[e]?f[e]:c;n.fillText(t,i.padding+i.yAxisTitleWidth,a+i.fontSize/2)}),n.closePath(),n.stroke(),e.yAxis.title&&X(e.yAxis.title,e,i,n)}}function Z(t,e,i,n){e.legend&&T(t,e,i).legendList.forEach(function(t,a){var o=0;t.forEach(function(t){t.name=t.name||"undefined",o+=15+c(t.name)+15});var r=(e.width-o)/2+5,s=e.height-i.padding-i.legendHeight+a*(i.fontSize+8)+5+8;n.setFontSize(i.fontSize),t.forEach(function(t){switch(e.type){case"line":n.beginPath(),n.setLineWidth(1),n.setStrokeStyle(t.color),n.moveTo(r-2,s+5),n.lineTo(r+17,s+5),n.stroke(),n.closePath(),n.beginPath(),n.setLineWidth(1),n.setStrokeStyle("#ffffff"),n.setFillStyle(t.color),n.moveTo(r+7.5,s+5),n.arc(r+7.5,s+5,4,0,2*Math.PI),n.fill(),n.stroke(),n.closePath();break;case"pie":case"ring":n.beginPath(),n.setFillStyle(t.color),n.moveTo(r+7.5,s+5),n.arc(r+7.5,s+5,7,0,2*Math.PI),n.closePath(),n.fill();break;default:n.beginPath(),n.setFillStyle(t.color),n.moveTo(r,s),n.rect(r,s,15,10),n.closePath(),n.fill()}r+=20,n.beginPath(),n.setFillStyle(e.extra.legendTextColor||"#333333"),n.fillText(t.name,r,s+9),n.closePath(),n.stroke(),r+=c(t.name)+10})})}function J(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.pie||{};t=M(t,a);var r={x:e.width/2,y:(e.height-i.legendHeight)/2},s=Math.min(r.x-i.pieChartLinePadding-i.pieChartTextPadding-i._pieTextMaxLength_,r.y-i.pieChartLinePadding-i.pieChartTextPadding);if(e.dataLabel?s-=10:s-=2*i.padding,(t=t.map(function(t){return t._start_+=(o.offsetAngle||0)*Math.PI/180,t})).forEach(function(t){n.beginPath(),n.setLineWidth(2),n.setStrokeStyle("#ffffff"),n.setFillStyle(t.color),n.moveTo(r.x,r.y),n.arc(r.x,r.y,s,t._start_,t._start_+2*t._proportion_*Math.PI),n.closePath(),n.fill(),!0!==e.disablePieStroke&&n.stroke()}),"ring"===e.type){var l=.6*s;"number"==typeof e.extra.ringWidth&&e.extra.ringWidth>0&&(l=Math.max(0,s-e.extra.ringWidth)),n.beginPath(),n.setFillStyle(e.background||"#ffffff"),n.moveTo(r.x,r.y),n.arc(r.x,r.y,l,0,2*Math.PI),n.closePath(),n.fill()}if(!1!==e.dataLabel&&1===a){for(var h=!1,c=0,f=t.length;c<f;c++)if(t[c].data>0){h=!0;break}h&&D(t,e,i,n,s,r)}return 1===a&&"ring"===e.type&&H(e,i,n),{center:r,radius:s,series:t}}function K(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.radar||{},s=u(e.categories.length),l={x:e.width/2,y:(e.height-i.legendHeight)/2},h=Math.min(l.x-(x(e.categories)+i.radarLabelTextMargin),l.y-i.radarLabelTextMargin);h-=i.padding,n.beginPath(),n.setLineWidth(1),n.setStrokeStyle(o.gridColor||"#cccccc"),s.forEach(function(t){var e=r(h*Math.cos(t),h*Math.sin(t),l);n.moveTo(l.x,l.y),n.lineTo(e.x,e.y)}),n.stroke(),n.closePath();for(var c=1;c<=i.radarGridCount;c++)!function(t){var e={};n.beginPath(),n.setLineWidth(1),n.setStrokeStyle(o.gridColor||"#cccccc"),s.forEach(function(a,o){var s=r(h/i.radarGridCount*t*Math.cos(a),h/i.radarGridCount*t*Math.sin(a),l);0===o?(e=s,n.moveTo(s.x,s.y)):n.lineTo(s.x,s.y)}),n.lineTo(e.x,e.y),n.stroke(),n.closePath()}(c);return b(s,l,h,t,e,a).forEach(function(t,a){if(n.beginPath(),n.setFillStyle(t.color),n.setGlobalAlpha(.6),t.data.forEach(function(t,e){0===e?n.moveTo(t.position.x,t.position.y):n.lineTo(t.position.x,t.position.y)}),n.closePath(),n.fill(),n.setGlobalAlpha(1),!1!==e.dataPointShape){var o=i.dataPointShape[a%i.dataPointShape.length];C(t.data.map(function(t){return t.position}),t.color,o,n)}}),z(s,h,l,e,i,n),{center:l,radius:h,angleList:s}}function Q(t,e){e.draw()}function U(t){this.isStop=!1,t.duration=void 0===t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:function(t){t(null)},i=null,n=function(a){if(null===a||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===i&&(i=a),a-i<t.duration){var o=(a-i)/t.duration;o=(0,it[t.timing])(o),t.onProcess&&t.onProcess(o),e(n,17)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};n=n.bind(this),e(n,17)}function V(t,e,i,n){var a=this,o=e.series,r=e.categories,s=T(o=l(o,i),e,i).legendHeight;i.legendHeight=s;var h=k(o,e,i).yAxisWidth;if(i.yAxisWidth=h,r&&r.length){var c=A(r,e,i),f=c.xAxisHeight,d=c.angle;i.xAxisHeight=f,i._xAxisTextAngle_=d}"pie"!==t&&"ring"!==t||(i._pieTextMaxLength_=!1===e.dataLabel?0:_(o));var x=e.animation?1e3:0;switch(this.animationInstance&&this.animationInstance.stop(),t){case"line":this.animationInstance=new U({timing:"easeIn",duration:x,onProcess:function(t){N(e,i,n);var s=q(o,e,i,n,t),l=s.xAxisPoints,h=s.calPoints,c=s.eachSpacing;a.chartData.xAxisPoints=l,a.chartData.calPoints=h,a.chartData.eachSpacing=c,j(r,e,i,n),Z(e.series,e,i,n),Y(o,e,i,n),B(e,i,n,t),Q(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new U({timing:"easeIn",duration:x,onProcess:function(t){N(e,i,n);var s=G(o,e,i,n,t),l=s.xAxisPoints,h=s.eachSpacing;a.chartData.xAxisPoints=l,a.chartData.eachSpacing=h,j(r,e,i,n),Z(e.series,e,i,n),Y(o,e,i,n),Q(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new U({timing:"easeIn",duration:x,onProcess:function(t){N(e,i,n);var s=R(o,e,i,n,t),l=s.xAxisPoints,h=s.calPoints,c=s.eachSpacing;a.chartData.xAxisPoints=l,a.chartData.calPoints=h,a.chartData.eachSpacing=c,j(r,e,i,n),Z(e.series,e,i,n),Y(o,e,i,n),B(e,i,n,t),Q(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new U({timing:"easeInOut",duration:x,onProcess:function(t){a.chartData.pieData=J(o,e,i,n,t),Z(e.series,e,i,n),Q(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new U({timing:"easeInOut",duration:x,onProcess:function(t){a.chartData.radarData=K(o,e,i,n,t),Z(e.series,e,i,n),Q(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}})}}function $(){this.events={}}var tt={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:12,columePadding:3,fontSize:10,dataPointShape:["diamond","circle","triangle","rect"],colors:["#7cb5ec","#f7a35c","#434348","#90ed7d","#f15c80","#8085e9"],pieChartLinePadding:25,pieChartTextPadding:15,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:14,radarGridCount:3,radarLabelTextMargin:15},et={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!=0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){return t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height,!(e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y)}},it={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};U.prototype.stop=function(){this.isStop=!0},$.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},$.prototype.trigger=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var n=e[0],a=e.slice(1);this.events[n]&&this.events[n].forEach(function(t){try{t.apply(null,a)}catch(t){console.error(t)}})};var nt=function(e){e.title=e.title||{},e.subtitle=e.subtitle||{},e.yAxis=e.yAxis||{},e.xAxis=e.xAxis||{},e.extra=e.extra||{},e.legend=!1!==e.legend,e.animation=!1!==e.animation;var i=t({},tt);i.yAxisTitleWidth=!0!==e.yAxis.disabled&&e.yAxis.title?i.yAxisTitleWidth:0,i.pieChartLinePadding=!1===e.dataLabel?0:i.pieChartLinePadding,i.pieChartTextPadding=!1===e.dataLabel?0:i.pieChartTextPadding,this.opts=e,this.config=i,this.context=wx.createCanvasContext(e.canvasId),this.chartData={},this.event=new $,this.scrollOption={currentOffset:0,startTouchX:0,distance:0},V.call(this,e.type,e,i,this.context)};nt.prototype.updateData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts.series=e.series||this.opts.series,this.opts.categories=e.categories||this.opts.categories,this.opts.title=t({},this.opts.title,e.title||{}),this.opts.subtitle=t({},this.opts.subtitle,e.subtitle||{}),V.call(this,this.opts.type,this.opts,this.config,this.context)},nt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},nt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},nt.prototype.getCurrentDataIndex=function(t){var e=t.touches&&t.touches.length?t.touches:t.changedTouches;if(e&&e.length){var i=e[0],n=i.x,a=i.y;return"pie"===this.opts.type||"ring"===this.opts.type?m({x:n,y:a},this.chartData.pieData):"radar"===this.opts.type?v({x:n,y:a},this.chartData.radarData,this.opts.categories.length):p({x:n,y:a},this.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},nt.prototype.showToolTip=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("line"===this.opts.type||"area"===this.opts.type){var n=this.getCurrentDataIndex(e),a=this.scrollOption.currentOffset,o=t({},this.opts,{_scrollDistance_:a,animation:!1});if(n>-1){var r=d(this.opts.series,n);if(0!==r.length){var s=g(r,this.chartData.calPoints,n,this.opts.categories,i),l=s.textList,h=s.offset;o.tooltip={textList:l,offset:h,option:i}}}V.call(this,o.type,o,this.config,this.context)}},nt.prototype.scrollStart=function(t){t.touches[0]&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=t.touches[0].x)},nt.prototype.scroll=function(e){if(e.touches[0]&&!0===this.opts.enableScroll){var n=e.touches[0].x-this.scrollOption.startTouchX,a=this.scrollOption.currentOffset,o=i(a+n,this.chartData,this.config,this.opts);this.scrollOption.distance=n=o-a;var r=t({},this.opts,{_scrollDistance_:a+n,animation:!1});V.call(this,r.type,r,this.config,this.context)}},nt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,i=e.currentOffset,n=e.distance;this.scrollOption.currentOffset=i+n,this.scrollOption.distance=0}},module.exports=nt; 
 			}); 
		define("utils/wxcharts.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),n=1;n<arguments.length;n++){var a=arguments[n];if(null!=a)for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(i[o]=a[o])}return i}function e(t,e,i){if(isNaN(t))throw new Error("[wxCharts] unvalid series data!");i=i||10,e=e||"upper";for(var n=1;i<1;)i*=10,n*=10;for(t="upper"===e?Math.ceil(t*n):Math.floor(t*n);t%i!=0;)"upper"===e?t++:t--;return t/n}function i(t,e,i,n){var a=n.width-i.padding-e.xAxisPoints[0],o=e.eachSpacing*n.categories.length,r=t;return t>=0?r=0:Math.abs(t)>=o-a&&(r=a-o),r}function n(t,e,i){function n(t){for(;t<0;)t+=2*Math.PI;for(;t>2*Math.PI;)t-=2*Math.PI;return t}return t=n(t),e=n(e),i=n(i),e>i&&(i+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=i}function a(t,e,i){var n=t,a=i-e,o=n+(i-a-n)/Math.sqrt(2);return{transX:o*=-1,transY:(i-a)*(Math.sqrt(2)-1)-(i-a-n)/Math.sqrt(2)}}function o(t,e){function i(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var n=null,a=null,o=null,r=null;if(e<1?(n=t[0].x+.2*(t[1].x-t[0].x),a=t[0].y+.2*(t[1].y-t[0].y)):(n=t[e].x+.2*(t[e+1].x-t[e-1].x),a=t[e].y+.2*(t[e+1].y-t[e-1].y)),e>t.length-3){var s=t.length-1;o=t[s].x-.2*(t[s].x-t[s-1].x),r=t[s].y-.2*(t[s].y-t[s-1].y)}else o=t[e+1].x-.2*(t[e+2].x-t[e].x),r=t[e+1].y-.2*(t[e+2].y-t[e].y);return i(t,e+1)&&(r=t[e+1].y),i(t,e)&&(a=t[e].y),{ctrA:{x:n,y:a},ctrB:{x:o,y:r}}}function r(t,e,i){return{x:i.x+t,y:i.y-e}}function s(t,e){if(e)for(;et.isCollision(t,e);)t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function l(t,e){var i=0;return t.map(function(t){return t.color||(t.color=e.colors[i],i=(i+1)%e.colors.length),t})}function h(t,i){var n=0,a=i-t;return n=a>=1e4?1e3:a>=1e3?100:a>=100?10:a>=10?5:a>=1?1:a>=.1?.1:.01,{minRange:e(t,"lower",n),maxRange:e(i,"upper",n)}}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=0;return(t=(t=String(t)).split("")).forEach(function(t){/[a-zA-Z]/.test(t)?i+=7:/[0-9]/.test(t)?i+=5.5:/\./.test(t)?i+=2.7:/-/.test(t)?i+=3.25:/[\u4e00-\u9fa5]/.test(t)?i+=10:/\(|\)/.test(t)?i+=3.73:/\s/.test(t)?i+=2.5:/%/.test(t)?i+=8:i+=10}),i*e/10}function f(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function d(t,e){var i=[];return t.forEach(function(t){if(null!==t.data[e]&&"undefinded"!=typeof t.data[e]){var n={};n.color=t.color,n.name=t.name,n.data=t.format?t.format(t.data[e]):t.data[e],i.push(n)}}),i}function x(t){var e=t.map(function(t){return c(t)});return Math.max.apply(null,e)}function u(t){for(var e=2*Math.PI/t,i=[],n=0;n<t;n++)i.push(e*n);return i.map(function(t){return-1*t+Math.PI/2})}function g(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.map(function(t){return{text:a.format?a.format(t,n[i]):t.name+": "+t.data,color:t.color}}),r=[],s={x:0,y:0};return e.forEach(function(t){"undefinded"!=typeof t[i]&&null!==t[i]&&r.push(t[i])}),r.forEach(function(t){s.x=Math.round(t.x),s.y+=t.y}),s.y/=r.length,{textList:o,offset:s}}function p(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=-1;return y(t,i,n)&&e.forEach(function(e,i){t.x+a>e&&(o=i)}),o}function y(t,e,i){return t.x<e.width-i.padding&&t.x>i.padding+i.yAxisWidth+i.yAxisTitleWidth&&t.y>i.padding&&t.y<e.height-i.legendHeight-i.xAxisHeight-i.padding}function v(t,e,i){var n=2*Math.PI/i,a=-1;if(m(t,e.center,e.radius)){var o=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},r=Math.atan2(e.center.y-t.y,t.x-e.center.x);(r*=-1)<0&&(r+=2*Math.PI),e.angleList.map(function(t){return t=o(-1*t)}).forEach(function(t,e){var i=o(t-n/2),s=o(t+n/2);s<i&&(s+=2*Math.PI),(r>=i&&r<=s||r+2*Math.PI>=i&&r+2*Math.PI<=s)&&(a=e)})}return a}function P(t,e){var i=-1;if(m(t,e.center,e.radius)){var a=Math.atan2(e.center.y-t.y,t.x-e.center.x);a=-a;for(var o=0,r=e.series.length;o<r;o++){var s=e.series[o];if(n(a,s._start_,s._start_+2*s._proportion_*Math.PI)){i=o;break}}}return i}function m(t,e,i){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(i,2)}function S(t){var e=[],i=[];return t.forEach(function(t,n){null!==t?i.push(t):(i.length&&e.push(i),i=[])}),i.length&&e.push(i),e}function T(t,e,i){if(!1===e.legend)return{legendList:[],legendHeight:0};var n=[],a=0,o=[];return t.forEach(function(t){var i=30+c(t.name||"undefinded");a+i>e.width?(n.push(o),a=i,o=[t]):(a+=i,o.push(t))}),o.length&&n.push(o),{legendList:n,legendHeight:n.length*(i.fontSize+8)+5}}function A(t,e,i){var n={angle:0,xAxisHeight:i.xAxisHeight},a=F(t,e,i).eachSpacing,o=t.map(function(t){return c(t)}),r=Math.max.apply(this,o);return r+2*i.xAxisTextPadding>a&&(n.angle=45*Math.PI/180,n.xAxisHeight=2*i.xAxisTextPadding+r*Math.sin(n.angle)),n}function b(t,e,i,n,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=a.extra.radar||{};s.max=s.max||0;var l=Math.max(s.max,Math.max.apply(null,f(n))),h=[];return n.forEach(function(n){var a={};a.color=n.color,a.data=[],n.data.forEach(function(n,s){var h={};h.angle=t[s],h.proportion=n/l,h.position=r(i*h.proportion*o*Math.cos(h.angle),i*h.proportion*o*Math.sin(h.angle),e),a.data.push(h)}),h.push(a)}),h}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=0,n=0;return t.forEach(function(t){t.data=null===t.data?0:t.data,i+=t.data}),t.forEach(function(t){t.data=null===t.data?0:t.data,t._proportion_=t.data/i*e}),t.forEach(function(t){t._start_=n,n+=2*t._proportion_*Math.PI}),t}function _(t){var e=0;return(t=M(t)).forEach(function(t){var i=t.format?t.format(+t._proportion_.toFixed(2)):et.toFixed(100*t._proportion_)+"%";e=Math.max(e,c(i))}),e}function E(t,e,i,n,a,o){return t.map(function(t){return null===t?null:(t.width=(e-2*a.columePadding)/i,o.extra.column&&o.extra.column.width&&+o.extra.column.width>0?t.width=Math.min(t.width,+o.extra.column.width):t.width=Math.min(t.width,25),t.x+=(n+.5-i/2)*t.width,t)})}function F(t,e,i){var n=i.yAxisWidth+i.yAxisTitleWidth,a=(e.width-2*i.padding-n)/(e.enableScroll?Math.min(5,t.length):t.length),o=[],r=i.padding+n,s=e.width-i.padding;return t.forEach(function(t,e){o.push(r+e*a)}),!0===e.enableScroll?o.push(r+t.length*a):o.push(s),{xAxisPoints:o,startX:r,endX:s,eachSpacing:a}}function w(t,e,i,n,a,o,r){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],h=o.height-2*r.padding-r.xAxisHeight-r.legendHeight;return t.forEach(function(t,c){if(null===t)l.push(null);else{var f={};f.x=n[c]+Math.round(a/2);var d=h*(t-e)/(i-e);d*=s,f.y=o.height-r.xAxisHeight-r.legendHeight-Math.round(d)-r.padding,l.push(f)}}),l}function L(t,e,i){var n=f(t);n=n.filter(function(t){return null!==t});var a=Math.min.apply(this,n),o=Math.max.apply(this,n);if("number"==typeof e.yAxis.min&&(a=Math.min(e.yAxis.min,a)),"number"==typeof e.yAxis.max&&(o=Math.max(e.yAxis.max,o)),a===o){var r=o||1;a-=r,o+=r}for(var s=h(a,o),l=s.minRange,c=[],d=(s.maxRange-l)/i.yAxisSplit,x=0;x<=i.yAxisSplit;x++)c.push(l+d*x);return c.reverse()}function k(t,e,i){var n=L(t,e,i),a=i.yAxisWidth,o=n.map(function(t){return t=et.toFixed(t,2),t=e.yAxis.format?e.yAxis.format(Number(t)):t,a=Math.max(a,c(t)+5),t});return!0===e.yAxis.disabled&&(a=0),{rangesFormat:o,ranges:n,yAxisWidth:a}}function C(t,e,i,n){n.beginPath(),n.setStrokeStyle("#ffffff"),n.setLineWidth(1),n.setFillStyle(e),"diamond"===i?t.forEach(function(t,e){null!==t&&(n.moveTo(t.x,t.y-4.5),n.lineTo(t.x-4.5,t.y),n.lineTo(t.x,t.y+4.5),n.lineTo(t.x+4.5,t.y),n.lineTo(t.x,t.y-4.5))}):"circle"===i?t.forEach(function(t,e){null!==t&&(n.moveTo(t.x+3.5,t.y),n.arc(t.x,t.y,4,0,2*Math.PI,!1))}):"rect"===i?t.forEach(function(t,e){null!==t&&(n.moveTo(t.x-3.5,t.y-3.5),n.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===i&&t.forEach(function(t,e){null!==t&&(n.moveTo(t.x,t.y-4.5),n.lineTo(t.x-4.5,t.y+4.5),n.lineTo(t.x+4.5,t.y+4.5),n.lineTo(t.x,t.y-4.5))}),n.closePath(),n.fill(),n.stroke()}function H(t,e,i){var n=t.title.fontSize||e.titleFontSize,a=t.subtitle.fontSize||e.subtitleFontSize,o=t.title.name||"",r=t.subtitle.name||"",s=t.title.color||e.titleColor,l=t.subtitle.color||e.subtitleColor,h=o?n:0,f=r?a:0;if(r){var d=c(r,a),x=(t.width-d)/2+(t.subtitle.offsetX||0),u=(t.height-e.legendHeight+a)/2;o&&(u-=(h+5)/2),i.beginPath(),i.setFontSize(a),i.setFillStyle(l),i.fillText(r,x,u),i.stroke(),i.closePath()}if(o){var g=c(o,n),p=(t.width-g)/2+(t.title.offsetX||0),y=(t.height-e.legendHeight+n)/2;r&&(y+=(f+5)/2),i.beginPath(),i.setFontSize(n),i.setFillStyle(s),i.fillText(o,p,y),i.stroke(),i.closePath()}}function I(t,e,i,n){var a=e.data;n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle("#666666"),t.forEach(function(t,i){if(null!==t){var o=e.format?e.format(a[i]):a[i];n.fillText(o,t.x-c(o)/2,t.y-2)}}),n.closePath(),n.stroke()}function z(t,e,i,n,a,o){var s=n.extra.radar||{};e+=a.radarLabelTextMargin,o.beginPath(),o.setFontSize(a.fontSize),o.setFillStyle(s.labelColor||"#666666"),t.forEach(function(t,s){var l={x:e*Math.cos(t),y:e*Math.sin(t)},h=r(l.x,l.y,i),f=h.x,d=h.y;et.approximatelyEqual(l.x,0)?f-=c(n.categories[s]||"")/2:l.x<0&&(f-=c(n.categories[s]||"")),o.fillText(n.categories[s]||"",f,d+a.fontSize/2)}),o.stroke(),o.closePath()}function D(t,e,i,n,a,o){var l=a+i.pieChartLinePadding,h=[],f=null;t.map(function(t){return{arc:2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),text:t.format?t.format(+t._proportion_.toFixed(2)):et.toFixed(100*t._proportion_)+"%",color:t.color}}).forEach(function(t){var e=Math.cos(t.arc)*l,n=Math.sin(t.arc)*l,o=Math.cos(t.arc)*a,r=Math.sin(t.arc)*a,d=e>=0?e+i.pieChartTextPadding:e-i.pieChartTextPadding,x=n,u=c(t.text),g=x;f&&et.isSameXCoordinateArea(f.start,{x:d})&&(g=d>0?Math.min(x,f.start.y):e<0?Math.max(x,f.start.y):x>0?Math.max(x,f.start.y):Math.min(x,f.start.y)),d<0&&(d-=u);var p={lineStart:{x:o,y:r},lineEnd:{x:e,y:n},start:{x:d,y:g},width:u,height:i.fontSize,text:t.text,color:t.color};f=s(p,f),h.push(f)}),h.forEach(function(t){var e=r(t.lineStart.x,t.lineStart.y,o),a=r(t.lineEnd.x,t.lineEnd.y,o),s=r(t.start.x,t.start.y,o);n.setLineWidth(1),n.setFontSize(i.fontSize),n.beginPath(),n.setStrokeStyle(t.color),n.setFillStyle(t.color),n.moveTo(e.x,e.y);var l=t.start.x<0?s.x+t.width:s.x,h=t.start.x<0?s.x-5:s.x+5;n.quadraticCurveTo(a.x,a.y,l,s.y),n.moveTo(e.x,e.y),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(s.x+t.width,s.y),n.arc(l,s.y,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFillStyle("#666666"),n.fillText(t.text,h,s.y+3),n.closePath(),n.stroke(),n.closePath()})}function W(t,e,i,n){var a=i.padding,o=e.height-i.padding-i.xAxisHeight-i.legendHeight;n.beginPath(),n.setStrokeStyle("#cccccc"),n.setLineWidth(1),n.moveTo(t,a),n.lineTo(t,o),n.stroke(),n.closePath()}function O(e,i,n,a,o){var r=!1;(i=t({x:0,y:0},i)).y-=8;var s=e.map(function(t){return c(t.text)}),l=9+4*a.toolTipPadding+Math.max.apply(null,s),h=2*a.toolTipPadding+e.length*a.toolTipLineHeight;i.x-Math.abs(n._scrollDistance_)+8+l>n.width&&(r=!0),o.beginPath(),o.setFillStyle(n.tooltip.option.background||a.toolTipBackground),o.setGlobalAlpha(a.toolTipOpacity),r?(o.moveTo(i.x,i.y+10),o.lineTo(i.x-8,i.y+10-5),o.lineTo(i.x-8,i.y+10+5),o.moveTo(i.x,i.y+10),o.fillRect(i.x-l-8,i.y,l,h)):(o.moveTo(i.x,i.y+10),o.lineTo(i.x+8,i.y+10-5),o.lineTo(i.x+8,i.y+10+5),o.moveTo(i.x,i.y+10),o.fillRect(i.x+8,i.y,l,h)),o.closePath(),o.fill(),o.setGlobalAlpha(1),e.forEach(function(t,e){o.beginPath(),o.setFillStyle(t.color);var n=i.x+8+2*a.toolTipPadding,s=i.y+(a.toolTipLineHeight-a.fontSize)/2+a.toolTipLineHeight*e+a.toolTipPadding;r&&(n=i.x-l-8+2*a.toolTipPadding),o.fillRect(n,s,4,a.fontSize),o.closePath()}),o.beginPath(),o.setFontSize(a.fontSize),o.setFillStyle("#ffffff"),e.forEach(function(t,e){var n=i.x+8+2*a.toolTipPadding+4+5;r&&(n=i.x-l-8+2*a.toolTipPadding+4+5);var s=i.y+(a.toolTipLineHeight-a.fontSize)/2+a.toolTipLineHeight*e+a.toolTipPadding;o.fillText(t.text,n,s+a.fontSize)}),o.stroke(),o.closePath()}function X(t,e,i,n){var a=i.xAxisHeight+(e.height-i.xAxisHeight-c(t))/2;n.save(),n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.yAxis.titleFontColor||"#333333"),n.translate(0,e.height),n.rotate(-90*Math.PI/180),n.fillText(t,a,i.padding+.5*i.fontSize),n.stroke(),n.closePath(),n.restore()}function G(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=k(t,e,i).ranges,r=F(e.categories,e,i),s=r.xAxisPoints,l=r.eachSpacing,h=o.pop(),c=o.shift();return n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&n.translate(e._scrollDistance_,0),t.forEach(function(o,r){var f=w(o.data,h,c,s,l,e,i,a);f=E(f,l,t.length,r,i,e),n.beginPath(),n.setFillStyle(o.color),f.forEach(function(t,a){if(null!==t){var o=t.x-t.width/2+1,r=e.height-t.y-i.padding-i.xAxisHeight-i.legendHeight;n.moveTo(o,t.y),n.rect(o,t.y,t.width-2,r)}}),n.closePath(),n.fill()}),t.forEach(function(o,r){var f=w(o.data,h,c,s,l,e,i,a);f=E(f,l,t.length,r,i,e),!1!==e.dataLabel&&1===a&&I(f,o,i,n)}),n.restore(),{xAxisPoints:s,eachSpacing:l}}function R(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=k(t,e,i).ranges,s=F(e.categories,e,i),l=s.xAxisPoints,h=s.eachSpacing,c=r.pop(),f=r.shift(),d=e.height-i.padding-i.xAxisHeight-i.legendHeight,x=[];return n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&n.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===a&&W(e.tooltip.offset.x,e,i,n),t.forEach(function(t,r){var s=w(t.data,c,f,l,h,e,i,a);if(x.push(s),S(s).forEach(function(i){if(n.beginPath(),n.setStrokeStyle(t.color),n.setFillStyle(t.color),n.setGlobalAlpha(.6),n.setLineWidth(2),i.length>1){var a=i[0],r=i[i.length-1];n.moveTo(a.x,a.y),"curve"===e.extra.lineStyle?i.forEach(function(t,e){if(e>0){var a=o(i,e-1);n.bezierCurveTo(a.ctrA.x,a.ctrA.y,a.ctrB.x,a.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&n.lineTo(t.x,t.y)}),n.lineTo(r.x,d),n.lineTo(a.x,d),n.lineTo(a.x,a.y)}else{var s=i[0];n.moveTo(s.x-h/2,s.y),n.lineTo(s.x+h/2,s.y),n.lineTo(s.x+h/2,d),n.lineTo(s.x-h/2,d),n.moveTo(s.x-h/2,s.y)}n.closePath(),n.fill(),n.setGlobalAlpha(1)}),!1!==e.dataPointShape){var u=i.dataPointShape[r%i.dataPointShape.length];C(s,t.color,u,n)}}),!1!==e.dataLabel&&1===a&&t.forEach(function(t,o){I(w(t.data,c,f,l,h,e,i,a),t,i,n)}),n.restore(),{xAxisPoints:l,calPoints:x,eachSpacing:h}}function q(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=k(t,e,i).ranges,s=F(e.categories,e,i),l=s.xAxisPoints,h=s.eachSpacing,c=r.pop(),f=r.shift(),d=[];return n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&n.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===a&&W(e.tooltip.offset.x,e,i,n),t.forEach(function(t,r){var s=w(t.data,c,f,l,h,e,i,a);if(d.push(s),S(s).forEach(function(i,a){n.beginPath(),n.setStrokeStyle(t.color),n.setLineWidth(2),1===i.length?(n.moveTo(i[0].x,i[0].y),n.arc(i[0].x,i[0].y,1,0,2*Math.PI)):(n.moveTo(i[0].x,i[0].y),"curve"===e.extra.lineStyle?i.forEach(function(t,e){if(e>0){var a=o(i,e-1);n.bezierCurveTo(a.ctrA.x,a.ctrA.y,a.ctrB.x,a.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&n.lineTo(t.x,t.y)}),n.moveTo(i[0].x,i[0].y)),n.closePath(),n.stroke()}),!1!==e.dataPointShape){var x=i.dataPointShape[r%i.dataPointShape.length];C(s,t.color,x,n)}}),!1!==e.dataLabel&&1===a&&t.forEach(function(t,o){I(w(t.data,c,f,l,h,e,i,a),t,i,n)}),n.restore(),{xAxisPoints:l,calPoints:d,eachSpacing:h}}function B(t,e,i,n){i.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&i.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===n&&O(t.tooltip.textList,t.tooltip.offset,t,e,i),i.restore()}function j(t,e,i,n){var o=F(t,e,i),r=o.xAxisPoints,s=(o.startX,o.endX,o.eachSpacing),l=e.height-i.padding-i.xAxisHeight-i.legendHeight,h=l+i.xAxisLineHeight;n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&n.translate(e._scrollDistance_,0),n.beginPath(),n.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),!0!==e.xAxis.disableGrid&&("calibration"===e.xAxis.type?r.forEach(function(t,e){e>0&&(n.moveTo(t-s/2,l),n.lineTo(t-s/2,l+4))}):r.forEach(function(t,e){n.moveTo(t,l),n.lineTo(t,h)})),n.closePath(),n.stroke();var f=e.width-2*i.padding-i.yAxisWidth-i.yAxisTitleWidth,d=Math.min(t.length,Math.ceil(f/i.fontSize/4)),x=Math.ceil(t.length/d);t=t.map(function(t,e){return e%x!=0?"":t}),0===i._xAxisTextAngle_?(n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.xAxis.fontColor||"#666666"),t.forEach(function(t,e){var a=s/2-c(t)/2;n.fillText(t,r[e]+a,l+i.fontSize+5)}),n.closePath(),n.stroke()):t.forEach(function(t,o){n.save(),n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.xAxis.fontColor||"#666666");var h=c(t),f=s/2-h,d=a(r[o]+s/2,l+i.fontSize/2+5,e.height),x=d.transX,u=d.transY;n.rotate(-1*i._xAxisTextAngle_),n.translate(x,u),n.fillText(t,r[o]+f,l+i.fontSize+5),n.closePath(),n.stroke(),n.restore()}),n.restore()}function N(t,e,i){for(var n=t.height-2*e.padding-e.xAxisHeight-e.legendHeight,a=Math.floor(n/e.yAxisSplit),o=e.yAxisWidth+e.yAxisTitleWidth,r=e.padding+o,s=t.width-e.padding,l=[],h=0;h<e.yAxisSplit;h++)l.push(e.padding+a*h);l.push(e.padding+a*e.yAxisSplit+2),i.beginPath(),i.setStrokeStyle(t.yAxis.gridColor||"#cccccc"),i.setLineWidth(1),l.forEach(function(t,e){i.moveTo(r,t),i.lineTo(s,t)}),i.closePath(),i.stroke()}function Y(t,e,i,n){if(!0!==e.yAxis.disabled){var a=k(t,e,i).rangesFormat,o=i.yAxisWidth+i.yAxisTitleWidth,r=e.height-2*i.padding-i.xAxisHeight-i.legendHeight,s=Math.floor(r/i.yAxisSplit),l=i.padding+o,h=e.width-i.padding,c=e.height-i.padding-i.xAxisHeight-i.legendHeight;n.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&n.fillRect(0,0,l,c+i.xAxisHeight+5),n.fillRect(h,0,e.width,c+i.xAxisHeight+5);for(var f=[],d=0;d<=i.yAxisSplit;d++)f.push(i.padding+s*d);n.stroke(),n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.yAxis.fontColor||"#666666"),a.forEach(function(t,e){var a=f[e]?f[e]:c;n.fillText(t,i.padding+i.yAxisTitleWidth,a+i.fontSize/2)}),n.closePath(),n.stroke(),e.yAxis.title&&X(e.yAxis.title,e,i,n)}}function Z(t,e,i,n){if(e.legend){T(t,e,i).legendList.forEach(function(t,a){t.forEach(function(t){});var o=(e.width-0)/2+5,r=e.height-i.padding-i.legendHeight+a*(i.fontSize+8)+5+8;n.setFontSize(i.fontSize),t.forEach(function(t){switch(e.type){case"line":n.beginPath(),n.setLineWidth(1),n.setStrokeStyle(t.color),n.moveTo(o-2,r+5),n.lineTo(o+17,r+5),n.stroke(),n.closePath(),n.beginPath(),n.setLineWidth(1),n.setStrokeStyle("#ffffff"),n.setFillStyle(t.color),n.moveTo(o+7.5,r+5),n.arc(o+7.5,r+5,4,0,2*Math.PI),n.fill(),n.stroke(),n.closePath();break;case"pie":case"ring":n.beginPath(),n.setFillStyle(t.color),n.moveTo(o+7.5,r+5),n.arc(o+7.5,r+5,7,0,2*Math.PI),n.closePath(),n.fill();break;default:n.beginPath(),n.setFillStyle(t.color),n.moveTo(o,r),n.rect(o,r,15,10),n.closePath(),n.fill()}o+=20,n.beginPath(),n.setFillStyle(e.extra.legendTextColor||"#333333"),n.fillText(t.name,o,r+9),n.closePath(),n.stroke(),o+=c(t.name)+10})})}}function J(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.pie||{};t=M(t,a);var r={x:e.width/2,y:(e.height-i.legendHeight)/2},s=Math.min(r.x-i.pieChartLinePadding-i.pieChartTextPadding-i._pieTextMaxLength_,r.y-i.pieChartLinePadding-i.pieChartTextPadding);if(e.dataLabel?s-=10:s-=2*i.padding,(t=t.map(function(t){return t._start_+=(o.offsetAngle||0)*Math.PI/180,t})).forEach(function(t){n.beginPath(),n.setLineWidth(2),n.setStrokeStyle("#ffffff"),n.setFillStyle(t.color),n.moveTo(r.x,r.y),n.arc(r.x,r.y,s,t._start_,t._start_+2*t._proportion_*Math.PI),n.closePath(),n.fill(),!0!==e.disablePieStroke&&n.stroke()}),"ring"===e.type){var l=.6*s;"number"==typeof e.extra.ringWidth&&e.extra.ringWidth>0&&(l=Math.max(0,s-e.extra.ringWidth)),n.beginPath(),n.setFillStyle(e.background||"#ffffff"),n.moveTo(r.x,r.y),n.arc(r.x,r.y,l,0,2*Math.PI),n.closePath(),n.fill()}if(!1!==e.dataLabel&&1===a){for(var h=!1,c=0,f=t.length;c<f;c++)if(t[c].data>0){h=!0;break}h&&D(t,e,i,n,s,r)}return 1===a&&"ring"===e.type&&H(e,i,n),{center:r,radius:s,series:t}}function K(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.radar||{},s=u(e.categories.length),l={x:e.width/2,y:(e.height-i.legendHeight)/2},h=Math.min(l.x-(x(e.categories)+i.radarLabelTextMargin),l.y-i.radarLabelTextMargin);h-=i.padding,n.beginPath(),n.setLineWidth(1),n.setStrokeStyle(o.gridColor||"#cccccc"),s.forEach(function(t){var e=r(h*Math.cos(t),h*Math.sin(t),l);n.moveTo(l.x,l.y),n.lineTo(e.x,e.y)}),n.stroke(),n.closePath();for(var c=1;c<=i.radarGridCount;c++)!function(t){var e={};n.beginPath(),n.setLineWidth(1),n.setStrokeStyle(o.gridColor||"#cccccc"),s.forEach(function(a,o){var s=r(h/i.radarGridCount*t*Math.cos(a),h/i.radarGridCount*t*Math.sin(a),l);0===o?(e=s,n.moveTo(s.x,s.y)):n.lineTo(s.x,s.y)}),n.lineTo(e.x,e.y),n.stroke(),n.closePath()}(c);return b(s,l,h,t,e,a).forEach(function(t,a){if(n.beginPath(),n.setFillStyle(t.color),n.setGlobalAlpha(.6),t.data.forEach(function(t,e){0===e?n.moveTo(t.position.x,t.position.y):n.lineTo(t.position.x,t.position.y)}),n.closePath(),n.fill(),n.setGlobalAlpha(1),!1!==e.dataPointShape){var o=i.dataPointShape[a%i.dataPointShape.length];C(t.data.map(function(t){return t.position}),t.color,o,n)}}),z(s,h,l,e,i,n),{center:l,radius:h,angleList:s}}function Q(t,e){e.draw()}function U(t){this.isStop=!1,t.duration=void 0===t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:function(t){t(null)},i=null,n=function(a){if(null===a||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===i&&(i=a),a-i<t.duration){var o=(a-i)/t.duration;o=(0,it[t.timing])(o),t.onProcess&&t.onProcess(o),e(n,17)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};n=n.bind(this),e(n,17)}function V(t,e,i,n){var a=this,o=e.series,r=e.categories,s=T(o=l(o,i),e,i).legendHeight;i.legendHeight=s;var h=k(o,e,i).yAxisWidth;if(i.yAxisWidth=h,r&&r.length){var c=A(r,e,i),f=c.xAxisHeight,d=c.angle;i.xAxisHeight=f,i._xAxisTextAngle_=d}"pie"!==t&&"ring"!==t||(i._pieTextMaxLength_=!1===e.dataLabel?0:_(o));var x=e.animation?1e3:0;switch(this.animationInstance&&this.animationInstance.stop(),t){case"line":this.animationInstance=new U({timing:"easeIn",duration:x,onProcess:function(t){N(e,i,n);var s=q(o,e,i,n,t),l=s.xAxisPoints,h=s.calPoints,c=s.eachSpacing;a.chartData.xAxisPoints=l,a.chartData.calPoints=h,a.chartData.eachSpacing=c,j(r,e,i,n),Z(e.series,e,i,n),Y(o,e,i,n),B(e,i,n,t),Q(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new U({timing:"easeIn",duration:x,onProcess:function(t){N(e,i,n);var s=G(o,e,i,n,t),l=s.xAxisPoints,h=s.eachSpacing;a.chartData.xAxisPoints=l,a.chartData.eachSpacing=h,j(r,e,i,n),Z(e.series,e,i,n),Y(o,e,i,n),Q(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new U({timing:"easeIn",duration:x,onProcess:function(t){N(e,i,n);var s=R(o,e,i,n,t),l=s.xAxisPoints,h=s.calPoints,c=s.eachSpacing;a.chartData.xAxisPoints=l,a.chartData.calPoints=h,a.chartData.eachSpacing=c,j(r,e,i,n),Z(e.series,e,i,n),Y(o,e,i,n),B(e,i,n,t),Q(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new U({timing:"easeInOut",duration:x,onProcess:function(t){a.chartData.pieData=J(o,e,i,n,t),Z(e.series,e,i,n),Q(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new U({timing:"easeInOut",duration:x,onProcess:function(t){a.chartData.radarData=K(o,e,i,n,t),Z(e.series,e,i,n),Q(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}})}}function $(){this.events={}}var tt={yAxisWidth:15,yAxisSplit:5,xAxisHeight:40,xAxisLineHeight:40,legendHeight:40,yAxisTitleWidth:15,padding:12,columePadding:3,fontSize:10,dataPointShape:["diamond","circle","triangle","rect"],colors:["#7cb5ec","#f7a35c","#434348","#90ed7d","#f15c80","#8085e9"],pieChartLinePadding:25,pieChartTextPadding:15,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:40,radarGridCount:3,radarLabelTextMargin:40},et={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!=0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){return t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height,!(e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y)}},it={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};U.prototype.stop=function(){this.isStop=!0},$.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},$.prototype.trigger=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var n=e[0],a=e.slice(1);this.events[n]&&this.events[n].forEach(function(t){try{t.apply(null,a)}catch(t){console.error(t)}})};var nt=function(e){e.title=e.title||{},e.subtitle=e.subtitle||{},e.yAxis=e.yAxis||{},e.xAxis=e.xAxis||{},e.extra=e.extra||{},e.legend=!1!==e.legend,e.animation=!1!==e.animation;var i=t({},tt);i.yAxisTitleWidth=!0!==e.yAxis.disabled&&e.yAxis.title?i.yAxisTitleWidth:0,i.pieChartLinePadding=!1===e.dataLabel?0:i.pieChartLinePadding,i.pieChartTextPadding=!1===e.dataLabel?0:i.pieChartTextPadding,this.opts=e,this.config=i,this.context=wx.createCanvasContext(e.canvasId),this.chartData={},this.event=new $,this.scrollOption={currentOffset:0,startTouchX:0,distance:0},V.call(this,e.type,e,i,this.context)};nt.prototype.updateData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts.series=e.series||this.opts.series,this.opts.categories=e.categories||this.opts.categories,this.opts.title=t({},this.opts.title,e.title||{}),this.opts.subtitle=t({},this.opts.subtitle,e.subtitle||{}),V.call(this,this.opts.type,this.opts,this.config,this.context)},nt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},nt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},nt.prototype.getCurrentDataIndex=function(t){var e=t.touches&&t.touches.length?t.touches:t.changedTouches;if(e&&e.length){var i=e[0],n=i.x,a=i.y;return"pie"===this.opts.type||"ring"===this.opts.type?P({x:n,y:a},this.chartData.pieData):"radar"===this.opts.type?v({x:n,y:a},this.chartData.radarData,this.opts.categories.length):p({x:n,y:a},this.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},nt.prototype.showToolTip=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("line"===this.opts.type||"area"===this.opts.type){var n=this.getCurrentDataIndex(e),a=this.scrollOption.currentOffset,o=t({},this.opts,{_scrollDistance_:a,animation:!1});if(n>-1){var r=d(this.opts.series,n);if(0===r.length)V.call(this,o.type,o,this.config,this.context);else{var s=g(r,this.chartData.calPoints,n,this.opts.categories,i),l=s.textList,h=s.offset;o.tooltip={textList:l,offset:h,option:i},V.call(this,o.type,o,this.config,this.context)}}else V.call(this,o.type,o,this.config,this.context)}},nt.prototype.scrollStart=function(t){t.touches[0]&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=t.touches[0].x)},nt.prototype.scroll=function(e){if(e.touches[0]&&!0===this.opts.enableScroll){var n=e.touches[0].x-this.scrollOption.startTouchX,a=this.scrollOption.currentOffset,o=i(a+n,this.chartData,this.config,this.opts);this.scrollOption.distance=n=o-a;var r=t({},this.opts,{_scrollDistance_:a+n,animation:!1});V.call(this,r.type,r,this.config,this.context)}},nt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,i=e.currentOffset,n=e.distance;this.scrollOption.currentOffset=i+n,this.scrollOption.distance=0}},module.exports=nt; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("data.js");App({globalData:{isWeb:!!window,wxAppId:"wxbc163aecb3210fcc",autoId:t.setting.autoId,comUrl:t.setting.comUrl+"/wc_mg/",paymentUrl:t.setting.payUrl,setting:t.setting,styleConfig:t.styleConfig,isPerson:t.isPerson,accountInfo:{},projectInfo:{appId:t.dataInfo.appId,projectIcon:t.dataInfo.projectIcon,projectName:t.dataInfo.projectName,PCStatus:t.dataInfo.PCStatus,projectType:t.dataInfo.projectType},ext:t.dataInfo.ext,customizeTabId:{},customizeTabsList:t.dataInfo.customizeTabsList,wxUserInfo:"",memberId:"",showHint:!0,g_location:{lat:0,lng:0},g_cityName:"",g_showAddress:"",isGroup:"",isQuery:!1,changeClassify:1,topayHidden:!1,moduleList:[],memberType:""},onLaunch:function(t){console.log(" ------------ onLaunch ------------- ");var a=this;a.getProjectData();var e="";"undefined"!=typeof sessionStorage&&(e=sessionStorage.getItem("globleThemeConfig")),e&&(a.globalData.styleConfig=JSON.parse(e))},onShow:function(t){console.log(" ------------ onShow ------------- "),this.loginVzSystem()},refreshProjectData:function(t){var a=this;return new Promise(function(e,o){wx.request({url:a.globalData.comUrl+"tabs_getDataByProjectId.action",data:{autoId:t},success:function(t){getCurrentPages();var o=a.getJsonData(t.data);e(o)}})})},initProjectData:function(a){a&&a.customizeTabsList&&(t.dataInfo.customizeTabsList=a.customizeTabsList,t.dataInfo.appId=a.appId,t.dataInfo.projectName=a.projectName,t.dataInfo.PCStatus=a.PCStatus,t.setting.name=a.projectName,t.setting.autoId=a.autoId,t.setting.comUrl=a.comUrl,t.setting.payUrl=a.payUrl,this.globalData.autoId=t.setting.autoId,this.globalData.setting=t.setting,this.globalData.projectInfo={appId:t.dataInfo.appId,projectIcon:t.dataInfo.projectIcon,projectName:t.dataInfo.projectName,PCStatus:t.dataInfo.PCStatus},this.globalData.customizeTabsList=t.dataInfo.customizeTabsList,this.getProjectData())},getProjectData:function(){console.log("getProjectData");var a=this,e={};(t.dataInfo.customizeTabsList||[]).forEach(function(t){e[t.sysTabNameTag||t.sysTabName]=t.customizeId||t.id}),a.globalData.customizeTabId=e},getCustomizeId:function(a){if(!a)return null;var e=this;if(e.globalData.customizeTabId[a]&&e.globalData.customizeTabId[a])return e.globalData.customizeTabId[a];for(var o=0;o<t.dataInfo.customizeTabsList.length;o++){var n=t.dataInfo.customizeTabsList[o];if(n.sysTabNameTag&&""!=n.sysTabNameTag&&n.sysTabNameTag==a)return n.customizeId;if(n.sysTabName&&""!=n.sysTabName&&n.sysTabName==a)return n.customizeId;if(n.data&&n.data.customizeTabsList&&n.data.customizeTabsList.length>0)for(var s=0;s<n.data.customizeTabsList.length;s++){var l=n.data.customizeTabsList[s];if(l.sysTabNameTag&&""!=l.sysTabNameTag&&l.sysTabNameTag==a)return l.customizeId||l.id;if(l.sysTabName&&""!=l.sysTabName&&l.sysTabName==a)return l.customizeId||l.id}}},getWxUserInfo:function(t){console.log("======start get wxUserInfo =====");var a=this;a.globalData.wxUserInfo?("function"==typeof t&&t(a.globalData.wxUserInfo),console.log("====== cb equals function =====")):wx.login({success:function(e){wx.getUserInfo({success:function(e){a.globalData.wxUserInfo=e.userInfo,"function"==typeof t&&t(a.globalData.wxUserInfo)}})}})},loginVzSystem:function(t){var a=this;if(wx.canIUse("login"))return new Promise(function(e,o){console.log("======start login vz-system=====");var n=a.getMemberId();if(n&&n.length>0){var s="memberId"+a.globalData.autoId;return wx.setStorageSync(s,n),a.globalData.memberId=n,void e()}if(!t)return wx.login({success:function(t){a.loginVzSystem(t.code)}}),void e();a.getOpenId(t).then(function(t){if(!t||t.length<1)e();else{var o={appId:a.globalData.projectInfo.appId,openId:t},n=wx.getStorageSync("parentId"+a.globalData.autoId);n&&(o.parentId=n),wx.request({url:a.globalData.comUrl+"member_memberRegistration.action",data:o,success:function(t){console.log(t.data);var o=a.getJsonData(t.data);o.isDistributor&&"3"==o.type&&wx.setStorageSync("memberType"+a.globalData.autoId,o.type);var n="memberId"+a.globalData.autoId;wx.setStorageSync(n,o.memberId),a.globalData.memberId=o.memberId,console.log("====== memberId:"+o.memberId+" ====="),e()},fail:function(){console.log("login failed")}})}})})},getOpenId:function(t){console.log("====== get openId start =====");var a=this;return new Promise(function(e,o){var n=wx.getStorageSync("openId"+a.globalData.autoId);if(n&&n.length>0)return console.log("======openId:"+n+" ====="),n;!t||t.length<1?console.log("======getOpenId failed   wxCode="+t+" ====="):wx.request({url:a.globalData.paymentUrl+"/WechatAlipay/GetOpenId",data:{projectId:a.globalData.projectInfo.appId,code:t},success:function(t){var o=a.getJsonData(t.data);console.log("====== openId:"+o.openId+" ====="),wx.setStorageSync("openId"+a.globalData.autoId,o.openId),e(o.openId)},fail:function(t){console.log(t)}})})},getJsonData:function(t){var a=t.substring(5,t.length-1);return JSON.parse(a)},hint:function(t){t?wx.showModal({title:t,showCancel:!1}):wx.showModal({title:"请求失败",showCancel:!1})},showToast:function(t){wx.showToast({title:t,icon:"none",duration:2e3})},uploadimg:function(t){var a=this,e=t.i?t.i:0,o=t.success?t.success:0,n=t.fail?t.fail:0;wx.uploadFile({url:t.url,filePath:t.path[e],name:"file",formData:null,success:function(t){o++,console.log(t),console.log(e)},fail:function(t){n++,console.log("fail:"+e+"fail:"+n)},complete:function(){console.log(e),++e==t.path.length?(console.log("执行完毕"),console.log("成功："+o+" 失败："+n)):(console.log(e),t.i=e,t.success=o,t.fail=n,a.uploadimg(t))}})},getMemberId:function(){return wx.getStorageSync("memberId"+this.globalData.autoId)},modifyPicSize:function(t,a){var e=t.lastIndexOf(".");return t=t.substr(0,e)+a+t.substr(e,t.length-e)},getWeek:function(t){var a,e=t.split("-");return a=new Date(e[0],parseInt(e[1]-1),e[2]),"星期"+"日一二三四五六".charAt(a.getDay())},calculatDateBydays:function(t,a){t=t.replace(/-/g,"/"),console.log(t);var e=new Date(t),o=new Date(e.getFullYear(),e.getMonth(),e.getDate()+a);e.getFullYear();console.log(e.getDate());e.getMonth(),e.getDate();return o.getFullYear()+"-"+(o.getMonth()+1)+"-"+o.getDate()},DateDiff:function(t,a){t=t.replace(/-/g,"/"),a=a.replace(/-/g,"/");var e,o,n;return e=t.split("-"),o=new Date(e[1]+"-"+e[2]+"-"+e[0]),e=a.split("-"),n=new Date(e[1]+"-"+e[2]+"-"+e[0]),parseInt(Math.abs(o-n)/1e3/60/60/24)},request:function(t){if(t&&t.url){if(0!=t.cache){console.log("app.request","use cache");var a=t.url+JSON.stringify(t.data||{}),e=wx.getStorageSync(a);e&&t.success(e);var o=t.success;t.success=function(t){!t||e.data&&t.data==e.data||(wx.setStorageSync(a,t),o(t))}}wx.request(t)}else console.log("app.request:","request url cannot be null")}}); 
 			}); 	require("app.js");
 		__wxRoute = 'pages/self/cart2/component/c-product-list-1/c-product-list-1';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/self/cart2/component/c-product-list-1/c-product-list-1.js';	define("pages/self/cart2/component/c-product-list-1/c-product-list-1.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=t.globalData.projectInfo,o=t.globalData.customizeTabId,e=1,s=1;Component({properties:{},data:{isPerson:t.globalData.isPerson,proList:[],hiddenMerchant:!0,bottomHint:!1,actDistribution:{}},attached:function(){var e=this;a=t.globalData.projectInfo,o=t.globalData.customizeTabId;var s=wx.getStorageSync("memberType"+t.globalData.autoId);this.setData({memberType:s}),t.globalData.actDistribution&&this.setData({actDistribution:t.globalData.actDistribution}),e.getProCategory()},methods:{getProCategory:function(){var r=this;wx.request({url:t.globalData.comUrl+"tabs_getAppProductByCity.action",data:{appId:a.appId,customizeTabId:o.LynxProductList,count:4,current:e,jsoncallback:"",productName:"",sortName:"readTimes",sortType:"desc",isGroup:t.globalData.isGroup},success:function(t){var a=t.data.substring(1).slice(0,-1),o=JSON.parse(a);s=o.pages,r.setData({proList:r.data.proList.concat(o.pageList)})}})},onReachBottom:function(){e<s&&(e++,this.getProCategory())}}}); 
 			}); 	require("pages/self/cart2/component/c-product-list-1/c-product-list-1.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a="",e="",o=1,i=1,n="",s="",r="",c=!1,l=["LynxProductList","LynxAbout_Merchant","LynxPhoto_Info_Post_Tab","LynxPhoto_H_Info_Tab_Level2","Photo-Info-Tab-Level2","Video_Gallery","Flexi-Form","Online-Chat","Activity","LynxApplyFor_About_Merchant","Activity-Group","About-Merchant","Activity-Kill","Activity-Distribution","CardNo"];Page({data:{HidePlaceImage:!1,placeImage:"",styleConfig:t.globalData.styleConfig,advertisements:[],PCAdevertising_top:"",productArr:[],productClass:[],moreArr:[],headlineImage:"",headlineArr:[],recommendNews:[],entrepreneurshipList:[],adcyList:[],proList:[],hotSaleList:[],hotSaleList1:[],hotSaleList2:[],branchInfo:[],bottomHint:!0,posCity:"",hideNews:!0,hasBranch:!1,minaInfo:{},hiddenMerchant:!0,activityInfo:"",isGroup:"",isPerson:t.globalData.isPerson,isQuery:1==t.globalData.isPerson,isLoading:!1,videoLink:"",netWorkType:!1,videoList:{},couponAdImg:"",activitySeckill:{},activityStart:"",hasSeckill:"",hasDistribution:"1",advertiseProducts:[],couponList:[],loadCount:1,hideBigImg:!0,adBigImage:"",recProStyle:"",disProList:[],actDistribution:{},memberType:"",hideShareCoupon:!0},checkIfHasAutoId:function(a){var e=this;if("undefined"!=typeof sessionStorage&&(!sessionStorage.getItem("globalAutoId")||a&&a.autoId||(a={autoId:sessionStorage.getItem("globalAutoId")})),!a||!a.autoId)return e.initData(),void t.refreshProjectData(t.globalData.autoId).then(function(a){wx.setStorageSync("autoId"+t.globalData.autoId,a),wx.setNavigationBarTitle({title:a.projectName})});if(a.autoId){"undefined"!=typeof sessionStorage&&sessionStorage.setItem("globalAutoId",a.autoId);var o=a.autoId,i=wx.getStorageSync("data_js");i.autoId==o?(i.autoId=o,t.initProjectData(i),t.getProjectData(),t.refreshProjectData(o).then(function(t){wx.setStorageSync("data_js",t)}),e.initData()):t.refreshProjectData(o).then(function(a){a.autoId=o,wx.setStorageSync("data_js",a),t.initProjectData(a),t.getProjectData(),e.initData()})}},onShow:function(){this.data.loadCount>1&&this.initData(),this.setData({loadCount:this.data.loadCount+1})},onLoad:function(a){this.setData({placeImage:"../../img/place.png"}),console.log(" ------------ index:onLoad ------------- ");var e=this,o=decodeURIComponent(a.scene);o&&"undefined"!=o&&wx.setStorageSync("parentId"+t.globalData.autoId,o),t.loginVzSystem(),wx.getNetworkType({success:function(t){e.setData({netWorkType:t.networkType})}}),e.checkIfHasAutoId(a)},initData:function(){var i=this,r=wx.getStorageSync("autoId"+t.globalData.autoId);if(r.projectName?wx.setNavigationBarTitle({title:r.projectName}):wx.setNavigationBarTitle({title:t.globalData.projectInfo.projectName}),a=t.globalData.projectInfo,e=t.globalData.customizeTabId,a.appId&&!(a.appId.length<1)){if(console.log(" ------------ index:onShow ------------- "),console.log(t.globalData.city),i.getJoinPhone(),""==t.globalData.city)n="",o=1,i.setData({posCity:"",productArr:[]}),i.getLocation().then(function(t){i.getBranchList()});else if(void 0==t.globalData.city||"{}"==JSON.stringify(t.globalData.city))t.globalData.city={},o=1,i.setData({productArr:[]}),i.getLocation().then(function(t){i.getBranchList()});else{if(t.globalData.city.cityName==this.data.posCity)return;n=t.globalData.city.cityID,o=1,i.setData({posCity:t.globalData.city.cityName})}clearInterval(s);var c=wx.getStorageSync("memberType"+t.globalData.autoId);i.setData({memberType:c}),i.getHomepageBaseInfo().then(function(t){i.getHomePageTop(),i.getCustomizeTabList().then(function(){"1"==i.data.hasGroup&&i.getActivity(),"1"==i.data.hasSeckill&&i.getSeckillActivity(),"1"==i.data.hasDistribution&&"3"==i.data.memberType?(i.checkDistribuction().then(function(){i.getHomepageProduct(),t.minaInfo.showCategory?i.getProCategory():i.getReommendProducts()}),i.getDistributeProduct()):(i.getHomepageProduct(),t.minaInfo.showCategory?i.getProCategory():i.getReommendProducts())})}),i.getHomepageAdvertise(),i.getBranchList()}},getHomePageTop:function(){var a=this;t.request({url:t.globalData.comUrl+"tabs_getHomepageTop.action",data:{advertisementsCId:e.LynxHomePage,informationsCId:e.LynxPhoto_H_Info_Tab_Level2,productCId:e.LynxProductList},success:function(e){for(var o=t.getJsonData(e.data),i=0;i<o.advertisements.length;i++)o.advertisements[i].image=t.modifyPicSize(o.advertisements[i].image,"_r750x400p");for(var n=Math.ceil(o.productClass.length/8),s=[],r=0;r<n;r++)s[r]=[],s[r].push(o.productClass.slice(8*r,8*(r+1)));console.log(o.advertisements),a.setData({advertisements:o.advertisements,productClass:s}),wx.stopPullDownRefresh()}})},getHomepageBaseInfo:function(){var e=this;return new Promise(function(o,i){t.request({url:t.globalData.comUrl+"tabs_getHomepageBaseInfo.action",data:{projectId:a.appId},cache:!0,success:function(a){var i=t.getJsonData(a.data);console.log(i),t.globalData.changeClassify=i.minaInfo.productCategory,t.globalData.topayHidden=i.minaInfo.showCashOnDelivery,e.setData({minaInfo:i.minaInfo,isQuery:i.minaInfo.allHidden,isLoading:!0,recProStyle:i.minaInfo.showCategory?2:1}),t.globalData.isQuery=i.minaInfo.allHidden,i.minaInfo.rollNewsHidden||e.getCategory().then(function(t){e.getNewsInfo(t)}),i.minaInfo.listNewsHidden||e.getcyCategory().then(function(t){e.getcyNewsInfo(t),e.getcyAdList()}),i.minaInfo.videoHidden||e.getVideoList(),o(i)}})})},getHomepageProduct:function(){var a=this;t.request({url:t.globalData.comUrl+"tabs_getHomepageProduct.action",data:{advertise:"advertise",cityId:"",hotSale:"hotSale",isGroup:"1",productCId:e.LynxProductList,scroll:""},success:function(e){for(var o=t.getJsonData(e.data),i=0;i<o.advertiseProducts.length;i++)o.advertiseProducts.advertisingImage&&(o.advertiseProducts[i].advertisingImage=t.modifyPicSize(o.advertiseProducts[i].advertisingImage,"_r750x200p"));for(var n=0;n<o.hotSaleList.length;n++)o.hotSaleList[n].hotSaleImage=t.modifyPicSize(o.hotSaleList[n].hotSaleImage,"_r220x220p"),"5"==o.hotSaleList[n].actType||"3"==o.hotSaleList[n].actType||"6"==o.hotSaleList[n].actType&&"3"==a.data.memberType&&a.data.actDistribution.enable?o.hotSaleList[n].curPrice=o.hotSaleList[n].groupsPrice:1!=o.hotSaleList[n].purpose&&3!=o.hotSaleList[n].purpose||(o.hotSaleList[n].curPrice=o.hotSaleList[n].price);a.setData({hotSaleList:o.hotSaleList,hotSaleList1:o.hotSaleList.slice(0,5),hotSaleList2:o.hotSaleList.slice(5,10),advertiseProducts:o.advertiseProducts}),a.getJoinPhone()}})},getHomepageAdvertise:function(){var e=this;t.request({url:t.globalData.comUrl+"tabs_getHomepageAdvertising.action",data:{projectId:a.appId},success:function(a){var o=t.getJsonData(a.data);o.PCAdevertising_top[0]&&e.setData({PCAdevertising_top:o.PCAdevertising_top[0].picture1})}})},getSeckillActivity:function(){var a=this;t.request({url:t.globalData.comUrl+"activityProduct_groupsIndex.action",data:{appId:t.globalData.projectInfo.appId,actType:"3"},success:function(t){clearInterval(r);var e=new Date(t.data.beginTime),o=new Date(t.data.nowTime),i=parseInt((e-o)/1e3);if(i>0)t.data.activityStart=!1,t.data.countDown=a.secondToTime(i),r=setInterval(function(){i--,t.data.countDown=a.secondToTime(i),a.setData({activitySeckill:t.data}),i<1&&(clearInterval(r),a.refresh())},1e3);else{if(t.data.activityTime<=0)return;t.data.activityStart=!0,t.data.countDown=a.secondToTime(t.data.activityTime),r=setInterval(function(){t.data.activityTime--,t.data.countDown=a.secondToTime(t.data.activityTime),a.setData({activitySeckill:t.data}),t.data.activityTime<=0&&(clearInterval(r),a.refresh())},1e3)}}})},getVideoList:function(){var a=this;t.request({url:t.globalData.comUrl+"tabs_getVideoGalleryList.action",data:{appId:t.globalData.projectInfo.appId,customizeTabId:t.globalData.customizeTabId.Video_Gallery,isNeedHttps:0},success:function(e){var o=t.getJsonData(e.data);a.setData({videoList:o})},fail:function(){}})},getActivity:function(){var a=this;t.request({url:t.globalData.comUrl+"activityProduct_groupsIndex.action",data:{appId:t.globalData.projectInfo.appId},success:function(t){clearInterval(s);var e=new Date(t.data.beginTime),o=new Date(t.data.nowTime),i=parseInt((e-o)/1e3);if(i>0)t.data.activityStart=!1,t.data.countDown=a.secondToTime(i),s=setInterval(function(){i--,t.data.countDown=a.secondToTime(i),a.setData({activityInfo:t.data}),i<1&&(clearInterval(s),a.refresh())},1e3);else{if(t.data.activityTime<=0)return;t.data.activityStart=!0,t.data.countDown=a.secondToTime(t.data.activityTime),s=setInterval(function(){t.data.activityTime--,t.data.countDown=a.secondToTime(t.data.activityTime),a.setData({activityInfo:t.data}),t.data.activityTime<=0&&(clearInterval(s),a.refresh())},1e3)}}})},getDistributeProduct:function(){var a=this;t.request({url:t.globalData.comUrl+"activityProduct_findGroupsProduceList.action",data:{appId:t.globalData.projectInfo.appId,groupsId:"distribution",current:1,isHomePage:1},success:function(t){console.log(t.data);var e=t.data;a.setData({disProList:e.pageList})}})},checkDistribuction:function(){var a=this;return new Promise(function(e,o){wx.request({url:t.globalData.comUrl+"dis_checkDistribuction.action",data:{appId:t.globalData.projectInfo.appId,memberId:t.getMemberId()},success:function(o){var i=t.getJsonData(o.data);t.globalData.actDistribution=i.activityDistribution,a.setData({actDistribution:i.activityDistribution}),e()},fail:function(){t.hint(),e()}})})},secondToTime:function(t){var a=Math.floor(t/3600/24),e=Math.floor(t/3600%24),o=Math.floor(t/60%60),i=Math.floor(t%60);return e<10&&(e="0"+e),o<10&&(o="0"+o),i<10&&(i="0"+i),{d:a,h:e,m:o,s:i}},getCouponList:function(){var a=this,e=t.getMemberId()||"";e&&t.request({url:t.globalData.comUrl+"act_getActivityList.action",data:{branchInfoId:"",customizetabId:t.getCustomizeId("Activity"),memberId:e},success:function(e){var o=t.getJsonData(e.data);a.setData({couponList:o})},fail:function(a){t.hint()}})},coupontap:function(a){var e=this,o=t.getMemberId()||"";""!=o?0!=a.currentTarget.dataset.info.getCoupon&&t.request({url:t.globalData.comUrl+"act_addMemberActivity.action",data:{activityId:a.currentTarget.dataset.info.id,memberId:o,customizetabId:t.getCustomizeId("Activity")},success:function(a){"0"!=t.getJsonData(a.data).code?wx.showToast({title:"领取成功",icon:"success"}):t.hint("领取失败"),e.getCouponList()},fail:function(a){t.hint()}}):wx.navigateTo({url:"../../login/login"})},getLocation:function(){var a=this;return new Promise(function(e,o){wx.getLocation({type:"wgs84",success:function(o){t.globalData.location={lat:o.latitude,lng:o.longitude},t.request({url:"https://api.map.baidu.com/geocoder/v2/?ak=KM5p19PFWrU83vSkqpuC01LLCzlEFZpw&location="+o.latitude+","+o.longitude+"&output=json&pois=1",data:{},jsonp:!0,success:function(o){t.globalData.city.cityName=o.data.result.addressComponent.city,t.request({method:"GET",url:t.globalData.comUrl+"tabs_getCityIdByName.action",data:{cityName:o.data.result.addressComponent.city},success:function(o){t.globalData.city.cityID=o.data.cityId,t.globalData.city.provinceId="",a.setData({posCity:t.globalData.city.cityName}),e(t.globalData.city)}})}})}})})},getCategory:function(){return new Promise(function(o,i){t.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabCategory.action",data:{appId:a.appId,customizeTabId:e["Photo-Info-Tab-Level2"]},success:function(a){var e=t.getJsonData(a.data);o(e)}})})},getcyCategory:function(){return new Promise(function(o,i){t.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabCategory.action",data:{appId:a.appId,customizeTabId:e.LynxPhoto_H_Info_Tab_Level2},success:function(a){var e=t.getJsonData(a.data);o(e)}})})},getCustomizeTabList:function(){var e=this;return new Promise(function(o,i){t.request({url:t.globalData.comUrl+"tabs_getCustomizeTabList.action",data:{appId:a.appId},success:function(a){var i=t.getJsonData(a.data),n=!0;t.globalData.moduleList=i;for(var s=0;s<i.length;s++)"Activity-Group"==i[s].sysTabName&&(t.globalData.isGroup="1",e.setData({hasGroup:"1"})),"Activity"==i[s].sysTabName&&(t.globalData.isGroup="1",e.getCouponList()),"Activity-Kill"==i[s].sysTabName&&(t.globalData.isGroup="1",e.setData({hasSeckill:"1"})),"Activity-Distribution"==i[s].sysTabName&&(t.globalData.isGroup="1",e.setData({hasDistribution:"1"})),"LynxAbout_Merchant"==i[s].sysTabNameTag&&(n=!1);e.setData({hiddenMerchant:n});for(var r=l,c=[],u=0;u<i.length;u++)for(var d=0;d<r.length;d++)""!=i[u].sysTabNameTag&&i[u].sysTabNameTag==r[d]?c.push(i[u]):""==i[u].sysTabNameTag&&i[u].sysTabName==r[d]&&c.push(i[u]);if("O2O_V1"==e.data.minaInfo.subVersion){for(var g=Math.ceil(c.length/8),p=[],m=0;m<g;m++)p[m]=[],p[m].push(c.slice(8*m,8*(m+1)));console.log(p),e.setData({HidePlaceImage:!0,moreArr:p})}else e.setData({HidePlaceImage:!0,moreArr:c});o(i)}})})},toMoreFunction:function(a){switch(console.log(a.currentTarget.dataset.title),a.currentTarget.dataset.location){case"LynxProductList":t.globalData.isPerson?wx.navigateTo({url:"../product/product"}):wx.switchTab({url:"../product/product"}),this.setData({hideShareCoupon:!0});break;case"LynxAbout_Merchant":1==this.data.isPerson?wx.navigateTo({url:"../store/store"}):wx.switchTab({url:"../store/store"});break;case"LynxPhoto_Info_Post_Tab":wx.navigateTo({url:"../supply/supply"});break;case"LynxPhoto_H_Info_Tab_Level2":wx.navigateTo({url:"../news/news?sysTabName=LynxPhoto_H_Info_Tab_Level2&title="+a.currentTarget.dataset.title});break;case"Photo-Info-Tab-Level2":wx.navigateTo({url:"../news/news?sysTabName=Photo-Info-Tab-Level2&title="+a.currentTarget.dataset.title});break;case"Video_Gallery":wx.navigateTo({url:"../publicity/publicity"});break;case"Flexi-Form":wx.navigateTo({url:"../store/store-detail/custom/custom"});break;case"Activity":wx.navigateTo({url:"../self/mycoupon/mycoupon"});break;case"LynxApplyFor_About_Merchant":t.getMemberId()?wx.navigateTo({url:"../join/join"}):wx.navigateTo({url:"../login/login"});break;case"Activity-Group":wx.navigateTo({url:"../group/group-prolist/group-prolist"});break;case"About-Merchant":1==this.data.isPerson?wx.switchTab({url:"../about-us/about-us"}):wx.navigateTo({url:"../about-us/about-us"});break;case"Activity-Kill":wx.navigateTo({url:"../seckill/seckill"});break;case"CardNo":t.getMemberId()?wx.navigateTo({url:"../self/card/card"}):wx.navigateTo({url:"../login/login"});break;case"Activity-Distribution":t.getMemberId()?wx.navigateTo({url:"../distribute/distribute"}):wx.navigateTo({url:"../login/login"})}},getBranchList:function(){var e=this,o={appId:a.appId};t.globalData.city.cityID>0&&(o.cityId=t.globalData.city.cityID),t.request({url:t.globalData.comUrl+"tabs_getRecommendBranch",data:o,success:function(a){var o=a.data.content;if(o.list.length>0){for(var i=0;i<o.list.length;i++)o.list[i].pic1=t.modifyPicSize(o.list[i].pic1,"_r192x90p");e.setData({branchInfo:o.list,hasBranch:!0})}else e.setData({hasBranch:!1})},fail:function(a){t.hint()}})},getNewsInfo:function(o){var i=this;o.length>=1&&(i.setData({headlineImage:o[0].categoryIcon}),t.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabFromL2ToL1.action",data:{appId:a.appId,customizeTabId:e["Photo-Info-Tab-Level2"],categoryId:o[0].code,current:1},success:function(a){for(var e=t.getJsonData(a.data),o=[],n=Math.ceil(e.pageList.length/2),s=0;s<n;s++)o[s]=[],o[s].push(e.pageList.slice(2*s,2*(s+1)));for(var r=0;r<e.pageList.length;r++)e.pageList[r].picture1=t.modifyPicSize(e.pageList[r].picture1,"_r140x140p");i.setData({recommendNews:e.pageList.slice(0,3),headlineArr:o})}}))},getcyNewsInfo:function(o){var i=this;o.length>=1&&t.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabFromL2ToL1.action",data:{appId:a.appId,customizeTabId:e.LynxPhoto_H_Info_Tab_Level2,categoryId:o[0].code,current:1},success:function(a){for(var e=t.getJsonData(a.data),o=[],n=Math.ceil(e.pageList.length/2),s=0;s<n;s++)o[s]=[],o[s].push(e.pageList.slice(2*s,2*(s+1)));for(var r=0;r<e.pageList.length;r++)e.pageList[r].picture1=t.modifyPicSize(e.pageList[r].picture1,"_r140x140p");i.setData({entrepreneurshipList:e.pageList.slice(0,3),headlineArr:o})}})},getcyAdList:function(){var o=this;t.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabFromL2ToL1.action",data:{appId:a.appId,customizeTabId:e.LynxAdvertisingH_Photo_Info_Tab_Level1,current:1},success:function(a){var e=t.getJsonData(a.data);o.setData({adcyList:e.pageList})},fail:function(){t.hint()}})},getProCategory:function(){var o=this;t.request({url:t.globalData.comUrl+"tabs_getAppCategoryProductByCity.action",data:{appId:a.appId,customizeTabId:e.LynxProductList,count:4,jsoncallback:"",productName:"",isGroup:1},success:function(t){var a='{"list":'+t.data.substring(1).slice(0,-1)+"}",e=JSON.parse(a);console.log(e.list),o.setData({proList:e.list})}})},getJoinPhone:function(){var a=this;console.log(e.LynxApplyFor_About_Merchant),wx.request({url:t.globalData.comUrl+"tabs_getAboutMerchant.action",data:{customizetabId:e.LynxApplyFor_About_Merchant},success:function(e){var o=t.getJsonData(e.data);a.setData({joinPhone:o.phone})}})},getReommendProducts:function(){if(!c){c=!0;var n=this;t.request({url:t.globalData.comUrl+"tabs_getAppProductByCity.action",data:{appId:a.appId,customizeTabId:e.LynxProductList,proId:"",disId:"",productName:"",current:o,cityId:"",isGroup:1},success:function(a){var e=t.getJsonData(a.data);i=e.pages;for(var o=0;o<e.pageList.length;o++)3==e.pageList[o].actType||5==e.pageList[o].actType||6==e.pageList[o].actType&&3==n.data.memberType&&n.data.actDistribution.enable?e.pageList[o].curPrice=e.pageList[o].groupsPrice:1!=e.pageList[o].purpose&&3!=e.pageList[o].purpose||(e.pageList[o].curPrice=e.pageList[o].price),e.pageList[o].productImageVOList.length>0&&(e.pageList[o].productImageVOList[0].imageURL=t.modifyPicSize(e.pageList[o].productImageVOList[0].imageURL,"_r300x300p")),e.pageList[o].productModelList[0]&&String(e.pageList[o].productModelList[0].stock).length>3&&(e.pageList[o].productModelList[0].stock=String(e.pageList[o].productModelList[0].stock).substring(0,3)),String(Math.abs(e.pageList[o].quantity)).length>3&&(e.pageList[o].quantity=String(Math.abs(e.pageList[o].quantity)).substring(0,3)),String(e.pageList[o].readTimes).length>3&&(e.pageList[o].readTimes=String(e.pageList[o].readTimes).substring(0,3));n.setData({productArr:n.data.productArr.concat(e.pageList)}),c=!1}})}},joinPhoneCall:function(){var t=this;t.data.joinPhone&&wx.makePhoneCall({phoneNumber:t.data.joinPhone})},adtap:function(t){var a=this.data.advertisements[t.target.dataset.idx];switch(a.type){case"1":break;case"2":wx.navigateTo({url:"rich-text/rich-text?index="+t.target.dataset.idx});break;case"3":this.setData({adBigImage:a.image,hideBigImg:!1});break;case"4":wx.navigateTo({url:"../store/store-detail/store-detail?tabContentId="+a.branchInfoId});break;case"5":wx.navigateTo({url:"../product/pro-detail/pro-detail?productId="+a.productId})}},exitBigImage:function(){this.setData({hideBigImg:!0})},toSearch:function(t){wx.navigateTo({url:"../search/search?type=0"})},toPosition:function(){wx.navigateTo({url:"../position/position"})},toProductList:function(t){wx.navigateTo({url:"../product/pro-list/pro-list?bigCateCode="+t.currentTarget.dataset.code+"&title="+t.currentTarget.dataset.title})},toProductDetail:function(t){wx.navigateTo({url:"../product/pro-detail/pro-detail?productId="+t.currentTarget.dataset.pid})},toGroupActivity:function(){wx.navigateTo({url:"../group/group-prolist/group-prolist"})},toDistributePro:function(){wx.navigateTo({url:"../distribute/distribute-product/distribute-product"})},toStore:function(){wx.switchTab({url:"../store/store"})},toStoreDetail:function(t){wx.navigateTo({url:"../store/store-detail/store-detail?tabContentId="+t.currentTarget.dataset.sid})},toNewsList:function(){wx.navigateTo({url:"../news/news?sysTabName=Photo-Info-Tab-Level2"})},toCyNewsList:function(){wx.navigateTo({url:"../news/news?sysTabName=LynxPhoto_H_Info_Tab_Level2"})},toNewsDetail:function(t){wx.navigateTo({url:"../news/news-detail/news-detail?tabContentId="+t.currentTarget.dataset.nid+"&type=4"})},toMyCoupon:function(){wx.navigateTo({url:"../self/mycoupon/mycoupon"})},toSeckillActivity:function(){wx.navigateTo({url:"../seckill/seckill"})},formSubmit:function(t){""!=t.detail.value.branchName?""!=t.detail.value.mainProject?""!=t.detail.value.phone?""!=t.detail.value.textCon?""!=t.detail.value.email?""!=t.detail.value.project?(wx.showToast({title:"正在提交...",icon:"loading",duration:2e3,mask:!0}),setTimeout(function(){wx.showToast({title:"提交成功",icon:"success",duration:2e3,mask:!0,success:function(){}})},2e3)):this.warn("预约不能为空"):this.warn("邮箱不能为空"):this.warn("请输入您的问题描述!"):this.warn("请输入您的联系方式!!"):this.warn("请输入您的年龄!"):this.warn("请输入您的名字!")},bindDateChange:function(t){this.setData({date:t.detail.value})},warn:function(t){wx.showModal({title:"提示",content:t,showCancel:!1})},onPullDownRefresh:function(){var a=wx.getStorageSync("memberType"+t.globalData.autoId);this.setData({productArr:[],activityInfo:"",posCity:t.globalData.city.cityName,memberType:a}),n="",o=1,clearInterval(s);var e=this;e.getHomepageBaseInfo().then(function(t){e.getHomePageTop(),e.getCustomizeTabList().then(function(){"1"==e.data.hasGroup&&e.getActivity(),"1"==e.data.hasSeckill&&e.getSeckillActivity(),"1"==e.data.hasDistribution&&"3"==e.data.memberType?(e.checkDistribuction().then(function(){e.getHomepageProduct(),t.minaInfo.showCategory?e.getProCategory():e.getReommendProducts()}),e.getDistributeProduct()):(e.checkDistribuction(),e.getHomepageProduct(),t.minaInfo.showCategory?e.getProCategory():e.getReommendProducts())})}),e.getHomepageAdvertise(),e.getBranchList()},refresh:function(){this.setData({productArr:[],activityInfo:"",posCity:t.globalData.city.cityName}),n="",clearInterval(s),o=1;var a=this;a.getHomepageBaseInfo().then(function(t){a.getHomePageTop(),a.getCustomizeTabList().then(function(){"1"==a.data.hasGroup&&a.getActivity(),"1"==a.data.hasSeckill&&a.getSeckillActivity(),"1"==a.data.hasDistribution&&"3"==a.data.memberType?(a.checkDistribuction().then(function(){a.getHomepageProduct(),t.minaInfo.showCategory?a.getProCategory():a.getReommendProducts()}),a.getDistributeProduct()):(a.getHomepageProduct(),t.minaInfo.showCategory?a.getProCategory():a.getReommendProducts())})}),a.getHomepageAdvertise(),a.getBranchList()},onReachBottom:function(){1==this.data.recProStyle&&o<i&&(c||o++,this.getReommendProducts())},onShareAppMessage:function(){var o=this;return{title:a.productName,path:"/pages/index/index",success:function(a){wx.request({url:t.globalData.comUrl+"act_addShareMemberActivity.action",data:{memberId:t.getMemberId(),customizetabId:e.Activity},success:function(a){var e=t.getJsonData(a.data);1==e.code&&(e.endTime=e.endTime.substring(0,10),o.setData({hideShareCoupon:!1,shareActivity:e}))}})},fail:function(t){}}}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/index/rich-text/rich-text';__wxRouteBegin = true; 	define("pages/index/rich-text/rich-text.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a="",e="";Page({data:{txt:""},onLoad:function(o){a=t.globalData.projectInfo,e=t.globalData.customizeTabId,this.getHomePageTop(o.index)},getHomePageTop:function(a){var o=this;wx.request({url:t.globalData.comUrl+"tabs_getHomepageTop.action",data:{advertisementsCId:e.LynxHomePage},success:function(e){var s=t.getJsonData(e.data);o.setData({txt:s.advertisements[a].text})}})}}); 
 			}); 	require("pages/index/rich-text/rich-text.js");
 		__wxRoute = 'pages/indexStyle3/index';__wxRouteBegin = true; 	define("pages/indexStyle3/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=t.globalData.projectInfo,e=t.globalData.customizeTabId,o=1,i=1,n="",s=!1,r="",c=["LynxProductList","LynxAbout_Merchant","LynxPhoto_Info_Post_Tab","LynxPhoto_H_Info_Tab_Level2","Photo-Info-Tab-Level2","Video_Gallery","Flexi-Form","Online-Chat","Activity","LynxApplyFor_About_Merchant","Activity-Group"];Page({data:{styleConfig:t.globalData.styleConfig,indexData:{},productArr:[],productClass:[],moreArr:[],headlineImage:"",headlineArr:[],recommendNews:[],hotSaleList:[],hotSaleList1:[],hotSaleList2:[],branchInfo:[],bottomHint:!0,posCity:"",hideNews:!0,hasBranch:!1,styleStatus:1,subVersion:"",oneKeyHidden:!0,hiddenMerchant:!0,joinPhone:"",activityInfo:"",isGroup:"",isPerson:t.globalData.isPerson,isQuery:1==t.globalData.isPerson,minaInfo:{},couponAdImg:"",netWorkType:!1},checkIfHasAutoId:function(a){var e=this;if(!sessionStorage.getItem("globalAutoId")||a&&a.autoId||(a={autoId:sessionStorage.getItem("globalAutoId")}),a&&a.autoId){if(a.autoId){sessionStorage.setItem("globalAutoId",a.autoId);var o=a.autoId,i=wx.getStorageSync("autoId-"+o);i?(t.initProjectData(i),t.getProjectData(),t.refreshProjectData(o).then(function(t){wx.clearStorage(),wx.setStorageSync("autoId-"+o,t)}),e.initData()):t.refreshProjectData(o).then(function(a){wx.setStorageSync("autoId-"+o,a),t.initProjectData(a),t.getProjectData(),e.initData()})}}else e.initData()},onLoad:function(t){console.log(" ------------ index:onLoad ------------- ");var a=this;wx.getNetworkType({success:function(t){a.setData({netWorkType:t.networkType})}}),a.checkIfHasAutoId(t)},initData:function(){var i=this;a=t.globalData.projectInfo,e=t.globalData.customizeTabId,!a.appId||a.appId.length<1||(console.log(" ------------ index:onShow ------------- "),console.log(t.globalData.city),i.getMerchantHidden(),wx.setNavigationBarTitle({title:a.projectName}),""==t.globalData.city?(n="",o=1,i.setData({posCity:"",productArr:[]}),clearInterval(r),i.getHomepageBaseInfo().then(function(){i.getHomePageTop(),i.getCustomizeTabList().then(function(){"1"==t.globalData.isGroup&&i.getActivity(),i.getHomepageAdvertise(),i.getHomepageProduct(),i.getReommendProducts()})}),i.getBranchList()):void 0==t.globalData.city||"{}"==JSON.stringify(t.globalData.city)?(t.globalData.city={},o=1,i.setData({productArr:[]}),clearInterval(r),i.getHomepageBaseInfo().then(function(){i.getHomePageTop(),i.getCustomizeTabList().then(function(){"1"==t.globalData.isGroup&&i.getActivity(),i.getHomepageAdvertise(),i.getHomepageProduct(),i.getReommendProducts()})}),i.getLocation().then(function(t){i.getBranchList()})):t.globalData.city.cityName==this.data.posCity||(n=t.globalData.city.cityID,o=1,i.setData({posCity:t.globalData.city.cityName}),clearInterval(r),i.getHomepageBaseInfo().then(function(){i.getHomePageTop(),i.getCustomizeTabList().then(function(){"1"==t.globalData.isGroup&&i.getActivity(),i.getHomepageAdvertise(),i.getHomepageProduct(),i.getReommendProducts()})}),i.getBranchList()))},getHomepageBaseInfo:function(){var e=this;return new Promise(function(o,i){wx.request({url:t.globalData.comUrl+"tabs_getHomepageBaseInfo.action",data:{projectId:a.appId},success:function(a){var i=t.getJsonData(a.data);e.setData({minaInfo:i.minaInfo,isQuery:i.minaInfo.allHidden,isLoading:!0}),getApp().globalData.isQuery=i.minaInfo.allHidden,i.minaInfo.rollNewsHidden||e.getCategory().then(function(t){e.getNewsInfo(t)}),i.minaInfo.listNewsHidden,o(i)}})})},getHomePageTop:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getHomepageTop.action",data:{advertisementsCId:e.LynxHomePage,informationsCId:e.LynxPhoto_H_Info_Tab_Level2,productCId:e.LynxProductList},success:function(e){for(var o=t.getJsonData(e.data),i=0;i<o.advertisements.length;i++)o.advertisements[i].image=t.modifyPicSize(o.advertisements[i].image,"_r750x400p");for(var n=Math.ceil(o.productClass.length/8),s=[],r=0;r<n;r++)s[r]=[],s[r].push(o.productClass.slice(8*r,8*(r+1)));a.setData({advertisements:o.advertisements,productClass:s})}})},getHomepageAdvertise:function(){var e=this;wx.request({url:t.globalData.comUrl+"tabs_getHomepageAdvertising.action",data:{projectId:a.appId},success:function(a){var o=t.getJsonData(a.data);o.PCAdevertising_activity[0]&&e.setData({couponAdImg:o.PCAdevertising_activity[0].picture1}),o.PCAdevertising_top[0]&&e.setData({PCAdevertising_top:o.PCAdevertising_top[0].picture1})}})},getHomepageProduct:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getHomepageProduct.action",data:{advertise:"advertise",cityId:"",hotSale:"hotSale",isGroup:"1",productCId:e.LynxProductList,scroll:""},success:function(e){for(var o=t.getJsonData(e.data),i=0;i<o.advertiseProducts.length;i++)o.advertiseProducts[i].advertisingImage=t.modifyPicSize(o.advertiseProducts[i].advertisingImage,"_r750x200p");for(var n=0;n<o.hotSaleList.length;n++)o.hotSaleList[n].hotSaleImage=t.modifyPicSize(o.hotSaleList[n].hotSaleImage,"_r220x220p");a.setData({hotSaleList:o.hotSaleList,hotSaleList1:o.hotSaleList.slice(0,5),hotSaleList2:o.hotSaleList.slice(5,10),advertiseProducts:o.advertiseProducts}),a.getJoinPhone()}})},getActivity:function(){var a=this;wx.request({url:t.globalData.comUrl+"activityProduct_groupsIndex.action",data:{appId:t.globalData.projectInfo.appId},success:function(t){clearInterval(r);var e=new Date(t.data.beginTime),o=new Date(t.data.nowTime),i=parseInt((e-o)/1e3);if(i>0)t.data.activityStart=!1,t.data.countDown=a.secondToTime(i),r=setInterval(function(){i--,t.data.countDown=a.secondToTime(i),a.setData({activityInfo:t.data}),i<1&&(clearInterval(r),a.refresh())},1e3);else{if(t.data.activityTime<=0)return;t.data.activityStart=!0,t.data.countDown=a.secondToTime(t.data.activityTime),r=setInterval(function(){t.data.activityTime--,t.data.countDown=a.secondToTime(t.data.activityTime),a.setData({activityInfo:t.data}),t.data.activityTime<=0&&(clearInterval(r),a.refresh())},1e3)}}})},secondToTime:function(t){var a=Math.floor(t/3600/24),e=Math.floor(t/3600%24),o=Math.floor(t/60%60),i=Math.floor(t%60);return e<10&&(e="0"+e),o<10&&(o="0"+o),i<10&&(i="0"+i),{d:a,h:e,m:o,s:i}},getMerchantHidden:function(){var o=this;wx.request({url:t.globalData.comUrl+"tabs_getCustomizeTabsById.action",data:{appId:a.appId,customizeTabId:e.LynxAbout_Merchant},success:function(a){var e=t.getJsonData(a.data);o.setData({hiddenMerchant:e.isDeleted})}})},getHomePageInfo:function(e){var o=this;return new Promise(function(e,i){wx.request({url:t.globalData.comUrl+"tabs_getIndexDetail3.action",data:{appId:a.appId,projectId:a.appId,status:"2",isGroup:t.globalData.isGroup},success:function(a){var i=t.getJsonData(a.data);getApp().globalData.isQuery=i.minaInfo.allHidden,console.log(t.globalData.isQuery),o.setData({isQuery:i.minaInfo.allHidden});for(var n=0;n<i.advertisements.length;n++)i.advertisements[n].image=t.modifyPicSize(i.advertisements[n].image,"_r750x400p");for(var s=0;s<i.hotSaleList.length;s++)i.hotSaleList[s].hotSaleImage=t.modifyPicSize(i.hotSaleList[s].hotSaleImage,"_r330x330p");for(var r=0;r<i.productClass.length;r++)i.productClass[r].categoryPicture=t.modifyPicSize(i.productClass[r].categoryPicture,"_r106x106p");for(var c=Math.ceil(i.productClass.length/8),l=[],u=0;u<c;u++)l[u]=[],l[u].push(i.productClass.slice(8*u,8*(u+1)));console.log(l),o.setData({indexData:i,productClass:l,hideNews:i.minaInfo.homeOnekeyHidden,hotSaleList:i.hotSaleList,hotSaleList1:i.hotSaleList.slice(0,5),hotSaleList2:i.hotSaleList.slice(5,10),subVersion:i.minaInfo.subVersion,oneKeyHidden:i.minaInfo.homeOnekeyHidden}),t.globalData.projectInfo.subVersion=i.minaInfo.subVersion,t.globalData.projectInfo.oneKeyHidden=i.minaInfo.homeOnekeyHidden,i.minaInfo.homeOnekeyHidden||o.getCategory().then(function(t){o.getNewsInfo(t)}),wx.hideToast(),wx.stopPullDownRefresh(),e(i)}})})},getLocation:function(){var a=this;return new Promise(function(e,o){wx.getLocation({type:"wgs84",success:function(o){wx.request({url:"https://api.map.baidu.com/geocoder/v2/?ak=KM5p19PFWrU83vSkqpuC01LLCzlEFZpw&location="+o.latitude+","+o.longitude+"&output=json&pois=1",data:{},jsonp:!0,success:function(o){t.globalData.city.cityName=o.data.result.addressComponent.city,wx.request({method:"GET",url:t.globalData.comUrl+"tabs_getCityIdByName.action",data:{cityName:o.data.result.addressComponent.city},success:function(o){t.globalData.city.cityID=o.data.cityId,t.globalData.city.provinceId="",a.setData({posCity:t.globalData.city.cityName}),e(t.globalData.city)}})}})}})})},getCouponInfo:function(a){var e=this;t.getMemberId();wx.request({url:t.globalData.comUrl+"act_getActivityList.action",data:{branchInfoId:-1,customizetabId:t.getCustomizeId("Activity")},success:function(a){var o=t.getJsonData(a.data);console.log(o),e.setData({couponList:validCoupon})},fail:function(a){t.hint(a)}})},getJoinPhone:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getAboutMerchant.action",data:{customizetabId:e.LynxApplyFor_About_Merchant},success:function(e){var o=t.getJsonData(e.data);a.setData({joinPhone:o.phone})}})},getCategory:function(){return new Promise(function(o,i){wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabCategory.action",data:{appId:a.appId,customizeTabId:e["Photo-Info-Tab-Level2"]},success:function(a){var e=t.getJsonData(a.data);o(e)}})})},getCustomizeTabList:function(){var e=this;return new Promise(function(o,i){wx.request({url:t.globalData.comUrl+"tabs_getCustomizeTabList.action",data:{appId:a.appId},success:function(a){for(var i=t.getJsonData(a.data),n=0;n<i.length;n++)"Activity-Group"==i[n].sysTabName&&(t.globalData.isGroup="1",e.setData({isGroup:"1"}));for(var s=c,r=[],l=0;l<i.length;l++)for(var u=0;u<s.length;u++)""!=i[l].sysTabNameTag&&i[l].sysTabNameTag==s[u]?r.push(i[l]):""==i[l].sysTabNameTag&&i[l].sysTabName==s[u]&&r.push(i[l]);if("O2O_V1"==e.data.minaInfo.subVersion){for(var d=Math.ceil(r.length/8),g=[],p=0;p<d;p++)g[p]=[],g[p].push(r.slice(8*p,8*(p+1)));console.log(g),e.setData({moreArr:g})}else e.setData({moreArr:r});o(i)}})})},toMoreFunction:function(a){switch(console.log(a.currentTarget.dataset.title),a.currentTarget.dataset.location){case"LynxProductList":t.globalData.isPerson?wx.navigateTo({url:"../product/product"}):wx.switchTab({url:"../product/product"});break;case"LynxAbout_Merchant":1==this.data.isPerson?wx.navigateTo({url:"../store/store"}):wx.switchTab({url:"../store/store"});break;case"LynxPhoto_Info_Post_Tab":wx.navigateTo({url:"../supply/supply"});break;case"LynxPhoto_H_Info_Tab_Level2":wx.navigateTo({url:"../news/news?sysTabName=LynxPhoto_H_Info_Tab_Level2&title="+a.currentTarget.dataset.title});break;case"Photo-Info-Tab-Level2":wx.navigateTo({url:"../news/news?sysTabName=Photo-Info-Tab-Level2&title="+a.currentTarget.dataset.title});break;case"Video_Gallery":wx.navigateTo({url:"../publicity/publicity"});break;case"Flexi-Form":wx.navigateTo({url:"../store/store-detail/custom/custom"});break;case"Activity":wx.navigateTo({url:"../self/mycoupon/mycoupon"});break;case"LynxApplyFor_About_Merchant":t.getMemberId()?wx.navigateTo({url:"../join/join"}):wx.navigateTo({url:"../login/login"});break;case"Activity-Group":wx.navigateTo({url:"../group/group-prolist/group-prolist"})}},getBranchList:function(){var o=this,i={appId:a.appId,customizeTabId:e.LynxAbout_Merchant,advertisement:1,current:1,level:0};t.globalData.city.cityID>0&&(i.cityId=t.globalData.city.cityID),t.globalData.city.provinceId>0&&(i.provinceId=t.globalData.city.provinceId),wx.request({url:t.globalData.comUrl+"mctab_searchBranchInfo.action",data:i,success:function(a){var e=t.getJsonData(a.data);if(e.pageList.length>0){for(var i=0;i<e.pageList.length;i++)e.pageList[i].pic1=t.modifyPicSize(e.pageList[i].pic1,"_r192x90p");o.setData({branchInfo:e.pageList,hasBranch:!0})}else o.setData({hasBranch:!1})},fail:function(a){t.hint()}})},getNewsInfo:function(o){var i=this;o.length>=1&&(i.setData({headlineImage:o[0].categoryIcon}),wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabFromL2ToL1.action",data:{appId:a.appId,customizeTabId:e["Photo-Info-Tab-Level2"],categoryId:o[0].code,current:1},success:function(a){for(var e=t.getJsonData(a.data),o=[],n=Math.ceil(e.pageList.length/2),s=0;s<n;s++)o[s]=[],o[s].push(e.pageList.slice(2*s,2*(s+1)));for(var r=0;r<e.pageList.length;r++)e.pageList[r].picture1=t.modifyPicSize(e.pageList[r].picture1,"_r140x140p");i.setData({recommendNews:e.pageList.slice(0,3),headlineArr:o})}}))},getcyCategory:function(){return new Promise(function(o,i){wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabCategory.action",data:{appId:a.appId,customizeTabId:e.LynxPhoto_H_Info_Tab_Level2},success:function(a){var e=t.getJsonData(a.data);o(e)}})})},getReommendProducts:function(){if(!s){s=!0;var n=this;wx.request({url:t.globalData.comUrl+"tabs_getProdPage.action",data:{appId:a.appId,customizeTabId:e.LynxProductList,proId:"",disId:"",productName:"",current:o,cityId:"",isGroup:t.globalData.isGroup},success:function(a){var e=t.getJsonData(a.data);console.log(e),i=e.pages,n.setData({productArr:n.data.productArr.concat(e.productList)}),s=!1}})}},toSearch:function(t){wx.navigateTo({url:"../search/search?type=0"})},toPosition:function(){wx.navigateTo({url:"../position/position"})},toProductList:function(t){wx.navigateTo({url:"../product/pro-list/pro-list?bigCateCode="+t.currentTarget.dataset.code+"&title="+t.currentTarget.dataset.title})},toProductDetail:function(t){wx.navigateTo({url:"../product/pro-detail/pro-detail?productId="+t.currentTarget.dataset.pid})},toStore:function(){wx.switchTab({url:"../store/store"})},toStoreDetail:function(t){wx.navigateTo({url:"../store/store-detail/store-detail?tabContentId="+t.currentTarget.dataset.sid})},toNewsList:function(){wx.navigateTo({url:"../news/news?sysTabName=Photo-Info-Tab-Level2"})},toNewsDetail:function(t){wx.navigateTo({url:"../news/news-detail/news-detail?tabContentId="+t.currentTarget.dataset.nid+"&type=4"})},joinPhoneCall:function(){var t=this;t.data.joinPhone&&wx.makePhoneCall({phoneNumber:t.data.joinPhone})},toMyCoupon:function(){wx.navigateTo({url:"../self/mycoupon/mycoupon"})},toGroupActivity:function(){wx.navigateTo({url:"../group/group-prolist/group-prolist"})},onPullDownRefresh:function(){this.setData({indexData:{},productArr:[],bottomHint:!0,posCity:t.globalData.city.cityName}),clearInterval(r),n="",o=1;var a=this;a.getHomepageBaseInfo().then(function(){a.getHomePageTop(),a.getCustomizeTabList().then(function(){"1"==t.globalData.isGroup&&a.getActivity(),a.getHomepageAdvertise(),a.getHomepageProduct(),a.getReommendProducts()})}),a.getBranchList()},refresh:function(){this.setData({indexData:{},productArr:[],bottomHint:!0,activityInfo:"",posCity:t.globalData.city.cityName}),n="",o=1,clearInterval(r);var a=this;a.getHomepageBaseInfo().then(function(){a.getHomePageTop(),a.getCustomizeTabList().then(function(){"1"==t.globalData.isGroup&&a.getActivity(),a.getHomepageAdvertise(),a.getHomepageProduct(),a.getReommendProducts()})}),a.getBranchList()},onReachBottom:function(){o<i&&(o++,this.getReommendProducts())},onShareAppMessage:function(){return{title:a.productName,path:"/pages/index/index",success:function(t){},fail:function(t){}}}}); 
 			}); 	require("pages/indexStyle3/index.js");
 		__wxRoute = 'pages/store/store';__wxRouteBegin = true; 	define("pages/store/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var a,e=getApp(),o="",r="",s=1,n=1;Page({data:(a={styleConfig:e.globalData.styleConfig,adArr:[],storeArr:[],show:!1,bCate_code:0,smCate_code:0,provinceId:-1,cityId:-1,categoryId:-1,level:0,bigCategory:[],showBigCate:!1,smallCategory:[],showSmallCate:!0,provinceArr:[],cityArr:[],showProvince:!1,showCity:!1},t(a,"show",!1),t(a,"noStore",!0),t(a,"bottomHint",!0),a),onLoad:function(){wx.showToast({title:"加载中...",icon:"loading",duration:1e4,mask:!0}),o=e.globalData.projectInfo,r=e.globalData.customizeTabId;var t=this;t.storeInfo(),t.getBigCategory()},toSearch:function(t){wx.navigateTo({url:"../search/search?type=1"})},menutap:function(){this.setData({show:!this.data.show})},confirm:function(){this.setData({storeArr:[],adArr:[],noStore:!0,bottomHint:!0}),s=1,this.setData({show:!this.data.show}),this.storeInfo()},storeInfo:function(){var t=this,a={appId:o.appId,customizeTabId:r.LynxAbout_Merchant,advertisement:1,current:s};t.data.level>0&&(a.level=t.data.level),t.data.provinceId>0&&(a.provinceId=t.data.provinceId),t.data.cityId>0&&(a.cityId=t.data.cityId),t.data.categoryId>0&&(a.categoryId=t.data.categoryId);try{wx.request({url:e.globalData.comUrl+"mctab_searchBranchInfo.action",data:a,success:function(a){var o=e.getJsonData(a.data);n=o.pages;for(var r=0;r<o.pageList.length;r++)o.pageList[r].isAdvertisement&&t.data.adArr.push(o.pageList[r]),o.pageList[r].pic1=e.modifyPicSize(o.pageList[r].pic1,"_rx160p");t.setData({storeArr:t.data.storeArr.concat(o.pageList),bottomHint:!0}),1==s&&t.setData({adArr:t.data.adArr}),0==t.data.storeArr.length?t.setData({noStore:!1}):t.setData({noStore:!0}),wx.hideToast(),wx.stopPullDownRefresh()},fail:function(t){e.hint()}})}catch(t){e.hint(t)}},onReachBottom:function(){s<n?(s++,this.storeInfo()):s>1&&(this.data.storeArr.length>1?this.setData({bottomHint:!1}):this.setData({bottomHint:!0}))},onPullDownRefresh:function(){this.reset()},getBigCategory:function(){var t=this;wx.request({url:e.globalData.comUrl+"tabs_getPhotoInfoTabCategory.action",data:{appId:o.appId,customizeTabId:r.LynxAbout_Merchant},success:function(a){var o=e.getJsonData(a.data);t.setData({bigCategory:o})},fail:function(t){e.hint("获取大类失败")}})},bigCate_unfold:function(){this.setData({showBigCate:!this.data.showBigCate})},getSmallCategory:function(t){var a=this;a.setData({bCate_code:t.currentTarget.dataset.code,categoryId:t.currentTarget.dataset.code}),wx.request({url:e.globalData.comUrl+"tabs_getPhotoInfoTabCategoryFromL1toL2.action",data:{appId:o.appId,customizeTabId:r.LynxAbout_Merchant,categoryCode:t.currentTarget.dataset.code},success:function(t){var o=e.getJsonData(t.data);a.setData({smallCategory:o,showSmallCate:!1}),s=1,a.setData({level:1})},fail:function(t){e.hint()}})},smCateTap:function(t){0!=t.currentTarget.dataset.code?this.setData({level:"",smCate_code:t.currentTarget.dataset.code,categoryId:t.currentTarget.dataset.code}):this.setData({level:1,smCate_code:t.currentTarget.dataset.code,categoryId:this.data.bCate_code})},getProvinceInfo:function(){var t=this;wx.request({url:e.globalData.comUrl+"mctab_getBranchProvinces.action",data:{appId:o.appId,customizeTabId:r.LynxAbout_Merchant},success:function(a){var o=e.getJsonData(a.data);t.setData({provinceArr:o})},fail:function(t){e.hint()}})},getCityInfo:function(t){var a=this;a.setData({provinceId:t.currentTarget.dataset.proid}),"0"==t.currentTarget.dataset.proid?(s=1,a.setData({provinceId:"",cityId:"",showCity:!1})):wx.request({url:e.globalData.comUrl+"mctab_getBranchCitys.action",data:{appId:o.appId,customizeTabId:r.LynxAbout_Merchant,provinceId:t.currentTarget.dataset.proid},success:function(t){var o=e.getJsonData(t.data);a.setData({cityArr:o,showCity:!0})},fail:function(t){e.hint()}})},citytap:function(t){"0"==t.currentTarget.dataset.cityid?this.setData({cityId:""}):this.setData({cityId:t.currentTarget.dataset.cityid}),s=1},prov_unfold:function(){this.setData({showProvince:!this.data.showProvince}),this.getProvinceInfo()},reset:function(){s=1,n=1,this.setData({adArr:[],storeArr:[],showBigCate:!1,showSmallCate:!1,showProvince:!1,showCity:!1,bottomHint:!0,bCate_code:0,smCate_code:0,provinceId:-1,cityId:-1,categoryId:-1,level:0}),this.storeInfo()},onShareAppMessage:function(){return{title:"商铺",path:"/pages/store/store",success:function(t){},fail:function(t){}}}}); 
 			}); 	require("pages/store/store.js");
 		__wxRoute = 'pages/store/store-detail/store-detail';__wxRouteBegin = true; 	define("pages/store/store-detail/store-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../utils/wxParse/wxParse.js"),a=getApp(),o=a.globalData.projectInfo,e=a.globalData.customizeTabId,n="",i="",r={},s=!0,c=!0,l=1,d=1;Page({data:{styleConfig:a.globalData.styleConfig,storeInfo:{},productArr:[],collectStatus:"0",tapIndex:1,bottomHint:!0,isGroup:a.globalData.isGroup,storeImg:[],actDistribution:{}},onLoad:function(t){a.loginVzSystem(),o=a.globalData.projectInfo,e=a.globalData.customizeTabId;var n=wx.getStorageSync("memberType"+a.globalData.autoId);this.setData({memberType:n}),a.globalData.actDistribution&&this.setData({actDistribution:a.globalData.actDistribution});var i=this;l=1,i.getStoreInfo(t),i.getCollectStatus()},nav_tap:function(t){var a=0;"1"==t.currentTarget.dataset.index?(a=1,this.getProductList()):a="2"==t.currentTarget.dataset.index?2:3,this.setData({tapIndex:a})},getStoreInfo:function(e){var i=this;n=e.tabContentId,wx.request({url:a.globalData.comUrl+"tabs_getSingleBranchInfo.action",data:{appId:o.appId,tabContentId:n},success:function(o){r=a.getJsonData(o.data),console.log(r);for(var e=[r.pic1,r.pic2,r.pic3,r.pic4,r.pic5],n=[],s=0;s<e.length;s++)e[s]&&n.push(e[s]);t.wxParse("shortDescription","html",r.shortDescription,i,5),i.setData({storeInfo:r,storeImg:n}),wx.setNavigationBarTitle({title:r.branchName}),i.getProductList()},fail:function(t){a.hint()}})},getProductList:function(){var t=this,n=t.data.storeInfo.id;wx.request({url:a.globalData.comUrl+"tabs_getZXProductListByCategory.action",data:{appId:o.appId,customizeTabId:e.LynxProductList,current:"1",status:"2",branchInfoId:n,isGroup:a.globalData.isGroup,sortName:"prodSequence"},success:function(o){var e=a.getJsonData(o.data);d=e.pages,t.setData({productArr:e.pageList}),wx.hideToast()},fail:function(t){a.hint()}})},getMoreProduct:function(){var t=this,n=t.data.storeInfo.id;wx.request({url:a.globalData.comUrl+"tabs_getZXProductListByCategory.action",data:{appId:o.appId,customizeTabId:e.LynxProductList,current:l,status:"2",branchInfoId:n,isGroup:a.globalData.isGroup,sortName:"prodSequence"},success:function(o){var e=a.getJsonData(o.data);t.setData({productArr:t.data.productArr.concat(e.pageList)})},fail:function(t){a.hint()}})},toProDetail:function(t){wx.navigateTo({url:"../../product/pro-detail/pro-detail?productId="+t.currentTarget.dataset.pid})},collect:function(){if(0!=s){s=!1;var t=this;(i=a.getMemberId())?wx.request({url:a.globalData.comUrl+"tabs_addCollection.action",data:{appId:o.appId,memberId:i,type:2,objId:r.id,name:r.branchName,address:r.address,tell:r.tel,pic_url:r.pic1},success:function(a){t.getCollectStatus()},fail:function(t){a.hint("收藏失败")}}):(s=!0,wx.navigateTo({url:"../../login/login"}))}},cancelCollect:function(){if(0!=c){c=!1;var t=this;(i=a.getMemberId())?wx.request({url:a.globalData.comUrl+"tabs_delCollectionByObjId.action",data:{id:n,memberId:i},success:function(a){t.getCollectStatus()},fail:function(t){a.hint("取消收藏失败")}}):(c=!0,wx.navigateTo({url:"../../login/login"}))}},getCollectStatus:function(){if(i=a.getMemberId()){var t=this;wx.request({url:a.globalData.comUrl+"tabs_checkCollection.action",data:{appId:o.appId,memberId:i,id:n},success:function(o){var e=a.getJsonData(o.data);t.setData({collectStatus:e.isExisted})},fail:function(t){a.hint()},complete:function(){c=!0,s=!0}})}},phonecall:function(){var t=this.data.storeInfo.phone;wx.makePhoneCall({phoneNumber:t})},locationtap:function(){var t=this,a=t.data.storeInfo.gdLatitude;a=(1*a).toFixed(6);var o=t.data.storeInfo.gdLongitude;o=(1*o).toFixed(6),wx.openLocation({latitude:parseFloat(a),longitude:parseFloat(o),name:t.data.storeInfo.branchName,address:t.data.storeInfo.address,scale:28})},customtap:function(){wx.navigateTo({url:"custom/custom?branchId="+this.data.storeInfo.id})},onReachBottom:function(){l<d?(l++,this.getMoreProduct()):l>1&&(this.data.productArr.length>1?this.setData({bottomHint:!1}):this.setData({bottomHint:!0}))},onShareAppMessage:function(){var t=this;return{title:t.data.storeInfo.branchName,path:"/pages/store/store-detail/store-detail?tabContentId="+t.data.storeInfo.id,success:function(t){},fail:function(t){}}}}); 
 			}); 	require("pages/store/store-detail/store-detail.js");
 		__wxRoute = 'pages/store/store-detail/location/location';__wxRouteBegin = true; 	define("pages/store/store-detail/location/location.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{longitude:"",latitude:"",markers:[{iconPath:"../../../../img/location.png",id:0,latitude:"",longitude:"",width:50,height:50}]},regionchange:function(t){console.log(t.type)},markertap:function(t){console.log(t.markerId)},controltap:function(t){console.log(t.controlId)},onLoad:function(t){this.setData({longitude:t.gdLongitude,latitude:t.gdLatitude,markers:[{iconPath:"../../../../img/location.png",id:0,latitude:t.gdLatitude,longitude:t.gdLongitude,width:30,height:40}]})}}); 
 			}); 	require("pages/store/store-detail/location/location.js");
 		__wxRoute = 'pages/store/store-detail/custom/custom';__wxRouteBegin = true; 	define("pages/store/store-detail/custom/custom.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),t="",e="",i="",o=!0;Page({data:{styleConfig:a.globalData.styleConfig,imagePath:"",storeName:"",name:"",phone:"",detail:"",branchId:""},takephoto:function(){var t=this;wx.chooseImage({count:1,success:function(a){var e=a.tempFilePaths[0];t.setData({imagePath:e})},fail:function(t){a.hint("上传失败")}})},onLoad:function(a){a.branchId&&this.setData({branchId:a.branchId})},formSubmit:function(n){if(o){o=!1;var l=this,s=/^1[3|4|5|8|7][0-9]\d{4,8}$/;if(""==n.detail.value.storeName)return o=!0,void this.warn("店铺不能为空!");if(""==n.detail.value.name)return o=!0,void this.warn("姓名不能为空!");if(""==n.detail.value.phone)return o=!0,void this.warn("请输入电话号码!");if(!s.test(n.detail.value.phone))return o=!0,void this.warn("请输入正确的电话号码");wx.showToast({title:"正在提交...",icon:"loading",duration:1e4,mask:!0});var r=new Date;t="店铺,姓名,电话,描述,附图说明",e=n.detail.value.storeName+","+n.detail.value.name+","+n.detail.value.phone+","+n.detail.value.detail;var c={storeName:n.detail.value.storeName,name:n.detail.value.name,phone:n.detail.value.phone,detail:n.detail.value.detail,imagePath:this.data.imagePath,date:r.toLocaleDateString()},u=wx.getStorageSync("customArr"+a.globalData.autoId)||[];u.push(c),wx.setStorageSync("customArr"+a.globalData.autoId,u),l.data.imagePath?wx.uploadFile({url:a.globalData.comUrl+"tabs_uploadPicMina.action",filePath:l.data.imagePath,name:"file",success:function(a){var t=JSON.parse(a.data);console.log(t),"1"==t.isSuccess&&(i=t.path)},fail:function(t){a.hint("图片上传失败")},complete:function(){i?e=e+","+i:e+=",null",wx.request({url:a.globalData.comUrl+"tabs_saveFlexiForm",data:{projectId:a.globalData.projectInfo.appId,customizeTabId:a.globalData.customizeTabId["Flexi-Form"],token:"html5",branchId:l.data.branchId,fieldKey:t,fieldValue:e},success:function(a){l.setData({imagePath:"",storeName:"",name:"",phone:"",detail:""}),wx.showToast({title:"提交成功",icon:"success",duration:2e3})},fail:function(t){a.hint("提交失败"),wx.hideToast()},complete:function(){o=!0}})}}):(e+=",null",wx.request({url:a.globalData.comUrl+"tabs_saveFlexiForm",data:{projectId:a.globalData.projectInfo.appId,customizeTabId:a.globalData.customizeTabId["Flexi-Form"],branchId:l.data.branchId,token:"html5",fieldKey:t,fieldValue:e},success:function(a){l.setData({imagePath:"",storeName:"",name:"",phone:"",detail:""}),wx.showToast({title:"提交成功",icon:"success",duration:2e3})},fail:function(t){a.hint("提交失败"),wx.hideToast()},complete:function(){o=!0}}))}},formReset:function(){this.setData({imagePath:""})},warn:function(a){wx.showToast({title:a,image:"../../../../img/warn.png",duration:2e3})}}); 
 			}); 	require("pages/store/store-detail/custom/custom.js");
 		__wxRoute = 'pages/self/card/card';__wxRouteBegin = true; 	define("pages/self/card/card.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),e="",t="";Page({data:{isShowGetCard:!0,cardImage:"",cardNo:"",preMoney:"",isloading:!0},onLoad:function(o){e=a.globalData.projectInfo,t=a.globalData.customizeTabId,this.getRechargeDetail();var r=this;wx.request({url:a.globalData.comUrl+"mctab_getElectronicsCard.action",data:{appId:e.appId,webApp:"1"},success:function(e){var t=a.getJsonData(e.data);r.setData({cardImage:t.background})}})},onShow:function(){t=a.globalData.customizeTabId,this.getUserInfo()},getRechargeDetail:function(){wx.request({url:a.globalData.comUrl+"mctab_getMoneyRecord.action",data:{memberId:a.getMemberId(),type:"1",current:"1"},success:function(a){console.log(a.data)}})},getUserInfo:function(){var e=this;wx.request({url:a.globalData.comUrl+"tabs_getMember.action",data:{memberId:a.getMemberId(),customizetabId:t.LynxApplyFor_About_Merchant},success:function(t){var o=a.getJsonData(t.data);e.setData({preMoney:o.preMoney,isloading:!1}),o.cardNo&&e.setData({isShowGetCard:!1,cardNo:o.cardNo}),wx.hideToast()},fail:function(){a.hint()}})},toPrestoreMoney:function(){wx.navigateTo({url:"prestore-money/prestore-money"})},toPrestoreRule:function(){wx.navigateTo({url:"prestore-rule/prestore-rule"})},getCard:function(){var e=this;wx.request({url:a.globalData.comUrl+"mctab_regElectronicsMember.action",data:{memberId:a.getMemberId()},success:function(t){var o=a.getJsonData(t.data);wx.showToast({title:"领取成功",icon:"success"}),e.setData({cardNo:o.cardNo,isShowGetCard:!1})}})}}); 
 			}); 	require("pages/self/card/card.js");
 		__wxRoute = 'pages/self/card/prestore-rule/prestore-rule';__wxRouteBegin = true; 	define("pages/self/card/prestore-rule/prestore-rule.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),t="";Page({data:{rule:""},onShow:function(){},onLoad:function(){t=a.globalData.projectInfo;var e=this;wx.request({url:a.globalData.comUrl+"mctab_getPreExisting.action",data:{appId:t.appId,webApp:1},success:function(t){var o=a.getJsonData(t.data);e.setData({rule:o.preMoneyRule})}})}}); 
 			}); 	require("pages/self/card/prestore-rule/prestore-rule.js");
 		__wxRoute = 'pages/self/card/prestore-money/prestore-money';__wxRouteBegin = true; 	define("pages/self/card/prestore-money/prestore-money.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t="",a="";Page({data:{preMoney:0},onShow:function(){a=e.globalData.customizeTabId,t=e.globalData.projectInfo,this.getUserInfo()},onLoad:function(){},getUserInfo:function(){var t=this;wx.request({url:e.globalData.comUrl+"tabs_getMember.action",data:{memberId:e.getMemberId(),customizetabId:a.LynxApplyFor_About_Merchant},success:function(a){var o=e.getJsonData(a.data);t.setData({preMoney:o.preMoney}),wx.hideToast()},fail:function(){e.hint()}})},toRecharge:function(){wx.navigateTo({url:"../recharge/recharge"})},toDetail:function(){wx.navigateTo({url:"../prestore-detail/prestore-detail"})}}); 
 			}); 	require("pages/self/card/prestore-money/prestore-money.js");
 		__wxRoute = 'pages/self/card/prestore-detail/prestore-detail';__wxRouteBegin = true; 	define("pages/self/card/prestore-detail/prestore-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{detailList:[],detailNull:!1},onShow:function(){},onLoad:function(){var e=this;wx.request({url:t.globalData.comUrl+"mctab_getMoneyRecord.action",data:{memberId:t.getMemberId(),type:"1",current:"1"},success:function(a){console.log(a.data);for(var i=t.getJsonData(a.data),n=0;n<i.pageList.length;n++)1==i.pageList[n].kind?i.pageList[n].money="+ "+i.pageList[n].money:4==i.pageList[n].kind&&(i.pageList[n].money="- "+i.pageList[n].money);i.pageList.length,e.setData({detailList:i.pageList})}})}}); 
 			}); 	require("pages/self/card/prestore-detail/prestore-detail.js");
 		__wxRoute = 'pages/self/card/recharge/recharge';__wxRouteBegin = true; 	define("pages/self/card/recharge/recharge.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t="";Page({data:{rechargeList:[],rule:"",rechargeMoney:""},onShow:function(){},onLoad:function(){t=e.globalData.projectInfo,wx.showLoading({title:"加载中..."});var a=this;wx.request({url:e.globalData.comUrl+"mctab_getPreExisting.action",data:{appId:t.appId,webApp:1},success:function(t){wx.hideLoading();var n=e.getJsonData(t.data);a.setData({rechargeList:n.preMoneys,rule:n.preMoneyRule})},fail:function(){wx.hideLoading(),e.hint()}})},radioChange:function(e){this.setData({rechargeMoney:e.detail.value})},recharge:function(){var a=this,n=this.getNowFormatDate();console.log(n),wx.login({success:function(o){o.code&&wx.request({url:e.globalData.paymentUrl+"/WechatAlipay/MiniPayService2?jsoncallback=?",data:{projectId:t.appId,nonce_str:"lfksf"+Math.round(1e5*Math.random()),body:"在线充值",attach:e.getMemberId()+"_"+t.appId+"_1",out_trade_no:n,total_fee:(100*a.data.rechargeMoney).toFixed(0),trade_type:"JSAPI",device_info:"888",code:o.code,payType:"1"},success:function(e){if(wx.hideToast(),""!=e.data){var t=a.getJsonData(e.data);wx.requestPayment({timeStamp:t.timeStamp,nonceStr:t.nonceStr,package:"prepay_id="+t.prepay_id,signType:"MD5",paySign:t.sign,success:function(e){wx.showToast({title:"支付成功",icon:"success",duration:2e3,mask:!0}),setTimeout(function(){wx.navigateBack({delta:1})},2e3)},fail:function(e){wx.showModal({title:"支付失败",showCancel:!1})}})}else wx.showModal({title:"支付失败",showCancel:!1})}})}})},getJsonData:function(e){return JSON.parse(e.substring(1,e.length-1))},getNowFormatDate:function(){var e=new Date,t=e.getMonth()+1,a=e.getDate();return t>=1&&t<=9&&(t="0"+t),a>=0&&a<=9&&(a="0"+a),e.getFullYear()+""+t+a+e.getHours()+e.getMinutes()+e.getSeconds()}}); 
 			}); 	require("pages/self/card/recharge/recharge.js");
 		__wxRoute = 'pages/product/pro-detail/pro-detail';__wxRouteBegin = true; 	define("pages/product/pro-detail/pro-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../../utils/wxParse/wxParse.js");var t=getApp(),a="",e="",o="",i=[],r=!0,n=!0,d=!1,c="",s=0,u=0,l=0,p=0,h=0,g=0,m=[],I=[],f="",y="",v="",b="";Page({data:{likeProductList:[],styleConfig:t.globalData.styleConfig,productId:"",proInfoDetail:{},price:0,proImageNavIdx:0,originalPrice:0,activityPrice:0,stock:0,quantity:0,showProAttr:!1,active:[],count:1,modelName:"",modelImage:"",pic_url:"",showCurAttr:!0,collectStatus:0,showCartPoint:!0,isPerson:t.globalData.isPerson,couponList:[],hiddenCouponList:!0,isStoreHidden:!0,activityType:"",groupList:[],groupOrderNo:"",hasVideo:!1,video:"",group:"",navIdx:0,netWorkType:!1,commentList:[],totalPrice:"",currentPrice:"",seckillCount:{},seckillStart:"",memberType:"",loadCount:1,attrBtnStatus:"1",buyType:""},onLoad:function(o){var i=this;if(a=t.globalData.projectInfo,e=t.globalData.customizeTabId,this.setData({productId:o.productId}),o.parentId)wx.setStorageSync("parentId"+t.globalData.autoId,o.parentId),i.loginVzSystem(o.parentId);else{var r=wx.getStorageSync("memberType"+t.globalData.autoId);this.setData({memberType:r}),i.loginVzSystem(o.parentId),i.initData()}wx.getNetworkType({success:function(t){i.setData({netWorkType:t.networkType})}}),this.getStoreHidden()},onShow:function(){d?d=!1:1!=this.data.loadCount?(clearInterval(c),this.initData()):this.setData({loadCount:this.data.loadCount+1})},initData:function(){var t=this;t.getProDetail().then(function(a){t.getCollectStatus(),t.getCommentList(),t.getCouponInfo(a.branchInfoId),t.getGroupList(a.id)})},loginVzSystem:function(a){if(wx.canIUse("login")){var e=this;wx.login({success:function(o){var i=o.code;t.getOpenId(i).then(function(o){if(o&&!(o.length<1)){var i={appId:t.globalData.projectInfo.appId,openId:o};a&&(i.parentId=a),wx.request({url:t.globalData.comUrl+"member_memberRegistration.action",data:i,success:function(o){console.log(o.data);var i=t.getJsonData(o.data);i.parentId==a?(wx.setStorageSync("parentId"+t.globalData.autoId,a),e.setData({parentId:a})):wx.removeStorageSync("parentId"+t.globalData.autoId),wx.setStorageSync("memberId"+t.globalData.autoId,i.memberId),i.isDistributor&&"3"==i.type&&(wx.setStorageSync("memberType"+t.globalData.autoId,i.type),e.setData({memberType:i.type})),e.initData()},fail:function(){console.log("login failed")}})}})}})}},getCartData:function(){var a=this,e=wx.getStorageSync("cartData"+t.globalData.autoId);e&&e.length>0?a.setData({showCartPoint:!1}):a.setData({showCartPoint:!0})},proImageNavTap:function(t){this.setData({proImageNavIdx:t.currentTarget.dataset.idx})},getGroupList:function(e){var o=this;wx.request({url:t.globalData.comUrl+"activityOrder_getGroupList.action",data:{appId:a.appId,produceId:e},success:function(a){var e=t.getJsonData(a.data);"0"!=e.code&&(o.setData({groupList:e}),c=setInterval(function(){for(var t=!1,a=0;a<o.data.groupList.length;a++)o.data.groupList[a].remainTime>0&&(t=!0,o.data.groupList[a].remainTime--,o.data.groupList[a].timeFormat=o.secondToTime(o.data.groupList[a].remainTime));o.setData({groupList:o.data.groupList}),t||o.onShow()},1e3))}})},secondToTime:function(t){var a=Math.floor(t/3600),e=Math.floor(t/60%60),o=Math.floor(t%60);return a<10&&(a="0"+a),e<10&&(e="0"+e),o<10&&(o="0"+o),t=a+":"+e+":"+o},seckillToTime:function(t){var a=Math.floor(t/3600/24),e=Math.floor(t/3600%24),o=Math.floor(t/60%60),i=Math.floor(t%60);return e<10&&(e="0"+e),o<10&&(o="0"+o),i<10&&(i="0"+i),{day:a,hours:e,minute:o,second:i}},getCouponInfo:function(a){var e=this,o=t.getMemberId()||"";wx.request({url:t.globalData.comUrl+"act_getActivityList.action",data:{branchInfoId:a,customizetabId:t.getCustomizeId("Activity"),memberId:o},success:function(a){var o=t.getJsonData(a.data);console.log(o);for(var i=[],r=0;r<o.length;r++){var n=o[r];n.beginTime=n.beginTime.replace(" ","-"),n.endTime=n.endTime.replace(" ","-");var d=n.beginTime.split("-"),c=n.endTime.split("-");d.length>3&&c.length>3&&(n.validDate=d[1]+"月"+d[2]+"日-"+c[1]+"月"+c[2]+"日"),void 0!=n.getCoupon&&1!=n.getCoupon||i.push(n)}e.setData({couponList:i})},fail:function(a){t.hint(a)}})},getProDetail:function(){var e=this;return i=[],m=[],I=[],f="",y="",v="",b="",e.setData({moduleId:y,modelName:b}),e.getCartData(),new Promise(function(o,i){wx.request({url:t.globalData.comUrl+"tabs_getZXProductDetail.action",data:{appId:a.appId,productId:e.data.productId,type:1},success:function(a){var i=t.getJsonData(a.data);if(1==i.status)wx.hideToast(),wx.showModal({title:"该商品已下架！",showCancel:!1,success:function(t){t.confirm&&wx.navigateBack({delta:1})}});else{i.productModelList[0]&&(s=i.productModelList[0].price,u=i.productModelList[0].originalprice,l=i.productModelList[0].activityPrice,p=i.productModelList[0].stock),h=Math.abs(i.quantity);for(var r=0;r<i.attributeKeyVOList.length;r++){I[r]=[];for(var n=0;n<i.attributeKeyVOList[r].valueList.length;n++)I[r][n]=!1}var d=new Date,g=Date.parse(new Date(i.activityBeginTime)),m=Date.parse(new Date(i.activityEndTime));if(parseInt((g-d)/1e3)>0){var f=parseInt((g-d)/1e3);c=setInterval(function(){f--,e.setData({seckillCount:e.seckillToTime(f),seckillStart:!1}),f<1&&(clearInterval(c),e.refresh())},1e3)}else{var y=parseInt((m-d)/1e3);c=setInterval(function(){y--,e.setData({seckillCount:e.seckillToTime(y),seckillStart:!0}),y<1&&(clearInterval(c),e.refresh())},1e3)}i.video&&e.setData({hasVideo:!0,video:i.video});var v=i.remark;v=(v=(v=(v=(v=(v=v.replace(/&ldquo;/g,"“")).replace(/&rdquo;/g,"”")).replace(/&mdash;/g,"—")).replace(/&middot;/g,"·")).replace(/&hellip;/g,"…")).replace(/<img(?=.*?\/>)/gi,'<img style="width: 100%; height: auto;" '),e.setData({proInfoDetail:i,price:s,originalPrice:u,stock:p,quantity:h,active:I,activityType:i.activityType,activityPrice:l,remark:v}),e.getLikeProduct(i.bigCateGoryCode),o(e.data.proInfoDetail),wx.hideToast()}}})})},getLikeProduct:function(a){var o=this;wx.request({url:t.globalData.comUrl+"tabs_getLikeProductByPage.action",data:{customizeTabId:e.LynxProductList,bigCateGoryCode:a,status:2,actType:"",current:1},success:function(a){var e=t.getJsonData(a.data);console.log(e),o.setData({likeProductList:e.pageList})}})},addCart:function(a){console.log(a);var e=this;if(e.setData({buyType:a}),""==y)return g="51"==e.data.buyType||"52"==e.data.buyType||"6"==e.data.buyType&&("3"==e.data.memberType||e.data.parentId)?this.data.activityPrice*this.data.count:""!=e.data.buyType||"5"!=e.data.activityType&&("6"!=e.data.activityType||"3"!=e.data.memberType&&!e.data.parentId)?this.data.price*this.data.count:this.data.activityPrice*this.data.count,void e.setData({totalPrice:g,showProAttr:!0});if(e.data.stock<=0||e.data.count>e.data.stock)this.setData({showProAttr:!0}),t.hint("该商品库存不足");else{var r={productId:e.data.proInfoDetail.id,productName:e.data.proInfoDetail.productName,productCode:e.data.proInfoDetail.productCode,count:e.data.count,pic_url:e.data.pic_url,price:e.data.price,moduleId:y,proAttrName:v,modelName:e.data.modelName,branchInfoId:e.data.proInfoDetail.branchInfoId,branchName:e.data.proInfoDetail.branchName,isSelected:!0};if("51"!=a&&"52"!=a&&"3"!=a&&"6"!=a||(r.price=e.data.activityPrice),"3"==e.data.proInfoDetail.purpose){var d=[],c=[],s={};d.push(r),s.branchInfoId=r.branchInfoId,s.isSelected=!0,s.branchName=r.branchName,s.pro=d,c.push(s),wx.setStorageSync("bookingDataList"+t.globalData.autoId,c),wx.setStorageSync("bookingData"+t.globalData.autoId,d),o?wx.navigateTo({url:"../../order/order?proPrice="+e.data.price*e.data.count+"&status=booking"}):(n=!0,wx.navigateTo({url:"../../login/login"}))}else if("51"==a||"52"==a||"3"==a||"6"==a){var u=[],l=[],p={};u.push(r),p.branchInfoId=r.branchInfoId,p.isSelected=!0,p.branchName=r.branchName,p.groupOrderNo="51"==a?"0":e.data.groupOrderNo,p.pro=u,l.push(p),wx.setStorageSync("groupProDataList"+t.globalData.autoId,l),wx.setStorageSync("groupProData"+t.globalData.autoId,u),o?3==e.data.proInfoDetail.activityType?e.checkSeckillCount().then(function(o){console.log(o),0==o.data.code?t.hint("活动已经结束"):2==o.data.code?t.hint("产品已经退出该活动"):e.data.count+o.data.buyCount<=o.data.limitCount?wx.navigateTo({url:"../../order/order?proPrice="+e.data.activityPrice*e.data.count+"&status="+a+"&activityId="+e.data.proInfoDetail.activityId}):wx.showModal({title:"",content:"当前活动最多可购买"+o.data.limitCount+"件，您已超出购买数量，是否以原价购买",success:function(t){t.confirm?e.originalPriceBuy():t.cancel}})}):wx.navigateTo({url:"../../order/order?proPrice="+e.data.activityPrice*e.data.count+"&status="+a+"&activityId="+e.data.proInfoDetail.activityId}):(n=!0,wx.navigateTo({url:"../../login/login"}))}else{var h=wx.getStorageSync("cartData"+t.globalData.autoId);if(h){i=h;for(var m=!1,I=0;I<i.length;I++)if(i[I].moduleId==y)return m=!0,void wx.showModal({title:"提示",content:"该商品已在购物车中！",confirmText:"去购物车",success:function(t){t.confirm&&(e.data.isPerson?wx.navigateTo({url:"../../self/cart/cart"}):wx.switchTab({url:"../../self/cart/cart"}))}});if(m&&(i.push(r),"1"==a))return void(e.data.isPerson?wx.navigateTo({url:"../../self/cart/cart"}):wx.switchTab({url:"../../self/cart/cart"}))}else i=[];i.push(r),e.setData({showCartPoint:!1});try{wx.setStorageSync("cartData"+t.globalData.autoId,i),"1"==a?setTimeout(function(){e.data.isPerson?wx.navigateTo({url:"../../self/cart/cart"}):wx.switchTab({url:"../../self/cart/cart"})},500):(e.setData({showProAttr:!1}),wx.showToast({title:"添加成功",icon:"success",duration:2e3}))}catch(a){t.hint("添加购物车失败")}}}},toBuy:function(){this.setData({attrBtnStatus:"1"}),"6"!=this.data.activityType||"3"!=this.data.memberType&&!this.data.parentId?this.addCart("1"):this.addCart("6")},toBuy1:function(){""!=y?"6"!=this.data.activityType||"3"!=this.data.memberType&&!this.data.parentId?this.addCart("1"):this.addCart("6"):t.hint("请选择商品属性")},carttap:function(){this.data.isPerson?wx.navigateTo({url:"../../self/cart/cart"}):wx.switchTab({url:"../../self/cart/cart"})},toSeckill:function(){this.addCart("3")},checkSeckillCount:function(){var e=this;return new Promise(function(o,i){wx.request({url:t.globalData.comUrl+"activityProduct_checkActivityStatus.action",data:{appId:a.appId,productId:e.data.productId,activityId:e.data.proInfoDetail.activityId,memberId:t.getMemberId()},success:function(t){o(t)}})})},originalPriceBuy:function(){var a=this,e={productId:a.data.proInfoDetail.id,productName:a.data.proInfoDetail.productName,productCode:a.data.proInfoDetail.productCode,count:a.data.count,pic_url:a.data.pic_url,price:a.data.price,moduleId:y,proAttrName:v,modelName:a.data.modelName,branchInfoId:a.data.proInfoDetail.branchInfoId,branchName:a.data.proInfoDetail.branchName,isSelected:!0},o=wx.getStorageSync("cartData"+t.globalData.autoId);if(console.log(o),0!=o){i=o,console.log(y);for(var r=!1,n=0;n<i.length;n++)if(i[n].moduleId==y)return r=!0,void wx.showModal({title:"提示",content:"该商品已在购物车中！",confirmText:"去购物车",success:function(t){t.confirm&&(a.data.isPerson?wx.navigateTo({url:"../../self/cart/cart"}):wx.switchTab({url:"../../self/cart/cart"}))}});if(!r)return i.push(e),wx.setStorageSync("cartData"+t.globalData.autoId,i),void(a.data.isPerson?wx.navigateTo({url:"../../self/cart/cart"}):wx.switchTab({url:"../../self/cart/cart"}))}else(i=[]).push(e),wx.setStorageSync("cartData"+t.globalData.autoId,i),setTimeout(function(){a.data.isPerson?wx.navigateTo({url:"../../self/cart/cart"}):wx.switchTab({url:"../../self/cart/cart"})},500)},toCreateGroup:function(){var e=this;wx.request({url:t.globalData.comUrl+"activityProduct_checkActivityStatus.action",data:{appId:a.appId,productId:e.data.productId,activityId:e.data.proInfoDetail.activityId},success:function(a){0==a.data.code?t.hint("活动已经结束"):2==a.data.code?t.hint("产品已经退出该活动"):e.addCart("51")}})},addcarttap:function(){this.setData({attrBtnStatus:"1"}),this.addCart("2")},addcarttap1:function(){""!=y?this.addCart("2"):t.hint("请选择商品属性")},joinGroup:function(t){this.setData({groupOrderNo:t.currentTarget.dataset.no}),this.addCart("52")},navtap:function(t){this.setData({navIdx:t.currentTarget.dataset.idx})},commenttap:function(){if(t.getMemberId()){var a=this;wx.navigateTo({url:"../comment/publish-comment/publish-comment?productId="+a.data.productId})}else wx.navigateTo({url:"../../login/login"})},getModelInfo:function(t){var a=this;if(!I[t.currentTarget.dataset.index][t.currentTarget.dataset.attrindex]){for(var e=0;e<I[t.currentTarget.dataset.index].length;e++)m[t.currentTarget.dataset.index]=[],I[t.currentTarget.dataset.index][e]=!1;I[t.currentTarget.dataset.index][t.currentTarget.dataset.attrindex]=!t.currentTarget.dataset.status,m[t.currentTarget.dataset.index]=t.currentTarget.dataset.typeid,f=m.join(";"),""!=(y=a.getModuleId(f))&&a.setData({showCurAttr:!1}),a.setData({active:I})}},getModuleId:function(t){for(var a=this,e=t.split(";"),o=a.data.proInfoDetail.productModelList,i=e[1]+";"+e[0],r=0;r<o.length;r++)if(o[r].valueIds==t||o[r].valueIds==i){y=o[r].id,v=o[r].originalAttr,b=o[r].modelName,a.setData({stock:o[r].stock,price:o[r].price,activityPrice:o[r].activityPrice,originalPrice:o[r].originalprice,modelName:o[r].modelName,modelImage:o[r].modelImage}),g="51"==a.data.buyType||"52"==a.data.buyType||"6"==a.data.buyType&&("3"==a.data.memberType||a.data.parentId)?this.data.activityPrice*this.data.count:""!=a.data.buyType||"5"!=a.data.activityType&&("6"!=a.data.activityType||"3"!=a.data.memberType&&!a.data.parentId)?this.data.price*this.data.count:this.data.activityPrice*this.data.count,this.setData({totalPrice:g}),a.data.proInfoDetail.productImageVOList.length>0&&a.setData({pic_url:a.data.proInfoDetail.productImageVOList[0].imageURL});break}return y},countAdd:function(){var t=this;this.data.count++,g="51"==t.data.buyType||"52"==t.data.buyType||"6"==t.data.buyType&&("3"==t.data.memberType||t.data.parentId)?this.data.activityPrice*this.data.count:""!=t.data.buyType||"5"!=t.data.activityType&&("6"!=t.data.activityType||"3"!=t.data.memberType&&!t.data.parentId)?this.data.price*this.data.count:this.data.activityPrice*this.data.count,this.setData({totalPrice:g,count:this.data.count})},countSubtract:function(){var t=this;this.data.count>1&&(this.data.count--,g="51"==t.data.buyType||"52"==t.data.buyType||"6"==t.data.buyType&&("3"==t.data.memberType||t.data.parentId)?this.data.activityPrice*this.data.count:""!=t.data.buyType||"5"!=t.data.activityType&&("6"!=t.data.activityType||"3"!=t.data.memberType&&!t.data.parentId)?this.data.price*this.data.count:this.data.activityPrice*this.data.count,this.setData({totalPrice:g,count:this.data.count}))},bindCountInput:function(t){var a=this;this.setData({count:t.detail.value}),g="51"==a.data.buyType||"52"==a.data.buyType||"6"==a.data.buyType&&("3"==a.data.memberType||a.data.parentId)?this.data.activityPrice*this.data.count:""!=a.data.buyType||"5"!=a.data.activityType&&("6"!=a.data.activityType||"3"!=a.data.memberType&&!a.data.parentId)?this.data.price*this.data.count:this.data.activityPrice*this.data.count,this.setData({totalPrice:g})},changeProAttrFrame:function(){""!=y?(this.setData({showProAttr:!this.data.showProAttr}),""!=this.data.buyType&&this.addCart(this.data.buyType)):t.hint("请选择商品属性")},toggleProAttrFrame:function(){g=6==this.data.activityType&&3!=this.data.memberType?this.data.price:0==this.data.activityPrice?this.data.price:this.data.activityPrice,this.setData({totalPrice:g*this.data.count,showProAttr:!this.data.showProAttr,buyType:""}),0==this.data.activityType&&this.setData({attrBtnStatus:2})},getCollectStatus:function(){if(o=t.getMemberId()){var e=this;wx.request({url:t.globalData.comUrl+"tabs_checkCollection.action",data:{appId:a.appId,memberId:o,id:e.data.proInfoDetail.id},success:function(a){var o=t.getJsonData(a.data);e.setData({collectStatus:o.isExisted})},fail:function(a){t.hint()},complete:function(){r=!0,n=!0}})}},collect:function(){if(0!=r){r=!1;var e=this;(o=t.getMemberId())?wx.request({url:t.globalData.comUrl+"tabs_addCollection.action",data:{appId:a.appId,type:1,name:e.data.proInfoDetail.productName,objId:e.data.proInfoDetail.id,memberId:o,pic_url:e.data.proInfoDetail.productImageVOList[0].imageURL||"",price:e.data.proInfoDetail.price},success:function(t){wx.showToast({title:"收藏成功",icon:"success",duration:2e3}),e.getCollectStatus()},fail:function(a){t.hint("收藏失败")}}):(r=!0,wx.navigateTo({url:"../../login/login"}))}},cancelCollect:function(){if(0!=n){n=!1;var a=this;(o=t.getMemberId())?wx.request({url:t.globalData.comUrl+"tabs_delCollectionByObjId.action",data:{id:a.data.proInfoDetail.id,memberId:o},success:function(t){wx.showToast({title:"已取消收藏",icon:"success",duration:2e3}),a.getCollectStatus()},fail:function(a){t.hint("取消收藏失败")}}):(n=!0,wx.navigateTo({url:"../../login/login"}))}},makeCall:function(){var a=this.data.proInfoDetail.telNum;a&&a.length>1?wx.makePhoneCall({phoneNumber:a}):t.hint("客服电话无效！")},getStoreHidden:function(){var o=this;wx.request({url:t.globalData.comUrl+"tabs_getCustomizeTabsById.action",data:{appId:a.appId,customizeTabId:e.LynxAbout_Merchant},success:function(a){var e=t.getJsonData(a.data);o.setData({isStoreHidden:e.isDeleted})}})},toProDetail:function(t){wx.redirectTo({url:"pro-detail?productId="+t.currentTarget.dataset.pid})},beforehand:function(){var t=this;o?wx.navigateTo({url:"../beforehand/beforehand?productName="+t.data.proInfoDetail.productName+t.data.modelName+"&branchName="+t.data.proInfoDetail.branchName+"&branchId="+t.data.proInfoDetail.merchantId}):(n=!0,wx.navigateTo({url:"../../login/login"}))},onShareAppMessage:function(){var a=this;a.setData({showShareBox:!1});var e="";return e="3"==a.data.memberType&&"6"==a.data.activityType?"/pages/product/pro-detail/pro-detail?productId="+a.data.proInfoDetail.id+"&parentId="+t.getMemberId():"/pages/product/pro-detail/pro-detail?productId="+a.data.proInfoDetail.id,{title:a.data.proInfoDetail.productName,path:e,success:function(t){},fail:function(t){}}},onShowShareBox:function(){var t=this;t.setData({showShareBox:!t.data.showShareBox})},showCouponList:function(){this.setData({hiddenCouponList:!this.data.hiddenCouponList})},getCoupon:function(a){var e=this,o=t.getMemberId()||"";""!=o?0!=a.currentTarget.dataset.getcoupon&&wx.request({url:t.globalData.comUrl+"act_addMemberActivity.action",data:{activityId:a.currentTarget.dataset.id,memberId:o,customizetabId:t.getCustomizeId("Activity")},success:function(a){"0"!=t.getJsonData(a.data).code?(t.hint("领取成功"),e.setData({hiddenCouponList:!0}),e.getCouponInfo(e.data.proInfoDetail.branchInfoId)):t.hint("领取失败")},fail:function(a){t.hint()}}):wx.navigateTo({url:"../../login/login"})},getCommentList:function(){console.log(t.globalData.wxUserInfo);var a=this;wx.request({url:t.globalData.comUrl+"tabs_getCommentList.action",data:{current:1,productId:a.data.productId},success:function(e){var o=t.getJsonData(e.data);a.setData({commentList:o.pageList})}})},hometap:function(){wx.switchTab({url:"../../index/index"})},refresh:function(){var t=this;wx.showLoading({title:"加载中..."}),t.setData({showShareBox:!1}),t.getProDetail().then(function(a){wx.hideLoading(),t.getCollectStatus(),t.getCommentList(),t.getCouponInfo(a.branchInfoId),t.getGroupList(a.id)})},seeAllComment:function(){var t=this;wx.navigateTo({url:"../comment/comment?productId="+t.data.productId})},previewImage:function(){var t=this,a=[];if(t.data.modelImage.length>0)for(var e=0;e<t.data.proInfoDetail.productModelList.length;e++){var o=t.data.proInfoDetail.productModelList[e];o.modelImage&&o.modelImage.length>0&&a.push(o.modelImage)}else a.push(t.data.proInfoDetail.productImageVOList[0].imageURL);d=!0,wx.previewImage({current:t.data.modelImage,urls:a})}}); 
 			}); 	require("pages/product/pro-detail/pro-detail.js");
 		__wxRoute = 'pages/product/pro-list/pro-list';__wxRouteBegin = true; 	define("pages/product/pro-list/pro-list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=1,e=1,i=!1,s=void 0,o=void 0,g=void 0,r=void 0;Page({data:{productList:{},hasPro:!0,bottomHint:!0,listStyle:!1,isGroup:t.globalData.isGroup,actDistribution:{}},onLoad:function(a){g=a,r=a.flag,this.getProductList(g),t.globalData.actDistribution&&this.setData({actDistribution:t.globalData.actDistribution});var e=wx.getStorageSync("memberType"+t.globalData.autoId);this.setData({memberType:e}),a.title&&wx.setNavigationBarTitle({title:a.title})},getProductList:function(g){a=1,e=1;var c=this;if(g.bigCateCode)i=!0,s=g.bigCateCode,wx.request({url:t.globalData.comUrl+"tabs_getZXProductListByCategory.action",data:{customizeTabId:t.globalData.customizeTabId.LynxProductList,bigCateGoryCode:s,current:a,status:2,isGroup:t.globalData.isGroup},success:function(a){var i=t.getJsonData(a.data);e=i.pages;for(var s=i.pageList,o=0;o<i.pageList.length;o++)if(i.pageList[o].productImageVOList&&i.pageList[o].productImageVOList.length>0){var g=i.pageList[o].productImageVOList[0].imageURL;i.pageList[o].productImageVOList[0].imageURL=t.modifyPicSize(g,"_r220x220p")}else if(i.pageList[o].productImageList&&i.pageList[o].productImageList.length>0){var r=i.pageList[o].productImageList[0].imageURL;i.pageList[o].productImageList[0].imageURL=t.modifyPicSize(r,"_r220x220p")}i.pageList=s,c.setData({productList:i}),i.pageList.length>0?c.setData({hasPro:!0}):c.setData({hasPro:!1}),wx.stopPullDownRefresh()}});else{o=g.categoryCode;var L={customizeTabId:t.globalData.customizeTabId.LynxProductList,current:a,status:2,isGroup:t.globalData.isGroup};r?L.categoryCode=g.categoryCode:L.subdivideCategoryCode=g.categoryCode,wx.request({url:t.globalData.comUrl+"tabs_getProductListByAttribute.action",data:L,success:function(a){var i=t.getJsonData(a.data);e=i.pages;for(var s=0;s<i.pageList.length;s++)if(i.pageList[s].productImageVOList&&i.pageList[s].productImageVOList.length>0){var o=i.pageList[s].productImageVOList[0].imageURL;i.pageList[s].productImageVOList[0].imageURL=t.modifyPicSize(o,"_r220x220p")}else if(i.pageList[s].productImageList&&i.pageList[s].productImageList.length>0){var g=i.pageList[s].productImageList[0].imageURL;i.pageList[s].productImageList[0].imageURL=t.modifyPicSize(g,"_r220x220p")}c.setData({productList:i}),i.pageList.length>0?c.setData({hasPro:!0}):c.setData({hasPro:!1}),wx.stopPullDownRefresh()}})}},changeclum:function(){this.setData({listStyle:!this.data.listStyle,bottomHint:!0})},toSearch:function(t){wx.navigateTo({url:"../../search/search?type=0"})},toProDetail:function(t){wx.navigateTo({url:"../pro-detail/pro-detail?productId="+t.currentTarget.dataset.pid})},onReachBottom:function(){var g=this;if(a<e)if(a++,i)wx.request({url:t.globalData.comUrl+"tabs_getZXProductListByCategory.action",data:{customizeTabId:t.globalData.customizeTabId.LynxProductList,bigCateGoryCode:s,current:a,status:2},success:function(a){for(var e=t.getJsonData(a.data),i=0;i<e.pageList.length;i++)if(e.pageList[i].productImageVOList&&e.pageList[i].productImageVOList.length>0){var s=e.pageList[i].productImageVOList[0].imageURL;e.pageList[i].productImageVOList[0].imageURL=t.modifyPicSize(s,"_r220x220p")}else if(e.pageList[i].productImageList&&e.pageList[i].productImageList.length>0){var o=e.pageList[i].productImageList[0].imageURL;e.pageList[i].productImageList[0].imageURL=t.modifyPicSize(o,"_r220x220p")}g.data.productList.pageList=g.data.productList.pageList.concat(e.pageList),g.setData({productList:g.data.productList})}});else{var c={customizeTabId:t.globalData.customizeTabId.LynxProductList,current:a,status:2};r?c.categoryCode=o:c.subdivideCategoryCode=o,wx.request({url:t.globalData.comUrl+"tabs_getProductListByAttribute.action",data:c,success:function(a){for(var e=t.getJsonData(a.data),i=0;i<e.pageList.length;i++)if(e.pageList[i].productImageVOList&&e.pageList[i].productImageVOList.length>0){var s=e.pageList[i].productImageVOList[0].imageURL;e.pageList[i].productImageVOList[0].imageURL=t.modifyPicSize(s,"_r220x220p")}else if(e.pageList[i].productImageList&&e.pageList[i].productImageList.length>0){var o=e.pageList[i].productImageList[0].imageURL;e.pageList[i].productImageList[0].imageURL=t.modifyPicSize(o,"_r220x220p")}g.data.productList.pageList=g.data.productList.pageList.concat(e.pageList),g.setData({productList:g.data.productList})}})}else g.setData({bottomHint:!1})},onPullDownRefresh:function(){this.setData({productList:{},hasPro:!0,bottomHint:!0}),i=!1,this.getProductList(g)}}); 
 			}); 	require("pages/product/pro-list/pro-list.js");
 		__wxRoute = 'pages/product/product';__wxRouteBegin = true; 	define("pages/product/product.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e="",a="";Page({data:{styleConfig:t.globalData.styleConfig,bigCateArr:[],smallCateArr:[],showItem:0,categoryCode:"",categoryId:0,code:"",bigCateId:"",windowHeight:"",searchFrameHeight:"",changeclass:""},onLoad:function(){this.setData({changeclass:t.globalData.changeClassify}),e=t.globalData.projectInfo,a=t.globalData.customizeTabId;var o=this;wx.getSystemInfo({success:function(t){console.log(t),"ios"==t.platform?o.setData({windowHeight:t.windowHeight-48}):o.setData({windowHeight:t.windowHeight})}}),o.getBigCateGory(),1==o.data.changeclass&&(o.getSearchFrameHeight(),o.getCateGoryList())},getBigCateGory:function(){var e=this;wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabCategory.action",data:{customizeTabId:a.LynxProductList},success:function(a){var o=t.getJsonData(a.data);e.setData({bigCateArr:o}),1==e.data.changeclass?e.bigCateTap():e.oldBigCateTap(),wx.hideToast()}})},getSearchFrameHeight:function(){var t=this,e=wx.createSelectorQuery();e.select("#top").boundingClientRect(),e.exec(function(e){t.setData({searchFrameHeight:e[0].height})})},getCateGoryList:function(){wx.showToast({title:"加载中...",icon:"loading",duration:1e4,mask:!0});var e=this;wx.request({url:t.globalData.comUrl+"tabs_getAllCategoryListBycustomizeTab.action",data:{customizeTabId:a.LynxProductList,level:3},success:function(a){var o=t.getJsonData(a.data);console.log(o);for(var r=0;r<o.length;r++)o[r].categoryPicture=t.modifyPicSize(o[r].categoryPicture,"_r60x60p");e.setData({bigCateArr:o}),wx.hideToast(),wx.stopPullDownRefresh()}})},scroll:function(t){for(var e=0;e<this.data.bigCateArr.length;e++)this.queryMultipleNodes(e)},queryMultipleNodes:function(t){var e=this,a=wx.createSelectorQuery();a.select("#bigcate"+t).boundingClientRect(),a.selectViewport().scrollOffset(),a.exec(function(a){var o=a[0].top;0<=o&&o<=150&&e.setData({showItem:t})})},bigCateTap:function(t){var e=this;t?this.setData({showItem:t.target.dataset.index,categoryId:t.target.dataset.id,categoryCode:t.target.dataset.bigcode,bigCateId:"bigcate"+t.target.dataset.index}):this.setData({showItem:0,categoryId:e.data.bigCateArr[0].id,categoryCode:e.data.bigCateArr[0].code})},oldBigCateTap:function(e){var o=this;e?(console.log(e),this.setData({showItem:e.currentTarget.dataset.index,categoryId:e.currentTarget.dataset.id,categoryCode:e.currentTarget.dataset.bigcode})):this.setData({showItem:0,categoryId:o.data.bigCateArr[0].id,categoryCode:o.data.bigCateArr[0].code}),wx.request({url:t.globalData.comUrl+"tabs_getCategoryByParent.action",data:{customizeTabId:a.LynxProductList,parentId:o.data.categoryId},success:function(e){for(var a=t.getJsonData(e.data),r=0;r<a.length;r++)a[r].categoryPicture=t.modifyPicSize(a[r].categoryPicture,"_r160x160p");o.setData({smallCateArr:a}),wx.stopPullDownRefresh()}})},toSearch:function(t){wx.navigateTo({url:"../search/search?type=0"})},onPullDownRefresh:function(){this.setData({showItem:0,categoryCode:"",categoryId:0,code:"",bigCateId:""}),this.getBigCateGory(),1==this.data.changeclass&&(this.getSearchFrameHeight(),this.getCateGoryList())},toProductList:function(t){var e=this;this.setData({code:t.currentTarget.dataset.code}),t.currentTarget.dataset.flag?wx.navigateTo({url:"sub-category/sub-category?categoryId="+t.currentTarget.dataset.id+"&title="+t.currentTarget.dataset.title}):wx.navigateTo({url:"pro-list/pro-list?categoryCode="+e.data.code+"&flag=1&title="+t.currentTarget.dataset.title})}}); 
 			}); 	require("pages/product/product.js");
 		__wxRoute = 'pages/product/sub-category/sub-category';__wxRouteBegin = true; 	define("pages/product/sub-category/sub-category.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=t.globalData.projectInfo,e=t.globalData.customizeTabId;Page({data:{categoryList:[],hasDataFlag:!0},onLoad:function(o){a=t.globalData.projectInfo,e=t.globalData.customizeTabId,wx.setNavigationBarTitle({title:o.title}),wx.showToast({title:"加载中...",icon:"loading",duration:1e4,mask:!0});var r=this;wx.request({url:t.globalData.comUrl+"tabs_getCategoryByParent.action",data:{customizeTabId:e.LynxProductList,parentId:o.categoryId},success:function(a){var e=t.getJsonData(a.data);r.setData({categoryList:e,hasDataFlag:e.length>0}),wx.hideToast()}})},toProList:function(t){t.currentTarget.dataset.flag?wx.navigateTo({url:"sub-category?categoryId="+t.currentTarget.dataset.id+"&title="+t.currentTarget.dataset.title}):wx.navigateTo({url:"../pro-list/pro-list?categoryCode="+t.currentTarget.dataset.code})}}); 
 			}); 	require("pages/product/sub-category/sub-category.js");
 		__wxRoute = 'pages/product/beforehand/beforehand';__wxRouteBegin = true; 	define("pages/product/beforehand/beforehand.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{date:"",time:"",productName:"",branchName:"",branchId:"",styleConfig:a.globalData.styleConfig},onLoad:function(a){this.getNowFormatDate(),this.getFlexiForm(),this.setData({productName:a.productName,branchName:a.branchName,branchId:a.branchId})},getFlexiForm:function(){wx.request({url:a.globalData.comUrl+"tabs_getFlexiForm.action",data:{customizeTabId:a.globalData.customizeTabId["Flexi-Form-Booking"]},success:function(e){var t=a.getJsonData(e.data);console.log(t)}})},getNowFormatDate:function(){var a=new Date,e=a.getMonth()+1,t=a.getDate(),l=a.getHours(),i=a.getMinutes();e>=1&&e<=9&&(e="0"+e),t>=0&&t<=9&&(t="0"+t),l>=1&&l<=9&&(l="0"+l),i>=1&&i<=9&&(i="0"+i);var o=a.getFullYear()+"-"+e+"-"+t,n=l+":"+i;console.log(o),console.log(n),this.setData({date:o,time:n})},bindDateChange:function(a){console.log("picker发送选择改变，携带值为",a.detail.value),this.setData({date:a.detail.value})},bindTimeChange:function(a){console.log("picker发送选择改变，携带值为",a.detail.value),this.setData({time:a.detail.value})},formSubmit:function(e){var t=this;console.log(e.detail.value);var l=/^1[3|4|5|8|7][0-9]\d{4,8}$/;if(""!=e.detail.value.name&&0!==e.detail.value.name.trim().length)if(""!=e.detail.value.phone)if(l.test(e.detail.value.phone)){var i="",o="";""==e.detail.value.remarks?(i="姓名,电话,预约日期,预约时间",o=e.detail.value.name+","+e.detail.value.phone+","+e.detail.value.date+","+e.detail.value.time):(i="姓名,电话,预约日期,预约时间,留言",o=e.detail.value.name+","+e.detail.value.phone+","+e.detail.value.date+","+e.detail.value.time+","+e.detail.value.remarks),wx.showToast({title:"预约中...",icon:"loading",duration:1e4,mask:!0}),wx.request({url:a.globalData.comUrl+"tabs_saveFlexiForm",data:{projectId:a.globalData.projectInfo.appId,customizeTabId:a.globalData.customizeTabId["Flexi-Form-Booking"],token:"html5",fieldKey:i,fieldValue:o,productName:t.data.productName,branchName:t.data.branchName,branchId:t.data.branchId,memberId:a.getMemberId()},success:function(e){wx.hideToast();var t=a.getJsonData(e.data);wx.redirectTo({url:"bh-detail/bh-detail?id="+t.id})},fail:function(){wx.hideToast(),a.hint("预约失败")}})}else this.warn("请输入正确的电话号码");else this.warn("请输入电话号码!");else this.warn("姓名不能为空!")},warn:function(a){wx.showToast({title:a,image:"../../../img/warn.png",duration:2e3})}}); 
 			}); 	require("pages/product/beforehand/beforehand.js");
 		__wxRoute = 'pages/product/beforehand/bh-detail/bh-detail';__wxRouteBegin = true; 	define("pages/product/beforehand/bh-detail/bh-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{detailList:[],styleConfig:t.globalData.styleConfig},onLoad:function(t){this.getBookingDetail(t.id)},getBookingDetail:function(a){var i=this;wx.request({url:t.globalData.comUrl+"tabs_getFlexiFormDetail.action",data:{id:a,current:1},success:function(a){var e=t.getJsonData(a.data);console.log(e),i.setData({detailList:e.flexiFormVoList})}})},toHome:function(){wx.switchTab({url:"../../../index/index"})}}); 
 			}); 	require("pages/product/beforehand/bh-detail/bh-detail.js");
 		__wxRoute = 'pages/product/comment/comment';__wxRouteBegin = true; 	define("pages/product/comment/comment.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=1,e=1;Page({data:{commentList:[],productId:"",bigImage:"",hideBigImg:!0},onLoad:function(t){this.setData({productId:t.productId}),this.getCommentList()},getCommentList:function(){var i=this;wx.request({url:t.globalData.comUrl+"tabs_getCommentList.action",data:{current:a,productId:i.data.productId},success:function(a){var o=t.getJsonData(a.data);e=o.pages,i.setData({commentList:i.data.commentList.concat(o.pageList)})}})},pictap:function(t){this.setData({bigImage:t.currentTarget.dataset.pic,hideBigImg:!1})},exitBigImg:function(){this.setData({hideBigImg:!0})},onReachBottom:function(){a<e&&(a++,this.getCommentList())}}); 
 			}); 	require("pages/product/comment/comment.js");
 		__wxRoute = 'pages/product/comment/publish-comment/publish-comment';__wxRouteBegin = true; 	define("pages/product/comment/publish-comment/publish-comment.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=!0;Page({data:{discussList:[],comment:"",imagePath:"",productOrderId:""},onLoad:function(t){this.setData({productOrderId:t.productOrderId}),wx.getLocation({type:"wgs84",success:function(t){}})},takephoto:function(){var t=this;wx.chooseImage({count:1,success:function(a){var o=a.tempFilePaths[0];t.setData({imagePath:o})}})},submit:function(){if(0!=a){a=!1;var o=this,n="";""!=o.data.comment?o.data.imagePath?wx.uploadFile({url:t.globalData.comUrl+"tabs_uploadPicMina.action",filePath:o.data.imagePath,name:"file",success:function(t){var a=JSON.parse(t.data);console.log(a),"1"==a.isSuccess&&(n=a.path,o.addAppComment(n))},fail:function(o){t.hint("图片上传失败"),a=!0}}):o.addAppComment(n):this.warn("\b内容不能为空!")}},addAppComment:function(o){var n=this;wx.request({url:t.globalData.comUrl+"tabs_addAppProductComment.action",data:{address:"",comment:n.data.comment,latitude:t.globalData.g_location.lat,longitude:t.globalData.g_location.lng,memberId:t.getMemberId(),pic:o,productOrderId:n.data.productOrderId,token:"browser"},success:function(t){a=!0,wx.showToast({title:"发布成功",icon:"success",duration:2e3}),setTimeout(function(){wx.navigateBack({delta:1})},2e3)},fail:function(){t.hint("提交失败"),a=!0}})},deleteImage:function(){this.setData({imagePath:""})},bindInput:function(t){this.setData({comment:t.detail.value})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},warn:function(t){wx.showToast({title:t,image:"../../../../img/warn.png",duration:2e3})}}); 
 			}); 	require("pages/product/comment/publish-comment/publish-comment.js");
 		__wxRoute = 'pages/self/self';__wxRouteBegin = true; 	define("pages/self/self.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),t=a.globalData.projectInfo,e=a.globalData.customizeTabId,o="";Page({data:{showCustomizeTabId:{},styleConfig:a.globalData.styleConfig,userInfo:{},memberId:"",iconPath:"",nickName:"",cartHasPro:!1,isPerson:a.globalData.isPerson,isShowMemRights:!1,phone:"",orderCount:{}},onLoad:function(){var o=this;t=a.globalData.projectInfo,e=a.globalData.customizeTabId,a.loginVzSystem(),wx.getSetting({success:function(t){console.log(t),t.authSetting["scope.userInfo"]&&wx.getUserInfo({success:function(t){console.log(t),a.globalData.wxUserInfo=t.userInfo,o.setData({iconPath:t.userInfo.avatarUrl,nickName:t.userInfo.nickName}),wx.request({url:a.globalData.comUrl+"tabs_updateMember.action",data:{appId:a.globalData.projectInfo.appId,memberId:a.getMemberId(),headPortrait:t.userInfo.avatarUrl,surname:t.userInfo.nickName}})}})}}),wx.showLoading({title:"加载中..."}),o.setData({isQuery:a.globalData.isQuery}),o.getCustomizeTabList()},animal:function(){clearInterval(o);var a=this,t=wx.createAnimation({duration:18e3,timingFunction:"linear"}),e=wx.createAnimation({duration:18e3,timingFunction:"linear"});this.animation=t,t.translateY(-200).step(),this.setData({animationData:t.export()}),setTimeout(function(){e.translateY(0).step(),this.setData({animationData:e.export()})}.bind(this),18e3),o=setInterval(function(){t.translateY(-200).step(),a.setData({animationData:t.export()}),setTimeout(function(){e.translateY(0).step(),a.setData({animationData:e.export()})}.bind(this),18e3)},36e3)},onShow:function(){var t=this,e=wx.getStorageSync("mobilePhone"+a.globalData.autoId);t.setData({phone:e}),t.animal(),a.globalData.wxUserInfo&&a.globalData.wxUserInfo.avatarUrl?this.setData({iconPath:a.globalData.wxUserInfo.avatarUrl,nickName:a.globalData.wxUserInfo.nickName}):this.setData({iconPath:"../../img/head.png"});var o=wx.getStorageSync("cartData"+a.globalData.autoId);o&&o.length>0?t.setData({cartHasPro:!0}):t.setData({cartHasPro:!1});var n=a.getMemberId();t.getOrderCount(),n?(t.setData({memberId:n}),t.getUserInfo()):wx.hideToast()},bindGetUserInfo:function(t){console.log(t),this.setData({iconPath:t.detail.userInfo.avatarUrl,nickName:t.detail.userInfo.nickName}),a.globalData.wxUserInfo=t.detail.userInfo,wx.request({url:a.globalData.comUrl+"tabs_updateMember.action",data:{appId:a.globalData.projectInfo.appId,memberId:a.getMemberId(),headPortrait:t.detail.userInfo.avatarUrl,surname:t.detail.userInfo.nickName}})},getOrderCount:function(){var e=this;wx.request({url:a.globalData.comUrl+"tabs_getAppOrderCount.action",data:{projectId:t.appId,memberId:a.getMemberId()},success:function(a){e.setData({orderCount:a.data.content})}})},getCustomizeTabList:function(){var e=this;wx.request({url:a.globalData.comUrl+"tabs_getCustomizeTabList.action",data:{appId:t.appId},success:function(t){for(var o=a.getJsonData(t.data),n=0;n<o.length;n++){o[n];switch(o[n].sysTabNameTag?o[n].sysTabNameTag:o[n].sysTabName){case"ZXMarketModuleOrder":e.data.showCustomizeTabId.ZXMarketModuleOrder=!0;break;case"LynxAbout_Merchant":e.data.showCustomizeTabId.LynxAbout_Merchant=!0;break;case"LynxPhoto_Info_Post_Tab":e.data.showCustomizeTabId.LynxPhoto_Info_Post_Tab=!0;break;case"Activity":e.data.showCustomizeTabId.Activity=!0;break;case"LynxApplyFor_About_Merchant":e.data.showCustomizeTabId.LynxApplyFor_About_Merchant=!0;break;case"Flexi-Form":e.data.showCustomizeTabId["Flexi-Form"]=!0;break;case"Activity-Group":e.data.showCustomizeTabId["Activity-Group"]=!0;break;case"Photo-Info-Tab-Level2":e.data.showCustomizeTabId["Photo-Info-Tab-Level2"]=!0;break;case"CardNo":e.data.showCustomizeTabId.CardNo=!0;break;case"Member":e.data.showCustomizeTabId.Member=!0;break;case"Video_Gallery":e.data.showCustomizeTabId.Video_Gallery=!0;break;case"Activity-Distribution":e.data.showCustomizeTabId["Activity-Distribution"]=!0,e.setData({actDistribution:a.globalData.actDistribution})}}e.setData({showCustomizeTabId:e.data.showCustomizeTabId,isShowMemRights:!e.data.showCustomizeTabId["Activity-Group"]}),wx.hideLoading()}})},getUserInfo:function(){var t=this;wx.request({url:a.globalData.comUrl+"tabs_getMember.action",data:{memberId:t.data.memberId,customizetabId:e.LynxApplyFor_About_Merchant,checkBranch:1},success:function(e){var o=a.getJsonData(e.data);o.userName.length<1&&(o.userName=a.globalData.wxUserInfo.nickName),wx.setStorageSync("scoreRule"+a.globalData.autoId,o.scoreRule),wx.setStorageSync("memberId"+a.globalData.autoId,o.id),3==o.type&&o.activated&&wx.setStorageSync("memberType"+a.globalData.autoId,o.type),wx.setStorageSync("nickname"+a.globalData.autoId,o.userName),wx.setStorageSync("mobilePhone"+a.globalData.autoId,o.mobilePhone),t.setData({userInfo:o,phone:o.mobilePhone}),wx.hideToast()},fail:function(){a.hint()}})},headtap:function(){wx.navigateTo({url:"acountInformation/acountInformation"})},toOrderList:function(t){a.getMemberId()?wx.navigateTo({url:"myOrder/myOrder?index="+t.currentTarget.dataset.index}):wx.navigateTo({url:"../login/login"})},catetap:function(){wx.navigateTo({url:"../product/product"})},toCart:function(){wx.navigateTo({url:"cart/cart?from=self"})},toMyCustom:function(){a.getMemberId()?wx.navigateTo({url:"myCustom/myCustom"}):wx.navigateTo({url:"../login/login"})},toCollect:function(){a.getMemberId()?wx.navigateTo({url:"collect/collect"}):wx.navigateTo({url:"../login/login"})},cardtap:function(){a.getMemberId()?wx.navigateTo({url:"card/card?cardNo="+this.data.userInfo.cardNo}):(console.log(a.getMemberId()),wx.navigateTo({url:"../login/login"}))},toSupply:function(){a.getMemberId()?wx.navigateTo({url:"mySupply/mySupply"}):wx.navigateTo({url:"../login/login"})},toMyBeforehand:function(){a.getMemberId()?wx.navigateTo({url:"myBeforehand/myBeforehand"}):wx.navigateTo({url:"../login/login"})},memRigtap:function(){a.getMemberId()?wx.navigateTo({url:"memRights/memRights"}):wx.navigateTo({url:"../login/login"})},toStore:function(){0==a.globalData.isPerson?wx.switchTab({url:"../store/store"}):wx.navigateTo({url:"../store/store"})},jointap:function(){a.getMemberId()?this.data.userInfo.activated?wx.showModal({title:"提示",content:"商家入驻认证成功",showCancel:!1}):1==this.data.userInfo.isApply?wx.showModal({title:"提示",content:"正在申请中...",showCancel:!1}):wx.navigateTo({url:"../join/join"}):wx.navigateTo({url:"../login/login"})},abouttap:function(){1==a.globalData.isPerson?wx.switchTab({url:"../about-us/about-us"}):wx.navigateTo({url:"../about-us/about-us"})},toMyGroup:function(){a.getMemberId()?wx.navigateTo({url:"../group/my-group/my-group"}):wx.navigateTo({url:"../login/login"})},coupontap:function(){a.getMemberId()?wx.navigateTo({url:"mycoupon/mycoupon"}):wx.navigateTo({url:"../login/login"})},bindphone:function(){wx.navigateTo({url:"bindPhone/bindPhone"})},updataUserInfo:function(){var e=this;wx.request({url:a.globalData.comUrl+"tabs_updateMember.actionL",data:{appId:t.appId,memberId:e.data.memberId,headPortrait:""},success:function(a){e.success("头像上传成功")},fail:function(a){e.warn("头像上传失败")}})},toDistribute:function(){a.getMemberId()?wx.navigateTo({url:"../distribute/distribute?type="+this.data.userInfo.type}):wx.navigateTo({url:"../login/login"})},deleteCache:function(){wx.removeStorage({key:"memberId"+a.globalData.autoId}),wx.removeStorage({key:"openId"+a.globalData.autoId,success:function(a){wx.showModal({title:"清除成功"})}})},exit:function(){var t=this;wx.showModal({title:"确定退出登录？",success:function(e){e.confirm&&(t.setData({userInfo:{},memberId:""}),wx.setStorageSync("memberId"+a.globalData.autoId,""))}})},warn:function(a){wx.showToast({title:a,image:"../../img/warn.png",duration:2e3})},success:function(a){wx.showToast({title:a,icon:"success",duration:2e3})},onShareAppMessage:function(){return{path:"/pages/self/self"}}}); 
 			}); 	require("pages/self/self.js");
 		__wxRoute = 'pages/self/myOrder/myOrder';__wxRouteBegin = true; 	define("pages/self/myOrder/myOrder.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=t.globalData.projectInfo,a=[],o=1,r=1;Page({data:{showTabIndex:0,statueList:[],noOrder:!1,orderList:[],orderType:"",rightTypeList:[]},onLoad:function(o){e=t.globalData.projectInfo,a=t.globalData.customizeTabId;var r=this,n=0;o.index&&(n=o.index),r.setData({statueList:["待付款","待发货","待收货","待评价","退款/售后","全部"],showTabIndex:n}),r.getOrderInfo(n)},selectTab:function(t){var e=this,a=t.currentTarget.dataset;e.setData({showTabIndex:Number(a.selectindex),noOrder:!1,orderList:[]}),o=1,e.getOrderInfo(e.data.showTabIndex)},onShow:function(){},deleteOrder:function(a){var o=this;wx.showModal({title:"",content:"确认删除订单",success:function(r){r.confirm&&wx.request({url:t.globalData.comUrl+"tabs_delAppOrderWithParent",data:{appId:e.appId,orderId:a.currentTarget.dataset.oid},success:function(t){o.setData({noOrder:!1,orderList:[]}),o.getOrderInfo(o.data.showTabIndex)}})}})},getOrderInfo:function(e){var a=this,n=t.getMemberId(),s="",d="";0==e?(s=0,d=1):1==e?(s=1,d=2):2==e?(s=1,d=3):3==e?(s=1,d=4):4==e?(s=1,d=6):(d="",s=""),wx.request({url:t.globalData.comUrl+"tabs_getZXOrderList.action",data:{appId:t.globalData.projectInfo.appId,projectId:t.globalData.projectInfo.appId,memberId:n,current:o,payStatus:s,status:d},success:function(e){var o=t.getJsonData(e.data);r=o.pages,a.setData({orderList:a.data.orderList.concat(o.pageList)}),console.log(a.data.orderList),a.setData({noOrder:0==a.data.orderList.length})},fail:function(){t.hint()}})},orderDetailtap:function(t){var e=t.currentTarget.dataset;wx.navigateTo({url:"../myOrder/myOrder-detail/myOrder-detail?id="+e.orderid+"&orderNO"+e.orderno})},cancelOrder:function(e){var a=e.currentTarget.dataset;console.log(a);var o=this;wx.showModal({title:"是否确认取消订单？",success:function(e){e.confirm&&wx.request({url:t.globalData.comUrl+"tabs_updateZXOrderStatus.action",data:{appId:t.globalData.projectInfo.appId,orderId:a.orderid,status:5},success:function(){wx.showToast({title:"订单已取消",icon:"success",duration:2e3}),setTimeout(function(){o.setData({orderList:[]}),o.getOrderInfo(o.data.showTabIndex)},2e3)},fail:function(){t.hint()}})}})},sureReceive:function(e){var a=this;wx.showModal({title:"提示",content:"是否确认收货",success:function(o){o.confirm&&wx.request({url:t.globalData.comUrl+"tabs_signForOrder.action",data:{orderId:e.currentTarget.dataset.oid},success:function(e){1==e.data?(a.setData({noOrder:!1,orderList:[]}),a.getOrderInfo(a.data.showTabIndex)):t.showToast("收货失败")}})}})},goComment:function(t){console.log(t.currentTarget),wx.navigateTo({url:"../../product/comment/publish-comment/publish-comment?productOrderId="+t.currentTarget.dataset.id})},onReachBottom:function(){o<r&&(o++,this.getOrderInfo(this.data.showTabIndex))},toPay:function(a){var o=a.currentTarget.dataset.orderinfo;wx.showToast({title:"加载中...",icon:"loading",duration:1e4,mask:!0});var r=this;wx.request({url:t.globalData.comUrl+"tabs_getZXOrderDetail.action",data:{appId:t.globalData.projectInfo.appId,orderId:o.id},success:function(a){"9"==t.getJsonData(a.data).status?t.hint("该产品已下架"):wx.login({success:function(a){a.code?wx.request({url:t.globalData.paymentUrl+"/WechatAlipay/MiniPayService?jsoncallback=?",data:{projectId:e.appId,nonce_str:"lfksf"+Math.round(1e5*Math.random()),body:o.children[0].productOrderVOList[0].productName,attach:o.orderNO+"_"+o.id+"%2B",out_trade_no:o.orderNO+(new Date).valueOf(),total_fee:(100*o.totalMoney).toFixed(0),trade_type:"JSAPI",device_info:"838792",code:a.code},success:function(t){wx.hideToast();var e=r.getJsonData(t.data);wx.requestPayment({timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:"prepay_id="+e.prepay_id,signType:"MD5",paySign:e.sign,success:function(t){wx.showToast({title:"支付成功",icon:"success",duration:2e3,mask:!0}),setTimeout(function(){r.onShow()},2e3)},fail:function(t){wx.showModal({title:"支付失败",showCancel:!1,success:function(t){t.confirm&&r.onShow()}})}})}}):t.hint("获取用户登录态失败！"+a.errMsg)}})},fail:function(){t.hint()}})},getJsonData:function(t){return JSON.parse(t.substring(1,t.length-1))}}); 
 			}); 	require("pages/self/myOrder/myOrder.js");
 		__wxRoute = 'pages/self/myOrder/myOrder-detail/myOrder-detail';__wxRouteBegin = true; 	define("pages/self/myOrder/myOrder-detail/myOrder-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=t.globalData.projectInfo,e="",o="",r="";Page({data:{orderDetail:{},payStatus:"",payStatusStr:"",payType:"",orderNO:"",createDate:"",expressNO:"",showStatus:!1,isGroupOrder:!1,tel:"",isShowPrePay:!1,cardNo:"",memberId:"",preMoney:"",isWeb:t.globalData.isWeb},onLoad:function(s){var n=this;a=t.globalData.projectInfo,r=t.globalData.customizeTabId;var i=n.isShowPay();i&&n.getUserInfo(),console.log(s),e=s.orderNO,o=s.id,n.setData({orderNO:e,isShowPrePay:i})},onShow:function(){this.getOrderDetail()},getOrderDetail:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getZXOrderDetail.action",data:{appId:t.globalData.projectInfo.appId,orderId:o},success:function(e){var o=t.getJsonData(e.data);console.log(o);var r=new Date(o.createDate.time);if(a.getStoreInfo(o.branchInfoId),wx.setStorageSync("orderDetail"+t.globalData.autoId,o),3==o.payType)a.setData({showStatus:!1});else if(a.setData({showStatus:!0}),1==o.payStatus)switch(o.status){case 1:a.data.payStatusStr="待发货";break;case 2:a.data.payStatusStr="\b处理中";break;case 3:a.data.payStatusStr="\b已发货";break;case 4:a.data.payStatusStr="\b待评价";break;case 5:a.data.payStatusStr="\b已取消";break;case 6:a.data.payStatusStr="申请退款中...";break;case 7:a.data.payStatusStr="退款被拒绝";break;case 8:a.data.payStatusStr="\b退款成功";break;case 9:a.data.payStatusStr="\b交易成功"}else"5"==o.status?a.data.payStatusStr="\b已取消":a.data.payStatusStr="未支付";a.setData({orderDetail:o,status:o.status,payType:o.payType,payStatusStr:a.data.payStatusStr,payStatus:o.payStatus,expressNO:o.expressNO,createDate:r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate(),isGroupOrder:void 0!=r.groupOrderNo}),wx.hideToast()},fail:function(){t.hint()}})},isShowPay:function(){for(var a=t.globalData.moduleList,e=0;e<a.length;e++)if(a[e].tabTitle&&"电子会员卡"===a[e].tabTitle)return!0;return!1},getUserInfo:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getMember.action",data:{memberId:t.getMemberId(),customizetabId:r.LynxApplyFor_About_Merchant,checkBranch:1},success:function(e){var o=t.getJsonData(e.data);console.log(o),a.setData({cardNo:o.cardNo,preMoney:o.preMoney})},fail:function(){t.hint()}})},getStoreInfo:function(e){var o=this;wx.request({url:t.globalData.comUrl+"tabs_getSingleBranchInfo.action",data:{appId:a.appId,tabContentId:e},success:function(a){var e=t.getJsonData(a.data);console.log(e),o.setData({tel:""==e.tel?e.phone:e.tel})},fail:function(a){t.hint()}})},cancelOrder:function(){var a=this;wx.showModal({title:"是否确认取消订单？",success:function(e){e.confirm&&wx.request({url:t.globalData.comUrl+"tabs_updateZXOrderStatus.action",data:{appId:t.globalData.projectInfo.appId,orderId:a.data.orderDetail.id,status:5},success:function(){wx.showToast({title:"订单已取消",icon:"success",duration:2e3}),setTimeout(function(){wx.navigateBack({delta:1})},2e3)},fail:function(){t.hint()}})}})},toPay:function(e){var o=this,r=e.currentTarget.dataset;""!=o.data.orderDetail.activityIds&&void 0!=o.data.orderDetail.activityIds?wx.request({url:t.globalData.comUrl+"activityProduct_checkActivityStatus.action",data:{appId:a.appId,productId:o.data.orderDetail.productOrderVOList[0].productId,activityId:o.data.orderDetail.activityIds},success:function(a){0==a.data.code?(isSubmit=!0,t.hint("活动已经结束")):2==a.data.code?(isSubmit=!0,t.hint("产品已经退出该活动")):"1"==r.type?o.startPay():o.prePay()}}):"1"==r.type?o.startPay():o.prePay()},refund:function(){wx.navigateTo({url:"../refund/refund"})},prePay:function(){var e=this;e.data.preMoney<e.data.orderDetail.totalMoney?wx.showToast({title:"余额不足！",icon:"none",duration:2e3,mask:!0}):(wx.showToast({title:"加载中...",icon:"loading",duration:1e4,mask:!0}),wx.request({url:t.globalData.paymentUrl+"/WechatAlipay/PrePayNotifcation",data:{memberId:t.getMemberId(),projectId:a.appId,nonce_str:"lfksf"+Math.round(1e5*Math.random()),body:e.data.orderDetail.productOrderVOList[0].productName,attach:e.data.orderDetail.orderNO+"_"+e.data.orderDetail.id+"%2B",out_trade_no:e.data.orderDetail.orderNO+(new Date).valueOf(),total_fee:(100*e.data.orderDetail.totalMoney).toFixed(0),trade_type:"",device_info:"156151"},success:function(t){console.log(t.data),wx.hideToast(),"success"==t.data?wx.showToast({title:"支付成功",icon:"success",duration:2e3,mask:!0}):wx.showModal({title:"支付失败",showCancel:!1,success:function(t){t.confirm&&e.onShow()}})}}))},startPay:function(){var r=this;wx.showToast({title:"加载中...",icon:"loading",duration:1e4,mask:!0}),wx.request({url:t.globalData.comUrl+"tabs_getZXOrderDetail.action",data:{appId:t.globalData.projectInfo.appId,orderId:o},success:function(o){"9"==t.getJsonData(o.data).status?t.hint("该产品已下架"):r.data.isWeb?r.onLinePay({orderNO:e}):wx.login({success:function(o){o.code?wx.request({url:t.globalData.paymentUrl+"/WechatAlipay/MiniPayService2?jsoncallback=?",data:{projectId:a.appId,nonce_str:"lfksf"+Math.round(1e5*Math.random()),body:r.data.orderDetail.productOrderVOList[0].productName,attach:e+"_"+r.data.orderDetail.id+"%2B",out_trade_no:e+(new Date).valueOf(),total_fee:(100*r.data.orderDetail.totalMoney).toFixed(0),trade_type:"JSAPI",device_info:"838792",code:o.code},success:function(t){wx.hideToast();var a=r.getJsonData(t.data);wx.requestPayment({timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:"prepay_id="+a.prepay_id,signType:"MD5",paySign:a.sign,success:function(t){wx.showToast({title:"支付成功",icon:"success",duration:2e3,mask:!0}),setTimeout(function(){r.onShow()},2e3)},fail:function(t){wx.showModal({title:"支付失败",showCancel:!1,success:function(t){t.confirm&&r.onShow()}})}})}}):t.hint("获取用户登录态失败！"+o.errMsg)}})},fail:function(){t.hint()}})},goComment:function(t){console.log(t.currentTarget.dataset.id),wx.navigateTo({url:"../../../product/comment/publish-comment/publish-comment?productOrderId="+t.currentTarget.dataset.id})},sureReceive:function(){var a=this;wx.showModal({title:"提示",content:"是否确认收货",success:function(e){e.confirm&&wx.request({url:t.globalData.comUrl+"tabs_signForOrder.action",data:{orderId:a.data.orderDetail.id},success:function(e){console.log(e),1==e.data?a.onShow():t.hint("收货失败")}})}})},gotoLogistics:function(){this.data.orderDetail.expressNO?wx.navigateTo({url:"logistics/logistics?appOrderId="+this.data.orderDetail.id}):t.hint("商家暂未填写物流单号")},getJsonData:function(t){return JSON.parse(t.substring(1,t.length-1))},makePhoneCall:function(){var t=this;wx.makePhoneCall({phoneNumber:t.data.tel})},onLinePay:function(e){var o=this,r={myOrderInfo:e,projectInfo:a,productNames:o.data.orderDetail.productOrderVOList[0].productName,totalPrice:o.data.orderDetail.totalMoney,paymentUrl:t.globalData.paymentUrl};window.localStorage.setItem("payInfos",JSON.stringify(r));var s=-1!=window.navigator.userAgent.toLowerCase().indexOf("micromessenger"),n=window.location.href.split("#")[0]+"paymament.html";s&&(n="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+t.globalData.wxAppId+"&redirect_uri="+encodeURIComponent(n)+"&response_type=code&scope=snsapi_userinfo&state=12345#wechat_redirect"),window.location.href=n}}); 
 			}); 	require("pages/self/myOrder/myOrder-detail/myOrder-detail.js");
 		__wxRoute = 'pages/self/myOrder/myOrder-detail/logistics/logistics';__wxRouteBegin = true; 	define("pages/self/myOrder/myOrder-detail/logistics/logistics.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),o="",a="";Page({data:{logInfo:{},logList:[]},onLoad:function(t){wx.showToast({title:"加载中...",icon:"loading",duration:1e4,mask:!0}),o=t.appOrderId,a=t.orderTime,this.getlogInfo()},getlogInfo:function(){var a=this;wx.request({url:t.globalData.comUrl+"printer_getParcelInfo",data:{orderId:o},success:function(o){wx.hideToast();var e=o.data.content;1==o.data.code?1==e.success?a.setData({logInfo:e,logList:e.route}):t.hint(e.message):t.hint(e.reason)}})}}); 
 			}); 	require("pages/self/myOrder/myOrder-detail/logistics/logistics.js");
 		__wxRoute = 'pages/self/myOrder/refund/refund';__wxRouteBegin = true; 	define("pages/self/myOrder/refund/refund.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),t={};Page({data:{reasons:[{value:"退运费"},{value:"大小/尺寸与商品描述不符"},{value:"颜色/图案/款式与商品描述不符"},{value:"做工粗糙/有瑕疵"},{value:"褪色/掉色/缩水/填充物少"},{value:"材质/面料与商品描述不符"},{value:"少件/漏发"},{value:"包装/商品破损/污渍/变形"},{value:"假冒品牌"},{value:"未按约定时间发货"},{value:"发票问题"},{value:"卖家发错货"},{value:"其它原因"}],isHideReason:!0,isHideGoodsStatus:!0,refundReason:"",goodsStatus:"",images:[],imageUrls:[],productList:[],money:"",refundMoney:"",remarks:"",transportCost:""},onLoad:function(e){t=wx.getStorageSync("orderDetail"+a.globalData.autoId),console.log(t),this.setData({productList:t.productOrderVOList,money:t.totalMoney+t.transportCost,transportCost:t.transportCost,refundMoney:t.totalMoney+t.transportCost})},onShow:function(){},reasonChange:function(a){this.setData({refundReason:a.detail.value,isHideReason:!this.data.isHideReason})},statusChange:function(a){this.setData({goodsStatus:0==a.detail.value?"未收到货":"已收到货",isHideGoodsStatus:!this.data.isHideGoodsStatus})},hideReasonFrame:function(){this.setData({isHideReason:!this.data.isHideReason})},hideGoodsStatus:function(){this.setData({isHideGoodsStatus:!this.data.isHideGoodsStatus})},chooseImage:function(){var t=this;wx.chooseImage({count:1,success:function(e){console.log(e);var s=t.data.images.length+e.tempFilePaths.length;t.setData({images:t.data.images.concat(e.tempFilePaths)}),s>3?a.showToast("最多传3张"):wx.uploadFile({url:a.globalData.comUrl+"tabs_uploadPicMina.action",filePath:e.tempFilePaths[0],name:"file",success:function(a){var e=JSON.parse(a.data);"1"==e.isSuccess&&(t.data.imageUrls.push(e.path),t.setData({imageUrls:t.data.imageUrls}))}})}})},moneyInput:function(a){var t=this,e=a.detail.value;return t.setData({refundMoney:e>t.data.money?t.data.money:e}),{value:e>t.data.money?t.data.money:e}},remarksInput:function(a){this.setData({remarks:a.detail.value})},delPic:function(a){var t=a.currentTarget.dataset.idx;this.data.images.splice(t,1),this.data.imageUrls.splice(t,1),this.setData({images:this.data.images,imageUrls:this.data.imageUrls})},submit:function(){var e=this;if(""!=e.data.goodsStatus)if(""!=e.data.refundReason)if(e.data.refundMoney<=0)a.showToast("退款金额必须大于0");else{for(var s="",o=0;o<e.data.imageUrls.length;o++)0==o?s+=e.data.imageUrls[o]:s=s+","+e.data.imageUrls[o];wx.request({url:a.globalData.comUrl+"tabs_applyRefund",data:{orderId:t.id,billreason:e.data.refundReason,refundMoney:e.data.refundMoney,isReceive:"未收到货"==e.data.goodsStatus?0:1,refundDesc:e.data.remarks,refundProofImage:s},success:function(a){console.log(a),1==a.data?(wx.showLoading({title:"提交成功",icon:"success",duration:1500}),setTimeout(function(){wx.navigateBack({deta:1})},1500)):wx.showLoading({title:"提交失败",icon:"success",duration:1500})}})}else a.showToast("请选择退款原因");else a.showToast("请选择货物状态")},onUnload:function(){}}); 
 			}); 	require("pages/self/myOrder/refund/refund.js");
 		__wxRoute = 'pages/self/mySupply/mySupply';__wxRouteBegin = true; 	define("pages/self/mySupply/mySupply.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=1,o=0;Page({data:{pageList:[],bottomHint:!0,noSupply:!0,times:0},onLoad:function(){this.getSupplyList()},getSupplyList:function(){var s=this,e=t.getMemberId();wx.request({url:t.globalData.comUrl+"mctab_searchPhotoInfo.action",data:{appId:t.globalData.projectInfo.appId,current:a,memberId:e,customizeTabId:t.globalData.customizeTabId.LynxPhoto_Info_Post_Tab},success:function(a){var e=t.getJsonData(a.data);o=e.pages,s.setData({pageList:s.data.pageList.concat(e.pageList)}),0==s.data.pageList.length?s.setData({noSupply:!1}):s.setData({noSupply:!0})},fail:function(){t.hint()}})},onShow:function(){var t=this.data.times+1;a=1,this.setData({times:t}),1!=this.data.times&&(this.setData({pageList:[],bottomHint:!0,noSupply:!0}),this.onLoad())},onReachBottom:function(){a<o?(a++,this.onLoad()):this.setData({bottomHint:!1})}}); 
 			}); 	require("pages/self/mySupply/mySupply.js");
 		__wxRoute = 'pages/self/acountInformation/acountInformation';__wxRouteBegin = true; 	define("pages/self/acountInformation/acountInformation.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{imgPath:"",nickname:"",sex:""},onLoad:function(){},onShow:function(){switch(this.setData({imgPath:a.globalData.wxUserInfo.avatarUrl,sex:a.globalData.wxUserInfo.sex,nickname:a.globalData.wxUserInfo.nickName}),a.globalData.wxUserInfo.gender){case 0:this.setData({sex:"未知"});break;case 1:this.setData({sex:"男"});break;case 2:this.setData({sex:"女"})}},followtap:function(){wx.navigateTo({url:"qrCode/qrCode"})}}); 
 			}); 	require("pages/self/acountInformation/acountInformation.js");
 		__wxRoute = 'pages/self/cart/cart';__wxRouteBegin = true; 	define("pages/self/cart/cart.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),t="",r="";Page({data:{totalPrice:0,cartData:[],cartList:[],cartNull:!1},onLoad:function(a){r=a.from},onShow:function(){var t=this;if(t.data.totalPrice=0,this.setData({cartData:wx.getStorageSync("cartData"+a.globalData.autoId)||[]}),(wx.getStorageSync("cartData"+a.globalData.autoId)||[]).length>0){var r=wx.getStorageSync("cartData"+a.globalData.autoId);t.splitArr(r)}else wx.removeStorageSync("cartData"+a.globalData.autoId),wx.removeStorageSync("cartDataList"+a.globalData.autoId),t.setData({cartNull:!0})},splitArr:function(t){for(var r=0,e=function(a){for(var t,e=[],c={},o=0;null!=(t=a[o]);o++)c[t.branchInfoId]||(e.push(t.branchInfoId),c[t.branchInfoId]=!0),1==a[o].isSelected&&(r+=parseInt(a[o].count)*parseFloat(a[o].price));return e}(t),c=[],o=0;o<e.length;o++)for(var d=[],n={},i=0;i<t.length;i++)t[i].branchInfoId==e[o]&&(d.push(t[i]),n.branchInfoId=t[i].branchInfoId,n.branchName=t[i].branchName,n.pro=d,1==t[i].isSelected&&(n.isSelected=!0),c[o]=n);wx.setStorageSync("cartDataList"+a.globalData.autoId,c),this.setData({totalPrice:r.toFixed(2),cartList:c,cartNull:!1})},arrowuptap:function(t){var r=this;if(r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count>1){r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count=r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count-1;for(var e=0;e<r.data.cartData.length;e++)r.data.cartData[e].moduleId==t.currentTarget.dataset.modleid&&(r.data.cartData[e].count=r.data.cartData[e].count-1);this.setData({cartList:r.data.cartList,cartData:r.data.cartData}),wx.setStorageSync("cartData"+a.globalData.autoId,r.data.cartData),r.splitArr(this.data.cartData)}},arrowdowntap:function(t){var r=this;r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count=r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count+1;for(var e=0;e<r.data.cartData.length;e++)r.data.cartData[e].moduleId==t.currentTarget.dataset.modleid&&(r.data.cartData[e].count=r.data.cartData[e].count+1);this.setData({cartList:r.data.cartList,cartData:r.data.cartData}),wx.setStorageSync("cartData"+a.globalData.autoId,r.data.cartData),r.splitArr(r.data.cartData)},bindCountInput:function(t){var r=this;parseInt(t.detail.value);if(parseInt(t.detail.value)>=1){r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count=parseInt(t.detail.value);for(var e=0;e<r.data.cartData.length;e++)r.data.cartData[e].moduleId==t.currentTarget.dataset.modleid&&(r.data.cartData[e].count=parseInt(t.detail.value));return this.setData({cartList:r.data.cartList,cartData:r.data.cartData}),wx.setStorageSync("cartData"+a.globalData.autoId,r.data.cartData),r.splitArr(this.data.cartData),parseInt(t.detail.value)}return 1},delPro:function(t){var r=this;wx.showModal({title:"确定删除该商品？",success:function(e){if(e.confirm){for(var c=[],o=0;o<r.data.cartData.length;o++)r.data.cartData[o].moduleId!=t.currentTarget.dataset.modelid&&c.push(r.data.cartData[o]);r.setData({cartData:c}),wx.setStorageSync("cartData"+a.globalData.autoId,r.data.cartData),r.splitArr(r.data.cartData)}else e.cancel;r.data.cartData.length<1&&r.setData({cartNull:!0})}})},toClearing:function(){if(""==(t=wx.getStorageSync("memberId"+a.globalData.autoId)||""))wx.navigateTo({url:"../../login/login"});else{for(var r=0,e=0;e<this.data.cartData.length;e++)this.data.cartData[e].isSelected&&r++;if(0==r)return void a.hint("请选择产品");var c=this;a.globalData.isPerson?wx.redirectTo({url:"../../order/order?proPrice="+c.data.totalPrice}):wx.navigateTo({url:"../../order/order?proPrice="+c.data.totalPrice})}},checkboxTap:function(t){var r=this;console.log(t.currentTarget.dataset.proid);for(var e=0;e<r.data.cartData.length;e++)t.currentTarget.dataset.proid==r.data.cartData[e].productId&&(1==r.data.cartData[e].isSelected?r.data.cartData[e].isSelected=!1:r.data.cartData[e].isSelected=!0);wx.setStorageSync("cartData"+a.globalData.autoId,r.data.cartData),r.splitArr(r.data.cartData)},toProList:function(){wx.switchTab({url:"../../product/product"})},toProDetail:function(a){wx.navigateTo({url:"../../product/pro-detail/pro-detail?productId="+a.currentTarget.dataset.pid})},preventBubbling:function(){}}); 
 			}); 	require("pages/self/cart/cart.js");
 		__wxRoute = 'pages/self/cart2/cart';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/self/cart2/cart.js';	define("pages/self/cart2/cart.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),t="",r="";Page({data:{totalPrice:0,cartData:[],cartList:[],cartNull:!1,projectType:a.globalData.projectInfo.projectType},onLoad:function(a){r=a.from},onShow:function(){var t=this;if(t.data.totalPrice=0,this.setData({cartData:wx.getStorageSync("cartData"+a.globalData.autoId)||[]}),(wx.getStorageSync("cartData"+a.globalData.autoId)||[]).length>0){var r=wx.getStorageSync("cartData"+a.globalData.autoId);t.splitArr(r)}else wx.removeStorageSync("cartData"+a.globalData.autoId),wx.removeStorageSync("cartDataList"+a.globalData.autoId),t.setData({cartNull:!0})},splitArr:function(t){for(var r=0,e=function(a){for(var t,e=[],c={},o=0;null!=(t=a[o]);o++)c[t.branchInfoId]||(e.push(t.branchInfoId),c[t.branchInfoId]=!0),1==a[o].isSelected&&(r+=parseInt(a[o].count)*parseFloat(a[o].price));return e}(t),c=[],o=0;o<e.length;o++)for(var d=[],n={},i=0;i<t.length;i++)t[i].branchInfoId==e[o]&&(d.push(t[i]),n.branchInfoId=t[i].branchInfoId,n.branchName=t[i].branchName,n.pro=d,1==t[i].isSelected&&(n.isSelected=!0),c[o]=n);wx.setStorageSync("cartDataList"+a.globalData.autoId,c),this.setData({totalPrice:r.toFixed(2),cartList:c,cartNull:!1})},arrowuptap:function(t){var r=this;if(r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count>1){r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count=r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count-1;for(var e=0;e<r.data.cartData.length;e++)r.data.cartData[e].moduleId==t.currentTarget.dataset.modleid&&(r.data.cartData[e].count=r.data.cartData[e].count-1);this.setData({cartList:r.data.cartList,cartData:r.data.cartData}),wx.setStorageSync("cartData"+a.globalData.autoId,r.data.cartData),r.splitArr(this.data.cartData)}},arrowdowntap:function(t){var r=this;r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count=r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count+1;for(var e=0;e<r.data.cartData.length;e++)r.data.cartData[e].moduleId==t.currentTarget.dataset.modleid&&(r.data.cartData[e].count=r.data.cartData[e].count+1);this.setData({cartList:r.data.cartList,cartData:r.data.cartData}),wx.setStorageSync("cartData"+a.globalData.autoId,r.data.cartData),r.splitArr(r.data.cartData)},bindCountInput:function(t){var r=this;parseInt(t.detail.value);if(parseInt(t.detail.value)>=1){r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count=parseInt(t.detail.value);for(var e=0;e<r.data.cartData.length;e++)r.data.cartData[e].moduleId==t.currentTarget.dataset.modleid&&(r.data.cartData[e].count=parseInt(t.detail.value));return this.setData({cartList:r.data.cartList,cartData:r.data.cartData}),wx.setStorageSync("cartData"+a.globalData.autoId,r.data.cartData),r.splitArr(this.data.cartData),parseInt(t.detail.value)}return 1},delPro:function(t){var r=this;wx.showModal({title:"确定删除该商品？",success:function(e){if(e.confirm){for(var c=[],o=0;o<r.data.cartData.length;o++)r.data.cartData[o].moduleId!=t.currentTarget.dataset.modelid&&c.push(r.data.cartData[o]);r.setData({cartData:c}),wx.setStorageSync("cartData"+a.globalData.autoId,r.data.cartData),r.splitArr(r.data.cartData)}else e.cancel}})},toClearing:function(){if(""==(t=wx.getStorageSync("memberId"+a.globalData.autoId)||""))wx.navigateTo({url:"../../login/login"});else{for(var r=0,e=0;e<this.data.cartData.length;e++)this.data.cartData[e].isSelected&&r++;if(0==r)return void a.hint("请选择产品");var c=this;a.globalData.isPerson?wx.redirectTo({url:"../../order/order?proPrice="+c.data.totalPrice}):wx.navigateTo({url:"../../order/order?proPrice="+c.data.totalPrice})}},checkboxTap:function(t){var r=this;console.log(t.currentTarget.dataset.proid);for(var e=0;e<r.data.cartData.length;e++)t.currentTarget.dataset.proid==r.data.cartData[e].productId&&(1==r.data.cartData[e].isSelected?r.data.cartData[e].isSelected=!1:r.data.cartData[e].isSelected=!0);wx.setStorageSync("cartData"+a.globalData.autoId,r.data.cartData),r.splitArr(r.data.cartData)},toProList:function(){wx.switchTab({url:"../../product/product"})},toProductDetail:function(a){wx.navigateTo({url:"../../product/pro-detail/pro-detail?productId="+a.currentTarget.dataset.pid})},onReachBottom:function(){!!this.selectComponent("#product-list-1")&&this.selectComponent("#product-list-1").onReachBottom()}}); 
 			}); 	require("pages/self/cart2/cart.js");
 		__wxRoute = 'pages/self/cart3/cart';__wxRouteBegin = true; 	define("pages/self/cart3/cart.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a="",r="",e=t.globalData.projectInfo,o=t.globalData.customizeTabId,c=1,i=1;Page({data:{totalPrice:0,cartData:[],cartList:[],cartNull:!1,projectType:t.globalData.projectInfo.projectType,isPerson:t.globalData.isPerson,proList:[],hiddenMerchant:!0,bottomHint:!1,actDistribution:{},productList:[]},onLoad:function(t){r=t.from,"o2o-shop"==this.data.projectType?this._productList1Init():"shop"==this.data.projectType&&this._productList2Init()},onShow:function(){var a=this;if(a.data.totalPrice=0,this.setData({cartData:wx.getStorageSync("cartData"+t.globalData.autoId)||[]}),(wx.getStorageSync("cartData"+t.globalData.autoId)||[]).length>0){var r=wx.getStorageSync("cartData"+t.globalData.autoId);a.splitArr(r)}else wx.removeStorageSync("cartData"+t.globalData.autoId),wx.removeStorageSync("cartDataList"+t.globalData.autoId),a.setData({cartNull:!0})},splitArr:function(a){for(var r=0,e=function(t){for(var a,e=[],o={},c=0;null!=(a=t[c]);c++)o[a.branchInfoId]||(e.push(a.branchInfoId),o[a.branchInfoId]=!0),1==t[c].isSelected&&(r+=parseInt(t[c].count)*parseFloat(t[c].price));return e}(a),o=[],c=0;c<e.length;c++)for(var i=[],s={},d=0;d<a.length;d++)a[d].branchInfoId==e[c]&&(i.push(a[d]),s.branchInfoId=a[d].branchInfoId,s.branchName=a[d].branchName,s.pro=i,1==a[d].isSelected&&(s.isSelected=!0),o[c]=s);wx.setStorageSync("cartDataList"+t.globalData.autoId,o),this.setData({totalPrice:r.toFixed(2),cartList:o,cartNull:!1})},arrowuptap:function(a){var r=this;if(r.data.cartList[a.currentTarget.dataset.index].pro[a.currentTarget.dataset.proindex].count>1){r.data.cartList[a.currentTarget.dataset.index].pro[a.currentTarget.dataset.proindex].count=r.data.cartList[a.currentTarget.dataset.index].pro[a.currentTarget.dataset.proindex].count-1;for(var e=0;e<r.data.cartData.length;e++)r.data.cartData[e].moduleId==a.currentTarget.dataset.modleid&&(r.data.cartData[e].count=r.data.cartData[e].count-1);this.setData({cartList:r.data.cartList,cartData:r.data.cartData}),wx.setStorageSync("cartData"+t.globalData.autoId,r.data.cartData),r.splitArr(this.data.cartData)}},arrowdowntap:function(a){var r=this;r.data.cartList[a.currentTarget.dataset.index].pro[a.currentTarget.dataset.proindex].count=r.data.cartList[a.currentTarget.dataset.index].pro[a.currentTarget.dataset.proindex].count+1;for(var e=0;e<r.data.cartData.length;e++)r.data.cartData[e].moduleId==a.currentTarget.dataset.modleid&&(r.data.cartData[e].count=r.data.cartData[e].count+1);this.setData({cartList:r.data.cartList,cartData:r.data.cartData}),wx.setStorageSync("cartData"+t.globalData.autoId,r.data.cartData),r.splitArr(r.data.cartData)},bindCountInput:function(a){var r=this;parseInt(a.detail.value);if(parseInt(a.detail.value)>=1){r.data.cartList[a.currentTarget.dataset.index].pro[a.currentTarget.dataset.proindex].count=parseInt(a.detail.value);for(var e=0;e<r.data.cartData.length;e++)r.data.cartData[e].moduleId==a.currentTarget.dataset.modleid&&(r.data.cartData[e].count=parseInt(a.detail.value));return this.setData({cartList:r.data.cartList,cartData:r.data.cartData}),wx.setStorageSync("cartData"+t.globalData.autoId,r.data.cartData),r.splitArr(this.data.cartData),parseInt(a.detail.value)}return 1},delPro:function(a){var r=this;wx.showModal({title:"确定删除该商品？",success:function(e){if(e.confirm){for(var o=[],c=0;c<r.data.cartData.length;c++)r.data.cartData[c].moduleId!=a.currentTarget.dataset.modelid&&o.push(r.data.cartData[c]);r.setData({cartData:o}),wx.setStorageSync("cartData"+t.globalData.autoId,r.data.cartData),r.splitArr(r.data.cartData)}else e.cancel}})},toClearing:function(){if(""==(a=wx.getStorageSync("memberId"+t.globalData.autoId)||""))wx.navigateTo({url:"../../login/login"});else{for(var r=0,e=0;e<this.data.cartData.length;e++)this.data.cartData[e].isSelected&&r++;if(0==r)return void t.hint("请选择产品");var o=this;t.globalData.isPerson?wx.redirectTo({url:"../../order/order?proPrice="+o.data.totalPrice}):wx.navigateTo({url:"../../order/order?proPrice="+o.data.totalPrice})}},checkboxTap:function(a){var r=this;console.log(a.currentTarget.dataset.proid);for(var e=0;e<r.data.cartData.length;e++)a.currentTarget.dataset.proid==r.data.cartData[e].productId&&(1==r.data.cartData[e].isSelected?r.data.cartData[e].isSelected=!1:r.data.cartData[e].isSelected=!0);wx.setStorageSync("cartData"+t.globalData.autoId,r.data.cartData),r.splitArr(r.data.cartData)},toProList:function(){wx.switchTab({url:"../../product/product"})},toProductDetail:function(t){wx.navigateTo({url:"../../product/pro-detail/pro-detail?productId="+t.currentTarget.dataset.pid})},getProCategory1:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getAppProductByCity.action",data:{appId:e.appId,customizeTabId:o.LynxProductList,count:4,current:c,jsoncallback:"",productName:"",sortName:"readTimes",sortType:"desc",isGroup:t.globalData.isGroup},success:function(t){var r=t.data.substring(1).slice(0,-1),e=JSON.parse(r);i=e.pages,a.setData({proList:a.data.proList.concat(e.pageList)})}})},onReachBottom:function(){c<i&&(c++,"o2o-shop"==this.data.projectType?this.getProCategory1():"shop"==this.data.projectType&&this.getProductList())},_productList1Init:function(){var a=this;e=t.globalData.projectInfo,o=t.globalData.customizeTabId;var r=wx.getStorageSync("memberType"+t.globalData.autoId);this.setData({memberType:r}),t.globalData.actDistribution&&this.setData({actDistribution:t.globalData.actDistribution}),a.getProCategory1()},_productList2Init:function(){var a=this;e=t.globalData.projectInfo,o=t.globalData.customizeTabId;var r=wx.getStorageSync("memberType"+t.globalData.autoId);this.setData({memberType:r}),t.globalData.actDistribution&&this.setData({actDistribution:t.globalData.actDistribution}),a.getProCategory2()},getProCategory2:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabCategory.action",data:{customizeTabId:o.LynxProductList},success:function(r){var e=t.getJsonData(r.data);console.log(e),a.setData({cateList:e}),a.titletap()}})},getProductList:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getZXProductListByCategory.action",data:{customizeTabId:o.LynxProductList,bigCateGoryCode:a.data.categoryCode,current:c,status:2,recommand:1,isBreif:1,isGroup:t.globalData.isGroup},success:function(r){var e=t.getJsonData(r.data);i=e.pages,a.setData({productList:a.data.productList.concat(e.pageList)}),e.pageList.length>0?a.setData({hasPro:!0}):a.setData({hasPro:!1})}})},titletap:function(t){c=1;var a=this;this.setData({productList:[]}),t&&void 0!=t?(a.setData({categoryCode:t.currentTarget.dataset.code,bottomHint:!0,hidden:!0,index:t.currentTarget.dataset.index}),a.getProductList(t.currentTarget.dataset.code)):(a.setData({categoryCode:a.data.cateList[0].code,bottomHint:!0,hidden:!0}),a.getProductList())}}); 
 			}); 	require("pages/self/cart3/cart.js");
 		__wxRoute = 'pages/self/collect/collect';__wxRouteBegin = true; 	define("pages/self/collect/collect.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a="",e=1,n=0,o=1,s="";Page({data:{currentIdx:1,pageList:[],collectNull:!0,bottomHint:!0,times:0,hideInfoTabs:!1,navArr:[{navName:"\b产品",navIdx:1,isShow:!0},{navName:"今日看点",navIdx:3,isShow:!1},{navName:"\b商家",navIdx:2,isShow:!1},{navName:"\b资讯动态",navIdx:4,isShow:!1},{navName:"\b供求",navIdx:5,isShow:!1}]},onLoad:function(){s=t.globalData.projectInfo;var a=this;a.getCollectPage(),a.setData({hideInfoTabs:t.globalData.projectInfo.hideInfoTabs}),a.getCustomizeTabList()},onShow:function(){var t=this.data.times+1;e=1,this.setData({times:t}),1!=this.data.times&&(this.setData({pageList:[],collectNull:!0,bottomHint:!0}),this.onLoad())},getCustomizeTabList:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getCustomizeTabList.action",data:{appId:s.appId},success:function(e){for(var n=t.getJsonData(e.data),o=0;o<n.length;o++){var s=n[o];switch(n[o].sysTabNameTag?n[o].sysTabNameTag:n[o].sysTabName){case"LynxAbout_Merchant":a.data.navArr[2]={navName:s.tabTitle,navIdx:2,isShow:!0};break;case"LynxPhoto_Info_Post_Tab":a.data.navArr[4]={navName:s.tabTitle,navIdx:5,isShow:!0};break;case"LynxPhoto_H_Info_Tab_Level2":a.data.navArr[1]={navName:s.tabTitle,navIdx:3,isShow:!0};break;case"Photo-Info-Tab-Level2":a.data.navArr[3]={navName:s.tabTitle,navIdx:4,isShow:!0}}}a.setData({navArr:a.data.navArr})}})},getCollectPage:function(){var e=this;a=t.getMemberId(),wx.request({url:t.globalData.comUrl+"tabs_getCollectionPage.action",data:{appId:t.globalData.projectInfo.appId,current:1,type:e.data.currentIdx,memberId:a},success:function(a){var o=t.getJsonData(a.data);n=o.pages,o.pageList.length?e.setData({pageList:o.pageList,collectNull:!0}):e.setData({collectNull:!1})},fail:function(a){t.hint()}})},getMoreCollectPage:function(){var o=this;a=t.getMemberId(),wx.request({url:t.globalData.comUrl+"tabs_getCollectionPage.action",data:{appId:t.globalData.projectInfo.appId,current:e,type:o.data.currentIdx,memberId:a},success:function(a){var e=t.getJsonData(a.data);n=e.pages,console.log(e),e.pageList.length?o.setData({pageList:o.data.pageList.concat(e.pageList),collectNull:!0}):o.setData({collectNull:!1})},fail:function(a){t.hint()}})},navtap:function(t){switch(t.currentTarget.dataset.index){case 3:o=3;break;case 4:o=4;break;case 2:o=2;break;case 1:o=1;break;case 5:o=5}e=1,this.setData({currentIdx:o,collectNull:!0,bottomHint:!0,pageList:[]}),this.getCollectPage()},toNewsDetail:function(a){var e=this;wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTab.action",data:{appId:t.globalData.projectInfo.appId,tabContentId:a.currentTarget.dataset.tabid},success:function(n){t.getJsonData(n.data).id?wx.navigateTo({url:"../../news/news-detail/news-detail?tabContentId="+a.currentTarget.dataset.tabid}):e.warn("该资讯已删除！")},fail:function(){t.hint()}})},toStoreDetail:function(a){var e=this;wx.request({url:t.globalData.comUrl+"tabs_getSingleBranchInfo.action",data:{appId:t.globalData.projectInfo.appId,tabContentId:a.currentTarget.dataset.tabid},success:function(n){t.getJsonData(n.data).id?wx.navigateTo({url:"../../store/store-detail/store-detail?tabContentId="+a.currentTarget.dataset.tabid}):e.warn("该商铺已下架！")},fail:function(){t.hint()}})},toNewsCenter:function(a){var e=this;wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTab.action",data:{appId:t.globalData.projectInfo.appId,tabContentId:a.currentTarget.dataset.tabid},success:function(n){t.getJsonData(n.data).id?wx.navigateTo({url:"../../news/news-detail/news-detail?tabContentId="+a.currentTarget.dataset.tabid}):e.warn("该资讯已删除！")},fail:function(){t.hint()}})},toProDetail:function(a){var e=this;wx.request({url:t.globalData.comUrl+"tabs_getZXProductDetail.action",data:{appId:t.globalData.projectInfo.appId,productId:a.currentTarget.dataset.tabid},success:function(n){2!=t.getJsonData(n.data).status?e.warn("该商品不存在或已下架！"):wx.navigateTo({url:"../../product/pro-detail/pro-detail?productId="+a.currentTarget.dataset.tabid})},fail:function(){t.hint()}})},toSupplyDetail:function(a){var e=this;wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTab.action",data:{appId:t.globalData.projectInfo.appId,tabContentId:a.currentTarget.dataset.tabid,customizetabId:t.globalData.customizeTabId.LynxPhoto_Info_Post_Tab},success:function(n){t.getJsonData(n.data).id?wx.navigateTo({url:"../../supply/supply-detail/supply-detail?tabContentId="+a.currentTarget.dataset.tabid}):e.warn("该资讯已删除！")},fail:function(){t.hint()}})},onReachBottom:function(){e<n?(e++,this.getMoreCollectPage()):e>1&&(this.data.pageList.length>1?this.setData({bottomHint:!1}):this.setData({bottomHint:!0}))},warn:function(t){wx.showToast({title:t,image:"../../../img/warn.png",duration:2e3})}}); 
 			}); 	require("pages/self/collect/collect.js");
 		__wxRoute = 'pages/self/memRights/memRights';__wxRouteBegin = true; 	define("pages/self/memRights/memRights.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../../../utils/wxParse/wxParse.js"),e=getApp();Page({data:{},onLoad:function(t){var r=wx.getStorageSync("scoreRule"+e.globalData.autoId);a.wxParse("scoreRule","html",r,this,5)}}); 
 			}); 	require("pages/self/memRights/memRights.js");
 		__wxRoute = 'pages/self/bindPhone/bindPhone';__wxRouteBegin = true; 	define("pages/self/bindPhone/bindPhone.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a="",t=getApp(),e=t.globalData.projectInfo;Page({data:{valueCode:"",valuePhone:"",counter:-1},onLoad:function(a){e=t.globalData.projectInfo},phoneInput:function(a){this.setData({valuePhone:a.detail.value})},codeInput:function(a){this.setData({valueCode:a.detail.value})},getSmsCode:function(){var a=this;a.data.counter>0||(a.data.valuePhone.length<1?t.hint("请输入手机号"):wx.request({url:t.globalData.comUrl+"member_getSMSCaptcha2.action",data:{appId:t.globalData.projectInfo.appId,flag:1,phoneNumber:a.data.valuePhone},success:function(e){var o=t.getJsonData(e.data);1==o.status?(console.log(o.SMSCaptcha),wx.showToast({title:"获取成功",icon:"success",duration:1500,mask:!0}),a.startTimer()):t.hint("获取失败")}}))},startTimer:function(){var t=this;t.setData({counter:60}),a=setInterval(function(){t.data.counter<0?clearInterval(a):t.setData({counter:t.data.counter-1})},1e3)},doBinding:function(){var a=this;if(11==a.data.valuePhone.length)if(a.data.valueCode.length<4||a.data.valueCode.length>6)t.hint("请输入正确的验证码");else{var e=t.getMemberId();wx.request({url:t.globalData.comUrl+"member_memberBindOpenId.action",data:{appId:t.globalData.projectInfo.appId,SMSCaptcha:a.data.valueCode,mobilePhone:a.data.valuePhone,memberId:e},success:function(e){var o=t.getJsonData(e.data);1==o.status?(console.log(o.SMSCaptcha),wx.setStorageSync("mobilePhone"+t.globalData.autoId,a.data.valuePhone),wx.showToast({title:"绑定成功",icon:"success",duration:1500,mask:!0}),setTimeout(function(){wx.navigateBack()},1500)):t.hint("绑定失败:"+o.reason)}})}else t.hint("请输入正确的手机号")}}); 
 			}); 	require("pages/self/bindPhone/bindPhone.js");
 		__wxRoute = 'pages/self/myBeforehand/myBeforehand';__wxRouteBegin = true; 	define("pages/self/myBeforehand/myBeforehand.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=1,o=1;Page({data:{bookingList:[],styleConfig:t.globalData.styleConfig},onLoad:function(t){this.getBookingList()},onShow:function(){},getBookingList:function(){var i=this;wx.request({url:t.globalData.comUrl+"tabs_getFlexiFormValueList.action",data:{customizeTabId:t.globalData.customizeTabId["Flexi-Form-Booking"],current:o,memberId:t.getMemberId()},success:function(o){var e=t.getJsonData(o.data);a=e.pages,e.pageList.shift(),console.log(e.pageList),i.setData({bookingList:i.data.bookingList.concat(e.pageList)})}})},bhtap:function(t){wx.navigateTo({url:"../../product/beforehand/bh-detail/bh-detail?id="+t.currentTarget.dataset.id})},onReachBottom:function(){o<a&&(o++,this.getBookingList())}}); 
 			}); 	require("pages/self/myBeforehand/myBeforehand.js");
 		__wxRoute = 'pages/self/myCustom/myCustom';__wxRouteBegin = true; 	define("pages/self/myCustom/myCustom.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{customArr:[]},onLoad:function(){var a=wx.getStorageSync("customArr"+t.globalData.autoId);a.length>0&&(a=a.reverse()),this.setData({customArr:a})}}); 
 			}); 	require("pages/self/myCustom/myCustom.js");
 		__wxRoute = 'pages/self/mycoupon/mycoupon';__wxRouteBegin = true; 	define("pages/self/mycoupon/mycoupon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{couponInfo:{},showtab:0,showtabtype:"",tabnav:{},unusedata:{},useddata:{},expiredata:{},startx:0,endx:0,critical:20,marginleft:0,unusesize:0,usedsize:0,expiredsize:0,isShowNullMask:!1,imgArr_bg:["coupon_valid.png","coupon_invalid.png","coupon_invalid.png"],imgArr_icon:["coupon-unuse.png","coupon-used.png","coupon-expired.png"]},onLoad:function(){this.setData({tabnav:{tabnum:3,tabitem:[{id:1,text:"未使用"},{id:2,text:"已使用"},{id:3,text:"已过期"}]}}),this.fetchTabData(0)},fetchData:function(a){var e=this;wx.showToast({title:"加载中...",icon:"loading",duration:1e4,mask:!0}),wx.request({url:t.globalData.comUrl+"act_getMemberActivityList.action",data:{memberId:t.getMemberId(),customizetabId:t.getCustomizeId("Activity"),memberStatus:a,status:a},success:function(a){wx.hideToast();var s=t.getJsonData(a.data);if(s.length){for(var i=[],n=0;n<s.length;n++){var o=s[n];o.typeName=e.getCouponTypeName(o.type),"1"==o.type?(o.amountReachedName="满"+o.amountReached+"元可用",o.tipName="满"+o.amountReached+"减"+o.discountAmount):o.tipName="优惠"+o.discountAmount+"元",o.tip=o.instructure&&""!=o.instructure&&"null"!=o.instructure?o.instructure:"",parseFloat(o.amountReached)>parseFloat(e.data.allPrice)?o.isEffect=!1:o.isEffect=!0,o.beginTime=o.beginTime.substring(0,10),o.endTime=o.endTime.substring(0,10),i.push(o)}e.setData({couponInfo:i,isShowNullMask:!1})}else e.setData({isShowNullMask:!0})},fail:function(){t.hint()}})},getCouponTypeName:function(t){switch(Number(t)){case 1:return"满减优惠";case 2:return"满包邮";case 3:return"限时秒杀";case 4:return"现金红包";case 5:return"拼团";default:return""}},fetchTabData:function(t){switch(this.setData({couponInfo:{},isShowNullMask:!1}),console.log(Number(t)),Number(t)){case 0:this.fetchData("0");break;case 1:this.fetchData("1");break;case 2:this.fetchData("3");break;default:return}},setTab:function(t){var a=t.currentTarget.dataset;this.setData({showtab:Number(a.tabindex),showtabtype:a.type}),this.fetchTabData(a.tabindex)},scrollTouchstart:function(t){var a=t.touches[0].pageX;this.setData({startx:a})},scrollTouchmove:function(t){var a=t.touches[0].pageX,e=this.data;this.setData({endx:a}),a-e.startx<e.critical&&a-e.startx>-e.critical&&this.setData({marginleft:a-e.startx})},scrollTouchend:function(t){var a=this.data;a.endx-a.startx>a.critical&&a.showtab>0?this.setData({showtab:a.showtab-1}):a.endx-a.startx<-a.critical&&a.showtab<this.data.tabnav.tabnum-1&&this.setData({showtab:a.showtab+1}),this.fetchTabData(a.showtab),this.setData({startx:0,endx:0,marginleft:0})},useCoupon:function(t){wx.redirectTo({url:"../../store/store-detail/store-detail?tabContentId="+t.currentTarget.dataset.id})}}); 
 			}); 	require("pages/self/mycoupon/mycoupon.js");
 		__wxRoute = 'pages/supply/supply';__wxRouteBegin = true; 	define("pages/supply/supply.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=t.globalData.projectInfo,e=t.globalData.customizeTabId,o=1,n=1;Page({data:{styleConfig:t.globalData.styleConfig,supplyAndDemand:2,pageList:[],notNull:!0,bottomHint:!0},onLoad:function(){a=t.globalData.projectInfo,e=t.globalData.customizeTabId,this.navtap()},toSearch:function(){wx.navigateTo({url:"../search/search"})},navtap:function(t){o=1,this.setData({notNull:!0,bottomHint:!0,pageList:[]}),t&&this.setData({supplyAndDemand:t.currentTarget.dataset.index}),this.getSupplyList(this.data.supplyAndDemand,o)},getSupplyList:function(o,s){var i=this;wx.request({url:t.globalData.comUrl+"mctab_searchPhotoInfo.action",data:{appId:a.appId,customizeTabId:e.LynxPhoto_Info_Post_Tab,current:1,supplyAndDemand:o},success:function(a){var e=t.getJsonData(a.data);n=e.pages;for(var o=0;o<e.pageList.length;o++)e.pageList[o].picture1=t.modifyPicSize(e.pageList[o].picture1,"_r160x160p");i.setData({pageList:e.pageList}),0==i.data.pageList.length?i.setData({notNull:!1}):i.setData({notNull:!0}),wx.hideToast(),wx.stopPullDownRefresh()},fail:function(a){t.hint()}})},getMoreSupplyList:function(o,n){var s=this;wx.request({url:t.globalData.comUrl+"mctab_searchPhotoInfo.action",data:{appId:a.appId,customizeTabId:e.LynxPhoto_Info_Post_Tab,current:n,supplyAndDemand:o},success:function(a){for(var e=t.getJsonData(a.data),o=0;o<e.pageList.length;o++)e.pageList[o].picture1=t.modifyPicSize(e.pageList[o].picture1,"_r160x160p");s.setData({pageList:s.data.pageList.concat(e.pageList)})},fail:function(a){t.hint()}})},publishtap:function(){t.getMemberId()?wx.navigateTo({url:"supply-publish/supply-publish"}):wx.navigateTo({url:"../login/login"})},onReachBottom:function(){o<n?(o++,this.getMoreSupplyList(this.data.supplyAndDemand,o)):o>1&&(this.data.pageList.length>1?this.setData({bottomHint:!1}):this.setData({bottomHint:!0}))},onPullDownRefresh:function(){this.setData({supplyAndDemand:2,pageList:[],notNull:!0,bottomHint:!0}),o=1,n=1,this.onLoad()}}); 
 			}); 	require("pages/supply/supply.js");
 		__wxRoute = 'pages/supply/supply-publish/supply-publish';__wxRouteBegin = true; 	define("pages/supply/supply-publish/supply-publish.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=!0;Page({data:{styleConfig:t.globalData.styleConfig,imagePath:"",navIndex:2,title:"",phone:"",describe:""},onLoad:function(){},navtap:function(t){this.setData({navIndex:t.currentTarget.dataset.index})},takephoto:function(){var a=this;wx.chooseImage({count:1,success:function(t){var e=t.tempFilePaths[0];a.setData({imagePath:e})},fail:function(a){t.hint("上传失败")}})},formSubmit:function(e){if(a){a=!1;var i=this,o=t.getMemberId(),n=/^1[3|4|5|8|7][0-9]\d{4,8}$/;if(!e.detail.value.title)return a=!0,void this.warn("标题不能为空!");if(!e.detail.value.phone)return a=!0,void this.warn("请输入电话号码!");if(!n.test(e.detail.value.phone))return a=!0,void this.warn("请输入正确的电话号码");if(!e.detail.value.describe)return a=!0,void this.warn("请输入描述内容!");var l=wx.getStorageSync("merchantId"+t.globalData.comUrl);i.data.imagePath?wx.uploadFile({url:t.globalData.comUrl+"mctab_addPhotoInfoTabWeb.action",filePath:i.data.imagePath,name:"file",formData:{appId:t.globalData.projectInfo.appId,title:e.detail.value.title,phone:e.detail.value.phone,detailDescription:e.detail.value.describe,memberId:o,merchantId:l,customizeTabId:t.globalData.customizeTabId.LynxPhoto_Info_Post_Tab,type:i.data.navIndex,mina:"true"},success:function(t){i.setData({imagePath:"",title:"",phone:"",describe:""}),wx.showToast({title:"提交成功",icon:"success",duration:2e3})},fail:function(a){t.hint("提交失败")},complete:function(){a=!0}}):wx.request({url:t.globalData.comUrl+"mctab_addPhotoInfoTabWeb.action",data:{appId:t.globalData.projectInfo.appId,title:e.detail.value.title,phone:e.detail.value.phone,detailDescription:e.detail.value.describe,memberId:o,merchantId:l,customizeTabId:t.globalData.customizeTabId.LynxPhoto_Info_Post_Tab,type:"1",mina:"true"},success:function(t){i.setData({imagePath:"",title:"",phone:"",describe:""}),wx.showToast({title:"提交成功",icon:"success",duration:2e3})},fail:function(a){console.log(a),t.hint()},complete:function(){a=!0}})}},formReset:function(){this.setData({imagePath:""})},warn:function(t){wx.showToast({title:t,image:"../../../img/warn.png",duration:2e3})}}); 
 			}); 	require("pages/supply/supply-publish/supply-publish.js");
 		__wxRoute = 'pages/supply/supply-detail/supply-detail';__wxRouteBegin = true; 	define("pages/supply/supply-detail/supply-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../utils/wxParse/wxParse.js"),a=getApp(),e=a.globalData.projectInfo,o=a.globalData.customizeTabId,l="",i="",s={},n=!0,c=!0;Page({data:{supplyDetail:{},collectStatus:"0",content:""},onLoad:function(t){e=a.globalData.projectInfo,o=a.globalData.customizeTabId;var i=this;l=t.tabContentId,i.getSupplyDetail(),i.getCollectStatus()},getSupplyDetail:function(){var i=this;wx.request({url:a.globalData.comUrl+"tabs_getPhotoInfoTab",data:{appId:e.appId,tabContentId:l,customizetabId:o.LynxPhoto_Info_Post_Tab},success:function(e){s=a.getJsonData(e.data),i.setData({supplyDetail:s}),t.wxParse("detailDescription","html",s.detailDescription,i,5),wx.hideToast()},fail:function(){a.hint()}})},getCollectStatus:function(){var t=this;(i=a.getMemberId())&&wx.request({url:a.globalData.comUrl+"tabs_checkCollection.action",data:{appId:e.appId,memberId:i,id:l},success:function(e){var o=a.getJsonData(e.data);t.setData({collectStatus:o.isExisted})},fail:function(t){a.hint()},complete:function(){n=!0,c=!0}})},collect:function(){if(0!=n){n=!1;var t=this;(i=a.getMemberId())?wx.request({url:a.globalData.comUrl+"tabs_addCollection.action",data:{appId:e.appId,type:5,name:t.data.supplyDetail.title,objId:t.data.supplyDetail.id,memberId:i,pic_url:t.data.supplyDetail.picture1,detailDescription:t.data.supplyDetail.briefDescription},success:function(a){wx.showToast({title:"收藏成功",icon:"success",duration:2e3}),t.getCollectStatus()},fail:function(t){a.hint("收藏失败")}}):(n=!0,wx.navigateTo({url:"../../login/login"}))}},cancelCollect:function(){if(0!=c){c=!1;var t=this;(i=a.getMemberId())?wx.request({url:a.globalData.comUrl+"tabs_delCollectionByObjId.action",data:{id:l,memberId:i},success:function(a){wx.showToast({title:"已取消收藏",icon:"success",duration:2e3}),t.getCollectStatus()},fail:function(t){a.hint("取消收藏失败")}}):(c=!0,wx.navigateTo({url:"../../login/login"}))}}}); 
 			}); 	require("pages/supply/supply-detail/supply-detail.js");
 		__wxRoute = 'pages/search/search';__wxRouteBegin = true; 	define("pages/search/search.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=t.globalData.projectInfo,e=t.globalData.customizeTabId,o=1,n=0,i=0,s="",r=!0;Page(function(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}({data:{bottomHint:!0,hidden:!0,search_type:"0",noSearch:!0,pageList:[],showVal:""},onLoad:function(o){a=t.globalData.projectInfo,e=t.globalData.customizeTabId;var i="";i=0==(n=o.type)?"产品":1==n?"商家":"资讯",this.setData({showVal:i})},getNewsInfo:function(){var n=this;r&&(r=!1,wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabFromL2ToL1.action",data:{appId:a.appId,customizeTabId:e.LynxPhoto_H_Info_Tab_Level2,current:o,searchKey:s},success:function(a){var e=t.getJsonData(a.data);i=e.pages,n.setData({pageList:n.data.pageList.concat(e.pageList)});var o=!!n.data.pageList.length;n.setData({noSearch:o}),r=!0},fail:function(){t.hint(),r=!0}}))},getStoreInfo:function(){var n=this;r&&(r=!1,wx.request({url:t.globalData.comUrl+"mctab_searchBranchInfo.action",data:{appId:a.appId,customizeTabId:e.LynxAbout_Merchant,advertisement:1,current:o,level:0,provinceId:"",cityId:"",categoryId:"",branchName:s},success:function(a){var e=t.getJsonData(a.data);i=e.pages,n.setData({pageList:n.data.pageList.concat(e.pageList)});var o=!!n.data.pageList.length;n.setData({noSearch:o}),r=!0},fail:function(){t.hint(),r=!0}}))},getProductInfo:function(){var n=this;r&&(r=!1,wx.request({url:t.globalData.comUrl+"tabs_getZXProductListByCategory.action",data:{appId:a.appId,customizeTabId:e.LynxProductList,current:o,status:2,productName:s},success:function(a){var e=t.getJsonData(a.data);i=e.pages,n.setData({pageList:n.data.pageList.concat(e.pageList)});var o=!!n.data.pageList.length;n.setData({noSearch:o}),r=!0},fail:function(){t.hint(),r=!0}}))},toProDetail:function(t){wx.navigateTo({url:"../product/pro-detail/pro-detail?productId="+t.currentTarget.dataset.pid})},toStoreDetail:function(t){wx.navigateTo({url:"../store/store-detail/store-detail?tabContentId="+t.currentTarget.dataset.id})},toNewsDetail:function(t){wx.navigateTo({url:"../news/news-detail/news-detail?tabContentId="+t.currentTarget.dataset.id+"&type=3"})},navtap:function(){this.setData({hidden:!this.data.hidden})},navItemtap:function(t){var a="";0==t.currentTarget.dataset.idx?(n=0,a="产品"):1==t.currentTarget.dataset.idx?(n=1,a="商家"):(n=2,a="资讯"),this.setData({showVal:a})},search:function(){this.setData({pageList:[],bottomHint:!0,hidden:!0,noSearch:!0,search_type:n}),o=1,0==n?this.getProductInfo():1==n?this.getStoreInfo():this.getNewsInfo()},searchInput:function(t){s=t.detail.value},blanktap:function(){this.setData({hidden:!0})},scrolltolower:function(){o<i&&(o++,0==n?this.getProductInfo():1==n?this.getStoreInfo():this.getNewsInfo())}},"scrolltolower",function(){o<i?(o++,0==n?this.getProductInfo():1==n?this.getStoreInfo():this.getNewsInfo()):o>1&&(this.data.pageList.length>1?this.setData({bottomHint:!1}):this.setData({bottomHint:!0}))})); 
 			}); 	require("pages/search/search.js");
 		__wxRoute = 'pages/news/news';__wxRouteBegin = true; 	define("pages/news/news.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a="",e="",i=1,s=1,o="";Page({data:{titles:[],pageList:[],adList:[],categoryId:"",news_type:3,titleLeft:0,titleKey:1,hidden:!0,bottomHint:!0,leftHidden:!0,rightHidden:!0,scrolltop:0},onLoad:function(i){a=t.globalData.projectInfo,e=t.globalData.customizeTabId,console.log(t.globalData),console.log(e);var s=this;"LynxPhoto_H_Info_Tab_Level2"==(o=i.sysTabName)?(s.getAdList(),s.setData({news_type:3})):s.setData({news_type:4}),i.title&&wx.setNavigationBarTitle({title:i.title}),s.newsTitleInfo().then(function(t){s.titletap()})},newsTitleInfo:function(){var i=this;return new Promise(function(s,n){wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabCategory.action",data:{appId:a.appId,customizeTabId:e[o]},success:function(a){var e=t.getJsonData(a.data);i.setData({titles:e}),e.length>3&&i.setData({rightHidden:!1}),s(i.titles)},fail:function(){t.hint()}})})},getNewsInfo:function(){var i=this;wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabFromL2ToL1.action",data:{appId:a.appId,customizeTabId:e[o],categoryId:i.data.categoryId,current:1},success:function(a){var e=t.getJsonData(a.data);s=e.pages;for(var o=0;o<e.pageList.length;o++)e.pageList[o].picture1=t.modifyPicSize(e.pageList[o].picture1,"_r160x160p");i.setData({pageList:e.pageList}),i.data.pageList.length<1&&i.setData({hidden:!1}),wx.hideToast(),wx.stopPullDownRefresh()},fail:function(){t.hint()}})},getMoreNewsInfo:function(){var n=this;wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabFromL2ToL1.action",data:{appId:a.appId,customizeTabId:e[o],categoryId:n.data.categoryId,current:i},success:function(a){var e=t.getJsonData(a.data);s=e.pages;for(var i=0;i<e.pageList.length;i++)e.pageList[i].picture1=t.modifyPicSize(e.pageList[i].picture1,"_r160x160p");n.data.pageList=n.data.pageList.concat(e.pageList),n.setData({pageList:n.data.pageList})},fail:function(){t.hint()}})},getAdList:function(){var i=this;wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTabFromL2ToL1.action",data:{appId:a.appId,customizeTabId:e.LynxAdvertisingH_Photo_Info_Tab_Level1,current:1},success:function(a){var e=t.getJsonData(a.data);i.setData({adList:e.pageList})},fail:function(){t.hint()}})},titletap:function(t){var a=this;this.setData({pageList:[]}),t?a.setData({categoryId:t.currentTarget.dataset.code,bottomHint:!0,hidden:!0}):a.setData({categoryId:a.data.titles[0].code,bottomHint:!0,hidden:!0}),i=1,this.getNewsInfo()},onReachBottom:function(){i<s?(i++,this.getMoreNewsInfo()):i>1&&(this.data.pageList.length>1?this.setData({bottomHint:!1}):this.setData({bottomHint:!0}))},onPullDownRefresh:function(){i=1,this.setData({pageList:[]}),wx.showToast({title:"加载中...",icon:"loading",duration:1e4,mask:!0}),this.getNewsInfo()},turnLeft:function(){console.log(this.data.titleKey),this.data.titleKey>1&&(this.setData({titleLeft:this.data.titleLeft+200,titleKey:this.data.titleKey-1}),1==this.data.titleKey&&this.setData({leftHidden:!0,rightHidden:!1}))},turnRight:function(){console.log(this.data.titleKey),this.data.titleKey<this.data.titles.length-2&&(this.setData({titleLeft:this.data.titleLeft-200,titleKey:this.data.titleKey+1}),this.data.titleKey==this.data.titles.length-2&&this.setData({rightHidden:!0,leftHidden:!1}))}}); 
 			}); 	require("pages/news/news.js");
 		__wxRoute = 'pages/news/news-detail/news-detail';__wxRouteBegin = true; 	define("pages/news/news-detail/news-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../../utils/wxParse/wxParse.js");var t=getApp(),e="",a="",i="",o={},l="",n=0,s=!0,c=!0;Page({data:{detailInfo:{},collectStatus:"0"},onLoad:function(o){e=t.globalData.projectInfo,a=t.globalData.customizeTabId;var l=this;t.loginVzSystem(),n=o.type,i=o.tabContentId,l.newsDetailInfo(),l.getCollectStatus()},newsDetailInfo:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getPhotoInfoTab.action",data:{appId:e.appId,tabContentId:i},success:function(e){(o=t.getJsonData(e.data)).detailDescription=o.detailDescription.replace(/&ldquo;/g,"“"),o.detailDescription=o.detailDescription.replace(/&rdquo;/g,"”"),o.detailDescription=o.detailDescription.replace(/&mdash;/g,"—"),o.detailDescription=o.detailDescription.replace(/&middot;/g,"·"),o.detailDescription=o.detailDescription.replace(/&hellip;/g,"…"),a.setData({detailInfo:o}),wx.hideToast()},fail:function(e){t.hint()}})},getCollectStatus:function(){if(l=t.getMemberId()){var a=this;wx.request({url:t.globalData.comUrl+"tabs_checkCollection.action",data:{appId:e.appId,memberId:l,id:i},success:function(e){var i=t.getJsonData(e.data);a.setData({collectStatus:i.isExisted})},fail:function(e){t.hint()},complete:function(){s=!0,c=!0}})}},collect:function(){if(0!=s){s=!1;var a=this;(l=t.getMemberId())?wx.request({url:t.globalData.comUrl+"tabs_addCollection.action",data:{appId:e.appId,type:n,name:o.title,objId:o.id,memberId:l,pic_url:o.picture1,detailDescription:o.briefDescription},success:function(t){wx.showToast({title:"收藏成功",icon:"success",duration:2e3}),a.getCollectStatus()},fail:function(e){t.hint("收藏失败")}}):(s=!0,wx.navigateTo({url:"../../login/login"}))}},cancelCollect:function(){if(0!=c){c=!1;var e=this;(l=t.getMemberId())?wx.request({url:t.globalData.comUrl+"tabs_delCollectionByObjId.action",data:{id:i,memberId:l},success:function(t){wx.showToast({title:"已取消收藏",icon:"success",duration:2e3}),e.getCollectStatus()},fail:function(e){t.hint("取消收藏失败")}}):(c=!0,wx.switchTab({url:"../../self/self"}))}},onShareAppMessage:function(){var t=this;return{title:t.data.detailInfo.title,path:"/pages/news/news-detail/news-detail?tabContentId="+t.data.detailInfo.id,success:function(t){},fail:function(t){}}}}); 
 			}); 	require("pages/news/news-detail/news-detail.js");
 		__wxRoute = 'pages/order/order';__wxRouteBegin = true; 	define("pages/order/order.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=t.globalData.projectInfo,e=t.globalData.customizeTabId,o="",r=!0,s=!1,i=0,n=0;Page({data:{addressInfo:"",orderList:[],proPrice:[],transportFee:[],totalPrice:0,tempTotalPrice:0,payType:"",myOrderInfo:{},productNames:"",remark:"",bill:"",openid:"",failReason:[],isSupport:!1,hasWxPay:!1,status:"",date:"",time:"",bookingInfo:{},branchCouponList:[],platformCouponList:[],hiddenCouponList:!0,isSelectBraCou:!1,curBranchCouponIdx:0,platformCouponInfo:{},coupontype:1,memberActivityId:"",branchInfoIds:"",activityId:"",mtype:t.globalData.ext.hotel,totalDays:1,nowDate:"",comeDateInfo:"",leaveDateInfo:"",offlinePayHidden:"",loadCount:1,isShowPrePay:!1,cardNo:"",preMoney:"",totalMoney:"",orderInfo:{},isWeb:t.globalData.isWeb},onLoad:function(o){this.setData({offlinePayHidden:t.globalData.topayHidden}),console.log(this.data.offlinePayHidden),a=t.globalData.projectInfo,e=t.globalData.customizeTabId,i=o.proPrice,console.log(t.globalData.moduleList),o.status&&this.setData({status:o.status}),o.activityId&&this.setData({activityId:o.activityId}),t.globalData.setting.hasWxPay?this.setData({hasWxPay:!0}):this.setData({hasWxPay:!1}),this.setData({totalPrice:0});var r=this,s=r.isShowpay();r.getUserInfo(),r.setData({isShowPrePay:s});var n=[];n="booking"==o.status?wx.getStorageSync("bookingDataList"+t.globalData.autoId):"51"==o.status||"52"==o.status||"3"==o.status||"6"==o.status?wx.getStorageSync("groupProDataList"+t.globalData.autoId):wx.getStorageSync("cartDataList"+t.globalData.autoId);for(var d=[],c=0;c<n.length;c++)if(n[c].isSelected){var l=n[c];r.data.transportFee[c]=(0).toFixed(2);for(var u=[],p=0,m=0;m<l.pro.length;m++)n[c].pro[m].isSelected&&(p+=parseFloat(n[c].pro[m].price)*parseInt(n[c].pro[m].count),u.push(n[c].pro[m]));r.data.proPrice=r.data.proPrice.concat(p),n[c].pro=u,d.push(n[c]),r.data.totalPrice+=r.data.transportFee[c],r.data.branchInfoIds+=n[c].branchInfoId+","}r.data.branchInfoIds=r.data.branchInfoIds+"-1,-2",n=d,r.setData({branchInfoIds:r.data.branchInfoIds,orderList:n,transportFee:r.data.transportFee,proPrice:r.data.proPrice,totalPrice:(parseFloat(r.data.totalPrice)+parseFloat(i)).toFixed(2),tempTotalPrice:(parseFloat(r.data.totalPrice)+parseFloat(i)).toFixed(2)}),r.getAddressInfo().then(function(){r.data.addressInfo.contactPerson?r.getTransportFee():"51"!=r.data.status&&"52"!=r.data.status&&"3"!=r.data.status&&"6"!=r.data.status?r.getCouponInfo(r.data.orderList):wx.hideLoading()})},onShow:function(){var t=this;t.getComeAndGoTime(),1!=t.data.loadCount?t.getAddressInfo().then(function(a){t.setData({tempTotalPrice:i}),1==t.data.mtype&&t.setData({tempTotalPrice:t.data.tempTotalPrice*t.data.totalDays}),a.id?t.getTransportFee():("51"!=t.data.status&&"52"!=t.data.status&&"3"!=t.data.status&&"6"!=t.data.status&&t.getCouponInfo(t.data.orderList),wx.hideLoading())}):t.setData({loadCount:t.data.loadCount+1})},isShowpay:function(){for(var a=t.globalData.moduleList,e=0;e<a.length;e++)if(a[e].tabTitle&&"电子会员卡"===a[e].tabTitle)return!0;return!1},getUserInfo:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getMember.action",data:{memberId:t.getMemberId(),customizetabId:e.LynxApplyFor_About_Merchant,checkBranch:1},success:function(e){var o=t.getJsonData(e.data);console.log(o),a.setData({cardNo:o.cardNo,preMoney:o.preMoney})},fail:function(){t.hint()}})},getComeAndGoTime:function(){if(1==this.data.mtype){var a=wx.getStorageSync("comeDate"+t.globalData.autoId),e=wx.getStorageSync("leaveDate"+t.globalData.autoId),o=new Date;if(a&&e)this.setData({nowDate:o.getMonth()+1+"月"+o.getDate()+"日",comeDateInfo:a,leaveDateInfo:e,totalDays:t.DateDiff(e.re,a.re)});else{var r=o.getFullYear()+"-"+(o.getMonth()+1)+"-"+o.getDate(),s=t.calculatDateBydays(r,1),i=s.split("-");a={date:o.getMonth()+1+"月"+o.getDate()+"日",week:t.getWeek(r)},e={date:i[1]+"月"+i[2]+"日",week:t.getWeek(s)},this.setData({nowDate:o.getMonth()+1+"月"+o.getDate()+"日",comeDateInfo:a,leaveDateInfo:e})}}},getAddressInfo:function(){var a=this;return wx.showLoading({title:"加载中..."}),new Promise(function(e,o){wx.request({url:t.globalData.comUrl+"tabs_getCustomerAddressList.action",data:{current:1,memberId:t.getMemberId()},success:function(o){var r=t.getJsonData(o.data);if(r.pageList.length>0){for(var s=0;s<r.pageList.length;s++)if(1==r.pageList[s].isdefault){a.setData({addressInfo:r.pageList[s]}),e(r.pageList[s]);break}}else a.setData({addressInfo:""}),e("")}})})},remarkInput:function(t){this.setData({remark:t.detail.value})},billInput:function(t){this.setData({bill:t.detail.value})},getCouponInfo:function(a){var e=this;wx.showToast({title:"加载中...",icon:"loading",duration:1e4,mask:!0}),wx.request({url:t.globalData.comUrl+"act_getMemberActivityListByBranch.action",data:{memberId:t.getMemberId(),customizetabId:t.getCustomizeId("Activity"),memberStatus:0,status:0,branchInfoIds:e.data.branchInfoIds},success:function(o){wx.hideToast(),e.data.platformCouponList=[];var r=t.getJsonData(o.data);console.log(r);for(var s=0;s<a.length;s++)a[s].couponList=[];if(r.length){for(var i=0;i<r.length;i++){var n=r[i];"1"==n.type?(n.amountReachedName="满"+n.amountReached+"元可用",n.tipName="满"+n.amountReached+"减"+n.discountAmount):n.tipName="优惠"+n.discountAmount+"元",n.tip=n.instructure&&""!=n.instructure&&"null"!=n.instructure?n.instructure:"",n.beginTime=n.beginTime.substring(0,10),n.endTime=n.endTime.substring(0,10);for(var d=0;d<a.length;d++){for(var c=0,l=0;l<a[d].pro.length;l++)c+=a[d].pro[l].price*a[d].pro[l].count;a[d].branchInfoId==n.branchInfoId&&c>=n.amountReached&&(a[d].couponList=a[d].couponList.concat(n))}if(-1==n.branchInfoId||-2==n.branchInfoId)for(var u=0;u<e.data.proPrice.length;u++)if(n.amountReached<=e.data.proPrice[u]){e.data.platformCouponList=e.data.platformCouponList.concat(n);break}}var p=e.data.tempTotalPrice,m="";if(a.length>0)for(var f=0;f<a.length;f++){var h=0,g=0;if(a[f].couponList.length>0){for(var I=0;I<a[f].couponList.length;I++){a[f].couponList[I].isSelected=!1;var b=a[f].couponList[I].discountAmount;b>g&&(h=I,g=b)}var y=a[f].couponList[h].memberActivityId.split(",");m+=y[0]+",",a[f].couponList[h].isSelected=!0,a[f].couponInfo=a[f].couponList[h].tipName,a[f].memberActivityId=y[0],a[f].couponPrice=a[f].couponList[h].discountAmount}else m+=",",a[f].couponPrice=0,a[f].memberActivityId="";a[f].couponPrice>0&&e.setData({isSelectBraCou:!0}),p-=a[f].couponPrice}if(!e.data.isSelectBraCou){for(var v=0,D=0,L=0;L<e.data.platformCouponList.length;L++)if(e.data.platformCouponList[L].isSelected=!1,e.data.platformCouponList[L].discountAmount>D)for(var w=0;w<e.data.proPrice.length;w++)v=L,D=e.data.platformCouponList[L].discountAmount;if(e.data.platformCouponList.length>0){if("-2"==e.data.platformCouponList[v].branchInfoId){var C=e.data.platformCouponList[v].memberActivityId.split(",");e.data.platformCouponList[v].memberActivityId=C[0]}m=e.data.platformCouponList[v].branchInfoId+e.data.platformCouponList[v].memberActivityId+",",e.data.platformCouponList[v].isSelected=!0,p-=e.data.platformCouponList[v].discountAmount,e.setData({platformCouponInfo:{tipName:e.data.platformCouponList[v].tipName,couponPrice:e.data.platformCouponList[v].discountAmount}})}}e.setData({totalPrice:parseFloat(p).toFixed(2),orderList:a,platformCouponList:e.data.platformCouponList,memberActivityId:m.substring(0,m.length-1)}),console.log(e.data.memberActivityId)}else e.setData({totalPrice:e.data.tempTotalPrice})},fail:function(){t.hint()}})},branchCoupontap:function(t){n=t.currentTarget.dataset.index,this.setData({coupontype:1,curBranchCouponIdx:n,hiddenCouponList:!1,branchCouponList:this.data.orderList[n].couponList})},closebranchCoupon:function(){this.setData({hiddenCouponList:!0})},selectCoupon:function(t){var a="";if(1==this.data.coupontype){for(var e=this.data.orderList[n],o=this.data.tempTotalPrice,r=0;r<e.couponList.length;r++)e.couponList[r].isSelected=!1;if(""===t.currentTarget.dataset.cidx)e.couponInfo="不使用优惠",e.couponPrice=0,e.memberActivityId="";else{var s=e.couponList[t.currentTarget.dataset.cidx].memberActivityId.split(",");e.couponList[t.currentTarget.dataset.cidx].isSelected=!0,e.couponInfo=e.couponList[t.currentTarget.dataset.cidx].tipName,e.couponPrice=e.couponList[t.currentTarget.dataset.cidx].discountAmount,e.memberActivityId=s[0]}this.data.orderList[n]=e,this.data.isSelectBraCou=!1;for(var i=0;i<this.data.orderList.length;i++)o-=this.data.orderList[i].couponPrice,this.data.orderList[i].couponPrice>0&&(this.data.isSelectBraCou=!0),a+=this.data.orderList[i].memberActivityId+",";if(!this.data.isSelectBraCou){for(var d=0,c=0,l=0;l<this.data.platformCouponList.length;l++){var u=this.data.platformCouponList[l];this.data.platformCouponList[l].isSelected=!1;var p=u.discountAmount;p>c&&(d=l,c=p)}this.data.platformCouponList.length>0?(a=this.data.platformCouponList[d].branchInfoId+this.data.platformCouponList[d].memberActivityId+",",this.data.platformCouponList[d].isSelected=!0,o-=this.data.platformCouponList[d].discountAmount,this.setData({platformCouponList:this.data.platformCouponList,platformCouponInfo:{tipName:this.data.platformCouponList[d].tipName,couponPrice:this.data.platformCouponList[d].discountAmount}})):a=","}this.setData({orderList:this.data.orderList,branchCouponList:this.data.orderList[n].couponList,totalPrice:o,isSelectBraCou:this.data.isSelectBraCou,memberActivityId:a.substring(0,a.length-1)})}else{for(var m=t.currentTarget.dataset.cidx,f=0;f<this.data.platformCouponList.length;f++)this.data.platformCouponList[f].isSelected=!1;if(""===m)this.setData({memberActivityId:"",platformCouponList:this.data.platformCouponList,totalPrice:this.data.tempTotalPrice,platformCouponInfo:{tipName:"不使用优惠",couponPrice:0,memberActivityId:""}});else{this.data.platformCouponList[m].isSelected=!0;var h=this.data.platformCouponList[m],g=parseFloat(this.data.tempTotalPrice)-parseFloat(h.discountAmount);console.log(h),this.setData({totalPrice:g.toFixed(2),platformCouponList:this.data.platformCouponList,memberActivityId:h.branchInfoId+h.memberActivityId,platformCouponInfo:{tipName:h.tipName,couponPrice:h.discountAmount}})}}this.setData({hiddenCouponList:!0}),console.log(this.data.memberActivityId)},platformCouTap:function(){this.data.isSelectBraCou?wx.showModal({title:"",content:"商家和平台优惠券不可同时用，请先取消商家优惠券"}):this.setData({coupontype:2,hiddenCouponList:!1})},selectBookingTime:function(){wx.navigateTo({url:"calendar/calendar"})},getTransportFee:function(){var e=this;if(!s&&""!=e.data.addressInfo.contactPerson){for(var o="",r="",i="",n=0;n<e.data.orderList.length;n++)for(var d=0;d<e.data.orderList[n].pro.length;d++)o+=e.data.orderList[n].pro[d].productId+"=",r+=e.data.orderList[n].pro[d].moduleId+"=",i+=e.data.orderList[n].pro[d].count+"=";o=o.substring(0,o.length-1),r=r.substring(0,r.length-1),i=i.substring(0,i.length-1),wx.request({url:t.globalData.comUrl+"tabs_culculateTransportFee.action",data:{appId:a.appId,productIds:o,cityId:e.data.addressInfo.city,modelIds:r,amounts:i},success:function(a){for(var o=t.getJsonData(a.data),r=[],i=0;i<o.data.length;i++)r[i]=o.data[i].code,e.data.transportFee[i]=parseFloat(o.data[i].totalTransportFee).toFixed(2),e.data.tempTotalPrice=parseFloat(e.data.tempTotalPrice)+parseFloat(e.data.transportFee[i]);"0"==o.isSuccess?e.setData({transportFee:e.data.transportFee,tempTotalPrice:parseFloat(e.data.tempTotalPrice).toFixed(2),isSupport:!1,failReason:r}):e.setData({transportFee:e.data.transportFee,tempTotalPrice:parseFloat(e.data.tempTotalPrice).toFixed(2),isSupport:!0,failReason:r}),"51"!=e.data.status&&"52"!=e.data.status&&e.getCouponInfo(e.data.orderList),s=!1,wx.hideLoading()},fail:function(){t.hint("获取运费失败"),wx.hideLoading()}})}},toAddress:function(){wx.navigateTo({url:"../address/address"})},wxPay:function(a){var e=this;1==a.currentTarget.dataset.type?e.setData({payType:4}):e.setData({payType:2}),e.data.addressInfo.contactPerson?r&&e.data.isSupport?(r=!1,this.submitOrder()):e.data.isSupport||t.hint("订单中有商品不支持配送"):t.hint("请填写收货地址")},offlinePay:function(){var a=this;a.setData({payType:3}),a.data.addressInfo.contactPerson?r&&a.data.isSupport?(r=!1,this.submitOrder()):a.data.isSupport||t.hint("订单中有商品不支持配送"):t.hint("请填写收货地址")},submitOrder:function(){var e=this;""!=e.data.addressInfo.contactPerson||"booking"==e.data.status?"51"==e.data.status||"52"==e.data.status?wx.request({url:t.globalData.comUrl+"activityProduct_checkActivityStatus.action",data:{appId:a.appId,productId:e.data.orderList[0].pro[0].productId,activityId:e.data.activityId},success:function(a){0==a.data.code?(r=!0,t.hint("活动已经结束")):2==a.data.code?(r=!0,t.hint("产品已经退出该活动")):e.startSubmitOrder()}}):"3"==e.data.status?wx.request({url:t.globalData.comUrl+"activityProduct_checkActivityStatus.action",data:{appId:a.appId,productId:e.data.orderList[0].pro[0].productId,activityId:e.data.activityId,memberId:t.getMemberId()},success:function(a){0==a.data.code?t.hint("活动已经结束"):2==a.data.code?t.hint("产品已经退出该活动"):e.startSubmitOrder()}}):e.startSubmitOrder():wx.showModal({title:"提示",content:"请填写收货地址",showCancel:!1})},startSubmitOrder:function(){var e=this;wx.showToast({title:"正在提交...",icon:"loading",duration:1e4,mask:!0});var s={},i=[];if("booking"==e.data.status)i=wx.getStorageSync("bookingData"+t.globalData.autoId);else if("51"==e.data.status||"52"==e.data.status||"3"==e.data.status||"6"==e.data.status)i=wx.getStorageSync("groupProData"+t.globalData.autoId);else{i=wx.getStorageSync("cartData"+t.globalData.autoId);for(var n=[],d=0;d<i.length;d++)i[d].isSelected&&n.push(i[d]);i=n}for(var c=function(t){for(var a,e=[],o={},r=0;null!=(a=t[r]);r++)o[a.productId]||(e.push(a.productId),o[a.productId]=!0);return e}(i),l=[],u=0;u<c.length;u++)for(var p=[],m={},f=0;f<i.length;f++)i[f].productId==c[u]&&(p.push(i[f]),m.productId=i[f].productId,m.productName=i[f].productName,m.pro=p,l[u]=m);for(var h="",g="",I="",b="",y="",v="",D="",L=0;L<l.length;L++){h+=l[L].productId+"=",g+=l[L].productName+",";for(var w=0;w<l[L].pro.length;w++)h+=l[L].pro[w].moduleId+",",I+=l[L].pro[w].productCode+",",v+=l[L].pro[w].count+",",y+=l[L].pro[w].price+",",b+=l[L].pro[w].modelName+",";h=h.substring(0,h.length-1)+";",v=v.substring(0,v.length-1),y=y.substring(0,y.length-1),b=b.substring(0,b.length-1),v+="=",y+="=",b+="="}for(var C=0;C<e.data.orderList.length;C++)D+=e.data.orderList[C].branchInfoId+",";s.productIds=h.substring(0,h.length-1),s.productNames=g.substring(0,g.length-1),s.productCodes=I.substring(0,I.length-1),s.amount=v.substring(0,v.length-1),s.prices=y.substring(0,y.length-1),s.modelName=b.substring(0,b.length-1),s.branchInfoIds=D.substring(0,D.length-1),s.businessId=c,o=wx.getStorageSync("memberId"+t.globalData.autoId),s.projectId=a.appId,s.memberId=o,e.data.addressInfo?(s.personName=e.data.addressInfo.contactPerson,s.personMobilePhone=e.data.addressInfo.mobilePhone,s.personAddress=e.data.addressInfo.proName+e.data.addressInfo.cityName+e.data.addressInfo.disName+e.data.addressInfo.address):(s.personName="暂无",s.personMobilePhone="暂无",s.personAddress="暂无"),(e.data.mtype=1)&&(s.days=e.data.totalDays),s.postCode=e.data.addressInfo.postCode,s.payType=e.data.payType,s.totalMoney=e.data.tempTotalPrice,s.transportCost=e.data.transportFee.join(","),s.memberActivityId=e.data.memberActivityId,s.remark=e.data.remark,s.invoiceTitle=e.data.bill,"6"==e.data.status&&(s.isDistribute="1"),"51"!=e.data.status&&"52"!=e.data.status||(s.groupOrderNo="51"==e.data.status?"0":e.data.orderList[0].groupOrderNo),e.setData({productNames:s.productNames,totalMoney:s.totalMoney,orderInfo:s}),console.log(s),wx.request({url:t.globalData.comUrl+"tabs_saveTSCBranchInfoOrderWithQuantity.action",data:s,success:function(a){var o=t.getJsonData(a.data);e.setData({myOrderInfo:o}),wx.showToast({title:"订单提交成功",icon:"success",duration:2e3,mask:!0,success:function(){if("booking"!=e.data.status&&"51"!=e.data.status&&"52"!=e.data.status&&"3"!=e.data.status&&"6"!=e.data.status){for(var a=wx.getStorageSync("cartData"+t.globalData.autoId),s=[],i=0;i<a.length;i++)a[i].isSelected||s.push(a[i]);wx.setStorageSync("cartData"+t.globalData.autoId,s);for(var n=wx.getStorageSync("cartDataList"+t.globalData.autoId),d=[],c=0;c<n.length;c++)if(!n[c].isSelected){for(var l=[],u=0;u<n[c].pro.length;u++)n[c].pro[u].isSelected||l.push(n[c].pro[u]);n[c].pro=l,d.push(n[c])}wx.setStorageSync("cartDataList"+t.globalData.autoId,d)}3==e.data.payType?(r=!0,wx.redirectTo({url:"../self/myOrder/myOrder"})):(r=!0,wx.showToast({title:"加载中...",icon:"loading",duration:1e4,mask:!0}),"https://beta-mg.vzmapp.com/wc_mg/"==t.globalData.comUrl?e.payTest(o):4==e.data.payType?e.data.isWeb?e.onLinePay(o):e.pay(o):2==e.data.payType&&e.prePay())}})},fail:function(){r=!0,t.hint("订单提交失败")}})},payTest:function(t){wx.request({url:"https://beta-mg.vzmapp.com/WechatAlipay/PayNotifcationTest",data:{attach:t.orderNO+"_"+a.appId,total_fee:1,transaction_id:1,trade_type:"JSAPI"},success:function(t){wx.showToast({title:"支付成功",icon:"success",duration:2e3,mask:!0}),setTimeout(function(){wx.redirectTo({url:"../self/myOrder/myOrder?index=1"})},2e3)}})},prePay:function(){var a=this;a.data.preMoney<a.data.totalMoney?wx.showToast({title:"余额不足！",icon:"none",duration:2e3,mask:!0}):(wx.showToast({title:"加载中...",icon:"loading",duration:1e4,mask:!0}),wx.request({url:t.globalData.paymentUrl+"/WechatAlipay/PrePayNotifcation",data:{memberId:t.getMemberId(),projectId:a.data.orderInfo.projectId,nonce_str:"lfksf"+Math.round(1e5*Math.random()),body:a.data.orderInfo.productName,attach:a.data.myOrderInfo.orderNO+"_"+a.data.orderInfo.projectId+"%2B",out_trade_no:a.data.myOrderInfo.orderNO+(new Date).valueOf(),total_fee:(100*a.data.totalMoney).toFixed(0),trade_type:"",device_info:"156151"},success:function(t){console.log(t.data),wx.hideToast(),"success"==t.data?wx.showToast({title:"支付成功",icon:"success",duration:2e3,mask:!0}):wx.showModal({title:"支付失败",showCancel:!1,success:function(t){t.confirm&&a.onShow()}})}}))},pay:function(e){var o=this;wx.login({success:function(r){r.code?wx.request({url:t.globalData.paymentUrl+"/WechatAlipay/MiniPayService2?jsoncallback=?",data:{projectId:a.appId,nonce_str:"lfksf"+Math.round(1e5*Math.random()),body:o.data.productNames,attach:e.orderNO+"_"+a.appId,out_trade_no:e.orderNO+(new Date).valueOf(),total_fee:(100*o.data.totalPrice).toFixed(0),trade_type:"JSAPI",device_info:"888",code:r.code},success:function(a){if(wx.hideToast(),""!=a.data){var e=o.getJsonData(a.data);wx.requestPayment({timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:"prepay_id="+e.prepay_id,signType:"MD5",paySign:e.sign,success:function(a){"booking"==o.data.status?wx.request({url:t.globalData.comUrl+"tabs_saveFlexiForm",data:o.data.bookingInfo,success:function(a){1==o.data.mtype&&(wx.removeStorageSync("come\b\bDate"+t.globalData.autoId),wx.removeStorageSync("leaveDate"+t.globalData.autoId)),wx.showToast({title:"预约成功",icon:"success",duration:2e3,mask:!0}),setTimeout(function(){wx.redirectTo({url:"../self/myOrder/myOrder"})},2e3)},fail:function(){t.hint("预约失败")}}):(wx.showToast({title:"支付成功",icon:"success",duration:2e3,mask:!0}),setTimeout(function(){wx.redirectTo({url:"../self/myOrder/myOrder?index=1"})},2e3))},fail:function(t){wx.showModal({title:"支付失败",showCancel:!1,success:function(t){t.confirm&&wx.redirectTo({url:"../self/myOrder/myOrder"})}})}})}else wx.showModal({title:"支付失败",showCancel:!1,success:function(t){t.confirm&&wx.redirectTo({url:"../self/myOrder/myOrder"})}})}}):t.hint("获取用户登录态失败！"+r.errMsg)}})},getJsonData:function(t){return JSON.parse(t.substring(1,t.length-1))},bindDateChange:function(t){console.log("picker发送选择改变，携带值为",t.detail.value),this.setData({date:t.detail.value})},bindTimeChange:function(t){console.log("picker发送选择改变，携带值为",t.detail.value),this.setData({time:t.detail.value})},formSubmit:function(a){var e=this;console.log(a.detail.value);var o=/^1[3|4|5|8|7][0-9]\d{4,8}$/;if(1!=e.data.mtype){if(""==a.detail.value.date)return void t.hint("请选择预约日期!");if(""==a.detail.value.time)return void t.hint("请选择预约时间!")}if(""!=a.detail.value.name&&0!==a.detail.value.name.trim().length)if(""!=a.detail.value.phone)if(o.test(a.detail.value.phone)){e.setData({payType:4});var s="",i="";1==e.data.mtype?""==a.detail.value.remarks?(s="姓名,电话,入住日期,离店日期",i=a.detail.value.name+","+a.detail.value.phone+","+e.data.comeDateInfo.re+","+e.data.leaveDateInfo.re):(s="姓名,电话,入住日期,离店日期,留言",i=a.detail.value.name+","+a.detail.value.phone+","+e.data.comeDateInfo.re+","+e.data.leaveDateInfo.re+","+a.detail.value.remarks):""==a.detail.value.remarks?(s="姓名,电话,预约日期,预约时间",i=a.detail.value.name+","+a.detail.value.phone+","+a.detail.value.date+","+a.detail.value.time):(s="姓名,电话,预约日期,预约时间,留言",i=a.detail.value.name+","+a.detail.value.phone+","+a.detail.value.date+","+a.detail.value.time+","+a.detail.value.remarks);var n=e.data.orderList[0].pro[0],d={projectId:t.globalData.projectInfo.appId,customizeTabId:t.globalData.customizeTabId["Flexi-Form-Booking"],token:"html5",fieldKey:s,fieldValue:i,productName:n.productName+" "+n.modelName,branchName:e.data.orderList[0].branchName,branchId:e.data.orderList[0].branchInfoId,memberId:t.getMemberId()};this.setData({bookingInfo:d}),console.log(e.data.orderList),console.log(n),console.log(this.data.bookingInfo),r&&(r=!1,e.submitOrder())}else t.hint("请输入正确的电话号码");else t.hint("请输入电话号码!");else t.hint("预约人姓名不能为空!")},onLinePay:function(e){var o=this,r={myOrderInfo:e,projectInfo:a,productNames:o.data.productNames,totalPrice:o.data.totalPrice,paymentUrl:t.globalData.paymentUrl};window.localStorage.setItem("payInfos",JSON.stringify(r));var s=-1!=window.navigator.userAgent.toLowerCase().indexOf("micromessenger"),i=window.location.href.split("#")[0]+"paymament.html";s&&(i="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+t.globalData.wxAppId+"&redirect_uri="+encodeURIComponent(i)+"&response_type=code&scope=snsapi_userinfo&state=12345#wechat_redirect"),window.location.href=i}}); 
 			}); 	require("pages/order/order.js");
 		__wxRoute = 'pages/address/address';__wxRouteBegin = true; 	define("pages/address/address.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),t=!1,e="";Page({data:{styleConfig:a.globalData.styleConfig,addressList:[],provincArray:[],cityArray:[],areaArray:[],provincIndex:"",cityIndex:"",areaIndex:"",provincId:"",cityId:"",areaId:"",addressInfo:{},provinceChange:!1,cityChange:!1,isHidden:!0},onLoad:function(){this.getAddressList(),this.getProvince()},getAddressList:function(){var t=this;wx.request({url:a.globalData.comUrl+"tabs_getCustomerAddressList.action",data:{current:1,memberId:a.getMemberId()},success:function(e){console.log(e.data);var i=a.getJsonData(e.data);t.setData({addressList:i.pageList}),wx.hideLoading()}})},getAddressInfo:function(){this.setData({addressInfo:wx.getStorageSync("addressInfo"+a.globalData.autoId)});var t=this.data.addressInfo.indexList[0];this.setData({provincIndex:t,provincId:this.data.provincArray[t].provinceId}),this.getCity(this.data.provincId)},provinceChange:function(a){var t=this;t.setData({provincIndex:a.detail.value,provincId:t.data.provincArray[a.detail.value].provinceId,cityIndex:"",areaIndex:"",provinceChange:!0}),t.getCity(t.data.provincId)},cityChange:function(a){var t=this;t.setData({cityIndex:a.detail.value,cityId:t.data.cityArray[a.detail.value].cityId,areaIndex:"",cityChange:!0}),t.getArea(t.data.cityId)},areaChange:function(a){var t=this;this.setData({areaIndex:a.detail.value,areaId:t.data.areaArray[a.detail.value].districtId})},getProvince:function(){var t=this;wx.request({url:a.globalData.comUrl+"tabs_getProvinceList.action",success:function(e){t.setData({provincArray:a.getJsonData(e.data)});wx.getStorageSync("addressInfo"+a.globalData.autoId)},fail:function(){a.hint("获取省份失败！")}})},getCity:function(t){var e=this;wx.request({url:a.globalData.comUrl+"tabs_getCityByProvinceId.action",data:{provinceId:t},success:function(t){if(e.setData({cityArray:a.getJsonData(t.data)}),!e.data.provinceChange){var i=e.data.addressInfo.indexList[1];e.setData({cityIndex:i,cityId:e.data.cityArray[i].cityId}),e.getArea(e.data.cityId)}},fail:function(){a.hint("获取对应市区失败！")}})},getArea:function(t){var e=this;wx.request({url:a.globalData.comUrl+"tabs_getDistrictByCityId.action",data:{cityId:t},success:function(t){if(e.setData({areaArray:a.getJsonData(t.data)}),!e.data.cityChange){var i=e.data.addressInfo.indexList[2];e.setData({areaIndex:i,areaId:e.data.areaArray[i].districtId})}},fail:function(){a.hint("获取对应区域失败！")}})},addAddress:function(){this.setData({isHidden:!1,provincIndex:"",cityIndex:"",areaIndex:""})},editTap:function(a){t=!0,e=a.currentTarget.dataset.info.id,this.setData({isHidden:!1,addressInfo:{name:a.currentTarget.dataset.info.contactPerson,phone:a.currentTarget.dataset.info.mobilePhone,address:a.currentTarget.dataset.info.address},provincIndex:"",cityIndex:"",areaIndex:""})},deleteTap:function(t){var e=this;console.log(t.currentTarget.dataset.info),wx.showModal({content:"确定要删除该地址吗",success:function(i){i.confirm&&(wx.showLoading({title:""}),wx.request({url:a.globalData.comUrl+"tabs_deleteCustomerAddress.action",data:{id:t.currentTarget.dataset.info.id},success:function(a){e.getAddressList()}}))}})},closeBtn:function(){t=!1,this.setData({isHidden:!0})},setDefault:function(t){var e=this;wx.request({url:a.globalData.comUrl+"tabs_setDefaultCustomerAddress.action",data:{id:t.currentTarget.dataset.id,memberId:a.getMemberId()},success:function(t){console.log(t.data);a.getJsonData(t.data);e.getAddressList()}})},addressSubmit:function(i){var d=this,s=/^1[3|4|5|8|7][0-9]\d{4,8}$/;if(""!=i.detail.value.name)if(""!=i.detail.value.phone)if(s.test(i.detail.value.phone))if(""!=d.data.provincIndex)if(""!=d.data.cityIndex)if(""!=d.data.areaId)if(""!=i.detail.value.address){var n={address:i.detail.value.address,area:d.data.areaId,city:d.data.cityId,province:d.data.provincId,contactPerson:i.detail.value.name,memberId:a.getMemberId(),mobilePhone:i.detail.value.phone,isdefaults:0};t&&(n.id=e),wx.request({url:a.globalData.comUrl+"tabs_addCustomerAddress.action",data:n,success:function(a){t=!1,d.getAddressList(),d.setData({isHidden:!0})}})}else a.hint("请输入详细地址");else a.hint("请输入省市区");else a.hint("请输入省市区");else a.hint("请输入省市区");else a.hint("请输入正确的手机号码");else a.hint("请输入手机号码");else a.hint("收货人不能为空！")}}); 
 			}); 	require("pages/address/address.js");
 		__wxRoute = 'pages/login/login';__wxRouteBegin = true; 	define("pages/login/login.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a="",e="",o="";Page({data:{styleConfig:t.globalData.styleConfig},onLoad:function(a){o=t.globalData.projectInfo,wx.hideToast()},logintap:function(){if(""!=a)if(""!=e){var n=this;wx.request({url:t.globalData.comUrl+"tabs_memberLogin.action",data:{projectId:o.appId,userName:a,password:e},success:function(a){var e=t.getJsonData(a.data);wx.setStorageSync("scoreRule"+t.globalData.autoId,e.scoreRule),wx.setStorageSync("memberId"+t.globalData.autoId,e.id),wx.setStorageSync("merchantId"+t.globalData.autoId,e.merchantId),"0"==e.status?t.hint("账号或密码不正确"):(n.setData({memberId:e.id,userInfo:e}),wx.navigateBack({delta:1}))},fail:function(a){t.hint()}})}else t.hint("密码不能为空！");else t.hint("登录账号不能为空！")},forgetPwd:function(){wx.navigateTo({url:"forget/forget"})},register:function(){wx.navigateTo({url:"register/register"})},phoneInput:function(t){a=t.detail.value},pwdInput:function(t){e=t.detail.value}}); 
 			}); 	require("pages/login/login.js");
 		__wxRoute = 'pages/login/register/register';__wxRouteBegin = true; 	define("pages/login/register/register.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="",e="",a="",i="",n="",s=getApp();Page({data:{styleConfig:s.globalData.styleConfig},phoneInput:function(e){t=e.detail.value},emailInput:function(t){e=t.detail.value},pwdInput:function(t){a=t.detail.value},repwdInput:function(t){i=t.detail.value},userInput:function(t){n=t.detail.value},register:function(){var o=/^1[3|4|5|8|7][0-9]\d{4,8}$/,l=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,r=/^(\w){6,15}$/,u=/^.{1,20}$/;if(""!=t)if(o.test(t))if(""!=e)if(l.test(e))if(""!=a)if(""!=i)if(r.test(a))if(a==i)if(""!=n)if(u.test(n)){var c=this;wx.request({url:s.globalData.comUrl+"tabs_memberRegistration.action",data:{appId:s.globalData.projectInfo.appId,mobilePhone:t,surname:n,email:e,password:a},success:function(t){var e=s.getJsonData(t.data);console.log(e),"0"==e.status?c.warn(e.reason):(wx.showToast({title:"注册成功",icon:"success",duration:2e3}),wx.setStorageSync("isLogin",!0),wx.setStorageSync("memberId"+s.globalData.autoId,e.memberId),setTimeout(function(){try{wx.navigateBack({delta:2})}catch(t){console.log(t),wx.switchTab({url:"/pages/index/index"})}},2e3))},fail:function(t){s.hint()}})}else this.warn("用户名不能超过20个字符");else this.warn("请输入用户名");else this.warn("两次输入密码不一致");else this.warn("密码需由6-15个字母、数字组成");else this.warn("请再次输入密码");else this.warn("请输入密码");else this.warn("邮箱格式有误");else this.warn("邮箱不能为空");else this.warn("请输入正确的手机号码");else this.warn("手机号不能为空")},warn:function(t){wx.showToast({title:t,image:"../../../img/warn.png",duration:2e3})}}); 
 			}); 	require("pages/login/register/register.js");
 		__wxRoute = 'pages/login/forget/forget';__wxRouteBegin = true; 	define("pages/login/forget/forget.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a="";Page({data:{styleConfig:t.globalData.styleConfig},sure:function(){var e=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;if(""!=a)if(e.test(a)){var s=this;wx.request({url:t.globalData.comUrl+"tabs_memRetrievePwd.action",data:{appId:t.globalData.projectInfo.appId,email:a},method:"GET",success:function(a){var e=t.getJsonData(a.data);console.log(e),"0"==e.status?s.tips(e.reason):s.success("提交成功")},fail:function(a){t.hint()}})}else this.warn("邮箱格式有误");else this.warn("邮箱不能为空")},emailInput:function(t){a=t.detail.value},tips:function(t){wx.showToast({title:t,image:"../../../img/warn.png",duration:2e3})},success:function(t){wx.showToast({title:t,icon:"success",duration:2e3})},warn:function(t){wx.showToast({title:t,image:"../../../img/warn.png",duration:2e3})}}); 
 			}); 	require("pages/login/forget/forget.js");
 		__wxRoute = 'pages/publicity/publicity';__wxRouteBegin = true; 	define("pages/publicity/publicity.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{videoList:[]},onLoad:function(t){this.getVideoList(),wx.setNavigationBarTitle({title:"企业宣传"})},getVideoList:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getVideoGalleryList.action",data:{appId:t.globalData.projectInfo.appId,customizeTabId:t.globalData.customizeTabId.Video_Gallery,isNeedHttps:0},success:function(e){var i=t.getJsonData(e.data);a.setData({videoList:i})},fail:function(){}})}}); 
 			}); 	require("pages/publicity/publicity.js");
 		__wxRoute = 'pages/publicity/publicity-detail/publicity-detail';__wxRouteBegin = true; 	define("pages/publicity/publicity-detail/publicity-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{video:"",details:"",netWorkType:!1},onLoad:function(e){var t=this;t.setData({video:e.video,details:e.briefDescription}),wx.getNetworkType({success:function(e){t.setData({netWorkType:e.networkType})}})},onShow:function(){}}); 
 			}); 	require("pages/publicity/publicity-detail/publicity-detail.js");
 		__wxRoute = 'pages/position/position';__wxRouteBegin = true; 	define("pages/position/position.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{cityList:[],initialList:["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"],hotCityList:["北京"],curCity:"",winHeight:"",toView:""},onLoad:function(){var a=this;wx.getSystemInfo({success:function(t){a.setData({winHeight:t.windowHeight})}}),this.setData({curCity:t.globalData.city.cityName}),this.getHotCity(),this.getAllcity()},getHotCity:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_gethotCityList.action",success:function(i){var e=t.getJsonData(i.data);a.setData({hotCityList:e})}})},getAllcity:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getCityByPinyin.action",success:function(i){var e=t.getJsonData(i.data)[0],s=[];for(var c in e)s.push(e[c]);a.setData({cityList:s})}})},initialtap:function(t){this.setData({toView:t.currentTarget.dataset.init})},citytap:function(a){0==a.currentTarget.dataset.info?(t.globalData.city={cityName:"全国"},this.setData({curCity:"全国"})):(t.globalData.city=a.currentTarget.dataset.info,this.setData({curCity:a.currentTarget.dataset.info.cityName})),wx.navigateBack({beta:1})}}); 
 			}); 	require("pages/position/position.js");
 		__wxRoute = 'pages/about-us/about-us';__wxRouteBegin = true; 	define("pages/about-us/about-us.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=require("../../utils/wxParse/wxParse.js"),e=t.globalData.customizeTabId;Page({data:{styleConfig:t.globalData.styleConfig,longitude:"",latitude:"",markers:[{id:0,latitude:"",longitude:"",width:20,height:20}],auInfo:{},imageArr:[]},onLoad:function(){var i=this;wx.request({url:t.globalData.comUrl+"tabs_getAboutMerchant.action",data:{customizetabId:e["About-Merchant"]},success:function(e){var d=t.getJsonData(e.data);a.wxParse("detailDescription","html",d.detailDescription,i,10);for(var o=[d.pic1,d.pic2,d.pic3,d.pic4,d.pic5],u=[],n=0;n<o.length;n++)o[n]&&u.push(o[n]);i.setData({auInfo:d,longitude:d.gdLongitude,latitude:d.gdLatitude,imageArr:u,markers:[{id:0,latitude:d.gdLatitude,longitude:d.gdLongitude,width:20,height:30}]})},fail:function(){t.hint()}})},toPosition:function(){var t=this;wx.openLocation({latitude:Number(t.data.latitude),longitude:Number(t.data.longitude),name:t.data.auInfo.name,address:t.data.auInfo.address,scale:28})}}); 
 			}); 	require("pages/about-us/about-us.js");
 		__wxRoute = 'pages/join/join';__wxRouteBegin = true; 	define("pages/join/join.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=!0,e=getApp(),t="",n="",i=require("../../utils/wxParse/wxParse.js");Page({data:{hiddenAgreement:!0,isRead:!1,price:0,branchInfo:{}},onLoad:function(){var a=this;t=e.globalData.projectInfo,n=e.globalData.customizeTabId,a.getUserInfo(),wx.request({url:e.globalData.comUrl+"tabs_getZXAgreement.action",data:{customizeTabId:n.Member},success:function(t){var n=e.getJsonData(t.data);i.wxParse("content","html",n.content,a,10)}})},formSubmit:function(i){if(this.data.price,a){a=!1;var o=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,s=/^(\w){6,15}$/;if(""==i.detail.value.branchName)return a=!0,void this.warn("请为您的店铺取一个名字!");if(""==i.detail.value.mainProject)return a=!0,void this.warn("请填入您的主营的项目!");if(""==i.detail.value.name)return a=!0,void this.warn("请填入您的姓名!");if(""==i.detail.value.phone)return a=!0,void this.warn("请输入您的联系方式!");if(""==i.detail.value.email)return a=!0,void this.warn("邮箱不能为空");if(!o.test(i.detail.value.email))return a=!0,void this.warn("邮箱格式有误");if(""==i.detail.value.pwd)return a=!0,void this.warn("请填写密码");if(!s.test(i.detail.value.pwd))return a=!0,void this.warn("密码需由6-15个字母、数字组成");if(!this.data.isRead)return a=!0,void this.warn("请先阅读入驻申请协议");wx.showToast({title:"正在提交...",icon:"loading",duration:1e4,mask:!0});var r={appId:t.appId,applyCustomizeTabId:n.LynxApplyFor_About_Merchant,customizetabId:n.LynxAbout_Merchant,memberId:e.getMemberId(),branchName:i.detail.value.branchName,mainProject:i.detail.value.mainProject,surname:i.detail.value.name,mobilePhone:i.detail.value.phone,email:i.detail.value.email,password:i.detail.value.pwd,shortDescription:i.detail.value.shortDescription},c=this;wx.request({url:e.globalData.comUrl+"member_branchApply.action",data:r,success:function(a){var t=e.getJsonData(a.data);1==t.status&&(0==t.price?wx.showToast({title:"提交成功",icon:"success",duration:2e3,success:function(){wx.navigateBack({delta:1})}}):(c.pay(t.price),c.setData({price:t.price})))},fail:function(){e.hint("提交失败"),wx.hideToast()},complete:function(){a=!0}})}},pay:function(a){var n=this;wx.login({success:function(i){i.code&&wx.request({url:e.globalData.paymentUrl+"/WechatAlipay/MiniPayService2?jsoncallback=?",data:{projectId:t.appId,nonce_str:"lfksf"+Math.round(1e5*Math.random()),memberId:e.getMemberId(),body:"入驻商家",attach:t.appId,out_trade_no:"",total_fee:(100*a).toFixed(0),trade_type:"JSAPI",device_info:"888",code:i.code},success:function(a){if(wx.hideToast(),""!=a.data){var e=n.getJsonData(a.data);wx.requestPayment({timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:"prepay_id="+e.prepay_id,signType:"MD5",paySign:e.sign,success:function(a){wx.showToast({title:"支付成功",icon:"success",duration:2e3,mask:!0}),setTimeout(function(){wx.navigateBack({delta:1})},2e3)},fail:function(a){wx.showModal({title:"支付失败",showCancel:!1})}})}else wx.showModal({title:"支付失败",showCancel:!1})}})}})},getUserInfo:function(){var a=this;wx.request({url:e.globalData.comUrl+"tabs_getMember.action",data:{memberId:e.getMemberId(),customizetabId:n.LynxApplyFor_About_Merchant,checkBranch:1},success:function(t){var n=e.getJsonData(t.data);n.activated?wx.showModal({title:"提示",content:"商家入驻认证成功",showCancel:!1,success:function(a){a.confirm&&wx.navigateBack({delta:1})}}):(1==n.isApply&&wx.showModal({title:"提示",content:"正在申请中...",showCancel:!1,success:function(a){a.confirm&&wx.navigateBack({delta:1})}}),2==n.isApply&&(a.data.branchInfo.branchName=n.branchName,a.data.branchInfo.mainProject=n.mainProject,a.data.branchInfo.shortDescription=n.shortDescription,a.data.branchInfo.surname=n.surname,a.data.branchInfo.mobilePhone=n.mobilePhone,a.data.branchInfo.email=n.email,a.data.branchInfo.password=n.password,a.setData({branchInfo:a.data.branchInfo}),wx.showModal({title:"提示",content:"您已提交过申请，暂未支付",confirmText:"继续支付",cancelText:"重新申请",success:function(e){e.confirm&&a.pay(n.price)}})))},fail:function(){e.hint()}})},showAgreement:function(){this.setData({hiddenAgreement:!this.data.hiddenAgreement})},suretap:function(){this.setData({isRead:!0,hiddenAgreement:!0})},check:function(){this.setData({isRead:!this.data.isRead})},getJsonData:function(a){return JSON.parse(a.substring(1,a.length-1))},warn:function(a){wx.showModal({title:"提示",content:a,showCancel:!1})}}); 
 			}); 	require("pages/join/join.js");
 		__wxRoute = 'pages/group/group-detail/group-detail';__wxRouteBegin = true; 	define("pages/group/group-detail/group-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=t.globalData.customizeTabId,e=[],r=[],i="",o="",d="",c="";Page({data:{remainTime:"00:00:00",groupDetail:{},memberList:[],likeProductList:[],activityStatus:"",activityId:"",groupOrderNo:"",productId:"",isJoin:!1,showCurAttr:!0,showProAttr:!1,count:1,styleConfig:t.globalData.styleConfig,modelName:"",price:"",activityPrice:""},onLoad:function(a){t.loginVzSystem();this.setData({activityId:a.activityId,groupOrderNo:a.groupOrderNo,productId:a.productId}),this.getGroupDetail(),t.getMemberId()||t.loginVzSystem()},getLikeProduct:function(e){var r=this;wx.request({url:t.globalData.comUrl+"tabs_getLikeProductByPage.action",data:{customizeTabId:a.LynxProductList,bigCateGoryCode:e,status:2,actType:5,current:1},success:function(a){var e=t.getJsonData(a.data);console.log(e),r.setData({likeProductList:e.pageList})}})},getGroupDetail:function(){var a=this;wx.request({url:t.globalData.comUrl+"activityOrder_getGroupDetail.action",data:{activityId:a.data.activityId,appId:t.globalData.projectInfo.appId,groupOrderNo:a.data.groupOrderNo,productId:a.data.productId},success:function(e){for(var i=t.getJsonData(e.data),o=0;o<i.attributeKeyVOList.length;o++){r[o]=[];for(var d=0;d<i.attributeKeyVOList[o].valueList.length;d++)r[o][d]=!1}if(a.setData({price:i.productModelList[0].price,activityPrice:i.productModelList[0].activityPrice,active:r,stock:i.productModelList[0].stock}),"1"==i.activityStatus)var c=setInterval(function(){i.remainTime--,a.leftTimer(i.remainTime),i.remainTime<=0&&(clearInterval(c),a.getGroupDetail())},1e3);for(var n=0;n<i.memberList.length;n++)i.memberList[n].memberId==t.getMemberId()&&a.setData({receiver:i.memberList[n].receiver+" "+i.memberList[n].personMobilePhone,personAddress:i.memberList[n].personAddress,isJoin:!0});a.setData({groupDetail:i,proInfoDetail:i,memberList:i.memberList,activityStatus:i.activityStatus}),a.getLikeProduct(i.bigCateGoryCode)},fail:function(t){}})},toProDetail:function(t){wx.redirectTo({url:"../../product/pro-detail/pro-detail?productId="+t.currentTarget.dataset.pid})},leftTimer:function(t){var a=Math.floor(t/3600),e=Math.floor(t/60%60),r=Math.floor(t%60);a=this.checkTime(a),e=this.checkTime(e),r=this.checkTime(r),this.setData({remainTime:a+":"+e+":"+r})},checkTime:function(t){return t<10&&(t="0"+t),t},countAdd:function(){this.data.count++,this.setData({count:this.data.count})},countSubtract:function(){this.data.count>1&&(this.data.count--,this.setData({count:this.data.count}))},bindCountInput:function(t){this.setData({count:t.detail.value})},getModelInfo:function(t){var a=this;if(!r[t.currentTarget.dataset.index][t.currentTarget.dataset.attrindex]){for(var d=0;d<r[t.currentTarget.dataset.index].length;d++)e[t.currentTarget.dataset.index]=[],r[t.currentTarget.dataset.index][d]=!1;r[t.currentTarget.dataset.index][t.currentTarget.dataset.attrindex]=!t.currentTarget.dataset.status,e[t.currentTarget.dataset.index]=t.currentTarget.dataset.typeid,i=e.join(";"),""!=(o=a.getModuleId(i))&&a.setData({showCurAttr:!1}),a.setData({active:r})}},getModuleId:function(t){for(var a=this,e=t.split(";"),r=a.data.proInfoDetail.productModelList,i=e[1]+";"+e[0],n=0;n<r.length;n++)if(r[n].valueIds==t||r[n].valueIds==i){o=r[n].id,d=r[n].originalAttr,c=r[n].modelName,a.setData({stock:r[n].stock,price:r[n].price,activityPrice:r[n].activityPrice,originalPrice:r[n].originalprice,modelName:r[n].modelName}),a.data.proInfoDetail.productImageVOList.length>0&&a.setData({pic_url:a.data.proInfoDetail.productImageVOList[0].imageURL});break}return o},toggleProAttrFrame:function(){this.setData({showProAttr:!this.data.showProAttr,count:1})},changeProAttrFrame:function(){""!=o?(this.setData({showProAttr:!this.data.showProAttr}),this.addCart("joinGroup")):t.hint("请选择商品属性")},addCart:function(a){var e=this;if(e.data.stock<=0||e.data.count>e.data.stock)this.setData({showProAttr:!0}),t.hint("该商品库存不足");else{var r={productId:e.data.proInfoDetail.id,productName:e.data.proInfoDetail.productName,productCode:e.data.proInfoDetail.productCode,count:e.data.count,pic_url:e.data.pic_url,price:e.data.activityPrice,moduleId:o,proAttrName:d,modelName:e.data.modelName,branchInfoId:e.data.proInfoDetail.branchInfoId,branchName:e.data.proInfoDetail.branchName,isSelected:!0},i=[],c=[],n={};i.push(r),n.branchInfoId=r.branchInfoId,n.isSelected=!0,n.branchName=r.branchName,n.groupOrderNo=e.data.groupOrderNo,n.pro=i,c.push(n),wx.setStorageSync("groupProDataList"+t.globalData.autoId,c),wx.setStorageSync("groupProData"+t.globalData.autoId,i),t.getMemberId()?wx.navigateTo({url:"../../order/order?proPrice="+e.data.activityPrice*e.data.count+"&status="+a+"&activityId="+e.data.proInfoDetail.activityId}):wx.navigateTo({url:"../../login/login"})}},joinGroup:function(){this.setData({showProAttr:!0})},onShareAppMessage:function(t){var a=this;return"1"==a.data.activityStatus?{title:"",path:"pages/group/group-detail/group-detail?activityId="+a.data.activityId+"&groupOrderNo="+a.data.groupOrderNo+"&productId="+a.data.productId}:{title:"",path:"pages/product/pro-detail/pro-detail?productId="+a.data.groupDetail.id}}}); 
 			}); 	require("pages/group/group-detail/group-detail.js");
 		__wxRoute = 'pages/group/group-prolist/group-prolist';__wxRouteBegin = true; 	define("pages/group/group-prolist/group-prolist.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a="",i=1,o=1;Page({data:{activityList:[],productList:[],activityInfo:{},navCurIdx:0,isEndLoading:!1,countDownData:{},isGroupNull:!1},onLoad:function(t){var a=this;this.getActivityList(0).then(function(t){a.getProductList(t)})},getActivityList:function(i){var o=this;return wx.showLoading({title:"加载中..."}),new Promise(function(e,n){wx.request({url:t.globalData.comUrl+"activityProduct_groupsList.action",data:{appId:t.globalData.projectInfo.appId},success:function(n){if(0==n.data.length||0==n.code)return wx.hideLoading(),o.setData({activityList:[],isGroupNull:!0}),!1;for(var r=0;r<n.data.length;r++){var c=n.data[r];n.data[r].begin=c.beginTime.substr(c.beginTime.length-8,5)}clearInterval(a);var s=n.data[i];wx.setStorageSync("groupRemark"+t.globalData.autoId,s.remark);var u=new Date(s.beginTime),d=new Date(s.nowTime),g=parseInt((u-d)/1e3);if(g>0)s.activityStart=!1,o.setData({activityInfo:s,countDownData:o.secondToTime(g)}),a=setInterval(function(){g--,o.setData({countDownData:o.secondToTime(g)}),s.activityTime<1&&(clearInterval(a),o.getActivityList(0).then(function(t){o.getProductList(t)}))},1e3);else{s.activityStart=!0;var l=s.activityTime;o.setData({activityInfo:s,countDownData:o.secondToTime(l)}),a=setInterval(function(){l--,o.setData({countDownData:o.secondToTime(l)}),l<1&&(clearInterval(a),o.setData({navCurIdx:0}),o.getActivityList(o.data.navCurIdx).then(function(t){o.getProductList(t)}))},1e3)}o.setData({activityList:n.data,isGroupNull:!1}),e(n.data[i].groupsId)}})})},secondToTime:function(t){var a=Math.floor(t/3600/24),i=Math.floor(t/3600%24),o=Math.floor(t/60%60),e=Math.floor(t%60);return i<10&&(i="0"+i),o<10&&(o="0"+o),e<10&&(e="0"+e),{day:a,hours:i,minute:o,second:e}},getProductList:function(a){var e=this;wx.request({url:t.globalData.comUrl+"activityProduct_findGroupsProduceList.action",data:{appId:t.globalData.projectInfo.appId,current:i,groupsId:a},success:function(t){wx.hideLoading(),o=t.data.pages;for(var a=0;a<t.data.pageList.length;a++){var i=t.data.pageList[a];t.data.pageList[a].percent=parseInt(i.saleCount/(i.saleCount+i.stock)*100)}e.setData({productList:e.data.productList.concat(t.data.pageList),isEndLoading:!0})}})},navtap:function(t){var a=this,o=t.currentTarget.dataset.index;i=1,a.setData({navCurIdx:o,isEndLoading:!1,productList:[]}),this.getActivityList(o).then(function(t){a.getProductList(t)})},toProdetail:function(t){wx.navigateTo({url:"../../product/pro-detail/pro-detail?productId="+t.currentTarget.dataset.pid})},toGroupIntroduce:function(){wx.navigateTo({url:"../group-introduce/group-introduce"})},onReachBottom:function(){i<o&&(i++,this.getProductList(this.data.activityInfo.groupsId))}}); 
 			}); 	require("pages/group/group-prolist/group-prolist.js");
 		__wxRoute = 'pages/group/my-group/my-group';__wxRouteBegin = true; 	define("pages/group/my-group/my-group.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),r=t.globalData.projectInfo,a=1,e=0;Page({data:{groupOrderList:[],navCurIdx:0,hasGroupOrder:!0},onLoad:function(t){this.getMyGroupOrderList()},onShow:function(){},getMyGroupOrderList:function(){var d=this,o=t.getMemberId();wx.request({url:t.globalData.comUrl+"activityOrder_getMyGroupOrderList.action",data:{appId:r.appId,current:a,memberId:o,activityStatus:d.data.navCurIdx},success:function(r){var a=t.getJsonData(r.data);e=a.pages,d.setData({groupOrderList:d.data.groupOrderList.concat(a.pageList)}),d.setData({hasGroupOrder:!!d.data.groupOrderList.length})}})},toGroupDetail:function(t){wx.navigateTo({url:"../group-detail/group-detail?activityId="+t.currentTarget.dataset.aid+"&groupOrderNo="+t.currentTarget.dataset.gno+"&productId="+t.currentTarget.dataset.pid})},toOderDetail:function(t){wx.navigateTo({url:"../../self/myOrder/myOrder-detail/myOrder-detail?id="+t.currentTarget.dataset.oid})},navtap:function(t){a=1,this.setData({groupOrderList:[],navCurIdx:t.currentTarget.dataset.idx}),this.getMyGroupOrderList()},onReachBottom:function(){a<e&&(a++,this.getMyGroupOrderList())}}); 
 			}); 	require("pages/group/my-group/my-group.js");
 		__wxRoute = 'pages/group/group-introduce/group-introduce';__wxRouteBegin = true; 	define("pages/group/group-introduce/group-introduce.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../../../utils/wxParse/wxParse.js"),e=getApp();Page({data:{},onLoad:function(r){var t=wx.getStorageSync("groupRemark"+e.globalData.autoId);a.wxParse("scoreRule","html",t,this,5)}}); 
 			}); 	require("pages/group/group-introduce/group-introduce.js");
 		__wxRoute = 'pages/query/query';__wxRouteBegin = true; 	define("pages/query/query.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();Page({data:{},onLoad:function(t){},onShow:function(){},onHide:function(){},formSubmit:function(t){""!=t.detail.value.branchName?""!=t.detail.value.mainProject?""!=t.detail.value.phone?""!=t.detail.value.textCon?""!=t.detail.value.email?(wx.showToast({title:"正在提交...",icon:"loading",duration:2e3,mask:!0}),setTimeout(function(){wx.showToast({title:"提交成功",icon:"success",duration:2e3,mask:!0,success:function(){wx.navigateBack({delta:1})}})},2e3)):this.warn("邮箱不能为空"):this.warn("请输入您的问题描述!"):this.warn("请输入您的联系方式!!"):this.warn("请输入您的年龄!"):this.warn("请输入您的名字!")},warn:function(t){wx.showModal({title:"提示",content:t,showCancel:!1})}}); 
 			}); 	require("pages/query/query.js");
 		__wxRoute = 'pages/seckill/seckill';__wxRouteBegin = true; 	define("pages/seckill/seckill.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a="",i=1,e=1;Page({data:{activityList:[],productList:[],activityInfo:{},navCurIdx:0,isEndLoading:!1,countDownData:{}},onLoad:function(t){var a=this;this.getActivityList(0).then(function(t){a.getProductList(t)})},getActivityList:function(i){var e=this;return wx.showLoading({title:"加载中..."}),new Promise(function(o,n){wx.request({url:t.globalData.comUrl+"activityProduct_groupsList.action",data:{appId:t.globalData.projectInfo.appId,actType:"3"},success:function(n){if(0==n.data.length||0==n.code)return wx.hideLoading(),e.setData({activityList:[],isGroupNull:!0}),!1;for(var r=0;r<n.data.length;r++){var c=n.data[r];n.data[r].begin=c.beginTime.substr(c.beginTime.length-8,5)}clearInterval(a);var s=n.data[i];wx.setStorageSync("groupRemark"+t.globalData.autoId,s.remark);var u=new Date(s.beginTime),d=new Date(s.nowTime),g=parseInt((u-d)/1e3);if(g>0)s.activityStart=!1,e.setData({activityInfo:s,countDownData:e.secondToTime(g)}),a=setInterval(function(){g--,e.setData({countDownData:e.secondToTime(g)}),s.activityTime<1&&(clearInterval(a),e.getActivityList(0).then(function(t){e.getProductList(t)}))},1e3);else{s.activityStart=!0;var l=s.activityTime;e.setData({activityInfo:s,countDownData:e.secondToTime(l)}),a=setInterval(function(){l--,e.setData({countDownData:e.secondToTime(l)}),l<1&&(clearInterval(a),e.setData({navCurIdx:0}),e.getActivityList(e.data.navCurIdx).then(function(t){e.getProductList(t)}))},1e3)}e.setData({activityList:n.data,isGroupNull:!1}),o(n.data[i].groupsId)}})})},secondToTime:function(t){var a=Math.floor(t/3600/24),i=Math.floor(t/3600%24),e=Math.floor(t/60%60),o=Math.floor(t%60);return i<10&&(i="0"+i),e<10&&(e="0"+e),o<10&&(o="0"+o),{day:a,hours:i,minute:e,second:o}},getProductList:function(a){var o=this;wx.request({url:t.globalData.comUrl+"activityProduct_findGroupsProduceList.action",data:{appId:t.globalData.projectInfo.appId,current:i,groupsId:a},success:function(t){wx.hideLoading(),e=t.data.pages;for(var a=0;a<t.data.pageList.length;a++){var i=t.data.pageList[a];t.data.pageList[a].percent=parseInt(i.saleCount/(i.saleCount+i.stock)*100)}o.setData({productList:o.data.productList.concat(t.data.pageList),isEndLoading:!0})}})},navtap:function(t){var a=this,e=t.currentTarget.dataset.index;i=1,a.setData({navCurIdx:e,isEndLoading:!1,productList:[]}),this.getActivityList(e).then(function(t){a.getProductList(t)})},toProdetail:function(t){wx.navigateTo({url:"../product/pro-detail/pro-detail?productId="+t.currentTarget.dataset.pid})},toGroupIntroduce:function(){wx.navigateTo({url:"../group-introduce/group-introduce"})},onReachBottom:function(){i<e&&(i++,this.getProductList(this.data.activityInfo.groupsId))}}); 
 			}); 	require("pages/seckill/seckill.js");
 		__wxRoute = 'pages/order/calendar/calendar';__wxRouteBegin = true; 	define("pages/order/calendar/calendar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{week:["周日","周一","周二","周三","周四","周五","周六"],comeDateInfo:"",leaveDateInfo:"",isSelectEnd:!0,isSelectStart:!0,differDays:0},onShow:function(){this.dateData()},dateData:function(){for(var a=[],e=[],s=[],i=new Date,d=i.getFullYear(),h=(i.getDay(),[]),n=i.getMonth()+1,r=i.getDate(),o=0,f=[1,2,3,4,5,6,7,8,9,10,11,12],D=[],l=n;l<13;l++)D.push(l);for(var c=[d],v=0;v<150/365+2;v++)c.push(d+v+1);for(var I=function(t){return t%4==0&&t%100!=0||t%400==0},g=0;g<c.length;g++){var m=void 0;m=c[g]==d?D:f;for(var u=0;u<m.length;u++){s=[];var k=[31,28+I(c[g]),31,30,31,30,31,31,30,31,30,31],S=[];if(c[g]==d){for(var p=0;p<D.length;p++)S.push(k[m[p]-1]);k=S}else k=[31,28+I(c[g]),31,30,31,30,31,31,30,31,30,31];for(var w=0;w<k[u];w++){var y=void 0;if(!(++o<150))break;var b=w+1;if(b<10&&(b="0"+b),c[g]==d&&m[u]==n){if(w+1>=r&&(y={year:c[g],month:m[u],day:w+1,date:m[u]+"月"+b+"日",start:0,end:0,center:0,re:c[g]+"-"+m[u]+"-"+b},s.push(y),w+1==r)){var E=new Date(c[g],m[u]-1,w+1).getDay();h.push(E)}}else if(y={year:c[g],month:m[u],day:w+1,date:m[u]+"月"+b+"日",selected:0,re:c[g]+"-"+m[u]+"-"+b},s.push(y),0==w){var W=new Date(c[g],m[u]-1,w+1).getDay();h.push(W)}}a.push(s)}}for(var x=0;x<a.length;x++)0!=a[x].length&&e.push(a[x]);a[0].length>1?(a[0][0].start=1,a[0][1].end=1,this.data.comeDateInfo=a[0][0],this.data.leaveDateInfo=a[0][1],this.data.comeDateInfo.week=this.getWeek(this.data.comeDateInfo.re),this.data.leaveDateInfo.week=this.getWeek(this.data.leaveDateInfo.re),this.setData({comeDateInfo:this.data.comeDateInfo,leaveDateInfo:this.data.leaveDateInfo})):(a[0][0].start=1,a[1][0].end=1,this.data.comeDateInfo=a[0][0],this.data.leaveDateInfo=a[1][0],this.data.comeDateInfo.week=this.getWeek(this.data.comeDateInfo.re),this.data.leaveDateInfo.week=this.getWeek(this.data.leaveDateInfo.re),this.setData({comeDateInfo:this.data.comeDateInfo,leaveDateInfo:this.data.leaveDateInfo})),this.setData({date:e,weeks:h,differDays:t.DateDiff(this.data.leaveDateInfo.re,this.data.comeDateInfo.re)})},daytap:function(a){var e=a.currentTarget.dataset.midx,s=a.currentTarget.dataset.didx;if(this.data.isSelectEnd){this.clearCenterData();for(var i=0;i<this.data.date.length;i++){for(var d=this.data.date[i],h=!1,n=0;n<d.length;n++)if(d[n].start&&(this.data.date[i][n].start=0,this.data.date[e][s].start=1,this.setData({isSelectStart:!0}),this.data.comeDateInfo=this.data.date[e][s]),d[n].end){this.data.date[i][n].end=0,this.setData({isSelectEnd:!1}),h=!0;break}if(h)break}this.setData({date:this.data.date})}else if(this.data.isSelectStart&&!this.data.isSelectEnd){for(var r=0;r<this.data.date.length;r++){for(var o=this.data.date[r],f=!1,D=0;D<o.length;D++)if(o[D].start){r>e?(this.data.date[r][D].start=0,this.data.date[e][s].start=1,this.data.comeDateInfo=this.data.date[e][s]):r==e?D>s?(this.data.date[r][D].start=0,this.data.date[e][s].start=1,this.data.comeDateInfo=this.data.date[e][s]):D<s&&(this.data.date[e][s].end=1,this.data.leaveDateInfo=this.data.date[e][s],this.setData({isSelectEnd:!0})):(this.data.date[e][s].end=1,this.data.leaveDateInfo=this.data.date[e][s],this.setData({isSelectEnd:!0})),f=!0;break}if(f)break}if(this.data.isSelectEnd){for(var l=0;l<this.data.date.length;l++)for(var c=this.data.date[l],v=0;v<c.length;v++){var I=this.CompareDate(c[v].re,this.data.comeDateInfo.re),g=this.CompareDate(this.data.leaveDateInfo.re,c[v].re);I&&g&&(this.data.date[l][v].center=1)}this.data.comeDateInfo.week=this.getWeek(this.data.comeDateInfo.re),this.data.leaveDateInfo.week=this.getWeek(this.data.leaveDateInfo.re),this.setData({differDays:t.DateDiff(this.data.leaveDateInfo.re,this.data.comeDateInfo.re),comeDateInfo:this.data.comeDateInfo,leaveDateInfo:this.data.leaveDateInfo})}this.setData({date:this.data.date})}},sure:function(){this.data.isSelectStart&&this.data.isSelectEnd?(wx.setStorageSync("comeDate"+t.globalData.autoId,this.data.comeDateInfo),wx.setStorageSync("leaveDate"+t.globalData.autoId,this.data.leaveDateInfo),wx.navigateBack({beta:1})):t.hint("请选择退房日期")},clearCenterData:function(){for(var t=0;t<this.data.date.length;t++)for(var a=this.data.date[t],e=0;e<a.length;e++)this.data.date[t][e].center=0;this.setData({date:this.data.date})},CompareDate:function(t,a){t=t.replace(/-/g,"/"),a=a.replace(/-/g,"/");var e=new Date(t),s=new Date(a);return e.getTime()>s.getTime()},getWeek:function(t){var a,e=t.split("-");return a=new Date(e[0],parseInt(e[1]-1),e[2]),"星期"+"日一二三四五六".charAt(a.getDay())}}); 
 			}); 	require("pages/order/calendar/calendar.js");
 		__wxRoute = 'pages/distribute/distribute';__wxRouteBegin = true; 	define("pages/distribute/distribute.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a="";Page({data:{iconPath:"",nickName:"",styleConfig:t.globalData.styleConfig,detail:"",hideLogin:!1,disType:0,mobilePhone:"",check:!1,amount:0,QRCodeImage:"",hideQRCode:!0,isLoading:!0,activated:"",operationType:""},onLoad:function(e){a=t.globalData.customizeTabId,this.getUserInfo(),t.globalData.wxUserInfo&&t.globalData.wxUserInfo.avatarUrl?this.setData({iconPath:t.globalData.wxUserInfo.avatarUrl,nickName:t.globalData.wxUserInfo.nickName}):this.setData({iconPath:"../../img/head.png"}),this.checkDistribuction();var i=wx.getStorageSync("mobilePhone"+t.globalData.autoId);i&&this.setData({mobilePhone:i})},onShow:function(){this.getDistributeDetail()},getUserInfo:function(){var e=this;wx.request({url:t.globalData.comUrl+"tabs_getMember.action",data:{memberId:t.getMemberId(),customizetabId:a.LynxApplyFor_About_Merchant,checkBranch:1},success:function(a){var i=t.getJsonData(a.data);e.setData({disType:i.type,mobilePhone:i.mobilePhone,activated:i.activated,hideLogin:!("3"!=i.type||!i.activated)})},fail:function(){t.hint()}})},getDistributeDetail:function(){var a=this;wx.request({url:t.globalData.comUrl+"dis_distributeCentreInit",data:{memberId:t.getMemberId()},success:function(t){a.setData({detail:t.data.content,amount:t.data.amount})},fail:function(){t.hint()}})},checkDistribuction:function(){var a=this;wx.request({url:t.globalData.comUrl+"dis_checkDistribuction.action",data:{appId:t.globalData.projectInfo.appId,memberId:t.getMemberId()},success:function(e){var i=t.getJsonData(e.data);a.setData({check:i.check,amount:i.amount,activityDistribution:i.activityDistribution,isLoading:!1,operationType:i.activityDistribution.operationType})},fail:function(){t.hint(),a.setData({isLoading:!1})}})},toApplyCash:function(){wx.navigateTo({url:"applycash/applycash"})},getPhoneNumber:function(a){var e=this;wx.login({success:function(i){wx.request({url:t.globalData.paymentUrl+"/WechatAlipay/GetOpenId",data:{projectId:t.globalData.projectInfo.appId,code:i.code,iv:a.detail.iv,encryptedData:a.detail.encryptedData},success:function(a){if(a.data.length>0){var i=t.getJsonData(a.data);e.setData({mobilePhone:i.mobilePhone}),wx.setStorageSync("mobilePhone"+t.globalData.autoId,a.data.mobilePhone),e.apply()}},fail:function(t){}})}})},apply:function(){var a=this;a.data.check||a.data.amount>0&&wx.showModal({title:"提示",content:"需购物满"+a.data.amount+"元才可以申请分销",confirmText:"去购物",success:function(t){t.confirm&&wx.switchTab({url:"../product/product"})}}),wx.request({url:t.globalData.comUrl+"member_distributorApply.action",data:{appId:t.globalData.projectInfo.appId,memberId:t.getMemberId(),mobilePhone:a.data.mobilePhone},success:function(e){console.log(e.data);var i=t.getJsonData(e.data);1==a.data.operationType?wx.showToast({title:"提交成功",icon:"success",success:function(){setTimeout(function(){wx.navigateBack({beta:1})},2e3)}}):2==a.data.operationType?1==i.status&&(wx.showToast({title:"申请成功",icon:"success"}),a.setData({hideLogin:!0}),a.getDistributeDetail()):1==i.status?(wx.showToast({title:"申请成功",icon:"success"}),a.setData({hideLogin:!0}),a.getDistributeDetail()):wx.showModal({title:"提示",content:"需要购买"+a.data.activityDistribution.amount+"元钱才能成为分销商",showCancel:!1})}})},ruletap:function(){wx.navigateTo({url:"distribute-rule/distribute-rule"})},toDistributeFee:function(){wx.navigateTo({url:"distribute-fee/distribute-fee"})},toDistributionOrder:function(){wx.navigateTo({url:"distribute-order/distribute-order"})},toWithdrawList:function(){wx.navigateTo({url:"withdraw-list/withdraw-list"})},toDistributePro:function(){wx.navigateTo({url:"../distribute/distribute-product/distribute-product"})},toQRCode:function(){wx.navigateTo({url:"distribute-qrcode/distribute-qrcode"})}}); 
 			}); 	require("pages/distribute/distribute.js");
 		__wxRoute = 'pages/distribute/applycash/applycash';__wxRouteBegin = true; 	define("pages/distribute/applycash/applycash.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{hideAccountList:!0,accountList:[],defaultAccount:"",mayMoney:"",limit:"",withdrawMoney:""},onLoad:function(t){},onShow:function(){this.setData({hideAccountList:!0}),this.getAccountList()},getAccountList:function(){var a=this;wx.request({url:t.globalData.comUrl+"dis_getApplyCashPageData",data:{memberId:t.getMemberId()},success:function(t){console.log(t.data);var i=t.data.content.applyCashAccountList,n=[];a.setData({defaultAccount:""});for(var e=0;e<i.length;e++){var c=i[e];c.omitAccount=c.account.substr(0,4)+"*****"+c.account.substr(c.account.length-3,4),c.isDefault&&a.setData({defaultAccount:c}),n.push(c)}!a.data.defaultAccount&&i.length>0&&a.setData({defaultAccount:i[0]}),a.setData({accountList:n,mayMoney:t.data.content.mayMoney,limit:t.data.content.limit})}})},showAccount:function(){this.setData({hideAccountList:!1})},cancel:function(){this.setData({hideAccountList:!0})},addAccount:function(){wx.navigateTo({url:"../account-setting/account-setting"})},selectAccount:function(t){var a=t.currentTarget.dataset.idx;this.setData({defaultAccount:this.data.accountList[a],hideAccountList:!0})},bindMoneyInput:function(t){this.setData({withdrawMoney:t.detail.value})},applyCash:function(){if(""!=this.data.withdrawMoney){if(this.data.withdrawMoney>this.data.limit.moneyMaximum)return t.hint("最多提现"+this.data.limit.moneyMaximum+"元"),void this.setData({withdrawMoney:this.data.limit.moneyMaximum});if(this.data.withdrawMoney<this.data.limit.moneyMinimum&&this.data.withdrawMoney)return t.hint("最少提现"+this.data.limit.moneyMinimum+"元"),void this.setData({withdrawMoney:this.data.limit.moneyMinimum});if(this.data.withdrawMoney>this.data.mayMoney)t.hint("输入金额超过了可提现金额！");else if(this.data.defaultAccount){var a=this;wx.request({url:t.globalData.comUrl+"dis_applyCash",data:{money:a.data.withdrawMoney,accountId:a.data.defaultAccount.id,memberId:t.getMemberId(),projectId:t.globalData.projectInfo.appId},success:function(t){console.log(t.data),"1"==t.data.code?wx.showModal({title:"提示",content:"提交成功，我们将在五个工作日内处理",showCancel:!1,success:function(t){wx.navigateBack({beta:1})}}):wx.showModal({title:t.data.msg,showCancel:!1})}})}else this.setData({hideAccountList:!1})}else t.hint("请输入提现金额")},editAccount:function(t){},deleteAccount:function(a){var i=this,n=a.currentTarget.dataset.id;wx.showModal({title:"提示",content:"确定删除吗？",success:function(a){a.confirm&&wx.request({url:t.globalData.comUrl+"dis_delApplyCashAccount",data:{accountId:n},success:function(t){i.getAccountList()}})}})}}); 
 			}); 	require("pages/distribute/applycash/applycash.js");
 		__wxRoute = 'pages/distribute/distribute-qrcode/distribute-qrcode';__wxRouteBegin = true; 	define("pages/distribute/distribute-qrcode/distribute-qrcode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp();Page({data:{QRCodeImage:"",hideBox:!0},onLoad:function(t){var o=this;e.loginVzSystem().then(function(){o.getQRCode()})},getQRCode:function(){var t=this;wx.request({url:e.globalData.paymentUrl+"/WechatAlipay/getWXAcode",data:{memberId:e.getMemberId(),page:"pages/index/index",projectId:e.globalData.projectInfo.appId,width:"200px",scene:e.getMemberId()},success:function(e){console.log(e.data),t.setData({QRCodeImage:e.data.content.miniQRCode})},fail:function(){e.hint()}})},showBox:function(){this.setData({hideBox:!this.data.hideBox})},previewImage:function(e){var t=this;this.setData({hideBox:!this.data.hideBox}),wx.previewImage({urls:[t.data.QRCodeImage]})},saveImgToPhotosAlbumTap:function(){this.setData({hideBox:!this.data.hideBox});var t=this;wx.downloadFile({url:t.data.QRCodeImage,success:function(t){console.log(t),wx.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(t){e.hint("下载成功")},fail:function(e){console.log(e),console.log("fail")}})},fail:function(){console.log("fail")}})},onShareAppMessage:function(t){return"button"===t.from&&console.log(t.target),{title:"推广二维码",path:"pages/distribute/distribute-qrcode/distribute-qrcode?parentId="+e.getMemberId()}}}); 
 			}); 	require("pages/distribute/distribute-qrcode/distribute-qrcode.js");
 		__wxRoute = 'pages/distribute/account-setting/account-setting';__wxRouteBegin = true; 	define("pages/distribute/account-setting/account-setting.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{accountType:[]},onLoad:function(a){},onShow:function(){var t=wx.getStorageSync("accountType"+a.globalData.autoId);t&&this.setData({accountType:t})},accountType:function(){wx.navigateTo({url:"../account-select/account-select"})},formSubmit:function(t){var e=this;"支付宝"==e.data.accountType.bankName&&(t.detail.value.bankInfo="null");var n=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;e.data.accountType.id?""==t.detail.value.bankInfo&&"支付宝"!=e.data.accountType.bankName?a.hint("请输入您的开户行"):""==t.detail.value.name?a.hint("请输入您的真实姓名"):n.test(t.detail.value.card)?""==t.detail.value.account?a.hint("请输入您的账号"):wx.request({url:a.globalData.comUrl+"dis_saveApplyCashAccount",data:{bankId:e.data.accountType.id,applyCashName:t.detail.value.name,idCard:t.detail.value.card,account:t.detail.value.account,memberId:a.getMemberId(),bankInfo:t.detail.value.bankInfo},success:function(t){console.log(t.data),1==t.data.code?(wx.showToast({title:"提交成功",icon:"success",duration:2e3}),wx.removeStorageSync("accountType"+a.globalData.autoId),setTimeout(function(){wx.navigateBack({beta:1})},2e3)):wx.showToast({title:"提交失败",icon:"none",duration:2e3})}}):a.hint("身份证号填写有误"):a.hint("请选择银行")}}); 
 			}); 	require("pages/distribute/account-setting/account-setting.js");
 		__wxRoute = 'pages/distribute/withdraw-list/withdraw-list';__wxRouteBegin = true; 	define("pages/distribute/withdraw-list/withdraw-list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=1,e=1,i=!1;Page({data:{curIdx:1,distributorIncome:"",withdrawList:[],wdListNull:!1,hideBottom:!0},onLoad:function(t){a=1,this.getWithdrawList()},onShow:function(){},getTotalCommission:function(){var a=this;wx.request({url:t.globalData.comUrl+"tabs_getDistributorIncome",data:{memberId:t.getMemberId()},success:function(t){a.setData({distributorIncome:t.data.content.distributorIncome})}})},getWithdrawList:function(){if(!i){var s=this;wx.request({url:t.globalData.comUrl+"tabs_getApplyCashList",data:{projectId:t.globalData.projectInfo.appId,memberId:t.getMemberId(),status:s.data.curIdx,current:a},success:function(t){var a=t.data.content.applyCashList;e=t.data.content.pages;for(var r=0;r<a.length;r++)a[r].date=a[r].createDate.substr(0,10),a[r].time=a[r].createDate.substr(11,8),a[r].account=a[r].account.substring(0,4)+"******"+a[r].account.substr(a[r].account.length-4);s.setData({withdrawList:s.data.withdrawList.concat(t.data.content.applyCashList)}),s.setData({wdListNull:0==s.data.withdrawList.length}),i=!1}})}},toWithdrawDetail:function(t){wx.navigateTo({url:"withdraw-detail/withdraw-detail?id="+t.currentTarget.dataset.id})},navtap:function(t){a=1,this.setData({withdrawList:[],curIdx:t.currentTarget.dataset.idx,hideBottom:!0}),this.getWithdrawList()},onReachBottom:function(){a<e?(i||a++,this.getWithdrawList()):a>1&&a>=e&&this.setData({hideBottom:!1})}}); 
 			}); 	require("pages/distribute/withdraw-list/withdraw-list.js");
 		__wxRoute = 'pages/distribute/withdraw-list/withdraw-detail/withdraw-detail';__wxRouteBegin = true; 	define("pages/distribute/withdraw-list/withdraw-detail/withdraw-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{applyCash:{},statusStr:"",disposeDate:""},onLoad:function(a){this.getDetail(a.id)},getDetail:function(t){var s=this;wx.request({url:a.globalData.comUrl+"dis_getApplyCash",data:{id:t},success:function(a){var t="",e="";switch(a.data.content.applyCash.status){case 1:t="待审核";break;case 2:t="待打款",e="审核时间："+a.data.content.applyCash.disposeDate;break;case 3:t="已打款",e="打款时间："+a.data.content.applyCash.disposeDate;break;case 4:t="驳回",e="驳回时间："+a.data.content.applyCash.disposeDate}s.setData({applyCash:a.data.content.applyCash,statusStr:t,disposeDate:e})}})}}); 
 			}); 	require("pages/distribute/withdraw-list/withdraw-detail/withdraw-detail.js");
 		__wxRoute = 'pages/distribute/account-select/account-select';__wxRouteBegin = true; 	define("pages/distribute/account-select/account-select.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{bankList:[],searchBankList:[],hidden:!0},onLoad:function(t){var n=this;wx.request({url:a.globalData.comUrl+"dis_getBankList",success:function(a){n.setData({bankList:a.data.content})}})},bindInput:function(a){var t=a.detail.value,n=[];if(t.length>0){for(var i=0;i<this.data.bankList.length;i++){var e=this.data.bankList[i];-1!=e.bankName.search(t)&&n.push(e)}this.setData({searchBankList:n,hidden:!1})}},radioChange:function(t){console.log(t);for(var n=0;n<this.data.bankList.length;n++){var i=this.data.bankList[n];if(i.id==t.detail.value){wx.setStorageSync("accountType"+a.globalData.autoId,i);break}}wx.navigateBack({beta:1})},onShow:function(){}}); 
 			}); 	require("pages/distribute/account-select/account-select.js");
 		__wxRoute = 'pages/distribute/distribute-order/distribute-order';__wxRouteBegin = true; 	define("pages/distribute/distribute-order/distribute-order.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e="",a="",r=1,i=1,s=!1;Page({data:{curIdx:"0",orderList:[],inCome:"",noOrder:!1,hideBottom:!0},onLoad:function(){this.getOrderList("","")},getDistributorIncome:function(){var e=this;wx.request({url:t.globalData.comUrl+"dis_getDistributorIncome",data:{memberId:t.getMemberId()},success:function(t){e.setData({inCome:t.data.content.distributorIncome})}})},getOrderList:function(e,a){if(!s){var o=this;wx.request({url:t.globalData.comUrl+"dis_getDistributionAppOrderByPage.action",data:{appId:t.globalData.projectInfo.appId,current:r,parentMemberId:t.getMemberId(),payStatus:e,status:a},success:function(e){var a=t.getJsonData(e.data);i=a.pages;for(var r=0;r<a.pageList.length;r++)a.pageList[r].fee=(a.pageList[r].totalMoney-a.pageList[r].totalLinePrice).toFixed(2);o.setData({orderList:o.data.orderList.concat(a.pageList)}),o.setData({noOrder:0==o.data.orderList.length}),s=!1}})}},navtap:function(t){var i=t.currentTarget.dataset.idx;r=1,this.setData({curIdx:t.currentTarget.dataset.idx,orderList:[]}),0==i?(e="",a=""):1==i?(e=0,a=1):2==i?(e=1,a=1):3==i&&(e=1,a=4),this.getOrderList(e,a)},onReachBottom:function(){r<i?(s||r++,this.getOrderList(e,a)):r>1&&r>=i&&this.setData({hideBottom:!1})}}); 
 			}); 	require("pages/distribute/distribute-order/distribute-order.js");
 		__wxRoute = 'pages/distribute/distribute-rule/distribute-rule';__wxRouteBegin = true; 	define("pages/distribute/distribute-rule/distribute-rule.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{content:"",ruleNull:!1},onLoad:function(){var a=this;wx.request({url:t.globalData.comUrl+"dis_getRecruitionByAppId.action",data:{appId:t.globalData.projectInfo.appId},success:function(e){var o=t.getJsonData(e.data);console.log(o),wx.setNavigationBarTitle({title:o.title}),a.setData({content:o.description,ruleNull:""==o.description})}})}}); 
 			}); 	require("pages/distribute/distribute-rule/distribute-rule.js");
 		__wxRoute = 'pages/distribute/distribute-product/distribute-product';__wxRouteBegin = true; 	define("pages/distribute/distribute-product/distribute-product.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),o=1,a=1;Page({data:{productList:[]},onLoad:function(){},onShow:function(){o=1,this.getDistributeProduct()},getDistributeProduct:function(){var i=this;wx.request({url:t.globalData.comUrl+"activityProduct_findGroupsProduceList.action",data:{appId:t.globalData.projectInfo.appId,groupsId:"distribution",current:o},success:function(t){var o=t.data;a=o.pages,i.setData({productList:i.data.productList.concat(o.pageList)})}})},toProductDetail:function(t){wx.navigateTo({url:"../../product/pro-detail/pro-detail?productId="+t.currentTarget.dataset.pid})},onReachBottom:function(){o<a&&(o++,this.getDistributeProduct())}}); 
 			}); 	require("pages/distribute/distribute-product/distribute-product.js");
 		__wxRoute = 'pages/distribute/distribute-fee/distribute-fee';__wxRouteBegin = true; 	define("pages/distribute/distribute-fee/distribute-fee.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=require("../../../utils/wxcharts.js"),e=null;Page({data:{timeList:[],moneyList:[],showComboBox:!1,searchTime:"theweek",searchTxt:"本周",detailList:[],inCome:""},onLoad:function(){this.getSaleRecord(),this.getDistributorIncome()},drawChart:function(){var t=320;try{t=wx.getSystemInfoSync().windowWidth}catch(t){console.error("getSystemInfoSync failed!")}var o=this.createSimulationData();e=new a({canvasId:"lineCanvas",type:"line",categories:o.categories,animation:!0,series:[{name:"",data:o.data,format:function(t,a){return t.toFixed(2)+"万"}}],xAxis:{disableGrid:!0},yAxis:{title:"佣金收入明细 (元)",format:function(t){return t.toFixed(2)},min:0},width:t,height:200,dataLabel:!1,dataPointShape:!0,extra:{lineStyle:"curve"}})},getSaleRecord:function(){var a=this;wx.request({url:t.globalData.comUrl+"dis_getSaleRecord.action",data:{appId:t.globalData.projectInfo.appId,current:1,parentMemberId:t.getMemberId(),searchTime:a.data.searchTime},success:function(e){var o=t.getJsonData(e.data),s=[],i=[];o.dataList=o.dataList.reverse();for(var r=0;r<o.dataList.length;r++)s.push(o.dataList[r].orderTime),i.push(o.dataList[r].lineMoney);a.setData({timeList:s,moneyList:i,detailList:o.dataList2}),a.drawChart()}})},getDistributorIncome:function(){var a=this;wx.request({url:t.globalData.comUrl+"dis_getDistributorIncome",data:{memberId:t.getMemberId()},success:function(t){a.setData({inCome:t.data.content.distributorIncome})}})},touchHandler:function(t){console.log(e.getCurrentDataIndex(t)),e.showToolTip(t,{format:function(t,a){return a+" "+t.name+":"+t.data}})},createSimulationData:function(){for(var t=this,a=[],e=[],o=0;o<60;o++)a.push("2016-"+(o+1)),e.push(10*Math.random()+16);return{categories:t.data.timeList,data:t.data.moneyList}},updateData:function(){var t=this.createSimulationData(),a=[{name:"",data:t.data,format:function(t,a){return t.toFixed(2)+"万"}}];e.updateData({categories:t.categories,series:a})},isShowComoBox:function(){this.setData({showComboBox:!this.data.showComboBox})},selectSearchType:function(t){var a=t.currentTarget.dataset.time;switch(a){case"1days":this.setData({searchTime:a,searchTxt:"最近1天",showComboBox:!this.data.showComboBox}),this.getSaleRecord();break;case"3days":this.setData({searchTime:a,searchTxt:"最近3天",showComboBox:!this.data.showComboBox}),this.getSaleRecord();break;case"theweek":this.setData({searchTime:a,searchTxt:"本周",showComboBox:!this.data.showComboBox}),this.getSaleRecord();break;case"themonth":this.setData({searchTime:a,searchTxt:"本月",showComboBox:!this.data.showComboBox}),this.getSaleRecord();break;case"thequarter":this.setData({searchTime:a,searchTxt:"本自然季度",showComboBox:!this.data.showComboBox}),this.getSaleRecord();break;case"":this.setData({showComboBox:!this.data.showComboBox})}},toWithdrawList:function(){wx.navigateTo({url:"../withdraw-list/withdraw-list"})}}); 
 			}); 	require("pages/distribute/distribute-fee/distribute-fee.js");
 	