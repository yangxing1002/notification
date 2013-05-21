Ext.data.JsonP.DesktopNotify({"tagname":"class","name":"DesktopNotify","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-DesktopNotify","members":{"cfg":[],"property":[],"method":[{"name":"constructor","tagname":"method","owner":"DesktopNotify","meta":{},"id":"method-constructor"},{"name":"close","tagname":"method","owner":"DesktopNotify","meta":{},"id":"method-close"},{"name":"off","tagname":"method","owner":"DesktopNotify","meta":{"chainable":true},"id":"method-off"},{"name":"on","tagname":"method","owner":"DesktopNotify","meta":{"chainable":true},"id":"method-on"},{"name":"show","tagname":"method","owner":"DesktopNotify","meta":{"chainable":true},"id":"method-show"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":7,"files":[{"filename":"notification.js","href":"notification.html#DesktopNotify"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[{"name":"checkPermission","tagname":"method","owner":"DesktopNotify","meta":{"static":true},"id":"static-method-checkPermission"},{"name":"isPermitted","tagname":"method","owner":"DesktopNotify","meta":{"static":true},"id":"static-method-isPermitted"},{"name":"isSupport","tagname":"method","owner":"DesktopNotify","meta":{"static":true},"id":"static-method-isSupport"},{"name":"requestPermission","tagname":"method","owner":"DesktopNotify","meta":{"static":true},"id":"static-method-requestPermission"},{"name":"show","tagname":"method","owner":"DesktopNotify","meta":{"static":true},"id":"static-method-show"}],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/notification.html#DesktopNotify' target='_blank'>notification.js</a></div></pre><div class='doc-contents'><p>桌面通知组件, 对W3C标准的Notication以及早期版本的webkitNotications做了封装,\n支持的浏览器: chrome,  FireFox Aurora, FireFox Nightly, Safari 6\n提供更加方便的接口, 简单的示例如下:</p>\n\n<pre class='inline-example '><code>function handler(ev){\n     alert(ev.type);\n }\n\n KISSY.use('gallery/notification/1.0/index', function (S, Notification) {\n     document.onclick = function () {\n          //请求权限\n          Notification.requestPermission(function (p) {\n               var notify = new Notification(\"我是标题\", {\n                     body: \"我是内容体\",\n                     //icon URL mac下的safari和chrome不支持\n                     icon: \"http://0.gravatar.com/avatar/eba2d15b16971d6ea0800c8cc1801a1c?s=70\",\n                     //文字方向, mac下safari和chrome不支持\n                     dir: \"rtl\"\n                });\n\n               notify.on('show', handler).on('close', handler).\n                 on('error', handler).on('click', handler);\n\n              //弹出通知\n              notify.show();\n          })\n     }\n  })\n</code></pre>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DesktopNotify'>DesktopNotify</span><br/><a href='source/notification.html#DesktopNotify-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/DesktopNotify-method-constructor' class='name expandable'>DesktopNotify</a>( <span class='pre'>title, options</span> ) : <a href=\"#!/api/DesktopNotify\" rel=\"DesktopNotify\" class=\"docClass\">DesktopNotify</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : Object<div class='sub-desc'><p>{String} 通知对话框标题</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>{Object} 其他配置项</p>\n<ul><li><span class='pre'>body</span> : <div class='sub-desc'><p>{String} 对话框内容体</p>\n</div></li><li><span class='pre'>icon</span> : <div class='sub-desc'><p>{String} 对话框icon, Mac下chrome和safari不支持</p>\n</div></li><li><span class='pre'>dir</span> : <div class='sub-desc'><p>{String}  对话框内容文字方向, 可取\"ltr\", \"rtl\"; Mac下chrome和safari不支持</p>\n</div></li><li><span class='pre'>tag</span> : <div class='sub-desc'><p>{String}  对话框标签, 会替代当前具有同样标签的对话框</p>\n</div></li><li><span class='pre'>onshow</span> : <div class='sub-desc'><p>{function} 回调函数, 当对话框展示时触发,\nFF和webkit的触发时机有差异, FF在对话框显示前触发, 而webkit则在显示后触发</p>\n</div></li><li><span class='pre'>onclose</span> : <div class='sub-desc'><p>{function} 回调函数, 当对话框关闭时触发</p>\n</div></li><li><span class='pre'>onclick</span> : <div class='sub-desc'><p>{function} 回调函数, 当点击对话框触发</p>\n</div></li><li><span class='pre'>onerror</span> : <div class='sub-desc'><p>{function} 回调函数, 当调用出现错误时触发,比如拒绝授权</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/DesktopNotify\" rel=\"DesktopNotify\" class=\"docClass\">DesktopNotify</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-close' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DesktopNotify'>DesktopNotify</span><br/><a href='source/notification.html#DesktopNotify-method-close' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DesktopNotify-method-close' class='name expandable'>close</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>关闭一个桌面通知, 当对话框已经被关闭时, 对应的close事件不会触发 ...</div><div class='long'><p>关闭一个桌面通知, 当对话框已经被关闭时, 对应的close事件不会触发</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-off' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DesktopNotify'>DesktopNotify</span><br/><a href='source/notification.html#DesktopNotify-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DesktopNotify-method-off' class='name expandable'>off</a>( <span class='pre'>type, fn</span> ) : <a href=\"#!/api/DesktopNotify\" rel=\"DesktopNotify\" class=\"docClass\">DesktopNotify</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>移除事件监听函数, 未传入fn,则移除指定事件的所有监听函数 ...</div><div class='long'><p>移除事件监听函数, 未传入fn,则移除指定事件的所有监听函数</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'><p>: 事件类型</p>\n</div></li><li><span class='pre'>fn</span> : Object<div class='sub-desc'><p>: 监听函数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/DesktopNotify\" rel=\"DesktopNotify\" class=\"docClass\">DesktopNotify</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DesktopNotify'>DesktopNotify</span><br/><a href='source/notification.html#DesktopNotify-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DesktopNotify-method-on' class='name expandable'>on</a>( <span class='pre'>type, fn</span> ) : <a href=\"#!/api/DesktopNotify\" rel=\"DesktopNotify\" class=\"docClass\">DesktopNotify</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>添加事件监听函数 ...</div><div class='long'><p>添加事件监听函数</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'><p>: 事件类型</p>\n</div></li><li><span class='pre'>fn</span> : Object<div class='sub-desc'><p>: 监听函数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/DesktopNotify\" rel=\"DesktopNotify\" class=\"docClass\">DesktopNotify</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DesktopNotify'>DesktopNotify</span><br/><a href='source/notification.html#DesktopNotify-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DesktopNotify-method-show' class='name expandable'>show</a>( <span class='pre'></span> ) : Object<strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>弹出桌面通知 ...</div><div class='long'><p>弹出桌面通知</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-checkPermission' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DesktopNotify'>DesktopNotify</span><br/><a href='source/notification.html#DesktopNotify-static-method-checkPermission' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DesktopNotify-static-method-checkPermission' class='name expandable'>checkPermission</a>( <span class='pre'></span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'>检查权限状态, 0为允许, 1为不允许, 2为禁止 ...</div><div class='long'><p>检查权限状态, 0为允许, 1为不允许, 2为禁止</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-isPermitted' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DesktopNotify'>DesktopNotify</span><br/><a href='source/notification.html#DesktopNotify-static-method-isPermitted' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DesktopNotify-static-method-isPermitted' class='name expandable'>isPermitted</a>( <span class='pre'></span> ) : Boolean<strong class='static signature' >static</strong></div><div class='description'><div class='short'>检查是否得到授权 ...</div><div class='long'><p>检查是否得到授权</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>： true表示得到授权</p>\n</div></li></ul></div></div></div><div id='static-method-isSupport' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DesktopNotify'>DesktopNotify</span><br/><a href='source/notification.html#DesktopNotify-static-method-isSupport' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DesktopNotify-static-method-isSupport' class='name expandable'>isSupport</a>( <span class='pre'></span> )<strong class='static signature' >static</strong></div><div class='description'><div class='short'>检测是否支持Notification，支持返回true ...</div><div class='long'><p>检测是否支持Notification，支持返回true</p>\n</div></div></div><div id='static-method-requestPermission' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DesktopNotify'>DesktopNotify</span><br/><a href='source/notification.html#DesktopNotify-static-method-requestPermission' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DesktopNotify-static-method-requestPermission' class='name expandable'>requestPermission</a>( <span class='pre'>cb</span> ) : Object<strong class='static signature' >static</strong></div><div class='description'><div class='short'>请求授权 ...</div><div class='long'><p>请求授权</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cb</span> : Object<div class='sub-desc'><p>{function(permission)} 得到授权后的回调函数,将传入权限字符串作为参数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='static-method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DesktopNotify'>DesktopNotify</span><br/><a href='source/notification.html#DesktopNotify-static-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DesktopNotify-static-method-show' class='name expandable'>show</a>( <span class='pre'>title, body, icon</span> )<strong class='static signature' >static</strong></div><div class='description'><div class='short'>快速显示一个桌面通知 ...</div><div class='long'><p>快速显示一个桌面通知</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : Object<div class='sub-desc'><p>通知标题</p>\n</div></li><li><span class='pre'>body</span> : Object<div class='sub-desc'><p>通知内容体</p>\n</div></li><li><span class='pre'>icon</span> : Object<div class='sub-desc'><p>对话框url</p>\n</div></li></ul></div></div></div></div></div></div></div>"});