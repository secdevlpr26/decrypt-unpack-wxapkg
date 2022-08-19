	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};
	/*v0.5vv_20180905_syb_scopedata*/global.__wcc_version__='v0.5vv_20180905_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
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
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
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
function _rz( z, node, attrname, opindex, env, scope, global ) 
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

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
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
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[6],[[6],[[7],[3,'adData']],[[7],[3,'adID']]],[3,'ct']],[1,2]])
Z([[6],[[6],[[7],[3,'adData']],[[7],[3,'adID']]],[3,'hasshow']])
Z([3,'close'])
Z([[7],[3,'adID']])
Z([[6],[[6],[[6],[[7],[3,'adData']],[[7],[3,'adID']]],[3,'style']],[3,'wrap']])
Z([[2,'==='],[[6],[[6],[[7],[3,'adData']],[[7],[3,'adID']]],[3,'at']],[1,3]])
Z([[2,'==='],[[6],[[6],[[7],[3,'adData']],[[7],[3,'adID']]],[3,'ct']],[1,3]])
Z(z[1])
Z(z[5])
Z([[2,'==='],[[6],[[6],[[7],[3,'adData']],[[7],[3,'adID']]],[3,'ct']],[1,1]])
Z(z[1])
Z(z[5])
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
Z([[7],[3,'previewing']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'allcontent'])
Z([3,'addCash'])
Z([a,[3,'xm_banner '],[[2,'?:'],[[6],[[7],[3,'startPage']],[3,'bannerAdNoOff']],[1,'bright789_view_show'],[1,'bright789_view_hide']]])
Z([3,'banner'])
Z([[6],[[7],[3,'xmad']],[3,'adData']])
Z([3,'appoIntView'])
Z([3,'xmadClose'])
Z([3,'xm_component'])
Z([[6],[[6],[[7],[3,'xmad']],[3,'ad']],[3,'banner']])
Z([[7],[3,'applist']])
Z([3,'id'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,2]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,3]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,4]])
Z([1,false])
Z([[7],[3,'showModel']])
Z([[7],[3,'qdlist']])
Z([[2,'!='],[[7],[3,'index']],[1,6]])
Z([[2,'<'],[[2,'+'],[[7],[3,'index']],[1,1]],[[7],[3,'signdays']]])
Z([[2,'=='],[[7],[3,'index']],[1,6]])
Z([[2,'>'],[[6],[[7],[3,'startPage']],[3,'operation']],[1,1]])
Z([3,'previewImage'])
Z([3,'startpage-buttom-content'])
Z([a,[3,'background-size: 100% 100%; background-image: url('],[[6],[[7],[3,'startPage']],[3,'backgroundImg']],[3,')']])
Z([[2,'!='],[[6],[[7],[3,'startPage']],[3,'button']],[1,'']])
Z(z[1])
Z([a,[3,'xm_insert '],[[2,'?:'],[[6],[[7],[3,'startPage']],[3,'insertAdNoOff']],[1,'bright789_view_show'],[1,'bright789_view_hide']]])
Z([3,'insert'])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z([[6],[[6],[[7],[3,'xmad']],[3,'ad']],[3,'insert']])
Z(z[1])
Z([a,[3,'xm_fixed '],z[27][2]])
Z([3,'fixed'])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z([[6],[[6],[[7],[3,'xmad']],[3,'ad']],[3,'fixed']])
Z([[7],[3,'webview']])
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
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./components/xmAD/xmAD.wxml','./pages/collect/collect.wxml','./pages/download/download.wxml','./pages/home/home.wxml','./pages/idea/idea.wxml','./pages/index/index.wxml','./pages/logs/logs.wxml','./pages/main/main.wxml','./pages/personal/personal.wxml','./pages/recommend/recommend.wxml','./pages/setting/setting.wxml','./pages/xmadH5/xmadH5.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('xm-ad')
var xC=_v()
_(oB,xC)
if(_oz(z,0,e,s,gg)){xC.wxVkey=1
var cF=_v()
_(xC,cF)
if(_oz(z,1,e,s,gg)){cF.wxVkey=1
var hG=_mz(z,'view',['bindtap',2,'data-closeid',1,'style',2],[],e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,5,e,s,gg)){oH.wxVkey=1
}
oH.wxXCkey=1
_(cF,hG)
}
cF.wxXCkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,6,e,s,gg)){oD.wxVkey=1
var cI=_v()
_(oD,cI)
if(_oz(z,7,e,s,gg)){cI.wxVkey=1
var oJ=_v()
_(cI,oJ)
if(_oz(z,8,e,s,gg)){oJ.wxVkey=1
}
oJ.wxXCkey=1
}
cI.wxXCkey=1
}
var fE=_v()
_(oB,fE)
if(_oz(z,9,e,s,gg)){fE.wxVkey=1
var lK=_v()
_(fE,lK)
if(_oz(z,10,e,s,gg)){lK.wxVkey=1
var aL=_v()
_(lK,aL)
if(_oz(z,11,e,s,gg)){aL.wxVkey=1
}
aL.wxXCkey=1
}
lK.wxXCkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
_(r,oB)
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
var oP=_v()
_(r,oP)
if(_oz(z,0,e,s,gg)){oP.wxVkey=1
}
oP.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oV=_n('view')
_rz(z,oV,'class',0,e,s,gg)
var cW=_mz(z,'view',['bindtap',1,'class',1,'data-name',2],[],e,s,gg)
var oX=_mz(z,'xm-ad',['adData',4,'bindclick',1,'bindclose',2,'class',3,'data-id',4],[],e,s,gg)
_(cW,oX)
_(oV,cW)
var lY=_v()
_(oV,lY)
var aZ=function(e2,t1,b3,gg){
var x5=_v()
_(b3,x5)
if(_oz(z,11,e2,t1,gg)){x5.wxVkey=1
}
else if(_oz(z,12,e2,t1,gg)){x5.wxVkey=2
}
else if(_oz(z,13,e2,t1,gg)){x5.wxVkey=3
}
else if(_oz(z,14,e2,t1,gg)){x5.wxVkey=4
var o6=_v()
_(x5,o6)
if(_oz(z,15,e2,t1,gg)){o6.wxVkey=1
}
o6.wxXCkey=1
}
x5.wxXCkey=1
return b3
}
lY.wxXCkey=2
_2z(z,9,aZ,e,s,gg,lY,'item','index','id')
_(r,oV)
var fS=_v()
_(r,fS)
if(_oz(z,16,e,s,gg)){fS.wxVkey=1
var f7=_v()
_(fS,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
if(_oz(z,18,o0,h9,gg)){lCB.wxVkey=1
var tEB=_v()
_(lCB,tEB)
if(_oz(z,19,o0,h9,gg)){tEB.wxVkey=1
}
tEB.wxXCkey=1
}
var aDB=_v()
_(cAB,aDB)
if(_oz(z,20,o0,h9,gg)){aDB.wxVkey=1
}
lCB.wxXCkey=1
aDB.wxXCkey=1
return cAB
}
f7.wxXCkey=2
_2z(z,17,c8,e,s,gg,f7,'item','index','')
}
var cT=_v()
_(r,cT)
if(_oz(z,21,e,s,gg)){cT.wxVkey=1
var eFB=_mz(z,'view',['bindtap',22,'class',1,'style',2],[],e,s,gg)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,25,e,s,gg)){bGB.wxVkey=1
}
bGB.wxXCkey=1
_(cT,eFB)
}
var oHB=_mz(z,'view',['bindtap',26,'class',1,'data-name',2],[],e,s,gg)
var xIB=_mz(z,'xm-ad',['adData',29,'bindclick',1,'bindclose',2,'class',3,'data-id',4],[],e,s,gg)
_(oHB,xIB)
_(r,oHB)
var oJB=_mz(z,'view',['bindtap',34,'class',1,'data-name',2],[],e,s,gg)
var fKB=_mz(z,'xm-ad',['adData',37,'bindclick',1,'bindclose',2,'class',3,'data-id',4],[],e,s,gg)
_(oJB,fKB)
_(r,oJB)
var hU=_v()
_(r,hU)
if(_oz(z,42,e,s,gg)){hU.wxVkey=1
}
fS.wxXCkey=1
cT.wxXCkey=1
hU.wxXCkey=1
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
	__wxAppCode__['components/xmAD/xmAD.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/xmAD/xmAD.wxml'] = $gwx( './components/xmAD/xmAD.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"usingComponents":{"xm-ad":"/components/xmAD/xmAD"}};
		__wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/main/main.json'] = {"usingComponents":{"xm-ad":"/components/xmAD/xmAD"}};
		__wxAppCode__['pages/main/main.wxml'] = $gwx( './pages/main/main.wxml' );
	
	define("conf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var off = false; //测试？

var appId = 'wx000b96cc505e1149'; // 小程序ID
var appSecret = '4579a764b80cbaae00af69144e59b725'; // 小程序secret
var app_key_ald = "3c66a7c25985b2dfa825d47f6e178cc3"; //阿拉丁统计ID
var app_key = ""; //请在此行填写从广告后台获取的媒体ID
var banner = ""; //banner 广告
var insert = ""; //insert广告
var fixed = ""; //悬浮广告
var appName = 'fenbijiaoshizhengban'; //app标签
var appNameStr = '粉笔教师正版'; //名称

var ppbaseDomain = off ? 'http://zhihuankeji.s1.natapp.cc/wechat' : 'https://newswx.zhihuangongshe.com/wechat';
module.exports = {
  //图片站的配置
  baseDomain: 'https://newswx.zhihuangongshe.com/weixinimg/',
  //泡泡游戏的配置 
  ppbaseDomain: ppbaseDomain,
  appId: appId, //appid 当前小程序的APPid wxaaad611de9bb6897
  appsign: appName, //泡泡游戏的app标签
  appName: appName, //图片站的APP标签
  appNameStr: appNameStr, //应用中文名称
  defaultpage: '0', //图片站的配置
  app_key: app_key, //请在此行填写从广告后台获取的媒体ID。
  // 默认为 '/pages/xmadH5/xmadH5'(wepy框架下为/pages/xmadH5)，如果您未使用小程序的默认目录结构请告诉我们xmadH5页面的路径
  h5_path: "",
  // 小程序ID wx96dface677f1001e
  AppID: appId,
  // 小程序secret 3147aa24f4fca890e6ca1b22a272fbb9
  AppSecret: appSecret,
  banner: banner,
  insert: insert,
  fixed: fixed,
  app_key_ald: app_key_ald, //请在此行填写从阿拉丁后台获取的appkey
  plugin: false, //您的小程序中是否使用了插件。
  getLocation: false, //默认不获取用户坐标位置
  appid: appId, //用于用户登录、微信转发群信息、二维码等微信官方功能
  appsecret: appSecret, //用于用户登录、微信转发群信息、二维码等微信官方功能
  defaultPath: 'pages/main/main' //小程序的默认首页, 用于分享时path为空时
}; 
 			}); 
		define("pages/collect/collect.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var app = getApp();
var config = require('../../conf.js');
var util = require('../../utils/util.js');
var page = 0;

var getimg = function getimg(that) {
  wx.getSystemInfo({
    success: function success(res) {
      var phone = res.model + "-" + res.pixelRatio + "-" + res.screenWidth + "-" + res.screenHeight + "-" + res.system;
      wx.request({
        url: config.baseDomain + 'img/findImgCollect',
        data: {
          phoneName: phone,
          apppName: config.appName,
          pageNum: page
        },
        success: function success(res) {
          console.info(res.data.data);
          if (res.data.code != 0) {
            that.showToast('加载失败...');
            that.setData({
              dispaly: ''
            });
            return;
          }
          if (util.isEmpty(res.data.data)) {
            that.showToast('没有数据加载了');
            page--;
            return;
          } else {
            that.showToast('加载成功');
          }
          var list = that.data.imglist;
          for (var i = 0; i < res.data.data.length; i++) {
            list.push(res.data.data[i].imgCollect);
          }
          that.setData({
            imglist: list
          });
        }
      });
    }
  });
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist: [],
    scrollHeight: 0,
    showToast: false,
    toastMessage: '',
    dispaly: 'none'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    page = 0;
    var that = this;
    //根据手机屏幕设置scroll-view的高度
    wx.getSystemInfo({
      success: function success(res) {
        console.info(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
    getimg(that);
  },
  previewImg: function previewImg(e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imglist;
    wx.previewImage({
      current: imgArr[index], //当前图片地址
      urls: imgArr, //所有要预览的图片的地址集合 数组形式
      success: function success(res) {},
      fail: function fail(res) {},
      complete: function complete(res) {}
    });
  },
  //监听下滑到底的事件
  bindDownLoad: function bindDownLoad() {
    console.info("滑动到底部");
    page++;
    var that = this;
    getimg(that);
  },
  //提示框
  showToast: function showToast(toastMessage) {
    this.setData({ showToast: true, toastMessage: toastMessage });
  },
  hideToast: function hideToast() {
    this.setData({ showToast: false, toastMessage: '' });
  }
}); 
 			}); 
		define("pages/download/download.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var app = getApp();
var config = require('../../conf.js');
var util = require('../../utils/util.js');
var page = 0;

var getimg = function getimg(that) {
  wx.getSystemInfo({
    success: function success(res) {
      var phone = res.model + "-" + res.pixelRatio + "-" + res.screenWidth + "-" + res.screenHeight + "-" + res.system;
      wx.request({
        url: config.baseDomain + '/img/findImageDownload',
        data: {
          downloadPhone: phone,
          appName: config.appName,
          pageNum: page
        },
        success: function success(res) {
          console.info(res.data.code);
          if (res.data.code != 0) {
            that.showToast('加载失败...');
            page--;
            return;
          }

          if (util.isEmpty(res.data.data)) {
            that.showToast('没有数据加载了');
            page--;
            return;
          } else {
            that.showToast('加载成功');
          }

          var list = that.data.imglist;
          for (var i = 0; i < res.data.data.length; i++) {
            list.push(res.data.data[i].downloadImage);
          }
          that.setData({
            imglist: list
          });
        }
      });
    }
  });
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist: [],
    scrollHeight: 0,
    showToast: false,
    toastMessage: '',
    dispaly: 'none'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    var _this = this;

    page = 0;
    var that = this;
    //根据手机屏幕设置scroll-view的高度
    wx.getSystemInfo({
      success: function success(res) {
        console.info(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });

    wx.getSavedFileList({
      success: function success(res) {
        console.log(res.fileList);
        var fileList = [];
        for (var i = 0; i < res.fileList.length; i++) {
          fileList[i] = res.fileList[i].filePath;
        }
        _this.setData({
          imglist: fileList
        });
      }

    });
  },
  //点击放大 滑动上或下一张
  previewImg: function previewImg(e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imglist;
    wx.previewImage({
      current: imgArr[index], //当前图片地址
      urls: imgArr, //所有要预览的图片的地址集合 数组形式
      success: function success(res) {},
      fail: function fail(res) {},
      complete: function complete(res) {}
    });
  },
  //监听下滑到底的事件
  bindDownLoad: function bindDownLoad() {
    console.info("滑动到底部");
    page++;
    var that = this;
    // getimg(that);
  },
  //提示框
  showToast: function showToast(toastMessage) {
    this.setData({ showToast: true, toastMessage: toastMessage });
  },
  hideToast: function hideToast() {
    this.setData({ showToast: false, toastMessage: '' });
  }
}); 
 			}); 
		define("pages/idea/idea.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

// pages/idea/idea.js
var config = require('../../conf.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showToast: false,
    toastMessage: '',
    title: "",
    content: ""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {},
  titleinput: function titleinput(e) {
    this.setData({
      title: e.detail.value
    });
  },
  contentinput: function contentinput(e) {
    this.setData({
      content: e.detail.value
    });
  },
  ideasubmit: function ideasubmit(e) {
    var that = this;
    wx.request({
      url: config.baseDomain + '/img/addIdea',
      data: {
        ideaTitle: this.data.title,
        ideaContent: this.data.content
      },
      success: function success(res) {
        console.info(res.data);
        if (res.data == 1) {
          that.showToast("提交成功");
        } else {
          that.showToast("提交失败");
        }
      }
    });
  },
  showToast: function showToast(toastMessage) {
    this.setData({ showToast: true, toastMessage: toastMessage });
  },
  hideToast: function hideToast() {
    this.setData({ showToast: false, toastMessage: '' });
  }
}); 
 			}); 
		define("pages/personal/personal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

//index.js
var app = getApp();

Page({
  data: {
    showToast: false,
    toastMessage: ''
  },
  onLoad: function onLoad() {},
  showToast: function showToast(toastMessage) {
    this.setData({ showToast: true, toastMessage: toastMessage });
  },
  hideToast: function hideToast() {
    this.setData({ showToast: false, toastMessage: '' });
  },

  //我的下载
  mydownload: function mydownload() {
    wx.navigateTo({
      url: '../download/download'
    });
  },
  //我的收藏
  clearStorage: function clearStorage(e) {
    wx.navigateTo({
      url: '../collect/collect'
    });
  },
  //意见反馈
  ideaBack: function ideaBack() {
    wx.navigateTo({
      url: '../idea/idea'
    });
  },
  //系统消息
  recommend: function recommend() {
    wx.navigateTo({
      url: '../recommend/recommend'
    });
  },
  //设置
  setting: function setting() {
    wx.navigateTo({
      url: '../setting/setting'
    });
  }
}); 
 			}); 
		define("pages/recommend/recommend.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

// pages/recommend/recommend.js
var app = getApp();
var config = require('../../conf.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentAll: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    var that = this;
    wx.request({
      url: config.baseDomain + '/img/findSystemMsg',
      data: {
        appName: config.appName
      },
      success: function success(res) {
        console.info(res.data);
        var list = that.data.contentAll;
        for (var i = 0; i < res.data.length; i++) {
          list.push(res.data[i]);
        }
        that.setData({
          contentAll: list
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function onShareAppMessage() {}
}); 
 			}); 
		define("pages/setting/setting.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

// pages/setting/setting.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    check: null,
    showToast: false,
    toastMessage: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    var that = this;
    wx.getStorage({
      key: 'key',
      success: function success(res) {
        that.setData({
          check: res.data
        });
      }
    });
  },
  /**
  * switch开关监听
  */
  listenerSwitch: function listenerSwitch(e) {
    if (e.detail.value == true) {
      wx.setStorage({
        key: "key",
        data: true
      });
      this.showToast('开启成功');
    }
    if (e.detail.value == false) {
      wx.setStorage({
        key: "key",
        data: false
      });
      this.showToast('取消成功');
    }
  },
  showToast: function showToast(toastMessage) {
    this.setData({ showToast: true, toastMessage: toastMessage });
  },
  hideToast: function hideToast() {
    this.setData({ showToast: false, toastMessage: '' });
  }
}); 
 			}); 
		define("utils/ald-stat-conf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

exports.app_key = "5296a4a2dbc0f5f17f2f1b390271dd9c"; //请在此行填写从阿拉丁后台获取的appkey
exports.getLocation = false; //默认不获取用户坐标位置
exports.appid = ""; //用于用户登录、微信转发群信息、二维码等微信官方功能
exports.appsecret = ""; //用于用户登录、微信转发群信息、二维码等微信官方功能
exports.defaultPath = 'pages/main/main'; //小程序的默认首页, 用于分享时path为空时 
 			}); 
		define("utils/ald-stat.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (n, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Ald = t();
}(undefined, function () {
  function n(n) {
    this.app = n;
  }function t(t) {
    O = t, this.aldstat = new n(this), y("app", "launch");
  }function o(n) {
    if (O = n, C = n.query.ald_share_src, F = n.query.aldsrc || "", j = n.query.ald_share_src, U = Date.now(), A = Date.now(), !tn) {
      I = "" + Date.now() + Math.floor(1e7 * Math.random()), E = !1;try {
        wx.setStorageSync("ald_ifo", !1);
      } catch (n) {}
    }tn = !1, 0 !== b && Date.now() - b > 3e5 && (T = "" + Date.now() + Math.floor(1e7 * Math.random()), A = Date.now()), n.query.ald_share_src && "1044" == n.scene && n.shareTicket ? wx.getShareInfo({ shareTicket: n.shareTicket, success: function success(n) {
        G = n, _("event", "ald_share_click", JSON.stringify(n));
      } }) : n.query.ald_share_src && _("event", "ald_share_click", 1), "" === K && wx.getSetting({ withCredentials: !0, success: function success(n) {
        if (n.authSetting["scope.userInfo"]) {
          wx.getUserInfo({ withCredentials: !0, success: function success(n) {
              var t = p();K = n, t.ufo = w(n), q = g(n.userInfo.avatarUrl.split("/")), d(t);
            } });
        }
      } }), y("app", "show");
  }function e() {
    b = Date.now(), "" === K && wx.getSetting({ success: function success(n) {
        n.authSetting["scope.userInfo"] && wx.getUserInfo({ withCredentials: !0, success: function success(n) {
            K = n, q = g(n.userInfo.avatarUrl.split("/"));var t = p();t.ufo = w(n), d(t);
          } });
      } }), y("app", "hide");
  }function a(n) {
    J++, _("event", "ald_error_message", n);
  }function r(n) {
    X = n;
  }function i() {
    z = this.route, Y = Date.now(), $ = 0, Z = 0;
  }function s() {
    S("page", "hide"), Q = this.route;
  }function c() {
    S("page", "unload"), Q = this.route;
  }function u() {
    $++;
  }function l() {
    Z++;
  }function f(n) {
    var t = v(n.path),
        o = {};for (var e in O.query) {
      o[e] = O.query[e];
    }var a = "";if (a = n.path.indexOf("?") == -1 ? n.path + "?" : n.path.substr(0, n.path.indexOf("?")) + "?", "" !== t) for (var e in t) {
      o[e] = t[e];
    }o.ald_share_src ? o.ald_share_src.indexOf(N) == -1 && o.ald_share_src.length < 200 && (o.ald_share_src = o.ald_share_src + "," + N) : o.ald_share_src = N;for (var r in o) {
      r.indexOf("ald") == -1 && (a += r + "=" + o[r] + "&");
    }return n.path = a + "ald_share_src=" + o.ald_share_src, _("event", "ald_share_status", n), n;
  }function h() {
    function n() {
      return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
    }return n() + n() + n() + n() + n() + n() + n() + n();
  }function d(n) {
    var t = n,
        o = 0,
        e = 0,
        a = function a(r) {
      e++, r ? (n = {}, n.et = Date.now(), n.at = I, n.uu = N, n.v = P, n.ak = t.ak, n.life = t.life, n.ev = t.ev, n.err = "err", n.status = o) : (H++, n.at = I, n.et = Date.now(), n.uu = N, n.v = P, n.ak = M.app_key_ald, n.wsr = O, n.oifo = E, n.rq_c = H), wx.request({ url: "https://" + R + ".aldwx.com/d.html", data: n, header: { AldStat: "MiniApp-Stat", waid: M.appid || "", wst: M.appsecret || "", se: L || "", op: k || "", img: q }, method: "GET", success: function success(n) {
          o = n.statusCode, 200 != n.statusCode && e <= 3 && a("errorsend");
        }, fail: function fail() {
          e <= 3 && a("errorsend");
        } });
    };a();
  }function p() {
    var n = {};for (var t in V) {
      n[t] = V[t];
    }return n;
  }function g(n) {
    for (var t = "", o = 0; o < n.length; o++) {
      n[o].length > t.length && (t = n[o]);
    }return t;
  }function w(n) {
    var t = {};for (var o in n) {
      "rawData" != o && "errMsg" != o && (t[o] = n[o]);
    }return t;
  }function v(n) {
    if (n.indexOf("?") == -1) return "";var t = {};return n.split("?")[1].split("&").forEach(function (n) {
      var o = n.split("=")[1];t[n.split("=")[0]] = o;
    }), t;
  }function y(n, t) {
    var o = p();o.ev = n, o.life = t, o.ec = J, o.st = B, F && (o.qr = F, o.sr = F), C && (o.usr = C), "launch" !== t && (o.ahs = T), "hide" === t && (o.hdr = Date.now() - A, o.dr = Date.now() - U, o.ifo = !!E), d(o);
  }function S(n, t) {
    var o = p();o.ev = n, o.st = Date.now(), o.life = t, o.pp = z, o.pc = Q, o.dr = Date.now() - B, o.ndr = Date.now() - Y, o.rc = $, o.bc = Z, o.ahs = T, X && "{}" != JSON.stringify(X) && (o.ag = X), F && (o.qr = F, o.sr = F), C && (o.usr = C), W || (nn = z, W = !0, o.ifp = W, o.fp = z), d(o);
  }function _(n, t, o) {
    var e = p();e.ev = n, e.tp = t, e.st = B, o && (e.ct = o), d(e);
  }function m(n, t, o) {
    if (n[t]) {
      var e = n[t];n[t] = function (n) {
        o.call(this, n, t), e.call(this, n);
      };
    } else n[t] = function (n) {
      o.call(this, n, t);
    };
  }function D(n) {
    var r = {};for (var i in n) {
      "onLaunch" !== i && "onShow" !== i && "onHide" !== i && "onError" !== i && "onPageNotFound" !== i && "onUnlaunch" !== i && (r[i] = n[i]);
    }r.onLaunch = function (o) {
      t.call(this, o), "function" == typeof n.onLaunch && n.onLaunch.call(this, o);
    }, r.onShow = function (t) {
      o.call(this, t), n.onShow && "function" == typeof n.onShow && n.onShow.call(this, t);
    }, r.onHide = function () {
      e.call(this), n.onHide && "function" == typeof n.onHide && n.onHide.call(this);
    }, r.onError = function (t) {
      a.call(this, t), n.onError && "function" == typeof n.onError && n.onError.call(this, t);
    }, r.onUnlaunch = function () {
      n.onUnlaunch && "function" == typeof n.onUnlaunch && n.onUnlaunch.call(this);
    }, r.onPageNotFound = function (t) {
      n.onPageNotFound && "function" == typeof n.onPageNotFound && n.onPageNotFound.call(this, t);
    }, App(r);
  }function x(n) {
    var t = {};for (var o in n) {
      "onLoad" !== o && "onReady" !== o && "onShow" !== o && "onHide" !== o && "onUnload" !== o && "onPullDownRefresh" !== o && "onReachBottom" !== o && "onShareAppMessage" !== o && "onPageScroll" !== o && "onTabItemTap" !== o && (t[o] = n[o]);
    }t.onLoad = function (t) {
      r.call(this, t), "function" == typeof n.onLoad && n.onLoad.call(this, t);
    }, t.onShow = function (t) {
      i.call(this), "function" == typeof n.onShow && n.onShow.call(this, t);
    }, t.onHide = function (t) {
      s.call(this), "function" == typeof n.onHide && n.onHide.call(this, t);
    }, t.onUnload = function (t) {
      c.call(this), "function" == typeof n.onUnload && n.onUnload.call(this, t);
    }, t.onReady = function (t) {
      n.onReady && "function" == typeof n.onReady && n.onReady.call(this, t);
    }, t.onReachBottom = function (t) {
      l(), n.onReachBottom && "function" == typeof n.onReachBottom && n.onReachBottom.call(this, t);
    }, t.onPullDownRefresh = function (t) {
      u(), n.onPullDownRefresh && "function" == typeof n.onPullDownRefresh && n.onPullDownRefresh.call(this, t);
    }, t.onPageScroll = function (t) {
      n.onPageScroll && "function" == typeof n.onPageScroll && n.onPageScroll.call(this, t);
    }, t.onTabItemTap = function (t) {
      n.onTabItemTap && "function" == typeof n.onTabItemTap && n.onTabItemTap.call(this, t);
    }, n.onShareAppMessage && "function" == typeof n.onShareAppMessage && (t.onShareAppMessage = function (t) {
      var o = n.onShareAppMessage.call(this, t);return void 0 === o ? (o = {}, o.path = this.route) : void 0 === o.path && (o.path = this.route), f.call(this, o);
    }), Page(t);
  }var M = require("../conf"),
      P = "7.0.0",
      R = "log",
      I = "" + Date.now() + Math.floor(1e7 * Math.random()),
      T = "" + Date.now() + Math.floor(1e7 * Math.random()),
      A = "",
      U = 0,
      b = 0,
      L = "",
      k = "",
      q = "",
      H = 0,
      O = "",
      E = "",
      N = function () {
    var n = "";try {
      n = wx.getStorageSync("aldstat_uuid");
    } catch (t) {
      n = "uuid_getstoragesync";
    }if (n) E = !1;else {
      n = h(), E = !0;try {
        wx.setStorageSync("aldstat_uuid", n), wx.setStorageSync("ald_ifo", !0);
      } catch (n) {
        wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
      }
    }return n;
  }(),
      B = Date.now(),
      C = "",
      F = "",
      j = "",
      J = 0,
      G = "",
      K = "",
      V = {},
      W = !1,
      z = "",
      Q = "",
      X = "",
      Y = "",
      Z = 0,
      $ = 0,
      nn = "",
      tn = !0;!function () {
    wx.request({ url: "https://" + R + ".aldwx.com/config/app.json", header: { AldStat: "MiniApp-Stat" }, method: "GET", success: function success(n) {
        200 === n.statusCode && (n.data.version != P && console.warn("您的SDK不是最新版本，请尽快升级！"), n.data.warn && console.warn(n.data.warn), n.data.error && console.error(n.data.error));
      } });
  }();try {
    var on = wx.getSystemInfoSync();V.br = on.brand, V.pm = on.model, V.pr = on.pixelRatio, V.ww = on.windowWidth, V.wh = on.windowHeight, V.lang = on.language, V.wv = on.version, V.wvv = on.platform, V.wsdk = on.SDKVersion, V.sv = on.system;
  } catch (n) {}wx.getNetworkType({ success: function success(n) {
      V.nt = n.networkType;
    } }), wx.getSetting({ success: function success(n) {
      n.authSetting["scope.userLocation"] ? wx.getLocation({ type: "wgs84", success: function success(n) {
          V.lat = n.latitude, V.lng = n.longitude, V.spd = n.speed;
        } }) : M.getLocation && wx.getLocation({ type: "wgs84", success: function success(n) {
          V.lat = n.latitude, V.lng = n.longitude, V.spd = n.speed;
        } });
    } }), n.prototype.debug = function (n) {
    _("debug", "0", n);
  }, n.prototype.warn = function (n) {
    _("warn", "1", n);
  }, n.prototype.sendEvent = function (n, t) {
    if ("" !== n && "string" == typeof n && n.length <= 255) {
      if ("string" == typeof t && t.length <= 255) _("event", n, t);else if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
        if (JSON.stringify(t).length >= 255) return void console.error("自定义事件参数不能超过255个字符");_("event", n, JSON.stringify(t));
      } else void 0 === t ? _("event", n, !1) : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符");
    } else console.error("事件名称必须为String类型且不能超过255个字符");
  }, n.prototype.sendSession = function (n) {
    if ("" === n || !n) return void console.error("请传入从后台获取的session_key");if ("" === M.appid || "" === M.appsecret) return void console.error("请在配置文件中填写小程序的appid和appsecret！");L = n;var t = p();t.st = Date.now(), t.tp = "session", t.ct = "session", t.ev = "event", "" === K ? wx.getSetting({ success: function success(n) {
        n.authSetting["scope.userInfo"] ? wx.getUserInfo({ success: function success(n) {
            t.ufo = w(n), q = g(n.userInfo.avatarUrl.split("/")), "" !== G && (t.gid = G), d(t);
          } }) : "" !== G ? (t.gid = G, d(t)) : console.warn("用户未授权");
      } }) : (t.ufo = K, "" !== G && (t.gid = G), d(t));
  }, n.prototype.sendOpenid = function (n) {
    if ("" === n || !n) return void console.error("openID不能为空");k = n;var t = p();t.st = Date.now(), t.tp = "openid", t.ev = "event", t.ct = "openid", d(t);
  };return M.plugin ? { App: D, Page: x } : function (n) {
    !function () {
      var n = App,
          h = Page;App = function App(r) {
        m(r, "onLaunch", t), m(r, "onShow", o), m(r, "onHide", e), m(r, "onError", a), n(r);
      }, Page = function Page(n) {
        var t = n.onShareAppMessage;m(n, "onLoad", r), m(n, "onUnload", c), m(n, "onShow", i), m(n, "onHide", s), m(n, "onReachBottom", l), m(n, "onPullDownRefresh", u), void 0 !== t && (n.onShareAppMessage = function (n) {
          if (void 0 !== t) {
            var o = t.call(this, n);return void 0 === o ? (o = {}, o.path = this.route) : void 0 === o.path && (o.path = this.route), f(o);
          }
        }), h(n);
      };
    }();
  }();
}); 
 			}); 
		define("utils/es6-promise.min.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ES6Promise = e();
}(undefined, function () {
    "use strict";

    function t(t) {
        return "function" == typeof t || "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
    }

    function e(t) {
        return "function" == typeof t;
    }

    function n(t) {
        I = t;
    }

    function r(t) {
        J = t;
    }

    function o() {
        return function () {
            return process.nextTick(a);
        };
    }

    function i() {
        return "undefined" != typeof H ? function () {
            H(a);
        } : c();
    }

    function s() {
        var t = 0,
            e = new V(a),
            n = document.createTextNode("");
        return e.observe(n, {
            characterData: !0
        }), function () {
            n.data = t = ++t % 2;
        };
    }

    function u() {
        var t = new MessageChannel();
        return t.port1.onmessage = a, function () {
            return t.port2.postMessage(0);
        };
    }

    function c() {
        var t = setTimeout;
        return function () {
            return t(a, 1);
        };
    }

    function a() {
        for (var t = 0; t < G; t += 2) {
            var e = $[t],
                n = $[t + 1];
            e(n), $[t] = void 0, $[t + 1] = void 0;
        }
        G = 0;
    }

    function f() {
        try {
            var t = require,
                e = t("vertx");
            return H = e.runOnLoop || e.runOnContext, i();
        } catch (n) {
            return c();
        }
    }

    function l(t, e) {
        var n = arguments,
            r = this,
            o = new this.constructor(p);
        void 0 === o[et] && k(o);
        var i = r._state;
        return i ? !function () {
            var t = n[i - 1];
            J(function () {
                return x(i, o, t, r._result);
            });
        }() : E(r, o, t, e), o;
    }

    function h(t) {
        var e = this;
        if (t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.constructor === e) return t;
        var n = new e(p);
        return g(n, t), n;
    }

    function p() {}

    function v() {
        return new TypeError("You cannot resolve a promise with itself");
    }

    function d() {
        return new TypeError("A promises callback cannot return that same promise.");
    }

    function _(t) {
        try {
            return t.then;
        } catch (e) {
            return it.error = e, it;
        }
    }

    function y(t, e, n, r) {
        try {
            t.call(e, n, r);
        } catch (o) {
            return o;
        }
    }

    function m(t, e, n) {
        J(function (t) {
            var r = !1,
                o = y(n, e, function (n) {
                r || (r = !0, e !== n ? g(t, n) : S(t, n));
            }, function (e) {
                r || (r = !0, j(t, e));
            }, "Settle: " + (t._label || " unknown promise"));
            !r && o && (r = !0, j(t, o));
        }, t);
    }

    function b(t, e) {
        e._state === rt ? S(t, e._result) : e._state === ot ? j(t, e._result) : E(e, void 0, function (e) {
            return g(t, e);
        }, function (e) {
            return j(t, e);
        });
    }

    function w(t, n, r) {
        n.constructor === t.constructor && r === l && n.constructor.resolve === h ? b(t, n) : r === it ? j(t, it.error) : void 0 === r ? S(t, n) : e(r) ? m(t, n, r) : S(t, n);
    }

    function g(e, n) {
        e === n ? j(e, v()) : t(n) ? w(e, n, _(n)) : S(e, n);
    }

    function A(t) {
        t._onerror && t._onerror(t._result), T(t);
    }

    function S(t, e) {
        t._state === nt && (t._result = e, t._state = rt, 0 !== t._subscribers.length && J(T, t));
    }

    function j(t, e) {
        t._state === nt && (t._state = ot, t._result = e, J(A, t));
    }

    function E(t, e, n, r) {
        var o = t._subscribers,
            i = o.length;
        t._onerror = null, o[i] = e, o[i + rt] = n, o[i + ot] = r, 0 === i && t._state && J(T, t);
    }

    function T(t) {
        var e = t._subscribers,
            n = t._state;
        if (0 !== e.length) {
            for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) {
                r = e[s], o = e[s + n], r ? x(n, r, o, i) : o(i);
            }t._subscribers.length = 0;
        }
    }

    function M() {
        this.error = null;
    }

    function P(t, e) {
        try {
            return t(e);
        } catch (n) {
            return st.error = n, st;
        }
    }

    function x(t, n, r, o) {
        var i = e(r),
            s = void 0,
            u = void 0,
            c = void 0,
            a = void 0;
        if (i) {
            if (s = P(r, o), s === st ? (a = !0, u = s.error, s = null) : c = !0, n === s) return void j(n, d());
        } else s = o, c = !0;
        n._state !== nt || (i && c ? g(n, s) : a ? j(n, u) : t === rt ? S(n, s) : t === ot && j(n, s));
    }

    function C(t, e) {
        try {
            e(function (e) {
                g(t, e);
            }, function (e) {
                j(t, e);
            });
        } catch (n) {
            j(t, n);
        }
    }

    function O() {
        return ut++;
    }

    function k(t) {
        t[et] = ut++, t._state = void 0, t._result = void 0, t._subscribers = [];
    }

    function Y(t, e) {
        this._instanceConstructor = t, this.promise = new t(p), this.promise[et] || k(this.promise), B(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && S(this.promise, this._result))) : j(this.promise, q());
    }

    function q() {
        return new Error("Array Methods must be provided an Array");
    }

    function F(t) {
        return new Y(this, t).promise;
    }

    function D(t) {
        var e = this;
        return new e(B(t) ? function (n, r) {
            for (var o = t.length, i = 0; i < o; i++) {
                e.resolve(t[i]).then(n, r);
            }
        } : function (t, e) {
            return e(new TypeError("You must pass an array to race."));
        });
    }

    function K(t) {
        var e = this,
            n = new e(p);
        return j(n, t), n;
    }

    function L() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
    }

    function N() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }

    function U(t) {
        this[et] = O(), this._result = this._state = void 0, this._subscribers = [], p !== t && ("function" != typeof t && L(), this instanceof U ? C(this, t) : N());
    }

    function W() {
        var t = void 0;
        if ("undefined" != typeof global) t = global;else if ("undefined" != typeof self) t = self;else try {
            t = Function("return this")();
        } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
        }
        var n = t.Promise;
        if (n) {
            var r = null;
            try {
                r = Object.prototype.toString.call(n.resolve());
            } catch (e) {}
            if ("[object Promise]" === r && !n.cast) return;
        }
        t.Promise = U;
    }
    var z = void 0;
    z = Array.isArray ? Array.isArray : function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
    };
    var B = z,
        G = 0,
        H = void 0,
        I = void 0,
        J = function J(t, e) {
        $[G] = t, $[G + 1] = e, G += 2, 2 === G && (I ? I(a) : tt());
    },
        Q = "undefined" != typeof window ? window : void 0,
        R = Q || {},
        V = R.MutationObserver || R.WebKitMutationObserver,
        X = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
        Z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
        $ = new Array(1e3),
        tt = void 0;
    tt = X ? o() : V ? s() : Z ? u() : void 0 === Q && "function" == typeof require ? f() : c();
    var et = Math.random().toString(36).substring(16),
        nt = void 0,
        rt = 1,
        ot = 2,
        it = new M(),
        st = new M(),
        ut = 0;
    return Y.prototype._enumerate = function () {
        for (var t = this.length, e = this._input, n = 0; this._state === nt && n < t; n++) {
            this._eachEntry(e[n], n);
        }
    }, Y.prototype._eachEntry = function (t, e) {
        var n = this._instanceConstructor,
            r = n.resolve;
        if (r === h) {
            var o = _(t);
            if (o === l && t._state !== nt) this._settledAt(t._state, e, t._result);else if ("function" != typeof o) this._remaining--, this._result[e] = t;else if (n === U) {
                var i = new n(p);
                w(i, t, o), this._willSettleAt(i, e);
            } else this._willSettleAt(new n(function (e) {
                return e(t);
            }), e);
        } else this._willSettleAt(r(t), e);
    }, Y.prototype._settledAt = function (t, e, n) {
        var r = this.promise;
        r._state === nt && (this._remaining--, t === ot ? j(r, n) : this._result[e] = n), 0 === this._remaining && S(r, this._result);
    }, Y.prototype._willSettleAt = function (t, e) {
        var n = this;
        E(t, void 0, function (t) {
            return n._settledAt(rt, e, t);
        }, function (t) {
            return n._settledAt(ot, e, t);
        });
    }, U.all = F, U.race = D, U.resolve = h, U.reject = K, U._setScheduler = n, U._setAsap = r, U._asap = J, U.prototype = {
        constructor: U,
        then: l,
        "catch": function _catch(t) {
            return this.then(null, t);
        }
    }, U.polyfill = W, U.Promise = U, U;
}); 
 			}); 
		define("utils/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var _es6Promise = require('es6-promise.min');

var _es6Promise2 = _interopRequireDefault(_es6Promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (options) {
    return new _es6Promise2.default(function (resolve, reject) {
        options = Object.assign(options, {
            success: function success(result) {
                if (result.statusCode === 200) {
                    resolve(result.data);
                } else {
                    reject(result);
                }
            },

            fail: reject
        });
        wx.request(options);
    });
}; 
 			}); 
		define("utils/requestUtil.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var conf = require('../conf.js');

/**
 *空判断
 */
function isEmpty(obj) {
  if (typeof obj == "undefined" || !obj && typeof obj != "undefined" && obj != 0) {
    return true;
  }
  for (var i in obj) {
    return false;
  }
  return true;
}

/**获取请求 地址
 * route 接口 
 */
function getUrl(route) {
  var str = "" + conf.ppbaseDomain;
  if (str.charAt(str.length - 1) != '/' && str.charAt(str.length - 1) != '\\' && route.charAt(0) != '/' && route.charAt(0) != '\\') str = str + '/';
  return str + ("" + route);
}

/**post 请求数据
 * url 请求地址
 * data 提交数据
 * success 成功调用方法
 * fail 失败调用方法
 * complete 异常调用方法
 */
function requestPost(url, data, _success, _fail, _complete) {
  wx.request({
    url: getUrl(url),
    data: data,
    method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: { "Content-Type": "application/x-www-form-urlencoded" }, // 设置请求的 header
    success: function success(res) {
      if (typeof _success == "function" || res.statusCode == 200) {
        _success(res);
      } else {
        console.log('POST请求成功！');
        console.log(JSON.stringify(res));
      }
    },
    fail: function fail(res) {
      if (typeof _fail == "function") {
        _fail(res);
      } else {
        console.log('POST请求失败！');
        console.log(res);
      }
    },
    complete: function complete() {
      if (typeof _complete == "function") {
        _complete();
      } else {
        console.log('POST请求结束！');
      }
    }
  });
}

module.exports = {
  requestPost: requestPost,
  isEmpty: isEmpty,
  getUrl: getUrl
}; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var conf = require('../conf.js');
//空判断
function isEmpty(obj) {
    if (typeof obj == "undefined" || !obj && typeof obj != "undefined" && obj != 0) {
        return true;
    }
    for (var i in obj) {
        return false;
    }
    return true;
}
//参数拼接
function urlParamCombine(arr) {
    var param = "?";
    for (var key in arr) {
        if (typeof arr[key] == 'array' || _typeof(arr[key]) == 'object') {
            for (var k in arr[key]) {
                param += k + "=" + arr[key][k] + "&";
            }
        } else {
            param += key + "=" + arr[key] + "&";
        }
    }
    return param.substr(0, param.length - 1);
}

function getUrl(route, params) {
    var param = "";
    if (!isEmpty(params)) {
        param = urlParamCombine(params);
    }
    return "" + conf.baseDomain + route + param;
}

function matrixArr(list, elementsArr) {
    var matrix = [],
        i = void 0,
        k = void 0;
    for (i = 0, k = -1; i < list.length; i += 1) {
        if (i % elementsArr === 0) {
            k += 1;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    return matrix;
}

function imgUrlFix(url) {
    if (isEmpty(url)) {
        return url;
    }
    var matchStr = url.match(/:\/\/(ww)\d/);
    return isEmpty(matchStr) ? url : url.replace(matchStr[1], 'ws');
}

//图片自适应
function imageUtil(e) {
    var imageSize = {};
    var originalWidth = e.detail.width; //图片原始宽  
    var originalHeight = e.detail.height; //图片原始高  
    var originalScale = originalHeight / originalWidth; //图片高宽比  
    // console.log('originalWidth: ' + originalWidth)
    // console.log('originalHeight: ' + originalHeight)
    //获取屏幕宽高  
    wx.getSystemInfo({
        success: function success(res) {
            var windowWidth = res.windowWidth;
            var windowHeight = res.windowHeight;
            var windowscale = windowHeight / windowWidth; //屏幕高宽比  
            // console.log('windowWidth: ' + windowWidth)
            // console.log('windowHeight: ' + windowHeight)
            if (originalScale < windowscale) {
                //图片高宽比小于屏幕高宽比  
                //图片缩放后的宽为屏幕宽  
                imageSize.imageWidth = windowWidth;
                imageSize.imageHeight = windowWidth * originalHeight / originalWidth;
            } else {
                //图片高宽比大于屏幕高宽比  
                //图片缩放后的高为屏幕高  
                imageSize.imageHeight = windowHeight;
                imageSize.imageWidth = windowHeight * originalWidth / originalHeight;
            }
        }
    });
    // console.log('缩放后的宽: ' + imageSize.imageWidth)
    // console.log('缩放后的高: ' + imageSize.imageHeight)
    return imageSize;
}

module.exports = {
    isEmpty: isEmpty,
    getUrl: getUrl,
    matrixArr: matrixArr,
    imgUrlFix: imgUrlFix,
    imageUtil: imageUtil
}; 
 			}); 
		define("utils/xmadx_MD5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

function safe_add(e, f) {
  var g = (65535 & e) + (65535 & f);return (e >> 16) + (f >> 16) + (g >> 16) << 16 | 65535 & g;
}function rol(e, f) {
  return e << f | e >>> 32 - f;
}function cmn(e, f, g, h, j, k) {
  return safe_add(rol(safe_add(safe_add(f, e), safe_add(h, k)), j), g);
}function ff(e, f, g, h, j, k, l) {
  return cmn(f & g | ~f & h, e, f, j, k, l);
}function gg(e, f, g, h, j, k, l) {
  return cmn(f & h | g & ~h, e, f, j, k, l);
}function hh(e, f, g, h, j, k, l) {
  return cmn(f ^ g ^ h, e, f, j, k, l);
}function ii(e, f, g, h, j, k, l) {
  return cmn(g ^ (f | ~h), e, f, j, k, l);
}function coreMD5(e) {
  for (var f = 1732584193, g = -271733879, h = -1732584194, j = 271733878, k = 0; k < e.length; k += 16) {
    var l = f,
        m = g,
        n = h,
        o = j;f = ff(f, g, h, j, e[k + 0], 7, -680876936), j = ff(j, f, g, h, e[k + 1], 12, -389564586), h = ff(h, j, f, g, e[k + 2], 17, 606105819), g = ff(g, h, j, f, e[k + 3], 22, -1044525330), f = ff(f, g, h, j, e[k + 4], 7, -176418897), j = ff(j, f, g, h, e[k + 5], 12, 1200080426), h = ff(h, j, f, g, e[k + 6], 17, -1473231341), g = ff(g, h, j, f, e[k + 7], 22, -45705983), f = ff(f, g, h, j, e[k + 8], 7, 1770035416), j = ff(j, f, g, h, e[k + 9], 12, -1958414417), h = ff(h, j, f, g, e[k + 10], 17, -42063), g = ff(g, h, j, f, e[k + 11], 22, -1990404162), f = ff(f, g, h, j, e[k + 12], 7, 1804603682), j = ff(j, f, g, h, e[k + 13], 12, -40341101), h = ff(h, j, f, g, e[k + 14], 17, -1502002290), g = ff(g, h, j, f, e[k + 15], 22, 1236535329), f = gg(f, g, h, j, e[k + 1], 5, -165796510), j = gg(j, f, g, h, e[k + 6], 9, -1069501632), h = gg(h, j, f, g, e[k + 11], 14, 643717713), g = gg(g, h, j, f, e[k + 0], 20, -373897302), f = gg(f, g, h, j, e[k + 5], 5, -701558691), j = gg(j, f, g, h, e[k + 10], 9, 38016083), h = gg(h, j, f, g, e[k + 15], 14, -660478335), g = gg(g, h, j, f, e[k + 4], 20, -405537848), f = gg(f, g, h, j, e[k + 9], 5, 568446438), j = gg(j, f, g, h, e[k + 14], 9, -1019803690), h = gg(h, j, f, g, e[k + 3], 14, -187363961), g = gg(g, h, j, f, e[k + 8], 20, 1163531501), f = gg(f, g, h, j, e[k + 13], 5, -1444681467), j = gg(j, f, g, h, e[k + 2], 9, -51403784), h = gg(h, j, f, g, e[k + 7], 14, 1735328473), g = gg(g, h, j, f, e[k + 12], 20, -1926607734), f = hh(f, g, h, j, e[k + 5], 4, -378558), j = hh(j, f, g, h, e[k + 8], 11, -2022574463), h = hh(h, j, f, g, e[k + 11], 16, 1839030562), g = hh(g, h, j, f, e[k + 14], 23, -35309556), f = hh(f, g, h, j, e[k + 1], 4, -1530992060), j = hh(j, f, g, h, e[k + 4], 11, 1272893353), h = hh(h, j, f, g, e[k + 7], 16, -155497632), g = hh(g, h, j, f, e[k + 10], 23, -1094730640), f = hh(f, g, h, j, e[k + 13], 4, 681279174), j = hh(j, f, g, h, e[k + 0], 11, -358537222), h = hh(h, j, f, g, e[k + 3], 16, -722521979), g = hh(g, h, j, f, e[k + 6], 23, 76029189), f = hh(f, g, h, j, e[k + 9], 4, -640364487), j = hh(j, f, g, h, e[k + 12], 11, -421815835), h = hh(h, j, f, g, e[k + 15], 16, 530742520), g = hh(g, h, j, f, e[k + 2], 23, -995338651), f = ii(f, g, h, j, e[k + 0], 6, -198630844), j = ii(j, f, g, h, e[k + 7], 10, 1126891415), h = ii(h, j, f, g, e[k + 14], 15, -1416354905), g = ii(g, h, j, f, e[k + 5], 21, -57434055), f = ii(f, g, h, j, e[k + 12], 6, 1700485571), j = ii(j, f, g, h, e[k + 3], 10, -1894986606), h = ii(h, j, f, g, e[k + 10], 15, -1051523), g = ii(g, h, j, f, e[k + 1], 21, -2054922799), f = ii(f, g, h, j, e[k + 8], 6, 1873313359), j = ii(j, f, g, h, e[k + 15], 10, -30611744), h = ii(h, j, f, g, e[k + 6], 15, -1560198380), g = ii(g, h, j, f, e[k + 13], 21, 1309151649), f = ii(f, g, h, j, e[k + 4], 6, -145523070), j = ii(j, f, g, h, e[k + 11], 10, -1120210379), h = ii(h, j, f, g, e[k + 2], 15, 718787259), g = ii(g, h, j, f, e[k + 9], 21, -343485551), f = safe_add(f, l), g = safe_add(g, m), h = safe_add(h, n), j = safe_add(j, o);
  }return [f, g, h, j];
}function binl2hex(e) {
  for (var f = "0123456789abcdef", g = "", h = 0; h < 4 * e.length; h++) {
    g += f.charAt(15 & e[h >> 2] >> 8 * (h % 4) + 4) + f.charAt(15 & e[h >> 2] >> 8 * (h % 4));
  }return g;
}function binl2b64(e) {
  for (var g = "", h = 0; h < 32 * e.length; h += 6) {
    g += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(63 & e[h >> 5] << h % 32 | 63 & e[h >> 6] >> 32 - h % 32);
  }return g;
}function str2binl(e) {
  for (var f = (e.length + 8 >> 6) + 1, g = Array(16 * f), h = 0; h < 16 * f; h++) {
    g[h] = 0;
  }for (var h = 0; h < e.length; h++) {
    g[h >> 2] |= (255 & e.charCodeAt(h)) << 8 * (h % 4);
  }return g[h >> 2] |= 128 << 8 * (h % 4), g[16 * f - 2] = 8 * e.length, g;
}function strw2binl(e) {
  for (var f = (e.length + 4 >> 5) + 1, g = Array(16 * f), h = 0; h < 16 * f; h++) {
    g[h] = 0;
  }for (var h = 0; h < e.length; h++) {
    g[h >> 1] |= e.charCodeAt(h) << 16 * (h % 2);
  }return g[h >> 1] |= 128 << 16 * (h % 2), g[16 * f - 2] = 16 * e.length, g;
}function hexMD5(e) {
  return binl2hex(coreMD5(str2binl(e)));
}function hexMD5w(e) {
  return binl2hex(coreMD5(strw2binl(e)));
}function b64MD5(e) {
  return binl2b64(coreMD5(str2binl(e)));
}function b64MD5w(e) {
  return binl2b64(coreMD5(strw2binl(e)));
}function calcMD5(e) {
  return binl2hex(coreMD5(str2binl(e)));
}module.exports = { hexMD5: hexMD5 }; 
 			}); 
		define("utils/xmadx_conf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

//请在此行填写从广告后台获取的媒体ID。 (改到目录 conf.js)
exports.app_key = '';
// 默认为 '/pages/xmadH5/xmadH5'(wepy框架下为/pages/xmadH5)，如果您未使用小程序的默认目录结构请告诉我们xmadH5页面的路径
exports.h5_path = "";
// 小程序ID wx96dface677f1001e
exports.AppID = 'wx96dface677f1001e';
// 小程序secret 3147aa24f4fca890e6ca1b22a272fbb9
exports.AppSecret = '3147aa24f4fca890e6ca1b22a272fbb9'; 
 			}); 
		define("utils/xmadx_sdk.min.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var xmad = function xmad(b, c) {
  function d() {
    console.warn("\u5C0F\u76DF\u63D0\u793AV1.3.4\uFF1A\u8BF7\u6CE8\u610Fxmadx_conf.js\u914D\u7F6E\u6587\u4EF6\u4E2D\u65B0\u589E\u7684h5_path\u914D\u7F6E");
  }function f() {
    function I() {
      return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
    }var J = void 0;try {
      if (J = wx.getStorageSync("xmaduuid"), J) return J;
    } catch (K) {}J = I() + I() + I() + I() + I() + I() + I() + I();try {
      wx.setStorageSync("xmaduuid", J);
    } catch (K) {}return J;
  }function g(I) {
    var J = I.currentTarget.dataset.id,
        K = this.data.xmad;K.adData[J].hasshow = !1, this.setData({ xmad: K });
  }function h(I) {
    var J = I.currentTarget.dataset.id,
        K = r[J].curl.replace(/cst=/gi, "cst=" + Date.now());K = K.split("?")[1];var L = r[J].at;if (1 === L) {
      var M = k ? o.h5_path || "/pages/xmadH5" : o.h5_path || "/pages/xmadH5/xmadH5",
          N = r[J].h5link.replace("?", "|").replace("=", "$");N && wx.navigateTo({ url: M + "?xmadH5url=" + N, success: function success() {
          C(K, "v1/api/clk", ["log", "imp"], function () {}, "get");
        }, fail: function fail() {
          console.warn("\u5C0F\u76DF\u63D0\u793A\uFF1A\u8DF3\u8F6CH5\u5E7F\u544A\u5931\u8D25\uFF0C\u8BF7\u5728xmadx_conf.js\u4E2D\u6B63\u786E\u914D\u7F6Eh5_path\u5B57\u6BB5\u3002");
        } });
    }2 === L && (!I.currentTarget.dataset.adImgUrl && (I.currentTarget.dataset.adImgUrl = r[J].appimg), wx.previewImage({ current: I.currentTarget.dataset.adImgUrl, urls: [I.currentTarget.dataset.adImgUrl], success: function success() {
        C(K, "v1/api/clk", ["log", "imp"], function () {}, "get");
      } })), 3 === L && C(K, "v1/api/clk", ["log", "imp"], function () {}, "get"), 1 !== L && 2 !== L && 3 !== L && console.error("SDK\u9519\u8BEF\uFF1A\u8DF3\u8F6C\u7C7B\u578Bat\u4E3A\uFF1A" + L + "\uFF0C\u4E0D\u662F\u7EA6\u5B9A\u7684\u7C7B\u578B\u3002\u65E0\u6CD5\u8FDB\u884C\u8DF3\u8F6C\u3001\u70B9\u51FB\u4E0A\u62A5");
  }function j(I, J, K) {
    if (I[J]) {
      var L = I[J];I[J] = function (M) {
        return L.call.apply(L, [this].concat(Array.prototype.slice.call(arguments))), K.call(this, M, I);
      };
    } else I[J] = function (M) {
      K.call(this, M, J);
    };
  }try {
    var k = "wepy" === b;
  } catch (I) {}try {
    var I = b.prototype.constructor.name;if (I) {
      var l, m;"App" === c ? l = b : m = b;
    }
  } catch (I) {}var o = require("../conf.js"),
      p = require("./xmadx_MD5.js");var q = 0;var r = {};if (!o.app_key || 32 !== o.app_key.length) {
    console.warn("\u5C0F\u76DF\u63D0\u793A\uFF1A\u914D\u7F6E\u9519\u8BEF\uFF0C\u8BF7\u5728xmadx_conf.js\u4E2D\u6B63\u786E\u914D\u7F6E\u60A8\u7684app_key\u3002");return { xmApp: function xmApp(K) {
        l ? l(K) : App(K);
      }, xmPage: function xmPage(K) {
        m ? m(K) : Page(K);
      } };
  }var s = { ak: o.app_key.replace(/(^\s*)|(\s*$)/g, ""), v: "1.3.4", asid: "", reqid: "", pb: "", pm: "", sv: "", pv: "", nt: "", ww: 0, wh: 0, pr: 0, long: 0, lat: 0, wvv: "", wv: "", lang: "", wsr: {}, pp: "", uuid: "", user_info: {} },
      t = 0,
      u = function u(I) {
    function J() {
      var P = 4 === K.length;P && I && (t = 1, I());
    }var K = [];(function () {
      wx.getSetting({ success: function success(P) {
          P.authSetting["scope.userInfo"] ? wx.getUserInfo({ withCredentials: !1, success: function success(Q) {
              s.user_info = Q.userInfo;
            }, complete: function complete() {
              K.push("ok1"), J();
            } }) : (K.push("ok1"), J());
        }, fail: function fail() {
          K.push("ok1"), J();
        } });
    })(), function () {
      wx.getSystemInfo({ success: function success(P) {
          s.wv = "undefined" == typeof P.SDKVersion ? "1.0.0" : P.SDKVersion, s.pb = P.brand, s.pm = P.model, s.pr = P.pixelRatio, s.ww = P.screenWidth, s.wh = P.screenHeight, s.lang = P.language, s.wvv = P.version, s.sv = P.system, s.pv = P.platform;
        }, complete: function complete() {
          K.push("ok2"), J();
        } });
    }(), function () {
      wx.getSetting({ success: function success(P) {
          P.authSetting["scope.userLocation"] ? wx.getLocation({ type: "wgs84", success: function success(Q) {
              s.long = Q.latitude, s.lat = Q.longitude;
            }, complete: function complete() {
              K.push("ok3"), J();
            } }) : (K.push("ok3"), J());
        }, fail: function fail() {
          K.push("ok3"), J();
        } });
    }(), function () {
      wx.getNetworkType({ success: function success(P) {
          s.nt = P.networkType;
        }, complete: function complete() {
          K.push("ok4"), J();
        } });
    }();
  },
      w = function w(I) {
    wx.setStorageSync("xmwsr", I);var K = f();s.uuid = K, u(), d();
  },
      x = function x() {
    var I = this.options.xmadH5url;I && (I = I.replace("|", "?").replace("$", "="), this.setData({ xmadURL: I }));
  },
      y = function y() {
    s.wsr = wx.getStorageSync("xmwsr"), s.pp = this.route;try {
      var K = this.data.xmad.ad;
    } catch (M) {}if (K) for (var L in K) {
      A(this, K[L]);
    }
  },
      z = function z(I, J) {
    wx.createSelectorQuery().selectAll(I).boundingClientRect(function (K) {
      if (J) return J(0 < K.length);
    }).exec();
  },
      A = function A(I, J) {
    return 32 == J.length ? void D(J, ["engine", "v1/api/ad"], function (K) {
      if (200 == K.data.code) {
        var L = K.data.data;r[J] = L, r[J].hasshow = !0, r[J].id = J, r[J].push = 0, 1 === L.ct && z(".xm_banner", function (N) {
          return N ? void (H.banner_calc(function () {
            r[J].style = H.banner_style;
          }), M()) : (r[J] = "", console.warn("\u5C0F\u76DF\u63D0\u793A\uFF1A\u60A8\u5728js\u4E2D\u914D\u7F6E\u7684 " + J + " \u4E3Abanner\u5E7F\u544A\uFF0C\u800Cwxml\u4E2D\u6CA1\u6709'xm_banner'\u4EE3\u7801,\u8BF7\u68C0\u67E5"));
        }), 2 === L.ct && z(".xm_insert", function (N) {
          return N ? void (r[J].style = H.screen_style, M()) : (r[J] = "", console.warn("\u5C0F\u76DF\u63D0\u793A\uFF1A\u60A8\u5728js\u4E2D\u914D\u7F6E\u7684 " + J + " \u4E3A\u63D2\u5C4F\u5E7F\u544A\uFF0C\u800Cwxml\u4E2D\u6CA1\u6709'xm_insert'\u4EE3\u7801,\u8BF7\u68C0\u67E5"));
        }), 3 === L.ct && z(".xm_fixed", function (N) {
          return N ? void (r[J].style = H.type3, M()) : (r[J] = "", console.warn("\u5C0F\u76DF\u63D0\u793A\uFF1A\u60A8\u5728js\u4E2D\u914D\u7F6E\u7684 " + J + " \u4E3A\u60AC\u6D6E\u7A97\u5E7F\u544A\uFF0C\u800Cwxml\u4E2D\u6CA1\u6709'xm_fixed'\u4EE3\u7801,\u8BF7\u68C0\u67E5"));
        });var M = function M() {
          var N = I.data.xmad;N.adData = r, k ? I.xmapply(r) : I.setData({ xmad: N });var O = L.iurl.replace(/ist=/gi, "ist=" + Date.now());O = O.split("?")[1], B(I, O, J, L.ct);
        };
      } else ;
    }) : console.warn("\u5E7F\u544A\u4F4DID\u5E94\u4E3A\u957F\u5EA6\u4E3A32\u4F4D\uFF0C\u8BF7\u68C0\u67E5\u60A8\u5728js\u4E2D'xmad'\u7684\u914D\u7F6E--" + J);
  },
      B = function B(I, J, K, L) {
    function M() {
      if (1 === L) {
        var N = wx.createIntersectionObserver(this, { thresholds: [0.2], selectAll: !0 });return void N.relativeToViewport().observe(".xm_banner", function (O) {
          var P = I.data.xmad;0.2 < O.intersectionRatio && 0 === P.adData[K].push && (P.adData[K].push = 1, I.setData({ xmad: P }), C(J, "v1/api/imp", ["log", "imp"], function () {}, "get"), N.disconnect());
        });
      }C(J, "v1/api/imp", ["log", "imp"], function () {}, "get");
    }wx.createSelectorQuery().selectAll(".xm_component").boundingClientRect(function (N) {
      for (var O = 0; O < N.length; O++) {
        if (N[O].dataset.id === K) var P = 1;
      }M();var Q;
    }).exec();
  };var C = function C(I, J) {
    var K = K ? "get" : "post",
        L = "https://log.xmadx.net/",
        M = {};/imp/.test(J) ? M.iurl = I : M.curl = I;var N = 0,
        O = function O() {
      wx.request({ url: L + J, data: M, method: K ? "post" : "get", success: function success() {}, fail: function fail() {
          2 > N && (N++, M.retryTimes = N, setTimeout(function () {
            O();
          }, 1e3));
        } });
    };O();
  };var D = function D(I, J, K, L) {
    0 == t ? u(function () {
      E(I, K, J, L);
    }) : E(I, K, J, L);
  },
      E = function E(I, J, K, L) {
    var L = L ? "get" : "post";var M = "https://" + K[0] + ".xmadx.net/";if (s.asid = I, s.uuid = f(), "log" != K[0]) {
      var N = Date.now() + s.ak + s.uuid + s.asid;s.reqid = p.hexMD5(N);
    }var O = 0,
        P = function P() {
      wx.request({ url: M + K[1], data: s, header: {}, method: L, success: function success(Q) {
          J(Q);
        }, fail: function fail() {
          2 > O && (O++, s.retryTimes = O, setTimeout(function () {
            P();
          }, 1e3));
        } });
    };P();
  },
      F = function F(I) {
    j(I, "onLaunch", w), F.prototype.xmad = "xmad", l ? l(I) : App(I);
  },
      H = { banner_style: { wrap: "width: 100%; height: 166rpx; overflow: hidden; position: relative;", icon: "width: 92rpx; height: 34rpx; line-height: 34rpx; background: rgba(0, 0, 0, .3); font-size: 20rpx; position: absolute; left: 10rpx; top: 14rpx; color: #fff; text-align: center; border-radius: 16rpx;", img: "width: 100%; height: 166rpx;", nav: "position:absolute;left:0;right:0;top:0;bottom:0;margin:0;background:none;" }, banner_calc: function banner_calc(I) {
      var J = this;wx.getSystemInfo({ success: function success(K) {
          var L = K.screenWidth,
              M = 2 * (166 * L / 582);J.banner_style.wrap = "width: 100%; height:" + M + "rpx; overflow: hidden; position: relative;", J.banner_style.img = "width: 100%; height:" + M + "rpx;", I(J.banner_style);
        } });
    }, screen_style: { wrap: "position: fixed; width: 100%; height: 100%; left: 0; top: 0; background: rgba(0, 0, 0, .3); z-index: 999;", content: "position:relative;width: 600rpx; height: 500rpx; overflow: hidden; left: calc(50% - 300rpx); top: calc(50% - 250rpx)", img: " width: 100%; height: 500rpx;", close: "position: absolute; right: 0; top: 0; padding: 11rpx; width: 46rpx; height: 46rpx;z-index:2", nav: "position:absolute;left:0;right:0;top:0;bottom:0;margin:0;background:none;", icon: "width: 94rpx; height: 34rpx; line-height: 34rpx; background: rgba(0, 0, 0, .3); font-size: 20rpx; position: absolute; left: 10rpx; bottom: 14rpx; color: #fff; text-align: center; border-radius: 16rpx;" }, type3: { wrap: "position: fixed; width: 120rpx; height: 120rpx; right: 60rpx; bottom: 60rpx; z-index: 998;", img: " width: 100%; height: 100%;", nav: "position:absolute;left:0;right:0;top:0;bottom:0;margin:0;background:none;" } };return { xmApp: F, xmPage: function xmPage(I) {
      j(I, "onLoad", y), j(I, "onShow", x), j(I, "xmadClose", g), j(I, "appoIntView", h), m ? m(I) : Page(I);
    } };
};exports.xmad = xmad; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

