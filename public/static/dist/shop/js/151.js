(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[151],{"052c":function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d3b7");var o=n(a("ade3")),i=n(a("5530")),r=a("2f62"),l=n(a("ceb0")),s={name:"copyright",components:{Editor:l.default},computed:(0,i.default)((0,i.default)({},(0,r.mapState)("account",{shopId:function(t){return t.shop.shopId}})),{},{noManagePerm:function(){return!this.$getPermMap("pc.sysset.copyright.manage")},isRoot:function(){var t,e;return 1==(null===(t=this.$store.state.config)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.is_root)}}),data:function(){return{showUnionSelect:!1,model:{navigation_1:"",navigation_1_url:"",navigation_2:"",navigation_2_url:"",copyright_status:"",copyright_info:""},rules:{navigation_1:[{required:!0,message:"请输入导航"}],navigation_2:[{required:!0,message:"请输入导航"}]}}},methods:{showSelect:function(){this.showUnionSelect=!this.showUnionSelect},getData:function(){var t=this;this.$api.homeApi.copyrightGet({}).then((function(e){0===e.error&&(t.model=Object.assign({},e.data))}))},onValidate:function(t,e){this.cacheError=(0,i.default)((0,i.default)({},this.cacheError),{},(0,o.default)({},t,e))},validate:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return new Promise((function(a){t.$refs["form"].validate((function(n){a(n),e(n),t.$nextTick((function(){if(!n)for(var e in t.cacheError)if(!t.cacheError[e]){t.$focusError(e);break}}))}))}))},handleSave:function(){var t=this;console.log(this.model,"model"),this.validate((function(e){e&&t.$api.homeApi.copyrightSet(t.model).then((function(e){0===e.error&&(t.$Message.success("操作成功"),t.getData())}))}))}},mounted:function(){this.getData()}};e.default=s},"0b53":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return o}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-content-bar",{scopedSlots:t._u([{key:"btn",fn:function(){return[a("Button",{staticClass:"handler-btn primary-long",attrs:{disabled:t.noManagePerm},on:{click:t.handleSave}},[t._v("保存")])]},proxy:!0}])},[a("div",{staticClass:"container"},[a("Form",{ref:"form",staticClass:"content",attrs:{model:t.model,rules:t.rules,"label-width":140},on:{"on-validate":t.onValidate}},[a("div",{staticClass:"content-box"},[a("kdx-form-title",[t._v("底部版权设置")]),a("FormItem",{directives:[{name:"error-item",rawName:"v-error-item.name",modifiers:{name:!0}}],attrs:{label:"自定义导航1：",prop:"navigation_1"}},[a("Input",{staticClass:"width-300",attrs:{disabled:t.noManagePerm,placeholder:"请输入"},model:{value:t.model.navigation_1,callback:function(e){t.$set(t.model,"navigation_1",e)},expression:"model.navigation_1"}})],1),a("FormItem",{attrs:{label:" 导航跳转链接："}},[a("Input",{staticClass:"width-300",attrs:{disabled:t.noManagePerm,placeholder:"请填写跳转pc页面的访问路径"},model:{value:t.model.navigation_1_url,callback:function(e){t.$set(t.model,"navigation_1_url",e)},expression:"model.navigation_1_url"}})],1),a("br"),a("FormItem",{attrs:{label:"自定义导航2：",prop:"navigation_2"}},[a("Input",{staticClass:"width-300",attrs:{disabled:t.noManagePerm,placeholder:"请输入"},model:{value:t.model.navigation_2,callback:function(e){t.$set(t.model,"navigation_2",e)},expression:"model.navigation_2"}})],1),a("FormItem",{attrs:{label:" 导航跳转链接："}},[a("Input",{staticClass:"width-300",attrs:{disabled:t.noManagePerm,placeholder:"请填写跳转pc页面的访问路径"},model:{value:t.model.navigation_2_url,callback:function(e){t.$set(t.model,"navigation_2_url",e)},expression:"model.navigation_2_url"}})],1),a("FormItem",{attrs:{label:"底部版权：",prop:"mall_status"}},[a("RadioGroup",{model:{value:t.model.copyright_status,callback:function(e){t.$set(t.model,"copyright_status",e)},expression:"model.copyright_status"}},[a("Radio",{attrs:{disabled:t.noManagePerm,label:"1"}},[a("span",[t._v("开启")])]),a("Radio",{attrs:{disabled:t.noManagePerm,label:"0"}},[a("span",[t._v("关闭")])])],1)],1),a("FormItem",{attrs:{label:"pc端版权信息：",prop:"copyright_info"}},[a("editor",{attrs:{height:300},model:{value:t.model.copyright_info,callback:function(e){t.$set(t.model,"copyright_info",e)},expression:"model.copyright_info"}})],1)],1)])],1)])},o=[]},"48e6e":function(t,e,a){"use strict";a("f4ff")},5212:function(t,e,a){"use strict";a.r(e);var n=a("052c"),o=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"86f4":function(t,e,a){"use strict";a.r(e);var n=a("0b53"),o=a("5212");for(var i in o)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("48e6e");var r=a("2877"),l=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"5751ef5a",null);e["default"]=l.exports},f4ff:function(t,e,a){}}]);