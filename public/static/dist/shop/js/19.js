(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"079e":function(e,t,a){"use strict";a.r(t);var r=a("27be"),s=a.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(i);t["default"]=s.a},"0d5d":function(e,t,a){},"0e15":function(e,t,a){},"10bf":function(e,t,a){"use strict";a("4e2f")},"11bd":function(e,t,a){"use strict";a.r(t);var r=a("bff7"),s=a.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(i);t["default"]=s.a},1219:function(e,t,a){},"1f14":function(e,t,a){"use strict";a.r(t);var r=a("7831"),s=a("8aa6");for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);a("ca5a");var n=a("2877"),o=Object(n["a"])(s["default"],r["a"],r["b"],!1,null,null,null);t["default"]=o.exports},"1ff92":function(e,t,a){"use strict";a.r(t);var r=a("fb048"),s=a("11bd");for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);a("67a0");var n=a("2877"),o=Object(n["a"])(s["default"],r["a"],r["b"],!1,null,"293b7148",null);t["default"]=o.exports},"27be":function(e,t,a){var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(a("b85c"));a("d3b7"),a("159b"),a("b0c0"),a("b680");var i={name:"ChangePriceList",props:{data:{type:Array,default:function(){return[]},required:!0}},data:function(){var e=this;this.$createElement;return{columns:[{title:"商品",key:"shop",width:350,render:function(t,a){var r;return(a.row.option_title||a.row.ext_field.content)&&(r=t("div",{class:"shop-label"},[t("span",[a.row.option_title||a.row.ext_field.content])])),t("div",{class:"shop"},[t("div",{class:"shop-image"},[t("img",{attrs:{src:e.goodsImage,alt:""},on:{error:function(t){e.replaceImage(t)}}})]),t("div",{class:"shop-information"},[t("p",{class:" title two-line-hide"},[a.row.title]),r])])}},{title:"单价",key:"price",width:100,render:function(e,t){var a;return null!==(a=t.row)&&void 0!==a&&a.credit?0==t.row.price_unit?e("div",{class:"shop-price-number"},[e("p",[t.row.credit_unit,"积分"])]):e("div",{class:"shop-price-number"},[e("p",[t.row.credit_unit,"积分 + ￥",t.row.price_unit])]):e("div",{class:"shop-price-number"},[e("p",["￥",t.row.price_unit])])}},{title:"数量",key:"number",width:80,render:function(e,t){return e("div",{class:"shop-price-number"},[e("p",["X",t.row.total])])}},{title:"小计",key:"total",width:100,render:function(t,a){var r;return null!==(r=a.row)&&void 0!==r&&r.credit?0==a.row.price?t("div",{class:"shop-price-number"},[t("p",[a.row.credit,"积分"])]):t("div",{class:"shop-price-number"},[t("p",[a.row.credit,"积分 + ￥",e.getSubtotal(a.row)])]):t("div",{class:"shop-price-number"},[t("p",["￥",e.getSubtotal(a.row)])])}},{title:"改价(小计)",key:"changePrice",width:200,render:function(t,a){var r=[];return e.optionData.changePrice.forEach((function(e){r.push(t("Option",{attrs:{value:e.key}},[e.name]))})),t("div",{class:"shop-price-number"},[t("kdx-rr-input",{attrs:{value:a.row.change_price,fixed:2,number:!0,minValue:0,maxValue:9999999.99},on:{"on-blur":function(t){e.changePriceBlur(a.index,a.row.change_price_type,t.target.value,a.row)}}},[t("Select",{attrs:{value:a.row.change_price_type},slot:"prepend",on:{"on-change":function(t){e.changePriceType(a.index,t,a.row)}},style:{backgroundColor:e.getColor(a.row.change_price_type)}},[r]),t("span",{slot:"append"},["元"])])])}},{title:"改价后小计",key:"changeTotal",minWidth:100,render:function(e,t){var a,r;return t.row.change_price_total&&(r=e("p",["￥",t.row.change_price_total])),null!==(a=t.row)&&void 0!==a&&a.credit?e("div",{class:t.row.change_price&&"0"!==t.row.change_price?"shop-price-number red":"shop-price-number"},0==r?[t.row.credit,"积分"]:[t.row.credit,"积分 + ",r]):e("div",{class:t.row.change_price&&"0"!==t.row.change_price?"shop-price-number red":"shop-price-number"},[r])}}],optionData:{changePrice:[{id:"1",name:"减价",key:"sub",color:this.$css["--theme-color"]},{id:"2",name:"加价",key:"add",color:this.$css["--theme-color"]}]},message:""}},computed:{goodsImage:function(){var e,t;return this.data[0].thumb?this.$media(this.data[0].thumb):"1"==(null===(e=this.data[0])||void 0===e||null===(t=e.ext_field)||void 0===t?void 0:t.coupon_sale_type)?a("999e"):this.$media(this.data[0].thumb)}},methods:{handleChange:function(e,t){this.$emit("on-change",e,t)},changePriceBlur:function(e,t,a,r){var s=parseFloat(a)&&parseFloat(a)>0?parseFloat(a).toFixed(2):"0.00";this.$emit("on-change",e,t,s,r)},changePriceType:function(e,t,a){this.$emit("on-type-change",e,t,a)},getColor:function(e){var t,a=(0,s.default)(this.optionData.changePrice);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(r.key===e)return r.color}}catch(i){a.e(i)}finally{a.f()}},getSubtotal:function(e){return(e.price_unit*e.total).toFixed(2)}}};t.default=i},3246:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"select-table-list"},[a("Table",{ref:"table",attrs:{columns:e.columns,data:e.data}})],1)},s=[]},"379d":function(e,t,a){},"3b9b":function(e,t,a){"use strict";a("0e15")},"3d15":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-modal-frame",{attrs:{width:430,closable:!1,okText:"关闭并退款"},on:{"on-cancel":e.handleCancel,"on-ok":e.handleOk},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("div",{staticClass:"order-list-refund-modal"},[a("div",{staticClass:"refund-box"},[a("div",{staticClass:"icon"},[a("Icon",{attrs:{type:"ios-help-circle"}})],1),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[e._v(" 是否关闭订单并退款 ")]),a("div",{staticClass:"text"},[e._v(" 请填写关闭订单原因及管理员密码 ")]),a("div",{staticClass:"input"},[e.value?a("Form",{ref:"form",attrs:{model:e.model,rules:e.rules},nativeOn:{submit:function(e){e.preventDefault()}}},[a("FormItem",{attrs:{prop:"refund_reason"}},[a("Input",{attrs:{type:"textarea",autofocus:"",maxlength:"40","show-word-limit":"",placeholder:"请输入关闭订单原因(非必填)"},model:{value:e.model.refund_reason,callback:function(t){e.$set(e.model,"refund_reason",t)},expression:"model.refund_reason"}})],1),a("FormItem",{attrs:{prop:"password"}},[a("Input",{staticClass:"width-350",attrs:{type:e.showPassword?"password":"text",icon:e.showPassword?" iconfont icon-eye-off":" iconfont icon-eye",placeholder:"请输入管理员密码"},on:{"on-click":e.passwordClick},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1)],1):e._e()],1)])])])])},s=[]},4391:function(e,t,a){},"4e2f":function(e,t,a){},"533e":function(e,t,a){"use strict";a.r(t);var r=a("6357"),s=a.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(i);t["default"]=s.a},"5e58":function(e,t,a){"use strict";a.r(t);var r=a("da4d"),s=a.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(i);t["default"]=s.a},6357:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3"),a("d3b7");var r={name:"index",props:{id:{type:[String,Number],required:!0}},data:function(){return{model:{password:"",refund_reason:""},rules:{password:[{required:!0,message:"管理员密码必填"}]},value:!1,showPassword:!0,loading:!1}},methods:{setValue:function(){this.value=!0,this.value&&(this.model.password="")},handleCancel:function(){this.value=!1,this.model.refund_reason=""},handleOk:function(){var e=this;this.$refs["form"].validate((function(t){if(t){var a={order_id:e.id,password:e.model.password,refund_reason:e.model.refund_reason};if(e.loading)return;e.loading=!0,e.$api.orderApi.refundOrder(a).then((function(t){0===t.error&&(e.$Message.success("退款操作成功"),e.value=!1,e.model.refund_reason="",e.$emit("on-refresh"))})).finally((function(){e.loading=!1}))}}))},passwordClick:function(){this.showPassword=!this.showPassword}}};t.default=r},"67a0":function(e,t,a){"use strict";a("0d5d")},"6d71":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-modal-frame",{attrs:{title:e.title,width:430,"class-name":"order-list-close-order"},on:{"on-cancel":e.handleCancel,"on-ok":e.handleOk},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("div",{staticClass:"order-list-close-order-remark"},[a("Input",{attrs:{type:"textarea",placeholder:"请输入取消原因"},model:{value:e.model.remark,callback:function(t){e.$set(e.model,"remark",t)},expression:"model.remark"}})],1)])},s=[]},"6f4a":function(e,t,a){var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3"),a("d3b7"),a("159b"),a("b680"),a("e9c4");var s=r(a("cd34")),i={name:"index",components:{ChangePriceList:s.default},props:{id:{type:[Number,String],required:!0}},data:function(){return{value:!1,model:{change_freight:"",freight:"0",total:"0",payment:"0"},data:{},isChangePrice:!1,number:1,totalChange:!1,dispatchChange:!1}},computed:{goodsType:function(){var e,t,a=this.data.order_goods,r=this.data.dispatch_type;a&&a.length>0&&(e=null===(t=a[0])||void 0===t?void 0:t.type);return 0==e&&"20"!=r}},methods:{setValue:function(){this.value=!this.value,this.value&&(this.reset(),this.getData())},handleCancel:function(){this.value=!1},handleOk:function(){var e=this;if(parseInt(this.data.change_price_count)>=10)this.$Message.error("订单最多支持10次改价");else{var t,a=[];this.data.order_goods.forEach((function(e){var r=e.change_price;if("sub"===e.change_price_type&&(r="-".concat(r)),r&&"0"!==r){var s={id:e.id,price_change:r};a.push(s)}t=e.type}));var r={order_id:this.id,total_price:this.data.pay_price};"3"==t&&(r.order_type="30"),this.dispatchChange&&(r.dispatch_price=this.data.dispatch_price),a.length>0&&(r.change_item=a),this.$api.orderApi.setChangePrice(r).then((function(t){0===t.error&&(e.$Message.success("订单改价成功"),e.setValue(),e.$emit("on-refresh"))}))}},changePrice:function(e,t,a){var r=this;if(this.totalChange=!0,a===this.data.order_goods[e].change_price&&"9999999.99"===a?(this.$set(this.data.order_goods[e],"change_price","0.00"),this.$nextTick((function(){r.$set(r.data.order_goods[e],"change_price",a)}))):this.$set(this.data.order_goods[e],"change_price",a),"add"===t){var s=(parseFloat(this.data.order_goods[e].price_original)+parseFloat(a)).toFixed(2);this.$set(this.data.order_goods[e],"change_price_total",s)}else if("sub"===t){var i=(parseFloat(this.data.order_goods[e].price_original)-parseFloat(a)).toFixed(2);this.$set(this.data.order_goods[e],"change_price_total",i)}this.isChangePrice=!0,this.calculateShopTotal(),this.data.order_goods=JSON.parse(JSON.stringify(this.data.order_goods))},changeTypePrice:function(e,t,a){this.$set(this.data.order_goods[e],"change_price_type",t),this.changePrice(e,t,this.data.order_goods[e].change_price,a)},changeFreight:function(){var e=this;this.dispatchChange=!0,this.$nextTick((function(){parseFloat(e.data.dispatch_price)&&parseFloat(e.data.dispatch_price)>0?e.data.dispatch_price=parseFloat(e.data.dispatch_price).toFixed(2):(e.data.dispatch_price="0.00",e.$set(e.data,"dispatch_price","0.00")),e.calculateShopPayment()}))},calculateShopTotal:function(){var e=0;this.data.order_goods.forEach((function(t){e+=parseFloat(t.change_price_total)})),this.data.total_price=e.toFixed(2),this.calculateShopPayment()},calculateShopPayment:function(){this.data.pay_price=(parseFloat(this.data.total_price)+parseFloat(this.data.dispatch_price)).toFixed(2)},getData:function(){var e=this;this.$api.orderApi.getChangePrice({order_id:this.id}).then((function(t){0===t.error&&e.initData(t)}))},initData:function(e){e.order_goods.forEach((function(e){e.change_price="0",e.change_price_type="add",e.change_price_total=e.price})),e.total_price=(parseFloat(e.pay_price)-parseFloat(e.dispatch_price)).toFixed(2),this.data=e},reset:function(){this.totalChange=!1,this.dispatchChange=!1}}};t.default=i},"6fec":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-modal-frame",{attrs:{title:"修改收货信息",width:700,loading:e.loading},on:{"on-cancel":e.handleCancel,"on-ok":e.handleOk},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("Form",{ref:"form",staticClass:"order-edit-receive-goods",attrs:{model:e.model,rules:e.rules,"label-width":120},nativeOn:{submit:function(e){e.preventDefault()}}},[a("FormItem",{attrs:{label:"收货人：",prop:"buyer_name"}},[a("Input",{staticClass:"width-430",attrs:{"show-word-limit":"",maxlength:"30",placeholder:"请输入"},model:{value:e.model.buyer_name,callback:function(t){e.$set(e.model,"buyer_name",t)},expression:"model.buyer_name"}})],1),a("FormItem",{attrs:{label:"手机号码：",prop:"buyer_mobile"}},[a("Input",{staticClass:"width-430",attrs:{placeholder:"请输入"},model:{value:e.model.buyer_mobile,callback:function(t){e.$set(e.model,"buyer_mobile",t)},expression:"model.buyer_mobile"}})],1),a("FormItem",{attrs:{label:"所属地区：",prop:"area"}},[a("Cascader",{staticClass:"width-430",attrs:{data:e.address.data},model:{value:e.model.area,callback:function(t){e.$set(e.model,"area",t)},expression:"model.area"}})],1),a("FormItem",{attrs:{label:"详细地址：",prop:"address_detail"}},[a("Input",{staticClass:"width-430",attrs:{"show-word-limit":"",maxlength:"100",placeholder:"请输入"},on:{"on-enter":e.handleOk},model:{value:e.model.address_detail,callback:function(t){e.$set(e.model,"address_detail",t)},expression:"model.address_detail"}})],1)],1)],1)},s=[]},"73e7":function(e,t,a){var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var s=r(a("b85c")),i=r(a("1da1"));a("a9e3"),a("b0c0");var n={name:"index",props:{id:{type:[String,Number]},dispatch_type:{type:[String,Number]}},data:function(){return{value:!1,cacheArea:[],model:{buyer_name:"",buyer_mobile:"",area:[],address_detail:"",area_code:""},rules:{buyer_name:[{required:!0,message:"收货人必填"}],buyer_mobile:[{required:!0,message:"手机号码必填"},{pattern:/^1(3|4|5|6|7|8|9)\d{9}$/,message:"手机号错误"}],area:[{required:!0,type:"array",message:"所属地区必填"}],address_detail:[{required:!0,message:"详细地址必填"}]},address:{data:[],list:[]},loading:!1}},methods:{setValue:function(){this.value=!this.value,this.value&&(this.resetModel(),this.getData())},handleCancel:function(){this.setValue()},handleOk:function(){var e=this;this.$refs["form"].validate((function(t){t&&e.editTackGoodsAddress()}))},getData:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("config/getAddress");case 2:e.loading=!0,e.$api.orderApi.getTackGoodsAddress({order_id:e.id}).then((function(t){0===t.error&&(e.cacheArea=[t.address_state,t.address_city,t.address_area],e.model={buyer_name:t.buyer_name,buyer_mobile:t.buyer_mobile,area:[t.address_state,t.address_city,t.address_area],address:t.address,address_detail:t.address_detail},e.$nextTick((function(){e.address.data=e.$store.state.config.address}))),e.loading=!1}));case 4:case"end":return t.stop()}}),t)})))()},editTackGoodsAddress:function(){var e=this;this.getAreaCode(this.address.data);var t=Object.assign({},this.model,{province:this.model.area[0]||"",city:this.model.area[1]||"",area:this.model.area[2]||"",order_id:this.id});this.$api.orderApi.editTackGoodsAddress(t).then((function(t){0===t.error&&(e.$Message.success("收货地址修改成功"),e.setValue(),e.$emit("on-refresh"))}))},getAreaCode:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t++;var a,r=(0,s.default)(e);try{for(r.s();!(a=r.n()).done;){var i=a.value;if(this.model.area.indexOf(i.name)>-1){var n;if(t===this.model.area.length-1){this.model.area_code=i.id;break}null!==(n=i.children)&&void 0!==n&&n.length&&this.getAreaCode(i.children,t)}}}catch(o){r.e(o)}finally{r.f()}},resetModel:function(){this.model={buyer_name:"",buyer_mobile:"",area:[],address_detail:"",area_code:""}}}};t.default=n},"742a":function(e,t,a){"use strict";a.r(t);var r=a("73e7"),s=a.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(i);t["default"]=s.a},"76ab":function(e,t,a){"use strict";a("1219")},7831:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-modal-frame",{attrs:{title:"订单发货",width:700,loading:e.loading},on:{"on-cancel":e.handleCancel,"on-ok":e.handleOk},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("div",{staticClass:"send-goods-modal"},[e.value?a("Form",{ref:"form",attrs:{model:e.order,rules:e.rules,"label-width":120},nativeOn:{submit:function(e){e.preventDefault()}}},["10"===e.dispatch_type?a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"处理方式："}},[a("RadioGroup",{model:{value:e.order.type,callback:function(t){e.$set(e.order,"type",t)},expression:"order.type"}},[a("Radio",{attrs:{label:"1",disabled:e.disabled}},[e._v("整单发货")]),a("Radio",{attrs:{label:"0",disabled:e.disabled}},[e._v("分包裹发货")])],1)],1):e._e(),"0"===e.order.type&&"10"===e.dispatch_type?a("div",{staticClass:"shop-more"},[a("kdx-hint-alert",{staticClass:"alert"},[e._v("选择需要发货的商品")]),a("send-goods-list",{attrs:{data:e.data.order_goods},on:{"on-change":e.changeSendGoods}})],1):e._e(),a("FormItem",{staticClass:"r-form-item-text",attrs:{label:"收货人姓名："}},[e._v(" "+e._s(e.data.buyer_name)+" ")]),a("FormItem",{staticClass:"r-form-item-text",attrs:{label:"联系方式："}},[e._v(" "+e._s(e.data.buyer_mobile)+" ")]),a("FormItem",{staticClass:"r-form-item-text",attrs:{label:"收货地址："}},[e._v(" "+e._s(e.data.address)+" ")]),"10"===e.dispatch_type?a("FormItem",{attrs:{label:"快递公司：",prop:"express_id"}},[a("select-express",{staticClass:"width-340",attrs:{value:e.order.express_id,"option-data":e.express},on:{"update:value":function(t){return e.$set(e.order,"express_id",t)}}})],1):e._e(),"30"===e.dispatch_type?a("FormItem",{attrs:{label:"配送方式：",prop:"city_distribution_type"}},[a("RadioGroup",{model:{value:e.order.city_distribution_type,callback:function(t){e.$set(e.order,"city_distribution_type",t)},expression:"order.city_distribution_type"}},[a("Radio",{attrs:{label:"0"}},[e._v("商家配送")]),a("Radio",{attrs:{label:"1"}},[e._v("达达配送")])],1),e.intracityCanUse?e._e():a("kdx-hint-text",[e._v(" 请在订单配送 - 同城配送中开启。"),a("span",{staticClass:"open-dispatch",on:{click:e.jumpSamecity}},[e._v("立即开启")])])],1):e._e(),96==e.order.express_id?a("FormItem",{attrs:{label:"自定义名称：",prop:"express_name"}},[a("Input",{staticClass:"width-340",attrs:{placeholder:"请输入",maxlength:"6","show-word-limit":""},on:{"on-enter":e.handleOk},model:{value:e.order.express_name,callback:function(t){e.$set(e.order,"express_name",t)},expression:"order.express_name"}}),a("kdx-hint-text",[e._v("其他快递不支持物流查询，不支持打印电子面单")])],1):e._e(),"10"===e.dispatch_type?a("FormItem",{attrs:{label:"快递单号：",prop:"express_code"}},[a("Input",{staticClass:"width-340",attrs:{placeholder:"请输入"},on:{"on-enter":e.handleOk},model:{value:e.order.express_code,callback:function(t){e.$set(e.order,"express_code",t)},expression:"order.express_code"}})],1):e._e()],1):e._e()],1)])},s=[]},"8aa6":function(e,t,a){"use strict";a.r(t);var r=a("d835"),s=a.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(i);t["default"]=s.a},"8e00":function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3");var r={name:"index",props:{visible:{type:Number,default:0},title:{type:String,default:"关闭订单"},id:{type:[String,Number],required:!0}},data:function(){return{model:{remark:""},value:!1}},watch:{visible:function(){this.value=!0}},methods:{handleCancel:function(){this.value=!1},handleOk:function(){this.value=!1}}};t.default=r},"91d9":function(e,t,a){"use strict";a.r(t);var r=a("6d71"),s=a("be9d");for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);a("76ab");var n=a("2877"),o=Object(n["a"])(s["default"],r["a"],r["b"],!1,null,"40d8ab83",null);t["default"]=o.exports},a467:function(e,t,a){"use strict";a.r(t);var r=a("6fec"),s=a("742a");for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);a("e0fc");var n=a("2877"),o=Object(n["a"])(s["default"],r["a"],r["b"],!1,null,"2dbe7c6c",null);t["default"]=o.exports},ab6e:function(e,t,a){"use strict";a.r(t);var r=a("6f4a"),s=a.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(i);t["default"]=s.a},b091:function(e,t,a){"use strict";a.r(t);var r=a("3d15"),s=a("533e");for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);a("b9b0");var n=a("2877"),o=Object(n["a"])(s["default"],r["a"],r["b"],!1,null,"8fa32194",null);t["default"]=o.exports},b389:function(e,t,a){"use strict";a("379d")},b9b0:function(e,t,a){"use strict";a("f4d2")},be9d:function(e,t,a){"use strict";a.r(t);var r=a("8e00"),s=a.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(i);t["default"]=s.a},bff7:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"GoodsList",props:{data:{type:Array,default:function(){return[]}}},data:function(){var e=this;this.$createElement;return{columns:[{title:"商品",key:"shop",width:300,render:function(t,a){var r;return a.row.option_title&&(r=t("div",{class:"shop-label"},[t("span",[a.row.option_title])])),t("div",{class:"shop"},[t("div",{class:"shop-image"},[t("img",{attrs:{src:e.$media(a.row.thumb)},on:{error:function(t){e.replaceImage(t)}}})]),t("div",{class:"shop-information"},[t("div",{class:"title two-line-hide"},[a.row.title]),r])])}},{title:"数量",key:"total",render:function(e,t){return e("div","X".concat(t.row.total))}},{title:"发货状态",key:"status",render:function(e,t){return 10==t.row.status?e("kdx-status-text",{attrs:{type:"disabled"}},["未发货"]):-1==t.row.status?e("kdx-status-text",{attrs:{type:"disabled"}},["已关闭"]):e("kdx-status-text",{attrs:{type:"success"}},["已发货"])}},{title:"操作",key:"action",render:function(t,a){return t("div",[t("Button",{props:{type:"primary"},on:{click:function(){e.selectList(a.row.id)}},style:{display:a.row.checked?"inline-block":"none"}},"已选"),t("Button",{props:{disabled:"1"!=a.row.can_send},class:{"default-primary":!0},on:{click:function(){e.selectList(a.row.id)}},style:{display:a.row.checked?"none":"inline-block"}},"选择")])}}]}},methods:{selectList:function(e){this.$emit("on-change",e)}}};t.default=a},c5e4:function(e,t,a){"use strict";a.r(t);var r=a("ea68"),s=a("ab6e");for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);a("10bf");var n=a("2877"),o=Object(n["a"])(s["default"],r["a"],r["b"],!1,null,"7bbf2224",null);t["default"]=o.exports},ca5a:function(e,t,a){"use strict";a("4391")},cd34:function(e,t,a){"use strict";a.r(t);var r=a("3246"),s=a("079e");for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);a("b389");var n=a("2877"),o=Object(n["a"])(s["default"],r["a"],r["b"],!1,null,"29d66848",null);t["default"]=o.exports},d835:function(e,t,a){var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3"),a("d81d"),a("4de4"),a("d3b7"),a("a434"),a("159b");var s=r(a("392e")),i=r(a("1ff92")),n={name:"SendGoods",components:{SelectExpress:s.default,SendGoodsList:i.default},props:{id:{type:String},dispatch_type:{type:[String,Number]}},data:function(){return{value:!1,order:{express_code:"",express_id:"",goodsId:[],type:"1",city_distribution_type:"0",express_name:"其他快递"},disabled:!1,data:{},message:"",express:[],rules:{express_id:[{required:!0,message:"快递公司必填"}],express_code:[{required:!0,message:"快递单号必填"}],city_distribution_type:[{required:!0,message:"配送方式必选"}],express_name:[{required:!0,message:"自定义名称必填"}]},loading:!1}},computed:{intracityCanUse:function(){return console.log("order:",this.order),console.log("data:",this.data),"0"===this.order.city_distribution_type&&this.data.dispatch&&1===this.data.dispatch.merchant||"1"===this.order.city_distribution_type&&this.data.dispatch&&1===this.data.dispatch.dada}},methods:{setValue:function(){this.value=!this.value,this.value&&(this.resetModel(),this.getData())},jumpSamecity:function(){this.$utils.openNewWindowPage("/order/same-city-delivery")},handleCancel:function(){this.setValue()},handleOk:function(){var e=this;this.message?this.$Message.error(this.message):this.$refs["form"].validate((function(t){if(t){var a,r={};if("1"===e.order.type){var s=e.data.order_goods.map((function(e){return e.id}));if(r={more_package:"0",order_id:e.id,no_express:"30"===e.dispatch_type?"1":"0",express_id:e.order.express_id,express_sn:e.order.express_code,order_goods_id:s},96==e.order.express_id?r.express_name=e.order.express_name:delete r.express_name,"30"===e.dispatch_type){if(!e.intracityCanUse)return void e.$Message.error("配送方式不可用");r["city_distribution_type"]=e.order.city_distribution_type}a="订单发货成功"}else if("0"===e.order.type){var i,n=e.data.order_goods.filter((function(e){return 1===e.can_send})),o=n.map((function(e){return e.id}));if(r={more_package:"1",order_id:e.id,no_express:"30"===e.dispatch_type?"1":"0",order_goods_id:"30"===e.dispatch_type?o:e.order.goodsId,express_id:e.order.express_id,express_sn:e.order.express_code,express_name:e.order.express_name},96!=e.order.express_id&&delete r.express_name,null===(i=r.order_goods_id)||void 0===i||!i.length){var d="";return d="30"===e.dispatch_type?"没有可发送的包裹":"请选择要发货的包裹",void e.$Message.error(d)}a="分包裹发货成功"}e.loading=!0,e.$api.orderApi.setSendGoods(r).then((function(t){0===t.error&&(e.$Message.success(a),e.setValue(),e.$emit("on-refresh"))})).finally((function(){e.loading=!1}))}}))},changeSendGoods:function(e){var t=this.order.goodsId.indexOf(e),a=this.order.goodsId?this.order.goodsId:[];t>-1?a.splice(t,1):a.push(e),this.order.goodsId=a,this.initGoodsData()},initGoodsData:function(){var e=this;this.data.order_goods.forEach((function(t,a){e.order.goodsId.indexOf(t.id)>-1?e.$set(e.data.order_goods[a],"checked",!0):e.$set(e.data.order_goods[a],"checked",!1)}))},getData:function(){var e=this;this.loading=!0,this.$api.orderApi.getSendGoods({order_id:this.id}).then((function(t){e.loading=!1,0===t.error?(e.message="",e.express=t.express,e.$nextTick((function(){e.data=t})),t.order_goods.length<=1?e.disabled=!0:(e.disabled=!1,t.order_goods.forEach((function(t){"11"!==t.status&&"1"==t.can_send||(e.disabled=!0,e.order.type="0")})))):e.message=t.message}))},resetModel:function(){this.order={express_code:"",express_id:"",goodsId:[],type:"1",city_distribution_type:"0",express_name:"其他快递"},this.express=[],this.disabled=!1}}};t.default=n},da4d:function(e,t,a){var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3"),a("a434"),a("d3b7"),a("159b");var s=r(a("839a")),i={name:"index",components:{SelectTableList:s.default},props:{id:{type:[String,Number],required:!0}},data:function(){return{model:{reason:"",goodsId:[]},value:!1,data:{}}},methods:{setValue:function(){this.value=!this.value,this.value&&(this.reset(),this.getData())},handleCancel:function(){this.setValue()},handleOk:function(){var e=this;if(0!==this.model.goodsId.length){var t={package_id:this.model.goodsId,reason:this.model.reason,order_id:this.id};this.$api.orderApi.setCancelSendGoods(t).then((function(t){0===t.error&&(e.$Message.success("取消发货成功"),e.setValue(),e.$emit("on-refresh"))}))}else this.$Message.error("请选择要取消发货的包裹")},selectChange:function(e,t){var a=this.model.goodsId.indexOf(t.id);a>-1?this.model.goodsId.splice(a,1):this.model.goodsId.push(t.id),this.initGoodsData()},initGoodsData:function(){var e=this;this.data.packages.forEach((function(t,a){e.model.goodsId.indexOf(t.id)>-1?e.$set(e.data.packages[a],"checked",!0):e.$set(e.data.packages[a],"checked",!1)}))},getData:function(){var e=this;this.$api.orderApi.getSendPackage({order_id:this.id}).then((function(t){0===t.error&&(e.data=t)}))},reset:function(){this.model={reason:"",goodsId:[]}}}};t.default=i},e0fc:function(e,t,a){"use strict";a("f4ee")},ea68:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-modal-frame",{attrs:{title:"订单改价",width:1e3},on:{"on-cancel":e.handleCancel,"on-ok":e.handleOk},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("div",{staticClass:"order-list-change-price"},[a("div",{staticClass:"header"},[a("kdx-hint-alert",{attrs:{type:"error"}},[e._v("该订单最多支持 "),a("span",{staticClass:"bold"},[e._v("10")]),e._v(" 次改价，您已经修改了 "),a("span",{staticClass:"bold"},[e._v(e._s(e.data.change_price_count))]),e._v(" 次，改价之后的价格不能小于0元")]),a("div",{staticClass:"btn"},[a("Button",{attrs:{type:"text",to:"/order/change-price-record?id="+e.id,target:"_blank"}},[e._v("查看改价记录")])],1)],1),a("div",{staticClass:"freight"},[a("Form",{attrs:{"label-width":80}},[a("FormItem",{attrs:{label:"修改运费："}},[a("kdx-rr-input",{staticClass:"width-160",attrs:{number:"",fixed:2,minValue:0,maxValue:9999999.99,disabled:!e.goodsType},on:{"on-blur":e.changeFreight},model:{value:e.data.dispatch_price,callback:function(t){e.$set(e.data,"dispatch_price",t)},expression:"data.dispatch_price"}},[a("span",{attrs:{slot:"append"},slot:"append"},[e._v("元")])])],1)],1)],1),a("div",{staticClass:"change-price-list"},[a("change-price-list",{attrs:{data:e.data.order_goods},on:{"on-change":e.changePrice,"on-type-change":e.changeTypePrice}})],1),a("div",{staticClass:"shop-total"},[a("div",{staticClass:"shop-total-content"},[a("div",{staticClass:"shop-total-content-item"},[a("div",{staticClass:"label"},[e._v(" 商品合计 "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.totalChange,expression:"totalChange"}],staticClass:"change-price-tag"},[e._v("改")]),e._v(" ： ")]),a("div",{staticClass:"price"},[e._v(" ￥"+e._s(e.data.total_price)+" ")])]),e.goodsType?a("div",{staticClass:"shop-total-content-item"},[a("div",{staticClass:"label"},[e._v(" 运费 "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.dispatchChange,expression:"dispatchChange"}],staticClass:"change-price-tag"},[e._v("改")]),e._v(" ： ")]),a("div",{staticClass:"price"},[e._v(" ￥"+e._s(e.data.dispatch_price)+" ")])]):e._e(),a("div",{staticClass:"shop-total-content-item emphasize"},[a("div",{staticClass:"label"},[e._v(" 买家实付： ")]),a("div",{staticClass:"price"},[e._v(" ￥"+e._s(e.data.pay_price)+" ")])])])])])])},s=[]},efca:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-modal-frame",{attrs:{title:"取消发货",width:700,"class-name":"cancel-send-goods"},on:{"on-cancel":e.handleCancel,"on-ok":e.handleOk},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("kdx-hint-alert",{staticClass:"marginB-10",attrs:{"show-icon":!1,type:"info"}},[e._v("选择需要取消发货的包裹")]),a("div",{staticClass:"table-list"},[a("select-table-list",{attrs:{data:e.data.packages,multiple:!0},on:{"on-change":e.selectChange}})],1),a("div",{staticClass:"remark"},[a("Input",{attrs:{type:"textarea",placeholder:"请输入取消原因"},model:{value:e.model.reason,callback:function(t){e.$set(e.model,"reason",t)},expression:"model.reason"}})],1)],1)},s=[]},f0d4:function(e,t,a){"use strict";a.r(t);var r=a("efca"),s=a("5e58");for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);a("3b9b");var n=a("2877"),o=Object(n["a"])(s["default"],r["a"],r["b"],!1,null,null,null);t["default"]=o.exports},f4d2:function(e,t,a){},f4ee:function(e,t,a){},fb048:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"send-goods-list"},[a("Table",{attrs:{columns:e.columns,data:e.data}})],1)},s=[]}}]);