//app.js
var App = require('./utils/xmadx_sdk.min.js').xmad(App, 'App').xmApp;
var aldstat = require("./utils/ald-stat.js");
var config = require('./conf.js');
App({
  onLaunch: function onLaunch() {
    // wx.getSetting({
    //   success(res) {
    //     if (!res.authSetting['scope.userInfo']) {
    //       wx.authorize({
    //         scope: 'scope.userInfo',
    //         success() {
    //           console.log('授权成功');
    //         }
    //       })
    //     }
    //   }
    // })
  }, globalData: {
    param: null,
    title: null,
    options: null
  },
  onShow: function onShow(options) {
    //保存小程序场景
    this.globalData.options = options;
  }
}); 
 			}); 	require("app.js");
 		__wxRoute = 'components/xmAD/xmAD';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/xmAD/xmAD.js';	define("components/xmAD/xmAD.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

Component({ properties: { adData: Object }, attached: function attached() {
    this.setData({ adID: this.dataset.id });
  }, methods: {
    clickAd: function clickAd() {
      this.triggerEvent('click');
    },
    close: function close() {
      this.triggerEvent('close');
    }
  } }); 
 			}); 	require("components/xmAD/xmAD.js");
 		__wxRoute = 'pages/main/main';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/main/main.js';	define("pages/main/main.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

