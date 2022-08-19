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
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
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
Z([[7],[3,'head']])
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
Z([3,'myorder-detail'])
Z([[6],[[7],[3,'result']],[3,'date3']])
Z([3,'detail-item'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'result']],[3,'paiche']],[1,'']],[[2,'!='],[[6],[[7],[3,'$result']],[3,'paiche']],[1,'']]],[[2,'!='],[[6],[[7],[3,'result']],[3,'tixing']],[1,'']]],[[2,'!='],[[6],[[7],[3,'result']],[3,'tixing']],[1,'0']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'result']],[3,'gongchang']],[1,'']],[[2,'!='],[[6],[[7],[3,'result']],[3,'gongchang']],[1,'0']]],[[2,'!='],[[6],[[7],[3,'result']],[3,'tixing']],[1,'']]],[[2,'!='],[[6],[[7],[3,'result']],[3,'tixing']],[1,'0']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'result']],[3,'lichang']],[1,'']],[[2,'!='],[[6],[[7],[3,'result']],[3,'lichang']],[1,'0']]],[[2,'!='],[[6],[[7],[3,'result']],[3,'gongchang']],[1,'']]],[[2,'!='],[[6],[[7],[3,'result']],[3,'gongchang']],[1,'0']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'result']],[3,'chayan']],[1,'']],[[2,'!='],[[6],[[7],[3,'result']],[3,'chayan']],[1,'0']]],[[2,'!='],[[6],[[7],[3,'result']],[3,'lichang']],[1,'']]],[[2,'!='],[[6],[[7],[3,'result']],[3,'lichang']],[1,'0']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'result']],[3,'jingang']],[1,'']],[[2,'!='],[[6],[[7],[3,'result']],[3,'jingang']],[1,'0']]],[[2,'!='],[[6],[[7],[3,'result']],[3,'chayan']],[1,'']]],[[2,'!='],[[6],[[7],[3,'result']],[3,'chayan']],[1,'0']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'result']],[3,'wancheng']],[1,'']],[[2,'!='],[[6],[[7],[3,'result']],[3,'wancheng']],[1,'0']]],[[2,'!='],[[6],[[7],[3,'result']],[3,'jingang']],[1,'']]],[[2,'!='],[[6],[[7],[3,'result']],[3,'jingang']],[1,'0']]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'result']],[3,'date5']],[1,'']],[[2,'=='],[[6],[[7],[3,'result']],[3,'date6']],[1,'']]])
Z([[2,'=='],[[7],[3,'btn']],[1,'1']])
Z([[2,'=='],[[7],[3,'btn']],[1,'2']])
Z([[2,'=='],[[7],[3,'btn']],[1,'3']])
Z([[2,'=='],[[7],[3,'btn']],[1,'4']])
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
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
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
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'rst']])
Z([3,'index'])
Z([3,'li'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,'预录成功']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,'退回']])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/activation/activation.wxml','./pages/addmoney/addmoney.wxml','./pages/authentication/authentication.wxml','./pages/authorize/authorize.wxml','./pages/billlist/billlist.wxml','./pages/editmoney/editmoney.wxml','./pages/empower/empower.wxml','./pages/frozen/frozen.wxml','./pages/guize/guize.wxml','./pages/index/index.wxml','./pages/info/info.wxml','./pages/information/information.wxml','./pages/integral/integral.wxml','./pages/login/login.wxml','./pages/order/order.wxml','./pages/orderIntro/orderIntro.wxml','./pages/orderMoneyIntro/orderMoneyIntro.wxml','./pages/orderUpload/orderUpload.wxml','./pages/orderUploadzxd/orderUploadzxd.wxml','./pages/passwd/passwd.wxml','./pages/question/question.wxml','./pages/signin/signin.wxml','./pages/withdraw/withdraw.wxml','./pages/withlist/withlist.wxml','./pages/xiaopiao/xiaopiao.wxml','./pages/yulu/yulu.wxml'];d_[x[0]]={}
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
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
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
var aL=_v()
_(r,aL)
if(_oz(z,0,e,s,gg)){aL.wxVkey=1
}
aL.wxXCkey=1
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
var oR=_n('view')
_rz(z,oR,'class',0,e,s,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,1,e,s,gg)){fS.wxVkey=1
}
var oX=_n('view')
_rz(z,oX,'class',2,e,s,gg)
var lY=_v()
_(oX,lY)
if(_oz(z,3,e,s,gg)){lY.wxVkey=1
}
var aZ=_v()
_(oX,aZ)
if(_oz(z,4,e,s,gg)){aZ.wxVkey=1
}
var t1=_v()
_(oX,t1)
if(_oz(z,5,e,s,gg)){t1.wxVkey=1
}
var e2=_v()
_(oX,e2)
if(_oz(z,6,e,s,gg)){e2.wxVkey=1
}
var b3=_v()
_(oX,b3)
if(_oz(z,7,e,s,gg)){b3.wxVkey=1
}
var o4=_v()
_(oX,o4)
if(_oz(z,8,e,s,gg)){o4.wxVkey=1
}
var x5=_v()
_(oX,x5)
if(_oz(z,9,e,s,gg)){x5.wxVkey=1
}
lY.wxXCkey=1
aZ.wxXCkey=1
t1.wxXCkey=1
e2.wxXCkey=1
b3.wxXCkey=1
o4.wxXCkey=1
x5.wxXCkey=1
_(oR,oX)
var cT=_v()
_(oR,cT)
if(_oz(z,10,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(oR,hU)
if(_oz(z,11,e,s,gg)){hU.wxVkey=1
}
var oV=_v()
_(oR,oV)
if(_oz(z,12,e,s,gg)){oV.wxVkey=1
}
var cW=_v()
_(oR,cW)
if(_oz(z,13,e,s,gg)){cW.wxVkey=1
}
fS.wxXCkey=1
cT.wxXCkey=1
hU.wxXCkey=1
oV.wxXCkey=1
cW.wxXCkey=1
_(r,oR)
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
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
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
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var eFB=_v()
_(r,eFB)
var bGB=function(xIB,oHB,oJB,gg){
var cLB=_n('view')
_rz(z,cLB,'class',2,xIB,oHB,gg)
var hMB=_v()
_(cLB,hMB)
if(_oz(z,3,xIB,oHB,gg)){hMB.wxVkey=1
}
var oNB=_v()
_(cLB,oNB)
if(_oz(z,4,xIB,oHB,gg)){oNB.wxVkey=1
}
hMB.wxXCkey=1
oNB.wxXCkey=1
_(oJB,cLB)
return oJB
}
eFB.wxXCkey=2
_2z(z,0,bGB,e,s,gg,eFB,'item','index','index')
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['pages/activation/activation.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/activation/activation.wxml'] = [$gwx, './pages/activation/activation.wxml'];else __wxAppCode__['pages/activation/activation.wxml'] = $gwx( './pages/activation/activation.wxml' );
		__wxAppCode__['pages/addmoney/addmoney.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"上报费用","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/addmoney/addmoney.wxml'] = [$gwx, './pages/addmoney/addmoney.wxml'];else __wxAppCode__['pages/addmoney/addmoney.wxml'] = $gwx( './pages/addmoney/addmoney.wxml' );
		__wxAppCode__['pages/authentication/authentication.json'] = {"navigationBarTitleText":"认证","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/authentication/authentication.wxml'] = [$gwx, './pages/authentication/authentication.wxml'];else __wxAppCode__['pages/authentication/authentication.wxml'] = $gwx( './pages/authentication/authentication.wxml' );
		__wxAppCode__['pages/authorize/authorize.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/authorize/authorize.wxml'] = [$gwx, './pages/authorize/authorize.wxml'];else __wxAppCode__['pages/authorize/authorize.wxml'] = $gwx( './pages/authorize/authorize.wxml' );
		__wxAppCode__['pages/billlist/billlist.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"账单明细","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/billlist/billlist.wxml'] = [$gwx, './pages/billlist/billlist.wxml'];else __wxAppCode__['pages/billlist/billlist.wxml'] = $gwx( './pages/billlist/billlist.wxml' );
		__wxAppCode__['pages/editmoney/editmoney.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"修改费用","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/editmoney/editmoney.wxml'] = [$gwx, './pages/editmoney/editmoney.wxml'];else __wxAppCode__['pages/editmoney/editmoney.wxml'] = $gwx( './pages/editmoney/editmoney.wxml' );
		__wxAppCode__['pages/empower/empower.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/empower/empower.wxml'] = [$gwx, './pages/empower/empower.wxml'];else __wxAppCode__['pages/empower/empower.wxml'] = $gwx( './pages/empower/empower.wxml' );
		__wxAppCode__['pages/frozen/frozen.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/frozen/frozen.wxml'] = [$gwx, './pages/frozen/frozen.wxml'];else __wxAppCode__['pages/frozen/frozen.wxml'] = $gwx( './pages/frozen/frozen.wxml' );
		__wxAppCode__['pages/guize/guize.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"接单规则","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/guize/guize.wxml'] = [$gwx, './pages/guize/guize.wxml'];else __wxAppCode__['pages/guize/guize.wxml'] = $gwx( './pages/guize/guize.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"快速接单","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/info/info.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"个人中心","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/info/info.wxml'] = [$gwx, './pages/info/info.wxml'];else __wxAppCode__['pages/info/info.wxml'] = $gwx( './pages/info/info.wxml' );
		__wxAppCode__['pages/information/information.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"完善个人信息","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/information/information.wxml'] = [$gwx, './pages/information/information.wxml'];else __wxAppCode__['pages/information/information.wxml'] = $gwx( './pages/information/information.wxml' );
		__wxAppCode__['pages/integral/integral.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"积分","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/integral/integral.wxml'] = [$gwx, './pages/integral/integral.wxml'];else __wxAppCode__['pages/integral/integral.wxml'] = $gwx( './pages/integral/integral.wxml' );
		__wxAppCode__['pages/login/login.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"会员登录","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/login/login.wxml'] = [$gwx, './pages/login/login.wxml'];else __wxAppCode__['pages/login/login.wxml'] = $gwx( './pages/login/login.wxml' );
		__wxAppCode__['pages/order/order.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"我的订单","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/order/order.wxml'] = [$gwx, './pages/order/order.wxml'];else __wxAppCode__['pages/order/order.wxml'] = $gwx( './pages/order/order.wxml' );
		__wxAppCode__['pages/orderIntro/orderIntro.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"订单详情","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/orderIntro/orderIntro.wxml'] = [$gwx, './pages/orderIntro/orderIntro.wxml'];else __wxAppCode__['pages/orderIntro/orderIntro.wxml'] = $gwx( './pages/orderIntro/orderIntro.wxml' );
		__wxAppCode__['pages/orderMoneyIntro/orderMoneyIntro.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"费用详情","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/orderMoneyIntro/orderMoneyIntro.wxml'] = [$gwx, './pages/orderMoneyIntro/orderMoneyIntro.wxml'];else __wxAppCode__['pages/orderMoneyIntro/orderMoneyIntro.wxml'] = $gwx( './pages/orderMoneyIntro/orderMoneyIntro.wxml' );
		__wxAppCode__['pages/orderUpload/orderUpload.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"上传箱封号","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/orderUpload/orderUpload.wxml'] = [$gwx, './pages/orderUpload/orderUpload.wxml'];else __wxAppCode__['pages/orderUpload/orderUpload.wxml'] = $gwx( './pages/orderUpload/orderUpload.wxml' );
		__wxAppCode__['pages/orderUploadzxd/orderUploadzxd.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"预录","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/orderUploadzxd/orderUploadzxd.wxml'] = [$gwx, './pages/orderUploadzxd/orderUploadzxd.wxml'];else __wxAppCode__['pages/orderUploadzxd/orderUploadzxd.wxml'] = $gwx( './pages/orderUploadzxd/orderUploadzxd.wxml' );
		__wxAppCode__['pages/passwd/passwd.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"找回密码","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/passwd/passwd.wxml'] = [$gwx, './pages/passwd/passwd.wxml'];else __wxAppCode__['pages/passwd/passwd.wxml'] = $gwx( './pages/passwd/passwd.wxml' );
		__wxAppCode__['pages/question/question.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"常见问题","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/question/question.wxml'] = [$gwx, './pages/question/question.wxml'];else __wxAppCode__['pages/question/question.wxml'] = $gwx( './pages/question/question.wxml' );
		__wxAppCode__['pages/signin/signin.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"会员注册","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/signin/signin.wxml'] = [$gwx, './pages/signin/signin.wxml'];else __wxAppCode__['pages/signin/signin.wxml'] = $gwx( './pages/signin/signin.wxml' );
		__wxAppCode__['pages/withdraw/withdraw.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"提现","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/withdraw/withdraw.wxml'] = [$gwx, './pages/withdraw/withdraw.wxml'];else __wxAppCode__['pages/withdraw/withdraw.wxml'] = $gwx( './pages/withdraw/withdraw.wxml' );
		__wxAppCode__['pages/withlist/withlist.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"提现明细","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/withlist/withlist.wxml'] = [$gwx, './pages/withlist/withlist.wxml'];else __wxAppCode__['pages/withlist/withlist.wxml'] = $gwx( './pages/withlist/withlist.wxml' );
		__wxAppCode__['pages/xiaopiao/xiaopiao.json'] = {"navigationBarTitleText":"预录小票","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/xiaopiao/xiaopiao.wxml'] = [$gwx, './pages/xiaopiao/xiaopiao.wxml'];else __wxAppCode__['pages/xiaopiao/xiaopiao.wxml'] = $gwx( './pages/xiaopiao/xiaopiao.wxml' );
		__wxAppCode__['pages/yulu/yulu.json'] = {"enablePullDownRefresh":true,"navigationBarTitleText":"免费预录","navigationBarBackgroundColor":"#3abbcb","navigationBarTextStyle":"white","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/yulu/yulu.wxml'] = [$gwx, './pages/yulu/yulu.wxml'];else __wxAppCode__['pages/yulu/yulu.wxml'] = $gwx( './pages/yulu/yulu.wxml' );
	
	define("utils/WxValidate.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),i=function(){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t(this,i),Object.assign(this,{data:{},rules:e,messages:n}),this.__init()}return n(i,[{key:"__init",value:function(){this.__initMethods(),this.__initDefaults(),this.__initData()}},{key:"__initData",value:function(){this.form={},this.errorList=[]}},{key:"__initDefaults",value:function(){this.defaults={messages:{required:"这是必填字段。",email:"请输入有效的电子邮件地址。",tel:"请输入11位的手机号码。",url:"请输入有效的网址。",date:"请输入有效的日期。",dateISO:"请输入有效的日期（ISO），例如：2009-06-23，1998/01/22。",number:"请输入有效的数字。",digits:"只能输入数字。",idcard:"请输入18位的有效身份证。",equalTo:this.formatTpl("输入值必须和 {0} 相同。"),contains:this.formatTpl("输入值必须包含 {0}。"),minlength:this.formatTpl("最少要输入 {0} 个字符。"),maxlength:this.formatTpl("最多可以输入 {0} 个字符。"),rangelength:this.formatTpl("请输入长度在 {0} 到 {1} 之间的字符。"),min:this.formatTpl("请输入不小于 {0} 的数值。"),max:this.formatTpl("请输入不大于 {0} 的数值。"),range:this.formatTpl("请输入范围在 {0} 到 {1} 之间的数值。")}}}},{key:"__initMethods",value:function(){var t=this;t.methods={required:function(e,n){if(!t.depend(n))return"dependency-mismatch";if("number"==typeof e)e=e.toString();else if("boolean"==typeof e)return!0;return e.length>0},email:function(e){return t.optional(e)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)},tel:function(e){return t.optional(e)||/^1[34578]\d{9}$/.test(e)},url:function(e){return t.optional(e)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)},date:function(e){return t.optional(e)||!/Invalid|NaN/.test(new Date(e).toString())},dateISO:function(e){return t.optional(e)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)},number:function(e){return t.optional(e)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)},digits:function(e){return t.optional(e)||/^\d+$/.test(e)},idcard:function(e){return t.optional(e)||/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e)},equalTo:function(e,n){return t.optional(e)||e===t.data[n]},contains:function(e,n){return t.optional(e)||e.indexOf(n)>=0},minlength:function(e,n){return t.optional(e)||e.length>=n},maxlength:function(e,n){return t.optional(e)||e.length<=n},rangelength:function(e,n){return t.optional(e)||e.length>=n[0]&&e.length<=n[1]},min:function(e,n){return t.optional(e)||e>=n},max:function(e,n){return t.optional(e)||e<=n},range:function(e,n){return t.optional(e)||e>=n[0]&&e<=n[1]}}}},{key:"addMethod",value:function(t,e,n){this.methods[t]=e,this.defaults.messages[t]=void 0!==n?n:this.defaults.messages[t]}},{key:"isValidMethod",value:function(t){var e=[];for(var n in this.methods)n&&"function"==typeof this.methods[n]&&e.push(n);return-1!==e.indexOf(t)}},{key:"formatTpl",value:function(t,e){var n=this;return 1===arguments.length?function(){var e=Array.from(arguments);return e.unshift(t),n.formatTpl.apply(this,e)}:void 0===e?t:(arguments.length>2&&e.constructor!==Array&&(e=Array.from(arguments).slice(1)),e.constructor!==Array&&(e=[e]),e.forEach(function(e,n){t=t.replace(new RegExp("\\{"+n+"\\}","g"),function(){return e})}),t)}},{key:"depend",value:function(t){switch(void 0===t?"undefined":e(t)){case"boolean":t=t;break;case"string":t=!!t.length;break;case"function":t=t();default:t=!0}return t}},{key:"optional",value:function(t){return!this.methods.required(t)&&"dependency-mismatch"}},{key:"customMessage",value:function(t,n){var i=this.messages[t],r="object"===(void 0===i?"undefined":e(i));if(i&&r)return i[n.method]}},{key:"defaultMessage",value:function(t,n){var i=this.customMessage(t,n)||this.defaults.messages[n.method],r=void 0===i?"undefined":e(i);return"undefined"===r?i="Warning: No message defined for "+n.method+".":"function"===r&&(i=i.call(this,n.parameters)),i}},{key:"formatTplAndAdd",value:function(t,e,n){var i=this.defaultMessage(t,e);this.errorList.push({param:t,msg:i,value:n})}},{key:"checkParam",value:function(t,e,n){this.data=n;var i=null!==n[t]&&void 0!==n[t]?n[t]:"";for(var r in e)if(this.isValidMethod(r)){var a={method:r,parameters:e[r]},o=this.methods[r](i,a.parameters);if("dependency-mismatch"===o)continue;if(this.setValue(t,r,o,i),!o){this.formatTplAndAdd(t,a,i);break}}}},{key:"setView",value:function(t){this.form[t]={$name:t,$valid:!0,$invalid:!1,$error:{},$success:{},$viewValue:""}}},{key:"setValue",value:function(t,e,n,i){var r=this.form[t];r.$valid=n,r.$invalid=!n,r.$error[e]=!n,r.$success[e]=n,r.$viewValue=i}},{key:"checkForm",value:function(t){this.__initData();for(var e in this.rules)this.setView(e),this.checkParam(e,this.rules[e],t);return this.valid()}},{key:"valid",value:function(){return 0===this.size()}},{key:"size",value:function(){return this.errorList.length}},{key:"validationErrors",value:function(){return this.errorList}}]),i}();exports.default=i; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return(t=t.toString())[1]?t:"0"+t};module.exports={formatTime:function(e){var n=e.getFullYear(),r=e.getMonth()+1,o=e.getDate(),u=e.getHours(),i=e.getMinutes(),a=e.getSeconds();return[n,r,o].map(t).join("/")+" "+[u,i,a].map(t).join(":")}}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";App({data:{mobile:null,lost:"https://api.jiyun58.com"},globalData:{appid:"wx0b252a0ae282167b",secret:"9dcef412e99e393dd736e26df3e83f64"},isOpenId:function(){wx.getStorageSync("openid")?(console.log(wx.getStorageSync("openid")),console.log("有值")):console.log("没有值")},onLoad:function(){},onLaunch:function(){},sq:function(){var e=this;wx.getSetting({success:function(t){t.authSetting["scope.userInfo"]?wx.request({url:e.data.lost+"/index/queryUsreInfo",method:"GET",dataType:"html",data:{openid:wx.getStorageSync("openid"),avatarUrl:wx.getStorageSync("userInfo").avatarUrl},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=JSON.parse(e.data);t.result.at_code?"1"==t.result.status?wx.switchTab({url:"/pages/index/index"}):wx.navigateTo({url:"/pages/frozen/frozen"}):wx.navigateTo({url:"/pages/activation/activation"})}}):wx.navigateTo({url:"/pages/empower/empower"})}})}}); 
 			}); 	require("app.js");
 		__wxRoute = 'pages/info/info';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/info/info.js';	define("pages/info/info.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=getApp();Page({data:{result:null,head:"https://api.jiyun58.com/views/images/peo.png"},onLoad:function(a){t.isOpenId(),e=this,wx.request({url:t.data.lost+"/index/queryUsreInfo",method:"GET",dataType:"html",data:{openid:wx.getStorageSync("openid"),avatarUrl:wx.getStorageSync("userInfo").avatarUrl},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data);1==a.msg&&(a.result.at_code?"1"==a.result.status?e.setData({result:a.result,head:wx.getStorageSync("userInfo").avatarUrl}):wx.navigateTo({url:"../frozen/frozen"}):wx.navigateTo({url:"../activation/activation"}))}})},onPullDownRefresh:function(){t.isOpenId(),e=this,wx.request({url:t.data.lost+"/index/queryUsreInfo",method:"GET",dataType:"html",data:{openid:wx.getStorageSync("openid"),avatarUrl:wx.getStorageSync("userInfo").avatarUrl},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data);1==a.msg&&e.setData({result:a.result,head:wx.getStorageSync("userInfo").avatarUrl})}})},onShow:function(){this.onLoad()},onBillDetail:function(e){wx.navigateTo({url:"../billlist/billlist"})},bindGetUserInfo:function(e){e.detail.userInfo?this.queryUsreInfo():wx.showModal({title:"警告",content:"您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!",showCancel:!1,confirmText:"返回授权",success:function(e){e.confirm&&console.log("用户点击了“返回授权”")}})},queryUsreInfo:function(){wx.getUserInfo({success:function(e){t.globalData;wx.setStorageSync("userInfo",e.userInfo);var a=e.userInfo.avatarUrl;wx.login({success:function(e){wx.request({url:t.data.lost+"/index/queryUsreInfo2",method:"GET",dataType:"html",data:{code:e.code,avatarUrl:a},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=JSON.parse(e.data);wx.setStorageSync("openid",t.openid),t.result.at_code?"1"==t.result.status?wx.switchTab({url:"../index/index"}):wx.navigateTo({url:"../frozen/frozen"}):wx.navigateTo({url:"../activation/activation"})}})}})}})}}); 
 			}); 	require("pages/info/info.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,a=[],r=new Date,i=(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours()),d=r.getMinutes();i<10&&(i="0"+i),d<10&&(d="0"+d);var t=i+":"+d,g=getApp();Page({data:{array:["全部港区","外一期","外二期","外四期","外五期","洋山港一期","洋山港三期","洋山港四期","宜东","张华浜"],index:0,time:t,data:"做箱日期",multiIndex:[0,0],jy_user_id:"",list_data:"",multiArray:[["全部","上海市","江苏省","浙江省","安徽省"],[""]],objectMultiArray:[{regid:"1",parid:"0",regname:"全部",regtype:"1",ageid:"0"},{regid:"2",parid:"0",regname:"上海市",regtype:"1",ageid:"0"},{regid:"3",parid:"0",regname:"江苏省",regtype:"1",ageid:"0"},{regid:"4",parid:"0",regname:"浙江省",regtype:"1",ageid:"0"},{regid:"5",parid:"0",regname:"安徽省",regtype:"1",ageid:"0"},{regid:"36",parid:"2",regname:"上海市区",regtype:"2",ageid:"0"},{regid:"37",parid:"2",regname:"上海郊区",regtype:"2",ageid:"0"},{regid:"38",parid:"3",regname:"苏州市",regtype:"2",ageid:"0"},{regid:"39",parid:"3",regname:"无锡市",regtype:"2",ageid:"0"},{regid:"40",parid:"3",regname:"常州市",regtype:"2",ageid:"0"},{regid:"41",parid:"3",regname:"南通市",regtype:"2",ageid:"0"},{regid:"42",parid:"3",regname:"扬州市",regtype:"2",ageid:"0"},{regid:"43",parid:"3",regname:"南京市",regtype:"2",ageid:"0"},{regid:"44",parid:"3",regname:"镇江市",regtype:"2",ageid:"0"},{regid:"45",parid:"3",regname:"盐城市",regtype:"2",ageid:"0"},{regid:"46",parid:"3",regname:"泰州市",regtype:"2",ageid:"0"},{regid:"47",parid:"3",regname:"徐州市",regtype:"2",ageid:"0"},{regid:"48",parid:"3",regname:"宿迁市",regtype:"2",ageid:"0"},{regid:"49",parid:"3",regname:"淮安市",regtype:"2",ageid:"0"},{regid:"50",parid:"3",regname:"连云港市",regtype:"2",ageid:"0"},{regid:"51",parid:"4",regname:"杭州市",regtype:"2",ageid:"0"},{regid:"52",parid:"4",regname:"嘉兴市",regtype:"2",ageid:"0"},{regid:"53",parid:"4",regname:"绍兴市",regtype:"2",ageid:"0"},{regid:"54",parid:"4",regname:"金华市",regtype:"2",ageid:"0"},{regid:"55",parid:"4",regname:"湖州市",regtype:"2",ageid:"0"},{regid:"56",parid:"4",regname:"台州市",regtype:"2",ageid:"0"},{regid:"57",parid:"4",regname:"丽水市",regtype:"2",ageid:"0"},{regid:"58",parid:"4",regname:"衢州市",regtype:"2",ageid:"0"},{regid:"59",parid:"4",regname:"温州市",regtype:"2",ageid:"0"},{regid:"60",parid:"4",regname:"舟山市",regtype:"2",ageid:"0"},{regid:"61",parid:"4",regname:"宁波市",regtype:"2",ageid:"0"},{regid:"62",parid:"5",regname:"合肥市",regtype:"2",ageid:"0"},{regid:"63",parid:"5",regname:"池州市",regtype:"2",ageid:"0"},{regid:"64",parid:"5",regname:"亳州市",regtype:"2",ageid:"0"},{regid:"65",parid:"5",regname:"六安市",regtype:"2",ageid:"0"},{regid:"66",parid:"5",regname:"宿州市",regtype:"2",ageid:"0"},{regid:"67",parid:"5",regname:"阜阳市",regtype:"2",ageid:"0"},{regid:"68",parid:"5",regname:"滁州市",regtype:"2",ageid:"0"},{regid:"69",parid:"5",regname:"黄山市",regtype:"2",ageid:"0"},{regid:"70",parid:"5",regname:"安庆市",regtype:"2",ageid:"0"},{regid:"71",parid:"5",regname:"铜陵市",regtype:"2",ageid:"0"},{regid:"72",parid:"5",regname:"淮北市",regtype:"2",ageid:"0"},{regid:"73",parid:"5",regname:"马鞍山市",regtype:"2",ageid:"0"},{regid:"74",parid:"5",regname:"淮南市",regtype:"2",ageid:"0"},{regid:"75",parid:"5",regname:"芜湖市",regtype:"2",ageid:"0"},{regid:"76",parid:"5",regname:"蚌埠市",regtype:"2",ageid:"0"},{regid:"77",parid:"5",regname:"宣城市",regtype:"2",ageid:"0"}]},onLoad:function(a){e=this,g.isOpenId(),wx.request({url:g.data.lost+"/index/indexlist",method:"POST",dataType:"html",data:{openid:wx.getStorageSync("openid")},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var r=JSON.parse(a.data);e.setData({list_data:r.result})}})},onPullDownRefresh:function(){wx.showNavigationBarLoading(),wx.request({url:g.data.lost+"/index/indexlist",method:"POST",dataType:"html",data:{openid:wx.getStorageSync("openid")},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var r=JSON.parse(a.data);e.setData({list_data:r.result}),wx.hideNavigationBarLoading(),wx.stopPullDownRefresh()}})},onShow:function(){this.onLoad()},resRst:function(a){for(var r=new Array,i=0,d=0;d<e.data.objectMultiArray.length;d++)e.data.objectMultiArray[d].parid==e.data.objectMultiArray[e.data.multiIndex[0]].regid&&(r[i]=e.data.objectMultiArray[d].regname,i++);var t=e.data.objectMultiArray[e.data.multiIndex[0]].regname,n=r[e.data.multiIndex[1]];wx.request({url:g.data.lost+"/index/indexlist",method:"POST",dataType:"html",data:{openid:wx.getStorageSync("openid"),port:e.data.array[e.data.index],do_box_time:e.data.data,prov:t,city:n},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var r=JSON.parse(a.data);e.setData({list_data:r.result})}})},jiedan:function(a){e.data.list_data,a.currentTarget.dataset.index;wx.request({url:g.data.lost+"/index/orderTaking",method:"POST",dataType:"html",data:{openid:wx.getStorageSync("openid"),id:a.currentTarget.id},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){"接单成功"==e.data?(wx.showToast({title:"接单成功",icon:"success",duration:2e3}),setTimeout(function(){wx.switchTab({url:"../order/order"})},2e3)):wx.showToast({title:e.data,icon:"none",duration:2e3})}})},bindPickerChang:function(e){this.setData({index:e.detail.value})},bindPickerDate:function(e){this.setData({data:e.detail.value})},bindMultiPickerChange:function(a){e.setData({"multiIndex[0]":a.detail.value[0],"multiIndex[1]":a.detail.value[1]})},bindMultiPickerColumnChange:function(r){switch(r.detail.column){case 0:a=[];for(var i=0;i<e.data.objectMultiArray.length;i++)e.data.objectMultiArray[i].parid==e.data.objectMultiArray[r.detail.value].regid&&a.push(e.data.objectMultiArray[i].regname);e.setData({"multiArray[1]":a,"multiIndex[0]":r.detail.value,"multiIndex[1]":0})}}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/editmoney/editmoney';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/editmoney/editmoney.js';	define("pages/editmoney/editmoney.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=getApp();Page({data:{tempFilePaths:[],objectArray:[],objectIndex:0,moneyText:"",minfo:"",mid:"",orderid:"",flg:0},onLoad:function(a){(e=this).setData({mid:a.id}),wx.request({url:t.data.lost+"/index/editMoney",method:"GET",dataType:"html",data:{id:e.data.mid,openid:wx.getStorageSync("openid")},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data),o=new Array;o[0]=a.minfo.src,e.setData({tempFilePaths:o}),e.setData({orderid:a.orderid}),e.setData({minfo:a.minfo}),e.setData({objectArray:a.result});for(var i in a.result)a.result[i].id==a.minfo.fn_id&&e.setData({objectIndex:i})}})},upload:function(){wx.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){wx.showToast({title:"正在上传...",icon:"loading",mask:!0,duration:1e3});var a=t.tempFilePaths;e.setData({tempFilePaths:a}),e.setData({flg:1})}})},formSubmit:function(a){var o=e.data.objectArray[e.data.objectIndex].id,i=a.detail.value.money,n=e.data.tempFilePaths[0],d=a.detail.value.remark;return 1==e.data.flg?wx.uploadFile({url:t.data.lost+"/index/editMoneyForm",filePath:n,name:"file",formData:{item_id:o,ap_amount_car:i,remark:d,id:e.data.mid,flg:e.data.flg,openid:wx.getStorageSync("openid")},success:function(t){wx.showToast({title:"提交成功",icon:"success",duration:2e3}),setTimeout(function(){wx.navigateTo({url:"../orderMoneyIntro/orderMoneyIntro?id="+e.data.orderid})},2e3)}}):wx.request({url:t.data.lost+"/index/editMoneyForm",method:"POST",dataType:"html",data:{item_id:o,ap_amount_car:i,remark:d,flg:e.data.flg,id:e.data.mid,openid:wx.getStorageSync("openid")},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){wx.showToast({title:"提交成功",icon:"success",duration:2e3}),setTimeout(function(){wx.navigateTo({url:"../orderMoneyIntro/orderMoneyIntro?id="+e.data.orderid})},2e3)}}),!1},listenerButtonPreviewImage:function(t){var a=t.target.dataset.index;wx.previewImage({current:e.data.tempFilePaths[a],urls:e.data.tempFilePaths,success:function(e){},fail:function(){}})},bindPickerChange:function(t){e.setData({objectIndex:t.detail.value})}}); 
 			}); 	require("pages/editmoney/editmoney.js");
 		__wxRoute = 'pages/order/order';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/order/order.js';	define("pages/order/order.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var a,e,d=getApp();Page((a={data:{showModal:!1,list_data_0:"",list_data_1:"",openid:"",list_data_2:"",tabArr:[{curHdIndex:0,curBdIndex:0}]},tabFun:function(t){var a=t.target.dataset.id,e={};e.curHdIndex=a,e.curBdIndex=a,this.setData({tabArr:e})},onLoad:function(t){e=this,d.isOpenId();var a={};a.curHdIndex=1,a.curBdIndex=1,this.setData({tabArr:a,openid:wx.getStorageSync("openid")}),wx.request({url:d.data.lost+"/index/orderList2",method:"GET",dataType:"html",data:{openid:e.data.openid,v:1},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data);e.setData({list_data_1:a})}}),wx.request({url:d.data.lost+"/index/orderList2",method:"GET",dataType:"html",data:{openid:e.data.openid,v:2},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data);e.setData({list_data_2:a})}}),wx.request({url:d.data.lost+"/index/orderList2",method:"GET",dataType:"html",data:{openid:e.data.openid,v:0},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data);e.setData({list_data_0:a})}})},onShow:function(){this.onLoad()},onPullDownRefresh:function(){wx.showNavigationBarLoading();var t={};t.curHdIndex=1,t.curBdIndex=1,this.setData({tabArr:t,openid:wx.getStorageSync("openid")}),wx.request({url:d.data.lost+"/index/orderList2",method:"GET",dataType:"html",data:{openid:e.data.openid,v:1},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data);e.setData({list_data_1:a})}}),wx.request({url:d.data.lost+"/index/orderList2",method:"GET",dataType:"html",data:{openid:e.data.openid,v:2},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data);e.setData({list_data_2:a})}}),wx.request({url:d.data.lost+"/index/orderList2",method:"GET",dataType:"html",data:{openid:e.data.openid,v:0},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data);e.setData({list_data_0:a}),wx.hideNavigationBarLoading(),wx.stopPullDownRefresh()}})}},t(a,"onShow",function(){this.onLoad()}),t(a,"actionSheetTap",function(t){var a=t.currentTarget.id;wx.showActionSheet({itemList:["订单详情","费用详情"],success:function(t){0==t.tapIndex?wx.navigateTo({url:"../orderIntro/orderIntro?id="+a}):1==t.tapIndex&&wx.navigateTo({url:"../orderMoneyIntro/orderMoneyIntro?id="+a})}})}),a)); 
 			}); 	require("pages/order/order.js");
 		__wxRoute = 'pages/orderIntro/orderIntro';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/orderIntro/orderIntro.js';	define("pages/orderIntro/orderIntro.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,a=getApp();Page({data:{array:["A请选择寄单地址","B原创--凌海路13817461987","C原创--张杨北路15221730828","D原创--华东路15902138014","E原创--外四/越海路17721333905","F原创--芦潮港15821111139","G原创--港城路15000021161","H原创--五洲大道58378088","I原创--浦西立昌18916639060","J原创--洋山码头13301798150","K原创--芦潮港危库17721213761","L办公室","M加油站"],objectArray:[{id:0,name:"A请选择寄单地址"},{id:1,name:"B原创--凌海路13817461987"},{id:2,name:"C原创--张杨北路15221730828"},{id:3,name:"D原创--华东路15902138014"},{id:4,name:"E原创--外四/越海路17721333905"},{id:5,name:"F原创--芦潮港15821111139"},{id:6,name:"G原创--港城路15000021161"},{id:7,name:"H原创--五洲大道58378088"},{id:8,name:"I原创--浦西立昌18916639060"},{id:9,name:"J原创--洋山码头13301798150"},{id:10,name:"K原创--芦潮港危库17721213761"},{id:11,name:"L办公室"},{id:12,name:"M加油站"}],index:0,orderid:"",result:"",btn:0},onLoad:function(t){(e=this).setData({orderid:t.id}),wx.request({url:a.data.lost+"/index/orderIntro2",method:"GET",dataType:"html",data:{id:e.data.orderid,openid:wx.getStorageSync("openid")},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var t=JSON.parse(a.data);e.setData({result:t.result}),""==t.result.gongchang||"0"==t.result.gongchang?e.setData({btn:1}):""==t.result.lichang||"0"==t.result.lichang?e.setData({btn:2}):""==t.result.chayan||"0"==t.result.chayan?e.setData({btn:3}):""!=t.result.jingang&&"0"!=t.result.jingang||e.setData({btn:4});for(var d in t.sendaddr)t.sendaddr[d]==t.result.sendAddr&&e.setData({index:d})}})},bindPickerChange:function(t){e=this;var d=t.detail.value;e.setData({index:t.detail.value}),wx.request({url:a.data.lost+"/index/editAddr",method:"GET",dataType:"html",data:{id:e.data.orderid,openid:wx.getStorageSync("openid"),sendAddr:d},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.showToast({title:e.data,icon:"none",duration:2e3})}})},onPiao:function(a){wx.navigateTo({url:"../xiaopiao/xiaopiao?id="+e.data.orderid})},save:function(t){wx.showModal({title:"",content:"您确定提交吗",success:function(d){d.confirm&&wx.request({url:a.data.lost+"/index/orderSave",method:"POST",dataType:"html",data:{id:e.data.orderid,type:t.currentTarget.id},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){"1"==a.data?wx.navigateTo({url:"../orderIntro/orderIntro?id="+e.data.orderid}):wx.showToast({title:"服务器繁忙",icon:"none",duration:2e3})}})}})},onPreRecordedReceipt:function(a){wx.navigateTo({url:"../orderUploadzxd/orderUploadzxd?id="+e.data.orderid})},onSealNumber:function(a){wx.navigateTo({url:"../orderUpload/orderUpload?id="+e.data.orderid})}}); 
 			}); 	require("pages/orderIntro/orderIntro.js");
 		__wxRoute = 'pages/billlist/billlist';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/billlist/billlist.js';	define("pages/billlist/billlist.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,e=getApp();Page({data:{jy_user_id:0,list:""},onLoad:function(a){t=this,wx.request({url:e.data.lost+"/index/bill2",method:"GET",dataType:"html",data:{openid:wx.getStorageSync("openid")},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var a=JSON.parse(e.data);t.setData({list:a})}})},onCostDetail:function(t){var e=t.currentTarget.id;wx.navigateTo({url:"../orderMoneyIntro/orderMoneyIntro?id="+e})}}); 
 			}); 	require("pages/billlist/billlist.js");
 		__wxRoute = 'pages/empower/empower';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/empower/empower.js';	define("pages/empower/empower.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp();Page({data:{canIUse:wx.canIUse("button.open-type.getUserInfo")},globalData:{appid:"wx0b252a0ae282167b",secret:"9dcef412e99e393dd736e26df3e83f64"},onLoad:function(){},bindGetUserInfo:function(e){e.detail.userInfo?this.queryUsreInfo():wx.showModal({title:"警告",content:"您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!",showCancel:!1,confirmText:"返回授权",success:function(e){e.confirm&&console.log("用户点击了“返回授权”")}})},queryUsreInfo:function(){wx.getUserInfo({success:function(t){e.globalData;wx.setStorageSync("userInfo",t.userInfo);var n=t.userInfo.avatarUrl;wx.login({success:function(t){wx.request({url:e.data.lost+"/index/queryUsreInfo2",method:"GET",dataType:"html",data:{code:t.code,avatarUrl:n},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=JSON.parse(e.data);wx.setStorageSync("openid",t.openid),""!=t.result.at_code?"1"==t.result.status?wx.switchTab({url:"../index/index"}):wx.navigateTo({url:"../frozen/frozen"}):wx.navigateTo({url:"../activation/activation"})}})}})}})}}); 
 			}); 	require("pages/empower/empower.js");
 		__wxRoute = 'pages/activation/activation';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/activation/activation.js';	define("pages/activation/activation.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp();Page({data:{canIUse:wx.canIUse("button.open-type.getUserInfo")},onLoad:function(){},bindAtCode:function(t){t.detail.value.at_code?wx.request({url:e.data.lost+"/index/isActive",method:"GET",dataType:"html",data:{openid:wx.getStorageSync("openid"),at_code:t.detail.value.at_code},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=JSON.parse(e.data);"激活成功"==t.msg?wx.switchTab({url:"../index/index"}):wx.showToast({title:t.msg,icon:"none",duration:2e3})}}):wx.showToast({title:"激活码不能为空",icon:"none",duration:2e3})}}); 
 			}); 	require("pages/activation/activation.js");
 		__wxRoute = 'pages/authorize/authorize';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/authorize/authorize.js';	define("pages/authorize/authorize.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp();Page({data:{canIUse:wx.canIUse("button.open-type.getUserInfo"),isHide:!1,openid:null,userInfo:null,isCode:!1},globalData:{appid:"wx0b252a0ae282167b",secret:"9dcef412e99e393dd736e26df3e83f64"},onLoad:function(){var e=this;wx.getSetting({success:function(t){t.authSetting["scope.userInfo"]?(e.queryUsreInfo(),e.setData({isHide:!1})):e.setData({isHide:!0})}})},bindGetUserInfo:function(e){if(e.detail.userInfo){var t=this;t.setData({isHide:!1}),t.queryUsreInfo()}else wx.showModal({title:"警告",content:"您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!",showCancel:!1,confirmText:"返回授权",success:function(e){e.confirm&&console.log("用户点击了“返回授权”")}})},bindAtCode:function(t){t.detail.value.at_code?wx.request({url:e.data.lost+"/index/isActive",method:"GET",dataType:"html",data:{openid:wx.getStorageSync("openid"),at_code:t.detail.value.at_code},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=JSON.parse(e.data);"激活成功"==t.msg?wx.switchTab({url:"../index/index"}):wx.showToast({title:t.msg,icon:"none",duration:2e3})}}):wx.showToast({title:"激活码不能为空",icon:"none",duration:2e3})},queryUsreInfo:function(){var t=this;wx.getUserInfo({success:function(a){var n=t.globalData;t.data.userInfo=a.userInfo,wx.login({success:function(a){var o="https://api.weixin.qq.com/sns/jscode2session?appid="+n.appid+"&secret="+n.secret+"&js_code="+a.code+"&grant_type=authorization_code";wx.request({url:o,success:function(a){wx.setStorageSync("openid",a.data.openid),wx.request({url:e.data.lost+"/index/queryUsreInfo",method:"GET",dataType:"html",data:{openid:wx.getStorageSync("openid"),avatarUrl:t.data.userInfo.avatarUrl},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var a=JSON.parse(e.data);""!=a.result.at_code?(t.data.isCode=!0,"1"==a.result.status?wx.switchTab({url:"../index/index"}):wx.navigateTo({url:"../frozen/frozen"})):t.data.isCode=!1}})}})}})}})}}); 
 			}); 	require("pages/authorize/authorize.js");
 		__wxRoute = 'pages/frozen/frozen';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/frozen/frozen.js';	define("pages/frozen/frozen.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/frozen/frozen.js");
 		__wxRoute = 'pages/yulu/yulu';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/yulu/yulu.js';	define("pages/yulu/yulu.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=getApp();Page({data:{rst:""},onLoad:function(t){e=this;var a=wx.getStorageSync("jy_user_id");e.setData({jy_user_id:a})},chooseImageTap:function(){var e=this;wx.showActionSheet({itemList:["从相册中选择","拍照"],itemColor:"#666666",success:function(t){t.cancel||(0==t.tapIndex?e.chooseWxImage("album"):1==t.tapIndex&&e.chooseWxImage("camera"))}})},chooseWxImage:function(e){var t=this;wx.chooseImage({sizeType:["original","compressed"],sourceType:[e],success:function(e){t.setData({logo:e.tempFilePaths[0]})}})},onReady:function(){wx.request({url:t.data.lost+"/index/yuluList",method:"POST",dataType:"html",data:{jy_user_id:e.data.jy_user_id},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data);e.setData({rst:a})}})},onPullDownRefresh:function(){wx.showNavigationBarLoading(),wx.request({url:t.data.lost+"/index/yuluList",method:"POST",dataType:"html",data:{jy_user_id:e.data.jy_user_id},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data);e.setData({rst:a}),wx.hideNavigationBarLoading(),wx.stopPullDownRefresh()}})},send:function(a){e.data.logo?wx.uploadFile({url:t.data.lost+"/index/sendYulu",filePath:e.data.logo,name:"file",formData:{jy_user_id:e.data.jy_user_id},success:function(t){"预录成功"==t.data?(wx.showToast({title:"预录成功",icon:"success",duration:2e3}),setTimeout(function(){e.setData({logo:""}),e.onReady()},2e3)):wx.showToast({title:t.data,icon:"none",duration:2e3})}}):wx.showToast({title:"请上传装箱单",icon:"none",duration:2e3})}}); 
 			}); 	require("pages/yulu/yulu.js");
 		__wxRoute = 'pages/xiaopiao/xiaopiao';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/xiaopiao/xiaopiao.js';	define("pages/xiaopiao/xiaopiao.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a,t=getApp();Page({data:{orderid:""},onLoad:function(e){(a=this).setData({orderid:e.id}),wx.request({url:t.data.lost+"/index/piao",method:"GET",dataType:"html",data:{orderid:a.data.orderid},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var e=JSON.parse(t.data);a.setData({rst:e})}})}}); 
 			}); 	require("pages/xiaopiao/xiaopiao.js");
 		__wxRoute = 'pages/orderUploadzxd/orderUploadzxd';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/orderUploadzxd/orderUploadzxd.js';	define("pages/orderUploadzxd/orderUploadzxd.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,a,e,r){this.arrbillNo=t,this.arrPackages=a,this.arrGW=e,this.arrMEAS=r}function a(){this.details=[]}var e,r=getApp();Page({data:{orderid:"",result:"",rst:"",buttonClicked:"",count:"",info:{}},init:function(){this.setData({info:new a})},onLoad:function(a){this.init(),(e=this).setData({orderid:a.id}),wx.request({url:r.data.lost+"/index/orderUploadzxd2",method:"GET",dataType:"html",data:{id:e.data.orderid,openid:wx.getStorageSync("openid")},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var r=JSON.parse(a.data);if("0"==r.result)wx.showToast({title:"操作异常",icon:"none",duration:2e3}),setTimeout(function(){wx.navigateTo({url:"../orderIntro/orderIntro?id="+e.data.orderid})},1800);else if(e.setData({result:r.result,count:r.count,rst:r.rst}),"0"==r.count){var i=e.data.info;i.details.push(new t(r.result.bl_num,r.result.pcs,r.result.kgs,r.result.volume)),e.setData({info:i})}else{var s=e.data.info;s.details.push(new t(r.result.bl_num,r.result.pcs,r.result.kgs,r.result.volume));for(var o=0;o<r.count;o++)s.details.push(new t(r.rst[o].bl_num,r.rst[o].pcs,r.rst[o].kgs,r.rst[o].volume));e.setData({info:s})}}})},formSubmit:function(t){if(e.setData({buttonClicked:!0}),e.data.info.details.length>0){for(var a="",i="",s="",o="",n=0;n<e.data.info.details.length;n++)a+=e.data.info.details[n].arrbillNo+"|",i+=e.data.info.details[n].arrPackages+"|",s+=e.data.info.details[n].arrGW+"|",o+=e.data.info.details[n].arrMEAS+"|";t.detail.value.arrbillNo=a.substr(0,a.length-1),t.detail.value.arrPackages=i.substr(0,i.length-1),t.detail.value.arrGW=s.substr(0,s.length-1),t.detail.value.arrMEAS=o.substr(0,o.length-1)}else t.detail.value.arrbillNo="",t.detail.value.arrPackages="",t.detail.value.arrGW="",t.detail.value.arrMEAS="";t.detail.value.orderid=e.data.orderid,t.detail.value.openid=wx.getStorageSync("openid"),wx.request({url:r.data.lost+"/index/orderUploadzxdSend2",method:"POST",dataType:"html",data:t.detail.value,header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){"预录成功"==a.data?wx.request({url:r.data.lost+"/index/orderUploadzxdForm2",method:"POST",dataType:"html",data:t.detail.value,header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){"预录成功"==t.data?(wx.showToast({title:"预录成功",icon:"success",duration:2e3}),setTimeout(function(){wx.navigateTo({url:"../orderIntro/orderIntro?id="+e.data.orderid})},2e3)):(e.setData({buttonClicked:""}),wx.showToast({title:t.data,icon:"none",duration:2e3}))}}):(e.setData({buttonClicked:""}),wx.showToast({title:a.data,icon:"none",duration:2e3}))}})},addItem:function(a){var e=this.data.info;e.details.push(new t),this.setData({info:e})},removeItem:function(t){var a=this.data.info;a.details.pop(),this.setData({info:a})},setArrbillNo:function(t){var a=parseInt(t.currentTarget.id.replace("arrbillNo-","")),e=t.detail.value,r=this.data.info;r.details[a].arrbillNo=e,this.setData({info:r})},setArrPackages:function(t){var a=parseInt(t.currentTarget.id.replace("arrPackages-","")),e=t.detail.value,r=this.data.info;r.details[a].arrPackages=e,this.setData({info:r})},setArrGW:function(t){var a=parseInt(t.currentTarget.id.replace("arrGW-","")),e=t.detail.value,r=this.data.info;r.details[a].arrGW=e,this.setData({info:r})},setArrMEAS:function(t){var a=parseInt(t.currentTarget.id.replace("arrMEAS-","")),e=t.detail.value,r=this.data.info;r.details[a].arrMEAS=e,this.setData({info:r})}}); 
 			}); 	require("pages/orderUploadzxd/orderUploadzxd.js");
 		__wxRoute = 'pages/orderUpload/orderUpload';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/orderUpload/orderUpload.js';	define("pages/orderUpload/orderUpload.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=getApp();Page({data:{tempFilePaths:[],tempFilePaths1:[],orderid:"",result:""},onLoad:function(a){(e=this).setData({orderid:a.id}),wx.request({url:t.data.lost+"/index/orderUpload2",method:"GET",dataType:"html",data:{id:e.data.orderid,openid:wx.getStorageSync("openid")},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data);if("0"==a.result)wx.showToast({title:"操作异常",icon:"none",duration:2e3}),setTimeout(function(){wx.navigateTo({url:"../orderIntro/orderIntro?id="+e.data.orderid})},1800);else{e.setData({result:a.result});var o=new Array;o[0]=a.result.box_image,e.setData({tempFilePaths:o}),o[0]=a.result.seal_image,e.setData({tempFilePaths1:o})}}})},formSubmit:function(a){a.detail.value.id=e.data.orderid,wx.request({url:t.data.lost+"/index/ckno2",method:"GET",dataType:"html",data:{cntrno:a.detail.value.box_num,id:a.detail.value.id},header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){"1"==o.data?wx.request({url:t.data.lost+"/index/orderUploadForm",method:"POST",dataType:"html",data:a.detail.value,header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){"1"==t.data?(wx.showToast({title:"提交成功",icon:"success",duration:2e3}),setTimeout(function(){wx.navigateTo({url:"../orderIntro/orderIntro?id="+e.data.orderid})},1500)):wx.showToast({title:"提交失败",icon:"none",duration:2e3})}}):"2"==o.data?wx.showToast({title:"箱号已被使用，请核对",icon:"none",duration:2e3}):wx.showToast({title:"箱号格式不对",icon:"none",duration:2e3})}})},upload:function(){var e=this;wx.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){wx.showToast({title:"正在上传...",icon:"loading",mask:!0,duration:1e3});var o=a.tempFilePaths;e.setData({tempFilePaths:o}),wx.uploadFile({url:t.data.lost+"/index/orderuploads",filePath:o[0],name:"file",formData:{type:"1",jy_user_id:e.data.jy_user_id,id:e.data.orderid},success:function(e){wx.showToast({title:"上传成功",icon:"success",duration:2e3})}})}})},upload1:function(){var e=this;wx.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){wx.showToast({title:"正在上传...",icon:"loading",mask:!0,duration:1e3});var o=a.tempFilePaths;e.setData({tempFilePaths1:o}),wx.uploadFile({url:t.data.lost+"/index/orderuploads",filePath:o[0],name:"file",formData:{type:"2",jy_user_id:e.data.jy_user_id,id:e.data.orderid},success:function(e){wx.showToast({title:"上传成功",icon:"success",duration:2e3})}})}})},listenerButtonPreviewImage:function(e){var t=e.target.dataset.index,a=this;wx.previewImage({current:a.data.tempFilePaths[t],urls:a.data.tempFilePaths})},listenerButtonPreviewImage1:function(e){var t=e.target.dataset.index,a=this;wx.previewImage({current:a.data.tempFilePaths1[t],urls:a.data.tempFilePaths1})}}); 
 			}); 	require("pages/orderUpload/orderUpload.js");
 		__wxRoute = 'pages/withlist/withlist';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/withlist/withlist.js';	define("pages/withlist/withlist.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,a=getApp();Page({data:{jy_user_id:0,list:""},onLoad:function(e){t=this;var o=wx.getStorageSync("jy_user_id");wx.request({url:a.data.lost+"/index/withlist",method:"GET",dataType:"html",data:{jy_user_id:o},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var e=JSON.parse(a.data);t.setData({list:e})}})},onShow:function(){this.onLoad()},onPullDownRefresh:function(){wx.showNavigationBarLoading();var t=this,e=wx.getStorageSync("jy_user_id");wx.request({url:a.data.lost+"/index/withlist",method:"GET",data:{jy_user_id:e},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var e=JSON.parse(a.data);console.log(e),t.setData({list:e}),wx.hideNavigationBarLoading(),wx.stopPullDownRefresh()}})}}); 
 			}); 	require("pages/withlist/withlist.js");
 		__wxRoute = 'pages/withdraw/withdraw';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/withdraw/withdraw.js';	define("pages/withdraw/withdraw.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,e,a=getApp();Page({data:{currentTab:0,mobile:"",money:"",userinfo:"",allmoney:""},onLoad:function(i){t=this,e=wx.getStorageSync("mobile"),wx.request({url:a.data.lost+"/index/userinfo",method:"GET",dataType:"html",data:{mobile:e},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var a=JSON.parse(e.data);0==a.userinfo.certification?t.setData({certification:"未认证"}):1==a.userinfo.certification?t.setData({certification:"已认证"}):-1==a.userinfo.certification&&t.setData({certification:"待审核"}),t.setData({money:a.money,mobile:a.userinfo.mobile,userinfo:a.userinfo})}})},onPullDownRefresh:function(){wx.showNavigationBarLoading(),wx.request({url:a.data.lost+"/index/userinfo",method:"GET",dataType:"html",data:{mobile:wx.getStorageSync("mobile")},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var a=JSON.parse(e.data);0==a.userinfo.certification?t.setData({certification:"未认证"}):1==a.userinfo.certification?t.setData({certification:"已认证"}):-1==a.userinfo.certification&&t.setData({certification:"待审核"}),t.setData({money:a.money,mobile:a.userinfo.mobile,userinfo:a.userinfo}),wx.hideNavigationBarLoading(),wx.stopPullDownRefresh()}})},onShow:function(){this.onLoad()},formSubmit:function(e){var i;if(""==e.detail.value.number)return wx.showToast({title:"请输入提现金额",icon:"none",duration:1e3}),!1;if(!/^\d+$/.test(e.detail.value.number))return wx.showToast({title:"请输入整数",icon:"none",duration:1e3}),!1;if(e.detail.value.number>t.data.money)return wx.showToast({title:"提现金额超出",icon:"none",duration:1e3}),!1;if("0"==t.data.currentTab){if(i=1,""==e.detail.value.bank_name)return wx.showToast({title:"请输入银行卡姓名",icon:"none",duration:1e3}),!1;if(""==e.detail.value.bank_account)return wx.showToast({title:"请输入卡号",icon:"none",duration:1e3}),!1;if(""==e.detail.value.bank_addr)return wx.showToast({title:"请输入开户行地址",icon:"none",duration:1e3}),!1}else if(i=2,""==e.detail.value.alipay)return wx.showToast({title:"请输入支付宝账号",icon:"none",duration:1e3}),!1;e.detail.value.type=i,e.detail.value.jy_user_id=wx.getStorageSync("jy_user_id"),wx.request({url:a.data.lost+"/index/withform",method:"POST",dataType:"html",data:e.detail.value,header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){"1"==t.data?(wx.showToast({title:"提交成功",icon:"success",duration:2e3}),setTimeout(function(){wx.switchTab({url:"../info/info"})},2e3)):wx.showToast({title:"提交失败",icon:"none",duration:2e3})}})},all:function(e){t.setData({allmoney:t.data.money})},swiperTab:function(t){this.setData({currentTba:t.detail.current})},clickTab:function(t){var e=this;if(this.data.currentTab===t.target.dataset.current)return!1;e.setData({currentTab:t.target.dataset.current})},onQuestion:function(t){wx.navigateTo({url:"../question/question"})},stopTouchMove:function(){return!1}}); 
 			}); 	require("pages/withdraw/withdraw.js");
 		__wxRoute = 'pages/authentication/authentication';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/authentication/authentication.js';	define("pages/authentication/authentication.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t,a=getApp();Page({data:{tempFilePaths:[],tempFilePath1:[],tempFilePath2:[],tempFilePath3:[],tempFilePath4:[],tempFilePath5:[],mobile:"",certification:""},onLoad:function(i){e=this,t=wx.getStorageSync("mobile");var o=wx.getStorageSync("jy_user_id");e.setData({jy_user_id:o}),wx.request({url:a.data.lost+"/index/userinfo",method:"GET",dataType:"html",data:{mobile:t},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data);0==a.userinfo.certification?e.setData({certification:"未认证"}):1==a.userinfo.certification?e.setData({certification:"已认证"}):-1==a.userinfo.certification&&e.setData({certification:"待审核"});var i=new Array;i[0]=a.userinfo.identification,e.setData({tempFilePath1:i}),i[0]=a.userinfo.identification_2,e.setData({tempFilePath2:i}),i[0]=a.userinfo.driving_licence,e.setData({tempFilePath3:i}),i[0]=a.userinfo.travel_licence,e.setData({tempFilePath4:i}),i[0]=a.userinfo.travel_licence_2,e.setData({tempFilePath5:i}),e.setData({mobile:a.userinfo.mobile})}})},upload1:function(){wx.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){wx.showToast({title:"正在上传...",icon:"loading",mask:!0,duration:1e3});var i=t.tempFilePaths;e.setData({tempFilePaths1:i}),wx.uploadFile({url:a.data.lost+"/index/certimg",filePath:i[0],name:"file",formData:{type:"1",jy_user_id:e.data.jy_user_id},success:function(t){wx.showToast({title:"上传成功",icon:"success",duration:2e3}),setTimeout(function(){e.onLoad()},2e3)}})}})},upload2:function(){wx.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){wx.showToast({title:"正在上传...",icon:"loading",mask:!0,duration:1e3});var i=t.tempFilePaths;e.setData({tempFilePath2:i}),wx.uploadFile({url:a.data.lost+"/index/certimg",filePath:i[0],name:"file",formData:{type:"2",jy_user_id:e.data.jy_user_id},success:function(t){wx.showToast({title:"上传成功",icon:"success",duration:2e3}),setTimeout(function(){e.onLoad()},2e3)}})}})},upload3:function(){wx.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){wx.showToast({title:"正在上传...",icon:"loading",mask:!0,duration:1e3});var i=t.tempFilePaths;e.setData({tempFilePath3:i}),wx.uploadFile({url:a.data.lost+"/index/certimg",filePath:i[0],name:"file",formData:{type:"3",jy_user_id:e.data.jy_user_id},success:function(t){wx.showToast({title:"上传成功",icon:"success",duration:2e3}),setTimeout(function(){e.onLoad()},2e3)}})}})},upload4:function(){wx.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){wx.showToast({title:"正在上传...",icon:"loading",mask:!0,duration:1e3});var i=t.tempFilePaths;e.setData({tempFilePath4:i}),wx.uploadFile({url:a.data.lost+"/index/certimg",filePath:i[0],name:"file",formData:{type:"4",jy_user_id:e.data.jy_user_id},success:function(t){wx.showToast({title:"上传成功",icon:"success",duration:2e3}),setTimeout(function(){e.onLoad()},2e3)}})}})},upload5:function(){wx.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){wx.showToast({title:"正在上传...",icon:"loading",mask:!0,duration:1e3});var i=t.tempFilePaths;e.setData({tempFilePath5:i}),wx.uploadFile({url:a.data.lost+"/index/certimg",filePath:i[0],name:"file",formData:{type:"5",jy_user_id:e.data.jy_user_id},success:function(t){wx.showToast({title:"上传成功",icon:"success",duration:2e3}),setTimeout(function(){e.onLoad()},2e3)}})}})},listenerButtonPreviewImage1:function(e){var t=e.target.dataset.index,a=this;wx.previewImage({current:a.data.tempFilePath1[t],urls:a.data.tempFilePath1})},listenerButtonPreviewImage2:function(e){var t=e.target.dataset.index,a=this;wx.previewImage({current:a.data.tempFilePath2[t],urls:a.data.tempFilePath2})},listenerButtonPreviewImage3:function(e){var t=e.target.dataset.index,a=this;wx.previewImage({current:a.data.tempFilePath3[t],urls:a.data.tempFilePath3})},listenerButtonPreviewImage4:function(e){var t=e.target.dataset.index,a=this;wx.previewImage({current:a.data.tempFilePath4[t],urls:a.data.tempFilePath4})},listenerButtonPreviewImage5:function(e){var t=e.target.dataset.index,a=this;wx.previewImage({current:a.data.tempFilePath5[t],urls:a.data.tempFilePath5})},onenter:function(e){wx.switchTab({url:"../info/info"})}}); 
 			}); 	require("pages/authentication/authentication.js");
 		__wxRoute = 'pages/information/information';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/information/information.js';	define("pages/information/information.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t,a=getApp();Page({data:{mobile:"",userinfo:""},onLoad:function(o){e=this,t=wx.getStorageSync("mobile"),wx.request({url:a.data.lost+"/index/userinfo",method:"GET",dataType:"html",data:{mobile:t},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data);e.setData({userinfo:a.userinfo})}})},onPullDownRefresh:function(){wx.showNavigationBarLoading(),wx.request({url:a.data.lost+"/index/userinfo",method:"GET",dataType:"html",data:{mobile:wx.getStorageSync("mobile")},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data);e.setData({userinfo:a.userinfo}),wx.hideNavigationBarLoading(),wx.stopPullDownRefresh()}})},onShow:function(){this.onLoad()},formSubmit:function(t){t.detail.value.id=e.data.userinfo.id,wx.request({url:a.data.lost+"/index/editinform",method:"POST",dataType:"html",data:t.detail.value,header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){"1"==e.data?wx.showToast({title:"修改成功",icon:"success",duration:2e3}):wx.showToast({title:"修改失败",icon:"none",duration:2e3})}})}}); 
 			}); 	require("pages/information/information.js");
 		__wxRoute = 'pages/login/login';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/login/login.js';	define("pages/login/login.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a,t=function(a){return a&&a.__esModule?a:{default:a}}(require("../../utils/WxValidate.js")),e=getApp();Page({data:{mobile:"",passwd:""},onLoad:function(){a=this,this.initValidate()},showModal:function(a){wx.showModal({content:a.msg,showCancel:!1})},initValidate:function(){var a={mobile:{required:!0},passwd:{required:!0}},e={mobile:{required:"请输入手机号码"},passwd:{required:"请输入密码"}};this.WxValidate=new t.default(a,e)},formSubmit:function(t){var i=t.detail.value;if(!this.WxValidate.checkForm(i)){var o=this.WxValidate.errorList[0];return this.showModal(o),!1}wx.request({url:e.data.lost+"/auth/check_login",method:"GET",dataType:"html",data:{mobile:a.data.mobile,password:a.data.passwd},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var e=JSON.parse(t.data);"correct"==e.msg||"admin"==e.msg?(wx.setStorageSync("mobile",a.data.mobile),wx.setStorageSync("jy_user_id",e.jy_user_id),wx.switchTab({url:"../index/index"})):"error"==e.msg?wx.showModal({content:"账号或者密码有误",showCancel:!1}):"noip"==e.msg?wx.showModal({content:"IP地址受限制",showCancel:!1}):"activation"==e.msg?wx.showModal({content:"账号未激活",showCancel:!1}):wx.showModal({content:"系统繁忙",showCancel:!1})}})},onShow:function(){this.onLoad()},mobileText:function(a){this.setData({mobile:a.detail.value})},passwdText:function(a){this.setData({passwd:a.detail.value})},onPasswd:function(a){wx.navigateTo({url:"../passwd/passwd"})},onSignin:function(a){wx.navigateTo({url:"../signin/signin"})}}); 
 			}); 	require("pages/login/login.js");
 		__wxRoute = 'pages/passwd/passwd';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/passwd/passwd.js';	define("pages/passwd/passwd.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=function(e){return e&&e.__esModule?e:{default:e}}(require("../../utils/WxValidate.js")),a=getApp();Page({data:{code:"",mobile:"",passwd:"",recode:"",codeText:"获取验证码",disabled:"",timer:"",countDownNum:"60"},onLoad:function(){e=this,this.initValidate()},onShow:function(){this.onLoad()},showModal:function(e){wx.showModal({content:e.msg,showCancel:!1})},initValidate:function(){var e={mobile:{required:!0,tel:!0},passwd:{required:!0,minlength:9},repasswd:{required:!0,minlength:9,equalTo:"passwd"}},a={mobile:{required:"请输入手机号码",tel:"请输入正确的手机号码"},passwd:{required:"请输入密码",minlength:"密码不能少于9位"},repasswd:{required:"请输入确认密码",minlength:"确认密码不能少于9位",equalTo:"两次密码不一致"}};this.WxValidate=new t.default(e,a)},formSubmit:function(t){var o=t.detail.value;if(!this.WxValidate.checkForm(o)){var n=this.WxValidate.errorList[0];return this.showModal(n),!1}if(e.data.code!=e.data.recode)return wx.showModal({content:"验证码不正确",showCancel:!1}),!1;wx.request({url:a.data.lost+"/index/find_form",method:"POST",dataType:"html",data:{mobile:e.data.mobile,password:e.data.passwd},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){"0"==e.data?wx.showModal({content:"该手机号码未注册",showCancel:!1}):"1"==e.data?(wx.showModal({content:"找回成功",showCancel:!1}),setTimeout(function(){wx.redirectTo({url:"../login/login"})},2e3)):wx.showModal({content:"系统繁忙",showCancel:!1})}})},mobileText:function(e){this.setData({mobile:e.detail.value})},passwdText:function(e){this.setData({passwd:e.detail.value})},codeText:function(e){this.setData({recode:e.detail.value})},getCode:function(t){var o=/^1[34578]\d{9}$/.test(e.data.mobile);if(""==e.data.mobile)wx.showModal({content:"请输入手机号码",showCancel:!1});else if(o){var n=Math.floor(10*Math.random())+""+Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random()),d=e.data.countDownNum;wx.request({url:a.data.lost+"/base/sms",method:"POST",dataType:"html",data:{mobile:e.data.mobile,title:"找回密码",code:n},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({code:t.data}),e.setData({timer:setInterval(function(){d--,e.setData({countDownNum:d,codeText:d+" 秒后获取",disabled:"disabled"}),0==d&&(e.setData({countDownNum:"60",codeText:"获取验证码",disabled:""}),clearInterval(e.data.timer))},1e3)})}})}else wx.showModal({content:"手机号码格式不正确",showCancel:!1})},onLogin:function(e){wx.navigateTo({url:"../login/login"})}}); 
 			}); 	require("pages/passwd/passwd.js");
 		__wxRoute = 'pages/signin/signin';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/signin/signin.js';	define("pages/signin/signin.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=function(e){return e&&e.__esModule?e:{default:e}}(require("../../utils/WxValidate.js")),a=getApp();Page({data:{code:"",mobile:"",passwd:"",recode:"",codeText:"获取验证码",disabled:"",timer:"",countDownNum:"60"},onLoad:function(){e=this,this.initValidate()},onShow:function(){this.onLoad()},showModal:function(e){wx.showModal({content:e.msg,showCancel:!1})},initValidate:function(){var e={mobile:{required:!0,tel:!0},passwd:{required:!0,minlength:9},repasswd:{required:!0,minlength:9,equalTo:"passwd"}},a={mobile:{required:"请输入手机号码",tel:"请输入正确的手机号码"},passwd:{required:"请输入密码",minlength:"密码不能少于9位"},repasswd:{required:"请输入确认密码",minlength:"确认密码不能少于9位",equalTo:"两次密码不一致"}};this.WxValidate=new t.default(e,a)},formSubmit:function(t){var o=t.detail.value;if(!this.WxValidate.checkForm(o)){var n=this.WxValidate.errorList[0];return this.showModal(n),!1}if(e.data.code!=e.data.recode)return wx.showModal({content:"验证码不正确",showCancel:!1}),!1;wx.request({url:a.data.lost+"/index/reg_form",method:"POST",dataType:"html",data:{mobile:e.data.mobile,password:e.data.passwd},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){"0"==e.data?wx.showModal({content:"该手机号码已经注册",showCancel:!1}):"1"==e.data?(wx.showModal({content:"注册成功",showCancel:!1}),setTimeout(function(){wx.redirectTo({url:"../login/login"})},2e3)):wx.showModal({content:"系统繁忙",showCancel:!1})}})},mobileText:function(e){this.setData({mobile:e.detail.value})},passwdText:function(e){this.setData({passwd:e.detail.value})},codeText:function(e){this.setData({recode:e.detail.value})},getCode:function(t){var o=/^1[34578]\d{9}$/.test(e.data.mobile);if(""==e.data.mobile)wx.showModal({content:"请输入手机号码",showCancel:!1});else if(o){var n=Math.floor(10*Math.random())+""+Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random()),d=e.data.countDownNum;wx.request({url:a.data.lost+"/base/sms",method:"POST",dataType:"html",data:{mobile:e.data.mobile,title:"注册新账号",code:n},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({code:t.data}),e.setData({timer:setInterval(function(){d--,e.setData({countDownNum:d,codeText:d+" 秒后获取",disabled:"disabled"}),0==d&&(e.setData({countDownNum:"60",codeText:"获取验证码",disabled:""}),clearInterval(e.data.timer))},1e3)})}})}else wx.showModal({content:"手机号码格式不正确",showCancel:!1})},onLogin:function(e){wx.navigateTo({url:"../login/login"})}}); 
 			}); 	require("pages/signin/signin.js");
 		__wxRoute = 'pages/guize/guize';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/guize/guize.js';	define("pages/guize/guize.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({}); 
 			}); 	require("pages/guize/guize.js");
 		__wxRoute = 'pages/question/question';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/question/question.js';	define("pages/question/question.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){this.onLoad()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/question/question.js");
 		__wxRoute = 'pages/orderMoneyIntro/orderMoneyIntro';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/orderMoneyIntro/orderMoneyIntro.js';	define("pages/orderMoneyIntro/orderMoneyIntro.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,e=getApp();Page({data:{orderid:"",result:"",money:"",status:"0"},onLoad:function(a){(t=this).setData({orderid:a.id}),wx.request({url:e.data.lost+"/index/orderMoneyIntro2",method:"GET",dataType:"html",data:{id:t.data.orderid,openid:wx.getStorageSync("openid")},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var a=JSON.parse(e.data);t.setData({result:a.rst,money:a.money,status:a.status})}})},onSubmitCost:function(e){var a="../addmoney/addmoney?id="+t.data.orderid;wx.navigateTo({url:a})},edit:function(t){var e="../editmoney/editmoney?id="+t.currentTarget.dataset.id;wx.navigateTo({url:e})}}); 
 			}); 	require("pages/orderMoneyIntro/orderMoneyIntro.js");
 		__wxRoute = 'pages/addmoney/addmoney';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/addmoney/addmoney.js';	define("pages/addmoney/addmoney.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=getApp();Page({data:{tempFilePaths:[],objectArray:[],objectIndex:0,moneyText:"",order_code:"",orderid:""},onLoad:function(a){(e=this).setData({orderid:a.id}),wx.request({url:t.data.lost+"/index/orderInfo",method:"GET",dataType:"html",data:{orderid:e.data.orderid},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data);e.setData({order_code:a.order_code})}}),wx.request({url:t.data.lost+"/index/addmoney2",method:"GET",dataType:"html",data:{openid:wx.getStorageSync("openid")},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=JSON.parse(t.data);e.setData({objectArray:a.result})}})},upload:function(){wx.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){wx.showToast({title:"正在上传...",icon:"loading",mask:!0,duration:1e3});var a=t.tempFilePaths;e.setData({tempFilePaths:a})}})},formSubmit:function(a){var o=e.data.objectArray[e.data.objectIndex].id,r=e.data.moneyText,d=e.data.tempFilePaths[0],n=a.detail.value.remark;return d?wx.uploadFile({url:t.data.lost+"/index/addmoneyform2",filePath:d,name:"file",formData:{order_code:e.data.order_code,item_id:o,ap_amount_car:r,remark:n,openid:wx.getStorageSync("openid")},success:function(t){wx.showToast({title:"提交成功",icon:"success",duration:2e3}),setTimeout(function(){wx.navigateTo({url:"../orderMoneyIntro/orderMoneyIntro?id="+e.data.orderid})},2e3)}}):wx.request({url:t.data.lost+"/index/addmoneyform2",method:"POST",dataType:"html",data:{order_code:e.data.order_code,item_id:o,ap_amount_car:r,remark:n,ap_amount_car_voucher:d,openid:wx.getStorageSync("openid")},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){wx.showToast({title:"提交成功",icon:"success",duration:2e3}),setTimeout(function(){wx.navigateTo({url:"../orderMoneyIntro/orderMoneyIntro?id="+e.data.orderid})},2e3)}}),!1},listenerButtonPreviewImage:function(t){var a=t.target.dataset.index;wx.previewImage({current:e.data.tempFilePaths[a],urls:e.data.tempFilePaths,success:function(e){},fail:function(){}})},moneyText:function(t){e.setData({moneyText:t.detail.value})},bindPickerChange:function(t){e.setData({objectIndex:t.detail.value})}}); 
 			}); 	require("pages/addmoney/addmoney.js");
 		__wxRoute = 'pages/integral/integral';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/integral/integral.js';	define("pages/integral/integral.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,e,a=getApp();Page({data:{jifen:null,integral:""},onShow:function(){this.onLoad()},onLoad:function(n){t=this,e=wx.getStorageSync("mobile"),wx.request({url:a.data.lost+"/index/userinfo",method:"GET",dataType:"html",data:{mobile:e},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var a=JSON.parse(e.data);t.setData({integral:a.userinfo.integral})}})}}); 
 			}); 	require("pages/integral/integral.js");
 	