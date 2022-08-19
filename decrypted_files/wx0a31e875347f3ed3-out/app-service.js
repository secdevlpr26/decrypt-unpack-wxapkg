	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
	/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
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
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
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
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
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
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
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
function _1z( z, opindex, env, scope, global, o )
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
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
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
function _mz(z,tag,attrs,generics,env,scope,global)
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
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
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

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'!'],[[7],[3,'hasUserInfo']]],[[7],[3,'canIUse']]])
Z([1,true])
Z([3,'bindended'])
Z([3,'bindtimeupdate'])
Z([3,'video-box'])
Z([[7],[3,'isShowControls']])
Z([1,false])
Z(z[6])
Z([[7],[3,'isShowGesture']])
Z([3,'100%'])
Z([3,'live_class'])
Z([[7],[3,'play_time_already']])
Z(z[6])
Z([3,'cover'])
Z([3,''])
Z(z[6])
Z([[7],[3,'video_url']])
Z(z[9])
Z([3,'showView'])
Z([3,'cover-avatar'])
Z([[7],[3,'avatarRList']])
Z([3,'index'])
Z([[2,'==='],[[7],[3,'index']],[1,0]])
Z([3,'avatar-box'])
Z([[2,'!'],[[7],[3,'isShowChampion']]])
Z(z[24])
Z([[2,'==='],[[7],[3,'index']],[1,1]])
Z(z[24])
Z([[2,'==='],[[7],[3,'index']],[1,2]])
Z(z[24])
Z([[2,'!='],[[7],[3,'star']],[1,0]])
Z([[2,'!'],[[7],[3,'fullscreen']]])
Z([[2,'!'],[[7],[3,'rocketAnimation']]])
Z([[2,'!'],[[7],[3,'isShowTopic']]])
Z([3,'clock-box'])
Z([3,'uploadRecord'])
Z([3,'clock'])
Z([3,'clock-yellow'])
Z([[2,'!'],[[7],[3,'showClock']]])
Z([[2,'!'],[[7],[3,'showChoiceTime']]])
Z([[2,'!'],[[7],[3,'showRecordTime']]])
Z([3,'bg-topic'])
Z([[2,'!'],[[7],[3,'showTopic']]])
Z([3,'topic-content'])
Z([[2,'!'],[[7],[3,'showTitle']]])
Z([[2,'!'],[[7],[3,'showText']]])
Z([3,'item1'])
Z([[7],[3,'textAttr']])
Z(z[21])
Z([3,'choiceAnswer'])
Z([3,'topic-answer topic-answer-img'])
Z([[6],[[7],[3,'item1']],[3,'is_crrect']])
Z([[7],[3,'curQuestion']])
Z([[7],[3,'index']])
Z([[7],[3,'item1']])
Z([[6],[[7],[3,'item1']],[3,'type']])
Z([a,[3,'background:'],[[6],[[7],[3,'item1']],[3,'background']],[3,';color:'],[[6],[[7],[3,'item1']],[3,'color']],[3,';border:'],[[6],[[7],[3,'item1']],[3,'border']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'rightIcon']]],[[2,'=='],[[6],[[7],[3,'item1']],[3,'answer_index']],[1,0]]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'errorIcon']]],[[2,'=='],[[6],[[7],[3,'item1']],[3,'answer_index']],[1,1]]])
Z([[2,'!'],[[7],[3,'showImg']]])
Z([3,'item'])
Z([[7],[3,'imgAttr']])
Z(z[21])
Z(z[49])
Z([3,'answer-img-content answer-img-content-border'])
Z([[6],[[7],[3,'item']],[3,'is_crrect']])
Z(z[52])
Z(z[53])
Z([[7],[3,'item']])
Z([[6],[[7],[3,'item']],[3,'type']])
Z([a,z[56][1],[[6],[[7],[3,'item']],[3,'background']],z[56][3],[[6],[[7],[3,'item']],[3,'color']],z[56][5],[[6],[[7],[3,'item']],[3,'border']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'rightIcon']]],[[2,'=='],[[6],[[7],[3,'item']],[3,'answer_index']],[1,0]]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'errorIcon']]],[[2,'=='],[[6],[[7],[3,'item']],[3,'answer_index']],[1,1]]])
Z([[2,'!'],[[7],[3,'showRecord']]])
Z([[2,'!'],[[7],[3,'evaluation']]])
Z([[2,'!'],[[7],[3,'recording']]])
Z([[2,'!'],[[7],[3,'topic_star']]])
Z([[2,'!'],[[7],[3,'showTopicChoiceNoImg']]])
Z([3,'topic-choice-no-img'])
Z([[2,'!'],[[7],[3,'showTitle1']]])
Z([[2,'!'],[[7],[3,'showText1']]])
Z(z[46])
Z(z[47])
Z(z[21])
Z(z[49])
Z([3,'topic-answer'])
Z(z[51])
Z(z[52])
Z(z[53])
Z(z[54])
Z(z[55])
Z([a,z[56][1],z[56][2],z[56][3],z[56][4],z[56][5],z[56][6]])
Z(z[57])
Z(z[58])
Z([[2,'!'],[[7],[3,'showImg1']]])
Z(z[60])
Z(z[61])
Z(z[21])
Z(z[49])
Z([3,'horizontal-img answer-img-content answer-img-content-border'])
Z(z[65])
Z(z[52])
Z(z[53])
Z(z[68])
Z(z[69])
Z([a,z[56][1],z[70][2],z[56][3],z[70][4],z[56][5],z[70][6]])
Z(z[71])
Z(z[72])
Z([[2,'!'],[[7],[3,'showRecord1']]])
Z(z[75])
Z(z[74])
Z(z[76])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'is_show_page']])
Z([[2,'!='],[[6],[[7],[3,'current_day_webcast']],[3,'length']],[1,0]])
Z([[2,'!='],[[6],[[7],[3,'old_webcast_list']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'comment_item']],[[6],[[6],[[7],[3,'comment_item']],[3,'comment']],[3,'id']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'userList']])
Z([3,'i'])
Z([3,'teacherContent'])
Z([[6],[[6],[[7],[3,'item']],[3,'comment']],[3,'text_comment']])
Z([[6],[[6],[[7],[3,'item']],[3,'comment']],[3,'audio_comment']])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/index/index.wxml','./pages/liveclass/before/before.wxml','./pages/liveclass/index/index.wxml','./pages/liveclass/reminisce/reminisce.wxml','./pages/liveclass/video/video.wxml','./pages/liveclass/videoList/videoList.wxml','./pages/logs/logs.wxml','./pages/study/bookList/bookList.wxml','./pages/study/chooseWord/chooseWord.wxml','./pages/study/homework/homework.wxml','./pages/study/lessonList/lessonList.wxml','./pages/study/listenStory/listenStory.wxml','./pages/study/playGame/playGame.wxml','./pages/study/readBook/readBook.wxml','./pages/study/recordVoice/recordVoice.wxml','./pages/study/studyIndex/studyIndex.wxml','./pages/teacher/class/class.wxml','./pages/teacher/login/login.wxml','./pages/teacher/outsourcing/outsourcing.wxml','./pages/teacher/student/student.wxml','./pages/user/calendar/calendar.wxml','./pages/user/userCenter/userCenter.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cF=_v()
_(r,cF)
if(_oz(z,0,e,s,gg)){cF.wxVkey=1
}
else{cF.wxVkey=2
var hG=_mz(z,'video',['autoplay',1,'bindended',1,'bindtimeupdate',2,'class',3,'controls',4,'customCache',5,'enablePlayGesture',6,'enableProgressGesture',7,'height',8,'id',9,'initialTime',10,'loop',11,'objectFit',12,'poster',13,'showCenterPlayBtn',14,'src',15,'width',16],[],e,s,gg)
var oH=_n('view')
_rz(z,oH,'class',18,e,s,gg)
var aL=_n('view')
_rz(z,aL,'class',19,e,s,gg)
var eN=_v()
_(aL,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_n('view')
var hU=_v()
_(cT,hU)
if(_oz(z,22,xQ,oP,gg)){hU.wxVkey=1
var oX=_n('view')
_rz(z,oX,'class',23,xQ,oP,gg)
var lY=_v()
_(oX,lY)
if(_oz(z,24,xQ,oP,gg)){lY.wxVkey=1
}
var aZ=_v()
_(oX,aZ)
if(_oz(z,25,xQ,oP,gg)){aZ.wxVkey=1
}
lY.wxXCkey=1
aZ.wxXCkey=1
_(hU,oX)
}
var oV=_v()
_(cT,oV)
if(_oz(z,26,xQ,oP,gg)){oV.wxVkey=1
var t1=_v()
_(oV,t1)
if(_oz(z,27,xQ,oP,gg)){t1.wxVkey=1
}
t1.wxXCkey=1
}
var cW=_v()
_(cT,cW)
if(_oz(z,28,xQ,oP,gg)){cW.wxVkey=1
var e2=_v()
_(cW,e2)
if(_oz(z,29,xQ,oP,gg)){e2.wxVkey=1
}
e2.wxXCkey=1
}
hU.wxXCkey=1
oV.wxXCkey=1
cW.wxXCkey=1
_(oR,cT)
return oR
}
eN.wxXCkey=2
_2z(z,20,bO,e,s,gg,eN,'item','index','index')
var tM=_v()
_(aL,tM)
if(_oz(z,30,e,s,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
_(oH,aL)
var cI=_v()
_(oH,cI)
if(_oz(z,31,e,s,gg)){cI.wxVkey=1
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,32,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(oH,lK)
if(_oz(z,33,e,s,gg)){lK.wxVkey=1
var b3=_n('view')
_rz(z,b3,'class',34,e,s,gg)
var o4=_mz(z,'view',['bindtap',35,'class',1],[],e,s,gg)
var x5=_n('view')
_rz(z,x5,'class',37,e,s,gg)
var o6=_v()
_(x5,o6)
if(_oz(z,38,e,s,gg)){o6.wxVkey=1
}
var f7=_v()
_(x5,f7)
if(_oz(z,39,e,s,gg)){f7.wxVkey=1
}
var c8=_v()
_(x5,c8)
if(_oz(z,40,e,s,gg)){c8.wxVkey=1
}
o6.wxXCkey=1
f7.wxXCkey=1
c8.wxXCkey=1
_(o4,x5)
_(b3,o4)
var h9=_n('view')
_rz(z,h9,'class',41,e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,42,e,s,gg)){o0.wxVkey=1
var oBB=_n('view')
_rz(z,oBB,'class',43,e,s,gg)
var lCB=_v()
_(oBB,lCB)
if(_oz(z,44,e,s,gg)){lCB.wxVkey=1
}
var aDB=_v()
_(oBB,aDB)
if(_oz(z,45,e,s,gg)){aDB.wxVkey=1
var oJB=_v()
_(aDB,oJB)
var fKB=function(hMB,cLB,oNB,gg){
var oPB=_mz(z,'view',['bindtap',49,'class',1,'data-answer',2,'data-curQuestion',3,'data-index',4,'data-item',5,'data-type',6,'style',7],[],hMB,cLB,gg)
var lQB=_v()
_(oPB,lQB)
if(_oz(z,57,hMB,cLB,gg)){lQB.wxVkey=1
}
var aRB=_v()
_(oPB,aRB)
if(_oz(z,58,hMB,cLB,gg)){aRB.wxVkey=1
}
lQB.wxXCkey=1
aRB.wxXCkey=1
_(oNB,oPB)
return oNB
}
oJB.wxXCkey=2
_2z(z,47,fKB,e,s,gg,oJB,'item1','index','index')
}
var tEB=_v()
_(oBB,tEB)
if(_oz(z,59,e,s,gg)){tEB.wxVkey=1
var tSB=_v()
_(tEB,tSB)
var eTB=function(oVB,bUB,xWB,gg){
var fYB=_mz(z,'view',['bindtap',63,'class',1,'data-answer',2,'data-curQuestion',3,'data-index',4,'data-item',5,'data-type',6,'style',7],[],oVB,bUB,gg)
var cZB=_v()
_(fYB,cZB)
if(_oz(z,71,oVB,bUB,gg)){cZB.wxVkey=1
}
var h1B=_v()
_(fYB,h1B)
if(_oz(z,72,oVB,bUB,gg)){h1B.wxVkey=1
}
cZB.wxXCkey=1
h1B.wxXCkey=1
_(xWB,fYB)
return xWB
}
tSB.wxXCkey=2
_2z(z,61,eTB,e,s,gg,tSB,'item','index','index')
}
var eFB=_v()
_(oBB,eFB)
if(_oz(z,73,e,s,gg)){eFB.wxVkey=1
}
var bGB=_v()
_(oBB,bGB)
if(_oz(z,74,e,s,gg)){bGB.wxVkey=1
}
var oHB=_v()
_(oBB,oHB)
if(_oz(z,75,e,s,gg)){oHB.wxVkey=1
}
var xIB=_v()
_(oBB,xIB)
if(_oz(z,76,e,s,gg)){xIB.wxVkey=1
}
lCB.wxXCkey=1
aDB.wxXCkey=1
tEB.wxXCkey=1
eFB.wxXCkey=1
bGB.wxXCkey=1
oHB.wxXCkey=1
xIB.wxXCkey=1
_(o0,oBB)
}
var cAB=_v()
_(h9,cAB)
if(_oz(z,77,e,s,gg)){cAB.wxVkey=1
var o2B=_n('view')
_rz(z,o2B,'class',78,e,s,gg)
var c3B=_v()
_(o2B,c3B)
if(_oz(z,79,e,s,gg)){c3B.wxVkey=1
}
var o4B=_v()
_(o2B,o4B)
if(_oz(z,80,e,s,gg)){o4B.wxVkey=1
var o0B=_v()
_(o4B,o0B)
var xAC=function(fCC,oBC,cDC,gg){
var oFC=_mz(z,'view',['bindtap',84,'class',1,'data-answer',2,'data-curQuestion',3,'data-index',4,'data-item',5,'data-type',6,'style',7],[],fCC,oBC,gg)
var cGC=_v()
_(oFC,cGC)
if(_oz(z,92,fCC,oBC,gg)){cGC.wxVkey=1
}
var oHC=_v()
_(oFC,oHC)
if(_oz(z,93,fCC,oBC,gg)){oHC.wxVkey=1
}
cGC.wxXCkey=1
oHC.wxXCkey=1
_(cDC,oFC)
return cDC
}
o0B.wxXCkey=2
_2z(z,82,xAC,e,s,gg,o0B,'item1','index','index')
}
var l5B=_v()
_(o2B,l5B)
if(_oz(z,94,e,s,gg)){l5B.wxVkey=1
var lIC=_v()
_(l5B,lIC)
var aJC=function(eLC,tKC,bMC,gg){
var xOC=_mz(z,'view',['bindtap',98,'class',1,'data-answer',2,'data-curQuestion',3,'data-index',4,'data-item',5,'data-type',6,'style',7],[],eLC,tKC,gg)
var oPC=_v()
_(xOC,oPC)
if(_oz(z,106,eLC,tKC,gg)){oPC.wxVkey=1
}
var fQC=_v()
_(xOC,fQC)
if(_oz(z,107,eLC,tKC,gg)){fQC.wxVkey=1
}
oPC.wxXCkey=1
fQC.wxXCkey=1
_(bMC,xOC)
return bMC
}
lIC.wxXCkey=2
_2z(z,96,aJC,e,s,gg,lIC,'item','index','index')
}
var a6B=_v()
_(o2B,a6B)
if(_oz(z,108,e,s,gg)){a6B.wxVkey=1
}
var t7B=_v()
_(o2B,t7B)
if(_oz(z,109,e,s,gg)){t7B.wxVkey=1
}
var e8B=_v()
_(o2B,e8B)
if(_oz(z,110,e,s,gg)){e8B.wxVkey=1
}
var b9B=_v()
_(o2B,b9B)
if(_oz(z,111,e,s,gg)){b9B.wxVkey=1
}
c3B.wxXCkey=1
o4B.wxXCkey=1
l5B.wxXCkey=1
a6B.wxXCkey=1
t7B.wxXCkey=1
e8B.wxXCkey=1
b9B.wxXCkey=1
_(cAB,o2B)
}
o0.wxXCkey=1
cAB.wxXCkey=1
_(b3,h9)
_(lK,b3)
}
cI.wxXCkey=1
oJ.wxXCkey=1
lK.wxXCkey=1
_(hG,oH)
_(cF,hG)
}
cF.wxXCkey=1
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var hSC=_v()
_(r,hSC)
if(_oz(z,0,e,s,gg)){hSC.wxVkey=1
}
else{hSC.wxVkey=2
var oTC=_n('view')
var cUC=_v()
_(oTC,cUC)
if(_oz(z,1,e,s,gg)){cUC.wxVkey=1
}
var oVC=_v()
_(oTC,oVC)
if(_oz(z,2,e,s,gg)){oVC.wxVkey=1
}
cUC.wxXCkey=1
oVC.wxXCkey=1
_(hSC,oTC)
}
hSC.wxXCkey=1
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var o0C=_v()
_(r,o0C)
if(_oz(z,0,e,s,gg)){o0C.wxVkey=1
}
o0C.wxXCkey=1
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var aBD=_v()
_(r,aBD)
var tCD=function(bED,eDD,oFD,gg){
var oHD=_n('view')
_rz(z,oHD,'class',2,bED,eDD,gg)
var fID=_v()
_(oHD,fID)
if(_oz(z,3,bED,eDD,gg)){fID.wxVkey=1
}
var cJD=_v()
_(oHD,cJD)
if(_oz(z,4,bED,eDD,gg)){cJD.wxVkey=1
}
fID.wxXCkey=1
cJD.wxXCkey=1
_(oFD,oHD)
return oFD
}
aBD.wxXCkey=2
_2z(z,0,tCD,e,s,gg,aBD,'item','index','i')
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['pages/index/index.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/liveclass/before/before.json'] = {"usingComponents":{},"enablePullDownRefresh":true,"pageOrientation":"landscape"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/liveclass/before/before.wxml'] = [$gwx, './pages/liveclass/before/before.wxml'];else __wxAppCode__['pages/liveclass/before/before.wxml'] = $gwx( './pages/liveclass/before/before.wxml' );
		__wxAppCode__['pages/liveclass/index/index.json'] = {"usingComponents":{},"enablePullDownRefresh":true,"pageOrientation":"landscape"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/liveclass/index/index.wxml'] = [$gwx, './pages/liveclass/index/index.wxml'];else __wxAppCode__['pages/liveclass/index/index.wxml'] = $gwx( './pages/liveclass/index/index.wxml' );
		__wxAppCode__['pages/liveclass/reminisce/reminisce.json'] = {"usingComponents":{},"enablePullDownRefresh":true,"pageOrientation":"landscape"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/liveclass/reminisce/reminisce.wxml'] = [$gwx, './pages/liveclass/reminisce/reminisce.wxml'];else __wxAppCode__['pages/liveclass/reminisce/reminisce.wxml'] = $gwx( './pages/liveclass/reminisce/reminisce.wxml' );
		__wxAppCode__['pages/liveclass/video/video.json'] = {"usingComponents":{},"enablePullDownRefresh":true,"pageOrientation":"landscape"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/liveclass/video/video.wxml'] = [$gwx, './pages/liveclass/video/video.wxml'];else __wxAppCode__['pages/liveclass/video/video.wxml'] = $gwx( './pages/liveclass/video/video.wxml' );
		__wxAppCode__['pages/liveclass/videoList/videoList.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/liveclass/videoList/videoList.wxml'] = [$gwx, './pages/liveclass/videoList/videoList.wxml'];else __wxAppCode__['pages/liveclass/videoList/videoList.wxml'] = $gwx( './pages/liveclass/videoList/videoList.wxml' );
		__wxAppCode__['pages/logs/logs.json'] = {"navigationBarTitleText":"查看启动日志","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/logs/logs.wxml'] = [$gwx, './pages/logs/logs.wxml'];else __wxAppCode__['pages/logs/logs.wxml'] = $gwx( './pages/logs/logs.wxml' );
		__wxAppCode__['pages/study/bookList/bookList.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/study/bookList/bookList.wxml'] = [$gwx, './pages/study/bookList/bookList.wxml'];else __wxAppCode__['pages/study/bookList/bookList.wxml'] = $gwx( './pages/study/bookList/bookList.wxml' );
		__wxAppCode__['pages/study/chooseWord/chooseWord.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/study/chooseWord/chooseWord.wxml'] = [$gwx, './pages/study/chooseWord/chooseWord.wxml'];else __wxAppCode__['pages/study/chooseWord/chooseWord.wxml'] = $gwx( './pages/study/chooseWord/chooseWord.wxml' );
		__wxAppCode__['pages/study/homework/homework.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/study/homework/homework.wxml'] = [$gwx, './pages/study/homework/homework.wxml'];else __wxAppCode__['pages/study/homework/homework.wxml'] = $gwx( './pages/study/homework/homework.wxml' );
		__wxAppCode__['pages/study/lessonList/lessonList.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/study/lessonList/lessonList.wxml'] = [$gwx, './pages/study/lessonList/lessonList.wxml'];else __wxAppCode__['pages/study/lessonList/lessonList.wxml'] = $gwx( './pages/study/lessonList/lessonList.wxml' );
		__wxAppCode__['pages/study/listenStory/listenStory.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/study/listenStory/listenStory.wxml'] = [$gwx, './pages/study/listenStory/listenStory.wxml'];else __wxAppCode__['pages/study/listenStory/listenStory.wxml'] = $gwx( './pages/study/listenStory/listenStory.wxml' );
		__wxAppCode__['pages/study/playGame/playGame.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/study/playGame/playGame.wxml'] = [$gwx, './pages/study/playGame/playGame.wxml'];else __wxAppCode__['pages/study/playGame/playGame.wxml'] = $gwx( './pages/study/playGame/playGame.wxml' );
		__wxAppCode__['pages/study/readBook/readBook.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/study/readBook/readBook.wxml'] = [$gwx, './pages/study/readBook/readBook.wxml'];else __wxAppCode__['pages/study/readBook/readBook.wxml'] = $gwx( './pages/study/readBook/readBook.wxml' );
		__wxAppCode__['pages/study/recordVoice/recordVoice.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/study/recordVoice/recordVoice.wxml'] = [$gwx, './pages/study/recordVoice/recordVoice.wxml'];else __wxAppCode__['pages/study/recordVoice/recordVoice.wxml'] = $gwx( './pages/study/recordVoice/recordVoice.wxml' );
		__wxAppCode__['pages/study/studyIndex/studyIndex.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/study/studyIndex/studyIndex.wxml'] = [$gwx, './pages/study/studyIndex/studyIndex.wxml'];else __wxAppCode__['pages/study/studyIndex/studyIndex.wxml'] = $gwx( './pages/study/studyIndex/studyIndex.wxml' );
		__wxAppCode__['pages/teacher/class/class.json'] = {"usingComponents":{},"enablePullDownRefresh":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/teacher/class/class.wxml'] = [$gwx, './pages/teacher/class/class.wxml'];else __wxAppCode__['pages/teacher/class/class.wxml'] = $gwx( './pages/teacher/class/class.wxml' );
		__wxAppCode__['pages/teacher/login/login.json'] = {"usingComponents":{},"enablePullDownRefresh":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/teacher/login/login.wxml'] = [$gwx, './pages/teacher/login/login.wxml'];else __wxAppCode__['pages/teacher/login/login.wxml'] = $gwx( './pages/teacher/login/login.wxml' );
		__wxAppCode__['pages/teacher/outsourcing/outsourcing.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/teacher/outsourcing/outsourcing.wxml'] = [$gwx, './pages/teacher/outsourcing/outsourcing.wxml'];else __wxAppCode__['pages/teacher/outsourcing/outsourcing.wxml'] = $gwx( './pages/teacher/outsourcing/outsourcing.wxml' );
		__wxAppCode__['pages/teacher/student/student.json'] = {"usingComponents":{},"enablePullDownRefresh":true,"onReachBottomDistance":50};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/teacher/student/student.wxml'] = [$gwx, './pages/teacher/student/student.wxml'];else __wxAppCode__['pages/teacher/student/student.wxml'] = $gwx( './pages/teacher/student/student.wxml' );
		__wxAppCode__['pages/user/calendar/calendar.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/calendar/calendar.wxml'] = [$gwx, './pages/user/calendar/calendar.wxml'];else __wxAppCode__['pages/user/calendar/calendar.wxml'] = $gwx( './pages/user/calendar/calendar.wxml' );
		__wxAppCode__['pages/user/userCenter/userCenter.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/userCenter/userCenter.wxml'] = [$gwx, './pages/user/userCenter/userCenter.wxml'];else __wxAppCode__['pages/user/userCenter/userCenter.wxml'] = $gwx( './pages/user/userCenter/userCenter.wxml' );
	
	define("utils/api.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",e=arguments[1],n=arguments[2],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=null,i=null;try{r=wx.getStorageSync("xToken"),i=wx.getStorageSync("uniqueid")}catch(t){}var u=Object.assign({uniqueid:i},n),s="https://wx.rainbowclass.cn/"+e;return o&&wx.showLoading({title:"加载中...",mask:!0}),new Promise(function(e,n){wx.request({url:s,method:t,data:u,header:{"Content-Type":"application/x-www-form-urlencoded","x-token":r},success:function(t){if(console.log("res===>",t),0==t.data.code)e(t.data);else{if(2==t.data.code||"无效的token!"==t.data.err_msg)return wx.clearStorageSync(),wx.showToast({title:"用户凭证已失效，请重新登录",icon:"none"}),void wx.redirectTo({url:"../login/login"});e(t.data)}},fail:function(t){console.log("error===>",t),n(t),wx.showToast({title:res.data.err_msg,icon:"none",duration:2e3})},complete:function(t){o&&wx.hideLoading()}})})};module.exports={request:t,getUserGroupList:function(e){return t("GET","group/getUserGroupList",e)},adminLogin:function(e){return t("POST","admin/login",e)},getGroupClassInfo:function(e){return t("GET","comment/getGroupClassInfo",e)},getCommentTasks:function(e){return t("GET","comment/getCommentTasks",e)},putComment:function(e){return t("POST","comment/putComment",e)},miniAppOssSign:function(e){return t("get","sts/miniAppOssSign",e)},getVideoList:function(e){return t("get","learning/getWebcastList",e)},teacherLogin:function(e){return t("POST","review/login",e)},tearchStat:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t("get","review/user/stat",e,n)},getCommentItem:function(e){return t("get","review/comment/get",e)},putTeacherComment:function(e){return t("POST","review/comment/"+e.comment_id+"/report",e)},miniAppOssSign2:function(e){return t("get","c/sts/mini",e)}}; 
 			}); 
		define("utils/uploadVoice.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.uploadVoice=function(a,i){return new Promise(function(s,e){t().then(function(t){var n=i+"_"+Date.now(),c="https://static2.rainbowclass.cn/static/static-rainbow/comment/"+n+".mp3";0==t.code&&t.data.accessid&&t.data.policy&&t.data.signature&&wx.uploadFile({url:"https://static2.rainbowclass.cn",filePath:a,name:"file",formData:{name:n,key:"static/static-rainbow/comment/"+n+".mp3",policy:t.data.policy,OSSAccessKeyId:t.data.accessid,success_action_status:"200",signature:t.data.signature},success:function(){s(c)},fail:function(t){wx.showToast({title:"云上传失败",icon:"none"}),e(t)}})},function(t){wx.showToast({title:"签名失败",icon:"none"}),e(t)})})};var t=require("./api").miniAppOssSign2; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return(t=t.toString())[1]?t:"0"+t};module.exports={formatTime:function(e){var r=e.getFullYear(),a=e.getMonth()+1,n=e.getDate(),o=e.getHours(),f=e.getMinutes(),u=e.getSeconds();return[r,a,n].map(t).join("/")+" "+[o,f,u].map(t).join(":")},formatDate:function(e){return[e.getFullYear(),e.getMonth()+1,e.getDate()].map(t).join("-")},randomColor:function(){return["#ef5b9c","#bd6758","#f26522","#f15a22","#f58220","#dea32c","#ffe600","#5c7a29","#78a355","#1d953f","#2b4490","#585eaa","#8552a1","#33a3dc","#4e72b8","#225a1f","#f15a22"][Math.floor(17*Math.random())]},removeArrayItem:function(t,e){for(var r=t.length,a=0;a<r;a++)if(t[a]==e)return 0==a?(t.shift(),t):a==r-1?(t.pop(),t):(t.splice(a,1),t)}}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();App({onLaunch:function(){var e=this,t=wx.getStorageSync("logs")||[];t.unshift(Date.now()),wx.setStorageSync("logs",t),wx.login({success:function(t){if(t.code){console.log(t);var a=t.code;wx.request({url:"https://api.weixin.qq.com/sns/jscode2session?appid=wx0a31e875347f3ed3&secret=60ab01402a57d42245ee8ad7f692270b&js_code="+a+"&grant_type=authorization_code",data:{code:t.code},success:function(t){e.globalData.openid=t.data.openid,console.log("获取用户登录态！success",t)}})}else console.log("获取用户登录态失败！"+t.errMsg)}}),wx.getSetting({success:function(t){t.authSetting["scope.userInfo"]&&wx.getUserInfo({success:function(t){e.globalData.userInfo=t.userInfo,e.userInfoReadyCallback&&e.userInfoReadyCallback(t)}})}});var a=wx.getSystemInfoSync().model;console.log("model:"+a),-1!=a.search("iPhone X")?this.globalData.isIphoneX=!0:this.globalData.isIphoneX=!1},globalData:{userInfo:null,liveBaseUrl:"https://wx.rainbowclass.cn/",isIphoneX:!1},show:function(e,t,a){var o=wx.createAnimation({duration:800,timingFunction:"ease"});o.opacity(a).step();var s='{"'+t+'":""}';(s=JSON.parse(s))[t]=o.export(),e.setData(s)},slideupshow:function(e,t,a,o){var s=wx.createAnimation({duration:700,timingFunction:"ease"});s.translateY(a).opacity(o).step();var n='{"'+t+'":""}';(n=JSON.parse(n))[t]=s.export(),e.setData(n)},sliderightshow:function(e,t,a,o){var s=wx.createAnimation({duration:700,timingFunction:"ease"});s.translateX(a).opacity(o).step();var n='{"'+t+'":""}';(n=JSON.parse(n))[t]=s.export(),e.setData(n)}}); 
 			}); 	require("app.js");
 		__wxRoute = 'pages/liveclass/before/before';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/liveclass/before/before.js';	define("pages/liveclass/before/before.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();Page({data:{userInfo:{},hasUserInfo:!1,canIUse:wx.canIUse("button.open-type.getUserInfo"),id:3,video_time:0,webcast_time:""},onLoad:function(e){"undefined"!=e.webcast_time&&this.setData({webcast_time:e.webcast_time.substr(11,5)})}}); 
 			}); 	require("pages/liveclass/before/before.js");
 		__wxRoute = 'pages/liveclass/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/liveclass/index/index.js';	define("pages/liveclass/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp();Page({data:{userInfo:{},hasUserInfo:!1,canIUse:wx.canIUse("button.open-type.getUserInfo"),id:0,play_time_already:0},onLoad:function(e){wx.getStorageSync("userinfo");this.setData({id:e.id}),"undefined"!=e.play_time_already&&this.setData({play_time_already:e.play_time_already}),this.enterLiveClass()},enterLiveClass:function(){var a=this,t=a.data.id,i=a.data.play_time_already;wx.request({url:e.globalData.liveBaseUrl+"learning/getWebcast",data:{id:t},header:{"content-type":"application/json"},success:function(e){if(0==e.data.code){wx.setStorageSync("videoInfo",JSON.stringify(e.data.data));var a={};((e.data.data||{}).practises||[]).forEach(function(e){a[e.practise_date]=e}),setTimeout(function(){wx.redirectTo({url:"/pages/liveclass/video/video?id="+t+"&play_time_already="+i})},"2000"),wx.setStorageSync("videoInfo2",JSON.stringify(a))}else setTimeout(function(){wx.showToast({title:e.data.err_msg,icon:"none"})},"2000")}})}}); 
 			}); 	require("pages/liveclass/index/index.js");
 		__wxRoute = 'pages/liveclass/reminisce/reminisce';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/liveclass/reminisce/reminisce.js';	define("pages/liveclass/reminisce/reminisce.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{star:0,awardMedal:{},starList:[],goldNumber:0,silverNumber:0,copperNumber:0,id:0},onLoad:function(a){var r=this;a.star&&a.awardMedal?r.setData({starList:new Array(parseInt(a.star)).fill("star"),goldNumber:JSON.parse(a.awardMedal).gold,silverNumber:JSON.parse(a.awardMedal).silver,copperNumber:JSON.parse(a.awardMedal).copper,id:a.id}):r.setData({id:a.id})},toVideo:function(){var a=this.data.id;wx.redirectTo({url:"/pages/liveclass/index/index?id="+a})}}); 
 			}); 	require("pages/liveclass/reminisce/reminisce.js");
 		__wxRoute = 'pages/liveclass/video/video';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/liveclass/video/video.js';	define("pages/liveclass/video/video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},a=getApp(),e=wx.createInnerAudioContext(),o=wx.getRecorderManager();Page({data:{timer:"",countDownNum:5,id:0,userInfo:{},hasUserInfo:!1,canIUse:wx.canIUse("button.open-type.getUserInfo"),videoInfo:"",videoInfo2:"",video_url:"",isShowTopic:!0,showTopic:!1,showText:!0,showImg:!0,showImg1:!0,imgAttr:[],textAttr:[],img_url:"",showRecord:!0,showRecord1:!0,showTopicChoiceNoImg:!0,showText1:!0,active:"",topicNumber:!1,rightIcon:!0,errorIcon:!0,title:"",hadDisPlayQ:[],number:0,isRecord:!1,recording:!0,tempFilePath:"",finish_time:0,finish_time_cache:0,aanswer_finish_time:0,flag:!1,rocketAnimation:!0,result:"",isRecording:!1,closePopTimer:null,openModalTime:0,curQuestion:{},awardMedal:{gold:0,silver:0,copper:0},star:0,evaluation:!0,evaluation1:!0,img_bg_hidden:!1,answer_index_icon:0,avatarList:["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1548509200,3423898172&fm=26&gp=0.jpg","https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2277589014,3340794973&fm=26&gp=0.jpg","https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1690146490,3031415891&fm=26&gp=0.jpg","http://img2.imgtn.bdimg.com/it/u=2342918587,1779679087&fm=11&gp=0.jpg","http://img0.imgtn.bdimg.com/it/u=1833910202,2379898066&fm=11&gp=0.jpg"],avatarRList:[],avatarRandom:"",avatarRandom1:"",isShowChampion:!0,showAvatarCount:3,topic_star_img:!0,topic_star:!0,showChoiceTime:!0,showRecordTime:!0,showTitle:!0,showTitle1:!0,showClock:!0,now_star_attr:[],play_time_already:0,audio_src:"",audio_url:"",isShowControls:!0,isShowGesture:!0,fullscreen:!0,reasure_box_url:"http://static2.rainbowclass.cn/static/static-rainbow/media/treasure_box_open.mp3",openPopTimeSt:0,needPlayAudio:!1,playAudoErro:!1,isPlay:!1,isRecordSrc:!1,isRecordError:!1,videoPlay:!1,isChooseAnswer:!0},onLoad:function(t){var a=this,o=wx.getStorageSync("userinfo");o?(this.setData({userInfo:JSON.parse(o),hasUserInfo:!0}),this.reSortAvatar(1)):(console.log(222),wx.getUserInfo({success:function(t){a.setData({userInfo:t.userInfo,hasUserInfo:!0}),wx.setStorageSync("userinfo",JSON.stringify(t.userInfo)),a.reSortAvatar(1)}}));var i=wx.createVideoContext("live_class",this);wx.setInnerAudioOption({obeyMuteSwitch:!1}),this.init(),"undefined"!=t.play_time_already&&this.setData({play_time_already:t.play_time_already,isShowControls:!1,isShowGesture:!1,fullscreen:!1}),this.setData({id:t.id});var r=this;wx.getStorage({key:"videoInfo",success:function(t){r.setData({videoInfo:JSON.parse(t.data),video_url:JSON.parse(t.data).video_url})}}),wx.getStorage({key:"videoInfo2",success:function(t){r.setData({videoInfo2:JSON.parse(t.data)})}});var s=Math.floor(Math.random()*(r.data.avatarList.length-1))+0,n=s+1>r.data.avatarList.length?s-1:s+1;r.setData({avatarRandom:r.data.avatarList[s],avatarRandom1:r.data.avatarList[n]}),e.onEnded(function(){if(r.data.needPlayAudio){r.answerTime("0");var t=(new Date).getTime();r.setData({openPopTimeSt:t,isChooseAnswer:!0})}r.data.isRecordSrc&&(r.setData({isChooseAnswer:!0}),r.countDown()),r.data.videoPlay&&(r.setData({rocketAnimation:!0}),i.play())}),e.onError(function(){if(r.data.playAudoErro){r.answerTime("0");var t=(new Date).getTime();r.setData({openPopTimeSt:t})}r.data.isRecordError&&r.countDown()}),e.onPlay(function(){r.data.isPlay&&r.setData({rocketAnimation:!1})})},getUserInfo:function(t){var e=this;wx.getSetting({success:function(o){o.authSetting["scope.userInfo"]&&wx.getUserInfo({success:function(o){a.globalData.userInfo=t.detail.userInfo,e.setData({userInfo:t.detail.userInfo,hasUserInfo:!0}),e.reSortAvatar(1)},fail:function(t){}})}})},getRAvatar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=this.data.avatarList.filter(function(a){return!t.find(function(t){return t.url===a})}),e=a.length;return a[Math.floor(Math.random()*(e-1))]},reSortAvatarUpOrDown:function(t){var a=this.data.avatarRList.filter(function(t){return t.isUserAvatar});"add"===t&&a[0]&&a[0].index>=1&&this.reSortAvatar(a[0].index-1),"minus"===t&&a[0]&&a[0].index>this.showAvatarCount-1&&this.reSortAvatar(a[0].index+1)},reSortAvatar:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=new Array(3).fill("url"),e=0;e<3;e++)a[e]={index:e,url:this.getRAvatar(a)};a[t]={index:t,url:this.data.userInfo.avatarUrl,isUserAvatar:!0},this.setData({avatarRList:a})},record:function(){this.data.isChooseAnswer&&(this.data.isRecording||(this.setData({result:""}),this.openSocket(),clearInterval(this.data.timer),this.setData({timer:null}),this.setData({isRecording:!0,recording:!1,showRecord:!0,showRecord1:!0,showChoiceTime:!0,showRecordTime:!1}),this.answerTime("")))},stop:function(){this.setData({isRecording:!1}),o.stop()},onCloseSocket:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.close&&t.close()},openSocket:function(a){var i=this;this.onCloseSocket(this.socket),this._sid="uuid-t"+Date.now();this.socket=wx.connectSocket({url:"wss://wss-edu.hivoice.cn:443/ws/eval/mp3",header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){},fail:function(t){}}),this.socket.onOpen(function(t){o.start({duration:6e5,sampleRate:16e3,numberOfChannels:1,format:"mp3",frameSize:2}),i.socket.send({data:JSON.stringify({mode:"word",appkey:"o4bp6doqksrcuerqrmj3zytd3hkzx2y2bc6edja7",displayText:i.data.title,audioFormat:"mp3",eof:i._sid})})}),this.socket.onError(function(t){i.onCloseSocket(i.socket)}),this.socket.onMessage(function(a){var o=JSON.parse((a||{}).data||{});if("61443"==o.errcode)wx.showToast({title:"网络出错，请重试",icon:"none"}),i.setData({evaluation:!0,rocketAnimation:!0,recording:!0,showRecord:!1,finish_timer:i.data.finish_time_cache});else{var r=i.data.awardMedal,s=((o||{}).result||{}).score||"0";if(parseInt(s)>=60){i.reSortAvatar(0);var n=r.gold+1,c=i.data.star+3;i.setData({awardMedal:t({},r,{gold:n}),isShowChampion:!1,showRecord:!0,evaluation:!0,recording:!0,topic_star:!1,star:c,now_star_attr:new Array(3).fill("star")}),e.src="http://static2.rainbowclass.cn/static/static-rainbow/media/newperfect.mp3",e.play(),setTimeout(function(){i.setData({isPlay:!0,videoPlay:!0}),e.src="http://static2.rainbowclass.cn/static/static-rainbow/media/treasure_box_open.mp3",e.play()},3e3)}else if(parseInt(s)>=30&&parseInt(s)<60){i.reSortAvatar(1);var d=i.data.star+2,l=r.silver+1;i.setData({awardMedal:t({},r,{silver:l}),star:d,showRecord:!0,evaluation:!0,recording:!0,topic_star:!1,now_star_attr:new Array(2).fill("star")}),e.src="http://static2.rainbowclass.cn/static/static-rainbow/media/raeding_excellent.mp3",e.play()}else if(parseInt(s)>0&&parseInt(s)<30){i.reSortAvatar(1);var h=r.copper+1,u=i.data.star+1;i.setData({awardMedal:t({},r,{copper:h}),star:u,showRecord:!0,evaluation:!0,recording:!0,topic_star:!1,now_star_attr:new Array(1).fill("star"),audio_src:"http://static2.rainbowclass.cn/static/static-rainbow/media/reading_niceTry.mp3"}),e.src="http://static2.rainbowclass.cn/static/static-rainbow/media/reading_niceTry.mp3",e.play()}else i.reSortAvatar(2),e.src="http://static2.rainbowclass.cn/static/static-rainbow/media/reading_speckLoad.mp3",e.play();setTimeout(function(){i.setData({evaluation:!0,rocketAnimation:!0,recording:!0,showRecord:!0,isShowTopic:!0,videoPlay:!0})},3e3)}if(i.onCloseSocket(i.socket),a.data)try{var w=JSON.parse(a.data);i.setData({result:JSON.stringify(w,null,4)})}catch(t){}})},init:function(){var t=this;o.onStart(function(){}),o.onStop(function(a){t.setData({tempFilePath:a.tempFilePath}),clearInterval(t.data.finish_timer),t.setData({finish_timer:null})}),o.onError(function(a){t.setData({isRecording:!1}),t.onCloseSocket(t.socket)}),o.onFrameRecorded(function(a){t.socket.send({data:a.frameBuffer,success:function(t){},fail:function(t){}}),a.isLastFrame&&t.socket.send({data:t._sid,complete:function(){}})})},onShowTextQ:function(t){this.setData({textAttr:t.option,imgAttr:[],showImg:!0,showRecord:!0,showRecord1:!0,showText:!1})},onShowRecordQ:function(t){this.setData({isShowTopic:!1,showTopic:!1,showTopicChoiceNoImg:!0,showImg:!0,showText:!0,showRecord1:!0,showRecord:!1,img_url:t.img_url,finish_time:t.finish_time,finish_time_cache:t.finish_time,showText1:!0,showImg1:!0,showChoiceTime:!0,showRecordTime:!1})},onShowImageQ:function(t){this.setData({imgAttr:t.option,textAttr:[],showText:!0,showRecord:!0,showRecord1:!0,showImg:!1})},onShowImageQNoImg:function(t){this.setData({imgAttr:t.option,textAttr:[],showText:!0,showRecord:!0,showRecord1:!0,showImg:!0,showText1:!0,showImg1:!1})},onShowTextQNoImg:function(t){this.setData({textAttr:t.option,imgAttr:[],showImg:!0,showImg1:!0,showRecord:!0,showRecord1:!0,showText:!0,showText1:!1})},onShowRecordQNoImg:function(t){this.setData({isShowTopic:!1,showTopic:!0,showTopicChoiceNoImg:!1,showImg:!0,showText:!0,showRecord:!0,showRecord1:!1,img_url:t.img_url,finish_time:t.finish_time,finish_time_cache:t.finish_time,showText1:!0,showImg1:!0,showChoiceTime:!0,showRecordTime:!1})},bindtimeupdate:function(a){var o=this,i=o.data.videoInfo2,r=i[parseInt(a.detail.currentTime)],s=wx.createVideoContext("live_class",this),n=parseInt(a.detail.currentTime),c=o.data.hadDisPlayQ.find(function(t){return t===n});if(r&&r.practise_date&&!c){clearInterval(o.data.timer),clearInterval(o.data.finish_timer),o.setData({number:o.data.number+1,topic_star:!0,rocketAnimation:!0,showClock:!0,timer:null,finish_timer:null}),o.setData({isShowTopic:!1,showTopicChoiceNoImg:!0,showTopic:!1,img_url:r.img_url,finish_time:r.finish_time,curQuestion:r,showRecordTime:!0,showChoiceTime:!1,answer_finish_time:r.finish_time,audio_url:r.audio_url,title:r.title}),s.pause();var d=(new Date).getTime();o.data.hadDisPlayQ.push(n);var l=t({},r,{openPopTime:d});i[n]=l,o.setData({videoInfo2:i}),r.img_url?(o.setData({showTitle:!1,showTitle1:!0}),0==r.type?(o.setData({isShowTopic:!1,showTopicChoiceNoImg:!0,showTopic:!1,img_url:r.img_url,finish_time:r.finish_time}),o.data.audio_url?(e.src=r.audio_url,e.play(),o.setData({needPlayAudio:!0,playAudoErro:!0,isPlay:!1,isChooseAnswer:!1})):(o.answerTime("0"),o.setData({isChooseAnswer:!0})),r.option.forEach(function(t){"image"===t.type?o.onShowImageQ(r):"text"===t.type&&o.onShowTextQ(r)})):(o.onShowRecordQ(r),o.data.audio_url?(e.src=r.audio_url,e.play(),o.setData({playAudoErro:!0,isRecordSrc:!0,isRecordError:!0,isPlay:!1,isChooseAnswer:!1})):(o.countDown(),o.setData({isChooseAnswer:!0})))):(o.setData({showTitle:!0,showTitle1:!1}),0==r.type?(o.setData({isShowTopic:!1,showTopic:!0,showTopicChoiceNoImg:!1}),o.data.audio_url?(e.src=r.audio_url,e.play(),o.setData({needPlayAudio:!0,playAudoErro:!0,isPlay:!1,isChooseAnswer:!1})):(o.answerTime("0"),o.setData({isChooseAnswer:!0})),r.option.forEach(function(t){"image"===t.type&&o.onShowImageQNoImg(r),"text"===t.type&&o.onShowTextQNoImg(r)})):(o.onShowRecordQNoImg(r),o.data.audio_url?(e.src=r.audio_url,e.play(),o.setData({playAudoErro:!0,isRecordSrc:!0,isRecordError:!0,isPlay:!1,isChooseAnswer:!1})):(o.countDown(),o.setData({isChooseAnswer:!0}))))}},bindended:function(){var t=this,a=t.data.star,e=JSON.stringify(t.data.awardMedal),o=t.data.id;wx.redirectTo({url:"/pages/liveclass/reminisce/reminisce?star="+a+"&awardMedal="+e+"&id="+o})},choiceAnswer:function(a){var o=this;if(o.data.isChooseAnswer){var i=o.data.answer_finish_time,r=a.currentTarget.dataset.type,s=a.currentTarget.dataset.item,n=this.data.curQuestion;clearInterval(o.data.finish_timer),clearInterval(o.data.timer),o.setData({finish_timer:null,timer:null});var c=(new Date).getTime(),d=o.data.videoInfo2;if(!d[n.practise_date].isAnswered){d[n.practise_date]=t({},d[n.practise_date],{answerTimeStamp:c,isAnswered:!0}),o.setData({videoInfo2:d});var l=0;l=o.data.videoInfo2[n.practise_date].audio_url?o.data.openPopTimeSt:o.data.videoInfo2[n.practise_date].openPopTime;var h=(o.data.videoInfo2[n.practise_date].answerTimeStamp-l)%6e4/1e3,u=a.currentTarget.dataset.index;if(o.setData({answer_index_icon:u}),"text"==r){var w=o.data.textAttr.map(function(a,r){if(r===u){if(0==s.is_crrect)o.reSortAvatar(2),e.src="http://static2.rainbowclass.cn/static/static-rainbow/media/reading_game3_wrong.mp3",e.play(),a=t({},a,{background:"#ff8e8b",color:"#fff",border:"solid 1rpx #ff8e8b",answer_index:u,display:"none"}),o.setData({rightIcon:!0,errorIcon:!1,topicNumber:!0,videoPlay:!0});else{var n=o.data.star+1,c=o.data.awardMedal;if(h<=.5*i){var d=c.gold+1;o.reSortAvatar(0),o.setData({awardMedal:t({},c,{gold:d}),isShowChampion:!1})}else if(h>=.5*i&&h<=.8*i){o.reSortAvatar(1);var l=c.silver+1;o.setData({awardMedal:t({},c,{silver:l}),rocketAnimation:!0})}else if(h>=.8*i&&h<=1*i){o.reSortAvatar(1);var w=c.copper+1;o.setData({awardMedal:t({},c,{copper:w}),rocketAnimation:!0})}e.src="http://static2.rainbowclass.cn/static/static-rainbow/media/reading_game3_right.mp3",a=t({},a,{background:"#65dfbb",color:"#fff",border:"solid 1rpx #65dfbb",answer_index:u,display:"none"}),o.setData({errorIcon:!0,topicNumber:!0,rightIcon:!1,star:n,now_star_attr:new Array(1).fill("star")}),e.play(),setTimeout(function(){o.setData({showText:!0,showText1:!0,topic_star:!1,audio_src:""})},2e3),setTimeout(function(){e.src="http://static2.rainbowclass.cn/static/static-rainbow/media/treasure_box_open.mp3",e.play(),o.setData({isPlay:!0,videoPlay:!0})},3e3)}setTimeout(function(){o.setData({isShowTopic:!0,showTopic:!0,showTopicChoiceNoImg:!0,textAttr:[],rightIcon:!0,errorIcon:!0,topic_star:!0,videoPlay:!0})},3e3)}else a=t({},a,{background:"",color:"",border:""});return a});o.setData({textAttr:w})}else if("image"==r){var m=o.data.imgAttr.map(function(a,r){if(r===u){if(0==s.is_crrect)o.reSortAvatar(2),e.src="http://static2.rainbowclass.cn/static/static-rainbow/media/reading_game3_wrong.mp3",e.play(),a=t({},a,{background:"#ff8e8b",color:"#fff",border:"solid 1rpx #ff8e8b",answer_index:u,display:"none"}),o.setData({rightIcon:!0,errorIcon:!1,topicNumber:!0,videoPlay:!0});else{var n=o.data.star+1;a=t({},a,{background:"#65dfbb",color:"#fff",border:"solid 1rpx #65dfbb",display:"none",answer_index:u}),o.setData({errorIcon:!0,topicNumber:!0,rightIcon:!1,star:n,now_star_attr:new Array(1).fill("star")}),e.src="http://static2.rainbowclass.cn/static/static-rainbow/media/reading_game3_right.mp3",e.play(),setTimeout(function(){o.setData({showImg:!0,showImg1:!0,topic_star:!1})},2e3);var c=o.data.awardMedal;if(h<=.5*i){var d=c.gold+1;o.reSortAvatar(0),o.setData({awardMedal:t({},c,{gold:d}),isShowChampion:!1})}else if(h>=.5*i&&h<=.8*i){o.reSortAvatar(1);var l=c.silver+1;o.setData({awardMedal:t({},c,{silver:l}),rocketAnimation:!0})}else if(h>.8*i&&h<=1*i){o.reSortAvatar(1);var w=c.copper+1;o.setData({awardMedal:t({},c,{copper:w}),rocketAnimation:!0})}setTimeout(function(){e.src="http://static2.rainbowclass.cn/static/static-rainbow/media/treasure_box_open.mp3",e.play(),o.setData({isPlay:!0,videoPlay:!0})},2e3)}setTimeout(function(){o.setData({isShowTopic:!0,showTopic:!0,showTopicChoiceNoImg:!0,imgAttr:[],rightIcon:!0,errorIcon:!0,topic_star:!0,videoPlay:!0})},3e3)}else a=t({},a,{background:"",color:"",border:"",display:""});return a});o.setData({imgAttr:m})}}}},onReady:function(){this.videoContexts=wx.createVideoContext("live_class",this),this.videoContexts.requestFullScreen({direction:90})},closeFullscreen:function(){wx.redirectTo({url:"/pages/liveclass/videoList/videoList"})},answerTime:function(t){var a=this;clearInterval(a.data.finish_timer),a.setData({finish_timer:null,needPlayAudio:!1,playAudoErro:!1,isPlay:!1,isRecordSrc:!1,isRecordError:!1,videoPlay:!1});var o=setInterval(function(){var o=a.data.finish_time;o--,a.setData({finish_time:o}),o<=0&&(clearInterval(a.data.finish_timer),a.setData({finish_timer:null,videoPlay:!0}),a.reSortAvatar(2),a.stop(),""!=t?(e.src="http://static2.rainbowclass.cn/static/static-rainbow/media/reading_game3_wrong.mp3",e.play(),a.setData({isShowTopic:!0,showTopic:!0,showTopicChoiceNoImg:!0,textAttr:[],evaluation:!0})):a.setData({recording:!0,showRecord:!0,evaluation:!1,showClock:!1,showChoiceTime:!0,showRecordTime:!0}))},1e3);a.setData({finish_timer:o})},countDown:function(){var t=this,a=t.data.countDownNum;clearInterval(t.data.timer),t.setData({timer:null,needPlayAudio:!1,playAudoErro:!1,isPlay:!1,isRecordSrc:!1,isRecordError:!1,videoPlay:!1});var o=setInterval(function(){a--,t.setData({countDownNum:a}),a<=0&&(clearInterval(t.data.timer),t.setData({isShowTopic:!0,showTopic:!0,showTopicChoiceNoImg:!0,countDownNum:5,timer:null,videoPlay:!0}),e.src="http://static2.rainbowclass.cn/static/static-rainbow/media/reading_game3_wrong.mp3",e.play(),t.reSortAvatar(2))},1e3);t.setData({timer:o})}}); 
 			}); 	require("pages/liveclass/video/video.js");
 		__wxRoute = 'pages/liveclass/videoList/videoList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/liveclass/videoList/videoList.js';	define("pages/liveclass/videoList/videoList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp();Page({data:{userInfo:{},hasUserInfo:!1,canIUse:wx.canIUse("button.open-type.getUserInfo"),offset:0,current_day_webcast:[],old_webcast_list:[],play_time_already:0,is_show_page:!0},onLoad:function(e){this.getList();var t=new Date("2019/11/21 00:00:00").getTime();(new Date).getTime()>t&&this.setData({is_show_page:!1})},getList:function(t){var a=this,s={offset:"concat"==t?a.data.offset:0,limit:10};wx.request({url:e.globalData.liveBaseUrl+"learning/getWebcastList",data:s,header:{"content-type":"application/json"},success:function(e){if(0==e.data.code){var s=e.data.data.current_day_webcast,i=e.data.data.old_webcast_list.data;0!=s.length&&a.setData({current_day_webcast:s}),0!=i&&("concat"==t?a.setData({old_webcast_list:a.data.old_webcast_list.concat(i)}):a.setData({old_webcast_list:i})),"concat"==t&&Array.isArray(i)&&0==i.length&&wx.showToast({title:"没有数据了～",icon:"none"})}else wx.showToast({title:e.data.err_msg,icon:"none"})}})},clickVideo:function(e){var t=e.currentTarget.dataset.id,a=e.currentTarget.dataset.time,s=e.currentTarget.dataset.begin,i=(new Date).getTime(),n=s.replace(/-/g,"/"),r=new Date(n).getTime(),c=r+1e3*a,o=Math.abs((parseInt(r)-parseInt(i))/1e3);i<r?wx.redirectTo({url:"/pages/liveclass/before/before?webcast_time="+s}):i>=r&&i<c?wx.redirectTo({url:"/pages/liveclass/index/index?play_time_already="+o+"&id="+t}):wx.redirectTo({url:"/pages/liveclass/reminisce/reminisce?id="+t})},playVideo:function(e){var t=e.currentTarget.dataset.id;wx.redirectTo({url:"/pages/liveclass/index/index?id="+t})},onPullDownRefresh:function(e){this.getList()},onReachBottom:function(){this.setData({offset:this.data.offset+10}),this.getList("concat")}}); 
 			}); 	require("pages/liveclass/videoList/videoList.js");
 		__wxRoute = 'pages/teacher/login/login';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/teacher/login/login.js';	define("pages/teacher/login/login.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../utils/api.js").adminLogin,t=require("../../../utils/api.js").teacherLogin;Page({data:{username:"",password:"",btnCanClick:!0,isOutsideTeacher:!0},onLoad:function(e){},hanleUsername:function(e){var t=e.detail.value;this.setData({username:t})},handlePassword:function(e){var t=e.detail.value;this.setData({password:t})},teacherLogin:function(){var a=this,n=this.data,o=n.username,i=n.password;o?i?this.data.btnCanClick?(this.data.btnCanClick=!1,1==this.data.isOutsideTeacher?t({name:o,password:i}).then(function(e){if(0===e.code&&e.data.access_token){wx.setStorage({key:"xToken",data:e.data.access_token}),wx.setStorage({key:"teacherName",data:e.data.name}),wx.setStorage({key:"teacher_id",data:e.data.id}),wx.setStorageSync("teacher_outside",a.data.isOutsideTeacher?0:1);var t=Date.parse(new Date);t/=1e3,wx.setStorage({key:"xToken_time",data:t}),a.jumpToComment()}else a.data.btnCanClick=!0},function(e){a.data.btnCanClick=!0}):e({name:o,password:i}).then(function(e){if(0===e.code&&e.data.xToken){wx.setStorage({key:"xToken",data:e.data.xToken}),wx.setStorageSync("teacher_outside",a.data.isOutsideTeacher?0:1);var t=Date.parse(new Date);t/=1e3,wx.setStorage({key:"xToken_time",data:t}),a.jumpToComment()}else a.data.btnCanClick=!0},function(e){a.data.btnCanClick=!0})):wx.showToast({title:"您点击的太频繁",icon:"none"}):wx.showToast({title:"请填写密码",icon:"none"}):wx.showToast({title:"请填写用户名",icon:"none"})},jumpToComment:function(){var e=parseInt(wx.getStorageSync("teacher_outside")),t=this;console.log("teacher_outside:"+e),e<=0?wx.redirectTo({url:"../outsourcing/outsourcing",complete:function(){t.data.btnCanClick=!0}}):wx.redirectTo({url:"../student/student",complete:function(){t.data.btnCanClick=!0}})},switchChanged:function(e){this.setData({isOutsideTeacher:!e.detail.value})},onReady:function(){var e=this,t=Date.parse(new Date);t/=1e3;var a=wx.getStorageSync("teacherName").toString(),n=wx.getStorageSync("teacher_id").toString(),o=wx.getStorageSync("xToken").toString();t-parseInt(wx.getStorageSync("xToken_time"))<=172800&&null!=o&&o.length>7&&null!=n&&n.length>0&&null!=a&&a.length>0&&(wx.showLoading({title:"正在登录..."}),setTimeout(function(){e.jumpToComment(),wx.hideLoading()},150))},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){try{wx.clearStorageSync()}catch(e){wx.showToast({title:"刷新失败",icon:"none"})}},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/teacher/login/login.js");
 		__wxRoute = 'pages/teacher/outsourcing/outsourcing';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/teacher/outsourcing/outsourcing.js';	define("pages/teacher/outsourcing/outsourcing.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var e=require("../../../utils/api.js").getCommentItem,a=require("../../../utils/api.js").putTeacherComment,n=require("../../../utils/api.js").tearchStat,o=require("../../../utils/uploadVoice.js").uploadVoice,i=wx.getRecorderManager(),c=wx.createInnerAudioContext(),s=0,r=getApp();Page({data:{teacherName:"rainbow",teacher_id:"",schedule_id:0,maskHidden:!0,isRecord:!1,is_start:!1,iphoneX:!1,teacherText:"",tempFilePath:"",tempVoiceTime:0,teacherHaveComment:!1,status_text:"",comment_done:!1,comment_item:null,current_month_comment_num:0,last_month_comment_num:0,all_comment_num:0,today_comment:0,income:0,btn_next_text:"下一个"},getCommentTask:function(t){var a=this,n={teacher_id:this.data.teacher_id,skip:t};this.setData({comment_item:null}),e(n).then(function(t){if(console.log(t),0==t.code&&t.data&&t.data.comment&&t.data.picBookData){var e=t.data;a.setData({comment_item:e,comment_done:!1}),r.slideupshow(a,"slide_up",0,1)}else wx.showToast({title:t.err_msg,icon:"none"});null==t.data.comment||void 0==t.data.comment.id||null==t.data.comment.id?(a.setData({status_text:"目前没有可点评的数据，稍后可以点击刷新按钮。",btn_next_text:"刷 新"}),wx.showToast({title:"没有数据了～",icon:"none"})):a.setData({status_text:"",btn_next_text:"下一个"})},function(t){console.log(t)})},getTearchStat:function(){var t=this,e={teacher_id:this.data.teacher_id};n(e,!1).then(function(e){if(0==e.code&&e.data){var a=e.data;t.setData({current_month_comment_num:a.current_month,last_month_comment_num:a.last_month,all_comment_num:a.total,income:a.income})}},function(t){console.log(t)})},showModel:function(t){c.pause();var e=t.currentTarget.dataset,a=e.commentid,n=e.textcomment,o=e.useraudiourl,i=e.istext;a?(i?this.setData({teacherText:n,istext:i}):this.setData({useraudiourl:o,istext:i,tempFilePath:"",teacherHaveComment:!1}),this.setData({maskHidden:!1,comment_id:a})):wx.showToast({title:"commentid为空",icon:"none"})},cancel:function(){this.data.istext||(i.stop(),c&&c.pause()),this.setData({maskHidden:!0,is_start:!1})},confirm:function(t){var e=this,a={comment_id:this.data.comment_id,teacher_id:this.data.teacher_id};if(this.data.istext){if(!this.data.teacherText)return void wx.showToast({title:"点评内容为空",icon:"none"});a.text_content=this.data.teacherText,this.putCommentWrapper(a)}else{c&&c.pause();var n=this.data.tempFilePath;if(!n)return void wx.showToast({title:"没有录音点评",icon:"none"});o(n,a.teacher_id).then(function(t){console.log("res",t),a.audio_url=t,a.audio_duration=s,e.putCommentWrapper(a)},function(t){})}},inputFn:function(t){this.data.teacherText=t.detail.value},putCommentWrapper:function(e){var n=this;a(e).then(function(e){if(0!=e.code)void 0!=e.data.debug&&null!=e.data.debug&&e.data.debug.toString().length>0?wx.showToast({title:e.data.debug,icon:"none"}):wx.showToast({title:e.err_msg,icon:"none"});else{n.setData(t({comment_done:!0},"comment_item.comment.text_comment",n.data.teacherText)),wx.showToast({title:"点评提交成功",icon:"success"}),n.cancel();var a="";a=n.data.istext?"文字点评已提交，可以继续修改点评":"语音点评已提交，可以继续修改点评",n.setData({status_text:a})}},function(t){n.setData({maskHidden:!0}),wx.showToast({title:t.err_msg,icon:"none"})})},next_item:function(t){if(this.data.comment_done)this.loadCommentData();else{var e=this;"刷 新"==this.data.btn_next_text?e.loadCommentData(1):wx.showModal({title:"提示",content:"当前跟读尚未点评，确认要跳过吗？",success:function(t){t.confirm&&e.loadCommentData(1)}})}},startRecord:function(t){var e=this;wx.authorize({scope:"scope.record",success:function(){var t={duration:6e4,sampleRate:8e3,numberOfChannels:2,encodeBitRate:48e3,format:"mp3",audioSource:"auto"};e.setData({isRecord:!0,is_start:!0}),i.start(t)}})},stopRecord:function(t){i.stop(),this.setData({is_start:!1})},handleTouchMove:function(t){},playTemp:function(){c.paused?c.play():c.pause()},againRecord:function(){this.setData({teacherHaveComment:!1,tempFilePath:null,is_start:!1}),c.pause(),this.startRecord()},playAlreadyVoice:function(t){c.src=t.target.dataset.alreadyVoice,c.play()},playStudentVoice:function(t){c.src=t.currentTarget.dataset.userAudioUrl,c.play()},logout:function(){wx.showModal({title:"提示",content:"确定要退出登录吗？",success:function(t){t.confirm&&wx.clearStorage({complete:function(){wx.redirectTo({url:"../login/login"})}})}})},loadCommentData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;r.slideupshow(this,"slide_up",450,0),this.getTearchStat(),this.getCommentTask(t)},onLoad:function(t){var e=this;try{wx.getStorageSync("xToken")||wx.redirectTo({url:"/pages/teacher/login/login"})}catch(t){return}this.setData({iphoneX:getApp().globalData.isIphoneX}),i.onStop(function(t){console.log("onStop"),t.duration&&t.tempFilePath&&(c.src=t.tempFilePath,s=Math.ceil(t.duration/1e3),e.setData({tempFilePath:t.tempFilePath,tempVoiceTime:s,teacherHaveComment:!0,is_start:!1,isRecord:!1,playText:"点击播放",iconSrc:"../../../image/teacher/play.png"}))}),i.onError(function(t){e.data.is_start&&wx.showToast({title:"录音失败",icon:"none"})}),i.onInterruptionBegin(function(t){wx.showToast({title:"录音暂停",icon:"none"})}),c.onPlay(function(t){e.setData({playText:"点击暂停",iconSrc:"../../../image/teacher/pause.png"})}),c.onStop(function(t){e.setData({playText:"点击播放",iconSrc:"../../../image/teacher/play.png"})}),c.onPause(function(t){e.setData({playText:"点击播放",iconSrc:"../../../image/teacher/play.png"})}),c.onEnded(function(t){e.setData({playText:"点击播放",iconSrc:"../../../image/teacher/play.png"})}),null!=wx.getStorageSync("teacher_id")&&parseInt(wx.getStorageSync("teacher_id"))>0&&this.setData({teacherName:wx.getStorageSync("teacherName"),teacher_id:wx.getStorageSync("teacher_id")}),this.loadCommentData()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){console.log("正在下拉刷新")},onReachBottom:function(){},onShareAppMessage:function(){return{title:"title",desc:"desc",path:"path"}}}); 
 			}); 	require("pages/teacher/outsourcing/outsourcing.js");
 		__wxRoute = 'pages/teacher/student/student';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/teacher/student/student.js';	define("pages/teacher/student/student.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../utils/util.js").formatDate,e=require("../../../utils/api.js").getCommentTasks,a=require("../../../utils/api.js").putComment,i=require("../../../utils/uploadVoice.js").uploadVoice,s=require("../../../utils/api.js").getGroupClassInfo,n=wx.getRecorderManager(),o=wx.createInnerAudioContext(),c=t(new Date),r=(t(new Date(Date.now()-1728e5)),"");Page({data:{teacherName:"rainbow",teacher_id:"",groupInfo:{},startDate:c,endDate:c,group_ids:"",class_ids:"",schedule_id:0,user_id:"",is_finish:2,offset:0,userList:[],scheduleDateList:[],scheduleDateListIndex:0,maskHidden:!0,isRecord:!1,is_start:!1,teacherText:"",tempFilePath:"",teacherHaveComment:!1},getClass:function(){var t=this;s().then(function(e){if(0==e.code&&e.data){var a=e.data,i=a.default_class_ids,s=a.default_group_ids,n=(a.groupClassInfo,a.teacher);""==s&&(s=0),""==i&&(i=0),t.setData({group_ids:s,class_ids:i}),n&&(t.setData({teacherName:n.name,teacher_id:n.id}),wx.setStorage({key:"teacherName",data:n.name}),wx.setStorage({key:"teacher_id",data:n.id})),t.getList()}},function(t){console.log(t)})},onLoad:function(t){var e=this;try{wx.getStorageSync("xToken")||this.logout()}catch(t){return}n.onStop(function(t){console.log("onStop"),t.duration&&t.tempFilePath&&(o.src=t.tempFilePath,r=Math.ceil(t.duration/1e3),e.setData({tempFilePath:t.tempFilePath,tempVoiceTime:r,teacherHaveComment:!0,is_start:!1,isRecord:!1,playText:"点击播放",iconSrc:"../../../image/teacher/play.png"}))}),n.onError(function(t){wx.showToast({title:"录音失败",icon:"none"})}),n.onInterruptionBegin(function(t){wx.showToast({title:"录音暂停",icon:"none"})}),o.onPlay(function(t){e.setData({playText:"点击暂停",iconSrc:"../../../image/teacher/pause.png"})}),o.onStop(function(t){e.setData({playText:"点击播放",iconSrc:"../../../image/teacher/play.png"})}),o.onPause(function(t){e.setData({playText:"点击播放",iconSrc:"../../../image/teacher/play.png"})}),o.onEnded(function(t){e.setData({playText:"点击播放",iconSrc:"../../../image/teacher/play.png"})}),this.setData({teacherName:wx.getStorageSync("teacherName")}),null!=wx.getStorageSync("teacher_id")&&parseInt(wx.getStorageSync("teacher_id"))>0&&this.setData({teacher_id:wx.getStorageSync("teacher_id")}),0!=Object.keys(t).length?(this.setData({group_ids:t.group_ids,class_ids:t.class_ids}),this.getList()):this.getClass()},bingStartDateChange:function(e){this.setData({startDate:e.detail.value});var a=new Date(e.detail.value).getTime(),i=new Date(this.data.endDate).getTime(),s=t(new Date(a+1728e5));(a-i>0||i-a>1728e5)&&this.setData({endDate:s}),this.getList()},bingEndDateChange:function(e){this.setData({endDate:e.detail.value});var a=new Date(e.detail.value).getTime(),i=new Date(this.data.startDate).getTime(),s=t(new Date(a-1728e5));(a-i>1728e5||i-a>0)&&this.setData({startDate:s}),this.getList()},userIdInput:function(t){console.log(t),this.setData({user_id:t.detail.value})},search:function(){this.data.user_id?this.getList():wx.showToast({title:"学号为空",icon:"none"})},selectClass:function(){wx.navigateTo({url:"../class/class",complete:function(){},success:function(t){}})},logout:function(){wx.clearStorage({complete:function(){wx.redirectTo({url:"../login/login"})}})},bingClassDateChange:function(t){this.setData({scheduleDateListIndex:t.detail.value,schedule_id:this.data.scheduleDateList[t.detail.value].schedule_id}),this.getList()},switchChange:function(t){t.detail.value?this.setData({is_finish:1}):this.setData({is_finish:2}),this.getList()},getList:function(t){var a=this,i={start_date:this.data.startDate,end_date:this.data.endDate,schedule_id:this.data.schedule_id,user_id:this.data.user_id,is_finish:this.data.is_finish,offset:"concat"==t?this.data.offset:0,limit:10,class_ids:this.data.class_ids,group_ids:this.data.group_ids};console.log("请求的参数",i),e(i).then(function(e){if(console.log(e),0==e.code&&e.data.data&&e.data.data.picBookData){var i=e.data.data.picBookData;console.log("userList",i),"concat"==t?a.setData({userList:a.data.userList.concat(i)}):a.setData({userList:i}),Array.isArray(i)&&0==i.length&&wx.showToast({title:"没有数据了～",icon:"none"})}if(0==e.code&&e.data.scheduleDate){var s=e.data.scheduleDate;s.unshift({schedule_id:0,class_date:"选择课程时间"}),a.setData({scheduleDateList:s})}},function(t){console.log(t)})},showModel:function(t){o.pause();var e=t.target.dataset,a=e.commentid,i=e.textcomment,s=e.useraudiourl,n=e.istext;a?(n?this.setData({text_comment:i,istext:n}):this.setData({useraudiourl:s,istext:n,tempFilePath:"",teacherHaveComment:!1}),this.setData({maskHidden:!1,comment_id:a})):wx.showToast({title:"commentid为空",icon:"none"})},cancel:function(){n.stop(),this.setData({maskHidden:!0,is_start:!1})},confirm:function(t){var e=this,a={comment_id:this.data.comment_id,teacher_id:this.data.teacher_id};if(this.data.istext){if(!this.data.teacherText)return void wx.showToast({title:"点评内容为空",icon:"none"});a.text_content=this.data.teacherText,this.putCommentWrapper(a)}else{var s=this.data.tempFilePath;if(!s)return void wx.showToast({title:"没有录音点评",icon:"none"});i(s,a.teacher_id).then(function(t){console.log("res",t),a.audio_url=t,a.audio_duration=r,e.putCommentWrapper(a)},function(t){})}},inputFn:function(t){this.data.teacherText=t.detail.value},putCommentWrapper:function(t){var e=this;a(t).then(function(a){if(0!=a.code)wx.showToast({title:err.err_msg,icon:"none"});else{var i=e.data.userList.map(function(e){return e.comment.id==t.comment_id?(e.comment=a.data,e):e});e.setData({userList:i,maskHidden:!0})}},function(t){e.setData({maskHidden:!0}),wx.showToast({title:err.err_msg,icon:"none"})})},startRecord:function(t){var e=this;wx.authorize({scope:"scope.record",success:function(){var t={duration:6e4,sampleRate:32e3,numberOfChannels:2,encodeBitRate:192e3,format:"mp3",audioSource:"auto"};e.setData({isRecord:!0,is_start:!0}),n.start(t)}})},stopRecord:function(t){n.stop(),this.setData({is_start:!1})},handleTouchMove:function(t){},playTemp:function(){o.paused?o.play():o.pause()},againRecord:function(){this.setData({teacherHaveComment:!1,tempFilePath:null,is_start:!1}),o.pause()},playAlreadyVoice:function(t){o.src=t.target.dataset.alreadyVoice,o.play()},playStudentVoice:function(t){o.src=t.currentTarget.dataset.userAudioUrl,o.play()},refesh:function(){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(t){console.log("pulldownrefresh"),this.getList()},onReachBottom:function(){console.log("onreachbottom"),this.setData({offset:this.data.offset+10}),this.getList("concat")},onShareAppMessage:function(){}}); 
 			}); 	require("pages/teacher/student/student.js");
 		__wxRoute = 'pages/teacher/class/class';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/teacher/class/class.js';	define("pages/teacher/class/class.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var e=require("../../../utils/util.js"),a=e.randomColor,o=require("../../../utils/api.js").getGroupClassInfo,n=[],s=[];Page({data:{teacherName:"RainBow",lessonList:[]},onLoad:function(t){n=[],s=[];try{wx.getStorageSync("xToken")||wx.redirectTo({url:"/pages/teacher/login/login"})}catch(t){}this.getClass()},getClass:function(){var t=this;o().then(function(e){if(0==e.code&&e.data){var o=e.data,n=o.groupClassInfo,s=o.teacher;if(s&&(t.setData({teacherName:s.name}),wx.setStorage({key:"teacherName",data:s.name}),wx.setStorage({key:"teacher_id",data:s.id})),n&&n.data){var r=e.data.groupClassInfo.data;(r=Array.isArray(r)?r:[]).forEach(function(t){t.bgColor=a(),t.class.forEach(function(t){t.selstatus=0})}),t.setData({lessonList:r})}}},function(t){console.log(t)})},checkboxChange:function(t){console.log(t.detail.value)},logout:function(){wx.redirectTo({url:"../student/student?class_ids="+s+"&group_ids="+n})},gotoWithLesson:function(t){console.log(t.target)},gotoWithClass:function(a){console.log(a.target);var o=a.currentTarget.dataset.index,r=a.currentTarget.dataset.groupindex,i=this.data.lessonList[r].class[o].selstatus,u=a.target.dataset,c=u.classinfo;u.groupname,u.bgcolor;0==i?(i=1,n.push(c.group_id),s.push(c.id)):(i=0,e.removeArrayItem(n,c.group_id),e.removeArrayItem(s,c.id)),n=n.filter(function(t,e,a){return a.indexOf(t)==e});var l="lessonList["+r+"].class["+o+"].selstatus";this.setData(t({},l,i))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){this.getClass()},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/teacher/class/class.js");
 		__wxRoute = 'pages/study/lessonList/lessonList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/study/lessonList/lessonList.js';	define("pages/study/lessonList/lessonList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../utils/api").getUserGroupList;Page({data:{groupList:[]},onLoad:function(t){this.getList()},getList:function(){var n=this;t().then(function(t){var o=t.currently_learning_list.concat(t.closed_list);o.forEach(function(t){console.log(t),t.course_cover_url||(t.course_cover_url="http://static2.rainbowclass.cn/static/static-rainbow/img/default.jpg")}),n.setData({groupList:o})})},goToStudyIndex:function(){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/study/lessonList/lessonList.js");
 		__wxRoute = 'pages/study/bookList/bookList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/study/bookList/bookList.js';	define("pages/study/bookList/bookList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/study/bookList/bookList.js");
 		__wxRoute = 'pages/study/readBook/readBook';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/study/readBook/readBook.js';	define("pages/study/readBook/readBook.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/study/readBook/readBook.js");
 		__wxRoute = 'pages/study/studyIndex/studyIndex';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/study/studyIndex/studyIndex.js';	define("pages/study/studyIndex/studyIndex.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/study/studyIndex/studyIndex.js");
 		__wxRoute = 'pages/study/listenStory/listenStory';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/study/listenStory/listenStory.js';	define("pages/study/listenStory/listenStory.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/study/listenStory/listenStory.js");
 		__wxRoute = 'pages/study/chooseWord/chooseWord';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/study/chooseWord/chooseWord.js';	define("pages/study/chooseWord/chooseWord.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/study/chooseWord/chooseWord.js");
 		__wxRoute = 'pages/study/recordVoice/recordVoice';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/study/recordVoice/recordVoice.js';	define("pages/study/recordVoice/recordVoice.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/study/recordVoice/recordVoice.js");
 		__wxRoute = 'pages/study/playGame/playGame';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/study/playGame/playGame.js';	define("pages/study/playGame/playGame.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/study/playGame/playGame.js");
 		__wxRoute = 'pages/study/homework/homework';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/study/homework/homework.js';	define("pages/study/homework/homework.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/study/homework/homework.js");
 		__wxRoute = 'pages/user/userCenter/userCenter';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/userCenter/userCenter.js';	define("pages/user/userCenter/userCenter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/user/userCenter/userCenter.js");
 		__wxRoute = 'pages/user/calendar/calendar';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/calendar/calendar.js';	define("pages/user/calendar/calendar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/user/calendar/calendar.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var s=getApp();Page({data:{motto:"Hello World",userInfo:{},hasUserInfo:!1,canIUse:wx.canIUse("button.open-type.getUserInfo")},bindViewTap:function(){wx.navigateTo({url:"../logs/logs"})},onLoad:function(){var e=this;s.globalData.userInfo?this.setData({userInfo:s.globalData.userInfo,hasUserInfo:!0}):this.data.canIUse?s.userInfoReadyCallback=function(s){e.setData({userInfo:s.userInfo,hasUserInfo:!0})}:wx.getUserInfo({success:function(o){s.globalData.userInfo=o.userInfo,e.setData({userInfo:o.userInfo,hasUserInfo:!0})}})},getUserInfo:function(e){console.log(e),s.globalData.userInfo=e.detail.userInfo,this.setData({userInfo:e.detail.userInfo,hasUserInfo:!0})}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/logs/logs';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/logs/logs.js';	define("pages/logs/logs.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../utils/util.js");Page({data:{logs:[]},onLoad:function(){this.setData({logs:(wx.getStorageSync("logs")||[]).map(function(a){return t.formatTime(new Date(a))})})}}); 
 			}); 	require("pages/logs/logs.js");
 	