//index.js
//获取应用实例
var app = getApp();
var config = require('../../conf.js');
var Page = require('../../utils/xmadx_sdk.min.js').xmad(Page).xmPage;

Page({
  data: {
    // xmad:{
    //   adData:{},
    //   ad: {
    //     fixed: "xm497b7a77eec35127cbc080bd2f4502",
    //     banner:"xmd133b41f3d75190d81e61de47d0401",
    //     insert:"xm60c96156ea126c95ab14a27777b36b"
    //   }
    // }
  },
  onLoad: function onLoad(options) {
    app.globalData.title = options.title; //'美食'
    app.globalData.param = JSON.stringify(options);
  },
  onReady: function onReady() {
    // app.aldstat.sendEvent("启动小程序",{
    //   appsign: config.appsign
    // });
    wx.request({
      url: config.ppbaseDomain + '/appinfo/getswitch2.json',
      data: { appsign: config.appsign },
      success: function success(msg) {
        if (msg.data.appSwitch == "1" && msg.data.appsign == config.appsign) {
          console.log("*****" + "进入 index");
          wx.reLaunch({
            url: "../index/index"
          });
        } else if (msg.data.appSwitch == "2" && msg.data.appsign == config.appsign) {
          console.log("*****" + "进入 home");
          wx.reLaunch({
            url: "../home/home"
          });
        } else {
          console.log("*****" + "进入 index");
          wx.reLaunch({
            url: "../index/index"
          });
        }
      },
      fail: function fail(err) {
        console.log(err);
        console.error("*****" + "请求错误" + config.ppbaseDomain + '/appinfo/getswitch2.json' + config.appsign);
      }
    });
  }
}); 
 			}); 	require("pages/main/main.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//index.js
//获取应用实例
var app = getApp();
var config = require('../../conf.js');
var requestUtil = require('../../utils/requestUtil.js');
var Page = require('../../utils/xmadx_sdk.min.js').xmad(Page).xmPage;
var index = {
  saveRecord: function saveRecord(userCode, event, eventSign, param, titeName, appsign, success) {
    var url = '/appinfo/saveRecord.json';
    requestUtil.requestPost(url, {
      userCode: userCode,
      event: event.id || 0,
      eventSign: titeName,
      param: eventSign + param,
      appsign: appsign
    }, function (msg) {
      console.log(event.tite + '_' + titeName + '_' + appsign);
      app.aldstat.sendEvent(event.tite + '_' + titeName, {
        /* 内容标题: titeName,
          目标ID: eventSign,
          目标参数: param,*/
        appsign: appsign
      });
      if (success != null) success(msg);
    });
  }
};

Page({
  data: {
    applist: [],
    showModel: false,
    qdlist: [],
    datelist: ["一", "二", "三", "四", "五", "六", "七"],
    userId: "",
    cash: 0,
    signDays: 0,
    userOppenId: "",
    money: 0,
    webview: false,
    randcolor: ["#48bffd,#1daaf3", "#f3d152,#ffbb06", "#c549ff,#b803ff", "#fe5eb2,#fe3da1"],
    colorList: [],
    imageid: -1,
    startPage: {
      appsign: null,
      operation: 0,
      target: null,
      param: null,
      backgroundImg: 'https://zcdn.zhihuangongshe.com/blzy/qiangxie/tupian26.jpg',
      button: '游戏',
      closeImg: '', //../images/close.png
      banner: 'http://facetalk.gz.bcebos.com/timg.gif',
      bannerAdImg: "",
      bannerAdNoOff: false,
      insertAdNoOff: false,
      txBannerAdNoOff: false
    },
    xmad: {
      adData: {},
      ad: {
        banner: config.banner,
        insert: config.insert,
        fixed: config.fixed
      }
    }
  },

  onLoad: function onLoad(options) {
    if (app.globalData.title != null) {
      wx.setNavigationBarTitle({
        title: app.globalData.title
      });
    }
    var that = this;
    var user = null;
    var loginwx = function loginwx(mode, err) {
      //微信小程序获取userOppenId,并获取用户信息
      wx.login({
        success: function success(res) {
          console.log(res.code);
          if (res.code) {
            wx.request({
              url: config.ppbaseDomain + '/user/getUserOppenId.json?loginCode=' + res.code + '&appsign=' + config.appsign,
              success: function success(res) {
                console.log('获取用户信息' + res.data.openid);
                that.userOppenId = res.data.openid;
                //如过没有获取到OpenId
                if (that.userOppenId == undefined) {
                  var userOppenId = wx.getStorageSync('userOppenId') || Date.now();
                  wx.setStorageSync('userOppenId', userOppenId);
                  that.setData({
                    userOppenId: that.userOppenId
                  });
                  that.userOppenId = userOppenId;
                } else {
                  that.setData({
                    userOppenId: that.userOppenId
                  });
                }
                //获取用户信息
                wx.request({
                  url: config.ppbaseDomain + '/user/getUserInfo.json',
                  data: {
                    userOpenId: that.userOppenId,
                    appsign: config.appsign
                  },
                  success: function success(msg) {
                    console.log('用户信息获取成功');
                    user = msg.data;
                    console.log(user);
                    that.setData({
                      userOppenId: user.userOpenId,
                      signdays: user.sign,
                      money: user.money,
                      cash: user.cash,
                      userId: user.id
                    });
                    mode();
                  }
                });
              }
            });
          } else {
            console.log('获取用户登录态失败！' + res.errMsg);
            err();
          }
        },
        complete: function complete(e) {
          console.log('未登录');
        }, fail: function fail(e) {
          console.log('登录异常');
          err();
        }
      });
    };
    //获取系统启动初始化状态
    var init = function init() {
      wx.request({
        url: config.ppbaseDomain + '/StartPageController/getStartPageByAppsign.json',
        data: { appsign: config.appsign },
        success: function success(msg) {
          that.setData({
            startPage: msg.data
          });
          switch (msg.data.operation) {
            case 0:
              ;break; //保持不变
            case 1:
              //弹出签到
              if (user == null) break;
              wx.request({
                url: config.ppbaseDomain + '/user/getCash.json',
                data: { appsign: config.appsign },
                success: function success(msg) {
                  that.setData({
                    qdlist: msg.data
                  });
                  sign = function () {
                    var date = new Date();
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    month = month < 10 ? "0" + month : month;
                    var day = date.getDate();
                    day = day < 10 ? "0" + day : day;
                    var showModel = true;
                    var signdays = 0;
                    if (user.signDate == year + "-" + month + "-" + day) {
                      //今天已经签到
                      that.setData({
                        showModel: false
                      });
                    } else {
                      that.setData({
                        showModel: true
                      });
                    }
                  }();
                }
              });
              break;
            case 2:
              //弹出二维码
              msg.data.button = '';
            case 3:
              //弹出跳转小程序
              break;
            case 4:
              //强制跳转小程序
              var success = function success() {
                wx.navigateToMiniProgram({
                  appId: that.data.startPage.target,
                  path: that.data.startPage.param
                });
              };
              index.saveRecord(that.data.userOppenId, { tite: '启动页强制跳转小程序' }, that.data.startPage.target, that.data.startPage.param, '启动页没有title', config.appNameStr, success);
              break;
          }
        }
      });
    };
    //调起登录方法
    loginwx(init, init);
  },
  onReady: function onReady() {
    var that = this;
    //获取下面的APP列表  
    wx.request({
      url: config.ppbaseDomain + '/appinfo/findByOrder.json',
      data: {
        appsign: encodeURI(config.appsign),
        title: app.globalData.title == undefined ? '' : encodeURI(encodeURI(app.globalData.title)),
        param: encodeURI(app.globalData.param)
      }, success: function success(msg) {
        var a = new Array();
        for (var i = 0; i < msg.data.length; i++) {
          a[i] = that.data.randcolor[Math.floor(Math.random() * that.data.randcolor.length + 0)];
        }
        that.setData({
          applist: msg.data,
          colorList: a
        });
      }
    });
  },
  /** 隐藏签到奖励框 */
  hidemodel: function hidemodel() {
    this.setData({
      showModel: false
    });
  },
  /** 领取签到奖励 */
  qdjllq: function qdjllq() {
    var that = this;
    wx.request({
      url: config.ppbaseDomain + '/user/sign.json',
      data: {
        userOppenId: this.data.userOppenId,
        appsign: config.appsign
      },
      success: function success(msg) {
        if (msg.data) {
          that.setData({
            showModel: false
          });
        }
      }
    });
  },
  junpPage: function junpPage(e) {
    index.saveRecord(this.data.userOppenId, { tite: '打开内容跳转webView', id: e.currentTarget.dataset.event }, e.currentTarget.dataset.url, e.currentTarget.dataset.path, e.currentTarget.dataset.appname, config.appNameStr, null);
    this.setData({
      websrc: config.ppbaseDomain + "/user/junpage?url=" + e.currentTarget.dataset.url + "&userCode=" + this.data.userOppenId + "&appsign=" + config.appsign,
      webview: true
    });
  },
  record: function record(e) {
    console.log(e);
    var that = this;
    var success = function success(msg) {
      console.log("点击成功" + e.currentTarget.dataset.appid + '$' + e.currentTarget.dataset.path);
      // wx.navigateToMiniProgram({
      //   appId: e.currentTarget.dataset.appid,
      //   path: e.currentTarget.dataset.path
      // })
    };
    index.saveRecord(this.data.userOppenId, { tite: '打开内容跳转小程序', id: e.currentTarget.dataset.event }, e.currentTarget.dataset.appid, e.currentTarget.dataset.path, e.currentTarget.dataset.appname, config.appNameStr, success);
  },
  openImg: function openImg(e) {
    var that = this;
    var success = function success(msg) {
      var imgs = new Array();
      imgs.push(e.currentTarget.dataset.target);
      wx.previewImage({
        current: e.currentTarget.dataset.target, //当前图片地址
        urls: imgs, //所有要预览的图片的地址集合 数组形式
        success: function success(res) {},
        fail: function fail(res) {},
        complete: function complete(res) {}
      });
    };
    console.log(e.currentTarget.appname);
    index.saveRecord(that.data.userOppenId, { tite: '打开内容打开图集', id: e.currentTarget.dataset.event }, e.currentTarget.dataset.target, '图片没有参数', e.currentTarget.dataset.appname, config.appNameStr, success);
  },
  previewImage: function previewImage(e) {
    var wat = this;
    if (wat.data.startPage.operation != 2) {
      console.log('屏蔽打开图片');
      return;
    }
    index.saveRecord(wat.data.userOppenId, { tite: '启动页打开二维码图片' }, wat.data.startPage.backgroundImg, '图片没有参数', '启动页配置没有标题', config.appNameStr, null);
    wx.previewImage({
      urls: [wat.data.startPage.backgroundImg]
      // 需要预览的图片http链接  使用split把字符串转数组。不然会报错
    });
  },
  startPageCloseImage: function startPageCloseImage(e) {
    var that = this;
    var success = function success(msg) {
      wx.navigateToMiniProgram({
        appId: that.data.startPage.target,
        path: that.data.startPage.param
      });
    };
    index.saveRecord(that.data.userOppenId, { tite: '启动图按钮跳转小程序' }, that.data.startPage.target, that.data.startPage.param, '启动页配置没有标题', config.appNameStr, success);
  },
  closeImage: function closeImage(e) {
    var wat = this;
    wat.setData(_defineProperty({}, 'startPage.operation', 0));
  },
  addCash: function addCash(e) {
    //点击广告
    var that = this;
    index.saveRecord(that.data.userOppenId, { tite: '点击了' + e.currentTarget.dataset.name + '广告' }, e.currentTarget.id, e.currentTarget.dataset.name, '广告没有标题', config.appNameStr, null);
    wx.request({
      url: config.ppbaseDomain + '/user/addCash.json',
      data: {
        userOppenId: that.data.userOppenId,
        aDType: e.currentTarget.dataset.name,
        appsign: config.appsign
      },
      success: function success(msg) {
        var a = 0;
        if (msg.data == 'banner') {
          a = 100;
        } else if (msg.data == 'insert') {
          a = 120;
        }
        that.setData({
          cash: that.data.cash + a
        });
      }
    });
  },
  JumpCustomerService: function JumpCustomerService(e) {
    //跳转到客服
    index.saveRecord(this.data.userOppenId, { tite: '打开内容跳转客服', id: e.currentTarget.dataset.event }, e.currentTarget.dataset.target, e.currentTarget.dataset.path, e.currentTarget.dataset.appNameStr, config.appsign, null);
  },
  onShow: function onShow() {
    //除了从小程序返回！ 其它场景都跳转到该应用
    var that = this;
    console.log(app.globalData.options);
    console.log(that.data.startPage);
    if (app.globalData.options.scene != 1038 && that.data.startPage.operation == 4) {
      wx.navigateToMiniProgram({
        appId: that.data.startPage.target,
        path: that.data.startPage.param
      });
      that.setData(_defineProperty({}, 'startPage.operation', 0));
    }
  }
}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/home/home';__wxRouteBegin = true; 	define("pages/home/home.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//index.js
var config = require('../../conf.js');
var util = require('../../utils/util.js');
var request = require('../../utils/request.js');

var app = getApp();
Page({
    data: {
        showLoading: false,
        loadingMessage: '',
        showToast: false,
        toastMessage: '',
        imgList: [],
        layoutList: [],
        layoutColumnSize: 3,
        previewing: false,
        previewIndex: 0,
        showingActionsSheet: false,
        inActionImgUrl: '',
        navItems: [],
        navBtnSelectIdx: 0,
        page: 0,
        mid: '',
        hasMore: true,
        scrollTop: 1,
        showLoadMore: false,
        longTapTime: 0,
        longTapTag: false
    },
    showLoading: function showLoading(message) {
        this.setData({ showLoading: true, loadingMessage: message });
    },
    hideLoading: function hideLoading() {
        this.setData({ showLoading: false, loadingMessage: '' });
    },
    showToast: function showToast(toastMessage) {
        this.setData({ showToast: true, toastMessage: toastMessage });
    },
    hideToast: function hideToast() {
        this.setData({ showToast: false, toastMessage: '' });
    },
    renderImgList: function renderImgList() {
        var layoutColumnSize = this.data.layoutColumnSize;
        var layoutList = [];
        if (this.data.imgList.length) {
            layoutList = util.matrixArr(this.data.imgList, layoutColumnSize);
            var lastRow = layoutList[layoutList.length - 1];
            if (lastRow.length < layoutColumnSize) {
                var supplement = Array(layoutColumnSize - lastRow.length).fill(0);
                lastRow.push.apply(lastRow, _toConsumableArray(supplement));
            }
        }
        this.setData({ layoutList: layoutList });
    },
    fetchTags: function fetchTags() {
        this.showLoading('加载中...');
        return request({ method: 'GET', url: util.getUrl('img/findImgClassify', [{ appName: config.appName }]) });
    },
    fetchImgs: function fetchImgs(cid) {
        this.showLoading('加载中...');
        if (cid == null) {
            cid = config.defaultpage;
        }
        return request({
            method: 'GET',
            url: util.getUrl('img/findImgByClassifyID', [{ classifyID: cid }, { pageNum: this.data.page }, { appName: config.appName }])
        });
    },
    showPreview: function showPreview(event) {
        console.log(this.data.imgList);

        if (this.data.showActionsSheet) {
            return;
        }
        var index = event.target.dataset.index;
        console.log(index);
        if (index > this.data.imgList.length - 1) {
            return;
        }
        var previewIndex = this.data.imgList[index];
        console.log(previewIndex);
        this.setData({ previewing: true, previewIndex: index });
    },
    dismissPreview: function dismissPreview() {
        if (this.data.showingActionsSheet) {
            return;
        }
        this.setData({ previewing: false, previewIndex: 0 });
    },
    dismissActionSheet: function dismissActionSheet() {
        this.setData({ showingActionsSheet: false, inActionImgUrl: '' });
    },
    showActionSheet: function showActionSheet(event) {
        console.log(event);
        this.setData({ showLoadMore: true, showingActionsSheet: true, inActionImgUrl: event.target.dataset.imgurl });
    },
    collectImage: function collectImage() {
        var that = this;
        console.log(this.data.inActionImgUrl);
        wx.getSystemInfo({
            success: function success(res) {
                var phone = res.model + "-" + res.pixelRatio + "-" + res.screenWidth + "-" + res.screenHeight + "-" + res.system;
                wx.request({
                    url: config.baseDomain + '/img/insertImgCollect',
                    data: {
                        phoneName: phone,
                        imgCollect: that.data.inActionImgUrl,
                        apppName: config.appName
                    },
                    success: function success(res) {
                        console.info();
                        if (res.data == 1) {
                            that.showToast('收藏成功');
                        } else {
                            that.showToast('收藏失败');
                        }
                    }
                });
            }
        });
        this.setData({ showingActionsSheet: false, inActionImgUrl: '' });
    },
    saveImage: function saveImage() {
        var that = this;
        this.showLoading('保存图片中...');
        console.log('download_image_url', this.data.inActionImgUrl);
        wx.getSystemInfo({
            success: function success(res) {
                var phone = res.model + "-" + res.pixelRatio + "-" + res.screenWidth + "-" + res.screenHeight + "-" + res.system;
                wx.request({
                    url: config.baseDomain + '/img/insertDownLoadImg',
                    data: {
                        downloadPhone: phone,
                        downloadImage: that.data.inActionImgUrl,
                        appName: config.appName
                    },
                    success: function success(res) {}
                });
            }
        });
        console.log('图片保存操作开始');
        wx.downloadFile({
            url: this.data.inActionImgUrl,
            type: 'image',
            success: function success(resp) {
                console.log('保存');
                var path = resp.tempFilePath;
                wx.saveFile({
                    tempFilePath: path,
                    success: function success(resp) {
                        that.showToast('保存成功...');
                    },
                    fail: function fail(resp) {
                        console.log("失败");
                    },
                    complete: function complete(resp) {

                        that.hideLoading();
                    }
                });
            }, fail: function fail(_fail) {
                that.hideLoading();
                console.log(_fail);
            }
        });
        this.setData({ showingActionsSheet: false, inActionImgUrl: '' });
    },

    // scroll(e) {
    //     this.setData({ scrollTop: e.detail.scrollTop});
    // },
    navItemTap: function navItemTap(e) {
        var _this = this;

        this.setData({
            scrollTop: -39
        });
        var index = e.target.dataset.index;
        var cid = e.target.dataset.cid;
        if (index != this.navBtnSelectIdx) {
            this.setData({ navBtnSelectIdx: index, page: 0 });
            this.fetchImgs(cid).then(function (resp) {
                _this.imgRespHandler(resp, true);
            });
        }
    },
    imgRespHandler: function imgRespHandler(resp, flush) {
        this.hideLoading();
        if (resp.code != 0) {
            this.showToast('加载失败...');
            this.setData({ page: this.data.page-- });
            return;
        }
        if (util.isEmpty(resp.data)) {
            this.setData({ hasMore: false });
            this.showToast('全部加载完毕...');
            this.setData({ page: this.data.page-- });
            return;
        }
        this.showToast('加载成功...');
        for (var index in resp.data) {
            resp.data[index].imgUrl = util.imgUrlFix(resp.data[index].imgUrl);
            resp.data[index].thumbSrc = util.imgUrlFix(resp.data[index].thumbSrc);
            resp.data[index].smallSrc = util.imgUrlFix(resp.data[index].smallSrc);
        }
        this.setData({ imgList: flush ? resp.data : this.data.imgList.concat(resp.data) });
        this.renderImgList();
    },
    onPullDownRefresh: function onPullDownRefresh() {
        this.loadImgData(true);
    },
    loadMoreEvent: function loadMoreEvent() {
        this.setData({
            showLoadMore: true,
            page: this.data.page + 1
        });
        this.loadImgData(false);
    },
    loadImgData: function loadImgData(flush) {
        var _this2 = this;

        var cid;
        console.info(this.data.navItems);
        if (!util.isEmpty(this.data.navItems)) {
            cid = this.data.navItems[this.data.navBtnSelectIdx].cid;
        }
        console.info(cid);
        this.fetchImgs(cid).then(function (resp) {
            _this2.imgRespHandler(resp, flush);
        });
    },
    loadTagData: function loadTagData() {
        var _this3 = this;

        this.fetchTags().then(function (resp) {
            _this3.hideLoading();
            if (resp.code !== 0) {
                _this3.showToast('加载失败 请重试...');
                return;
            }
            console.log(resp.data);
            _this3.setData({ 'navItems': resp.data });
            _this3.fetchImgs(resp.data[0].cid).then(function (resp) {
                _this3.imgRespHandler(resp, flush);
            });
            _this3.loadImgData();
        });
    },
    onLoad: function onLoad() {
        this.renderImgList();
        this.loadTagData();
    },

    test: function test(e) {
        // var myDate = new Date();
        // var mytime = myDate.getTime();  
        // this.data.longTapTime = mytime;

        this.data.longTapTag = true;
        var that = this;
        var i = setTimeout(function () {
            if (that.data.longTapTag) {
                that.showActionSheet(e);
                clearInterval(i);
                that.data.longTapTag = false;
            }
        }, 350);
    },
    test2: function test2(e) {
        this.data.longTapTag = false;

        // var myDate = new Date();
        // var mytime = myDate.getTime();  
        // var tms = mytime-this.data.longTapTime;   
        // if(tms>350){
        //   console.log(e)
        //   console.info(e.target.dataset.largeSrc);
        //   this.showActionSheet(e)
        // } 
    }
}); 
 			}); 	require("pages/home/home.js");
 		__wxRoute = 'pages/logs/logs';__wxRouteBegin = true; 	define("pages/logs/logs.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

//logs.js
var util = require('../../utils/util.js');

Page({
  data: {
    logs: []
  },
  onLoad: function onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log));
      })
    });
  }
}); 
 			}); 	require("pages/logs/logs.js");
 		__wxRoute = 'pages/xmadH5/xmadH5';__wxRouteBegin = true; 	define("pages/xmadH5/xmadH5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
'use strict';

var Page = require('../../utils/xmadx_sdk.min.js').xmad(Page).xmPage;
Page({
  data: {}
}); 
 			}); 	require("pages/xmadH5/xmadH5.js");
 	