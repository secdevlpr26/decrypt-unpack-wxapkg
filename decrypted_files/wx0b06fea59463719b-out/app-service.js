	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
	/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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
Z([[7],[3,'pickerViewShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[7],[3,'phonelicense']],[[7],[3,'authorizationfailure']]])
Z([[7],[3,'phonelicense']])
Z([[7],[3,'authorizationfailure']])
Z([[7],[3,'fork']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'allowspopup']])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'weCropper'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'aboutus'])
Z([[6],[[7],[3,'info']],[3,'Video']])
Z([a,[[6],[[7],[3,'textheightarr']],[1,0]],[3,' contentAboutText']])
Z([[8],'wxParseData',[[6],[[7],[3,'DetailInfo']],[3,'nodes']]])
Z([3,'wxParse'])
Z([3,'connectinformation'])
Z([3,'info.Contact'])
Z(z[7])
Z([3,'info.Tel'])
Z([3,'info.Address'])
Z([3,'info.Email'])
Z([3,'info.WxWeb'])
Z([3,'info.WxNum'])
Z([[7],[3,'slideshow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'aboutus'])
Z([[6],[[7],[3,'info']],[3,'Video']])
Z([a,[[6],[[7],[3,'textheightarr']],[1,0]],[3,' contentAboutText']])
Z([[8],'wxParseData',[[6],[[7],[3,'DetailInfo']],[3,'nodes']]])
Z([3,'wxParse'])
Z([3,'connectinformation'])
Z([3,'info.Contact'])
Z(z[7])
Z([3,'info.Tel'])
Z([3,'info.Address'])
Z([3,'info.Email'])
Z([3,'info.WxWeb'])
Z([3,'info.WxNum'])
Z([[7],[3,'slideshow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'aRcss'])
Z([[7],[3,'isBlank']])
Z([[2,'!'],[[7],[3,'isBlank']]])
Z([3,'PullloadData'])
Z([3,'true'])
Z([3,'20'])
Z([3,'height:100%; box-sizing:border-box'])
Z([3,'item'])
Z([[7],[3,'recordList']])
Z(z[7])
Z([3,'recordlist'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'Status']],[1,'0']])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'Mobile']],[1,null]],[[2,'!='],[[6],[[7],[3,'item']],[3,'Mobile']],[1,'']]])
Z(z[12])
Z([[7],[3,'shape']])
Z([[7],[3,'isclose']])
Z([3,'closeModal'])
Z([3,'recordModal'])
Z(z[7])
Z([[7],[3,'recordTimeList']])
Z([3,'index'])
Z([[2,'<'],[[7],[3,'index']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'switchTab'])
Z([3,'tab-content'])
Z([[7],[3,'currentTab']])
Z([3,'300'])
Z([a,[3,'height: '],[[7],[3,'winHeight']],[3,'rpx;']])
Z([[7],[3,'behaviorBlank']])
Z([[2,'!'],[[7],[3,'behaviorBlank']]])
Z([3,'loadMoreData'])
Z([3,'tab-con-item'])
Z([3,'true'])
Z([3,'20'])
Z([a,z[4][1],[[2,'?:'],[[2,'!'],[[7],[3,'showMesTipFlag']]],[[7],[3,'winHeight']],[[7],[3,'winHeight2']]],[3,'rpx; box-sizing:border-box;margin-top: '],[[2,'?:'],[[7],[3,'showMesTipFlag']],[1,'80'],[1,'0']],z[4][3]])
Z([3,'item'])
Z([[7],[3,'behaviorList']])
Z([3,'index'])
Z([3,'i'])
Z([3,'v'])
Z([[6],[[7],[3,'item']],[3,'list']])
Z(z[15])
Z([3,'touserdetails'])
Z([3,'member-item'])
Z([[6],[[7],[3,'v']],[3,'headImgUrl']])
Z([[6],[[7],[3,'v']],[3,'nickName']])
Z([[6],[[7],[3,'v']],[3,'userId']])
Z([a,[3,'margin-bottom: '],[[2,'?:'],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'list']],[3,'length']],[[2,'+'],[[7],[3,'i']],[1,1]]],[1,'0'],[1,'']],z[4][3]])
Z([3,'from_send'])
Z([3,'member-item-box'])
Z([[2,'=='],[[6],[[7],[3,'v']],[3,'status']],[1,'0']])
Z([[2,'>'],[[6],[[7],[3,'v']],[3,'quantity']],[1,0]])
Z([[7],[3,'showBehaviorNoDataTip']])
Z([[7],[3,'isLoading']])
Z([[7],[3,'userCountBlank']])
Z([[2,'!'],[[7],[3,'userCountBlank']]])
Z(z[32])
Z(z[7])
Z(z[9])
Z(z[10])
Z([[7],[3,'userTop']])
Z(z[9])
Z([a,z[4][1],[[7],[3,'userCountHeight']],[3,'px;']])
Z([[7],[3,'noMoreUserdataTip']])
Z(z[30])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'business-bottom'])
Z([[2,'?:'],[[2,'!'],[[7],[3,'isCardDetail']]],[1,'toDetail'],[1,'']])
Z([3,'business-con'])
Z([[7],[3,'isCardDetail']])
Z([[2,'!'],[[7],[3,'isCardDetail']]])
Z([[2,'?:'],[[2,'!'],[[7],[3,'isDynamic']]],[1,'toDynamic'],[1,'']])
Z(z[2])
Z([[2,'!'],[[7],[3,'isDynamic']]])
Z([[7],[3,'isDynamic']])
Z([[7],[3,'showMaterial']])
Z([[2,'?:'],[[2,'!'],[[7],[3,'isMaterial']]],[1,'toMaterial'],[1,'']])
Z(z[2])
Z([[2,'!'],[[7],[3,'isMaterial']]])
Z([[7],[3,'isMaterial']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'&&'],[[2,'>'],[[7],[3,'messageCount']],[1,0]],[[2,'=='],[[7],[3,'cardchoice']],[1,0]]],[[2,'!'],[[7],[3,'incard']]]])
Z([[2,'||'],[[2,'&&'],[[7],[3,'isShare']],[[2,'=='],[[7],[3,'cardchoice']],[1,1]]],[[2,'&&'],[[7],[3,'isFromWorkBench']],[[2,'=='],[[7],[3,'cardchoice']],[1,1]]]])
Z([[2,'>'],[[7],[3,'mesCount']],[1,0]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[7],[3,'currentTab']],[1,0]],[[2,'=='],[[7],[3,'cardchoice']],[1,0]]],[[2,'!'],[[7],[3,'incard']]]])
Z([[2,'=='],[[7],[3,'currentTab']],[1,0]])
Z([3,'switchTab'])
Z([3,'tab-content'])
Z([[7],[3,'currentTab']])
Z([3,'300'])
Z([a,[3,'height: '],[[2,'?:'],[[2,'!'],[[7],[3,'showForm']]],[[7],[3,'winHeight']],[[7],[3,'afterWinHeight']]],[3,'rpx;']])
Z([[2,'!'],[[7],[3,'hideLoading']]])
Z([3,'carddetails container'])
Z([[2,'||'],[[7],[3,'incard']],[[7],[3,'isOverTime']]])
Z([3,'carddetails-top'])
Z([3,'carddetails-img'])
Z([[2,'==='],[[7],[3,'cardchoice']],[1,'1']])
Z([[7],[3,'informationAllHiding']])
Z([[2,'&&'],[[7],[3,'informationAllHiding']],[[7],[3,'openDetailFlag']]])
Z([3,'personalinfor'])
Z([[2,'!=='],[[6],[[7],[3,'cardcontent']],[3,'WeChat']],[1,'']])
Z([[2,'!=='],[[6],[[7],[3,'cardcontent']],[3,'Email']],[1,'']])
Z([[2,'!=='],[[6],[[7],[3,'cardcontent']],[3,'QQ']],[1,'']])
Z([[2,'==='],[[6],[[7],[3,'cardcontent']],[3,'checkAddress']],[1,'1']])
Z([a,[3,'other-information '],[[2,'?:'],[[2,'||'],[[7],[3,'openDetailFlag']],[[2,'!'],[[7],[3,'informationAllHiding']]]],[1,'mt42'],[1,'']]])
Z([3,'from_send'])
Z([3,'information-bottom-form'])
Z([[2,'==='],[[7],[3,'cardchoice']],[1,'0']])
Z(z[15])
Z([[2,'?:'],[[2,'==='],[[7],[3,'cardchoice']],[1,'1']],[1,'goAccessRecord'],[1,'']])
Z([3,'likenum-int-l'])
Z(z[24])
Z([3,'int-imgs'])
Z([[2,'<'],[[6],[[7],[3,'recordImage']],[3,'length']],[1,1]])
Z([3,'item'])
Z([[7],[3,'recordImage']])
Z([3,'index'])
Z([[2,'&&'],[[2,'<'],[[7],[3,'index']],[1,5]],[[2,'>'],[[6],[[7],[3,'recordImage']],[3,'length']],[1,0]]])
Z([[2,'>='],[[6],[[7],[3,'recordImage']],[3,'length']],[1,6]])
Z([[2,'||'],[[6],[[7],[3,'cardcontent']],[3,'Bio']],[[6],[[7],[3,'cardcontent']],[3,'Recording']]])
Z(z[38])
Z([3,'person-info-box'])
Z([[6],[[7],[3,'cardcontent']],[3,'Bio']])
Z([[6],[[7],[3,'cardcontent']],[3,'Recording']])
Z([[2,'>'],[[6],[[7],[3,'moreImg']],[3,'length']],[1,0]])
Z(z[43])
Z([3,'touchstart'])
Z([3,'container'])
Z([3,'dynamic-box'])
Z([[7],[3,'dynamicBlank']])
Z([[2,'!'],[[7],[3,'dynamicBlank']]])
Z([3,'loadMoreData'])
Z([3,'true'])
Z([3,'20'])
Z([a,z[9][1],[[7],[3,'winHeight']],[3,'rpx; box-sizing:border-box']])
Z(z[35])
Z(z[33])
Z([[7],[3,'dynamicList']])
Z(z[35])
Z([3,'like-comment'])
Z([[6],[[7],[3,'item']],[3,'NickNameText']])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'CommentList']],[3,'length']],[1,0]])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'NickNameText']]])
Z([[7],[3,'showForm']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'showForm']]],[[2,'&&'],[[2,'!'],[[7],[3,'incard']]],[[2,'!'],[[7],[3,'isOverTime']]]]])
Z([3,'business-bottom'])
Z([3,'swichNav'])
Z([3,'business-con'])
Z([3,'0'])
Z(z[24])
Z([3,'bottom-nav-btn'])
Z([3,'submit'])
Z([3,'none'])
Z(z[4])
Z([[2,'!='],[[7],[3,'currentTab']],[1,0]])
Z(z[65])
Z(z[66])
Z([3,'1'])
Z(z[24])
Z(z[69])
Z(z[70])
Z(z[71])
Z([[2,'!='],[[7],[3,'currentTab']],[1,1]])
Z([[2,'=='],[[7],[3,'currentTab']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,''])
Z([[7],[3,'incard']])
Z([[7],[3,'isBinding']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onChatSubmit'])
Z([3,'true'])
Z([3,'onDownMore'])
Z([3,'scrollView'])
Z([[7],[3,'scrollStatus']])
Z([a,[3,'height: '],[[7],[3,'scrollHeight']],[3,'px']])
Z([[7],[3,'msgLists']])
Z([3,'item.ID'])
Z([3,'chat-msg'])
Z([a,[3,'id'],[[6],[[7],[3,'item']],[3,'ID']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'Type']],[1,'default']])
Z([3,'msg-img'])
Z([[7],[3,'defaultStatus']])
Z([[2,'!'],[[7],[3,'defaultStatus']]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'TimeOut']],[1,1]],[[2,'!=='],[[6],[[7],[3,'item']],[3,'Type']],[1,'default']]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'FromUserID']],[[7],[3,'OtherID']]],[[2,'!=='],[[6],[[7],[3,'item']],[3,'Type']],[1,'default']]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'FromUserID']],[[7],[3,'WebUserID']]],[[2,'!=='],[[6],[[7],[3,'item']],[3,'Type']],[1,'default']]])
Z([3,'sendMsgLoading flexBox flexAlign'])
Z([[6],[[7],[3,'item']],[3,'tanhaoStatus']])
Z([[6],[[7],[3,'item']],[3,'loadingStatus']])
Z([[7],[3,'modalStatus']])
Z([3,'addWechatModal'])
Z([[2,'!=='],[[7],[3,'BusinessWeChat']],[1,'']])
Z([3,'addWechatModal-box flexBox flexDirectionColumn flexJustify flexAlign'])
Z([[2,'!'],[[7],[3,'copyStatus']]])
Z([[7],[3,'copyStatus']])
Z([[2,'=='],[[7],[3,'BusinessWeChat']],[1,'']])
Z(z[12])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'DefaultImg']])
Z([3,'onMessageSubmit'])
Z([3,'true'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'lists']])
Z([3,'item.id'])
Z([3,'goChatDialogue'])
Z([3,'msg flexBox'])
Z([[6],[[6],[[7],[3,'item']],[3,'UserInfo']],[3,'NickName']])
Z([[6],[[6],[[7],[3,'item']],[3,'UserInfo']],[3,'HeadImgUrl']])
Z([[6],[[6],[[7],[3,'item']],[3,'UserInfo']],[3,'UserID']])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'count']],[1,0]])
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
Z([3,'tab-content-box'])
Z([a,[3,'height: '],[[7],[3,'height']],[3,'px;margin-top:'],[[2,'?:'],[[7],[3,'statisticsBlank']],[1,'0'],[1,'88']],[3,'rpx;']])
Z([[7],[3,'statisticsBlank']])
Z([3,'default-off'])
Z([[7],[3,'isNoMember']])
Z([[2,'!'],[[7],[3,'isNoMember']]])
Z([[7],[3,'haveStatistics']])
Z([3,'scrolling'])
Z([3,'loadMoreData'])
Z([3,'tab-con-item'])
Z([3,'true'])
Z([3,'20'])
Z([[7],[3,'toTop']])
Z(z[10])
Z([a,z[1][1],z[1][2],[3,'px; box-sizing:border-box;']])
Z([3,'statistics-line'])
Z([[7],[3,'statisticsLines']])
Z([3,'mychart-dom'])
Z([a,[3,'display:'],[[2,'?:'],[[7],[3,'hideCanvas']],[1,'none'],[1,'']],[3,';']])
Z(z[6])
Z([3,'item'])
Z([[7],[3,'statisticsList']])
Z([3,'index'])
Z(z[4])
Z([3,'i'])
Z([3,'v'])
Z([[6],[[7],[3,'item']],[3,'list']])
Z(z[24])
Z([3,'touserdetails'])
Z([3,'member-item'])
Z([[6],[[7],[3,'v']],[3,'headImgUrl']])
Z([[6],[[7],[3,'v']],[3,'nickName']])
Z([[6],[[7],[3,'v']],[3,'userId']])
Z([a,[3,'margin-bottom: '],[[2,'?:'],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'list']],[3,'length']],[[2,'+'],[[7],[3,'i']],[1,1]]],[1,'0'],[1,'']],z[1][5]])
Z([3,'from_send'])
Z([3,'member-item-box'])
Z([[2,'=='],[[6],[[7],[3,'v']],[3,'Status']],[1,'0']])
Z([[2,'>'],[[6],[[7],[3,'v']],[3,'quantity']],[1,0]])
Z(z[20])
Z([[7],[3,'memberList']])
Z(z[22])
Z(z[5])
Z([[7],[3,'noMoreDataTip']])
Z([[7],[3,'isLoading']])
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
Z([3,'touchstart'])
Z([3,'container'])
Z([3,'dynamic-box'])
Z([[7],[3,'dynamicBlank']])
Z([[2,'!'],[[7],[3,'dynamicBlank']]])
Z([3,'loadMoreData'])
Z([3,'true'])
Z([3,'20'])
Z([a,[3,'height: '],[[7],[3,'height']],[3,'px; box-sizing:border-box']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'dynamicList']])
Z(z[9])
Z([3,'like-comment'])
Z([[6],[[7],[3,'item']],[3,'NickNameText']])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'CommentList']],[3,'length']],[1,0]])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'NickNameText']]])
Z([[7],[3,'showForm']])
Z([[2,'!'],[[7],[3,'showForm']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'editcard'])
Z([3,'formSubmit'])
Z([[2,'?:'],[[7],[3,'ellipsis']],[1,'ellipsis'],[1,'unellipsis']])
Z([3,'recording-box-r'])
Z([3,'r-b-t'])
Z([[2,'!'],[[7],[3,'haveRecording']]])
Z([[7],[3,'haveRecording']])
Z([3,'play'])
Z([3,'have-recording'])
Z([[2,'!'],[[7],[3,'isPlay']]])
Z([[7],[3,'isPlay']])
Z(z[6])
Z([[2,'=='],[[7],[3,'recordAuthMethod']],[1,2]])
Z([[2,'=='],[[7],[3,'recordAuthMethod']],[1,1]])
Z([[2,'<'],[[6],[[7],[3,'upload_picture_list']],[3,'length']],[1,9]])
Z([[7],[3,'showToastFlag']])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'material'])
Z([[7],[3,'materialList']])
Z([[6],[[7],[3,'item']],[3,'MaterialID']])
Z([[2,'!'],[[7],[3,'showBlankFlag']]])
Z([3,'mat-contentRight'])
Z([[6],[[7],[3,'item']],[3,'TagName']])
Z([[2,'!=='],[[6],[[6],[[7],[3,'item']],[3,'MaterialContent']],[3,'length']],[1,0]])
Z([3,'flexBox flexDirectionRow'])
Z([[7],[3,'canSave']])
Z([[2,'!'],[[7],[3,'canSave']]])
Z([[7],[3,'showBlankFlag']])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'from_send'])
Z([[7],[3,'rankingList']])
Z([[7],[3,'index']])
Z([[2,'?:'],[[7],[3,'isBoss']],[1,'toUserAi'],[1,'']])
Z([3,'saveFormID flexBox flexAlign'])
Z([[6],[[7],[3,'item']],[3,'businessCardID']])
Z([3,'submit'])
Z([[7],[3,'isBoss']])
Z([[7],[3,'showNoMore']])
Z([[7],[3,'showMoreView']])
Z([[7],[3,'DefaultImg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'canvas-box'])
Z([[2,'!'],[[7],[3,'hideCanvas']]])
Z([[7],[3,'changeImageShow']])
Z([[7],[3,'canSave']])
Z([[2,'!'],[[7],[3,'canSave']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[10],[[7],[3,'cropperOpt']]])
Z([3,'weCropper'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'optionsobjMsg']])
Z([3,'swichNav'])
Z([a,[3,'tab-item '],[[2,'?:'],[[2,'=='],[[7],[3,'currentTab']],[1,1]],[1,'active'],[1,'']]])
Z([3,'1'])
Z([3,'from_send'])
Z([[2,'>'],[[7],[3,'RecordCount']],[1,0]])
Z([3,'switchTab'])
Z([3,'tab-content'])
Z([[7],[3,'currentTab']])
Z([3,'300'])
Z([a,[3,'height: '],[[7],[3,'winHeight']],[3,'rpx;']])
Z([[7],[3,'moreGoods']])
Z([3,'RecordListPage'])
Z([3,'true'])
Z([3,'height: 100%;background:#fff;'])
Z([[7],[3,'RecordCountNum']])
Z([[7],[3,'showNoMore']])
Z([[7],[3,'showMoreView']])
Z([3,'saveUserInfo'])
Z([[2,'?:'],[[7],[3,'butStatus']],[1,'0'],[1,'1']])
Z(z[13])
Z([[2,'!'],[[7],[3,'butStatus']]])
Z([[7],[3,'butStatus']])
Z(z[21])
Z(z[22])
Z([[2,'!=='],[[6],[[7],[3,'userInfoData']],[3,'phone']],[1,'']])
Z([a,[3,'userDataItem flexBox flexAlign '],[[2,'?:'],[[7],[3,'butStatus']],[1,''],[1,'border1px']]])
Z(z[21])
Z([[2,'&&'],[[7],[3,'butStatus']],[[7],[3,'loadDone']]])
Z(z[21])
Z(z[22])
Z(z[21])
Z(z[22])
Z(z[21])
Z(z[21])
Z(z[28])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container workbench'])
Z([3,'from_send'])
Z([3,'content-modal'])
Z([[7],[3,'msgList']])
Z([3,'index'])
Z([[2,'&&'],[[2,'<'],[[7],[3,'index']],[1,6]],[[2,'!'],[[7],[3,'msgBlank']]]])
Z([[2,'>='],[[6],[[7],[3,'msgList']],[3,'length']],[1,6]])
Z([[7],[3,'msgBlank']])
Z(z[1])
Z([[7],[3,'radarFn']])
Z(z[4])
Z([3,'toAIradar'])
Z([3,'radarfn-btn'])
Z([[6],[[7],[3,'item']],[3,'type']])
Z([3,'submit'])
Z([3,'none'])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'count']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'cardcontent']],[3,'IsBoss']],[1,1]])
Z(z[1])
Z([3,'boss-content'])
Z([[7],[3,'rankingList']])
Z(z[4])
Z([[2,'!'],[[7],[3,'rankingListBlank']]])
Z([[7],[3,'rankingListBlank']])
Z(z[1])
Z([3,'material-content'])
Z([[7],[3,'materialList']])
Z([[6],[[7],[3,'item']],[3,'MaterialID']])
Z([[2,'&&'],[[2,'<'],[[7],[3,'index']],[1,2]],[[2,'!'],[[7],[3,'materialListBlank']]]])
Z([3,'mat-contentRight'])
Z([[6],[[7],[3,'item']],[3,'TagName']])
Z([[2,'!=='],[[6],[[6],[[7],[3,'item']],[3,'MaterialContent']],[3,'length']],[1,0]])
Z([3,'flexBox flexDirectionRow'])
Z([[7],[3,'canSave']])
Z([[2,'!'],[[7],[3,'canSave']]])
Z([[7],[3,'materialListBlank']])
Z([[2,'!'],[[7],[3,'materialListBlank']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'particulars-content'])
Z([[2,'!=='],[[7],[3,'currentTab']],[1,0]])
Z([[8],'wxParseData',[[6],[[7],[3,'DetailInfo']],[3,'nodes']]])
Z([3,'wxParse'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[6],[[7],[3,'caselist']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'homeWrapper '],[[6],[[7],[3,'copyrightInfo']],[3,'contentClassName']]])
Z([[9],[[8],'modules',[[7],[3,'modules']]],[[8],'globaldata',[[7],[3,'globaldata']]]])
Z([3,'modules'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loading']])
Z([a,[3,'homeWrapper '],[[6],[[7],[3,'copyrightInfo']],[3,'contentClassName']]])
Z([a,[3,'height: '],[[2,'?:'],[[7],[3,'showAuthGetUserInfoBtn']],[[7],[3,'height']],[1,'']],[3,'px']])
Z([[9],[[8],'modules',[[7],[3,'modules']]],[[8],'globaldata',[[7],[3,'globaldata']]]])
Z([3,'modules'])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'businessCardInfo']],[3,'user']],[[2,'!'],[[7],[3,'isClose']]]],[[7],[3,'isFirstEnter']]])
Z([[6],[[7],[3,'notice']],[3,'Title']])
Z([[6],[[7],[3,'notice']],[3,'Image']])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'officialscene']],[[7],[3,'scene']]],[[7],[3,'isOfficialscene']]])
Z([[2,'&&'],[[7],[3,'isShowLeadCollection']],[[7],[3,'isCollection']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loseEfficacy']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'loseEfficacy']]],[[6],[[7],[3,'newsInfo']],[3,'Title']]])
Z([3,'touchstart'])
Z([3,'container'])
Z([[7],[3,'showCardFlag']])
Z(z[4])
Z([3,'content'])
Z([[8],'wxParseData',[[6],[[7],[3,'DetailInfo']],[3,'nodes']]])
Z([3,'wxParse'])
Z([3,'addLike'])
Z([a,[3,'like-box '],[[2,'?:'],[[7],[3,'hasLike']],[1,'other-color'],[1,'']]])
Z([[2,'!'],[[7],[3,'hasLike']]])
Z([[7],[3,'hasLike']])
Z(z[1])
Z(z[2])
Z([3,'commentList'])
Z([[7],[3,'isBlank']])
Z([[2,'!'],[[7],[3,'isBlank']]])
Z([3,'item'])
Z([[6],[[7],[3,'newsInfo']],[3,'CommentList']])
Z([3,'index'])
Z([3,'avator'])
Z([[6],[[7],[3,'item']],[3,'headurl']])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'headurl']]])
Z(z[17])
Z([[7],[3,'showForm']])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'>'],[[6],[[7],[3,'classlist']],[3,'length']],[1,1]])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'>'],[[6],[[7],[3,'classlist']],[3,'length']],[1,1]])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'notice']],[3,'Title']])
Z([3,'container'])
Z([[6],[[7],[3,'notice']],[3,'Image']])
Z([3,'content'])
Z([[8],'wxParseData',[[6],[[7],[3,'NoticeDetail']],[3,'nodes']]])
Z([3,'wxParse'])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'?:'],[[7],[3,'videoshow']],[[7],[3,'flase']],[1,true]])
Z([3,'videoguanbi'])
Z([3,'true'])
Z([3,'200'])
Z(z[3])
Z([3,'5000'])
Z([a,[3,'height:'],[[7],[3,'bannerHeight']],[3,'px']])
Z([[7],[3,'videoshow']])
Z([[7],[3,'productImgs']])
Z([3,'index'])
Z([[2,'&&'],[[2,'=='],[[7],[3,'index']],[1,'0']],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'productInfo']],[3,'Video']],[1,'']],[[2,'!='],[[6],[[7],[3,'productInfo']],[3,'Video']],[1,null]]]])
Z([[2,'!='],[[6],[[7],[3,'productInfo']],[3,'Price']],[1,'']])
Z([3,'particulars-content'])
Z([[2,'!=='],[[7],[3,'currentTab']],[1,0]])
Z([[8],'wxParseData',[[6],[[7],[3,'DetailInfo']],[3,'nodes']]])
Z([3,'wxParse'])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[6],[[7],[3,'classlist']],[3,'length']])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[6],[[7],[3,'classlist']],[3,'length']])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'customform'])
Z([3,'onCustomFormSubmit'])
Z(z[0])
Z([[6],[[7],[3,'customformdata']],[3,'FormID']])
Z([[6],[[7],[3,'customformdata']],[3,'showtitle']])
Z([3,'field'])
Z([[6],[[7],[3,'customformdata']],[3,'fields']])
Z([3,'unique'])
Z([a,[3,'field-item field-type-'],[[6],[[7],[3,'field']],[3,'FieldType']]])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'IsRequire']],[1,'1']])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'1']])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'2']])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'3']])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'4']])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'5']])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'6']])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'7']])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'8']])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'footnav'])
Z([[2,'!'],[[7],[3,'productflag']]])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleBargain'])
Z([[2,'!='],[[6],[[6],[[7],[3,'m']],[3,'ActivityBase']],[3,'activityTime']],[1,'0']])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleButton'])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleCoupon'])
Z([3,'container boxSizingBox'])
Z([3,'index'])
Z([3,'coupon'])
Z([[6],[[7],[3,'m']],[3,'CouponList']])
Z(z[2])
Z([3,'couponinfo'])
Z([a,[3,'width:'],[[2,'?:'],[[2,'>'],[[6],[[6],[[7],[3,'m']],[3,'CouponList']],[3,'length']],[1,1]],[1,'500rpx'],[1,'100%']],[3,';']])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'coupon']],[3,'CanGet']],[1,1]],[[2,'>'],[[6],[[7],[3,'coupon']],[3,'Available']],[1,0]]])
Z([[2,'!='],[[6],[[7],[3,'coupon']],[3,'Limit']],[1,'0']])
Z([[2,'>='],[[6],[[6],[[7],[3,'m']],[3,'CouponList']],[3,'length']],[1,6]])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleCustomForm'])
Z([[2,'==='],[[6],[[7],[3,'m']],[3,'FormData']],[1,null]])
Z([3,'layout-101'])
Z([[9],[[9],[[8],'customformdata',[[6],[[7],[3,'m']],[3,'FormData']]],[[8],'customformvalues',[[6],[[7],[3,'globaldata']],[3,'customformvalues']]]],[[8],'info',[[7],[3,'m']]]])
Z([3,'customform'])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleFootNav'])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleFullReduction'])
Z([[2,'=='],[[6],[[6],[[7],[3,'m']],[3,'ActivityBase']],[3,'Status']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleImageText'])
Z([a,[3,'layout-'],[[6],[[7],[3,'m']],[3,'Layout']],[3,' '],[[2,'?:'],[[6],[[7],[3,'m']],[3,'ShowPadding']],[1,'showpadding'],[1,'']]])
Z([[2,'==='],[[6],[[7],[3,'m']],[3,'Layout']],[1,106]])
Z([[6],[[6],[[7],[3,'m']],[3,'moduleData']],[3,'items']])
Z([3,'index'])
Z([3,'navTo'])
Z([3,'item'])
Z([[6],[[6],[[7],[3,'item']],[3,'link']],[3,'linkVal']])
Z([[6],[[6],[[7],[3,'item']],[3,'link']],[3,'linkid']])
Z([[6],[[6],[[7],[3,'item']],[3,'link']],[3,'linktype']])
Z([3,'img-item flexBox flexJustify flexAlign'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'img']]])
Z([[6],[[7],[3,'item']],[3,'img']])
Z([[2,'==='],[[6],[[7],[3,'m']],[3,'Layout']],[1,105]])
Z(z[3])
Z(z[4])
Z([[2,'<'],[[7],[3,'index']],[1,3]])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z([[2,'==='],[[6],[[7],[3,'m']],[3,'Layout']],[1,104]])
Z(z[3])
Z(z[4])
Z([[2,'<'],[[7],[3,'index']],[1,2]])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z([[2,'==='],[[6],[[7],[3,'m']],[3,'Layout']],[1,103]])
Z(z[5])
Z([3,'wrapper'])
Z([[6],[[6],[[6],[[6],[[6],[[7],[3,'m']],[3,'moduleData']],[3,'items']],[1,0]],[3,'link']],[3,'linkVal']])
Z([[6],[[6],[[6],[[6],[[6],[[7],[3,'m']],[3,'moduleData']],[3,'items']],[1,0]],[3,'link']],[3,'linkid']])
Z([[6],[[6],[[6],[[6],[[6],[[7],[3,'m']],[3,'moduleData']],[3,'items']],[1,0]],[3,'link']],[3,'linktype']])
Z([a,[3,'imgShow '],[[2,'?:'],[[2,'!'],[[6],[[6],[[6],[[6],[[7],[3,'m']],[3,'moduleData']],[3,'items']],[1,0]],[3,'img']]],[1,'defultStyle'],[1,'']],z[1][3]])
Z([[2,'!'],[[6],[[6],[[6],[[6],[[7],[3,'m']],[3,'moduleData']],[3,'items']],[1,0]],[3,'img']]])
Z([[6],[[6],[[6],[[6],[[7],[3,'m']],[3,'moduleData']],[3,'items']],[1,0]],[3,'img']])
Z([[2,'==='],[[6],[[7],[3,'m']],[3,'Layout']],[1,102]])
Z(z[5])
Z(z[39])
Z(z[40])
Z(z[41])
Z(z[42])
Z([a,z[43][1],z[43][2]])
Z(z[45])
Z(z[44])
Z([[6],[[6],[[6],[[7],[3,'m']],[3,'moduleData']],[3,'editor_desc']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleLine'])
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleLink'])
Z([a,[3,'layout-'],[[6],[[7],[3,'m']],[3,'Layout']]])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'103']])
Z([3,'index'])
Z([3,'link'])
Z([[6],[[7],[3,'m']],[3,'Links']])
Z(z[3])
Z([3,'navTo'])
Z([3,'item'])
Z([[6],[[7],[3,'link']],[3,'LinkVal']])
Z([[6],[[7],[3,'link']],[3,'LinkID']])
Z([[6],[[7],[3,'link']],[3,'LinkType']])
Z([[6],[[7],[3,'link']],[3,'Text']])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[3])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleMap'])
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleNavigationCall'])
Z([3,'box'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'101']])
Z([3,'navigation'])
Z([[2,'?:'],[[2,'=='],[[6],[[6],[[6],[[7],[3,'m']],[3,'ModuleData']],[1,0]],[3,'Type']],[1,0]],[[12],[[6],[[7],[3,'layoutFun']],[3,'hasItem']],[[5],[[5],[[6],[[7],[3,'m']],[3,'Enabled']]],[1,'EnabledDialing']]],[[12],[[6],[[7],[3,'layoutFun']],[3,'hasItem']],[[5],[[5],[[6],[[7],[3,'m']],[3,'Enabled']]],[1,'EnabledNavigation']]]])
Z([3,'address '])
Z([[2,'=='],[[6],[[6],[[6],[[7],[3,'m']],[3,'ModuleData']],[1,0]],[3,'Type']],[1,0]])
Z([[2,'=='],[[6],[[6],[[6],[[7],[3,'m']],[3,'ModuleData']],[1,0]],[3,'Type']],[1,1]])
Z(z[6])
Z(z[7])
Z([[2,'&&'],[[12],[[6],[[7],[3,'layoutFun']],[3,'hasItem']],[[5],[[5],[[6],[[7],[3,'m']],[3,'Enabled']]],[1,'EnabledNavigation']]],[[12],[[6],[[7],[3,'layoutFun']],[3,'hasItem']],[[5],[[5],[[6],[[7],[3,'m']],[3,'Enabled']]],[1,'EnabledDialing']]]])
Z([[2,'?:'],[[2,'=='],[[6],[[6],[[6],[[7],[3,'m']],[3,'ModuleData']],[1,0]],[3,'Type']],[1,0]],[[12],[[6],[[7],[3,'layoutFun']],[3,'hasItem']],[[5],[[5],[[6],[[7],[3,'m']],[3,'Enabled']]],[1,'EnabledNavigation']]],[[12],[[6],[[7],[3,'layoutFun']],[3,'hasItem']],[[5],[[5],[[6],[[7],[3,'m']],[3,'Enabled']]],[1,'EnabledDialing']]]])
Z([3,'address'])
Z([[2,'=='],[[6],[[6],[[6],[[7],[3,'m']],[3,'ModuleData']],[1,1]],[3,'Type']],[1,0]])
Z([[2,'=='],[[6],[[6],[[6],[[7],[3,'m']],[3,'ModuleData']],[1,1]],[3,'Type']],[1,1]])
Z(z[13])
Z(z[14])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'102']])
Z([3,'navigation-1'])
Z(z[4])
Z(z[12])
Z(z[14])
Z(z[13])
Z([[12],[[6],[[7],[3,'layoutFun']],[3,'hasItem']],[[5],[[5],[[6],[[7],[3,'m']],[3,'Enabled']]],[1,'EnabledNavigation']]])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
function gz$gwx_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx_52)return __WXML_GLOBAL__.ops_cached.$gwx_52
__WXML_GLOBAL__.ops_cached.$gwx_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleNewsList'])
Z([[2,'=='],[[6],[[6],[[7],[3,'m']],[3,'NewsList']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[6],[[7],[3,'m']],[3,'NewsList']],[3,'length']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'101']])
Z([3,'news'])
Z([[6],[[7],[3,'m']],[3,'NewsList']])
Z([3,'index'])
Z([3,'navTo'])
Z([3,'news-item flexBox flexDirectionRow'])
Z([[6],[[7],[3,'news']],[3,'ID']])
Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'m']],[3,'DataFrom']],[[2,'-'],[1,1]]],[1,'CaseDetail'],[1,'NewsDetail']])
Z([3,'new-img flexBox flexJustify flexAlign'])
Z([[2,'!'],[[6],[[7],[3,'news']],[3,'Image']]])
Z([[6],[[7],[3,'news']],[3,'Image']])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ShowTime']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'102']])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z([3,'news-item flexBox flexDirectionRow flexAlign flexJustifyBetween'])
Z(z[9])
Z(z[10])
Z(z[14])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'103']])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z([3,'news-item'])
Z(z[9])
Z(z[10])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ShowDescription']],[1,1]])
Z(z[14])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'104']])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z([3,'news-item flexBox  flexDirectionColumn'])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'105']])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'106']])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z([3,'news-item flexBox flexDirectionColumn'])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z([3,'new-desc-wrapper'])
Z(z[14])
Z(z[32])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'107']])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[51])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
})(__WXML_GLOBAL__.ops_cached.$gwx_52);return __WXML_GLOBAL__.ops_cached.$gwx_52
}
function gz$gwx_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx_53)return __WXML_GLOBAL__.ops_cached.$gwx_53
__WXML_GLOBAL__.ops_cached.$gwx_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModulePay'])
})(__WXML_GLOBAL__.ops_cached.$gwx_53);return __WXML_GLOBAL__.ops_cached.$gwx_53
}
function gz$gwx_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx_54)return __WXML_GLOBAL__.ops_cached.$gwx_54
__WXML_GLOBAL__.ops_cached.$gwx_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModulePinTuan'])
Z([[9],[[8],'m',[[7],[3,'m']]],[[8],'globaldata',[[7],[3,'globaldata']]]])
Z([a,[3,'ModulePinTuan-layout-'],[[6],[[7],[3,'m']],[3,'Layout']]])
Z([3,'ModulePinTuan-layout-101'])
Z([[2,'>'],[[6],[[6],[[7],[3,'m']],[3,'ProList']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[6],[[7],[3,'m']],[3,'ProList']],[3,'length']],[1,2]])
Z([3,'navTo'])
Z([3,'activity-more v-border'])
Z([3,'PinTuanIndex'])
Z([3,'none'])
Z([[2,'>'],[[6],[[6],[[7],[3,'m']],[3,'ProList']],[3,'length']],[1,0]])
Z([[2,'=='],[[6],[[6],[[7],[3,'m']],[3,'ProList']],[3,'length']],[1,0]])
Z([3,'ModulePinTuan-layout-102'])
Z([3,'ModulePinTuan-layout-103'])
})(__WXML_GLOBAL__.ops_cached.$gwx_54);return __WXML_GLOBAL__.ops_cached.$gwx_54
}
function gz$gwx_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx_55)return __WXML_GLOBAL__.ops_cached.$gwx_55
__WXML_GLOBAL__.ops_cached.$gwx_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleProductList'])
Z([[9],[[8],'m',[[7],[3,'m']]],[[8],'globaldata',[[7],[3,'globaldata']]]])
Z([a,[3,'ModuleProductList-layout-'],[[6],[[7],[3,'m']],[3,'Layout']]])
Z([3,'ModuleProductList-layout-101'])
Z([3,'idx'])
Z([[6],[[7],[3,'m']],[3,'ProList']])
Z(z[4])
Z([3,'pro-item'])
Z([3,'navTo'])
Z([3,'proWrapper flexBox flexDirectionRow boxSizingBox'])
Z([[12],[[6],[[7],[3,'layoutFun']],[3,'getDetailNavData']],[[5],[[6],[[7],[3,'item']],[3,'IsFullReduction']]]])
Z([[6],[[7],[3,'item']],[3,'ProductID']])
Z([3,'ProductDetail'])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'IsFullReduction']],[[2,'=='],[[6],[[7],[3,'item']],[3,'IsFullReduction']],[1,1]]])
Z([3,'proTextMain flex1 boxSizingBox'])
Z([[12],[[6],[[7],[3,'layoutFun']],[3,'hasItem']],[[5],[[5],[[6],[[7],[3,'m']],[3,'ShowItems']]],[1,'name']]])
Z([[12],[[6],[[7],[3,'layoutFun']],[3,'hasItem']],[[5],[[5],[[6],[[7],[3,'m']],[3,'ShowItems']]],[1,'market_price']]])
Z([3,' flexBox flexJustifyBetween flexAlign'])
Z([[2,'||'],[[12],[[6],[[7],[3,'layoutFun']],[3,'hasItem']],[[5],[[5],[[6],[[7],[3,'m']],[3,'ShowItems']]],[1,'price']]],[[2,'=='],[[6],[[7],[3,'item']],[3,'IsLimitedDiscount']],[1,1]]])
Z([3,'pro-price flexBox flexAlign'])
Z([[12],[[6],[[7],[3,'layoutFun']],[3,'hasItem']],[[5],[[5],[[6],[[7],[3,'m']],[3,'ShowItems']]],[1,'price']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'IsLimitedDiscount']],[1,1]])
Z([[12],[[6],[[7],[3,'layoutFun']],[3,'hasItem']],[[5],[[5],[[6],[[7],[3,'m']],[3,'ShowItems']]],[1,'sold']]])
Z([1,false])
Z([3,'ModuleProductList-layout-102'])
Z(z[5])
Z([3,'ProductID'])
Z(z[8])
Z([3,'proWrapper flexBox flexDirectionColumn boxSizingBox'])
Z(z[10])
Z(z[11])
Z(z[12])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'IsFullReduction']],[1,1]])
Z([a,[3,'proTextMain boxSizingBox '],[[2,'?:'],[[2,'>'],[[6],[[6],[[7],[3,'m']],[3,'ShowItems']],[3,'length']],[1,0]],[1,''],[1,'no-data']]])
Z(z[15])
Z(z[16])
Z([3,'proText flexBox flexJustifyBetween flexAlign'])
Z(z[18])
Z(z[19])
Z(z[20])
Z(z[21])
Z(z[22])
Z(z[23])
Z([3,'ModuleProductList-layout-103'])
Z(z[5])
Z(z[26])
Z(z[8])
Z([3,'pro-item boxSizingBox'])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[28])
Z(z[32])
Z([a,z[33][1],z[33][2]])
Z(z[15])
Z(z[22])
Z(z[16])
Z(z[18])
Z(z[19])
Z(z[20])
Z(z[21])
Z(z[23])
Z([3,'ModuleProductList-layout-104'])
Z(z[5])
Z(z[26])
Z(z[8])
Z(z[7])
Z(z[10])
Z(z[11])
Z(z[12])
Z([3,'proWrapper flexDirectionColumn flexBox boxSizingBox'])
Z(z[32])
Z([a,[3,'proTextMain flex1 boxSizingBox '],z[33][2]])
Z(z[15])
Z([3,'proTextMainCon flexBox flexJustifyBetween flexAlign'])
Z([3,'pro-main flexBox flexAlign'])
Z(z[20])
Z(z[21])
Z(z[16])
Z(z[22])
Z(z[23])
})(__WXML_GLOBAL__.ops_cached.$gwx_55);return __WXML_GLOBAL__.ops_cached.$gwx_55
}
function gz$gwx_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx_56)return __WXML_GLOBAL__.ops_cached.$gwx_56
__WXML_GLOBAL__.ops_cached.$gwx_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleSearch'])
Z([[2,'==='],[[6],[[7],[3,'globaldata']],[3,'StoreSetting']],[1,'1']])
Z([[2,'!='],[[6],[[7],[3,'m']],[3,'HidePlaceHolder']],[1,1]])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_56);return __WXML_GLOBAL__.ops_cached.$gwx_56
}
function gz$gwx_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx_57)return __WXML_GLOBAL__.ops_cached.$gwx_57
__WXML_GLOBAL__.ops_cached.$gwx_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleSecKill'])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'101']],[[2,'!=='],[[6],[[6],[[7],[3,'m']],[3,'ProList']],[3,'length']],[1,0]]])
Z([3,'layout-101'])
Z([[6],[[7],[3,'m']],[3,'ProList']])
Z([[2,'=='],[[6],[[6],[[7],[3,'m']],[3,'ActivityInfo']],[3,'status']],[1,1]])
Z([[2,'=='],[[6],[[6],[[7],[3,'m']],[3,'ActivityInfo']],[3,'status']],[1,2]])
Z([[2,'=='],[[6],[[6],[[7],[3,'m']],[3,'ActivityInfo']],[3,'status']],[1,3]])
Z([3,'activity-content'])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'m']],[3,'ProList']],[3,'length']],[1,2]],[[2,'=='],[[6],[[6],[[7],[3,'m']],[3,'ProList']],[3,'length']],[1,4]]])
Z([3,'idx'])
Z([3,'item'])
Z(z[3])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'navTo'])
Z([3,'sec_activity_item'])
Z([[12],[[6],[[7],[3,'secKill']],[3,'getDetailLinkData']],[[5],[[5],[[5],[[5],[[5],[[6],[[6],[[7],[3,'m']],[3,'ActivityInfo']],[3,'status']]],[[6],[[7],[3,'item']],[3,'amount']]],[[6],[[7],[3,'item']],[3,'id']]],[[6],[[7],[3,'item']],[3,'sk_product_id']]],[[6],[[7],[3,'item']],[3,'productId']]]])
Z([[12],[[6],[[7],[3,'secKill']],[3,'getDetailLinkType']],[[5],[[5],[[6],[[6],[[7],[3,'m']],[3,'ActivityInfo']],[3,'status']]],[[6],[[7],[3,'item']],[3,'amount']]]])
Z([3,'sec_info'])
Z(z[5])
Z(z[4])
Z([[2,'=='],[[6],[[6],[[7],[3,'m']],[3,'ProList']],[3,'length']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_57);return __WXML_GLOBAL__.ops_cached.$gwx_57
}
function gz$gwx_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx_58)return __WXML_GLOBAL__.ops_cached.$gwx_58
__WXML_GLOBAL__.ops_cached.$gwx_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleServiceList'])
Z([[9],[[8],'m',[[7],[3,'m']]],[[8],'globaldata',[[7],[3,'globaldata']]]])
Z([a,[3,'ModuleServiceList-layout-'],[[6],[[7],[3,'m']],[3,'Layout']]])
Z([3,'ModuleServiceList-layout-101'])
Z([[6],[[7],[3,'m']],[3,'ProList']])
Z([3,'ServiceID'])
Z([3,'pro-item'])
Z([3,'navTo'])
Z([3,'proWrapper flexBox flexDirectionRow boxSizingBox'])
Z([[6],[[7],[3,'item']],[3,'ServiceID']])
Z([3,'ServiceDetail'])
Z([3,'proTextMain flex1 boxSizingBox'])
Z([[12],[[6],[[7],[3,'layoutFun']],[3,'hasItem']],[[5],[[5],[[6],[[7],[3,'m']],[3,'ShowItems']]],[1,'name']]])
Z([[12],[[6],[[7],[3,'layoutFun']],[3,'hasItem']],[[5],[[5],[[6],[[7],[3,'m']],[3,'ShowItems']]],[1,'price']]])
Z([1,false])
Z([3,'ModuleServiceList-layout-102'])
Z(z[4])
Z(z[5])
Z(z[7])
Z([3,'proWrapper flexBox flexDirectionColumn boxSizingBox'])
Z(z[9])
Z(z[10])
Z([a,[3,'proTextMain boxSizingBox '],[[2,'?:'],[[2,'>'],[[6],[[6],[[7],[3,'m']],[3,'ShowItems']],[3,'length']],[1,0]],[1,''],[1,'no-data']]])
Z(z[12])
Z(z[13])
Z(z[14])
Z([3,'ModuleServiceList-layout-103'])
Z(z[4])
Z(z[5])
Z(z[7])
Z([3,'pro-item boxSizingBox'])
Z(z[9])
Z(z[10])
Z([a,z[22][1],z[22][2]])
Z(z[12])
Z(z[13])
Z(z[14])
Z([3,'ModuleServiceList-layout-104'])
Z(z[4])
Z(z[5])
Z(z[7])
Z(z[6])
Z(z[9])
Z(z[10])
Z([a,[3,'proTextMain flex1 boxSizingBox '],z[22][2]])
Z(z[12])
Z(z[13])
Z(z[14])
})(__WXML_GLOBAL__.ops_cached.$gwx_58);return __WXML_GLOBAL__.ops_cached.$gwx_58
}
function gz$gwx_59(){
if( __WXML_GLOBAL__.ops_cached.$gwx_59)return __WXML_GLOBAL__.ops_cached.$gwx_59
__WXML_GLOBAL__.ops_cached.$gwx_59=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleShopWindow'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'102']])
Z([[2,'+'],[[2,'+'],[1,'layout-'],[[6],[[7],[3,'m']],[3,'Layout']]],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'m']],[3,'PaddingType']],[1,1]],[1,' showline'],[1,' showpadding']]])
Z([[2,'>'],[[6],[[6],[[7],[3,'m']],[3,'Links']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'link'])
Z([[6],[[7],[3,'m']],[3,'Links']])
Z(z[4])
Z([[2,'>'],[[7],[3,'index']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'103']])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'104']])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'105']])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'106']])
Z(z[2])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[4])
Z([[2,'<'],[[7],[3,'index']],[1,2]])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[4])
Z([[2,'>'],[[7],[3,'index']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'Layout']],[1,'107']])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[4])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx_59);return __WXML_GLOBAL__.ops_cached.$gwx_59
}
function gz$gwx_60(){
if( __WXML_GLOBAL__.ops_cached.$gwx_60)return __WXML_GLOBAL__.ops_cached.$gwx_60
__WXML_GLOBAL__.ops_cached.$gwx_60=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleSlide'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ShowType']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ShowType']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_60);return __WXML_GLOBAL__.ops_cached.$gwx_60
}
function gz$gwx_61(){
if( __WXML_GLOBAL__.ops_cached.$gwx_61)return __WXML_GLOBAL__.ops_cached.$gwx_61
__WXML_GLOBAL__.ops_cached.$gwx_61=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleTest'])
})(__WXML_GLOBAL__.ops_cached.$gwx_61);return __WXML_GLOBAL__.ops_cached.$gwx_61
}
function gz$gwx_62(){
if( __WXML_GLOBAL__.ops_cached.$gwx_62)return __WXML_GLOBAL__.ops_cached.$gwx_62
__WXML_GLOBAL__.ops_cached.$gwx_62=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleTitle'])
Z([3,'navTo'])
Z([3,'title-container'])
Z([[6],[[7],[3,'m']],[3,'LinkVal']])
Z([[6],[[7],[3,'m']],[3,'LinkID']])
Z([[6],[[7],[3,'m']],[3,'LinkType']])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'BgType']],[1,0]])
Z([[6],[[7],[3,'m']],[3,'Icon']])
Z([[2,'>'],[[6],[[7],[3,'m']],[3,'BgType']],[1,0]])
Z([[2,'&&'],[[6],[[7],[3,'m']],[3,'ShowMoreBtn']],[[2,'=='],[[6],[[7],[3,'m']],[3,'BgType']],[1,0]]])
Z([[2,'&&'],[[6],[[7],[3,'m']],[3,'ShowUnderLine']],[[2,'=='],[[6],[[7],[3,'m']],[3,'BgType']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_62);return __WXML_GLOBAL__.ops_cached.$gwx_62
}
function gz$gwx_63(){
if( __WXML_GLOBAL__.ops_cached.$gwx_63)return __WXML_GLOBAL__.ops_cached.$gwx_63
__WXML_GLOBAL__.ops_cached.$gwx_63=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ModuleVideo'])
Z([3,'layout-101'])
Z([[6],[[7],[3,'m']],[3,'WxappShow']])
Z([[2,'!='],[[6],[[7],[3,'m']],[3,'VideoText']],[1,'']])
})(__WXML_GLOBAL__.ops_cached.$gwx_63);return __WXML_GLOBAL__.ops_cached.$gwx_63
}
function gz$gwx_64(){
if( __WXML_GLOBAL__.ops_cached.$gwx_64)return __WXML_GLOBAL__.ops_cached.$gwx_64
__WXML_GLOBAL__.ops_cached.$gwx_64=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[6],[[7],[3,'copyrightInfo']],[3,'Enable']],[1,1]])
Z([[2,'?:'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'copyrightInfo']],[3,'Default']],[1,'1']],[[2,'=='],[[6],[[7],[3,'appinfo']],[3,'Industry']],[1,'shoplite']]],[[2,'=='],[[6],[[7],[3,'appinfo']],[3,'IsZhiYing']],[1,'1']]],[1,'navTo'],[1,'']])
Z([a,[3,'copyright '],[[6],[[7],[3,'copyrightInfo']],[3,'copyrightClassName']]])
Z([3,'Copyright'])
Z([[2,'=='],[[6],[[7],[3,'copyrightInfo']],[3,'ShowIcon']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_64);return __WXML_GLOBAL__.ops_cached.$gwx_64
}
function gz$gwx_65(){
if( __WXML_GLOBAL__.ops_cached.$gwx_65)return __WXML_GLOBAL__.ops_cached.$gwx_65
__WXML_GLOBAL__.ops_cached.$gwx_65=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'customform'])
Z([[2,'==='],[[6],[[7],[3,'info']],[3,'Param_ShowStyle']],[1,'2']])
Z([3,'onCustomFormSubmit'])
Z(z[0])
Z([[6],[[7],[3,'customformdata']],[3,'FormID']])
Z([[6],[[7],[3,'customformdata']],[3,'showtitle']])
Z([3,'field'])
Z([[6],[[7],[3,'customformdata']],[3,'fields']])
Z([3,'unique'])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'IsShow']],[1,'1']])
Z([a,[[2,'?:'],[[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'6']],[1,'field-item-6'],[1,'field-item-style-02']],[3,' field-type-'],[[6],[[7],[3,'field']],[3,'FieldType']]])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'IsRequire']],[1,'1']])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'1']])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'2']])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'3']])
Z([3,'item'])
Z([[6],[[7],[3,'field']],[3,'Values']])
Z(z[8])
Z([[2,'==='],[[6],[[7],[3,'field']],[3,'ValueType']],[1,1]])
Z(z[18])
Z([[2,'!=='],[[6],[[7],[3,'field']],[3,'ValueType']],[1,1]])
Z(z[20])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'4']])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'5']])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'6']])
Z([3,'onChooseImg'])
Z([3,'upload-image'])
Z([a,[3,'col'],[[6],[[7],[3,'field']],[3,'ID']]])
Z([[2,'!'],[[6],[[7],[3,'customformvalues']],[[2,'+'],[[2,'+'],[1,'col'],[[6],[[7],[3,'field']],[3,'ID']]],[1,'valimg']]]])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'7']])
Z([[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'8']])
Z(z[2])
Z(z[0])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z([a,[[2,'?:'],[[2,'=='],[[6],[[7],[3,'field']],[3,'FieldType']],[1,'6']],[1,'field-item-6'],[1,'field-item']],z[10][2],z[10][3]])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[8])
Z(z[18])
Z(z[18])
Z(z[20])
Z(z[20])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z([a,z[27][1],z[27][2]])
Z(z[28])
Z(z[29])
Z(z[30])
})(__WXML_GLOBAL__.ops_cached.$gwx_65);return __WXML_GLOBAL__.ops_cached.$gwx_65
}
function gz$gwx_66(){
if( __WXML_GLOBAL__.ops_cached.$gwx_66)return __WXML_GLOBAL__.ops_cached.$gwx_66
__WXML_GLOBAL__.ops_cached.$gwx_66=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[6],[[7],[3,'floatLayerInfo']],[3,'Enable']],[1,1]])
Z([a,[3,'floatPlug '],[[2,'?:'],[[7],[3,'showTopFlag']],[1,'active'],[1,'']]])
Z([a,[3,'bottom:'],[[2,'?:'],[[2,'&&'],[[2,'>='],[[7],[3,'btnCount']],[1,2]],[[2,'!'],[[7],[3,'hasBottomBar']]]],[1,40],[[2,'?:'],[[7],[3,'isOrderDetail']],[[2,'?:'],[[7],[3,'isIphoneXFlag']],[1,286],[1,220]],[[2,'?:'],[[7],[3,'isIphoneXFlag']],[1,198],[1,130]]]],[3,'rpx']])
Z([[2,'&&'],[[2,'&&'],[[2,'||'],[[6],[[6],[[7],[3,'floatLayerInfo']],[3,'businessCardInfo']],[3,'admin']],[[6],[[6],[[7],[3,'floatLayerInfo']],[3,'businessCardInfo']],[3,'user']]],[[6],[[7],[3,'floatLayerInfo']],[3,'showBusinessCard']]],[[2,'!'],[[6],[[7],[3,'floatLayerInfo']],[3,'checkVersions']]]])
Z([[2,'?:'],[[6],[[6],[[7],[3,'floatLayerInfo']],[3,'businessCardInfo']],[3,'admin']],[1,'goToBusinessCardDetail'],[1,'goToCardList']])
Z([3,'businessCard'])
Z([[6],[[6],[[7],[3,'floatLayerInfo']],[3,'businessCardInfo']],[3,'admin']])
Z([[6],[[6],[[7],[3,'floatLayerInfo']],[3,'businessCardInfo']],[3,'user']])
Z([[2,'=='],[[6],[[7],[3,'floatLayerInfo']],[3,'EnableGoToHomeIndex']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'floatLayerInfo']],[3,'EnableCustomService']],[1,1]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'floatLayerInfo']],[3,'EnableTel']],[1,1]],[[2,'=='],[[6],[[7],[3,'floatLayerInfo']],[3,'EnableNormalBtnShow']],[1,1]]])
Z([[2,'=='],[[6],[[7],[3,'floatLayerInfo']],[3,'EnableNormalBtnShow']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_66);return __WXML_GLOBAL__.ops_cached.$gwx_66
}
function gz$gwx_67(){
if( __WXML_GLOBAL__.ops_cached.$gwx_67)return __WXML_GLOBAL__.ops_cached.$gwx_67
__WXML_GLOBAL__.ops_cached.$gwx_67=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showAuthGetUserInfoBtn']])
Z([[7],[3,'isIOS']])
Z([[7],[3,'isAndroid']])
})(__WXML_GLOBAL__.ops_cached.$gwx_67);return __WXML_GLOBAL__.ops_cached.$gwx_67
}
function gz$gwx_68(){
if( __WXML_GLOBAL__.ops_cached.$gwx_68)return __WXML_GLOBAL__.ops_cached.$gwx_68
__WXML_GLOBAL__.ops_cached.$gwx_68=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'modules'])
Z([3,'idx'])
Z([3,'m'])
Z([[7],[3,'modules']])
Z([3,'ModuleID'])
Z([[9],[[8],'m',[[7],[3,'m']]],[[8],'globaldata',[[7],[3,'globaldata']]]])
Z([3,'module-for'])
Z(z[6])
Z([a,[3,'module-item '],[[6],[[7],[3,'m']],[3,'ModuleType']],[3,' '],[[2,'?:'],[[6],[[7],[3,'m']],[3,'FloatTop']],[1,'fixed-top'],[1,'']],[3,' '],[[2,'?:'],[[6],[[7],[3,'m']],[3,'PaddingLR']],[1,'padding-lr'],[1,'']],[3,' '],[[2,'?:'],[[6],[[7],[3,'m']],[3,'PaddingTB']],[1,'padding-tb'],[1,'']]])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleTest']])
Z(z[5])
Z([3,'ModuleTest'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleSearch']])
Z(z[5])
Z([3,'ModuleSearch'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleVideo']])
Z(z[5])
Z([3,'ModuleVideo'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleTitle']])
Z(z[5])
Z([3,'ModuleTitle'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleSlide']])
Z(z[5])
Z([3,'ModuleSlide'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleLine']])
Z(z[5])
Z([3,'ModuleLine'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleShopWindow']])
Z(z[5])
Z([3,'ModuleShopWindow'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleLink']])
Z(z[5])
Z([3,'ModuleLink'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleButton']])
Z(z[5])
Z([3,'ModuleButton'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleCustomForm']])
Z(z[5])
Z([3,'ModuleCustomForm'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleProductList']])
Z(z[5])
Z([3,'ModuleProductList'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleServiceList']])
Z(z[5])
Z([3,'ModuleServiceList'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleImageText']])
Z(z[5])
Z([3,'ModuleImageText'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleMap']])
Z(z[5])
Z([3,'ModuleMap'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleNewsList']])
Z(z[5])
Z([3,'ModuleNewsList'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleCoupon']])
Z(z[5])
Z([3,'ModuleCoupon'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModulePinTuan']])
Z(z[5])
Z([3,'ModulePinTuan'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleSecKill']])
Z(z[5])
Z([3,'ModuleSecKill'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleNavigationCall']])
Z(z[5])
Z([3,'ModuleNavigationCall'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModulePay']])
Z(z[5])
Z([3,'ModulePay'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleFullReduction']])
Z(z[5])
Z([3,'ModuleFullReduction'])
Z([[2,'=='],[[6],[[7],[3,'m']],[3,'ModuleType']],[1,'ModuleBargain']])
Z(z[5])
Z([3,'ModuleBargain'])
})(__WXML_GLOBAL__.ops_cached.$gwx_68);return __WXML_GLOBAL__.ops_cached.$gwx_68
}
function gz$gwx_69(){
if( __WXML_GLOBAL__.ops_cached.$gwx_69)return __WXML_GLOBAL__.ops_cached.$gwx_69
__WXML_GLOBAL__.ops_cached.$gwx_69=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'showPopupFromShare']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_69);return __WXML_GLOBAL__.ops_cached.$gwx_69
}
function gz$gwx_70(){
if( __WXML_GLOBAL__.ops_cached.$gwx_70)return __WXML_GLOBAL__.ops_cached.$gwx_70
__WXML_GLOBAL__.ops_cached.$gwx_70=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_70);return __WXML_GLOBAL__.ops_cached.$gwx_70
}
function gz$gwx_71(){
if( __WXML_GLOBAL__.ops_cached.$gwx_71)return __WXML_GLOBAL__.ops_cached.$gwx_71
__WXML_GLOBAL__.ops_cached.$gwx_71=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wxParseVideo'])
Z([3,'wxParseImg'])
Z([3,'WxEmojiView'])
Z([3,'wxParse'])
Z([[7],[3,'wxParseData']])
Z([3,''])
Z([[8],'item',[[7],[3,'item']]])
Z([3,'wxParse0'])
Z(z[7])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'node']],[1,'element']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'button']])
Z([3,'item'])
Z([[6],[[7],[3,'item']],[3,'nodes']])
Z(z[5])
Z(z[6])
Z([3,'wxParse1'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'li']])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[15])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'video']])
Z(z[6])
Z(z[0])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'img']])
Z(z[6])
Z(z[1])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'a']])
Z([3,'wxParseTagATap'])
Z([a,[3,'wxParse-inline '],[[6],[[7],[3,'item']],[3,'classStr']],[3,' wxParse-'],[[6],[[7],[3,'item']],[3,'tag']]])
Z([[6],[[6],[[7],[3,'item']],[3,'attr']],[3,'href']])
Z([[6],[[7],[3,'item']],[3,'styleStr']])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[15])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'table']])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[15])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tagType']],[1,'block']])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[15])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[15])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'node']],[1,'text']])
Z(z[6])
Z(z[2])
Z(z[15])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z([3,'wxParse2'])
Z(z[16])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[65])
Z(z[22])
Z(z[6])
Z(z[0])
Z(z[25])
Z(z[6])
Z(z[1])
Z(z[28])
Z(z[29])
Z([a,z[30][1],z[30][2],z[30][3],z[30][4]])
Z(z[31])
Z(z[32])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[65])
Z(z[44])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[65])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[65])
Z(z[55])
Z(z[6])
Z(z[2])
Z(z[65])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z([3,'wxParse3'])
Z(z[16])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[109])
Z(z[22])
Z(z[6])
Z(z[0])
Z(z[25])
Z(z[6])
Z(z[1])
Z(z[28])
Z(z[29])
Z([a,z[30][1],z[30][2],z[30][3],z[30][4]])
Z(z[31])
Z(z[32])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[109])
Z(z[44])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[109])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[109])
Z(z[55])
Z(z[6])
Z(z[2])
Z(z[109])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z([3,'wxParse4'])
Z(z[16])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[153])
Z(z[22])
Z(z[6])
Z(z[0])
Z(z[25])
Z(z[6])
Z(z[1])
Z(z[28])
Z(z[29])
Z([a,z[30][1],z[30][2],z[30][3],z[30][4]])
Z(z[31])
Z(z[32])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[153])
Z(z[44])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[153])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[153])
Z(z[55])
Z(z[6])
Z(z[2])
Z(z[153])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z([3,'wxParse5'])
Z(z[16])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[197])
Z(z[22])
Z(z[6])
Z(z[0])
Z(z[25])
Z(z[6])
Z(z[1])
Z(z[28])
Z(z[29])
Z([a,z[30][1],z[30][2],z[30][3],z[30][4]])
Z(z[31])
Z(z[32])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[197])
Z(z[44])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[197])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[197])
Z(z[55])
Z(z[6])
Z(z[2])
Z(z[197])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z([3,'wxParse6'])
Z(z[16])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[241])
Z(z[22])
Z(z[6])
Z(z[0])
Z(z[25])
Z(z[6])
Z(z[1])
Z(z[28])
Z(z[29])
Z([a,z[30][1],z[30][2],z[30][3],z[30][4]])
Z(z[31])
Z(z[32])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[241])
Z(z[44])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[241])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[241])
Z(z[55])
Z(z[6])
Z(z[2])
Z(z[241])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z([3,'wxParse7'])
Z(z[16])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[285])
Z(z[22])
Z(z[6])
Z(z[0])
Z(z[25])
Z(z[6])
Z(z[1])
Z(z[28])
Z(z[29])
Z([a,z[30][1],z[30][2],z[30][3],z[30][4]])
Z(z[31])
Z(z[32])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[285])
Z(z[44])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[285])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[285])
Z(z[55])
Z(z[6])
Z(z[2])
Z(z[285])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z([3,'wxParse8'])
Z(z[16])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[329])
Z(z[22])
Z(z[6])
Z(z[0])
Z(z[25])
Z(z[6])
Z(z[1])
Z(z[28])
Z(z[29])
Z([a,z[30][1],z[30][2],z[30][3],z[30][4]])
Z(z[31])
Z(z[32])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[329])
Z(z[44])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[329])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[329])
Z(z[55])
Z(z[6])
Z(z[2])
Z(z[329])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z([3,'wxParse9'])
Z(z[16])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[373])
Z(z[22])
Z(z[6])
Z(z[0])
Z(z[25])
Z(z[6])
Z(z[1])
Z(z[28])
Z(z[29])
Z([a,z[30][1],z[30][2],z[30][3],z[30][4]])
Z(z[31])
Z(z[32])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[373])
Z(z[44])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[373])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[373])
Z(z[55])
Z(z[6])
Z(z[2])
Z(z[373])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z([3,'wxParse10'])
Z(z[16])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[417])
Z(z[22])
Z(z[6])
Z(z[0])
Z(z[25])
Z(z[6])
Z(z[1])
Z(z[28])
Z(z[29])
Z([a,z[30][1],z[30][2],z[30][3],z[30][4]])
Z(z[31])
Z(z[32])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[417])
Z(z[44])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[417])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[417])
Z(z[55])
Z(z[6])
Z(z[2])
Z(z[417])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z([3,'wxParse11'])
Z(z[16])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[461])
Z(z[22])
Z(z[6])
Z(z[0])
Z(z[25])
Z(z[6])
Z(z[1])
Z(z[28])
Z(z[29])
Z([a,z[30][1],z[30][2],z[30][3],z[30][4]])
Z(z[31])
Z(z[32])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[461])
Z(z[44])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[461])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[461])
Z(z[55])
Z(z[6])
Z(z[2])
Z(z[461])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z([3,'wxParse12'])
Z(z[16])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[505])
Z(z[22])
Z(z[6])
Z(z[0])
Z(z[25])
Z(z[6])
Z(z[1])
Z(z[28])
Z(z[29])
Z([a,z[30][1],z[30][2],z[30][3],z[30][4]])
Z(z[31])
Z(z[32])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[505])
Z(z[44])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[505])
Z(z[11])
Z(z[12])
Z(z[5])
Z(z[6])
Z(z[505])
Z(z[55])
Z(z[6])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_71);return __WXML_GLOBAL__.ops_cached.$gwx_71
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"m_./pages/template/ModuleBargain.wxml:ModuleBargain":np_0,"m_./pages/template/ModuleFullReduction.wxml:fullReduction":np_1,"m_./pages/template/ModuleImageText.wxml:extendMethod":np_2,"m_./pages/template/ModuleMap.wxml:map":np_3,"m_./pages/template/ModuleNavigationCall.wxml:layoutFun":np_4,"m_./pages/template/ModulePinTuan.wxml:layoutFun":np_5,"m_./pages/template/ModuleProductList.wxml:layoutFun":np_6,"m_./pages/template/ModuleSecKill.wxml:secKill":np_7,"m_./pages/template/ModuleServiceList.wxml:layoutFun":np_8,"m_./pages/template/ModuleSlide.wxml:extendMethod":np_9,"m_./pages/template/ModuleVideo.wxml:extendMethod":np_10,"m_./pages/template/customform.wxml:tools":np_11,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./pages/template/ModuleBargain.wxml']={};
f_['./pages/template/ModuleBargain.wxml']['ModuleBargain'] =nv_require("m_./pages/template/ModuleBargain.wxml:ModuleBargain");
function np_0(){var nv_module={nv_exports:{}};var nv_getDetailNavData = (function (nv_ActivityID,nv_ID){var nv_navData = ({});nv_navData.nv_activityId = nv_ActivityID;nv_navData.nv_id = nv_ID;return(nv_JSON.nv_stringify(nv_navData))});nv_module.nv_exports = ({nv_getDetailNavData:nv_getDetailNavData,});return nv_module.nv_exports;}

f_['./pages/template/ModuleFullReduction.wxml']={};
f_['./pages/template/ModuleFullReduction.wxml']['fullReduction'] =nv_require("m_./pages/template/ModuleFullReduction.wxml:fullReduction");
function np_1(){var nv_module={nv_exports:{}};var nv_getDetailNavData = (function (nv_ActivityID){var nv_navData = ({});nv_navData.nv_ActivityID = nv_ActivityID;nv_navData.nv_fullID = '1';return(nv_JSON.nv_stringify(nv_navData))});var nv_hasItem = (function (nv_items,nv_val){return(nv_items.nv_indexOf(nv_val) > -1)});nv_module.nv_exports = ({nv_hasItem:nv_hasItem,nv_getDetailNavData:nv_getDetailNavData,});return nv_module.nv_exports;}

f_['./pages/template/ModuleImageText.wxml']={};
f_['./pages/template/ModuleImageText.wxml']['extendMethod'] =nv_require("m_./pages/template/ModuleImageText.wxml:extendMethod");
function np_2(){var nv_module={nv_exports:{}};var nv_replaceQuote = (function (nv_text){if (nv_text){var nv_reg = nv_getRegExp('\x22',"gi");nv_text = nv_text.nv_replace(nv_reg,"\x27");nv_reg = nv_getRegExp('\x26ldquo;',"gi");nv_text = nv_text.nv_replace(nv_reg,"“");nv_reg = nv_getRegExp('\x26rdquo;',"gi");nv_text = nv_text.nv_replace(nv_reg,"”");nv_reg = nv_getRegExp('\x26mdash;',"gi");nv_text = nv_text.nv_replace(nv_reg,"—");nv_reg = nv_getRegExp('\x26nbsp;',"gi");nv_text = nv_text.nv_replace(nv_reg,"\x3cspan style\x3d\x27width:5px;display:inline-block\x27\x3e\x3c/span\x3e")};return(nv_text)});nv_module.nv_exports = ({nv_replaceQuote:nv_replaceQuote,});return nv_module.nv_exports;}

f_['./pages/template/ModuleMap.wxml']={};
f_['./pages/template/ModuleMap.wxml']['map'] =nv_require("m_./pages/template/ModuleMap.wxml:map");
function np_3(){var nv_module={nv_exports:{}};var nv_getMarkers = (function (nv_longitude,nv_latitude,nv_markerName){return([({nv_id:0,nv_latitude:nv_latitude,nv_longitude:nv_longitude,nv_callout:({nv_display:'ALWAYS',nv_content:nv_markerName,nv_padding:8,nv_bgColor:'white',nv_color:'#000',nv_fontSize:14,nv_textAlign:'center',}),})])});nv_module.nv_exports = ({nv_getMarkers:nv_getMarkers,});return nv_module.nv_exports;}

f_['./pages/template/ModuleNavigationCall.wxml']={};
f_['./pages/template/ModuleNavigationCall.wxml']['layoutFun'] =nv_require("m_./pages/template/ModuleNavigationCall.wxml:layoutFun");
function np_4(){var nv_module={nv_exports:{}};var nv_hasItem = (function (nv_items,nv_val){return(nv_items.nv_indexOf(nv_val) > -1)});nv_module.nv_exports = ({nv_hasItem:nv_hasItem,});return nv_module.nv_exports;}

f_['./pages/template/ModulePinTuan.wxml']={};
f_['./pages/template/ModulePinTuan.wxml']['layoutFun'] =nv_require("m_./pages/template/ModulePinTuan.wxml:layoutFun");
function np_5(){var nv_module={nv_exports:{}};var nv_parseStatus = (function (nv_pinTuan,nv_storeNum){if (nv_pinTuan.nv_status == 1 && nv_storeNum != 0)return(1); else if (nv_pinTuan.nv_status == 2 && nv_storeNum > 0)return(2); else if (nv_pinTuan.nv_status == 2 && nv_storeNum == 0)return(3); else return(0)});var nv_getDetailNav = (function (nv_pinTuan,nv_storeNum){if (nv_pinTuan.nv_status == 2 && nv_storeNum == 0 || nv_pinTuan.nv_status == 1 || nv_pinTuan.nv_status == 3)return(0); else return(1)});var nv_getKaiTuanClass = (function (nv_pinTuan,nv_storeNum){var nv_status = nv_parseStatus(nv_pinTuan,nv_storeNum);switch(nv_status){case 1:return('statusOne');case 2:return('statusTwo');case 3:return('statusThree');default:return('statusThree');}});var nv_getKaiTuanDesc = (function (nv_pinTuan,nv_storeNum){var nv_status = nv_parseStatus(nv_pinTuan,nv_storeNum);switch(nv_status){case 1:return('未开始');case 2:return('去开团');case 3:return('已抢完');default:return('已结束');}});var nv_getDetailNavType = (function (nv_pinTuan,nv_storeNum){var nv_type = nv_getDetailNav(nv_pinTuan,nv_storeNum);switch(nv_type){case 1:return('PinTuanDetail');default:return('ProductDetail');}});var nv_getDetailNavID = (function (nv_pinTuan,nv_item){var nv_type = nv_getDetailNav(nv_pinTuan,nv_item.nv_store_num);switch(nv_type){case 1:return(nv_item.nv_id);default:return(nv_item.nv_product_id);}});var nv_getDetailNavData = (function (nv_pinTuan,nv_item){var nv_navData = ({});if (nv_pinTuan && nv_item){nv_navData.nv_pintuan_id = nv_pinTuan.nv_id;nv_navData.nv_proid = nv_item.nv_product_id;nv_navData.nv_buycount = nv_item.nv_buy_limit_num;nv_navData.nv_img = nv_item.nv_img_src;nv_navData.nv_price = nv_item.nv_sale_price;nv_navData.nv_storenum = nv_item.nv_store_num};return(nv_JSON.nv_stringify(nv_navData))});nv_module.nv_exports = ({nv_getKaiTuanClass:nv_getKaiTuanClass,nv_getKaiTuanDesc:nv_getKaiTuanDesc,nv_getDetailNavType:nv_getDetailNavType,nv_getDetailNavID:nv_getDetailNavID,nv_getDetailNavData:nv_getDetailNavData,});return nv_module.nv_exports;}

f_['./pages/template/ModuleProductList.wxml']={};
f_['./pages/template/ModuleProductList.wxml']['layoutFun'] =nv_require("m_./pages/template/ModuleProductList.wxml:layoutFun");
function np_6(){var nv_module={nv_exports:{}};var nv_isCard = (function (nv_showType){return(nv_showType == 1 ? "card":"")});var nv_hasItem = (function (nv_items,nv_val){return(nv_items.nv_indexOf(nv_val) > -1)});var nv_buyBtnStyle = (function (nv_val){if (nv_val == 3)return("m-icon-iconfont_cart"); else return("m-icon-iconfont_cart-fill")});var nv_getSwiperGroupNum = (function (nv_numPerGroup,nv_numCount){var nv_numList = [];if (nv_numCount == 0)nv_numList;;if (nv_numPerGroup <= 0)nv_numPerGroup = 1;;var nv_groupNum = Math.nv_ceil(nv_numCount / nv_numPerGroup);for(var nv_i = 0;nv_i < nv_groupNum;nv_i++){nv_numList.nv_push(nv_i)};return(nv_numList)});var nv_getDetailNavData = (function (nv_IsFullReduction){var nv_navData = ({});if (nv_IsFullReduction == '1'){nv_navData.nv_fullID = '1'};return(nv_JSON.nv_stringify(nv_navData))});nv_module.nv_exports = ({nv_isCard:nv_isCard,nv_hasItem:nv_hasItem,nv_buyBtnStyle:nv_buyBtnStyle,nv_getSwiperGroupNum:nv_getSwiperGroupNum,nv_getDetailNavData:nv_getDetailNavData,});return nv_module.nv_exports;}

f_['./pages/template/ModuleSecKill.wxml']={};
f_['./pages/template/ModuleSecKill.wxml']['secKill'] =nv_require("m_./pages/template/ModuleSecKill.wxml:secKill");
function np_7(){var nv_module={nv_exports:{}};var nv_getDetailLinkType = (function (nv_status,nv_amount){return(nv_status == 2 && nv_amount != 0 ? 'SecKillProDetail':'ProductDetail')});var nv_getDetailLinkData = (function (nv_status,nv_amount,nv_msid,nv_msproid,nv_proid){var nv_obj = ({});if (nv_getDetailLinkType(nv_status,nv_amount) == 'SecKillProDetail'){nv_obj = ({'nv_ms_id':nv_msid,'nv_ms_proid':nv_msproid,'nv_proid':nv_proid,})} else {nv_obj = ({'nv_id':nv_proid,})};return(nv_JSON.nv_stringify(nv_obj))});nv_module.nv_exports = ({nv_getDetailLinkType:nv_getDetailLinkType,nv_getDetailLinkData:nv_getDetailLinkData,});return nv_module.nv_exports;}

f_['./pages/template/ModuleServiceList.wxml']={};
f_['./pages/template/ModuleServiceList.wxml']['layoutFun'] =nv_require("m_./pages/template/ModuleServiceList.wxml:layoutFun");
function np_8(){var nv_module={nv_exports:{}};var nv_isCard = (function (nv_showType){return(nv_showType == 1 ? "card":"")});var nv_hasItem = (function (nv_items,nv_val){return(nv_items.nv_indexOf(nv_val) > -1)});var nv_buyBtnStyle = (function (nv_val){if (nv_val == 3)return("m-icon-iconfont_cart"); else return("m-icon-iconfont_cart-fill")});var nv_getSwiperGroupNum = (function (nv_numPerGroup,nv_numCount){var nv_numList = [];if (nv_numCount == 0)nv_numList;;if (nv_numPerGroup <= 0)nv_numPerGroup = 1;;var nv_groupNum = Math.nv_ceil(nv_numCount / nv_numPerGroup);for(var nv_i = 0;nv_i < nv_groupNum;nv_i++){nv_numList.nv_push(nv_i)};return(nv_numList)});nv_module.nv_exports = ({nv_isCard:nv_isCard,nv_hasItem:nv_hasItem,nv_buyBtnStyle:nv_buyBtnStyle,nv_getSwiperGroupNum:nv_getSwiperGroupNum,});return nv_module.nv_exports;}

f_['./pages/template/ModuleSlide.wxml']={};
f_['./pages/template/ModuleSlide.wxml']['extendMethod'] =nv_require("m_./pages/template/ModuleSlide.wxml:extendMethod");
function np_9(){var nv_module={nv_exports:{}};var nv_calHeight = (function (nv_heightPercent,nv_width,nv_ispaddinglr){return((nv_width - (nv_ispaddinglr ? 20:0)) * nv_heightPercent / 100)});nv_module.nv_exports = ({nv_calHeight:nv_calHeight,});return nv_module.nv_exports;}

f_['./pages/template/ModuleVideo.wxml']={};
f_['./pages/template/ModuleVideo.wxml']['extendMethod'] =nv_require("m_./pages/template/ModuleVideo.wxml:extendMethod");
function np_10(){var nv_module={nv_exports:{}};var nv_calHeight = (function (nv_Proportion,nv_width){if (nv_Proportion == '4:3'){return("height:" + (nv_width * (0.75)) + "px")} else if (nv_Proportion == '16:10'){return("height:" + (nv_width * (0.625)) + "px")} else if (nv_Proportion == '16:9'){return("height:" + (nv_width * (0.5625)) + "px")} else {return("height:209px")}});nv_module.nv_exports = ({nv_calHeight:nv_calHeight,});return nv_module.nv_exports;}

f_['./pages/template/customform.wxml']={};
f_['./pages/template/customform.wxml']['tools'] =nv_require("m_./pages/template/customform.wxml:tools");
function np_11(){var nv_module={nv_exports:{}};var nv_arrIndexOf = (function (nv_arr,nv_str){if (!nv_arr)return(-1);;return(nv_arr.nv_indexOf(nv_str))});nv_module.nv_exports = ({nv_arrIndexOf:nv_arrIndexOf,});return nv_module.nv_exports;}

var x=['./components/picker_datetime.wxml','./pages/common/phoneauthorization/index.wxml','./pages/common/popout/index.wxml','./pages/common/we-cropper/dist/weCropper.wxml','./pages/company/about.wxml','/wxParse/wxParse.wxml','./pages/company/about_tabbar.wxml','./pages/company/businessCard/accessRecord.wxml','./pages/company/businessCard/airadar.wxml','./pages/company/businessCard/businessBottom.wxml','./pages/company/businessCard/cardDetails.wxml','/pages/template/getUserInfo.wxml','/pages/common/popout/index.wxml','./pages/company/businessCard/cardcase.wxml','./pages/company/businessCard/chatDialogue.wxml','./pages/company/businessCard/chatMessage.wxml','./pages/company/businessCard/common/ec-canvas/ec-canvas.wxml','./pages/company/businessCard/common/filterbox/filterbox.wxml','./pages/company/businessCard/datadetails.wxml','./pages/company/businessCard/developing.wxml','./pages/company/businessCard/dynamic.wxml','/pages/company/businessCard/businessBottom.wxml','./pages/company/businessCard/editCard.wxml','./pages/company/businessCard/material-library.wxml','./pages/company/businessCard/rankinglist.wxml','./pages/company/businessCard/shareCard.wxml','./pages/company/businessCard/upload.wxml','../../common/we-cropper/dist/weCropper.wxml','./pages/company/businessCard/userdetails.wxml','./pages/company/businessCard/workbench.wxml','/pages/common/phoneauthorization/index.wxml','./pages/company/casedetail.wxml','/pages/template/popupFromShare.wxml','./pages/company/caselist.wxml','./pages/company/custompage.wxml','/pages/template/modules.wxml','/pages/template/floatLayer.wxml','./pages/company/index.wxml','/pages/template/copyright.wxml','./pages/company/nav.wxml','./pages/company/newsdetail.wxml','../../wxParse/wxParse.wxml','./pages/company/newslist.wxml','./pages/company/newslist_tabbar.wxml','./pages/company/noticedetail.wxml','./pages/company/productdetail.wxml','./pages/company/productlist.wxml','./pages/company/productlist_tabbar.wxml','./pages/customform.wxml','./pages/footnav.wxml','./pages/phoneauthorization/index.wxml','./pages/template/ModuleBargain.wxml','./pages/template/ModuleButton.wxml','./pages/template/ModuleCoupon.wxml','./pages/template/ModuleCustomForm.wxml','/pages/template/customform.wxml','./pages/template/ModuleFootNav.wxml','./pages/template/ModuleFullReduction.wxml','./pages/template/ModuleImageText.wxml','./pages/template/ModuleLine.wxml','./pages/template/ModuleLink.wxml','./pages/template/ModuleMap.wxml','./pages/template/ModuleNavigationCall.wxml','./pages/template/ModuleNewsList.wxml','./pages/template/ModulePay.wxml','./pages/template/ModulePinTuan.wxml','./pages/template/ModuleProductList.wxml','./pages/template/ModuleSearch.wxml','./pages/template/ModuleSecKill.wxml','./pages/template/ModuleServiceList.wxml','./pages/template/ModuleShopWindow.wxml','./pages/template/ModuleSlide.wxml','./pages/template/ModuleTest.wxml','./pages/template/ModuleTitle.wxml','./pages/template/ModuleVideo.wxml','./pages/template/copyright.wxml','./pages/template/customform.wxml','./pages/template/floatLayer.wxml','./pages/template/getUserInfo.wxml','./pages/template/modules.wxml','/pages/template/ModuleTest.wxml','/pages/template/ModuleSearch.wxml','/pages/template/ModuleVideo.wxml','/pages/template/ModuleTitle.wxml','/pages/template/ModuleSlide.wxml','/pages/template/ModuleLine.wxml','/pages/template/ModuleShopWindow.wxml','/pages/template/ModuleLink.wxml','/pages/template/ModuleButton.wxml','/pages/template/ModuleCustomForm.wxml','/pages/template/ModuleProductList.wxml','/pages/template/ModuleServiceList.wxml','/pages/template/ModuleImageText.wxml','/pages/template/ModuleMap.wxml','/pages/template/ModuleNewsList.wxml','/pages/template/ModuleCoupon.wxml','/pages/template/ModulePinTuan.wxml','/pages/template/ModuleSecKill.wxml','/pages/template/ModuleNavigationCall.wxml','/pages/template/ModulePay.wxml','/pages/template/ModuleFullReduction.wxml','/pages/template/ModuleBargain.wxml','./pages/template/popupFromShare.wxml','./pages/webview/webview.wxml','./wxParse/wxParse.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oD=_v()
_(r,oD)
if(_oz(z,0,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(r,fE)
if(_oz(z,1,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(r,cF)
if(_oz(z,2,e,s,gg)){cF.wxVkey=1
var hG=_v()
_(cF,hG)
if(_oz(z,3,e,s,gg)){hG.wxVkey=1
}
hG.wxXCkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cI=_v()
_(r,cI)
if(_oz(z,0,e,s,gg)){cI.wxVkey=1
}
var oJ=_v()
_(r,oJ)
if(_oz(z,1,e,s,gg)){oJ.wxVkey=1
}
cI.wxXCkey=1
oJ.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
d_[x[3]]["weCropper"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[3]+':weCropper'
r.wxVkey=b
gg.f=$gdc(f_["./pages/common/we-cropper/dist/weCropper.wxml"],"",1)
if(p_[b]){_wl(b,x[3]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var tM=_n('view')
_rz(z,tM,'class',0,e,s,gg)
var bO=_n('view')
_rz(z,bO,'class',1,e,s,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,2,e,s,gg)){oP.wxVkey=1
}
var xQ=_n('view')
_rz(z,xQ,'class',3,e,s,gg)
var oR=e_[x[4]].i
_ai(oR,x[5],e_,x[4],25,10)
var fS=_v()
_(xQ,fS)
var cT=_oz(z,5,e,s,gg)
var hU=_gd(x[4],cT,e_,d_)
if(hU){
var oV=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[4],26,22)
oR.pop()
_(bO,xQ)
oP.wxXCkey=1
_(tM,bO)
var cW=_n('view')
_rz(z,cW,'class',6,e,s,gg)
var oX=_v()
_(cW,oX)
if(_oz(z,7,e,s,gg)){oX.wxVkey=1
var o4=_v()
_(oX,o4)
if(_oz(z,8,e,s,gg)){o4.wxVkey=1
}
o4.wxXCkey=1
}
var lY=_v()
_(cW,lY)
if(_oz(z,9,e,s,gg)){lY.wxVkey=1
}
var aZ=_v()
_(cW,aZ)
if(_oz(z,10,e,s,gg)){aZ.wxVkey=1
}
var t1=_v()
_(cW,t1)
if(_oz(z,11,e,s,gg)){t1.wxVkey=1
}
var e2=_v()
_(cW,e2)
if(_oz(z,12,e,s,gg)){e2.wxVkey=1
}
var b3=_v()
_(cW,b3)
if(_oz(z,13,e,s,gg)){b3.wxVkey=1
}
oX.wxXCkey=1
lY.wxXCkey=1
aZ.wxXCkey=1
t1.wxXCkey=1
e2.wxXCkey=1
b3.wxXCkey=1
_(tM,cW)
var eN=_v()
_(tM,eN)
if(_oz(z,14,e,s,gg)){eN.wxVkey=1
}
eN.wxXCkey=1
_(r,tM)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var o6=_n('view')
_rz(z,o6,'class',0,e,s,gg)
var c8=_n('view')
_rz(z,c8,'class',1,e,s,gg)
var h9=_v()
_(c8,h9)
if(_oz(z,2,e,s,gg)){h9.wxVkey=1
}
var o0=_n('view')
_rz(z,o0,'class',3,e,s,gg)
var cAB=e_[x[6]].i
_ai(cAB,x[5],e_,x[6],25,10)
var oBB=_v()
_(o0,oBB)
var lCB=_oz(z,5,e,s,gg)
var aDB=_gd(x[6],lCB,e_,d_)
if(aDB){
var tEB=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
oBB.wxXCkey=3
aDB(tEB,tEB,oBB,gg)
gg.f=cur_globalf
}
else _w(lCB,x[6],26,22)
cAB.pop()
_(c8,o0)
h9.wxXCkey=1
_(o6,c8)
var eFB=_n('view')
_rz(z,eFB,'class',6,e,s,gg)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,7,e,s,gg)){bGB.wxVkey=1
var hMB=_v()
_(bGB,hMB)
if(_oz(z,8,e,s,gg)){hMB.wxVkey=1
}
hMB.wxXCkey=1
}
var oHB=_v()
_(eFB,oHB)
if(_oz(z,9,e,s,gg)){oHB.wxVkey=1
}
var xIB=_v()
_(eFB,xIB)
if(_oz(z,10,e,s,gg)){xIB.wxVkey=1
}
var oJB=_v()
_(eFB,oJB)
if(_oz(z,11,e,s,gg)){oJB.wxVkey=1
}
var fKB=_v()
_(eFB,fKB)
if(_oz(z,12,e,s,gg)){fKB.wxVkey=1
}
var cLB=_v()
_(eFB,cLB)
if(_oz(z,13,e,s,gg)){cLB.wxVkey=1
}
bGB.wxXCkey=1
oHB.wxXCkey=1
xIB.wxXCkey=1
oJB.wxXCkey=1
fKB.wxXCkey=1
cLB.wxXCkey=1
_(o6,eFB)
var f7=_v()
_(o6,f7)
if(_oz(z,14,e,s,gg)){f7.wxVkey=1
}
f7.wxXCkey=1
_(r,o6)
return r
}
e_[x[6]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oPB=_n('view')
_rz(z,oPB,'class',0,e,s,gg)
var lQB=_v()
_(oPB,lQB)
if(_oz(z,1,e,s,gg)){lQB.wxVkey=1
}
var aRB=_v()
_(oPB,aRB)
if(_oz(z,2,e,s,gg)){aRB.wxVkey=1
var tSB=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',3,'enableBackToTop',1,'lowerThreshold',2,'style',3],[],e,s,gg)
var bUB=_v()
_(tSB,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_n('view')
_rz(z,h1B,'class',10,oXB,xWB,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,11,oXB,xWB,gg)){o2B.wxVkey=1
}
var c3B=_v()
_(h1B,c3B)
if(_oz(z,12,oXB,xWB,gg)){c3B.wxVkey=1
}
var o4B=_v()
_(h1B,o4B)
if(_oz(z,13,oXB,xWB,gg)){o4B.wxVkey=1
}
o2B.wxXCkey=1
c3B.wxXCkey=1
o4B.wxXCkey=1
_(fYB,h1B)
return fYB
}
bUB.wxXCkey=2
_2z(z,8,oVB,e,s,gg,bUB,'item','index','item')
var eTB=_v()
_(tSB,eTB)
if(_oz(z,14,e,s,gg)){eTB.wxVkey=1
}
eTB.wxXCkey=1
_(aRB,tSB)
}
lQB.wxXCkey=1
aRB.wxXCkey=1
_(r,oPB)
var cOB=_v()
_(r,cOB)
if(_oz(z,15,e,s,gg)){cOB.wxVkey=1
var l5B=_mz(z,'view',['bindtap',16,'class',1],[],e,s,gg)
var a6B=_v()
_(l5B,a6B)
var t7B=function(b9B,e8B,o0B,gg){
var oBC=_v()
_(o0B,oBC)
if(_oz(z,21,b9B,e8B,gg)){oBC.wxVkey=1
}
oBC.wxXCkey=1
return o0B
}
a6B.wxXCkey=2
_2z(z,19,t7B,e,s,gg,a6B,'item','index','index')
_(cOB,l5B)
}
cOB.wxXCkey=1
return r
}
e_[x[7]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var cDC=_mz(z,'swiper',['bindchange',0,'class',1,'current',1,'duration',2,'style',3],[],e,s,gg)
var hEC=_n('swiper-item')
var oFC=_v()
_(hEC,oFC)
if(_oz(z,5,e,s,gg)){oFC.wxVkey=1
}
var cGC=_v()
_(hEC,cGC)
if(_oz(z,6,e,s,gg)){cGC.wxVkey=1
var oHC=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',7,'class',1,'enableBackToTop',2,'lowerThreshold',3,'style',4],[],e,s,gg)
var tKC=_v()
_(oHC,tKC)
var eLC=function(oNC,bMC,xOC,gg){
var fQC=_v()
_(xOC,fQC)
var cRC=function(oTC,hSC,cUC,gg){
var lWC=_mz(z,'view',['catchtap',19,'class',1,'data-headimgurl',2,'data-nickname',3,'data-userid',4,'style',5],[],oTC,hSC,gg)
var aXC=_mz(z,'form',['reportSubmit',-1,'bindsubmit',25],[],oTC,hSC,gg)
var tYC=_n('view')
_rz(z,tYC,'class',26,oTC,hSC,gg)
var eZC=_v()
_(tYC,eZC)
if(_oz(z,27,oTC,hSC,gg)){eZC.wxVkey=1
}
var b1C=_v()
_(tYC,b1C)
if(_oz(z,28,oTC,hSC,gg)){b1C.wxVkey=1
}
eZC.wxXCkey=1
b1C.wxXCkey=1
_(aXC,tYC)
_(lWC,aXC)
_(cUC,lWC)
return cUC
}
fQC.wxXCkey=2
_2z(z,17,cRC,oNC,bMC,gg,fQC,'v','i','i')
return xOC
}
tKC.wxXCkey=2
_2z(z,13,eLC,e,s,gg,tKC,'item','index','index')
var lIC=_v()
_(oHC,lIC)
if(_oz(z,29,e,s,gg)){lIC.wxVkey=1
}
var aJC=_v()
_(oHC,aJC)
if(_oz(z,30,e,s,gg)){aJC.wxVkey=1
}
lIC.wxXCkey=1
aJC.wxXCkey=1
_(cGC,oHC)
}
oFC.wxXCkey=1
cGC.wxXCkey=1
_(cDC,hEC)
var o2C=_n('swiper-item')
var x3C=_v()
_(o2C,x3C)
if(_oz(z,31,e,s,gg)){x3C.wxVkey=1
}
var o4C=_v()
_(o2C,o4C)
if(_oz(z,32,e,s,gg)){o4C.wxVkey=1
}
var f5C=_v()
_(o2C,f5C)
if(_oz(z,33,e,s,gg)){f5C.wxVkey=1
var c6C=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',34,'enableBackToTop',1,'lowerThreshold',2,'scrollTop',3,'scrollWithAnimation',4,'style',5],[],e,s,gg)
var h7C=_v()
_(c6C,h7C)
if(_oz(z,40,e,s,gg)){h7C.wxVkey=1
}
var o8C=_v()
_(c6C,o8C)
if(_oz(z,41,e,s,gg)){o8C.wxVkey=1
}
h7C.wxXCkey=1
o8C.wxXCkey=1
_(f5C,c6C)
}
x3C.wxXCkey=1
o4C.wxXCkey=1
f5C.wxXCkey=1
_(cDC,o2C)
_(r,cDC)
return r
}
e_[x[8]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var o0C=_n('view')
_rz(z,o0C,'class',0,e,s,gg)
var aBD=_mz(z,'view',['catchtap',1,'class',1],[],e,s,gg)
var tCD=_v()
_(aBD,tCD)
if(_oz(z,3,e,s,gg)){tCD.wxVkey=1
}
var eDD=_v()
_(aBD,eDD)
if(_oz(z,4,e,s,gg)){eDD.wxVkey=1
}
tCD.wxXCkey=1
eDD.wxXCkey=1
_(o0C,aBD)
var bED=_mz(z,'view',['catchtap',5,'class',1],[],e,s,gg)
var oFD=_v()
_(bED,oFD)
if(_oz(z,7,e,s,gg)){oFD.wxVkey=1
}
var xGD=_v()
_(bED,xGD)
if(_oz(z,8,e,s,gg)){xGD.wxVkey=1
}
oFD.wxXCkey=1
xGD.wxXCkey=1
_(o0C,bED)
var lAD=_v()
_(o0C,lAD)
if(_oz(z,9,e,s,gg)){lAD.wxVkey=1
var oHD=_mz(z,'view',['catchtap',10,'class',1],[],e,s,gg)
var fID=_v()
_(oHD,fID)
if(_oz(z,12,e,s,gg)){fID.wxVkey=1
}
var cJD=_v()
_(oHD,cJD)
if(_oz(z,13,e,s,gg)){cJD.wxVkey=1
}
fID.wxXCkey=1
cJD.wxXCkey=1
_(lAD,oHD)
}
lAD.wxXCkey=1
_(r,o0C)
return r
}
e_[x[9]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oLD=e_[x[10]].j
var cMD=_v()
_(r,cMD)
if(_oz(z,0,e,s,gg)){cMD.wxVkey=1
}
var oND=_v()
_(r,oND)
if(_oz(z,1,e,s,gg)){oND.wxVkey=1
var eRD=_v()
_(oND,eRD)
if(_oz(z,2,e,s,gg)){eRD.wxVkey=1
}
eRD.wxXCkey=1
}
var lOD=_v()
_(r,lOD)
if(_oz(z,3,e,s,gg)){lOD.wxVkey=1
}
var aPD=_v()
_(r,aPD)
if(_oz(z,4,e,s,gg)){aPD.wxVkey=1
}
var bSD=_mz(z,'swiper',['bindchange',5,'class',1,'current',2,'duration',3,'style',4],[],e,s,gg)
var oTD=_v()
_(bSD,oTD)
if(_oz(z,10,e,s,gg)){oTD.wxVkey=1
var xUD=_n('view')
_rz(z,xUD,'class',11,e,s,gg)
var oVD=_v()
_(xUD,oVD)
if(_oz(z,12,e,s,gg)){oVD.wxVkey=1
}
else{oVD.wxVkey=2
var fWD=_n('view')
_rz(z,fWD,'class',13,e,s,gg)
var o2D=_n('view')
_rz(z,o2D,'class',14,e,s,gg)
var l3D=_v()
_(o2D,l3D)
if(_oz(z,15,e,s,gg)){l3D.wxVkey=1
}
var a4D=_v()
_(o2D,a4D)
if(_oz(z,16,e,s,gg)){a4D.wxVkey=1
}
var t5D=_v()
_(o2D,t5D)
if(_oz(z,17,e,s,gg)){t5D.wxVkey=1
var e6D=_n('view')
_rz(z,e6D,'class',18,e,s,gg)
var b7D=_v()
_(e6D,b7D)
if(_oz(z,19,e,s,gg)){b7D.wxVkey=1
}
var o8D=_v()
_(e6D,o8D)
if(_oz(z,20,e,s,gg)){o8D.wxVkey=1
}
var x9D=_v()
_(e6D,x9D)
if(_oz(z,21,e,s,gg)){x9D.wxVkey=1
}
var o0D=_v()
_(e6D,o0D)
if(_oz(z,22,e,s,gg)){o0D.wxVkey=1
}
b7D.wxXCkey=1
o8D.wxXCkey=1
x9D.wxXCkey=1
o0D.wxXCkey=1
_(t5D,e6D)
}
var fAE=_n('view')
_rz(z,fAE,'class',23,e,s,gg)
var cBE=_mz(z,'form',['reportSubmit',-1,'bindsubmit',24,'class',1],[],e,s,gg)
var hCE=_v()
_(cBE,hCE)
if(_oz(z,26,e,s,gg)){hCE.wxVkey=1
}
var oDE=_v()
_(cBE,oDE)
if(_oz(z,27,e,s,gg)){oDE.wxVkey=1
}
hCE.wxXCkey=1
oDE.wxXCkey=1
_(fAE,cBE)
var cEE=_mz(z,'view',['bindtap',28,'class',1],[],e,s,gg)
var oFE=_mz(z,'form',['reportSubmit',-1,'bindsubmit',30],[],e,s,gg)
var lGE=_n('view')
_rz(z,lGE,'class',31,e,s,gg)
var aHE=_v()
_(lGE,aHE)
if(_oz(z,32,e,s,gg)){aHE.wxVkey=1
}
var eJE=_v()
_(lGE,eJE)
var bKE=function(xME,oLE,oNE,gg){
var cPE=_v()
_(oNE,cPE)
if(_oz(z,36,xME,oLE,gg)){cPE.wxVkey=1
}
cPE.wxXCkey=1
return oNE
}
eJE.wxXCkey=2
_2z(z,34,bKE,e,s,gg,eJE,'item','index','index')
var tIE=_v()
_(lGE,tIE)
if(_oz(z,37,e,s,gg)){tIE.wxVkey=1
}
aHE.wxXCkey=1
tIE.wxXCkey=1
_(oFE,lGE)
_(cEE,oFE)
_(fAE,cEE)
_(o2D,fAE)
l3D.wxXCkey=1
a4D.wxXCkey=1
t5D.wxXCkey=1
_(fWD,o2D)
var cXD=_v()
_(fWD,cXD)
if(_oz(z,38,e,s,gg)){cXD.wxVkey=1
}
var hYD=_v()
_(fWD,hYD)
if(_oz(z,39,e,s,gg)){hYD.wxVkey=1
var hQE=_n('view')
_rz(z,hQE,'class',40,e,s,gg)
var oRE=_v()
_(hQE,oRE)
if(_oz(z,41,e,s,gg)){oRE.wxVkey=1
}
var cSE=_v()
_(hQE,cSE)
if(_oz(z,42,e,s,gg)){cSE.wxVkey=1
}
oRE.wxXCkey=1
cSE.wxXCkey=1
_(hYD,hQE)
}
var oZD=_v()
_(fWD,oZD)
if(_oz(z,43,e,s,gg)){oZD.wxVkey=1
}
var c1D=_v()
_(fWD,c1D)
if(_oz(z,44,e,s,gg)){c1D.wxVkey=1
}
cXD.wxXCkey=1
hYD.wxXCkey=1
oZD.wxXCkey=1
c1D.wxXCkey=1
_(oVD,fWD)
}
oVD.wxXCkey=1
_(oTD,xUD)
}
var oTE=_mz(z,'view',['bindtouchstart',45,'class',1],[],e,s,gg)
var lUE=_n('view')
_rz(z,lUE,'class',47,e,s,gg)
var aVE=_v()
_(lUE,aVE)
if(_oz(z,48,e,s,gg)){aVE.wxVkey=1
}
var tWE=_v()
_(lUE,tWE)
if(_oz(z,49,e,s,gg)){tWE.wxVkey=1
var bYE=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',50,'enableBackToTop',1,'lowerThreshold',2,'style',3],[],e,s,gg)
var oZE=_v()
_(bYE,oZE)
var x1E=function(f3E,o2E,c4E,gg){
var o6E=_n('view')
_rz(z,o6E,'class',58,f3E,o2E,gg)
var c7E=_v()
_(o6E,c7E)
if(_oz(z,59,f3E,o2E,gg)){c7E.wxVkey=1
}
var o8E=_v()
_(o6E,o8E)
if(_oz(z,60,f3E,o2E,gg)){o8E.wxVkey=1
var l9E=_v()
_(o8E,l9E)
if(_oz(z,61,f3E,o2E,gg)){l9E.wxVkey=1
}
l9E.wxXCkey=1
}
c7E.wxXCkey=1
o8E.wxXCkey=1
_(c4E,o6E)
return c4E
}
oZE.wxXCkey=2
_2z(z,56,x1E,e,s,gg,oZE,'item','index','index')
_(tWE,bYE)
}
var eXE=_v()
_(lUE,eXE)
if(_oz(z,62,e,s,gg)){eXE.wxVkey=1
}
aVE.wxXCkey=1
tWE.wxXCkey=1
eXE.wxXCkey=1
_(oTE,lUE)
_(bSD,oTE)
oTD.wxXCkey=1
_(r,bSD)
var tQD=_v()
_(r,tQD)
if(_oz(z,63,e,s,gg)){tQD.wxVkey=1
var a0E=_n('view')
_rz(z,a0E,'class',64,e,s,gg)
var tAF=_mz(z,'view',['catchtap',65,'class',1,'data-current',2],[],e,s,gg)
var eBF=_mz(z,'form',['reportSubmit',-1,'bindsubmit',68],[],e,s,gg)
var bCF=_mz(z,'button',['class',69,'formType',1,'hoverClass',2],[],e,s,gg)
var oDF=_v()
_(bCF,oDF)
if(_oz(z,72,e,s,gg)){oDF.wxVkey=1
}
var xEF=_v()
_(bCF,xEF)
if(_oz(z,73,e,s,gg)){xEF.wxVkey=1
}
oDF.wxXCkey=1
xEF.wxXCkey=1
_(eBF,bCF)
_(tAF,eBF)
_(a0E,tAF)
var oFF=_mz(z,'view',['catchtap',74,'class',1,'data-current',2],[],e,s,gg)
var fGF=_mz(z,'form',['reportSubmit',-1,'bindsubmit',77],[],e,s,gg)
var cHF=_mz(z,'button',['class',78,'formType',1,'hoverClass',2],[],e,s,gg)
var hIF=_v()
_(cHF,hIF)
if(_oz(z,81,e,s,gg)){hIF.wxVkey=1
}
var oJF=_v()
_(cHF,oJF)
if(_oz(z,82,e,s,gg)){oJF.wxVkey=1
}
hIF.wxXCkey=1
oJF.wxXCkey=1
_(fGF,cHF)
_(oFF,fGF)
_(a0E,oFF)
_(tQD,a0E)
}
_ic(x[11],e_,x[10],e,s,r,gg);
_ic(x[12],e_,x[10],e,s,r,gg);
cMD.wxXCkey=1
oND.wxXCkey=1
lOD.wxXCkey=1
aPD.wxXCkey=1
tQD.wxXCkey=1
oLD.pop()
oLD.pop()
return r
}
e_[x[10]]={f:m9,j:[],i:[],ti:[],ic:[x[11],x[12]]}
d_[x[13]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oLF=_n('view')
_rz(z,oLF,'class',0,e,s,gg)
var lMF=_v()
_(oLF,lMF)
if(_oz(z,1,e,s,gg)){lMF.wxVkey=1
}
var aNF=_v()
_(oLF,aNF)
if(_oz(z,2,e,s,gg)){aNF.wxVkey=1
}
lMF.wxXCkey=1
aNF.wxXCkey=1
_(r,oLF)
return r
}
e_[x[13]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var ePF=_mz(z,'form',['bindsubmit',0,'reportSubmit',1],[],e,s,gg)
var xSF=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltoupper',2,'class',1,'scrollIntoView',2,'style',3],[],e,s,gg)
var oTF=_v()
_(xSF,oTF)
var fUF=function(hWF,cVF,oXF,gg){
var oZF=_mz(z,'view',['class',8,'id',1],[],hWF,cVF,gg)
var l1F=_v()
_(oZF,l1F)
if(_oz(z,10,hWF,cVF,gg)){l1F.wxVkey=1
var b5F=_n('view')
_rz(z,b5F,'class',11,hWF,cVF,gg)
var o6F=_v()
_(b5F,o6F)
if(_oz(z,12,hWF,cVF,gg)){o6F.wxVkey=1
}
var x7F=_v()
_(b5F,x7F)
if(_oz(z,13,hWF,cVF,gg)){x7F.wxVkey=1
}
o6F.wxXCkey=1
x7F.wxXCkey=1
_(l1F,b5F)
}
var a2F=_v()
_(oZF,a2F)
if(_oz(z,14,hWF,cVF,gg)){a2F.wxVkey=1
}
var t3F=_v()
_(oZF,t3F)
if(_oz(z,15,hWF,cVF,gg)){t3F.wxVkey=1
}
var e4F=_v()
_(oZF,e4F)
if(_oz(z,16,hWF,cVF,gg)){e4F.wxVkey=1
var o8F=_n('view')
_rz(z,o8F,'class',17,hWF,cVF,gg)
var f9F=_v()
_(o8F,f9F)
if(_oz(z,18,hWF,cVF,gg)){f9F.wxVkey=1
}
var c0F=_v()
_(o8F,c0F)
if(_oz(z,19,hWF,cVF,gg)){c0F.wxVkey=1
}
f9F.wxXCkey=1
c0F.wxXCkey=1
_(e4F,o8F)
}
l1F.wxXCkey=1
a2F.wxXCkey=1
t3F.wxXCkey=1
e4F.wxXCkey=1
_(oXF,oZF)
return oXF
}
oTF.wxXCkey=2
_2z(z,6,fUF,e,s,gg,oTF,'item','index','item.ID')
_(ePF,xSF)
var bQF=_v()
_(ePF,bQF)
if(_oz(z,20,e,s,gg)){bQF.wxVkey=1
var hAG=_n('view')
_rz(z,hAG,'class',21,e,s,gg)
var oBG=_v()
_(hAG,oBG)
if(_oz(z,22,e,s,gg)){oBG.wxVkey=1
var oDG=_n('view')
_rz(z,oDG,'class',23,e,s,gg)
var lEG=_v()
_(oDG,lEG)
if(_oz(z,24,e,s,gg)){lEG.wxVkey=1
}
var aFG=_v()
_(oDG,aFG)
if(_oz(z,25,e,s,gg)){aFG.wxVkey=1
}
lEG.wxXCkey=1
aFG.wxXCkey=1
_(oBG,oDG)
}
var cCG=_v()
_(hAG,cCG)
if(_oz(z,26,e,s,gg)){cCG.wxVkey=1
}
oBG.wxXCkey=1
cCG.wxXCkey=1
_(bQF,hAG)
}
var oRF=_v()
_(ePF,oRF)
if(_oz(z,27,e,s,gg)){oRF.wxVkey=1
}
bQF.wxXCkey=1
oRF.wxXCkey=1
_(r,ePF)
return r
}
e_[x[14]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var eHG=_v()
_(r,eHG)
if(_oz(z,0,e,s,gg)){eHG.wxVkey=1
}
var bIG=_mz(z,'form',['bindsubmit',1,'reportSubmit',1],[],e,s,gg)
var oJG=_v()
_(bIG,oJG)
var xKG=function(fMG,oLG,cNG,gg){
var oPG=_mz(z,'view',['catchtap',7,'class',1,'data-chatname',2,'data-imgurl',3,'data-userid',4],[],fMG,oLG,gg)
var cQG=_v()
_(oPG,cQG)
if(_oz(z,12,fMG,oLG,gg)){cQG.wxVkey=1
}
cQG.wxXCkey=1
_(cNG,oPG)
return cNG
}
oJG.wxXCkey=2
_2z(z,5,xKG,e,s,gg,oJG,'item','index','item.id')
_(r,bIG)
eHG.wxXCkey=1
return r
}
e_[x[15]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[16]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[17]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var tUG=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var eVG=_v()
_(tUG,eVG)
if(_oz(z,2,e,s,gg)){eVG.wxVkey=1
var oXG=_n('view')
_rz(z,oXG,'class',3,e,s,gg)
var xYG=_v()
_(oXG,xYG)
if(_oz(z,4,e,s,gg)){xYG.wxVkey=1
}
var oZG=_v()
_(oXG,oZG)
if(_oz(z,5,e,s,gg)){oZG.wxVkey=1
}
xYG.wxXCkey=1
oZG.wxXCkey=1
_(eVG,oXG)
}
var bWG=_v()
_(tUG,bWG)
if(_oz(z,6,e,s,gg)){bWG.wxVkey=1
var f1G=_mz(z,'scroll-view',['scrollY',-1,'bindscroll',7,'bindscrolltolower',1,'class',2,'enableBackToTop',3,'lowerThreshold',4,'scrollTop',5,'scrollWithAnimation',6,'style',7],[],e,s,gg)
var c5G=_mz(z,'ec-canvas',['canvasId',15,'ec',1,'id',2,'style',3],[],e,s,gg)
_(f1G,c5G)
var c2G=_v()
_(f1G,c2G)
if(_oz(z,19,e,s,gg)){c2G.wxVkey=1
}
var o6G=_v()
_(f1G,o6G)
var l7G=function(t9G,a8G,e0G,gg){
var oBH=_v()
_(e0G,oBH)
if(_oz(z,23,t9G,a8G,gg)){oBH.wxVkey=1
var xCH=_v()
_(oBH,xCH)
var oDH=function(cFH,fEH,hGH,gg){
var cIH=_mz(z,'view',['catchtap',28,'class',1,'data-headimgurl',2,'data-nickname',3,'data-userid',4,'style',5],[],cFH,fEH,gg)
var oJH=_mz(z,'form',['reportSubmit',-1,'bindsubmit',34],[],cFH,fEH,gg)
var lKH=_n('view')
_rz(z,lKH,'class',35,cFH,fEH,gg)
var aLH=_v()
_(lKH,aLH)
if(_oz(z,36,cFH,fEH,gg)){aLH.wxVkey=1
}
var tMH=_v()
_(lKH,tMH)
if(_oz(z,37,cFH,fEH,gg)){tMH.wxVkey=1
}
aLH.wxXCkey=1
tMH.wxXCkey=1
_(oJH,lKH)
_(cIH,oJH)
_(hGH,cIH)
return hGH
}
xCH.wxXCkey=2
_2z(z,26,oDH,t9G,a8G,gg,xCH,'v','i','i')
}
oBH.wxXCkey=1
return e0G
}
o6G.wxXCkey=2
_2z(z,21,l7G,e,s,gg,o6G,'item','index','index')
var eNH=_v()
_(f1G,eNH)
var bOH=function(xQH,oPH,oRH,gg){
var cTH=_v()
_(oRH,cTH)
if(_oz(z,41,xQH,oPH,gg)){cTH.wxVkey=1
}
cTH.wxXCkey=1
return oRH
}
eNH.wxXCkey=2
_2z(z,39,bOH,e,s,gg,eNH,'item','index','index')
var h3G=_v()
_(f1G,h3G)
if(_oz(z,42,e,s,gg)){h3G.wxVkey=1
}
var o4G=_v()
_(f1G,o4G)
if(_oz(z,43,e,s,gg)){o4G.wxVkey=1
}
c2G.wxXCkey=1
h3G.wxXCkey=1
o4G.wxXCkey=1
_(bWG,f1G)
}
eVG.wxXCkey=1
bWG.wxXCkey=1
bWG.wxXCkey=3
_(r,tUG)
return r
}
e_[x[18]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[19]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var cWH=e_[x[20]].j
var oXH=_mz(z,'view',['bindtouchstart',0,'class',1],[],e,s,gg)
var aZH=_n('view')
_rz(z,aZH,'class',2,e,s,gg)
var t1H=_v()
_(aZH,t1H)
if(_oz(z,3,e,s,gg)){t1H.wxVkey=1
}
var e2H=_v()
_(aZH,e2H)
if(_oz(z,4,e,s,gg)){e2H.wxVkey=1
var o4H=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',5,'enableBackToTop',1,'lowerThreshold',2,'style',3],[],e,s,gg)
var x5H=_v()
_(o4H,x5H)
var o6H=function(c8H,f7H,h9H,gg){
var cAI=_n('view')
_rz(z,cAI,'class',13,c8H,f7H,gg)
var oBI=_v()
_(cAI,oBI)
if(_oz(z,14,c8H,f7H,gg)){oBI.wxVkey=1
}
var lCI=_v()
_(cAI,lCI)
if(_oz(z,15,c8H,f7H,gg)){lCI.wxVkey=1
var aDI=_v()
_(lCI,aDI)
if(_oz(z,16,c8H,f7H,gg)){aDI.wxVkey=1
}
aDI.wxXCkey=1
}
oBI.wxXCkey=1
lCI.wxXCkey=1
_(h9H,cAI)
return h9H
}
x5H.wxXCkey=2
_2z(z,11,o6H,e,s,gg,x5H,'item','index','index')
_(e2H,o4H)
}
var b3H=_v()
_(aZH,b3H)
if(_oz(z,17,e,s,gg)){b3H.wxVkey=1
}
t1H.wxXCkey=1
e2H.wxXCkey=1
b3H.wxXCkey=1
_(oXH,aZH)
var lYH=_v()
_(oXH,lYH)
if(_oz(z,18,e,s,gg)){lYH.wxVkey=1
var tEI=e_[x[20]].j
_ic(x[21],e_,x[20],e,s,lYH,gg);
tEI.pop()
}
lYH.wxXCkey=1
_(r,oXH)
_ic(x[11],e_,x[20],e,s,r,gg);
cWH.pop()
return r
}
e_[x[20]]={f:m17,j:[],i:[],ti:[],ic:[x[11]]}
d_[x[22]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var bGI=_n('view')
_rz(z,bGI,'class',0,e,s,gg)
var xII=_n('form')
_rz(z,xII,'bindsubmit',1,e,s,gg)
var oJI=_n('view')
_rz(z,oJI,'class',2,e,s,gg)
var cLI=_n('view')
_rz(z,cLI,'class',3,e,s,gg)
var cOI=_n('view')
_rz(z,cOI,'class',4,e,s,gg)
var oPI=_v()
_(cOI,oPI)
if(_oz(z,5,e,s,gg)){oPI.wxVkey=1
}
var lQI=_v()
_(cOI,lQI)
if(_oz(z,6,e,s,gg)){lQI.wxVkey=1
var tSI=_mz(z,'view',['catchtap',7,'class',1],[],e,s,gg)
var eTI=_v()
_(tSI,eTI)
if(_oz(z,9,e,s,gg)){eTI.wxVkey=1
}
var bUI=_v()
_(tSI,bUI)
if(_oz(z,10,e,s,gg)){bUI.wxVkey=1
}
eTI.wxXCkey=1
bUI.wxXCkey=1
_(lQI,tSI)
}
var aRI=_v()
_(cOI,aRI)
if(_oz(z,11,e,s,gg)){aRI.wxVkey=1
}
oPI.wxXCkey=1
lQI.wxXCkey=1
aRI.wxXCkey=1
_(cLI,cOI)
var hMI=_v()
_(cLI,hMI)
if(_oz(z,12,e,s,gg)){hMI.wxVkey=1
}
var oNI=_v()
_(cLI,oNI)
if(_oz(z,13,e,s,gg)){oNI.wxVkey=1
}
hMI.wxXCkey=1
oNI.wxXCkey=1
_(oJI,cLI)
var fKI=_v()
_(oJI,fKI)
if(_oz(z,14,e,s,gg)){fKI.wxVkey=1
}
fKI.wxXCkey=1
_(xII,oJI)
_(bGI,xII)
var oHI=_v()
_(bGI,oHI)
if(_oz(z,15,e,s,gg)){oHI.wxVkey=1
}
oHI.wxXCkey=1
_(r,bGI)
return r
}
e_[x[22]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var xWI=e_[x[23]].j
var oXI=_n('view')
_rz(z,oXI,'class',0,e,s,gg)
var cZI=_v()
_(oXI,cZI)
var h1I=function(c3I,o2I,o4I,gg){
var a6I=_v()
_(o4I,a6I)
if(_oz(z,3,c3I,o2I,gg)){a6I.wxVkey=1
var t7I=_n('view')
_rz(z,t7I,'class',4,c3I,o2I,gg)
var e8I=_v()
_(t7I,e8I)
if(_oz(z,5,c3I,o2I,gg)){e8I.wxVkey=1
}
var b9I=_v()
_(t7I,b9I)
if(_oz(z,6,c3I,o2I,gg)){b9I.wxVkey=1
}
var o0I=_n('view')
_rz(z,o0I,'class',7,c3I,o2I,gg)
var xAJ=_v()
_(o0I,xAJ)
if(_oz(z,8,c3I,o2I,gg)){xAJ.wxVkey=1
}
var oBJ=_v()
_(o0I,oBJ)
if(_oz(z,9,c3I,o2I,gg)){oBJ.wxVkey=1
}
xAJ.wxXCkey=1
oBJ.wxXCkey=1
_(t7I,o0I)
e8I.wxXCkey=1
b9I.wxXCkey=1
_(a6I,t7I)
}
a6I.wxXCkey=1
return o4I
}
cZI.wxXCkey=2
_2z(z,1,h1I,e,s,gg,cZI,'item','index','{{item.MaterialID}}')
var fYI=_v()
_(oXI,fYI)
if(_oz(z,10,e,s,gg)){fYI.wxVkey=1
}
fYI.wxXCkey=1
_(r,oXI)
_ic(x[11],e_,x[23],e,s,r,gg);
xWI.pop()
return r
}
e_[x[23]]={f:m19,j:[],i:[],ti:[],ic:[x[11]]}
d_[x[24]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var hEJ=_mz(z,'form',['reportSubmit',-1,'bindsubmit',0],[],e,s,gg)
var oHJ=_v()
_(hEJ,oHJ)
var lIJ=function(tKJ,aJJ,eLJ,gg){
var oNJ=_mz(z,'button',['catchtap',3,'class',1,'data-cardid',2,'formType',3],[],tKJ,aJJ,gg)
var xOJ=_v()
_(oNJ,xOJ)
if(_oz(z,7,tKJ,aJJ,gg)){xOJ.wxVkey=1
}
xOJ.wxXCkey=1
_(eLJ,oNJ)
return eLJ
}
oHJ.wxXCkey=2
_2z(z,1,lIJ,e,s,gg,oHJ,'item','index','{{index}}')
var oFJ=_v()
_(hEJ,oFJ)
if(_oz(z,8,e,s,gg)){oFJ.wxVkey=1
}
var cGJ=_v()
_(hEJ,cGJ)
if(_oz(z,9,e,s,gg)){cGJ.wxVkey=1
}
oFJ.wxXCkey=1
cGJ.wxXCkey=1
_(r,hEJ)
var cDJ=_v()
_(r,cDJ)
if(_oz(z,10,e,s,gg)){cDJ.wxVkey=1
}
cDJ.wxXCkey=1
return r
}
e_[x[24]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var fQJ=_n('view')
_rz(z,fQJ,'class',0,e,s,gg)
var cRJ=_v()
_(fQJ,cRJ)
if(_oz(z,1,e,s,gg)){cRJ.wxVkey=1
}
var hSJ=_v()
_(fQJ,hSJ)
if(_oz(z,2,e,s,gg)){hSJ.wxVkey=1
}
var oTJ=_v()
_(fQJ,oTJ)
if(_oz(z,3,e,s,gg)){oTJ.wxVkey=1
}
var cUJ=_v()
_(fQJ,cUJ)
if(_oz(z,4,e,s,gg)){cUJ.wxVkey=1
}
cRJ.wxXCkey=1
hSJ.wxXCkey=1
oTJ.wxXCkey=1
cUJ.wxXCkey=1
_(r,fQJ)
return r
}
e_[x[25]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var lWJ=e_[x[26]].i
_ai(lWJ,x[27],e_,x[26],1,1)
var aXJ=_v()
_(r,aXJ)
var tYJ=_oz(z,1,e,s,gg)
var eZJ=_gd(x[26],tYJ,e_,d_)
if(eZJ){
var b1J=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aXJ.wxXCkey=3
eZJ(b1J,b1J,aXJ,gg)
gg.f=cur_globalf
}
else _w(tYJ,x[26],4,16)
lWJ.pop()
return r
}
e_[x[26]]={f:m22,j:[],i:[],ti:[x[27]],ic:[]}
d_[x[28]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var x3J=_v()
_(r,x3J)
if(_oz(z,0,e,s,gg)){x3J.wxVkey=1
}
var o4J=_mz(z,'view',['catchtap',1,'class',1,'data-current',2],[],e,s,gg)
var f5J=_mz(z,'form',['reportSubmit',-1,'bindsubmit',4],[],e,s,gg)
var c6J=_v()
_(f5J,c6J)
if(_oz(z,5,e,s,gg)){c6J.wxVkey=1
}
c6J.wxXCkey=1
_(o4J,f5J)
_(r,o4J)
var h7J=_mz(z,'swiper',['bindchange',6,'class',1,'current',2,'duration',3,'style',4],[],e,s,gg)
var o8J=_v()
_(h7J,o8J)
if(_oz(z,11,e,s,gg)){o8J.wxVkey=1
}
var c9J=_mz(z,'scroll-view',['bindscrolltolower',12,'scrollY',1,'style',2],[],e,s,gg)
var o0J=_v()
_(c9J,o0J)
if(_oz(z,15,e,s,gg)){o0J.wxVkey=1
}
var lAK=_v()
_(c9J,lAK)
if(_oz(z,16,e,s,gg)){lAK.wxVkey=1
}
var aBK=_v()
_(c9J,aBK)
if(_oz(z,17,e,s,gg)){aBK.wxVkey=1
}
o0J.wxXCkey=1
lAK.wxXCkey=1
aBK.wxXCkey=1
_(h7J,c9J)
var tCK=_mz(z,'form',['bindsubmit',18,'data-status',1,'reportSubmit',2],[],e,s,gg)
var bEK=_n('view')
var oFK=_v()
_(bEK,oFK)
if(_oz(z,21,e,s,gg)){oFK.wxVkey=1
}
var xGK=_v()
_(bEK,xGK)
if(_oz(z,22,e,s,gg)){xGK.wxVkey=1
}
oFK.wxXCkey=1
xGK.wxXCkey=1
_(tCK,bEK)
var oHK=_n('view')
var fIK=_v()
_(oHK,fIK)
if(_oz(z,23,e,s,gg)){fIK.wxVkey=1
}
var cJK=_v()
_(oHK,cJK)
if(_oz(z,24,e,s,gg)){cJK.wxVkey=1
var hKK=_v()
_(cJK,hKK)
if(_oz(z,25,e,s,gg)){hKK.wxVkey=1
}
hKK.wxXCkey=1
}
fIK.wxXCkey=1
cJK.wxXCkey=1
_(tCK,oHK)
var oLK=_n('view')
_rz(z,oLK,'class',26,e,s,gg)
var cMK=_v()
_(oLK,cMK)
if(_oz(z,27,e,s,gg)){cMK.wxVkey=1
}
var oNK=_v()
_(oLK,oNK)
if(_oz(z,28,e,s,gg)){oNK.wxVkey=1
}
cMK.wxXCkey=1
oNK.wxXCkey=1
_(tCK,oLK)
var lOK=_n('view')
var aPK=_v()
_(lOK,aPK)
if(_oz(z,29,e,s,gg)){aPK.wxVkey=1
}
var tQK=_v()
_(lOK,tQK)
if(_oz(z,30,e,s,gg)){tQK.wxVkey=1
}
aPK.wxXCkey=1
tQK.wxXCkey=1
_(tCK,lOK)
var eRK=_n('view')
var bSK=_v()
_(eRK,bSK)
if(_oz(z,31,e,s,gg)){bSK.wxVkey=1
}
var oTK=_v()
_(eRK,oTK)
if(_oz(z,32,e,s,gg)){oTK.wxVkey=1
}
bSK.wxXCkey=1
oTK.wxXCkey=1
_(tCK,eRK)
var eDK=_v()
_(tCK,eDK)
if(_oz(z,33,e,s,gg)){eDK.wxVkey=1
}
var xUK=_n('view')
var oVK=_v()
_(xUK,oVK)
if(_oz(z,34,e,s,gg)){oVK.wxVkey=1
}
var fWK=_v()
_(xUK,fWK)
if(_oz(z,35,e,s,gg)){fWK.wxVkey=1
}
oVK.wxXCkey=1
fWK.wxXCkey=1
_(tCK,xUK)
eDK.wxXCkey=1
_(h7J,tCK)
o8J.wxXCkey=1
_(r,h7J)
x3J.wxXCkey=1
return r
}
e_[x[28]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var hYK=e_[x[29]].j
var oZK=_n('view')
_rz(z,oZK,'class',0,e,s,gg)
var o2K=_mz(z,'form',['reportSubmit',-1,'bindsubmit',1],[],e,s,gg)
var l3K=_n('view')
_rz(z,l3K,'class',2,e,s,gg)
var e6K=_v()
_(l3K,e6K)
var b7K=function(x9K,o8K,o0K,gg){
var cBL=_v()
_(o0K,cBL)
if(_oz(z,5,x9K,o8K,gg)){cBL.wxVkey=1
}
cBL.wxXCkey=1
return o0K
}
e6K.wxXCkey=2
_2z(z,3,b7K,e,s,gg,e6K,'item','index','index')
var a4K=_v()
_(l3K,a4K)
if(_oz(z,6,e,s,gg)){a4K.wxVkey=1
}
var t5K=_v()
_(l3K,t5K)
if(_oz(z,7,e,s,gg)){t5K.wxVkey=1
}
a4K.wxXCkey=1
t5K.wxXCkey=1
_(o2K,l3K)
_(oZK,o2K)
var hCL=_mz(z,'form',['reportSubmit',-1,'bindsubmit',8],[],e,s,gg)
var oDL=_v()
_(hCL,oDL)
var cEL=function(lGL,oFL,aHL,gg){
var eJL=_mz(z,'button',['catchtap',11,'class',1,'data-currentTab',2,'formType',3,'hoverClass',4],[],lGL,oFL,gg)
var bKL=_v()
_(eJL,bKL)
if(_oz(z,16,lGL,oFL,gg)){bKL.wxVkey=1
}
bKL.wxXCkey=1
_(aHL,eJL)
return aHL
}
oDL.wxXCkey=2
_2z(z,9,cEL,e,s,gg,oDL,'item','index','index')
_(oZK,hCL)
var c1K=_v()
_(oZK,c1K)
if(_oz(z,17,e,s,gg)){c1K.wxVkey=1
var oLL=_mz(z,'form',['reportSubmit',-1,'bindsubmit',18],[],e,s,gg)
var xML=_n('view')
_rz(z,xML,'class',19,e,s,gg)
var fOL=_v()
_(xML,fOL)
var cPL=function(oRL,hQL,cSL,gg){
var lUL=_v()
_(cSL,lUL)
if(_oz(z,22,oRL,hQL,gg)){lUL.wxVkey=1
}
lUL.wxXCkey=1
return cSL
}
fOL.wxXCkey=2
_2z(z,20,cPL,e,s,gg,fOL,'item','index','index')
var oNL=_v()
_(xML,oNL)
if(_oz(z,23,e,s,gg)){oNL.wxVkey=1
}
oNL.wxXCkey=1
_(oLL,xML)
_(c1K,oLL)
}
var aVL=_mz(z,'form',['reportSubmit',-1,'bindsubmit',24],[],e,s,gg)
var eXL=_n('view')
_rz(z,eXL,'class',25,e,s,gg)
var oZL=_v()
_(eXL,oZL)
var x1L=function(f3L,o2L,c4L,gg){
var o6L=_v()
_(c4L,o6L)
if(_oz(z,28,f3L,o2L,gg)){o6L.wxVkey=1
var c7L=_n('view')
_rz(z,c7L,'class',29,f3L,o2L,gg)
var o8L=_v()
_(c7L,o8L)
if(_oz(z,30,f3L,o2L,gg)){o8L.wxVkey=1
}
var l9L=_v()
_(c7L,l9L)
if(_oz(z,31,f3L,o2L,gg)){l9L.wxVkey=1
}
var a0L=_n('view')
_rz(z,a0L,'class',32,f3L,o2L,gg)
var tAM=_v()
_(a0L,tAM)
if(_oz(z,33,f3L,o2L,gg)){tAM.wxVkey=1
}
var eBM=_v()
_(a0L,eBM)
if(_oz(z,34,f3L,o2L,gg)){eBM.wxVkey=1
}
tAM.wxXCkey=1
eBM.wxXCkey=1
_(c7L,a0L)
o8L.wxXCkey=1
l9L.wxXCkey=1
_(o6L,c7L)
}
o6L.wxXCkey=1
return c4L
}
oZL.wxXCkey=2
_2z(z,26,x1L,e,s,gg,oZL,'item','index','{{item.MaterialID}}')
var bYL=_v()
_(eXL,bYL)
if(_oz(z,35,e,s,gg)){bYL.wxVkey=1
}
bYL.wxXCkey=1
_(aVL,eXL)
var tWL=_v()
_(aVL,tWL)
if(_oz(z,36,e,s,gg)){tWL.wxVkey=1
}
tWL.wxXCkey=1
_(oZK,aVL)
c1K.wxXCkey=1
_(r,oZK)
_ic(x[11],e_,x[29],e,s,r,gg);
_ic(x[30],e_,x[29],e,s,r,gg);
_ic(x[12],e_,x[29],e,s,r,gg);
hYK.pop()
hYK.pop()
hYK.pop()
return r
}
e_[x[29]]={f:m24,j:[],i:[],ti:[],ic:[x[11],x[30],x[12]]}
d_[x[31]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var oDM=e_[x[31]].j
var xEM=_mz(z,'view',['class',0,'hidden',1],[],e,s,gg)
var oFM=e_[x[31]].i
_ai(oFM,x[5],e_,x[31],10,4)
var fGM=_v()
_(xEM,fGM)
var cHM=_oz(z,3,e,s,gg)
var hIM=_gd(x[31],cHM,e_,d_)
if(hIM){
var oJM=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
fGM.wxXCkey=3
hIM(oJM,oJM,fGM,gg)
gg.f=cur_globalf
}
else _w(cHM,x[31],11,16)
oFM.pop()
_(r,xEM)
_ic(x[32],e_,x[31],e,s,r,gg);
oDM.pop()
return r
}
e_[x[31]]={f:m25,j:[],i:[],ti:[],ic:[x[32]]}
d_[x[33]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var oLM=e_[x[33]].j
var lMM=_v()
_(r,lMM)
if(_oz(z,0,e,s,gg)){lMM.wxVkey=1
}
_ic(x[32],e_,x[33],e,s,r,gg);
lMM.wxXCkey=1
oLM.pop()
return r
}
e_[x[33]]={f:m26,j:[],i:[],ti:[],ic:[x[32]]}
d_[x[34]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var tOM=e_[x[34]].j
var ePM=_n('view')
_rz(z,ePM,'class',0,e,s,gg)
var bQM=e_[x[34]].i
_ai(bQM,x[35],e_,x[34],2,6)
var oRM=_v()
_(ePM,oRM)
var xSM=_oz(z,2,e,s,gg)
var oTM=_gd(x[34],xSM,e_,d_)
if(oTM){
var fUM=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oRM.wxXCkey=3
oTM(fUM,fUM,oRM,gg)
gg.f=cur_globalf
}
else _w(xSM,x[34],3,18)
bQM.pop()
_(r,ePM)
_ic(x[36],e_,x[34],e,s,r,gg);
_ic(x[11],e_,x[34],e,s,r,gg);
tOM.pop()
tOM.pop()
return r
}
e_[x[34]]={f:m27,j:[],i:[],ti:[],ic:[x[36],x[11]]}
d_[x[37]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var hWM=e_[x[37]].j
var oXM=_v()
_(r,oXM)
if(_oz(z,0,e,s,gg)){oXM.wxVkey=1
var t3M=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var e4M=e_[x[37]].i
_ai(e4M,x[35],e_,x[37],5,6)
var b5M=_v()
_(t3M,b5M)
var o6M=_oz(z,4,e,s,gg)
var x7M=_gd(x[37],o6M,e_,d_)
if(x7M){
var o8M=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
b5M.wxXCkey=3
x7M(o8M,o8M,b5M,gg)
gg.f=cur_globalf
}
else _w(o6M,x[37],6,18)
e4M.pop()
_(oXM,t3M)
}
_ic(x[38],e_,x[37],e,s,r,gg);
_ic(x[36],e_,x[37],e,s,r,gg);
_ic(x[11],e_,x[37],e,s,r,gg);
var cYM=_v()
_(r,cYM)
if(_oz(z,5,e,s,gg)){cYM.wxVkey=1
}
var oZM=_v()
_(r,oZM)
if(_oz(z,6,e,s,gg)){oZM.wxVkey=1
var f9M=_v()
_(oZM,f9M)
if(_oz(z,7,e,s,gg)){f9M.wxVkey=1
}
f9M.wxXCkey=1
}
var l1M=_v()
_(r,l1M)
if(_oz(z,8,e,s,gg)){l1M.wxVkey=1
}
var a2M=_v()
_(r,a2M)
if(_oz(z,9,e,s,gg)){a2M.wxVkey=1
}
_ic(x[12],e_,x[37],e,s,r,gg);
_ic(x[30],e_,x[37],e,s,r,gg);
oXM.wxXCkey=1
cYM.wxXCkey=1
oZM.wxXCkey=1
l1M.wxXCkey=1
a2M.wxXCkey=1
hWM.pop()
hWM.pop()
hWM.pop()
hWM.pop()
hWM.pop()
return r
}
e_[x[37]]={f:m28,j:[],i:[],ti:[],ic:[x[38],x[36],x[11],x[12],x[30]]}
d_[x[39]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[39]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var oBN=e_[x[40]].j
var cCN=_v()
_(r,cCN)
if(_oz(z,0,e,s,gg)){cCN.wxVkey=1
}
var oDN=_v()
_(r,oDN)
if(_oz(z,1,e,s,gg)){oDN.wxVkey=1
var tGN=_mz(z,'view',['bindtouchstart',2,'class',1],[],e,s,gg)
var eHN=_v()
_(tGN,eHN)
if(_oz(z,4,e,s,gg)){eHN.wxVkey=1
}
var bIN=_v()
_(tGN,bIN)
if(_oz(z,5,e,s,gg)){bIN.wxVkey=1
}
var oJN=_n('view')
_rz(z,oJN,'class',6,e,s,gg)
var xKN=_n('view')
var oLN=e_[x[40]].i
_ai(oLN,x[41],e_,x[40],28,9)
var fMN=_v()
_(xKN,fMN)
var cNN=_oz(z,8,e,s,gg)
var hON=_gd(x[40],cNN,e_,d_)
if(hON){
var oPN=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
fMN.wxXCkey=3
hON(oPN,oPN,fMN,gg)
gg.f=cur_globalf
}
else _w(cNN,x[40],29,21)
oLN.pop()
_(oJN,xKN)
var cQN=_mz(z,'view',['catchtap',9,'class',1],[],e,s,gg)
var oRN=_v()
_(cQN,oRN)
if(_oz(z,11,e,s,gg)){oRN.wxVkey=1
}
var lSN=_v()
_(cQN,lSN)
if(_oz(z,12,e,s,gg)){lSN.wxVkey=1
}
oRN.wxXCkey=1
lSN.wxXCkey=1
_(oJN,cQN)
_(tGN,oJN)
eHN.wxXCkey=1
bIN.wxXCkey=1
_(oDN,tGN)
}
var lEN=_v()
_(r,lEN)
if(_oz(z,13,e,s,gg)){lEN.wxVkey=1
}
var aTN=_mz(z,'view',['bindtouchstart',14,'class',1],[],e,s,gg)
var tUN=_v()
_(aTN,tUN)
if(_oz(z,16,e,s,gg)){tUN.wxVkey=1
}
var eVN=_v()
_(aTN,eVN)
if(_oz(z,17,e,s,gg)){eVN.wxVkey=1
var oXN=_v()
_(eVN,oXN)
var xYN=function(f1N,oZN,c2N,gg){
var o4N=_n('view')
_rz(z,o4N,'class',21,f1N,oZN,gg)
var c5N=_v()
_(o4N,c5N)
if(_oz(z,22,f1N,oZN,gg)){c5N.wxVkey=1
}
var o6N=_v()
_(o4N,o6N)
if(_oz(z,23,f1N,oZN,gg)){o6N.wxVkey=1
}
c5N.wxXCkey=1
o6N.wxXCkey=1
_(c2N,o4N)
return c2N
}
oXN.wxXCkey=2
_2z(z,19,xYN,e,s,gg,oXN,'item','index','index')
}
var bWN=_v()
_(aTN,bWN)
if(_oz(z,24,e,s,gg)){bWN.wxVkey=1
}
tUN.wxXCkey=1
eVN.wxXCkey=1
bWN.wxXCkey=1
_(r,aTN)
var aFN=_v()
_(r,aFN)
if(_oz(z,25,e,s,gg)){aFN.wxVkey=1
}
_ic(x[32],e_,x[40],e,s,r,gg);
_ic(x[12],e_,x[40],e,s,r,gg);
_ic(x[30],e_,x[40],e,s,r,gg);
cCN.wxXCkey=1
oDN.wxXCkey=1
lEN.wxXCkey=1
aFN.wxXCkey=1
oBN.pop()
oBN.pop()
oBN.pop()
return r
}
e_[x[40]]={f:m30,j:[],i:[],ti:[],ic:[x[32],x[12],x[30]]}
d_[x[42]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var a8N=e_[x[42]].j
var t9N=_n('view')
_rz(z,t9N,'class',0,e,s,gg)
var e0N=_v()
_(t9N,e0N)
if(_oz(z,1,e,s,gg)){e0N.wxVkey=1
}
var bAO=_v()
_(t9N,bAO)
if(_oz(z,2,e,s,gg)){bAO.wxVkey=1
}
e0N.wxXCkey=1
bAO.wxXCkey=1
_(r,t9N)
_ic(x[32],e_,x[42],e,s,r,gg);
_ic(x[12],e_,x[42],e,s,r,gg);
_ic(x[30],e_,x[42],e,s,r,gg);
a8N.pop()
a8N.pop()
a8N.pop()
return r
}
e_[x[42]]={f:m31,j:[],i:[],ti:[],ic:[x[32],x[12],x[30]]}
d_[x[43]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var xCO=e_[x[43]].j
var oDO=_n('view')
_rz(z,oDO,'class',0,e,s,gg)
var fEO=_v()
_(oDO,fEO)
if(_oz(z,1,e,s,gg)){fEO.wxVkey=1
}
var cFO=_v()
_(oDO,cFO)
if(_oz(z,2,e,s,gg)){cFO.wxVkey=1
}
fEO.wxXCkey=1
cFO.wxXCkey=1
_(r,oDO)
_ic(x[32],e_,x[43],e,s,r,gg);
_ic(x[12],e_,x[43],e,s,r,gg);
_ic(x[30],e_,x[43],e,s,r,gg);
xCO.pop()
xCO.pop()
xCO.pop()
return r
}
e_[x[43]]={f:m32,j:[],i:[],ti:[],ic:[x[32],x[12],x[30]]}
d_[x[44]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var oHO=_v()
_(r,oHO)
if(_oz(z,0,e,s,gg)){oHO.wxVkey=1
var cIO=_n('view')
_rz(z,cIO,'class',1,e,s,gg)
var oJO=_v()
_(cIO,oJO)
if(_oz(z,2,e,s,gg)){oJO.wxVkey=1
}
var lKO=_n('view')
_rz(z,lKO,'class',3,e,s,gg)
var aLO=e_[x[44]].i
_ai(aLO,x[5],e_,x[44],9,12)
var tMO=_v()
_(lKO,tMO)
var eNO=_oz(z,5,e,s,gg)
var bOO=_gd(x[44],eNO,e_,d_)
if(bOO){
var oPO=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
tMO.wxXCkey=3
bOO(oPO,oPO,tMO,gg)
gg.f=cur_globalf
}
else _w(eNO,x[44],10,24)
aLO.pop()
_(cIO,lKO)
oJO.wxXCkey=1
_(oHO,cIO)
}
oHO.wxXCkey=1
return r
}
e_[x[44]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var oRO=e_[x[45]].j
var fSO=_n('view')
_rz(z,fSO,'class',0,e,s,gg)
var hUO=_mz(z,'swiper',['autoplay',1,'bindchange',1,'circular',2,'duration',3,'indicatorDots',4,'interval',5,'style',6],[],e,s,gg)
var oVO=_v()
_(hUO,oVO)
if(_oz(z,8,e,s,gg)){oVO.wxVkey=1
}
var cWO=_v()
_(hUO,cWO)
var oXO=function(aZO,lYO,t1O,gg){
var b3O=_v()
_(t1O,b3O)
if(_oz(z,11,aZO,lYO,gg)){b3O.wxVkey=1
}
b3O.wxXCkey=1
return t1O
}
cWO.wxXCkey=2
_2z(z,9,oXO,e,s,gg,cWO,'item','index','index')
oVO.wxXCkey=1
_(fSO,hUO)
var cTO=_v()
_(fSO,cTO)
if(_oz(z,12,e,s,gg)){cTO.wxVkey=1
}
var o4O=_mz(z,'view',['class',13,'hidden',1],[],e,s,gg)
var x5O=e_[x[45]].i
_ai(x5O,x[5],e_,x[45],33,14)
var o6O=_v()
_(o4O,o6O)
var f7O=_oz(z,16,e,s,gg)
var c8O=_gd(x[45],f7O,e_,d_)
if(c8O){
var h9O=_1z(z,15,e,s,gg) || {}
var cur_globalf=gg.f
o6O.wxXCkey=3
c8O(h9O,h9O,o6O,gg)
gg.f=cur_globalf
}
else _w(f7O,x[45],34,26)
x5O.pop()
_(fSO,o4O)
cTO.wxXCkey=1
_(r,fSO)
_ic(x[36],e_,x[45],e,s,r,gg);
_ic(x[12],e_,x[45],e,s,r,gg);
_ic(x[30],e_,x[45],e,s,r,gg);
oRO.pop()
oRO.pop()
oRO.pop()
return r
}
e_[x[45]]={f:m34,j:[],i:[],ti:[],ic:[x[36],x[12],x[30]]}
d_[x[46]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var cAP=e_[x[46]].j
var oBP=_n('view')
_rz(z,oBP,'class',0,e,s,gg)
var lCP=_v()
_(oBP,lCP)
if(_oz(z,1,e,s,gg)){lCP.wxVkey=1
}
var aDP=_v()
_(oBP,aDP)
if(_oz(z,2,e,s,gg)){aDP.wxVkey=1
}
lCP.wxXCkey=1
aDP.wxXCkey=1
_(r,oBP)
_ic(x[32],e_,x[46],e,s,r,gg);
_ic(x[12],e_,x[46],e,s,r,gg);
_ic(x[30],e_,x[46],e,s,r,gg);
cAP.pop()
cAP.pop()
cAP.pop()
return r
}
e_[x[46]]={f:m35,j:[],i:[],ti:[],ic:[x[32],x[12],x[30]]}
d_[x[47]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var eFP=e_[x[47]].j
var bGP=_n('view')
_rz(z,bGP,'class',0,e,s,gg)
var oHP=_v()
_(bGP,oHP)
if(_oz(z,1,e,s,gg)){oHP.wxVkey=1
}
var xIP=_v()
_(bGP,xIP)
if(_oz(z,2,e,s,gg)){xIP.wxVkey=1
}
oHP.wxXCkey=1
xIP.wxXCkey=1
_(r,bGP)
_ic(x[32],e_,x[47],e,s,r,gg);
_ic(x[12],e_,x[47],e,s,r,gg);
_ic(x[30],e_,x[47],e,s,r,gg);
eFP.pop()
eFP.pop()
eFP.pop()
return r
}
e_[x[47]]={f:m36,j:[],i:[],ti:[],ic:[x[32],x[12],x[30]]}
d_[x[48]]={}
d_[x[48]]["customform"]=function(e,s,r,gg){
var z=gz$gwx_38()
var b=x[48]+':customform'
r.wxVkey=b
gg.f=$gdc(f_["./pages/customform.wxml"],"",1)
if(p_[b]){_wl(b,x[48]);return}
p_[b]=true
try{
var oB=_mz(z,'form',['bindsubmit',1,'class',1,'data-formid',2],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,4,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_n('view')
_rz(z,oJ,'class',8,hG,cF,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,9,hG,cF,gg)){lK.wxVkey=1
}
var aL=_v()
_(oJ,aL)
if(_oz(z,10,hG,cF,gg)){aL.wxVkey=1
}
var tM=_v()
_(oJ,tM)
if(_oz(z,11,hG,cF,gg)){tM.wxVkey=1
}
var eN=_v()
_(oJ,eN)
if(_oz(z,12,hG,cF,gg)){eN.wxVkey=1
}
var bO=_v()
_(oJ,bO)
if(_oz(z,13,hG,cF,gg)){bO.wxVkey=1
}
var oP=_v()
_(oJ,oP)
if(_oz(z,14,hG,cF,gg)){oP.wxVkey=1
}
var xQ=_v()
_(oJ,xQ)
if(_oz(z,15,hG,cF,gg)){xQ.wxVkey=1
}
var oR=_v()
_(oJ,oR)
if(_oz(z,16,hG,cF,gg)){oR.wxVkey=1
}
var fS=_v()
_(oJ,fS)
if(_oz(z,17,hG,cF,gg)){fS.wxVkey=1
}
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
fS.wxXCkey=1
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,6,fE,e,s,gg,oD,'field','index','unique')
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
return r
}
e_[x[48]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
d_[x[49]]["footnav"]=function(e,s,r,gg){
var z=gz$gwx_39()
var b=x[49]+':footnav'
r.wxVkey=b
gg.f=$gdc(f_["./pages/footnav.wxml"],"",1)
if(p_[b]){_wl(b,x[49]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
var xC=_v()
_(r,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
oB.wxXCkey=1
xC.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
return r
}
e_[x[49]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var hMP=e_[x[50]].j
_ic(x[30],e_,x[50],e,s,r,gg);
_ic(x[12],e_,x[50],e,s,r,gg);
hMP.pop()
hMP.pop()
return r
}
e_[x[50]]={f:m39,j:[],i:[],ti:[],ic:[x[30],x[12]]}
d_[x[51]]={}
d_[x[51]]["ModuleBargain"]=function(e,s,r,gg){
var z=gz$gwx_41()
var b=x[51]+':ModuleBargain'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleBargain.wxml"],"",1)
if(p_[b]){_wl(b,x[51]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
return r
}
e_[x[51]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[52]]={}
d_[x[52]]["ModuleButton"]=function(e,s,r,gg){
var z=gz$gwx_42()
var b=x[52]+':ModuleButton'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleButton.wxml"],"",1)
if(p_[b]){_wl(b,x[52]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
return r
}
e_[x[52]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[53]]={}
d_[x[53]]["ModuleCoupon"]=function(e,s,r,gg){
var z=gz$gwx_43()
var b=x[53]+':ModuleCoupon'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleCoupon.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_v()
_(oB,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_mz(z,'view',['class',6,'style',1],[],hG,cF,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,8,hG,cF,gg)){lK.wxVkey=1
}
var aL=_v()
_(oJ,aL)
if(_oz(z,9,hG,cF,gg)){aL.wxVkey=1
}
lK.wxXCkey=1
aL.wxXCkey=1
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,4,fE,e,s,gg,oD,'coupon','index','index')
var xC=_v()
_(oB,xC)
if(_oz(z,10,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
return r
}
e_[x[53]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
d_[x[54]]["ModuleCustomForm"]=function(e,s,r,gg){
var z=gz$gwx_44()
var b=x[54]+':ModuleCustomForm'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleCustomForm.wxml"],"",1)
if(p_[b]){_wl(b,x[54]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
else{oB.wxVkey=2
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=e_[x[54]].i
_ai(oD,x[55],e_,x[54],7,8)
var fE=_v()
_(xC,fE)
var cF=_oz(z,4,e,s,gg)
var hG=_gd(x[54],cF,e_,d_)
if(hG){
var oH=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[54],8,20)
oD.pop()
_(oB,xC)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
return r
}
e_[x[54]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[56]]={}
d_[x[56]]["ModuleFootNav"]=function(e,s,r,gg){
var z=gz$gwx_45()
var b=x[56]+':ModuleFootNav'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleFootNav.wxml"],"",1)
if(p_[b]){_wl(b,x[56]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
return r
}
e_[x[56]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[57]]={}
d_[x[57]]["ModuleFullReduction"]=function(e,s,r,gg){
var z=gz$gwx_46()
var b=x[57]+':ModuleFullReduction'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleFullReduction.wxml"],"",1)
if(p_[b]){_wl(b,x[57]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
return r
}
e_[x[57]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[58]]={}
d_[x[58]]["ModuleImageText"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[58]+':ModuleImageText'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleImageText.wxml"],"",1)
if(p_[b]){_wl(b,x[58]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_mz(z,'view',['bindtap',5,'class',1,'data-linkdata',2,'data-linkid',3,'data-linktype',4],[],hG,cF,gg)
var lK=_n('view')
_rz(z,lK,'class',10,hG,cF,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,11,hG,cF,gg)){aL.wxVkey=1
}
var tM=_v()
_(lK,tM)
if(_oz(z,12,hG,cF,gg)){tM.wxVkey=1
}
aL.wxXCkey=1
tM.wxXCkey=1
_(oJ,lK)
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,3,fE,e,s,gg,oD,'item','index','index')
}
else if(_oz(z,13,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
if(_oz(z,16,xQ,oP,gg)){cT.wxVkey=1
var hU=_mz(z,'view',['bindtap',17,'class',1,'data-linkdata',2,'data-linkid',3,'data-linktype',4],[],xQ,oP,gg)
var oV=_n('view')
_rz(z,oV,'class',22,xQ,oP,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,23,xQ,oP,gg)){cW.wxVkey=1
}
var oX=_v()
_(oV,oX)
if(_oz(z,24,xQ,oP,gg)){oX.wxVkey=1
}
cW.wxXCkey=1
oX.wxXCkey=1
_(hU,oV)
_(cT,hU)
}
cT.wxXCkey=1
return oR
}
eN.wxXCkey=2
_2z(z,14,bO,e,s,gg,eN,'item','index','index')
}
else if(_oz(z,25,e,s,gg)){xC.wxVkey=3
var lY=_v()
_(xC,lY)
var aZ=function(e2,t1,b3,gg){
var x5=_v()
_(b3,x5)
if(_oz(z,28,e2,t1,gg)){x5.wxVkey=1
var o6=_mz(z,'view',['bindtap',29,'class',1,'data-linkdata',2,'data-linkid',3,'data-linktype',4],[],e2,t1,gg)
var f7=_n('view')
_rz(z,f7,'class',34,e2,t1,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,35,e2,t1,gg)){c8.wxVkey=1
}
var h9=_v()
_(f7,h9)
if(_oz(z,36,e2,t1,gg)){h9.wxVkey=1
}
c8.wxXCkey=1
h9.wxXCkey=1
_(o6,f7)
_(x5,o6)
}
x5.wxXCkey=1
return b3
}
lY.wxXCkey=2
_2z(z,26,aZ,e,s,gg,lY,'item','index','index')
}
else if(_oz(z,37,e,s,gg)){xC.wxVkey=4
var o0=_mz(z,'view',['bindtap',38,'class',1,'data-linkdata',2,'data-linkid',3,'data-linktype',4],[],e,s,gg)
var cAB=_n('view')
_rz(z,cAB,'class',43,e,s,gg)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,44,e,s,gg)){oBB.wxVkey=1
}
var lCB=_v()
_(cAB,lCB)
if(_oz(z,45,e,s,gg)){lCB.wxVkey=1
}
oBB.wxXCkey=1
lCB.wxXCkey=1
_(o0,cAB)
_(xC,o0)
}
else if(_oz(z,46,e,s,gg)){xC.wxVkey=5
var aDB=_mz(z,'view',['bindtap',47,'class',1,'data-linkdata',2,'data-linkid',3,'data-linktype',4],[],e,s,gg)
var eFB=_n('view')
_rz(z,eFB,'class',52,e,s,gg)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,53,e,s,gg)){bGB.wxVkey=1
}
var oHB=_v()
_(eFB,oHB)
if(_oz(z,54,e,s,gg)){oHB.wxVkey=1
}
bGB.wxXCkey=1
oHB.wxXCkey=1
_(aDB,eFB)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,55,e,s,gg)){tEB.wxVkey=1
}
tEB.wxXCkey=1
_(xC,aDB)
}
else{xC.wxVkey=6
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
return r
}
e_[x[58]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[59]]={}
d_[x[59]]["ModuleLine"]=function(e,s,r,gg){
var z=gz$gwx_48()
var b=x[59]+':ModuleLine'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleLine.wxml"],"",1)
if(p_[b]){_wl(b,x[59]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
return r
}
e_[x[59]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[60]]={}
d_[x[60]]["ModuleLink"]=function(e,s,r,gg){
var z=gz$gwx_49()
var b=x[60]+':ModuleLink'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleLink.wxml"],"",1)
if(p_[b]){_wl(b,x[60]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_mz(z,'view',['bindtap',7,'class',1,'data-linkdata',2,'data-linkid',3,'data-linktype',4],[],hG,cF,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,12,hG,cF,gg)){lK.wxVkey=1
}
lK.wxXCkey=1
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,5,fE,e,s,gg,oD,'link','index','index')
}
else{xC.wxVkey=2
var aL=_v()
_(xC,aL)
var tM=function(bO,eN,oP,gg){
var oR=_mz(z,'view',['bindtap',17,'class',1,'data-linkdata',2,'data-linkid',3,'data-linktype',4],[],bO,eN,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,22,bO,eN,gg)){fS.wxVkey=1
}
fS.wxXCkey=1
_(oP,oR)
return oP
}
aL.wxXCkey=2
_2z(z,15,tM,e,s,gg,aL,'link','index','index')
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
return r
}
e_[x[60]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[61]]={}
d_[x[61]]["ModuleMap"]=function(e,s,r,gg){
var z=gz$gwx_50()
var b=x[61]+':ModuleMap'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleMap.wxml"],"",1)
if(p_[b]){_wl(b,x[61]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
return r
}
e_[x[61]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[62]]={}
d_[x[62]]["ModuleNavigationCall"]=function(e,s,r,gg){
var z=gz$gwx_51()
var b=x[62]+':ModuleNavigationCall'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleNavigationCall.wxml"],"",1)
if(p_[b]){_wl(b,x[62]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var fE=_n('view')
_rz(z,fE,'class',3,e,s,gg)
var cF=_v()
_(fE,cF)
if(_oz(z,4,e,s,gg)){cF.wxVkey=1
var cI=_n('view')
_rz(z,cI,'class',5,e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,6,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(cI,lK)
if(_oz(z,7,e,s,gg)){lK.wxVkey=1
}
var aL=_v()
_(cI,aL)
if(_oz(z,8,e,s,gg)){aL.wxVkey=1
}
var tM=_v()
_(cI,tM)
if(_oz(z,9,e,s,gg)){tM.wxVkey=1
}
oJ.wxXCkey=1
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
_(cF,cI)
}
var hG=_v()
_(fE,hG)
if(_oz(z,10,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(fE,oH)
if(_oz(z,11,e,s,gg)){oH.wxVkey=1
var eN=_n('view')
_rz(z,eN,'class',12,e,s,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,13,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(eN,oP)
if(_oz(z,14,e,s,gg)){oP.wxVkey=1
}
var xQ=_v()
_(eN,xQ)
if(_oz(z,15,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(eN,oR)
if(_oz(z,16,e,s,gg)){oR.wxVkey=1
}
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
_(oH,eN)
}
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
_(xC,fE)
}
var oD=_v()
_(oB,oD)
if(_oz(z,17,e,s,gg)){oD.wxVkey=1
var fS=_n('view')
_rz(z,fS,'class',18,e,s,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,19,e,s,gg)){cT.wxVkey=1
var oV=_n('view')
_rz(z,oV,'class',20,e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,21,e,s,gg)){cW.wxVkey=1
}
var oX=_v()
_(oV,oX)
if(_oz(z,22,e,s,gg)){oX.wxVkey=1
}
var lY=_v()
_(oV,lY)
if(_oz(z,23,e,s,gg)){lY.wxVkey=1
}
cW.wxXCkey=1
oX.wxXCkey=1
lY.wxXCkey=1
_(cT,oV)
}
var hU=_v()
_(fS,hU)
if(_oz(z,24,e,s,gg)){hU.wxVkey=1
var aZ=_n('view')
_rz(z,aZ,'class',25,e,s,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,26,e,s,gg)){t1.wxVkey=1
}
var e2=_v()
_(aZ,e2)
if(_oz(z,27,e,s,gg)){e2.wxVkey=1
}
t1.wxXCkey=1
e2.wxXCkey=1
_(hU,aZ)
}
cT.wxXCkey=1
hU.wxXCkey=1
_(oD,fS)
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
return r
}
e_[x[62]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[63]]={}
d_[x[63]]["ModuleNewsList"]=function(e,s,r,gg){
var z=gz$gwx_52()
var b=x[63]+':ModuleNewsList'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleNewsList.wxml"],"",1)
if(p_[b]){_wl(b,x[63]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
var xC=_v()
_(r,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
var fE=_v()
_(oD,fE)
var cF=function(oH,hG,cI,gg){
var lK=_mz(z,'view',['bindtap',7,'class',1,'data-linkid',2,'data-linktype',3],[],oH,hG,gg)
var tM=_n('view')
_rz(z,tM,'class',11,oH,hG,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,12,oH,hG,gg)){eN.wxVkey=1
}
var bO=_v()
_(tM,bO)
if(_oz(z,13,oH,hG,gg)){bO.wxVkey=1
}
eN.wxXCkey=1
bO.wxXCkey=1
_(lK,tM)
var aL=_v()
_(lK,aL)
if(_oz(z,14,oH,hG,gg)){aL.wxVkey=1
}
aL.wxXCkey=1
_(cI,lK)
return cI
}
fE.wxXCkey=2
_2z(z,5,cF,e,s,gg,fE,'news','index','index')
}
else if(_oz(z,15,e,s,gg)){oD.wxVkey=2
var oP=_v()
_(oD,oP)
var xQ=function(fS,oR,cT,gg){
var oV=_mz(z,'view',['bindtap',19,'class',1,'data-linkid',2,'data-linktype',3],[],fS,oR,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,23,fS,oR,gg)){cW.wxVkey=1
}
cW.wxXCkey=1
_(cT,oV)
return cT
}
oP.wxXCkey=2
_2z(z,17,xQ,e,s,gg,oP,'news','index','index')
}
else if(_oz(z,24,e,s,gg)){oD.wxVkey=3
var oX=_v()
_(oD,oX)
var lY=function(t1,aZ,e2,gg){
var o4=_mz(z,'view',['bindtap',28,'class',1,'data-linkid',2,'data-linktype',3],[],t1,aZ,gg)
var x5=_v()
_(o4,x5)
if(_oz(z,32,t1,aZ,gg)){x5.wxVkey=1
}
var o6=_v()
_(o4,o6)
if(_oz(z,33,t1,aZ,gg)){o6.wxVkey=1
}
x5.wxXCkey=1
o6.wxXCkey=1
_(e2,o4)
return e2
}
oX.wxXCkey=2
_2z(z,26,lY,e,s,gg,oX,'news','index','index')
}
else if(_oz(z,34,e,s,gg)){oD.wxVkey=4
var f7=_v()
_(oD,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_mz(z,'view',['bindtap',38,'class',1,'data-linkid',2,'data-linktype',3],[],o0,h9,gg)
var aDB=_n('view')
_rz(z,aDB,'class',42,o0,h9,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,43,o0,h9,gg)){tEB.wxVkey=1
}
var eFB=_v()
_(aDB,eFB)
if(_oz(z,44,o0,h9,gg)){eFB.wxVkey=1
}
tEB.wxXCkey=1
eFB.wxXCkey=1
_(lCB,aDB)
_(cAB,lCB)
return cAB
}
f7.wxXCkey=2
_2z(z,36,c8,e,s,gg,f7,'news','index','index')
}
else if(_oz(z,45,e,s,gg)){oD.wxVkey=5
}
else if(_oz(z,46,e,s,gg)){oD.wxVkey=6
var bGB=_v()
_(oD,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_mz(z,'view',['bindtap',50,'class',1,'data-linkid',2,'data-linktype',3],[],oJB,xIB,gg)
var oNB=_n('view')
_rz(z,oNB,'class',54,oJB,xIB,gg)
var cOB=_v()
_(oNB,cOB)
if(_oz(z,55,oJB,xIB,gg)){cOB.wxVkey=1
}
var oPB=_v()
_(oNB,oPB)
if(_oz(z,56,oJB,xIB,gg)){oPB.wxVkey=1
}
cOB.wxXCkey=1
oPB.wxXCkey=1
_(hMB,oNB)
var lQB=_n('view')
_rz(z,lQB,'class',57,oJB,xIB,gg)
var aRB=_v()
_(lQB,aRB)
if(_oz(z,58,oJB,xIB,gg)){aRB.wxVkey=1
}
var tSB=_v()
_(lQB,tSB)
if(_oz(z,59,oJB,xIB,gg)){tSB.wxVkey=1
}
aRB.wxXCkey=1
tSB.wxXCkey=1
_(hMB,lQB)
_(fKB,hMB)
return fKB
}
bGB.wxXCkey=2
_2z(z,48,oHB,e,s,gg,bGB,'news','index','index')
}
else if(_oz(z,60,e,s,gg)){oD.wxVkey=7
var eTB=_v()
_(oD,eTB)
var bUB=function(xWB,oVB,oXB,gg){
var cZB=_mz(z,'view',['bindtap',64,'class',1,'data-linkid',2,'data-linktype',3],[],xWB,oVB,gg)
var h1B=_n('view')
_rz(z,h1B,'class',68,xWB,oVB,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,69,xWB,oVB,gg)){o2B.wxVkey=1
}
var c3B=_v()
_(h1B,c3B)
if(_oz(z,70,xWB,oVB,gg)){c3B.wxVkey=1
}
o2B.wxXCkey=1
c3B.wxXCkey=1
_(cZB,h1B)
_(oXB,cZB)
return oXB
}
eTB.wxXCkey=2
_2z(z,62,bUB,e,s,gg,eTB,'news','index','index')
}
oD.wxXCkey=1
}
oB.wxXCkey=1
xC.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m51=function(e,s,r,gg){
var z=gz$gwx_52()
return r
}
e_[x[63]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[64]]={}
d_[x[64]]["ModulePay"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[64]+':ModulePay'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModulePay.wxml"],"",1)
if(p_[b]){_wl(b,x[64]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m52=function(e,s,r,gg){
var z=gz$gwx_53()
return r
}
e_[x[64]]={f:m52,j:[],i:[],ti:[],ic:[]}
d_[x[65]]={}
d_[x[65]]["ModulePinTuan"]=function(e,s,r,gg){
var z=gz$gwx_54()
var b=x[65]+':ModulePinTuan'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModulePinTuan.wxml"],"",1)
if(p_[b]){_wl(b,x[65]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[65],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[65],85,18)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[65]]["ModulePinTuan-layout-101"]=function(e,s,r,gg){
var z=gz$gwx_54()
var b=x[65]+':ModulePinTuan-layout-101'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModulePinTuan.wxml"],"",1)
if(p_[b]){_wl(b,x[65]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,4,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
var oD=_mz(z,'view',['catchtap',6,'class',1,'data-linktype',2,'hoverClass',3],[],e,s,gg)
var fE=_n('view')
var cF=_v()
_(fE,cF)
if(_oz(z,10,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(fE,hG)
if(_oz(z,11,e,s,gg)){hG.wxVkey=1
}
cF.wxXCkey=1
hG.wxXCkey=1
_(oD,fE)
_(xC,oD)
}
xC.wxXCkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[65]]["ModulePinTuan-layout-102"]=function(e,s,r,gg){
var z=gz$gwx_54()
var b=x[65]+':ModulePinTuan-layout-102'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModulePinTuan.wxml"],"",1)
if(p_[b]){_wl(b,x[65]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[65]]["ModulePinTuan-layout-103"]=function(e,s,r,gg){
var z=gz$gwx_54()
var b=x[65]+':ModulePinTuan-layout-103'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModulePinTuan.wxml"],"",1)
if(p_[b]){_wl(b,x[65]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m53=function(e,s,r,gg){
var z=gz$gwx_54()
return r
}
e_[x[65]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[66]]={}
d_[x[66]]["ModuleProductList"]=function(e,s,r,gg){
var z=gz$gwx_55()
var b=x[66]+':ModuleProductList'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleProductList.wxml"],"",1)
if(p_[b]){_wl(b,x[66]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[66],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[66],39,18)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[66]]["ModuleProductList-layout-101"]=function(e,s,r,gg){
var z=gz$gwx_55()
var b=x[66]+':ModuleProductList-layout-101'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleProductList.wxml"],"",1)
if(p_[b]){_wl(b,x[66]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_n('view')
_rz(z,oH,'class',7,fE,oD,gg)
var oJ=_mz(z,'view',['bindtap',8,'class',1,'data-linkdata',2,'data-linkid',3,'data-linktype',4],[],fE,oD,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,13,fE,oD,gg)){lK.wxVkey=1
}
var aL=_n('view')
_rz(z,aL,'class',14,fE,oD,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,15,fE,oD,gg)){tM.wxVkey=1
}
var eN=_v()
_(aL,eN)
if(_oz(z,16,fE,oD,gg)){eN.wxVkey=1
}
var bO=_n('view')
_rz(z,bO,'class',17,fE,oD,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,18,fE,oD,gg)){oP.wxVkey=1
var oR=_n('view')
_rz(z,oR,'class',19,fE,oD,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,20,fE,oD,gg)){fS.wxVkey=1
}
var cT=_v()
_(oR,cT)
if(_oz(z,21,fE,oD,gg)){cT.wxVkey=1
}
fS.wxXCkey=1
cT.wxXCkey=1
_(oP,oR)
}
var xQ=_v()
_(bO,xQ)
if(_oz(z,22,fE,oD,gg)){xQ.wxVkey=1
}
oP.wxXCkey=1
xQ.wxXCkey=1
_(aL,bO)
tM.wxXCkey=1
eN.wxXCkey=1
_(oJ,aL)
lK.wxXCkey=1
_(oH,oJ)
var cI=_v()
_(oH,cI)
if(_oz(z,23,fE,oD,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,5,xC,e,s,gg,oB,'item','idx','idx')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[66]]["ModuleProductList-layout-102"]=function(e,s,r,gg){
var z=gz$gwx_55()
var b=x[66]+':ModuleProductList-layout-102'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleProductList.wxml"],"",1)
if(p_[b]){_wl(b,x[66]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_mz(z,'view',['bindtap',27,'class',1,'data-linkdata',2,'data-linkid',3,'data-linktype',4],[],fE,oD,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,32,fE,oD,gg)){cI.wxVkey=1
}
var lK=_n('view')
_rz(z,lK,'class',33,fE,oD,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,34,fE,oD,gg)){aL.wxVkey=1
}
var tM=_v()
_(lK,tM)
if(_oz(z,35,fE,oD,gg)){tM.wxVkey=1
}
var eN=_n('view')
_rz(z,eN,'class',36,fE,oD,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,37,fE,oD,gg)){bO.wxVkey=1
var xQ=_n('view')
_rz(z,xQ,'class',38,fE,oD,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,39,fE,oD,gg)){oR.wxVkey=1
}
var fS=_v()
_(xQ,fS)
if(_oz(z,40,fE,oD,gg)){fS.wxVkey=1
}
oR.wxXCkey=1
fS.wxXCkey=1
_(bO,xQ)
}
var oP=_v()
_(eN,oP)
if(_oz(z,41,fE,oD,gg)){oP.wxVkey=1
}
bO.wxXCkey=1
oP.wxXCkey=1
_(lK,eN)
aL.wxXCkey=1
tM.wxXCkey=1
_(oH,lK)
var oJ=_v()
_(oH,oJ)
if(_oz(z,42,fE,oD,gg)){oJ.wxVkey=1
}
cI.wxXCkey=1
oJ.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,25,xC,e,s,gg,oB,'item','index','ProductID')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[66]]["ModuleProductList-layout-103"]=function(e,s,r,gg){
var z=gz$gwx_55()
var b=x[66]+':ModuleProductList-layout-103'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleProductList.wxml"],"",1)
if(p_[b]){_wl(b,x[66]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_mz(z,'view',['bindtap',46,'class',1,'data-linkdata',2,'data-linkid',3,'data-linktype',4],[],fE,oD,gg)
var oJ=_n('view')
_rz(z,oJ,'class',51,fE,oD,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,52,fE,oD,gg)){lK.wxVkey=1
}
var aL=_n('view')
_rz(z,aL,'class',53,fE,oD,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,54,fE,oD,gg)){tM.wxVkey=1
}
var eN=_v()
_(aL,eN)
if(_oz(z,55,fE,oD,gg)){eN.wxVkey=1
}
var bO=_v()
_(aL,bO)
if(_oz(z,56,fE,oD,gg)){bO.wxVkey=1
}
var oP=_v()
_(aL,oP)
if(_oz(z,57,fE,oD,gg)){oP.wxVkey=1
var xQ=_n('view')
_rz(z,xQ,'class',58,fE,oD,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,59,fE,oD,gg)){oR.wxVkey=1
}
var fS=_v()
_(xQ,fS)
if(_oz(z,60,fE,oD,gg)){fS.wxVkey=1
}
oR.wxXCkey=1
fS.wxXCkey=1
_(oP,xQ)
}
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
_(oJ,aL)
lK.wxXCkey=1
_(oH,oJ)
var cI=_v()
_(oH,cI)
if(_oz(z,61,fE,oD,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,44,xC,e,s,gg,oB,'item','index','ProductID')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[66]]["ModuleProductList-layout-104"]=function(e,s,r,gg){
var z=gz$gwx_55()
var b=x[66]+':ModuleProductList-layout-104'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleProductList.wxml"],"",1)
if(p_[b]){_wl(b,x[66]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_mz(z,'view',['bindtap',65,'class',1,'data-linkdata',2,'data-linkid',3,'data-linktype',4],[],fE,oD,gg)
var oJ=_n('view')
_rz(z,oJ,'class',70,fE,oD,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,71,fE,oD,gg)){lK.wxVkey=1
}
var aL=_n('view')
_rz(z,aL,'class',72,fE,oD,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,73,fE,oD,gg)){tM.wxVkey=1
}
var eN=_n('view')
_rz(z,eN,'class',74,fE,oD,gg)
var oP=_n('view')
_rz(z,oP,'class',75,fE,oD,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,76,fE,oD,gg)){xQ.wxVkey=1
}
var oR=_v()
_(oP,oR)
if(_oz(z,77,fE,oD,gg)){oR.wxVkey=1
}
var fS=_v()
_(oP,fS)
if(_oz(z,78,fE,oD,gg)){fS.wxVkey=1
}
xQ.wxXCkey=1
oR.wxXCkey=1
fS.wxXCkey=1
_(eN,oP)
var bO=_v()
_(eN,bO)
if(_oz(z,79,fE,oD,gg)){bO.wxVkey=1
}
bO.wxXCkey=1
_(aL,eN)
tM.wxXCkey=1
_(oJ,aL)
lK.wxXCkey=1
_(oH,oJ)
var cI=_v()
_(oH,cI)
if(_oz(z,80,fE,oD,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,63,xC,e,s,gg,oB,'item','index','ProductID')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m54=function(e,s,r,gg){
var z=gz$gwx_55()
return r
}
e_[x[66]]={f:m54,j:[],i:[],ti:[],ic:[]}
d_[x[67]]={}
d_[x[67]]["ModuleSearch"]=function(e,s,r,gg){
var z=gz$gwx_56()
var b=x[67]+':ModuleSearch'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleSearch.wxml"],"",1)
if(p_[b]){_wl(b,x[67]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
}
else{oB.wxVkey=2
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
oD.wxXCkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m55=function(e,s,r,gg){
var z=gz$gwx_56()
return r
}
e_[x[67]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[68]]={}
d_[x[68]]["ModuleSecKill"]=function(e,s,r,gg){
var z=gz$gwx_57()
var b=x[68]+':ModuleSecKill'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleSecKill.wxml"],"",1)
if(p_[b]){_wl(b,x[68]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(xC,cF)
if(_oz(z,5,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(xC,hG)
if(_oz(z,6,e,s,gg)){hG.wxVkey=1
}
var oH=_n('view')
_rz(z,oH,'class',7,e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,8,e,s,gg)){cI.wxVkey=1
var lK=_v()
_(cI,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_mz(z,'view',['catchtap',13,'class',1,'data-linkdata',2,'data-linktype',3],[],eN,tM,gg)
var oR=_n('view')
_rz(z,oR,'class',17,eN,tM,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,18,eN,tM,gg)){fS.wxVkey=1
}
var cT=_v()
_(oR,cT)
if(_oz(z,19,eN,tM,gg)){cT.wxVkey=1
}
fS.wxXCkey=1
cT.wxXCkey=1
_(xQ,oR)
_(bO,xQ)
return bO
}
lK.wxXCkey=2
_2z(z,11,aL,e,s,gg,lK,'item','idx','{{item.id}}')
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,20,e,s,gg)){oJ.wxVkey=1
}
cI.wxXCkey=1
oJ.wxXCkey=1
_(xC,oH)
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
_(oB,xC)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m56=function(e,s,r,gg){
var z=gz$gwx_57()
return r
}
e_[x[68]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[69]]={}
d_[x[69]]["ModuleServiceList"]=function(e,s,r,gg){
var z=gz$gwx_58()
var b=x[69]+':ModuleServiceList'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleServiceList.wxml"],"",1)
if(p_[b]){_wl(b,x[69]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[69],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[69],31,18)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[69]]["ModuleServiceList-layout-101"]=function(e,s,r,gg){
var z=gz$gwx_58()
var b=x[69]+':ModuleServiceList-layout-101'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleServiceList.wxml"],"",1)
if(p_[b]){_wl(b,x[69]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_n('view')
_rz(z,oH,'class',6,fE,oD,gg)
var oJ=_mz(z,'view',['bindtap',7,'class',1,'data-linkid',2,'data-linktype',3],[],fE,oD,gg)
var lK=_n('view')
_rz(z,lK,'class',11,fE,oD,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,12,fE,oD,gg)){aL.wxVkey=1
}
var tM=_v()
_(lK,tM)
if(_oz(z,13,fE,oD,gg)){tM.wxVkey=1
}
aL.wxXCkey=1
tM.wxXCkey=1
_(oJ,lK)
_(oH,oJ)
var cI=_v()
_(oH,cI)
if(_oz(z,14,fE,oD,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,4,xC,e,s,gg,oB,'item','index','ServiceID')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[69]]["ModuleServiceList-layout-102"]=function(e,s,r,gg){
var z=gz$gwx_58()
var b=x[69]+':ModuleServiceList-layout-102'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleServiceList.wxml"],"",1)
if(p_[b]){_wl(b,x[69]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_mz(z,'view',['bindtap',18,'class',1,'data-linkid',2,'data-linktype',3],[],fE,oD,gg)
var oJ=_n('view')
_rz(z,oJ,'class',22,fE,oD,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,23,fE,oD,gg)){lK.wxVkey=1
}
var aL=_v()
_(oJ,aL)
if(_oz(z,24,fE,oD,gg)){aL.wxVkey=1
}
lK.wxXCkey=1
aL.wxXCkey=1
_(oH,oJ)
var cI=_v()
_(oH,cI)
if(_oz(z,25,fE,oD,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,16,xC,e,s,gg,oB,'item','index','ServiceID')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[69]]["ModuleServiceList-layout-103"]=function(e,s,r,gg){
var z=gz$gwx_58()
var b=x[69]+':ModuleServiceList-layout-103'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleServiceList.wxml"],"",1)
if(p_[b]){_wl(b,x[69]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_mz(z,'view',['bindtap',29,'class',1,'data-linkid',2,'data-linktype',3],[],fE,oD,gg)
var oJ=_n('view')
_rz(z,oJ,'class',33,fE,oD,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,34,fE,oD,gg)){lK.wxVkey=1
}
var aL=_v()
_(oJ,aL)
if(_oz(z,35,fE,oD,gg)){aL.wxVkey=1
}
lK.wxXCkey=1
aL.wxXCkey=1
_(oH,oJ)
var cI=_v()
_(oH,cI)
if(_oz(z,36,fE,oD,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,27,xC,e,s,gg,oB,'item','index','ServiceID')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[69]]["ModuleServiceList-layout-104"]=function(e,s,r,gg){
var z=gz$gwx_58()
var b=x[69]+':ModuleServiceList-layout-104'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleServiceList.wxml"],"",1)
if(p_[b]){_wl(b,x[69]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_mz(z,'view',['bindtap',40,'class',1,'data-linkid',2,'data-linktype',3],[],fE,oD,gg)
var oJ=_n('view')
_rz(z,oJ,'class',44,fE,oD,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,45,fE,oD,gg)){lK.wxVkey=1
}
var aL=_v()
_(oJ,aL)
if(_oz(z,46,fE,oD,gg)){aL.wxVkey=1
}
lK.wxXCkey=1
aL.wxXCkey=1
_(oH,oJ)
var cI=_v()
_(oH,cI)
if(_oz(z,47,fE,oD,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,38,xC,e,s,gg,oB,'item','index','ServiceID')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m57=function(e,s,r,gg){
var z=gz$gwx_58()
return r
}
e_[x[69]]={f:m57,j:[],i:[],ti:[],ic:[]}
d_[x[70]]={}
d_[x[70]]["ModuleShopWindow"]=function(e,s,r,gg){
var z=gz$gwx_59()
var b=x[70]+':ModuleShopWindow'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleShopWindow.wxml"],"",1)
if(p_[b]){_wl(b,x[70]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
var cF=function(oH,hG,cI,gg){
var lK=_v()
_(cI,lK)
if(_oz(z,8,oH,hG,gg)){lK.wxVkey=1
}
lK.wxXCkey=1
return cI
}
fE.wxXCkey=2
_2z(z,6,cF,e,s,gg,fE,'link','index','index')
oD.wxXCkey=1
_(oB,xC)
}
else if(_oz(z,9,e,s,gg)){oB.wxVkey=2
}
else if(_oz(z,10,e,s,gg)){oB.wxVkey=3
}
else if(_oz(z,11,e,s,gg)){oB.wxVkey=4
}
else if(_oz(z,12,e,s,gg)){oB.wxVkey=5
var aL=_n('view')
_rz(z,aL,'class',13,e,s,gg)
var tM=_v()
_(aL,tM)
var eN=function(oP,bO,xQ,gg){
var fS=_v()
_(xQ,fS)
if(_oz(z,18,oP,bO,gg)){fS.wxVkey=1
}
fS.wxXCkey=1
return xQ
}
tM.wxXCkey=2
_2z(z,16,eN,e,s,gg,tM,'link','index','index')
var cT=_v()
_(aL,cT)
var hU=function(cW,oV,oX,gg){
var aZ=_v()
_(oX,aZ)
if(_oz(z,23,cW,oV,gg)){aZ.wxVkey=1
}
aZ.wxXCkey=1
return oX
}
cT.wxXCkey=2
_2z(z,21,hU,e,s,gg,cT,'link','index','index')
_(oB,aL)
}
else if(_oz(z,24,e,s,gg)){oB.wxVkey=6
}
else{oB.wxVkey=7
var t1=_n('view')
_rz(z,t1,'class',25,e,s,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,26,e,s,gg)){e2.wxVkey=1
}
var b3=_v()
_(t1,b3)
var o4=function(o6,x5,f7,gg){
var h9=_v()
_(f7,h9)
if(_oz(z,31,o6,x5,gg)){h9.wxVkey=1
}
h9.wxXCkey=1
return f7
}
b3.wxXCkey=2
_2z(z,29,o4,e,s,gg,b3,'link','index','index')
e2.wxXCkey=1
_(oB,t1)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m58=function(e,s,r,gg){
var z=gz$gwx_59()
return r
}
e_[x[70]]={f:m58,j:[],i:[],ti:[],ic:[]}
d_[x[71]]={}
d_[x[71]]["ModuleSlide"]=function(e,s,r,gg){
var z=gz$gwx_60()
var b=x[71]+':ModuleSlide'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleSlide.wxml"],"",1)
if(p_[b]){_wl(b,x[71]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
var xC=_v()
_(r,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
oB.wxXCkey=1
xC.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m59=function(e,s,r,gg){
var z=gz$gwx_60()
return r
}
e_[x[71]]={f:m59,j:[],i:[],ti:[],ic:[]}
d_[x[72]]={}
d_[x[72]]["ModuleTest"]=function(e,s,r,gg){
var z=gz$gwx_61()
var b=x[72]+':ModuleTest'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleTest.wxml"],"",1)
if(p_[b]){_wl(b,x[72]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m60=function(e,s,r,gg){
var z=gz$gwx_61()
return r
}
e_[x[72]]={f:m60,j:[],i:[],ti:[],ic:[]}
d_[x[73]]={}
d_[x[73]]["ModuleTitle"]=function(e,s,r,gg){
var z=gz$gwx_62()
var b=x[73]+':ModuleTitle'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleTitle.wxml"],"",1)
if(p_[b]){_wl(b,x[73]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['bindtap',1,'class',1,'data-linkdata',2,'data-linkid',3,'data-linktype',4],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,6,e,s,gg)){xC.wxVkey=1
var hG=_v()
_(xC,hG)
if(_oz(z,7,e,s,gg)){hG.wxVkey=1
}
hG.wxXCkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,8,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(oB,fE)
if(_oz(z,9,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oB,cF)
if(_oz(z,10,e,s,gg)){cF.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m61=function(e,s,r,gg){
var z=gz$gwx_62()
return r
}
e_[x[73]]={f:m61,j:[],i:[],ti:[],ic:[]}
d_[x[74]]={}
d_[x[74]]["ModuleVideo"]=function(e,s,r,gg){
var z=gz$gwx_63()
var b=x[74]+':ModuleVideo'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/ModuleVideo.wxml"],"",1)
if(p_[b]){_wl(b,x[74]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
oD.wxXCkey=1
}
else{xC.wxVkey=2
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m62=function(e,s,r,gg){
var z=gz$gwx_63()
return r
}
e_[x[74]]={f:m62,j:[],i:[],ti:[],ic:[]}
d_[x[75]]={}
var m63=function(e,s,r,gg){
var z=gz$gwx_64()
var oBQ=_v()
_(r,oBQ)
if(_oz(z,0,e,s,gg)){oBQ.wxVkey=1
var fCQ=_mz(z,'view',['catchtap',1,'class',1,'data-linktype',2],[],e,s,gg)
var cDQ=_v()
_(fCQ,cDQ)
if(_oz(z,4,e,s,gg)){cDQ.wxVkey=1
}
cDQ.wxXCkey=1
_(oBQ,fCQ)
}
oBQ.wxXCkey=1
return r
}
e_[x[75]]={f:m63,j:[],i:[],ti:[],ic:[]}
d_[x[76]]={}
d_[x[76]]["customform"]=function(e,s,r,gg){
var z=gz$gwx_65()
var b=x[76]+':customform'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/customform.wxml"],"",1)
if(p_[b]){_wl(b,x[76]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'form',['bindsubmit',2,'class',1,'data-formid',2],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,5,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
var cF=function(oH,hG,cI,gg){
var lK=_v()
_(cI,lK)
if(_oz(z,9,oH,hG,gg)){lK.wxVkey=1
var aL=_n('view')
_rz(z,aL,'class',10,oH,hG,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,11,oH,hG,gg)){tM.wxVkey=1
}
var eN=_v()
_(aL,eN)
if(_oz(z,12,oH,hG,gg)){eN.wxVkey=1
}
var bO=_v()
_(aL,bO)
if(_oz(z,13,oH,hG,gg)){bO.wxVkey=1
}
var oP=_v()
_(aL,oP)
if(_oz(z,14,oH,hG,gg)){oP.wxVkey=1
var oV=_v()
_(oP,oV)
var cW=function(lY,oX,aZ,gg){
var e2=_n('label')
var b3=_v()
_(e2,b3)
if(_oz(z,18,lY,oX,gg)){b3.wxVkey=1
}
var o4=_v()
_(e2,o4)
if(_oz(z,19,lY,oX,gg)){o4.wxVkey=1
}
var x5=_v()
_(e2,x5)
if(_oz(z,20,lY,oX,gg)){x5.wxVkey=1
}
var o6=_v()
_(e2,o6)
if(_oz(z,21,lY,oX,gg)){o6.wxVkey=1
}
b3.wxXCkey=1
o4.wxXCkey=1
x5.wxXCkey=1
o6.wxXCkey=1
_(aZ,e2)
return aZ
}
oV.wxXCkey=2
_2z(z,16,cW,oH,hG,gg,oV,'item','index','unique')
}
var xQ=_v()
_(aL,xQ)
if(_oz(z,22,oH,hG,gg)){xQ.wxVkey=1
}
var oR=_v()
_(aL,oR)
if(_oz(z,23,oH,hG,gg)){oR.wxVkey=1
}
var fS=_v()
_(aL,fS)
if(_oz(z,24,oH,hG,gg)){fS.wxVkey=1
var f7=_mz(z,'view',['bindtap',25,'class',1,'data-col',2],[],oH,hG,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,28,oH,hG,gg)){c8.wxVkey=1
}
c8.wxXCkey=1
_(fS,f7)
}
var cT=_v()
_(aL,cT)
if(_oz(z,29,oH,hG,gg)){cT.wxVkey=1
}
var hU=_v()
_(aL,hU)
if(_oz(z,30,oH,hG,gg)){hU.wxVkey=1
}
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
fS.wxXCkey=1
cT.wxXCkey=1
hU.wxXCkey=1
_(lK,aL)
}
lK.wxXCkey=1
return cI
}
fE.wxXCkey=2
_2z(z,7,cF,e,s,gg,fE,'field','index','unique')
oD.wxXCkey=1
_(oB,xC)
}
else{oB.wxVkey=2
var h9=_mz(z,'form',['bindsubmit',31,'class',1,'data-formid',2],[],e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,34,e,s,gg)){o0.wxVkey=1
}
var cAB=_v()
_(h9,cAB)
var oBB=function(aDB,lCB,tEB,gg){
var bGB=_v()
_(tEB,bGB)
if(_oz(z,38,aDB,lCB,gg)){bGB.wxVkey=1
var oHB=_n('view')
_rz(z,oHB,'class',39,aDB,lCB,gg)
var xIB=_v()
_(oHB,xIB)
if(_oz(z,40,aDB,lCB,gg)){xIB.wxVkey=1
}
var oJB=_v()
_(oHB,oJB)
if(_oz(z,41,aDB,lCB,gg)){oJB.wxVkey=1
}
var fKB=_v()
_(oHB,fKB)
if(_oz(z,42,aDB,lCB,gg)){fKB.wxVkey=1
}
var cLB=_v()
_(oHB,cLB)
if(_oz(z,43,aDB,lCB,gg)){cLB.wxVkey=1
var aRB=_v()
_(cLB,aRB)
var tSB=function(bUB,eTB,oVB,gg){
var oXB=_n('label')
var fYB=_v()
_(oXB,fYB)
if(_oz(z,47,bUB,eTB,gg)){fYB.wxVkey=1
}
var cZB=_v()
_(oXB,cZB)
if(_oz(z,48,bUB,eTB,gg)){cZB.wxVkey=1
}
var h1B=_v()
_(oXB,h1B)
if(_oz(z,49,bUB,eTB,gg)){h1B.wxVkey=1
}
var o2B=_v()
_(oXB,o2B)
if(_oz(z,50,bUB,eTB,gg)){o2B.wxVkey=1
}
fYB.wxXCkey=1
cZB.wxXCkey=1
h1B.wxXCkey=1
o2B.wxXCkey=1
_(oVB,oXB)
return oVB
}
aRB.wxXCkey=2
_2z(z,45,tSB,aDB,lCB,gg,aRB,'item','index','unique')
}
var hMB=_v()
_(oHB,hMB)
if(_oz(z,51,aDB,lCB,gg)){hMB.wxVkey=1
}
var oNB=_v()
_(oHB,oNB)
if(_oz(z,52,aDB,lCB,gg)){oNB.wxVkey=1
}
var cOB=_v()
_(oHB,cOB)
if(_oz(z,53,aDB,lCB,gg)){cOB.wxVkey=1
var c3B=_mz(z,'view',['bindtap',54,'class',1,'data-col',2],[],aDB,lCB,gg)
var o4B=_v()
_(c3B,o4B)
if(_oz(z,57,aDB,lCB,gg)){o4B.wxVkey=1
}
o4B.wxXCkey=1
_(cOB,c3B)
}
var oPB=_v()
_(oHB,oPB)
if(_oz(z,58,aDB,lCB,gg)){oPB.wxVkey=1
}
var lQB=_v()
_(oHB,lQB)
if(_oz(z,59,aDB,lCB,gg)){lQB.wxVkey=1
}
xIB.wxXCkey=1
oJB.wxXCkey=1
fKB.wxXCkey=1
cLB.wxXCkey=1
hMB.wxXCkey=1
oNB.wxXCkey=1
cOB.wxXCkey=1
oPB.wxXCkey=1
lQB.wxXCkey=1
_(bGB,oHB)
}
bGB.wxXCkey=1
return tEB
}
cAB.wxXCkey=2
_2z(z,36,oBB,e,s,gg,cAB,'field','index','unique')
o0.wxXCkey=1
_(oB,h9)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m64=function(e,s,r,gg){
var z=gz$gwx_65()
return r
}
e_[x[76]]={f:m64,j:[],i:[],ti:[],ic:[]}
d_[x[77]]={}
var m65=function(e,s,r,gg){
var z=gz$gwx_66()
var cGQ=_v()
_(r,cGQ)
if(_oz(z,0,e,s,gg)){cGQ.wxVkey=1
var oHQ=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var lIQ=_v()
_(oHQ,lIQ)
if(_oz(z,3,e,s,gg)){lIQ.wxVkey=1
var oNQ=_mz(z,'view',['catchtap',4,'class',1],[],e,s,gg)
var xOQ=_v()
_(oNQ,xOQ)
if(_oz(z,6,e,s,gg)){xOQ.wxVkey=1
}
var oPQ=_v()
_(oNQ,oPQ)
if(_oz(z,7,e,s,gg)){oPQ.wxVkey=1
}
xOQ.wxXCkey=1
oPQ.wxXCkey=1
_(lIQ,oNQ)
}
var aJQ=_v()
_(oHQ,aJQ)
if(_oz(z,8,e,s,gg)){aJQ.wxVkey=1
}
var tKQ=_v()
_(oHQ,tKQ)
if(_oz(z,9,e,s,gg)){tKQ.wxVkey=1
}
var eLQ=_v()
_(oHQ,eLQ)
if(_oz(z,10,e,s,gg)){eLQ.wxVkey=1
}
var bMQ=_v()
_(oHQ,bMQ)
if(_oz(z,11,e,s,gg)){bMQ.wxVkey=1
}
lIQ.wxXCkey=1
aJQ.wxXCkey=1
tKQ.wxXCkey=1
eLQ.wxXCkey=1
bMQ.wxXCkey=1
_(cGQ,oHQ)
}
cGQ.wxXCkey=1
return r
}
e_[x[77]]={f:m65,j:[],i:[],ti:[],ic:[]}
d_[x[78]]={}
var m66=function(e,s,r,gg){
var z=gz$gwx_67()
var cRQ=_v()
_(r,cRQ)
if(_oz(z,0,e,s,gg)){cRQ.wxVkey=1
}
var hSQ=_v()
_(r,hSQ)
if(_oz(z,1,e,s,gg)){hSQ.wxVkey=1
}
var oTQ=_v()
_(r,oTQ)
if(_oz(z,2,e,s,gg)){oTQ.wxVkey=1
}
cRQ.wxXCkey=1
hSQ.wxXCkey=1
oTQ.wxXCkey=1
return r
}
e_[x[78]]={f:m66,j:[],i:[],ti:[],ic:[]}
d_[x[79]]={}
d_[x[79]]["modules"]=function(e,s,r,gg){
var z=gz$gwx_68()
var b=x[79]+':modules'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/modules.wxml"],"",1)
if(p_[b]){_wl(b,x[79]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
var cI=_oz(z,6,fE,oD,gg)
var oJ=_gd(x[79],cI,e_,d_)
if(oJ){
var lK=_1z(z,5,fE,oD,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[79],29,16)
return cF
}
oB.wxXCkey=2
_2z(z,3,xC,e,s,gg,oB,'m','idx','ModuleID')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[79]]["module-for"]=function(e,s,r,gg){
var z=gz$gwx_68()
var b=x[79]+':module-for'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/modules.wxml"],"",1)
if(p_[b]){_wl(b,x[79]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',8,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,9,e,s,gg)){xC.wxVkey=1
var lY=_v()
_(xC,lY)
var aZ=_oz(z,11,e,s,gg)
var t1=_gd(x[79],aZ,e_,d_)
if(t1){
var e2=_1z(z,10,e,s,gg) || {}
var cur_globalf=gg.f
lY.wxXCkey=3
t1(e2,e2,lY,gg)
gg.f=cur_globalf
}
else _w(aZ,x[79],38,17)
}
var oD=_v()
_(oB,oD)
if(_oz(z,12,e,s,gg)){oD.wxVkey=1
var b3=_v()
_(oD,b3)
var o4=_oz(z,14,e,s,gg)
var x5=_gd(x[79],o4,e_,d_)
if(x5){
var o6=_1z(z,13,e,s,gg) || {}
var cur_globalf=gg.f
b3.wxXCkey=3
x5(o6,o6,b3,gg)
gg.f=cur_globalf
}
else _w(o4,x[79],42,17)
}
var fE=_v()
_(oB,fE)
if(_oz(z,15,e,s,gg)){fE.wxVkey=1
var f7=_v()
_(fE,f7)
var c8=_oz(z,17,e,s,gg)
var h9=_gd(x[79],c8,e_,d_)
if(h9){
var o0=_1z(z,16,e,s,gg) || {}
var cur_globalf=gg.f
f7.wxXCkey=3
h9(o0,o0,f7,gg)
gg.f=cur_globalf
}
else _w(c8,x[79],46,17)
}
var cF=_v()
_(oB,cF)
if(_oz(z,18,e,s,gg)){cF.wxVkey=1
var cAB=_v()
_(cF,cAB)
var oBB=_oz(z,20,e,s,gg)
var lCB=_gd(x[79],oBB,e_,d_)
if(lCB){
var aDB=_1z(z,19,e,s,gg) || {}
var cur_globalf=gg.f
cAB.wxXCkey=3
lCB(aDB,aDB,cAB,gg)
gg.f=cur_globalf
}
else _w(oBB,x[79],50,17)
}
var hG=_v()
_(oB,hG)
if(_oz(z,21,e,s,gg)){hG.wxVkey=1
var tEB=_v()
_(hG,tEB)
var eFB=_oz(z,23,e,s,gg)
var bGB=_gd(x[79],eFB,e_,d_)
if(bGB){
var oHB=_1z(z,22,e,s,gg) || {}
var cur_globalf=gg.f
tEB.wxXCkey=3
bGB(oHB,oHB,tEB,gg)
gg.f=cur_globalf
}
else _w(eFB,x[79],54,17)
}
var oH=_v()
_(oB,oH)
if(_oz(z,24,e,s,gg)){oH.wxVkey=1
var xIB=_v()
_(oH,xIB)
var oJB=_oz(z,26,e,s,gg)
var fKB=_gd(x[79],oJB,e_,d_)
if(fKB){
var cLB=_1z(z,25,e,s,gg) || {}
var cur_globalf=gg.f
xIB.wxXCkey=3
fKB(cLB,cLB,xIB,gg)
gg.f=cur_globalf
}
else _w(oJB,x[79],58,26)
}
var cI=_v()
_(oB,cI)
if(_oz(z,27,e,s,gg)){cI.wxVkey=1
var hMB=_v()
_(cI,hMB)
var oNB=_oz(z,29,e,s,gg)
var cOB=_gd(x[79],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,28,e,s,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[79],62,26)
}
var oJ=_v()
_(oB,oJ)
if(_oz(z,30,e,s,gg)){oJ.wxVkey=1
var lQB=_v()
_(oJ,lQB)
var aRB=_oz(z,32,e,s,gg)
var tSB=_gd(x[79],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,31,e,s,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[79],66,26)
}
var lK=_v()
_(oB,lK)
if(_oz(z,33,e,s,gg)){lK.wxVkey=1
var bUB=_v()
_(lK,bUB)
var oVB=_oz(z,35,e,s,gg)
var xWB=_gd(x[79],oVB,e_,d_)
if(xWB){
var oXB=_1z(z,34,e,s,gg) || {}
var cur_globalf=gg.f
bUB.wxXCkey=3
xWB(oXB,oXB,bUB,gg)
gg.f=cur_globalf
}
else _w(oVB,x[79],70,26)
}
var aL=_v()
_(oB,aL)
if(_oz(z,36,e,s,gg)){aL.wxVkey=1
var fYB=_v()
_(aL,fYB)
var cZB=_oz(z,38,e,s,gg)
var h1B=_gd(x[79],cZB,e_,d_)
if(h1B){
var o2B=_1z(z,37,e,s,gg) || {}
var cur_globalf=gg.f
fYB.wxXCkey=3
h1B(o2B,o2B,fYB,gg)
gg.f=cur_globalf
}
else _w(cZB,x[79],74,17)
}
var tM=_v()
_(oB,tM)
if(_oz(z,39,e,s,gg)){tM.wxVkey=1
var c3B=_v()
_(tM,c3B)
var o4B=_oz(z,41,e,s,gg)
var l5B=_gd(x[79],o4B,e_,d_)
if(l5B){
var a6B=_1z(z,40,e,s,gg) || {}
var cur_globalf=gg.f
c3B.wxXCkey=3
l5B(a6B,a6B,c3B,gg)
gg.f=cur_globalf
}
else _w(o4B,x[79],78,17)
}
var eN=_v()
_(oB,eN)
if(_oz(z,42,e,s,gg)){eN.wxVkey=1
var t7B=_v()
_(eN,t7B)
var e8B=_oz(z,44,e,s,gg)
var b9B=_gd(x[79],e8B,e_,d_)
if(b9B){
var o0B=_1z(z,43,e,s,gg) || {}
var cur_globalf=gg.f
t7B.wxXCkey=3
b9B(o0B,o0B,t7B,gg)
gg.f=cur_globalf
}
else _w(e8B,x[79],82,17)
}
var bO=_v()
_(oB,bO)
if(_oz(z,45,e,s,gg)){bO.wxVkey=1
var xAC=_v()
_(bO,xAC)
var oBC=_oz(z,47,e,s,gg)
var fCC=_gd(x[79],oBC,e_,d_)
if(fCC){
var cDC=_1z(z,46,e,s,gg) || {}
var cur_globalf=gg.f
xAC.wxXCkey=3
fCC(cDC,cDC,xAC,gg)
gg.f=cur_globalf
}
else _w(oBC,x[79],86,17)
}
var oP=_v()
_(oB,oP)
if(_oz(z,48,e,s,gg)){oP.wxVkey=1
var hEC=_v()
_(oP,hEC)
var oFC=_oz(z,50,e,s,gg)
var cGC=_gd(x[79],oFC,e_,d_)
if(cGC){
var oHC=_1z(z,49,e,s,gg) || {}
var cur_globalf=gg.f
hEC.wxXCkey=3
cGC(oHC,oHC,hEC,gg)
gg.f=cur_globalf
}
else _w(oFC,x[79],90,17)
}
var xQ=_v()
_(oB,xQ)
if(_oz(z,51,e,s,gg)){xQ.wxVkey=1
var lIC=_v()
_(xQ,lIC)
var aJC=_oz(z,53,e,s,gg)
var tKC=_gd(x[79],aJC,e_,d_)
if(tKC){
var eLC=_1z(z,52,e,s,gg) || {}
var cur_globalf=gg.f
lIC.wxXCkey=3
tKC(eLC,eLC,lIC,gg)
gg.f=cur_globalf
}
else _w(aJC,x[79],94,17)
}
var oR=_v()
_(oB,oR)
if(_oz(z,54,e,s,gg)){oR.wxVkey=1
var bMC=_v()
_(oR,bMC)
var oNC=_oz(z,56,e,s,gg)
var xOC=_gd(x[79],oNC,e_,d_)
if(xOC){
var oPC=_1z(z,55,e,s,gg) || {}
var cur_globalf=gg.f
bMC.wxXCkey=3
xOC(oPC,oPC,bMC,gg)
gg.f=cur_globalf
}
else _w(oNC,x[79],98,17)
}
var fS=_v()
_(oB,fS)
if(_oz(z,57,e,s,gg)){fS.wxVkey=1
var fQC=_v()
_(fS,fQC)
var cRC=_oz(z,59,e,s,gg)
var hSC=_gd(x[79],cRC,e_,d_)
if(hSC){
var oTC=_1z(z,58,e,s,gg) || {}
var cur_globalf=gg.f
fQC.wxXCkey=3
hSC(oTC,oTC,fQC,gg)
gg.f=cur_globalf
}
else _w(cRC,x[79],102,17)
}
var cT=_v()
_(oB,cT)
if(_oz(z,60,e,s,gg)){cT.wxVkey=1
var cUC=_v()
_(cT,cUC)
var oVC=_oz(z,62,e,s,gg)
var lWC=_gd(x[79],oVC,e_,d_)
if(lWC){
var aXC=_1z(z,61,e,s,gg) || {}
var cur_globalf=gg.f
cUC.wxXCkey=3
lWC(aXC,aXC,cUC,gg)
gg.f=cur_globalf
}
else _w(oVC,x[79],106,17)
}
var hU=_v()
_(oB,hU)
if(_oz(z,63,e,s,gg)){hU.wxVkey=1
var tYC=_v()
_(hU,tYC)
var eZC=_oz(z,65,e,s,gg)
var b1C=_gd(x[79],eZC,e_,d_)
if(b1C){
var o2C=_1z(z,64,e,s,gg) || {}
var cur_globalf=gg.f
tYC.wxXCkey=3
b1C(o2C,o2C,tYC,gg)
gg.f=cur_globalf
}
else _w(eZC,x[79],110,17)
}
var oV=_v()
_(oB,oV)
if(_oz(z,66,e,s,gg)){oV.wxVkey=1
var x3C=_v()
_(oV,x3C)
var o4C=_oz(z,68,e,s,gg)
var f5C=_gd(x[79],o4C,e_,d_)
if(f5C){
var c6C=_1z(z,67,e,s,gg) || {}
var cur_globalf=gg.f
x3C.wxXCkey=3
f5C(c6C,c6C,x3C,gg)
gg.f=cur_globalf
}
else _w(o4C,x[79],114,17)
}
var cW=_v()
_(oB,cW)
if(_oz(z,69,e,s,gg)){cW.wxVkey=1
var h7C=_v()
_(cW,h7C)
var o8C=_oz(z,71,e,s,gg)
var c9C=_gd(x[79],o8C,e_,d_)
if(c9C){
var o0C=_1z(z,70,e,s,gg) || {}
var cur_globalf=gg.f
h7C.wxXCkey=3
c9C(o0C,o0C,h7C,gg)
gg.f=cur_globalf
}
else _w(o8C,x[79],118,17)
}
var oX=_v()
_(oB,oX)
if(_oz(z,72,e,s,gg)){oX.wxVkey=1
var lAD=_v()
_(oX,lAD)
var aBD=_oz(z,74,e,s,gg)
var tCD=_gd(x[79],aBD,e_,d_)
if(tCD){
var eDD=_1z(z,73,e,s,gg) || {}
var cur_globalf=gg.f
lAD.wxXCkey=3
tCD(eDD,eDD,lAD,gg)
gg.f=cur_globalf
}
else _w(aBD,x[79],122,17)
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
fS.wxXCkey=1
cT.wxXCkey=1
hU.wxXCkey=1
oV.wxXCkey=1
cW.wxXCkey=1
oX.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m67=function(e,s,r,gg){
var z=gz$gwx_68()
var oVQ=e_[x[79]].i
_ai(oVQ,x[80],e_,x[79],2,2)
_ai(oVQ,x[81],e_,x[79],3,2)
_ai(oVQ,x[82],e_,x[79],4,2)
_ai(oVQ,x[83],e_,x[79],5,2)
_ai(oVQ,x[84],e_,x[79],6,2)
_ai(oVQ,x[85],e_,x[79],7,2)
_ai(oVQ,x[86],e_,x[79],8,2)
_ai(oVQ,x[87],e_,x[79],9,2)
_ai(oVQ,x[88],e_,x[79],10,2)
_ai(oVQ,x[89],e_,x[79],11,2)
_ai(oVQ,x[90],e_,x[79],12,2)
_ai(oVQ,x[91],e_,x[79],13,2)
_ai(oVQ,x[92],e_,x[79],14,2)
_ai(oVQ,x[93],e_,x[79],15,2)
_ai(oVQ,x[94],e_,x[79],16,2)
_ai(oVQ,x[95],e_,x[79],17,2)
_ai(oVQ,x[96],e_,x[79],18,2)
_ai(oVQ,x[97],e_,x[79],19,2)
_ai(oVQ,x[98],e_,x[79],20,2)
_ai(oVQ,x[99],e_,x[79],21,2)
_ai(oVQ,x[100],e_,x[79],22,2)
_ai(oVQ,x[101],e_,x[79],23,2)
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
oVQ.pop()
return r
}
e_[x[79]]={f:m67,j:[],i:[],ti:[x[80],x[81],x[82],x[83],x[84],x[85],x[86],x[87],x[88],x[89],x[90],x[91],x[92],x[93],x[94],x[95],x[96],x[97],x[98],x[99],x[100],x[101]],ic:[]}
d_[x[102]]={}
var m68=function(e,s,r,gg){
var z=gz$gwx_69()
var aXQ=_v()
_(r,aXQ)
if(_oz(z,0,e,s,gg)){aXQ.wxVkey=1
}
aXQ.wxXCkey=1
return r
}
e_[x[102]]={f:m68,j:[],i:[],ti:[],ic:[]}
d_[x[103]]={}
var m69=function(e,s,r,gg){
var z=gz$gwx_70()
return r
}
e_[x[103]]={f:m69,j:[],i:[],ti:[],ic:[]}
d_[x[104]]={}
d_[x[104]]["wxParseVideo"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[104]+':wxParseVideo'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[104]]["wxParseImg"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[104]+':wxParseImg'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[104]]["WxEmojiView"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[104]+':WxEmojiView'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[104]]["wxParse"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[104]+':wxParse'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
var cI=_oz(z,7,fE,oD,gg)
var oJ=_gd(x[104],cI,e_,d_)
if(oJ){
var lK=_1z(z,6,fE,oD,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[104],40,22)
return cF
}
oB.wxXCkey=2
_2z(z,4,xC,e,s,gg,oB,'item','index','')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[104]]["wxParse0"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[104]+':wxParse0'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,9,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,10,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,15,hG,cF,gg)
var aL=_gd(x[104],lK,e_,d_)
if(aL){
var tM=_1z(z,14,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[104],53,34)
return oH
}
oD.wxXCkey=2
_2z(z,12,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,16,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,21,xQ,oP,gg)
var oV=_gd(x[104],hU,e_,d_)
if(oV){
var cW=_1z(z,20,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[104],66,42)
return oR
}
eN.wxXCkey=2
_2z(z,18,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,22,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,24,e,s,gg)
var aZ=_gd(x[104],lY,e_,d_)
if(aZ){
var t1=_1z(z,23,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[104],75,26)
}
else if(_oz(z,25,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,27,e,s,gg)
var o4=_gd(x[104],b3,e_,d_)
if(o4){
var x5=_1z(z,26,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[104],80,26)
}
else if(_oz(z,28,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',29,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,37,o0,h9,gg)
var tEB=_gd(x[104],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,36,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[104],87,34)
return cAB
}
f7.wxXCkey=2
_2z(z,34,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,38,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_oz(z,43,oJB,xIB,gg)
var cOB=_gd(x[104],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,42,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[104],94,34)
return fKB
}
bGB.wxXCkey=2
_2z(z,40,oHB,e,s,gg,bGB,'item','index','')
}
else if(_oz(z,44,e,s,gg)){xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_oz(z,49,eTB,tSB,gg)
var fYB=_gd(x[104],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,48,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[104],103,34)
return bUB
}
lQB.wxXCkey=2
_2z(z,46,aRB,e,s,gg,lQB,'item','index','')
}
else{xC.wxVkey=8
var h1B=_v()
_(xC,h1B)
var o2B=function(o4B,c3B,l5B,gg){
var t7B=_v()
_(l5B,t7B)
var e8B=_oz(z,54,o4B,c3B,gg)
var b9B=_gd(x[104],e8B,e_,d_)
if(b9B){
var o0B=_1z(z,53,o4B,c3B,gg) || {}
var cur_globalf=gg.f
t7B.wxXCkey=3
b9B(o0B,o0B,t7B,gg)
gg.f=cur_globalf
}
else _w(e8B,x[104],111,30)
return l5B
}
h1B.wxXCkey=2
_2z(z,51,o2B,e,s,gg,h1B,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,55,e,s,gg)){oB.wxVkey=2
var xAC=_v()
_(oB,xAC)
var oBC=_oz(z,57,e,s,gg)
var fCC=_gd(x[104],oBC,e_,d_)
if(fCC){
var cDC=_1z(z,56,e,s,gg) || {}
var cur_globalf=gg.f
xAC.wxXCkey=3
fCC(cDC,cDC,xAC,gg)
gg.f=cur_globalf
}
else _w(oBC,x[104],120,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[104]]["wxParse1"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[104]+':wxParse1'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,59,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,60,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,65,hG,cF,gg)
var aL=_gd(x[104],lK,e_,d_)
if(aL){
var tM=_1z(z,64,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[104],135,34)
return oH
}
oD.wxXCkey=2
_2z(z,62,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,66,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,71,xQ,oP,gg)
var oV=_gd(x[104],hU,e_,d_)
if(oV){
var cW=_1z(z,70,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[104],148,42)
return oR
}
eN.wxXCkey=2
_2z(z,68,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,72,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,74,e,s,gg)
var aZ=_gd(x[104],lY,e_,d_)
if(aZ){
var t1=_1z(z,73,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[104],157,26)
}
else if(_oz(z,75,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,77,e,s,gg)
var o4=_gd(x[104],b3,e_,d_)
if(o4){
var x5=_1z(z,76,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[104],162,26)
}
else if(_oz(z,78,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',79,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,87,o0,h9,gg)
var tEB=_gd(x[104],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,86,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[104],169,34)
return cAB
}
f7.wxXCkey=2
_2z(z,84,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,88,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_oz(z,93,oJB,xIB,gg)
var cOB=_gd(x[104],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,92,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[104],178,34)
return fKB
}
bGB.wxXCkey=2
_2z(z,90,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_oz(z,98,eTB,tSB,gg)
var fYB=_gd(x[104],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,97,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[104],186,30)
return bUB
}
lQB.wxXCkey=2
_2z(z,95,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,99,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,101,e,s,gg)
var c3B=_gd(x[104],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,100,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[104],195,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[104]]["wxParse2"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[104]+':wxParse2'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,103,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,104,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,109,hG,cF,gg)
var aL=_gd(x[104],lK,e_,d_)
if(aL){
var tM=_1z(z,108,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[104],209,34)
return oH
}
oD.wxXCkey=2
_2z(z,106,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,110,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,115,xQ,oP,gg)
var oV=_gd(x[104],hU,e_,d_)
if(oV){
var cW=_1z(z,114,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[104],222,42)
return oR
}
eN.wxXCkey=2
_2z(z,112,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,116,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,118,e,s,gg)
var aZ=_gd(x[104],lY,e_,d_)
if(aZ){
var t1=_1z(z,117,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[104],231,26)
}
else if(_oz(z,119,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,121,e,s,gg)
var o4=_gd(x[104],b3,e_,d_)
if(o4){
var x5=_1z(z,120,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[104],236,26)
}
else if(_oz(z,122,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',123,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,131,o0,h9,gg)
var tEB=_gd(x[104],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,130,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[104],243,34)
return cAB
}
f7.wxXCkey=2
_2z(z,128,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,132,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_oz(z,137,oJB,xIB,gg)
var cOB=_gd(x[104],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,136,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[104],252,34)
return fKB
}
bGB.wxXCkey=2
_2z(z,134,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_oz(z,142,eTB,tSB,gg)
var fYB=_gd(x[104],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,141,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[104],260,30)
return bUB
}
lQB.wxXCkey=2
_2z(z,139,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,143,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,145,e,s,gg)
var c3B=_gd(x[104],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,144,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[104],269,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[104]]["wxParse3"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[104]+':wxParse3'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,147,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,148,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,153,hG,cF,gg)
var aL=_gd(x[104],lK,e_,d_)
if(aL){
var tM=_1z(z,152,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[104],282,34)
return oH
}
oD.wxXCkey=2
_2z(z,150,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,154,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,159,xQ,oP,gg)
var oV=_gd(x[104],hU,e_,d_)
if(oV){
var cW=_1z(z,158,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[104],295,42)
return oR
}
eN.wxXCkey=2
_2z(z,156,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,160,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,162,e,s,gg)
var aZ=_gd(x[104],lY,e_,d_)
if(aZ){
var t1=_1z(z,161,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[104],304,26)
}
else if(_oz(z,163,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,165,e,s,gg)
var o4=_gd(x[104],b3,e_,d_)
if(o4){
var x5=_1z(z,164,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[104],309,26)
}
else if(_oz(z,166,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',167,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,175,o0,h9,gg)
var tEB=_gd(x[104],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,174,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[104],316,34)
return cAB
}
f7.wxXCkey=2
_2z(z,172,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,176,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_oz(z,181,oJB,xIB,gg)
var cOB=_gd(x[104],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,180,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[104],325,34)
return fKB
}
bGB.wxXCkey=2
_2z(z,178,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_oz(z,186,eTB,tSB,gg)
var fYB=_gd(x[104],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,185,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[104],333,30)
return bUB
}
lQB.wxXCkey=2
_2z(z,183,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,187,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,189,e,s,gg)
var c3B=_gd(x[104],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,188,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[104],342,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[104]]["wxParse4"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[104]+':wxParse4'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,191,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,192,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,197,hG,cF,gg)
var aL=_gd(x[104],lK,e_,d_)
if(aL){
var tM=_1z(z,196,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[104],355,34)
return oH
}
oD.wxXCkey=2
_2z(z,194,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,198,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,203,xQ,oP,gg)
var oV=_gd(x[104],hU,e_,d_)
if(oV){
var cW=_1z(z,202,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[104],368,42)
return oR
}
eN.wxXCkey=2
_2z(z,200,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,204,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,206,e,s,gg)
var aZ=_gd(x[104],lY,e_,d_)
if(aZ){
var t1=_1z(z,205,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[104],377,26)
}
else if(_oz(z,207,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,209,e,s,gg)
var o4=_gd(x[104],b3,e_,d_)
if(o4){
var x5=_1z(z,208,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[104],382,26)
}
else if(_oz(z,210,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',211,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,219,o0,h9,gg)
var tEB=_gd(x[104],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,218,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[104],389,34)
return cAB
}
f7.wxXCkey=2
_2z(z,216,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,220,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_oz(z,225,oJB,xIB,gg)
var cOB=_gd(x[104],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,224,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[104],398,34)
return fKB
}
bGB.wxXCkey=2
_2z(z,222,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_oz(z,230,eTB,tSB,gg)
var fYB=_gd(x[104],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,229,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[104],406,30)
return bUB
}
lQB.wxXCkey=2
_2z(z,227,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,231,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,233,e,s,gg)
var c3B=_gd(x[104],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,232,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[104],415,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[104]]["wxParse5"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[104]+':wxParse5'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,235,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,236,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,241,hG,cF,gg)
var aL=_gd(x[104],lK,e_,d_)
if(aL){
var tM=_1z(z,240,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[104],428,34)
return oH
}
oD.wxXCkey=2
_2z(z,238,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,242,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,247,xQ,oP,gg)
var oV=_gd(x[104],hU,e_,d_)
if(oV){
var cW=_1z(z,246,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[104],441,42)
return oR
}
eN.wxXCkey=2
_2z(z,244,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,248,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,250,e,s,gg)
var aZ=_gd(x[104],lY,e_,d_)
if(aZ){
var t1=_1z(z,249,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[104],450,26)
}
else if(_oz(z,251,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,253,e,s,gg)
var o4=_gd(x[104],b3,e_,d_)
if(o4){
var x5=_1z(z,252,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[104],455,26)
}
else if(_oz(z,254,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',255,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,263,o0,h9,gg)
var tEB=_gd(x[104],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,262,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[104],462,34)
return cAB
}
f7.wxXCkey=2
_2z(z,260,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,264,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_oz(z,269,oJB,xIB,gg)
var cOB=_gd(x[104],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,268,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[104],471,34)
return fKB
}
bGB.wxXCkey=2
_2z(z,266,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_oz(z,274,eTB,tSB,gg)
var fYB=_gd(x[104],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,273,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[104],479,30)
return bUB
}
lQB.wxXCkey=2
_2z(z,271,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,275,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,277,e,s,gg)
var c3B=_gd(x[104],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,276,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[104],488,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[104]]["wxParse6"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[104]+':wxParse6'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,279,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,280,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,285,hG,cF,gg)
var aL=_gd(x[104],lK,e_,d_)
if(aL){
var tM=_1z(z,284,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[104],501,34)
return oH
}
oD.wxXCkey=2
_2z(z,282,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,286,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,291,xQ,oP,gg)
var oV=_gd(x[104],hU,e_,d_)
if(oV){
var cW=_1z(z,290,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[104],514,42)
return oR
}
eN.wxXCkey=2
_2z(z,288,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,292,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,294,e,s,gg)
var aZ=_gd(x[104],lY,e_,d_)
if(aZ){
var t1=_1z(z,293,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[104],523,26)
}
else if(_oz(z,295,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,297,e,s,gg)
var o4=_gd(x[104],b3,e_,d_)
if(o4){
var x5=_1z(z,296,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[104],528,26)
}
else if(_oz(z,298,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',299,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,307,o0,h9,gg)
var tEB=_gd(x[104],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,306,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[104],535,34)
return cAB
}
f7.wxXCkey=2
_2z(z,304,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,308,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_oz(z,313,oJB,xIB,gg)
var cOB=_gd(x[104],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,312,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[104],544,34)
return fKB
}
bGB.wxXCkey=2
_2z(z,310,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_oz(z,318,eTB,tSB,gg)
var fYB=_gd(x[104],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,317,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[104],552,30)
return bUB
}
lQB.wxXCkey=2
_2z(z,315,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,319,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,321,e,s,gg)
var c3B=_gd(x[104],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,320,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[104],561,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[104]]["wxParse7"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[104]+':wxParse7'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,323,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,324,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,329,hG,cF,gg)
var aL=_gd(x[104],lK,e_,d_)
if(aL){
var tM=_1z(z,328,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[104],573,34)
return oH
}
oD.wxXCkey=2
_2z(z,326,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,330,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,335,xQ,oP,gg)
var oV=_gd(x[104],hU,e_,d_)
if(oV){
var cW=_1z(z,334,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[104],586,42)
return oR
}
eN.wxXCkey=2
_2z(z,332,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,336,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,338,e,s,gg)
var aZ=_gd(x[104],lY,e_,d_)
if(aZ){
var t1=_1z(z,337,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[104],595,26)
}
else if(_oz(z,339,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,341,e,s,gg)
var o4=_gd(x[104],b3,e_,d_)
if(o4){
var x5=_1z(z,340,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[104],600,26)
}
else if(_oz(z,342,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',343,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,351,o0,h9,gg)
var tEB=_gd(x[104],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,350,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[104],607,34)
return cAB
}
f7.wxXCkey=2
_2z(z,348,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,352,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_oz(z,357,oJB,xIB,gg)
var cOB=_gd(x[104],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,356,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[104],616,34)
return fKB
}
bGB.wxXCkey=2
_2z(z,354,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_oz(z,362,eTB,tSB,gg)
var fYB=_gd(x[104],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,361,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[104],624,30)
return bUB
}
lQB.wxXCkey=2
_2z(z,359,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,363,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,365,e,s,gg)
var c3B=_gd(x[104],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,364,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[104],633,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[104]]["wxParse8"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[104]+':wxParse8'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,367,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,368,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,373,hG,cF,gg)
var aL=_gd(x[104],lK,e_,d_)
if(aL){
var tM=_1z(z,372,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[104],646,34)
return oH
}
oD.wxXCkey=2
_2z(z,370,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,374,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,379,xQ,oP,gg)
var oV=_gd(x[104],hU,e_,d_)
if(oV){
var cW=_1z(z,378,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[104],659,42)
return oR
}
eN.wxXCkey=2
_2z(z,376,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,380,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,382,e,s,gg)
var aZ=_gd(x[104],lY,e_,d_)
if(aZ){
var t1=_1z(z,381,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[104],668,26)
}
else if(_oz(z,383,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,385,e,s,gg)
var o4=_gd(x[104],b3,e_,d_)
if(o4){
var x5=_1z(z,384,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[104],673,26)
}
else if(_oz(z,386,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',387,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,395,o0,h9,gg)
var tEB=_gd(x[104],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,394,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[104],680,34)
return cAB
}
f7.wxXCkey=2
_2z(z,392,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,396,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_oz(z,401,oJB,xIB,gg)
var cOB=_gd(x[104],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,400,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[104],689,34)
return fKB
}
bGB.wxXCkey=2
_2z(z,398,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_oz(z,406,eTB,tSB,gg)
var fYB=_gd(x[104],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,405,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[104],697,30)
return bUB
}
lQB.wxXCkey=2
_2z(z,403,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,407,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,409,e,s,gg)
var c3B=_gd(x[104],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,408,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[104],706,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[104]]["wxParse9"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[104]+':wxParse9'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,411,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,412,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,417,hG,cF,gg)
var aL=_gd(x[104],lK,e_,d_)
if(aL){
var tM=_1z(z,416,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[104],719,34)
return oH
}
oD.wxXCkey=2
_2z(z,414,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,418,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,423,xQ,oP,gg)
var oV=_gd(x[104],hU,e_,d_)
if(oV){
var cW=_1z(z,422,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[104],732,42)
return oR
}
eN.wxXCkey=2
_2z(z,420,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,424,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,426,e,s,gg)
var aZ=_gd(x[104],lY,e_,d_)
if(aZ){
var t1=_1z(z,425,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[104],741,26)
}
else if(_oz(z,427,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,429,e,s,gg)
var o4=_gd(x[104],b3,e_,d_)
if(o4){
var x5=_1z(z,428,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[104],746,26)
}
else if(_oz(z,430,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',431,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,439,o0,h9,gg)
var tEB=_gd(x[104],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,438,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[104],753,34)
return cAB
}
f7.wxXCkey=2
_2z(z,436,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,440,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_oz(z,445,oJB,xIB,gg)
var cOB=_gd(x[104],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,444,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[104],762,34)
return fKB
}
bGB.wxXCkey=2
_2z(z,442,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_oz(z,450,eTB,tSB,gg)
var fYB=_gd(x[104],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,449,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[104],770,30)
return bUB
}
lQB.wxXCkey=2
_2z(z,447,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,451,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,453,e,s,gg)
var c3B=_gd(x[104],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,452,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[104],779,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[104]]["wxParse10"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[104]+':wxParse10'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,455,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,456,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,461,hG,cF,gg)
var aL=_gd(x[104],lK,e_,d_)
if(aL){
var tM=_1z(z,460,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[104],792,34)
return oH
}
oD.wxXCkey=2
_2z(z,458,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,462,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,467,xQ,oP,gg)
var oV=_gd(x[104],hU,e_,d_)
if(oV){
var cW=_1z(z,466,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[104],805,42)
return oR
}
eN.wxXCkey=2
_2z(z,464,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,468,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,470,e,s,gg)
var aZ=_gd(x[104],lY,e_,d_)
if(aZ){
var t1=_1z(z,469,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[104],814,26)
}
else if(_oz(z,471,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,473,e,s,gg)
var o4=_gd(x[104],b3,e_,d_)
if(o4){
var x5=_1z(z,472,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[104],819,26)
}
else if(_oz(z,474,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',475,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,483,o0,h9,gg)
var tEB=_gd(x[104],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,482,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[104],826,34)
return cAB
}
f7.wxXCkey=2
_2z(z,480,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,484,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_oz(z,489,oJB,xIB,gg)
var cOB=_gd(x[104],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,488,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[104],835,34)
return fKB
}
bGB.wxXCkey=2
_2z(z,486,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_oz(z,494,eTB,tSB,gg)
var fYB=_gd(x[104],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,493,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[104],843,30)
return bUB
}
lQB.wxXCkey=2
_2z(z,491,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,495,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,497,e,s,gg)
var c3B=_gd(x[104],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,496,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[104],852,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[104]]["wxParse11"]=function(e,s,r,gg){
var z=gz$gwx_71()
var b=x[104]+':wxParse11'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[104]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,499,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,500,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,505,hG,cF,gg)
var aL=_gd(x[104],lK,e_,d_)
if(aL){
var tM=_1z(z,504,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[104],865,34)
return oH
}
oD.wxXCkey=2
_2z(z,502,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,506,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,511,xQ,oP,gg)
var oV=_gd(x[104],hU,e_,d_)
if(oV){
var cW=_1z(z,510,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[104],878,42)
return oR
}
eN.wxXCkey=2
_2z(z,508,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,512,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,514,e,s,gg)
var aZ=_gd(x[104],lY,e_,d_)
if(aZ){
var t1=_1z(z,513,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[104],887,26)
}
else if(_oz(z,515,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,517,e,s,gg)
var o4=_gd(x[104],b3,e_,d_)
if(o4){
var x5=_1z(z,516,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[104],892,26)
}
else if(_oz(z,518,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',519,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,527,o0,h9,gg)
var tEB=_gd(x[104],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,526,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[104],899,34)
return cAB
}
f7.wxXCkey=2
_2z(z,524,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,528,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_oz(z,533,oJB,xIB,gg)
var cOB=_gd(x[104],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,532,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[104],908,34)
return fKB
}
bGB.wxXCkey=2
_2z(z,530,oHB,e,s,gg,bGB,'item','index','')
}
else{xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
var oXB=_oz(z,538,eTB,tSB,gg)
var fYB=_gd(x[104],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,537,eTB,tSB,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[104],916,30)
return bUB
}
lQB.wxXCkey=2
_2z(z,535,aRB,e,s,gg,lQB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,539,e,s,gg)){oB.wxVkey=2
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,541,e,s,gg)
var c3B=_gd(x[104],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,540,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[104],925,22)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m70=function(e,s,r,gg){
var z=gz$gwx_71()
return r
}
e_[x[104]]={f:m70,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['pages/company/businessCard/common/ec-canvas/ec-canvas.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/company/businessCard/common/ec-canvas/ec-canvas.wxml'] = [$gwx, './pages/company/businessCard/common/ec-canvas/ec-canvas.wxml'];else __wxAppCode__['pages/company/businessCard/common/ec-canvas/ec-canvas.wxml'] = $gwx( './pages/company/businessCard/common/ec-canvas/ec-canvas.wxml' );
		__wxAppCode__['pages/company/businessCard/datadetails.json'] = {"navigationBarBackgroundColor":"#fff","navigationBarTextStyle":"black","navigationBarTitleText":"","backgroundTextStyle":"dark","enablePullDownRefresh":false,"usingComponents":{"ec-canvas":"./common/ec-canvas/ec-canvas"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/company/businessCard/datadetails.wxml'] = [$gwx, './pages/company/businessCard/datadetails.wxml'];else __wxAppCode__['pages/company/businessCard/datadetails.wxml'] = $gwx( './pages/company/businessCard/datadetails.wxml' );
	
	define("appjs/formValidate1.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e={name:{fieldName:"姓名",checkType:0,require:!0},tel:{fieldName:"电话",checkType:4,require:!0}};module.exports=e; 
 			}); 
		define("appjs/formValidate136.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e={col496:{fieldName:"姓名",fieldType:1,checkType:"1",require:!0},col2682:{fieldName:"电话",fieldType:1,checkType:"5",require:!0},col2683:{fieldName:"邮箱",fieldType:1,checkType:"6",require:!0},col2684:{fieldName:"产品类型",fieldType:4,checkType:"0",require:!0},col2685:{fieldName:"容量",fieldType:3,checkType:"0",require:!0},col2686:{fieldName:"地区",fieldType:7,checkType:"0",require:!0},col2687:{fieldName:"日期",fieldType:8,checkType:"0",require:!0},col497:{fieldName:"备注",fieldType:2,checkType:"1",require:!1}};module.exports=e; 
 			}); 
		define("common.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}function e(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=getApp(),i=null,s=null,r=null,l=null,u=require("components/wxb.js"),c={registerGlobalVar:function(t,e){this[t]=e},loadPageModules:function(t){var e=this;t.refresh&&e.clearInterval();var a=getCurrentPages()[getCurrentPages().length-1],o="HomeIndex";t.page&&(o=t.page);var i=a.route.match(/(CustomPage_\d+)_tabbar/i);i&&i.length>1&&(o=i[1]);var s=decodeURIComponent(t.scene||""),r=s.match(/sharepage=(CustomPage_\d+)/i);r&&r.length>1&&(o=r[1]),console.log("page:"+o,"scene:"+s),n.sendRequest({url:"/index.php?c=front/WxApp/PageApi&a=getPageModules&publish=1&sortcol=ShowOrder&page="+o+"&justCache="+e.getConfig().ModuleDataJustFromCache,method:"POST",success:function(t){if(t.success)try{t.appinfo&&"shop"===t.appinfo.Industry?wx.setStorageSync("Industryshop",!0):wx.setStorageSync("Industryshop",!1),t.modules.forEach(function(t){t.CouponList&&t.CouponList.forEach(function(t){if(t.beginTime=t.BeginTime.split(" ")[0].split("-").join("."),0==t.Type?t.Amount=(t.Amount/10).toString().replace(/([\.[1-9])0+$/,"$1").replace(/\.$/,""):t.Amount=t.Amount.replace(/([\.[1-9])0+$/,"$1").replace(/\.$/,""),"0"===t.EndTimeType){var e=t.TimeLimit.split(" ")[1].split(":")[0]+":"+t.TimeLimit.split(" ")[1].split(":")[1];t.timeLimit=t.TimeLimit.split(" ")[0].split("-").join(".")+" "+e}else t.timeLimit=t.TimeLimit}),"ModuleServiceList"===t.ModuleType&&t.ProList&&t.ProList.length>0&&t.ProList.forEach(function(t){for(var e=t.ImgUrl.split("/"),a=0;a<e.length;a++)/product/.test(e[a])&&(t.ImgUrl="/comdata/"+n.globalData.siteId+"/product/"+e[e.length-1])})}),a.setData({modules:t.modules,loading:!0}),t.pageTitle&&!/homeindex/i.test(o)&&(wx.setNavigationBarTitle({title:t.pageTitle}),a.setData({pageTitle:t.pageTitle,url:a.route+(a.options.id?"?id="+a.options.id:"")})),e.setFloatLayerInfo(t.appinfo.FloatLayerSetting),e.setCopyrightInfo(t.appinfo.CopyrightSetting),e.CACHEKEY=t.cachekey,e.clearInterval(),e.getPurchaseLimit()}catch(t){var i=t.toString();wx.showModal({title:"提示",showCancel:!1,content:i})}else console.log("getPageModules fail："+t.msg)},options:t,fail:function(t){console.log("getPageModules fail")}})},clearInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){clearInterval(i),clearInterval(s),clearInterval(r),clearInterval(l)}),getPurchaseLimit:function(){var t=this,e=getCurrentPages()[getCurrentPages().length-1],a=!0;i=setInterval(function(){var a=e.data.modules;try{for(var o=0;o<a.length;++o)if("ModuleSecKill"===a[o].ModuleType){var n=a[o].ActivityInfo,s=n.remainingTime;0==--s&&(t.loadPageModules(!0),clearInterval(i));var r=t.forMatterTime(s),l=r.hours,u=r.minutes,c=r.seconds;n.remainingTime=s,n.remainingTimeHours=l,n.remainingTimeMinutes=u,n.remainingTimeSeconds=c,a[o].ActivityInfo=n,t.setModuleData(a[o].ModuleID,a[o])}}catch(t){}},1e3),s=setInterval(function(){var a=e.data.modules;try{for(var o=0;o<a.length;++o)if("ModuleSecKill"===a[o].ModuleType){var n=a[o].ActivityInfo,s=n.morningInterval;0==--s&&(t.loadPageModules(!0),clearInterval(i)),n.morningInterval=s,a[o].ActivityInfo=n,t.setModuleData(a[o].ModuleID,a[o])}}catch(t){}},1e3),r=setInterval(function(){var o=e.data.modules;try{for(var n=0;n<o.length;++n)if("ModuleFullReduction"===o[n].ModuleType){var i=o[n].ActivityBase,s=i.activityTime;if(s>0&&(a=!1),--s<=0){i.activityTime="0",i.activityDay="0",i.activityHour="0",i.activityMinute="0",i.activitySecond="0",o[n].ActivityBase=i,t.setModuleData(o[n].ModuleID,o[n]);continue}var l=t.forMatterTime(s),u=l.days,c=l.hours,d=l.minutes,g=l.seconds;i.activityTime=s,i.activityDay=u,i.activityHour=c,i.activityMinute=d,i.activitySecond=g,o[n].ActivityBase=i,t.setModuleData(o[n].ModuleID,o[n])}a&&clearInterval(r),a=!0}catch(t){}},1e3),l=setInterval(function(){var a=e.data.modules;try{for(var o=0;o<a.length;++o)if("ModuleBargain"===a[o].ModuleType){var n=a[o].ActivityBase,i=n.activityTime;if(--i<=0){n.activityTime="0",n.activityDay="0",n.activityHour="0",n.activityMinute="0",n.activitySecond="0",a[o].ActivityBase=n,t.setModuleData(a[o].ModuleID,a[o]),clearInterval(l);continue}var s=t.forMatterTime(i),r=s.days,u=s.hours,c=s.minutes,d=s.seconds;n.activityTime=i,n.activityDay=r,n.activityHour=u,n.activityMinute=c,n.activitySecond=d,a[o].ActivityBase=n,t.setModuleData(a[o].ModuleID,a[o])}}catch(t){}},1e3)},registerGlobalFunc:function(){var t=getCurrentPages()[getCurrentPages().length-1],e=this,a=function(){var e={},a=getApp().globalData;e.customformvalues=t.data.globaldata&&t.data.globaldata.customformvalues?t.data.globaldata.customformvalues:{},e.appGlobalData=a,e.sysInfo=wx.getSystemInfoSync(),e.Industry=a.baseInfo&&a.baseInfo.Industry,e.cityName=wx.getStorageSync("cityName"),e.StoreSetting=wx.getStorageSync("StoreSetting"),e.geoAuthFlag=a.geoAuthFlag,e.store="",t.setData({globaldata:e})};a(),setTimeout(function(){a()},500),t.shareAppMessage=function(t){e.shareAppMessage(t)},t.getPageUrl=function(t,a){e.getPageUrl(t,a)},t.navTo=function(a){var o=a.currentTarget.dataset.linktype,n=a.currentTarget.dataset.linkid,i=a.currentTarget.dataset.linknorepeat;if("string"==typeof i&&"1"==i){if(1==t.data.navGoIng)return;t.data.navGoIng=!0,setTimeout(function(){t.data.navGoIng=!1},500)}var s=[],r=a.currentTarget.dataset.linkdata;if("string"==typeof r)try{if(r=JSON.parse(r))for(var l in r){var u=r[l];"string"!=typeof u&&"number"!=typeof u||(s[l]=u)}}catch(t){}e.navTo(o,n,s)},t.M_doSearch=function(a){e.doSearch(a,t)},t.M_goSearch=function(t){wx.navigateTo({url:"/pages/shop/searchPage"})},t.M_onSearchInput=function(t){},t.M_onSearchInputFocus=function(t){var a=t.currentTarget.dataset.moduleid;e.setModuleData(a,{HidePlaceHolder:1})},t.openSettingFn=function(t){var e=wx.getStorageSync("resultData");wx.navigateTo({url:"/pages/storechoose/storechoose/index?start_address="+e.result.address+"&city="+e.result.address_component.city+"&district="+e.result.address_component.district+"&lat="+e.result.location.lat+"&lng="+e.result.location.lng})},t.M_onSearchInputBlur=function(a){e.onSearchInput(a,t)},t.M_slideImgLoad=function(a){e.slideImgLoad(a,t)},t.M_getCoupon=function(a){e.getCoupon(a,t)},t.onChooseImg=function(a){e.onChooseImg(a,t)},t.onCustomFormSubmit=function(a){e.onCustomFormSubmit(a,t)},t.onCustomFormSelectChange=function(a){e.onCustomFormSelectChange(a,t)},t.onCustomFormDateChange=function(a){e.onCustomFormDateChange(a,t)},t.onCustomFormTimeChange=function(a){e.onCustomFormTimeChange(a,t)},t.onCustomFormDateTap=function(a){e.onCustomFormDateTap(a,t)},t.onCustomFormDateTimeChange=function(a){e.onCustomFormDateTimeChange(a,t)},t.onCustomFormDateTimeClear=function(a){e.onCustomFormDateTimeClear(a,t)},t.onCustomRegionChange=function(a){e.onCustomRegionChange(a,t)},t.onCustomFormTextInputChange=function(a){e.onCustomFormTextInputChange(a,t)},t.onCustomFormCheckboxChange=function(a){e.onCustomFormCheckboxChange(a,t)},t.onCustomFormRadioChange=function(a){e.onCustomFormRadioChange(a,t)},t.onClickMap=function(t){return e.getLocation(t.currentTarget.dataset.lat,t.currentTarget.dataset.lng,t.currentTarget.dataset.title,t.currentTarget.dataset.addr),!1},t.ImgchangeVideo=function(t){e.setModuleData(t.currentTarget.dataset.moduleid,{WxappShow:!1})},t.appPhoneCall=function(t){getApp().phoneCall()},this.setCopyrightInfo()},initCommonModules:function(){this.setCopyrightInfo(),this.setFloatLayerInfo()},setCopyrightInfo:function(t){var e=this;if(!t){var a=getApp();a.globalData&&Object.keys(a.globalData.baseInfo).length>0?(t=a.globalData.baseInfo.CopyrightSetting,e.setCopyrightInfoToPage(t)):setTimeout(function(){e.setCopyrightInfo(t)},200)}},setCopyrightInfoToPage:function(t){var e={};try{e=JSON.parse(t)||{}}catch(t){}var a="",o="";1==e.Enable&&(o+="container-copyright",1==e.ShowIcon?1==e.DisplayType?(a+=" leftRight",o+=" container-copyright-leftRight"):(a+=" topBottom",o+=" container-copyright-topBottom"):(a+=" noIcon",o+=" container-copyright-noIcon")),e.copyrightClassName=a,e.contentClassName=o,this.getCurPage().setData({copyrightInfo:e,appinfo:n.globalData.baseInfo})},setFloatLayerInfo:function(t,e){u=this;if(!t){var a=getApp();if(a.globalData&&a.globalData.baseInfo&&(e=a.globalData.baseInfo,t=e.FloatLayerSetting),!t&&a.globalData.businessCardInfo)return void u.setDefaultCardFloatLayer(e);if(!t)return void setTimeout(function(){u.setFloatLayerInfo(t,e)},200)}var o={};try{o=JSON.parse(t)||{}}catch(t){}o=this.adjustFloatLayer(o);var n=this.getCurPage(),i=this.getFloatLayerCurPageName(),s=!1;/productdetail/i.test(i)&&/(meirong)|(peixun)|(shop)|(yunzhi)/i.test(e.Industry)&&(s=!0);var r=0;1==o.EnableCustomService&&r++,1==o.EnableTel&&1==o.EnableNormalBtnShow&&r++,n.setData({floatLayerInfo:o,hasBottomBar:s,btnCount:r});var l=!1;if(n.setData({scrollTopCurrent:0,scrollBottomNum:0}),1==o.EnableNormalBtnShow){n.onPageScroll=function(t){if(t){var e="number"==typeof t.scrollTop?t.scrollTop:t.detail.scrollTop,a=this.data&&this.data.scrollTopCurrent||0;this.data.scrollTopCurrent,l=!(e-a>0),this.data.scrollBottomNum&&this.data.scrollBottomNum<e&&(l=!1),e<50&&(l=!1),this.setData({showTopFlag:l,scrollTopCurrent:e})}},n.scrollToTop=function(t){this.data.scrollFlag?this.setData({scrollTopNum:0}):wx.pageScrollTo({scrollTop:0,duration:500})},n.onReachBottom=function(t){this.setData({showTopFlag:!1,scrollBottomNum:this.data.scrollTopCurrent-10})};var u=this;n.goToHomeIndex=function(){u.navTo("HomeIndex")},u.goToBusinessCardDetail(),n.goToCardList=function(){var t=void 0,e=wx.getStorageSync("SiteID");wx.getStorageSync("businessCardInfo")?t=wx.getStorageSync("businessCardInfo"):a.globalData.businessCardInfo&&(t=a.globalData.businessCardInfo),1==t.isOne?u.navTo("NormalCardDetails","",{BusinessCardID:t.BusinessCardID,SiteID:e||""}):u.navTo("CardCase")}}else"yunzhi"!=this.getConfig().Industry&&"shop"!=this.getConfig().Industry&&"shoplite"!=this.getConfig().Industry&&(u.goToBusinessCardDetail(),n.goToCardList=function(){var t=void 0,e=wx.getStorageSync("SiteID");wx.getStorageSync("businessCardInfo")?t=wx.getStorageSync("businessCardInfo"):a.globalData.businessCardInfo&&(t=a.globalData.businessCardInfo),1==t.isOne?u.navTo("NormalCardDetails","",{BusinessCardID:t.BusinessCardID,SiteID:e||""}):u.navTo("CardCase")})},setDefaultCardFloatLayer:function(t){var e=this,a={};a=this.adjustFloatLayer(a);var o=this.getCurPage(),i=this.getFloatLayerCurPageName(),s=!1;/productdetail/i.test(i)&&/(meirong)|(peixun)|(shop)|(yunzhi)/i.test(t.Industry)&&(s=!0);var r=0;1==a.EnableCustomService&&r++,1==a.EnableTel&&1==a.EnableNormalBtnShow&&r++,o.setData({floatLayerInfo:a,hasBottomBar:s,btnCount:r}),1==a.EnableNormalBtnShow?(e.goToBusinessCardDetail(),o.goToCardList=function(){var t=void 0,a=wx.getStorageSync("SiteID");wx.getStorageSync("businessCardInfo")?t=wx.getStorageSync("businessCardInfo"):n.globalData.businessCardInfo&&(t=n.globalData.businessCardInfo),1==t.isOne?e.navTo("NormalCardDetails","",{BusinessCardID:t.BusinessCardID,SiteID:a||""}):e.navTo("CardCase")}):"yunzhi"!=this.getConfig().Industry&&"shop"!=this.getConfig().Industry&&"shoplite"!=this.getConfig().Industry&&(e.goToBusinessCardDetail(),o.goToCardList=function(){var t=void 0,a=wx.getStorageSync("SiteID");wx.getStorageSync("businessCardInfo")?t=wx.getStorageSync("businessCardInfo"):n.globalData.businessCardInfo&&(t=n.globalData.businessCardInfo),1==t.isOne?e.navTo("NormalCardDetails","",{BusinessCardID:t.BusinessCardID,SiteID:a||""}):e.navTo("CardCase")})},goToBusinessCardDetail:function(){var t=this,e=this.getCurPage();wx.getStorageSync("hasMobile");e.goToBusinessCardDetail=function(){t.businessCardInfos()}},businessCardInfos:function(){var t=void 0,e=this,a=wx.getStorageSync("SiteID");wx.getStorageSync("businessCardInfo")?t=wx.getStorageSync("businessCardInfo"):n.globalData.businessCardInfo&&(t=n.globalData.businessCardInfo),t.checkComplete?e.navTo("CardDetails","",{BusinessCardID:t.businessCardID,SiteID:a||""}):e.navTo("EditCard","",{ID:t.businessCardID,checkComplete:t.businessCardInfo?"1":"0"})},adjustFloatLayer:function(t){var e=this.getCurPage(),a=(t=t||e.data.floatLayerInfo||{}).ShowPages||"",o=this.getFloatLayerCurPageName(),i=new RegExp(o,"i").test(a);n.globalData.businessCardInfo&&(t.businessCardInfo=n.globalData.businessCardInfo),"pages/shop/index"!=e.route&&"pages/company/index"!=e.route||(t.showBusinessCard=!0),t.Enable=1,t.EnableCustomService=1==t.EnableCustomService&&i?1:0;var s=/(homeindex)|(productdetail)|(servicedetail)|(custompage)/i.test(o);t.EnableNormalBtnShow=s?1:0;var r=e.options&&1==e.options.fromShare,l=(e.options?decodeURIComponent(e.options.scene||""):"").match(/sharepage=(CustomPage_\d+)/i);l&&l.length>1&&(r=!0);var u=r&&/(productdetail)|(servicedetail)|(custompage)/i.test(o)&&/(meirong)|(peixun)|(meifa)|(jianshen)|(jianzhan)/i.test(n.globalData.baseInfo.Industry);return u=u||r&&/custompage/i.test(o),t.EnableGoToHomeIndex=u?1:0,t},getFloatLayerCurPageName:function(){var t=this.getCurPage().route,e=null;return/(pages\/shop\/index)|(pages\/index)|(pages\/company\/index)/i.test(t)?e="homeindex":/mycenter/i.test(t)?e="usercenter":/orderdetail/i.test(t)?e="orderdetail":/productdetail/i.test(t)?e="productdetail":/reserve-by-person/i.test(t)?e="servicedetail":/reserve-by-product/i.test(t)?e="servicedetail":/custompage/i.test(t)&&(e=/tabbar/i.test(t)?t.replace(/.*(custompage_\d+).*/,"$1"):"custompage_"+getCurrentPages()[getCurrentPages().length-1].data.optionsData.id),e},setPopupFromShare:function(){var t=this,e=this.getCurPage();if(e.options.scene){var a={};decodeURIComponent(e.options.scene).split("&").map(function(t,e){if(-1!==t.indexOf("=")){var o=t.split("=");a[o[0]]=o[1]}if(-1!==t.indexOf("_")){var n=t.split("_");a[n[0]]=n[1]}}),e.options=a}1==e.options.fromShare&&(e.goToHomeIndex=function(){t.navTo("HomeIndex")},e.setData({showPopupFromShare:1}))},getCurPage:function(){return getCurrentPages()[getCurrentPages().length-1]},CONFIG:{},CACHEKEY:"",getConfig:function(){return this.CONFIG.SITEID||(this.CONFIG=function(){var t=wx.getExtConfigSync();return t.ext?t.ext:require("/config.js")}()),this.CONFIG},URLCONFIG:null,getUrlConfig:function(){return this.URLCONFIG||(this.URLCONFIG=function(){try{return require("/urlconfig.js")}catch(t){return{}}}()),this.URLCONFIG},getUrlByLinkType:function(t,e,a){var n={};n.HomeIndex="/pages/index",n.UserCenter="/pages/ucenter/index",n.ShopCart="/pages/shop/shopcart",n.AboutUs="/pages/company/aboutus",n.ContactUs="/pages/company/contact",n.ProductList="/pages/productlist",n.RetailProductList="/pages/shop/retailproductlist",n.ProductClass="/pages/productlist?classid=$id",n.ProductDetail="/pages/productdetail?id=$id",n.NewsList="/pages/newslist",n.NewsClass="/pages/newslist?classid=$id",n.NewsDetail="/pages/newsdetail?id=$id",n.CaseList="/pages/company/caselist",n.CaseClass="/pages/company/caselist?classid=$id",n.CaseDetail="/pages/company/casedetail?id=$id";var i=this.getUrlConfig();for(var s in i)"object"==o(i[s])?n[s]=i[s].url:n[s]=i[s];var r=n[t];if(r&&(r=r.replace("$id",e),"object"==(void 0===a?"undefined":o(a))&&a))for(var s in a)r.indexOf("?")>-1?r+="&"+s+"="+encodeURI(a[s]):r+="?"+s+"="+encodeURI(a[s]);return r},phoneAuthorization:function(t,e,a,o){var i=this.getCurPage(),s=this.getUrlByLinkType(t,e,a);i.turnOff=function(){n.turnOff()},i.getPhoneNumber=function(a){if(i.setData({phonelicense:!1}),a.detail.errMsg.indexOf("getPhoneNumber:ok")>-1){var r=n.globalData.appId,l=n.globalData.session_key,d=new u(r,l).decryptData(a.detail.encryptedData,a.detail.iv);n.loadphoneInfo(d.phoneNumber),"ProductDetail"===t||"NewsDetail"===t||"ServiceDetail"===t?c.navToUrl(s):"entryBusinessCardHome"===t?c.businessCardInfos():(c.couponCollection(t,e),i.setData({allowspopup:!0}))}else 2===o?(i.setData({allowspopup:!0}),i.abolish=function(){i.setData({allowspopup:!1})}):"ProductDetail"===t||"NewsDetail"===t||"ServiceDetail"===t?c.navToUrl(s):"entryBusinessCardHome"===t?c.businessCardInfos():c.couponCollection(t,e);i.setData({phonelicense:!1,authorizationfailure:!1})}},navTo:function(t,e,a){var o=!1,i=n.globalData.getMobileNode,s=["ProductDetail","NewsDetail","ServiceDetail"].includes(t),r=0;r="ProductDetail"===t?i?n.globalData.getMobileNode.checkGoodsDetails:0:"NewsDetail"===t?i?n.globalData.getMobileNode.readArticles:0:i?n.globalData.getMobileNode.checkServiceDetails:0;var l=wx.getStorageSync("hasMobile")||0;if("ProductDetail"!==t&&"NewsDetail"!==t&&"ServiceDetail"!==t||0===r||(o=!0),0===n.globalData.hasMobile&&s&&o&&!l)0!==r&&(this.getCurPage().setData({phonelicense:!0}),this.phoneAuthorization(t,e,a,r));else{if("OneKeyPhoneCall"==t)return void getApp().phoneCall();if("OneKeyNav"==t)return void getApp().getLocation();"miniprogram"===t?wx.navigateToMiniProgram({appId:a.appid,path:a.path,extraData:{},envVersion:"develop"}):"h5"===t&&wx.navigateTo({url:"/pages/webview/webview?path="+a.h5});var u=this.getUrlByLinkType(t,e,a);if(!u)return;"HomeIndex"==t?wx.reLaunch({url:u}):this.navToUrl(u)}},navToUrl:function(t){if(t.indexOf("?")>-1)for(var e={},a=t.split("?")[1].split("&"),o=0;o<a.length;o++){var n=a[o].split("=");e[this.trim(n[0])]=this.trim(n[1])}wx.navigateTo({url:t})},shareAppMessage:function(t){var e="pages/index",a=getApp().globalData.appTitle,n=getApp().globalData.appDescription;return"object"==(void 0===t?"undefined":o(t))?(t.url&&(e=t.url),t.title&&(a=t.title),t.desc&&(n=t.desc)):"string"==typeof t&&t&&(e=t),{title:a,desc:n,path:e}},getPageUrl:function(t,e){var a=getCurrentPages()[getCurrentPages().length-1].__route__,o=[];for(var n in e)o.push(n+"="+e[n]);return o.length>0&&(a+="?"+o.join("&")),t.setData({pageurl:a}),a},onChooseImg:function(t,e){var a=this,o=t.currentTarget.dataset.col;wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){var s=i.tempFilePaths;n.uploadRequest({url:"/index.php?c=Front/WxApp/ServiceApi&a=uploadImg",filePath:s[0],name:"makeAnAppointment",success:function(n){var i=JSON.parse(n);i.tempFilePaths=s[0],i.col=o,a.setCustomFormPageData(t,e,i)},fail:function(t){},complete:function(t){wx.hideLoading()}})}})},onCustomFormSubmit:function(t,e){this.validateForm(t.detail.value)&&n.sendRequest({url:"/index.php?c=Front/WxApp/JsonApi&a=saveCustomFormData",method:"POST",data:t.detail.value,success:function(t){if(t.success){n.showModal({title:"提示",content:"提交成功"});var a=e.data.globaldata||{};a.customformvalues={},e.setData({globaldata:a})}else n.showModal({title:"提示",content:"提交失败："+t.msg})},fail:function(t){n.showModal({title:"提示",content:"提交失败："+t})}})},validateForm:function(t){var e={};for(var a in t)if(a.indexOf("-fieldID")>-1){var o=t[a];e[o]={fieldName:t[o+"-fieldName"],fieldType:t[o+"-fieldType"],checkType:t[o+"-fieldCheckType"],require:"1"==t[o+"-fieldRequire"]}}var i={2:"^[0-9]+$",3:"^1\\d{10}$",4:"^\\d{3,4}\\-\\d{6,9}$",5:"^((1\\d{10})|(\\d{3,4}\\-\\d{6,9}))$",6:"^[a-z\\d]+([\\-_\\.][a-z\\d]+)*@([a-z\\d]+[\\-\\.]*)+\\.[a-z\\d]{2,5}$",7:"^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$",8:"^\\d{4}\\-\\d{1,2}\\-\\d{1,2}\\s+\\d{1,2}:\\d{1,2}$"};for(var s in t)if(e[s]){if("string"==typeof t[s]&&(t[s]=t[s].replace(/(^\s*)|(\s*$)/g,"")),e[s]&&e[s].require){if(!t[s])return n.showModal({title:"提示",content:"请输入"+e[s].fieldName}),!1;if(t[s]instanceof Array&&0==t[s].length)return n.showModal({title:"提示",content:"请输入"+e[s].fieldName}),!1}var r=e[s].checkType;if("8"==e[s].fieldType&&(r="8"),i[r]){var l=new RegExp(i[r],"i");if(t[s]&&!l.test(t[s]))return n.showModal({title:"提示",content:e[s].fieldName+"格式不正确"}),!1}}return!0},onCustomFormTextInputChange:function(t,e){var a=t.detail.value;this.setCustomFormPageData(t,e,a)},onCustomFormRadioChange:function(t,e){var a=t.detail.value;this.setCustomFormPageData(t,e,a)},onCustomFormSelectChange:function(t,e){var a=t.currentTarget.dataset.array[t.detail.value];this.setCustomFormPageData(t,e,a)},onCustomFormCheckboxChange:function(t,e){var a=t.detail.value;this.setCustomFormPageData(t,e,a)},onCustomFormDateChange:function(t,e){var a=t.detail.value;this.setCustomFormPageData(t,e,a)},onCustomFormTimeChange:function(t,e){var a=t.detail.value;this.setCustomFormPageData(t,e,a)},onCustomRegionChange:function(t,e){var a=new Array;for(var o in t.detail.value)a.push(t.detail.value[o]);var n=a.join(",");this.setCustomFormPageData(t,e,n)},setCustomFormPageData:function(t,e,a){var o=t.currentTarget.dataset.col,n=e.data.globaldata||{},i=n.customformvalues||{};i[o+"val"]=a.path?a.path:a,i[o+"valimg"]=a.tempFilePaths?a.tempFilePaths:"",n.customformvalues=i,e.setData({globaldata:n})},doSearch:function(t,e){var a=this.trim(t.detail.value);if(a){var o=getApp().globalData.baseInfo.Industry,n="";n=(n="meifa"==o||"peixun"==o||"meirong"==o||"jianshen"==o?this.getUrlByLinkType("ServiceList",0):"retail"==o?this.getUrlByLinkType("RetailProductList",0):this.getUrlByLinkType("ProductList",0)).indexOf("?")>-1?n+"&keyword="+a:n+"?keyword="+a,wx.navigateTo({url:n})}},onSearchInput:function(t,e){var a=this.trim(t.detail.value),o=t.currentTarget.dataset.moduleid;a?this.setModuleData(o,{HidePlaceHolder:1}):this.setModuleData(o,{HidePlaceHolder:0})},getCoupon:function(t,e){var a=this,o=wx.getStorageSync("hasMobile")||0,i=n.globalData.getMobileNode?n.globalData.getMobileNode.getCoupons:0,s=e.data.globaldata||{};s.gettingCoupon||(s.gettingCoupon=!0,e.setData({globaldata:s}),setTimeout(function(){s.gettingCoupon=!1,e.setData({globaldata:s})},2e3),0===n.globalData.hasMobile&&0===o&&0!==i?((e=this.getCurPage()).setData({phonelicense:!0}),this.phoneAuthorization(t.currentTarget.dataset.moduleid,t.currentTarget.dataset.couponid,1,i)):a.couponCollection(t.currentTarget.dataset.moduleid,t.currentTarget.dataset.couponid))},couponCollection:function(t,e){var a=this,o=function(){a.loadModuleData(t),wx.showToast({title:"领取成功",icon:"success",duration:3e3})},n=function(t,e){getApp().getCoupon(t,e)};getApp().getCoupon(e,o,null,function(){a.ShopUtil.showRegUI({onRegOrBindSuccess:function(){page.setData({showUserReg:!1}),n(couponid,o)}})})},loadModuleData:function(t){var e=this;n.sendRequest({hideLoading:!0,url:"/index.php?c=Front/WxApp/PageApi&a=getModuleData&moduleId="+t+"&cachekey="+e.CACHEKEY+"&justCache="+e.getConfig().ModuleDataJustFromCache,method:"GET",success:function(a){if(a.success){a.data.CouponList&&a.data.CouponList.length>0&&a.data.CouponList.forEach(function(t){if(t.beginTime=t.BeginTime.split(" ")[0].split("-").join("."),0==t.Type?t.Amount=(t.Amount/10).toString().replace(/([\.[1-9])0+$/,"$1").replace(/\.$/,""):t.Amount=t.Amount.replace(/([\.[1-9])0+$/,"$1").replace(/\.$/,""),"0"===t.EndTimeType){var e=t.TimeLimit.split(" ")[1].split(":")[0]+":"+t.TimeLimit.split(" ")[1].split(":")[1];t.timeLimit=t.TimeLimit.split(" ")[0].split("-").join(".")+" "+e}else t.timeLimit=t.TimeLimit});for(var o=e.getCurPage(),n=o.data.modules,i=0;i<n.length;i++)parseInt(n[i].ModuleID)==parseInt(t)&&(n[i]=a.data);o.setData({modules:n})}},fail:function(t){console.log("loadModuleData fail")}})},setModuleData:function(t,o){var n=this.getCurPage(),i=n.data.modules,s=i.findIndex(function(e){return e.ModuleID==t});o=a({},i[s],o),s>-1&&n.setData(e({},"modules["+s+"]",o))},slideImgLoad:function(t,e){var a=this.getImageSize(t),o=t.currentTarget.dataset.moduleid;e.data["slide"+o]||(e.data.globaldata.slideheight||(e.data.globaldata.slideheight={}),e.data.globaldata.slideheight[o]=a.imageHeight,e.data["slide"+o]=!0)},getImageSize:function(t){var e={},a=t.detail.width,o=t.detail.height,n=o/a;return wx.getSystemInfo({success:function(t){var i=t.windowWidth,s=t.windowHeight;n<s/i?(e.imageWidth=i,e.imageHeight=i*o/a):(e.imageHeight=s,e.imageWidth=s*a/o)}}),e},trim:function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},showToast:function(t){wx.showToast({title:t.title,icon:t.icon,duration:t.duration||1500,success:function(e){"function"==typeof t.success&&t.success(e)},fail:function(e){"function"==typeof t.fail&&t.fail(e)},complete:function(e){"function"==typeof t.complete&&t.complete(e)}})},hideToast:function(){wx.hideToast()},showModal:function(t){wx.showModal({title:t.title||"提示",content:t.content,showCancel:t.showCancel||!1,cancelText:t.cancelText||"取消",cancelColor:t.cancelColor||"#000000",confirmText:t.confirmText||"确定",confirmColor:t.confirmColor||"#3CC51F",success:function(e){e.confirm?"function"==typeof t.confirm&&t.confirm(e):"function"==typeof t.cancel&&t.cancel(e)},fail:function(e){"function"==typeof t.fail&&t.fail(e)},complete:function(e){"function"==typeof t.complete&&t.complete(e)}})},countTdown:function(a,o,n){var i=this.getCurPage(),s=this;if(o||0==o){var r=a;clearInterval(s["fullReduction"+o]),s["fullReduction"+o]=setInterval(function(){var a;if(--r<0)return clearInterval(s["fullReduction"+o]),void(n&&n(1));var l=s.forMatterTime(r),u=l.days,c=l.hours,d=l.minutes,g=l.seconds,f=[];f.push("activityTimeArr"+o),i.setData((a={},e(a,f[0],{day:u,hour:c,minute:d,second:g}),e(a,"key",[].concat(t(i.data.key),f)),a));var p=i.data.key.filter(function(t,e,a){return a.indexOf(t)===e}),h=[];p.forEach(function(t,e){h.push(i.data["activityTimeArr"+e])}),i.setData({key:p,timeInterval:h}),n&&n(0)},1e3)}else{var l=a;clearInterval(s.fullReduction),s.fullReduction=setInterval(function(){if(--l<0)return clearInterval(s.fullReduction),void(n&&n(1));var t=s.forMatterTime(l),e=t.days,a=t.hours,o=t.minutes,r=t.seconds;i.setData({activityTime:{day:e,hour:a,minute:o,second:r}}),n&&n(0)},1e3)}},forMatterTime:function(t){var e=parseInt(t/60/60/24,10),a=parseInt(t/60/60%24,10),o=parseInt(t/60%60,10),n=parseInt(t%60,10);return a=this.checkTime(a),o=this.checkTime(o),n=this.checkTime(n),{days:e,hours:a,minutes:o,seconds:n}},checkTime:function(t){return t<10&&(t="0"+t),t},getLocationByAddress:function(t,e,a,o){var i=this,s={url:"/index.php?c=Front/WxApp/Amap&a=geo",data:{addr:o},success:function(n){n.success?wx.openLocation({name:a,address:o,longitude:Number(e),latitude:Number(t),scale:15}):i.showModal({content:""+n.msg})}};n.sendRequest(s)},getLocation:function(t,e,a,o){t=Number(t),e=Number(e),t>0&&e>0?wx.openLocation({name:a,address:o,longitude:e,latitude:t}):this.getLocationByAddress(t,e,a,o)},modifyPostParam:function(t){var e,a,o,n,i,s,r="";for(e in t)if((a=t[e])instanceof Array)for(s=0;s<a.length;++s)n=a[s],(i={})[e+"["+s+"]"]=n,r+=this.modifyPostParam(i)+"&";else if(a instanceof Object)for(o in a)n=a[o],(i={})[e+"["+o+"]"]=n,r+=this.modifyPostParam(i)+"&";else void 0!==a&&null!==a&&(r+=encodeURIComponent(e)+"="+encodeURIComponent(a)+"&");return r.length?r.substr(0,r.length-1):r},sendRequest:function(t,e,a){t.options||(t.options={}),void 0===a&&(a=0);var o,i=t.data||{},s=t.header;i.app_id=this.getConfig().APPID,this.getConfig().SITEID&&(i.InitSiteID=this.getConfig().SITEID),this.getConfig().DATAID&&(i.dataId=this.getConfig().DATAID),getApp().globalData.PSESSID&&(i.PSESSID=getApp().globalData.PSESSID),getApp().globalData.WebUserID&&(i.WebUserID=getApp().globalData.WebUserID),o=e?e+t.url:this.getConfig().SITEBASEURL+t.url,this.getConfig().ADD_QUERYSTRING&&(o.indexOf("?")>-1?o+="&"+this.getConfig().ADD_QUERYSTRING:o+="?"+this.getConfig().ADD_QUERYSTRING);var r=wx.getStorageSync("invite");o.toLowerCase().indexOf("regorbinduser")>-1&&r&&(i.invite=r),t.method&&("post"==t.method.toLowerCase()&&(i=this.modifyPostParam(i),s=s||{"content-type":"application/x-www-form-urlencoded;"}),t.method=t.method.toUpperCase()),t.hideLoading||t.options.refresh||wx.showToast({title:"加载中...",icon:"loading"}),wx.request({url:o,data:i,method:t.method||"GET",header:s||{"content-type":"application/json"},success:function(e){if(e.statusCode&&200!=e.statusCode)return wx.hideToast(),void wx.showModal({content:""+e.errMsg});t.hideLoading||wx.hideToast(),!e.data||e.data.success||1!=e.data.needAuthorized?"function"==typeof t.success&&t.success(e.data):n.showModal({title:"提示",content:e.data.msg})},fail:function(o){a<3?setTimeout(function(){n.sendRequest(t,e,++a)},1e3):(wx.showModal({content:"请求失败 "+o.errMsg}),"function"==typeof t.fail&&t.fail(o.data))},complete:function(e){"function"==typeof t.complete&&t.complete(e.data)}})},findTabBarPageByLinkType:function(t){var e=this.getUrlByLinkType(t);return this.findTabBarPage(e+"_tabbar")},findTabBarPage:function(t){var e=null;try{if(t)var a=(t=(t||"").replace(/_tabbar$/i,"").replace(/^\/+/,""))+"_tabbar";else a=this.getCurPage().route+"_tabbar";for(var o=require("tabbarlist.js"),n=Object.keys(o)||[],i=0;i<n.length;i++)if(a===n[i]){e=a;break}}catch(t){}return e},checkToReLaunchTabBarPage:function(){var t=this.findTabBarPage();t&&(t="/"+t.replace(/^\/+/,""),wx.switchTab({url:t,fail:function(t){console.log(t,"cant switchTab")}}))}};module.exports=c; 
 			}); 
		define("components/picker_datetime.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return new Array(2-e.toString().length+1).join("0")+e}var i=function(e){var i=this;this.page=e.page,this.height=void 0!=e.height?e.height:600,this.success=void 0!=e.success?e.success:function(){};this.page.setData({pickerViewHeight:this.height-100}),this.pickerTimeout=null,"slide"==e.animation||"fade"==e.animation?(this.animationType="slide",this.duration=void 0!=e.duration?e.duration:500,this.TimingFunction=void 0!=e.timingFunction?e.timingFunction:"linear",this.thisDelay=void 0!=e.delay?e.delay:0,this.animation=e.animation,this.page.pickerClear=function(){var e={};e[i.pickerName]="",e.pickerAnimation=i.pickerHideAnimation.export(),clearTimeout(i.pickerTimeout),i.pickerTimeout=setTimeout(function(){i.page.setData({pickerViewShow:!1})},i.duration),this.setData(e),i.onClear&&i.onClear(i.page,i.pickerName)},this.page.pickerCancel=function(){var e={};e.pickerAnimation=i.pickerHideAnimation.export(),clearTimeout(i.pickerTimeout),i.pickerTimeout=setTimeout(function(){i.page.setData({pickerViewShow:!1})},i.duration),this.setData(e)},this.page.pickerOk=function(){var e={};e.pickerAnimation=i.pickerHideAnimation.export(),this.setData(e),clearTimeout(i.pickerTimeout),i.pickerTimeout=setTimeout(function(){i.page.setData({pickerViewShow:!1})},i.duration),i.success(),i.onSure&&i.onSure(i.page,i.pickerName)}):(this.animation="",this.page.pickerClear=function(){var e={};e[i.pickerName]="",e.pickerViewShow=!1,this.setData(e),i.onClear&&i.onClear(i.page,i.pickerName)},this.page.pickerCancel=function(){var e={};e.pickerViewShow=!1,this.setData(e)},this.page.pickerOk=function(){this.setData({pickerViewShow:!1}),i.success(),i.onSure&&i.onSure(i.page,i.pickerName)})};i.prototype.setPicker=function(i,t,a){var r=this;t&&(r.onSure=t),a&&(r.onClear=a);if(void 0==this.page.data[i]||""==this.page.data[i]){var n=(u=new Date).getFullYear(),s=u.getMonth()+1,o=u.getDate(),c=u.getHours(),p=u.getMinutes(),h=new Object;h[i]=n+"年"+s+"月"+o+"日 "+e(c)+":"+e(p),this.page.setData(h)}else var u=new Date(Date.parse(this.page.data[i].replace("年","/").replace("月","/").replace("日","/"))),n=u.getFullYear(),s=u.getMonth()+1,o=u.getDate(),c=u.getHours(),p=u.getMinutes();this.pickerName=i,this.pickerDateTextArr=[],this.pickerDateValueArr=[],this.pickerHourTextArr=[],this.pickerHourValueArr=[],this.pickerMinuteTextArr=[],this.pickerMinuteValueArr=[];var k=new Date,g=k.getFullYear();k.getHours(),k.getMinutes();new Date(g-1,2,0).getDate();for(var m=k.getMonth()+1,l=k.getDate(),D=["日","一","二","三","四","五","六"],A=0,w=0,d=0,T=g-1;T<=g+1;T++)for(var v=1;v<=12;v++)for(var f=new Date(T,v,0).getDate(),V=1;V<=f;V++){var x=D[new Date(T,v-1,V).getDay()];V==o&&v==s&&T==n&&(A=parseInt((new Date(T+"/"+v+"/"+V)-new Date(g-1+"/1/1"))/1e3/60/60/24)),V==l&&v==m&&T==g?this.pickerDateTextArr.push("今日"):this.pickerDateTextArr.push(v+"月"+V+"日 星期"+x),this.pickerDateValueArr.push(T+"年"+v+"月"+V+"日")}for(var S=0;S<24;S++)this.pickerHourValueArr.push(S),this.pickerHourTextArr.push(e(S)+"时"),c==S&&(w=S);for(var y=0;y<60;y++)this.pickerMinuteValueArr.push(y),this.pickerMinuteTextArr.push(e(y)+"分"),p==y&&(d=y);var H={};if(H.pickerDateTextArr=this.pickerDateTextArr,H.pickerHourTextArr=this.pickerHourTextArr,H.pickerMinuteTextArr=this.pickerMinuteTextArr,H.pickDatetimeValue=[A,w,d],this.page.setData(H),""==this.animation)this.page.setData({pickerViewShow:!0});else{var M=wx.createAnimation({duration:r.duration,timingFunction:r.thisTimingFunction,delay:r.thisDelay,transformOrigin:"50% 50% 0",success:function(e){}}),C=wx.createAnimation({duration:r.duration,timingFunction:r.TimingFunction,delay:r.Delay,transformOrigin:"50% 50% 0",success:function(e){}});clearTimeout(this.pickerTimeout),"slide"==this.animation?(this.pickerShowAnimation=M.height(this.height+"rpx").step(),this.pickerHideAnimation=C.height(0).step(),this.page.setData({pickerViewShow:!0,pickerViewStyle:"height:0;"})):(this.pickerShowAnimation=M.opacity(1).step(),this.pickerHideAnimation=C.opacity(0).step(),this.page.setData({pickerViewShow:!0,pickerViewStyle:"opacity:0;"})),this.page.setData({pickerAnimation:r.pickerShowAnimation.export()})}this.page.bindDateTimeChange=function(t){var a=t.detail.value,n={};n[i]=r.pickerDateValueArr[a[0]]+" "+e(r.pickerHourValueArr[a[1]])+":"+e(r.pickerMinuteValueArr[a[2]]),this.setData(n)}},module.exports={pickerDatetime:i}; 
 			}); 
		define("components/utils/ald-stat-conf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";exports.getLocation=!1,exports.getUserinfo=!0,exports.appid="wx0b06fea59463719b",exports.appsecret="caec9fcb757d57993182136ecf038f86",exports.defaultPath="pages/company/index",exports.app_key="165774eb2911ecf1e8647b52b0d79a44"; 
 			}); 
		define("components/utils/ald-stat.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function a(t){var a="";try{a=wx.getStorageSync("aldstat_uuid")}catch(t){a="uuid-getstoragesync"}if(!a){a=""+Date.now()+Math.floor(1e7*Math.random());try{wx.setStorageSync("aldstat_uuid",a)}catch(t){wx.setStorageSync("aldstat_uuid","uuid-getstoragesync")}t.aldstat_is_first_open=!0}return a}function s(){wx.request({url:"https://"+l+".aldwx.com/config/app.json",header:{AldStat:"MiniApp-Stat"},method:"GET",success:function(t){if(200===t.statusCode)for(var a in t.data)wx.setStorageSync(a,t.data[a])}})}function e(t,a,s){if(t[a]){var e=t[a];t[a]=function(t){s.call(this,t,a),e.call(this,t)}}else t[a]=function(t){s.call(this,t,a)}}function n(t,a,s){if(t[a]){var e=t[a];t[a]=function(t){var n=e.call(this,t);return s.call(this,[t,n],a),n}}else t[a]=function(t){s.call(this,t,a)}}function o(t){this.app=t}function r(t){for(var a in t)return!1;return!0}function _(t){if("string"!=typeof t)return!1;var a=t.replace(/\s+/g,"_");return!/[~`!@/#+=\$%\^()&\*]+/g.test(a)}var i="6.1.2",l="log",d=require("./ald-stat-conf.js"),c=0,u=0,p=0,h=0,g={},f=function(t){wx.getSetting&&wx.getSetting({success:function(a){a.authSetting["scope.userInfo"]&&wx.getUserInfo({withCredentials:!1,success:function(a){t(a)}})}})},w=function(t,a,s){void 0===arguments[1]&&(a="GET"),void 0===arguments[2]&&(s="d.html");var e=0;!function n(){c+=1,t.rq_c=c,wx.request({url:"https://"+l+".aldwx.com/"+s,data:t,header:{AldStat:"MiniApp-Stat"},method:a,success:function(){},fail:function(){e<2&&(e++,t.retryTimes=e,n())}})}()},v=function(t,s,e,n){var o={ak:d.app_key,uu:a(t),at:t.aldstat_access_token,st:Date.now(),tp:e,ev:s,v:i};n&&(o.ct=n),t.aldstat_qr&&(o.qr=t.aldstat_qr),w(o,"GET","d.html")},y=function(t,s,e,n){void 0===t.aldstat_showoption&&(t.aldstat_showoption={});var o={ak:d.app_key,wsr:t.aldstat_showoption,uu:a(t),at:t.aldstat_access_token,st:Date.now(),tp:e,ev:s,nt:t.aldstat_network_type,pm:t.aldstat_phone_model,pr:t.aldstat_pixel_ratio,ww:t.aldstat_window_width,wh:t.aldstat_window_height,lang:t.aldstat_language,wv:t.aldstat_wechat_version,lat:t.aldstat_lat,lng:t.aldstat_lng,spd:t.aldstat_speed,v:i};n&&(o.ct=n),t.aldstat_location_name&&(o.ln=t.aldstat_location_name),t.aldstat_src&&(o.sr=t.aldstat_src),t.aldstat_qr&&(o.qr=t.aldstat_qr),w(o,"GET","d.html")};o.prototype.debug=function(t){y(this.app,"debug",0,t)},o.prototype.warn=function(t){y(this.app,"debug",1,t)},o.prototype.error=function(t){v(this.app,"debug",2,t)},o.prototype.sendEvent=function(a,s){if(!_(a))return!1;if(a.length>=255)return!1;if("object"===(void 0===s?"undefined":t(s))){for(var e in s){if(!_(e))return!1;if("object"==t(s[e]))return!1;if(!_(s[e]))return!1}y(this.app,"event",a,JSON.stringify(s))}else if("string"==typeof s&&s.length<=255){if(_(s)){var n=String(s);(new Object)[n]=s,y(this.app,"event",a,s)}}else y(this.app,"event",a,!1)};var S=function(){var t=this;t.aldstat_duration+=Date.now()-t.aldstat_showtime,b(t,"app","unLaunch")},m=function(t,a,s){void 0!==wx.getShareInfo?wx.getShareInfo({shareTicket:a,success:function(a){y(t,"event","ald_share_"+s,JSON.stringify(a))},fail:function(){y(t,"event","ald_share_"+s,"1")}}):y(t,"event","ald_share_"+s,"1")},x=function(t){s(),this.aldstat=new o(this);var e="";try{e=wx.getStorageSync("aldstat_src")}catch(t){e="uuid-getstoragesync"}e&&(this.aldstat_src=e);var n=a(this);this.aldstat_uuid=n,this.aldstat_timestamp=Date.now(),this.aldstat_showtime=Date.now(),this.aldstat_duration=0;var r=this;r.aldstat_error_count=0,r.aldstat_page_count=1,r.aldstat_first_page=0,this.aldstat_showoption=void 0!==t?t:{};var _=function(){wx.getSystemInfo({success:function(t){r.aldstat_vsdk_version=void 0===t.SDKVersion?"1.0.0":t.SDKVersion,r.aldstat_phone_model=t.model,r.aldstat_pixel_ratio=t.pixelRatio,r.aldstat_window_width=t.windowWidth,r.aldstat_window_height=t.windowHeight,r.aldstat_language=t.language,r.aldstat_wechat_version=t.version,r.aldstat_sv=t.system,r.aldstat_wvv=t.platform},complete:function(){d.getLocation&&l(),i()}})},i=function(){f(function(t){var a="";try{a=wx.getStorageSync("aldstat_uuid")}catch(t){a="uuid-getstoragesync"}t.userInfo.uu=a,g=t,w(t.userInfo,"GET","u.html")})},l=function(){wx.getLocation({type:"wgs84",success:function(t){r.aldstat_lat=t.latitude,r.aldstat_lng=t.longitude,r.aldstat_speed=t.speed}})};wx.getNetworkType({success:function(t){r.aldstat_network_type=t.networkType},complete:_});var c="";try{c=wx.getStorageSync("app_session_key_create_launch_upload")}catch(t){c=""}c?c>0&&"number"==typeof c&&(r.aldstat_access_token=""+Date.now()+Math.floor(1e7*Math.random())):r.aldstat_access_token=""+Date.now()+Math.floor(1e7*Math.random()),b(r,"app","launch")},k=function(t,a){var s=this;void 0===this.aldstat_error_count?this.aldstat_error_count=1:this.aldstat_error_count++,y(s,"event","ald_error_message",JSON.stringify(t))},b=function(t,s,e){var n="";try{n=wx.getStorageSync("app_"+e+"_upload")}catch(t){n=""}if((n||"launch"===e)&&!(n<1&&"number"==typeof n)){void 0===t.aldstat_timestamp&&(t.aldstat_timestamp=Date.now());var o=wx.getSystemInfoSync();t.aldstat_vsdk_version=void 0===o.SDKVersion?"1.0.0":o.SDKVersion,t.aldstat_phone_model=o.model,t.aldstat_pixel_ratio=o.pixelRatio,t.aldstat_window_width=o.windowWidth,t.aldstat_window_height=o.windowHeight,t.aldstat_language=o.language,t.aldstat_sv=o.system,t.aldstat_wvv=o.platform;var r={ak:d.app_key,waid:d.appid,wst:d.appsecret,uu:a(t),at:t.aldstat_access_token,wsr:t.aldstat_showoption,st:t.aldstat_timestamp,dr:t.aldstat_duration,et:Date.now(),pc:t.aldstat_page_count,fp:t.aldstat_first_page,lp:t.aldstat_last_page,life:e,ec:t.aldstat_error_count,nt:t.aldstat_network_type,pm:t.aldstat_phone_model,wsdk:t.aldstat_vsdk_version,pr:t.aldstat_pixel_ratio,ww:t.aldstat_window_width,wh:t.aldstat_window_height,lang:t.aldstat_language,wv:t.aldstat_wechat_version,lat:t.aldstat_lat,lng:t.aldstat_lng,spd:t.aldstat_speed,v:i,ev:s,sv:t.aldstat_sv,wvv:t.aldstat_wvv};"launch"===e?u+=1:"show"===e?p+=1:h+=1,r.la_c=u,r.as_c=p,r.ah_c=h,t.page_share_count&&"number"==typeof t.page_share_count&&(r.sc=t.page_share_count),t.aldstat_is_first_open&&(r.ifo="true"),t.aldstat_location_name&&(r.ln=t.aldstat_location_name),t.aldstat_src&&(r.sr=t.aldstat_src),t.aldstat_qr&&(r.qr=t.aldstat_qr),t.ald_share_src&&(r.usr=t.ald_share_src),w(r,"GET","d.html")}},q=function(t){this.aldstat_showtime=Date.now(),this.aldstat_showoption=void 0!==t?t:{};var a="";try{a=wx.getStorageSync("app_session_key_create_show_upload")}catch(t){a=""}a&&a>0&&"number"==typeof a&&(this.aldstat_access_token=""+Date.now()+Math.floor(1e7*Math.random())),b(this,"app","show"),void 0!==t&&(void 0!==t.shareTicket?m(this,t.shareTicket,"click"):void 0!==t.query&&void 0!==t.query.ald_share_src&&m(this,"0","click"))},D=function(t,a){var s=this;s.aldstat_is_first_open&&(s.aldstat_is_first_open=!1),s.aldstat_duration=Date.now()-s.aldstat_showtime,b(s,"app","hide")},T=function(t,a){var s=getApp();I(s,this,"hide")},A=function(t,a){var s=getApp();I(s,this,"unload")},M=function(t,a){var s="";try{s=wx.getStorageSync("aldstat_src")}catch(t){s=""}var e=getApp();if(wx.showShareMenu,s&&(e.aldstat_src=s),!r(t)){if(void 0!==t.aldsrc)if(s)e.aldstat_qr=t.aldsrc;else{try{wx.setStorageSync("aldstat_src",t.aldsrc)}catch(t){}e.aldstat_src=t.aldsrc,e.aldstat_qr=t.aldsrc}void 0!==t.ald_share_src&&(e.ald_share_src=t.ald_share_src),this.aldstat_page_args=JSON.stringify(t)}I(e,this,"load")},I=function(t,s,e){var n="";try{n=wx.getStorageSync("page_"+e+"_upload")}catch(t){n=""}if((n||"show"===e)&&!(n<1&&"number"==typeof n)){s.aldstat_start_time=Date.now(),s.aldstat_error_count=0,t.aldstat_page_count?t.aldstat_page_count++:t.aldstat_page_count=1,t.aldstat_first_page||(t.aldstat_first_page=s.__route__,s.aldstat_is_first_page=!0),t.aldstat_last_page=s.__route__;var o={uu:a(t),at:t.aldstat_access_token,wsr:t.aldstat_showoption,ak:d.app_key,ev:"page",st:s.aldstat_start_time,dr:Date.now()-s.aldstat_start_time,pp:s.__route__,life:e,sc:s.page_share_count,ec:s.aldstat_error_count,nt:t.aldstat_network_type,pm:t.aldstat_phone_model,pr:t.aldstat_pixel_ratio,ww:t.aldstat_window_width,wh:t.aldstat_window_height,lang:t.aldstat_language,wv:t.aldstat_wechat_version,lat:t.aldstat_lat,lng:t.aldstat_lng,spd:t.aldstat_speed,v:i,wsdk:t.aldstat_vsdk_version,sv:t.aldstat_sv,wvv:t.aldstat_wvv};s.aldstat_is_first_page&&(o.ifp="true"),t.aldstat_page_last_page&&(o.lp=t.aldstat_page_last_page),t.aldstat_location_name&&(o.ln=t.aldstat_location_name),s.aldstat_page_args&&(o.ag=s.aldstat_page_args),t.aldstat_src&&(o.sr=t.aldstat_src),t.aldstat_qr&&(o.qr=t.aldstat_qr),t.ald_share_src&&(o.usr=t.ald_share_src),t.aldstat_page_last_page=s.__route__,w(o,"GET","d.html")}},E=function(t,a){var s=getApp();I(s,this,"show")},G=function(t,a){var s=getApp();y(s,"event","ald_pulldownrefresh",1)},O=function(t,a){var s=getApp();y(s,"event","ald_reachbottom",1)},j=function(a,s){var e=this,n=getApp();if(void 0!==a&&void 0!==a[1]){var o="";try{o=wx.getStorageSync("aldstat_uuid")}catch(a){o="uuid-getstoragesync"}var r="";try{r=wx.getStorageSync(o)}catch(a){r="p_share_count_getst"}var _="";if("undefined"!==n.ald_share_src&&n.ald_share_src){for(var i=(_=n.ald_share_src).split(","),l=!0,c=0,u=i.length;c<u;c++)if(i[c].replace('"',"")==o){l=!1;break}i.length>=3&&(l&&i.shift(),_=i.toString()),""!==_&&l&&(_=_+","+o)}else try{_=wx.getStorageSync("aldstat_uuid")}catch(a){_="ald_share_src_getst"}if(a[1].path&&"undefined"!==a[1].path||(d.defaultPath?a[1].path=d.defaultPath:a[1].path=e.__route__),-1!=a[1].path.indexOf("?")?a[1].path+="&ald_share_src="+_:a[1].path+="?ald_share_src="+_,y(n,"event","ald_share_chain",{path:n.aldstat_last_page,chain:_}),""===r||void 0===r){try{wx.setStorageSync(o,1)}catch(a){}r=1,n.page_share_count=r}else{r=parseInt(wx.getStorageSync(o))+1,n.page_share_count=r;try{wx.setStorageSync(o,r)}catch(a){}}f(function(t){var a="";try{a=wx.getStorageSync("aldstat_uuid")}catch(t){a="uuid-getstoragesync"}t.userInfo.uu=a,w(t.userInfo,"GET","u.html")});a[1];void 0===a[1].success&&(a[1].success=function(t){}),void 0===a[1].fail&&(a[1].fail=function(t){});var p=a[1].fail,h=a[1].success;return a[1].success=function(a){new Array;if("object"===t(a.shareTickets))for(var s=0;s<a.shareTickets.length;s++)m(n,a.shareTickets[s],"user");y(n,"event","ald_share_status",JSON.stringify(a)),h(a)},a[1].fail=function(t){y(n,"event","ald_share_status","fail"),p(t)},a[1]}},N=App;App=function(t){e(t,"onLaunch",x),e(t,"onUnlaunch",S),e(t,"onShow",q),e(t,"onHide",D),e(t,"onError",k),N(t)};var J=Page;Page=function(t){e(t,"onLoad",M),e(t,"onUnload",A),e(t,"onShow",E),e(t,"onHide",T),e(t,"onReachBottom",O),e(t,"onPullDownRefresh",G),void 0!==t.onShareAppMessage&&n(t,"onShareAppMessage",j),J(t)}}(); 
 			}); 
		define("components/utils/cryptojs/cryptojs.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";exports.Crypto=require("./lib/Crypto").Crypto;["CryptoMath","BlockModes","DES","AES","HMAC","MARC4","MD5","PBKDF2","PBKDF2Async","Rabbit","SHA1","SHA256"].forEach(function(r){require("./lib/"+r)}); 
 			}); 
		define("components/utils/cryptojs/lib/AES.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(){function r(r,o){for(var t=0,f=0;f<8;f++){1&o&&(t^=r);var s=128&r;r=r<<1&255,s&&(r^=27),o>>>=1}return t}for(var o="undefined"==typeof window?require("./Crypto").Crypto:window.Crypto,t=o.util,f=o.charenc.UTF8,s=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],i=[],n=0;n<256;n++)i[s[n]]=n;for(var e=[],c=[],p=[],u=[],h=[],a=[],n=0;n<256;n++)e[n]=r(n,2),c[n]=r(n,3),p[n]=r(n,9),u[n]=r(n,11),h[n]=r(n,13),a[n]=r(n,14);var v,y,_,b=[0,1,2,4,8,16,32,64,128,27,54],l=[[],[],[],[]],d=o.AES={encrypt:function(r,s,i){var n=(i=i||{}).mode||new o.mode.OFB;n.fixOptions&&n.fixOptions(i);var e=r.constructor==String?f.stringToBytes(r):r,c=i.iv||t.randomBytes(4*d._blocksize),p=s.constructor==String?o.PBKDF2(s,c,32,{asBytes:!0}):s;return d._init(p),n.encrypt(d,e,c),e=i.iv?e:c.concat(e),i&&i.asBytes?e:t.bytesToBase64(e)},decrypt:function(r,s,i){var n=(i=i||{}).mode||new o.mode.OFB;n.fixOptions&&n.fixOptions(i);var e=r.constructor==String?t.base64ToBytes(r):r,c=i.iv||e.splice(0,4*d._blocksize),p=s.constructor==String?o.PBKDF2(s,c,32,{asBytes:!0}):s;return d._init(p),n.decrypt(d,e,c),i&&i.asBytes?e:f.bytesToString(e)},_blocksize:4,_encryptblock:function(r,o){for(u=0;u<d._blocksize;u++)for(h=0;h<4;h++)l[u][h]=r[o+4*h+u];for(u=0;u<4;u++)for(h=0;h<4;h++)l[u][h]^=_[h][u];for(var t=1;t<y;t++){for(u=0;u<4;u++)for(h=0;h<4;h++)l[u][h]=s[l[u][h]];l[1].push(l[1].shift()),l[2].push(l[2].shift()),l[2].push(l[2].shift()),l[3].unshift(l[3].pop());for(h=0;h<4;h++){var f=l[0][h],i=l[1][h],n=l[2][h],p=l[3][h];l[0][h]=e[f]^c[i]^n^p,l[1][h]=f^e[i]^c[n]^p,l[2][h]=f^i^e[n]^c[p],l[3][h]=c[f]^i^n^e[p]}for(u=0;u<4;u++)for(h=0;h<4;h++)l[u][h]^=_[4*t+h][u]}for(u=0;u<4;u++)for(h=0;h<4;h++)l[u][h]=s[l[u][h]];l[1].push(l[1].shift()),l[2].push(l[2].shift()),l[2].push(l[2].shift()),l[3].unshift(l[3].pop());for(u=0;u<4;u++)for(h=0;h<4;h++)l[u][h]^=_[4*y+h][u];for(var u=0;u<d._blocksize;u++)for(var h=0;h<4;h++)r[o+4*h+u]=l[u][h]},_decryptblock:function(r,o){for(c=0;c<d._blocksize;c++)for(v=0;v<4;v++)l[c][v]=r[o+4*v+c];for(c=0;c<4;c++)for(v=0;v<4;v++)l[c][v]^=_[4*y+v][c];for(var t=1;t<y;t++){l[1].unshift(l[1].pop()),l[2].push(l[2].shift()),l[2].push(l[2].shift()),l[3].push(l[3].shift());for(c=0;c<4;c++)for(v=0;v<4;v++)l[c][v]=i[l[c][v]];for(c=0;c<4;c++)for(v=0;v<4;v++)l[c][v]^=_[4*(y-t)+v][c];for(v=0;v<4;v++){var f=l[0][v],s=l[1][v],n=l[2][v],e=l[3][v];l[0][v]=a[f]^u[s]^h[n]^p[e],l[1][v]=p[f]^a[s]^u[n]^h[e],l[2][v]=h[f]^p[s]^a[n]^u[e],l[3][v]=u[f]^h[s]^p[n]^a[e]}}l[1].unshift(l[1].pop()),l[2].push(l[2].shift()),l[2].push(l[2].shift()),l[3].push(l[3].shift());for(c=0;c<4;c++)for(v=0;v<4;v++)l[c][v]=i[l[c][v]];for(c=0;c<4;c++)for(v=0;v<4;v++)l[c][v]^=_[v][c];for(var c=0;c<d._blocksize;c++)for(var v=0;v<4;v++)r[o+4*v+c]=l[c][v]},_init:function(r){v=r.length/4,y=v+6,d._keyexpansion(r)},_keyexpansion:function(r){_=[];for(o=0;o<v;o++)_[o]=[r[4*o],r[4*o+1],r[4*o+2],r[4*o+3]];for(var o=v;o<d._blocksize*(y+1);o++){var t=[_[o-1][0],_[o-1][1],_[o-1][2],_[o-1][3]];o%v==0?(t.push(t.shift()),t[0]=s[t[0]],t[1]=s[t[1]],t[2]=s[t[2]],t[3]=s[t[3]],t[0]^=b[o/v]):v>6&&o%v==4&&(t[0]=s[t[0]],t[1]=s[t[1]],t[2]=s[t[2]],t[3]=s[t[3]]),_[o]=[_[o-v][0]^t[0],_[o-v][1]^t[1],_[o-v][2]^t[2],_[o-v][3]^t[3]]}}}}(); 
 			}); 
		define("components/utils/cryptojs/lib/BlockModes.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(){function n(n,o){var t=4*n._blocksize;return t-o.length%t}var o="undefined"==typeof window?require("./Crypto").Crypto:window.Crypto,t=o.pad={},r=function(n){for(var o=n.pop(),t=1;t<o;t++)n.pop()};t.NoPadding={pad:function(n,o){},unpad:function(n){}},t.ZeroPadding={pad:function(n,o){var t=4*n._blocksize,r=o.length%t;if(0!=r)for(r=t-r;r>0;r--)o.push(0)},unpad:function(n){}},t.iso7816={pad:function(o,t){var r=n(o,t);for(t.push(128);r>1;r--)t.push(0)},unpad:function(n){for(;128!=n.pop(););}},t.ansix923={pad:function(o,t){for(var r=n(o,t),p=1;p<r;p++)t.push(0);t.push(r)},unpad:r},t.iso10126={pad:function(o,t){for(var r=n(o,t),p=1;p<r;p++)t.push(Math.floor(256*Math.random()));t.push(r)},unpad:r},t.pkcs7={pad:function(o,t){for(var r=n(o,t),p=0;p<r;p++)t.push(r)},unpad:r};var p=o.mode={},i=p.Mode=function(n){n&&(this._padding=n)};i.prototype={encrypt:function(n,o,t){this._padding.pad(n,o),this._doEncrypt(n,o,t)},decrypt:function(n,o,t){this._doDecrypt(n,o,t),this._padding.unpad(o)},_padding:t.iso7816};var c=(p.ECB=function(){i.apply(this,arguments)}).prototype=new i;c._doEncrypt=function(n,o,t){for(var r=4*n._blocksize,p=0;p<o.length;p+=r)n._encryptblock(o,p)},c._doDecrypt=function(n,o,t){for(var r=4*n._blocksize,p=0;p<o.length;p+=r)n._decryptblock(o,p)},c.fixOptions=function(n){n.iv=[]};var a=(p.CBC=function(){i.apply(this,arguments)}).prototype=new i;a._doEncrypt=function(n,o,t){for(var r=4*n._blocksize,p=0;p<o.length;p+=r){if(0==p)for(i=0;i<r;i++)o[i]^=t[i];else for(var i=0;i<r;i++)o[p+i]^=o[p+i-r];n._encryptblock(o,p)}},a._doDecrypt=function(n,o,t){for(var r=4*n._blocksize,p=t,i=0;i<o.length;i+=r){var c=o.slice(i,i+r);n._decryptblock(o,i);for(var a=0;a<r;a++)o[i+a]^=p[a];p=c}};var e=(p.CFB=function(){i.apply(this,arguments)}).prototype=new i;e._padding=t.NoPadding,e._doEncrypt=function(n,o,t){for(var r=4*n._blocksize,p=t.slice(0),i=0;i<o.length;i++){var c=i%r;0==c&&n._encryptblock(p,0),o[i]^=p[c],p[c]=o[i]}},e._doDecrypt=function(n,o,t){for(var r=4*n._blocksize,p=t.slice(0),i=0;i<o.length;i++){var c=i%r;0==c&&n._encryptblock(p,0);var a=o[i];o[i]^=p[c],p[c]=a}};var d=(p.OFB=function(){i.apply(this,arguments)}).prototype=new i;d._padding=t.NoPadding,d._doEncrypt=function(n,o,t){for(var r=4*n._blocksize,p=t.slice(0),i=0;i<o.length;i++)i%r==0&&n._encryptblock(p,0),o[i]^=p[i%r]},d._doDecrypt=d._doEncrypt;var f=(p.CTR=function(){i.apply(this,arguments)}).prototype=new i;f._padding=t.NoPadding,f._doEncrypt=function(n,o,t){for(var r=4*n._blocksize,p=t.slice(0),i=0;i<o.length;){var c=p.slice(0);n._encryptblock(c,0);for(var a=0;i<o.length&&a<r;a++,i++)o[i]^=c[a];256==++p[r-1]&&(p[r-1]=0,256==++p[r-2]&&(p[r-2]=0,256==++p[r-3]&&(p[r-3]=0,++p[r-4])))}},f._doDecrypt=f._doEncrypt}(); 
 			}); 
		define("components/utils/cryptojs/lib/Crypto.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";"undefined"!=typeof Crypto&&Crypto.util||function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="undefined"==typeof window?exports.Crypto={}:window.Crypto={},r=n.util={rotl:function(t,n){return t<<n|t>>>32-n},rotr:function(t,n){return t<<32-n|t>>>n},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var n=0;n<t.length;n++)t[n]=r.endian(t[n]);return t},randomBytes:function(t){for(var n=[];t>0;t--)n.push(Math.floor(256*Math.random()));return n},bytesToWords:function(t){for(var n=[],r=0,o=0;r<t.length;r++,o+=8)n[o>>>5]|=(255&t[r])<<24-o%32;return n},wordsToBytes:function(t){for(var n=[],r=0;r<32*t.length;r+=8)n.push(t[r>>>5]>>>24-r%32&255);return n},bytesToHex:function(t){for(var n=[],r=0;r<t.length;r++)n.push((t[r]>>>4).toString(16)),n.push((15&t[r]).toString(16));return n.join("")},hexToBytes:function(t){for(var n=[],r=0;r<t.length;r+=2)n.push(parseInt(t.substr(r,2),16));return n},bytesToBase64:function(n){if("function"==typeof btoa)return btoa(e.bytesToString(n));for(var r=[],o=0;o<n.length;o+=3)for(var u=n[o]<<16|n[o+1]<<8|n[o+2],i=0;i<4;i++)8*o+6*i<=8*n.length?r.push(t.charAt(u>>>6*(3-i)&63)):r.push("=");return r.join("")},base64ToBytes:function(n){if("function"==typeof atob)return e.stringToBytes(atob(n));n=n.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],o=0,u=0;o<n.length;u=++o%4)0!=u&&r.push((t.indexOf(n.charAt(o-1))&Math.pow(2,-2*u+8)-1)<<2*u|t.indexOf(n.charAt(o))>>>6-2*u);return r}},o=n.charenc={},e=(o.UTF8={stringToBytes:function(t){return e.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(e.bytesToString(t)))}},o.Binary={stringToBytes:function(t){for(var n=[],r=0;r<t.length;r++)n.push(255&t.charCodeAt(r));return n},bytesToString:function(t){for(var n=[],r=0;r<t.length;r++)n.push(String.fromCharCode(t[r]));return n.join("")}})}(); 
 			}); 
		define("components/utils/cryptojs/lib/CryptoMath.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(){var t=("undefined"==typeof window?require("./Crypto").Crypto:window.Crypto).util;t.u32=function(t){return t>>>0},t.add=function(){for(var t=this.u32(arguments[0]),u=1;u<arguments.length;u++)t=this.u32(t+this.u32(arguments[u]));return t},t.mult=function(t,u){return this.add((4294901760&u)*t,(65535&u)*t)},t.gt=function(t,u){return this.u32(t)>this.u32(u)},t.lt=function(t,u){return this.u32(t)<this.u32(u)}}(); 
 			}); 
		define("components/utils/cryptojs/lib/DES.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(){var t,s="undefined"==typeof window?require("./Crypto").Crypto:window.Crypto,e=s.util,i=s.charenc.UTF8;(t=function(t){this.keys=new Array(16),this._initialiseKeys(t)}).PC1_offsets=[7,6,5,4,3,2,1,0,7,6,5,4,3,2,1,0,7,6,5,4,3,2,1,0,7,6,5,4,7,6,5,4,3,2,1,0,7,6,5,4,3,2,1,0,7,6,5,4,3,2,1,0,3,2,1,0],t.PC1_masks=[128,128,128,128,128,128,128,128,64,64,64,64,64,64,64,64,32,32,32,32,32,32,32,32,16,16,16,16,2,2,2,2,2,2,2,2,4,4,4,4,4,4,4,4,8,8,8,8,8,8,8,8,16,16,16,16],t.PC2_offsets1=[0,3,1,2,0,1,3,2,0,1,0,2,3,0,1,3,0,0,2,3,1,0,2,0,0,2,3,1],t.PC2_offsets2=[7,5,4,7,5,6,0,7,4,0,6,5,4,7,0,6,5,7,4,5,6,7,5,4,6,0,4,6],t.PC2_masks1=[2,1,32,4,1,4,16,1,0,1,8,8,2,32,8,32,16,0,16,4,2,0,32,4,0,2,8,16],t.PC2_masks2=[2,32,8,1,2,2,0,4,4,0,8,16,32,16,0,32,4,32,2,1,16,8,8,16,1,0,1,4],t.keyShifts=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],t.prototype._initialiseKeys=function(s){var e,i=new Array(56);for(e=0;e<56;e++)i[e]=0!=(s[t.PC1_offsets[e]]&t.PC1_masks[e]);var r=i.slice(0,28),h=i.slice(28,56);for(r=r.concat(r),h=h.concat(h),e=0;e<16;e++){for(var n=[0,0,0,0,0,0,0,0],o=t.keyShifts[e],a=0;a<28;a++)r[a+o]&&(n[t.PC2_offsets1[a]]+=t.PC2_masks1[a]),h[a+o]&&(n[t.PC2_offsets2[a]]+=t.PC2_masks2[a]);n[0]=((31&n[0])<<27)+((32&n[0])>>5);for(a=1;a<=6;a++)n[a]=n[a]<<27-4*a;n[7]=((62&n[7])>>1)+((1&n[7])<<31),this.keys[e]=n}},t.prototype.getKey=function(t){return this.keys[t]};var r;(r=function(){this.lhs=0,this.rhs=0}).SBOX_MASK=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679];var h=r.SBOX=new Array(8);h[0]=new Array,h[0][0]=8421888,h[0][268435456]=32768,h[0][536870912]=8421378,h[0][805306368]=2,h[0][1073741824]=512,h[0][1342177280]=8421890,h[0][1610612736]=8389122,h[0][1879048192]=8388608,h[0][-2147483648]=514,h[0][-1879048192]=8389120,h[0][-1610612736]=33280,h[0][-1342177280]=8421376,h[0][-1073741824]=32770,h[0][-805306368]=8388610,h[0][-536870912]=0,h[0][-268435456]=33282,h[0][134217728]=0,h[0][402653184]=8421890,h[0][671088640]=33282,h[0][939524096]=32768,h[0][1207959552]=8421888,h[0][1476395008]=512,h[0][1744830464]=8421378,h[0][2013265920]=2,h[0][-2013265920]=8389120,h[0][-1744830464]=33280,h[0][-1476395008]=8421376,h[0][-1207959552]=8389122,h[0][-939524096]=8388610,h[0][-671088640]=32770,h[0][-402653184]=514,h[0][-134217728]=8388608,h[0][1]=32768,h[0][268435457]=2,h[0][536870913]=8421888,h[0][805306369]=8388608,h[0][1073741825]=8421378,h[0][1342177281]=33280,h[0][1610612737]=512,h[0][1879048193]=8389122,h[0][-2147483647]=8421890,h[0][-1879048191]=8421376,h[0][-1610612735]=8388610,h[0][-1342177279]=33282,h[0][-1073741823]=514,h[0][-805306367]=8389120,h[0][-536870911]=32770,h[0][-268435455]=0,h[0][134217729]=8421890,h[0][402653185]=8421376,h[0][671088641]=8388608,h[0][939524097]=512,h[0][1207959553]=32768,h[0][1476395009]=8388610,h[0][1744830465]=2,h[0][2013265921]=33282,h[0][-2013265919]=32770,h[0][-1744830463]=8389122,h[0][-1476395007]=514,h[0][-1207959551]=8421888,h[0][-939524095]=8389120,h[0][-671088639]=0,h[0][-402653183]=33280,h[0][-134217727]=8421378,h[1]=new Array,h[1][0]=1074282512,h[1][16777216]=16384,h[1][33554432]=524288,h[1][50331648]=1074266128,h[1][67108864]=1073741840,h[1][83886080]=1074282496,h[1][100663296]=1073758208,h[1][117440512]=16,h[1][134217728]=540672,h[1][150994944]=1073758224,h[1][167772160]=1073741824,h[1][184549376]=540688,h[1][201326592]=524304,h[1][218103808]=0,h[1][234881024]=16400,h[1][251658240]=1074266112,h[1][8388608]=1073758208,h[1][25165824]=540688,h[1][41943040]=16,h[1][58720256]=1073758224,h[1][75497472]=1074282512,h[1][92274688]=1073741824,h[1][109051904]=524288,h[1][125829120]=1074266128,h[1][142606336]=524304,h[1][159383552]=0,h[1][176160768]=16384,h[1][192937984]=1074266112,h[1][209715200]=1073741840,h[1][226492416]=540672,h[1][243269632]=1074282496,h[1][260046848]=16400,h[1][268435456]=0,h[1][285212672]=1074266128,h[1][301989888]=1073758224,h[1][318767104]=1074282496,h[1][335544320]=1074266112,h[1][352321536]=16,h[1][369098752]=540688,h[1][385875968]=16384,h[1][402653184]=16400,h[1][419430400]=524288,h[1][436207616]=524304,h[1][452984832]=1073741840,h[1][469762048]=540672,h[1][486539264]=1073758208,h[1][503316480]=1073741824,h[1][520093696]=1074282512,h[1][276824064]=540688,h[1][293601280]=524288,h[1][310378496]=1074266112,h[1][327155712]=16384,h[1][343932928]=1073758208,h[1][360710144]=1074282512,h[1][377487360]=16,h[1][394264576]=1073741824,h[1][411041792]=1074282496,h[1][427819008]=1073741840,h[1][444596224]=1073758224,h[1][461373440]=524304,h[1][478150656]=0,h[1][494927872]=16400,h[1][511705088]=1074266128,h[1][528482304]=540672,h[2]=new Array,h[2][0]=260,h[2][1048576]=0,h[2][2097152]=67109120,h[2][3145728]=65796,h[2][4194304]=65540,h[2][5242880]=67108868,h[2][6291456]=67174660,h[2][7340032]=67174400,h[2][8388608]=67108864,h[2][9437184]=67174656,h[2][10485760]=65792,h[2][11534336]=67174404,h[2][12582912]=67109124,h[2][13631488]=65536,h[2][14680064]=4,h[2][15728640]=256,h[2][524288]=67174656,h[2][1572864]=67174404,h[2][2621440]=0,h[2][3670016]=67109120,h[2][4718592]=67108868,h[2][5767168]=65536,h[2][6815744]=65540,h[2][7864320]=260,h[2][8912896]=4,h[2][9961472]=256,h[2][11010048]=67174400,h[2][12058624]=65796,h[2][13107200]=65792,h[2][14155776]=67109124,h[2][15204352]=67174660,h[2][16252928]=67108864,h[2][16777216]=67174656,h[2][17825792]=65540,h[2][18874368]=65536,h[2][19922944]=67109120,h[2][20971520]=256,h[2][22020096]=67174660,h[2][23068672]=67108868,h[2][24117248]=0,h[2][25165824]=67109124,h[2][26214400]=67108864,h[2][27262976]=4,h[2][28311552]=65792,h[2][29360128]=67174400,h[2][30408704]=260,h[2][31457280]=65796,h[2][32505856]=67174404,h[2][17301504]=67108864,h[2][18350080]=260,h[2][19398656]=67174656,h[2][20447232]=0,h[2][21495808]=65540,h[2][22544384]=67109120,h[2][23592960]=256,h[2][24641536]=67174404,h[2][25690112]=65536,h[2][26738688]=67174660,h[2][27787264]=65796,h[2][28835840]=67108868,h[2][29884416]=67109124,h[2][30932992]=67174400,h[2][31981568]=4,h[2][33030144]=65792,h[3]=new Array,h[3][0]=2151682048,h[3][65536]=2147487808,h[3][131072]=4198464,h[3][196608]=2151677952,h[3][262144]=0,h[3][327680]=4198400,h[3][393216]=2147483712,h[3][458752]=4194368,h[3][524288]=2147483648,h[3][589824]=4194304,h[3][655360]=64,h[3][720896]=2147487744,h[3][786432]=2151678016,h[3][851968]=4160,h[3][917504]=4096,h[3][983040]=2151682112,h[3][32768]=2147487808,h[3][98304]=64,h[3][163840]=2151678016,h[3][229376]=2147487744,h[3][294912]=4198400,h[3][360448]=2151682112,h[3][425984]=0,h[3][491520]=2151677952,h[3][557056]=4096,h[3][622592]=2151682048,h[3][688128]=4194304,h[3][753664]=4160,h[3][819200]=2147483648,h[3][884736]=4194368,h[3][950272]=4198464,h[3][1015808]=2147483712,h[3][1048576]=4194368,h[3][1114112]=4198400,h[3][1179648]=2147483712,h[3][1245184]=0,h[3][1310720]=4160,h[3][1376256]=2151678016,h[3][1441792]=2151682048,h[3][1507328]=2147487808,h[3][1572864]=2151682112,h[3][1638400]=2147483648,h[3][1703936]=2151677952,h[3][1769472]=4198464,h[3][1835008]=2147487744,h[3][1900544]=4194304,h[3][1966080]=64,h[3][2031616]=4096,h[3][1081344]=2151677952,h[3][1146880]=2151682112,h[3][1212416]=0,h[3][1277952]=4198400,h[3][1343488]=4194368,h[3][1409024]=2147483648,h[3][1474560]=2147487808,h[3][1540096]=64,h[3][1605632]=2147483712,h[3][1671168]=4096,h[3][1736704]=2147487744,h[3][1802240]=2151678016,h[3][1867776]=4160,h[3][1933312]=2151682048,h[3][1998848]=4194304,h[3][2064384]=4198464,h[4]=new Array,h[4][0]=128,h[4][4096]=17039360,h[4][8192]=262144,h[4][12288]=536870912,h[4][16384]=537133184,h[4][20480]=16777344,h[4][24576]=553648256,h[4][28672]=262272,h[4][32768]=16777216,h[4][36864]=537133056,h[4][40960]=536871040,h[4][45056]=553910400,h[4][49152]=553910272,h[4][53248]=0,h[4][57344]=17039488,h[4][61440]=553648128,h[4][2048]=17039488,h[4][6144]=553648256,h[4][10240]=128,h[4][14336]=17039360,h[4][18432]=262144,h[4][22528]=537133184,h[4][26624]=553910272,h[4][30720]=536870912,h[4][34816]=537133056,h[4][38912]=0,h[4][43008]=553910400,h[4][47104]=16777344,h[4][51200]=536871040,h[4][55296]=553648128,h[4][59392]=16777216,h[4][63488]=262272,h[4][65536]=262144,h[4][69632]=128,h[4][73728]=536870912,h[4][77824]=553648256,h[4][81920]=16777344,h[4][86016]=553910272,h[4][90112]=537133184,h[4][94208]=16777216,h[4][98304]=553910400,h[4][102400]=553648128,h[4][106496]=17039360,h[4][110592]=537133056,h[4][114688]=262272,h[4][118784]=536871040,h[4][122880]=0,h[4][126976]=17039488,h[4][67584]=553648256,h[4][71680]=16777216,h[4][75776]=17039360,h[4][79872]=537133184,h[4][83968]=536870912,h[4][88064]=17039488,h[4][92160]=128,h[4][96256]=553910272,h[4][100352]=262272,h[4][104448]=553910400,h[4][108544]=0,h[4][112640]=553648128,h[4][116736]=16777344,h[4][120832]=262144,h[4][124928]=537133056,h[4][129024]=536871040,h[5]=new Array,h[5][0]=268435464,h[5][256]=8192,h[5][512]=270532608,h[5][768]=270540808,h[5][1024]=268443648,h[5][1280]=2097152,h[5][1536]=2097160,h[5][1792]=268435456,h[5][2048]=0,h[5][2304]=268443656,h[5][2560]=2105344,h[5][2816]=8,h[5][3072]=270532616,h[5][3328]=2105352,h[5][3584]=8200,h[5][3840]=270540800,h[5][128]=270532608,h[5][384]=270540808,h[5][640]=8,h[5][896]=2097152,h[5][1152]=2105352,h[5][1408]=268435464,h[5][1664]=268443648,h[5][1920]=8200,h[5][2176]=2097160,h[5][2432]=8192,h[5][2688]=268443656,h[5][2944]=270532616,h[5][3200]=0,h[5][3456]=270540800,h[5][3712]=2105344,h[5][3968]=268435456,h[5][4096]=268443648,h[5][4352]=270532616,h[5][4608]=270540808,h[5][4864]=8200,h[5][5120]=2097152,h[5][5376]=268435456,h[5][5632]=268435464,h[5][5888]=2105344,h[5][6144]=2105352,h[5][6400]=0,h[5][6656]=8,h[5][6912]=270532608,h[5][7168]=8192,h[5][7424]=268443656,h[5][7680]=270540800,h[5][7936]=2097160,h[5][4224]=8,h[5][4480]=2105344,h[5][4736]=2097152,h[5][4992]=268435464,h[5][5248]=268443648,h[5][5504]=8200,h[5][5760]=270540808,h[5][6016]=270532608,h[5][6272]=270540800,h[5][6528]=270532616,h[5][6784]=8192,h[5][7040]=2105352,h[5][7296]=2097160,h[5][7552]=0,h[5][7808]=268435456,h[5][8064]=268443656,h[6]=new Array,h[6][0]=1048576,h[6][16]=33555457,h[6][32]=1024,h[6][48]=1049601,h[6][64]=34604033,h[6][80]=0,h[6][96]=1,h[6][112]=34603009,h[6][128]=33555456,h[6][144]=1048577,h[6][160]=33554433,h[6][176]=34604032,h[6][192]=34603008,h[6][208]=1025,h[6][224]=1049600,h[6][240]=33554432,h[6][8]=34603009,h[6][24]=0,h[6][40]=33555457,h[6][56]=34604032,h[6][72]=1048576,h[6][88]=33554433,h[6][104]=33554432,h[6][120]=1025,h[6][136]=1049601,h[6][152]=33555456,h[6][168]=34603008,h[6][184]=1048577,h[6][200]=1024,h[6][216]=34604033,h[6][232]=1,h[6][248]=1049600,h[6][256]=33554432,h[6][272]=1048576,h[6][288]=33555457,h[6][304]=34603009,h[6][320]=1048577,h[6][336]=33555456,h[6][352]=34604032,h[6][368]=1049601,h[6][384]=1025,h[6][400]=34604033,h[6][416]=1049600,h[6][432]=1,h[6][448]=0,h[6][464]=34603008,h[6][480]=33554433,h[6][496]=1024,h[6][264]=1049600,h[6][280]=33555457,h[6][296]=34603009,h[6][312]=1,h[6][328]=33554432,h[6][344]=1048576,h[6][360]=1025,h[6][376]=34604032,h[6][392]=33554433,h[6][408]=34603008,h[6][424]=0,h[6][440]=34604033,h[6][456]=1049601,h[6][472]=1024,h[6][488]=33555456,h[6][504]=1048577,h[7]=new Array,h[7][0]=134219808,h[7][1]=131072,h[7][2]=134217728,h[7][3]=32,h[7][4]=131104,h[7][5]=134350880,h[7][6]=134350848,h[7][7]=2048,h[7][8]=134348800,h[7][9]=134219776,h[7][10]=133120,h[7][11]=134348832,h[7][12]=2080,h[7][13]=0,h[7][14]=134217760,h[7][15]=133152,h[7][-2147483648]=2048,h[7][-2147483647]=134350880,h[7][-2147483646]=134219808,h[7][-2147483645]=134217728,h[7][-2147483644]=134348800,h[7][-2147483643]=133120,h[7][-2147483642]=133152,h[7][-2147483641]=32,h[7][-2147483640]=134217760,h[7][-2147483639]=2080,h[7][-2147483638]=131104,h[7][-2147483637]=134350848,h[7][-2147483636]=0,h[7][-2147483635]=134348832,h[7][-2147483634]=134219776,h[7][-2147483633]=131072,h[7][16]=133152,h[7][17]=134350848,h[7][18]=32,h[7][19]=2048,h[7][20]=134219776,h[7][21]=134217760,h[7][22]=134348832,h[7][23]=131072,h[7][24]=0,h[7][25]=131104,h[7][26]=134348800,h[7][27]=134219808,h[7][28]=134350880,h[7][29]=133120,h[7][30]=2080,h[7][31]=134217728,h[7][-2147483632]=131072,h[7][-2147483631]=2048,h[7][-2147483630]=134348832,h[7][-2147483629]=133152,h[7][-2147483628]=32,h[7][-2147483627]=134348800,h[7][-2147483626]=134217728,h[7][-2147483625]=134219808,h[7][-2147483624]=134350880,h[7][-2147483623]=134217760,h[7][-2147483622]=134219776,h[7][-2147483621]=0,h[7][-2147483620]=133120,h[7][-2147483619]=2080,h[7][-2147483618]=131104,h[7][-2147483617]=134350848,r.prototype._exchangeLR=function(t,s){var e=(this.lhs>>t^this.rhs)&s;this.rhs^=e,this.lhs^=e<<t},r.prototype._exchangeRL=function(t,s){var e=(this.rhs>>t^this.lhs)&s;this.lhs^=e,this.rhs^=e<<t},r.prototype.initialPerm=function(t,s){var e=t.slice(s,s+8);this.lhs=(e[0]<<24)+(e[1]<<16)+(e[2]<<8)+e[3],this.rhs=(e[4]<<24)+(e[5]<<16)+(e[6]<<8)+e[7],this._exchangeLR(4,252645135),this._exchangeLR(16,65535),this._exchangeRL(2,858993459),this._exchangeRL(8,16711935),this._exchangeLR(1,1431655765)},r.prototype.round=function(t){for(var s=this.rhs,e=this.lhs,i=0,h=0;h<8;h++){var n=(s^t[h])&r.SBOX_MASK[h];i+=r.SBOX[h][n]}this.lhs=s,this.rhs=e^i},r.prototype.finalPerm=function(t,s){var e=this.lhs;this.lhs=this.rhs,this.rhs=e,this._exchangeLR(1,1431655765),this._exchangeRL(8,16711935),this._exchangeRL(2,858993459),this._exchangeLR(16,65535),this._exchangeLR(4,252645135),t[s]=this.lhs>>24&255,t[s+1]=this.lhs>>16&255,t[s+2]=this.lhs>>8&255,t[s+3]=255&this.lhs,t[s+4]=this.rhs>>24&255,t[s+5]=this.rhs>>16&255,t[s+6]=this.rhs>>8&255,t[s+7]=255&this.rhs};var n=s.DES={_blocksize:2,_keyschedule:null,_state:new r,_init:function(s){this._keyschedule=new t(s)},encrypt:function(r,h,o){var a=(o=o||{}).mode||new s.mode.OFB;a.fixOptions&&a.fixOptions(o);var c=r.constructor==String?i.stringToBytes(r):r,y=o.iv||e.randomBytes(8),f=h.constructor==String?s.PBKDF2(h,y,8,{asBytes:!0}):h;return this._keyschedule=new t(f),a.encrypt(n,c,y),c=o.iv?c:y.concat(c),o&&o.asBytes?c:e.bytesToBase64(c)},_encryptblock:function(t,s){this._state.initialPerm(t,s);for(var e=0;e<=15;e++)this._state.round(this._keyschedule.getKey(e));this._state.finalPerm(t,s)},decrypt:function(r,h,o){var a=(o=o||{}).mode||new s.mode.OFB;a.fixOptions&&a.fixOptions(o);var c=r.constructor==String?e.base64ToBytes(r):r,y=o.iv||c.splice(0,8),f=h.constructor==String?s.PBKDF2(h,y,32,{asBytes:!0}):h;return this._keyschedule=new t(f),a.decrypt(n,c,y),o&&o.asBytes?c:i.bytesToString(c)},_decryptblock:function(t,s){this._state.initialPerm(t,s);for(var e=15;e>=0;e--)this._state.round(this._keyschedule.getKey(e));this._state.finalPerm(t,s)}}}(); 
 			}); 
		define("components/utils/cryptojs/lib/HMAC.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(){var t="undefined"==typeof window?require("./Crypto").Crypto:window.Crypto,r=t.util,s=t.charenc,e=s.UTF8,n=s.Binary;t.HMAC=function(t,s,o,i){s.constructor==String&&(s=e.stringToBytes(s)),o.constructor==String&&(o=e.stringToBytes(o)),o.length>4*t._blocksize&&(o=t(o,{asBytes:!0}));for(var c=o.slice(0),y=o.slice(0),a=0;a<4*t._blocksize;a++)c[a]^=92,y[a]^=54;var u=t(c.concat(t(y.concat(s),{asBytes:!0})),{asBytes:!0});return i&&i.asBytes?u:i&&i.asString?n.bytesToString(u):r.bytesToHex(u)}}(); 
 			}); 
		define("components/utils/cryptojs/lib/MARC4.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(){var r="undefined"==typeof window?require("./Crypto").Crypto:window.Crypto,t=r.util,n=r.charenc,e=n.UTF8,o=(n.Binary,r.MARC4={encrypt:function(n,c){var s=e.stringToBytes(n),a=t.randomBytes(16),i=c.constructor==String?r.PBKDF2(c,a,32,{asBytes:!0}):c;return o._marc4(s,i,1536),t.bytesToBase64(a.concat(s))},decrypt:function(n,c){var s=t.base64ToBytes(n),a=s.splice(0,16),i=c.constructor==String?r.PBKDF2(c,a,32,{asBytes:!0}):c;return o._marc4(s,i,1536),e.bytesToString(s)},_marc4:function(r,t,n){var e,o,c,s;for(e=0,c=[];e<256;e++)c[e]=e;for(e=0,o=0;e<256;e++)o=(o+c[e]+t[e%t.length])%256,s=c[e],c[e]=c[o],c[o]=s;e=o=0;for(var t=-n;t<r.length;t++)o=(o+c[e=(e+1)%256])%256,s=c[e],c[e]=c[o],c[o]=s,t<0||(r[t]^=c[(c[e]+c[o])%256])}})}(); 
 			}); 
		define("components/utils/cryptojs/lib/MD5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(){var r="undefined"==typeof window?require("./Crypto").Crypto:window.Crypto,n=r.util,t=r.charenc,e=t.UTF8,i=t.Binary,o=r.MD5=function(r,t){var e=n.wordsToBytes(o._md5(r));return t&&t.asBytes?e:t&&t.asString?i.bytesToString(e):n.bytesToHex(e)};o._md5=function(r){r.constructor==String&&(r=e.stringToBytes(r));for(var t=n.bytesToWords(r),i=8*r.length,u=1732584193,s=-271733879,f=-1732584194,a=271733878,c=0;c<t.length;c++)t[c]=16711935&(t[c]<<8|t[c]>>>24)|4278255360&(t[c]<<24|t[c]>>>8);t[i>>>5]|=128<<i%32,t[14+(i+64>>>9<<4)]=i;for(var g=o._ff,_=o._gg,y=o._hh,d=o._ii,c=0;c<t.length;c+=16){var v=u,h=s,T=f,l=a;s=d(s=d(s=d(s=d(s=y(s=y(s=y(s=y(s=_(s=_(s=_(s=_(s=g(s=g(s=g(s=g(s,f=g(f,a=g(a,u=g(u,s,f,a,t[c+0],7,-680876936),s,f,t[c+1],12,-389564586),u,s,t[c+2],17,606105819),a,u,t[c+3],22,-1044525330),f=g(f,a=g(a,u=g(u,s,f,a,t[c+4],7,-176418897),s,f,t[c+5],12,1200080426),u,s,t[c+6],17,-1473231341),a,u,t[c+7],22,-45705983),f=g(f,a=g(a,u=g(u,s,f,a,t[c+8],7,1770035416),s,f,t[c+9],12,-1958414417),u,s,t[c+10],17,-42063),a,u,t[c+11],22,-1990404162),f=g(f,a=g(a,u=g(u,s,f,a,t[c+12],7,1804603682),s,f,t[c+13],12,-40341101),u,s,t[c+14],17,-1502002290),a,u,t[c+15],22,1236535329),f=_(f,a=_(a,u=_(u,s,f,a,t[c+1],5,-165796510),s,f,t[c+6],9,-1069501632),u,s,t[c+11],14,643717713),a,u,t[c+0],20,-373897302),f=_(f,a=_(a,u=_(u,s,f,a,t[c+5],5,-701558691),s,f,t[c+10],9,38016083),u,s,t[c+15],14,-660478335),a,u,t[c+4],20,-405537848),f=_(f,a=_(a,u=_(u,s,f,a,t[c+9],5,568446438),s,f,t[c+14],9,-1019803690),u,s,t[c+3],14,-187363961),a,u,t[c+8],20,1163531501),f=_(f,a=_(a,u=_(u,s,f,a,t[c+13],5,-1444681467),s,f,t[c+2],9,-51403784),u,s,t[c+7],14,1735328473),a,u,t[c+12],20,-1926607734),f=y(f,a=y(a,u=y(u,s,f,a,t[c+5],4,-378558),s,f,t[c+8],11,-2022574463),u,s,t[c+11],16,1839030562),a,u,t[c+14],23,-35309556),f=y(f,a=y(a,u=y(u,s,f,a,t[c+1],4,-1530992060),s,f,t[c+4],11,1272893353),u,s,t[c+7],16,-155497632),a,u,t[c+10],23,-1094730640),f=y(f,a=y(a,u=y(u,s,f,a,t[c+13],4,681279174),s,f,t[c+0],11,-358537222),u,s,t[c+3],16,-722521979),a,u,t[c+6],23,76029189),f=y(f,a=y(a,u=y(u,s,f,a,t[c+9],4,-640364487),s,f,t[c+12],11,-421815835),u,s,t[c+15],16,530742520),a,u,t[c+2],23,-995338651),f=d(f,a=d(a,u=d(u,s,f,a,t[c+0],6,-198630844),s,f,t[c+7],10,1126891415),u,s,t[c+14],15,-1416354905),a,u,t[c+5],21,-57434055),f=d(f,a=d(a,u=d(u,s,f,a,t[c+12],6,1700485571),s,f,t[c+3],10,-1894986606),u,s,t[c+10],15,-1051523),a,u,t[c+1],21,-2054922799),f=d(f,a=d(a,u=d(u,s,f,a,t[c+8],6,1873313359),s,f,t[c+15],10,-30611744),u,s,t[c+6],15,-1560198380),a,u,t[c+13],21,1309151649),f=d(f,a=d(a,u=d(u,s,f,a,t[c+4],6,-145523070),s,f,t[c+11],10,-1120210379),u,s,t[c+2],15,718787259),a,u,t[c+9],21,-343485551),u=u+v>>>0,s=s+h>>>0,f=f+T>>>0,a=a+l>>>0}return n.endian([u,s,f,a])},o._ff=function(r,n,t,e,i,o,u){var s=r+(n&t|~n&e)+(i>>>0)+u;return(s<<o|s>>>32-o)+n},o._gg=function(r,n,t,e,i,o,u){var s=r+(n&e|t&~e)+(i>>>0)+u;return(s<<o|s>>>32-o)+n},o._hh=function(r,n,t,e,i,o,u){var s=r+(n^t^e)+(i>>>0)+u;return(s<<o|s>>>32-o)+n},o._ii=function(r,n,t,e,i,o,u){var s=r+(t^(n|~e))+(i>>>0)+u;return(s<<o|s>>>32-o)+n},o._blocksize=16,o._digestsize=16}(); 
 			}); 
		define("components/utils/cryptojs/lib/PBKDF2.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(){var t="undefined"==typeof window?require("./Crypto").Crypto:window.Crypto,r=t.util,n=t.charenc,o=n.UTF8,e=n.Binary;t.PBKDF2=function(n,s,i,c){function a(r,n){return t.HMAC(y,n,r,{asBytes:!0})}n.constructor==String&&(n=o.stringToBytes(n)),s.constructor==String&&(s=o.stringToBytes(s));for(var y=c&&c.hasher||t.SHA1,u=c&&c.iterations||1,g=[],f=1;g.length<i;){for(var B=a(n,s.concat(r.wordsToBytes([f]))),h=B,T=1;T<u;T++){h=a(n,h);for(var d=0;d<B.length;d++)B[d]^=h[d]}g=g.concat(B),f++}return g.length=i,c&&c.asBytes?g:c&&c.asString?e.bytesToString(g):r.bytesToHex(g)}}(); 
 			}); 
		define("components/utils/cryptojs/lib/PBKDF2Async.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(){var t="undefined"==typeof window?require("./Crypto").Crypto:window.Crypto,e=t.util,n=t.charenc,i=n.UTF8,o=n.Binary;t.nextTick||("undefined"!=typeof process&&void 0!==process.nextTick?t.nextTick=process.nextTick:"undefined"!=typeof setTimeout&&(t.nextTick=function(t){setTimeout(t,0)})),t.PBKDF2Async=function(n,s,r,c,u){function a(t){if(h){var e=v.length/g._digestsize*d+t;setTimeout(function(){h(Math.round(e/p*100))},0)}}function f(e,n){return t.HMAC(g,n,e,{asBytes:!0})}n.constructor==String&&(n=i.stringToBytes(n)),s.constructor==String&&(s=i.stringToBytes(s));var y,T,g=u&&u.hasher||t.SHA1,d=u&&u.iterations||1,h=u&&u.onProgressChange,p=Math.ceil(r/g._digestsize)*d,l=t.nextTick,v=[],x=1;l(y=function(){if(v.length<r){var t=f(n,s.concat(e.wordsToBytes([x])));a(1);var i=t,g=1;l(T=function(){if(g<d){i=f(n,i);for(var e=0;e<t.length;e++)t[e]^=i[e];a(++g),l(T)}else v=v.concat(t),x++,l(y)})}else v.length=r,c(u&&u.asBytes?v:u&&u.asString?o.bytesToString(v):e.bytesToHex(v))})}}(); 
 			}); 
		define("components/utils/cryptojs/lib/Rabbit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(){var t,r="undefined"==typeof window?require("./Crypto").Crypto:window.Crypto,e=r.util,n=r.charenc,o=n.UTF8,a=(n.Binary,[]),s=[],i=r.Rabbit={encrypt:function(t,n){var a=o.stringToBytes(t),s=e.randomBytes(8),c=n.constructor==String?r.PBKDF2(n,s,32,{asBytes:!0}):n;return i._rabbit(a,c,e.bytesToWords(s)),e.bytesToBase64(s.concat(a))},decrypt:function(t,n){var a=e.base64ToBytes(t),s=a.splice(0,8),c=n.constructor==String?r.PBKDF2(n,s,32,{asBytes:!0}):n;return i._rabbit(a,c,e.bytesToWords(s)),o.bytesToString(a)},_rabbit:function(t,r,e){i._keysetup(r),e&&i._ivsetup(e);for(var n=[],o=0;o<t.length;o++){if(o%16==0){i._nextstate(),n[0]=a[0]^a[5]>>>16^a[3]<<16,n[1]=a[2]^a[7]>>>16^a[5]<<16,n[2]=a[4]^a[1]>>>16^a[7]<<16,n[3]=a[6]^a[3]>>>16^a[1]<<16;for(var s=0;s<4;s++)n[s]=16711935&(n[s]<<8|n[s]>>>24)|4278255360&(n[s]<<24|n[s]>>>8);for(var c=120;c>=0;c-=8)n[c/8]=n[c>>>5]>>>24-c%32&255}t[o]^=n[o%16]}},_keysetup:function(r){a[0]=r[0],a[2]=r[1],a[4]=r[2],a[6]=r[3],a[1]=r[3]<<16|r[2]>>>16,a[3]=r[0]<<16|r[3]>>>16,a[5]=r[1]<<16|r[0]>>>16,a[7]=r[2]<<16|r[1]>>>16,s[0]=e.rotl(r[2],16),s[2]=e.rotl(r[3],16),s[4]=e.rotl(r[0],16),s[6]=e.rotl(r[1],16),s[1]=4294901760&r[0]|65535&r[1],s[3]=4294901760&r[1]|65535&r[2],s[5]=4294901760&r[2]|65535&r[3],s[7]=4294901760&r[3]|65535&r[0],t=0;for(n=0;n<4;n++)i._nextstate();for(var n=0;n<8;n++)s[n]^=a[n+4&7]},_ivsetup:function(t){var r=e.endian(t[0]),n=e.endian(t[1]),o=r>>>16|4294901760&n,a=n<<16|65535&r;s[0]^=r,s[1]^=o,s[2]^=n,s[3]^=a,s[4]^=r,s[5]^=o,s[6]^=n,s[7]^=a;for(var c=0;c<4;c++)i._nextstate()},_nextstate:function(){for(var r=[],e=0;e<8;e++)r[e]=s[e];s[0]=s[0]+1295307597+t>>>0,s[1]=s[1]+3545052371+(s[0]>>>0<r[0]>>>0?1:0)>>>0,s[2]=s[2]+886263092+(s[1]>>>0<r[1]>>>0?1:0)>>>0,s[3]=s[3]+1295307597+(s[2]>>>0<r[2]>>>0?1:0)>>>0,s[4]=s[4]+3545052371+(s[3]>>>0<r[3]>>>0?1:0)>>>0,s[5]=s[5]+886263092+(s[4]>>>0<r[4]>>>0?1:0)>>>0,s[6]=s[6]+1295307597+(s[5]>>>0<r[5]>>>0?1:0)>>>0,s[7]=s[7]+3545052371+(s[6]>>>0<r[6]>>>0?1:0)>>>0,t=s[7]>>>0<r[7]>>>0?1:0;for(var n=[],e=0;e<8;e++){var o=a[e]+s[e]>>>0,i=65535&o,c=o>>>16,u=((i*i>>>17)+i*c>>>15)+c*c,f=((4294901760&o)*o>>>0)+((65535&o)*o>>>0)>>>0;n[e]=u^f}a[0]=n[0]+(n[7]<<16|n[7]>>>16)+(n[6]<<16|n[6]>>>16),a[1]=n[1]+(n[0]<<8|n[0]>>>24)+n[7],a[2]=n[2]+(n[1]<<16|n[1]>>>16)+(n[0]<<16|n[0]>>>16),a[3]=n[3]+(n[2]<<8|n[2]>>>24)+n[1],a[4]=n[4]+(n[3]<<16|n[3]>>>16)+(n[2]<<16|n[2]>>>16),a[5]=n[5]+(n[4]<<8|n[4]>>>24)+n[3],a[6]=n[6]+(n[5]<<16|n[5]>>>16)+(n[4]<<16|n[4]>>>16),a[7]=n[7]+(n[6]<<8|n[6]>>>24)+n[5]}}}(); 
 			}); 
		define("components/utils/cryptojs/lib/SHA1.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(){var r="undefined"==typeof window?require("./Crypto").Crypto:window.Crypto,t=r.util,e=r.charenc,n=e.UTF8,o=e.Binary,s=r.SHA1=function(r,e){var n=t.wordsToBytes(s._sha1(r));return e&&e.asBytes?n:e&&e.asString?o.bytesToString(n):t.bytesToHex(n)};s._sha1=function(r){r.constructor==String&&(r=n.stringToBytes(r));var e=t.bytesToWords(r),o=8*r.length,s=[],i=1732584193,a=-271733879,y=-1732584194,u=271733878,c=-1009589776;e[o>>5]|=128<<24-o%32,e[15+(o+64>>>9<<4)]=o;for(var f=0;f<e.length;f+=16){for(var d=i,g=a,v=y,T=u,h=c,l=0;l<80;l++){if(l<16)s[l]=e[f+l];else{var w=s[l-3]^s[l-8]^s[l-14]^s[l-16];s[l]=w<<1|w>>>31}var b=(i<<5|i>>>27)+c+(s[l]>>>0)+(l<20?1518500249+(a&y|~a&u):l<40?1859775393+(a^y^u):l<60?(a&y|a&u|y&u)-1894007588:(a^y^u)-899497514);c=u,u=y,y=a<<30|a>>>2,a=i,i=b}i+=d,a+=g,y+=v,u+=T,c+=h}return[i,a,y,u,c]},s._blocksize=16,s._digestsize=20}(); 
 			}); 
		define("components/utils/cryptojs/lib/SHA256.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(){var r="undefined"==typeof window?require("./Crypto").Crypto:window.Crypto,t=r.util,e=r.charenc,n=e.UTF8,o=e.Binary,s=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],i=r.SHA256=function(r,e){var n=t.wordsToBytes(i._sha256(r));return e&&e.asBytes?n:e&&e.asString?o.bytesToString(n):t.bytesToHex(n)};i._sha256=function(r){r.constructor==String&&(r=n.stringToBytes(r));var e,o,i,a,y,u,c,f,d,g=t.bytesToWords(r),v=8*r.length,T=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],h=[];g[v>>5]|=128<<24-v%32,g[15+(v+64>>9<<4)]=v;for(var l=0;l<g.length;l+=16){e=T[0],o=T[1],i=T[2],a=T[3],y=T[4],u=T[5],c=T[6],f=T[7];for(var w=0;w<64;w++){if(w<16)h[w]=g[w+l];else{var b=h[w-15],p=h[w-2],B=(b<<25|b>>>7)^(b<<14|b>>>18)^b>>>3,S=(p<<15|p>>>17)^(p<<13|p>>>19)^p>>>10;h[w]=B+(h[w-7]>>>0)+S+(h[w-16]>>>0)}var _=e&o^e&i^o&i,C=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22);d=(f>>>0)+((y<<26|y>>>6)^(y<<21|y>>>11)^(y<<7|y>>>25))+(y&u^~y&c)+s[w]+(h[w]>>>0),f=c,c=u,u=y,y=a+d>>>0,a=i,i=o,o=e,e=d+(C+_)>>>0}T[0]+=e,T[1]+=o,T[2]+=i,T[3]+=a,T[4]+=y,T[5]+=u,T[6]+=c,T[7]+=f}return T},i._blocksize=16,i._digestsize=32}(); 
 			}); 
		define("components/utils/socket.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();module.exports=new function(){this.handlers={},this.listenList={},this.socketTask={},this.status=!0,this.host=t.globalData.socket_config.SOCKET_URL,this.on=function(t,o){"function"==typeof o&&(this.handlers[t]=o)},this.listen=function(t,o){"function"==typeof o&&(this.listenList[t]=o)},this.emit=function(t,o){t in this.handlers&&this.handlers[t].call(this,o)},this.off=function(t,o){var s=this.handlers[t],n=0;if(s)for(var e=(n=s.length)-1;e>=0;e--)s[e]===o&&s.splice(e,1);return this},this.close=function(){this.status&&this.socketTask.close()},this.remove=function(t){console.log("移除了自定义监听事件"+t);var o=this.listenList;console.log(o);var s=this;void 0!==o[t]&&(delete o[t],console.log(o),s.listenList=o),console.log(s.listenList)},this.run=function(){var o=this;console.log(t.globalData.socket_config),console.log(o.handlers);var s={user:t.globalData.socket_config.SOCKET_USERNAME,passwd:t.globalData.socket_config.SOCKET_PASSWD};console.log(s);var n=wx.connectSocket({url:t.globalData.socket_config.SOCKET_URL,method:"GET",header:s,success:function(t){o.handlers.connectSocket&&o.emit("connectSocket",t)}});return n.onOpen(function(t){o.handlers.onSocketOpen&&o.emit("onSocketOpen",t)}),n.onMessage(function(t){var s=JSON.parse(t.data),n=s.data;console.log(n),console.log(s);var e=s.event;""==e&&(e=n.event),e in o.listenList&&o.listenList[e].call(o,"SYS"==s.type?n:n.data)}),n.onClose(function(t){o.handlers.onSocketClose&&o.emit("onSocketClose",t)}),n.onError(function(t){o.handlers.onSocketError?o.emit("onSocketError",t):this.status=!1}),this.socketTask=n,this}}; 
 			}); 
		define("components/wxb.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){this.appId=t,this.sessionKey=e}var e=require("./utils/cryptojs/cryptojs.js").Crypto;getApp();t.prototype.decryptData=function(t,s){var t=e.util.base64ToBytes(t),o=e.util.base64ToBytes(this.sessionKey),s=e.util.base64ToBytes(s),r=new e.mode.CBC(e.pad.pkcs7);try{var p=e.AES.decrypt(t,o,{asBpytes:!0,iv:s,mode:r}),a=JSON.parse(p)}catch(t){console.log(t)}return a.watermark.appid!==this.appId&&console.log(err),a},module.exports=t; 
 			}); 
		define("config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a={APPTITLE:"银星玻璃",APPDESCRIPTION:"银星玻璃",APPID:"wx0b06fea59463719b",APPSECRET:"caec9fcb757d57993182136ecf038f86",SITEID:"55454",DATAID:"7815",SITEBASEURL:"https://wxapp.xcxscheng.com",ModuleDataJustFromCache:1,Industry:"jianzhan",Tpl:"JianZhan-4",PublishTime:1557200543};module.exports=a; 
 			}); 
		define("getErrorData.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){return new Promise(function(e,t){wx.getSystemInfo({success:function(t){e(t)},fail:function(){t()}})})}var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};module.exports={getError:function(r){var n={};e().then(function(e){var o=getCurrentPages(),a="未知";o&&o[o.length-1]&&(a=o[o.length-1].route),n=t({},r,{brand:e.brand,model:e.model,language:e.language,version:e.version,system:e.system,platform:e.platform,appTitle:e.appTitle,SDKVersion:e.SDKVersion,page:a}),wx.request({url:n.siteBaseUrl+"/index.php?c=ErrorReport&a=report&InitSiteID="+(n.siteId||0),data:n,method:"POST"})})}}; 
 			}); 
		define("pages/common/popout/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 
		define("pages/common/we-cropper/dist/weCropper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(e,n){"object"===("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.WeCropper=n()}(void 0,function(){function e(t){return t.charAt(0).toUpperCase()+t.slice(1)}function n(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];p.forEach(function(n,o){void 0!==e[o]&&(t[n]=e[o])})}function o(t,e){Object.defineProperties(t,e)}function r(){return g||(g=wx.getSystemInfoSync()),g}function i(t,e){return e={exports:{}},t(e,e.exports),e.exports}function a(t){return function(e){return void 0===e&&(e={}),new Promise(function(n,o){e.success=function(t){n(t)},e.fail=function(t){o(t)},t(e)})}}function c(t,e){return void 0===e&&(e=!1),new Promise(function(n){t.draw(e,n)})}function u(t,e){return"data:"+e+";base64,"+t}function d(t){return"image/"+(t=t.toLowerCase().replace(/jpg/i,"jpeg")).match(/png|jpeg|bmp|gif/)[0]}function s(t){var e="";if("string"==typeof t)e=t;else for(var n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return T.encode(e)}function f(t,e,n,o,r,i){wx.canvasGetImageData({canvasId:t,x:e,y:n,width:o,height:r,success:function(t){i(t)},fail:function(t){i(null),console.error("canvasGetImageData error: "+t)}})}function h(t){var e=t.width,n=t.height,o=e*n*3,r=o+54,i=[66,77,255&r,r>>8&255,r>>16&255,r>>24&255,0,0,0,0,54,0,0,0],a=[40,0,0,0,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,1,0,24,0,0,0,0,0,255&o,o>>8&255,o>>16&255,o>>24&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=(4-3*e%4)%4,u=t.data,d="",f=e<<2,h=n,l=String.fromCharCode;do{for(var g=f*(h-1),p="",v=0;v<e;v++){var y=v<<2;p+=l(u[g+y+2])+l(u[g+y+1])+l(u[g+y])}for(var x=0;x<c;x++)p+=String.fromCharCode(0);d+=p}while(--h);return s(i.concat(a))+s(d)}function l(t,e,n,o,r,i,a){void 0===a&&(a=function(){}),void 0===i&&(i="png"),i=d(i),/bmp/.test(i)?f(t,e,n,o,r,function(t){var e=h(t);w(a)&&a(u(e,"image/"+i))}):console.error("暂不支持生成'"+i+"'类型的base64图片")}var g=void 0,p=["touchstarted","touchmoved","touchended"],v={},y={id:{default:"cropper",get:function(){return v.id},set:function(t){"string"!=typeof t&&console.error("id："+t+" is invalid"),v.id=t}},width:{default:750,get:function(){return v.width},set:function(t){"number"!=typeof t&&console.error("width："+t+" is invalid"),v.width=t}},height:{default:750,get:function(){return v.height},set:function(t){"number"!=typeof t&&console.error("height："+t+" is invalid"),v.height=t}},pixelRatio:{default:r().pixelRatio,get:function(){return v.pixelRatio},set:function(t){"number"!=typeof t&&console.error("pixelRatio："+t+" is invalid"),v.pixelRatio=t}},scale:{default:2.5,get:function(){return v.scale},set:function(t){"number"!=typeof t&&console.error("scale："+t+" is invalid"),v.scale=t}},zoom:{default:5,get:function(){return v.zoom},set:function(t){"number"!=typeof t?console.error("zoom："+t+" is invalid"):(t<0||t>10)&&console.error("zoom should be ranged in 0 ~ 10"),v.zoom=t}},src:{default:"",get:function(){return v.src},set:function(t){"string"!=typeof t&&console.error("src："+t+" is invalid"),v.src=t}},cut:{default:{},get:function(){return v.cut},set:function(e){"object"!==(void 0===e?"undefined":t(e))&&console.error("cut："+e+" is invalid"),v.cut=e}},boundStyle:{default:{},get:function(){return v.boundStyle},set:function(e){"object"!==(void 0===e?"undefined":t(e))&&console.error("boundStyle："+e+" is invalid"),v.boundStyle=e}},onReady:{default:null,get:function(){return v.ready},set:function(t){v.ready=t}},onBeforeImageLoad:{default:null,get:function(){return v.beforeImageLoad},set:function(t){v.beforeImageLoad=t}},onImageLoad:{default:null,get:function(){return v.imageLoad},set:function(t){v.imageLoad=t}},onBeforeDraw:{default:null,get:function(){return v.beforeDraw},set:function(t){v.beforeDraw=t}}},x=r().windowWidth,m="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},b=i(function(e,n){n.isStr=function(t){return"string"==typeof t},n.isNum=function(t){return"number"==typeof t},n.isArr=Array.isArray,n.isUndef=function(t){return void 0===t},n.isTrue=function(t){return!0===t},n.isFalse=function(t){return!1===t},n.isFunc=function(t){return"function"==typeof t},n.isObj=n.isObject=function(e){return null!==e&&"object"===(void 0===e?"undefined":t(e))};var o=Object.prototype.toString;n.isPlainObject=function(t){return"[object Object]"===o.call(t)};var r=Object.prototype.hasOwnProperty;n.hasOwn=function(t,e){return r.call(t,e)},n.noop=function(t,e,n){},n.isValidArrayIndex=function(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}}),w=b.isFunc,S=b.isPlainObject,C=["ready","beforeImageLoad","beforeDraw","imageLoad"],M=a(wx.getImageInfo),I=a(wx.canvasToTempFilePath),T=i(function(e,n){!function(o){var r=n,i=e&&e.exports==r&&e,a="object"==(void 0===m?"undefined":t(m))&&m;a.global!==a&&a.window!==a||(o=a);var c=function(t){this.message=t};(c.prototype=new Error).name="InvalidCharacterError";var u=function(t){throw new c(t)},d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=/[\t\n\f\r ]/g,f={encode:function(t){t=String(t),/[^\0-\xFF]/.test(t)&&u("The string to be encoded contains characters outside of the Latin1 range.");for(var e,n=t.length%3,o="",r=-1,i=t.length-n;++r<i;)e=(t.charCodeAt(r)<<16)+(t.charCodeAt(++r)<<8)+t.charCodeAt(++r),o+=d.charAt(e>>18&63)+d.charAt(e>>12&63)+d.charAt(e>>6&63)+d.charAt(63&e);return 2==n?(e=(t.charCodeAt(r)<<8)+t.charCodeAt(++r),o+=d.charAt(e>>10)+d.charAt(e>>4&63)+d.charAt(e<<2&63)+"="):1==n&&(e=t.charCodeAt(r),o+=d.charAt(e>>2)+d.charAt(e<<4&63)+"=="),o},decode:function(t){var e=(t=String(t).replace(s,"")).length;e%4==0&&(e=(t=t.replace(/==?$/,"")).length),(e%4==1||/[^+a-zA-Z0-9/]/.test(t))&&u("Invalid character: the string to be decoded is not correctly encoded.");for(var n,o,r=0,i="",a=-1;++a<e;)o=d.indexOf(t.charAt(a)),n=r%4?64*n+o:o,r++%4&&(i+=String.fromCharCode(255&n>>(-2*r&6)));return i},version:"0.1.0"};if(r&&!r.nodeType)if(i)i.exports=f;else for(var h in f)f.hasOwnProperty(h)&&(r[h]=f[h]);else o.base64=f}(m)}),j={convertToImage:l,convertToBMP:function(t,e){void 0===t&&(t={});var n=t.canvasId,o=t.x,r=t.y,i=t.width,a=t.height;return void 0===e&&(e=function(){}),l(n,o,r,i,a,"bmp",e)}},A=function(t,e,n,o,r){var i,a,c;return i=Math.round(r.x-o.x),a=Math.round(r.y-o.y),c=Math.round(Math.sqrt(i*i+a*a)),t+.001*n*(c-e)},L={touchStart:function(t){var e=this,o=t.touches,r=o[0],i=o[1];e.src&&(n(e,!0,null,null),e.__oneTouchStart(r),t.touches.length>=2&&e.__twoTouchStart(r,i))},touchMove:function(t){var e=this,o=t.touches,r=o[0],i=o[1];e.src&&(n(e,null,!0),1===t.touches.length&&e.__oneTouchMove(r),t.touches.length>=2&&e.__twoTouchMove(r,i))},touchEnd:function(t){var e=this;e.src&&(n(e,!1,!1,!0),e.__xtouchEnd())}},O=function(t){var e=this,n={};return o(e,y),Object.keys(y).forEach(function(t){n[t]=y[t].default}),Object.assign(e,n,t),e.prepare(),e.attachPage(),e.createCtx(),e.observer(),e.cutt(),e.methods(),e.init(),e.update(),e};return O.prototype.init=function(){var t=this,e=t.src;return t.version="1.3.3","function"==typeof t.onReady&&t.onReady(t.ctx,t),e?t.pushOrign(e):t.updateCanvas(),n(t,!1,!1,!1),t.oldScale=1,t.newScale=1,t},Object.assign(O.prototype,L),O.prototype.prepare=function(){var t=this;t.attachPage=function(){var e=getCurrentPages(),n=e[e.length-1];Object.defineProperty(n,"wecropper",{get:function(){return t}})},t.createCtx=function(){var e=t.id,n=t.targetId;e?(t.ctx=wx.createCanvasContext(e),t.targetCtx=wx.createCanvasContext(n)):console.error("constructor: create canvas context failed, 'id' must be valuable")},t.deviceRadio=x/750},O.prototype.observer=function(){var t=this;t.on=function(n,o){return C.indexOf(n)>-1?w(o)&&("ready"===n?o(t):t["on"+e(n)]=o):console.error("event: "+n+" is invalid"),t}},O.prototype.methods=function(){var t=this,e=t.width,n=t.height,o=t.id,r=t.targetId,i=t.pixelRatio,a=t.cut,u=a.x;void 0===u&&(u=0);var d=a.y;void 0===d&&(d=0);var s=a.width;void 0===s&&(s=e);var f=a.height;void 0===f&&(f=n),t.updateCanvas=function(e){return t.croperTarget&&t.ctx.drawImage(t.croperTarget,t.imgLeft,t.imgTop,t.scaleWidth,t.scaleHeight),w(t.onBeforeDraw)&&t.onBeforeDraw(t.ctx,t),t.setBoundStyle(t.boundStyle),t.ctx.draw(!1,e),t},t.pushOrign=function(e){return t.src=e,w(t.onBeforeImageLoad)&&t.onBeforeImageLoad(t.ctx,t),M({src:e}).then(function(e){var n=e.width/e.height,o=s/f;return t.croperTarget=e.path,n<o?(t.rectX=u,t.baseWidth=s,t.baseHeight=s/n,t.rectY=d-Math.abs((f-t.baseHeight)/2)):(t.rectY=d,t.baseWidth=f*n,t.baseHeight=f,t.rectX=u-Math.abs((s-t.baseWidth)/2)),t.imgLeft=t.rectX,t.imgTop=t.rectY,t.scaleWidth=t.baseWidth,t.scaleHeight=t.baseHeight,t.update(),new Promise(function(e){t.updateCanvas(e)})}).then(function(){w(t.onImageLoad)&&t.onImageLoad(t.ctx,t)})},t.getCropperBase64=function(t){void 0===t&&(t=function(){}),j.convertToBMP({canvasId:o,x:u,y:d,width:s,height:f},t)},t.getCropperImage=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var a=e[0],h=e[e.length-1],l={canvasId:o,x:u,y:d,width:s,height:f},g=function(){return Promise.resolve()};return S(a)&&a.original&&(g=function(){return t.targetCtx.drawImage(t.croperTarget,t.imgLeft*i,t.imgTop*i,t.scaleWidth*i,t.scaleHeight*i),l={canvasId:r,x:u*i,y:d*i,width:s*i,height:f*i},c(t.targetCtx)}),g().then(function(){return S(a)&&(l=Object.assign({},l,a)),I(l)}).then(function(e){var n=e.tempFilePath;return w(h)&&h.call(t,n),n}).catch(function(){w(h)&&h.call(t,null)})}},O.prototype.cutt=function(){var t=this,e=t.width,n=t.height,o=t.cut,r=o.x;void 0===r&&(r=0);var i=o.y;void 0===i&&(i=0);var a=o.width;void 0===a&&(a=e);var c=o.height;void 0===c&&(c=n),t.outsideBound=function(e,n){t.imgLeft=e>=r?r:t.scaleWidth+e-r<=a?r+a-t.scaleWidth:e,t.imgTop=n>=i?i:t.scaleHeight+n-i<=c?i+c-t.scaleHeight:n},t.setBoundStyle=function(o){void 0===o&&(o={});var u=o.color;void 0===u&&(u="#04b00f");var d=o.mask;void 0===d&&(d="rgba(0, 0, 0, 0.3)");var s=o.lineWidth;void 0===s&&(s=1);var f=[{start:{x:r-s,y:i+10-s},step1:{x:r-s,y:i-s},step2:{x:r+10-s,y:i-s}},{start:{x:r-s,y:i+c-10+s},step1:{x:r-s,y:i+c+s},step2:{x:r+10-s,y:i+c+s}},{start:{x:r+a-10+s,y:i-s},step1:{x:r+a+s,y:i-s},step2:{x:r+a+s,y:i+10-s}},{start:{x:r+a+s,y:i+c-10+s},step1:{x:r+a+s,y:i+c+s},step2:{x:r+a-10+s,y:i+c+s}}];t.ctx.beginPath(),t.ctx.setFillStyle(d),t.ctx.fillRect(0,0,r,n),t.ctx.fillRect(r,0,a,i),t.ctx.fillRect(r,i+c,a,n-i-c),t.ctx.fillRect(r+a,0,e-r-a,n),t.ctx.fill(),f.forEach(function(e){t.ctx.beginPath(),t.ctx.setStrokeStyle(u),t.ctx.setLineWidth(s),t.ctx.moveTo(e.start.x,e.start.y),t.ctx.lineTo(e.step1.x,e.step1.y),t.ctx.lineTo(e.step2.x,e.step2.y),t.ctx.stroke()})}},O.prototype.update=function(){var t=this;t.src&&(t.__oneTouchStart=function(e){t.touchX0=Math.round(e.x),t.touchY0=Math.round(e.y)},t.__oneTouchMove=function(e){var n,o;if(t.touchended)return t.updateCanvas();n=Math.round(e.x-t.touchX0),o=Math.round(e.y-t.touchY0);var r=Math.round(t.rectX+n),i=Math.round(t.rectY+o);t.outsideBound(r,i),t.updateCanvas()},t.__twoTouchStart=function(e,n){var o,r,i;t.touchX1=Math.round(t.rectX+t.scaleWidth/2),t.touchY1=Math.round(t.rectY+t.scaleHeight/2),o=Math.round(n.x-e.x),r=Math.round(n.y-e.y),i=Math.round(Math.sqrt(o*o+r*r)),t.oldDistance=i},t.__twoTouchMove=function(e,n){var o=t.oldScale,r=t.oldDistance,i=t.scale,a=t.zoom;t.newScale=A(o,r,a,e,n),t.newScale<=1&&(t.newScale=1),t.newScale>=i&&(t.newScale=i),t.scaleWidth=Math.round(t.newScale*t.baseWidth),t.scaleHeight=Math.round(t.newScale*t.baseHeight);var c=Math.round(t.touchX1-t.scaleWidth/2),u=Math.round(t.touchY1-t.scaleHeight/2);t.outsideBound(c,u),t.updateCanvas()},t.__xtouchEnd=function(){t.oldScale=t.newScale,t.rectX=t.imgLeft,t.rectY=t.imgTop})},O}); 
 			}); 
		define("pages/company/AddrManage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports=function(e){var t=this;this.page=e.page,this.page.currentAddrId=0,this.app=getApp(),this.onSelected=e.onSelected,this.canbeat=!0,this.page.showAddrAddPanel=function(e){t.page.setData({showAddrAddPanel:!0}),e&&e.currentTarget.dataset.isnew&&t.page.setData({currentAddr:{}})},this.page.hideAddrAddPanel=function(){wx.removeStorageSync("isEditAddr"),t.page.setData({showAddrAddPanel:!1,selectedArea:"",currentAddr:{}})},this.page.onAddrRegionChange=function(e){var d=new Array;for(var a in e.detail.value)d.push(e.detail.value[a]);t.page.setData({selectedArea:d.join(",")})},this.page.closeCurrentPage=function(e){t.page.data.showAddrAddPanel?t.page.setData({showAddrAddPanel:!t.page.data.showAddrAddPanel}):t.page.setData({showAddrManage:!1,textareaFlag:!this.data.textareaFlag})},this.loadUserAddrList=function(e,d){t.app.sendRequest({url:"/index.php?c=front/Useraddr&a=GetList",method:"POST",hideLoading:!0,success:function(a){if(a.success){for(var s in a.list)a.list[s].AreaList=a.list[s].ProvinceName+","+a.list[s].CityName+","+a.list[s].DistrictName;if(t.page.data.textareaFlag&&d){if(a.list.length>1)"1"!=a.list[0].IsDefault?0!==a.list[0].ID&&(r=a.list[0],t.setCurrentAddrId(a.list[0].ID),t.onSelected&&t.onSelected(r)):0!==a.list[1].ID&&(r=a.list[1],t.setCurrentAddrId(a.list[1].ID),t.onSelected&&t.onSelected(r));else{var r=a.list[0];t.setCurrentAddrId(a.list[0].ID),t.onSelected&&t.onSelected(r)}t.page.setData({showAddrManage:!1,textareaFlag:!t.page.data.textareaFlag})}t.page.setData({userAddrList:a.list}),e&&e()}else t.app.showModal({title:"提示",content:a.msg})},fail:function(e){t.app.showModal({title:"提示",content:e})}})},this.findAddrById=function(e){var d=null;for(var a in t.page.data.userAddrList)if(t.page.data.userAddrList[a].ID==e){d=t.page.data.userAddrList[a];break}return d},this.setCurrentAddrId=function(e){t.page.setData({currentAddrId:e})},this.setCurrentAddrById=function(e){if(0!==e){var d=t.findAddrById(e);t.setCurrentAddrId(e),t.onSelected&&t.onSelected(d)}else t.setCurrentAddrId(0)},this.page.onAddrItemSelected=function(e){var d=e.currentTarget.dataset.addrid;t.setCurrentAddrById(d),t.page.setData({showAddrManage:!1,textareaFlag:!this.data.textareaFlag})},this.page.onSetDefaultAddr=function(e){var d=e.currentTarget.dataset.addrid;for(var a in t.page.data.userAddrList)t.page.data.userAddrList[a].IsDefault="0";t.findAddrById(d).IsDefault="1",t.page.setData({userAddrList:t.page.data.userAddrList}),t.app.sendRequest({url:"/index.php?c=front/useraddr&a=setDefaultAddr&addrID="+d,method:"POST",hideLoading:!0,success:function(e){e.success||t.app.showModal({title:"提示",content:e.msg})},fail:function(e){t.app.showModal({title:"提示",content:e})}})},this.page.editAddrItem=function(e){wx.setStorageSync("isEditAddr",!0);var d=e.currentTarget.dataset.addrid,a=t.findAddrById(d);t.page.setData({currentAddr:a}),t.page.showAddrAddPanel()},this.page.delAddrItem=function(e){var d=e.currentTarget.dataset.addrid,a=function(){t.app.sendRequest({url:"/index.php?c=front/useraddr&a=delete&addrID="+d,method:"POST",success:function(e){e.success?t.loadUserAddrList(function(){d==t.page.data.currentAddrId&&(0!==t.page.data.userAddrList.length?t.setCurrentAddrById(t.page.data.userAddrList[0].ID):(t.page.setData({defaultAddr:""}),t.setCurrentAddrById(0)))}):t.app.showModal({title:"提示",content:e.msg})},fail:function(e){t.app.showModal({title:"提示",content:e})}})};t.app.showModal({title:"提示",content:"确认删除？",showCancel:!0,confirm:function(){a()}})},this.page.onAddrEditFormSubmit=function(e){if(t.canbeat){t.canbeat=!1,new Array;var d=e.detail.value;return d.RealName?d.ContactNumber?0==/^((1\d{10})|(\d{3,4}\-\d{6,9}))$/.test(d.ContactNumber)?(t.app.showModal({title:"提示",content:"电话格式不正确，请填写座机或手机号码，座机格式如 区号-电话号码"}),void setTimeout(function(){t.canbeat=!0},600)):d.PostCode&&0==/^\d{6}$/.test(d.PostCode)?(t.app.showModal({title:"提示",content:"邮编不正确"}),void setTimeout(function(){t.canbeat=!0},600)):d.AreaList?d.Address?void t.app.sendRequest({url:"/index.php?c=front/WxApp/ShopApi&a=saveUserAddr",method:"POST",data:d,success:function(e){if(setTimeout(function(){t.canbeat=!0},600),e.success){t.page.setData({showAddrAddPanel:!1,selectedArea:""});var a=function(){d.AddrId==t.page.data.currentAddrId&&t.setCurrentAddrById(d.AddrId),t.page.setData({currentAddr:""})};wx.getStorageSync("isEditAddr")?(wx.removeStorageSync("isEditAddr"),t.loadUserAddrList(a)):t.loadUserAddrList(a,!0)}else t.app.showModal({title:"提示",content:e.msg})},fail:function(e){setTimeout(function(){t.canbeat=!0},600),t.app.showModal({title:"提示",content:e})}}):(t.app.showModal({title:"提示",content:"请输入详细地址"}),void setTimeout(function(){t.canbeat=!0},600)):(t.app.showModal({title:"提示",content:"请选择地区"}),void setTimeout(function(){t.canbeat=!0},600)):(t.app.showModal({title:"提示",content:"请输入收货人电话"}),void setTimeout(function(){t.canbeat=!0},600)):(t.app.showModal({title:"提示",content:"请输入收货人姓名"}),void setTimeout(function(){t.canbeat=!0},600))}},this.page.chooseAddress=function(e){wx.chooseAddress?wx.chooseAddress({success:function(e){var d={RealName:e.userName,ContactNumber:e.telNumber,AreaList:e.provinceName+","+e.cityName+","+e.countyName,Address:e.detailInfo,AddrId:""};t.app.sendRequest({url:"/index.php?c=front/WxApp/ShopApi&a=saveUserAddr",method:"POST",data:d,success:function(e){e.success?(t.page.setData({showAddrAddPanel:!1,selectedArea:""}),t.loadUserAddrList(function(){d.AddrId==t.page.data.currentAddrId&&t.setCurrentAddrById(d.AddrId),t.page.setData({currentAddr:""})},!0)):t.app.showModal({title:"提示",content:e.msg})},fail:function(e){t.app.showModal({title:"提示",content:e})}})},fail:function(e){}}):console.log("当前微信版本不支持chooseAddress")}}; 
 			}); 
		define("pages/company/businessCard/common/ec-canvas/echarts.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(e,n){"object"==("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.echarts={})}(void 0,function(e){function n(t,e){"createCanvas"===t&&(ld=null),od[t]=e}function i(e){if(null==e||"object"!=(void 0===e?"undefined":t(e)))return e;var n=e,r=Jc.call(e);if("[object Array]"===r){if(!B(e)){n=[];for(var a=0,o=e.length;o>a;a++)n[a]=i(e[a])}}else if(Qc[r]){if(!B(e)){var s=e.constructor;if(e.constructor.from)n=s.from(e);else{n=new s(e.length);for(var a=0,o=e.length;o>a;a++)n[a]=i(e[a])}}}else if(!Kc[r]&&!B(e)&&!I(e)){n={};for(var l in e)e.hasOwnProperty(l)&&(n[l]=i(e[l]))}return n}function r(t,e,n){if(!b(e)||!b(t))return n?i(e):t;for(var a in e)if(e.hasOwnProperty(a)){var o=t[a],s=e[a];!b(s)||!b(o)||x(s)||x(o)||I(s)||I(o)||M(s)||M(o)||B(s)||B(o)?!n&&a in t||(t[a]=i(e[a],!0)):r(o,s,n)}return t}function a(t,e){for(var n=t[0],i=1,a=t.length;a>i;i++)n=r(n,t[i],e);return n}function o(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function s(t,e,n){for(var i in e)e.hasOwnProperty(i)&&(n?null!=e[i]:null==t[i])&&(t[i]=e[i]);return t}function l(){return ld||(ld=sd().getContext("2d")),ld}function h(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n}return-1}function u(t,e){function n(){}var i=t.prototype;n.prototype=e.prototype,t.prototype=new n;for(var r in i)t.prototype[r]=i[r];t.prototype.constructor=t,t.superClass=e}function c(t,e,n){s(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,n)}function d(t){return t?"string"!=typeof t&&"number"==typeof t.length:void 0}function f(t,e,n){if(t&&e)if(t.forEach&&t.forEach===ed)t.forEach(e,n);else if(t.length===+t.length)for(var i=0,r=t.length;r>i;i++)e.call(n,t[i],i,t);else for(var a in t)t.hasOwnProperty(a)&&e.call(n,t[a],a,t)}function p(t,e,n){if(t&&e){if(t.map&&t.map===rd)return t.map(e,n);for(var i=[],r=0,a=t.length;a>r;r++)i.push(e.call(n,t[r],r,t));return i}}function g(t,e,n,i){if(t&&e){if(t.reduce&&t.reduce===ad)return t.reduce(e,n,i);for(var r=0,a=t.length;a>r;r++)n=e.call(i,n,t[r],r,t);return n}}function v(t,e,n){if(t&&e){if(t.filter&&t.filter===nd)return t.filter(e,n);for(var i=[],r=0,a=t.length;a>r;r++)e.call(n,t[r],r,t)&&i.push(t[r]);return i}}function m(t,e){var n=id.call(arguments,2);return function(){return t.apply(e,n.concat(id.call(arguments)))}}function y(t){var e=id.call(arguments,1);return function(){return t.apply(this,e.concat(id.call(arguments)))}}function x(t){return"[object Array]"===Jc.call(t)}function _(t){return"function"==typeof t}function w(t){return"[object String]"===Jc.call(t)}function b(e){var n=void 0===e?"undefined":t(e);return"function"===n||!!e&&"object"==n}function M(t){return!!Kc[Jc.call(t)]}function S(t){return!!Qc[Jc.call(t)]}function I(e){return"object"==(void 0===e?"undefined":t(e))&&"number"==typeof e.nodeType&&"object"==t(e.ownerDocument)}function T(t){return t!==t}function C(){for(var t=0,e=arguments.length;e>t;t++)if(null!=arguments[t])return arguments[t]}function A(t,e){return null!=t?t:e}function D(t,e,n){return null!=t?t:null!=e?e:n}function k(){return Function.call.apply(id,arguments)}function P(t){if("number"==typeof t)return[t,t,t,t];var e=t.length;return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t}function L(t,e){if(!t)throw new Error(e)}function O(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function z(t){t[hd]=!0}function B(t){return t[hd]}function E(t){function e(t,e){n?i.set(t,e):i.set(e,t)}var n=x(t);this.data={};var i=this;t instanceof E?t.each(e):t&&f(t,e)}function R(t){return new E(t)}function N(){}function F(t,e){var n=new cd(2);return null==t&&(t=0),null==e&&(e=0),n[0]=t,n[1]=e,n}function V(t,e){return t[0]=e[0],t[1]=e[1],t}function W(t){var e=new cd(2);return e[0]=t[0],e[1]=t[1],e}function H(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function G(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t}function Z(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function X(t){return Math.sqrt(Y(t))}function Y(t){return t[0]*t[0]+t[1]*t[1]}function q(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}function j(t,e){var n=X(e);return 0===n?(t[0]=0,t[1]=0):(t[0]=e[0]/n,t[1]=e[1]/n),t}function U(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function $(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])}function K(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[2]*r+n[4],t[1]=n[1]*i+n[3]*r+n[5],t}function Q(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t}function J(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}function tt(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function et(t,e){return{target:t,topTarget:e&&e.topTarget}}function nt(t,e){var n=t._$eventProcessor;return null!=e&&n&&n.normalizeQuery&&(e=n.normalizeQuery(e)),e}function it(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}function rt(t,e,n,i){return n=n||{},i||!$c.canvasSupported?at(t,e,n):$c.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(n.zrX=e.layerX,n.zrY=e.layerY):null!=e.offsetX?(n.zrX=e.offsetX,n.zrY=e.offsetY):at(t,e,n),n}function at(t,e,n){var i=it(t);n.zrX=e.clientX-i.left,n.zrY=e.clientY-i.top}function ot(t,e,n){if(null!=(e=e||window.event).zrX)return e;var i=e.type;if(i&&i.indexOf("touch")>=0){var r="touchend"!=i?e.targetTouches[0]:e.changedTouches[0];r&&rt(t,r,e,n)}else rt(t,e,e,n),e.zrDelta=e.wheelDelta?e.wheelDelta/120:-(e.detail||0)/3;var a=e.button;return null==e.which&&void 0!==a&&_d.test(e.type)&&(e.which=1&a?1:2&a?3:4&a?2:0),e}function st(t,e,n){xd?t.addEventListener(e,n):t.attachEvent("on"+e,n)}function lt(t,e,n){xd?t.removeEventListener(e,n):t.detachEvent("on"+e,n)}function ht(t){return t.which>1}function ut(t,e,n){return{type:t,event:n,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:n.zrX,offsetY:n.zrY,gestureEvent:n.gestureEvent,pinchX:n.pinchX,pinchY:n.pinchY,pinchScale:n.pinchScale,wheelDelta:n.zrDelta,zrByTouch:n.zrByTouch,which:n.which,stop:ct}}function ct(){wd(this.event)}function dt(){}function ft(t,e,n){if(t[t.rectHover?"rectContain":"contain"](e,n)){for(var i,r=t;r;){if(r.clipPath&&!r.clipPath.contain(e,n))return!1;r.silent&&(i=!0),r=r.parent}return!i||bd}return!1}function pt(){var t=new Id(6);return gt(t),t}function gt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function vt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function mt(t,e,n){var i=e[0]*n[0]+e[2]*n[1],r=e[1]*n[0]+e[3]*n[1],a=e[0]*n[2]+e[2]*n[3],o=e[1]*n[2]+e[3]*n[3],s=e[0]*n[4]+e[2]*n[5]+e[4],l=e[1]*n[4]+e[3]*n[5]+e[5];return t[0]=i,t[1]=r,t[2]=a,t[3]=o,t[4]=s,t[5]=l,t}function yt(t,e,n){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+n[0],t[5]=e[5]+n[1],t}function xt(t,e,n){var i=e[0],r=e[2],a=e[4],o=e[1],s=e[3],l=e[5],h=Math.sin(n),u=Math.cos(n);return t[0]=i*u+o*h,t[1]=-i*h+o*u,t[2]=r*u+s*h,t[3]=-r*h+u*s,t[4]=u*a+h*l,t[5]=u*l-h*a,t}function _t(t,e,n){var i=n[0],r=n[1];return t[0]=e[0]*i,t[1]=e[1]*r,t[2]=e[2]*i,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*r,t}function wt(t,e){var n=e[0],i=e[2],r=e[4],a=e[1],o=e[3],s=e[5],l=n*o-a*i;return l?(l=1/l,t[0]=o*l,t[1]=-a*l,t[2]=-i*l,t[3]=n*l,t[4]=(i*s-o*r)*l,t[5]=(a*r-n*s)*l,t):null}function bt(t){return t>Ad||-Ad>t}function Mt(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}function St(t){return 0>(t=Math.round(t))?0:t>255?255:t}function It(t){return 0>(t=Math.round(t))?0:t>360?360:t}function Tt(t){return 0>t?0:t>1?1:t}function Ct(t){return St(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100*255:parseInt(t,10))}function At(t){return Tt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100:parseFloat(t))}function Dt(t,e,n){return 0>n?n+=1:n>1&&(n-=1),1>6*n?t+(e-t)*n*6:1>2*n?e:2>3*n?t+(e-t)*(2/3-n)*6:t}function kt(t,e,n){return t+(e-t)*n}function Pt(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function Lt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Ot(t,e){Hd&&Lt(Hd,e),Hd=Wd.put(t,Hd||e.slice())}function zt(t,e){if(t){e=e||[];var n=Wd.get(t);if(n)return Lt(e,n);var i=(t+="").replace(/ /g,"").toLowerCase();if(i in Vd)return Lt(e,Vd[i]),Ot(t,e),e;if("#"!==i.charAt(0)){var r=i.indexOf("("),a=i.indexOf(")");if(-1!==r&&a+1===i.length){var o=i.substr(0,r),s=i.substr(r+1,a-(r+1)).split(","),l=1;switch(o){case"rgba":if(4!==s.length)return void Pt(e,0,0,0,1);l=At(s.pop());case"rgb":return 3!==s.length?void Pt(e,0,0,0,1):(Pt(e,Ct(s[0]),Ct(s[1]),Ct(s[2]),l),Ot(t,e),e);case"hsla":return 4!==s.length?void Pt(e,0,0,0,1):(s[3]=At(s[3]),Bt(s,e),Ot(t,e),e);case"hsl":return 3!==s.length?void Pt(e,0,0,0,1):(Bt(s,e),Ot(t,e),e);default:return}}Pt(e,0,0,0,1)}else{if(4===i.length)return(h=parseInt(i.substr(1),16))>=0&&4095>=h?(Pt(e,(3840&h)>>4|(3840&h)>>8,240&h|(240&h)>>4,15&h|(15&h)<<4,1),Ot(t,e),e):void Pt(e,0,0,0,1);if(7===i.length){var h=parseInt(i.substr(1),16);return h>=0&&16777215>=h?(Pt(e,(16711680&h)>>16,(65280&h)>>8,255&h,1),Ot(t,e),e):void Pt(e,0,0,0,1)}}}}function Bt(t,e){var n=(parseFloat(t[0])%360+360)%360/360,i=At(t[1]),r=At(t[2]),a=.5>=r?r*(i+1):r+i-r*i,o=2*r-a;return e=e||[],Pt(e,St(255*Dt(o,a,n+1/3)),St(255*Dt(o,a,n)),St(255*Dt(o,a,n-1/3)),1),4===t.length&&(e[3]=t[3]),e}function Et(t){if(t){var e,n,i=t[0]/255,r=t[1]/255,a=t[2]/255,o=Math.min(i,r,a),s=Math.max(i,r,a),l=s-o,h=(s+o)/2;if(0===l)e=0,n=0;else{n=.5>h?l/(s+o):l/(2-s-o);var u=((s-i)/6+l/2)/l,c=((s-r)/6+l/2)/l,d=((s-a)/6+l/2)/l;i===s?e=d-c:r===s?e=1/3+u-d:a===s&&(e=2/3+c-u),0>e&&(e+=1),e>1&&(e-=1)}var f=[360*e,n,h];return null!=t[3]&&f.push(t[3]),f}}function Rt(t,e){var n=zt(t);if(n){for(var i=0;3>i;i++)n[i]=0>e?n[i]*(1-e)|0:(255-n[i])*e+n[i]|0,n[i]>255?n[i]=255:t[i]<0&&(n[i]=0);return Wt(n,4===n.length?"rgba":"rgb")}}function Nt(t){var e=zt(t);return e?((1<<24)+(e[0]<<16)+(e[1]<<8)+ +e[2]).toString(16).slice(1):void 0}function Ft(t,e,n){if(e&&e.length&&t>=0&&1>=t){n=n||[];var i=t*(e.length-1),r=Math.floor(i),a=Math.ceil(i),o=e[r],s=e[a],l=i-r;return n[0]=St(kt(o[0],s[0],l)),n[1]=St(kt(o[1],s[1],l)),n[2]=St(kt(o[2],s[2],l)),n[3]=Tt(kt(o[3],s[3],l)),n}}function Vt(t,e,n){if(e&&e.length&&t>=0&&1>=t){var i=t*(e.length-1),r=Math.floor(i),a=Math.ceil(i),o=zt(e[r]),s=zt(e[a]),l=i-r,h=Wt([St(kt(o[0],s[0],l)),St(kt(o[1],s[1],l)),St(kt(o[2],s[2],l)),Tt(kt(o[3],s[3],l))],"rgba");return n?{color:h,leftIndex:r,rightIndex:a,value:i}:h}}function Wt(t,e){if(t&&t.length){var n=t[0]+","+t[1]+","+t[2];return("rgba"===e||"hsva"===e||"hsla"===e)&&(n+=","+t[3]),e+"("+n+")"}}function Ht(t,e){return t[e]}function Gt(t,e,n){t[e]=n}function Zt(t,e,n){return(e-t)*n+t}function Xt(t,e,n){return n>.5?e:t}function Yt(t,e,n,i,r){var a=t.length;if(1==r)for(s=0;a>s;s++)i[s]=Zt(t[s],e[s],n);else for(var o=a&&t[0].length,s=0;a>s;s++)for(var l=0;o>l;l++)i[s][l]=Zt(t[s][l],e[s][l],n)}function qt(t,e,n){var i=t.length,r=e.length;if(i!==r)if(i>r)t.length=r;else for(o=i;r>o;o++)t.push(1===n?e[o]:Yd.call(e[o]));for(var a=t[0]&&t[0].length,o=0;o<t.length;o++)if(1===n)isNaN(t[o])&&(t[o]=e[o]);else for(var s=0;a>s;s++)isNaN(t[o][s])&&(t[o][s]=e[o][s])}function jt(t,e,n){if(t===e)return!0;var i=t.length;if(i!==e.length)return!1;if(1===n){for(a=0;i>a;a++)if(t[a]!==e[a])return!1}else for(var r=t[0].length,a=0;i>a;a++)for(var o=0;r>o;o++)if(t[a][o]!==e[a][o])return!1;return!0}function Ut(t,e,n,i,r,a,o,s,l){var h=t.length;if(1==l)for(c=0;h>c;c++)s[c]=$t(t[c],e[c],n[c],i[c],r,a,o);else for(var u=t[0].length,c=0;h>c;c++)for(var d=0;u>d;d++)s[c][d]=$t(t[c][d],e[c][d],n[c][d],i[c][d],r,a,o)}function $t(t,e,n,i,r,a,o){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*o+(-3*(e-n)-2*s-l)*a+s*r+e}function Kt(t){if(d(t)){var e=t.length;if(d(t[0])){for(var n=[],i=0;e>i;i++)n.push(Yd.call(t[i]));return n}return Yd.call(t)}return t}function Qt(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function Jt(t){var e=t[t.length-1].value;return d(e&&e[0])?2:1}function te(t,e,n,i,r,a){var o=t._getter,s=t._setter,l="spline"===e,h=i.length;if(h){var u,c=d(i[0].value),f=!1,p=!1,g=c?Jt(i):0;i.sort(function(t,e){return t.time-e.time}),u=i[h-1].time;for(var v=[],m=[],y=i[0].value,x=!0,_=0;h>_;_++){v.push(i[_].time/u);var w=i[_].value;if(c&&jt(w,y,g)||!c&&w===y||(x=!1),y=w,"string"==typeof w){var b=zt(w);b?(w=b,f=!0):p=!0}m.push(w)}if(a||!x){for(var M=m[h-1],_=0;h-1>_;_++)c?qt(m[_],M,g):!isNaN(m[_])||isNaN(M)||p||f||(m[_]=M);c&&qt(o(t._target,r),M,g);var S,I,T,C,A,D,k=0,P=0;if(f)var L=[0,0,0,0];var O=new Mt({target:t._target,life:u,loop:t._loop,delay:t._delay,onframe:function(t,e){var n;if(0>e)n=0;else if(P>e){for(n=S=Math.min(k+1,h-1);n>=0&&!(v[n]<=e);n--);n=Math.min(n,h-2)}else{for(n=k;h>n&&!(v[n]>e);n++);n=Math.min(n-1,h-2)}k=n,P=e;var i=v[n+1]-v[n];if(0!==i)if(I=(e-v[n])/i,l)if(C=m[n],T=m[0===n?n:n-1],A=m[n>h-2?h-1:n+1],D=m[n>h-3?h-1:n+2],c)Ut(T,C,A,D,I,I*I,I*I*I,o(t,r),g);else{if(f)a=Ut(T,C,A,D,I,I*I,I*I*I,L,1),a=Qt(L);else{if(p)return Xt(C,A,I);a=$t(T,C,A,D,I,I*I,I*I*I)}s(t,r,a)}else if(c)Yt(m[n],m[n+1],I,o(t,r),g);else{var a;if(f)Yt(m[n],m[n+1],I,L,1),a=Qt(L);else{if(p)return Xt(m[n],m[n+1],I);a=Zt(m[n],m[n+1],I)}s(t,r,a)}},ondestroy:n});return e&&"spline"!==e&&(O.easing=e),O}}}function ee(t,e,n,i,r,a,o,s){w(i)?(a=r,r=i,i=0):_(r)?(a=r,r="linear",i=0):_(i)?(a=i,i=0):_(n)?(a=n,n=500):n||(n=500),t.stopAnimation(),ne(t,"",t,e,n,i,s);var l=t.animators.slice(),h=l.length;h||a&&a();for(var u=0;u<l.length;u++)l[u].done(function(){--h||a&&a()}).start(r,o)}function ne(t,e,n,i,r,a,o){var s={},l=0;for(var h in i)i.hasOwnProperty(h)&&(null!=n[h]?b(i[h])&&!d(i[h])?ne(t,e?e+"."+h:h,n[h],i[h],r,a,o):(o?(s[h]=n[h],ie(t,e,h,i[h])):s[h]=i[h],l++):null==i[h]||o||ie(t,e,h,i[h]));l>0&&t.animate(e,!1).when(null==r?500:r,s).delay(a||0)}function ie(t,e,n,i){if(e){var r={};r[e]={},r[e][n]=i,t.attr(r)}else t.attr(n,i)}function re(t,e,n,i){0>n&&(t+=n,n=-n),0>i&&(e+=i,i=-i),this.x=t,this.y=e,this.width=n,this.height=i}function ae(t){for(var e=0;t>=af;)e|=1&t,t>>=1;return t+e}function oe(t,e,n,i){var r=e+1;if(r===n)return 1;if(i(t[r++],t[e])<0){for(;n>r&&i(t[r],t[r-1])<0;)r++;se(t,e,r)}else for(;n>r&&i(t[r],t[r-1])>=0;)r++;return r-e}function se(t,e,n){for(n--;n>e;){var i=t[e];t[e++]=t[n],t[n--]=i}}function le(t,e,n,i,r){for(i===e&&i++;n>i;i++){for(var a,o=t[i],s=e,l=i;l>s;)r(o,t[a=s+l>>>1])<0?l=a:s=a+1;var h=i-s;switch(h){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;h>0;)t[s+h]=t[s+h-1],h--}t[s]=o}}function he(t,e,n,i,r,a){var o=0,s=0,l=1;if(a(t,e[n+r])>0){for(s=i-r;s>l&&a(t,e[n+r+l])>0;)o=l,0>=(l=1+(l<<1))&&(l=s);l>s&&(l=s),o+=r,l+=r}else{for(s=r+1;s>l&&a(t,e[n+r-l])<=0;)o=l,0>=(l=1+(l<<1))&&(l=s);l>s&&(l=s);var h=o;o=r-l,l=r-h}for(o++;l>o;){var u=o+(l-o>>>1);a(t,e[n+u])>0?o=u+1:l=u}return l}function ue(t,e,n,i,r,a){var o=0,s=0,l=1;if(a(t,e[n+r])<0){for(s=r+1;s>l&&a(t,e[n+r-l])<0;)o=l,0>=(l=1+(l<<1))&&(l=s);l>s&&(l=s);var h=o;o=r-l,l=r-h}else{for(s=i-r;s>l&&a(t,e[n+r+l])>=0;)o=l,0>=(l=1+(l<<1))&&(l=s);l>s&&(l=s),o+=r,l+=r}for(o++;l>o;){var u=o+(l-o>>>1);a(t,e[n+u])<0?l=u:o=u+1}return l}function ce(t,e){function n(n){var s=a[n],h=o[n],u=a[n+1],c=o[n+1];o[n]=h+c,n===l-3&&(a[n+1]=a[n+2],o[n+1]=o[n+2]),l--;var d=ue(t[u],t,s,h,0,e);s+=d,0!=(h-=d)&&0!==(c=he(t[s+h-1],t,u,c,c-1,e))&&(c>=h?i(s,h,u,c):r(s,h,u,c))}function i(n,i,r,a){var o=0;for(o=0;i>o;o++)h[o]=t[n+o];var l=0,u=r,c=n;if(t[c++]=t[u++],0!=--a){if(1===i){for(o=0;a>o;o++)t[c+o]=t[u+o];return void(t[c+a]=h[l])}for(var d,f,p,g=s;;){d=0,f=0,p=!1;do{if(e(t[u],h[l])<0){if(t[c++]=t[u++],f++,d=0,0==--a){p=!0;break}}else if(t[c++]=h[l++],d++,f=0,1==--i){p=!0;break}}while(g>(d|f));if(p)break;do{if(0!==(d=ue(t[u],h,l,i,0,e))){for(o=0;d>o;o++)t[c+o]=h[l+o];if(c+=d,l+=d,1>=(i-=d)){p=!0;break}}if(t[c++]=t[u++],0==--a){p=!0;break}if(0!==(f=he(h[l],t,u,a,0,e))){for(o=0;f>o;o++)t[c+o]=t[u+o];if(c+=f,u+=f,0===(a-=f)){p=!0;break}}if(t[c++]=h[l++],1==--i){p=!0;break}g--}while(d>=of||f>=of);if(p)break;0>g&&(g=0),g+=2}if(1>(s=g)&&(s=1),1===i){for(o=0;a>o;o++)t[c+o]=t[u+o];t[c+a]=h[l]}else{if(0===i)throw new Error;for(o=0;i>o;o++)t[c+o]=h[l+o]}}else for(o=0;i>o;o++)t[c+o]=h[l+o]}function r(n,i,r,a){var o=0;for(o=0;a>o;o++)h[o]=t[r+o];var l=n+i-1,u=a-1,c=r+a-1,d=0,f=0;if(t[c--]=t[l--],0!=--i){if(1===a){for(f=(c-=i)+1,d=(l-=i)+1,o=i-1;o>=0;o--)t[f+o]=t[d+o];return void(t[c]=h[u])}for(var p=s;;){var g=0,v=0,m=!1;do{if(e(h[u],t[l])<0){if(t[c--]=t[l--],g++,v=0,0==--i){m=!0;break}}else if(t[c--]=h[u--],v++,g=0,1==--a){m=!0;break}}while(p>(g|v));if(m)break;do{if(0!=(g=i-ue(h[u],t,n,i,i-1,e))){for(i-=g,f=(c-=g)+1,d=(l-=g)+1,o=g-1;o>=0;o--)t[f+o]=t[d+o];if(0===i){m=!0;break}}if(t[c--]=h[u--],1==--a){m=!0;break}if(0!=(v=a-he(t[l],h,0,a,a-1,e))){for(a-=v,f=(c-=v)+1,d=(u-=v)+1,o=0;v>o;o++)t[f+o]=h[d+o];if(1>=a){m=!0;break}}if(t[c--]=t[l--],0==--i){m=!0;break}p--}while(g>=of||v>=of);if(m)break;0>p&&(p=0),p+=2}if(1>(s=p)&&(s=1),1===a){for(f=(c-=i)+1,d=(l-=i)+1,o=i-1;o>=0;o--)t[f+o]=t[d+o];t[c]=h[u]}else{if(0===a)throw new Error;for(d=c-(a-1),o=0;a>o;o++)t[d+o]=h[o]}}else for(d=c-(a-1),o=0;a>o;o++)t[d+o]=h[o]}var a,o,s=of,l=0,h=[];a=[],o=[],this.mergeRuns=function(){for(;l>1;){var t=l-2;if(t>=1&&o[t-1]<=o[t]+o[t+1]||t>=2&&o[t-2]<=o[t]+o[t-1])o[t-1]<o[t+1]&&t--;else if(o[t]>o[t+1])break;n(t)}},this.forceMergeRuns=function(){for(;l>1;){var t=l-2;t>0&&o[t-1]<o[t+1]&&t--,n(t)}},this.pushRun=function(t,e){a[l]=t,o[l]=e,l+=1}}function de(t,e,n,i){n||(n=0),i||(i=t.length);var r=i-n;if(!(2>r)){var a=0;if(af>r)return a=oe(t,n,i,e),void le(t,n,i,n+a,e);var o=new ce(t,e),s=ae(r);do{if(a=oe(t,n,i,e),s>a){var l=r;l>s&&(l=s),le(t,n,n+l,n+a,e),a=l}o.pushRun(n,a),o.mergeRuns(),r-=a,n+=a}while(0!==r);o.forceMergeRuns()}}function fe(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}function pe(t,e,n){var i=null==e.x?0:e.x,r=null==e.x2?1:e.x2,a=null==e.y?0:e.y,o=null==e.y2?0:e.y2;return e.global||(i=i*n.width+n.x,r=r*n.width+n.x,a=a*n.height+n.y,o=o*n.height+n.y),i=isNaN(i)?0:i,r=isNaN(r)?1:r,a=isNaN(a)?0:a,o=isNaN(o)?0:o,t.createLinearGradient(i,a,r,o)}function ge(t,e,n){var i=n.width,r=n.height,a=Math.min(i,r),o=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r;return e.global||(o=o*i+n.x,s=s*r+n.y,l*=a),t.createRadialGradient(o,s,0,o,s,l)}function ve(){return!1}function me(t,e,n){var i=sd(),r=e.getWidth(),a=e.getHeight(),o=i.style;return o&&(o.position="absolute",o.left=0,o.top=0,o.width=r+"px",o.height=a+"px",i.setAttribute("data-zr-dom-id",t)),i.width=r*n,i.height=a*n,i}function ye(t){if("string"==typeof t){var e=yf.get(t);return e&&e.image}return t}function xe(t,e,n,i,r){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!n)return e;var a=yf.get(t),o={hostEl:n,cb:i,cbPayload:r};return a?(e=a.image,!we(e)&&a.pending.push(o)):(!e&&(e=new Image),e.onload=e.onerror=_e,yf.put(t,e.__cachedImgObj={image:e,pending:[o]}),e.src=e.__zrImageSrc=t),e}return t}return e}function _e(){var t=this.__cachedImgObj;this.onload=this.onerror=this.__cachedImgObj=null;for(var e=0;e<t.pending.length;e++){var n=t.pending[e],i=n.cb;i&&i(this,n.cbPayload),n.hostEl.dirty()}t.pending.length=0}function we(t){return t&&t.width&&t.height}function be(t,e){var n=t+":"+(e=e||Mf);if(xf[n])return xf[n];for(var i=(t+"").split("\n"),r=0,a=0,o=i.length;o>a;a++)r=Math.max(ze(i[a],e).width,r);return _f>wf&&(_f=0,xf={}),_f++,xf[n]=r,r}function Me(t,e,n,i,r,a,o){return a?Ie(t,e,n,i,r,a,o):Se(t,e,n,i,r,o)}function Se(t,e,n,i,r,a){var o=Be(t,e,r,a),s=be(t,e);r&&(s+=r[1]+r[3]);var l=o.outerHeight,h=new re(Te(0,s,n),Ce(0,l,i),s,l);return h.lineHeight=o.lineHeight,h}function Ie(t,e,n,i,r,a,o){var s=Ee(t,{rich:a,truncate:o,font:e,textAlign:n,textPadding:r}),l=s.outerWidth,h=s.outerHeight;return new re(Te(0,l,n),Ce(0,h,i),l,h)}function Te(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function Ce(t,e,n){return"middle"===n?t-=e/2:"bottom"===n&&(t-=e),t}function Ae(t,e,n){var i=e.x,r=e.y,a=e.height,o=e.width,s=a/2,l="left",h="top";switch(t){case"left":i-=n,r+=s,l="right",h="middle";break;case"right":i+=n+o,r+=s,h="middle";break;case"top":i+=o/2,r-=n,l="center",h="bottom";break;case"bottom":i+=o/2,r+=a+n,l="center";break;case"inside":i+=o/2,r+=s,l="center",h="middle";break;case"insideLeft":i+=n,r+=s,h="middle";break;case"insideRight":i+=o-n,r+=s,l="right",h="middle";break;case"insideTop":i+=o/2,r+=n,l="center";break;case"insideBottom":i+=o/2,r+=a-n,l="center",h="bottom";break;case"insideTopLeft":i+=n,r+=n;break;case"insideTopRight":i+=o-n,r+=n,l="right";break;case"insideBottomLeft":i+=n,r+=a-n,h="bottom";break;case"insideBottomRight":i+=o-n,r+=a-n,l="right",h="bottom"}return{x:i,y:r,textAlign:l,textVerticalAlign:h}}function De(t,e,n,i,r){if(!e)return"";var a=(t+"").split("\n");r=ke(e,n,i,r);for(var o=0,s=a.length;s>o;o++)a[o]=Pe(a[o],r);return a.join("\n")}function ke(t,e,n,i){(i=o({},i)).font=e;var n=A(n,"...");i.maxIterations=A(i.maxIterations,2);var r=i.minChar=A(i.minChar,0);i.cnCharWidth=be("国",e);var a=i.ascCharWidth=be("a",e);i.placeholder=A(i.placeholder,"");for(var s=t=Math.max(0,t-1),l=0;r>l&&s>=a;l++)s-=a;var h=be(n);return h>s&&(n="",h=0),s=t-h,i.ellipsis=n,i.ellipsisWidth=h,i.contentWidth=s,i.containerWidth=t,i}function Pe(t,e){var n=e.containerWidth,i=e.font,r=e.contentWidth;if(!n)return"";var a=be(t,i);if(n>=a)return t;for(var o=0;;o++){if(r>=a||o>=e.maxIterations){t+=e.ellipsis;break}var s=0===o?Le(t,r,e.ascCharWidth,e.cnCharWidth):a>0?Math.floor(t.length*r/a):0;a=be(t=t.substr(0,s),i)}return""===t&&(t=e.placeholder),t}function Le(t,e,n,i){for(var r=0,a=0,o=t.length;o>a&&e>r;a++){var s=t.charCodeAt(a);r+=s>=0&&127>=s?n:i}return a}function Oe(t){return be("国",t)}function ze(t,e){return Sf.measureText(t,e)}function Be(t,e,n,i){null!=t&&(t+="");var r=Oe(e),a=t?t.split("\n"):[],o=a.length*r,s=o;if(n&&(s+=n[0]+n[2]),t&&i){var l=i.outerHeight,h=i.outerWidth;if(null!=l&&s>l)t="",a=[];else if(null!=h)for(var u=ke(h-(n?n[1]+n[3]:0),e,i.ellipsis,{minChar:i.minChar,placeholder:i.placeholder}),c=0,d=a.length;d>c;c++)a[c]=Pe(a[c],u)}return{lines:a,height:o,outerHeight:s,lineHeight:r}}function Ee(t,e){var n={lines:[],width:0,height:0};if(null!=t&&(t+=""),!t)return n;for(var i,r=bf.lastIndex=0;null!=(i=bf.exec(t));){var a=i.index;a>r&&Re(n,t.substring(r,a)),Re(n,i[2],i[1]),r=bf.lastIndex}r<t.length&&Re(n,t.substring(r,t.length));var o=n.lines,s=0,l=0,h=[],u=e.textPadding,c=e.truncate,d=c&&c.outerWidth,f=c&&c.outerHeight;u&&(null!=d&&(d-=u[1]+u[3]),null!=f&&(f-=u[0]+u[2]));for(k=0;k<o.length;k++){for(var p=o[k],g=0,v=0,m=0;m<p.tokens.length;m++){var y=(P=p.tokens[m]).styleName&&e.rich[P.styleName]||{},x=P.textPadding=y.textPadding,_=P.font=y.font||e.font,w=P.textHeight=A(y.textHeight,Oe(_));if(x&&(w+=x[0]+x[2]),P.height=w,P.lineHeight=D(y.textLineHeight,e.textLineHeight,w),P.textAlign=y&&y.textAlign||e.textAlign,P.textVerticalAlign=y&&y.textVerticalAlign||"middle",null!=f&&s+P.lineHeight>f)return{lines:[],width:0,height:0};P.textWidth=be(P.text,_);var b=y.textWidth,M=null==b||"auto"===b;if("string"==typeof b&&"%"===b.charAt(b.length-1))P.percentWidth=b,h.push(P),b=0;else{if(M){b=P.textWidth;var S=y.textBackgroundColor,I=S&&S.image;I&&(I=ye(I),we(I)&&(b=Math.max(b,I.width*w/I.height)))}var T=x?x[1]+x[3]:0;b+=T;var C=null!=d?d-v:null;null!=C&&b>C&&(!M||T>C?(P.text="",P.textWidth=b=0):(P.text=De(P.text,C-T,_,c.ellipsis,{minChar:c.minChar}),P.textWidth=be(P.text,_),b=P.textWidth+T))}v+=P.width=b,y&&(g=Math.max(g,P.lineHeight))}p.width=v,p.lineHeight=g,s+=g,l=Math.max(l,v)}n.outerWidth=n.width=A(e.textWidth,l),n.outerHeight=n.height=A(e.textHeight,s),u&&(n.outerWidth+=u[1]+u[3],n.outerHeight+=u[0]+u[2]);for(var k=0;k<h.length;k++){var P=h[k],L=P.percentWidth;P.width=parseInt(L,10)/100*l}return n}function Re(t,e,n){for(var i=""===e,r=e.split("\n"),a=t.lines,o=0;o<r.length;o++){var s=r[o],l={styleName:n,text:s,isLineHolder:!s&&!i};if(o)a.push({tokens:[l]});else{var h=(a[a.length-1]||(a[0]={tokens:[]})).tokens,u=h.length;1===u&&h[0].isLineHolder?h[0]=l:(s||!u||i)&&h.push(l)}}}function Ne(t){var e=(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ");return e&&O(e)||t.textFont||t.font}function Fe(t,e){var n,i,r,a,o=e.x,s=e.y,l=e.width,h=e.height,u=e.r;0>l&&(o+=l,l=-l),0>h&&(s+=h,h=-h),"number"==typeof u?n=i=r=a=u:u instanceof Array?1===u.length?n=i=r=a=u[0]:2===u.length?(n=r=u[0],i=a=u[1]):3===u.length?(n=u[0],i=a=u[1],r=u[2]):(n=u[0],i=u[1],r=u[2],a=u[3]):n=i=r=a=0;var c;n+i>l&&(c=n+i,n*=l/c,i*=l/c),r+a>l&&(c=r+a,r*=l/c,a*=l/c),i+r>h&&(c=i+r,i*=h/c,r*=h/c),n+a>h&&(c=n+a,n*=h/c,a*=h/c),t.moveTo(o+n,s),t.lineTo(o+l-i,s),0!==i&&t.arc(o+l-i,s+i,i,-Math.PI/2,0),t.lineTo(o+l,s+h-r),0!==r&&t.arc(o+l-r,s+h-r,r,0,Math.PI/2),t.lineTo(o+a,s+h),0!==a&&t.arc(o+a,s+h-a,a,Math.PI/2,Math.PI),t.lineTo(o,s+n),0!==n&&t.arc(o+n,s+n,n,Math.PI,1.5*Math.PI)}function Ve(t){return We(t),f(t.rich,We),t}function We(t){if(t){t.font=Ne(t);var e=t.textAlign;"middle"===e&&(e="center"),t.textAlign=null==e||If[e]?e:"left";var n=t.textVerticalAlign||t.textBaseline;"center"===n&&(n="middle"),t.textVerticalAlign=null==n||Tf[n]?n:"top",t.textPadding&&(t.textPadding=P(t.textPadding))}}function He(t,e,n,i,r,a){i.rich?Ze(t,e,n,i,r):Ge(t,e,n,i,r,a)}function Ge(t,e,n,i,r,a){var o=a&&a.style,s=o&&"text"===a.type,l=i.font||Mf;s&&l===(o.font||Mf)||(e.font=l);var h=t.__computedFont;t.__styleFont!==l&&(t.__styleFont=l,h=t.__computedFont=e.font);var u=i.textPadding,c=t.__textCotentBlock;(!c||t.__dirtyText)&&(c=t.__textCotentBlock=Be(n,h,u,i.truncate));var d=c.outerHeight,f=c.lines,p=c.lineHeight,g=Ke(d,i,r),v=g.baseX,m=g.baseY,y=g.textAlign||"left",x=g.textVerticalAlign;Ye(e,i,r,v,m);var _=Ce(m,d,x),w=v,b=_,M=je(i);if(M||u){var S=be(n,h);u&&(S+=u[1]+u[3]);var I=Te(v,S,y);M&&Ue(t,e,i,I,_,S,d),u&&(w=nn(v,y,u),b+=u[0])}e.textAlign=y,e.textBaseline="middle";for(E=0;E<Cf.length;E++){var T=Cf[E],C=T[0],A=T[1],D=i[C];s&&D===o[C]||(e[A]=hf(e,A,D||T[2]))}b+=p/2;var k=i.textStrokeWidth,P=s?o.textStrokeWidth:null,L=!s||k!==P,O=!s||L||i.textStroke!==o.textStroke,z=Je(i.textStroke,k),B=tn(i.textFill);if(z&&(L&&(e.lineWidth=k),O&&(e.strokeStyle=z)),B&&(!s||i.textFill!==o.textFill||o.textBackgroundColor)&&(e.fillStyle=B),1===f.length)z&&e.strokeText(f[0],w,b),B&&e.fillText(f[0],w,b);else for(var E=0;E<f.length;E++)z&&e.strokeText(f[E],w,b),B&&e.fillText(f[E],w,b),b+=p}function Ze(t,e,n,i,r){var a=t.__textCotentBlock;(!a||t.__dirtyText)&&(a=t.__textCotentBlock=Ee(n,i)),Xe(t,e,a,i,r)}function Xe(t,e,n,i,r){var a=n.width,o=n.outerWidth,s=n.outerHeight,l=i.textPadding,h=Ke(s,i,r),u=h.baseX,c=h.baseY,d=h.textAlign,f=h.textVerticalAlign;Ye(e,i,r,u,c);var p=Te(u,o,d),g=Ce(c,s,f),v=p,m=g;l&&(v+=l[3],m+=l[0]);var y=v+a;je(i)&&Ue(t,e,i,p,g,o,s);for(var x=0;x<n.lines.length;x++){for(var _,w=n.lines[x],b=w.tokens,M=b.length,S=w.lineHeight,I=w.width,T=0,C=v,A=y,D=M-1;M>T&&(!(_=b[T]).textAlign||"left"===_.textAlign);)qe(t,e,_,i,S,m,C,"left"),I-=_.width,C+=_.width,T++;for(;D>=0&&"right"===(_=b[D]).textAlign;)qe(t,e,_,i,S,m,A,"right"),I-=_.width,A-=_.width,D--;for(C+=(a-(C-v)-(y-A)-I)/2;D>=T;)qe(t,e,_=b[T],i,S,m,C+_.width/2,"center"),C+=_.width,T++;m+=S}}function Ye(t,e,n,i,r){if(n&&e.textRotation){var a=e.textOrigin;"center"===a?(i=n.width/2+n.x,r=n.height/2+n.y):a&&(i=a[0]+n.x,r=a[1]+n.y),t.translate(i,r),t.rotate(-e.textRotation),t.translate(-i,-r)}}function qe(t,e,n,i,r,a,o,s){var l=i.rich[n.styleName]||{};l.text=n.text;var h=n.textVerticalAlign,u=a+r/2;"top"===h?u=a+n.height/2:"bottom"===h&&(u=a+r-n.height/2),!n.isLineHolder&&je(l)&&Ue(t,e,l,"right"===s?o-n.width:"center"===s?o-n.width/2:o,u-n.height/2,n.width,n.height);var c=n.textPadding;c&&(o=nn(o,s,c),u-=n.height/2-c[2]-n.textHeight/2),Qe(e,"shadowBlur",D(l.textShadowBlur,i.textShadowBlur,0)),Qe(e,"shadowColor",l.textShadowColor||i.textShadowColor||"transparent"),Qe(e,"shadowOffsetX",D(l.textShadowOffsetX,i.textShadowOffsetX,0)),Qe(e,"shadowOffsetY",D(l.textShadowOffsetY,i.textShadowOffsetY,0)),Qe(e,"textAlign",s),Qe(e,"textBaseline","middle"),Qe(e,"font",n.font||Mf);var d=Je(l.textStroke||i.textStroke,p),f=tn(l.textFill||i.textFill),p=A(l.textStrokeWidth,i.textStrokeWidth);d&&(Qe(e,"lineWidth",p),Qe(e,"strokeStyle",d),e.strokeText(n.text,o,u)),f&&(Qe(e,"fillStyle",f),e.fillText(n.text,o,u))}function je(t){return t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor}function Ue(t,e,n,i,r,a,o){var s=n.textBackgroundColor,l=n.textBorderWidth,h=n.textBorderColor,u=w(s);if(Qe(e,"shadowBlur",n.textBoxShadowBlur||0),Qe(e,"shadowColor",n.textBoxShadowColor||"transparent"),Qe(e,"shadowOffsetX",n.textBoxShadowOffsetX||0),Qe(e,"shadowOffsetY",n.textBoxShadowOffsetY||0),u||l&&h){e.beginPath();var c=n.textBorderRadius;c?Fe(e,{x:i,y:r,width:a,height:o,r:c}):e.rect(i,r,a,o),e.closePath()}if(u)if(Qe(e,"fillStyle",s),null!=n.fillOpacity){f=e.globalAlpha;e.globalAlpha=n.fillOpacity*n.opacity,e.fill(),e.globalAlpha=f}else e.fill();else if(_(s))Qe(e,"fillStyle",s(n)),e.fill();else if(b(s)){var d=s.image;(d=xe(d,null,t,$e,s))&&we(d)&&e.drawImage(d,i,r,a,o)}if(l&&h)if(Qe(e,"lineWidth",l),Qe(e,"strokeStyle",h),null!=n.strokeOpacity){var f=e.globalAlpha;e.globalAlpha=n.strokeOpacity*n.opacity,e.stroke(),e.globalAlpha=f}else e.stroke()}function $e(t,e){e.image=t}function Ke(t,e,n){var i=e.x||0,r=e.y||0,a=e.textAlign,o=e.textVerticalAlign;if(n){var s=e.textPosition;if(s instanceof Array)i=n.x+en(s[0],n.width),r=n.y+en(s[1],n.height);else{var l=Ae(s,n,e.textDistance);i=l.x,r=l.y,a=a||l.textAlign,o=o||l.textVerticalAlign}var h=e.textOffset;h&&(i+=h[0],r+=h[1])}return{baseX:i,baseY:r,textAlign:a,textVerticalAlign:o}}function Qe(t,e,n){return t[e]=hf(t,e,n),t[e]}function Je(t,e){return null==t||0>=e||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function tn(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function en(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function nn(t,e,n){return"right"===e?t-n[1]:"center"===e?t+n[3]/2-n[1]/2:t+n[3]}function rn(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding)}function an(t){t=t||{},Jd.call(this,t);for(var e in t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new cf(t.style,this),this._rect=null,this.__clipPaths=[]}function on(t){an.call(this,t)}function sn(t){return parseInt(t,10)}function ln(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}function hn(t,e,n){return Pf.copy(t.getBoundingRect()),t.transform&&Pf.applyTransform(t.transform),Lf.width=e,Lf.height=n,!Pf.intersect(Lf)}function un(t,e){if(t==e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!0}function cn(t,e){for(var n=0;n<t.length;n++){var i=t[n];i.setTransform(e),e.beginPath(),i.buildPath(e,i.shape),e.clip(),i.restoreTransform(e)}}function dn(t,e){var n=document.createElement("div");return n.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",n}function fn(t){var e=t[1][0]-t[0][0],n=t[1][1]-t[0][1];return Math.sqrt(e*e+n*n)}function pn(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}function gn(t){return"mousewheel"===t&&$c.browser.firefox?"DOMMouseScroll":t}function vn(t,e,n){var i=t._gestureMgr;"start"===n&&i.clear();var r=i.recognize(e,t.handler.findHover(e.zrX,e.zrY,null).target,t.dom);if("end"===n&&i.clear(),r){var a=r.type;e.gestureEvent=a,t.handler.dispatchToElement({target:r.target},a,r.event)}}function mn(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}function yn(t){var e=t.pointerType;return"pen"===e||"touch"===e}function xn(t){function e(t,e){return function(){return e._touching?void 0:t.apply(e,arguments)}}f(Nf,function(e){t._handlers[e]=m(Wf[e],t)}),f(Vf,function(e){t._handlers[e]=m(Wf[e],t)}),f(Rf,function(n){t._handlers[n]=e(Wf[n],t)})}function _n(t){function e(e,n){f(e,function(e){st(t,gn(e),n._handlers[e])},n)}yd.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._gestureMgr=new Bf,this._handlers={},xn(this),$c.pointerEventsSupported?e(Vf,this):($c.touchEventsSupported&&e(Nf,this),e(Rf,this))}function wn(t,e){var n=new Yf(jc(),t,e);return Xf[n.id]=n,n}function bn(t){delete Xf[t]}function Mn(t){return t instanceof Array?t:null==t?[]:[t]}function Sn(t,e,n){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{};for(var i=0,r=n.length;r>i;i++){var a=n[i];!t.emphasis[e].hasOwnProperty(a)&&t[e].hasOwnProperty(a)&&(t.emphasis[e][a]=t[e][a])}}}function In(t){return!Uf(t)||$f(t)||t instanceof Date?t:t.value}function Tn(t){return Uf(t)&&!(t instanceof Array)}function Cn(t,e){e=(e||[]).slice();var n=p(t||[],function(t){return{exist:t}});return jf(e,function(t,i){if(Uf(t)){for(r=0;r<n.length;r++)if(!n[r].option&&null!=t.id&&n[r].exist.id===t.id+"")return n[r].option=t,void(e[i]=null);for(var r=0;r<n.length;r++){var a=n[r].exist;if(!(n[r].option||null!=a.id&&null!=t.id||null==t.name||kn(t)||kn(a)||a.name!==t.name+""))return n[r].option=t,void(e[i]=null)}}}),jf(e,function(t){if(Uf(t)){for(var e=0;e<n.length;e++){var i=n[e].exist;if(!n[e].option&&!kn(i)&&null==t.id){n[e].option=t;break}}e>=n.length&&n.push({option:t})}}),n}function An(t){var e=R();jf(t,function(t){var n=t.exist;n&&e.set(n.id,t)}),jf(t,function(t){var n=t.option;L(!n||null==n.id||!e.get(n.id)||e.get(n.id)===t,"id duplicates: "+(n&&n.id)),n&&null!=n.id&&e.set(n.id,t),!t.keyInfo&&(t.keyInfo={})}),jf(t,function(t,n){var i=t.exist,r=t.option,a=t.keyInfo;if(Uf(r)){if(a.name=null!=r.name?r.name+"":i?i.name:Kf+n,i)a.id=i.id;else if(null!=r.id)a.id=r.id+"";else{var o=0;do{a.id="\0"+a.name+"\0"+o++}while(e.get(a.id))}e.set(a.id,t)}})}function Dn(t){var e=t.name;return!(!e||!e.indexOf(Kf))}function kn(t){return Uf(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")}function Pn(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?x(e.dataIndex)?p(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?x(e.name)?p(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0}function Ln(){var t="__\0ec_inner_"+Jf+++"_"+Math.random().toFixed(5);return function(e){return e[t]||(e[t]={})}}function On(t,e,n){if(w(e)){var i={};i[e+"Index"]=0,e=i}var r=n&&n.defaultMainType;!r||zn(e,r+"Index")||zn(e,r+"Id")||zn(e,r+"Name")||(e[r+"Index"]=0);var a={};return jf(e,function(i,r){var i=e[r];if("dataIndex"!==r&&"dataIndexInside"!==r){var o=r.match(/^(\w+)(Index|Id|Name)$/)||[],s=o[1],l=(o[2]||"").toLowerCase();if(!(!s||!l||null==i||"index"===l&&"none"===i||n&&n.includeMainTypes&&h(n.includeMainTypes,s)<0)){var u={mainType:s};("index"!==l||"all"!==i)&&(u[l]=i);var c=t.queryComponents(u);a[s+"Models"]=c,a[s+"Model"]=c[0]}}else a[r]=i}),a}function zn(t,e){return t&&t.hasOwnProperty(e)}function Bn(t,e,n){t.setAttribute?t.setAttribute(e,n):t[e]=n}function En(t,e){return t.getAttribute?t.getAttribute(e):t[e]}function Rn(t){return"auto"===t?$c.domSupported?"html":"richText":t||"html"}function Nn(t){var e={main:"",sub:""};return t&&(t=t.split(tp),e.main=t[0]||"",e.sub=t[1]||""),e}function Fn(t){L(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}function Vn(t){t.$constructor=t,t.extend=function(t){var e=this,n=function(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments)};return o(n.prototype,t),n.extend=this.extend,n.superCall=Hn,n.superApply=Gn,u(n,this),n.superClass=e,n}}function Wn(t){var e=["__\0is_clz",np++,Math.random().toFixed(3)].join("_");t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e])}}function Hn(t,e){var n=k(arguments,2);return this.superClass.prototype[e].apply(t,n)}function Gn(t,e,n){return this.superClass.prototype[e].apply(t,n)}function Zn(t,e){function n(t){var e=i[t.main];return e&&e[ep]||(e=i[t.main]={},e[ep]=!0),e}e=e||{};var i={};if(t.registerClass=function(t,e){return e&&(Fn(e),(e=Nn(e)).sub?e.sub!==ep&&(n(e)[e.sub]=t):i[e.main]=t),t},t.getClass=function(t,e,n){var r=i[t];if(r&&r[ep]&&(r=e?r[e]:null),n&&!r)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.");return r},t.getClassesByMainType=function(t){t=Nn(t);var e=[],n=i[t.main];return n&&n[ep]?f(n,function(t,n){n!==ep&&e.push(t)}):e.push(n),e},t.hasClass=function(t){return t=Nn(t),!!i[t.main]},t.getAllClassMainTypes=function(){var t=[];return f(i,function(e,n){t.push(n)}),t},t.hasSubTypes=function(t){t=Nn(t);var e=i[t.main];return e&&e[ep]},t.parseClassType=Nn,e.registerWhenExtend){var r=t.extend;r&&(t.extend=function(e){var n=r.call(this,e);return t.registerClass(n,e.type)})}return t}function Xn(t){return t>-up&&up>t}function Yn(t){return t>up||-up>t}function qn(t,e,n,i,r){var a=1-r;return a*a*(a*t+3*r*e)+r*r*(r*i+3*a*n)}function jn(t,e,n,i,r){var a=1-r;return 3*(((e-t)*a+2*(n-e)*r)*a+(i-n)*r*r)}function Un(t,e,n,i,r,a){var o=i+3*(e-n)-t,s=3*(n-2*e+t),l=3*(e-t),h=t-r,u=s*s-3*o*l,c=s*l-9*o*h,d=l*l-3*s*h,f=0;if(Xn(u)&&Xn(c))Xn(s)?a[0]=0:(S=-l/s)>=0&&1>=S&&(a[f++]=S);else{var p=c*c-4*u*d;if(Xn(p)){var g=c/u,v=-g/2;(S=-s/o+g)>=0&&1>=S&&(a[f++]=S),v>=0&&1>=v&&(a[f++]=v)}else if(p>0){var m=hp(p),y=u*s+1.5*o*(-c+m),x=u*s+1.5*o*(-c-m);(S=(-s-((y=0>y?-lp(-y,fp):lp(y,fp))+(x=0>x?-lp(-x,fp):lp(x,fp))))/(3*o))>=0&&1>=S&&(a[f++]=S)}else{var _=(2*u*s-3*o*c)/(2*hp(u*u*u)),w=Math.acos(_)/3,b=hp(u),M=Math.cos(w),S=(-s-2*b*M)/(3*o),v=(-s+b*(M+dp*Math.sin(w)))/(3*o),I=(-s+b*(M-dp*Math.sin(w)))/(3*o);S>=0&&1>=S&&(a[f++]=S),v>=0&&1>=v&&(a[f++]=v),I>=0&&1>=I&&(a[f++]=I)}}return f}function $n(t,e,n,i,r){var a=6*n-12*e+6*t,o=9*e+3*i-3*t-9*n,s=3*e-3*t,l=0;if(Xn(o))Yn(a)&&(c=-s/a)>=0&&1>=c&&(r[l++]=c);else{var h=a*a-4*o*s;if(Xn(h))r[0]=-a/(2*o);else if(h>0){var u=hp(h),c=(-a+u)/(2*o),d=(-a-u)/(2*o);c>=0&&1>=c&&(r[l++]=c),d>=0&&1>=d&&(r[l++]=d)}}return l}function Kn(t,e,n,i,r,a){var o=(e-t)*r+t,s=(n-e)*r+e,l=(i-n)*r+n,h=(s-o)*r+o,u=(l-s)*r+s,c=(u-h)*r+h;a[0]=t,a[1]=o,a[2]=h,a[3]=c,a[4]=c,a[5]=u,a[6]=l,a[7]=i}function Qn(t,e,n,i,r,a,o,s,l,h,u){var c,d,f,p,g,v=.005,m=1/0;pp[0]=l,pp[1]=h;for(var y=0;1>y;y+=.05)gp[0]=qn(t,n,r,o,y),gp[1]=qn(e,i,a,s,y),m>(p=gd(pp,gp))&&(c=y,m=p);m=1/0;for(var x=0;32>x&&!(cp>v);x++)d=c-v,f=c+v,gp[0]=qn(t,n,r,o,d),gp[1]=qn(e,i,a,s,d),p=gd(gp,pp),d>=0&&m>p?(c=d,m=p):(vp[0]=qn(t,n,r,o,f),vp[1]=qn(e,i,a,s,f),g=gd(vp,pp),1>=f&&m>g?(c=f,m=g):v*=.5);return u&&(u[0]=qn(t,n,r,o,c),u[1]=qn(e,i,a,s,c)),hp(m)}function Jn(t,e,n,i){var r=1-i;return r*(r*t+2*i*e)+i*i*n}function ti(t,e,n,i){return 2*((1-i)*(e-t)+i*(n-e))}function ei(t,e,n,i,r){var a=t-2*e+n,o=2*(e-t),s=t-i,l=0;if(Xn(a))Yn(o)&&(c=-s/o)>=0&&1>=c&&(r[l++]=c);else{var h=o*o-4*a*s;if(Xn(h))(c=-o/(2*a))>=0&&1>=c&&(r[l++]=c);else if(h>0){var u=hp(h),c=(-o+u)/(2*a),d=(-o-u)/(2*a);c>=0&&1>=c&&(r[l++]=c),d>=0&&1>=d&&(r[l++]=d)}}return l}function ni(t,e,n){var i=t+n-2*e;return 0===i?.5:(t-e)/i}function ii(t,e,n,i,r){var a=(e-t)*i+t,o=(n-e)*i+e,s=(o-a)*i+a;r[0]=t,r[1]=a,r[2]=s,r[3]=s,r[4]=o,r[5]=n}function ri(t,e,n,i,r,a,o,s,l){var h,u=.005,c=1/0;pp[0]=o,pp[1]=s;for(var d=0;1>d;d+=.05)gp[0]=Jn(t,n,r,d),gp[1]=Jn(e,i,a,d),c>(v=gd(pp,gp))&&(h=d,c=v);c=1/0;for(var f=0;32>f&&!(cp>u);f++){var p=h-u,g=h+u;gp[0]=Jn(t,n,r,p),gp[1]=Jn(e,i,a,p);var v=gd(gp,pp);if(p>=0&&c>v)h=p,c=v;else{vp[0]=Jn(t,n,r,g),vp[1]=Jn(e,i,a,g);var m=gd(vp,pp);1>=g&&c>m?(h=g,c=m):u*=.5}}return l&&(l[0]=Jn(t,n,r,h),l[1]=Jn(e,i,a,h)),hp(c)}function ai(t,e,n){if(0!==t.length){var i,r=t[0],a=r[0],o=r[0],s=r[1],l=r[1];for(i=1;i<t.length;i++)r=t[i],a=mp(a,r[0]),o=yp(o,r[0]),s=mp(s,r[1]),l=yp(l,r[1]);e[0]=a,e[1]=s,n[0]=o,n[1]=l}}function oi(t,e,n,i,r,a){r[0]=mp(t,n),r[1]=mp(e,i),a[0]=yp(t,n),a[1]=yp(e,i)}function si(t,e,n,i,r,a,o,s,l,h){var u,c=$n,d=qn,f=c(t,n,r,o,Ip);for(l[0]=1/0,l[1]=1/0,h[0]=-1/0,h[1]=-1/0,u=0;f>u;u++){var p=d(t,n,r,o,Ip[u]);l[0]=mp(p,l[0]),h[0]=yp(p,h[0])}for(f=c(e,i,a,s,Tp),u=0;f>u;u++){var g=d(e,i,a,s,Tp[u]);l[1]=mp(g,l[1]),h[1]=yp(g,h[1])}l[0]=mp(t,l[0]),h[0]=yp(t,h[0]),l[0]=mp(o,l[0]),h[0]=yp(o,h[0]),l[1]=mp(e,l[1]),h[1]=yp(e,h[1]),l[1]=mp(s,l[1]),h[1]=yp(s,h[1])}function li(t,e,n,i,r,a,o,s){var l=ni,h=Jn,u=yp(mp(l(t,n,r),1),0),c=yp(mp(l(e,i,a),1),0),d=h(t,n,r,u),f=h(e,i,a,c);o[0]=mp(t,r,d),o[1]=mp(e,a,f),s[0]=yp(t,r,d),s[1]=yp(e,a,f)}function hi(t,e,n,i,r,a,o,s,l){var h=Q,u=J,c=Math.abs(r-a);if(1e-4>c%wp&&c>1e-4)return s[0]=t-n,s[1]=e-i,l[0]=t+n,void(l[1]=e+i);if(bp[0]=_p(r)*n+t,bp[1]=xp(r)*i+e,Mp[0]=_p(a)*n+t,Mp[1]=xp(a)*i+e,h(s,bp,Mp),u(l,bp,Mp),0>(r%=wp)&&(r+=wp),0>(a%=wp)&&(a+=wp),r>a&&!o?a+=wp:a>r&&o&&(r+=wp),o){var d=a;a=r,r=d}for(var f=0;a>f;f+=Math.PI/2)f>r&&(Sp[0]=_p(f)*n+t,Sp[1]=xp(f)*i+e,h(s,Sp,s),u(l,Sp,l))}function ui(t,e,n,i,r,a,o){if(0===r)return!1;var s=r,l=0,h=t;if(o>e+s&&o>i+s||e-s>o&&i-s>o||a>t+s&&a>n+s||t-s>a&&n-s>a)return!1;if(t===n)return Math.abs(a-t)<=s/2;var u=(l=(e-i)/(t-n))*a-o+(h=(t*i-n*e)/(t-n));return s/2*s/2>=u*u/(l*l+1)}function ci(t,e,n,i,r,a,o,s,l,h,u){if(0===l)return!1;var c=l;return!(u>e+c&&u>i+c&&u>a+c&&u>s+c||e-c>u&&i-c>u&&a-c>u&&s-c>u||h>t+c&&h>n+c&&h>r+c&&h>o+c||t-c>h&&n-c>h&&r-c>h&&o-c>h)&&c/2>=Qn(t,e,n,i,r,a,o,s,h,u,null)}function di(t,e,n,i,r,a,o,s,l){if(0===o)return!1;var h=o;return!(l>e+h&&l>i+h&&l>a+h||e-h>l&&i-h>l&&a-h>l||s>t+h&&s>n+h&&s>r+h||t-h>s&&n-h>s&&r-h>s)&&h/2>=ri(t,e,n,i,r,a,s,l,null)}function fi(t){return 0>(t%=Vp)&&(t+=Vp),t}function pi(t,e,n,i,r,a,o,s,l){if(0===o)return!1;var h=o;s-=t,l-=e;var u=Math.sqrt(s*s+l*l);if(u-h>n||n>u+h)return!1;if(Math.abs(i-r)%Wp<1e-4)return!0;if(a){var c=i;i=fi(r),r=fi(c)}else i=fi(i),r=fi(r);i>r&&(r+=Wp);var d=Math.atan2(l,s);return 0>d&&(d+=Wp),d>=i&&r>=d||d+Wp>=i&&r>=d+Wp}function gi(t,e,n,i,r,a){if(a>e&&a>i||e>a&&i>a)return 0;if(i===e)return 0;var o=e>i?1:-1,s=(a-e)/(i-e);(1===s||0===s)&&(o=e>i?.5:-.5);var l=s*(n-t)+t;return l===r?1/0:l>r?o:0}function vi(t,e){return Math.abs(t-e)<Zp}function mi(){var t=Yp[0];Yp[0]=Yp[1],Yp[1]=t}function yi(t,e,n,i,r,a,o,s,l,h){if(h>e&&h>i&&h>a&&h>s||e>h&&i>h&&a>h&&s>h)return 0;var u=Un(e,i,a,s,h,Xp);if(0===u)return 0;for(var c,d,f=0,p=-1,g=0;u>g;g++){var v=Xp[g],m=0===v||1===v?.5:1;l>qn(t,n,r,o,v)||(0>p&&(p=$n(e,i,a,s,Yp),Yp[1]<Yp[0]&&p>1&&mi(),c=qn(e,i,a,s,Yp[0]),p>1&&(d=qn(e,i,a,s,Yp[1]))),f+=2==p?v<Yp[0]?e>c?m:-m:v<Yp[1]?c>d?m:-m:d>s?m:-m:v<Yp[0]?e>c?m:-m:c>s?m:-m)}return f}function xi(t,e,n,i,r,a,o,s){if(s>e&&s>i&&s>a||e>s&&i>s&&a>s)return 0;var l=ei(e,i,a,s,Xp);if(0===l)return 0;var h=ni(e,i,a);if(h>=0&&1>=h){for(var u=0,c=Jn(e,i,a,h),d=0;l>d;d++){f=0===Xp[d]||1===Xp[d]?.5:1;o>(p=Jn(t,n,r,Xp[d]))||(u+=Xp[d]<h?e>c?f:-f:c>a?f:-f)}return u}var f=0===Xp[0]||1===Xp[0]?.5:1,p=Jn(t,n,r,Xp[0]);return o>p?0:e>a?f:-f}function _i(t,e,n,i,r,a,o,s){if((s-=e)>n||-n>s)return 0;h=Math.sqrt(n*n-s*s);Xp[0]=-h,Xp[1]=h;var l=Math.abs(i-r);if(1e-4>l)return 0;if(1e-4>l%Gp){i=0,r=Gp;p=a?1:-1;return o>=Xp[0]+t&&o<=Xp[1]+t?p:0}if(a){var h=i;i=fi(r),r=fi(h)}else i=fi(i),r=fi(r);i>r&&(r+=Gp);for(var u=0,c=0;2>c;c++){var d=Xp[c];if(d+t>o){var f=Math.atan2(s,d),p=a?1:-1;0>f&&(f=Gp+f),(f>=i&&r>=f||f+Gp>=i&&r>=f+Gp)&&(f>Math.PI/2&&f<1.5*Math.PI&&(p=-p),u+=p)}}return u}function wi(t,e,n,i,r){for(var a=0,o=0,s=0,l=0,h=0,u=0;u<t.length;){var c=t[u++];switch(c===Hp.M&&u>1&&(n||(a+=gi(o,s,l,h,i,r))),1==u&&(o=t[u],s=t[u+1],l=o,h=s),c){case Hp.M:o=l=t[u++],s=h=t[u++];break;case Hp.L:if(n){if(ui(o,s,t[u],t[u+1],e,i,r))return!0}else a+=gi(o,s,t[u],t[u+1],i,r)||0;o=t[u++],s=t[u++];break;case Hp.C:if(n){if(ci(o,s,t[u++],t[u++],t[u++],t[u++],t[u],t[u+1],e,i,r))return!0}else a+=yi(o,s,t[u++],t[u++],t[u++],t[u++],t[u],t[u+1],i,r)||0;o=t[u++],s=t[u++];break;case Hp.Q:if(n){if(di(o,s,t[u++],t[u++],t[u],t[u+1],e,i,r))return!0}else a+=xi(o,s,t[u++],t[u++],t[u],t[u+1],i,r)||0;o=t[u++],s=t[u++];break;case Hp.A:var d=t[u++],f=t[u++],p=t[u++],g=t[u++],v=t[u++],m=t[u++],y=(t[u++],1-t[u++]),x=Math.cos(v)*p+d,_=Math.sin(v)*g+f;u>1?a+=gi(o,s,x,_,i,r):(l=x,h=_);var w=(i-d)*g/p+d;if(n){if(pi(d,f,g,v,v+m,y,e,w,r))return!0}else a+=_i(d,f,g,v,v+m,y,w,r);o=Math.cos(v+m)*p+d,s=Math.sin(v+m)*g+f;break;case Hp.R:l=o=t[u++],h=s=t[u++];var x=l+t[u++],_=h+t[u++];if(n){if(ui(l,h,x,h,e,i,r)||ui(x,h,x,_,e,i,r)||ui(x,_,l,_,e,i,r)||ui(l,_,l,h,e,i,r))return!0}else a+=gi(x,h,x,_,i,r),a+=gi(l,_,l,h,i,r);break;case Hp.Z:if(n){if(ui(o,s,l,h,e,i,r))return!0}else a+=gi(o,s,l,h,i,r);o=l,s=h}}return n||vi(s,h)||(a+=gi(o,s,l,h,i,r)||0),0!==a}function bi(t,e,n){return wi(t,0,!1,e,n)}function Mi(t,e,n,i){return wi(t,e,!0,n,i)}function Si(t){an.call(this,t),this.path=null}function Ii(t,e,n,i,r,a,o,s,l,h,u){var c=l*(rg/180),d=ig(c)*(t-n)/2+ng(c)*(e-i)/2,f=-1*ng(c)*(t-n)/2+ig(c)*(e-i)/2,p=d*d/(o*o)+f*f/(s*s);p>1&&(o*=eg(p),s*=eg(p));var g=(r===a?-1:1)*eg((o*o*s*s-o*o*f*f-s*s*d*d)/(o*o*f*f+s*s*d*d))||0,v=g*o*f/s,m=g*-s*d/o,y=(t+n)/2+ig(c)*v-ng(c)*m,x=(e+i)/2+ng(c)*v+ig(c)*m,_=sg([1,0],[(d-v)/o,(f-m)/s]),w=[(d-v)/o,(f-m)/s],b=[(-1*d-v)/o,(-1*f-m)/s],M=sg(w,b);og(w,b)<=-1&&(M=rg),og(w,b)>=1&&(M=0),0===a&&M>0&&(M-=2*rg),1===a&&0>M&&(M+=2*rg),u.addData(h,y,x,o,s,_,M,c,a)}function Ti(t){if(!t)return new Fp;for(var e,n=0,i=0,r=n,a=i,o=new Fp,s=Fp.CMD,l=t.match(lg),h=0;h<l.length;h++){for(var u,c=l[h],d=c.charAt(0),f=c.match(hg)||[],p=f.length,g=0;p>g;g++)f[g]=parseFloat(f[g]);for(var v=0;p>v;){var m,y,x,_,w,b,M,S=n,I=i;switch(d){case"l":n+=f[v++],i+=f[v++],u=s.L,o.addData(u,n,i);break;case"L":n=f[v++],i=f[v++],u=s.L,o.addData(u,n,i);break;case"m":n+=f[v++],i+=f[v++],u=s.M,o.addData(u,n,i),r=n,a=i,d="l";break;case"M":n=f[v++],i=f[v++],u=s.M,o.addData(u,n,i),r=n,a=i,d="L";break;case"h":n+=f[v++],u=s.L,o.addData(u,n,i);break;case"H":n=f[v++],u=s.L,o.addData(u,n,i);break;case"v":i+=f[v++],u=s.L,o.addData(u,n,i);break;case"V":i=f[v++],u=s.L,o.addData(u,n,i);break;case"C":u=s.C,o.addData(u,f[v++],f[v++],f[v++],f[v++],f[v++],f[v++]),n=f[v-2],i=f[v-1];break;case"c":u=s.C,o.addData(u,f[v++]+n,f[v++]+i,f[v++]+n,f[v++]+i,f[v++]+n,f[v++]+i),n+=f[v-2],i+=f[v-1];break;case"S":m=n,y=i;var T=o.len(),C=o.data;e===s.C&&(m+=n-C[T-4],y+=i-C[T-3]),u=s.C,S=f[v++],I=f[v++],n=f[v++],i=f[v++],o.addData(u,m,y,S,I,n,i);break;case"s":m=n,y=i;var T=o.len(),C=o.data;e===s.C&&(m+=n-C[T-4],y+=i-C[T-3]),u=s.C,S=n+f[v++],I=i+f[v++],n+=f[v++],i+=f[v++],o.addData(u,m,y,S,I,n,i);break;case"Q":S=f[v++],I=f[v++],n=f[v++],i=f[v++],u=s.Q,o.addData(u,S,I,n,i);break;case"q":S=f[v++]+n,I=f[v++]+i,n+=f[v++],i+=f[v++],u=s.Q,o.addData(u,S,I,n,i);break;case"T":m=n,y=i;var T=o.len(),C=o.data;e===s.Q&&(m+=n-C[T-4],y+=i-C[T-3]),n=f[v++],i=f[v++],u=s.Q,o.addData(u,m,y,n,i);break;case"t":m=n,y=i;var T=o.len(),C=o.data;e===s.Q&&(m+=n-C[T-4],y+=i-C[T-3]),n+=f[v++],i+=f[v++],u=s.Q,o.addData(u,m,y,n,i);break;case"A":x=f[v++],_=f[v++],w=f[v++],b=f[v++],M=f[v++],Ii(S=n,I=i,n=f[v++],i=f[v++],b,M,x,_,w,u=s.A,o);break;case"a":x=f[v++],_=f[v++],w=f[v++],b=f[v++],M=f[v++],Ii(S=n,I=i,n+=f[v++],i+=f[v++],b,M,x,_,w,u=s.A,o)}}("z"===d||"Z"===d)&&(u=s.Z,o.addData(u),n=r,i=a),e=u}return o.toStatic(),o}function Ci(t,e){var n=Ti(t);return e=e||{},e.buildPath=function(t){if(t.setData)t.setData(n.data),(e=t.getContext())&&t.rebuildPath(e);else{var e=t;n.rebuildPath(e)}},e.applyTransform=function(t){tg(n,t),this.dirty(!0)},e}function Ai(t,e){return new Si(Ci(t,e))}function Di(t,e){return Si.extend(Ci(t,e))}function ki(t,e,n,i,r,a,o){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*o+(-3*(e-n)-2*s-l)*a+s*r+e}function Pi(t,e,n){var i=e.points,r=e.smooth;if(i&&i.length>=2){if(r&&"spline"!==r){var a=mg(i,r,n,e.smoothConstraint);t.moveTo(i[0][0],i[0][1]);for(var o=i.length,s=0;(n?o:o-1)>s;s++){var l=a[2*s],h=a[2*s+1],u=i[(s+1)%o];t.bezierCurveTo(l[0],l[1],h[0],h[1],u[0],u[1])}}else{"spline"===r&&(i=vg(i,n)),t.moveTo(i[0][0],i[0][1]);for(var s=1,c=i.length;c>s;s++)t.lineTo(i[s][0],i[s][1])}n&&t.closePath()}}function Li(t,e,n){var i=t.cpx2,r=t.cpy2;return null===i||null===r?[(n?jn:qn)(t.x1,t.cpx1,t.cpx2,t.x2,e),(n?jn:qn)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(n?ti:Jn)(t.x1,t.cpx1,t.x2,e),(n?ti:Jn)(t.y1,t.cpy1,t.y2,e)]}function Oi(t){an.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0}function zi(t){return Si.extend(t)}function Bi(t,e,n,i){var r=Ai(t,e);return n&&("center"===i&&(n=Ri(n,r.getBoundingRect())),Ni(r,n)),r}function Ei(t,e,n){var i=new on({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===n){var r={width:t.width,height:t.height};i.setStyle(Ri(e,r))}}});return i}function Ri(t,e){var n,i=e.width/e.height,r=t.height*i;return r<=t.width?n=t.height:(r=t.width,n=r/i),{x:t.x+t.width/2-r/2,y:t.y+t.height/2-n/2,width:r,height:n}}function Ni(t,e){if(t.applyTransform){var n=t.getBoundingRect().calculateTransform(e);t.applyTransform(n)}}function Fi(t){var e=t.shape,n=t.style.lineWidth;return kg(2*e.x1)===kg(2*e.x2)&&(e.x1=e.x2=Wi(e.x1,n,!0)),kg(2*e.y1)===kg(2*e.y2)&&(e.y1=e.y2=Wi(e.y1,n,!0)),t}function Vi(t){var e=t.shape,n=t.style.lineWidth,i=e.x,r=e.y,a=e.width,o=e.height;return e.x=Wi(e.x,n,!0),e.y=Wi(e.y,n,!0),e.width=Math.max(Wi(i+a,n,!1)-e.x,0===a?0:1),e.height=Math.max(Wi(r+o,n,!1)-e.y,0===o?0:1),t}function Wi(t,e,n){var i=kg(2*t);return(i+kg(e))%2==0?i/2:(i+(n?1:-1))/2}function Hi(t){return null!=t&&"none"!==t}function Gi(t){if("string"!=typeof t)return t;var e=zg.get(t);return e||(e=Rt(t,-.1),1e4>Bg&&(zg.set(t,e),Bg++)),e}function Zi(t){if(t.__hoverStlDirty){t.__hoverStlDirty=!1;var e=t.__hoverStl;if(!e)return void(t.__normalStl=null);var n=t.__normalStl={},i=t.style;for(var r in e)null!=e[r]&&(n[r]=i[r]);n.fill=i.fill,n.stroke=i.stroke}}function Xi(t){var e=t.__hoverStl;if(e&&!t.__highlighted){var n=t.useHoverLayer;t.__highlighted=n?"layer":"plain";var i=t.__zr;if(i||!n){var r=t,a=t.style;n&&(r=i.addHover(t),a=r.style),cr(a),n||Zi(r),a.extendFrom(e),Yi(a,e,"fill"),Yi(a,e,"stroke"),ur(a),n||(t.dirty(!1),t.z2+=1)}}}function Yi(t,e,n){!Hi(e[n])&&Hi(t[n])&&(t[n]=Gi(t[n]))}function qi(t){t.__highlighted&&(ji(t),t.__highlighted=!1)}function ji(t){var e=t.__highlighted;if("layer"===e)t.__zr&&t.__zr.removeHover(t);else if(e){var n=t.style,i=t.__normalStl;i&&(cr(n),t.setStyle(i),ur(n),t.z2-=1)}}function Ui(t,e){t.isGroup?t.traverse(function(t){!t.isGroup&&e(t)}):e(t)}function $i(t,e){e=t.__hoverStl=!1!==e&&(e||{}),t.__hoverStlDirty=!0,t.__highlighted&&(qi(t),Xi(t))}function Ki(t){return t&&t.__isEmphasisEntered}function Qi(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasisEntered&&Ui(this,Xi)}function Ji(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasisEntered&&Ui(this,qi)}function tr(){this.__isEmphasisEntered=!0,Ui(this,Xi)}function er(){this.__isEmphasisEntered=!1,Ui(this,qi)}function nr(t,e,n){t.isGroup?t.traverse(function(t){!t.isGroup&&$i(t,t.hoverStyle||e)}):$i(t,t.hoverStyle||e),ir(t,n)}function ir(t,e){var n=!1===e;if(t.__hoverSilentOnTouch=null!=e&&e.hoverSilentOnTouch,!n||t.__hoverStyleTrigger){var i=n?"off":"on";t[i]("mouseover",Qi)[i]("mouseout",Ji),t[i]("emphasis",tr)[i]("normal",er),t.__hoverStyleTrigger=!n}}function rr(t,e,n,i,r,a,o){var s,l=(r=r||Og).labelFetcher,h=r.labelDataIndex,u=r.labelDimIndex,c=n.getShallow("show"),d=i.getShallow("show");(c||d)&&(l&&(s=l.getFormattedLabel(h,"normal",null,u)),null==s&&(s=_(r.defaultText)?r.defaultText(h,r):r.defaultText));var f=c?s:null,p=d?A(l?l.getFormattedLabel(h,"emphasis",null,u):null,s):null;(null!=f||null!=p)&&(ar(t,n,a,r),ar(e,i,o,r,!0)),t.text=f,e.text=p}function ar(t,e,n,i,r){return or(t,e,i,r),n&&o(t,n),t}function or(t,e,n,i){if((n=n||Og).isRectText){var r=e.getShallow("position")||(i?null:"inside");"outside"===r&&(r="top"),t.textPosition=r,t.textOffset=e.getShallow("offset");var a=e.getShallow("rotate");null!=a&&(a*=Math.PI/180),t.textRotation=a,t.textDistance=A(e.getShallow("distance"),i?null:5)}var o,s=e.ecModel,l=s&&s.option.textStyle,h=sr(e);if(h){o={};for(var u in h)if(h.hasOwnProperty(u)){var c=e.getModel(["rich",u]);lr(o[u]={},c,l,n,i)}}return t.rich=o,lr(t,e,l,n,i,!0),n.forceRich&&!n.textStyle&&(n.textStyle={}),t}function sr(t){for(var e;t&&t!==t.ecModel;){var n=(t.option||Og).rich;if(n){e=e||{};for(var i in n)n.hasOwnProperty(i)&&(e[i]=1)}t=t.parentModel}return e}function lr(t,e,n,i,r,a){n=!r&&n||Og,t.textFill=hr(e.getShallow("color"),i)||n.color,t.textStroke=hr(e.getShallow("textBorderColor"),i)||n.textBorderColor,t.textStrokeWidth=A(e.getShallow("textBorderWidth"),n.textBorderWidth),t.insideRawTextPosition=t.textPosition,r||(a&&(t.insideRollbackOpt=i,ur(t)),null==t.textFill&&(t.textFill=i.autoColor)),t.fontStyle=e.getShallow("fontStyle")||n.fontStyle,t.fontWeight=e.getShallow("fontWeight")||n.fontWeight,t.fontSize=e.getShallow("fontSize")||n.fontSize,t.fontFamily=e.getShallow("fontFamily")||n.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),a&&i.disableBox||(t.textBackgroundColor=hr(e.getShallow("backgroundColor"),i),t.textPadding=e.getShallow("padding"),t.textBorderColor=hr(e.getShallow("borderColor"),i),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||n.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||n.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||n.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||n.textShadowOffsetY}function hr(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null}function ur(t){var e=t.insideRollbackOpt;if(e&&null==t.textFill){var n,i=e.useInsideStyle,r=t.insideRawTextPosition,a=e.autoColor;!1!==i&&(!0===i||e.isRectText&&r&&"string"==typeof r&&r.indexOf("inside")>=0)?(n={textFill:null,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth},t.textFill="#fff",null==t.textStroke&&(t.textStroke=a,null==t.textStrokeWidth&&(t.textStrokeWidth=2))):null!=a&&(n={textFill:null},t.textFill=a),n&&(t.insideRollback=n)}}function cr(t){var e=t.insideRollback;e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth,t.insideRollback=null)}function dr(t,e){var n=e||e.getModel("textStyle");return O([t.fontStyle||n&&n.getShallow("fontStyle")||"",t.fontWeight||n&&n.getShallow("fontWeight")||"",(t.fontSize||n&&n.getShallow("fontSize")||12)+"px",t.fontFamily||n&&n.getShallow("fontFamily")||"sans-serif"].join(" "))}function fr(t,e,n,i,r,a){if("function"==typeof r&&(a=r,r=null),i&&i.isAnimationEnabled()){var o=t?"Update":"",s=i.getShallow("animationDuration"+o),l=i.getShallow("animationEasing"+o),h=i.getShallow("animationDelay"+o);"function"==typeof h&&(h=h(r,i.getAnimationDelayParams?i.getAnimationDelayParams(e,r):null)),"function"==typeof s&&(s=s(r)),s>0?e.animateTo(n,s,h||0,l,a,!!a):(e.stopAnimation(),e.attr(n),a&&a())}else e.stopAnimation(),e.attr(n),a&&a()}function pr(t,e,n,i,r){fr(!0,t,e,n,i,r)}function gr(t,e,n,i,r){fr(!1,t,e,n,i,r)}function vr(t,e){for(var n=gt([]);t&&t!==e;)mt(n,t.getLocalTransform(),n),t=t.parent;return n}function mr(t,e,n){return e&&!d(e)&&(e=Dd.getLocalTransform(e)),n&&(e=wt([],e)),K([],t,e)}function yr(t,e,n){var i=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),a=["left"===t?-i:"right"===t?i:0,"top"===t?-r:"bottom"===t?r:0];return a=mr(a,e,n),Math.abs(a[0])>Math.abs(a[1])?a[0]>0?"right":"left":a[1]>0?"bottom":"top"}function xr(t,e,n){function i(t){var e={position:W(t.position),rotation:t.rotation};return t.shape&&(e.shape=o({},t.shape)),e}if(t&&e){var r=function(t){var e={};return t.traverse(function(t){!t.isGroup&&t.anid&&(e[t.anid]=t)}),e}(t);e.traverse(function(t){if(!t.isGroup&&t.anid){var e=r[t.anid];if(e){var a=i(t);t.attr(i(e)),pr(t,a,n,t.dataIndex)}}})}}function _r(t,e,n){var i=(e=o({rectHover:!0},e)).style={strokeNoScale:!0};return n=n||{x:-1,y:-1,width:2,height:2},t?0===t.indexOf("image://")?(i.image=t.slice(8),s(i,n),new on(e)):Bi(t.replace("path://",""),e,n,"center"):void 0}function wr(t,e,n){this.parentModel=e,this.ecModel=n,this.option=t}function br(e,n,i){for(var r=0;r<n.length&&(!n[r]||null!=(e=e&&"object"==(void 0===e?"undefined":t(e))?e[n[r]]:null));r++);return null==e&&i&&(e=i.get(n)),e}function Mr(t,e){var n=Hg(t).getParent;return n?n.call(t,e):t.parentModel}function Sr(t){return[t||"",Gg++,Math.random().toFixed(5)].join("_")}function Ir(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}function Tr(t,e,n,i){var r=e[1]-e[0],a=n[1]-n[0];if(0===r)return 0===a?n[0]:(n[0]+n[1])/2;if(i)if(r>0){if(t<=e[0])return n[0];if(t>=e[1])return n[1]}else{if(t>=e[0])return n[0];if(t<=e[1])return n[1]}else{if(t===e[0])return n[0];if(t===e[1])return n[1]}return(t-e[0])/r*a+n[0]}function Cr(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%"}return"string"==typeof t?Ir(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t}function Ar(t,e,n){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),n?t:+t}function Dr(t){return t.sort(function(t,e){return t-e}),t}function kr(t){var e=t.toString(),n=e.indexOf("e");if(n>0){var i=+e.slice(n+1);return 0>i?-i:0}var r=e.indexOf(".");return 0>r?0:e.length-1-r}function Pr(t,e){var n=Math.log,i=Math.LN10,r=Math.floor(n(t[1]-t[0])/i),a=Math.round(n(Math.abs(e[1]-e[0]))/i),o=Math.min(Math.max(-r+a,0),20);return isFinite(o)?o:20}function Lr(t,e,n){if(!t[e])return 0;var i=g(t,function(t,e){return t+(isNaN(e)?0:e)},0);if(0===i)return 0;for(var r=Math.pow(10,n),a=p(t,function(t){return(isNaN(t)?0:t)/i*r*100}),o=100*r,s=p(a,function(t){return Math.floor(t)}),l=g(s,function(t,e){return t+e},0),h=p(a,function(t,e){return t-s[e]});o>l;){for(var u=Number.NEGATIVE_INFINITY,c=null,d=0,f=h.length;f>d;++d)h[d]>u&&(u=h[d],c=d);++s[c],h[c]=0,++l}return s[e]/r}function Or(t){var e=2*Math.PI;return(t%e+e)%e}function zr(t){return t>-Zg&&Zg>t}function Br(t){if(t instanceof Date)return t;if("string"==typeof t){var e=Xg.exec(t);if(!e)return new Date(NaN);if(e[8]){var n=+e[4]||0;return"Z"!==e[8].toUpperCase()&&(n-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,n,+(e[5]||0),+e[6]||0,+e[7]||0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0)}return new Date(null==t?NaN:Math.round(t))}function Er(t){return Math.pow(10,Rr(t))}function Rr(t){return Math.floor(Math.log(t)/Math.LN10)}function Nr(t,e){var n,i=Rr(t),r=Math.pow(10,i),a=t/r;return n=e?1.5>a?1:2.5>a?2:4>a?3:7>a?5:10:1>a?1:2>a?2:3>a?3:5>a?5:10,t=n*r,i>=-20?+t.toFixed(0>i?-i:0):t}function Fr(t){return isNaN(t)?"-":(t=(t+"").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:"")}function Vr(t,e){return t=(t||"").toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()}),e&&t&&(t=t.charAt(0).toUpperCase()+t.slice(1)),t}function Wr(t){return null==t?"":(t+"").replace(jg,function(t,e){return Ug[e]})}function Hr(t,e,n){x(e)||(e=[e]);var i=e.length;if(!i)return"";for(var r=e[0].$vars||[],a=0;a<r.length;a++){var o=$g[a];t=t.replace(Kg(o),Kg(o,0))}for(var s=0;i>s;s++)for(var l=0;l<r.length;l++){var h=e[s][r[l]];t=t.replace(Kg($g[l],s),n?Wr(h):h)}return t}function Gr(t,e){var n=(t=w(t)?{color:t,extraCssText:e}:t||{}).color,i=t.type,e=t.extraCssText,r=t.renderMode||"html",a=t.markerId||"X";return n?"html"===r?"subItem"===i?'<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:'+Wr(n)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+Wr(n)+";"+(e||"")+'"></span>':{renderMode:r,content:"{marker"+a+"|}  ",style:{color:n}}:""}function Zr(t,e){return t+="","0000".substr(0,e-t.length)+t}function Xr(t,e,n){("week"===t||"month"===t||"quarter"===t||"half-year"===t||"year"===t)&&(t="MM-dd\nyyyy");var i=Br(e),r=n?"UTC":"",a=i["get"+r+"FullYear"](),o=i["get"+r+"Month"]()+1,s=i["get"+r+"Date"](),l=i["get"+r+"Hours"](),h=i["get"+r+"Minutes"](),u=i["get"+r+"Seconds"](),c=i["get"+r+"Milliseconds"]();return t=t.replace("MM",Zr(o,2)).replace("M",o).replace("yyyy",a).replace("yy",a%100).replace("dd",Zr(s,2)).replace("d",s).replace("hh",Zr(l,2)).replace("h",l).replace("mm",Zr(h,2)).replace("m",h).replace("ss",Zr(u,2)).replace("s",u).replace("SSS",Zr(c,3))}function Yr(t){return t?t.charAt(0).toUpperCase()+t.substr(1):t}function qr(t,e,n,i,r){var a=0,o=0;null==i&&(i=1/0),null==r&&(r=1/0);var s=0;e.eachChild(function(l,h){var u,c,d=l.position,f=l.getBoundingRect(),p=e.childAt(h+1),g=p&&p.getBoundingRect();if("horizontal"===t){var v=f.width+(g?-g.x+f.x:0);(u=a+v)>i||l.newline?(a=0,u=v,o+=s+n,s=f.height):s=Math.max(s,f.height)}else{var m=f.height+(g?-g.y+f.y:0);(c=o+m)>r||l.newline?(a+=s+n,o=0,c=m,s=f.width):s=Math.max(s,f.width)}l.newline||(d[0]=a,d[1]=o,"horizontal"===t?a=u+n:o=c+n)})}function jr(t,e,n){n=qg(n||0);var i=e.width,r=e.height,a=Cr(t.left,i),o=Cr(t.top,r),s=Cr(t.right,i),l=Cr(t.bottom,r),h=Cr(t.width,i),u=Cr(t.height,r),c=n[2]+n[0],d=n[1]+n[3],f=t.aspect;switch(isNaN(h)&&(h=i-s-d-a),isNaN(u)&&(u=r-l-c-o),null!=f&&(isNaN(h)&&isNaN(u)&&(f>i/r?h=.8*i:u=.8*r),isNaN(h)&&(h=f*u),isNaN(u)&&(u=h/f)),isNaN(a)&&(a=i-s-h-d),isNaN(o)&&(o=r-l-u-c),t.left||t.right){case"center":a=i/2-h/2-n[3];break;case"right":a=i-h-d}switch(t.top||t.bottom){case"middle":case"center":o=r/2-u/2-n[0];break;case"bottom":o=r-u-c}a=a||0,o=o||0,isNaN(h)&&(h=i-d-a-(s||0)),isNaN(u)&&(u=r-c-o-(l||0));var p=new re(a+n[3],o+n[0],h,u);return p.margin=n,p}function Ur(t,e,n){function i(n,i){var o={},l=0,h={},u=0;if(ev(n,function(e){h[e]=t[e]}),ev(n,function(t){r(e,t)&&(o[t]=h[t]=e[t]),a(o,t)&&l++,a(h,t)&&u++}),s[i])return a(e,n[1])?h[n[2]]=null:a(e,n[2])&&(h[n[1]]=null),h;if(2!==u&&l){if(l>=2)return o;for(var c=0;c<n.length;c++){var d=n[c];if(!r(o,d)&&r(t,d)){o[d]=t[d];break}}return o}return h}function r(t,e){return t.hasOwnProperty(e)}function a(t,e){return null!=t[e]&&"auto"!==t[e]}function o(t,e,n){ev(t,function(t){e[t]=n[t]})}!b(n)&&(n={});var s=n.ignoreSize;!x(s)&&(s=[s,s]);var l=i(iv[0],0),h=i(iv[1],1);o(iv[0],t,l),o(iv[1],t,h)}function $r(t){return Kr({},t)}function Kr(t,e){return e&&t&&ev(nv,function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t}function Qr(t,e){for(var n=t.length,i=0;n>i;i++)if(t[i].length>e)return t[i];return t[n-1]}function Jr(t){var e=t.get("coordinateSystem"),n={coordSysName:e,coordSysDims:[],axisMap:R(),categoryAxisMap:R()},i=dv[e];return i?(i(t,n,n.axisMap,n.categoryAxisMap),n):void 0}function ta(t){return"category"===t.get("type")}function ea(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===vv?{}:[]),this.sourceFormat=t.sourceFormat||mv,this.seriesLayoutBy=t.seriesLayoutBy||xv,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&R(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount}function na(t){var e=t.option.source,n=mv;if(S(e))n=yv;else if(x(e)){0===e.length&&(n=pv);for(var i=0,r=e.length;r>i;i++){var a=e[i];if(null!=a){if(x(a)){n=pv;break}if(b(a)){n=gv;break}}}}else if(b(e)){for(var o in e)if(e.hasOwnProperty(o)&&d(e[o])){n=vv;break}}else if(null!=e)throw new Error("Invalid data");wv(t).sourceFormat=n}function ia(t){return wv(t).source}function ra(t){wv(t).datasetMap=R()}function aa(t){var e=t.option,n=e.data,i=S(n)?yv:fv,r=!1,a=e.seriesLayoutBy,o=e.sourceHeader,s=e.dimensions,l=ca(t);if(l){var h=l.option;n=h.source,i=wv(l).sourceFormat,r=!0,a=a||h.seriesLayoutBy,null==o&&(o=h.sourceHeader),s=s||h.dimensions}var u=oa(n,i,a,o,s),c=e.encode;!c&&l&&(c=ua(t,l,n,i,a,u)),wv(t).source=new ea({data:n,fromDataset:r,seriesLayoutBy:a,sourceFormat:i,dimensionsDefine:u.dimensionsDefine,startIndex:u.startIndex,dimensionsDetectCount:u.dimensionsDetectCount,encodeDefine:c})}function oa(t,e,n,i,r){if(!t)return{dimensionsDefine:sa(r)};var a,o,s;if(e===pv)"auto"===i||null==i?la(function(t){null!=t&&"-"!==t&&(w(t)?null==o&&(o=1):o=0)},n,t,10):o=i?1:0,r||1!==o||(r=[],la(function(t,e){r[e]=null!=t?t:""},n,t)),a=r?r.length:n===_v?t.length:t[0]?t[0].length:null;else if(e===gv)r||(r=ha(t),s=!0);else if(e===vv)r||(r=[],s=!0,f(t,function(t,e){r.push(e)}));else if(e===fv){var l=In(t[0]);a=x(l)&&l.length||1}var h;return s&&f(r,function(t,e){"name"===(b(t)?t.name:t)&&(h=e)}),{startIndex:o,dimensionsDefine:sa(r),dimensionsDetectCount:a,potentialNameDimIndex:h}}function sa(t){if(t){var e=R();return p(t,function(t){if(null==(t=o({},b(t)?t:{name:t})).name)return t;t.name+="",null==t.displayName&&(t.displayName=t.name);var n=e.get(t.name);return n?t.name+="-"+n.count++:e.set(t.name,{count:1}),t})}}function la(t,e,n,i){if(null==i&&(i=1/0),e===_v)for(a=0;a<n.length&&i>a;a++)t(n[a]?n[a][0]:null,a);else for(var r=n[0]||[],a=0;a<r.length&&i>a;a++)t(r[a],a)}function ha(t){for(var e,n=0;n<t.length&&!(e=t[n++]););if(e){var i=[];return f(e,function(t,e){i.push(e)}),i}}function ua(t,e,n,i,r,a){var o=Jr(t),s={},l=[],h=[],u=t.subType,c=R(["pie","map","funnel"]),d=R(["line","bar","pictorialBar","scatter","effectScatter","candlestick","boxplot"]);if(o&&null!=d.get(u)){var p=t.ecModel,g=wv(p).datasetMap,v=e.uid+"_"+r,m=g.get(v)||g.set(v,{categoryWayDim:1,valueWayDim:0});f(o.coordSysDims,function(t){if(null==o.firstCategoryDimIndex){e=m.valueWayDim++;s[t]=e,h.push(e)}else if(o.categoryAxisMap.get(t))s[t]=0,l.push(0);else{var e=m.categoryWayDim++;s[t]=e,h.push(e)}})}else if(null!=c.get(u)){for(var y,x=0;5>x&&null==y;x++)fa(n,i,r,a.dimensionsDefine,a.startIndex,x)||(y=x);if(null!=y){s.value=y;var _=a.potentialNameDimIndex||Math.max(y-1,0);h.push(_),l.push(_)}}return l.length&&(s.itemName=l),h.length&&(s.seriesName=h),s}function ca(t){var e=t.option;return e.data?void 0:t.ecModel.getComponent("dataset",e.datasetIndex||0)}function da(t,e){return fa(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e)}function fa(t,e,n,i,r,a){function o(t){return(null==t||!isFinite(t)||""===t)&&(!(!w(t)||"-"===t)||void 0)}var s;if(S(t))return!1;var l;if(i&&(l=i[a],l=b(l)?l.name:l),e===pv)if(n===_v){for(var h=t[a],u=0;u<(h||[]).length&&5>u;u++)if(null!=(s=o(h[r+u])))return s}else for(u=0;u<t.length&&5>u;u++){var c=t[r+u];if(c&&null!=(s=o(c[a])))return s}else if(e===gv){if(!l)return;for(u=0;u<t.length&&5>u;u++)if((d=t[u])&&null!=(s=o(d[l])))return s}else if(e===vv){if(!l)return;if(!(h=t[l])||S(h))return!1;for(u=0;u<h.length&&5>u;u++)if(null!=(s=o(h[u])))return s}else if(e===fv)for(u=0;u<t.length&&5>u;u++){var d=t[u],f=In(d);if(!x(f))return!1;if(null!=(s=o(f[a])))return s}return!1}function pa(t,e){if(e){var n=e.seiresIndex,i=e.seriesId,r=e.seriesName;return null!=n&&t.componentIndex!==n||null!=i&&t.id!==i||null!=r&&t.name!==r}}function ga(e,n){var a=e.color&&!e.colorLayer;f(n,function(n,o){"colorLayer"===o&&a||sv.hasClass(o)||("object"==(void 0===n?"undefined":t(n))?e[o]=e[o]?r(e[o],n,!1):i(n):null==e[o]&&(e[o]=n))})}function va(t){t=t,this.option={},this.option[bv]=1,this._componentsMap=R({series:[]}),this._seriesIndices,this._seriesIndicesMap,ga(t,this._theme.option),r(t,hv,!1),this.mergeOption(t)}function ma(t,e){x(e)||(e=e?[e]:[]);var n={};return f(e,function(e){n[e]=(t.get(e)||[]).slice()}),n}function ya(t,e,n){return e.type?e.type:n?n.subType:sv.determineSubType(t,e)}function xa(t,e){t._seriesIndicesMap=R(t._seriesIndices=p(e,function(t){return t.componentIndex})||[])}function _a(t,e){return e.hasOwnProperty("subType")?v(t,function(t){return t.subType===e.subType}):t}function wa(t){f(Sv,function(e){this[e]=m(t[e],t)},this)}function ba(){this._coordinateSystems=[]}function Ma(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function Sa(t,e,n){var i,r,a=[],o=[],s=t.timeline;if(t.baseOption&&(r=t.baseOption),(s||t.options)&&(r=r||{},a=(t.options||[]).slice()),t.media){r=r||{};var l=t.media;Tv(l,function(t){t&&t.option&&(t.query?o.push(t):i||(i=t))})}return r||(r=t),r.timeline||(r.timeline=s),Tv([r].concat(a).concat(p(o,function(t){return t.option})),function(t){Tv(e,function(e){e(t,n)})}),{baseOption:r,timelineOptions:a,mediaDefault:i,mediaList:o}}function Ia(t,e,n){var i={width:e,height:n,aspectratio:e/n},r=!0;return f(t,function(t,e){var n=e.match(kv);if(n&&n[1]&&n[2]){var a=n[1],o=n[2].toLowerCase();Ta(i[o],t,a)||(r=!1)}}),r}function Ta(t,e,n){return"min"===n?t>=e:"max"===n?e>=t:t===e}function Ca(t,e){return t.join(",")===e.join(",")}function Aa(t,e){Tv(e=e||{},function(e,n){if(null!=e){var i=t[n];if(sv.hasClass(n)){e=Mn(e);var r=Cn(i=Mn(i),e);t[n]=Av(r,function(t){return t.option&&t.exist?Dv(t.exist,t.option,!0):t.exist||t.option})}else t[n]=Dv(i,e,!0)}})}function Da(t){var e=t&&t.itemStyle;if(e)for(var n=0,i=Ov.length;i>n;n++){var a=Ov[n],o=e.normal,s=e.emphasis;o&&o[a]&&(t[a]=t[a]||{},t[a].normal?r(t[a].normal,o[a]):t[a].normal=o[a],o[a]=null),s&&s[a]&&(t[a]=t[a]||{},t[a].emphasis?r(t[a].emphasis,s[a]):t[a].emphasis=s[a],s[a]=null)}}function ka(t,e,n){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var i=t[e].normal,r=t[e].emphasis;i&&(n?(t[e].normal=t[e].emphasis=null,s(t[e],i)):t[e]=i),r&&(t.emphasis=t.emphasis||{},t.emphasis[e]=r)}}function Pa(t){ka(t,"itemStyle"),ka(t,"lineStyle"),ka(t,"areaStyle"),ka(t,"label"),ka(t,"labelLine"),ka(t,"upperLabel"),ka(t,"edgeLabel")}function La(t,e){var n=Lv(t)&&t[e],i=Lv(n)&&n.textStyle;if(i)for(var r=0,a=Qf.length;a>r;r++){var e=Qf[r];i.hasOwnProperty(e)&&(n[e]=i[e])}}function Oa(t){t&&(Pa(t),La(t,"label"),t.emphasis&&La(t.emphasis,"label"))}function za(t){if(Lv(t)){Da(t),Pa(t),La(t,"label"),La(t,"upperLabel"),La(t,"edgeLabel"),t.emphasis&&(La(t.emphasis,"label"),La(t.emphasis,"upperLabel"),La(t.emphasis,"edgeLabel"));var e=t.markPoint;e&&(Da(e),Oa(e));var n=t.markLine;n&&(Da(n),Oa(n));var i=t.markArea;i&&Oa(i);var r=t.data;if("graph"===t.type){r=r||t.nodes;var a=t.links||t.edges;if(a&&!S(a))for(s=0;s<a.length;s++)Oa(a[s]);f(t.categories,function(t){Pa(t)})}if(r&&!S(r))for(s=0;s<r.length;s++)Oa(r[s]);if((e=t.markPoint)&&e.data)for(var o=e.data,s=0;s<o.length;s++)Oa(o[s]);if((n=t.markLine)&&n.data)for(var l=n.data,s=0;s<l.length;s++)x(l[s])?(Oa(l[s][0]),Oa(l[s][1])):Oa(l[s]);"gauge"===t.type?(La(t,"axisLabel"),La(t,"title"),La(t,"detail")):"treemap"===t.type?(ka(t.breadcrumb,"itemStyle"),f(t.levels,function(t){Pa(t)})):"tree"===t.type&&Pa(t.leaves)}}function Ba(t){return x(t)?t:t?[t]:[]}function Ea(t){return(x(t)?t[0]:t)||{}}function Ra(t,e){e=e.split(",");for(var n=t,i=0;i<e.length&&null!=(n=n&&n[e[i]]);i++);return n}function Na(t,e,n,i){e=e.split(",");for(var r,a=t,o=0;o<e.length-1;o++)null==a[r=e[o]]&&(a[r]={}),a=a[r];(i||null==a[e[o]])&&(a[e[o]]=n)}function Fa(t){f(Bv,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}function Va(t){f(t,function(e,n){var i=[],r=[NaN,NaN],a=[e.stackResultDimension,e.stackedOverDimension],o=e.data,s=e.isStackedByIndex,l=o.map(a,function(a,l,h){var u=o.get(e.stackedDimension,h);if(isNaN(u))return r;var c,d;s?d=o.getRawIndex(h):c=o.get(e.stackedByDimension,h);for(var f=NaN,p=n-1;p>=0;p--){var g=t[p];if(s||(d=g.data.rawIndexOf(g.stackedByDimension,c)),d>=0){var v=g.data.getByRawIndex(g.stackResultDimension,d);if(u>=0&&v>0||0>=u&&0>v){u+=v,f=v;break}}}return i[0]=u,i[1]=f,i});o.hostModel.setData(l),e.data=l})}function Wa(t,e){ea.isInstance(t)||(t=ea.seriesDataToSource(t)),this._source=t;var n=this._data=t.data,i=t.sourceFormat;i===yv&&(this._offset=0,this._dimSize=e,this._data=n),o(this,Fv[i===pv?i+"_"+t.seriesLayoutBy:i])}function Ha(){return this._data.length}function Ga(t){return this._data[t]}function Za(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}function Xa(t,e,n){return null!=n?t[n]:t}function Ya(t,e,n,i){return qa(t[i],this._dimensionInfos[e])}function qa(t,e){var n=e&&e.type;if("ordinal"===n){var i=e&&e.ordinalMeta;return i?i.parseAndCollect(t):t}return"time"===n&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+Br(t)),null==t||""===t?NaN:+t}function ja(t,e,n){if(t){var i=t.getRawDataItem(e);if(null!=i){var r,a,o=t.getProvider().getSource().sourceFormat,s=t.getDimensionInfo(n);return s&&(r=s.name,a=s.index),Vv[o](i,e,a,r)}}}function Ua(t,e,n){if(t){var i=t.getProvider().getSource().sourceFormat;if(i===fv||i===gv){var r=t.getRawDataItem(e);return i!==fv||b(r)||(r=null),r?r[n]:void 0}}}function $a(t){return new Ka(t)}function Ka(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0,this.context}function Qa(t,e,n,i,r,a){Xv.reset(n,i,r,a),t._callingProgress=e,t._callingProgress({start:n,end:i,count:i-n,next:Xv.next},t.context)}function Ja(t,e){t._dueIndex=t._outputDueEnd=t._dueEnd=0,t._settedOutputEnd=null;var n,i;!e&&t._reset&&((n=t._reset(t.context))&&n.progress&&(i=n.forceFirstProgress,n=n.progress),x(n)&&!n.length&&(n=null)),t._progress=n,t._modBy=t._modDataCount=null;var r=t._downstream;return r&&r.dirty(),i}function to(t){var e=t.name;Dn(t)||(t.name=eo(t)||e)}function eo(t){var e=t.getRawData(),n=[];return f(e.mapDimension("seriesName",!0),function(t){var i=e.getDimensionInfo(t);i.displayName&&n.push(i.displayName)}),n.join(" ")}function no(t){return t.model.getRawData().count()}function io(t){var e=t.model;return e.setData(e.getRawData().cloneShallow()),ro}function ro(t,e){t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData)}function ao(t,e){f(t.CHANGABLE_METHODS,function(n){t.wrapMethod(n,y(oo,e))})}function oo(t){var e=so(t);e&&e.setOutputEnd(this.count())}function so(t){var e=(t.ecModel||{}).scheduler,n=e&&e.getPipeline(t.uid);if(n){var i=n.currentTask;if(i){var r=i.agentStubMap;r&&(i=r.get(t.uid))}return i}}function lo(){this.group=new rf,this.uid=Sr("viewChart"),this.renderTask=$a({plan:co,reset:fo}),this.renderTask.context={view:this}}function ho(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var n=0;n<t.childCount();n++)ho(t.childAt(n),e)}function uo(t,e,n){var i=Pn(t,e);null!=i?f(Mn(i),function(e){ho(t.getItemGraphicEl(e),n)}):t.eachItemGraphicEl(function(t){ho(t,n)})}function co(t){return Qv(t.model)}function fo(t){var e=t.model,n=t.ecModel,i=t.api,r=t.payload,a=e.pipelineContext.progressiveRender,o=t.view,s=r&&Kv(r).updateMethod,l=a?"incrementalPrepareRender":s&&o[s]?s:"render";return"render"!==l&&o[l](e,n,i,r),tm[l]}function po(t,e,n){function i(){u=(new Date).getTime(),c=null,t.apply(o,s||[])}var r,a,o,s,l,h=0,u=0,c=null;e=e||0;var d=function(){r=(new Date).getTime(),o=this,s=arguments;var t=l||e,d=l||n;l=null,a=r-(d?h:u)-t,clearTimeout(c),d?c=setTimeout(i,t):a>=0?i():c=setTimeout(i,-a),h=r};return d.clear=function(){c&&(clearTimeout(c),c=null)},d.debounceNextCall=function(t){l=t},d}function go(t,e,n,i){var r=t[e];if(r){var a=r[em]||r,o=r[im];if(r[nm]!==n||o!==i){if(null==n||!i)return t[e]=a;(r=t[e]=po(a,n,"debounce"===i))[em]=a,r[im]=i,r[nm]=n}return r}}function vo(t,e){var n=t[e];n&&n[em]&&(t[e]=n[em])}function mo(t,e,n,i){this.ecInstance=t,this.api=e,this.unfinished;var n=this._dataProcessorHandlers=n.slice(),i=this._visualHandlers=i.slice();this._allHandlers=n.concat(i),this._stageTaskMap=R()}function yo(t,e,n,i,r){function a(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id))}r=r||{};var o;f(e,function(e){if(!r.visualType||r.visualType===e.visualType){var s=t._stageTaskMap.get(e.uid),l=s.seriesTaskMap,h=s.overallTask;if(h){var u,c=h.agentStubMap;c.each(function(t){a(r,t)&&(t.dirty(),u=!0)}),u&&h.dirty(),hm(h,i);var d=t.getPerformArgs(h,r.block);c.each(function(t){t.perform(d)}),o|=h.perform(d)}else l&&l.each(function(s){a(r,s)&&s.dirty();var l=t.getPerformArgs(s,r.block);l.skip=!e.performRawSeries&&n.isSeriesFiltered(s.context.model),hm(s,i),o|=s.perform(l)})}}),t.unfinished|=o}function xo(t,e,n,i,r){function a(n){var a=n.uid,s=o.get(a)||o.set(a,$a({plan:Io,reset:To,count:Ao}));s.context={model:n,ecModel:i,api:r,useClearVisual:e.isVisual&&!e.isLayout,plan:e.plan,reset:e.reset,scheduler:t},Do(t,n,s)}var o=n.seriesTaskMap||(n.seriesTaskMap=R()),s=e.seriesType,l=e.getTargetSeries;e.createOnAllSeries?i.eachRawSeries(a):s?i.eachRawSeriesByType(s,a):l&&l(i,r).each(a);var h=t._pipelineMap;o.each(function(t,e){h.get(e)||(t.dispose(),o.removeKey(e))})}function _o(t,e,n,i,r){function a(e){var n=e.uid,i=s.get(n);i||(i=s.set(n,$a({reset:bo,onDirty:So})),o.dirty()),i.context={model:e,overallProgress:u,modifyOutputEnd:c},i.agent=o,i.__block=u,Do(t,e,i)}var o=n.overallTask=n.overallTask||$a({reset:wo});o.context={ecModel:i,api:r,overallReset:e.overallReset,scheduler:t};var s=o.agentStubMap=o.agentStubMap||R(),l=e.seriesType,h=e.getTargetSeries,u=!0,c=e.modifyOutputEnd;l?i.eachRawSeriesByType(l,a):h?h(i,r).each(a):(u=!1,f(i.getSeries(),a));var d=t._pipelineMap;s.each(function(t,e){d.get(e)||(t.dispose(),o.dirty(),s.removeKey(e))})}function wo(t){t.overallReset(t.ecModel,t.api,t.payload)}function bo(t){return t.overallProgress&&Mo}function Mo(){this.agent.dirty(),this.getDownstream().dirty()}function So(){this.agent&&this.agent.dirty()}function Io(t){return t.plan&&t.plan(t.model,t.ecModel,t.api,t.payload)}function To(t){t.useClearVisual&&t.data.clearAllVisual();var e=t.resetDefines=Mn(t.reset(t.model,t.ecModel,t.api,t.payload));return e.length>1?p(e,function(t,e){return Co(e)}):um}function Co(t){return function(e,n){var i=n.data,r=n.resetDefines[t];if(r&&r.dataEach)for(var a=e.start;a<e.end;a++)r.dataEach(i,a);else r&&r.progress&&r.progress(e,i)}}function Ao(t){return t.data.count()}function Do(t,e,n){var i=e.uid,r=t._pipelineMap.get(i);!r.head&&(r.head=n),r.tail&&r.tail.pipe(n),r.tail=n,n.__idxInPipeline=r.count++,n.__pipeline=r}function ko(t){cm=null;try{t(dm,fm)}catch(t){}return cm}function Po(t,e){for(var n in e.prototype)t[n]=N}function Lo(t){for(w(t)&&(t=(new DOMParser).parseFromString(t,"text/xml")),9===t.nodeType&&(t=t.firstChild);"svg"!==t.nodeName.toLowerCase()||1!==t.nodeType;)t=t.nextSibling;return t}function Oo(){this._defs={},this._root=null,this._isDefine=!1,this._isText=!1}function zo(t,e){for(var n=t.firstChild;n;){if(1===n.nodeType){var i=n.getAttribute("offset");i=i.indexOf("%")>0?parseInt(i,10)/100:i?parseFloat(i):0;var r=n.getAttribute("stop-color")||"#000000";e.addColorStop(i,r)}n=n.nextSibling}}function Bo(t,e){t&&t.__inheritedStyle&&(e.__inheritedStyle||(e.__inheritedStyle={}),s(e.__inheritedStyle,t.__inheritedStyle))}function Eo(t){for(var e=O(t).split(wm),n=[],i=0;i<e.length;i+=2){var r=parseFloat(e[i]),a=parseFloat(e[i+1]);n.push([r,a])}return n}function Ro(t,e,n,i){var r=e.__inheritedStyle||{},a="text"===e.type;if(1===t.nodeType&&(Fo(t,e),o(r,Vo(t)),!i))for(var s in Sm)if(Sm.hasOwnProperty(s)){var l=t.getAttribute(s);null!=l&&(r[Sm[s]]=l)}var h=a?"textFill":"fill",u=a?"textStroke":"stroke";e.style=e.style||new cf;var c=e.style;null!=r.fill&&c.set(h,No(r.fill,n)),null!=r.stroke&&c.set(u,No(r.stroke,n)),f(["lineWidth","opacity","fillOpacity","strokeOpacity","miterLimit","fontSize"],function(t){var e="lineWidth"===t&&a?"textStrokeWidth":t;null!=r[t]&&c.set(e,parseFloat(r[t]))}),r.textBaseline&&"auto"!==r.textBaseline||(r.textBaseline="alphabetic"),"alphabetic"===r.textBaseline&&(r.textBaseline="bottom"),"start"===r.textAlign&&(r.textAlign="left"),"end"===r.textAlign&&(r.textAlign="right"),f(["lineDashOffset","lineCap","lineJoin","fontWeight","fontFamily","fontStyle","textAlign","textBaseline"],function(t){null!=r[t]&&c.set(t,r[t])}),r.lineDash&&(e.style.lineDash=O(r.lineDash).split(wm)),c[u]&&"none"!==c[u]&&(e[u]=!0),e.__inheritedStyle=r}function No(t,e){var n=e&&t&&t.match(Im);return n?e[O(n[1])]:t}function Fo(t,e){var n=t.getAttribute("transform");if(n){var i=null,r=[];(n=n.replace(/,/g," ")).replace(Tm,function(t,e,n){r.push(e,n)});for(var a=r.length-1;a>0;a-=2){var o=r[a],s=r[a-1];switch(i=i||pt(),s){case"translate":o=O(o).split(wm),yt(i,i,[parseFloat(o[0]),parseFloat(o[1]||0)]);break;case"scale":o=O(o).split(wm),_t(i,i,[parseFloat(o[0]),parseFloat(o[1]||o[0])]);break;case"rotate":o=O(o).split(wm),xt(i,i,parseFloat(o[0]));break;case"skew":o=O(o).split(wm),console.warn("Skew transform is not supported yet");break;case"matrix":o=O(o).split(wm);i[0]=parseFloat(o[0]),i[1]=parseFloat(o[1]),i[2]=parseFloat(o[2]),i[3]=parseFloat(o[3]),i[4]=parseFloat(o[4]),i[5]=parseFloat(o[5])}}}e.setLocalTransform(i)}function Vo(t){var e=t.getAttribute("style"),n={};if(!e)return n;var i={};Cm.lastIndex=0;for(var r;null!=(r=Cm.exec(e));)i[r[1]]=r[2];for(var a in Sm)Sm.hasOwnProperty(a)&&null!=i[a]&&(n[Sm[a]]=i[a]);return n}function Wo(t,e,n){var i=e/t.width,r=n/t.height,a=Math.min(i,r);return{scale:[a,a],position:[-(t.x+t.width/2)*a+e/2,-(t.y+t.height/2)*a+n/2]}}function Ho(t){return function(e,n,i){e=e&&e.toLowerCase(),yd.prototype[t].call(this,e,n,i)}}function Go(){yd.call(this)}function Zo(t,e,n){function r(t,e){return t.__prio-e.__prio}n=n||{},"string"==typeof e&&(e=Jm[e]),this.id,this.group,this._dom=t;var a=this._zr=wn(t,{renderer:n.renderer||"canvas",devicePixelRatio:n.devicePixelRatio,width:n.width,height:n.height});this._throttledZrFlush=po(m(a.flush,a),17),(e=i(e))&&Rv(e,!0),this._theme=e,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new ba;var o=this._api=ls(this);de(Qm,r),de(Um,r),this._scheduler=new mo(this,o,Um,Qm),yd.call(this,this._ecEventProcessor=new hs),this._messageCenter=new Go,this._initEvents(),this.resize=m(this.resize,this),this._pendingActions=[],a.animation.on("frame",this._onframe,this),Qo(a,this),z(this)}function Xo(t,e,n){var i,r=this._model,a=this._coordSysMgr.getCoordinateSystems();e=On(r,e);for(var o=0;o<a.length;o++){var s=a[o];if(s[t]&&null!=(i=s[t](r,e,n)))return i}}function Yo(t){var e=t._model,n=t._scheduler;n.restorePipelines(e),n.prepareStageTasks(),Jo(t,"component",e,n),Jo(t,"chart",e,n),n.plan()}function qo(t,e,n,i,r){function a(i){i&&i.__alive&&i[e]&&i[e](i.__model,o,t._api,n)}var o=t._model;if(i){var s={};s[i+"Id"]=n[i+"Id"],s[i+"Index"]=n[i+"Index"],s[i+"Name"]=n[i+"Name"];var l={mainType:i,query:s};r&&(l.subType=r);var h=n.excludeSeriesId;null!=h&&(h=R(Mn(h))),o&&o.eachComponent(l,function(e){h&&null!=h.get(e.id)||a(t["series"===i?"_chartsMap":"_componentsMap"][e.__viewId])},t)}else Lm(t._componentsViews.concat(t._chartsViews),a)}function jo(t,e){var n=t._chartsMap,i=t._scheduler;e.eachSeries(function(t){i.updateStreamModes(t,n[t.__viewId])})}function Uo(t,e){var n=t.type,i=t.escapeConnect,r=qm[n],a=r.actionInfo,l=(a.update||"update").split(":"),h=l.pop();l=null!=l[0]&&Bm(l[0]),this[Wm]=!0;var u=[t],c=!1;t.batch&&(c=!0,u=p(t.batch,function(e){return e=s(o({},e),t),e.batch=null,e}));var d,f=[],g="highlight"===n||"downplay"===n;Lm(u,function(t){d=r.action(t,this._model,this._api),(d=d||o({},t)).type=a.event||d.type,f.push(d),g?qo(this,h,t,"series"):l&&qo(this,h,t,l.main,l.sub)},this),"none"===h||g||l||(this[Hm]?(Yo(this),Xm.update.call(this,t),this[Hm]=!1):Xm[h].call(this,t)),d=c?{type:a.event||n,escapeConnect:i,batch:f}:f[0],this[Wm]=!1,!e&&this._messageCenter.trigger(d.type,d)}function $o(t){for(var e=this._pendingActions;e.length;){var n=e.shift();Uo.call(this,n,t)}}function Ko(t){!t&&this.trigger("updated")}function Qo(t,e){t.on("rendered",function(){e.trigger("rendered"),!t.animation.isFinished()||e[Hm]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished")})}function Jo(t,e,n,i){function r(t){var e="_ec_"+t.id+"_"+t.type,r=s[e];if(!r){var u=Bm(t.type);(r=new(a?jv.getClass(u.main,u.sub):lo.getClass(u.sub))).init(n,h),s[e]=r,o.push(r),l.add(r.group)}t.__viewId=r.__id=e,r.__alive=!0,r.__model=t,r.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},!a&&i.prepareView(r,t,n,h)}for(var a="component"===e,o=a?t._componentsViews:t._chartsViews,s=a?t._componentsMap:t._chartsMap,l=t._zr,h=t._api,u=0;u<o.length;u++)o[u].__alive=!1;a?n.eachComponent(function(t,e){"series"!==t&&r(e)}):n.eachSeries(r);for(u=0;u<o.length;){var c=o[u];c.__alive?u++:(!a&&c.renderTask.dispose(),l.remove(c.group),c.dispose(n,h),o.splice(u,1),delete s[c.__id],c.__id=c.group.__ecComponentInfo=null)}}function ts(t){t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()})}function es(t,e,n,i){ns(t,e,n,i),Lm(t._chartsViews,function(t){t.__alive=!1}),is(t,e,n,i),Lm(t._chartsViews,function(t){t.__alive||t.remove(e,n)})}function ns(t,e,n,i,r){Lm(r||t._componentsViews,function(t){var r=t.__model;t.render(r,e,n,i),ss(r,t)})}function is(t,e,n,i,r){var a,o=t._scheduler;e.eachSeries(function(e){var n=t._chartsMap[e.__viewId];n.__alive=!0;var s=n.renderTask;o.updatePayload(s,i),r&&r.get(e.uid)&&s.dirty(),a|=s.perform(o.getPerformArgs(s)),n.group.silent=!!e.get("silent"),ss(e,n),os(e,n)}),o.unfinished|=a,as(t._zr,e),om(t._zr.dom,e)}function rs(t,e){Lm(Km,function(n){n(t,e)})}function as(t,e){var n=t.storage,i=0;n.traverse(function(t){t.isGroup||i++}),i>e.get("hoverLayerThreshold")&&!$c.node&&n.traverse(function(t){t.isGroup||(t.useHoverLayer=!0)})}function os(t,e){var n=t.get("blendMode")||null;e.group.traverse(function(t){t.isGroup||t.style.blend!==n&&t.setStyle("blend",n),t.eachPendingDisplayable&&t.eachPendingDisplayable(function(t){t.setStyle("blend",n)})})}function ss(t,e){var n=t.get("z"),i=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=i&&(t.zlevel=i))})}function ls(t){var e=t._coordSysMgr;return o(new wa(t),{getCoordinateSystems:m(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var n=e.__ecComponentInfo;if(null!=n)return t._model.getComponent(n.mainType,n.index);e=e.parent}}})}function hs(){this.eventInfo}function us(t){function e(t,e){for(var i=0;i<t.length;i++)t[i][n]=e}var n="__connectUpdateStatus";Lm(jm,function(i,r){t._messageCenter.on(r,function(i){if(ny[t.group]&&0!==t[n]){if(i&&i.escapeConnect)return;var r=t.makeActionFromEvent(i),a=[];Lm(ey,function(e){e!==t&&e.group===t.group&&a.push(e)}),e(a,0),Lm(a,function(t){1!==t[n]&&t.dispatchAction(r)}),e(a,2)}})})}function cs(t){ny[t]=!1}function ds(t){return ey[En(t,ay)]}function fs(t,e){Jm[t]=e}function ps(t){$m.push(t)}function gs(t,e){xs(Um,t,e,Rm)}function vs(t,e,n){"function"==typeof e&&(n=e,e="");var i=zm(t)?t.type:[t,t={event:e}][0];t.event=(t.event||i).toLowerCase(),e=t.event,Pm(Gm.test(i)&&Gm.test(e)),qm[i]||(qm[i]={action:n,actionInfo:t}),jm[e]=i}function ms(t,e){xs(Qm,t,e,Nm,"layout")}function ys(t,e){xs(Qm,t,e,Fm,"visual")}function xs(t,e,n,i,r){(Om(e)||zm(e))&&(n=e,e=i);var a=mo.wrapStageHandler(n,r);return a.__prio=e,a.__raw=n,t.push(a),a}function _s(t,e){ty[t]=e}function ws(t){return sv.extend(t)}function bs(t){return jv.extend(t)}function Ms(t){return qv.extend(t)}function Ss(t){return lo.extend(t)}function Is(t){return t}function Ts(t,e,n,i,r){this._old=t,this._new=e,this._oldKeyGetter=n||Is,this._newKeyGetter=i||Is,this.context=r}function Cs(t,e,n,i,r){for(var a=0;a<t.length;a++){var o="_ec_"+r[i](t[a],a),s=e[o];null==s?(n.push(o),e[o]=a):(s.length||(e[o]=s=[s]),s.push(a))}}function As(t){var e={},n=e.encode={},i=R(),r=[],a=[];f(t.dimensions,function(e){var o=t.getDimensionInfo(e),s=o.coordDim;if(s){var l=n[s];n.hasOwnProperty(s)||(l=n[s]=[]),l[o.coordDimIndex]=e,o.isExtraCoord||(i.set(s,1),ks(o.type)&&(r[0]=e)),o.defaultTooltip&&a.push(e)}ly.each(function(t,e){var i=n[e];n.hasOwnProperty(e)||(i=n[e]=[]);var r=o.otherDims[e];null!=r&&!1!==r&&(i[r]=o.name)})});var o=[],s={};i.each(function(t,e){var i=n[e];s[e]=i[0],o=o.concat(i)}),e.dataDimsOnCoord=o,e.encodeFirstDimNotExtra=s;var l=n.label;l&&l.length&&(r=l.slice());var h=n.tooltip;return h&&h.length?a=h.slice():a.length||(a=r.slice()),n.defaultedLabel=r,n.defaultedTooltip=a,e}function Ds(t){return"category"===t?"ordinal":"time"===t?"time":"float"}function ks(t){return!("ordinal"===t||"time"===t)}function Ps(t){return t._rawCount>65535?fy:py}function Ls(t){var e=t.constructor;return e===Array?t.slice():new e(t)}function Os(t,e){f(gy.concat(e.__wrappedMethods||[]),function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t.__wrappedMethods=e.__wrappedMethods,f(vy,function(n){t[n]=i(e[n])}),t._calculationInfo=o(e._calculationInfo)}function zs(t){var e=t._invertedIndicesMap;f(e,function(n,i){var r=t._dimensionInfos[i].ordinalMeta;if(r){n=e[i]=new fy(r.categories.length);for(a=0;a<n.length;a++)n[a]=NaN;for(var a=0;a<t._count;a++)n[t.get(i,a)]=a}})}function Bs(t,e,n){var i;if(null!=e){var r=t._chunkSize,a=Math.floor(n/r),o=n%r,s=t.dimensions[e],l=t._storage[s][a];if(l){i=l[o];var h=t._dimensionInfos[s].ordinalMeta;h&&h.categories.length&&(i=h.categories[i])}}return i}function Es(t){return t}function Rs(t){return t<this._count&&t>=0?this._indices[t]:-1}function Ns(t,e){var n=t._idList[e];return null==n&&(n=Bs(t,t._idDimIdx,e)),null==n&&(n=cy+e),n}function Fs(t){return x(t)||(t=[t]),t}function Vs(t,e){var n=t.dimensions,i=new my(p(n,t.getDimensionInfo,t),t.hostModel);Os(i,t);for(var r=i._storage={},a=t._storage,o=0;o<n.length;o++){var s=n[o];a[s]&&(h(e,s)>=0?(r[s]=Ws(a[s]),i._rawExtent[s]=[1/0,-1/0],i._extent[s]=null):r[s]=a[s])}return i}function Ws(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=Ls(t[n]);return e}function Hs(t,e,n){function r(t,e,n){null!=ly.get(e)?t.otherDims[e]=n:(t.coordDim=e,t.coordDimIndex=n,u.set(e,!0))}ea.isInstance(e)||(e=ea.seriesDataToSource(e)),n=n||{},t=(t||[]).slice();for(var a=(n.dimsDef||[]).slice(),l=R(n.encodeDef),h=R(),u=R(),c=[],d=Gs(e,t,a,n.dimCount),p=0;d>p;p++){var g=a[p]=o({},b(a[p])?a[p]:{name:a[p]}),v=g.name,m=c[p]={otherDims:{}};null!=v&&null==h.get(v)&&(m.name=m.displayName=v,h.set(v,p)),null!=g.type&&(m.type=g.type),null!=g.displayName&&(m.displayName=g.displayName)}l.each(function(t,e){if(1===(t=Mn(t).slice()).length&&t[0]<0)l.set(e,!1);else{var n=l.set(e,[]);f(t,function(t,i){w(t)&&(t=h.get(t)),null!=t&&d>t&&(n[i]=t,r(c[t],e,i))})}});var y=0;f(t,function(t){var e,t,n,a;if(w(t))e=t,t={};else{e=t.name;var o=t.ordinalMeta;t.ordinalMeta=null,(t=i(t)).ordinalMeta=o,n=t.dimsDef,a=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null}var h=l.get(e);if(!1!==h){if(!(h=Mn(h)).length)for(var u=0;u<(n&&n.length||1);u++){for(;y<c.length&&null!=c[y].coordDim;)y++;y<c.length&&h.push(y++)}f(h,function(i,o){var l=c[i];if(r(s(l,t),e,o),null==l.name&&n){var h=n[o];!b(h)&&(h={name:h}),l.name=l.displayName=h.name,l.defaultTooltip=h.defaultTooltip}a&&s(l.otherDims,a)})}});var x=n.generateCoord,_=n.generateCoordCount,M=null!=_;_=x?_||1:0;for(var S=x||"value",I=0;d>I;I++)null==(m=c[I]=c[I]||{}).coordDim&&(m.coordDim=Zs(S,u,M),m.coordDimIndex=0,(!x||0>=_)&&(m.isExtraCoord=!0),_--),null==m.name&&(m.name=Zs(m.coordDim,h)),null==m.type&&da(e,I,m.name)&&(m.type="ordinal");return c}function Gs(t,e,n,i){var r=Math.max(t.dimensionsDetectCount||1,e.length,n.length,i||0);return f(e,function(t){var e=t.dimsDef;e&&(r=Math.max(r,e.length))}),r}function Zs(t,e,n){if(n||null!=e.get(t)){for(var i=0;null!=e.get(t+i);)i++;t+=i}return e.set(t,!0),t}function Xs(t,e,n){var i,r,a,o,s=(n=n||{}).byIndex,l=n.stackedCoordDimension,h=!(!t||!t.get("stack"));if(f(e,function(t,n){w(t)&&(e[n]=t={name:t}),h&&!t.isExtraCoord&&(s||i||!t.ordinalMeta||(i=t),r||"ordinal"===t.type||"time"===t.type||l&&l!==t.coordDim||(r=t))}),!r||s||i||(s=!0),r){a="__\0ecstackresult",o="__\0ecstackedover",i&&(i.createInvertedIndices=!0);var u=r.coordDim,c=r.type,d=0;f(e,function(t){t.coordDim===u&&d++}),e.push({name:a,coordDim:u,coordDimIndex:d,type:c,isExtraCoord:!0,isCalculationCoord:!0}),d++,e.push({name:o,coordDim:o,coordDimIndex:d,type:c,isExtraCoord:!0,isCalculationCoord:!0})}return{stackedDimension:r&&r.name,stackedByDimension:i&&i.name,isStackedByIndex:s,stackedOverDimension:o,stackResultDimension:a}}function Ys(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}function qs(t,e){return Ys(t,e)?t.getCalculationInfo("stackResultDimension"):e}function js(t,e,n){n=n||{},ea.isInstance(t)||(t=ea.seriesDataToSource(t));var i,r=e.get("coordinateSystem"),a=ba.get(r),o=Jr(e);o&&(i=p(o.coordSysDims,function(t){var e={name:t},n=o.axisMap.get(t);if(n){var i=n.get("type");e.type=Ds(i)}return e})),i||(i=a&&(a.getDimensionsInfo?a.getDimensionsInfo():a.dimensions.slice())||["x","y"]);var s,l,h=_y(t,{coordDimensions:i,generateCoord:n.generateCoord});o&&f(h,function(t,e){var n=t.coordDim,i=o.categoryAxisMap.get(n);i&&(null==s&&(s=e),t.ordinalMeta=i.getOrdinalMeta()),null!=t.otherDims.itemName&&(l=!0)}),l||null==s||(h[s].otherDims.itemName=0);var u=Xs(e,h),c=new my(h,e);c.setCalculationInfo(u);var d=null!=s&&Us(t)?function(t,e,n,i){return i===s?n:this.defaultDimValueGetter(t,e,n,i)}:null;return c.hasItemOption=!1,c.initData(t,null,d),c}function Us(t){if(t.sourceFormat===fv){var e=$s(t.data||[]);return null!=e&&!x(In(e))}}function $s(t){for(var e=0;e<t.length&&null==t[e];)e++;return t[e]}function Ks(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}function Qs(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map}function Js(t){return t._map||(t._map=R(t.categories))}function tl(t){return b(t)&&null!=t.value?t.value:t+""}function el(t,e,n,i){var r={},a=t[1]-t[0],o=r.interval=Nr(a/e,!0);null!=n&&n>o&&(o=r.interval=n),null!=i&&o>i&&(o=r.interval=i);var s=r.intervalPrecision=nl(o);return rl(r.niceTickExtent=[Sy(Math.ceil(t[0]/o)*o,s),Sy(Math.floor(t[1]/o)*o,s)],t),r}function nl(t){return kr(t)+2}function il(t,e,n){t[e]=Math.max(Math.min(t[e],n[1]),n[0])}function rl(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),il(t,0,e),il(t,1,e),t[0]>t[1]&&(t[0]=t[1])}function al(t,e,n,i){var r=[];if(!t)return r;e[0]<n[0]&&r.push(e[0]);for(var a=n[0];a<=n[1]&&(r.push(a),(a=Sy(a+t,i))!==r[r.length-1]);)if(r.length>1e4)return[];return e[1]>(r.length?r[r.length-1]:n[1])&&r.push(e[1]),r}function ol(t){return t.get("stack")||Cy+t.seriesIndex}function sl(t){return t.dim+t.index}function ll(t,e){var n=[];return e.eachSeriesByType(t,function(t){dl(t)&&!fl(t)&&n.push(t)}),n}function hl(t){var e=[];return f(t,function(t){var n=t.getData(),i=t.coordinateSystem.getBaseAxis(),r=i.getExtent(),a="category"===i.type?i.getBandWidth():Math.abs(r[1]-r[0])/n.count(),o=Cr(t.get("barWidth"),a),s=Cr(t.get("barMaxWidth"),a),l=t.get("barGap"),h=t.get("barCategoryGap");e.push({bandWidth:a,barWidth:o,barMaxWidth:s,barGap:l,barCategoryGap:h,axisKey:sl(i),stackId:ol(t)})}),ul(e)}function ul(t){var e={};f(t,function(t){var n=t.axisKey,i=t.bandWidth,r=e[n]||{bandWidth:i,remainedWidth:i,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},a=r.stacks;e[n]=r;var o=t.stackId;a[o]||r.autoWidthCount++,a[o]=a[o]||{width:0,maxWidth:0};var s=t.barWidth;s&&!a[o].width&&(a[o].width=s,s=Math.min(r.remainedWidth,s),r.remainedWidth-=s);var l=t.barMaxWidth;l&&(a[o].maxWidth=l);var h=t.barGap;null!=h&&(r.gap=h);var u=t.barCategoryGap;null!=u&&(r.categoryGap=u)});var n={};return f(e,function(t,e){n[e]={};var i=t.stacks,r=t.bandWidth,a=Cr(t.categoryGap,r),o=Cr(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,h=(s-a)/(l+(l-1)*o);h=Math.max(h,0),f(i,function(t){var e=t.maxWidth;e&&h>e&&(e=Math.min(e,s),t.width&&(e=Math.min(e,t.width)),s-=e,t.width=e,l--)}),h=(s-a)/(l+(l-1)*o),h=Math.max(h,0);var u,c=0;f(i,function(t){t.width||(t.width=h),u=t,c+=t.width*(1+o)}),u&&(c-=u.width*o);var d=-c/2;f(i,function(t,i){n[e][i]=n[e][i]||{offset:d,width:t.width},d+=t.width*(1+o)})}),n}function cl(t,e,n){if(t&&e){var i=t[sl(e)];return null!=i&&null!=n&&(i=i[ol(n)]),i}}function dl(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function fl(t){return t.pipelineContext&&t.pipelineContext.large}function pl(t,e){var n,i,r=e.getGlobalExtent();r[0]>r[1]?(n=r[1],i=r[0]):(n=r[0],i=r[1]);var a=e.toGlobalCoord(e.dataToCoord(0));return n>a&&(a=n),a>i&&(a=i),a}function gl(t,e){return Wy(t,Vy(e))}function vl(t,e){var n,i,r,a=t.type,o=e.getMin(),s=e.getMax(),l=null!=o,h=null!=s,u=t.getExtent();"ordinal"===a?n=e.getCategories().length:(i=e.get("boundaryGap"),x(i)||(i=[i||0,i||0]),"boolean"==typeof i[0]&&(i=[0,0]),i[0]=Cr(i[0],1),i[1]=Cr(i[1],1),r=u[1]-u[0]||Math.abs(u[0])),null==o&&(o="ordinal"===a?n?0:NaN:u[0]-i[0]*r),null==s&&(s="ordinal"===a?n?n-1:NaN:u[1]+i[1]*r),"dataMin"===o?o=u[0]:"function"==typeof o&&(o=o({min:u[0],max:u[1]})),"dataMax"===s?s=u[1]:"function"==typeof s&&(s=s({min:u[0],max:u[1]})),(null==o||!isFinite(o))&&(o=NaN),(null==s||!isFinite(s))&&(s=NaN),t.setBlank(T(o)||T(s)||"ordinal"===a&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(o>0&&s>0&&!l&&(o=0),0>o&&0>s&&!h&&(s=0));var c=e.ecModel;if(c&&"time"===a){var d,p=ll("bar",c);if(f(p,function(t){d|=t.getBaseAxis()===e.axis}),d){var g=hl(p),v=ml(o,s,e,g);o=v.min,s=v.max}}return[o,s]}function ml(t,e,n,i){var r=n.axis.getExtent(),a=r[1]-r[0],o=cl(i,n.axis);if(void 0===o)return{min:t,max:e};var s=1/0;f(o,function(t){s=Math.min(t.offset,s)});var l=-1/0;f(o,function(t){l=Math.max(t.offset+t.width,l)}),s=Math.abs(s),l=Math.abs(l);var h=s+l,u=e-t,c=u/(1-(s+l)/a)-u;return e+=c*(l/h),t-=c*(s/h),{min:t,max:e}}function yl(t,e){var n=vl(t,e),i=null!=e.getMin(),r=null!=e.getMax(),a=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var o=t.type;t.setExtent(n[0],n[1]),t.niceExtent({splitNumber:a,fixMin:i,fixMax:r,minInterval:"interval"===o||"time"===o?e.get("minInterval"):null,maxInterval:"interval"===o||"time"===o?e.get("maxInterval"):null});var s=e.get("interval");null!=s&&t.setInterval&&t.setInterval(s)}function xl(t,e){if(e=e||t.get("type"))switch(e){case"category":return new My(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0]);case"value":return new Ty;default:return(Ks.getClass(e)||Ty).create(t)}}function _l(t){var e=t.scale.getExtent(),n=e[0],i=e[1];return!(n>0&&i>0||0>n&&0>i)}function wl(t){var e=t.getLabelModel().get("formatter"),n="category"===t.type?t.scale.getExtent()[0]:null;return"string"==typeof e?e=function(e){return function(n){return n=t.scale.getLabel(n),e.replace("{value}",null!=n?n:"")}}(e):"function"==typeof e?function(i,r){return null!=n&&(r=i-n),e(bl(t,i),r)}:function(e){return t.scale.getLabel(e)}}function bl(t,e){return"category"===t.type?t.scale.getLabel(e):e}function Ml(t){var e=t.model,n=t.scale;if(e.get("axisLabel.show")&&!n.isBlank()){var i,r,a="category"===t.type,o=n.getExtent();a?r=n.count():(i=n.getTicks(),r=i.length);var s,l=t.getLabelModel(),h=wl(t),u=1;r>40&&(u=Math.ceil(r/40));for(var c=0;r>c;c+=u){var d=h(i?i[c]:o[0]+c),f=Sl(l.getTextRect(d),l.get("rotate")||0);s?s.union(f):s=f}return s}}function Sl(t,e){var n=e*Math.PI/180,i=t.plain(),r=i.width,a=i.height,o=r*Math.cos(n)+a*Math.sin(n),s=r*Math.sin(n)+a*Math.cos(n);return new re(i.x,i.y,o,s)}function Il(t,e){if("image"!==this.type){var n=this.style,i=this.shape;i&&"line"===i.symbolType?n.stroke=t:this.__isEmptyBrush?(n.stroke=t,n.fill=e||"#fff"):(n.fill&&(n.fill=t),n.stroke&&(n.stroke=t)),this.dirty(!1)}}function Tl(t,e,n,i,r,a,o){var s=0===t.indexOf("empty");s&&(t=t.substr(5,1).toLowerCase()+t.substr(6));var l;return l=0===t.indexOf("image://")?Ei(t.slice(8),new re(e,n,i,r),o?"center":"cover"):0===t.indexOf("path://")?Bi(t.slice(7),{},new re(e,n,i,r),o?"center":"cover"):new tx({shape:{symbolType:t,x:e,y:n,width:i,height:r}}),l.__isEmptyBrush=s,l.setColor=Il,l.setColor(a),l}function Cl(t,e){return Math.abs(t-e)<ix}function Al(t,e,n){var i=0,r=t[0];if(!r)return!1;for(var a=1;a<t.length;a++){var o=t[a];i+=gi(r[0],r[1],o[0],o[1],e,n),r=o}var s=t[0];return Cl(r[0],s[0])&&Cl(r[1],s[1])||(i+=gi(r[0],r[1],s[0],s[1],e,n)),0!==i}function Dl(t,e,n){if(this.name=t,this.geometries=e,n)n=[n[0],n[1]];else{var i=this.getBoundingRect();n=[i.x+i.width/2,i.y+i.height/2]}this.center=n}function kl(t){if(!t.UTF8Encoding)return t;var e=t.UTF8Scale;null==e&&(e=1024);for(var n=t.features,i=0;i<n.length;i++)for(var r=n[i].geometry,a=r.coordinates,o=r.encodeOffsets,s=0;s<a.length;s++){var l=a[s];if("Polygon"===r.type)a[s]=Pl(l,o[s],e);else if("MultiPolygon"===r.type)for(var h=0;h<l.length;h++){var u=l[h];l[h]=Pl(u,o[s][h],e)}}return t.UTF8Encoding=!1,t}function Pl(t,e,n){for(var i=[],r=e[0],a=e[1],o=0;o<t.length;o+=2){var s=t.charCodeAt(o)-64,l=t.charCodeAt(o+1)-64;s=s>>1^-(1&s),l=l>>1^-(1&l),r=s+=r,a=l+=a,i.push([s/n,l/n])}return i}function Ll(t){return"category"===t.type?zl(t):Rl(t)}function Ol(t,e){return"category"===t.type?El(t,e):{ticks:t.scale.getTicks()}}function zl(t){var e=t.getLabelModel(),n=Bl(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:n.labelCategoryInterval}:n}function Bl(t,e){var n=Nl(t,"labels"),i=Yl(e),r=Fl(n,i);if(r)return r;var a,o;return _(i)?a=Xl(t,i):(o="auto"===i?Wl(t):i,a=Zl(t,o)),Vl(n,i,{labels:a,labelCategoryInterval:o})}function El(t,e){var n=Nl(t,"ticks"),i=Yl(e),r=Fl(n,i);if(r)return r;var a,o;if((!e.get("show")||t.scale.isBlank())&&(a=[]),_(i))a=Xl(t,i,!0);else if("auto"===i){var s=Bl(t,t.getLabelModel());o=s.labelCategoryInterval,a=p(s.labels,function(t){return t.tickValue})}else o=i,a=Zl(t,o,!0);return Vl(n,i,{ticks:a,tickCategoryInterval:o})}function Rl(t){var e=t.scale.getTicks(),n=wl(t);return{labels:p(e,function(e,i){return{formattedLabel:n(e,i),rawLabel:t.scale.getLabel(e),tickValue:e}})}}function Nl(t,e){return ax(t)[e]||(ax(t)[e]=[])}function Fl(t,e){for(var n=0;n<t.length;n++)if(t[n].key===e)return t[n].value}function Vl(t,e,n){return t.push({key:e,value:n}),n}function Wl(t){var e=ax(t).autoInterval;return null!=e?e:ax(t).autoInterval=t.calculateCategoryInterval()}function Hl(t){var e=Gl(t),n=wl(t),i=(e.axisRotate-e.labelRotate)/180*Math.PI,r=t.scale,a=r.getExtent(),o=r.count();if(a[1]-a[0]<1)return 0;var s=1;o>40&&(s=Math.max(1,Math.floor(o/40)));for(var l=a[0],h=t.dataToCoord(l+1)-t.dataToCoord(l),u=Math.abs(h*Math.cos(i)),c=Math.abs(h*Math.sin(i)),d=0,f=0;l<=a[1];l+=s){var p=0,g=0,v=Me(n(l),e.font,"center","top");p=1.3*v.width,g=1.3*v.height,d=Math.max(d,p,7),f=Math.max(f,g,7)}var m=d/u,y=f/c;isNaN(m)&&(m=1/0),isNaN(y)&&(y=1/0);var x=Math.max(0,Math.floor(Math.min(m,y))),_=ax(t.model),w=_.lastAutoInterval,b=_.lastTickCount;return null!=w&&null!=b&&Math.abs(w-x)<=1&&Math.abs(b-o)<=1&&w>x?x=w:(_.lastTickCount=o,_.lastAutoInterval=x),x}function Gl(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}function Zl(t,e,n){function i(t){l.push(n?t:{formattedLabel:r(t),rawLabel:a.getLabel(t),tickValue:t})}var r=wl(t),a=t.scale,o=a.getExtent(),s=t.getLabelModel(),l=[],h=Math.max((e||0)+1,1),u=o[0],c=a.count();0!==u&&h>1&&c/h>2&&(u=Math.round(Math.ceil(u/h)*h));var d={min:s.get("showMinLabel"),max:s.get("showMaxLabel")};d.min&&u!==o[0]&&i(o[0]);for(var f=u;f<=o[1];f+=h)i(f);return d.max&&f!==o[1]&&i(o[1]),l}function Xl(t,e,n){var i=t.scale,r=wl(t),a=[];return f(i.getTicks(),function(t){var o=i.getLabel(t);e(t,o)&&a.push(n?t:{formattedLabel:r(t),rawLabel:o,tickValue:t})}),a}function Yl(t){var e=t.get("interval");return null==e?"auto":e}function ql(t,e){var n=(t[1]-t[0])/e/2;t[0]+=n,t[1]-=n}function jl(t,e,n,i,r){function a(t,e){return u?t>e:e>t}var o=e.length;if(t.onBand&&!i&&o){var s,l=t.getExtent();if(1===o)e[0].coord=l[0],s=e[1]={coord:l[0]};else{var h=e[1].coord-e[0].coord;f(e,function(t){t.coord-=h/2;var e=e||0;e%2>0&&(t.coord-=h/(2*(e+1)))}),s={coord:e[o-1].coord+h},e.push(s)}var u=l[0]>l[1];a(e[0].coord,l[0])&&(r?e[0].coord=l[0]:e.shift()),r&&a(l[0],e[0].coord)&&e.unshift({coord:l[0]}),a(l[1],s.coord)&&(r?s.coord=l[1]:e.pop()),r&&a(s.coord,l[1])&&e.push({coord:l[1]})}}function Ul(t){return this._axes[t]}function $l(t){cx.call(this,t)}function Kl(t,e){return e.type||(e.data?"category":"value")}function Ql(t,e){return t.getCoordSysModel()===e}function Jl(t,e,n){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,n),this.model=t}function th(t,e,n,i){function r(t){return t.dim+"_"+t.index}n.getAxesOnZeroOf=function(){return a?[a]:[]};var a,o=t[e],s=n.model,l=s.get("axisLine.onZero"),h=s.get("axisLine.onZeroAxisIndex");if(l){if(null!=h)eh(o[h])&&(a=o[h]);else for(var u in o)if(o.hasOwnProperty(u)&&eh(o[u])&&!i[r(o[u])]){a=o[u];break}a&&(i[r(a)]=!0)}}function eh(t){return t&&"category"!==t.type&&"time"!==t.type&&_l(t)}function nh(t,e){var n=t.getExtent(),i=n[0]+n[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return i-t+e}}function ih(t){return p(_x,function(e){return t.getReferringComponents(e)[0]})}function rh(t){return"cartesian2d"===t.get("coordinateSystem")}function ah(t,e){var n=t.mapDimension("defaultedLabel",!0),i=n.length;if(1===i)return ja(t,e,n[0]);if(i){for(var r=[],a=0;a<n.length;a++){var o=ja(t,e,n[a]);r.push(o)}return r.join(" ")}}function oh(t,e,n,i,r,a){rr(t,e,n.getModel("label"),n.getModel("emphasis.label"),{labelFetcher:r,labelDataIndex:a,defaultText:ah(r.getData(),a),isRectText:!0,autoColor:i}),sh(t),sh(e)}function sh(t,e){"outside"===t.textPosition&&(t.textPosition=e)}function lh(t,e,n){n.style.text=null,pr(n,{shape:{width:0}},e,t,function(){n.parent&&n.parent.remove(n)})}function hh(t,e,n){n.style.text=null,pr(n,{shape:{r:n.shape.r0}},e,t,function(){n.parent&&n.parent.remove(n)})}function uh(t,e,n,i,r,a,o,l){var h=e.getItemVisual(n,"color"),u=e.getItemVisual(n,"opacity"),c=i.getModel("itemStyle"),d=i.getModel("emphasis.itemStyle").getBarItemStyle();l||t.setShape("r",c.get("barBorderRadius")||0),t.useStyle(s({fill:h,opacity:u},c.getBarItemStyle()));var f=i.getShallow("cursor");f&&t.attr("cursor",f);var p=o?r.height>0?"bottom":"top":r.width>0?"left":"right";l||oh(t.style,d,i,h,a,n,p),nr(t,d)}function ch(t,e){var n=t.get(Sx)||0;return Math.min(n,Math.abs(e.width),Math.abs(e.height))}function dh(t,e,n){var i=t.getData(),r=[],a=i.getLayout("valueAxisHorizontal")?1:0;r[1-a]=i.getLayout("valueAxisStart");var o=new Cx({shape:{points:i.getLayout("largePoints")},incremental:!!n,__startPoint:r,__valueIdx:a});e.add(o),fh(o,t,i)}function fh(t,e,n){var i=n.getVisual("borderColor")||n.getVisual("color"),r=e.getModel("itemStyle").getItemStyle(["color","borderColor"]);t.useStyle(r),t.style.fill=null,t.style.stroke=i,t.style.lineWidth=n.getLayout("barWidth")}function ph(t){var e={componentType:t.mainType,componentIndex:t.componentIndex};return e[t.mainType+"Index"]=t.componentIndex,e}function gh(t,e,n,i){var r,a,o=Or(n-t.rotation),s=i[0]>i[1],l="start"===e&&!s||"start"!==e&&s;return zr(o-Ax/2)?(a=l?"bottom":"top",r="center"):zr(o-1.5*Ax)?(a=l?"top":"bottom",r="center"):(a="middle",r=1.5*Ax>o&&o>Ax/2?l?"left":"right":l?"right":"left"),{rotation:o,textAlign:r,textVerticalAlign:a}}function vh(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)}function mh(t,e,n){var i=t.get("axisLabel.showMinLabel"),r=t.get("axisLabel.showMaxLabel");e=e||[],n=n||[];var a=e[0],o=e[1],s=e[e.length-1],l=e[e.length-2],h=n[0],u=n[1],c=n[n.length-1],d=n[n.length-2];!1===i?(yh(a),yh(h)):xh(a,o)&&(i?(yh(o),yh(u)):(yh(a),yh(h))),!1===r?(yh(s),yh(c)):xh(l,s)&&(r?(yh(l),yh(d)):(yh(s),yh(c)))}function yh(t){t&&(t.ignore=!0)}function xh(t,e){var n=t&&t.getBoundingRect().clone(),i=e&&e.getBoundingRect().clone();if(n&&i){var r=gt([]);return xt(r,r,-t.rotation),n.applyTransform(mt([],r,t.getLocalTransform())),i.applyTransform(mt([],r,e.getLocalTransform())),n.intersect(i)}}function _h(t){return"middle"===t||"center"===t}function wh(t,e,n){var i=e.axis;if(e.get("axisTick.show")&&!i.scale.isBlank()){for(var r=e.getModel("axisTick"),a=r.getModel("lineStyle"),o=r.get("length"),l=i.getTicksCoords(),h=[],u=[],c=t._transform,d=[],f=0;f<l.length;f++){var p=l[f].coord;h[0]=p,h[1]=0,u[0]=p,u[1]=n.tickDirection*o,c&&(K(h,h,c),K(u,u,c));var g=new wg(Fi({anid:"tick_"+l[f].tickValue,shape:{x1:h[0],y1:h[1],x2:u[0],y2:u[1]},style:s(a.getLineStyle(),{stroke:e.get("axisLine.lineStyle.color")}),z2:2,silent:!0}));t.group.add(g),d.push(g)}return d}}function bh(t,e,n){var i=e.axis;if(C(n.axisLabelShow,e.get("axisLabel.show"))&&!i.scale.isBlank()){var r=e.getModel("axisLabel"),a=r.get("margin"),o=i.getViewLabels(),s=(C(n.labelRotate,r.get("rotate"))||0)*Ax/180,l=Px(n.rotation,s,n.labelDirection),h=e.getCategories(!0),u=[],c=vh(e),d=e.get("triggerEvent");return f(o,function(o,s){var f=o.tickValue,p=o.formattedLabel,g=o.rawLabel,v=r;h&&h[f]&&h[f].textStyle&&(v=new wr(h[f].textStyle,r,e.ecModel));var m=v.getTextColor()||e.get("axisLine.lineStyle.color"),y=[i.dataToCoord(f),n.labelOffset+n.labelDirection*a],x=new ug({anid:"label_"+f,position:y,rotation:l.rotation,silent:c,z2:10});ar(x.style,v,{text:p,textAlign:v.getShallow("align",!0)||l.textAlign,textVerticalAlign:v.getShallow("verticalAlign",!0)||v.getShallow("baseline",!0)||l.textVerticalAlign,textFill:"function"==typeof m?m("category"===i.type?g:"value"===i.type?f+"":f,s):m}),d&&(x.eventData=ph(e),x.eventData.targetType="axisLabel",x.eventData.value=g),t._dumbGroup.add(x),x.updateTransform(),u.push(x),t.group.add(x),x.decomposeTransform()}),u}}function Mh(t,e){var n={axesInfo:{},seriesInvolved:!1,coordSysAxesInfo:{},coordSysMap:{}};return Sh(n,t,e),n.seriesInvolved&&Th(n,t),n}function Sh(t,e,n){var i=e.getComponent("tooltip"),r=e.getComponent("axisPointer"),a=r.get("link",!0)||[],o=[];Lx(n.getCoordinateSystems(),function(n){function s(i,s,l){var c=l.model.getModel("axisPointer",r),d=c.get("show");if(d&&("auto"!==d||i||Lh(c))){null==s&&(s=c.get("triggerTooltip"));var f=(c=i?Ih(l,u,r,e,i,s):c).get("snap"),p=Oh(l.model),g=s||f||"category"===l.type,v=t.axesInfo[p]={key:p,axis:l,coordSys:n,axisPointerModel:c,triggerTooltip:s,involveSeries:g,snap:f,useHandle:Lh(c),seriesModels:[]};h[p]=v,t.seriesInvolved|=g;var m=Ch(a,l);if(null!=m){var y=o[m]||(o[m]={axesInfo:{}});y.axesInfo[p]=v,y.mapper=a[m].mapper,v.linkGroup=y}}}if(n.axisPointerEnabled){var l=Oh(n.model),h=t.coordSysAxesInfo[l]={};t.coordSysMap[l]=n;var u=n.model.getModel("tooltip",i);if(Lx(n.getAxes(),Ox(s,!1,null)),n.getTooltipAxes&&i&&u.get("show")){var c="axis"===u.get("trigger"),d="cross"===u.get("axisPointer.type"),f=n.getTooltipAxes(u.get("axisPointer.axis"));(c||d)&&Lx(f.baseAxes,Ox(s,!d||"cross",c)),d&&Lx(f.otherAxes,Ox(s,"cross",!1))}}})}function Ih(t,e,n,r,a,o){var l=e.getModel("axisPointer"),h={};Lx(["type","snap","lineStyle","shadowStyle","label","animation","animationDurationUpdate","animationEasingUpdate","z"],function(t){h[t]=i(l.get(t))}),h.snap="category"!==t.type&&!!o,"cross"===l.get("type")&&(h.type="line");var u=h.label||(h.label={});if(null==u.show&&(u.show=!1),"cross"===a){var c=l.get("label.show");if(u.show=null==c||c,!o){var d=h.lineStyle=l.get("crossStyle");d&&s(u,d.textStyle)}}return t.model.getModel("axisPointer",new wr(h,n,r))}function Th(t,e){e.eachSeries(function(e){var n=e.coordinateSystem,i=e.get("tooltip.trigger",!0),r=e.get("tooltip.show",!0);n&&"none"!==i&&!1!==i&&"item"!==i&&!1!==r&&!1!==e.get("axisPointer.show",!0)&&Lx(t.coordSysAxesInfo[Oh(n.model)],function(t){var i=t.axis;n.getAxis(i.dim)===i&&(t.seriesModels.push(e),null==t.seriesDataCount&&(t.seriesDataCount=0),t.seriesDataCount+=e.getData().count())})},this)}function Ch(t,e){for(var n=e.model,i=e.dim,r=0;r<t.length;r++){var a=t[r]||{};if(Ah(a[i+"AxisId"],n.id)||Ah(a[i+"AxisIndex"],n.componentIndex)||Ah(a[i+"AxisName"],n.name))return r}}function Ah(t,e){return"all"===t||x(t)&&h(t,e)>=0||t===e}function Dh(t){var e=kh(t);if(e){var n=e.axisPointerModel,i=e.axis.scale,r=n.option,a=n.get("status"),o=n.get("value");null!=o&&(o=i.parse(o));var s=Lh(n);null==a&&(r.status=s?"show":"hide");var l=i.getExtent().slice();l[0]>l[1]&&l.reverse(),(null==o||o>l[1])&&(o=l[1]),o<l[0]&&(o=l[0]),r.value=o,s&&(r.status=e.axis.scale.isBlank()?"hide":"show")}}function kh(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo;return e&&e.axesInfo[Oh(t)]}function Ph(t){var e=kh(t);return e&&e.axisPointerModel}function Lh(t){return!!t.get("handle.show")}function Oh(t){return t.type+"||"+t.id}function zh(t,e,n,i,r,a){var o=zx.getAxisPointerClass(t.axisPointerClass);if(o){var s=Ph(e);s?(t._axisPointer||(t._axisPointer=new o)).render(e,s,i,a):Bh(t,i)}}function Bh(t,e,n){var i=t._axisPointer;i&&i.dispose(e,n),t._axisPointer=null}function Eh(t,e,n){n=n||{};var i=t.coordinateSystem,r=e.axis,a={},o=r.getAxesOnZeroOf()[0],s=r.position,l=o?"onZero":s,h=r.dim,u=i.getRect(),c=[u.x,u.x+u.width,u.y,u.y+u.height],d={left:0,right:1,top:0,bottom:1,onZero:2},f=e.get("offset")||0,p="x"===h?[c[2]-f,c[3]+f]:[c[0]-f,c[1]+f];if(o){var g=o.toGlobalCoord(o.dataToCoord(0));p[d.onZero]=Math.max(Math.min(g,p[1]),p[0])}a.position=["y"===h?p[d[l]]:c[0],"x"===h?p[d[l]]:c[3]],a.rotation=Math.PI/2*("x"===h?0:1);var v={top:-1,bottom:1,left:-1,right:1};a.labelDirection=a.tickDirection=a.nameDirection=v[s],a.labelOffset=o?p[d[s]]-p[d.onZero]:0,e.get("axisTick.inside")&&(a.tickDirection=-a.tickDirection),C(n.labelInside,e.get("axisLabel.inside"))&&(a.labelDirection=-a.labelDirection);var m=e.get("axisLabel.rotate");return a.labelRotate="top"===l?-m:m,a.z2=1,a}function Rh(t,e,n){rf.call(this),this.updateData(t,e,n)}function Nh(t){return[t[0]/2,t[1]/2]}function Fh(t,e){this.parent.drift(t,e)}function Vh(){!Ki(this)&&Hh.call(this)}function Wh(){!Ki(this)&&Gh.call(this)}function Hh(){if(!this.incremental&&!this.useHoverLayer){var t=this.__symbolOriginalScale,e=t[1]/t[0];this.animateTo({scale:[Math.max(1.1*t[0],t[0]+3),Math.max(1.1*t[1],t[1]+3*e)]},400,"elasticOut")}}function Gh(){this.incremental||this.useHoverLayer||this.animateTo({scale:this.__symbolOriginalScale},400,"elasticOut")}function Zh(t){this.group=new rf,this._symbolCtor=t||Rh}function Xh(t,e,n,i){return!(!e||isNaN(e[0])||isNaN(e[1])||i.isIgnore&&i.isIgnore(n)||i.clipShape&&!i.clipShape.contain(e[0],e[1])||"none"===t.getItemVisual(n,"symbol"))}function Yh(t){return null==t||b(t)||(t={isIgnore:t}),t||{}}function qh(t){var e=t.hostModel;return{itemStyle:e.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:e.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label"),cursorStyle:e.get("cursor")}}function jh(t,e,n){var i,r=t.getBaseAxis(),a=t.getOtherAxis(r),o=Uh(a,n),s=r.dim,l=a.dim,h=e.mapDimension(l),u=e.mapDimension(s),c="x"===l||"radius"===l?1:0,d=p(t.dimensions,function(t){return e.mapDimension(t)}),f=e.getCalculationInfo("stackResultDimension");return(i|=Ys(e,d[0]))&&(d[0]=f),(i|=Ys(e,d[1]))&&(d[1]=f),{dataDimsForPoint:d,valueStart:o,valueAxisDim:l,baseAxisDim:s,stacked:!!i,valueDim:h,baseDim:u,baseDataOffset:c,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function Uh(t,e){var n=0,i=t.scale.getExtent();return"start"===e?n=i[0]:"end"===e?n=i[1]:i[0]>0?n=i[0]:i[1]<0&&(n=i[1]),n}function $h(t,e,n,i){var r=NaN;t.stacked&&(r=n.get(n.getCalculationInfo("stackedOverDimension"),i)),isNaN(r)&&(r=t.valueStart);var a=t.baseDataOffset,o=[];return o[a]=n.get(t.baseDim,i),o[1-a]=r,e.dataToPoint(o)}function Kh(t,e){var n=[];return e.diff(t).add(function(t){n.push({cmd:"+",idx:t})}).update(function(t,e){n.push({cmd:"=",idx:e,idx1:t})}).remove(function(t){n.push({cmd:"-",idx:t})}).execute(),n}function Qh(t){return isNaN(t[0])||isNaN(t[1])}function Jh(t,e,n,i,r,a,o,s,l,h){return"none"!==h&&h?tu.apply(this,arguments):eu.apply(this,arguments)}function tu(t,e,n,i,r,a,o,s,l,h,u){for(var c=0,d=n,f=0;i>f;f++){var p=e[d];if(d>=r||0>d)break;if(Qh(p)){if(u){d+=a;continue}break}if(d===n)t[a>0?"moveTo":"lineTo"](p[0],p[1]);else if(l>0){var g=e[c],v="y"===h?1:0,m=(p[v]-g[v])*l;$x(Qx,g),Qx[v]=g[v]+m,$x(Jx,p),Jx[v]=p[v]-m,t.bezierCurveTo(Qx[0],Qx[1],Jx[0],Jx[1],p[0],p[1])}else t.lineTo(p[0],p[1]);c=d,d+=a}return f}function eu(t,e,n,i,r,a,o,s,l,h,u){for(var c=0,d=n,f=0;i>f;f++){var p=e[d];if(d>=r||0>d)break;if(Qh(p)){if(u){d+=a;continue}break}if(d===n)t[a>0?"moveTo":"lineTo"](p[0],p[1]),$x(Qx,p);else if(l>0){var g=d+a,v=e[g];if(u)for(;v&&Qh(e[g]);)v=e[g+=a];var m=.5,y=e[c];if(!(v=e[g])||Qh(v))$x(Jx,p);else{Qh(v)&&!u&&(v=p),Z(Kx,v,y);var x,_;if("x"===h||"y"===h){var w="x"===h?0:1;x=Math.abs(p[w]-y[w]),_=Math.abs(p[w]-v[w])}else x=pd(p,y),_=pd(p,v);Ux(Jx,p,Kx,-l*(1-(m=_/(_+x))))}qx(Qx,Qx,s),jx(Qx,Qx,o),qx(Jx,Jx,s),jx(Jx,Jx,o),t.bezierCurveTo(Qx[0],Qx[1],Jx[0],Jx[1],p[0],p[1]),Ux(Qx,p,Kx,l*m)}else t.lineTo(p[0],p[1]);c=d,d+=a}return f}function nu(t,e){var n=[1/0,1/0],i=[-1/0,-1/0];if(e)for(var r=0;r<t.length;r++){var a=t[r];a[0]<n[0]&&(n[0]=a[0]),a[1]<n[1]&&(n[1]=a[1]),a[0]>i[0]&&(i[0]=a[0]),a[1]>i[1]&&(i[1]=a[1])}return{min:e?n:i,max:e?i:n}}function iu(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++){var i=t[n],r=e[n];if(i[0]!==r[0]||i[1]!==r[1])return}return!0}}function ru(t){return"number"==typeof t?t:t?.5:0}function au(t){var e=t.getGlobalExtent();if(t.onBand){var n=t.getBandWidth()/2-1,i=e[1]>e[0]?1:-1;e[0]+=i*n,e[1]-=i*n}return e}function ou(t,e,n){if(!n.valueDim)return[];for(var i=[],r=0,a=e.count();a>r;r++)i.push($h(n,t,e,r));return i}function su(t,e,n,i){var r=au(t.getAxis("x")),a=au(t.getAxis("y")),o=t.getBaseAxis().isHorizontal(),s=Math.min(r[0],r[1]),l=Math.min(a[0],a[1]),h=Math.max(r[0],r[1])-s,u=Math.max(a[0],a[1])-l;if(n)s-=.5,h+=.5,l-=.5,u+=.5;else{var c=i.get("lineStyle.width")||2,d=i.get("clipOverflow")?c/2:Math.max(h,u);o?(l-=d,u+=2*d):(s-=d,h+=2*d)}var f=new _g({shape:{x:s,y:l,width:h,height:u}});return e&&(f.shape[o?"width":"height"]=0,gr(f,{shape:{width:h,height:u}},i)),f}function lu(t,e,n,i){var r=t.getAngleAxis(),a=t.getRadiusAxis().getExtent().slice();a[0]>a[1]&&a.reverse();var o=r.getExtent(),s=Math.PI/180;n&&(a[0]-=.5,a[1]+=.5);var l=new pg({shape:{cx:Ar(t.cx,1),cy:Ar(t.cy,1),r0:Ar(a[0],1),r:Ar(a[1],1),startAngle:-o[0]*s,endAngle:-o[1]*s,clockwise:r.inverse}});return e&&(l.shape.endAngle=-o[0]*s,gr(l,{shape:{endAngle:-o[1]*s}},i)),l}function hu(t,e,n,i){return"polar"===t.type?lu(t,e,n,i):su(t,e,n,i)}function uu(t,e,n){for(var i=e.getBaseAxis(),r="x"===i.dim||"radius"===i.dim?0:1,a=[],o=0;o<t.length-1;o++){var s=t[o+1],l=t[o];a.push(l);var h=[];switch(n){case"end":h[r]=s[r],h[1-r]=l[1-r],a.push(h);break;case"middle":var u=(l[r]+s[r])/2,c=[];h[r]=c[r]=u,h[1-r]=l[1-r],c[1-r]=s[1-r],a.push(h),a.push(c);break;default:h[r]=l[r],h[1-r]=s[1-r],a.push(h)}}return t[o]&&a.push(t[o]),a}function cu(t,e){var n=t.getVisual("visualMeta");if(n&&n.length&&t.count()&&"cartesian2d"===e.type){for(var i,r,a=n.length-1;a>=0;a--){var o=n[a].dimension,s=t.dimensions[o],l=t.getDimensionInfo(s);if("x"===(i=l&&l.coordDim)||"y"===i){r=n[a];break}}if(r){var h=e.getAxis(i),u=p(r.stops,function(t){return{coord:h.toGlobalCoord(h.dataToCoord(t.value)),color:t.color}}),c=u.length,d=r.outerColors.slice();c&&u[0].coord>u[c-1].coord&&(u.reverse(),d.reverse());var g=u[0].coord-10,v=u[c-1].coord+10,m=v-g;if(.001>m)return"transparent";f(u,function(t){t.offset=(t.coord-g)/m}),u.push({offset:c?u[c-1].offset:.5,color:d[1]||"transparent"}),u.unshift({offset:c?u[0].offset:.5,color:d[0]||"transparent"});var y=new Cg(0,0,0,0,u,!0);return y[i]=g,y[i+"2"]=v,y}}}function du(t,e,n){var i=t.get("showAllSymbol"),r="auto"===i;if(!i||r){var a=n.getAxesByScale("ordinal")[0];if(a&&(!r||!fu(a,e))){var o=e.mapDimension(a.dim),s={};return f(a.getViewLabels(),function(t){s[t.tickValue]=1}),function(t){return!s.hasOwnProperty(e.get(o,t))}}}}function fu(t,e){var n=t.getExtent(),i=Math.abs(n[1]-n[0])/t.scale.count();isNaN(i)&&(i=0);for(var r=e.count(),a=Math.max(1,Math.round(r/5)),o=0;r>o;o+=a)if(1.5*Rh.getSymbolSize(e,o)[t.isHorizontal()?1:0]>i)return!1;return!0}function pu(t,e,n,i){var r=e.getData(),a=this.dataIndex,o=r.getName(a),s=e.get("selectedOffset");i.dispatchAction({type:"pieToggleSelect",from:t,name:o,seriesId:e.id}),r.each(function(t){gu(r.getItemGraphicEl(t),r.getItemLayout(t),e.isSelected(r.getName(t)),s,n)})}function gu(t,e,n,i,r){var a=(e.startAngle+e.endAngle)/2,o=Math.cos(a),s=Math.sin(a),l=n?i:0,h=[o*l,s*l];r?t.animate().when(200,{position:h}).start("bounceOut"):t.attr("position",h)}function vu(t,e){function n(){a.ignore=a.hoverIgnore,o.ignore=o.hoverIgnore}function i(){a.ignore=a.normalIgnore,o.ignore=o.normalIgnore}rf.call(this);var r=new pg({z2:2}),a=new xg,o=new ug;this.add(r),this.add(a),this.add(o),this.updateData(t,e,!0),this.on("emphasis",n).on("normal",i).on("mouseover",n).on("mouseout",i)}function mu(t,e,n,i,r,a,o){function s(e,n){for(var i=e;i>=0&&(t[i].y-=n,!(i>0&&t[i].y>t[i-1].y+t[i-1].height));i--);}function l(t,e,n,i,r,a){for(var o=e?Number.MAX_VALUE:0,s=0,l=t.length;l>s;s++)if("center"!==t[s].position){var h=Math.abs(t[s].y-i),u=t[s].len,c=t[s].len2,d=r+u>h?Math.sqrt((r+u+c)*(r+u+c)-h*h):Math.abs(t[s].x-n);e&&d>=o&&(d=o-10),!e&&o>=d&&(d=o+10),t[s].x=n+d*a,o=d}}t.sort(function(t,e){return t.y-e.y});for(var h,u=0,c=t.length,d=[],f=[],p=0;c>p;p++)0>(h=t[p].y-u)&&function(e,n,i){for(var r=e;n>r;r++)if(t[r].y+=i,r>e&&n>r+1&&t[r+1].y>t[r].y+t[r].height)return void s(r,i/2);s(n-1,i/2)}(p,c,-h),u=t[p].y+t[p].height;0>o-u&&s(c-1,u-o);for(p=0;c>p;p++)t[p].y>=n?f.push(t[p]):d.push(t[p]);l(d,!1,e,n,i,r),l(f,!0,e,n,i,r)}function yu(t,e,n,i,r,a){for(var o=[],s=[],l=0;l<t.length;l++)t[l].x<e?o.push(t[l]):s.push(t[l]);mu(s,e,n,i,1,r,a),mu(o,e,n,i,-1,r,a);for(l=0;l<t.length;l++){var h=t[l].linePoints;if(h){var u=h[1][0]-h[2][0];h[2][0]=t[l].x<e?t[l].x+3:t[l].x-3,h[1][1]=h[2][1]=t[l].y,h[1][0]=h[2][0]+u}}}function xu(t,e,n){var i,r={},a="toggleSelected"===t;return n.eachComponent("legend",function(n){a&&null!=i?n[i?"select":"unSelect"](e.name):(n[t](e.name),i=n.isSelected(e.name)),f(n.getData(),function(t){var e=t.get("name");if("\n"!==e&&""!==e){var i=n.isSelected(e);r[e]=r.hasOwnProperty(e)?r[e]&&i:i}})}),{name:e.name,selected:r}}function _u(t,e){var n=qg(e.get("padding")),i=e.getItemStyle(["color","opacity"]);return i.fill=e.get("backgroundColor"),t=new _g({shape:{x:t.x-n[3],y:t.y-n[0],width:t.width+n[1]+n[3],height:t.height+n[0]+n[2],r:e.get("borderRadius")},style:i,silent:!0,z2:-1})}function wu(t,e){e.dispatchAction({type:"legendToggleSelect",name:t})}function bu(t,e,n,i){var r=n.getZr().storage.getDisplayList()[0];r&&r.useHoverLayer||n.dispatchAction({type:"highlight",seriesName:t,name:e,excludeSeriesId:i})}function Mu(t,e,n,i){var r=n.getZr().storage.getDisplayList()[0];r&&r.useHoverLayer||n.dispatchAction({type:"downplay",seriesName:t,name:e,excludeSeriesId:i})}function Su(t,e,n){var i=[1,1];i[t.getOrient().index]=0,Ur(e,n,{type:"box",ignoreSize:i})}function Iu(t,e,n,i,r){var a=t.axis;if(!a.scale.isBlank()&&a.containData(e)){if(!t.involveSeries)return void n.showPointer(t,e);var s=Tu(e,t),l=s.payloadBatch,h=s.snapToValue;l[0]&&null==r.seriesIndex&&o(r,l[0]),!i&&t.snap&&a.containData(h)&&null!=h&&(e=h),n.showPointer(t,e,l,r),n.showTooltip(t,s,h)}}function Tu(t,e){var n=e.axis,i=n.dim,r=t,a=[],o=Number.MAX_VALUE,s=-1;return M_(e.seriesModels,function(e){var l,h,u=e.getData().mapDimension(i,!0);if(e.getAxisTooltipData){var c=e.getAxisTooltipData(u,t,n);h=c.dataIndices,l=c.nestestValue}else{if(!(h=e.getData().indicesOfNearest(u[0],t,"category"===n.type?.5:null)).length)return;l=e.getData().get(u[0],h[0])}if(null!=l&&isFinite(l)){var d=t-l,f=Math.abs(d);o>=f&&((o>f||d>=0&&0>s)&&(o=f,s=d,r=l,a.length=0),M_(h,function(t){a.push({seriesIndex:e.seriesIndex,dataIndexInside:t,dataIndex:e.getData().getRawIndex(t)})}))}}),{payloadBatch:a,snapToValue:r}}function Cu(t,e,n,i){t[e.key]={value:n,payloadBatch:i}}function Au(t,e,n,i){var r=n.payloadBatch,a=e.axis,o=a.model,s=e.axisPointerModel;if(e.triggerTooltip&&r.length){var l=e.coordSys.model,h=Oh(l),u=t.map[h];u||(u=t.map[h]={coordSysId:l.id,coordSysIndex:l.componentIndex,coordSysType:l.type,coordSysMainType:l.mainType,dataByAxis:[]},t.list.push(u)),u.dataByAxis.push({axisDim:a.dim,axisIndex:o.componentIndex,axisType:o.type,axisId:o.id,value:i,valueLabelOpt:{precision:s.get("label.precision"),formatter:s.get("label.formatter")},seriesDataIndices:r.slice()})}}function Du(t,e,n){var i=n.axesInfo=[];M_(e,function(e,n){var r=e.axisPointerModel.option,a=t[n];a?(!e.useHandle&&(r.status="show"),r.value=a.value,r.seriesDataIndices=(a.payloadBatch||[]).slice()):!e.useHandle&&(r.status="hide"),"show"===r.status&&i.push({axisDim:e.axis.dim,axisIndex:e.axis.model.componentIndex,value:r.value})})}function ku(t,e,n,i){if(!zu(e)&&t.list.length){var r=((t.list[0].dataByAxis[0]||{}).seriesDataIndices||[])[0]||{};i({type:"showTip",escapeConnect:!0,x:e[0],y:e[1],tooltipOption:n.tooltipOption,position:n.position,dataIndexInside:r.dataIndexInside,dataIndex:r.dataIndex,seriesIndex:r.seriesIndex,dataByCoordSys:t.list})}else i({type:"hideTip"})}function Pu(t,e,n){var i=n.getZr(),r="axisPointerLastHighlights",a=I_(i)[r]||{},o=I_(i)[r]={};M_(t,function(t){var e=t.axisPointerModel.option;"show"===e.status&&M_(e.seriesDataIndices,function(t){var e=t.seriesIndex+" | "+t.dataIndex;o[e]=t})});var s=[],l=[];f(a,function(t,e){!o[e]&&l.push(t)}),f(o,function(t,e){!a[e]&&s.push(t)}),l.length&&n.dispatchAction({type:"downplay",escapeConnect:!0,batch:l}),s.length&&n.dispatchAction({type:"highlight",escapeConnect:!0,batch:s})}function Lu(t,e){for(var n=0;n<(t||[]).length;n++){var i=t[n];if(e.axis.dim===i.axisDim&&e.axis.model.componentIndex===i.axisIndex)return i}}function Ou(t){var e=t.axis.model,n={},i=n.axisDim=t.axis.dim;return n.axisIndex=n[i+"AxisIndex"]=e.componentIndex,n.axisName=n[i+"AxisName"]=e.name,n.axisId=n[i+"AxisId"]=e.id,n}function zu(t){return!t||null==t[0]||isNaN(t[0])||null==t[1]||isNaN(t[1])}function Bu(t,e,n){if(!$c.node){var i=e.getZr();T_(i).records||(T_(i).records={}),Eu(i,e),(T_(i).records[t]||(T_(i).records[t]={})).handler=n}}function Eu(t,e){function n(n,i){t.on(n,function(n){var r=Vu(e);C_(T_(t).records,function(t){t&&i(t,n,r.dispatchAction)}),Ru(r.pendings,e)})}T_(t).initialized||(T_(t).initialized=!0,n("click",y(Fu,"click")),n("mousemove",y(Fu,"mousemove")),n("globalout",Nu))}function Ru(t,e){var n,i=t.showTip.length,r=t.hideTip.length;i?n=t.showTip[i-1]:r&&(n=t.hideTip[r-1]),n&&(n.dispatchAction=null,e.dispatchAction(n))}function Nu(t,e,n){t.handler("leave",null,n)}function Fu(t,e,n,i){e.handler(t,n,i)}function Vu(t){var e={showTip:[],hideTip:[]};return{dispatchAction:function n(i){var r=e[i.type];r?r.push(i):(i.dispatchAction=n,t.dispatchAction(i))},pendings:e}}function Wu(t,e){if(!$c.node){var n=e.getZr();(T_(n).records||{})[t]&&(T_(n).records[t]=null)}}function Hu(){}function Gu(t,e,n,i){Zu(D_(n).lastProp,i)||(D_(n).lastProp=i,e?pr(n,i,t):(n.stopAnimation(),n.attr(i)))}function Zu(t,e){if(b(t)&&b(e)){var n=!0;return f(e,function(e,i){n=n&&Zu(t[i],e)}),!!n}return t===e}function Xu(t,e){t[e.get("label.show")?"show":"hide"]()}function Yu(t){return{position:t.position.slice(),rotation:t.rotation||0}}function qu(t,e,n){var i=e.get("z"),r=e.get("zlevel");t&&t.traverse(function(t){"group"!==t.type&&(null!=i&&(t.z=i),null!=r&&(t.zlevel=r),t.silent=n)})}function ju(t){var e,n=t.get("type"),i=t.getModel(n+"Style");return"line"===n?(e=i.getLineStyle(),e.fill=null):"shadow"===n&&(e=i.getAreaStyle(),e.stroke=null),e}function Uu(t,e,n,i,r){var a=Ku(n.get("value"),e.axis,e.ecModel,n.get("seriesDataIndices"),{precision:n.get("label.precision"),formatter:n.get("label.formatter")}),o=n.getModel("label"),s=qg(o.get("padding")||0),l=o.getFont(),h=Me(a,l),u=r.position,c=h.width+s[1]+s[3],d=h.height+s[0]+s[2],f=r.align;"right"===f&&(u[0]-=c),"center"===f&&(u[0]-=c/2);var p=r.verticalAlign;"bottom"===p&&(u[1]-=d),"middle"===p&&(u[1]-=d/2),$u(u,c,d,i);var g=o.get("backgroundColor");g&&"auto"!==g||(g=e.get("axisLine.lineStyle.color")),t.label={shape:{x:0,y:0,width:c,height:d,r:o.get("borderRadius")},position:u.slice(),style:{text:a,textFont:l,textFill:o.getTextColor(),textPosition:"inside",fill:g,stroke:o.get("borderColor")||"transparent",lineWidth:o.get("borderWidth")||0,shadowBlur:o.get("shadowBlur"),shadowColor:o.get("shadowColor"),shadowOffsetX:o.get("shadowOffsetX"),shadowOffsetY:o.get("shadowOffsetY")},z2:10}}function $u(t,e,n,i){var r=i.getWidth(),a=i.getHeight();t[0]=Math.min(t[0]+e,r)-e,t[1]=Math.min(t[1]+n,a)-n,t[0]=Math.max(t[0],0),t[1]=Math.max(t[1],0)}function Ku(t,e,n,i,r){t=e.scale.parse(t);var a=e.scale.getLabel(t,{precision:r.precision}),o=r.formatter;if(o){var s={value:bl(e,t),seriesData:[]};f(i,function(t){var e=n.getSeriesByIndex(t.seriesIndex),i=t.dataIndexInside,r=e&&e.getDataParams(i);r&&s.seriesData.push(r)}),w(o)?a=o.replace("{value}",a):_(o)&&(a=o(s))}return a}function Qu(t,e,n){var i=pt();return xt(i,i,n.rotation),yt(i,i,n.position),mr([t.dataToCoord(e),(n.labelOffset||0)+(n.labelDirection||1)*(n.labelMargin||0)],i)}function Ju(t,e,n,i,r,a){var o=Dx.innerTextLayout(n.rotation,0,n.labelDirection);n.labelMargin=r.get("label.margin"),Uu(e,i,r,a,{position:Qu(i.axis,t,n),align:o.textAlign,verticalAlign:o.textVerticalAlign})}function tc(t,e,n){return n=n||0,{x1:t[n],y1:t[1-n],x2:e[n],y2:e[1-n]}}function ec(t,e,n){return n=n||0,{x:t[n],y:t[1-n],width:e[n],height:e[1-n]}}function nc(t,e){var n={};return n[e.dim+"AxisIndex"]=e.index,t.getCartesian(n)}function ic(t){return"x"===t.dim?0:1}function rc(t){var e="cubic-bezier(0.23, 1, 0.32, 1)",n="left "+t+"s "+e+",top "+t+"s "+e;return p(E_,function(t){return t+"transition:"+n}).join(";")}function ac(t){var e=[],n=t.get("fontSize"),i=t.getTextColor();return i&&e.push("color:"+i),e.push("font:"+t.getFont()),n&&e.push("line-height:"+Math.round(3*n/2)+"px"),z_(["decoration","align"],function(n){var i=t.get(n);i&&e.push("text-"+n+":"+i)}),e.join(";")}function oc(t){var e=[],n=t.get("transitionDuration"),i=t.get("backgroundColor"),r=t.getModel("textStyle"),a=t.get("padding");return n&&e.push(rc(n)),i&&($c.canvasSupported?e.push("background-Color:"+i):(e.push("background-Color:#"+Nt(i)),e.push("filter:alpha(opacity=70)"))),z_(["width","color","radius"],function(n){var i="border-"+n,r=B_(i),a=t.get(r);null!=a&&e.push(i+":"+a+("color"===n?"":"px"))}),e.push(ac(r)),null!=a&&e.push("padding:"+qg(a).join("px ")+"px"),e.join(";")+";"}function sc(t,e){if($c.wxa)return null;var n=document.createElement("div"),i=this._zr=e.getZr();this.el=n,this._x=e.getWidth()/2,this._y=e.getHeight()/2,t.appendChild(n),this._container=t,this._show=!1,this._hideTimeout;var r=this;n.onmouseenter=function(){r._enterable&&(clearTimeout(r._hideTimeout),r._show=!0),r._inContent=!0},n.onmousemove=function(e){if(e=e||window.event,!r._enterable){var n=i.handler;ot(t,e,!0),n.dispatch("mousemove",e)}},n.onmouseleave=function(){r._enterable&&r._show&&r.hideLater(r._hideDelay),r._inContent=!1}}function lc(t){this._zr=t.getZr(),this._show=!1,this._hideTimeout}function hc(t){for(var e=t.pop();t.length;){var n=t.pop();n&&(wr.isInstance(n)&&(n=n.get("tooltip",!0)),"string"==typeof n&&(n={formatter:n}),e=new wr(n,e,e.ecModel))}return e}function uc(t,e){return t.dispatchAction||m(e.dispatchAction,e)}function cc(t,e,n,i,r,a,o){var s=n.getOuterSize(),l=s.width,h=s.height;return null!=a&&(t+l+a>i?t-=l+a:t+=a),null!=o&&(e+h+o>r?e-=h+o:e+=o),[t,e]}function dc(t,e,n,i,r){var a=n.getOuterSize(),o=a.width,s=a.height;return t=Math.min(t+o,i)-o,e=Math.min(e+s,r)-s,t=Math.max(t,0),e=Math.max(e,0),[t,e]}function fc(t,e,n){var i=n[0],r=n[1],a=0,o=0,s=e.width,l=e.height;switch(t){case"inside":a=e.x+s/2-i/2,o=e.y+l/2-r/2;break;case"top":a=e.x+s/2-i/2,o=e.y-r-5;break;case"bottom":a=e.x+s/2-i/2,o=e.y+l+5;break;case"left":a=e.x-i-5,o=e.y+l/2-r/2;break;case"right":a=e.x+s+5,o=e.y+l/2-r/2}return[a,o]}function pc(t){return"center"===t||"middle"===t}function gc(t){return h(W_,t)>=0}function vc(t,e,n){function i(t,e){return h(e.nodes,t)>=0}function r(t,i){var r=!1;return e(function(e){f(n(t,e)||[],function(t){i.records[e.name][t]&&(r=!0)})}),r}function a(t,i){i.nodes.push(t),e(function(e){f(n(t,e)||[],function(t){i.records[e.name][t]=!0})})}return function(n){var o={nodes:[],records:{}};if(e(function(t){o.records[t.name]={}}),!n)return o;a(n,o);var s;do{s=!1,t(function(t){!i(t,o)&&r(t,o)&&(a(t,o),s=!0)})}while(s);return o}}function mc(t,e,n){var i=[1/0,-1/0];return G_(n,function(t){var n=t.getData();n&&G_(n.mapDimension(e,!0),function(t){var e=n.getApproximateExtent(t);e[0]<i[0]&&(i[0]=e[0]),e[1]>i[1]&&(i[1]=e[1])})}),i[1]<i[0]&&(i=[NaN,NaN]),yc(t,i),i}function yc(t,e){var n=t.getAxisModel(),i=n.getMin(!0),r="category"===n.get("type"),a=r&&n.getCategories().length;null!=i&&"dataMin"!==i&&"function"!=typeof i?e[0]=i:r&&(e[0]=a>0?0:NaN);var o=n.getMax(!0);return null!=o&&"dataMax"!==o&&"function"!=typeof o?e[1]=o:r&&(e[1]=a>0?a-1:NaN),n.get("scale",!0)||(e[0]>0&&(e[0]=0),e[1]<0&&(e[1]=0)),e}function xc(t,e){var n=t.getAxisModel(),i=t._percentWindow,r=t._valueWindow;if(i){var a=Pr(r,[0,500]);a=Math.min(a,20);var o=e||0===i[0]&&100===i[1];n.setRange(o?null:+r[0].toFixed(a),o?null:+r[1].toFixed(a))}}function _c(t){var e=t._minMaxSpan={},n=t._dataZoomModel;G_(["min","max"],function(i){e[i+"Span"]=n.get(i+"Span");var r=n.get(i+"ValueSpan");if(null!=r&&(e[i+"ValueSpan"]=r,null!=(r=t.getAxisModel().axis.scale.parse(r)))){var a=t._dataExtent;e[i+"Span"]=Tr(a[0]+r,a,[0,100],!0)}})}function wc(t){var e={};return Y_(["start","end","startValue","endValue","throttle"],function(n){t.hasOwnProperty(n)&&(e[n]=t[n])}),e}function bc(t,e){var n=t._rangePropMode,i=t.get("rangeMode");Y_([["start","startValue"],["end","endValue"]],function(t,r){var a=null!=e[t[0]],o=null!=e[t[1]];a&&!o?n[r]="percent":!a&&o?n[r]="value":i?n[r]=i[r]:a&&(n[r]="percent")})}function Mc(t,e){var n=t[e]-t[1-e];return{span:Math.abs(n),sign:n>0?-1:0>n?1:e?-1:1}}function Sc(t,e){return Math.min(e[1],Math.max(e[0],t))}function Ic(t){return{x:"y",y:"x",radius:"angle",angle:"radius"}[t]}function Tc(t){return"vertical"===t?"ns-resize":"ew-resize"}function Cc(t,e){return!!Ac(t)[e]}function Ac(t){return t[sw]||(t[sw]={})}function Dc(t){this.pointerChecker,this._zr=t,this._opt={};var e=m,n=e(kc,this),r=e(Pc,this),a=e(Lc,this),o=e(Oc,this),l=e(zc,this);yd.call(this),this.setPointerChecker=function(t){this.pointerChecker=t},this.enable=function(e,h){this.disable(),this._opt=s(i(h)||{},{zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!1,preventDefaultMouseMove:!0}),null==e&&(e=!0),(!0===e||"move"===e||"pan"===e)&&(t.on("mousedown",n),t.on("mousemove",r),t.on("mouseup",a)),(!0===e||"scale"===e||"zoom"===e)&&(t.on("mousewheel",o),t.on("pinch",l))},this.disable=function(){t.off("mousedown",n),t.off("mousemove",r),t.off("mouseup",a),t.off("mousewheel",o),t.off("pinch",l)},this.dispose=this.disable,this.isDragging=function(){return this._dragging},this.isPinching=function(){return this._pinching}}function kc(t){if(!(ht(t)||t.target&&t.target.draggable)){var e=t.offsetX,n=t.offsetY;this.pointerChecker&&this.pointerChecker(t,e,n)&&(this._x=e,this._y=n,this._dragging=!0)}}function Pc(t){if(!ht(t)&&Rc("moveOnMouseMove",t,this._opt)&&this._dragging&&"pinch"!==t.gestureEvent&&!Cc(this._zr,"globalPan")){var e=t.offsetX,n=t.offsetY,i=this._x,r=this._y,a=e-i,o=n-r;this._x=e,this._y=n,this._opt.preventDefaultMouseMove&&wd(t.event),Ec(this,"pan","moveOnMouseMove",t,{dx:a,dy:o,oldX:i,oldY:r,newX:e,newY:n})}}function Lc(t){ht(t)||(this._dragging=!1)}function Oc(t){var e=Rc("zoomOnMouseWheel",t,this._opt),n=Rc("moveOnMouseWheel",t,this._opt),i=t.wheelDelta,r=Math.abs(i),a=t.offsetX,o=t.offsetY;if(0!==i&&(e||n)){if(e){var s=r>3?1.4:r>1?1.2:1.1;Bc(this,"zoom","zoomOnMouseWheel",t,{scale:i>0?s:1/s,originX:a,originY:o})}if(n){var l=Math.abs(i);Bc(this,"scrollMove","moveOnMouseWheel",t,{scrollDelta:(i>0?1:-1)*(l>3?.4:l>1?.15:.05),originX:a,originY:o})}}}function zc(t){Cc(this._zr,"globalPan")||Bc(this,"zoom",null,t,{scale:t.pinchScale>1?1.1:1/1.1,originX:t.pinchX,originY:t.pinchY})}function Bc(t,e,n,i,r){t.pointerChecker&&t.pointerChecker(i,r.originX,r.originY)&&(wd(i.event),Ec(t,e,n,i,r))}function Ec(t,e,n,i,r){r.isAvailableBehavior=m(Rc,null,n,i),t.trigger(e,r)}function Rc(t,e,n){var i=n[t];return!t||i&&(!w(i)||e.event[i+"Key"])}function Nc(t,e){var n=Wc(t),i=e.dataZoomId,r=e.coordId;f(n,function(t){var n=t.dataZoomInfos;n[i]&&h(e.allCoordIds,r)<0&&(delete n[i],t.count--)}),Gc(n);var a=n[r];a||(a=n[r]={coordId:r,dataZoomInfos:{},count:0},a.controller=Hc(t,a),a.dispatchAction=y(Zc,t)),!a.dataZoomInfos[i]&&a.count++,a.dataZoomInfos[i]=e;var o=Xc(a.dataZoomInfos);a.controller.enable(o.controlType,o.opt),a.controller.setPointerChecker(e.containsPoint),go(a,"dispatchAction",e.dataZoomModel.get("throttle",!0),"fixRate")}function Fc(t,e){var n=Wc(t);f(n,function(t){t.controller.dispose();var n=t.dataZoomInfos;n[e]&&(delete n[e],t.count--)}),Gc(n)}function Vc(t){return t.type+"\0_"+t.id}function Wc(t){var e=t.getZr();return e[lw]||(e[lw]={})}function Hc(t,e){var n=new Dc(t.getZr());return f(["pan","zoom","scrollMove"],function(t){n.on(t,function(n){var i=[];f(e.dataZoomInfos,function(r){if(n.isAvailableBehavior(r.dataZoomModel.option)){var a=(r.getRange||{})[t],o=a&&a(e.controller,n);!r.dataZoomModel.get("disabled",!0)&&o&&i.push({dataZoomId:r.dataZoomId,start:o[0],end:o[1]})}}),i.length&&e.dispatchAction(i)})}),n}function Gc(t){f(t,function(e,n){e.count||(e.controller.dispose(),delete t[n])})}function Zc(t,e){t.dispatchAction({type:"dataZoom",batch:e})}function Xc(t){var e,n="type_",i={type_true:2,type_move:1,type_false:0,type_undefined:-1},r=!0;return f(t,function(t){var a=t.dataZoomModel,o=!a.get("disabled",!0)&&(!a.get("zoomLock",!0)||"move");i[n+o]>i[n+e]&&(e=o),r&=a.get("preventDefaultMouseMove",!0)}),{controlType:e,opt:{zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!0,preventDefaultMouseMove:!!r}}}function Yc(t){return function(e,n,i,r){var a=this._range,o=a.slice(),s=e.axisModels[0];if(s){var l=t(o,s,e,n,i,r);return $_(l,o,[0,100],"all"),this._range=o,a[0]!==o[0]||a[1]!==o[1]?o:void 0}}}var qc=2311,jc=function(){return qc++},Uc={},$c=Uc="object"==("undefined"==typeof wx?"undefined":t(wx))&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0,domSupported:!1}:"undefined"==typeof document&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0,domSupported:!1}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0,domSupported:!1}:function(t){var e={},n={},i=t.match(/Firefox\/([\d.]+)/),r=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),a=t.match(/Edge\/([\d.]+)/),o=/micromessenger/i.test(t);return i&&(n.firefox=!0,n.version=i[1]),r&&(n.ie=!0,n.version=r[1]),a&&(n.edge=!0,n.version=a[1]),o&&(n.weChat=!0),{browser:n,os:e,node:!1,canvasSupported:!!document.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in window&&!n.ie&&!n.edge,pointerEventsSupported:"onpointerdown"in window&&(n.edge||n.ie&&n.version>=11),domSupported:"undefined"!=typeof document}}(navigator.userAgent),Kc={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},Qc={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},Jc=Object.prototype.toString,td=Array.prototype,ed=td.forEach,nd=td.filter,id=td.slice,rd=td.map,ad=td.reduce,od={},sd=function(){return od.createCanvas()};od.createCanvas=function(){return document.createElement("canvas")};var ld,hd="__ec_primitive__";E.prototype={constructor:E,get:function(t){return this.data.hasOwnProperty(t)?this.data[t]:null},set:function(t,e){return this.data[t]=e},each:function(t,e){void 0!==e&&(t=m(t,e));for(var n in this.data)this.data.hasOwnProperty(n)&&t(this.data[n],n)},removeKey:function(t){delete this.data[t]}};var ud=(Object.freeze||Object)({$override:n,clone:i,merge:r,mergeAll:a,extend:o,defaults:s,createCanvas:sd,getContext:l,indexOf:h,inherits:u,mixin:c,isArrayLike:d,each:f,map:p,reduce:g,filter:v,find:function(t,e,n){if(t&&e)for(var i=0,r=t.length;r>i;i++)if(e.call(n,t[i],i,t))return t[i]},bind:m,curry:y,isArray:x,isFunction:_,isString:w,isObject:b,isBuiltInObject:M,isTypedArray:S,isDom:I,eqNaN:T,retrieve:C,retrieve2:A,retrieve3:D,slice:k,normalizeCssArray:P,assert:L,trim:O,setAsPrimitive:z,isPrimitive:B,createHashMap:R,concatArray:function(t,e){for(var n=new t.constructor(t.length+e.length),i=0;i<t.length;i++)n[i]=t[i];var r=t.length;for(i=0;i<e.length;i++)n[i+r]=e[i];return n},noop:N}),cd="undefined"==typeof Float32Array?Array:Float32Array,dd=X,fd=Y,pd=U,gd=$,vd=(Object.freeze||Object)({create:F,copy:V,clone:W,set:function(t,e,n){return t[0]=e,t[1]=n,t},add:H,scaleAndAdd:G,sub:Z,len:X,length:dd,lenSquare:Y,lengthSquare:fd,mul:function(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t},div:function(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]},scale:q,normalize:j,distance:U,dist:pd,distanceSquare:$,distSquare:gd,negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t},lerp:function(t,e,n,i){return t[0]=e[0]+i*(n[0]-e[0]),t[1]=e[1]+i*(n[1]-e[1]),t},applyTransform:K,min:Q,max:J});tt.prototype={constructor:tt,_dragStart:function(t){var e=t.target;e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(et(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var n=t.offsetX,i=t.offsetY,r=n-this._x,a=i-this._y;this._x=n,this._y=i,e.drift(r,a,t),this.dispatchToElement(et(e,t),"drag",t.event);var o=this.findHover(n,i,e).target,s=this._dropTarget;this._dropTarget=o,e!==o&&(s&&o!==s&&this.dispatchToElement(et(s,t),"dragleave",t.event),o&&o!==s&&this.dispatchToElement(et(o,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(et(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(et(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}};var md=Array.prototype.slice,yd=function(t){this._$handlers={},this._$eventProcessor=t};yd.prototype={constructor:yd,one:function(t,e,n,i){var r=this._$handlers;if("function"==typeof e&&(i=n,n=e,e=null),!n||!t)return this;e=nt(this,e),r[t]||(r[t]=[]);for(var a=0;a<r[t].length;a++)if(r[t][a].h===n)return this;return r[t].push({h:n,one:!0,query:e,ctx:i||this}),this},on:function(t,e,n,i){var r=this._$handlers;if("function"==typeof e&&(i=n,n=e,e=null),!n||!t)return this;e=nt(this,e),r[t]||(r[t]=[]);for(var a=0;a<r[t].length;a++)if(r[t][a].h===n)return this;return r[t].push({h:n,one:!1,query:e,ctx:i||this}),this},isSilent:function(t){var e=this._$handlers;return e[t]&&e[t].length},off:function(t,e){var n=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(n[t]){for(var i=[],r=0,a=n[t].length;a>r;r++)n[t][r].h!==e&&i.push(n[t][r]);n[t]=i}n[t]&&0===n[t].length&&delete n[t]}else delete n[t];return this},trigger:function(t){var e=this._$handlers[t],n=this._$eventProcessor;if(e){var i=arguments,r=i.length;r>3&&(i=md.call(i,1));for(var a=e.length,o=0;a>o;){var s=e[o];if(n&&n.filter&&null!=s.query&&!n.filter(t,s.query))o++;else{switch(r){case 1:s.h.call(s.ctx);break;case 2:s.h.call(s.ctx,i[1]);break;case 3:s.h.call(s.ctx,i[1],i[2]);break;default:s.h.apply(s.ctx,i)}s.one?(e.splice(o,1),a--):o++}}}return n&&n.afterTrigger&&n.afterTrigger(t),this},triggerWithContext:function(t){var e=this._$handlers[t],n=this._$eventProcessor;if(e){var i=arguments,r=i.length;r>4&&(i=md.call(i,1,i.length-1));for(var a=i[i.length-1],o=e.length,s=0;o>s;){var l=e[s];if(n&&n.filter&&null!=l.query&&!n.filter(t,l.query))s++;else{switch(r){case 1:l.h.call(a);break;case 2:l.h.call(a,i[1]);break;case 3:l.h.call(a,i[1],i[2]);break;default:l.h.apply(a,i)}l.one?(e.splice(s,1),o--):s++}}}return n&&n.afterTrigger&&n.afterTrigger(t),this}};var xd="undefined"!=typeof window&&!!window.addEventListener,_d=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,wd=xd?function(t){t.preventDefault(),t.stopPropagation(),t.cancelBubble=!0}:function(t){t.returnValue=!1,t.cancelBubble=!0},bd="silent";dt.prototype.dispose=function(){};var Md=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Sd=function(t,e,n,i){yd.call(this),this.storage=t,this.painter=e,this.painterRoot=i,n=n||new dt,this.proxy=null,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,tt.call(this),this.setHandlerProxy(n)};Sd.prototype={constructor:Sd,setHandlerProxy:function(t){this.proxy&&this.proxy.dispose(),t&&(f(Md,function(e){t.on&&t.on(e,this[e],this)},this),t.handler=this),this.proxy=t},mousemove:function(t){var e=t.zrX,n=t.zrY,i=this._hovered,r=i.target;r&&!r.__zr&&(i=this.findHover(i.x,i.y),r=i.target);var a=this._hovered=this.findHover(e,n),o=a.target,s=this.proxy;s.setCursor&&s.setCursor(o?o.cursor:"default"),r&&o!==r&&this.dispatchToElement(i,"mouseout",t),this.dispatchToElement(a,"mousemove",t),o&&o!==r&&this.dispatchToElement(a,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t);var e,n=t.toElement||t.relatedTarget;do{n=n&&n.parentNode}while(n&&9!=n.nodeType&&!(e=n===this.painterRoot));!e&&this.trigger("globalout",{event:t})},resize:function(){this._hovered={}},dispatch:function(t,e){var n=this[t];n&&n.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,n){var i=(t=t||{}).target;if(!i||!i.silent){for(var r="on"+e,a=ut(e,t,n);i&&(i[r]&&(a.cancelBubble=i[r].call(i,a)),i.trigger(e,a),i=i.parent,!a.cancelBubble););a.cancelBubble||(this.trigger(e,a),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[r]&&t[r].call(t,a),t.trigger&&t.trigger(e,a)}))}},findHover:function(t,e,n){for(var i=this.storage.getDisplayList(),r={x:t,y:e},a=i.length-1;a>=0;a--){var o;if(i[a]!==n&&!i[a].ignore&&(o=ft(i[a],t,e))&&(!r.topTarget&&(r.topTarget=i[a]),o!==bd)){r.target=i[a];break}}return r}},f(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Sd.prototype[t]=function(e){var n=this.findHover(e.zrX,e.zrY),i=n.target;if("mousedown"===t)this._downEl=i,this._downPoint=[e.zrX,e.zrY],this._upEl=i;else if("mouseup"===t)this._upEl=i;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||pd(this._downPoint,[e.zrX,e.zrY])>4)return;this._downPoint=null}this.dispatchToElement(n,t,e)}}),c(Sd,yd),c(Sd,tt);var Id="undefined"==typeof Float32Array?Array:Float32Array,Td=(Object.freeze||Object)({create:pt,identity:gt,copy:vt,mul:mt,translate:yt,rotate:xt,scale:_t,invert:wt,clone:function(t){var e=pt();return vt(e,t),e}}),Cd=gt,Ad=5e-5,Dd=function(t){(t=t||{}).position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},kd=Dd.prototype;kd.transform=null,kd.needLocalTransform=function(){return bt(this.rotation)||bt(this.position[0])||bt(this.position[1])||bt(this.scale[0]-1)||bt(this.scale[1]-1)};var Pd=[];kd.updateTransform=function(){var t=this.parent,e=t&&t.transform,n=this.needLocalTransform(),i=this.transform;if(n||e){i=i||pt(),n?this.getLocalTransform(i):Cd(i),e&&(n?mt(i,t.transform,i):vt(i,t.transform)),this.transform=i;var r=this.globalScaleRatio;if(null!=r&&1!==r){this.getGlobalScale(Pd);var a=Pd[0]<0?-1:1,o=Pd[1]<0?-1:1,s=((Pd[0]-a)*r+a)/Pd[0]||0,l=((Pd[1]-o)*r+o)/Pd[1]||0;i[0]*=s,i[1]*=s,i[2]*=l,i[3]*=l}this.invTransform=this.invTransform||pt(),wt(this.invTransform,i)}else i&&Cd(i)},kd.getLocalTransform=function(t){return Dd.getLocalTransform(this,t)},kd.setTransform=function(t){var e=this.transform,n=t.dpr||1;e?t.setTransform(n*e[0],n*e[1],n*e[2],n*e[3],n*e[4],n*e[5]):t.setTransform(n,0,0,n,0,0)},kd.restoreTransform=function(t){var e=t.dpr||1;t.setTransform(e,0,0,e,0,0)};var Ld=[],Od=pt();kd.setLocalTransform=function(t){if(t){var e=t[0]*t[0]+t[1]*t[1],n=t[2]*t[2]+t[3]*t[3],i=this.position,r=this.scale;bt(e-1)&&(e=Math.sqrt(e)),bt(n-1)&&(n=Math.sqrt(n)),t[0]<0&&(e=-e),t[3]<0&&(n=-n),i[0]=t[4],i[1]=t[5],r[0]=e,r[1]=n,this.rotation=Math.atan2(-t[1]/n,t[0]/e)}},kd.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(mt(Ld,t.invTransform,e),e=Ld);var n=this.origin;n&&(n[0]||n[1])&&(Od[4]=n[0],Od[5]=n[1],mt(Ld,e,Od),Ld[4]-=n[0],Ld[5]-=n[1],e=Ld),this.setLocalTransform(e)}},kd.getGlobalScale=function(t){var e=this.transform;return t=t||[],e?(t[0]=Math.sqrt(e[0]*e[0]+e[1]*e[1]),t[1]=Math.sqrt(e[2]*e[2]+e[3]*e[3]),e[0]<0&&(t[0]=-t[0]),e[3]<0&&(t[1]=-t[1]),t):(t[0]=1,t[1]=1,t)},kd.transformCoordToLocal=function(t,e){var n=[t,e],i=this.invTransform;return i&&K(n,n,i),n},kd.transformCoordToGlobal=function(t,e){var n=[t,e],i=this.transform;return i&&K(n,n,i),n},Dd.getLocalTransform=function(t,e){Cd(e=e||[]);var n=t.origin,i=t.scale||[1,1],r=t.rotation||0,a=t.position||[0,0];return n&&(e[4]-=n[0],e[5]-=n[1]),_t(e,e,i),r&&xt(e,e,r),n&&(e[4]+=n[0],e[5]+=n[1]),e[4]+=a[0],e[5]+=a[1],e};var zd={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||1>n?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/.4))},elasticOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||1>n?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin(2*(t-e)*Math.PI/.4)+1)},elasticInOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||1>n?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?-.5*n*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/.4):n*Math.pow(2,-10*(t-=1))*Math.sin(2*(t-e)*Math.PI/.4)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?.5*t*t*((e+1)*t-e):.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-zd.bounceOut(1-t)},bounceOut:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return.5>t?.5*zd.bounceIn(2*t):.5*zd.bounceOut(2*t-1)+.5}};Mt.prototype={constructor:Mt,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e;else{var n=(t-this._startTime-this._pausedTime)/this._life;if(!(0>n)){n=Math.min(n,1);var i=this.easing,r="string"==typeof i?zd[i]:i,a="function"==typeof r?r(n):n;return this.fire("frame",a),1==n?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){this[t="on"+t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}};var Bd=function(){this.head=null,this.tail=null,this._len=0},Ed=Bd.prototype;Ed.insert=function(t){var e=new Rd(t);return this.insertEntry(e),e},Ed.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},Ed.remove=function(t){var e=t.prev,n=t.next;e?e.next=n:this.head=n,n?n.prev=e:this.tail=e,t.next=t.prev=null,this._len--},Ed.len=function(){return this._len},Ed.clear=function(){this.head=this.tail=null,this._len=0};var Rd=function(t){this.value=t,this.next,this.prev},Nd=function(t){this._list=new Bd,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},Fd=Nd.prototype;Fd.put=function(t,e){var n=this._list,i=this._map,r=null;if(null==i[t]){var a=n.len(),o=this._lastRemovedEntry;if(a>=this._maxSize&&a>0){var s=n.head;n.remove(s),delete i[s.key],r=s.value,this._lastRemovedEntry=s}o?o.value=e:o=new Rd(e),o.key=t,n.insertEntry(o),i[t]=o}return r},Fd.get=function(t){var e=this._map[t],n=this._list;return null!=e?(e!==n.tail&&(n.remove(e),n.insertEntry(e)),e.value):void 0},Fd.clear=function(){this._list.clear(),this._map={}};var Vd={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]},Wd=new Nd(20),Hd=null,Gd=Ft,Zd=Vt,Xd=(Object.freeze||Object)({parse:zt,lift:Rt,toHex:Nt,fastLerp:Ft,fastMapToColor:Gd,lerp:Vt,mapToColor:Zd,modifyHSL:function(t,e,n,i){return(t=zt(t))?(t=Et(t),null!=e&&(t[0]=It(e)),null!=n&&(t[1]=At(n)),null!=i&&(t[2]=At(i)),Wt(Bt(t),"rgba")):void 0},modifyAlpha:function(t,e){return(t=zt(t))&&null!=e?(t[3]=Tt(e),Wt(t,"rgba")):void 0},stringify:Wt}),Yd=Array.prototype.slice,qd=function(t,e,n,i){this._tracks={},this._target=t,this._loop=e||!1,this._getter=n||Ht,this._setter=i||Gt,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};qd.prototype={when:function(t,e){var n=this._tracks;for(var i in e)if(e.hasOwnProperty(i)){if(!n[i]){n[i]=[];var r=this._getter(this._target,i);if(null==r)continue;0!==t&&n[i].push({time:0,value:Kt(r)})}n[i].push({time:t,value:e[i]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause();this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume();this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,n=0;e>n;n++)t[n].call(this)},start:function(t,e){var n,i=this,r=0;for(var a in this._tracks)if(this._tracks.hasOwnProperty(a)){var o=te(this,t,function(){--r||i._doneCallback()},this._tracks[a],a,e);o&&(this._clipList.push(o),r++,this.animation&&this.animation.addClip(o),n=o)}if(n){var s=n.onframe;n.onframe=function(t,e){s(t,e);for(var n=0;n<i._onframeList.length;n++)i._onframeList[n](t,e)}}return r||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,n=this.animation,i=0;i<e.length;i++){var r=e[i];t&&r.onframe(this._target,1),n&&n.removeClip(r)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}};var jd=1;"undefined"!=typeof window&&(jd=Math.max(window.devicePixelRatio||1,1));var Ud=jd,$d=function(){},Kd=$d,Qd=function(){this.animators=[]};Qd.prototype={constructor:Qd,animate:function(t,e){var n,i=!1,r=this,a=this.__zr;if(t){var o=t.split("."),s=r;i="shape"===o[0];for(var l=0,u=o.length;u>l;l++)s&&(s=s[o[l]]);s&&(n=s)}else n=r;{if(n){var c=r.animators,d=new qd(n,e);return d.during(function(){r.dirty(i)}).done(function(){c.splice(h(c,d),1)}),c.push(d),a&&a.animation.addAnimator(d),d}Kd('Property "'+t+'" is not existed in element '+r.id)}},stopAnimation:function(t){for(var e=this.animators,n=e.length,i=0;n>i;i++)e[i].stop(t);return e.length=0,this},animateTo:function(t,e,n,i,r,a){ee(this,t,e,n,i,r,a)},animateFrom:function(t,e,n,i,r,a){ee(this,t,e,n,i,r,a,!0)}};var Jd=function(t){Dd.call(this,t),yd.call(this,t),Qd.call(this,t),this.id=t.id||jc()};Jd.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,isGroup:!1,drift:function(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var n=this.transform;n||(n=this.transform=[1,0,0,1,0,0]),n[4]+=t,n[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var n=this[t];n||(n=this[t]=[]),n[0]=e[0],n[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e);else if(b(t))for(var n in t)t.hasOwnProperty(n)&&this.attrKV(n,t[n]);return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.addAnimator(e[n]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.removeAnimator(e[n]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},c(Jd,Qd),c(Jd,Dd),c(Jd,yd);var tf=K,ef=Math.min,nf=Math.max;re.prototype={constructor:re,union:function(t){var e=ef(t.x,this.x),n=ef(t.y,this.y);this.width=nf(t.x+t.width,this.x+this.width)-e,this.height=nf(t.y+t.height,this.y+this.height)-n,this.x=e,this.y=n},applyTransform:function(){var t=[],e=[],n=[],i=[];return function(r){if(r){t[0]=n[0]=this.x,t[1]=i[1]=this.y,e[0]=i[0]=this.x+this.width,e[1]=n[1]=this.y+this.height,tf(t,t,r),tf(e,e,r),tf(n,n,r),tf(i,i,r),this.x=ef(t[0],e[0],n[0],i[0]),this.y=ef(t[1],e[1],n[1],i[1]);var a=nf(t[0],e[0],n[0],i[0]),o=nf(t[1],e[1],n[1],i[1]);this.width=a-this.x,this.height=o-this.y}}}(),calculateTransform:function(t){var e=this,n=t.width/e.width,i=t.height/e.height,r=pt();return yt(r,r,[-e.x,-e.y]),_t(r,r,[n,i]),yt(r,r,[t.x,t.y]),r},intersect:function(t){if(!t)return!1;t instanceof re||(t=re.create(t));var e=this,n=e.x,i=e.x+e.width,r=e.y,a=e.y+e.height,o=t.x,s=t.x+t.width,l=t.y,h=t.y+t.height;return!(o>i||n>s||l>a||r>h)},contain:function(t,e){var n=this;return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height},clone:function(){return new re(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},re.create=function(t){return new re(t.x,t.y,t.width,t.height)};var rf=function(t){t=t||{},Jd.call(this,t);for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);this._children=[],this.__storage=null,this.__dirty=!0};rf.prototype={constructor:rf,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,n=0;n<e.length;n++)if(e[n].name===t)return e[n]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var n=this._children,i=n.indexOf(e);i>=0&&(n.splice(i,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t),t.parent=this;var e=this.__storage,n=this.__zr;e&&e!==t.__storage&&(e.addToStorage(t),t instanceof rf&&t.addChildrenToStorage(e)),n&&n.refresh()},remove:function(t){var e=this.__zr,n=this.__storage,i=this._children,r=h(i,t);return 0>r?this:(i.splice(r,1),t.parent=null,n&&(n.delFromStorage(t),t instanceof rf&&t.delChildrenFromStorage(n)),e&&e.refresh(),this)},removeAll:function(){var t,e,n=this._children,i=this.__storage;for(e=0;e<n.length;e++)t=n[e],i&&(i.delFromStorage(t),t instanceof rf&&t.delChildrenFromStorage(i)),t.parent=null;return n.length=0,this},eachChild:function(t,e){for(var n=this._children,i=0;i<n.length;i++){var r=n[i];t.call(e,r,i)}return this},traverse:function(t,e){for(var n=0;n<this._children.length;n++){var i=this._children[n];t.call(e,i),"group"===i.type&&i.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.addToStorage(n),n instanceof rf&&n.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.delFromStorage(n),n instanceof rf&&n.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,n=new re(0,0,0,0),i=t||this._children,r=[],a=0;a<i.length;a++){var o=i[a];if(!o.ignore&&!o.invisible){var s=o.getBoundingRect(),l=o.getLocalTransform(r);l?(n.copy(s),n.applyTransform(l),(e=e||n.clone()).union(n)):(e=e||s.clone()).union(s)}}return e||n}},u(rf,Jd);var af=32,of=7,sf=function(){this._roots=[],this._displayList=[],this._displayListLen=0};sf.prototype={constructor:sf,traverse:function(t,e){for(var n=0;n<this._roots.length;n++)this._roots[n].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0;for(var e=this._roots,n=this._displayList,i=0,r=e.length;r>i;i++)this._updateAndAddDisplayable(e[i],null,t);n.length=this._displayListLen,$c.canvasSupported&&de(n,fe)},_updateAndAddDisplayable:function(t,e,n){if(!t.ignore||n){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate();var i=t.clipPath;if(i){e=e?e.slice():[];for(var r=i,a=t;r;)r.parent=a,r.updateTransform(),e.push(r),a=r,r=r.clipPath}if(t.isGroup){for(var o=t._children,s=0;s<o.length;s++){var l=o[s];t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,n)}t.__dirty=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof rf&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(n=0;n<this._roots.length;n++){var e=this._roots[n];e instanceof rf&&e.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array)for(var n=0,i=t.length;i>n;n++)this.delRoot(t[n]);else{var r=h(this._roots,t);r>=0&&(this.delFromStorage(t),this._roots.splice(r,1),t instanceof rf&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t&&(t.__storage=this,t.dirty(!1)),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:fe};var lf={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1},hf=function(t,e,n){return lf.hasOwnProperty(e)?n*=t.dpr:n},uf=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],cf=function(t){this.extendFrom(t,!1)};cf.prototype={constructor:cf,fill:"#000",stroke:null,opacity:1,fillOpacity:null,strokeOpacity:null,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,n){for(var i=this,r=n&&n.style,a=!r,o=0;o<uf.length;o++){var s=uf[o],l=s[0];(a||i[l]!==r[l])&&(t[l]=hf(t,l,i[l]||s[1]))}if((a||i.fill!==r.fill)&&(t.fillStyle=i.fill),(a||i.stroke!==r.stroke)&&(t.strokeStyle=i.stroke),(a||i.opacity!==r.opacity)&&(t.globalAlpha=null==i.opacity?1:i.opacity),(a||i.blend!==r.blend)&&(t.globalCompositeOperation=i.blend||"source-over"),this.hasStroke()){var h=i.lineWidth;t.lineWidth=h/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke;return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t)for(var n in t)!t.hasOwnProperty(n)||!0!==e&&(!1===e?this.hasOwnProperty(n):null==t[n])||(this[n]=t[n])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(t,e,n){for(var i=("radial"===e.type?ge:pe)(t,e,n),r=e.colorStops,a=0;a<r.length;a++)i.addColorStop(r[a].offset,r[a].color);return i}};for(var df=cf.prototype,ff=0;ff<uf.length;ff++){var pf=uf[ff];pf[0]in df||(df[pf[0]]=pf[1])}cf.getGradient=df.getGradient;var gf=function(t,e){this.image=t,this.repeat=e,this.type="pattern"};gf.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")};var vf=function(t,e,n){var i;n=n||Ud,"string"==typeof t?i=me(t,e,n):b(t)&&(i=t,t=i.id),this.id=t,this.dom=i;var r=i.style;r&&(i.onselectstart=ve,r["-webkit-user-select"]="none",r["user-select"]="none",r["-webkit-touch-callout"]="none",r["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",r.padding=0,r.margin=0,r["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=n};vf.prototype={constructor:vf,__dirty:!0,__used:!1,__drawIndex:0,__startIndex:0,__endIndex:0,incremental:!1,getElementCount:function(){return this.__endIndex-this.__startIndex},initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr;this.domBack=me("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!=t&&this.ctxBack.scale(t,t)},resize:function(t,e){var n=this.dpr,i=this.dom,r=i.style,a=this.domBack;r&&(r.width=t+"px",r.height=e+"px"),i.width=t*n,i.height=e*n,a&&(a.width=t*n,a.height=e*n,1!=n&&this.ctxBack.scale(n,n))},clear:function(t,e){var n=this.dom,i=this.ctx,r=n.width,a=n.height,e=e||this.clearColor,o=this.motionBlur&&!t,s=this.lastFrameAlpha,l=this.dpr;if(o&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(n,0,0,r/l,a/l)),i.clearRect(0,0,r,a),e&&"transparent"!==e){var h;e.colorStops?(h=e.__canvasGradient||cf.getGradient(i,e,{x:0,y:0,width:r,height:a}),e.__canvasGradient=h):e.image&&(h=gf.prototype.getCanvasPattern.call(e,i)),i.save(),i.fillStyle=h||e,i.fillRect(0,0,r,a),i.restore()}if(o){var u=this.domBack;i.save(),i.globalAlpha=s,i.drawImage(u,0,0,r,a),i.restore()}}};var mf="undefined"!=typeof window&&(window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.msRequestAnimationFrame&&window.msRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)},yf=new Nd(50),xf={},_f=0,wf=5e3,bf=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,Mf="12px sans-serif",Sf={};Sf.measureText=function(t,e){var n=l();return n.font=e||Mf,n.measureText(t)};var If={left:1,right:1,center:1},Tf={top:1,bottom:1,middle:1},Cf=[["textShadowBlur","shadowBlur",0],["textShadowOffsetX","shadowOffsetX",0],["textShadowOffsetY","shadowOffsetY",0],["textShadowColor","shadowColor","transparent"]],Af=new re,Df=function(){};Df.prototype={constructor:Df,drawRectText:function(t,e){var n=this.style;e=n.textRect||e,this.__dirty&&Ve(n);var i=n.text;if(null!=i&&(i+=""),rn(i,n)){t.save();var r=this.transform;n.transformText?this.setTransform(t):r&&(Af.copy(e),Af.applyTransform(r),e=Af),He(this,t,i,n,e),t.restore()}}},an.prototype={constructor:an,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,globalScaleRatio:1,beforeBrush:function(){},afterBrush:function(){},brush:function(){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var n=this.transformCoordToLocal(t,e);return this.getBoundingRect().contain(n[0],n[1])},dirty:function(){this.__dirty=this.__dirtyText=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?Jd.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new cf(t,this),this.dirty(!1),this}},u(an,Jd),c(an,Df),on.prototype={constructor:on,type:"image",brush:function(t,e){var n=this.style,i=n.image;n.bind(t,this,e);var r=this._image=xe(i,this._image,this,this.onload);if(r&&we(r)){var a=n.x||0,o=n.y||0,s=n.width,l=n.height,h=r.width/r.height;if(null==s&&null!=l?s=l*h:null==l&&null!=s?l=s/h:null==s&&null==l&&(s=r.width,l=r.height),this.setTransform(t),n.sWidth&&n.sHeight){var u=n.sx||0,c=n.sy||0;t.drawImage(r,u,c,n.sWidth,n.sHeight,a,o,s,l)}else if(n.sx&&n.sy){var d=s-(u=n.sx),f=l-(c=n.sy);t.drawImage(r,u,c,d,f,a,o,s,l)}else t.drawImage(r,a,o,s,l);null!=n.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new re(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},u(on,an);var kf=314159,Pf=new re(0,0,0,0),Lf=new re(0,0,0,0),Of=function(t,e,n){this.type="canvas";var i=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=n=o({},n||{}),this.dpr=n.devicePixelRatio||Ud,this._singleCanvas=i,this.root=t;var r=t.style;r&&(r["-webkit-tap-highlight-color"]="transparent",r["-webkit-user-select"]=r["user-select"]=r["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var a=this._zlevelList=[],s=this._layers={};if(this._layerConfig={},this._needsManuallyCompositing=!1,i){var l=t.width,h=t.height;null!=n.width&&(l=n.width),null!=n.height&&(h=n.height),this.dpr=n.devicePixelRatio||1,t.width=l*this.dpr,t.height=h*this.dpr,this._width=l,this._height=h;var u=new vf(t,this,this.dpr);u.__builtin__=!0,u.initContext(),s[kf]=u,u.zlevel=kf,a.push(kf),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1);var c=this._domRoot=dn(this._width,this._height);t.appendChild(c)}this._hoverlayer=null,this._hoverElements=[]};Of.prototype={constructor:Of,getType:function(){return"canvas"},isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},getViewportRootOffset:function(){var t=this.getViewportRoot();return t?{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}:void 0},refresh:function(t){var e=this.storage.getDisplayList(!0),n=this._zlevelList;this._redrawId=Math.random(),this._paintList(e,t,this._redrawId);for(var i=0;i<n.length;i++){var r=n[i],a=this._layers[r];if(!a.__builtin__&&a.refresh){var o=0===i?this._backgroundColor:null;a.refresh(o)}}return this.refreshHover(),this},addHover:function(t,e){if(!t.__hoverMir){var n=new t.constructor({style:t.style,shape:t.shape,z:t.z,z2:t.z2,silent:t.silent});return n.__from=t,t.__hoverMir=n,e&&n.setStyle(e),this._hoverElements.push(n),n}},removeHover:function(t){var e=t.__hoverMir,n=this._hoverElements,i=h(n,e);i>=0&&n.splice(i,1),t.__hoverMir=null},clearHover:function(){for(var t=this._hoverElements,e=0;e<t.length;e++){var n=t[e].__from;n&&(n.__hoverMir=null)}t.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,n=this._hoverlayer;if(n&&n.clear(),e){de(t,this.storage.displayableSortFunc),n||(n=this._hoverlayer=this.getLayer(1e5));var i={};n.ctx.save();for(var r=0;e>r;){var a=t[r],o=a.__from;o&&o.__zr?(r++,o.invisible||(a.transform=o.transform,a.invTransform=o.invTransform,a.__clipPaths=o.__clipPaths,this._doPaintEl(a,n,!0,i))):(t.splice(r,1),o.__hoverMir=null,e--)}n.ctx.restore()}},getHoverLayer:function(){return this.getLayer(1e5)},_paintList:function(t,e,n){if(this._redrawId===n){e=e||!1,this._updateLayerStatus(t);var i=this._doPaintList(t,e);if(this._needsManuallyCompositing&&this._compositeManually(),!i){var r=this;mf(function(){r._paintList(t,e,n)})}}},_compositeManually:function(){var t=this.getLayer(kf).ctx,e=this._domRoot.width,n=this._domRoot.height;t.clearRect(0,0,e,n),this.eachBuiltinLayer(function(i){i.virtual&&t.drawImage(i.dom,0,0,e,n)})},_doPaintList:function(t,e){for(var n=[],i=0;i<this._zlevelList.length;i++){var r=this._zlevelList[i];(s=this._layers[r]).__builtin__&&s!==this._hoverlayer&&(s.__dirty||e)&&n.push(s)}for(var a=!0,o=0;o<n.length;o++){var s=n[o],l=s.ctx,h={};l.save();var u=e?s.__startIndex:s.__drawIndex,c=!e&&s.incremental&&Date.now,d=c&&Date.now(),p=s.zlevel===this._zlevelList[0]?this._backgroundColor:null;if(s.__startIndex===s.__endIndex)s.clear(!1,p);else if(u===s.__startIndex){var g=t[u];g.incremental&&g.notClear&&!e||s.clear(!1,p)}-1===u&&(console.error("For some unknown reason. drawIndex is -1"),u=s.__startIndex);for(var v=u;v<s.__endIndex;v++){var m=t[v];if(this._doPaintEl(m,s,e,h),m.__dirty=m.__dirtyText=!1,c&&Date.now()-d>15)break}s.__drawIndex=v,s.__drawIndex<s.__endIndex&&(a=!1),h.prevElClipPaths&&l.restore(),l.restore()}return $c.wxa&&f(this._layers,function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()}),a},_doPaintEl:function(t,e,n,i){var r=e.ctx,a=t.transform;if(!(!e.__dirty&&!n||t.invisible||0===t.style.opacity||a&&!a[0]&&!a[3]||t.culling&&hn(t,this._width,this._height))){var o=t.__clipPaths;(!i.prevElClipPaths||un(o,i.prevElClipPaths))&&(i.prevElClipPaths&&(e.ctx.restore(),i.prevElClipPaths=null,i.prevEl=null),o&&(r.save(),cn(o,r),i.prevElClipPaths=o)),t.beforeBrush&&t.beforeBrush(r),t.brush(r,i.prevEl||null),i.prevEl=t,t.afterBrush&&t.afterBrush(r)}},getLayer:function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=kf);var n=this._layers[t];return n||(n=new vf("zr_"+t,this,this.dpr),n.zlevel=t,n.__builtin__=!0,this._layerConfig[t]&&r(n,this._layerConfig[t],!0),e&&(n.virtual=e),this.insertLayer(t,n),n.initContext()),n},insertLayer:function(t,e){var n=this._layers,i=this._zlevelList,r=i.length,a=null,o=-1,s=this._domRoot;if(n[t])Kd("ZLevel "+t+" has been used already");else if(ln(e)){if(r>0&&t>i[0]){for(o=0;r-1>o&&!(i[o]<t&&i[o+1]>t);o++);a=n[i[o]]}if(i.splice(o+1,0,t),n[t]=e,!e.virtual)if(a){var l=a.dom;l.nextSibling?s.insertBefore(e.dom,l.nextSibling):s.appendChild(e.dom)}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom)}else Kd("Layer of zlevel "+t+" is not valid")},eachLayer:function(t,e){var n,i,r=this._zlevelList;for(i=0;i<r.length;i++)n=r[i],t.call(e,this._layers[n],n)},eachBuiltinLayer:function(t,e){var n,i,r,a=this._zlevelList;for(r=0;r<a.length;r++)i=a[r],(n=this._layers[i]).__builtin__&&t.call(e,n,i)},eachOtherLayer:function(t,e){var n,i,r,a=this._zlevelList;for(r=0;r<a.length;r++)i=a[r],(n=this._layers[i]).__builtin__||t.call(e,n,i)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){function e(t){n&&(n.__endIndex!==t&&(n.__dirty=!0),n.__endIndex=t)}if(this.eachBuiltinLayer(function(t){t.__dirty=t.__used=!1}),this._singleCanvas)for(r=1;r<t.length;r++)if((o=t[r]).zlevel!==t[r-1].zlevel||o.incremental){this._needsManuallyCompositing=!0;break}for(var n=null,i=0,r=0;r<t.length;r++){var a,o=t[r],s=o.zlevel;o.incremental?(a=this.getLayer(s+.001,this._needsManuallyCompositing),a.incremental=!0,i=1):a=this.getLayer(s+(i>0?.01:0),this._needsManuallyCompositing),a.__builtin__||Kd("ZLevel "+s+" has been used by unkown layer "+a.id),a!==n&&(a.__used=!0,a.__startIndex!==r&&(a.__dirty=!0),a.__startIndex=r,a.__drawIndex=a.incremental?-1:r,e(r),n=a),o.__dirty&&(a.__dirty=!0,a.incremental&&a.__drawIndex<0&&(a.__drawIndex=r))}e(r),this.eachBuiltinLayer(function(t){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},setBackgroundColor:function(t){this._backgroundColor=t},configLayer:function(t,e){if(e){var n=this._layerConfig;n[t]?r(n[t],e,!0):n[t]=e;for(var i=0;i<this._zlevelList.length;i++){var a=this._zlevelList[i];a!==t&&a!==t+.01||r(this._layers[a],n[t],!0)}}},delLayer:function(t){var e=this._layers,n=this._zlevelList,i=e[t];i&&(i.dom.parentNode.removeChild(i.dom),delete e[t],n.splice(h(n,t),1))},resize:function(t,e){if(this._domRoot.style){var n=this._domRoot;n.style.display="none";var i=this._opts;if(null!=t&&(i.width=t),null!=e&&(i.height=e),t=this._getSize(0),e=this._getSize(1),n.style.display="",this._width!=t||e!=this._height){n.style.width=t+"px",n.style.height=e+"px";for(var r in this._layers)this._layers.hasOwnProperty(r)&&this._layers[r].resize(t,e);f(this._progressiveLayers,function(n){n.resize(t,e)}),this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return;this._width=t,this._height=e,this.getLayer(kf).resize(t,e)}return this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[kf].dom;var e=new vf("image",this,t.pixelRatio||this.dpr);if(e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor),t.pixelRatio<=this.dpr){this.refresh();var n=e.dom.width,i=e.dom.height,r=e.ctx;this.eachLayer(function(t){t.__builtin__?r.drawImage(t.dom,0,0,n,i):t.renderToCanvas&&(e.ctx.save(),t.renderToCanvas(e.ctx),e.ctx.restore())})}else for(var a={},o=this.storage.getDisplayList(!0),s=0;s<o.length;s++){var l=o[s];this._doPaintEl(l,e,!0,a)}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,n=["width","height"][t],i=["clientWidth","clientHeight"][t],r=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[n]&&"auto"!==e[n])return parseFloat(e[n]);var o=this.root,s=document.defaultView.getComputedStyle(o);return(o[i]||sn(s[n])||sn(o.style[n]))-(sn(s[r])||0)-(sn(s[a])||0)|0},pathToImage:function(t,e){e=e||this.dpr;var n=document.createElement("canvas"),i=n.getContext("2d"),r=t.getBoundingRect(),a=t.style,o=a.shadowBlur*e,s=a.shadowOffsetX*e,l=a.shadowOffsetY*e,h=a.hasStroke()?a.lineWidth:0,u=Math.max(h/2,-s+o),c=Math.max(h/2,s+o),d=Math.max(h/2,-l+o),f=Math.max(h/2,l+o),p=r.width+u+c,g=r.height+d+f;n.width=p*e,n.height=g*e,i.scale(e,e),i.clearRect(0,0,p,g),i.dpr=e;var v={position:t.position,rotation:t.rotation,scale:t.scale};t.position=[u-r.x,d-r.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(i);var m=new on({style:{x:0,y:0,image:n}});return null!=v.position&&(m.position=t.position=v.position),null!=v.rotation&&(m.rotation=t.rotation=v.rotation),null!=v.scale&&(m.scale=t.scale=v.scale),m}};var zf=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,yd.call(this)};zf.prototype={constructor:zf,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this;for(var e=t.getClips(),n=0;n<e.length;n++)this.addClip(e[n])},removeClip:function(t){var e=h(this._clips,t);e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),n=0;n<e.length;n++)this.removeClip(e[n]);t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,n=this._clips,i=n.length,r=[],a=[],o=0;i>o;o++){var s=n[o],l=s.step(t,e);l&&(r.push(l),a.push(s))}for(o=0;i>o;)n[o]._needsRemove?(n[o]=n[i-1],n.pop(),i--):o++;i=r.length;for(o=0;i>o;o++)a[o].fire(r[o]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){function t(){e._running&&(mf(t),!e._paused&&e._update())}var e=this;this._running=!0,mf(t)},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},isFinished:function(){return!this._clips.length},animate:function(t,e){var n=new qd(t,(e=e||{}).loop,e.getter,e.setter);return this.addAnimator(n),n}},c(zf,yd);var Bf=function(){this._track=[]};Bf.prototype={constructor:Bf,recognize:function(t,e,n){return this._doTrack(t,e,n),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,n){var i=t.touches;if(i){for(var r={points:[],touches:[],target:e,event:t},a=0,o=i.length;o>a;a++){var s=i[a],l=rt(n,s,{});r.points.push([l.zrX,l.zrY]),r.touches.push(s)}this._track.push(r)}},_recognize:function(t){for(var e in Ef)if(Ef.hasOwnProperty(e)){var n=Ef[e](this._track,t);if(n)return n}}};var Ef={pinch:function(t,e){var n=t.length;if(n){var i=(t[n-1]||{}).points,r=(t[n-2]||{}).points||i;if(r&&r.length>1&&i&&i.length>1){var a=fn(i)/fn(r);!isFinite(a)&&(a=1),e.pinchScale=a;var o=pn(i);return e.pinchX=o[0],e.pinchY=o[1],{type:"pinch",target:t[0].target,event:e}}}}},Rf=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Nf=["touchstart","touchend","touchmove"],Ff={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},Vf=p(Rf,function(t){var e=t.replace("mouse","pointer");return Ff[e]?e:t}),Wf={mousemove:function(t){t=ot(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){var e=(t=ot(this.dom,t)).toElement||t.relatedTarget;if(e!=this.dom)for(;e&&9!=e.nodeType;){if(e===this.dom)return;e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){(t=ot(this.dom,t)).zrByTouch=!0,this._lastTouchMoment=new Date,vn(this,t,"start"),Wf.mousemove.call(this,t),Wf.mousedown.call(this,t),mn(this)},touchmove:function(t){(t=ot(this.dom,t)).zrByTouch=!0,vn(this,t,"change"),Wf.mousemove.call(this,t),mn(this)},touchend:function(t){(t=ot(this.dom,t)).zrByTouch=!0,vn(this,t,"end"),Wf.mouseup.call(this,t),+new Date-this._lastTouchMoment<300&&Wf.click.call(this,t),mn(this)},pointerdown:function(t){Wf.mousedown.call(this,t)},pointermove:function(t){yn(t)||Wf.mousemove.call(this,t)},pointerup:function(t){Wf.mouseup.call(this,t)},pointerout:function(t){yn(t)||Wf.mouseout.call(this,t)}};f(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Wf[t]=function(e){e=ot(this.dom,e),this.trigger(t,e)}});var Hf=_n.prototype;Hf.dispose=function(){for(var t=Rf.concat(Nf),e=0;e<t.length;e++){var n=t[e];lt(this.dom,gn(n),this._handlers[n])}},Hf.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},c(_n,yd);var Gf=!$c.canvasSupported,Zf={canvas:Of},Xf={},Yf=function(t,e,n){n=n||{},this.dom=e,this.id=t;var i=this,r=new sf,a=n.renderer;if(Gf){if(!Zf.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");a="vml"}else a&&Zf[a]||(a="canvas");var o=new Zf[a](e,r,n,t);this.storage=r,this.painter=o;var s=$c.node||$c.worker?null:new _n(o.getViewportRoot());this.handler=new Sd(r,o,s,o.root),this.animation=new zf({stage:{update:m(this.flush,this)}}),this.animation.start(),this._needsRefresh;var l=r.delFromStorage,h=r.addToStorage;r.delFromStorage=function(t){l.call(r,t),t&&t.removeSelfFromZr(i)},r.addToStorage=function(t){h.call(r,t),t.addSelfToZr(i)}};Yf.prototype={constructor:Yf,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer&&this.painter.configLayer(t,e),this._needsRefresh=!0},setBackgroundColor:function(t){this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},flush:function(){var t;this._needsRefresh&&(t=!0,this.refreshImmediately()),this._needsRefreshHover&&(t=!0,this.refreshHoverImmediately()),t&&this.trigger("rendered")},addHover:function(t,e){if(this.painter.addHover){var n=this.painter.addHover(t,e);return this.refreshHover(),n}},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,n){this.handler.on(t,e,n)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null,bn(this.id)}};var qf=(Object.freeze||Object)({version:"4.0.5",init:wn,dispose:function(t){if(t)t.dispose();else{for(var e in Xf)Xf.hasOwnProperty(e)&&Xf[e].dispose();Xf={}}return this},getInstance:function(t){return Xf[t]},registerPainter:function(t,e){Zf[t]=e}}),jf=f,Uf=b,$f=x,Kf="series\0",Qf=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"],Jf=0,tp=".",ep="___EC__COMPONENT__CONTAINER___",np=0,ip=function(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0]);return function(e,n,i){for(var r={},a=0;a<t.length;a++){var o=t[a][1];if(!(n&&h(n,o)>=0||i&&h(i,o)<0)){var s=e.getShallow(o);null!=s&&(r[t[a][0]]=s)}}return r}},rp=ip([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),ap={getLineStyle:function(t){var e=rp(this,t),n=this.getLineDash(e.lineWidth);return n&&(e.lineDash=n),e},getLineDash:function(t){null==t&&(t=1);var e=this.get("type"),n=Math.max(t,2),i=4*t;return"solid"===e||null==e?null:"dashed"===e?[i,i]:[n,n]}},op=ip([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),sp={getAreaStyle:function(t,e){return op(this,t,e)}},lp=Math.pow,hp=Math.sqrt,up=1e-8,cp=1e-4,dp=hp(3),fp=1/3,pp=F(),gp=F(),vp=F(),mp=Math.min,yp=Math.max,xp=Math.sin,_p=Math.cos,wp=2*Math.PI,bp=F(),Mp=F(),Sp=F(),Ip=[],Tp=[],Cp={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},Ap=[],Dp=[],kp=[],Pp=[],Lp=Math.min,Op=Math.max,zp=Math.cos,Bp=Math.sin,Ep=Math.sqrt,Rp=Math.abs,Np="undefined"!=typeof Float32Array,Fp=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null};Fp.prototype={constructor:Fp,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e){this._ux=Rp(1/Ud/t)||0,this._uy=Rp(1/Ud/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(Cp.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var n=Rp(t-this._xi)>this._ux||Rp(e-this._yi)>this._uy||this._len<5;return this.addData(Cp.L,t,e),this._ctx&&n&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),n&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,n,i,r,a){return this.addData(Cp.C,t,e,n,i,r,a),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,n,i,r,a):this._ctx.bezierCurveTo(t,e,n,i,r,a)),this._xi=r,this._yi=a,this},quadraticCurveTo:function(t,e,n,i){return this.addData(Cp.Q,t,e,n,i),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,n,i):this._ctx.quadraticCurveTo(t,e,n,i)),this._xi=n,this._yi=i,this},arc:function(t,e,n,i,r,a){return this.addData(Cp.A,t,e,n,n,i,r-i,0,a?0:1),this._ctx&&this._ctx.arc(t,e,n,i,r,a),this._xi=zp(r)*n+t,this._yi=Bp(r)*n+e,this},arcTo:function(t,e,n,i,r){return this._ctx&&this._ctx.arcTo(t,e,n,i,r),this},rect:function(t,e,n,i){return this._ctx&&this._ctx.rect(t,e,n,i),this.addData(Cp.R,t,e,n,i),this},closePath:function(){this.addData(Cp.Z);var t=this._ctx,e=this._x0,n=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,n),t.closePath()),this._xi=e,this._yi=n,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,n=0;n<t.length;n++)e+=t[n];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length;this.data&&this.data.length==e||!Np||(this.data=new Float32Array(e));for(var n=0;e>n;n++)this.data[n]=t[n];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t.length,n=0,i=this._len,r=0;e>r;r++)n+=t[r].len();Np&&this.data instanceof Float32Array&&(this.data=new Float32Array(i+n));for(r=0;e>r;r++)for(var a=t[r].data,o=0;o<a.length;o++)this.data[i++]=a[o];this._len=i},addData:function(t){if(this._saveData){var e=this.data;this._len+arguments.length>e.length&&(this._expandData(),e=this.data);for(var n=0;n<arguments.length;n++)e[this._len++]=arguments[n];this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var n,i,r=this._dashSum,a=this._dashOffset,o=this._lineDash,s=this._ctx,l=this._xi,h=this._yi,u=t-l,c=e-h,d=Ep(u*u+c*c),f=l,p=h,g=o.length;for(u/=d,c/=d,0>a&&(a=r+a),f-=(a%=r)*u,p-=a*c;u>0&&t>=f||0>u&&f>=t||0==u&&(c>0&&e>=p||0>c&&p>=e);)f+=u*(n=o[i=this._dashIdx]),p+=c*n,this._dashIdx=(i+1)%g,u>0&&l>f||0>u&&f>l||c>0&&h>p||0>c&&p>h||s[i%2?"moveTo":"lineTo"](u>=0?Lp(f,t):Op(f,t),c>=0?Lp(p,e):Op(p,e));u=f-t,c=p-e,this._dashOffset=-Ep(u*u+c*c)},_dashedBezierTo:function(t,e,n,i,r,a){var o,s,l,h,u,c=this._dashSum,d=this._dashOffset,f=this._lineDash,p=this._ctx,g=this._xi,v=this._yi,m=qn,y=0,x=this._dashIdx,_=f.length,w=0;for(0>d&&(d=c+d),d%=c,o=0;1>o;o+=.1)s=m(g,t,n,r,o+.1)-m(g,t,n,r,o),l=m(v,e,i,a,o+.1)-m(v,e,i,a,o),y+=Ep(s*s+l*l);for(;_>x&&!((w+=f[x])>d);x++);for(o=(w-d)/y;1>=o;)h=m(g,t,n,r,o),u=m(v,e,i,a,o),x%2?p.moveTo(h,u):p.lineTo(h,u),o+=f[x]/y,x=(x+1)%_;x%2!=0&&p.lineTo(r,a),s=r-h,l=a-u,this._dashOffset=-Ep(s*s+l*l)},_dashedQuadraticTo:function(t,e,n,i){var r=n,a=i;n=(n+2*t)/3,i=(i+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,n,i,r,a)},toStatic:function(){var t=this.data;t instanceof Array&&(t.length=this._len,Np&&(this.data=new Float32Array(t)))},getBoundingRect:function(){Ap[0]=Ap[1]=kp[0]=kp[1]=Number.MAX_VALUE,Dp[0]=Dp[1]=Pp[0]=Pp[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,n=0,i=0,r=0,a=0;a<t.length;){var o=t[a++];switch(1==a&&(e=t[a],n=t[a+1],i=e,r=n),o){case Cp.M:e=i=t[a++],n=r=t[a++],kp[0]=i,kp[1]=r,Pp[0]=i,Pp[1]=r;break;case Cp.L:oi(e,n,t[a],t[a+1],kp,Pp),e=t[a++],n=t[a++];break;case Cp.C:si(e,n,t[a++],t[a++],t[a++],t[a++],t[a],t[a+1],kp,Pp),e=t[a++],n=t[a++];break;case Cp.Q:li(e,n,t[a++],t[a++],t[a],t[a+1],kp,Pp),e=t[a++],n=t[a++];break;case Cp.A:var s=t[a++],l=t[a++],h=t[a++],u=t[a++],c=t[a++],d=t[a++]+c,f=(t[a++],1-t[a++]);1==a&&(i=zp(c)*h+s,r=Bp(c)*u+l),hi(s,l,h,u,c,d,f,kp,Pp),e=zp(d)*h+s,n=Bp(d)*u+l;break;case Cp.R:oi(i=e=t[a++],r=n=t[a++],i+t[a++],r+t[a++],kp,Pp);break;case Cp.Z:e=i,n=r}Q(Ap,Ap,kp),J(Dp,Dp,Pp)}return 0===a&&(Ap[0]=Ap[1]=Dp[0]=Dp[1]=0),new re(Ap[0],Ap[1],Dp[0]-Ap[0],Dp[1]-Ap[1])},rebuildPath:function(t){for(var e,n,i,r,a,o,s=this.data,l=this._ux,h=this._uy,u=this._len,c=0;u>c;){var d=s[c++];switch(1==c&&(i=s[c],r=s[c+1],e=i,n=r),d){case Cp.M:e=i=s[c++],n=r=s[c++],t.moveTo(i,r);break;case Cp.L:a=s[c++],o=s[c++],(Rp(a-i)>l||Rp(o-r)>h||c===u-1)&&(t.lineTo(a,o),i=a,r=o);break;case Cp.C:t.bezierCurveTo(s[c++],s[c++],s[c++],s[c++],s[c++],s[c++]),i=s[c-2],r=s[c-1];break;case Cp.Q:t.quadraticCurveTo(s[c++],s[c++],s[c++],s[c++]),i=s[c-2],r=s[c-1];break;case Cp.A:var f=s[c++],p=s[c++],g=s[c++],v=s[c++],m=s[c++],y=s[c++],x=s[c++],_=s[c++],w=g>v?g:v,b=g>v?1:g/v,M=g>v?v/g:1,S=m+y;Math.abs(g-v)>.001?(t.translate(f,p),t.rotate(x),t.scale(b,M),t.arc(0,0,w,m,S,1-_),t.scale(1/b,1/M),t.rotate(-x),t.translate(-f,-p)):t.arc(f,p,w,m,S,1-_),1==c&&(e=zp(m)*g+f,n=Bp(m)*v+p),i=zp(S)*g+f,r=Bp(S)*v+p;break;case Cp.R:e=i=s[c],n=r=s[c+1],t.rect(s[c++],s[c++],s[c++],s[c++]);break;case Cp.Z:t.closePath(),i=e,r=n}}}},Fp.CMD=Cp;var Vp=2*Math.PI,Wp=2*Math.PI,Hp=Fp.CMD,Gp=2*Math.PI,Zp=1e-4,Xp=[-1,-1,-1],Yp=[-1,-1],qp=gf.prototype.getCanvasPattern,jp=Math.abs,Up=new Fp(!0);Si.prototype={constructor:Si,type:"path",__dirtyPath:!0,strokeContainThreshold:5,brush:function(t,e){var n=this.style,i=this.path||Up,r=n.hasStroke(),a=n.hasFill(),o=n.fill,s=n.stroke,l=a&&!!o.colorStops,h=r&&!!s.colorStops,u=a&&!!o.image,c=r&&!!s.image;if(n.bind(t,this,e),this.setTransform(t),this.__dirty){var d;l&&(d=d||this.getBoundingRect(),this._fillGradient=n.getGradient(t,o,d)),h&&(d=d||this.getBoundingRect(),this._strokeGradient=n.getGradient(t,s,d))}l?t.fillStyle=this._fillGradient:u&&(t.fillStyle=qp.call(o,t)),h?t.strokeStyle=this._strokeGradient:c&&(t.strokeStyle=qp.call(s,t));var f=n.lineDash,p=n.lineDashOffset,g=!!t.setLineDash,v=this.getGlobalScale();if(i.setScale(v[0],v[1]),this.__dirtyPath||f&&!g&&r?(i.beginPath(t),f&&!g&&(i.setLineDash(f),i.setLineDashOffset(p)),this.buildPath(i,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),a)if(null!=n.fillOpacity){m=t.globalAlpha;t.globalAlpha=n.fillOpacity*n.opacity,i.fill(t),t.globalAlpha=m}else i.fill(t);if(f&&g&&(t.setLineDash(f),t.lineDashOffset=p),r)if(null!=n.strokeOpacity){var m=t.globalAlpha;t.globalAlpha=n.strokeOpacity*n.opacity,i.stroke(t),t.globalAlpha=m}else i.stroke(t);f&&g&&t.setLineDash([]),null!=n.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))},buildPath:function(){},createPathProxy:function(){this.path=new Fp},getBoundingRect:function(){var t=this._rect,e=this.style,n=!t;if(n){var i=this.path;i||(i=this.path=new Fp),this.__dirtyPath&&(i.beginPath(),this.buildPath(i,this.shape,!1)),t=i.getBoundingRect()}if(this._rect=t,e.hasStroke()){var r=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this.__dirty||n){r.copy(t);var a=e.lineWidth,o=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(a=Math.max(a,this.strokeContainThreshold||4)),o>1e-10&&(r.width+=a/o,r.height+=a/o,r.x-=a/o/2,r.y-=a/o/2)}return r}return t},contain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect(),r=this.style;if(t=n[0],e=n[1],i.contain(t,e)){var a=this.path.data;if(r.hasStroke()){var o=r.lineWidth,s=r.strokeNoScale?this.getLineScale():1;if(s>1e-10&&(r.hasFill()||(o=Math.max(o,this.strokeContainThreshold)),Mi(a,o/s,t,e)))return!0}if(r.hasFill())return bi(a,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=this.__dirtyText=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):an.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var n=this.shape;if(n){if(b(t))for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);else n[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this.transform;return t&&jp(t[0]-1)>1e-10&&jp(t[3]-1)>1e-10?Math.sqrt(jp(t[0]*t[3]-t[2]*t[1])):1}},Si.extend=function(t){var e=function(e){Si.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var n=t.shape;if(n){this.shape=this.shape||{};var i=this.shape;for(var r in n)!i.hasOwnProperty(r)&&n.hasOwnProperty(r)&&(i[r]=n[r])}t.init&&t.init.call(this,e)};u(e,Si);for(var n in t)"style"!==n&&"shape"!==n&&(e.prototype[n]=t[n]);return e},u(Si,an);var $p=Fp.CMD,Kp=[[],[],[]],Qp=Math.sqrt,Jp=Math.atan2,tg=function(t,e){var n,i,r,a,o,s,l=t.data,h=$p.M,u=$p.C,c=$p.L,d=$p.R,f=$p.A,p=$p.Q;for(r=0,a=0;r<l.length;){switch(n=l[r++],a=r,i=0,n){case h:case c:i=1;break;case u:i=3;break;case p:i=2;break;case f:var g=e[4],v=e[5],m=Qp(e[0]*e[0]+e[1]*e[1]),y=Qp(e[2]*e[2]+e[3]*e[3]),x=Jp(-e[1]/y,e[0]/m);l[r]*=m,l[r++]+=g,l[r]*=y,l[r++]+=v,l[r++]*=m,l[r++]*=y,l[r++]+=x,l[r++]+=x,a=r+=2;break;case d:s[0]=l[r++],s[1]=l[r++],K(s,s,e),l[a++]=s[0],l[a++]=s[1],s[0]+=l[r++],s[1]+=l[r++],K(s,s,e),l[a++]=s[0],l[a++]=s[1]}for(o=0;i>o;o++)(s=Kp[o])[0]=l[r++],s[1]=l[r++],K(s,s,e),l[a++]=s[0],l[a++]=s[1]}},eg=Math.sqrt,ng=Math.sin,ig=Math.cos,rg=Math.PI,ag=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},og=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(ag(t)*ag(e))},sg=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(og(t,e))},lg=/([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,hg=/-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,ug=function(t){an.call(this,t)};ug.prototype={constructor:ug,type:"text",brush:function(t,e){var n=this.style;this.__dirty&&Ve(n),n.fill=n.stroke=n.shadowBlur=n.shadowColor=n.shadowOffsetX=n.shadowOffsetY=null;var i=n.text;null!=i&&(i+=""),rn(i,n)&&(this.setTransform(t),He(this,t,i,n,null,e),this.restoreTransform(t))},getBoundingRect:function(){var t=this.style;if(this.__dirty&&Ve(t),!this._rect){var e=t.text;null!=e?e+="":e="";var n=Me(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.rich);if(n.x+=t.x||0,n.y+=t.y||0,Je(t.textStroke,t.textStrokeWidth)){var i=t.textStrokeWidth;n.x-=i/2,n.y-=i/2,n.width+=i,n.height+=i}this._rect=n}return this._rect}},u(ug,an);var cg=Si.extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,n){n&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}}),dg=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]],fg=function(t){return $c.browser.ie&&$c.browser.version>=11?function(){var e,n=this.__clipPaths,i=this.style;if(n)for(var r=0;r<n.length;r++){var a=n[r],o=a&&a.shape,s=a&&a.type;if(o&&("sector"===s&&o.startAngle===o.endAngle||"rect"===s&&(!o.width||!o.height))){for(l=0;l<dg.length;l++)dg[l][2]=i[dg[l][0]],i[dg[l][0]]=dg[l][1];e=!0;break}}if(t.apply(this,arguments),e)for(var l=0;l<dg.length;l++)i[dg[l][0]]=dg[l][2]}:t},pg=Si.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:fg(Si.prototype.brush),buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r0||0,0),a=Math.max(e.r,0),o=e.startAngle,s=e.endAngle,l=e.clockwise,h=Math.cos(o),u=Math.sin(o);t.moveTo(h*r+n,u*r+i),t.lineTo(h*a+n,u*a+i),t.arc(n,i,a,o,s,!l),t.lineTo(Math.cos(s)*r+n,Math.sin(s)*r+i),0!==r&&t.arc(n,i,r,s,o,l),t.closePath()}}),gg=Si.extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=2*Math.PI;t.moveTo(n+e.r,i),t.arc(n,i,e.r,0,r,!1),t.moveTo(n+e.r0,i),t.arc(n,i,e.r0,0,r,!0)}}),vg=function(t,e){for(var n=t.length,i=[],r=0,a=1;n>a;a++)r+=U(t[a-1],t[a]);var o=r/2;o=n>o?n:o;for(a=0;o>a;a++){var s,l,h,u=a/(o-1)*(e?n:n-1),c=Math.floor(u),d=u-c,f=t[c%n];e?(s=t[(c-1+n)%n],l=t[(c+1)%n],h=t[(c+2)%n]):(s=t[0===c?c:c-1],l=t[c>n-2?n-1:c+1],h=t[c>n-3?n-1:c+2]);var p=d*d,g=d*p;i.push([ki(s[0],f[0],l[0],h[0],d,p,g),ki(s[1],f[1],l[1],h[1],d,p,g)])}return i},mg=function(t,e,n,i){var r,a,o,s,l=[],h=[],u=[],c=[];if(i){o=[1/0,1/0],s=[-1/0,-1/0];for(var d=0,f=t.length;f>d;d++)Q(o,o,t[d]),J(s,s,t[d]);Q(o,o,i[0]),J(s,s,i[1])}for(var d=0,f=t.length;f>d;d++){var p=t[d];if(n)r=t[d?d-1:f-1],a=t[(d+1)%f];else{if(0===d||d===f-1){l.push(W(t[d]));continue}r=t[d-1],a=t[d+1]}Z(h,a,r),q(h,h,e);var g=U(p,r),v=U(p,a),m=g+v;0!==m&&(g/=m,v/=m),q(u,h,-g),q(c,h,v);var y=H([],p,u),x=H([],p,c);i&&(J(y,y,o),Q(y,y,s),J(x,x,o),Q(x,x,s)),l.push(y),l.push(x)}return n&&l.push(l.shift()),l},yg=Si.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){Pi(t,e,!0)}}),xg=Si.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){Pi(t,e,!1)}}),_g=Si.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width,a=e.height;e.r?Fe(t,e):t.rect(n,i,r,a),t.closePath()}}),wg=Si.extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,a=e.y2,o=e.percent;0!==o&&(t.moveTo(n,i),1>o&&(r=n*(1-o)+r*o,a=i*(1-o)+a*o),t.lineTo(r,a))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}}),bg=[],Mg=Si.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,a=e.y2,o=e.cpx1,s=e.cpy1,l=e.cpx2,h=e.cpy2,u=e.percent;0!==u&&(t.moveTo(n,i),null==l||null==h?(1>u&&(ii(n,o,r,u,bg),o=bg[1],r=bg[2],ii(i,s,a,u,bg),s=bg[1],a=bg[2]),t.quadraticCurveTo(o,s,r,a)):(1>u&&(Kn(n,o,l,r,u,bg),o=bg[1],l=bg[2],r=bg[3],Kn(i,s,h,a,u,bg),s=bg[1],h=bg[2],a=bg[3]),t.bezierCurveTo(o,s,l,h,r,a)))},pointAt:function(t){return Li(this.shape,t,!1)},tangentAt:function(t){var e=Li(this.shape,t,!0);return j(e,e)}}),Sg=Si.extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r,0),a=e.startAngle,o=e.endAngle,s=e.clockwise,l=Math.cos(a),h=Math.sin(a);t.moveTo(l*r+n,h*r+i),t.arc(n,i,r,a,o,!s)}}),Ig=Si.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,n=0;n<e.length;n++)t=t||e[n].__dirtyPath;this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),n=0;n<t.length;n++)t[n].path||t[n].createPathProxy(),t[n].path.setScale(e[0],e[1])},buildPath:function(t,e){for(var n=e.paths||[],i=0;i<n.length;i++)n[i].buildPath(t,n[i].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),Si.prototype.getBoundingRect.call(this)}}),Tg=function(t){this.colorStops=t||[]};Tg.prototype={constructor:Tg,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}};var Cg=function(t,e,n,i,r,a){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==n?1:n,this.y2=null==i?0:i,this.type="linear",this.global=a||!1,Tg.call(this,r)};Cg.prototype={constructor:Cg},u(Cg,Tg);var Ag=function(t,e,n,i,r){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==n?.5:n,this.type="radial",this.global=r||!1,Tg.call(this,i)};Ag.prototype={constructor:Ag},u(Ag,Tg),Oi.prototype.incremental=!0,Oi.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1},Oi.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty()},Oi.prototype.addDisplayables=function(t,e){e=e||!1;for(var n=0;n<t.length;n++)this.addDisplayable(t[n],e)},Oi.prototype.eachPendingDisplayable=function(t){for(e=this._cursor;e<this._displayables.length;e++)t&&t(this._displayables[e]);for(var e=0;e<this._temporaryDisplayables.length;e++)t&&t(this._temporaryDisplayables[e])},Oi.prototype.update=function(){this.updateTransform();for(t=this._cursor;t<this._displayables.length;t++)(e=this._displayables[t]).parent=this,e.update(),e.parent=null;for(var t=0;t<this._temporaryDisplayables.length;t++){var e=this._temporaryDisplayables[t];e.parent=this,e.update(),e.parent=null}},Oi.prototype.brush=function(t){for(e=this._cursor;e<this._displayables.length;e++)(n=this._displayables[e]).beforeBrush&&n.beforeBrush(t),n.brush(t,e===this._cursor?null:this._displayables[e-1]),n.afterBrush&&n.afterBrush(t);this._cursor=e;for(var e=0;e<this._temporaryDisplayables.length;e++){var n=this._temporaryDisplayables[e];n.beforeBrush&&n.beforeBrush(t),n.brush(t,0===e?null:this._temporaryDisplayables[e-1]),n.afterBrush&&n.afterBrush(t)}this._temporaryDisplayables=[],this.notClear=!0};var Dg=[];Oi.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new re(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var n=this._displayables[e],i=n.getBoundingRect().clone();n.needLocalTransform()&&i.applyTransform(n.getLocalTransform(Dg)),t.union(i)}this._rect=t}return this._rect},Oi.prototype.contain=function(t,e){var n=this.transformCoordToLocal(t,e);if(this.getBoundingRect().contain(n[0],n[1]))for(var i=0;i<this._displayables.length;i++)if(this._displayables[i].contain(t,e))return!0;return!1},u(Oi,an);var kg=Math.round,Pg=Math.max,Lg=Math.min,Og={},zg=R(),Bg=0,Eg=(Object.freeze||Object)({extendShape:zi,extendPath:function(t,e){return Di(t,e)},makePath:Bi,makeImage:Ei,mergePath:function(t,e){for(var n=[],i=t.length,r=0;i>r;r++){var a=t[r];a.path||a.createPathProxy(),a.__dirtyPath&&a.buildPath(a.path,a.shape,!0),n.push(a.path)}var o=new Si(e);return o.createPathProxy(),o.buildPath=function(t){t.appendPath(n);var e=t.getContext();e&&t.rebuildPath(e)},o},resizePath:Ni,subPixelOptimizeLine:Fi,subPixelOptimizeRect:Vi,subPixelOptimize:Wi,setElementHoverStyle:$i,isInEmphasis:Ki,setHoverStyle:nr,setAsHoverStyleTrigger:ir,setLabelStyle:rr,setTextStyle:ar,setText:function(t,e,n){var i,r={isRectText:!0};!1===n?i=!0:r.autoColor=n,or(t,e,r,i)},getFont:dr,updateProps:pr,initProps:gr,getTransform:vr,applyTransform:mr,transformDirection:yr,groupTransition:xr,clipPointsByRect:function(t,e){return p(t,function(t){var n=t[0];n=Pg(n,e.x),n=Lg(n,e.x+e.width);var i=t[1];return i=Pg(i,e.y),i=Lg(i,e.y+e.height),[n,i]})},clipRectByRect:function(t,e){var n=Pg(t.x,e.x),i=Lg(t.x+t.width,e.x+e.width),r=Pg(t.y,e.y),a=Lg(t.y+t.height,e.y+e.height);return i>=n&&a>=r?{x:n,y:r,width:i-n,height:a-r}:void 0},createIcon:_r,Group:rf,Image:on,Text:ug,Circle:cg,Sector:pg,Ring:gg,Polygon:yg,Polyline:xg,Rect:_g,Line:wg,BezierCurve:Mg,Arc:Sg,IncrementalDisplayable:Oi,CompoundPath:Ig,LinearGradient:Cg,RadialGradient:Ag,BoundingRect:re}),Rg=["textStyle","color"],Ng={getTextColor:function(t){var e=this.ecModel;return this.getShallow("color")||(!t&&e?e.get(Rg):null)},getFont:function(){return dr({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return Me(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("rich"),this.getShallow("truncateText"))}},Fg=ip([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),Vg={getItemStyle:function(t,e){var n=Fg(this,t,e),i=this.getBorderLineDash();return i&&(n.lineDash=i),n},getBorderLineDash:function(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}},Wg=c,Hg=Ln();wr.prototype={constructor:wr,init:null,mergeOption:function(t){r(this.option,t,!0)},get:function(t,e){return null==t?this.option:br(this.option,this.parsePath(t),!e&&Mr(this,t))},getShallow:function(t,e){var n=this.option,i=null==n?n:n[t],r=!e&&Mr(this,t);return null==i&&r&&(i=r.getShallow(t)),i},getModel:function(t,e){var n,i=null==t?this.option:br(this.option,t=this.parsePath(t));return e=e||(n=Mr(this,t))&&n.getModel(t),new wr(i,e,this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){return new(0,this.constructor)(i(this.option))},setReadOnly:function(){},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){Hg(this).getParent=t},isAnimationEnabled:function(){if(!$c.node){if(null!=this.option.animation)return!!this.option.animation;if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},Vn(wr),Wn(wr),Wg(wr,ap),Wg(wr,sp),Wg(wr,Ng),Wg(wr,Vg);var Gg=0,Zg=1e-4,Xg=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,Yg=(Object.freeze||Object)({linearMap:Tr,parsePercent:Cr,round:Ar,asc:Dr,getPrecision:function(t){if(t=+t,isNaN(t))return 0;for(var e=1,n=0;Math.round(t*e)/e!==t;)e*=10,n++;return n},getPrecisionSafe:kr,getPixelPrecision:Pr,getPercentWithPrecision:Lr,MAX_SAFE_INTEGER:9007199254740991,remRadian:Or,isRadianAroundZero:zr,parseDate:Br,quantity:Er,nice:Nr,quantile:function(t,e){var n=(t.length-1)*e+1,i=Math.floor(n),r=+t[i-1],a=n-i;return a?r+a*(t[i]-r):r},reformIntervals:function(t){function e(t,n,i){return t.interval[i]<n.interval[i]||t.interval[i]===n.interval[i]&&(t.close[i]-n.close[i]==(i?-1:1)||!i&&e(t,n,1))}t.sort(function(t,n){return e(t,n,0)?-1:1});for(var n=-1/0,i=1,r=0;r<t.length;){for(var a=t[r].interval,o=t[r].close,s=0;2>s;s++)a[s]<=n&&(a[s]=n,o[s]=s?1:1-i),n=a[s],i=o[s];a[0]===a[1]&&o[0]*o[1]!=1?t.splice(r,1):r++}return t},isNumeric:function(t){return t-parseFloat(t)>=0}}),qg=P,jg=/([&<>"'])/g,Ug={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$g=["a","b","c","d","e","f","g"],Kg=function(t,e){return"{"+t+(null==e?"":e)+"}"},Qg=De,Jg=Me,tv=(Object.freeze||Object)({addCommas:Fr,toCamelCase:Vr,normalizeCssArray:qg,encodeHTML:Wr,formatTpl:Hr,formatTplSimple:function(t,e,n){return f(e,function(e,i){t=t.replace("{"+i+"}",n?Wr(e):e)}),t},getTooltipMarker:Gr,formatTime:Xr,capitalFirst:Yr,truncateText:Qg,getTextRect:Jg}),ev=f,nv=["left","right","top","bottom","width","height"],iv=[["width","left","right"],["height","top","bottom"]],rv=qr,av=(y(qr,"vertical"),y(qr,"horizontal"),{getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}}),ov=Ln(),sv=wr.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,n,i){wr.call(this,t,e,n,i),this.uid=Sr("ec_cpt_model")},init:function(t,e,n){this.mergeDefaultAndTheme(t,n)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?$r(t):{};r(t,e.getTheme().get(this.mainType)),r(t,this.getDefaultOption()),n&&Ur(t,i,n)},mergeOption:function(t){r(this.option,t,!0);var e=this.layoutMode;e&&Ur(this.option,t,e)},optionUpdated:function(){},getDefaultOption:function(){var t=ov(this);if(!t.defaultOption){for(var e=[],n=this.constructor;n;){var i=n.prototype.defaultOption;i&&e.push(i),n=n.superClass}for(var a={},o=e.length-1;o>=0;o--)a=r(a,e[o],!0);t.defaultOption=a}return t.defaultOption},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}});Zn(sv,{registerWhenExtend:!0}),function(t){var e={};t.registerSubTypeDefaulter=function(t,n){t=Nn(t),e[t.main]=n},t.determineSubType=function(n,i){var r=i.type;if(!r){var a=Nn(n).main;t.hasSubTypes(n)&&e[a]&&(r=e[a](i))}return r}}(sv),function(t,e){function n(t){var n={},a=[];return f(t,function(o){var s=i(n,o),l=r(s.originalDeps=e(o),t);s.entryCount=l.length,0===s.entryCount&&a.push(o),f(l,function(t){h(s.predecessor,t)<0&&s.predecessor.push(t);var e=i(n,t);h(e.successor,t)<0&&e.successor.push(o)})}),{graph:n,noEntryList:a}}function i(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}function r(t,e){var n=[];return f(t,function(t){h(e,t)>=0&&n.push(t)}),n}t.topologicalTravel=function(t,e,i,r){function a(t){s[t].entryCount--,0===s[t].entryCount&&l.push(t)}if(t.length){var o=n(e),s=o.graph,l=o.noEntryList,h={};for(f(t,function(t){h[t]=!0});l.length;){var u=l.pop(),c=s[u],d=!!h[u];d&&(i.call(r,u,c.originalDeps.slice()),delete h[u]),f(c.successor,d?function(t){h[t]=!0,a(t)}:a)}f(h,function(){throw new Error("Circle dependency may exists")})}}}(sv,function(t){var e=[];return f(sv.getClassesByMainType(t),function(t){e=e.concat(t.prototype.dependencies||[])}),e=p(e,function(t){return Nn(t).main}),"dataset"!==t&&h(e,"dataset")<=0&&e.unshift("dataset"),e}),c(sv,av);var lv="";"undefined"!=typeof navigator&&(lv=navigator.platform||"");var hv={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],gradientColor:["#f6efa6","#d88273","#bf444c"],textStyle:{fontFamily:lv.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1},uv=Ln(),cv={clearColorPalette:function(){uv(this).colorIdx=0,uv(this).colorNameMap={}},getColorFromPalette:function(t,e,n){var i=uv(e=e||this),r=i.colorIdx||0,a=i.colorNameMap=i.colorNameMap||{};if(a.hasOwnProperty(t))return a[t];var o=Mn(this.get("color",!0)),s=this.get("colorLayer",!0),l=null!=n&&s?Qr(s,n):o;if((l=l||o)&&l.length){var h=l[r];return t&&(a[t]=h),i.colorIdx=(r+1)%l.length,h}}},dv={cartesian2d:function(t,e,n,i){var r=t.getReferringComponents("xAxis")[0],a=t.getReferringComponents("yAxis")[0];e.coordSysDims=["x","y"],n.set("x",r),n.set("y",a),ta(r)&&(i.set("x",r),e.firstCategoryDimIndex=0),ta(a)&&(i.set("y",a),e.firstCategoryDimIndex=1)},singleAxis:function(t,e,n,i){var r=t.getReferringComponents("singleAxis")[0];e.coordSysDims=["single"],n.set("single",r),ta(r)&&(i.set("single",r),e.firstCategoryDimIndex=0)},polar:function(t,e,n,i){var r=t.getReferringComponents("polar")[0],a=r.findAxisModel("radiusAxis"),o=r.findAxisModel("angleAxis");e.coordSysDims=["radius","angle"],n.set("radius",a),n.set("angle",o),ta(a)&&(i.set("radius",a),e.firstCategoryDimIndex=0),ta(o)&&(i.set("angle",o),e.firstCategoryDimIndex=1)},geo:function(t,e){e.coordSysDims=["lng","lat"]},parallel:function(t,e,n,i){var r=t.ecModel,a=r.getComponent("parallel",t.get("parallelIndex")),o=e.coordSysDims=a.dimensions.slice();f(a.parallelAxisIndex,function(t,a){var s=r.getComponent("parallelAxis",t),l=o[a];n.set(l,s),ta(s)&&null==e.firstCategoryDimIndex&&(i.set(l,s),e.firstCategoryDimIndex=a)})}},fv="original",pv="arrayRows",gv="objectRows",vv="keyedColumns",mv="unknown",yv="typedArray",xv="column",_v="row";ea.seriesDataToSource=function(t){return new ea({data:t,sourceFormat:S(t)?yv:fv,fromDataset:!1})},Wn(ea);var wv=Ln(),bv="\0_ec_inner",Mv=wr.extend({init:function(t,e,n,i){n=n||{},this.option=null,this._theme=new wr(n),this._optionManager=i},setOption:function(t,e){L(!(bv in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,n=this._optionManager;if(!t||"recreate"===t){var i=n.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(i)):va.call(this,i),e=!0}if(("timeline"===t||"media"===t)&&this.restoreData(),!t||"recreate"===t||"timeline"===t){var r=n.getTimelineOption(this);r&&(this.mergeOption(r),e=!0)}if(!t||"recreate"===t||"media"===t){var a=n.getMediaOption(this,this._api);a.length&&f(a,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){var e=this.option,n=this._componentsMap,a=[];ra(this),f(t,function(t,n){null!=t&&(sv.hasClass(n)?n&&a.push(n):e[n]=null==e[n]?i(t):r(e[n],t,!0))}),sv.topologicalTravel(a,sv.getAllClassMainTypes(),function(i,r){var a=Mn(t[i]),s=Cn(n.get(i),a);An(s),f(s,function(t){var e=t.option;b(e)&&(t.keyInfo.mainType=i,t.keyInfo.subType=ya(i,e,t.exist))});var l=ma(n,r);e[i]=[],n.set(i,[]),f(s,function(t,r){var a=t.exist,s=t.option;if(L(b(s)||a,"Empty component definition"),s){var h=sv.getClass(i,t.keyInfo.subType,!0);if(a&&a instanceof h)a.name=t.keyInfo.name,a.mergeOption(s,this),a.optionUpdated(s,!1);else{var u=o({dependentModels:l,componentIndex:r},t.keyInfo);o(a=new h(s,this,this,u),u),a.init(s,this,this,u),a.optionUpdated(null,!0)}}else a.mergeOption({},this),a.optionUpdated({},!1);n.get(i)[r]=a,e[i][r]=a.option},this),"series"===i&&xa(this,n.get("series"))},this),this._seriesIndicesMap=R(this._seriesIndices=this._seriesIndices||[])},getOption:function(){var t=i(this.option);return f(t,function(e,n){if(sv.hasClass(n)){for(var i=(e=Mn(e)).length-1;i>=0;i--)kn(e[i])&&e.splice(i,1);t[n]=e}}),delete t[bv],t},getTheme:function(){return this._theme},getComponent:function(t,e){var n=this._componentsMap.get(t);return n?n[e||0]:void 0},queryComponents:function(t){var e=t.mainType;if(!e)return[];var n=t.index,i=t.id,r=t.name,a=this._componentsMap.get(e);if(!a||!a.length)return[];var o;if(null!=n)x(n)||(n=[n]),o=v(p(n,function(t){return a[t]}),function(t){return!!t});else if(null!=i){var s=x(i);o=v(a,function(t){return s&&h(i,t.id)>=0||!s&&t.id===i})}else if(null!=r){var l=x(r);o=v(a,function(t){return l&&h(r,t.name)>=0||!l&&t.name===r})}else o=a.slice();return _a(o,t)},findComponents:function(t){var e=t.query,n=t.mainType,i=function(t){var e=n+"Index",i=n+"Id",r=n+"Name";return!t||null==t[e]&&null==t[i]&&null==t[r]?null:{mainType:n,index:t[e],id:t[i],name:t[r]}}(e);return function(e){return t.filter?v(e,t.filter):e}(_a(i?this.queryComponents(i):this._componentsMap.get(n),t))},eachComponent:function(t,e,n){var i=this._componentsMap;"function"==typeof t?(n=e,e=t,i.each(function(t,i){f(t,function(t,r){e.call(n,i,t,r)})})):w(t)?f(i.get(t),e,n):b(t)&&f(this.findComponents(t),e,n)},getSeriesByName:function(t){return v(this._componentsMap.get("series"),function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){return v(this._componentsMap.get("series"),function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},getSeriesCount:function(){return this._componentsMap.get("series").length},eachSeries:function(t,e){f(this._seriesIndices,function(n){var i=this._componentsMap.get("series")[n];t.call(e,i,n)},this)},eachRawSeries:function(t,e){f(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,n){f(this._seriesIndices,function(i){var r=this._componentsMap.get("series")[i];r.subType===t&&e.call(n,r,i)},this)},eachRawSeriesByType:function(t,e,n){return f(this.getSeriesByType(t),e,n)},isSeriesFiltered:function(t){return null==this._seriesIndicesMap.get(t.componentIndex)},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){xa(this,v(this._componentsMap.get("series"),t,e))},restoreData:function(t){var e=this._componentsMap;xa(this,e.get("series"));var n=[];e.each(function(t,e){n.push(e)}),sv.topologicalTravel(n,sv.getAllClassMainTypes(),function(n){f(e.get(n),function(e){("series"!==n||!pa(e,t))&&e.restoreData()})})}});c(Mv,cv);var Sv=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"],Iv={};ba.prototype={constructor:ba,create:function(t,e){var n=[];f(Iv,function(i){var r=i.create(t,e);n=n.concat(r||[])}),this._coordinateSystems=n},update:function(t,e){f(this._coordinateSystems,function(n){n.update&&n.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},ba.register=function(t,e){Iv[t]=e},ba.get=function(t){return Iv[t]};var Tv=f,Cv=i,Av=p,Dv=r,kv=/^(min|max)?(.+)$/;Ma.prototype={constructor:Ma,setOption:function(t,e){t&&f(Mn(t.series),function(t){t&&t.data&&S(t.data)&&z(t.data)}),t=Cv(t,!0);var n=this._optionBackup,i=Sa.call(this,t,e,!n);this._newBaseOption=i.baseOption,n?(Aa(n.baseOption,i.baseOption),i.timelineOptions.length&&(n.timelineOptions=i.timelineOptions),i.mediaList.length&&(n.mediaList=i.mediaList),i.mediaDefault&&(n.mediaDefault=i.mediaDefault)):this._optionBackup=i},mountOption:function(t){var e=this._optionBackup;return this._timelineOptions=Av(e.timelineOptions,Cv),this._mediaList=Av(e.mediaList,Cv),this._mediaDefault=Cv(e.mediaDefault),this._currentMediaIndices=[],Cv(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,n=this._timelineOptions;if(n.length){var i=t.getComponent("timeline");i&&(e=Cv(n[i.getCurrentIndex()],!0))}return e},getMediaOption:function(){var t=this._api.getWidth(),e=this._api.getHeight(),n=this._mediaList,i=this._mediaDefault,r=[],a=[];if(!n.length&&!i)return a;for(var o=0,s=n.length;s>o;o++)Ia(n[o].query,t,e)&&r.push(o);return!r.length&&i&&(r=[-1]),r.length&&!Ca(r,this._currentMediaIndices)&&(a=Av(r,function(t){return Cv(-1===t?i.option:n[t].option)})),this._currentMediaIndices=r,a}};var Pv=f,Lv=b,Ov=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"],zv=function(t,e){Pv(Ba(t.series),function(t){Lv(t)&&za(t)});var n=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"];e&&n.push("valueAxis","categoryAxis","logAxis","timeAxis"),Pv(n,function(e){Pv(Ba(t[e]),function(t){t&&(La(t,"axisLabel"),La(t.axisPointer,"label"))})}),Pv(Ba(t.parallel),function(t){var e=t&&t.parallelAxisDefault;La(e,"axisLabel"),La(e&&e.axisPointer,"label")}),Pv(Ba(t.calendar),function(t){ka(t,"itemStyle"),La(t,"dayLabel"),La(t,"monthLabel"),La(t,"yearLabel")}),Pv(Ba(t.radar),function(t){La(t,"name")}),Pv(Ba(t.geo),function(t){Lv(t)&&(Oa(t),Pv(Ba(t.regions),function(t){Oa(t)}))}),Pv(Ba(t.timeline),function(t){Oa(t),ka(t,"label"),ka(t,"itemStyle"),ka(t,"controlStyle",!0);var e=t.data;x(e)&&f(e,function(t){b(t)&&(ka(t,"label"),ka(t,"itemStyle"))})}),Pv(Ba(t.toolbox),function(t){ka(t,"iconStyle"),Pv(t.feature,function(t){ka(t,"iconStyle")})}),La(Ea(t.axisPointer),"label"),La(Ea(t.tooltip).axisPointer,"label")},Bv=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],Ev=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],Rv=function(t,e){zv(t,e),t.series=Mn(t.series),f(t.series,function(t){if(b(t)){var e=t.type;if(("pie"===e||"gauge"===e)&&null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var n=Ra(t,"pointer.color");null!=n&&Na(t,"itemStyle.normal.color",n)}Fa(t)}}),t.dataRange&&(t.visualMap=t.dataRange),f(Ev,function(e){var n=t[e];n&&(x(n)||(n=[n]),f(n,function(t){Fa(t)}))})},Nv=Wa.prototype;Nv.pure=!1,Nv.persistent=!0,Nv.getSource=function(){return this._source};var Fv={arrayRows_column:{pure:!0,count:function(){return Math.max(0,this._data.length-this._source.startIndex)},getItem:function(t){return this._data[t+this._source.startIndex]},appendData:Za},arrayRows_row:{pure:!0,count:function(){var t=this._data[0];return t?Math.max(0,t.length-this._source.startIndex):0},getItem:function(t){t+=this._source.startIndex;for(var e=[],n=this._data,i=0;i<n.length;i++){var r=n[i];e.push(r?r[t]:null)}return e},appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},objectRows:{pure:!0,count:Ha,getItem:Ga,appendData:Za},keyedColumns:{pure:!0,count:function(){var t=this._source.dimensionsDefine[0].name,e=this._data[t];return e?e.length:0},getItem:function(t){for(var e=[],n=this._source.dimensionsDefine,i=0;i<n.length;i++){var r=this._data[n[i].name];e.push(r?r[t]:null)}return e},appendData:function(t){var e=this._data;f(t,function(t,n){for(var i=e[n]||(e[n]=[]),r=0;r<(t||[]).length;r++)i.push(t[r])})}},original:{count:Ha,getItem:Ga,appendData:Za},typedArray:{persistent:!1,pure:!0,count:function(){return this._data?this._data.length/this._dimSize:0},getItem:function(t,e){t-=this._offset,e=e||[];for(var n=this._dimSize*t,i=0;i<this._dimSize;i++)e[i]=this._data[n+i];return e},appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}}},Vv={arrayRows:Xa,objectRows:function(t,e,n,i){return null!=n?t[i]:t},keyedColumns:Xa,original:function(t,e,n){var i=In(t);return null!=n&&i instanceof Array?i[n]:i},typedArray:Xa},Wv={arrayRows:Ya,objectRows:function(t,e){return qa(t[e],this._dimensionInfos[e])},keyedColumns:Ya,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value);return!this._rawData.pure&&Tn(t)&&(this.hasItemOption=!0),qa(r instanceof Array?r[i]:r,this._dimensionInfos[e])},typedArray:function(t,e,n,i){return t[i]}},Hv=/\{@(.+?)\}/g,Gv={getDataParams:function(t,e){var n=this.getData(e),i=this.getRawValue(t,e),r=n.getRawIndex(t),a=n.getName(t),o=n.getRawDataItem(t),s=n.getItemVisual(t,"color"),l=this.ecModel.getComponent("tooltip"),h=Rn(l&&l.get("renderMode")),u=this.mainType,c="series"===u;return{componentType:u,componentSubType:this.subType,componentIndex:this.componentIndex,seriesType:c?this.subType:null,seriesIndex:this.seriesIndex,seriesId:c?this.id:null,seriesName:c?this.name:null,name:a,dataIndex:r,data:o,dataType:e,value:i,color:s,marker:Gr({color:s,renderMode:h}),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,n,i,r){e=e||"normal";var a=this.getData(n),o=a.getItemModel(t),s=this.getDataParams(t,n);null!=i&&s.value instanceof Array&&(s.value=s.value[i]);var l=o.get("normal"===e?[r||"label","formatter"]:[e,r||"label","formatter"]);return"function"==typeof l?(s.status=e,l(s)):"string"==typeof l?Hr(l,s).replace(Hv,function(e,n){var i=n.length;return"["===n.charAt(0)&&"]"===n.charAt(i-1)&&(n=+n.slice(1,i-1)),ja(a,t,n)}):void 0},getRawValue:function(t,e){return ja(this.getData(e),t)},formatTooltip:function(){}},Zv=Ka.prototype;Zv.perform=function(t){function e(t){return!(t>=1)&&(t=1),t}var n=this._upstream,i=t&&t.skip;if(this._dirty&&n){var r=this.context;r.data=r.outputData=n.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this);var a;this._plan&&!i&&(a=this._plan(this.context));var o=e(this._modBy),s=this._modDataCount||0,l=e(t&&t.modBy),h=t&&t.modDataCount||0;(o!==l||s!==h)&&(a="reset");var u;(this._dirty||"reset"===a)&&(this._dirty=!1,u=Ja(this,i)),this._modBy=l,this._modDataCount=h;var c=t&&t.step;if(this._dueEnd=n?n._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var d=this._dueIndex,f=Math.min(null!=c?this._dueIndex+c:1/0,this._dueEnd);if(!i&&(u||f>d)){var p=this._progress;if(x(p))for(var g=0;g<p.length;g++)Qa(this,p[g],d,f,l,h);else Qa(this,p,d,f,l,h)}this._dueIndex=f;var v=null!=this._settedOutputEnd?this._settedOutputEnd:f;this._outputDueEnd=v}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished()};var Xv=function(){function t(){return n>i?i++:null}function e(){var t=i%o*r+Math.ceil(i/o),e=i>=n?null:a>t?t:i;return i++,e}var n,i,r,a,o,s={reset:function(l,h,u,c){i=l,n=h,r=u,a=c,o=Math.ceil(a/r),s.next=r>1&&a>0?e:t}};return s}();Zv.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},Zv.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},Zv.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty())},Zv.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},Zv.getUpstream=function(){return this._upstream},Zv.getDownstream=function(){return this._downstream},Zv.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t};var Yv=Ln(),qv=sv.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.color",layoutMode:null,init:function(t,e,n){this.seriesIndex=this.componentIndex,this.dataTask=$a({count:no,reset:io}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,n),aa(this);var i=this.getInitialData(t,n);ao(i,this),this.dataTask.context.data=i,Yv(this).dataBeforeProcessed=i,to(this)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?$r(t):{},a=this.subType;sv.hasClass(a)&&(a+="Series"),r(t,e.getTheme().get(this.subType)),r(t,this.getDefaultOption()),Sn(t,"label",["show"]),this.fillDataTextStyle(t.data),n&&Ur(t,i,n)},mergeOption:function(t,e){t=r(this.option,t,!0),this.fillDataTextStyle(t.data);var n=this.layoutMode;n&&Ur(this.option,t,n),aa(this);var i=this.getInitialData(t,e);ao(i,this),this.dataTask.dirty(),this.dataTask.context.data=i,Yv(this).dataBeforeProcessed=i,to(this)},fillDataTextStyle:function(t){if(t&&!S(t))for(var e=["show"],n=0;n<t.length;n++)t[n]&&t[n].label&&Sn(t[n],"label",e)},getInitialData:function(){},appendData:function(t){this.getRawData().appendData(t.data)},getData:function(t){var e=so(this);if(e){var n=e.context.data;return null==t?n:n.getLinkedData(t)}return Yv(this).data},setData:function(t){var e=so(this);if(e){var n=e.context;n.data!==t&&e.modifyOutputEnd&&e.setOutputEnd(t.count()),n.outputData=t,e!==this.dataTask&&(n.data=t)}Yv(this).data=t},getSource:function(){return ia(this)},getRawData:function(){return Yv(this).dataBeforeProcessed},getBaseAxis:function(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,n,i){var r=this,a="html"===(i=i||"html")?"<br/>":"\n",o="richText"===i,s={},l=0,h=this.getData(),u=h.mapDimension("defaultedTooltip",!0),c=u.length,d=this.getRawValue(t),p=x(d),v=h.getItemVisual(t,"color");b(v)&&v.colorStops&&(v=(v.colorStops[0]||{}).color),v=v||"transparent";var m=(c>1||p&&!c?function(n){function a(t,n){var a=h.getDimensionInfo(n);if(a&&!1!==a.otherDims.tooltip){var u=a.type,f="sub"+r.seriesIndex+"at"+l,p=Gr({color:v,type:"subItem",renderMode:i,markerId:f}),g="string"==typeof p?p:p.content,m=(c?g+Wr(a.displayName||"-")+": ":"")+Wr("ordinal"===u?t+"":"time"===u?e?"":Xr("yyyy/MM/dd hh:mm:ss",t):Fr(t));m&&d.push(m),o&&(s[f]=v,++l)}}var c=g(n,function(t,e,n){var i=h.getDimensionInfo(n);return t|=i&&!1!==i.tooltip&&null!=i.displayName},0),d=[];u.length?f(u,function(e){a(ja(h,t,e),e)}):f(n,a);var p=c?o?"\n":"<br/>":"",m=p+d.join(p||", ");return{renderMode:i,content:m,style:s}}(d):function(t){return{renderMode:i,content:Wr(Fr(t)),style:s}}(c?ja(h,t,u[0]):p?d[0]:d)).content,y=r.seriesIndex+"at"+l,_=Gr({color:v,type:"item",renderMode:i,markerId:y});s[y]=v,++l;var w=h.getName(t),M=this.name;Dn(this)||(M=""),M=M?Wr(M)+(e?": ":a):"";var S="string"==typeof _?_:_.content;return{html:e?S+M+m:M+S+(w?Wr(w)+": "+m:m),markers:s}},isAnimationEnabled:function(){if($c.node)return!1;var t=this.getShallow("animation");return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){this.dataTask.dirty()},getColorFromPalette:function(t,e,n){var i=this.ecModel,r=cv.getColorFromPalette.call(this,t,e,n);return r||(r=i.getColorFromPalette(t,e,n)),r},coordDimToDataDim:function(t){return this.getRawData().mapDimension(t,!0)},getProgressive:function(){return this.get("progressive")},getProgressiveThreshold:function(){return this.get("progressiveThreshold")},getAxisTooltipData:null,getTooltipPosition:null,pipeTask:null,preventIncremental:null,pipelineContext:null});c(qv,Gv),c(qv,cv);var jv=function(){this.group=new rf,this.uid=Sr("viewComponent")};jv.prototype={constructor:jv,init:function(){},render:function(){},dispose:function(){},filterForExposedEvent:null};var Uv=jv.prototype;Uv.updateView=Uv.updateLayout=Uv.updateVisual=function(){},Vn(jv),Zn(jv,{registerWhenExtend:!0});var $v=function(){var t=Ln();return function(e){var n=t(e),i=e.pipelineContext,r=n.large,a=n.progressiveRender,o=n.large=i.large,s=n.progressiveRender=i.progressiveRender;return!!(r^o||a^s)&&"reset"}},Kv=Ln(),Qv=$v();lo.prototype={type:"chart",init:function(){},render:function(){},highlight:function(t,e,n,i){uo(t.getData(),i,"emphasis")},downplay:function(t,e,n,i){uo(t.getData(),i,"normal")},remove:function(){this.group.removeAll()},dispose:function(){},incrementalPrepareRender:null,incrementalRender:null,updateTransform:null,filterForExposedEvent:null};var Jv=lo.prototype;Jv.updateView=Jv.updateLayout=Jv.updateVisual=function(t,e,n,i){this.render(t,e,n,i)},Vn(lo),Zn(lo,{registerWhenExtend:!0}),lo.markUpdateMethod=function(t,e){Kv(t).updateMethod=e};var tm={incrementalPrepareRender:{progress:function(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload)}},render:{forceFirstProgress:!0,progress:function(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload)}}},em="\0__throttleOriginMethod",nm="\0__throttleRate",im="\0__throttleType",rm={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var n=t.getData(),i=(t.visualColorAccessPath||"itemStyle.color").split("."),r=t.get(i)||t.getColorFromPalette(t.name,null,e.getSeriesCount());if(n.setVisual("color",r),!e.isSeriesFiltered(t)){"function"!=typeof r||r instanceof Tg||n.each(function(e){n.setItemVisual(e,"color",r(t.getDataParams(e)))});return{dataEach:n.hasItemOption?function(t,e){var n=t.getItemModel(e).get(i,!0);null!=n&&t.setItemVisual(e,"color",n)}:null}}}},am={toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}},om=function(t,e){function n(t,e){if("string"!=typeof t)return t;var n=t;return f(e,function(t,e){n=n.replace(new RegExp("\\{\\s*"+e+"\\s*\\}","g"),t)}),n}function i(t){var e=a.get(t);if(null==e){for(var n=t.split("."),i=am.aria,r=0;r<n.length;++r)i=i[n[r]];return i}return e}function r(t){return am.series.typeNames[t]||"自定义图"}var a=e.getModel("aria");if(a.get("show")){if(a.get("description"))return void t.setAttribute("aria-label",a.get("description"));var o=0;e.eachSeries(function(){++o},this);var s,l=a.get("data.maxCount")||10,h=a.get("series.maxCount")||10,u=Math.min(o,h);if(!(1>o)){var c=function(){var t=e.getModel("title").option;return t&&t.length&&(t=t[0]),t&&t.text}();s=c?n(i("general.withTitle"),{title:c}):i("general.withoutTitle");var d=[];s+=n(i(o>1?"series.multiple.prefix":"series.single.prefix"),{seriesCount:o}),e.eachSeries(function(t,e){if(u>e){var a,s=t.get("name"),h="series."+(o>1?"multiple":"single")+".";a=n(a=i(s?h+"withName":h+"withoutName"),{seriesId:t.seriesIndex,seriesName:t.get("name"),seriesType:r(t.subType)});var c=t.getData();window.data=c,a+=c.count()>l?n(i("data.partialData"),{displayCnt:l}):i("data.allData");for(var f=[],p=0;p<c.count();p++)if(l>p){var g=c.getName(p),v=ja(c,p);f.push(n(i(g?"data.withName":"data.withoutName"),{name:g,value:v}))}a+=f.join(i("data.separator.middle"))+i("data.separator.end"),d.push(a)}}),s+=d.join(i("series.multiple.separator.middle"))+i("series.multiple.separator.end"),t.setAttribute("aria-label",s)}}},sm=Math.PI,lm=mo.prototype;lm.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each(function(t){var e=t.overallTask;e&&e.dirty()})},lm.getPerformArgs=function(t,e){if(t.__pipeline){var n=this._pipelineMap.get(t.__pipeline.id),i=n.context,r=!e&&n.progressiveEnabled&&(!i||i.progressiveRender)&&t.__idxInPipeline>n.blockIndex?n.step:null,a=i&&i.modDataCount;return{step:r,modBy:null!=a?Math.ceil(a/r):null,modDataCount:a}}},lm.getPipeline=function(t){return this._pipelineMap.get(t)},lm.updateStreamModes=function(t,e){var n=this._pipelineMap.get(t.uid),i=t.getData().count(),r=n.progressiveEnabled&&e.incrementalPrepareRender&&i>=n.threshold,a=t.get("large")&&i>=t.get("largeThreshold"),o="mod"===t.get("progressiveChunkMode")?i:null;t.pipelineContext=n.context={progressiveRender:r,modDataCount:o,large:a}},lm.restorePipelines=function(t){var e=this,n=e._pipelineMap=R();t.eachSeries(function(t){var i=t.getProgressive(),r=t.uid;n.set(r,{id:r,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:i&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(i||700),count:0}),Do(e,t,t.dataTask)})},lm.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.ecInstance.getModel(),n=this.api;f(this._allHandlers,function(i){var r=t.get(i.uid)||t.set(i.uid,[]);i.reset&&xo(this,i,r,e,n),i.overallReset&&_o(this,i,r,e,n)},this)},lm.prepareView=function(t,e,n,i){var r=t.renderTask,a=r.context;a.model=e,a.ecModel=n,a.api=i,r.__block=!t.incrementalPrepareRender,Do(this,e,r)},lm.performDataProcessorTasks=function(t,e){yo(this,this._dataProcessorHandlers,t,e,{block:!0})},lm.performVisualTasks=function(t,e,n){yo(this,this._visualHandlers,t,e,n)},lm.performSeriesTasks=function(t){var e;t.eachSeries(function(t){e|=t.dataTask.perform()}),this.unfinished|=e},lm.plan=function(){this._pipelineMap.each(function(t){var e=t.tail;do{if(e.__block){t.blockIndex=e.__idxInPipeline;break}e=e.getUpstream()}while(e)})};var hm=lm.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e)},um=Co(0);mo.wrapStageHandler=function(t,e){return _(t)&&(t={overallReset:t,seriesType:ko(t)}),t.uid=Sr("stageHandler"),e&&(t.visualType=e),t};var cm,dm={},fm={};Po(dm,Mv),Po(fm,wa),dm.eachSeriesByType=dm.eachRawSeriesByType=function(t){cm=t},dm.eachComponent=function(t){"series"===t.mainType&&t.subType&&(cm=t.subType)};var pm=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],gm={color:pm,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],pm]},vm="#eee",mm=function(){return{axisLine:{lineStyle:{color:vm}},axisTick:{lineStyle:{color:vm}},axisLabel:{textStyle:{color:vm}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:vm}}}},ym=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],xm={color:ym,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:vm},crossStyle:{color:vm}}},legend:{textStyle:{color:vm}},textStyle:{color:vm},title:{textStyle:{color:vm}},toolbox:{iconStyle:{normal:{borderColor:vm}}},dataZoom:{textStyle:{color:vm}},visualMap:{textStyle:{color:vm}},timeline:{lineStyle:{color:vm},itemStyle:{normal:{color:ym[1]}},label:{normal:{textStyle:{color:vm}}},controlStyle:{normal:{color:vm,borderColor:vm}}},timeAxis:mm(),logAxis:mm(),valueAxis:mm(),categoryAxis:mm(),line:{symbol:"circle"},graph:{color:ym},gauge:{title:{textStyle:{color:vm}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};xm.categoryAxis.splitLine.show=!1,sv.extend({type:"dataset",defaultOption:{seriesLayoutBy:xv,sourceHeader:null,dimensions:null,source:null},optionUpdated:function(){na(this)}}),jv.extend({type:"dataset"});var _m=Si.extend({type:"ellipse",shape:{cx:0,cy:0,rx:0,ry:0},buildPath:function(t,e){var n=.5522848,i=e.cx,r=e.cy,a=e.rx,o=e.ry,s=a*n,l=o*n;t.moveTo(i-a,r),t.bezierCurveTo(i-a,r-l,i-s,r-o,i,r-o),t.bezierCurveTo(i+s,r-o,i+a,r-l,i+a,r),t.bezierCurveTo(i+a,r+l,i+s,r+o,i,r+o),t.bezierCurveTo(i-s,r+o,i-a,r+l,i-a,r),t.closePath()}}),wm=/[\s,]+/;Oo.prototype.parse=function(t,e){e=e||{};var n=Lo(t);if(!n)throw new Error("Illegal svg");var i=new rf;this._root=i;var r=n.getAttribute("viewBox")||"",a=parseFloat(n.getAttribute("width")||e.width),o=parseFloat(n.getAttribute("height")||e.height);isNaN(a)&&(a=null),isNaN(o)&&(o=null),Ro(n,i,null,!0);for(var s=n.firstChild;s;)this._parseNode(s,i),s=s.nextSibling;var l,h;if(r){var u=O(r).split(wm);u.length>=4&&(l={x:parseFloat(u[0]||0),y:parseFloat(u[1]||0),width:parseFloat(u[2]),height:parseFloat(u[3])})}if(l&&null!=a&&null!=o&&(h=Wo(l,a,o),!e.ignoreViewBox)){var c=i;(i=new rf).add(c),c.scale=h.scale.slice(),c.position=h.position.slice()}return e.ignoreRootClip||null==a||null==o||i.setClipPath(new _g({shape:{x:0,y:0,width:a,height:o}})),{root:i,width:a,height:o,viewBoxRect:l,viewBoxTransform:h}},Oo.prototype._parseNode=function(t,e){var n=t.nodeName.toLowerCase();"defs"===n?this._isDefine=!0:"text"===n&&(this._isText=!0);var i;if(this._isDefine){if(o=Mm[n]){var r=o.call(this,t),a=t.getAttribute("id");a&&(this._defs[a]=r)}}else{var o=bm[n];o&&(i=o.call(this,t,e),e.add(i))}for(var s=t.firstChild;s;)1===s.nodeType&&this._parseNode(s,i),3===s.nodeType&&this._isText&&this._parseText(s,i),s=s.nextSibling;"defs"===n?this._isDefine=!1:"text"===n&&(this._isText=!1)},Oo.prototype._parseText=function(t,e){if(1===t.nodeType){var n=t.getAttribute("dx")||0,i=t.getAttribute("dy")||0;this._textX+=parseFloat(n),this._textY+=parseFloat(i)}var r=new ug({style:{text:t.textContent,transformText:!0},position:[this._textX||0,this._textY||0]});Bo(e,r),Ro(t,r,this._defs);var a=r.style.fontSize;a&&9>a&&(r.style.fontSize=9,r.scale=r.scale||[1,1],r.scale[0]*=a/9,r.scale[1]*=a/9);var o=r.getBoundingRect();return this._textX+=o.width,e.add(r),r};var bm={g:function(t,e){var n=new rf;return Bo(e,n),Ro(t,n,this._defs),n},rect:function(t,e){var n=new _g;return Bo(e,n),Ro(t,n,this._defs),n.setShape({x:parseFloat(t.getAttribute("x")||0),y:parseFloat(t.getAttribute("y")||0),width:parseFloat(t.getAttribute("width")||0),height:parseFloat(t.getAttribute("height")||0)}),n},circle:function(t,e){var n=new cg;return Bo(e,n),Ro(t,n,this._defs),n.setShape({cx:parseFloat(t.getAttribute("cx")||0),cy:parseFloat(t.getAttribute("cy")||0),r:parseFloat(t.getAttribute("r")||0)}),n},line:function(t,e){var n=new wg;return Bo(e,n),Ro(t,n,this._defs),n.setShape({x1:parseFloat(t.getAttribute("x1")||0),y1:parseFloat(t.getAttribute("y1")||0),x2:parseFloat(t.getAttribute("x2")||0),y2:parseFloat(t.getAttribute("y2")||0)}),n},ellipse:function(t,e){var n=new _m;return Bo(e,n),Ro(t,n,this._defs),n.setShape({cx:parseFloat(t.getAttribute("cx")||0),cy:parseFloat(t.getAttribute("cy")||0),rx:parseFloat(t.getAttribute("rx")||0),ry:parseFloat(t.getAttribute("ry")||0)}),n},polygon:function(t,e){var n=t.getAttribute("points");n&&(n=Eo(n));var i=new yg({shape:{points:n||[]}});return Bo(e,i),Ro(t,i,this._defs),i},polyline:function(t,e){var n=new Si;Bo(e,n),Ro(t,n,this._defs);var i=t.getAttribute("points");return i&&(i=Eo(i)),new xg({shape:{points:i||[]}})},image:function(t,e){var n=new on;return Bo(e,n),Ro(t,n,this._defs),n.setStyle({image:t.getAttribute("xlink:href"),x:t.getAttribute("x"),y:t.getAttribute("y"),width:t.getAttribute("width"),height:t.getAttribute("height")}),n},text:function(t,e){var n=t.getAttribute("x")||0,i=t.getAttribute("y")||0,r=t.getAttribute("dx")||0,a=t.getAttribute("dy")||0;this._textX=parseFloat(n)+parseFloat(r),this._textY=parseFloat(i)+parseFloat(a);var o=new rf;return Bo(e,o),Ro(t,o,this._defs),o},tspan:function(t,e){var n=t.getAttribute("x"),i=t.getAttribute("y");null!=n&&(this._textX=parseFloat(n)),null!=i&&(this._textY=parseFloat(i));var r=t.getAttribute("dx")||0,a=t.getAttribute("dy")||0,o=new rf;return Bo(e,o),Ro(t,o,this._defs),this._textX+=r,this._textY+=a,o},path:function(t,e){var n=Ai(t.getAttribute("d")||"");return Bo(e,n),Ro(t,n,this._defs),n}},Mm={lineargradient:function(t){var e=parseInt(t.getAttribute("x1")||0,10),n=parseInt(t.getAttribute("y1")||0,10),i=parseInt(t.getAttribute("x2")||10,10),r=parseInt(t.getAttribute("y2")||0,10),a=new Cg(e,n,i,r);return zo(t,a),a},radialgradient:function(){}},Sm={fill:"fill",stroke:"stroke","stroke-width":"lineWidth",opacity:"opacity","fill-opacity":"fillOpacity","stroke-opacity":"strokeOpacity","stroke-dasharray":"lineDash","stroke-dashoffset":"lineDashOffset","stroke-linecap":"lineCap","stroke-linejoin":"lineJoin","stroke-miterlimit":"miterLimit","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","text-align":"textAlign","alignment-baseline":"textBaseline"},Im=/url\(\s*#(.*?)\)/,Tm=/(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,Cm=/([^\s:;]+)\s*:\s*([^:;]+)/g,Am=R(),Dm={registerMap:function(t,e,n){var i;return x(e)?i=e:e.svg?i=[{type:"svg",source:e.svg,specialAreas:e.specialAreas}]:(e.geoJson&&!e.features&&(n=e.specialAreas,e=e.geoJson),i=[{type:"geoJSON",source:e,specialAreas:n}]),f(i,function(t){var e=t.type;"geoJson"===e&&(e=t.type="geoJSON"),(0,km[e])(t)}),Am.set(t,i)},retrieveMap:function(t){return Am.get(t)}},km={geoJSON:function(t){var e=t.source;t.geoJSON=w(e)?"undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")():e},svg:function(t){t.svgXML=Lo(t.source)}},Pm=L,Lm=f,Om=_,zm=b,Bm=sv.parseClassType,Em={zrender:"4.0.5"},Rm=1e3,Nm=1e3,Fm=3e3,Vm={PROCESSOR:{FILTER:Rm,STATISTIC:5e3},VISUAL:{LAYOUT:Nm,GLOBAL:2e3,CHART:Fm,COMPONENT:4e3,BRUSH:5e3}},Wm="__flagInMainProcess",Hm="__optionUpdated",Gm=/^[a-zA-Z0-9_]+$/;Go.prototype.on=Ho("on"),Go.prototype.off=Ho("off"),Go.prototype.one=Ho("one"),c(Go,yd);var Zm=Zo.prototype;Zm._onframe=function(){if(!this._disposed){var t=this._scheduler;if(this[Hm]){var e=this[Hm].silent;this[Wm]=!0,Yo(this),Xm.update.call(this),this[Wm]=!1,this[Hm]=!1,$o.call(this,e),Ko.call(this,e)}else if(t.unfinished){var n=1,i=this._model;this._api;t.unfinished=!1;do{var r=+new Date;t.performSeriesTasks(i),t.performDataProcessorTasks(i),jo(this,i),t.performVisualTasks(i),is(this,this._model,0,"remain"),n-=+new Date-r}while(n>0&&t.unfinished);t.unfinished||this._zr.flush()}}},Zm.getDom=function(){return this._dom},Zm.getZr=function(){return this._zr},Zm.setOption=function(t,e,n){var i;if(zm(e)&&(n=e.lazyUpdate,i=e.silent,e=e.notMerge),this[Wm]=!0,!this._model||e){var r=new Ma(this._api),a=this._theme,o=this._model=new Mv(null,null,a,r);o.scheduler=this._scheduler,o.init(null,null,a,r)}this._model.setOption(t,$m),n?(this[Hm]={silent:i},this[Wm]=!1):(Yo(this),Xm.update.call(this),this._zr.flush(),this[Hm]=!1,this[Wm]=!1,$o.call(this,i),Ko.call(this,i))},Zm.setTheme=function(){console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")},Zm.getModel=function(){return this._model},Zm.getOption=function(){return this._model&&this._model.getOption()},Zm.getWidth=function(){return this._zr.getWidth()},Zm.getHeight=function(){return this._zr.getHeight()},Zm.getDevicePixelRatio=function(){return this._zr.painter.dpr||window.devicePixelRatio||1},Zm.getRenderedCanvas=function(t){if($c.canvasSupported)return(t=t||{}).pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor"),this._zr.painter.getRenderedCanvas(t)},Zm.getSvgDataUrl=function(){if($c.svgSupported){var t=this._zr;return f(t.storage.getDisplayList(),function(t){t.stopAnimation(!0)}),t.painter.pathToDataUrl()}},Zm.getDataURL=function(t){var e=(t=t||{}).excludeComponents,n=this._model,i=[],r=this;Lm(e,function(t){n.eachComponent({mainType:t},function(t){var e=r._componentsMap[t.__viewId];e.group.ignore||(i.push(e),e.group.ignore=!0)})});var a="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return Lm(i,function(t){t.group.ignore=!1}),a},Zm.getConnectedDataURL=function(t){if($c.canvasSupported){var e=this.group,n=Math.min,r=Math.max,a=1/0;if(ny[e]){var o=a,s=a,l=-a,h=-a,u=[],c=t&&t.pixelRatio||1;f(ey,function(a){if(a.group===e){var c=a.getRenderedCanvas(i(t)),d=a.getDom().getBoundingClientRect();o=n(d.left,o),s=n(d.top,s),l=r(d.right,l),h=r(d.bottom,h),u.push({dom:c,left:d.left,top:d.top})}});var d=(l*=c)-(o*=c),p=(h*=c)-(s*=c),g=sd();g.width=d,g.height=p;var v=wn(g);return Lm(u,function(t){var e=new on({style:{x:t.left*c-o,y:t.top*c-s,image:t.dom}});v.add(e)}),v.refreshImmediately(),g.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},Zm.convertToPixel=y(Xo,"convertToPixel"),Zm.convertFromPixel=y(Xo,"convertFromPixel"),Zm.containPixel=function(t,e){var n;return t=On(this._model,t),f(t,function(t,i){i.indexOf("Models")>=0&&f(t,function(t){var r=t.coordinateSystem;if(r&&r.containPoint)n|=!!r.containPoint(e);else if("seriesModels"===i){var a=this._chartsMap[t.__viewId];a&&a.containPoint&&(n|=a.containPoint(e,t))}},this)},this),!!n},Zm.getVisual=function(t,e){var n=(t=On(this._model,t,{defaultMainType:"series"})).seriesModel.getData(),i=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?n.indexOfRawIndex(t.dataIndex):null;return null!=i?n.getItemVisual(i,e):n.getVisual(e)},Zm.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},Zm.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]};var Xm={prepareAndUpdate:function(t){Yo(this),Xm.update.call(this,t)},update:function(t){var e=this._model,n=this._api,i=this._zr,r=this._coordSysMgr,a=this._scheduler;if(e){a.restoreData(e,t),a.performSeriesTasks(e),r.create(e,n),a.performDataProcessorTasks(e,t),jo(this,e),r.update(e,n),ts(e),a.performVisualTasks(e,t),es(this,e,n,t);var o=e.get("backgroundColor")||"transparent";if($c.canvasSupported)i.setBackgroundColor(o);else{var s=zt(o);o=Wt(s,"rgb"),0===s[3]&&(o="transparent")}rs(e,n)}},updateTransform:function(t){var e=this._model,n=this,i=this._api;if(e){var r=[];e.eachComponent(function(a,o){var s=n.getViewOfComponentModel(o);if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(o,e,i,t);l&&l.update&&r.push(s)}else r.push(s)});var a=R();e.eachSeries(function(r){var o=n._chartsMap[r.__viewId];if(o.updateTransform){var s=o.updateTransform(r,e,i,t);s&&s.update&&a.set(r.uid,1)}else a.set(r.uid,1)}),ts(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0,dirtyMap:a}),is(n,e,0,t,a),rs(e,this._api)}},updateView:function(t){var e=this._model;e&&(lo.markUpdateMethod(t,"updateView"),ts(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0}),es(this,this._model,this._api,t),rs(e,this._api))},updateVisual:function(t){Xm.update.call(this,t)},updateLayout:function(t){Xm.update.call(this,t)}};Zm.resize=function(t){this._zr.resize(t);var e=this._model;if(this._loadingFX&&this._loadingFX.resize(),e){var n=e.resetOption("media"),i=t&&t.silent;this[Wm]=!0,n&&Yo(this),Xm.update.call(this),this[Wm]=!1,$o.call(this,i),Ko.call(this,i)}},Zm.showLoading=function(t,e){if(zm(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),ty[t]){var n=ty[t](this._api,e),i=this._zr;this._loadingFX=n,i.add(n)}},Zm.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null},Zm.makeActionFromEvent=function(t){var e=o({},t);return e.type=jm[t.type],e},Zm.dispatchAction=function(t,e){if(zm(e)||(e={silent:!!e}),qm[t.type]&&this._model){if(this[Wm])return void this._pendingActions.push(t);Uo.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&$c.browser.weChat&&this._throttledZrFlush(),$o.call(this,e.silent),Ko.call(this,e.silent)}},Zm.appendData=function(t){var e=t.seriesIndex;this.getModel().getSeriesByIndex(e).appendData(t),this._scheduler.unfinished=!0},Zm.on=Ho("on"),Zm.off=Ho("off"),Zm.one=Ho("one");var Ym=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];Zm._initEvents=function(){Lm(Ym,function(t){this._zr.on(t,function(e){var n,i=this.getModel(),r=e.target;if("globalout"===t)n={};else if(r&&null!=r.dataIndex){var a=r.dataModel||i.getSeriesByIndex(r.seriesIndex);n=a&&a.getDataParams(r.dataIndex,r.dataType,r)||{}}else r&&r.eventData&&(n=o({},r.eventData));if(n){var s=n.componentType,l=n.componentIndex;("markLine"===s||"markPoint"===s||"markArea"===s)&&(s="series",l=n.seriesIndex);var h=s&&null!=l&&i.getComponent(s,l),u=h&&this["series"===h.mainType?"_chartsMap":"_componentsMap"][h.__viewId];n.event=e,n.type=t,this._ecEventProcessor.eventInfo={targetEl:r,packedEvent:n,model:h,view:u},this.trigger(t,n)}},this)},this),Lm(jm,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},Zm.isDisposed=function(){return this._disposed},Zm.clear=function(){this.setOption({series:[]},!0)},Zm.dispose=function(){if(!this._disposed){this._disposed=!0,Bn(this.getDom(),ay,"");var t=this._api,e=this._model;Lm(this._componentsViews,function(n){n.dispose(e,t)}),Lm(this._chartsViews,function(n){n.dispose(e,t)}),this._zr.dispose(),delete ey[this.id]}},c(Zo,yd),hs.prototype={constructor:hs,normalizeQuery:function(t){var e={},n={},i={};if(w(t)){var r=Bm(t);e.mainType=r.main||null,e.subType=r.sub||null}else{var a=["Index","Name","Id"],o={name:1,dataIndex:1,dataType:1};f(t,function(t,r){for(var s=!1,l=0;l<a.length;l++){var h=a[l],u=r.lastIndexOf(h);if(u>0&&u===r.length-h.length){var c=r.slice(0,u);"data"!==c&&(e.mainType=c,e[h.toLowerCase()]=t,s=!0)}}o.hasOwnProperty(r)&&(n[r]=t,s=!0),s||(i[r]=t)})}return{cptQuery:e,dataQuery:n,otherQuery:i}},filter:function(t,e){function n(t,e,n,i){return null==t[n]||e[i||n]===t[n]}var i=this.eventInfo;if(!i)return!0;var r=i.targetEl,a=i.packedEvent,o=i.model,s=i.view;if(!o||!s)return!0;var l=e.cptQuery,h=e.dataQuery;return n(l,o,"mainType")&&n(l,o,"subType")&&n(l,o,"index","componentIndex")&&n(l,o,"name")&&n(l,o,"id")&&n(h,a,"name")&&n(h,a,"dataIndex")&&n(h,a,"dataType")&&(!s.filterForExposedEvent||s.filterForExposedEvent(t,e.otherQuery,r,a))},afterTrigger:function(){this.eventInfo=null}};var qm={},jm={},Um=[],$m=[],Km=[],Qm=[],Jm={},ty={},ey={},ny={},iy=new Date-0,ry=new Date-0,ay="_echarts_instance_",oy=cs;ys(2e3,rm),ps(Rv),gs(5e3,function(t){var e=R();t.eachSeries(function(t){var n=t.get("stack");if(n){var i=e.get(n)||e.set(n,[]),r=t.getData(),a={stackResultDimension:r.getCalculationInfo("stackResultDimension"),stackedOverDimension:r.getCalculationInfo("stackedOverDimension"),stackedDimension:r.getCalculationInfo("stackedDimension"),stackedByDimension:r.getCalculationInfo("stackedByDimension"),isStackedByIndex:r.getCalculationInfo("isStackedByIndex"),data:r,seriesModel:t};if(!a.stackedDimension||!a.isStackedByIndex&&!a.stackedByDimension)return;i.length&&r.setCalculationInfo("stackedOnSeries",i[i.length-1].seriesModel),i.push(a)}}),e.each(Va)}),_s("default",function(t,e){s(e=e||{},{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var n=new _g({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),i=new Sg({shape:{startAngle:-sm/2,endAngle:-sm/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),r=new _g({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});i.animateShape(!0).when(1e3,{endAngle:3*sm/2}).start("circularInOut"),i.animateShape(!0).when(1e3,{startAngle:3*sm/2}).delay(300).start("circularInOut");var a=new rf;return a.add(i),a.add(r),a.add(n),a.resize=function(){var e=t.getWidth()/2,a=t.getHeight()/2;i.setShape({cx:e,cy:a});var o=i.shape.r;r.setShape({x:e-o,y:a-o,width:2*o,height:2*o}),n.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},a.resize(),a}),vs({type:"highlight",event:"highlight",update:"highlight"},N),vs({type:"downplay",event:"downplay",update:"downplay"},N),fs("light",gm),fs("dark",xm);var sy={};Ts.prototype={constructor:Ts,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,n={},i=[],r=[];for(Cs(t,{},i,"_oldKeyGetter",this),Cs(e,n,r,"_newKeyGetter",this),a=0;a<t.length;a++)null!=(s=n[o=i[a]])?((h=s.length)?(1===h&&(n[o]=null),s=s.unshift()):n[o]=null,this._update&&this._update(s,a)):this._remove&&this._remove(a);for(var a=0;a<r.length;a++){var o=r[a];if(n.hasOwnProperty(o)){var s=n[o];if(null==s)continue;if(s.length)for(var l=0,h=s.length;h>l;l++)this._add&&this._add(s[l]);else this._add&&this._add(s)}}}};var ly=R(["tooltip","label","itemName","itemId","seriesName"]),hy=b,uy="undefined",cy="e\0\0",dy={float:("undefined"==typeof Float64Array?"undefined":t(Float64Array))===uy?Array:Float64Array,int:("undefined"==typeof Int32Array?"undefined":t(Int32Array))===uy?Array:Int32Array,ordinal:Array,number:Array,time:Array},fy=("undefined"==typeof Uint32Array?"undefined":t(Uint32Array))===uy?Array:Uint32Array,py=("undefined"==typeof Uint16Array?"undefined":t(Uint16Array))===uy?Array:Uint16Array,gy=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],vy=["_extent","_approximateExtent","_rawExtent"],my=function(t,e){t=t||["x","y"];for(var n={},i=[],r={},a=0;a<t.length;a++){var o=t[a];w(o)&&(o={name:o});var s=o.name;o.type=o.type||"float",o.coordDim||(o.coordDim=s,o.coordDimIndex=0),o.otherDims=o.otherDims||{},i.push(s),n[s]=o,o.index=a,o.createInvertedIndices&&(r[s]=[])}this.dimensions=i,this._dimensionInfos=n,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=As(this),this._invertedIndicesMap=r,this._calculationInfo={}},yy=my.prototype;yy.type="list",yy.hasItemOption=!0,yy.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t},yy.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},yy.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},yy.mapDimension=function(t,e){var n=this._dimensionsSummary;if(null==e)return n.encodeFirstDimNotExtra[t];var i=n.encode[t];return!0===e?(i||[]).slice():i&&i[e]},yy.initData=function(t,e,n){(ea.isInstance(t)||d(t))&&(t=new Wa(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},n||(this.hasItemOption=!1),this.defaultDimValueGetter=Wv[this._rawData.getSource().sourceFormat],this._dimValueGetter=n=n||this.defaultDimValueGetter,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1)},yy.getProvider=function(){return this._rawData},yy.appendData=function(t){var e=this._rawData,n=this.count();e.appendData(t);var i=e.count();e.persistent||(i+=n),this._initDataFromProvider(n,i)},yy._initDataFromProvider=function(t,e){if(!(t>=e)){for(var n,i=this._chunkSize,r=this._rawData,a=this._storage,o=this.dimensions,s=o.length,l=this._dimensionInfos,h=this._nameList,u=this._idList,c=this._rawExtent,d=this._nameRepeatCount={},f=this._chunkCount,p=f-1,g=0;s>g;g++){c[T=o[g]]||(c[T]=[1/0,-1/0]);var v=l[T];0===v.otherDims.itemName&&(n=this._nameDimIdx=g),0===v.otherDims.itemId&&(this._idDimIdx=g);var m=dy[v.type];a[T]||(a[T]=[]);var y=a[T][p];if(y&&y.length<i){for(var x=new m(Math.min(e-p*i,i)),_=0;_<y.length;_++)x[_]=y[_];a[T][p]=x}for(I=f*i;e>I;I+=i)a[T].push(new m(Math.min(e-I,i)));this._chunkCount=a[T].length}for(var w=new Array(s),b=t;e>b;b++){w=r.getItem(b,w);for(var M=Math.floor(b/i),S=b%i,I=0;s>I;I++){var T=o[I],C=a[T][M],A=this._dimValueGetter(w,T,b,I);C[S]=A;var D=c[T];A<D[0]&&(D[0]=A),A>D[1]&&(D[1]=A)}if(!r.pure){var k=h[b];if(w&&null==k)if(null!=w.name)h[b]=k=w.name;else if(null!=n){var P=o[n],L=a[P][M];if(L){k=L[S];var O=l[P].ordinalMeta;O&&O.categories.length&&(k=O.categories[k])}}var z=null==w?null:w.id;null==z&&null!=k&&(d[k]=d[k]||0,z=k,d[k]>0&&(z+="__ec__"+d[k]),d[k]++),null!=z&&(u[b]=z)}}!r.persistent&&r.clean&&r.clean(),this._rawCount=this._count=e,this._extent={},zs(this)}},yy.count=function(){return this._count},yy.getIndices=function(){var t=this._indices;if(t){var e=t.constructor,n=this._count;if(e===Array){i=new e(n);for(r=0;n>r;r++)i[r]=t[r]}else i=new e(t.buffer,0,n)}else for(var e=Ps(this),i=new e(this.count()),r=0;r<i.length;r++)i[r]=r;return i},yy.get=function(t,e){if(!(e>=0&&e<this._count))return NaN;var n=this._storage;if(!n[t])return NaN;e=this.getRawIndex(e);var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[t][i][r]},yy.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN;var n=this._storage[t];if(!n)return NaN;var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[i][r]},yy._getFast=function(t,e){var n=Math.floor(e/this._chunkSize),i=e%this._chunkSize;return this._storage[t][n][i]},yy.getValues=function(t,e){var n=[];x(t)||(e=t,t=this.dimensions);for(var i=0,r=t.length;r>i;i++)n.push(this.get(t[i],e));return n},yy.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,n=this._dimensionInfos,i=0,r=e.length;r>i;i++)if("ordinal"!==n[e[i]].type&&isNaN(this.get(e[i],t)))return!1;return!0},yy.getDataExtent=function(t){t=this.getDimension(t);var e=[1/0,-1/0];if(!this._storage[t])return e;var n,i=this.count();if(!this._indices)return this._rawExtent[t].slice();if(n=this._extent[t])return n.slice();for(var r=(n=e)[0],a=n[1],o=0;i>o;o++){var s=this._getFast(t,this.getRawIndex(o));r>s&&(r=s),s>a&&(a=s)}return n=[r,a],this._extent[t]=n,n},yy.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},yy.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},yy.getCalculationInfo=function(t){return this._calculationInfo[t]},yy.setCalculationInfo=function(t,e){hy(t)?o(this._calculationInfo,t):this._calculationInfo[t]=e},yy.getSum=function(t){var e=0;if(this._storage[t])for(var n=0,i=this.count();i>n;n++){var r=this.get(t,n);isNaN(r)||(e+=r)}return e},yy.getMedian=function(t){var e=[];this.each(t,function(t){isNaN(t)||e.push(t)});var n=[].concat(e).sort(function(t,e){return t-e}),i=this.count();return 0===i?0:i%2==1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},yy.rawIndexOf=function(t,e){var n=(t&&this._invertedIndicesMap[t])[e];return null==n||isNaN(n)?-1:n},yy.indexOfName=function(t){for(var e=0,n=this.count();n>e;e++)if(this.getName(e)===t)return e;return-1},yy.indexOfRawIndex=function(t){if(!this._indices)return t;if(t>=this._rawCount||0>t)return-1;var e=this._indices,n=e[t];if(null!=n&&n<this._count&&n===t)return t;for(var i=0,r=this._count-1;r>=i;){var a=(i+r)/2|0;if(e[a]<t)i=a+1;else{if(!(e[a]>t))return a;r=a-1}}return-1},yy.indicesOfNearest=function(t,e,n){var i=[];if(!this._storage[t])return i;null==n&&(n=1/0);for(var r=Number.MAX_VALUE,a=-1,o=0,s=this.count();s>o;o++){var l=e-this.get(t,o),h=Math.abs(l);n>=l&&r>=h&&((r>h||l>=0&&0>a)&&(r=h,a=l,i.length=0),i.push(o))}return i},yy.getRawIndex=Es,yy.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t));for(var e=[],n=0;n<this.dimensions.length;n++){var i=this.dimensions[n];e.push(this.get(i,t))}return e},yy.getName=function(t){var e=this.getRawIndex(t);return this._nameList[e]||Bs(this,this._nameDimIdx,e)||""},yy.getId=function(t){return Ns(this,this.getRawIndex(t))},yy.each=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;for(var r=(t=p(Fs(t),this.getDimension,this)).length,a=0;a<this.count();a++)switch(r){case 0:e.call(n,a);break;case 1:e.call(n,this.get(t[0],a),a);break;case 2:e.call(n,this.get(t[0],a),this.get(t[1],a),a);break;default:for(var o=0,s=[];r>o;o++)s[o]=this.get(t[o],a);s[o]=a,e.apply(n,s)}}},yy.filterSelf=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this,t=p(Fs(t),this.getDimension,this);for(var r=this.count(),a=new(Ps(this))(r),o=[],s=t.length,l=0,h=t[0],u=0;r>u;u++){var c,d=this.getRawIndex(u);if(0===s)c=e.call(n,u);else if(1===s){var f=this._getFast(h,d);c=e.call(n,f,u)}else{for(var g=0;s>g;g++)o[g]=this._getFast(h,d);o[g]=u,c=e.apply(n,o)}c&&(a[l++]=d)}return r>l&&(this._indices=a),this._count=l,this._extent={},this.getRawIndex=this._indices?Rs:Es,this}},yy.selectRange=function(t){if(this._count){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);var i=e.length;if(i){var r=this.count(),a=new(Ps(this))(r),o=0,s=e[0],l=t[s][0],h=t[s][1],u=!1;if(!this._indices){var c=0;if(1===i){for(var d=this._storage[e[0]],f=0;f<this._chunkCount;f++)for(var p=d[f],g=Math.min(this._count-f*this._chunkSize,this._chunkSize),v=0;g>v;v++)((w=p[v])>=l&&h>=w||isNaN(w))&&(a[o++]=c),c++;u=!0}else if(2===i){for(var d=this._storage[s],m=this._storage[e[1]],y=t[e[1]][0],x=t[e[1]][1],f=0;f<this._chunkCount;f++)for(var p=d[f],_=m[f],g=Math.min(this._count-f*this._chunkSize,this._chunkSize),v=0;g>v;v++){var w=p[v],b=_[v];(w>=l&&h>=w||isNaN(w))&&(b>=y&&x>=b||isNaN(b))&&(a[o++]=c),c++}u=!0}}if(!u)if(1===i)for(v=0;r>v;v++){S=this.getRawIndex(v);((w=this._getFast(s,S))>=l&&h>=w||isNaN(w))&&(a[o++]=S)}else for(v=0;r>v;v++){for(var M=!0,S=this.getRawIndex(v),f=0;i>f;f++){var I=e[f];((w=this._getFast(n,S))<t[I][0]||w>t[I][1])&&(M=!1)}M&&(a[o++]=this.getRawIndex(v))}return r>o&&(this._indices=a),this._count=o,this._extent={},this.getRawIndex=this._indices?Rs:Es,this}}},yy.mapArray=function(t,e,n,i){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;var r=[];return this.each(t,function(){r.push(e&&e.apply(this,arguments))},n),r},yy.map=function(e,n,i,r){i=i||r||this;var a=Vs(this,e=p(Fs(e),this.getDimension,this));a._indices=this._indices,a.getRawIndex=a._indices?Rs:Es;for(var o=a._storage,s=[],l=this._chunkSize,h=e.length,u=this.count(),c=[],d=a._rawExtent,f=0;u>f;f++){for(var g=0;h>g;g++)c[g]=this.get(e[g],f);c[h]=f;var v=n&&n.apply(i,c);if(null!=v){"object"!=(void 0===v?"undefined":t(v))&&(s[0]=v,v=s);for(var m=this.getRawIndex(f),y=Math.floor(m/l),x=m%l,_=0;_<v.length;_++){var w=e[_],b=v[_],M=d[w],S=o[w];S&&(S[y][x]=b),b<M[0]&&(M[0]=b),b>M[1]&&(M[1]=b)}}}return a},yy.downSample=function(t,e,n,i){for(var r=Vs(this,[t]),a=r._storage,o=[],s=Math.floor(1/e),l=a[t],h=this.count(),u=this._chunkSize,c=r._rawExtent[t],d=new(Ps(this))(h),f=0,p=0;h>p;p+=s){s>h-p&&(s=h-p,o.length=s);for(var g=0;s>g;g++){var v=this.getRawIndex(p+g),m=Math.floor(v/u),y=v%u;o[g]=l[m][y]}var x=n(o),_=this.getRawIndex(Math.min(p+i(o,x)||0,h-1)),w=_%u;l[Math.floor(_/u)][w]=x,x<c[0]&&(c[0]=x),x>c[1]&&(c[1]=x),d[f++]=_}return r._count=f,r._indices=d,r.getRawIndex=Rs,r},yy.getItemModel=function(t){var e=this.hostModel;return new wr(this.getRawDataItem(t),e,e&&e.ecModel)},yy.diff=function(t){var e=this;return new Ts(t?t.getIndices():[],this.getIndices(),function(e){return Ns(t,e)},function(t){return Ns(e,t)})},yy.getVisual=function(t){var e=this._visual;return e&&e[t]},yy.setVisual=function(t,e){if(hy(t))for(var n in t)t.hasOwnProperty(n)&&this.setVisual(n,t[n]);else this._visual=this._visual||{},this._visual[t]=e},yy.setLayout=function(t,e){if(hy(t))for(var n in t)t.hasOwnProperty(n)&&this.setLayout(n,t[n]);else this._layout[t]=e},yy.getLayout=function(t){return this._layout[t]},yy.getItemLayout=function(t){return this._itemLayouts[t]},yy.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?o(this._itemLayouts[t]||{},e):e},yy.clearItemLayouts=function(){this._itemLayouts.length=0},yy.getItemVisual=function(t,e,n){var i=this._itemVisuals[t],r=i&&i[e];return null!=r||n?r:this.getVisual(e)},yy.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{},r=this.hasItemVisual;if(this._itemVisuals[t]=i,hy(e))for(var a in e)e.hasOwnProperty(a)&&(i[a]=e[a],r[a]=!0);else i[e]=n,r[e]=!0},yy.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={}};var xy=function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType};yy.setItemGraphicEl=function(t,e){var n=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=n&&n.seriesIndex,"group"===e.type&&e.traverse(xy,e)),this._graphicEls[t]=e},yy.getItemGraphicEl=function(t){return this._graphicEls[t]},yy.eachItemGraphicEl=function(t,e){f(this._graphicEls,function(n,i){n&&t&&t.call(e,n,i)})},yy.cloneShallow=function(t){if(!t){var e=p(this.dimensions,this.getDimensionInfo,this);t=new my(e,this.hostModel)}if(t._storage=this._storage,Os(t,this),this._indices){var n=this._indices.constructor;t._indices=new n(this._indices)}else t._indices=null;return t.getRawIndex=t._indices?Rs:Es,t},yy.wrapMethod=function(t,e){var n=this[t];"function"==typeof n&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments);return e.apply(this,[t].concat(k(arguments)))})},yy.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],yy.CHANGABLE_METHODS=["filterSelf","selectRange"];var _y=function(t,e){return e=e||{},Hs(e.coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount})};Ks.prototype.parse=function(t){return t},Ks.prototype.getSetting=function(t){return this._setting[t]},Ks.prototype.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},Ks.prototype.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},Ks.prototype.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},Ks.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},Ks.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},Ks.prototype.getExtent=function(){return this._extent.slice()},Ks.prototype.setExtent=function(t,e){var n=this._extent;isNaN(t)||(n[0]=t),isNaN(e)||(n[1]=e)},Ks.prototype.isBlank=function(){return this._isBlank},Ks.prototype.setBlank=function(t){this._isBlank=t},Ks.prototype.getLabel=null,Vn(Ks),Zn(Ks,{registerWhenExtend:!0}),Qs.createByAxisModel=function(t){var e=t.option,n=e.data,i=n&&p(n,tl);return new Qs({categories:i,needCollect:!i,deduplication:!1!==e.dedplication})};var wy=Qs.prototype;wy.getOrdinal=function(t){return Js(this).get(t)},wy.parseAndCollect=function(t){var e,n=this._needCollect;if("string"!=typeof t&&!n)return t;if(n&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e;var i=Js(this);return null==(e=i.get(t))&&(n?(e=this.categories.length,this.categories[e]=t,i.set(t,e)):e=NaN),e};var by=Ks.prototype,My=Ks.extend({type:"ordinal",init:function(t,e){(!t||x(t))&&(t=new Qs({categories:t})),this._ordinalMeta=t,this._extent=e||[0,t.categories.length-1]},parse:function(t){return"string"==typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t)},contain:function(t){return t=this.parse(t),by.contain.call(this,t)&&null!=this._ordinalMeta.categories[t]},normalize:function(t){return by.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(by.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,n=e[0];n<=e[1];)t.push(n),n++;return t},getLabel:function(t){return this.isBlank()?void 0:this._ordinalMeta.categories[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},getOrdinalMeta:function(){return this._ordinalMeta},niceTicks:N,niceExtent:N});My.create=function(){return new My};var Sy=Ar,Iy=Ar,Ty=Ks.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var n=this._extent;isNaN(t)||(n[0]=parseFloat(t)),isNaN(e)||(n[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),Ty.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=nl(t)},getTicks:function(){return al(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getLabel:function(t,e){if(null==t)return"";var n=e&&e.precision;return null==n?n=kr(t)||0:"auto"===n&&(n=this._intervalPrecision),t=Iy(t,n,!0),Fr(t)},niceTicks:function(t,e,n){t=t||5;var i=this._extent,r=i[1]-i[0];if(isFinite(r)){0>r&&(r=-r,i.reverse());var a=el(i,t,e,n);this._intervalPrecision=a.intervalPrecision,this._interval=a.interval,this._niceExtent=a.niceTickExtent}},niceExtent:function(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var n=e[0];t.fixMax?e[0]-=n/2:(e[1]+=n/2,e[0]-=n/2)}else e[1]=1;var i=e[1]-e[0];isFinite(i)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var r=this._interval;t.fixMin||(e[0]=Iy(Math.floor(e[0]/r)*r)),t.fixMax||(e[1]=Iy(Math.ceil(e[1]/r)*r))}});Ty.create=function(){return new Ty};var Cy="__ec_stack_",Ay="undefined"!=typeof Float32Array?Float32Array:Array,Dy={seriesType:"bar",plan:$v(),reset:function(t){if(dl(t)&&fl(t)){var e=t.getData(),n=t.coordinateSystem,i=n.getBaseAxis(),r=n.getOtherAxis(i),a=e.mapDimension(r.dim),o=e.mapDimension(i.dim),s=r.isHorizontal(),l=s?0:1,h=cl(hl([t]),i,t).width;return h>.5||(h=.5),{progress:function(t,e){for(var u,c=new Ay(2*t.count),d=[],f=[],p=0;null!=(u=t.next());)f[l]=e.get(a,u),f[1-l]=e.get(o,u),d=n.dataToPoint(f,null,d),c[p++]=d[0],c[p++]=d[1];e.setLayout({largePoints:c,barWidth:h,valueAxisStart:pl(i,r,!1),valueAxisHorizontal:s})}}}}},ky=Ty.prototype,Py=Math.ceil,Ly=Math.floor,Oy=36e5,zy=864e5,By=function(t,e,n,i){for(;i>n;){var r=n+i>>>1;t[r][1]<e?n=r+1:i=r}return n},Ey=Ty.extend({type:"time",getLabel:function(t){var e=this._stepLvl,n=new Date(t);return Xr(e[0],n,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=zy,e[1]+=zy),e[1]===-1/0&&1/0===e[0]){var n=new Date;e[1]=+new Date(n.getFullYear(),n.getMonth(),n.getDate()),e[0]=e[1]-zy}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var i=this._interval;t.fixMin||(e[0]=Ar(Ly(e[0]/i)*i)),t.fixMax||(e[1]=Ar(Py(e[1]/i)*i))},niceTicks:function(t,e,n){t=t||10;var i=this._extent,r=i[1]-i[0],a=r/t;null!=e&&e>a&&(a=e),null!=n&&a>n&&(a=n);var o=Ry.length,s=By(Ry,a,0,o),l=Ry[Math.min(s,o-1)],h=l[1];"year"===l[0]&&(h*=Nr(r/h/t,!0));var u=this.getSetting("useUTC")?0:60*new Date(+i[0]||+i[1]).getTimezoneOffset()*1e3,c=[Math.round(Py((i[0]-u)/h)*h+u),Math.round(Ly((i[1]-u)/h)*h+u)];rl(c,i),this._stepLvl=l,this._interval=h,this._niceExtent=c},parse:function(t){return+Br(t)}});f(["contain","normalize"],function(t){Ey.prototype[t]=function(e){return ky[t].call(this,this.parse(e))}});var Ry=[["hh:mm:ss",1e3],["hh:mm:ss",5e3],["hh:mm:ss",1e4],["hh:mm:ss",15e3],["hh:mm:ss",3e4],["hh:mm\nMM-dd",6e4],["hh:mm\nMM-dd",3e5],["hh:mm\nMM-dd",6e5],["hh:mm\nMM-dd",9e5],["hh:mm\nMM-dd",18e5],["hh:mm\nMM-dd",Oy],["hh:mm\nMM-dd",72e5],["hh:mm\nMM-dd",6*Oy],["hh:mm\nMM-dd",432e5],["MM-dd\nyyyy",zy],["MM-dd\nyyyy",2*zy],["MM-dd\nyyyy",3*zy],["MM-dd\nyyyy",4*zy],["MM-dd\nyyyy",5*zy],["MM-dd\nyyyy",6*zy],["week",7*zy],["MM-dd\nyyyy",864e6],["week",14*zy],["week",21*zy],["month",31*zy],["week",42*zy],["month",62*zy],["week",70*zy],["quarter",95*zy],["month",31*zy*4],["month",13392e6],["half-year",16416e6],["month",31*zy*8],["month",26784e6],["year",380*zy]];Ey.create=function(t){return new Ey({useUTC:t.ecModel.get("useUTC")})};var Ny=Ks.prototype,Fy=Ty.prototype,Vy=kr,Wy=Ar,Hy=Math.floor,Gy=Math.ceil,Zy=Math.pow,Xy=Math.log,Yy=Ks.extend({type:"log",base:10,$constructor:function(){Ks.apply(this,arguments),this._originalScale=new Ty},getTicks:function(){var t=this._originalScale,e=this._extent,n=t.getExtent();return p(Fy.getTicks.call(this),function(i){var r=Ar(Zy(this.base,i));return r=i===e[0]&&t.__fixMin?gl(r,n[0]):r,r=i===e[1]&&t.__fixMax?gl(r,n[1]):r},this)},getLabel:Fy.getLabel,scale:function(t){return t=Ny.scale.call(this,t),Zy(this.base,t)},setExtent:function(t,e){var n=this.base;t=Xy(t)/Xy(n),e=Xy(e)/Xy(n),Fy.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=Ny.getExtent.call(this);e[0]=Zy(t,e[0]),e[1]=Zy(t,e[1]);var n=this._originalScale,i=n.getExtent();return n.__fixMin&&(e[0]=gl(e[0],i[0])),n.__fixMax&&(e[1]=gl(e[1],i[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=Xy(t[0])/Xy(e),t[1]=Xy(t[1])/Xy(e),Ny.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},niceTicks:function(t){t=t||10;var e=this._extent,n=e[1]-e[0];if(!(1/0===n||0>=n)){var i=Er(n);for(.5>=t/n*i&&(i*=10);!isNaN(i)&&Math.abs(i)<1&&Math.abs(i)>0;)i*=10;var r=[Ar(Gy(e[0]/i)*i),Ar(Hy(e[1]/i)*i)];this._interval=i,this._niceExtent=r}},niceExtent:function(t){Fy.niceExtent.call(this,t);var e=this._originalScale;e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}});f(["contain","normalize"],function(t){Yy.prototype[t]=function(e){return e=Xy(e)/Xy(this.base),Ny[t].call(this,e)}}),Yy.create=function(){return new Yy};var qy={getMin:function(t){var e=this.option,n=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=n&&"dataMin"!==n&&"function"!=typeof n&&!T(n)&&(n=this.axis.scale.parse(n)),n},getMax:function(t){var e=this.option,n=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=n&&"dataMax"!==n&&"function"!=typeof n&&!T(n)&&(n=this.axis.scale.parse(n)),n},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:N,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}},jy=zi({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,a=e.height/2;t.moveTo(n,i-a),t.lineTo(n+r,i+a),t.lineTo(n-r,i+a),t.closePath()}}),Uy=zi({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,a=e.height/2;t.moveTo(n,i-a),t.lineTo(n+r,i),t.lineTo(n,i+a),t.lineTo(n-r,i),t.closePath()}}),$y=zi({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width/5*3,a=Math.max(r,e.height),o=r/2,s=o*o/(a-o),l=i-a+o+s,h=Math.asin(s/o),u=Math.cos(h)*o,c=Math.sin(h),d=Math.cos(h),f=.6*o,p=.7*o;t.moveTo(n-u,l+s),t.arc(n,l,o,Math.PI-h,2*Math.PI+h),t.bezierCurveTo(n+u-c*f,l+s+d*f,n,i-p,n,i),t.bezierCurveTo(n,i-p,n-u+c*f,l+s+d*f,n-u,l+s),t.closePath()}}),Ky=zi({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.height,i=e.width,r=e.x,a=e.y,o=i/3*2;t.moveTo(r,a),t.lineTo(r+o,a+n),t.lineTo(r,a+n/4*3),t.lineTo(r-o,a+n),t.lineTo(r,a),t.closePath()}}),Qy={line:function(t,e,n,i,r){r.x1=t,r.y1=e+i/2,r.x2=t+n,r.y2=e+i/2},rect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i},roundRect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i,r.r=Math.min(n,i)/4},square:function(t,e,n,i,r){var a=Math.min(n,i);r.x=t,r.y=e,r.width=a,r.height=a},circle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.r=Math.min(n,i)/2},diamond:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i},pin:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},arrow:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},triangle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i}},Jy={};f({line:wg,rect:_g,roundRect:_g,square:_g,circle:cg,diamond:Uy,pin:$y,arrow:Ky,triangle:jy},function(t,e){Jy[e]=new t});var tx=zi({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style;"pin"===this.shape.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle")},buildPath:function(t,e,n){var i=e.symbolType,r=Jy[i];"none"!==e.symbolType&&(r||(i="rect",r=Jy[i]),Qy[i](e.x,e.y,e.width,e.height,r.shape),r.buildPath(t,r.shape,n))}}),ex={isDimensionStacked:Ys,enableDataStack:Xs,getStackedDimension:qs},nx=(Object.freeze||Object)({createList:function(t){return js(t.getSource(),t)},getLayoutRect:jr,dataStack:ex,createScale:function(t,e){var n=e;wr.isInstance(e)||(n=new wr(e),c(n,qy));var i=xl(n);return i.setExtent(t[0],t[1]),yl(i,n),i},mixinAxisModelCommonMethods:function(t){c(t,qy)},completeDimensions:Hs,createDimensions:_y,createSymbol:Tl}),ix=1e-8;Dl.prototype={constructor:Dl,properties:null,getBoundingRect:function(){var t=this._rect;if(t)return t;for(var e=Number.MAX_VALUE,n=[e,e],i=[-e,-e],r=[],a=[],o=this.geometries,s=0;s<o.length;s++)"polygon"===o[s].type&&(ai(o[s].exterior,r,a),Q(n,n,r),J(i,i,a));return 0===s&&(n[0]=n[1]=i[0]=i[1]=0),this._rect=new re(n[0],n[1],i[0]-n[0],i[1]-n[1])},contain:function(t){var e=this.getBoundingRect(),n=this.geometries;if(!e.contain(t[0],t[1]))return!1;t:for(var i=0,r=n.length;r>i;i++)if("polygon"===n[i].type){var a=n[i].exterior,o=n[i].interiors;if(Al(a,t[0],t[1])){for(var s=0;s<(o?o.length:0);s++)if(Al(o[s]))continue t;return!0}}return!1},transformTo:function(t,e,n,i){var r=this.getBoundingRect(),a=r.width/r.height;n?i||(i=n/a):n=a*i;for(var o=new re(t,e,n,i),s=r.calculateTransform(o),l=this.geometries,h=0;h<l.length;h++)if("polygon"===l[h].type){for(var u=l[h].exterior,c=l[h].interiors,d=0;d<u.length;d++)K(u[d],u[d],s);for(var f=0;f<(c?c.length:0);f++)for(d=0;d<c[f].length;d++)K(c[f][d],c[f][d],s)}(r=this._rect).copy(o),this.center=[r.x+r.width/2,r.y+r.height/2]},cloneShallow:function(t){null==t&&(t=this.name);var e=new Dl(t,this.geometries,this.center);return e._rect=this._rect,e.transformTo=null,e}};var rx=function(t){return kl(t),p(v(t.features,function(t){return t.geometry&&t.properties&&t.geometry.coordinates.length>0}),function(t){var e=t.properties,n=t.geometry,i=n.coordinates,r=[];"Polygon"===n.type&&r.push({type:"polygon",exterior:i[0],interiors:i.slice(1)}),"MultiPolygon"===n.type&&f(i,function(t){t[0]&&r.push({type:"polygon",exterior:t[0],interiors:t.slice(1)})});var a=new Dl(e.name,r,e.cp);return a.properties=e,a})},ax=Ln(),ox=[0,1],sx=function(t,e,n){this.dim=t,this.scale=e,this._extent=n||[0,0],this.inverse=!1,this.onBand=!1};sx.prototype={constructor:sx,contain:function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1]);return t>=n&&i>=t},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return Pr(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var n=this._extent;n[0]=t,n[1]=e},dataToCoord:function(t,e){var n=this._extent,i=this.scale;return t=i.normalize(t),this.onBand&&"ordinal"===i.type&&(n=n.slice(),ql(n,i.count())),Tr(t,ox,n,e)},coordToData:function(t,e){var n=this._extent,i=this.scale;this.onBand&&"ordinal"===i.type&&(n=n.slice(),ql(n,i.count()));var r=Tr(t,n,ox,e);return this.scale.scale(r)},pointToData:function(){},getTicksCoords:function(t){var e=(t=t||{}).tickModel||this.getTickModel(),n=Ol(this,e),i=p(n.ticks,function(t){return{coord:this.dataToCoord(t),tickValue:t}},this),r=e.get("alignWithLabel");return jl(this,i,n.tickCategoryInterval,r,t.clamp),i},getViewLabels:function(){return Ll(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0);0===n&&(n=1);var i=Math.abs(t[1]-t[0]);return Math.abs(i)/n},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return Hl(this)}};var lx=rx,hx={};f(["map","each","filter","indexOf","inherits","reduce","filter","bind","curry","isArray","isString","isObject","isFunction","extend","defaults","clone","merge"],function(t){hx[t]=ud[t]});var ux={};f(["extendShape","extendPath","makePath","makeImage","mergePath","resizePath","createIcon","setHoverStyle","setLabelStyle","setTextStyle","setText","getFont","updateProps","initProps","getTransform","clipPointsByRect","clipRectByRect","Group","Image","Text","Circle","Sector","Ring","Polygon","Polyline","Rect","Line","BezierCurve","Arc","IncrementalDisplayable","CompoundPath","LinearGradient","RadialGradient","BoundingRect"],function(t){ux[t]=Eg[t]});var cx=function(t){this._axes={},this._dimList=[],this.name=t||""};cx.prototype={constructor:cx,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return p(this._dimList,Ul,this)},getAxesByScale:function(t){return t=t.toLowerCase(),v(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var n=this._dimList,i=t instanceof Array?[]:{},r=0;r<n.length;r++){var a=n[r],o=this._axes[a];i[a]=o[e](t[a])}return i}},$l.prototype={constructor:$l,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),n=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&n.contain(n.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,n){var i=this.getAxis("x"),r=this.getAxis("y");return n=n||[],n[0]=i.toGlobalCoord(i.dataToCoord(t[0])),n[1]=r.toGlobalCoord(r.dataToCoord(t[1])),n},clampData:function(t,e){var n=this.getAxis("x").scale,i=this.getAxis("y").scale,r=n.getExtent(),a=i.getExtent(),o=n.parse(t[0]),s=i.parse(t[1]);return e=e||[],e[0]=Math.min(Math.max(Math.min(r[0],r[1]),o),Math.max(r[0],r[1])),e[1]=Math.min(Math.max(Math.min(a[0],a[1]),s),Math.max(a[0],a[1])),e},pointToData:function(t,e){var n=this.getAxis("x"),i=this.getAxis("y");return e=e||[],e[0]=n.coordToData(n.toLocalCoord(t[0])),e[1]=i.coordToData(i.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")}},u($l,cx);var dx=function(t,e,n,i,r){sx.call(this,t,e,n),this.type=i||"value",this.position=r||"bottom"};dx.prototype={constructor:dx,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},u(dx,sx);var fx={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},px={};px.categoryAxis=r({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},fx),px.valueAxis=r({boundaryGap:[0,0],splitNumber:5},fx),px.timeAxis=s({scale:!0,min:"dataMin",max:"dataMax"},px.valueAxis),px.logAxis=s({scale:!0,logBase:10},px.valueAxis);var gx=["value","category","time","log"],vx=function(t,e,n,i){f(gx,function(o){e.extend({type:t+"Axis."+o,mergeDefaultAndTheme:function(e,i){var a=this.layoutMode,s=a?$r(e):{};r(e,i.getTheme().get(o+"Axis")),r(e,this.getDefaultOption()),e.type=n(t,e),a&&Ur(e,s,a)},optionUpdated:function(){"category"===this.option.type&&(this.__ordinalMeta=Qs.createByAxisModel(this))},getCategories:function(t){var e=this.option;return"category"===e.type?t?e.data:this.__ordinalMeta.categories:void 0},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:a([{},px[o+"Axis"],i],!0)})}),sv.registerSubTypeDefaulter(t+"Axis",y(n,t))},mx=sv.extend({type:"cartesian2dAxis",axis:null,init:function(){mx.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){mx.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){mx.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});r(mx.prototype,qy);var yx={offset:0};vx("x",mx,Kl,yx),vx("y",mx,Kl,yx),sv.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});var xx=Jl.prototype;xx.type="grid",xx.axisPointerEnabled=!0,xx.getRect=function(){return this._rect},xx.update=function(t,e){var n=this._axesMap;this._updateScale(t,this.model),f(n.x,function(t){yl(t.scale,t.model)}),f(n.y,function(t){yl(t.scale,t.model)});var i={};f(n.x,function(t){th(n,"y",t,i)}),f(n.y,function(t){th(n,"x",t,i)}),this.resize(this.model,e)},xx.resize=function(t,e,n){function i(){f(a,function(t){var e=t.isHorizontal(),n=e?[0,r.width]:[0,r.height],i=t.inverse?1:0;t.setExtent(n[i],n[1-i]),nh(t,e?r.x:r.y)})}var r=jr(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=r;var a=this._axesList;i(),!n&&t.get("containLabel")&&(f(a,function(t){if(!t.model.get("axisLabel.inside")){var e=Ml(t);if(e){var n=t.isHorizontal()?"height":"width",i=t.model.get("axisLabel.margin");r[n]-=e[n]+i,"top"===t.position?r.y+=e.height+i:"left"===t.position&&(r.x+=e.width+i)}}}),i())},xx.getAxis=function(t,e){var n=this._axesMap[t];if(null!=n){if(null==e)for(var i in n)if(n.hasOwnProperty(i))return n[i];return n[e]}},xx.getAxes=function(){return this._axesList.slice()},xx.getCartesian=function(t,e){if(null!=t&&null!=e){var n="x"+t+"y"+e;return this._coordsMap[n]}b(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var i=0,r=this._coordsList;i<r.length;i++)if(r[i].getAxis("x").index===t||r[i].getAxis("y").index===e)return r[i]},xx.getCartesians=function(){return this._coordsList.slice()},xx.convertToPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.dataToPoint(n):i.axis?i.axis.toGlobalCoord(i.axis.dataToCoord(n)):null},xx.convertFromPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.pointToData(n):i.axis?i.axis.coordToData(i.axis.toLocalCoord(n)):null},xx._findConvertTarget=function(t,e){var n,i,r=e.seriesModel,a=e.xAxisModel||r&&r.getReferringComponents("xAxis")[0],o=e.yAxisModel||r&&r.getReferringComponents("yAxis")[0],s=e.gridModel,l=this._coordsList;return r?(n=r.coordinateSystem,h(l,n)<0&&(n=null)):a&&o?n=this.getCartesian(a.componentIndex,o.componentIndex):a?i=this.getAxis("x",a.componentIndex):o?i=this.getAxis("y",o.componentIndex):s&&s.coordinateSystem===this&&(n=this._coordsList[0]),{cartesian:n,axis:i}},xx.containPoint=function(t){var e=this._coordsList[0];return e?e.containPoint(t):void 0},xx._initCartesian=function(t,e){function n(n){return function(o,s){if(Ql(o,t,e)){var l=o.get("position");"x"===n?"top"!==l&&"bottom"!==l&&(l="bottom",i[l]&&(l="top"===l?"bottom":"top")):"left"!==l&&"right"!==l&&(l="left",i[l]&&(l="left"===l?"right":"left")),i[l]=!0;var h=new dx(n,xl(o),[0,0],o.get("type"),l),u="category"===h.type;h.onBand=u&&o.get("boundaryGap"),h.inverse=o.get("inverse"),o.axis=h,h.model=o,h.grid=this,h.index=s,this._axesList.push(h),r[n][s]=h,a[n]++}}}var i={left:!1,right:!1,top:!1,bottom:!1},r={x:{},y:{}},a={x:0,y:0};return e.eachComponent("xAxis",n("x"),this),e.eachComponent("yAxis",n("y"),this),a.x&&a.y?(this._axesMap=r,void f(r.x,function(e,n){f(r.y,function(i,r){var a="x"+n+"y"+r,o=new $l(a);o.grid=this,o.model=t,this._coordsMap[a]=o,this._coordsList.push(o),o.addAxis(e),o.addAxis(i)},this)},this)):(this._axesMap={},void(this._axesList=[]))},xx._updateScale=function(t,e){function n(t,e){f(t.mapDimension(e.dim,!0),function(n){e.scale.unionExtentFromData(t,qs(t,n))})}f(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(i){if(rh(i)){var r=ih(i),a=r[0],o=r[1];if(!Ql(a,e,t)||!Ql(o,e,t))return;var s=this.getCartesian(a.componentIndex,o.componentIndex),l=i.getData(),h=s.getAxis("x"),u=s.getAxis("y");"list"===l.type&&(n(l,h),n(l,u))}},this)},xx.getTooltipAxes=function(t){var e=[],n=[];return f(this.getCartesians(),function(i){var r=null!=t&&"auto"!==t?i.getAxis(t):i.getBaseAxis(),a=i.getOtherAxis(r);h(e,r)<0&&e.push(r),h(n,a)<0&&n.push(a)}),{baseAxes:e,otherAxes:n}};var _x=["xAxis","yAxis"];Jl.create=function(t,e){var n=[];return t.eachComponent("grid",function(i,r){var a=new Jl(i,t,e);a.name="grid_"+r,a.resize(i,e,!0),i.coordinateSystem=a,n.push(a)}),t.eachSeries(function(t){if(rh(t)){var e=ih(t),n=e[0],i=e[1],r=n.getCoordSysModel().coordinateSystem;t.coordinateSystem=r.getCartesian(n.componentIndex,i.componentIndex)}}),n},Jl.dimensions=Jl.prototype.dimensions=$l.prototype.dimensions,ba.register("cartesian2d",Jl),qv.extend({type:"series.__base_bar__",getInitialData:function(){return js(this.getSource(),this)},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var n=e.dataToPoint(e.clampData(t)),i=this.getData(),r=i.getLayout("offset"),a=i.getLayout("size");return n[e.getBaseAxis().isHorizontal()?0:1]+=r+a/2,n}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}}).extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function(){return!!this.get("large")&&this.get("progressive")},getProgressiveThreshold:function(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold");return e>t&&(t=e),t}});var bx=ip([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),Mx={getBarItemStyle:function(t){var e=bx(this,t);if(this.getBorderLineDash){var n=this.getBorderLineDash();n&&(e.lineDash=n)}return e}},Sx=["itemStyle","barBorderWidth"];o(wr.prototype,Mx),Ss({type:"bar",render:function(t,e,n){this._updateDrawMode(t);var i=t.get("coordinateSystem");return("cartesian2d"===i||"polar"===i)&&(this._isLargeDraw?this._renderLarge(t,e,n):this._renderNormal(t,e,n)),this.group},incrementalPrepareRender:function(t){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e){this._incrementalRenderLarge(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t){var e,n=this.group,i=t.getData(),r=this._data,a=t.coordinateSystem,o=a.getBaseAxis();"cartesian2d"===a.type?e=o.isHorizontal():"polar"===a.type&&(e="angle"===o.dim);var s=t.isAnimationEnabled()?t:null;i.diff(r).add(function(r){if(i.hasValue(r)){var o=i.getItemModel(r),l=Tx[a.type](i,r,o),h=Ix[a.type](i,r,o,l,e,s);i.setItemGraphicEl(r,h),n.add(h),uh(h,i,r,o,l,t,e,"polar"===a.type)}}).update(function(o,l){var h=r.getItemGraphicEl(l);if(i.hasValue(o)){var u=i.getItemModel(o),c=Tx[a.type](i,o,u);h?pr(h,{shape:c},s,o):h=Ix[a.type](i,o,u,c,e,s,!0),i.setItemGraphicEl(o,h),n.add(h),uh(h,i,o,u,c,t,e,"polar"===a.type)}else n.remove(h)}).remove(function(t){var e=r.getItemGraphicEl(t);"cartesian2d"===a.type?e&&lh(t,s,e):e&&hh(t,s,e)}).execute(),this._data=i},_renderLarge:function(t){this._clear(),dh(t,this.group)},_incrementalRenderLarge:function(t,e){dh(e,this.group,!0)},dispose:N,remove:function(t){this._clear(t)},_clear:function(t){var e=this.group,n=this._data;t&&t.get("animation")&&n&&!this._isLargeDraw?n.eachItemGraphicEl(function(e){"sector"===e.type?hh(e.dataIndex,t,e):lh(e.dataIndex,t,e)}):e.removeAll(),this._data=null}});var Ix={cartesian2d:function(t,e,n,i,r,a,s){var l=new _g({shape:o({},i)});if(a){var h=l.shape,u=r?"height":"width",c={};h[u]=0,c[u]=i[u],Eg[s?"updateProps":"initProps"](l,{shape:c},a,e)}return l},polar:function(t,e,n,i,r,a,o){var l=i.startAngle<i.endAngle,h=new pg({shape:s({clockwise:l},i)});if(a){var u=h.shape,c=r?"r":"endAngle",d={};u[c]=r?0:i.startAngle,d[c]=i[c],Eg[o?"updateProps":"initProps"](h,{shape:d},a,e)}return h}},Tx={cartesian2d:function(t,e,n){var i=t.getItemLayout(e),r=ch(n,i),a=i.width>0?1:-1,o=i.height>0?1:-1;return{x:i.x+a*r/2,y:i.y+o*r/2,width:i.width-a*r,height:i.height-o*r}},polar:function(t,e){var n=t.getItemLayout(e);return{cx:n.cx,cy:n.cy,r0:n.r0,r:n.r,startAngle:n.startAngle,endAngle:n.endAngle}}},Cx=Si.extend({type:"largeBar",shape:{points:[]},buildPath:function(t,e){for(var n=e.points,i=this.__startPoint,r=this.__valueIdx,a=0;a<n.length;a+=2)i[this.__valueIdx]=n[a+r],t.moveTo(i[0],i[1]),t.lineTo(n[a],n[a+1])}}),Ax=Math.PI,Dx=function(t,e){this.opt=e,this.axisModel=t,s(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new rf;var n=new rf({position:e.position.slice(),rotation:e.rotation});n.updateTransform(),this._transform=n.transform,this._dumbGroup=n};Dx.prototype={constructor:Dx,hasBuilder:function(t){return!!kx[t]},add:function(t){kx[t].call(this)},getGroup:function(){return this.group}};var kx={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var n=this.axisModel.axis.getExtent(),i=this._transform,r=[n[0],0],a=[n[1],0];i&&(K(r,r,i),K(a,a,i));var s=o({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new wg(Fi({anid:"line",shape:{x1:r[0],y1:r[1],x2:a[0],y2:a[1]},style:s,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})));var l=e.get("axisLine.symbol"),h=e.get("axisLine.symbolSize"),u=e.get("axisLine.symbolOffset")||0;if("number"==typeof u&&(u=[u,u]),null!=l){"string"==typeof l&&(l=[l,l]),("string"==typeof h||"number"==typeof h)&&(h=[h,h]);var c=h[0],d=h[1];f([{rotate:t.rotation+Math.PI/2,offset:u[0],r:0},{rotate:t.rotation-Math.PI/2,offset:u[1],r:Math.sqrt((r[0]-a[0])*(r[0]-a[0])+(r[1]-a[1])*(r[1]-a[1]))}],function(e,n){if("none"!==l[n]&&null!=l[n]){var i=Tl(l[n],-c/2,-d/2,c,d,s.stroke,!0),a=e.r+e.offset,o=[r[0]+a*Math.cos(t.rotation),r[1]-a*Math.sin(t.rotation)];i.attr({rotation:e.rotate,position:o,silent:!0}),this.group.add(i)}},this)}}},axisTickLabel:function(){var t=this.axisModel,e=this.opt,n=wh(this,t,e);mh(t,bh(this,t,e),n)},axisName:function(){var t=this.opt,e=this.axisModel,n=C(t.axisName,e.get("name"));if(n){var i,r=e.get("nameLocation"),a=t.nameDirection,s=e.getModel("nameTextStyle"),l=e.get("nameGap")||0,h=this.axisModel.axis.getExtent(),u=h[0]>h[1]?-1:1,c=["start"===r?h[0]-u*l:"end"===r?h[1]+u*l:(h[0]+h[1])/2,_h(r)?t.labelOffset+a*l:0],d=e.get("nameRotate");null!=d&&(d=d*Ax/180);var f;_h(r)?i=Px(t.rotation,null!=d?d:t.rotation,a):(i=gh(t,r,d||0,h),null!=(f=t.axisNameAvailableWidth)&&(f=Math.abs(f/Math.sin(i.rotation)),!isFinite(f)&&(f=null)));var p=s.getFont(),g=e.get("nameTruncate",!0)||{},v=g.ellipsis,m=C(t.nameTruncateMaxWidth,g.maxWidth,f),y=null!=v&&null!=m?Qg(n,m,p,v,{minChar:2,placeholder:g.placeholder}):n,x=e.get("tooltip",!0),_=e.mainType,w={componentType:_,name:n,$vars:["name"]};w[_+"Index"]=e.componentIndex;var b=new ug({anid:"name",__fullText:n,__truncatedText:y,position:c,rotation:i.rotation,silent:vh(e),z2:1,tooltip:x&&x.show?o({content:n,formatter:function(){return n},formatterParams:w},x):null});ar(b.style,s,{text:y,textFont:p,textFill:s.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:i.textAlign,textVerticalAlign:i.textVerticalAlign}),e.get("triggerEvent")&&(b.eventData=ph(e),b.eventData.targetType="axisName",b.eventData.name=n),this._dumbGroup.add(b),b.updateTransform(),this.group.add(b),b.decomposeTransform()}}},Px=Dx.innerTextLayout=function(t,e,n){var i,r,a=Or(e-t);return zr(a)?(r=n>0?"top":"bottom",i="center"):zr(a-Ax)?(r=n>0?"bottom":"top",i="center"):(r="middle",i=a>0&&Ax>a?n>0?"right":"left":n>0?"left":"right"),{rotation:a,textAlign:i,textVerticalAlign:r}},Lx=f,Ox=y,zx=bs({type:"axis",_axisPointer:null,axisPointerClass:null,render:function(t,e,n,i){this.axisPointerClass&&Dh(t),zx.superApply(this,"render",arguments),zh(this,t,0,n,0,!0)},updateAxisPointer:function(t,e,n,i){zh(this,t,0,n,0,!1)},remove:function(t,e){var n=this._axisPointer;n&&n.remove(e),zx.superApply(this,"remove",arguments)},dispose:function(t,e){Bh(this,e),zx.superApply(this,"dispose",arguments)}}),Bx=[];zx.registerAxisPointerClass=function(t,e){Bx[t]=e},zx.getAxisPointerClass=function(t){return t&&Bx[t]};var Ex=["axisLine","axisTickLabel","axisName"],Rx=["splitArea","splitLine"],Nx=zx.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,n,i){this.group.removeAll();var r=this._axisGroup;if(this._axisGroup=new rf,this.group.add(this._axisGroup),t.get("show")){var a=t.getCoordSysModel(),o=Eh(a,t),s=new Dx(t,o);f(Ex,s.add,s),this._axisGroup.add(s.getGroup()),f(Rx,function(e){t.get(e+".show")&&this["_"+e](t,a)},this),xr(r,this._axisGroup,t),Nx.superCall(this,"render",t,e,n,i)}},remove:function(){this._splitAreaColors=null},_splitLine:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitLine"),r=i.getModel("lineStyle"),a=r.get("color");a=x(a)?a:[a];for(var o=e.coordinateSystem.getRect(),l=n.isHorizontal(),h=0,u=n.getTicksCoords({tickModel:i}),c=[],d=[],f=r.getLineStyle(),p=0;p<u.length;p++){var g=n.toGlobalCoord(u[p].coord);l?(c[0]=g,c[1]=o.y,d[0]=g,d[1]=o.y+o.height):(c[0]=o.x,c[1]=g,d[0]=o.x+o.width,d[1]=g);var v=h++%a.length,m=u[p].tickValue;this._axisGroup.add(new wg(Fi({anid:null!=m?"line_"+u[p].tickValue:null,shape:{x1:c[0],y1:c[1],x2:d[0],y2:d[1]},style:s({stroke:a[v]},f),silent:!0})))}}},_splitArea:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitArea"),r=i.getModel("areaStyle"),a=r.get("color"),o=e.coordinateSystem.getRect(),l=n.getTicksCoords({tickModel:i,clamp:!0});if(l.length){var h=a.length,u=this._splitAreaColors,c=R(),d=0;if(u)for(v=0;v<l.length;v++){var f=u.get(l[v].tickValue);if(null!=f){d=(f+(h-1)*v)%h;break}}var p=n.toGlobalCoord(l[0].coord),g=r.getAreaStyle();a=x(a)?a:[a];for(var v=1;v<l.length;v++){var m,y,_,w,b=n.toGlobalCoord(l[v].coord);n.isHorizontal()?(m=p,y=o.y,_=b-m,w=o.height,p=m+_):(m=o.x,y=p,_=o.width,w=b-y,p=y+w);var M=l[v-1].tickValue;null!=M&&c.set(M,d),this._axisGroup.add(new _g({anid:null!=M?"area_"+M:null,shape:{x:m,y:y,width:_,height:w},style:s({fill:a[d]},g),silent:!0})),d=(d+1)%h}this._splitAreaColors=c}}}});Nx.extend({type:"xAxis"}),Nx.extend({type:"yAxis"}),bs({type:"grid",render:function(t){this.group.removeAll(),t.get("show")&&this.group.add(new _g({shape:t.coordinateSystem.getRect(),style:s({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),ps(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}),ms(y(function(t,e){var n=ll(t,e),i=hl(n),r={};f(n,function(t){var e=t.getData(),n=t.coordinateSystem,a=n.getBaseAxis(),o=ol(t),s=i[sl(a)][o],l=s.offset,h=s.width,u=n.getOtherAxis(a),c=t.get("barMinHeight")||0;r[o]=r[o]||[],e.setLayout({offset:l,size:h});for(var d=e.mapDimension(u.dim),f=e.mapDimension(a.dim),p=Ys(e,d),g=u.isHorizontal(),v=pl(a,u,p),m=0,y=e.count();y>m;m++){var x=e.get(d,m),_=e.get(f,m);if(!isNaN(x)){var w=x>=0?"p":"n",b=v;p&&(r[o][_]||(r[o][_]={p:v,n:v}),b=r[o][_][w]);var M,S,I,T;if(g)M=b,S=(C=n.dataToPoint([x,_]))[1]+l,I=C[0]-v,T=h,Math.abs(I)<c&&(I=(0>I?-1:1)*c),p&&(r[o][_][w]+=I);else{var C=n.dataToPoint([_,x]);M=C[0]+l,S=b,I=h,T=C[1]-v,Math.abs(T)<c&&(T=(0>=T?-1:1)*c),p&&(r[o][_][w]+=T)}e.setItemLayout(m,{x:M,y:S,width:I,height:T})}}},this)},"bar")),ms(Dy),ys({seriesType:"bar",reset:function(t){t.getData().setVisual("legendSymbol","roundRect")}}),qv.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(){return js(this.getSource(),this)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}});var Fx=Rh.prototype,Vx=Rh.getSymbolSize=function(t,e){var n=t.getItemVisual(e,"symbolSize");return n instanceof Array?n.slice():[+n,+n]};Fx._createSymbol=function(t,e,n,i,r){this.removeAll();var a=Tl(t,-1,-1,2,2,e.getItemVisual(n,"color"),r);a.attr({z2:100,culling:!0,scale:Nh(i)}),a.drift=Fh,this._symbolType=t,this.add(a)},Fx.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},Fx.getSymbolPath=function(){return this.childAt(0)},Fx.getScale=function(){return this.childAt(0).scale},Fx.highlight=function(){this.childAt(0).trigger("emphasis")},Fx.downplay=function(){this.childAt(0).trigger("normal")},Fx.setZ=function(t,e){var n=this.childAt(0);n.zlevel=t,n.z=e},Fx.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":"pointer"},Fx.updateData=function(t,e,n){this.silent=!1;var i=t.getItemVisual(e,"symbol")||"circle",r=t.hostModel,a=Vx(t,e),o=i!==this._symbolType;if(o){var s=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(i,t,e,a,s)}else(l=this.childAt(0)).silent=!1,pr(l,{scale:Nh(a)},r,e);if(this._updateCommon(t,e,a,n),o){var l=this.childAt(0),h=n&&n.fadeIn,u={scale:l.scale.slice()};h&&(u.style={opacity:l.style.opacity}),l.scale=[0,0],h&&(l.style.opacity=0),gr(l,u,r,e)}this._seriesModel=r};var Wx=["itemStyle"],Hx=["emphasis","itemStyle"],Gx=["label"],Zx=["emphasis","label"];Fx._updateCommon=function(t,e,n,i){var r=this.childAt(0),a=t.hostModel,s=t.getItemVisual(e,"color");"image"!==r.type&&r.useStyle({strokeNoScale:!0});var l=i&&i.itemStyle,h=i&&i.hoverItemStyle,u=i&&i.symbolRotate,c=i&&i.symbolOffset,d=i&&i.labelModel,f=i&&i.hoverLabelModel,p=i&&i.hoverAnimation,g=i&&i.cursorStyle;if(!i||t.hasItemOption){var v=i&&i.itemModel?i.itemModel:t.getItemModel(e);l=v.getModel(Wx).getItemStyle(["color"]),h=v.getModel(Hx).getItemStyle(),u=v.getShallow("symbolRotate"),c=v.getShallow("symbolOffset"),d=v.getModel(Gx),f=v.getModel(Zx),p=v.getShallow("hoverAnimation"),g=v.getShallow("cursor")}else h=o({},h);var m=r.style;r.attr("rotation",(u||0)*Math.PI/180||0),c&&r.attr("position",[Cr(c[0],n[0]),Cr(c[1],n[1])]),g&&r.attr("cursor",g),r.setColor(s,i&&i.symbolInnerColor),r.setStyle(l);var y=t.getItemVisual(e,"opacity");null!=y&&(m.opacity=y);var x=t.getItemVisual(e,"liftZ"),_=r.__z2Origin;null!=x?null==_&&(r.__z2Origin=r.z2,r.z2+=x):null!=_&&(r.z2=_,r.__z2Origin=null);var w=i&&i.useNameLabel;rr(m,h,d,f,{labelFetcher:a,labelDataIndex:e,defaultText:function(e){return w?t.getName(e):ah(t,e)},isRectText:!0,autoColor:s}),r.off("mouseover").off("mouseout").off("emphasis").off("normal"),r.hoverStyle=h,nr(r),r.__symbolOriginalScale=Nh(n),p&&a.isAnimationEnabled()&&r.on("mouseover",Vh).on("mouseout",Wh).on("emphasis",Hh).on("normal",Gh)},Fx.fadeOut=function(t,e){var n=this.childAt(0);this.silent=n.silent=!0,!(e&&e.keepLabel)&&(n.style.text=null),pr(n,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t)},u(Rh,rf);var Xx=Zh.prototype;Xx.updateData=function(t,e){e=Yh(e);var n=this.group,i=t.hostModel,r=this._data,a=this._symbolCtor,o=qh(t);r||n.removeAll(),t.diff(r).add(function(i){var r=t.getItemLayout(i);if(Xh(t,r,i,e)){var s=new a(t,i,o);s.attr("position",r),t.setItemGraphicEl(i,s),n.add(s)}}).update(function(s,l){var h=r.getItemGraphicEl(l),u=t.getItemLayout(s);return Xh(t,u,s,e)?(h?(h.updateData(t,s,o),pr(h,{position:u},i)):(h=new a(t,s)).attr("position",u),n.add(h),void t.setItemGraphicEl(s,h)):void n.remove(h)}).remove(function(t){var e=r.getItemGraphicEl(t);e&&e.fadeOut(function(){n.remove(e)})}).execute(),this._data=t},Xx.isPersistent=function(){return!0},Xx.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,n){var i=t.getItemLayout(n);e.attr("position",i)})},Xx.incrementalPrepareUpdate=function(t){this._seriesScope=qh(t),this._data=null,this.group.removeAll()},Xx.incrementalUpdate=function(t,e,n){n=Yh(n);for(var i=t.start;i<t.end;i++){var r=e.getItemLayout(i);if(Xh(e,r,i,n)){var a=new this._symbolCtor(e,i,this._seriesScope);a.traverse(function(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}),a.attr("position",r),this.group.add(a),e.setItemGraphicEl(i,a)}}},Xx.remove=function(t){var e=this.group,n=this._data;n&&t?n.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t)})}):e.removeAll()};var Yx=function(t,e,n,i,r,a,o,s){for(var l=Kh(t,e),h=[],u=[],c=[],d=[],f=[],p=[],g=[],v=jh(r,e,o),m=jh(a,t,s),y=0;y<l.length;y++){var x=l[y],_=!0;switch(x.cmd){case"=":var w=t.getItemLayout(x.idx),b=e.getItemLayout(x.idx1);(isNaN(w[0])||isNaN(w[1]))&&(w=b.slice()),h.push(w),u.push(b),c.push(n[x.idx]),d.push(i[x.idx1]),g.push(e.getRawIndex(x.idx1));break;case"+":M=x.idx;h.push(r.dataToPoint([e.get(v.dataDimsForPoint[0],M),e.get(v.dataDimsForPoint[1],M)])),u.push(e.getItemLayout(M).slice()),c.push($h(v,r,e,M)),d.push(i[M]),g.push(e.getRawIndex(M));break;case"-":var M=x.idx,S=t.getRawIndex(M);S!==M?(h.push(t.getItemLayout(M)),u.push(a.dataToPoint([t.get(m.dataDimsForPoint[0],M),t.get(m.dataDimsForPoint[1],M)])),c.push(n[M]),d.push($h(m,a,t,M)),g.push(S)):_=!1}_&&(f.push(x),p.push(p.length))}p.sort(function(t,e){return g[t]-g[e]});for(var I=[],T=[],C=[],A=[],D=[],y=0;y<p.length;y++){M=p[y];I[y]=h[M],T[y]=u[M],C[y]=c[M],A[y]=d[M],D[y]=f[M]}return{current:I,next:T,stackedOnCurrent:C,stackedOnNext:A,status:D}},qx=Q,jx=J,Ux=G,$x=V,Kx=[],Qx=[],Jx=[],t_=Si.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:fg(Si.prototype.brush),buildPath:function(t,e){var n=e.points,i=0,r=n.length,a=nu(n,e.smoothConstraint);if(e.connectNulls){for(;r>0&&Qh(n[r-1]);r--);for(;r>i&&Qh(n[i]);i++);}for(;r>i;)i+=Jh(t,n,i,r,r,1,a.min,a.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),e_=Si.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:fg(Si.prototype.brush),buildPath:function(t,e){var n=e.points,i=e.stackedOnPoints,r=0,a=n.length,o=e.smoothMonotone,s=nu(n,e.smoothConstraint),l=nu(i,e.smoothConstraint);if(e.connectNulls){for(;a>0&&Qh(n[a-1]);a--);for(;a>r&&Qh(n[r]);r++);}for(;a>r;){var h=Jh(t,n,r,a,a,1,s.min,s.max,e.smooth,o,e.connectNulls);Jh(t,i,r+h-1,h,a,-1,l.min,l.max,e.stackedOnSmooth,o,e.connectNulls),r+=h+1,t.closePath()}}});lo.extend({type:"line",init:function(){var t=new rf,e=new Zh;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,n){var i=t.coordinateSystem,r=this.group,a=t.getData(),o=t.getModel("lineStyle"),l=t.getModel("areaStyle"),h=a.mapArray(a.getItemLayout),u="polar"===i.type,c=this._coordSys,d=this._symbolDraw,f=this._polyline,p=this._polygon,g=this._lineGroup,v=t.get("animation"),m=!l.isEmpty(),y=l.get("origin"),x=ou(i,a,jh(i,a,y)),_=t.get("showSymbol"),w=_&&!u&&du(t,a,i),b=this._data;b&&b.eachItemGraphicEl(function(t,e){t.__temp&&(r.remove(t),b.setItemGraphicEl(e,null))}),_||d.remove(),r.add(g);var M=!u&&t.get("step");f&&c.type===i.type&&M===this._step?(m&&!p?p=this._newPolygon(h,x,i,v):p&&!m&&(g.remove(p),p=this._polygon=null),g.setClipPath(hu(i,!1,!1,t)),_&&d.updateData(a,{isIgnore:w,clipShape:hu(i,!1,!0,t)}),a.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),iu(this._stackedOnPoints,x)&&iu(this._points,h)||(v?this._updateAnimation(a,x,i,n,M,y):(M&&(h=uu(h,i,M),x=uu(x,i,M)),f.setShape({points:h}),p&&p.setShape({points:h,stackedOnPoints:x})))):(_&&d.updateData(a,{isIgnore:w,clipShape:hu(i,!1,!0,t)}),M&&(h=uu(h,i,M),x=uu(x,i,M)),f=this._newPolyline(h,i,v),m&&(p=this._newPolygon(h,x,i,v)),g.setClipPath(hu(i,!0,!1,t)));var S=cu(a,i)||a.getVisual("color");f.useStyle(s(o.getLineStyle(),{fill:"none",stroke:S,lineJoin:"bevel"}));var I=t.get("smooth");if(I=ru(t.get("smooth")),f.setShape({smooth:I,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),p){var T=a.getCalculationInfo("stackedOnSeries"),C=0;p.useStyle(s(l.getAreaStyle(),{fill:S,opacity:.7,lineJoin:"bevel"})),T&&(C=ru(T.get("smooth"))),p.setShape({smooth:I,stackedOnSmooth:C,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=a,this._coordSys=i,this._stackedOnPoints=x,this._points=h,this._step=M,this._valueOrigin=y},dispose:function(){},highlight:function(t,e,n,i){var r=t.getData(),a=Pn(r,i);if(!(a instanceof Array)&&null!=a&&a>=0){var o=r.getItemGraphicEl(a);if(!o){var s=r.getItemLayout(a);if(!s)return;(o=new Rh(r,a)).position=s,o.setZ(t.get("zlevel"),t.get("z")),o.ignore=isNaN(s[0])||isNaN(s[1]),o.__temp=!0,r.setItemGraphicEl(a,o),o.stopSymbolAnimation(!0),this.group.add(o)}o.highlight()}else lo.prototype.highlight.call(this,t,e,n,i)},downplay:function(t,e,n,i){var r=t.getData(),a=Pn(r,i);if(null!=a&&a>=0){var o=r.getItemGraphicEl(a);o&&(o.__temp?(r.setItemGraphicEl(a,null),this.group.remove(o)):o.downplay())}else lo.prototype.downplay.call(this,t,e,n,i)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new t_({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new e_({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(n),this._polygon=n,n},_updateAnimation:function(t,e,n,i,r,a){var o=this._polyline,s=this._polygon,l=t.hostModel,h=Yx(this._data,t,this._stackedOnPoints,e,this._coordSys,n,this._valueOrigin,a),u=h.current,c=h.stackedOnCurrent,d=h.next,f=h.stackedOnNext;r&&(u=uu(h.current,n,r),c=uu(h.stackedOnCurrent,n,r),d=uu(h.next,n,r),f=uu(h.stackedOnNext,n,r)),o.shape.__points=h.current,o.shape.points=u,pr(o,{shape:{points:d}},l),s&&(s.setShape({points:u,stackedOnPoints:c}),pr(s,{shape:{points:d,stackedOnPoints:f}},l));for(var p=[],g=h.status,v=0;v<g.length;v++)if("="===g[v].cmd){var m=t.getItemGraphicEl(g[v].idx1);m&&p.push({el:m,ptIdx:v})}o.animators&&o.animators.length&&o.animators[0].during(function(){for(var t=0;t<p.length;t++)p[t].el.attr("position",o.shape.__points[p[t].ptIdx])})},remove:function(){var t=this.group,e=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),e&&e.eachItemGraphicEl(function(n,i){n.__temp&&(t.remove(n),e.setItemGraphicEl(i,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}});var n_={average:function(t){for(var e=0,n=0,i=0;i<t.length;i++)isNaN(t[i])||(e+=t[i],n++);return 0===n?NaN:e/n},sum:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]||0;return e},max:function(t){for(var e=-1/0,n=0;n<t.length;n++)t[n]>e&&(e=t[n]);return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,n=0;n<t.length;n++)t[n]<e&&(e=t[n]);return isFinite(e)?e:NaN},nearest:function(t){return t[0]}},i_=function(t){return Math.round(t.length/2)};ys(function(t,e,n){return{seriesType:t,performRawSeries:!0,reset:function(t,i){var r=t.getData(),a=t.get("symbol")||e,o=t.get("symbolSize"),s=t.get("symbolKeepAspect");if(r.setVisual({legendSymbol:n||a,symbol:a,symbolSize:o,symbolKeepAspect:s}),!i.isSeriesFiltered(t)){var l="function"==typeof o;return{dataEach:r.hasItemOption||l?function(e,n){if("function"==typeof o){var i=t.getRawValue(n),r=t.getDataParams(n);e.setItemVisual(n,"symbolSize",o(i,r))}if(e.hasItemOption){var a=e.getItemModel(n),s=a.getShallow("symbol",!0),l=a.getShallow("symbolSize",!0),h=a.getShallow("symbolKeepAspect",!0);null!=s&&e.setItemVisual(n,"symbol",s),null!=l&&e.setItemVisual(n,"symbolSize",l),null!=h&&e.setItemVisual(n,"symbolKeepAspect",h)}}:null}}}}}("line","circle","line")),ms(function(t){return{seriesType:t,plan:$v(),reset:function(t){var e=t.getData(),n=t.coordinateSystem,i=t.pipelineContext.large;if(n){var r=p(n.dimensions,function(t){return e.mapDimension(t)}).slice(0,2),a=r.length,o=e.getCalculationInfo("stackResultDimension");return Ys(e,r[0])&&(r[0]=o),Ys(e,r[1])&&(r[1]=o),a&&{progress:function(t,e){for(var o=t.end-t.start,s=i&&new Float32Array(o*a),l=t.start,h=0,u=[],c=[];l<t.end;l++){var d;if(1===a)f=e.get(r[0],l),d=!isNaN(f)&&n.dataToPoint(f,null,c);else{var f=u[0]=e.get(r[0],l),p=u[1]=e.get(r[1],l);d=!isNaN(f)&&!isNaN(p)&&n.dataToPoint(u,null,c)}i?(s[h++]=d?d[0]:NaN,s[h++]=d?d[1]:NaN):e.setItemLayout(l,d&&d.slice()||[NaN,NaN])}i&&e.setLayout("symbolPoints",s)}}}}}}("line")),gs(Vm.PROCESSOR.STATISTIC,function(t){return{seriesType:t,modifyOutputEnd:!0,reset:function(t){var e=t.getData(),n=t.get("sampling"),i=t.coordinateSystem;if("cartesian2d"===i.type&&n){var r=i.getBaseAxis(),a=i.getOtherAxis(r),o=r.getExtent(),s=o[1]-o[0],l=Math.round(e.count()/s);if(l>1){var h;"string"==typeof n?h=n_[n]:"function"==typeof n&&(h=n),h&&t.setData(e.downSample(e.mapDimension(a.dim),1/l,h,i_))}}}}}("line"));var r_=function(t,e,n){e=x(e)&&{coordDimensions:e}||o({},e);var i=t.getSource(),r=_y(i,e),a=new my(r,t);return a.initData(i,n),a},a_={updateSelectedMap:function(t){this._targetList=x(t)?t.slice():[],this._selectTargetMap=g(t||[],function(t,e){return t.set(e.name,e),t},R())},select:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);"single"===this.get("selectedMode")&&this._selectTargetMap.each(function(t){t.selected=!1}),n&&(n.selected=!0)},unSelect:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);n&&(n.selected=!1)},toggleSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return null!=n?(this[n.selected?"unSelect":"select"](t,e),n.selected):void 0},isSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return n&&n.selected}},o_=Ms({type:"series.pie",init:function(t){o_.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this.updateSelectedMap(this._createSelectableList()),this._defaultLabelLine(t)},mergeOption:function(t){o_.superCall(this,"mergeOption",t),this.updateSelectedMap(this._createSelectableList())},getInitialData:function(){return r_(this,["value"])},_createSelectableList:function(){for(var t=this.getRawData(),e=t.mapDimension("value"),n=[],i=0,r=t.count();r>i;i++)n.push({name:t.getName(i),value:t.get(e,i),selected:Ua(t,i,"selected")});return n},getDataParams:function(t){var e=this.getData(),n=o_.superCall(this,"getDataParams",t),i=[];return e.each(e.mapDimension("value"),function(t){i.push(t)}),n.percent=Lr(i,t,e.hostModel.get("percentPrecision")),n.$vars.push("percent"),n},_defaultLabelLine:function(t){Sn(t,"labelLine",["show"]);var e=t.labelLine,n=t.emphasis.labelLine;e.show=e.show&&t.label.show,n.show=n.show&&t.emphasis.label.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,hoverOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{rotate:!1,show:!0,position:"outer"},labelLine:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},animationType:"expansion",animationEasing:"cubicOut"}});c(o_,a_);var s_=vu.prototype;s_.updateData=function(t,e,n){function i(){a.stopAnimation(!0),a.animateTo({shape:{r:u.r+l.get("hoverOffset")}},300,"elasticOut")}function r(){a.stopAnimation(!0),a.animateTo({shape:{r:u.r}},300,"elasticOut")}var a=this.childAt(0),l=t.hostModel,h=t.getItemModel(e),u=t.getItemLayout(e),c=o({},u);c.label=null,n?(a.setShape(c),"scale"===l.getShallow("animationType")?(a.shape.r=u.r0,gr(a,{shape:{r:u.r}},l,e)):(a.shape.endAngle=u.startAngle,pr(a,{shape:{endAngle:u.endAngle}},l,e))):pr(a,{shape:c},l,e);var d=t.getItemVisual(e,"color");a.useStyle(s({lineJoin:"bevel",fill:d},h.getModel("itemStyle").getItemStyle())),a.hoverStyle=h.getModel("emphasis.itemStyle").getItemStyle();var f=h.getShallow("cursor");f&&a.attr("cursor",f),gu(this,t.getItemLayout(e),l.isSelected(null,e),l.get("selectedOffset"),l.get("animation")),a.off("mouseover").off("mouseout").off("emphasis").off("normal"),h.get("hoverAnimation")&&l.isAnimationEnabled()&&a.on("mouseover",i).on("mouseout",r).on("emphasis",i).on("normal",r),this._updateLabel(t,e),nr(this)},s_._updateLabel=function(t,e){var n=this.childAt(1),i=this.childAt(2),r=t.hostModel,a=t.getItemModel(e),o=t.getItemLayout(e).label,s=t.getItemVisual(e,"color");pr(n,{shape:{points:o.linePoints||[[o.x,o.y],[o.x,o.y],[o.x,o.y]]}},r,e),pr(i,{style:{x:o.x,y:o.y}},r,e),i.attr({rotation:o.rotation,origin:[o.x,o.y],z2:10});var l=a.getModel("label"),h=a.getModel("emphasis.label"),u=a.getModel("labelLine"),c=a.getModel("emphasis.labelLine"),s=t.getItemVisual(e,"color");rr(i.style,i.hoverStyle={},l,h,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:s,useInsideStyle:!!o.inside},{textAlign:o.textAlign,textVerticalAlign:o.verticalAlign,opacity:t.getItemVisual(e,"opacity")}),i.ignore=i.normalIgnore=!l.get("show"),i.hoverIgnore=!h.get("show"),n.ignore=n.normalIgnore=!u.get("show"),n.hoverIgnore=!c.get("show"),n.setStyle({stroke:s,opacity:t.getItemVisual(e,"opacity")}),n.setStyle(u.getModel("lineStyle").getLineStyle()),n.hoverStyle=c.getModel("lineStyle").getLineStyle();var d=u.get("smooth");d&&!0===d&&(d=.4),n.setShape({smooth:d})},u(vu,rf);var l_=(lo.extend({type:"pie",init:function(){var t=new rf;this._sectorGroup=t},render:function(t,e,n,i){if(!i||i.from!==this.uid){var r=t.getData(),a=this._data,o=this.group,s=e.get("animation"),l=!a,h=t.get("animationType"),u=y(pu,this.uid,t,s,n),c=t.get("selectedMode");if(r.diff(a).add(function(t){var e=new vu(r,t);l&&"scale"!==h&&e.eachChild(function(t){t.stopAnimation(!0)}),c&&e.on("click",u),r.setItemGraphicEl(t,e),o.add(e)}).update(function(t,e){var n=a.getItemGraphicEl(e);n.updateData(r,t),n.off("click"),c&&n.on("click",u),o.add(n),r.setItemGraphicEl(t,n)}).remove(function(t){var e=a.getItemGraphicEl(t);o.remove(e)}).execute(),s&&l&&r.count()>0&&"scale"!==h){var d=r.getItemLayout(0),f=Math.max(n.getWidth(),n.getHeight())/2,p=m(o.removeClipPath,o);o.setClipPath(this._createClipPath(d.cx,d.cy,f,d.startAngle,d.clockwise,p,t))}else o.removeClipPath();this._data=r}},dispose:function(){},_createClipPath:function(t,e,n,i,r,a,o){var s=new pg({shape:{cx:t,cy:e,r0:0,r:n,startAngle:i,endAngle:i,clockwise:r}});return gr(s,{shape:{endAngle:i+(r?1:-1)*Math.PI*2}},o,a),s},containPoint:function(t,e){var n=e.getData().getItemLayout(0);if(n){var i=t[0]-n.cx,r=t[1]-n.cy,a=Math.sqrt(i*i+r*r);return a<=n.r&&a>=n.r0}}}),function(t,e){f(e,function(e){e.update="updateView",vs(e,function(n,i){var r={};return i.eachComponent({mainType:"series",subType:t,query:n},function(t){t[e.method]&&t[e.method](n.name,n.dataIndex);var i=t.getData();i.each(function(e){var n=i.getName(e);r[n]=t.isSelected(n)||!1})}),{name:n.name,selected:r}})})}),h_=function(t,e,n,i){var r,a,o=t.getData(),s=[],l=!1;o.each(function(n){var i,h,u,c,d=o.getItemLayout(n),f=o.getItemModel(n),p=f.getModel("label"),g=p.get("position")||f.get("emphasis.label.position"),v=f.getModel("labelLine"),m=v.get("length"),y=v.get("length2"),x=(d.startAngle+d.endAngle)/2,_=Math.cos(x),w=Math.sin(x);r=d.cx,a=d.cy;var b="inside"===g||"inner"===g;if("center"===g)i=d.cx,h=d.cy,c="center";else{var M=(b?(d.r+d.r0)/2*_:d.r*_)+r,S=(b?(d.r+d.r0)/2*w:d.r*w)+a;if(i=M+3*_,h=S+3*w,!b){var I=M+_*(m+e-d.r),T=S+w*(m+e-d.r),C=I+(0>_?-1:1)*y,A=T;i=C+(0>_?-5:5),h=A,u=[[M,S],[I,T],[C,A]]}c=b?"center":_>0?"left":"right"}var D=p.getFont(),k=p.get("rotate")?0>_?-x+Math.PI:-x:0,P=Me(t.getFormattedLabel(n,"normal")||o.getName(n),D,c,"top");l=!!k,d.label={x:i,y:h,position:g,height:P.height,len:m,len2:y,linePoints:u,textAlign:c,verticalAlign:"middle",rotation:k,inside:b},b||s.push(d.label)}),!l&&t.get("avoidLabelOverlap")&&yu(s,r,a,e,n,i)},u_=2*Math.PI,c_=Math.PI/180;l_("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),ys(function(t){return{getTargetSeries:function(e){var n={},i=R();return e.eachSeriesByType(t,function(t){t.__paletteScope=n,i.set(t.uid,t)}),i},reset:function(t){var e=t.getRawData(),n={},i=t.getData();i.each(function(t){var e=i.getRawIndex(t);n[e]=t}),e.each(function(r){var a=n[r],o=null!=a&&i.getItemVisual(a,"color",!0);if(o)e.setItemVisual(r,"color",o);else{var s=e.getItemModel(r).get("itemStyle.color")||t.getColorFromPalette(e.getName(r)||r+"",t.__paletteScope,e.count());e.setItemVisual(r,"color",s),null!=a&&i.setItemVisual(a,"color",s)}})}}}("pie")),ms(y(function(t,e,n){e.eachSeriesByType(t,function(t){var e=t.getData(),i=e.mapDimension("value"),r=t.get("center"),a=t.get("radius");x(a)||(a=[0,a]),x(r)||(r=[r,r]);var o=n.getWidth(),s=n.getHeight(),l=Math.min(o,s),h=Cr(r[0],o),u=Cr(r[1],s),c=Cr(a[0],l/2),d=Cr(a[1],l/2),f=-t.get("startAngle")*c_,p=t.get("minAngle")*c_,g=0;e.each(i,function(t){!isNaN(t)&&g++});var v=e.getSum(i),m=Math.PI/(v||g)*2,y=t.get("clockwise"),_=t.get("roseType"),w=t.get("stillShowZeroSum"),b=e.getDataExtent(i);b[0]=0;var M=u_,S=0,I=f,T=y?1:-1;if(e.each(i,function(t,n){var i;if(isNaN(t))e.setItemLayout(n,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:y,cx:h,cy:u,r0:c,r:_?NaN:d});else{p>(i="area"!==_?0===v&&w?m:t*m:u_/g)?(i=p,M-=p):S+=t;var r=I+T*i;e.setItemLayout(n,{angle:i,startAngle:I,endAngle:r,clockwise:y,cx:h,cy:u,r0:c,r:_?Tr(t,b,[c,d]):d}),I=r}}),u_>M&&g)if(.001>=M){var C=u_/g;e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n);i.angle=C,i.startAngle=f+T*n*C,i.endAngle=f+T*(n+1)*C}})}else m=M/S,I=f,e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n),r=i.angle===p?p:t*m;i.startAngle=I,i.endAngle=I+T*r,I+=T*r}});h_(t,d,o,s)})},"pie")),gs(function(t){return{seriesType:t,reset:function(t,e){var n=e.findComponents({mainType:"legend"});if(n&&n.length){var i=t.getData();i.filterSelf(function(t){for(var e=i.getName(t),r=0;r<n.length;r++)if(!n[r].isSelected(e))return!1;return!0})}}}}("pie")),ws({type:"title",layoutMode:{type:"box",ignoreSize:!0},defaultOption:{zlevel:0,z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bolder",color:"#333"},subtextStyle:{color:"#aaa"}}}),bs({type:"title",render:function(t,e,n){if(this.group.removeAll(),t.get("show")){var i=this.group,r=t.getModel("textStyle"),a=t.getModel("subtextStyle"),o=t.get("textAlign"),s=t.get("textBaseline"),l=new ug({style:ar({},r,{text:t.get("text"),textFill:r.getTextColor()},{disableBox:!0}),z2:10}),h=l.getBoundingRect(),u=t.get("subtext"),c=new ug({style:ar({},a,{text:u,textFill:a.getTextColor(),y:h.height+t.get("itemGap"),textVerticalAlign:"top"},{disableBox:!0}),z2:10}),d=t.get("link"),f=t.get("sublink"),p=t.get("triggerEvent",!0);l.silent=!d&&!p,c.silent=!f&&!p,d&&l.on("click",function(){window.open(d,"_"+t.get("target"))}),f&&c.on("click",function(){window.open(f,"_"+t.get("subtarget"))}),l.eventData=c.eventData=p?{componentType:"title",componentIndex:t.componentIndex}:null,i.add(l),u&&i.add(c);var g=i.getBoundingRect(),v=t.getBoxLayoutParams();v.width=g.width,v.height=g.height;var m=jr(v,{width:n.getWidth(),height:n.getHeight()},t.get("padding"));o||("middle"===(o=t.get("left")||t.get("right"))&&(o="center"),"right"===o?m.x+=m.width:"center"===o&&(m.x+=m.width/2)),s||("center"===(s=t.get("top")||t.get("bottom"))&&(s="middle"),"bottom"===s?m.y+=m.height:"middle"===s&&(m.y+=m.height/2),s=s||"top"),i.attr("position",[m.x,m.y]);var y={textAlign:o,textVerticalAlign:s};l.setStyle(y),c.setStyle(y),g=i.getBoundingRect();var x=m.margin,_=t.getItemStyle(["color","opacity"]);_.fill=t.get("backgroundColor");var w=new _g({shape:{x:g.x-x[3],y:g.y-x[0],width:g.width+x[1]+x[3],height:g.height+x[0]+x[2],r:t.get("borderRadius")},style:_,silent:!0});Vi(w),i.add(w)}}});var d_=ws({type:"legend.plain",dependencies:["series"],layoutMode:{type:"box",ignoreSize:!0},init:function(t,e,n){this.mergeDefaultAndTheme(t,n),t.selected=t.selected||{}},mergeOption:function(t){d_.superCall(this,"mergeOption",t)},optionUpdated:function(){this._updateData(this.ecModel);var t=this._data;if(t[0]&&"single"===this.get("selectedMode")){for(var e=!1,n=0;n<t.length;n++){var i=t[n].get("name");if(this.isSelected(i)){this.select(i),e=!0;break}}!e&&this.select(t[0].get("name"))}},_updateData:function(t){var e=[],n=[];t.eachRawSeries(function(i){var r=i.name;n.push(r);var a;if(i.legendDataProvider){var o=i.legendDataProvider(),s=o.mapArray(o.getName);t.isSeriesFiltered(i)||(n=n.concat(s)),s.length?e=e.concat(s):a=!0}else a=!0;a&&Dn(i)&&e.push(i.name)}),this._availableNames=n;var i=p(this.get("data")||e,function(t){return("string"==typeof t||"number"==typeof t)&&(t={name:t}),new wr(t,this,this.ecModel)},this);this._data=i},getData:function(){return this._data},select:function(t){var e=this.option.selected;"single"===this.get("selectedMode")&&f(this._data,function(t){e[t.get("name")]=!1}),e[t]=!0},unSelect:function(t){"single"!==this.get("selectedMode")&&(this.option.selected[t]=!1)},toggleSelected:function(t){var e=this.option.selected;e.hasOwnProperty(t)||(e[t]=!0),this[e[t]?"unSelect":"select"](t)},isSelected:function(t){var e=this.option.selected;return!(e.hasOwnProperty(t)&&!e[t])&&h(this._availableNames,t)>=0},defaultOption:{zlevel:0,z:4,show:!0,orient:"horizontal",left:"center",top:0,align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,inactiveColor:"#ccc",textStyle:{color:"#333"},selectedMode:!0,tooltip:{show:!1}}});vs("legendToggleSelect","legendselectchanged",y(xu,"toggleSelected")),vs("legendSelect","legendselected",y(xu,"select")),vs("legendUnSelect","legendunselected",y(xu,"unSelect"));var f_=y,p_=f,g_=rf,v_=bs({type:"legend.plain",newlineDisabled:!1,init:function(){this.group.add(this._contentGroup=new g_),this._backgroundEl},getContentGroup:function(){return this._contentGroup},render:function(t,e,n){if(this.resetInner(),t.get("show",!0)){var i=t.get("align");i&&"auto"!==i||(i="right"===t.get("left")&&"vertical"===t.get("orient")?"right":"left"),this.renderInner(i,t,e,n);var r=t.getBoxLayoutParams(),a={width:n.getWidth(),height:n.getHeight()},o=t.get("padding"),l=jr(r,a,o),h=this.layoutInner(t,i,l),u=jr(s({width:h.width,height:h.height},r),a,o);this.group.attr("position",[u.x-h.x,u.y-h.y]),this.group.add(this._backgroundEl=_u(h,t))}},resetInner:function(){this.getContentGroup().removeAll(),this._backgroundEl&&this.group.remove(this._backgroundEl)},renderInner:function(t,e,n,i){var r=this.getContentGroup(),a=R(),o=e.get("selectedMode"),s=[];n.eachRawSeries(function(t){!t.get("legendHoverLink")&&s.push(t.id)}),p_(e.getData(),function(l,h){var u=l.get("name");if(this.newlineDisabled||""!==u&&"\n"!==u){var c=n.getSeriesByName(u)[0];if(!a.get(u))if(c){var d=c.getData(),f=d.getVisual("color");"function"==typeof f&&(f=f(c.getDataParams(0)));var p=d.getVisual("legendSymbol")||"roundRect",g=d.getVisual("symbol");this._createItem(u,h,l,e,p,g,t,f,o).on("click",f_(wu,u,i)).on("mouseover",f_(bu,c.name,null,i,s)).on("mouseout",f_(Mu,c.name,null,i,s)),a.set(u,!0)}else n.eachRawSeries(function(n){if(!a.get(u)&&n.legendDataProvider){var r=n.legendDataProvider(),c=r.indexOfName(u);if(0>c)return;var d=r.getItemVisual(c,"color");this._createItem(u,h,l,e,"roundRect",null,t,d,o).on("click",f_(wu,u,i)).on("mouseover",f_(bu,null,u,i,s)).on("mouseout",f_(Mu,null,u,i,s)),a.set(u,!0)}},this)}else r.add(new g_({newline:!0}))},this)},_createItem:function(t,e,n,i,r,a,s,l,h){var u=i.get("itemWidth"),c=i.get("itemHeight"),d=i.get("inactiveColor"),f=i.get("symbolKeepAspect"),p=i.isSelected(t),g=new g_,v=n.getModel("textStyle"),m=n.get("icon"),y=n.getModel("tooltip"),x=y.parentModel;if(r=m||r,g.add(Tl(r,0,0,u,c,p?l:d,null==f||f)),!m&&a&&(a!==r||"none"===a)){var _=.8*c;"none"===a&&(a="circle"),g.add(Tl(a,(u-_)/2,(c-_)/2,_,_,p?l:d,null==f||f))}var w="left"===s?u+5:-5,b=s,M=i.get("formatter"),S=t;"string"==typeof M&&M?S=M.replace("{name}",null!=t?t:""):"function"==typeof M&&(S=M(t)),g.add(new ug({style:ar({},v,{text:S,x:w,y:c/2,textFill:p?v.getTextColor():d,textAlign:b,textVerticalAlign:"middle"})}));var I=new _g({shape:g.getBoundingRect(),invisible:!0,tooltip:y.get("show")?o({content:t,formatter:x.get("formatter",!0)||function(){return t},formatterParams:{componentType:"legend",legendIndex:i.componentIndex,name:t,$vars:["name"]}},y.option):null});return g.add(I),g.eachChild(function(t){t.silent=!0}),I.silent=!h,this.getContentGroup().add(g),nr(g),g.__legendDataIndex=e,g},layoutInner:function(t,e,n){var i=this.getContentGroup();rv(t.get("orient"),i,t.get("itemGap"),n.width,n.height);var r=i.getBoundingRect();return i.attr("position",[-r.x,-r.y]),this.group.getBoundingRect()}});gs(function(t){var e=t.findComponents({mainType:"legend"});e&&e.length&&t.filterSeries(function(t){for(var n=0;n<e.length;n++)if(!e[n].isSelected(t.name))return!1;return!0})}),sv.registerSubTypeDefaulter("legend",function(){return"plain"});var m_=d_.extend({type:"legend.scroll",setScrollDataIndex:function(t){this.option.scrollDataIndex=t},defaultOption:{scrollDataIndex:0,pageButtonItemGap:5,pageButtonGap:null,pageButtonPosition:"end",pageFormatter:"{current}/{total}",pageIcons:{horizontal:["M0,0L12,-10L12,10z","M0,0L-12,-10L-12,10z"],vertical:["M0,0L20,0L10,-20z","M0,0L20,0L10,20z"]},pageIconColor:"#2f4554",pageIconInactiveColor:"#aaa",pageIconSize:15,pageTextStyle:{color:"#333"},animationDurationUpdate:800},init:function(t,e,n,i){var r=$r(t);m_.superCall(this,"init",t,e,n,i),Su(this,t,r)},mergeOption:function(t,e){m_.superCall(this,"mergeOption",t,e),Su(this,this.option,t)},getOrient:function(){return"vertical"===this.get("orient")?{index:1,name:"vertical"}:{index:0,name:"horizontal"}}}),y_=rf,x_=["width","height"],__=["x","y"],w_=v_.extend({type:"legend.scroll",newlineDisabled:!0,init:function(){w_.superCall(this,"init"),this._currentIndex=0,this.group.add(this._containerGroup=new y_),this._containerGroup.add(this.getContentGroup()),this.group.add(this._controllerGroup=new y_),this._showController},resetInner:function(){w_.superCall(this,"resetInner"),this._controllerGroup.removeAll(),this._containerGroup.removeClipPath(),this._containerGroup.__rectSize=null},renderInner:function(t,e,n,i){function r(t,n){var r=t+"DataIndex",l=_r(e.get("pageIcons",!0)[e.getOrient().name][n],{onclick:m(a._pageGo,a,r,e,i)},{x:-s[0]/2,y:-s[1]/2,width:s[0],height:s[1]});l.name=t,o.add(l)}var a=this;w_.superCall(this,"renderInner",t,e,n,i);var o=this._controllerGroup,s=e.get("pageIconSize",!0);x(s)||(s=[s,s]),r("pagePrev",0);var l=e.getModel("pageTextStyle");o.add(new ug({name:"pageText",style:{textFill:l.getTextColor(),font:l.getFont(),textVerticalAlign:"middle",textAlign:"center"},silent:!0})),r("pageNext",1)},layoutInner:function(t,e,n){var i=this.getContentGroup(),r=this._containerGroup,a=this._controllerGroup,o=t.getOrient().index,s=x_[o],l=x_[1-o],h=__[1-o];rv(t.get("orient"),i,t.get("itemGap"),o?n.width:null,o?null:n.height),rv("horizontal",a,t.get("pageButtonItemGap",!0));var u=i.getBoundingRect(),c=a.getBoundingRect(),d=this._showController=u[s]>n[s],f=[-u.x,-u.y];f[o]=i.position[o];var p=[0,0],g=[-c.x,-c.y],v=A(t.get("pageButtonGap",!0),t.get("itemGap",!0));d&&("end"===t.get("pageButtonPosition",!0)?g[o]+=n[s]-c[s]:p[o]+=c[s]+v),g[1-o]+=u[l]/2-c[l]/2,i.attr("position",f),r.attr("position",p),a.attr("position",g);var m=this.group.getBoundingRect();if((m={x:0,y:0})[s]=d?n[s]:u[s],m[l]=Math.max(u[l],c[l]),m[h]=Math.min(0,c[h]+g[1-o]),r.__rectSize=n[s],d){var y={x:0,y:0};y[s]=Math.max(n[s]-c[s]-v,0),y[l]=m[l],r.setClipPath(new _g({shape:y})),r.__rectSize=y[s]}else a.eachChild(function(t){t.attr({invisible:!0,silent:!0})});var x=this._getPageInfo(t);return null!=x.pageIndex&&pr(i,{position:x.contentPosition},!!d&&t),this._updatePageInfoView(t,x),m},_pageGo:function(t,e,n){var i=this._getPageInfo(e)[t];null!=i&&n.dispatchAction({type:"legendScroll",scrollDataIndex:i,legendId:e.id})},_updatePageInfoView:function(t,e){var n=this._controllerGroup;f(["pagePrev","pageNext"],function(i){var r=null!=e[i+"DataIndex"],a=n.childOfName(i);a&&(a.setStyle("fill",r?t.get("pageIconColor",!0):t.get("pageIconInactiveColor",!0)),a.cursor=r?"pointer":"default")});var i=n.childOfName("pageText"),r=t.get("pageFormatter"),a=e.pageIndex,o=null!=a?a+1:0,s=e.pageCount;i&&r&&i.setStyle("text",w(r)?r.replace("{current}",o).replace("{total}",s):r({current:o,total:s}))},_getPageInfo:function(t){function e(t){var e=t.getBoundingRect().clone();return e[f]+=t.position[u],e}var n,i,r,a,o=t.get("scrollDataIndex",!0),s=this.getContentGroup(),l=s.getBoundingRect(),h=this._containerGroup.__rectSize,u=t.getOrient().index,c=x_[u],d=x_[1-u],f=__[u],p=s.position.slice();this._showController?s.eachChild(function(t){t.__legendDataIndex===o&&(a=t)}):a=s.childAt(0);var g=h?Math.ceil(l[c]/h):0;if(a){var v=a.getBoundingRect(),m=a.position[u]+v[f];p[u]=-m-l[f],n=Math.floor(g*(m+v[f]+h/2)/l[c]),n=l[c]&&g?Math.max(0,Math.min(g-1,n)):-1;var y={x:0,y:0};y[c]=h,y[d]=l[d],y[f]=-p[u]-l[f];var x,_=s.children();if(s.eachChild(function(t,n){var i=e(t);i.intersect(y)&&(null==x&&(x=n),r=t.__legendDataIndex),n===_.length-1&&i[f]+i[c]<=y[f]+y[c]&&(r=null)}),null!=x){var w=e(_[x]);if(y[f]=w[f]+w[c]-y[c],0>=x&&w[f]>=y[f])i=null;else{for(;x>0&&e(_[x-1]).intersect(y);)x--;i=_[x].__legendDataIndex}}}return{contentPosition:p,pageIndex:n,pageCount:g,pagePrevDataIndex:i,pageNextDataIndex:r}}});vs("legendScroll","legendscroll",function(t,e){var n=t.scrollDataIndex;null!=n&&e.eachComponent({mainType:"legend",subType:"scroll",query:t},function(t){t.setScrollDataIndex(n)})});var b_=function(t,e){var n,i=[],r=t.seriesIndex;if(null==r||!(n=e.getSeriesByIndex(r)))return{point:[]};var a=n.getData(),o=Pn(a,t);if(null==o||0>o||x(o))return{point:[]};var s=a.getItemGraphicEl(o),l=n.coordinateSystem;if(n.getTooltipPosition)i=n.getTooltipPosition(o)||[];else if(l&&l.dataToPoint)i=l.dataToPoint(a.getValues(p(l.dimensions,function(t){return a.mapDimension(t)}),o,!0))||[];else if(s){var h=s.getBoundingRect().clone();h.applyTransform(s.transform),i=[h.x+h.width/2,h.y+h.height/2]}return{point:i,el:s}},M_=f,S_=y,I_=Ln(),T_=(ws({type:"axisPointer",coordSysAxesInfo:null,defaultOption:{show:"auto",triggerOn:null,zlevel:0,z:50,type:"line",snap:!1,triggerTooltip:!0,value:null,status:null,link:[],animation:null,animationDurationUpdate:200,lineStyle:{color:"#aaa",width:1,type:"solid"},shadowStyle:{color:"rgba(150,150,150,0.3)"},label:{show:!0,formatter:null,precision:"auto",margin:3,color:"#fff",padding:[5,7,5,7],backgroundColor:"auto",borderColor:null,borderWidth:0,shadowBlur:3,shadowColor:"#aaa"},handle:{show:!1,icon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",size:45,margin:50,color:"#333",shadowBlur:3,shadowColor:"#aaa",shadowOffsetX:0,shadowOffsetY:2,throttle:40}}}),Ln()),C_=f,A_=bs({type:"axisPointer",render:function(t,e,n){var i=e.getComponent("tooltip"),r=t.get("triggerOn")||i&&i.get("triggerOn")||"mousemove|click";Bu("axisPointer",n,function(t,e,n){"none"!==r&&("leave"===t||r.indexOf(t)>=0)&&n({type:"updateAxisPointer",currTrigger:t,x:e&&e.offsetX,y:e&&e.offsetY})})},remove:function(t,e){Wu(e.getZr(),"axisPointer"),A_.superApply(this._model,"remove",arguments)},dispose:function(t,e){Wu("axisPointer",e),A_.superApply(this._model,"dispose",arguments)}}),D_=Ln(),k_=i,P_=m;(Hu.prototype={_group:null,_lastGraphicKey:null,_handle:null,_dragging:!1,_lastValue:null,_lastStatus:null,_payloadInfo:null,animationThreshold:15,render:function(t,e,n,i){var r=e.get("value"),a=e.get("status");if(this._axisModel=t,this._axisPointerModel=e,this._api=n,i||this._lastValue!==r||this._lastStatus!==a){this._lastValue=r,this._lastStatus=a;var o=this._group,s=this._handle;if(!a||"hide"===a)return o&&o.hide(),void(s&&s.hide());o&&o.show(),s&&s.show();var l={};this.makeElOption(l,r,t,e,n);var h=l.graphicKey;h!==this._lastGraphicKey&&this.clear(n),this._lastGraphicKey=h;var u=this._moveAnimation=this.determineAnimation(t,e);if(o){var c=y(Gu,e,u);this.updatePointerEl(o,l,c,e),this.updateLabelEl(o,l,c,e)}else o=this._group=new rf,this.createPointerEl(o,l,t,e),this.createLabelEl(o,l,t,e),n.getZr().add(o);qu(o,e,!0),this._renderHandle(r)}},remove:function(t){this.clear(t)},dispose:function(t){this.clear(t)},determineAnimation:function(t,e){var n=e.get("animation"),i=t.axis,r="category"===i.type,a=e.get("snap");if(!a&&!r)return!1;if("auto"===n||null==n){var o=this.animationThreshold;if(r&&i.getBandWidth()>o)return!0;if(a){var s=kh(t).seriesDataCount,l=i.getExtent();return Math.abs(l[0]-l[1])/s>o}return!1}return!0===n},makeElOption:function(){},createPointerEl:function(t,e){var n=e.pointer;if(n){var i=D_(t).pointerEl=new Eg[n.type](k_(e.pointer));t.add(i)}},createLabelEl:function(t,e,n,i){if(e.label){var r=D_(t).labelEl=new _g(k_(e.label));t.add(r),Xu(r,i)}},updatePointerEl:function(t,e,n){var i=D_(t).pointerEl;i&&(i.setStyle(e.pointer.style),n(i,{shape:e.pointer.shape}))},updateLabelEl:function(t,e,n,i){var r=D_(t).labelEl;r&&(r.setStyle(e.label.style),n(r,{shape:e.label.shape,position:e.label.position}),Xu(r,i))},_renderHandle:function(t){if(!this._dragging&&this.updateHandleTransform){var e=this._axisPointerModel,n=this._api.getZr(),i=this._handle,r=e.getModel("handle"),a=e.get("status");if(!r.get("show")||!a||"hide"===a)return i&&n.remove(i),void(this._handle=null);var o;this._handle||(o=!0,i=this._handle=_r(r.get("icon"),{cursor:"move",draggable:!0,onmousemove:function(t){wd(t.event)},onmousedown:P_(this._onHandleDragMove,this,0,0),drift:P_(this._onHandleDragMove,this),ondragend:P_(this._onHandleDragEnd,this)}),n.add(i)),qu(i,e,!1);var s=["color","borderColor","borderWidth","opacity","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];i.setStyle(r.getItemStyle(null,s));var l=r.get("size");x(l)||(l=[l,l]),i.attr("scale",[l[0]/2,l[1]/2]),go(this,"_doDispatchAxisPointer",r.get("throttle")||0,"fixRate"),this._moveHandleToValue(t,o)}},_moveHandleToValue:function(t,e){Gu(this._axisPointerModel,!e&&this._moveAnimation,this._handle,Yu(this.getHandleTransform(t,this._axisModel,this._axisPointerModel)))},_onHandleDragMove:function(t,e){var n=this._handle;if(n){this._dragging=!0;var i=this.updateHandleTransform(Yu(n),[t,e],this._axisModel,this._axisPointerModel);this._payloadInfo=i,n.stopAnimation(),n.attr(Yu(i)),D_(n).lastProp=null,this._doDispatchAxisPointer()}},_doDispatchAxisPointer:function(){if(this._handle){var t=this._payloadInfo,e=this._axisModel;this._api.dispatchAction({type:"updateAxisPointer",x:t.cursorPoint[0],y:t.cursorPoint[1],tooltipOption:t.tooltipOption,axesInfo:[{axisDim:e.axis.dim,axisIndex:e.componentIndex}]})}},_onHandleDragEnd:function(){if(this._dragging=!1,this._handle){var t=this._axisPointerModel.get("value");this._moveHandleToValue(t),this._api.dispatchAction({type:"hideTip"})}},getHandleTransform:null,updateHandleTransform:null,clear:function(t){this._lastValue=null,this._lastStatus=null;var e=t.getZr(),n=this._group,i=this._handle;e&&n&&(this._lastGraphicKey=null,n&&e.remove(n),i&&e.remove(i),this._group=null,this._handle=null,this._payloadInfo=null)},doClear:function(){},buildLabel:function(t,e,n){return n=n||0,{x:t[n],y:t[1-n],width:e[n],height:e[1-n]}}}).constructor=Hu,Vn(Hu);var L_=Hu.extend({makeElOption:function(t,e,n,i,r){var a=n.axis,o=a.grid,s=i.get("type"),l=nc(o,a).getOtherAxis(a).getGlobalExtent(),h=a.toGlobalCoord(a.dataToCoord(e,!0));if(s&&"none"!==s){var u=ju(i),c=O_[s](a,h,l,u);c.style=u,t.graphicKey=c.type,t.pointer=c}Ju(e,t,Eh(o.model,n),n,i,r)},getHandleTransform:function(t,e,n){var i=Eh(e.axis.grid.model,e,{labelInside:!1});return i.labelMargin=n.get("handle.margin"),{position:Qu(e.axis,t,i),rotation:i.rotation+(i.labelDirection<0?Math.PI:0)}},updateHandleTransform:function(t,e,n){var i=n.axis,r=i.grid,a=i.getGlobalExtent(!0),o=nc(r,i).getOtherAxis(i).getGlobalExtent(),s="x"===i.dim?0:1,l=t.position;l[s]+=e[s],l[s]=Math.min(a[1],l[s]),l[s]=Math.max(a[0],l[s]);var h=(o[1]+o[0])/2,u=[h,h];u[s]=l[s];var c=[{verticalAlign:"middle"},{align:"center"}];return{position:l,rotation:t.rotation,cursorPoint:u,tooltipOption:c[s]}}}),O_={line:function(t,e,n,i){var r=tc([e,n[0]],[e,n[1]],ic(t));return Fi({shape:r,style:i}),{type:"Line",shape:r}},shadow:function(t,e,n){var i=Math.max(1,t.getBandWidth()),r=n[1]-n[0];return{type:"Rect",shape:ec([e-i/2,n[0]],[i,r],ic(t))}}};zx.registerAxisPointerClass("CartesianAxisPointer",L_),ps(function(t){if(t){(!t.axisPointer||0===t.axisPointer.length)&&(t.axisPointer={});var e=t.axisPointer.link;e&&!x(e)&&(t.axisPointer.link=[e])}}),gs(Vm.PROCESSOR.STATISTIC,function(t,e){t.getComponent("axisPointer").coordSysAxesInfo=Mh(t,e)}),vs({type:"updateAxisPointer",event:"updateAxisPointer",update:":updateAxisPointer"},function(t,e,n){var i=t.currTrigger,r=[t.x,t.y],a=t,o=t.dispatchAction||m(n.dispatchAction,n),s=e.getComponent("axisPointer").coordSysAxesInfo;if(s){zu(r)&&(r=b_({seriesIndex:a.seriesIndex,dataIndex:a.dataIndex},e).point);var l=zu(r),h=a.axesInfo,u=s.axesInfo,c="leave"===i||zu(r),d={},f={},p={list:[],map:{}},g={showPointer:S_(Cu,f),showTooltip:S_(Au,p)};M_(s.coordSysMap,function(t,e){var n=l||t.containPoint(r);M_(s.coordSysAxesInfo[e],function(t){var e=t.axis,i=Lu(h,t);if(!c&&n&&(!h||i)){var a=i&&i.value;null!=a||l||(a=e.pointToData(r)),null!=a&&Iu(t,a,g,!1,d)}})});var v={};return M_(u,function(t,e){var n=t.linkGroup;n&&!f[e]&&M_(n.axesInfo,function(e,i){var r=f[i];if(e!==t&&r){var a=r.value;n.mapper&&(a=t.axis.scale.parse(n.mapper(a,Ou(e),Ou(t)))),v[t.key]=a}})}),M_(v,function(t,e){Iu(u[e],t,g,!0,d)}),Du(f,u,d),ku(p,r,t,o),Pu(u,0,n),d}}),ws({type:"tooltip",dependencies:["axisPointer"],defaultOption:{zlevel:0,z:60,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove|click",alwaysShowContent:!1,displayMode:"single",renderMode:"auto",confine:!1,showDelay:0,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"rgba(50,50,50,0.7)",borderColor:"#333",borderRadius:4,borderWidth:0,padding:5,extraCssText:"",axisPointer:{type:"line",axis:"auto",animation:"auto",animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",crossStyle:{color:"#999",width:1,type:"dashed",textStyle:{}}},textStyle:{color:"#fff",fontSize:14}}});var z_=f,B_=Vr,E_=["","-webkit-","-moz-","-o-"];sc.prototype={constructor:sc,_enterable:!0,update:function(){var t=this._container,e=t.currentStyle||document.defaultView.getComputedStyle(t),n=t.style;"absolute"!==n.position&&"absolute"!==e.position&&(n.position="relative")},show:function(t){clearTimeout(this._hideTimeout);var e=this.el;e.style.cssText="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;"+oc(t)+";left:"+this._x+"px;top:"+this._y+"px;"+(t.get("extraCssText")||""),e.style.display=e.innerHTML?"block":"none",e.style.pointerEvents=this._enterable?"auto":"none",this._show=!0},setContent:function(t){this.el.innerHTML=null==t?"":t},setEnterable:function(t){this._enterable=t},getSize:function(){var t=this.el;return[t.clientWidth,t.clientHeight]},moveTo:function(t,e){var n,i=this._zr;i&&i.painter&&(n=i.painter.getViewportRootOffset())&&(t+=n.offsetLeft,e+=n.offsetTop);var r=this.el.style;r.left=t+"px",r.top=e+"px",this._x=t,this._y=e},hide:function(){this.el.style.display="none",this._show=!1},hideLater:function(t){!this._show||this._inContent&&this._enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(m(this.hide,this),t)):this.hide())},isShow:function(){return this._show},getOuterSize:function(){var t=this.el.clientWidth,e=this.el.clientHeight;if(document.defaultView&&document.defaultView.getComputedStyle){var n=document.defaultView.getComputedStyle(this.el);n&&(t+=parseInt(n.paddingLeft,10)+parseInt(n.paddingRight,10)+parseInt(n.borderLeftWidth,10)+parseInt(n.borderRightWidth,10),e+=parseInt(n.paddingTop,10)+parseInt(n.paddingBottom,10)+parseInt(n.borderTopWidth,10)+parseInt(n.borderBottomWidth,10))}return{width:t,height:e}}},lc.prototype={constructor:lc,_enterable:!0,update:function(){},show:function(){this._hideTimeout&&clearTimeout(this._hideTimeout),this.el.attr("show",!0),this._show=!0},setContent:function(t,e,n){this.el&&this._zr.remove(this.el);for(var i={},r=t,a="{marker",o=r.indexOf(a);o>=0;){var s=r.indexOf("|}"),l=r.substr(o+a.length,s-o-a.length);i["marker"+l]=l.indexOf("sub")>-1?{textWidth:4,textHeight:4,textBorderRadius:2,textBackgroundColor:e[l],textOffset:[3,0]}:{textWidth:10,textHeight:10,textBorderRadius:5,textBackgroundColor:e[l]},o=(r=r.substr(s+1)).indexOf("{marker")}this.el=new ug({style:{rich:i,text:t,textLineHeight:20,textBackgroundColor:n.get("backgroundColor"),textBorderRadius:n.get("borderRadius"),textFill:n.get("textStyle.color"),textPadding:n.get("padding")},z:n.get("z")}),this._zr.add(this.el);var h=this;this.el.on("mouseover",function(){h._enterable&&(clearTimeout(h._hideTimeout),h._show=!0),h._inContent=!0}),this.el.on("mouseout",function(){h._enterable&&h._show&&h.hideLater(h._hideDelay),h._inContent=!1})},setEnterable:function(t){this._enterable=t},getSize:function(){var t=this.el.getBoundingRect();return[t.width,t.height]},moveTo:function(t,e){this.el&&this.el.attr("position",[t,e])},hide:function(){this.el.hide(),this._show=!1},hideLater:function(t){!this._show||this._inContent&&this._enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(m(this.hide,this),t)):this.hide())},isShow:function(){return this._show},getOuterSize:function(){return this.getSize()}};var R_=m,N_=f,F_=Cr,V_=new _g({shape:{x:-1,y:-1,width:2,height:2}});bs({type:"tooltip",init:function(t,e){if(!$c.node){var n=t.getComponent("tooltip").get("renderMode");this._renderMode=Rn(n);var i;"html"===this._renderMode?(i=new sc(e.getDom(),e),this._newLine="<br/>"):(i=new lc(e),this._newLine="\n"),this._tooltipContent=i}},render:function(t,e,n){if(!$c.node){this.group.removeAll(),this._tooltipModel=t,this._ecModel=e,this._api=n,this._lastDataByCoordSys=null,this._alwaysShowContent=t.get("alwaysShowContent");var i=this._tooltipContent;i.update(),i.setEnterable(t.get("enterable")),this._initGlobalListener(),this._keepShow()}},_initGlobalListener:function(){var t=this._tooltipModel.get("triggerOn");Bu("itemTooltip",this._api,R_(function(e,n,i){"none"!==t&&(t.indexOf(e)>=0?this._tryShow(n,i):"leave"===e&&this._hide(i))},this))},_keepShow:function(){var t=this._tooltipModel,e=this._ecModel,n=this._api;if(null!=this._lastX&&null!=this._lastY&&"none"!==t.get("triggerOn")){var i=this;clearTimeout(this._refreshUpdateTimeout),this._refreshUpdateTimeout=setTimeout(function(){i.manuallyShowTip(t,e,n,{x:i._lastX,y:i._lastY})})}},manuallyShowTip:function(t,e,n,i){if(i.from!==this.uid&&!$c.node){var r=uc(i,n);this._ticket="";var a=i.dataByCoordSys;if(i.tooltip&&null!=i.x&&null!=i.y){var o=V_;o.position=[i.x,i.y],o.update(),o.tooltip=i.tooltip,this._tryShow({offsetX:i.x,offsetY:i.y,target:o},r)}else if(a)this._tryShow({offsetX:i.x,offsetY:i.y,position:i.position,event:{},dataByCoordSys:i.dataByCoordSys,tooltipOption:i.tooltipOption},r);else if(null!=i.seriesIndex){if(this._manuallyAxisShowTip(t,e,n,i))return;var s=b_(i,e),l=s.point[0],h=s.point[1];null!=l&&null!=h&&this._tryShow({offsetX:l,offsetY:h,position:i.position,target:s.el,event:{}},r)}else null!=i.x&&null!=i.y&&(n.dispatchAction({type:"updateAxisPointer",x:i.x,y:i.y}),this._tryShow({offsetX:i.x,offsetY:i.y,position:i.position,target:n.getZr().findHover(i.x,i.y).target,event:{}},r))}},manuallyHideTip:function(t,e,n,i){var r=this._tooltipContent;!this._alwaysShowContent&&this._tooltipModel&&r.hideLater(this._tooltipModel.get("hideDelay")),this._lastX=this._lastY=null,i.from!==this.uid&&this._hide(uc(i,n))},_manuallyAxisShowTip:function(t,e,n,i){var r=i.seriesIndex,a=i.dataIndex,o=e.getComponent("axisPointer").coordSysAxesInfo;if(null!=r&&null!=a&&null!=o){var s=e.getSeriesByIndex(r);if(s&&"axis"===(t=hc([s.getData().getItemModel(a),s,(s.coordinateSystem||{}).model,t])).get("trigger"))return n.dispatchAction({type:"updateAxisPointer",seriesIndex:r,dataIndex:a,position:i.position}),!0}},_tryShow:function(t,e){var n=t.target;if(this._tooltipModel){this._lastX=t.offsetX,this._lastY=t.offsetY;var i=t.dataByCoordSys;i&&i.length?this._showAxisTooltip(i,t):n&&null!=n.dataIndex?(this._lastDataByCoordSys=null,this._showSeriesItemTooltip(t,n,e)):n&&n.tooltip?(this._lastDataByCoordSys=null,this._showComponentItemTooltip(t,n,e)):(this._lastDataByCoordSys=null,this._hide(e))}},_showOrMove:function(t,e){var n=t.get("showDelay");e=m(e,this),clearTimeout(this._showTimout),n>0?this._showTimout=setTimeout(e,n):e()},_showAxisTooltip:function(t,e){var n=this._ecModel,i=this._tooltipModel,a=[e.offsetX,e.offsetY],o=[],s=[],l=hc([e.tooltipOption,i]),h=this._renderMode,u=this._newLine,c={};N_(t,function(t){N_(t.dataByAxis,function(t){var e=n.getComponent(t.axisDim+"Axis",t.axisIndex),i=t.value,a=[];if(e&&null!=i){var l=Ku(i,e.axis,n,t.seriesDataIndices,t.valueLabelOpt);f(t.seriesDataIndices,function(o){var u=n.getSeriesByIndex(o.seriesIndex),d=o.dataIndexInside,f=u&&u.getDataParams(d);if(f.axisDim=t.axisDim,f.axisIndex=t.axisIndex,f.axisType=t.axisType,f.axisId=t.axisId,f.axisValue=bl(e.axis,i),f.axisValueLabel=l,f){s.push(f);var p,g=u.formatTooltip(d,!0,null,h);if(b(g)){p=g.html;var v=g.markers;r(c,v)}else p=g;a.push(p)}});var d=l;o.push("html"!==h?a.join(u):(d?Wr(d)+u:"")+a.join(u))}})},this),o.reverse(),o=o.join(this._newLine+this._newLine);var d=e.position;this._showOrMove(l,function(){this._updateContentNotChangedOnAxis(t)?this._updatePosition(l,d,a[0],a[1],this._tooltipContent,s):this._showTooltipContent(l,o,s,Math.random(),a[0],a[1],d,void 0,c)})},_showSeriesItemTooltip:function(t,e,n){var i=this._ecModel,r=e.seriesIndex,a=i.getSeriesByIndex(r),o=e.dataModel||a,s=e.dataIndex,l=e.dataType,h=o.getData(),u=hc([h.getItemModel(s),o,a&&(a.coordinateSystem||{}).model,this._tooltipModel]),c=u.get("trigger");if(null==c||"item"===c){var d,f,p=o.getDataParams(s,l),g=o.formatTooltip(s,!1,l,this._renderMode);b(g)?(d=g.html,f=g.markers):(d=g,f=null);var v="item_"+o.name+"_"+s;this._showOrMove(u,function(){this._showTooltipContent(u,d,p,v,t.offsetX,t.offsetY,t.position,t.target,f)}),n({type:"showTip",dataIndexInside:s,dataIndex:h.getRawIndex(s),seriesIndex:r,from:this.uid})}},_showComponentItemTooltip:function(t,e,n){var i=e.tooltip;if("string"==typeof i){var r=i;i={content:r,formatter:r}}var a=new wr(i,this._tooltipModel,this._ecModel),o=a.get("content"),s=Math.random();this._showOrMove(a,function(){this._showTooltipContent(a,o,a.get("formatterParams")||{},s,t.offsetX,t.offsetY,t.position,e)}),n({type:"showTip",from:this.uid})},_showTooltipContent:function(t,e,n,i,r,a,o,s,l){if(this._ticket="",t.get("showContent")&&t.get("show")){var h=this._tooltipContent,u=t.get("formatter");o=o||t.get("position");var c=e;if(u&&"string"==typeof u)c=Hr(u,n,!0);else if("function"==typeof u){var d=R_(function(e,i){e===this._ticket&&(h.setContent(i,l,t),this._updatePosition(t,o,r,a,h,n,s))},this);this._ticket=i,c=u(n,i,d)}h.setContent(c,l,t),h.show(t),this._updatePosition(t,o,r,a,h,n,s)}},_updatePosition:function(t,e,n,i,r,a,o){var s=this._api.getWidth(),l=this._api.getHeight();e=e||t.get("position");var h=r.getSize(),u=t.get("align"),c=t.get("verticalAlign"),d=o&&o.getBoundingRect().clone();if(o&&d.applyTransform(o.transform),"function"==typeof e&&(e=e([n,i],a,r.el,d,{viewSize:[s,l],contentSize:h.slice()})),x(e))n=F_(e[0],s),i=F_(e[1],l);else if(b(e)){e.width=h[0],e.height=h[1];var f=jr(e,{width:s,height:l});n=f.x,i=f.y,u=null,c=null}else"string"==typeof e&&o?(n=(p=fc(e,d,h))[0],i=p[1]):(n=(p=cc(n,i,r,s,l,u?null:20,c?null:20))[0],i=p[1]);if(u&&(n-=pc(u)?h[0]/2:"right"===u?h[0]:0),c&&(i-=pc(c)?h[1]/2:"bottom"===c?h[1]:0),t.get("confine")){var p=dc(n,i,r,s,l);n=p[0],i=p[1]}r.moveTo(n,i)},_updateContentNotChangedOnAxis:function(t){var e=this._lastDataByCoordSys,n=!!e&&e.length===t.length;return n&&N_(e,function(e,i){var r=e.dataByAxis||{},a=(t[i]||{}).dataByAxis||[];(n&=r.length===a.length)&&N_(r,function(t,e){var i=a[e]||{},r=t.seriesDataIndices||[],o=i.seriesDataIndices||[];(n&=t.value===i.value&&t.axisType===i.axisType&&t.axisId===i.axisId&&r.length===o.length)&&N_(r,function(t,e){var i=o[e];n&=t.seriesIndex===i.seriesIndex&&t.dataIndex===i.dataIndex})})}),this._lastDataByCoordSys=t,!!n},_hide:function(t){this._lastDataByCoordSys=null,t({type:"hideTip",from:this.uid})},dispose:function(t,e){$c.node||(this._tooltipContent.hide(),Wu("itemTooltip",e))}}),vs({type:"showTip",event:"showTip",update:"tooltip:manuallyShowTip"},function(){}),vs({type:"hideTip",event:"hideTip",update:"tooltip:manuallyHideTip"},function(){}),sv.registerSubTypeDefaulter("dataZoom",function(){return"slider"});var W_=["cartesian2d","polar","singleAxis"],H_=function(t,e){var n=p(t=t.slice(),Yr),i=p(e=(e||[]).slice(),Yr);return function(r,a){f(t,function(t,o){for(var s={name:t,capital:n[o]},l=0;l<e.length;l++)s[e[l]]=t+i[l];r.call(a,s)})}}(["x","y","z","radius","angle","single"],["axisIndex","axis","index","id"]),G_=f,Z_=Dr,X_=function(t,e,n,i){this._dimName=t,this._axisIndex=e,this._valueWindow,this._percentWindow,this._dataExtent,this._minMaxSpan,this.ecModel=i,this._dataZoomModel=n};X_.prototype={constructor:X_,hostedBy:function(t){return this._dataZoomModel===t},getDataValueWindow:function(){return this._valueWindow.slice()},getDataPercentWindow:function(){return this._percentWindow.slice()},getTargetSeriesModels:function(){var t=[],e=this.ecModel;return e.eachSeries(function(n){if(gc(n.get("coordinateSystem"))){var i=this._dimName,r=e.queryComponents({mainType:i+"Axis",index:n.get(i+"AxisIndex"),id:n.get(i+"AxisId")})[0];this._axisIndex===(r&&r.componentIndex)&&t.push(n)}},this),t},getAxisModel:function(){return this.ecModel.getComponent(this._dimName+"Axis",this._axisIndex)},getOtherAxisModel:function(){var t,e,n=this._dimName,i=this.ecModel,r=this.getAxisModel();"x"===n||"y"===n?(e="gridIndex",t="x"===n?"y":"x"):(e="polarIndex",t="angle"===n?"radius":"angle");var a;return i.eachComponent(t+"Axis",function(t){(t.get(e)||0)===(r.get(e)||0)&&(a=t)}),a},getMinMaxSpan:function(){return i(this._minMaxSpan)},calculateDataWindow:function(t){var e=this._dataExtent,n=this.getAxisModel().axis.scale,i=this._dataZoomModel.getRangePropMode(),r=[0,100],a=[t.start,t.end],o=[];return G_(["startValue","endValue"],function(e){o.push(null!=t[e]?n.parse(t[e]):null)}),G_([0,1],function(t){var s=o[t],l=a[t];"percent"===i[t]?(null==l&&(l=r[t]),s=n.parse(Tr(l,r,e,!0))):l=Tr(s,e,r,!0),o[t]=s,a[t]=l}),{valueWindow:Z_(o),percentWindow:Z_(a)}},reset:function(t){if(t===this._dataZoomModel){var e=this.getTargetSeriesModels();this._dataExtent=mc(this,this._dimName,e);var n=this.calculateDataWindow(t.option);this._valueWindow=n.valueWindow,this._percentWindow=n.percentWindow,_c(this),xc(this)}},restore:function(t){t===this._dataZoomModel&&(this._valueWindow=this._percentWindow=null,xc(this,!0))},filterData:function(t){function e(t){return t>=a[0]&&t<=a[1]}if(t===this._dataZoomModel){var n=this._dimName,i=this.getTargetSeriesModels(),r=t.get("filterMode"),a=this._valueWindow;"none"!==r&&G_(i,function(t){var i=t.getData(),o=i.mapDimension(n,!0);o.length&&("weakFilter"===r?i.filterSelf(function(t){for(var e,n,r,s=0;s<o.length;s++){var l=i.get(o[s],t),h=!isNaN(l),u=l<a[0],c=l>a[1];if(h&&!u&&!c)return!0;h&&(r=!0),u&&(e=!0),c&&(n=!0)}return r&&e&&n}):G_(o,function(n){if("empty"===r)t.setData(i.map(n,function(t){return e(t)?t:NaN}));else{var o={};o[n]=a,i.selectRange(o)}}),G_(o,function(t){i.setApproximateExtent(a,t)}))})}}};var Y_=f,q_=H_,j_=ws({type:"dataZoom",dependencies:["xAxis","yAxis","zAxis","radiusAxis","angleAxis","singleAxis","series"],defaultOption:{zlevel:0,z:4,orient:null,xAxisIndex:null,yAxisIndex:null,filterMode:"filter",throttle:null,start:0,end:100,startValue:null,endValue:null,minSpan:null,maxSpan:null,minValueSpan:null,maxValueSpan:null,rangeMode:null},init:function(t,e,n){this._dataIntervalByAxis={},this._dataInfo={},this._axisProxies={},this.textStyleModel,this._autoThrottle=!0,this._rangePropMode=["percent","percent"];var i=wc(t);this.mergeDefaultAndTheme(t,n),this.doInit(i)},mergeOption:function(t){var e=wc(t);r(this.option,t,!0),this.doInit(e)},doInit:function(t){var e=this.option;$c.canvasSupported||(e.realtime=!1),this._setDefaultThrottle(t),bc(this,t),Y_([["start","startValue"],["end","endValue"]],function(t,n){"value"===this._rangePropMode[n]&&(e[t[0]]=null)},this),this.textStyleModel=this.getModel("textStyle"),this._resetTarget(),this._giveAxisProxies()},_giveAxisProxies:function(){var t=this._axisProxies;this.eachTargetAxis(function(e,n,i,r){var a=this.dependentModels[e.axis][n],o=a.__dzAxisProxy||(a.__dzAxisProxy=new X_(e.name,n,this,r));t[e.name+"_"+n]=o},this)},_resetTarget:function(){var t=this.option,e=this._judgeAutoMode();q_(function(e){var n=e.axisIndex;t[n]=Mn(t[n])},this),"axisIndex"===e?this._autoSetAxisIndex():"orient"===e&&this._autoSetOrient()},_judgeAutoMode:function(){var t=this.option,e=!1;q_(function(n){null!=t[n.axisIndex]&&(e=!0)},this);var n=t.orient;return null==n&&e?"orient":e?void 0:(null==n&&(t.orient="horizontal"),"axisIndex")},_autoSetAxisIndex:function(){var t=!0,e=this.get("orient",!0),n=this.option,i=this.dependentModels;if(t){var r="vertical"===e?"y":"x";i[r+"Axis"].length?(n[r+"AxisIndex"]=[0],t=!1):Y_(i.singleAxis,function(i){t&&i.get("orient",!0)===e&&(n.singleAxisIndex=[i.componentIndex],t=!1)})}t&&q_(function(e){if(t){var i=[],r=this.dependentModels[e.axis];if(r.length&&!i.length)for(var a=0,o=r.length;o>a;a++)"category"===r[a].get("type")&&i.push(a);n[e.axisIndex]=i,i.length&&(t=!1)}},this),t&&this.ecModel.eachSeries(function(t){this._isSeriesHasAllAxesTypeOf(t,"value")&&q_(function(e){var i=n[e.axisIndex],r=t.get(e.axisIndex),a=t.get(e.axisId);h(i,r=t.ecModel.queryComponents({mainType:e.axis,index:r,id:a})[0].componentIndex)<0&&i.push(r)})},this)},_autoSetOrient:function(){var t;this.eachTargetAxis(function(e){!t&&(t=e.name)},this),this.option.orient="y"===t?"vertical":"horizontal"},_isSeriesHasAllAxesTypeOf:function(t,e){var n=!0;return q_(function(i){var r=t.get(i.axisIndex),a=this.dependentModels[i.axis][r];a&&a.get("type")===e||(n=!1)},this),n},_setDefaultThrottle:function(t){if(t.hasOwnProperty("throttle")&&(this._autoThrottle=!1),this._autoThrottle){var e=this.ecModel.option;this.option.throttle=e.animation&&e.animationDurationUpdate>0?100:20}},getFirstTargetAxisModel:function(){var t;return q_(function(e){if(null==t){var n=this.get(e.axisIndex);n.length&&(t=this.dependentModels[e.axis][n[0]])}},this),t},eachTargetAxis:function(t,e){var n=this.ecModel;q_(function(i){Y_(this.get(i.axisIndex),function(r){t.call(e,i,r,this,n)},this)},this)},getAxisProxy:function(t,e){return this._axisProxies[t+"_"+e]},getAxisModel:function(t,e){var n=this.getAxisProxy(t,e);return n&&n.getAxisModel()},setRawRange:function(t,e){var n=this.option;Y_([["start","startValue"],["end","endValue"]],function(e){(null!=t[e[0]]||null!=t[e[1]])&&(n[e[0]]=t[e[0]],n[e[1]]=t[e[1]])},this),!e&&bc(this,t)},getPercentRange:function(){var t=this.findRepresentativeAxisProxy();return t?t.getDataPercentWindow():void 0},getValueRange:function(t,e){if(null!=t||null!=e)return this.getAxisProxy(t,e).getDataValueWindow();var n=this.findRepresentativeAxisProxy();return n?n.getDataValueWindow():void 0},findRepresentativeAxisProxy:function(t){if(t)return t.__dzAxisProxy;var e=this._axisProxies;for(var n in e)if(e.hasOwnProperty(n)&&e[n].hostedBy(this))return e[n];for(var n in e)if(e.hasOwnProperty(n)&&!e[n].hostedBy(this))return e[n]},getRangePropMode:function(){return this._rangePropMode.slice()}}),U_=jv.extend({type:"dataZoom",render:function(t,e,n){this.dataZoomModel=t,this.ecModel=e,this.api=n},getTargetCoordInfo:function(){function t(t,e,n,i){for(var r,a=0;a<n.length;a++)if(n[a].model===t){r=n[a];break}r||n.push(r={model:t,axisModels:[],coordIndex:i}),r.axisModels.push(e)}var e=this.dataZoomModel,n=this.ecModel,i={};return e.eachTargetAxis(function(e,r){var a=n.getComponent(e.axis,r);if(a){var o=a.getCoordSysModel();o&&t(o,a,i[o.mainType]||(i[o.mainType]=[]),o.componentIndex)}},this),i}}),$_=(j_.extend({type:"dataZoom.slider",layoutMode:"box",defaultOption:{show:!0,right:"ph",top:"ph",width:"ph",height:"ph",left:null,bottom:null,backgroundColor:"rgba(47,69,84,0)",dataBackground:{lineStyle:{color:"#2f4554",width:.5,opacity:.3},areaStyle:{color:"rgba(47,69,84,0.3)",opacity:.3}},borderColor:"#ddd",fillerColor:"rgba(167,183,204,0.4)",handleIcon:"M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",handleSize:"100%",handleStyle:{color:"#a7b7cc"},labelPrecision:null,labelFormatter:null,showDetail:!0,showDataShadow:"auto",realtime:!0,zoomLock:!1,textStyle:{color:"#333"}}}),function(t,e,n,i,r,a){e[0]=Sc(e[0],n),e[1]=Sc(e[1],n),t=t||0;var o=n[1]-n[0];null!=r&&(r=Sc(r,[0,o])),null!=a&&(a=Math.max(a,null!=r?r:0)),"all"===i&&(r=a=Math.abs(e[1]-e[0]),i=0);var s=Mc(e,i);e[i]+=t;var l=r||0,h=n.slice();s.sign<0?h[0]+=l:h[1]-=l,e[i]=Sc(e[i],h);u=Mc(e,i);null!=r&&(u.sign!==s.sign||u.span<r)&&(e[1-i]=e[i]+s.sign*r);var u=Mc(e,i);return null!=a&&u.span>a&&(e[1-i]=e[i]+u.sign*a),e}),K_=_g,Q_=Tr,J_=Dr,tw=m,ew=f,nw="horizontal",iw="vertical",rw=5,aw=["line","bar","candlestick","scatter"],ow=U_.extend({type:"dataZoom.slider",init:function(t,e){this._displayables={},this._orient,this._range,this._handleEnds,this._size,this._handleWidth,this._handleHeight,this._location,this._dragging,this._dataShadowInfo,this.api=e},render:function(t,e,n,i){return ow.superApply(this,"render",arguments),go(this,"_dispatchZoomAction",this.dataZoomModel.get("throttle"),"fixRate"),this._orient=t.get("orient"),!1===this.dataZoomModel.get("show")?void this.group.removeAll():(i&&"dataZoom"===i.type&&i.from===this.uid||this._buildView(),void this._updateView())},remove:function(){ow.superApply(this,"remove",arguments),vo(this,"_dispatchZoomAction")},dispose:function(){ow.superApply(this,"dispose",arguments),vo(this,"_dispatchZoomAction")},_buildView:function(){var t=this.group;t.removeAll(),this._resetLocation(),this._resetInterval();var e=this._displayables.barGroup=new rf;this._renderBackground(),this._renderHandle(),this._renderDataShadow(),t.add(e),this._positionGroup()},_resetLocation:function(){var t=this.dataZoomModel,e=this.api,n=this._findCoordRect(),i={width:e.getWidth(),height:e.getHeight()},r=this._orient===nw?{right:i.width-n.x-n.width,top:i.height-30-7,width:n.width,height:30}:{right:7,top:n.y,width:30,height:n.height},a=$r(t.option);f(["right","top","width","height"],function(t){"ph"===a[t]&&(a[t]=r[t])});var o=jr(a,i,t.padding);this._location={x:o.x,y:o.y},this._size=[o.width,o.height],this._orient===iw&&this._size.reverse()},_positionGroup:function(){var t=this.group,e=this._location,n=this._orient,i=this.dataZoomModel.getFirstTargetAxisModel(),r=i&&i.get("inverse"),a=this._displayables.barGroup,o=(this._dataShadowInfo||{}).otherAxisInverse;a.attr(n!==nw||r?n===nw&&r?{scale:o?[-1,1]:[-1,-1]}:n!==iw||r?{scale:o?[-1,-1]:[-1,1],rotation:Math.PI/2}:{scale:o?[1,-1]:[1,1],rotation:Math.PI/2}:{scale:o?[1,1]:[1,-1]});var s=t.getBoundingRect([a]);t.attr("position",[e.x-s.x,e.y-s.y])},_getViewExtent:function(){return[0,this._size[0]]},_renderBackground:function(){var t=this.dataZoomModel,e=this._size,n=this._displayables.barGroup;n.add(new K_({silent:!0,shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:t.get("backgroundColor")},z2:-40})),n.add(new K_({shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:"transparent"},z2:0,onclick:m(this._onClickPanelClick,this)}))},_renderDataShadow:function(){var t=this._dataShadowInfo=this._prepareDataShadowInfo();if(t){var e=this._size,n=t.series,i=n.getRawData(),r=n.getShadowDim?n.getShadowDim():t.otherDim;if(null!=r){var a=i.getDataExtent(r),o=.3*(a[1]-a[0]);a=[a[0]-o,a[1]+o];var l,h=[0,e[1]],u=[0,e[0]],c=[[e[0],0],[0,0]],d=[],f=u[1]/(i.count()-1),p=0,g=Math.round(i.count()/e[0]);i.each([r],function(t,e){if(g>0&&e%g)p+=f;else{var n=null==t||isNaN(t)||""===t,i=n?0:Q_(t,a,h,!0);n&&!l&&e?(c.push([c[c.length-1][0],0]),d.push([d[d.length-1][0],0])):!n&&l&&(c.push([p,0]),d.push([p,0])),c.push([p,i]),d.push([p,i]),p+=f,l=n}});var v=this.dataZoomModel;this._displayables.barGroup.add(new yg({shape:{points:c},style:s({fill:v.get("dataBackgroundColor")},v.getModel("dataBackground.areaStyle").getAreaStyle()),silent:!0,z2:-20})),this._displayables.barGroup.add(new xg({shape:{points:d},style:v.getModel("dataBackground.lineStyle").getLineStyle(),silent:!0,z2:-19}))}}},_prepareDataShadowInfo:function(){var t=this.dataZoomModel,e=t.get("showDataShadow");if(!1!==e){var n,i=this.ecModel;return t.eachTargetAxis(function(r,a){f(t.getAxisProxy(r.name,a).getTargetSeriesModels(),function(t){if(!(n||!0!==e&&h(aw,t.get("type"))<0)){var o,s=i.getComponent(r.axis,a).axis,l=Ic(r.name),u=t.coordinateSystem;null!=l&&u.getOtherAxis&&(o=u.getOtherAxis(s).inverse),l=t.getData().mapDimension(l),n={thisAxis:s,series:t,thisDim:r.name,otherDim:l,otherAxisInverse:o}}},this)},this),n}},_renderHandle:function(){var t=this._displayables,e=t.handles=[],n=t.handleLabels=[],i=this._displayables.barGroup,r=this._size,a=this.dataZoomModel;i.add(t.filler=new K_({draggable:!0,cursor:Tc(this._orient),drift:tw(this._onDragMove,this,"all"),onmousemove:function(t){wd(t.event)},ondragstart:tw(this._showDataInfo,this,!0),ondragend:tw(this._onDragEnd,this),onmouseover:tw(this._showDataInfo,this,!0),onmouseout:tw(this._showDataInfo,this,!1),style:{fill:a.get("fillerColor"),textPosition:"inside"}})),i.add(new K_(Vi({silent:!0,shape:{x:0,y:0,width:r[0],height:r[1]},style:{stroke:a.get("dataBackgroundColor")||a.get("borderColor"),lineWidth:1,fill:"rgba(0,0,0,0)"}}))),ew([0,1],function(t){var r=_r(a.get("handleIcon"),{cursor:Tc(this._orient),draggable:!0,drift:tw(this._onDragMove,this,t),onmousemove:function(t){wd(t.event)},ondragend:tw(this._onDragEnd,this),onmouseover:tw(this._showDataInfo,this,!0),onmouseout:tw(this._showDataInfo,this,!1)},{x:-1,y:0,width:2,height:2}),o=r.getBoundingRect();this._handleHeight=Cr(a.get("handleSize"),this._size[1]),this._handleWidth=o.width/o.height*this._handleHeight,r.setStyle(a.getModel("handleStyle").getItemStyle());var s=a.get("handleColor");null!=s&&(r.style.fill=s),i.add(e[t]=r);var l=a.textStyleModel;this.group.add(n[t]=new ug({silent:!0,invisible:!0,style:{x:0,y:0,text:"",textVerticalAlign:"middle",textAlign:"center",textFill:l.getTextColor(),textFont:l.getFont()},z2:10}))},this)},_resetInterval:function(){var t=this._range=this.dataZoomModel.getPercentRange(),e=this._getViewExtent();this._handleEnds=[Q_(t[0],[0,100],e,!0),Q_(t[1],[0,100],e,!0)]},_updateInterval:function(t,e){var n=this.dataZoomModel,i=this._handleEnds,r=this._getViewExtent(),a=n.findRepresentativeAxisProxy().getMinMaxSpan(),o=[0,100];$_(e,i,r,n.get("zoomLock")?"all":t,null!=a.minSpan?Q_(a.minSpan,o,r,!0):null,null!=a.maxSpan?Q_(a.maxSpan,o,r,!0):null);var s=this._range,l=this._range=J_([Q_(i[0],r,o,!0),Q_(i[1],r,o,!0)]);return!s||s[0]!==l[0]||s[1]!==l[1]},_updateView:function(t){var e=this._displayables,n=this._handleEnds,i=J_(n.slice()),r=this._size;ew([0,1],function(t){var i=e.handles[t],a=this._handleHeight;i.attr({scale:[a/2,a/2],position:[n[t],r[1]/2-a/2]})},this),e.filler.setShape({x:i[0],y:0,width:i[1]-i[0],height:r[1]}),this._updateDataInfo(t)},_updateDataInfo:function(t){function e(t){var e=vr(i.handles[t].parent,this.group),n=yr(0===t?"right":"left",e),s=this._handleWidth/2+rw,l=mr([c[t]+(0===t?-s:s),this._size[1]/2],e);r[t].setStyle({x:l[0],y:l[1],textVerticalAlign:a===nw?"middle":n,textAlign:a===nw?n:"center",text:o[t]})}var n=this.dataZoomModel,i=this._displayables,r=i.handleLabels,a=this._orient,o=["",""];if(n.get("showDetail")){var s=n.findRepresentativeAxisProxy();if(s){var l=s.getAxisModel().axis,h=this._range,u=t?s.calculateDataWindow({start:h[0],end:h[1]}).valueWindow:s.getDataValueWindow();o=[this._formatLabel(u[0],l),this._formatLabel(u[1],l)]}}var c=J_(this._handleEnds.slice());e.call(this,0),e.call(this,1)},_formatLabel:function(t,e){var n=this.dataZoomModel,i=n.get("labelFormatter"),r=n.get("labelPrecision");(null==r||"auto"===r)&&(r=e.getPixelPrecision());var a=null==t||isNaN(t)?"":"category"===e.type||"time"===e.type?e.scale.getLabel(Math.round(t)):t.toFixed(Math.min(r,20));return _(i)?i(t,a):w(i)?i.replace("{value}",a):a},_showDataInfo:function(t){t=this._dragging||t;var e=this._displayables.handleLabels;e[0].attr("invisible",!t),e[1].attr("invisible",!t)},_onDragMove:function(t,e,n){this._dragging=!0;var i=mr([e,n],this._displayables.barGroup.getLocalTransform(),!0),r=this._updateInterval(t,i[0]),a=this.dataZoomModel.get("realtime");this._updateView(!a),r&&a&&this._dispatchZoomAction()},_onDragEnd:function(){this._dragging=!1,this._showDataInfo(!1),!this.dataZoomModel.get("realtime")&&this._dispatchZoomAction()},_onClickPanelClick:function(t){var e=this._size,n=this._displayables.barGroup.transformCoordToLocal(t.offsetX,t.offsetY);if(!(n[0]<0||n[0]>e[0]||n[1]<0||n[1]>e[1])){var i=this._handleEnds,r=(i[0]+i[1])/2,a=this._updateInterval("all",n[0]-r);this._updateView(),a&&this._dispatchZoomAction()}},_dispatchZoomAction:function(){var t=this._range;this.api.dispatchAction({type:"dataZoom",from:this.uid,dataZoomId:this.dataZoomModel.id,start:t[0],end:t[1]})},_findCoordRect:function(){var t;if(ew(this.getTargetCoordInfo(),function(e){if(!t&&e.length){var n=e[0].model.coordinateSystem;t=n.getRect&&n.getRect()}}),!t){var e=this.api.getWidth(),n=this.api.getHeight();t={x:.2*e,y:.2*n,width:.6*e,height:.6*n}}return t}});j_.extend({type:"dataZoom.inside",defaultOption:{disabled:!1,zoomLock:!1,zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!1,preventDefaultMouseMove:!0}});var sw="\0_ec_interaction_mutex";vs({type:"takeGlobalCursor",event:"globalCursorTaken",update:"update"},function(){}),c(Dc,yd);var lw="\0_ec_dataZoom_roams",hw=m,uw=U_.extend({type:"dataZoom.inside",init:function(){this._range},render:function(t,e,n){uw.superApply(this,"render",arguments),this._range=t.getPercentRange(),f(this.getTargetCoordInfo(),function(e,i){var r=p(e,function(t){return Vc(t.model)});f(e,function(e){var a=e.model,o={};f(["pan","zoom","scrollMove"],function(t){o[t]=hw(cw[t],this,e,i)},this),Nc(n,{coordId:Vc(a),allCoordIds:r,containsPoint:function(t,e,n){return a.coordinateSystem.containPoint([e,n])},dataZoomId:t.id,dataZoomModel:t,getRange:o})},this)},this)},dispose:function(){Fc(this.api,this.dataZoomModel.id),uw.superApply(this,"dispose",arguments),this._range=null}}),cw={zoom:function(t,e,n,i){var r=this._range,a=r.slice(),o=t.axisModels[0];if(o){var s=dw[e](null,[i.originX,i.originY],o,n,t),l=(s.signal>0?s.pixelStart+s.pixelLength-s.pixel:s.pixel-s.pixelStart)/s.pixelLength*(a[1]-a[0])+a[0],h=Math.max(1/i.scale,0);a[0]=(a[0]-l)*h+l,a[1]=(a[1]-l)*h+l;var u=this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();return $_(0,a,[0,100],0,u.minSpan,u.maxSpan),this._range=a,r[0]!==a[0]||r[1]!==a[1]?a:void 0}},pan:Yc(function(t,e,n,i,r,a){var o=dw[i]([a.oldX,a.oldY],[a.newX,a.newY],e,r,n);return o.signal*(t[1]-t[0])*o.pixel/o.pixelLength}),scrollMove:Yc(function(t,e,n,i,r,a){return dw[i]([0,0],[a.scrollDelta,a.scrollDelta],e,r,n).signal*(t[1]-t[0])*a.scrollDelta})},dw={grid:function(t,e,n,i,r){var a=n.axis,o={},s=r.model.coordinateSystem.getRect();return t=t||[0,0],"x"===a.dim?(o.pixel=e[0]-t[0],o.pixelLength=s.width,o.pixelStart=s.x,o.signal=a.inverse?1:-1):(o.pixel=e[1]-t[1],o.pixelLength=s.height,o.pixelStart=s.y,o.signal=a.inverse?-1:1),o},polar:function(t,e,n,i,r){var a=n.axis,o={},s=r.model.coordinateSystem,l=s.getRadiusAxis().getExtent(),h=s.getAngleAxis().getExtent();return t=t?s.pointToCoord(t):[0,0],e=s.pointToCoord(e),"radiusAxis"===n.mainType?(o.pixel=e[0]-t[0],o.pixelLength=l[1]-l[0],o.pixelStart=l[0],o.signal=a.inverse?1:-1):(o.pixel=e[1]-t[1],o.pixelLength=h[1]-h[0],o.pixelStart=h[0],o.signal=a.inverse?-1:1),o},singleAxis:function(t,e,n,i,r){var a=n.axis,o=r.model.coordinateSystem.getRect(),s={};return t=t||[0,0],"horizontal"===a.orient?(s.pixel=e[0]-t[0],s.pixelLength=o.width,s.pixelStart=o.x,s.signal=a.inverse?1:-1):(s.pixel=e[1]-t[1],s.pixelLength=o.height,s.pixelStart=o.y,s.signal=a.inverse?-1:1),s}};gs({getTargetSeries:function(t){var e=R();return t.eachComponent("dataZoom",function(t){t.eachTargetAxis(function(t,n,i){f(i.getAxisProxy(t.name,n).getTargetSeriesModels(),function(t){e.set(t.uid,t)})})}),e},modifyOutputEnd:!0,overallReset:function(t,e){t.eachComponent("dataZoom",function(t){t.eachTargetAxis(function(t,n,i){i.getAxisProxy(t.name,n).reset(i,e)}),t.eachTargetAxis(function(t,n,i){i.getAxisProxy(t.name,n).filterData(i,e)})}),t.eachComponent("dataZoom",function(t){var e=t.findRepresentativeAxisProxy(),n=e.getDataPercentWindow(),i=e.getDataValueWindow();t.setRawRange({start:n[0],end:n[1],startValue:i[0],endValue:i[1]},!0)})}}),vs("dataZoom",function(t,e){var n=vc(m(e.eachComponent,e,"dataZoom"),H_,function(t,e){return t.get(e.axisIndex)}),i=[];e.eachComponent({mainType:"dataZoom",query:t},function(t){i.push.apply(i,n(t).nodes)}),f(i,function(e){e.setRawRange({start:t.start,end:t.end,startValue:t.startValue,endValue:t.endValue})})}),e.version="4.2.0",e.dependencies=Em,e.PRIORITY=Vm,e.init=function(t,e,n){var i=ds(t);if(i)return i;var r=new Zo(t,e,n);return r.id="ec_"+iy++,ey[r.id]=r,Bn(t,ay,r.id),us(r),r},e.connect=function(t){if(x(t)){var e=t;t=null,Lm(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+ry++,Lm(e,function(e){e.group=t})}return ny[t]=!0,t},e.disConnect=cs,e.disconnect=oy,e.dispose=function(t){"string"==typeof t?t=ey[t]:t instanceof Zo||(t=ds(t)),t instanceof Zo&&!t.isDisposed()&&t.dispose()},e.getInstanceByDom=ds,e.getInstanceById=function(t){return ey[t]},e.registerTheme=fs,e.registerPreprocessor=ps,e.registerProcessor=gs,e.registerPostUpdate=function(t){Km.push(t)},e.registerAction=vs,e.registerCoordinateSystem=function(t,e){ba.register(t,e)},e.getCoordinateSystemDimensions=function(t){var e=ba.get(t);return e?e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice():void 0},e.registerLayout=ms,e.registerVisual=ys,e.registerLoading=_s,e.extendComponentModel=ws,e.extendComponentView=bs,e.extendSeriesModel=Ms,e.extendChartView=Ss,e.setCanvasCreator=function(t){n("createCanvas",t)},e.registerMap=function(t,e,n){Dm.registerMap(t,e,n)},e.getMap=function(t){var e=Dm.retrieveMap(t);return e&&e[0]&&{geoJson:e[0].geoJSON,specialAreas:e[0].specialAreas}},e.dataTool=sy,e.zrender=qf,e.number=Yg,e.format=tv,e.throttle=po,e.helper=nx,e.matrix=Td,e.vector=vd,e.color=Xd,e.parseGeoJSON=rx,e.parseGeoJson=lx,e.util=hx,e.graphic=ux,e.List=my,e.Model=wr,e.Axis=sx,e.env=$c}); 
 			}); 
		define("pages/company/businessCard/common/ec-canvas/wx-canvas.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),n=function(){function n(t,i){e(this,n),this.ctx=t,this.canvasId=i,this.chart=null,this._initStyle(t),this._initEvent()}return t(n,[{key:"getContext",value:function(e){if("2d"===e)return this.ctx}},{key:"setChart",value:function(e){this.chart=e}},{key:"attachEvent",value:function(){}},{key:"detachEvent",value:function(){}},{key:"_initCanvas",value:function(e,t){e.util.getContext=function(){return t},e.util.$override("measureText",function(e,n){return t.font=n||"12px sans-serif",t.measureText(e)})}},{key:"_initStyle",value:function(e){var t=arguments;["fillStyle","strokeStyle","globalAlpha","textAlign","textBaseAlign","shadow","lineWidth","lineCap","lineJoin","lineDash","miterLimit","fontSize"].forEach(function(t){Object.defineProperty(e,t,{set:function(n){("fillStyle"!==t&&"strokeStyle"!==t||"none"!==n&&null!==n)&&e["set"+t.charAt(0).toUpperCase()+t.slice(1)](n)}})}),e.createRadialGradient=function(){return e.createCircularGradient(t)}}},{key:"_initEvent",value:function(){var e=this;this.event={},[{wxName:"touchStart",ecName:"mousedown"},{wxName:"touchMove",ecName:"mousemove"},{wxName:"touchEnd",ecName:"mouseup"},{wxName:"touchEnd",ecName:"click"}].forEach(function(t){e.event[t.wxName]=function(n){var i=n.touches[0];e.chart._zr.handler.dispatch(t.ecName,{zrX:"tap"===t.wxName?i.clientX:i.x,zrY:"tap"===t.wxName?i.clientY:i.y})}})}}]),n}();exports.default=n; 
 			}); 
		define("pages/company/businessCard/developing.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{baseUrl:a.globalData.siteBaseUrl},onLoad:function(a){},onShow:function(){},onUnload:function(){}}); 
 			}); 
		define("tabbarlist.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a={"pages/company/index":!0,"pages/company/productlist_tabbar":!0,"pages/company/newslist_tabbar":!0,"pages/company/about_tabbar":!0};try{module.exports=a}catch(a){} 
 			}); 
		define("urlconfig.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a={README:{intro:"README 为此文件的格式说明，不会显示在小程序的链接组件中",url:"页面地址，如 /pages/index",name:"页面名称，如首页",isnav:"值为 true 或 false,当为 false 时，不会显示在小程序的链接组件中，为什么需要这样？因为产品详情页等，不应该出现在链接组件中，但系统又需要有相应的配置才能正常工作"},HomeIndex:{url:"/pages/company/index",name:"首页"},AboutUs:{url:"/pages/company/about",name:"关于我们"},CaseList:{url:"/pages/company/caselist",name:"案例列表"},CaseDetail:{url:"/pages/company/casedetail?id=$id",name:"案例详情",isnav:!1},ProductList:{url:"/pages/company/productlist?classid=$id",name:"产品列表"},ProductDetail:{url:"/pages/company/productdetail?id=$id",name:"产品详情",isnav:!1},NewsList:{url:"/pages/company/newslist?classid=$id",name:"文章列表"},NewsDetail:{url:"/pages/company/newsdetail?id=$id",name:"文章详情",isnav:!1},OneKeyPhoneCall:{url:"/pages/OneKeyPhoneCall",name:"一键拨号"},OneKeyNav:{url:"/pages/OneKeyNav",name:"一键导航"},CustomPage:{url:"/pages/company/custompage?id=$id",name:"自定义页",isnav:!1},CardDetails:{url:"/pages/company/businessCard/workbench?BusinessCardID=$businessCardID",name:"名片详情",isnav:!1},NormalCardDetails:{url:"/pages/company/businessCard/cardDetails?BusinessCardID=$businessCardID",name:"名片详情",isnav:!1},EditCard:{url:"/pages/company/businessCard/editCard",name:"名片编辑",isnav:!1},CardCase:{url:"/pages/company/businessCard/cardcase",name:"名片夹",isnav:!1},accessRecord:{url:"/pages/company/businessCard/accessRecord",name:"浏览记录",isnav:!1},shareCard:{url:"/pages/company/businessCard/shareCard",name:"分享海报",isnav:!1},upload:{url:"/pages/company/businessCard/upload",name:"图片裁剪",isnav:!1}};try{module.exports=a}catch(a){} 
 			}); 
		define("utils/amap-wx.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){this.key=t.key,this.requestConfig={key:t.key,s:"rsx",platform:"WXJS",appname:t.key,sdkversion:"1.2.0",logversion:"2.0"}}t.prototype.getWxLocation=function(t,e){wx.getLocation({type:"gcj02",success:function(t){var o=t.longitude+","+t.latitude;wx.setStorage({key:"userLocation",data:o}),e(o)},fail:function(o){wx.getStorage({key:"userLocation",success:function(t){t.data&&e(t.data)}}),t.fail({errCode:"0",errMsg:o.errMsg||""})}})},t.prototype.getRegeo=function(t){function e(e){var a=o.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:o.key,location:e,extensions:"all",s:a.s,platform:a.platform,appname:o.key,sdkversion:a.sdkversion,logversion:a.logversion},method:"GET",header:{"content-type":"application/json"},success:function(o){var a,s,i,r,n,p,c,d;o.data.status&&"1"==o.data.status?(a=o.data.regeocode,s=a.addressComponent,i=[],r=a.roads[0].name+"附近",n=e.split(",")[0],p=e.split(",")[1],a.pois&&a.pois[0]&&(r=a.pois[0].name+"附近",(c=a.pois[0].location)&&(n=parseFloat(c.split(",")[0]),p=parseFloat(c.split(",")[1]))),s.provice&&i.push(s.provice),s.city&&i.push(s.city),s.district&&i.push(s.district),s.streetNumber&&s.streetNumber.street&&s.streetNumber.number?(i.push(s.streetNumber.street),i.push(s.streetNumber.number)):i.push(a.roads[0].name),i=i.join(""),d=[{iconPath:t.iconPath,width:t.iconWidth,height:t.iconHeight,name:i,desc:r,longitude:n,latitude:p,id:0,regeocodeData:a}],t.success(d)):t.fail({errCode:o.data.infocode,errMsg:o.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var o=this;t.location?e(t.location):o.getWxLocation(t,function(t){e(t)})},t.prototype.getWeather=function(t){function e(e){var o="base";t.type&&"forecast"==t.type&&(o="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:a.key,city:e,extensions:o,s:s.s,platform:s.platform,appname:a.key,sdkversion:s.sdkversion,logversion:s.logversion},method:"GET",header:{"content-type":"application/json"},success:function(e){var o,a;e.data.status&&"1"==e.data.status?e.data.lives?(o=e.data.lives)&&o.length>0&&(o=o[0],a=function(t){return{city:{text:"城市",data:t.city},weather:{text:"天气",data:t.weather},temperature:{text:"温度",data:t.temperature},winddirection:{text:"风向",data:t.winddirection+"风"},windpower:{text:"风力",data:t.windpower+"级"},humidity:{text:"湿度",data:t.humidity+"%"}}}(o),a.liveData=o,t.success(a)):e.data.forecasts&&e.data.forecasts[0]&&t.success({forecast:e.data.forecasts[0]}):t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}function o(o){wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:a.key,location:o,extensions:"all",s:s.s,platform:s.platform,appname:a.key,sdkversion:s.sdkversion,logversion:s.logversion},method:"GET",header:{"content-type":"application/json"},success:function(o){var a,s;o.data.status&&"1"==o.data.status?((s=o.data.regeocode).addressComponent?a=s.addressComponent.adcode:s.aois&&s.aois.length>0&&(a=s.aois[0].adcode),e(a)):t.fail({errCode:o.data.infocode,errMsg:o.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var a=this,s=a.requestConfig;t.city?e(t.city):a.getWxLocation(t,function(t){o(t)})},t.prototype.getPoiAround=function(t){function e(e){var s={key:o.key,location:e,s:a.s,platform:a.platform,appname:o.key,sdkversion:a.sdkversion,logversion:a.logversion};t.querytypes&&(s.types=t.querytypes),t.querykeywords&&(s.keywords=t.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:s,method:"GET",header:{"content-type":"application/json"},success:function(e){var o,a,s,i;if(e.data.status&&"1"==e.data.status){if((e=e.data)&&e.pois){for(o=[],a=0;a<e.pois.length;a++)s=0==a?t.iconPathSelected:t.iconPath,o.push({latitude:parseFloat(e.pois[a].location.split(",")[1]),longitude:parseFloat(e.pois[a].location.split(",")[0]),iconPath:s,width:22,height:32,id:a,name:e.pois[a].name,address:e.pois[a].address});i={markers:o,poisData:e.pois},t.success(i)}}else t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var o=this,a=o.requestConfig;t.location?e(t.location):o.getWxLocation(t,function(t){e(t)})},t.prototype.getStaticmap=function(t){function e(e){s.push("location="+e),t.zoom&&s.push("zoom="+t.zoom),t.size&&s.push("size="+t.size),t.scale&&s.push("scale="+t.scale),t.markers&&s.push("markers="+t.markers),t.labels&&s.push("labels="+t.labels),t.paths&&s.push("paths="+t.paths),t.traffic&&s.push("traffic="+t.traffic);var o=i+s.join("&");t.success({url:o})}var o,a=this,s=[],i="https://restapi.amap.com/v3/staticmap?";s.push("key="+a.key),o=a.requestConfig,s.push("s="+o.s),s.push("platform="+o.platform),s.push("appname="+o.appname),s.push("sdkversion="+o.sdkversion),s.push("logversion="+o.logversion),t.location?e(t.location):a.getWxLocation(t,function(t){e(t)})},t.prototype.getInputtips=function(t){var e=this,o=e.requestConfig,a={key:e.key,s:o.s,platform:o.platform,appname:e.key,sdkversion:o.sdkversion,logversion:o.logversion};t.location&&(a.location=t.location),t.keywords&&(a.keywords=t.keywords),t.type&&(a.type=t.type),t.city&&(a.city=t.city),t.citylimit&&(a.citylimit=t.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.tips&&t.success({tips:e.data.tips})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},t.prototype.getDrivingRoute=function(t){var e=this,o=e.requestConfig,a={key:e.key,s:o.s,platform:o.platform,appname:e.key,sdkversion:o.sdkversion,logversion:o.logversion};t.origin&&(a.origin=t.origin),t.destination&&(a.destination=t.destination),t.strategy&&(a.strategy=t.strategy),t.waypoints&&(a.waypoints=t.waypoints),t.avoidpolygons&&(a.avoidpolygons=t.avoidpolygons),t.avoidroad&&(a.avoidroad=t.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths,taxi_cost:e.data.route.taxi_cost||""})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},t.prototype.getWalkingRoute=function(t){var e=this,o=e.requestConfig,a={key:e.key,s:o.s,platform:o.platform,appname:e.key,sdkversion:o.sdkversion,logversion:o.logversion};t.origin&&(a.origin=t.origin),t.destination&&(a.destination=t.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},t.prototype.getTransitRoute=function(t){var e=this,o=e.requestConfig,a={key:e.key,s:o.s,platform:o.platform,appname:e.key,sdkversion:o.sdkversion,logversion:o.logversion};t.origin&&(a.origin=t.origin),t.destination&&(a.destination=t.destination),t.strategy&&(a.strategy=t.strategy),t.city&&(a.city=t.city),t.cityd&&(a.cityd=t.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){if(e&&e.data&&e.data.route){var o=e.data.route;t.success({distance:o.distance||"",taxi_cost:o.taxi_cost||"",transits:o.transits})}},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},t.prototype.getRidingRoute=function(t){var e=this,o=e.requestConfig,a={key:e.key,s:o.s,platform:o.platform,appname:e.key,sdkversion:o.sdkversion,logversion:o.logversion};t.origin&&(a.origin=t.origin),t.destination&&(a.destination=t.destination),wx.request({url:"https://restapi.amap.com/v3/direction/riding",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},module.exports.AMapWX=t; 
 			}); 
		define("utils/imgutil.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={imageUtil:function(i){var e={},o=i.detail.width,t=i.detail.height,g=t/o;return console.log("originalWidth: "+o),console.log("originalHeight: "+t),wx.getSystemInfo({success:function(i){var l=i.windowWidth,n=i.windowHeight,h=n/l;console.log("windowWidth: "+l),console.log("windowHeight: "+n),g<h?(e.imageWidth=l,e.imageHeight=l*t/o):(e.imageHeight=n,e.imageWidth=n*o/t)}}),console.log("缩放后的宽: "+e.imageWidth),console.log("缩放后的高: "+e.imageHeight),e}}; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e={formatDate:function(e,t){var r={"M+":e.getMonth()+1,"d+":e.getDate(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),"f+":e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var g in r)new RegExp("("+g+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?r[g]:("00"+r[g]).substr((""+r[g]).length)));return t},trim:function(e){return e.replace(/(^\s*)|(\s*$)/g,"")}};module.exports=e; 
 			}); 
		define("wxParse/html2json.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){for(var t={},r=e.split(","),s=0;s<r.length;s++)t[r[s]]=!0;return t}function t(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<.*!doctype.*\>\n/,"").replace(/<.*!DOCTYPE.*\>\n/,"")}function r(e){var t=[];if(0==a.length||!o)return(d={}).node="text",d.text=e,s=[d];e=e.replace(/\[([^\[\]]+)\]/g,":$1:");for(var r=new RegExp("[:]"),s=e.split(r),i=0;i<s.length;i++){var l=s[i],d={};o[l]?(d.node="element",d.tag="emoji",d.text=o[l],d.baseSrc=n):(d.node="text",d.text=l),t.push(d)}return t}var s="https",a="",n="",o={},i=require("./wxDiscode.js"),l=require("./htmlparser.js"),d=(e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),e("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")),c=e("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),u=e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),e("wxxxcode-style,script,style,view,scroll-view,block");module.exports={html2json:function(e,a){e=t(e),e=i.strDiscode(e);var n=[],o={node:a,nodes:[],images:[],imageUrls:[]},p=0;return l(e,{start:function(e,t,r){var l={node:"element",tag:e};if(0===n.length?(l.index=p.toString(),p+=1):(void 0===(x=n[0]).nodes&&(x.nodes=[]),l.index=x.index+"."+x.nodes.length),d[e]?l.tagType="block":c[e]?l.tagType="inline":u[e]&&(l.tagType="closeSelf"),0!==t.length&&(l.attr=t.reduce(function(e,t){var r=t.name,s=t.value;return"class"==r&&(l.classStr=s),"style"==r&&(l.styleStr=s),s.match(/ /)&&(s=s.split(" ")),e[r]?Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]:e[r]=s,e},{})),"img"===l.tag){l.imgIndex=o.images.length;var m=l.attr.src;m&&""==m[0]&&m.splice(0,1),m=i.urlToHttpUrl(m,s),l.attr.src=m,l.from=a,o.images.push(l),o.imageUrls.push(m)}if("font"===l.tag){var h=["x-small","small","medium","large","x-large","xx-large","-webkit-xxx-large"],f={color:"color",face:"font-family",size:"font-size"};l.attr.style||(l.attr.style=[]),l.styleStr||(l.styleStr="");for(var g in f)if(l.attr[g]){var v="size"===g?h[l.attr[g]-1]:l.attr[g];l.attr.style.push(f[g]),l.attr.style.push(v),l.styleStr+=f[g]+": "+v+";"}}if("source"===l.tag&&(o.source=l.attr.src),r){var x=n[0]||o;void 0===x.nodes&&(x.nodes=[]),x.nodes.push(l)}else n.unshift(l)},end:function(e){var t=n.shift();if(t.tag!==e&&console.error("invalid state: mismatch end tag"),"video"===t.tag&&o.source&&(t.attr.src=o.source,delete result.source),0===n.length)o.nodes.push(t);else{var r=n[0];void 0===r.nodes&&(r.nodes=[]),r.nodes.push(t)}},chars:function(e){var t={node:"text",text:e,textArray:r(e)};if(0===n.length)o.nodes.push(t);else{var s=n[0];void 0===s.nodes&&(s.nodes=[]),t.index=s.index+"."+s.nodes.length,s.nodes.push(t)}},comment:function(e){}}),o},emojisInit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/wxParse/emojis/",r=arguments[2];a=e,n=t,o=r}}; 
 			}); 
		define("wxParse/htmlparser.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){for(var t={},r=e.split(","),s=0;s<r.length;s++)t[r[s]]=!0;return t}var t=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,r=/^<\/([-A-Za-z0-9_]+)[^>]*>/,s=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,a=e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),n=e("a,address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),i=e("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),o=e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),l=e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),c=e("wxxxcode-style,script,style,view,scroll-view,block");module.exports=function(e,d){function f(e,t){if(t)for(t=t.toLowerCase(),r=b.length-1;r>=0&&b[r]!=t;r--);else var r=0;if(r>=0){for(var s=b.length-1;s>=r;s--)d.end&&d.end(b[s]);b.length=r}}var p,u,h,b=[],m=e;for(b.last=function(){return this[this.length-1]};e;){if(u=!0,b.last()&&c[b.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+b.last()+"[^>]*>"),function(e,t){return t=t.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),d.chars&&d.chars(t),""}),f(0,b.last());else if(0==e.indexOf("\x3c!--")?(p=e.indexOf("--\x3e"))>=0&&(d.comment&&d.comment(e.substring(4,p)),e=e.substring(p+3),u=!1):0==e.indexOf("</")?(h=e.match(r))&&(e=e.substring(h[0].length),h[0].replace(r,f),u=!1):0==e.indexOf("<")&&(h=e.match(t))&&(e=e.substring(h[0].length),h[0].replace(t,function(e,t,r,c){if(t=t.toLowerCase(),n[t])for(;b.last()&&i[b.last()];)f(0,b.last());if(o[t]&&b.last()==t&&f(0,t),(c=a[t]||!!c)||b.push(t),d.start){var p=[];r.replace(s,function(e,t){var r=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:l[t]?t:"";p.push({name:t,value:r,escaped:r.replace(/(^|[^\\])"/g,'$1\\"')})}),d.start&&d.start(t,p,c)}}),u=!1),u){p=e.indexOf("<");for(var g="";0===p;)g+="<",p=(e=e.substring(1)).indexOf("<");g+=p<0?e:e.substring(0,p),e=p<0?"":e.substring(p),d.chars&&d.chars(g)}if(e==m)throw"Parse Error: "+e;m=e}f()}; 
 			}); 
		define("wxParse/showdown.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){var r={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Specify a prefix to generated header ids",type:"string"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,description:"Tries to smartly fix identation in es6 strings",type:"boolean"}};if(!1===e)return JSON.parse(JSON.stringify(r));var t={};for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n].defaultValue);return t}function r(e,r){var t=r?"Error in "+r+" extension->":"Error in unnamed extension",a={valid:!0,error:""};s.helper.isArray(e)||(e=[e]);for(var o=0;o<e.length;++o){var i=t+" sub-extension "+o+": ",l=e[o];if("object"!==(void 0===l?"undefined":n(l)))return a.valid=!1,a.error=i+"must be an object, but "+(void 0===l?"undefined":n(l))+" given",a;if(!s.helper.isString(l.type))return a.valid=!1,a.error=i+'property "type" must be a string, but '+n(l.type)+" given",a;var c=l.type=l.type.toLowerCase();if("language"===c&&(c=l.type="lang"),"html"===c&&(c=l.type="output"),"lang"!==c&&"output"!==c&&"listener"!==c)return a.valid=!1,a.error=i+"type "+c+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',a;if("listener"===c){if(s.helper.isUndefined(l.listeners))return a.valid=!1,a.error=i+'. Extensions of type "listener" must have a property called "listeners"',a}else if(s.helper.isUndefined(l.filter)&&s.helper.isUndefined(l.regex))return a.valid=!1,a.error=i+c+' extensions must define either a "regex" property or a "filter" method',a;if(l.listeners){if("object"!==n(l.listeners))return a.valid=!1,a.error=i+'"listeners" property must be an object but '+n(l.listeners)+" given",a;for(var u in l.listeners)if(l.listeners.hasOwnProperty(u)&&"function"!=typeof l.listeners[u])return a.valid=!1,a.error=i+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+u+" must be a function but "+n(l.listeners[u])+" given",a}if(l.filter){if("function"!=typeof l.filter)return a.valid=!1,a.error=i+'"filter" must be a function, but '+n(l.filter)+" given",a}else if(l.regex){if(s.helper.isString(l.regex)&&(l.regex=new RegExp(l.regex,"g")),!l.regex instanceof RegExp)return a.valid=!1,a.error=i+'"regex" property must either be a string or a RegExp object, but '+n(l.regex)+" given",a;if(s.helper.isUndefined(l.replace))return a.valid=!1,a.error=i+'"regex" extensions must implement a replace string or function',a}}return a}function t(e,r){return"~E"+r.charCodeAt(0)+"E"}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s={},a={},o={},i=e(!0),l={github:{omitExtraWLInCodeBlocks:!0,prefixHeaderId:"user-content-",simplifiedAutoLink:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0},vanilla:e(!0)};s.helper={},s.extensions={},s.setOption=function(e,r){return i[e]=r,this},s.getOption=function(e){return i[e]},s.getOptions=function(){return i},s.resetOptions=function(){i=e(!0)},s.setFlavor=function(e){if(l.hasOwnProperty(e)){var r=l[e];for(var t in r)r.hasOwnProperty(t)&&(i[t]=r[t])}},s.getDefaultOptions=function(r){return e(r)},s.subParser=function(e,r){if(s.helper.isString(e)){if(void 0===r){if(a.hasOwnProperty(e))return a[e];throw Error("SubParser named "+e+" not registered!")}a[e]=r}},s.extension=function(e,t){if(!s.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=s.helper.stdExtName(e),s.helper.isUndefined(t)){if(!o.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return o[e]}"function"==typeof t&&(t=t()),s.helper.isArray(t)||(t=[t]);var n=r(t,e);if(!n.valid)throw Error(n.error);o[e]=t},s.getAllExtensions=function(){return o},s.removeExtension=function(e){delete o[e]},s.resetExtensions=function(){o={}},s.validateExtension=function(e){var t=r(e,null);return!!t.valid||(console.warn(t.error),!1)},s.hasOwnProperty("helper")||(s.helper={}),s.helper.isString=function(e){return"string"==typeof e||e instanceof String},s.helper.isFunction=function(e){var r={};return e&&"[object Function]"===r.toString.call(e)},s.helper.forEach=function(e,r){if("function"==typeof e.forEach)e.forEach(r);else for(var t=0;t<e.length;t++)r(e[t],t,e)},s.helper.isArray=function(e){return e.constructor===Array},s.helper.isUndefined=function(e){return void 0===e},s.helper.stdExtName=function(e){return e.replace(/[_-]||\s/g,"").toLowerCase()},s.helper.escapeCharactersCallback=t,s.helper.escapeCharacters=function(e,r,n){var s="(["+r.replace(/([\[\]\\])/g,"\\$1")+"])";n&&(s="\\\\"+s);var a=new RegExp(s,"g");return e=e.replace(a,t)};var c=function(e,r,t,n){var s,a,o,i,l,c=n||"",u=c.indexOf("g")>-1,p=new RegExp(r+"|"+t,"g"+c.replace(/g/g,"")),h=new RegExp(r,c.replace(/g/g,"")),d=[];do{for(s=0;o=p.exec(e);)if(h.test(o[0]))s++||(i=(a=p.lastIndex)-o[0].length);else if(s&&!--s){l=o.index+o[0].length;var f={left:{start:i,end:a},match:{start:a,end:o.index},right:{start:o.index,end:l},wholeMatch:{start:i,end:l}};if(d.push(f),!u)return d}}while(s&&(p.lastIndex=a));return d};s.helper.matchRecursiveRegExp=function(e,r,t,n){for(var s=c(e,r,t,n),a=[],o=0;o<s.length;++o)a.push([e.slice(s[o].wholeMatch.start,s[o].wholeMatch.end),e.slice(s[o].match.start,s[o].match.end),e.slice(s[o].left.start,s[o].left.end),e.slice(s[o].right.start,s[o].right.end)]);return a},s.helper.replaceRecursiveRegExp=function(e,r,t,n,a){if(!s.helper.isFunction(r)){var o=r;r=function(){return o}}var i=c(e,t,n,a),l=e,u=i.length;if(u>0){var p=[];0!==i[0].wholeMatch.start&&p.push(e.slice(0,i[0].wholeMatch.start));for(var h=0;h<u;++h)p.push(r(e.slice(i[h].wholeMatch.start,i[h].wholeMatch.end),e.slice(i[h].match.start,i[h].match.end),e.slice(i[h].left.start,i[h].left.end),e.slice(i[h].right.start,i[h].right.end))),h<u-1&&p.push(e.slice(i[h].wholeMatch.end,i[h+1].wholeMatch.start));i[u-1].wholeMatch.end<e.length&&p.push(e.slice(i[u-1].wholeMatch.end)),l=p.join("")}return l},s.helper.isUndefined(console)&&(console={warn:function(e){alert(e)},log:function(e){alert(e)},error:function(e){throw e}}),s.Converter=function(e){function t(e,t){if(t=t||null,s.helper.isString(e)){if(e=s.helper.stdExtName(e),t=e,s.extensions[e])return console.warn("DEPRECATION WARNING: "+e+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void a(s.extensions[e],e);if(s.helper.isUndefined(o[e]))throw Error('Extension "'+e+'" could not be loaded. It was either not found or is not a valid extension.');e=o[e]}"function"==typeof e&&(e=e()),s.helper.isArray(e)||(e=[e]);var n=r(e,t);if(!n.valid)throw Error(n.error);for(var i=0;i<e.length;++i){switch(e[i].type){case"lang":h.push(e[i]);break;case"output":d.push(e[i])}if(e[i].hasOwnProperty(f))for(var l in e[i].listeners)e[i].listeners.hasOwnProperty(l)&&c(l,e[i].listeners[l])}}function a(e,t){"function"==typeof e&&(e=e(new s.Converter)),s.helper.isArray(e)||(e=[e]);var n=r(e,t);if(!n.valid)throw Error(n.error);for(var a=0;a<e.length;++a)switch(e[a].type){case"lang":h.push(e[a]);break;case"output":d.push(e[a]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function c(e,r){if(!s.helper.isString(e))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+(void 0===e?"undefined":n(e))+" given");if("function"!=typeof r)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+(void 0===r?"undefined":n(r))+" given");f.hasOwnProperty(e)||(f[e]=[]),f[e].push(r)}function u(e){var r=e.match(/^\s*/)[0].length,t=new RegExp("^\\s{0,"+r+"}","gm");return e.replace(t,"")}var p={},h=[],d=[],f={};!function(){e=e||{};for(var r in i)i.hasOwnProperty(r)&&(p[r]=i[r]);if("object"!==(void 0===e?"undefined":n(e)))throw Error("Converter expects the passed parameter to be an object, but "+(void 0===e?"undefined":n(e))+" was passed instead.");for(var a in e)e.hasOwnProperty(a)&&(p[a]=e[a]);p.extensions&&s.helper.forEach(p.extensions,t)}(),this._dispatch=function(e,r,t,n){if(f.hasOwnProperty(e))for(var s=0;s<f[e].length;++s){var a=f[e][s](e,r,this,t,n);a&&void 0!==a&&(r=a)}return r},this.listen=function(e,r){return c(e,r),this},this.makeHtml=function(e){if(!e)return e;var r={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:h,outputModifiers:d,converter:this,ghCodeBlocks:[]};return e=e.replace(/~/g,"~T"),e=e.replace(/\$/g,"~D"),e=e.replace(/\r\n/g,"\n"),e=e.replace(/\r/g,"\n"),p.smartIndentationFix&&(e=u(e)),e=e,e=s.subParser("detab")(e,p,r),e=s.subParser("stripBlankLines")(e,p,r),s.helper.forEach(h,function(t){e=s.subParser("runExtension")(t,e,p,r)}),e=s.subParser("hashPreCodeTags")(e,p,r),e=s.subParser("githubCodeBlocks")(e,p,r),e=s.subParser("hashHTMLBlocks")(e,p,r),e=s.subParser("hashHTMLSpans")(e,p,r),e=s.subParser("stripLinkDefinitions")(e,p,r),e=s.subParser("blockGamut")(e,p,r),e=s.subParser("unhashHTMLSpans")(e,p,r),e=s.subParser("unescapeSpecialChars")(e,p,r),e=e.replace(/~D/g,"$$"),e=e.replace(/~T/g,"~"),s.helper.forEach(d,function(t){e=s.subParser("runExtension")(t,e,p,r)}),e},this.setOption=function(e,r){p[e]=r},this.getOption=function(e){return p[e]},this.getOptions=function(){return p},this.addExtension=function(e,r){t(e,r=r||null)},this.useExtension=function(e){t(e)},this.setFlavor=function(e){if(l.hasOwnProperty(e)){var r=l[e];for(var t in r)r.hasOwnProperty(t)&&(p[t]=r[t])}},this.removeExtension=function(e){s.helper.isArray(e)||(e=[e]);for(var r=0;r<e.length;++r){for(var t=e[r],n=0;n<h.length;++n)h[n]===t&&h[n].splice(n,1);for(;0<d.length;++n)d[0]===t&&d[0].splice(n,1)}},this.getAllExtensions=function(){return{language:h,output:d}}},s.subParser("anchors",function(e,r,t){var n=function(e,r,n,a,o,i,l,c){s.helper.isUndefined(c)&&(c=""),e=r;var u=n,p=a.toLowerCase(),h=o,d=c;if(!h)if(p||(p=u.toLowerCase().replace(/ ?\n/g," ")),h="#"+p,s.helper.isUndefined(t.gUrls[p])){if(!(e.search(/\(\s*\)$/m)>-1))return e;h=""}else h=t.gUrls[p],s.helper.isUndefined(t.gTitles[p])||(d=t.gTitles[p]);var f='<a href="'+(h=s.helper.escapeCharacters(h,"*_",!1))+'"';return""!==d&&null!==d&&(d=d.replace(/"/g,"&quot;"),f+=' title="'+(d=s.helper.escapeCharacters(d,"*_",!1))+'"'),f+=">"+u+"</a>"};return e=(e=t.converter._dispatch("anchors.before",e,r,t)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g,n),e=e.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,n),e=e.replace(/(\[([^\[\]]+)])()()()()()/g,n),e=t.converter._dispatch("anchors.after",e,r,t)}),s.subParser("autoLinks",function(e,r,t){function n(e,r){var t=r;return/^www\./i.test(r)&&(r=r.replace(/^www\./i,"http://www.")),'<a href="'+r+'">'+t+"</a>"}function a(e,r){var t=s.subParser("unescapeSpecialChars")(r);return s.subParser("encodeEmailAddress")(t)}var o=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/gi,i=/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi,l=/(?:^|[ \n\t])([A-Za-z0-9!#$%&'*+-/=?^_`\{|}~\.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?:$|[ \n\t])/gi,c=/<(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;return e=(e=t.converter._dispatch("autoLinks.before",e,r,t)).replace(i,n),e=e.replace(c,a),r.simplifiedAutoLink&&(e=(e=e.replace(o,n)).replace(l,a)),e=t.converter._dispatch("autoLinks.after",e,r,t)}),s.subParser("blockGamut",function(e,r,t){e=t.converter._dispatch("blockGamut.before",e,r,t),e=s.subParser("blockQuotes")(e,r,t),e=s.subParser("headers")(e,r,t);var n=s.subParser("hashBlock")("<hr />",r,t);return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,n),e=e.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,n),e=e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,n),e=s.subParser("lists")(e,r,t),e=s.subParser("codeBlocks")(e,r,t),e=s.subParser("tables")(e,r,t),e=s.subParser("hashHTMLBlocks")(e,r,t),e=s.subParser("paragraphs")(e,r,t),e=t.converter._dispatch("blockGamut.after",e,r,t)}),s.subParser("blockQuotes",function(e,r,t){return e=t.converter._dispatch("blockQuotes.before",e,r,t),e=e.replace(/((^[ \t]{0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(e,n){var a=n;return a=a.replace(/^[ \t]*>[ \t]?/gm,"~0"),a=a.replace(/~0/g,""),a=a.replace(/^[ \t]+$/gm,""),a=s.subParser("githubCodeBlocks")(a,r,t),a=s.subParser("blockGamut")(a,r,t),a=a.replace(/(^|\n)/g,"$1  "),a=a.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,r){var t=r;return t=t.replace(/^  /gm,"~0"),t=t.replace(/~0/g,"")}),s.subParser("hashBlock")("<blockquote>\n"+a+"\n</blockquote>",r,t)}),e=t.converter._dispatch("blockQuotes.after",e,r,t)}),s.subParser("codeBlocks",function(e,r,t){e=t.converter._dispatch("codeBlocks.before",e,r,t);var n=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g;return e=(e+="~0").replace(n,function(e,n,a){var o=n,i=a,l="\n";return o=s.subParser("outdent")(o),o=s.subParser("encodeCode")(o),o=s.subParser("detab")(o),o=o.replace(/^\n+/g,""),o=o.replace(/\n+$/g,""),r.omitExtraWLInCodeBlocks&&(l=""),o="<pre><code>"+o+l+"</code></pre>",s.subParser("hashBlock")(o,r,t)+i}),e=e.replace(/~0/,""),e=t.converter._dispatch("codeBlocks.after",e,r,t)}),s.subParser("codeSpans",function(e,r,t){return void 0===(e=t.converter._dispatch("codeSpans.before",e,r,t))&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,r,t,n){var a=n;return a=a.replace(/^([ \t]*)/g,""),a=a.replace(/[ \t]*$/g,""),a=s.subParser("encodeCode")(a),r+"<code>"+a+"</code>"}),e=t.converter._dispatch("codeSpans.after",e,r,t)}),s.subParser("detab",function(e){return e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"~A~B"),e=e.replace(/~B(.+?)~A/g,function(e,r){for(var t=r,n=4-t.length%4,s=0;s<n;s++)t+=" ";return t}),e=e.replace(/~A/g,"    "),e=e.replace(/~B/g,"")}),s.subParser("encodeAmpsAndAngles",function(e){return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?\$!])/gi,"&lt;")}),s.subParser("encodeBackslashEscapes",function(e){return e=e.replace(/\\(\\)/g,s.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,s.helper.escapeCharactersCallback)}),s.subParser("encodeCode",function(e){return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=s.helper.escapeCharacters(e,"*_{}[]\\",!1)}),s.subParser("encodeEmailAddress",function(e){var r=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}];return e="mailto:"+e,e=e.replace(/./g,function(e){if("@"===e)e=r[Math.floor(2*Math.random())](e);else if(":"!==e){var t=Math.random();e=t>.9?r[2](e):t>.45?r[1](e):r[0](e)}return e}),e='<a href="'+e+'">'+e+"</a>",e=e.replace(/">.+:/g,'">')}),s.subParser("escapeSpecialCharsWithinTagAttributes",function(e){var r=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return e=e.replace(r,function(e){var r=e.replace(/(.)<\/?code>(?=.)/g,"$1`");return r=s.helper.escapeCharacters(r,"\\`*_",!1)})}),s.subParser("githubCodeBlocks",function(e,r,t){return r.ghCodeBlocks?(e=t.converter._dispatch("githubCodeBlocks.before",e,r,t),e+="~0",e=e.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(e,n,a){var o=r.omitExtraWLInCodeBlocks?"":"\n";return a=s.subParser("encodeCode")(a),a=s.subParser("detab")(a),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),a="<pre><code"+(n?' class="'+n+" language-"+n+'"':"")+">"+a+o+"</code></pre>",a=s.subParser("hashBlock")(a,r,t),"\n\n~G"+(t.ghCodeBlocks.push({text:e,codeblock:a})-1)+"G\n\n"}),e=e.replace(/~0/,""),t.converter._dispatch("githubCodeBlocks.after",e,r,t)):e}),s.subParser("hashBlock",function(e,r,t){return e=e.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n"}),s.subParser("hashElement",function(e,r,t){return function(e,r){var n=r;return n=n.replace(/\n\n/g,"\n"),n=n.replace(/^\n/,""),n=n.replace(/\n+$/g,""),n="\n\n~K"+(t.gHtmlBlocks.push(n)-1)+"K\n\n"}}),s.subParser("hashHTMLBlocks",function(e,r,t){for(var n=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],a=0;a<n.length;++a)e=s.helper.replaceRecursiveRegExp(e,function(e,r,n,s){var a=e;return-1!==n.search(/\bmarkdown\b/)&&(a=n+t.converter.makeHtml(r)+s),"\n\n~K"+(t.gHtmlBlocks.push(a)-1)+"K\n\n"},"^(?: |\\t){0,3}<"+n[a]+"\\b[^>]*>","</"+n[a]+">","gim");return e=e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,s.subParser("hashElement")(e,r,t)),e=e.replace(/(<!--[\s\S]*?-->)/g,s.subParser("hashElement")(e,r,t)),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,s.subParser("hashElement")(e,r,t))}),s.subParser("hashHTMLSpans",function(e,r,t){for(var n=s.helper.matchRecursiveRegExp(e,"<code\\b[^>]*>","</code>","gi"),a=0;a<n.length;++a)e=e.replace(n[a][0],"~L"+(t.gHtmlSpans.push(n[a][0])-1)+"L");return e}),s.subParser("unhashHTMLSpans",function(e,r,t){for(var n=0;n<t.gHtmlSpans.length;++n)e=e.replace("~L"+n+"L",t.gHtmlSpans[n]);return e}),s.subParser("hashPreCodeTags",function(e,r,t){return e=s.helper.replaceRecursiveRegExp(e,function(e,r,n,a){var o=n+s.subParser("encodeCode")(r)+a;return"\n\n~G"+(t.ghCodeBlocks.push({text:e,codeblock:o})-1)+"G\n\n"},"^(?: |\\t){0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^(?: |\\t){0,3}</code>\\s*</pre>","gim")}),s.subParser("headers",function(e,r,t){function n(e){var r,n=e.replace(/[^\w]/g,"").toLowerCase();return t.hashLinkCounts[n]?r=n+"-"+t.hashLinkCounts[n]++:(r=n,t.hashLinkCounts[n]=1),!0===a&&(a="section"),s.helper.isString(a)?a+r:r}e=t.converter._dispatch("headers.before",e,r,t);var a=r.prefixHeaderId,o=isNaN(parseInt(r.headerLevelStart))?1:parseInt(r.headerLevelStart),i=r.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,l=r.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;return e=e.replace(i,function(e,a){var i=s.subParser("spanGamut")(a,r,t),l=r.noHeaderId?"":' id="'+n(a)+'"',c=o,u="<h"+c+l+">"+i+"</h"+c+">";return s.subParser("hashBlock")(u,r,t)}),e=e.replace(l,function(e,a){var i=s.subParser("spanGamut")(a,r,t),l=r.noHeaderId?"":' id="'+n(a)+'"',c=o+1,u="<h"+c+l+">"+i+"</h"+c+">";return s.subParser("hashBlock")(u,r,t)}),e=e.replace(/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm,function(e,a,i){var l=s.subParser("spanGamut")(i,r,t),c=r.noHeaderId?"":' id="'+n(i)+'"',u=o-1+a.length,p="<h"+u+c+">"+l+"</h"+u+">";return s.subParser("hashBlock")(p,r,t)}),e=t.converter._dispatch("headers.after",e,r,t)}),s.subParser("images",function(e,r,t){function n(e,r,n,a,o,i,l,c){var u=t.gUrls,p=t.gTitles,h=t.gDimensions;if(n=n.toLowerCase(),c||(c=""),""===a||null===a){if(""!==n&&null!==n||(n=r.toLowerCase().replace(/ ?\n/g," ")),a="#"+n,s.helper.isUndefined(u[n]))return e;a=u[n],s.helper.isUndefined(p[n])||(c=p[n]),s.helper.isUndefined(h[n])||(o=h[n].width,i=h[n].height)}r=r.replace(/"/g,"&quot;"),r=s.helper.escapeCharacters(r,"*_",!1);var d='<img src="'+(a=s.helper.escapeCharacters(a,"*_",!1))+'" alt="'+r+'"';return c&&(c=c.replace(/"/g,"&quot;"),d+=' title="'+(c=s.helper.escapeCharacters(c,"*_",!1))+'"'),o&&i&&(d+=' width="'+(o="*"===o?"auto":o)+'"',d+=' height="'+(i="*"===i?"auto":i)+'"'),d+=" />"}var a=/!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g,o=/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g;return e=(e=t.converter._dispatch("images.before",e,r,t)).replace(o,n),e=e.replace(a,n),e=t.converter._dispatch("images.after",e,r,t)}),s.subParser("italicsAndBold",function(e,r,t){return e=t.converter._dispatch("italicsAndBold.before",e,r,t),e=r.literalMidWordUnderscores?(e=(e=(e=e.replace(/(^|\s|>|\b)__(?=\S)([\s\S]+?)__(?=\b|<|\s|$)/gm,"$1<strong>$2</strong>")).replace(/(^|\s|>|\b)_(?=\S)([\s\S]+?)_(?=\b|<|\s|$)/gm,"$1<em>$2</em>")).replace(/(\*\*)(?=\S)([^\r]*?\S[*]*)\1/g,"<strong>$2</strong>")).replace(/(\*)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"):(e=e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>")).replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"),e=t.converter._dispatch("italicsAndBold.after",e,r,t)}),s.subParser("lists",function(e,r,t){function n(e,n){t.gListLevel++,e=e.replace(/\n{2,}$/,"\n"),e+="~0";var a=/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,o=/\n[ \t]*\n(?!~0)/.test(e);return e=e.replace(a,function(e,n,a,i,l,c,u){u=u&&""!==u.trim();var p=s.subParser("outdent")(l,r,t),h="";return c&&r.tasklists&&(h=' class="task-list-item" style="list-style-type: none;"',p=p.replace(/^[ \t]*\[(x|X| )?]/m,function(){var e='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return u&&(e+=" checked"),e+=">"})),n||p.search(/\n{2,}/)>-1?(p=s.subParser("githubCodeBlocks")(p,r,t),p=s.subParser("blockGamut")(p,r,t)):(p=(p=s.subParser("lists")(p,r,t)).replace(/\n$/,""),p=o?s.subParser("paragraphs")(p,r,t):s.subParser("spanGamut")(p,r,t)),p="\n<li"+h+">"+p+"</li>\n"}),e=e.replace(/~0/g,""),t.gListLevel--,n&&(e=e.replace(/\s+$/,"")),e}function a(e,r,t){var s="ul"===r?/^ {0,2}\d+\.[ \t]/gm:/^ {0,2}[*+-][ \t]/gm,a=[],o="";if(-1!==e.search(s)){!function e(a){var i=a.search(s);-1!==i?(o+="\n\n<"+r+">"+n(a.slice(0,i),!!t)+"</"+r+">\n\n",s="ul"===(r="ul"===r?"ol":"ul")?/^ {0,2}\d+\.[ \t]/gm:/^ {0,2}[*+-][ \t]/gm,e(a.slice(i))):o+="\n\n<"+r+">"+n(a,!!t)+"</"+r+">\n\n"}(e);for(var i=0;i<a.length;++i);}else o="\n\n<"+r+">"+n(e,!!t)+"</"+r+">\n\n";return o}e=t.converter._dispatch("lists.before",e,r,t),e+="~0";var o=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return t.gListLevel?e=e.replace(o,function(e,r,t){return a(r,t.search(/[*+-]/g)>-1?"ul":"ol",!0)}):(o=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,e=e.replace(o,function(e,r,t,n){return a(t,n.search(/[*+-]/g)>-1?"ul":"ol")})),e=e.replace(/~0/,""),e=t.converter._dispatch("lists.after",e,r,t)}),s.subParser("outdent",function(e){return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,"")}),s.subParser("paragraphs",function(e,r,t){for(var n=(e=(e=(e=t.converter._dispatch("paragraphs.before",e,r,t)).replace(/^\n+/g,"")).replace(/\n+$/g,"")).split(/\n{2,}/g),a=[],o=n.length,i=0;i<o;i++){var l=n[i];l.search(/~(K|G)(\d+)\1/g)>=0?a.push(l):(l=(l=s.subParser("spanGamut")(l,r,t)).replace(/^([ \t]*)/g,"<p>"),l+="</p>",a.push(l))}for(o=a.length,i=0;i<o;i++){for(var c="",u=a[i],p=!1;u.search(/~(K|G)(\d+)\1/)>=0;){var h=RegExp.$1,d=RegExp.$2;c=(c="K"===h?t.gHtmlBlocks[d]:p?s.subParser("encodeCode")(t.ghCodeBlocks[d].text):t.ghCodeBlocks[d].codeblock).replace(/\$/g,"$$$$"),u=u.replace(/(\n\n)?~(K|G)\d+\2(\n\n)?/,c),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u)&&(p=!0)}a[i]=u}return e=a.join("\n\n"),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),t.converter._dispatch("paragraphs.after",e,r,t)}),s.subParser("runExtension",function(e,r,t,n){if(e.filter)r=e.filter(r,n.converter,t);else if(e.regex){var s=e.regex;!s instanceof RegExp&&(s=new RegExp(s,"g")),r=r.replace(s,e.replace)}return r}),s.subParser("spanGamut",function(e,r,t){return e=t.converter._dispatch("spanGamut.before",e,r,t),e=s.subParser("codeSpans")(e,r,t),e=s.subParser("escapeSpecialCharsWithinTagAttributes")(e,r,t),e=s.subParser("encodeBackslashEscapes")(e,r,t),e=s.subParser("images")(e,r,t),e=s.subParser("anchors")(e,r,t),e=s.subParser("autoLinks")(e,r,t),e=s.subParser("encodeAmpsAndAngles")(e,r,t),e=s.subParser("italicsAndBold")(e,r,t),e=s.subParser("strikethrough")(e,r,t),e=e.replace(/  +\n/g," <br />\n"),e=t.converter._dispatch("spanGamut.after",e,r,t)}),s.subParser("strikethrough",function(e,r,t){return r.strikethrough&&(e=(e=t.converter._dispatch("strikethrough.before",e,r,t)).replace(/(?:~T){2}([\s\S]+?)(?:~T){2}/g,"<del>$1</del>"),e=t.converter._dispatch("strikethrough.after",e,r,t)),e}),s.subParser("stripBlankLines",function(e){return e.replace(/^[ \t]+$/gm,"")}),s.subParser("stripLinkDefinitions",function(e,r,t){var n=/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=~0))/gm;return e+="~0",e=e.replace(n,function(e,n,a,o,i,l,c){return n=n.toLowerCase(),t.gUrls[n]=s.subParser("encodeAmpsAndAngles")(a),l?l+c:(c&&(t.gTitles[n]=c.replace(/"|'/g,"&quot;")),r.parseImgDimensions&&o&&i&&(t.gDimensions[n]={width:o,height:i}),"")}),e=e.replace(/~0/,"")}),s.subParser("tables",function(e,r,t){function n(e){return/^:[ \t]*--*$/.test(e)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(e)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(e)?' style="text-align:center;"':""}function a(e,n){var a="";return e=e.trim(),r.tableHeaderId&&(a=' id="'+e.replace(/ /g,"_").toLowerCase()+'"'),e=s.subParser("spanGamut")(e,r,t),"<th"+a+n+">"+e+"</th>\n"}function o(e,n){return"<td"+n+">"+s.subParser("spanGamut")(e,r,t)+"</td>\n"}function i(e,r){for(var t="<table>\n<thead>\n<tr>\n",n=e.length,s=0;s<n;++s)t+=e[s];for(t+="</tr>\n</thead>\n<tbody>\n",s=0;s<r.length;++s){t+="<tr>\n";for(var a=0;a<n;++a)t+=r[s][a];t+="</tr>\n"}return t+="</tbody>\n</table>\n"}if(!r.tables)return e;var l=/^[ \t]{0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm;return e=t.converter._dispatch("tables.before",e,r,t),e=e.replace(l,function(e){var r,t=e.split("\n");for(r=0;r<t.length;++r)/^[ \t]{0,3}\|/.test(t[r])&&(t[r]=t[r].replace(/^[ \t]{0,3}\|/,"")),/\|[ \t]*$/.test(t[r])&&(t[r]=t[r].replace(/\|[ \t]*$/,""));var l=t[0].split("|").map(function(e){return e.trim()}),c=t[1].split("|").map(function(e){return e.trim()}),u=[],p=[],h=[],d=[];for(t.shift(),t.shift(),r=0;r<t.length;++r)""!==t[r].trim()&&u.push(t[r].split("|").map(function(e){return e.trim()}));if(l.length<c.length)return e;for(r=0;r<c.length;++r)h.push(n(c[r]));for(r=0;r<l.length;++r)s.helper.isUndefined(h[r])&&(h[r]=""),p.push(a(l[r],h[r]));for(r=0;r<u.length;++r){for(var f=[],g=0;g<p.length;++g)s.helper.isUndefined(u[r][g]),f.push(o(u[r][g],h[g]));d.push(f)}return i(p,d)}),e=t.converter._dispatch("tables.after",e,r,t)}),s.subParser("unescapeSpecialChars",function(e){return e=e.replace(/~E(\d+)E/g,function(e,r){var t=parseInt(r);return String.fromCharCode(t)})}),module.exports=s; 
 			}); 
		define("wxParse/wxDiscode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e=e.replace(/&forall;/g,"∀"),e=e.replace(/&part;/g,"∂"),e=e.replace(/&exists;/g,"∃"),e=e.replace(/&empty;/g,"∅"),e=e.replace(/&nabla;/g,"∇"),e=e.replace(/&isin;/g,"∈"),e=e.replace(/&notin;/g,"∉"),e=e.replace(/&ni;/g,"∋"),e=e.replace(/&prod;/g,"∏"),e=e.replace(/&sum;/g,"∑"),e=e.replace(/&minus;/g,"−"),e=e.replace(/&lowast;/g,"∗"),e=e.replace(/&radic;/g,"√"),e=e.replace(/&prop;/g,"∝"),e=e.replace(/&infin;/g,"∞"),e=e.replace(/&ang;/g,"∠"),e=e.replace(/&and;/g,"∧"),e=e.replace(/&or;/g,"∨"),e=e.replace(/&cap;/g,"∩"),e=e.replace(/&cap;/g,"∪"),e=e.replace(/&int;/g,"∫"),e=e.replace(/&there4;/g,"∴"),e=e.replace(/&sim;/g,"∼"),e=e.replace(/&cong;/g,"≅"),e=e.replace(/&asymp;/g,"≈"),e=e.replace(/&ne;/g,"≠"),e=e.replace(/&le;/g,"≤"),e=e.replace(/&ge;/g,"≥"),e=e.replace(/&sub;/g,"⊂"),e=e.replace(/&sup;/g,"⊃"),e=e.replace(/&nsub;/g,"⊄"),e=e.replace(/&sube;/g,"⊆"),e=e.replace(/&supe;/g,"⊇"),e=e.replace(/&oplus;/g,"⊕"),e=e.replace(/&otimes;/g,"⊗"),e=e.replace(/&perp;/g,"⊥"),e=e.replace(/&sdot;/g,"⋅")}function a(e){return e=e.replace(/&Alpha;/g,"Α"),e=e.replace(/&Beta;/g,"Β"),e=e.replace(/&Gamma;/g,"Γ"),e=e.replace(/&Delta;/g,"Δ"),e=e.replace(/&Epsilon;/g,"Ε"),e=e.replace(/&Zeta;/g,"Ζ"),e=e.replace(/&Eta;/g,"Η"),e=e.replace(/&Theta;/g,"Θ"),e=e.replace(/&Iota;/g,"Ι"),e=e.replace(/&Kappa;/g,"Κ"),e=e.replace(/&Lambda;/g,"Λ"),e=e.replace(/&Mu;/g,"Μ"),e=e.replace(/&Nu;/g,"Ν"),e=e.replace(/&Xi;/g,"Ν"),e=e.replace(/&Omicron;/g,"Ο"),e=e.replace(/&Pi;/g,"Π"),e=e.replace(/&Rho;/g,"Ρ"),e=e.replace(/&Sigma;/g,"Σ"),e=e.replace(/&Tau;/g,"Τ"),e=e.replace(/&Upsilon;/g,"Υ"),e=e.replace(/&Phi;/g,"Φ"),e=e.replace(/&Chi;/g,"Χ"),e=e.replace(/&Psi;/g,"Ψ"),e=e.replace(/&Omega;/g,"Ω"),e=e.replace(/&alpha;/g,"α"),e=e.replace(/&beta;/g,"β"),e=e.replace(/&gamma;/g,"γ"),e=e.replace(/&delta;/g,"δ"),e=e.replace(/&epsilon;/g,"ε"),e=e.replace(/&zeta;/g,"ζ"),e=e.replace(/&eta;/g,"η"),e=e.replace(/&theta;/g,"θ"),e=e.replace(/&iota;/g,"ι"),e=e.replace(/&kappa;/g,"κ"),e=e.replace(/&lambda;/g,"λ"),e=e.replace(/&mu;/g,"μ"),e=e.replace(/&nu;/g,"ν"),e=e.replace(/&xi;/g,"ξ"),e=e.replace(/&omicron;/g,"ο"),e=e.replace(/&pi;/g,"π"),e=e.replace(/&rho;/g,"ρ"),e=e.replace(/&sigmaf;/g,"ς"),e=e.replace(/&sigma;/g,"σ"),e=e.replace(/&tau;/g,"τ"),e=e.replace(/&upsilon;/g,"υ"),e=e.replace(/&phi;/g,"φ"),e=e.replace(/&chi;/g,"χ"),e=e.replace(/&psi;/g,"ψ"),e=e.replace(/&omega;/g,"ω"),e=e.replace(/&thetasym;/g,"ϑ"),e=e.replace(/&upsih;/g,"ϒ"),e=e.replace(/&piv;/g,"ϖ"),e=e.replace(/&middot;/g,"·")}function r(e){return e=e.replace(/&nbsp;/g," "),e=e.replace(/&quot;/g,"'"),e=e.replace(/&amp;/g,"&"),e=e.replace(/&lt;/g,"<"),e=e.replace(/&gt;/g,">")}function l(e){return e=e.replace(/&OElig;/g,"Œ"),e=e.replace(/&oelig;/g,"œ"),e=e.replace(/&Scaron;/g,"Š"),e=e.replace(/&scaron;/g,"š"),e=e.replace(/&Yuml;/g,"Ÿ"),e=e.replace(/&fnof;/g,"ƒ"),e=e.replace(/&circ;/g,"ˆ"),e=e.replace(/&tilde;/g,"˜"),e=e.replace(/&ensp;/g,""),e=e.replace(/&emsp;/g,""),e=e.replace(/&thinsp;/g,""),e=e.replace(/&zwnj;/g,""),e=e.replace(/&zwj;/g,""),e=e.replace(/&lrm;/g,""),e=e.replace(/&rlm;/g,""),e=e.replace(/&ndash;/g,"–"),e=e.replace(/&mdash;/g,"—"),e=e.replace(/&lsquo;/g,"‘"),e=e.replace(/&rsquo;/g,"’"),e=e.replace(/&sbquo;/g,"‚"),e=e.replace(/&ldquo;/g,"“"),e=e.replace(/&rdquo;/g,"”"),e=e.replace(/&bdquo;/g,"„"),e=e.replace(/&dagger;/g,"†"),e=e.replace(/&Dagger;/g,"‡"),e=e.replace(/&bull;/g,"•"),e=e.replace(/&hellip;/g,"…"),e=e.replace(/&permil;/g,"‰"),e=e.replace(/&prime;/g,"′"),e=e.replace(/&Prime;/g,"″"),e=e.replace(/&lsaquo;/g,"‹"),e=e.replace(/&rsaquo;/g,"›"),e=e.replace(/&oline;/g,"‾"),e=e.replace(/&euro;/g,"€"),e=e.replace(/&trade;/g,"™"),e=e.replace(/&larr;/g,"←"),e=e.replace(/&uarr;/g,"↑"),e=e.replace(/&rarr;/g,"→"),e=e.replace(/&darr;/g,"↓"),e=e.replace(/&harr;/g,"↔"),e=e.replace(/&crarr;/g,"↵"),e=e.replace(/&lceil;/g,"⌈"),e=e.replace(/&rceil;/g,"⌉"),e=e.replace(/&lfloor;/g,"⌊"),e=e.replace(/&rfloor;/g,"⌋"),e=e.replace(/&loz;/g,"◊"),e=e.replace(/&spades;/g,"♠"),e=e.replace(/&clubs;/g,"♣"),e=e.replace(/&hearts;/g,"♥"),e=e.replace(/&diams;/g,"♦"),e=e.replace(/&#39;/g,"'")}function p(e){return e=e.replace(/\r\n/g,""),e=e.replace(/\n/g,""),e=e.replace(/code/g,"wxxxcode-style")}module.exports={strDiscode:function(c){return c=e(c),c=a(c),c=r(c),c=l(c),c=p(c)},urlToHttpUrl:function(e,a){return new RegExp("^//").test(e)&&(e=a+":"+e),0==/^(http:|https:)/.test(e)&&e.indexOf("/comdata/")>-1&&(e=getApp().globalData.siteBaseUrl+e),e}}; 
 			}); 
		define("wxParse/wxParse.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function a(e){var t=this,a=e.target.dataset.src,i=e.target.dataset.from;void 0!==i&&i.length>0&&wx.previewImage({current:a,urls:t.data[i].imageUrls})}function i(e){var t=this,a=e.target.dataset.from,i=e.target.dataset.idx;void 0!==a&&a.length>0&&r(e,i,t,a)}function r(e,a,i,r){var d,o=i.data[r];if(o&&0!=o.images.length){var s=o.images,l=n(e.detail.width,e.detail.height,i,r),g=s[a].index,h=""+r,m=!0,u=!1,v=void 0;try{for(var f,w=g.split(".")[Symbol.iterator]();!(m=(f=w.next()).done);m=!0)h+=".nodes["+f.value+"]"}catch(e){u=!0,v=e}finally{try{!m&&w.return&&w.return()}finally{if(u)throw v}}var c=h+".width",x=h+".height";i.setData((d={},t(d,c,l.imageWidth),t(d,x,l.imageheight),d))}}function n(e,t,a,i){var r=0,n=0,d=0,o={},g=a.data[i].view.imagePadding;return r=s-2*g,l,e>r?(d=(n=r)*t/e,o.imageWidth=n,o.imageheight=d):(o.imageWidth=e,o.imageheight=t),o}var d=e(require("./showdown.js")),o=e(require("./html2json.js")),s=0,l=0;wx.getSystemInfo({success:function(e){s=e.windowWidth,l=e.windowHeight}}),module.exports={wxParse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wxParseData",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'<div class="color:red;">数据不能为空</div>',n=arguments[3],s=arguments[4];r=r.replace(/webp/g,"jpg");var l=n,g={};if("html"==t)g=o.default.html2json(r,e);else if("md"==t||"markdown"==t){var h=(new d.default.Converter).makeHtml(r);g=o.default.html2json(h,e)}g.view={},g.view.imagePadding=0,void 0!==s&&(g.view.imagePadding=s);var m={};m[e]=g,l.setData(m),l.wxParseImgLoad=i,l.wxParseImgTap=a},wxParseTemArray:function(e,t,a,i){for(var r=[],n=i.data,d=null,o=0;o<a;o++){var s=n[t+o].nodes;r.push(s)}e=e||"wxParseTemArray",(d=JSON.parse('{"'+e+'":""}'))[e]=r,i.setData(d)},emojisInit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/wxParse/emojis/",a=arguments[2];o.default.emojisInit(e,t,a)}}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=(require("/components/utils/ald-stat.js"),require("/getErrorData.js")),a=function(){var e=wx.getExtConfigSync();return e.ext?e.ext:require("config.js")}();App({WxParse:require("/wxParse/wxParse.js"),windowWidth:750,windowHeight:600,pixelRatio:2,onLaunch:function(e){var t=this,a=e.scene;1047!==a&&1011!==a&&1038!==a||(wx.setStorageSync("scene",!0),wx.setStorageSync("sceneStatus",!0)),t.loadBaseInfo(),wx.setNavigationBarTitle({title:t.globalData.appTitle}),wx.getSystemInfo({success:function(e){t.pixelRatio=e.pixelRatio,t.windowWidth=e.windowWidth,t.windowHeight=e.windowHeight}})},getRpxNum:function(e){var t=e.rpx,a=void 0===t?0:t,o=e.type,n=void 0===o?"h":o,s=e.rateFlag,i=void 0!==s&&s,l=wx.getSystemInfoSync(),r=l.windowWidth,c=750/r,u=l.windowHeight*c-a,f=r*c-a;return n&&"h"!==n?"w"===n?i?{width:f,rate:c}:f:void 0:i?{height:u,rate:c}:u},onShow:function(){this.loadBaseInfo();var e=(new Date).getTime(),t=wx.getStorageSync("onHideTime");t&&e-t>=18e5&&wx.getStorageSync("otherMemberCardId")&&(wx.removeStorageSync("otherMemberCardId"),wx.removeStorageSync("onHideTime"))},onHide:function(){var e=this;wx.setStorageSync("onHideTime",(new Date).getTime()),e.globalData.cardSocket&&(e.globalData.cardSocket.close(),setTimeout(function(){e.globalData.cardSocket=void 0},200))},shareAppMessage:function(t){var a="pages/company/index",o=this.globalData.appTitle,n=this.globalData.appDescription,s="";return"object"==(void 0===t?"undefined":e(t))?(t.url&&(a=t.url),t.title&&(o=t.title),t.desc&&(n=t.desc),t.imageUrl&&(s=t.imageUrl)):"string"==typeof t&&t&&(a=t),a+=(a.indexOf("?")>-1?"&":"?")+"fromShare=1",{title:o,desc:n,path:a,imageUrl:s}},getPageUrl:function(e,t){var a=getCurrentPages()[getCurrentPages().length-1].__route__,o=[];for(var n in t)o.push(n+"="+t[n]);return o.length>0&&(a+="?"+o.join("&")),e.setData({pageurl:a}),a},getUserInfo:function(e,t){var a=this;if(void 0===a.denyGetUserInfo&&(a.denyGetUserInfo=!1),this.globalData.userInfo)"function"==typeof e&&e(this.globalData.userInfo);else{var o=function(){console.log("doShowAuthBth");var t=getCurrentPages()[getCurrentPages().length-1];t&&(wx.getSystemInfo({success:function(e){"iOS"===e.system.split(" ")[0]?t.setData({isIOS:!0}):"Android"===e.system.split(" ")[0]&&t.setData({isAndroid:!0})}}),t.setData({showAuthGetUserInfoBtn:!0,isPanelOpacity:!1,siteLogo:a.globalData.baseInfo.SiteLogo,appTitle:a.globalData.appTitle}),a.hasShowAuthGetUserInfoBtn=!0,t.getUserInfoCallback=function(o){t.setData({showAuthGetUserInfoBtn:!1,isIOS:!1,isAndroid:!1}),"getUserInfo:fail auth deny"==o.detail.errMsg?(a.denyGetUserInfo=!0,wx.openSetting({success:function(e){}})):"getUserInfo:ok"==o.detail.errMsg&&(a.denyGetUserInfo=!1,a.globalData.userInfo=o.detail.userInfo,o.detail.iv&&(a.globalData.userInfo.iv=o.detail.iv),o.detail.encryptedData&&(a.globalData.userInfo.encryptedData=o.detail.encryptedData),"function"==typeof e&&e(a.globalData.userInfo))})},n=function(){a.globalData.completeGetUserInfoTimeout=!1;var o={withCredentials:!1,success:function(t){a.denyGetUserInfo=!1,a.globalData.userInfo=t.userInfo,t.iv&&(a.globalData.userInfo.iv=t.iv),t.encryptedData&&(a.globalData.userInfo.encryptedData=t.encryptedData),"function"==typeof e&&e(a.globalData.userInfo)},fail:function(e){"getUserInfo:fail auth deny"==e.errMsg&&(a.denyGetUserInfo=!0),a.showModal({title:"提示",content:"获取用户信息失败："+e.errMsg+",可能小程序部分功能无法正常使用"}),"function"==typeof t&&t(e)},complete:function(e){a.globalData.completeGetUserInfoTimeout&&clearInterval(a.globalData.completeGetUserInfoTimeout)}};wx.getUserInfo(o)};wx.getSetting({success:function(t){console.log("getSetting result:",t),t.authSetting["scope.userInfo"]?n():a.globalData.business_card_choice&&null!=a.globalData.business_card_choice&&0!=a.globalData.business_card_choice?o():("function"==typeof e&&e(a.globalData.userInfo),a.globalData.userInfo={})}})}},login:function(t){var o=this,n=null,s=null,i=0;"object"==(void 0===t?"undefined":e(t))?(i=t.forcereg,n=t.success,s=t.fail):n=t,wx.login({success:function(e){e.code?o.getUserInfo(function(t){o.sendRequest({url:"/index.php?c=Front/WxApp/JsonApi&a=loginUser"+(a.PSESSID?"&PSESSID="+a.PSESSID:""),method:"POST",data:{code:e.code,notAutoReg:1,userInfo:t},success:function(e){e.openid&&(o.globalData.userInfo.openid=e.openid),e.success?(o.globalData.PSESSID=e.PSESSID,o.globalData.WebUserID=e.WebUserID,o.globalData.session_key=e.session_key,o.globalData.hasMobile=e.hasMobile||0,o.globalData.isShowLeadCollection=e.isShowLeadCollection,wx.setStorageSync("invite",e.WebUserID),o.globalData.business_card_choice&&1==o.globalData.business_card_choice&&o.gettBusinessCardEntrance(e.WebUserID),e.isShowLeadCollection&&wx.setStorageSync("isCollection",!0),n&&n()):i&&1==e.needreg?(o.globalData.PSESSID=e.PSESSID,o.globalData.session_key=e.session_key,i()):e.needreg||(o.showModal({title:"提示",content:"登录失败：请确认你在发布时小程序时填写的AppID和AppSecrect是否正确；"+e.msg}),s&&s())},fail:function(e){o.showModal({title:"提示",content:"登录失败："+e}),o.globalData.businessCardInfo={},s&&s()}})},function(e){s&&s()}):console.log("获取用户登录态失败！"+e.errMsg)}})},gettBusinessCardEntrance:function(e){var t=this,a=getCurrentPages()[getCurrentPages().length-1];t.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=gettBusinessCardEntrance",method:"GET",data:{userID:e},success:function(e){t.globalData.businessCardInfo=e.info,wx.setStorageSync("businessCardInfo",e.info),a.setData({backselectFlag:!1})},fail:function(e){t.globalData.businessCardInfo={},console.log("gettBusinessCardEntrance fail")}})},doAfterUserInfoAuth:function(e){var t=this,a=getCurrentPages()[getCurrentPages().length-1],o=void 0===e.timesLimit||e.timesLimit;e.forcereg||(e.forcereg=e.success);var n=function(){var n=a.options;o?t.getAfterUserInfoAuthRunTimes()<1&&(e.success&&e.success(n),t.addAfterUserInfoAuthRunTimes()):(e.success&&e.success(n),t.addAfterUserInfoAuthRunTimes()),a.setData({showAuthGetUserInfoBtn:!1,isPanelOpacity:!1,isIOS:!1,isAndroid:!1})};this.globalData.WebUserID?n():this.login({success:n,fail:function(){var t=a.options;e.fail&&e.fail(t)},forcereg:function(){var t=a.options;e.forcereg&&e.forcereg(t)}})},addAfterUserInfoAuthRunTimes:function(){var e=this,t=getCurrentPages()[getCurrentPages().length-1],a=e.getAfterUserInfoAuthRunTimes();t.setData({afterUserInfoAuthRunTimes:a+1})},getAfterUserInfoAuthRunTimes:function(){var e=getCurrentPages()[getCurrentPages().length-1];return parseInt(e.data.afterUserInfoAuthRunTimes||0)},getAppId:function(){return this.globalData.appId},showToast:function(e){wx.showToast({title:e.title,icon:e.icon,duration:e.duration||1500,success:function(t){"function"==typeof e.success&&e.success(t)},fail:function(t){"function"==typeof e.fail&&e.fail(t)},complete:function(t){"function"==typeof e.complete&&e.complete(t)}})},hideToast:function(){wx.hideToast()},modifyPostParam:function(e){var t,a,o,n,s,i,l="";for(t in e)if((a=e[t])instanceof Array)for(i=0;i<a.length;++i)n=a[i],(s={})[t+"["+i+"]"]=n,l+=this.modifyPostParam(s)+"&";else if(a instanceof Object)for(o in a)n=a[o],(s={})[t+"["+o+"]"]=n,l+=this.modifyPostParam(s)+"&";else void 0!==a&&null!==a&&(l+=encodeURIComponent(t)+"="+encodeURIComponent(a)+"&");return l.length?l.substr(0,l.length-1):l},showModal:function(e){wx.showModal({title:e.title||"提示",content:e.content,showCancel:e.showCancel||!1,cancelText:e.cancelText||"取消",cancelColor:e.cancelColor||"#000000",confirmText:e.confirmText||"确定",confirmColor:e.confirmColor||"#3CC51F",success:function(t){t.confirm?"function"==typeof e.confirm&&e.confirm(t):"function"==typeof e.cancel&&e.cancel(t)},fail:function(t){"function"==typeof e.fail&&e.fail(t)},complete:function(t){"function"==typeof e.complete&&e.complete(t)}})},uploadRequest:function(e,t){var o,n=this,s=e.formData||{},i=e.header;s.app_id||(s.app_id=this.getAppId()),this.globalData.siteId&&(s.InitSiteID=this.globalData.siteId),this.globalData.dataId&&(s.dataId=this.globalData.dataId),this.globalData.PSESSID&&(s.PSESSID=this.globalData.PSESSID),this.globalData.WebUserID&&(s.WebUserID=this.globalData.WebUserID),o=t?t+e.url:this.globalData.siteBaseUrl+e.url,a.ADD_QUERYSTRING&&(o.indexOf("?")>-1?o+="&"+a.ADD_QUERYSTRING:o+="?"+a.ADD_QUERYSTRING);var l=wx.getStorageSync("invite");o.toLowerCase().indexOf("regorbinduser")>-1&&l&&(data.invite=l),e.method&&("post"==e.method.toLowerCase()&&(data=this.modifyPostParam(data),i=i||{"content-type":"application/x-www-form-urlencoded;"}),e.method=e.method.toUpperCase()),e.hideLoading||this.showToast({title:"加载中...",icon:"loading"}),wx.uploadFile({url:o,filePath:e.filePath,name:e.name,formData:s,method:e.method||"GET",header:i||{"content-type":"application/json"},success:function(t){if(t.statusCode&&200!=t.statusCode)return n.hideToast(),n.showModal({content:""+t.errMsg}),void("function"==typeof e.fail&&e.fail(t.data));n.hideToast(),"function"==typeof e.success&&e.success(t.data)},fail:function(t){e.fail&&e.fail(t.data),n.showModal({content:"请求失败 "+t.errMsg})},complete:function(t){"function"==typeof e.complete&&e.complete(t.data)}})},sendRequest:function(e,t){var o,n=this,s=e.data||{},i=e.header;s.app_id||(s.app_id=this.getAppId()),this.globalData.siteId&&(s.InitSiteID=this.globalData.siteId),this.globalData.dataId&&(s.dataId=this.globalData.dataId),this.globalData.PSESSID&&(s.PSESSID=this.globalData.PSESSID),this.globalData.WebUserID&&(s.WebUserID=this.globalData.WebUserID),o=t?t+e.url:this.globalData.siteBaseUrl+e.url,a.ADD_QUERYSTRING&&(o.indexOf("?")>-1?o+="&"+a.ADD_QUERYSTRING:o+="?"+a.ADD_QUERYSTRING),a.PublishTime&&(o.indexOf("?")>-1?o+="&PublishTime="+a.PublishTime:o+="?PublishTime="+a.PublishTime),e.method&&("post"==e.method.toLowerCase()&&(s=this.modifyPostParam(s),i=i||{"content-type":"application/x-www-form-urlencoded;"}),e.method=e.method.toUpperCase()),e.hideLoading||this.showToast({title:"加载中...",icon:"loading"}),this.commonAjax({requestUrl:o,data:s,method:e.method,header:i,success:function(t){if(t.statusCode&&200!=t.statusCode)return e.hideLoading||n.hideToast(),void n.showModal({content:""+t.errMsg});e.hideLoading||n.hideToast(),"function"==typeof e.success&&e.success(t.data)},fail:function(t){e.chatHiddenModal||n.showModal({content:"请求失败 "+t.errMsg}),"function"==typeof e.fail&&e.fail(t.data)},complete:function(t){"function"==typeof e.complete&&e.complete(t.data)}})},commonAjax:function(e){var o=!1,n=0,s={},i="";wx.request({url:e.requestUrl,data:e.data,method:e.method||"GET",header:e.header||{"content-type":"application/json"},success:function(t){n=t.statusCode,s=t.header,t.data&&!t.data.success&&(o=!0,i=JSON.stringify(t.data)),"function"==typeof e.success&&e.success(t)},fail:function(t){o=!0,i=t.errMsg,"function"==typeof e.fail&&e.fail(t)},complete:function(l){"function"==typeof e.complete&&e.complete(l.data),o&&t.getError({appId:a.APPID,appTitle:a.APPTITLE,appSecret:a.APPSECRET,programType:1,siteId:a.SITEID,dataId:a.DATAID,siteBaseUrl:a.SITEBASEURL,industry:a.Industry,Tpl:a.Tpl,errMsgData:i,userID:e.data.WebUserID||0,requestData:{url:e.requestUrl||"",data:JSON.stringify(e.data),method:e.method||"GET",header:JSON.stringify(s||{}),statusCode:n}})}})},getSessionKey:function(){return this.globalData.session_key},setSessionKey:function(e){this.globalData.session_key=e,wx.setStorage({key:"session_key",data:e})},setGlobalData:function(e,t){this.globalData[e]=t},getLocation:function(){var e=this,t=Number(e.globalData.locationInfo.latitude),a=Number(e.globalData.locationInfo.longitude);t>0&&a>0&&wx.openLocation({name:e.globalData.appTitle,address:e.globalData.locationInfo.address,longitude:Number(a),latitude:Number(t)})},phoneCall:function(){wx.makePhoneCall({phoneNumber:this.globalData.baseInfo.Tel})},initBaseInfo:function(e,t){var a=this;e.Banners=this.replaceDomain(e.Banners),e.Images=this.replaceDomain(e.Images),e.Name&&(a.globalData.appTitle=e.Name),a.globalData.baseInfo=e,wx.setStorageSync("SiteID",e.SiteID),a.globalData.TitleName=JSON.parse(e.TitlleNames),a.globalData.locationInfo.latitude=e.Lat,a.globalData.locationInfo.longitude=e.Lng,a.globalData.locationInfo.address=e.Address,a.globalData.socket_config={SOCKET_USERNAME:e.SOCKET_USERNAME,SOCKET_PASSWD:e.SOCKET_PASSWD,SOCKET_URL:e.SOCKET_URL},t&&t()},loadBaseInfo:function(e){var t=this;t.baseInfoLoaded||t.loadingBaseInfo||(t.loadingBaseInfo=!0,t.sendRequest({url:"/index.php?c=Front/WxApp/JsonApi&a=getBaseInfo",method:"POST",hideLoading:!0,success:function(a){t.loadingBaseInfo=!1,a.success?(t.initBaseInfo(a.info,e),t.globalData.business_card_choice=a.business_card_choice,t.globalData.notice=a.notice,t.globalData.officialscene=a.isShowWeChatPublicPlatform,t.globalData.subscribeFormData=a.msgformdata,t.globalData.getMobileNode=a.getMobileNode,t.globalData.reserveFormData=a.reserveformdata,a.isShowWeChatPublicPlatform&&wx.setStorageSync("isOfficialscene",!0),t.baseInfoLoaded=!0):console.log("loadBaseInfo fail："+a.msg)},fail:function(e){t.loadingBaseInfo=!1,console.log("loadBaseInfo fail")}}))},loadphoneInfo:function(e){var t=this;t.sendRequest({url:"/index.php?c=Front/WxApp/JsonApi&a=saveUserMobile",method:"POST",data:{Mobile:e,WebUserID:t.globalData.WebUserID},success:function(e){wx.setStorageSync("hasMobile",1)},fail:function(e){}})},turnOff:function(){getCurrentPages()[getCurrentPages().length-1].setData({phonelicense:!1})},validateForm:function(e,t){var a={};for(var o in t)if(o.indexOf("-fieldID")>-1){var n=t[o];a[n]={fieldName:t[n+"-fieldName"],fieldType:t[n+"-fieldType"],checkType:t[n+"-fieldCheckType"],require:"1"==t[n+"-fieldRequire"]}}var s={2:"^[0-9]+$",3:"^1\\d{10}$",4:"^\\d{3,4}\\-\\d{6,9}$",5:"^((1\\d{10})|(\\d{3,4}\\-\\d{6,9}))$",6:"^[a-z\\d]+([\\-_\\.][a-z\\d]+)*@([a-z\\d]+[\\-\\.]*)+\\.[a-z\\d]{2,5}$",7:"^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$"};for(var i in t)if(a[i]){if("string"==typeof t[i]&&(t[i]=t[i].replace(/(^\s*)|(\s*$)/g,"")),a[i]&&a[i].require){if(!t[i])return this.showModal({title:"提示",content:"请输入"+a[i].fieldName}),!1;if(t[i]instanceof Array&&0==t[i].length)return this.showModal({title:"提示",content:"请输入"+a[i].fieldName}),!1}var l=a[i].checkType;if(s[l]){var r=new RegExp(s[l],"i");if(t[i]&&!r.test(t[i]))return this.showModal({title:"提示",content:a[i].fieldName+"格式不正确"}),!1}}return!0},onCustomFormSelectChange:function(e,t){var a=e.currentTarget.dataset.col,o=e.currentTarget.dataset.array,n={},s=t.data.customformvalues;s||(s={}),s[a+"val"]=o[e.detail.value],n.customformvalues=s,t.setData(n)},onCustomFormDateChange:function(e,t){var a=e.currentTarget.dataset.col,o={},n=t.data.customformvalues;n||(n={}),n[a+"val"]=e.detail.value,o.customformvalues=n,t.setData(o)},onCustomFormTimeChange:function(e,t){var a=e.currentTarget.dataset.col,o={},n=t.data.customformvalues;n||(n={}),n[a+"val"]=e.detail.value,o.customformvalues=n,t.setData(o)},onCustomFormDateTap:function(e,t){var a=e.currentTarget.dataset.col;t.datetimePicker.setPicker(a+"val",this.onCustomFormDateTimeChange,this.onCustomFormDateTimeClear)},onCustomFormDateTimeChange:function(e,t){var a={},o=e.data.customformvalues;o||(o={});var n=e.data[t];n=n.replace("年","-").replace("月","-").replace("日",""),o[t]=n,a.customformvalues=o,e.setData(a)},onCustomFormDateTimeClear:function(e,t){var a={},o=e.data.customformvalues;o||(o={}),o[t]="",a.customformvalues=o,e.setData(a)},onCustomRegionChange:function(e,t){var a=e.currentTarget.dataset.col,o=new Array;for(var n in e.detail.value)o.push(e.detail.value[n]);var s={},i=t.data.customformvalues;i||(i={}),i[a+"val"]=o.join(","),s.customformvalues=i,t.setData(s)},replaceDomain:function(e){if(e instanceof Array)for(var t in e){var a=e[t].replace(/http(s)?:\/\/[0-9a-z\-\.]+/gi,"");a=this.globalData.siteBaseUrl+a,e[t]=a}else"string"==typeof e&&(e=e.replace(/http(s)?:\/\/[0-9a-z\-\.]+/gi,""),e=this.globalData.siteBaseUrl+e);return e},callphoned:function(){var e=this;wx.makePhoneCall({phoneNumber:e.globalData.baseInfo.Tel,success:function(){},fail:function(){wx.getSystemInfo({success:function(t){"ios"!=t.platform&&wx.showModal({title:"提示",content:"您的微信版本不支持一键拨号，请拨打"+e.globalData.baseInfo.Tel+"咨询",success:function(e){e.confirm||e.cancel&&console.log("用户点击取消")}})}})},complete:function(){}})},registerGlobalFunctions:function(e){e.appGetLocation=this.getLocation,e.appPhoneCall=this.callphoned,e.onCustomFormSelectChange=function(t){getApp().onCustomFormSelectChange(t,e)},e.onCustomFormDateChange=function(t){getApp().onCustomFormDateChange(t,e)},e.onCustomFormTimeChange=function(t){getApp().onCustomFormTimeChange(t,e)},e.onCustomFormTextInputChange=function(t){getApp().onCustomFormTimeChange(t,e)},e.onCustomFormDateTap=function(t){getApp().onCustomFormDateTap(t,e)},e.onCustomRegionChange=function(t){getApp().onCustomRegionChange(t,e)},e.hideInfoBlank=function(t){e.setData({showAuthGetUserInfoBtn:!1,isPanelOpacity:!0})}},saveFormID:function(e,t,a){this.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=saveFormID",method:"POST",hideLoading:!0,chatHiddenModal:!0,data:e,success:function(e){t&&t(e)},fail:function(e){console.log("saveFormID fail"+e)}})},compareVersion:function(e,t){e=e.split("."),t=t.split(".");for(var a=Math.max(e.length,t.length);e.length<a;)e.push("0");for(;t.length<a;)t.push("0");for(var o=0;o<a;o++){var n=parseInt(e[o]),s=parseInt(t[o]);if(n>s)return 1;if(n<s)return-1}return 0},buried:function(e,t,a){this.sendRequest({url:"/index.php?c=Front/WxApp/TrackingBehavior/TrackingBehavior&a=add",method:"POST",hideLoading:!0,data:e,success:function(e){t&&t(e)},fail:function(e){console.log("buried fail"+e)}})},globalData:{userInfo:null,PSESSID:"",session_key:"",WebUserID:"",baseInfo:{},TitleName:{},officialscene:null,isShowLeadCollection:null,locationInfo:{latitude:"",longitude:"",address:""},notice:{},siteBaseUrl:a.SITEBASEURL,cdnBaseUrl:a.SITEBASEURL.indexOf("//wxapp.")>-1&&a.CDNBASEURL?a.CDNBASEURL:a.SITEBASEURL,appId:a.APPID,appTitle:a.APPTITLE,appDescription:a.APPDESCRIPTION,siteId:a.SITEID,dataId:a.DATAID,socket_config:{}}}); 
 			}); 	require("app.js");
 		__wxRoute = 'pages/company/businessCard/common/ec-canvas/ec-canvas';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/company/businessCard/common/ec-canvas/ec-canvas.js';	define("pages/company/businessCard/common/ec-canvas/ec-canvas.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return t&&t.__esModule?t:{default:t}}(require("./wx-canvas")),a=function(t){if(t&&t.__esModule)return t;var a={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e]);return a.default=t,a}(require("./echarts")),e=void 0;Component({properties:{canvasId:{type:String,value:"ec-canvas"},ec:{type:Object}},data:{},ready:function(){this.data.ec?this.data.ec.lazyLoad||this.init():console.warn('组件需绑定 ec 变量，例：<ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" ec="{{ ec }}"></ec-canvas>')},methods:{init:function(c){var r=this,n=wx.version.version.split(".").map(function(t){return parseInt(t,10)});if(n[0]>1||1===n[0]&&n[1]>9||1===n[0]&&9===n[1]&&n[2]>=91){e=wx.createCanvasContext(this.data.canvasId,this);var i=new t.default(e,this.data.canvasId);a.setCanvasCreator(function(){return i}),wx.createSelectorQuery().in(this).select(".ec-canvas").boundingClientRect(function(t){"function"==typeof c?r.chart=c(i,t.width,t.height):r.data.ec&&r.data.ec.onInit&&(r.chart=r.data.ec.onInit(i,t.width,t.height))}).exec()}else console.error("微信基础库版本过低，需大于等于 1.9.91。参见：https://github.com/ecomfe/echarts-for-weixin#%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82")},canvasToTempFilePath:function(t){var a=this;t.canvasId||(t.canvasId=this.data.canvasId),e.draw(!0,function(){wx.canvasToTempFilePath(t,a)})},touchStart:function(t){if(this.chart&&t.touches.length>0){var a=t.touches[0];this.chart._zr.handler.dispatch("mousedown",{zrX:a.x,zrY:a.y}),this.chart._zr.handler.dispatch("mousemove",{zrX:a.x,zrY:a.y})}},touchMove:function(t){if(this.chart&&t.touches.length>0){var a=t.touches[0];this.chart._zr.handler.dispatch("mousemove",{zrX:a.x,zrY:a.y})}},touchEnd:function(t){if(this.chart){var a=t.changedTouches?t.changedTouches[0]:{};this.chart._zr.handler.dispatch("mouseup",{zrX:a.x,zrY:a.y}),this.chart._zr.handler.dispatch("click",{zrX:a.x,zrY:a.y})}}}}); 
 			}); 	require("pages/company/businessCard/common/ec-canvas/ec-canvas.js");
 		__wxRoute = 'pages/company/index';__wxRouteBegin = true; 	define("pages/company/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=require("../../common.js"),a=0;Page({data:{pullDownRefreshFlag:!0,baseUrl:e.globalData.siteBaseUrl,isFirstEnter:!0,isClose:!1,reminder:"授权提示",matter:"授权失败，请重新授权",abrogate:"暂时先不",permission:"允许",officialscene:!1,isShowLeadCollection:!1},onPullDownRefresh:function(){var a=this;a.data.pullDownRefreshFlag&&(a.setData({pullDownRefreshFlag:!1}),a.data.pullDownRefreshFlag=!1,a.data.optionsData.refresh=!0,e.gettBusinessCardEntrance(e.globalData.WebUserID),t.initCommonModules(),setTimeout(function(){a.onLoad(a.data.optionsData),a.setData({pullDownRefreshFlag:!0}),wx.stopPullDownRefresh()},1500))},onLoad:function(a){(n=this).getHeight(),this.setData({optionsData:a,isFirst:!0,scene:wx.getStorageSync("scene")}),e.globalData.PSESSID?n.loadPageData():e.login({success:function(){n.loadPageData()},fail:function(){n.loadPageData()}}),this.getBusinessInfo(function(t){if(t&&t.businessCardInfo){if(t.businessCardInfo.admin){var a={tbUserID:t.userid,tbType:"16",tbTypeID:"",tbTypeName:"",tbTypeImg:"",tbBusinessCardID:wx.getStorageSync("otherMemberCardId")?wx.getStorageSync("otherMemberCardId"):0};e.buried(a,function(e){})}else{var s={tbUserID:t.userid,tbType:"16",tbTypeID:"",tbTypeName:"",tbTypeImg:"",tbBusinessCardID:wx.getStorageSync("businessCardId")?wx.getStorageSync("businessCardId"):0};e.buried(s,function(e){})}setTimeout(function(){n.setData({isFirst:!1})},1500)}}),wx.setStorageSync("iscatchCardCount",1),e.registerGlobalFunctions(n),t.registerGlobalFunc(),t.loadPageModules(a);var n=this},onShow:function(){if(1==wx.getStorageSync("iscatchCardCount")&&e.globalData.businessCardInfo&&(t.initCommonModules(),wx.removeStorageSync("iscatchCardCount")),(this.data.backselectFlag||wx.getStorageSync("switchToIndex")||wx.getStorageSync("editCardSuccessOnIndex"))&&(e.gettBusinessCardEntrance(e.globalData.WebUserID),t.initCommonModules(),wx.removeStorageSync("switchToIndex"),wx.removeStorageSync("editCardSuccess")),wx.getStorageSync("otherMemberCardId")&&!this.data.isFirst)if(wx.getStorageSync("businessCardInfo").admin){var a={tbUserID:e.globalData.WebUserID,tbType:"16",tbTypeID:"",tbTypeName:"",tbTypeImg:"",tbBusinessCardID:wx.getStorageSync("otherMemberCardId")};e.buried(a,function(e){})}else{var n={tbUserID:e.globalData.WebUserID,tbType:"16",tbTypeID:"",tbTypeName:"",tbTypeImg:"",tbBusinessCardID:wx.getStorageSync("businessCardId")?wx.getStorageSync("businessCardId"):0};e.buried(n,function(e){})}},yijiandaohhang:function(e){for(var t,a,n=e.currentTarget.dataset.hi,s=n[0].Latitude,o=n[0].Longitude,i=0;i<n.length;i++)1==n[i].Type&&(t=n[i].Text,a=n[i].Title);wx.openLocation({name:a,address:t,longitude:Number(o),latitude:Number(s)})},yijianbohao:function(e){var t=e.currentTarget.dataset.iphone;wx.makePhoneCall({phoneNumber:t})},loadPageData:function(){var e=this,t=getApp(),n=t.globalData.notice||{};e.setData({officialscene:!(!t.globalData.officialscene||0!==Object.keys(n).length),isShowLeadCollection:t.globalData.isShowLeadCollection,isCollection:wx.getStorageSync("isCollection"),isOfficialscene:wx.getStorageSync("isOfficialscene")}),t.globalData&&Object.keys(t.globalData.baseInfo).length>0?(null==t.globalData.notice||t.globalData.notice.ButtonValue||(t.globalData.notice.ButtonValue="查看详情"),Math.round((new Date).getTime()/1e3)-a>86400&&e.setData({notice:t.globalData.notice}),a=Math.round((new Date).getTime()/1e3)):setTimeout(function(){e.loadPageData()},200)},closeNotic:function(){this.setData({notice:null,officialscene:!0})},onNoticeClick:function(e){var t=this.data.notice,a=(t.RedirectTo,t.RedirectToID,this);wx.navigateTo({url:t.URL||"noticedetail",complete:function(){a.setData({notice:null})}})},navBtnShowAndHide:function(){var e=!this.data.plugNavFlag;this.setData({plugNavFlag:e})},onPageScroll:function(){},onShareAppMessage:function(){return e.shareAppMessage()},getHeight:function(){this.setData({height:parseInt(wx.getSystemInfoSync().windowHeight-wx.getSystemInfoSync().windowWidth/750*100),cardBoxLeft:parseInt(wx.getSystemInfoSync().windowWidth-wx.getSystemInfoSync().windowWidth/750*698)/2})},getBusinessInfo:function(a){var n=this,s=this;if(e.globalData.businessCardInfo){e.globalData.businessCardInfo.PersonImg&&e.globalData.businessCardInfo.PersonImg.indexOf("https://wx.qlogo.cn/")<0&&(e.globalData.businessCardInfo.PersonImg=s.data.baseUrl+e.globalData.businessCardInfo.PersonImg),s.setData({businessCardInfo:e.globalData.businessCardInfo});var o={userid:e.globalData.WebUserID,businessCardInfo:e.globalData.businessCardInfo};a&&a(o)}else setTimeout(function(){t.initCommonModules(),n.getBusinessInfo(a)},1500)},closeCardLayer:function(){this.setData({isClose:!0})},goToCardDetail:function(){var t=e.globalData.businessCardInfo;wx.navigateTo({url:"/pages/company/businessCard/cardDetails?BusinessCardID="+t.BusinessCardID+"&UserID="+t.UserID+"&SiteID="+t.SiteID+"&AdminID="+t.adminID})},officialDel:function(){this.setData({officialscene:!1,scene:!1}),wx.setStorageSync("isOfficialscene",!1)},isShowLeadCollection:function(){this.setData({isShowLeadCollection:!1}),wx.setStorageSync("isCollection",!1)}}); 
 			}); 	require("pages/company/index.js");
 		__wxRoute = 'pages/company/about';__wxRouteBegin = true; 	define("pages/company/about.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),e=require("../../utils/imgutil.js");Page({bannerLoaded:!1,comImagesSize:{},data:{userInfo:{},companyshowImgShow:!0,companyimgpackup:"imgpackup",aboutUsShowText:"显示全部",pullDownRefreshFlag:!0,companyshowimg:!0,baseUrl:a.globalData.siteBaseUrl,imagerotate:"imageup",imagerotateimg:"imageup",textheightarr:["unfold"],plugNavFlag:!0,hdimg:[],circular:!0,indicatorDots:!1,indicatorcolor:"#000",vertical:!1,autoplay:!1,duration:100,imgheights:[],imgwidth:750,current:0},onShareAppMessage:function(){return a.shareAppMessage()},showAndHiddenText:function(a){if("1"===a.currentTarget.dataset.showText){var e="",t="";"显示全部"===this.data.aboutUsShowText?(e="收起",t="imagedown"):(e="显示全部",t="imageup"),this.setData({aboutUsShowText:e,imagerotate:t})}else if("2"===a.currentTarget.dataset.showImg){var i=this.data.companyshowimg;if(i)i=!i,this.data.info.Images.slice(0,this.data.info.Images.length);else{i=!i;var s=this.data.info.Images.length;this.data.info.Images.slice(0,s)}this.setData({comImages:this.data.info.Images,companyshowimg:i})}},callmeTap:function(a){wx.makePhoneCall({phoneNumber:a.currentTarget.dataset.tel,success:function(){},fail:function(){wx.showModal({title:"提示",content:"您的微信版本不支持一键拨号，请拨打"+a.currentTarget.dataset.tel+"咨询",success:function(a){a.confirm||a.cancel}})}})},onLoad:function(e){a.getPageUrl(this,e),a.registerGlobalFunctions(this);var t=this;wx.setNavigationBarTitle({title:a.globalData.TitleName[2].TitleName}),t.setData({queryparams:e,TitleName:a.globalData.TitleName}),this.loadPageData(),this.bannerImgLoad()},onPullDownRefresh:function(){var e=this;e.data.pullDownRefreshFlag&&(e.setData({pullDownRefreshFlag:!1}),e.data.pullDownRefreshFlag=!1,e.data.queryparams.refresh=!0,setTimeout(function(){a.baseInfoLoaded=!1,a.loadBaseInfo(function(){e.onLoad(e.data.queryparams)}),e.setData({pullDownRefreshFlag:!0}),wx.stopPullDownRefresh()},1500))},getLocationByAddress:function(e){var t=this,i={url:"/index.php?c=Front/WxApp/Amap&a=geo",data:{addr:t.data.info.addr},success:function(a){a.success?wx.openLocation({name:t.data.info.title,address:t.data.info.addr,longitude:Number(a.info.longitude),latitude:Number(a.info.latitude)}):t.showModal({content:""+a.msg})}};a.sendRequest(i)},getLocation:function(e){var t=this,i=Number(e.currentTarget.dataset.lat),s=Number(e.currentTarget.dataset.lng);i>0&&s>0?wx.openLocation({name:t.data.info.Name||a.globalData.appTitle,address:t.data.info.Address,longitude:Number(s),latitude:Number(i)}):this.getLocationByAddress()},comImgLoad:function(a){var t=this,i=e.imageUtil(a);t.comImagesSize[a.currentTarget.dataset.src]=i},photoClick:function(a){var e=a.currentTarget.dataset.src;wx.redirectTo({url:"/pages/index/imgview?src="+e})},imageLoad:function(a){var e=750/(a.detail.width/(e=a.detail.height)),t=this.data.imgheights;t.push(e),this.setData({imgheights:t})},bindchange:function(a){this.setData({current:a.detail.current})},bigImgShow:function(a){var t=this,i=a.currentTarget.dataset.src,s={};s=t.comImagesSize[i]?t.comImagesSize[i]:e.imageUtil(a);var n=0;if(t.data.info.Images.length){for(var o=0;o<t.data.info.Images.length;o++)if(t.data.info.Images[o]==a.currentTarget.dataset.src){n=o;break}t.setData({bigImgHeight:s.imageHeight,slideshow:!0,slideCurrent:n})}},hideImgShow:function(){this.setData({slideshow:!1})},loadPageData:function(){var e=this,t=a.globalData.baseInfo;t.Name&&wx.setNavigationBarTitle({title:a.globalData.TitleName[2].TitleName});t.Images.length>4||t.Images.length;t.Banners=a.replaceDomain(t.Banners),t.Images=a.replaceDomain(t.Images),t.Images.length<4&&this.setData({companyshowImgShow:!1}),e.setData({info:t,comImages:t.Images,banners:t.Banners}),a.WxParse.wxParse("DetailInfo","html",t.Intro,e,5),t.Name&&a.setGlobalData("appTitle",t.Name),e.toBuried()},navBtnShowAndHide:function(){var e=!this.data.plugNavFlag;this.setData({plugNavFlag:e,TitleName:a.globalData.TitleName})},toBuried:function(){var e=void 0;e=wx.getStorageSync("businessCardInfo").admin?{tbUserID:a.globalData.WebUserID,tbType:"21",tbTypeID:"",tbTypeName:"",tbTypeImg:"",tbBusinessCardID:wx.getStorageSync("otherMemberCardId")?wx.getStorageSync("otherMemberCardId"):0}:{tbUserID:a.globalData.WebUserID,tbType:"21",tbTypeID:"",tbTypeName:"",tbTypeImg:"",tbBusinessCardID:wx.getStorageSync("businessCardId")?wx.getStorageSync("businessCardId"):0},a.buried(e,function(a){})}}); 
 			}); 	require("pages/company/about.js");
 		__wxRoute = 'pages/company/productlist';__wxRouteBegin = true; 	define("pages/company/productlist.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=require("../../common.js"),s=require("../../components/wxb.js");Page({isloading:!1,onShareAppMessage:function(){return t.shareAppMessage("/pages/company/productlist")},onLoad:function(s){var o=this;wx.setNavigationBarTitle({title:t.globalData.TitleName[1]?t.globalData.TitleName[1].TitleName:"产品展示"}),t.getPageUrl(this,s),t.registerGlobalFunctions(this),wx.getSystemInfo({success:function(a){o.setData({imgWidth:(a.windowWidth-39)/2,scrollHeight:t.windowHeight*a.pixelRatio})}}),this.setData({queryparams:s,productflag:s.productflag?s.productflag:0,classid:s.classid?s.classid:0}),this.loadProduct(!0),this.loadClassList(),a.setPopupFromShare()},onPullDownRefresh:function(){var t=this;t.data.pullDownRefreshFlag&&(t.isloading=!1,t.setData({pullDownRefreshFlag:!1}),t.data.pullDownRefreshFlag=!1,t.data.queryparams.refresh=!0,setTimeout(function(){t.onLoad(t.data.queryparams),t.setData({pullDownRefreshFlag:!0}),wx.stopPullDownRefresh()},1500))},data:{falgAjax:!0,pullDownRefreshFlag:!0,classid:0,pagesize:10,recordcount:99,productlist:[],productflag:0,sortcol:"",sort:"",hasproduct:!1,baseUrl:t.globalData.siteBaseUrl,animationData:{},plugNavFlag:!0,scrollHeight:t.windowHeight*t.pixelRatio,imgWidth:150,reminder:"授权提示",matter:"授权失败，请重新授权",abrogate:"暂时先不",permission:"允许"},loadProduct:function(a){var s=this;if(!s.isloading){s.isloading=!0,a&&(s.data.recordcount=99,s.data.productlist=[]);var o=s.data.recordcount,e=s.data.productlist.length;if(o>e&&this.data.falgAjax){this.setData({falgAjax:!1});var i=Math.ceil(e/s.data.pagesize)+1,l=s.data.queryparams.keyword?s.data.queryparams.keyword:"",r="";s.data.sortcol&&(r="&sortcol="+s.data.sortcol+"&sort="+s.data.sort),t.sendRequest({url:"/index.php?c=Front/WxApp/JsonApi&a=getProductList&addcolumns=ProDesc&classid="+s.data.classid+"&keyword="+l+"&page="+i+"&pagesize="+s.data.pagesize+r,method:"GET",success:function(t){if(s.isloading=!1,t.success){console.log(t.productlist);for(var a=0;a<t.productlist.length;a++)s.data.productlist.push(t.productlist[a]);s.setData({productlist:s.data.productlist,recordcount:t.recordcount,hasproduct:s.data.productlist.length>0,falgAjax:!0})}else console.log("getProductList fail："+t.msg)},fail:function(t){s.isloading=!1,console.log("getProductList fail")}})}}},loadClassList:function(){var a=this;t.sendRequest({url:"/index.php?c=Front/WxApp/JsonApi&a=getProductClassList",method:"GET",success:function(s){s.success?(s.list.length?s.list.unshift({ClassID:0,Name:"全部分类"}):a.setData({scrollHeight:t.windowHeight*s.pixelRatio}),s.list.forEach(function(t){if(t.ClassID==a.data.classid)return a.setData({productTitleText:t.Name}),!1}),a.setData({classlist:s.list})):console.log("getProductClassList fail："+s.msg)},fail:function(t){console.log("getProductClassList fail")}})},onClassChange:function(t){if(this.data.classid==t.currentTarget.dataset.classid)return!1;this.setData({classid:t.currentTarget.dataset.classid}),this.isloading=!1,this.loadProduct(!0)},goProductdetail:function(a){var s=this,o=t.globalData.getMobileNode?t.globalData.getMobileNode.checkGoodsDetails:0;s.setData({productid:a.currentTarget.dataset.productid});var e=wx.getStorageSync("hasMobile")||0;0===t.globalData.hasMobile&&0===e&&0!==o?s.setData({phonelicense:!0}):s.toProductDetail()},toProductDetail:function(){var t=this;wx.navigateTo({url:"productdetail?id="+t.data.productid})},getPhoneNumber:function(a){var o=this;t.globalData.getMobileNode;if(a.detail.errMsg.indexOf("getPhoneNumber:fail")>-1)2===o.data.checkGoodsDetails?o.setData({allowspopup:!0}):o.toProductDetail();else{var e=t.globalData.appId,i=t.globalData.session_key,l=new s(e,i).decryptData(a.detail.encryptedData,a.detail.iv);t.loadphoneInfo(l.phoneNumber),o.toProductDetail()}},turnOff:function(){t.turnOff()},abolish:function(){this.setData({allowspopup:!1})},onProductListScroll:function(t){this.loadProduct()},onReachBottom:function(){this.loadProduct()},navBtnShowAndHide:function(){var t=!this.data.plugNavFlag;this.setData({plugNavFlag:t})}}); 
 			}); 	require("pages/company/productlist.js");
 		__wxRoute = 'pages/company/newslist';__wxRouteBegin = true; 	define("pages/company/newslist.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var s=getApp(),a=(require("../../utils/imgutil.js"),require("../../utils/util.js")),t=require("../../common.js");Page({isloading:!1,onShareAppMessage:function(){return s.shareAppMessage("/pages/company/newslist")},onLoad:function(a){s.getPageUrl(this,a),wx.setNavigationBarTitle({title:s.globalData.TitleName[0].TitleName}),s.registerGlobalFunctions(this),this.setData({queryparams:a,classid:a.classid?a.classid:0}),this.loadClassList(),this.loadNewsList(!0),t.setPopupFromShare()},getPhoneNumber:function(a){var t=this;if(a.detail.errMsg.indexOf("getPhoneNumber:fail")>-1)2==t.data.readArticles?t.setData({allowspopup:!0}):wx.navigateTo({url:"newsdetail?id="+t.data.newsid});else{var e=s.globalData.appId,i=s.globalData.session_key,l=new wxb(e,i).decryptData(a.detail.encryptedData,a.detail.iv);s.loadphoneInfo(l.phoneNumber),wx.navigateTo({url:"newsdetail?id="+t.data.newsid})}},abolish:function(){this.setData({allowspopup:!1})},turnOff:function(){s.turnOff()},onPullDownRefresh:function(){var s=this;s.data.pullDownRefreshFlag&&(s.isloading=!1,s.setData({pullDownRefreshFlag:!1}),s.data.pullDownRefreshFlag=!1,s.data.queryparams.refresh=!0,setTimeout(function(){s.onLoad(s.data.queryparams),s.setData({pullDownRefreshFlag:!0}),wx.stopPullDownRefresh()},1500))},data:{pullDownRefreshFlag:!0,pagesize:10,recordcount:99,newslist:[],sortcol:"",sort:"",hasnews:!0,scrollHeight:s.windowHeight*s.pixelRatio-80,baseUrl:s.globalData.siteBaseUrl,plugNavFlag:!0,reminder:"授权提示",matter:"授权失败，请重新授权",abrogate:"暂时先不",permission:"允许"},loadNewsList:function(a){var t=this;if(!t.isloading){t.isloading=!0,a&&(t.data.recordcount=99,t.data.newslist=[]);var e=t.data.recordcount,i=t.data.newslist.length;if(console.log(e,i),e>i){var l=Math.ceil(i/t.data.pagesize)+1,o=t.data.queryparams.keyword?t.data.queryparams.keyword:"",n="";t.data.sortcol&&(n="&sortcol="+t.data.sortcol+"&sort="+t.data.sort),s.sendRequest({url:"/index.php?c=Front/WxApp/JsonApi&a=getnewslist&keyword="+o+"&page="+l+"&pagesize="+t.data.pagesize+n+"&classid="+t.data.classid,method:"GET",success:function(s){if(t.isloading=!1,s.success){for(var a=0;a<s.newslist.length;a++)s.newslist[a].PublishTime=s.newslist[a].PublishTime.split(" ")[0],s.newslist[a].PublishYear=s.newslist[a].PublishTime.split("-")[0],s.newslist[a].PublishDate=s.newslist[a].PublishTime.split("-")[1]+"/"+s.newslist[a].PublishTime.split("-")[2],t.data.newslist.push(s.newslist[a]);t.setData({newslist:t.data.newslist,recordcount:s.recordcount,hasnews:t.data.newslist.length>0})}else console.log("loadNewsList fail："+s.msg)},fail:function(s){t.isloading=!1,console.log("loadNewsList fail")}})}}},loadClassList:function(){var a=this;s.sendRequest({url:"/index.php?c=Front/WxApp/JsonApi&a=getNewsClassList",method:"GET",success:function(t){t.success?(null==t.list?a.setData({showClassNav:!1}):a.setData({showClassNav:!0}),t.list.unshift({ClassID:0,Name:"全部分类"}),t.list.forEach(function(s){if(s.ClassID==a.data.classid&&s.ClassID>0)return!1}),t.list.length||a.setData({scrollHeight:s.windowHeight*s.pixelRatio}),a.setData({classlist:t.list})):console.log("getNewsClassList fail："+t.msg)},fail:function(s){console.log("getNewsClassList fail")}})},onClassChange:function(s){if(this.data.classid==s.currentTarget.dataset.classid)return!1;this.setData({classid:s.currentTarget.dataset.classid}),this.isloading=!1,this.loadNewsList(!0)},onSearchSubmit:function(t){var e=a.trim(t.detail.value.keyword);e?wx.redirectTo({url:"newslist?keyword="+e}):s.showModal({title:"提示",content:"请输入关键词"})},onKeywordChange:function(t){var e=a.trim(t.detail.value);e?e&&wx.redirectTo({url:"newslist?keyword="+e}):s.showModal({title:"提示",content:"请输入关键词"})},goNewsDetail:function(a){var t=this;this.setData({newsid:a.currentTarget.dataset.newsid});var e=s.globalData.getMobileNode?s.globalData.getMobileNode.enterTicketCenter:0,i=wx.getStorageSync("hasMobile")||0;0===s.globalData.hasMobile&&0===i&&0!==t.data.readArticles&&0!==e?this.setData({phonelicense:!0}):wx.navigateTo({url:"newsdetail?id="+t.data.newsid})},onNewsListScroll:function(s){this.loadNewsList()},onReachBottom:function(){this.loadNewsList()},navBtnShowAndHide:function(){var a=!this.data.plugNavFlag;this.setData({plugNavFlag:a,TitleName:s.globalData.TitleName})}}); 
 			}); 	require("pages/company/newslist.js");
 		__wxRoute = 'pages/company/productdetail';__wxRouteBegin = true; 	define("pages/company/productdetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var a,t=getApp(),o=require("../../utils/imgutil.js"),i=require("../../common.js");require("../../components/wxb.js");Page((a={onPullDownRefresh:function(){wx.stopPullDownRefresh()},isloading:!1,bannerLoaded:!1,url:!1,onShareAppMessage:function(){return t.shareAppMessage({url:this.url,title:this.data.productInfo.Name})},data:{reminder:"授权提示",matter:"授权失败，请重新授权",abrogate:"暂时先不",permission:"允许"},onLoad:function(e){var a=this;if(e.scene){var o={};decodeURIComponent(e.scene).split("&").map(function(e,a){if(-1!==e.indexOf("=")){var t=e.split("=");o[t[0]]=t[1]}}),e=o}a.url=t.getPageUrl(a,e),t.registerGlobalFunctions(a),i.initCommonModules(),this.setData({queryparams:e}),this.loadProduct();var n=t.globalData.WebUserID||0,r=t.globalData.getMobileNode?t.globalData.getMobileNode.checkGoodsDetails:0,s=getCurrentPages(),l=s[s.length-1];a.data.nobileNodeStatus&&0===t.globalData.hasMobile&&0!==n&&"1"===a.data.queryparams.fromShare&&0!==r&&setTimeout(function(){wx.redirectTo({url:"/pages/phoneauthorization/index?getMobileNode="+t.globalData.getMobileNode.checkGoodsDetails+"&pageroute="+l.route})},2e3)},onPageScroll:function(){}},e(a,"data",{currentTab:0,bannerHeight:150,hasPrice:!0,productImgs:[],plugNavFlag:!0,videoshow:!1}),e(a,"loadProduct",function(){var e=this;if(!e.isloading){e.isloading=!0;var a=0;e.data.queryparams.id&&(a=e.data.queryparams.id),t.sendRequest({url:"/index.php?c=Front/WxApp/JsonApi&a=getProductInfo&id="+a+"&updateHits=1",method:"GET",success:function(a){if(e.isloading=!1,a.success){var o=wx.getStorageSync("businessCardInfo"),i=a.info.BigImages.split(",")[0];if(o.admin)if(wx.getStorageSync("otherMemberCardId")){var n={tbUserID:t.globalData.WebUserID,tbType:"18",tbTypeID:a.info.ProductID,tbTypeName:a.info.Name,tbTypeImg:i,tbBusinessCardID:wx.getStorageSync("otherMemberCardId")};t.buried(n,function(e){})}else{var r={tbUserID:t.globalData.WebUserID,tbType:"18",tbTypeID:a.info.ProductID,tbTypeName:a.info.Name,tbTypeImg:i,tbBusinessCardID:0};t.buried(r,function(e){})}else{var s={tbUserID:t.globalData.WebUserID,tbType:"18",tbTypeID:a.info.ProductID,tbTypeName:a.info.Name,tbTypeImg:i,tbBusinessCardID:wx.getStorageSync("businessCardId")?wx.getStorageSync("businessCardId"):0};t.buried(s,function(e){})}for(var l=a.info.BigImages.split(","),d=0;d<l.length;d++)l[d]=t.globalData.siteBaseUrl+"/comdata/"+a.info.SiteID+"/product/"+l[d];0==parseFloat(a.info.Price)&&(a.info.Price="面议",e.setData({hasPrice:!1})),wx.setNavigationBarTitle({title:a.info.Name}),0==parseFloat(a.info.FreightMoney)&&(a.info.FreightMoney="包邮"),t.WxParse.wxParse("DetailInfo","html",a.info.Content,e,5),e.setData({productInfo:a.info,productImgs:l})}else console.log("getProductInfo fail："+a.msg)},fail:function(a){e.isloading=!1,console.log("getProductInfo fail")}})}}),e(a,"onBannerImgLoad",function(e){var a=this,t=o.imageUtil(e);0==a.bannerLoaded&&(a.setData({bannerHeight:t.imageHeight}),a.bannerLoaded=!0)}),e(a,"videobofang",function(){this.setData({videoshow:!0})}),e(a,"videoguanbi",function(){this.setData({videoshow:!1})}),e(a,"navBtnShowAndHide",function(){var e=!this.data.plugNavFlag;this.setData({plugNavFlag:e})}),a)); 
 			}); 	require("pages/company/productdetail.js");
 		__wxRoute = 'pages/company/newsdetail';__wxRouteBegin = true; 	define("pages/company/newsdetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=require("../../common.js"),a=require("../../components/wxb.js");Page({isloading:!1,bannerLoaded:!1,url:!1,onShareAppMessage:function(){var t=this,a=t.data.newsInfo.ArticleID;return t.addTranspond(a),e.shareAppMessage({url:this.url,title:this.data.newsInfo.Title})},onLoad:function(a){var s=this;if(a.scene){var n={};decodeURIComponent(a.scene).split("&").map(function(e,t){if(-1!==e.indexOf("=")){var a=e.split("=");n[a[0]]=a[1]}}),a=n}a.businessid&&s.loadData(a.businessid),(!a.businessid&&e.globalData.businessCardInfo||!a.businessid&&wx.getStorageSync("businessCardId"))&&(a.businessid=e.globalData.businessCardInfo.businessCardID?e.globalData.businessCardInfo.businessCardID:wx.getStorageSync("businessCardId")),s.url=e.getPageUrl(s,a),e.registerGlobalFunctions(s),this.setData({userID:e.globalData.WebUserID,queryparams:a,authorization:1}),a.SiteID&&""!=a.SiteID?s.setData({cardsiteID:a.SiteID}):e.globalData.baseInfo.SiteID?s.setData({cardsiteID:e.globalData.baseInfo.SiteID}):s.getSiteId(),this.loadNews(),t.setPopupFromShare(),s.getUserWhetherLike(a);var i=wx.getStorageSync("hasMobile")||0,o=e.globalData.getMobileNode?e.globalData.getMobileNode.readArticles:0,r=0,d=getCurrentPages(),l=d[d.length-1];s.data.queryparams.id&&(r=s.data.queryparams.id),0===e.globalData.hasMobile&&0===i&&"1"===s.data.queryparams.fromShare&&0!==o&&(this.setData({phonestatus:1}),2===o?wx.redirectTo({url:"/pages/phoneauthorization/index?getMobileNode="+o+"&pageroute="+l.route+"&id="+r}):this.setData({phonelicense:!0})),s.setData({authorization:1}),wx.getSystemInfo({success:function(e){"iOS"===e.system.split(" ")[0]?s.setData({modelType:!0}):"Android"===e.system.split(" ")[0]&&s.setData({modelType:!1})}})},data:{baseUrl:e.globalData.siteBaseUrl,hasLike:!1,isBlank:!1,showCardFlag:!1,commentcontent:"",authorization:1,canhold:!0,loseEfficacy:!1,modelType:!0,phonelicense:!1,fork:!1,reminder:"授权提示",matter:"授权失败，请重新授权",abrogate:"暂时先不",permission:"允许"},loadNews:function(){var t=this;if(!t.isloading){t.isloading=!0;var a=0;t.data.queryparams.id&&(a=t.data.queryparams.id),e.sendRequest({url:"/index.php?c=Front/WxApp/JsonApi&a=getNewsInfo&id="+a+"&prevnext=1&updateHits=1",method:"GET",success:function(s){if(t.isloading=!1,s.success)if(s.info.Content){if(e.globalData.WebUserID)if(wx.getStorageSync("businessCardInfo").admin)if(wx.getStorageSync("otherMemberCardId")){var n={tbUserID:e.globalData.WebUserID,tbType:"12",tbTypeID:a,tbTypeName:s.info.Title,tbTypeImg:s.info.ImgBig,tbBusinessCardID:wx.getStorageSync("otherMemberCardId")};e.buried(n,function(e){})}else{var i={tbUserID:e.globalData.WebUserID,tbType:"12",tbTypeID:a,tbTypeName:s.info.Title,tbTypeImg:s.info.ImgBig,tbBusinessCardID:0};e.buried(i,function(e){})}else{var o={tbUserID:e.globalData.WebUserID,tbType:"12",tbTypeID:a,tbTypeName:s.info.Title,tbTypeImg:s.info.ImgBig,tbBusinessCardID:t.data.showCardFlag?t.data.queryparams.businessid:wx.getStorageSync("businessCardId")?wx.getStorageSync("businessCardId"):0};e.buried(o,function(e){})}wx.setNavigationBarTitle({title:s.info.Title}),s.info.PublishTime=s.info.PublishTime.split(" ")[0],e.WxParse.wxParse("DetailInfo","html",s.info.Content,t,5),""==s.info.CommentList&&t.setData({isBlank:!0}),t.setData({newsInfo:s.info})}else t.setData({loseEfficacy:!0});else console.log("getNewsInfo fail："+s.msg)},fail:function(e){t.isloading=!1,console.log("getNewsInfo fail")}})}},sharetoFriend:function(){},getUserWhetherLike:function(t){var a=this,s=t.id,n=e.globalData.WebUserID?e.globalData.WebUserID:0;e.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=getUserWhetherLike&ArticleID="+s+"&UserID="+n,method:"GET",success:function(e){e.success?a.setData({hasLike:1==e.IsLike}):console.log("getUserWhetherLike fail"+e.msg)},fail:function(e){}})},addLike:function(){var t=this;if(t.data.hasLike)wx.showToast({title:"已为您标记为喜欢",icon:"none",mask:!0});else{var a=t.data.newsInfo.ArticleID,s=e.globalData.WebUserID?e.globalData.WebUserID:0;e.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=addLike",method:"POST",data:{ArticleID:a,UserID:s},success:function(n){if(n.success){var i=t.data.newsInfo;if(0!=s)if(wx.getStorageSync("businessCardInfo").admin)if(wx.getStorageSync("otherMemberCardId")){var o={tbUserID:s,tbType:"13",tbTypeID:a,tbTypeName:i.Title,tbTypeImg:i.ImgBig,tbBusinessCardID:wx.getStorageSync("otherMemberCardId")};e.buried(o,function(e){})}else{var r={tbUserID:s,tbType:"13",tbTypeID:a,tbTypeName:i.Title,tbTypeImg:i.ImgBig,tbBusinessCardID:0};e.buried(r,function(e){})}else{var d={tbUserID:s,tbType:"13",tbTypeID:a,tbTypeName:i.Title,tbTypeImg:i.ImgBig,tbBusinessCardID:t.data.showCardFlag?t.data.queryparams.businessid:wx.getStorageSync("businessCardId")?wx.getStorageSync("businessCardId"):0};e.buried(d,function(e){})}i.LikeCount=Number(i.LikeCount)+1,t.setData({newsInfo:i,hasLike:!0})}else e.showToast({title:n.msg,icon:"none"})},fail:function(e){}})}},toComment:function(t){var a=this;this.setData({articleuserid:e.globalData.WebUserID?e.globalData.WebUserID:0,articlesid:t.currentTarget.dataset.articleid});var s=wx.getStorageSync("hasMobile")||0,n=e.globalData.getMobileNode?e.globalData.getMobileNode.commentArticles:0;0===e.globalData.hasMobile&&0===s&&0!==n?this.setData({phonelicense:!0,phonestatus:2}):a.evaluate()},evaluate:function(){var t=this;e.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=getUserCommentCount&ArticleID="+t.data.articlesid+"&UserID="+t.data.articleuserid,method:"GET",success:function(a){a.success?0==a.IsComment?t.setData({showForm:!0}):e.showToast({title:"文章评论不能超过10条",icon:"none"}):e.showToast({title:a.msg,icon:"none"})},fail:function(e){}})},getSiteId:function(){var t=this;e.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=getSiteID",method:"GET",success:function(e){t.setData({cardsiteID:e.siteID})}})},loadData:function(t){var a=this;e.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=getBusinessCardInfoByCardID_Simple&BusinessCardID="+t,method:"GET",success:function(e){if(e.success){var t=e.info;t.PersonImg&&t.UserName&&t.Position&&a.setData({cardInfo:e.info,showCardFlag:!0})}else;},fail:function(e){console.log("getMyCenterData fail")},hideLoading:!0})},toCardDetail:function(){var t=this,a=t.data.queryparams.businessid,s=e.globalData.siteId,n=t.data.queryparams.userid;wx.navigateTo({url:"/pages/company/businessCard/cardDetails?BusinessCardID="+a+"&SiteID="+s+"&userid="+n})},sendComment:function(e){var t=e.detail.value.commentcontent;""!=t&&this.addComment(t)},inputComment:function(e){this.setData({commentcontent:e.detail.value})},sendclose:function(e){var t=this,a=e.detail.value;""==a?t.setData({canhold:!0}):(t.setData({canhold:!1}),t.addComment(a))},addComment:function(t){var a=this,s=a.data.newsInfo,n=s.ArticleID,i=e.globalData.WebUserID?e.globalData.WebUserID:0;e.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=getArticleconfig",method:"GET",success:function(o){o.success&&e.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=addComment",method:"POST",data:{ArticleID:n,UserID:i,Content:t},success:function(r){if(r.success){if(0!=i)if(wx.getStorageSync("businessCardInfo").admin)if(wx.getStorageSync("otherMemberCardId")){var d={tbUserID:i,tbType:"14",tbTypeID:n,tbTypeName:s.Title,tbTypeImg:s.ImgBig,tbBusinessCardID:wx.getStorageSync("otherMemberCardId")};e.buried(d,function(e){})}else{var l={tbUserID:i,tbType:"14",tbTypeID:n,tbTypeName:s.Title,tbTypeImg:s.ImgBig,tbBusinessCardID:0};e.buried(l,function(e){})}else{var u={tbUserID:i,tbType:"14",tbTypeID:n,tbTypeName:s.Title,tbTypeImg:s.ImgBig,tbBusinessCardID:a.data.showCardFlag?a.data.queryparams.businessid:wx.getStorageSync("businessCardId")?wx.getStorageSync("businessCardId"):0};e.buried(u,function(e){})}if(1==o.info.EnableCommentReviewMobile){if(0!=i){var c=e.globalData.userInfo.nickName,b=e.globalData.userInfo.avatarUrl;s.CommentList.push({nickname:c,comment:t,headurl:b})}else s.CommentList.push({nickname:"游客",comment:t,headurl:""});a.setData({isBlank:!1,newsInfo:s,showForm:!1,commentcontent:""})}else e.showToast({title:"审核通过后显示",icon:"none"}),a.setData({showForm:!1,commentcontent:""})}else;},fail:function(e){}})},fail:function(e){}})},touchstart:function(e){var t=this;""==e.target.id?t.setData({showForm:!1,commentcontent:""}):t.setData({showForm:!0})},addTranspond:function(t){var a=this;e.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=addTranspond",method:"POST",data:{ArticleID:t},success:function(e){var t=a.data.newsInfo;t.Transpond=Number(t.Transpond)+1,a.setData({newsInfo:t})},fail:function(e){}})},getPhoneNumber:function(t){var s=this,n=1;e.globalData.getMobileNode.readArticles;if(n=1===s.data.phonestatus?e.globalData.getMobileNode.readArticles:e.globalData.getMobileNode.commentArticles,t.detail.errMsg.indexOf("getPhoneNumber:ok")>-1){var i=e.globalData.appId,o=e.globalData.session_key,r=new a(i,o).decryptData(t.detail.encryptedData,t.detail.iv);e.loadphoneInfo(r.phoneNumber),s.data.articlesid&&s.evaluate()}else s.setData({authorization:2}),2===n?s.setData({allowspopup:!0}):s.data.articlesid&&s.evaluate()},abolish:function(){this.setData({allowspopup:!1})},turnOff:function(){e.turnOff()},preventD:function(){}}); 
 			}); 	require("pages/company/newsdetail.js");
 		__wxRoute = 'pages/company/caselist';__wxRouteBegin = true; 	define("pages/company/caselist.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),t=require("../../common.js");Page({isloading:!1,onShareAppMessage:function(){return a.shareAppMessage("/pages/company/caselist")},onLoad:function(e){var s=this;wx.setNavigationBarTitle({title:a.globalData.TitleName[4].TitleName}),a.getPageUrl(this,e),a.registerGlobalFunctions(this),wx.getSystemInfo({success:function(a){s.setData({imgWidth:(a.windowWidth-39)/2}),a.windowWidth}}),this.setData({queryparams:e,TitleName:a.globalData.TitleName}),this.loadCase(!0),t.setPopupFromShare()},onPullDownRefresh:function(){var a=this;a.data.pullDownRefreshFlag&&(a.isloading=!1,a.setData({pullDownRefreshFlag:!1}),a.data.pullDownRefreshFlag=!1,a.data.queryparams.refresh=!0,setTimeout(function(){a.onLoad(a.data.queryparams),a.setData({pullDownRefreshFlag:!0}),wx.stopPullDownRefresh()},1500))},data:{pullDownRefreshFlag:!0,falgAjax:!0,classid:0,pagesize:10,recordcount:99,caselist:[],sortcol:"",sort:"",hasproduct:!0,baseUrl:a.globalData.siteBaseUrl,animationData:{},plugNavFlag:!0,scrollHeight:a.windowHeight*a.pixelRatio,imgWidth:0,total:0},loadCase:function(t){var e=this;if(!e.isloading){e.isloading=!0;var s=e.data.total;t?(e.data.recordcount=99,e.setData({caselist:[]}),e.data.caselist=[]):void 0!=s&&(e.data.recordcount=s);var o=e.data.recordcount,i=e.data.caselist.length;if(o>i&&this.data.falgAjax){this.setData({falgAjax:!1});var l=Math.ceil(i/e.data.pagesize)+1,r=e.data.queryparams.keyword?e.data.queryparams.keyword:"",n="";e.data.sortcol&&(n="&sortcol="+e.data.sortcol+"&sort="+e.data.sort),a.sendRequest({url:"/index.php?c=Front/WxApp/ServiceApi&a=getCaseList&keyword="+r+"&page="+l+"&pagesize="+e.data.pagesize+n,method:"GET",success:function(a){if(e.isloading=!1,a.success){e.data.recordcount;for(var t=a.caselist,s=0;s<t.length;s++)e.data.caselist.push(a.caselist[s]);e.setData({caselist:e.data.caselist,recordcount:a.recordcount,hascase:a.caselist.length>0,falgAjax:!0,total:a.recordcount})}else console.log("getcaselist fail："+a.msg)},fail:function(a){e.isloading=!1,console.log("getcaselist fail")}})}}},goProductdetail:function(a){var t=a.currentTarget.dataset.caseid;wx.navigateTo({url:"casedetail?id="+t})},onProductListScroll:function(a){this.loadCase()},onReachBottom:function(){this.loadCase()},navBtnShowAndHide:function(){var a=!this.data.plugNavFlag;this.setData({plugNavFlag:a})}}); 
 			}); 	require("pages/company/caselist.js");
 		__wxRoute = 'pages/company/noticedetail';__wxRouteBegin = true; 	define("pages/company/noticedetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({isloading:!1,url:!1,onShareAppMessage:function(){return a.shareAppMessage({url:this.url,title:this.data.newsInfo.Title})},onLoad:function(t){var e=this;e.url=a.getPageUrl(e,t),a.registerGlobalFunctions(e),this.setData({queryparams:t}),this.loadNotice()},data:{baseUrl:a.globalData.siteBaseUrl,plugNavFlag:!0},loadNotice:function(){var t=this;if(!t.isloading){t.isloading=!0;t.data.queryparams.id&&t.data.queryparams.id,a.sendRequest({url:"/index.php?c=Front/WxApp/ServiceApi&a=getNotice",method:"GET",success:function(e){console.log(e),t.isloading=!1,e.success?(wx.setNavigationBarTitle({title:e.notice.Title}),a.WxParse.wxParse("NoticeDetail","html",e.notice.Detail,t,5),t.setData({notice:e.notice})):console.log("getNotice fail："+e.msg)},fail:function(a){t.isloading=!1,console.log("getNotice fail")}})}},navBtnShowAndHide:function(){var a=!this.data.plugNavFlag;this.setData({plugNavFlag:a})}}); 
 			}); 	require("pages/company/noticedetail.js");
 		__wxRoute = 'pages/company/casedetail';__wxRouteBegin = true; 	define("pages/company/casedetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),e=require("../../utils/imgutil.js"),t=require("../../common.js");Page({isloading:!1,bannerLoaded:!1,url:!1,onShareAppMessage:function(){return a.shareAppMessage({url:this.url,title:this.data.caseInfo.Name})},onLoad:function(e){var i=this;i.url=a.getPageUrl(i,e),a.registerGlobalFunctions(i),this.setData({queryparams:e}),this.loadCase(),t.setPopupFromShare()},data:{currentTab:0,bannerHeight:150,hasPrice:!0,productImgs:[],plugNavFlag:!0,baseUrl:a.globalData.siteBaseUrl},loadCase:function(){var e=this;if(!e.isloading){e.isloading=!0;var t=0;e.data.queryparams.id&&(t=e.data.queryparams.id),a.sendRequest({url:"/index.php?c=Front/WxApp/ServiceApi&a=getCaseInfo&id="+t,method:"GET",success:function(t){e.isloading=!1,t.success?(wx.setNavigationBarTitle({title:t.info.Name}),a.WxParse.wxParse("DetailInfo","html",t.info.Detail,e,5),e.setData({caseInfo:t.info})):console.log("getProductInfo fail："+t.msg)},fail:function(a){e.isloading=!1,console.log("getProductInfo fail")}})}},onBannerImgLoad:function(a){var t=this,i=e.imageUtil(a);0==t.bannerLoaded&&(t.setData({bannerHeight:i.imageHeight}),t.bannerLoaded=!0)},navbarTap:function(a){this.setData({currentTab:a.currentTarget.dataset.idx})},navBtnShowAndHide:function(){var a=!this.data.plugNavFlag;this.setData({plugNavFlag:a})}}); 
 			}); 	require("pages/company/casedetail.js");
 		__wxRoute = 'pages/company/custompage';__wxRouteBegin = true; 	define("pages/company/custompage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),e=require("../../common.js");Page({data:{pullDownRefreshFlag:!0},onPullDownRefresh:function(){var a=this;a.data.pullDownRefreshFlag&&(a.setData({pullDownRefreshFlag:!1}),a.data.pullDownRefreshFlag=!1,a.data.optionsData.refresh=!0,setTimeout(function(){a.onLoad(a.data.optionsData),a.setData({pullDownRefreshFlag:!0}),wx.stopPullDownRefresh()},1500))},yijiandaohhang:function(a){for(var e,t,o=a.currentTarget.dataset.hi,n=o[0].Latitude,r=o[0].Longitude,l=0;l<o.length;l++)1==o[l].Type&&(e=o[l].Text,t=o[l].Title);wx.openLocation({name:t,address:e,longitude:Number(r),latitude:Number(n)})},yijianbohao:function(a){var e=a.currentTarget.dataset.iphone;wx.makePhoneCall({phoneNumber:e})},onLoad:function(a){this.setData({optionsData:a}),a.page="CustomPage_"+a.id,e.registerGlobalFunc(),e.loadPageModules(a)},onPageScroll:function(){},onShareAppMessage:function(){return a.shareAppMessage({url:this.data.url,title:this.data.pageTitle})}}); 
 			}); 	require("pages/company/custompage.js");
 		__wxRoute = 'pages/company/businessCard/shareCard';__wxRouteBegin = true; 	define("pages/company/businessCard/shareCard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=require("../../../common.js");Page({isloading:!1,url:!1,data:{baseUrl:e.globalData.siteBaseUrl,isSuccess:!1,canSave:!0},onLoad:function(a){var n=this;e.registerGlobalFunctions(n),t.initCommonModules(),this.setData({queryparams:a,scrviewFlag:!1,companyName:a.companyName,cardid:a.id,siteid:a.SiteID,username:a.username,position:a.position,baseUrl:e.globalData.siteBaseUrl,mobile:a.mobile,email:a.email,personImg:a.personImg,nothingHeight:wx.getSystemInfoSync().windowHeight}),wx.getSystemInfo({success:function(e){wx.setStorageSync("userSystemInfo",e)}}),this.downLoadImg(),this.getQrCode()},onShow:function(){var e=this;wx.getSetting({success:function(t){""!=wx.getStorageSync("canSaveImg")&&"false"==wx.getStorageSync("canSaveImg")&&(t.authSetting["scope.writePhotosAlbum"]?e.setData({canSave:!0}):e.setData({canSave:!1}))}})},downLoadImg:function(){var e=this,t=e.data.baseUrl+"/images/wxapp/wxapp_code_text.png",a=e.data.baseUrl+"/images/wxapp/wxapp_code_err.png";wx.downloadFile({url:t,success:function(t){e.setData({codeTextImg:t.tempFilePath},function(){wx.downloadFile({url:a,success:function(t){e.setData({errTextImg:t.tempFilePath})}})})}})},getQrCode:function(){var t=this;e.sendRequest({url:"/index.php?c=Front/WxApp/BaseApi&a=getBusinessCardQrCode&ID="+t.data.cardid,method:"GET",success:function(e){t.data.email?t.drawImage(e):t.drawImageOther(e)},fail:function(e){},hideLoading:!0})},drawImage:function(e){var t=this;wx.showLoading({title:"加载中...",mask:!0});var a=t.data.baseUrl+t.data.personImg,n=wx.getStorageSync("userSystemInfo").screenWidth,s=Math.round(13/375*n),i=n/750*630,o=n/750*940;t.setData({canvasWidth:parseInt(i),canvasHeight:parseInt(o),buttonTop:parseInt(o)+24});var r="normal bold "+s+"px sans-serif",l=wx.createCanvasContext("myCanvas");l.setFillStyle("white"),l.fillRect(0,0,i,o);var d=280/375*n,c=.08*n+i,g=.04*n,u=.064*n,m=t.data.companyName,h=t.data.username,f=t.data.position,w=t.data.mobile,x=t.data.email,S=(l.measureText("一").width,d-l.measureText("一").width),p=0,y=0,v=1;l.setFontSize(14),l.setFillStyle("#333");for(var I=0;I<m.length;I++){if(p+=l.measureText(m[I]).width,v>1&&(d=S),p>d){if(l.fillText(m.substring(y,I),g,c),v>1){var T=g+l.measureText(m.substring(y,I)).width;l.fillText("…",T,c);break}c+=u,p=l.measureText("一").width,y=I,v++}I==m.length-1&&l.fillText(m.substring(y,I+1),g,c)}for(var F=c+u+16/375*n,b=c+u+17/375*n,D=0,C=0;C<h.length;C++)D+=l.measureText(h[C]).width;var P=g+(Math.round(D)+12)/375*n,L=Math.round(11/375*n);l.setFontSize(L),l.setFillStyle("#999"),l.fillText(f,P,b);var b=b+38/375*n,L=Math.round(.032*n);l.setFontSize(L),l.setFillStyle("#333"),l.fillText(w,g,b),wx.setStorageSync("deposited",b);var b=b+23/375*n,L=Math.round(.032*n);l.setFontSize(L),l.setFillStyle("#333"),l.fillText(x,g,b),wx.downloadFile({url:a,success:function(a){l.drawImage(a.tempFilePath,0,0,i,i),e.success?wx.downloadFile({url:e.data.product_qrcode,success:function(e){m=0;wx.getStorageSync("deposited")&&(m=wx.getStorageSync("deposited"));var a=e.tempFilePath,s=220/375*n,d=m-68/375*n,c=.2*n;l.drawImage(a,s,d,c,c);var u=t.data.codeTextImg,m=d+86/375*n,f=.576*n,w=80/375*n,x=10/375*n;l.drawImage(u,f,m,w,x),setTimeout(function(){var e=Math.round(.04*n);l.setFontSize(e),r="normal bold "+e+"px sans-serif",l.font=r,l.setFillStyle("#333333"),l.fillText(h,g,F),l.draw(!1,function(){wx.canvasToTempFilePath({x:0,y:0,width:i,height:o,destWidth:i*wx.getStorageSync("userSystemInfo").pixelRatio,destHeight:o*wx.getStorageSync("userSystemInfo").pixelRatio,quality:1,fileType:"png",canvasId:"myCanvas",success:function(e){t.setData({shareImage:e.tempFilePath,changeImageShow:!0}),setTimeout(function(){wx.hideLoading(),t.setData({hideCanvas:!0}),wx.getStorageSync("userSystemInfo").system.split(" ")[0]},1e3)},fail:function(e){wx.hideLoading()}})})},2e3)},fail:function(e){console.log(e,"缓存二维码图片失败")}}):wx.downloadFile({url:t.data.baseUrl+"/images/wxapp/unpublished.png",success:function(e){u=0;wx.getStorageSync("deposited")&&(u=wx.getStorageSync("deposited"));var a=226/375*n,s=u-62/375*n,d=65/375*n;l.drawImage(e.tempFilePath,a,s,d,d);var c=t.data.errTextImg,u=s+86/375*n,m=.576*n,f=80/375*n,w=10/375*n;l.drawImage(c,m,u,f,w),setTimeout(function(){var e=Math.round(.04*n);l.setFontSize(e),r="normal bold "+e+"px sans-serif",l.font=r,l.setFillStyle("#333333"),l.fillText(h,g,F),l.draw(!1,function(){wx.canvasToTempFilePath({x:0,y:0,width:i,height:o,destWidth:i*wx.getStorageSync("userSystemInfo").pixelRatio,destHeight:o*wx.getStorageSync("userSystemInfo").pixelRatio,quality:1,fileType:"png",canvasId:"myCanvas",success:function(e){t.setData({shareImage:e.tempFilePath,changeImageShow:!0}),setTimeout(function(){wx.hideLoading(),t.setData({hideCanvas:!0}),wx.getStorageSync("userSystemInfo").system.split(" ")[0]},1e3)},fail:function(e){wx.hideLoading()}})})},2e3)},fail:function(e){console.log(e,"缓存二维码图片失败")}})},fail:function(e){console.log(e,"缓存产品图片失败")}})},drawImageOther:function(e){var t=this;wx.showLoading({title:"加载中...",mask:!0});var a=t.data.baseUrl+t.data.personImg,n=wx.getStorageSync("userSystemInfo").screenWidth,s=Math.round(13/375*n),i=n/750*630,o=n/750*940;t.setData({canvasWidth:parseInt(i),canvasHeight:parseInt(o),buttonTop:parseInt(o)+24});var r="normal bold "+s+"px sans-serif",l=wx.createCanvasContext("myCanvas");l.setFillStyle("white"),l.fillRect(0,0,i,o);var d=280/375*n,c=.08*n+i,g=.04*n,u=.064*n,m=t.data.companyName,h=t.data.username,f=t.data.position,w=t.data.mobile,x=(l.measureText("一").width,d-l.measureText("一").width),S=0,p=0,y=1;l.setFontSize(14),l.setFillStyle("#333");for(var v=0;v<m.length;v++){if(S+=l.measureText(m[v]).width,y>1&&(d=x),S>d){if(l.fillText(m.substring(p,v),g,c),y>1){var I=g+l.measureText(m.substring(p,v)).width;l.fillText("…",I,c);break}c+=u,S=l.measureText("一").width,p=v,y++}v==m.length-1&&l.fillText(m.substring(p,v+1),g,c)}for(var T=c+u+26/375*n,F=c+u+.072*n,b=0,D=0;D<h.length;D++)b+=l.measureText(h[D]).width;var C=g+(Math.round(b)+12)/375*n,P=Math.round(11/375*n);l.setFontSize(P),l.setFillStyle("#999"),l.fillText(f,C,F);var F=F+.08*n,P=Math.round(.032*n);l.setFontSize(P),l.setFillStyle("#333"),l.fillText(w,g,F),wx.setStorageSync("deposited",F),wx.downloadFile({url:a,success:function(a){l.drawImage(a.tempFilePath,0,0,i,i),e.success?wx.downloadFile({url:e.data.product_qrcode,success:function(e){m=0;wx.getStorageSync("deposited")&&(m=wx.getStorageSync("deposited"));var a=e.tempFilePath,s=220/375*n,d=m-68/375*n,c=.2*n;l.drawImage(a,s,d,c,c);var u=t.data.codeTextImg,m=d+86/375*n,f=.576*n,w=80/375*n,x=10/375*n;l.drawImage(u,f,m,w,x),setTimeout(function(){var e=Math.round(.04*n);l.setFontSize(e),r="normal bold "+e+"px sans-serif",l.font=r,l.setFillStyle("#333333"),l.fillText(h,g,T),l.draw(!1,function(){wx.canvasToTempFilePath({x:0,y:0,width:i,height:o,destWidth:i*wx.getStorageSync("userSystemInfo").pixelRatio,destHeight:o*wx.getStorageSync("userSystemInfo").pixelRatio,quality:1,fileType:"png",canvasId:"myCanvas",success:function(e){t.setData({shareImage:e.tempFilePath,changeImageShow:!0}),setTimeout(function(){wx.hideLoading(),t.setData({hideCanvas:!0}),wx.getStorageSync("userSystemInfo").system.split(" ")[0]},1e3)},fail:function(e){wx.hideLoading()}})})},2e3)},fail:function(e){console.log(e,"缓存二维码图片失败")}}):wx.downloadFile({url:t.data.baseUrl+"/images/wxapp/unpublished.png",success:function(e){u=0;wx.getStorageSync("deposited")&&(u=wx.getStorageSync("deposited"));var a=226/375*n,s=u-.16*n,d=65/375*n;l.drawImage(e.tempFilePath,a,s,d,d);var c=t.data.errTextImg,u=s+86/375*n,m=.576*n,f=80/375*n,w=10/375*n;l.drawImage(c,m,u,f,w),setTimeout(function(){var e=Math.round(.04*n);l.setFontSize(e),r="normal bold "+e+"px sans-serif",l.font=r,l.setFillStyle("#333333"),l.fillText(h,g,T),l.draw(!1,function(){wx.canvasToTempFilePath({x:0,y:0,width:i,height:o,destWidth:i*wx.getStorageSync("userSystemInfo").pixelRatio,destHeight:o*wx.getStorageSync("userSystemInfo").pixelRatio,quality:1,fileType:"png",canvasId:"myCanvas",success:function(e){t.setData({shareImage:e.tempFilePath,changeImageShow:!0}),setTimeout(function(){wx.hideLoading(),t.setData({hideCanvas:!0}),wx.getStorageSync("userSystemInfo").system.split(" ")[0]},1e3)},fail:function(e){wx.hideLoading()}})})},2e3)},fail:function(e){console.log(e,"缓存二维码图片失败")}})},fail:function(e){console.log(e,"缓存产品图片失败")}})},ontranspond:function(){var t=this;e.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=updateShareForwardingAmount&ID="+t.data.cardid+"&SiteID="+t.data.siteid,method:"GET",success:function(e){t.isloading=!1,e.success},fail:function(e){t.isloading=!1},hideLoading:!0})},saveImageToPhotosAlbum:function(){wx.showLoading({title:"保存中...",mask:!0});var e=this;wx.saveImageToPhotosAlbum({filePath:e.data.shareImage,success:function(t){e.ontranspond(),wx.hideLoading(),wx.setStorageSync("canSaveImg","true"),wx.showToast({title:"已保存到相册",icon:"success"})},fail:function(t){(t.errMsg.indexOf("auth deny")>-1||t.errMsg.indexOf("auth denied")>-1)&&(e.setData({canSave:!1}),wx.setStorageSync("canSaveImg","false")),wx.hideLoading()}})},clickImage:function(e){var t=e.target.dataset.src;wx.previewImage({current:t,urls:[t],fail:function(){console.log("fail")},complete:function(){console.info("点击图片了")}}),wx.hideLoading()},openSet:function(){wx.getStorageSync("userSystemInfo")&&this.compareVersion("2.0.7",wx.getStorageSync("userSystemInfo").SDKVersion)>-1&&wx.openSetting({})},compareVersion:function(e,t){e=e.split("."),t=t.split(".");for(var a=Math.max(e.length,t.length);e.length<a;)e.push("0");for(;t.length<a;)t.push("0");for(var n=0;n<a;n++){var s=parseInt(e[n]),i=parseInt(t[n]);if(s>i)return 1;if(s<i)return-1}return 0}}); 
 			}); 	require("pages/company/businessCard/shareCard.js");
 		__wxRoute = 'pages/company/businessCard/editCard';__wxRouteBegin = true; 	define("pages/company/businessCard/editCard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=wx.getRecorderManager(),a=require("../AddrManage.js");Page({isloading:!1,bannerLoaded:!1,url:!1,innerAudioContext:"",data:{baseUrl:t.globalData.siteBaseUrl,ellipsis:!1,currentPosition:"",mycarsrc:"",upload_picture_list:[],evalList:[{tempFilePaths:[],imgList:[]}],picture_list:[],showView:!1,PersonImg:"",mark:"0",cardcolor:!1,formSubmitFlag:!0,haveRecording:!1,isPlay:!1,audioSrc:"",showToastFlag:!1,audioFile:"",recordAuthMethod:2,isLongPress:!1},getLength:function(t,e){for(var a=0,o=null===t?"":t.length,i=-1,n=0;n<o;n++)a+=(i=t.charCodeAt(n))>=0&&i<=128?1:2;return a>e},onShow:function(){var t=this,e=wx.getStorageSync("mydata");t.setData({bb:e,recordAuthMethod:2,isLongPress:!1}),t.data.bb&&(t.setData({mycarsrc:t.data.bb.avatar}),t.gosavePersonal())},onLoad:function(e){var o=this,i=wx.getStorageSync("resultData");this.innerAudioContext=wx.createInnerAudioContext(),o.setData({SiteID:t.globalData.baseInfo.SiteID,optionsobj:e,sign:e.sign?e.sign:"",mark:e.mark?e.mark:"0"}),o.addrManage=new a({page:o,onSelected:o.onAddrManageClick}),i&&o.setData({lat:i.result.location.lat,lng:i.result.location.lng}),o.cardEditor()},onUnload:function(){wx.removeStorageSync("mydata"),this.innerAudioContext.destroy()},getUserSetting:function(){var t=this;(1==t.data.recordAuthMethod||wx.getStorageSync("isSecondClick"))&&wx.getSetting({success:function(e){e.authSetting["scope.record"]?(console.log("onshow已经授权"),t.setData({recordAuthMethod:2})):t.setData({recordAuthMethod:1})},fail:function(e){console.log("onshow未授权"),t.setData({recordAuthMethod:1})}})},unfold:function(){var t=!this.data.ellipsis;this.setData({ellipsis:t})},joinPicture:function(t){t.currentTarget.dataset.index,this.data.evalList;var e=this,a=e.data.upload_picture_list,o=9-a.length;e.chooseWxImage(a,o)},chooseWxImage:function(t,e){var a=this,o=t.length,a=this,i=[];wx.chooseImage({count:e,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){var e=t.tempFilePaths,n=e.length;if(o+n>=9)for(var s=9-o,l=0;l<s;l++)(d={}).pic=e[l],i.push(d);else for(var r=0;r<n;r++){var d={};d.pic=e[r],i.push(d)}a.upLoadImg(i)}})},upLoadImg:function(t){var e=this;this.upload(e,t)},uploadImgData:function(e,a,o){var i=this;t.uploadRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=UploadImage",filePath:e,name:"imageFile",hideLoading:!0,formData:{upload_type:"2"},header:{"Content-Type":"multipart/form-data"},success:function(t){var e=JSON.parse(t);if(e.success)(n=a&&a(e.info.path))&&i.uploadImgData(n,a,o);else{var n=o&&o(e.msg);n&&i.uploadImgData(n,a,o)}},fail:function(t){o&&o(!1,t),wx.showModal({title:"提示",content:"上传失败",showCancel:!1})}})},upload:function(t,e){if(e&&e.length){var a=this,o=0,i=0,n=0,s=e.length,l="";wx.showLoading({title:"正在上传中",mask:!0}),this.setData({formSubmitFlag:!1}),a.uploadImgData(e[n].pic,function(t){if(o++,n++,a.data.upload_picture_list.push(t),a.setData({upload_picture_list:a.data.upload_picture_list}),n!==s)return e[n].pic;a.setData({formSubmitFlag:!0});var r="";i&&(r="上传成功："+o+"，上传失败："+i+(l?"，上传失败原因："+l:"")),a.getSucImgData(r,function(){wx.hideLoading()})},function(t){if(!t&&"boolean"==typeof t)return a.setData({formSubmitFlag:!0}),void wx.hideLoading();if(l=t,i++,++n!==s)return e[n].pic;a.setData({formSubmitFlag:!0});var r="";i&&(r="上传成功："+o+"，上传失败："+i+(l?"，上传失败原因："+l:"")),a.getSucImgData(r,function(){wx.hideLoading()})})}},getSucImgData:function(t,e){e&&e(),t&&wx.showModal({title:"提示",content:t,showCancel:!1})},uploadplp:function(){var t=this;wx.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var a=e.tempFilePaths[0];wx.navigateTo({url:"upload?src="+a+"&ID="+t.data.optionsobj.ID+"&CompanyName="+t.data.CompanyName+"&UserName="+t.data.UserName+"&Mobile="+t.data.Mobile+"&Position="+t.data.Position+"&WeChat="+t.data.WeChat+"&QQ="+t.data.QQ+"&selectedArea="+t.data.selectedArea+"&currentPosition="+t.data.currentPosition+"&Email="+t.data.Email+"&mark="+t.data.mark})}})},closepic:function(t){var e=this,a=t.target.dataset.index;e.data.upload_picture_list.splice(a,1),e.setData({upload_picture_list:e.data.upload_picture_list})},gosavePersonal:function(){var e=this;t.uploadRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=UploadImage",filePath:e.data.mycarsrc,name:"imageFile",formData:{upload_type:"1"},success:function(t){var a=JSON.parse(t);e.setData({PersonImg:a.info.path})},fail:function(t){}})},cardEditor:function(){var e=this;t.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=getBusinessCard&ID="+e.data.optionsobj.ID+"&SiteID="+e.data.SiteID,method:"GET",success:function(t){if(e.isloading=!1,t.success){if(t.info){e.data.optionsobj;"1"===e.data.sign?e.setData({cardcontent:t.info,CompanyName:e.data.optionsobj.CompanyName,Mobile:e.data.optionsobj.Mobile,Position:e.data.optionsobj.Position,UserName:e.data.optionsobj.UserName,QQ:e.data.optionsobj.QQ,WeChat:e.data.optionsobj.WeChat,selectedArea:e.data.optionsobj.selectedArea,Email:e.data.optionsobj.Email,currentPosition:e.data.optionsobj.currentPosition,upload_picture_list:t.info.MoreImg?t.info.MoreImg:[],Bio:t.info.Bio}):(e.setData({cardcontent:t.info,CompanyName:null===t.info.CompanyName?"":t.info.CompanyName,QQ:null===t.info.QQ?"":t.info.QQ,Email:null===t.info.Email?"":t.info.Email,selectedArea:t.info.AreaList?t.info.AreaList:"",WeChat:null===t.info.WeChat?"":t.info.WeChat,Mobile:null===t.info.Mobile?"":t.info.Mobile,Position:null===t.info.Position?"":t.info.Position,UserName:null===t.info.UserName?"":t.info.UserName,currentPosition:null===t.info.Address?"":t.info.Address,upload_picture_list:t.info.MoreImg?t.info.MoreImg:[],Bio:t.info.Bio,audioSrc:t.info.Recording}),null==t.info.AreaList&&null==t.info.AreaList||e.setData({cardcolor:!0}),t.info.PersonImg&&e.setData({mycarsrc:e.data.baseUrl+t.info.PersonImg,PersonImg:t.info.PersonImg})),t.info.Recording&&e.setData({haveRecording:!0,RecordingTime:t.info.RecordingTime})}}else;},fail:function(t){e.isloading=!1}})},formSubmit:function(e){if(this.data.formSubmitFlag){var a=this,o=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,i=/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,n=/^1[0-9]{10}$/,s="",l=a.data.optionsobj.ID,r=e.detail.value.companyname,d=e.detail.value.compellation,u=e.detail.value.post,c=e.detail.value.telephone,h=e.detail.value.wechat,f=e.detail.value.qq,g=e.detail.value.location,p=e.detail.value.email,m=e.detail.value.AreaList,w=a.data.PersonImg,x=e.detail.value.Bio,v=a.data.lat,D=a.data.lng;null!=a.data.upload_picture_list&&""!=a.data.upload_picture_list&&(s=a.data.upload_picture_list.join(","));var S=s;if(0==e.detail.value.companyname.length)wx.showToast({title:"请输入公司名",icon:"none",duration:1500}),setTimeout(function(){wx.hideToast()},2e3);else if(a.getLength(e.detail.value.companyname,40))wx.showToast({title:"公司名限20个汉字",icon:"none",duration:1500}),setTimeout(function(){wx.hideToast()},2e3);else if(0==e.detail.value.compellation.length)wx.showToast({title:"请输入姓名",icon:"none",duration:1500}),setTimeout(function(){wx.hideToast()},2e3);else if(a.getLength(e.detail.value.compellation,12))wx.showToast({title:"姓名限6个汉字",icon:"none",duration:1500}),setTimeout(function(){wx.hideToast()},2e3);else if(0==e.detail.value.telephone.length)wx.showToast({title:"请输入电话",icon:"none",duration:1500}),setTimeout(function(){wx.hideToast()},2e3);else if(""==e.detail.value.email||o.test(e.detail.value.email))if(""==e.detail.value.telephone||n.test(e.detail.value.telephone))if(0==e.detail.value.post.length)wx.showToast({title:"请输入职位",icon:"none",duration:1500}),setTimeout(function(){wx.hideToast()},2e3);else if(a.getLength(e.detail.value.post,20))wx.showToast({title:"职位限10个汉字",icon:"none",duration:1500}),setTimeout(function(){wx.hideToast()},2e3);else if(""==e.detail.value.wechat||i.test(e.detail.value.wechat))if(a.getLength(e.detail.value.qq,20))wx.showToast({title:"QQ限20个汉字",icon:"none",duration:1500}),setTimeout(function(){wx.hideToast()},2e3);else if(""===a.data.mycarsrc)wx.showToast({title:"请上传个人照片",icon:"none",duration:1500}),setTimeout(function(){wx.hideToast()},2e3);else{wx.showLoading({title:"保存中...",mask:!0});var T={ID:l,CompanyName:r,Email:p,UserName:d,Position:u,Mobile:c,WeChat:h,QQ:f,Address:g,PersonImg:w,MoreImg:S,lat:v,lng:D,AreaList:m,Bio:x};a.data.audioFile?a.toUploadRecord(a.data.audioFile,function(t){T.Recording=t,a.saveBusiness(T,function(t){wx.hideLoading()})},function(e){T.Recording=a.data.audioSrc,t.showToast({title:e,icon:"none"}),a.saveBusiness(T,function(t){wx.hideLoading()})}):(T.Recording=a.data.audioSrc,a.saveBusiness(T,function(t){wx.hideLoading()})),a.data.upload_picture_list=[]}else wx.showToast({title:"请输入正确微信号",icon:"none",duration:1500}),setTimeout(function(){wx.hideToast()},2e3);else wx.showToast({title:"请输入正确的电话号码",icon:"none",duration:1500}),setTimeout(function(){wx.hideToast()},2e3);else wx.showToast({title:"请输入正确的邮箱",icon:"none",duration:1500}),setTimeout(function(){wx.hideToast()},2e3)}},saveBusiness:function(e,a){var o=this;t.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=save",method:"POST",data:e,hideLoading:!0,success:function(t){if(o.isloading=!1,a&&a(t),t.success)if("地址解析接口请求失败!"===t.msg)wx.showToast({title:"您输入的地址有误，请重新输入",icon:"none",duration:1500});else if(wx.removeStorageSync("mydata"),wx.showToast({title:"上传成功",icon:"none",duration:1500}),wx.setStorageSync("editCardSuccessOnMycenter",!0),wx.setStorageSync("editCardSuccessOnIndex",!0),"1"===o.data.mark){var e=getCurrentPages()[getCurrentPages().length-2];e&&e.setData({backselectFlag:!0}),wx.navigateBack({delta:1})}else wx.redirectTo({url:"cardDetails?BusinessCardID="+o.data.optionsobj.ID+"&business=1"});else wx.showToast({title:t.msg,icon:"none",duration:1500})},fail:function(t){err,err(),o.isloading=!1}})},Inputcompanyname:function(t){this.setData({CompanyName:t.detail.value})},Inputcompellation:function(t){this.setData({UserName:t.detail.value})},Inputtelephone:function(t){this.setData({Mobile:t.detail.value})},Inputpost:function(t){this.setData({Position:t.detail.value})},Inputqq:function(t){this.setData({QQ:t.detail.value})},InputweChat:function(t){this.setData({WeChat:t.detail.value})},Inputemail:function(t){this.setData({Email:t.detail.value})},InputcurrentPosition:function(t){this.setData({currentPosition:t.detail.value})},start:function(){var t=this,a={sampleRate:16e3,numberOfChannels:1,encodeBitRate:96e3,format:"mp3",frameSize:50};wx.getStorageSync("isSecondClick")?wx.getSetting({success:function(o){o.authSetting["scope.record"]?(console.log("onshow已经授权"),t.setData({recordAuthMethod:2}),t.setData({isLongPress:!0}),e.start(a),e.onStart(function(){console.log("recorder start"),t.setData({showToastFlag:!0})}),e.onError(function(e){console.log(e,"错误回调"),(e.errMsg.indexOf("auth deny")>-1||e.errMsg.indexOf("auth denied")>-1)&&t.setData({recordAuthMethod:1}),t.setData({showToastFlag:!1}),wx.setStorageSync("isSecondClick",!0)})):wx.openSetting({})},fail:function(t){console.log("onshow未授权"),wx.openSetting({})}}):(t.setData({isLongPress:!0}),e.start(a),e.onStart(function(){console.log("recorder start"),t.setData({showToastFlag:!0})}),e.onError(function(e){console.log(e,"错误回调"),(e.errMsg.indexOf("auth deny")>-1||e.errMsg.indexOf("auth denied")>-1)&&t.setData({recordAuthMethod:1}),t.setData({showToastFlag:!1}),wx.setStorageSync("isSecondClick",!0)}))},stop:function(){var t=this;e.stop(),e.onStop(function(e){t.setData({haveRecording:!0,showToastFlag:!1,audioFile:e.tempFilePath,RecordingTime:t.formseconds(e.duration),isPlay:!1,isLongPress:!1}),t.innerAudioContext.pause(),console.log("停止录音",e);e.tempFilePath})},longTap:function(){console.log("longTap...."),this.start()},touchStart:function(){console.log("touchStart....")},touchEnd:function(){console.log("touchEnd....");var t=this;t.data.isLongPress&&(this.stop(),t.setData({showToastFlag:!1}))},openSet:function(){var e=wx.getSystemInfoSync().SDKVersion;t.compareVersion("2.0.7",e)>-1&&wx.openSetting({})},play:function(){var t=this;t.data.isPlay?(t.innerAudioContext.pause(),t.setData({isPlay:!1})):(t.data.audioFile?t.innerAudioContext.src=t.data.audioFile:t.innerAudioContext.src=t.data.baseUrl+t.data.audioSrc,t.innerAudioContext.play(),t.innerAudioContext.onPlay(function(){t.setData({isPlay:!0}),console.log("开始播放")}),t.innerAudioContext.onEnded(function(){console.log("播放结束"),t.setData({isPlay:!1})}),t.innerAudioContext.onError(function(t){console.log(t.errMsg),console.log(t.errCode)}))},toUploadRecord:function(e,a,o){var i=t.globalData.WebUserID;t.uploadRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=UploadRecording",filePath:e,name:"file",hideLoading:!0,formData:{UserID:i},header:{"Content-Type":"multipart/form-data"},success:function(t){var e=JSON.parse(t);e.success?a&&a(e.path):o&&o(e.msg)},fail:function(t){o&&o(!1,t),wx.showModal({title:"提示",content:"上传失败",showCancel:!1})}})},inputBio:function(t){this.setData({Bio:t.detail.value})},deleteRecord:function(){var e=this;t.showModal({title:"提示",content:"确定删除吗？",showCancel:!0,confirm:function(t){t.confirm&&e.setData({haveRecording:!1,audioFile:"",audioSrc:""})}})},formseconds:function(t){var e;return t&&(t/=1e3,e=(parseInt(t%3600/60)>9?parseInt(t%3600/60):"0"+parseInt(t%3600/60))+":"+(parseInt(t%3600%60)>9?parseInt(t%3600%60):"0"+parseInt(t%3600%60))),e}}); 
 			}); 	require("pages/company/businessCard/editCard.js");
 		__wxRoute = 'pages/company/businessCard/upload';__wxRouteBegin = true; 	define("pages/company/businessCard/upload.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return t&&t.__esModule?t:{default:t}}(require("../../common/we-cropper/dist/weCropper.js")),o=wx.getSystemInfoSync(),e=o.windowWidth+2,r=o.windowHeight+100;Page({data:{cropperOpt:{id:"cropper",targetId:"targetCropper",pixelRatio:o.pixelRatio,width:e,height:r,scale:2.5,zoom:8,cut:{x:(e-300)/2,y:(r-300-48-50)/2,width:300,height:300}}},onLoad:function(o){var e=this.data.cropperOpt,r=o.src;r&&(Object.assign(e,{src:r}),this.setData({optionsobj:o})),this.cropper=new t.default(e).on("ready",function(t){}).on("beforeImageLoad",function(t){wx.showToast({title:"上传中",icon:"loading",duration:2e4})}).on("imageLoad",function(t){wx.hideToast()})},touchStart:function(t){this.cropper.touchStart(t)},touchMove:function(t){this.cropper.touchMove(t)},touchEnd:function(t){this.cropper.touchEnd(t)},getCropperImage:function(t){this.cropper.getCropperImage(function(t){t?wx.setStorage({key:"mydata",data:{avatar:t},success:function(){wx.navigateBack({})}}):console.log("获取图片失败，请稍后重试")})},uploadTap:function(){var t=this;wx.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(o){var e=o.tempFilePaths[0];t.cropper.pushOrign(e)}})}}); 
 			}); 	require("pages/company/businessCard/upload.js");
 		__wxRoute = 'pages/company/businessCard/cardcase';__wxRouteBegin = true; 	define("pages/company/businessCard/cardcase.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({isloading:!1,data:{baseUrl:a.globalData.siteBaseUrl,incard:!1,isBinding:!1,currentPage:1,sum_page:1},onLoad:function(t){var s=this;s.setData({cardsiteID:a.globalData.baseInfo.SiteID,userID:a.globalData.WebUserID,optionsobj:t}),s.loadData()},businessCards:function(){var a=this;a.data.goToInfo?wx.reLaunch({url:"/pages/company/businessCard/workbench?BusinessCardID="+a.data.mycard}):wx.navigateTo({url:"editCard?ID="+a.data.mycard+"&mark=0"})},loadData:function(){var t=this;t.isloading||(t.isloading=!0,a.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=getBusinessCardAttentionList&UserID="+t.data.userID+"&SiteID="+t.data.cardsiteID+"&page="+t.data.currentPage,method:"GET",success:function(a){t.isloading=!1,a.success&&(0===a.info.list.length?t.setData({incard:!0}):t.setData({incard:!1}),t.setData({cardcontent:a.info.list,mycard:a.info.businessCardID,isBinding:a.info.isBindingMember,goToInfo:a.info.goToInfo}))},fail:function(a){t.isloading=!1},hideLoading:!0}))},cardDetails:function(a){var t=a.currentTarget.dataset.id;wx.reLaunch({url:"cardDetails?BusinessCardID="+t+"&business=0"})},onReachBottom:function(a){var t=this,s=null;if(s=t.data.current_page+1,t.setData({current_page:s}),s<=t.data.sum_page)wx.showToast({title:"加载中！",icon:"loading",duration:1e3}),t.getwcinfo();else if(s>t.data.sum_page)return void wx.showToast({title:"数据已加载完",icon:"loading",duration:1e3})},sendMessage:function(t){t.detail.formId,t.detail.target.dataset.id,a.globalData.WebUserID}}); 
 			}); 	require("pages/company/businessCard/cardcase.js");
 		__wxRoute = 'pages/company/businessCard/accessRecord';__wxRouteBegin = true; 	define("pages/company/businessCard/accessRecord.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp();Page({data:{pullDownRefreshFlag:!0,isclose:!1,page:1,SiteID:"",ID:"",recordcount:99,recordList:[],falgAjax:!0,baseUrl:e.globalData.siteBaseUrl,isBlank:!1,pagesize:10,recordTimeList:[],shape:!1,currentUserID:""},onPullDownRefresh:function(){var e=this;e.data.pullDownRefreshFlag&&(e.setData({pullDownRefreshFlag:!1}),e.data.pullDownRefreshFlag=!1,e.data.optionsObj&&(e.data.optionsObj.refresh=!0),setTimeout(function(){e.getList(!0),e.setData({pullDownRefreshFlag:!0}),wx.stopPullDownRefresh()},1500))},onLoad:function(t){var a=this;t.ID?a.setData({ID:t.ID}):a.setData({ID:e.globalData.businessCardInfo.businessCardID}),e.globalData&&e.globalData.siteId&&a.setData({SiteID:e.globalData.siteId}),this.getList(!0)},onShow:function(){},PullloadData:function(){this.getList()},getList:function(t){var a=this;t&&(a.data.recordcount=99,a.data.recordList=[]);var s=a.data.recordcount,o=a.data.recordList.length;if(s>o&&a.data.falgAjax){a.setData({falgAjax:!1});var r=Math.ceil(o/a.data.pagesize)+1;e.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=getAccessRecordList&page="+r+"&SiteID="+a.data.SiteID+"&ID="+a.data.ID,method:"GET",success:function(t){if(t.success){0===t.info.list.length?a.setData({isBlank:!0}):a.setData({isBlank:!1});for(var s=t.info.list,o=0;o<s.length;o++)s[o].Image&&s[o].Image.indexOf("https://wx.qlogo.cn/")<0&&(s[o].Image=e.globalData.siteBaseUrl+s[o].Image),a.data.recordList.push(s[o]);a.setData({recordList:a.data.recordList,falgAjax:!0,recordcount:t.info.count}),a.updateUnreadStatus()}else console.log("getList fail"+t.msg)}})}else a.setData({shape:!0})},todetialFn:function(t){var a=this,s=t.currentTarget.dataset.userid;this.setData({isclose:!0}),a.data.currentUserID!=s&&(a.setData({recordTimeList:[]}),e.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=getAccessRecordForUserID&ID="+a.data.ID+"&SiteID="+a.data.SiteID+"&UserID="+s,method:"GET",success:function(e){e.success?a.setData({recordTimeList:e.info.list,currentUserID:s}):console.log("getAccessRecordForUserID fail"+e.msg)},fail:function(e){console.log("getAccessRecordForUserID fail"+e)}}))},closeModal:function(){this.setData({isclose:!1})},callPhone:function(e){wx.makePhoneCall({phoneNumber:e.currentTarget.dataset.phone})},updateUnreadStatus:function(){var t=this;e.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=updateUnreadStatus&ID="+t.data.ID+"&SiteID="+t.data.SiteID,method:"GET",success:function(e){e.success||console.log("updateUnreadStatus fail"+e.msg)}})}}); 
 			}); 	require("pages/company/businessCard/accessRecord.js");
 		__wxRoute = 'pages/company/businessCard/cardDetails';__wxRouteBegin = true; 	define("pages/company/businessCard/cardDetails.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),t=(require("../../../common.js"),require("../../../components/utils/socket.js")),e=require("../../../components/wxb.js");Page({isloading:!1,path:"",myaudio:"",data:{pullDownRefreshFlag:!0,phoneNum:"",shareMarkFlag:!1,baseUrl:a.globalData.siteBaseUrl,cardcontent:{},userID:"",cardchoice:"1",reminder:"提示",matter:"您可以留下您的电话，让我给你提供更好的服务！",abrogate:"暂时先不",permission:"允许",buttonClicked:!1,adminID:"",businessCardID:"",shareUserID:"",PostLikesStatus:!1,informationAllHiding:!0,hiddenLoading:!1,incard:!1,isOverTime:!1,currentTab:0,winHeight:"",openDetailFlag:!1,isPlay:!1,music:{playtime:"00:00",duration:"00:00",percent:0,left:-7},circleTop:2,havePlayAudio:!1,mesCount:0,isShare:!1,showGetMobileBtn:!1,isFromWorkBench:!1,isDynamic:!0,dynamicBlank:!1,dynamicList:[],scrollCurrent:0,pagesize:10,recordcount:99,falgAjax:!0,currentIndex:0,showPopFlag:!1,showForm:!1,commentcontent:"",modelType:!0,canhold:!0,nickName:null,avatarUrl:null,imgUrls:[],indicatorDots:!0,autoplay:!0,interval:3e3,duration:1e3,isMaterial:!0,productPage:"1",pageCount:null,materialList:[],tagNameList:[],tagList:[],canSave:!0,tagNameIndex:"",showMaterial:!1,materialListStatus1:!0,materualFlagOne:!0,materualFlagTwo:!0,materualFlagThree:!0,materualFlagFour:!0,showUserInfoFlag:!1,messageCount:"",haveMessageCount:!1,BusinssUserID:"",dongtaiStatus:!1,AllChatIsReadStatus:!1,BusinssCardName:null,authorization:1,socketHide:!1,socketTimeOut:!0,socketlianjie:!1},onPullDownRefresh:function(){var a=this;a.data.pullDownRefreshFlag&&(a.setData({pullDownRefreshFlag:!1}),a.data.pullDownRefreshFlag=!1,a.data.optionsObj&&(a.data.optionsObj.refresh=!0),setTimeout(function(){a.loadData(a.data.optionsObj),a.setData({pullDownRefreshFlag:!0}),wx.stopPullDownRefresh()},1500))},onShow:function(t){var e=this;e.myaudio=wx.createInnerAudioContext(),a.compareVersion("2.3.0",wx.getStorageSync("userSystemInfo").SDKVersion)<=0&&wx.setInnerAudioOption({obeyMuteSwitch:!1}),a.globalData.cardSocket?e.listenSocket():(e.setData({socketTimeOut:!1,socketlianjie:!0}),e.openSocket()),e.setData({isPlay:!1,"music.playtime":"00:00","music.left":-7,"music.percent":0}),a.doAfterUserInfoAuth({success:this.initData,fail:this.initData}),wx.getStorageSync("editCardSuccessOnMycenter")&&e.loadData(),e.data.AllChatIsReadStatus&&e.getAllChatIsReadCount(),wx.getSetting({success:function(a){""!=wx.getStorageSync("authorize")&&"false"==wx.getStorageSync("authorize")&&(a.authSetting["scope.writePhotosAlbum"]?e.setData({canSave:!0}):e.setData({canSave:!1}))}})},onUnload:function(){this.myaudio.destroy(),a.globalData.cardSocket&&this.data.isShare&&(a.globalData.cardSocket.close(),a.globalData.cardSocket=void 0),this.setData({socketTimeOut:!1,socketlianjie:!1}),this.data.socketHide&&(a.globalData.cardSocket=void 0),this.setData({havePlayAudio:!1})},onHide:function(){this.setData({socketTimeOut:!1,socketlianjie:!1}),this.data.socketHide&&(a.globalData.cardSocket=void 0),this.myaudio.destroy()},initData:function(t){1==t.isShare||1==t.business?this.setData({isShare:!0}):t.scene&&this.setData({isShare:!0});var e=this;e.setData({userID:a.globalData.WebUserID,optionsObj:t,companyName:a.globalData.baseInfo.Name,siteLogo:a.globalData.baseInfo.SiteLogo}),e.data.stayCurOne||(t.currentTab?0==t.currentTab?(e.loadData(),e.setData({currentTab:t.currentTab})):1==t.currentTab&&(e.getDynmicList(!0),e.setData({currentTab:t.currentTab}),wx.setNavigationBarTitle({title:"动态"})):e.loadData());var s=wx.getStorageSync("invite")||0,o=wx.getStorageSync("hasMobile")||0,i=a.globalData.getMobileNode?a.globalData.getMobileNode.entryBusinessCardHome:0;0===a.globalData.hasMobile&&1===e.data.authorization&&0===o&&0!==s&&0!==i&&1!==e.data.phonestatus&&e.setData({allowspopup:!0,authorizationStu:1}),e.setData({authorization:1})},onLoad:function(t){if(t.dongtai&&(this.setData({dongtaiStatus:!0}),this.swichNav()),t.scene){var e={};decodeURIComponent(t.scene).split("&").map(function(a,t){if(-1!==a.indexOf("=")){var s=a.split("=");e[s[0]]=s[1]}if(-1!==a.indexOf("_")){var o=a.split("_");e[o[0]]=o[1]}}),t=e}var s=this;s.getSwipHeight(),t.SiteID&&""!=t.SiteID?s.setData({cardsiteID:t.SiteID}):a.globalData.baseInfo.SiteID?s.setData({cardsiteID:a.globalData.baseInfo.SiteID}):s.getSiteId(),a.registerGlobalFunctions(s),s.setData({userID:a.globalData.WebUserID,optionsobj:t,authorization:1}),wx.getSystemInfo({success:function(a){wx.setStorageSync("userSystemInfo",a),"iOS"===a.system.split(" ")[0]?s.setData({modelType:!0}):"Android"===a.system.split(" ")[0]&&s.setData({modelType:!1})}}),wx.setStorageSync("businessCardId",t.BusinessCardID),1==t.fromWrokbench&&this.setData({isFromWorkBench:!0})},getSwipHeight:function(){var t=this,e=a.getRpxNum({rpx:96,type:"h",rateFlag:!1});t.setData({winHeight:e,afterWinHeight:e+96})},getUserInfo:function(){var t=this;a.sendRequest({url:"/index.php?c=Front/WxApp/JsonApi&a=getUserInfo",method:"GET",success:function(a){""==a.info.Mobile||null==a.info.Mobile?t.setData({showGetMobileBtn:!0}):t.setData({showGetMobileBtn:!1})},fail:function(a){}})},getSiteId:function(){var t=this;a.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=getSiteID",method:"GET",success:function(a){t.setData({cardsiteID:a.siteID})}})},onReady:function(){var a=this;setTimeout(function(){a.setData({hiddenLoading:!0})},2e3)},loadData:function(){var t=this;t.isloading||(t.isloading=!0,a.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=getBusinessCardInfoByCardID&UserID="+t.data.userID+"&SiteID="+t.data.cardsiteID+"&BusinessCardID="+(t.data.optionsobj.BusinessCardID?t.data.optionsobj.BusinessCardID:t.data.optionsobj.cid),method:"GET",success:function(e){if(t.isloading=!1,e.success){if(null===e.info.card_info||""===e.info.card_info)t.setData({incard:!0,cardchoice:"0"}),wx.hideShareMenu();else if(1==e.info.getUserPhone&&t.getUserInfo(),e.info.checkVersions)t.setData({isOverTime:!0,cardchoice:"0"});else{if(e.info.isBindingMember)wx.removeStorageSync("otherMemberCardId"),t.setData({cardchoice:"1"}),t.data.optionsobj.cid&&t.setData({isShare:!0});else{t.setData({cardchoice:"0"}),wx.setStorageSync("otherMemberCardId",t.data.optionsobj.BusinessCardID);var s={tbUserID:a.globalData.WebUserID,tbType:"1",tbTypeID:t.data.optionsobj.BusinessCardID?t.data.optionsobj.BusinessCardID:t.data.optionsobj.cid,tbTypeName:"",tbTypeImg:"",tbBusinessCardID:t.data.optionsobj.BusinessCardID?t.data.optionsobj.BusinessCardID:t.data.optionsobj.cid};a.buried(s,function(a){})}e.info.checkUserBusinssCard&&t.setData({showMaterial:!0}),t.setData({BusinssUserID:e.info.card_info.UserID,BusinssCardName:e.info.card_info.NickName});var o=e.info.card_info;o.Recording&&(t.myaudio.src=t.data.baseUrl+o.Recording,t.setData({"music.duration":o.RecordingTime,Recording:o.Recording}));for(var i=e.info.recordImage,n=0;n<i.length;n++)i[n].Image&&i[n].Image.indexOf("https://wx.qlogo.cn/")<0&&(i[n].Image=a.globalData.siteBaseUrl+i[n].Image);if(null!=e.info.card_info.MoreImg&&""!=e.info.card_info.MoreImg)for(var r=0;r<e.info.card_info.MoreImg.length;r++)e.info.card_info.MoreImg[r]=t.data.baseUrl+e.info.card_info.MoreImg[r];""===o.QQ&&""===o.WeChat&&""===o.Email&&"0"===o.checkAddress?t.setData({informationAllHiding:!1}):t.setData({informationAllHiding:!0}),t.popularity(),t.setData({incard:!1,Popularity:e.info.card_info.Popularity>9999?(e.info.card_info.Popularity/1e4).toFixed(2)+"万":e.info.card_info.Popularity,cardcontent:e.info.card_info,cardcontentLikes:e.info.card_info.Likes>9999?(e.info.card_info.Likes/1e4).toFixed(2)+"万":e.info.card_info.Likes,cardcontentLikescon:e.info.card_info.Likes,moreImg:e.info.card_info.MoreImg,thumbsup:wx.getStorageSync("thumbsup"),recordImage:e.info.recordImage,PostLikesStatus:e.info.PostLikesStatus,isBindingMember:e.info.isBindingMember,Transpond:e.info.card_info.Transpond>9999?(e.info.card_info.Transpond/1e4).toFixed(2)+"万":e.info.card_info.Transpond,Transpondcon:e.info.card_info.Transpond,mesCount:e.unreadNum})}t.data.AllChatIsReadStatus||t.getAllChatIsReadCount()}else;},fail:function(a){t.isloading=!1,console.log("getMyCenterData fail")}}))},popularity:function(){var t=this;"0"==t.data.cardchoice&&a.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=afterAttentionTriggerEvent&ID="+(t.data.optionsobj.BusinessCardID?t.data.optionsobj.BusinessCardID:t.data.optionsobj.cid)+"&UserID="+t.data.userID+"&SiteID="+t.data.cardsiteID+"&ShareID="+(t.data.optionsobj.userid?t.data.optionsobj.userid:t.data.optionsobj.invite),method:"GET",success:function(a){a.success},fail:function(a){}})},openDetail:function(){var a=this;a.setData({openDetailFlag:!a.data.openDetailFlag})},playAudio:function(){var t=this;if(t.data.isPlay)t.myaudio.pause(),t.setData({isPlay:!1});else{if(!t.data.havePlayAudio&&1!=t.data.cardchoice){var e={tbUserID:a.globalData.WebUserID,tbType:"11",tbTypeID:t.data.optionsobj.BusinessCardID?t.data.optionsobj.BusinessCardID:t.data.optionsobj.cid,tbTypeName:"",tbTypeImg:"",tbBusinessCardID:t.data.optionsobj.BusinessCardID?t.data.optionsobj.BusinessCardID:t.data.optionsobj.cid};a.buried(e,function(a){}),t.setData({havePlayAudio:!0})}""==t.myaudio.src&&(t.myaudio.src=t.data.baseUrl+t.data.Recording),t.myaudio.play(),t.myaudio.onPlay(function(){console.log("开始播放")}),t.myaudio.onPause(function(){t.setData({isPlay:!1})}),t.myaudio.onEnded(function(){console.log("播放结束"),t.setData({havePlayAudio:!1,isPlay:!1,"music.playtime":"00:00","music.left":-7,"music.percent":0,cellphone:3})}),t.myaudio.onError(function(a){console.log(a.errMsg),console.log(a.errCode)}),t.setData({isPlay:!0}),setTimeout(function(){t.myaudio.currentTime,t.myaudio.onTimeUpdate(function(){t.setData({"music.percent":Math.ceil(t.myaudio.currentTime)/Math.ceil(t.myaudio.duration)*100,"music.left":Math.ceil(t.myaudio.currentTime)/Math.ceil(t.myaudio.duration)*483,"music.playtime":t.formseconds(Math.ceil(t.myaudio.currentTime))})})},100)}},formseconds:function(a){var t;return a&&(t=(parseInt(a%3600/60)>9?parseInt(a%3600/60):"0"+parseInt(a%3600/60))+":"+(parseInt(a%3600%60)>9?parseInt(a%3600%60):"0"+parseInt(a%3600%60))),t},giveThumbs:function(){var t=this;a.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=postLike&ID="+t.data.cardcontent.ID+"&UserID="+t.data.userID+"&SiteID="+t.data.cardsiteID,method:"GET",hideLoading:!0,success:function(e){if(e.success){if("操作过于频繁！"===e.msg)wx.showToast({title:"您点赞过了!",icon:"none",duration:1500});else if(t.setData({cardcontentLikes:parseInt(t.data.cardcontentLikescon)>9999?parseInt(t.data.cardcontentLikescon/1e4).toFixed(2)+"万":parseInt(t.data.cardcontentLikescon)+1,PostLikesStatus:!0}),1!=t.data.cardchoice){var s={tbUserID:a.globalData.WebUserID,tbType:"6",tbTypeID:t.data.optionsobj.BusinessCardID?t.data.optionsobj.BusinessCardID:t.data.optionsobj.cid,tbTypeName:"",tbTypeImg:"",tbBusinessCardID:t.data.optionsobj.BusinessCardID?t.data.optionsobj.BusinessCardID:t.data.optionsobj.cid};a.buried(s,function(a){})}}else;},fail:function(a){}})},mypictureClickImg:function(a){var t=a.currentTarget.dataset.index,e=this.data.moreImg;wx.previewImage({current:e[t],urls:e})},calling:function(){wx.makePhoneCall({phoneNumber:this.data.cardcontent.Mobile,success:function(){console.log("拨打电话成功！")},fail:function(){console.log("拨打电话失败！")}});var t=this;if(1!=t.data.cardchoice){var e={tbUserID:a.globalData.WebUserID,tbType:"2",tbTypeID:t.data.optionsobj.BusinessCardID?t.data.optionsobj.BusinessCardID:t.data.optionsobj.cid,tbTypeName:"",tbTypeImg:"",tbBusinessCardID:t.data.optionsobj.BusinessCardID?t.data.optionsobj.BusinessCardID:t.data.optionsobj.cid};a.buried(e,function(a){})}},getphone:function(){var a=this;wx.showActionSheet({itemList:["添加联系人"],success:function(t){wx.addPhoneContact({firstName:a.data.cardcontent.UserName,mobilePhoneNumber:a.data.cardcontent.Mobile,organization:a.data.cardcontent.CompanyName,title:a.data.cardcontent.Position,email:a.data.cardcontent.Email,weChatNumber:a.data.cardcontent.WeChat})}})},abolish:function(){var a=this;a.setData({allowspopup:!1}),"1"===a.data.cellphone?a.getphone():"2"===a.data.cellphone&&wx.navigateTo({url:"/pages/company/businessCard/chatDialogue?UserID="+a.data.BusinssUserID+"&SiteID="+a.data.cardsiteID+"&BusinessCardID="+(a.data.optionsobj.BusinessCardID?a.data.optionsobj.BusinessCardID:a.data.optionsobj.cid)+"&OtherName="+a.data.BusinssCardName})},phoneNumTap:function(t){var e=this,s=wx.getStorageSync("hasMobile")||0;a.globalData.getMobileNode&&a.globalData.getMobileNode.savePhoneToAddressBook;if(0===a.globalData.hasMobile&&0===s&&0!==a.globalData.getMobileNode.savePhoneToAddressBook?this.setData({allowspopup:!0,cellphone:t.currentTarget.dataset.tbphone}):e.getphone(),1!=e.data.cardchoice){var o={tbUserID:a.globalData.WebUserID,tbType:"3",tbTypeID:e.data.optionsobj.BusinessCardID?e.data.optionsobj.BusinessCardID:e.data.optionsobj.cid,tbTypeName:"",tbTypeImg:"",tbBusinessCardID:e.data.optionsobj.BusinessCardID?e.data.optionsobj.BusinessCardID:e.data.optionsobj.cid};a.buried(o,function(a){})}},copyTBL:function(t){var e=this;if(1!=e.data.cardchoice){var s={tbUserID:a.globalData.WebUserID,tbType:t.currentTarget.dataset.tbtype,tbTypeID:e.data.optionsobj.BusinessCardID?e.data.optionsobj.BusinessCardID:e.data.optionsobj.cid,tbTypeName:"",tbTypeImg:"",tbBusinessCardID:e.data.optionsobj.BusinessCardID?e.data.optionsobj.BusinessCardID:e.data.optionsobj.cid};a.buried(s,function(a){})}wx.setClipboardData({data:t.currentTarget.dataset.text,success:function(t){a.showToast({title:"内容已复制",icon:"none",duration:1500})}})},share:function(){this.setData({shareMarkFlag:!0})},close:function(){this.setData({shareMarkFlag:!1})},sharetoFriend:function(){this.setData({shareMarkFlag:!1})},ontranspond:function(){var t=this;a.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=updateShareForwardingAmount&ID="+t.data.cardcontent.ID+"&SiteID="+t.data.cardsiteID,method:"GET",success:function(a){t.isloading=!1,a.success},fail:function(a){t.isloading=!1},hideLoading:!0})},onShareAppMessage:function(t){var e=this,s=e.data.currentTab,o=e.data.optionsobj;if(o.currentTab=s,0==s){if(1!=e.data.cardchoice){var i={tbUserID:a.globalData.WebUserID,tbType:"5",tbTypeID:e.data.optionsobj.BusinessCardID?e.data.optionsobj.BusinessCardID:e.data.optionsobj.cid,tbTypeName:"",tbTypeImg:"",tbBusinessCardID:e.data.optionsobj.BusinessCardID?e.data.optionsobj.BusinessCardID:e.data.optionsobj.cid};a.buried(i,function(a){})}o.userid=e.data.userID;var n=a.getPageUrl(e,o);e.ontranspond(),e.setData({Transpond:Number(e.data.Transpondcon)>9999?((Number(e.data.Transpondcon)+1)/1e4).toFixed(2)+"万":Number(e.data.Transpondcon)+1,Transpondcon:Number(e.data.Transpondcon)+1});var r=e.data.cardcontent,d="您好，我是"+r.CompanyName+r.Position+r.UserName+"，这是我的名片请惠存",c=""+e.data.baseUrl+r.PersonImg;return a.shareAppMessage({url:n,title:d,imageUrl:c})}if(1==s){o.userid=a.globalData.WebUserID;var u="",l="",g="";if(t.target){var D=t.target.dataset.articleid;u=t.target.dataset.title,l=""+e.data.baseUrl+t.target.dataset.img,g="/pages/shop/newsdetail?id="+D+"&businessid="+o.BusinessCardID+"&userid="+a.globalData.WebUserID,e.addTranspond(D)}else g=a.getPageUrl(e,o);return a.shareAppMessage({url:g,title:u,imageUrl:l})}},shareHfive:function(){var a=this;this.setData({shareMarkFlag:!1}),setTimeout(function(){wx.navigateTo({url:"/pages/company/businessCard/shareCard?companyName="+a.data.cardcontent.CompanyName+"&position="+a.data.cardcontent.Position+"&mobile="+a.data.cardcontent.Mobile+"&personImg="+a.data.cardcontent.PersonImg+"&id="+a.data.cardcontent.ID+"&username="+a.data.cardcontent.UserName+"&email="+a.data.cardcontent.Email+"&SiteID="+a.data.cardsiteID})},50)},businessCardsList:function(){var a=this;setTimeout(function(){wx.navigateTo({url:"/pages/company/businessCard/cardcase?ID="+a.data.userID+"&BusinessCardID="+a.data.cardcontent.ID+"&isBinding="+a.data.isBindingMember})},50)},goeditCard:function(){var a=this;setTimeout(function(){wx.navigateTo({url:"/pages/company/businessCard/editCard?ID="+a.data.cardcontent.ID+"&mark=1"})},50)},goeditCardindex:function(){wx.setStorageSync("switchToIndex",!0),wx.setStorageSync("SiteID",a.globalData.baseInfo.SiteID),wx.switchTab({url:"/pages/company/index"})},goAccessRecord:function(){var a=this;setTimeout(function(){wx.navigateTo({url:"/pages/company/businessCard/accessRecord?ID="+a.data.cardcontent.ID})},50)},navigationalmap:function(){var t=this;if(1!=t.data.cardchoice){var e={tbUserID:a.globalData.WebUserID,tbType:"10",tbTypeID:t.data.optionsobj.BusinessCardID?t.data.optionsobj.BusinessCardID:t.data.optionsobj.cid,tbTypeName:"",tbTypeImg:"",tbBusinessCardID:t.data.optionsobj.BusinessCardID?t.data.optionsobj.BusinessCardID:t.data.optionsobj.cid};a.buried(e,function(a){})}wx.openLocation({address:t.data.cardcontent.Address,longitude:Number(t.data.cardcontent.Lng),latitude:Number(t.data.cardcontent.Lat)})},toLeaveWrod:function(t){var e=this;e.setData({haveMessageCount:!1});var s=wx.getStorageSync("hasMobile")||0,o=a.globalData.getMobileNode?a.globalData.getMobileNode.entryOnlineMessage:0;0===a.globalData.hasMobile&&0===s&&0!==o?this.setData({allowspopup:!0,cellphone:t.currentTarget.dataset.tbphone}):wx.navigateTo({url:"/pages/company/businessCard/chatDialogue?UserID="+e.data.BusinssUserID+"&SiteID="+e.data.cardsiteID+"&BusinessCardID="+(e.data.optionsobj.BusinessCardID?e.data.optionsobj.BusinessCardID:e.data.optionsobj.cid)+"&OtherName="+e.data.BusinssCardName})},getAllChatIsReadCount:function(){var t=this,e="";a.globalData.WebUserID!==this.data.BusinssUserID&&(e=this.data.BusinssUserID),a.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=getAllChatIsReadCount&toUserID="+a.globalData.WebUserID+"&fromUserID="+e,method:"GET",hideLoading:!0,success:function(a){200==a.code&&t.setData({messageCount:a.data.count,AllChatIsReadStatus:!0,haveMessageCount:a.data.count>0})},fail:function(a){}})},openSocket:function(){var e=this,s=a.globalData.WebUserID;"{}"!=JSON.stringify(a.globalData.socket_config)&&s?(a.globalData.cardSocket=t.run(),t.listen("websocket-connected",function(t){var o={client_id:t.clientid,fromUserID:s};a.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=bindUid",data:o,method:"POST",hideLoading:!0,success:function(t){200==t.code?(e.setData({socketHide:!1}),console.log("绑定成功"),e.getAllChatIsReadCount(),a.globalData.cardSocket.socketTask.onClose(function(t){e.data.socketlianjie&&(a.globalData.cardSocket=void 0,e.setData({socketHide:!0}),e.openSocket())})):setTimeout(function(){e.data.socketlianjie&&e.openSocket()},5e3)},fail:function(a){}})}),a.globalData.cardSocket.listen("chat_msg",function(a){var t=a,s=e.data.messageCount;e.data.BusinssUserID==t.fromUserID&&("null"==(s=Number(s)+1)&&(s="..."),e.setData({messageCount:s},function(){setTimeout(function(){e.setData({haveMessageCount:s>0})},300)}))}),a.globalData.cardSocket.listen("businesscard_msg",function(a){e.setData({mesCount:a.count})}),a.globalData.cardSocket.socketTask.onError(function(a){setTimeout(function(){e.data.socketlianjie&&e.openSocket()},5e3)}),e.setData({WebUserID:s})):setTimeout(function(){e.openSocket()},1500)},listenSocket:function(){var t=this;t.setData({socketTimeOut:!0,socketlianjie:!1}),a.globalData.cardSocket.listen("chat_msg",function(a){var e=a,s=t.data.messageCount;t.data.BusinssUserID==e.fromUserID&&("null"==(s=Number(s)+1)&&(s="..."),t.setData({messageCount:s},function(){setTimeout(function(){t.setData({haveMessageCount:s>0})},300)}))}),a.globalData.cardSocket.listen("businesscard_msg",function(a){t.setData({mesCount:a.count})}),a.globalData.cardSocket.socketTask.onClose(function(e){t.data.socketTimeOut&&(a.globalData.cardSocket=void 0,t.setData({socketTimeOut:!1,socketlianjie:!0,socketHide:!0}),t.openSocket())})},switchTab:function(t){var e=t.detail.current,s=this;if(this.setData({currentTab:t.detail.current,showUserInfoFlag:!1}),0==e)s.myaudio=wx.createInnerAudioContext(),s.setData({isPlay:!1,"music.playtime":"00:00","music.left":-7,"music.percent":0}),s.loadData(),wx.setNavigationBarTitle({title:"名片详情"});else if(1==e)s.data.isShare&&s.setData({stayCurOne:!0}),s.myaudio&&s.myaudio.destroy(),s.getDynmicList(),wx.setNavigationBarTitle({title:"动态"});else if(2==e){s.myaudio&&s.myaudio.destroy(),setTimeout(function(){s.setData({showUserInfoFlag:!0})},100);var o=a.globalData.userInfo;s.setData({nickName:o.nickName,avatarUrl:o.avatarUrl}),s.data.materialListStatus1&&(s.getMaterialBannerList(),s.getALLRelease(),s.getTagList(),s.getMaterialList("",!0),s.setData({materialListStatus1:!1})),wx.setNavigationBarTitle({title:"素材库"})}},swichNav:function(t){var e,s=this;if(e=s.data.dongtaiStatus?1:t.currentTarget.dataset.current,this.data.currentTab!=e)if(this.setData({currentTab:e,showUserInfoFlag:!1,dongtaiStatus:!1}),0==e)s.myaudio=wx.createInnerAudioContext(),s.loadData(),wx.setNavigationBarTitle({title:"名片详情"}),s.setData({isPlay:!1,"music.playtime":"00:00","music.left":-7,"music.percent":0});else if(1==e)s.data.isShare&&s.setData({stayCurOne:!0}),s.myaudio&&s.myaudio.destroy(),s.getDynmicList(),wx.setNavigationBarTitle({title:"动态"});else if(2==e){s.myaudio&&s.myaudio.destroy(),setTimeout(function(){s.setData({showUserInfoFlag:!0})},100);var o=a.globalData.userInfo;s.setData({nickName:o.nickName,avatarUrl:o.avatarUrl}),s.data.materialListStatus1&&(s.getMaterialBannerList(),s.getALLRelease(),s.getTagList(),s.getMaterialList("",!0),s.setData({materialListStatus1:!1})),wx.setNavigationBarTitle({title:"素材库"})}},from_send:function(t){var e={formID:t.detail.formId,userID:a.globalData.WebUserID};a.saveFormID(e,function(a){})},getDynmicList:function(t){var e=this;t&&(e.data.recordcount=99,e.data.dynamicList=[]);var s=e.data.recordcount,o=e.data.dynamicList.length;if(s>o&&e.data.falgAjax){e.setData({falgAjax:!1});var i=Math.ceil(o/e.data.pagesize)+1;a.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=getDynmicList&page="+i+"&pageSize="+e.data.pagesize,method:"GET",success:function(a){if(a.success){1==a.checkCount&&e.setData({showMaterial:!0}),0===a.list.length?e.setData({dynamicBlank:!0}):e.setData({dynamicBlank:!1});for(var t=a.list,s=0;s<t.length;s++)t[s].showPop=!1,e.data.dynamicList.push(t[s]);e.setData({dynamicList:e.data.dynamicList,falgAjax:!0,recordcount:a.count})}else console.log("getDynmicList fail"+a.msg)}})}else e.setData({shape:!0})},loadMoreData:function(){this.getDynmicList()},errArticleImg:function(a){var t=this,e=a.target.dataset.errImg,s=a.target.dataset.errIndex,o=t.data.dynamicList;o[s].ImgBig=e,t.setData({dynamicList:o})},toNewsDetails:function(t){this.setData({showPopFlag:!1});var e=t.currentTarget.dataset.articleid,s=a.globalData.WebUserID;wx.navigateTo({url:"/pages/company/newsdetail?id="+e+"&userid="+s})},addTranspond:function(t){a.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=addTranspond",method:"POST",data:{ArticleID:t},success:function(a){},fail:function(a){}})},TouchDiscuss:function(a){var t=this,e=t.data.dynamicList;t.data.currentIndex==a.currentTarget.dataset.index&&(e[t.data.currentIndex].showPop=!1);for(var s=0;s<e.length;s++)e[s].showPop=!1,a.currentTarget.dataset.index==s&&(e[s].showPop=!0);t.setData({canhold:!0,dynamicList:e}),t.data.currentIndex==a.currentTarget.dataset.index?t.setData({currentIndex:a.currentTarget.dataset.index,showPopFlag:!t.data.showPopFlag}):t.setData({currentIndex:a.currentTarget.dataset.index,showPopFlag:!0})},clickLove:function(t){var e=this,s=t.currentTarget.dataset.articleid,o=a.globalData.WebUserID?a.globalData.WebUserID:0;a.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=addLike",method:"POST",data:{ArticleID:s,UserID:o},success:function(t){if(t.success){var i=e.data.dynamicList,n="",r="";if(i.forEach(function(t){t.ArticleID==s&&(n=t.Title,r=t.ImgBig,t.showPop=!1,""!=t.NickNameText?t.NickNameText=t.NickNameText+","+a.globalData.userInfo.nickName:t.NickNameText=t.NickNameText+a.globalData.userInfo.nickName)}),1!=e.data.cardchoice&&0!=o){var d={tbUserID:o,tbType:"13",tbTypeID:s,tbTypeName:n,tbTypeImg:r,tbBusinessCardID:e.data.optionsobj.BusinessCardID?e.data.optionsobj.BusinessCardID:e.data.optionsobj.cid};a.buried(d,function(a){})}e.setData({dynamicList:i,showPopFlag:!1})}else a.showToast({title:t.msg,icon:"none"}),e.setData({showPopFlag:!1})},fail:function(a){}})},toComment:function(t){var e=this,s=t.currentTarget.dataset.articleid,o=a.globalData.WebUserID?a.globalData.WebUserID:0;a.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=getUserCommentCount&ArticleID="+s+"&UserID="+o,method:"GET",success:function(t){e.setData({showPopFlag:!1}),t.success?0==t.IsComment?e.setData({showForm:!0,articleID:s}):a.showToast({title:"文章评论不能超过10条",icon:"none"}):a.showToast({title:t.msg,icon:"none"})},fail:function(a){}})},sendComment:function(a){var t=a.detail.value.commentcontent;""!=t&&this.addComment(t)},inputComment:function(a){this.setData({commentcontent:a.detail.value})},sendclose:function(a){var t=this,e=a.detail.value;""==e?t.setData({canhold:!0}):(t.setData({canhold:!1}),t.addComment(e))},addComment:function(t){var e=this,s=e.data.articleID,o=e.data.currentIndex,i=a.globalData.WebUserID?a.globalData.WebUserID:0,n=e.data.dynamicList;a.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=getArticleconfig",method:"GET",success:function(r){r.success&&a.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=addComment",method:"POST",data:{ArticleID:s,UserID:i,Content:t},success:function(d){if(d.success){if(1==r.info.EnableCommentReviewMobile){if(0!=i){var c=a.globalData.userInfo.nickName;n[o].CommentList.push({nickname:c,comment:t})}else n[o].CommentList.push({nickname:"游客",comment:t});e.setData({dynamicList:n,showForm:!1,commentcontent:""})}else a.showToast({title:"审核通过后显示",icon:"none"}),e.setData({showForm:!1,commentcontent:""});if(1!=e.data.cardchoice&&0!=i){var u={tbUserID:i,tbType:"14",tbTypeID:s,tbTypeName:n[o].Title,tbTypeImg:n[o].ImgBig,tbBusinessCardID:e.data.optionsobj.BusinessCardID?e.data.optionsobj.BusinessCardID:e.data.optionsobj.cid};a.buried(u,function(a){})}}else;},fail:function(a){}})},fail:function(a){}})},touchstart:function(a){var t=this;""==a.target.id?a.target.dataset.index||a.target.dataset.isone?t.setData({showForm:!1,commentcontent:""}):t.setData({showPopFlag:!1,showForm:!1,commentcontent:""}):t.setData({showForm:!0})},bindPickerChange:function(a){this.setData({tagNameIndex:a.detail.value,productPage:"1"});var t=this.data.tagList[a.detail.value].TagID;this.getMaterialList(t,!0)},getMaterialBannerList:function(){var t=this;t.data.materualFlagOne&&(t.setData({materualFlagOne:!1}),a.sendRequest({url:"/index.php?c=Front/Material/Material&a=getMaterialBannerList",method:"GET",success:function(a){t.setData({materualFlagOne:!0}),a.success&&t.setData({imgUrls:a.info.ImagePaths})},fail:function(a){t.setData({materualFlagOne:!0})}}))},getALLRelease:function(){var t=this;t.data.materualFlagTwo&&(t.setData({materualFlagTwo:!1}),a.sendRequest({url:"/index.php?c=Front/Material/Material&a=getALLRelease",method:"GET",success:function(a){t.setData({materualFlagTwo:!0})},fail:function(a){t.setData({materualFlagTwo:!0})}}))},getMaterialList:function(t,e){var s=this;e&&s.setData({productPage:"1"});var o="";t&&(o=t),s.data.materualFlagThree&&(s.setData({materualFlagThree:!1}),a.sendRequest({url:"/index.php?c=Front/Material/Material&a=getMaterialList&page="+s.data.productPage+"&tagID="+o+"&userID=",method:"GET",success:function(a){if(s.setData({materualFlagThree:!0}),a.success){var o=[];t||e?o=a.list:(o=s.data.materialList,a.list.forEach(function(a){o.push(a)})),s.setData({materialList:o,pageCount:a.pagecount})}},fail:function(a){s.setData({materualFlagThree:!0})}}))},getTagList:function(){var t=this;t.data.materualFlagFour&&(t.setData({materualFlagFour:!1}),a.sendRequest({url:"/index.php?c=Front/Material/Material&a=getTagList&isPagination=1",method:"GET",success:function(a){if(t.setData({materualFlagFour:!0}),a.success){var e=[];a.list.forEach(function(a,t){e[t]=a.TagName}),t.setData({tagList:a.list,tagNameList:e})}},fail:function(a){t.setData({materualFlagFour:!0})}}))},copyText:function(t){var e=this,s=t.currentTarget.dataset.descriptor,o=e.data.materialList[s].Descriptor;wx.setClipboardData({data:o,success:function(t){a.showToast({title:"内容已复制",icon:"none"})}})},saveImg:function(a){var t=this;wx.getSetting({success:function(e){if(e.authSetting["scope.writePhotosAlbum"]){var s=a.currentTarget.dataset.saveindex,o=[];if(0==(o=t.data.materialList[s].MaterialContent).length)return;o.forEach(function(a,e){o[e].indexOf("https")<0&&(o[e]=t.data.baseUrl+a)});var i=0;t.saveLoad(o[i],function(a){if(a){if(wx.showToast({title:"第"+(i+1)+"张成功",icon:"success",mask:!0,duration:2e3}),o.length===i+1)return;return i++,o[i]}if(wx.showToast({title:"第"+(i+1)+"张失败",icon:"loading",mask:!0,duration:2e3}),o.length!==i+1)return i++,o[i]})}else wx.authorize({scope:"scope.writePhotosAlbum",success:function(){wx.setStorageSync("authorize","true")},fail:function(){wx.setStorageSync("authorize","false"),t.setData({canSave:!1})}})}})},saveLoad:function(a,t){var e=this;wx.showToast({title:"",icon:"loading",mask:!0,duration:5e3}),wx.downloadFile({url:a,success:function(a){wx.saveImageToPhotosAlbum({filePath:a.tempFilePath,success:function(a){var s=t&&t(!0);s&&setTimeout(function(){e.saveLoad(s,t)},2e3)},fail:function(a){var s=t&&t(!1);s&&e.saveLoad(s,t)}})}})},bindClickImg:function(a){var t=this,e=a.currentTarget.dataset.index,s=a.currentTarget.dataset.imagearr;s.forEach(function(a,e){s[e]=t.data.baseUrl+a}),wx.previewImage({current:s[e],urls:s})},goMaterialBottom:function(){Number(this.data.productPage)+1>this.data.pageCount||(this.data.productPage++,this.getMaterialList("",!1))},openSet:function(){wx.getStorageSync("userSystemInfo")&&a.compareVersion("2.0.7",wx.getStorageSync("userSystemInfo").SDKVersion)>-1&&wx.openSetting({})},getPhoneNumber:function(t){var s=this,o=t.detail.errMsg.indexOf("getPhoneNumber:ok")>-1;if(s.setData({allowspopup:!1}),o){var i=a.globalData.appId,n=a.globalData.session_key,r=new e(i,n).decryptData(t.detail.encryptedData,t.detail.iv);a.loadphoneInfo(r.phoneNumber),"1"===s.data.cellphone?s.getphone():"2"===s.data.cellphone&&(s.setData({showGetMobileBtn:!1}),wx.navigateTo({url:"/pages/company/businessCard/chatDialogue?UserID="+s.data.BusinssUserID+"&SiteID="+s.data.cardsiteID+"&BusinessCardID="+(s.data.optionsobj.BusinessCardID?s.data.optionsobj.BusinessCardID:s.data.optionsobj.cid)+"&OtherName="+s.data.BusinssCardName}))}else if("1"===s.data.cellphone)s.getphone();else if("2"===s.data.cellphone)return void wx.navigateTo({url:"/pages/company/businessCard/chatDialogue?UserID="+s.data.BusinssUserID+"&SiteID="+s.data.cardsiteID+"&BusinessCardID="+(s.data.optionsobj.BusinessCardID?s.data.optionsobj.BusinessCardID:s.data.optionsobj.cid)+"&OtherName="+s.data.BusinssCardName})},toWrokBench:function(){var t=this,e=t.data.optionsobj.BusinessCardID?t.data.optionsobj.BusinessCardID:t.data.optionsobj.cid,s=a.globalData.siteId;setTimeout(function(){t.data.isFromWorkBench?wx.navigateBack({delta:1}):wx.redirectTo({url:"/pages/company/businessCard/workbench?BusinessCardID="+e+"&SiteID="+s})},50)}}); 
 			}); 	require("pages/company/businessCard/cardDetails.js");
 		__wxRoute = 'pages/company/businessCard/material-library';__wxRouteBegin = true; 	define("pages/company/businessCard/material-library.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{nickName:null,avatarUrl:null,imgUrls:[],indicatorDots:!0,autoplay:!0,interval:3e3,duration:1e3,isMaterial:!0,productPage:"1",pageCount:null,baseUrl:t.globalData.siteBaseUrl,materialList:[],tagNameList:[],tagList:[],canSave:!0,tagNameIndex:"",showMaterial:!0,showBlankFlag:!1},onLoad:function(a){t.doAfterUserInfoAuth({success:this.initData,fail:this.initData})},initData:function(){var a=this,e=t.globalData.userInfo;a.setData({nickName:e.nickName,avatarUrl:e.avatarUrl}),t.registerGlobalFunctions(a),a.getMaterialBannerList(),a.getALLRelease(),a.getMaterialList(),a.getTagList()},onShow:function(){var t=this;wx.getSetting({success:function(a){""!=wx.getStorageSync("authorize")&&"false"==wx.getStorageSync("authorize")&&(a.authSetting["scope.writePhotosAlbum"]?t.setData({canSave:!0}):t.setData({canSave:!1}))}})},bindPickerChange:function(t){this.setData({tagNameIndex:t.detail.value,productPage:"1"});var a=this.data.tagNameList[t.detail.value],e="";this.data.tagList.forEach(function(t,i){t.TagName==a&&(e=t.TagID)}),this.getMaterialList(e)},getMaterialBannerList:function(){var a=this;t.sendRequest({url:"/index.php?c=Front/Material/Material&a=getMaterialBannerList",method:"GET",success:function(t){a.isloading=!1,t.success&&a.setData({imgUrls:t.info.ImagePaths})},fail:function(t){a.isloading=!1}})},getALLRelease:function(){var a=this;t.sendRequest({url:"/index.php?c=Front/Material/Material&a=getALLRelease",method:"GET",success:function(t){a.isloading=!1},fail:function(t){a.isloading=!1}})},getMaterialList:function(a){var e=this,i="";a&&(i=a),t.sendRequest({url:"/index.php?c=Front/Material/Material&a=getMaterialList&page="+e.data.productPage+"&tagID="+i+"&userID=",method:"GET",success:function(t){if(e.isloading=!1,t.success){var i=[];0==t.list.length||(a?i=t.list:(i=e.data.materialList,t.list.forEach(function(t){i.push(t)})),e.setData({materialList:i,pageCount:t.pagecount,showBlankFlag:!1}))}},fail:function(t){e.isloading=!1}})},getTagList:function(){var a=this;t.sendRequest({url:"/index.php?c=Front/Material/Material&a=getTagList&isPagination=1",method:"GET",success:function(t){if(a.isloading=!1,t.success){var e=[];t.list.forEach(function(t,a){e[a]=t.TagName}),a.setData({tagList:t.list,tagNameList:e})}},fail:function(t){a.isloading=!1}})},copyText:function(a){var e=this,i=a.currentTarget.dataset.descriptor,s=e.data.materialList[i].Descriptor;wx.setClipboardData({data:s,success:function(a){t.showToast({title:"内容已复制",icon:"none"})}})},saveImg:function(t){var a=this;wx.getSetting({success:function(e){if(e.authSetting["scope.writePhotosAlbum"]){var i=t.currentTarget.dataset.saveindex,s=[];if(0==(s=a.data.materialList[i].MaterialContent).length)return;s.forEach(function(t,e){s[e].indexOf("https")<0&&(s[e]=a.data.baseUrl+t)});var n=0;a.saveLoad(s[n],function(t){if(wx.showToast({title:"第"+(n+1)+"张"+(t?"成功":"失败"),icon:"success",mask:!0,duration:2e3}),s.length!==n+1)return n++,s[n]})}else wx.authorize({scope:"scope.writePhotosAlbum",success:function(){wx.setStorageSync("authorize","true")},fail:function(){wx.setStorageSync("authorize","false"),a.setData({canSave:!1})}})}})},saveLoad:function(t,a){var e=this;wx.showToast({title:"",icon:"loading",mask:!0,duration:5e3}),wx.downloadFile({url:t,success:function(t){wx.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(t){var i=a&&a(!0);i&&setTimeout(function(){e.saveLoad(i,a)},2e3)},fail:function(t){var i=a&&a(!1);i&&e.saveLoad(i,a)}})}})},bindClickImg:function(t){var a=this,e=t.currentTarget.dataset.index,i=t.currentTarget.dataset.imagearr;i.forEach(function(t,e){i[e]=a.data.baseUrl+t}),wx.previewImage({current:i[e],urls:i})},onReachBottom:function(){Number(this.data.productPage)+1>this.data.pageCount||(this.data.productPage++,this.getMaterialList())},openSet:function(){wx.getStorageSync("userSystemInfo")&&this.compareVersion("2.0.7",wx.getStorageSync("userSystemInfo").SDKVersion)>-1&&wx.openSetting({})}}); 
 			}); 	require("pages/company/businessCard/material-library.js");
 		__wxRoute = 'pages/company/businessCard/dynamic';__wxRouteBegin = true; 	define("pages/company/businessCard/dynamic.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({isloading:!1,path:"",data:{isDynamic:!0,baseUrl:t.globalData.siteBaseUrl,dynamicBlank:!1,dynamicList:[],scrollCurrent:0,pagesize:10,recordcount:99,falgAjax:!0,currentIndex:0,showPopFlag:!1,showForm:!1,commentcontent:"",modelType:!0,canhold:!0},onLoad:function(a){var e=this;e.setData({optionsObj:a}),a.BusinessCardID&&wx.setStorageSync("businessCardId",a.BusinessCardID),a.userid&&wx.setStorageSync("shareID",a.userid),t.registerGlobalFunctions(e),e.getHeight(),this.setData({businessCardID:a.BusinessCardID?a.BusinessCardID:t.globalData.businessCardInfo.businessCardID}),wx.getSystemInfo({success:function(t){"iOS"===t.system.split(" ")[0]?e.setData({modelType:!0}):"Android"===t.system.split(" ")[0]&&e.setData({modelType:!1})}})},onShow:function(){t.doAfterUserInfoAuth({success:this.initData,fail:this.initData})},initData:function(){var a=this;a.getDynmicList(!0),a.setData({companyName:t.globalData.baseInfo.Name,siteLogo:t.globalData.baseInfo.SiteLogo})},getHeight:function(){this.setData({height:parseInt(wx.getSystemInfoSync().windowHeight-wx.getSystemInfoSync().windowWidth/750*96)})},getDynmicList:function(a){var e=this;a&&(e.data.recordcount=99,e.data.dynamicList=[]);var s=e.data.recordcount,n=e.data.dynamicList.length;if(s>n&&e.data.falgAjax){e.setData({falgAjax:!1});var i=Math.ceil(n/e.data.pagesize)+1;t.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=getDynmicList&page="+i+"&pageSize="+e.data.pagesize,method:"GET",success:function(t){if(t.success){1==t.checkCount&&e.setData({showMaterial:!0}),0===t.list.length?e.setData({dynamicBlank:!0}):e.setData({dynamicBlank:!1});for(var a=t.list,s=0;s<a.length;s++)a[s].showPop=!1,e.data.dynamicList.push(a[s]);e.setData({dynamicList:e.data.dynamicList,falgAjax:!0,recordcount:t.count})}else console.log("getDynmicList fail"+t.msg)}})}else e.setData({shape:!0})},loadMoreData:function(){this.getDynmicList()},errArticleImg:function(t){var a=this,e=t.target.dataset.errImg,s=t.target.dataset.errIndex,n=a.data.dynamicList;n[s].ImgBig=e,a.setData({dynamicList:n})},toNewsDetails:function(a){this.setData({showPopFlag:!1});var e=a.currentTarget.dataset.articleid,s=t.globalData.WebUserID;wx.navigateTo({url:"/pages/company/newsdetail?id="+e+"&userid="+s})},sharetoFriend:function(){},onShareAppMessage:function(a){var e=this,s=e.data.optionsObj;s.BusinessCardID=e.data.businessCardID,s.userid=t.globalData.WebUserID;var n="",i="";if(a.target){var o=a.target.dataset.articleid;n=a.target.dataset.title,i=""+e.data.baseUrl+a.target.dataset.img,e.path="/pages/company/newsdetail?id="+o+"&businessid="+t.globalData.businessCardInfo.businessCardID+"&userid="+t.globalData.WebUserID,e.addTranspond(o)}else e.path=t.getPageUrl(e,s);return t.shareAppMessage({url:e.path,title:n,imageUrl:i})},addTranspond:function(a){t.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=addTranspond",method:"POST",data:{ArticleID:a},success:function(t){},fail:function(t){}})},TouchDiscuss:function(t){var a=this,e=a.data.dynamicList;a.data.currentIndex==t.currentTarget.dataset.index&&(e[a.data.currentIndex].showPop=!1);for(var s=0;s<e.length;s++)e[s].showPop=!1,t.currentTarget.dataset.index==s&&(e[s].showPop=!0);a.setData({canhold:!0,dynamicList:e}),a.data.currentIndex==t.currentTarget.dataset.index?a.setData({currentIndex:t.currentTarget.dataset.index,showPopFlag:!a.data.showPopFlag}):a.setData({currentIndex:t.currentTarget.dataset.index,showPopFlag:!0})},clickLove:function(a){var e=this,s=a.currentTarget.dataset.articleid,n=t.globalData.WebUserID?t.globalData.WebUserID:0;t.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=addLike",method:"POST",data:{ArticleID:s,UserID:n},success:function(a){if(a.success){var n=e.data.dynamicList;n.forEach(function(a){a.ArticleID==s&&(a.showPop=!1,""!=a.NickNameText?a.NickNameText=a.NickNameText+","+t.globalData.userInfo.nickName:a.NickNameText=a.NickNameText+t.globalData.userInfo.nickName)}),e.setData({dynamicList:n,showPopFlag:!1})}else t.showToast({title:a.msg,icon:"none"}),e.setData({showPopFlag:!1})},fail:function(t){}})},toComment:function(a){var e=this,s=a.currentTarget.dataset.articleid,n=t.globalData.WebUserID?t.globalData.WebUserID:0;t.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=getUserCommentCount&ArticleID="+s+"&UserID="+n,method:"GET",success:function(a){e.setData({showPopFlag:!1}),a.success?0==a.IsComment?e.setData({showForm:!0,articleID:s}):t.showToast({title:"文章评论不能超过10条",icon:"none"}):t.showToast({title:a.msg,icon:"none"})},fail:function(t){}})},sendComment:function(t){var a=t.detail.value.commentcontent;""!=a&&this.addComment(a)},inputComment:function(t){this.setData({commentcontent:t.detail.value})},sendclose:function(t){var a=this,e=t.detail.value;""==e?a.setData({canhold:!0}):(a.setData({canhold:!1}),a.addComment(e))},addComment:function(a){var e=this,s=e.data.articleID,n=e.data.currentIndex,i=t.globalData.WebUserID?t.globalData.WebUserID:0,o=e.data.dynamicList;t.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=getArticleconfig",method:"GET",success:function(c){c.success&&t.sendRequest({url:"/index.php?c=Front/WxApp/Dynamic/Dynamic&a=addComment",method:"POST",data:{ArticleID:s,UserID:i,Content:a},success:function(s){if(s.success)if(1==c.info.EnableCommentReviewMobile){if(0!=i){var r=t.globalData.userInfo.nickName;o[n].CommentList.push({nickname:r,comment:a})}else o[n].CommentList.push({nickname:"游客",comment:a});e.setData({dynamicList:o,showForm:!1,commentcontent:""})}else t.showToast({title:"审核通过后显示",icon:"none"}),e.setData({showForm:!1,commentcontent:""});else;},fail:function(t){}})},fail:function(t){}})},touchstart:function(t){var a=this;""==t.target.id?t.target.dataset.index||t.target.dataset.isone?a.setData({showForm:!1,commentcontent:""}):a.setData({showPopFlag:!1,showForm:!1,commentcontent:""}):a.setData({showForm:!0})}}); 
 			}); 	require("pages/company/businessCard/dynamic.js");
 		__wxRoute = 'pages/company/businessCard/chatMessage';__wxRouteBegin = true; 	define("pages/company/businessCard/chatMessage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var t=require("../../../components/utils/socket.js"),a=getApp();Page({data:{lists:[{}],WebUserID:"",baseUrl:a.globalData.siteBaseUrl,DefaultImg:!1,BusinessCardID:"",socketHide:!1,socketTimeOut:!0,socketlianjie:!1},onShow:function(){a.globalData.cardSocket?this.listenSocket():(this.setData({socketTimeOut:!1,socketlianjie:!0}),this.openSocket()),this.getChatUserList()},onLoad:function(e){e.CardID&&this.setData({BusinessCardID:e.CardID,WebUserID:a.globalData.WebUserID})},openSocket:function(){var s=this,o=a.globalData.WebUserID;"{}"!=JSON.stringify(a.globalData.socket_config)&&o?(a.globalData.cardSocket=t.run(),s.setData({WebUserID:o}),t.listen("websocket-connected",function(e){var t={client_id:e.clientid,fromUserID:o};a.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=bindUid",data:t,method:"POST",hideLoading:!0,success:function(e){200==e.code?(s.setData({socketHide:!1}),console.log("绑定成功"),a.globalData.cardSocket.socketTask.onClose(function(e){s.data.socketlianjie&&(a.globalData.cardSocket=void 0,s.setData({socketHide:!0}),s.openSocket())})):setTimeout(function(){s.data.socketlianjie&&s.openSocket()},5e3)},fail:function(e){}})}),a.globalData.cardSocket.listen("chat_msg",function(t){var o=t,n=s.data.lists,i=n.find(function(e){return e.LastMessageInfo.FromUserID===t.fromUserID});if(i){i.CrTime=t.crTime,"..."==i.IsReadCount?(i.LastMessageInfo.Content=o.content,i.LastMessageInfo.CrTime=o.listTime):(i.IsReadCount=Number(i.IsReadCount)+1,i.LastMessageInfo.Content=o.content,i.LastMessageInfo.CrTime=o.listTime),"null"==i.IsReadCount&&(i.IsReadCount="...");var r=n.findIndex(function(e){return e.LastMessageInfo.FromUserID===t.fromUserID});r>-1&&(n[r]=i)}else{var c={CrTime:0,IsReadCount:0,LastMessageInfo:{Content:"",CrTime:"",FromUserID:"",ID:"",IsRead:"",SiteID:"",ToUserID:"",Type:"text"},UserInfo:{BindWxApp:"",HeadImgUrl:"",NickName:"",UserID:""}};c.CrTime=t.crTime,c.IsReadCount=1,c.LastMessageInfo={Content:t.content,CrTime:t.listTime,FromUserID:t.fromUserID,ID:"",IsRead:"0",SiteID:a.globalData.siteId,ToUserID:t.toUserID,Type:"text"},c.UserInfo={BindWxApp:"",HeadImgUrl:t.HeadImgUrl,NickName:t.NickName,UserID:t.fromUserID},n=[].concat(e(n),[c])}n=n.sort(function(e,t){return t.CrTime-e.CrTime}),s.setData({lists:n})}),a.globalData.cardSocket.socketTask.onError(function(e){setTimeout(function(){s.data.socketlianjie&&s.openSocket()},5e3)})):setTimeout(function(){s.openSocket()},1500)},listenSocket:function(){var t=this;t.setData({socketTimeOut:!0,socketlianjie:!1}),a.globalData.cardSocket.listen("chat_msg",function(s){var o=s,n=t.data.lists,i=n.find(function(e){return e.LastMessageInfo.FromUserID===s.fromUserID});if(i){i.CrTime=s.crTime,"..."==i.IsReadCount?(i.LastMessageInfo.Content=o.content,i.LastMessageInfo.CrTime=o.listTime):(i.IsReadCount=Number(i.IsReadCount)+1,i.LastMessageInfo.Content=o.content,i.LastMessageInfo.CrTime=o.listTime),"null"==i.IsReadCount&&(i.IsReadCount="...");var r=n.findIndex(function(e){return e.LastMessageInfo.FromUserID===s.fromUserID});r>-1&&(n[r]=i)}else{var c={CrTime:0,IsReadCount:0,LastMessageInfo:{Content:"",CrTime:"",FromUserID:"",ID:"",IsRead:"",SiteID:"",ToUserID:"",Type:"text"},UserInfo:{BindWxApp:"",HeadImgUrl:"",NickName:"",UserID:""}};c.CrTime=s.crTime,c.IsReadCount=1,c.LastMessageInfo={Content:s.content,CrTime:s.listTime,FromUserID:s.fromUserID,ID:"",IsRead:"0",SiteID:a.globalData.siteId,ToUserID:s.toUserID,Type:"text"},c.UserInfo={BindWxApp:"",HeadImgUrl:s.HeadImgUrl,NickName:s.NickName,UserID:s.fromUserID},n=[].concat(e(n),[c])}n=n.sort(function(e,t){return t.CrTime-e.CrTime}),t.setData({lists:n})}),a.globalData.cardSocket.socketTask.onClose(function(e){t.data.socketTimeOut&&(a.globalData.cardSocket=void 0,t.setData({socketTimeOut:!1,socketlianjie:!0,socketHide:!0}),t.openSocket())})},goChatDialogue:function(e){var t=this,a=e.currentTarget.dataset.userid,s=e.currentTarget.dataset.imgurl,o=e.currentTarget.dataset.chatname;setTimeout(function(){wx.navigateTo({url:"/pages/company/businessCard/chatDialogue?id="+a+"&imgurl="+s+"&CardID="+t.data.BusinessCardID+"&OtherName="+o})},10)},getChatUserList:function(){var e=this;a.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=getChatUserList&fromUserID="+e.data.WebUserID,method:"GET",success:function(t){200==t.code&&(e.setData({lists:t.data.list}),0==t.data.list.length&&e.setData({DefaultImg:!0}))},fail:function(e){}})},onMessageSubmit:function(e){var t={formID:e.detail.formId,userID:a.globalData.WebUserID};a.saveFormID(t,function(e){})},onUnload:function(){this.setData({socketTimeOut:!1,socketlianjie:!1}),this.data.socketHide&&(a.globalData.cardSocket=void 0)},onHide:function(){this.setData({socketTimeOut:!1,socketlianjie:!1}),this.data.socketHide&&(a.globalData.cardSocket=void 0)}}); 
 			}); 	require("pages/company/businessCard/chatMessage.js");
 		__wxRoute = 'pages/company/businessCard/chatDialogue';__wxRouteBegin = true; 	define("pages/company/businessCard/chatDialogue.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../components/utils/socket.js"),a=getApp();Page({data:{msgLists:[],jsonStatus:!0,modalStatus:!1,defaultStatus:!1,sendStatus:!0,copyStatus:!1,scrollStatus:"",inputStatus:!1,introduceStatus:!0,WebUserID:"",inputValue:"",nickName:"",avatarUrl:"",OtherID:"",OtherURL:"",BusinessCardID:"",SiteID:"",card_info:null,BusinessMobile:"",BusinessWeChat:"",curpage:"",nottomHeight:"",pagecount:"",loading_top:-80,baseUrl:a.globalData.siteBaseUrl,sendRepeat:!1,listRepeat:!1,socketTimeOut:!0,scrollHeight:"",lastTime:"",userdetails:!0,bottomRPX:0,resetSendMsgStatus:!1,socketlianjie:!1,socketHide:!1,resetSendMsgData:{},isChatlog:!1},onLoad:function(t){var e=this;t.BusinessCardID?e.setData({BusinessCardID:t.BusinessCardID,OtherID:t.UserID,SiteID:t.SiteID,defaultStatus:!0}):(e.setData({OtherID:t.id,OtherURL:t.imgurl,BusinessCardID:t.CardID,SiteID:a.globalData.baseInfo.SiteID,sendStatus:!1}),t.userdetails&&e.setData({userdetails:!1,sendStatus:!0}),wx.setNavigationBarTitle({title:t.OtherName})),e.businessUser(),a.doAfterUserInfoAuth({success:this.initData,fail:this.initData}),wx.getSystemInfo({success:function(t){"iOS"===t.system.split(" ")[0]?e.setData({inputStatus:!0}):"Android"===t.system.split(" ")[0]&&e.setData({inputStatus:!1})}})},initData:function(){var t=a.globalData.userInfo;this.setData({nickName:t.nickName,avatarUrl:t.avatarUrl,WebUserID:a.globalData.WebUserID}),this.isSendDefaultChatMsg(),this.getChatMessageList(),this.updateMessageIsRead(),this.updateServiceNoticeIsProcess()},businessUser:function(){var t=this;a.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=getBusinessCardInfoByCardID&UserID="+t.data.OtherID+"&SiteID="+t.data.SiteID+"&BusinessCardID="+t.data.BusinessCardID,method:"GET",success:function(a){a.success&&(t.setData({card_info:a.info.card_info,BusinessMobile:a.info.card_info.Mobile,BusinessWeChat:a.info.card_info.WeChat}),t.data.defaultStatus&&(t.setData({OtherURL:a.info.card_info.HeadImgUrl}),wx.setNavigationBarTitle({title:a.info.card_info.UserName})))}})},openSocket:function(){var e=this,s=a.globalData.WebUserID;"{}"==JSON.stringify(a.globalData.socket_config)?setTimeout(function(){e.openSocket()},5e3):(a.globalData.cardSocket&&a.globalData.cardSocket.close(),a.globalData.cardSocket=t.run(),t.listen("websocket-connected",function(t){var i={client_id:t.clientid,fromUserID:s};a.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=bindUid",data:i,method:"POST",success:function(t){200==t.code?(e.setData({socketHide:!1}),console.log("绑定成功"),a.globalData.cardSocket.socketTask.onClose(function(t){e.data.socketlianjie&&(a.globalData.cardSocket=void 0,e.setData({socketHide:!0}),e.openSocket())})):setTimeout(function(){e.data.socketlianjie&&e.openSocket()},5e3)},fail:function(t){}})}),a.globalData.cardSocket.listen("chat_msg",function(t){var a=t;if(a.fromUserID===e.data.OtherID){var s={},i=e.data.msgLists;s.FromUserID=e.data.OtherID,s.Type=a.msgType,s.Content=a.content,i.push(s);var n="";n="scrollBottom"==e.data.scrollStatus?"scrollBottom1":"scrollBottom",e.setData({msgLists:i,scrollStatus:n,lastTime:a.crTime}),e.data.isChatlog&&e.updateMessageIsRead()}}),a.globalData.cardSocket.socketTask.onError(function(t){setTimeout(function(){e.data.socketlianjie&&e.openSocket()},5e3)}))},listenSocket:function(){var t=this;t.setData({socketTimeOut:!0,socketlianjie:!1}),a.globalData.cardSocket.listen("chat_msg",function(a){var e=a;if(e.fromUserID===t.data.OtherID){var s={},i=t.data.msgLists;s.FromUserID=t.data.OtherID,s.Type=e.msgType,s.Content=e.content,i.push(s);var n="";n="scrollBottom"==t.data.scrollStatus?"scrollBottom1":"scrollBottom",t.setData({msgLists:i,scrollStatus:n,lastTime:e.crTime}),t.data.isChatlog&&t.updateMessageIsRead()}}),a.globalData.cardSocket.socketTask.onClose(function(e){t.data.socketTimeOut&&(a.globalData.cardSocket=void 0,t.setData({socketTimeOut:!1,socketlianjie:!0,socketHide:!0}),t.openSocket())})},getChatMessageList:function(t,e){var s=this,i="",n=!1;t?(i=t,n=!0):i="1",a.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=getChatMessageList&fromUserID="+s.data.WebUserID+"&toUserID="+s.data.OtherID+"&page="+i+"&pagesize=20",method:"GET",hideLoading:n,success:function(a){if(200==a.code){a.data.curpage!=a.data.pagecount||s.data.defaultStatus||a.data.list.length>0&&(a.data.list[0].TimeOut=1);var i="";if(a.data.list.forEach(function(t,a){1==t.TimeOut&&(i=t.CrTime)}),setTimeout(function(){s.setData({listRepeat:!1})},500),t){var n=[],o=s.data.msgLists;n=a.data.list.concat(o),s.setData({msgLists:n,curpage:a.data.curpage,pagecount:a.data.pagecount,lastTime:i,loading_top:-80,scrollStatus:e})}else s.setData({msgLists:a.data.list,curpage:a.data.curpage,pagecount:a.data.pagecount,lastTime:i,loading_top:-80,scrollStatus:"scrollBottom"})}else s.setData({loading_top:-80})}})},updateMessageIsRead:function(){var t={};t.fromUserID=a.globalData.WebUserID,t.toUserID=this.data.OtherID,a.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=updateMessageIsRead",data:t,method:"POST",hideLoading:!0,success:function(t){t.code},fail:function(t){}})},updateServiceNoticeIsProcess:function(){var t={};t.fromUserID=a.globalData.WebUserID,t.toUserID=this.data.OtherID,a.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=updateServiceNoticeIsProcess",data:t,method:"POST",hideLoading:!0,success:function(t){t.code},fail:function(t){}})},getInputValue:function(t){var a=t.detail.value;this.setData({inputValue:a})},sendMeesge:function(){var t=this;if(""!=t.data.inputValue.replace(/(^\s*)/g,"")||t.data.sendStatus){t.setData({sendRepeat:!0});var e={},s=(new Date).getTime(),i=t.data.inputValue;if(!t.data.sendStatus){var n=t.data.msgLists,o="";if(o="scrollBottom"==t.data.scrollStatus?"scrollBottom1":"scrollBottom",e.Content=i,e.tanhaoStatus=!1,e.loadingStatus=!1,e.FromUserID=t.data.WebUserID,t.data.resetSendMsgStatus)e.uniqueId=t.data.resetSendMsgData.uniqueid,s=t.data.resetSendMsgData.uniqueid,e.Content=t.data.resetSendMsgData.sendmsg,i=t.data.resetSendMsgData.sendmsg,t.setData({inputValue:"",resetSendMsgStatus:!1});else{if(e.uniqueId=(new Date).getTime(),parseInt(e.uniqueId/1e3)-t.data.lastTime>300){var d=t.changeTime(s);e.pageTime=d,e.TimeOut=1,t.setData({lastTime:parseInt(e.uniqueId/1e3)})}n.push(e),t.setData({msgLists:n,scrollStatus:o,inputValue:""})}setTimeout(function(){if(t.data.sendRepeat){var a=t.data.msgLists;a.forEach(function(t,s){t.uniqueId&&t.uniqueId==e.uniqueId&&(a[s].loadingStatus=!0)}),t.setData({msgLists:a})}},2e3)}var u="text",r=t.data.WebUserID,c=t.data.OtherID;t.data.sendStatus&&(i="default",u="default",r=t.data.OtherID,c=t.data.WebUserID);var l={fromUserID:r,toUserID:c,content:i,msgType:u,uniqueId:s,businessCardID:t.data.BusinessCardID};a.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=sendChatMsg",data:l,method:"POST",hideLoading:!0,chatHiddenModal:!0,success:function(e){t.setData({sendRepeat:!1});var s=t.data.msgLists;if(200!=e.code||t.data.sendStatus)t.data.sendStatus&&t.getChatMessageList(),200!==e.code&&(s.forEach(function(t,a){t.uniqueId&&t.uniqueId==e.data.uniqueId&&(s[a].tanhaoStatus=!0,s[a].loadingStatus=!1)}),t.setData({msgLists:s})),t.setData({sendStatus:!1});else{if(t.data.defaultStatus){var i={tbUserID:a.globalData.WebUserID,tbType:"4",tbTypeID:t.data.BusinessCardID,tbTypeName:"",tbTypeImg:"",tbBusinessCardID:t.data.BusinessCardID};a.buried(i,function(t){})}s.forEach(function(t,a){t.uniqueId&&t.uniqueId==e.data.uniqueId&&(s[a].loadingStatus=!1)}),t.setData({msgLists:s,sendStatus:!1})}},fail:function(a){var s=t.data.msgLists;s.forEach(function(t,a){t.uniqueId&&t.uniqueId==e.uniqueId&&(s[a].tanhaoStatus=!0,s[a].loadingStatus=!1)}),t.setData({msgLists:s,sendRepeat:!1})}})}},initBusiness:function(){wx.navigateTo({url:"/pages/company/businessCard/cardDetails?BusinessCardID="+this.data.BusinessCardID+"&SiteID="+this.data.SiteID})},goMyShop:function(){var t=this;a.globalData.cardSocket&&(t.setData({socketTimeOut:!1}),a.globalData.cardSocket.close(),setTimeout(function(){a.globalData.cardSocket=void 0},200)),wx.switchTab({url:"/pages/company/index"})},goCardDetails:function(){wx.navigateTo({url:"/pages/company/businessCard/cardDetails?BusinessCardID="+this.data.BusinessCardID+"&SiteID="+this.data.SiteID+"&dongtai=true"})},Dialing:function(t){var e=this,s=this.data.BusinessMobile;if(e.data.defaultStatus){var i={tbUserID:a.globalData.WebUserID,tbType:"2",tbTypeID:this.data.BusinessCardID,tbTypeName:"",tbTypeImg:"",tbBusinessCardID:e.data.BusinessCardID};a.buried(i,function(t){})}wx.makePhoneCall({phoneNumber:s})},addWechat:function(){this.setData({modalStatus:!0})},hiddenModal:function(){this.setData({modalStatus:!1})},copyWeChat:function(){var t=this;if(t.data.defaultStatus){var e={tbUserID:a.globalData.WebUserID,tbType:"7",tbTypeID:this.data.BusinessCardID,tbTypeName:"",tbTypeImg:"",tbBusinessCardID:t.data.BusinessCardID};a.buried(e,function(t){})}wx.setClipboardData({data:t.data.BusinessWeChat,success:function(e){a.showToast({title:"内容已复制",icon:"none"}),t.setData({copyStatus:!0})}})},onChatSubmit:function(t){var e={formID:t.detail.formId,userID:a.globalData.WebUserID};a.saveFormID(e,function(t){})},errMessage:function(){wx.showModal({title:"",content:"网络异常，请稍后再试！",showCancel:!1,success:function(t){t.confirm?wx.navigateBack({delta:1}):t.cancel}})},isSendDefaultChatMsg:function(){var t=this;a.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=isSendDefaultChatMsg&fromUserID="+t.data.OtherID+"&toUserID="+t.data.WebUserID,method:"GET",success:function(a){200==a.code&&(0==a.data.isSendDefault?t.sendMeesge():t.setData({sendStatus:!1}))},fail:function(t){}})},onShow:function(){a.globalData.cardSocket?this.listenSocket():(this.setData({socketTimeOut:!1,socketlianjie:!0}),this.openSocket());var t=void 0;t=this.data.defaultStatus?parseInt(wx.getSystemInfoSync().windowHeight-wx.getSystemInfoSync().windowWidth/750*176):parseInt(wx.getSystemInfoSync().windowHeight-wx.getSystemInfoSync().windowWidth/750*104),this.setData({scrollHeight:t,isChatlog:!0})},onHide:function(){this.setData({socketTimeOut:!1,socketlianjie:!1,isChatlog:!1}),this.data.socketHide&&(a.globalData.cardSocket=void 0)},onUnload:function(){this.setData({socketTimeOut:!1,socketlianjie:!1,isChatlog:!1}),this.data.socketHide&&(a.globalData.cardSocket=void 0)},onbindfocus:function(t){var a=t.detail.height;this.data.inputStatus&&this.setData({bottomRPX:a})},onbindblur:function(){this.data.inputStatus&&this.setData({bottomRPX:0})},resetSendMsg:function(t){var a=this,e={},s=a.data.msgLists;e.sendmsg=t.currentTarget.dataset.sendmsg,e.uniqueid=t.currentTarget.dataset.uniqueid,s.forEach(function(a,e){a.uniqueId&&a.uniqueId==t.currentTarget.dataset.uniqueid&&(s[e].tanhaoStatus=!1,s[e].loadingStatus=!0)}),a.setData({inputValue:t.currentTarget.dataset.sendmsg,resetSendMsgStatus:!0,resetSendMsgData:e,msgLists:s}),a.sendMeesge()},changeTime:function(t){var a=new Date(t),e=a.getFullYear(),s=a.getMonth()+1,i=a.getDate(),n=a.getHours(),o=a.getMinutes();return e+"/"+this.add0(s)+"/"+this.add0(i)+" "+this.add0(n)+":"+this.add0(o)},add0:function(t){return t<10?"0"+t:t},onDownMore:function(){var t=this;if(!this.data.listRepeat){this.setData({listRepeat:!0});var a="id"+this.data.msgLists[0].ID;if(this.data.curpage!=this.data.pagecount){this.setData({loading_top:0});var e=Number(this.data.curpage)+1;setTimeout(function(){t.getChatMessageList(e,a)},1e3)}}}}); 
 			}); 	require("pages/company/businessCard/chatDialogue.js");
 		__wxRoute = 'pages/company/businessCard/airadar';__wxRouteBegin = true; 	define("pages/company/businessCard/airadar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function a(a){if(Array.isArray(a)){for(var t=0,e=Array(a.length);t<a.length;t++)e[t]=a[t];return e}return Array.from(a)}var t=getApp(),e=(require("../../../common.js"),require("../../../components/utils/socket.js"));Page({filterBox:null,data:{isLoading:!1,pullDownRefreshFlag:!0,falgAjax:!0,markFlag:!1,filterDayFlag:!1,baseUrl:t.globalData.siteBaseUrl,currentTab:0,winHeight:"",behaviorBlank:!1,behaviorcount:99,haveGetBehavior:!1,pagesize:10,behaviorList:[],cardFilterDay:7,userFilterDay:7,dataFilterDay:7,dataSocket:"",showMesTipFlag:!1,mesNum:0,showBehaviorNoDataTip:!1,haveGetCardStatistics:!1,statistics:{},userCountList:[],userCurrentPage:1,userTotalPage:99,haveUserTypeGroup:!1,userCountBlank:!1,userTop:0,noMoreUserdataTip:!1,dataCountList:[],goodsCount:"",goodsSaleCount:"",serviceCount:"",businessCount:"",articeCount:"",socketTimeOut:!0,socketlianjie:!1,socketHide:!1,haveSummary:!1},onLoad:function(a){var t=this;t.getSwipHeight(),t.setData({optionsobj:a}),t.loadCurData(a)},onShow:function(){var a=this;t.globalData.cardSocket?this.listenSocket():(a.setData({socketTimeOut:!1,socketlianjie:!0}),this.openSocket())},onPullDownRefresh:function(){var a=this,t=a.data.pullDownRefreshFlag,e=a.data.currentTab;t&&(a.setData({pullDownRefreshFlag:!1}),a.data.pullDownRefreshFlag=!1,setTimeout(function(){0==e&&a.getTrackingBehaviorList(!0),a.setData({pullDownRefreshFlag:!0}),wx.stopPullDownRefresh()},1500))},openSocket:function(){var a=this,s=a.data.optionsobj.bossMsgStatus,i=t.globalData.WebUserID;"{}"!=JSON.stringify(t.globalData.socket_config)&&i?(t.globalData.cardSocket&&t.globalData.cardSocket.close(),t.globalData.cardSocket=e.run(),t.globalData.cardSocket.listen("websocket-connected",function(e){var s={client_id:e.clientid,fromUserID:i};t.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=bindUid",data:s,method:"POST",hideLoading:!0,success:function(e){200==e.code?(a.setData({socketHide:!1}),console.log("绑定成功"),t.globalData.cardSocket.socketTask.onClose(function(e){a.data.socketlianjie&&(t.globalData.cardSocket=void 0,a.setData({socketHide:!0}),a.openSocket())})):setTimeout(function(){a.data.socketlianjie&&a.openSocket()},5e3)},fail:function(a){}})}),t.globalData.cardSocket.listen("businesscard_msg",function(t){t.count>0&&("false"==s||!s)&&a.setData({showMesTipFlag:!0,mesNum:t.count})}),t.globalData.cardSocket.socketTask.onError(function(t){setTimeout(function(){a.data.socketlianjie&&a.openSocket()},5e3)})):setTimeout(function(){a.openSocket()},5e3)},listenSocket:function(){var a=this,e=a.data.optionsobj.bossMsgStatus;a.setData({socketTimeOut:!0,socketlianjie:!1}),t.globalData.cardSocket.listen("businesscard_msg",function(t){t.count>0&&("false"==e||!e)&&a.setData({showMesTipFlag:!0,mesNum:t.count})}),t.globalData.cardSocket.socketTask.onClose(function(e){a.data.socketTimeOut&&(t.globalData.cardSocket=void 0,a.setData({socketTimeOut:!1,socketlianjie:!0,socketHide:!0}),a.openSocket())})},loadCurData:function(a){var t=this;switch(this.setData({currentTab:a.currentTab}),a.currentTab){case"0":t.data.haveGetBehavior||(t.getTrackingBehaviorList(!0),t.setData({haveGetBehavior:!0}));break;case"1":t.data.haveGetCardStatistics||(t.getBusinessCardStatistics(),t.setData({haveGetCardStatistics:!0}));break;case"2":t.data.haveUserTypeGroup||(t.userTypeGroup(),t.setData({haveUserTypeGroup:!0}));break;case"3":t.data.haveSummary||(t.summary(),t.setData({haveSummary:!0}))}},switchTab:function(a){var t=this,e=a.detail.current;t.data.currentTab!=e&&(this.setData({currentTab:a.detail.current}),0==e?t.data.haveGetBehavior||(t.getTrackingBehaviorList(!0),t.setData({haveGetBehavior:!0})):1==e?t.data.haveGetCardStatistics||(t.getBusinessCardStatistics(),t.setData({haveGetCardStatistics:!0})):2==e?t.data.haveUserTypeGroup||(t.userTypeGroup(),t.setData({haveUserTypeGroup:!0})):3==e&&(t.data.haveSummary||(t.summary(),t.setData({haveSummary:!0}))))},refresh:function(){var a=this;a.setData({showMesTipFlag:!1,mesNum:0,showBehaviorNoDataTip:!1},function(){a.getTrackingBehaviorList(!0)})},swichNav:function(a){var t=a.currentTarget.dataset.current,e=this;e.data.currentTab!=t&&(this.setData({currentTab:t}),0==t?e.data.haveGetBehavior||(e.getTrackingBehaviorList(!0),e.setData({haveGetBehavior:!0})):1==t?e.data.haveGetCardStatistics||(e.getBusinessCardStatistics(),e.setData({haveGetCardStatistics:!0})):2==t?e.data.haveUserTypeGroup||(e.userTypeGroup(),e.setData({haveUserTypeGroup:!0})):3==t&&(e.data.haveSummary||(e.summary(),e.setData({haveSummary:!0}))))},from_send:function(a){var e={formID:a.detail.formId,userID:t.globalData.WebUserID};t.saveFormID(e,function(a){})},getSwipHeight:function(){var a=this;wx.getSystemInfo({success:function(t){var e=t.windowHeight,s=t.windowWidth,i=750/s,o=e*i-88,r=e*i-168;a.setData({winHeight:o,winHeight2:r,afterWinHeight:e*i,userCountHeight:parseInt(e-s/750*184)})}})},touserdetails:function(a){var t=this,e=t.data.currentTab,s=void 0;0==e?s=1:2==e&&(s=0);var i=t.data.optionsobj.cardid,o=a.currentTarget.dataset.headimgurl,r=a.currentTarget.dataset.nickname,n=a.currentTarget.dataset.userid;wx.navigateTo({url:"/pages/company/businessCard/userdetails?cardid="+i+"&headImgUrl="+o+"&userId="+n+"&currentTab="+s+"&bossMsgStatus="+t.data.optionsobj.bossMsgStatus+"&nickName="+r})},toDataDetails:function(a){var t=this,e=a.currentTarget.dataset.index,s=t.data.cardFilterDay,i=t.data.optionsobj.cardid,o=a.currentTarget.dataset.typeid,r="";switch(Number(e)){case 15:r="查看商城详细";break;case 12:r="查看动态详细";break;case 3:r="查看保存电话详细";break;case 5:r="查看转发名片详细";break;case 6:r="查看点赞详细";break;case 7:r="查看复制微信详细";break;case 8:r="查看复制QQ详细";break;case 9:r="查看复制邮箱详细";break;case 11:r="查看播放语音详细";break;case 1:r="查看名片浏览详细";break;case 2:r="查看拨打电话详细";break;case 4:r="查看留言互动详细"}wx.navigateTo({url:"/pages/company/businessCard/datadetails?title="+r+"&cardFilterDay="+s+"&typeId="+o+"&cardid="+i+"&isNoMember=1&bossMsgStatus="+t.data.optionsobj.bossMsgStatus})},chooseValue:function(a){var t=this,e=a.currentTarget.dataset.value,s=t.data.currentTab,i=t.data.cardFilterDay,o=t.data.userFilterDay,r=t.data.dataFilterDay;switch(s){case"1":i!=e&&t.setData({cardFilterDay:e},function(){t.getBusinessCardStatistics()});break;case"2":o!=e&&t.setData({userFilterDay:e,userTop:0,noMoreUserdataTip:!1},function(){t.userTypeGroup(!0)});break;case"3":r!=e&&t.setData({dataFilterDay:e},function(){t.summary()})}},getTrackingBehaviorList:function(e){var s=this,i=s.data.optionsobj.bossMsgStatus;e&&(s.data.behaviorcount=99,s.data.behaviorList=[]);var o=s.data.behaviorcount,r=s.data.behaviorList,n=0;if(r.length>0)for(var c=0;c<r.length;c++)n+=r[c].list.length;else n=0;var u=s.data.optionsobj.cardid;if(o>n&&s.data.falgAjax){s.setData({falgAjax:!1}),n>0&&s.setData({isLoading:!0});var d=Math.ceil(n/20)+1;t.sendRequest({hideLoading:n>0,url:"/index.php?c=Front/WxApp/TrackingBehavior/TrackingBehavior&a=getTrackingBehaviorList&tbPage="+d+"&tbTypeID="+u,method:"GET",success:function(t){if(t.success){0==t.list.length?s.setData({behaviorBlank:!0}):s.setData({behaviorBlank:!1});var e=t.list;e.forEach(function(a){a.list.forEach(function(a){Number(a.quantity)>1e5&&(a.quantity=(a.quantity/1e4).toFixed(0),a.showwan=!0),""==a.headImgUrl&&(a.headImgUrl=s.data.baseUrl+"/images/wxapp/touxiang.jpg")})});var o=r.length;o?(e[0].time||(r[o-1].list=[].concat(a(r[o-1].list),a(e[0].list)),e.splice(0,1)),r=[].concat(a(r),a(e))):r=e,s.setData({behaviorList:r,falgAjax:!0,behaviorcount:t.count},function(){s.setData({isLoading:!1})}),"false"!=i&&i||s.updateBehaviorStatus()}else console.log("getTrackingBehaviorList fail"+t.msg)}})}else o==n&&s.setData({showBehaviorNoDataTip:!0})},getBusinessCardStatistics:function(){var a=this,e=a.data.optionsobj.cardid,s=a.data.cardFilterDay;t.sendRequest({url:"/index.php?c=Front/WxApp/TrackingBehavior/TrackingBehavior&a=getBusinessCardStatistics&scope="+s+"&businessCardID="+e,method:"GET",success:function(t){t.success?(t.data.body.forEach(function(a){switch(Number(a.type)){case 15:a.icon="icon-enterprise";break;case 12:a.icon="icon-dongtai1";break;case 3:a.icon="icon-dianhua1";break;case 5:a.icon="icon-mingpian-copy";break;case 6:a.icon="icon-zan1";break;case 7:a.icon="icon-weixin";break;case 8:a.icon="icon-qq";break;case 9:a.icon="icon-_youxiang-copy";break;case 11:a.icon="icon-yuyin--copy"}}),a.setData({statistics:t.data})):console.log("getBusinessCardStatistics fail"+t.msg)},fail:function(a){}})},loadMoreData:function(){var a=this,t=a.data.currentTab;0==t?a.getTrackingBehaviorList():2==t&&a.userTypeGroup()},updateBehaviorStatus:function(){var a=this.data.optionsobj.cardid;t.sendRequest({url:"/index.php?c=Front/WxApp/TrackingBehavior/TrackingBehavior&a=edit",method:"POST",data:{tbTypeID:a},hideLoading:!0,success:function(a){a.success||console.log("updateBehaviorStatus fail"+a.msg)},fail:function(a){}})},userTypeGroup:function(a){var e=this,s=e.data.optionsobj.cardid,i=e.data.userFilterDay;a&&(e.data.userCurrentPage=1,e.data.userTotalPage=99,e.data.userCountList=[]);var o=e.data.userTotalPage,r=e.data.userCurrentPage,n=e.data.userCountList.length;if(o>r&&e.data.falgAjax){var c=Math.ceil(n/20)+1;e.setData({falgAjax:!1}),n>0&&e.setData({isLoading:!0}),t.sendRequest({hideLoading:n>0,url:"/index.php?c=Front/WxApp/TrackingBehavior/Report&a=userTypeGroup&scope="+i+"&page="+c+"&businessCardID="+s,method:"GET",success:function(a){if(a.success){var t=a.data.list;if(0==t.length)e.setData({userCountBlank:!0});else{t.forEach(function(a){a.number>1e5&&(a.number=(a.number/1e4).toFixed(0),a.showwan=!0),""==a.avatar&&(a.avatar=e.data.baseUrl+"/images/wxapp/touxiang.jpg")});for(var s=0;s<t.length;s++)e.data.userCountList.push(t[s]);e.setData({userCountList:e.data.userCountList,userTotalPage:a.data.statPage,userCurrentPage:a.data.page,falgAjax:!0},function(){e.setData({isLoading:!1})})}}else console.log("userTypeGroup fail"+a.msg)},fail:function(a){}})}else o==r&&e.setData({noMoreUserdataTip:!0})},summary:function(){var a=this,e=a.data.dataFilterDay;t.sendRequest({url:"/index.php?c=Front/WxApp/TrackingBehavior/Report&a=summary&scope="+e,method:"GET",success:function(t){t.success&&(t.data.forEach(function(a){18==a.type?a.iconfont="icon-shangpin introduceIcon1":24==a.type?a.iconfont="icon-qianbao1 introduceIcon2":19==a.type?a.iconfont="icon-fuwu introduceIcon3":1==a.type?a.iconfont="icon-mingpian-copy introduceIcon4":12==a.type?a.iconfont="icon-wenzhang introduceIcon5":23==a.type&&(a.iconfont="icon-huiyuan1 introduceIcon1")}),a.setData({dataCountList:t.data}))},fail:function(a){}})},initRankingList:function(a){var t=this,e=a.currentTarget.dataset.initname,s=t.data.dataFilterDay,i=a.currentTarget.dataset.type,o=t.data.optionsobj.cardid;23==i?wx.navigateTo({url:"/pages/company/businessCard/datadetails?title="+e+"&dataFilterDay="+s+"&cardid="+o+"&isNoMember=0&bossMsgStatus="+t.data.optionsobj.bossMsgStatus}):wx.navigateTo({url:"/pages/company/businessCard/rankinglist?typename="+e+"&filterDay="+s+"&itemType="+i})},onHide:function(){this.setData({socketTimeOut:!1,socketlianjie:!1}),this.data.socketHide&&(t.globalData.cardSocket=void 0)},onUnload:function(){this.setData({socketTimeOut:!1,socketlianjie:!1}),this.data.socketHide&&(t.globalData.cardSocket=void 0)}}); 
 			}); 	require("pages/company/businessCard/airadar.js");
 		__wxRoute = 'pages/company/businessCard/userdetails';__wxRouteBegin = true; 	define("pages/company/businessCard/userdetails.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=require("../AddrManage.js"),a=require("../../../components/utils/socket.js");Page({data:{baseUrl:t.globalData.siteBaseUrl,pullDownRefreshFlag:!0,winHeight:"",currentTab:1,routerCardid:"",routerHeadImgUrl:"",routerNickName:"",routerUserId:"",RecordList:[],RecordCount:"",RecordPage:1,RecordpageCount:"",RecordTabStatus:!1,showMoreView:!1,showNoMore:!1,recordDefaultImg:!1,rankingLists:[],ChartList:[],ChartTabStatus:!1,moreGoods:!1,userInfoData:{},userName:"",regionText:"",butStatus:!0,userTabStatus:!1,usergender:"",useraddress:"",AreaListCopy:"河北省,石家庄市,长安区",loadDone:!1,RecordCountNum:!1,optionsobjMsg:!0,hudongStatus:!1,socketHide:!1,socketTimeOut:!0,socketlianjie:!1},onLoad:function(t){var a=this;t.bossMsgStatus&&"true"==t.bossMsgStatus&&a.setData({optionsobjMsg:!1}),a.setData({routerCardid:t.cardid,routerHeadImgUrl:t.headImgUrl,routerNickName:t.nickName,routerUserId:t.userId,optionsobj:t}),1==t.currentTab?a.setData({currentTab:t.currentTab,hudongStatus:!0},function(){a.getInteractRecord()}):0==t.currentTab?a.setData({currentTab:t.currentTab,ChartTabStatus:!0},function(){a.getInteractSituation()}):2==t.currentTab&&a.setData({currentTab:t.currentTab,userTabStatus:!0},function(){a.userTypeDetail()}),a.getSwipHeight(),a.addrManage=new e({page:a,onSelected:a.onAddrManageClick})},onShow:function(){t.globalData.cardSocket?this.listenSocket():(this.setData({socketTimeOut:!1,socketlianjie:!0}),this.openSocket())},openSocket:function(){var e=this,o=t.globalData.WebUserID;"{}"!=JSON.stringify(t.globalData.socket_config)&&o?(t.globalData.cardSocket=a.run(),t.globalData.cardSocket.listen("websocket-connected",function(a){var r={client_id:a.clientid,fromUserID:o};t.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=bindUid",data:r,method:"POST",hideLoading:!0,success:function(a){200==a.code?(e.setData({socketHide:!1}),console.log("绑定成功"),t.globalData.cardSocket.socketTask.onClose(function(a){e.data.socketlianjie&&(t.globalData.cardSocket=void 0,e.setData({socketHide:!0}),e.openSocket())})):setTimeout(function(){e.data.socketlianjie&&e.openSocket()},5e3)},fail:function(t){}})}),t.globalData.cardSocket.socketTask.onError(function(t){setTimeout(function(){e.data.socketlianjie&&e.openSocket()},5e3)})):setTimeout(function(){e.openSocket()},1500)},listenSocket:function(){var e=this;e.setData({socketTimeOut:!0,socketlianjie:!1}),t.globalData.cardSocket.socketTask.onClose(function(a){e.data.socketTimeOut&&(t.globalData.cardSocket=void 0,e.setData({socketTimeOut:!1,socketlianjie:!0,socketHide:!0}),e.openSocket())})},swichNav:function(t){var e=t.currentTarget.dataset.current,a=this;if(a.data.currentTab!=e)if(a.setData({currentTab:e}),"0"==e){if(a.data.ChartTabStatus)return;a.setData({ChartTabStatus:!0},function(){a.getInteractSituation()})}else if("1"==e){if(a.data.hudongStatus)return;a.setData({hudongStatus:!0},function(){a.getInteractRecord()})}else if("2"==e){if(a.data.userTabStatus)return;a.setData({userTabStatus:!0,butStatus:!0},function(){a.userTypeDetail()})}},switchTab:function(t){var e=t.detail.current,a=this;if(a.data.currentTab!=e)if(a.setData({currentTab:e}),"0"==e){if(a.data.ChartTabStatus)return;a.setData({ChartTabStatus:!0},function(){a.getInteractSituation()})}else if("1"==e){if(a.data.hudongStatus)return;a.setData({hudongStatus:!0},function(){a.getInteractRecord()})}else if("2"==e){if(a.data.userTabStatus)return;a.setData({userTabStatus:!0,butStatus:!0},function(){a.userTypeDetail()})}},from_send:function(e){var a={formID:e.detail.formId,userID:t.globalData.WebUserID};t.saveFormID(a,function(t){})},getSwipHeight:function(){var t=this;wx.getSystemInfo({success:function(e){var a=e.windowHeight*(750/e.windowWidth)-284;t.setData({winHeight:a})}})},getInteractRecord:function(e){var a=this;e&&a.setData({RecordPage:1}),t.sendRequest({url:"/index.php?c=Front/WxApp/TrackingBehavior/TrackingBehavior&a=getInteractRecord&tbPage="+a.data.RecordPage+"&tbTypeID="+a.data.routerCardid+"&tbUserID="+a.data.routerUserId,method:"GET",hideLoading:a.data.RecordPage>1,success:function(t){if(t.success){var o=a.data.RecordList,r=[];(o=e?t.list:o.concat(t.list)).forEach(function(t,e){parseInt(t.quantity)>1e5&&((r=t.quantity.split("")).splice(-4,4,"万"),o[e].quantity=r.join(""))}),a.setData({RecordCount:t.count,RecordpageCount:t.pageCount,RecordList:o}),0==a.data.RecordList.length&&a.setData({RecordCountNum:!0})}},fail:function(t){}})},RecordListPage:function(){var t=this;if(t.data.RecordPage!=t.data.RecordpageCount){this.setData({showMoreView:!0});t.data.RecordPage++;t.getInteractRecord()}else this.setData({showNoMore:!0,showMoreView:!1})},getInteractSituation:function(){var e=this;t.sendRequest({url:"/index.php?c=Front/WxApp/TrackingBehavior/TrackingBehavior&a=getInteractSituation&tbTypeID="+e.data.routerCardid+"&tbUserID="+e.data.routerUserId,method:"GET",success:function(a){if(a.success){var o=0;a.data.forEach(function(t){o+=parseInt(t.maxQuantity)}),a.data.forEach(function(t){t.column=parseInt(t.maxQuantity/o*462)});var r=t.globalData.siteId;a.list.forEach(function(t){t.typeImg.indexOf("comdata")<0&&(t.typeImg="/comdata/"+r+"/product/"+t.typeImg)}),e.setData({ChartList:a.data,rankingLists:a.list,moreGoods:a.list.length>0})}},fail:function(t){}})},userTypeDetail:function(){var e=this;t.sendRequest({url:"/index.php?c=Front/WxApp/TrackingBehavior/Report&a=userTypeDetail&user_id="+e.data.routerUserId,method:"GET",success:function(t){var a="";a=""!==t.data.areaList?t.data.areaList.replace(/,/g,"")+t.data.address:t.data.address,t.success&&e.setData({userInfoData:t.data,selectedArea:t.data.areaList,useraddress:a,usergender:t.data.gender,loadDone:!0})},fail:function(t){}})},saveUserInfo:function(e){var a=this;if(a.from_send(e),0!=e.currentTarget.dataset.status){var o={},r=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,s=/^1[0-9]{10}$/;return o.user_id=a.data.routerUserId,o.name=e.detail.value.username,o.phone=e.detail.value.useriphone,o.gender=a.data.usergender,o.wechat=e.detail.value.userwechat,o.email=e.detail.value.useremail,o.address=e.detail.value.useraddress,o.areaList=e.detail.value.AreaList,a.getLength(e.detail.value.username,40)?(t.showToast({title:"姓名限20个汉字",icon:"none",duration:2500}),void setTimeout(function(){t.hideToast()},3e3)):""==e.detail.value.useriphone||s.test(e.detail.value.useriphone)?""==e.detail.value.useremail||r.test(e.detail.value.useremail)?void t.sendRequest({url:"/index.php?c=Front/WxApp/TrackingBehavior/Report&a=saveUserInfo",method:"POST",data:o,success:function(e){e.success?(a.userTypeDetail(),a.setData({butStatus:!0})):t.showToast({title:e.msg,icon:"none",duration:2500})},fail:function(t){}}):(t.showToast({title:"请输入正确的邮箱",icon:"none",duration:2500}),void setTimeout(function(){t.hideToast()},3e3)):(t.showToast({title:"请输入正确的电话号码",icon:"none",duration:2500}),void setTimeout(function(){t.hideToast()},3e3))}},onIphone:function(t){var e=t.currentTarget.dataset.iphone;wx.makePhoneCall({phoneNumber:e})},radioChange:function(t){this.setData({usergender:t.detail.value,"userInfoData.gender":t.detail.value})},onButtonChange:function(t){var e=this;1!=t.currentTarget.dataset.status&&e.setData({butStatus:!1})},initChatdialogue:function(){t.globalData.aiSocket&&(t.globalData.aiSocket.close(),setTimeout(function(){t.globalData.aiSocket=void 0},200)),wx.navigateTo({url:"/pages/company/businessCard/chatDialogue?id="+this.data.routerUserId+"&imgurl="+this.data.routerHeadImgUrl+"&CardID="+this.data.routerCardid+"&OtherName="+this.data.routerNickName+"&userdetails=true"})},onPullDownRefresh:function(){var t=this,e=t.data.pullDownRefreshFlag,a=t.data.currentTab;e&&(t.setData({pullDownRefreshFlag:!1}),t.data.pullDownRefreshFlag=!1,setTimeout(function(){0==a?t.getInteractSituation():1==a?t.getInteractRecord(!0):2==a&&t.userTypeDetail(),t.setData({pullDownRefreshFlag:!0}),wx.stopPullDownRefresh()},1500))},errArticleImg:function(t){var e=this,a=t.target.dataset.errImg,o=t.target.dataset.errIndex,r=e.data.rankingLists;r[o].typeImg=a,e.setData({rankingLists:r})},getLength:function(t,e){for(var a=0,o=null===t?"":t.length,r=-1,s=0;s<o;s++)a+=(r=t.charCodeAt(s))>=0&&r<=128?1:2;return a>e},onUnload:function(){this.setData({socketTimeOut:!1,socketlianjie:!1}),this.data.socketHide&&(t.globalData.cardSocket=void 0)},onHide:function(){this.setData({socketTimeOut:!1,socketlianjie:!1}),this.data.socketHide&&(t.globalData.cardSocket=void 0)}}); 
 			}); 	require("pages/company/businessCard/userdetails.js");
 		__wxRoute = 'pages/company/businessCard/datadetails';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/company/businessCard/datadetails.js';	define("pages/company/businessCard/datadetails.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}return Array.from(t)}var a=function(t){if(t&&t.__esModule)return t;var a={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e]);return a.default=t,a}(require("./common/ec-canvas/echarts")),e=require("../../../components/utils/socket.js"),i=getApp();Page({data:{isLoading:!1,falgAjax:!0,baseUrl:i.globalData.siteBaseUrl,markFlag:!1,filterDayFlag:!1,statisticsLines:{},barTitle:"",cardFilterDay:7,dataFilterDay:7,statisticsBlank:!1,haveStatistics:!1,statisticsList:[],statisticscount:99,total:0,haveGetMemberChart:!1,memberList:[],userCurrentPage:1,userTotalPage:99,toTop:0,noMoreDataTip:!1,socketHide:!1,socketTimeOut:!0,socketlianjie:!1},onLoad:function(t){var a=this;1==t.isNoMember?(this.setBarTitle(t),this.setData({cardFilterDay:t.cardFilterDay,isNoMember:!0})):this.setData({dataFilterDay:t.dataFilterDay,isNoMember:!1},function(){wx.setNavigationBarTitle({title:t.title})}),this.getHeight(),this.setData({optionsobj:t}),1==t.isNoMember?a.getBusinessCardStatisticsByType(!0):this.getNewUsersChart()},onShow:function(){i.globalData.cardSocket?this.listenSocket():(this.setData({socketTimeOut:!1,socketlianjie:!0}),this.openSocket())},openSocket:function(){var t=this,a=i.globalData.WebUserID;"{}"!=JSON.stringify(i.globalData.socket_config)&&a?(i.globalData.cardSocket=e.run(),i.globalData.cardSocket.listen("websocket-connected",function(e){var s={client_id:e.clientid,fromUserID:a};i.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=bindUid",data:s,method:"POST",hideLoading:!0,success:function(a){200==a.code?(t.setData({socketHide:!1}),console.log("绑定成功"),i.globalData.cardSocket.socketTask.onClose(function(a){t.data.socketlianjie&&(i.globalData.cardSocket=void 0,t.setData({socketHide:!0}),t.openSocket())})):setTimeout(function(){t.data.socketlianjie&&t.openSocket()},5e3)},fail:function(t){}})}),i.globalData.cardSocket.socketTask.onError(function(a){setTimeout(function(){t.data.socketlianjie&&t.openSocket()},5e3)})):setTimeout(function(){t.openSocket()},1500)},listenSocket:function(){var t=this;t.setData({socketTimeOut:!0,socketlianjie:!1}),i.globalData.cardSocket.socketTask.onClose(function(a){t.data.socketTimeOut&&(i.globalData.cardSocket=void 0,t.setData({socketTimeOut:!1,socketlianjie:!0,socketHide:!0}),t.openSocket())})},getHeight:function(){this.setData({height:parseInt(wx.getSystemInfoSync().windowHeight-wx.getSystemInfoSync().windowWidth/750*96)})},setBarTitle:function(t){wx.setNavigationBarTitle({title:t.title})},init_line:function(t){var e=this;this.statisticsLine.init(function(i,s,o){e.setData({eWidth:s,eHeight:o});var n=a.init(i,null,{width:s,height:o});return n.setOption(e.getLineOption(t)),n})},getLineOption:function(t){var a=t.num,e=t.day;return{title:{text:t.name,textStyle:{color:"#999",fontSize:11},top:"4%"},tooltip:{trigger:"axis",show:!0,showContent:!1},color:["#ff7200"],grid:{left:"2%",right:"4%",bottom:"0%",top:"18%",containLabel:!0},xAxis:{type:"category",name:"天",boundaryGap:!0,data:e,axisLabel:{textStyle:{color:"#999",fontSize:11}},axisLine:{lineStyle:{color:"#eee"}},axisTick:{show:!1}},yAxis:{x:"left",offset:0,type:"value",axisTick:{show:!1},axisLabel:{textStyle:{color:"#999",fontSize:11}},axisLine:{lineStyle:{color:"#eee"}},splitLine:{show:!1}},series:[{name:"",type:"line",symbol:"circle",smooth:!0,symbolSize:5,itemStyle:{normal:{label:{show:!0,position:"top",color:"#333",fontWeight:"bold"}}},lineStyle:{width:1},data:a}]}},chooseValue:function(t){var a=this,e=this,i=t.currentTarget.dataset.value,s=e.data.cardFilterDay,o=e.data.dataFilterDay,n=e.data.isNoMember;setTimeout(function(){e.setData({hideCanvas:!1})},200),this.setData({toTop:0,noMoreDataTip:!1}),n?s!=i&&e.setData({cardFilterDay:i,toTop:0},function(){a.getBusinessCardStatisticsByType(!0)}):o!=i&&e.setData({dataFilterDay:i,haveGetMemberChart:!1,toTop:0},function(){e.getNewUsersChart(),e.getNewUsers(!0)}),this.setData({filterDayFlag:!1},function(){setTimeout(function(){e.setData({markFlag:!1})},200)})},loadMoreData:function(){var t=this;1==t.data.optionsobj.isNoMember?t.getBusinessCardStatisticsByType():t.getNewUsers()},getBusinessCardStatisticsByType:function(a){var e=this;a&&(e.data.statisticscount=99,e.data.statisticsList=[]);var s=e.data.optionsobj.typeId,o=e.data.optionsobj.cardid,n=e.data.cardFilterDay,r=e.data.statisticscount,c=e.data.statisticsList,l=0;if(c.length>0)for(var d=0;d<c.length;d++)l+=c[d].list.length;else l=0;if(r>l&&e.data.falgAjax){e.setData({falgAjax:!1}),l>0&&e.setData({isLoading:!0});var u=Math.ceil(l/20)+1;i.sendRequest({hideLoading:l>0,url:"/index.php?c=Front/WxApp/TrackingBehavior/TrackingBehavior&a=getBusinessCardStatisticsByType&tbPage="+u+"&tbTypeID="+s+"&tbBusinessCardID="+o+"&scope="+n,method:"GET",success:function(a){if(a.success){if(0==a.list.list.length)e.setData({statisticsBlank:!0,haveStatistics:!1});else{var i=a.data;i.day&&i.num&&(i.name="单位：次",e.setData({statisticsBlank:!1,haveStatistics:!0,total:a.total},function(){e.statisticsLine=e.selectComponent("#mychart-dom"),e.init_line(i)}));var s=a.list.list;s.forEach(function(t){t.list.forEach(function(t){Number(t.quantity)>1e5&&(t.quantity=(t.quantity/1e4).toFixed(0),t.showwan=!0),""==t.headImgUrl&&(t.headImgUrl=e.data.baseUrl+"/images/wxapp/touxiang.jpg")})});var o=c.length;o?(s[0].time||(c[o-1].list=[].concat(t(c[o-1].list),t(s[0].list)),s.splice(0,1)),c=[].concat(t(c),t(s))):c=s}e.setData({statisticsList:c,falgAjax:!0,statisticscount:a.list.count},function(){e.setData({isLoading:!1})})}else console.log("getTrackingBehaviorList fail"+a.msg)}})}else r==l&&e.setData({noMoreDataTip:!0})},scrolling:function(t){var a=this,e=0;wx.getSystemInfo({success:function(t){var a=t.windowWidth;e=a/750*480}});var i=this.data;t.detail.scrollTop>=20&&i.toTop<e&&!i.hideCanvas?this.setData({hideCanvas:!0,toTop:e}):t.detail.scrollTop<=e&&t.detail.deltaY>0&&i.hideCanvas&&(setTimeout(function(){a.setData({hideCanvas:!1})},200),this.setData({toTop:0}))},from_send:function(t){var a={formID:t.detail.formId,userID:i.globalData.WebUserID};i.saveFormID(a,function(t){})},touserdetails:function(t){var a=this,e=void 0;e=a.data.isNoMember?1:2;var i=a.data.optionsobj.cardid,s=t.currentTarget.dataset.headimgurl,o=t.currentTarget.dataset.nickname,n=t.currentTarget.dataset.userid;wx.navigateTo({url:"/pages/company/businessCard/userdetails?cardid="+i+"&headImgUrl="+s+"&userId="+n+"&currentTab="+e+"&bossMsgStatus="+a.data.optionsobj.bossMsgStatus+"&nickName="+o})},getNewUsers:function(a){var e=this,s=e.data.dataFilterDay;a&&(e.data.userCurrentPage=1,e.data.userTotalPage=99,e.data.memberList=[]);var o=e.data.userTotalPage,n=e.data.userCurrentPage,r=e.data.memberList,c=0;if(r.length>0)for(var l=0;l<r.length;l++)c+=r[l].list.length;else c=0;if(o>n&&e.data.falgAjax){var d=Math.ceil(c/20)+1;e.setData({falgAjax:!1}),i.sendRequest({url:"/index.php?c=Front/WxApp/TrackingBehavior/Report&a=newUsers&page="+d+"&scope="+s+"&pageSize=20",method:"GET",success:function(a){if(a.success)if(0==a.data.userList.length)e.setData({statisticsBlank:!0,haveStatistics:!1});else{e.setData({statisticsBlank:!1,haveStatistics:!0}),e.data.haveGetMemberChart||e.setData({haveGetMemberChart:!0},function(){var t=e.data.memberChart;t.name="单位：个",e.statisticsLine=e.selectComponent("#mychart-dom"),e.init_line(t)});var i=a.data.userList;i.forEach(function(t){t.list.forEach(function(t){""==t.avatar&&(t.avatar=e.data.baseUrl+"/images/wxapp/touxiang.jpg")})});var s=r.length;s?(i[0].time==r[s-1].time&&(r[s-1].list=[].concat(t(r[s-1].list),t(i[0].list)),i.splice(0,1)),r=[].concat(t(r),t(i))):r=i}else console.log("getNewUsers fail"+a.msg);e.setData({total:a.data.total,memberList:r,userTotalPage:a.data.statPage,userCurrentPage:Number(a.data.page),falgAjax:!0})},fail:function(t){}})}else o==n&&e.setData({noMoreDataTip:!0})},getNewUsersChart:function(){var t=this,a=t.data.dataFilterDay;i.sendRequest({url:"/index.php?c=Front/WxApp/TrackingBehavior/Report&a=newUsersChart&scope="+a,method:"GET",success:function(a){a.success?t.setData({memberChart:a.data},function(){t.getNewUsers(!0)}):console.log("getNewUsersChart fail"+a.msg)},fail:function(t){}})},onUnload:function(){this.setData({socketTimeOut:!1,socketlianjie:!1}),this.data.socketHide&&(i.globalData.cardSocket=void 0)},onHide:function(){this.setData({socketTimeOut:!1,socketlianjie:!1}),this.data.socketHide&&(i.globalData.cardSocket=void 0)}}); 
 			}); 	require("pages/company/businessCard/datadetails.js");
 		__wxRoute = 'pages/company/businessCard/rankinglist';__wxRouteBegin = true; 	define("pages/company/businessCard/rankinglist.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=require("../../../components/utils/socket.js");Page({data:{rankingList:[],baseUrl:t.globalData.siteBaseUrl,page_count:"",rankingpage:1,DefaultImg:!1,showMoreView:!1,showNoMore:!1,typename:"",cardFilterDay:7,InterfaceURL:"",isBoss:!1,socketHide:!1,socketTimeOut:!0,socketlianjie:!1},onLoad:function(t){wx.setNavigationBarTitle({title:t.typename+"排行"}),this.setData({optionsobj:t,cardFilterDay:t.filterDay}),1==t.isBoss&&this.setData({isBoss:!0}),this.gettypename(t)},onShow:function(){t.globalData.cardSocket?this.listenSocket():(this.setData({socketTimeOut:!1,socketlianjie:!0}),this.openSocket())},openSocket:function(){var e=this,i=t.globalData.WebUserID;"{}"!=JSON.stringify(t.globalData.socket_config)&&i?(t.globalData.cardSocket=a.run(),t.globalData.cardSocket.listen("websocket-connected",function(a){var o={client_id:a.clientid,fromUserID:i};t.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=bindUid",data:o,method:"POST",hideLoading:!0,success:function(a){200==a.code?(e.setData({socketHide:!1}),console.log("绑定成功"),t.globalData.cardSocket.socketTask.onClose(function(a){e.data.socketlianjie&&(t.globalData.cardSocket=void 0,e.setData({socketHide:!0}),e.openSocket())})):setTimeout(function(){e.data.socketlianjie&&e.openSocket()},5e3)},fail:function(t){}})}),t.globalData.cardSocket.socketTask.onError(function(t){setTimeout(function(){e.data.socketlianjie&&e.openSocket()},5e3)})):setTimeout(function(){e.openSocket()},1500)},listenSocket:function(){var a=this;a.setData({socketTimeOut:!0,socketlianjie:!1}),t.globalData.cardSocket.socketTask.onClose(function(e){a.data.socketTimeOut&&(t.globalData.cardSocket=void 0,a.setData({socketTimeOut:!1,socketlianjie:!0,socketHide:!0}),a.openSocket())})},from_send:function(a){var e={formID:a.detail.formId,userID:t.globalData.WebUserID};t.saveFormID(e,function(t){})},gettypename:function(t){var a=t.itemType,e="";24==a?e="/index.php?c=Front/WxApp/TrackingBehavior/Report&a=ProductSales":18==a?e="/index.php?c=Front/WxApp/TrackingBehavior/Report&a=productScan":19==a?e="/index.php?c=Front/WxApp/TrackingBehavior/Report&a=serviceScan":1==a?e="/index.php?c=Front/WxApp/TrackingBehavior/Report&a=businessCardScan":12==a&&(e="/index.php?c=Front/WxApp/TrackingBehavior/Report&a=articleScan"),this.setData({InterfaceURL:e,typename:t.typename,optionsobj:t}),this.getRankingList(t)},getRankingList:function(a){var e=this,i=e.data.cardFilterDay,o=e.data.optionsobj.itemType;t.sendRequest({url:e.data.InterfaceURL+"&scope="+i+"&page="+e.data.rankingpage+"&pageSize=20",method:"GET",hideLoading:e.data.rankingpage>1,success:function(a){if(a.success){var i=e.data.rankingList;i=i.concat(a.data.list);var n=t.globalData.siteId;i.forEach(function(t){t.img&&t.img.indexOf("comdata")<0&&18==o&&(t.img="/comdata/"+n+"/product/"+t.img)}),e.setData({rankingList:i,page_count:a.data.statPage}),0==e.data.rankingList.length?e.setData({DefaultImg:!0}):e.setData({DefaultImg:!1})}},fail:function(t){}})},onReachBottom:function(){Number(this.data.rankingpage)+1>this.data.page_count?this.setData({showNoMore:!0,showMoreView:!1}):(this.setData({showMoreView:!0}),this.data.rankingpage++,this.getRankingList())},chooseValue:function(t){var a=this,e=t.currentTarget.dataset.value;e!=a.data.cardFilterDay&&(a.setData({cardFilterDay:e,rankingpage:1,rankingList:[]}),a.getRankingList())},errArticleImg:function(t){var a=this,e=t.target.dataset.errImg,i=t.target.dataset.errIndex,o=a.data.rankingList;o[i].img||""==o[i].img?o[i].img=e:(o[i].headImgUrl||""==o[i].headImgUrl)&&(o[i].headImgUrl=e),a.setData({rankingList:o})},toUserAi:function(t){var a=t.currentTarget.dataset.cardid,e=!1;this.data.optionsobj.BusinessCardID&&a!=this.data.optionsobj.BusinessCardID&&(e=!0),wx.navigateTo({url:"/pages/company/businessCard/airadar?cardid="+a+"&currentTab=0&bossMsgStatus="+e})},onUnload:function(){this.setData({socketTimeOut:!1,socketlianjie:!1}),this.data.socketHide&&(t.globalData.cardSocket=void 0)},onHide:function(){this.setData({socketTimeOut:!1,socketlianjie:!1}),this.data.socketHide&&(t.globalData.cardSocket=void 0)}}); 
 			}); 	require("pages/company/businessCard/rankinglist.js");
 		__wxRoute = 'pages/company/businessCard/workbench';__wxRouteBegin = true; 	define("pages/company/businessCard/workbench.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}return Array.from(t)}var a=getApp(),e=(require("../../../common.js"),require("../../../components/utils/socket.js"));Page({data:{baseUrl:a.globalData.siteBaseUrl,msgList:[],otherMsgList:[],radarFn:[{img:"/images/wxapp/bench_01.png",name:"行为跟踪",count:0,type:0},{img:"/images/wxapp/bench_02.png",name:"名片统计",count:0,type:1},{img:"/images/wxapp/bench_03.png",name:"用户统计",count:0,type:2},{img:"/images/wxapp/bench_04.png",name:"数据统计",count:0,type:3}],msgBlank:!1,materialCount:0,socketTimeOut:!0,socketlianjie:!1,phonelicense:!1,fork:!1,rankingList:[],materialList:[],canSave:!0,rankingListBlank:!1,materialListBlank:!1},onLoad:function(t){var e=this;a.registerGlobalFunctions(e),this.setData({optionsobj:t})},onShow:function(){a.doAfterUserInfoAuth({success:this.initData,fail:this.initData,timesLimit:!1}),wx.getSetting({success:function(t){""!=wx.getStorageSync("authorize")&&"false"==wx.getStorageSync("authorize")&&(t.authSetting["scope.writePhotosAlbum"]?that.setData({canSave:!0}):that.setData({canSave:!1}))}})},initData:function(){var t=this,e=a.globalData.userInfo;t.setData({nickName:e.nickName,avatarUrl:e.avatarUrl}),this.getBusinessCardInfo(),this.getChatUserList(),a.globalData.cardSocket?this.listenSocket():(this.setData({socketTimeOut:!1,socketlianjie:!0}),this.openSocket()),this.getMaterialList()},onHide:function(){this.setData({socketTimeOut:!1,socketlianjie:!1})},onUnload:function(){this.setData({socketTimeOut:!1,socketlianjie:!1}),a.globalData.cardSocket&&(a.globalData.cardSocket.close(),setTimeout(function(){a.globalData.cardSocket=void 0},200))},onShareAppMessage:function(){var t=this,e=t.data.optionsobj;e.currentTab=0;var s="/pages/company/businessCard/cardDetails?BusinessCardID="+e.BusinessCardID+"&SiteID="+e.SiteID+"&currentTab=0&userid="+a.globalData.WebUserID+"&isShare=1";console.log(s,"eee"),t.ontranspond();var n=t.data.cardcontent,o="您好，我是"+n.CompanyName+n.Position+n.UserName+"，这是我的名片请惠存",i=t.data.baseUrl+n.PersonImg;return a.shareAppMessage({url:s,title:o,imageUrl:i})},openSocket:function(){var s=this,n=a.globalData.WebUserID;"{}"==JSON.stringify(a.globalData.socket_config)?setTimeout(function(){s.openSocket()},5e3):(a.globalData.cardSocket&&a.globalData.cardSocket.close(),a.globalData.cardSocket=e.run(),e.listen("websocket-connected",function(t){var e={client_id:t.clientid,fromUserID:n};a.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=bindUid",data:e,method:"POST",hideLoading:!0,success:function(t){200==t.code?(console.log("绑定成功"),a.globalData.cardSocket.socketTask.onClose(function(t){s.data.socketlianjie&&(a.globalData.cardSocket=void 0,s.openSocket())})):setTimeout(function(){s.data.socketlianjie&&s.openSocket()},5e3)},fail:function(t){}})}),a.globalData.cardSocket.listen("businesscard_msg",function(t){var a=s.data.radarFn;a[0].count=t.count,s.setData({radarFn:a})}),a.globalData.cardSocket.listen("chat_msg",function(e){var n=s.data.msgList,o=s.data.otherMsgList,i=o.find(function(t){return t.LastMessageInfo.FromUserID===e.fromUserID});if(i){i.CrTime=e.crTime,""==i.IsReadCount?i.IsReadCount=1:"..."!=i.IsReadCount&&(i.IsReadCount=Number(i.IsReadCount)+1);var r=o.findIndex(function(t){return t.LastMessageInfo.FromUserID===e.fromUserID});r>-1&&(o[r]=i)}else{var c={CrTime:0,IsReadCount:0,LastMessageInfo:{Content:"",CrTime:"",FromUserID:"",ID:"",IsRead:"",SiteID:"",ToUserID:"",Type:"text"},UserInfo:{BindWxApp:"",HeadImgUrl:"",NickName:"",UserID:""}};c.CrTime=e.crTime,c.IsReadCount=1,c.LastMessageInfo={Content:e.content,CrTime:e.crTime,FromUserID:e.fromUserID,ID:"",IsRead:"0",SiteID:a.globalData.siteId,ToUserID:e.toUserID,Type:"text"},c.UserInfo={BindWxApp:"",HeadImgUrl:e.HeadImgUrl,NickName:e.NickName,UserID:e.fromUserID},o=[].concat(t(o),[c])}o=o.sort(function(t,a){return a.CrTime-t.CrTime}),n=[].concat(t(o));for(var u=[],d=0;d<n.length;d++)""!=n[d].IsReadCount&&u.push(n[d]);s.setData({otherMsgList:o,msgList:u,msgBlank:!1})}),a.globalData.cardSocket.socketTask.onError(function(t){setTimeout(function(){s.data.socketlianjie&&s.openSocket()},5e3)}))},listenSocket:function(){var e=this;e.setData({socketTimeOut:!0,socketlianjie:!1}),a.globalData.cardSocket.listen("businesscard_msg",function(t){var a=e.data.radarFn;a[0].count=t.count,e.setData({radarFn:a})}),a.globalData.cardSocket.listen("chat_msg",function(s){var n=e.data.msgList,o=e.data.otherMsgList,i=o.find(function(t){return t.LastMessageInfo.FromUserID===s.fromUserID});if(i){i.CrTime=s.crTime,""==i.IsReadCount?i.IsReadCount=1:"..."!=i.IsReadCount&&(i.IsReadCount=Number(i.IsReadCount)+1);var r=o.findIndex(function(t){return t.LastMessageInfo.FromUserID===s.fromUserID});r>-1&&(o[r]=i)}else{var c={CrTime:0,IsReadCount:0,LastMessageInfo:{Content:"",CrTime:"",FromUserID:"",ID:"",IsRead:"",SiteID:"",ToUserID:"",Type:"text"},UserInfo:{BindWxApp:"",HeadImgUrl:"",NickName:"",UserID:""}};c.CrTime=s.crTime,c.IsReadCount=1,c.LastMessageInfo={Content:s.content,CrTime:s.crTime,FromUserID:s.fromUserID,ID:"",IsRead:"0",SiteID:a.globalData.siteId,ToUserID:s.toUserID,Type:"text"},c.UserInfo={BindWxApp:"",HeadImgUrl:s.HeadImgUrl,NickName:s.NickName,UserID:s.fromUserID},o=[].concat(t(o),[c])}o=o.sort(function(t,a){return a.CrTime-t.CrTime}),n=[].concat(t(o));for(var u=[],d=0;d<n.length;d++)""!=n[d].IsReadCount&&u.push(n[d]);e.setData({otherMsgList:o,msgList:u,msgBlank:!1})}),a.globalData.cardSocket.socketTask.onClose(function(t){e.data.socketTimeOut&&(a.globalData.cardSocket=void 0,e.setData({socketTimeOut:!1,socketlianjie:!0}),e.openSocket())})},from_send:function(t){var e={formID:t.detail.formId,userID:a.globalData.WebUserID};a.saveFormID(e,function(t){})},toAIradar:function(t){var a=this,e=t.currentTarget.dataset.currenttab,s=a.data.optionsobj.BusinessCardID;setTimeout(function(){wx.navigateTo({url:"/pages/company/businessCard/airadar?cardid="+s+"&currentTab="+e})},50)},toLeaveWrod:function(t){var a=this.data.optionsobj.BusinessCardID;setTimeout(function(){wx.navigateTo({url:"/pages/company/businessCard/chatmessage?CardID="+a})},50)},goChatDialogue:function(t){var a=this,e=t.currentTarget.dataset.imgurl,s=t.currentTarget.dataset.id,n=t.currentTarget.dataset.name,o=a.data.optionsobj.BusinessCardID;setTimeout(function(){wx.navigateTo({url:"/pages/company/businessCard/chatDialogue?id="+s+"&imgurl="+e+"&CardID="+o+"&OtherName="+n})},50)},ontranspond:function(){a.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=updateShareForwardingAmount&ID=1600&SiteID=6688",method:"GET",success:function(t){t.success},fail:function(t){},hideLoading:!0})},toCardDetails:function(){var t=this,e=a.globalData.siteId,s=t.data.optionsobj.BusinessCardID;setTimeout(function(){wx.navigateTo({url:"/pages/company/businessCard/cardDetails?BusinessCardID="+s+"&SiteID="+e+"&fromWrokbench=1"})},50)},getBusinessCardInfo:function(){var t=this;a.sendRequest({url:"/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=getBusinessCardInfoByCardID&UserID="+a.globalData.WebUserID+"&SiteID="+t.data.optionsobj.SiteID+"&BusinessCardID="+t.data.optionsobj.BusinessCardID,method:"GET",success:function(a){if(a.success){var e=t.data.radarFn;e[0].count=a.unreadNum,t.setData({cardcontent:a.info.card_info,radarFn:e,materialCount:a.info.materialCount,phonestatus:0}),a.info.card_info.UserName&&a.info.card_info.Position&&a.info.card_info.UserName.length+a.info.card_info.Position.length>=12&&t.setData({wrap:!0}),1==a.info.card_info.IsBoss&&t.getBusinessCardScan()}else console.log("getBusinessCardInfo fail"+a.msg)},fail:function(t){}})},shareHfive:function(){var t=this;this.setData({shareMarkFlag:!1}),setTimeout(function(){wx.navigateTo({url:"/pages/company/businessCard/shareCard?companyName="+t.data.cardcontent.CompanyName+"&position="+t.data.cardcontent.Position+"&mobile="+t.data.cardcontent.Mobile+"&personImg="+t.data.cardcontent.PersonImg+"&id="+t.data.cardcontent.ID+"&username="+t.data.cardcontent.UserName+"&email="+t.data.cardcontent.Email+"&SiteID="+a.globalData.siteId})},50)},toMaterials:function(){setTimeout(function(){wx.navigateTo({url:"/pages/company/businessCard/material-library"})},50)},toBossList:function(t){var a=this.data.optionsobj.BusinessCardID;t.currentTarget.dataset.isboss;setTimeout(function(){wx.navigateTo({url:"/pages/company/businessCard/rankinglist?typename=名片浏览&filterDay=7&itemType=1&isBoss=1&BusinessCardID="+a})},50)},getChatUserList:function(){var t=this;a.sendRequest({url:"/index.php?c=Front/Chat/Chat&a=getChatUserList&fromUserID="+a.globalData.WebUserID,method:"GET",success:function(a){if(a.success){var e=a.data.list,s=[];e.forEach(function(t){""!=t.IsReadCount&&s.push(t)}),0==s.length?t.setData({msgBlank:!0}):t.setData({msgBlank:!1}),t.setData({msgList:s,otherMsgList:e})}else console.log("getChatUserList fail"+a.msg)},fail:function(t){}})},getBusinessCardScan:function(){var t=this;a.sendRequest({url:"/index.php?c=Front/WxApp/TrackingBehavior/Report&a=businessCardScan&scope=7&page=1&pageSize=3",method:"GET",success:function(a){a.success?0==a.data.list.length?t.setData({rankingListBlank:!0}):t.setData({rankingList:a.data.list,rankingListBlank:!1}):console.log("getBusinessCardScan fail"+a.msg)},fail:function(t){}})},toUserAi:function(t){var a=t.currentTarget.dataset.cardid,e=!1;this.data.optionsobj.BusinessCardID&&a!=this.data.optionsobj.BusinessCardID&&(e=!0),wx.navigateTo({url:"/pages/company/businessCard/airadar?cardid="+a+"&currentTab=0&bossMsgStatus="+e})},getMaterialList:function(){var t=this;a.sendRequest({url:"/index.php?c=Front/Material/Material&a=getMaterialList&page=1",method:"GET",success:function(a){a.success?0==a.list.length?t.setData({materialListBlank:!0}):t.setData({materialList:a.list,materialListBlank:!1}):console.log("getMaterialList fail"+a.msg)},fail:function(t){}})},saveImg:function(t){var a=this;wx.getSetting({success:function(e){if(e.authSetting["scope.writePhotosAlbum"]){var s=t.currentTarget.dataset.saveindex,n=[];if(0==(n=a.data.materialList[s].MaterialContent).length)return;n.forEach(function(t,e){n[e].indexOf("https")<0&&(n[e]=a.data.baseUrl+t)});var o=0;a.saveLoad(n[o],function(t){if(wx.showToast({title:"第"+(o+1)+"张"+(t?"成功":"失败"),icon:"success",mask:!0,duration:2e3}),n.length!==o+1)return o++,n[o]})}else wx.authorize({scope:"scope.writePhotosAlbum",success:function(){wx.setStorageSync("authorize","true")},fail:function(){wx.setStorageSync("authorize","false"),a.setData({canSave:!1})}})}})},copyText:function(t){var e=this,s=t.currentTarget.dataset.descriptor,n=e.data.materialList[s].Descriptor;wx.setClipboardData({data:n,success:function(t){a.showToast({title:"内容已复制",icon:"none"})}})},bindClickImg:function(t){var a=this,e=t.currentTarget.dataset.index,s=t.currentTarget.dataset.imagearr;s.forEach(function(t,e){s[e]=a.data.baseUrl+t}),wx.previewImage({current:s[e],urls:s})},saveLoad:function(t,a){var e=this;wx.showToast({title:"",icon:"loading",mask:!0,duration:5e3}),wx.downloadFile({url:t,success:function(t){wx.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(t){var s=a&&a(!0);s&&setTimeout(function(){e.saveLoad(s,a)},2e3)},fail:function(t){var s=a&&a(!1);s&&e.saveLoad(s,a)}})}})},openSet:function(){wx.getStorageSync("userSystemInfo")&&a.compareVersion("2.0.7",wx.getStorageSync("userSystemInfo").SDKVersion)>-1&&wx.openSetting({})}}); 
 			}); 	require("pages/company/businessCard/workbench.js");
 		__wxRoute = 'pages/phoneauthorization/index';__wxRouteBegin = true; 	define("pages/phoneauthorization/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=require("../../components/wxb.js");Page({data:{baseUrl:e.globalData.siteBaseUrl,reminder:"授权提示",matter:"授权失败，请重新授权",abrogate:"暂时先不",permission:"允许",fork:!1},onLoad:function(t){this.setData({Icon:e.globalData.info.Icon,option:t}),console.log(this.data.option,"ewqewe")},onShow:function(){e.doAfterUserInfoAuth({success:this.initData,fail:this.initData})},initData:function(){},getPhoneNumber:function(a){var o=this,i=(Number(o.data.option.getMobileNode),o.data.option.pageroute);if(a.detail.errMsg.indexOf("getPhoneNumber:ok")>-1){var n=e.globalData.appId,s=e.globalData.session_key,r=new t(n,s).decryptData(a.detail.encryptedData,a.detail.iv);e.loadphoneInfo(r.phoneNumber),i.indexOf("_tabbar")>-1?wx.switchTab({url:"/"+i}):["pages/shop/productdetail","pages/shop/newsdetail","pages/shop/servicedetail"].includes(i)?id:wx.redirectTo({url:"/"+i})}else;},backHomepag:function(){wx.switchTab({url:"/pages/shop/index"})},abolish:function(){this.setData({allowspopup:!1})},turnOff:function(){e.turnOff()},preventD:function(){}}); 
 			}); 	require("pages/phoneauthorization/index.js");
 		__wxRoute = 'pages/company/productlist_tabbar';__wxRouteBegin = true; 	define("pages/company/productlist_tabbar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=require("../../common.js"),s=require("../../components/wxb.js");Page({isloading:!1,onShareAppMessage:function(){return t.shareAppMessage("/pages/company/productlist")},onLoad:function(s){var o=this;wx.setNavigationBarTitle({title:t.globalData.TitleName[1]?t.globalData.TitleName[1].TitleName:"产品展示"}),t.getPageUrl(this,s),t.registerGlobalFunctions(this),wx.getSystemInfo({success:function(a){o.setData({imgWidth:(a.windowWidth-39)/2,scrollHeight:t.windowHeight*a.pixelRatio})}}),this.setData({queryparams:s,productflag:s.productflag?s.productflag:0,classid:s.classid?s.classid:0}),this.loadProduct(!0),this.loadClassList(),a.setPopupFromShare()},onPullDownRefresh:function(){var t=this;t.data.pullDownRefreshFlag&&(t.isloading=!1,t.setData({pullDownRefreshFlag:!1}),t.data.pullDownRefreshFlag=!1,t.data.queryparams.refresh=!0,setTimeout(function(){t.onLoad(t.data.queryparams),t.setData({pullDownRefreshFlag:!0}),wx.stopPullDownRefresh()},1500))},data:{falgAjax:!0,pullDownRefreshFlag:!0,classid:0,pagesize:10,recordcount:99,productlist:[],productflag:0,sortcol:"",sort:"",hasproduct:!1,baseUrl:t.globalData.siteBaseUrl,animationData:{},plugNavFlag:!0,scrollHeight:t.windowHeight*t.pixelRatio,imgWidth:150,reminder:"授权提示",matter:"授权失败，请重新授权",abrogate:"暂时先不",permission:"允许"},loadProduct:function(a){var s=this;if(!s.isloading){s.isloading=!0,a&&(s.data.recordcount=99,s.data.productlist=[]);var o=s.data.recordcount,e=s.data.productlist.length;if(o>e&&this.data.falgAjax){this.setData({falgAjax:!1});var i=Math.ceil(e/s.data.pagesize)+1,l=s.data.queryparams.keyword?s.data.queryparams.keyword:"",r="";s.data.sortcol&&(r="&sortcol="+s.data.sortcol+"&sort="+s.data.sort),t.sendRequest({url:"/index.php?c=Front/WxApp/JsonApi&a=getProductList&addcolumns=ProDesc&classid="+s.data.classid+"&keyword="+l+"&page="+i+"&pagesize="+s.data.pagesize+r,method:"GET",success:function(t){if(s.isloading=!1,t.success){console.log(t.productlist);for(var a=0;a<t.productlist.length;a++)s.data.productlist.push(t.productlist[a]);s.setData({productlist:s.data.productlist,recordcount:t.recordcount,hasproduct:s.data.productlist.length>0,falgAjax:!0})}else console.log("getProductList fail："+t.msg)},fail:function(t){s.isloading=!1,console.log("getProductList fail")}})}}},loadClassList:function(){var a=this;t.sendRequest({url:"/index.php?c=Front/WxApp/JsonApi&a=getProductClassList",method:"GET",success:function(s){s.success?(s.list.length?s.list.unshift({ClassID:0,Name:"全部分类"}):a.setData({scrollHeight:t.windowHeight*s.pixelRatio}),s.list.forEach(function(t){if(t.ClassID==a.data.classid)return a.setData({productTitleText:t.Name}),!1}),a.setData({classlist:s.list})):console.log("getProductClassList fail："+s.msg)},fail:function(t){console.log("getProductClassList fail")}})},onClassChange:function(t){if(this.data.classid==t.currentTarget.dataset.classid)return!1;this.setData({classid:t.currentTarget.dataset.classid}),this.isloading=!1,this.loadProduct(!0)},goProductdetail:function(a){var s=this,o=t.globalData.getMobileNode?t.globalData.getMobileNode.checkGoodsDetails:0;s.setData({productid:a.currentTarget.dataset.productid});var e=wx.getStorageSync("hasMobile")||0;0===t.globalData.hasMobile&&0===e&&0!==o?s.setData({phonelicense:!0}):s.toProductDetail()},toProductDetail:function(){var t=this;wx.navigateTo({url:"productdetail?id="+t.data.productid})},getPhoneNumber:function(a){var o=this;t.globalData.getMobileNode;if(a.detail.errMsg.indexOf("getPhoneNumber:fail")>-1)2===o.data.checkGoodsDetails?o.setData({allowspopup:!0}):o.toProductDetail();else{var e=t.globalData.appId,i=t.globalData.session_key,l=new s(e,i).decryptData(a.detail.encryptedData,a.detail.iv);t.loadphoneInfo(l.phoneNumber),o.toProductDetail()}},turnOff:function(){t.turnOff()},abolish:function(){this.setData({allowspopup:!1})},onProductListScroll:function(t){this.loadProduct()},onReachBottom:function(){this.loadProduct()},navBtnShowAndHide:function(){var t=!this.data.plugNavFlag;this.setData({plugNavFlag:t})}}); 
 			}); 	require("pages/company/productlist_tabbar.js");
 		__wxRoute = 'pages/company/newslist_tabbar';__wxRouteBegin = true; 	define("pages/company/newslist_tabbar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var s=getApp(),a=(require("../../utils/imgutil.js"),require("../../utils/util.js")),t=require("../../common.js");Page({isloading:!1,onShareAppMessage:function(){return s.shareAppMessage("/pages/company/newslist")},onLoad:function(a){s.getPageUrl(this,a),wx.setNavigationBarTitle({title:s.globalData.TitleName[0].TitleName}),s.registerGlobalFunctions(this),this.setData({queryparams:a,classid:a.classid?a.classid:0}),this.loadClassList(),this.loadNewsList(!0),t.setPopupFromShare()},getPhoneNumber:function(a){var t=this;if(a.detail.errMsg.indexOf("getPhoneNumber:fail")>-1)2==t.data.readArticles?t.setData({allowspopup:!0}):wx.navigateTo({url:"newsdetail?id="+t.data.newsid});else{var e=s.globalData.appId,i=s.globalData.session_key,l=new wxb(e,i).decryptData(a.detail.encryptedData,a.detail.iv);s.loadphoneInfo(l.phoneNumber),wx.navigateTo({url:"newsdetail?id="+t.data.newsid})}},abolish:function(){this.setData({allowspopup:!1})},turnOff:function(){s.turnOff()},onPullDownRefresh:function(){var s=this;s.data.pullDownRefreshFlag&&(s.isloading=!1,s.setData({pullDownRefreshFlag:!1}),s.data.pullDownRefreshFlag=!1,s.data.queryparams.refresh=!0,setTimeout(function(){s.onLoad(s.data.queryparams),s.setData({pullDownRefreshFlag:!0}),wx.stopPullDownRefresh()},1500))},data:{pullDownRefreshFlag:!0,pagesize:10,recordcount:99,newslist:[],sortcol:"",sort:"",hasnews:!0,scrollHeight:s.windowHeight*s.pixelRatio-80,baseUrl:s.globalData.siteBaseUrl,plugNavFlag:!0,reminder:"授权提示",matter:"授权失败，请重新授权",abrogate:"暂时先不",permission:"允许"},loadNewsList:function(a){var t=this;if(!t.isloading){t.isloading=!0,a&&(t.data.recordcount=99,t.data.newslist=[]);var e=t.data.recordcount,i=t.data.newslist.length;if(console.log(e,i),e>i){var l=Math.ceil(i/t.data.pagesize)+1,o=t.data.queryparams.keyword?t.data.queryparams.keyword:"",n="";t.data.sortcol&&(n="&sortcol="+t.data.sortcol+"&sort="+t.data.sort),s.sendRequest({url:"/index.php?c=Front/WxApp/JsonApi&a=getnewslist&keyword="+o+"&page="+l+"&pagesize="+t.data.pagesize+n+"&classid="+t.data.classid,method:"GET",success:function(s){if(t.isloading=!1,s.success){for(var a=0;a<s.newslist.length;a++)s.newslist[a].PublishTime=s.newslist[a].PublishTime.split(" ")[0],s.newslist[a].PublishYear=s.newslist[a].PublishTime.split("-")[0],s.newslist[a].PublishDate=s.newslist[a].PublishTime.split("-")[1]+"/"+s.newslist[a].PublishTime.split("-")[2],t.data.newslist.push(s.newslist[a]);t.setData({newslist:t.data.newslist,recordcount:s.recordcount,hasnews:t.data.newslist.length>0})}else console.log("loadNewsList fail："+s.msg)},fail:function(s){t.isloading=!1,console.log("loadNewsList fail")}})}}},loadClassList:function(){var a=this;s.sendRequest({url:"/index.php?c=Front/WxApp/JsonApi&a=getNewsClassList",method:"GET",success:function(t){t.success?(null==t.list?a.setData({showClassNav:!1}):a.setData({showClassNav:!0}),t.list.unshift({ClassID:0,Name:"全部分类"}),t.list.forEach(function(s){if(s.ClassID==a.data.classid&&s.ClassID>0)return!1}),t.list.length||a.setData({scrollHeight:s.windowHeight*s.pixelRatio}),a.setData({classlist:t.list})):console.log("getNewsClassList fail："+t.msg)},fail:function(s){console.log("getNewsClassList fail")}})},onClassChange:function(s){if(this.data.classid==s.currentTarget.dataset.classid)return!1;this.setData({classid:s.currentTarget.dataset.classid}),this.isloading=!1,this.loadNewsList(!0)},onSearchSubmit:function(t){var e=a.trim(t.detail.value.keyword);e?wx.redirectTo({url:"newslist?keyword="+e}):s.showModal({title:"提示",content:"请输入关键词"})},onKeywordChange:function(t){var e=a.trim(t.detail.value);e?e&&wx.redirectTo({url:"newslist?keyword="+e}):s.showModal({title:"提示",content:"请输入关键词"})},goNewsDetail:function(a){var t=this;this.setData({newsid:a.currentTarget.dataset.newsid});var e=s.globalData.getMobileNode?s.globalData.getMobileNode.enterTicketCenter:0,i=wx.getStorageSync("hasMobile")||0;0===s.globalData.hasMobile&&0===i&&0!==t.data.readArticles&&0!==e?this.setData({phonelicense:!0}):wx.navigateTo({url:"newsdetail?id="+t.data.newsid})},onNewsListScroll:function(s){this.loadNewsList()},onReachBottom:function(){this.loadNewsList()},navBtnShowAndHide:function(){var a=!this.data.plugNavFlag;this.setData({plugNavFlag:a,TitleName:s.globalData.TitleName})}}); 
 			}); 	require("pages/company/newslist_tabbar.js");
 		__wxRoute = 'pages/company/about_tabbar';__wxRouteBegin = true; 	define("pages/company/about_tabbar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),e=require("../../utils/imgutil.js");Page({bannerLoaded:!1,comImagesSize:{},data:{userInfo:{},companyshowImgShow:!0,companyimgpackup:"imgpackup",aboutUsShowText:"显示全部",pullDownRefreshFlag:!0,companyshowimg:!0,baseUrl:a.globalData.siteBaseUrl,imagerotate:"imageup",imagerotateimg:"imageup",textheightarr:["unfold"],plugNavFlag:!0,hdimg:[],circular:!0,indicatorDots:!1,indicatorcolor:"#000",vertical:!1,autoplay:!1,duration:100,imgheights:[],imgwidth:750,current:0},onShareAppMessage:function(){return a.shareAppMessage()},showAndHiddenText:function(a){if("1"===a.currentTarget.dataset.showText){var e="",t="";"显示全部"===this.data.aboutUsShowText?(e="收起",t="imagedown"):(e="显示全部",t="imageup"),this.setData({aboutUsShowText:e,imagerotate:t})}else if("2"===a.currentTarget.dataset.showImg){var i=this.data.companyshowimg;if(i)i=!i,this.data.info.Images.slice(0,this.data.info.Images.length);else{i=!i;var s=this.data.info.Images.length;this.data.info.Images.slice(0,s)}this.setData({comImages:this.data.info.Images,companyshowimg:i})}},callmeTap:function(a){wx.makePhoneCall({phoneNumber:a.currentTarget.dataset.tel,success:function(){},fail:function(){wx.showModal({title:"提示",content:"您的微信版本不支持一键拨号，请拨打"+a.currentTarget.dataset.tel+"咨询",success:function(a){a.confirm||a.cancel}})}})},onLoad:function(e){a.getPageUrl(this,e),a.registerGlobalFunctions(this);var t=this;wx.setNavigationBarTitle({title:a.globalData.TitleName[2].TitleName}),t.setData({queryparams:e,TitleName:a.globalData.TitleName}),this.loadPageData(),this.bannerImgLoad()},onPullDownRefresh:function(){var e=this;e.data.pullDownRefreshFlag&&(e.setData({pullDownRefreshFlag:!1}),e.data.pullDownRefreshFlag=!1,e.data.queryparams.refresh=!0,setTimeout(function(){a.baseInfoLoaded=!1,a.loadBaseInfo(function(){e.onLoad(e.data.queryparams)}),e.setData({pullDownRefreshFlag:!0}),wx.stopPullDownRefresh()},1500))},getLocationByAddress:function(e){var t=this,i={url:"/index.php?c=Front/WxApp/Amap&a=geo",data:{addr:t.data.info.addr},success:function(a){a.success?wx.openLocation({name:t.data.info.title,address:t.data.info.addr,longitude:Number(a.info.longitude),latitude:Number(a.info.latitude)}):t.showModal({content:""+a.msg})}};a.sendRequest(i)},getLocation:function(e){var t=this,i=Number(e.currentTarget.dataset.lat),s=Number(e.currentTarget.dataset.lng);i>0&&s>0?wx.openLocation({name:t.data.info.Name||a.globalData.appTitle,address:t.data.info.Address,longitude:Number(s),latitude:Number(i)}):this.getLocationByAddress()},comImgLoad:function(a){var t=this,i=e.imageUtil(a);t.comImagesSize[a.currentTarget.dataset.src]=i},photoClick:function(a){var e=a.currentTarget.dataset.src;wx.redirectTo({url:"/pages/index/imgview?src="+e})},imageLoad:function(a){var e=750/(a.detail.width/(e=a.detail.height)),t=this.data.imgheights;t.push(e),this.setData({imgheights:t})},bindchange:function(a){this.setData({current:a.detail.current})},bigImgShow:function(a){var t=this,i=a.currentTarget.dataset.src,s={};s=t.comImagesSize[i]?t.comImagesSize[i]:e.imageUtil(a);var n=0;if(t.data.info.Images.length){for(var o=0;o<t.data.info.Images.length;o++)if(t.data.info.Images[o]==a.currentTarget.dataset.src){n=o;break}t.setData({bigImgHeight:s.imageHeight,slideshow:!0,slideCurrent:n})}},hideImgShow:function(){this.setData({slideshow:!1})},loadPageData:function(){var e=this,t=a.globalData.baseInfo;t.Name&&wx.setNavigationBarTitle({title:a.globalData.TitleName[2].TitleName});t.Images.length>4||t.Images.length;t.Banners=a.replaceDomain(t.Banners),t.Images=a.replaceDomain(t.Images),t.Images.length<4&&this.setData({companyshowImgShow:!1}),e.setData({info:t,comImages:t.Images,banners:t.Banners}),a.WxParse.wxParse("DetailInfo","html",t.Intro,e,5),t.Name&&a.setGlobalData("appTitle",t.Name),e.toBuried()},navBtnShowAndHide:function(){var e=!this.data.plugNavFlag;this.setData({plugNavFlag:e,TitleName:a.globalData.TitleName})},toBuried:function(){var e=void 0;e=wx.getStorageSync("businessCardInfo").admin?{tbUserID:a.globalData.WebUserID,tbType:"21",tbTypeID:"",tbTypeName:"",tbTypeImg:"",tbBusinessCardID:wx.getStorageSync("otherMemberCardId")?wx.getStorageSync("otherMemberCardId"):0}:{tbUserID:a.globalData.WebUserID,tbType:"21",tbTypeID:"",tbTypeName:"",tbTypeImg:"",tbBusinessCardID:wx.getStorageSync("businessCardId")?wx.getStorageSync("businessCardId"):0},a.buried(e,function(a){})}}); 
 			}); 	require("pages/company/about_tabbar.js");
 		__wxRoute = 'pages/webview/webview';__wxRouteBegin = true; 	define("pages/webview/webview.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{path:""},onLoad:function(t){console.log(t),this.setData({path:"https://"+t.path})}}); 
 			}); 	require("pages/webview/webview.js");
 	