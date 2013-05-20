/*! DesktopNotification - v1.0 - 2013-05-20 1:39:20 PM
* Copyright (c) 2013 踏风; Licensed  */
KISSY.add("gallery/notification/1.0/notification",function(){function t(t,i){this._title=t,this._options=i,this._instance=null,this._events={show:[],close:[],click:[],error:[]};var n=this;this._router=function(t){n._events[t.type].forEach(function(i){i.call(n,t)})},i.autoShow&&this.show()}var i=window.Notification,n=window.webkitNotifications;return t.prototype={constructor:t,show:function(){var t=this._options;return i?(this._instance=i&&new i(this._title,t),this._initEvents()):(this._instance=n.createNotification(t.icon,this._title,t.body),this._instance.dir=t.dir,this._initEvents(),this._instance.show()),this},_initEvents:function(){var t=this._instance,i=this._events;for(var n in i)t.addEventListener(n,this._router,!1)},showHTML:function(){},close:function(){this._instance&&this._instance.close()},on:function(t,i){if(!this._events[t])throw Error("Unsupported events:"+t);return this._events[t].push(i),this},off:function(t,i){if(!this._events[t])throw Error("Unsupported events:"+t);var n,s=this._events[t];return i?(n=s.indexOf(i),n>-1&&s.splice(n,1)):this._events[t]=[],this}},t.show=function(t,s,e){i&&new i(t,{body:s,icon:e})||n&&new n.createNotification(e,t,s).show()},t.checkPermission=function(){},t.isPermitted=function(){return i.permission&&"granted"===i.permission||0==n.checkPermission()},t.requestPermission=function(t){return(i||n).requestPermission(t),this},t.isSupport=function(){return"Notification"in window||"webkitNotifications"in window},t}),KISSY.add("1.0/index",function(t,i){return i},{requires:["./notification"]});