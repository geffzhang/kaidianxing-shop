(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[172],{"1e00":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-content-bar",{scopedSlots:t._u([{key:"btn",fn:function(){return[a("Button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:t.handleSave}},[t._v("保存")])]},proxy:!0}])},[a("div",{staticClass:"payment-LCE"},[a("kdx-form-title",[t._v("支付证书验证")]),a("Form",{ref:"form",attrs:{"label-width":165,model:t.paymentData,rules:t.rule}},[a("Alert",[a("div",{staticClass:"tip"},[a("p",[t._v("【重要】微信支付计划更换服务器证书，请开发人员验证以免影响交易 ! 详见 "),a("a",{staticClass:"brand-color bold",attrs:{target:"_blank",href:"https://pay.weixin.qq.com/index.php/public/cms/content_detail?platformType=0&lang=zh&id=56602"}},[t._v("【微信商户平台公告】")])]),a("p",[a("span",{staticClass:"danger-color"},[t._v("注意：")]),t._v(" 此根证书是服务器证书 , 并非微信支付API证书 , 此处只需要验证服务器证书 , 不需要更换API证书")]),a("p",[a("span",{staticClass:"danger-color"},[t._v("提示：")]),t._v(" 如果验证证书失败 , 按指引进行自行安装证书! 方法见 "),a("a",{staticClass:"brand-color bold",attrs:{target:"_blank",href:"https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=23_4"}},[t._v("【微信支付HTTPS服务器证书验证指引】")])])])]),a("FormItem",{attrs:{label:"微信商户号(Mch_Id)：",prop:"wx"}},[a("Input",{staticClass:"width-250",model:{value:t.paymentData.wx,callback:function(e){t.$set(t.paymentData,"wx",e)},expression:"paymentData.wx"}})],1),a("FormItem",{attrs:{label:"支付秘钥(APIKEY)：",prop:"key"}},[a("Input",{staticClass:"width-250",model:{value:t.paymentData.key,callback:function(e){t.$set(t.paymentData,"key",e)},expression:"paymentData.key"}})],1)],1)],1),t._t("default")],2)},r=[]},8371:function(t,e,a){},"8fbf":function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("1da1"));a("d3b7");var i={components:{},props:{},data:function(){return{submitLoading:!1,paymentData:{},rule:{wx:[{required:!0,message:"请填写微信商户号",trigger:"blur"}],key:[{required:!0,message:"请填写支付秘钥",trigger:"blur"}]}}},computed:{},created:function(){},mounted:function(){},methods:{validateForm:function(){var t=this;return new Promise((function(e,a){t.$refs["form"].validate((function(t){t?e(t):a()}))}))},handleSave:function(){this.submitLoading=!0,this.customForm(this.paymentData)},customForm:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.validateForm();case 3:e.submit(t),a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),e.submitLoading=!1;case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()},submit:function(t){console.log(t),this.submitLoading=!1}}};e.default=i},c266:function(t,e,a){"use strict";a.r(e);var n=a("8fbf"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},d4e8:function(t,e,a){"use strict";a.r(e);var n=a("1e00"),r=a("c266");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("ff3e");var o=a("2877"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},ff3e:function(t,e,a){"use strict";a("8371")}}]);