(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"0786":function(t,e,i){"use strict";i.r(e);var a=i("a162"),o=i("fad2");for(var s in o)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("e8b9");var n=i("2877"),d=Object(n["a"])(o["default"],a["a"],a["b"],!1,null,"daf11166",null);e["default"]=d.exports},"150b":function(t,e,i){t.exports=i.p+"static/dist/shop/img/material-bottom1.png"},"1a3f":function(t,e,i){},3384:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"Preview",props:{model:{type:Object,default:function(){}}},data:function(){return{previewTop:i("6c86"),previewBottom:i("150b")}},methods:{}};e.default=a},"3cfc0":function(t,e,i){"use strict";i("1a3f")},"6c86":function(t,e,i){t.exports=i.p+"static/dist/shop/img/material-top.png"},9488:function(t,e,i){"use strict";i.r(e);var a=i("a793"),o=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=o.a},a162:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"preview-index"},[i("div",{staticClass:"preview-title"},[t._v("推广预览")]),i("div",{staticClass:"preview-box"},[i("div",{staticClass:"content"},[i("img",{attrs:{src:t.previewTop,alt:""}}),i("div",{staticClass:"text-wrap"},[i("div",{staticClass:"text"},[i("div",{staticClass:"description"},[t._v(t._s("0"===t.model.description_type?"📢 现在下单超划算，赶紧下单":t.model.description))]),"0"===t.model.description_type?i("div",{staticClass:"goods"},[t._v("👍 衬衫男女长袖夏季日系ins风文艺薄款亚麻港风男士女士小清新棉麻条纹白衬女士")]):t._e(),i("div",{staticClass:"item"},[t._v("💰 ￥50.99")]),i("div",{staticClass:"item"},[t._v("👉 购买链接：#小程序://后朴商城/商品/M1Ytw4mg7r7nB3a")])])]),i("img",{attrs:{src:t.previewBottom,alt:""}})])])])},o=[]},a793:function(t,e,i){var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var o=a(i("1da1")),s=a(i("5530"));i("a4d3"),i("e01a"),i("e9c4"),i("d3b7"),i("ac1f"),i("5319");var n=a(i("0786")),d=a(i("0659")),r=a(i("416b")),l={components:{preview:n.default,shopNamePageList:r.default,GoodsSelector:d.default},data:function(){var t=this;return{id:"",type:"",model:{goods_id:"",goods:{},description_type:"0",description:"",material_type:"0",thumb_all:[],video:"",video_thumb:""},rule:{goods:[{required:!0,validator:function(e,i,a){t.model.goods_id?a():a(new Error("至少选择一个商品"))}}],description_type:[{required:!0,message:"请选择推广文案"}],description:[{required:!0,message:"请输入推广文案"}],material_type:[{required:!0,validator:function(e,i,a){0==t.model.material_type&&0===t.model.thumb_all.length||1==t.model.material_type&&!t.model.video?a(new Error("请选择素材")):a()}}]},loading:!1,selector:{modal:!1}}},mounted:function(){var t,e,i,a;this.type=null===(t=this.$route)||void 0===t||null===(e=t.meta)||void 0===e?void 0:e.type,this.id=(null===(i=this.$route)||void 0===i||null===(a=i.query)||void 0===a?void 0:a.id)||"","edit"===this.type&&this.id&&this.getDetail()},computed:{noManagePerm:function(){return!this.$getPermMap("material.index.manage")}},methods:{getDetail:function(){var t=this;this.$api.materialApi.getMaterialInfo({id:this.id}).then((function(e){if(0===e.error){var i=e.data,a=i.goods_id,o=i.description_type,s=i.description,n=i.material_type,d=i.thumb_all,r=i.video,l=i.video_thumb;d=JSON.parse(d);var c={id:e.data.goods_id,category:e.data.goods_category,has_option:e.data.goods_has_option,thumb:e.data.goods_thumb,title:e.data.goods_title,type:e.data.goods_type};t.model={goods_id:a,description_type:o,description:s,material_type:n,thumb_all:d,video:r,video_thumb:l,goods:c}}}))},addShop:function(){this.selector.modal=!0},handleDelete:function(){this.model.goods={},this.model.goods_id=""},selectorChange:function(t){var e=this;this.model.goods=(0,s.default)({},t),this.model.goods_id=t.id,this.$refs["goods_id"].validateState="",this.$nextTick((function(){var t;null===(t=e.$refs["shop_name_list"])||void 0===t||t.reset()})),this.selectorCancel()},selectorCancel:function(){this.selector.modal=!1},thumbAllChange:function(t){this.model.thumb_all=t},changeVideo:function(t){this.model.video=t.path},changeVideoImage:function(t){this.model.video_thumb=t},handleSave:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$refs["form"].validate().then((function(e){if(e){t.loading=!0;var i=(0,s.default)({},t.model);i["thumb_all"]=JSON.stringify(i["thumb_all"]),i["goods"]=JSON.stringify(i["goods"]);var a="addMaterial";"edit"===t.type&&(a="editMaterial",i["id"]=t.id),t.$api.materialApi[a](i).then((function(e){0===e.error&&(t.$Message.success("保存成功"),t.$router.replace({path:"/material/list"}))})).finally((function(){t.loading=!1}))}}));case 1:case"end":return e.stop()}}),e)})))()}}};e.default=l},a81c:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex activity-add-wrap"},[i("preview",{attrs:{model:t.model}}),i("div",{staticClass:"right"},[i("kdx-content-bar",{staticClass:"content-bar-right",scopedSlots:t._u([{key:"btn",fn:function(){return[i("Button",{staticClass:"primary-long",attrs:{type:"primary",loading:t.loading,disabled:t.noManagePerm},on:{click:t.handleSave}},[t._v("保存")]),i("Button",{staticClass:"default-long",attrs:{to:"/material/list"}},[t._v("取消")])]},proxy:!0}])},[i("kdx-hint-alert",{staticStyle:{"margin-bottom":"10px"}},[i("div",{staticClass:"flex"},[i("div",{staticStyle:{"white-space":"nowrap"}},[t._v("提示：")]),i("div",[i("p",[t._v("朋友圈推广小程序/公众号/H5渠道系统自动生成生成小程序短链（Short Link），微信环境内无需问询可直接唤起小程序。")]),i("p",[t._v("需要微信小程序拥有以下一级类目：电商平台、商家自营、跨境电商，不符和条件时会自动转为URL Link（另一种小程序链接形式，打开时会跳转中间页）")]),i("p",[t._v("由于带参数的小程序链接（Short Link）永久链接上限是 10 万条，目前默认生成临时链接，生成数量不受限制，但是临时链接生成后有效时长为 30 天，失效后需要重新生成再使用，在新的场景使用时建议重新生成后使用。")])])])]),i("div",{staticClass:"content"},[i("Form",{ref:"form",staticClass:"form",attrs:{model:t.model,"label-width":120,rules:t.rule}},[i("kdx-form-title",{staticClass:"price-settings"},[t._v("推广设置")]),i("FormItem",{ref:"goods_id",attrs:{label:"选择商品：",prop:"goods"}},[i("div",{staticClass:"next-box"},[i("Button",{staticClass:"default-primary",on:{click:t.addShop}},[t._v(t._s(t.model.goods_id?"重新选择商品":"+添加商品"))]),t.model.goods_id?i("div",{staticClass:"shop-list-box"},[i("shop-name-page-list",{ref:"shop_name_list",attrs:{list:[Object.assign({},t.model.goods)]},on:{"on-delete":t.handleDelete}})],1):t._e()],1)]),i("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"推广文案：",prop:"description_type"}},[i("RadioGroup",{model:{value:t.model.description_type,callback:function(e){t.$set(t.model,"description_type",e)},expression:"model.description_type"}},[i("Radio",{attrs:{label:"0"}},[t._v("系统默认")]),i("Radio",{attrs:{label:"1"}},[t._v("自定义")])],1),i("kdx-hint-text",{staticClass:"hint-margin"},[t._v(" 系统默认文案为左侧预览图中显示，商品标题、商品价格读取商品设置不可修改，系统自动生成小程序短链 ")]),"0"!==t.model.description_type?i("div",{staticClass:"next-box"},[i("FormItem",{staticClass:"margin-l",attrs:{label:"推广文案：",prop:"description"}},[i("Input",{staticClass:"width-520 limit-input",attrs:{type:"textarea",rows:4,maxlength:"1000","show-word-limit":"",placeholder:"请输入推广文案"},model:{value:t.model.description,callback:function(e){t.$set(t.model,"description",e)},expression:"model.description"}}),i("kdx-hint-text",{staticClass:"hint-margin",staticStyle:{"margin-left":"120px"}},[t._v("您可以自定义个性化文案，不再读取商品标题信息，支持emoj表情包")])],1)],1):t._e()],1),i("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"上传素材：",prop:"material_type"}},[i("RadioGroup",{model:{value:t.model.material_type,callback:function(e){t.$set(t.model,"material_type",e)},expression:"model.material_type"}},[i("Radio",{attrs:{label:"0"}},[t._v("图片")]),i("Radio",{attrs:{label:"1"}},[t._v("视频")])],1),i("div",{staticClass:"next-box"},[0==t.model.material_type?[i("kdx-image-video",{staticClass:"swiper-img",attrs:{type:"image",limit:9,multiple:!0,"current-list":t.model.thumb_all,"is-drag":""},on:{"on-change":t.thumbAllChange}}),i("div",{staticClass:"flex"},[i("kdx-hint-text",{attrs:{content:"建议尺寸：750*750像素，可以拖拽图片调整顺序，最多上传9张"}})],1)]:[i("kdx-image-video",{staticStyle:{"padding-bottom":"10px"},attrs:{type:"video",video:t.model.video,current:t.model.video_thumb},on:{"on-video-change":t.changeVideo,"on-change":t.changeVideoImage}}),i("div",{staticClass:"flex"},[i("kdx-hint-text",{attrs:{content:"仅小程序渠道支持一键保存视频，建议视频突出商品核心卖点，时长9～30秒，宽高比16:9"}})],1)]],2)],1)],1)],1)],1),i("goods-selector",{attrs:{current:t.model.goods,show_material:1,multiple:!1},on:{"on-change":t.selectorChange,"on-cancel":t.selectorCancel},model:{value:t.selector.modal,callback:function(e){t.$set(t.selector,"modal",e)},expression:"selector.modal"}})],1)],1)},o=[]},a8f3:function(t,e,i){},bc3c:function(t,e,i){"use strict";i.r(e);var a=i("a81c"),o=i("9488");for(var s in o)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("3cfc0");var n=i("2877"),d=Object(n["a"])(o["default"],a["a"],a["b"],!1,null,"0e361736",null);e["default"]=d.exports},e8b9:function(t,e,i){"use strict";i("a8f3")},fad2:function(t,e,i){"use strict";i.r(e);var a=i("3384"),o=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=o.a}}]);