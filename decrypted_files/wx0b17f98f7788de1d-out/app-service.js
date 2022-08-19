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
Z([[2,'=='],[[7],[3,'saoma']],[1,true]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'hasShake']]],[[2,'!'],[[7],[3,'noShake']]]])
Z([[7],[3,'hasShake']])
Z([[7],[3,'noShake']])
Z([[7],[3,'jiazaizhong']])
Z([[7],[3,'displa']])
Z(z[5])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[8],'wxParseData',[[6],[[7],[3,'article']],[3,'nodes']]])
Z([3,'wxParse'])
Z([[7],[3,'displa']])
Z(z[2])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'shouquan'])
Z([[2,'!'],[[7],[3,'jiazaizhong']]])
Z(z[1])
Z([[7],[3,'displa']])
Z(z[3])
Z([3,'pb-container'])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
Z([3,'chkOrder0_1'])
Z([3,'chkOrder1_1'])
Z([[7],[3,'carname_1']])
Z([[7],[3,'displayy_1']])
Z([[7],[3,'titlename_1']])
Z([3,'chkOrder0_2'])
Z([3,'chkOrder1_2'])
Z([[7],[3,'carname_2']])
Z([[7],[3,'displayy_2']])
Z([[7],[3,'titlename_2']])
Z([3,'chkOrder0_3'])
Z([3,'chkOrder1_3'])
Z([[7],[3,'carname_3']])
Z([[7],[3,'displayy_3']])
Z([[7],[3,'titlename_3']])
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
Z([3,'sjyh-content'])
Z([[2,'=='],[[7],[3,'coupon']],[1,true]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'coupon']],[1,true]],[[2,'=='],[[7],[3,'couponType']],[1,'4']]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[7],[3,'coupon']],[1,true]],[[2,'=='],[[7],[3,'couponType']],[1,'2']]],[[2,'!='],[[7],[3,'derateMoney']],[1,'10']]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[7],[3,'coupon']],[1,true]],[[2,'=='],[[7],[3,'couponType']],[1,'2']]],[[2,'=='],[[7],[3,'derateMoney']],[1,'10']]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'card']],[1,true]],[[2,'=='],[[7],[3,'forceCard']],[1,false]]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'card']],[1,true]],[[2,'=='],[[7],[3,'forceCard']],[1,true]]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'card']],[1,true]],[[2,'=='],[[7],[3,'discount']],[1,'10']]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'card']],[1,true]],[[2,'!='],[[7],[3,'discount']],[1,'10']]])
Z([[7],[3,'saoma']])
Z([[7],[3,'displa']])
Z(z[10])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([[7],[3,'carname']])
Z([[7],[3,'displayy']])
Z([[7],[3,'titlename']])
Z([3,'chkOrder0'])
Z([3,'chkOrder1'])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
Z([3,'chkOrder2'])
Z(z[23])
Z([[7],[3,'carname_1']])
Z([[7],[3,'displayy_1']])
Z([[7],[3,'titlename_1']])
Z([[7],[3,'cancel']])
Z(z[20])
Z([[7],[3,'display_alone1']])
Z(z[22])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'orderState']],[1,'2']])
Z([[2,'=='],[[7],[3,'orderState']],[1,'6']])
Z([[2,'!='],[[7],[3,'orderState']],[1,'6']])
Z(z[2])
Z([[7],[3,'displa']])
Z(z[4])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([3,'chkOrder0_0'])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'popErrorMsg']])
Z([[7],[3,'saoma']])
Z([[7],[3,'displa']])
Z(z[2])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'displa']])
Z(z[0])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([3,'chkOrder0_0'])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
Z([3,'chkOrder0_1'])
Z([[7],[3,'carname_1']])
Z([[7],[3,'displayy_1']])
Z([[7],[3,'titlename_1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'displa']])
Z(z[0])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([[7],[3,'select']])
Z([3,'select_box'])
Z([[2,'!='],[[7],[3,'personNum']],[1,'2']])
Z([[2,'!='],[[7],[3,'personNum']],[1,'1']])
Z([[2,'!='],[[7],[3,'personNum']],[1,'3']])
Z([[2,'!='],[[7],[3,'personNum']],[1,'4']])
Z([[2,'!='],[[7],[3,'personNum']],[1,'5-10']])
Z([[2,'!='],[[7],[3,'personNum']],[1,'10-20']])
Z([[7],[3,'saoma']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'displa']])
Z(z[0])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isPlay']])
Z([[2,'!'],[[7],[3,'isPlay']]])
Z([3,'index'])
Z([[7],[3,'lunboMovie']])
Z([3,'unique'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'marks']],[1,'0']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'marks']],[1,'1']])
Z([3,'tetradIcon'])
Z([[2,'=='],[[7],[3,'yuding']],[1,'Y']])
Z([[2,'=='],[[7],[3,'paidui']],[1,'Y']])
Z([[2,'=='],[[7],[3,'shouyin']],[1,'Y']])
Z([[2,'=='],[[7],[3,'waimai']],[1,'Y']])
Z([3,'order'])
Z([[2,'=='],[[7],[3,'diancan']],[1,'Y']])
Z([[2,'||'],[[2,'=='],[[7],[3,'huiyuan']],[1,'Y']],[[2,'=='],[[7],[3,'quanyika']],[1,'Y']]])
Z([3,''])
Z([3,'order_Item2'])
Z([[2,'=='],[[7],[3,'StoreIdentity']],[1,'f']])
Z([[2,'=='],[[7],[3,'StoreIdentity']],[1,'v']])
Z([[7],[3,'cutfoods']])
Z([3,'key'])
Z([3,'yhtjDetail'])
Z([3,'yhtjSlide_Item'])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[7],[3,'index']])
Z(z[21])
Z([3,'yhtjSlide_Item_shade'])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'foodSizeList']],[1,0]],[1,null]])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'priceT']],[1,null]],[[2,'=='],[[6],[[7],[3,'item']],[3,'priceT']],[1,'']]])
Z([[7],[3,'coverFlg']])
Z([[7],[3,'displa']])
Z(z[30])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([[7],[3,'carname']])
Z([[7],[3,'displayy']])
Z([[7],[3,'titlename']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'displa']])
Z(z[0])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'order-detail-box'])
Z([[2,'>'],[[7],[3,'derateMoney']],[1,0]])
Z([3,'mj-box'])
Z([3,'mj-box-youhui'])
Z([[2,'&&'],[[2,'>'],[[7],[3,'derateMoney']],[1,0]],[[2,'=='],[[7],[3,'discountFlg']],[1,'V']]])
Z([[2,'&&'],[[2,'>'],[[7],[3,'derateMoney']],[1,0]],[[2,'=='],[[7],[3,'discountFlg']],[1,'Y']]])
Z([[2,'&&'],[[2,'>'],[[7],[3,'derateMoney']],[1,0]],[[2,'=='],[[7],[3,'discountFlg']],[1,'Q']]])
Z(z[4])
Z(z[5])
Z(z[6])
Z([[2,'=='],[[7],[3,'wmFlg']],[1,true]])
Z(z[10])
Z([[2,'=='],[[7],[3,'dcFlg']],[1,true]])
Z(z[10])
Z([[7],[3,'wmFlg']])
Z([[2,'=='],[[7],[3,'ydFlg']],[1,true]])
Z([[2,'!='],[[7],[3,'wmFlg']],[1,true]])
Z(z[16])
Z([[7],[3,'displa']])
Z(z[18])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'ydFlg']],[1,true]])
Z([3,'order-detail-box'])
Z([3,'float-right0'])
Z([[2,'=='],[[7],[3,'wmFlg']],[1,true]])
Z(z[3])
Z([3,'mj-box'])
Z([[2,'||'],[[2,'=='],[[7],[3,'dcFlg']],[1,true]],[[2,'=='],[[7],[3,'wmFlg']],[1,true]]])
Z([[7],[3,'qxYouhuiflag']])
Z([[2,'=='],[[7],[3,'dcFlg']],[1,true]])
Z(z[3])
Z([3,'order-number'])
Z(z[3])
Z(z[3])
Z(z[0])
Z([[7],[3,'displa']])
Z(z[14])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([3,'chkOrder0'])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
Z([3,'chkOrder_1'])
Z([3,'chkOrder_2'])
Z([[7],[3,'carname_1']])
Z([[7],[3,'displayy_1']])
Z([[7],[3,'titlename_1']])
Z([[7],[3,'carname_2']])
Z([[7],[3,'displayy_2']])
Z([[7],[3,'titlename_2']])
Z([3,'chkOrder0_3'])
Z([[7],[3,'carname_3']])
Z([[7],[3,'displayy_3']])
Z([[7],[3,'titlename_3']])
Z([3,'chkOrder0_4'])
Z([3,'chkOrder1_4'])
Z([[7],[3,'carname_4']])
Z([[7],[3,'displayy_4']])
Z([[7],[3,'titlename_4']])
Z(z[36])
Z(z[36])
Z([[7],[3,'carname_5']])
Z([[7],[3,'displayy_5']])
Z([[7],[3,'titlename_5']])
Z([3,'chkOrder0_6'])
Z([3,'chkOrder1_6'])
Z([[7],[3,'carname_6']])
Z([[7],[3,'displayy_6']])
Z([[7],[3,'titlename_6']])
Z(z[45])
Z([3,'chkOrder1_7'])
Z([[7],[3,'carname_7']])
Z([[7],[3,'displayy_7']])
Z([[7],[3,'titlename_7']])
Z([3,'chkOrder0_8'])
Z([[7],[3,'carname_8']])
Z([[7],[3,'displayy_8']])
Z([[7],[3,'titlename_8']])
Z([[7],[3,'carname_9']])
Z([[7],[3,'displayy_9']])
Z([[7],[3,'titlename_9']])
Z([[7],[3,'cancel']])
Z(z[20])
Z([[7],[3,'display_alone1']])
Z(z[22])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'comment']]])
Z([[7],[3,'comment']])
Z([3,'order-detail-box'])
Z([[2,'&&'],[[2,'=='],[[7],[3,'takeOutDispatchType']],[1,'0']],[[2,'>'],[[7],[3,'derateMoney']],[1,0]]])
Z([3,'mj-box'])
Z([3,'mj-box-youhui'])
Z([[2,'&&'],[[2,'>'],[[7],[3,'derateMoney']],[1,0]],[[2,'=='],[[7],[3,'discountFlg']],[1,'V']]])
Z([[2,'&&'],[[2,'>'],[[7],[3,'derateMoney']],[1,0]],[[2,'=='],[[7],[3,'discountFlg']],[1,'Y']]])
Z([[2,'&&'],[[2,'>'],[[7],[3,'derateMoney']],[1,0]],[[2,'=='],[[7],[3,'discountFlg']],[1,'Q']]])
Z(z[6])
Z(z[7])
Z(z[8])
Z([[2,'&&'],[[2,'=='],[[7],[3,'takeOutDispatchType']],[1,'1']],[[2,'>'],[[7],[3,'derateMoney']],[1,0]]])
Z(z[4])
Z(z[5])
Z([[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'discountFlg']],[1,'V']],[[2,'=='],[[7],[3,'discountFlg']],[1,'Y']]],[[2,'=='],[[7],[3,'discountFlg']],[1,'Q']]])
Z([[2,'=='],[[7],[3,'discountFlg']],[1,'V']])
Z([[2,'=='],[[7],[3,'discountFlg']],[1,'Y']])
Z([[2,'=='],[[7],[3,'discountFlg']],[1,'Q']])
Z(z[16])
Z(z[17])
Z(z[18])
Z([[2,'=='],[[7],[3,'wmFlg']],[1,true]])
Z(z[22])
Z([[2,'&&'],[[2,'=='],[[7],[3,'dcFlg']],[1,true]],[[2,'=='],[[7],[3,'wmFlg']],[1,false]]])
Z([[7],[3,'displa']])
Z(z[25])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'displa']])
Z(z[0])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'order-detail-box'])
Z([[2,'&&'],[[2,'=='],[[7],[3,'takeOutDispatchType']],[1,'0']],[[2,'>'],[[7],[3,'derateMoney']],[1,0]]])
Z([3,'mj-box'])
Z([3,'mj-box-youhui'])
Z([[2,'&&'],[[2,'>'],[[7],[3,'derateMoney']],[1,0]],[[2,'=='],[[7],[3,'discountFlg']],[1,'V']]])
Z([[2,'&&'],[[2,'>'],[[7],[3,'derateMoney']],[1,0]],[[2,'=='],[[7],[3,'discountFlg']],[1,'Y']]])
Z([[2,'&&'],[[2,'>'],[[7],[3,'derateMoney']],[1,0]],[[2,'=='],[[7],[3,'discountFlg']],[1,'Q']]])
Z(z[4])
Z(z[5])
Z(z[6])
Z([[2,'&&'],[[2,'=='],[[7],[3,'takeOutDispatchType']],[1,'1']],[[2,'>'],[[7],[3,'derateMoney']],[1,0]]])
Z(z[2])
Z(z[3])
Z([[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'discountFlg']],[1,'V']],[[2,'=='],[[7],[3,'discountFlg']],[1,'Y']]],[[2,'=='],[[7],[3,'discountFlg']],[1,'Q']]])
Z([[2,'=='],[[7],[3,'discountFlg']],[1,'V']])
Z([[2,'=='],[[7],[3,'discountFlg']],[1,'Y']])
Z([[2,'=='],[[7],[3,'discountFlg']],[1,'Q']])
Z(z[14])
Z(z[15])
Z(z[16])
Z([3,'zhuoline'])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'orderInfo']],[3,'orderTableId']],[1,null]],[[2,'=='],[[7],[3,'dcFlg']],[1,true]]])
Z([[2,'=='],[[7],[3,'wmFlg']],[1,true]])
Z(z[22])
Z(z[22])
Z([[2,'=='],[[7],[3,'ydFlg']],[1,true]])
Z([[2,'!='],[[7],[3,'takeOutDispatchType']],[1,1]])
Z([[7],[3,'displa']])
Z(z[27])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'receivingAddresses']])
Z([3,'key'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'isWithin']],[1,'Y']])
Z(z[0])
Z(z[1])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'isWithin']],[1,'Y']])
Z([[7],[3,'displa']])
Z(z[6])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'coupones']])
Z([3,'key'])
Z([3,'coupon'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'2']],[[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponState']],[1,'0']]])
Z(z[3])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'2']],[[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponState']],[1,'1']]])
Z(z[5])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'2']],[[2,'<'],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]])
Z(z[7])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'2']],[[2,'>'],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'2']],[[2,'>'],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'4']],[[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponState']],[1,'0']]])
Z(z[11])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'4']],[[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponState']],[1,'1']]])
Z(z[13])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'4']],[[2,'<'],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]])
Z(z[15])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'4']],[[2,'>'],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]])
Z(z[17])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'6']])
Z(z[19])
Z([[7],[3,'displa']])
Z(z[21])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([[7],[3,'carname']])
Z([[7],[3,'display']])
Z([[7],[3,'titlename']])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'displa']])
Z(z[0])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
Z([[7],[3,'cancel']])
Z(z[5])
Z([[7],[3,'display_alone1']])
Z(z[7])
Z([3,'chkOrder0_1'])
Z([[7],[3,'carname_1']])
Z([[7],[3,'displayy_1']])
Z([[7],[3,'titlename_1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'swiperTab'])
Z([[7],[3,'currentTab']])
Z([3,'300'])
Z([a,[3,'padding-bottom:30rpx;'],[[7],[3,'heightFl']],[3,':'],[[7],[3,'heightFlg']],[3,'; overflow:'],[[7],[3,'overFlowFlg']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'infos21']])
Z([3,'key'])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'foodList']],[3,'length']],[1,0]])
Z([3,'goToDetaY'])
Z([3,'orderbox'])
Z([[6],[[7],[3,'item']],[3,'bohuiReason']])
Z(z[1])
Z([[6],[[7],[3,'item']],[3,'id']])
Z(z[13])
Z([[6],[[7],[3,'item']],[3,'orderState']])
Z([3,'cellindex'])
Z([3,'cell'])
Z([[6],[[6],[[7],[3,'orders']],[[7],[3,'index']]],[3,'foodList']])
Z([3,''])
Z([3,'second'])
Z([3,'display:flex;flex-flow:row;justify-content:space-between;'])
Z([[2,'=='],[[6],[[7],[3,'cell']],[3,'sizeName']],[1,null]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'cell']],[3,'sizeName']],[1,'']],[[2,'!='],[[6],[[7],[3,'cell']],[3,'sizeName']],[1,null]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'sizeName']],[1,null]])
Z([[2,'>'],[[6],[[7],[3,'orderYHprice21']],[[7],[3,'index']]],[1,0]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,5]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,9]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,10]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,6]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,4]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,11]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,12]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,13]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,14]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,15]]])
Z(z[4])
Z(z[5])
Z([[7],[3,'infos22']])
Z(z[7])
Z([3,'goToDetaD'])
Z(z[10])
Z(z[11])
Z(z[1])
Z([[6],[[7],[3,'item']],[3,'orderRemarke']])
Z(z[13])
Z(z[15])
Z(z[16])
Z(z[17])
Z([[6],[[6],[[7],[3,'orders1']],[[7],[3,'index']]],[3,'foodList']])
Z(z[19])
Z(z[20])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
Z([[2,'>'],[[6],[[7],[3,'orderYHDprice22']],[[7],[3,'index']]],[1,0]])
Z(z[4])
Z(z[5])
Z([[7],[3,'infos23']])
Z(z[7])
Z([3,'goToDetaW'])
Z(z[10])
Z(z[11])
Z(z[1])
Z(z[13])
Z(z[15])
Z([[6],[[7],[3,'item']],[3,'distributionFee']])
Z([3,'first'])
Z([[2,'=='],[[7],[3,'takeOutDispatchType']],[1,0]])
Z([[2,'=='],[[7],[3,'takeOutDispatchType']],[1,1]])
Z(z[16])
Z(z[17])
Z([[6],[[6],[[7],[3,'orders2']],[[7],[3,'index']]],[3,'foodList']])
Z(z[19])
Z(z[20])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[60])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderReceivablePrice']],[[6],[[7],[3,'item']],[3,'orderRealPrice']]],[[2,'>'],[[2,'-'],[[2,'+'],[[2,'+'],[[2,'*'],[[6],[[7],[3,'item']],[3,'orderReceivablePrice']],[1,1]],[[2,'*'],[[6],[[7],[3,'item']],[3,'distributionFee']],[1,1]]],[[2,'*'],[[6],[[7],[3,'item']],[3,'foodInfoBoxPrice']],[1,1]]],[[2,'*'],[[6],[[7],[3,'item']],[3,'orderRealPrice']],[1,1]]],[1,0]]])
Z(z[61])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'&&'],[[2,'=='],[[7],[3,'takeOutDispatchType']],[1,1]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,5]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,6]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,9]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,4]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,3]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,10]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,11]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,12]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,13]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,14]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,20]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,21]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,22]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,23]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,24]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,25]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,26]]])
Z([[2,'>'],[[2,'-'],[[2,'+'],[[2,'+'],[[2,'*'],[[6],[[7],[3,'item']],[3,'orderReceivablePrice']],[1,1]],[[2,'*'],[[6],[[7],[3,'item']],[3,'distributionFee']],[1,1]]],[[2,'*'],[[6],[[7],[3,'item']],[3,'foodInfoBoxPrice']],[1,1]]],[[2,'*'],[[6],[[7],[3,'item']],[3,'orderRealPrice']],[1,1]]],[1,0]])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,5]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,6]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,9]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,4]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,3]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,10]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,11]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,12]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,13]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,14]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,20]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,21]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,22]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,23]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,24]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,25]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,26]]])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,1]],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'orderState']],[1,2]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,5]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,6]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,9]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,4]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,3]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,10]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,11]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,12]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,13]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,14]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,20]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,21]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,22]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,23]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,24]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,25]]],[[2,'!='],[[6],[[7],[3,'item']],[3,'orderState']],[1,26]]]])
Z(z[60])
Z(z[61])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'disp1']],[1,true]],[[2,'=='],[[7],[3,'disp2']],[1,true]]],[[2,'=='],[[7],[3,'disp3']],[1,true]]],[[2,'=='],[[7],[3,'disp4']],[1,true]]])
Z([3,'cover'])
Z(z[80])
Z([[2,'=='],[[7],[3,'disp1']],[1,true]])
Z([[2,'=='],[[7],[3,'disp2']],[1,true]])
Z([[2,'=='],[[7],[3,'disp3']],[1,true]])
Z([[2,'=='],[[7],[3,'disp4']],[1,true]])
Z([[7],[3,'displa']])
Z(z[87])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
Z([3,'chkOrder0_1'])
Z([3,'chkOrder1_1'])
Z([[7],[3,'carname_1']])
Z([[7],[3,'displayy_1']])
Z([[7],[3,'titlename_1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'overflow:'],[[7],[3,'scroFlag']],[3,';max-height:100vh']])
Z([3,'food'])
Z([[7],[3,'foodData']])
Z([3,''])
Z([3,'col-12'])
Z([[7],[3,'wmFlg']])
Z([[7],[3,'dcFlg']])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'food']],[3,'foodSizeList']],[3,'length']],[1,0]],[[2,'=='],[[6],[[7],[3,'food']],[3,'foodSizeList']],[1,null]]])
Z([[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'food']],[3,'foodCount']],[1,0]],[[2,'=='],[[6],[[7],[3,'food']],[3,'foodCount']],[1,null]]],[[7],[3,'emptyed']]])
Z([[2,'>'],[[6],[[7],[3,'food']],[3,'foodCount']],[1,0]])
Z([[2,'>'],[[6],[[6],[[7],[3,'food']],[3,'foodSizeList']],[3,'length']],[1,0]])
Z([[2,'=='],[[7],[3,'guige']],[[6],[[7],[3,'food']],[3,'id']]])
Z([3,'guigeIndex'])
Z([3,'sizelist'])
Z([[6],[[7],[3,'food']],[3,'foodSizeList']])
Z(z[3])
Z([[2,'=='],[[7],[3,'guigeIndex']],[[7],[3,'indx']]])
Z([3,'guige-jiajian'])
Z([[2,'!'],[[7],[3,'emptyed']]])
Z([[7],[3,'emptyed']])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'sizelist']],[3,'foodSizeCount']],[1,0]],[[2,'!'],[[7],[3,'emptyed']]]])
Z([3,'shopCart'])
Z([3,'content-left'])
Z([[2,'>'],[[7],[3,'totalCount']],[1,0]])
Z(z[5])
Z([[7],[3,'carArray']])
Z(z[3])
Z([3,'shopcart-food'])
Z([[2,'>'],[[7],[3,'totalCount']],[1,0]])
Z(z[28])
Z([3,'fade'])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'num']],[1,0]])
Z(z[31])
Z(z[6])
Z(z[6])
Z([[7],[3,'displa']])
Z(z[35])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([3,'chkOrder_0'])
Z([3,'chkOrde_0'])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
Z([[7],[3,'carname_1']])
Z([[7],[3,'displayy_1']])
Z([[7],[3,'titlename_1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'col-12'])
Z([[7],[3,'wmFlg']])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'food']],[3,'foodSizeList']],[3,'length']],[1,0]],[[2,'=='],[[6],[[7],[3,'food']],[3,'foodSizeList']],[1,null]]])
Z(z[2])
Z([[2,'!='],[[7],[3,'yhtj']],[1,1]])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'food']],[3,'foodSizeList']],[3,'length']],[1,0]],[[2,'=='],[[6],[[7],[3,'food']],[3,'foodSizeList']],[1,null]]])
Z([[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'food']],[3,'foodCount']],[1,0]],[[2,'=='],[[6],[[7],[3,'food']],[3,'foodCount']],[1,null]]],[[7],[3,'emptyed']]])
Z([[2,'>'],[[6],[[7],[3,'food']],[3,'foodCount']],[1,0]])
Z([[2,'>'],[[6],[[6],[[7],[3,'food']],[3,'foodSizeList']],[3,'length']],[1,0]])
Z([[2,'=='],[[7],[3,'guige']],[[6],[[7],[3,'food']],[3,'id']]])
Z([3,'guigeIndex'])
Z([3,'sizelist'])
Z([[6],[[7],[3,'food']],[3,'foodSizeList']])
Z([3,''])
Z([[2,'=='],[[7],[3,'guigeIndex']],[[7],[3,'indx']]])
Z(z[4])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'sizelist']],[3,'foodSizeCount']],[1,0]],[[2,'!'],[[7],[3,'emptyed']]]])
Z(z[4])
Z([3,'shopCart'])
Z([3,'content-left'])
Z([[2,'>'],[[7],[3,'totalCount']],[1,0]])
Z(z[1])
Z([[7],[3,'carArray']])
Z(z[13])
Z([3,'shopcart-food'])
Z([[2,'>'],[[7],[3,'totalCount']],[1,0]])
Z([[2,'&&'],[[2,'>'],[[7],[3,'totalCount']],[1,0]],[[2,'!='],[[7],[3,'yhtj']],[1,1]]])
Z([3,'fade'])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'num']],[1,0]])
Z(z[28])
Z([[7],[3,'dcFlg']])
Z(z[30])
Z([[7],[3,'displa']])
Z(z[32])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([3,'chkOrder_0'])
Z([3,'chkOrde_0'])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
Z([[7],[3,'carname_1']])
Z([[7],[3,'displayy_1']])
Z([[7],[3,'titlename_1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[2,'=='],[[7],[3,'status']],[1,0]],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[[7],[3,'status']]]])
Z([[7],[3,'catch']])
Z([3,'goods'])
Z([a,[3,'display:'],[[7],[3,'tcFlg1']],[3,';position:'],[[7],[3,'tcFlg2']],[3,';overflow:'],[[7],[3,'over']]])
Z([3,'gotype'])
Z([3,'tolower'])
Z([3,'foods-wrapper'])
Z([[7],[3,'toView']])
Z([3,'true'])
Z([a,z[3][1],[[7],[3,'cdFlg']],[3,';']])
Z([3,'parentIndex'])
Z([[7],[3,'goods']])
Z([3,''])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'foodList']],[3,'length']],[1,0]])
Z([3,'cellIndex'])
Z([3,'cell'])
Z([[6],[[7],[3,'item']],[3,'foodList']])
Z(z[12])
Z([3,'food-item'])
Z([3,'content'])
Z([[2,'=='],[[7],[3,'wmFlg']],[1,true]])
Z([[2,'=='],[[6],[[6],[[7],[3,'cell']],[3,'foodSizeList']],[3,'length']],[1,0]])
Z(z[21])
Z(z[21])
Z([3,'fade'])
Z([[2,'>'],[[6],[[7],[3,'cell']],[3,'foodCount']],[1,0]])
Z(z[25])
Z([[2,'=='],[[7],[3,'guige']],[[6],[[7],[3,'cell']],[3,'id']]])
Z([3,'guigeIndex'])
Z([3,'sizelist'])
Z([[6],[[7],[3,'cell']],[3,'foodSizeList']])
Z(z[12])
Z([[2,'=='],[[7],[3,'guigeIndex']],[[7],[3,'indx']]])
Z([3,'gbottom'])
Z([3,'margin-top:20px; padding:10px 0;'])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'sizelist']],[3,'foodSizeCount']],[1,0]],[[2,'=='],[[6],[[7],[3,'sizelist']],[3,'foodSizeCount']],[1,'']]])
Z([[2,'>'],[[6],[[7],[3,'sizelist']],[3,'foodSizeCount']],[1,0]])
Z([3,'shopCart'])
Z([3,'logo-wrapper'])
Z([3,'logo highlight'])
Z([[2,'!'],[[7],[3,'wmFlg']]])
Z([[7],[3,'wmFlg']])
Z(z[41])
Z(z[40])
Z([[2,'>'],[[7],[3,'totalCount']],[1,0]])
Z([[7],[3,'carArray']])
Z(z[12])
Z([3,'shopcart-food'])
Z([[2,'>'],[[7],[3,'totalCount']],[1,0]])
Z(z[48])
Z(z[24])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'num']],[1,0]])
Z([3,'minusCount'])
Z([3,'cart-decrease'])
Z([[6],[[7],[3,'item']],[3,'foodId']])
Z([[6],[[7],[3,'item']],[3,'foodInfoBoxPrice']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'parentIndex']])
Z([[6],[[7],[3,'item']],[3,'typeId']])
Z([3,'display:inline-block;'])
Z(z[51])
Z(z[51])
Z([[7],[3,'listShow']])
Z([[7],[3,'dcFlg']])
Z(z[63])
Z([[7],[3,'displa']])
Z(z[65])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[2,'=='],[[7],[3,'status']],[1,0]],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[[7],[3,'status']]]])
Z([3,'goods'])
Z([a,[3,'display:'],[[7],[3,'tcFlg1']],[3,';position:'],[[7],[3,'tcFlg2']]])
Z([3,'gotype'])
Z([3,'tolower'])
Z([3,'foods-wrapper'])
Z([[7],[3,'toView']])
Z([3,'true'])
Z([a,z[2][1],[[7],[3,'cdFlg']],[3,';']])
Z([3,'parentIndex'])
Z([[7],[3,'goods']])
Z([3,''])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'foodList']],[3,'length']],[1,0]])
Z([3,'cellIndex'])
Z([3,'cell'])
Z([[6],[[7],[3,'item']],[3,'foodList']])
Z(z[11])
Z([3,'food-item'])
Z([3,'content'])
Z([[2,'=='],[[7],[3,'wmFlg']],[1,true]])
Z([[2,'=='],[[6],[[6],[[7],[3,'cell']],[3,'foodSizeList']],[3,'length']],[1,0]])
Z(z[20])
Z(z[20])
Z([3,'fade'])
Z([[2,'>'],[[6],[[7],[3,'cell']],[3,'foodCount']],[1,0]])
Z(z[24])
Z([[2,'=='],[[7],[3,'guige']],[[6],[[7],[3,'cell']],[3,'id']]])
Z([3,'guigeIndex'])
Z([3,'sizelist'])
Z([[6],[[7],[3,'cell']],[3,'foodSizeList']])
Z(z[11])
Z([[2,'=='],[[7],[3,'guigeIndex']],[[7],[3,'indx']]])
Z([3,'gbottom'])
Z([3,'margin-top:20px; padding:10px 0;'])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'sizelist']],[3,'foodSizeCount']],[1,0]],[[2,'=='],[[6],[[7],[3,'sizelist']],[3,'foodSizeCount']],[1,'']]])
Z([[2,'>'],[[6],[[7],[3,'sizelist']],[3,'foodSizeCount']],[1,0]])
Z([3,'shopCart'])
Z([3,'logo-wrapper'])
Z([3,'logo highlight'])
Z([[2,'!'],[[7],[3,'wmFlg']]])
Z(z[39])
Z([[2,'>'],[[7],[3,'totalCount']],[1,0]])
Z([[7],[3,'carArray']])
Z(z[11])
Z([3,'shopcart-food'])
Z([[2,'>'],[[7],[3,'totalCount']],[1,0]])
Z(z[45])
Z(z[23])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'num']],[1,0]])
Z(z[48])
Z([[7],[3,'listShow']])
Z([[7],[3,'dcFlg']])
Z(z[51])
Z([[7],[3,'displa']])
Z(z[53])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([[7],[3,'carname']])
Z([[7],[3,'displayy']])
Z([[7],[3,'titlename']])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'displa']])
Z(z[0])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([3,'chkOrder'])
Z([[7],[3,'carname']])
Z([[7],[3,'display']])
Z([[7],[3,'titlename']])
Z([[7],[3,'saoma']])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'noMessage']])
Z([[7],[3,'infos']])
Z([3,'key'])
Z([3,'editableGraphic'])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'introduce']],[1,'']])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'masterials']],[1,'']])
Z([[7],[3,'displa']])
Z(z[6])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'infos']],[3,'foodSizeList']],[3,'length']],[1,0]],[[2,'=='],[[6],[[7],[3,'infos']],[3,'foodSizeList']],[1,null]]])
Z([[7],[3,'displa']])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'displa']])
Z(z[0])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'saoma']])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'popErrorMsg']])
Z([[7],[3,'displa']])
Z(z[1])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([3,'chkOrder'])
Z(z[6])
Z([[7],[3,'carname']])
Z([[7],[3,'displayy']])
Z([[7],[3,'titlename']])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'brandDetailBox'])
Z([[2,'!='],[[7],[3,'code']],[1,'']])
Z([3,'flexx'])
Z([[2,'=='],[[7],[3,'couponType']],[1,'4']])
Z([[2,'=='],[[7],[3,'couponType']],[1,'2']])
Z([[2,'=='],[[7],[3,'couponType']],[1,'6']])
Z(z[2])
Z([[2,'&&'],[[2,'!='],[[7],[3,'favourDetail']],[1,'']],[[2,'!='],[[7],[3,'favourDetail']],[1,null]]])
Z([[2,'||'],[[2,'=='],[[7],[3,'favourDetail']],[1,'']],[[2,'=='],[[7],[3,'favourDetail']],[1,null]]])
Z(z[2])
Z([[2,'&&'],[[2,'!='],[[7],[3,'useNotice']],[1,'']],[[2,'!='],[[7],[3,'useNotice']],[1,null]]])
Z([[2,'||'],[[2,'=='],[[7],[3,'useNotice']],[1,'']],[[2,'=='],[[7],[3,'useNotice']],[1,null]]])
Z(z[2])
Z([[2,'!='],[[7],[3,'validityType']],[1,'DATE_TYPE_FIX_TERM']])
Z([[2,'=='],[[7],[3,'validityType']],[1,'DATE_TYPE_FIX_TERM']])
Z([[2,'=='],[[7],[3,'code']],[1,'']])
Z([3,'chkOrder0_1'])
Z([3,'chkOrder1_1'])
Z([[7],[3,'carname']])
Z([[7],[3,'displayy']])
Z([[7],[3,'titlename']])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'displa']])
Z(z[0])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'coupones']])
Z([3,'key'])
Z([[2,'||'],[[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'couponType']],[1,'2']],[[2,'>='],[[2,'*'],[[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'validityBegin']],[1,1]],[1,0]]],[[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'couponType']],[1,'2']],[[2,'<='],[[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'activityBegin']],[[7],[3,'nowDate']]]]])
Z([3,'coupon'])
Z([3,'getIt'])
Z([[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'cardId']])
Z([[7],[3,'index']])
Z([[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'putId']])
Z([[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'voucherRestrict']])
Z(z[2])
Z([[2,'=='],[[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'couponType']],[1,'2']])
Z([[2,'||'],[[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'couponType']],[1,'4']],[[2,'>='],[[2,'*'],[[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'validityBegin']],[1,1]],[1,0]]],[[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'couponType']],[1,'4']],[[2,'<='],[[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'activityBegin']],[[7],[3,'nowDate']]]]])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[11])
Z([[2,'=='],[[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'couponType']],[1,'4']])
Z([[2,'||'],[[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'couponType']],[1,'6']],[[2,'>='],[[2,'*'],[[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'validityBegin']],[1,1]],[1,0]]],[[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'couponType']],[1,'6']],[[2,'<='],[[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'activityBegin']],[[7],[3,'nowDate']]]]])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[20])
Z([[2,'=='],[[6],[[6],[[7],[3,'coupones']],[[7],[3,'index']]],[3,'couponType']],[1,'6']])
Z([[7],[3,'saoma']])
Z([[7],[3,'displa']])
Z(z[30])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([[7],[3,'carname']])
Z([[7],[3,'displayy']])
Z([[7],[3,'titlename']])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'popErrorMsg']])
Z([3,'float:left;width:100%;'])
Z([[2,'=='],[[7],[3,'state']],[1,false]])
Z([[2,'=='],[[7],[3,'state']],[1,true]])
Z([[7],[3,'saoma']])
Z([[2,'=='],[[7],[3,'state']],[1,false]])
Z([[7],[3,'displa']])
Z(z[6])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([3,'chkOrder_0'])
Z([3,'chkOrde_0'])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'popErrorMsg']])
Z([[7],[3,'displa']])
Z(z[1])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([3,'chkOrder_0'])
Z([3,'chkOrde_0'])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
Z([3,'chkOrder_2'])
Z([3,'chkOrde_2'])
Z([[7],[3,'carname_2']])
Z([[7],[3,'displayy_2']])
Z([[7],[3,'titlename_2']])
Z([3,'chkOrder_3'])
Z([3,'chkOrde_3'])
Z([[7],[3,'carname_3']])
Z([[7],[3,'displayy_3']])
Z([[7],[3,'titlename_3']])
Z([[7],[3,'carname_1']])
Z([[7],[3,'displayy_1']])
Z([[7],[3,'titlename_1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'forceCards']])
Z([3,''])
Z([3,'noteList'])
Z([3,'noteIndex'])
Z([3,'noteItem'])
Z([[6],[[7],[3,'item']],[3,'vipcardUse']])
Z(z[1])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'vipcardUse']],[3,'length']],[1,0]])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[1])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'vipcardUse']],[3,'length']],[1,0]])
Z([[7],[3,'displa']])
Z(z[13])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([[7],[3,'saoma']])
Z([[7],[3,'carname']])
Z([[7],[3,'displayy']])
Z([[7],[3,'titlename']])
Z([3,'chkOrder0'])
Z(z[22])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
Z([3,'chkOrder1'])
Z(z[27])
Z([[7],[3,'carname_1']])
Z([[7],[3,'displayy_1']])
Z([[7],[3,'titlename_1']])
Z([3,'chkOrder2'])
Z([3,'chkOrder1_2'])
Z([[7],[3,'carname_2']])
Z([[7],[3,'displayy_2']])
Z([[7],[3,'titlename_2']])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'popErrorMsg']])
Z([[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'phonea']],[1,'']],[[2,'=='],[[7],[3,'phonea']],[1,null]]],[[2,'=='],[[7],[3,'phonea']],[1,undefined]]])
Z([[7],[3,'toGoTuanGou']])
Z([[7],[3,'saoma']])
Z([[7],[3,'displa']])
Z(z[4])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([3,'chkOrder_0'])
Z([3,'chkOrde_0'])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
Z([[2,'=='],[[7],[3,'shouquan']],[1,true]])
Z(z[14])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'displa']])
Z(z[0])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content-tip'])
Z([[7],[3,'getvipCardRuleWX']])
Z([3,''])
Z([3,'tip-text'])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'ruleType']],[1,'1']],[[2,'<'],[[7],[3,'index']],[1,5]]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'ruleType']],[1,'2']],[[2,'<'],[[7],[3,'index']],[1,5]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'hasMore']],[[7],[3,'getedMore']]],[[2,'=='],[[6],[[7],[3,'item']],[3,'ruleType']],[1,'1']]],[[2,'>='],[[7],[3,'index']],[1,5]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'hasMore']],[[7],[3,'getedMore']]],[[2,'=='],[[6],[[7],[3,'item']],[3,'ruleType']],[1,'2']]],[[2,'>='],[[7],[3,'index']],[1,5]]])
Z([[7],[3,'hasMore']])
Z(z[8])
Z([[7],[3,'displa']])
Z(z[10])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([[7],[3,'saoma']])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'coupones']])
Z([3,'key'])
Z([[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]])
Z([3,'xq'])
Z([3,'coupon'])
Z([[7],[3,'index']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'2']],[[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponState']],[1,'0']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'2']],[[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponState']],[1,'0']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'2']],[[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponState']],[1,'1']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'2']],[[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponState']],[1,'1']]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'2']],[[2,'>'],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]])
Z(z[10])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'4']],[[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponState']],[1,'0']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'4']],[[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponState']],[1,'0']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'4']],[[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponState']],[1,'1']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'4']],[[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponState']],[1,'1']]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'4']],[[2,'>'],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]])
Z(z[16])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'6']],[[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponState']],[1,'0']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'6']],[[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponState']],[1,'0']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'6']],[[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponState']],[1,'1']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'6']],[[2,'>='],[[6],[[7],[3,'item']],[3,'validityEnd']],[[7],[3,'nowData']]]],[[2,'<='],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponState']],[1,'1']]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'couponType']],[1,'6']],[[2,'>'],[[6],[[7],[3,'item']],[3,'validityBegin']],[[7],[3,'nowData']]]])
Z(z[22])
Z([[7],[3,'displa']])
Z(z[24])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body_0'])
Z([[7],[3,'popErrorMsg']])
Z([[7],[3,'displa']])
Z(z[2])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'popErrorMsg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'company-detail-content'])
Z([[2,'=='],[[7],[3,'sq']],[1,'0']])
Z([[2,'=='],[[7],[3,'sq']],[1,'1']])
Z(z[0])
Z([[2,'=='],[[7],[3,'sqq']],[1,'0']])
Z([[2,'=='],[[7],[3,'sqq']],[1,'1']])
Z([[7],[3,'displa']])
Z(z[6])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([3,'chkOrder_0'])
Z([3,'chkOrde_0'])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'notices']])
Z([3,'key'])
Z([[2,'>'],[[6],[[7],[3,'notices']],[3,'length']],[1,0]])
Z([[2,'<='],[[6],[[7],[3,'notices']],[3,'length']],[1,0]])
Z([[7],[3,'displa']])
Z(z[4])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isRefreshing']])
Z([3,'getNotice'])
Z([3,'userInfoImgBox'])
Z([[2,'||'],[[2,'>'],[[7],[3,'noticeCount']],[1,0]],[[2,'=='],[[7],[3,'noticeCount']],[1,'9+']]])
Z([3,'userpour'])
Z([[2,'!='],[[7],[3,'isVip']],[1,false]])
Z([[2,'=='],[[7],[3,'isVip']],[1,false]])
Z(z[6])
Z(z[5])
Z(z[6])
Z(z[5])
Z([[2,'=='],[[7],[3,'forceShowFlg']],[1,'Y']])
Z([[2,'||'],[[2,'||'],[[2,'!'],[[6],[[7],[3,'selectedFlag']],[1,5]]],[[2,'!'],[[7],[3,'isExistenceForce']]]],[[2,'!='],[[7],[3,'forceUseFlg']],[1,'Y']]])
Z([[2,'&&'],[[2,'!='],[[7],[3,'isEquitycardn']],[1,'Y']],[[2,'=='],[[7],[3,'isVip']],[1,false]]])
Z([[2,'||'],[[2,'=='],[[7],[3,'isEquitycardn']],[1,'Y']],[[2,'!='],[[7],[3,'isVip']],[1,false]]])
Z([[2,'=='],[[7],[3,'vipShowFlg']],[1,'Y']])
Z([[2,'||'],[[2,'||'],[[2,'!'],[[6],[[7],[3,'selectedFlag']],[1,0]]],[[2,'!'],[[7],[3,'isExistenceVip']]]],[[2,'!='],[[7],[3,'vipUseFlg']],[1,'Y']]])
Z(z[6])
Z(z[5])
Z(z[6])
Z(z[5])
Z(z[15])
Z(z[15])
Z([[2,'&&'],[[2,'=='],[[7],[3,'shakeShowFlg']],[1,'Y']],[[2,'!='],[[7],[3,'isVip']],[1,false]]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'shakeShowFlg']],[1,'Y']],[[2,'=='],[[7],[3,'isVip']],[1,false]]])
Z([[7],[3,'displa']])
Z(z[25])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
Z([3,'chkOrder4'])
Z([[7],[3,'carname_0']])
Z([[7],[3,'displayy_0']])
Z([[7],[3,'titlename_0']])
Z([[7],[3,'carname_1']])
Z([[7],[3,'displayy_1']])
Z([[7],[3,'titlename_1']])
Z([3,'chkOrder2'])
Z([[7],[3,'carname_2']])
Z([[7],[3,'displayy_2']])
Z([[7],[3,'titlename_2']])
Z([3,'chkOrder3'])
Z([[7],[3,'carname_3']])
Z([[7],[3,'displayy_3']])
Z([[7],[3,'titlename_3']])
Z(z[30])
Z([[7],[3,'carname_4']])
Z([[7],[3,'displayy_4']])
Z([[7],[3,'titlename_4']])
Z([[7],[3,'cancel']])
Z(z[31])
Z([[7],[3,'display_alone1']])
Z(z[33])
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'notices']])
Z([3,'key'])
Z([[2,'!='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'record']],[1,'']])
Z(z[2])
Z([3,'textbox'])
Z([[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'充值撤销']])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'会员卡核销']],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'权益卡核销']]])
Z([[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'领取权益卡']])
Z(z[7])
Z([[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'优惠券到期提醒']])
Z(z[9])
Z(z[9])
Z([[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'']])
Z(z[12])
Z(z[12])
Z([[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'积分操作']])
Z(z[15])
Z([[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'赠券']])
Z(z[17])
Z(z[17])
Z([[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'余额核销']])
Z([[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'积分核销']])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'余额核销']],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'积分核销']]])
Z([[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'排队']])
Z(z[23])
Z(z[23])
Z([[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'摇一摇']])
Z(z[26])
Z([[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'预定接单']])
Z([[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'优惠券领取']])
Z([[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'优惠券核销']])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'优惠券领取']],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'优惠券核销']]])
Z(z[30])
Z(z[29])
Z([[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'外卖退款']])
Z(z[2])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'收银']],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'余额充值']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'外卖支付']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'点餐支付']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'预定支付']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'余额支付']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'微信支付']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'外卖退款']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'点餐退款']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'预定退款']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'收银退款']]])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'外卖退款']],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'点餐退款']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'预定退款']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'收银退款']]])
Z([[2,'||'],[[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'点餐退款']],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'预定退款']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'收银退款']]])
Z(z[2])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'收银']],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'余额充值']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'外卖支付']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'点餐支付']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'预定支付']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'余额支付']]],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'微信支付']]])
Z([[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'余额支付']],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'record']],[1,'外卖支付']]])
Z([[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'微信支付']],[[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'record']],[1,'外卖支付']]])
Z([3,'textcontent'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'摇一摇']],[[2,'!='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'赠券']]],[[2,'!='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'领取会员卡']]],[[2,'!='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'排队']]],[[2,'!='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'优惠券到期提醒']]],[[2,'!='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'优惠券领取']]],[[2,'!='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'预定失败']]],[[2,'!='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'优惠券核销']]],[[2,'!='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'领取权益卡']]],[[2,'!='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'会员卡核销']]],[[2,'!='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'record']],[1,'']]],[[2,'!='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'权益卡核销']]],[[2,'!='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'record']],[1,'外卖送达']]],[[2,'!='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'积分操作']]])
Z([3,'overflow:hidden;width:100%'])
Z([[2,'&&'],[[2,'!='],[[6],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'other']],[1,0]],[1,'赠']],[[2,'!='],[[6],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'other']],[1,0]],[1,'退']]])
Z([3,''])
Z([3,'float:left'])
Z([[2,'=='],[[6],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'other']],[1,0]],[1,'赠']])
Z(z[49])
Z(z[47])
Z(z[48])
Z([[2,'=='],[[6],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'other']],[1,0]],[1,'退']])
Z(z[53])
Z(z[17])
Z([[2,'=='],[[6],[[6],[[7],[3,'notices']],[[7],[3,'index']]],[3,'title']],[1,'预定失败']])
Z(z[12])
Z([[7],[3,'displa']])
Z(z[58])
Z([3,'closeTk'])
Z([[7],[3,'refundId']])
Z([[7],[3,'refundTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'onClickFlag']]])
Z([[7],[3,'shouye']])
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
function gz$gwx_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx_52)return __WXML_GLOBAL__.ops_cached.$gwx_52
__WXML_GLOBAL__.ops_cached.$gwx_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'stores']])
Z([3,'id'])
Z([3,'gotoIndex'])
Z([3,'container li'])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[6],[[7],[3,'item']],[3,'storeInfoDeliveryPrice']])
Z([[6],[[7],[3,'item']],[3,'storeInfoName']])
Z([[6],[[7],[3,'item']],[3,'storeInfoStoreId']])
Z([[2,'=='],[[7],[3,'rightText']],[1,'人气最高']])
Z([[2,'=='],[[7],[3,'rightText']],[1,'销量最高']])
Z([[2,'=='],[[7],[3,'rightText']],[1,'距我最近']])
Z([[2,'=='],[[7],[3,'shouquan']],[1,true]])
Z(z[12])
})(__WXML_GLOBAL__.ops_cached.$gwx_52);return __WXML_GLOBAL__.ops_cached.$gwx_52
}
function gz$gwx_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx_53)return __WXML_GLOBAL__.ops_cached.$gwx_53
__WXML_GLOBAL__.ops_cached.$gwx_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wxParseVideo'])
Z([3,'wxParseImg'])
Z([3,'WxEmojiView'])
Z([3,'WxParseBr'])
Z([3,'wxParse'])
Z([[7],[3,'wxParseData']])
Z([3,''])
Z([[8],'item',[[7],[3,'item']]])
Z([3,'wxParse0'])
Z(z[8])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'node']],[1,'element']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'button']])
Z([3,'item'])
Z([[6],[[7],[3,'item']],[3,'nodes']])
Z(z[6])
Z(z[7])
Z([3,'wxParse1'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'li']])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[16])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'video']])
Z(z[7])
Z(z[0])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'img']])
Z(z[7])
Z(z[1])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'a']])
Z([3,'wxParseTagATap'])
Z([a,[3,'wxParse-inline '],[[6],[[7],[3,'item']],[3,'classStr']],[3,' wxParse-'],[[6],[[7],[3,'item']],[3,'tag']]])
Z([[6],[[6],[[7],[3,'item']],[3,'attr']],[3,'href']])
Z([[6],[[7],[3,'item']],[3,'styleStr']])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[16])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'table']])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[16])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'br']])
Z(z[3])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tagType']],[1,'block']])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[16])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[16])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'node']],[1,'text']])
Z(z[7])
Z(z[2])
Z(z[16])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse2'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[68])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[68])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[68])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[68])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[68])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse3'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[114])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[114])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[114])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[114])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[114])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse4'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[160])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[160])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[160])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[160])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[160])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse5'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[206])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[206])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[206])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[206])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[206])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse6'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[252])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[252])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[252])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[252])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[252])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse7'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[298])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[298])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[298])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[298])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[298])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse8'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[344])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[344])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[344])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[344])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[344])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse9'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[390])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[390])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[390])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[390])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[390])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse10'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[436])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[436])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[436])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[436])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[436])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse11'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[482])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[482])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[482])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[482])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[482])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse12'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[528])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[528])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[528])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[528])
Z(z[58])
Z(z[7])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_53);return __WXML_GLOBAL__.ops_cached.$gwx_53
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"m_./pages/index/order/evalOrder/selCoupon/selCoupon.wxml:filters":np_2,"m_./pages/user/myCoupon/myCoupon.wxml:filters":np_3,"p_./addmu.wxs":np_0,"p_./addmul.wxs":np_1,"p_./userNotice.wxs":np_4,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./addmu.wxs'] = nv_require("p_./addmu.wxs");
function np_0(){var nv_module={nv_exports:{}};var nv_filters = ({nv_toFix:(function (nv_value){return(nv_value.nv_toFixed(0))}),});nv_module.nv_exports = ({nv_toFix:nv_filters.nv_toFix,});return nv_module.nv_exports;}

f_['./addmul.wxs'] = nv_require("p_./addmul.wxs");
function np_1(){var nv_module={nv_exports:{}};var nv_filters = ({nv_toFix:(function (nv_value){var nv_value = nv_parseFloat(nv_value);return(nv_value.nv_toFixed(2))}),});nv_module.nv_exports = ({nv_toFix:nv_filters.nv_toFix,});return nv_module.nv_exports;}

f_['./pages/index/collect/collect.wxml']={};
f_['./pages/index/collect/collect.wxml']['filters'] =f_['./addmul.wxs'] || nv_require("p_./addmul.wxs");
f_['./pages/index/collect/collect.wxml']['filters']();

f_['./pages/index/order/evalOrder/checkOrder/checkOrder.wxml']={};
f_['./pages/index/order/evalOrder/checkOrder/checkOrder.wxml']['filters'] =f_['./addmul.wxs'] || nv_require("p_./addmul.wxs");
f_['./pages/index/order/evalOrder/checkOrder/checkOrder.wxml']['filters']();

f_['./pages/index/order/evalOrder/evalOrder.wxml']={};
f_['./pages/index/order/evalOrder/evalOrder.wxml']['filters'] =f_['./addmul.wxs'] || nv_require("p_./addmul.wxs");
f_['./pages/index/order/evalOrder/evalOrder.wxml']['filters']();

f_['./pages/index/order/evalOrder/evaluatedOrder/evaluatedOrder.wxml']={};
f_['./pages/index/order/evalOrder/evaluatedOrder/evaluatedOrder.wxml']['filters'] =f_['./addmul.wxs'] || nv_require("p_./addmul.wxs");
f_['./pages/index/order/evalOrder/evaluatedOrder/evaluatedOrder.wxml']['filters']();

f_['./pages/index/order/evalOrder/paidOrder/paidOrder.wxml']={};
f_['./pages/index/order/evalOrder/paidOrder/paidOrder.wxml']['filters'] =f_['./addmul.wxs'] || nv_require("p_./addmul.wxs");
f_['./pages/index/order/evalOrder/paidOrder/paidOrder.wxml']['filters']();

f_['./pages/index/order/evalOrder/selCoupon/selCoupon.wxml']={};
f_['./pages/index/order/evalOrder/selCoupon/selCoupon.wxml']['filters'] =nv_require("m_./pages/index/order/evalOrder/selCoupon/selCoupon.wxml:filters");
function np_2(){var nv_module={nv_exports:{}};var nv_subString1 = (function (nv_value){return(nv_value.nv_substring(0,4))});var nv_subString2 = (function (nv_value){return(nv_value.nv_substring(4,8))});var nv_subString3 = (function (nv_value){return(nv_value.nv_substring(8,12))});nv_module.nv_exports = ({nv_subString1:nv_subString1,nv_subString2:nv_subString2,nv_subString3:nv_subString3,});return nv_module.nv_exports;}

f_['./pages/index/order/evalOrder/submitOrder/submitOrder.wxml']={};
f_['./pages/index/order/evalOrder/submitOrder/submitOrder.wxml']['filters'] =f_['./addmul.wxs'] || nv_require("p_./addmul.wxs");
f_['./pages/index/order/evalOrder/submitOrder/submitOrder.wxml']['filters']();

f_['./pages/index/order/order.wxml']={};
f_['./pages/index/order/order.wxml']['filters1'] =f_['./addmul.wxs'] || nv_require("p_./addmul.wxs");
f_['./pages/index/order/order.wxml']['filters1']();

f_['./pages/index/takeOut/queryFood/queryFood.wxml']={};
f_['./pages/index/takeOut/queryFood/queryFood.wxml']['filters1'] =f_['./addmul.wxs'] || nv_require("p_./addmul.wxs");
f_['./pages/index/takeOut/queryFood/queryFood.wxml']['filters1']();

f_['./pages/index/takeOut/queryOrder/queryOrder.wxml']={};
f_['./pages/index/takeOut/queryOrder/queryOrder.wxml']['filters1'] =f_['./addmul.wxs'] || nv_require("p_./addmul.wxs");
f_['./pages/index/takeOut/queryOrder/queryOrder.wxml']['filters1']();

f_['./pages/index/takeOut/takeOut.wxml']={};
f_['./pages/index/takeOut/takeOut.wxml']['filters1'] =f_['./addmul.wxs'] || nv_require("p_./addmul.wxs");
f_['./pages/index/takeOut/takeOut.wxml']['filters1']();

f_['./pages/index/takeOut/takeOutSM.wxml']={};
f_['./pages/index/takeOut/takeOutSM.wxml']['filters1'] =f_['./addmul.wxs'] || nv_require("p_./addmul.wxs");
f_['./pages/index/takeOut/takeOutSM.wxml']['filters1']();

f_['./pages/user/myCoupon/myCoupon.wxml']={};
f_['./pages/user/myCoupon/myCoupon.wxml']['filters'] =nv_require("m_./pages/user/myCoupon/myCoupon.wxml:filters");
function np_3(){var nv_module={nv_exports:{}};var nv_subString1 = (function (nv_value){return(nv_value.nv_substring(0,4))});var nv_subString2 = (function (nv_value){return(nv_value.nv_substring(4,8))});var nv_subString3 = (function (nv_value){return(nv_value.nv_substring(8,12))});nv_module.nv_exports = ({nv_subString1:nv_subString1,nv_subString2:nv_subString2,nv_subString3:nv_subString3,});return nv_module.nv_exports;}

f_['./pages/user/user.wxml']={};
f_['./pages/user/user.wxml']['filters'] =f_['./addmu.wxs'] || nv_require("p_./addmu.wxs");
f_['./pages/user/user.wxml']['filters']();

f_['./pages/user/userNotice/userNotice.wxml']={};
f_['./pages/user/userNotice/userNotice.wxml']['filters'] =f_['./addmu.wxs'] || nv_require("p_./addmu.wxs");
f_['./pages/user/userNotice/userNotice.wxml']['filters']();
f_['./pages/user/userNotice/userNotice.wxml']['filters1'] =f_['./addmul.wxs'] || nv_require("p_./addmul.wxs");
f_['./pages/user/userNotice/userNotice.wxml']['filters1']();
f_['./pages/user/userNotice/userNotice.wxml']['tools'] =f_['./userNotice.wxs'] || nv_require("p_./userNotice.wxs");
f_['./pages/user/userNotice/userNotice.wxml']['tools']();

f_['./userNotice.wxs'] = nv_require("p_./userNotice.wxs");
function np_4(){var nv_module={nv_exports:{}};var nv_sub = (function (nv_val,nv_num){nv_console.nv_log(nv_val + "\x3d\x3d\x3d\x3d\x3d\x3e");var nv_a = nv_val.nv_split("，");nv_console.nv_log(nv_a[(0)] + "\x3d\x3d\x3d\x3d?");if (nv_num == 0){return(nv_a[(0)])} else {return(nv_a[(1)])}});nv_module.nv_exports.nv_sub = nv_sub;return nv_module.nv_exports;}

var x=['./pages/active/active.wxml','./pages/brand/brand.wxml','../wxParse/wxParse.wxml','./pages/collage/collage.wxml','./pages/collage/myCollage/myCollage.wxml','./pages/components/alertview/alertview.wxml','./pages/components/timeLine/timeLine.wxml','./pages/index/collect/collect.wxml','./pages/index/destine/Receipt/Receipt.wxml','./pages/index/destine/destine.wxml','./pages/index/destine/waitReceipt/waitReceipt.wxml','./pages/index/fellin/fellin.wxml','./pages/index/fellin/queuingNumber/queuingNumber.wxml','./pages/index/index.wxml','./pages/index/order/evalOrder/bohuiOrder/bohuiOrder.wxml','./pages/index/order/evalOrder/checkOrder/checkOrder.wxml','./pages/index/order/evalOrder/evalOrder.wxml','./pages/index/order/evalOrder/evaluatedOrder/evaluatedOrder.wxml','./pages/index/order/evalOrder/evaluation/evaluation.wxml','./pages/index/order/evalOrder/paidOrder/paidOrder.wxml','./pages/index/order/evalOrder/selAddr/selAddr.wxml','./pages/index/order/evalOrder/selCoupon/selCoupon.wxml','./pages/index/order/evalOrder/submitOrder/submitOrder.wxml','./pages/index/order/order.wxml','./pages/index/takeOut/queryFood/queryFood.wxml','./pages/index/takeOut/queryOrder/queryOrder.wxml','./pages/index/takeOut/takeOut.wxml','./pages/index/takeOut/takeOutSM.wxml','./pages/index/wifi/wifi.wxml','./pages/index/wntjDetail/wntjDetail.wxml','./pages/index/yhtjDetail/yhtjDetail.wxml','./pages/map/map.wxml','./pages/maps/maps.wxml','./pages/user/alterMyCard/alterMyCard.wxml','./pages/user/cardDetail/cardDetail.wxml','./pages/user/comment/comment.wxml','./pages/user/couponsCenter/couponsCenter.wxml','./pages/user/forceCard/alterForceCard/alterForceCard.wxml','./pages/user/forceCard/forceCard.wxml','./pages/user/forceCard/receiveForceCard/receiveForceCard.wxml','./pages/user/myCard/myCard.wxml','./pages/user/myCard/receiveMyCard/receiveMyCard.wxml','./pages/user/myCash/myCash.wxml','./pages/user/myCoupon/myCoupon.wxml','./pages/user/shippingAddress/addAddress/addAddress.wxml','./pages/user/shippingAddress/seAddress/seAddress.wxml','./pages/user/shippingAddress/shippingAddress.wxml','./pages/user/shopNotice/shopNotice.wxml','./pages/user/user.wxml','./pages/user/userNotice/userNotice.wxml','./pages/welcome/accredit/accredit.wxml','./pages/welcome/otherStore/otherStore.wxml','./pages/welcome/welcome.wxml','./pages/wxParse/wxParse.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
var xC=_v()
_(r,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(r,oD)
if(_oz(z,2,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(r,fE)
if(_oz(z,3,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(r,cF)
if(_oz(z,4,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(r,hG)
if(_oz(z,5,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(r,oH)
if(_oz(z,6,e,s,gg)){oH.wxVkey=1
var cI=_mz(z,'component-timeLine',['bind:closeTk',7,'refundId',1,'refundTitle',2],[],e,s,gg)
_(oH,cI)
}
oB.wxXCkey=1
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
oH.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var lK=e_[x[1]].i
_ai(lK,x[2],e_,x[1],2,2)
var eN=_v()
_(r,eN)
var bO=_oz(z,1,e,s,gg)
var oP=_gd(x[1],bO,e_,d_)
if(oP){
var xQ=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
eN.wxXCkey=3
oP(xQ,xQ,eN,gg)
gg.f=cur_globalf
}
else _w(bO,x[1],36,18)
var aL=_v()
_(r,aL)
if(_oz(z,2,e,s,gg)){aL.wxVkey=1
}
var tM=_v()
_(r,tM)
if(_oz(z,3,e,s,gg)){tM.wxVkey=1
var oR=_mz(z,'component-timeLine',['bind:closeTk',4,'refundId',1,'refundTitle',2],[],e,s,gg)
_(tM,oR)
}
aL.wxXCkey=1
tM.wxXCkey=1
tM.wxXCkey=3
lK.pop()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[x[2]],ic:[]}
d_[x[3]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oV=_n('view')
_rz(z,oV,'class',0,e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,1,e,s,gg)){cW.wxVkey=1
}
var oX=_v()
_(oV,oX)
if(_oz(z,2,e,s,gg)){oX.wxVkey=1
}
cW.wxXCkey=1
oX.wxXCkey=1
_(r,oV)
var cT=_v()
_(r,cT)
if(_oz(z,3,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(r,hU)
if(_oz(z,4,e,s,gg)){hU.wxVkey=1
var lY=_n('view')
_rz(z,lY,'class',5,e,s,gg)
var aZ=_mz(z,'component-timeLine',['bind:closeTk',6,'refundId',1,'refundTitle',2],[],e,s,gg)
_(lY,aZ)
var t1=_mz(z,'component-alertview',['carname',9,'displayy',1,'titlename',2],[],e,s,gg)
_(lY,t1)
var e2=_mz(z,'component-alertview',['bind:chkOrder0',12,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(lY,e2)
var b3=_mz(z,'component-alertview',['bind:chkOrder0',17,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(lY,b3)
var o4=_mz(z,'component-alertview',['bind:chkOrder0',22,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(lY,o4)
_(hU,lY)
}
cT.wxXCkey=1
hU.wxXCkey=1
hU.wxXCkey=3
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var c8=_n('slot')
_(r,c8)
return r
}
e_[x[6]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var lCB=_n('view')
_rz(z,lCB,'class',0,e,s,gg)
var aDB=_v()
_(lCB,aDB)
if(_oz(z,1,e,s,gg)){aDB.wxVkey=1
}
var tEB=_v()
_(lCB,tEB)
if(_oz(z,2,e,s,gg)){tEB.wxVkey=1
}
var eFB=_v()
_(lCB,eFB)
if(_oz(z,3,e,s,gg)){eFB.wxVkey=1
}
var bGB=_v()
_(lCB,bGB)
if(_oz(z,4,e,s,gg)){bGB.wxVkey=1
}
var oHB=_v()
_(lCB,oHB)
if(_oz(z,5,e,s,gg)){oHB.wxVkey=1
}
var xIB=_v()
_(lCB,xIB)
if(_oz(z,6,e,s,gg)){xIB.wxVkey=1
}
var oJB=_v()
_(lCB,oJB)
if(_oz(z,7,e,s,gg)){oJB.wxVkey=1
}
var fKB=_v()
_(lCB,fKB)
if(_oz(z,8,e,s,gg)){fKB.wxVkey=1
}
aDB.wxXCkey=1
tEB.wxXCkey=1
eFB.wxXCkey=1
bGB.wxXCkey=1
oHB.wxXCkey=1
xIB.wxXCkey=1
oJB.wxXCkey=1
fKB.wxXCkey=1
_(r,lCB)
var o0=_v()
_(r,o0)
if(_oz(z,9,e,s,gg)){o0.wxVkey=1
}
var cAB=_v()
_(r,cAB)
if(_oz(z,10,e,s,gg)){cAB.wxVkey=1
}
var oBB=_v()
_(r,oBB)
if(_oz(z,11,e,s,gg)){oBB.wxVkey=1
var cLB=_mz(z,'component-timeLine',['bind:closeTk',12,'refundId',1,'refundTitle',2],[],e,s,gg)
_(oBB,cLB)
}
var hMB=_mz(z,'component-alertview',['carname',15,'displayy',1,'titlename',2],[],e,s,gg)
_(r,hMB)
var oNB=_mz(z,'component-alertview',['bind:chkOrder0',18,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,oNB)
var cOB=_mz(z,'component-alertview',['bind:chkOrder0',23,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,cOB)
var oPB=_mz(z,'component-alertview',['cancel',28,'carname',1,'display_alone1',2,'titlename',3],[],e,s,gg)
_(r,oPB)
o0.wxXCkey=1
cAB.wxXCkey=1
oBB.wxXCkey=1
oBB.wxXCkey=3
return r
}
e_[x[7]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var aRB=_v()
_(r,aRB)
if(_oz(z,0,e,s,gg)){aRB.wxVkey=1
}
var tSB=_v()
_(r,tSB)
if(_oz(z,1,e,s,gg)){tSB.wxVkey=1
}
var eTB=_v()
_(r,eTB)
if(_oz(z,2,e,s,gg)){eTB.wxVkey=1
}
var bUB=_v()
_(r,bUB)
if(_oz(z,3,e,s,gg)){bUB.wxVkey=1
}
var oVB=_v()
_(r,oVB)
if(_oz(z,4,e,s,gg)){oVB.wxVkey=1
}
var xWB=_v()
_(r,xWB)
if(_oz(z,5,e,s,gg)){xWB.wxVkey=1
var oXB=_mz(z,'component-timeLine',['bind:closeTk',6,'refundId',1,'refundTitle',2],[],e,s,gg)
_(xWB,oXB)
}
var fYB=_mz(z,'component-alertview',['bind:chkOrder0',9,'carname',1,'displayy',2,'titlename',3],[],e,s,gg)
_(r,fYB)
aRB.wxXCkey=1
tSB.wxXCkey=1
eTB.wxXCkey=1
bUB.wxXCkey=1
oVB.wxXCkey=1
xWB.wxXCkey=1
xWB.wxXCkey=3
return r
}
e_[x[8]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var h1B=_v()
_(r,h1B)
if(_oz(z,0,e,s,gg)){h1B.wxVkey=1
}
var o2B=_v()
_(r,o2B)
if(_oz(z,1,e,s,gg)){o2B.wxVkey=1
}
var c3B=_v()
_(r,c3B)
if(_oz(z,2,e,s,gg)){c3B.wxVkey=1
}
var o4B=_v()
_(r,o4B)
if(_oz(z,3,e,s,gg)){o4B.wxVkey=1
var l5B=_mz(z,'component-timeLine',['bind:closeTk',4,'refundId',1,'refundTitle',2],[],e,s,gg)
_(o4B,l5B)
}
h1B.wxXCkey=1
o2B.wxXCkey=1
c3B.wxXCkey=1
o4B.wxXCkey=1
o4B.wxXCkey=3
return r
}
e_[x[9]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var t7B=_v()
_(r,t7B)
if(_oz(z,0,e,s,gg)){t7B.wxVkey=1
}
var e8B=_v()
_(r,e8B)
if(_oz(z,1,e,s,gg)){e8B.wxVkey=1
var b9B=_mz(z,'component-timeLine',['refundId',2,'refundTitle',1],[],e,s,gg)
_(e8B,b9B)
}
var o0B=_mz(z,'component-alertview',['bind:chkOrder0',4,'carname',1,'displayy',2,'titlename',3],[],e,s,gg)
_(r,o0B)
var xAC=_mz(z,'component-alertview',['bind:chkOrder0',8,'carname',1,'displayy',2,'titlename',3],[],e,s,gg)
_(r,xAC)
t7B.wxXCkey=1
e8B.wxXCkey=1
e8B.wxXCkey=3
return r
}
e_[x[10]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var fCC=_v()
_(r,fCC)
if(_oz(z,0,e,s,gg)){fCC.wxVkey=1
}
var cDC=_v()
_(r,cDC)
if(_oz(z,1,e,s,gg)){cDC.wxVkey=1
var cGC=_mz(z,'component-timeLine',['bind:closeTk',2,'refundId',1,'refundTitle',2],[],e,s,gg)
_(cDC,cGC)
}
var hEC=_v()
_(r,hEC)
if(_oz(z,5,e,s,gg)){hEC.wxVkey=1
var oHC=_n('view')
_rz(z,oHC,'class',6,e,s,gg)
var lIC=_v()
_(oHC,lIC)
if(_oz(z,7,e,s,gg)){lIC.wxVkey=1
}
var aJC=_v()
_(oHC,aJC)
if(_oz(z,8,e,s,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(oHC,tKC)
if(_oz(z,9,e,s,gg)){tKC.wxVkey=1
}
var eLC=_v()
_(oHC,eLC)
if(_oz(z,10,e,s,gg)){eLC.wxVkey=1
}
var bMC=_v()
_(oHC,bMC)
if(_oz(z,11,e,s,gg)){bMC.wxVkey=1
}
var oNC=_v()
_(oHC,oNC)
if(_oz(z,12,e,s,gg)){oNC.wxVkey=1
}
lIC.wxXCkey=1
aJC.wxXCkey=1
tKC.wxXCkey=1
eLC.wxXCkey=1
bMC.wxXCkey=1
oNC.wxXCkey=1
_(hEC,oHC)
}
var oFC=_v()
_(r,oFC)
if(_oz(z,13,e,s,gg)){oFC.wxVkey=1
}
fCC.wxXCkey=1
cDC.wxXCkey=1
cDC.wxXCkey=3
hEC.wxXCkey=1
oFC.wxXCkey=1
return r
}
e_[x[11]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oPC=_v()
_(r,oPC)
if(_oz(z,0,e,s,gg)){oPC.wxVkey=1
}
var fQC=_v()
_(r,fQC)
if(_oz(z,1,e,s,gg)){fQC.wxVkey=1
var cRC=_mz(z,'component-timeLine',['bind:closeTk',2,'refundId',1,'refundTitle',2],[],e,s,gg)
_(fQC,cRC)
}
oPC.wxXCkey=1
fQC.wxXCkey=1
fQC.wxXCkey=3
return r
}
e_[x[12]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var lWC=_n('scroll-view')
var aXC=_v()
_(lWC,aXC)
if(_oz(z,0,e,s,gg)){aXC.wxVkey=1
}
var tYC=_v()
_(lWC,tYC)
if(_oz(z,1,e,s,gg)){tYC.wxVkey=1
var eZC=_v()
_(tYC,eZC)
var b1C=function(x3C,o2C,o4C,gg){
var c6C=_n('swiper-item')
var h7C=_v()
_(c6C,h7C)
if(_oz(z,5,x3C,o2C,gg)){h7C.wxVkey=1
}
var o8C=_v()
_(c6C,o8C)
if(_oz(z,6,x3C,o2C,gg)){o8C.wxVkey=1
}
h7C.wxXCkey=1
o8C.wxXCkey=1
_(o4C,c6C)
return o4C
}
eZC.wxXCkey=2
_2z(z,3,b1C,e,s,gg,eZC,'item','index','unique')
}
var c9C=_n('view')
_rz(z,c9C,'class',7,e,s,gg)
var o0C=_v()
_(c9C,o0C)
if(_oz(z,8,e,s,gg)){o0C.wxVkey=1
}
var lAD=_v()
_(c9C,lAD)
if(_oz(z,9,e,s,gg)){lAD.wxVkey=1
}
var aBD=_v()
_(c9C,aBD)
if(_oz(z,10,e,s,gg)){aBD.wxVkey=1
}
var tCD=_v()
_(c9C,tCD)
if(_oz(z,11,e,s,gg)){tCD.wxVkey=1
}
o0C.wxXCkey=1
lAD.wxXCkey=1
aBD.wxXCkey=1
tCD.wxXCkey=1
_(lWC,c9C)
var eDD=_n('view')
_rz(z,eDD,'class',12,e,s,gg)
var bED=_v()
_(eDD,bED)
if(_oz(z,13,e,s,gg)){bED.wxVkey=1
}
var oFD=_v()
_(eDD,oFD)
if(_oz(z,14,e,s,gg)){oFD.wxVkey=1
var xGD=_mz(z,'view',['bindtap',15,'class',1],[],e,s,gg)
var oHD=_v()
_(xGD,oHD)
if(_oz(z,17,e,s,gg)){oHD.wxVkey=1
}
var fID=_v()
_(xGD,fID)
if(_oz(z,18,e,s,gg)){fID.wxVkey=1
}
oHD.wxXCkey=1
fID.wxXCkey=1
_(oFD,xGD)
}
bED.wxXCkey=1
oFD.wxXCkey=1
_(lWC,eDD)
var cJD=_v()
_(lWC,cJD)
var hKD=function(cMD,oLD,oND,gg){
var aPD=_mz(z,'view',['bindtap',21,'class',1,'data-id',2,'data-index',3],[],cMD,oLD,gg)
var tQD=_mz(z,'view',['bindtap',25,'class',1],[],cMD,oLD,gg)
var eRD=_v()
_(tQD,eRD)
if(_oz(z,27,cMD,oLD,gg)){eRD.wxVkey=1
}
var bSD=_v()
_(tQD,bSD)
if(_oz(z,28,cMD,oLD,gg)){bSD.wxVkey=1
}
eRD.wxXCkey=1
bSD.wxXCkey=1
_(aPD,tQD)
_(oND,aPD)
return oND
}
cJD.wxXCkey=2
_2z(z,19,hKD,e,s,gg,cJD,'item','index','key')
aXC.wxXCkey=1
tYC.wxXCkey=1
_(r,lWC)
var oTC=_v()
_(r,oTC)
if(_oz(z,29,e,s,gg)){oTC.wxVkey=1
}
var cUC=_v()
_(r,cUC)
if(_oz(z,30,e,s,gg)){cUC.wxVkey=1
}
var oVC=_v()
_(r,oVC)
if(_oz(z,31,e,s,gg)){oVC.wxVkey=1
var oTD=_mz(z,'component-timeLine',['bind:closeTk',32,'refundId',1,'refundTitle',2],[],e,s,gg)
_(oVC,oTD)
}
var xUD=_mz(z,'component-alertview',['carname',35,'displayy',1,'titlename',2],[],e,s,gg)
_(r,xUD)
oTC.wxXCkey=1
cUC.wxXCkey=1
oVC.wxXCkey=1
oVC.wxXCkey=3
return r
}
e_[x[13]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var fWD=_v()
_(r,fWD)
if(_oz(z,0,e,s,gg)){fWD.wxVkey=1
}
var cXD=_v()
_(r,cXD)
if(_oz(z,1,e,s,gg)){cXD.wxVkey=1
var hYD=_mz(z,'component-timeLine',['bind:closeTk',2,'refundId',1,'refundTitle',2],[],e,s,gg)
_(cXD,hYD)
}
fWD.wxXCkey=1
cXD.wxXCkey=1
cXD.wxXCkey=3
return r
}
e_[x[14]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var o8D=_n('view')
_rz(z,o8D,'class',0,e,s,gg)
var x9D=_v()
_(o8D,x9D)
if(_oz(z,1,e,s,gg)){x9D.wxVkey=1
var hCE=_n('view')
_rz(z,hCE,'class',2,e,s,gg)
var lGE=_n('view')
_rz(z,lGE,'class',3,e,s,gg)
var aHE=_v()
_(lGE,aHE)
if(_oz(z,4,e,s,gg)){aHE.wxVkey=1
}
var tIE=_v()
_(lGE,tIE)
if(_oz(z,5,e,s,gg)){tIE.wxVkey=1
}
var eJE=_v()
_(lGE,eJE)
if(_oz(z,6,e,s,gg)){eJE.wxVkey=1
}
aHE.wxXCkey=1
tIE.wxXCkey=1
eJE.wxXCkey=1
_(hCE,lGE)
var oDE=_v()
_(hCE,oDE)
if(_oz(z,7,e,s,gg)){oDE.wxVkey=1
}
var cEE=_v()
_(hCE,cEE)
if(_oz(z,8,e,s,gg)){cEE.wxVkey=1
}
var oFE=_v()
_(hCE,oFE)
if(_oz(z,9,e,s,gg)){oFE.wxVkey=1
}
oDE.wxXCkey=1
cEE.wxXCkey=1
oFE.wxXCkey=1
_(x9D,hCE)
}
var o0D=_v()
_(o8D,o0D)
if(_oz(z,10,e,s,gg)){o0D.wxVkey=1
}
var fAE=_v()
_(o8D,fAE)
if(_oz(z,11,e,s,gg)){fAE.wxVkey=1
}
var cBE=_v()
_(o8D,cBE)
if(_oz(z,12,e,s,gg)){cBE.wxVkey=1
}
x9D.wxXCkey=1
o0D.wxXCkey=1
fAE.wxXCkey=1
cBE.wxXCkey=1
_(r,o8D)
var c1D=_v()
_(r,c1D)
if(_oz(z,13,e,s,gg)){c1D.wxVkey=1
}
var o2D=_v()
_(r,o2D)
if(_oz(z,14,e,s,gg)){o2D.wxVkey=1
}
var l3D=_v()
_(r,l3D)
if(_oz(z,15,e,s,gg)){l3D.wxVkey=1
}
var a4D=_v()
_(r,a4D)
if(_oz(z,16,e,s,gg)){a4D.wxVkey=1
}
var t5D=_v()
_(r,t5D)
if(_oz(z,17,e,s,gg)){t5D.wxVkey=1
}
var e6D=_v()
_(r,e6D)
if(_oz(z,18,e,s,gg)){e6D.wxVkey=1
}
var b7D=_v()
_(r,b7D)
if(_oz(z,19,e,s,gg)){b7D.wxVkey=1
var bKE=_mz(z,'component-timeLine',['bind:closeTk',20,'refundId',1,'refundTitle',2],[],e,s,gg)
_(b7D,bKE)
}
var oLE=_mz(z,'component-alertview',['carname',23,'displayy',1,'titlename',2],[],e,s,gg)
_(r,oLE)
c1D.wxXCkey=1
o2D.wxXCkey=1
l3D.wxXCkey=1
a4D.wxXCkey=1
t5D.wxXCkey=1
e6D.wxXCkey=1
b7D.wxXCkey=1
b7D.wxXCkey=3
return r
}
e_[x[15]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var oNE=_v()
_(r,oNE)
if(_oz(z,0,e,s,gg)){oNE.wxVkey=1
}
var cSE=_n('view')
_rz(z,cSE,'class',1,e,s,gg)
var lUE=_n('view')
_rz(z,lUE,'class',2,e,s,gg)
var aVE=_v()
_(lUE,aVE)
if(_oz(z,3,e,s,gg)){aVE.wxVkey=1
}
var tWE=_v()
_(lUE,tWE)
if(_oz(z,4,e,s,gg)){tWE.wxVkey=1
}
aVE.wxXCkey=1
tWE.wxXCkey=1
_(cSE,lUE)
var eXE=_n('view')
_rz(z,eXE,'class',5,e,s,gg)
var bYE=_v()
_(eXE,bYE)
if(_oz(z,6,e,s,gg)){bYE.wxVkey=1
}
var oZE=_v()
_(eXE,oZE)
if(_oz(z,7,e,s,gg)){oZE.wxVkey=1
}
bYE.wxXCkey=1
oZE.wxXCkey=1
_(cSE,eXE)
var oTE=_v()
_(cSE,oTE)
if(_oz(z,8,e,s,gg)){oTE.wxVkey=1
}
oTE.wxXCkey=1
_(r,cSE)
var fOE=_v()
_(r,fOE)
if(_oz(z,9,e,s,gg)){fOE.wxVkey=1
var x1E=_n('view')
_rz(z,x1E,'class',10,e,s,gg)
var o2E=_v()
_(x1E,o2E)
if(_oz(z,11,e,s,gg)){o2E.wxVkey=1
}
var f3E=_v()
_(x1E,f3E)
if(_oz(z,12,e,s,gg)){f3E.wxVkey=1
}
o2E.wxXCkey=1
f3E.wxXCkey=1
_(fOE,x1E)
}
var cPE=_v()
_(r,cPE)
if(_oz(z,13,e,s,gg)){cPE.wxVkey=1
}
var hQE=_v()
_(r,hQE)
if(_oz(z,14,e,s,gg)){hQE.wxVkey=1
}
var oRE=_v()
_(r,oRE)
if(_oz(z,15,e,s,gg)){oRE.wxVkey=1
var c4E=_mz(z,'component-timeLine',['bind:closeTk',16,'refundId',1,'refundTitle',2],[],e,s,gg)
_(oRE,c4E)
}
var h5E=_mz(z,'component-alertview',['bind:chkOrder0',19,'carname',1,'displayy',2,'titlename',3],[],e,s,gg)
_(r,h5E)
var o6E=_mz(z,'component-alertview',['bind:chkOrder0',23,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,o6E)
var c7E=_mz(z,'component-alertview',['carname',28,'displayy',1,'titlename',2],[],e,s,gg)
_(r,c7E)
var o8E=_mz(z,'component-alertview',['bind:chkOrder0',31,'carname',1,'displayy',2,'titlename',3],[],e,s,gg)
_(r,o8E)
var l9E=_mz(z,'component-alertview',['bind:chkOrder0',35,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,l9E)
var a0E=_mz(z,'component-alertview',['bind:chkOrder0',40,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,a0E)
var tAF=_mz(z,'component-alertview',['bind:chkOrder0',45,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,tAF)
var eBF=_mz(z,'component-alertview',['bind:chkOrder0',50,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,eBF)
var bCF=_mz(z,'component-alertview',['bind:chkOrder0',55,'carname',1,'displayy',2,'titlename',3],[],e,s,gg)
_(r,bCF)
var oDF=_mz(z,'component-alertview',['carname',59,'displayy',1,'titlename',2],[],e,s,gg)
_(r,oDF)
var xEF=_mz(z,'component-alertview',['cancel',62,'carname',1,'display_alone1',2,'titlename',3],[],e,s,gg)
_(r,xEF)
oNE.wxXCkey=1
fOE.wxXCkey=1
cPE.wxXCkey=1
hQE.wxXCkey=1
oRE.wxXCkey=1
oRE.wxXCkey=3
return r
}
e_[x[16]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var fGF=_v()
_(r,fGF)
if(_oz(z,0,e,s,gg)){fGF.wxVkey=1
}
var cHF=_v()
_(r,cHF)
if(_oz(z,1,e,s,gg)){cHF.wxVkey=1
}
var cKF=_n('view')
_rz(z,cKF,'class',2,e,s,gg)
var oLF=_v()
_(cKF,oLF)
if(_oz(z,3,e,s,gg)){oLF.wxVkey=1
var bQF=_n('view')
_rz(z,bQF,'class',4,e,s,gg)
var fUF=_n('view')
_rz(z,fUF,'class',5,e,s,gg)
var cVF=_v()
_(fUF,cVF)
if(_oz(z,6,e,s,gg)){cVF.wxVkey=1
}
var hWF=_v()
_(fUF,hWF)
if(_oz(z,7,e,s,gg)){hWF.wxVkey=1
}
var oXF=_v()
_(fUF,oXF)
if(_oz(z,8,e,s,gg)){oXF.wxVkey=1
}
cVF.wxXCkey=1
hWF.wxXCkey=1
oXF.wxXCkey=1
_(bQF,fUF)
var oRF=_v()
_(bQF,oRF)
if(_oz(z,9,e,s,gg)){oRF.wxVkey=1
}
var xSF=_v()
_(bQF,xSF)
if(_oz(z,10,e,s,gg)){xSF.wxVkey=1
}
var oTF=_v()
_(bQF,oTF)
if(_oz(z,11,e,s,gg)){oTF.wxVkey=1
}
oRF.wxXCkey=1
xSF.wxXCkey=1
oTF.wxXCkey=1
_(oLF,bQF)
}
var lMF=_v()
_(cKF,lMF)
if(_oz(z,12,e,s,gg)){lMF.wxVkey=1
var cYF=_n('view')
_rz(z,cYF,'class',13,e,s,gg)
var t3F=_n('view')
_rz(z,t3F,'class',14,e,s,gg)
var e4F=_v()
_(t3F,e4F)
if(_oz(z,15,e,s,gg)){e4F.wxVkey=1
}
var b5F=_v()
_(t3F,b5F)
if(_oz(z,16,e,s,gg)){b5F.wxVkey=1
}
var o6F=_v()
_(t3F,o6F)
if(_oz(z,17,e,s,gg)){o6F.wxVkey=1
}
var x7F=_v()
_(t3F,x7F)
if(_oz(z,18,e,s,gg)){x7F.wxVkey=1
}
e4F.wxXCkey=1
b5F.wxXCkey=1
o6F.wxXCkey=1
x7F.wxXCkey=1
_(cYF,t3F)
var oZF=_v()
_(cYF,oZF)
if(_oz(z,19,e,s,gg)){oZF.wxVkey=1
}
var l1F=_v()
_(cYF,l1F)
if(_oz(z,20,e,s,gg)){l1F.wxVkey=1
}
var a2F=_v()
_(cYF,a2F)
if(_oz(z,21,e,s,gg)){a2F.wxVkey=1
}
oZF.wxXCkey=1
l1F.wxXCkey=1
a2F.wxXCkey=1
_(lMF,cYF)
}
var aNF=_v()
_(cKF,aNF)
if(_oz(z,22,e,s,gg)){aNF.wxVkey=1
}
var tOF=_v()
_(cKF,tOF)
if(_oz(z,23,e,s,gg)){tOF.wxVkey=1
}
var ePF=_v()
_(cKF,ePF)
if(_oz(z,24,e,s,gg)){ePF.wxVkey=1
}
oLF.wxXCkey=1
lMF.wxXCkey=1
aNF.wxXCkey=1
tOF.wxXCkey=1
ePF.wxXCkey=1
_(r,cKF)
var hIF=_v()
_(r,hIF)
if(_oz(z,25,e,s,gg)){hIF.wxVkey=1
}
var oJF=_v()
_(r,oJF)
if(_oz(z,26,e,s,gg)){oJF.wxVkey=1
var o8F=_mz(z,'component-timeLine',['bind:closeTk',27,'refundId',1,'refundTitle',2],[],e,s,gg)
_(oJF,o8F)
}
fGF.wxXCkey=1
cHF.wxXCkey=1
hIF.wxXCkey=1
oJF.wxXCkey=1
oJF.wxXCkey=3
return r
}
e_[x[17]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var c0F=_v()
_(r,c0F)
if(_oz(z,0,e,s,gg)){c0F.wxVkey=1
}
var hAG=_v()
_(r,hAG)
if(_oz(z,1,e,s,gg)){hAG.wxVkey=1
var oBG=_mz(z,'component-timeLine',['bind:closeTk',2,'refundId',1,'refundTitle',2],[],e,s,gg)
_(hAG,oBG)
}
c0F.wxXCkey=1
hAG.wxXCkey=1
hAG.wxXCkey=3
return r
}
e_[x[18]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var bIG=_n('view')
_rz(z,bIG,'class',0,e,s,gg)
var oJG=_v()
_(bIG,oJG)
if(_oz(z,1,e,s,gg)){oJG.wxVkey=1
var oLG=_n('view')
_rz(z,oLG,'class',2,e,s,gg)
var oPG=_n('view')
_rz(z,oPG,'class',3,e,s,gg)
var cQG=_v()
_(oPG,cQG)
if(_oz(z,4,e,s,gg)){cQG.wxVkey=1
}
var oRG=_v()
_(oPG,oRG)
if(_oz(z,5,e,s,gg)){oRG.wxVkey=1
}
var lSG=_v()
_(oPG,lSG)
if(_oz(z,6,e,s,gg)){lSG.wxVkey=1
}
cQG.wxXCkey=1
oRG.wxXCkey=1
lSG.wxXCkey=1
_(oLG,oPG)
var fMG=_v()
_(oLG,fMG)
if(_oz(z,7,e,s,gg)){fMG.wxVkey=1
}
var cNG=_v()
_(oLG,cNG)
if(_oz(z,8,e,s,gg)){cNG.wxVkey=1
}
var hOG=_v()
_(oLG,hOG)
if(_oz(z,9,e,s,gg)){hOG.wxVkey=1
}
fMG.wxXCkey=1
cNG.wxXCkey=1
hOG.wxXCkey=1
_(oJG,oLG)
}
var xKG=_v()
_(bIG,xKG)
if(_oz(z,10,e,s,gg)){xKG.wxVkey=1
var aTG=_n('view')
_rz(z,aTG,'class',11,e,s,gg)
var oXG=_n('view')
_rz(z,oXG,'class',12,e,s,gg)
var xYG=_v()
_(oXG,xYG)
if(_oz(z,13,e,s,gg)){xYG.wxVkey=1
}
var oZG=_v()
_(oXG,oZG)
if(_oz(z,14,e,s,gg)){oZG.wxVkey=1
}
var f1G=_v()
_(oXG,f1G)
if(_oz(z,15,e,s,gg)){f1G.wxVkey=1
}
var c2G=_v()
_(oXG,c2G)
if(_oz(z,16,e,s,gg)){c2G.wxVkey=1
}
xYG.wxXCkey=1
oZG.wxXCkey=1
f1G.wxXCkey=1
c2G.wxXCkey=1
_(aTG,oXG)
var tUG=_v()
_(aTG,tUG)
if(_oz(z,17,e,s,gg)){tUG.wxVkey=1
}
var eVG=_v()
_(aTG,eVG)
if(_oz(z,18,e,s,gg)){eVG.wxVkey=1
}
var bWG=_v()
_(aTG,bWG)
if(_oz(z,19,e,s,gg)){bWG.wxVkey=1
}
tUG.wxXCkey=1
eVG.wxXCkey=1
bWG.wxXCkey=1
_(xKG,aTG)
}
var h3G=_n('view')
_rz(z,h3G,'class',20,e,s,gg)
var o4G=_v()
_(h3G,o4G)
if(_oz(z,21,e,s,gg)){o4G.wxVkey=1
}
var c5G=_v()
_(h3G,c5G)
if(_oz(z,22,e,s,gg)){c5G.wxVkey=1
}
var o6G=_v()
_(h3G,o6G)
if(_oz(z,23,e,s,gg)){o6G.wxVkey=1
}
o4G.wxXCkey=1
c5G.wxXCkey=1
o6G.wxXCkey=1
_(bIG,h3G)
oJG.wxXCkey=1
xKG.wxXCkey=1
_(r,bIG)
var oDG=_v()
_(r,oDG)
if(_oz(z,24,e,s,gg)){oDG.wxVkey=1
}
var lEG=_v()
_(r,lEG)
if(_oz(z,25,e,s,gg)){lEG.wxVkey=1
}
var aFG=_v()
_(r,aFG)
if(_oz(z,26,e,s,gg)){aFG.wxVkey=1
}
var tGG=_v()
_(r,tGG)
if(_oz(z,27,e,s,gg)){tGG.wxVkey=1
}
var eHG=_v()
_(r,eHG)
if(_oz(z,28,e,s,gg)){eHG.wxVkey=1
var l7G=_mz(z,'component-timeLine',['bind:closeTk',29,'refundId',1,'refundTitle',2],[],e,s,gg)
_(eHG,l7G)
}
oDG.wxXCkey=1
lEG.wxXCkey=1
aFG.wxXCkey=1
tGG.wxXCkey=1
eHG.wxXCkey=1
eHG.wxXCkey=3
return r
}
e_[x[19]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var bAH=_n('view')
var oBH=_v()
_(bAH,oBH)
var xCH=function(fEH,oDH,cFH,gg){
var oHH=_v()
_(cFH,oHH)
if(_oz(z,2,fEH,oDH,gg)){oHH.wxVkey=1
}
oHH.wxXCkey=1
return cFH
}
oBH.wxXCkey=2
_2z(z,0,xCH,e,s,gg,oBH,'item','index','key')
var cIH=_v()
_(bAH,cIH)
var oJH=function(aLH,lKH,tMH,gg){
var bOH=_v()
_(tMH,bOH)
if(_oz(z,5,aLH,lKH,gg)){bOH.wxVkey=1
}
bOH.wxXCkey=1
return tMH
}
cIH.wxXCkey=2
_2z(z,3,oJH,e,s,gg,cIH,'item','index','key')
_(r,bAH)
var t9G=_v()
_(r,t9G)
if(_oz(z,6,e,s,gg)){t9G.wxVkey=1
}
var e0G=_v()
_(r,e0G)
if(_oz(z,7,e,s,gg)){e0G.wxVkey=1
var oPH=_mz(z,'component-timeLine',['bind:closeTk',8,'refundId',1,'refundTitle',2],[],e,s,gg)
_(e0G,oPH)
}
t9G.wxXCkey=1
e0G.wxXCkey=1
e0G.wxXCkey=3
return r
}
e_[x[20]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var cTH=_v()
_(r,cTH)
var hUH=function(cWH,oVH,oXH,gg){
var aZH=_n('view')
_rz(z,aZH,'class',2,cWH,oVH,gg)
var t1H=_v()
_(aZH,t1H)
if(_oz(z,3,cWH,oVH,gg)){t1H.wxVkey=1
}
var e2H=_v()
_(aZH,e2H)
if(_oz(z,4,cWH,oVH,gg)){e2H.wxVkey=1
}
var b3H=_v()
_(aZH,b3H)
if(_oz(z,5,cWH,oVH,gg)){b3H.wxVkey=1
}
var o4H=_v()
_(aZH,o4H)
if(_oz(z,6,cWH,oVH,gg)){o4H.wxVkey=1
}
var x5H=_v()
_(aZH,x5H)
if(_oz(z,7,cWH,oVH,gg)){x5H.wxVkey=1
}
var o6H=_v()
_(aZH,o6H)
if(_oz(z,8,cWH,oVH,gg)){o6H.wxVkey=1
}
var f7H=_v()
_(aZH,f7H)
if(_oz(z,9,cWH,oVH,gg)){f7H.wxVkey=1
}
var c8H=_v()
_(aZH,c8H)
if(_oz(z,10,cWH,oVH,gg)){c8H.wxVkey=1
}
var h9H=_v()
_(aZH,h9H)
if(_oz(z,11,cWH,oVH,gg)){h9H.wxVkey=1
}
var o0H=_v()
_(aZH,o0H)
if(_oz(z,12,cWH,oVH,gg)){o0H.wxVkey=1
}
var cAI=_v()
_(aZH,cAI)
if(_oz(z,13,cWH,oVH,gg)){cAI.wxVkey=1
}
var oBI=_v()
_(aZH,oBI)
if(_oz(z,14,cWH,oVH,gg)){oBI.wxVkey=1
}
var lCI=_v()
_(aZH,lCI)
if(_oz(z,15,cWH,oVH,gg)){lCI.wxVkey=1
}
var aDI=_v()
_(aZH,aDI)
if(_oz(z,16,cWH,oVH,gg)){aDI.wxVkey=1
}
var tEI=_v()
_(aZH,tEI)
if(_oz(z,17,cWH,oVH,gg)){tEI.wxVkey=1
}
var eFI=_v()
_(aZH,eFI)
if(_oz(z,18,cWH,oVH,gg)){eFI.wxVkey=1
}
var bGI=_v()
_(aZH,bGI)
if(_oz(z,19,cWH,oVH,gg)){bGI.wxVkey=1
}
var oHI=_v()
_(aZH,oHI)
if(_oz(z,20,cWH,oVH,gg)){oHI.wxVkey=1
}
t1H.wxXCkey=1
e2H.wxXCkey=1
b3H.wxXCkey=1
o4H.wxXCkey=1
x5H.wxXCkey=1
o6H.wxXCkey=1
f7H.wxXCkey=1
c8H.wxXCkey=1
h9H.wxXCkey=1
o0H.wxXCkey=1
cAI.wxXCkey=1
oBI.wxXCkey=1
lCI.wxXCkey=1
aDI.wxXCkey=1
tEI.wxXCkey=1
eFI.wxXCkey=1
bGI.wxXCkey=1
oHI.wxXCkey=1
_(oXH,aZH)
return oXH
}
cTH.wxXCkey=2
_2z(z,0,hUH,e,s,gg,cTH,'item','index','key')
var oRH=_v()
_(r,oRH)
if(_oz(z,21,e,s,gg)){oRH.wxVkey=1
}
var fSH=_v()
_(r,fSH)
if(_oz(z,22,e,s,gg)){fSH.wxVkey=1
var xII=_mz(z,'component-timeLine',['bind:closeTk',23,'refundId',1,'refundTitle',2],[],e,s,gg)
_(fSH,xII)
}
var oJI=_mz(z,'component-alertview',['carname',26,'displayy',1,'titlename',2],[],e,s,gg)
_(r,oJI)
oRH.wxXCkey=1
fSH.wxXCkey=1
fSH.wxXCkey=3
return r
}
e_[x[21]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var cLI=_v()
_(r,cLI)
if(_oz(z,0,e,s,gg)){cLI.wxVkey=1
}
var hMI=_v()
_(r,hMI)
if(_oz(z,1,e,s,gg)){hMI.wxVkey=1
var oNI=_mz(z,'component-timeLine',['bind:closeTk',2,'refundId',1,'refundTitle',2],[],e,s,gg)
_(hMI,oNI)
}
var cOI=_mz(z,'component-alertview',['carname',5,'displayy',1,'titlename',2],[],e,s,gg)
_(r,cOI)
var oPI=_mz(z,'component-alertview',['cancel',8,'carname',1,'display_alone1',2,'titlename',3],[],e,s,gg)
_(r,oPI)
var lQI=_mz(z,'component-alertview',['bind:chkOrder0',12,'carname',1,'displayy',2,'titlename',3],[],e,s,gg)
_(r,lQI)
cLI.wxXCkey=1
hMI.wxXCkey=1
hMI.wxXCkey=3
return r
}
e_[x[22]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var oVI=_mz(z,'swiper',['bindchange',0,'current',1,'duration',1,'style',2],[],e,s,gg)
var xWI=_v()
_(oVI,xWI)
var oXI=function(cZI,fYI,h1I,gg){
var c3I=_v()
_(h1I,c3I)
if(_oz(z,8,cZI,fYI,gg)){c3I.wxVkey=1
var o4I=_n('view')
var a6I=_mz(z,'view',['bindtap',9,'class',1,'data-bohui-reason',2,'data-current-tab',3,'data-id',4,'data-order-id',5,'data-order-state',6],[],cZI,fYI,gg)
var e8I=_v()
_(a6I,e8I)
var b9I=function(xAJ,o0I,oBJ,gg){
var cDJ=_mz(z,'view',['class',20,'style',1],[],xAJ,o0I,gg)
var hEJ=_v()
_(cDJ,hEJ)
if(_oz(z,22,xAJ,o0I,gg)){hEJ.wxVkey=1
}
var oFJ=_v()
_(cDJ,oFJ)
if(_oz(z,23,xAJ,o0I,gg)){oFJ.wxVkey=1
}
var cGJ=_v()
_(cDJ,cGJ)
if(_oz(z,24,xAJ,o0I,gg)){cGJ.wxVkey=1
}
hEJ.wxXCkey=1
oFJ.wxXCkey=1
cGJ.wxXCkey=1
_(oBJ,cDJ)
return oBJ
}
e8I.wxXCkey=2
_2z(z,18,b9I,cZI,fYI,gg,e8I,'cell','cellindex','')
var t7I=_v()
_(a6I,t7I)
if(_oz(z,25,cZI,fYI,gg)){t7I.wxVkey=1
}
t7I.wxXCkey=1
_(o4I,a6I)
var l5I=_v()
_(o4I,l5I)
if(_oz(z,26,cZI,fYI,gg)){l5I.wxVkey=1
}
l5I.wxXCkey=1
_(c3I,o4I)
}
c3I.wxXCkey=1
return h1I
}
xWI.wxXCkey=2
_2z(z,6,oXI,e,s,gg,xWI,'item','index','key')
var oHJ=_v()
_(oVI,oHJ)
var lIJ=function(tKJ,aJJ,eLJ,gg){
var oNJ=_mz(z,'view',['bindtap',31,'class',1,'data-bohui-reason',2,'data-current-tab',3,'data-dc-beizhu',4,'data-id',5,'data-order-state',6],[],tKJ,aJJ,gg)
var oPJ=_v()
_(oNJ,oPJ)
var fQJ=function(hSJ,cRJ,oTJ,gg){
var oVJ=_mz(z,'view',['class',42,'style',1],[],hSJ,cRJ,gg)
var lWJ=_v()
_(oVJ,lWJ)
if(_oz(z,44,hSJ,cRJ,gg)){lWJ.wxVkey=1
}
var aXJ=_v()
_(oVJ,aXJ)
if(_oz(z,45,hSJ,cRJ,gg)){aXJ.wxVkey=1
}
var tYJ=_v()
_(oVJ,tYJ)
if(_oz(z,46,hSJ,cRJ,gg)){tYJ.wxVkey=1
}
lWJ.wxXCkey=1
aXJ.wxXCkey=1
tYJ.wxXCkey=1
_(oTJ,oVJ)
return oTJ
}
oPJ.wxXCkey=2
_2z(z,40,fQJ,tKJ,aJJ,gg,oPJ,'cell','cellindex','')
var xOJ=_v()
_(oNJ,xOJ)
if(_oz(z,47,tKJ,aJJ,gg)){xOJ.wxVkey=1
}
xOJ.wxXCkey=1
_(eLJ,oNJ)
return eLJ
}
oHJ.wxXCkey=2
_2z(z,29,lIJ,e,s,gg,oHJ,'item','index','key')
var eZJ=_v()
_(oVI,eZJ)
var b1J=function(x3J,o2J,o4J,gg){
var c6J=_n('view')
var c9J=_mz(z,'view',['bindtap',52,'class',1,'data-bohui-reason',2,'data-current-tab',3,'data-id',4,'data-order-state',5,'data-psf',6],[],x3J,o2J,gg)
var eDK=_n('view')
_rz(z,eDK,'class',59,x3J,o2J,gg)
var bEK=_v()
_(eDK,bEK)
if(_oz(z,60,x3J,o2J,gg)){bEK.wxVkey=1
}
var oFK=_v()
_(eDK,oFK)
if(_oz(z,61,x3J,o2J,gg)){oFK.wxVkey=1
}
bEK.wxXCkey=1
oFK.wxXCkey=1
_(c9J,eDK)
var xGK=_v()
_(c9J,xGK)
var oHK=function(cJK,fIK,hKK,gg){
var cMK=_mz(z,'view',['class',66,'style',1],[],cJK,fIK,gg)
var oNK=_v()
_(cMK,oNK)
if(_oz(z,68,cJK,fIK,gg)){oNK.wxVkey=1
}
var lOK=_v()
_(cMK,lOK)
if(_oz(z,69,cJK,fIK,gg)){lOK.wxVkey=1
}
var aPK=_v()
_(cMK,aPK)
if(_oz(z,70,cJK,fIK,gg)){aPK.wxVkey=1
}
oNK.wxXCkey=1
lOK.wxXCkey=1
aPK.wxXCkey=1
_(hKK,cMK)
return hKK
}
xGK.wxXCkey=2
_2z(z,64,oHK,x3J,o2J,gg,xGK,'cell','cellindex','')
var o0J=_v()
_(c9J,o0J)
if(_oz(z,71,x3J,o2J,gg)){o0J.wxVkey=1
var tQK=_v()
_(o0J,tQK)
if(_oz(z,72,x3J,o2J,gg)){tQK.wxVkey=1
}
tQK.wxXCkey=1
}
var lAK=_v()
_(c9J,lAK)
if(_oz(z,73,x3J,o2J,gg)){lAK.wxVkey=1
var eRK=_v()
_(lAK,eRK)
if(_oz(z,74,x3J,o2J,gg)){eRK.wxVkey=1
var bSK=_v()
_(eRK,bSK)
if(_oz(z,75,x3J,o2J,gg)){bSK.wxVkey=1
}
bSK.wxXCkey=1
}
eRK.wxXCkey=1
}
var aBK=_v()
_(c9J,aBK)
if(_oz(z,76,x3J,o2J,gg)){aBK.wxVkey=1
}
var tCK=_v()
_(c9J,tCK)
if(_oz(z,77,x3J,o2J,gg)){tCK.wxVkey=1
}
o0J.wxXCkey=1
lAK.wxXCkey=1
aBK.wxXCkey=1
tCK.wxXCkey=1
_(c6J,c9J)
var h7J=_v()
_(c6J,h7J)
if(_oz(z,78,x3J,o2J,gg)){h7J.wxVkey=1
}
var o8J=_v()
_(c6J,o8J)
if(_oz(z,79,x3J,o2J,gg)){o8J.wxVkey=1
}
h7J.wxXCkey=1
o8J.wxXCkey=1
_(o4J,c6J)
return o4J
}
eZJ.wxXCkey=2
_2z(z,50,b1J,e,s,gg,eZJ,'item','index','key')
_(r,oVI)
var tSI=_v()
_(r,tSI)
if(_oz(z,80,e,s,gg)){tSI.wxVkey=1
var oTK=_n('view')
_rz(z,oTK,'class',81,e,s,gg)
var xUK=_v()
_(oTK,xUK)
if(_oz(z,82,e,s,gg)){xUK.wxVkey=1
}
var oVK=_v()
_(oTK,oVK)
if(_oz(z,83,e,s,gg)){oVK.wxVkey=1
}
var fWK=_v()
_(oTK,fWK)
if(_oz(z,84,e,s,gg)){fWK.wxVkey=1
}
var cXK=_v()
_(oTK,cXK)
if(_oz(z,85,e,s,gg)){cXK.wxVkey=1
}
var hYK=_v()
_(oTK,hYK)
if(_oz(z,86,e,s,gg)){hYK.wxVkey=1
}
xUK.wxXCkey=1
oVK.wxXCkey=1
fWK.wxXCkey=1
cXK.wxXCkey=1
hYK.wxXCkey=1
_(tSI,oTK)
}
var eTI=_v()
_(r,eTI)
if(_oz(z,87,e,s,gg)){eTI.wxVkey=1
}
var bUI=_v()
_(r,bUI)
if(_oz(z,88,e,s,gg)){bUI.wxVkey=1
var oZK=_mz(z,'component-timeLine',['bind:closeTk',89,'refundId',1,'refundTitle',2],[],e,s,gg)
_(bUI,oZK)
}
var c1K=_mz(z,'component-alertview',['carname',92,'displayy',1,'titlename',2],[],e,s,gg)
_(r,c1K)
var o2K=_mz(z,'component-alertview',['bind:chkOrder0',95,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,o2K)
tSI.wxXCkey=1
eTI.wxXCkey=1
bUI.wxXCkey=1
bUI.wxXCkey=3
return r
}
e_[x[23]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var b7K=_n('view')
_rz(z,b7K,'style',0,e,s,gg)
var o8K=_v()
_(b7K,o8K)
var x9K=function(fAL,o0K,cBL,gg){
var oDL=_n('view')
_rz(z,oDL,'class',4,fAL,o0K,gg)
var cEL=_v()
_(oDL,cEL)
if(_oz(z,5,fAL,o0K,gg)){cEL.wxVkey=1
}
var oFL=_v()
_(oDL,oFL)
if(_oz(z,6,fAL,o0K,gg)){oFL.wxVkey=1
}
var lGL=_v()
_(oDL,lGL)
if(_oz(z,7,fAL,o0K,gg)){lGL.wxVkey=1
var eJL=_n('view')
var bKL=_v()
_(eJL,bKL)
if(_oz(z,8,fAL,o0K,gg)){bKL.wxVkey=1
}
else{bKL.wxVkey=2
var oLL=_v()
_(bKL,oLL)
if(_oz(z,9,fAL,o0K,gg)){oLL.wxVkey=1
}
oLL.wxXCkey=1
}
bKL.wxXCkey=1
_(lGL,eJL)
}
var aHL=_v()
_(oDL,aHL)
if(_oz(z,10,fAL,o0K,gg)){aHL.wxVkey=1
}
var tIL=_v()
_(oDL,tIL)
if(_oz(z,11,fAL,o0K,gg)){tIL.wxVkey=1
var xML=_v()
_(tIL,xML)
var oNL=function(cPL,fOL,hQL,gg){
var cSL=_v()
_(hQL,cSL)
if(_oz(z,16,cPL,fOL,gg)){cSL.wxVkey=1
var oTL=_n('view')
_rz(z,oTL,'class',17,cPL,fOL,gg)
var lUL=_v()
_(oTL,lUL)
if(_oz(z,18,cPL,fOL,gg)){lUL.wxVkey=1
}
var aVL=_v()
_(oTL,aVL)
if(_oz(z,19,cPL,fOL,gg)){aVL.wxVkey=1
}
var tWL=_v()
_(oTL,tWL)
if(_oz(z,20,cPL,fOL,gg)){tWL.wxVkey=1
}
lUL.wxXCkey=1
aVL.wxXCkey=1
tWL.wxXCkey=1
_(cSL,oTL)
}
cSL.wxXCkey=1
return hQL
}
xML.wxXCkey=2
_2z(z,14,oNL,fAL,o0K,gg,xML,'sizelist','guigeIndex','')
}
cEL.wxXCkey=1
oFL.wxXCkey=1
lGL.wxXCkey=1
aHL.wxXCkey=1
tIL.wxXCkey=1
_(cBL,oDL)
return cBL
}
o8K.wxXCkey=2
_2z(z,2,x9K,e,s,gg,o8K,'food','index','')
var eXL=_n('view')
_rz(z,eXL,'class',21,e,s,gg)
var bYL=_n('view')
_rz(z,bYL,'class',22,e,s,gg)
var oZL=_v()
_(bYL,oZL)
if(_oz(z,23,e,s,gg)){oZL.wxVkey=1
}
var x1L=_v()
_(bYL,x1L)
if(_oz(z,24,e,s,gg)){x1L.wxVkey=1
}
oZL.wxXCkey=1
x1L.wxXCkey=1
_(eXL,bYL)
var o2L=_v()
_(eXL,o2L)
var f3L=function(h5L,c4L,o6L,gg){
var o8L=_n('view')
_rz(z,o8L,'class',27,h5L,c4L,gg)
var l9L=_v()
_(o8L,l9L)
if(_oz(z,28,h5L,c4L,gg)){l9L.wxVkey=1
}
var a0L=_v()
_(o8L,a0L)
if(_oz(z,29,h5L,c4L,gg)){a0L.wxVkey=1
var tAM=_n('view')
_rz(z,tAM,'name',30,h5L,c4L,gg)
var eBM=_v()
_(tAM,eBM)
if(_oz(z,31,h5L,c4L,gg)){eBM.wxVkey=1
}
var bCM=_v()
_(tAM,bCM)
if(_oz(z,32,h5L,c4L,gg)){bCM.wxVkey=1
}
eBM.wxXCkey=1
bCM.wxXCkey=1
_(a0L,tAM)
}
l9L.wxXCkey=1
a0L.wxXCkey=1
_(o6L,o8L)
return o6L
}
o2L.wxXCkey=2
_2z(z,25,f3L,e,s,gg,o2L,'item','index','')
_(b7K,eXL)
_(r,b7K)
var a4K=_v()
_(r,a4K)
if(_oz(z,33,e,s,gg)){a4K.wxVkey=1
var oDM=_v()
_(a4K,oDM)
if(_oz(z,34,e,s,gg)){oDM.wxVkey=1
}
oDM.wxXCkey=1
}
var t5K=_v()
_(r,t5K)
if(_oz(z,35,e,s,gg)){t5K.wxVkey=1
}
var e6K=_v()
_(r,e6K)
if(_oz(z,36,e,s,gg)){e6K.wxVkey=1
var xEM=_mz(z,'component-timeLine',['bind:closeTk',37,'refundId',1,'refundTitle',2],[],e,s,gg)
_(e6K,xEM)
}
var oFM=_mz(z,'component-alertview',['bind:chkOrder0',40,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,oFM)
var fGM=_mz(z,'component-alertview',['carname',45,'displayy',1,'titlename',2],[],e,s,gg)
_(r,fGM)
a4K.wxXCkey=1
t5K.wxXCkey=1
e6K.wxXCkey=1
e6K.wxXCkey=3
return r
}
e_[x[24]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var lMM=_n('view')
_rz(z,lMM,'class',0,e,s,gg)
var aNM=_v()
_(lMM,aNM)
if(_oz(z,1,e,s,gg)){aNM.wxVkey=1
var oRM=_v()
_(aNM,oRM)
if(_oz(z,2,e,s,gg)){oRM.wxVkey=1
}
oRM.wxXCkey=1
}
else{aNM.wxVkey=2
var xSM=_v()
_(aNM,xSM)
if(_oz(z,3,e,s,gg)){xSM.wxVkey=1
}
xSM.wxXCkey=1
}
var tOM=_v()
_(lMM,tOM)
if(_oz(z,4,e,s,gg)){tOM.wxVkey=1
var oTM=_v()
_(tOM,oTM)
if(_oz(z,5,e,s,gg)){oTM.wxVkey=1
var fUM=_n('view')
var cVM=_v()
_(fUM,cVM)
if(_oz(z,6,e,s,gg)){cVM.wxVkey=1
}
else{cVM.wxVkey=2
var hWM=_v()
_(cVM,hWM)
if(_oz(z,7,e,s,gg)){hWM.wxVkey=1
}
hWM.wxXCkey=1
}
cVM.wxXCkey=1
_(oTM,fUM)
}
oTM.wxXCkey=1
}
var ePM=_v()
_(lMM,ePM)
if(_oz(z,8,e,s,gg)){ePM.wxVkey=1
}
var bQM=_v()
_(lMM,bQM)
if(_oz(z,9,e,s,gg)){bQM.wxVkey=1
var oXM=_v()
_(bQM,oXM)
var cYM=function(l1M,oZM,a2M,gg){
var e4M=_v()
_(a2M,e4M)
if(_oz(z,14,l1M,oZM,gg)){e4M.wxVkey=1
var b5M=_v()
_(e4M,b5M)
if(_oz(z,15,l1M,oZM,gg)){b5M.wxVkey=1
var o6M=_v()
_(b5M,o6M)
if(_oz(z,16,l1M,oZM,gg)){o6M.wxVkey=1
}
o6M.wxXCkey=1
}
b5M.wxXCkey=1
}
e4M.wxXCkey=1
return a2M
}
oXM.wxXCkey=2
_2z(z,12,cYM,e,s,gg,oXM,'sizelist','guigeIndex','')
}
aNM.wxXCkey=1
tOM.wxXCkey=1
ePM.wxXCkey=1
bQM.wxXCkey=1
_(r,lMM)
var hIM=_v()
_(r,hIM)
if(_oz(z,17,e,s,gg)){hIM.wxVkey=1
var x7M=_n('view')
_rz(z,x7M,'class',18,e,s,gg)
var o8M=_n('view')
_rz(z,o8M,'class',19,e,s,gg)
var f9M=_v()
_(o8M,f9M)
if(_oz(z,20,e,s,gg)){f9M.wxVkey=1
}
var c0M=_v()
_(o8M,c0M)
if(_oz(z,21,e,s,gg)){c0M.wxVkey=1
}
f9M.wxXCkey=1
c0M.wxXCkey=1
_(x7M,o8M)
var hAN=_v()
_(x7M,hAN)
var oBN=function(oDN,cCN,lEN,gg){
var tGN=_n('view')
_rz(z,tGN,'class',24,oDN,cCN,gg)
var eHN=_v()
_(tGN,eHN)
if(_oz(z,25,oDN,cCN,gg)){eHN.wxVkey=1
}
var bIN=_v()
_(tGN,bIN)
if(_oz(z,26,oDN,cCN,gg)){bIN.wxVkey=1
var oJN=_n('view')
_rz(z,oJN,'name',27,oDN,cCN,gg)
var xKN=_v()
_(oJN,xKN)
if(_oz(z,28,oDN,cCN,gg)){xKN.wxVkey=1
}
var oLN=_v()
_(oJN,oLN)
if(_oz(z,29,oDN,cCN,gg)){oLN.wxVkey=1
}
xKN.wxXCkey=1
oLN.wxXCkey=1
_(bIN,oJN)
}
eHN.wxXCkey=1
bIN.wxXCkey=1
_(lEN,tGN)
return lEN
}
hAN.wxXCkey=2
_2z(z,22,oBN,e,s,gg,hAN,'item','index','')
_(hIM,x7M)
}
var oJM=_v()
_(r,oJM)
if(_oz(z,30,e,s,gg)){oJM.wxVkey=1
var fMN=_v()
_(oJM,fMN)
if(_oz(z,31,e,s,gg)){fMN.wxVkey=1
}
fMN.wxXCkey=1
}
var cKM=_v()
_(r,cKM)
if(_oz(z,32,e,s,gg)){cKM.wxVkey=1
}
var oLM=_v()
_(r,oLM)
if(_oz(z,33,e,s,gg)){oLM.wxVkey=1
var cNN=_mz(z,'component-timeLine',['bind:closeTk',34,'refundId',1,'refundTitle',2],[],e,s,gg)
_(oLM,cNN)
}
var hON=_mz(z,'component-alertview',['bind:chkOrder0',37,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,hON)
var oPN=_mz(z,'component-alertview',['carname',42,'displayy',1,'titlename',2],[],e,s,gg)
_(r,oPN)
hIM.wxXCkey=1
oJM.wxXCkey=1
cKM.wxXCkey=1
oLM.wxXCkey=1
oLM.wxXCkey=3
return r
}
e_[x[25]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var oRN=_v()
_(r,oRN)
if(_oz(z,0,e,s,gg)){oRN.wxVkey=1
var eVN=_mz(z,'view',['catchtouchmove',1,'class',1,'style',2],[],e,s,gg)
var oXN=_mz(z,'scroll-view',['bindscroll',4,'bindscrolltolower',1,'class',2,'scrollIntoView',3,'scrollY',4,'style',5],[],e,s,gg)
var xYN=_v()
_(oXN,xYN)
var oZN=function(c2N,f1N,h3N,gg){
var c5N=_v()
_(h3N,c5N)
if(_oz(z,13,c2N,f1N,gg)){c5N.wxVkey=1
var o6N=_v()
_(c5N,o6N)
var l7N=function(t9N,a8N,e0N,gg){
var oBO=_n('view')
_rz(z,oBO,'class',18,t9N,a8N,gg)
var oDO=_n('view')
_rz(z,oDO,'class',19,t9N,a8N,gg)
var fEO=_v()
_(oDO,fEO)
if(_oz(z,20,t9N,a8N,gg)){fEO.wxVkey=1
var hGO=_v()
_(fEO,hGO)
if(_oz(z,21,t9N,a8N,gg)){hGO.wxVkey=1
}
hGO.wxXCkey=1
}
else{fEO.wxVkey=2
var oHO=_v()
_(fEO,oHO)
if(_oz(z,22,t9N,a8N,gg)){oHO.wxVkey=1
}
oHO.wxXCkey=1
}
var cFO=_v()
_(oDO,cFO)
if(_oz(z,23,t9N,a8N,gg)){cFO.wxVkey=1
var cIO=_n('view')
_rz(z,cIO,'name',24,t9N,a8N,gg)
var oJO=_v()
_(cIO,oJO)
if(_oz(z,25,t9N,a8N,gg)){oJO.wxVkey=1
}
var lKO=_v()
_(cIO,lKO)
if(_oz(z,26,t9N,a8N,gg)){lKO.wxVkey=1
}
oJO.wxXCkey=1
lKO.wxXCkey=1
_(cFO,cIO)
}
else{cFO.wxVkey=2
}
fEO.wxXCkey=1
cFO.wxXCkey=1
_(oBO,oDO)
var xCO=_v()
_(oBO,xCO)
if(_oz(z,27,t9N,a8N,gg)){xCO.wxVkey=1
var aLO=_v()
_(xCO,aLO)
var tMO=function(bOO,eNO,oPO,gg){
var oRO=_v()
_(oPO,oRO)
if(_oz(z,32,bOO,eNO,gg)){oRO.wxVkey=1
var fSO=_mz(z,'view',['class',33,'style',1],[],bOO,eNO,gg)
var cTO=_v()
_(fSO,cTO)
if(_oz(z,35,bOO,eNO,gg)){cTO.wxVkey=1
}
else{cTO.wxVkey=2
var hUO=_v()
_(cTO,hUO)
if(_oz(z,36,bOO,eNO,gg)){hUO.wxVkey=1
}
hUO.wxXCkey=1
}
cTO.wxXCkey=1
_(oRO,fSO)
}
oRO.wxXCkey=1
return oPO
}
aLO.wxXCkey=2
_2z(z,30,tMO,t9N,a8N,gg,aLO,'sizelist','guigeIndex','')
}
xCO.wxXCkey=1
_(e0N,oBO)
return e0N
}
o6N.wxXCkey=2
_2z(z,16,l7N,c2N,f1N,gg,o6N,'cell','cellIndex','')
}
c5N.wxXCkey=1
return h3N
}
xYN.wxXCkey=2
_2z(z,11,oZN,e,s,gg,xYN,'item','parentIndex','')
_(eVN,oXN)
var oVO=_n('view')
_rz(z,oVO,'class',37,e,s,gg)
var cWO=_n('view')
_rz(z,cWO,'class',38,e,s,gg)
var lYO=_n('view')
_rz(z,lYO,'class',39,e,s,gg)
var aZO=_v()
_(lYO,aZO)
if(_oz(z,40,e,s,gg)){aZO.wxVkey=1
}
var t1O=_v()
_(lYO,t1O)
if(_oz(z,41,e,s,gg)){t1O.wxVkey=1
}
var e2O=_v()
_(lYO,e2O)
if(_oz(z,42,e,s,gg)){e2O.wxVkey=1
}
var b3O=_v()
_(lYO,b3O)
if(_oz(z,43,e,s,gg)){b3O.wxVkey=1
}
aZO.wxXCkey=1
t1O.wxXCkey=1
e2O.wxXCkey=1
b3O.wxXCkey=1
_(cWO,lYO)
var oXO=_v()
_(cWO,oXO)
if(_oz(z,44,e,s,gg)){oXO.wxVkey=1
}
oXO.wxXCkey=1
_(oVO,cWO)
var o4O=_v()
_(oVO,o4O)
var x5O=function(f7O,o6O,c8O,gg){
var o0O=_n('view')
_rz(z,o0O,'class',47,f7O,o6O,gg)
var cAP=_v()
_(o0O,cAP)
if(_oz(z,48,f7O,o6O,gg)){cAP.wxVkey=1
}
var oBP=_v()
_(o0O,oBP)
if(_oz(z,49,f7O,o6O,gg)){oBP.wxVkey=1
var lCP=_n('view')
_rz(z,lCP,'name',50,f7O,o6O,gg)
var aDP=_v()
_(lCP,aDP)
if(_oz(z,51,f7O,o6O,gg)){aDP.wxVkey=1
var eFP=_mz(z,'view',['catchtap',52,'class',1,'data-food-id',2,'data-food-info-box-price',3,'data-item-index',4,'data-parent-index',5,'data-type-id',6,'style',7],[],f7O,o6O,gg)
var bGP=_v()
_(eFP,bGP)
if(_oz(z,60,f7O,o6O,gg)){bGP.wxVkey=1
}
bGP.wxXCkey=1
_(aDP,eFP)
}
var tEP=_v()
_(lCP,tEP)
if(_oz(z,61,f7O,o6O,gg)){tEP.wxVkey=1
}
aDP.wxXCkey=1
tEP.wxXCkey=1
_(oBP,lCP)
}
cAP.wxXCkey=1
oBP.wxXCkey=1
_(c8O,o0O)
return c8O
}
o4O.wxXCkey=2
_2z(z,45,x5O,e,s,gg,o4O,'item','index','')
_(eVN,oVO)
var bWN=_v()
_(eVN,bWN)
if(_oz(z,62,e,s,gg)){bWN.wxVkey=1
}
bWN.wxXCkey=1
_(oRN,eVN)
}
var lSN=_v()
_(r,lSN)
if(_oz(z,63,e,s,gg)){lSN.wxVkey=1
var oHP=_v()
_(lSN,oHP)
if(_oz(z,64,e,s,gg)){oHP.wxVkey=1
}
oHP.wxXCkey=1
}
var aTN=_v()
_(r,aTN)
if(_oz(z,65,e,s,gg)){aTN.wxVkey=1
}
var tUN=_v()
_(r,tUN)
if(_oz(z,66,e,s,gg)){tUN.wxVkey=1
var xIP=_mz(z,'component-timeLine',['bind:closeTk',67,'refundId',1,'refundTitle',2],[],e,s,gg)
_(tUN,xIP)
}
var oJP=_mz(z,'component-alertview',['carname',70,'displayy',1,'titlename',2],[],e,s,gg)
_(r,oJP)
oRN.wxXCkey=1
lSN.wxXCkey=1
aTN.wxXCkey=1
tUN.wxXCkey=1
tUN.wxXCkey=3
return r
}
e_[x[26]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var cLP=_v()
_(r,cLP)
if(_oz(z,0,e,s,gg)){cLP.wxVkey=1
var oPP=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var aRP=_mz(z,'scroll-view',['bindscroll',3,'bindscrolltolower',1,'class',2,'scrollIntoView',3,'scrollY',4,'style',5],[],e,s,gg)
var tSP=_v()
_(aRP,tSP)
var eTP=function(oVP,bUP,xWP,gg){
var fYP=_v()
_(xWP,fYP)
if(_oz(z,12,oVP,bUP,gg)){fYP.wxVkey=1
var cZP=_v()
_(fYP,cZP)
var h1P=function(c3P,o2P,o4P,gg){
var a6P=_n('view')
_rz(z,a6P,'class',17,c3P,o2P,gg)
var e8P=_n('view')
_rz(z,e8P,'class',18,c3P,o2P,gg)
var b9P=_v()
_(e8P,b9P)
if(_oz(z,19,c3P,o2P,gg)){b9P.wxVkey=1
var xAQ=_v()
_(b9P,xAQ)
if(_oz(z,20,c3P,o2P,gg)){xAQ.wxVkey=1
}
xAQ.wxXCkey=1
}
else{b9P.wxVkey=2
var oBQ=_v()
_(b9P,oBQ)
if(_oz(z,21,c3P,o2P,gg)){oBQ.wxVkey=1
}
oBQ.wxXCkey=1
}
var o0P=_v()
_(e8P,o0P)
if(_oz(z,22,c3P,o2P,gg)){o0P.wxVkey=1
var fCQ=_n('view')
_rz(z,fCQ,'name',23,c3P,o2P,gg)
var cDQ=_v()
_(fCQ,cDQ)
if(_oz(z,24,c3P,o2P,gg)){cDQ.wxVkey=1
}
var hEQ=_v()
_(fCQ,hEQ)
if(_oz(z,25,c3P,o2P,gg)){hEQ.wxVkey=1
}
cDQ.wxXCkey=1
hEQ.wxXCkey=1
_(o0P,fCQ)
}
else{o0P.wxVkey=2
}
b9P.wxXCkey=1
o0P.wxXCkey=1
_(a6P,e8P)
var t7P=_v()
_(a6P,t7P)
if(_oz(z,26,c3P,o2P,gg)){t7P.wxVkey=1
var oFQ=_v()
_(t7P,oFQ)
var cGQ=function(lIQ,oHQ,aJQ,gg){
var eLQ=_v()
_(aJQ,eLQ)
if(_oz(z,31,lIQ,oHQ,gg)){eLQ.wxVkey=1
var bMQ=_mz(z,'view',['class',32,'style',1],[],lIQ,oHQ,gg)
var oNQ=_v()
_(bMQ,oNQ)
if(_oz(z,34,lIQ,oHQ,gg)){oNQ.wxVkey=1
}
else{oNQ.wxVkey=2
var xOQ=_v()
_(oNQ,xOQ)
if(_oz(z,35,lIQ,oHQ,gg)){xOQ.wxVkey=1
}
xOQ.wxXCkey=1
}
oNQ.wxXCkey=1
_(eLQ,bMQ)
}
eLQ.wxXCkey=1
return aJQ
}
oFQ.wxXCkey=2
_2z(z,29,cGQ,c3P,o2P,gg,oFQ,'sizelist','guigeIndex','')
}
t7P.wxXCkey=1
_(o4P,a6P)
return o4P
}
cZP.wxXCkey=2
_2z(z,15,h1P,oVP,bUP,gg,cZP,'cell','cellIndex','')
}
fYP.wxXCkey=1
return xWP
}
tSP.wxXCkey=2
_2z(z,10,eTP,e,s,gg,tSP,'item','parentIndex','')
_(oPP,aRP)
var oPQ=_n('view')
_rz(z,oPQ,'class',36,e,s,gg)
var fQQ=_n('view')
_rz(z,fQQ,'class',37,e,s,gg)
var hSQ=_n('view')
_rz(z,hSQ,'class',38,e,s,gg)
var oTQ=_v()
_(hSQ,oTQ)
if(_oz(z,39,e,s,gg)){oTQ.wxVkey=1
}
var cUQ=_v()
_(hSQ,cUQ)
if(_oz(z,40,e,s,gg)){cUQ.wxVkey=1
}
oTQ.wxXCkey=1
cUQ.wxXCkey=1
_(fQQ,hSQ)
var cRQ=_v()
_(fQQ,cRQ)
if(_oz(z,41,e,s,gg)){cRQ.wxVkey=1
}
cRQ.wxXCkey=1
_(oPQ,fQQ)
var oVQ=_v()
_(oPQ,oVQ)
var lWQ=function(tYQ,aXQ,eZQ,gg){
var o2Q=_n('view')
_rz(z,o2Q,'class',44,tYQ,aXQ,gg)
var x3Q=_v()
_(o2Q,x3Q)
if(_oz(z,45,tYQ,aXQ,gg)){x3Q.wxVkey=1
}
var o4Q=_v()
_(o2Q,o4Q)
if(_oz(z,46,tYQ,aXQ,gg)){o4Q.wxVkey=1
var f5Q=_n('view')
_rz(z,f5Q,'name',47,tYQ,aXQ,gg)
var c6Q=_v()
_(f5Q,c6Q)
if(_oz(z,48,tYQ,aXQ,gg)){c6Q.wxVkey=1
}
var h7Q=_v()
_(f5Q,h7Q)
if(_oz(z,49,tYQ,aXQ,gg)){h7Q.wxVkey=1
}
c6Q.wxXCkey=1
h7Q.wxXCkey=1
_(o4Q,f5Q)
}
x3Q.wxXCkey=1
o4Q.wxXCkey=1
_(eZQ,o2Q)
return eZQ
}
oVQ.wxXCkey=2
_2z(z,42,lWQ,e,s,gg,oVQ,'item','index','')
_(oPP,oPQ)
var lQP=_v()
_(oPP,lQP)
if(_oz(z,50,e,s,gg)){lQP.wxVkey=1
}
lQP.wxXCkey=1
_(cLP,oPP)
}
var hMP=_v()
_(r,hMP)
if(_oz(z,51,e,s,gg)){hMP.wxVkey=1
var o8Q=_v()
_(hMP,o8Q)
if(_oz(z,52,e,s,gg)){o8Q.wxVkey=1
}
o8Q.wxXCkey=1
}
var oNP=_v()
_(r,oNP)
if(_oz(z,53,e,s,gg)){oNP.wxVkey=1
}
var cOP=_v()
_(r,cOP)
if(_oz(z,54,e,s,gg)){cOP.wxVkey=1
var c9Q=_mz(z,'component-timeLine',['bind:closeTk',55,'refundId',1,'refundTitle',2],[],e,s,gg)
_(cOP,c9Q)
}
var o0Q=_mz(z,'component-alertview',['carname',58,'displayy',1,'titlename',2],[],e,s,gg)
_(r,o0Q)
cLP.wxXCkey=1
hMP.wxXCkey=1
oNP.wxXCkey=1
cOP.wxXCkey=1
cOP.wxXCkey=3
return r
}
e_[x[27]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var aBR=_v()
_(r,aBR)
if(_oz(z,0,e,s,gg)){aBR.wxVkey=1
}
var tCR=_v()
_(r,tCR)
if(_oz(z,1,e,s,gg)){tCR.wxVkey=1
var bER=_mz(z,'component-timeLine',['bind:closeTk',2,'refundId',1,'refundTitle',2],[],e,s,gg)
_(tCR,bER)
}
var oFR=_mz(z,'component-alertview',['bind:chkOrder0',5,'carname',1,'displayy',2,'titlename',3],[],e,s,gg)
_(r,oFR)
var eDR=_v()
_(r,eDR)
if(_oz(z,9,e,s,gg)){eDR.wxVkey=1
}
aBR.wxXCkey=1
tCR.wxXCkey=1
tCR.wxXCkey=3
eDR.wxXCkey=1
return r
}
e_[x[28]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var oHR=_v()
_(r,oHR)
if(_oz(z,0,e,s,gg)){oHR.wxVkey=1
}
var hKR=_v()
_(r,hKR)
var oLR=function(oNR,cMR,lOR,gg){
var tQR=_n('view')
_rz(z,tQR,'class',3,oNR,cMR,gg)
var eRR=_v()
_(tQR,eRR)
if(_oz(z,4,oNR,cMR,gg)){eRR.wxVkey=1
}
var bSR=_v()
_(tQR,bSR)
if(_oz(z,5,oNR,cMR,gg)){bSR.wxVkey=1
}
eRR.wxXCkey=1
bSR.wxXCkey=1
_(lOR,tQR)
return lOR
}
hKR.wxXCkey=2
_2z(z,1,oLR,e,s,gg,hKR,'item','index','key')
var fIR=_v()
_(r,fIR)
if(_oz(z,6,e,s,gg)){fIR.wxVkey=1
}
var cJR=_v()
_(r,cJR)
if(_oz(z,7,e,s,gg)){cJR.wxVkey=1
var oTR=_mz(z,'component-timeLine',['bind:closeTk',8,'refundId',1,'refundTitle',2],[],e,s,gg)
_(cJR,oTR)
}
oHR.wxXCkey=1
fIR.wxXCkey=1
cJR.wxXCkey=1
cJR.wxXCkey=3
return r
}
e_[x[29]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var oVR=_v()
_(r,oVR)
if(_oz(z,0,e,s,gg)){oVR.wxVkey=1
}
var fWR=_v()
_(r,fWR)
if(_oz(z,1,e,s,gg)){fWR.wxVkey=1
var cXR=_mz(z,'component-timeLine',['bind:closeTk',2,'refundId',1,'refundTitle',2],[],e,s,gg)
_(fWR,cXR)
}
oVR.wxXCkey=1
fWR.wxXCkey=1
fWR.wxXCkey=3
return r
}
e_[x[30]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var oZR=_v()
_(r,oZR)
if(_oz(z,0,e,s,gg)){oZR.wxVkey=1
}
var c1R=_v()
_(r,c1R)
if(_oz(z,1,e,s,gg)){c1R.wxVkey=1
var o2R=_mz(z,'component-timeLine',['bind:closeTk',2,'refundId',1,'refundTitle',2],[],e,s,gg)
_(c1R,o2R)
}
oZR.wxXCkey=1
c1R.wxXCkey=1
c1R.wxXCkey=3
return r
}
e_[x[31]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var a4R=e_[x[32]].i
_ai(a4R,x[2],e_,x[32],2,2)
var t5R=_v()
_(r,t5R)
if(_oz(z,0,e,s,gg)){t5R.wxVkey=1
}
t5R.wxXCkey=1
a4R.pop()
return r
}
e_[x[32]]={f:m31,j:[],i:[],ti:[x[2]],ic:[]}
d_[x[33]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var b7R=_v()
_(r,b7R)
if(_oz(z,0,e,s,gg)){b7R.wxVkey=1
}
var o8R=_v()
_(r,o8R)
if(_oz(z,1,e,s,gg)){o8R.wxVkey=1
}
var x9R=_v()
_(r,x9R)
if(_oz(z,2,e,s,gg)){x9R.wxVkey=1
var o0R=_mz(z,'component-timeLine',['bind:closeTk',3,'refundId',1,'refundTitle',2],[],e,s,gg)
_(x9R,o0R)
}
var fAS=_mz(z,'component-alertview',['bind:chkOrder0',6,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,fAS)
b7R.wxXCkey=1
o8R.wxXCkey=1
x9R.wxXCkey=1
x9R.wxXCkey=3
return r
}
e_[x[33]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var oDS=_n('view')
_rz(z,oDS,'class',0,e,s,gg)
var cES=_v()
_(oDS,cES)
if(_oz(z,1,e,s,gg)){cES.wxVkey=1
}
var oFS=_n('view')
_rz(z,oFS,'class',2,e,s,gg)
var lGS=_v()
_(oFS,lGS)
if(_oz(z,3,e,s,gg)){lGS.wxVkey=1
}
var aHS=_v()
_(oFS,aHS)
if(_oz(z,4,e,s,gg)){aHS.wxVkey=1
}
var tIS=_v()
_(oFS,tIS)
if(_oz(z,5,e,s,gg)){tIS.wxVkey=1
}
lGS.wxXCkey=1
aHS.wxXCkey=1
tIS.wxXCkey=1
_(oDS,oFS)
var eJS=_n('view')
_rz(z,eJS,'class',6,e,s,gg)
var bKS=_v()
_(eJS,bKS)
if(_oz(z,7,e,s,gg)){bKS.wxVkey=1
}
var oLS=_v()
_(eJS,oLS)
if(_oz(z,8,e,s,gg)){oLS.wxVkey=1
}
bKS.wxXCkey=1
oLS.wxXCkey=1
_(oDS,eJS)
var xMS=_n('view')
_rz(z,xMS,'class',9,e,s,gg)
var oNS=_v()
_(xMS,oNS)
if(_oz(z,10,e,s,gg)){oNS.wxVkey=1
}
var fOS=_v()
_(xMS,fOS)
if(_oz(z,11,e,s,gg)){fOS.wxVkey=1
}
oNS.wxXCkey=1
fOS.wxXCkey=1
_(oDS,xMS)
var cPS=_n('view')
_rz(z,cPS,'class',12,e,s,gg)
var hQS=_v()
_(cPS,hQS)
if(_oz(z,13,e,s,gg)){hQS.wxVkey=1
}
var oRS=_v()
_(cPS,oRS)
if(_oz(z,14,e,s,gg)){oRS.wxVkey=1
}
hQS.wxXCkey=1
oRS.wxXCkey=1
_(oDS,cPS)
cES.wxXCkey=1
_(r,oDS)
var hCS=_v()
_(r,hCS)
if(_oz(z,15,e,s,gg)){hCS.wxVkey=1
}
var cSS=_mz(z,'component-alertview',['bind:chkOrder0',16,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,cSS)
hCS.wxXCkey=1
return r
}
e_[x[34]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var lUS=_v()
_(r,lUS)
if(_oz(z,0,e,s,gg)){lUS.wxVkey=1
}
var aVS=_v()
_(r,aVS)
if(_oz(z,1,e,s,gg)){aVS.wxVkey=1
var tWS=_mz(z,'component-timeLine',['bind:closeTk',2,'refundId',1,'refundTitle',2],[],e,s,gg)
_(aVS,tWS)
}
lUS.wxXCkey=1
aVS.wxXCkey=1
aVS.wxXCkey=3
return r
}
e_[x[35]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var o2S=_v()
_(r,o2S)
var f3S=function(h5S,c4S,o6S,gg){
var o8S=_v()
_(o6S,o8S)
if(_oz(z,2,h5S,c4S,gg)){o8S.wxVkey=1
var tAT=_n('view')
_rz(z,tAT,'class',3,h5S,c4S,gg)
var bCT=_mz(z,'form',['reportSubmit',-1,'bindsubmit',4,'data-card-id',1,'data-ids',2,'data-put-id',3,'data-voucherRestrict-id',4],[],h5S,c4S,gg)
var oDT=_v()
_(bCT,oDT)
if(_oz(z,9,h5S,c4S,gg)){oDT.wxVkey=1
}
oDT.wxXCkey=1
_(tAT,bCT)
var eBT=_v()
_(tAT,eBT)
if(_oz(z,10,h5S,c4S,gg)){eBT.wxVkey=1
}
eBT.wxXCkey=1
_(o8S,tAT)
}
var l9S=_v()
_(o6S,l9S)
if(_oz(z,11,h5S,c4S,gg)){l9S.wxVkey=1
var xET=_n('view')
_rz(z,xET,'class',12,h5S,c4S,gg)
var fGT=_mz(z,'form',['reportSubmit',-1,'bindsubmit',13,'data-card-id',1,'data-ids',2,'data-put-id',3,'data-voucherRestrict-id',4],[],h5S,c4S,gg)
var cHT=_v()
_(fGT,cHT)
if(_oz(z,18,h5S,c4S,gg)){cHT.wxVkey=1
}
cHT.wxXCkey=1
_(xET,fGT)
var oFT=_v()
_(xET,oFT)
if(_oz(z,19,h5S,c4S,gg)){oFT.wxVkey=1
}
oFT.wxXCkey=1
_(l9S,xET)
}
var a0S=_v()
_(o6S,a0S)
if(_oz(z,20,h5S,c4S,gg)){a0S.wxVkey=1
var hIT=_n('view')
_rz(z,hIT,'class',21,h5S,c4S,gg)
var cKT=_mz(z,'form',['reportSubmit',-1,'bindsubmit',22,'data-card-id',1,'data-ids',2,'data-put-id',3,'data-voucherRestrict-id',4],[],h5S,c4S,gg)
var oLT=_v()
_(cKT,oLT)
if(_oz(z,27,h5S,c4S,gg)){oLT.wxVkey=1
}
oLT.wxXCkey=1
_(hIT,cKT)
var oJT=_v()
_(hIT,oJT)
if(_oz(z,28,h5S,c4S,gg)){oJT.wxVkey=1
}
oJT.wxXCkey=1
_(a0S,hIT)
}
o8S.wxXCkey=1
l9S.wxXCkey=1
a0S.wxXCkey=1
return o6S
}
o2S.wxXCkey=2
_2z(z,0,f3S,e,s,gg,o2S,'item','index','key')
var bYS=_v()
_(r,bYS)
if(_oz(z,29,e,s,gg)){bYS.wxVkey=1
}
var oZS=_v()
_(r,oZS)
if(_oz(z,30,e,s,gg)){oZS.wxVkey=1
}
var x1S=_v()
_(r,x1S)
if(_oz(z,31,e,s,gg)){x1S.wxVkey=1
var lMT=_mz(z,'component-timeLine',['bind:closeTk',32,'refundId',1,'refundTitle',2],[],e,s,gg)
_(x1S,lMT)
}
var aNT=_mz(z,'component-alertview',['carname',35,'displayy',1,'titlename',2],[],e,s,gg)
_(r,aNT)
bYS.wxXCkey=1
oZS.wxXCkey=1
x1S.wxXCkey=1
x1S.wxXCkey=3
return r
}
e_[x[36]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var ePT=_v()
_(r,ePT)
if(_oz(z,0,e,s,gg)){ePT.wxVkey=1
}
var fUT=_n('view')
_rz(z,fUT,'style',1,e,s,gg)
var cVT=_v()
_(fUT,cVT)
if(_oz(z,2,e,s,gg)){cVT.wxVkey=1
}
var hWT=_v()
_(fUT,hWT)
if(_oz(z,3,e,s,gg)){hWT.wxVkey=1
}
cVT.wxXCkey=1
hWT.wxXCkey=1
_(r,fUT)
var bQT=_v()
_(r,bQT)
if(_oz(z,4,e,s,gg)){bQT.wxVkey=1
}
var oRT=_v()
_(r,oRT)
if(_oz(z,5,e,s,gg)){oRT.wxVkey=1
}
var xST=_v()
_(r,xST)
if(_oz(z,6,e,s,gg)){xST.wxVkey=1
}
var oTT=_v()
_(r,oTT)
if(_oz(z,7,e,s,gg)){oTT.wxVkey=1
var oXT=_mz(z,'component-timeLine',['bind:closeTk',8,'refundId',1,'refundTitle',2],[],e,s,gg)
_(oTT,oXT)
}
var cYT=_mz(z,'component-alertview',['bind:chkOrder0',11,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,cYT)
ePT.wxXCkey=1
bQT.wxXCkey=1
oRT.wxXCkey=1
xST.wxXCkey=1
oTT.wxXCkey=1
oTT.wxXCkey=3
return r
}
e_[x[37]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var l1T=_v()
_(r,l1T)
if(_oz(z,0,e,s,gg)){l1T.wxVkey=1
}
var a2T=_v()
_(r,a2T)
if(_oz(z,1,e,s,gg)){a2T.wxVkey=1
}
var t3T=_v()
_(r,t3T)
if(_oz(z,2,e,s,gg)){t3T.wxVkey=1
var e4T=_mz(z,'component-timeLine',['bind:closeTk',3,'refundId',1,'refundTitle',2],[],e,s,gg)
_(t3T,e4T)
}
var b5T=_mz(z,'component-alertview',['bind:chkOrder0',6,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,b5T)
var o6T=_mz(z,'component-alertview',['bind:chkOrder0',11,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,o6T)
var x7T=_mz(z,'component-alertview',['bind:chkOrder0',16,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,x7T)
var o8T=_mz(z,'component-alertview',['carname',21,'displayy',1,'titlename',2],[],e,s,gg)
_(r,o8T)
l1T.wxXCkey=1
a2T.wxXCkey=1
t3T.wxXCkey=1
t3T.wxXCkey=3
return r
}
e_[x[38]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var cCU=_v()
_(r,cCU)
var oDU=function(aFU,lEU,tGU,gg){
var bIU=_n('ul')
_rz(z,bIU,'class',2,aFU,lEU,gg)
var oJU=_v()
_(bIU,oJU)
var xKU=function(fMU,oLU,cNU,gg){
var oPU=_v()
_(cNU,oPU)
if(_oz(z,7,fMU,oLU,gg)){oPU.wxVkey=1
}
oPU.wxXCkey=1
return cNU
}
oJU.wxXCkey=2
_2z(z,5,xKU,aFU,lEU,gg,oJU,'noteItem','noteIndex','')
var cQU=_v()
_(bIU,cQU)
var oRU=function(aTU,lSU,tUU,gg){
var bWU=_v()
_(tUU,bWU)
if(_oz(z,12,aTU,lSU,gg)){bWU.wxVkey=1
}
bWU.wxXCkey=1
return tUU
}
cQU.wxXCkey=2
_2z(z,10,oRU,aFU,lEU,gg,cQU,'noteItem','noteIndex','')
_(tGU,bIU)
return tGU
}
cCU.wxXCkey=2
_2z(z,0,oDU,e,s,gg,cCU,'item','index','')
var c0T=_v()
_(r,c0T)
if(_oz(z,13,e,s,gg)){c0T.wxVkey=1
}
var hAU=_v()
_(r,hAU)
if(_oz(z,14,e,s,gg)){hAU.wxVkey=1
var oXU=_mz(z,'component-timeLine',['bind:closeTk',15,'refundId',1,'refundTitle',2],[],e,s,gg)
_(hAU,oXU)
}
var oBU=_v()
_(r,oBU)
if(_oz(z,18,e,s,gg)){oBU.wxVkey=1
}
var xYU=_mz(z,'component-alertview',['carname',19,'displayy',1,'titlename',2],[],e,s,gg)
_(r,xYU)
var oZU=_mz(z,'component-alertview',['bind:chkOrder0',22,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,oZU)
var f1U=_mz(z,'component-alertview',['bind:chkOrder0',27,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,f1U)
var c2U=_mz(z,'component-alertview',['bind:chkOrder0',32,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,c2U)
c0T.wxXCkey=1
hAU.wxXCkey=1
hAU.wxXCkey=3
oBU.wxXCkey=1
return r
}
e_[x[39]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var o4U=_v()
_(r,o4U)
if(_oz(z,0,e,s,gg)){o4U.wxVkey=1
}
var c5U=_v()
_(r,c5U)
if(_oz(z,1,e,s,gg)){c5U.wxVkey=1
}
var o6U=_v()
_(r,o6U)
if(_oz(z,2,e,s,gg)){o6U.wxVkey=1
}
var l7U=_v()
_(r,l7U)
if(_oz(z,3,e,s,gg)){l7U.wxVkey=1
}
var a8U=_v()
_(r,a8U)
if(_oz(z,4,e,s,gg)){a8U.wxVkey=1
}
var t9U=_v()
_(r,t9U)
if(_oz(z,5,e,s,gg)){t9U.wxVkey=1
var bAV=_mz(z,'component-timeLine',['bind:closeTk',6,'refundId',1,'refundTitle',2],[],e,s,gg)
_(t9U,bAV)
}
var oBV=_mz(z,'component-alertview',['bind:chkOrder0',9,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,oBV)
var e0U=_v()
_(r,e0U)
if(_oz(z,14,e,s,gg)){e0U.wxVkey=1
var xCV=_v()
_(e0U,xCV)
if(_oz(z,15,e,s,gg)){xCV.wxVkey=1
}
xCV.wxXCkey=1
}
o4U.wxXCkey=1
c5U.wxXCkey=1
o6U.wxXCkey=1
l7U.wxXCkey=1
a8U.wxXCkey=1
t9U.wxXCkey=1
t9U.wxXCkey=3
e0U.wxXCkey=1
return r
}
e_[x[40]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var fEV=_v()
_(r,fEV)
if(_oz(z,0,e,s,gg)){fEV.wxVkey=1
}
var cFV=_v()
_(r,cFV)
if(_oz(z,1,e,s,gg)){cFV.wxVkey=1
var hGV=_mz(z,'component-timeLine',['bind:closeTk',2,'refundId',1,'refundTitle',2],[],e,s,gg)
_(cFV,hGV)
}
fEV.wxXCkey=1
cFV.wxXCkey=1
cFV.wxXCkey=3
return r
}
e_[x[41]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var aLV=_n('view')
_rz(z,aLV,'class',0,e,s,gg)
var bOV=_v()
_(aLV,bOV)
var oPV=function(oRV,xQV,fSV,gg){
var hUV=_n('view')
_rz(z,hUV,'class',3,oRV,xQV,gg)
var oVV=_v()
_(hUV,oVV)
if(_oz(z,4,oRV,xQV,gg)){oVV.wxVkey=1
}
var cWV=_v()
_(hUV,cWV)
if(_oz(z,5,oRV,xQV,gg)){cWV.wxVkey=1
}
var oXV=_v()
_(hUV,oXV)
if(_oz(z,6,oRV,xQV,gg)){oXV.wxVkey=1
}
var lYV=_v()
_(hUV,lYV)
if(_oz(z,7,oRV,xQV,gg)){lYV.wxVkey=1
}
oVV.wxXCkey=1
cWV.wxXCkey=1
oXV.wxXCkey=1
lYV.wxXCkey=1
_(fSV,hUV)
return fSV
}
bOV.wxXCkey=2
_2z(z,1,oPV,e,s,gg,bOV,'item','index','')
var tMV=_v()
_(aLV,tMV)
if(_oz(z,8,e,s,gg)){tMV.wxVkey=1
}
var eNV=_v()
_(aLV,eNV)
if(_oz(z,9,e,s,gg)){eNV.wxVkey=1
}
tMV.wxXCkey=1
eNV.wxXCkey=1
_(r,aLV)
var cIV=_v()
_(r,cIV)
if(_oz(z,10,e,s,gg)){cIV.wxVkey=1
}
var oJV=_v()
_(r,oJV)
if(_oz(z,11,e,s,gg)){oJV.wxVkey=1
var aZV=_mz(z,'component-timeLine',['bind:closeTk',12,'refundId',1,'refundTitle',2],[],e,s,gg)
_(oJV,aZV)
}
var lKV=_v()
_(r,lKV)
if(_oz(z,15,e,s,gg)){lKV.wxVkey=1
}
cIV.wxXCkey=1
oJV.wxXCkey=1
oJV.wxXCkey=3
lKV.wxXCkey=1
return r
}
e_[x[42]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var o4V=_v()
_(r,o4V)
var x5V=function(f7V,o6V,c8V,gg){
var o0V=_v()
_(c8V,o0V)
if(_oz(z,2,f7V,o6V,gg)){o0V.wxVkey=1
var cAW=_mz(z,'view',['bindtap',3,'class',1,'data-idx',2],[],f7V,o6V,gg)
var oBW=_v()
_(cAW,oBW)
if(_oz(z,6,f7V,o6V,gg)){oBW.wxVkey=1
}
var lCW=_v()
_(cAW,lCW)
if(_oz(z,7,f7V,o6V,gg)){lCW.wxVkey=1
}
var aDW=_v()
_(cAW,aDW)
if(_oz(z,8,f7V,o6V,gg)){aDW.wxVkey=1
}
var tEW=_v()
_(cAW,tEW)
if(_oz(z,9,f7V,o6V,gg)){tEW.wxVkey=1
}
var eFW=_v()
_(cAW,eFW)
if(_oz(z,10,f7V,o6V,gg)){eFW.wxVkey=1
}
var bGW=_v()
_(cAW,bGW)
if(_oz(z,11,f7V,o6V,gg)){bGW.wxVkey=1
}
var oHW=_v()
_(cAW,oHW)
if(_oz(z,12,f7V,o6V,gg)){oHW.wxVkey=1
}
var xIW=_v()
_(cAW,xIW)
if(_oz(z,13,f7V,o6V,gg)){xIW.wxVkey=1
}
var oJW=_v()
_(cAW,oJW)
if(_oz(z,14,f7V,o6V,gg)){oJW.wxVkey=1
}
var fKW=_v()
_(cAW,fKW)
if(_oz(z,15,f7V,o6V,gg)){fKW.wxVkey=1
}
var cLW=_v()
_(cAW,cLW)
if(_oz(z,16,f7V,o6V,gg)){cLW.wxVkey=1
}
var hMW=_v()
_(cAW,hMW)
if(_oz(z,17,f7V,o6V,gg)){hMW.wxVkey=1
}
var oNW=_v()
_(cAW,oNW)
if(_oz(z,18,f7V,o6V,gg)){oNW.wxVkey=1
}
var cOW=_v()
_(cAW,cOW)
if(_oz(z,19,f7V,o6V,gg)){cOW.wxVkey=1
}
var oPW=_v()
_(cAW,oPW)
if(_oz(z,20,f7V,o6V,gg)){oPW.wxVkey=1
}
var lQW=_v()
_(cAW,lQW)
if(_oz(z,21,f7V,o6V,gg)){lQW.wxVkey=1
}
var aRW=_v()
_(cAW,aRW)
if(_oz(z,22,f7V,o6V,gg)){aRW.wxVkey=1
}
var tSW=_v()
_(cAW,tSW)
if(_oz(z,23,f7V,o6V,gg)){tSW.wxVkey=1
}
oBW.wxXCkey=1
lCW.wxXCkey=1
aDW.wxXCkey=1
tEW.wxXCkey=1
eFW.wxXCkey=1
bGW.wxXCkey=1
oHW.wxXCkey=1
xIW.wxXCkey=1
oJW.wxXCkey=1
fKW.wxXCkey=1
cLW.wxXCkey=1
hMW.wxXCkey=1
oNW.wxXCkey=1
cOW.wxXCkey=1
oPW.wxXCkey=1
lQW.wxXCkey=1
aRW.wxXCkey=1
tSW.wxXCkey=1
_(o0V,cAW)
}
o0V.wxXCkey=1
return c8V
}
o4V.wxXCkey=2
_2z(z,0,x5V,e,s,gg,o4V,'item','index','key')
var e2V=_v()
_(r,e2V)
if(_oz(z,24,e,s,gg)){e2V.wxVkey=1
}
var b3V=_v()
_(r,b3V)
if(_oz(z,25,e,s,gg)){b3V.wxVkey=1
var eTW=_mz(z,'component-timeLine',['bind:closeTk',26,'refundId',1,'refundTitle',2],[],e,s,gg)
_(b3V,eTW)
}
e2V.wxXCkey=1
b3V.wxXCkey=1
b3V.wxXCkey=3
return r
}
e_[x[43]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var oVW=_n('view')
_rz(z,oVW,'class',0,e,s,gg)
var xWW=_v()
_(oVW,xWW)
if(_oz(z,1,e,s,gg)){xWW.wxVkey=1
}
var oXW=_v()
_(oVW,oXW)
if(_oz(z,2,e,s,gg)){oXW.wxVkey=1
}
var fYW=_v()
_(oVW,fYW)
if(_oz(z,3,e,s,gg)){fYW.wxVkey=1
var cZW=_mz(z,'component-timeLine',['bind:closeTk',4,'refundId',1,'refundTitle',2],[],e,s,gg)
_(fYW,cZW)
}
xWW.wxXCkey=1
oXW.wxXCkey=1
fYW.wxXCkey=1
fYW.wxXCkey=3
_(r,oVW)
return r
}
e_[x[44]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var o2W=_v()
_(r,o2W)
if(_oz(z,0,e,s,gg)){o2W.wxVkey=1
}
o2W.wxXCkey=1
return r
}
e_[x[45]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var a6W=_n('view')
_rz(z,a6W,'class',0,e,s,gg)
var t7W=_v()
_(a6W,t7W)
if(_oz(z,1,e,s,gg)){t7W.wxVkey=1
}
var e8W=_v()
_(a6W,e8W)
if(_oz(z,2,e,s,gg)){e8W.wxVkey=1
}
t7W.wxXCkey=1
e8W.wxXCkey=1
_(r,a6W)
var b9W=_n('view')
_rz(z,b9W,'class',3,e,s,gg)
var o0W=_v()
_(b9W,o0W)
if(_oz(z,4,e,s,gg)){o0W.wxVkey=1
}
var xAX=_v()
_(b9W,xAX)
if(_oz(z,5,e,s,gg)){xAX.wxVkey=1
}
o0W.wxXCkey=1
xAX.wxXCkey=1
_(r,b9W)
var o4W=_v()
_(r,o4W)
if(_oz(z,6,e,s,gg)){o4W.wxVkey=1
}
var l5W=_v()
_(r,l5W)
if(_oz(z,7,e,s,gg)){l5W.wxVkey=1
var oBX=_mz(z,'component-timeLine',['bind:closeTk',8,'refundId',1,'refundTitle',2],[],e,s,gg)
_(l5W,oBX)
}
var fCX=_mz(z,'component-alertview',['bind:chkOrder0',11,'bind:chkOrder1',1,'carname',2,'displayy',3,'titlename',4],[],e,s,gg)
_(r,fCX)
o4W.wxXCkey=1
l5W.wxXCkey=1
l5W.wxXCkey=3
return r
}
e_[x[46]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
var oHX=_v()
_(r,oHX)
var lIX=function(tKX,aJX,eLX,gg){
var oNX=_v()
_(eLX,oNX)
if(_oz(z,2,tKX,aJX,gg)){oNX.wxVkey=1
}
oNX.wxXCkey=1
return eLX
}
oHX.wxXCkey=2
_2z(z,0,lIX,e,s,gg,oHX,'item','index','key')
var hEX=_v()
_(r,hEX)
if(_oz(z,3,e,s,gg)){hEX.wxVkey=1
}
var oFX=_v()
_(r,oFX)
if(_oz(z,4,e,s,gg)){oFX.wxVkey=1
}
var cGX=_v()
_(r,cGX)
if(_oz(z,5,e,s,gg)){cGX.wxVkey=1
var xOX=_mz(z,'component-timeLine',['bind:closeTk',6,'refundId',1,'refundTitle',2],[],e,s,gg)
_(cGX,xOX)
}
hEX.wxXCkey=1
oFX.wxXCkey=1
cGX.wxXCkey=1
cGX.wxXCkey=3
return r
}
e_[x[47]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
var fQX=_v()
_(r,fQX)
if(_oz(z,0,e,s,gg)){fQX.wxVkey=1
}
var eZX=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var b1X=_v()
_(eZX,b1X)
if(_oz(z,3,e,s,gg)){b1X.wxVkey=1
}
b1X.wxXCkey=1
_(r,eZX)
var o2X=_n('view')
_rz(z,o2X,'class',4,e,s,gg)
var x3X=_v()
_(o2X,x3X)
if(_oz(z,5,e,s,gg)){x3X.wxVkey=1
}
var o4X=_v()
_(o2X,o4X)
if(_oz(z,6,e,s,gg)){o4X.wxVkey=1
}
var f5X=_v()
_(o2X,f5X)
if(_oz(z,7,e,s,gg)){f5X.wxVkey=1
}
var c6X=_v()
_(o2X,c6X)
if(_oz(z,8,e,s,gg)){c6X.wxVkey=1
}
var h7X=_v()
_(o2X,h7X)
if(_oz(z,9,e,s,gg)){h7X.wxVkey=1
}
var o8X=_v()
_(o2X,o8X)
if(_oz(z,10,e,s,gg)){o8X.wxVkey=1
}
x3X.wxXCkey=1
o4X.wxXCkey=1
f5X.wxXCkey=1
c6X.wxXCkey=1
h7X.wxXCkey=1
o8X.wxXCkey=1
_(r,o2X)
var cRX=_v()
_(r,cRX)
if(_oz(z,11,e,s,gg)){cRX.wxVkey=1
}
var c9X=_n('view')
_rz(z,c9X,'hidden',12,e,s,gg)
var o0X=_v()
_(c9X,o0X)
if(_oz(z,13,e,s,gg)){o0X.wxVkey=1
}
var lAY=_v()
_(c9X,lAY)
if(_oz(z,14,e,s,gg)){lAY.wxVkey=1
}
o0X.wxXCkey=1
lAY.wxXCkey=1
_(r,c9X)
var hSX=_v()
_(r,hSX)
if(_oz(z,15,e,s,gg)){hSX.wxVkey=1
}
var aBY=_n('view')
_rz(z,aBY,'hidden',16,e,s,gg)
var tCY=_v()
_(aBY,tCY)
if(_oz(z,17,e,s,gg)){tCY.wxVkey=1
}
var eDY=_v()
_(aBY,eDY)
if(_oz(z,18,e,s,gg)){eDY.wxVkey=1
}
var bEY=_v()
_(aBY,bEY)
if(_oz(z,19,e,s,gg)){bEY.wxVkey=1
}
var oFY=_v()
_(aBY,oFY)
if(_oz(z,20,e,s,gg)){oFY.wxVkey=1
}
tCY.wxXCkey=1
eDY.wxXCkey=1
bEY.wxXCkey=1
oFY.wxXCkey=1
_(r,aBY)
var oTX=_v()
_(r,oTX)
if(_oz(z,21,e,s,gg)){oTX.wxVkey=1
}
var cUX=_v()
_(r,cUX)
if(_oz(z,22,e,s,gg)){cUX.wxVkey=1
}
var oVX=_v()
_(r,oVX)
if(_oz(z,23,e,s,gg)){oVX.wxVkey=1
}
var lWX=_v()
_(r,lWX)
if(_oz(z,24,e,s,gg)){lWX.wxVkey=1
}
var aXX=_v()
_(r,aXX)
if(_oz(z,25,e,s,gg)){aXX.wxVkey=1
}
var tYX=_v()
_(r,tYX)
if(_oz(z,26,e,s,gg)){tYX.wxVkey=1
var xGY=_mz(z,'component-timeLine',['bind:closeTk',27,'refundId',1,'refundTitle',2],[],e,s,gg)
_(tYX,xGY)
}
var oHY=_mz(z,'component-alertview',['bind:chkOrder0',30,'carname',1,'displayy',2,'titlename',3],[],e,s,gg)
_(r,oHY)
var fIY=_mz(z,'component-alertview',['carname',34,'displayy',1,'titlename',2],[],e,s,gg)
_(r,fIY)
var cJY=_mz(z,'component-alertview',['bind:chkOrder0',37,'carname',1,'displayy',2,'titlename',3],[],e,s,gg)
_(r,cJY)
var hKY=_mz(z,'component-alertview',['bind:chkOrder0',41,'carname',1,'displayy',2,'titlename',3],[],e,s,gg)
_(r,hKY)
var oLY=_mz(z,'component-alertview',['bind:chkOrder0',45,'carname',1,'displayy',2,'titlename',3],[],e,s,gg)
_(r,oLY)
var cMY=_mz(z,'component-alertview',['cancel',49,'carname',1,'display_alone1',2,'titlename',3],[],e,s,gg)
_(r,cMY)
fQX.wxXCkey=1
cRX.wxXCkey=1
hSX.wxXCkey=1
oTX.wxXCkey=1
cUX.wxXCkey=1
oVX.wxXCkey=1
lWX.wxXCkey=1
aXX.wxXCkey=1
tYX.wxXCkey=1
tYX.wxXCkey=3
return r
}
e_[x[48]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
var tQY=_v()
_(r,tQY)
var eRY=function(oTY,bSY,xUY,gg){
var fWY=_n('view')
var cXY=_v()
_(fWY,cXY)
if(_oz(z,2,oTY,bSY,gg)){cXY.wxVkey=1
}
var hYY=_v()
_(fWY,hYY)
if(_oz(z,3,oTY,bSY,gg)){hYY.wxVkey=1
var oZY=_n('view')
_rz(z,oZY,'class',4,oTY,bSY,gg)
var c1Y=_v()
_(oZY,c1Y)
if(_oz(z,5,oTY,bSY,gg)){c1Y.wxVkey=1
}
var o2Y=_v()
_(oZY,o2Y)
if(_oz(z,6,oTY,bSY,gg)){o2Y.wxVkey=1
}
var l3Y=_v()
_(oZY,l3Y)
if(_oz(z,7,oTY,bSY,gg)){l3Y.wxVkey=1
}
var a4Y=_v()
_(oZY,a4Y)
if(_oz(z,8,oTY,bSY,gg)){a4Y.wxVkey=1
}
var t5Y=_v()
_(oZY,t5Y)
if(_oz(z,9,oTY,bSY,gg)){t5Y.wxVkey=1
}
var e6Y=_v()
_(oZY,e6Y)
if(_oz(z,10,oTY,bSY,gg)){e6Y.wxVkey=1
}
var b7Y=_v()
_(oZY,b7Y)
if(_oz(z,11,oTY,bSY,gg)){b7Y.wxVkey=1
}
var o8Y=_v()
_(oZY,o8Y)
if(_oz(z,12,oTY,bSY,gg)){o8Y.wxVkey=1
}
var x9Y=_v()
_(oZY,x9Y)
if(_oz(z,13,oTY,bSY,gg)){x9Y.wxVkey=1
}
var o0Y=_v()
_(oZY,o0Y)
if(_oz(z,14,oTY,bSY,gg)){o0Y.wxVkey=1
}
var fAZ=_v()
_(oZY,fAZ)
if(_oz(z,15,oTY,bSY,gg)){fAZ.wxVkey=1
}
var cBZ=_v()
_(oZY,cBZ)
if(_oz(z,16,oTY,bSY,gg)){cBZ.wxVkey=1
}
var hCZ=_v()
_(oZY,hCZ)
if(_oz(z,17,oTY,bSY,gg)){hCZ.wxVkey=1
}
var oDZ=_v()
_(oZY,oDZ)
if(_oz(z,18,oTY,bSY,gg)){oDZ.wxVkey=1
}
var cEZ=_v()
_(oZY,cEZ)
if(_oz(z,19,oTY,bSY,gg)){cEZ.wxVkey=1
}
var oFZ=_v()
_(oZY,oFZ)
if(_oz(z,20,oTY,bSY,gg)){oFZ.wxVkey=1
}
var lGZ=_v()
_(oZY,lGZ)
if(_oz(z,21,oTY,bSY,gg)){lGZ.wxVkey=1
}
var aHZ=_v()
_(oZY,aHZ)
if(_oz(z,22,oTY,bSY,gg)){aHZ.wxVkey=1
}
var tIZ=_v()
_(oZY,tIZ)
if(_oz(z,23,oTY,bSY,gg)){tIZ.wxVkey=1
}
var eJZ=_v()
_(oZY,eJZ)
if(_oz(z,24,oTY,bSY,gg)){eJZ.wxVkey=1
}
var bKZ=_v()
_(oZY,bKZ)
if(_oz(z,25,oTY,bSY,gg)){bKZ.wxVkey=1
}
var oLZ=_v()
_(oZY,oLZ)
if(_oz(z,26,oTY,bSY,gg)){oLZ.wxVkey=1
}
var xMZ=_v()
_(oZY,xMZ)
if(_oz(z,27,oTY,bSY,gg)){xMZ.wxVkey=1
}
var oNZ=_v()
_(oZY,oNZ)
if(_oz(z,28,oTY,bSY,gg)){oNZ.wxVkey=1
}
var fOZ=_v()
_(oZY,fOZ)
if(_oz(z,29,oTY,bSY,gg)){fOZ.wxVkey=1
}
var cPZ=_v()
_(oZY,cPZ)
if(_oz(z,30,oTY,bSY,gg)){cPZ.wxVkey=1
}
var hQZ=_v()
_(oZY,hQZ)
if(_oz(z,31,oTY,bSY,gg)){hQZ.wxVkey=1
}
var oRZ=_v()
_(oZY,oRZ)
if(_oz(z,32,oTY,bSY,gg)){oRZ.wxVkey=1
}
var cSZ=_v()
_(oZY,cSZ)
if(_oz(z,33,oTY,bSY,gg)){cSZ.wxVkey=1
}
var oTZ=_v()
_(oZY,oTZ)
if(_oz(z,34,oTY,bSY,gg)){oTZ.wxVkey=1
}
var lUZ=_v()
_(oZY,lUZ)
if(_oz(z,35,oTY,bSY,gg)){lUZ.wxVkey=1
var x1Z=_v()
_(lUZ,x1Z)
if(_oz(z,36,oTY,bSY,gg)){x1Z.wxVkey=1
}
x1Z.wxXCkey=1
}
var aVZ=_v()
_(oZY,aVZ)
if(_oz(z,37,oTY,bSY,gg)){aVZ.wxVkey=1
}
var tWZ=_v()
_(oZY,tWZ)
if(_oz(z,38,oTY,bSY,gg)){tWZ.wxVkey=1
}
var eXZ=_v()
_(oZY,eXZ)
if(_oz(z,39,oTY,bSY,gg)){eXZ.wxVkey=1
var o2Z=_v()
_(eXZ,o2Z)
if(_oz(z,40,oTY,bSY,gg)){o2Z.wxVkey=1
}
o2Z.wxXCkey=1
}
var bYZ=_v()
_(oZY,bYZ)
if(_oz(z,41,oTY,bSY,gg)){bYZ.wxVkey=1
}
var oZZ=_v()
_(oZY,oZZ)
if(_oz(z,42,oTY,bSY,gg)){oZZ.wxVkey=1
}
var f3Z=_n('view')
_rz(z,f3Z,'class',43,oTY,bSY,gg)
var c4Z=_v()
_(f3Z,c4Z)
if(_oz(z,44,oTY,bSY,gg)){c4Z.wxVkey=1
var o8Z=_n('view')
_rz(z,o8Z,'style',45,oTY,bSY,gg)
var l9Z=_v()
_(o8Z,l9Z)
if(_oz(z,46,oTY,bSY,gg)){l9Z.wxVkey=1
}
var a0Z=_mz(z,'view',['class',47,'style',1],[],oTY,bSY,gg)
var tA1=_v()
_(a0Z,tA1)
if(_oz(z,49,oTY,bSY,gg)){tA1.wxVkey=1
}
var eB1=_v()
_(a0Z,eB1)
if(_oz(z,50,oTY,bSY,gg)){eB1.wxVkey=1
}
tA1.wxXCkey=1
eB1.wxXCkey=1
_(o8Z,a0Z)
var bC1=_mz(z,'view',['class',51,'style',1],[],oTY,bSY,gg)
var oD1=_v()
_(bC1,oD1)
if(_oz(z,53,oTY,bSY,gg)){oD1.wxVkey=1
}
var xE1=_v()
_(bC1,xE1)
if(_oz(z,54,oTY,bSY,gg)){xE1.wxVkey=1
}
oD1.wxXCkey=1
xE1.wxXCkey=1
_(o8Z,bC1)
l9Z.wxXCkey=1
_(c4Z,o8Z)
}
var h5Z=_v()
_(f3Z,h5Z)
if(_oz(z,55,oTY,bSY,gg)){h5Z.wxVkey=1
}
var o6Z=_v()
_(f3Z,o6Z)
if(_oz(z,56,oTY,bSY,gg)){o6Z.wxVkey=1
}
var c7Z=_v()
_(f3Z,c7Z)
if(_oz(z,57,oTY,bSY,gg)){c7Z.wxVkey=1
}
c4Z.wxXCkey=1
h5Z.wxXCkey=1
o6Z.wxXCkey=1
c7Z.wxXCkey=1
_(oZY,f3Z)
c1Y.wxXCkey=1
o2Y.wxXCkey=1
l3Y.wxXCkey=1
a4Y.wxXCkey=1
t5Y.wxXCkey=1
e6Y.wxXCkey=1
b7Y.wxXCkey=1
o8Y.wxXCkey=1
x9Y.wxXCkey=1
o0Y.wxXCkey=1
fAZ.wxXCkey=1
cBZ.wxXCkey=1
hCZ.wxXCkey=1
oDZ.wxXCkey=1
cEZ.wxXCkey=1
oFZ.wxXCkey=1
lGZ.wxXCkey=1
aHZ.wxXCkey=1
tIZ.wxXCkey=1
eJZ.wxXCkey=1
bKZ.wxXCkey=1
oLZ.wxXCkey=1
xMZ.wxXCkey=1
oNZ.wxXCkey=1
fOZ.wxXCkey=1
cPZ.wxXCkey=1
hQZ.wxXCkey=1
oRZ.wxXCkey=1
cSZ.wxXCkey=1
oTZ.wxXCkey=1
lUZ.wxXCkey=1
aVZ.wxXCkey=1
tWZ.wxXCkey=1
eXZ.wxXCkey=1
bYZ.wxXCkey=1
oZZ.wxXCkey=1
_(hYY,oZY)
}
cXY.wxXCkey=1
hYY.wxXCkey=1
_(xUY,fWY)
return xUY
}
tQY.wxXCkey=2
_2z(z,0,eRY,e,s,gg,tQY,'item','index','key')
var lOY=_v()
_(r,lOY)
if(_oz(z,58,e,s,gg)){lOY.wxVkey=1
}
var aPY=_v()
_(r,aPY)
if(_oz(z,59,e,s,gg)){aPY.wxVkey=1
var oF1=_mz(z,'component-timeLine',['bind:closeTk',60,'refundId',1,'refundTitle',2],[],e,s,gg)
_(aPY,oF1)
}
lOY.wxXCkey=1
aPY.wxXCkey=1
aPY.wxXCkey=3
return r
}
e_[x[49]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
var cH1=_v()
_(r,cH1)
if(_oz(z,0,e,s,gg)){cH1.wxVkey=1
}
var hI1=_v()
_(r,hI1)
if(_oz(z,1,e,s,gg)){hI1.wxVkey=1
}
cH1.wxXCkey=1
hI1.wxXCkey=1
return r
}
e_[x[50]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
return r
}
e_[x[51]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[52]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx_52()
var lM1=_v()
_(r,lM1)
var aN1=function(eP1,tO1,bQ1,gg){
var xS1=_mz(z,'view',['bindtap',2,'class',1,'data-id',2,'data-store-info',3,'data-store-info-delivery-price',4,'data-store-name',5,'data-storeuid',6],[],eP1,tO1,gg)
var oT1=_n('view')
var fU1=_v()
_(oT1,fU1)
if(_oz(z,9,eP1,tO1,gg)){fU1.wxVkey=1
}
var cV1=_v()
_(oT1,cV1)
if(_oz(z,10,eP1,tO1,gg)){cV1.wxVkey=1
}
var hW1=_v()
_(oT1,hW1)
if(_oz(z,11,eP1,tO1,gg)){hW1.wxVkey=1
}
fU1.wxXCkey=1
cV1.wxXCkey=1
hW1.wxXCkey=1
_(xS1,oT1)
_(bQ1,xS1)
return bQ1
}
lM1.wxXCkey=2
_2z(z,0,aN1,e,s,gg,lM1,'item','index','id')
var oL1=_v()
_(r,oL1)
if(_oz(z,12,e,s,gg)){oL1.wxVkey=1
var oX1=_v()
_(oL1,oX1)
if(_oz(z,13,e,s,gg)){oX1.wxVkey=1
}
oX1.wxXCkey=1
}
oL1.wxXCkey=1
return r
}
e_[x[52]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[53]]={}
d_[x[53]]["wxParseVideo"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':wxParseVideo'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[53]]["wxParseImg"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':wxParseImg'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[53]]["WxEmojiView"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':WxEmojiView'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[53]]["WxParseBr"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':WxParseBr'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[53]]["wxParse"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':wxParse'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
var cI=_oz(z,8,fE,oD,gg)
var oJ=_gd(x[53],cI,e_,d_)
if(oJ){
var lK=_1z(z,7,fE,oD,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[53],43,18)
return cF
}
oB.wxXCkey=2
_2z(z,5,xC,e,s,gg,oB,'item','index','')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[53]]["wxParse0"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':wxParse0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,10,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,11,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,16,hG,cF,gg)
var aL=_gd(x[53],lK,e_,d_)
if(aL){
var tM=_1z(z,15,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[53],56,24)
return oH
}
oD.wxXCkey=2
_2z(z,13,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,17,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,22,xQ,oP,gg)
var oV=_gd(x[53],hU,e_,d_)
if(oV){
var cW=_1z(z,21,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[53],69,28)
return oR
}
eN.wxXCkey=2
_2z(z,19,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,23,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,25,e,s,gg)
var aZ=_gd(x[53],lY,e_,d_)
if(aZ){
var t1=_1z(z,24,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[53],78,20)
}
else if(_oz(z,26,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,28,e,s,gg)
var o4=_gd(x[53],b3,e_,d_)
if(o4){
var x5=_1z(z,27,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[53],83,20)
}
else if(_oz(z,29,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',30,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,38,o0,h9,gg)
var tEB=_gd(x[53],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,37,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[53],90,24)
return cAB
}
f7.wxXCkey=2
_2z(z,35,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,39,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_oz(z,44,oJB,xIB,gg)
var cOB=_gd(x[53],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,43,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[53],97,24)
return fKB
}
bGB.wxXCkey=2
_2z(z,41,oHB,e,s,gg,bGB,'item','index','')
}
else if(_oz(z,45,e,s,gg)){xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=_oz(z,46,e,s,gg)
var tSB=_gd(x[53],aRB,e_,d_)
if(tSB){
var eTB={}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[53],103,20)
}
else if(_oz(z,47,e,s,gg)){xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,52,oXB,xWB,gg)
var c3B=_gd(x[53],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,51,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[53],109,24)
return fYB
}
bUB.wxXCkey=2
_2z(z,49,oVB,e,s,gg,bUB,'item','index','')
}
else{xC.wxVkey=9
var l5B=_v()
_(xC,l5B)
var a6B=function(e8B,t7B,b9B,gg){
var xAC=_v()
_(b9B,xAC)
var oBC=_oz(z,57,e8B,t7B,gg)
var fCC=_gd(x[53],oBC,e_,d_)
if(fCC){
var cDC=_1z(z,56,e8B,t7B,gg) || {}
var cur_globalf=gg.f
xAC.wxXCkey=3
fCC(cDC,cDC,xAC,gg)
gg.f=cur_globalf
}
else _w(oBC,x[53],117,22)
return b9B
}
l5B.wxXCkey=2
_2z(z,54,a6B,e,s,gg,l5B,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,58,e,s,gg)){oB.wxVkey=2
var hEC=_v()
_(oB,hEC)
var oFC=_oz(z,60,e,s,gg)
var cGC=_gd(x[53],oFC,e_,d_)
if(cGC){
var oHC=_1z(z,59,e,s,gg) || {}
var cur_globalf=gg.f
hEC.wxXCkey=3
cGC(oHC,oHC,hEC,gg)
gg.f=cur_globalf
}
else _w(oFC,x[53],126,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[53]]["wxParse1"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':wxParse1'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,62,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,63,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,68,hG,cF,gg)
var aL=_gd(x[53],lK,e_,d_)
if(aL){
var tM=_1z(z,67,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[53],141,24)
return oH
}
oD.wxXCkey=2
_2z(z,65,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,69,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,74,xQ,oP,gg)
var oV=_gd(x[53],hU,e_,d_)
if(oV){
var cW=_1z(z,73,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[53],154,28)
return oR
}
eN.wxXCkey=2
_2z(z,71,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,75,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,77,e,s,gg)
var aZ=_gd(x[53],lY,e_,d_)
if(aZ){
var t1=_1z(z,76,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[53],163,20)
}
else if(_oz(z,78,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,80,e,s,gg)
var o4=_gd(x[53],b3,e_,d_)
if(o4){
var x5=_1z(z,79,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[53],168,20)
}
else if(_oz(z,81,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',82,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,90,o0,h9,gg)
var tEB=_gd(x[53],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,89,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[53],175,24)
return cAB
}
f7.wxXCkey=2
_2z(z,87,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,91,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,92,e,s,gg)
var xIB=_gd(x[53],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[53],181,20)
}
else if(_oz(z,93,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,98,oNB,hMB,gg)
var tSB=_gd(x[53],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,97,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[53],187,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,95,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,103,oXB,xWB,gg)
var c3B=_gd(x[53],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,102,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[53],195,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,100,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,104,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,106,e,s,gg)
var t7B=_gd(x[53],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,105,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[53],204,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[53]]["wxParse2"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':wxParse2'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,108,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,109,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,114,hG,cF,gg)
var aL=_gd(x[53],lK,e_,d_)
if(aL){
var tM=_1z(z,113,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[53],218,24)
return oH
}
oD.wxXCkey=2
_2z(z,111,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,115,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,120,xQ,oP,gg)
var oV=_gd(x[53],hU,e_,d_)
if(oV){
var cW=_1z(z,119,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[53],231,28)
return oR
}
eN.wxXCkey=2
_2z(z,117,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,121,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,123,e,s,gg)
var aZ=_gd(x[53],lY,e_,d_)
if(aZ){
var t1=_1z(z,122,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[53],240,20)
}
else if(_oz(z,124,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,126,e,s,gg)
var o4=_gd(x[53],b3,e_,d_)
if(o4){
var x5=_1z(z,125,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[53],245,20)
}
else if(_oz(z,127,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',128,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,136,o0,h9,gg)
var tEB=_gd(x[53],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,135,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[53],252,24)
return cAB
}
f7.wxXCkey=2
_2z(z,133,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,137,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,138,e,s,gg)
var xIB=_gd(x[53],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[53],258,20)
}
else if(_oz(z,139,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,144,oNB,hMB,gg)
var tSB=_gd(x[53],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,143,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[53],264,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,141,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,149,oXB,xWB,gg)
var c3B=_gd(x[53],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,148,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[53],272,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,146,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,150,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,152,e,s,gg)
var t7B=_gd(x[53],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,151,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[53],281,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[53]]["wxParse3"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':wxParse3'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,154,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,155,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,160,hG,cF,gg)
var aL=_gd(x[53],lK,e_,d_)
if(aL){
var tM=_1z(z,159,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[53],294,24)
return oH
}
oD.wxXCkey=2
_2z(z,157,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,161,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,166,xQ,oP,gg)
var oV=_gd(x[53],hU,e_,d_)
if(oV){
var cW=_1z(z,165,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[53],307,28)
return oR
}
eN.wxXCkey=2
_2z(z,163,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,167,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,169,e,s,gg)
var aZ=_gd(x[53],lY,e_,d_)
if(aZ){
var t1=_1z(z,168,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[53],316,20)
}
else if(_oz(z,170,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,172,e,s,gg)
var o4=_gd(x[53],b3,e_,d_)
if(o4){
var x5=_1z(z,171,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[53],321,20)
}
else if(_oz(z,173,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',174,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,182,o0,h9,gg)
var tEB=_gd(x[53],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,181,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[53],328,24)
return cAB
}
f7.wxXCkey=2
_2z(z,179,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,183,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,184,e,s,gg)
var xIB=_gd(x[53],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[53],334,20)
}
else if(_oz(z,185,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,190,oNB,hMB,gg)
var tSB=_gd(x[53],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,189,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[53],340,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,187,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,195,oXB,xWB,gg)
var c3B=_gd(x[53],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,194,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[53],348,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,192,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,196,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,198,e,s,gg)
var t7B=_gd(x[53],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,197,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[53],357,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[53]]["wxParse4"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':wxParse4'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,200,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,201,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,206,hG,cF,gg)
var aL=_gd(x[53],lK,e_,d_)
if(aL){
var tM=_1z(z,205,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[53],370,24)
return oH
}
oD.wxXCkey=2
_2z(z,203,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,207,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,212,xQ,oP,gg)
var oV=_gd(x[53],hU,e_,d_)
if(oV){
var cW=_1z(z,211,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[53],383,28)
return oR
}
eN.wxXCkey=2
_2z(z,209,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,213,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,215,e,s,gg)
var aZ=_gd(x[53],lY,e_,d_)
if(aZ){
var t1=_1z(z,214,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[53],392,20)
}
else if(_oz(z,216,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,218,e,s,gg)
var o4=_gd(x[53],b3,e_,d_)
if(o4){
var x5=_1z(z,217,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[53],397,20)
}
else if(_oz(z,219,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',220,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,228,o0,h9,gg)
var tEB=_gd(x[53],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,227,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[53],404,24)
return cAB
}
f7.wxXCkey=2
_2z(z,225,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,229,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,230,e,s,gg)
var xIB=_gd(x[53],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[53],410,20)
}
else if(_oz(z,231,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,236,oNB,hMB,gg)
var tSB=_gd(x[53],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,235,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[53],416,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,233,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,241,oXB,xWB,gg)
var c3B=_gd(x[53],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,240,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[53],424,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,238,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,242,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,244,e,s,gg)
var t7B=_gd(x[53],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,243,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[53],433,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[53]]["wxParse5"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':wxParse5'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,246,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,247,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,252,hG,cF,gg)
var aL=_gd(x[53],lK,e_,d_)
if(aL){
var tM=_1z(z,251,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[53],446,24)
return oH
}
oD.wxXCkey=2
_2z(z,249,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,253,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,258,xQ,oP,gg)
var oV=_gd(x[53],hU,e_,d_)
if(oV){
var cW=_1z(z,257,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[53],459,28)
return oR
}
eN.wxXCkey=2
_2z(z,255,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,259,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,261,e,s,gg)
var aZ=_gd(x[53],lY,e_,d_)
if(aZ){
var t1=_1z(z,260,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[53],468,20)
}
else if(_oz(z,262,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,264,e,s,gg)
var o4=_gd(x[53],b3,e_,d_)
if(o4){
var x5=_1z(z,263,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[53],473,20)
}
else if(_oz(z,265,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',266,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,274,o0,h9,gg)
var tEB=_gd(x[53],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,273,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[53],480,24)
return cAB
}
f7.wxXCkey=2
_2z(z,271,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,275,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,276,e,s,gg)
var xIB=_gd(x[53],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[53],486,20)
}
else if(_oz(z,277,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,282,oNB,hMB,gg)
var tSB=_gd(x[53],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,281,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[53],492,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,279,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,287,oXB,xWB,gg)
var c3B=_gd(x[53],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,286,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[53],500,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,284,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,288,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,290,e,s,gg)
var t7B=_gd(x[53],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,289,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[53],509,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[53]]["wxParse6"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':wxParse6'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,292,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,293,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,298,hG,cF,gg)
var aL=_gd(x[53],lK,e_,d_)
if(aL){
var tM=_1z(z,297,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[53],522,24)
return oH
}
oD.wxXCkey=2
_2z(z,295,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,299,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,304,xQ,oP,gg)
var oV=_gd(x[53],hU,e_,d_)
if(oV){
var cW=_1z(z,303,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[53],535,28)
return oR
}
eN.wxXCkey=2
_2z(z,301,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,305,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,307,e,s,gg)
var aZ=_gd(x[53],lY,e_,d_)
if(aZ){
var t1=_1z(z,306,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[53],544,20)
}
else if(_oz(z,308,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,310,e,s,gg)
var o4=_gd(x[53],b3,e_,d_)
if(o4){
var x5=_1z(z,309,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[53],549,20)
}
else if(_oz(z,311,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',312,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,320,o0,h9,gg)
var tEB=_gd(x[53],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,319,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[53],556,24)
return cAB
}
f7.wxXCkey=2
_2z(z,317,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,321,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,322,e,s,gg)
var xIB=_gd(x[53],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[53],562,20)
}
else if(_oz(z,323,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,328,oNB,hMB,gg)
var tSB=_gd(x[53],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,327,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[53],568,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,325,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,333,oXB,xWB,gg)
var c3B=_gd(x[53],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,332,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[53],576,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,330,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,334,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,336,e,s,gg)
var t7B=_gd(x[53],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,335,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[53],585,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[53]]["wxParse7"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':wxParse7'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,338,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,339,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,344,hG,cF,gg)
var aL=_gd(x[53],lK,e_,d_)
if(aL){
var tM=_1z(z,343,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[53],597,24)
return oH
}
oD.wxXCkey=2
_2z(z,341,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,345,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,350,xQ,oP,gg)
var oV=_gd(x[53],hU,e_,d_)
if(oV){
var cW=_1z(z,349,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[53],610,28)
return oR
}
eN.wxXCkey=2
_2z(z,347,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,351,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,353,e,s,gg)
var aZ=_gd(x[53],lY,e_,d_)
if(aZ){
var t1=_1z(z,352,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[53],619,20)
}
else if(_oz(z,354,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,356,e,s,gg)
var o4=_gd(x[53],b3,e_,d_)
if(o4){
var x5=_1z(z,355,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[53],624,20)
}
else if(_oz(z,357,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',358,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,366,o0,h9,gg)
var tEB=_gd(x[53],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,365,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[53],631,24)
return cAB
}
f7.wxXCkey=2
_2z(z,363,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,367,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,368,e,s,gg)
var xIB=_gd(x[53],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[53],637,20)
}
else if(_oz(z,369,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,374,oNB,hMB,gg)
var tSB=_gd(x[53],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,373,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[53],643,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,371,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,379,oXB,xWB,gg)
var c3B=_gd(x[53],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,378,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[53],651,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,376,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,380,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,382,e,s,gg)
var t7B=_gd(x[53],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,381,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[53],660,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[53]]["wxParse8"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':wxParse8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,384,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,385,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,390,hG,cF,gg)
var aL=_gd(x[53],lK,e_,d_)
if(aL){
var tM=_1z(z,389,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[53],673,24)
return oH
}
oD.wxXCkey=2
_2z(z,387,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,391,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,396,xQ,oP,gg)
var oV=_gd(x[53],hU,e_,d_)
if(oV){
var cW=_1z(z,395,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[53],686,28)
return oR
}
eN.wxXCkey=2
_2z(z,393,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,397,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,399,e,s,gg)
var aZ=_gd(x[53],lY,e_,d_)
if(aZ){
var t1=_1z(z,398,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[53],695,20)
}
else if(_oz(z,400,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,402,e,s,gg)
var o4=_gd(x[53],b3,e_,d_)
if(o4){
var x5=_1z(z,401,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[53],700,20)
}
else if(_oz(z,403,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',404,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,412,o0,h9,gg)
var tEB=_gd(x[53],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,411,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[53],707,24)
return cAB
}
f7.wxXCkey=2
_2z(z,409,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,413,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,414,e,s,gg)
var xIB=_gd(x[53],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[53],713,20)
}
else if(_oz(z,415,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,420,oNB,hMB,gg)
var tSB=_gd(x[53],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,419,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[53],719,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,417,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,425,oXB,xWB,gg)
var c3B=_gd(x[53],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,424,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[53],727,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,422,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,426,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,428,e,s,gg)
var t7B=_gd(x[53],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,427,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[53],736,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[53]]["wxParse9"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':wxParse9'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,430,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,431,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,436,hG,cF,gg)
var aL=_gd(x[53],lK,e_,d_)
if(aL){
var tM=_1z(z,435,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[53],749,24)
return oH
}
oD.wxXCkey=2
_2z(z,433,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,437,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,442,xQ,oP,gg)
var oV=_gd(x[53],hU,e_,d_)
if(oV){
var cW=_1z(z,441,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[53],762,28)
return oR
}
eN.wxXCkey=2
_2z(z,439,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,443,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,445,e,s,gg)
var aZ=_gd(x[53],lY,e_,d_)
if(aZ){
var t1=_1z(z,444,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[53],771,20)
}
else if(_oz(z,446,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,448,e,s,gg)
var o4=_gd(x[53],b3,e_,d_)
if(o4){
var x5=_1z(z,447,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[53],776,20)
}
else if(_oz(z,449,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',450,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,458,o0,h9,gg)
var tEB=_gd(x[53],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,457,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[53],783,24)
return cAB
}
f7.wxXCkey=2
_2z(z,455,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,459,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,460,e,s,gg)
var xIB=_gd(x[53],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[53],789,20)
}
else if(_oz(z,461,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,466,oNB,hMB,gg)
var tSB=_gd(x[53],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,465,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[53],795,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,463,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,471,oXB,xWB,gg)
var c3B=_gd(x[53],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,470,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[53],803,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,468,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,472,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,474,e,s,gg)
var t7B=_gd(x[53],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,473,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[53],812,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[53]]["wxParse10"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':wxParse10'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,476,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,477,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,482,hG,cF,gg)
var aL=_gd(x[53],lK,e_,d_)
if(aL){
var tM=_1z(z,481,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[53],825,24)
return oH
}
oD.wxXCkey=2
_2z(z,479,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,483,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,488,xQ,oP,gg)
var oV=_gd(x[53],hU,e_,d_)
if(oV){
var cW=_1z(z,487,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[53],838,28)
return oR
}
eN.wxXCkey=2
_2z(z,485,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,489,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,491,e,s,gg)
var aZ=_gd(x[53],lY,e_,d_)
if(aZ){
var t1=_1z(z,490,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[53],847,20)
}
else if(_oz(z,492,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,494,e,s,gg)
var o4=_gd(x[53],b3,e_,d_)
if(o4){
var x5=_1z(z,493,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[53],852,20)
}
else if(_oz(z,495,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',496,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,504,o0,h9,gg)
var tEB=_gd(x[53],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,503,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[53],859,24)
return cAB
}
f7.wxXCkey=2
_2z(z,501,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,505,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,506,e,s,gg)
var xIB=_gd(x[53],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[53],865,20)
}
else if(_oz(z,507,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,512,oNB,hMB,gg)
var tSB=_gd(x[53],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,511,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[53],871,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,509,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,517,oXB,xWB,gg)
var c3B=_gd(x[53],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,516,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[53],879,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,514,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,518,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,520,e,s,gg)
var t7B=_gd(x[53],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,519,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[53],888,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[53]]["wxParse11"]=function(e,s,r,gg){
var z=gz$gwx_53()
var b=x[53]+':wxParse11'
r.wxVkey=b
gg.f=$gdc(f_["./pages/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,522,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,523,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,528,hG,cF,gg)
var aL=_gd(x[53],lK,e_,d_)
if(aL){
var tM=_1z(z,527,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[53],901,24)
return oH
}
oD.wxXCkey=2
_2z(z,525,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,529,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,534,xQ,oP,gg)
var oV=_gd(x[53],hU,e_,d_)
if(oV){
var cW=_1z(z,533,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[53],914,28)
return oR
}
eN.wxXCkey=2
_2z(z,531,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,535,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,537,e,s,gg)
var aZ=_gd(x[53],lY,e_,d_)
if(aZ){
var t1=_1z(z,536,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[53],923,20)
}
else if(_oz(z,538,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,540,e,s,gg)
var o4=_gd(x[53],b3,e_,d_)
if(o4){
var x5=_1z(z,539,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[53],928,20)
}
else if(_oz(z,541,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',542,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,550,o0,h9,gg)
var tEB=_gd(x[53],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,549,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[53],935,24)
return cAB
}
f7.wxXCkey=2
_2z(z,547,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,551,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,552,e,s,gg)
var xIB=_gd(x[53],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[53],941,20)
}
else if(_oz(z,553,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,558,oNB,hMB,gg)
var tSB=_gd(x[53],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,557,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[53],947,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,555,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,563,oXB,xWB,gg)
var c3B=_gd(x[53],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,562,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[53],955,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,560,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,564,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,566,e,s,gg)
var t7B=_gd(x[53],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,565,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[53],964,18)
}
oB.wxXCkey=1
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
e_[x[53]]={f:m52,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['pages/active/active.json'] = {"usingComponents":{"component-timeLine":"../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/active/active.wxml'] = [$gwx, './pages/active/active.wxml'];else __wxAppCode__['pages/active/active.wxml'] = $gwx( './pages/active/active.wxml' );
		__wxAppCode__['pages/brand/brand.json'] = {"usingComponents":{"component-timeLine":"../components/timeLine/timeLine","component-alertview":"../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/brand/brand.wxml'] = [$gwx, './pages/brand/brand.wxml'];else __wxAppCode__['pages/brand/brand.wxml'] = $gwx( './pages/brand/brand.wxml' );
		__wxAppCode__['pages/collage/collage.json'] = {"usingComponents":{"component-timeLine":"../components/timeLine/timeLine","component-alertview ":"../components/alertview /alertview "}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/collage/collage.wxml'] = [$gwx, './pages/collage/collage.wxml'];else __wxAppCode__['pages/collage/collage.wxml'] = $gwx( './pages/collage/collage.wxml' );
		__wxAppCode__['pages/components/alertview/alertview.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/alertview/alertview.wxml'] = [$gwx, './pages/components/alertview/alertview.wxml'];else __wxAppCode__['pages/components/alertview/alertview.wxml'] = $gwx( './pages/components/alertview/alertview.wxml' );
		__wxAppCode__['pages/components/timeLine/timeLine.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/timeLine/timeLine.wxml'] = [$gwx, './pages/components/timeLine/timeLine.wxml'];else __wxAppCode__['pages/components/timeLine/timeLine.wxml'] = $gwx( './pages/components/timeLine/timeLine.wxml' );
		__wxAppCode__['pages/index/collect/collect.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine","component-alertview":"../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/collect/collect.wxml'] = [$gwx, './pages/index/collect/collect.wxml'];else __wxAppCode__['pages/index/collect/collect.wxml'] = $gwx( './pages/index/collect/collect.wxml' );
		__wxAppCode__['pages/index/destine/Receipt/Receipt.json'] = {"usingComponents":{"component-timeLine":"../../../components/timeLine/timeLine","component-alertview":"../../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/destine/Receipt/Receipt.wxml'] = [$gwx, './pages/index/destine/Receipt/Receipt.wxml'];else __wxAppCode__['pages/index/destine/Receipt/Receipt.wxml'] = $gwx( './pages/index/destine/Receipt/Receipt.wxml' );
		__wxAppCode__['pages/index/destine/destine.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/destine/destine.wxml'] = [$gwx, './pages/index/destine/destine.wxml'];else __wxAppCode__['pages/index/destine/destine.wxml'] = $gwx( './pages/index/destine/destine.wxml' );
		__wxAppCode__['pages/index/destine/waitReceipt/waitReceipt.json'] = {"usingComponents":{"component-timeLine":"../../../components/timeLine/timeLine","component-alertview":"../../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/destine/waitReceipt/waitReceipt.wxml'] = [$gwx, './pages/index/destine/waitReceipt/waitReceipt.wxml'];else __wxAppCode__['pages/index/destine/waitReceipt/waitReceipt.wxml'] = $gwx( './pages/index/destine/waitReceipt/waitReceipt.wxml' );
		__wxAppCode__['pages/index/fellin/fellin.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/fellin/fellin.wxml'] = [$gwx, './pages/index/fellin/fellin.wxml'];else __wxAppCode__['pages/index/fellin/fellin.wxml'] = $gwx( './pages/index/fellin/fellin.wxml' );
		__wxAppCode__['pages/index/fellin/queuingNumber/queuingNumber.json'] = {"usingComponents":{"component-timeLine":"../../../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/fellin/queuingNumber/queuingNumber.wxml'] = [$gwx, './pages/index/fellin/queuingNumber/queuingNumber.wxml'];else __wxAppCode__['pages/index/fellin/queuingNumber/queuingNumber.wxml'] = $gwx( './pages/index/fellin/queuingNumber/queuingNumber.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"usingComponents":{"component-timeLine":"../components/timeLine/timeLine","component-alertview":"../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/index/order/evalOrder/bohuiOrder/bohuiOrder.json'] = {"usingComponents":{"component-timeLine":"../../../../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/order/evalOrder/bohuiOrder/bohuiOrder.wxml'] = [$gwx, './pages/index/order/evalOrder/bohuiOrder/bohuiOrder.wxml'];else __wxAppCode__['pages/index/order/evalOrder/bohuiOrder/bohuiOrder.wxml'] = $gwx( './pages/index/order/evalOrder/bohuiOrder/bohuiOrder.wxml' );
		__wxAppCode__['pages/index/order/evalOrder/checkOrder/checkOrder.json'] = {"usingComponents":{"component-timeLine":"../../../../components/timeLine/timeLine","component-alertview":"../../../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/order/evalOrder/checkOrder/checkOrder.wxml'] = [$gwx, './pages/index/order/evalOrder/checkOrder/checkOrder.wxml'];else __wxAppCode__['pages/index/order/evalOrder/checkOrder/checkOrder.wxml'] = $gwx( './pages/index/order/evalOrder/checkOrder/checkOrder.wxml' );
		__wxAppCode__['pages/index/order/evalOrder/evalOrder.json'] = {"usingComponents":{"component-timeLine":"../../../components/timeLine/timeLine","component-alertview":"../../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/order/evalOrder/evalOrder.wxml'] = [$gwx, './pages/index/order/evalOrder/evalOrder.wxml'];else __wxAppCode__['pages/index/order/evalOrder/evalOrder.wxml'] = $gwx( './pages/index/order/evalOrder/evalOrder.wxml' );
		__wxAppCode__['pages/index/order/evalOrder/evaluatedOrder/evaluatedOrder.json'] = {"usingComponents":{"component-timeLine":"../../../../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/order/evalOrder/evaluatedOrder/evaluatedOrder.wxml'] = [$gwx, './pages/index/order/evalOrder/evaluatedOrder/evaluatedOrder.wxml'];else __wxAppCode__['pages/index/order/evalOrder/evaluatedOrder/evaluatedOrder.wxml'] = $gwx( './pages/index/order/evalOrder/evaluatedOrder/evaluatedOrder.wxml' );
		__wxAppCode__['pages/index/order/evalOrder/evaluation/evaluation.json'] = {"usingComponents":{"component-timeLine":"../../../../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/order/evalOrder/evaluation/evaluation.wxml'] = [$gwx, './pages/index/order/evalOrder/evaluation/evaluation.wxml'];else __wxAppCode__['pages/index/order/evalOrder/evaluation/evaluation.wxml'] = $gwx( './pages/index/order/evalOrder/evaluation/evaluation.wxml' );
		__wxAppCode__['pages/index/order/evalOrder/paidOrder/paidOrder.json'] = {"usingComponents":{"component-timeLine":"../../../../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/order/evalOrder/paidOrder/paidOrder.wxml'] = [$gwx, './pages/index/order/evalOrder/paidOrder/paidOrder.wxml'];else __wxAppCode__['pages/index/order/evalOrder/paidOrder/paidOrder.wxml'] = $gwx( './pages/index/order/evalOrder/paidOrder/paidOrder.wxml' );
		__wxAppCode__['pages/index/order/evalOrder/selAddr/selAddr.json'] = {"usingComponents":{"component-timeLine":"../../../../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/order/evalOrder/selAddr/selAddr.wxml'] = [$gwx, './pages/index/order/evalOrder/selAddr/selAddr.wxml'];else __wxAppCode__['pages/index/order/evalOrder/selAddr/selAddr.wxml'] = $gwx( './pages/index/order/evalOrder/selAddr/selAddr.wxml' );
		__wxAppCode__['pages/index/order/evalOrder/selCoupon/selCoupon.json'] = {"usingComponents":{"component-timeLine":"../../../../components/timeLine/timeLine","component-alertview":"../../../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/order/evalOrder/selCoupon/selCoupon.wxml'] = [$gwx, './pages/index/order/evalOrder/selCoupon/selCoupon.wxml'];else __wxAppCode__['pages/index/order/evalOrder/selCoupon/selCoupon.wxml'] = $gwx( './pages/index/order/evalOrder/selCoupon/selCoupon.wxml' );
		__wxAppCode__['pages/index/order/evalOrder/submitOrder/submitOrder.json'] = {"usingComponents":{"component-timeLine":"../../../../components/timeLine/timeLine","component-alertview":"../../../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/order/evalOrder/submitOrder/submitOrder.wxml'] = [$gwx, './pages/index/order/evalOrder/submitOrder/submitOrder.wxml'];else __wxAppCode__['pages/index/order/evalOrder/submitOrder/submitOrder.wxml'] = $gwx( './pages/index/order/evalOrder/submitOrder/submitOrder.wxml' );
		__wxAppCode__['pages/index/order/order.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine","component-alertview":"../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/order/order.wxml'] = [$gwx, './pages/index/order/order.wxml'];else __wxAppCode__['pages/index/order/order.wxml'] = $gwx( './pages/index/order/order.wxml' );
		__wxAppCode__['pages/index/takeOut/queryFood/queryFood.json'] = {"usingComponents":{"component-timeLine":"../../../components/timeLine/timeLine","component-alertview":"../../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/takeOut/queryFood/queryFood.wxml'] = [$gwx, './pages/index/takeOut/queryFood/queryFood.wxml'];else __wxAppCode__['pages/index/takeOut/queryFood/queryFood.wxml'] = $gwx( './pages/index/takeOut/queryFood/queryFood.wxml' );
		__wxAppCode__['pages/index/takeOut/queryOrder/queryOrder.json'] = {"usingComponents":{"component-timeLine":"../../../components/timeLine/timeLine","component-alertview":"../../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/takeOut/queryOrder/queryOrder.wxml'] = [$gwx, './pages/index/takeOut/queryOrder/queryOrder.wxml'];else __wxAppCode__['pages/index/takeOut/queryOrder/queryOrder.wxml'] = $gwx( './pages/index/takeOut/queryOrder/queryOrder.wxml' );
		__wxAppCode__['pages/index/takeOut/takeOut.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine","component-alertview":"../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/takeOut/takeOut.wxml'] = [$gwx, './pages/index/takeOut/takeOut.wxml'];else __wxAppCode__['pages/index/takeOut/takeOut.wxml'] = $gwx( './pages/index/takeOut/takeOut.wxml' );
		__wxAppCode__['pages/index/takeOut/takeOutSM.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine","component-alertview":"../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/takeOut/takeOutSM.wxml'] = [$gwx, './pages/index/takeOut/takeOutSM.wxml'];else __wxAppCode__['pages/index/takeOut/takeOutSM.wxml'] = $gwx( './pages/index/takeOut/takeOutSM.wxml' );
		__wxAppCode__['pages/index/wifi/wifi.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine","component-alertview":"../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/wifi/wifi.wxml'] = [$gwx, './pages/index/wifi/wifi.wxml'];else __wxAppCode__['pages/index/wifi/wifi.wxml'] = $gwx( './pages/index/wifi/wifi.wxml' );
		__wxAppCode__['pages/index/wntjDetail/wntjDetail.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/wntjDetail/wntjDetail.wxml'] = [$gwx, './pages/index/wntjDetail/wntjDetail.wxml'];else __wxAppCode__['pages/index/wntjDetail/wntjDetail.wxml'] = $gwx( './pages/index/wntjDetail/wntjDetail.wxml' );
		__wxAppCode__['pages/index/yhtjDetail/yhtjDetail.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/yhtjDetail/yhtjDetail.wxml'] = [$gwx, './pages/index/yhtjDetail/yhtjDetail.wxml'];else __wxAppCode__['pages/index/yhtjDetail/yhtjDetail.wxml'] = $gwx( './pages/index/yhtjDetail/yhtjDetail.wxml' );
		__wxAppCode__['pages/map/map.json'] = {"usingComponents":{"component-timeLine":"../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/map/map.wxml'] = [$gwx, './pages/map/map.wxml'];else __wxAppCode__['pages/map/map.wxml'] = $gwx( './pages/map/map.wxml' );
		__wxAppCode__['pages/user/alterMyCard/alterMyCard.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine","component-alertview":"../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/alterMyCard/alterMyCard.wxml'] = [$gwx, './pages/user/alterMyCard/alterMyCard.wxml'];else __wxAppCode__['pages/user/alterMyCard/alterMyCard.wxml'] = $gwx( './pages/user/alterMyCard/alterMyCard.wxml' );
		__wxAppCode__['pages/user/cardDetail/cardDetail.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine","component-alertview":"../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/cardDetail/cardDetail.wxml'] = [$gwx, './pages/user/cardDetail/cardDetail.wxml'];else __wxAppCode__['pages/user/cardDetail/cardDetail.wxml'] = $gwx( './pages/user/cardDetail/cardDetail.wxml' );
		__wxAppCode__['pages/user/comment/comment.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/comment/comment.wxml'] = [$gwx, './pages/user/comment/comment.wxml'];else __wxAppCode__['pages/user/comment/comment.wxml'] = $gwx( './pages/user/comment/comment.wxml' );
		__wxAppCode__['pages/user/couponsCenter/couponsCenter.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine","component-alertview":"../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/couponsCenter/couponsCenter.wxml'] = [$gwx, './pages/user/couponsCenter/couponsCenter.wxml'];else __wxAppCode__['pages/user/couponsCenter/couponsCenter.wxml'] = $gwx( './pages/user/couponsCenter/couponsCenter.wxml' );
		__wxAppCode__['pages/user/forceCard/alterForceCard/alterForceCard.json'] = {"usingComponents":{"component-timeLine":"../../../components/timeLine/timeLine","component-alertview":"../../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/forceCard/alterForceCard/alterForceCard.wxml'] = [$gwx, './pages/user/forceCard/alterForceCard/alterForceCard.wxml'];else __wxAppCode__['pages/user/forceCard/alterForceCard/alterForceCard.wxml'] = $gwx( './pages/user/forceCard/alterForceCard/alterForceCard.wxml' );
		__wxAppCode__['pages/user/forceCard/forceCard.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine","component-alertview":"../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/forceCard/forceCard.wxml'] = [$gwx, './pages/user/forceCard/forceCard.wxml'];else __wxAppCode__['pages/user/forceCard/forceCard.wxml'] = $gwx( './pages/user/forceCard/forceCard.wxml' );
		__wxAppCode__['pages/user/forceCard/receiveForceCard/receiveForceCard.json'] = {"usingComponents":{"component-timeLine":"../../../components/timeLine/timeLine","component-alertview":"../../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/forceCard/receiveForceCard/receiveForceCard.wxml'] = [$gwx, './pages/user/forceCard/receiveForceCard/receiveForceCard.wxml'];else __wxAppCode__['pages/user/forceCard/receiveForceCard/receiveForceCard.wxml'] = $gwx( './pages/user/forceCard/receiveForceCard/receiveForceCard.wxml' );
		__wxAppCode__['pages/user/myCard/myCard.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine","component-alertview":"../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/myCard/myCard.wxml'] = [$gwx, './pages/user/myCard/myCard.wxml'];else __wxAppCode__['pages/user/myCard/myCard.wxml'] = $gwx( './pages/user/myCard/myCard.wxml' );
		__wxAppCode__['pages/user/myCard/receiveMyCard/receiveMyCard.json'] = {"usingComponents":{"component-timeLine":"../../../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/myCard/receiveMyCard/receiveMyCard.wxml'] = [$gwx, './pages/user/myCard/receiveMyCard/receiveMyCard.wxml'];else __wxAppCode__['pages/user/myCard/receiveMyCard/receiveMyCard.wxml'] = $gwx( './pages/user/myCard/receiveMyCard/receiveMyCard.wxml' );
		__wxAppCode__['pages/user/myCash/myCash.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine","component-alertview":"../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/myCash/myCash.wxml'] = [$gwx, './pages/user/myCash/myCash.wxml'];else __wxAppCode__['pages/user/myCash/myCash.wxml'] = $gwx( './pages/user/myCash/myCash.wxml' );
		__wxAppCode__['pages/user/myCoupon/myCoupon.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/myCoupon/myCoupon.wxml'] = [$gwx, './pages/user/myCoupon/myCoupon.wxml'];else __wxAppCode__['pages/user/myCoupon/myCoupon.wxml'] = $gwx( './pages/user/myCoupon/myCoupon.wxml' );
		__wxAppCode__['pages/user/shippingAddress/addAddress/addAddress.json'] = {"usingComponents":{"component-timeLine":"../../../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/shippingAddress/addAddress/addAddress.wxml'] = [$gwx, './pages/user/shippingAddress/addAddress/addAddress.wxml'];else __wxAppCode__['pages/user/shippingAddress/addAddress/addAddress.wxml'] = $gwx( './pages/user/shippingAddress/addAddress/addAddress.wxml' );
		__wxAppCode__['pages/user/shippingAddress/shippingAddress.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine","component-alertview":"../../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/shippingAddress/shippingAddress.wxml'] = [$gwx, './pages/user/shippingAddress/shippingAddress.wxml'];else __wxAppCode__['pages/user/shippingAddress/shippingAddress.wxml'] = $gwx( './pages/user/shippingAddress/shippingAddress.wxml' );
		__wxAppCode__['pages/user/shopNotice/shopNotice.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/shopNotice/shopNotice.wxml'] = [$gwx, './pages/user/shopNotice/shopNotice.wxml'];else __wxAppCode__['pages/user/shopNotice/shopNotice.wxml'] = $gwx( './pages/user/shopNotice/shopNotice.wxml' );
		__wxAppCode__['pages/user/user.json'] = {"enablePullDownRefresh":true,"usingComponents":{"component-timeLine":"../components/timeLine/timeLine","component-alertview":"../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/user.wxml'] = [$gwx, './pages/user/user.wxml'];else __wxAppCode__['pages/user/user.wxml'] = $gwx( './pages/user/user.wxml' );
		__wxAppCode__['pages/user/userNotice/userNotice.json'] = {"usingComponents":{"component-timeLine":"../../components/timeLine/timeLine"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/userNotice/userNotice.wxml'] = [$gwx, './pages/user/userNotice/userNotice.wxml'];else __wxAppCode__['pages/user/userNotice/userNotice.wxml'] = $gwx( './pages/user/userNotice/userNotice.wxml' );
		__wxAppCode__['pages/welcome/welcome.json'] = {"usingComponents":{"component-timeLine":"../components/timeLine/timeLine","component-alertview":"../components/alertview/alertview"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/welcome/welcome.wxml'] = [$gwx, './pages/welcome/welcome.wxml'];else __wxAppCode__['pages/welcome/welcome.wxml'] = $gwx( './pages/welcome/welcome.wxml' );
	
	define("module/findAllMenuStorePower.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={getmenus:function(e){return new Promise(function(t,o){wx.getStorage({key:"storeId",success:function(o){wx.request({url:e+"sksystemmodel/findAllMenuStorePower",data:{menuStorePowerStoreinfoStoreId:o.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t(e)}})}})})},getindeximg:function(e){return new Promise(function(t,o){wx.getStorage({key:"storeId",success:function(o){wx.request({url:e+"skstoremodel/selAdvertWX",data:{storeId:o.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t(e)}})}})})}}; 
 			}); 
		define("module/getPhone.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=e.globalData.httpUrl;e.globalData.testhttpUrl;module.exports={getPhoneNum:function(e,o,n,a){return console.log("获取手机号数据=====》",e,o,n,a),new Promise(function(r,l){wx.request({url:t+"skmembermodel/decrypt",data:{encryptedData:e,iv:o,appId:n,sessionKey:a},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.setStorageSync("phone",e.data+""),console.log("=========getPhoneNum phoneNum======已获取=====",e.data),r(e)},fail:function(e){console.log("Error decrypt",e)}})})}}; 
 			}); 
		define("module/getsubmitdetails.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp().globalData.httpUrl;module.exports={submitDatails:function(t){return new Promise(function(o,r){wx.request({url:e+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:t,orderType:"W"},success:function(e){console.log("=====查询提交外卖订单页详情数据=====",e),o(e)}})})}}; 
 			}); 
		define("pages/collage/myCollage/myCollage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 
		define("pages/util/bluebird.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(e){if("object"==("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.Promise=e()}}(function(){var e,n,r;return function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var c="function"==typeof _dereq_&&_dereq_;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){var n=e[s][1][t];return i(n||t)},u,u.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof _dereq_&&_dereq_,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,n){e.exports=function(t){function e(t){var e=new n(t),r=e.promise();return e.setHowMany(1),e.setUnwrap(),e.init(),r}var n=t._SomePromiseArray;t.any=function(t){return e(t)},t.prototype.any=function(){return e(this)}}},{}],2:[function(t,e,n){function r(){this._customScheduler=!1,this._isTickUsed=!1,this._lateQueue=new l(16),this._normalQueue=new l(16),this._haveDrainedQueues=!1,this._trampolineEnabled=!0;var t=this;this.drainQueues=function(){t._drainQueues()},this._schedule=c}function i(t,e,n){this._lateQueue.push(t,e,n),this._queueTick()}function o(t,e,n){this._normalQueue.push(t,e,n),this._queueTick()}function s(t){this._normalQueue._pushOne(t),this._queueTick()}var a;try{throw new Error}catch(t){a=t}var c=t("./schedule"),l=t("./queue"),u=t("./util");r.prototype.setScheduler=function(t){var e=this._schedule;return this._schedule=t,this._customScheduler=!0,e},r.prototype.hasCustomScheduler=function(){return this._customScheduler},r.prototype.enableTrampoline=function(){this._trampolineEnabled=!0},r.prototype.disableTrampolineIfNecessary=function(){u.hasDevTools&&(this._trampolineEnabled=!1)},r.prototype.haveItemsQueued=function(){return this._isTickUsed||this._haveDrainedQueues},r.prototype.fatalError=function(t,e){e?(process.stderr.write("Fatal "+(t instanceof Error?t.stack:t)+"\n"),process.exit(2)):this.throwLater(t)},r.prototype.throwLater=function(t,e){if(1===arguments.length&&(e=t,t=function(){throw e}),"undefined"!=typeof setTimeout)setTimeout(function(){t(e)},0);else try{this._schedule(function(){t(e)})}catch(t){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")}},u.hasDevTools?(r.prototype.invokeLater=function(t,e,n){this._trampolineEnabled?i.call(this,t,e,n):this._schedule(function(){setTimeout(function(){t.call(e,n)},100)})},r.prototype.invoke=function(t,e,n){this._trampolineEnabled?o.call(this,t,e,n):this._schedule(function(){t.call(e,n)})},r.prototype.settlePromises=function(t){this._trampolineEnabled?s.call(this,t):this._schedule(function(){t._settlePromises()})}):(r.prototype.invokeLater=i,r.prototype.invoke=o,r.prototype.settlePromises=s),r.prototype._drainQueue=function(t){for(;t.length()>0;){var e=t.shift();if("function"==typeof e){var n=t.shift(),r=t.shift();e.call(n,r)}else e._settlePromises()}},r.prototype._drainQueues=function(){this._drainQueue(this._normalQueue),this._reset(),this._haveDrainedQueues=!0,this._drainQueue(this._lateQueue)},r.prototype._queueTick=function(){this._isTickUsed||(this._isTickUsed=!0,this._schedule(this.drainQueues))},r.prototype._reset=function(){this._isTickUsed=!1},e.exports=r,e.exports.firstLineError=a},{"./queue":26,"./schedule":29,"./util":36}],3:[function(t,e,n){e.exports=function(t,e,n,r){var i=!1,o=function(t,e){this._reject(e)},s=function(t,e){e.promiseRejectionQueued=!0,e.bindingPromise._then(o,o,null,this,t)},a=function(t,e){0==(50397184&this._bitField)&&this._resolveCallback(e.target)},c=function(t,e){e.promiseRejectionQueued||this._reject(t)};t.prototype.bind=function(o){i||(i=!0,t.prototype._propagateFrom=r.propagateFromFunction(),t.prototype._boundValue=r.boundValueFunction());var l=n(o),u=new t(e);u._propagateFrom(this,1);var p=this._target();if(u._setBoundTo(l),l instanceof t){var h={promiseRejectionQueued:!1,promise:u,target:p,bindingPromise:l};p._then(e,s,void 0,u,h),l._then(a,c,void 0,u,h),u._setOnCancel(l)}else u._resolveCallback(p);return u},t.prototype._setBoundTo=function(t){void 0!==t?(this._bitField=2097152|this._bitField,this._boundTo=t):this._bitField=-2097153&this._bitField},t.prototype._isBound=function(){return 2097152==(2097152&this._bitField)},t.bind=function(e,n){return t.resolve(n).bind(e)}}},{}],4:[function(t,e,n){var r;"undefined"!=typeof Promise&&(r=Promise);var i=t("./promise")();i.noConflict=function(){try{Promise===i&&(Promise=r)}catch(t){}return i},e.exports=i},{"./promise":22}],5:[function(t,e,n){var r=Object.create;if(r){var i=r(null),o=r(null);i[" size"]=o[" size"]=0}e.exports=function(e){function n(t,n){var r;if(null!=t&&(r=t[n]),"function"!=typeof r){var i="Object "+a.classString(t)+" has no method '"+a.toString(n)+"'";throw new e.TypeError(i)}return r}function r(t){return n(t,this.pop()).apply(t,this)}function i(t){return t[this]}function o(t){var e=+this;return e<0&&(e=Math.max(0,e+t.length)),t[e]}var s,a=t("./util"),c=a.canEvaluate;a.isIdentifier;e.prototype.call=function(t){var e=[].slice.call(arguments,1);return e.push(t),this._then(r,void 0,void 0,e,void 0)},e.prototype.get=function(t){var e;if("number"==typeof t)e=o;else if(c){var n=s(t);e=null!==n?n:i}else e=i;return this._then(e,void 0,void 0,t,void 0)}}},{"./util":36}],6:[function(t,e,n){e.exports=function(e,n,r,i){var o=t("./util"),s=o.tryCatch,a=o.errorObj,c=e._async;e.prototype.break=e.prototype.cancel=function(){if(!i.cancellation())return this._warn("cancellation is disabled");for(var t=this,e=t;t._isCancellable();){if(!t._cancelBy(e)){e._isFollowing()?e._followee().cancel():e._cancelBranched();break}var n=t._cancellationParent;if(null==n||!n._isCancellable()){t._isFollowing()?t._followee().cancel():t._cancelBranched();break}t._isFollowing()&&t._followee().cancel(),t._setWillBeCancelled(),e=t,t=n}},e.prototype._branchHasCancelled=function(){this._branchesRemainingToCancel--},e.prototype._enoughBranchesHaveCancelled=function(){return void 0===this._branchesRemainingToCancel||this._branchesRemainingToCancel<=0},e.prototype._cancelBy=function(t){return t===this?(this._branchesRemainingToCancel=0,this._invokeOnCancel(),!0):(this._branchHasCancelled(),!!this._enoughBranchesHaveCancelled()&&(this._invokeOnCancel(),!0))},e.prototype._cancelBranched=function(){this._enoughBranchesHaveCancelled()&&this._cancel()},e.prototype._cancel=function(){this._isCancellable()&&(this._setCancelled(),c.invoke(this._cancelPromises,this,void 0))},e.prototype._cancelPromises=function(){this._length()>0&&this._settlePromises()},e.prototype._unsetOnCancel=function(){this._onCancelField=void 0},e.prototype._isCancellable=function(){return this.isPending()&&!this._isCancelled()},e.prototype.isCancellable=function(){return this.isPending()&&!this.isCancelled()},e.prototype._doInvokeOnCancel=function(t,e){if(o.isArray(t))for(var n=0;n<t.length;++n)this._doInvokeOnCancel(t[n],e);else if(void 0!==t)if("function"==typeof t){if(!e){var r=s(t).call(this._boundValue());r===a&&(this._attachExtraTrace(r.e),c.throwLater(r.e))}}else t._resultCancelled(this)},e.prototype._invokeOnCancel=function(){var t=this._onCancel();this._unsetOnCancel(),c.invoke(this._doInvokeOnCancel,this,t)},e.prototype._invokeInternalOnCancel=function(){this._isCancellable()&&(this._doInvokeOnCancel(this._onCancel(),!0),this._unsetOnCancel())},e.prototype._resultCancelled=function(){this.cancel()}}},{"./util":36}],7:[function(t,e,n){e.exports=function(e){var n=t("./util"),r=t("./es5").keys,i=n.tryCatch,o=n.errorObj;return function(t,s,a){return function(c){var l=a._boundValue();t:for(var u=0;u<t.length;++u){var p=t[u];if(p===Error||null!=p&&p.prototype instanceof Error){if(c instanceof p)return i(s).call(l,c)}else if("function"==typeof p){var h=i(p).call(l,c);if(h===o)return h;if(h)return i(s).call(l,c)}else if(n.isObject(c)){for(var f=r(p),_=0;_<f.length;++_){var d=f[_];if(p[d]!=c[d])continue t}return i(s).call(l,c)}}return e}}}},{"./es5":13,"./util":36}],8:[function(t,e,n){e.exports=function(t){function e(){this._trace=new e.CapturedTrace(n())}function n(){var t=i.length-1;if(t>=0)return i[t]}var r=!1,i=[];return t.prototype._promiseCreated=function(){},t.prototype._pushContext=function(){},t.prototype._popContext=function(){return null},t._peekContext=t.prototype._peekContext=function(){},e.prototype._pushContext=function(){void 0!==this._trace&&(this._trace._promiseCreated=null,i.push(this._trace))},e.prototype._popContext=function(){if(void 0!==this._trace){var t=i.pop(),e=t._promiseCreated;return t._promiseCreated=null,e}return null},e.CapturedTrace=null,e.create=function(){if(r)return new e},e.deactivateLongStackTraces=function(){},e.activateLongStackTraces=function(){var i=t.prototype._pushContext,o=t.prototype._popContext,s=t._peekContext,a=t.prototype._peekContext,c=t.prototype._promiseCreated;e.deactivateLongStackTraces=function(){t.prototype._pushContext=i,t.prototype._popContext=o,t._peekContext=s,t.prototype._peekContext=a,t.prototype._promiseCreated=c,r=!1},r=!0,t.prototype._pushContext=e.prototype._pushContext,t.prototype._popContext=e.prototype._popContext,t._peekContext=t.prototype._peekContext=n,t.prototype._promiseCreated=function(){var t=this._peekContext();t&&null==t._promiseCreated&&(t._promiseCreated=this)}},e}},{}],9:[function(e,n,r){n.exports=function(n,r){function i(t,e){return{promise:e}}function o(){return!1}function s(t,e,n){var r=this;try{t(e,n,function(t){if("function"!=typeof t)throw new TypeError("onCancel must be a function, got: "+V.toString(t));r._attachCancellationCallback(t)})}catch(t){return t}}function a(t){if(!this._isCancellable())return this;var e=this._onCancel();void 0!==e?V.isArray(e)?e.push(t):this._setOnCancel([e,t]):this._setOnCancel(t)}function c(){return this._onCancelField}function l(t){this._onCancelField=t}function u(){this._cancellationParent=void 0,this._onCancelField=void 0}function p(t,e){if(0!=(1&e)){this._cancellationParent=t;var n=t._branchesRemainingToCancel;void 0===n&&(n=0),t._branchesRemainingToCancel=n+1}0!=(2&e)&&t._isBound()&&this._setBoundTo(t._boundTo)}function h(){var t=this._boundTo;return void 0!==t&&t instanceof n?t.isFulfilled()?t.value():void 0:t}function f(){this._trace=new T(this._peekContext())}function _(t,e){if(I(t)){var n=this._trace;if(void 0!==n&&e&&(n=n._parent),void 0!==n)n.attachExtraTrace(t);else if(!t.__stackCleaned__){var r=w(t);V.notEnumerableProp(t,"stack",r.message+"\n"+r.stack.join("\n")),V.notEnumerableProp(t,"__stackCleaned__",!0)}}}function d(t,e,r){if(nt.warnings){var i,o=new D(t);if(e)r._attachExtraTrace(o);else if(nt.longStackTraces&&(i=n._peekContext()))i.attachExtraTrace(o);else{var s=w(o);o.stack=s.message+"\n"+s.stack.join("\n")}J("warning",o)||C(o,"",!0)}}function v(t,e){for(var n=0;n<e.length-1;++n)e[n].push("From previous event:"),e[n]=e[n].join("\n");return n<e.length&&(e[n]=e[n].join("\n")),t+"\n"+e.join("\n")}function y(t){for(var e=0;e<t.length;++e)(0===t[e].length||e+1<t.length&&t[e][0]===t[e+1][0])&&(t.splice(e,1),e--)}function m(t){for(var e=t[0],n=1;n<t.length;++n){for(var r=t[n],i=e.length-1,o=e[i],s=-1,a=r.length-1;a>=0;--a)if(r[a]===o){s=a;break}for(a=s;a>=0;--a){var c=r[a];if(e[i]!==c)break;e.pop(),i--}e=r}}function g(t){for(var e=[],n=0;n<t.length;++n){var r=t[n],i="    (No stack trace)"===r||U.test(r),o=i&&Z(r);i&&!o&&(M&&" "!==r.charAt(0)&&(r="    "+r),e.push(r))}return e}function b(t){for(var e=t.stack.replace(/\s+$/g,"").split("\n"),n=0;n<e.length;++n){var r=e[n];if("    (No stack trace)"===r||U.test(r))break}return n>0&&"SyntaxError"!=t.name&&(e=e.slice(n)),e}function w(t){var e=t.stack,n=t.toString();return e="string"==typeof e&&e.length>0?b(t):["    (No stack trace)"],{message:n,stack:"SyntaxError"==t.name?e:g(e)}}function C(e,n,r){if("undefined"!=typeof console){var i;if(V.isObject(e)){var o=e.stack;i=n+B(o,e)}else i=n+String(e);"function"==typeof R?R(i,r):"function"!=typeof console.log&&"object"!==t(console.log)||console.log(i)}}function j(t,e,n,r){var i=!1;try{"function"==typeof e&&(i=!0,"rejectionHandled"===t?e(r):e(n,r))}catch(t){A.throwLater(t)}"unhandledRejection"===t?J(t,n,r)||i||C(n,"Unhandled rejection "):J(t,r)}function k(t){var e;if("function"==typeof t)e="[function "+(t.name||"anonymous")+"]";else{if(e=t&&"function"==typeof t.toString?t.toString():V.toString(t),/\[object [a-zA-Z0-9$_]+\]/.test(e))try{e=JSON.stringify(t)}catch(t){}0===e.length&&(e="(empty array)")}return"(<"+E(e)+">, no stack trace)"}function E(t){return t.length<41?t:t.substr(0,38)+"..."}function F(){return"function"==typeof et}function x(t){var e=t.match(tt);if(e)return{fileName:e[1],line:parseInt(e[2],10)}}function T(t){this._parent=t,this._promisesCreated=0;var e=this._length=1+(void 0===t?0:t._length);et(this,T),e>32&&this.uncycle()}var P,S,R,O=n._getDomain,A=n._async,D=e("./errors").Warning,V=e("./util"),I=V.canAttachTrace,L=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,H=/\((?:timers\.js):\d+:\d+\)/,N=/[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,U=null,B=null,M=!1,q=!(0==V.env("BLUEBIRD_DEBUG")),Q=!(0==V.env("BLUEBIRD_WARNINGS")||!q&&!V.env("BLUEBIRD_WARNINGS")),$=!(0==V.env("BLUEBIRD_LONG_STACK_TRACES")||!q&&!V.env("BLUEBIRD_LONG_STACK_TRACES")),z=0!=V.env("BLUEBIRD_W_FORGOTTEN_RETURN")&&(Q||!!V.env("BLUEBIRD_W_FORGOTTEN_RETURN"));n.prototype.suppressUnhandledRejections=function(){var t=this._target();t._bitField=-1048577&t._bitField|524288},n.prototype._ensurePossibleRejectionHandled=function(){0==(524288&this._bitField)&&(this._setRejectionIsUnhandled(),A.invokeLater(this._notifyUnhandledRejection,this,void 0))},n.prototype._notifyUnhandledRejectionIsHandled=function(){j("rejectionHandled",P,void 0,this)},n.prototype._setReturnedNonUndefined=function(){this._bitField=268435456|this._bitField},n.prototype._returnedNonUndefined=function(){return 0!=(268435456&this._bitField)},n.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var t=this._settledValue();this._setUnhandledRejectionIsNotified(),j("unhandledRejection",S,t,this)}},n.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=262144|this._bitField},n.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=-262145&this._bitField},n.prototype._isUnhandledRejectionNotified=function(){return(262144&this._bitField)>0},n.prototype._setRejectionIsUnhandled=function(){this._bitField=1048576|this._bitField},n.prototype._unsetRejectionIsUnhandled=function(){this._bitField=-1048577&this._bitField,this._isUnhandledRejectionNotified()&&(this._unsetUnhandledRejectionIsNotified(),this._notifyUnhandledRejectionIsHandled())},n.prototype._isRejectionUnhandled=function(){return(1048576&this._bitField)>0},n.prototype._warn=function(t,e,n){return d(t,e,n||this)},n.onPossiblyUnhandledRejection=function(t){var e=O();S="function"==typeof t?null===e?t:V.domainBind(e,t):void 0},n.onUnhandledRejectionHandled=function(t){var e=O();P="function"==typeof t?null===e?t:V.domainBind(e,t):void 0};var G=function(){};n.longStackTraces=function(){if(A.haveItemsQueued()&&!nt.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");if(!nt.longStackTraces&&F()){var t=n.prototype._captureStackTrace,e=n.prototype._attachExtraTrace;nt.longStackTraces=!0,G=function(){if(A.haveItemsQueued()&&!nt.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");n.prototype._captureStackTrace=t,n.prototype._attachExtraTrace=e,r.deactivateLongStackTraces(),A.enableTrampoline(),nt.longStackTraces=!1},n.prototype._captureStackTrace=f,n.prototype._attachExtraTrace=_,r.activateLongStackTraces(),A.disableTrampolineIfNecessary()}},n.hasLongStackTraces=function(){return nt.longStackTraces&&F()};var X=function(){try{if("function"==typeof CustomEvent){t=new CustomEvent("CustomEvent");return V.global.dispatchEvent(t),function(t,e){var n=new CustomEvent(t.toLowerCase(),{detail:e,cancelable:!0});return!V.global.dispatchEvent(n)}}if("function"==typeof Event){var t=new Event("CustomEvent");return V.global.dispatchEvent(t),function(t,e){var n=new Event(t.toLowerCase(),{cancelable:!0});return n.detail=e,!V.global.dispatchEvent(n)}}return(t=document.createEvent("CustomEvent")).initCustomEvent("testingtheevent",!1,!0,{}),V.global.dispatchEvent(t),function(t,e){var n=document.createEvent("CustomEvent");return n.initCustomEvent(t.toLowerCase(),!1,!0,e),!V.global.dispatchEvent(n)}}catch(t){}return function(){return!1}}(),W=V.isNode?function(){return process.emit.apply(process,arguments)}:V.global?function(t){var e="on"+t.toLowerCase(),n=V.global[e];return!!n&&(n.apply(V.global,[].slice.call(arguments,1)),!0)}:function(){return!1},K={promiseCreated:i,promiseFulfilled:i,promiseRejected:i,promiseResolved:i,promiseCancelled:i,promiseChained:function(t,e,n){return{promise:e,child:n}},warning:function(t,e){return{warning:e}},unhandledRejection:function(t,e,n){return{reason:e,promise:n}},rejectionHandled:i},J=function(t){var e=!1;try{e=W.apply(null,arguments)}catch(t){A.throwLater(t),e=!0}var n=!1;try{n=X(t,K[t].apply(null,arguments))}catch(t){A.throwLater(t),n=!0}return n||e};n.config=function(t){if("longStackTraces"in(t=Object(t))&&(t.longStackTraces?n.longStackTraces():!t.longStackTraces&&n.hasLongStackTraces()&&G()),"warnings"in t){var e=t.warnings;nt.warnings=!!e,z=nt.warnings,V.isObject(e)&&"wForgottenReturn"in e&&(z=!!e.wForgottenReturn)}if("cancellation"in t&&t.cancellation&&!nt.cancellation){if(A.haveItemsQueued())throw new Error("cannot enable cancellation after promises are in use");n.prototype._clearCancellationData=u,n.prototype._propagateFrom=p,n.prototype._onCancel=c,n.prototype._setOnCancel=l,n.prototype._attachCancellationCallback=a,n.prototype._execute=s,Y=p,nt.cancellation=!0}return"monitoring"in t&&(t.monitoring&&!nt.monitoring?(nt.monitoring=!0,n.prototype._fireEvent=J):!t.monitoring&&nt.monitoring&&(nt.monitoring=!1,n.prototype._fireEvent=o)),n},n.prototype._fireEvent=o,n.prototype._execute=function(t,e,n){try{t(e,n)}catch(t){return t}},n.prototype._onCancel=function(){},n.prototype._setOnCancel=function(t){},n.prototype._attachCancellationCallback=function(t){},n.prototype._captureStackTrace=function(){},n.prototype._attachExtraTrace=function(){},n.prototype._clearCancellationData=function(){},n.prototype._propagateFrom=function(t,e){};var Y=function(t,e){0!=(2&e)&&t._isBound()&&this._setBoundTo(t._boundTo)},Z=function(){return!1},tt=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;V.inherits(T,Error),r.CapturedTrace=T,T.prototype.uncycle=function(){var t=this._length;if(!(t<2)){for(var e=[],n={},r=0,i=this;void 0!==i;++r)e.push(i),i=i._parent;for(r=(t=this._length=r)-1;r>=0;--r){var o=e[r].stack;void 0===n[o]&&(n[o]=r)}for(r=0;r<t;++r){var s=n[e[r].stack];if(void 0!==s&&s!==r){s>0&&(e[s-1]._parent=void 0,e[s-1]._length=1),e[r]._parent=void 0,e[r]._length=1;var a=r>0?e[r-1]:this;s<t-1?(a._parent=e[s+1],a._parent.uncycle(),a._length=a._parent._length+1):(a._parent=void 0,a._length=1);for(var c=a._length+1,l=r-2;l>=0;--l)e[l]._length=c,c++;return}}}},T.prototype.attachExtraTrace=function(t){if(!t.__stackCleaned__){this.uncycle();for(var e=w(t),n=e.message,r=[e.stack],i=this;void 0!==i;)r.push(g(i.stack.split("\n"))),i=i._parent;m(r),y(r),V.notEnumerableProp(t,"stack",v(n,r)),V.notEnumerableProp(t,"__stackCleaned__",!0)}};var et=function(){var e=/^\s*at\s*/,n=function(t,e){return"string"==typeof t?t:void 0!==e.name&&void 0!==e.message?e.toString():k(e)};if("number"==typeof Error.stackTraceLimit&&"function"==typeof Error.captureStackTrace){Error.stackTraceLimit+=6,U=e,B=n;var r=Error.captureStackTrace;return Z=function(t){return L.test(t)},function(t,e){Error.stackTraceLimit+=6,r(t,e),Error.stackTraceLimit-=6}}var i=new Error;if("string"==typeof i.stack&&i.stack.split("\n")[0].indexOf("stackDetection@")>=0)return U=/@/,B=n,M=!0,function(t){t.stack=(new Error).stack};var o;try{throw new Error}catch(t){o="stack"in t}return"stack"in i||!o||"number"!=typeof Error.stackTraceLimit?(B=function(e,n){return"string"==typeof e?e:"object"!==(void 0===n?"undefined":t(n))&&"function"!=typeof n||void 0===n.name||void 0===n.message?k(n):n.toString()},null):(U=e,B=n,function(t){Error.stackTraceLimit+=6;try{throw new Error}catch(e){t.stack=e.stack}Error.stackTraceLimit-=6})}();"undefined"!=typeof console&&void 0!==console.warn&&(R=function(t){console.warn(t)},V.isNode&&process.stderr.isTTY?R=function(t,e){var n=e?"[33m":"[31m";console.warn(n+t+"[0m\n")}:V.isNode||"string"!=typeof(new Error).stack||(R=function(t,e){console.warn("%c"+t,e?"color: darkorange":"color: red")}));var nt={warnings:Q,longStackTraces:!1,cancellation:!1,monitoring:!1};return $&&n.longStackTraces(),{longStackTraces:function(){return nt.longStackTraces},warnings:function(){return nt.warnings},cancellation:function(){return nt.cancellation},monitoring:function(){return nt.monitoring},propagateFromFunction:function(){return Y},boundValueFunction:function(){return h},checkForgottenReturns:function(t,e,n,r,i){if(void 0===t&&null!==e&&z){if(void 0!==i&&i._returnedNonUndefined())return;if(0==(65535&r._bitField))return;n&&(n+=" ");var o="",s="";if(e._trace){for(var a=e._trace.stack.split("\n"),c=g(a),l=c.length-1;l>=0;--l){var u=c[l];if(!H.test(u)){var p=u.match(N);p&&(o="at "+p[1]+":"+p[2]+":"+p[3]+" ");break}}if(c.length>0)for(var h=c[0],l=0;l<a.length;++l)if(a[l]===h){l>0&&(s="\n"+a[l-1]);break}}var f="a promise was created in a "+n+"handler "+o+"but was not returned from it, see http://goo.gl/rRqMUw"+s;r._warn(f,!0,e)}},setBounds:function(t,e){if(F()){for(var n,r,i=t.stack.split("\n"),o=e.stack.split("\n"),s=-1,a=-1,c=0;c<i.length;++c)if(l=x(i[c])){n=l.fileName,s=l.line;break}for(c=0;c<o.length;++c){var l=x(o[c]);if(l){r=l.fileName,a=l.line;break}}s<0||a<0||!n||!r||n!==r||s>=a||(Z=function(t){if(L.test(t))return!0;var e=x(t);return!!(e&&e.fileName===n&&s<=e.line&&e.line<=a)})}},warn:d,deprecated:function(t,e){var n=t+" is deprecated and will be removed in a future version.";return e&&(n+=" Use "+e+" instead."),d(n)},CapturedTrace:T,fireDomEvent:X,fireGlobalEvent:W}}},{"./errors":12,"./util":36}],10:[function(t,e,n){e.exports=function(t){function e(){return this.value}function n(){throw this.reason}t.prototype.return=t.prototype.thenReturn=function(n){return n instanceof t&&n.suppressUnhandledRejections(),this._then(e,void 0,void 0,{value:n},void 0)},t.prototype.throw=t.prototype.thenThrow=function(t){return this._then(n,void 0,void 0,{reason:t},void 0)},t.prototype.catchThrow=function(t){if(arguments.length<=1)return this._then(void 0,n,void 0,{reason:t},void 0);var e=arguments[1];return this.caught(t,function(){throw e})},t.prototype.catchReturn=function(n){if(arguments.length<=1)return n instanceof t&&n.suppressUnhandledRejections(),this._then(void 0,e,void 0,{value:n},void 0);var r=arguments[1];r instanceof t&&r.suppressUnhandledRejections();return this.caught(n,function(){return r})}}},{}],11:[function(t,e,n){e.exports=function(t,e){function n(){return i(this)}var r=t.reduce,i=t.all;t.prototype.each=function(t){return r(this,t,e,0)._then(n,void 0,void 0,this,void 0)},t.prototype.mapSeries=function(t){return r(this,t,e,e)},t.each=function(t,i){return r(t,i,e,0)._then(n,void 0,void 0,t,void 0)},t.mapSeries=function(t,n){return r(t,n,e,e)}}},{}],12:[function(t,e,n){function r(t,e){function n(r){if(!(this instanceof n))return new n(r);p(this,"message","string"==typeof r?r:e),p(this,"name",t),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):Error.call(this)}return u(n,Error),n}function i(t){if(!(this instanceof i))return new i(t);p(this,"name","OperationalError"),p(this,"message",t),this.cause=t,this.isOperational=!0,t instanceof Error?(p(this,"message",t.message),p(this,"stack",t.stack)):Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}var o,s,a=t("./es5"),c=a.freeze,l=t("./util"),u=l.inherits,p=l.notEnumerableProp,h=r("Warning","warning"),f=r("CancellationError","cancellation error"),_=r("TimeoutError","timeout error"),d=r("AggregateError","aggregate error");try{o=TypeError,s=RangeError}catch(t){o=r("TypeError","type error"),s=r("RangeError","range error")}for(var v="join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "),y=0;y<v.length;++y)"function"==typeof Array.prototype[v[y]]&&(d.prototype[v[y]]=Array.prototype[v[y]]);a.defineProperty(d.prototype,"length",{value:0,configurable:!1,writable:!0,enumerable:!0}),d.prototype.isOperational=!0;var m=0;d.prototype.toString=function(){var t=Array(4*m+1).join(" "),e="\n"+t+"AggregateError of:\n";m++,t=Array(4*m+1).join(" ");for(var n=0;n<this.length;++n){for(var r=this[n]===this?"[Circular AggregateError]":this[n]+"",i=r.split("\n"),o=0;o<i.length;++o)i[o]=t+i[o];e+=(r=i.join("\n"))+"\n"}return m--,e},u(i,Error);var g=Error.__BluebirdErrorTypes__;g||(g=c({CancellationError:f,TimeoutError:_,OperationalError:i,RejectionError:i,AggregateError:d}),a.defineProperty(Error,"__BluebirdErrorTypes__",{value:g,writable:!1,enumerable:!1,configurable:!1})),e.exports={Error:Error,TypeError:o,RangeError:s,CancellationError:g.CancellationError,OperationalError:g.OperationalError,TimeoutError:g.TimeoutError,AggregateError:g.AggregateError,Warning:h}},{"./es5":13,"./util":36}],13:[function(t,e,n){var r=function(){return void 0===this}();if(r)e.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:r,propertyIsWritable:function(t,e){var n=Object.getOwnPropertyDescriptor(t,e);return!(n&&!n.writable&&!n.set)}};else{var i={}.hasOwnProperty,o={}.toString,s={}.constructor.prototype,a=function(t){var e=[];for(var n in t)i.call(t,n)&&e.push(n);return e};e.exports={isArray:function(t){try{return"[object Array]"===o.call(t)}catch(t){return!1}},keys:a,names:a,defineProperty:function(t,e,n){return t[e]=n.value,t},getDescriptor:function(t,e){return{value:t[e]}},freeze:function(t){return t},getPrototypeOf:function(t){try{return Object(t).constructor.prototype}catch(t){return s}},isES5:r,propertyIsWritable:function(){return!0}}}},{}],14:[function(t,e,n){e.exports=function(t,e){var n=t.map;t.prototype.filter=function(t,r){return n(this,t,r,e)},t.filter=function(t,r,i){return n(t,r,i,e)}}},{}],15:[function(t,e,n){e.exports=function(e,n,r){function i(t,e,n){this.promise=t,this.type=e,this.handler=n,this.called=!1,this.cancelPromise=null}function o(t){this.finallyHandler=t}function s(t,e){return null!=t.cancelPromise&&(arguments.length>1?t.cancelPromise._reject(e):t.cancelPromise._cancel(),t.cancelPromise=null,!0)}function a(){return l.call(this,this.promise._target()._settledValue())}function c(t){if(!s(this,t))return h.e=t,h}function l(t){var i=this.promise,l=this.handler;if(!this.called){this.called=!0;var u=this.isFinallyHandler()?l.call(i._boundValue()):l.call(i._boundValue(),t);if(u===r)return u;if(void 0!==u){i._setReturnedNonUndefined();var f=n(u,i);if(f instanceof e){if(null!=this.cancelPromise){if(f._isCancelled()){var _=new p("late cancellation observer");return i._attachExtraTrace(_),h.e=_,h}f.isPending()&&f._attachCancellationCallback(new o(this))}return f._then(a,c,void 0,this,void 0)}}}return i.isRejected()?(s(this),h.e=t,h):(s(this),t)}var u=t("./util"),p=e.CancellationError,h=u.errorObj,f=t("./catch_filter")(r);return i.prototype.isFinallyHandler=function(){return 0===this.type},o.prototype._resultCancelled=function(){s(this.finallyHandler)},e.prototype._passThrough=function(t,e,n,r){return"function"!=typeof t?this.then():this._then(n,r,void 0,new i(this,e,t),void 0)},e.prototype.lastly=e.prototype.finally=function(t){return this._passThrough(t,0,l,l)},e.prototype.tap=function(t){return this._passThrough(t,1,l)},e.prototype.tapCatch=function(t){var n=arguments.length;if(1===n)return this._passThrough(t,1,void 0,l);var r,i=new Array(n-1),o=0;for(r=0;r<n-1;++r){var s=arguments[r];if(!u.isObject(s))return e.reject(new TypeError("tapCatch statement predicate: expecting an object but got "+u.classString(s)));i[o++]=s}i.length=o;var a=arguments[r];return this._passThrough(f(i,a,this),1,void 0,l)},i}},{"./catch_filter":7,"./util":36}],16:[function(t,e,n){e.exports=function(e,n,r,i,o,s){function a(t,n,r){for(var o=0;o<n.length;++o){r._pushContext();var s=h(n[o])(t);if(r._popContext(),s===p){r._pushContext();var a=e.reject(p.e);return r._popContext(),a}var c=i(s,r);if(c instanceof e)return c}return null}function c(t,n,i,o){if(s.cancellation()){var a=new e(r),c=this._finallyPromise=new e(r);this._promise=a.lastly(function(){return c}),a._captureStackTrace(),a._setOnCancel(this)}else(this._promise=new e(r))._captureStackTrace();this._stack=o,this._generatorFunction=t,this._receiver=n,this._generator=void 0,this._yieldHandlers="function"==typeof i?[i].concat(f):f,this._yieldedPromise=null,this._cancellationPhase=!1}var l=t("./errors").TypeError,u=t("./util"),p=u.errorObj,h=u.tryCatch,f=[];u.inherits(c,o),c.prototype._isResolved=function(){return null===this._promise},c.prototype._cleanup=function(){this._promise=this._generator=null,s.cancellation()&&null!==this._finallyPromise&&(this._finallyPromise._fulfill(),this._finallyPromise=null)},c.prototype._promiseCancelled=function(){if(!this._isResolved()){var t;if(void 0!==this._generator.return)this._promise._pushContext(),t=h(this._generator.return).call(this._generator,void 0),this._promise._popContext();else{var n=new e.CancellationError("generator .return() sentinel");e.coroutine.returnSentinel=n,this._promise._attachExtraTrace(n),this._promise._pushContext(),t=h(this._generator.throw).call(this._generator,n),this._promise._popContext()}this._cancellationPhase=!0,this._yieldedPromise=null,this._continue(t)}},c.prototype._promiseFulfilled=function(t){this._yieldedPromise=null,this._promise._pushContext();var e=h(this._generator.next).call(this._generator,t);this._promise._popContext(),this._continue(e)},c.prototype._promiseRejected=function(t){this._yieldedPromise=null,this._promise._attachExtraTrace(t),this._promise._pushContext();var e=h(this._generator.throw).call(this._generator,t);this._promise._popContext(),this._continue(e)},c.prototype._resultCancelled=function(){if(this._yieldedPromise instanceof e){var t=this._yieldedPromise;this._yieldedPromise=null,t.cancel()}},c.prototype.promise=function(){return this._promise},c.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver),this._receiver=this._generatorFunction=void 0,this._promiseFulfilled(void 0)},c.prototype._continue=function(t){var n=this._promise;if(t===p)return this._cleanup(),this._cancellationPhase?n.cancel():n._rejectCallback(t.e,!1);var r=t.value;if(!0===t.done)return this._cleanup(),this._cancellationPhase?n.cancel():n._resolveCallback(r);var o=i(r,this._promise);if(o instanceof e||null!==(o=a(o,this._yieldHandlers,this._promise))){var s=(o=o._target())._bitField;0==(50397184&s)?(this._yieldedPromise=o,o._proxy(this,null)):0!=(33554432&s)?e._async.invoke(this._promiseFulfilled,this,o._value()):0!=(16777216&s)?e._async.invoke(this._promiseRejected,this,o._reason()):this._promiseCancelled()}else this._promiseRejected(new l("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s",String(r))+"From coroutine:\n"+this._stack.split("\n").slice(1,-7).join("\n")))},e.coroutine=function(t,e){if("function"!=typeof t)throw new l("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var n=Object(e).yieldHandler,r=c,i=(new Error).stack;return function(){var e=t.apply(this,arguments),o=new r(void 0,void 0,n,i),s=o.promise();return o._generator=e,o._promiseFulfilled(void 0),s}},e.coroutine.addYieldHandler=function(t){if("function"!=typeof t)throw new l("expecting a function but got "+u.classString(t));f.push(t)},e.spawn=function(t){if(s.deprecated("Promise.spawn()","Promise.coroutine()"),"function"!=typeof t)return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var r=new c(t,this),i=r.promise();return r._run(e.spawn),i}}},{"./errors":12,"./util":36}],17:[function(t,e,n){e.exports=function(e,n,r,i,o,s){var a=t("./util");a.canEvaluate,a.tryCatch,a.errorObj;e.join=function(){var t,e=arguments.length-1;if(e>0&&"function"==typeof arguments[e]){t=arguments[e]}var r=[].slice.call(arguments);t&&r.pop();var i=new n(r).promise();return void 0!==t?i.spread(t):i}}},{"./util":36}],18:[function(e,n,r){n.exports=function(n,r,i,o,s,a){function c(t,e,n,r){this.constructor$(t),this._promise._captureStackTrace();var i=u();this._callback=null===i?e:p.domainBind(i,e),this._preservedValues=r===s?new Array(this.length()):null,this._limit=n,this._inFlight=0,this._queue=[],_.invoke(this._asyncInit,this,void 0)}function l(e,r,o,s){if("function"!=typeof r)return i("expecting a function but got "+p.classString(r));var a=0;if(void 0!==o){if("object"!==(void 0===o?"undefined":t(o))||null===o)return n.reject(new TypeError("options argument must be an object but it is "+p.classString(o)));if("number"!=typeof o.concurrency)return n.reject(new TypeError("'concurrency' must be a number but it is "+p.classString(o.concurrency)));a=o.concurrency}return a="number"==typeof a&&isFinite(a)&&a>=1?a:0,new c(e,r,a,s).promise()}var u=n._getDomain,p=e("./util"),h=p.tryCatch,f=p.errorObj,_=n._async;p.inherits(c,r),c.prototype._asyncInit=function(){this._init$(void 0,-2)},c.prototype._init=function(){},c.prototype._promiseFulfilled=function(t,e){var r=this._values,i=this.length(),s=this._preservedValues,c=this._limit;if(e<0){if(e=-1*e-1,r[e]=t,c>=1&&(this._inFlight--,this._drainQueue(),this._isResolved()))return!0}else{if(c>=1&&this._inFlight>=c)return r[e]=t,this._queue.push(e),!1;null!==s&&(s[e]=t);var l=this._promise,u=this._callback,p=l._boundValue();l._pushContext();var _=h(u).call(p,t,e,i),d=l._popContext();if(a.checkForgottenReturns(_,d,null!==s?"Promise.filter":"Promise.map",l),_===f)return this._reject(_.e),!0;var v=o(_,this._promise);if(v instanceof n){var y=(v=v._target())._bitField;if(0==(50397184&y))return c>=1&&this._inFlight++,r[e]=v,v._proxy(this,-1*(e+1)),!1;if(0==(33554432&y))return 0!=(16777216&y)?(this._reject(v._reason()),!0):(this._cancel(),!0);_=v._value()}r[e]=_}return++this._totalResolved>=i&&(null!==s?this._filter(r,s):this._resolve(r),!0)},c.prototype._drainQueue=function(){for(var t=this._queue,e=this._limit,n=this._values;t.length>0&&this._inFlight<e;){if(this._isResolved())return;var r=t.pop();this._promiseFulfilled(n[r],r)}},c.prototype._filter=function(t,e){for(var n=e.length,r=new Array(n),i=0,o=0;o<n;++o)t[o]&&(r[i++]=e[o]);r.length=i,this._resolve(r)},c.prototype.preservedValues=function(){return this._preservedValues},n.prototype.map=function(t,e){return l(this,t,e,null)},n.map=function(t,e,n,r){return l(t,e,n,r)}}},{"./util":36}],19:[function(t,e,n){e.exports=function(e,n,r,i,o){var s=t("./util"),a=s.tryCatch;e.method=function(t){if("function"!=typeof t)throw new e.TypeError("expecting a function but got "+s.classString(t));return function(){var r=new e(n);r._captureStackTrace(),r._pushContext();var i=a(t).apply(this,arguments),s=r._popContext();return o.checkForgottenReturns(i,s,"Promise.method",r),r._resolveFromSyncValue(i),r}},e.attempt=e.try=function(t){if("function"!=typeof t)return i("expecting a function but got "+s.classString(t));var r=new e(n);r._captureStackTrace(),r._pushContext();var c;if(arguments.length>1){o.deprecated("calling Promise.try with more than 1 argument");var l=arguments[1],u=arguments[2];c=s.isArray(l)?a(t).apply(u,l):a(t).call(u,l)}else c=a(t)();var p=r._popContext();return o.checkForgottenReturns(c,p,"Promise.try",r),r._resolveFromSyncValue(c),r},e.prototype._resolveFromSyncValue=function(t){t===s.errorObj?this._rejectCallback(t.e,!1):this._resolveCallback(t,!0)}}},{"./util":36}],20:[function(t,e,n){function r(t){return t instanceof Error&&c.getPrototypeOf(t)===Error.prototype}function i(t){var e;if(r(t)){(e=new a(t)).name=t.name,e.message=t.message,e.stack=t.stack;for(var n=c.keys(t),i=0;i<n.length;++i){var s=n[i];l.test(s)||(e[s]=t[s])}return e}return o.markAsOriginatingFromRejection(t),t}var o=t("./util"),s=o.maybeWrapAsError,a=t("./errors").OperationalError,c=t("./es5"),l=/^(?:name|message|stack|cause)$/;e.exports=function(t,e){return function(n,r){if(null!==t){if(n){var o=i(s(n));t._attachExtraTrace(o),t._reject(o)}else if(e){var a=[].slice.call(arguments,1);t._fulfill(a)}else t._fulfill(r);t=null}}}},{"./errors":12,"./es5":13,"./util":36}],21:[function(t,e,n){e.exports=function(e){function n(t,e){var n=this;if(!o.isArray(t))return r.call(n,t,e);var i=a(e).apply(n._boundValue(),[null].concat(t));i===c&&s.throwLater(i.e)}function r(t,e){var n=this._boundValue(),r=void 0===t?a(e).call(n,null):a(e).call(n,null,t);r===c&&s.throwLater(r.e)}function i(t,e){var n=this;if(!t){var r=new Error(t+"");r.cause=t,t=r}var i=a(e).call(n._boundValue(),t);i===c&&s.throwLater(i.e)}var o=t("./util"),s=e._async,a=o.tryCatch,c=o.errorObj;e.prototype.asCallback=e.prototype.nodeify=function(t,e){if("function"==typeof t){var o=r;void 0!==e&&Object(e).spread&&(o=n),this._then(o,i,void 0,this,t)}return this}}},{"./util":36}],22:[function(t,e,n){e.exports=function(){function n(){}function r(t,e){if(null==t||t.constructor!==i)throw new m("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");if("function"!=typeof e)throw new m("expecting a function but got "+f.classString(e))}function i(t){t!==b&&r(this,t),this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,this._resolveFromExecutor(t),this._promiseCreated(),this._fireEvent("promiseCreated",this)}function o(t){this.promise._resolveCallback(t)}function s(t){this.promise._rejectCallback(t,!1)}function a(t){var e=new i(b);e._fulfillmentHandler0=t,e._rejectionHandler0=t,e._promise0=t,e._receiver0=t}var c,l=function(){return new m("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")},u=function(){return new i.PromiseInspection(this._target())},p=function(t){return i.reject(new m(t))},h={},f=t("./util");c=f.isNode?function(){var t=process.domain;return void 0===t&&(t=null),t}:function(){return null},f.notEnumerableProp(i,"_getDomain",c);var _=t("./es5"),d=t("./async"),v=new d;_.defineProperty(i,"_async",{value:v});var y=t("./errors"),m=i.TypeError=y.TypeError;i.RangeError=y.RangeError;var g=i.CancellationError=y.CancellationError;i.TimeoutError=y.TimeoutError,i.OperationalError=y.OperationalError,i.RejectionError=y.OperationalError,i.AggregateError=y.AggregateError;var b=function(){},w={},C={},j=t("./thenables")(i,b),k=t("./promise_array")(i,b,j,p,n),E=t("./context")(i),F=E.create,x=t("./debuggability")(i,E),T=(x.CapturedTrace,t("./finally")(i,j,C)),P=t("./catch_filter")(C),S=t("./nodeback"),R=f.errorObj,O=f.tryCatch;return i.prototype.toString=function(){return"[object Promise]"},i.prototype.caught=i.prototype.catch=function(t){var e=arguments.length;if(e>1){var n,r=new Array(e-1),i=0;for(n=0;n<e-1;++n){var o=arguments[n];if(!f.isObject(o))return p("Catch statement predicate: expecting an object but got "+f.classString(o));r[i++]=o}return r.length=i,t=arguments[n],this.then(void 0,P(r,t,this))}return this.then(void 0,t)},i.prototype.reflect=function(){return this._then(u,u,void 0,this,void 0)},i.prototype.then=function(t,e){if(x.warnings()&&arguments.length>0&&"function"!=typeof t&&"function"!=typeof e){var n=".then() only accepts functions but was passed: "+f.classString(t);arguments.length>1&&(n+=", "+f.classString(e)),this._warn(n)}return this._then(t,e,void 0,void 0,void 0)},i.prototype.done=function(t,e){this._then(t,e,void 0,void 0,void 0)._setIsFinal()},i.prototype.spread=function(t){return"function"!=typeof t?p("expecting a function but got "+f.classString(t)):this.all()._then(t,void 0,void 0,w,void 0)},i.prototype.toJSON=function(){var t={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};return this.isFulfilled()?(t.fulfillmentValue=this.value(),t.isFulfilled=!0):this.isRejected()&&(t.rejectionReason=this.reason(),t.isRejected=!0),t},i.prototype.all=function(){return arguments.length>0&&this._warn(".all() was passed arguments but it does not take any"),new k(this).promise()},i.prototype.error=function(t){return this.caught(f.originatesFromRejection,t)},i.getNewLibraryCopy=e.exports,i.is=function(t){return t instanceof i},i.fromNode=i.fromCallback=function(t){var e=new i(b);e._captureStackTrace();var n=arguments.length>1&&!!Object(arguments[1]).multiArgs,r=O(t)(S(e,n));return r===R&&e._rejectCallback(r.e,!0),e._isFateSealed()||e._setAsyncGuaranteed(),e},i.all=function(t){return new k(t).promise()},i.cast=function(t){var e=j(t);return e instanceof i||((e=new i(b))._captureStackTrace(),e._setFulfilled(),e._rejectionHandler0=t),e},i.resolve=i.fulfilled=i.cast,i.reject=i.rejected=function(t){var e=new i(b);return e._captureStackTrace(),e._rejectCallback(t,!0),e},i.setScheduler=function(t){if("function"!=typeof t)throw new m("expecting a function but got "+f.classString(t));return v.setScheduler(t)},i.prototype._then=function(t,e,n,r,o){var s=void 0!==o,a=s?o:new i(b),l=this._target(),u=l._bitField;s||(a._propagateFrom(this,3),a._captureStackTrace(),void 0===r&&0!=(2097152&this._bitField)&&(r=0!=(50397184&u)?this._boundValue():l===this?void 0:this._boundTo),this._fireEvent("promiseChained",this,a));var p=c();if(0!=(50397184&u)){var h,_,d=l._settlePromiseCtx;0!=(33554432&u)?(_=l._rejectionHandler0,h=t):0!=(16777216&u)?(_=l._fulfillmentHandler0,h=e,l._unsetRejectionIsUnhandled()):(d=l._settlePromiseLateCancellationObserver,_=new g("late cancellation observer"),l._attachExtraTrace(_),h=e),v.invoke(d,l,{handler:null===p?h:"function"==typeof h&&f.domainBind(p,h),promise:a,receiver:r,value:_})}else l._addCallbacks(t,e,a,r,p);return a},i.prototype._length=function(){return 65535&this._bitField},i.prototype._isFateSealed=function(){return 0!=(117506048&this._bitField)},i.prototype._isFollowing=function(){return 67108864==(67108864&this._bitField)},i.prototype._setLength=function(t){this._bitField=-65536&this._bitField|65535&t},i.prototype._setFulfilled=function(){this._bitField=33554432|this._bitField,this._fireEvent("promiseFulfilled",this)},i.prototype._setRejected=function(){this._bitField=16777216|this._bitField,this._fireEvent("promiseRejected",this)},i.prototype._setFollowing=function(){this._bitField=67108864|this._bitField,this._fireEvent("promiseResolved",this)},i.prototype._setIsFinal=function(){this._bitField=4194304|this._bitField},i.prototype._isFinal=function(){return(4194304&this._bitField)>0},i.prototype._unsetCancelled=function(){this._bitField=-65537&this._bitField},i.prototype._setCancelled=function(){this._bitField=65536|this._bitField,this._fireEvent("promiseCancelled",this)},i.prototype._setWillBeCancelled=function(){this._bitField=8388608|this._bitField},i.prototype._setAsyncGuaranteed=function(){v.hasCustomScheduler()||(this._bitField=134217728|this._bitField)},i.prototype._receiverAt=function(t){var e=0===t?this._receiver0:this[4*t-4+3];if(e!==h)return void 0===e&&this._isBound()?this._boundValue():e},i.prototype._promiseAt=function(t){return this[4*t-4+2]},i.prototype._fulfillmentHandlerAt=function(t){return this[4*t-4+0]},i.prototype._rejectionHandlerAt=function(t){return this[4*t-4+1]},i.prototype._boundValue=function(){},i.prototype._migrateCallback0=function(t){t._bitField;var e=t._fulfillmentHandler0,n=t._rejectionHandler0,r=t._promise0,i=t._receiverAt(0);void 0===i&&(i=h),this._addCallbacks(e,n,r,i,null)},i.prototype._migrateCallbackAt=function(t,e){var n=t._fulfillmentHandlerAt(e),r=t._rejectionHandlerAt(e),i=t._promiseAt(e),o=t._receiverAt(e);void 0===o&&(o=h),this._addCallbacks(n,r,i,o,null)},i.prototype._addCallbacks=function(t,e,n,r,i){var o=this._length();if(o>=65531&&(o=0,this._setLength(0)),0===o)this._promise0=n,this._receiver0=r,"function"==typeof t&&(this._fulfillmentHandler0=null===i?t:f.domainBind(i,t)),"function"==typeof e&&(this._rejectionHandler0=null===i?e:f.domainBind(i,e));else{var s=4*o-4;this[s+2]=n,this[s+3]=r,"function"==typeof t&&(this[s+0]=null===i?t:f.domainBind(i,t)),"function"==typeof e&&(this[s+1]=null===i?e:f.domainBind(i,e))}return this._setLength(o+1),o},i.prototype._proxy=function(t,e){this._addCallbacks(void 0,void 0,e,t,null)},i.prototype._resolveCallback=function(t,e){if(0==(117506048&this._bitField)){if(t===this)return this._rejectCallback(l(),!1);var n=j(t,this);if(!(n instanceof i))return this._fulfill(t);e&&this._propagateFrom(n,2);var r=n._target();if(r!==this){var o=r._bitField;if(0==(50397184&o)){var s=this._length();s>0&&r._migrateCallback0(this);for(var a=1;a<s;++a)r._migrateCallbackAt(this,a);this._setFollowing(),this._setLength(0),this._setFollowee(r)}else if(0!=(33554432&o))this._fulfill(r._value());else if(0!=(16777216&o))this._reject(r._reason());else{var c=new g("late cancellation observer");r._attachExtraTrace(c),this._reject(c)}}else this._reject(l())}},i.prototype._rejectCallback=function(t,e,n){var r=f.ensureErrorObject(t),i=r===t;if(!i&&!n&&x.warnings()){var o="a promise was rejected with a non-error: "+f.classString(t);this._warn(o,!0)}this._attachExtraTrace(r,!!e&&i),this._reject(t)},i.prototype._resolveFromExecutor=function(t){if(t!==b){var e=this;this._captureStackTrace(),this._pushContext();var n=!0,r=this._execute(t,function(t){e._resolveCallback(t)},function(t){e._rejectCallback(t,n)});n=!1,this._popContext(),void 0!==r&&e._rejectCallback(r,!0)}},i.prototype._settlePromiseFromHandler=function(t,e,n,r){var i=r._bitField;if(0==(65536&i)){r._pushContext();var o;e===w?n&&"number"==typeof n.length?o=O(t).apply(this._boundValue(),n):(o=R).e=new m("cannot .spread() a non-array: "+f.classString(n)):o=O(t).call(e,n);var s=r._popContext();0==(65536&(i=r._bitField))&&(o===C?r._reject(n):o===R?r._rejectCallback(o.e,!1):(x.checkForgottenReturns(o,s,"",r,this),r._resolveCallback(o)))}},i.prototype._target=function(){for(var t=this;t._isFollowing();)t=t._followee();return t},i.prototype._followee=function(){return this._rejectionHandler0},i.prototype._setFollowee=function(t){this._rejectionHandler0=t},i.prototype._settlePromise=function(t,e,r,o){var s=t instanceof i,a=this._bitField,c=0!=(134217728&a);0!=(65536&a)?(s&&t._invokeInternalOnCancel(),r instanceof T&&r.isFinallyHandler()?(r.cancelPromise=t,O(e).call(r,o)===R&&t._reject(R.e)):e===u?t._fulfill(u.call(r)):r instanceof n?r._promiseCancelled(t):s||t instanceof k?t._cancel():r.cancel()):"function"==typeof e?s?(c&&t._setAsyncGuaranteed(),this._settlePromiseFromHandler(e,r,o,t)):e.call(r,o,t):r instanceof n?r._isResolved()||(0!=(33554432&a)?r._promiseFulfilled(o,t):r._promiseRejected(o,t)):s&&(c&&t._setAsyncGuaranteed(),0!=(33554432&a)?t._fulfill(o):t._reject(o))},i.prototype._settlePromiseLateCancellationObserver=function(t){var e=t.handler,n=t.promise,r=t.receiver,o=t.value;"function"==typeof e?n instanceof i?this._settlePromiseFromHandler(e,r,o,n):e.call(r,o,n):n instanceof i&&n._reject(o)},i.prototype._settlePromiseCtx=function(t){this._settlePromise(t.promise,t.handler,t.receiver,t.value)},i.prototype._settlePromise0=function(t,e,n){var r=this._promise0,i=this._receiverAt(0);this._promise0=void 0,this._receiver0=void 0,this._settlePromise(r,t,i,e)},i.prototype._clearCallbackDataAtIndex=function(t){var e=4*t-4;this[e+2]=this[e+3]=this[e+0]=this[e+1]=void 0},i.prototype._fulfill=function(t){var e=this._bitField;if(!((117506048&e)>>>16)){if(t===this){var n=l();return this._attachExtraTrace(n),this._reject(n)}this._setFulfilled(),this._rejectionHandler0=t,(65535&e)>0&&(0!=(134217728&e)?this._settlePromises():v.settlePromises(this))}},i.prototype._reject=function(t){var e=this._bitField;if(!((117506048&e)>>>16)){if(this._setRejected(),this._fulfillmentHandler0=t,this._isFinal())return v.fatalError(t,f.isNode);(65535&e)>0?v.settlePromises(this):this._ensurePossibleRejectionHandled()}},i.prototype._fulfillPromises=function(t,e){for(var n=1;n<t;n++){var r=this._fulfillmentHandlerAt(n),i=this._promiseAt(n),o=this._receiverAt(n);this._clearCallbackDataAtIndex(n),this._settlePromise(i,r,o,e)}},i.prototype._rejectPromises=function(t,e){for(var n=1;n<t;n++){var r=this._rejectionHandlerAt(n),i=this._promiseAt(n),o=this._receiverAt(n);this._clearCallbackDataAtIndex(n),this._settlePromise(i,r,o,e)}},i.prototype._settlePromises=function(){var t=this._bitField,e=65535&t;if(e>0){if(0!=(16842752&t)){var n=this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0,n,t),this._rejectPromises(e,n)}else{var r=this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0,r,t),this._fulfillPromises(e,r)}this._setLength(0)}this._clearCancellationData()},i.prototype._settledValue=function(){var t=this._bitField;return 0!=(33554432&t)?this._rejectionHandler0:0!=(16777216&t)?this._fulfillmentHandler0:void 0},i.defer=i.pending=function(){return x.deprecated("Promise.defer","new Promise"),{promise:new i(b),resolve:o,reject:s}},f.notEnumerableProp(i,"_makeSelfResolutionError",l),t("./method")(i,b,j,p,x),t("./bind")(i,b,j,x),t("./cancel")(i,k,p,x),t("./direct_resolve")(i),t("./synchronous_inspection")(i),t("./join")(i,k,j,b,v,c),i.Promise=i,i.version="3.5.0",t("./map.js")(i,k,p,j,b,x),t("./call_get.js")(i),t("./using.js")(i,p,j,F,b,x),t("./timers.js")(i,b,x),t("./generators.js")(i,p,b,j,n,x),t("./nodeify.js")(i),t("./promisify.js")(i,b),t("./props.js")(i,k,j,p),t("./race.js")(i,b,j,p),t("./reduce.js")(i,k,p,j,b,x),t("./settle.js")(i,k,x),t("./some.js")(i,k,p),t("./filter.js")(i,b),t("./each.js")(i,b),t("./any.js")(i),f.toFastProperties(i),f.toFastProperties(i.prototype),a({a:1}),a({b:2}),a({c:3}),a(1),a(function(){}),a(void 0),a(!1),a(new i(b)),x.setBounds(d.firstLineError,f.lastLineError),i}},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(t,e,n){e.exports=function(e,n,r,i,o){function s(t){switch(t){case-2:return[];case-3:return{};case-6:return new Map}}function a(t){var r=this._promise=new e(n);t instanceof e&&r._propagateFrom(t,3),r._setOnCancel(this),this._values=t,this._length=0,this._totalResolved=0,this._init(void 0,-2)}var c=t("./util");c.isArray;return c.inherits(a,o),a.prototype.length=function(){return this._length},a.prototype.promise=function(){return this._promise},a.prototype._init=function t(n,o){var a=r(this._values,this._promise);if(a instanceof e){var l=(a=a._target())._bitField;if(this._values=a,0==(50397184&l))return this._promise._setAsyncGuaranteed(),a._then(t,this._reject,void 0,this,o);if(0==(33554432&l))return 0!=(16777216&l)?this._reject(a._reason()):this._cancel();a=a._value()}if(null!==(a=c.asArray(a)))0!==a.length?this._iterate(a):-5===o?this._resolveEmptyArray():this._resolve(s(o));else{var u=i("expecting an array or an iterable object but got "+c.classString(a)).reason();this._promise._rejectCallback(u,!1)}},a.prototype._iterate=function(t){var n=this.getActualLength(t.length);this._length=n,this._values=this.shouldCopyValues()?new Array(n):this._values;for(var i=this._promise,o=!1,s=null,a=0;a<n;++a){var c=r(t[a],i);s=c instanceof e?(c=c._target())._bitField:null,o?null!==s&&c.suppressUnhandledRejections():null!==s?0==(50397184&s)?(c._proxy(this,a),this._values[a]=c):o=0!=(33554432&s)?this._promiseFulfilled(c._value(),a):0!=(16777216&s)?this._promiseRejected(c._reason(),a):this._promiseCancelled(a):o=this._promiseFulfilled(c,a)}o||i._setAsyncGuaranteed()},a.prototype._isResolved=function(){return null===this._values},a.prototype._resolve=function(t){this._values=null,this._promise._fulfill(t)},a.prototype._cancel=function(){!this._isResolved()&&this._promise._isCancellable()&&(this._values=null,this._promise._cancel())},a.prototype._reject=function(t){this._values=null,this._promise._rejectCallback(t,!1)},a.prototype._promiseFulfilled=function(t,e){return this._values[e]=t,++this._totalResolved>=this._length&&(this._resolve(this._values),!0)},a.prototype._promiseCancelled=function(){return this._cancel(),!0},a.prototype._promiseRejected=function(t){return this._totalResolved++,this._reject(t),!0},a.prototype._resultCancelled=function(){if(!this._isResolved()){var t=this._values;if(this._cancel(),t instanceof e)t.cancel();else for(var n=0;n<t.length;++n)t[n]instanceof e&&t[n].cancel()}},a.prototype.shouldCopyValues=function(){return!0},a.prototype.getActualLength=function(t){return t},a}},{"./util":36}],24:[function(e,n,r){n.exports=function(n,r){function i(t){return!w.test(t)}function o(t){try{return!0===t.__isPromisified__}catch(t){return!1}}function s(t,e,n){var r=f.getDataPropertyOrDefault(t,e+n,g);return!!r&&o(r)}function a(t,e,n){for(var r=0;r<t.length;r+=2){var i=t[r];if(n.test(i))for(var o=i.replace(n,""),s=0;s<t.length;s+=2)if(t[s]===o)throw new m("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s",e))}}function c(t,e,n,r){for(var i=f.inheritedDataKeys(t),c=[],l=0;l<i.length;++l){var u=i[l],p=t[u],h=r===C||C(u,p,t);"function"!=typeof p||o(p)||s(t,u,e)||!r(u,p,t,h)||c.push(u,p)}return a(c,e,n),c}function l(t,e,n,r,i){for(var o=new RegExp(j(e)+"$"),s=c(t,e,o,n),a=0,l=s.length;a<l;a+=2){var u=s[a],p=s[a+1],_=u+e;if(r===k)t[_]=k(u,h,u,p,e,i);else{var d=r(p,function(){return k(u,h,u,p,e,i)});f.notEnumerableProp(d,"__isPromisified__",!0),t[_]=d}}return f.toFastProperties(t),t}function u(t,e,n){return k(t,e,void 0,t,null,n)}var p,h={},f=e("./util"),_=e("./nodeback"),d=f.withAppended,v=f.maybeWrapAsError,y=f.canEvaluate,m=e("./errors").TypeError,g={__isPromisified__:!0},b=["arity","length","name","arguments","caller","callee","prototype","__isPromisified__"],w=new RegExp("^(?:"+b.join("|")+")$"),C=function(t){return f.isIdentifier(t)&&"_"!==t.charAt(0)&&"constructor"!==t},j=function(t){return t.replace(/([$])/,"\\$")},k=y?p:function(t,e,i,o,s,a){function c(){var i=e;e===h&&(i=this);var o=new n(r);o._captureStackTrace();var s="string"==typeof u&&this!==l?this[u]:t,c=_(o,a);try{s.apply(i,d(arguments,c))}catch(t){o._rejectCallback(v(t),!0,!0)}return o._isFateSealed()||o._setAsyncGuaranteed(),o}var l=function(){return this}(),u=t;return"string"==typeof u&&(t=o),f.notEnumerableProp(c,"__isPromisified__",!0),c};n.promisify=function(t,e){if("function"!=typeof t)throw new m("expecting a function but got "+f.classString(t));if(o(t))return t;var n=u(t,void 0===(e=Object(e)).context?h:e.context,!!e.multiArgs);return f.copyDescriptors(t,n,i),n},n.promisifyAll=function(e,n){if("function"!=typeof e&&"object"!==(void 0===e?"undefined":t(e)))throw new m("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");var r=!!(n=Object(n)).multiArgs,i=n.suffix;"string"!=typeof i&&(i="Async");var o=n.filter;"function"!=typeof o&&(o=C);var s=n.promisifier;if("function"!=typeof s&&(s=k),!f.isIdentifier(i))throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");for(var a=f.inheritedDataKeys(e),c=0;c<a.length;++c){var u=e[a[c]];"constructor"!==a[c]&&f.isClass(u)&&(l(u.prototype,i,o,s,r),l(u,i,o,s,r))}return l(e,i,o,s,r)}}},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(t,e,n){e.exports=function(e,n,r,i){function o(t){var e,n=!1;if(void 0!==a&&t instanceof a)e=p(t),n=!0;else{var r=u.keys(t),i=r.length;e=new Array(2*i);for(var o=0;o<i;++o){var s=r[o];e[o]=t[s],e[o+i]=s}}this.constructor$(e),this._isMap=n,this._init$(void 0,n?-6:-3)}function s(t){var n,s=r(t);return l(s)?(n=s instanceof e?s._then(e.props,void 0,void 0,void 0,void 0):new o(s).promise(),s instanceof e&&n._propagateFrom(s,2),n):i("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n")}var a,c=t("./util"),l=c.isObject,u=t("./es5");"function"==typeof Map&&(a=Map);var p=function(){function t(t,r){this[e]=t,this[e+n]=r,e++}var e=0,n=0;return function(r){n=r.size,e=0;var i=new Array(2*r.size);return r.forEach(t,i),i}}(),h=function(t){for(var e=new a,n=t.length/2|0,r=0;r<n;++r){var i=t[n+r],o=t[r];e.set(i,o)}return e};c.inherits(o,n),o.prototype._init=function(){},o.prototype._promiseFulfilled=function(t,e){if(this._values[e]=t,++this._totalResolved>=this._length){var n;if(this._isMap)n=h(this._values);else{n={};for(var r=this.length(),i=0,o=this.length();i<o;++i)n[this._values[i+r]]=this._values[i]}return this._resolve(n),!0}return!1},o.prototype.shouldCopyValues=function(){return!1},o.prototype.getActualLength=function(t){return t>>1},e.prototype.props=function(){return s(this)},e.props=function(t){return s(t)}}},{"./es5":13,"./util":36}],26:[function(t,e,n){function r(t,e,n,r,i){for(var o=0;o<i;++o)n[o+r]=t[o+e],t[o+e]=void 0}function i(t){this._capacity=t,this._length=0,this._front=0}i.prototype._willBeOverCapacity=function(t){return this._capacity<t},i.prototype._pushOne=function(t){var e=this.length();this._checkCapacity(e+1),this[this._front+e&this._capacity-1]=t,this._length=e+1},i.prototype.push=function(t,e,n){var r=this.length()+3;if(this._willBeOverCapacity(r))return this._pushOne(t),this._pushOne(e),void this._pushOne(n);var i=this._front+r-3;this._checkCapacity(r);var o=this._capacity-1;this[i+0&o]=t,this[i+1&o]=e,this[i+2&o]=n,this._length=r},i.prototype.shift=function(){var t=this._front,e=this[t];return this[t]=void 0,this._front=t+1&this._capacity-1,this._length--,e},i.prototype.length=function(){return this._length},i.prototype._checkCapacity=function(t){this._capacity<t&&this._resizeTo(this._capacity<<1)},i.prototype._resizeTo=function(t){var e=this._capacity;this._capacity=t,r(this,0,this,e,this._front+this._length&e-1)},e.exports=i},{}],27:[function(t,e,n){e.exports=function(e,n,r,i){function o(t,o){var c=r(t);if(c instanceof e)return a(c);if(null===(t=s.asArray(t)))return i("expecting an array or an iterable object but got "+s.classString(t));var l=new e(n);void 0!==o&&l._propagateFrom(o,3);for(var u=l._fulfill,p=l._reject,h=0,f=t.length;h<f;++h){var _=t[h];(void 0!==_||h in t)&&e.cast(_)._then(u,p,void 0,l,null)}return l}var s=t("./util"),a=function(t){return t.then(function(e){return o(e,t)})};e.race=function(t){return o(t,void 0)},e.prototype.race=function(){return o(this,void 0)}}},{"./util":36}],28:[function(t,e,n){e.exports=function(e,n,r,i,o,s){function a(t,n,r,i){this.constructor$(t);var s=h();this._fn=null===s?n:f.domainBind(s,n),void 0!==r&&(r=e.resolve(r))._attachCancellationCallback(this),this._initialValue=r,this._currentCancellable=null,this._eachValues=i===o?Array(this._length):0===i?null:void 0,this._promise._captureStackTrace(),this._init$(void 0,-5)}function c(t,e){this.isFulfilled()?e._resolve(t):e._reject(t)}function l(t,e,n,i){return"function"!=typeof e?r("expecting a function but got "+f.classString(e)):new a(t,e,n,i).promise()}function u(t){this.accum=t,this.array._gotAccum(t);var n=i(this.value,this.array._promise);return n instanceof e?(this.array._currentCancellable=n,n._then(p,void 0,void 0,this,void 0)):p.call(this,n)}function p(t){var n=this.array,r=n._promise,i=_(n._fn);r._pushContext();var o;(o=void 0!==n._eachValues?i.call(r._boundValue(),t,this.index,this.length):i.call(r._boundValue(),this.accum,t,this.index,this.length))instanceof e&&(n._currentCancellable=o);var a=r._popContext();return s.checkForgottenReturns(o,a,void 0!==n._eachValues?"Promise.each":"Promise.reduce",r),o}var h=e._getDomain,f=t("./util"),_=f.tryCatch;f.inherits(a,n),a.prototype._gotAccum=function(t){void 0!==this._eachValues&&null!==this._eachValues&&t!==o&&this._eachValues.push(t)},a.prototype._eachComplete=function(t){return null!==this._eachValues&&this._eachValues.push(t),this._eachValues},a.prototype._init=function(){},a.prototype._resolveEmptyArray=function(){this._resolve(void 0!==this._eachValues?this._eachValues:this._initialValue)},a.prototype.shouldCopyValues=function(){return!1},a.prototype._resolve=function(t){this._promise._resolveCallback(t),this._values=null},a.prototype._resultCancelled=function(t){if(t===this._initialValue)return this._cancel();this._isResolved()||(this._resultCancelled$(),this._currentCancellable instanceof e&&this._currentCancellable.cancel(),this._initialValue instanceof e&&this._initialValue.cancel())},a.prototype._iterate=function(t){this._values=t;var n,r,i=t.length;if(void 0!==this._initialValue?(n=this._initialValue,r=0):(n=e.resolve(t[0]),r=1),this._currentCancellable=n,!n.isRejected())for(;r<i;++r){var o={accum:null,value:t[r],index:r,length:i,array:this};n=n._then(u,void 0,void 0,o,void 0)}void 0!==this._eachValues&&(n=n._then(this._eachComplete,void 0,void 0,this,void 0)),n._then(c,c,void 0,n,this)},e.prototype.reduce=function(t,e){return l(this,t,e,null)},e.reduce=function(t,e,n,r){return l(t,e,n,r)}}},{"./util":36}],29:[function(t,e,n){var r,i=t("./util"),o=i.getNativePromise();if(i.isNode&&"undefined"==typeof MutationObserver){var s=global.setImmediate,a=process.nextTick;r=i.isRecentNode?function(t){s.call(global,t)}:function(t){a.call(process,t)}}else if("function"==typeof o&&"function"==typeof o.resolve){var c=o.resolve();r=function(t){c.then(t)}}else r="undefined"==typeof MutationObserver||"undefined"!=typeof window&&window.navigator&&(window.navigator.standalone||window.cordova)?"undefined"!=typeof setImmediate?function(t){setImmediate(t)}:"undefined"!=typeof setTimeout?function(t){setTimeout(t,0)}:function(){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")}:function(){var t=document.createElement("div"),e={attributes:!0},n=!1,r=document.createElement("div");new MutationObserver(function(){t.classList.toggle("foo"),n=!1}).observe(r,e);var i=function(){n||(n=!0,r.classList.toggle("foo"))};return function(n){var r=new MutationObserver(function(){r.disconnect(),n()});r.observe(t,e),i()}}();e.exports=r},{"./util":36}],30:[function(t,e,n){e.exports=function(e,n,r){function i(t){this.constructor$(t)}var o=e.PromiseInspection;t("./util").inherits(i,n),i.prototype._promiseResolved=function(t,e){return this._values[t]=e,++this._totalResolved>=this._length&&(this._resolve(this._values),!0)},i.prototype._promiseFulfilled=function(t,e){var n=new o;return n._bitField=33554432,n._settledValueField=t,this._promiseResolved(e,n)},i.prototype._promiseRejected=function(t,e){var n=new o;return n._bitField=16777216,n._settledValueField=t,this._promiseResolved(e,n)},e.settle=function(t){return r.deprecated(".settle()",".reflect()"),new i(t).promise()},e.prototype.settle=function(){return e.settle(this)}}},{"./util":36}],31:[function(t,e,n){e.exports=function(e,n,r){function i(t){this.constructor$(t),this._howMany=0,this._unwrap=!1,this._initialized=!1}function o(t,e){if((0|e)!==e||e<0)return r("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");var n=new i(t),o=n.promise();return n.setHowMany(e),n.init(),o}var s=t("./util"),a=t("./errors").RangeError,c=t("./errors").AggregateError,l=s.isArray,u={};s.inherits(i,n),i.prototype._init=function(){if(this._initialized)if(0!==this._howMany){this._init$(void 0,-5);var t=l(this._values);!this._isResolved()&&t&&this._howMany>this._canPossiblyFulfill()&&this._reject(this._getRangeError(this.length()))}else this._resolve([])},i.prototype.init=function(){this._initialized=!0,this._init()},i.prototype.setUnwrap=function(){this._unwrap=!0},i.prototype.howMany=function(){return this._howMany},i.prototype.setHowMany=function(t){this._howMany=t},i.prototype._promiseFulfilled=function(t){return this._addFulfilled(t),this._fulfilled()===this.howMany()&&(this._values.length=this.howMany(),1===this.howMany()&&this._unwrap?this._resolve(this._values[0]):this._resolve(this._values),!0)},i.prototype._promiseRejected=function(t){return this._addRejected(t),this._checkOutcome()},i.prototype._promiseCancelled=function(){return this._values instanceof e||null==this._values?this._cancel():(this._addRejected(u),this._checkOutcome())},i.prototype._checkOutcome=function(){if(this.howMany()>this._canPossiblyFulfill()){for(var t=new c,e=this.length();e<this._values.length;++e)this._values[e]!==u&&t.push(this._values[e]);return t.length>0?this._reject(t):this._cancel(),!0}return!1},i.prototype._fulfilled=function(){return this._totalResolved},i.prototype._rejected=function(){return this._values.length-this.length()},i.prototype._addRejected=function(t){this._values.push(t)},i.prototype._addFulfilled=function(t){this._values[this._totalResolved++]=t},i.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected()},i.prototype._getRangeError=function(t){var e="Input array must contain at least "+this._howMany+" items but contains only "+t+" items";return new a(e)},i.prototype._resolveEmptyArray=function(){this._reject(this._getRangeError(0))},e.some=function(t,e){return o(t,e)},e.prototype.some=function(t){return o(this,t)},e._SomePromiseArray=i}},{"./errors":12,"./util":36}],32:[function(t,e,n){e.exports=function(t){function e(t){void 0!==t?(t=t._target(),this._bitField=t._bitField,this._settledValueField=t._isFateSealed()?t._settledValue():void 0):(this._bitField=0,this._settledValueField=void 0)}e.prototype._settledValue=function(){return this._settledValueField};var n=e.prototype.value=function(){if(!this.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue()},r=e.prototype.error=e.prototype.reason=function(){if(!this.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue()},i=e.prototype.isFulfilled=function(){return 0!=(33554432&this._bitField)},o=e.prototype.isRejected=function(){return 0!=(16777216&this._bitField)},s=e.prototype.isPending=function(){return 0==(50397184&this._bitField)},a=e.prototype.isResolved=function(){return 0!=(50331648&this._bitField)};e.prototype.isCancelled=function(){return 0!=(8454144&this._bitField)},t.prototype.__isCancelled=function(){return 65536==(65536&this._bitField)},t.prototype._isCancelled=function(){return this._target().__isCancelled()},t.prototype.isCancelled=function(){return 0!=(8454144&this._target()._bitField)},t.prototype.isPending=function(){return s.call(this._target())},t.prototype.isRejected=function(){return o.call(this._target())},t.prototype.isFulfilled=function(){return i.call(this._target())},t.prototype.isResolved=function(){return a.call(this._target())},t.prototype.value=function(){return n.call(this._target())},t.prototype.reason=function(){var t=this._target();return t._unsetRejectionIsUnhandled(),r.call(t)},t.prototype._value=function(){return this._settledValue()},t.prototype._reason=function(){return this._unsetRejectionIsUnhandled(),this._settledValue()},t.PromiseInspection=e}},{}],33:[function(t,e,n){e.exports=function(e,n){function r(t){return t.then}function i(t){try{return r(t)}catch(t){return c.e=t,c}}function o(t){try{return u.call(t,"_promise0")}catch(t){return!1}}function s(t,r,i){var o=new e(n),s=o;i&&i._pushContext(),o._captureStackTrace(),i&&i._popContext();var l=!0,u=a.tryCatch(r).call(t,function(t){o&&(o._resolveCallback(t),o=null)},function(t){o&&(o._rejectCallback(t,l,!0),o=null)});return l=!1,o&&u===c&&(o._rejectCallback(u.e,!0,!0),o=null),s}var a=t("./util"),c=a.errorObj,l=a.isObject,u={}.hasOwnProperty;return function(t,r){if(l(t)){if(t instanceof e)return t;var a=i(t);if(a===c)return r&&r._pushContext(),u=e.reject(a.e),r&&r._popContext(),u;if("function"==typeof a){if(o(t)){var u=new e(n);return t._then(u._fulfill,u._reject,void 0,u,null),u}return s(t,a,r)}}return t}}},{"./util":36}],34:[function(t,e,n){e.exports=function(e,n,r){function i(t){this.handle=t}function o(t){return clearTimeout(this.handle),t}function s(t){throw clearTimeout(this.handle),t}var a=t("./util"),c=e.TimeoutError;i.prototype._resultCancelled=function(){clearTimeout(this.handle)};var l=function(t){return u(+this).thenReturn(t)},u=e.delay=function(t,o){var s,a;return void 0!==o?(s=e.resolve(o)._then(l,null,null,t,void 0),r.cancellation()&&o instanceof e&&s._setOnCancel(o)):(s=new e(n),a=setTimeout(function(){s._fulfill()},+t),r.cancellation()&&s._setOnCancel(new i(a)),s._captureStackTrace()),s._setAsyncGuaranteed(),s};e.prototype.delay=function(t){return u(t,this)};var p=function(t,e,n){var r;r="string"!=typeof e?e instanceof Error?e:new c("operation timed out"):new c(e),a.markAsOriginatingFromRejection(r),t._attachExtraTrace(r),t._reject(r),null!=n&&n.cancel()};e.prototype.timeout=function(t,e){t=+t;var n,a,c=new i(setTimeout(function(){n.isPending()&&p(n,e,a)},t));return r.cancellation()?(a=this.then(),(n=a._then(o,s,void 0,c,void 0))._setOnCancel(c)):n=this._then(o,s,void 0,c,void 0),n}}},{"./util":36}],35:[function(t,e,n){e.exports=function(e,n,r,i,o,s){function a(t){setTimeout(function(){throw t},0)}function c(t){var e=r(t);return e!==t&&"function"==typeof t._isDisposable&&"function"==typeof t._getDisposer&&t._isDisposable()&&e._setDisposable(t._getDisposer()),e}function l(t,n){function i(){if(s>=l)return u._fulfill();var o=c(t[s++]);if(o instanceof e&&o._isDisposable()){try{o=r(o._getDisposer().tryDispose(n),t.promise)}catch(t){return a(t)}if(o instanceof e)return o._then(i,a,null,null,null)}i()}var s=0,l=t.length,u=new e(o);return i(),u}function u(t,e,n){this._data=t,this._promise=e,this._context=n}function p(t,e,n){this.constructor$(t,e,n)}function h(t){return u.isDisposer(t)?(this.resources[this.index]._setDisposable(t),t.promise()):t}function f(t){this.length=t,this.promise=null,this[t-1]=null}var _=t("./util"),d=t("./errors").TypeError,v=t("./util").inherits,y=_.errorObj,m=_.tryCatch,g={};u.prototype.data=function(){return this._data},u.prototype.promise=function(){return this._promise},u.prototype.resource=function(){return this.promise().isFulfilled()?this.promise().value():g},u.prototype.tryDispose=function(t){var e=this.resource(),n=this._context;void 0!==n&&n._pushContext();var r=e!==g?this.doDispose(e,t):null;return void 0!==n&&n._popContext(),this._promise._unsetDisposable(),this._data=null,r},u.isDisposer=function(t){return null!=t&&"function"==typeof t.resource&&"function"==typeof t.tryDispose},v(p,u),p.prototype.doDispose=function(t,e){return this.data().call(t,t,e)},f.prototype._resultCancelled=function(){for(var t=this.length,n=0;n<t;++n){var r=this[n];r instanceof e&&r.cancel()}},e.using=function(){var t=arguments.length;if(t<2)return n("you must pass at least 2 arguments to Promise.using");var i=arguments[t-1];if("function"!=typeof i)return n("expecting a function but got "+_.classString(i));var o,a=!0;2===t&&Array.isArray(arguments[0])?(t=(o=arguments[0]).length,a=!1):(o=arguments,t--);for(var c=new f(t),p=0;p<t;++p){var d=o[p];if(u.isDisposer(d)){var v=d;(d=d.promise())._setDisposable(v)}else{var g=r(d);g instanceof e&&(d=g._then(h,null,null,{resources:c,index:p},void 0))}c[p]=d}for(var b=new Array(c.length),p=0;p<b.length;++p)b[p]=e.resolve(c[p]).reflect();var w=e.all(b).then(function(t){for(var e=0;e<t.length;++e){var n=t[e];if(n.isRejected())return y.e=n.error(),y;if(!n.isFulfilled())return void w.cancel();t[e]=n.value()}C._pushContext(),i=m(i);var r=a?i.apply(void 0,t):i(t),o=C._popContext();return s.checkForgottenReturns(r,o,"Promise.using",C),r}),C=w.lastly(function(){var t=new e.PromiseInspection(w);return l(c,t)});return c.promise=C,C._setOnCancel(c),C},e.prototype._setDisposable=function(t){this._bitField=131072|this._bitField,this._disposer=t},e.prototype._isDisposable=function(){return(131072&this._bitField)>0},e.prototype._getDisposer=function(){return this._disposer},e.prototype._unsetDisposable=function(){this._bitField=-131073&this._bitField,this._disposer=void 0},e.prototype.disposer=function(t){if("function"==typeof t)return new p(t,this,i());throw new d}}},{"./errors":12,"./util":36}],36:[function(e,n,r){function i(){try{var t=S;return S=null,t.apply(this,arguments)}catch(t){return P.e=t,P}}function o(t){return S=t,i}function s(t){return null==t||!0===t||!1===t||"string"==typeof t||"number"==typeof t}function a(e){return"function"==typeof e||"object"===(void 0===e?"undefined":t(e))&&null!==e}function c(t){return s(t)?new Error(y(t)):t}function l(t,e){var n,r=t.length,i=new Array(r+1);for(n=0;n<r;++n)i[n]=t[n];return i[n]=e,i}function u(t,e,n){if(!x.isES5)return{}.hasOwnProperty.call(t,e)?t[e]:void 0;var r=Object.getOwnPropertyDescriptor(t,e);return null!=r?null==r.get&&null==r.set?r.value:n:void 0}function p(t,e,n){if(s(t))return t;var r={value:n,configurable:!0,enumerable:!1,writable:!0};return x.defineProperty(t,e,r),t}function h(t){throw t}function f(t){try{if("function"==typeof t){var e=x.names(t.prototype),n=x.isES5&&e.length>1,r=e.length>0&&!(1===e.length&&"constructor"===e[0]),i=D.test(t+"")&&x.names(t).length>0;if(n||r||i)return!0}return!1}catch(t){return!1}}function _(t){function e(){}e.prototype=t;for(var n=8;n--;)new e;return t}function d(t){return V.test(t)}function v(t,e,n){for(var r=new Array(t),i=0;i<t;++i)r[i]=e+i+n;return r}function y(t){try{return t+""}catch(t){return"[no string representation]"}}function m(e){return null!==e&&"object"===(void 0===e?"undefined":t(e))&&"string"==typeof e.message&&"string"==typeof e.name}function g(t){try{p(t,"isOperational",!0)}catch(t){}}function b(t){return null!=t&&(t instanceof Error.__BluebirdErrorTypes__.OperationalError||!0===t.isOperational)}function w(t){return m(t)&&x.propertyIsWritable(t,"stack")}function C(t){return{}.toString.call(t)}function j(t,e,n){for(var r=x.names(t),i=0;i<r.length;++i){var o=r[i];if(n(o))try{x.defineProperty(e,o,x.getDescriptor(t,o))}catch(t){}}}function k(t){return U?process.env[t]:void 0}function E(){if("function"==typeof Promise)try{var t=new Promise(function(){});if("[object Promise]"==={}.toString.call(t))return Promise}catch(t){}}function F(t,e){return t.bind(e)}var x=e("./es5"),T="undefined"==typeof navigator,P={e:{}},S,R="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:void 0!==this?this:null,O=function(t,e){function n(){this.constructor=t,this.constructor$=e;for(var n in e.prototype)r.call(e.prototype,n)&&"$"!==n.charAt(n.length-1)&&(this[n+"$"]=e.prototype[n])}var r={}.hasOwnProperty;return n.prototype=e.prototype,t.prototype=new n,t.prototype},A=function(){var t=[Array.prototype,Object.prototype,Function.prototype],e=function(e){for(var n=0;n<t.length;++n)if(t[n]===e)return!0;return!1};if(x.isES5){var n=Object.getOwnPropertyNames;return function(t){for(var r=[],i=Object.create(null);null!=t&&!e(t);){var o;try{o=n(t)}catch(t){return r}for(var s=0;s<o.length;++s){var a=o[s];if(!i[a]){i[a]=!0;var c=Object.getOwnPropertyDescriptor(t,a);null!=c&&null==c.get&&null==c.set&&r.push(a)}}t=x.getPrototypeOf(t)}return r}}var r={}.hasOwnProperty;return function(n){if(e(n))return[];var i=[];t:for(var o in n)if(r.call(n,o))i.push(o);else{for(var s=0;s<t.length;++s)if(r.call(t[s],o))continue t;i.push(o)}return i}}(),D=/this\s*\.\s*\S+\s*=/,V=/^[a-z$_][a-z$_0-9]*$/i,I="stack"in new Error?function(t){return w(t)?t:new Error(y(t))}:function(t){if(w(t))return t;try{throw new Error(y(t))}catch(t){return t}},L=function(t){return x.isArray(t)?t:null};if("undefined"!=typeof Symbol&&Symbol.iterator){var H="function"==typeof Array.from?function(t){return Array.from(t)}:function(t){for(var e,n=[],r=t[Symbol.iterator]();!(e=r.next()).done;)n.push(e.value);return n};L=function(t){return x.isArray(t)?t:null!=t&&"function"==typeof t[Symbol.iterator]?H(t):null}}var N="undefined"!=typeof process&&"[object process]"===C(process).toLowerCase(),U="undefined"!=typeof process&&void 0!==process.env,B={isClass:f,isIdentifier:d,inheritedDataKeys:A,getDataPropertyOrDefault:u,thrower:h,isArray:x.isArray,asArray:L,notEnumerableProp:p,isPrimitive:s,isObject:a,isError:m,canEvaluate:T,errorObj:P,tryCatch:o,inherits:O,withAppended:l,maybeWrapAsError:c,toFastProperties:_,filledRange:v,toString:y,canAttachTrace:w,ensureErrorObject:I,originatesFromRejection:b,markAsOriginatingFromRejection:g,classString:C,copyDescriptors:j,hasDevTools:"undefined"!=typeof chrome&&chrome&&"function"==typeof chrome.loadTimes,isNode:N,hasEnvVariables:U,env:k,global:R,getNativePromise:E,domainBind:F};B.isRecentNode=B.isNode&&function(){var t=process.versions.node.split(".").map(Number);return 0===t[0]&&t[1]>10||t[0]>0}(),B.isNode&&B.toFastProperties(process);try{throw new Error}catch(t){B.lastLineError=t}n.exports=B},{"./es5":13}]},{},[4])(4)}),"undefined"!=typeof window&&null!==window?window.P=window.Promise:"undefined"!=typeof self&&null!==self&&(self.P=self.Promise); 
 			}); 
		define("pages/util/prom.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var n=require("./bluebird.js");module.exports={wxPromisify:function(i){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new n(function(n,u){r.success=function(i){n(i)},r.fail=function(n){u(n)},i(r)})}}}; 
 			}); 
		define("pages/util/qqmap-wx-jssdk.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var e=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),o={KEY_ERR:311,KEY_ERR_MSG:"key格式错误",PARAM_ERR:310,PARAM_ERR_MSG:"请求参数信息有误",SYSTEM_ERR:600,SYSTEM_ERR_MSG:"系统错误",WX_ERR_CODE:1e3,WX_OK_CODE:200},i={location2query:function(t){if("string"==typeof t)return t;for(var e="",o=0;o<t.length;o++){var i=t[o];e&&(e+=";"),i.location&&(e=e+i.location.lat+","+i.location.lng),i.latitude&&i.longitude&&(e=e+i.latitude+","+i.longitude)}return e},getWXLocation:function(t,e,o){wx.getLocation({type:"gcj02",success:t,fail:e,complete:o})},getLocationParam:function(t){return"string"==typeof t&&(t=2===t.split(",").length?{latitude:t.split(",")[0],longitude:t.split(",")[1]}:{}),t},polyfillParam:function(t){t.success=t.success||function(){},t.fail=t.fail||function(){},t.complete=t.complete||function(){}},checkParamKeyEmpty:function(t,e){if(!t[e]){var i=this.buildErrorConfig(o.PARAM_ERR,o.PARAM_ERR_MSG+e+"参数格式有误");return t.fail(i),t.complete(i),!0}return!1},checkKeyword:function(t){return!this.checkParamKeyEmpty(t,"keyword")},checkLocation:function(t){var e=this.getLocationParam(t.location);if(!e||!e.latitude||!e.longitude){var i=this.buildErrorConfig(o.PARAM_ERR,o.PARAM_ERR_MSG+" location参数格式有误");return t.fail(i),t.complete(i),!1}return!0},buildErrorConfig:function(t,e){return{status:t,message:e}},buildWxRequestConfig:function(t,e){var i=this;return e.header={"content-type":"application/json"},e.method="GET",e.success=function(e){var o=e.data;0===o.status?t.success(o):t.fail(o)},e.fail=function(e){e.statusCode=o.WX_ERR_CODE,t.fail(i.buildErrorConfig(o.WX_ERR_CODE,result.errMsg))},e.complete=function(e){switch(+e.statusCode){case o.WX_ERR_CODE:t.complete(i.buildErrorConfig(o.WX_ERR_CODE,e.errMsg));break;case o.WX_OK_CODE:var r=e.data;0===r.status?t.complete(r):t.complete(i.buildErrorConfig(r.status,r.message));break;default:t.complete(i.buildErrorConfig(o.SYSTEM_ERR,o.SYSTEM_ERR_MSG))}},e},locationProcess:function(t,e,r,a){var n=this;r=r||function(e){e.statusCode=o.WX_ERR_CODE,t.fail(n.buildErrorConfig(o.WX_ERR_CODE,e.errMsg))},a=a||function(e){e.statusCode==o.WX_ERR_CODE&&t.complete(n.buildErrorConfig(o.WX_ERR_CODE,e.errMsg))},t.location?n.checkLocation(t)&&e(i.getLocationParam(t.location)):n.getWXLocation(e,r,a)}},r=function(){function o(e){if(t(this,o),!e.key)throw Error("key值不能为空");this.key=e.key}return e(o,[{key:"search",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),i.checkKeyword(t)){var o={keyword:t.keyword,orderby:t.orderby||"_distance",page_size:t.page_size||10,page_index:t.page_index||1,output:"json",key:e.key};t.address_format&&(o.address_format=t.address_format),t.filter&&(o.filter=t.filter);var r=t.distance||"1000",a=t.auto_extend||1;i.locationProcess(t,function(e){o.boundary="nearby("+e.latitude+","+e.longitude+","+r+","+a+")",wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/place/v1/search",data:o}))})}}},{key:"getSuggestion",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),i.checkKeyword(t)){var o={keyword:t.keyword,region:t.region||"全国",region_fix:t.region_fix||0,policy:t.policy||0,output:"json",key:e.key};wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/place/v1/suggestion",data:o}))}}},{key:"reverseGeocoder",value:function(t){var e=this;t=t||{},i.polyfillParam(t);var o={coord_type:t.coord_type||5,get_poi:t.get_poi||0,output:"json",key:e.key};t.poi_options&&(o.poi_options=t.poi_options);i.locationProcess(t,function(e){o.location=e.latitude+","+e.longitude,wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/geocoder/v1/",data:o}))})}},{key:"geocoder",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),!i.checkParamKeyEmpty(t,"address")){var o={address:t.address,output:"json",key:e.key};wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/geocoder/v1/",data:o}))}}},{key:"getCityList",value:function(t){var e=this;t=t||{},i.polyfillParam(t);var o={output:"json",key:e.key};wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/district/v1/list",data:o}))}},{key:"getDistrictByCityId",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),!i.checkParamKeyEmpty(t,"id")){var o={id:t.id||"",output:"json",key:e.key};wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/district/v1/getchildren",data:o}))}}},{key:"calculateDistance",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),!i.checkParamKeyEmpty(t,"to")){var o={mode:t.mode||"walking",to:i.location2query(t.to),output:"json",key:e.key};t.from&&(t.location=t.from),i.locationProcess(t,function(e){o.from=e.latitude+","+e.longitude,wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/distance/v1/",data:o}))})}}}]),o}();module.exports=r; 
 			}); 
		define("pages/util/qqmap-wx-jssdk.min.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var e=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),o={KEY_ERR:311,KEY_ERR_MSG:"key格式错误",PARAM_ERR:310,PARAM_ERR_MSG:"请求参数信息有误",SYSTEM_ERR:600,SYSTEM_ERR_MSG:"系统错误",WX_ERR_CODE:1e3,WX_OK_CODE:200},i={location2query:function(t){if("string"==typeof t)return t;for(var e="",o=0;o<t.length;o++){var i=t[o];e&&(e+=";"),i.location&&(e=e+i.location.lat+","+i.location.lng),i.latitude&&i.longitude&&(e=e+i.latitude+","+i.longitude)}return e},getWXLocation:function(t,e,o){wx.getLocation({type:"gcj02",success:t,fail:e,complete:o})},getLocationParam:function(t){return"string"==typeof t&&(t=2===t.split(",").length?{latitude:t.split(",")[0],longitude:t.split(",")[1]}:{}),t},polyfillParam:function(t){t.success=t.success||function(){},t.fail=t.fail||function(){},t.complete=t.complete||function(){}},checkParamKeyEmpty:function(t,e){if(!t[e]){var i=this.buildErrorConfig(o.PARAM_ERR,o.PARAM_ERR_MSG+e+"参数格式有误");return t.fail(i),t.complete(i),!0}return!1},checkKeyword:function(t){return!this.checkParamKeyEmpty(t,"keyword")},checkLocation:function(t){var e=this.getLocationParam(t.location);if(!e||!e.latitude||!e.longitude){var i=this.buildErrorConfig(o.PARAM_ERR,o.PARAM_ERR_MSG+" location参数格式有误");return t.fail(i),t.complete(i),!1}return!0},buildErrorConfig:function(t,e){return{status:t,message:e}},buildWxRequestConfig:function(t,e){var i=this;return e.header={"content-type":"application/json"},e.method="GET",e.success=function(e){var o=e.data;0===o.status?t.success(o):t.fail(o)},e.fail=function(e){e.statusCode=o.WX_ERR_CODE,t.fail(i.buildErrorConfig(o.WX_ERR_CODE,result.errMsg))},e.complete=function(e){switch(+e.statusCode){case o.WX_ERR_CODE:t.complete(i.buildErrorConfig(o.WX_ERR_CODE,e.errMsg));break;case o.WX_OK_CODE:var r=e.data;0===r.status?t.complete(r):t.complete(i.buildErrorConfig(r.status,r.message));break;default:t.complete(i.buildErrorConfig(o.SYSTEM_ERR,o.SYSTEM_ERR_MSG))}},e},locationProcess:function(t,e,r,a){var n=this;r=r||function(e){e.statusCode=o.WX_ERR_CODE,t.fail(n.buildErrorConfig(o.WX_ERR_CODE,e.errMsg))},a=a||function(e){e.statusCode==o.WX_ERR_CODE&&t.complete(n.buildErrorConfig(o.WX_ERR_CODE,e.errMsg))},t.location?n.checkLocation(t)&&e(i.getLocationParam(t.location)):n.getWXLocation(e,r,a)}},r=function(){function o(e){if(t(this,o),!e.key)throw Error("key值不能为空");this.key=e.key}return e(o,[{key:"search",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),i.checkKeyword(t)){var o={keyword:t.keyword,orderby:t.orderby||"_distance",page_size:t.page_size||10,page_index:t.page_index||1,output:"json",key:e.key};t.address_format&&(o.address_format=t.address_format),t.filter&&(o.filter=t.filter);var r=t.distance||"1000",a=t.auto_extend||1;i.locationProcess(t,function(e){o.boundary="nearby("+e.latitude+","+e.longitude+","+r+","+a+")",wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/place/v1/search",data:o}))})}}},{key:"getSuggestion",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),i.checkKeyword(t)){var o={keyword:t.keyword,region:t.region||"全国",region_fix:t.region_fix||0,policy:t.policy||0,output:"json",key:e.key};wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/place/v1/suggestion",data:o}))}}},{key:"reverseGeocoder",value:function(t){var e=this;t=t||{},i.polyfillParam(t);var o={coord_type:t.coord_type||5,get_poi:t.get_poi||0,output:"json",key:e.key};t.poi_options&&(o.poi_options=t.poi_options);i.locationProcess(t,function(e){o.location=e.latitude+","+e.longitude,wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/geocoder/v1/",data:o}))})}},{key:"geocoder",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),!i.checkParamKeyEmpty(t,"address")){var o={address:t.address,output:"json",key:e.key};wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/geocoder/v1/",data:o}))}}},{key:"getCityList",value:function(t){var e=this;t=t||{},i.polyfillParam(t);var o={output:"json",key:e.key};wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/district/v1/list",data:o}))}},{key:"getDistrictByCityId",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),!i.checkParamKeyEmpty(t,"id")){var o={id:t.id||"",output:"json",key:e.key};wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/district/v1/getchildren",data:o}))}}},{key:"calculateDistance",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),!i.checkParamKeyEmpty(t,"to")){var o={mode:t.mode||"walking",to:i.location2query(t.to),output:"json",key:e.key};t.from&&(t.location=t.from),i.locationProcess(t,function(e){o.from=e.latitude+","+e.longitude,wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/distance/v1/",data:o}))})}}}]),o}();module.exports=r; 
 			}); 
		define("pages/util/weixin-1.2.0.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}!function(e,n){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return n(e)}):n(e,!0)}(void 0,function(n,i){function t(e,i,t){n.WeixinJSBridge?WeixinJSBridge.invoke(e,r(i),function(n){s(e,n,t)}):l(e,t)}function o(e,i,t){n.WeixinJSBridge?WeixinJSBridge.on(e,function(n){t&&t.trigger&&t.trigger(n),s(e,n,i)}):t?l(e,t):l(e,i)}function r(e){return e=e||{},e.appId=L.appId,e.verifyAppId=L.appId,e.verifySignType="sha1",e.verifyTimestamp=L.timestamp+"",e.verifyNonceStr=L.nonceStr,e.verifySignature=L.signature,e}function a(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function c(e){return e.postalCoFde=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,n,i){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=d(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",L.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function d(e,n){var i=e,t=v[i];t&&(i=t);var o="ok";if(n){var r=n.indexOf(":");"confirm"==(o=n.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n=i+":"+o}function u(e){if(e){for(var n=0,i=e.length;n<i;++n){var t=e[n],o=S[t];o&&(e[n]=o)}return e}}function l(e,n){if(!(!L.debug||n&&n.isInnerInvoke)){var i=v[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function p(e){if(!(T||k||L.debug||V<"6.0.2"||A.systemType<0)){var n=new Image;A.appId=L.appId,A.initTime=P.initEndTime-P.initStartTime,A.preVerifyTime=P.preVerifyEndTime-P.preVerifyStartTime,E.getNetworkType({isInnerInvoke:!0,success:function(e){A.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+A.version+"&o="+A.isPreVerifyOk+"&s="+A.systemType+"&c="+A.clientVersion+"&a="+A.appId+"&n="+A.networkType+"&i="+A.initTime+"&p="+A.preVerifyTime+"&u="+A.url;n.src=i}})}}function f(){return(new Date).getTime()}function m(e){x&&(n.WeixinJSBridge?e():y.addEventListener&&y.addEventListener("WeixinJSBridgeReady",e,!1))}function g(){E.invoke||(E.invoke=function(e,i,t){n.WeixinJSBridge&&WeixinJSBridge.invoke(e,r(i),t)},E.on=function(e,i){n.WeixinJSBridge&&WeixinJSBridge.on(e,i)})}if(!n.jWeixin){var h,S={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var n in S)e[S[n]]=n;return e}(),y=n.document,I=y.title,_=navigator.userAgent.toLowerCase(),w=navigator.platform.toLowerCase(),T=!(!w.match("mac")&&!w.match("win")),k=-1!=_.indexOf("wxdebugger"),x=-1!=_.indexOf("micromessenger"),M=-1!=_.indexOf("android"),C=-1!=_.indexOf("iphone")||-1!=_.indexOf("ipad"),V=function(){var e=_.match(/micromessenger\/(\d+\.\d+\.\d+)/)||_.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),P={initStartTime:f(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},A={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:C?1:M?2:-1,clientVersion:V,url:encodeURIComponent(location.href)},L={},O={_completes:[]},b={state:0,data:{}};m(function(){P.initEndTime=f()});var B=!1,N=[],E=(h={config:function(e){L=e,l("config",e);var n=!1!==L.check;m(function(){if(n)t(S.config,{verifyJsApiList:u(L.jsApiList)},function(){O._complete=function(e){P.preVerifyEndTime=f(),b.state=1,b.data=e},O.success=function(e){A.isPreVerifyOk=0},O.fail=function(e){O._fail?O._fail(e):b.state=-1};var e=O._completes;return e.push(function(){p()}),O.complete=function(n){for(var i=0,t=e.length;i<t;++i)e[i]();O._completes=[]},O}()),P.preVerifyStartTime=f();else{b.state=1;for(var e=O._completes,i=0,o=e.length;i<o;++i)e[i]();O._completes=[]}}),L.beta&&g()},ready:function(e){0!=b.state?e():(O._completes.push(e),!x&&L.debug&&e())},error:function(e){V<"6.0.2"||(-1==b.state?e(b.data):O._fail=e)},checkJsApi:function(e){var n=function(e){var n=e.checkResult;for(var i in n){var t=v[i];t&&(n[t]=n[i],delete n[i])}return e};t("checkJsApi",{jsApiList:u(e.jsApiList)},(e._complete=function(e){if(M){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=n(e)},e))},onMenuShareTimeline:function(e){o(S.onMenuShareTimeline,{complete:function(){t("shareTimeline",{title:e.title||I,desc:e.title||I,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){o(S.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?t("sendAppMessage",{title:e.title||I,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):t("sendAppMessage",{title:e.title||I,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){o(S.onMenuShareQQ,{complete:function(){t("shareQQ",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){o(S.onMenuShareWeibo,{complete:function(){t("shareWeiboApp",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){o(S.onMenuShareQZone,{complete:function(){t("shareQZone",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){t("startRecord",{},e)},stopRecord:function(e){t("stopRecord",{},e)},onVoiceRecordEnd:function(e){o("onVoiceRecordEnd",e)},playVoice:function(e){t("playVoice",{localId:e.localId},e)},pauseVoice:function(e){t("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){t("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){o("onVoicePlayEnd",e)},uploadVoice:function(e){t("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){t("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){t("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){t("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(M){var n=e.localIds;n&&(e.localIds=JSON.parse(n))}},e))},getLocation:function(e){},previewImage:function(e){t(S.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){t("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){t("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===B?(B=!0,t("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(B=!1,N.length>0){var n=N.shift();wx.getLocalImgData(n)}},e))):N.push(e)},getNetworkType:function(e){var n=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),o=n.substring(t+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};t("getNetworkType",{},(e._complete=function(e){e=n(e)},e))},openLocation:function(e){t("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},e(h,"getLocation",function(e){e=e||{},t(S.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))}),e(h,"hideOptionMenu",function(e){t("hideOptionMenu",{},e)}),e(h,"showOptionMenu",function(e){t("showOptionMenu",{},e)}),e(h,"closeWindow",function(e){t("closeWindow",{},e=e||{})}),e(h,"hideMenuItems",function(e){t("hideMenuItems",{menuList:e.menuList},e)}),e(h,"showMenuItems",function(e){t("showMenuItems",{menuList:e.menuList},e)}),e(h,"hideAllNonBaseMenuItem",function(e){t("hideAllNonBaseMenuItem",{},e)}),e(h,"showAllNonBaseMenuItem",function(e){t("showAllNonBaseMenuItem",{},e)}),e(h,"scanQRCode",function(e){t("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(C){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))}),e(h,"openAddress",function(e){t(S.openAddress,{},(e._complete=function(e){e=c(e)},e))}),e(h,"openProductSpecificView",function(e){t(S.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)}),e(h,"addCard",function(e){for(var n=e.cardList,i=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,card_ext:a.cardExt};i.push(c)}t(S.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))}),e(h,"chooseCard",function(e){t("chooseCard",{app_id:L.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))}),e(h,"openCard",function(e){for(var n=e.cardList,i=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,code:a.code};i.push(c)}t(S.openCard,{card_list:i},e)}),e(h,"consumeAndShareCard",function(e){t(S.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)}),e(h,"chooseWXPay",function(e){t(S.chooseWXPay,a(e),e)}),e(h,"openEnterpriseRedPacket",function(e){t(S.openEnterpriseRedPacket,a(e),e)}),e(h,"startSearchBeacons",function(e){t(S.startSearchBeacons,{ticket:e.ticket},e)}),e(h,"stopSearchBeacons",function(e){t(S.stopSearchBeacons,{},e)}),e(h,"onSearchBeacons",function(e){o(S.onSearchBeacons,e)}),e(h,"openEnterpriseChat",function(e){t("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}),h),R=1,W={};return y.addEventListener("error",function(e){if(!M){var n=e.target,i=n.tagName,t=n.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=R++,n["wx-id"]=o),W[o])return;W[o]=!0,wx.ready(function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})})}}},!0),y.addEventListener("load",function(e){if(!M){var n=e.target,i=n.tagName;if(n.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(W[t]=!1)}}},!0),i&&(n.wx=n.jWeixin=E),E}}); 
 			}); 
		define("pages/wxParse/html2json.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){for(var t={},r=e.split(","),s=0;s<r.length;s++)t[r[s]]=!0;return t}function t(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<.*!doctype.*\>\n/,"").replace(/<.*!DOCTYPE.*\>\n/,"")}function r(e){return e.replace(/\r?\n+/g,"").replace(/<!--.*?-->/gi,"").replace(/\/\*.*?\*\//gi,"").replace(/[ ]+</gi,"<")}function s(e){var t=[];if(0==o.length||!i)return(d={}).node="text",d.text=e,s=[d];e=e.replace(/\[([^\[\]]+)\]/g,":$1:");for(var r=new RegExp("[:]"),s=e.split(r),n=0;n<s.length;n++){var l=s[n],d={};i[l]?(d.node="element",d.tag="emoji",d.text=i[l],d.baseSrc=a):(d.node="text",d.text=l),t.push(d)}return t}var n="https",o="",a="",i={},l=require("./wxDiscode.js"),d=require("./htmlparser.js"),c=(e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),e("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")),u=e("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),p=e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),e("wxxxcode-style,script,style,view,scroll-view,block");module.exports={html2json:function(e,o){e=r(e=t(e)),e=l.strDiscode(e);var a=[],i={node:o,nodes:[],images:[],imageUrls:[]},g=0;return d(e,{start:function(e,t,r){var s={node:"element",tag:e};if(0===a.length?(s.index=g.toString(),g+=1):(void 0===(x=a[0]).nodes&&(x.nodes=[]),s.index=x.index+"."+x.nodes.length),c[e]?s.tagType="block":u[e]?s.tagType="inline":p[e]&&(s.tagType="closeSelf"),0!==t.length&&(s.attr=t.reduce(function(e,t){var r=t.name,n=t.value;return"class"==r&&(console.log(n),s.classStr=n),"style"==r&&(console.log(n),s.styleStr=n),n.match(/ /)&&(n=n.split(" ")),e[r]?Array.isArray(e[r])?e[r].push(n):e[r]=[e[r],n]:e[r]=n,e},{})),"img"===s.tag){s.imgIndex=i.images.length;var d=s.attr.src;""==d[0]&&d.splice(0,1),d=l.urlToHttpUrl(d,n),s.attr.src=d,s.from=o,i.images.push(s),i.imageUrls.push(d)}if("font"===s.tag){var m=["x-small","small","medium","large","x-large","xx-large","-webkit-xxx-large"],f={color:"color",face:"font-family",size:"font-size"};s.attr.style||(s.attr.style=[]),s.styleStr||(s.styleStr="");for(var h in f)if(s.attr[h]){var v="size"===h?m[s.attr[h]-1]:s.attr[h];s.attr.style.push(f[h]),s.attr.style.push(v),s.styleStr+=f[h]+": "+v+";"}}if("source"===s.tag&&(i.source=s.attr.src),r){var x=a[0]||i;void 0===x.nodes&&(x.nodes=[]),x.nodes.push(s)}else a.unshift(s)},end:function(e){var t=a.shift();if(t.tag!==e&&console.error("invalid state: mismatch end tag"),"video"===t.tag&&i.source&&(t.attr.src=i.source,delete i.source),0===a.length)i.nodes.push(t);else{var r=a[0];void 0===r.nodes&&(r.nodes=[]),r.nodes.push(t)}},chars:function(e){var t={node:"text",text:e,textArray:s(e)};if(0===a.length)t.index=g.toString(),g+=1,i.nodes.push(t);else{var r=a[0];void 0===r.nodes&&(r.nodes=[]),t.index=r.index+"."+r.nodes.length,r.nodes.push(t)}},comment:function(e){}}),i},emojisInit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/wxParse/emojis/",r=arguments[2];o=e,a=t,i=r}}; 
 			}); 
		define("pages/wxParse/htmlparser.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){for(var t={},r=e.split(","),s=0;s<r.length;s++)t[r[s]]=!0;return t}var t=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,r=/^<\/([-A-Za-z0-9_]+)[^>]*>/,s=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,a=e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),n=e("a,address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),i=e("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),o=e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),l=e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),c=e("wxxxcode-style,script,style,view,scroll-view,block");module.exports=function(e,d){function f(e,t){if(t)for(t=t.toLowerCase(),r=b.length-1;r>=0&&b[r]!=t;r--);else var r=0;if(r>=0){for(var s=b.length-1;s>=r;s--)d.end&&d.end(b[s]);b.length=r}}var p,u,h,b=[],m=e;for(b.last=function(){return this[this.length-1]};e;){if(u=!0,b.last()&&c[b.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+b.last()+"[^>]*>"),function(e,t){return t=t.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),d.chars&&d.chars(t),""}),f(0,b.last());else if(0==e.indexOf("\x3c!--")?(p=e.indexOf("--\x3e"))>=0&&(d.comment&&d.comment(e.substring(4,p)),e=e.substring(p+3),u=!1):0==e.indexOf("</")?(h=e.match(r))&&(e=e.substring(h[0].length),h[0].replace(r,f),u=!1):0==e.indexOf("<")&&(h=e.match(t))&&(e=e.substring(h[0].length),h[0].replace(t,function(e,t,r,c){if(t=t.toLowerCase(),n[t])for(;b.last()&&i[b.last()];)f(0,b.last());if(o[t]&&b.last()==t&&f(0,t),(c=a[t]||!!c)||b.push(t),d.start){var p=[];r.replace(s,function(e,t){var r=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:l[t]?t:"";p.push({name:t,value:r,escaped:r.replace(/(^|[^\\])"/g,'$1\\"')})}),d.start&&d.start(t,p,c)}}),u=!1),u){p=e.indexOf("<");for(var g="";0===p;)g+="<",p=(e=e.substring(1)).indexOf("<");g+=p<0?e:e.substring(0,p),e=p<0?"":e.substring(p),d.chars&&d.chars(g)}if(e==m)throw"Parse Error: "+e;m=e}f()}; 
 			}); 
		define("pages/wxParse/showdown.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){var r={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Specify a prefix to generated header ids",type:"string"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,description:"Tries to smartly fix identation in es6 strings",type:"boolean"}};if(!1===e)return JSON.parse(JSON.stringify(r));var t={};for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n].defaultValue);return t}function r(e,r){var t=r?"Error in "+r+" extension->":"Error in unnamed extension",a={valid:!0,error:""};s.helper.isArray(e)||(e=[e]);for(var o=0;o<e.length;++o){var i=t+" sub-extension "+o+": ",l=e[o];if("object"!==(void 0===l?"undefined":n(l)))return a.valid=!1,a.error=i+"must be an object, but "+(void 0===l?"undefined":n(l))+" given",a;if(!s.helper.isString(l.type))return a.valid=!1,a.error=i+'property "type" must be a string, but '+n(l.type)+" given",a;var c=l.type=l.type.toLowerCase();if("language"===c&&(c=l.type="lang"),"html"===c&&(c=l.type="output"),"lang"!==c&&"output"!==c&&"listener"!==c)return a.valid=!1,a.error=i+"type "+c+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',a;if("listener"===c){if(s.helper.isUndefined(l.listeners))return a.valid=!1,a.error=i+'. Extensions of type "listener" must have a property called "listeners"',a}else if(s.helper.isUndefined(l.filter)&&s.helper.isUndefined(l.regex))return a.valid=!1,a.error=i+c+' extensions must define either a "regex" property or a "filter" method',a;if(l.listeners){if("object"!==n(l.listeners))return a.valid=!1,a.error=i+'"listeners" property must be an object but '+n(l.listeners)+" given",a;for(var u in l.listeners)if(l.listeners.hasOwnProperty(u)&&"function"!=typeof l.listeners[u])return a.valid=!1,a.error=i+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+u+" must be a function but "+n(l.listeners[u])+" given",a}if(l.filter){if("function"!=typeof l.filter)return a.valid=!1,a.error=i+'"filter" must be a function, but '+n(l.filter)+" given",a}else if(l.regex){if(s.helper.isString(l.regex)&&(l.regex=new RegExp(l.regex,"g")),!l.regex instanceof RegExp)return a.valid=!1,a.error=i+'"regex" property must either be a string or a RegExp object, but '+n(l.regex)+" given",a;if(s.helper.isUndefined(l.replace))return a.valid=!1,a.error=i+'"regex" extensions must implement a replace string or function',a}}return a}function t(e,r){return"~E"+r.charCodeAt(0)+"E"}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s={},a={},o={},i=e(!0),l={github:{omitExtraWLInCodeBlocks:!0,prefixHeaderId:"user-content-",simplifiedAutoLink:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0},vanilla:e(!0)};s.helper={},s.extensions={},s.setOption=function(e,r){return i[e]=r,this},s.getOption=function(e){return i[e]},s.getOptions=function(){return i},s.resetOptions=function(){i=e(!0)},s.setFlavor=function(e){if(l.hasOwnProperty(e)){var r=l[e];for(var t in r)r.hasOwnProperty(t)&&(i[t]=r[t])}},s.getDefaultOptions=function(r){return e(r)},s.subParser=function(e,r){if(s.helper.isString(e)){if(void 0===r){if(a.hasOwnProperty(e))return a[e];throw Error("SubParser named "+e+" not registered!")}a[e]=r}},s.extension=function(e,t){if(!s.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=s.helper.stdExtName(e),s.helper.isUndefined(t)){if(!o.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return o[e]}"function"==typeof t&&(t=t()),s.helper.isArray(t)||(t=[t]);var n=r(t,e);if(!n.valid)throw Error(n.error);o[e]=t},s.getAllExtensions=function(){return o},s.removeExtension=function(e){delete o[e]},s.resetExtensions=function(){o={}},s.validateExtension=function(e){var t=r(e,null);return!!t.valid||(console.warn(t.error),!1)},s.hasOwnProperty("helper")||(s.helper={}),s.helper.isString=function(e){return"string"==typeof e||e instanceof String},s.helper.isFunction=function(e){var r={};return e&&"[object Function]"===r.toString.call(e)},s.helper.forEach=function(e,r){if("function"==typeof e.forEach)e.forEach(r);else for(var t=0;t<e.length;t++)r(e[t],t,e)},s.helper.isArray=function(e){return e.constructor===Array},s.helper.isUndefined=function(e){return void 0===e},s.helper.stdExtName=function(e){return e.replace(/[_-]||\s/g,"").toLowerCase()},s.helper.escapeCharactersCallback=t,s.helper.escapeCharacters=function(e,r,n){var s="(["+r.replace(/([\[\]\\])/g,"\\$1")+"])";n&&(s="\\\\"+s);var a=new RegExp(s,"g");return e=e.replace(a,t)};var c=function(e,r,t,n){var s,a,o,i,l,c=n||"",u=c.indexOf("g")>-1,p=new RegExp(r+"|"+t,"g"+c.replace(/g/g,"")),h=new RegExp(r,c.replace(/g/g,"")),d=[];do{for(s=0;o=p.exec(e);)if(h.test(o[0]))s++||(i=(a=p.lastIndex)-o[0].length);else if(s&&!--s){l=o.index+o[0].length;var f={left:{start:i,end:a},match:{start:a,end:o.index},right:{start:o.index,end:l},wholeMatch:{start:i,end:l}};if(d.push(f),!u)return d}}while(s&&(p.lastIndex=a));return d};s.helper.matchRecursiveRegExp=function(e,r,t,n){for(var s=c(e,r,t,n),a=[],o=0;o<s.length;++o)a.push([e.slice(s[o].wholeMatch.start,s[o].wholeMatch.end),e.slice(s[o].match.start,s[o].match.end),e.slice(s[o].left.start,s[o].left.end),e.slice(s[o].right.start,s[o].right.end)]);return a},s.helper.replaceRecursiveRegExp=function(e,r,t,n,a){if(!s.helper.isFunction(r)){var o=r;r=function(){return o}}var i=c(e,t,n,a),l=e,u=i.length;if(u>0){var p=[];0!==i[0].wholeMatch.start&&p.push(e.slice(0,i[0].wholeMatch.start));for(var h=0;h<u;++h)p.push(r(e.slice(i[h].wholeMatch.start,i[h].wholeMatch.end),e.slice(i[h].match.start,i[h].match.end),e.slice(i[h].left.start,i[h].left.end),e.slice(i[h].right.start,i[h].right.end))),h<u-1&&p.push(e.slice(i[h].wholeMatch.end,i[h+1].wholeMatch.start));i[u-1].wholeMatch.end<e.length&&p.push(e.slice(i[u-1].wholeMatch.end)),l=p.join("")}return l},s.helper.isUndefined(console)&&(console={warn:function(e){alert(e)},log:function(e){alert(e)},error:function(e){throw e}}),s.Converter=function(e){function t(e,t){if(t=t||null,s.helper.isString(e)){if(e=s.helper.stdExtName(e),t=e,s.extensions[e])return console.warn("DEPRECATION WARNING: "+e+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void a(s.extensions[e],e);if(s.helper.isUndefined(o[e]))throw Error('Extension "'+e+'" could not be loaded. It was either not found or is not a valid extension.');e=o[e]}"function"==typeof e&&(e=e()),s.helper.isArray(e)||(e=[e]);var n=r(e,t);if(!n.valid)throw Error(n.error);for(var i=0;i<e.length;++i){switch(e[i].type){case"lang":h.push(e[i]);break;case"output":d.push(e[i])}if(e[i].hasOwnProperty(f))for(var l in e[i].listeners)e[i].listeners.hasOwnProperty(l)&&c(l,e[i].listeners[l])}}function a(e,t){"function"==typeof e&&(e=e(new s.Converter)),s.helper.isArray(e)||(e=[e]);var n=r(e,t);if(!n.valid)throw Error(n.error);for(var a=0;a<e.length;++a)switch(e[a].type){case"lang":h.push(e[a]);break;case"output":d.push(e[a]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function c(e,r){if(!s.helper.isString(e))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+(void 0===e?"undefined":n(e))+" given");if("function"!=typeof r)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+(void 0===r?"undefined":n(r))+" given");f.hasOwnProperty(e)||(f[e]=[]),f[e].push(r)}function u(e){var r=e.match(/^\s*/)[0].length,t=new RegExp("^\\s{0,"+r+"}","gm");return e.replace(t,"")}var p={},h=[],d=[],f={};!function(){e=e||{};for(var r in i)i.hasOwnProperty(r)&&(p[r]=i[r]);if("object"!==(void 0===e?"undefined":n(e)))throw Error("Converter expects the passed parameter to be an object, but "+(void 0===e?"undefined":n(e))+" was passed instead.");for(var a in e)e.hasOwnProperty(a)&&(p[a]=e[a]);p.extensions&&s.helper.forEach(p.extensions,t)}(),this._dispatch=function(e,r,t,n){if(f.hasOwnProperty(e))for(var s=0;s<f[e].length;++s){var a=f[e][s](e,r,this,t,n);a&&void 0!==a&&(r=a)}return r},this.listen=function(e,r){return c(e,r),this},this.makeHtml=function(e){if(!e)return e;var r={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:h,outputModifiers:d,converter:this,ghCodeBlocks:[]};return e=e.replace(/~/g,"~T"),e=e.replace(/\$/g,"~D"),e=e.replace(/\r\n/g,"\n"),e=e.replace(/\r/g,"\n"),p.smartIndentationFix&&(e=u(e)),e=e,e=s.subParser("detab")(e,p,r),e=s.subParser("stripBlankLines")(e,p,r),s.helper.forEach(h,function(t){e=s.subParser("runExtension")(t,e,p,r)}),e=s.subParser("hashPreCodeTags")(e,p,r),e=s.subParser("githubCodeBlocks")(e,p,r),e=s.subParser("hashHTMLBlocks")(e,p,r),e=s.subParser("hashHTMLSpans")(e,p,r),e=s.subParser("stripLinkDefinitions")(e,p,r),e=s.subParser("blockGamut")(e,p,r),e=s.subParser("unhashHTMLSpans")(e,p,r),e=s.subParser("unescapeSpecialChars")(e,p,r),e=e.replace(/~D/g,"$$"),e=e.replace(/~T/g,"~"),s.helper.forEach(d,function(t){e=s.subParser("runExtension")(t,e,p,r)}),e},this.setOption=function(e,r){p[e]=r},this.getOption=function(e){return p[e]},this.getOptions=function(){return p},this.addExtension=function(e,r){t(e,r=r||null)},this.useExtension=function(e){t(e)},this.setFlavor=function(e){if(l.hasOwnProperty(e)){var r=l[e];for(var t in r)r.hasOwnProperty(t)&&(p[t]=r[t])}},this.removeExtension=function(e){s.helper.isArray(e)||(e=[e]);for(var r=0;r<e.length;++r){for(var t=e[r],n=0;n<h.length;++n)h[n]===t&&h[n].splice(n,1);for(;0<d.length;++n)d[0]===t&&d[0].splice(n,1)}},this.getAllExtensions=function(){return{language:h,output:d}}},s.subParser("anchors",function(e,r,t){var n=function(e,r,n,a,o,i,l,c){s.helper.isUndefined(c)&&(c=""),e=r;var u=n,p=a.toLowerCase(),h=o,d=c;if(!h)if(p||(p=u.toLowerCase().replace(/ ?\n/g," ")),h="#"+p,s.helper.isUndefined(t.gUrls[p])){if(!(e.search(/\(\s*\)$/m)>-1))return e;h=""}else h=t.gUrls[p],s.helper.isUndefined(t.gTitles[p])||(d=t.gTitles[p]);var f='<a href="'+(h=s.helper.escapeCharacters(h,"*_",!1))+'"';return""!==d&&null!==d&&(d=d.replace(/"/g,"&quot;"),f+=' title="'+(d=s.helper.escapeCharacters(d,"*_",!1))+'"'),f+=">"+u+"</a>"};return e=(e=t.converter._dispatch("anchors.before",e,r,t)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g,n),e=e.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,n),e=e.replace(/(\[([^\[\]]+)])()()()()()/g,n),e=t.converter._dispatch("anchors.after",e,r,t)}),s.subParser("autoLinks",function(e,r,t){function n(e,r){var t=r;return/^www\./i.test(r)&&(r=r.replace(/^www\./i,"http://www.")),'<a href="'+r+'">'+t+"</a>"}function a(e,r){var t=s.subParser("unescapeSpecialChars")(r);return s.subParser("encodeEmailAddress")(t)}var o=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/gi,i=/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi,l=/(?:^|[ \n\t])([A-Za-z0-9!#$%&'*+-/=?^_`\{|}~\.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?:$|[ \n\t])/gi,c=/<(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;return e=(e=t.converter._dispatch("autoLinks.before",e,r,t)).replace(i,n),e=e.replace(c,a),r.simplifiedAutoLink&&(e=(e=e.replace(o,n)).replace(l,a)),e=t.converter._dispatch("autoLinks.after",e,r,t)}),s.subParser("blockGamut",function(e,r,t){e=t.converter._dispatch("blockGamut.before",e,r,t),e=s.subParser("blockQuotes")(e,r,t),e=s.subParser("headers")(e,r,t);var n=s.subParser("hashBlock")("<hr />",r,t);return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,n),e=e.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,n),e=e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,n),e=s.subParser("lists")(e,r,t),e=s.subParser("codeBlocks")(e,r,t),e=s.subParser("tables")(e,r,t),e=s.subParser("hashHTMLBlocks")(e,r,t),e=s.subParser("paragraphs")(e,r,t),e=t.converter._dispatch("blockGamut.after",e,r,t)}),s.subParser("blockQuotes",function(e,r,t){return e=t.converter._dispatch("blockQuotes.before",e,r,t),e=e.replace(/((^[ \t]{0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(e,n){var a=n;return a=a.replace(/^[ \t]*>[ \t]?/gm,"~0"),a=a.replace(/~0/g,""),a=a.replace(/^[ \t]+$/gm,""),a=s.subParser("githubCodeBlocks")(a,r,t),a=s.subParser("blockGamut")(a,r,t),a=a.replace(/(^|\n)/g,"$1  "),a=a.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,r){var t=r;return t=t.replace(/^  /gm,"~0"),t=t.replace(/~0/g,"")}),s.subParser("hashBlock")("<blockquote>\n"+a+"\n</blockquote>",r,t)}),e=t.converter._dispatch("blockQuotes.after",e,r,t)}),s.subParser("codeBlocks",function(e,r,t){e=t.converter._dispatch("codeBlocks.before",e,r,t);var n=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g;return e=(e+="~0").replace(n,function(e,n,a){var o=n,i=a,l="\n";return o=s.subParser("outdent")(o),o=s.subParser("encodeCode")(o),o=s.subParser("detab")(o),o=o.replace(/^\n+/g,""),o=o.replace(/\n+$/g,""),r.omitExtraWLInCodeBlocks&&(l=""),o="<pre><code>"+o+l+"</code></pre>",s.subParser("hashBlock")(o,r,t)+i}),e=e.replace(/~0/,""),e=t.converter._dispatch("codeBlocks.after",e,r,t)}),s.subParser("codeSpans",function(e,r,t){return void 0===(e=t.converter._dispatch("codeSpans.before",e,r,t))&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,r,t,n){var a=n;return a=a.replace(/^([ \t]*)/g,""),a=a.replace(/[ \t]*$/g,""),a=s.subParser("encodeCode")(a),r+"<code>"+a+"</code>"}),e=t.converter._dispatch("codeSpans.after",e,r,t)}),s.subParser("detab",function(e){return e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"~A~B"),e=e.replace(/~B(.+?)~A/g,function(e,r){for(var t=r,n=4-t.length%4,s=0;s<n;s++)t+=" ";return t}),e=e.replace(/~A/g,"    "),e=e.replace(/~B/g,"")}),s.subParser("encodeAmpsAndAngles",function(e){return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?\$!])/gi,"&lt;")}),s.subParser("encodeBackslashEscapes",function(e){return e=e.replace(/\\(\\)/g,s.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,s.helper.escapeCharactersCallback)}),s.subParser("encodeCode",function(e){return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=s.helper.escapeCharacters(e,"*_{}[]\\",!1)}),s.subParser("encodeEmailAddress",function(e){var r=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}];return e="mailto:"+e,e=e.replace(/./g,function(e){if("@"===e)e=r[Math.floor(2*Math.random())](e);else if(":"!==e){var t=Math.random();e=t>.9?r[2](e):t>.45?r[1](e):r[0](e)}return e}),e='<a href="'+e+'">'+e+"</a>",e=e.replace(/">.+:/g,'">')}),s.subParser("escapeSpecialCharsWithinTagAttributes",function(e){var r=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return e=e.replace(r,function(e){var r=e.replace(/(.)<\/?code>(?=.)/g,"$1`");return r=s.helper.escapeCharacters(r,"\\`*_",!1)})}),s.subParser("githubCodeBlocks",function(e,r,t){return r.ghCodeBlocks?(e=t.converter._dispatch("githubCodeBlocks.before",e,r,t),e+="~0",e=e.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(e,n,a){var o=r.omitExtraWLInCodeBlocks?"":"\n";return a=s.subParser("encodeCode")(a),a=s.subParser("detab")(a),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),a="<pre><code"+(n?' class="'+n+" language-"+n+'"':"")+">"+a+o+"</code></pre>",a=s.subParser("hashBlock")(a,r,t),"\n\n~G"+(t.ghCodeBlocks.push({text:e,codeblock:a})-1)+"G\n\n"}),e=e.replace(/~0/,""),t.converter._dispatch("githubCodeBlocks.after",e,r,t)):e}),s.subParser("hashBlock",function(e,r,t){return e=e.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n"}),s.subParser("hashElement",function(e,r,t){return function(e,r){var n=r;return n=n.replace(/\n\n/g,"\n"),n=n.replace(/^\n/,""),n=n.replace(/\n+$/g,""),n="\n\n~K"+(t.gHtmlBlocks.push(n)-1)+"K\n\n"}}),s.subParser("hashHTMLBlocks",function(e,r,t){for(var n=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],a=0;a<n.length;++a)e=s.helper.replaceRecursiveRegExp(e,function(e,r,n,s){var a=e;return-1!==n.search(/\bmarkdown\b/)&&(a=n+t.converter.makeHtml(r)+s),"\n\n~K"+(t.gHtmlBlocks.push(a)-1)+"K\n\n"},"^(?: |\\t){0,3}<"+n[a]+"\\b[^>]*>","</"+n[a]+">","gim");return e=e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,s.subParser("hashElement")(e,r,t)),e=e.replace(/(<!--[\s\S]*?-->)/g,s.subParser("hashElement")(e,r,t)),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,s.subParser("hashElement")(e,r,t))}),s.subParser("hashHTMLSpans",function(e,r,t){for(var n=s.helper.matchRecursiveRegExp(e,"<code\\b[^>]*>","</code>","gi"),a=0;a<n.length;++a)e=e.replace(n[a][0],"~L"+(t.gHtmlSpans.push(n[a][0])-1)+"L");return e}),s.subParser("unhashHTMLSpans",function(e,r,t){for(var n=0;n<t.gHtmlSpans.length;++n)e=e.replace("~L"+n+"L",t.gHtmlSpans[n]);return e}),s.subParser("hashPreCodeTags",function(e,r,t){return e=s.helper.replaceRecursiveRegExp(e,function(e,r,n,a){var o=n+s.subParser("encodeCode")(r)+a;return"\n\n~G"+(t.ghCodeBlocks.push({text:e,codeblock:o})-1)+"G\n\n"},"^(?: |\\t){0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^(?: |\\t){0,3}</code>\\s*</pre>","gim")}),s.subParser("headers",function(e,r,t){function n(e){var r,n=e.replace(/[^\w]/g,"").toLowerCase();return t.hashLinkCounts[n]?r=n+"-"+t.hashLinkCounts[n]++:(r=n,t.hashLinkCounts[n]=1),!0===a&&(a="section"),s.helper.isString(a)?a+r:r}e=t.converter._dispatch("headers.before",e,r,t);var a=r.prefixHeaderId,o=isNaN(parseInt(r.headerLevelStart))?1:parseInt(r.headerLevelStart),i=r.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,l=r.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;return e=e.replace(i,function(e,a){var i=s.subParser("spanGamut")(a,r,t),l=r.noHeaderId?"":' id="'+n(a)+'"',c=o,u="<h"+c+l+">"+i+"</h"+c+">";return s.subParser("hashBlock")(u,r,t)}),e=e.replace(l,function(e,a){var i=s.subParser("spanGamut")(a,r,t),l=r.noHeaderId?"":' id="'+n(a)+'"',c=o+1,u="<h"+c+l+">"+i+"</h"+c+">";return s.subParser("hashBlock")(u,r,t)}),e=e.replace(/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm,function(e,a,i){var l=s.subParser("spanGamut")(i,r,t),c=r.noHeaderId?"":' id="'+n(i)+'"',u=o-1+a.length,p="<h"+u+c+">"+l+"</h"+u+">";return s.subParser("hashBlock")(p,r,t)}),e=t.converter._dispatch("headers.after",e,r,t)}),s.subParser("images",function(e,r,t){function n(e,r,n,a,o,i,l,c){var u=t.gUrls,p=t.gTitles,h=t.gDimensions;if(n=n.toLowerCase(),c||(c=""),""===a||null===a){if(""!==n&&null!==n||(n=r.toLowerCase().replace(/ ?\n/g," ")),a="#"+n,s.helper.isUndefined(u[n]))return e;a=u[n],s.helper.isUndefined(p[n])||(c=p[n]),s.helper.isUndefined(h[n])||(o=h[n].width,i=h[n].height)}r=r.replace(/"/g,"&quot;"),r=s.helper.escapeCharacters(r,"*_",!1);var d='<img src="'+(a=s.helper.escapeCharacters(a,"*_",!1))+'" alt="'+r+'"';return c&&(c=c.replace(/"/g,"&quot;"),d+=' title="'+(c=s.helper.escapeCharacters(c,"*_",!1))+'"'),o&&i&&(d+=' width="'+(o="*"===o?"auto":o)+'"',d+=' height="'+(i="*"===i?"auto":i)+'"'),d+=" />"}var a=/!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g,o=/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g;return e=(e=t.converter._dispatch("images.before",e,r,t)).replace(o,n),e=e.replace(a,n),e=t.converter._dispatch("images.after",e,r,t)}),s.subParser("italicsAndBold",function(e,r,t){return e=t.converter._dispatch("italicsAndBold.before",e,r,t),e=r.literalMidWordUnderscores?(e=(e=(e=e.replace(/(^|\s|>|\b)__(?=\S)([\s\S]+?)__(?=\b|<|\s|$)/gm,"$1<strong>$2</strong>")).replace(/(^|\s|>|\b)_(?=\S)([\s\S]+?)_(?=\b|<|\s|$)/gm,"$1<em>$2</em>")).replace(/(\*\*)(?=\S)([^\r]*?\S[*]*)\1/g,"<strong>$2</strong>")).replace(/(\*)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"):(e=e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>")).replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"),e=t.converter._dispatch("italicsAndBold.after",e,r,t)}),s.subParser("lists",function(e,r,t){function n(e,n){t.gListLevel++,e=e.replace(/\n{2,}$/,"\n"),e+="~0";var a=/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,o=/\n[ \t]*\n(?!~0)/.test(e);return e=e.replace(a,function(e,n,a,i,l,c,u){u=u&&""!==u.trim();var p=s.subParser("outdent")(l,r,t),h="";return c&&r.tasklists&&(h=' class="task-list-item" style="list-style-type: none;"',p=p.replace(/^[ \t]*\[(x|X| )?]/m,function(){var e='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return u&&(e+=" checked"),e+=">"})),n||p.search(/\n{2,}/)>-1?(p=s.subParser("githubCodeBlocks")(p,r,t),p=s.subParser("blockGamut")(p,r,t)):(p=(p=s.subParser("lists")(p,r,t)).replace(/\n$/,""),p=o?s.subParser("paragraphs")(p,r,t):s.subParser("spanGamut")(p,r,t)),p="\n<li"+h+">"+p+"</li>\n"}),e=e.replace(/~0/g,""),t.gListLevel--,n&&(e=e.replace(/\s+$/,"")),e}function a(e,r,t){var s="ul"===r?/^ {0,2}\d+\.[ \t]/gm:/^ {0,2}[*+-][ \t]/gm,a=[],o="";if(-1!==e.search(s)){!function e(a){var i=a.search(s);-1!==i?(o+="\n\n<"+r+">"+n(a.slice(0,i),!!t)+"</"+r+">\n\n",s="ul"===(r="ul"===r?"ol":"ul")?/^ {0,2}\d+\.[ \t]/gm:/^ {0,2}[*+-][ \t]/gm,e(a.slice(i))):o+="\n\n<"+r+">"+n(a,!!t)+"</"+r+">\n\n"}(e);for(var i=0;i<a.length;++i);}else o="\n\n<"+r+">"+n(e,!!t)+"</"+r+">\n\n";return o}e=t.converter._dispatch("lists.before",e,r,t),e+="~0";var o=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return t.gListLevel?e=e.replace(o,function(e,r,t){return a(r,t.search(/[*+-]/g)>-1?"ul":"ol",!0)}):(o=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,e=e.replace(o,function(e,r,t,n){return a(t,n.search(/[*+-]/g)>-1?"ul":"ol")})),e=e.replace(/~0/,""),e=t.converter._dispatch("lists.after",e,r,t)}),s.subParser("outdent",function(e){return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,"")}),s.subParser("paragraphs",function(e,r,t){for(var n=(e=(e=(e=t.converter._dispatch("paragraphs.before",e,r,t)).replace(/^\n+/g,"")).replace(/\n+$/g,"")).split(/\n{2,}/g),a=[],o=n.length,i=0;i<o;i++){var l=n[i];l.search(/~(K|G)(\d+)\1/g)>=0?a.push(l):(l=(l=s.subParser("spanGamut")(l,r,t)).replace(/^([ \t]*)/g,"<p>"),l+="</p>",a.push(l))}for(o=a.length,i=0;i<o;i++){for(var c="",u=a[i],p=!1;u.search(/~(K|G)(\d+)\1/)>=0;){var h=RegExp.$1,d=RegExp.$2;c=(c="K"===h?t.gHtmlBlocks[d]:p?s.subParser("encodeCode")(t.ghCodeBlocks[d].text):t.ghCodeBlocks[d].codeblock).replace(/\$/g,"$$$$"),u=u.replace(/(\n\n)?~(K|G)\d+\2(\n\n)?/,c),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u)&&(p=!0)}a[i]=u}return e=a.join("\n\n"),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),t.converter._dispatch("paragraphs.after",e,r,t)}),s.subParser("runExtension",function(e,r,t,n){if(e.filter)r=e.filter(r,n.converter,t);else if(e.regex){var s=e.regex;!s instanceof RegExp&&(s=new RegExp(s,"g")),r=r.replace(s,e.replace)}return r}),s.subParser("spanGamut",function(e,r,t){return e=t.converter._dispatch("spanGamut.before",e,r,t),e=s.subParser("codeSpans")(e,r,t),e=s.subParser("escapeSpecialCharsWithinTagAttributes")(e,r,t),e=s.subParser("encodeBackslashEscapes")(e,r,t),e=s.subParser("images")(e,r,t),e=s.subParser("anchors")(e,r,t),e=s.subParser("autoLinks")(e,r,t),e=s.subParser("encodeAmpsAndAngles")(e,r,t),e=s.subParser("italicsAndBold")(e,r,t),e=s.subParser("strikethrough")(e,r,t),e=e.replace(/  +\n/g," <br />\n"),e=t.converter._dispatch("spanGamut.after",e,r,t)}),s.subParser("strikethrough",function(e,r,t){return r.strikethrough&&(e=(e=t.converter._dispatch("strikethrough.before",e,r,t)).replace(/(?:~T){2}([\s\S]+?)(?:~T){2}/g,"<del>$1</del>"),e=t.converter._dispatch("strikethrough.after",e,r,t)),e}),s.subParser("stripBlankLines",function(e){return e.replace(/^[ \t]+$/gm,"")}),s.subParser("stripLinkDefinitions",function(e,r,t){var n=/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=~0))/gm;return e+="~0",e=e.replace(n,function(e,n,a,o,i,l,c){return n=n.toLowerCase(),t.gUrls[n]=s.subParser("encodeAmpsAndAngles")(a),l?l+c:(c&&(t.gTitles[n]=c.replace(/"|'/g,"&quot;")),r.parseImgDimensions&&o&&i&&(t.gDimensions[n]={width:o,height:i}),"")}),e=e.replace(/~0/,"")}),s.subParser("tables",function(e,r,t){function n(e){return/^:[ \t]*--*$/.test(e)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(e)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(e)?' style="text-align:center;"':""}function a(e,n){var a="";return e=e.trim(),r.tableHeaderId&&(a=' id="'+e.replace(/ /g,"_").toLowerCase()+'"'),e=s.subParser("spanGamut")(e,r,t),"<th"+a+n+">"+e+"</th>\n"}function o(e,n){return"<td"+n+">"+s.subParser("spanGamut")(e,r,t)+"</td>\n"}function i(e,r){for(var t="<table>\n<thead>\n<tr>\n",n=e.length,s=0;s<n;++s)t+=e[s];for(t+="</tr>\n</thead>\n<tbody>\n",s=0;s<r.length;++s){t+="<tr>\n";for(var a=0;a<n;++a)t+=r[s][a];t+="</tr>\n"}return t+="</tbody>\n</table>\n"}if(!r.tables)return e;var l=/^[ \t]{0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm;return e=t.converter._dispatch("tables.before",e,r,t),e=e.replace(l,function(e){var r,t=e.split("\n");for(r=0;r<t.length;++r)/^[ \t]{0,3}\|/.test(t[r])&&(t[r]=t[r].replace(/^[ \t]{0,3}\|/,"")),/\|[ \t]*$/.test(t[r])&&(t[r]=t[r].replace(/\|[ \t]*$/,""));var l=t[0].split("|").map(function(e){return e.trim()}),c=t[1].split("|").map(function(e){return e.trim()}),u=[],p=[],h=[],d=[];for(t.shift(),t.shift(),r=0;r<t.length;++r)""!==t[r].trim()&&u.push(t[r].split("|").map(function(e){return e.trim()}));if(l.length<c.length)return e;for(r=0;r<c.length;++r)h.push(n(c[r]));for(r=0;r<l.length;++r)s.helper.isUndefined(h[r])&&(h[r]=""),p.push(a(l[r],h[r]));for(r=0;r<u.length;++r){for(var f=[],g=0;g<p.length;++g)s.helper.isUndefined(u[r][g]),f.push(o(u[r][g],h[g]));d.push(f)}return i(p,d)}),e=t.converter._dispatch("tables.after",e,r,t)}),s.subParser("unescapeSpecialChars",function(e){return e=e.replace(/~E(\d+)E/g,function(e,r){var t=parseInt(r);return String.fromCharCode(t)})}),module.exports=s; 
 			}); 
		define("pages/wxParse/wxDiscode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e=e.replace(/&forall;/g,"∀"),e=e.replace(/&part;/g,"∂"),e=e.replace(/&exists;/g,"∃"),e=e.replace(/&empty;/g,"∅"),e=e.replace(/&nabla;/g,"∇"),e=e.replace(/&isin;/g,"∈"),e=e.replace(/&notin;/g,"∉"),e=e.replace(/&ni;/g,"∋"),e=e.replace(/&prod;/g,"∏"),e=e.replace(/&sum;/g,"∑"),e=e.replace(/&minus;/g,"−"),e=e.replace(/&lowast;/g,"∗"),e=e.replace(/&radic;/g,"√"),e=e.replace(/&prop;/g,"∝"),e=e.replace(/&infin;/g,"∞"),e=e.replace(/&ang;/g,"∠"),e=e.replace(/&and;/g,"∧"),e=e.replace(/&or;/g,"∨"),e=e.replace(/&cap;/g,"∩"),e=e.replace(/&cap;/g,"∪"),e=e.replace(/&int;/g,"∫"),e=e.replace(/&there4;/g,"∴"),e=e.replace(/&sim;/g,"∼"),e=e.replace(/&cong;/g,"≅"),e=e.replace(/&asymp;/g,"≈"),e=e.replace(/&ne;/g,"≠"),e=e.replace(/&le;/g,"≤"),e=e.replace(/&ge;/g,"≥"),e=e.replace(/&sub;/g,"⊂"),e=e.replace(/&sup;/g,"⊃"),e=e.replace(/&nsub;/g,"⊄"),e=e.replace(/&sube;/g,"⊆"),e=e.replace(/&supe;/g,"⊇"),e=e.replace(/&oplus;/g,"⊕"),e=e.replace(/&otimes;/g,"⊗"),e=e.replace(/&perp;/g,"⊥"),e=e.replace(/&sdot;/g,"⋅")}function a(e){return e=e.replace(/&Alpha;/g,"Α"),e=e.replace(/&Beta;/g,"Β"),e=e.replace(/&Gamma;/g,"Γ"),e=e.replace(/&Delta;/g,"Δ"),e=e.replace(/&Epsilon;/g,"Ε"),e=e.replace(/&Zeta;/g,"Ζ"),e=e.replace(/&Eta;/g,"Η"),e=e.replace(/&Theta;/g,"Θ"),e=e.replace(/&Iota;/g,"Ι"),e=e.replace(/&Kappa;/g,"Κ"),e=e.replace(/&Lambda;/g,"Λ"),e=e.replace(/&Mu;/g,"Μ"),e=e.replace(/&Nu;/g,"Ν"),e=e.replace(/&Xi;/g,"Ν"),e=e.replace(/&Omicron;/g,"Ο"),e=e.replace(/&Pi;/g,"Π"),e=e.replace(/&Rho;/g,"Ρ"),e=e.replace(/&Sigma;/g,"Σ"),e=e.replace(/&Tau;/g,"Τ"),e=e.replace(/&Upsilon;/g,"Υ"),e=e.replace(/&Phi;/g,"Φ"),e=e.replace(/&Chi;/g,"Χ"),e=e.replace(/&Psi;/g,"Ψ"),e=e.replace(/&Omega;/g,"Ω"),e=e.replace(/&alpha;/g,"α"),e=e.replace(/&beta;/g,"β"),e=e.replace(/&gamma;/g,"γ"),e=e.replace(/&delta;/g,"δ"),e=e.replace(/&epsilon;/g,"ε"),e=e.replace(/&zeta;/g,"ζ"),e=e.replace(/&eta;/g,"η"),e=e.replace(/&theta;/g,"θ"),e=e.replace(/&iota;/g,"ι"),e=e.replace(/&kappa;/g,"κ"),e=e.replace(/&lambda;/g,"λ"),e=e.replace(/&mu;/g,"μ"),e=e.replace(/&nu;/g,"ν"),e=e.replace(/&xi;/g,"ξ"),e=e.replace(/&omicron;/g,"ο"),e=e.replace(/&pi;/g,"π"),e=e.replace(/&rho;/g,"ρ"),e=e.replace(/&sigmaf;/g,"ς"),e=e.replace(/&sigma;/g,"σ"),e=e.replace(/&tau;/g,"τ"),e=e.replace(/&upsilon;/g,"υ"),e=e.replace(/&phi;/g,"φ"),e=e.replace(/&chi;/g,"χ"),e=e.replace(/&psi;/g,"ψ"),e=e.replace(/&omega;/g,"ω"),e=e.replace(/&thetasym;/g,"ϑ"),e=e.replace(/&upsih;/g,"ϒ"),e=e.replace(/&piv;/g,"ϖ"),e=e.replace(/&middot;/g,"·")}function r(e){return e=e.replace(/&nbsp;/g," "),e=e.replace(/&quot;/g,"'"),e=e.replace(/&amp;/g,"&"),e=e.replace(/&lt;/g,"<"),e=e.replace(/&gt;/g,">"),e=e.replace(/&#8226;/g,"•")}function l(e){return e=e.replace(/&OElig;/g,"Œ"),e=e.replace(/&oelig;/g,"œ"),e=e.replace(/&Scaron;/g,"Š"),e=e.replace(/&scaron;/g,"š"),e=e.replace(/&Yuml;/g,"Ÿ"),e=e.replace(/&fnof;/g,"ƒ"),e=e.replace(/&circ;/g,"ˆ"),e=e.replace(/&tilde;/g,"˜"),e=e.replace(/&ensp;/g,""),e=e.replace(/&emsp;/g,""),e=e.replace(/&thinsp;/g,""),e=e.replace(/&zwnj;/g,""),e=e.replace(/&zwj;/g,""),e=e.replace(/&lrm;/g,""),e=e.replace(/&rlm;/g,""),e=e.replace(/&ndash;/g,"–"),e=e.replace(/&mdash;/g,"—"),e=e.replace(/&lsquo;/g,"‘"),e=e.replace(/&rsquo;/g,"’"),e=e.replace(/&sbquo;/g,"‚"),e=e.replace(/&ldquo;/g,"“"),e=e.replace(/&rdquo;/g,"”"),e=e.replace(/&bdquo;/g,"„"),e=e.replace(/&dagger;/g,"†"),e=e.replace(/&Dagger;/g,"‡"),e=e.replace(/&bull;/g,"•"),e=e.replace(/&hellip;/g,"…"),e=e.replace(/&permil;/g,"‰"),e=e.replace(/&prime;/g,"′"),e=e.replace(/&Prime;/g,"″"),e=e.replace(/&lsaquo;/g,"‹"),e=e.replace(/&rsaquo;/g,"›"),e=e.replace(/&oline;/g,"‾"),e=e.replace(/&euro;/g,"€"),e=e.replace(/&trade;/g,"™"),e=e.replace(/&larr;/g,"←"),e=e.replace(/&uarr;/g,"↑"),e=e.replace(/&rarr;/g,"→"),e=e.replace(/&darr;/g,"↓"),e=e.replace(/&harr;/g,"↔"),e=e.replace(/&crarr;/g,"↵"),e=e.replace(/&lceil;/g,"⌈"),e=e.replace(/&rceil;/g,"⌉"),e=e.replace(/&lfloor;/g,"⌊"),e=e.replace(/&rfloor;/g,"⌋"),e=e.replace(/&loz;/g,"◊"),e=e.replace(/&spades;/g,"♠"),e=e.replace(/&clubs;/g,"♣"),e=e.replace(/&hearts;/g,"♥"),e=e.replace(/&diams;/g,"♦"),e=e.replace(/&#39;/g,"'")}function p(e){return e=e.replace(/\r\n/g,""),e=e.replace(/\n/g,""),e=e.replace(/code/g,"wxxxcode-style")}module.exports={strDiscode:function(c){return c=e(c),c=a(c),c=r(c),c=l(c),c=p(c)},urlToHttpUrl:function(e,a){return new RegExp("^//").test(e)&&(e=a+":"+e),e}}; 
 			}); 
		define("pages/wxParse/wxParse.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function a(e){var t=this,a=e.target.dataset.src,i=e.target.dataset.from;void 0!==i&&i.length>0&&wx.previewImage({current:a,urls:t.data[i].imageUrls})}function i(e){var t=this,a=e.target.dataset.from,i=e.target.dataset.idx;void 0!==a&&a.length>0&&r(e,i,t,a)}function r(e,a,i,r){var o,d=i.data[r];if(d&&0!=d.images.length){var s=d.images,l=n(e.detail.width,e.detail.height,i,r),g=s[a].index,h=""+r,m=!0,u=!1,v=void 0;try{for(var f,w=g.split(".")[Symbol.iterator]();!(m=(f=w.next()).done);m=!0)h+=".nodes["+f.value+"]"}catch(e){u=!0,v=e}finally{try{!m&&w.return&&w.return()}finally{if(u)throw v}}var c=h+".width",x=h+".height";i.setData((o={},t(o,c,l.imageWidth),t(o,x,l.imageheight),o))}}function n(e,t,a,i){var r=0,n=0,o=0,d={},g=a.data[i].view.imagePadding;return r=s-2*g,l,e>r?(o=(n=r)*t/e,d.imageWidth=n,d.imageheight=o):(d.imageWidth=e,d.imageheight=t),d}var o=e(require("./showdown.js")),d=e(require("./html2json.js")),s=0,l=0;wx.getSystemInfo({success:function(e){s=e.windowWidth,l=e.windowHeight}}),module.exports={wxParse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wxParseData",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'<div class="color:red;">数据不能为空</div>',n=arguments[3],s=arguments[4],l=n,g={};if("html"==t)g=d.default.html2json(r,e),console.log(JSON.stringify(g," "," "));else if("md"==t||"markdown"==t){var h=(new o.default.Converter).makeHtml(r);g=d.default.html2json(h,e),console.log(JSON.stringify(g," "," "))}g.view={},g.view.imagePadding=0,void 0!==s&&(g.view.imagePadding=s);var m={};m[e]=g,l.setData(m),l.wxParseImgLoad=i,l.wxParseImgTap=a},wxParseTemArray:function(e,t,a,i){for(var r=[],n=i.data,o=null,d=0;d<a;d++){var s=n[t+d].nodes;r.push(s)}e=e||"wxParseTemArray",(o=JSON.parse('{"'+e+'":""}'))[e]=r,i.setData(o)},emojisInit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/wxParse/emojis/",a=arguments[2];d.default.emojisInit(e,t,a)}}; 
 			}); 
		define("utils/server.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(){var t={};return 1===arguments.length&&"string"!=typeof arguments[0]?t=arguments[0]:(t.url=arguments[0],"object"===e(arguments[1])?(t.data=arguments[1],t.success=arguments[2]):t.success=arguments[1]),0!==t.url.indexOf("https://")&&(t.url="https://wxapp.im20.com.cn"+t.url),t}function o(t,o){o.method=t,o.header={"content-type":"application/json"},wx.request(o)}var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};module.exports={getJSON:function(){o("GET",t.apply(this,arguments))},postJSON:function(){o("POST",t.apply(this,arguments))},sendTemplate:function(t,o,e,n){var s=getApp();this.getJSON({url:"/WxAppApi/sendTemplate",data:{rd_session:s.rd_session,form_id:t,data:o},success:e,fail:n})}}; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e){return(e=e.toString())[1]?e:"0"+e};module.exports={formatTime:function(t){var o=t.getFullYear(),n=t.getMonth()+1,a=t.getDate(),s=t.getHours(),c=t.getMinutes(),r=t.getSeconds();return[o,n,a].map(e).join("/")+" "+[s,c,r].map(e).join(":")},formatTimeTwo:function(t,o){var n=["Y","M","D","h","m","s"],a=[],s=new Date(1e3*t);a.push(s.getFullYear()),a.push(e(s.getMonth()+1)),a.push(e(s.getDate())),a.push(e(s.getHours())),a.push(e(s.getMinutes())),a.push(e(s.getSeconds()));for(var c in a)o=o.replace(n[c],a[c]);return o},formatDate:function(t){return[t.getFullYear(),t.getMonth()+1,t.getDate()].map(e).join("-")},formatTimeOnly:function(t){t.getFullYear(),t.getMonth(),t.getDate();var o=t.getHours(),n=t.getMinutes();t.getSeconds();return[o,n].map(e).join(":")},getQueryString:function(e,t){console.log("url = "+e),console.log("name = "+t);var o=new RegExp("(^|&|/?)"+t+"=([^&|/?]*)(&|/?|$)","i"),n=e.substr(1).match(o);return null!=n?(console.log("r = "+n),console.log("r[2] = "+n[2]),n[2]):null},getWifiDates:function(e,t){wx.getStorage({key:"storeId",success:function(o){e.setData({storeId:o.data}),wx.request({url:t+"skstoremodel/getWifiDate",data:{storeWifiConfigStoreInfoStoreId:o.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({wifi_name:t.data[0].storeWifiConfigWifiName,wifi_password:t.data[0].storeWifiConfigWifiPaaswork}),console.log(t.data)}})}})},getShareInfos:function(e,t){wx.getStorage({key:"storeId",success:function(o){wx.request({url:t+"skstoremodel/WXfindIndexForwardByStoreId",data:{storeId:o.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log("===========WXfindIndexForwardByStoreId成功============");var o=t.data;if(console.log("shareInfo:"),console.log(o),""!=o.img&&null!=o.img&&void 0!=o.img){var n=o.img.split("/"),a="http://qiniu.shoukaikeji.com/"+n[n.length-1];console.log("shareImgUrl:"+a),e.setData({shareImgUrl:a})}e.setData({shareTitle:o.title})}})}})},setCompanyId:function(e,t){wx.getStorage({key:"companyId",success:function(t){e.setData({companyId:t.data})},fail:function(o){console.log(o),setTimeout(function(){e.onLoad(t)},2e3)}})},setStoreId:function(e){wx.getStorage({key:"storeId",success:function(t){e.setData({storeId:t.data})}})},setUserId:function(e){wx.getStorage({key:"userId",success:function(t){e.setData({userId:t.data})}})},setStoreInfo:function(e){wx.getStorage({key:"storeInfo",success:function(t){wx.setNavigationBarTitle({title:t.data.storeInfoName}),e.setData({storeInfo:t.data,storeImgUrl:t.data.storeInfoHeadImgUrl})}})},setStoreName:function(e){wx.getStorage({key:"storeName",success:function(t){e.setData({storename:t.data,storeName:t.data})}})},setUserName:function(e){wx.getStorage({key:"userName",success:function(t){e.setData({userName:t.data})}})},setStoreInfoName:function(e){wx.getStorage({key:"storeInfo",success:function(t){wx.setStorage({key:"storeName",data:t.data.storeInfoName}),e.setData({storename:t.data.storeInfoName,storeName:t.data.storeInfoName})}})},conSocket:function(e,t){console.log("=====util.js conSocket start=====");var o=t.substr(0,t.length-1).replace("https","wss");console.log("socketUrl===>"+o),wx.connectSocket({url:o+":8110/websocket/"+e,method:"GET",success:function(e){console.log("=====connectSocket success====="),console.log("=========重连成功=========="),console.log(e),wx.setStorage({key:"connectedSocket",data:!0})},fail:function(e){console.log("=====connectSocket fail====="),console.log("连接socket失败"),console.log(e),wx.setStorage({key:"connectedSocket",data:!1})}}),console.log("=====util.js conSocket end=====")},closeSock:function(){wx.closeSocket({success:function(e){console.log("======closeSocket success======="),wx.setStorage({key:"connectedSocket",data:!1}),console.log(e)},fail:function(e){console.log("======closeSocket fail======="),console.log(e)}})},getTkInfos:function(e,t){if(console.log("====驳回弹框========",e,"=======",t),console.log("=========getTkInfos========"),"refunInfoReminding"==t.data.split("&")[0]){var o=t.data.split("&")[1],n=t.data.split("&")[2];console.log("refundId-----id-------",o),e.setData({refundId:o,displa:!0,refundTitle:n})}},playMusic:function(e,t){if("call"==t.data){var o=wx.getBackgroundAudioManager();o.title="众德润语音播报",o.epname="众德润语音播报",o.singer="众德润语音播报",o.coverImgUrl="http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000",o.src="http://qiniu.shoukaikeji.com/FpjDaduPdlFmEGKCz39hd_wu-p8k",o.play()}}}; 
 			}); 
		define("utils/wx_x_config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t={getWxPayOrdrID:function(){var t=new Date,r=t.getFullYear(),g=t.getMonth()+1,n=t.getDate(),i=t.getHours(),S=t.getMinutes(),e=t.getSeconds(),s=t.getMilliseconds();return g<10&&(g=String(String(0)+String(g))),n<10&&(n=String(String(0)+String(n))),i<10&&(i=String(String(0)+String(i))),S<10&&(S=String(String(0)+String(S))),e<10&&(e=String(String(0)+String(e))),s<10?s=String(String(0)+String(e)):s>=10&&s<100&&(s=String(String(0)+String(e))),String(r)+String(g)+String(n)+String(i)+String(S)+String(e)+String(s)}};module.exports=t; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";App({globalData:{appId:"wx0b17f98f7788de1d",Secret:"654eaa3c803415c4749f73bf3f3ce32e",userInfo:null,foodName:"",price:0,totalprice:0,toBuyNum:0,httpUrl:"https://zdr.zhongderun.com/"},checkVersionVpdates:function(o){if(wx.canIUse("getUpdateManager")){var e=wx.getUpdateManager();e.onCheckForUpdate(function(o){o.hasUpdate&&(e.onUpdateReady(function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(o){o.confirm&&e.applyUpdate()}})}),e.onUpdateFailed(function(){wx.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})}))})}else wx.showModal({title:"提示",content:"当前微信版本过低，无法使用更新功能，请升级到最新微信版本后重试。"})},onLaunch:function(){this.checkVersionVpdates(),wx.login({success:function(o){console.log("====wx.login success====");o.code;o.code?(wx.setStorage({key:"code",data:o.code}),console.log("res.code ==> "+o.code)):console.log("获取用户登录态失败！"+o.errMsg)},fail:function(o){console.log("====wx.login fail===="),console.log("错误信息"),console.log(o)}}),wx.setStorageSync("connectedSocket",!1);var o=this;wx.request({url:o.globalData.httpUrl+"skstoremodel/findCompanyByAppid",data:{xcxAppid:o.globalData.appId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){wx.setNavigationBarTitle({title:o.data.companyInfoName}),wx.setStorage({key:"companyInfo",data:o.data}),wx.setStorage({key:"companyId",data:o.data.companyInfoId})}})},getUserInfo:function(o){var e=this;e.globalData.userInfo?"function"==typeof o&&o(e.globalData.userInfo):wx.login({success:function(){console.log("测试数据 login"),wx.getUserInfo({success:function(t){e.globalData.userInfo=t.userInfo,"function"==typeof o&&o(e.globalData.userInfo)}})}})}}); 
 			}); 	require("app.js");
 		__wxRoute = 'pages/components/timeLine/timeLine';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/timeLine/timeLine.js';	define("pages/components/timeLine/timeLine.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp().globalData.httpUrl;require("../../../utils/util.js");Component({properties:{refundId:String,refundTitle:String},data:{orderNum:"",payBackMoney:"",refundresult:"",takeOutDispatchType:"",refundTime:""},methods:{contact:function(){console.log("==========绑定打电话功能=========="),wx.getStorage({key:"storeInfo",success:function(e){console.log("========联系电话========="),console.log(e.data.storeInfoTelephoneNum),null!=e.data.storeInfoTelephoneNum&&""!=e.data.storeInfoTelephoneNum&&void 0!=e.data.storeInfoTelephoneNum&&"undefined"!=e.data.storeInfoTelephoneNum&&"null"!=e.data.storeInfoTelephoneNum||wx.showModal({title:"无联系电话",content:""}),wx.makePhoneCall({phoneNumber:e.data.storeInfoTelephoneNum})},fail:function(e){console.log("========没有storeInfo=========")}})},swithToOrder:function(){var e={val:!1};this.triggerEvent("closeTk",e),wx.switchTab({url:"/pages/index/order/order"})}},attached:function(){var t=this,a=t.properties.refundId,r=t.properties.refundTitle,o=r.substr(17,2);wx.request({url:e+"skmembermodel/selRefundInfo",data:{id:a},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){e.data.data.length>0&&(console.log("这是原逻辑你进来了吗+++++",e.data.data),t.setData({refundTitle:r,refundId:a,orderNum:e.data.data[0].orderNum,orderType:e.data.data[0].orderType,refundTime:e.data.data[0].createTime,payBackMoney:e.data.data[0].refundmoney,refundsucOrfail:o}),console.log("是不是驳回----",o),"驳回"==o?(console.log("走没走驳回判断----",o),t.setData({refundresult:e.data.data[0].rejectreson})):"接受"==o&&t.setData({refundresult:e.data.data[0].refundresult}))}}),wx.request({url:e+"skordermodel/selCancelRefundByOrderId",data:{id:a},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){if(console.log("length-------",e.data.result.length),e.data.result.length>0){console.log("点我达得到的结果+++++---",e);var n=e.data.result[0];t.setData({refundTitle:r,refundId:a,orderNum:n.orderNum,orderType:n.orderType,refundTime:n.cancelTime,payBackMoney:n.orderRealPrice,refundsucOrfail:o}),"驳回"==o?t.setData({refundresult:n.orderRefuseRemark}):"接受"==o&&t.setData({refundresult:n.orderRefuseRemark})}}}),wx.getStorage({key:"wmFlg",success:function(e){wx.getStorage({key:"takeOutDispatchType",success:function(a){t.setData({takeOutDispatchType:a.data}),wx.getStorage({key:"os",success:function(r){if(1==e.data){console.log("点我达的消息",a);t.properties.refundId,t.properties.refundTitle.substr(17,2)}}})}})}})}}); 
 			}); 	require("pages/components/timeLine/timeLine.js");
 		__wxRoute = 'pages/welcome/welcome';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/welcome/welcome.js';	define("pages/welcome/welcome.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var t,a,o=getApp(),n=o.globalData.httpUrl,s=o.globalData.tuhttpUrl;Page({data:(t={clickedStore:!1,storeName:"",httpUrl:n,tuhttpUrl:s,shopTime:"",position:"",rightText:"距我最近",leftText:"选择区域",leftText0:"",i:0,j:0,starurls:[],slider:[],stores:[],rows:[[{areaName:"和平区"},{areaName:"沈河区"}],[{areaName:"皇姑区"},{areaName:"大东区"}],[{areaName:"铁西区"},{areaName:"浑南区"}],[{areaName:"于洪区"},{areaName:"沈北新区"}]],disLeft:"none",disRight:"none",scroFlag:"",latitude:"",longitude:"",onClickFlag:!0,storeInfoCompanyInfoId:"",storeInfoLongitude:"",storeInfoLatitude:"",condition:""},e(t,"storeName",""),e(t,"storeInfoAddress",""),t),disRight:function(){a.data.canotClick?wx.showToast({title:"加载中不可点击！"}):a.setData({disRight:"block",disLeft:"none",scroFlag:"hidden"})},disLeft:function(){a.data.canotClick?wx.showToast({title:"加载中不可点击！"}):a.setData({disLeft:"block",disRight:"none",scroFlag:"hidden"})},cancel:function(){a.data.canotClick?wx.showToast({title:"加载中不可点击！"}):a.setData({disLeft:"none",disRight:"none",scroFlag:""})},goDetail:function(e){e.detail.userInfo&&(a.setData({shouquan:!1}),a.onLoad())},onLoad:function(e){(a=this).setData({canotClick:!0}),wx.getStorage({key:"companyId",success:function(e){a.setData({companyId:e.data}),void 0==e.data||null==e.data||"undefined"==e.data||"null"==e.data||""==e.data?(console.log("============companyId未获取================="),setTimeout(function(){a.onLoad()},2e3)):(console.log("===================已获取companyId========================="),wx.request({url:n+"skstoremodel/WXfindWelcomeForward",data:{companyId:a.data.companyId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data;if(console.log("shareInfo:"),console.log(t),""!=t.img&&null!=t.img&&void 0!=t.img){var o=t.img.split("/"),n="http://qiniu.shoukaikeji.com/"+o[o.length-1];console.log("shareImgUrl:"+n),a.setData({shareImgUrl:n})}a.setData({shareTitle:t.title})}}),wx.getSetting({success:function(e){e.authSetting["scope.userInfo"]?(o.getUserInfo(function(e){console.log(e),a.setData({userInfo:e})}),wx.setStorage({key:"submitFlg",data:!1}),wx.getLocation({type:"wgs84",success:function(e){wx.setStorage({key:"latitude",data:e.latitude}),wx.setStorage({key:"longitude",data:e.longitude}),a.finishOnload(e)},fail:function(){var e={longitude:"",latitude:""};wx.setStorage({key:"latitude",data:e.latitude}),wx.setStorage({key:"longitude",data:e.longitude}),a.finishOnload(e)}})):wx.getStorage({key:"companyId",success:function(e){wx.request({url:n+"skstoremodel/wxSelectStoreByCompanyId",data:{storeInfoCompanyInfoId:e.data,storeInfoLongitude:"",storeInfoLatitude:"",condition:"",storeInfoName:"",storeInfoAddress:""},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data[0].takeOutDispatchType;console.log("只有一个配送状态===>",t),wx.setStorage({key:"deliveryPrice",data:t}),a.setData({shouquanImg:e.data[0].storeInfoHeadImgUrl,shouquan:!0})}})}})},fail:function(){a.onLoad()}}))},fail:function(e){console.log(e),setTimeout(function(){a.onLoad()},2e3)}})},finishOnload:function(e){wx.getStorage({key:"companyId",success:function(t){wx.request({url:n+"skstoremodel/getCarouselInfoDateWX",data:{companyId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data,o=a.data.slider;for(var n in t)t[n].desktopCycleConfigImgUrl&&o.push({picUrl:t[n].desktopCycleConfigImgUrl});a.setData({slider:o}),console.log(o)}}),a.getStroeList(t.data,e.longitude,e.latitude,"距离最近","","",!0)}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){wx.stopPullDownRefresh(),a=this,setTimeout(function(){a.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:a.data.shareTitle,desc:"",imageUrl:a.data.shareImgUrl,path:"/pages/welcome/welcome",success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},stroeList:function(e){wx.request({url:n+"skstoremodel/wxSelectStoreByCompanyId",data:{storeInfoCompanyInfoId:a.data.storeInfoCompanyInfoId,storeInfoLongitude:a.data.storeInfoLongitude,storeInfoLatitude:a.data.storeInfoLatitude,condition:a.data.condition,storeInfoName:a.data.storeName,storeInfoAddress:a.data.storeInfoAddress},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=t.data[e].takeOutDispatchType;console.log("配送状态为=====>",a),wx.setStorage({key:"takeOutDispatchType",data:a})}})},gotoIndex:function(e){if(!a.data.clickedStore){a.setData({clickedStore:!0});var t=e.currentTarget.dataset.storeName,o=e.currentTarget.dataset.storeuid,n=e.currentTarget.dataset.storeInfo,s=e.currentTarget.dataset.storeInfoDeliveryPrice,r=e.currentTarget.dataset.id;wx.setStorage({key:"storeInfo",data:n}),wx.setStorage({key:"deliveryPrice",data:s}),wx.setStorage({key:"storeName",data:t}),a.stroeList(r),console.log("====gotoIndex===="),a.resendIndex(o)}},toOther:function(){a.cancel(),wx.navigateTo({url:"otherStore/otherStore"})},setStorName:function(e){var t=e.detail.value;a.setData({storeName:t})},searchStoreByName:function(e){var t=a.data.storeName;wx.getStorage({key:"companyId",success:function(e){wx.getStorage({key:"longitude",success:function(o){wx.getStorage({key:"latitude",success:function(n){"距我最近"==a.data.rightText?a.getStroeList(e.data,o.data,n.data,"距离最近",t,""):a.getStroeList(e.data,o.data,n.data,a.data.rightText,t,"")}})}})}})},nearBy:function(e){a.setData({rightText:"距我最近",disLeft:"none",disRight:"none",scroFlag:""}),wx.getStorage({key:"latitude",success:function(e){wx.getStorage({key:"longitude",success:function(t){wx.getStorage({key:"companyId",success:function(o){console.log("zhesha",a.data.leftText0),a.getStroeList(o.data,t.data,e.data,"距离最近","",a.data.leftText0)}})}})}})},maxPopu:function(){var e=this;e.setData({rightText:"人气最高",disLeft:"none",disRight:"none",scroFlag:""}),wx.getStorage({key:"companyId",success:function(t){e.getStroeList(t.data,"","","人气最高","",e.data.leftText0)}})},maxSale:function(){var e=this;e.setData({rightText:"销量最高",disLeft:"none",disRight:"none",scroFlag:""}),wx.getStorage({key:"companyId",success:function(t){e.getStroeList(t.data,"","","销量最高","",e.data.leftText0)}})},area:function(e){var t=this,a=e.currentTarget.dataset.areaname;t.setData({disLeft:"none",disRight:"none",scroFlag:"",leftText:a,leftText0:a}),wx.getStorage({key:"latitude",success:function(e){wx.getStorage({key:"longitude",success:function(o){wx.getStorage({key:"companyId",success:function(n){t.getStroeList(n.data,o.data,e.data,"距离最近","",a)}})}})}})},getStroeList:function(e,t,o,s,r,d,c){a.setData({storeInfoCompanyInfoId:e,storeInfoLongitude:t,storeInfoLatitude:o,condition:s,storeName:r,storeInfoAddress:d}),console.log(e,t,o,s,r,d,c),wx.request({url:n+"skstoremodel/wxSelectStoreByCompanyId",data:{storeInfoCompanyInfoId:e,storeInfoLongitude:t,storeInfoLatitude:o,condition:s,storeInfoName:r,storeInfoAddress:d},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){if(console.log("=====welcome getStroeList wxSelectStoreByCompanyId success====="),console.log(e.data),a.setData({canotClick:!1}),c&&1==e.data.length){var t=e.data[0].storeInfoName,o=e.data[0].storeInfoStoreId,n=(e.data[0].storeInfoDeliveryPrice,e.data[0].takeOutDispatchType);console.log("只有一个店铺配送状态===>",n),wx.setStorage({key:"deliveryPrice",data:n}),wx.setStorage({key:"storeInfo",data:e.data[0]}),wx.setStorage({key:"storeId",data:e.data[0].storeInfoStoreId}),wx.setStorage({key:"storeName",data:t}),wx.setStorage({key:"takeOutDispatchType",data:n}),a.resendIndex(o)}else{a.setData({stores:e.data});var s=e.data,r=a.data.starurls;for(var d in s)r[d]=a.setStart(s[d].storeRatedServiceStartLevel);a.setData({starurls:r})}a.setData({onClickFlag:!0})}})},setStart:function(e){var t={};console.log("storeRatedServiceStartLevel ==> "+e);for(var a=0;a<5;a++)t[a]=a<=e-1?{starurl:"../../images/star.png"}:e-a>0&&e-a<1?{starurl:"../../images/halfStar.png"}:{starurl:"../../images/emptyStar.png"};return t},resendIndex:function(e){console.log("=========进入跳转主页========="),wx.login({success:function(t){console.log("====wx.login success====");var s=t.code;t.code?(console.log("====get code===="),console.log("res.code ==> "+t.code),wx.getUserInfo({success:function(t){console.log("====wx.getUserInfo success===="),wx.setStorage({key:"userName",data:t.userInfo.nickName}),wx.setStorage({key:"avatarUrl",data:t.userInfo.avatarUrl}),wx.request({url:n+"skmembermodel/getOpenidS",data:{code:s,AppID:o.globalData.appId,Secret:o.globalData.Secret,storeUuid:e,wxUserNickName:t.userInfo.nickName,headImgUrl:t.userInfo.avatarUrl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){if(a.setData({onClickFlag:!0,clickedStore:!1}),null!=t.data.openid&&""!=t.data.openid){var o=t.data.wechatUser.wechatUserStoreIdentity;wx.setStorage({key:"StoreIdentity",data:o}),wx.setStorage({key:"session_key",data:t.data.session_key}),wx.setStorage({key:"openId",data:t.data.openid}),wx.setStorage({key:"userId",data:t.data.wechatUser.wechatUserId}),wx.setStorage({key:"storeId",data:e}),wx.switchTab({url:"../index/index"}),wx.getStorage({key:"companyId",success:function(a){wx.request({url:n+"skmembermodel/updatVipCardStore",data:{wechatUserId:t.data.wechatUser.wechatUserId,wechatUserStoreStoreInfoStoreId:e,companyId:a.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){}}),wx.request({url:n+"skmembermodel/updatEquitycardStore",data:{wxUserId:t.data.wechatUser.wechatUserId,storeId:e,companyId:a.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){}})}})}else wx.showToast({title:"登录失败"})},fail:function(e){console.log("jfkjsdkglds"),console.log(e.data)}})},fali:function(e){console.log("====wx.login fail====")}})):console.log("获取用户登录态失败！"+t.errMsg)},fail:function(e){console.log("====wx.login fail===="),console.log("错误信息"),console.log(e)}})},onMyEvent:function(e){console.log(e)}}); 
 			}); 	require("pages/welcome/welcome.js");
 		__wxRoute = 'pages/index/order/evalOrder/selCoupon/selCoupon';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/order/evalOrder/selCoupon/selCoupon.js';	define("pages/index/order/evalOrder/selCoupon/selCoupon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,o=require("../../../../../utils/util.js"),t=getApp().globalData.httpUrl;Page({data:{coupones:[],nowData:o.formatDate(new Date),display:"none"},trimString:function(e){var o=e.split("年"),t=o[1].split("月"),a=t[1].split("日");return o[0]+"-"+t[0]+"-"+a[0]},trimString1:function(e){var o=e.split("年"),t=o[1].split("月"),a=t[1].split("日");return o[0]+t[0]+a[0]},trimString2:function(e){var o=e.split("/"),t=o[2].split(" ");return o[0]+o[1]+t[0]},huoqu:function(o){var t=o.currentTarget.dataset.index,a=e.data.coupones[t].couponName,n=e.data.coupones[t].derateMoney,c=e.data.coupones[t].cardId,s=e.data.coupones[t].code,d=e.data.coupones[t].miniMoney,i=e.data.coupones[t].couponType,r=e.data.coupones[t].couponState;if(""!=this.data.initMoney&&null!=this.data.initMoney&&void 0!=this.data.initMoney&&this.data.initMoney<d)return console.error("未达到满减金额=-==="),void this.setData({display:"block",titlename:"温馨提示",carname:"未达到满减金额\n请选择其他优惠券"});wx.setStorage({key:"couponInfo",data:{couponName:a,derateMoney:n,couponId:c,code:s,miniMoney:d,couponType:i,couponState:r}}),"0"==r&&(console.log("=======优惠券什么时候进来======"),wx.getStorage({key:"wmFlg",success:function(e){wx.getStorage({key:"dcFlg",success:function(o){wx.getStorage({key:"ydFlg",success:function(a){if(o.data||a.data||e.data)wx.getStorage({key:"orderId",success:function(e){wx.getStorage({key:"orderType",success:function(o){wx.reLaunch({url:"../../../../index/order/evalOrder/evalOrder?orderId="+e.data+"&orderType="+o.data})}})}});else{var n=getCurrentPages();console.log("获取父类======>"+n);var c=n[n.length-1];console.log("获取上一级类======>"+c.data.useFlg);var s=n[n.length-2];console.log("获取上一级类======>"+s.data.couponName),s.setData({couponName:c.data.coupones[t].couponName,selectedCoupon:c.data.coupones[t].couponName,coupon:!0,card:!1,couponType:c.data.coupones[t].couponType,yhprice:c.data.coupones[t].derateMoney,derateMoney:c.data.coupones[t].derateMoney,couponId:c.data.coupones[t].cardId,code:c.data.coupones[t].code,miniMoney:c.data.coupones[t].miniMoney,couponState:c.data.coupones[t].couponState,clickedCoupon:!0}),s.back(),wx.navigateBack({delta:"1"})}wx.setStorage({key:"couponFlg",data:"1"})}})}})}}))},onLoad:function(a){console.log("onlod--------",a),e=this,""!=a.initMoney&&null!=a.initMoney&&void 0!=a.initMoney&&e.setData({initMoney:a.initMoney}),o.getShareInfos(e,t),o.setStoreInfo(e),o.setCompanyId(e,a),wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"companyId",success:function(n){wx.getStorage({key:"storeId",success:function(c){e.setData({storeId:c.data}),wx.request({url:t+"skcouponmodel/selCouponByReceive",data:{userId:a.data,companyId:n.data,applyStoreId:c.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log("==========coupones===========",t.data);var a=t.data;for(var n in a)if("DATE_TYPE_FIX_TERM"==a[n].validityType){var c=a[n].receiveTime.split(" ")[0],s=new Date(c),d=new Date(c);d.setDate(s.getDate()+1*a[n].validityBegin),a[n].validityBegin=o.formatDate(d);var i=new Date(d);i.setDate(d.getDate()+1*a[n].validityEnd),a[n].validityEnd=o.formatDate(i)}e.setData({coupones:t.data})}})}})}})}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(t){console.log("===========接收到服务器信息=============="),console.log(t.data),o.getTkInfos(e,t),o.playMusic(e,t)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){o.conSocket(e.data,t)}})})},onHide:function(){},onUnload:function(){o.closeSock(),wx.getStorage({key:"orderId",success:function(e){wx.getStorage({key:"orderType",success:function(o){wx.navigateTo({url:"evalOrder/evalOrder?orderId="+e.data+"&orderType="+o.data})}})}})},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}}}); 
 			}); 	require("pages/index/order/evalOrder/selCoupon/selCoupon.js");
 		__wxRoute = 'pages/index/takeOut/takeOut';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/takeOut/takeOut.js';	define("pages/index/takeOut/takeOut.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var t,a=require("../../../utils/util.js"),o=getApp().globalData.httpUrl;Page({data:{displays:"none",submitedOrder:!1,display:"none",displayy:"none",displayy_0:"none",indx:0,over:"auto",catch:!1,clicked:!1,guigetogFlg:"block",guigetogFlg1:"none",guige:!1,borderLeft:"4px solid #ffbf1f",leftBorder:[],cdFlg:"block",cdFlg1:"block",tcFlg:"none",tcFlg1:"flex",tcFlg2:"absolute",a:"",httpUrl:o,cartUrl:"../../../images/notShopping.png",bcgcolor:"#333",colo:"#999",naviFlg:!1,goods:[],toView:"",scrollTop:100,dcBeizhu:"",qisongfei:20,distriFeePrice:3,totalPrice:0,totalCount:0,canhefei:0,canhefei0:0,canhefei1:0,carArray:[],minPrice:0,editType:"N",payDesc:"",fold:!0,selectFoods:[{price:20,count:2}],cartShow:"none",status:0,url:"",showPopup:!1,pageBackgroundColor:"#333",wmFlg:!1,disp:"none",deskNum:"",dcFlg:!1,catalogSelect:0,huodongs:[],orderId:"",takeOutDispatchType:"",boxPriceType:"",jianhaoHidden:!0},onLoad:function(e){console.log("我进入了onload----------------------------------钩子"),(t=this).empty(),wx.setStorage({key:"carArray",data:t.data.carArray}),wx.setStorage({key:"zuohao",data:""}),a.getShareInfos(t,o),a.setCompanyId(t,e),a.setStoreId(t),wx.setStorage({key:"dcBeizhu",data:""}),wx.setStorage({key:"couponInfo",data:""}),wx.getStorage({key:"ydFlg",success:function(e){console.error("不知道是点餐还是外卖",e.data),t.setData({ydFlg:e.data})}});var r=e.zuohao,d=e.flag,n=e.orderId,i=e.editType;t.setData({flag:d,editType:i,orderId:n}),wx.setStorage({key:"editType",data:t.data.editType}),r&&t.setData({zuohao:r}),wx.getStorage({key:"storeInfo",success:function(e){wx.setNavigationBarTitle({title:e.data.storeInfoName}),t.setData({storeInfo:e.data}),t.changeSubmit(!1)}}),wx.getStorage({key:"dcFlg",success:function(e){t.setData({dcFlg:e.data})}}),wx.getStorage({key:"wmFlg",success:function(e){t.setData({wmFlg:e.data})}}),wx.getStorage({key:"storeId",success:function(e){wx.request({url:o+"skfoodmodel/selFoodActivityByStoreId",data:{storeId:e.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var a=85*e.data.length;t.setData({huodongs:e.data,huodongHeight:a})}})}}),wx.getStorage({key:"storeId",success:function(e){wx.request({url:o+"skfoodmodel/selFoodTypeAndFood",data:{storeId:e.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var a=e.data;t.setData({goods:a}),wx.setStorage({key:"goods",data:a}),d&&wx.request({url:o+"skordermodel/getOrderById",data:{id:n,orderType:d},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.setData({zuohao:e.data.orderTableId,orderId:e.data.id});var a=t.data.goods;for(var o in e.data.foodList)!function(o){var r=a.find(function(t){return t.id==e.data.foodList[o].foodTypeId});if(r){var d=r.foodList.find(function(t){return t.id==e.data.foodList[o].foodId}),n=void 0,i=void 0,s=e.data.foodList[o].foodId,c=e.data.foodList[o].realPrice,f=e.data.foodList[o].foodTypeId,l=e.data.foodList[o].receivablePrice;if(e.data.foodList[o].foodSizeId){var u=d.foodSizeList.find(function(t){return t.id==e.data.foodList[o].foodSizeId});n=e.data.foodList[o].foodCount,i=e.data.foodList[o].foodName+"("+e.data.foodList[o].sizeName+")",u.foodSizeCount=n}else n=e.data.foodList[o].foodCount,i=e.data.foodList[o].foodName,d.foodCount=n;t.refreshShopingCar(s,c,n,i,f,l)}}(o);t.changeSubmit(!0),t.setData({goods:a,clickAble:!0,cartUrl:"../../../images/shopping.png"})}})}})}}),wx.getStorage({key:"takeOutDispatchType",success:function(e){t.setData({takeOutDispatchType:e.data})}}),wx.getStorage({key:"wmFlg",success:function(e){if(t.setData({wmFlg:e.data}),e.data&&"0"==t.data.takeOutDispatchType)wx.getStorage({key:"deliveryPrice",success:function(e){t.setData({distriFeePrice:e.data})}});else{t.setData({distriFeePrice:(0).toFixed(2)})}}})},closeguige:function(){t.resum()},selguige:function(e){var a=e.currentTarget.dataset.foodSize,o=e.currentTarget.dataset.indx,r=e.currentTarget.dataset.guigeIndex,d=e.currentTarget.dataset.foodsizelist,n=[],i=[];for(var s in d)n[s]="#666",i[s]="#efefef";n[r]="#ffbf21",i[r]="#35343a",t.setData({foodSize:a,foodSizeList:d,bgColors:n,colors:i,indx:o})},xuanguige:function(e){var a=e.currentTarget.dataset.foodCount,o=e.currentTarget.dataset.foodPrice,r=e.currentTarget.dataset.foodId,d=[],n=[];d[0]="#ffbf21",n[0]="#35343a",t.setData({guige:r,foodCount:a,foodPrice:o,indx:0,bgColors:d,colors:n,cdFlg1:"none"})},togguige:function(){t.setData({guigetogFlg:"none",guigetogFlg1:"block"})},resum:function(){t.setData({guige:!1,cdFlg1:"block"})},changeColor:function(){console.log("设置了别境颜色");var e=(this.data.pageBackgroundColor,"#ffbf1f");this.setData({pageBackgroundColor:e})},chooseCatalog:function(e){t.setData({catalogSelect:e.currentTarget.dataset.select})},empty:function(a){var o,r=t.data.goods;for(var d in r)for(var n in r[d].foodList)if(r[d].foodList[n].foodCount=0,r[d].foodList[n].foodSizeList.length>0)for(var i in r[d].foodList[n].foodSizeList)r[d].foodList[n].foodSizeList[i].foodSizeCount=0;wx.getStorage({key:"storeInfo",success:function(e){if("0"==e.data.boxPriceType){var a=e.data.storeInfoBoxPrice;console.log("获取餐盒费",a),null!=a&&""!=a&&void 0!=a||(a=0),t.setData({canhefei:a})}else t.setData({canhefei:0,canhefei1:0,canhefei0:e.data.storeInfoBoxPrice})}}),t.setData((o={goods:r,cartShow:"none",fold:!0,clickAble:!1,cartUrl:"../../../images/notShopping.png",bcgcolor:"#333",colo:"#999",naviFlg:!1,totalPrice:0,totalCount:0},e(o,"totalPrice",0),e(o,"carArray",[]),o))},calTotalPrice:function(e,a){for(var o=t.data.carArray,r=0,d=0,n=0,i=t.data.distriFeePrice,s=0;s<o.length;s++)r+=1*o[s].price,d+=1*o[s].receivablePrice,n+=1*o[s].num;console.error("总数--------------",n);var c=r;t.setData({finalPrice:parseFloat(c).toFixed(2),totalReceivablePrice:parseFloat(d).toFixed(2),totalPrice:parseFloat(r).toFixed(2),totalCount:n,distriFeePrice:parseFloat(i).toFixed(2)}),"jianhao"==e&&t.setData({canhefei:t.data.canhefei0*n})},toggleList:function(){if(t.data.totalCount){t.setData({fold:!t.data.fold});var e=t.data.fold;t.cartShow(e)}},cartShow:function(e){0==e?t.setData({cartShow:"block"}):t.setData({cartShow:"none"})},resume:function(){t.setData({disp:"none",display:"none"})},resumee:function(){t.setData({disp:"none",display:"none",displayy:"none"})},chkOrderr:function(){t.setData({disp:"none",display:"none",displayy:"none"}),t.sendOrder()},fixNull:function(e){return null==e&&(e=""),e},togglePopup:function(e){wx.setStorage({key:"foodId",data:e.currentTarget.dataset.foodId}),wx.setStorage({key:"carArray",data:t.data.carArray}),wx.setStorage({key:"goods",data:t.data.goods}),wx.navigateTo({url:"queryOrder/queryOrder?orderId="+t.data.orderId})},tohuodongs:function(e){wx.setStorage({key:"carArray",data:t.data.carArray}),wx.setStorage({key:"foodId",data:e.currentTarget.dataset.foodId}),wx.setStorage({key:"goods",data:t.data.goods}),wx.navigateTo({url:"queryFood/queryFood?orderId="+t.data.orderId})},onReady:function(){},closeTk:function(){t.setData({displa:!1})},onShow:function(){console.log("q---------",t.data.canhefei),console.log("q---------",t.data.canhefei1),t.setData({displays:"none"}),t=this;var e=getCurrentPages();1!=e[e.length-1].data.queryemptyflag?t.empty():(wx.getStorage({key:"goods",success:function(e){t.setData({goods:e.data})}}),wx.getStorage({key:"carArray",success:function(e){console.log("2-------",e.data),e.data.length<=0&&t.setData({canhefei:0,canhefei1:0});for(var a=0;a<e.data.length;a++)for(var o in e.data[a])"foodInfoBoxPrice_food"==o&&t.setData({canhefei1:e.data[a].foodInfoBoxPrice_food}),console.log("1-------",e.data[a]);t.setData({carArray:e.data}),t.changeFoodOnBack(),t.calTotalPrice(),t.data.totalCount>0&&t.setData({cartUrl:"../../../images/shopping.png"}),0==t.data.carArray.length?(t.changeSubmit(!1),t.setData({clickAble:!1,cartUrl:"../../../images/notShopping.png"})):(t.changeSubmit(!0),t.setData({clickAble:!0,cartUrl:"../../../images/shopping.png"}))}})),t.data.back&&t.setData({back:!1}),wx.onSocketMessage(function(e){console.log("===========接收到服务器信息=============="),a.getTkInfos(t,e),a.playMusic(t,e)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){a.conSocket(e.data,o)}})})},onHide:function(){var e=getCurrentPages();e[e.length-1].setData({queryemptyflag:!1}),t.setData({back:!0})},onUnload:function(){a.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),t=this,setTimeout(function(){t.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.data.shareTitle,desc:"",imageUrl:t.data.shareImgUrl,path:"/pages/index/index?storeId="+t.data.storeId+"&companyId="+t.data.companyId,success:function(e){},fail:function(e){}}},bindDesk:function(e){t.setData({deskNum:e.detail.value}),wx.setStorage({key:"deskNum",data:e.detail.value})},bindBeizhu:function(e){var a=e.detail.value;null==a||void 0==a||"undefined"==a||"null"==a?(a="",t.setData({dcBeizhu:""})):t.setData({dcBeizhu:a}),wx.setStorage({key:"dcBeizhu",data:a})},togBorder:function(e){for(var a=e.currentTarget.dataset.itemindex,o=[],r=0;r<t.data.goods.length;r++)o[r]="none";o[a]="4px solid #ffbf1f",t.setData({leftBorder:o,borderLeft:"none"});var d=e.currentTarget.dataset.itemIndex;t.setData({toView:"order"+d,key:e.currentTarget.dataset.itemIndex})},togBorder1:function(e){for(var a=[],o=0;o<t.data.goods.length;o++)a[o]="none";t.setData({leftBorder:a,borderLeft:"4px solid #ffbf1f"});var r=e.currentTarget.dataset.itemIndex;t.setData({toView:"order"+r,key:e.currentTarget.dataset.itemIndex})},gotype:function(e){var a=e.detail.scrollTop;t.getFoodType(a)},tolower:function(e){},getFoodType:function(e){var a=t.data.goods,o=t.data.huodongHeight;if(e<o){for(var r=[],d=0;d<t.data.goods.length;d++)r[d]="none";t.setData({leftBorder:r,borderLeft:"4px solid #ffbf1f"})}else{var n=[];for(var i in a)n[i]="none";var s=0;for(var c in a){var f=[];if(f[c]=76*a[c].foodList.length+20,s=1*s+1*f[c],e-o<s)return n[c]="4px solid #ffbf1f",void t.setData({leftBorder:n,borderLeft:"none"})}}},changeSubmit:function(e){e?t.setData({bcgcolor:"#ffbf21",colo:"#3f3d40",payDesc:"下单"}):(wx.getStorage({key:"wmFlg",success:function(e){if(e.data){var a=t.data.storeInfo.storeInfoCharging;null!=a&&void 0!=a&&""!=a||(a=0),t.setData({payDesc:"￥"+a.toFixed(2)+"起送"})}else t.setData({payDesc:"下单"})}}),t.setData({bcgcolor:"#333",colo:"#999"}))},addCount:function(e){console.log("点击了加号",t.data.storeInfo.boxPriceType),t.canhePrice(1,e)},minusCount:function(e){t.canhePrice(2,e)},canhePrice:function(e,a){if(1==e){var o=t.data.canhefei+t.data.canhefei0;console.log("增加菜品",e,o),t.setFoodInfo(a,1,o),t.setData({canhefei:o})}else{var r=t.data.totalCount*t.data.canhefei0;console.log("减菜品",e,r),t.setFoodInfo(a,-1,r,"jianhao")}},changeFoodOnBack:function(){var e=t.data.goods;t.setData({goods:e})},setFoodInfo:function(e,a,o,r){var r=r,d=e.currentTarget.dataset.foodId,n=o,i=e.currentTarget.dataset.typeId,s=e.currentTarget.dataset.foodSize,c=t.data.goods,f=c.find(function(e){return e.id==i}).foodList,l=f.find(function(e){return d==e.id});if(!l)for(var u in f)if(s=f[u].foodSizeList.find(function(e){return e.id==d})){l=f.find(function(e){return s.foodId==e.id});break}var g=void 0,p=0,y="",h=0,m=0;l.foodSizeList.length>0?(g=l.foodSizeList.find(function(e){return e.id==s.id}),d=g.id,y=l.foodName+"("+g.name+")",g.foodSizeCount=1*g.foodSizeCount+a<0?0:1*g.foodSizeCount+a,m=g.foodSizeCount<0?0:g.foodSizeCount,"0"==g.discountFlg?(p=t.data.wmFlg?g.priceW:g.priceT,h=t.data.wmFlg?g.priceW:g.priceT):(p=t.data.wmFlg?g.priceWZ:g.priceTZ,h=t.data.wmFlg?g.priceWZ:g.priceTZ)):(y=l.foodName,l.foodCount=1*l.foodCount+a<0?0:1*l.foodCount+a,console.error(l.foodCount,"---",1*l.foodCount+a),m=l.foodCount,h=t.data.wmFlg?l.priceW:l.priceT,p="0"==l.discountFlg?t.data.wmFlg?l.priceW:l.priceT:t.data.wmFlg?l.priceWZ:l.priceTZ),t.refreshShopingCar(d,p,m,y,i,h,n,r);var w=t.data.carArray;0==l.foodCount&&0==w.length?(t.changeSubmit(!1),t.setData({goods:c,clickAble:!1,cartUrl:"../../../images/notShopping.png"})):(t.changeSubmit(!0),t.setData({goods:c,clickAble:!0,cartUrl:"../../../images/shopping.png"}))},refreshShopingCar:function(e,a,o,r,d,n,i,s){var c=t.data.carArray,f=void 0,l=c.find(function(t){return t.foodId==e});if(l){l.foodId=e;var u=a*o,g=n*o;if(l.price=u.toFixed(2),l.receivablePrice=g.toFixed(2),l.num=o,l.name=r,l.foodInfoBoxPrice_out=i,console.log("添加到购物车时候的------餐盒费1---",i),0==o){for(var p=0,y=0;y<c.length;y++)e==c[y].foodId&&(p=y);c.splice(p,1),0==c.length&&(t.setCarShowSate(!1),t.setData({cartUrl:"../../../images/notShopping.png"}))}}else o>0&&(f={foodId:e,price:a.toFixed(2),num:o,name:r,typeId:d,receivablePrice:n,foodInfoBoxPrice_out:i},console.log("添加到购物车时候的------餐盒费1---",i),c.push(f));t.setData({carArray:c}),t.calTotalPrice(s,i)},dianqx:function(){t.setData({displays:"none"}),t.setData({over:"auto"})},cO:function(){var e=t.data.zuohao;if(t.data.dcFlg&&!e){if(""==(e=t.data.deskNum)||null==e||void 0==e)return t.setData({submitedOrder:!1}),t.setData({displayy_0:"block",titlename_0:"提醒",carname_0:"请输入桌号"}),void t.setData({displays:"none"});t.setData({over:"hideen",displays:"block",disp:"none",catch:!0})}},chkOrder:function(e){t.setData({display:"none",formId:e.detail.formId});var a=t.data.clickAble,o=t.data.storeInfo.storeInfoCharging;if(1*t.data.totalPrice<1*o&&1==t.data.wmFlg)t.setData({displayy_0:"block",titlename_0:"提示",carname_0:"未达到起送费"});else if(a)if(t.data.dcFlg||"D"==t.data.flag){var r=t.data.zuohao,d=t.data.dcBeizhu;null!=d&&void 0!=d||wx.setStorage({key:"dcBeizhu",data:""}),null==r||""==r?t.setData({disp:"block"}):t.sendOrder("",r)}else 0==t.data.wmFlg?t.sendOrder():(t.setData({disp:"none",display:"none",displayy:"none"}),t.sendOrder())},sendOrder:function(e,a){console.log("狗屎======="),t.setData({catch:"false"}),t.setData({over:"auto"}),t.setData({disp:"none"}),t.data.submitedOrder||(t.setData({submitedOrder:!0}),wx.getStorage({key:"userId",success:function(r){var d=r.data;console.error("wechatUserId--------",d),wx.getStorage({key:"storeId",success:function(r){var n=r.data;console.error("storeId--------",d),wx.getStorage({key:"orderType",success:function(r){console.error("orderType--------",r.data);var i=r.data,s=[];for(var c in t.data.goods)!function(e){var a=t.data.goods[e].foodList;for(var o in a)!function(e){if(a[e].foodSizeList.length>0)for(var o in t.data.carArray)for(var r in a[e].foodSizeList)a[e].foodSizeList[r].id==t.data.carArray[o].foodId&&a[e].foodSizeList[r].foodSizeCount>0&&(s.find(function(t){return t.id==a[e].id})||s.push(a[e]));else for(var d in t.data.carArray)a[e].id==t.data.carArray[d].foodId&&s.push(a[e])}(o)}(c);a||(a=t.data.deskNum),t.data.ydFlg?wx.getStorage({key:"orderId",success:function(e){console.error("orderId--------",e.data),wx.request({url:o+"skordermodel/insertOrderInfo",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{wechatUserId:d,storeId:n,orderTableId:a,orderReceivablePrice:t.data.totalPrice,orderRealPrice:t.data.totalPrice,orderType:r.data,foodList:JSON.stringify(s),id:e.data,formId:t.data.formId,formType:"1"},success:function(e){t.setData({submitedOrder:!1}),t.data.wmFlg?wx.redirectTo({url:"../order/evalOrder/submitOrder/submitOrder?orderId="+e.data.jsonEntity+"&orderType="+i}):wx.redirectTo({url:"../order/evalOrder/evalOrder?orderId="+e.data.jsonEntity+"&orderType="+i})},fail:function(e){wx.showToast({title:"下单失败"})}})}}):t.data.dcFlg?wx.request({url:o+"skordermodel/insertOrderInfo",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{wechatUserId:d,storeId:n,orderTableId:a,orderReceivablePrice:t.data.totalReceivablePrice,orderRealPrice:t.data.totalPrice,orderType:r.data,foodList:JSON.stringify(s),id:t.data.orderId,orderRemarke:t.data.dcBeizhu,formId:e.detail.formId,formType:"1"},success:function(e){t.setData({submitedOrder:!1}),wx.redirectTo({url:"../order/evalOrder/evalOrder?orderId="+e.data.jsonEntity+"&orderType="+i})},fail:function(e){wx.showToast({title:"下单失败"})}}):t.data.wmFlg&&wx.request({url:o+"skordermodel/insertOrderInfo",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{wechatUserId:d,storeId:n,orderTableId:a,orderReceivablePrice:t.data.totalReceivablePrice,orderRealPrice:t.data.totalPrice,orderType:r.data,foodList:JSON.stringify(s),id:t.data.orderId,formId:t.data.formId,formType:"1",foodInfoBoxPrice:t.data.canhefei+t.data.canhefei1},success:function(e){t.setData({submitedOrder:!1}),wx.redirectTo({url:"../order/evalOrder/submitOrder/submitOrder?orderId="+e.data.jsonEntity+"&orderType="+i})},fail:function(e){wx.showToast({title:"下单失败"})}})}})}})}}))},setCarShowSate:function(e){e?t.setData({cartShow:"block"}):t.setData({cartShow:"none"})},util:function(e){var t=wx.createAnimation({duration:200,timingFunction:"linear",delay:0});this.animation=t,t.opacity(0).rotateX(-100).step(),this.setData({animationData:t.export()}),setTimeout(function(){t.opacity(1).rotateX(0).step(),this.setData({animationData:t}),"close"==e&&this.setData({showModalStatus:!1})}.bind(this),200),"open"==e&&this.setData({showModalStatus:!0})},askFor:function(e){this.setData({displays:"none",formId:e.detail.formId}),"#ffbf21"==t.data.bcgcolor?wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(r){wx.getStorage({key:"orderType",success:function(d){wx.request({url:o+"skordermodel/selUnpaidOrder",data:{wechatUserId:a.data,orderType:d.data,storeId:r.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){"操作成功！"==a.data.msg?a.data.count>0&&"N"!=t.data.editType&&0==t.data.wmFlg?t.setData({display:"block",orderId:a.data.orderId}):t.chkOrder(e):t.setData({displayy_0:"block",titlename_0:"获取未支付订单操作失败",carname_0:"请联系后台管理员"})}})}})}})}}):t.setData({displayy_0:"block",titlename_0:"提示",carname_0:"当前没有点餐，不可下单"})}}); 
 			}); 	require("pages/index/takeOut/takeOut.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){for(var e=[],t=0;t<3;++t){var a=Math.floor(256*Math.random()).toString(16);a=1==a.length?"0"+a:a,e.push(a)}return"#"+e.join("")}var t,a,o=require("../../utils/util.js"),s=require("../../module/getPhone.js"),n=require("../../module/findAllMenuStorePower.js"),r=getApp(),d=r.globalData.httpUrl,i=r.globalData.tuhttpUrl;r.globalData.testhttpUrl;Page({data:{isPlay:!1,src:"",describe:"",desc:"",homePageimg:"",coverFlg:!1,videoCover:"http://qiniu.shoukaikeji.com/FkvxMcZloG6t1ZrxZlb3LX9ZSPbh",dianUrl:"http://qiniu.shoukaikeji.com/Fv2jhbGuGlGHLtBixVHMkUOEmE3C",vipUrl:"http://qiniu.shoukaikeji.com/FgdPeEuxFyAfoUK-dkmtmIqNjMtr",wntjUrls:"http://qiniu.shoukaikeji.com/FrecMOHfCdA8Vb1q9THBwB4ozYcx",wntjUrls1:"http://qiniu.shoukaikeji.com/FlYKx1bXrk8RbCTm1vQuRbjzhVgi",wntjUrls2:"http://qiniu.shoukaikeji.com/Ftpj8aVwFVJ94iSKX91w5bHBRTkQ",wntjUrls3:"http://qiniu.shoukaikeji.com/FmhD6wldZQYRZhahCQBvgb7fwyPA",storeId:"",httpUrl:d,tuhttpUrl:i,ydFlag:!1,pdFlag:!1,syFlag:!1,movies:[],cutfoods:[],tsfoods:[],wntjName:"",wntjName1:"",wntjName2:"",wntjName3:"",urls:"",urls1:"",urls2:"",urls3:"",specialitiesId:"",specialitiesId1:"",specialitiesId2:"",specialitiesId3:"",StoreIdentity:"",displa:!1,displayy:"none"},onLoad:function(e){(a=this).ss(),wx.setStorage({key:"goods",data:[]}),wx.setStorage({key:"receiverNotes",data:{wechatUserAddressReceiverName:"",wechatUserAddressReceiverPhoneNum:"",wechatUserAddressFullAddress:"",wechatUserAddressAddress:"",addressId:""}});var t=decodeURIComponent(e.scene);if("undefined"!=t&&void 0!=t&&""!=t&&null!=t){var s=t.split(",")[0].replace('"',""),i=t.split(",")[1].replace('"',"");console.error(i),console.log(s),wx.request({url:d+"skstoremodel/findStoreById",data:{pid:s},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var s=t.data,c=t.data.storeInfoStoreId;wx.setStorage({key:"storeInfo",data:s}),wx.setNavigationBarTitle({title:t.data.storeInfoName}),"'Y'"==i&&(a.setData({waimaiHidden:!0}),wx.request({url:d+"skstoremodel/selSingleConfListByStoreIdWX",data:{storeId:c},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data,s=!0,n=!0;if(console.log(JSON.stringify(t)+"====singleConfBean====>"),t){var r=o.formatTimeOnly(new Date).replace(":",""),d=t.reservedBegin.replace(":",""),i=t.reservedEnd.replace(":",""),c=t.takeoutBegin.replace(":",""),l=t.takeoutEnd.replace(":","");parseInt(d)<parseInt(i)||parseInt(c)<parseInt(l)?(s=parseInt(d)<parseInt(r)&&parseInt(i)>parseInt(r),n=parseInt(c)<parseInt(r)&&parseInt(l)>parseInt(r)):(s=parseInt(d)<parseInt(r)||parseInt(i)>parseInt(r),n=parseInt(c)<parseInt(r)||parseInt(l)>parseInt(r))}console.log("yudingIsuse ==> "+s),console.log("waimaiIsuse ==> "+n),a.setData({singleConfBean:e.data,yudingIsuse:s,waimaiIsuse:n}),a.takeOut()}})),wx.setStorageSync("storeId",c),a.resendIndex(c),o.getShareInfos(a,d),o.setCompanyId(a,e),o.setStoreId(a),o.setStoreInfo(a),o.setUserId(a),o.setStoreInfoName(a),wx.setStorage({key:"collectMoney",data:0}),wx.setStorage({key:"couponInfo",data:""}),r.getUserInfo(function(e){console.log(e),a.setData({userInfo:e})}),wx.getStorage({key:"companyId",success:function(e){wx.getLocation({type:"wgs84",success:function(t){wx.request({url:d+"skstoremodel/wxSelectStoreByCompanyId",data:{storeInfoCompanyInfoId:e.data,storeInfoLongitude:t.longitude,storeInfoLatitude:t.latitude,condition:"",storeInfoName:"",storeInfoAddress:""},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){for(var t=0;t<e.data.length;t++)if(e.data[t].storeInfoStoreId==c){var a=e.data[t].takeOutDispatchType;wx.setStorage({key:"takeOutDispatchType",data:a})}}})}})}});var l=wx.createVideoContext("myVideo");a.setData({videoContext:l}),wx.getStorage({key:"storeId",success:function(e){wx.request({url:d+"skstoremodel/getDesktopcycleDateNew",data:{desktopCycleConfigStoreInfoStoreId:e.data,desktopCycleConfigIsUseFlg:"0"},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data.videoFlg;a.setData({videoFlg:t});var o=[];if("1"==t){var s=e.data.videoUrl;console.log(s),a.setData({src:s}),o.push({desktopCycleConfigImgUrl:a.data.src,marks:0}),console.log("========视频文件名称=========="),console.log(o[0].desktopCycleConfigImgUrl),console.log("========轮播列表=========="),console.log(o)}else{for(var r in e.data.imgList)o.push({desktopCycleConfigImgUrl:e.data.imgList[r].desktopCycleConfigImgUrl,marks:"1"});console.log("============lunboMovie========="),console.log(o)}a.setData({lunboMovie:o}),n.getmenus(d).then(function(e){var t=[];console.log("=====findAllMenuStorePower success======="),console.log(e.data);var o=void 0,s=void 0;for(var n in e.data)t.push({buttonName:e.data[n].buttonName,menuStorePowerisUser:e.data[n].menuStorePowerisUser,menuStorePowerisShow:e.data[n].menuStorePowerisShow}),"点餐"==e.data[n].buttonName?o=e.data[n].imgUrl:"会员"==e.data[n].buttonName&&(s=e.data[n].imgUrl);console.log(t),a.setData({menus:t,dianMenuImgUrl:o,vipMenuImgUrl:s}),a.chkShowFlag(),wx.setStorage({key:"menus",data:t})})}})}}),wx.getStorage({key:"storeId",success:function(e){wx.request({url:d+"skfoodmodel/findFoodInfoWX",data:{storeId:c,discountFlg:"1"},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log("========what you are======",e),a.setData({cutfoods:e.data})}})}}),wx.getStorage({key:"storeId",success:function(e){wx.request({url:d+"skfoodmodel/selFoodSpecialitiesflg",data:{storeId:c,specialitiesFlg:"1"},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){a.setData({tsfoods:e.data});for(var t=0;t<e.data.length;t++)0==t?a.setData({wntjName:e.data[t].name,urls:e.data[t].url,specialitiesId:e.data[t].id}):1==t?a.setData({urls1:e.data[t].url,wntjName1:e.data[t].name,specialitiesId1:e.data[t].id}):2==t?a.setData({urls2:e.data[t].url,wntjName2:e.data[t].name,specialitiesId2:e.data[t].id}):3==t&&a.setData({urls3:e.data[t].url,wntjName3:e.data[t].name,specialitiesId3:e.data[t].id})}}),wx.request({url:d+"skstoremodel/selSingleConfListByStoreIdWX",data:{storeId:e.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data,s=!0,n=!0;if(console.log(JSON.stringify(t)+"====singleConfBean====>"),t){var r=o.formatTimeOnly(new Date).replace(":",""),d=t.reservedBegin.replace(":",""),i=t.reservedEnd.replace(":",""),c=t.takeoutBegin.replace(":",""),l=t.takeoutEnd.replace(":","");console.log("====selSingleConfListByStoreIdWX====="),console.log(r),console.log(d),console.log(i),console.log(c),console.log(l),console.log("====selSingleConfListByStoreIdWX====="),console.log("reservedBegin ==> "+(parseInt(d)<parseInt(r))),console.log("reservedEnd ==> "+i>r),console.log("reservedBegin ==> "+c<r),console.log("reservedEnd ==> "+l>r),parseInt(d)<parseInt(i)||parseInt(c)<parseInt(l)?(s=parseInt(d)<parseInt(r)&&parseInt(i)>parseInt(r),n=parseInt(c)<parseInt(r)&&parseInt(l)>parseInt(r)):(s=parseInt(d)<parseInt(r)||parseInt(i)>parseInt(r),n=parseInt(c)<parseInt(r)||parseInt(l)>parseInt(r))}console.log("yudingIsuse ==> "+s),console.log("waimaiIsuse ==> "+n),a.setData({singleConfBean:e.data,yudingIsuse:s,waimaiIsuse:n})}})}}),wx.getStorage({key:"companyId",success:function(e){var t=e.data;wx.getStorage({key:"storeId",success:function(e){var o=e.data;wx.request({url:d+"skmembermodel/findVipCardBy",data:{companyId:t,storeId:o},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data.id;a.setData({cardId:t,vipCard:e.data}),wx.setStorage({key:"cardId",data:e.data.id}),wx.setStorage({key:"vipCard",data:e.data})}})}})}}),wx.getStorage({key:"userId",success:function(e){wx.getStorage({key:"connectedSocket",success:function(t){1==t.data?console.log("======已有连接socket不连接========="):o.conSocket(e.data,d)},fail:function(t){o.conSocket(e.data,d)}})}})}})}else if(void 0!=e.storeId&&"undefined"!=e.storeId&&null!=e.storeId&&"null"!=e.storeId&&""!=e.storeId){console.log("========转发进入=========");var c=e.storeId,l=e.companyId;wx.setStorageSync("storeId",c),wx.setStorageSync("companyId",l),console.log(c),console.log(l),wx.request({url:d+"skstoremodel/wxSelectStoreByCompanyId",data:{storeInfoCompanyInfoId:l,storeInfoLongitude:"",storeInfoLatitude:"",condition:"",storeInfoName:"",storeInfoAddress:""},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data;for(var o in t)if(t[o].storeInfoStoreId==c){var s=t[o];wx.setStorage({key:"storeInfo",data:s}),wx.setNavigationBarTitle({title:s.storeInfoName}),a.setData({storeInfo:s})}a.resendIndex(c)}})}else{o.getShareInfos(a,d),o.setCompanyId(a,e),o.setStoreId(a),o.setStoreInfo(a),o.setUserId(a),o.setStoreInfoName(a),wx.setStorage({key:"collectMoney",data:0}),wx.setStorage({key:"couponInfo",data:""}),r.getUserInfo(function(e){console.log(e),a.setData({userInfo:e})});var u=wx.createVideoContext("myVideo");a.setData({videoContext:u}),wx.getStorage({key:"storeId",success:function(e){wx.request({url:d+"skstoremodel/getDesktopcycleDateNew",data:{desktopCycleConfigStoreInfoStoreId:e.data,desktopCycleConfigIsUseFlg:"0"},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data.videoFlg;a.setData({videoFlg:t});var o=[];if("1"==t){var s=e.data.videoUrl;console.log(s),a.setData({src:s}),o.push({desktopCycleConfigImgUrl:a.data.src,marks:0}),console.log("========视频文件名称=========="),console.log(o[0].desktopCycleConfigImgUrl),console.log("========轮播列表=========="),console.log(o)}else{for(var r in e.data.imgList)o.push({desktopCycleConfigImgUrl:e.data.imgList[r].desktopCycleConfigImgUrl,marks:"1"});console.log("============lunboMovie========="),console.log(o)}a.setData({lunboMovie:o}),n.getmenus(d).then(function(e){var t=[];console.log("=====findAllMenuStorePower success======="),console.log(e.data);var o=void 0,s=void 0;for(var n in e.data)t.push({buttonName:e.data[n].buttonName,menuStorePowerisUser:e.data[n].menuStorePowerisUser,menuStorePowerisShow:e.data[n].menuStorePowerisShow}),"点餐"==e.data[n].buttonName?o=e.data[n].imgUrl:"会员"==e.data[n].buttonName&&(s=e.data[n].imgUrl);console.log(t),a.setData({menus:t,dianMenuImgUrl:o,vipMenuImgUrl:s}),a.chkShowFlag(),wx.setStorage({key:"menus",data:t})})}})}}),wx.getStorage({key:"storeId",success:function(e){wx.request({url:d+"skfoodmodel/findFoodInfoWX",data:{storeId:e.data,discountFlg:"1"},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log("========what you are======",e),a.setData({cutfoods:e.data})}})}}),wx.getStorage({key:"storeId",success:function(e){wx.request({url:d+"skfoodmodel/selFoodSpecialitiesflg",data:{storeId:e.data,specialitiesFlg:"1"},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){a.setData({tsfoods:e.data});for(var t=0;t<e.data.length;t++)0==t?a.setData({wntjName:e.data[t].name,urls:e.data[t].url,specialitiesId:e.data[t].id}):1==t?a.setData({urls1:e.data[t].url,wntjName1:e.data[t].name,specialitiesId1:e.data[t].id}):2==t?a.setData({urls2:e.data[t].url,wntjName2:e.data[t].name,specialitiesId2:e.data[t].id}):3==t&&a.setData({urls3:e.data[t].url,wntjName3:e.data[t].name,specialitiesId3:e.data[t].id})}}),wx.request({url:d+"skstoremodel/selSingleConfListByStoreIdWX",data:{storeId:e.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data,s=!0,n=!0;if(console.log(JSON.stringify(t)+"====singleConfBean====>"),t){var r=o.formatTimeOnly(new Date).replace(":",""),d=t.reservedBegin.replace(":",""),i=t.reservedEnd.replace(":",""),c=t.takeoutBegin.replace(":",""),l=t.takeoutEnd.replace(":","");parseInt(d)<parseInt(i)||parseInt(c)<parseInt(l)?(s=parseInt(d)<parseInt(r)&&parseInt(i)>parseInt(r),n=parseInt(c)<parseInt(r)&&parseInt(l)>parseInt(r)):(s=parseInt(d)<parseInt(r)||parseInt(i)>parseInt(r),n=parseInt(c)<parseInt(r)||parseInt(l)>parseInt(r))}console.log("yudingIsuse ==> "+s),console.log("waimaiIsuse ==> "+n),a.setData({singleConfBean:e.data,yudingIsuse:s,waimaiIsuse:n})}})}}),wx.getStorage({key:"companyId",success:function(e){var t=e.data;wx.getStorage({key:"storeId",success:function(e){var o=e.data;wx.request({url:d+"skmembermodel/findVipCardBy",data:{companyId:t,storeId:o},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data.id;a.setData({cardId:t,vipCard:e.data}),wx.setStorage({key:"cardId",data:e.data.id}),wx.setStorage({key:"vipCard",data:e.data})}})}})}}),wx.getStorage({key:"userId",success:function(e){wx.getStorage({key:"connectedSocket",success:function(t){1==t.data?console.log("======已有连接socket不连接========="):o.conSocket(e.data,d)},fail:function(t){o.conSocket(e.data,d)}})}})}},closeTk:function(e){console.log("=====index closeTk start====="),a.setData({displa:!1})},ss:function(){wx.getStorage({key:"userId",success:function(e){wx.getStorage({key:"storeId",success:function(t){wx.request({url:d+"skmembermodel/findWechatUserById",data:{wechatUserId:e.data,wechatUserStoreStoreInfoStoreId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log("结果=====》",e.data.wechatUserStoreIdentity),"v"==e.data.wechatUserStoreIdentity?a.setData({StoreIdentity:"v"}):a.setData({StoreIdentity:"f"})}})}})}})},selOperationRecord:function(){wx.getStorage({key:"storeId",success:function(e){wx.getStorage({key:"userId",success:function(t){wx.request({url:d+"skmembermodel/getOperationRecordNum",data:{wxUserUuid:t.data,storeUuid:e.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log(e.data+"===res.data提醒信息量===>");var t=e.data,a=String(t);t>0&&wx.setTabBarBadge({index:3,text:a})}})}})}})},onShow:function(){wx.getStorage({key:"priceT",success:function(e){a.setData({priceT:e.data})}}),(a=this).ss(),wx.onSocketMessage(function(e){console.log("===========接收到服务器信息=============="),console.log(e.data),o.getTkInfos(a,e),o.playMusic(a,e)}),wx.getStorage({key:"saomajin",success:function(e){e.data&&(a.onLoad(),wx.setStorage({key:"saomajin",data:!1}))}}),console.log("=====isPlay=====:"+a.data.isPlay),wx.onSocketOpen(function(e){wx.setStorage({key:"connectedSocket",data:!0}),console.log("WebSocket连接已打开！"),console.log(e)}),wx.onSocketClose(function(e){console.log("WebSocket连接已关闭！"),wx.getStorage({key:"userId",success:function(e){o.conSocket(e.data,d)},fail:function(){console.log("连接socket失败"),wx.setStorage({key:"connectedSocket",data:!1})}})}),wx.onSocketError(function(e){console.log("WebSocket连接打开失败，请检查！"),console.log(e),wx.setStorage({key:"connectedSocket",data:!1})}),a.selOperationRecord()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),a=this,setTimeout(function(){a.onPullDownRefresh()},500)},onShareAppMessage:function(){return console.log("======share开始======="),{title:a.data.shareTitle,desc:"",imageUrl:a.data.shareImgUrl,path:"/pages/index/index?storeId="+a.data.storeId+"&companyId="+a.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},onUnload:function(){(a=this).toStop(),wx.closeSocket({success:function(e){console.log("======success======="),console.log(e),wx.setStorage({key:"connectedSocket",data:!1})},fail:function(e){console.log("======fail======="),console.log(e)}})},onHide:function(){a=this},goToActive:function(){wx.navigateTo({url:"../active/active"})},wifi:function(e){wx.navigateTo({url:"../index/wifi/wifi"})},map:function(){wx.navigateTo({url:"../maps/maps"})},wntjDetail:function(e){var t=e.currentTarget.dataset.specialitiesId;wx.setStorage({key:"specialitiesId",data:t}),console.log(e),wx.navigateTo({url:"../index/wntjDetail/wntjDetail"})},yhtjDetail:function(e){console.log("进入次数"),clearTimeout(t),t=setTimeout(function(){console.log("优惠推荐",e);var t=e.currentTarget.dataset.id,o=e.currentTarget.dataset.index;wx.setStorage({key:"foodId",data:t}),wx.navigateTo({url:"../index/takeOut/queryOrder/queryOrder?yhtj=1&yhtjindex="+o+"&yhtjinNum="+a.data.cutfoods.length})},1e3)},destine:function(e){var t=this;if(t.chkUserFlag("预订"))if(t.data.yudingIsuse){wx.setStorage({key:"currentTab",data:0});wx.setStorage({key:"ydFlg",data:!0}),wx.setStorage({key:"dcFlg",data:!1}),wx.setStorage({key:"wmFlg",data:!1}),wx.setStorage({key:"carArray",data:[]}),wx.getStorage({key:"userId",success:function(e){wx.getStorage({key:"storeId",success:function(a){wx.request({url:d+"skordermodel/selUnpaidOrder",data:{wechatUserId:e.data,orderType:"Y",storeId:a.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){"操作成功！"==e.data.msg?e.data.count>0?(wx.setStorage({key:"orderId",data:e.data.orderId}),wx.request({url:d+"skordermodel/getOrderById",data:{orderType:"Y",id:e.data.orderId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log(e.data.orderState);var t="destine/destine";"1"==e.data.orderState?t="destine/waitReceipt/waitReceipt?orderId="+e.data.id+"&orderState=1&orderType=Y":"2"==e.data.orderState&&(t=e.data.foodList.length>0?"takeOut/takeOut?flag=Y&orderId="+e.data.id+"&editType=N":"destine/Receipt/Receipt?flag=Y&orderId="+e.data.id+"&editType=N&orderState=2"),wx.navigateTo({url:t})}})):wx.navigateTo({url:"destine/destine"}):t.setData({displayy:"block",titlename:"获取未支付订单操作失败",carname:"请联系后台管理员"})}})}})}})}else t.setData({displayy:"block",titlename:"提示",carname:"不在预定时间范围内"});else t.setData({displayy:"block",titlename:"提示",carname:"没有预定功能"})},checkBusinessTime:function(){var e=a.data.storeInfo.storeInfoBusinessStartTime.replace(":",""),t=a.data.storeInfo.storeInfoBusinessEndTime.replace(":",""),s=o.formatTime(new Date).split(" ")[1].split(":")[0]+o.formatTime(new Date).split(" ")[1].split(":")[1];console.log("=========查看时间==========="),console.log(e),console.log(t),console.log(s),1*e<1*t?(console.log("======起始时间小于结束时间========"),1*e>1*s||1*s>1*t?a.setData({businessTime:!1}):a.setData({businessTime:!0})):1*e>1*t&&(console.log("======起始时间大于结束时间========"),1*e>1*s&&1*s>1*t?a.setData({businessTime:!1}):a.setData({businessTime:!0}))},fellin:function(e){a.checkBusinessTime(),a.data.businessTime?a.chkUserFlag("排队")?wx.getStorage({key:"openId",success:function(e){wx.getStorage({key:"storeId",success:function(t){wx.request({url:d+"skordermodel/findlPersonNumLineUpByOpenId",data:{openId:e.data,storeId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log("===findlPersonNumLineUpByOpenId success==="),e.data>0?wx.navigateTo({url:"../index/fellin/queuingNumber/queuingNumber"}):wx.navigateTo({url:"../index/fellin/fellin"})}})}})}}):a.setData({displayy:"block",titlename:"提示",carname:"没有排队功能"}):a.setData({displayy:"block",titlename:"不在店铺营业时间",carname:"不在店铺营业时间"})},collect:function(e){if(a.checkBusinessTime(),a.data.businessTime)if(a.chkUserFlag("收银")){wx.navigateTo({url:"../index/collect/collect"})}else a.setData({displayy:"block",titlename:"提示",carname:"没有收银功能"});else a.setData({displayy:"block",titlename:"不在店铺营业时间",carname:"功能不可用"})},member:function(){wx.getStorage({key:"vipCard",success:function(e){"Y"==a.data.vipUseFlg?(console.log("======有会员卡======="),wx.getStorage({key:"userId",success:function(e){wx.getStorage({key:"storeId",success:function(t){wx.request({url:d+"skmembermodel/findWechatUserById",data:{wechatUserId:e.data,wechatUserStoreStoreInfoStoreId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){"v"==e.data.wechatUserStoreIdentity?a.setData({isVip:!0}):a.setData({isVip:!1});var t=a.data.isVip;console.log("===myCard==="),console.log(t),console.log("===myCard==="),t?wx.navigateTo({url:"../user/myCard/receiveMyCard/receiveMyCard"}):wx.showToast({title:"请先领卡",success:function(){wx.navigateTo({url:"../user/myCard/myCard"})}})}})}})}})):wx.getStorage({key:"companyId",success:function(e){wx.getStorage({key:"storeId",success:function(t){wx.request({url:d+"skmembermodel/selEquityCardWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{companyId:e.data,storeId:t.data},success:function(e){e.data.isExistence||"Y"!=a.data.forceUseFlg?e.data.isExistence||"N"!=a.data.forceUseFlg?e.data.isExistence&&"N"==a.data.forceUseFlg?a.setData({displayy:"block",titlename:"提示",carname:"商家无会员卡功能且商家无权益卡功能"}):wx.getStorage({key:"userId",success:function(e){wx.getStorage({key:"storeId",success:function(t){wx.request({url:d+"skmembermodel/selEquitycardByWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{userId:e.data,storeId:t.data},success:function(e){"Y"==e.data.isEquitycard?wx.navigateTo({url:"../user/forceCard/alterForceCard/alterForceCard"}):wx.navigateTo({url:"../user/forceCard/receiveForceCard/receiveForceCard"})}})}})}}):a.setData({displayy:"block",titlename:"提示",carname:"商家无会员卡功能且商家无权益卡功能"}):a.setData({displayy:"block",titlename:"提示",carname:"商家无会员卡功能且没有权益卡可购买"})}})}})}})}})},member1:function(){"1"==a.data.hasReceived?wx.navigateTo({url:"../user/myCard/receiveMyCard/receiveMyCard"}):a.member()},getPhoneNumber:function(e){console.log("=======首页点击会员 开始获取手机号======"),a=this,console.log(e.detail.iv+"看"),console.log(e.detail.encryptedData+"再看"),"getPhoneNumber:fail user deny"==e.detail.errMsg||"getPhoneNumber:fail:cancel to confirm login"==e.detail.errMsg?console.log("======拒绝授权========"):(console.log("======确认授权========"),console.log("======开始获取session_key========"),wx.getStorage({key:"session_key",success:function(t){console.log("session_key===>"+t.data),a.setData({session_key:t.data}),console.log("======准备进入解密========"),s.getPhoneNum(e.detail.encryptedData,e.detail.iv,r.globalData.appId,a.data.session_key).then(function(e){a.member1()})}})),console.log("=======首页点击会员 开始获取手机号 结束======")},takeOut:function(e){if(a.chkUserFlag("外卖"))if(a.data.waimaiIsuse){wx.setStorage({key:"currentTab",data:2}),wx.setStorage({key:"wmFlg",data:!0}),wx.setStorage({key:"dcFlg",data:!1}),wx.setStorage({key:"ydFlg",data:!1}),wx.setStorage({key:"orderType",data:"W"}),wx.setStorage({key:"carArray",data:[]}),wx.navigateTo({url:"../index/takeOut/takeOut?editType=Y"})}else a.setData({displayy:"block",titlename:"提示",carname:"不在可接单时间范围"});else a.setData({displayy:"block",titlename:"提示",carname:"没有外卖功能"})},cutUsername:function(){wx.reLaunch({url:"../welcome/welcome"})},orderBut:function(e){if(wx.setStorage({key:"wmFlg",data:!1}),wx.setStorage({key:"dcFlg",data:!0}),wx.setStorage({key:"ydFlg",data:!1}),wx.setStorage({key:"orderType",data:"D"}),wx.setStorage({key:"carArray",data:[]}),a.setData({showModalStatus:!1}),a.checkBusinessTime(),a.data.businessTime)if(a.chkUserFlag("点餐")){var t=e.currentTarget.dataset.statu;wx.setStorage({key:"currentTab",data:1}),a.util(t),wx.navigateTo({url:"../index/takeOut/takeOut?editType=Y"})}else a.setData({displayy:"block",titlename:"提示",carname:"没有点餐功能"});else a.setData({displayy:"block",titlename:"不在店铺营业时间",carname:"功能不可用"})},zhijieDian:function(){wx.setStorage({key:"wmFlg",data:!1}),wx.setStorage({key:"dcFlg",data:!0}),wx.setStorage({key:"ydFlg",data:!1}),wx.setStorage({key:"orderType",data:"D"}),wx.setStorage({key:"carArray",data:[]}),wx.navigateTo({url:"../index/takeOut/takeOut?editType=Y"}),a.setData({showModalStatus:!1})},saomaDian:function(){wx.scanCode({success:function(e){console.log("结果:"+e.result+"二维码类型:"+e.scanType+"字符集:"+e.charSet),new RegExp("zhuohao:").test(e.result)?(wx.showToast({title:"成功",icon:"success",duration:2e3}),wx.setStorage({key:"wmFlg",data:!1}),wx.setStorage({key:"dcFlg",data:!0}),wx.setStorage({key:"ydFlg",data:!1}),wx.setStorage({key:"orderType",data:"D"}),wx.setStorage({key:"carArray",data:[]}),wx.setStorage({key:"dc",data:1}),wx.navigateTo({url:"../index/takeOut/takeOut?zuohao="+e.result.replace("zhuohao:","")+"&editType=Y"})):wx.showToast({title:"未获取桌号",icon:"loading",mask:!0,duration:2e3})},fail:function(e){wx.showToast({title:"未获取桌号",icon:"success",duration:2e3})},complete:function(e){}}),a.setData({showModalStatus:!1})},util:function(e){var t=wx.createAnimation({duration:200,timingFunction:"linear",delay:0});this.animation=t,t.opacity(0).rotateX(-100).step(),this.setData({animationData:t.export()}),setTimeout(function(){t.opacity(1).rotateX(0).step(),this.setData({animationData:t}),"close"==e&&this.setData({showModalStatus:!1})}.bind(this),200),"open"==e&&this.setData({showModalStatus:!0})},chkUserFlag:function(e){var t=a.data.menus,o=!0;for(var s in t)t[s].buttonName==e&&"N"==t[s].menuStorePowerisUser&&(console.log(t[s].buttonName+" , "+t[s].menuStorePowerisUser),o=!1);return o},chkShowFlag:function(){var e=a.data.menus;console.log("chkShowFlag ==> "),console.log(e);for(var t in e)if("预订"==e[t].buttonName)a.setData({yuding:e[t].menuStorePowerisShow});else if("排队"==e[t].buttonName)a.setData({paidui:e[t].menuStorePowerisShow});else if("收银"==e[t].buttonName)a.setData({shouyin:e[t].menuStorePowerisShow});else if("外卖"==e[t].buttonName)a.setData({waimai:e[t].menuStorePowerisShow});else if("点餐"==e[t].buttonName)a.setData({diancan:e[t].menuStorePowerisShow});else if("会员"==e[t].buttonName){var o=e[t].menuStorePowerisShow,s=e[t].menuStorePowerisUser;a.setData({vipShowFlg:o,vipUseFlg:s}),"N"==e[t].menuStorePowerisShow?a.setData({huiyuan:"N"}):a.setData({huiyuan:"Y"})}else if("权益卡"==e[t].buttonName){var r=e[t].menuStorePowerisShow,i=e[t].menuStorePowerisUser;a.setData({forceShowFlg:r,forceUseFlg:i}),"N"==e[t].menuStorePowerisShow?a.setData({quanyika:"N"}):a.setData({quanyika:"Y"})}else"首页广告"==e[t].buttonName&&("N"==e[t].menuStorePowerisShow?a.setData({coverFlgCheck:"N"}):a.setData({coverFlgCheck:"Y"}),"N"==a.data.coverFlgCheck?a.setData({coverFlg:!1,heightFlg:"",overflowFlg:""}):n.getindeximg(d).then(function(e){""!=e.data.title&&void 0!=e.data.title&&null!=e.data.title?a.setData({describe:e.data.title,desc:e.data.content,homePageimg:e.data.imgUrl,coverFlg:!0,heightFlg:"100vh",overflowFlg:"hidden"}):""!=e.data.imgUrl&&void 0!=e.data.imgUrl&&null!=e.data.imgUrl?a.setData({describe:e.data.title,desc:e.data.content,homePageimg:e.data.imgUrl,coverFlg:!0,heightFlg:"100vh",overflowFlg:"hidden"}):a.go()}))},go:function(){console.log(a),a.setData({coverFlg:!1,heightFlg:"",overflowFlg:""}),a.toPlay(),console.log("videoFlg:"+a.data.videoFlg),console.log("isPlay:"+a.data.isPlay),a.data.videoContext.play()},toPlay:function(){console.log("========播放视频========"),"1"==a.data.videoFlg?a.setData({isPlay:!0}):a.setData({isPlay:!1}),setTimeout(function(){a.data.videoContext.play()},100),console.log("isPlay:"+a.data.isPlay)},toStop:function(){a.data.videoContext.stop(),a.setData({isPlay:!1})},onReady:function(){a=this},bindInputBlur:function(e){console.log(e.detail.value),a.setData({inputValue:e.detail.value})},bindSendDanmu:function(){a.videoContext.sendDanmu({text:a.data.inputValue,color:e()})},resendIndex:function(e){console.log("=========进入跳转主页========="),wx.login({success:function(t){console.log("====wx.login success====");var o=t.code;t.code?(console.log("====get code===="),console.log("res.code ==> "+t.code),wx.getSetting({success:function(t){if(console.log("====wx.getSetting success===="),console.log(t),console.log(t.authSetting["scope.userInfo"]),t.authSetting["scope.userInfo"])wx.getUserInfo({success:function(t){console.log("====wx.getUserInfo success===="),wx.setStorage({key:"userName",data:t.userInfo.nickName}),wx.setStorage({key:"avatarUrl",data:t.userInfo.avatarUrl}),wx.request({url:d+"skmembermodel/getOpenidS",data:{code:o,AppID:r.globalData.appId,Secret:r.globalData.Secret,storeUuid:e,wxUserNickName:t.userInfo.nickName,headImgUrl:t.userInfo.avatarUrl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var o=t.data.wechatUser.wechatUserId;if(a.setData({onClickFlag:!0,clickedStore:!1,userId:o}),null!=t.data.openid&&""!=t.data.openid){var s=t.data.wechatUser.wechatUserStoreIdentity;wx.setStorage({key:"StoreIdentity",data:s}),wx.setStorage({key:"session_key",data:t.data.session_key}),wx.setStorage({key:"openId",data:t.data.openid}),wx.setStorage({key:"userId",data:t.data.wechatUser.wechatUserId}),wx.setStorage({key:"storeId",data:e}),wx.getStorage({key:"companyId",success:function(a){console.log("=============判断是否为该商户下的会员==========="),wx.request({url:d+"skmembermodel/updatVipCardStore",data:{wechatUserId:t.data.wechatUser.wechatUserId,wechatUserStoreStoreInfoStoreId:e,companyId:a.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log("=============判断结果为===========")}}),wx.request({url:d+"skmembermodel/updatEquitycardStore",data:{wxUserId:t.data.wechatUser.wechatUserId,storeId:e,companyId:a.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){}})}})}else wx.showToast({title:"登录失败"})}})},fali:function(e){console.log("====wx.login fail====")}});else{console.log("======未授权");var s="";wx.getStorage({key:"storeInfo",success:function(t){console.log("storeInfo ==>",a.data.waimai),console.log(t.data),s=t.data.storeInfoHeadImgUrl,a.data.waimaiHidden?wx.reLaunch({url:"/pages/welcome/accredit/accredit?data="+o+"&store_uuid="+e+"&imgurl="+s+"&goWaimai=true"}):wx.reLaunch({url:"/pages/welcome/accredit/accredit?data="+o+"&store_uuid="+e+"&imgurl="+s})}})}},fail:function(e){console.log("====wx.getSetting fail====")}})):console.log("获取用户登录态失败！"+t.errMsg)},fail:function(e){console.log("====wx.login fail===="),console.log("错误信息"),console.log(e)}})}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/user/user';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/user.js';	define("pages/user/user.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=getApp(),a=require("../../utils/util.js"),o=require("../../module/getPhone"),n=require("../../utils/util.js"),s=t.globalData.httpUrl;Page({data:{shakeShowFlg:"N",isRefreshing:!1,wechatUserStoreIntegeal:0,wechatUserStoreBalance:0,vipColor:"#ffbf20",httpUrl:s,isVip:!1,noticeCount:0,selectedFlag:[!1,!1,!1,!1,!1],contactName:"",contactTel:"",contactAddr:"",allowtion:!1,session_key:"",phone:"",display:"none",displayy:"none",isEquitycard:"",isEquitycardn:"",companyId:"",storeId:"",displayy_0:"none",displayy_1:"none",displayy_2:"none",displayy_3:"none",display_alone1:"none",displayy_4:"none"},onLoad:function(t){e=this,wx.setStorage({key:"goods",data:[]});var a=decodeURIComponent(t.scene);if("undefined"!=a&&void 0!=a&&""!=a&&null!=a){e.setData({allowtion:!0});var o=a.split(",")[0].replace('"',"");e.setData({pid:o}),console.log(o),wx.request({url:s+"skstoremodel/findStoreById",data:{pid:o},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=t.data,o=t.data.storeInfoStoreId;wx.setStorage({key:"storeInfo",data:a}),wx.setNavigationBarTitle({title:a.storeInfoName}),console.log("storeInfo.storeInfoName"),console.log(a.storeInfoName),e.setData({storeId:o}),wx.setStorageSync("storeId",o),n.getShareInfos(e,s),e.resendIndex(o)}})}else n.getShareInfos(e,s),n.setStoreInfo(e),wx.getStorage({key:"connectedSocket",success:function(e){e.data?console.log("============已有socket不连接============="):wx.getStorage({key:"userId",success:function(e){n.conSocket(e.data,s)}})}}),e.loadOther()},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){(e=this).qyCard(),wx.getStorage({key:"isEquitycardn",success:function(t){var a=t.data;console.log("==========权益卡状态==========="),console.log(t.data),e.setData({isEquitycardn:a})}}),e.selOperationRecord(),wx.onSocketMessage(function(t){console.log("===========接收到服务器信息=============="),console.log(t.data),n.getTkInfos(e,t),n.playMusic(e,t)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){n.conSocket(e.data,s)}})}),e.findWechatUserById0(),e.data.allowtion&&(e.setData({allowtion:!1}),e.loadOther())},onHide:function(){},onUnload:function(){n.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh();var t={scene:""};(e=this).data.isRefreshing||(e.setData({isRefreshing:!0}),setTimeout(function(){e.setData({isRefreshing:!1}),e.onLoad(t),e.onShow()},2e3))},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.storeInfo.storeInfoName,desc:"",imageUrl:"",path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},checkCoupon:function(){"v"==e.data.findWechatUserById.wechatUserStoreIdentity?"0"==e.data.receiveConfigNum||null==e.data.receiveConfigNum||void 0==e.data.receiveConfigNum?e.setData({displayy_0:"block",carname_0:"您没有优惠券",titlename_0:"请前往领券中心领券"}):wx.navigateTo({url:"../user/myCoupon/myCoupon"}):e.setData({displayy_0:"block",carname_0:"您没有会员卡不能查看优惠券",titlename_0:"提示信息"})},chkOrder3:function(t){e.couponsCenter()},checkCash:function(){"v"==e.data.findWechatUserById.wechatUserStoreIdentity?wx.navigateTo({url:"myCash/myCash"}):e.setData({displayy_0:"block",carname_0:"您没有会员卡不能充值",titlename_0:"提示信息"})},myCard:function(t){var a=e.data.isVip;console.log("===myCard==="),console.log(a),console.log("===myCard==="),a?wx.navigateTo({url:"myCard/receiveMyCard/receiveMyCard"}):e.data.isExistenceVip?e.data.toGotoActive?(wx.navigateTo({url:"myCard/myCard?toGotoActive=0&toGoTuanGou=1"}),e.setData({toGotoActive:!1,toGoTuanGou:!1})):e.data.toGoTuanGou?(wx.navigateTo({url:"myCard/myCard?toGoTuanGou=0&toGotoActive=1"}),e.setData({toGotoActive:!1,toGoTuanGou:!1})):(wx.navigateTo({url:"myCard/myCard?toGotoActive=1&toGoTuanGou=1"}),e.setData({toGotoActive:!1,toGoTuanGou:!1})):wx.showToast({title:"无卡可领取",success:function(){}})},getPhonexuj:function(a){e.data.isVip;"getPhoneNumber:fail user deny"==a.detail.errMsg||"getPhoneNumber:fail:cancel to confirm login"==a.detail.errMsg||wx.getStorage({key:"session_key",success:function(n){console.log(n.data+"_key"),e.setData({session_key:n.data}),o.getPhoneNum(a.detail.encryptedData,a.detail.iv,t.globalData.appId,e.data.session_key).then(function(t){e.myCard()})}})},getPhoneNumber:function(a){e.data.isVip;"getPhoneNumber:ok"==a.detail.errMsg&&wx.getStorage({key:"session_key",success:function(n){console.log(n.data+"_key"),e.setData({session_key:n.data}),o.getPhoneNum(a.detail.encryptedData,a.detail.iv,t.globalData.appId,e.data.session_key).then(function(t){e.myCard()})}})},getPhone:function(a){e.data.isVip;"getPhoneNumber:fail user deny"==a.detail.errMsg||"getPhoneNumber:fail:cancel to confirm login"==a.detail.errMsg||wx.getStorage({key:"session_key",success:function(n){console.log(n.data+"_key"),e.setData({session_key:n.data}),o.getPhoneNum(a.detail.encryptedData,a.detail.iv,t.globalData.appId,e.data.session_key).then(function(t){e.setData({phone:wx.getStorageSync("phone")}),e.receiveForceCard()})}})},alterMyCard:function(t){e.data.isVip?wx.navigateTo({url:"../user/alterMyCard/alterMyCard"}):e.data.isExistenceVip?wx.showToast({title:"请先去领卡",success:function(){wx.navigateTo({url:"myCard/myCard"})}}):wx.showToast({title:"无卡可领",success:function(){}})},getNumber:function(a){e.data.isVip;"getPhoneNumber:fail user deny"==a.detail.errMsg||"getPhoneNumber:fail:cancel to confirm login"==a.detail.errMsg||wx.getStorage({key:"session_key",success:function(n){console.log("session_key===>"+n.data),e.setData({session_key:n.data}),o.getPhoneNum(a.detail.encryptedData,a.detail.iv,t.globalData.appId,e.data.session_key).then(function(t){e.alterMyCard()})}})},shippingAddress:function(t){e.chkUserFlag("外卖")?wx.navigateTo({url:"shippingAddress/shippingAddress"}):e.setData({displayy_0:"block",carname_0:"没有外卖功能",titlename_0:"提示信息"})},comment:function(e){wx.navigateTo({url:"comment/comment"})},couponsCenter:function(t){if(e.chkUserFlag("会员")){var a=e.data.isVip;e.data.couponCnt>0?wx.navigateTo({url:"couponsCenter/couponsCenter"}):1==a?e.setData({displayy:"block",carname:"暂无优惠券可领",carbtn:"1"}):e.setData({displayy:"block",carname:"暂无优惠券可领,是否办理会员卡",carbtn:""})}},resumee:function(){e.setData({displayy:"none"})},chkOrderr:function(){e.setData({displayy:"none"}),wx.navigateTo({url:"myCard/myCard"})},chkOrder0:function(){e.setData({displayy:"none"})},getNotice:function(){wx.removeTabBarBadge({index:3}),wx.getStorage({key:"storeId",success:function(t){wx.getStorage({key:"userId",success:function(a){wx.request({url:s+"skmembermodel/updateBalanceRead",data:{wxUserUuid:a.data,storeUuid:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t.data),e.setData({noticeCount:0})}})}})}}),wx.navigateTo({url:"userNotice/userNotice"})},shopNotice:function(e){wx.navigateTo({url:"shopNotice/shopNotice"})},quxiao:function(){e.setData({display:"none"})},getPhoneNumbery:function(a){console.log("====我的页面开始获取手机号====="),console.log("getPhoneNumber得到的初始向量===》"+a.detail.iv),console.log("getPhoneNumber得到的加密数据===》"+a.detail.encryptedData);var n=e.data.isVip;console.log(n+"=====会员===="),console.log("=====开始判断授权===="),e.setData({display:"none"}),"getPhoneNumber:fail user deny"==a.detail.errMsg||"getPhoneNumber:fail:cancel to confirm login"==a.detail.errMsg?console.log("=====不同意授权===="):(e.setData({display:"none"}),console.log("=====同意授权===="),wx.getStorage({key:"session_key",success:function(n){console.log("getStorage得到的session_key===》"+n.data),e.setData({session_key:n.data}),console.log("=====开始解密====="),o.getPhoneNum(a.detail.encryptedData,a.detail.iv,t.globalData.appId,e.data.session_key).then(function(t){e.setData({toGotoActive:!1}),e.myCard()})}})),console.log("=====摇一摇获取手机号结束=====")},getPhonelj:function(a){console.log("====领劵中心开始获取手机号====="),console.log("getPhoneNumber得到的初始向量===》"+a.detail.iv),console.log("getPhoneNumber得到的加密数据===》"+a.detail.encryptedData);var n=e.data.isVip;console.log(n+"=====会员===="),console.log("=====开始判断授权===="),e.setData({display:"none"}),"getPhoneNumber:fail user deny"==a.detail.errMsg||"getPhoneNumber:fail:cancel to confirm login"==a.detail.errMsg?console.log("=====不同意授权===="):(e.setData({display:"none"}),console.log("=====同意授权===="),wx.getStorage({key:"session_key",success:function(n){console.log("getStorage得到的session_key===》"+n.data),e.setData({session_key:n.data}),console.log("=====开始解密====="),o.getPhoneNum(a.detail.encryptedData,a.detail.iv,t.globalData.appId,e.data.session_key).then(function(t){e.setData({toGotoActive:!1}),e.couponsCenter()})}})),console.log("=====领劵中心获取手机号结束=====")},changeToggle:function(t){var a=t.currentTarget.dataset.index;if(console.log("========index============",a),"0"==a&&!e.data.isVip){if(!e.data.isExistenceVip)return void e.setData({displayy_0:"block",carname_0:"商家无会员卡可领",titlename_0:"提示信息"});if("N"==e.data.vipUseFlg)return void e.setData({displayy_0:"block",carname_0:"商家无会员卡功能",titlename_0:"提示信息"})}"1"!=a?("7"==a&&wx.getStorage({key:"storeId",success:function(t){wx.request({url:s+"skordermodel/getShakeActivityByIdWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{storeId:t.data},success:function(t){t.data.isUseVip?e.data.isVip?(console.log("=====是会员====="),wx.navigateTo({url:"../active/active?secondIn=1"})):(console.log("======不是会员====="),e.setData({display:"block"})):wx.navigateTo({url:"../active/active?secondIn=1"})}})}}),"5"==a&&wx.getStorage({key:"userId",success:function(t){wx.getStorage({key:"storeId",success:function(a){wx.request({url:s+"skmembermodel/selEquitycardByWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{userId:t.data,storeId:a.data},success:function(t){if("Y"!=t.data.isEquitycard){if(!e.data.isExistenceForce)return void e.setData({displayy_0:"block",carname_0:"商家无权益卡可领",titlename_0:"提示信息"});if("N"==e.data.forceUseFlg)return void e.setData({displayy_0:"block",carname_0:"商家无权益卡功能",titlename_0:"提示信息"})}else if(!e.data.isExistenceForce)return void e.setData({displayy_0:"block",carname_0:"您的权益卡已过期",titlename_0:"提示信息"})}})}})}}),e.data.selectedFlag[a]?e.data.selectedFlag[a]=!1:e.data.selectedFlag[a]=!0,wx.getStorage({key:"storeId",success:function(t){console.log(t.data),wx.request({url:s+"skstoremodel/findStoreById",data:{storeId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t.data),console.log(e.data.selectedFlag),e.setData({selectedFlag:e.data.selectedFlag,contactName:t.data.storeInfoContactsName,contactTel:t.data.storeInfoTelephoneNum,contactAddr:t.data.storeInfoAddress})}})}})):e.couponsCenter()},chkUserFlag:function(t){var a=e.data.menus,o=!0;console.log("预订 ==> ",a);for(var n in a)console.log("预订 ==>>>>>>>>> ",a[n].buttonName+" , "+a[n].menuStorePowerisUser),a[n].buttonName==t&&"N"==a[n].menuStorePowerisUser&&(console.log(a[n].buttonName+" , "+a[n].menuStorePowerisUser),o=!1);return o},qyCard:function(){wx.getStorage({key:"userId",success:function(t){wx.getStorage({key:"storeId",success:function(a){wx.request({url:s+"skmembermodel/selEquitycardByWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{userId:t.data,storeId:a.data},success:function(t){var a=t.data.isEquitycard;e.setData({isEquitycardn:a}),console.log("看看状态====》",a)}})}})}})},receiveForceCard:function(){wx.getStorage({key:"userId",success:function(t){console.log("权益卡ees------",t),wx.getStorage({key:"storeId",success:function(o){console.log("权益卡eessss------",o),wx.request({url:s+"skmembermodel/selEquitycardByWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{userId:t.data,storeId:o.data},success:function(t){e.setData({isEquitycard:t.data.isEquitycard});var o=new Date(t.data.validityBegin).getTime(),n=new Date(t.data.validityEnd).getTime(),s=new Date(a.formatDate(new Date)).getTime();if("Y"==t.data.isEquitycard)"1"==t.data.state?e.setData({displayy_2:"block",carname_2:"权益卡已过期",titlename_2:"请重新领取"}):""!=t.data.validityBegin&&""!=t.data.validityEnd?s>=o&&s<=n?wx.navigateTo({url:"forceCard/alterForceCard/alterForceCard"}):s<o?e.setData({display_alone1:"block",titlename_0:"提示信息",carname_0:"未到使用时间\n还不能使用权益卡",cancel:"好\t的"}):s>n&&e.setData({displayy_4:"block",titlename_4:"提示信息",carname_4:"权益卡已过期"}):wx.navigateTo({url:"forceCard/alterForceCard/alterForceCard"});else{if(!e.data.isExistenceForce)return void e.setData({displayy_0:"block",carname_0:"没有权益卡可购买",titlename_0:"提示信息"});wx.navigateTo({url:"forceCard/receiveForceCard/receiveForceCard"})}}})}})}})},chkOrder2:function(e){wx.navigateTo({url:"forceCard/receiveForceCard/receiveForceCard"})},chkOrder4:function(e){wx.navigateTo({url:"myCard/myCard"})},selOperationRecord:function(){wx.getStorage({key:"storeId",success:function(t){wx.getStorage({key:"userId",success:function(a){wx.request({url:s+"skmembermodel/getOperationRecordNum",data:{wxUserUuid:a.data,storeUuid:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t.data+"===res.data提醒信息量===>");var a=t.data,o=String(a);a>0&&wx.setTabBarBadge({index:3,text:o}),e.setData({noticeCount:a})}})}})}})},findWechatUserById0:function(){wx.getStorage({key:"userId",success:function(t){wx.getStorage({key:"storeId",success:function(a){var o=t.data,n=a.data;wx.request({url:s+"skmembermodel/findWechatUserById",data:{wechatUserId:o,wechatUserStoreStoreInfoStoreId:n},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({findWechatUserById:t.data});var a=e.data.findWechatUserById;"v"==a.wechatUserStoreIdentity?e.setData({isVip:!0}):e.setData({isVip:!1}),e.setData({wechatUserStoreIntegeal:a.wechatUserStoreIntegeal,wechatUserStoreBalance:a.wechatUserStoreBalance,receiveConfigNum:a.receiveConfigNum,wechatUserNickName:a.wechatUserNickName}),e.data.isVip?e.setData({vipColor:"#ffbf20"}):e.setData({vipColor:"#666"})}})}})}})},findWechatUserById:function(){wx.getStorage({key:"userId",success:function(t){wx.getStorage({key:"storeId",success:function(a){var o=t.data,n=a.data;wx.request({url:s+"skmembermodel/findWechatUserById",data:{wechatUserId:o,wechatUserStoreStoreInfoStoreId:n},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({findWechatUserById:t.data})}})}})}})},selCouponByReceive:function(){wx.getStorage({key:"userId",success:function(t){wx.getStorage({key:"storeId",success:function(a){wx.getStorage({key:"companyId",success:function(o){wx.request({url:s+"skcouponmodel/selCouponByReceive",data:{userId:t.data,applyStoreId:a.data,companyId:o.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=t.data.length;e.setData({couponCnt1:a,selCouponByReceive:t.data})}})}})}})}})},selCouponByApply:function(){wx.getStorage({key:"userId",success:function(t){wx.getStorage({key:"storeId",success:function(a){wx.getStorage({key:"companyId",success:function(o){wx.request({url:s+"skcouponmodel/selCouponByApply",data:{userId:t.data,applyStoreId:a.data,companyId:o.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=t.data.length;e.setData({couponCnt:a,selCouponByApply:t.data})}})}})}})}})},selEquityCardWX:function(){wx.getStorage({key:"companyId",success:function(t){wx.getStorage({key:"storeId",success:function(a){wx.request({url:s+"skmembermodel/selEquityCardWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{companyId:t.data,storeId:a.data},success:function(t){console.log("========权益卡===========",t),e.setData({isExistenceForce:t.data.isExistence,selEquityCardWX:t.data})}})}})}})},findAllMenuStorePower:function(){wx.getStorage({key:"storeId",success:function(t){wx.request({url:s+"sksystemmodel/findAllMenuStorePower",data:{menuStorePowerStoreinfoStoreId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){for(var a in t.data)if("会员"==t.data[a].buttonName){var o=t.data[a].menuStorePowerisShow,n=t.data[a].menuStorePowerisUser;e.setData({vipShowFlg:o,vipUseFlg:n})}else if("权益卡"==t.data[a].buttonName){var s=t.data[a].menuStorePowerisShow,c=t.data[a].menuStorePowerisUser;e.setData({forceShowFlg:s,forceUseFlg:c})}else if("摇一摇"==t.data[a].buttonName){var r=t.data[a].menuStorePowerisShow;e.setData({shakeShowFlg:r})}else if("拼团"==t.data[a].buttonName){var d=t.data[a].menuStorePowerisShow;e.setData({pintuanFlg:d})}e.setData({findAllMenuStorePower:t.data})}})}})},resendIndex:function(a){console.log(a),wx.request({url:s+"skstoremodel/findCompanyByAppid",data:{xcxAppid:t.globalData.appId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){wx.setStorage({key:"companyInfo",data:t.data}),wx.setStorage({key:"companyId",data:t.data.companyInfoId}),e.setData({companyId:t.data.companyInfoId})}}),e.data.secondIn?wx.getStorage({key:"userId",success:function(t){var o=t.data;e.directLoad(a,o)}}):wx.login({success:function(o){console.log("====wx.login success====");o.code;if(o.code){console.log("====get code===="),console.log("res.code ==> "+o.code);var n=o.code;wx.getSetting({success:function(o){console.log("====wx.getSetting success===="),console.log(o),console.log(o.authSetting["scope.userInfo"]),o.authSetting["scope.userInfo"]?wx.getUserInfo({success:function(o){console.log("====wx.getUserInfo success===="),wx.setStorage({key:"userName",data:o.userInfo.nickName}),wx.setStorage({key:"avatarUrl",data:o.userInfo.avatarUrl}),wx.request({url:s+"skmembermodel/getOpenidS",data:{code:n,AppID:t.globalData.appId,Secret:t.globalData.Secret,storeUuid:a,wxUserNickName:o.userInfo.nickName,headImgUrl:e.data.userInfo.avatarUrl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){if(null!=t.data.openid&&""!=t.data.openid){var o=t.data.wechatUser.wechatUserStoreIdentity;wx.setStorage({key:"StoreIdentity",data:o}),wx.setStorage({key:"session_key",data:t.data.session_key});t.data.wechatUser;var n=t.data.wechatUser.wechatUserId;wx.setStorage({key:"openId",data:t.data.openid}),wx.setStorage({key:"userId",data:t.data.wechatUser.wechatUserId}),wx.setStorage({key:"storeId",data:a}),e.directLoad(a,n)}else wx.showToast({title:"登录失败"})}})},fali:function(e){console.log("====wx.login fail====")}}):(console.log("======未授权"),wx.getStorage({key:"companyId",success:function(t){wx.request({url:s+"skstoremodel/findStoreById",data:{pid:e.data.pid},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({shouquanImg:t.data.storeInfoHeadImgUrl});var o=t.data.storeInfoHeadImgUrl;wx.reLaunch({url:"../welcome/accredit/accredit?data="+n+"&store_uuid="+a+"&imgurl="+o+"&goUser=true",success:function(e){console.log(e)},fail:function(e){console.log(e)}})}})}}))},fail:function(e){console.log("====wx.getSetting fail====")}})}else console.log("获取用户登录态失败！"+o.errMsg)},fail:function(e){console.log("====wx.login fail===="),console.log("错误信息"),console.log(e)}})},directLoad:function(e,t){wx.getStorage({key:"connectedSocket",success:function(e){e.data?console.log("============已有socket不连接============="):n.conSocket(t,s)}}),wx.getStorage({key:"companyId",success:function(a){wx.request({url:s+"skmembermodel/updatVipCardStore",data:{wechatUserId:t,wechatUserStoreStoreInfoStoreId:e,companyId:a.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){wx.request({url:s+"skmembermodel/updatEquitycardStore",data:{wxUserId:t,storeId:e,companyId:a.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log(e.data)}})}})}})},loadOther:function(){n.setStoreInfoName(e),e.setData({isVip:!0}),t.getUserInfo(function(t){e.setData({userInfo:t})}),wx.getStorage({key:"menus",success:function(t){e.setData({menus:t.data})}}),n.setStoreId(e),n.setStoreInfo(e),wx.getStorage({key:"companyId",success:function(t){e.setData({companyId:t.data}),wx.request({url:s+"skmembermodel/findVipCardBy",data:{companyId:t.data,storeId:e.data.storeId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=t.data;wx.setStorage({key:"vipCard",data:a}),wx.setStorage({key:"cardId",data:a.id}),e.setData({isExistenceVip:a.isExistence})}}),e.dfxi()}}),e.selCouponByReceive(),e.selCouponByApply(),console.log("=============可领取优惠券数量============"),console.log(e.data.couponCnt),e.selOperationRecord(),e.selEquityCardWX(),e.findAllMenuStorePower()},stroeList:function(t){wx.request({url:s+"skstoremodel/wxSelectStoreByCompanyId",data:{storeInfoCompanyInfoId:e.data.companyId,storeInfoLongitude:"",storeInfoLatitude:"",condition:"",storeInfoName:e.data.storeName,storeInfoAddress:e.data.contactAddr},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data[0].takeOutDispatchType;console.log("配送状态为=====>",t),wx.setStorage({key:"takeOutDispatchType",data:t})}})},dfxi:function(){wx.getStorage({key:"storeId",success:function(t){console.log(t.data),wx.request({url:s+"skstoremodel/findStoreById",data:{storeId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t.data),e.setData({contactName:t.data.storeInfoName,contactAddr:t.data.storeInfoAddress}),e.stroeList()}})}})},checkCollage:function(){wx.navigateTo({url:"../collage/collage"})},myCollage:function(){wx.navigateTo({url:"../collage/myCollage/myCollage"})},naviToOther:function(){if(e.data.isVip)wx.navigateToMiniProgram({appId:"wx019c4828f5156688"});else{if(!e.data.isExistenceVip)return void e.setData({displayy_0:"block",carname_0:"无会员卡可领",titlename_0:"提示信息"});e.setData({toGoTuanGou:!0}),e.myCard()}}}); 
 			}); 	require("pages/user/user.js");
 		__wxRoute = 'pages/user/forceCard/alterForceCard/alterForceCard';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/forceCard/alterForceCard/alterForceCard.js';	define("pages/user/forceCard/alterForceCard/alterForceCard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,o=require("../../../../utils/util.js"),a=getApp().globalData.httpUrl;Page({data:{displayy_0:"none",chengedColor:"#666",cardName:"至尊七折卡",storeName:"",cardStatus:"已开通",httpUrl:a,cardNumber:"",date:"",time:"",userName:"",tele:"",age:0,quxiao:!0},ohShitfadeOut:function(){var o=setTimeout(function(){e.setData({popErrorMsg:""}),clearTimeout(o)},3e3)},goToUser:function(){wx.switchTab({url:"/pages/index/index"})},onLoad:function(t){console.error("---------options----",t),0==t.saoma&&this.setData({saoma:!0}),e=this,o.getShareInfos(e,a),o.setCompanyId(e,t),o.setStoreId(e),o.setStoreInfo(e),o.setStoreName(e),wx.getStorage({key:"userId",success:function(o){wx.getStorage({key:"storeId",success:function(t){wx.request({url:a+"skmembermodel/selEquitycardByWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{userId:o.data,storeId:t.data},success:function(o){e.setData({prerogative:o.data.vipcardPrerogativeBeanList});var a=o.data.color;e.chengeColor(a),"0"==o.data.state?e.setData({cardName:o.data.vipCardName,cardInfos:o.data,forceCardId:o.data.id,status:"已开通",state:!0,cardCode:o.data.equityCardCode,activateTime:o.data.activateTime,overTime:o.data.overTime}):(e.setData({cardName:o.data.vipCardName,cardInfos:o.data,forceCardId:o.data.id,status:"已过期",state:!1,cardCode:o.data.equityCardCode,activateTime:o.data.activateTime,overTime:o.data.overTime}),e.setData({displayy_0:"block",carname_0:"请重新购买权益卡",titlename_0:"权益卡已过期"}))}})}})}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(a){console.log("===========接收到服务器信息=============="),console.log(a.data),o.getTkInfos(e,a),o.playMusic(e,a)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){o.conSocket(e.data,a)}})})},onHide:function(){},onUnload:function(){o.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},receiveForceCard:function(){wx.redirectTo({url:"../receiveForceCard/receiveForceCard"})},chkOrder_0:function(){e.receiveForceCard()},chengeColor:function(o){"Color010"==o&&e.setData({chengedColor:"#63b359"}),"Color020"==o&&e.setData({chengedColor:"#2c9f67"}),"Color030"==o&&e.setData({chengedColor:"#509fc9"}),"Color040"==o&&e.setData({chengedColor:"#5885cf"}),"Color050"==o&&e.setData({chengedColor:"#9062c0"}),"Color060"==o&&e.setData({chengedColor:"#d09a45"}),"Color070"==o&&e.setData({chengedColor:"#e4b138"}),"Color080"==o&&e.setData({chengedColor:"#ee903c"}),"Color081"==o&&e.setData({chengedColor:"#f08500"}),"Color082"==o&&e.setData({chengedColor:"#a9d92d"}),"Color090"==o&&e.setData({chengedColor:"#dd6549"}),"Color100"==o&&e.setData({chengedColor:"#cc463d"}),"Color101"==o&&e.setData({chengedColor:"#cf3e36"}),"Color102"==o&&e.setData({chengedColor:"#5E6671"})},quxiao:function(o){e.setData({quxiao:!1})}}); 
 			}); 	require("pages/user/forceCard/alterForceCard/alterForceCard.js");
 		__wxRoute = 'pages/index/order/evalOrder/checkOrder/checkOrder';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/order/evalOrder/checkOrder/checkOrder.js';	define("pages/index/order/evalOrder/checkOrder/checkOrder.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var a,t=require("../../../../../utils/util.js"),o=getApp().globalData.httpUrl;Page({data:{orderStyle:"",selectedCoupon:"",coupon:"",wmFlg:!1,dcFlg:!1,ydFlg:!1,httpUrl:o,storeInfo:[],deliverName:"",deliverPhone:"",discountFlg:"",displayy_0:"none"},onLoad:function(d){a=this,t.getShareInfos(a,o),t.setCompanyId(a,d),t.setStoreId(a),t.setStoreInfo(a),wx.getStorage({key:"deliveryPrice",success:function(e){a.setData({peisongfei:e.data})}}),wx.getStorage({key:"takeOutDispatchType",success:function(e){a.setData({takeOutDispatchType:e.data})}}),wx.getStorage({key:"wmFlg",success:function(e){wx.getStorage({key:"dcFlg",success:function(t){wx.getStorage({key:"ydFlg",success:function(o){a.setData({wmFlg:e.data,dcFlg:t.data,ydFlg:o.data})}})}})}}),wx.getStorage({key:"ydFlg",success:function(t){wx.getStorage({key:"dcFlg",success:function(d){wx.getStorage({key:"wmFlg",success:function(r){1==t.data?(console.log("走预定"),wx.getStorage({key:"orderId",success:function(e){wx.getStorage({key:"orderType",success:function(t){wx.request({url:o+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:e.data,orderType:t.data},success:function(e){var t=e.data.discountFlg;a.setData({discountFlg:t});var o=e.data.orderPayType,d="";"W"==o?d="微信支付":"B"==o&&(d="余额支付");var r=e.data.reservedEstimatedTime.split(" "),n=r[0],s=r[1];a.setData({orderInfo:e.data,orderStyle:d,orderDate:n,orderTime:s,orderTable:e.data.tableName,orderPersonNumber:e.data.reservedCount,orderContractName:e.data.reservedName,orderContractTel:e.data.reservedPhoneNum,discountFlg:e.data.discountFlg,derateMoney:(1*e.data.orderReceivablePrice-1*e.data.orderRealPrice).toFixed(2)})}})}})}})):1==d.data?(console.log("走点餐"),wx.getStorage({key:"orderId",success:function(e){wx.getStorage({key:"orderType",success:function(t){wx.request({url:o+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:e.data,orderType:t.data},success:function(e){var o=e.data.orderPayType,d="",r=e.data.discountFlg;a.setData({discountFlg:r}),"W"==o?d="微信支付":"B"==o&&(d="余额支付");var n=e.data.vipCoupontype,s=e.data.vipDerateMoney,c=e.data.orderRealPrice,i=t.data.storeInfoDeliveryPrice,l=t.data.storeInfoBoxPrice;"4"==n||((1*c-1*i-1*l)*s/10*(10-s)/10).toFixed(2),a.setData({orderInfo:e.data,orderStyle:d,deskNum:e.data.orderTableId,discountFlg:e.data.discountFlg,derateMoney:(1*e.data.orderReceivablePrice-1*e.data.orderRealPrice).toFixed(2)})}})}})}})):1==r.data&&(console.log("走外卖"),wx.getStorage({key:"orderId",success:function(t){wx.getStorage({key:"orderType",success:function(d){wx.request({url:o+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:t.data,orderType:d.data},success:function(t){console.log("配送员电话-------------------",t.data.riderName),console.log("配送员电话-------------------",t.data.riderMobile);var o=t.data.foodInfoBoxPrice,d=t.data.discountFlg;a.setData({discountFlg:d,canhefei:o}),wx.getStorage({key:"storeInfo",success:function(o){var d=t.data.orderPayType,r="";"W"==d?r="微信支付":"B"==d&&(r="余额支付");var n=t.data.vipCoupontype,s=t.data.vipDerateMoney,c=t.data.orderRealPrice,i="",l=o.data.storeInfoDeliveryPrice,u=o.data.storeInfoBoxPrice;i="4"==n?s:((1*c-1*l-1*u)*s/10*(10-s)/10).toFixed(2);var g="",y="";if(g=null!=t.data.riderName&&void 0!=t.data.riderName&&""!=t.data.riderName?t.data.riderName:"",y=null!=t.data.riderMobile&&void 0!=t.data.riderMobile&&""!=t.data.riderMobile?t.data.riderMobile:"",a.setData(e({orderInfo:t.data,orderStyle:r,beizhu:t.data.orderRemarke,wechatUserAddressAddress:t.data.wechatUserAddressAddress,wechatUserAddressFullAddress:t.data.wechatUserAddressFullAddress,wechatUserAddressReceiverName:t.data.wechatUserAddressReceiverName,wechatUserAddressReceiverPhoneNum:t.data.wechatUserAddressReceiverPhoneNum,derateMoney:i,deliverName:g,deliverPhone:y,discountFlg:t.data.discountFlg},"derateMoney",(1*t.data.orderReceivablePrice-1*t.data.orderRealPrice).toFixed(2))),"1"==a.data.takeOutDispatchType){var f=(1*t.data.orderReceivablePrice+1*t.data.foodInfoBoxPrice+1*a.data.peisongfei-1*t.data.orderRealPrice).toFixed(2);console.log("----------------------------------------------呵呵呵呵",f),f<=0?(console.log("小于等于0"),a.setData({derateMoney:"0.00"})):(console.log("----hehhe----",f),a.setData({derateMoney:f})),console.log("----------------------------------------------呵呵呵呵",a.data.derateMoney)}""!=a.data.deliverName&&null!=a.data.deliverName&&void 0!=a.data.deliverName||a.setData({deliverName:"暂无快递员送餐"}),""!=a.data.deliverPhone&&null!=a.data.deliverPhone&&void 0!=a.data.deliverPhone||a.setData({deliverPhone:"无联系电话"})}})}})}})}}))}})}})}})},onReady:function(){},closeTk:function(){a.setData({displa:!1})},onShow:function(){a=this,wx.onSocketMessage(function(e){console.log("===========接收到服务器信息=============="),console.log(e.data),t.getTkInfos(a,e),t.playMusic(a,e)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){t.conSocket(e.data,o)}})})},onHide:function(){},fanhui:function(){wx.navigateBack({})},onUnload:function(){t.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),a=this,setTimeout(function(){a.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:a.data.shareTitle,desc:"",imageUrl:a.data.shareImgUrl,path:"/pages/index/index?storeId="+a.data.storeId+"&companyId="+a.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},toPingjia:function(){wx.redirectTo({url:"../evaluation/evaluation"})},contactTakeOut:function(){console.log("==========绑定打电话功能=========="),null==a.data.deliverPhone||""==a.data.deliverPhone||void 0==a.data.deliverPhone||"undefined"==a.data.deliverPhone||"null"==a.data.deliverPhone?a.setData({displayy_0:"block",carname_0:"无联系电话",titlename_0:"提示信息"}):(console.log(a.data.deliverPhone),wx.makePhoneCall({phoneNumber:a.data.deliverPhone}))}}); 
 			}); 	require("pages/index/order/evalOrder/checkOrder/checkOrder.js");
 		__wxRoute = 'pages/index/collect/collect';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/collect/collect.js';	define("pages/index/collect/collect.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,a=require("../../../utils/wx_x_config.js"),t=require("../../../utils/util.js"),o=getApp(),n=(o.globalData.userInfo,o.globalData.httpUrl),d=o.globalData.appId;Page({data:{discount:10,displ3:"none",displ2:"none",coupon:!1,card:!1,forceCard:!1,money:"",discountFlg:"",storename:"",userId:"",storeId:"",orderPayType:"",httpUrl:n,couponType:"",couponName:"",derateMoney:0,couponId:"",code:"",miniMoney:0,collectMoney:0,initMoney:0,clickedCoupon:!1,allowToClick:!0,allowToPay:!0,displayy:"none",displayy_0:"none",displayy_1:"none",display_alone1:"none"},moneyInput:function(e){var a=this,t=e.detail.value;(t=(t=(t=(t=t.replace(/[^\d.]/g,"")).replace(/\.{2,}/g,".")).replace(".","$#$").replace(/\./g,"").replace("$#$",".")).replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3")).indexOf(".")<0&&""!=t&&(t=parseFloat(t)),t>=a.data.miniMoney?1==a.data.coupon&&"4"==a.data.couponType?(console.log("couponType4"),a.setData({initMoney:t,money:t,collectMoney:(t-a.data.derateMoney).toFixed(2)}),wx.setStorage({key:"initMoney",data:t})):1==a.data.coupon&&"2"==a.data.couponType?(console.log("that.data.derateMoney"+a.data.derateMoney),a.setData({initMoney:t,money:t,collectMoney:(t*a.data.derateMoney/10).toFixed(2)}),wx.setStorage({key:"initMoney",data:t})):1==a.data.card?(a.setData({initMoney:t,money:t,collectMoney:(t*a.data.discount/10).toFixed(2)}),wx.setStorage({key:"initMoney",data:t})):(console.log("未选择优惠券"),a.setData({initMoney:t,money:t,collectMoney:(1*t).toFixed(2)}),wx.setStorage({key:"initMoney",data:t}),wx.setStorage({key:"collectMoney",data:a.data.collectMoney})):(console.log("小于优惠"),a.setData({initMoney:t,money:t,collectMoney:(1*t).toFixed(2)}),wx.setStorage({key:"initMoney",data:t}),wx.setStorage({key:"collectMoney",data:t}))},chooseCoupon:function(a){console.log("initMoney选择优惠券------",this.data.initMoney),"v"==e.data.findWechatUserById.wechatUserStoreIdentity?(e.setData({coupon:e.data.coupon,card:e.data.card,displ3:"none",clickedCoupon:!1}),wx.navigateTo({url:"../../index/order/evalOrder/selCoupon/selCoupon?initMoney="+this.data.initMoney})):wx.chooseYouhuidal({title:"提示",content:"您没有会员卡不能使用优惠券"})},chooseCard:function(){e.setData({displ3:"none"});var a=e.data.findWechatUserById;"v"==a.wechatUserStoreIdentity?wx.getStorage({key:"userId",success:function(t){wx.getStorage({key:"storeId",success:function(o){console.log("查询会员卡接口----回调之前"),wx.request({url:n+"skmembermodel/findVipCardById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{userId:t.data,cardId:a.vipCardId,storeId:o.data},success:function(a){console.log("查询会员卡接口----回调成功");var t=a.data.discount;(1*t<=0||""==t||null==t)&&(t="10"),e.setData({discount:t,card:!0,forceCard:!1,coupon:!1,discountFlg:"V",couponId:a.data.id,miniMoney:0}),wx.getStorage({key:"initMoney",success:function(a){e.setData({collectMoney:(1*t*a.data/10).toFixed(2)})}})}})}})}}):e.setData({displayy:"block",titlename:"提示",carname:"您没有会员卡不能使用会员卡权益"})},chooseForceCard:function(){wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(o){wx.request({url:n+"skmembermodel/selEquitycardByWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{userId:a.data,storeId:o.data},success:function(a){var o=new Date(a.data.validityBegin).getTime(),n=new Date(a.data.validityEnd).getTime(),d=new Date(t.formatDate(new Date)).getTime();if("Y"==a.data.isEquitycard){if("1"==a.data.state)return e.setData({displayy:"block",titlename:"权益卡已过期",carname:"请重新领取"}),!1;if(""!=a.data.validityBegin&&""!=a.data.validityEnd)if(d>=o&&d<=n){var s=a.data.discount;(null==s||""==s||1*s<=0)&&(s="10"),e.setData({discount:s,displ3:"none",card:!0,forceCard:!0,coupon:!1,discountFlg:"Q",couponId:a.data.id,miniMoney:0}),wx.getStorage({key:"initMoney",success:function(a){e.setData({collectMoney:(1*s*a.data/10).toFixed(2)})}})}else d<o?e.setData({display_alone1:"block",titlename_0:"提示信息",carname_0:"未到使用时间\n还不能使用权益卡",cancel:"好\t的"}):d>n&&e.setData({display_alone1:"block",titlename_0:"提示信息",carname_0:"权益卡已过期",cancel:"好\t的"});else{var c=a.data.discount;(null==c||""==c||1*c<=0)&&(c="10"),e.setData({discount:c,displ3:"none",card:!0,forceCard:!0,coupon:!1,discountFlg:"Q",couponId:a.data.id,miniMoney:0}),wx.getStorage({key:"initMoney",success:function(a){e.setData({collectMoney:(1*c*a.data/10).toFixed(2)})}})}}else e.setData({displayy:"block",titlename:"您没有权益卡",carname:"你不能使用权益卡"})}})}})}})},onLoad:function(a){e=this,t.getShareInfos(e,n),e.findWechatUserById(),wx.getStorage({key:"avatarUrl",success:function(a){e.setData({userImgUrl:a.data})}}),wx.setStorage({key:"initMoney",data:e.data.collectMoney}),wx.setStorage({key:"wmFlg",data:!1}),wx.setStorage({key:"dcFlg",data:!1}),wx.setStorage({key:"ydFlg",data:!1}),"1"==a.secondIn?e.setData({secondIn:!0}):e.setData({secondIn:!1});var o=decodeURIComponent(a.scene);if("undefined"!=o&&void 0!=o&&null!=o&&"null"!=o){var d=o.split(",")[0].replace('"',"");o.split(",")[1].replace('"',"");e.setData({scene:o,saoma:!0}),wx.request({url:n+"skstoremodel/findStoreById",data:{pid:d},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){e.setData({storeInfo:o.data,storename:o.data.storeInfoName}),console.error("res.data.storeInfoName---------------",o.data.storeInfoName),wx.setStorage({key:"storeInfo",data:o.data}),wx.setStorage({key:"storeName",data:o.data.storeInfoName}),t.setStoreInfo(e),wx.setNavigationBarTitle({title:o.data.storeInfoName});var d=o.data.storeInfoStoreId;e.setData({storeId:d}),wx.setStorageSync("storeId",d),t.getShareInfos(e,n),e.resendIndex(d),t.setStoreInfo(e),t.setCompanyId(e,a),t.setStoreId(e),t.setUserId(e),t.setStoreName(e)}})}else t.setStoreInfo(e),t.setCompanyId(e,a),t.setStoreId(e),t.setUserId(e),t.setStoreName(e)},goToUser:function(){wx.switchTab({url:"/pages/index/index"})},resendIndex:function(a){e.setData({dcFlg:!0,orderType:"D"}),wx.request({url:n+"skstoremodel/findCompanyByAppid",data:{xcxAppid:o.globalData.appId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.setStorage({key:"companyInfo",data:e.data}),wx.setStorage({key:"companyId",data:e.data.companyInfoId})}}),e.data.secondIn?wx.getStorage({key:"userId",success:function(e){e.data}}):wx.getStorage({key:"code",success:function(t){if(""!=t.data&&null!=t.data&&void 0!=t.data&&"undefined"!=t.data&&"null"!=t.data){e.setData({code:t.data});var d=t.data;wx.getSetting({success:function(t){if(t.authSetting["scope.userInfo"])console.log("============已授权==============="),wx.getUserInfo({success:function(t){e.setData({userInfo:t.userInfo}),wx.setStorage({key:"userName",data:t.userInfo.nickName}),wx.request({url:n+"skmembermodel/getOpenidS",data:{code:d,AppID:o.globalData.appId,Secret:o.globalData.Secret,storeUuid:a,wxUserNickName:t.userInfo.nickName,headImgUrl:e.data.userInfo.avatarUrl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data.wechatUser.wechatUserId;if(null!=e.data.openid&&""!=e.data.openid){var o=e.data.wechatUser.wechatUserStoreIdentity;wx.setStorage({key:"StoreIdentity",data:o}),wx.setStorage({key:"session_key",data:e.data.session_key}),wx.setStorage({key:"openId",data:e.data.openid}),wx.setStorage({key:"userId",data:t}),wx.setStorage({key:"storeId",data:a})}else wx.showToast({title:"登录失败"})}})},fali:function(e){}});else{console.log("==============未授权=================");var s="";s=e.data.storeInfo.storeInfoHeadImgUrl,wx.reLaunch({url:"../../welcome/accredit/accredit?data="+d+"&store_uuid="+a+"&imgurl="+s+"&goShouyin=true&scene="+e.data.scene,success:function(e){},fail:function(e){}})}},fail:function(e){}})}else wx.getStorage({key:"userId",success:function(t){if(t.data)t.data;else e.resendIndex(a)},fail:function(){e.resendIndex(a)}})},fail:function(t){e.resendIndex(a)}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(a){console.log("===========接收到服务器信息=============="),console.log(a.data),t.getTkInfos(e,a),t.playMusic(e,a)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){t.conSocket(e.data,n)}})}),console.log("===onShow===",e.data.clickedCoupon),e.data.clickedCoupon&&wx.getStorage({key:"initMoney",success:function(a){a.data>=e.data.miniMoney?"4"==e.data.couponType?e.setData({collectMoney:(a.data-e.data.derateMoney).toFixed(2),discountFlg:"Y"}):"2"==e.data.couponType?e.setData({collectMoney:(a.data*e.data.derateMoney/10).toFixed(2),discountFlg:"Y"}):(console.log("======initMoney  coupon========="+a.data),e.setData({coupon:e.data.coupon,card:e.data.card,forceCard:!1,collectMoney:a.data,discountFlg:""})):e.setData({collectMoney:a.data,discountFlg:""})}})},onHide:function(){},onUnload:function(){t.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},chkOrder0:function(){var a=e.data.findWechatUserById.wechatUserStoreBalance;e.setData({wechatUserStoreBalance:a}),console.log("用户余额"+a),1*a<1*e.data.money?wx.showToast({title:"余额不足",icon:"loading",duration:1e3}):e.addBonusHistory(e.data.money,e.data.sofFlg)},wxPay:function(t){var o=this;console.log("============collect 微信支付开始==============",t),console.log(e.data.allowToClick),e.setData({formId:t.detail.formId,clickedCoupon:!1}),e.data.allowToClick?(e.setData({displ2:"none",allowToClick:!1}),setTimeout(function(){e.setData({allowToClick:!0});var s=e.data.money;console.log(s);if(null!=s&&""!=s){var c=e.data.miniMoney;if(console.log("-----",c),console.log("-----",e.data.initMoney),console.log("-----",s),c>e.data.initMoney&&e.data.initMoney>0)return e.setData({displayy:"block",titlename:"未达到指定满减金额",carname:"即将清除优惠信息"}),e.setData({couponFlg:0,couponId:"",discountFlg:"",collectMoney:s,money:s,miniMoney:0,coupon:"",card:!1,displ3:"none",clickedCoupon:!1,derateMoney:0}),console.log("=========测试couponFlg==========="),console.log(e.data.couponFlg),wx.setStorage({key:"couponInfo",data:""}),void wx.setStorage({key:"couponFlg",data:"0"});if(0!=s){var l=o.data.storeId,i=o.data.userId,r=t.currentTarget.dataset.id;e.setData({orderPayType:r}),"B"==r?e.setData({jiekouming:"addBonusHistory"}):e.setData({jiekouming:"paymentCallback"});var u=e.data.derateMoney,y=e.data.couponType,p=e.data.coupon,g=e.data.card;e.data.discount;if(1==p&&"4"==y?(console.log("走的1"),s=e.data.collectMoney):1==p&&"2"==y?(console.log("走的2"),s=e.data.collectMoney):1==g&&(console.log("走的3",e.data.collectMoney),s=e.data.collectMoney),null!=s&&""!=s)if(s<=0)e.setData({displayy:"block",titlename:"提示",carname:"支付金额必须为正"});else{u>0?e.setData({couponFlg:"1"}):e.setData({couponFlg:"0"}),console.log("=============couponFlg================="),console.log(e.data.couponFlg),console.log(r);var f=a.getWxPayOrdrID();if(e.setData({companyOrderNumber:f}),"W"==r)console.log("进来了给我说声"),wx.request({url:n+"skmembermodel/wxPay",data:{wx_user_uuid:i,order_a_num:f,order_a_money:s,appid:d,storeId:l},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){console.log("支付调用 == >"),console.log(a.data),e.doWxPay(a.data,i,l,s);e.addBonusHistory(s,"f")}});else if("B"==r){e.setData({sofFlg:"s"});wx.getStorage({key:"storeName",success:function(a){console.log("点击支付的时候金额---------",s),e.setData({displayy_0:"block",money:(1*s).toFixed(2),titlename_0:"确认支付吗？",carname_0:"即将支付"+(1*s).toFixed(2)+"元给"+a.data,sofFlg:"s"})}})}}else e.setData({displayy:"block",titlename:"提示",carname:"消费金额不能为空"})}else e.setData({displayy:"block",titlename:"提示",carname:"消费不能为0"})}else e.setData({displayy:"block",titlename:"提示",carname:"消费金额不能为空！"})},100)):e.setData({displ2:"none"})},doWxPay:function(a,t,o,n){console.log("param:"+a),console.log("wx_user_uuid:"+t),console.log("store_uuid:"+o),console.log("money:"+n),e.data.allowToPay&&(e.setData({allowToPay:!1}),wx.requestPayment({timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:"MD5",paySign:a.paySign,success:function(a){e.setData({sofFlg:"s"}),wx.switchTab({url:"../../index/index"})},fail:function(a){console.log("=========调用微信充值接口失败========="),console.log(a);e.setData({sofFlg:"f"})}}))},addBonusHistory:function(a,t){wx.getStorage({key:"userId",success:function(o){wx.getStorage({key:"storeId",success:function(d){wx.request({url:n+"skmembermodel/"+e.data.jiekouming,data:{wxUserUuid:o.data,storeUuid:d.data,orderType:"S",orderPayType:e.data.orderPayType,couponFlg:e.data.couponFlg,couponId:e.data.couponId,code:e.data.code,reduceType:"X",realPrice:(1*a).toFixed(2),discountFlg:e.data.discountFlg,receivablePrice:e.data.initMoney,companyOrderNumber:e.data.companyOrderNumber,sofFlg:t,formId:e.data.formId,formType:"1"},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){if(e.setData({allowToPay:!0}),"B"!=e.data.orderPayType||"000000"==a.data.message){if("s"==t){console.log("wxPay走完");a.data.storeIntegeal;e.data.findWechatUserById.wechatUserStoreIdentity,e.setData({displayy_1:"block",titlename_1:"提示",carname_1:"支付成功"})}}else e.setData({displayy:"block",titlename:"余额支付失败",carname:"请联系后台管理员"})},fail:function(e){console.log(e)}})}})},fail:function(a){console.log("支付失败"),console.log(a),e.setData({displayy_1:"block",titlename_1:"支付失败",carname_1:a})}})},chkOrder2:function(e){wx.switchTab({url:"../../index/index"})},toPay1:function(){wx.navigateTo({url:"paidOrder/paidOrder"})},toPay2:function(){e.setData({displ2:"block"})},chooseYouhui:function(){console.log(e.data.initMoney),""!=e.data.initMoney?e.setData({displ3:"block"}):e.setData({displayy:"block",titlename:"提示信息",carname:"请输入金额"})},resume:function(e){wx.switchTab({url:"../../index"})},back:function(){e.setData({displ:"none",displ2:"none",displ3:"none"})},findWechatUserById:function(){wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(t){wx.request({url:n+"skmembermodel/findWechatUserById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{wechatUserId:a.data,wechatUserStoreStoreInfoStoreId:t.data},success:function(a){e.setData({findWechatUserById:a.data})}})}})}})}}); 
 			}); 	require("pages/index/collect/collect.js");
 		__wxRoute = 'pages/user/myCoupon/myCoupon';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/myCoupon/myCoupon.js';	define("pages/user/myCoupon/myCoupon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,e=require("../../../utils/util.js"),a=getApp().globalData.httpUrl;Page({data:{coupones:[],nowData:e.formatDate(new Date)},trimString:function(t){var e=t.split("")[0].split("-");return e[0]+e[1]+e[2]},trimString1:function(t){var e=t.split("年"),a=e[1].split("月"),o=a[1].split("日");return e[0]+a[0]+o[0]},trimString2:function(t){var e=t.split("/"),a=e[2].split(" ");return e[0]+e[1]+a[0]},onLoad:function(o){t=this,e.getShareInfos(t,a),e.setStoreInfo(t),wx.getStorage({key:"userId",success:function(o){wx.getStorage({key:"companyId",success:function(n){t.setData({companyId:n.data}),wx.getStorage({key:"storeId",success:function(s){t.setData({storeId:s.data}),wx.request({url:a+"skcouponmodel/selCouponByReceive",data:{userId:o.data,companyId:n.data,applyStoreId:s.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){console.log(a.data);var o=a.data;for(var n in o)if("DATE_TYPE_FIX_TERM"==o[n].validityType){var s=o[n].receiveTime.split(" ")[0],i=new Date(s),c=new Date(s);c.setDate(i.getDate()+1*o[n].validityBegin),o[n].validityBegin=e.formatDate(c);var r=new Date(c);r.setDate(c.getDate()+1*o[n].validityEnd),o[n].validityEnd=e.formatDate(r)}t.setData({coupones:a.data})}})}})}})}})},onReady:function(){},closeTk:function(){t.setData({displa:!1})},onShow:function(){t=this,wx.onSocketMessage(function(a){console.log("===========接收到服务器信息=============="),console.log(a.data),e.getTkInfos(t,a),e.playMusic(t,a)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(t){e.conSocket(t.data,a)}})})},onHide:function(){},onUnload:function(){e.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),t=this,setTimeout(function(){t.onPullDownRefresh()},500)},onReachBottom:function(){},xq:function(e){var a=e.currentTarget.dataset.idx,o=t.data.coupones[a].id;wx.setStorage({key:"id",data:o});var n=t.data.coupones[a].code;wx.setStorage({key:"codee",data:n}),wx.navigateTo({url:"../cardDetail/cardDetail"})},onShareAppMessage:function(){return{title:t.data.shareTitle,desc:"",imageUrl:t.data.shareImgUrl,path:"/pages/index/index?storeId="+t.data.storeId+"&companyId="+t.data.companyId,success:function(t){console.log("转发成功")},fail:function(t){console.log("转发失败")}}}}); 
 			}); 	require("pages/user/myCoupon/myCoupon.js");
 		__wxRoute = 'pages/index/destine/Receipt/Receipt';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/destine/Receipt/Receipt.js';	define("pages/index/destine/Receipt/Receipt.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=require("../../../../utils/util.js"),a=getApp().globalData.httpUrl;Page({data:{seconds:"",minute:"",hour:"",second:"",date:"",time:"",tableType:"",mealsNumber:"",contants:"",contantsTel:"",textDesc:"",jiedanStatu:"",reason:"",wechatUserId:"",displayy_0:"none"},onLoad:function(o){e=this,t.getShareInfos(e,a),t.setStoreInfo(e),t.setCompanyId(e,o),e.setData({sign:!0});var r=o.orderState;"2"==r?(e.setData({jiedanStatu:"商家已接单",orderState:"2"}),console.log("预订单id======>"+o.orderId),wx.request({url:a+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:o.orderId,orderType:"Y"},success:function(t){var a=t.data.reservedEstimatedTime.split(" "),o=a[0],r=a[1];e.setData({orderInfo:t.data,date0:o,time0:r})}}),wx.setStorage({key:"orderId",data:o.orderId}),e.reservedEstimated()):"6"==r&&wx.getStorage({key:"orderId",success:function(t){wx.request({url:a+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:t.data,orderType:"Y"},success:function(t){console.log("++++++++++++++++++",t);var a=t.data.reservedEstimatedTime.split(" "),o=a[0],r=a[1],d=t.data.orderRefuseRemark;null!=d&&void 0!=d&&""!=d||(d="无理由"),e.setData({jiedanStatu:"您的订单已被商家拒绝",orderState:"6",reason:d,orderInfo:t.data,date0:o,time0:r})}})}}),wx.getStorage({key:"storeId",success:function(t){e.setData({storeId:t.data}),wx.request({url:a+"skstoremodel/findStoreById",data:{storeId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({phone:t.data.storeInfoTelephoneNum,address:t.data.storeInfoAddress})}})}}),wx.getStorage({key:"userId",success:function(t){e.setData({wechatUserId:t.data})}}),wx.getStorage({key:"orderDate",success:function(t){wx.getStorage({key:"orderTime",success:function(a){wx.getStorage({key:"orderTable",success:function(o){wx.getStorage({key:"orderPersonNumber",success:function(r){wx.getStorage({key:"orderContractName",success:function(d){wx.getStorage({key:"orderContractTel",success:function(s){wx.getStorage({key:"orderDesc",success:function(n){e.setData({date:t.data,time:a.data,tableType:o.data,mealsNumber:r.data,contants:d.data,contantsTel:s.data,textDesc:n.data})}})}})}})}})}})}})}})},countDown:function(){var e=this;if(e.data.sign){var t=e.data.seconds,o=e.data.hour,r=e.data.minute,d=e.data.second;if(t>0)var s=setTimeout(function(){d=(t-=1)-60*Math.floor(t/60),r=Math.floor((t-3600*Math.floor(t/3600))/60),o=Math.floor(t/3600),e.setData({seconds:t,hour:o,minute:r,second:d});e.countDown()},1e3);else e.setData({hour:0,minute:0,second:0}),clearTimeout(s),t=0,wx.getStorage({key:"orderId",success:function(t){wx.request({url:a+"skordermodel/updReservedOrder",data:{wechatUserId:e.data.wechatUserId,orderState:"8",id:t.data,storeId:e.data.storeId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({displayy_0:"block",carname_0:"预定订单已自动取消",titlename_0:"提示信息"})}})}})}},chkOrder0_0:function(){wx.switchTab({url:"../../index"})},reservedEstimated:function(){wx.getStorage({key:"orderId",success:function(t){console.log(t.data),wx.request({url:a+"skordermodel/getOrderById",data:{orderType:"Y",id:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log("预计到店时间 ==> "+t.data.reservedEstimatedTime);var o=new Date(t.data.reservedEstimatedTime.replace(/-/g,"/")).getTime()/1e3;console.log("预计到店时间转换=====》"+o);var r=(new Date).getTime()/1e3;console.log("获取当前时间=====》"+r.toFixed(0));var d=(1*o.toFixed(0)-1*r.toFixed(0)+3600).toFixed(0);if(console.log("获取当前时间=====》"+d),d>0){var s=d,n=s-60*Math.floor(s/60),c=Math.floor(s-3600*Math.floor(s/3600))/60,i=Math.floor(s/3600);e.setData({seconds:s,minute:c,second:n,hour:i});e.countDown()}else e.setData({hour:0,minute:0,second:0}),wx.getStorage({key:"orderId",success:function(t){wx.request({url:a+"skordermodel/updReservedOrder",data:{wechatUserId:e.data.wechatUserId,orderState:"8",id:t.data,storeId:e.data.storeId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({displayy_0:"block",carname_0:"预定订单已自动取消",titlename_0:"提示信息"})}})}})}})}})},back:function(){wx.getStorage({key:"orderId",success:function(t){wx.request({url:a+"skordermodel/updReservedOrder",data:{wechatUserId:e.data.wechatUserId,orderState:"5",id:t.data,storeId:e.data.storeId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.redirectTo({url:"../../destine/destine"})}})}})},directOrder:function(e){wx.setStorage({key:"wmFlg",data:!1}),wx.setStorage({key:"dcFlg",data:!1}),wx.setStorage({key:"orderType",data:"Y"}),wx.getStorage({key:"orderId",success:function(e){wx.redirectTo({url:"../../takeOut/takeOut?orderId="+e.data})}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(a){console.log("===========接收到服务器信息=============="),console.log(a.data),t.getTkInfos(e,a),t.playMusic(e,a)})},onHide:function(){},onUnload:function(){console.log("预定接单页面关闭"),(e=this).setData({sign:!1})},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,!_This.data.oUInfo.unionId&&getApp().getUserData(function(t){e.fGetCUserInfo(t.unionId),e.setData({oUInfo:t})}),setTimeout(function(){e.pullRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}}}); 
 			}); 	require("pages/index/destine/Receipt/Receipt.js");
 		__wxRoute = 'pages/index/destine/waitReceipt/waitReceipt';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/destine/waitReceipt/waitReceipt.js';	define("pages/index/destine/waitReceipt/waitReceipt.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=require("../../../../utils/util.js"),a=getApp().globalData.httpUrl;Page({data:{orders:[],seconds:"",minute:"",second:"",date:"",time:"",tableType:"",mealsNumber:"",contants:"",contantsTel:"",textDesc:"",phone:"111",address:"111",receipted:"1",waitReceitName:"等待商家接单",displayy_0:"none",displayy_1:"none"},onLoad:function(o){if(e=this,t.getShareInfos(e,a),t.setCompanyId(e,o),t.setStoreInfo(e),e.setData({sign:!0}),o.orderId){var d=o.orderId;o.orderType;wx.request({url:a+"skordermodel/getOrderById",data:{orderType:"Y",id:d},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log("orderId-----"+t.data.id),wx.setStorage({key:"orderId",data:t.data.id});var a=t.data.reservedEstimatedTime.split(" "),o=a[0],d=a[1];e.setData({date:o,time:d,tableType:t.data.tableName,mealsNumber:t.data.reservedCount,contants:t.data.reservedName,contantsTel:t.data.reservedPhoneNum,textDesc:t.data.orderRemarke,orderCreateTimes:t.data.orderCreateTimes,receipted:t.data.orderState})}})}wx.getStorage({key:"storeId",success:function(t){e.setData({storeId:t.data}),wx.request({url:a+"skstoremodel/findStoreById",data:{storeId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({phone:t.data.storeInfoTelephoneNum,address:t.data.storeInfoAddress})}})}}),wx.getStorage({key:"orderDate",success:function(t){wx.getStorage({key:"orderTime",success:function(a){wx.getStorage({key:"orderTable",success:function(o){wx.getStorage({key:"orderPersonNumber",success:function(d){wx.getStorage({key:"orderContractName",success:function(r){wx.getStorage({key:"orderContractTel",success:function(n){wx.getStorage({key:"orderDesc",success:function(s){e.setData({date:t.data,time:a.data,tableType:o.data,mealsNumber:d.data,contants:r.data,contantsTel:n.data,textDesc:s.data})}})}})}})}})}})}})}}),e.checkOrderStatus(),"2"!=e.data.receipted?(console.log("that.data.receipted----",e.data.receipted),wx.getStorage({key:"orderId",success:function(t){console.log("预定单id====》",t),wx.request({url:a+"skordermodel/getOrderById",data:{orderType:"Y",id:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){if(console.log(t.data.orderCreateTimes,"预定创建时间"),void 0==t.data.orderCreateTimes||"undefined"==t.data.orderCreateTimes)e.setData({minute:0,second:0,waitReceitName:"订单已取消"}),wx.getStorage({key:"orderId",success:function(t){e.setData({displayy_0:"block",carname_0:"因规定时间内商户没有确认接单，\n该预定信息自动取消！",titlename_0:"提示信息",id:t.data})}});else{var a=new Date(t.data.orderCreateTimes.replace(/-/g,"/")).getTime()/1e3,o=600-((new Date).getTime()/1e3-a).toFixed(0);if(o>0){var d=o,r=d-60*Math.floor(d/60),n=Math.floor(d/60);e.setData({seconds:d,minute:n,second:r});e.countDown()}else e.setData({minute:0,second:0,waitReceitName:"订单已取消"}),wx.getStorage({key:"orderId",success:function(t){e.setData({displayy_0:"block",carname_0:"因规定时间内商户没有确认接单，\n该预定信息自动取消！",titlename_0:"提示信息",id:t.data})}})}}})}})):wx.redirectTo({url:"../Receipt/Receipt"})},countDown:function(){var e=this;if(e.data.sign){var t=e.data.seconds,a=e.data.minute,o=e.data.second;if(t>0)var d=setTimeout(function(){o=(t-=1)-60*Math.floor(t/60),a=Math.floor(t/60),e.setData({seconds:t,minute:a,second:o});e.countDown()},1e3);else console.log("========订单已取消============="),clearTimeout(d),t=0,e.setData({seconds:t,minute:0,second:0,waitReceitName:"订单已取消"}),wx.getStorage({key:"orderId",success:function(t){e.setData({displayy_1:"block",carname_1:"因规定时间内商户没有确认接单，\n该预定信息自动取消！",titlename_1:"提示信息",id:t.data})}})}},chkOrder0_0:function(){wx.request({url:a+"skordermodel/updReservedOrder",data:{orderState:"5",id:e.data.id},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.navigateBack({delta:2})}})},chkOrder0_1:function(){wx.request({url:a+"skordermodel/updReservedOrder",data:{orderState:"5",id:e.data.id},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(){wx.switchTab({url:"../../index"})}})},back:function(){wx.getStorage({key:"orderId",success:function(t){wx.request({url:a+"skordermodel/updReservedOrder",data:{id:t.data,orderState:"5",storeId:e.data.storeId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.navigateBack()}})}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,console.log("关闭当前页面"),wx.onSocketMessage(function(a){console.log("收到服务器内容："),console.log(a),wx.getStorage({key:"orderId",success:function(e){console.log("订单id=======>"+e.data),"receipt"==a.data&&wx.redirectTo({url:"../Receipt/Receipt?orderState=2&orderId="+e.data}),"reject"==a.data&&wx.redirectTo({url:"../Receipt/Receipt?orderState=6&orderId="+e.data})}}),t.getTkInfos(e,a),t.playMusic(e,a)}),wx.onSocketClose(function(o){wx.getStorage({key:"userId",success:function(e){t.conSocket(e.data,a),wx.onSocketOpen(function(e){console.log("WebSocket连接已打开！"),console.log(e)}),wx.onSocketError(function(e){console.log("WebSocket连接打开失败，请检查！"),console.log(e)})}}),e.onShow()})},onHide:function(){},onUnload:function(){console.log("页面关闭"),(e=this).setData({sign:!1})},onPullDownRefresh:function(){e.checkOrderStatus(),wx.getStorage({key:"orderId",success:function(t){console.log("订单id=======>"+t.data),"2"==e.data.receipted?wx.redirectTo({url:"../Receipt/Receipt?orderState=2&orderId="+t.data}):"6"==e.data.receipted&&wx.redirectTo({url:"../Receipt/Receipt?orderState=6&orderId="+t.data})}})},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},checkOrderStatus:function(){e=this,wx.getStorage({key:"orderId",success:function(t){wx.request({url:a+"skordermodel/getOrderById",data:{orderType:"Y",id:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){wx.setStorage({key:"orderId",data:t.data.id}),e.setData({receipted:t.data.orderState})}})}})}}); 
 			}); 	require("pages/index/destine/waitReceipt/waitReceipt.js");
 		__wxRoute = 'pages/user/userNotice/userNotice';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/userNotice/userNotice.js';	define("pages/user/userNotice/userNotice.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,o=require("../../../utils/util.js"),t=getApp().globalData.httpUrl;Page({data:{},onLoad:function(n){e=this,o.getShareInfos(e,t),o.setCompanyId(e,n),o.setStoreInfo(e),wx.getStorage({key:"storeId",success:function(o){e.setData({storeId:o.data}),wx.getStorage({key:"userId",success:function(n){wx.request({url:t+"skmembermodel/selOperationRecord",data:{wxUserUuid:n.data,storeUuid:o.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){console.log(o.data,"==========>"),e.setData({notices:o.data})}})}})}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(t){console.log("===========接收到服务器信息=============="),console.log(t.data),o.getTkInfos(e,t),o.playMusic(e,t)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){o.conSocket(e.data,t)}})})},onHide:function(){},onUnload:function(){o.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}}}); 
 			}); 	require("pages/user/userNotice/userNotice.js");
 		__wxRoute = 'pages/index/order/evalOrder/paidOrder/paidOrder';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/order/evalOrder/paidOrder/paidOrder.js';	define("pages/index/order/evalOrder/paidOrder/paidOrder.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=require("../../../../../utils/util.js"),a=getApp().globalData.httpUrl;Page({data:{orderStyle:"微信支付",selectedCoupon:"",coupon:"选择优惠券",wmFlg:!0,dcFlg:!0,ydFlg:!0,httpUrl:a,storeInfo:[],discountFlg:"",toPingjiaflag:!0,quxiao:!0,canhefei:"",takeOutDispatchType:""},choseTxtColor:function(e){var t=e.currentTarget.dataset.id;this.setData({id:t})},selCoupon:function(){wx.navigateTo({url:"../selCoupon/selCoupon"})},fanhui:function(){wx.switchTab({url:"../../../index"})},onLoad:function(o){e=this,t.getShareInfos(e,a),t.setCompanyId(e,o),t.setStoreId(e),t.setStoreInfo(e),wx.getStorage({key:"takeOutDispatchType",success:function(t){console.log("点我达状态---------",t.data),e.setData({takeOutDispatchType:t.data})}}),wx.getStorage({key:"storeId",success:function(t){e.setData({storeId:t.data}),wx.getStorage({key:"userId",success:function(o){wx.request({url:a+"skmembermodel/selOperationRecord",data:{wxUserUuid:o.data,storeUuid:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({notices:t.data})}})}})}}),wx.getStorage({key:"takeOutDispatchType",success:function(t){e.setData({takeOutDispatchType:t.data})}}),wx.getStorage({key:"couponInfo",success:function(t){var a=t.data.couponType,o=t.data.couponName;if("4"==a)e.setData({couponName:o,derateMoney:t.data.derateMoney,couponType:a});else if("2"==a){var r=t.data.derateMoney;wx.getStorage({key:"foodInfo",success:function(t){var d=t.data.orderRealPrice;r=(d-r*d/10).toFixed(2),e.setData({couponName:o,derateMoney:r,couponType:a})}})}}}),wx.getStorage({key:"derateMoney",success:function(t){e.setData({derateMoney:t.data})}}),console.log("==================options=================",o),9==o.orderState||4==o.orderState?(e.setData({orderId:o.orderId,orderType:o.orderType,orderState:o.orderState}),console.log("======================"),wx.request({url:a+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:o.orderId,orderType:o.orderType},success:function(t){var a=t.data.foodInfoBoxPrice;console.log(t.data);var o=t.data.discountFlg,r=(1*t.data.orderReceivablePrice-1*t.data.orderRealPrice).toFixed(2);if(e.setData({orderInfo:t.data,discountFlg:o,derateMoney:r<0?0:r,wechatUserAddressFullAddress:t.data.wechatUserAddressFullAddress,wechatUserAddressReceiverName:t.data.wechatUserAddressReceiverName,wechatUserAddressReceiverPhoneNum:t.data.wechatUserAddressReceiverPhoneNum,orderRemarke:t.data.orderRemarke,canhefei:a,peisongfei:t.data.distributionFee}),"1"==e.data.takeOutDispatchType){var d=1*t.data.orderReceivablePrice+1*t.data.foodInfoBoxPrice+1*e.data.peisongfei-1*t.data.orderRealPrice;e.setData({derateMoney:d<0?0:d})}t.data;var s=t.data.orderPayType;"B"==s?e.setData({orderStyle:"余额支付"}):"W"==s&&e.setData({orderStyle:"微信支付"})}})):wx.getStorage({key:"orderId",success:function(t){wx.getStorage({key:"orderType",success:function(o){wx.request({url:a+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:t.data,orderType:o.data},success:function(t){var a=t.data.foodInfoBoxPrice;console.log(t.data);var o=t.data.discountFlg;e.setData({orderInfo:t.data,discountFlg:o,wechatUserAddressFullAddress:t.data.wechatUserAddressFullAddress,wechatUserAddressReceiverName:t.data.wechatUserAddressReceiverName,wechatUserAddressReceiverPhoneNum:t.data.wechatUserAddressReceiverPhoneNum,orderRemarke:t.data.orderRemarke,canhefei:a,peisongfei:t.data.distributionFee});t.data;var r=t.data.orderPayType;"B"==r?e.setData({orderStyle:"余额支付"}):"W"==r&&e.setData({orderStyle:"微信支付"})}})}})}}),wx.getStorage({key:"orderDate",success:function(t){wx.getStorage({key:"orderTime",success:function(a){wx.getStorage({key:"orderTable",success:function(o){wx.getStorage({key:"orderPersonNumber",success:function(r){wx.getStorage({key:"orderContractName",success:function(d){wx.getStorage({key:"orderContractTel",success:function(s){e.setData({orderDate:t.data,orderTime:a.data,orderTable:o.data,orderPersonNumber:r.data,orderContractName:d.data,orderContractTel:s.data})}})}})}})}})}})}}),wx.getStorage({key:"foodInfo",success:function(t){e.setData({foodInfo:t.data})}}),wx.getStorage({key:"wmFlg",success:function(t){console.log("外卖订单不评价"+t.data),wx.getStorage({key:"dcFlg",success:function(a){console.log("外卖订单不评价"+a.data),wx.getStorage({key:"ydFlg",success:function(o){console.log("外卖订单不评价"+o.data),e.setData({wmFlg:t.data,dcFlg:a.data,ydFlg:o.data})}})}})}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(a){console.log("===========接收到服务器信息=============="),console.log(a.data),t.getTkInfos(e,a),t.playMusic(e,a)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){t.conSocket(e.data,a)}})})},onHide:function(){},onUnload:function(){t.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},toPingjia:function(){1==e.data.toPingjiaflag&&(e.setData({toPingjiaflag:!1}),console.log("===========that.data.orderType================",e.data.orderType,e.data.orderId),9==e.data.orderState||4==e.data.orderState?wx.redirectTo({url:"../evaluation/evaluation?orderId="+e.data.orderId+"&orderType="+e.data.orderType+"&orderState="+e.data.orderState}):wx.redirectTo({url:"../evaluation/evaluation"}))},quxiao:function(t){e.setData({quxiao:!1})}}); 
 			}); 	require("pages/index/order/evalOrder/paidOrder/paidOrder.js");
 		__wxRoute = 'pages/index/order/evalOrder/evalOrder';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/order/evalOrder/evalOrder.js';	define("pages/index/order/evalOrder/evalOrder.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,a=require("../../../../utils/wx_x_config.js"),t=require("../../../../utils/util.js"),o=require("../../../../utils/util.js"),d=require("../../../../module/getPhone"),n=getApp(),s=n.globalData.httpUrl,r=n.globalData.appId;Page({data:{orderPayType:"",discountFlg:"",displ2:"none",displ:"none",displays:"none",selectedCoupon:"",bkclor:"#444",clor:"#ffbf20",bkclor1:"#444",clor1:"#ffbf20",httpUrl:s,coupon:"选择优惠",qxYouhuiflag:!1,yhprice:0,peisongfei:0,canhefei:0,allowToClick:!0,allowToPay:!0,allowToPay1:!0,discountRange:"",wmFlg:!0,dcFlg:!0,ydFlg:!0,payed:!1,foods:[],storeInfo:{},displayy_0:"none",displayy_1:"none",destineInfo:{date:"",time:"",tableType:"",mealsNumber:"",contants:"",contantsNumber:""},orderDetail:"",orderAddr:"",orderContactName:"",orderContactTel:"",couponName:"",derateMoney:"",couponId:"",outTradeNo:"",jifen:"",takeOutDispatchType:"",displayy_2:"none",displayy_3:"none",displayy_4:"none",displayy_5:"none",displayy_6:"none",displayy_7:"none",displayy_8:"none",displayy_9:"none",display_alone1:"none",is_falg:!0},choseTxtColor:function(e){var a=e.currentTarget.dataset.id;this.setData({id:a})},selAddr:function(e){wx.navigateTo({url:"../selAddr/selAddr?selId=0&addressType=0"})},selAddr1:function(e){wx.navigateTo({url:"../selAddr/selAddr?selId=1&addressType=1"})},selYouhui:function(){wx.setStorage({key:"discountFlg",data:e.data.discountFlg}),wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(t){wx.request({url:s+"skmembermodel/findWechatUserById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{wechatUserId:a.data,wechatUserStoreStoreInfoStoreId:t.data},success:function(a){a.data?"v"==a.data.wechatUserStoreIdentity?e.setData({cardId:a.data.cardId,displ:"block"}):e.setData({displays:"block"}):e.setData({displayy_2:"block",carname_2:"未获取会员信息",titlename_2:"提示信息"})}})}})}})},quxiao:function(){e.setData({displays:"none"})},getNumber:function(a){console.log("=====选择优惠 getPhoneNumber start====="),console.log("=====get e.detail.iv====="),console.log(a.detail.iv),console.log("=====get e.detail.encryptedData====="),console.log(a.detail.encryptedData);var t=e.data.isVip;console.log("isVip===>"+t),console.log("e.detail.errMsg===>"+a.detail.errMsg),"getPhoneNumber:fail user deny"==a.detail.errMsg||"getPhoneNumber:fail:cancel to confirm login"==a.detail.errMsg||wx.getStorage({key:"session_key",success:function(t){console.log(t.data+"_key"),e.setData({session_key:t.data}),d.getPhoneNum(a.detail.encryptedData,a.detail.iv,n.globalData.appId,e.data.session_key).then(function(a){e.setData({displays:"none"}),wx.navigateTo({url:"../../../user/myCard/myCard"})})},fail:function(e){console.log("=====getStorage session_key err====="),console.log(e)}}),console.log("=====选择优惠 getPhoneNumber end=====")},selCoupon:function(){e.setData({displ:"none"}),wx.setStorage({key:"recoverCouponInfo",data:{selectedCoupon:e.data.selectedCoupon,yhprice:e.data.yhprice,discountFlg:e.data.discountFlg}}),wx.navigateTo({url:"selCoupon/selCoupon"})},chkOrder0_3:function(){e.setData({selectedCoupon:"",yhprice:0,discountFlg:"",qxYouhuiflag:!1})},qxYouhui:function(){e.setData({displayy_3:"block",carname_3:"确认取消优惠？",titlename_3:"提示信息"})},selMemberCard:function(){e.setData({displ:"none"}),wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(t){wx.request({url:s+"skmembermodel/findVipCardById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{userId:a.data,cardId:e.data.cardId,storeId:t.data},success:function(a){a.data?wx.getStorage({key:"foodInfo",success:function(t){console.log(t+"=========>resi");t.data.orderRealPrice;var o=t.data.orderReceivablePrice,d=a.data.discount;null!=d&&void 0!=d&&""!=d||(d=10);var n=o-o*d/10;console.log("以优惠价格======>"+n);var s=n.toFixed(2);console.log("以优惠价格======>"+s),null!=s&&void 0!=s&&""!=s||(s=0),wx.setStorage({key:"yhprice",data:s}),e.setData({selectedCoupon:"会员卡"+d+"折",yhprice:s,discountFlg:"V",qxYouhuiflag:!0});var r=a.data.discount;null!=r&&void 0!=r&&""!=r||(d=10,e.setData({selectedCoupon:"无折扣"}))}}):e.setData({displayy_2:"block",carname_2:"未获取会员卡信息",titlename_2:"提示信息"})}})}})}})},selForceCard:function(){wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(t){wx.request({url:s+"skmembermodel/selEquitycardByWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{userId:a.data,storeId:t.data},success:function(a){console.log("权益卡",a.data);var t=new Date(a.data.validityBegin).getTime(),d=new Date(a.data.validityEnd).getTime(),n=new Date(o.formatDate(new Date)).getTime();"Y"==a.data.isEquitycard?"1"==a.data.state?e.setData({displayy_2:"block",carname_2:"权益卡已过期",titlename_2:"请重新领取"}):""!=a.data.validityBegin&&""!=a.data.validityEnd?n>=t&&n<=d?wx.getStorage({key:"foodInfo",success:function(t){t.data.orderRealPrice;var o=t.data.orderReceivablePrice,d=a.data.discount;null!=d&&void 0!=d&&""!=d||(d=10);var n=o-o*d/10;console.log("以优惠价格======>"+n);var s=n.toFixed(2);console.log("以优惠价格======>"+s),null!=s&&void 0!=s&&""!=s||(s=0),e.setData({selectedCoupon:"权益卡"+d+"折",displ:"none",yhprice:s,discountFlg:"Q",qxYouhuiflag:!0});var r=a.data.discount;null!=r&&void 0!=r&&""!=r||(d=10,e.setData({selectedCoupon:"无折扣"}))}}):n<t?e.setData({display_alone1:"block",titlename_0:"提示信息",carname_0:"未到使用时间\n还不能使用权益卡",cancel:"好\t的"}):n>d&&e.setData({display_alone1:"block",titlename_0:"提示信息",carname_0:"权益卡已过期",cancel:"好\t的"}):wx.getStorage({key:"foodInfo",success:function(t){t.data.orderRealPrice;var o=t.data.orderReceivablePrice,d=a.data.discount;null!=d&&void 0!=d&&""!=d||(d=10);var n=o-o*d/10;console.log("以优惠价格======>"+n);var s=n.toFixed(2);console.log("以优惠价格======>"+s),null!=s&&void 0!=s&&""!=s||(s=0),e.setData({selectedCoupon:"权益卡"+d+"折",displ:"none",yhprice:s,discountFlg:"Q",qxYouhuiflag:!0});var r=a.data.discount;null!=r&&void 0!=r&&""!=r||(d=10,e.setData({selectedCoupon:"无折扣"}))}}):e.setData({displayy_2:"block",carname_2:"无法使用权益卡优惠",titlename_2:"您没有权益卡"})}})}})}})},chkOrder1:function(){e.setData({displayy_0:"none"})},chkOrder0:function(){console.log("讲讲-------------余额响应事件"),e.setData({allowToPay:!1}),console.log("--------------------------------------------------------我执行了"),wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(t){wx.request({url:s+"skmembermodel/findWechatUserById",data:{wechatUserId:a.data,wechatUserStoreStoreInfoStoreId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){console.log("==========余额支付查询用户余额成功=========");var t=a.data.wechatUserStoreBalance;if(e.setData({wechatUserStoreBalance:a.data.wechatUserStoreBalance}),1*t<1*e.data.money)return wx.showToast({title:"余额不足",icon:"loading",duration:1e3}),void e.setData({allowToPay:!0});e.addBonusHistory(e.data.sofFlg)}})}})}})},toPay:function(t){console.log("========支付eeeee=======",t),e.setData({formId:t.detail.formId}),e.data.allowToClick?(e.setData({displ2:"none",allowToClick:!1}),setTimeout(function(){e.setData({allowToClick:!0});var o=1*e.data.foodInfo.orderReceivablePrice+1*e.data.peisongfei+1*e.data.canhefei-1*e.data.yhprice,d=t.currentTarget.dataset.id;if(e.setData({money:o,orderPayType:d}),"B"==d?e.setData({jiekouming:"addBonusHistory"}):e.setData({jiekouming:"paymentCallback"}),null!=o&&""!=o)if(o<=0)e.setData({displayy_2:"block",carname_2:"支付金额必须为正",titlename_2:"提示信息"});else{if(void 0==e.data.outTradeNo||""==e.data.outTradeNo||"null"==e.data.outTradeNo){var c=a.getWxPayOrdrID();e.setData({outTradeNo:c})}else{var l=e.data.outTradeNo;e.setData({outTradeNo:l})}if(console.log("订单号===》",e.data.outTradeNo),e.setData({companyOrderNumber:e.data.outTradeNo}),wx.setStorage({key:"derateMoney",data:e.data.yhprice}),"W"==d)console.log(e.data.wx_user_uuid),console.log(a.getWxPayOrdrID()),console.log(o),console.log(r),console.log(e.data.store_uuid),wx.request({url:s+"skmembermodel/wxPay",data:{wx_user_uuid:e.data.wx_user_uuid,order_a_num:e.data.outTradeNo,order_a_money:o.toFixed(2),appid:r,storeId:e.data.store_uuid},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){if("OK"==t.data.errCode){var d=e.data.wx_user_uuid,c=e.data.store_uuid;e.setData({allowToPay:!1}),e.doWxPay(t.data,d,c,o)}else if("INVALID_REQUEST"==t.data.errCode){var l=e.data.outTradeNo,i=n.globalData.appId;wx.request({url:s+"skmembermodel/orderquery",data:{outTradeno:l,appid:i},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var d=t.data.tradeState;if("NOTPAY"==d){console.log("================未支付继续支付===================");var n=a.getWxPayOrdrID();e.setData({outTradeNo:n}),e.setData({companyOrderNumber:e.data.outTradeNo}),wx.request({url:s+"skmembermodel/wxPay",data:{wx_user_uuid:e.data.wx_user_uuid,order_a_num:n,order_a_money:o.toFixed(2),appid:r,storeId:e.data.store_uuid},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var t=e.data.wx_user_uuid,d=e.data.store_uuid;e.setData({allowToPay:!1}),e.doWxPay(a.data,t,d,o)}})}"SUCCESS"==d&&(console.log("================已支付成功==================="),e.setData({displayy_2:"block",carname_2:"您已支付成功请退出",titlename_2:"提示信息"})),"REFUND"==d&&(console.log("================已退款==================="),e.setData({displayy_2:"block",carname_2:"您已转入退款",titlename_2:"提示信息"})),"CLOSED"==d&&(console.log("================已关闭==================="),e.setData({displayy_2:"block",carname_2:"已关闭",titlename_2:"提示信息"})),"REVOKED"==d&&(console.log("================已撤销==================="),e.setData({displayy_2:"block",carname_2:"已撤销",titlename_2:"提示信息"})),"USERPAYING"==d&&(console.log("================用户支付中==================="),e.setData({displayy_2:"block",carname_2:"用户支付中请勿再次支付",titlename_2:"提示信息"})),"PAYERROR"==d&&(console.log("================支付失败==================="),e.setData({displayy_2:"block",carname_2:"支付失败",titlename_2:"提示信息"}))}})}},fail:function(e){console.log("========微信支付错在哪=======",e)}});else if("B"==d){e.setData({sofFlg:"s"});wx.getStorage({key:"storeName",success:function(a){e.setData({displayy_0:"block",titlename_0:"确认支付吗？",carname_0:"即将支付"+e.data.money.toFixed(2)+"元给"+a.data,sofFlg:"s"})}})}}else e.setData({displayy_2:"block",carname_2:"消费金额不能为空",titlename_2:"提示信息"})},100)):e.setData({displ2:"none"})},doWxPay:function(a,t,o,d){e.data.allowToPay1&&(e.setData({allowToPay1:!1}),e.addBonusHistory("f"),wx.requestPayment({timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:"MD5",paySign:a.paySign,success:function(a){e.setData({sofFlg:"s"});wx.navigateTo({url:"paidOrder/paidOrder"})},fail:function(a){console.log("=========调用微信充值接口失败========="),console.log(a),e.setData({sofFlg:"f"});var t=e.data.outTradeNo,o=n.globalData.appId;wx.request({url:s+"skmembermodel/orderquery",data:{outTradeno:t,appid:o},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var t=a.data.tradeState;"NOTPAY"==t&&(console.log("================未支付继续支付==================="),console.log(JSON.stringify(a)+"res=======>")),"SUCCESS"==t&&(console.log("================已支付成功==================="),e.setData({displayy_2:"block",carname_2:"您已支付成功请退出",titlename_2:"提示信息"})),"REFUND"==t&&(console.log("================已退款==================="),e.setData({displayy_2:"block",carname_2:"您已转入退款",titlename_2:"提示信息"})),"CLOSED"==t&&(console.log("================已关闭==================="),e.setData({displayy_2:"block",carname_2:"已关闭",titlename_2:"提示信息"})),"REVOKED"==t&&(console.log("================已撤销==================="),e.setData({displayy_2:"block",carname_2:"已撤销",titlename_2:"提示信息"})),"USERPAYING"==t&&(console.log("================用户支付中==================="),e.setData({displayy_2:"block",carname_2:"用户支付中请勿再次支付",titlename_2:"提示信息"})),"PAYERROR"==t&&(console.log("================支付失败==================="),e.setData({displayy_2:"block",carname_2:"支付失败",titlename_2:"提示信息"}))}})}}))},chkOrder_1:function(){console.log("点我达状态",e.data.takeOutDispatchType),wx.switchTab({url:"/pages/index/order/order"})},chkOrder_2:function(){wx.switchTab({url:"../../../index/index"})},addBonusHistory:function(a){console.log("---------------------调用了几次--------------------------------"),wx.getStorage({key:"orderId",success:function(t){wx.getStorage({key:"couponInfo",success:function(o){wx.getStorage({key:"orderType",success:function(d){wx.request({url:s+"skordermodel/webSocketPush",data:{storeId:e.data.store_uuid,orderType:d.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log(e)},fail:function(a){console.log(a),e.setData({allowToPay:!0})}}),console.log("==========couponFlg============"),console.log(e.data.couponFlg),wx.request({url:s+"skmembermodel/"+e.data.jiekouming,method:"POST",data:{takeOutDispatchType:e.data.takeOutDispatchType,peisongfei:e.data.peisongfei,wxUserUuid:e.data.wx_user_uuid,storeUuid:e.data.store_uuid,realPrice:e.data.money.toFixed(2),reduceType:"X",orderType:d.data,orderId:t.data,orderPayType:e.data.orderPayType,couponFlg:e.data.couponFlg,couponId:o.data.couponId,code:o.data.code,discountFlg:e.data.discountFlg,companyOrderNumber:e.data.companyOrderNumber,sofFlg:a,formId:e.data.formId,formType:"1"},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){if(console.log("==============看看积分是多少==================="),console.log(t.data.storeIntegeal),e.setData({allowToPay1:!0}),"B"==e.data.orderPayType&&"000000"!=t.data.message)return console.log("余额支付失败状态码===》"+e.data.orderPayType),console.log("余额支付失败消息===》"+t.data.message),void e.setData({displayy_2:"block",carname_2:"请联系后台管理员",titlename_2:"余额支付失败"});if(console.log("========回调成功=========="),console.log(t.data),"s"==a){console.log("===========余额支付===============");var o=t.data.storeIntegeal;wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(t){wx.request({url:s+"skmembermodel/findWechatUserById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{wechatUserId:a.data,wechatUserStoreStoreInfoStoreId:t.data},success:function(a){"v"==a.data.wechatUserStoreIdentity&&""!=o&&null!=o&&"0"!=o&&void 0!=o&&"undefined"!=o?e.setData({displayy_1:"block",carname_1:"送您"+o+"积分\n点击确定前去订单页,取消返回首页",titlename_1:"支付成功"}):e.setData({displayy_1:"block",carname_1:"点击确定前去订单页\n取消返回首页",titlename_1:"支付成功"})}})}})}})}},fail:function(e){console.log("========回调失败=========="),console.log(e)}})}})}})}})},toPay1:function(){wx.navigateTo({url:"paidOrder/paidOrder"})},chkOrder0_4:function(){wx.redirectTo({url:"bohuiOrder/bohuiOrder"})},chkOrder1_4:function(){wx.switchTab({url:"../../order/order"})},toPay2:function(){wx.getStorage({key:"orderId",success:function(a){wx.getStorage({key:"orderType",success:function(t){wx.request({url:s+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:a.data,orderType:t.data},success:function(a){var t=a.data.outTradeNo;e.setData({outTradeNo:t}),"6"!=a.data.orderState?"1"!=a.data.orderPayFlg?"4"!=a.data.orderState&&"9"!=a.data.orderState?e.setData({displ2:"block"}):e.setData({displayy_5:"block",carname_5:"订单已支付，不可支付！",titlename_5:"提示信息"}):e.setData({displayy_5:"block",carname_5:"如有疑问请联系商家",titlename_5:"订单已支付"}):e.setData({displayy_4:"block",carname_4:"确定查询驳回信息",titlename_4:"订单被退回，不可支付！"})}}),console.log(t)}})}})},fanhui:function(){wx.switchTab({url:"../order"})},resume:function(a){e.data.allowToPay?wx.getStorage({key:"orderId",success:function(e){wx.getStorage({key:"orderType",success:function(a){var t="";console.log("订单id",e.data,"订单类型",a.data),"D"==a.data?t=s+"skordermodel/updOrderInfo":"W"==a.data?t=s+"skordermodel/updTakeOutOrder":"Y"==a.data&&(t=s+"skordermodel/updReservedOrder"),wx.request({url:t,method:"POST",data:{orderState:"5",id:e.data},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log(e,"取消成功")},fail:function(e){console.log(e,"取消失败")}}),wx.switchTab({url:"../../index"})}})}}):e.setData({displayy_2:"block",carname_2:"不可取消订单",titlename_2:"订单支付中"})},back:function(){e.setData({displ:"none",displ2:"none"})},chkOrder0_6:function(){wx.navigateTo({url:"selCoupon/selCoupon"})},chkOrder1_6:function(){wx.getStorage({key:"recoverCouponInfo",success:function(a){e.setData({selectedCoupon:a.data.selectedCoupon,yhprice:a.data.yhprice})}}),wx.getStorage({key:"discountFlg",success:function(a){e.setData({discountFlg:a.data})}})},chkOrder1_7:function(){wx.getStorage({key:"recoverCouponInfo",success:function(a){e.setData({selectedCoupon:a.data.couponName,yhprice:a.data.yhprice})}}),wx.getStorage({key:"discountFlg",success:function(a){e.setData({discountFlg:a.data})}})},onLoad:function(a){console.error("options-------------------",a),e=this,t.getShareInfos(e,s),t.setCompanyId(e,a),t.setStoreInfo(e),wx.getStorage({key:"takeOutDispatchType",success:function(a){console.log("点我达状态---------",a.data),e.setData({takeOutDispatchType:a.data})}}),wx.getStorage({key:"submitFlg",success:function(t){1==t.data&&(e.setData({selectedCoupon:a.youhui,yhprice:a.yhprice}),wx.setStorage({key:"submitFlg",data:"false"}))}}),console.log("===evalOrder onLoad start==="),wx.getStorage({key:"couponFlg",success:function(a){e.setData({couponFlg:a.data})},fail:function(a){e.setData({couponFlg:0,discountFlg:""}),wx.setStorage({key:"couponInfo",data:{couponName:"",derateMoney:"",couponId:"",code:"",miniMoney:"",couponType:""}})}}),wx.getStorage({key:"takeOutDispatchType",success:function(a){e.setData({takeOutDispatchType:a.data})}}),wx.getStorage({key:"couponInfo",success:function(a){e.setData({couponInfo:a.data})}}),wx.getStorage({key:"storeId",success:function(a){e.setData({storeId:a.data,store_uuid:a.data}),wx.getStorage({key:"userId",success:function(a){e.setData({wx_user_uuid:a.data})}})}}),wx.getStorage({key:"couponInfo",success:function(a){if(""!=a.data.couponType){var t=a.data.miniMoney,o=a.data.couponType;"4"==o?wx.getStorage({key:"foodInfo",success:function(o){var d=o.data.orderRealPrice;o.data.orderReceivablePrice;console.log("realPrice"+d),console.log("miniMoney"+t),console.log("selectedCoupon"+a.data.couponName),d>=t?e.setData({selectedCoupon:a.data.couponName,yhprice:a.data.derateMoney,discountFlg:"Y",qxYouhuiflag:!0}):(wx.setStorage({key:"couponFlg",data:"0"}),e.setData({couponFlg:"0"}),e.setData({displayy_6:"block",carname_6:"未达到满减条件，请重新选择优惠券",titlename_6:"提示信息"}))}}):"2"==o&&wx.getStorage({key:"foodInfo",success:function(o){var d=o.data.orderRealPrice,n=o.data.orderReceivablePrice;if(d>=t){var s=n-n*a.data.derateMoney/10;console.log("以优惠价格======>"+s);var r=s.toFixed(2);console.log("以优惠价格======>"+r),null!=r&&void 0!=r&&""!=r||(r=0),e.setData({selectedCoupon:a.data.couponName,yhprice:r,discountFlg:"Y",qxYouhuiflag:!0})}else wx.setStorage({key:"couponFlg",data:"0"}),e.setData({couponFlg:0}),e.setData({displayy_7:"block",carname_7:"未达到满减条件，请重新选择优惠券",titlename_7:"提示信息"})}})}else e.setData({selectedCoupon:"",yhprice:0})}}),wx.getStorage({key:"deskNum",success:function(a){e.setData({deskNum:a.data})}}),wx.getStorage({key:"receiverNotes",success:function(a){e.setData({orderAddr:a.data.wechatUserAddressFullAddress,orderContactName:a.data.wechatUserAddressReceiverName,orderContactTel:a.data.wechatUserAddressReceiverPhoneNum})}}),wx.getStorage({key:"wmFlg",success:function(a){a.data&&wx.getStorage({key:"beizhu",success:function(a){e.setData({orderDetail:a.data})}})}}),wx.getStorage({key:"dcFlg",success:function(a){a.data&&wx.getStorage({key:"dcBeizhu",success:function(a){e.setData({orderDetail:a.data})}})}}),wx.getStorage({key:"wmFlg",success:function(a){e.setData({wmFlg:a.data})}}),wx.getStorage({key:"dcFlg",success:function(a){e.setData({dcFlg:a.data})}}),wx.getStorage({key:"storeInfo",success:function(a){var t=a.data.storeInfoTelephoneNum;console.log("商户电话"+t),null==t&&(a.data.storeInfoTelephoneNum=""),console.log("商户电话"+a.data.storeInfoTelephoneNum),e.setData({storeInfo:a.data})}});var o=a.orderId,d=a.orderType;console.log("orderId  ==> "+o),console.log("orderType  ==> "+d),wx.getStorage({key:"ydFlg",success:function(a){e.setData({ydFlg:a.data}),1==a.data?wx.getStorage({key:"orderId",success:function(a){wx.request({url:s+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:o,orderType:d},success:function(a){if(console.log("走预定"),a.data){console.log("继续走预定",a),e.setData({foodInfo:a.data,orderDate:a.data.reservedEstimatedTime.split(" ")[0].replace('"',""),orderTime:a.data.reservedEstimatedTime.split(" ")[1].replace('"',""),orderTable:a.data.tableName,orderPersonNumber:a.data.reservedCount,orderContractName:a.data.reservedName,orderContractTel:a.data.reservedPhoneNum}),wx.setStorage({key:"foodInfo",data:a.data}),wx.setStorage({key:"orderId",data:a.data.id}),console.log("预计到店时间 ==> "+a.data.reservedEstimatedTime);var t=new Date(a.data.reservedEstimatedTime.replace(/-/g,"/")).getTime()/1e3;console.log("预计到店时间转换=====》"+t);var o=(new Date).getTime()/1e3;console.log("获取当前时间=====》"+o.toFixed(0));var d=(1*t.toFixed(0)-1*o.toFixed(0)).toFixed(0);if(console.log("获取当前时间=====》"+d),console.log("获取当前时间=====》"+d),d>0){var n=(c=d)-60*Math.floor(c/60),s=Math.floor(c-3600*Math.floor(c/3600))/60,r=Math.floor(c/3600);e.setData({seconds:c,minute:s,second:n,hour:r});e.countDown()}else{var c=600,n=c-60*Math.floor(c/60),s=Math.floor(c-3600*Math.floor(c/3600))/60,r=Math.floor(c/3600);e.setData({seconds:600,minute:10,second:0,hour:0});e.countDown()}}else e.setData({displayy_2:"block",carname_2:"订单支付中",titlename_2:"提示信息"})}})}}):(console.log("orderId ==>"+o),wx.request({url:s+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:o,orderType:d},success:function(a){wx.getStorage({key:"storeInfo",success:function(t){if("0"==t.data.boxPriceType){var o=t.data.storeInfoBoxPrice;null!=o&&""!=o&&void 0!=o||(o=0),wx.getStorage({key:"wmFlg",success:function(a){1==a.data?e.setData({canhefei:o}):e.setData({canhefei:0})}})}else e.setData({canhefei:a.data.foodInfoBoxPrice})}}),console.log("走点餐和外卖"),a.data?(console.log(a.data),e.setData({foodInfo:a.data,deskNum:a.data.orderTableId,peisongfei:void 0==a.data.distributionFee?0:a.data.distributionFee}),wx.setStorage({key:"foodInfo",data:a.data}),wx.setStorage({key:"orderId",data:a.data.id}),console.log("===evalOrder onLoad end===")):e.setData({displayy_2:"block",carname_2:"未获取点单信息",titlename_2:"提示信息"})}}))}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){(e=this).setData({displ2:"none"}),wx.onSocketMessage(function(a){console.log("===========接收到服务器信息=============="),console.log(a.data),"orderPaid"==a.data&&(wx.showToast({title:"您有订单已支付"}),wx.switchTab({url:"../../../index/index"})),t.getTkInfos(e,a),t.playMusic(e,a)}),e=this,wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){t.conSocket(e.data,s)}})})},onHide:function(){},onUnload:function(){t.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},countDown:function(){var e=this,a=e.data.seconds,t=e.data.hour,o=e.data.minute,d=e.data.second;if(a>0)var n=setTimeout(function(){d=(a-=1)-60*Math.floor(a/60),o=Math.floor((a-3600*Math.floor(a/3600))/60),t=Math.floor(a/3600),e.setData({seconds:a,hour:t,minute:o,second:d});e.countDown()},1e3);else e.setData({hour:0,minute:0,second:0}),clearTimeout(n),a=0,wx.getStorage({key:"orderId",success:function(a){wx.request({url:s+"skordermodel/updReservedOrder",data:{orderState:"5",id:a.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){e.setData({displayy_8:"block",carname_8:"订单已自动取消",titlename_8:"提示信息"})}})}})},chkOrder0_8:function(){wx.switchTab({url:"../../index"})}}); 
 			}); 	require("pages/index/order/evalOrder/evalOrder.js");
 		__wxRoute = 'pages/index/order/order';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/order/order.js';	define("pages/index/order/order.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../../utils/wx_x_config.js");var e,r=require("../../../utils/util.js"),a=getApp().globalData.httpUrl;Page({data:{cancelReason:"",refundresult:"",disp1:!1,disp2:!1,disp3:!1,heightFl:"display",heightFlg:"block",overflowFlg:"auto",bohuiReason:"无理由",clicked:0,noMore:!1,clicked1:0,noMore1:!1,clicked2:0,noMore2:!1,httpUrl:a,currentTab:0,takeOutDispatchType:"",displayy:"none",displayy_0:"none",displayy_1:"none"},onLoad:function(t){e=this,wx.getStorage({key:"takeOutDispatchType",success:function(r){e.setData({takeOutDispatchType:r.data})}}),e.setData({refundresult:""}),r.getShareInfos(e,a),r.setUserId(e),r.setCompanyId(e,t),r.setStoreInfo(e),wx.setStorage({key:"couponInfo",data:""}),wx.setStorage({key:"couponFlg",data:"0"}),wx.setStorage({key:"couponId",data:""}),wx.getStorage({key:"storeId",success:function(r){e.setData({storeId:r.data}),wx.getStorage({key:"userId",success:function(a){console.log("userId:"+a.data),console.log("storeId:"+r.data),e.getReservedOrderList(a.data,r.data),e.getOrderList(a.data,r.data),e.getTakeOutList(a.data,r.data)},fail:function(e){console.log("========userId fail=======")}})},fail:function(e){console.log("========storeId fail=======")}})},goToDetaY:function(r){console.log("=====状态是多少=========",r),wx.setStorage({key:"couponInfo",data:""});var a=r.currentTarget.dataset.orderId,t=r.currentTarget.dataset.orderState;wx.setStorage({key:"orderId",data:a}),wx.setStorage({key:"orderType",data:"Y"}),wx.setStorage({key:"wmFlg",data:!1}),wx.setStorage({key:"dcFlg",data:!1}),wx.setStorage({key:"ydFlg",data:!0}),"1"==t?(console.log("已提交"),wx.navigateTo({url:"../destine/waitReceipt/waitReceipt?orderId="+a+"&orderType=Y&orderState=1"})):"2"==t?(console.log("已接单"),e.editOrder(r)):"4"==t?wx.navigateTo({url:"evalOrder/evalOrder?orderId="+a+"&orderType=Y&orderState=4"}):"5"==t?e.setData({displayy_0:"block",carname_0:"订单已取消",titlename_0:"提示信息"}):"6"==t?wx.navigateTo({url:"../destine/Receipt/Receipt?orderId="+a+"&orderType=Y&orderState=6"}):"9"==t?e.checkOrder(r):"10"==t||"11"==t?wx.navigateTo({url:"evalOrder/evaluatedOrder/evaluatedOrder?orderId="+a+"&orderType=Y&orderState="+t}):"11"==t?e.getPayBackInfo(r):"12"==t?wx.navigateTo({url:"evalOrder/evaluatedOrder/evaluatedOrder?orderId="+a+"&orderType=Y&orderState="+t}):"13"==t?e.bohuiReason(r):"14"==t?e.payBack(r):wx.navigateTo({url:"evalOrder/evalOrder?orderId="+a+"&orderType=Y"})},goToDetaD:function(r){console.log("状态是多少====",r),wx.setStorage({key:"couponInfo",data:""}),wx.setStorage({key:"dcFlg",data:!0}),wx.setStorage({key:"ydFlg",data:!1}),wx.setStorage({key:"wmFlg",data:!1}),wx.setStorage({key:"orderType",data:"D"});var a=r.currentTarget.dataset.dcBeizhu;wx.setStorage({key:"dcBeizhu",data:a});var t=r.currentTarget.dataset.id,o=r.currentTarget.dataset.orderState;"9"==o?e.checkOrder(r):"6"==o?wx.navigateTo({url:"evalOrder/bohuiOrder/bohuiOrder?orderId="+t+"&orderType=D&orderState=6"}):"10"==o||"11"==o?wx.navigateTo({url:"evalOrder/evaluatedOrder/evaluatedOrder?orderId="+t+"&orderType=D&orderState="+o}):"11"==o?e.getPayBackInfo(r):"12"==o?wx.navigateTo({url:"evalOrder/evaluatedOrder/evaluatedOrder?orderId="+t+"&orderType=D&orderState="+o}):"13"==o?e.bohuiReason(r):"14"==o?e.payBack(r):wx.navigateTo({url:"evalOrder/evalOrder?orderId="+t+"&orderType=D"})},goToDetaW:function(r){wx.setStorage({key:"dcFlg",data:!1}),wx.setStorage({key:"ydFlg",data:!1}),wx.setStorage({key:"wmFlg",data:!0}),wx.setStorage({key:"k",data:"k"});var a=r.currentTarget.dataset.id,t=r.currentTarget.dataset.orderState;if(console.log("=====orderState========"),console.log(t,a),"0"==e.data.takeOutDispatchType)if("9"==t||"4"==t)wx.navigateTo({url:"evalOrder/paidOrder/paidOrder?orderId="+a+"&orderType=W&orderState="+t});else{if("3"==t)return void console.log("配送中");"6"==t?(console.log("已驳回"),wx.navigateTo({url:"evalOrder/bohuiOrder/bohuiOrder?orderId="+a+"&orderType=W&orderState=6"})):"10"==t||"11"==t||"15"==t?wx.navigateTo({url:"evalOrder/evaluatedOrder/evaluatedOrder?orderId="+a+"&orderType=W&orderState="+t}):"11"==t?e.getPayBackInfo(r):"12"==t?wx.navigateTo({url:"evalOrder/evaluatedOrder/evaluatedOrder?orderId="+a+"&orderType=W&orderState="+t}):"13"==t?e.bohuiReason(r):"14"==t?e.payBack(r):"26"==t?wx.navigateTo({url:"evalOrder/paidOrder/paidOrder?orderId="+a+"&orderType=W&orderState="+t}):(wx.setStorage({key:"couponInfo",data:""}),wx.navigateTo({url:"evalOrder/submitOrder/submitOrder?orderId="+a+"&orderType=W"}))}else if("1"==e.data.takeOutDispatchType){var o=r.currentTarget.dataset.psf;if(wx.setStorage({key:"deliveryPrice",data:o}),"9"==t||"4"==t){var d=r.currentTarget.dataset.psf;wx.setStorage({key:"deliveryPrice",data:d}),wx.navigateTo({url:"evalOrder/paidOrder/paidOrder?orderId="+a+"&orderType=W&orderState="+t})}else{if("20"==t||"21"==t||"22"==t||"23"==t)return console.log("配送中"),void e.checkOrder(r);"6"==t?(console.log("已驳回"),wx.navigateTo({url:"evalOrder/bohuiOrder/bohuiOrder?orderId="+a+"&orderType=W&orderState=6"})):"10"==t||"11"==t||"24"==t?wx.navigateTo({url:"evalOrder/evaluatedOrder/evaluatedOrder?orderId="+a+"&orderType=W&orderState="+t}):"11"==t?e.getPayBackInfo(r):"12"==t?wx.navigateTo({url:"evalOrder/evaluatedOrder/evaluatedOrder?orderId="+a+"&orderType=W&orderState="+t}):"13"==t?e.bohuiReason(r):"26"==t?wx.navigateTo({url:"evalOrder/paidOrder/paidOrder?orderId="+a+"&orderType=W&orderState="+t}):(wx.setStorage({key:"couponInfo",data:""}),wx.navigateTo({url:"evalOrder/submitOrder/submitOrder?orderId="+a+"&orderType=W"}))}}},getReservedOrderList:function(r,t){console.log("预定"),wx.request({url:a+"skordermodel/selReservedOrderWX",data:{wechatUserId:r,storeId:t},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(r){e.setData({onClickFlag:!0,orders:r.data.data});var a=r.data.data,t=[],o=[],d=!1;if(a.length>=5){for(var n=0;n<5;n++)t[n]=a[n],1*t[n].orderReceivablePrice>1*t[n].orderRealPrice?o[n]=(1*t[n].orderReceivablePrice-1*t[n].orderRealPrice).toFixed(2):o[n]=0;d=!1}else{for(var s=0;s<a.length;s++)t[s]=a[s],1*t[s].orderReceivablePrice>1*t[s].orderRealPrice?o[s]=(1*t[s].orderReceivablePrice-1*t[s].orderRealPrice).toFixed(2):o[s]=0;d=!0}e.setData({infos21:t,noMore:d,orderYHYprice21:o})}})},getOrderList:function(r,t){wx.request({url:a+"skordermodel/selOrderInfoWX",data:{wechatUserId:r,storeId:t},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(r){e.setData({onClickFlag:!0,orders1:r.data.data});var a=r.data.data,t=[],o=[],d=!1;if(a.length>=5){for(var n=0;n<5;n++)t[n]=a[n],1*t[n].orderReceivablePrice>1*t[n].orderRealPrice?o[n]=(1*t[n].orderReceivablePrice-1*t[n].orderRealPrice).toFixed(2):o[n]=0;d=!1}else{for(var s=0;s<a.length;s++)t[s]=a[s],1*t[s].orderReceivablePrice>1*t[s].orderRealPrice?o[s]=(1*t[s].orderReceivablePrice-1*t[s].orderRealPrice).toFixed(2):o[s]=0;d=!0}e.setData({infos22:t,noMore1:d,orderYHDprice22:o})}})},getTakeOutList:function(r,t){console.log("外卖"),wx.request({url:a+"skordermodel/selTakeOutOrderWX",data:{wechatUserId:r,storeId:t},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(r){console.log("我是外卖订单"),console.log("0----------------外卖订单"+JSON.stringify(r.data.data[0].orderState)),console.log("0----------------外卖订单",r.data),e.setData({onClickFlag:!0,orders2:r.data.data});var a=r.data.data,t=[],o=[],d=!1;if(a.length>=5){for(var n=0;n<5;n++)t[n]=a[n],1*t[n].orderReceivablePrice>1*t[n].orderRealPrice?o[n]=(1*t[n].orderReceivablePrice-1*t[n].orderRealPrice).toFixed(2):o[n]=0;console.log("woshi jiage chajia"),console.log(o),d=!1}else{for(var s=0;s<a.length;s++)t[s]=a[s],1*t[s].orderReceivablePrice>1*t[s].orderRealPrice?o[s]=(1*t[s].orderReceivablePrice-1*t[s].orderRealPrice).toFixed(2):o[s]=0;console.log("woshi jiage chajia22"),console.log(o),d=!0}e.setData({infos23:t,noMore2:d,orderYHprice23:o})}})},swiperTab:function(r){var a=r.detail.current;wx.getStorage({key:"storeId",success:function(r){wx.getStorage({key:"userId",success:function(t){"0"==a?e.getReservedOrderList(t.data,r.data):"1"==a?e.getOrderList(t.data,r.data):e.getTakeOutList(t.data,r.data)},fail:function(e){console.log("========userId fail=======")}})},fail:function(e){console.log("========storeId fail=======")}}),(e=this).setData({currentTab:r.detail.current}),console.log(r)},clickTab:function(r){console.log(r);var a=r.currentTarget.dataset.orderName;if(wx.getStorage({key:"storeId",success:function(r){wx.getStorage({key:"userId",success:function(t){"reserve"==a?e.getReservedOrderList(t.data,r.data):"order"==a?e.getOrderList(t.data,r.data):e.getTakeOutList(t.data,r.data)},fail:function(e){console.log("========userId fail=======")}})},fail:function(e){console.log("========storeId fail=======")}}),this.data.currentTab===r.target.dataset.current)return!1;e.setData({currentTab:r.target.dataset.current}),wx.setStorage({key:"currentTab",data:r.target.dataset.current})},onReady:function(){},closeTk:function(){e.setData({displa:!1}),this.onLoad()},selOperationRecord:function(){wx.getStorage({key:"storeId",success:function(e){wx.getStorage({key:"userId",success:function(r){wx.request({url:a+"skmembermodel/getOperationRecordNum",data:{wxUserUuid:r.data,storeUuid:e.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log(e.data+"===res.data提醒信息量===>");var r=e.data,a=String(r);r>0&&wx.setTabBarBadge({index:3,text:a})}})}})}})},onShow:function(){e=this,wx.getStorage({key:"currentTab",success:function(r){console.log("得到的列表参数==========》",r.data),e.setData({currentTab:r.data})}}),console.log("======开始清除currentTab========="),wx.removeStorage({key:"currentTab",success:function(e){}}),e.onLoad(),wx.onSocketMessage(function(a){console.log("===========接收到服务器信息==============",a),"skip"!=a.data&&"repast"!=a.data&&"send"!=a.data||e.onLoad(),"refunInfoReminding"==a.data.split("&")[0]&&e.onLoad(),r.getTkInfos(e,a),r.playMusic(e,a)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){r.conSocket(e.data,a)}})}),console.log("===order sonShow==="),e.selOperationRecord()},onHide:function(){e.setData({disp1:!1,disp2:!1,disp3:!1,disp4:!1,heightFl:"display",heightFlg:"block",overFlowFlg:"auto"})},onUnload:function(){r.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){0==e.data.currentTab?e.getMore():1==e.data.currentTab?e.getMore1():2==e.data.currentTab&&e.getMore2()},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},checkOrder:function(r){var t=r.currentTarget.dataset.id,o=r.currentTarget.dataset.currentTab;0==o?(e.setData({orderType:"Y",orderId:t}),wx.setStorage({key:"orderType",data:"Y"}),wx.setStorage({key:"orderId",data:t}),wx.setStorage({key:"wmFlg",data:!1}),wx.setStorage({key:"dcFlg",data:!1}),wx.setStorage({key:"ydFlg",data:!0})):1==o?(e.setData({orderType:"D",orderId:t}),wx.setStorage({key:"orderType",data:"D"}),wx.setStorage({key:"orderId",data:t}),wx.setStorage({key:"wmFlg",data:!1}),wx.setStorage({key:"dcFlg",data:!0}),wx.setStorage({key:"ydFlg",data:!1})):(console.log(t),e.setData({orderType:"W",orderId:t}),wx.setStorage({key:"orderType",data:"W"}),wx.setStorage({key:"orderId",data:t}),wx.setStorage({key:"wmFlg",data:!0}),wx.setStorage({key:"dcFlg",data:!1}),wx.setStorage({key:"ydFlg",data:!1})),wx.request({url:a+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:t,orderType:e.data.orderType},success:function(e){wx.setStorage({key:"foodInfo",data:e.data}),wx.navigateTo({url:"evalOrder/checkOrder/checkOrder"})}})},payBack:function(r){var t=r.currentTarget.dataset.id,o=r.currentTarget.dataset.currentTab;if(0==o){e.setData({orderType:"Y",orderId:t})}else if(1==o){e.setData({orderType:"D",orderId:t})}else{e.setData({orderType:"W",orderId:t})}wx.request({url:a+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:t,orderType:e.data.orderType},success:function(r){var a=r.data.orderState;wx.setStorage({key:"os",data:a}),console.log(e.data.orderType);var o=r.data.orderRealPrice,d=r.data.orderPayType,n=r.data.orderNum;if("11"==r.data.orderState)return e.setData({displayy_0:"block",carname_0:"该订单已退款",titlename_0:"提示信息"}),void e.onLoad();wx.getStorage({key:"userName",success:function(r){wx.getStorage({key:"storeId",success:function(a){e.setData({orderNum:n,orderId:t,orderType:e.data.orderType,orderPayType:d,payBackMoney:o,userName:r.data,storeId:a.data,disp1:!0,heightFl:"height",heightFlg:"calc(100vh - 150rpx)",overFlowFlg:"hidden"})}})}})}})},evalOrder:function(r){var t=r.currentTarget.dataset.id,o=r.currentTarget.dataset.currentTab;0==o?(e.setData({orderType:"Y",orderId:t}),wx.setStorage({key:"orderType",data:"Y"}),wx.setStorage({key:"orderId",data:t})):1==o?(e.setData({orderType:"D",orderId:t}),wx.setStorage({key:"orderType",data:"D"}),wx.setStorage({key:"orderId",data:t})):(console.log(t),e.setData({orderType:"W",orderId:t}),wx.setStorage({key:"orderType",data:"W"}),wx.setStorage({key:"orderId",data:t})),wx.request({url:a+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:t,orderType:e.data.orderType},success:function(e){wx.setStorage({key:"foodInfo",data:e.data}),wx.navigateTo({url:"evalOrder/evaluation/evaluation"})}})},payOrder:function(e){var r=e.currentTarget.dataset.id,a=e.currentTarget.dataset.currentTab,t=void 0,o=void 0,d=void 0,n=void 0;0==a?(t="Y",o=!1,d=!1,n=!0,console.log(t)):1==a?(console.log("我是点餐"),t="D",o=!1,d=!0,n=!1,console.log(t)):(console.log("我是外卖"),t="W",o=!1,d=!1,n=!1,console.log(t)),wx.setStorage({key:"couponInfo",data:""}),wx.setStorage({key:"orderId",data:r}),wx.setStorage({key:"orderType",data:t}),wx.setStorage({key:"wmFlg",data:o}),wx.setStorage({key:"dcFlg",data:d}),wx.setStorage({key:"ydFlg",data:n}),wx.navigateTo({url:"evalOrder/evalOrder?orderId="+r+"&orderType="+t})},editOrder:function(e){e.currentTarget.dataset.item;var r=e.currentTarget.dataset.id,a=e.currentTarget.dataset.currentTab,t=void 0,o=e.currentTarget.dataset.orderState,d=void 0,n=void 0,s=void 0;0==a?(t="Y",d=!1,n=!1,s=!0):1==a?(t="D",d=!1,n=!0,s=!1):(t="W",d=!0,n=!1,s=!1),wx.setStorage({key:"orderType",data:t}),wx.setStorage({key:"wmFlg",data:d}),wx.setStorage({key:"dcFlg",data:n}),wx.setStorage({key:"ydFlg",data:s}),wx.setStorage({key:"orderId",data:r}),console.log(t+o),"Y"==t&&"1"==o?wx.navigateTo({url:"../destine/destine?orderId="+r+"&editType=N"}):wx.navigateTo({url:"../takeOut/takeOut?flag="+t+"&orderId="+r+"&editType=N"})},cancelApply:function(r){var t=r.currentTarget.dataset.id;r.currentTarget.dataset.currentTab;wx.request({url:a+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:t,orderType:"W"},success:function(r){console.log("============取消配送获取订单信息================"),console.log("orderNum:"+r.data.orderNum),console.log("orderState:"+r.data.orderState);var a=r.data.orderNum;if("???"==r.data.orderState)return e.setData({displayy_0:"block",carname_0:"该订单已取消配送",titlename_0:"提示信息"}),void e.onLoad();e.setData({orderNum:a,orderId:t,orderType:"W",disp4:!0,heightFl:"height",heightFlg:"calc(100vh - 150rpx)",overFlowFlg:"hidden"})}})},cancelOrder:function(r){console.log("========cancelOrder======="),console.log(r);var t=r.currentTarget.dataset.currentTab,o=r.currentTarget.dataset.id,d=void 0;0==t?("Y",d=a+"skordermodel/updReservedOrder"):1==t?("D",d=a+"skordermodel/updOrderInfo"):("W",d=a+"skordermodel/updTakeOutOrder"),wx.request({url:d,data:{orderState:"5",id:o},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(r){e.onLoad()}})},getMore:function(){if(1!=e.data.noMore){var r=e.data.infos21,a=e.data.orderYHYprice21,t=e.data.clicked,o=!1;if(10+10*(t+=1)<=e.data.orders.length){for(var d=0;d<10+10*t;d++)r[d]=e.data.orders[d],1*r[d].orderReceivablePrice>1*r[d].orderRealPrice?a[d]=(1*r[d].orderReceivablePrice-1*r[d].orderRealPrice).toFixed(2):a[d]=0;o=!1}else{for(var n=0;n<e.data.orders.length;n++)r[n]=e.data.orders[n],1*r[n].orderReceivablePrice>1*r[n].orderRealPrice?a[n]=(1*r[n].orderReceivablePrice-1*r[n].orderRealPrice).toFixed(2):a[n]=0;o=!0}e.setData({infos21:r,clicked:t,noMore:o,orderYHYprice21:a})}else wx.showToast({title:"无更多信息",icon:"loading",duration:1e3})},getMore1:function(){if(1!=e.data.noMore1){var r=e.data.infos22,a=e.data.orderYHDprice22,t=e.data.clicked1,o=!1;if(10+10*(t+=1)<=e.data.orders1.length){for(var d=0;d<10+10*t;d++)r[d]=e.data.orders1[d],1*r[d].orderReceivablePrice>1*r[d].orderRealPrice?a[d]=(1*r[d].orderReceivablePrice-1*r[d].orderRealPrice).toFixed(2):a[d]=0;o=!1}else{for(var n=0;n<e.data.orders1.length;n++)r[n]=e.data.orders1[n],1*r[n].orderReceivablePrice>1*r[n].orderRealPrice?a[n]=(1*r[n].orderReceivablePrice-1*r[n].orderRealPrice).toFixed(2):a[n]=0;o=!0}e.setData({infos22:r,clicked1:t,noMore1:o,orderYHDprice22:a})}else wx.showToast({title:"无更多信息",icon:"loading",duration:1e3})},getMore2:function(){if(1!=e.data.noMore2){var r=e.data.infos23,a=e.data.clicked2,t=e.data.orderYHprice23,o=!1;if(10+10*(a+=1)<=e.data.orders2.length){for(var d=0;d<10+10*a;d++)r[d]=e.data.orders2[d],1*r[d].orderReceivablePrice>1*r[d].orderRealPrice?t[d]=(1*r[d].orderReceivablePrice-1*r[d].orderRealPrice).toFixed(2):t[d]=0;o=!1}else{for(var n=0;n<e.data.orders2.length;n++)r[n]=e.data.orders2[n],1*r[n].orderReceivablePrice>1*r[n].orderRealPrice?t[n]=(1*r[n].orderReceivablePrice-1*r[n].orderRealPrice).toFixed(2):t[n]=0;o=!0}e.setData({infos23:r,clicked2:a,noMore2:o,orderYHprice23:t})}else wx.showToast({title:"无更多信息",icon:"loading",duration:1e3})},getReason:function(r){console.log(r.detail.value+"===e.detail.value====>"),e.setData({refundresult:r.detail.value})},submitPayBack:function(){console.log(e.data.refundresult+"=====that.data.refundresult====>"),""!=e.data.refundresult?(e.setData({disp1:!1,heightFl:"display",heightFlg:"block",overflowFlg:"auto"}),wx.request({url:a+"skmembermodel/insterRefunInfoWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{orderid:e.data.orderId,refundmoney:e.data.payBackMoney,refundperson:e.data.userId,refundresult:e.data.refundresult,orderType:e.data.orderType,storeId:e.data.storeId,refundType:e.data.orderPayType},success:function(r){e.setData({carname:"申请已提交",displayy:"block"}),e.onLoad()}})):e.setData({displayy_0:"block",carname_0:"请输入退款原因",titlename_0:"提示信息"})},chkOrder0:function(){e.setData({displayy:"none"})},submitApply:function(){""!=e.data.cancelReason?e.setData({disp4:!1,heightFl:"display",heightFlg:"block",overflowFlg:"auto"}):e.setData({displayy_0:"block",carname_0:"请输入取消配送的原因",titlename_0:"提示信息"})},getCancelReason:function(r){e.setData({cancelReason:r.detail.value})},resume:function(){e.setData({disp1:!1,disp2:!1,disp3:!1,disp4:!1,heightFl:"display",heightFlg:"block",overFlowFlg:"auto",refundresult:""})},contact:function(){console.log("==========绑定打电话功能=========="),wx.getStorage({key:"storeInfo",success:function(r){console.log("========联系电话========="),console.log(r.data.storeInfoTelephoneNum),null!=r.data.storeInfoTelephoneNum&&""!=r.data.storeInfoTelephoneNum&&void 0!=r.data.storeInfoTelephoneNum&&"undefined"!=r.data.storeInfoTelephoneNum&&"null"!=r.data.storeInfoTelephoneNum||e.setData({displayy_0:"block",carname_0:"无联系电话",titlename_0:"提示信息"}),wx.makePhoneCall({phoneNumber:r.data.storeInfoTelephoneNum})}})},chkOrder0_1:function(){var r=e.data.orderId,t=e.data.currentTab;0==t?(e.setData({orderType:"Y",orderId:r}),wx.setStorage({key:"orderType",data:"Y"}),wx.setStorage({key:"orderId",data:r})):1==t?(e.setData({orderType:"D",orderId:r}),wx.setStorage({key:"orderType",data:"D"}),wx.setStorage({key:"orderId",data:r})):(e.setData({orderType:"W",orderId:r}),wx.setStorage({key:"orderType",data:"W"}),wx.setStorage({key:"orderId",data:r}),wx.setStorage({key:"wmFlg",data:!0}),wx.setStorage({key:"dcFlg",data:!1}),wx.setStorage({key:"ydFlg",data:!1})),wx.request({url:a+"skmembermodel/cancelRefunInfoWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{orderid:e.data.orderId,orderType:e.data.orderType},success:function(r){"000001"!=r.data.message?e.onLoad():e.setData({displayy_0:"block",carname_0:"不可取消退款",titlename_0:"退款正在途中"})}})},chkOrder1_1:function(){},resumePayBack:function(r){e.setData({displayy_1:"block",carname_1:"即将取消退款",titlename_1:"提示信息",orderId:r.currentTarget.dataset.id,currentTab:r.currentTarget.dataset.currentTab})},getPayBackInfo:function(r){var t=r.currentTarget.dataset.id;wx.getStorage({key:"storeId",success:function(r){wx.request({url:a+"skmembermodel/selRefundInfo",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{orderid:t,storeId:r.data},success:function(r){console.log("退款原因-----res.data",r.data);var a=r.data.data[0];e.setData({disp3:!0,orderNum:a.orderNum,payBackMoney:a.refundmoney,refundresult:a.refundresult}),console.log("=======查看退款订单========"),console.log(r.data)}})}})},bohuiReason:function(r){var t=r.currentTarget.dataset.id;e.setData({disp2:!0}),wx.getStorage({key:"storeId",success:function(r){wx.request({url:a+"skmembermodel/selRefundInfo",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{orderid:t,storeId:r.data},success:function(r){var a=r.data.data[0];console.log("=======查看驳回原因========"),console.log(r.data.data[0]),e.setData({disp2:!0,orderNum:a.orderNum,payBackMoney:a.refundmoney,bohuiReason:a.rejectreson})}})}})}}); 
 			}); 	require("pages/index/order/order.js");
 		__wxRoute = 'pages/user/forceCard/receiveForceCard/receiveForceCard';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/forceCard/receiveForceCard/receiveForceCard.js';	define("pages/user/forceCard/receiveForceCard/receiveForceCard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,a=require("../../../../utils/wx_x_config.js"),t=require("../../../../utils/util.js"),o=require("../../../../utils/util.js"),d=require("../../../../module/getPhone"),r=getApp(),n=r.globalData.httpUrl,s=r.globalData.appId;Page({data:{chengedColor:"#666",cardName:"权益卡",cardStatus:"未开通",httpUrl:n,noteTitle:"使用须知",forceTitle:"特权介绍",displ3:"none",clicked:!1,allowToPay:!0,displayy:"none",displayy_0:"none",displayy_1:"none",displayy_2:"none",selEquitycardByIdWX_data:[]},goToUser:function(){wx.switchTab({url:"/pages/index/index"})},onLoad:function(a){e=this,t.getShareInfos(e,n),t.setCompanyId(e,a),t.setStoreId(e),t.setStoreInfo(e),t.setStoreName(e),t.setUserId(e),"1"==a.secondIn?e.setData({secondIn:!0}):e.setData({secondIn:!1});var d=decodeURIComponent(a.scene);if("undefined"!=d&&void 0!=d&&null!=d&&"null"!=d){var r=d.split(",")[0].replace('"',"");d.split(",")[1].replace('"',"");e.setData({scene:d,saoma:!0}),wx.request({url:n+"skstoremodel/findStoreById",data:{pid:r},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){e.setData({storeInfo:a.data}),wx.setStorage({key:"storeInfo",data:a.data}),wx.setStorage({key:"storeName",data:a.data.storeInfoName}),wx.setNavigationBarTitle({title:a.data.storeInfoName});var d=a.data.storeInfoStoreId;e.setData({storeId:d}),wx.setStorageSync("storeId",d),t.getShareInfos(e,n),e.resendIndex(d),console.error("stroeid==========",d),wx.getStorage({key:"userId",success:function(a){console.error("userid=-------",a.data),wx.request({url:n+"skmembermodel/selEquitycardByWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{userId:a.data,storeId:d},success:function(a){e.setData({isEquitycard:a.data.isEquitycard});var t=new Date(a.data.validityBegin).getTime(),r=new Date(a.data.validityEnd).getTime(),s=new Date(o.formatDate(new Date)).getTime();"Y"==a.data.isEquitycard?"1"==a.data.state?wx.getStorage({key:"companyId",success:function(a){wx.request({url:n+"skmembermodel/selEquityCardWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{companyId:a.data,storeId:d},success:function(a){console.log("res.data.vipcardTypeBeanList-----",a.data.vipcardTypeBeanList),e.setData({cardInfos:a.data,note:a.data.title,forceCardId:a.data.id,forceCards:a.data.vipcardTypeBeanList,cardName:a.data.title}),wx.setStorage({key:"forceCardId",data:a.data.id})}})}}):""!=a.data.validityBegin&&""!=a.data.validityEnd?s>=t&&s<=r?wx.redirectTo({url:"/pages/user/forceCard/alterForceCard/alterForceCard?saoma=0"}):s<t?e.setData({display_alone1:"block",titlename_0:"提示信息",carname_0:"未到使用时间\n还不能使用权益卡",cancel:"好\t的"}):s>r&&e.setData({displayy_4:"block",titlename_4:"提示信息",carname_4:"权益卡已过期"}):wx.redirectTo({url:"/pages/user/forceCard/alterForceCard/alterForceCard?saoma=0"}):wx.getStorage({key:"companyId",success:function(a){wx.request({url:n+"skmembermodel/selEquityCardWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{companyId:a.data,storeId:d},success:function(a){console.log("res.data.vipcardTypeBeanList-----",a.data.vipcardTypeBeanList),e.setData({cardInfos:a.data,note:a.data.title,forceCardId:a.data.id,forceCards:a.data.vipcardTypeBeanList,cardName:a.data.title}),wx.setStorage({key:"forceCardId",data:a.data.id})}})}})}})}})}})}else wx.getStorage({key:"companyId",success:function(a){wx.getStorage({key:"storeId",success:function(t){wx.request({url:n+"skmembermodel/selEquityCardWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{companyId:a.data,storeId:t.data},success:function(a){console.log("res.data.vipcardTypeBeanList-----",a.data.vipcardTypeBeanList),e.setData({cardInfos:a.data,note:a.data.title,forceCardId:a.data.id,forceCards:a.data.vipcardTypeBeanList,cardName:a.data.title}),wx.setStorage({key:"forceCardId",data:a.data.id})}})}})}})},resendIndex:function(a){e.setData({dcFlg:!0,orderType:"D"}),wx.request({url:n+"skstoremodel/findCompanyByAppid",data:{xcxAppid:r.globalData.appId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.setStorage({key:"companyInfo",data:e.data}),wx.setStorage({key:"companyId",data:e.data.companyInfoId})}}),e.data.secondIn?wx.getStorage({key:"userId",success:function(e){e.data}}):wx.getStorage({key:"code",success:function(t){if(""!=t.data&&null!=t.data&&void 0!=t.data&&"undefined"!=t.data&&"null"!=t.data){e.setData({code:t.data});var o=t.data;wx.getSetting({success:function(t){if(t.authSetting["scope.userInfo"])console.log("============已授权==============="),wx.getUserInfo({success:function(t){e.setData({userInfo:t.userInfo}),wx.setStorage({key:"userName",data:t.userInfo.nickName}),wx.request({url:n+"skmembermodel/getOpenidS",data:{code:o,AppID:r.globalData.appId,Secret:r.globalData.Secret,storeUuid:a,wxUserNickName:t.userInfo.nickName,headImgUrl:e.data.userInfo.avatarUrl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data.wechatUser.wechatUserId;if(null!=e.data.openid&&""!=e.data.openid){var o=e.data.wechatUser.wechatUserStoreIdentity;wx.setStorage({key:"StoreIdentity",data:o}),wx.setStorage({key:"session_key",data:e.data.session_key}),wx.setStorage({key:"openId",data:e.data.openid}),wx.setStorage({key:"userId",data:t}),wx.setStorage({key:"storeId",data:a})}else wx.showToast({title:"登录失败"})}})},fali:function(e){}});else{console.log("==============未授权=================");var d="";d=e.data.storeInfo.storeInfoHeadImgUrl,wx.reLaunch({url:"../../../welcome/accredit/accredit?data="+o+"&store_uuid="+a+"&imgurl="+d+"&goQuanyi=true&scene="+e.data.scene,success:function(e){},fail:function(e){}})}},fail:function(e){}})}else wx.getStorage({key:"userId",success:function(t){if(t.data)t.data;else e.resendIndex(a)},fail:function(){e.resendIndex(a)}})},fail:function(t){e.resendIndex(a)}})},directLoad:function(e,a){wx.getStorage({key:"connectedSocket",success:function(e){e.data?console.log("============已有socket不连接============="):t.conSocket(a,n)}}),wx.getStorage({key:"companyId",success:function(t){wx.request({url:n+"skmembermodel/updatVipCardStore",data:{wechatUserId:a,wechatUserStoreStoreInfoStoreId:e,companyId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){wx.request({url:n+"skmembermodel/updatEquitycardStore",data:{wxUserId:a,storeId:e,companyId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log(e.data)}})}})}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(a){console.log("===========接收到服务器信息=============="),console.log(a.data),t.getTkInfos(e,a),t.playMusic(e,a)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){t.conSocket(e.data,n)}})})},onHide:function(){},onUnload:function(){t.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},radioChange:function(a){var t=e.data.forceCards,o=a.currentTarget.dataset.index,d=t[o].money,r=t[o].id,n=t[o].effectiveStartDate,s=t[o].effectiveEndDate,c=t[o].vipCardName;wx.setStorage({key:"forceCardName",data:c}),wx.setStorage({key:"activateTime",data:n}),wx.setStorage({key:"overTime",data:s}),wx.setStorage({key:"toPayMoney",data:d}),wx.setStorage({key:"forceCardTypeId",data:r}),e.setData({toPayMoney:d,forceCardTypeId:r,clicked:!0})},getPhone:function(a){e.data.isVip;"getPhoneNumber:fail user deny"==a.detail.errMsg||"getPhoneNumber:fail:cancel to confirm login"==a.detail.errMsg||wx.getStorage({key:"session_key",success:function(t){e.setData({session_key:t.data}),d.getPhoneNum(a.detail.encryptedData,a.detail.iv,r.globalData.appId,e.data.session_key).then(function(t){e.receiveMyCard(a)})}})},receiveMyCard:function(a){e.radioChange(a),e.data.clicked?wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(t){wx.request({url:n+"skmembermodel/findWechatUserById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{wechatUserId:a.data,wechatUserStoreStoreInfoStoreId:t.data},success:function(a){"v"==a.data.wechatUserStoreIdentity?e.setData({displ3:"block"}):wx.redirectTo({url:"../forceCard"})}})}})}}):e.setData({displayy:"block",titlename:"提示",carname:"请先选择权益卡"})},back:function(){e.setData({displ3:"none"})},toPay:function(t){var o=t.detail.formId;e.setData({formId:o}),console.log(o),e.setData({displ3:"none"}),setTimeout(function(){var o=e.data.storeId,d=e.data.userId,r=t.currentTarget.dataset.orderPayType;e.setData({orderPayType:r}),"B"==r?e.setData({jiekouming:"receiveEquitycard"}):e.setData({jiekouming:"newReceiveEquitycard"});var c=e.data.toPayMoney;if("W"==r){var i=a.getWxPayOrdrID();e.setData({companyOrderNumber:i}),wx.request({url:n+"skmembermodel/wxPay",data:{wx_user_uuid:d,order_a_num:i,order_a_money:c,appid:s,storeId:o},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){console.log("支付调用 == >"),console.log(a.data),e.doWxPay(a.data,d,o,c)}})}else if("B"==r){e.setData({sofFlg:"s"});wx.getStorage({key:"storeName",success:function(a){wx.getStorage({key:"forceCardTypeId",success:function(t){wx.request({url:n+"skmembermodel/selEquitycardByIdWX",data:{id:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({displayy_2:"block",titlename_2:"即将支付"+c+"元给"+a.data,carname_2:"确认支付吗",selEquitycardByIdWX_data:t,money0:c})}})}})}})}},100)},chkOrder1_2:function(){e.setData({sofFlg:""})},chkOrder2:function(a){var t=this.data.selEquitycardByIdWX_data;1*t.data.vipCardSum-1*t.data.vipCardUsedSum<1?e.setData({displayy:"block",titlename:"该卡已售罄",carname:"请选择其它权益卡购买"}):wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(t){wx.request({url:n+"skmembermodel/findWechatUserById",data:{wechatUserId:a.data,wechatUserStoreStoreInfoStoreId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var t=a.data.wechatUserStoreBalance;if(e.setData({wechatUserStoreBalance:a.data.wechatUserStoreBalance}),1*t<1*e.data.money0)return wx.showToast({title:"余额不足",icon:"loading",duration:1e3}),void e.setData({sofFlg:""});e.receiveEquitycard(e.data.sofFlg)}})}})}})},doWxPay:function(a,t,o,d){e.data.allowToPay&&(e.setData({allowToPay:!1}),wx.getStorage({key:"forceCardTypeId",success:function(t){wx.request({url:n+"skmembermodel/selEquitycardByIdWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:t.data},success:function(t){console.log("==========该卡已售罄=========",t),1*t.data.vipCardSum-1*t.data.vipCardUsedSum<1?e.setData({displayy:"block",titlename:"该卡已售罄",carname:"请选择其它权益卡购买"}):(e.receiveEquitycard("f"),wx.requestPayment({timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:"MD5",paySign:a.paySign,success:function(a){e.setData({sofFlg:"s"});console.log("===========开始存入==========="),wx.setStorage({key:"isEquitycardn",data:"Y"}),console.log("===========开始后跳==========="),wx.redirectTo({url:"../alterForceCard/alterForceCard"})},fail:function(a){console.log("支付失败"),console.log(a),e.setData({sofFlg:"f"})}}))}})}}))},receiveEquitycard:function(a){wx.getStorage({key:"userId",success:function(t){wx.request({url:n+"skmembermodel/"+e.data.jiekouming,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{equityCardTypeId:e.data.forceCardTypeId,equityCardId:e.data.forceCardId,wxUserId:t.data,payType:e.data.orderPayType,money:e.data.toPayMoney,storeId:e.data.storeId,formId:e.data.formId,sofFlg:a,outTradeNo:e.data.companyOrderNumber},success:function(a){e.setData({allowToPay:!0}),"B"!=e.data.orderPayType||1==a.data?1==a.data&&"s"==e.data.sofFlg&&(wx.setStorage({key:"isEquitycardn",data:"Y"}),e.setData({displayy_0:"block",titlename_0:"支付成功",carname_0:"您已购买"+e.data.cardName})):e.setData({displayy:"block",titlename:"余额支付失败",carname:"请联系后台管理员"})}})},fail:function(a){console.log("支付失败"),console.log(a),e.setData({displayy_1:"block",titlename_1:"提示信息",carname_1:"支付失败"})}})},chkOrder0:function(e){wx.navigateTo({url:"../alterForceCard/alterForceCard?jifenState=1"})},chkOrder1:function(e){wx.switchTab({url:"../../index/index"})}}); 
 			}); 	require("pages/user/forceCard/receiveForceCard/receiveForceCard.js");
 		__wxRoute = 'pages/user/cardDetail/cardDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/cardDetail/cardDetail.js';	define("pages/user/cardDetail/cardDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=getApp().globalData.httpUrl;Page({data:{code:"",id:"",couponType:"",couponName:"",favourDetail:"",useNotice:"",validityType:"",validityBegin:"",validityEnd:"",dcdj:!0,displayy:"none"},onLoad:function(t){e=this,wx.getStorage({key:"codee",success:function(t){var a=t.data;e.setData({code:a})}}),wx.removeStorage({key:"codee",success:function(e){}}),wx.getStorage({key:"id",success:function(t){var a=t.data;e.setData({id:a}),""!=a&&e.details()}})},details:function(){var a=e.data.id;wx.request({url:t+"skcouponmodel/selCouponInfoOnlyWX",data:{id:a},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=t.data.couponType,o=t.data.couponName,n=t.data.favourDetail,c=t.data.useNotice,d=t.data.validityType,s=t.data.validityBegin,i=t.data.validityEnd;e.setData({couponType:a,couponName:o,favourDetail:n,useNotice:c,validityType:d,validityBegin:s,validityEnd:i})}})},lqyh:function(){e=this,wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(o){console.log("zhezala+++++++",a,o),wx.request({url:t+"skmembermodel/findWechatUserById",data:{wechatUserId:a.data,wechatUserStoreStoreInfoStoreId:o.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){"v"==a.data.wechatUserStoreIdentity?e.data.dcdj&&(e.setData({dcdj:!1}),wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"putId",success:function(o){wx.getStorage({key:"cardId",success:function(n){wx.getStorage({key:"storeId",success:function(c){wx.getStorage({key:"formId",success:function(d){wx.request({url:t+"skcouponmodel/voucher",data:{userId:a.data,putId:o.data,cardId:n.data,storeId:c.data,formId:d},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({displayy:"block",titlename:"恭喜",carname:"已领取一张优惠券"})}})}})}})}})}})}})):e.setData({displayy:"block",carname:"请先领卡",carbtn:"1"})}})}})}})},chkOrder0_1:function(){wx.navigateBack({})},chkOrder1_1:function(){wx.navigateBack({})},resumee:function(){e.setData({displayy:"none"})},chkOrder0:function(){wx.getStorage({key:"vipCard",success:function(t){console.log(t,"++++++++++这是啥"),1==t.data.isExistence?(wx.redirectTo({url:"../myCard/myCard"}),e.setData({displayy:"none"})):e.setData({displayy:"block",carname:"暂无会员卡可领",carbtn:"2"})}})},chkOrderr:function(){e.setData({displayy:"none"})},fh:function(){wx.navigateBack({})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/user/cardDetail/cardDetail.js");
 		__wxRoute = 'pages/user/myCard/myCard';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/myCard/myCard.js';	define("pages/user/myCard/myCard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,a=require("../../../utils/util.js"),t=(require("../../../module/getPhone"),getApp()),o=t.globalData.httpUrl;t.globalData.testhttpUrl;Page({data:{displayy_0:"none",cartArr:[{name:"man",value:"男",checked:"true"},{name:"woman",value:"女"}],age:0,date:"请选择您的生日",time:"",sex:"男",userName:"",tele:"",cardName:"",cardNumber:"",cardId:"",httpUrl:o,hasClickedButton:!1,phone:""},bindDateChange:function(t){console.log("picker发送选择改变，携带值为",t.detail.value);var o=Date.parse(a.formatTime(new Date));e.setData({date:t.detail.value,time:o});var r=Date.parse(t.detail.value);e.setData({age:Math.floor((o-r)/31104e6)})},getUserPhone:function(a){"getPhoneNumber:fail user deny"==a.detail.errMsg||"getPhoneNumber:fail:cancel to confirm login"==a.detail.errMsg||wx.getStorage({key:"session_key",success:function(r){console.log(r.data+"_key"),wx.request({url:o+"skmembermodel/decrypt",data:{encryptedData:a.detail.encryptedData,iv:a.detail.iv,appId:t.globalData.appId,sessionKey:r.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){e.setData({phone:a.data+""})},fail:function(e){console.log("Error decrypt",e)}})},fail:function(e){console.log("=====getStorage session_key err====="),console.log(e)}})},radioChange:function(a){console.log("radio发生change事件，携带value值为：",a.detail.value),console.log("e.detail.value：",a.detail.value),e.setData({sex:a.detail.value})},bindKeyInputName:function(a){e.setData({userName:a.detail.value}),console.log(e.data.userName)},goDetail:function(a){a.detail.userInfo&&(e.setData({shouquan:!1}),e.onLoad())},onLoad:function(t){console.log("====onLoad====",t);var r=wx.getStorageSync("phone");this.setData({phone:r}),e=this,a.getShareInfos(e,o),a.setStoreInfo(e),a.setStoreName(e),"0"==t.toGotoChuZhi&&e.setData({toGotoChuZhi:!0,saoma:t.saoma}),"0"==t.toGotoActive?e.setData({toGotoActive:!0,toGoTuanGou:!1,saoma:t.saoma}):"0"==t.toGoTuanGou?e.setData({toGoTuanGou:!0,toGotoActive:!1}):e.setData({toGotoActive:!1,toGoTuanGou:!1}),"1"==t.secondIn?e.setData({secondIn:!0}):e.setData({secondIn:!1});var s=decodeURIComponent(t.scene);if("undefined"!=s&&void 0!=s&&null!=s&&"null"!=s){console.log("呵呵呵俄俄呵呵恶化");var n=s.split(",")[0].replace('"',"");s.split(",")[1].replace('"',"");e.setData({scene:s,saoma:!0}),wx.request({url:o+"skstoremodel/findStoreById",data:{pid:n},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({storeInfo:t.data}),wx.setStorage({key:"storeInfo",data:t.data}),wx.setStorage({key:"storeName",data:t.data.storeInfoName}),wx.setNavigationBarTitle({title:t.data.storeInfoName});var r=t.data.storeInfoStoreId;e.setData({storeId:r}),wx.setStorageSync("storeId",r),a.getShareInfos(e,o),e.resendIndex(r)}})}wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(t){wx.request({url:o+"skmembermodel/findWechatUserById",data:{wechatUserId:a.data,wechatUserStoreStoreInfoStoreId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){"v"==a.data.wechatUserStoreIdentity?wx.redirectTo({url:"receiveMyCard/receiveMyCard"}):wx.request({url:o+"skcouponmodel/selCouponByReceive",data:{userId:a.data,applyStoreId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){console.log(a.data),e.setData({couponCnt:a.data.length})}})}})}})}}),wx.getStorage({key:"companyId",success:function(a){e.setData({companyId:a.data}),wx.getStorage({key:"storeId",success:function(t){e.setData({storeId:t.data}),wx.request({url:o+"skmembermodel/findVipCardBy",data:{companyId:a.data,storeId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){e.setData({cardInfos:a.data,cardId:a.data.id});var t=a.data.id;wx.setStorage({key:"cardId",data:t});var o=a.data.color;e.chengeColor(o)}})}})}});var d=a.formatDate(new Date),c="1950-"+a.formatDate(new Date).split("-")[1]+"-"+a.formatDate(new Date).split("-")[2];e.setData({zuijiao:d,startTime:c}),wx.getStorage({key:"cardId",success:function(a){e.setData({cardId:a.data})}}),wx.getStorage({key:"vipCard",success:function(a){console.log("++zheza",a),e.setData({cardId:a.data.cardId})}}),e.initMemberInfo()},resendIndex:function(a){e.setData({dcFlg:!0,orderType:"D"}),wx.request({url:o+"skstoremodel/findCompanyByAppid",data:{xcxAppid:t.globalData.appId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.setStorage({key:"companyInfo",data:e.data}),wx.setStorage({key:"companyId",data:e.data.companyInfoId})}}),e.data.secondIn?wx.getStorage({key:"userId",success:function(e){e.data}}):wx.getStorage({key:"code",success:function(r){if(""!=r.data&&null!=r.data&&void 0!=r.data&&"undefined"!=r.data&&"null"!=r.data){e.setData({code:r.data});var s=r.data;wx.getSetting({success:function(r){if(r.authSetting["scope.userInfo"])console.log("============已授权==============="),wx.getUserInfo({success:function(r){e.setData({userInfo:r.userInfo}),wx.setStorage({key:"userName",data:r.userInfo.nickName}),wx.request({url:o+"skmembermodel/getOpenidS",data:{code:s,AppID:t.globalData.appId,Secret:t.globalData.Secret,storeUuid:a,wxUserNickName:r.userInfo.nickName,headImgUrl:e.data.userInfo.avatarUrl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data.wechatUser.wechatUserId;if(null!=e.data.openid&&""!=e.data.openid){var o=e.data.wechatUser.wechatUserStoreIdentity;wx.setStorage({key:"StoreIdentity",data:o}),wx.setStorage({key:"session_key",data:e.data.session_key}),wx.setStorage({key:"openId",data:e.data.openid}),wx.setStorage({key:"userId",data:t}),wx.setStorage({key:"storeId",data:a})}else wx.showToast({title:"登录失败"})}})},fali:function(e){}});else{console.log("==============未授权=================");var n="";n=e.data.storeInfo.storeInfoHeadImgUrl,wx.reLaunch({url:"../../welcome/accredit/accredit?data="+s+"&store_uuid="+a+"&imgurl="+n+"&goHuiyuan=true&scene="+e.data.scene,success:function(e){},fail:function(e){}})}},fail:function(e){}})}else wx.getStorage({key:"userId",success:function(t){if(t.data)t.data;else e.resendIndex(a)},fail:function(){e.resendIndex(a)}})},fail:function(t){e.resendIndex(a)}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(t){console.log("===========接收到服务器信息=============="),console.log(t.data),a.getTkInfos(e,t),a.playMusic(e,t)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){a.conSocket(e.data,o)}})})},onHide:function(){},onUnload:function(){a.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},receiveMyCard:function(a){console.log("========开始提交会员信息==========="),console.log("======ee==");var t=a.detail.formId;console.log(t,"=======提交的手机号======",e.data.phone);var r=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,s=/[0-9]/,n=e.data.phone,d=e.data.date,c=e.data.sex,i=e.data.userName,l=e.data.age;if(!e.data.hasClickedButton){if(null==n||""==n)return e.setData({popErrorMsg:"联系电话不能为空"}),void e.ohShitfadeOut();if(!r.test(n))return e.setData({popErrorMsg:"电话号码错误"}),void e.ohShitfadeOut();if(""==i||null==i)return e.setData({popErrorMsg:"用户名不能为空"}),void e.ohShitfadeOut();if(s.test(i))return e.setData({popErrorMsg:"用户名不能为数字"}),void e.ohShitfadeOut();if(""==c||null==c)return e.setData({popErrorMsg:"请选择性别"}),void e.ohShitfadeOut();if("请选择您的生日"==d)return e.setData({popErrorMsg:"请选择出生日期"}),void e.ohShitfadeOut();if(l<0)return e.setData({popErrorMsg:"请选择正确出生日期"}),void e.ohShitfadeOut();e.setData({hasClickedButton:!0}),console.log("=======开始获取缓存========"),wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(r){console.log("=======获取缓存完成========"),wx.request({url:o+"skmembermodel/updateWechatUserBecomeMember",data:{wechatUserId:a.data,wechatUserName:e.data.userName,wechatUserAge:e.data.age,wechatUserPhoneNum:e.data.phone,wechatUserBirthday:e.data.date,wechatUserSex:e.data.sex,vipCardId:e.data.cardId,wechatUserStoreStoreInfoStoreId:r.data,formId:t},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){console.log("========领取成功======="),console.log(a),1==a.data?wx.showToast({title:"领取成功",duration:2e3,icon:"success",success:function(){e.setData({hasClickedButton:!1}),e.data.toGotoActive?(console.log("======判断扫码======",e.data.saoma),e.data.saoma?wx.redirectTo({url:"../../active/active?saoma=0&secondIn=1"}):wx.redirectTo({url:"../../active/active?secondIn=1"})):e.data.toGotoChuZhi?e.data.saoma&&wx.redirectTo({url:"/pages/user/myCash/myCash?saoma=0&secondIn=1"}):e.data.toGoTuanGou?(wx.navigateToMiniProgram({appId:"wxe89bfe0adae77728"}),wx.redirectTo({url:"../myCard/receiveMyCard/receiveMyCard?hasReceived=1"})):wx.redirectTo({url:"../myCard/receiveMyCard/receiveMyCard?hasReceived=1"})}}):e.setData({displayy_0:"block",carname_0:"领取失败,请刷新网络再试试哦 ！",titlename_0:"提示信息"})}})}})}}),console.log("========开始提交会员信息结束===========")}},chkOrder_0:function(){e.onLoad()},chkOrde_0:function(){},ohShitfadeOut:function(){var a=setTimeout(function(){e.setData({popErrorMsg:""}),clearTimeout(a)},3e3)},chengeColor:function(a){"Color010"==a&&e.setData({chengedColor:"#63b359"}),"Color020"==a&&e.setData({chengedColor:"#2c9f67"}),"Color030"==a&&e.setData({chengedColor:"#509fc9"}),"Color040"==a&&e.setData({chengedColor:"#5885cf"}),"Color050"==a&&e.setData({chengedColor:"#9062c0"}),"Color060"==a&&e.setData({chengedColor:"#d09a45"}),"Color070"==a&&e.setData({chengedColor:"#e4b138"}),"Color080"==a&&e.setData({chengedColor:"#ee903c"}),"Color081"==a&&e.setData({chengedColor:"#f08500"}),"Color082"==a&&e.setData({chengedColor:"#a9d92d"}),"Color090"==a&&e.setData({chengedColor:"#dd6549"}),"Color100"==a&&e.setData({chengedColor:"#cc463d"}),"Color101"==a&&e.setData({chengedColor:"#cf3e36"}),"Color102"==a&&e.setData({chengedColor:"#5E6671"})},initMemberInfo:function(){wx.getStorage({key:"userId",success:function(t){wx.getStorage({key:"storeId",success:function(r){wx.request({url:o+"skmembermodel/selEquitycardByWX",data:{userId:t.data,storeId:r.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){if(t.data.isExistence)wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(t){wx.request({url:o+"skmembermodel/findWechatUserById",data:{wechatUserId:a.data,wechatUserStoreStoreInfoStoreId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var t=e.data.cartArr;e.setData({cartArr:t,age:a.data.wechatUserAge,date:a.data.wechatUserBirthday,tele:a.data.wechatUserPhoneNum,userName:a.data.wechatUserName,sex:a.data.wechatUserSex})}})}})}});else{var r=e.data.cartArr,s=Date.parse(a.formatTime(new Date));e.setData({date:"1990-01-01",time:s});var n=Date.parse(e.data.date);e.setData({cartArr:r,age:Math.floor((s-n)/31104e6),date:"1990-01-01",tele:"",userName:"",sex:"男"})}}})}})}})},goToUser:function(){wx.switchTab({url:"../user"})}}); 
 			}); 	require("pages/user/myCard/myCard.js");
 		__wxRoute = 'pages/user/alterMyCard/alterMyCard';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/alterMyCard/alterMyCard.js';	define("pages/user/alterMyCard/alterMyCard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,a=require("../../../utils/util.js"),t=getApp().globalData.httpUrl;Page({data:{chengedColor:"#666",items:[{name:"man",value:"男",checked:"true"},{name:"woman",value:"女"}],cardName:"",httpUrl:t,cardNumber:"",date:"",time:"",userName:"",tele:"",age:0,displayy:"none"},bindDateChange:function(t){console.log("picker发送选择改变，携带值为",t.detail.value);var o=Date.parse(a.formatTime(new Date));this.setData({date:t.detail.value,time:o});var s=Date.parse(t.detail.value);e.setData({age:Math.floor((o-s)/31104e6)})},bindKeyInput:function(a){e.setData({userName:a.detail.value}),console.log(e.data.userName)},bindKeyInput1:function(a){e.setData({tele:a.detail.value}),console.log(e.data.tele)},waitReceipt:function(a){console.log("===waitReceipt start===");var o=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,s=/[0-9_-]/,r=e.data.tele,n=e.data.date,c=e.data.sex,d=e.data.userName,l=e.data.age;return null==r||""==r?(e.setData({popErrorMsg:"联系电话不能为空"}),void e.ohShitfadeOut()):o.test(r)?""==d||null==d?(e.setData({popErrorMsg:"用户名不能为空"}),void e.ohShitfadeOut()):s.test(d)?(e.setData({popErrorMsg:"用户名不能为数字下划线等字符"}),void e.ohShitfadeOut()):""==c||null==c?(e.setData({popErrorMsg:"请选择性别"}),void e.ohShitfadeOut()):"请选择您的生日"==n?(e.setData({popErrorMsg:"请选择出生日期"}),void e.ohShitfadeOut()):l<0?(e.setData({popErrorMsg:"请选择正确出生日期"}),void e.ohShitfadeOut()):void wx.getStorage({key:"userId",success:function(a){wx.request({url:t+"skmembermodel/updateWechatUser",data:{wechatUserId:a.data,wechatUserName:e.data.userName,wechatUserAge:e.data.age,wechatUserPhoneNum:e.data.tele,wechatUserBirthday:e.data.date,wechatUserSex:e.data.sex},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){e.setData({displayy:"block",titlename:"提示",carname:"修改成功"})}})},fail:function(e){wx.showToast({title:"获取信息失败"})}}):(e.setData({popErrorMsg:"电话号码错误"}),void e.ohShitfadeOut())},chkOrder:function(e){wx.switchTab({url:"../../user/user"})},ohShitfadeOut:function(){var a=setTimeout(function(){e.setData({popErrorMsg:""}),clearTimeout(a)},3e3)},radioChange:function(a){console.log("radio发生change事件，携带value值为：",a.detail.value),console.log("e.detail.value：",a.detail.value),e.setData({sex:a.detail.value})},onLoad:function(o){e=this,a.getShareInfos(e,t),a.setCompanyId(e,o),a.setStoreId(e),a.setStoreInfo(e);var s=a.formatDate(new Date);e.setData({zuijiao:s}),wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(o){wx.request({url:t+"skmembermodel/findWechatUserById",data:{wechatUserId:a.data,wechatUserStoreStoreInfoStoreId:o.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var t=e.data.items;console.log(a.data.wechatUserSex);for(var o in t)console.log(t[o].value),console.log(a.data.wechatUserSex),t[o].value==a.data.wechatUserSex?t[o].checked=!0:t[o].checked=!1;console.log(t),e.setData({cardInfo:a.data,items:t,age:a.data.wechatUserAge,date:a.data.wechatUserBirthday,tele:a.data.wechatUserPhoneNum,userName:a.data.wechatUserName,sex:a.data.wechatUserSex}),e.data.isVip?e.setData({vipColor:"#ffbf20"}):e.setData({vipColor:"#ccc"})}})}})}}),wx.getStorage({key:"companyId",success:function(a){a.data;wx.getStorage({key:"userId",success:function(a){var o=a.data;wx.getStorage({key:"cardId",success:function(a){wx.getStorage({key:"storeId",success:function(s){wx.request({url:t+"skmembermodel/findVipCardById",data:{cardId:a.data,userId:o,storeId:s.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var t=a.data.color;e.chengeColor(t),e.setData({cardInfos:a.data})}})}})}})}})}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(t){console.log("===========接收到服务器信息=============="),console.log(t.data),a.getTkInfos(e,t),a.playMusic(e,t)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){a.conSocket(e.data,t)}})})},onHide:function(){},onUnload:function(){a.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},chengeColor:function(a){"Color010"==a&&e.setData({chengedColor:"#63b359"}),"Color020"==a&&e.setData({chengedColor:"#2c9f67"}),"Color030"==a&&e.setData({chengedColor:"#509fc9"}),"Color040"==a&&e.setData({chengedColor:"#5885cf"}),"Color050"==a&&e.setData({chengedColor:"#9062c0"}),"Color060"==a&&e.setData({chengedColor:"#d09a45"}),"Color070"==a&&e.setData({chengedColor:"#e4b138"}),"Color080"==a&&e.setData({chengedColor:"#ee903c"}),"Color081"==a&&e.setData({chengedColor:"#f08500"}),"Color082"==a&&e.setData({chengedColor:"#a9d92d"}),"Color090"==a&&e.setData({chengedColor:"#dd6549"}),"Color100"==a&&e.setData({chengedColor:"#cc463d"}),"Color101"==a&&e.setData({chengedColor:"#cf3e36"}),"Color102"==a&&e.setData({chengedColor:"#5E6671"})}}); 
 			}); 	require("pages/user/alterMyCard/alterMyCard.js");
 		__wxRoute = 'pages/user/myCard/receiveMyCard/receiveMyCard';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/myCard/receiveMyCard/receiveMyCard.js';	define("pages/user/myCard/receiveMyCard/receiveMyCard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,o=require("../../../../utils/util.js"),t=getApp().globalData.httpUrl;Page({data:{chengedColor:"#666",cardName:"",cardNumber:"",httpUrl:t},onLoad:function(a){e=this,o.getShareInfos(e,t),o.setCompanyId(e,a),o.setStoreId(e),o.setStoreInfo(e),"1"==a.hasReceived?e.setData({hasReceived:"1"}):e.setData({hasReceived:"0"}),wx.getStorage({key:"companyId",success:function(o){o.data;console.error("comid--",o.data),wx.getStorage({key:"userId",success:function(o){var a=o.data;console.error("userId--",o.data),wx.getStorage({key:"cardId",success:function(o){console.error("cardId--",o.data),wx.getStorage({key:"storeId",success:function(c){console.error("storeId--",o.data),wx.request({url:t+"skmembermodel/findVipCardById",data:{cardId:o.data,userId:a,storeId:c.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){console.log("===========会员卡==========",o),e.setData({cardInfos:o.data,title:o.data.title,wechatUserStoreCardNum:o.data.cardNum,prerogative:o.data.vipcardPrerogativeBeanList,cardName:o.data.title});var t=o.data.color;e.chengeColor(t)}})}})}})}})}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(t){console.log("===========接收到服务器信息=============="),console.log(t.data),o.getTkInfos(e,t),o.playMusic(e,t)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){o.conSocket(e.data,t)}})})},onHide:function(){},onUnload:function(){o.closeSock(),e.data.hasReceived},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},chengeColor:function(o){"Color010"==o&&e.setData({chengedColor:"#63b359"}),"Color020"==o&&e.setData({chengedColor:"#2c9f67"}),"Color030"==o&&e.setData({chengedColor:"#509fc9"}),"Color040"==o&&e.setData({chengedColor:"#5885cf"}),"Color050"==o&&e.setData({chengedColor:"#9062c0"}),"Color060"==o&&e.setData({chengedColor:"#d09a45"}),"Color070"==o&&e.setData({chengedColor:"#e4b138"}),"Color080"==o&&e.setData({chengedColor:"#ee903c"}),"Color081"==o&&e.setData({chengedColor:"#f08500"}),"Color082"==o&&e.setData({chengedColor:"#a9d92d"}),"Color090"==o&&e.setData({chengedColor:"#dd6549"}),"Color100"==o&&e.setData({chengedColor:"#cc463d"}),"Color101"==o&&e.setData({chengedColor:"#cf3e36"}),"Color102"==o&&e.setData({chengedColor:"#5E6671"})}}); 
 			}); 	require("pages/user/myCard/receiveMyCard/receiveMyCard.js");
 		__wxRoute = 'pages/user/forceCard/forceCard';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/forceCard/forceCard.js';	define("pages/user/forceCard/forceCard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,a=require("../../../utils/util.js"),t=require("../../../utils/wx_x_config.js"),a=require("../../../utils/util.js"),o=(require("../../../module/getPhone"),getApp()),r=o.globalData.httpUrl,d=(o.globalData.testhttpUrl,o.globalData.appId);Page({data:{displayy_0:"none",displayy_1:"none",displayy_2:"none",displayy_3:"none",valueMr:"1990-04-09",displ3:"none",cartArr:[{name:"man",value:"男"},{name:"woman",value:"女"}],age:0,date:"请选择您的生日",time:"",sex:"",userName:"",tele:"",cardName:"至尊七折卡",cardStatus:"未开通",payStyle:"支付",httpUrl:r,allowToPay:!0,phone:""},bindDateChange:function(t){console.log("picker发送选择改变，携带值为",t.detail.value);var o=Date.parse(a.formatTime(new Date));e.setData({date:t.detail.value,time:o});var r=Date.parse(t.detail.value);e.setData({age:Math.floor((o-r)/31104e6)})},radioChange:function(a){console.log("radio发生change事件，携带value值为：",a.detail.value),console.log("e.detail.value：",a.detail.value),e.setData({sex:a.detail.value})},bindKeyInputName:function(a){e.setData({userName:a.detail.value}),console.log(e.data.userName)},onLoad:function(t){e=this,a.getShareInfos(e,r),a.setCompanyId(e,t),a.setStoreId(e),a.setStoreInfo(e),a.setStoreName(e),a.setUserId(e),wx.getStorage({key:"toPayMoney",success:function(a){e.setData({toPayMoney:a.data})}}),wx.getStorage({key:"forceCardName",success:function(a){e.setData({cardName:a.data})}}),wx.getStorage({key:"activateTime",success:function(a){e.setData({activateTime:a.data})}}),wx.getStorage({key:"overTime",success:function(a){e.setData({overTime:a.data})}}),wx.getStorage({key:"forceCardTypeId",success:function(a){e.setData({forceCardTypeId:a.data})}}),wx.getStorage({key:"companyId",success:function(a){wx.getStorage({key:"storeId",success:function(t){wx.request({url:r+"skmembermodel/selEquityCardWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{companyId:a.data,storeId:t.data},success:function(a){var t=a.data.color;e.chengeColor(t),e.setData({cardInfos:a.data,forceCardId:a.data.id})}})}})}});var o=a.formatDate(new Date),d="1950-"+a.formatDate(new Date).split("-")[1]+"-"+a.formatDate(new Date).split("-")[2];e.setData({zuijiao:o,startTime:d}),console.log("cardName ==> "+e.data.cardName),console.log("cardId ==> "+e.data.cardId)},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this;var t=wx.getStorageSync("phone");console.log("======phone获取到了没========",t),e.setData({phone:t}),wx.onSocketMessage(function(t){console.log("===========接收到服务器信息=============="),console.log(t.data),a.getTkInfos(e,t),a.playMusic(e,t)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){a.conSocket(e.data,r)}})})},onHide:function(){},onUnload:function(){a.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},receiveMyCard:function(a){var t=/[0-9]/,o=(e.data.phone,e.data.date),r=e.data.sex,d=e.data.userName,s=e.data.age;return""==d||null==d?(e.setData({popErrorMsg:"用户名不能为空"}),void e.ohShitfadeOut()):t.test(d)?(e.setData({popErrorMsg:"用户名不能为数字"}),void e.ohShitfadeOut()):""==r||null==r?(e.setData({popErrorMsg:"请选择性别"}),void e.ohShitfadeOut()):"请选择您的生日"==o?(e.setData({popErrorMsg:"请选择出生日期"}),void e.ohShitfadeOut()):s<0?(e.setData({popErrorMsg:"请选择正确出生日期"}),void e.ohShitfadeOut()):void e.setData({displ3:"block"})},back:function(){e.setData({displ3:"none"})},chkOrder_0:function(){1*e.data.resj.data.vipCardSum-1*e.data.resj.data.vipCardUsedSum<1?e.setData({displayy_1:"block",carname_1:"请选择其它权益卡购买",titlename_1:"该卡已售罄"}):wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(t){wx.request({url:r+"skmembermodel/findWechatUserById",data:{wechatUserId:a.data,wechatUserStoreStoreInfoStoreId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var t=a.data.wechatUserStoreBalance;if(e.setData({wechatUserStoreBalance:a.data.wechatUserStoreBalance}),1*t<1*e.data.money)return wx.showToast({title:"余额不足",icon:"loading",duration:1e3}),void e.setData({sofFlg:""});e.receiveEquitycard(sofFlg)}})}})}})},chkOrde_0:function(){console.log("我点击了取消"),this.setData({sofFlg:""})},toPay:function(a){var o=a.detail.formId;e.setData({formId:o}),console.log(o),e.setData({displ3:"none"}),setTimeout(function(){var o=e.data.storeId,s=e.data.userId,n=a.currentTarget.dataset.orderPayType;e.setData({orderPayType:n}),"B"==n?e.setData({jiekouming:"receiveEquitycard"}):e.setData({jiekouming:"newReceiveEquitycard"});var c=e.data.toPayMoney;if("W"==n){console.log("微信支付-------");var l=t.getWxPayOrdrID();e.setData({companyOrderNumber:l}),wx.request({url:r+"skmembermodel/wxPay",data:{wx_user_uuid:s,order_a_num:l,order_a_money:c,appid:d,storeId:o},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){console.log("支付调用 == >"),console.log(a.data),e.doWxPay(a.data,s,o,c)}})}else if("B"==n){console.log("余额支付-------"),e.setData({sofFlg:"s"});wx.getStorage({key:"storeName",success:function(a){wx.getStorage({key:"forceCardTypeId",success:function(t){wx.request({url:r+"skmembermodel/selEquitycardByIdWX",data:{id:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({displayy_0:"block",carname_0:"即将支付"+c+"元给"+a.data,titlename_0:"确认支付吗",resj:t,money:c})}})}})}})}},100)},doWxPay:function(a,t,o,d){e.data.allowToPay&&(e.setData({allowToPay:!1}),wx.getStorage({key:"forceCardTypeId",success:function(t){wx.request({url:r+"skmembermodel/selEquitycardByIdWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:t.data},success:function(t){console.log("你可能进来的这个"),1*t.data.vipCardSum-1*t.data.vipCardUsedSum<1?e.setData({displayy_1:"block",carname_1:"请选择其它权益卡购买",titlename_1:"该卡已售罄"}):(e.receiveEquitycard("f"),wx.requestPayment({timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:"MD5",paySign:a.paySign,success:function(a){e.setData({sofFlg:"s"});wx.redirectTo({url:"alterForceCard/alterForceCard"})},fail:function(a){console.log("支付失败"),console.log(a),e.setData({sofFlg:"f"})}}))}})}}))},chkOrder_2:function(){wx.redirectTo({url:"alterForceCard/alterForceCard"})},chkOrde_2:function(){wx.redirectTo({url:"alterForceCard/alterForceCard"})},receiveEquitycard:function(a){wx.getStorage({key:"userId",success:function(t){wx.request({url:r+"skmembermodel/"+e.data.jiekouming,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{equityCardTypeId:e.data.forceCardTypeId,equityCardId:e.data.forceCardId,wxUserId:t.data,payType:e.data.orderPayType,money:e.data.toPayMoney,storeId:e.data.storeId,wechatUserName:e.data.userName,wechatUserAge:e.data.age,wechatUserPhoneNum:e.data.phone,wechatUserBirthday:e.data.date,wechatUserSex:e.data.sex,wechatUserStoreIdentity:"f",formId:e.data.formId,sofFlg:a,outTradeNo:e.data.companyOrderNumber},success:function(a){if(console.log("=========foreCard========",a),e.setData({allowToPay:!0}),"B"!=e.data.orderPayType||1==a.data){if(1==a.data&&"s"==e.data.sofFlg){wx.setStorage({key:"isEquitycardn",data:"Y"}),e.setData({displayy_2:"block",carname_2:"您已购买"+e.data.cardName,titlename_2:"支付成功"})}}else e.setData({displayy_1:"block",carname_1:"请联系后台管理员",titlename_1:"余额支付失败"})}})},chkOrder_3:function(){wx.switchTab({url:"../../index/index"})},fail:function(a){e.setData({displayy_3:"block",carname_3:a,titlename_3:"支付失败"})}})},ohShitfadeOut:function(){var a=setTimeout(function(){e.setData({popErrorMsg:""}),clearTimeout(a)},3e3)},chengeColor:function(a){"Color010"==a&&e.setData({chengedColor:"#63b359"}),"Color020"==a&&e.setData({chengedColor:"#2c9f67"}),"Color030"==a&&e.setData({chengedColor:"#509fc9"}),"Color040"==a&&e.setData({chengedColor:"#5885cf"}),"Color050"==a&&e.setData({chengedColor:"#9062c0"}),"Color060"==a&&e.setData({chengedColor:"#d09a45"}),"Color070"==a&&e.setData({chengedColor:"#e4b138"}),"Color080"==a&&e.setData({chengedColor:"#ee903c"}),"Color081"==a&&e.setData({chengedColor:"#f08500"}),"Color082"==a&&e.setData({chengedColor:"#a9d92d"}),"Color090"==a&&e.setData({chengedColor:"#dd6549"}),"Color100"==a&&e.setData({chengedColor:"#cc463d"}),"Color101"==a&&e.setData({chengedColor:"#cf3e36"}),"Color102"==a&&e.setData({chengedColor:"#5E6671"})}}); 
 			}); 	require("pages/user/forceCard/forceCard.js");
 		__wxRoute = 'pages/components/alertview/alertview';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/alertview/alertview.js';	define("pages/components/alertview/alertview.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=void 0;getApp().globalData.httpUrl;Component({properties:{displayy:{type:String,value:"none"},display_alone1:{type:String,value:"none"},cancel:{type:String,value:"关 闭"},titlename:{type:String,value:"标题 "},carname:{type:String,value:"内容 "}},data:{text:"text"},methods:{chkOrder1:function(){var e={},a={};(t=this).triggerEvent("chkOrder1",e,a),t.setData({displayy:"none"})},chkOrder0:function(){var e={},a={};(t=this).triggerEvent("chkOrder0",e,a),t.setData({displayy:"none"}),console.log(this.data.text)},cancel:function(){var e={},a={};(t=this).triggerEvent("cancel",e,a),t.setData({display_alone1:"none"})}}}); 
 			}); 	require("pages/components/alertview/alertview.js");
 		__wxRoute = 'pages/user/couponsCenter/couponsCenter';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/couponsCenter/couponsCenter.js';	define("pages/user/couponsCenter/couponsCenter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=require("../../../utils/util.js"),a=getApp(),o=a.globalData.httpUrl;Page({data:{coupones:[],geted:!1,receive:!1,nowDate:t.formatDate(new Date),dcd:!0,displayy:"none"},trimString:function(e){var t=e.split("年"),a=t[1].split("月"),o=a[1].split("日");return t[0]+"-"+a[0]+"-"+o[0]},trimString1:function(e){var t=e.split("年"),a=t[1].split("月"),o=a[1].split("日");return t[0]+a[0]+o[0]},trimString2:function(e){var t=e.split("/"),a=t[2].split(" ");return t[0]+t[1]+a[0]},fixNull:function(e){return null==e&&(e=0),e},fixNulls:function(e){return null==e&&(e=""),e},goToUser:function(){wx.switchTab({url:"/pages/index/index"})},onLoad:function(a){console.log("现在的时间--------",this.data.nowDate),e=this,"1"==a.secondIn?e.setData({secondIn:!0}):e.setData({secondIn:!1});var n=decodeURIComponent(a.scene);if("undefined"!=n&&void 0!=n&&null!=n&&"null"!=n){var s=n.split(",")[0].replace('"',"");n.split(",")[1].replace('"',"");e.setData({scene:n,saoma:!0}),wx.request({url:o+"skstoremodel/findStoreById",data:{pid:s},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){e.setData({storeInfo:n.data}),wx.setStorage({key:"storeInfo",data:n.data}),wx.setStorage({key:"storeName",data:n.data.storeInfoName}),wx.setNavigationBarTitle({title:n.data.storeInfoName});var s=n.data.storeInfoStoreId;e.setData({storeId:s}),wx.setStorageSync("storeId",s),t.getShareInfos(e,o),e.resendIndex(s),t.getShareInfos(e,o),t.setCompanyId(e,a),t.setStoreId(e),t.setStoreInfo(e),1==e.data.geted&&(e.setData({geted:!1,receive:!1}),e.setData({displayy:"block",titlename:"恭喜",carname:"已领取一张优惠券"})),wx.getStorage({key:"userId",success:function(t){wx.getStorage({key:"storeId",success:function(a){wx.getStorage({key:"companyId",success:function(n){wx.request({url:o+"skcouponmodel/selCouponByApply",data:{userId:t.data,applyStoreId:a.data,companyId:n.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t.data);var a=t.data;e.setData({coupones:a})}})}})}})}})}})}else t.getShareInfos(e,o),t.setCompanyId(e,a),t.setStoreId(e),t.setStoreInfo(e),1==e.data.geted&&(e.setData({geted:!1,receive:!1}),e.setData({displayy:"block",titlename:"恭喜",carname:"已领取一张优惠券"})),wx.getStorage({key:"userId",success:function(t){wx.getStorage({key:"storeId",success:function(a){wx.getStorage({key:"companyId",success:function(n){wx.request({url:o+"skcouponmodel/selCouponByApply",data:{userId:t.data,applyStoreId:a.data,companyId:n.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t.data);var a=t.data;e.setData({coupones:a})}})}})}})}})},resendIndex:function(t){e.setData({dcFlg:!0,orderType:"D"}),wx.request({url:o+"skstoremodel/findCompanyByAppid",data:{xcxAppid:a.globalData.appId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.setStorage({key:"companyInfo",data:e.data}),wx.setStorage({key:"companyId",data:e.data.companyInfoId})}}),e.data.secondIn?wx.getStorage({key:"userId",success:function(e){e.data}}):wx.getStorage({key:"code",success:function(n){if(""!=n.data&&null!=n.data&&void 0!=n.data&&"undefined"!=n.data&&"null"!=n.data){e.setData({code:n.data});var s=n.data;wx.getSetting({success:function(n){if(n.authSetting["scope.userInfo"])console.log("============已授权==============="),wx.getUserInfo({success:function(n){e.setData({userInfo:n.userInfo}),wx.setStorage({key:"userName",data:n.userInfo.nickName}),wx.request({url:o+"skmembermodel/getOpenidS",data:{code:s,AppID:a.globalData.appId,Secret:a.globalData.Secret,storeUuid:t,wxUserNickName:n.userInfo.nickName,headImgUrl:e.data.userInfo.avatarUrl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var a=e.data.wechatUser.wechatUserId;if(null!=e.data.openid&&""!=e.data.openid){var o=e.data.wechatUser.wechatUserStoreIdentity;wx.setStorage({key:"StoreIdentity",data:o}),wx.setStorage({key:"session_key",data:e.data.session_key}),wx.setStorage({key:"openId",data:e.data.openid}),wx.setStorage({key:"userId",data:a}),wx.setStorage({key:"storeId",data:t})}else wx.showToast({title:"登录失败"})}})},fali:function(e){}});else{console.log("==============未授权=================");var d="";d=e.data.storeInfo.storeInfoHeadImgUrl,wx.reLaunch({url:"../../welcome/accredit/accredit?data="+s+"&store_uuid="+t+"&imgurl="+d+"&goLingquan=true&scene="+e.data.scene,success:function(e){},fail:function(e){}})}},fail:function(e){}})}else wx.getStorage({key:"userId",success:function(a){if(a.data)a.data;else e.resendIndex(t)},fail:function(){e.resendIndex(t)}})},fail:function(a){e.resendIndex(t)}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){(e=this).setData({dcd:!0}),wx.onSocketMessage(function(a){console.log("===========接收到服务器信息=============="),console.log(a.data),t.getTkInfos(e,a),t.playMusic(e,a)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){t.conSocket(e.data,o)}})}),e.onLoad()},onHide:function(){},onUnload:function(){t.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},getIt:function(t){if(e.data.dcd){e.setData({dcd:!1}),console.log(t.detail.formId);var a=t.detail.formId,n=t.currentTarget.dataset.cardId,s=t.currentTarget.dataset.putId,d=t.currentTarget.dataset.voucherrestrictId,r=t.currentTarget.dataset.ids,c=e.data.coupones[r].id;e.data.receive||(console.log(e.data.receive),wx.getStorage({key:"userId",success:function(e){var t=e.data;wx.getStorage({key:"storeId",success:function(e){var r=e.data;wx.request({url:o+"skcouponmodel/alreadyReceivedNumber",data:{userId:t,putId:s,cardId:n},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log("剩余优惠卷领取数量"+e.data.number),e.data.number<d&&(console.log("剩余优惠卷领取数量"+e.data.number),wx.setStorage({key:"id",data:c}),wx.setStorage({key:"userId",data:t}),wx.setStorage({key:"putId",data:s}),wx.setStorage({key:"cardId",data:n}),wx.setStorage({key:"storeId",data:r}),wx.setStorage({key:"formId",data:a}),wx.navigateTo({url:"../cardDetail/cardDetail"}))}})}})}}))}}}); 
 			}); 	require("pages/user/couponsCenter/couponsCenter.js");
 		__wxRoute = 'pages/index/takeOut/queryFood/queryFood';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/takeOut/queryFood/queryFood.js';	define("pages/index/takeOut/queryFood/queryFood.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var a,t=require("../../../../utils/util.js"),o=getApp().globalData.httpUrl;Page({data:{displayy_0:"none",displayy_1:"none",displays:"none",dcBeizhu:"",scroFlag:"",totalCount:0,cartShow:"none",count:0,cartUrl:"../../../../images/notShopping.png",clicked:"block",httpUrl:o,infos:[],price:0,disp:"none",foodData:"",display:"none",clickabled:!0,emptyed:!1,orderId:"",distriFeePrice:0,canhefei:"",canhefei0:"",canhefei1:0},onLoad:function(e){a=this,e.orderId&&a.setData({orderId:e.orderId}),t.getShareInfos(a,o),t.setCompanyId(a,e),t.setStoreId(a),t.setStoreInfo(a),wx.getStorage({key:"zuohao",success:function(e){a.setData({deskNum:e.data})}}),wx.getStorage({key:"goods",success:function(e){a.setData({goods:e.data})}}),wx.getStorage({key:"dcFlg",success:function(e){a.setData({dcFlg:e.data})}}),wx.getStorage({key:"ydFlg",success:function(e){a.setData({ydFlg:e.data})}}),wx.getStorage({key:"wmFlg",success:function(e){a.setData({wmFlg:e.data})}}),wx.getStorage({key:"storeInfo",success:function(e){a.setData({storeInfo:e.data})}}),wx.getStorage({key:"storeInfo",success:function(e){if("0"==e.data.boxPriceType){var t=e.data.storeInfoBoxPrice;null!=t&&""!=t&&void 0!=t||(t=0),a.setData({canhefei:t})}else a.setData({canhefei:0,canhefei0:e.data.storeInfoBoxPrice})}}),wx.getStorage({key:"foodId",success:function(e){wx.request({url:o+"skfoodmodel/selFoodByActivityId",data:{id:e.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data;a.setData({foodData:t}),wx.getStorage({key:"carArray",success:function(e){var t=e.data;if(e.data.length<=0&&a.setData({canhefei:0,canhefei1:0}),t&&t.length>0){console.log("活动2-------",e.data);for(var o=0;o<e.data.length;o++)for(var r in e.data[o])"foodInfoBoxPrice_out"==r?a.setData({canhefei1:e.data[o].foodInfoBoxPrice_out}):"foodInfoBoxPrice_food"==r&&a.setData({canhefei:e.data[o].foodInfoBoxPrice_food});console.log("活动11-------",a.data.canhefei1),a.setData({carArray:t,cartUrl:"../../../../images/shopping.png"}),a.calTotalPrice()}a.setData({carArray:t}),a.changeFoodOnBack(),a.checkCount()}})}})}}),wx.getStorage({key:"wmFlg",success:function(e){a.setData({wmFlg:e.data}),e.data?wx.getStorage({key:"deliveryPrice",success:function(e){console.log("配送费--------------------------",e.data),a.setData({distriFeePrice:0==e.data?"0.00":e.data})}}):a.setData({distriFeePrice:0})}})},checkCount:function(){a.data.totalCount>0?(a.changeSubmit(!0),a.setData({cartUrl:"../../../../images/shopping.png",clicked:"none"})):(a.changeSubmit(!1),a.setData({cartUrl:"../../../../images/notShopping.png",clicked:"block"}))},changeFoodOnBack:function(){var e=a.data.goods;a.setData({goods:e})},onReady:function(){},closeTk:function(){a.setData({displa:!1})},onShow:function(){(a=this).data.back&&(a.setData({back:!1}),a.empty()),wx.onSocketMessage(function(e){console.log("===========接收到服务器信息=============="),t.getTkInfos(a,e),t.playMusic(a,e)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){t.conSocket(e.data,o)}})})},onHide:function(){a.setData({back:!0})},onUnload:function(){var e=getCurrentPages();e[e.length-2].setData({queryemptyflag:!0}),t.closeSock(),wx.setStorage({key:"carArray",data:a.data.carArray}),wx.setStorage({key:"goods",data:a.data.goods})},onPullDownRefresh:function(){wx.stopPullDownRefresh(),a=this,setTimeout(function(){a.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:a.data.shareTitle,desc:"",imageUrl:a.data.shareImgUrl,path:"/pages/index/index?storeId="+a.data.storeId+"&companyId="+a.data.companyId,success:function(e){},fail:function(e){}}},setCarShowSate:function(e){e?a.setData({cartShow:"block",scroFlag:"hidden"}):a.setData({cartShow:"none",scroFlag:""})},selguige:function(e){var t=e.currentTarget.dataset.foodSize,o=e.currentTarget.dataset.indx,r=e.currentTarget.dataset.guigeIndex,n=e.currentTarget.dataset.foodsizelist,d=[],i=[];for(var c in n)d[c]="#666",i[c]="#efefef";d[r]="#ffbf21",i[r]="#35343a",a.setData({foodSizeList:n,bgColors:d,colors:i,indx:o,foodSize:t})},resum:function(){a.setData({guige:!1,scroFlag:"",clickabled:!0})},chkOrder:function(){a.data.clickAble;var e=a.data.storeInfo.storeInfoCharging;if(1*a.data.totalPrice<1*e&&1==a.data.wmFlg)a.setData({displayy_1:"block",titlename_1:"提示",carname_1:"未达到起送费"});else if(a.data.dcFlg){var t=a.data.deskNum;null==t||""==t?a.setData({disp:"block",display:"none"}):a.sendOrder(t)}else a.sendOrder()},chkOrder_0:function(){a.requestOrder(a.data.deskNum)},chkOrde_0:function(){},sendOrder:function(e,t){if(a.data.dcFlg){var o=a.data.deskNum;if(""==o||null==o||void 0==o)return void a.setData({displayy_1:"block",carname_1:"请输入桌号",titlename_1:"提示信息"});a.setData({disp:"none"}),a.setData({displays:"block"})}else a.requestOrder(a.data.deskNum)},dianqx:function(){a.setData({displays:"none"})},requestOrder:function(e){wx.getStorage({key:"deskNum",success:function(a){""!=a.data&&(e=a.data)}}),wx.getStorage({key:"userId",success:function(t){var r=t.data;wx.getStorage({key:"storeId",success:function(t){var n=t.data;wx.getStorage({key:"orderType",success:function(t){var d=t.data,i=[];for(var c in a.data.goods){var s=a.data.goods[c].foodList;for(var f in s)if(s[f].foodSizeList.length>0){var l=!1;for(var u in a.data.carArray){for(var g in s[f].foodSizeList)if(s[f].foodSizeList[g].id==a.data.carArray[u].foodId&&s[f].foodSizeList[g].foodSizeCount>0){i.push(s[f]),l=!0;break}if(l)break}}else for(var h in a.data.carArray)s[f].id==a.data.carArray[h].foodId&&i.push(s[f])}e||(e=a.data.deskNum),console.log("结算餐盒费-------",a.data.canhefei,a.data.canhefei1),wx.request({url:o+"skordermodel/insertOrderInfo",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{wechatUserId:r,storeId:n,orderTableId:e,orderReceivablePrice:a.data.totalPrice,orderRealPrice:a.data.totalPrice,orderType:t.data,foodList:JSON.stringify(i),id:a.data.orderId,orderRemarke:a.data.dcBeizhu,foodInfoBoxPrice:a.data.canhefei+a.data.canhefei1},success:function(e){a.data.wmFlg?wx.redirectTo({url:"../../order/evalOrder/submitOrder/submitOrder?orderId="+e.data.jsonEntity+"&orderType="+d}):wx.redirectTo({url:"../../order/evalOrder/evalOrder?orderId="+e.data.jsonEntity+"&orderType="+d})},fail:function(e){wx.showToast({title:"下单失败"})}})}})}})}})},addCount:function(e){a.setData({fold:!0,emptyed:!1}),a.canhePrice(1,e)},minusCount:function(e){a.canhePrice(2,e)},canhePrice:function(e,t){if(1==e){var o=a.data.canhefei+a.data.canhefei0;a.setFoodInfo(t,1,o),console.log("增加菜品",e,o),a.setData({canhefei:o})}else{var r=a.data.canhefei-a.data.canhefei0;console.log("减菜品",e,r),a.setFoodInfo(t,-1,r),a.setData({canhefei:r})}},setFoodInfo:function(e,t,o){var r=e.currentTarget.dataset.foodId,n=o,d=e.currentTarget.dataset.typeId,i=e.currentTarget.dataset.foodSize,c=a.data.goods,s=c.find(function(e){return e.id==d}).foodList,f=s.find(function(e){return r==e.id});if(!f)for(var l in s)if(i=s[l].foodSizeList.find(function(e){return e.id==r})){f=s.find(function(e){return i.foodId==e.id});break}var u=void 0,g=0,h="",p=0,y=0;f.foodSizeList.length>0?(u=f.foodSizeList.find(function(e){return e.id==i.id}),r=u.id,h=f.foodName+"("+u.name+")",u.foodSizeCount=1*u.foodSizeCount+t,y=u.foodSizeCount,g="0"==u.discountFlg?a.data.wmFlg?u.priceW:u.priceT:a.data.wmFlg?u.priceWZ:u.priceTZ):(h=f.foodName,f.foodCount=1*f.foodCount+t,y=f.foodCount,p=a.data.wmFlg?f.priceW:f.priceT,g="0"==f.discountFlg?a.data.wmFlg?f.priceW:f.priceT:a.data.wmFlg?f.priceWZ:f.priceTZ),a.refreshShopingCar(r,g,y,h,d,p,n),a.setFoodCnt();var k=a.data.carArray;0==f.foodCount&&0==k.length?(a.changeSubmit(!1),a.setData({goods:c,clickAble:!1,cartUrl:"../../../../images/notShopping.png"})):(a.changeSubmit(!0),a.setData({goods:c,clickAble:!0,cartUrl:"../../../../images/shopping.png"}))},refreshShopingCar:function(e,t,o,r,n,d,i){var c=a.data.carArray,s=void 0,f=c.find(function(a){return a.foodId==e});if(console.log("活动-----从购物车-----餐盒费---",i),f){f.foodId=e;var l=t*o,u=d*o;if(f.price=l.toFixed(2),f.receivablePrice=u.toFixed(2),f.num=o,f.name=r,f.foodInfoBoxPrice_food=i,0==o){for(var g=0,h=0;h<c.length;h++)e==c[h].foodId&&(g=h);c.splice(g,1),0==c.length&&(a.setCarShowSate(!1),a.setData({cartUrl:"../../../../images/notShopping.png"}))}}else o>0&&(s={foodId:e,price:t.toFixed(2),num:o,name:r,typeId:n,receivablePrice:d,foodInfoBoxPrice_food:i},c.push(s));a.calTotalPrice(),a.setData({carArray:c})},setFoodCnt:function(){var e=a.data.foodData,t=a.data.goods;for(var o in t)for(var r in t[o].foodList){for(var n in e)!function(a){var r=t[o].foodList.find(function(t){return t.id==e[a].id});r&&(e[a]=r)}(n)}a.setData({foodData:e})},xuanguige:function(e){var t=e.currentTarget.dataset.foodCount,o=e.currentTarget.dataset.foodPrice,r=e.currentTarget.dataset.foodId,n=[],d=[];n[0]="#ffbf21",d[0]="#35343a",a.setData({guige:r,foodCount:t,foodPrice:o,indx:0,bgColors:n,colors:d,scroFlag:"hidden",clickabled:!1,emptyed:!0})},changeSubmit:function(e){a.setData({clickAble:e}),e?a.setData({bcgcolor:"#ffbf21",colo:"#3f3d40",payDesc:"下单"}):(a.data.wmFlg?wx.getStorage({key:"storeInfo",success:function(e){null!=e.data.storeInfoCharging&&null!=e.data.storeInfoCharging&&null!=e.data.storeInfoCharging||(e.data.storeInfoCharging="0.00"),a.setData({payDesc:"￥"+parseFloat(e.data.storeInfoCharging).toFixed(2)+"起送"})}}):a.setData({payDesc:"下单"}),a.setData({bcgcolor:"#333",colo:"#999"}))},bindBeizhu:function(e){var t=e.detail.value;null==t||void 0==t||"undefined"==t||"null"==t?a.setData({dcBeizhu:""}):a.setData({dcBeizhu:t}),wx.setStorage({key:"dcBeizhu",data:t})},toggleList:function(){if(a.data.clickabled){if(a.data.totalCount){a.setData({fold:!a.data.fold});var e=a.data.fold;a.cartShow(e)}}else a.setData({displayy_1:"block",carname_1:"请关闭选菜窗口",titlename_1:"提示信息"})},cartShow:function(e){0==e?a.setData({cartShow:"block"}):a.setData({cartShow:"none"})},calTotalPrice:function(){for(var e=this.data.carArray,t=0,o=0,r=0,n=a.data.distriFeePrice,d=0;d<e.length;d++)t+=1*e[d].price,o+=1*e[d].receivablePrice,r+=1*e[d].num;var i=t;a.setData({finalPrice:parseFloat(i).toFixed(2),totalReceivablePrice:parseFloat(o).toFixed(2),totalPrice:parseFloat(t).toFixed(2),totalCount:r,distriFeePrice:parseFloat(n).toFixed(2)})},empty:function(t){var o,r=a.data.goods;for(var n in r)for(var d in r[n].foodList)if(r[n].foodList[d].foodCount=0,r[n].foodList[d].foodSizeList.length>0)for(var i in r[n].foodList[d].foodSizeList)r[n].foodList[d].foodSizeList[i].foodSizeCount=0;a.setData((o={cartShow:"none",fold:!0,scroFlag:"",cartUrl:"/images/notShopping.png",bcgcolor:"#333",colo:"#999",naviFlg:!1,totalPrice:0,totalCount:0,foodCount:0},e(o,"totalPrice",0),e(o,"emptyed",!0),e(o,"carArray",[]),o))},resume:function(){a.setData({disp:"none",display:"none"})},bindDesk:function(e){a.setData({deskNum:e.detail.value}),wx.setStorage({key:"deskNum",data:e.detail.value})},askFor:function(){"#ffbf21"==a.data.bcgcolor?wx.getStorage({key:"userId",success:function(e){wx.getStorage({key:"storeId",success:function(t){wx.getStorage({key:"orderType",success:function(r){wx.request({url:o+"skordermodel/selUnpaidOrder",data:{wechatUserId:e.data,orderType:r.data,storeId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){"操作成功！"==e.data.msg?e.data.count>0?wx.getStorage({key:"editType",success:function(e){"N"!=e.data?a.setData({display:"block"}):a.chkOrder()}}):a.chkOrder():a.setData({displayy_1:"block",carname_1:"请联系后台管理员",titlename_1:"获取未支付订单操作失败"})}})}})}})}}):a.setData({displayy_1:"block",carname_1:"当前没有点餐，不可下单",titlename_1:"提示信息"})}}); 
 			}); 	require("pages/index/takeOut/queryFood/queryFood.js");
 		__wxRoute = 'pages/welcome/otherStore/otherStore';__wxRouteBegin = true; 	define("pages/welcome/otherStore/otherStore.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=getApp(),a=t.globalData.httpUrl;Page({data:{othercity:"其它",httpUrl:a,stores:[],spCitys:[],citys:[],disFlag:"none",scroFlag:"",starurls:[],slider:[{picUrl:"../../images/swiper1.jpg"},{picUrl:"../../images/swiper1.jpg"},{picUrl:"../../images/swiper1.jpg"}],onClickFlag:!0},onLoad:function(t){(e=this).setInit(),wx.getStorage({key:"companyId",success:function(t){e.setData({companyId:t.data}),wx.request({url:a+"skstoremodel/WXfindWelcomeForward",data:{companyId:e.data.companyId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var o=t.data;console.log("shareInfo:"),console.log(o);var s=o.img.split("/"),r=s.length-1,n=a+"image/"+s[r];console.log("shareImgUrl:"+n),e.setData({shareTitle:o.title,shareImgUrl:n})}})}}),wx.getStorage({key:"avatarUrl",success:function(t){e.setData({avatarUrl:t.data})}}),wx.getStorage({key:"latitude",success:function(t){wx.getStorage({key:"longitude",success:function(o){wx.getStorage({key:"companyId",success:function(s){wx.request({url:a+"skstoremodel/selCityByUser",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{storeInfoCompanyInfoId:s.data},success:function(a){console.log(a.data);for(var r=e.data.citys,n=e.data.spCitys,c=a.data,d=0;d<c.length;d++)c[d].cityxs.indexOf("沈阳")<0&&n.length<3?n.push({cityName1:c[d].cityxs}):n.length>=3&&r.push({cityName1:c[d].cityxs});e.setData({spCitys:n,citys:r}),n.length>0&&e.getStroeList(s.data,o.data,t.data,"距离最近","",n[0].cityName1,"")},fail:function(e){}})}})}})}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/welcome/welcome",success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},gotoIndex:function(t){if(console.log("that.data.onClickFlag"),console.log(e.data.onClickFlag),e.data.onClickFlag){e.setData({onClickFlag:!1});var a=t.currentTarget.dataset.storeName,o=t.currentTarget.dataset.storeuid,s=t.currentTarget.dataset.storeInfo,r=t.currentTarget.dataset.storeInfoDeliveryPrice;wx.setStorage({key:"storeInfo",data:s}),wx.setStorage({key:"deliveryPrice",data:r}),wx.setStorage({key:"storeName",data:a}),console.log("====gotoIndex===="),e.resendIndex(o)}},disOther:function(){var t=[],a=[];for(var o in e.data.spCitys)t[o]="#ddd",a[o]="#555";e.setData({disFlag:"block",scroFlag:"hidden",wordColor:"#313330",bgColor:"#fcc11f",wordColors:t,bgColors:a})},resume:function(){e.setData({disFlag:"none",scroFlag:""})},area:function(t){e.resume();var a=t.currentTarget.dataset.cityname;wx.getStorage({key:"companyId",success:function(t){wx.getStorage({key:"latitude",success:function(o){wx.getStorage({key:"longitude",success:function(s){e.getStroeList(t.data,s.data,o.data,"距离最近","",a,"")}})}})}})},getStroeList:function(t,o,s,r,n,c,d){wx.request({url:a+"skstoremodel/wxSelectStoreByCompanyId",data:{storeInfoCompanyInfoId:t,storeInfoLongitude:o,storeInfoLatitude:s,condition:r,storeInfoName:n,storeInfoAddress:c},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({stores:t.data});for(var a=t.data,o=e.data.starurls,s=0;s<a.length;s++)o[s]=e.setStart(a[s].storeRatedServiceStartLevel);e.setData({starurls:o})}})},setInit:function(t){var a=[],o=[];for(var s in e.data.spCitys)a[s]="#ddd",o[s]="#555";a[0]="#313330",o[0]="#fcc11f",e.setData({wordColors:a,bgColors:o,wordColor:"#ddd",bgColor:"#555"})},fushun:function(t){var a=t.currentTarget.dataset.clickIndex,o=[],s=[];for(var r in e.data.spCitys)o[r]="#ddd",s[r]="#555";o[a]="#313330",s[a]="#fcc11f",e.setData({wordColors:o,bgColors:s,wordColor:"#ddd",bgColor:"#555"}),e.area(t)},setStart:function(e){this.data.starurls;var t={};console.log("storeRatedServiceStartLevel ==> "+e);for(var a=0;a<5;a++)t[a]=a<=e-1?{starurl:"../../../images/star.png"}:a-e>0&&a-e<1?{starurl:"../../../images/halfstar.png"}:{starurl:"../../../images/emptystar.png"};return t},resendIndex:function(o){wx.login({success:function(s){console.log("====wx.login success====");s.code;s.code?wx.getStorage({key:"userName",success:function(r){console.log("resi.data ==> "+r.data),wx.request({url:a+"skmembermodel/getOpenidS",data:{code:s.code,AppID:t.globalData.appId,Secret:t.globalData.Secret,storeUuid:o,wxUserNickName:r.data,headImgUrl:e.data.avatarUrl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){if(e.setData({onClickFlag:!0}),null!=t.data.openid&&""!=t.data.openid){var a=t.data.wechatUser.wechatUserStoreIdentity;wx.setStorage({key:"StoreIdentity",data:a}),wx.setStorage({key:"session_key",data:t.data.session_key}),wx.setStorage({key:"openId",data:t.data.openid}),wx.setStorage({key:"userId",data:t.data.wechatUser.wechatUserId}),wx.setStorage({key:"storeId",data:o}),wx.switchTab({url:"../../index/index"})}else wx.showToast({title:"登录失败"})}})}}):console.log("获取用户登录态失败！"+s.errMsg)},fail:function(){console.log("====wx.login fail====")}})}}); 
 			}); 	require("pages/welcome/otherStore/otherStore.js");
 		__wxRoute = 'pages/welcome/accredit/accredit';__wxRouteBegin = true; 	define("pages/welcome/accredit/accredit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,a=getApp(),t=a.globalData.httpUrl;Page({data:{httpUrl:t,onClickFlag:!1,shouye:!1},onLoad:function(a){e=this,console.log(a),console.log(a.imgurl),e.setData({data:a.data,store_uuid:a.store_uuid,imgurl:a.imgurl,goUser:a.goUser,goActive:a.goActive,goDiancan:a.goDiancan,goCollage:a.goCollage,goQuanyi:a.goQuanyi,goHuiyuan:a.goHuiyuan,goShouyin:a.goShouyin,goPaidui:a.goPaidui,goYuding:a.goYuding,goLingquan:a.goLingquan,goWifi:a.goWifi,goDaohang:a.goDaohang,goChuizhi:a.goChuizhi,goWaimai:a.goWaimai}),a.scene&&e.setData({scene:a.scene})},onReady:function(){},onShow:function(){var e=this;wx.login({success:function(a){console.log("====wx.login success====");a.code;a.code&&(console.log("====get code===="),console.log("res.code ==> "+a.code),wx.getSetting({success:function(a){a.authSetting["scope.userInfo"]?(console.error("已经授权"),e.setData({shouye:!0})):(console.error("还没授权"),e.setData({shouye:!1}))}}))}})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){},goToUser:function(e){wx.switchTab({url:"../../index/index"})},goDetail:function(o){if(!e.data.onClickFlag){e.setData({onClickFlag:!0}),console.log(o.detail.userInfo);var n=e.data.data,s=(e.data.openid,e.data.store_uuid);if(console.log(n),o.detail.userInfo){e.setData({onClickFlag:!0}),wx.getLocation({type:"wgs84",success:function(e){wx.setStorage({key:"latitude",data:e.latitude}),wx.setStorage({key:"longitude",data:e.longitude})},fail:function(){var e={longitude:"",latitude:""};wx.setStorage({key:"latitude",data:e.latitude}),wx.setStorage({key:"longitude",data:e.longitude})}});var i=o.detail.userInfo.nickName,r=o.detail.userInfo.avatarUrl;wx.request({url:t+"skmembermodel/getOpenidS",data:{code:n,AppID:a.globalData.appId,Secret:a.globalData.Secret,storeUuid:s,wxUserNickName:i,headImgUrl:r},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){if(wx.setStorage({key:"code",data:""}),null!=a.data.openid&&""!=a.data.openid){var t=a.data.wechatUser.wechatUserStoreIdentity;wx.setStorage({key:"StoreIdentity",data:t}),wx.setStorage({key:"openId",data:a.data.openid}),wx.setStorage({key:"userId",data:a.data.wechatUser.wechatUserId}),wx.setStorage({key:"userName",data:i}),wx.setStorage({key:"avatarUrl",data:r}),wx.setStorage({key:"storeId",data:s}),wx.setStorage({key:"session_key",data:a.data.session_key,success:function(t){if("true"==e.data.goUser)wx.switchTab({url:"../../user/user"});else if("quanyi"==e.data.goUser)wx.redirectTo({url:"/pages/user/forceCard/receiveForceCard/receiveForceCard?scene="+e.data.scene+"&secondIn=1"});else if("true"==e.data.goActive)wx.redirectTo({url:"../../active/active?sessionkey="+a.data.session_key+"&scene="+e.data.scene+"&secondIn=1"});else if("true"==e.data.goDiancan)wx.redirectTo({url:"../../index/takeOut/takeOutSM?scene="+e.data.scene+"&secondIn=1"});else if("true"==e.data.goQuanyi)wx.redirectTo({url:"/pages/user/forceCard/receiveForceCard/receiveForceCard?scene="+e.data.scene+"&secondIn=1"});else if("true"==e.data.goHuiyuan)wx.redirectTo({url:"/pages/user/myCard/myCard?scene="+e.data.scene+"&secondIn=1"});else if("true"==e.data.goShouyin)wx.redirectTo({url:"/pages/index/collect/collect?scene="+e.data.scene+"&secondIn=1"});else if("true"==e.data.goPaidui)wx.redirectTo({url:"/pages/index/fellin/fellin?scene="+e.data.scene+"&secondIn=1"});else if("true"==e.data.goYuding)wx.redirectTo({url:"/pages/index/destine/destine?scene="+e.data.scene+"&secondIn=1"});else if("true"==e.data.goLingquan)wx.redirectTo({url:"/pages/user/couponsCenter/couponsCenter?scene="+e.data.scene+"&secondIn=1"});else if("true"==e.data.goWifi)wx.redirectTo({url:"/pages/index/wifi/wifi?scene="+e.data.scene+"&secondIn=1"});else if("true"==e.data.goDaohang)wx.redirectTo({url:"/pages/maps/maps?scene="+e.data.scene+"&secondIn=1"});else if("true"==e.data.goChuizhi)wx.redirectTo({url:"/pages/user/myCash/myCash?scene="+e.data.scene+"&secondIn=1"});else if("true"==e.data.goCollage)wx.redirectTo({url:"../../collage/collage?scene="+e.data.scene+"&secondIn=1"});else if("true"==e.data.goWaimai){wx.setStorage({key:"currentTab",data:2}),wx.setStorage({key:"wmFlg",data:!0}),wx.setStorage({key:"dcFlg",data:!1}),wx.setStorage({key:"ydFlg",data:!1}),wx.setStorage({key:"orderType",data:"W"}),wx.setStorage({key:"carArray",data:[]}),wx.navigateTo({url:"/pages/index/takeOut/takeOut?editType=Y"})}else wx.switchTab({url:"../../index/index"})}})}else wx.showToast({title:"登录失败"})}})}else e.setData({onClickFlag:!1})}}}); 
 			}); 	require("pages/welcome/accredit/accredit.js");
 		__wxRoute = 'pages/collage/collage';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/collage/collage.js';	define("pages/collage/collage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=getApp(),o=require("../../utils/util.js"),a=t.globalData.httpUrl,n=t.globalData.tuhttpUrl;Page({data:{wntjUrls:"http://qiniu.shoukaikeji.com/FjFB_bsTw1h2iQz5BMo6uYEFOob-",httpUrl:a,tuhttpUrl:n,jiazaizhong:!0,displayy_2:"none",displayy_1:"none",displayy_3:"none"},onLoad:function(t){e=this,"1"==t.secondIn?e.setData({secondIn:!0}):e.setData({secondIn:!1}),e.setData({jiazaizhong:!0}),o.setCompanyId(e,t),wx.getStorage({key:"companyInfo",success:function(t){e.setData({companyName:t.data.companyInfoName})},fail:function(o){console.log(o),setTimeout(function(){e.onLoad(t)},2e3)}});var n=decodeURIComponent(t.scene);if(console.log("scene====>"+n),"undefined"!=n&&void 0!=n&&""!=n&&null!=n){e.setData({saoma:!0,scene:n}),console.log("扫码进入");var s=n.split(",")[0].replace('"',"");wx.request({url:a+"skstoremodel/findStoreById",data:{pid:s},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){wx.setStorage({key:"storeInfo",data:t.data});var o=t.data.storeInfoStoreId;e.resendIndex(o),e.setData({storeId:o}),wx.setStorage({key:"storeId",data:o})}})}else e.setData({displayy_0:"block",carname_0:"未获取扫码信息,请检查二维码",titlename_0:"提示信息"}),o.getShareInfos(e,a);wx.getStorage({key:"connectedSocket",success:function(e){e.data?console.log("============已有socket不连接============="):wx.getStorage({key:"userId",success:function(e){o.conSocket(e.data,a)}})}})},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(t){console.log("===========接收到服务器信息=============="),console.log(t.data),o.getTkInfos(e,t),o.playMusic(e,t)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){o.conSocket(e.data,a)}})})},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},onUnload:function(){o.closeSock()},resendIndex:function(o){e.data.secondIn?wx.getStorage({key:"userId",success:function(t){var a=t.data;e.loadOther(o,a)}}):wx.getStorage({key:"code",success:function(n){if(""!=n.data&&"null"!=n.data&&"undefined"!=n.data&&null!=n.data&&void 0!=n.data){var s=n.data;wx.setStorage({key:"code",data:""}),e.setData({code:""}),wx.getSetting({success:function(n){console.log("====wx.getSetting success===="),console.log(n),console.log(n.authSetting["scope.userInfo"]),n.authSetting["scope.userInfo"]?wx.getUserInfo({success:function(n){console.log("====wx.getUserInfo success===="),wx.setStorage({key:"userName",data:n.userInfo.nickName}),wx.setStorage({key:"avatarUrl",data:n.userInfo.avatarUrl}),wx.request({url:a+"skmembermodel/getOpenidS",data:{code:s,AppID:t.globalData.appId,Secret:t.globalData.Secret,storeUuid:o,wxUserNickName:n.userInfo.nickName,headImgUrl:n.userInfo.avatarUrl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=t.data.wechatUser.wechatUserStoreIdentity;wx.setStorage({key:"StoreIdentity",data:a}),wx.setStorage({key:"session_key",data:t.data.session_key});var n=t.data.wechatUser.wechatUserId;wx.setStorage({key:"userId",data:n}),e.loadOther(o,n)}})},fali:function(e){console.log("====wx.login fail====")}}):(console.log("======未授权"),console.log("=====storeId=====>"+o),wx.getStorage({key:"companyId",success:function(t){wx.request({url:a+"skstoremodel/wxSelectStoreByCompanyId",data:{storeInfoCompanyInfoId:t.data,storeInfoLongitude:"",storeInfoLatitude:"",condition:"",storeInfoName:"",storeInfoAddress:""},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({shouquanImg:t.data[0].storeInfoHeadImgUrl}),wx.redirectTo({url:"../welcome/accredit/accredit?goCollage=true&store_uuid="+o+"&imgurl="+e.data.shouquanImg+"&data="+s+"&scene="+e.data.scene})}})}}))},fail:function(e){console.log("====wx.getSetting fail====")}})}else e.resendIndex(o)},fail:function(t){e.resendIndex(o)}})},chkOrder0_1:function(){wx.request({url:a+"skmembermodel/findVipCardBy",data:{companyId:e.data.companyId,storeId:e.data.storeuid},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var o=t.data.id;wx.setStorage({key:"cardId",data:o}),wx.setStorage({key:"userId",data:e.data.userId}),wx.setStorage({key:"storeId",data:e.data.storeuid}),wx.redirectTo({url:"../user/myCard/myCard?toGotoActive=0&saoma=0"})}})},chkOrder1_1:function(){wx.switchTab({url:"../index/index"})},loadOther:function(t,n){wx.request({url:a+"skmembermodel/findVipCardBy",data:{companyId:e.data.companyId,storeId:t},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){wx.setStorage({key:"vipCard",data:s.data});var c=s.data.isExistence;wx.request({url:a+"skmembermodel/findWechatUserById",data:{wechatUserId:n,wechatUserStoreStoreInfoStoreId:t},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){var d=s.data;e.setData({jiazaizhong:!1}),"v"!=d.wechatUserStoreIdentity?c?e.setData({displayy_1:"block",carname_1:"请先领取会员卡",titlename_1:"提示信息",storeuid:t}):e.setData({displayy_2:"block",carname_2:"商家无会员卡可领",titlename_2:"无法参与活动"}):(o.getShareInfos(e,a),wx.getStorage({key:"connectedSocket",success:function(e){1==e.data?console.log("======已有连接socket不连接========="):o.conSocket(n,a)},fail:function(e){o.conSocket(n,a)}}),wx.onSocketOpen(function(e){wx.setStorage({key:"connectedSocket",data:!0}),console.log("WebSocket连接已打开！"),console.log(e)}),wx.onSocketClose(function(e){console.log("WebSocket连接已关闭！"),console.log(e.reason),"interrupted"==e.reason||"abnormal closure"==e.reason?o.conSocket(n,a):(console.log("WebSocket连接已关闭！"),wx.setStorage({key:"connectedSocket",data:!1}))}),wx.onSocketError(function(e){console.log("WebSocket连接打开失败，请检查！"),console.log(e)}),e.setData({displayy_3:"block",carname_3:"即将跳转进入团购",titlename_3:"确定前往"}))}})}})},chkOrder0_2:function(){wx.switchTab({url:"../index/index"})},chkOrder1_2:function(){wx.switchTab({url:"../index/index"})},chkOrder0_3:function(){wx.navigateToMiniProgram({appId:"wxe89bfe0adae77728"})},chkOrder1_3:function(){console.log("======用户已取消=======")},goToTuanGou:function(){wx.navigateToMiniProgram({appId:"wxe89bfe0adae77728"})},backToUser:function(){wx.switchTab({url:"../user/user"})}}); 
 			}); 	require("pages/collage/collage.js");
 		__wxRoute = 'pages/active/active';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/active/active.js';	define("pages/active/active.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t,o=getApp(),a=require("../../utils/util.js"),s=require("../../module/getPhone.js"),n=o.globalData.httpUrl,c=o.globalData.tuhttpUrl;Page({data:{wntjUrls:"http://qiniu.shoukaikeji.com/FjFB_bsTw1h2iQz5BMo6uYEFOob-",httpUrl:n,tuhttpUrl:c,description:"参加摇一摇活动，摇出丰厚大奖",isShow:!1,allowShake:!0,shake:"",shakeBackUrl:"http://qiniu.shoukaikeji.com/Fmmg4emGpeNKhCIDwCaieZE9WKMp",shakeBottomUrl:"http://qiniu.shoukaikeji.com/FkwlQKSsYO8hXmFiKSuZ70KXqb1_",noShakeUrl:"http://qiniu.shoukaikeji.com/FiDHGGf_-zAXB3Sk05E4FJECH6lT",hasShakeUrl:"http://qiniu.shoukaikeji.com/FhisIFTWxtV-1qCfU4EThVspKi5w",shakeMp3:"http://qiniu.shoukaikeji.com/FniUyJC9NddXGl5CMAIPAVfsDJRf",hasShake:!1,noShake:!1,prizeInfo:"电视机一台",confirm:"好 的",phone:"",display:"none",session_key:""},onLoad:function(o){console.log("===============摇一摇情况================="),console.log(o),(e=this).setData({allowShake:!1}),"1"==o.secondIn?(e.setData({secondIn:!0,session_key:o.sessionkey}),t=o.sessionkey):e.setData({secondIn:!1}),e.setData({jiazaizhong:!0}),a.setCompanyId(e,o);var s=decodeURIComponent(o.scene);if(console.log("scene====>"+s),"undefined"!=s&&void 0!=s&&""!=s&&null!=s){wx.setStorage({key:"saomajin",data:!0}),wx.onSocketOpen(function(){wx.closeSocket({success:function(e){console.log("======初始化关闭socket======="),wx.onSocketClose(function(e){console.log("========没有socket连接==========")})}})}),e.setData({saoma:!0,scene:s}),console.log("扫码进入");var c=s.split(",")[0].replace('"',"");e.setData({pid:c}),wx.request({url:n+"skstoremodel/findStoreById",data:{pid:c},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log("=====摇一摇进入===="),console.log(t),wx.setStorage({key:"storeInfo",data:t.data});var o=t.data.storeInfoStoreId;e.resendIndex(o),e.setData({storeId:o}),wx.setStorage({key:"storeId",data:o})}})}else a.getShareInfos(e,n),e.setData({saoma:!1}),console.error("扫码状态-----------",o.saoma),0==o.saoma&&(console.error("判断-----------",o.saoma),e.setData({saoma:!0})),console.log("从小程序进入"),wx.getStorage({key:"storeId",success:function(t){e.setData({storeId:t.data}),e.resendIndex(t.data),e.getShakeListWX(t.data)},fail:function(e){console.log(e.data)}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(t){console.log("收到服务器内容："),console.log(t),"shakeAShake"!=t.data.split(",")[0]?"NoShakeAShake"!=t.data.split(",")[0]?(console.log("===========接收到服务器信息=============="),console.log(t.data),a.getTkInfos(e,t),a.playMusic(e,t)):e.setData({hasShake:!1,noShake:!0,prizeInfo:"未中奖"}):e.setData({hasShake:!0,noShake:!1,prizeInfo:t.data.split(",")[1]})}),e.data.isShow=!0,wx.onAccelerometerChange(function(t){e.data.isShow&&(wx.onSocketClose(function(e){console.log("WebSocket连接已关闭！"),console.log(e.reason),"interrupted"==e.reason||"abnormal closure"==e.reason?wx.getStorage({key:"userId",success:function(e){a.conSocket(e.data,n)}}):(console.log("WebSocket连接已关闭！"),wx.setStorage({key:"connectedSocket",data:!1}))}),(t.x>1||t.y>1)&&(e.playShakeAudio(),setTimeout(function(){e.setData({allowShake:!0})},1e3)))}),e.onLoad()},onHide:function(){e.setData({isShow:!1})},onUnload:function(){e.setData({isShow:!1}),wx.closeSocket({success:function(e){console.log("======success======="),wx.setStorage({key:"connectedSocket",data:!1}),console.log(e)},fail:function(e){console.log("======fail======="),console.log(e)}})},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},playShakeAudio:function(){e.data.allowShake&&(e.setData({allowShake:!1}),wx.request({url:n+"skordermodel/getShakeListWX",data:{storeId:e.data.storeId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){t.data.isExistence?(e.setData({shake:"shake 1s linear infinite"}),"undefined"==e.data.userId||void 0==e.data.userId||""==e.data.userId||"null"==e.data.userId||null==e.data.userId?e.playShakeAudio():(wx.request({url:n+"skordermodel/instersShakeRosterWX",data:{userId:e.data.userId,storeId:e.data.storeId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){1==t.data.isExistence?wx.showToast({title:"摇一摇成功"}):wx.showToast({title:"活动已结束"}),e.setData({shake:""})}}),wx.playBackgroundAudio({dataUrl:e.data.shakeMp3,title:"",coverImgUrl:""}),wx.onBackgroundAudioStop(function(){e.setData({shake:""}),console.log("开始调用getShakeListWX")}))):wx.showToast({title:"活动未开始"})}}))},getShakeListWX:function(t){console.log("====================进入getShakeListWX============"),wx.request({url:n+"skordermodel/getShakeListWX",data:{storeId:t},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log("getShakeListWX返回数据======》"),console.log(t.data),e.setData({getShakeListWX:t.data})}})},confirm:function(){e.setData({hasShake:!1,noShake:!1})},resendIndex:function(t){e.data.secondIn?wx.getStorage({key:"userId",success:function(o){var a=o.data;e.loadActive(t,a)}}):wx.getStorage({key:"code",success:function(a){if(""!=a.data&&null!=a.data&&void 0!=a.data&&"null"!=a.data&&"undefined"!=a.data){e.setData({code:a.data});var s=a.data;wx.getSetting({success:function(a){console.log("====wx.getSetting success===="),console.log(a),console.log(a.authSetting["scope.userInfo"]),a.authSetting["scope.userInfo"]?wx.getUserInfo({success:function(a){console.log("====wx.getUserInfo success===="),wx.setStorage({key:"userName",data:a.userInfo.nickName}),wx.setStorage({key:"avatarUrl",data:a.userInfo.avatarUrl}),wx.request({url:n+"skmembermodel/getOpenidS",data:{code:s,AppID:o.globalData.appId,Secret:o.globalData.Secret,storeUuid:t,wxUserNickName:a.userInfo.nickName,headImgUrl:a.userInfo.avatarUrl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){wx.setStorage({key:"session_key",data:o.data.session_key}),console.log("这里走了么--------",o.data.session_key),wx.setStorage({key:"code",data:""}),e.setData({code:""});var a=o.data.wechatUser.wechatUserId;wx.setStorage({key:"userId",data:o.data.wechatUser.wechatUserId}),e.loadActive(t,a)}})},fali:function(e){console.log("====wx.login fail====")}}):(console.log("======未授权"),console.log("=====storeId=====>"+t),wx.request({url:n+"skstoremodel/findStoreById",data:{pid:e.data.pid},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){e.setData({shouquanImg:o.data.storeInfoHeadImgUrl}),wx.redirectTo({url:"../welcome/accredit/accredit?goActive=true&goUser=false&store_uuid="+t+"&imgurl="+e.data.shouquanImg+"&data="+e.data.code+"&scene="+e.data.scene})}}))},fail:function(e){console.log("====wx.getSetting fail====")}})}else wx.getStorage({key:"userId",success:function(o){if(""!=o.data&&null!=o.data&&void 0!=o.data&&"null"!=o.data&&"undefined"!=o.data){var a=o.data;e.loadActive(t,a)}else e.resendIndex(t)},fail:function(){e.resendIndex(t)}})},fail:function(o){console.log("获取code失败"),e.resendIndex(t)}})},quxiao:function(){e.setData({display:"none"}),wx.switchTab({url:"../user/user"})},getPhone:function(e){var a=this;a.data.isVip;"getPhoneNumber:fail user deny"==e.detail.errMsg||"getPhoneNumber:fail:cancel to confirm login"==e.detail.errMsg||(a.setData({display:"none"}),t?s.getPhoneNum(e.detail.encryptedData,e.detail.iv,o.globalData.appId,t).then(function(e){a.setData({toGotoActive:!0}),setTimeout(function(){wx.redirectTo({url:"../user/myCard/myCard?toGotoActive=0&saoma=0"})},500)}):s.getPhoneNum(e.detail.encryptedData,e.detail.iv,o.globalData.appId,wx.getStorageSync("session_key")).then(function(e){a.setData({toGotoActive:!0}),setTimeout(function(){wx.redirectTo({url:"../user/myCard/myCard?toGotoActive=0&saoma=0"})},500)}))},loadActive:function(t,o){wx.request({url:n+"skmembermodel/updatVipCardStore",data:{wechatUserId:o,wechatUserStoreStoreInfoStoreId:t,companyId:e.data.companyId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){}}),wx.request({url:n+"skmembermodel/findVipCardBy",data:{companyId:e.data.companyId,storeId:t},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){wx.getStorage({key:"companyId",success:function(e){wx.request({url:n+"skmembermodel/updatEquitycardStore",data:{wxUserId:o,storeId:t,companyId:e.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){}})}}),wx.setStorage({key:"vipCard",data:s.data});s.data;var c=s.data.isExistence;wx.request({url:n+"skmembermodel/findWechatUserById",data:{wechatUserId:o,wechatUserStoreStoreInfoStoreId:t},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){var d=s.data;wx.request({url:n+"skordermodel/getShakeActivityByIdWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{storeId:t},success:function(s){var r=s.data.isUseVip;e.setData({jiazaizhong:!1}),"v"!=d.wechatUserStoreIdentity&&r?c?(wx.request({url:n+"skmembermodel/findVipCardBy",data:{companyId:e.data.companyId,storeId:t},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var o=e.data.id;wx.setStorage({key:"cardId",data:o}),wx.setStorage({key:"storeId",data:t})}}),e.setData({display:"block"})):wx.showModal({title:"商家无会员卡可领",content:"无法参与活动",success:function(t){t.confirm?(e.setData({display:"none"}),wx.switchTab({url:"../index/index"})):t.cancel&&(e.setData({display:"none"}),wx.switchTab({url:"../index/index"}))}}):(e.setData({allowShake:!0}),a.getShareInfos(e,n),e.getShakeListWX(e.data.storeId),wx.getStorage({key:"connectedSocket",success:function(e){1==e.data?console.log("======已有连接socket不连接========="):a.conSocket(o,n)},fail:function(e){a.conSocket(o,n)}}),wx.onSocketOpen(function(e){wx.setStorage({key:"connectedSocket",data:!0}),console.log("WebSocket连接已打开！"),console.log(e)}),wx.onSocketClose(function(e){console.log("WebSocket连接已关闭！"),console.log(e.reason),"interrupted"==e.reason||"abnormal closure"==e.reason?a.conSocket(o,n):(console.log("WebSocket连接已关闭！"),wx.setStorage({key:"connectedSocket",data:!1}))}),wx.onSocketError(function(e){console.log("WebSocket连接打开失败，请检查！"),console.log(e)}),wx.setStorage({key:"storeId",data:t}),wx.setStorage({key:"userId",data:o}),e.setData({userId:o}),console.log("userId====>"+o))}})}})}})},close:function(){wx.switchTab({url:"../user/user"})}}); 
 			}); 	require("pages/active/active.js");
 		__wxRoute = 'pages/map/map';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/map/map.js';	define("pages/map/map.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,o=getApp(),e=(require("../../utils/util.js"),require("../../utils/util.js")),n=o.globalData.httpUrl;o.globalData.tuhttpUrl;Page({data:{latitude:"",longitude:"",markers:[],circles:[],controls:[]},locationClick:function(o){wx.getLocation({type:"wgs84",success:function(o){console.log(o),t.setData({latitude:o.latitude,longitude:o.longitude,markers:[{iconPath:"",id:0,latitude:o.latitude,longitude:o.longitude,width:0,height:0,title:"当前位置",callout:{padding:10,content:"当前位置",bgColor:"#DC143C",color:"#FFFF00",display:"ALWAYS"},label:{content:""},anchor:{}}]})}})},selectedClick:function(){wx.getSetting({success:function(t){console.log(t),console.log(t.authSetting),console.log(t.authSetting.scope),t.authSetting["scope.userInfo"]&&wx.getLocation({success:function(t){console.log(t),wx.getStorage({key:"storeInfo",success:function(t){wx.openLocation({latitude:1*t.data.storeInfoLongitude,longitude:1*t.data.storeInfoLatitude,name:t.data.storeInfoName,address:t.data.storeInfoAddress})}})}})}})},regionChange:function(t){if("end"==t.type){var o=this;this.mapCtx=wx.createMapContext("centerChange"),this.mapCtx.getCenterLocation({success:function(t){console.log(t),o.setData({latitude:t.latitude,longitude:t.longitude,markers:[{iconPath:"",id:0,latitude:t.latitude,longitude:t.longitude,width:0,height:0,title:"当前位置",callout:{padding:0,content:"当前位置",bgColor:"#DC143C",color:"#FFFF00",display:"ALWAYS"},label:{content:""},anchor:{}}]})}})}},controlClick:function(o){console.log(o),wx.getLocation({type:"wgs84",success:function(o){console.log(o),t.setData({latitude:o.latitude,longitude:o.longitude,markers:[{iconPath:"",id:0,latitude:o.latitude,longitude:o.longitude,width:0,height:0,title:"",callout:{padding:0,content:"",bgColor:"#DC143C",color:"#FFFF00",display:"ALWAYS"},label:{content:""},anchor:{}}]})}})},onLoad:function(o){t=this,e.getShareInfos(t,n),e.setCompanyId(t,o),e.setStoreId(t),wx.getLocation({type:"wgs84",success:function(o){console.log(o),t.setData({latitude:o.latitude,longitude:o.longitude,markers:[{iconPath:"",id:0,latitude:o.latitude,longitude:o.longitude,width:0,height:0,title:"",callout:{padding:0,content:"",bgColor:"#DC143C",color:"#FFFF00",display:"ALWAYS"},label:{content:""},anchor:{}}],circles:[{latitude:o.latitude,longitude:o.longitude,radius:10,strokeWidth:2,fillColor:"#FAFAD2",color:"#90EE90"}],controls:[{id:1001,position:{left:10,top:10,width:35,height:35},iconPath:"../../images/map.png",clickable:!0}]})}})},closeTk:function(){t.setData({displa:!1})},onShow:function(){t=this,wx.onSocketMessage(function(o){console.log("===========接收到服务器信息=============="),console.log(o.data),e.getTkInfos(t,o),e.playMusic(t,o)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(t){e.conSocket(t.data,n)}})})},onShareAppMessage:function(){return{title:t.data.shareTitle,desc:"",imageUrl:t.data.shareImgUrl,path:"/pages/index/index?storeId="+t.data.storeId+"&companyId="+t.data.companyId,success:function(t){console.log("转发成功")},fail:function(t){console.log("转发失败")}}},onUnload:function(){e.closeSock()}}); 
 			}); 	require("pages/map/map.js");
 		__wxRoute = 'pages/index/wifi/wifi';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/wifi/wifi.js';	define("pages/index/wifi/wifi.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=require("../../../utils/util.js"),o=getApp(),a=o.globalData.httpUrl;Page({data:{wifi_password:"",wifi_name:"",netWorkType:"",display:"none"},goToUser:function(){wx.switchTab({url:"/pages/index/index"})},onLoad:function(o){e=this,"1"==o.secondIn?e.setData({secondIn:!0}):e.setData({secondIn:!1});var s=decodeURIComponent(o.scene);if("undefined"!=s&&void 0!=s&&null!=s&&"null"!=s){var n=s.split(",")[0].replace('"',"");s.split(",")[1].replace('"',"");e.setData({scene:s,saoma:!0}),wx.request({url:a+"skstoremodel/findStoreById",data:{pid:n},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){e.setData({storeInfo:s.data}),wx.setStorage({key:"storeInfo",data:s.data}),wx.setStorage({key:"storeName",data:s.data.storeInfoName}),wx.setNavigationBarTitle({title:s.data.storeInfoName});var n=s.data.storeInfoStoreId;e.setData({storeId:n}),wx.setStorageSync("storeId",n),t.getShareInfos(e,a),e.resendIndex(n),t.getShareInfos(e,a),t.setCompanyId(e,o),t.setStoreId(e),t.setStoreInfo(e),t.getWifiDates(e,a)}})}else t.getShareInfos(e,a),t.setCompanyId(e,o),t.setStoreId(e),t.setStoreInfo(e),t.getWifiDates(e,a)},resendIndex:function(t){e.setData({dcFlg:!0,orderType:"D"}),wx.request({url:a+"skstoremodel/findCompanyByAppid",data:{xcxAppid:o.globalData.appId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.setStorage({key:"companyInfo",data:e.data}),wx.setStorage({key:"companyId",data:e.data.companyInfoId})}}),e.data.secondIn?wx.getStorage({key:"userId",success:function(e){e.data}}):wx.getStorage({key:"code",success:function(s){if(""!=s.data&&null!=s.data&&void 0!=s.data&&"undefined"!=s.data&&"null"!=s.data){e.setData({code:s.data});var n=s.data;wx.getSetting({success:function(s){if(s.authSetting["scope.userInfo"])console.log("============已授权==============="),wx.getUserInfo({success:function(s){e.setData({userInfo:s.userInfo}),wx.setStorage({key:"userName",data:s.userInfo.nickName}),wx.request({url:a+"skmembermodel/getOpenidS",data:{code:n,AppID:o.globalData.appId,Secret:o.globalData.Secret,storeUuid:t,wxUserNickName:s.userInfo.nickName,headImgUrl:e.data.userInfo.avatarUrl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var o=e.data.wechatUser.wechatUserId;if(null!=e.data.openid&&""!=e.data.openid){var a=e.data.wechatUser.wechatUserStoreIdentity;wx.setStorage({key:"StoreIdentity",data:a}),wx.setStorage({key:"session_key",data:e.data.session_key}),wx.setStorage({key:"openId",data:e.data.openid}),wx.setStorage({key:"userId",data:o}),wx.setStorage({key:"storeId",data:t})}else wx.showToast({title:"登录失败"})}})},fali:function(e){}});else{console.log("==============未授权=================");var i="";i=e.data.storeInfo.storeInfoHeadImgUrl,wx.reLaunch({url:"../../welcome/accredit/accredit?data="+n+"&store_uuid="+t+"&imgurl="+i+"&goWifi=true&scene="+e.data.scene,success:function(e){},fail:function(e){}})}},fail:function(e){}})}else wx.getStorage({key:"userId",success:function(o){if(o.data)o.data;else e.resendIndex(t)},fail:function(){e.resendIndex(t)}})},fail:function(o){e.resendIndex(t)}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(o){console.log("===========接收到服务器信息=============="),console.log(o.data),t.getTkInfos(e,o),t.playMusic(e,o)}),e=this,wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){t.conSocket(e.data,a)}})})},onHide:function(){},onUnload:function(){t.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return console.log("=========onShareAppMessage==========="),{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},btn_lianjie:function(t){""==e.data.wifi_name&&""==e.data.wifi_password?wx.showToast({title:"店铺未配置wifi"}):wx.getSystemInfo({success:function(t){console.log(t.platform+"系统"),console.log(t.system+"版本");var o="";if("android"==t.platform&&(o=parseInt(t.system.substr(8))),"ios"==t.platform&&(o=parseInt(t.system.substr(4))),console.log(o+"返回数虚拟无数"),"android"==t.platform&&o<6)wx.showToast({title:"系统版本过低"});else{if("ios"==t.platform&&o<11)return console.log("================版本低================"),void wx.showToast({title:"系统版本过低"});console.log("=================调用初始化==============="),e.startWifi()}}})},startWifi:function(){console.log("=================进入初始化===============");var e=this;wx.startWifi({success:function(){e.Connected()},fail:function(e){console.log(e.errMsg+"什么情况"),wx.showToast({title:"接口调用失败"})}})},Connected:function(){console.log("=================开始执行连接==============="),console.log("账号=======》"+e.data.wifi_name),console.log("密码=======》"+e.data.wifi_password),wx.connectWifi({SSID:e.data.wifi_name,password:e.data.wifi_password,success:function(e){console.log("=================连接成功==============="),wx.showToast({title:"wifi连接成功"})},fail:function(t){console.log("具体",t.errCode),console.log("=================连接失败==============="),console.log(t.errMsg+"怎末错了"),t.errCode&&e.setData({display:"block",titlename:"温馨提示",carname:"请打开WLAN!"})}})},chkOrder:function(t){wx.setClipboardData({data:e.data.wifi_password,success:function(e){}})}}); 
 			}); 	require("pages/index/wifi/wifi.js");
 		__wxRoute = 'pages/index/fellin/fellin';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/fellin/fellin.js';	define("pages/index/fellin/fellin.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=require("../../../utils/util.js"),a=getApp(),o=a.globalData.httpUrl;a.globalData.testhttpUrl;Page({data:{tableNum:"",minute:"",hotline:"",address:"",startTime:"",endTime:"",display:"none",select:!1,personNum:"2",selectArea:!1},bindShowMsg:function(){e=this;var t=this.data.selectArea;console.log(this.data.selectArea+"selectArea"),0==t?e.setData({select:!e.data.select,selectArea:!0}):e.setData({select:!e.data.select,selectArea:!1})},mySelect:function(t){e=this;var a=t.currentTarget.dataset.name;console.log("人数是几====》",a),e.setData({personNum:a,select:!1,selectArea:!1})},myS:function(t){(e=this).setData({select:!1,selectArea:!1})},goToUser:function(){wx.switchTab({url:"/pages/index/index"})},onLoad:function(a){e=this,t.getShareInfos(e,o),e.setData({queuingNumber:!0}),t.setStoreInfo(e),t.setUserId(e),t.setCompanyId(e,a),"1"==a.secondIn?e.setData({secondIn:!0}):e.setData({secondIn:!1});var s=decodeURIComponent(a.scene);if("undefined"!=s&&void 0!=s&&null!=s&&"null"!=s){var n=s.split(",")[0].replace('"',"");s.split(",")[1].replace('"',"");e.setData({scene:s,saoma:!0}),wx.request({url:o+"skstoremodel/findStoreById",data:{pid:n},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){e.setData({storeInfo:a.data}),wx.setStorage({key:"storeInfo",data:a.data}),wx.setStorage({key:"storeName",data:a.data.storeInfoName}),wx.setNavigationBarTitle({title:a.data.storeInfoName});var s=a.data.storeInfoStoreId;e.setData({storeId:s}),wx.setStorageSync("storeId",s),t.getShareInfos(e,o),e.resendIndex(s),wx.request({url:o+"skstoremodel/findStoreById",data:{storeId:s},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({hotline:t.data.storeInfoTelephoneNum,address:t.data.storeInfoAddress,startTime:t.data.storeInfoBusinessStartTime,endTime:t.data.storeInfoBusinessEndTime})}}),wx.getStorage({key:"openId",success:function(t){wx.request({url:o+"skordermodel/findlPersonNumLineUp",data:{storeId:s,openId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({tableNum:t.data.personNum,minute:t.data.lineUpTime})}})}}),wx.getStorage({key:"openId",success:function(e){wx.getStorage({key:"storeId",success:function(t){wx.request({url:o+"skordermodel/findlPersonNumLineUpByOpenId",data:{openId:e.data,storeId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log("===findlPersonNumLineUpByOpenId success==="),e.data>0&&wx.redirectTo({url:"/pages/index/fellin/queuingNumber/queuingNumber"})}})}})}})}})}else wx.getStorage({key:"storeId",success:function(t){e.setData({storeId:t.data}),wx.request({url:o+"skstoremodel/findStoreById",data:{storeId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({hotline:t.data.storeInfoTelephoneNum,address:t.data.storeInfoAddress,startTime:t.data.storeInfoBusinessStartTime,endTime:t.data.storeInfoBusinessEndTime})}})}}),wx.getStorage({key:"storeId",success:function(t){wx.getStorage({key:"openId",success:function(a){wx.request({url:o+"skordermodel/findlPersonNumLineUp",data:{storeId:t.data,openId:a.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({tableNum:t.data.personNum,minute:t.data.lineUpTime})}})}})}})},resendIndex:function(t){e.setData({dcFlg:!0,orderType:"D"}),wx.request({url:o+"skstoremodel/findCompanyByAppid",data:{xcxAppid:a.globalData.appId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.setStorage({key:"companyInfo",data:e.data}),wx.setStorage({key:"companyId",data:e.data.companyInfoId})}}),e.data.secondIn?wx.getStorage({key:"userId",success:function(e){e.data}}):wx.getStorage({key:"code",success:function(s){if(""!=s.data&&null!=s.data&&void 0!=s.data&&"undefined"!=s.data&&"null"!=s.data){e.setData({code:s.data});var n=s.data;wx.getSetting({success:function(s){if(s.authSetting["scope.userInfo"])console.log("============已授权==============="),wx.getUserInfo({success:function(s){e.setData({userInfo:s.userInfo}),wx.setStorage({key:"userName",data:s.userInfo.nickName}),wx.request({url:o+"skmembermodel/getOpenidS",data:{code:n,AppID:a.globalData.appId,Secret:a.globalData.Secret,storeUuid:t,wxUserNickName:s.userInfo.nickName,headImgUrl:e.data.userInfo.avatarUrl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var a=e.data.wechatUser.wechatUserId;if(null!=e.data.openid&&""!=e.data.openid){var o=e.data.wechatUser.wechatUserStoreIdentity;wx.setStorage({key:"StoreIdentity",data:o}),wx.setStorage({key:"session_key",data:e.data.session_key}),wx.setStorage({key:"openId",data:e.data.openid}),wx.setStorage({key:"userId",data:a}),wx.setStorage({key:"storeId",data:t})}else wx.showToast({title:"登录失败"})}})},fali:function(e){}});else{console.log("==============未授权=================");var d="";d=e.data.storeInfo.storeInfoHeadImgUrl,wx.reLaunch({url:"../../welcome/accredit/accredit?data="+n+"&store_uuid="+t+"&imgurl="+d+"&goPaidui=true&scene="+e.data.scene,success:function(e){},fail:function(e){}})}},fail:function(e){}})}else wx.getStorage({key:"userId",success:function(a){if(a.data)a.data;else e.resendIndex(t)},fail:function(){e.resendIndex(t)}})},fail:function(a){e.resendIndex(t)}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){t.conSocket(e.data,o)}})}),wx.onSocketMessage(function(a){console.log("收到服务器内容："),console.log(a),"skip"==a.data&&e.onLoad(),t.getTkInfos(e,a),t.playMusic(e,a)})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},qr:function(){e.setData({display:"block"})},resume:function(){e.setData({display:"none"})},queuingNumber:function(){e.data.queuingNumber&&(e.setData({queuingNumber:!1}),wx.getStorage({key:"openId",success:function(t){wx.getStorage({key:"storeId",success:function(a){wx.request({url:o+"skordermodel/insertLineUp",data:{storeId:a.data,openId:t.data,wechatUserId:e.data.userId,personNum:e.data.personNum},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.setStorage({key:"waitId",data:e.data.id}),wx.redirectTo({url:"../fellin/queuingNumber/queuingNumber"})}})}})}}))}}); 
 			}); 	require("pages/index/fellin/fellin.js");
 		__wxRoute = 'pages/index/destine/destine';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/destine/destine.js';	define("pages/index/destine/destine.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=require("../../../utils/util.js"),a=getApp(),o=a.globalData.httpUrl;Page({data:{storeName:"",storeTel:"",storeAddress:"",httpUrl:o,dates:"",times:"",tableCut:"",tableId:"",personNum:"",contractName:"",contractTel:"",textDesc:"",array:[],index:"",ydFlag:!1,date:"",opacity:.3,dateStart:t.formatDate(new Date),dateEnd:t.formatDate(new Date),dingdanFlg:!1,brandSlideUrls:[{imgurl:"/images/swiper1.jpg"},{imgurl:"/images/swiper1.jpg"},{imgurl:"/images/swiper1.jpg"}],swiperCurrent:0},chkUserFlag:function(t){var a=e.data.menus,o=!0;for(var r in a)a[r].buttonName==t&&"N"==a[r].menuStorePowerisUser&&(console.log(a[r].buttonName+" , "+a[r].menuStorePowerisUser),o=!1);return o},onLoad:function(a){e=this,t.getShareInfos(e,o),t.setCompanyId(e,a),"1"==a.secondIn?e.setData({secondIn:!0}):e.setData({secondIn:!1});var r=decodeURIComponent(a.scene);if("undefined"!=r&&void 0!=r&&null!=r&&"null"!=r){var s=r.split(",")[0].replace('"',"");r.split(",")[1].replace('"',"");e.setData({scene:r,saoma:!0}),wx.request({url:o+"skstoremodel/findStoreById",data:{pid:s},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){e.setData({storeInfo:a.data}),wx.setStorage({key:"storeInfo",data:a.data}),wx.setStorage({key:"storeName",data:a.data.storeInfoName}),wx.setNavigationBarTitle({title:a.data.storeInfoName});var r=a.data.storeInfoStoreId;e.setData({storeId:r}),wx.setStorageSync("storeId",r),t.getShareInfos(e,o),e.resendIndex(r)}})}else{var d=new Date,n=new Date(d);n.setDate(d.getDate()+30),console.log("=======date2========"),console.log(n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()),console.log(d>n),console.log("=======date2========"),e.setData({dateEnd:n}),wx.getStorage({key:"storeInfo",success:function(t){wx.setNavigationBarTitle({title:t.data.storeInfoName});var a=t.data.storeInfoBusinessStartTime.split(":")[0]+t.data.storeInfoBusinessStartTime.split(":")[1],o=t.data.storeInfoBusinessEndTime.split(":")[0]+t.data.storeInfoBusinessEndTime.split(":")[1];e.setData({storeInfoHeadImgUrl:t.data.storeInfoHeadImgUrl,storeName:t.data.storeInfoName,storeTel:t.data.storeInfoTelephoneNum,storeAddress:t.data.storeInfoAddress,timeStrat:t.data.storeInfoBusinessStartTime,timeEnd:t.data.storeInfoBusinessEndTime,time1:a,time2:o})}}),wx.getStorage({key:"storeId",success:function(t){e.setData({storeId:t.data})}}),wx.getStorage({key:"storeId",success:function(t){wx.request({url:o+"skstoremodel/getTableDate",data:{tableTypeStoreInfoStoreid:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({array:t.data})}})}})}if(e.setData({queuingNumber:!0}),a.orderId){var i=a.orderId;wx.request({url:o+"skordermodel/getOrderById",data:{orderType:"Y",id:i},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t.data),wx.setStorage({key:"orderId",data:t.data.id});var a=t.data.reservedEstimatedTime.split(" ");console.log(a);var o=a[0];console.log(o);var r=a[1];e.setData({dates:o,times:r,tableCut:t.data.tableName,personNum:t.data.reservedCount,contractName:t.data.reservedName,contractTel:t.data.reservedPhoneNum,textDesc:t.data.orderRemarke,orderCreateTimes:t.data.orderCreateTimes})}}),e.setData({dingdanFlg:!0})}},goToUser:function(){wx.switchTab({url:"/pages/index/index"})},loadOthers:function(a,r){wx.getStorage({key:"connectedSocket",success:function(e){e.data?console.log("============已有socket不连接============="):t.conSocket(r,o)}});var s=new Date,d=new Date(s);d.setDate(s.getDate()+30),console.log("=======date2========"),console.log(d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()),console.log(s>d),console.log("=======date2========"),e.setData({dateEnd:d}),wx.getStorage({key:"storeInfo",success:function(t){wx.setNavigationBarTitle({title:t.data.storeInfoName});var a=t.data.storeInfoBusinessStartTime.split(":")[0]+t.data.storeInfoBusinessStartTime.split(":")[1],o=t.data.storeInfoBusinessEndTime.split(":")[0]+t.data.storeInfoBusinessEndTime.split(":")[1];e.setData({storeInfoHeadImgUrl:t.data.storeInfoHeadImgUrl,storeName:t.data.storeInfoName,storeTel:t.data.storeInfoTelephoneNum,storeAddress:t.data.storeInfoAddress,timeStrat:t.data.storeInfoBusinessStartTime,timeEnd:t.data.storeInfoBusinessEndTime,time1:a,time2:o})}}),wx.getStorage({key:"storeId",success:function(t){e.setData({storeId:t.data})}}),wx.getStorage({key:"storeId",success:function(t){wx.request({url:o+"skstoremodel/getTableDate",data:{tableTypeStoreInfoStoreid:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({array:t.data})}})}}),wx.setStorage({key:"ydFlg",data:!0}),wx.setStorage({key:"dcFlg",data:!1}),wx.setStorage({key:"wmFlg",data:!1}),wx.setStorage({key:"carArray",data:[]}),console.log("222-------------------------"),wx.getStorage({key:"userId",success:function(t){console.log("userid------------------------------",t.data),wx.getStorage({key:"storeId",success:function(a){wx.request({url:o+"skordermodel/selUnpaidOrder",data:{wechatUserId:t.data,orderType:"Y",storeId:a.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){"操作成功！"==t.data.msg?t.data.count>0&&(wx.setStorage({key:"orderId",data:t.data.orderId}),wx.request({url:o+"skordermodel/getOrderById",data:{orderType:"Y",id:t.data.orderId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.error(e);var t="destine/destine";"1"==e.data.orderState?t="/pages/index/destine/waitReceipt/waitReceipt?orderId="+e.data.id+"&orderState=1&orderType=Y":"2"==e.data.orderState&&(t=e.data.foodList.length>0?"/pages/index/takeOut/takeOut?flag=Y&orderId="+e.data.id+"&editType=N":"/pages/index/destine/Receipt/Receipt?flag=Y&orderId="+e.data.id+"&editType=N&orderState=2"),wx.redirectTo({url:t})}})):e.setData({displayy:"block",titlename:"获取未支付订单操作失败",carname:"请联系后台管理员"})}})}})}})},resendIndex:function(t){e.setData({dcFlg:!0,orderType:"D"}),wx.request({url:o+"skstoremodel/findCompanyByAppid",data:{xcxAppid:a.globalData.appId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.setStorage({key:"companyInfo",data:e.data}),wx.setStorage({key:"companyId",data:e.data.companyInfoId})}}),e.data.secondIn?wx.getStorage({key:"userId",success:function(a){var o=a.data;e.loadOthers(t,o)}}):wx.getStorage({key:"code",success:function(r){if(""!=r.data&&null!=r.data&&void 0!=r.data&&"undefined"!=r.data&&"null"!=r.data){e.setData({code:r.data});var s=r.data;wx.getSetting({success:function(r){if(r.authSetting["scope.userInfo"])console.log("============已授权==============="),wx.getUserInfo({success:function(r){e.setData({userInfo:r.userInfo}),wx.setStorage({key:"userName",data:r.userInfo.nickName}),wx.request({url:o+"skmembermodel/getOpenidS",data:{code:s,AppID:a.globalData.appId,Secret:a.globalData.Secret,storeUuid:t,wxUserNickName:r.userInfo.nickName,headImgUrl:e.data.userInfo.avatarUrl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var o=a.data.wechatUser.wechatUserId;if(null!=a.data.openid&&""!=a.data.openid){var r=a.data.wechatUser.wechatUserStoreIdentity;wx.setStorage({key:"StoreIdentity",data:r}),wx.setStorage({key:"session_key",data:a.data.session_key}),wx.setStorage({key:"openId",data:a.data.openid}),wx.setStorage({key:"userId",data:o}),wx.setStorage({key:"storeId",data:t}),e.loadOthers(t,o)}else wx.showToast({title:"登录失败"})}})},fali:function(e){}});else{console.log("==============未授权=================");var d="";d=e.data.storeInfo.storeInfoHeadImgUrl,wx.reLaunch({url:"../../welcome/accredit/accredit?data="+s+"&store_uuid="+t+"&imgurl="+d+"&goYuding=true&scene="+e.data.scene,success:function(e){},fail:function(e){}})}},fail:function(e){}})}else wx.getStorage({key:"userId",success:function(a){if(a.data){var o=a.data;e.loadOthers(t,o)}else e.resendIndex(t)},fail:function(){e.resendIndex(t)}})},fail:function(a){e.resendIndex(t)}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(a){console.log("===========接收到服务器信息=============="),console.log(a.data),t.getTkInfos(e,a),t.playMusic(e,a)}),console.log("onshow"),e.consocket()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},consocket:function(){console.log("111111"),wx.onSocketOpen(function(e){wx.setStorage({key:"connectedSocket",data:!0}),console.log("WebSocket连接已打开！"),console.log(e)}),wx.onSocketClose(function(e){console.log("WebSocket连接已关闭！"),wx.getStorage({key:"userId",success:function(e){t.conSocket(e.data,o)},fail:function(){console.log("连接socket失败"),wx.setStorage({key:"connectedSocket",data:!1})}})}),wx.onSocketError(function(e){console.log("WebSocket连接打开失败，请检查！"),console.log(e),wx.setStorage({key:"connectedSocket",data:!1})})},bindDateChange:function(t){console.log("============",t),this.setData({dates:t.detail.value}),e.checkToClick()},bindTimeChange:function(t){this.setData({times:t.detail.value}),e.checkToClick()},bindCasPickerChange:function(t){this.setData({index:t.detail.value,tableCut:this.data.array[t.detail.value].tableTypeName,tableId:this.data.array[t.detail.value].tableTypeId}),e.checkToClick()},bindInputNum:function(t){this.setData({personNum:t.detail.value}),e.checkToClick()},bindInputName:function(t){this.setData({contractName:t.detail.value}),e.checkToClick()},bindInputTel:function(t){this.setData({contractTel:t.detail.value}),a.globalData.contractTel=t.detail.value,e.checkToClick()},bindTextAreaBlur:function(t){this.setData({textDesc:t.detail.value}),e.checkToClick()},checkToClick:function(){""!=e.data.dates&&""!=e.data.contractName&&""!=e.data.times&&""!=e.data.tableCut&&""!=e.data.contractTel?e.setData({opacity:1}):e.setData({opacity:.3})},waitReceipt:function(t){if(e.data.queuingNumber)if(e.setData({queuingNumber:!1}),1==e.data.dingdanFlg){var a=e.data.dates,s=(p=e.data.times).split(":")[0]+p.split(":")[1];console.log("==============="),console.log(s),console.log(e.data.time1),console.log(e.data.time2),console.log("================");var d=e.data.tableCut,n=e.data.personNum,i=e.data.contractName,c=e.data.contractTel,u=(e.data.textDesc,r(new Date));console.log("Riqi ==>"+u);w=a+" "+p;console.log("ShiJian ==>"+w);var l=/^\d{0,2}$/,g=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,m=/^[1-9]\d*$/;null==a||""==a?(e.setData({popErrorMsg:"请选择日期",queuingNumber:!0}),e.ohShitfadeOut()):null==p||""==p?(e.setData({popErrorMsg:"请选择时间",queuingNumber:!0}),e.ohShitfadeOut()):u>=w?(e.setData({popErrorMsg:"预定时间已过",queuingNumber:!0}),e.ohShitfadeOut()):e.data.time1>e.data.time2&&e.data.time1>s&&e.data.time2<s?(e.setData({popErrorMsg:"不在营业时间",queuingNumber:!0}),e.ohShitfadeOut()):e.data.time1<e.data.time2&&e.data.time1>s?(e.setData({popErrorMsg:"不在营业时间",queuingNumber:!0}),e.ohShitfadeOut()):e.data.time1<e.data.time2&&e.data.time2<s?(e.setData({popErrorMsg:"不在营业时间",queuingNumber:!0}),e.ohShitfadeOut()):null==d||""==d?(e.setData({popErrorMsg:"请选择桌型",queuingNumber:!0}),e.ohShitfadeOut()):null==n||""==n?(e.setData({popErrorMsg:"用餐人数不能为空",queuingNumber:!0}),e.ohShitfadeOut()):m.test(n)?l.test(n)?null==i||""==i?(e.setData({popErrorMsg:"联系人不能为空",queuingNumber:!0}),e.ohShitfadeOut()):null==c||""==c?(e.setData({popErrorMsg:"联系电话不能为空",queuingNumber:!0}),e.ohShitfadeOut()):g.test(c)?wx.getStorage({key:"orderId",success:function(t){var a=t.data;wx.request({url:o+"skordermodel/updReservedOrder",data:{orderState:"1",id:t.data,reservedEstimatedTime:e.data.dates+" "+e.data.times,orderTableId:e.data.tableId,reservedCount:e.data.personNum,reservedName:e.data.contractName,reservedPhoneNum:e.data.contractTel,orderRemarke:e.data.textDesc},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){wx.setStorage({key:"orderId",data:a}),wx.setStorage({key:"orderDate",data:e.data.dates}),wx.setStorage({key:"orderTime",data:e.data.times}),wx.setStorage({key:"orderTable",data:e.data.tableCut}),wx.setStorage({key:"orderPersonNumber",data:e.data.personNum}),wx.setStorage({key:"orderContractName",data:e.data.contractName}),wx.setStorage({key:"orderContractTel",data:e.data.contractTel}),wx.setStorage({key:"orderDesc",data:e.data.textDesc}),wx.redirectTo({url:"waitReceipt/waitReceipt"})}})}}):(e.setData({popErrorMsg:"电话号码错误",queuingNumber:!0}),e.ohShitfadeOut()):(e.setData({popErrorMsg:"用餐人数填写2位以内",queuingNumber:!0}),e.ohShitfadeOut()):(e.setData({popErrorMsg:"用餐人数必须是数字",queuingNumber:!0}),e.ohShitfadeOut())}else{var a=e.data.dates,p=e.data.times,f=p.split(":")[0]+p.split(":")[1];console.log("==============="),console.log(f),console.log(e.data.time1),console.log(e.data.time2),console.log("================");var d=e.data.tableCut,n=e.data.personNum,i=e.data.contractName,c=e.data.contractTel,u=(e.data.textDesc,r(new Date));console.log("Riqi ==>"+u);var w=a+" "+p;console.log("ShiJian ==>"+w);var l=/^\d{0,2}$/,g=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,m=/^[1-9]\d*$/;null==a||""==a?(e.setData({popErrorMsg:"请选择正确日期",queuingNumber:!0}),e.ohShitfadeOut()):null==p||""==p?(e.setData({popErrorMsg:"请选择正确时间",queuingNumber:!0}),e.ohShitfadeOut()):e.data.time1>e.data.time2&&e.data.time1>f&&e.data.time2<f?(e.setData({popErrorMsg:"不在营业时间",queuingNumber:!0}),e.ohShitfadeOut()):e.data.time1<e.data.time2&&e.data.time1>f?(e.setData({popErrorMsg:"不在营业时间",queuingNumber:!0}),e.ohShitfadeOut()):e.data.time1<e.data.time2&&e.data.time2<f?(e.setData({popErrorMsg:"不在营业时间",queuingNumber:!0}),e.ohShitfadeOut()):u>=w?(e.setData({popErrorMsg:"预定时间已过",queuingNumber:!0}),e.ohShitfadeOut()):null==d||""==d?(e.setData({popErrorMsg:"请选择桌型",queuingNumber:!0}),e.ohShitfadeOut()):null==n||""==n?(e.setData({popErrorMsg:"用餐人数不能为空",queuingNumber:!0}),e.ohShitfadeOut()):m.test(n)?l.test(n)?null==i||""==i?(e.setData({popErrorMsg:"联系人不能为空",queuingNumber:!0}),e.ohShitfadeOut()):null==c||""==c?(e.setData({popErrorMsg:"联系电话不能为空",queuingNumber:!0}),e.ohShitfadeOut()):g.test(c)?wx.getStorage({key:"storeId",success:function(t){wx.getStorage({key:"userId",success:function(a){wx.request({url:o+"skordermodel/insertReservedOrder",data:{wechatUserId:a.data,storeId:t.data,reservedEstimatedTime:e.data.dates+" "+e.data.times,orderTableId:e.data.tableId,reservedCount:e.data.personNum,reservedName:e.data.contractName,reservedPhoneNum:e.data.contractTel,orderRemarke:e.data.textDesc},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){wx.setStorage({key:"orderId",data:t.data.jsonEntity}),wx.setStorage({key:"orderDate",data:e.data.dates}),wx.setStorage({key:"orderTime",data:e.data.times}),wx.setStorage({key:"orderTable",data:e.data.tableCut}),wx.setStorage({key:"orderPersonNumber",data:e.data.personNum}),wx.setStorage({key:"orderContractName",data:e.data.contractName}),wx.setStorage({key:"orderContractTel",data:e.data.contractTel}),wx.setStorage({key:"orderDesc",data:e.data.textDesc}),wx.redirectTo({url:"waitReceipt/waitReceipt"})}})}})}}):(e.setData({popErrorMsg:"电话号码错误",queuingNumber:!0}),e.ohShitfadeOut()):(e.setData({popErrorMsg:"用餐人数填写2位以内",queuingNumber:!0}),e.ohShitfadeOut()):(e.setData({popErrorMsg:"用餐人数必须是数字",queuingNumber:!0}),e.ohShitfadeOut())}},ohShitfadeOut:function(){var t=setTimeout(function(){e.setData({popErrorMsg:""}),clearTimeout(t)},3e3)}});var r=function(e){var t=e.getFullYear(),a=e.getMonth()+1,o=e.getDate(),r=e.getHours(),d=e.getMinutes();return[t,a,o].map(s).join("-")+" "+[r,d].map(s).join(":")},s=function(e){return(e=e.toString())[1]?e:"0"+e};module.exports={formatTime:r}; 
 			}); 	require("pages/index/destine/destine.js");
 		__wxRoute = 'pages/index/takeOut/takeOutSM';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/takeOut/takeOutSM.js';	define("pages/index/takeOut/takeOutSM.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var t,a=require("../../../utils/util.js"),o=getApp(),r=o.globalData.httpUrl;Page({data:{dcBeizhu:"",display:"none",indx:0,displays:"none",clicked:!1,guigetogFlg:"block",guigetogFlg1:"none",guige:!1,borderLeft:"4px solid #ffbf1f",leftBorder:[],cdFlg:"block",cdFlg1:"block",tcFlg:"none",tcFlg1:"flex",tcFlg2:"absolute",a:"",httpUrl:r,cartUrl:"../../../images/notShopping.png",bcgcolor:"#333",colo:"#999",naviFlg:!1,goods:[],toView:"",scrollTop:100,qisongfei:20,distriFeePrice:3,totalPrice:0,totalCount:0,canhefei:0,carArray:[],minPrice:0,editType:"N",payDesc:"",fold:!0,selectFoods:[{price:20,count:2}],cartShow:"none",status:0,url:"",showPopup:!1,pageBackgroundColor:"#333",wmFlg:!1,disp:"none",deskNum:"",dcFlg:!1,catalogSelect:0,huodongs:[],orderId:"",displayy:"none",zhuohaoHidden:!1},onLoad:function(e){t=this,wx.setStorage({key:"dc",data:1}),t.empty(),wx.setStorage({key:"editType",data:"N"}),wx.setStorageSync("carArray",[]),wx.setStorageSync("goods",[]),"1"==e.secondIn?t.setData({secondIn:!0}):t.setData({secondIn:!1}),a.setCompanyId(t,e),wx.setStorage({key:"dcBeizhu",data:""});var o=decodeURIComponent(e.scene);if("undefined"!=o&&void 0!=o&&null!=o&&"null"!=o){var d=o.split(",")[0].replace('"',"");console.log("====pid====="),console.log(d);var n=o.split(",")[1].replace('"',"");wx.setStorage({key:"currentTab",data:1}),t.setData({scene:o,zuohao:n,zhuohaoHidden:!0}),wx.request({url:r+"skstoremodel/findStoreById",data:{pid:d},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.setData({storeInfo:e.data}),wx.setStorage({key:"storeInfo",data:e.data}),wx.setStorage({key:"storeName",data:e.data.storeInfoName}),wx.setNavigationBarTitle({title:e.data.storeInfoName});var o=e.data.storeInfoStoreId;t.setData({storeId:o}),wx.setStorageSync("storeId",o),a.getShareInfos(t,r),wx.setStorage({key:"orderType",data:"D"}),wx.setStorage({key:"dcFlg",data:!0}),wx.setStorage({key:"ydFlg",data:!1}),wx.setStorage({key:"wmFlg",data:!1}),t.setData({wmFlg:!1,ydFlg:!1,dcFlg:!0,editType:"N",flag:"D"}),t.resendIndex(o)}})}else console.log("=======scene未获取========");wx.setStorage({key:"couponInfo",data:""})},selguige:function(e){var a=e.currentTarget.dataset.foodSize,o=e.currentTarget.dataset.indx,r=e.currentTarget.dataset.guigeIndex,d=e.currentTarget.dataset.foodsizelist,n=[],s=[];for(var i in d)n[i]="#666",s[i]="#efefef";n[r]="#ffbf21",s[r]="#35343a",t.setData({foodSize:a,foodSizeList:d,bgColors:n,colors:s,indx:o})},xuanguige:function(e){var a=e.currentTarget.dataset.foodCount,o=e.currentTarget.dataset.foodPrice,r=e.currentTarget.dataset.foodId,d=[],n=[];d[0]="#ffbf21",n[0]="#35343a",t.setData({guige:r,foodCount:a,foodPrice:o,indx:0,bgColors:d,colors:n,cdFlg1:"none"})},togguige:function(){t.setData({guigetogFlg:"none",guigetogFlg1:"block"})},resum:function(){t.setData({guige:!1,cdFlg1:"block"})},changeColor:function(){var e=(this.data.pageBackgroundColor,"#ffbf1f");this.setData({pageBackgroundColor:e})},chooseCatalog:function(e){t.setData({catalogSelect:e.currentTarget.dataset.select})},empty:function(a){var o,r=t.data.goods;for(var d in r)for(var n in r[d].foodList)if(r[d].foodList[n].foodCount=0,r[d].foodList[n].foodSizeList.length>0)for(var s in r[d].foodList[n].foodSizeList)r[d].foodList[n].foodSizeList[s].foodSizeCount=0;t.setData((o={goods:r,cartShow:"none",fold:!0,clickAble:!1,cartUrl:"../../../images/notShopping.png",bcgcolor:"#333",colo:"#999",naviFlg:!1,totalPrice:0,totalCount:0},e(o,"totalPrice",0),e(o,"carArray",[]),o))},calTotalPrice:function(){for(var e=t.data.carArray,a=0,o=0,r=0,d=t.data.distriFeePrice,n=0;n<e.length;n++)a+=1*e[n].price,o+=1*e[n].receivablePrice,r+=1*e[n].num;var s=a;t.setData({finalPrice:parseFloat(s).toFixed(2),totalReceivablePrice:parseFloat(o).toFixed(2),totalPrice:parseFloat(a).toFixed(2),totalCount:r,distriFeePrice:parseFloat(d).toFixed(2)})},bindBeizhu:function(e){var a=e.detail.value;null==a||void 0==a||"undefined"==a||"null"==a?t.setData({dcBeizhu:""}):t.setData({dcBeizhu:a}),wx.setStorage({key:"dcBeizhu",data:a})},toggleList:function(){if(t.data.totalCount){t.setData({fold:!t.data.fold});var e=t.data.fold;t.cartShow(e)}},cartShow:function(e){0==e?t.setData({cartShow:"block"}):t.setData({cartShow:"none"})},resume:function(){t.setData({disp:"none",display:"none"})},fixNull:function(e){return null==e&&(e=""),e},togglePopup:function(e){wx.setStorage({key:"foodId",data:e.currentTarget.dataset.foodId}),wx.setStorage({key:"carArray",data:t.data.carArray}),wx.setStorage({key:"goods",data:t.data.goods}),wx.navigateTo({url:"queryOrder/queryOrder?orderId"+t.data.orderId})},tohuodongs:function(e){wx.setStorage({key:"carArray",data:t.data.carArray}),wx.setStorage({key:"foodId",data:e.currentTarget.dataset.foodId}),wx.setStorage({key:"goods",data:t.data.goods}),wx.navigateTo({url:"queryFood/queryFood?orderId="+t.data.orderId})},onReady:function(){},closeTk:function(){t.setData({displa:!1})},onShow:function(){t=this,wx.setStorage({key:"dc",data:1}),wx.getStorage({key:"goods",success:function(e){t.setData({goods:e.data})}}),console.log(t.data.back),t.data.back&&t.setData({back:!1}),wx.onSocketMessage(function(e){console.log("===========接收到服务器信息=============="),console.log(e.data),a.getTkInfos(t,e),a.playMusic(t,e)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){a.conSocket(e.data,r)}})}),wx.getStorage({key:"carArray",success:function(e){t.setData({carArray:e.data}),t.changeFoodOnBack(),t.calTotalPrice(),t.data.totalCount>0&&t.setData({cartUrl:"../../../images/shopping.png"}),0==t.data.carArray.length?(t.changeSubmit(!1),t.setData({clickAble:!1,cartUrl:"../../../images/notShopping.png"})):(t.changeSubmit(!0),t.setData({clickAble:!0,cartUrl:"../../../images/shopping.png"}))}}),wx.getStorage({key:"goods",success:function(e){t.setData({goods:e.data})}})},onHide:function(){t.setData({back:!0,twoma:!0}),console.log(t.data.back)},onUnload:function(){a.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),t=this;var e={scene:""};setTimeout(function(){t.onLoad(e)},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.data.shareTitle,desc:"",imageUrl:t.data.shareImgUrl,path:"/pages/index/index?storeId="+t.data.storeId+"&companyId="+t.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},bindDesk:function(e){t.setData({deskNum:e.detail.value,zuohao:e.detail.value}),wx.setStorage({key:"deskNum",data:e.detail.value})},togBorder:function(e){for(var a=e.currentTarget.dataset.itemindex,o=[],r=0;r<t.data.goods.length;r++)o[r]="none";o[a]="4px solid #ffbf1f",t.setData({leftBorder:o,borderLeft:"none"});var d=e.currentTarget.dataset.itemIndex;t.setData({toView:"order"+d,key:e.currentTarget.dataset.itemIndex})},togBorder1:function(e){for(var a=[],o=0;o<t.data.goods.length;o++)a[o]="none";t.setData({leftBorder:a,borderLeft:"4px solid #ffbf1f"});var r=e.currentTarget.dataset.itemIndex;t.setData({toView:"order"+r,key:e.currentTarget.dataset.itemIndex})},gotype:function(e){var a=e.detail.scrollTop;t.getFoodType(a)},tolower:function(e){},getFoodType:function(e){var a=t.data.goods,o=0,r=t.data.huodongHeight;if(e<=r){for(var d=[],n=0;n<t.data.goods.length;n++)d[n]="none";t.setData({leftBorder:d,borderLeft:"4px solid #ffbf1f"})}else{var s=parseInt((e-r)/84);for(var i in a)if(o+=a[i].foodList.length,s<o&&o>0){for(var c=[],l=0;l<t.data.goods.length;l++)c[l]="none";return c[i]="4px solid #ffbf1f",void t.setData({leftBorder:c,borderLeft:"none"})}}},changeSubmit:function(e){e?t.setData({bcgcolor:"#ffbf21",colo:"#3f3d40",payDesc:"下单"}):(wx.getStorage({key:"wmFlg",success:function(e){if(e.data){var a=t.data.storeInfo.storeInfoCharging;null!=a&&void 0!=a&&""!=a||(a=0),t.setData({payDesc:"￥"+a+"起送"})}else t.setData({payDesc:"下单"})}}),t.setData({bcgcolor:"#333",colo:"#999"}))},addCount:function(e){t.setFoodInfo(e,1)},minusCount:function(e){t.setFoodInfo(e,-1)},changeFoodOnBack:function(){var e=t.data.goods;t.setData({goods:e})},setFoodInfo:function(e,a){var o=e.currentTarget.dataset.foodId,r=e.currentTarget.dataset.typeId,d=e.currentTarget.dataset.foodSize,n=t.data.goods,s=n.find(function(e){return e.id==r}).foodList,i=s.find(function(e){return o==e.id});if(!i)for(var c in s)if(d=s[c].foodSizeList.find(function(e){return e.id==o})){i=s.find(function(e){return d.foodId==e.id});break}var l=void 0,u=0,f="",g=0,p=0;i.foodSizeList.length>0?(l=i.foodSizeList.find(function(e){return e.id==d.id}),o=l.id,f=i.foodName+"("+l.name+")",l.foodSizeCount=1*l.foodSizeCount+a<0?0:1*l.foodSizeCount+a,p=l.foodSizeCount<0?0:l.foodSizeCount,"0"==l.discountFlg?(u=t.data.wmFlg?l.priceW:l.priceT,g=t.data.wmFlg?l.priceW:l.priceT):(u=t.data.wmFlg?l.priceWZ:l.priceTZ,g=t.data.wmFlg?l.priceWZ:l.priceTZ)):(f=i.foodName,i.foodCount=1*i.foodCount+a,p=i.foodCount,g=t.data.wmFlg?i.priceW:i.priceT,u="0"==i.discountFlg?t.data.wmFlg?i.priceW:i.priceT:t.data.wmFlg?i.priceWZ:i.priceTZ),t.refreshShopingCar(o,u,p,f,r,g);var y=t.data.carArray;0==i.foodCount&&0==y.length?(t.changeSubmit(!1),t.setData({goods:n,clickAble:!1,cartUrl:"../../../images/notShopping.png"})):(t.changeSubmit(!0),t.setData({goods:n,clickAble:!0,cartUrl:"../../../images/shopping.png"}))},refreshShopingCar:function(e,a,o,r,d,n){var s=t.data.carArray,i=void 0,c=s.find(function(t){return t.foodId==e});if(c){c.foodId=e;var l=a*o,u=n*o;if(c.price=l.toFixed(2),c.receivablePrice=u.toFixed(2),c.num=o,c.name=r,0==o){for(var f=0,g=0;g<s.length;g++)e==s[g].foodId&&(f=g);s.splice(f,1),0==s.length&&(t.setCarShowSate(!1),t.setData({cartUrl:"../../../images/notShopping.png"}))}}else o>0&&(i={foodId:e,price:a.toFixed(2),num:o,name:r,typeId:d,receivablePrice:n},s.push(i));t.calTotalPrice(),t.setData({carArray:s})},sendOrderzuo:function(){var e=t.data.zuohao;if(console.log(e+"====zuohao====>"),t.data.dcFlg){if(e=t.data.deskNum,console.log(e+"====zuohao====>"),""==e||null==e||void 0==e)return void t.setData({displayy:"block",titlename:"提示",carname:"请输入桌号"});t.setData({disp:"none",displays:"block"})}},chkOrder:function(){if(t.setData({display:"none"}),console.log("=====chkOrder开始======"),t.data.dcFlg||"D"==t.data.flag){t.setData({disp:"block"});var e=t.data.zuohao;console.log(e+"=====>"),null==e||""==e?t.setData({disp:"block"}):(console.log(e+"===zuohao===>"),t.setData({deskNum:e}),wx.setStorage({key:"deskNum",data:e}))}else t.sendOrder()},dianqx:function(){t.setData({displays:"none"}),t.setData({over:"auto"})},sendOrder:function(e,a){if(a=t.data.zuohao,t.data.dcFlg)if(a)wx.getStorage({key:"userId",success:function(e){var o=e.data;wx.getStorage({key:"storeId",success:function(e){var d=e.data;wx.getStorage({key:"orderType",success:function(e){var n=e.data,s=[];for(var i in t.data.goods)!function(e){var a=t.data.goods[e].foodList;for(var o in a)!function(e){if(a[e].foodSizeList.length>0)for(var o in t.data.carArray)for(var r in a[e].foodSizeList)a[e].foodSizeList[r].id==t.data.carArray[o].foodId&&a[e].foodSizeList[r].foodSizeCount>0&&(s.find(function(t){return t.id==a[e].id})||s.push(a[e]));else for(var d in t.data.carArray)a[e].id==t.data.carArray[d].foodId&&s.push(a[e])}(o)}(i);wx.request({url:r+"skordermodel/insertOrderInfo",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{wechatUserId:o,storeId:d,orderTableId:a,orderReceivablePrice:t.data.totalReceivablePrice,orderRealPrice:t.data.totalPrice,orderType:e.data,foodList:JSON.stringify(s),id:t.data.orderId},success:function(e){t.data.wmFlg?wx.redirectTo({url:"../order/evalOrder/submitOrder/submitOrder?orderId="+e.data.jsonEntity+"&orderType="+n}):wx.redirectTo({url:"../order/evalOrder/evalOrder?orderId="+e.data.jsonEntity+"&orderType="+n})},fail:function(e){wx.showToast({title:"下单失败"})}})}})}})}});else if(""==(a=t.data.deskNum)||null==a||void 0==a)return void t.setData({displayy:"block",titlename:"提示",carname:"请输入桌号"})},setCarShowSate:function(e){e?t.setData({cartShow:"block"}):t.setData({cartShow:"none"})},util:function(e){var t=wx.createAnimation({duration:200,timingFunction:"linear",delay:0});this.animation=t,t.opacity(0).rotateX(-100).step(),this.setData({animationData:t.export()}),setTimeout(function(){t.opacity(1).rotateX(0).step(),this.setData({animationData:t}),"close"==e&&this.setData({showModalStatus:!1})}.bind(this),200),"open"==e&&this.setData({showModalStatus:!0})},askFor:function(){"#ffbf21"==t.data.bcgcolor?wx.getStorage({key:"userId",success:function(e){wx.getStorage({key:"storeId",success:function(a){wx.getStorage({key:"orderType",success:function(o){wx.request({url:r+"skordermodel/selUnpaidOrder",data:{wechatUserId:e.data,orderType:o.data,storeId:a.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){"操作成功！"==e.data.msg?e.data.count>0&&"N"!=t.data.editType?t.setData({display:"block",orderId:e.data.orderId}):t.chkOrder():t.setData({displayy:"block",titlename:"获取未支付订单操作失败",carname:"请联系后台管理员"})}})}})}})}}):t.setData({displayy:"block",titlename:"提示",carname:"当前没有点餐，不可下单"})},resendIndex:function(e){t.setData({dcFlg:!0,orderType:"D"}),wx.request({url:r+"skstoremodel/findCompanyByAppid",data:{xcxAppid:o.globalData.appId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.setStorage({key:"companyInfo",data:e.data}),wx.setStorage({key:"companyId",data:e.data.companyInfoId})}}),t.data.secondIn?wx.getStorage({key:"userId",success:function(a){var o=a.data;t.loadOthers(e,o)}}):wx.getStorage({key:"code",success:function(a){if(""!=a.data&&null!=a.data&&void 0!=a.data&&"undefined"!=a.data&&"null"!=a.data){t.setData({code:a.data});var d=a.data;wx.getSetting({success:function(a){if(a.authSetting["scope.userInfo"])console.log("============已授权==============="),wx.getUserInfo({success:function(a){t.setData({userInfo:a.userInfo}),wx.setStorage({key:"userName",data:a.userInfo.nickName}),wx.request({url:r+"skmembermodel/getOpenidS",data:{code:d,AppID:o.globalData.appId,Secret:o.globalData.Secret,storeUuid:e,wxUserNickName:a.userInfo.nickName,headImgUrl:t.data.userInfo.avatarUrl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var o=a.data.wechatUser.wechatUserId;if(null!=a.data.openid&&""!=a.data.openid){var r=a.data.wechatUser.wechatUserStoreIdentity;wx.setStorage({key:"StoreIdentity",data:r}),wx.setStorage({key:"session_key",data:a.data.session_key}),wx.setStorage({key:"openId",data:a.data.openid}),wx.setStorage({key:"userId",data:o}),wx.setStorage({key:"storeId",data:e}),t.loadOthers(e,o)}else wx.showToast({title:"登录失败"})}})},fali:function(e){}});else{console.log("==============未授权=================");var n="";n=t.data.storeInfo.storeInfoHeadImgUrl,wx.reLaunch({url:"../../welcome/accredit/accredit?data="+d+"&store_uuid="+e+"&imgurl="+n+"&goDiancan=true&scene="+t.data.scene,success:function(e){},fail:function(e){}})}},fail:function(e){}})}else wx.getStorage({key:"userId",success:function(a){if(a.data){var o=a.data;t.loadOthers(e,o)}else t.resendIndex(e)},fail:function(){t.resendIndex(e)}})},fail:function(a){t.resendIndex(e)}})},loadOthers:function(e,o){wx.setStorage({key:"code",data:""}),t.setData({code:""}),wx.getStorage({key:"connectedSocket",success:function(e){e.data?console.log("============已有socket不连接============="):a.conSocket(o,r)}}),wx.getStorage({key:"companyId",success:function(a){wx.request({url:r+"skmembermodel/updatVipCardStore",data:{wechatUserId:o,wechatUserStoreStoreInfoStoreId:e,companyId:a.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){}}),wx.request({url:r+"skmembermodel/updatEquitycardStore",data:{wxUserId:o,storeId:e,companyId:a.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){wx.request({url:r+"skfoodmodel/selFoodActivityByStoreId",data:{storeId:e},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var a=85*e.data.length;t.setData({huodongs:e.data,huodongHeight:a})}}),wx.request({url:r+"skfoodmodel/selFoodTypeAndFood",data:{storeId:e},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var a=e.data;t.setData({goods:a}),wx.setStorage({key:"goods",data:a})}})}})}})}}); 
 			}); 	require("pages/index/takeOut/takeOutSM.js");
 		__wxRoute = 'pages/index/takeOut/queryOrder/queryOrder';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/takeOut/queryOrder/queryOrder.js';	define("pages/index/takeOut/queryOrder/queryOrder.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function o(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}var e,t=require("../../../../utils/util.js"),a=getApp(),r=a.globalData.httpUrl;a.globalData.testhttpUrl;Page({data:{displayy_0:"none",displayy_1:"none",dcBeizhu:"",scroFlag:"",totalCount:0,cartShow:"none",count:0,indx1:"",cartUrl:"../../../../images/notShopping.png",clicked:"block",httpUrl:r,price:0,disp:"none",display:"none",displayy:"none",clickabled:!0,emptyed:!1,orderId:"",pingfen:"5",zuohao:""},onLoad:function(o){(e=this).empty(),t.getShareInfos(e,r),t.setCompanyId(e,o),t.setStoreId(e),t.setStoreInfo(e),console.log("===queryOrder onLoad start==="),o.orderId&&e.setData({orderId:o.orderId}),e.setData({yhtj:o.yhtj,yhtjindex:o.yhtjindex}),wx.getStorage({key:"zuohao",success:function(o){e.setData({deskNum:o.data})}}),wx.getStorage({key:"goods",success:function(o){e.setData({goods:o.data})}}),wx.getStorage({key:"dcFlg",success:function(o){e.setData({dcFlg:o.data})}}),wx.getStorage({key:"ydFlg",success:function(o){e.setData({ydFlg:o.data})}}),wx.getStorage({key:"wmFlg",success:function(o){e.setData({wmFlg:o.data})}}),console.log("wf------",e.data.wmFlg),wx.getStorage({key:"foodId",success:function(o){wx.request({url:r+"skfoodmodel/wxFoodInfoById",data:{id:o.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){var t=o.data.foodRatedFoodStartLevel;e.setStart(t),e.setData({food:o.data,starurls:e.data.starurls,foodSrc:o.data.imgUrl,descriptionText:o.data.introduce,yhtjTitle:o.data.foodName,monthSales:o.data.monthCount}),e.setInitGuige(),console.log("food ==> "),console.log(o.data),wx.getStorage({key:"carArray",success:function(o){var t=o.data;t&&t.length>0&&(e.setData({carArray:t,cartUrl:"../../../../images/shopping.png"}),e.calTotalPrice()),e.setData({carArray:t}),e.changeFoodOnBack(),e.checkCount(),console.log("===queryOrder onLoad end===")}})}})}}),wx.getStorage({key:"wmFlg",success:function(o){e.setData({wmFlg:o.data}),o.data?wx.getStorage({key:"deliveryPrice",success:function(o){e.setData({distriFeePrice:o.data})}}):e.setData({distriFeePrice:0})}})},checkCount:function(){e.data.totalCount>0?(e.changeSubmit(!0),e.setData({cartUrl:"../../../../images/shopping.png",clicked:"none"})):(e.changeSubmit(!1),e.setData({cartUrl:"../../../../images/notShopping.png",clicked:"block"}))},changeFoodOnBack:function(){var o=e.data.carArray,t=e.data.food;if(console.log("carArray ==> "),console.log(o),o&&o.length>0){for(var a in o)!function(e){if(t.id==o[e].foodId)t.foodCount=o[e].num;else if(t.foodSizeList.length>0){var a=t.foodSizeList.find(function(t){return t.id==o[e].foodId});a&&(a.foodSizeCount=o[e].num)}}(a)}e.setData({food:t})},onReady:function(){console.log("===onReady===")},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,console.log(e.data.back),e.data.back&&(e.setData({back:!1}),e.empty(),console.log("================ooooo",cartShow)),wx.onSocketMessage(function(o){console.log("===========接收到服务器信息=============="),console.log(o.data),t.getTkInfos(e,o),t.playMusic(e,o)}),console.log("===onShow==="),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(o){t.conSocket(o.data,r)}})})},onHide:function(){console.log("===onHide==="),e.setData({back:!0}),console.log(e.data.back)},onUnload:function(){console.log("===onUnload===");var o=getCurrentPages();o[o.length-2].setData({queryemptyflag:!0}),t.closeSock(),wx.setStorage({key:"carArray",data:e.data.carArray}),wx.setStorage({key:"goods",data:e.data.goods})},onPullDownRefresh:function(){console.log("===onPullDownRefresh==="),wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){console.log("===onReachBottom===")},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(o){console.log("转发成功")},fail:function(o){console.log("转发失败")}}},setCarShowSate:function(o){o?e.setData({cartShow:"block",scroFlag:"hidden"}):e.setData({cartShow:"none",scroFlag:""})},selguige:function(o){var t=o.currentTarget.dataset.foodSize,a=o.currentTarget.dataset.indx,r=o.currentTarget.dataset.guigeIndex,n=o.currentTarget.dataset.foodsizelist,d=[],s=[];for(var i in n)d[i]="#666",s[i]="#efefef";d[r]="#ffbf21",s[r]="#35343a",console.log("==========多规格==========",n,d,s,a,t),e.setData({foodSizeList:n,bgColors:d,colors:s,indx:a,foodSize:t});var c=[];c[e.data.yhtjindex]=t.priceT,1==e.data.yhtj&&wx.setStorage({key:"priceT",data:c})},resum:function(){e.setData({guige:!1,scroFlag:""})},chkOrder:function(){if(e.setData({display:"none"}),console.log(e.data.display),e.data.dcFlg){var o=e.data.deskNum;null==o||""==o?e.setData({disp:"block"}):e.sendOrder("",o)}else e.sendOrder()},cO:function(){e.setData({over:"hideen"}),e.setData({displayy:"block"}),e.setData({disp:"none"}),e.setData({catch:!0})},chkOrder_0:function(){console.log("用户确定下单"),e.requestOrder()},chkOrde_0:function(){console.log("用户取消下单")},sendOrder:function(o,t){if(console.log("===queryOrder sendOrder start==="),e.data.dcFlg){var a=e.data.deskNum;if(""==a||null==a||void 0==a)return e.setData({displayy_1:"block",carname_1:"请输入桌号",titlename_1:"提示信息"}),void e.setData({displayy:"none"});e.setData({zuohao:e.data.deskNum}),e.setData({displayy:"none"}),e.requestOrder()}else e.setData({displayy_0:"block",carname_0:"是否确定下单",titlename_0:"下单"});console.log("===queryOrder sendOrder end===")},requestOrder:function(){wx.getStorage({key:"userId",success:function(o){var t=o.data;wx.getStorage({key:"storeId",success:function(o){var a=o.data;wx.getStorage({key:"orderType",success:function(o){var n=o.data,d=[];for(var s in e.data.goods){var i=e.data.goods[s].foodList;for(var c in i)if(i[c].foodSizeList.length>0){var l=!1;for(var f in e.data.carArray){for(var g in i[c].foodSizeList)if(i[c].foodSizeList[g].id==e.data.carArray[f].foodId&&i[c].foodSizeList[g].foodSizeCount>0){d.push(i[c]),l=!0;break}if(l)break}}else for(var u in e.data.carArray)i[c].id==e.data.carArray[u].foodId&&d.push(i[c])}console.log("foodList ==>"),console.log(d),console.log("======that.data.zuohao========",e.data.zuohao),wx.request({url:r+"skordermodel/insertOrderInfo",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{wechatUserId:t,storeId:a,orderTableId:e.data.zuohao,orderReceivablePrice:e.data.totalPrice,orderRealPrice:e.data.totalPrice,orderType:o.data,foodList:JSON.stringify(d),id:e.data.orderId,orderRemarke:e.data.dcBeizhu},success:function(o){console.log("===insertOrderInfo success==="),console.log("res.data.jsonEntity ==>"+o.data.jsonEntity),console.log("res.data.jsonEntity ==>"+n),e.data.wmFlg?wx.reLaunch({url:"../../order/evalOrder/submitOrder/submitOrder?orderId="+o.data.jsonEntity+"&orderType="+n}):wx.reLaunch({url:"../../order/evalOrder/evalOrder?orderId="+o.data.jsonEntity+"&orderType="+n}),console.log("===queryFood sendOrder end===")},fail:function(o){wx.showToast({title:"下单失败"})}})}})}})}})},dianqx:function(){e.setData({displayy:"none"}),e.setData({over:"auto"})},addCount:function(o){e.setData({fold:!0,emptyed:!1}),e.setFoodInfo(o,1)},minusCount:function(o){e.setFoodInfo(o,-1)},setFoodInfo:function(o,t){var a=o.currentTarget.dataset.foodId;console.log("foodId == > "+a),console.log("count == > "+t),console.log(o.currentTarget.dataset);var r=o.currentTarget.dataset.typeId,n=o.currentTarget.dataset.foodSize;console.log("typeId == > "+r);var d=e.data.goods,s=d.find(function(o){return o.id==r}).foodList;console.log(s);var i=s.find(function(o){return a==o.id});if(!i){console.log("!food == > "+!i);for(var c in s)if(console.log(s[c].foodSizeList),n=s[c].foodSizeList.find(function(o){return o.id==a})){i=s.find(function(o){return n.foodId==o.id});break}}console.log("food == > "),console.log(i),console.log(n);var l=void 0,f=0,g="",u=0,p=0;i.foodSizeList.length>0?(console.log("===多规格==="),l=i.foodSizeList.find(function(o){return o.id==n.id}),a=l.id,console.log(l),g=i.foodName+"("+l.name+")",l.foodSizeCount=1*l.foodSizeCount+t,p=l.foodSizeCount,f="0"==l.discountFlg?e.data.wmFlg?l.priceW:l.priceT:e.data.wmFlg?l.priceWZ:l.priceTZ):(g=i.foodName,i.foodCount=1*i.foodCount+t,p=i.foodCount,u=e.data.wmFlg?i.priceW:i.priceT,f="0"==i.discountFlg?e.data.wmFlg?i.priceW:i.priceT:e.data.wmFlg?i.priceWZ:i.priceTZ),console.log("foodName == >"+g),console.log("price == >"+f),console.log("foodCount == >"+p),e.refreshShopingCar(a,f,p,g,r,u),e.setFoodCnt();var y=e.data.carArray;0==i.foodCount&&0==y.length?(e.changeSubmit(!1),e.setData({goods:d,clickAble:!1,cartUrl:"../../../../images/notShopping.png"})):(e.changeSubmit(!0),e.setData({goods:d,clickAble:!0,cartUrl:"../../../../images/shopping.png"}))},refreshShopingCar:function(o,t,a,r,n,d){var s=e.data.carArray,i=void 0,c=s.find(function(e){return e.foodId==o});if(c){c.foodId=o;var l=t*a,f=d*a;if(c.price=l.toFixed(2),c.receivablePrice=f.toFixed(2),c.num=a,c.name=r,0==a){for(var g=0,u=0;u<s.length;u++)o==s[u].foodId&&(g=u);s.splice(g,1),console.log("carArray.length ==> "+s.length),0==s.length&&(e.setCarShowSate(!1),e.setData({cartUrl:"../../../../images/notShopping.png"}),console.log(e.data.cartUrl))}}else a>0&&(i={foodId:o,price:t.toFixed(2),num:a,name:r,typeId:n,receivablePrice:d},s.push(i));e.calTotalPrice(),console.log("carArray ==>"),console.log(s),console.log("carArray ==>"),e.setData({carArray:s})},setFoodCnt:function(o){var t=e.data.food,a=e.data.goods,r=void 0;console.log("===setFoodCnt==="),console.log("===food==="),console.log(t),console.log("===goods==="),console.log(a);for(var n in a)if(r=a[n].foodList.find(function(o){return o.id==t.id}))break;e.setData({food:r})},xuanguige:function(o){var t=o.currentTarget.dataset.foodCount,a=o.currentTarget.dataset.foodPrice,r=o.currentTarget.dataset.foodId,n=[],d=[];n[0]="#ffbf21",d[0]="#35343a",e.setData({guige:r,foodCount:t,foodPrice:a,indx:0,bgColors:n,colors:d,scroFlag:"hidden"})},changeSubmit:function(o){e.setData({clickAble:o}),o?e.setData({bcgcolor:"#ffbf21",colo:"#3f3d40",payDesc:"下单"}):(e.data.wmFlg?wx.getStorage({key:"storeInfo",success:function(o){e.setData({payDesc:"￥"+o.data.storeInfoCharging+"起送"})}}):e.setData({payDesc:"下单"}),e.setData({bcgcolor:"#333",colo:"#999"}))},bindBeizhu:function(o){var t=o.detail.value;null==t||void 0==t||"undefined"==t||"null"==t?e.setData({dcBeizhu:""}):e.setData({dcBeizhu:t}),wx.setStorage({key:"dcBeizhu",data:t})},toggleList:function(){if(e.data.totalCount){e.setData({fold:!e.data.fold});var o=e.data.fold;e.cartShow(o)}},cartShow:function(o){0==o?e.setData({cartShow:"block"}):e.setData({cartShow:"none"})},calTotalPrice:function(){for(var o=this.data.carArray,t=0,a=0,r=0,n=e.data.distriFeePrice,d=0;d<o.length;d++)t+=1*o[d].price,a+=1*o[d].receivablePrice,r+=1*o[d].num;var s=t;e.setData({finalPrice:parseFloat(s).toFixed(2),totalReceivablePrice:parseFloat(a).toFixed(2),totalPrice:parseFloat(t).toFixed(2),totalCount:r,distriFeePrice:parseFloat(n).toFixed(2)})},empty:function(t){var a,r=e.data.goods;for(var n in r)for(var d in r[n].foodList)if(r[n].foodList[d].foodCount=0,r[n].foodList[d].foodSizeList.length>0)for(var s in r[n].foodList[d].foodSizeList)r[n].foodList[d].foodSizeList[s].foodSizeCount=0;e.setData((a={cartShow:"none",fold:!0,scroFlag:"",cartUrl:"/images/notShopping.png",bcgcolor:"#333",colo:"#999",naviFlg:!1,totalPrice:0,totalCount:0},o(a,"totalPrice",0),o(a,"emptyed",!0),o(a,"carArray",[]),a))},setStart:function(o){var t={};console.log("pingfen ==> "+o);for(var a=0;a<5;a++)t[a]=a<=o-1?{starurl:"../../../../images/star.png"}:o-a>0&&o-a<1?{starurl:"../../../../images/halfStar.png"}:{starurl:"../../../../images/emptyStar.png"};e.setData({starurls:t})},resume:function(){e.setData({disp:"none",display:"none"})},bindDesk:function(o){e.setData({deskNum:o.detail.value}),wx.setStorage({key:"deskNum",data:o.detail.value})},setInitGuige:function(){var o=[],t=e.data.food;if(console.log("===setInitGuige food==="),console.log(t),t.foodSizeList.length>0){var a=t.foodSizeList[0].priceT,r=t.foodSizeList[0].priceTZ,n=t.foodSizeList[0].priceW,d=t.foodSizeList[0].priceWZ;for(var s in t.foodSizeList)o[s]="#fff",o[0]="#ffbf21",console.log(o[0]);e.setData({priceT:a,priceTZ:r,priceW:n,priceWZ:d,colors1:o,indx1:0})}},changeSel:function(o){var t=o.currentTarget.dataset.index,a=[],r=e.data.food,n=r.foodSizeList[t].priceT,d=r.foodSizeList[t].priceTZ,s=r.foodSizeList[t].priceW,i=r.foodSizeList[t].priceWZ;a[t]="#ffbf21",e.setData({priceT:n,priceTZ:d,priceW:s,priceWZ:i,colors1:a,indx1:t})},askFor:function(){"#ffbf21"==e.data.bcgcolor?wx.getStorage({key:"userId",success:function(o){wx.getStorage({key:"storeId",success:function(t){wx.getStorage({key:"orderType",success:function(a){wx.request({url:r+"skordermodel/selUnpaidOrder",data:{wechatUserId:o.data,orderType:a.data,storeId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){console.log("selunpaidOrder"),1*o.data.count>0?(wx.getStorage({key:"editType",success:function(o){"N"!=o.data?e.setData({display:"block"}):e.chkOrder()}}),console.log(e.data.display)):e.chkOrder()}})}})}})}}):e.setData({displayy_1:"block",carname_1:"当前没有点餐，不可下单",titlename_1:"提示信息"})}}); 
 			}); 	require("pages/index/takeOut/queryOrder/queryOrder.js");
 		__wxRoute = 'pages/index/order/evalOrder/bohuiOrder/bohuiOrder';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/order/evalOrder/bohuiOrder/bohuiOrder.js';	define("pages/index/order/evalOrder/bohuiOrder/bohuiOrder.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=require("../../../../../utils/util.js"),o=getApp().globalData.httpUrl;Page({data:{seconds:"",minute:"",hour:"",second:"",date:"",time:"",tableType:"",mealsNumber:"",contants:"",contantsTel:"",textDesc:"",jiedanStatu:"",reason:""},onLoad:function(a){e=this,t.getShareInfos(e,o),t.setStoreInfo(e),t.setCompanyId(e,a);a.orderState;var n=a.orderId;wx.getStorage({key:"orderType",success:function(t){e.setData({orderId:n,orderType:t.data})}}),wx.getStorage({key:"orderId",success:function(t){wx.getStorage({key:"orderType",success:function(a){wx.request({url:o+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:t.data,orderType:a.data},success:function(t){var o=t.data.orderRefuseRemark;null!=o&&void 0!=o&&""!=o||(o="无理由"),e.setData({jiedanStatu:"您的订单已被商家拒绝",orderState:"6",reason:o})}})}})}}),wx.getStorage({key:"storeId",success:function(t){e.setData({storeId:t.data}),wx.request({url:o+"skstoremodel/findStoreById",data:{storeId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({phone:t.data.storeInfoTelephoneNum,address:t.data.storeInfoAddress})}})}})},directOrder:function(t){wx.setStorage({key:"wmFlg",data:!1}),wx.setStorage({key:"dcFlg",data:!1}),wx.setStorage({key:"orderType",data:e.data.orderType}),wx.redirectTo({url:"../../takeOut/takeOut?orderId="+e.data.orderId})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(o){console.log("===========接收到服务器信息=============="),console.log(o.data),t.getTkInfos(e,o),t.playMusic(e,o)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){t.conSocket(e.data,o)}})})},onHide:function(){},onUnload:function(){t.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,!_This.data.oUInfo.unionId&&getApp().getUserData(function(t){e.fGetCUserInfo(t.unionId),e.setData({oUInfo:t})}),setTimeout(function(){e.pullRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}}}); 
 			}); 	require("pages/index/order/evalOrder/bohuiOrder/bohuiOrder.js");
 		__wxRoute = 'pages/index/order/evalOrder/submitOrder/submitOrder';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/order/evalOrder/submitOrder/submitOrder.js';	define("pages/index/order/evalOrder/submitOrder/submitOrder.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,s=require("../../../../../utils/util.js"),d=require("../../../../../module/getsubmitdetails.js"),a=getApp().globalData.httpUrl;Page({data:{shouhuo:"Ta收货",displ:"none",selectedCoupon:"",bkclor:"#444",clor:"#ffbf20",bkclor1:"#444",clor1:"#ffbf20",beizhu:"",yhprice:0,receiveUser:"",receiveAddr:"",receiveTel:"",coupon:"选择优惠",foods:[],storeInfo:"",peisongfei:0,canhefei:0,k:"",wechatUserAddressId:"",addressId:"",takeOutDispatchType:"",displayy_0:"none",displayy_1:"none",display_alone1:"none"},selAddr:function(s){"Ta收货"!=e.data.shouhuo?wx.navigateTo({url:"../selAddr/selAddr?selId=1&addressType=1"}):wx.navigateTo({url:"../selAddr/selAddr?selId=0&addressType=0"})},selAddr1:function(s){console.log(e.data.shouhuo),"Ta收货"==e.data.shouhuo?(e.setData({shouhuo:"我的"}),d.submitDatails(e.data.orderId,"W").then(function(s){"1"==s.data.addressType?(console.log("点击有111111111"),e.setData({receiveUser:s.data.wechatUserAddressReceiverName,receiveAddr:s.data.wechatUserAddressAddress+s.data.wechatUserAddressFullAddress,receiveTel:s.data.wechatUserAddressReceiverPhoneNum})):(console.log("点击无111111111"),e.selMorenTa()),""==e.data.addressId&&(e.setData({peisongfei:0}),wx.setStorage({key:"deliveryPrice",data:0})),wx.getStorage({key:"weAddressId",success:function(s){e.setData({wechatUserAddressId:s.data})}}),""!=e.data.wechatUserAddressId&&"1"==e.data.takeOutDispatchType&&(console.log("进点我达"),e.dwd())})):(e.setData({shouhuo:"Ta收货"}),d.submitDatails(e.data.orderId,"W").then(function(s){"0"==s.data.addressType?(console.log("点击有000000"),e.setData({receiveUser:s.data.wechatUserAddressReceiverName,receiveAddr:s.data.wechatUserAddressAddress+s.data.wechatUserAddressFullAddress,receiveTel:s.data.wechatUserAddressReceiverPhoneNum})):(console.log("点击无000000"),e.selMoren()),""==e.data.addressId&&(e.setData({peisongfei:0}),wx.setStorage({key:"deliveryPrice",data:0}))}))},fanhui:function(){wx.switchTab({url:"../../order"})},onLoad:function(d){e=this,console.log("============看看出来的是啥=============",e.data.receiveUser),s.getShareInfos(e,a),s.setCompanyId(e,d),s.setStoreId(e),wx.getStorage({key:"takeOutDispatchType",success:function(s){e.setData({takeOutDispatchType:s.data})}});var t=d.orderId,r=d.orderType;e.setData({orderId:d.orderId,orderType:d.orderType}),console.log("orderId ==> "+t),console.log("orderType ==> "+r),wx.request({url:a+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:t,orderType:r},success:function(s){var d=s.data.addressId;null!=s.data.addressId&&"1"==e.data.takeOutDispatchType&&(wx.setStorage({key:"weAddressId",data:d}),e.dwd()),console.log(s.data),wx.getStorage({key:"storeInfo",success:function(d){console.log("获取餐盒费000000------",d);var a=d.data.storeInfoBoxPrice;"0"==d.data.boxPriceType?(null!=a&&""!=a&&void 0!=a||(a=0),e.setData({canhefei:a})):(console.log("餐盒费-----",s.data.foodInfoBoxPrice),e.setData({canhefei:null==s.data.foodInfoBoxPrice?0:s.data.foodInfoBoxPrice}))}}),e.setData({foodInfo:s.data,peisongfei:null==s.data.distributionFee||void 0==s.data.distributionFee?0:s.data.distributionFee}),wx.setStorage({key:"foodInfo",data:s.data}),wx.setStorage({key:"orderId",data:t}),wx.setStorage({key:"orderType",data:r}),wx.getStorage({key:"couponInfo",success:function(s){if(s.data){var d=s.data.miniMoney,a=s.data.couponType;"4"==a?wx.getStorage({key:"foodInfo",success:function(a){var t=a.data.foodList;console.log("===selMemberCard findVipCardById==="),console.log(t);var r=0;for(var o in t)"0"==t[o].discountFlg&&(r+=1*t[o].realPrice);var c=s.data.derateMoney;if(null!=c&&void 0!=c&&""!=c||(c=0),r>=d){var i=a.data.orderReceivablePrice-1*a.data.orderRealPrice+c;console.log("以优惠价格======>"+i);var n=i.toFixed(2);console.log("以优惠价格======>"+n),null!=n&&void 0!=n&&""!=n||(n=0),a.data.orderRealPrice=(1*a.data.orderReceivablePrice-1*n).toFixed(2),e.setData({selectedCoupon:s.data.couponName,yhprice:n,foodInfo:a.data})}else e.setData({displayy_0:"block",carname_0:"未达到满减条件，请重新选择优惠券",titlename_0:"提示信息"}),e.setData({selectedCoupon:"",yhprice:0})}}):"2"==a&&wx.getStorage({key:"foodInfo",success:function(a){var t=a.data.foodList;console.log("===selMemberCard findVipCardById==="),console.log(t);var r=0;for(var o in t)"0"==t[o].discountFlg&&(r+=1*t[o].realPrice);var c=s.data.derateMoney;null!=c&&void 0!=c&&""!=c||(c=10);var i=a.data.orderReceivablePrice-1*a.data.orderRealPrice+r*(1-c/10);console.log("以优惠价格======>"+i);var n=i.toFixed(2);console.log("以优惠价格======>"+n),null!=n&&void 0!=n&&""!=n||(n=0),a.data.orderRealPrice=(1*a.data.orderReceivablePrice-1*n).toFixed(2),console.log("orderRealPrice======>"+a.data.orderRealPrice),r>=d?e.setData({selectedCoupon:s.data.couponName,yhprice:n,foodInfo:a.data}):(e.setData({displayy_0:"block",carname_0:"未达到满减条件，请重新选择优惠券",titlename_0:"提示信息"}),e.setData({selectedCoupon:"",yhprice:0}))}})}else e.setData({selectedCoupon:"",yhprice:0})}})}}),wx.setStorage({key:"beizhu",data:""}),wx.getStorage({key:"storeId",success:function(s){wx.request({url:a+"skstoremodel/findStoreById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{storeId:s.data},success:function(s){e.setData({httpUrl:a,storeInfo:s.data})}})}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this;var t=getCurrentPages(),r=t[t.length-1];console.log("返回过来的配送费：",r.data.peisongfei),void 0!=r.data.peisongfei&&""!=r.data.peisongfei&&e.setData({peisongfei:r.data.peisongfei}),wx.onSocketMessage(function(d){console.log("===========接收到服务器信息=============="),console.log(d.data),s.getTkInfos(e,d),s.playMusic(e,d)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){s.conSocket(e.data,a)}})}),d.submitDatails(e.data.orderId,"W").then(function(s){"0"==s.data.addressType&&"Ta收货"==e.data.shouhuo?(console.log("onShow有000000"),e.setData({receiveUser:s.data.wechatUserAddressReceiverName,receiveAddr:s.data.wechatUserAddressAddress+s.data.wechatUserAddressFullAddress,receiveTel:s.data.wechatUserAddressReceiverPhoneNum,addressId:s.data.addressId})):"1"==s.data.addressType&&"我的"==e.data.shouhuo?(console.log("onShow有11111111"),e.setData({receiveUser:s.data.wechatUserAddressReceiverName,receiveAddr:s.data.wechatUserAddressAddress+s.data.wechatUserAddressFullAddress,receiveTel:s.data.wechatUserAddressReceiverPhoneNum,addressId:s.data.addressId})):"Ta收货"==e.data.shouhuo?(console.log("onShow无000000"),e.selMoren()):(console.log("onShow无1111111"),e.selMorenTa()),""==e.data.addressId&&0==e.data.takeOutDispatchType&&(e.setData({peisongfei:0}),wx.setStorage({key:"deliveryPrice",data:0})),wx.getStorage({key:"weAddressId",success:function(s){e.setData({wechatUserAddressId:s.data}),""!=e.data.wechatUserAddressId&&"1"==e.data.takeOutDispatchType&&e.dwd()}})})},ptp:function(){wx.request({url:a+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:e.data.orderId,orderType:e.data.orderType},success:function(e){}})},onHide:function(){},onUnload:function(){s.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},chkOrder0_1:function(){e.selAddr()},toSubmit:function(){wx.setStorage({key:"wmFlg",data:!0}),wx.setStorage({key:"dcFlg",data:!1}),wx.setStorage({key:"ydFlg",data:!1}),console.log("===toSubmit start==="),""!=e.data.receiveUser&&"undefined"!=e.data.receiveUser&&void 0!=e.data.receiveUser?(wx.setStorage({key:"beizhu",data:e.data.beizhu}),wx.getStorage({key:"receiverNotes",success:function(s){wx.getStorage({key:"orderId",success:function(d){wx.request({url:a+"skordermodel/updTakeOutOrder",data:{addressId:s.data.addressId,orderRemarke:e.data.beizhu,id:d.data,distributionFee:void 0==e.data.peisongfei?0:e.data.peisongfei},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){wx.getStorage({key:"orderId",success:function(s){wx.getStorage({key:"orderType",success:function(d){wx.setStorage({key:"submitFlg",data:!0}),wx.redirectTo({url:"../evalOrder?orderId="+s.data+"&orderType="+d.data+"&youhui="+e.data.selectedCoupon+"&yhprice="+e.data.yhprice})}})}})}})}})}})):e.setData({displayy_1:"block",carname_1:"请选择详细收货地址",titlename_1:"提示信息"})},inputBeizhu:function(s){e.setData({beizhu:s.detail.value})},selMoren:function(){wx.getStorage({key:"userId",success:function(s){wx.getStorage({key:"storeId",success:function(d){wx.request({url:a+"skmembermodel/getAddress",data:{wechatUserAddressWechatUserId:s.data,storeId:d.data,wechatUserAddressIsDefault:"1",identification:"1",dispatching:e.data.takeOutDispatchType},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){var d=s.data[0];s.data[1];e.setData({myaddreessLen:d.length});for(var a=0;a<d.length;a++)if("1"==d[a].wechatUserAddressIsDefault&&"Y"==d[a].isWithin)wx.setStorage({key:"deliveryPrice",data:null==d[a].deliveryPrice?0:d[a].deliveryPrice}),e.setData({receiveUser:d[a].wechatUserAddressReceiverName,receiveAddr:d[a].wechatUserAddressAddress+d[a].wechatUserAddressFullAddress,receiveTel:d[a].wechatUserAddressReceiverPhoneNum,addressId:d[a].wechatUserAddressId,peisongfei:null==d[a].deliveryPrice?0:d[a].deliveryPrice}),wx.setStorage({key:"receiverNotes",data:{wechatUserAddressReceiverName:d[a].wechatUserAddressReceiverName,wechatUserAddressReceiverPhoneNum:d[a].wechatUserAddressReceiverPhoneNum,wechatUserAddressFullAddress:d[a].wechatUserAddressFullAddress,addressId:d[a].wechatUserAddressId,wechatUserAddressAddress:d[a].wechatUserAddressAddress}});else if("1"==d[a].wechatUserAddressIsDefault&&"N"==d[a].isWithin){for(var t=[],r=0;r<d.length;r++)"0"==d[r].wechatUserAddressIsDefault&&"Y"==d[r].isWithin&&t.push(d[r]);console.log("======linshiAddress========"),console.log(t),t.length>0?(wx.setStorage({key:"deliveryPrice",data:null==t[0].deliveryPrice?0:t[0].deliveryPrice}),e.setData({receiveUser:t[0].wechatUserAddressReceiverName,receiveAddr:t[0].wechatUserAddressAddress+d[a].wechatUserAddressFullAddress,receiveTel:t[0].wechatUserAddressReceiverPhoneNum,addressId:t[0].wechatUserAddressId,peisongfei:null==t[0].deliveryPrice?0:t[0].deliveryPrice}),wx.setStorage({key:"receiverNotes",data:{wechatUserAddressReceiverName:t[0].wechatUserAddressReceiverName,wechatUserAddressReceiverPhoneNum:t[0].wechatUserAddressReceiverPhoneNum,wechatUserAddressFullAddress:t[0].wechatUserAddressFullAddress,addressId:t[0].wechatUserAddressId,wechatUserAddressAddress:t[0].wechatUserAddressAddress}})):e.selAddress("我的地址不在配送范围内\n请添加地址！")}0==d.length&&e.selAddress("暂无我的默认地址！"),1==e.data.takeOutDispatchType&&e.dwds(),0==e.data.takeOutDispatchType&&e.mor()}})}})}})},selMorenTa:function(){wx.getStorage({key:"userId",success:function(s){wx.getStorage({key:"storeId",success:function(d){wx.request({url:a+"skmembermodel/getAddress",data:{wechatUserAddressWechatUserId:s.data,storeId:d.data,wechatUserAddressIsDefault:"1",identification:"1",dispatching:e.data.takeOutDispatchType},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){s.data[0];for(var d=s.data[1],a=0;a<d.length;a++)"1"==d[a].wechatUserAddressIsDefault&&"Y"==d[a].isWithin?(wx.setStorage({key:"deliveryPrice",data:null==d[a].deliveryPrice?0:d[a].deliveryPrice}),e.setData({receiveUser:d[a].wechatUserAddressReceiverName,receiveAddr:d[a].wechatUserAddressAddress+d[a].wechatUserAddressFullAddress,receiveTel:d[a].wechatUserAddressReceiverPhoneNum,addressId:d[a].wechatUserAddressId,peisongfei:null==d[a].deliveryPrice?0:d[a].deliveryPrice}),wx.setStorage({key:"receiverNotes",data:{wechatUserAddressReceiverName:d[a].wechatUserAddressReceiverName,wechatUserAddressReceiverPhoneNum:d[a].wechatUserAddressReceiverPhoneNum,wechatUserAddressFullAddress:d[a].wechatUserAddressFullAddress,addressId:d[a].wechatUserAddressId}})):"1"==d[a].wechatUserAddressIsDefault&&"N"==d[a].isWithin&&e.selAddress("Ta的默认地址不在配送范围内，请选择地址！");0==d.length&&e.selAddress("暂无Ta的默认地址!"),1==e.data.takeOutDispatchType&&e.dwds(),0==e.data.takeOutDispatchType&&e.mor()}})}})}})},mor:function(){wx.getStorage({key:"orderId",success:function(s){wx.getStorage({key:"beizhu",success:function(d){console.log("=======地址获取111=========",s,d),wx.request({url:a+"skordermodel/updTakeOutOrder",data:{addressId:e.data.addressId,orderRemarke:d.data,id:s.data,distributionFee:null==e.data.peisongfei||void 0==e.data.peisongfei?0:e.data.peisongfei},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log("=====成功=====",e)}})}})}})},dwd:function(){wx.getStorage({key:"storeId",success:function(s){wx.getStorage({key:"weAddressId",success:function(d){wx.request({url:a+"skordermodel/selDistributionFee",data:{addressId:d.data,storeId:s.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){var d=s.data.result;console.log("点我打配送费-----",d);var a=d;e.setData({peisongfei:a}),wx.setStorage({key:"peisongfei",data:a})}})}})}})},dwds:function(){wx.getStorage({key:"storeId",success:function(s){wx.request({url:a+"skordermodel/selDistributionFee",data:{addressId:e.data.addressId,storeId:s.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){var d=s.data.result;console.log("点我达配送费",d);var a=d;e.setData({peisongfei:a}),wx.setStorage({key:"peisongfei",data:a}),e.mor()}})}})},selAddress:function(s){e.setData({display_alone1:"block",carname_0:s,titlename_0:"提示信息",cancel:"关\t闭"}),e.setData({receiveUser:"",receiveAddr:"",receiveTel:"",addressId:""}),wx.setStorage({key:"receiverNotes",data:{wechatUserAddressReceiverName:"",wechatUserAddressReceiverPhoneNum:"",wechatUserAddressFullAddress:"",addressId:""}})}}); 
 			}); 	require("pages/index/order/evalOrder/submitOrder/submitOrder.js");
 		__wxRoute = 'pages/index/order/evalOrder/evaluation/evaluation';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/order/evalOrder/evaluation/evaluation.js';	define("pages/index/order/evalOrder/evaluation/evaluation.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a,t=require("../../../../../utils/util.js"),e=getApp().globalData.httpUrl;Page({data:{foodRatedBeanList:[],evaluates:[],starUrl1:[],starUrl2:[],starUrl3:[],starUrl4:[],point1:"5",point2:"5",point3:"5",point4:"5",sayMore:"",time:"",points:0,titleIndex:0,clickable:!0,foods:[],submitEvalflag:!0},onLoad:function(o){a=this,t.getShareInfos(a,e),t.setCompanyId(a,o),t.setStoreId(a),console.log("============",o),4==o.orderState||9==o.orderState?(console.log("进来没 evaluation "),a.setData({orderId:o.orderId,orderType:o.orderType,orderState:o.orderState}),wx.request({url:e+"skordermodel/getOrderById",data:{id:o.orderId,orderType:o.orderType},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){a.setData({foods:t.data.foodList})}})):wx.getStorage({key:"orderType",success:function(t){wx.getStorage({key:"orderId",success:function(o){wx.request({url:e+"skordermodel/getOrderById",data:{id:o.data,orderType:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){a.setData({foods:t.data.foodList})}})}})}}),wx.getStorage({key:"foodInfo",success:function(t){a.setData({foods:t.data.foodList}),a.initStar(),a.setInitZyc(),a.setFoodRatedBeanList()}});var r=t.formatTime(new Date);a.setData({time:r})},onReady:function(){},fanhui:function(){wx.navigateBack({})},closeTk:function(){a.setData({displa:!1})},onShow:function(){a=this,wx.onSocketMessage(function(e){console.log("===========接收到服务器信息=============="),console.log(e.data),t.getTkInfos(a,e),t.playMusic(a,e)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(a){t.conSocket(a.data,e)}})})},onHide:function(){},onUnload:function(){t.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),a=this,setTimeout(function(){a.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:a.data.shareTitle,desc:"",imageUrl:a.data.shareImgUrl,path:"/pages/index/index?storeId="+a.data.storeId+"&companyId="+a.data.companyId,success:function(a){console.log("转发成功")},fail:function(a){console.log("转发失败")}}},setFoodRatedBeanList:function(){for(var t in a.data.foods){var e=a.data.foodRatedBeanList,o=[],r=[];o[t]=a.data.foods[t].foodId,r[t]=0;var d={foodId:o[t],foodEvaluation:r[t]};e.push(d),a.setData({foodRatedBeanList:e})}},setInitZyc:function(){var t=[],e=[],o=[],r=[],d=[],s=[],n=[];for(var i in a.data.foods)t[i]="../../../../../images/unlikek.png",e[i]="../../../../../images/likek.png",o[i]="#3d3d3d",r[i]="#3d3d3d",d[i]="#9a9a9a",s[i]="#9a9a9a",n[i]=!0;a.setData({unlikeUrls:t,likeUrls:e,zanColors:o,caiColors:r,zanWordColors:d,caiWordColors:s,clickAbles:n})},zan:function(t){var e=t.currentTarget.dataset.zanIndex,o=a.data.likeUrls,r=a.data.caiColors,d=a.data.caiWordColors,s=a.data.zanColors,n=a.data.zanWordColors,i=a.data.clickAbles,l=a.data.foodRatedBeanList;i[e]&&(o[e]="../../../../../images/likem.png",r[e]="#3d3d3d",d[e]="#9a9a9a",s[e]="#ffbf21",n[e]="#3a4342",i[e]=!0,l[e].foodEvaluation="0",a.setData({foodRatedBeanList:l,likeUrls:o,zanColors:s,zanWordColors:n,caiColors:r,caiWordColors:d,clickAbles:i}))},cai:function(t){var e=t.currentTarget.dataset.caiIndex,o=a.data.unlikeUrls,r=a.data.zanColors,d=a.data.zanWordColors,s=a.data.caiColors,n=a.data.caiWordColors,i=a.data.clickAbles,l=a.data.foodRatedBeanList;i[e]&&(r[e]="#3d3d3d",d[e]="#9a9a9a",s[e]="#494949",n[e]="#666",i[e]=!0,l[e].foodEvaluation="1",a.setData({foodRatedBeanList:l,unlikeUrls:o,zanColors:r,zanWordColors:d,caiColors:s,caiWordColors:n,clickAbles:i}))},submitEval:function(){1==a.data.submitEvalflag&&(a.setData({submitEvalflag:!1}),wx.setStorage({key:"remarke",data:a.data.sayMore}),9==a.data.orderState||4==a.data.orderState?wx.getStorage({key:"storeId",success:function(t){wx.getStorage({key:"userId",success:function(o){wx.request({url:e+"skordermodel/insertStoreRated",method:"POST",data:{orderId:a.data.orderId,orderType:a.data.orderType,storeId:t.data,createUserId:o.data,remarke:a.data.sayMore,serviceStartLevel:a.data.point3,sendSartLevel:a.data.point4,environmentStartLevel:a.data.point1,foodStartLevel:a.data.point2,foodRatedBeanList:JSON.stringify(a.data.foodRatedBeanList)},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){wx.setStorage({key:"point",data:a.data.point1}),wx.redirectTo({url:"../evaluatedOrder/evaluatedOrder?orderId="+a.data.orderId+"&orderType="+a.data.orderType})}})}})}}):wx.getStorage({key:"orderType",success:function(t){wx.getStorage({key:"orderId",success:function(o){wx.getStorage({key:"storeId",success:function(r){wx.getStorage({key:"userId",success:function(d){wx.request({url:e+"skordermodel/insertStoreRated",method:"POST",data:{orderId:o.data,orderType:t.data,storeId:r.data,createUserId:d.data,remarke:a.data.sayMore,serviceStartLevel:a.data.point3,sendSartLevel:a.data.point4,environmentStartLevel:a.data.point1,foodStartLevel:a.data.point2,foodRatedBeanList:JSON.stringify(a.data.foodRatedBeanList)},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.setStorage({key:"point",data:a.data.point1}),console.log("=====提交评论========",o.data,t.data),wx.redirectTo({url:"../evaluatedOrder/evaluatedOrder?orderId="+o.data+"&orderType="+t.data})}})}})}})}})}}))},sayMore:function(t){a.setData({sayMore:t.detail.value})},pingjia:function(t){var e=t.currentTarget.dataset.titleIndex+1,o=t.currentTarget.dataset.point+1;1!=e?(2==e&&(a.setData({point2:o}),a.justPoint1()),3==e&&(a.setData({point3:o}),a.justPoint1()),4==e&&(a.setData({point4:o}),a.justPoint1()),a.makeStar(e,o)):wx.showToast({title:"总评价不可点"})},justPoint1:function(){var t=1*a.data.point2+1*a.data.point3+1*a.data.point4;console.log("calc:"+t);var e=(t/3).toFixed(0);console.log("point1:"+e);var o=a.data.starUrl1;o=a.star(o,e),a.setData({point1:e,starUrl1:o})},initStar:function(){var t=a.data.evaluates,e=a.data.starUrl1,o=a.data.starUrl2,r=a.data.starUrl3,d=a.data.starUrl4;e=a.star(e,5),o=a.star(o,5),r=a.star(r,5),d=a.star(d,5);for(var s=0;s<4;s++){if(0==s){n={title:"满意度评分",starUrl:e};t[0]=n}if(1==s){n={title:"菜 品 评 分",starUrl:o};t[1]=n}if(2==s){n={title:"服 务 评 分",starUrl:r};t[2]=n}if(3==s){var n={title:"配 送 评 分",starUrl:d};t[3]=n}}a.setData({evaluates:t,starUrl1:e,starUrl2:o,starUrl3:r,starUrl4:d})},star:function(a,t){for(var e=0;e<5;e++)a[e]=e<t?{star:"../../../../../images/star.png"}:{star:"../../../../../images/emptyStar.png"};return a},makeStar:function(t,e){var o=a.data.evaluates,r=a.data.starUrl1,d=a.data.starUrl2,s=a.data.starUrl3,n=a.data.starUrl4;1==t&&(r=a.star(r,e)),2==t&&(d=a.star(d,e)),3==t&&(s=a.star(s,e)),4==t&&(n=a.star(n,e));for(var i=0;i<4;i++){if(0==i){l={title:"满意度评分",starUrl:r};o[0]=l}if(1==i){l={title:"菜 品 评 分",starUrl:d};o[1]=l}if(2==i){l={title:"服 务 评 分",starUrl:s};o[2]=l}if(3==i){var l={title:"配 送 评 分",starUrl:n};o[3]=l}}a.setData({evaluates:o,starUrl1:r,starUrl2:d,starUrl3:s,starUrl4:n})}}); 
 			}); 	require("pages/index/order/evalOrder/evaluation/evaluation.js");
 		__wxRoute = 'pages/index/order/evalOrder/evaluatedOrder/evaluatedOrder';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/order/evalOrder/evaluatedOrder/evaluatedOrder.js';	define("pages/index/order/evalOrder/evaluatedOrder/evaluatedOrder.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=require("../../../../../utils/util.js"),a=getApp().globalData.httpUrl;Page({data:{httpUrl:a,selectedCoupon:"测试的假券",orderPayStyle:"支付订单",remarke:"",coupon:"选择优惠券",wmFlg:!1,dcFlg:!1,ydFlg:!1,point:0,foods:[],receiveUser:"某某某",receiveAddr:"中国地球",storeInfo:{},discountFlg:""},choseTxtColor:function(e){var t=e.currentTarget.dataset.id;this.setData({id:t})},selCoupon:function(){wx.navigateTo({url:"../selCoupon/selCoupon"})},onLoad:function(o){e=this,t.getShareInfos(e,a),t.setCompanyId(e,o),t.setStoreId(e),t.setStoreInfo(e),console.log(o.comment),wx.getStorage({key:"takeOutDispatchType",success:function(t){e.setData({takeOutDispatchType:t.data})}}),"1"==o.comment&&e.setData({comment:!0}),"0"==e.data.takeOutDispatchType&&wx.getStorage({key:"couponInfo",success:function(t){e.setData({couponName:t.data.couponName,derateMoney:t.data.derateMoney<0?0:t.data.derateMoney});var a=t.data.couponId;""!=a&&"undefined"!=a&&void 0!=a||wx.getStorage({key:"yhprice",success:function(t){e.setData({derateMoney:t.data<0?0:t.data})}})}}),wx.getStorage({key:"deskNum",success:function(t){e.setData({deskNum:t.data})}}),wx.getStorage({key:"remarke",success:function(t){null!=t.data&&void 0!=t.data&&""!=t.data?e.setData({remarke:t.data}):e.setData({remarke:"无评论"})}}),wx.getStorage({key:"wmFlg",success:function(t){wx.getStorage({key:"dcFlg",success:function(a){wx.getStorage({key:"ydFlg",success:function(o){e.setData({wmFlg:t.data,dcFlg:a.data,ydFlg:o.data})}})}})}}),wx.getStorage({key:"point",success:function(t){for(var a=[],o=0;o<5;o++)a[o]="../../../../../images/emptyStar.png";console.log(t.data);for(var n=0;n<t.data;n++)a[n]="../../../../../images/star.png";e.setData({starUrls:a})}}),wx.request({url:a+"skordermodel/getOrderById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{id:o.orderId,orderType:o.orderType},success:function(t){var a=t.data.foodInfoBoxPrice,o=t.data.discountFlg;e.setData({canhefei:a,orderInfo:t.data,discountFlg:o,peisongfei:t.data.distributionFee});var n=t.data.storeRatedRemarke;if(""!=n&&null!=n&&void 0!=n||(n="无评论"),e.setData({foodInfo:t.data,storeRatedRemarke:n,discountFlg:t.data.discountFlg,derateMoney:(1*t.data.orderReceivablePrice-1*t.data.orderRealPrice).toFixed(2)<0?0:(1*t.data.orderReceivablePrice-1*t.data.orderRealPrice).toFixed(2)}),"1"==e.data.takeOutDispatchType){var d=1*t.data.orderReceivablePrice+1*t.data.foodInfoBoxPrice+1*e.data.peisongfei-1*t.data.orderRealPrice;e.setData({derateMoney:d<0?0:d})}}})},selMemberCard:function(){wx.getStorage({key:"userId",success:function(t){wx.getStorage({key:"storeId",success:function(o){wx.request({url:a+"skmembermodel/findVipCardById",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{userId:t.data,cardId:e.data.cardId,storeId:o.data},success:function(t){wx.getStorage({key:"foodInfo",success:function(a){console.log(a+"=========>resi");a.data.orderRealPrice;var o=a.data.orderReceivablePrice,n=t.data.discount;null!=n&&void 0!=n&&""!=n||(n=10);var d=o-o*n/10;console.log("以优惠价格======>"+d);var s=d.toFixed(2);console.log("以优惠价格======>"+s),null!=s&&void 0!=s&&""!=s||(s=0);var r=t.data.discount;null!=r&&void 0!=r&&""!=r||(n=10,e.setData({selectedCoupon:"无折扣"}))}})}})}})}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(a){console.log("===========接收到服务器信息=============="),console.log(a.data),t.getTkInfos(e,a),t.playMusic(e,a)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){t.conSocket(e.data,a)}})})},onHide:function(){},onUnload:function(){t.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},resume:function(e){wx.switchTab({url:"../../../../index/index"})}}); 
 			}); 	require("pages/index/order/evalOrder/evaluatedOrder/evaluatedOrder.js");
 		__wxRoute = 'pages/index/order/evalOrder/selAddr/selAddr';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/order/evalOrder/selAddr/selAddr.js';	define("pages/index/order/evalOrder/selAddr/selAddr.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=require("../../../../../utils/util.js"),s=getApp().globalData.httpUrl;Page({data:{receivingAddresses:[],onshow:!1,takeOutDispatchType:"",ddj:!0},onLoad:function(a){e=this,wx.getStorage({key:"takeOutDispatchType",success:function(t){e.setData({takeOutDispatchType:t.data})}}),t.getShareInfos(e,s),t.setCompanyId(e,a),t.setStoreId(e);var o=a.addressType;console.log("addressType"+o);var d=a.selId;e.setData({addressType:o,checkId:d}),console.log("checkId ==>"+d),e.getAddressInfo(d)},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(s){console.log("===========接收到服务器信息=============="),console.log(s.data),t.getTkInfos(e,s),t.playMusic(e,s)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){t.conSocket(e.data,s)}})}),wx.getStorage({key:"onshow",success:function(t){1==t.data&&(wx.setStorage({key:"onshow",data:!1}),console.log("我进来啦啊啊啊"),wx.getStorage({key:"addressType",success:function(t){wx.getStorage({key:"checkId",success:function(s){t.data;var a=s.data;console.log("一次还是两次=====>"+a),e.getAddressInfo(a)}})}}))}})},onUnload:function(){t.closeSock()},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},getAddressInfo:function(t){wx.getStorage({key:"userId",success:function(a){wx.getStorage({key:"storeId",success:function(o){wx.request({url:s+"skmembermodel/getAddress",data:{wechatUserAddressWechatUserId:a.data,storeId:o.data,identification:1,dispatching:e.data.takeOutDispatchType},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){console.log("res-----",s.data),console.log("why=====>"+t),console.log("为啥呢"+s.data[t]),e.setData({receivingAddresses:s.data[t]})}})}})}})},tianJaDizhi:function(){wx.getLocation({type:"wgs84",success:function(t){var s=t;wx.setStorage({key:"jwd",data:s}),setTimeout(function(){wx.navigateTo({url:"../../../../user/shippingAddress/addAddress/addAddress?type="+e.data.addressType+"&selId="+e.data.checkId})},100),console.log(t)},fail:function(e){console.log("为嘛获取不到经纬===》",e)}})},goDetail:function(t){if(e.data.ddj){e.setData({ddj:!1});var a=t.currentTarget.dataset.clickIndex,o=e.data.receivingAddresses;console.log(a),console.log(o);var d=o[a].wechatUserAddressReceiverName,r=o[a].wechatUserAddressReceiverPhoneNum,c=o[a].wechatUserAddressFullAddress,n=o[a].wechatUserAddressAddress,i=o[a].deliveryPrice;console.log("地址的省市区======>"+n);var u=o[a].wechatUserAddressId;wx.setStorage({key:"weAddressId",data:u}),0==e.data.takeOutDispatchType?wx.getStorage({key:"orderId",success:function(t){wx.getStorage({key:"beizhu",success:function(a){console.log("=======地址获取111=========",t,a),wx.request({url:s+"skordermodel/updTakeOutOrder",data:{addressId:u,orderRemarke:a.data,id:t.data,distributionFee:i},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log("=====地址获取=====",t),wx.setStorage({key:"deliveryPrice",data:i}),setTimeout(function(){e.setData({ddj:!1});var t=getCurrentPages();t[t.length-2].setData({peisongfei:i}),wx.navigateBack({delta:"1"})},100)}})}})}}):wx.getStorage({key:"storeId",success:function(t){wx.request({url:s+"skordermodel/selDistributionFee",data:{addressId:u,storeId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=t.data.result,o=a;wx.getStorage({key:"orderId",success:function(t){wx.getStorage({key:"beizhu",success:function(d){console.log("=======地址获取111=========",t,d),wx.request({url:s+"skordermodel/updTakeOutOrder",data:{addressId:u,orderRemarke:d.data,id:t.data,distributionFee:o},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log("=====地址获取=====",t),wx.setStorage({key:"deliveryPrice",data:a}),setTimeout(function(){e.setData({ddj:!1});var t=getCurrentPages();t[t.length-2].setData({peisongfei:a}),wx.navigateBack({delta:"1"})},100)}})}})}})}})}}),wx.setStorage({key:"receiverNotes",data:{wechatUserAddressReceiverName:d,wechatUserAddressReceiverPhoneNum:r,wechatUserAddressFullAddress:c,wechatUserAddressAddress:n,addressId:u}})}}}); 
 			}); 	require("pages/index/order/evalOrder/selAddr/selAddr.js");
 		__wxRoute = 'pages/index/fellin/queuingNumber/queuingNumber';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/fellin/queuingNumber/queuingNumber.js';	define("pages/index/fellin/queuingNumber/queuingNumber.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,o=require("../../../../utils/util.js"),t=getApp().globalData.httpUrl;getApp().globalData.pdhttpUrl;Page({data:{tableNum:"",minute:"",minute1:0,yournumber:"",hotline:"",address:"",startTime:"",endTime:"",cancelqueen:"取消排队"},cancelQueen:function(){wx.getStorage({key:"storeId",success:function(o){wx.request({url:t+"skordermodel/updLineUp",data:{id:e.data.id,state:"C",storeId:o.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.switchTab({url:"../../../index/index"})}})}})},onPullDownRefresh:function(){wx.showNavigationBarLoading(),e.onShow(),setTimeout(function(){wx.hideNavigationBarLoading(),wx.stopPullDownRefresh()},1500)},onLoad:function(a){e=this,o.getShareInfos(e,t),o.setStoreInfo(e),o.setCompanyId(e,a),wx.getStorage({key:"storeId",success:function(o){e.setData({storeId:o.data}),wx.request({url:t+"skstoremodel/findStoreById",data:{storeId:o.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){e.setData({hotline:o.data.storeInfoTelephoneNum,address:o.data.storeInfoAddress,startTime:o.data.storeInfoBusinessStartTime,endTime:o.data.storeInfoBusinessEndTime})}})}}),wx.getStorage({key:"storeId",success:function(o){wx.getStorage({key:"openId",success:function(a){wx.request({url:t+"skordermodel/findlPersonNumLineUp",data:{storeId:o.data,openId:a.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){e.setData({tableNum:o.data.personNum,minute:o.data.lineUpTime,lineupInfoNo:o.data.lineupInfoNo,id:o.data.id});var t=o.data.lineupInfoCreateTime;e.setData({lineupInfoCreateTime:t}),e.timeFn(t)}})}})}}),wx.getStorage({key:"waitId",success:function(o){e.setData({yournumber:o.data})}})},onReady:function(){e.soketClose()},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(t){if(console.log("收到服务器内容："),console.log(t),"call"==t.data){var a=wx.getBackgroundAudioManager();a.title="众德润语音播报",a.epname="众德润语音播报",a.singer="众德润语音播报",a.coverImgUrl="http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000",a.src="http://qiniu.shoukaikeji.com/FpjDaduPdlFmEGKCz39hd_wu-p8k",a.play()}"skip"!=t.data&&"repast"!=t.data||wx.navigateBack({}),o.getTkInfos(e,t)})},onHide:function(){(e=this).soketClose()},onUnload:function(){e.soketClose()},onReachBottom:function(){},playAudio:function(){backgroundAudioManager.src="http://qiniu.shoukaikeji.com/FpjDaduPdlFmEGKCz39hd_wu-p8k",backgroundAudioManager.play();setTimeout(function(){e.playAudio()},5e3)},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},soketClose:function(){wx.getStorage({key:"userId",success:function(e){wx.getStorage({key:"connectedSocket",success:function(a){a.data?(console.log("=========已有socket不连接========="),wx.setStorage({key:"connectedSocket",data:!0})):(o.conSocket(e.data,t),wx.onSocketOpen(function(e){console.log("WebSocket连接已打开！"),console.log(e),wx.setStorage({key:"connectedSocket",data:!0})}),wx.onSocketError(function(e){console.log("WebSocket连接打开失败，请检查！"),console.log(e),wx.setStorage({key:"connectedSocket",data:!1})}))}})}})},countUp:function(){var o=e.data.minute1;setTimeout(function(){o+=1,e.setData({minute1:o});e.countUp()},6e4)},timeFn:function(o){console.log("排队时间 ===>"+o.replace(/-/g,"/"));var t=new Date(o.replace(/-/g,"/"));console.log("dateBegin ===>"+t);var a=new Date;console.log("dateEnd ===>"+a),console.log("dateEnd.getTime() ===>"+a.getTime()),console.log("dateBegin.getTime() ===>"+t.getTime());var n=a.getTime()-t.getTime();n<0&&(n=0),console.log("dateDiff ===>"+n);var s=Math.floor(n/864e5);console.log("dayDiff ===>"+s);var i=n%864e5;console.log("leave1 ===>"+i);var c=Math.floor(i/36e5);console.log("hours ===>"+c);var d=i%36e5;console.log("leave2 ===>"+d);var r=Math.floor(d/6e4),l=d%6e4,u=Math.round(l/1e3);console.log(" 相差 "+s+"天 "+c+"小时 "+r+" 分钟"+u+" 秒"),console.log(n+"时间差的毫秒数",s+"计算出相差天数",i+"计算天数后剩余的毫秒数",c+"计算出小时数",r+"计算相差分钟数",u+"计算相差秒数");var g=Math.floor(i/6e4);e.setData({minute1:g}),setTimeout(function(){var t=new Date(o.replace(/-/g,"/")),a=(new Date).getTime()-t.getTime(),n=Math.floor(a/864e5),s=a%864e5,i=Math.floor(s/36e5),c=s%36e5,d=Math.floor(c/6e4),r=c%6e4,l=Math.round(r/1e3);console.log(" 相差 "+n+"天 "+i+"小时 "+d+" 分钟"+l+" 秒"),console.log(a+"时间差的毫秒数",n+"计算出相差天数",s+"计算天数后剩余的毫秒数",i+"计算出小时数",d+"计算相差分钟数",l+"计算相差秒数");var u=Math.floor(s/6e4);e.setData({minute1:u});e.timeFn(e.data.lineupInfoCreateTime)},6e4)}}); 
 			}); 	require("pages/index/fellin/queuingNumber/queuingNumber.js");
 		__wxRoute = 'pages/index/wntjDetail/wntjDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/wntjDetail/wntjDetail.js';	define("pages/index/wntjDetail/wntjDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,a=require("../../../utils/util.js"),e=getApp(),o=e.globalData.httpUrl,n=e.globalData.tuhttpUrl;Page({data:{infos:[],httpUrl:o,tuhttpUrl:n,noMessage:!1},onLoad:function(e){t=this,a.getShareInfos(t,o),a.setCompanyId(t,e),a.setStoreId(t),a.setStoreInfo(t),wx.getStorage({key:"specialitiesId",success:function(a){wx.request({url:o+"skfoodmodel/selFoodByspecialitiesId",data:{specialitiesId:a.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){t.setData({infos:a.data}),console.log(a.data),""!=a.data&&null!=a.data?(""==a.data.foodName||null==a.data.foodName?t.setData({noFood:!0}):t.setData({noFoodName:!1}),""==a.data.introduce||null==a.data.introduce?t.setData({noIntroduce:!0}):t.setData({noIntroduce:!1}),""==a.data.masterials||null==a.data.masterials?t.setData({noMasterials:!0}):t.setData({noMasterials:!1}),""==a.data.imgName||null==a.data.imgName?t.setData({noImgName:!0}):t.setData({noImgName:!1}),t.data.noFoodName&&t.data.noIntroduce&&t.data.noMasterials&&t.data.noImgName?t.setData({noMessage:!0}):t.setData({noMessage:!1})):t.setData({noMessage:!0})}})}})},onReady:function(){},closeTk:function(){t.setData({displa:!1})},onShow:function(){t=this,wx.onSocketMessage(function(e){console.log("===========接收到服务器信息=============="),console.log(e.data),a.getTkInfos(t,e),a.playMusic(t,e)}),t=this,wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(t){a.conSocket(t.data,o)}})})},onHide:function(){},onUnload:function(){a.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),t=this,setTimeout(function(){t.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.data.shareTitle,desc:"",imageUrl:t.data.shareImgUrl,path:"/pages/index/index?storeId="+t.data.storeId+"&companyId="+t.data.companyId,success:function(t){console.log("转发成功")},fail:function(t){console.log("转发失败")}}}}); 
 			}); 	require("pages/index/wntjDetail/wntjDetail.js");
 		__wxRoute = 'pages/index/yhtjDetail/yhtjDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/yhtjDetail/yhtjDetail.js';	define("pages/index/yhtjDetail/yhtjDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,o=require("../../../utils/util.js"),e=getApp(),a=e.globalData.httpUrl,s=e.globalData.tuhttpUrl;Page({data:{clicked:0,noMore:!1,infos:[],yhtjTitle:"",tuhttpUrl:s,httpUrl:a,monthSales:"",likeNum:0,unlikeNum:0,descriptionText:"",pingfen:0,starurls:[],priceT:"",priceTZ:"",indx:""},onLoad:function(e){t=this,o.getShareInfos(t,a),o.setCompanyId(t,e),o.setStoreId(t),o.setStoreInfo(t),wx.getStorage({key:"foodId",success:function(o){wx.request({url:a+"skfoodmodel/wxFoodInfoById",data:{id:o.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){var e=o.data.foodRatedFoodStartLevel;t.setStart(e),console.log("=============",o.data),t.setData({infos:o.data,starurls:t.data.starurls}),t.setInitGuige();var a=[],s=o.data,n=s.foodRatedList;for(var i in n)a[i]=t.setStarts(n[i].foodRatedFoodStartLevel);t.setData({starLists:a});var r=[],d=!1;if(s.foodRatedList.length>=10){for(var f=0;f<10;f++)r[f]=n[f];d=!1}else{for(var c=0;c<s.foodRatedList.length;c++)r[c]=n[c];d=!0}t.setData({infos2:r,noMore:d})}})}})},onReady:function(){},closeTk:function(){t.setData({displa:!1})},onShow:function(){t=this,wx.onSocketMessage(function(e){console.log("===========接收到服务器信息=============="),console.log(e.data),o.getTkInfos(t,e),o.playMusic(t,e)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(t){o.conSocket(t.data,a)}})})},onHide:function(){},onUnload:function(){o.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),t=this,setTimeout(function(){t.onPullDownRefresh()},500)},onReachBottom:function(){t.getMore()},onShareAppMessage:function(){return{title:t.data.shareTitle,desc:"",imageUrl:t.data.shareImgUrl,path:"/pages/index/index?storeId="+t.data.storeId+"&companyId="+t.data.companyId,success:function(t){console.log("转发成功")},fail:function(t){console.log("转发失败")}}},setInitGuige:function(){var o=[],e=t.data.infos;if(e.foodSizeList.length>0){var a=e.foodSizeList[0].priceT,s=e.foodSizeList[0].priceTZ;t.setData({priceT:a,priceTZ:s})}for(var n in t.data.infos.foodSizeList)o[n]="#fff",o[0]="#ffbf21";t.setData({colors:o,indx:0})},changeSel:function(o){var e=o.currentTarget.dataset.index,a=[],s=t.data.infos,n=s.foodSizeList[e].priceT,i=s.foodSizeList[e].priceTZ;a[e]="#ffbf21",t.setData({priceT:n,priceTZ:i,colors:a,indx:e})},setStart:function(o){for(var e={},a=0;a<5;a++)e[a]=a<=o-1?{starurl:"../../../images/star.png"}:o-a>0&&o-a<1?{starurl:"../../../images/halfStar.png"}:{starurl:"../../../images/emptyStar.png"};t.setData({starurls:e})},setStarts:function(t){for(var o={},e=0;e<5;e++)o[e]=e<=t-1?{starList:"../../../images/star.png"}:t-e>0&&t-e<1?{starList:"../../../images/halfStar.png"}:{starList:"../../../images/emptyStar.png"};return o},getMore:function(){if(1!=t.data.noMore){var o=t.data.infos2,e=t.data.clicked,a=!1;if(10+10*(e+=1)<=t.data.infos.foodRatedList.length){for(var s=0;s<10+10*e;s++)o[s]=t.data.infos.foodRatedList[s];a=!1}else{for(var n=0;n<t.data.infos.foodRatedList.length;n++)o[n]=t.data.infos.foodRatedList[n];a=!0}t.setData({infos2:o,clicked:e,noMore:a})}else wx.showToast({title:"无更多信息",icon:"loading",duration:1e3})}}); 
 			}); 	require("pages/index/yhtjDetail/yhtjDetail.js");
 		__wxRoute = 'pages/brand/brand';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/brand/brand.js';	define("pages/brand/brand.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a,n=require("../../utils/util.js"),o=require("../wxParse/wxParse.js"),t=getApp().globalData.httpUrl;Page({data:{httpUrl:t},onLoad:function(e){a=this,n.getShareInfos(a,t),wx.getStorage({key:"storeInfo",success:function(n){wx.setNavigationBarTitle({title:n.data.storeInfoName}),a.setData({storeInfoName:n.data.storeInfoName,storeInfoAddress:n.data.storeInfoAddress,storeInfoHeadImgUrl:n.data.storeInfoHeadImgUrl,storeInfoBusinessTime:n.data.storeInfoBusinessStartTime+"-"+n.data.storeInfoBusinessEndTime})}}),n.setCompanyId(a,e),wx.getStorage({key:"storeId",success:function(n){a.setData({storeId:n.data}),console.log("====wx.getStorage storeId success===="),wx.request({url:t+"skstoremodel/findBrandConfigById",data:{storeId:n.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){console.log("====findBrandConfigById success===="),console.log(n.data);var t=[];null!=n.data.brandConfigImgUrl1&&""!=n.data.brandConfigImgUrl1&&t.push({imgurl:n.data.brandConfigImgUrl1}),null!=n.data.brandConfigImgUrl2&&""!=n.data.brandConfigImgUrl2&&t.push({imgurl:n.data.brandConfigImgUrl2}),null!=n.data.brandConfigImgUrl3&&""!=n.data.brandConfigImgUrl3&&t.push({imgurl:n.data.brandConfigImgUrl3}),null!=n.data.brandConfigImgUrl4&&""!=n.data.brandConfigImgUrl4&&t.push({imgurl:n.data.brandConfigImgUrl4}),null!=n.data.brandConfigImgUrl5&&""!=n.data.brandConfigImgUrl5&&t.push({imgurl:n.data.brandConfigImgUrl5}),null!=n.data.brandConfigImgUrl6&&""!=n.data.brandConfigImgUrl6&&t.push({imgurl:n.data.brandConfigImgUrl6}),null!=n.data.brandConfigImgUrl7&&""!=n.data.brandConfigImgUrl7&&t.push({imgurl:n.data.brandConfigImgUrl7}),null!=n.data.brandConfigImgUrl8&&""!=n.data.brandConfigImgUrl8&&t.push({imgurl:n.data.brandConfigImgUrl8}),null!=n.data.brandConfigImgUrl9&&""!=n.data.brandConfigImgUrl9&&t.push({imgurl:n.data.brandConfigImgUrl9}),null!=n.data.brandConfigImgUrl10&&""!=n.data.brandConfigImgUrl10&&t.push({imgurl:n.data.brandConfigImgUrl10}),console.log("brandSlideUrls ==> "),console.log(t),console.log("brandSlideUrls ==> "),a.setData({storeInfoTelephoneNum:n.data.storeInfoTelephoneNum,brandConfigPhoneNum:n.data.brandConfigPhoneNum,brandConfigContact:n.data.brandConfigContact,brandSlideUrls:t}),null==n.data.content&&(n.data.content="");var e='<div class="word">'+n.data.content+"</div>";console.log("article ==> "+e),o.wxParse("article","html",e,a,20)}})},fail:function(a){console.log("====wx.getStorage storeId fail====")}})},onReady:function(){},closeTk:function(){a.setData({displa:!1})},onShow:function(){a=this,wx.onSocketMessage(function(o){console.log("===========接收到服务器信息=============="),console.log(o.data),n.getTkInfos(a,o),n.playMusic(a,o)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(a){n.conSocket(a.data,t)}})})},onHide:function(){},onUnload:function(){n.colseSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),a=this,setTimeout(function(){a.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:a.data.shareTitle,desc:"",imageUrl:a.data.shareImgUrl,path:"/pages/index/index?storeId="+a.data.storeId+"&companyId="+a.data.companyId,success:function(a){console.log("转发成功")},fail:function(a){console.log("转发失败")}}}}); 
 			}); 	require("pages/brand/brand.js");
 		__wxRoute = 'pages/user/comment/comment';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/comment/comment.js';	define("pages/user/comment/comment.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=require("../../../utils/util.js"),a=getApp().globalData.httpUrl;Page({data:{clicked:0,noMore:!1,grade1:"",grade2:"",grade3:"",grade4:"",grade5:"",discusses:[],discussStar:0,starUrls:[]},fixNull:function(e){return null==e&&(e=0),e},fixNulls:function(e){return null==e&&(e=""),e},getDetail:function(t){var a=t.currentTarget.dataset.index,o=e.data.infos2[a].storeRatedFoodStartLevel,r=t.currentTarget.dataset.orderId,s=t.currentTarget.dataset.orderType;"Y"==s?(wx.setStorage({key:"ydFlg",data:!0}),wx.setStorage({key:"dcFlg",data:!1}),wx.setStorage({key:"wmFlg",data:!1})):"D"==s?(wx.setStorage({key:"ydFlg",data:!1}),wx.setStorage({key:"dcFlg",data:!0}),wx.setStorage({key:"wmFlg",data:!1})):"W"==s&&(wx.setStorage({key:"ydFlg",data:!1}),wx.setStorage({key:"dcFlg",data:!1}),wx.setStorage({key:"wmFlg",data:!0})),""==o&&(o=0);var d=e.data.infos2[a].storeRatedRemarke;""==d&&(d="无评论"),wx.setStorage({key:"remarke",data:d}),wx.setStorage({key:"point",data:o}),wx.setStorage({key:"orderId",data:r}),wx.setStorage({key:"orderType",data:s}),wx.navigateTo({url:"../../index/order/evalOrder/evaluatedOrder/evaluatedOrder?comment=1"})},onLoad:function(o){e=this,t.getShareInfos(e,a),t.setCompanyId(e,o),t.setStoreId(e),t.setStoreInfo(e),wx.getStorage({key:"storeId",success:function(t){wx.request({url:a+"skstoremodel/getStoreRatedByStoreId",data:{storeRatedStoreInfoStoreId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({grade1:e.fixNull(t.data.comprehensiveStartLevel),grade2:e.fixNull(t.data.storeRatedFoodStartLevel),grade3:e.fixNull(t.data.storeRatedServiceStartLevel),grade4:e.fixNull(t.data.storeRatedEnvironmentStartLevel),grade5:e.fixNull(t.data.storeRatedSendSartLevel)})}}),wx.request({url:a+"skstoremodel/getListStoreRatedByStoreId",data:{storeRatedStoreInfoStoreId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.setData({discusses:t.data});var a=t.data,o=e.data.starUrls;for(var r in a)o[r]=e.setStart(a[r].storeRatedFoodStartLevel);e.setData({starurls:o});var s=[],d=!1;if(a.length>=10){for(var n=0;n<10;n++)s[n]=a[n];d=!1}else{for(var l=0;l<a.length;l++)s[l]=a[l];d=!0}e.setData({infos2:s,noMore:d})}})}})},setStart:function(e){for(var t={},a=0;a<5;a++)t[a]=a<=e-1?{starurl:"../../../images/star.png"}:e-a>0&&e-a<1?{starurl:"../../../images/halfStar.png"}:{starurl:"../../../images/emptyStar.png"};return t},getMore:function(){if(1!=e.data.noMore){var t=e.data.infos2,a=e.data.clicked,o=!1;if(10+10*(a+=1)<=e.data.discusses.length){for(var r=0;r<10+10*a;r++)t[r]=e.data.discusses[r];o=!1}else{for(var s=0;s<e.data.discusses.length;s++)t[s]=e.data.discusses[s];o=!0}e.setData({infos2:t,clicked:a,noMore:o})}else wx.showToast({title:"无更多信息",icon:"loading",duration:1e3})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(a){console.log("===========接收到服务器信息=============="),console.log(a.data),t.getTkInfos(e,a),t.playMusic(e,a)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){t.conSocket(e.data,a)}})})},onHide:function(){},onUnload:function(){t.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){e.getMore()},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}}}); 
 			}); 	require("pages/user/comment/comment.js");
 		__wxRoute = 'pages/user/myCash/myCash';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/myCash/myCash.js';	define("pages/user/myCash/myCash.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,a=require("../../../utils/wx_x_config.js"),t=require("../../../utils/util.js"),o=require("../../../module/getPhone.js"),n=getApp(),s=n.globalData.appId,d=n.globalData.httpUrl;Page({data:{tipTitle:"充值活动：",displayFlg:"none",money:0,hasMore:!1,getedMore:!1,allowToClick:!0,allowToPay:!0,pd:"",displayy:"none",displayy_0:"none",display:"none"},fixNull:function(e){return null==e&&(e=0),e},fixNulls:function(e){return null==e&&(e=""),e},onLoad:function(a){e=this,"1"==a.secondIn?e.setData({secondIn:!0}):e.setData({secondIn:!1});var o=decodeURIComponent(a.scene);if("undefined"!=o&&void 0!=o&&null!=o&&"null"!=o){var n=o.split(",")[0].replace('"',"");o.split(",")[1].replace('"',"");e.setData({scene:o,saoma:!0}),wx.request({url:d+"skstoremodel/findStoreById",data:{pid:n},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){e.setData({storeInfo:o.data}),wx.setStorage({key:"storeInfo",data:o.data}),wx.setStorage({key:"storeName",data:o.data.storeInfoName}),wx.setNavigationBarTitle({title:o.data.storeInfoName});var n=o.data.storeInfoStoreId;e.setData({storeId:n}),wx.setStorageSync("storeId",n),t.getShareInfos(e,d),e.resendIndex(n),t.getShareInfos(e,d),t.setCompanyId(e,a),t.setStoreId(e),e.findWechatUserById(),wx.getStorage({key:"companyId",success:function(a){wx.getStorage({key:"userId",success:function(t){wx.request({url:d+"skmembermodel/findVipCardBy",data:{companyId:a.data,storeId:n},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){wx.setStorage({key:"vipCard",data:a.data});a.data;var o=a.data.isExistence;wx.request({url:d+"skmembermodel/findWechatUserById",data:{wechatUserId:t.data,wechatUserStoreStoreInfoStoreId:n},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var t=a.data;wx.request({url:d+"skordermodel/getShakeActivityByIdWX",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{storeId:n},success:function(a){var s=a.data.isUseVip;e.setData({jiazaizhong:!1}),"v"!=t.wechatUserStoreIdentity&&s?o?(wx.request({url:d+"skmembermodel/findVipCardBy",data:{companyId:e.data.companyId,storeId:n},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var a=e.data.id;wx.setStorage({key:"cardId",data:a}),wx.setStorage({key:"storeId",data:n})}}),e.setData({display:"block"})):wx.showModal({title:"商家无会员卡可领",content:"无法参与活动",success:function(a){a.confirm?(e.setData({display:"none"}),wx.switchTab({url:"../index/index"})):a.cancel&&(e.setData({display:"none"}),wx.switchTab({url:"../index/index"}))}}):e.setData({allowShake:!0})}})}})}})}})}})}})}else t.getShareInfos(e,d),t.setCompanyId(e,a),t.setStoreId(e),e.findWechatUserById()},getPhoneNumber:function(a){console.log("=====摇一摇进入开始获取手机号====="),console.log("getPhoneNumber得到的初始向量===》"+a.detail.iv),console.log("getPhoneNumber得到的加密数据===》"+a.detail.encryptedData);var t=e.data.isVip;console.log(t+"=====会员===="),console.log("=====开始判断授权===="),"getPhoneNumber:fail user deny"==a.detail.errMsg||"getPhoneNumber:fail:cancel to confirm login"==a.detail.errMsg?console.log("=====不同意授权===="):(e.setData({display:"none"}),console.log("=====同意授权===="),wx.getStorage({key:"session_key",success:function(t){console.log("getStorage得到的session_key===》"+t.data),e.setData({session_key:t.data}),console.log("=====开始解密====="),o.getPhoneNum(a.detail.encryptedData,a.detail.iv,n.globalData.appId,e.data.session_key).then(function(a){e.setData({toGotoActive:!0}),setTimeout(function(){wx.redirectTo({url:"/pages/user/myCard/myCard?toGotoChuZhi=0&saoma=0"})},500)})}})),console.log("=====摇一摇获取手机号结束=====")},goToUser:function(){wx.switchTab({url:"/pages/index/index"})},resendIndex:function(a){e.setData({dcFlg:!0,orderType:"D"}),wx.request({url:d+"skstoremodel/findCompanyByAppid",data:{xcxAppid:n.globalData.appId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){wx.setStorage({key:"companyInfo",data:e.data}),wx.setStorage({key:"companyId",data:e.data.companyInfoId})}}),e.data.secondIn?wx.getStorage({key:"userId",success:function(e){e.data}}):wx.getStorage({key:"code",success:function(t){if(""!=t.data&&null!=t.data&&void 0!=t.data&&"undefined"!=t.data&&"null"!=t.data){e.setData({code:t.data});var o=t.data;wx.getSetting({success:function(t){if(t.authSetting["scope.userInfo"])console.log("============已授权==============="),wx.getUserInfo({success:function(t){e.setData({userInfo:t.userInfo}),wx.setStorage({key:"userName",data:t.userInfo.nickName}),wx.request({url:d+"skmembermodel/getOpenidS",data:{code:o,AppID:n.globalData.appId,Secret:n.globalData.Secret,storeUuid:a,wxUserNickName:t.userInfo.nickName,headImgUrl:e.data.userInfo.avatarUrl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data.wechatUser.wechatUserId;if(null!=e.data.openid&&""!=e.data.openid){var o=e.data.wechatUser.wechatUserStoreIdentity;wx.setStorage({key:"StoreIdentity",data:o}),wx.setStorage({key:"session_key",data:e.data.session_key}),wx.setStorage({key:"openId",data:e.data.openid}),wx.setStorage({key:"userId",data:t}),wx.setStorage({key:"storeId",data:a})}else wx.showToast({title:"登录失败"})}})},fali:function(e){}});else{console.log("==============未授权=================");var s="";s=e.data.storeInfo.storeInfoHeadImgUrl,wx.reLaunch({url:"../../welcome/accredit/accredit?data="+o+"&store_uuid="+a+"&imgurl="+s+"&goChuizhi=true&scene="+e.data.scene,success:function(e){},fail:function(e){}})}},fail:function(e){}})}else wx.getStorage({key:"userId",success:function(t){if(t.data)t.data;else e.resendIndex(a)},fail:function(){e.resendIndex(a)}})},fail:function(t){e.resendIndex(a)}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(a){console.log("===========接收到服务器信息=============="),console.log(a.data),t.getTkInfos(e,a),t.playMusic(e,a)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){t.conSocket(e.data,d)}})})},onHide:function(){},onUnload:function(){t.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},rechargeMoney:function(a){var t=a.detail.value;(t=(t=(t=(t=t.replace(/[^\d.]/g,"")).replace(/\.{2,}/g,".")).replace(".","$#$").replace(/\./g,"").replace("$#$",".")).replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3")).indexOf(".")<0&&""!=t&&(t=parseFloat(t)),e.setData({money:t})},recharge:function(){"v"==e.data.findWechatUserById.wechatUserStoreIdentity?e.setData({displayFlg:"block"}):e.setData({displayy:"block",titlename:"提示",carname:"您没有会员卡不能充值"})},cancel:function(){e.setData({displayFlg:"none"})},wxPay:function(t){var o=this;e.data.allowToClick?(e.setData({displayFlg:"none",allowToClick:!1}),setTimeout(function(){e.setData({allowToClick:!0});var t=o.data.storeId,n=o.data.userId,r=(1*o.data.money).toFixed(2);if(e.setData({money:r}),null!=r&&""!=r)if(r<0)e.setData({displayy:"block",titlename:"提示",carname:"充值金额必须为正"});else if(r>1e4)e.setData({displayy:"block",titlename:"提示",carname:"单次充值不可多于1万元"});else if(0!=r){var c=a.getWxPayOrdrID();e.setData({companyOrderNumber:c}),wx.request({url:d+"skmembermodel/wxPay",data:{wx_user_uuid:n,order_a_num:c,order_a_money:r,appid:s,storeId:t},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){console.log("支付调用 == >"),console.log(a.data),e.doWxPay(a.data,n,t,r)}})}else e.setData({displayy:"block",titlename:"提示",carname:"充值金额不可为0"});else e.setData({displayy:"block",titlename:"提示",carname:"充值金额不能为空"})},100)):e.setData({displayFlg:"none"})},doWxPay:function(a,t,o,n){console.log("param:"+a),console.log("nonceStr:"+a.nonceStr),console.log("wx_user_uuid:"+t),console.log("store_uuid:"+o),console.log("money:"+n),wx.requestPayment({timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:"MD5",paySign:a.paySign,success:function(a){e.setData({sofFlg:"s"});var t=e.data.pd;if(console.log("判断码===》"+t),""==t){console.log("========是否通过回调=======");e.updatebBalance("s")}},fail:function(a){console.log("支付失败"),console.log(a),console.log(a.errMsg),e.setData({pd:0}),e.setData({sofFlg:"f"})}})},updatebBalance:function(a){var t=e.data.storeId,o=e.data.userId,n=(1*e.data.money).toFixed(2);e.setData({balanceAdd:n}),wx.request({url:d+"skmembermodel/updatebBalanceNew",data:{wxUserUuid:o,balanceAdd:n,storeUuid:t,sofFlg:a,companyOrderNumber:e.data.companyOrderNumber},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){if(e.setData({allowToPay:!0}),"s"==e.data.sofFlg){a.data.jifen;e.setData({displayy_0:"block",titlename_0:"提示",carname_0:"支付成功"})}}})},chkOrder0:function(e){wx.switchTab({url:"../../index/index"})},findWechatUserById:function(){wx.getStorage({key:"userId",success:function(a){e.setData({userId:a.data}),wx.getStorage({key:"storeId",success:function(t){e.setData({storeId:t.data}),wx.request({url:d+"skmembermodel/findWechatUserById",data:{wechatUserId:a.data,wechatUserStoreStoreInfoStoreId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){e.setData({findWechatUserById:a.data,wechatUserStoreBalance:a.data.wechatUserStoreBalance});var t=a.data.vipCardId;e.getvipCardRuleWX(t)}})}})}})},getvipCardRuleWX:function(a){wx.request({url:d+"skmembermodel/getvipCardRuleWX",data:{vipcardId:a},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var t=a.data;console.log(t.length);var o=[];for(var n in t)o[n]=t[n].ruleType;t.length>5&&e.setData({hasMore:!0}),e.setData({getvipCardRuleWX:a.data,ruleType:o})}})},getMoreTip:function(){e.data.getedMore?e.setData({getedMore:!1}):e.setData({getedMore:!0})}}); 
 			}); 	require("pages/user/myCash/myCash.js");
 		__wxRoute = 'pages/user/shopNotice/shopNotice';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/shopNotice/shopNotice.js';	define("pages/user/shopNotice/shopNotice.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o,e=require("../../../utils/util.js"),t=getApp().globalData.httpUrl;Page({data:{clicked:0,noMore:!1,notices:[],date:"",noticeTitle:"",noticeText:""},fixNull:function(o){return null==o&&(o=0),o},fixNulls:function(o){return null==o&&(o=""),o},onLoad:function(n){o=this,wx.getStorage({key:"storeId",success:function(e){wx.request({url:t+"skstoremodel/findStoreNoticeList",data:{storeId:e.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log(e.data);var t=e.data;o.setData({notices:t})}})}}),e.getShareInfos(o,t),e.setCompanyId(o,n),e.setStoreId(o),e.setStoreInfo(o)},onReady:function(){},closeTk:function(){o.setData({displa:!1})},onShow:function(){o=this,wx.onSocketMessage(function(t){console.log("===========接收到服务器信息=============="),console.log(t.data),e.getTkInfos(o,t),e.playMusic(o,t)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(o){e.conSocket(o.data,t)}})})},onHide:function(){},onUnload:function(){e.closeSock()},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:o.data.shareTitle,desc:"",imageUrl:o.data.shareImgUrl,path:"/pages/index/index?storeId="+o.data.storeId+"&companyId="+o.data.companyId,success:function(o){console.log("转发成功")},fail:function(o){console.log("转发失败")}}}}); 
 			}); 	require("pages/user/shopNotice/shopNotice.js");
 		__wxRoute = 'pages/user/shippingAddress/shippingAddress';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/shippingAddress/shippingAddress.js';	define("pages/user/shippingAddress/shippingAddress.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,s=require("../../../utils/util.js"),t=getApp().globalData.httpUrl;Page({data:{displayy_0:"none",addresses:[],mraddresses1:[],ptaddresses1:[],mraddresses2:[],ptaddresses2:[],isFold:!0,isFolds:!0,sq:0,sqq:0,delete_fuc:""},checkboxChange:function(s){var a=s.detail.value.length;wx.getStorage({key:"userId",success:function(d){wx.request({url:t+"skmembermodel/updateAddressIsDefault",data:{wechatUserAddressWechatUserId:d.data,wechatUserAddressIsDefault:a,wechatUserAddressId:s.currentTarget.dataset.addressId,addressType:s.currentTarget.dataset.type},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){e.onLoad()}})}})},showAll:function(e){this.setData({isFold:!this.data.isFold,sq:!this.data.sq})},showAlls:function(e){this.setData({isFolds:!this.data.isFolds,sqq:!this.data.sqq})},onLoad:function(a){e=this,s.getShareInfos(e,t),s.setCompanyId(e,a),s.setStoreId(e),s.setStoreInfo(e),wx.getStorage({key:"userId",success:function(s){wx.request({url:t+"skmembermodel/getAddress",data:{wechatUserAddressWechatUserId:s.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){var t=s.data[0],a=s.data[1],d=[],o=[],n=[],r=[],c=void 0,l=void 0;for(c in t)if(1==t[c].wechatUserAddressIsDefault){var i=[{name:"mrdz",value:"默认地址",checked:!0}];t[c].checklist=i,d[0]=t[c]}else{var u=[{name:"mrdz",value:"默认地址",checked:!1}];t[c].checklist=u,n.push(t[c])}for(l in a)if(1==a[l].wechatUserAddressIsDefault){var h=[{name:"mrdz",value:"默认地址",checked:!0}];a[l].checklist=h,o[0]=a[l]}else{var f=[{name:"mrdz",value:"默认地址",checked:!1}];a[l].checklist=f,r.push(a[l])}e.setData({mraddresses1:d,mraddresses2:o,ptaddresses1:n,ptaddresses2:r})}})}})},onReady:function(){console.log("===onReady===")},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(t){console.log("===========接收到服务器信息=============="),console.log(t.data),s.getTkInfos(e,t),s.playMusic(e,t)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){s.conSocket(e.data,t)}})}),console.log("===onShow==="),e.onLoad()},onHide:function(){console.log("===onHide===")},onUnload:function(){console.log("===onUnload==="),s.closeSock()},onPullDownRefresh:function(){console.log("===onPullDownRefresh==="),wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},addAddress:function(e){wx.getLocation({type:"wgs84",success:function(s){var t=s;wx.setStorage({key:"jwd",data:t}),setTimeout(function(){wx.navigateTo({url:"addAddress/addAddress?type="+e.currentTarget.dataset.type})},100),console.log(s)},fail:function(e){console.log("为嘛获取不到经纬===》",e)}})},chkOrder_0:function(){console.log("用户点击确定");var s=this.data.delete_fuc;wx.request({url:t+"skmembermodel/updateAddress",data:{wechatUserAddressId:s.currentTarget.dataset.addressId,wechatUserAddressDeflg:1},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){e.onLoad()}})},chkOrde_0:function(){console.log("用户点击取消")},deleteAddress:function(s){e.setData({displayy_0:"block",carname_0:"确定要删除选中地址么？",titlename_0:"删除地址",delete_fuc:s})},editAddress:function(e){wx.navigateTo({url:"addAddress/addAddress?address="+e.currentTarget.dataset.addressId+"&type="+e.currentTarget.dataset.type})}}); 
 			}); 	require("pages/user/shippingAddress/shippingAddress.js");
 		__wxRoute = 'pages/user/shippingAddress/addAddress/addAddress';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/shippingAddress/addAddress/addAddress.js';	define("pages/user/shippingAddress/addAddress/addAddress.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../../util/qqmap-wx-jssdk.js");var e,a=require("../../../../utils/util.js"),t=getApp().globalData.httpUrl,s=!1;Page({data:{cartArr:[{name:"男",value:"男",checked:!0},{name:"女",value:"女",checked:!1}],sex:"男",name:"",telphone:"",address:"",countryIndex:6,region:[],savedAddress:!1,longitude:"",latitude:"",addName:"",addJw:"",province:"",city:"",district:""},sexChange:function(a){e.setData({sex:a.detail.value})},changeRegin:function(a){console.log("选择了什么区",a.detail.value),e.setData({region:a.detail.value}),wx.request({url:t+"skmembermodel/selLonAndLatByAddress",data:{wechatUserAddressAddress:a.detail.value+","+e.data.addName},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){console.log("小修改省市区---",a.data);a.data;e.data.region[2]==e.data.region0[2]?console.log("我是一样的"):(console.log("我是不一样的"),e.setData({longitude:a.data.lat,latitude:a.data.lng}))}})},bindNameInput:function(a){e.setData({name:a.detail.value})},bindTelInput:function(a){e.setData({telphone:a.detail.value})},bindAddressInput:function(a){e.setData({address:a.detail.value})},onLoad:function(s){e=this,console.log("options------------------",s),a.getShareInfos(e,t),a.setCompanyId(e,s),a.setStoreId(e),a.setStoreInfo(e);var d=s.type;console.log(d),e.setData({addressType:d});var o=s.address;o?wx.getLocation({type:"wgs84",success:function(a){console.log("获取经纬度",a),e.setData({longi:a.longitude,latit:a.latitude})},fail:function(e){console.log("为嘛获取不到经纬===》",e)}}):wx.getStorage({key:"jwd",success:function(a){var t=a.data.longitude,s=a.data.latitude;console.log("获取-----",a),e.setData({longitude:t,latitude:s,longi:t,latit:s}),e.ssq()}}),console.log(s),console.log("options.type ==> "+s.type),o?(e.setData({addressId:o}),wx.request({url:t+"skmembermodel/selAddressByid",data:{wechatUserAddressId:o},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){console.log("res.data ==> "),console.log(a.data);var t=e.data.region;t=a.data.wechatUserAddressAddress.split(",");for(var s=e.data.cartArr,o=a.data.wechatUserAddressReceiverName,n=a.data.wechatUserAddressReceiverPhoneNum,r=a.data.wechatUserAddressFullAddress.split(","),l=0;l<r.length;l++)console.log("看看经纬度====>",r[l]),r[l];var i=r[0],c=r[1];for(var u in s)s[u].value==a.data.wechatUserAddressSex?s[u].checked=!0:s[u].checked=!1;e.setData({addressInfo:a.data,addressType:d,title:"修改地址",region:t,region0:t,cartArr:s,name:o,telphone:n,addName:i,address:c})}})):e.setData({addressType:d,title:"新增地址"})},ssq:function(){wx.request({url:t+"skmembermodel/getLocation",data:{lng:e.data.longitude,lat:e.data.latitude},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){console.log(e.data.longitude,"经度",e.data.latitude,"维度");var t=a.data.province,s=a.data.city,d=a.data.district,o=[];o.push(t),o.push(s),o.push(d),e.setData({region:o,region0:o,province:t,city:s,district:d})}})},onReady:function(){},closeTk:function(){e.setData({displa:!1})},onShow:function(){e=this,wx.onSocketMessage(function(t){console.log("===========接收到服务器信息=============="),console.log(t.data),a.getTkInfos(e,t),a.playMusic(e,t)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(e){a.conSocket(e.data,t)}})}),wx.getStorage({key:"addName",success:function(a){var t=a.data;e.setData({addName:t})}}),wx.removeStorage({key:"addName",success:function(e){}}),wx.getStorage({key:"addJw",success:function(a){for(var t=a.data.split(","),s=0;s<t.length;s++)console.log("看看经纬度====>",t[s]),t[s];console.log("经度====>",t[0]),console.log("纬度====>",t[1]),e.setData({longitude:t[0],latitude:t[1]})}}),wx.removeStorage({key:"addJw",success:function(e){}})},onHide:function(){},onUnload:function(){a.closeSock()},onPullDownRefresh:function(){wx.stopPullDownRefresh(),e=this,setTimeout(function(){e.onPullDownRefresh()},500)},onReachBottom:function(){},seAddress:function(){var a=e.data.region[1];console.log("获得的城市==>",a),wx.setStorage({key:"saddress",data:a});var s=e.data.region;wx.request({url:t+"skmembermodel/selLonAndLatByAddress",data:{wechatUserAddressAddress:s},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var t=a.data;e.data.region[2]==e.data.region0[2]?(console.log("我是一样的"),wx.setStorage({key:"re",data:{lng:e.data.longi,lat:e.data.latit}})):(console.log("我是不一样的"),wx.setStorage({key:"re",data:t})),setTimeout(function(){wx.navigateTo({url:"../seAddress/seAddress"})},50)}})},onShareAppMessage:function(){return{title:e.data.shareTitle,desc:"",imageUrl:e.data.shareImgUrl,path:"/pages/index/index?storeId="+e.data.storeId+"&companyId="+e.data.companyId,success:function(e){console.log("转发成功")},fail:function(e){console.log("转发失败")}}},saveAddress:function(){var e=this;if(!s){s=!0;var a=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;if(null==e.data.name||""==e.data.name)return e.setData({popErrorMsg:"姓名不能为空"}),void e.ohShitfadeOut();if(!e.data.savedAddress){if(null==e.data.telphone||""==e.data.telphone)return e.setData({popErrorMsg:"手机号不能为空"}),void e.ohShitfadeOut();if(!a.test(e.data.telphone))return e.setData({popErrorMsg:"手机号码格式错误"}),void e.ohShitfadeOut();if(null==e.data.address||""==e.data.address)return e.setData({popErrorMsg:"详细地址不能为空"}),void e.ohShitfadeOut();if(null==e.data.addName||""==e.data.addName)return e.setData({popErrorMsg:"收货地址不能为空"}),void e.ohShitfadeOut();e.setData({savedAddress:!0}),wx.getStorage({key:"userId",success:function(a){var d=void 0;d="新增地址"==e.data.title?t+"skmembermodel/insertAddress":t+"skmembermodel/updateAddress";var o=e.data.addName+","+e.data.address;setTimeout(function(){wx.request({url:d,data:{wechatUserAddressId:e.data.addressId,wechatUserAddressWechatUserId:a.data,wechatUserAddressFullAddress:o,wechatUserAddressIsDefault:"0",wechatUserAddressReceiverName:e.data.name,wechatUserAddressReceiverPhoneNum:e.data.telphone,wechatUserAddressAddress:e.data.region,wechatUserAddressSex:e.data.sex,addressType:e.data.addressType,longitude:e.data.latitude,latitude:e.data.longitude},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){wx.setStorage({key:"addressType",data:e.data.addressType}),wx.setStorage({key:"onshow",data:!0}),wx.navigateBack()},complete:function(e){s=!1}})},1e3)}})}}},ohShitfadeOut:function(){var a=setTimeout(function(){e.setData({popErrorMsg:""}),clearTimeout(a)},3e3)}}); 
 			}); 	require("pages/user/shippingAddress/addAddress/addAddress.js");
 		__wxRoute = 'pages/user/shippingAddress/seAddress/seAddress';__wxRouteBegin = true; 	define("pages/user/shippingAddress/seAddress/seAddress.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp().globalData.httpUrl;Page({data:{saddress:"",longitude:"",latitude:"",addressName:"",coordinate:"",word:"",addName:""},onLoad:function(a){var e=this;wx.getStorage({key:"saddress",success:function(a){var t=a.data;e.setData({saddress:t})}}),wx.getStorage({key:"re",success:function(a){var t=a.data.lng,d=a.data.lat;e.setData({longitude:t,latitude:d}),""!=t&&e.scope()}})},scope:function(){console.log("===jinlaimei");var e=this,t=e.data.longitude,d=e.data.latitude;wx.request({url:a+"skordermodel/getNearbyAddress",data:{lng:t,lat:d},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){e.setData({addressName:a.data.addressName,coordinate:a.data.coordinate})}})},sraddres:function(a){var e=this;console.log("=====输入===="),this.setData({word:a.detail.value}),e.seAddres()},seAddres:function(){var e=this,t=e.data.saddress,d=e.data.word;wx.request({url:a+"skordermodel/getKeywordAddress",data:{city:t,keyword:d},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){e.setData({addressName:a.data.addressName,coordinate:a.data.coordinate})}})},xzAddress:function(a){var e=this,t=a.currentTarget.dataset.add,d=a.currentTarget.dataset.x;e.setData({addName:t}),wx.setStorage({key:"addName",data:t}),wx.setStorage({key:"addJw",data:d}),setTimeout(function(){wx.navigateBack({})},500)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/user/shippingAddress/seAddress/seAddress.js");
 		__wxRoute = 'pages/maps/maps';__wxRouteBegin = true; 	define("pages/maps/maps.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a,t=require("../../utils/util.js"),e=(require("../wxParse/wxParse.js"),getApp().globalData.httpUrl),n=getApp();Page({data:{httpUrl:e,latitude:"",longitude:"",markers:[],storeInfoTelephoneNum:""},goToUser:function(){wx.switchTab({url:"/pages/index/index"})},onLoad:function(n){a=this,console.log("=============开始定位========="),"1"==n.secondIn?a.setData({secondIn:!0}):a.setData({secondIn:!1});var o=decodeURIComponent(n.scene);if("undefined"!=o&&void 0!=o&&null!=o&&"null"!=o){var d=o.split(",")[0].replace('"',"");o.split(",")[1].replace('"',"");a.setData({scene:o,saoma:!0}),wx.request({url:e+"skstoremodel/findStoreById",data:{pid:d},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){a.setData({storeInfo:o.data}),wx.setStorage({key:"storeInfo",data:o.data}),wx.setStorage({key:"storeName",data:o.data.storeInfoName}),wx.setNavigationBarTitle({title:o.data.storeInfoName});var d=o.data.storeInfoStoreId;a.setData({storeId:d}),wx.setStorageSync("storeId",d),a.resendIndex(d),t.getShareInfos(a,e),t.setCompanyId(a,n),t.setStoreId(a),wx.getLocation({type:"wgs84",success:function(t){console.log(t),console.log("地图的精度",t.longitude),console.log("地图的维度",t.latitude),a.setData({latitude:t.latitude,longitude:t.longitude,markers:[{iconPath:"",id:0,latitude:t.latitude,longitude:t.longitude,width:0,height:0,title:"",borderRadius:20,callout:{padding:0,content:"",bgColor:"#DC143C",color:"#FFFF00",display:"ALWAYS"},label:{content:""},anchor:{}}],circles:[{latitude:t.latitude,longitude:t.longitude,radius:10,strokeWidth:2,fillColor:"#FAFAD2",color:"#90EE90"}]})}}),t.getShareInfos(a,e),wx.getStorage({key:"storeInfo",success:function(t){wx.setNavigationBarTitle({title:t.data.storeInfoName}),a.setData({storeInfoName:t.data.storeInfoName,storeInfoAddress:t.data.storeInfoAddress,storeInfoHeadImgUrl:t.data.storeInfoHeadImgUrl,storeInfoBusinessTime:t.data.storeInfoBusinessStartTime+"-"+t.data.storeInfoBusinessEndTime})}}),t.setCompanyId(a,n),wx.getStorage({key:"storeId",success:function(t){a.setData({storeId:t.data}),console.log("====wx.getStorage storeId success===="),wx.request({url:e+"skstoremodel/findBrandConfigById",data:{storeId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log("====findBrandConfigById success===="),console.log(t.data);var e=[];null!=t.data.brandConfigImgUrl1&&""!=t.data.brandConfigImgUrl1&&e.push({imgurl:t.data.brandConfigImgUrl1}),null!=t.data.brandConfigImgUrl2&&""!=t.data.brandConfigImgUrl2&&e.push({imgurl:t.data.brandConfigImgUrl2}),null!=t.data.brandConfigImgUrl3&&""!=t.data.brandConfigImgUrl3&&e.push({imgurl:t.data.brandConfigImgUrl3}),null!=t.data.brandConfigImgUrl4&&""!=t.data.brandConfigImgUrl4&&e.push({imgurl:t.data.brandConfigImgUrl4}),null!=t.data.brandConfigImgUrl5&&""!=t.data.brandConfigImgUrl5&&e.push({imgurl:t.data.brandConfigImgUrl5}),null!=t.data.brandConfigImgUrl6&&""!=t.data.brandConfigImgUrl6&&e.push({imgurl:t.data.brandConfigImgUrl6}),null!=t.data.brandConfigImgUrl7&&""!=t.data.brandConfigImgUrl7&&e.push({imgurl:t.data.brandConfigImgUrl7}),null!=t.data.brandConfigImgUrl8&&""!=t.data.brandConfigImgUrl8&&e.push({imgurl:t.data.brandConfigImgUrl8}),null!=t.data.brandConfigImgUrl9&&""!=t.data.brandConfigImgUrl9&&e.push({imgurl:t.data.brandConfigImgUrl9}),null!=t.data.brandConfigImgUrl10&&""!=t.data.brandConfigImgUrl10&&e.push({imgurl:t.data.brandConfigImgUrl10}),a.setData({storeInfoTelephoneNum:t.data.storeInfoTelephoneNum,brandConfigPhoneNum:t.data.brandConfigPhoneNum,brandConfigContact:t.data.brandConfigContact,brandSlideUrls:e}),null==t.data.content&&(t.data.content="")}})},fail:function(a){console.log("====wx.getStorage storeId fail====")}})}})}else t.getShareInfos(a,e),t.setCompanyId(a,n),t.setStoreId(a),wx.getLocation({type:"wgs84",success:function(t){console.log(t),console.log("地图的精度",t.longitude),console.log("地图的维度",t.latitude),a.setData({latitude:t.latitude,longitude:t.longitude,markers:[{iconPath:"",id:0,latitude:t.latitude,longitude:t.longitude,width:0,height:0,title:"",borderRadius:20,callout:{padding:0,content:"",bgColor:"#DC143C",color:"#FFFF00",display:"ALWAYS"},label:{content:""},anchor:{}}],circles:[{latitude:t.latitude,longitude:t.longitude,radius:10,strokeWidth:2,fillColor:"#FAFAD2",color:"#90EE90"}]})}}),t.getShareInfos(a,e),wx.getStorage({key:"storeInfo",success:function(t){wx.setNavigationBarTitle({title:t.data.storeInfoName}),a.setData({storeInfoName:t.data.storeInfoName,storeInfoAddress:t.data.storeInfoAddress,storeInfoHeadImgUrl:t.data.storeInfoHeadImgUrl,storeInfoBusinessTime:t.data.storeInfoBusinessStartTime+"-"+t.data.storeInfoBusinessEndTime})}}),t.setCompanyId(a,n),wx.getStorage({key:"storeId",success:function(t){a.setData({storeId:t.data}),console.log("====wx.getStorage storeId success===="),wx.request({url:e+"skstoremodel/findBrandConfigById",data:{storeId:t.data},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log("====findBrandConfigById success===="),console.log(t.data);var e=[];null!=t.data.brandConfigImgUrl1&&""!=t.data.brandConfigImgUrl1&&e.push({imgurl:t.data.brandConfigImgUrl1}),null!=t.data.brandConfigImgUrl2&&""!=t.data.brandConfigImgUrl2&&e.push({imgurl:t.data.brandConfigImgUrl2}),null!=t.data.brandConfigImgUrl3&&""!=t.data.brandConfigImgUrl3&&e.push({imgurl:t.data.brandConfigImgUrl3}),null!=t.data.brandConfigImgUrl4&&""!=t.data.brandConfigImgUrl4&&e.push({imgurl:t.data.brandConfigImgUrl4}),null!=t.data.brandConfigImgUrl5&&""!=t.data.brandConfigImgUrl5&&e.push({imgurl:t.data.brandConfigImgUrl5}),null!=t.data.brandConfigImgUrl6&&""!=t.data.brandConfigImgUrl6&&e.push({imgurl:t.data.brandConfigImgUrl6}),null!=t.data.brandConfigImgUrl7&&""!=t.data.brandConfigImgUrl7&&e.push({imgurl:t.data.brandConfigImgUrl7}),null!=t.data.brandConfigImgUrl8&&""!=t.data.brandConfigImgUrl8&&e.push({imgurl:t.data.brandConfigImgUrl8}),null!=t.data.brandConfigImgUrl9&&""!=t.data.brandConfigImgUrl9&&e.push({imgurl:t.data.brandConfigImgUrl9}),null!=t.data.brandConfigImgUrl10&&""!=t.data.brandConfigImgUrl10&&e.push({imgurl:t.data.brandConfigImgUrl10}),a.setData({storeInfoTelephoneNum:t.data.storeInfoTelephoneNum,brandConfigPhoneNum:t.data.brandConfigPhoneNum,brandConfigContact:t.data.brandConfigContact,brandSlideUrls:e}),null==t.data.content&&(t.data.content="")}})},fail:function(a){console.log("====wx.getStorage storeId fail====")}})},resendIndex:function(t){a.setData({dcFlg:!0,orderType:"D"}),wx.request({url:e+"skstoremodel/findCompanyByAppid",data:{xcxAppid:n.globalData.appId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){wx.setStorage({key:"companyInfo",data:a.data}),wx.setStorage({key:"companyId",data:a.data.companyInfoId})}}),a.data.secondIn?wx.getStorage({key:"userId",success:function(a){a.data}}):wx.getStorage({key:"code",success:function(o){if(""!=o.data&&null!=o.data&&void 0!=o.data&&"undefined"!=o.data&&"null"!=o.data){a.setData({code:o.data});var d=o.data;wx.getSetting({success:function(o){if(o.authSetting["scope.userInfo"])console.log("============已授权==============="),wx.getUserInfo({success:function(o){a.setData({userInfo:o.userInfo}),wx.setStorage({key:"userName",data:o.userInfo.nickName}),wx.request({url:e+"skmembermodel/getOpenidS",data:{code:d,AppID:n.globalData.appId,Secret:n.globalData.Secret,storeUuid:t,wxUserNickName:o.userInfo.nickName,headImgUrl:a.data.userInfo.avatarUrl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var e=a.data.wechatUser.wechatUserId;if(null!=a.data.openid&&""!=a.data.openid){var n=a.data.wechatUser.wechatUserStoreIdentity;wx.setStorage({key:"StoreIdentity",data:n}),wx.setStorage({key:"session_key",data:a.data.session_key}),wx.setStorage({key:"openId",data:a.data.openid}),wx.setStorage({key:"userId",data:e}),wx.setStorage({key:"storeId",data:t})}else wx.showToast({title:"登录失败"})}})},fali:function(a){}});else{console.log("==============未授权=================");var r="";r=a.data.storeInfo.storeInfoHeadImgUrl,wx.reLaunch({url:"../welcome/accredit/accredit?data="+d+"&store_uuid="+t+"&imgurl="+r+"&goDaohang=true&scene="+a.data.scene,success:function(a){},fail:function(a){}})}},fail:function(a){}})}else wx.getStorage({key:"userId",success:function(e){if(e.data)e.data;else a.resendIndex(t)},fail:function(){a.resendIndex(t)}})},fail:function(e){a.resendIndex(t)}})},onReady:function(){},locationClick:function(t){wx.getLocation({type:"wgs84",success:function(t){console.log(t),a.setData({latitude:t.latitude,longitude:t.longitude,markers:[{iconPath:"",id:0,latitude:t.latitude,longitude:t.longitude,width:0,height:0,title:"当前位置",callout:{padding:10,content:"当前位置",bgColor:"#DC143C",color:"#FFFF00",display:"ALWAYS"},label:{content:""},anchor:{}}]})}})},closeTk:function(){a.setData({displa:!1})},onShow:function(){console.log("=========地图onShow========="),a=this,wx.onSocketMessage(function(e){console.log("===========接收到服务器信息=============="),console.log(e.data),t.getTkInfos(a,e),t.playMusic(a,e)}),wx.onSocketClose(function(){console.log("=======webSocket已关闭========="),wx.getStorage({key:"userId",success:function(a){t.conSocket(a.data,e)}})})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){wx.stopPullDownRefresh(),a=this,setTimeout(function(){a.onPullDownRefresh()},500)},onReachBottom:function(){},onShareAppMessage:function(){return{title:a.data.shareTitle,desc:"",imageUrl:a.data.shareImgUrl,path:"/pages/index/index?storeId="+a.data.storeId+"&companyId="+a.data.companyId,success:function(a){console.log("转发成功")},fail:function(a){console.log("转发失败")}}},call:function(){var t=a.data.storeInfoTelephoneNum;wx.makePhoneCall({phoneNumber:t,success:function(){console.log("拨打电话成功！")},fail:function(){console.log("拨打电话失败！")}})},dh:function(){wx.navigateTo({url:"../map/map"})}}); 
 			}); 	require("pages/maps/maps.js");
 	