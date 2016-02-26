/* PowerPoint specific API library */
/* Version: 15.0.4562.3010 */
/*
	Copyright (c) Microsoft Corporation.  All rights reserved.
*/

/*
	Your use of this file is governed by the Microsoft Services Agreement http://go.microsoft.com/fwlink/?LinkId=266419.
*/

OSF.ClientMode={ReadWrite:0,ReadOnly:1};OSF.DDA.RichInitializationReason={1:Microsoft.Office.WebExtension.InitializationReason.Inserted,2:Microsoft.Office.WebExtension.InitializationReason.DocumentOpened};Microsoft.Office.WebExtension.FileType={Text:"text",Compressed:"compressed"};OSF.DDA.RichClientSettingsManager={read:function(e,d){var b=[],f=[];e&&e();window.external.GetContext().GetSettings().Read(b,f);d&&d();for(var c={},a=0;a<b.length;a++)c[b[a]]=f[a];return c},write:function(a,g,c,b){var e=[],d=[];for(var f in a){e.push(f);d.push(a[f])}c&&c();window.external.GetContext().GetSettings().Write(e,d);b&&b()}};OSF.DDA.DispIdHost.getRichClientDelegateMethods=function(e){var a={};a[OSF.DDA.DispIdHost.Delegates.ExecuteAsync]=OSF.DDA.SafeArray.Delegate.executeAsync;a[OSF.DDA.DispIdHost.Delegates.RegisterEventAsync]=OSF.DDA.SafeArray.Delegate.registerEventAsync;a[OSF.DDA.DispIdHost.Delegates.UnregisterEventAsync]=OSF.DDA.SafeArray.Delegate.unregisterEventAsync;function b(a){return function(b){var d,c;try{c=a(b.hostCallArgs,b.onCalling,b.onReceiving);d=OSF.DDA.ErrorCodeManager.errorCodes.ooeSuccess}catch(e){d=OSF.DDA.ErrorCodeManager.errorCodes.ooeInternalError;c={name:Strings.OfficeOM.L_InternalError,message:e}}b.onComplete&&b.onComplete(d,c)}}function d(c,b,a){return OSF.DDA.RichClientSettingsManager.read(b,a)}function c(a,c,b){return OSF.DDA.RichClientSettingsManager.write(a[OSF.DDA.SettingsManager.SerializedSettings],a[Microsoft.Office.WebExtension.Parameters.OverwriteIfStale],c,b)}switch(e){case OSF.DDA.AsyncMethodNames.RefreshAsync.id:a[OSF.DDA.DispIdHost.Delegates.ExecuteAsync]=b(d);break;case OSF.DDA.AsyncMethodNames.SaveAsync.id:a[OSF.DDA.DispIdHost.Delegates.ExecuteAsync]=b(c)}return a};OSF.DDA.File=function(e,c,b){OSF.OUtil.defineEnumerableProperties(this,{size:{value:c},sliceCount:{value:Math.ceil(c/b)}});var a={};a[OSF.DDA.FileProperties.Handle]=e;a[OSF.DDA.FileProperties.SliceSize]=b;var d=OSF.DDA.AsyncMethodNames;OSF.DDA.DispIdHost.addAsyncMethods(this,[d.GetDocumentCopyChunkAsync,d.ReleaseDocumentCopyAsync],a)};OSF.DDA.FileSliceOffset="fileSliceoffset";OSF.DDA.CustomXmlParts=function(){this._eventDispatches=[];var a=OSF.DDA.AsyncMethodNames;OSF.DDA.DispIdHost.addAsyncMethods(this,[a.AddDataPartAsync,a.GetDataPartByIdAsync,a.GetDataPartsByNameSpaceAsync])};OSF.DDA.CustomXmlPart=function(f,b,g){OSF.OUtil.defineEnumerableProperties(this,{builtIn:{value:g},id:{value:b},namespaceManager:{value:new OSF.DDA.CustomXmlPrefixMappings(b)}});var c=OSF.DDA.AsyncMethodNames;OSF.DDA.DispIdHost.addAsyncMethods(this,[c.DeleteDataPartAsync,c.GetPartNodesAsync,c.GetPartXmlAsync]);var e=f._eventDispatches,a=e[b];if(!a){var d=Microsoft.Office.WebExtension.EventType;a=new OSF.EventDispatch([d.DataNodeDeleted,d.DataNodeInserted,d.DataNodeReplaced]);e[b]=a}OSF.DDA.DispIdHost.addEventSupport(this,a)};OSF.DDA.CustomXmlPrefixMappings=function(b){var a=OSF.DDA.AsyncMethodNames;OSF.DDA.DispIdHost.addAsyncMethods(this,[a.AddDataPartNamespaceAsync,a.GetDataPartNamespaceAsync,a.GetDataPartPrefixAsync],b)};OSF.DDA.CustomXmlNode=function(d,c,e,b){OSF.OUtil.defineEnumerableProperties(this,{baseName:{value:b},namespaceUri:{value:e},nodeType:{value:c}});var a=OSF.DDA.AsyncMethodNames;OSF.DDA.DispIdHost.addAsyncMethods(this,[a.GetRelativeNodesAsync,a.GetNodeValueAsync,a.GetNodeXmlAsync,a.SetNodeValueAsync,a.SetNodeXmlAsync],d)};OSF.DDA.NodeInsertedEventArgs=function(b,a){OSF.OUtil.defineEnumerableProperties(this,{type:{value:Microsoft.Office.WebExtension.EventType.DataNodeInserted},newNode:{value:b},inUndoRedo:{value:a}})};OSF.DDA.NodeReplacedEventArgs=function(c,b,a){OSF.OUtil.defineEnumerableProperties(this,{type:{value:Microsoft.Office.WebExtension.EventType.DataNodeReplaced},oldNode:{value:c},newNode:{value:b},inUndoRedo:{value:a}})};OSF.DDA.NodeDeletedEventArgs=function(c,a,b){OSF.OUtil.defineEnumerableProperties(this,{type:{value:Microsoft.Office.WebExtension.EventType.DataNodeDeleted},oldNode:{value:c},oldNextSibling:{value:a},inUndoRedo:{value:b}})};OSF.OUtil.redefineList(Microsoft.Office.WebExtension.FileType,{Compressed:"compressed", Pdf:"pdf"});OSF.OUtil.redefineList(Microsoft.Office.WebExtension.CoercionType,{Text:"text",SlideRange:"slideRange"});OSF.OUtil.redefineList(Microsoft.Office.WebExtension.EventType,{DocumentSelectionChanged:"documentSelectionChanged",OfficeThemeChanged:"officeThemeChanged",DocumentThemeChanged:"documentThemeChanged"});OSF.OUtil.augmentList(Microsoft.Office.WebExtension.EventType,{ActiveViewChanged:"activeViewChanged"});OSF.OUtil.redefineList(Microsoft.Office.WebExtension.ValueFormat,{Unformatted:"unformatted"});OSF.OUtil.redefineList(Microsoft.Office.WebExtension.FilterType,{All:"all"});Microsoft.Office.WebExtension.OfficeTheme={PrimaryFontColor:"primaryFontColor",PrimaryBackgroundColor:"primaryBackgroundColor",SecondaryFontColor:"secondaryFontColor",SecondaryBackgroundColor:"secondaryBackgroundColor"};Microsoft.Office.WebExtension.DocumentTheme={PrimaryFontColor:"primaryFontColor",PrimaryBackgroundColor:"primaryBackgroundColor",SecondaryFontColor:"secondaryFontColor",SecondaryBackgroundColor:"secondaryBackgroundColor",Accent1:"accent1",Accent2:"accent2",Accent3:"accent3",Accent4:"accent4",Accent5:"accent5",Accent6:"accent6",Hyperlink:"hyperlink",FollowedHyperlink:"followedHyperlink",HeaderLatinFont:"headerLatinFont",HeaderEastAsianFont:"headerEastAsianFont",HeaderScriptFont:"headerScriptFont",HeaderLocalizedFont:"headerLocalizedFont",BodyLatinFont:"bodyLatinFont",BodyEastAsianFont:"bodyEastAsianFont",BodyScriptFont:"bodyScriptFont",BodyLocalizedFont:"bodyLocalizedFont"};Microsoft.Office.WebExtension.ActiveView={};OSF.OUtil.redefineList(Microsoft.Office.WebExtension.ActiveView,{Read:"read",Edit:"edit"});OSF.OUtil.redefineList(Microsoft.Office.WebExtension.GoToType,{Slide:"slide",Index:"index"});delete Microsoft.Office.WebExtension.BindingType;delete Microsoft.Office.WebExtension.select;OSF.OUtil.setNamespace("SafeArray",OSF.DDA);OSF.DDA.SafeArray.Response={Status:0,Payload:1};OSF.DDA.SafeArray.UniqueArguments={Offset:"offset",Run:"run",BindingSpecificData:"bindingSpecificData",MergedCellGuid:"{66e7831f-81b2-42e2-823c-89e872d541b3}"};OSF.OUtil.setNamespace("Delegate",OSF.DDA.SafeArray);OSF.DDA.SafeArray.Delegate.SpecialProcessor=function(){function b(a){var b;try{var h=a.ubound(1),d=a.ubound(2);a=a.toArray();if(h==1&&d==1)b=[a];else{b=[];for(var f=0;f<h;f++){for(var c=[],e=0;e<d;e++){var g=a[f*d+e];g!=OSF.DDA.SafeArray.UniqueArguments.MergedCellGuid&&c.push(g)}c.length>0&&b.push(c)}}}catch(i){}return b}var c=[OSF.DDA.PropertyDescriptors.FileProperties,OSF.DDA.PropertyDescriptors.FileSliceProperties,OSF.DDA.PropertyDescriptors.FilePropertiesDescriptor,OSF.DDA.PropertyDescriptors.BindingProperties,OSF.DDA.SafeArray.UniqueArguments.BindingSpecificData,OSF.DDA.SafeArray.UniqueArguments.Offset,OSF.DDA.SafeArray.UniqueArguments.Run,OSF.DDA.PropertyDescriptors.Subset,OSF.DDA.PropertyDescriptors.DataPartProperties,OSF.DDA.PropertyDescriptors.DataNodeProperties,OSF.DDA.EventDescriptors.BindingSelectionChangedEvent,OSF.DDA.EventDescriptors.DataNodeInsertedEvent,OSF.DDA.EventDescriptors.DataNodeReplacedEvent,OSF.DDA.EventDescriptors.DataNodeDeletedEvent,OSF.DDA.EventDescriptors.DocumentThemeChangedEvent,OSF.DDA.EventDescriptors.OfficeThemeChangedEvent,OSF.DDA.EventDescriptors.ActiveViewChangedEvent,OSF.DDA.DataNodeEventProperties.OldNode,OSF.DDA.DataNodeEventProperties.NewNode,OSF.DDA.DataNodeEventProperties.NextSiblingNode,Microsoft.Office.WebExtension.Parameters.OfficeTheme,Microsoft.Office.WebExtension.Parameters.DocumentTheme],a={};a[Microsoft.Office.WebExtension.Parameters.Data]=function(){var c=0,a=1;return {toHost:function(b){if(typeof b!="string"&&b[OSF.DDA.TableDataProperties.TableRows]!==undefined){var d=[];d[c]=b[OSF.DDA.TableDataProperties.TableRows];d[a]=b[OSF.DDA.TableDataProperties.TableHeaders];b=d}return b},fromHost:function(f){var e;if(f.toArray){var g=f.dimensions();if(g===2)e=b(f);else{var d=f.toArray();if(d.length===2&&(d[0]!=null&&d[0].toArray||d[1]!=null&&d[1].toArray)){e={};e[OSF.DDA.TableDataProperties.TableRows]=b(d[c]);e[OSF.DDA.TableDataProperties.TableHeaders]=b(d[a])}else e=d}}else e=f;return e}}}();OSF.DDA.SafeArray.Delegate.SpecialProcessor.uber.constructor.call(this,c,a);this.pack=function(c,d){var b;if(this.isDynamicType(c))b=a[c].toHost(d);else b=d;return b};this.unpack=function(c,d){var b;if(this.isComplexType(c)||OSF.DDA.ListType.isListType(c))try{b=d.toArray()}catch(e){b=d||{}}else if(this.isDynamicType(c))b=a[c].fromHost(d);else b=d;return b}};OSF.OUtil.extend(OSF.DDA.SafeArray.Delegate.SpecialProcessor,OSF.DDA.SpecialProcessor);OSF.DDA.SafeArray.Delegate.ParameterMap=function(){var e=true,f=new OSF.DDA.HostParameterMap(new OSF.DDA.SafeArray.Delegate.SpecialProcessor),a,d=f.self;function g(a){var c=null;if(a){c={};for(var d=a.length,b=0;b<d;b++)c[a[b].name]=a[b].value}return c}function b(b){var a={},c=g(b.toHost);if(b.invertible)a.map=c;else if(b.canonical)a.toHost=a.fromHost=c;else{a.toHost=c;a.fromHost=g(b.fromHost)}f.setMapping(b.type,a)}a=OSF.DDA.FileProperties;b({type:OSF.DDA.PropertyDescriptors.FileProperties,fromHost:[{name:a.Handle,value:0},{name:a.FileSize,value:1}]});b({type:OSF.DDA.PropertyDescriptors.FileSliceProperties,fromHost:[{name:Microsoft.Office.WebExtension.Parameters.Data,value:0},{name:a.SliceSize,value:1}]});a=OSF.DDA.FilePropertiesDescriptor;b({type:OSF.DDA.PropertyDescriptors.FilePropertiesDescriptor,fromHost:[{name:a.Url,value:0}]});a=OSF.DDA.BindingProperties;b({type:OSF.DDA.PropertyDescriptors.BindingProperties,fromHost:[{name:a.Id,value:0},{name:a.Type,value:1},{name:OSF.DDA.SafeArray.UniqueArguments.BindingSpecificData,value:2}]});b({type:OSF.DDA.SafeArray.UniqueArguments.BindingSpecificData,fromHost:[{name:a.RowCount,value:0},{name:a.ColumnCount,value:1},{name:a.HasHeaders,value:2}]});a=OSF.DDA.SafeArray.UniqueArguments;b({type:OSF.DDA.PropertyDescriptors.Subset,toHost:[{name:a.Offset,value:0},{name:a.Run,value:1}],canonical:e});a=Microsoft.Office.WebExtension.Parameters;b({type:OSF.DDA.SafeArray.UniqueArguments.Offset,toHost:[{name:a.StartRow,value:0},{name:a.StartColumn,value:1}],canonical:e});b({type:OSF.DDA.SafeArray.UniqueArguments.Run,toHost:[{name:a.RowCount,value:0},{name:a.ColumnCount,value:1}],canonical:e});a=OSF.DDA.DataPartProperties;b({type:OSF.DDA.PropertyDescriptors.DataPartProperties,fromHost:[{name:a.Id,value:0},{name:a.BuiltIn,value:1}]});a=OSF.DDA.DataNodeProperties;b({type:OSF.DDA.PropertyDescriptors.DataNodeProperties,fromHost:[{name:a.Handle,value:0},{name:a.BaseName,value:1},{name:a.NamespaceUri,value:2},{name:a.NodeType,value:3}]});b({type:OSF.DDA.EventDescriptors.BindingSelectionChangedEvent,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:0},{name:OSF.DDA.PropertyDescriptors.Subset,value:1}]});b({type:OSF.DDA.EventDescriptors.DocumentThemeChangedEvent,fromHost:[{name:Microsoft.Office.WebExtension.Parameters.DocumentTheme,value:d}]});b({type:OSF.DDA.EventDescriptors.OfficeThemeChangedEvent,fromHost:[{name:Microsoft.Office.WebExtension.Parameters.OfficeTheme,value:d}]});b({type:OSF.DDA.EventDescriptors.ActiveViewChangedEvent,fromHost:[{name:Microsoft.Office.WebExtension.Parameters.ActiveView,value:0}]});a=OSF.DDA.DataNodeEventProperties;b({type:OSF.DDA.EventDescriptors.DataNodeInsertedEvent,fromHost:[{name:a.InUndoRedo,value:0},{name:a.NewNode,value:1}]});b({type:OSF.DDA.EventDescriptors.DataNodeReplacedEvent,fromHost:[{name:a.InUndoRedo,value:0},{name:a.OldNode,value:1},{name:a.NewNode,value:2}]});b({type:OSF.DDA.EventDescriptors.DataNodeDeletedEvent,fromHost:[{name:a.InUndoRedo,value:0},{name:a.OldNode,value:1},{name:a.NextSiblingNode,value:2}]});b({type:a.OldNode,fromHost:[{name:OSF.DDA.PropertyDescriptors.DataNodeProperties,value:d}]});b({type:a.NewNode,fromHost:[{name:OSF.DDA.PropertyDescriptors.DataNodeProperties,value:d}]});b({type:a.NextSiblingNode,fromHost:[{name:OSF.DDA.PropertyDescriptors.DataNodeProperties,value:d}]});a=Microsoft.Office.WebExtension.AsyncResultStatus;b({type:OSF.DDA.PropertyDescriptors.AsyncResultStatus,fromHost:[{name:a.Succeeded,value:0},{name:a.Failed,value:1}]});a=Microsoft.Office.WebExtension.CoercionType;b({type:Microsoft.Office.WebExtension.Parameters.CoercionType,toHost:[{name:a.Text,value:0},{name:a.Matrix,value:1},{name:a.Table,value:2},{name:a.Html,value:3},{name:a.Ooxml,value:4},{name:a.SlideRange,value:7}]});a=Microsoft.Office.WebExtension.GoToType;b({type:Microsoft.Office.WebExtension.Parameters.GoToType,toHost:[{name:a.Binding,value:0},{name:a.NamedItem,value:1},{name:a.Slide,value:2},{name:a.Index,value:3}]});a=Microsoft.Office.WebExtension.FileType;a&&b({type:Microsoft.Office.WebExtension.Parameters.FileType,toHost:[{name:a.Text,value:0},{name:a.Compressed,value:5},{name:a.Pdf,value:6}]});a=Microsoft.Office.WebExtension.BindingType;a&&b({type:Microsoft.Office.WebExtension.Parameters.BindingType,toHost:[{name:a.Text,value:0},{name:a.Matrix,value:1},{name:a.Table,value:2}],invertible:e});a=Microsoft.Office.WebExtension.ValueFormat;b({type:Microsoft.Office.WebExtension.Parameters.ValueFormat,toHost:[{name:a.Unformatted,value:0},{name:a.Formatted,value:1}]});a=Microsoft.Office.WebExtension.FilterType;b({type:Microsoft.Office.WebExtension.Parameters.FilterType,toHost:[{name:a.All,value:0},{name:a.OnlyVisible,value:1}]});a=Microsoft.Office.WebExtension.OfficeTheme;a&&b({type:Microsoft.Office.WebExtension.Parameters.OfficeTheme,fromHost:[{name:a.PrimaryFontColor,value:0},{name:a.PrimaryBackgroundColor,value:1},{name:a.SecondaryFontColor,value:2},{name:a.SecondaryBackgroundColor,value:3}]});a=Microsoft.Office.WebExtension.ActiveView;a&&b({type:Microsoft.Office.WebExtension.Parameters.ActiveView,fromHost:[{name:0,value:a.Read},{name:1,value:a.Edit}]});a=Microsoft.Office.WebExtension.DocumentTheme;a&&b({type:Microsoft.Office.WebExtension.Parameters.DocumentTheme,fromHost:[{name:a.PrimaryBackgroundColor,value:0},{name:a.PrimaryFontColor,value:1},{name:a.SecondaryBackgroundColor,value:2},{name:a.SecondaryFontColor,value:3},{name:a.Accent1,value:4},{name:a.Accent2,value:5},{name:a.Accent3,value:6},{name:a.Accent4,value:7},{name:a.Accent5,value:8},{name:a.Accent6,value:9},{name:a.Hyperlink,value:10},{name:a.FollowedHyperlink,value:11},{name:a.HeaderLatinFont,value:12},{name:a.HeaderEastAsianFont,value:13},{name:a.HeaderScriptFont,value:14},{name:a.HeaderLocalizedFont,value:15},{name:a.BodyLatinFont,value:16},{name:a.BodyEastAsianFont,value:17},{name:a.BodyScriptFont,value:18},{name:a.BodyLocalizedFont,value:19}]});a=Microsoft.Office.WebExtension.SelectionMode;b({type:Microsoft.Office.WebExtension.Parameters.SelectionMode,toHost:[{name:a.Default,value:0},{name:a.Selected,value:1},{name:a.None,value:2}]});a=Microsoft.Office.WebExtension.Parameters;var c=OSF.DDA.MethodDispId;b({type:c.dispidNavigateToMethod,toHost:[{name:a.Id,value:0},{name:a.GoToType,value:1},{name:a.SelectionMode,value:2}]});b({type:c.dispidGetSelectedDataMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:a.CoercionType,value:0},{name:a.ValueFormat,value:1},{name:a.FilterType,value:2}]});b({type:c.dispidSetSelectedDataMethod,toHost:[{name:a.CoercionType,value:0},{name:a.Data,value:1}]});b({type:c.dispidGetFilePropertiesMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.FilePropertiesDescriptor,value:d}]});b({type:c.dispidGetDocumentCopyMethod,toHost:[{name:a.FileType,value:0}],fromHost:[{name:OSF.DDA.PropertyDescriptors.FileProperties,value:d}]});b({type:c.dispidGetDocumentCopyChunkMethod,toHost:[{name:OSF.DDA.FileProperties.Handle,value:0},{name:OSF.DDA.FileSliceOffset,value:1},{name:OSF.DDA.FileProperties.SliceSize,value:2}],fromHost:[{name:OSF.DDA.PropertyDescriptors.FileSliceProperties,value:d}]});b({type:c.dispidReleaseDocumentCopyMethod,toHost:[{name:OSF.DDA.FileProperties.Handle,value:0}]});b({type:c.dispidAddBindingFromSelectionMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:d}],toHost:[{name:a.Id,value:0},{name:a.BindingType,value:1}]});b({type:c.dispidAddBindingFromPromptMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:d}],toHost:[{name:a.Id,value:0},{name:a.BindingType,value:1},{name:a.PromptText,value:2}]});b({type:c.dispidAddBindingFromNamedItemMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:d}],toHost:[{name:a.ItemName,value:0},{name:a.Id,value:1},{name:a.BindingType,value:2},{name:a.FailOnCollision,value:3}]});b({type:c.dispidReleaseBindingMethod,toHost:[{name:a.Id,value:0}]});b({type:c.dispidGetBindingMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:d}],toHost:[{name:a.Id,value:0}]});b({type:c.dispidGetAllBindingsMethod,fromHost:[{name:OSF.DDA.ListDescriptors.BindingList,value:d}]});b({type:c.dispidGetBindingDataMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:a.Id,value:0},{name:a.CoercionType,value:1},{name:a.ValueFormat,value:2},{name:a.FilterType,value:3},{name:OSF.DDA.PropertyDescriptors.Subset,value:4}]});b({type:c.dispidSetBindingDataMethod,toHost:[{name:a.Id,value:0},{name:a.CoercionType,value:1},{name:a.Data,value:2},{name:OSF.DDA.SafeArray.UniqueArguments.Offset,value:3}]});b({type:c.dispidAddRowsMethod,toHost:[{name:a.Id,value:0},{name:a.Data,value:1}]});b({type:c.dispidAddColumnsMethod,toHost:[{name:a.Id,value:0},{name:a.Data,value:1}]});b({type:c.dispidClearAllRowsMethod,toHost:[{name:a.Id,value:0}]});b({type:c.dispidLoadSettingsMethod,fromHost:[{name:OSF.DDA.SettingsManager.SerializedSettings,value:d}]});b({type:c.dispidSaveSettingsMethod,toHost:[{name:OSF.DDA.SettingsManager.SerializedSettings,value:OSF.DDA.SettingsManager.SerializedSettings},{name:Microsoft.Office.WebExtension.Parameters.OverwriteIfStale,value:Microsoft.Office.WebExtension.Parameters.OverwriteIfStale}]});b({type:OSF.DDA.MethodDispId.dispidGetOfficeThemeMethod,fromHost:[{name:Microsoft.Office.WebExtension.Parameters.OfficeTheme,value:d}]});b({type:OSF.DDA.MethodDispId.dispidGetDocumentThemeMethod,fromHost:[{name:Microsoft.Office.WebExtension.Parameters.DocumentTheme,value:d}]});b({type:OSF.DDA.MethodDispId.dispidGetActiveViewMethod,fromHost:[{name:Microsoft.Office.WebExtension.Parameters.ActiveView,value:d}]});b({type:c.dispidAddDataPartMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.DataPartProperties,value:d}],toHost:[{name:a.Xml,value:0}]});b({type:c.dispidGetDataPartByIdMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.DataPartProperties,value:d}],toHost:[{name:a.Id,value:0}]});b({type:c.dispidGetDataPartsByNamespaceMethod,fromHost:[{name:OSF.DDA.ListDescriptors.DataPartList,value:d}],toHost:[{name:a.Namespace,value:0}]});b({type:c.dispidGetDataPartXmlMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:a.Id,value:0}]});b({type:c.dispidGetDataPartNodesMethod,fromHost:[{name:OSF.DDA.ListDescriptors.DataNodeList,value:d}],toHost:[{name:a.Id,value:0},{name:a.XPath,value:1}]});b({type:c.dispidDeleteDataPartMethod,toHost:[{name:a.Id,value:0}]});b({type:c.dispidGetDataNodeValueMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:OSF.DDA.DataNodeProperties.Handle,value:0}]});b({type:c.dispidGetDataNodeXmlMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:OSF.DDA.DataNodeProperties.Handle,value:0}]});b({type:c.dispidGetDataNodesMethod,fromHost:[{name:OSF.DDA.ListDescriptors.DataNodeList,value:d}],toHost:[{name:OSF.DDA.DataNodeProperties.Handle,value:0},{name:a.XPath,value:1}]});b({type:c.dispidSetDataNodeValueMethod,toHost:[{name:OSF.DDA.DataNodeProperties.Handle,value:0},{name:a.Data,value:1}]});b({type:c.dispidSetDataNodeXmlMethod,toHost:[{name:OSF.DDA.DataNodeProperties.Handle,value:0},{name:a.Xml,value:1}]});b({type:c.dispidAddDataNamespaceMethod,toHost:[{name:OSF.DDA.DataPartProperties.Id,value:0},{name:a.Prefix,value:1},{name:a.Namespace,value:2}]});b({type:c.dispidGetDataUriByPrefixMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:OSF.DDA.DataPartProperties.Id,value:0},{name:a.Prefix,value:1}]});b({type:c.dispidGetDataPrefixByUriMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:OSF.DDA.DataPartProperties.Id,value:0},{name:a.Namespace,value:1}]});b({type:c.dispidGetSelectedTaskMethod,fromHost:[{name:a.TaskId,value:d}]});b({type:c.dispidGetTaskMethod,fromHost:[{name:"taskName",value:0},{name:"wssTaskId",value:1},{name:"resourceNames",value:2}],toHost:[{name:a.TaskId,value:0}]});b({type:c.dispidGetTaskFieldMethod,fromHost:[{name:a.FieldValue,value:d}],toHost:[{name:a.TaskId,value:0},{name:a.FieldId,value:1},{name:a.GetRawValue,value:2}]});b({type:c.dispidGetWSSUrlMethod,fromHost:[{name:a.ServerUrl,value:0},{name:a.ListName,value:1}]});b({type:c.dispidGetSelectedResourceMethod,fromHost:[{name:a.ResourceId,value:d}]});b({type:c.dispidGetResourceFieldMethod,fromHost:[{name:a.FieldValue,value:d}],toHost:[{name:a.ResourceId,value:0},{name:a.FieldId,value:1},{name:a.GetRawValue,value:2}]});b({type:c.dispidGetProjectFieldMethod,fromHost:[{name:a.FieldValue,value:d}],toHost:[{name:a.FieldId,value:0},{name:a.GetRawValue,value:1}]});b({type:c.dispidGetSelectedViewMethod,fromHost:[{name:a.ViewType,value:0},{name:a.ViewName,value:1}]});c=OSF.DDA.EventDispId;b({type:c.dispidDocumentSelectionChangedEvent});b({type:c.dispidBindingSelectionChangedEvent,fromHost:[{name:OSF.DDA.EventDescriptors.BindingSelectionChangedEvent,value:d}]});b({type:c.dispidBindingDataChangedEvent,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:d}]});b({type:c.dispidSettingsChangedEvent});b({type:c.dispidDocumentThemeChangedEvent,fromHost:[{name:OSF.DDA.EventDescriptors.DocumentThemeChangedEvent,value:d}]});b({type:c.dispidOfficeThemeChangedEvent,fromHost:[{name:OSF.DDA.EventDescriptors.OfficeThemeChangedEvent,value:d}]});b({type:c.dispidActiveViewChangedEvent,fromHost:[{name:OSF.DDA.EventDescriptors.ActiveViewChangedEvent,value:d}]});b({type:c.dispidDataNodeAddedEvent,fromHost:[{name:OSF.DDA.EventDescriptors.DataNodeInsertedEvent,value:d}]});b({type:c.dispidDataNodeReplacedEvent,fromHost:[{name:OSF.DDA.EventDescriptors.DataNodeReplacedEvent,value:d}]});b({type:c.dispidDataNodeDeletedEvent,fromHost:[{name:OSF.DDA.EventDescriptors.DataNodeDeletedEvent,value:d}]});b({type:c.dispidTaskSelectionChangedEvent});b({type:c.dispidResourceSelectionChangedEvent});b({type:c.dispidViewSelectionChangedEvent});return f}();OSF.DDA.SafeArray.Delegate._onException=function(d,c){var a,b=d.number;if(b)switch(b){case -2146828218:a=OSF.DDA.ErrorCodeManager.errorCodes.ooeNoCapability;break;case -2146827850:default:a=OSF.DDA.ErrorCodeManager.errorCodes.ooeInternalError}c.onComplete&&c.onComplete(a||OSF.DDA.ErrorCodeManager.errorCodes.ooeInternalError)};OSF.DDA.SafeArray.Delegate.executeAsync=function(a){try{a.onCalling&&a.onCalling();function b(a){var c=a;if(OSF.OUtil.isArray(a))for(var f=c.length,d=0;d<f;d++)c[d]=b(c[d]);else if(OSF.OUtil.isDate(a))c=a.getVarDate();else if(typeof a==="object"&&!OSF.OUtil.isArray(a)){c=[];for(var e in a)if(!OSF.OUtil.isFunction(a[e]))c[e]=b(a[e])}return c}window.external.Execute(a.dispId,b(a.hostCallArgs),function(f){a.onReceiving&&a.onReceiving();if(a.onComplete){var b=f.toArray(),e=b[OSF.DDA.SafeArray.Response.Status],c;if(e==OSF.DDA.ErrorCodeManager.errorCodes.ooeSuccess)if(b.length>2){c=[];for(var d=1;d<b.length;d++)c[d-1]=b[d]}else c=b[OSF.DDA.SafeArray.Response.Payload];else c=b[OSF.DDA.SafeArray.Response.Payload];a.onComplete(e,c)}})}catch(c){OSF.DDA.SafeArray.Delegate._onException(c,a)}};OSF.DDA.SafeArray.Delegate._getOnAfterRegisterEvent=function(a){return function(b){a.onReceiving&&a.onReceiving();if(a.onComplete){var c=b.toArray?b.toArray()[OSF.DDA.SafeArray.Response.Status]:b;a.onComplete(c)}}};OSF.DDA.SafeArray.Delegate.registerEventAsync=function(a){a.onCalling&&a.onCalling();var c=OSF.DDA.SafeArray.Delegate._getOnAfterRegisterEvent(a);try{window.external.RegisterEvent(a.dispId,a.targetId,function(c,b){a.onEvent&&a.onEvent(b)},c)}catch(b){OSF.DDA.SafeArray.Delegate._onException(b,a)}};OSF.DDA.SafeArray.Delegate.unregisterEventAsync=function(a){a.onCalling&&a.onCalling();var c=OSF.DDA.SafeArray.Delegate._getOnAfterRegisterEvent(a);try{window.external.UnregisterEvent(a.dispId,a.targetId,c)}catch(b){OSF.DDA.SafeArray.Delegate._onException(b,a)}};OSF.DDA.PowerPointDocument=function(b,c){var a=this;OSF.DDA.PowerPointDocument.uber.constructor.call(a,b,c);OSF.DDA.DispIdHost.addAsyncMethods(a,[OSF.DDA.AsyncMethodNames.GetSelectedDataAsync,OSF.DDA.AsyncMethodNames.SetSelectedDataAsync,OSF.DDA.AsyncMethodNames.GetOfficeThemeAsync,OSF.DDA.AsyncMethodNames.GetDocumentThemeAsync,OSF.DDA.AsyncMethodNames.GetDocumentCopyAsync,OSF.DDA.AsyncMethodNames.GetActiveViewAsync,OSF.DDA.AsyncMethodNames.GetFilePropertiesAsync,OSF.DDA.AsyncMethodNames.GoToByIdAsync]);OSF.DDA.DispIdHost.addEventSupport(a,new OSF.EventDispatch([Microsoft.Office.WebExtension.EventType.DocumentSelectionChanged,Microsoft.Office.WebExtension.EventType.OfficeThemeChanged,Microsoft.Office.WebExtension.EventType.DocumentThemeChanged,Microsoft.Office.WebExtension.EventType.ActiveViewChanged]));OSF.OUtil.finalizeProperties(a)};Microsoft.Office.WebExtension.Index={First:"first",Last:"last",Next:"next",Previous:"previous"};OSF.DDA.Slide=function(a){var b={id:{value:parseInt(a[0])},title:{value:a[1]},index:{value:parseInt(a[2])}},c=0;for(var d in b)if(b.hasOwnProperty(d))c++;if(a.length!=c)throw Error.argument("slide");OSF.OUtil.defineEnumerableProperties(this,b);if(isNaN(this.id)||isNaN(this.index))throw Error.argument("slide")};OSF.DDA.SlideRange=function(f){for(var d=f.split("\n"),a=true,c=[],b=0;b<d.length&&a;b++){var e=OSF.OUtil.splitStringToList(d[b],",");try{c.push(new OSF.DDA.Slide(e))}catch(g){a=false}}if(!a)throw Error.argument("sliderange");OSF.OUtil.defineEnumerableProperties(this,{slides:{value:c}})};OSF.OUtil.extend(OSF.DDA.PowerPointDocument,OSF.DDA.Document);OSF.InitializationHelper.prototype.prepareRightBeforeWebExtensionInitialize=function(d){var i="secondaryBackgroundColor",h="secondaryFontColor",b="background-color",g="primaryBackgroundColor",a="color",f="primaryFontColor",c=null,v=new OSF.DDA.License(d.get_eToken());OSF._OfficeAppFactory.setContext(new OSF.DDA.Context(d,d.doc,v));var q,r,e=d.get_reason();q=OSF.DDA.DispIdHost.getRichClientDelegateMethods;r=OSF.DDA.SafeArray.Delegate.ParameterMap;e=OSF.DDA.RichInitializationReason[e];OSF._OfficeAppFactory.setHostFacade(new OSF.DDA.DispIdHost.Facade(q,r));var u=function(){for(var d="officethemes.css",b=0;b<document.styleSheets.length;b++){var a=document.styleSheets[b];if(!a.disabled&&a.href&&d==a.href.substring(a.href.length-d.length,a.href.length).toLowerCase())if(!a.cssRules&&!a.rules)return c;else return a}},j=u();if(j){var m=function(a,f,e){for(var g=a.cssRules?a.cssRules.length:a.rules.length,b=0;b<g;b++){var d;if(a.cssRules)d=a.cssRules[b];else d=a.rules[b];var c=d.selectorText;if(c!==""&&c.toLowerCase()==f.toLowerCase())if(a.cssRules){a.deleteRule(b);a.insertRule(c+e,b)}else{a.removeRule(b);a.addRule(c,e,b)}}},k=c,n=function(v){var d="font-family",e="border-color",s="accent6",r="accent5",q="accent4",p="accent3",o="accent2",t="accent1";for(var n=[{name:f,cssSelector:".office-docTheme-primary-fontColor",cssProperty:a},{name:g,cssSelector:".office-docTheme-primary-bgColor",cssProperty:b},{name:h,cssSelector:".office-docTheme-secondary-fontColor",cssProperty:a},{name:i,cssSelector:".office-docTheme-secondary-bgColor",cssProperty:b},{name:t,cssSelector:".office-contentAccent1-color",cssProperty:a},{name:o,cssSelector:".office-contentAccent2-color",cssProperty:a},{name:p,cssSelector:".office-contentAccent3-color",cssProperty:a},{name:q,cssSelector:".office-contentAccent4-color",cssProperty:a},{name:r,cssSelector:".office-contentAccent5-color",cssProperty:a},{name:s,cssSelector:".office-contentAccent6-color",cssProperty:a},{name:t,cssSelector:".office-contentAccent1-bgColor",cssProperty:b},{name:o,cssSelector:".office-contentAccent2-bgColor",cssProperty:b},{name:p,cssSelector:".office-contentAccent3-bgColor",cssProperty:b},{name:q,cssSelector:".office-contentAccent4-bgColor",cssProperty:b},{name:r,cssSelector:".office-contentAccent5-bgColor",cssProperty:b},{name:s,cssSelector:".office-contentAccent6-bgColor",cssProperty:b},{name:t,cssSelector:".office-contentAccent1-borderColor",cssProperty:e},{name:o,cssSelector:".office-contentAccent2-borderColor",cssProperty:e},{name:p,cssSelector:".office-contentAccent3-borderColor",cssProperty:e},{name:q,cssSelector:".office-contentAccent4-borderColor",cssProperty:e},{name:r,cssSelector:".office-contentAccent5-borderColor",cssProperty:e},{name:s,cssSelector:".office-contentAccent6-borderColor",cssProperty:e},{name:"hyperlink",cssSelector:".office-a",cssProperty:a},{name:"followedHyperlink",cssSelector:".office-a:visited",cssProperty:a},{name:"headerLatinFont",cssSelector:".office-headerFont-latin",cssProperty:d},{name:"headerEastAsianFont",cssSelector:".office-headerFont-eastAsian",cssProperty:d},{name:"headerScriptFont",cssSelector:".office-headerFont-script",cssProperty:d},{name:"headerLocalizedFont",cssSelector:".office-headerFont-localized",cssProperty:d},{name:"bodyLatinFont",cssSelector:".office-bodyFont-latin",cssProperty:d},{name:"bodyEastAsianFont",cssSelector:".office-bodyFont-eastAsian",cssProperty:d},{name:"bodyScriptFont",cssSelector:".office-bodyFont-script",cssProperty:d},{name:"bodyLocalizedFont",cssSelector:".office-bodyFont-localized",cssProperty:d}],u=v.type=="documentThemeChanged"?v.documentTheme:v,l=0;l<n.length;l++)if(k===c||k[n[l].name]!=u[n[l].name])if(u[n[l].name]!=c&&u[n[l].name]!="")m(j,n[l].cssSelector,"{"+n[l].cssProperty+":"+u[n[l].name]+";}");else m(j,n[l].cssSelector,"{}");k=u},l=c,p=function(n){for(var e=[{name:f,cssSelector:".office-officeTheme-primary-fontColor",cssProperty:a},{name:g,cssSelector:".office-officeTheme-primary-bgColor",cssProperty:b},{name:h,cssSelector:".office-officeTheme-secondary-fontColor",cssProperty:a},{name:i,cssSelector:".office-officeTheme-secondary-bgColor",cssProperty:b}],k=n.type=="officeThemeChanged"?n.officeTheme:n,d=0;d<e.length;d++)if(l===c||l[e[d].name]!=k[e[d].name])k[e[d].name]!==undefined&&m(j,e[d].cssSelector,"{"+e[d].cssProperty+":"+k[e[d].name]+";}");l=k},o=function(b,a){b(function(b){if(b.status=="succeeded"){var c=b.value;a(c)}else Microsoft.Office.WebExtension.initialize(e)})},t=function(a){p(a);d.doc.addHandlerAsync(Office.EventType.OfficeThemeChanged,p,c);Microsoft.Office.WebExtension.initialize(e)},s=function(a){n(a);d.doc.addHandlerAsync(Office.EventType.DocumentThemeChanged,n,c);o(d.doc.getOfficeThemeAsync,t)};o(d.doc.getDocumentThemeAsync,s)}else Microsoft.Office.WebExtension.initialize(e)}