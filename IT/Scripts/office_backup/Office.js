/* Office JavaScript API library */
/* Version: 16.0.2727.1000 */
/*
	Copyright (c) Microsoft Corporation.  All rights reserved.
*/

/*
	Your use of this file is governed by the Microsoft Services Agreement http://go.microsoft.com/fwlink/?LinkId=266419.
*/

var OSF=OSF||{};OSF.HostSpecificFileVersion="16.00";OSF.ConstantNames={HostSpecificFallbackVersion:OSF.HostSpecificFileVersion,OfficeJS:"office.js",OfficeDebugJS:"office.debug.js",DefaultLocale:"en-us",LocaleStringLoadingTimeout:2e3,OfficeStringJS:"office_strings.js",O15InitHelper:"o15apptofilemappingtable.js"};OSF.InitializationHelper=function(d,b,f,e,c){var a=this;a._hostInfo=d;a._webAppState=b;a._context=f;a._settings=e;a._hostFacade=c};OSF.InitializationHelper.prototype.getAppContext=function(){};OSF.InitializationHelper.prototype.setAgaveHostCommunication=function(){};OSF.InitializationHelper.prototype.prepareRightBeforeWebExtensionInitialize=function(){};OSF.InitializationHelper.prototype.loadAppSpecificScriptAndCreateOM=function(){};OSF._OfficeAppFactory=function(){var c=true,b=false,a=null,g=function(b,a){if(a&&b&&!a[b])a[b]={}};g("Office",window);g("Microsoft",window);g("Office",Microsoft);g("WebExtension",Microsoft.Office);window.Office=Microsoft.Office.WebExtension;var j={},o={},i={},f={id:a,webAppUrl:a,conversationID:a,clientEndPoint:a,wnd:window.parent,focused:b},d={isO15:c,isRichClient:c,hostType:"",hostPlatform:"",hostSpecificFileVersion:""},e={},m=function(){var c,g="_host_Info=",d=window.location.search;if(d){var b=d.split(g);if(b.length>1){var e=b[1],f=new RegExp("/[&#]/g"),a=e.split(f);if(a.length>0)c=a[0]}}return c},h=function(f,g,i){var h={},m=3e4;if(f&&g){var l=window.document,d=h[f];if(!d){var e=l.createElement("script");e.type="text/javascript";d={loaded:b,pendingCallbacks:[g],timer:a};h[f]=d;var j=function(){if(d.timer!=a){clearTimeout(d.timer);delete d.timer}d.loaded=c;for(var e=d.pendingCallbacks.length,b=0;b<e;b++){var f=d.pendingCallbacks.shift();f()}},k=function(){delete h[f];if(d.timer!=a){clearTimeout(d.timer);delete d.timer}for(var c=d.pendingCallbacks.length,b=0;b<c;b++){var e=d.pendingCallbacks.shift();e()}};if(e.readyState)e.onreadystatechange=function(){if(e.readyState=="loaded"||e.readyState=="complete"){e.onreadystatechange=a;j()}};else e.onload=j;e.onerror=k;i=i||m;d.timer=setTimeout(k,i);e.src=f;l.getElementsByTagName("head")[0].appendChild(e)}else if(d.loaded)g();else d.pendingCallbacks.push(g)}},l=function(){var e="hostInfoValue",g=m(),j=function(){var b=a;try{if(window.sessionStorage)b=window.sessionStorage}catch(c){}return b},f=j();if(!g&&f&&f.getItem(e))g=f.getItem(e);if(g){d.isO15=b;var h=g.split("|");d.hostType=h[0];d.hostPlatform=h[1];d.hostSpecificFileVersion=h[2];var i=parseFloat(d.hostSpecificFileVersion);if(i>OSF.ConstantNames.HostSpecificFallbackVersion)d.hostSpecificFileVersion=OSF.ConstantNames.HostSpecificFallbackVersion.toString();f&&f.setItem(e,g)}else d.isO15=c},k=function(b,a){e.getAppContext(b,a)},n=function(){l();for(var v=function(b,c){var d,a;b=b.toLowerCase();c=c.toLowerCase();a=b.indexOf(c);if(a>=0&&a===b.length-c.length&&(a===0||b.charAt(a-1)==="/"||b.charAt(a-1)==="\\"))d=b.substring(0,a);return d},p=document.getElementsByTagName("script")||[],w=p.length,s=[OSF.ConstantNames.OfficeJS,OSF.ConstantNames.OfficeDebugJS],u=s.length,m,a,g=0;!a&&g<w;g++)if(p[g].src)for(m=0;!a&&m<u;m++)a=v(p[g].src,s[m]);if(!a)throw"Office Web Extension script library file name should be "+OSF.ConstantNames.OfficeJS+" or "+OSF.ConstantNames.OfficeDebugJS+".";var q=500,t,n=function(){var l="function",g="undefined";if(typeof Sys!==g&&typeof Type!==g&&Sys.StringBuilder&&typeof Sys.StringBuilder===l&&Type.registerNamespace&&typeof Type.registerNamespace===l&&Type.registerClass&&typeof Type.registerClass===l){e=new OSF.InitializationHelper(d,f,j,o,i);e.setAgaveHostCommunication();k(f.wnd,function(d){var j=function(){var c=100,b;function f(){if(Microsoft.Office.WebExtension.initialize!=undefined){e.prepareRightBeforeWebExtensionInitialize(d);b!=undefined&&window.clearTimeout(b)}else if(c==0){clearTimeout(b);throw"Office.js has not been fully loaded yet. Please try again later or make sure to add your initialization code on the Office.initialize function."}else{c--;b=window.setTimeout(f,100)}}e.loadAppSpecificScriptAndCreateOM(d,f,a)},f=b,i=function(){if(typeof Strings==g||typeof Strings.OfficeOM==g)if(!f){f=c;var e=a+OSF.ConstantNames.DefaultLocale+"/"+OSF.ConstantNames.OfficeStringJS;h(e,i)}else throw"Neither the locale, "+d.get_appUILocale().toLowerCase()+", provided by the host app nor the fallback locale "+OSF.ConstantNames.DefaultLocale+" are supported.";else{f=b;j()}},k=OSF.OUtil.formatString("{0}{1}/{2}",a,d.get_appUILocale().toLowerCase(),OSF.ConstantNames.OfficeStringJS);h(k,i,OSF.ConstantNames.LocaleStringLoadingTimeout)})}else if(q===0){clearTimeout(t);throw"MicrosoftAjax.js is not loaded successfully."}else{q--;t=window.setTimeout(n,100)}};if(d.isO15)h(a+OSF.ConstantNames.O15InitHelper,n);else{var r;r=d.hostType+"-"+d.hostPlatform+"-"+d.hostSpecificFileVersion+".js";h(a+r.toLowerCase(),n)}window.confirm=function(){throw"Function window.confirm is not supported."};window.alert=function(){throw"Function window.alert is not supported."};window.prompt=function(){throw"Function window.prompt is not supported."}};n();return {getId:function(){return f.id},getClientEndPoint:function(){return f.clientEndPoint},getContext:function(){return j},setContext:function(a){j=a},getHostFacade:function(){return i},setHostFacade:function(a){i=a},getInitializationHelper:function(){return e},getCachedSessionSettingsKey:function(){return f.conversationID!=a?f.conversationID+"CachedSessionSettings":"NoConversationIdCachedSessionSettings"}}}()