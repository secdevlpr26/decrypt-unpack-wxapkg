	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
	/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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
Z([3,'condition-line'])
Z([[7],[3,'selectArea']])
Z([[7],[3,'selectTank']])
Z([a,[[7],[3,'areaName']],[3,'出现火灾预警!']])
Z([3,'modalConfirm'])
Z([3,'确定'])
Z([[7],[3,'modalHidden']])
Z([3,'block'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'item_index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z([3,'gotoSingleTank'])
Z([3,'pre-tank'])
Z([[7],[3,'item_index']])
Z([a,[3,'runCanvas'],z[5]])
Z([3,'canvas'])
Z([a,z[6][1],z[5]])
Z([[6],[[7],[3,'item']],[3,'saturation']])
Z([a,[[7],[3,'areaName']],[3,'出现火灾预警!']])
Z([3,'modalConfirm'])
Z([3,'确定'])
Z([[7],[3,'modalHidden']])
Z([3,'block'])
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
Z([a,[[7],[3,'areaName']],[3,'出现火灾预警!']])
Z([3,'modalConfirm'])
Z([3,'确定'])
Z([[7],[3,'modalHidden']])
Z([3,'block'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[[7],[3,'areaName']],[3,'出现火灾预警!']])
Z([3,'modalConfirm'])
Z([3,'确定'])
Z([[7],[3,'modalHidden']])
Z([3,'block'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[[7],[3,'areaName']],[3,'出现火灾预警!']])
Z([3,'modalConfirm'])
Z([3,'确定'])
Z([[7],[3,'modalHidden']])
Z([3,'block'])
Z([[7],[3,'alarmDescribe']])
Z([3,'confirmModal'])
Z(z[2])
Z([[7],[3,'hiddenModal']])
Z([3,'none'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[[7],[3,'areaName']],[3,'出现火灾预警!']])
Z([3,'modalConfirm'])
Z([3,'确定'])
Z([[7],[3,'modalHidden']])
Z([3,'block'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/canvas-ring/canvas-ring.wxml','./components/zy-modal/zy-modal.wxml','./pages/data-retrieval/index.wxml','./pages/index/index.wxml','./pages/inlet/index.wxml','./pages/net-monitor/index.wxml','./pages/single-tank-data/index.wxml','./pages/single-tank/index.wxml','./pages/tank-area/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('slot')
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oD=_n('slot')
_(r,oD)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cF=_n('view')
_rz(z,cF,'class',0,e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,1,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(cF,oH)
if(_oz(z,2,e,s,gg)){oH.wxVkey=1
}
hG.wxXCkey=1
oH.wxXCkey=1
_(r,cF)
var cI=_mz(z,'zy-modal',['areaName',3,'bindconfirm',1,'confirmText',2,'hidden',3,'imageReady',4],[],e,s,gg)
_(r,cI)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var lK=_v()
_(r,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_mz(z,'view',['bindtap',3,'class',1,'id',2],[],eN,tM,gg)
var oR=_mz(z,'canvas-ring',['canvasId',6,'class',1,'id',2,'value',3],[],eN,tM,gg)
_(xQ,oR)
_(bO,xQ)
return bO
}
lK.wxXCkey=4
_2z(z,2,aL,e,s,gg,lK,'item','item_index','')
var fS=_mz(z,'zy-modal',['areaName',10,'bindconfirm',1,'confirmText',2,'hidden',3,'imageReady',4],[],e,s,gg)
_(r,fS)
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
var oV=_mz(z,'zy-modal',['areaName',0,'bindconfirm',1,'confirmText',1,'hidden',2,'imageReady',3],[],e,s,gg)
_(r,oV)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oX=_mz(z,'zy-modal',['areaName',0,'bindconfirm',1,'confirmText',1,'hidden',2,'imageReady',3],[],e,s,gg)
_(r,oX)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var aZ=_mz(z,'zy-modal',['areaName',0,'bindconfirm',1,'confirmText',1,'hidden',2,'imageReady',3],[],e,s,gg)
_(r,aZ)
var t1=_mz(z,'zy-modal',['areaName',5,'bindconfirm',1,'confirmText',2,'hidden',3,'imageReady',4],[],e,s,gg)
_(r,t1)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var b3=_mz(z,'zy-modal',['areaName',0,'bindconfirm',1,'confirmText',1,'hidden',2,'imageReady',3],[],e,s,gg)
_(r,b3)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['components/canvas-ring/canvas-ring.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/canvas-ring/canvas-ring.wxml'] = [$gwx, './components/canvas-ring/canvas-ring.wxml'];else __wxAppCode__['components/canvas-ring/canvas-ring.wxml'] = $gwx( './components/canvas-ring/canvas-ring.wxml' );
		__wxAppCode__['components/zy-modal/zy-modal.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/zy-modal/zy-modal.wxml'] = [$gwx, './components/zy-modal/zy-modal.wxml'];else __wxAppCode__['components/zy-modal/zy-modal.wxml'] = $gwx( './components/zy-modal/zy-modal.wxml' );
		__wxAppCode__['pages/data-retrieval/index.json'] = {"usingComponents":{"zy-modal":"/components/zy-modal/zy-modal"},"backgroundColor":"#ffffff","navigationBarTitleText":"仓容查询"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/data-retrieval/index.wxml'] = [$gwx, './pages/data-retrieval/index.wxml'];else __wxAppCode__['pages/data-retrieval/index.wxml'] = $gwx( './pages/data-retrieval/index.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"navigationBarTitleText":"油库智能监控移动平台","enablePullDownRefresh":true,"navigationBarBackgroundColor":"#ffffff","navigationBarTextStyle":"black","backgroundColor":"#FAFAFF","usingComponents":{"canvas-ring":"/components/canvas-ring/canvas-ring","zy-modal":"/components/zy-modal/zy-modal"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/inlet/index.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/inlet/index.wxml'] = [$gwx, './pages/inlet/index.wxml'];else __wxAppCode__['pages/inlet/index.wxml'] = $gwx( './pages/inlet/index.wxml' );
		__wxAppCode__['pages/net-monitor/index.json'] = {"usingComponents":{"zy-modal":"/components/zy-modal/zy-modal"},"navigationBarTitleText":"网络状态","enablePullDownRefresh":true,"backgroundColor":"#FAFAFF"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/net-monitor/index.wxml'] = [$gwx, './pages/net-monitor/index.wxml'];else __wxAppCode__['pages/net-monitor/index.wxml'] = $gwx( './pages/net-monitor/index.wxml' );
		__wxAppCode__['pages/single-tank-data/index.json'] = {"usingComponents":{"zy-modal":"/components/zy-modal/zy-modal"},"backgroundColor":"#ffffff","navigationBarTitleText":"单罐数据"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/single-tank-data/index.wxml'] = [$gwx, './pages/single-tank-data/index.wxml'];else __wxAppCode__['pages/single-tank-data/index.wxml'] = $gwx( './pages/single-tank-data/index.wxml' );
		__wxAppCode__['pages/single-tank/index.json'] = {"usingComponents":{"zy-modal":"/components/zy-modal/zy-modal"},"backgroundColor":"#ffffff","navigationBarTitleText":"N-T1罐区"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/single-tank/index.wxml'] = [$gwx, './pages/single-tank/index.wxml'];else __wxAppCode__['pages/single-tank/index.wxml'] = $gwx( './pages/single-tank/index.wxml' );
		__wxAppCode__['pages/tank-area/index.json'] = {"usingComponents":{"zy-modal":"/components/zy-modal/zy-modal"},"backgroundColor":"#ffffff","navigationBarTitleText":"N-T1罐区"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/tank-area/index.wxml'] = [$gwx, './pages/tank-area/index.wxml'];else __wxAppCode__['pages/tank-area/index.wxml'] = $gwx( './pages/tank-area/index.wxml' );
	
	define("utils/canvas.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={data:{percentage:"",animTime:"",color:""},options:{run:function(t,a,e){var c=this,n=2*Math.PI/350*100+1.2*Math.PI;c.data.ctx2.setStrokeStyle("#1D1E26"),c.data.ctx2.setLineWidth("4"),c.data.ctx2.setLineCap("butt"),c.data.ctx2.beginPath(),c.data.ctx2.arc(a,e,a-8,1.2*Math.PI,n),c.data.ctx2.stroke();var i=c.data.color,r=2*Math.PI/350*t+1.2*Math.PI;c.data.ctx2.setStrokeStyle(i),c.data.ctx2.setLineWidth("4"),c.data.ctx2.setLineCap("butt"),c.data.ctx2.beginPath(),c.data.ctx2.arc(a,e,a-8,1.2*Math.PI,r),c.data.ctx2.stroke(),c.data.ctx2.setFontSize(16),c.data.ctx2.setFillStyle(i),c.data.ctx2.setTextAlign("center"),c.data.ctx2.setTextBaseline("middle"),c.data.ctx2.fillText(t+"%",a,e-10),c.data.ctx2.draw()},canvasTap:function(t,a,e,c,n){var i=this;if(++t>a)return!1;i.run(t,c,n),setTimeout(function(){i.canvasTap(t,a,e,c,n)},e)},draw:function(t,a,e,c){var n=this,i=wx.createCanvasContext(t);n.setData({ctx2:i,percentage:a,animTime:e,color:c});var r=n.data.animTime/n.data.percentage;wx.createSelectorQuery().select("#"+t).boundingClientRect(function(t){var a=parseInt(t.width/2),e=parseInt(t.height/2);n.canvasTap(0,n.data.percentage,r,a,e)}).exec()}}}; 
 			}); 
		define("utils/requestApi.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t="https://wp1.springbutton.com/ytkjnt/zsy/",e="https://wp1.springbutton.com/ytkjnt/";module.exports={request:function(t){wx.request(t)},apiGetOilTanktUrl:t+"oilTank/list",apiGetTankAreatUrl:t+"tankArea/list",apiGetNetStatustUrl:t+"netStatus/list",apiGetStatustUrl:t+"netStatus/status",apiPostNeedMessageUrl:e+"send/getMessage",apiSendServiceMessageUrl:e+"send/message",apiGetOpenIdUrl:e+"send/getOpenid"}; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t=function(t){return(t=t.toString())[1]?t:"0"+t};module.exports={formatTime:function(n){var e=n.getFullYear(),o=n.getMonth()+1,r=n.getDate(),i=n.getHours(),u=n.getMinutes(),c=n.getSeconds();return[e,o,r].map(t).join("/")+" "+[i,u,c].map(t).join(":")},wxPromisify:function(t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(e,o){n.success=function(t){e(t)},n.fail=function(t){o(t)},t(n)})}}}; 
 			}); 
		define("utils/wxcharts.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),n=1;n<arguments.length;n++){var a=arguments[n];if(null!=a)for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(i[o]=a[o])}return i}function e(t,e,i){if(isNaN(t))throw new Error("[wxCharts] unvalid series data!");i=i||10,e=e||"upper";for(var n=1;i<1;)i*=10,n*=10;for(t="upper"===e?Math.ceil(t*n):Math.floor(t*n);t%i!=0;)"upper"===e?t++:t--;return t/n}function i(t,e,i,n){var a=n.width-i.padding-e.xAxisPoints[0],o=e.eachSpacing*n.categories.length,r=t;return t>=0?r=0:Math.abs(t)>=o-a&&(r=a-o),r}function n(t,e,i){function n(t){for(;t<0;)t+=2*Math.PI;for(;t>2*Math.PI;)t-=2*Math.PI;return t}return t=n(t),e=n(e),i=n(i),e>i&&(i+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=i}function a(t,e,i){var n=t,a=i-e,o=n+(i-a-n)/Math.sqrt(2);return{transX:o*=-1,transY:(i-a)*(Math.sqrt(2)-1)-(i-a-n)/Math.sqrt(2)}}function o(t,e){function i(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var n=null,a=null,o=null,r=null;if(e<1?(n=t[0].x+.2*(t[1].x-t[0].x),a=t[0].y+.2*(t[1].y-t[0].y)):(n=t[e].x+.2*(t[e+1].x-t[e-1].x),a=t[e].y+.2*(t[e+1].y-t[e-1].y)),e>t.length-3){var s=t.length-1;o=t[s].x-.2*(t[s].x-t[s-1].x),r=t[s].y-.2*(t[s].y-t[s-1].y)}else o=t[e+1].x-.2*(t[e+2].x-t[e].x),r=t[e+1].y-.2*(t[e+2].y-t[e].y);return i(t,e+1)&&(r=t[e+1].y),i(t,e)&&(a=t[e].y),{ctrA:{x:n,y:a},ctrB:{x:o,y:r}}}function r(t,e,i){return{x:i.x+t,y:i.y-e}}function s(t,e){if(e)for(;et.isCollision(t,e);)t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function l(t,e){var i=0;return t.map(function(t){return t.color||(t.color=e.colors[i],i=(i+1)%e.colors.length),t})}function h(t,i){var n=0,a=i-t;return n=a>=1e4?1e3:a>=1e3?100:a>=100?10:a>=10?5:a>=1?1:a>=.1?.1:.01,{minRange:e(t,"lower",n),maxRange:e(i,"upper",n)}}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=0;return(t=(t=String(t)).split("")).forEach(function(t){/[a-zA-Z]/.test(t)?i+=7:/[0-9]/.test(t)?i+=5.5:/\./.test(t)?i+=2.7:/-/.test(t)?i+=3.25:/[\u4e00-\u9fa5]/.test(t)?i+=10:/\(|\)/.test(t)?i+=3.73:/\s/.test(t)?i+=2.5:/%/.test(t)?i+=8:i+=10}),i*e/10}function f(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function d(t,e){var i=[];return t.forEach(function(t){if(null!==t.data[e]&&void 0!==t.data[e]){var n={};n.color=t.color,n.name=t.name,n.data=t.format?t.format(t.data[e]):t.data[e],i.push(n)}}),i}function x(t){var e=t.map(function(t){return c(t)});return Math.max.apply(null,e)}function u(t){for(var e=2*Math.PI/t,i=[],n=0;n<t;n++)i.push(e*n);return i.map(function(t){return-1*t+Math.PI/2})}function g(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.map(function(t){return{text:a.format?a.format(t,n[i]):t.name+": "+t.data,color:t.color}}),r=[],s={x:0,y:0};return e.forEach(function(t){void 0!==t[i]&&null!==t[i]&&r.push(t[i])}),r.forEach(function(t){s.x=Math.round(t.x),s.y+=t.y}),s.y/=r.length,{textList:o,offset:s}}function p(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=-1;return y(t,i,n)&&e.forEach(function(e,i){t.x+a>e&&(o=i)}),o}function y(t,e,i){return t.x<e.width-i.padding&&t.x>i.padding+i.yAxisWidth+i.yAxisTitleWidth&&t.y>i.padding&&t.y<e.height-i.legendHeight-i.xAxisHeight-i.padding}function v(t,e,i){var n=2*Math.PI/i,a=-1;if(P(t,e.center,e.radius)){var o=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},r=Math.atan2(e.center.y-t.y,t.x-e.center.x);(r*=-1)<0&&(r+=2*Math.PI),e.angleList.map(function(t){return t=o(-1*t)}).forEach(function(t,e){var i=o(t-n/2),s=o(t+n/2);s<i&&(s+=2*Math.PI),(r>=i&&r<=s||r+2*Math.PI>=i&&r+2*Math.PI<=s)&&(a=e)})}return a}function m(t,e){var i=-1;if(P(t,e.center,e.radius)){var a=Math.atan2(e.center.y-t.y,t.x-e.center.x);a=-a;for(var o=0,r=e.series.length;o<r;o++){var s=e.series[o];if(n(a,s._start_,s._start_+2*s._proportion_*Math.PI)){i=o;break}}}return i}function P(t,e,i){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(i,2)}function S(t){var e=[],i=[];return t.forEach(function(t,n){null!==t?i.push(t):(i.length&&e.push(i),i=[])}),i.length&&e.push(i),e}function T(t,e,i){if(!1===e.legend)return{legendList:[],legendHeight:0};var n=[],a=0,o=[];return t.forEach(function(t){var i=30+c(t.name||"undefined");a+i>e.width?(n.push(o),a=i,o=[t]):(a+=i,o.push(t))}),o.length&&n.push(o),{legendList:n,legendHeight:n.length*(i.fontSize+8)+5}}function A(t,e,i){var n={angle:0,xAxisHeight:i.xAxisHeight},a=F(t,e,i).eachSpacing,o=t.map(function(t){return c(t)}),r=Math.max.apply(this,o);return r+2*i.xAxisTextPadding>a&&(n.angle=45*Math.PI/180,n.xAxisHeight=2*i.xAxisTextPadding+r*Math.sin(n.angle)),n}function b(t,e,i,n,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=a.extra.radar||{};s.max=s.max||0;var l=Math.max(s.max,Math.max.apply(null,f(n))),h=[];return n.forEach(function(n){var a={};a.color=n.color,a.data=[],n.data.forEach(function(n,s){var h={};h.angle=t[s],h.proportion=n/l,h.position=r(i*h.proportion*o*Math.cos(h.angle),i*h.proportion*o*Math.sin(h.angle),e),a.data.push(h)}),h.push(a)}),h}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=0,n=0;return t.forEach(function(t){t.data=null===t.data?0:t.data,i+=t.data}),t.forEach(function(t){t.data=null===t.data?0:t.data,t._proportion_=t.data/i*e}),t.forEach(function(t){t._start_=n,n+=2*t._proportion_*Math.PI}),t}function _(t){var e=0;return(t=M(t)).forEach(function(t){var i=t.format?t.format(+t._proportion_.toFixed(2)):et.toFixed(100*t._proportion_)+"%";e=Math.max(e,c(i))}),e}function E(t,e,i,n,a,o){return t.map(function(t){return null===t?null:(t.width=(e-2*a.columePadding)/i,o.extra.column&&o.extra.column.width&&+o.extra.column.width>0?t.width=Math.min(t.width,+o.extra.column.width):t.width=Math.min(t.width,25),t.x+=(n+.5-i/2)*t.width,t)})}function F(t,e,i){var n=i.yAxisWidth+i.yAxisTitleWidth,a=(e.width-2*i.padding-n)/(e.enableScroll?Math.min(5,t.length):t.length),o=[],r=i.padding+n,s=e.width-i.padding;return t.forEach(function(t,e){o.push(r+e*a)}),!0===e.enableScroll?o.push(r+t.length*a):o.push(s),{xAxisPoints:o,startX:r,endX:s,eachSpacing:a}}function w(t,e,i,n,a,o,r){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],h=o.height-2*r.padding-r.xAxisHeight-r.legendHeight;return t.forEach(function(t,c){if(null===t)l.push(null);else{var f={};f.x=n[c]+Math.round(a/2);var d=h*(t-e)/(i-e);d*=s,f.y=o.height-r.xAxisHeight-r.legendHeight-Math.round(d)-r.padding,l.push(f)}}),l}function L(t,e,i){var n=f(t);n=n.filter(function(t){return null!==t});var a=Math.min.apply(this,n),o=Math.max.apply(this,n);if("number"==typeof e.yAxis.min&&(a=Math.min(e.yAxis.min,a)),"number"==typeof e.yAxis.max&&(o=Math.max(e.yAxis.max,o)),a===o){var r=o||1;a-=r,o+=r}for(var s=h(a,o),l=s.minRange,c=[],d=(s.maxRange-l)/i.yAxisSplit,x=0;x<=i.yAxisSplit;x++)c.push(l+d*x);return c.reverse()}function C(t,e,i){var n=L(t,e,i),a=i.yAxisWidth,o=n.map(function(t){return t=et.toFixed(t,2),t=e.yAxis.format?e.yAxis.format(Number(t)):t,a=Math.max(a,c(t)+5),t});return!0===e.yAxis.disabled&&(a=0),{rangesFormat:o,ranges:n,yAxisWidth:a}}function k(t,e,i,n){n.beginPath(),n.setStrokeStyle("#ffffff"),n.setLineWidth(1),n.setFillStyle(e),"diamond"===i?t.forEach(function(t,e){null!==t&&(n.moveTo(t.x,t.y-4.5),n.lineTo(t.x-4.5,t.y),n.lineTo(t.x,t.y+4.5),n.lineTo(t.x+4.5,t.y),n.lineTo(t.x,t.y-4.5))}):"circle"===i?t.forEach(function(t,e){null!==t&&(n.moveTo(t.x+3.5,t.y),n.arc(t.x,t.y,4,0,2*Math.PI,!1))}):"rect"===i?t.forEach(function(t,e){null!==t&&(n.moveTo(t.x-3.5,t.y-3.5),n.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===i&&t.forEach(function(t,e){null!==t&&(n.moveTo(t.x,t.y-4.5),n.lineTo(t.x-4.5,t.y+4.5),n.lineTo(t.x+4.5,t.y+4.5),n.lineTo(t.x,t.y-4.5))}),n.closePath(),n.fill(),n.stroke()}function H(t,e,i){var n=t.title.fontSize||e.titleFontSize,a=t.subtitle.fontSize||e.subtitleFontSize,o=t.title.name||"",r=t.subtitle.name||"",s=t.title.color||e.titleColor,l=t.subtitle.color||e.subtitleColor,h=o?n:0,f=r?a:0;if(r){var d=c(r,a),x=(t.width-d)/2+(t.subtitle.offsetX||0),u=(t.height-e.legendHeight+a)/2;o&&(u-=(h+5)/2),i.beginPath(),i.setFontSize(a),i.setFillStyle(l),i.fillText(r,x,u),i.stroke(),i.closePath()}if(o){var g=c(o,n),p=(t.width-g)/2+(t.title.offsetX||0),y=(t.height-e.legendHeight+n)/2;r&&(y+=(f+5)/2),i.beginPath(),i.setFontSize(n),i.setFillStyle(s),i.fillText(o,p,y),i.stroke(),i.closePath()}}function I(t,e,i,n){var a=e.data;n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle("#666666"),t.forEach(function(t,o){if(null!==t){var r=e.format?e.format(a[o]):a[o];"below"==e.textPosition?n.fillText(r,t.x-c(r)/2,t.y+2+i.fontSize):n.fillText(r,t.x-c(r)/2,t.y-2)}}),n.closePath(),n.stroke()}function z(t,e,i,n,a,o){var s=n.extra.radar||{};e+=a.radarLabelTextMargin,o.beginPath(),o.setFontSize(a.fontSize),o.setFillStyle(s.labelColor||"#666666"),t.forEach(function(t,s){var l={x:e*Math.cos(t),y:e*Math.sin(t)},h=r(l.x,l.y,i),f=h.x,d=h.y;et.approximatelyEqual(l.x,0)?f-=c(n.categories[s]||"")/2:l.x<0&&(f-=c(n.categories[s]||"")),o.fillText(n.categories[s]||"",f,d+a.fontSize/2)}),o.stroke(),o.closePath()}function D(t,e,i,n,a,o){var l=a+i.pieChartLinePadding,h=[],f=null;t.map(function(t){return{arc:2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),text:t.format?t.format(+t._proportion_.toFixed(2)):et.toFixed(100*t._proportion_)+"%",color:t.color}}).forEach(function(t){var e=Math.cos(t.arc)*l,n=Math.sin(t.arc)*l,o=Math.cos(t.arc)*a,r=Math.sin(t.arc)*a,d=e>=0?e+i.pieChartTextPadding:e-i.pieChartTextPadding,x=n,u=c(t.text),g=x;f&&et.isSameXCoordinateArea(f.start,{x:d})&&(g=d>0?Math.min(x,f.start.y):e<0?Math.max(x,f.start.y):x>0?Math.max(x,f.start.y):Math.min(x,f.start.y)),d<0&&(d-=u);var p={lineStart:{x:o,y:r},lineEnd:{x:e,y:n},start:{x:d,y:g},width:u,height:i.fontSize,text:t.text,color:t.color};f=s(p,f),h.push(f)}),h.forEach(function(t){var e=r(t.lineStart.x,t.lineStart.y,o),a=r(t.lineEnd.x,t.lineEnd.y,o),s=r(t.start.x,t.start.y,o);n.setLineWidth(1),n.setFontSize(i.fontSize),n.beginPath(),n.setStrokeStyle(t.color),n.setFillStyle(t.color),n.moveTo(e.x,e.y);var l=t.start.x<0?s.x+t.width:s.x,h=t.start.x<0?s.x-5:s.x+5;n.quadraticCurveTo(a.x,a.y,l,s.y),n.moveTo(e.x,e.y),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(s.x+t.width,s.y),n.arc(l,s.y,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFillStyle("#666666"),n.fillText(t.text,h,s.y+3),n.closePath(),n.stroke(),n.closePath()})}function W(t,e,i,n){var a=i.padding,o=e.height-i.padding-i.xAxisHeight-i.legendHeight;n.beginPath(),n.setStrokeStyle("#cccccc"),n.setLineWidth(1),n.moveTo(t,a),n.lineTo(t,o),n.stroke(),n.closePath()}function O(e,i,n,a,o){var r=!1;(i=t({x:0,y:0},i)).y-=8;var s=e.map(function(t){return c(t.text)}),l=9+4*a.toolTipPadding+Math.max.apply(null,s),h=2*a.toolTipPadding+e.length*a.toolTipLineHeight;i.x-Math.abs(n._scrollDistance_)+8+l>n.width&&(r=!0),o.beginPath(),o.setFillStyle(n.tooltip.option.background||a.toolTipBackground),o.setGlobalAlpha(a.toolTipOpacity),r?(o.moveTo(i.x,i.y+10),o.lineTo(i.x-8,i.y+10-5),o.lineTo(i.x-8,i.y+10+5),o.moveTo(i.x,i.y+10),o.fillRect(i.x-l-8,i.y,l,h)):(o.moveTo(i.x,i.y+10),o.lineTo(i.x+8,i.y+10-5),o.lineTo(i.x+8,i.y+10+5),o.moveTo(i.x,i.y+10),o.fillRect(i.x+8,i.y,l,h)),o.closePath(),o.fill(),o.setGlobalAlpha(1),e.forEach(function(t,e){o.beginPath(),o.setFillStyle(t.color);var n=i.x+8+2*a.toolTipPadding,s=i.y+(a.toolTipLineHeight-a.fontSize)/2+a.toolTipLineHeight*e+a.toolTipPadding;r&&(n=i.x-l-8+2*a.toolTipPadding),o.fillRect(n,s,4,a.fontSize),o.closePath()}),o.beginPath(),o.setFontSize(a.fontSize),o.setFillStyle("#ffffff"),e.forEach(function(t,e){var n=i.x+8+2*a.toolTipPadding+4+5;r&&(n=i.x-l-8+2*a.toolTipPadding+4+5);var s=i.y+(a.toolTipLineHeight-a.fontSize)/2+a.toolTipLineHeight*e+a.toolTipPadding;o.fillText(t.text,n,s+a.fontSize)}),o.stroke(),o.closePath()}function X(t,e,i,n){var a=i.xAxisHeight+(e.height-i.xAxisHeight-c(t))/2;n.save(),n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.yAxis.titleFontColor||"#333333"),n.translate(0,e.height),n.rotate(-90*Math.PI/180),n.fillText(t,a,i.padding+.5*i.fontSize),n.stroke(),n.closePath(),n.restore()}function G(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=C(t,e,i).ranges,r=F(e.categories,e,i),s=r.xAxisPoints,l=r.eachSpacing,h=o.pop(),c=o.shift();return n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&n.translate(e._scrollDistance_,0),t.forEach(function(o,r){var f=w(o.data,h,c,s,l,e,i,a);f=E(f,l,t.length,r,i,e),n.beginPath(),n.setFillStyle(o.color),f.forEach(function(t,a){if(null!==t){var o=t.x-t.width/2+1,r=e.height-t.y-i.padding-i.xAxisHeight-i.legendHeight;n.moveTo(o,t.y),n.rect(o,t.y,t.width-2,r)}}),n.closePath(),n.fill()}),t.forEach(function(o,r){var f=w(o.data,h,c,s,l,e,i,a);f=E(f,l,t.length,r,i,e),!1!==e.dataLabel&&1===a&&I(f,o,i,n)}),n.restore(),{xAxisPoints:s,eachSpacing:l}}function B(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=C(t,e,i).ranges,s=F(e.categories,e,i),l=s.xAxisPoints,h=s.eachSpacing,c=r.pop(),f=r.shift(),d=e.height-i.padding-i.xAxisHeight-i.legendHeight,x=[];return n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&n.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===a&&W(e.tooltip.offset.x,e,i,n),t.forEach(function(t,r){var s=w(t.data,c,f,l,h,e,i,a);if(x.push(s),S(s).forEach(function(i){if(n.beginPath(),n.setStrokeStyle(t.color),n.setFillStyle(t.color),n.setGlobalAlpha(.6),n.setLineWidth(2),i.length>1){var a=i[0],r=i[i.length-1];n.moveTo(a.x,a.y),"curve"===e.extra.lineStyle?i.forEach(function(t,e){if(e>0){var a=o(i,e-1);n.bezierCurveTo(a.ctrA.x,a.ctrA.y,a.ctrB.x,a.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&n.lineTo(t.x,t.y)}),n.lineTo(r.x,d),n.lineTo(a.x,d),n.lineTo(a.x,a.y)}else{var s=i[0];n.moveTo(s.x-h/2,s.y),n.lineTo(s.x+h/2,s.y),n.lineTo(s.x+h/2,d),n.lineTo(s.x-h/2,d),n.moveTo(s.x-h/2,s.y)}n.closePath(),n.fill(),n.setGlobalAlpha(1)}),!1!==e.dataPointShape){var u=i.dataPointShape[r%i.dataPointShape.length];k(s,t.color,u,n)}}),!1!==e.dataLabel&&1===a&&t.forEach(function(t,o){I(w(t.data,c,f,l,h,e,i,a),t,i,n)}),n.restore(),{xAxisPoints:l,calPoints:x,eachSpacing:h}}function R(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=C(t,e,i).ranges,s=F(e.categories,e,i),l=s.xAxisPoints,h=s.eachSpacing,c=r.pop(),f=r.shift(),d=[];return n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&n.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===a&&W(e.tooltip.offset.x,e,i,n),t.forEach(function(t,r){var s=w(t.data,c,f,l,h,e,i,a);if(d.push(s),S(s).forEach(function(i,a){n.beginPath(),n.setStrokeStyle(t.color),n.setLineWidth(2),1===i.length?(n.moveTo(i[0].x,i[0].y),n.arc(i[0].x,i[0].y,1,0,2*Math.PI)):(n.moveTo(i[0].x,i[0].y),"curve"===e.extra.lineStyle?i.forEach(function(t,e){if(e>0){var a=o(i,e-1);n.bezierCurveTo(a.ctrA.x,a.ctrA.y,a.ctrB.x,a.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&n.lineTo(t.x,t.y)}),n.moveTo(i[0].x,i[0].y)),n.closePath(),n.stroke()}),!1!==e.dataPointShape){var x=i.dataPointShape[r%i.dataPointShape.length];k(s,t.color,x,n)}}),!1!==e.dataLabel&&1===a&&t.forEach(function(t,o){I(w(t.data,c,f,l,h,e,i,a),t,i,n)}),n.restore(),{xAxisPoints:l,calPoints:d,eachSpacing:h}}function q(t,e,i,n){i.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&i.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===n&&O(t.tooltip.textList,t.tooltip.offset,t,e,i),i.restore()}function j(t,e,i,n){var o=F(t,e,i),r=o.xAxisPoints,s=(o.startX,o.endX,o.eachSpacing),l=e.height-i.padding-i.xAxisHeight-i.legendHeight,h=l+i.xAxisLineHeight;n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&n.translate(e._scrollDistance_,0),n.beginPath(),n.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),!0!==e.xAxis.disableGrid&&("calibration"===e.xAxis.type?r.forEach(function(t,e){e>0&&(n.moveTo(t-s/2,l),n.lineTo(t-s/2,l+4))}):r.forEach(function(t,e){n.moveTo(t,l),n.lineTo(t,h)})),n.closePath(),n.stroke();var f=e.width-2*i.padding-i.yAxisWidth-i.yAxisTitleWidth,d=Math.min(t.length,Math.ceil(f/i.fontSize/1.5)),x=Math.ceil(t.length/d);t=t.map(function(t,e){return e%x!=0?"":t}),0===i._xAxisTextAngle_?(n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.xAxis.fontColor||"#666666"),t.forEach(function(t,e){var a=s/2-c(t)/2;n.fillText(t,r[e]+a,l+i.fontSize+5)}),n.closePath(),n.stroke()):t.forEach(function(t,o){n.save(),n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.xAxis.fontColor||"#666666");var h=c(t),f=s/2-h,d=a(r[o]+s/2,l+i.fontSize/2+5,e.height),x=d.transX,u=d.transY;n.rotate(-1*i._xAxisTextAngle_),n.translate(x,u),n.fillText(t,r[o]+f,l+i.fontSize+5),n.closePath(),n.stroke(),n.restore()}),n.restore()}function N(t,e,i){for(var n=t.height-2*e.padding-e.xAxisHeight-e.legendHeight,a=Math.floor(n/e.yAxisSplit),o=e.yAxisWidth+e.yAxisTitleWidth,r=e.padding+o,s=t.width-e.padding,l=[],h=0;h<e.yAxisSplit;h++)l.push(e.padding+a*h);l.push(e.padding+a*e.yAxisSplit+2),i.beginPath(),i.setStrokeStyle(t.yAxis.gridColor||"#cccccc"),i.setLineWidth(1),l.forEach(function(t,e){i.moveTo(r,t),i.lineTo(s,t)}),i.closePath(),i.stroke()}function Y(t,e,i,n){if(!0!==e.yAxis.disabled){var a=C(t,e,i).rangesFormat,o=i.yAxisWidth+i.yAxisTitleWidth,r=e.height-2*i.padding-i.xAxisHeight-i.legendHeight,s=Math.floor(r/i.yAxisSplit),l=i.padding+o,h=e.width-i.padding,c=e.height-i.padding-i.xAxisHeight-i.legendHeight;n.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&n.fillRect(0,0,l,c+i.xAxisHeight+5),n.fillRect(h,0,e.width,c+i.xAxisHeight+5);for(var f=[],d=0;d<=i.yAxisSplit;d++)f.push(i.padding+s*d);n.stroke(),n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.yAxis.fontColor||"#666666"),a.forEach(function(t,e){var a=f[e]?f[e]:c;n.fillText(t,i.padding+i.yAxisTitleWidth,a+i.fontSize/2)}),n.closePath(),n.stroke(),e.yAxis.title&&X(e.yAxis.title,e,i,n)}}function Z(t,e,i,n){if(e.legend){T(t,e,i).legendList.forEach(function(t,a){var o=0;t.forEach(function(t){t.name=t.name||"undefined",o+=15+c(t.name)+15});var r=(e.width-o)/2+5,s=e.height-i.padding-i.legendHeight+a*(i.fontSize+8)+5+8;n.setFontSize(i.fontSize),t.forEach(function(t){switch(e.type){case"line":n.beginPath(),n.setLineWidth(1),n.setStrokeStyle(t.color),n.moveTo(r-2,s+5),n.lineTo(r+17,s+5),n.stroke(),n.closePath(),n.beginPath(),n.setLineWidth(1),n.setStrokeStyle("#ffffff"),n.setFillStyle(t.color),n.moveTo(r+7.5,s+5),n.arc(r+7.5,s+5,4,0,2*Math.PI),n.fill(),n.stroke(),n.closePath();break;case"pie":case"ring":n.beginPath(),n.setFillStyle(t.color),n.moveTo(r+7.5,s+5),n.arc(r+7.5,s+5,7,0,2*Math.PI),n.closePath(),n.fill();break;default:n.beginPath(),n.setFillStyle(t.color),n.moveTo(r,s),n.rect(r,s,15,10),n.closePath(),n.fill()}r+=20,n.beginPath(),n.setFillStyle(e.extra.legendTextColor||"#333333"),n.fillText(t.name,r,s+9),n.closePath(),n.stroke(),r+=c(t.name)+10})})}}function J(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.pie||{};t=M(t,a);var r={x:e.width/2,y:(e.height-i.legendHeight)/2},s=Math.min(r.x-i.pieChartLinePadding-i.pieChartTextPadding-i._pieTextMaxLength_,r.y-i.pieChartLinePadding-i.pieChartTextPadding);if(e.dataLabel?s-=10:s-=2*i.padding,(t=t.map(function(t){return t._start_+=(o.offsetAngle||0)*Math.PI/180,t})).forEach(function(t){n.beginPath(),n.setLineWidth(2),n.setStrokeStyle("#ffffff"),n.setFillStyle(t.color),n.moveTo(r.x,r.y),n.arc(r.x,r.y,s,t._start_,t._start_+2*t._proportion_*Math.PI),n.closePath(),n.fill(),!0!==e.disablePieStroke&&n.stroke()}),"ring"===e.type){var l=.6*s;"number"==typeof e.extra.ringWidth&&e.extra.ringWidth>0&&(l=Math.max(0,s-e.extra.ringWidth)),n.beginPath(),n.setFillStyle(e.background||"#ffffff"),n.moveTo(r.x,r.y),n.arc(r.x,r.y,l,0,2*Math.PI),n.closePath(),n.fill()}if(!1!==e.dataLabel&&1===a){for(var h=!1,c=0,f=t.length;c<f;c++)if(t[c].data>0){h=!0;break}h&&D(t,e,i,n,s,r)}return 1===a&&"ring"===e.type&&H(e,i,n),{center:r,radius:s,series:t}}function K(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.radar||{},s=u(e.categories.length),l={x:e.width/2,y:(e.height-i.legendHeight)/2},h=Math.min(l.x-(x(e.categories)+i.radarLabelTextMargin),l.y-i.radarLabelTextMargin);h-=i.padding,n.beginPath(),n.setLineWidth(1),n.setStrokeStyle(o.gridColor||"#cccccc"),s.forEach(function(t){var e=r(h*Math.cos(t),h*Math.sin(t),l);n.moveTo(l.x,l.y),n.lineTo(e.x,e.y)}),n.stroke(),n.closePath();for(var c=1;c<=i.radarGridCount;c++)!function(t){var e={};n.beginPath(),n.setLineWidth(1),n.setStrokeStyle(o.gridColor||"#cccccc"),s.forEach(function(a,o){var s=r(h/i.radarGridCount*t*Math.cos(a),h/i.radarGridCount*t*Math.sin(a),l);0===o?(e=s,n.moveTo(s.x,s.y)):n.lineTo(s.x,s.y)}),n.lineTo(e.x,e.y),n.stroke(),n.closePath()}(c);return b(s,l,h,t,e,a).forEach(function(t,a){if(n.beginPath(),n.setFillStyle(t.color),n.setGlobalAlpha(.6),t.data.forEach(function(t,e){0===e?n.moveTo(t.position.x,t.position.y):n.lineTo(t.position.x,t.position.y)}),n.closePath(),n.fill(),n.setGlobalAlpha(1),!1!==e.dataPointShape){var o=i.dataPointShape[a%i.dataPointShape.length];k(t.data.map(function(t){return t.position}),t.color,o,n)}}),z(s,h,l,e,i,n),{center:l,radius:h,angleList:s}}function Q(t,e){e.draw()}function U(t){this.isStop=!1,t.duration=void 0===t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:function(t){t(null)},i=null,n=function(a){if(null===a||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===i&&(i=a),a-i<t.duration){var o=(a-i)/t.duration;o=(0,it[t.timing])(o),t.onProcess&&t.onProcess(o),e(n,17)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};n=n.bind(this),e(n,17)}function V(t,e,i,n){var a=this,o=e.series,r=e.categories,s=T(o=l(o,i),e,i).legendHeight;i.legendHeight=s;var h=C(o,e,i).yAxisWidth;if(i.yAxisWidth=h,r&&r.length){var c=A(r,e,i),f=c.xAxisHeight,d=c.angle;i.xAxisHeight=f,i._xAxisTextAngle_=d}"pie"!==t&&"ring"!==t||(i._pieTextMaxLength_=!1===e.dataLabel?0:_(o));var x=e.animation?1e3:0;switch(this.animationInstance&&this.animationInstance.stop(),t){case"line":this.animationInstance=new U({timing:"easeIn",duration:x,onProcess:function(t){N(e,i,n);var s=R(o,e,i,n,t),l=s.xAxisPoints,h=s.calPoints,c=s.eachSpacing;a.chartData.xAxisPoints=l,a.chartData.calPoints=h,a.chartData.eachSpacing=c,j(r,e,i,n),Z(e.series,e,i,n),Y(o,e,i,n),q(e,i,n,t),Q(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new U({timing:"easeIn",duration:x,onProcess:function(t){N(e,i,n);var s=G(o,e,i,n,t),l=s.xAxisPoints,h=s.eachSpacing;a.chartData.xAxisPoints=l,a.chartData.eachSpacing=h,j(r,e,i,n),Z(e.series,e,i,n),Y(o,e,i,n),Q(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new U({timing:"easeIn",duration:x,onProcess:function(t){N(e,i,n);var s=B(o,e,i,n,t),l=s.xAxisPoints,h=s.calPoints,c=s.eachSpacing;a.chartData.xAxisPoints=l,a.chartData.calPoints=h,a.chartData.eachSpacing=c,j(r,e,i,n),Z(e.series,e,i,n),Y(o,e,i,n),q(e,i,n,t),Q(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new U({timing:"easeInOut",duration:x,onProcess:function(t){a.chartData.pieData=J(o,e,i,n,t),Z(e.series,e,i,n),Q(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new U({timing:"easeInOut",duration:x,onProcess:function(t){a.chartData.radarData=K(o,e,i,n,t),Z(e.series,e,i,n),Q(e,n)},onAnimationFinish:function(){a.event.trigger("renderComplete")}})}}function $(){this.events={}}var tt={yAxisWidth:15,yAxisSplit:3,xAxisHeight:15,xAxisLineHeight:0,legendHeight:15,yAxisTitleWidth:15,padding:12,columePadding:3,fontSize:12,dataPointShape:["diamond","circle","triangle","rect"],colors:["#7A7B7C"],pieChartLinePadding:25,pieChartTextPadding:15,xAxisTextPadding:3,titleColor:"#7A7B7C",titleFontSize:20,subtitleColor:"#7A7B7C",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:14,radarGridCount:3,radarLabelTextMargin:15},et={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!=0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){return t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height,!(e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y)}},it={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};U.prototype.stop=function(){this.isStop=!0},$.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},$.prototype.trigger=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var n=e[0],a=e.slice(1);this.events[n]&&this.events[n].forEach(function(t){try{t.apply(null,a)}catch(t){console.error(t)}})};var nt=function(e){e.title=e.title||{},e.subtitle=e.subtitle||{},e.yAxis=e.yAxis||{},e.xAxis=e.xAxis||{},e.extra=e.extra||{},e.legend=!1!==e.legend,e.animation=!1!==e.animation;var i=t({},tt);i.yAxisTitleWidth=!0!==e.yAxis.disabled&&e.yAxis.title?i.yAxisTitleWidth:0,i.pieChartLinePadding=!1===e.dataLabel?0:i.pieChartLinePadding,i.pieChartTextPadding=!1===e.dataLabel?0:i.pieChartTextPadding,this.opts=e,this.config=i,this.context=wx.createCanvasContext(e.canvasId),this.chartData={},this.event=new $,this.scrollOption={currentOffset:0,startTouchX:0,distance:0},V.call(this,e.type,e,i,this.context)};nt.prototype.updateData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts.series=e.series||this.opts.series,this.opts.categories=e.categories||this.opts.categories,this.opts.title=t({},this.opts.title,e.title||{}),this.opts.subtitle=t({},this.opts.subtitle,e.subtitle||{}),V.call(this,this.opts.type,this.opts,this.config,this.context)},nt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},nt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},nt.prototype.getCurrentDataIndex=function(t){var e=t.touches&&t.touches.length?t.touches:t.changedTouches;if(e&&e.length){var i=e[0],n=i.x,a=i.y;return"pie"===this.opts.type||"ring"===this.opts.type?m({x:n,y:a},this.chartData.pieData):"radar"===this.opts.type?v({x:n,y:a},this.chartData.radarData,this.opts.categories.length):p({x:n,y:a},this.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},nt.prototype.showToolTip=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("line"===this.opts.type||"area"===this.opts.type){var n=this.getCurrentDataIndex(e),a=this.scrollOption.currentOffset,o=t({},this.opts,{_scrollDistance_:a,animation:!1});if(n>-1){var r=d(this.opts.series,n);if(0!==r.length){var s=g(r,this.chartData.calPoints,n,this.opts.categories,i),l=s.textList,h=s.offset;o.tooltip={textList:l,offset:h,option:i}}}V.call(this,o.type,o,this.config,this.context)}},nt.prototype.scrollStart=function(t){t.touches[0]&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=t.touches[0].x)},nt.prototype.scroll=function(e){if(e.touches[0]&&!0===this.opts.enableScroll){var n=e.touches[0].x-this.scrollOption.startTouchX,a=this.scrollOption.currentOffset,o=i(a+n,this.chartData,this.config,this.opts);this.scrollOption.distance=n=o-a;var r=t({},this.opts,{_scrollDistance_:a+n,animation:!1});V.call(this,r.type,r,this.config,this.context)}},nt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,i=e.currentOffset,n=e.distance;this.scrollOption.currentOffset=i+n,this.scrollOption.distance=0}},module.exports=nt; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var a=require("utils/requestApi.js");App({onLaunch:function(){var e=this;wx.login({success:function(o){console.log(o.code),o.code?wx.request({url:a.apiGetOpenIdUrl,data:{js_code:o.code},success:function(a){e.globalData.openid=a.data.data.openid,e.globalData.session_key=a.data.data.session_key}}):console.log("获取用户登录态失败！"+o.errMsg)}}),console.log("App Launch"),console.log(e.globalData.openid);setInterval(function(){a.request({url:a.apiGetTankAreatUrl,complete:function(a){var o=a.data.data;e.globalData.alarmAreaList=[];for(var l=0;l<o.length;l++)1==o[l].alarmStatus&&e.globalData.alarmAreaList.push(o[l].name)}})},1e3)},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")},globalData:{appid:"wx0a39d1e0141eefce",secret:"ade630caf7fd6ced559f25c385c96dc0",hasLogin:!1,openid:null,session_key:null,confirmedAlarm:"",alarmAreaList:[]}}); 
 			}); 	require("app.js");
 		__wxRoute = 'components/canvas-ring/canvas-ring';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/canvas-ring/canvas-ring.js';	define("components/canvas-ring/canvas-ring.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t=wx.getSystemInfoSync().windowWidth;Component({options:{multipleSlots:!0},properties:{canvasWidth:{type:Number,value:.4*t},lineWidth:{type:Number,value:5},lineColor:{type:String,value:"#3BD1D9"},title:{type:String,value:""},value:{type:Number,value:45},valueColor:{type:String,value:"#3BD1D9"},maxValue:{type:Number,value:350},minValue:{type:Number,value:0},suffix:{type:null,value:"%"},startDegree:{type:Number,value:306}},data:{canvasWidth:.4*t,isMarginTop:!0},methods:{showCanvasRing:function(t){0==this.data.title.replace(/(^\s*)|(\s*$)/g,"").length&&this.setData({isMarginTop:!1});var e=wx.createCanvasContext("circleBar",this),a=this.data.canvasWidth/2,i=this.data.startDegree,s=this.data.maxValue,l=this.data.minValue,r=this.data.value;this.setData({valueColor:t});var h=t,n=this.data.lineWidth,u=(r-l)/(s-l)*360;e.translate(a,a),e.beginPath(),e.setStrokeStyle("#FAFAFF"),e.setLineWidth(n);var o=2*Math.PI/350*100+1.2*Math.PI;e.arc(0,0,a-10,o,1.2*Math.PI,!0),e.stroke(),e.closePath(),e.beginPath(),e.setStrokeStyle(h),e.setLineWidth(n),e.arc(0,0,a-10,i*Math.PI/180-.5*Math.PI,u*Math.PI/180+i*Math.PI/180-.5*Math.PI,!1),e.stroke(),e.closePath(),e.draw()}}}); 
 			}); 	require("components/canvas-ring/canvas-ring.js");
 		__wxRoute = 'components/zy-modal/zy-modal';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/zy-modal/zy-modal.js';	define("components/zy-modal/zy-modal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t=require("../../utils/util");Component({options:{multipleSlots:!0},properties:{title:{type:String},areaName:{type:String},imageReady:{type:String},hidden:{type:Boolean},confirmText:{type:String},confirmColor:{type:String,observer:function(t){this.setData({tintColor:"color:"+t})}}},data:{confirmText:"确认",tintColor:"color:#FEFEFF"},methods:{confirm:function(){this.triggerEvent("confirm")}},ready:function(){var e=this;t.wxPromisify(wx.getSystemInfo)().then(function(t){e.setData({height:t.windowHeight+"px"})})}}); 
 			}); 	require("components/zy-modal/zy-modal.js");
 		__wxRoute = 'pages/inlet/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/inlet/index.js';	define("pages/inlet/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../utils/requestApi.js"),o=getApp();Page({data:{userInfo:{},hasUserInfo:!1,canIUse:wx.canIUse("button.open-type.getUserInfo"),formIdString:""},onLoad:function(){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},enterSystem:function(n){var t=o.globalData.openid;console.log("enterSystem"+t),e.request({url:e.apiPostNeedMessageUrl,data:{formId:n.detail.formId,openId:t},complete:function(e){}}),console.log("enterSystem"+n.detail.formId)},enterS:function(n){var t=o.globalData.openid;console.log("enterS"+t),e.request({url:e.apiPostNeedMessageUrl,data:{formId:n.detail.formId,openId:t},complete:function(e){}}),console.log("enterS"+n.detail.formId)},rSystem:function(n){var t=o.globalData.openid;console.log("rSystem"+t),e.request({url:e.apiPostNeedMessageUrl,data:{formId:n.detail.formId,openId:t},complete:function(e){}}),console.log("rSystem"+n.detail.formId)},enter:function(){wx.navigateTo({url:"../index/index"})}}); 
 			}); 	require("pages/inlet/index.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var a,n=require("../../utils/requestApi.js"),t=(require("../../utils/wxcharts.js"),getApp()),e=getApp(),o=0,r=!1;Page({data:{modalHidden:!0,areaName:"",imageUrl:"../../images/alarm-pop-fire.png",list:[],src:"https://wp1.springbutton.com/ytkjnt/audio/alarm-audio.mp3",normal:!0},onLoad:function(a){this.getTankAreaList();var t=this;setInterval(function(){n.request({url:n.apiGetStatustUrl,complete:function(a){console.log(a.data.data),0!=a.data.data?t.setData({normal:!1}):t.setData({normal:!0})}})},1e3)},getTankAreaList:function(){var a=this;n.request({url:n.apiGetTankAreatUrl,complete:function(n){a.setData({list:n.data.data}),a.runCanvas0=a.selectComponent("#runCanvas0"),a.runCanvas0.showCanvasRing("#3BD1D9"),a.runCanvas1=a.selectComponent("#runCanvas1"),a.runCanvas1.showCanvasRing("#E6BC17"),a.runCanvas2=a.selectComponent("#runCanvas2"),a.runCanvas2.showCanvasRing("#34CD69"),a.runCanvas3=a.selectComponent("#runCanvas3"),a.runCanvas3.showCanvasRing("#07B2F2"),a.runCanvas4=a.selectComponent("#runCanvas4"),a.runCanvas4.showCanvasRing("#265CFF"),a.runCanvas5=a.selectComponent("#runCanvas5"),a.runCanvas5.showCanvasRing("#DE8318"),a.runCanvas6=a.selectComponent("#runCanvas6"),a.runCanvas6.showCanvasRing("#630AE8")}})},onReady:function(){this.audioCtx=wx.createAudioContext("audio")},onShow:function(){r=!0,console.log(r);var n=this;t.globalData.openid;r&&(o=setInterval(function(){var a=e.globalData.alarmAreaList;if(a.length>0){for(var t="",o=0;o<a.length;o++)t+=","+a[o];t.substring(1)!=e.globalData.confirmedAlarm&&(t.substring(1).length>=e.globalData.confirmedAlarm.length?(n.setData({modalHidden:!1,areaName:t.substring(1)}),n.audioCtx.play()):e.globalData.confirmedAlarm=t.substring(1))}else e.globalData.confirmedAlarm=""},1e3),a=setInterval(function(){n.getTankAreaList()},1e3))},onHide:function(){r=!1,console.log(r),clearInterval(o),clearInterval(a)},onPullDownRefresh:function(){},gotoSingleTank:function(a){0==a.currentTarget.id&&wx.navigateTo({url:"../single-tank/index"})},gotoNet:function(){wx.navigateTo({url:"../net-monitor/index"})},gotoData:function(){wx.navigateTo({url:"../data-retrieval/index"})},modalConfirm:function(){this.setData({modalHidden:!0}),e.globalData.confirmedAlarm=this.data.areaName,this.audioCtx.pause();var a=this;n.request({url:n.apiSendServiceMessageUrl,data:{keyWord:a.data.areaName},complete:function(a){}})},sendFormId:function(a){var e=t.globalData.openid;n.request({url:n.apiPostNeedMessageUrl,data:{formId:a.detail.formId,openId:e},complete:function(a){}})}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/tank-area/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/tank-area/index.js';	define("pages/tank-area/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function a(a,t,n){return t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}var t,n,e=require("../../utils/requestApi.js"),i=require("../../utils/wxcharts.js"),o=null,r=getApp(),l=!1;Page((t={data:{modalHidden:!0,areaName:"",imageUrl:"../../images/alarm-pop-fire.png",animationData1:"",animationData2:"",animationData3:"",animationData4:"",animationData5:"",animationData6:"",list:[],src:"https://wp1.springbutton.com/ytkjnt/audio/alarm-audio.mp3"},onLoad:function(a){var t=this;setInterval(function(){e.request({url:e.apiGetOilTanktUrl,complete:function(a){console.log(a.data.data),t.setData({list:a.data.data})}})},1e3)},onReady:function(){this.showOilReservesDayCharts(),this.audioCtx=wx.createAudioContext("audio")},oilReservesCanvasScrollStart:function(a){o.scrollStart(a)},oilReservesCanvasScroll:function(a){o.scroll(a)},oilReservesCanvasScrollEnd:function(a){o.scrollEnd(a)}},a(t,"oilReservesCanvasScrollStart",function(a){o.scrollStart(a)}),a(t,"oilReservesCanvasScroll",function(a){o.scroll(a)}),a(t,"oilReservesCanvasScrollEnd",function(a){o.scrollEnd(a)}),a(t,"showOilReservesDayCharts",function(){var a=320;try{a=wx.getSystemInfoSync().windowWidth}catch(a){console.error("getSystemInfoSync failed!")}o=new i({canvasId:"oilReservesCanvas",type:"line",categories:[11,12,13,14,15,16,17],legend:!1,series:[{data:[40.1,35,43.2,41.4,36,40.6,40.8],color:"#156DD5",format:function(a){return a}}],yAxis:{format:function(a){return a},min:0,max:60,gridColor:"#EDEDF2"},width:a,height:110,dataPointShape:!1})}),a(t,"singleMonitor",function(){wx.redirectTo({url:"../single-tank/index"})}),a(t,"gotoSingleTankData",function(){wx.navigateTo({url:"../single-tank-data/index"})}),a(t,"modalConfirm",function(){this.setData({modalHidden:!0}),r.globalData.confirmedAlarm=this.data.areaName,this.audioCtx.pause()}),a(t,"onShow",function(){var a=this;(l=!0)&&(n=setInterval(function(){var t=r.globalData.alarmAreaList;if(t.length>0){for(var n="",e=0;e<t.length;e++)n+=","+t[e];n.substring(1)!=r.globalData.confirmedAlarm&&(n.substring(1).length>=r.globalData.confirmedAlarm.length?(a.setData({modalHidden:!1,areaName:n.substring(1)}),a.audioCtx.play()):r.globalData.confirmedAlarm=n.substring(1))}else r.globalData.confirmedAlarm=""},1e3))}),a(t,"onHide",function(){l=!1,clearInterval(n)}),t)); 
 			}); 	require("pages/tank-area/index.js");
 		__wxRoute = 'pages/single-tank/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/single-tank/index.js';	define("pages/single-tank/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var a,t,e=require("../../utils/requestApi.js"),i=getApp(),n=!1,l=!0,o="N-T1罐区N-T101",r="N-T1罐区N-T102",d="N-T1罐区N-T103",s="N-T1罐区N-T104",u="N-T1罐区N-T105",g="N-T1罐区N-T106";Page({data:{modalHidden:!0,areaName:"",imageUrl:"../../images/alarm-pop-fire.png",list:[],hiddenModal:!0,alarmDescribe:"",src:"https://wp1.springbutton.com/ytkjnt/audio/alarm-audio.mp3"},onLoad:function(a){},getOilTankList:function(){var a=this;e.request({url:e.apiGetOilTanktUrl,complete:function(t){console.log(t.data.data),a.setData({list:t.data.data});for(var e=t.data.data,i=0;i<e.length;i++){var n="";l&&(1==e[i].levelStatus&&(n+="低液位!"),2==e[i].levelStatus&&(n+="高液位!"),3==e[i].levelStatus&&(n+="高高液位!"),1==e[i].status&&(n+="液位异常!"),a.alarmShowOrHidden(e[i].areaName+e[i].name,n,i))}}})},alarmShowOrHidden:function(a,t,e){var i=this,n=a+t;if(0==e&&n!=o){if(n.length>=o.length)return i.setData({hiddenModal:!1,alarmDescribe:n}),i.audioCtx.play(),o=n,void(l=!1);o=n}if(1==e&&n!=r){if(n.length>=r.length)return i.setData({hiddenModal:!1,alarmDescribe:n}),i.audioCtx.play(),r=n,void(l=!1);r=n}if(2==e&&n!=d){if(n.length>=d.length)return i.setData({hiddenModal:!1,alarmDescribe:n}),i.audioCtx.play(),d=n,void(l=!1);d=n}if(3==e&&n!=s){if(n.length>=s.length)return i.setData({hiddenModal:!1,alarmDescribe:n}),i.audioCtx.play(),s=n,void(l=!1);s=n}if(4==e&&n!=u){if(n.length>=u.length)return i.setData({hiddenModal:!1,alarmDescribe:n}),i.audioCtx.play(),u=n,void(l=!1);u=n}if(5==e&&n!=g){if(n.length>=g.length)return i.setData({hiddenModal:!1,alarmDescribe:n}),i.audioCtx.play(),g=n,void(l=!1);g=n}},confirmModal:function(){this.setData({hiddenModal:!0}),l=!0,this.audioCtx.pause()},onReady:function(){this.audioCtx=wx.createAudioContext("audio")},onShow:function(){var e=this;(n=!0)&&(a=setInterval(function(){var a=i.globalData.alarmAreaList;if(a.length>0){for(var t="",n=0;n<a.length;n++)t+=","+a[n];t.substring(1)!=i.globalData.confirmedAlarm&&(t.substring(1).length>=i.globalData.confirmedAlarm.length?(e.setData({modalHidden:!1,areaName:t.substring(1)}),e.audioCtx.play()):i.globalData.confirmedAlarm=t.substring(1))}else i.globalData.confirmedAlarm=""},1e3),t=setInterval(function(){e.getOilTankList()},1e3))},onHide:function(){n=!1,clearInterval(a),clearInterval(t)},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},gotoSingleData:function(a){0==a.currentTarget.id&&wx.navigateTo({url:"../single-tank-data/index"})},gotoTankArea:function(){wx.redirectTo({url:"../tank-area/index"})},modalConfirm:function(){this.setData({modalHidden:!0}),i.globalData.confirmedAlarm=this.data.areaName,this.audioCtx.pause()}}); 
 			}); 	require("pages/single-tank/index.js");
 		__wxRoute = 'pages/single-tank-data/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/single-tank-data/index.js';	define("pages/single-tank-data/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function a(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}require("../../utils/requestApi.js");var e,t,r=require("../../utils/wxcharts.js"),n=null,o=getApp(),l=!1;Page((e={data:{modalHidden:!0,areaName:"",imageUrl:"../../images/alarm-pop-fire.png",src:"https://wp1.springbutton.com/ytkjnt/audio/alarm-audio.mp3"},onLoad:function(a){},onReady:function(){this.audioCtx=wx.createAudioContext("audio")},oilReservesCanvasScrollStart:function(a){n.scrollStart(a)},oilReservesCanvasScroll:function(a){n.scroll(a)},oilReservesCanvasScrollEnd:function(a){n.scrollEnd(a)}},a(e,"oilReservesCanvasScrollStart",function(a){n.scrollStart(a)}),a(e,"oilReservesCanvasScroll",function(a){n.scroll(a)}),a(e,"oilReservesCanvasScrollEnd",function(a){n.scrollEnd(a)}),a(e,"showOilReservesDayCharts",function(){var a=320;try{a=wx.getSystemInfoSync().windowWidth}catch(a){console.error("getSystemInfoSync failed!")}n=new r({canvasId:"oilReservesCanvas",type:"line",categories:[11,12,13,14,15,16,17],legend:!1,series:[{data:[5.8,4.4,6.6,6.2,4.2,6.4,6.8],color:"#156DD5",format:function(a){return a}}],yAxis:{format:function(a){return a},min:2,max:8,gridColor:"#EDEDF2"},width:a,height:110,dataPointShape:!1})}),a(e,"modalConfirm",function(){this.setData({modalHidden:!0}),o.globalData.confirmedAlarm=this.data.areaName,this.audioCtx.pause()}),a(e,"onShow",function(){l=!0,this.showOilReservesDayCharts();var a=this;l&&(t=setInterval(function(){var e=o.globalData.alarmAreaList;if(e.length>0){for(var t="",r=0;r<e.length;r++)t+=","+e[r];t.substring(1)!=o.globalData.confirmedAlarm&&(t.substring(1).length>=o.globalData.confirmedAlarm.length?a.setData({modalHidden:!1,areaName:t.substring(1)}):o.globalData.confirmedAlarm=t.substring(1))}else o.globalData.confirmedAlarm=""},1e3))}),a(e,"onHide",function(){l=!1,clearInterval(t)}),e)); 
 			}); 	require("pages/single-tank-data/index.js");
 		__wxRoute = 'pages/net-monitor/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/net-monitor/index.js';	define("pages/net-monitor/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var a,t=require("../../utils/requestApi.js"),e=getApp(),n=!1,o=[];Page({data:{modalHidden:!0,areaName:"",imageUrl:"../../images/alarm-pop-fire.png",src:"https://wp1.springbutton.com/ytkjnt/audio/alarm-audio.mp3",list:[]},onLoad:function(a){},onReady:function(){this.audioCtx=wx.createAudioContext("audio");var a=this;setInterval(function(){t.request({url:t.apiGetNetStatustUrl,complete:function(t){console.log(t.data.data);var e=a.data.list;if(a.data.list=[],o=[],t&&t.data&&200===t.data.state&&t.data.data)for(l=0;l<t.data.data.length;l++){var n=t.data.data[l];o.push(n)}else wx.showModal({title:"提示",content:"无法获取网络监控信息,请尝试重新登录",showCancel:!1,confirmText:"确定"});for(var i=o,l=0;l<i.length;l++){var r=i[l],s=null;l<e.length&&(s=e[l],r.open=s.open)}a.setData({list:i})}})},1e3)},onShow:function(){var t=this;(n=!0)&&(a=setInterval(function(){var a=e.globalData.alarmAreaList;if(a.length>0){for(var n="",o=0;o<a.length;o++)n+=","+a[o];n.substring(1)!=e.globalData.confirmedAlarm&&(n.substring(1).length>=e.globalData.confirmedAlarm.length?(t.setData({modalHidden:!1,areaName:n.substring(1)}),t.audioCtx.play()):e.globalData.confirmedAlarm=n.substring(1))}else e.globalData.confirmedAlarm=""},1e3))},onHide:function(){n=!1,clearInterval(a)},onUnload:function(){},onPullDownRefresh:function(){var a=this;t.request({url:t.apiGetNetStatustUrl,complete:function(t){console.log(t.data.data),a.setData({list:t.data.data})}})},onReachBottom:function(){},onShareAppMessage:function(){},showOrHideList:function(a){var t=a.currentTarget.id,e=this.data.list,n=e[t];n.open?n.open=!n.open:n.open=!0,this.setData({list:e})},modalConfirm:function(){this.setData({modalHidden:!0}),e.globalData.confirmedAlarm=this.data.areaName,this.audioCtx.pause()}}); 
 			}); 	require("pages/net-monitor/index.js");
 		__wxRoute = 'pages/data-retrieval/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/data-retrieval/index.js';	define("pages/data-retrieval/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";require("../../utils/requestApi.js");var e,t=getApp(),a="",s="",f=!1,n=!1;Page({data:{open:!1,modalHidden:!0,areaName:"",imageUrl:"../../images/alarm-pop-fire.png",selecting:!1,shade:"none",areaBg:"#ffffff",areaLine:"#ffffff",selectArea:!1,area_name:"N-T1罐区",tankBg:"#ffffff",tankLine:"#ffffff",selectTank:!1,tank_name:"全部油罐",statusBg:"#ffffff",statusLine:"#ffffff",selectStatus:!1,status_name:"全部动态",timeBg:"#ffffff",timeLine:"#ffffff",selectTime:!1,time_name:"时间选择",starttime:"日期选择",endtime:"2019-05-13",dateTime:"2019.04.13-2019.05.13",src:"https://wp1.springbutton.com/ytkjnt/audio/alarm-audio.mp3"},onLoad:function(e){},onReady:function(){this.audioCtx=wx.createAudioContext("audio")},onShow:function(){var a=this;(n=!0)&&(e=setInterval(function(){var e=t.globalData.alarmAreaList;if(e.length>0){for(var s="",f=0;f<e.length;f++)s+=","+e[f];s.substring(1)!=t.globalData.confirmedAlarm&&(s.substring(1).length>=t.globalData.confirmedAlarm.length?(a.setData({modalHidden:!1,areaName:s.substring(1)}),a.audioCtx.play()):t.globalData.confirmedAlarm=s.substring(1))}else t.globalData.confirmedAlarm=""},1e3))},onHide:function(){n=!1,clearInterval(e)},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},showOrHideList:function(){this.data.open?this.setData({open:!1}):this.setData({open:!0})},hideList:function(){this.setData({open:!1})},modalConfirm:function(){this.setData({modalHidden:!0}),t.globalData.confirmedAlarm=this.data.areaName,this.audioCtx.pause()},bindShowAreaMsg:function(){var e=this.data.selectArea,t=this.data.area_name;this.data.selecting?this.data.selectArea&&this.setData({area_name:t,selectArea:!1,shade:"none",areaBg:"#ffffff",areaLine:"#ffffff",selecting:!1}):e?this.setData({area_name:t,selectArea:!1,shade:"none",areaBg:"#ffffff",areaLine:"#ffffff",selecting:!1}):this.setData({selectArea:!this.data.selectArea,shade:"block",areaBg:"#EDEDF2",areaLine:"#DCDDDF",selecting:!0})},mySelectArea:function(e){console.log(e);var t=e.currentTarget.dataset.name;this.setData({area_name:t,selectArea:!1,shade:"none",areaBg:"#ffffff",areaLine:"#ffffff",selecting:!1})},bindShowTankMsg:function(){var e=this.data.selectTank,t=this.data.tank_name;this.data.selecting?this.data.selectTank&&this.setData({tank_name:t,selectTank:!1,shade:"none",tankBg:"#ffffff",tankLine:"#ffffff",selecting:!1}):e?this.setData({tank_name:t,selectTank:!1,shade:"none",tankBg:"#ffffff",tankLine:"#ffffff",selecting:!1}):this.setData({selectTank:!this.data.selectTank,shade:"block",tankBg:"#EDEDF2",tankLine:"#DCDDDF",selecting:!0})},mySelectTank:function(e){console.log(e);var t=e.currentTarget.dataset.name;this.setData({tank_name:t,selectTank:!1,shade:"none",tankBg:"#ffffff",tankLine:"#ffffff",selecting:!1})},bindShowStatusMsg:function(){var e=this.data.selectStatus,t=this.data.status_name;this.data.selecting?this.data.selectStatus&&this.setData({status_name:t,selectStatus:!1,shade:"none",statusBg:"#ffffff",statusLine:"#ffffff",selecting:!1}):e?this.setData({status_name:t,selectStatus:!1,shade:"none",statusBg:"#ffffff",statusLine:"#ffffff",selecting:!1}):this.setData({selectStatus:!this.data.selectStatus,shade:"block",statusBg:"#EDEDF2",statusLine:"#DCDDDF",selecting:!0})},mySelectStatus:function(e){console.log(e);var t=e.currentTarget.dataset.name;this.setData({status_name:t,selectStatus:!1,shade:"none",statusBg:"#ffffff",statusLine:"#ffffff",selecting:!1})},bindShowTimeMsg:function(){var e=this.data.selectTime,t=this.data.time_name;this.data.selecting?this.data.selectTime&&this.setData({time_name:t,selectTime:!1,shade:"none",timeBg:"#ffffff",timeLine:"#ffffff",selecting:!1}):e?this.setData({time_name:t,selectTime:!1,shade:"none",timeBg:"#ffffff",timeLine:"#ffffff",selecting:!1}):this.setData({selectTime:!this.data.selectTime,shade:"block",timeBg:"#EDEDF2",timeLine:"#DCDDDF",selecting:!0})},mySelectTime:function(e){console.log(e);var t=e.currentTarget.dataset.name;this.setData({time_name:t,selectTime:!1,shade:"none",timeBg:"#ffffff",timeLine:"#ffffff",selecting:!1})},changeStarttime:function(e){this.setData({starttime:e.detail.value,dateTime:e.detail.value.replace(/-/g,".")+"-"+this.data.endtime.replace(/-/g,".")})},changeEndtime:function(e){this.setData({endtime:e.detail.value,dateTime:this.data.starttime.replace(/-/g,".")+"-"+e.detail.value.replace(/-/g,".")})},submittime:function(e){a=e.detail.value.starttime,s=e.detail.value.endtime,a>s?(wx.showModal({title:"提示",content:"开始时间不能晚于结束时间",showCancel:!1}),f=!1):f=!0},mySelectTimeDate:function(e){if(console.log(e),f){this.setData({dateTime:this.data.starttime.replace(/-/g,".")+"-"+this.data.endtime.replace(/-/g,".")});var t=e.currentTarget.dataset.name;console.log(t),this.setData({time_name:t,selectTime:!1,shade:"none",timeBg:"#ffffff",timeLine:"#ffffff",selecting:!1})}}}); 
 			}); 	require("pages/data-retrieval/index.js");
 	