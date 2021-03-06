/**
 *
 * @author Codegong http://www.codegong.com/
 * @author Karson
 */
;(function () {
    // @formatter:off
    /*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
    var template =function(){function a(a){return a.replace(t,"").replace(u,",").replace(v,"").replace(w,"").replace(x,"").split(y)}function b(a){return"'"+a.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function c(c,d){function e(a){return m+=a.split(/\n/).length-1,k&&(a=a.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),a&&(a=s[1]+b(a)+s[2]+"\n"),a}function f(b){var c=m;if(j?b=j(b,d):g&&(b=b.replace(/\n/g,function(){return m++,"$line="+m+";"})),0===b.indexOf("=")){var e=l&&!/^=[=#]/.test(b);if(b=b.replace(/^=[=#]?|[\s;]*$/g,""),e){var f=b.replace(/\s*\([^\)]+\)/,"");n[f]||/^(include|print)$/.test(f)||(b="$escape("+b+")")}else b="$string("+b+")";b=s[1]+b+s[2]}return g&&(b="$line="+c+";"+b),r(a(b),function(a){if(a&&!p[a]){var b;b="print"===a?u:"include"===a?v:n[a]?"$utils."+a:o[a]?"$helpers."+a:"$data."+a,w+=a+"="+b+",",p[a]=!0}}),b+"\n"}var g=d.debug,h=d.openTag,i=d.closeTag,j=d.parser,k=d.compress,l=d.escape,m=1,p={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},q="".trim,s=q?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],t=q?"$out+=text;return $out;":"$out.push(text);",u="function(){var text=''.concat.apply('',arguments);"+t+"}",v="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+t+"}",w="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(g?"$line=0,":""),x=s[0],y="return new String("+s[3]+");";r(c.split(h),function(a){a=a.split(i);var b=a[0],c=a[1];1===a.length?x+=e(b):(x+=f(b),c&&(x+=e(c)))});var z=w+x+y;g&&(z="try{"+z+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+b(c)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var A=new Function("$data","$filename",z);return A.prototype=n,A}catch(a){throw a.temp="function anonymous($data,$filename) {"+z+"}",a}}var d=function(a,b){return"string"==typeof b?q(b,{filename:a}):g(a,b)};d.version="3.0.0",d.config=function(a,b){e[a]=b};var e=d.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},f=d.cache={};d.render=function(a,b){return q(a)(b)};var g=d.renderFile=function(a,b){var c=d.get(a)||p({filename:a,name:"Render Error",message:"Template not found"});return b?c(b):c};d.get=function(a){var b;if(f[a])b=f[a];else if("object"==typeof document){var c=document.getElementById(a);if(c){var d=(c.value||c.innerHTML).replace(/^\s*|\s*$/g,"");b=q(d,{filename:a})}}return b};var h=function(a,b){return"string"!=typeof a&&(b=typeof a,"number"===b?a+="":a="function"===b?h(a.call(a)):""),a},i={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},j=function(a){return i[a]},k=function(a){return h(a).replace(/&(?![\w#]+;)|[<>"']/g,j)},l=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},m=function(a,b){var c,d;if(l(a))for(c=0,d=a.length;c<d;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)},n=d.utils={$helpers:{},$include:g,$string:h,$escape:k,$each:m};d.helper=function(a,b){o[a]=b};var o=d.helpers=n.$helpers;d.onerror=function(a){var b="Template Error\n\n";for(var c in a)b+="<"+c+">\n"+a[c]+"\n\n";"object"==typeof console&&console.error(b)};var p=function(a){return d.onerror(a),function(){return"{Template Error}"}},q=d.compile=function(a,b){function d(c){try{return new i(c,h)+""}catch(d){return b.debug?p(d)():(b.debug=!0,q(a,b)(c))}}b=b||{};for(var g in e)void 0===b[g]&&(b[g]=e[g]);var h=b.filename;try{var i=c(a,b)}catch(a){return a.filename=h||"anonymous",a.name="Syntax Error",p(a)}return d.prototype=i.prototype,d.toString=function(){return i.toString()},h&&b.cache&&(f[h]=d),d},r=n.$each,s="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",t=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,u=/[^\w$]+/g,v=new RegExp(["\\b"+s.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),w=/^\d[^,]*|,\d[^,]*/g,x=/^,+|,+$/g,y=/^$|,+/;return d;}();
    var Zepto=function(){var Zepto=function(){var undefined,key,$,classList,emptyArray=[],concat=emptyArray.concat,filter=emptyArray.filter,slice=emptyArray.slice,document=window.document,elementDisplay={},classCache={},cssNumber={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},fragmentRE=/^\s*<(\w+|!)[^>]*>/,singleTagRE=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,tagExpanderRE=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rootNodeRE=/^(?:body|html)$/i,capitalRE=/([A-Z])/g,methodAttributes=["val","css","html","text","data","width","height","offset"],adjacencyOperators=["after","prepend","before","append"],table=document.createElement("table"),tableRow=document.createElement("tr"),containers={tr:document.createElement("tbody"),tbody:table,thead:table,tfoot:table,td:tableRow,th:tableRow,"*":document.createElement("div")},readyRE=/complete|loaded|interactive/,simpleSelectorRE=/^[\w-]*$/,class2type={},toString=class2type.toString,zepto={},camelize,uniq,tempParent=document.createElement("div"),propMap={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},isArray=Array.isArray||function(object){return object instanceof Array};zepto.matches=function(element,selector){if(!selector||!element||element.nodeType!==1)return false;var matchesSelector=element.matches||element.webkitMatchesSelector||element.mozMatchesSelector||element.oMatchesSelector||element.matchesSelector;if(matchesSelector)return matchesSelector.call(element,selector);var match,parent=element.parentNode,temp=!parent;if(temp)(parent=tempParent).appendChild(element);match=~zepto.qsa(parent,selector).indexOf(element);temp&&tempParent.removeChild(element);return match};function type(obj){return obj==null?String(obj):class2type[toString.call(obj)]||"object"}function isFunction(value){return type(value)=="function"}function isWindow(obj){return obj!=null&&obj==obj.window}function isDocument(obj){return obj!=null&&obj.nodeType==obj.DOCUMENT_NODE}function isObject(obj){return type(obj)=="object"}function isPlainObject(obj){return isObject(obj)&&!isWindow(obj)&&Object.getPrototypeOf(obj)==Object.prototype}function likeArray(obj){var length=!!obj&&"length"in obj&&obj.length,type=$.type(obj);return"function"!=type&&!isWindow(obj)&&("array"==type||length===0||typeof length=="number"&&length>0&&length-1 in obj)}function compact(array){return filter.call(array,function(item){return item!=null})}function flatten(array){return array.length>0?$.fn.concat.apply([],array):array}camelize=function(str){return str.replace(/-+(.)?/g,function(match,chr){return chr?chr.toUpperCase():""})};function dasherize(str){return str.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}uniq=function(array){return filter.call(array,function(item,idx){return array.indexOf(item)==idx})};function classRE(name){return name in classCache?classCache[name]:classCache[name]=new RegExp("(^|\\s)"+name+"(\\s|$)")}function maybeAddPx(name,value){return typeof value=="number"&&!cssNumber[dasherize(name)]?value+"px":value}function defaultDisplay(nodeName){var element,display;if(!elementDisplay[nodeName]){element=document.createElement(nodeName);document.body.appendChild(element);display=getComputedStyle(element,"").getPropertyValue("display");element.parentNode.removeChild(element);display=="none"&&(display="block");elementDisplay[nodeName]=display}return elementDisplay[nodeName]}function children(element){return"children"in element?slice.call(element.children):$.map(element.childNodes,function(node){if(node.nodeType==1)return node})}function Z(dom,selector){var i,len=dom?dom.length:0;for(i=0;i<len;i++)this[i]=dom[i];this.length=len;this.selector=selector||""}zepto.fragment=function(html,name,properties){var dom,nodes,container;if(singleTagRE.test(html))dom=$(document.createElement(RegExp.$1));if(!dom){if(html.replace)html=html.replace(tagExpanderRE,"<$1></$2>");if(name===undefined)name=fragmentRE.test(html)&&RegExp.$1;if(!(name in containers))name="*";container=containers[name];container.innerHTML=""+html;dom=$.each(slice.call(container.childNodes),function(){container.removeChild(this)})}if(isPlainObject(properties)){nodes=$(dom);$.each(properties,function(key,value){if(methodAttributes.indexOf(key)>-1)nodes[key](value);else nodes.attr(key,value)})}return dom};zepto.Z=function(dom,selector){return new Z(dom,selector)};zepto.isZ=function(object){return object instanceof zepto.Z};zepto.init=function(selector,context){var dom;if(!selector)return zepto.Z();else if(typeof selector=="string"){selector=selector.trim();if(selector[0]=="<"&&fragmentRE.test(selector))dom=zepto.fragment(selector,RegExp.$1,context),selector=null;else if(context!==undefined)return $(context).find(selector);else dom=zepto.qsa(document,selector)}else if(isFunction(selector))return $(document).ready(selector);else if(zepto.isZ(selector))return selector;else{if(isArray(selector))dom=compact(selector);else if(isObject(selector))dom=[selector],selector=null;else if(fragmentRE.test(selector))dom=zepto.fragment(selector.trim(),RegExp.$1,context),selector=null;else if(context!==undefined)return $(context).find(selector);else dom=zepto.qsa(document,selector)}return zepto.Z(dom,selector)};$=function(selector,context){return zepto.init(selector,context)};function extend(target,source,deep){for(key in source)if(deep&&(isPlainObject(source[key])||isArray(source[key]))){if(isPlainObject(source[key])&&!isPlainObject(target[key]))target[key]={};if(isArray(source[key])&&!isArray(target[key]))target[key]=[];extend(target[key],source[key],deep)}else if(source[key]!==undefined)target[key]=source[key]}$.extend=function(target){var deep,args=slice.call(arguments,1);if(typeof target=="boolean"){deep=target;target=args.shift()}args.forEach(function(arg){extend(target,arg,deep)});return target};zepto.qsa=function(element,selector){var found,maybeID=selector[0]=="#",maybeClass=!maybeID&&selector[0]==".",nameOnly=maybeID||maybeClass?selector.slice(1):selector,isSimple=simpleSelectorRE.test(nameOnly);return element.getElementById&&isSimple&&maybeID?(found=element.getElementById(nameOnly))?[found]:[]:element.nodeType!==1&&element.nodeType!==9&&element.nodeType!==11?[]:slice.call(isSimple&&!maybeID&&element.getElementsByClassName?maybeClass?element.getElementsByClassName(nameOnly):element.getElementsByTagName(selector):element.querySelectorAll(selector))};function filtered(nodes,selector){return selector==null?$(nodes):$(nodes).filter(selector)}$.contains=document.documentElement.contains?function(parent,node){return parent!==node&&parent.contains(node)}:function(parent,node){while(node&&(node=node.parentNode))if(node===parent)return true;return false};function funcArg(context,arg,idx,payload){return isFunction(arg)?arg.call(context,idx,payload):arg}function setAttribute(node,name,value){value==null?node.removeAttribute(name):node.setAttribute(name,value)}function className(node,value){var klass=node.className||"",svg=klass&&klass.baseVal!==undefined;if(value===undefined)return svg?klass.baseVal:klass;svg?klass.baseVal=value:node.className=value}function deserializeValue(value){try{return value?value=="true"||(value=="false"?false:value=="null"?null:+value+""==value?+value:/^[\[\{]/.test(value)?$.parseJSON(value):value):value}catch(e){return value}}$.type=type;$.isFunction=isFunction;$.isWindow=isWindow;$.isArray=isArray;$.isPlainObject=isPlainObject;$.isEmptyObject=function(obj){var name;for(name in obj)return false;return true};$.isNumeric=function(val){var num=Number(val),type=typeof val;return val!=null&&type!="boolean"&&(type!="string"||val.length)&&!isNaN(num)&&isFinite(num)||false};$.inArray=function(elem,array,i){return emptyArray.indexOf.call(array,elem,i)};$.camelCase=camelize;$.trim=function(str){return str==null?"":String.prototype.trim.call(str)};$.uuid=0;$.support={};$.expr={};$.noop=function(){};$.map=function(elements,callback){var value,values=[],i,key;if(likeArray(elements))for(i=0;i<elements.length;i++){value=callback(elements[i],i);if(value!=null)values.push(value)}else for(key in elements){value=callback(elements[key],key);if(value!=null)values.push(value)}return flatten(values)};$.each=function(elements,callback){var i,key;if(likeArray(elements)){for(i=0;i<elements.length;i++)if(callback.call(elements[i],i,elements[i])===false)return elements}else{for(key in elements)if(callback.call(elements[key],key,elements[key])===false)return elements}return elements};$.grep=function(elements,callback){return filter.call(elements,callback)};if(window.JSON)$.parseJSON=JSON.parse;$.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase()});$.fn={constructor:zepto.Z,length:0,forEach:emptyArray.forEach,reduce:emptyArray.reduce,push:emptyArray.push,sort:emptyArray.sort,splice:emptyArray.splice,indexOf:emptyArray.indexOf,concat:function(){var i,value,args=[];for(i=0;i<arguments.length;i++){value=arguments[i];args[i]=zepto.isZ(value)?value.toArray():value}return concat.apply(zepto.isZ(this)?this.toArray():this,args)},map:function(fn){return $($.map(this,function(el,i){return fn.call(el,i,el)}))},slice:function(){return $(slice.apply(this,arguments))},ready:function(callback){if(readyRE.test(document.readyState)&&document.body)callback($);else document.addEventListener("DOMContentLoaded",function(){callback($)},false);return this},get:function(idx){return idx===undefined?slice.call(this):this[idx>=0?idx:idx+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){if(this.parentNode!=null)this.parentNode.removeChild(this)})},each:function(callback){emptyArray.every.call(this,function(el,idx){return callback.call(el,idx,el)!==false});return this},filter:function(selector){if(isFunction(selector))return this.not(this.not(selector));return $(filter.call(this,function(element){return zepto.matches(element,selector)}))},add:function(selector,context){return $(uniq(this.concat($(selector,context))))},is:function(selector){return this.length>0&&zepto.matches(this[0],selector)},not:function(selector){var nodes=[];if(isFunction(selector)&&selector.call!==undefined)this.each(function(idx){if(!selector.call(this,idx))nodes.push(this)});else{var excludes=typeof selector=="string"?this.filter(selector):likeArray(selector)&&isFunction(selector.item)?slice.call(selector):$(selector);this.forEach(function(el){if(excludes.indexOf(el)<0)nodes.push(el)})}return $(nodes)},has:function(selector){return this.filter(function(){return isObject(selector)?$.contains(this,selector):$(this).find(selector).size()})},eq:function(idx){return idx===-1?this.slice(idx):this.slice(idx,+idx+1)},first:function(){var el=this[0];return el&&!isObject(el)?el:$(el)},last:function(){var el=this[this.length-1];return el&&!isObject(el)?el:$(el)},find:function(selector){var result,$this=this;if(!selector)result=$();else if(typeof selector=="object")result=$(selector).filter(function(){var node=this;return emptyArray.some.call($this,function(parent){return $.contains(parent,node)})});else if(this.length==1)result=$(zepto.qsa(this[0],selector));else result=this.map(function(){return zepto.qsa(this,selector)});return result},closest:function(selector,context){var nodes=[],collection=typeof selector=="object"&&$(selector);this.each(function(_,node){while(node&&!(collection?collection.indexOf(node)>=0:zepto.matches(node,selector)))node=node!==context&&!isDocument(node)&&node.parentNode;if(node&&nodes.indexOf(node)<0)nodes.push(node)});return $(nodes)},parents:function(selector){var ancestors=[],nodes=this;while(nodes.length>0)nodes=$.map(nodes,function(node){if((node=node.parentNode)&&!isDocument(node)&&ancestors.indexOf(node)<0){ancestors.push(node);return node}});return filtered(ancestors,selector)},parent:function(selector){return filtered(uniq(this.pluck("parentNode")),selector)},children:function(selector){return filtered(this.map(function(){return children(this)}),selector)},contents:function(){return this.map(function(){return this.contentDocument||slice.call(this.childNodes)})},siblings:function(selector){return filtered(this.map(function(i,el){return filter.call(children(el.parentNode),function(child){return child!==el})}),selector)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(property){return $.map(this,function(el){return el[property]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display="");if(getComputedStyle(this,"").getPropertyValue("display")=="none")this.style.display=defaultDisplay(this.nodeName)})},replaceWith:function(newContent){return this.before(newContent).remove()},wrap:function(structure){var func=isFunction(structure);if(this[0]&&!func)var dom=$(structure).get(0),clone=dom.parentNode||this.length>1;return this.each(function(index){$(this).wrapAll(func?structure.call(this,index):clone?dom.cloneNode(true):dom)})},wrapAll:function(structure){if(this[0]){$(this[0]).before(structure=$(structure));var children;while((children=structure.children()).length)structure=children.first();$(structure).append(this)}return this},wrapInner:function(structure){var func=isFunction(structure);return this.each(function(index){var self=$(this),contents=self.contents(),dom=func?structure.call(this,index):structure;contents.length?contents.wrapAll(dom):self.append(dom)})},unwrap:function(){this.parent().each(function(){$(this).replaceWith($(this).children())});return this},clone:function(){return this.map(function(){return this.cloneNode(true)})},hide:function(){return this.css("display","none")},toggle:function(setting){return this.each(function(){var el=$(this);(setting===undefined?el.css("display")=="none":setting)?el.show():el.hide()})},prev:function(selector){return $(this.pluck("previousElementSibling")).filter(selector||"*")},next:function(selector){return $(this.pluck("nextElementSibling")).filter(selector||"*")},html:function(html){return 0 in arguments?this.each(function(idx){var originHtml=this.innerHTML;$(this).empty().append(funcArg(this,html,idx,originHtml))}):0 in this?this[0].innerHTML:null},text:function(text){return 0 in arguments?this.each(function(idx){var newText=funcArg(this,text,idx,this.textContent);this.textContent=newText==null?"":""+newText}):0 in this?this.pluck("textContent").join(""):null},attr:function(name,value){var result;return typeof name=="string"&&!(1 in arguments)?0 in this&&this[0].nodeType==1&&(result=this[0].getAttribute(name))!=null?result:undefined:this.each(function(idx){if(this.nodeType!==1)return;if(isObject(name))for(key in name)setAttribute(this,key,name[key]);else setAttribute(this,name,funcArg(this,value,idx,this.getAttribute(name)))})},removeAttr:function(name){return this.each(function(){this.nodeType===1&&name.split(" ").forEach(function(attribute){setAttribute(this,attribute)},this)})},prop:function(name,value){name=propMap[name]||name;return 1 in arguments?this.each(function(idx){this[name]=funcArg(this,value,idx,this[name])}):this[0]&&this[0][name]},removeProp:function(name){name=propMap[name]||name;return this.each(function(){delete this[name]})},data:function(name,value){var attrName="data-"+name.replace(capitalRE,"-$1").toLowerCase();var data=1 in arguments?this.attr(attrName,value):this.attr(attrName);return data!==null?deserializeValue(data):undefined},val:function(value){if(0 in arguments){if(value==null)value="";return this.each(function(idx){this.value=funcArg(this,value,idx,this.value)})}else{return this[0]&&(this[0].multiple?$(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)}},offset:function(coordinates){if(coordinates)return this.each(function(index){var $this=$(this),coords=funcArg(this,coordinates,index,$this.offset()),parentOffset=$this.offsetParent().offset(),props={top:coords.top-parentOffset.top,left:coords.left-parentOffset.left};if($this.css("position")=="static")props["position"]="relative";$this.css(props)});if(!this.length)return null;if(document.documentElement!==this[0]&&!$.contains(document.documentElement,this[0]))return{top:0,left:0};var obj=this[0].getBoundingClientRect();return{left:obj.left+window.pageXOffset,top:obj.top+window.pageYOffset,width:Math.round(obj.width),height:Math.round(obj.height)}},css:function(property,value){if(arguments.length<2){var element=this[0];if(typeof property=="string"){if(!element)return;return element.style[camelize(property)]||getComputedStyle(element,"").getPropertyValue(property)}else if(isArray(property)){if(!element)return;var props={};var computedStyle=getComputedStyle(element,"");$.each(property,function(_,prop){props[prop]=element.style[camelize(prop)]||computedStyle.getPropertyValue(prop)});return props}}var css="";if(type(property)=="string"){if(!value&&value!==0)this.each(function(){this.style.removeProperty(dasherize(property))});else css=dasherize(property)+":"+maybeAddPx(property,value)}else{for(key in property)if(!property[key]&&property[key]!==0)this.each(function(){this.style.removeProperty(dasherize(key))});else css+=dasherize(key)+":"+maybeAddPx(key,property[key])+";"}return this.each(function(){this.style.cssText+=";"+css})},index:function(element){return element?this.indexOf($(element)[0]):this.parent().children().indexOf(this[0])},hasClass:function(name){if(!name)return false;return emptyArray.some.call(this,function(el){return this.test(className(el))},classRE(name))},addClass:function(name){if(!name)return this;return this.each(function(idx){if(!("className"in this))return;classList=[];var cls=className(this),newName=funcArg(this,name,idx,cls);newName.split(/\s+/g).forEach(function(klass){if(!$(this).hasClass(klass))classList.push(klass)},this);classList.length&&className(this,cls+(cls?" ":"")+classList.join(" "))})},removeClass:function(name){return this.each(function(idx){if(!("className"in this))return;if(name===undefined)return className(this,"");classList=className(this);funcArg(this,name,idx,classList).split(/\s+/g).forEach(function(klass){classList=classList.replace(classRE(klass)," ")});className(this,classList.trim())})},toggleClass:function(name,when){if(!name)return this;return this.each(function(idx){var $this=$(this),names=funcArg(this,name,idx,className(this));names.split(/\s+/g).forEach(function(klass){(when===undefined?!$this.hasClass(klass):when)?$this.addClass(klass):$this.removeClass(klass)})})},scrollTop:function(value){if(!this.length)return;var hasScrollTop="scrollTop"in this[0];if(value===undefined)return hasScrollTop?this[0].scrollTop:this[0].pageYOffset;return this.each(hasScrollTop?function(){this.scrollTop=value}:function(){this.scrollTo(this.scrollX,value)})},scrollLeft:function(value){if(!this.length)return;var hasScrollLeft="scrollLeft"in this[0];if(value===undefined)return hasScrollLeft?this[0].scrollLeft:this[0].pageXOffset;return this.each(hasScrollLeft?function(){this.scrollLeft=value}:function(){this.scrollTo(value,this.scrollY)})},position:function(){if(!this.length)return;var elem=this[0],offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=rootNodeRE.test(offsetParent[0].nodeName)?{top:0,left:0}:offsetParent.offset();offset.top-=parseFloat($(elem).css("margin-top"))||0;offset.left-=parseFloat($(elem).css("margin-left"))||0;parentOffset.top+=parseFloat($(offsetParent[0]).css("border-top-width"))||0;parentOffset.left+=parseFloat($(offsetParent[0]).css("border-left-width"))||0;return{top:offset.top-parentOffset.top,left:offset.left-parentOffset.left}},offsetParent:function(){return this.map(function(){var parent=this.offsetParent||document.body;while(parent&&!rootNodeRE.test(parent.nodeName)&&$(parent).css("position")=="static")parent=parent.offsetParent;return parent})}};$.fn.detach=$.fn.remove;["width","height"].forEach(function(dimension){var dimensionProperty=dimension.replace(/./,function(m){return m[0].toUpperCase()});$.fn[dimension]=function(value){var offset,el=this[0];if(value===undefined)return isWindow(el)?el["inner"+dimensionProperty]:isDocument(el)?el.documentElement["scroll"+dimensionProperty]:(offset=this.offset())&&offset[dimension];else return this.each(function(idx){el=$(this);el.css(dimension,funcArg(this,value,idx,el[dimension]()))})}});function traverseNode(node,fun){fun(node);for(var i=0,len=node.childNodes.length;i<len;i++)traverseNode(node.childNodes[i],fun)}adjacencyOperators.forEach(function(operator,operatorIndex){var inside=operatorIndex%2;$.fn[operator]=function(){var argType,nodes=$.map(arguments,function(arg){var arr=[];argType=type(arg);if(argType=="array"){arg.forEach(function(el){if(el.nodeType!==undefined)return arr.push(el);else if($.zepto.isZ(el))return arr=arr.concat(el.get());arr=arr.concat(zepto.fragment(el))});return arr}return argType=="object"||arg==null?arg:zepto.fragment(arg)}),parent,copyByClone=this.length>1;if(nodes.length<1)return this;return this.each(function(_,target){parent=inside?target:target.parentNode;target=operatorIndex==0?target.nextSibling:operatorIndex==1?target.firstChild:operatorIndex==2?target:null;var parentInDocument=$.contains(document.documentElement,parent);nodes.forEach(function(node){if(copyByClone)node=node.cloneNode(true);else if(!parent)return $(node).remove();parent.insertBefore(node,target);if(parentInDocument)traverseNode(node,function(el){if(el.nodeName!=null&&el.nodeName.toUpperCase()==="SCRIPT"&&(!el.type||el.type==="text/javascript")&&!el.src){var target=el.ownerDocument?el.ownerDocument.defaultView:window;target["eval"].call(target,el.innerHTML)}})})})};$.fn[inside?operator+"To":"insert"+(operatorIndex?"Before":"After")]=function(html){$(html)[operator](this);return this}});zepto.Z.prototype=Z.prototype=$.fn;zepto.uniq=uniq;zepto.deserializeValue=deserializeValue;$.zepto=zepto;return $}();(function($){var _zid=1,undefined,slice=Array.prototype.slice,isFunction=$.isFunction,isString=function(obj){return typeof obj=="string"},handlers={},specialEvents={},focusinSupported="onfocusin"in window,focus={focus:"focusin",blur:"focusout"},hover={mouseenter:"mouseover",mouseleave:"mouseout"};specialEvents.click=specialEvents.mousedown=specialEvents.mouseup=specialEvents.mousemove="MouseEvents";function zid(element){return element._zid||(element._zid=_zid++)}function findHandlers(element,event,fn,selector){event=parse(event);if(event.ns)var matcher=matcherFor(event.ns);return(handlers[zid(element)]||[]).filter(function(handler){return handler&&(!event.e||handler.e==event.e)&&(!event.ns||matcher.test(handler.ns))&&(!fn||zid(handler.fn)===zid(fn))&&(!selector||handler.sel==selector)})}function parse(event){var parts=(""+event).split(".");return{e:parts[0],ns:parts.slice(1).sort().join(" ")}}function matcherFor(ns){return new RegExp("(?:^| )"+ns.replace(" "," .* ?")+"(?: |$)")}function eventCapture(handler,captureSetting){return handler.del&&(!focusinSupported&&handler.e in focus)||!!captureSetting}function realEvent(type){return hover[type]||focusinSupported&&focus[type]||type}function add(element,events,fn,data,selector,delegator,capture){var id=zid(element),set=handlers[id]||(handlers[id]=[]);events.split(/\s/).forEach(function(event){if(event=="ready")return $(document).ready(fn);var handler=parse(event);handler.fn=fn;handler.sel=selector;if(handler.e in hover)fn=function(e){var related=e.relatedTarget;if(!related||related!==this&&!$.contains(this,related))return handler.fn.apply(this,arguments)};handler.del=delegator;var callback=delegator||fn;handler.proxy=function(e){e=compatible(e);if(e.isImmediatePropagationStopped())return;e.data=data;var result=callback.apply(element,e._args==undefined?[e]:[e].concat(e._args));if(result===false)e.preventDefault(),e.stopPropagation();return result};handler.i=set.length;set.push(handler);if("addEventListener"in element)element.addEventListener(realEvent(handler.e),handler.proxy,eventCapture(handler,capture))})}function remove(element,events,fn,selector,capture){var id=zid(element);(events||"").split(/\s/).forEach(function(event){findHandlers(element,event,fn,selector).forEach(function(handler){delete handlers[id][handler.i];if("removeEventListener"in element)element.removeEventListener(realEvent(handler.e),handler.proxy,eventCapture(handler,capture))})})}$.event={add:add,remove:remove};$.proxy=function(fn,context){var args=2 in arguments&&slice.call(arguments,2);if(isFunction(fn)){var proxyFn=function(){return fn.apply(context,args?args.concat(slice.call(arguments)):arguments)};proxyFn._zid=zid(fn);return proxyFn}else if(isString(context)){if(args){args.unshift(fn[context],fn);return $.proxy.apply(null,args)}else{return $.proxy(fn[context],fn)}}else{throw new TypeError("expected function")}};$.fn.bind=function(event,data,callback){return this.on(event,data,callback)};$.fn.unbind=function(event,callback){return this.off(event,callback)};$.fn.one=function(event,selector,data,callback){return this.on(event,selector,data,callback,1)};var returnTrue=function(){return true},returnFalse=function(){return false},ignoreProperties=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,eventMethods={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};function compatible(event,source){if(source||!event.isDefaultPrevented){source||(source=event);$.each(eventMethods,function(name,predicate){var sourceMethod=source[name];event[name]=function(){this[predicate]=returnTrue;return sourceMethod&&sourceMethod.apply(source,arguments)};event[predicate]=returnFalse});event.timeStamp||(event.timeStamp=Date.now());if(source.defaultPrevented!==undefined?source.defaultPrevented:"returnValue"in source?source.returnValue===false:source.getPreventDefault&&source.getPreventDefault())event.isDefaultPrevented=returnTrue}return event}function createProxy(event){var key,proxy={originalEvent:event};for(key in event)if(!ignoreProperties.test(key)&&event[key]!==undefined)proxy[key]=event[key];return compatible(proxy,event)}$.fn.delegate=function(selector,event,callback){return this.on(event,selector,callback)};$.fn.undelegate=function(selector,event,callback){return this.off(event,selector,callback)};$.fn.live=function(event,callback){$(document.body).delegate(this.selector,event,callback);return this};$.fn.die=function(event,callback){$(document.body).undelegate(this.selector,event,callback);return this};$.fn.on=function(event,selector,data,callback,one){var autoRemove,delegator,$this=this;if(event&&!isString(event)){$.each(event,function(type,fn){$this.on(type,selector,data,fn,one)});return $this}if(!isString(selector)&&!isFunction(callback)&&callback!==false)callback=data,data=selector,selector=undefined;if(callback===undefined||data===false)callback=data,data=undefined;if(callback===false)callback=returnFalse;return $this.each(function(_,element){if(one)autoRemove=function(e){remove(element,e.type,callback);return callback.apply(this,arguments)};if(selector)delegator=function(e){var evt,match=$(e.target).closest(selector,element).get(0);if(match&&match!==element){evt=$.extend(createProxy(e),{currentTarget:match,liveFired:element});return(autoRemove||callback).apply(match,[evt].concat(slice.call(arguments,1)))}};add(element,event,callback,data,selector,delegator||autoRemove)})};$.fn.off=function(event,selector,callback){var $this=this;if(event&&!isString(event)){$.each(event,function(type,fn){$this.off(type,selector,fn)});return $this}if(!isString(selector)&&!isFunction(callback)&&callback!==false)callback=selector,selector=undefined;if(callback===false)callback=returnFalse;return $this.each(function(){remove(this,event,callback,selector)})};$.fn.trigger=function(event,args){event=isString(event)||$.isPlainObject(event)?$.Event(event):compatible(event);event._args=args;return this.each(function(){if(event.type in focus&&typeof this[event.type]=="function")this[event.type]();else if("dispatchEvent"in this)this.dispatchEvent(event);else $(this).triggerHandler(event,args)})};$.fn.triggerHandler=function(event,args){var e,result;this.each(function(i,element){e=createProxy(isString(event)?$.Event(event):event);e._args=args;e.target=element;$.each(findHandlers(element,event.type||event),function(i,handler){result=handler.proxy(e);if(e.isImmediatePropagationStopped())return false})});return result};("focusin focusout focus blur load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select keydown keypress keyup error").split(" ").forEach(function(event){$.fn[event]=function(callback){return 0 in arguments?this.bind(event,callback):this.trigger(event)}});$.Event=function(type,props){if(!isString(type))props=type,type=props.type;var event=document.createEvent(specialEvents[type]||"Events"),bubbles=true;if(props)for(var name in props)name=="bubbles"?bubbles=!!props[name]:event[name]=props[name];event.initEvent(type,bubbles,true);return compatible(event)}})(Zepto);(function($){var jsonpID=+new Date,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/,originAnchor=document.createElement("a");originAnchor.href=window.location.href;function triggerAndReturn(context,eventName,data){var event=$.Event(eventName);$(context).trigger(event,data);return!event.isDefaultPrevented()}function triggerGlobal(settings,context,eventName,data){if(settings.global)return triggerAndReturn(context||document,eventName,data)}$.active=0;function ajaxStart(settings){if(settings.global&&$.active++===0)triggerGlobal(settings,null,"ajaxStart")}function ajaxStop(settings){if(settings.global&&!--$.active)triggerGlobal(settings,null,"ajaxStop")}function ajaxBeforeSend(xhr,settings){var context=settings.context;if(settings.beforeSend.call(context,xhr,settings)===false||triggerGlobal(settings,context,"ajaxBeforeSend",[xhr,settings])===false)return false;triggerGlobal(settings,context,"ajaxSend",[xhr,settings])}function ajaxSuccess(data,xhr,settings,deferred){var context=settings.context,status="success";settings.success.call(context,data,status,xhr);if(deferred)deferred.resolveWith(context,[data,status,xhr]);triggerGlobal(settings,context,"ajaxSuccess",[xhr,settings,data]);ajaxComplete(status,xhr,settings)}function ajaxError(error,type,xhr,settings,deferred){var context=settings.context;settings.error.call(context,xhr,type,error);if(deferred)deferred.rejectWith(context,[xhr,type,error]);triggerGlobal(settings,context,"ajaxError",[xhr,settings,error||type]);ajaxComplete(type,xhr,settings)}function ajaxComplete(status,xhr,settings){var context=settings.context;settings.complete.call(context,xhr,status);triggerGlobal(settings,context,"ajaxComplete",[xhr,settings]);ajaxStop(settings)}function ajaxDataFilter(data,type,settings){if(settings.dataFilter==empty)return data;var context=settings.context;return settings.dataFilter.call(context,data,type)}function empty(){}$.ajaxJSONP=function(options,deferred){if(!("type"in options))return $.ajax(options);var _callbackName=options.jsonpCallback,callbackName=($.isFunction(_callbackName)?_callbackName():_callbackName)||"Zepto"+jsonpID++,script=document.createElement("script"),originalCallback=window[callbackName],responseData,abort=function(errorType){$(script).triggerHandler("error",errorType||"abort")},xhr={abort:abort},abortTimeout;if(deferred)deferred.promise(xhr);$(script).on("load error",function(e,errorType){clearTimeout(abortTimeout);$(script).off().remove();if(e.type=="error"||!responseData){ajaxError(null,errorType||"error",xhr,options,deferred)}else{ajaxSuccess(responseData[0],xhr,options,deferred)}window[callbackName]=originalCallback;if(responseData&&$.isFunction(originalCallback))originalCallback(responseData[0]);originalCallback=responseData=undefined});if(ajaxBeforeSend(xhr,options)===false){abort("abort");return xhr}window[callbackName]=function(){responseData=arguments};script.src=options.url.replace(/\?(.+)=\?/,"?$1="+callbackName);document.head.appendChild(script);if(options.timeout>0)abortTimeout=setTimeout(function(){abort("timeout")},options.timeout);return xhr};$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:true,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:false,timeout:0,processData:true,cache:true,dataFilter:empty};function mimeToDataType(mime){if(mime)mime=mime.split(";",2)[0];return mime&&(mime==htmlType?"html":mime==jsonType?"json":scriptTypeRE.test(mime)?"script":xmlTypeRE.test(mime)&&"xml")||"text"}function appendQuery(url,query){if(query=="")return url;return(url+"&"+query).replace(/[&?]{1,2}/,"?")}function serializeData(options){if(options.processData&&options.data&&$.type(options.data)!="string")options.data=$.param(options.data,options.traditional);if(options.data&&(!options.type||options.type.toUpperCase()=="GET"||"jsonp"==options.dataType))options.url=appendQuery(options.url,options.data),options.data=undefined}$.ajax=function(options){var settings=$.extend({},options||{}),deferred=$.Deferred&&$.Deferred(),urlAnchor,hashIndex;for(key in $.ajaxSettings)if(settings[key]===undefined)settings[key]=$.ajaxSettings[key];ajaxStart(settings);if(!settings.crossDomain){urlAnchor=document.createElement("a");urlAnchor.href=settings.url;urlAnchor.href=urlAnchor.href;settings.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host}if(!settings.url)settings.url=window.location.toString();if((hashIndex=settings.url.indexOf("#"))>-1)settings.url=settings.url.slice(0,hashIndex);serializeData(settings);var dataType=settings.dataType,hasPlaceholder=/\?.+=\?/.test(settings.url);if(hasPlaceholder)dataType="jsonp";if(settings.cache===false||(!options||options.cache!==true)&&("script"==dataType||"jsonp"==dataType))settings.url=appendQuery(settings.url,"_="+Date.now());if("jsonp"==dataType){if(!hasPlaceholder)settings.url=appendQuery(settings.url,settings.jsonp?settings.jsonp+"=?":settings.jsonp===false?"":"callback=?");return $.ajaxJSONP(settings,deferred)}var mime=settings.accepts[dataType],headers={},setHeader=function(name,value){headers[name.toLowerCase()]=[name,value]},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),nativeSetHeader=xhr.setRequestHeader,abortTimeout;if(deferred)deferred.promise(xhr);if(!settings.crossDomain)setHeader("X-Requested-With","XMLHttpRequest");setHeader("Accept",mime||"*/*");if(mime=settings.mimeType||mime){if(mime.indexOf(",")>-1)mime=mime.split(",",2)[0];xhr.overrideMimeType&&xhr.overrideMimeType(mime)}if(settings.contentType||settings.contentType!==false&&settings.data&&settings.type.toUpperCase()!="GET")setHeader("Content-Type",settings.contentType||"application/x-www-form-urlencoded");if(settings.headers)for(name in settings.headers)setHeader(name,settings.headers[name]);xhr.setRequestHeader=setHeader;xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty;clearTimeout(abortTimeout);var result,error=false;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(settings.mimeType||xhr.getResponseHeader("content-type"));if(xhr.responseType=="arraybuffer"||xhr.responseType=="blob")result=xhr.response;else{result=xhr.responseText;try{result=ajaxDataFilter(result,dataType,settings);if(dataType=="script")(1,eval)(result);else if(dataType=="xml")result=xhr.responseXML;else if(dataType=="json")result=blankRE.test(result)?null:$.parseJSON(result)}catch(e){error=e}if(error)return ajaxError(error,"parsererror",xhr,settings,deferred)}ajaxSuccess(result,xhr,settings,deferred)}else{ajaxError(xhr.statusText||null,xhr.status?"error":"abort",xhr,settings,deferred)}}};if(ajaxBeforeSend(xhr,settings)===false){xhr.abort();ajaxError(null,"abort",xhr,settings,deferred);return xhr}var async="async"in settings?settings.async:true;xhr.open(settings.type,settings.url,async,settings.username,settings.password);if(settings.xhrFields)for(name in settings.xhrFields)xhr[name]=settings.xhrFields[name];for(name in headers)nativeSetHeader.apply(xhr,headers[name]);if(settings.timeout>0)abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty;xhr.abort();ajaxError(null,"timeout",xhr,settings,deferred)},settings.timeout);xhr.send(settings.data?settings.data:null);return xhr};function parseArguments(url,data,success,dataType){if($.isFunction(data))dataType=success,success=data,data=undefined;if(!$.isFunction(success))dataType=success,success=undefined;return{url:url,data:data,success:success,dataType:dataType}}$.get=function(){return $.ajax(parseArguments.apply(null,arguments))};$.post=function(){var options=parseArguments.apply(null,arguments);options.type="POST";return $.ajax(options)};$.getJSON=function(){var options=parseArguments.apply(null,arguments);options.dataType="json";return $.ajax(options)};$.fn.load=function(url,data,success){if(!this.length)return this;var self=this,parts=url.split(/\s/),selector,options=parseArguments(url,data,success),callback=options.success;if(parts.length>1)options.url=parts[0],selector=parts[1];options.success=function(response){self.html(selector?$("<div>").html(response.replace(rscript,"")).find(selector):response);callback&&callback.apply(self,arguments)};$.ajax(options);return this};var escape=encodeURIComponent;function serialize(params,obj,traditional,scope){var type,array=$.isArray(obj),hash=$.isPlainObject(obj);$.each(obj,function(key,value){type=$.type(value);if(scope)key=traditional?scope:scope+"["+(hash||type=="object"||type=="array"?key:"")+"]";if(!scope&&array)params.add(value.name,value.value);else if(type=="array"||!traditional&&type=="object")serialize(params,value,traditional,key);else params.add(key,value)})}$.param=function(obj,traditional){var params=[];params.add=function(key,value){if($.isFunction(value))value=value();if(value==null)value="";this.push(escape(key)+"="+escape(value))};serialize(params,obj,traditional);return params.join("&").replace(/%20/g,"+")}})(Zepto);(function($){$.fn.serializeArray=function(){var name,type,result=[],add=function(value){if(value.forEach)return value.forEach(add);result.push({name:name,value:value})};if(this[0])$.each(this[0].elements,function(_,field){type=field.type,name=field.name;if(name&&field.nodeName.toLowerCase()!="fieldset"&&!field.disabled&&type!="submit"&&type!="reset"&&type!="button"&&type!="file"&&(type!="radio"&&type!="checkbox"||field.checked))add($(field).val())});return result};$.fn.serialize=function(){var result=[];this.serializeArray().forEach(function(elm){result.push(encodeURIComponent(elm.name)+"="+encodeURIComponent(elm.value))});return result.join("&")};$.fn.submit=function(callback){if(0 in arguments)this.bind("submit",callback);else if(this.length){var event=$.Event("submit");this.eq(0).trigger(event);if(!event.isDefaultPrevented())this.get(0).submit()}return this}})(Zepto);(function(){try{getComputedStyle(undefined)}catch(e){var nativeGetComputedStyle=getComputedStyle;window.getComputedStyle=function(element,pseudoElement){try{return nativeGetComputedStyle(element,pseudoElement)}catch(e){return null}}}})();(function($){$.getScript=function(src,func){var script=document.createElement("script");script.async="async";script.src=src;if(func){script.onload=func}document.getElementsByTagName("head")[0].appendChild(script)}})(Zepto);return Zepto}();

    var $=Zepto;
    // @formatter:on

    var thread = $("#ds-thread"),
        thread_key = thread.data("key"),
        thread_title = thread.data("title"),
        thread_url = thread.data("url");
    var reset = $("<div />").prop("id", "ds-reset");
    thread.append(reset);

    commentOptions = commentOptions || {};
    commentOptions.domain = typeof commentOptions.domain !== 'undefined' ? commentOptions.domain : 'https://comment.fastadmin.net';
    commentOptions.static = typeof commentOptions.static !== 'undefined' ? commentOptions.static : commentOptions.domain;
    var S = window.S = {
        SITE: commentOptions.site || 'FastAdmin',
        DOMAIN: commentOptions.domain,
        NAME: commentOptions.name,
        APIURL: commentOptions.domain + '/addons/comment/api/',
        STATIC: commentOptions.static,
        STYLE: commentOptions.static + '/assets/addons/comment/css/embed.css',
        SMILEJS: commentOptions.static + '/assets/addons/comment/js/smiles.js',
        THREAD: {
            key: thread_key ? thread_key : location.href,
            title: thread_title ? thread_title : $("title").text(),
            url: thread_url ? thread_url : location.href
        },
        USERINFO: {
            id: 0,
            nickname: '??????',
            avatar: commentOptions.static + '/assets/addons/comment/images/avatar.png',
            url: 'javascript:;'
        },
        TOKEN: '',
        PATH: {},
        LOGIN: false,
        EMOJI: {},
        EMOJICOUNT: 0,
        EMOJIPATH: commentOptions.static + '/assets/addons/comment/emoji/normal/',
        EMOJIPATH1: commentOptions.static + '/assets/addons/comment/emoji/wordpress/',
        SORTTYPE: ['new', 'early', 'hot'], // ????????????
        BUTTONS: {
            'report': '<a class="ds-post-report" href="javascript:void(0);"><span class="ds-icon ds-icon-report"></span>??????</a>',
            'forward': '',
            'delete': '<a class="ds-post-delete" href="javascript:void(0);"><span class="ds-icon ds-icon-delete"></span>??????</a>',
            'reply': '<a class="ds-post-reply" href="javascript:void(0);"><span class="ds-icon ds-icon-reply"></span>??????</a>',
            'emoji': '<a class="ds-toolbar-button ds-add-emote" title="????????????"></a>',
            'image': '<a class="ds-toolbar-button ds-add-image" title="????????????" href="javascript:;"></a>',
        },
        CONFIG: {
            thirdLogin: ["account", "qq", "weibo", "wechat"]
        },
        TEMPLATES: {
            'comment': '<li class="ds-post" data-post-id="<%=comment.id%>" data-pid="<%=comment.pid%>" data-level="<%=level%>" data-nickname="<%=comment.userinfo.nickname%>">\
                        <div class="ds-post-self" data-post-id="<%=comment.id%>" data-thread-id="<%=comment.id%>">\
                            <div class="ds-avatar">\
                                <a rel="nofollow author" target="_blank" href="<%=comment.userinfo.url%>" title="<%=comment.userinfo.nickname%>">\
                                    <img src="<%=comment.userinfo.avatar%>" alt="<%=comment.userinfo.nickname%>">\
                                </a>\
                            </div>\
                            <div class="ds-comment-body">\
                                <div class="ds-comment-header">\
                                    <a class="ds-user-name <%if(comment.userinfo.id == S.USERINFO.id){%>ds-highlight<%}%>" href="<%=comment.userinfo.url%>" rel="nofollow" target="_blank" data-user-id="<%=comment.userinfo.id%>">\
                                        <%=comment.userinfo.nickname%>\
                                    </a>\
                                    <%if(S.CONFIG.author && comment.userinfo.id == 1){%><span class="ds-author"><%=S.CONFIG.author%></span><%}%>\
                                </div>\
                                <p><%=#comment.content%></p>\
                                <div class="ds-comment-footer ds-comment-actions">\
                                    <span class="ds-time" datetime="*" title="<%=comment.create_date%>"><%=comment.human_date%></span>\
                                    <%=#S.BUTTONS.reply%>\
                                    <a class="ds-post-likes" href="javascript:void(0);">\
                                        <span class="ds-icon ds-icon-like"></span>???<%=comment.likes>0?"("+comment.likes+")":""%>\
                                    </a>\
                                    <%=#S.BUTTONS.forward%><%=#S.BUTTONS.report%><%if(S.LOGIN || S.USERINFO.id==1){%><%=#S.BUTTONS.delete%><%}%>\
                                </div>\
                            </div>\
                        </div><%if(children){%>\
                        <ul class="ds-children">\
                            <%=#children%>\
                            <%if(children && comment.comments>comment.children.length){%>\
                            <div class="ds-post-more"><a href="javascript:;" data-page="2" data-pid="<%=comment.id%>" data-level="<%=level+1%>">????????????</a></div>\
                            <%}%>\
                        </ul>\
                        <%}%></li>',
            'commentinfo': '<div class="ds-sort">\
									<a class="ds-order-desc <%=S.CONFIG.sort=="new"?"ds-current":""%>">??????</a>\
									<a class="ds-order-asc <%=S.CONFIG.sort=="early"?"ds-current":""%>">??????</a>\
									<a class="ds-order-hot <%=S.CONFIG.sort=="hot"?"ds-current":""%>">??????</a>\
								</div>\
								<ul class="ds-comments-tabs">\
									<li class="ds-tab">\
										<a class="ds-comments-tab-duoshuo ds-current" href="javascript:void(0);"><%=total%>?????????</a>\
									</li>\
								</ul>',
            'report': '<div class="ds-dialog" id="ds-reset" style="width: 320px;">\
                            <div class="ds-dialog-inner ds-rounded">\
                                <div class="ds-dialog-body">\
                                    <h2>????????????</h2>\
                                    <form methd="post" action="<%=S.PATH.report%>" class="form-report">\
                                        <input type="hidden" value="<%=id%>" name="id" class="input-report-id">\
                                        <label><input type="radio" name="type" value="1" checked> ????????????</label>\
                                        <label><input type="radio" name="type" value="2"> ????????????</label>\
                                        <label><input type="radio" name="type" value="3"> ????????????</label>\
                                        <label><input type="radio" name="type" value="4"> ????????????</label>\
                                        <label><input type="radio" name="type" value="5"> ????????????</label>\
                                        <label><input type="radio" name="type" value="6"> ????????????</label>\
                                        <label><input type="radio" name="type" value="7"> ????????????</label>\
                                        <label><input type="radio" name="type" value="8"> ??????</label>\
                                        <textarea name="content" placeholder="??????????????????"></textarea><br>\
                                        <button type="submit">????????????</button>\
                                    </form>\
                                </div>\
                                <div class="ds-dialog-footer">\
                                    <a href="<%=S.DOMAIN%>" target="_blank" class="ds-logo"></a>\
                                </div>\
                                <a class="ds-dialog-close" href="javascript:void(0)" title="??????"></a>\
                            </div>\
                        </div>',
            'postform': '<a class="ds-avatar" href="<%=S.USERINFO.url%>" target="_blank" title="????????????">\
                            <img src="<%=S.USERINFO.avatar%>" alt="<%=S.USERINFO.nickname%>">\
                        </a>\
                        <form method="post" class="ds-form comment-form" action="<%=S.PATH.submit%>">\
                            <input type="hidden" name="key" value="<%=S.THREAD.key%>">\
                            <input type="hidden" name="url" value="<%=S.THREAD.url%>">\
                            <input type="hidden" name="title" value="<%=S.THREAD.title%>">\
                            <input type="hidden" name="__token__" value="<%=S.TOKEN%>">\
                            <input type="hidden" name="pid" value="0">\
                            <div class="ds-textarea-wrapper ds-rounded-top">\
                                <textarea name="content" title="Ctrl+Enter????????????" placeholder="??????????????????"></textarea>\
                                <pre class="ds-hidden-text"></pre>\
                            </div>\
                            <div class="ds-post-toolbar">\
                                <div class="ds-post-options ds-gradient-bg">\
                                    <%if(S.CONFIG.formModule&&S.CONFIG.formModule.indexOf("sync")>-1){%>\
                                    <span class="ds-sync">\
                                        <input id="ds-sync-checkbox" type="checkbox" name="repost" value="">\
                                        <label for="ds-sync-checkbox">?????????:</label>\
                                        <a href="javascript:void(0)" class="ds-service-icon-grey ds-qqt" data-service="qqt" title="????????????"></a>\
                                        <a href="javascript:void(0)" class="ds-service-icon-grey ds-qzone" data-service="qzone" title="QQ??????"></a>\
                                    </span>\
                                    <%}%>\
                                </div>\
                                <button class="ds-post-button ajax-post" type="button" target-form="comment-form">??????</button>\
                                <div class="ds-toolbar-buttons">\
                                <%if(S.CONFIG.formModule&&S.CONFIG.formModule.indexOf("emoji")>-1){%><%=#S.BUTTONS.emoji%><%}%>\
                                <%if(S.CONFIG.formModule&&S.CONFIG.formModule.indexOf("image")>-1){%><%=#S.BUTTONS.image%><%}%>\
                                </div>\
                            </div>\
                        </form>',
            'replyform': '<a class="ds-avatar" href="<%=S.USERINFO.url%>" target="_blank" title="????????????">\
                            <img src="<%=S.USERINFO.avatar%>" alt="<%=S.USERINFO.nickname%>">\
                        </a>\
                        <form method="post" class="ds-form comment-form" action="<%=S.PATH.submit%>">\
                            <input type="hidden" name="key" value="<%=S.THREAD.key%>">\
                            <input type="hidden" name="pid" value="<%=pid%>">\
                            <input type="hidden" name="__token__" value="<%=S.TOKEN%>">\
                            <div class="ds-textarea-wrapper ds-rounded-top">\
                                <textarea name="content" title="Ctrl+Enter????????????" placeholder="??????????????????"></textarea>\
                                <pre class="ds-hidden-text"></pre>\
                            </div>\
                            <div class="ds-post-toolbar">\
                                <div class="ds-post-options ds-gradient-bg">\
                                    <%if(S.CONFIG.formModule&&S.CONFIG.formModule.indexOf("sync")>-1){%>\
                                    <span class="ds-sync">\
                                        <input id="ds-sync-checkbox" type="checkbox" name="repost" value="">\
                                        <label for="ds-sync-checkbox">?????????:</label>\
                                        <a href="javascript:void(0)" class="ds-service-icon-grey ds-qqt" data-service="qqt" title="????????????"></a>\
                                        <a href="javascript:void(0)" class="ds-service-icon-grey ds-qzone" data-service="qzone" title="QQ??????"></a>\
                                    </span>\
                                    <%}%>\
                                </div>\
                                <button class="ds-post-button ajax-post" type="button" target-form="comment-form">??????</button>\
                                <div class="ds-toolbar-buttons">\
                                <%if(S.CONFIG.formModule&&S.CONFIG.formModule.indexOf("emoji")>-1){%><%=#S.BUTTONS.emoji%><%}%>\
                                <%if(S.CONFIG.formModule&&S.CONFIG.formModule.indexOf("image")>-1){%><%=#S.BUTTONS.image%><%}%>\
                                </div>\
                            </div>\
                        </form>',
            'loginform': '\
                    <div class="ds-dialog" id="ds-reset" style="width: 320px;">\
                        <div class="ds-dialog-inner ds-rounded">\
                            <div class="ds-dialog-body">\
                                <h2>????????????</h2>\
                                <div class="ds-icons-32">\
                                    <%if(S.CONFIG.thirdLogin.indexOf("account")>-1){%><a class="ds-modal-login ds-account" href="<%=S.APIURL%>login?type=account&name=<%=S.NAME%>">????????????</a><%}%>\
                                    <%if(S.CONFIG.thirdLogin.indexOf("weibo")>-1){%><a class="ds-modal-login ds-weibo" href="<%=S.APIURL%>login?type=weibo&name=<%=S.NAME%>">??????</a><%}%>\
                                    <%if(S.CONFIG.thirdLogin.indexOf("qq")>-1){%><a class="ds-modal-login ds-qq" href="<%=S.APIURL%>login?type=qq&name=<%=S.NAME%>">QQ</a><%}%>\
                                    <%if(S.CONFIG.thirdLogin.indexOf("wechat")>-1){%><a class="ds-modal-login ds-wechat" href="<%=S.APIURL%>login?type=wechat&name=<%=S.NAME%>">??????</a><%}%>\
                                </div>\
                            </div>\
                            <div class="ds-dialog-footer">\
                                <a href="<%=S.DOMAIN%>" target="_blank" class="ds-logo"></a>\
                            </div>\
                            <a class="ds-dialog-close" href="javascript:void(0)" title="??????"></a>\
                        </div>\
                    </div>',
            'shortlogin': '<p>????????????:</p>\
                        <div class="ds-social-links">\
                            <ul class="ds-service-list">\
                                <%if(S.CONFIG.thirdLogin.indexOf("account")>-1){%><li><a href="<%=S.APIURL%>login?type=account&name=<%=S.NAME%>" rel="nofollow" class="ds-service-link ds-account"></a></li><%}%>\
                                <%if(S.CONFIG.thirdLogin.indexOf("weibo")>-1){%><li><a href="<%=S.APIURL%>login?type=weibo&name=<%=S.NAME%>" rel="nofollow" class="ds-service-link ds-weibo"></a></li><%}%>\
                                <%if(S.CONFIG.thirdLogin.indexOf("qq")>-1){%><li><a href="<%=S.APIURL%>login?type=qq&name=<%=S.NAME%>" rel="nofollow" class="ds-service-link ds-qq"></a></li><%}%>\
                                <%if(S.CONFIG.thirdLogin.indexOf("wechat")>-1){%><li><a href="<%=S.APIURL%>login?type=wechat&name=<%=S.NAME%>" rel="nofollow" class="ds-service-link ds-wechat"></a></li><%}%>\
                            </ul>\
                        </div>',
            'control': '<div class="ds-account-control">\
						<span class="ds-icon ds-icon-settings"></span>\
						<span>????????????</span>\
						<ul>\
							<li>\
								<a rel="nofollow" style="border-bottom: none" href="javascript:void(0);" class="ds-logout">??????</a>\
							</li>\
						</ul>\
					</div>\
					<div class="ds-visitor">\
						<a class="ds-visitor-name" target="_blank" href="<%=S.USERINFO.url%>"><%=S.USERINFO.nickname%></a>\
					</div>'
        },
        CONTAINERS: {
            header: null,
            body: null,
            footer: null,
        },
        DOMS: {
            smile: $("<div />").prop("id", "ds-smilies"),
            postform: '',//?????????
            replyform: '',//?????????
            shortlogin: '',//????????????
            control: '',//?????????
            info: '',//????????????
            page: '',// ??????
            comment: '',// ?????????????????????????????????
            power: '',// ??????
        },
        replyTips: '???????????????????????????????????????????????????????????????',
        init: function () {
            template.helper("S", S);
            S.setPath();
            S.setContainer();
            S.loadCss(); // ????????????
            S.setConfig(); // ??????????????????????????????????????????
        },
        setPath: function () {
            S.PATH = {
                comment: S.APIURL + "comment",
                like: S.APIURL + "like",
                delete: S.APIURL + "delete",
                submit: S.APIURL + "create",
                cookie: S.APIURL + "cookie",
                report: S.APIURL + "report",
                logout: S.APIURL + "logout",
                config: S.APIURL + "config",
            };
        },
        setContainer: function () {
            S.CONTAINERS.header = $("<div />").prop("id", "ds-header");
            S.CONTAINERS.body = $("<div />").prop("id", "ds-body");
            S.CONTAINERS.footer = $("<div />").prop("id", "ds-footer");
            reset.append(S.CONTAINERS.header);
            reset.append(S.CONTAINERS.body);
            reset.append(S.CONTAINERS.footer);
        },
        setConfig: function () {
            $.ajax({
                url: S.PATH.config,
                type: "POST",
                dataType: "json",
                data: {name: S.NAME, key: S.THREAD.key},
                xhrFields: {
                    withCredentials: true
                },
                success: function (ret) {
                    if (ret.code == 1) {
                        S.CONFIG = ret.data.config;
                        S.THREAD.key = S.CONFIG.key;
                        if (ret.data.userinfo) {
                            S.USERINFO = ret.data.userinfo;
                            S.LOGIN = true;
                            S.createControl(); // ?????????????????????
                        } else {
                            S.createShortLogin();
                        }
                    } else {
                        S.createShortLogin();
                    }
                    S.createCommonEvent();
                    S.createPostForm();
                    S.createReplyForm();
                    var dom = S.CONFIG.position == 'bottom' ? 'footer' : 'header';
                    S.CONTAINERS[dom].append(S.DOMS.shortlogin);
                    S.CONTAINERS[dom].append(S.DOMS.control);
                    S.CONTAINERS[dom].append(S.DOMS.postform);

                    S.createCommentList(); // ?????????????????????????????????

                    S.createPower();
                    S.CONTAINERS.footer.append(S.DOMS.power);
                }
            });
        },
        loadCss: function () {
            var link = document.createElement('link');
            link.href = S.STYLE;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(link);
        },
        refreshUser: function () {
            codeAjax({
                url: S.PATH.config,
                type: "GET",
                data: {},
                success: function (ret) {
                    if (ret.code == 1) {
                        S.CONFIG = ret.data.config;
                        if (ret.data.userinfo) {
                            S.USERINFO = ret.data.userinfo;
                            S.LOGIN = true;
                            $(".ds-dialog .ds-dialog-close").trigger("click");
                            var dom = S.CONFIG.position == 'top' ? 'header' : 'footer';
                            S.CONTAINERS[dom].find(S.DOMS.postform).remove();
                            S.CONTAINERS[dom].find(S.DOMS.shortlogin).remove();
                            S.createControl();
                            S.createPostForm();
                            S.createReplyForm();
                            S.CONTAINERS[dom].prepend(S.DOMS.postform);
                            S.CONTAINERS[dom].prepend(S.DOMS.control);
                        }
                    }
                }
            });
        },
        createCommonEvent: function () {
            $(document).on("click", ".ds-form .ds-add-emote", function () {
                S.loadEmoji(this);
                return false;
            });
            $(document).on("click", ".ds-form .ds-post-button", function () {
                var form = $(this).closest("form");
                submitForm(form);
                return false;
            });
            $(document).on("click", ".ds-more a,.ds-post-more a", function () {
                loadMoreComment(this);
            });

            $(document).on("click", ".ds-dialog .ds-dialog-close", function () {
                $(this).closest(".ds-dialog").parent().remove();
            });
            $("body").on("click", function (e) {
                if (S.DOMS.smile.css("display") == "block") {
                    S.DOMS.smile.hide();
                }
            });
            //???-?????????????????????
            $(window).on("message", function (MessageEvent) {
                var origin = event.origin || event.originalEvent.origin;
                if (origin == S.DOMAIN) {
                    var data = JSON.parse(MessageEvent.data);
                    if (data && data.state == 'login:ok') {
                        S.refreshUser();
                    }
                }
            });
            $(document).on("keydown", ".ds-form textarea", function (e) {
                var form = $(this).closest("form");
                if ((e.metaKey || e.ctrlKey) && (e.keyCode == 13 || e.keyCode == 10)) {
                    submitForm(form);
                }
            });
        },
        //?????????
        createPostForm: function () {
            var dom = $("<div />").addClass("ds-replybox").html(template.render(S.TEMPLATES.postform, {}));
            S.DOMS.postform = dom;
            dom.on("click", ".ds-form textarea", function () {
                if (!S.LOGIN) {
                    S.showModal();
                    this.blur();
                    return false;
                }
                S.DOMS.smile.hide();
            });
            return dom;
        },
        //?????????
        createReplyForm: function () {
            var dom = $("<div />").addClass("ds-replybox ds-inline-replybox").html(template.render(S.TEMPLATES.replyform, {}));
            S.DOMS.replyform = dom;
            return dom;
        },
        //????????????
        createShortLogin: function () {
            var dom = $("<div />").addClass("ds-login-buttons").html(template.render(S.TEMPLATES.shortlogin, {}));
            S.DOMS.shortlogin = dom;

            dom.on("click", "a", function () {
                var href = this.getAttribute("href");
                S.openLoginWin(href);
                return false;
            });
            return dom;
        },
        // ???????????????
        createControl: function () {
            var dom = $("<div />").addClass("ds-toolbar").html(template.render(S.TEMPLATES.control, {}));
            S.DOMS.control = dom;
            $(".ds-account-control", dom).on("mouseover", function () {
                $(this).addClass("ds-active");
            }).on("mouseout", function () {
                $(this).removeClass("ds-active");
            });
            $(".ds-my-comment", dom).on("click", function () {
                alert('?????????????????????');
                return false;
            });
            $(".ds-my-set", dom).on("click", function () {
                alert('?????????????????????');
                return false;
            });
            $(".ds-logout", dom).on("click", function () {
                codeAjax({
                    url: S.PATH.logout,
                    type: 'GET',
                    success: function (data) {
                        if (data.code == 1) {
                            window.location.reload();
                        }
                    }
                });
            });
            return dom;
        },
        loadEmoji: function (t) {
            if (!S.LOGIN) {
                S.showModal();
                return false;
            }

            var form = $(t).closest("form");
            var offset = form.offset();
            if ($("#ds-smilies-tooltip").size() == 0) {
                var div = $("<div />").prop("id", "ds-smilies-tooltip").css({
                    left: offset.left + "px",
                    top: (offset.top + 110) + "px",
                    display: "block",
                    overflow: "hidden",
                });

                var nav = $("<ul />").addClass("ds-smilies-tabs");
                div.append(nav);
                nav.on("click", "a", function () {
                    $("a", nav).removeClass("ds-current");
                    $(this).addClass("ds-current");
                    changeEmojiList($(this).data("type"));
                    return false;
                });

                var listDiv = $("<div />").addClass("ds-smilies-container").html("<ul></ul>");
                div.append(listDiv);

                listDiv.on("click", "img", function () {
                    var emoji = $(this).attr("title");
                    var textarea = $("textarea", form)[0];
                    insertText(textarea, emoji);
                    S.DOMS.smile.hide();
                    return false;
                });
                S.DOMS.smile.append(div);
                $("body").append(S.DOMS.smile);
                $.getScript(S.SMILEJS, function () {
                    S.DOMS.smile.show();
                });
            } else {
                S.DOMS.smile.css({
                    left: offset.left + "px",
                    top: (offset.top + 110) + "px",
                }).show();
            }
        },
        createCommentList: function () {
            var dom = $("<ul />").addClass("ds-comments").prop("id", "ds-comments-page");
            S.DOMS.comment = dom;
            codeAjax({
                url: S.PATH.comment,
                type: 'GET',
                data: {sort: S.CONFIG.sort, 'page': 1, 'perPage': S.CONFIG.pageSize},
                success: function (ret) {
                    if (ret.code == 1) {
                        S.createInfo(ret.data.totalCount);
                        if (ret.data.totalCount > 0) {
                            S.DOMS.comment.html(S.getCommentList(ret.data.datas));
                            if (S.CONFIG.nextPage == 'page') {
                                if (ret.data.lastPage > 1) {
                                    var pageHtml = '';
                                    for (var i = 1; i <= ret.data.lastPage; i++) {
                                        if (i == ret.data.page) {
                                            pageHtml += '<a href="javascript:void(0);" data-page="' + i + '" class="ds-current">' + i + '</a>';
                                        } else {
                                            pageHtml += '<a href="javascript:void(0);" data-page="' + i + '">' + i + '</a>';
                                        }
                                    }
                                    S.createPage(pageHtml);
                                }
                            } else {
                                if (ret.data.lastPage > ret.data.page) {
                                    //?????????????????????
                                    var loadMore = $("<div />").addClass("ds-more").html('<a href="javascript:;" data-page="2" data-level="2">????????????</a>')
                                    S.DOMS.page = loadMore;
                                }
                            }
                        } else {
                            S.DOMS.comment.html('<li class="ds-post ds-post-placeholder">????????????????????????????????????</li>');
                        }
                    }
                    S.CONTAINERS.body.append(S.DOMS.info);
                    S.CONTAINERS.body.append(S.DOMS.comment);
                    S.CONTAINERS.body.append(S.DOMS.page);
                }
            });

            //????????????
            dom.on("click", ".ds-post-reply", function () {
                if (!S.LOGIN) {
                    S.showModal();
                    return false;
                }
                if ($(this).parent().next().hasClass("ds-replybox")) {
                    $(this).parent().next().remove();
                } else {
                    var dspost = $(this).closest(".ds-post");
                    var pid = dspost.data("post-id");
                    var level = dspost.data("level");
                    if (level < S.CONFIG.maxLevel) {
                        $("input[name=pid]", S.DOMS.replyform).val(pid);
                        $(S.DOMS.replyform).insertAfter($(this).parent());
                        $("textarea", S.DOMS.replyform).val("");
                    } else {
                        pid = dspost.data("pid");
                        $("input[name=pid]", S.DOMS.replyform).val(pid);
                        $(S.DOMS.replyform).insertAfter(dspost);
                        $("textarea", S.DOMS.replyform).val("@" + dspost.data("nickname") + " ");
                    }
                    $("textarea", S.DOMS.replyform).focus();
                }
            });
            dom.on("click", ".ds-post-likes", function () {
                if (!S.LOGIN) {
                    S.showModal();
                    return false;
                }
                if ($(this).hasClass("ds-like")) {
                    alert("??????????????????");
                    return false;
                }
                var id = $(this).closest(".ds-post").data("post-id");
                var that = this;
                codeAjax({
                    url: S.PATH.like,
                    type: "POST",
                    data: {'id': id},
                    success: function (data) {
                        if (data.code == 1) {
                            var d = 0;
                            if ($(that).html().indexOf('(') != -1 && $(that).html().indexOf(')') != -1) {
                                var s = that.innerHTML.replace('<span class="ds-icon ds-icon-like"></span>', '');
                                d = parseInt(s.replace('???', '').replace('(', '').replace(')', ''));
                            }
                            d++;
                            $(that).html('<span class="ds-icon ds-icon-like"></span>???(' + d + ')');
                            $(that).addClass("ds-like");
                        } else {
                            $(that).addClass("ds-like");
                            alert(data.msg);
                        }
                    }
                });
            });
            dom.on("click", ".ds-post-report", function () {
                var id = $(this).closest(".ds-post").data("post-id");
                createReportBox(id, this);
            });
            dom.on("click", ".ds-post-delete", function () {
                if (confirm('?????????????????????????')) {
                    var dopost = $(this).closest(".ds-post");
                    var id = dopost.data("post-id");
                    codeAjax({
                        url: S.PATH.delete,
                        type: "POST",
                        data: {'id': id},
                        success: function (data) {
                            if (data.code == 1) {
                                dopost.remove();
                            } else {
                                alert(data.msg);
                            }
                        }
                    });
                }
            });
        },
        getHighLevelData: function (data, level) {
            var html = '';
            $.each(data, function (k, v) {
                var children = typeof v.children !== 'undefined' && v.children.length !== 0 ? S.getHighLevelData(v.children, level + 1) : '';
                html += template.render(S.TEMPLATES.comment, {comment: v, children: children, level: level});
            });
            return html;
        },
        getCommentList: function (data) {
            var html = '';
            if (S.CONFIG.showType == 'floor') {
                $.each(data, function (k, v) {
                    // ?????????????????????
                    var children = typeof v.children !== 'undefined' && v.children.length !== 0 ? S.getHighLevelData(v.children, 2) : '';
                    html += template.render(S.TEMPLATES.comment, {comment: v, children: children, level: 1});
                });

                return html;
            } else if (S.CONFIG.showType == 'reply') {
                $.each(data, function (k, v) {
                    html += template.render(S.TEMPLATES.comment, {comment: v, children: ''});
                });
            }
            return html;
        },
        createInfo: function (totalCount) {
            var dom = $("<div />").addClass("ds-comments-info").html(template.render(S.TEMPLATES.commentinfo, {total: totalCount}));
            S.DOMS.info = dom;
            dom.on("click", ".ds-sort a", function () {
                $(".ds-sort a", dom).removeClass("ds-current");
                $(this).addClass("ds-current");
                S.CONFIG.sort = S.SORTTYPE[parseInt($(".ds-sort a").index(this))];
                loadComment(1); // ????????????????????????
            });
        },
        createPower: function () {
            var dom = $("<div />").addClass("ds-powered-by").html('<a href="' + S.DOMAIN + '" target="_blank" rel="nofollow">???' + S.SITE + '????????????</a>');
            S.DOMS.power = dom;
        },
        openLoginWin: function (href) {
            window.open(href, "", "top=100,left=100,width=520,height=480");
        },
        addSmilies: function (name, data) {
            S.EMOJI[name] = data;
            S.EMOJICOUNT++;
            var navLi = '<li><a href="javascript:void(0);" ' + (name == S.CONFIG.defaultEmoji ? 'class="ds-current"' : '') + ' data-type="' + name + '"> ' + name + ' </a></li>';
            $("ul.ds-smilies-tabs", S.DOMS.smile).append(navLi);
            if (name == S.CONFIG.defaultEmoji) {
                var li = '';
                for (var key in data) {
                    var path = (name == 'WordPress') ? S.EMOJIPATH1 : S.EMOJIPATH;
                    li += '<li><img title="' + key + '" src="' + path + data[key] + '"></li>';
                }
                $(".ds-smilies-container ul", S.DOMS.smile).html(li);
            }
        },
        showModal: function () {
            var modal = $("<div />").prop("id", "ds-wrapper").html(template.render(S.TEMPLATES.loginform, {}));
            $("body").append(modal);
            $("a.ds-modal-login", modal).on("click", function () {
                var href = $(this).attr("href");
                if (href === 'javascript:void(0)') {
                    modal.remove();
                } else {
                    S.openLoginWin(href);
                }
                return false;
            });
        },
        createPage: function (html) {
            var dom = $("<div />").addClass("ds-paginator").html('<div class="ds-border"></div>' + html);
            S.DOMS.page = dom;
            dom.on("click", "a", function () {
                $("a", dom).removeClass("ds-current");
                $(this).addClass("ds-current");
                loadComment($(this).data("page"));
            });
        }
    };

    S.init();

    /**
     * ????????????box
     */
    function createReportBox(id, e) {
        var dom = $("<div />").addClass('ds-report-box').prop("id", "ds-wrapper").html(template.render(S.TEMPLATES.report, {id: id}));
        $("body").append(dom);

        dom.on("click", "[type=submit]", function () {
            var that = this;
            $(this).prop("disabled", true).html("????????????");
            codeAjax({
                type: "POST",
                url: S.PATH.report,
                data: $(this).closest("form").serialize(),
                success: function (data) {
                    if (data.code == 1) {
                        alert(data.msg);
                        dom.hide();
                    } else {
                        alert(data.msg);
                    }
                    $(that).prop("disabled", false).html("????????????");
                }
            });
        });
    }

    function loadMoreComment(btn) {
        var page = parseInt($(btn).data("page"));
        var pid = parseInt($(btn).data("pid"));
        var level = parseInt($(btn).data("level"));
        $(btn).text("?????????");
        codeAjax({
            url: S.PATH.comment,
            type: 'GET',
            data: {'page': page, 'pid': pid, 'level': level, 'perPage': S.CONFIG.pageSize},
            success: function (ret) {
                if (ret.code == 1) {
                    $(btn).text("????????????");
                    var html = '';
                    var btnParent = $(btn).parent();
                    if (ret.data.datas.length > 0) {
                        html = S.getCommentList(ret.data.datas);
                    } else {
                        html = '<li class="ds-post ds-post-placeholder">??????????????????</li>';
                    }
                    $(btn).data("page", page + 1);
                    if (pid) {
                        $(html).insertBefore(btnParent);
                    } else {
                        S.DOMS.comment.append(html);
                    }
                    if (ret.data.datas.length < ret.data.perPage) {
                        btnParent.remove();
                    }
                }
            }
        });
    }

    /**
     * ???????????????????????????
     * @param page
     */
    function loadComment(page) {
        codeAjax({
            url: S.PATH.comment,
            type: "GET",
            data: {'page': page, 'sort': S.CONFIG.sort, 'perPage': S.CONFIG.pageSize},
            success: function (ret) {
                if (ret.code === 1) {
                    var comment = S.getCommentList(ret.data.datas);
                    $("#ds-comments-page").html(comment);
                }
            }
        });
    }

    /**
     * ??????Ajax??????
     * @param o
     */
    function codeAjax(o) {
        o.url += "?name=" + S.NAME + "&key=" + S.THREAD.key;
        o.dataType = 'json';
        $.ajax($.extend({
            xhrFields: {
                withCredentials: true
            }
        }, o));
    }

    /**
     * ???????????????li??????????????????????????????????????????li
     */
    function createReplyLi(data) {
        var html = template.render(S.TEMPLATES.comment, {comment: data});
        if (S.CONFIG.position == 'top') {
            $(S.DOMS.comment).prepend(html);
        } else {
            $(S.DOMS.comment).append(html);
        }
    }

    /**
     * ???????????????????????????
     */
    function createFloorLi(data, form) {
        if (form.closest(".ds-replybox").prev().is("li.ds-post")) {
            var dspost = form.closest(".ds-replybox").prev();
            $(template.render(S.TEMPLATES.comment, {comment: data, level: dspost.data("level")})).insertAfter(dspost);
        } else {
            var dspost = form.closest(".ds-post");
            var children = $("ul.ds-children", dspost);
            var level = parseInt(dspost.data("level")) + 1;
            if (children.size() > 0) {
                children.prepend(template.render(S.TEMPLATES.comment, {comment: data, level: level}));
            } else {
                children = $("<ul />").addClass("ds-children").html(template.render(S.TEMPLATES.comment, {comment: data, level: level}));
                dspost.append(children);
            }
        }
    }

    /**
     * ??????emoji???????????????
     */
    function changeEmojiList(name) {
        var li = '';
        for (var key in S.EMOJI[name]) {
            var path = (name == 'WordPress') ? S.EMOJIPATH1 : S.EMOJIPATH;
            li += '<li><img title="' + key + '" src="' + path + S.EMOJI[name][key] + '"></li>';
        }
        $(".ds-smilies-container ul", S.DOMS.smile).html(li);
    }

    /**
     * ???????????????????????????????????????????????????
     */
    function insertText(obj, str) {
        if (document.selection) {
            var sel = document.selection.createRange();
            sel.text = str;
        } else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
            var startPos = obj.selectionStart,
                endPos = obj.selectionEnd,
                cursorPos = startPos,
                tmpStr = obj.value;
            obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
            cursorPos += str.length;
            obj.selectionStart = obj.selectionEnd = cursorPos;
        } else {
            obj.value += str;
        }
    }

    /**
     * ??????????????????????????????
     */
    function submitForm(form) {
        if (!S.LOGIN) {
            S.showModal();
            return false;
        }
        form.find("input[name=__token__]").val(S.CONFIG.token);
        if ($("textarea", form).val() == '') {
            alert("????????????????????????");
            $("textarea", form).focus();
            return false;
        }
        codeAjax({
            url: form.attr("action"),
            type: "POST",
            data: form.serialize(),
            success: function (ret) {
                if (typeof ret.data && typeof ret.data.token !== 'undefined') {
                    S.CONFIG.token = ret.data.token;
                }
                if (ret.code == 1) {
                    $("textarea", form).val('');
                    if (form.closest(".ds-inline-replybox").size() > 0) {
                        if (S.CONFIG.showType == 'floor') {
                            createFloorLi(ret.data.comment, form);
                        } else if (S.CONFIG.showType == 'reply') {
                            createReplyLi(ret.data.comment);
                            if (S.CONFIG.position == 'top') {
                                $('html,body').scrollTop(S.DOMS.comment.offset().top - 60);
                            } else {
                                $('html,body').scrollTop($("li:last-child", S.DOMS.comment).offset().top - 60);
                            }
                        }
                        form.parent().remove();
                    } else {
                        createReplyLi(ret.data.comment);
                    }
                } else {
                    alert(ret.msg);
                }
            }
        });
        return false;
    }
})();