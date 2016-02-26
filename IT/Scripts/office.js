/* Office JavaScript API library */
/* Version: 16.0.3811.1000 */
/*
	Copyright (c) Microsoft Corporation.  All rights reserved.
*/

/*
	Your use of this file is governed by the Microsoft Services Agreement http://go.microsoft.com/fwlink/?LinkId=266419.
*/

var OSF=OSF||{};OSF.HostSpecificFileVersion="16.00";OSF.SupportedLocales={"ar-sa":true,"bg-bg":true,"ca-es":true,"cs-cz":true,"da-dk":true,"de-de":true,"el-gr":true,"en-us":true,"es-es":true,"et-ee":true,"eu-es":true,"fi-fi":true,"fr-fr":true,"gl-es":true,"he-il":true,"hi-in":true,"hr-hr":true,"hu-hu":true,"id-id":true,"it-it":true,"ja-jp":true,"kk-kz":true,"ko-kr":true,"lt-lt":true,"lv-lv":true,"ms-my":true,"nb-no":true,"nl-nl":true,"pl-pl":true,"pt-br":true,"pt-pt":true,"ro-ro":true,"ru-ru":true,"sk-sk":true,"sl-si":true,"sr-cyrl-cs":true,"sr-cyrl-rs":true,"sr-latn-cs":true,"sr-latn-rs":true,"sv-se":true,"th-th":true,"tr-tr":true,"uk-ua":true,"vi-vn":true,"zh-cn":true,"zh-tw":true};OSF.AssociatedLocales={ar:"ar-sa",bg:"bg-bg",ca:"ca-es",cs:"cs-cz",da:"da-dk",de:"de-de",el:"el-gr",en:"en-us",es:"es-es",et:"et-ee",eu:"eu-es",fi:"fi-fi",fr:"fr-fr",gl:"gl-es",he:"he-il",hi:"hi-in",hr:"hr-hr",hu:"hu-hu",id:"id-id",it:"it-it",ja:"ja-jp",kk:"kk-kz",ko:"ko-kr",lt:"lt-lt",lv:"lv-lv",ms:"ms-my",nb:"nb-no",nl:"nl-nl",pl:"pl-pl",pt:"pt-br",ro:"ro-ro",ru:"ru-ru",sk:"sk-sk",sl:"sl-si",sr:"sr-cyrl-cs",sv:"sv-se",th:"th-th",tr:"tr-tr",uk:"uk-ua",vi:"vi-vn",zh:"zh-cn"};OSF.ConstantNames={HostSpecificFallbackVersion:OSF.HostSpecificFileVersion,OfficeJS:"office.js",OfficeDebugJS:"office.debug.js",DefaultLocale:"en-us",LocaleStringLoadingTimeout:2e3,OfficeStringJS:"office_strings.js",O15InitHelper:"o15apptofilemappingtable.js",SupportedLocales:OSF.SupportedLocales,AssociatedLocales:OSF.AssociatedLocales};OSF.InitializationHelper=function(d,b,f,e,c){var a=this;a._hostInfo=d;a._webAppState=b;a._context=f;a._settings=e;a._hostFacade=c};OSF.InitializationHelper.prototype.getAppContext=function(){};OSF.InitializationHelper.prototype.setAgaveHostCommunication=function(){};OSF.InitializationHelper.prototype.prepareRightBeforeWebExtensionInitialize=function(){};OSF.InitializationHelper.prototype.loadAppSpecificScriptAndCreateOM=function(){};OSF._OfficeAppFactory=function(){var b="undefined",d=true,c=false,a=null,h=function(b,a){if(a&&b&&!a[b])a[b]={}};h("Office",window);h("Microsoft",window);h("Office",Microsoft);h("WebExtension",Microsoft.Office);window.Office=Microsoft.Office.WebExtension;var k={},r={},j={},f={id:a,webAppUrl:a,conversationID:a,clientEndPoint:a,wnd:window.parent,focused:c},e={isO15:d,isRichClient:d,hostType:"",hostPlatform:"",hostSpecificFileVersion:""},g={},l=a,m=window.location.hash,p=function(){var c,g="_host_Info=",d=window.location.search;if(d){var b=d.split(g);if(b.length>1){var e=b[1],f=new RegExp("/[&#]/g"),a=e.split(f);if(a.length>0)c=a[0]}}return c},i=function(f,g,i){var h={},m=3e4;if(f&&g){var l=window.document,b=h[f];if(!b){var e=l.createElement("script");e.type="text/javascript";b={loaded:c,pendingCallbacks:[g],timer:a};h[f]=b;var j=function(){if(b.timer!=a){clearTimeout(b.timer);delete b.timer}b.loaded=d;for(var e=b.pendingCallbacks.length,c=0;c<e;c++){var f=b.pendingCallbacks.shift();f()}},k=function(){delete h[f];if(b.timer!=a){clearTimeout(b.timer);delete b.timer}for(var d=b.pendingCallbacks.length,c=0;c<d;c++){var e=b.pendingCallbacks.shift();e()}};if(e.readyState)e.onreadystatechange=function(){if(e.readyState=="loaded"||e.readyState=="complete"){e.onreadystatechange=a;j()}};else e.onload=j;e.onerror=k;i=i||m;b.timer=setTimeout(k,i);e.src=f;l.getElementsByTagName("head")[0].appendChild(e)}else if(b.loaded)g();else b.pendingCallbacks.push(g)}},o=function(){var g="hostInfoValue",f=p(),k=function(){var b=a;try{if(window.sessionStorage)b=window.sessionStorage}catch(c){}return b},h=k();if(!f&&h&&h.getItem(g))f=h.getItem(g);if(f){e.isO15=c;var i=f.split("$");if(typeof i[2]==b)i=f.split("|");e.hostType=i[0];e.hostPlatform=i[1];e.hostSpecificFileVersion=i[2];var j=parseFloat(e.hostSpecificFileVersion);if(j>OSF.ConstantNames.HostSpecificFallbackVersion)e.hostSpecificFileVersion=OSF.ConstantNames.HostSpecificFallbackVersion.toString();if(h)try{h.setItem(g,f)}catch(l){}}else e.isO15=d},n=function(b,a){g.getAppContext(b,a)},q=function(){o();for(var y=function(b,d){var e,a,c;c=b.toLowerCase();a=c.indexOf(d);if(a>=0&&a===b.length-d.length&&(a===0||b.charAt(a-1)==="/"||b.charAt(a-1)==="\\"))e=b.substring(0,a);return e},s=document.getElementsByTagName("script"),z=s.length,v=[OSF.ConstantNames.OfficeJS,OSF.ConstantNames.OfficeDebugJS],x=v.length,p,h,m=0;!h&&m<z;m++)if(s[m].src)for(p=0;!h&&p<x;p++)h=y(s[m].src,v[p]);if(!h)throw"Office Web Extension script library file name should be "+OSF.ConstantNames.OfficeJS+" or "+OSF.ConstantNames.OfficeDebugJS+".";var t=500,w,q=function(){var a="function";if(typeof Sys!==b&&typeof Type!==b&&Sys.StringBuilder&&typeof Sys.StringBuilder===a&&Type.registerNamespace&&typeof Type.registerNamespace===a&&Type.registerClass&&typeof Type.registerClass===a){g=new OSF.InitializationHelper(e,f,k,r,j);g.setAgaveHostCommunication();n(f.wnd,function(a){l=a._appInstanceId;var j=function(){var c=100,b;function d(){if(Microsoft.Office.WebExtension.initialize!=undefined){g.prepareRightBeforeWebExtensionInitialize(a);b!=undefined&&window.clearTimeout(b)}else if(c==0){clearTimeout(b);throw"Office.js has not been fully loaded yet. Please try again later or make sure to add your initialization code on the Office.initialize function."}else{c--;b=window.setTimeout(d,100)}}g.loadAppSpecificScriptAndCreateOM(a,d,h)},k=function(a){if(!a)return OSF.ConstantNames.DefaultLocale;var b;a=a.toLowerCase();if(a in OSF.ConstantNames.SupportedLocales)b=a;else{var c=a.split("-",1);if(c&&c.length>0)b=OSF.ConstantNames.AssociatedLocales[c[0]]}if(!b)b=OSF.ConstantNames.DefaultLocale;return b},e=c,f=function(){if(typeof Strings==b||typeof Strings.OfficeOM==b)if(!e){e=d;var g=h+OSF.ConstantNames.DefaultLocale+"/"+OSF.ConstantNames.OfficeStringJS;i(g,f)}else throw"Neither the locale, "+a.get_appUILocale().toLowerCase()+", provided by the host app nor the fallback locale "+OSF.ConstantNames.DefaultLocale+" are supported.";else{e=c;j()}},m=OSF.OUtil.formatString("{0}{1}/{2}",h,k(a.get_appUILocale()),OSF.ConstantNames.OfficeStringJS);i(m,f,OSF.ConstantNames.LocaleStringLoadingTimeout)})}else if(t===0){clearTimeout(w);throw"MicrosoftAjax.js is not loaded successfully."}else{t--;w=window.setTimeout(q,100)}};if(e.isO15)i(h+OSF.ConstantNames.O15InitHelper,q);else{var u;u=e.hostType+"-"+e.hostPlatform+"-"+e.hostSpecificFileVersion+".js";i(h+u.toLowerCase(),q)}window.confirm=function(){throw"Function window.confirm is not supported.";return c};window.alert=function(){throw"Function window.alert is not supported."};window.prompt=function(){throw"Function window.prompt is not supported.";return a};window.history.replaceState=a;window.history.pushState=a};q();return {getId:function(){return f.id},getClientEndPoint:function(){return f.clientEndPoint},getContext:function(){return k},setContext:function(a){k=a},getHostFacade:function(){return j},setHostFacade:function(a){j=a},getInitializationHelper:function(){return g},getCachedSessionSettingsKey:function(){return (f.conversationID!=a?f.conversationID:l)+"CachedSessionSettings"},getWebAppState:function(){return f},getWindowLocationHash:function(){return m}}}()