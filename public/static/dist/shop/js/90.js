(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[90],{"0659":function(t,e,a){"use strict";a.r(e);var s=a("f859"),i=a("6da0");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("a308");var n=a("2877"),r=Object(n["a"])(i["default"],s["a"],s["b"],!1,null,"535a0aa6",null);e["default"]=r.exports},"2e1d":function(t,e,a){var s=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(a("2909")),o=s(a("5530")),n=s(a("b85c"));a("a9e3"),a("a434"),a("4de4"),a("d3b7"),a("159b"),a("ac1f"),a("841c");var r={name:"goodsSelector",props:{current:{type:[String,Object],default:function(){}},currentList:{type:Array,default:function(){return[]}},value:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},limit:{type:Number},isStore:{type:Boolean,default:!1},params:{type:Object,default:function(){}},type:{type:String,default:""},flag:{type:String,default:""},status:{type:Number,default:5},show_activity:{type:[Number],default:0},is_shopping_reward:{type:[Number],default:0}},computed:{columns:function(){var t=this,e=(this.$createElement,[{title:"商品",key:"shop",minWidth:450,render:function(e,a){var s;switch(a.row.type){case"0":s={goodsText:"实"};break;case"1":s={goodsText:"虚"};break;case"2":s={goodsText:"密"};break;case"3":s={goodsText:"预"};break}return e("div",{class:{"shop-box":!0}},[e("div",{class:{image:!0}},[e("img",{attrs:{src:t.$media(a.row.thumb)},on:{error:function(e){t.replaceImage(e)}}})]),e("div",{class:{content:!0}},[e("div",{class:{"content-text":!0}},[e("span",{class:{mark:!0},style:{display:"1"===a.row.has_option?"inline-block":"none"}},"多"),e("span",{class:{mark:!0,real:"0"===a.row.type,virtual:"1"===a.row.type,secret:"2"===a.row.type}},s.goodsText),e("span",{class:{text:!0}},a.row.title)])])])}},{title:"价格",key:"price",minWidth:60,render:function(t,e){return"1"===e.row.has_option?t("div",{class:"price"},[t("span",["￥",e.row.min_price," ~ ￥",e.row.max_price])]):t("div",{class:"price"},[t("span",["￥",e.row[e.column.key]])])}},{title:"库存",key:"stock",width:60,render:function(t,e){var a=parseInt(e.row[e.column.key]);return"3"==e.row.type?t("div","-"):t("div",a||0===a?a<=999?a:"999+":"-")}},{title:"操作",key:"action",width:80,render:function(e,a){return e("div",{class:"action"},[e("Button",{class:"default-primary",attrs:{disabled:1===a.row.is_select},style:{display:a.row.checked?"none":"block"},on:{click:function(){t.setChecked(a.index,!0)}}},["选择"]),e("Button",{attrs:{type:"primary"},style:{display:a.row.checked?"block":"none"},on:{click:function(){t.setChecked(a.index,!1)}}},["已选"])])}}]);return this.show_activity&&e.splice(-1,0,{title:"营销活动",key:"is_activity_goods",width:130,render:function(e,a){return e("div",{class:1===a.row.is_activity_goods?"brand-color pointer":"pointer",on:{click:function(){t.viewActivity(a.row)}}},[1===a.row.is_activity_goods?"查看参与的活动":"未参与活动"])}}),e}},data:function(){var t=this.$createElement;return{search:{keywords:"",group:""},goodsGroup:[],page:{pageSize:10,pageNumber:1},selectRows:[],selectRow:{},table:{data:[],loading:!1,total:0},activity:{show:!1,columns:[{title:"活动名称",key:"title"},{title:"活动状态",key:"status",slot:"status"},{title:"活动时间",key:"time",slot:"date"},{title:"活动类型",key:"type_text"},{title:"活动来源",key:"sub_shop_id",render:function(){return t("div",["平台"])}}],data:[]}}},created:function(){this.activity.columns=this.activity.columns.filter((function(t){return"sub_shop_id"!==t.key}))},methods:{handleSearch:function(){this.resetPage(),this.getShopList()},resetPage:function(){var t;this.page={pageSize:10,pageNumber:1},null===(t=this.$refs["page"])||void 0===t||t.reset()},handlePageChange:function(t){this.page=t,this.getShopList();try{this.$refs.scrollBox.scrollTop=0}catch(e){console.log(e)}},setChecked:function(t,e){var a=this;if(this.multiple){if(this.limit&&this.selectRows.length===this.limit&&e)return void this.$Message.error("已超出最大可选数量");this.$set(this.table.data[t],"checked",e),0===this.selectRows.length||e?this.selectRows.push(this.table.data[t]):this.selectRows=this.selectRows.filter((function(e){return e.id!==a.table.data[t].id}))}else e?(this.table.data.forEach((function(t,e){a.$set(a.table.data[e],"checked",!1)})),this.$set(this.table.data[t],"checked",!0),this.selectRow=this.table.data[t]):(this.$set(this.table.data[t],"checked",!1),this.selectRow={})},defaultChecked:function(){var t,e=this,a=this.isStore?"broadcast_goods_id":"id",s=this.isStore?"broadcast_goods_id":"id";this.multiple?this.table.data.forEach((function(t,i){var o,r=(0,n.default)(e.selectRows);try{for(r.s();!(o=r.n()).done;){var c=o.value;if(c[s]===t[a]){e.$set(e.table.data[i],"checked",!0);break}}}catch(l){r.e(l)}finally{r.f()}})):null===(t=this.table.data)||void 0===t||t.forEach((function(t,i){e.selectRow&&t[a]===e.selectRow[s]?e.$set(e.table.data[i],"checked",!0):e.$set(e.table.data[i],"checked",!1)}))},getShopList:function(){var t=this;if(this.isStore)this.getGoodsStore();else{this.table.loading=!0;var e=Object.assign((0,o.default)({page:this.page.pageNumber,pagesize:this.page.pageSize,status:-1===this.status?"":this.status,type:this.type,flag:this.flag,show_activity:this.show_activity,is_shopping_reward:this.is_shopping_reward},this.params),this.search);this.$api.goodsApi.goodsList(e).then((function(e){t.table.loading=!1,0===e.error&&(t.table.data=e.list,t.table.total=e.total,t.defaultChecked())})).catch()}},getGoodsStore:function(){var t=this;this.table.loading=!0;var e=Object.assign({page:this.page.pageNumber,pagesize:this.page.pageSize,bro_goods_status:2},{title:this.search.keywords});this.$api.liverApi.getGoodsStore(e).then((function(e){t.table.loading=!1,0===e.error&&(t.table.data=e.list,t.table.total=e.total,t.defaultChecked())})).catch()},goodGroupList:function(){var t=this;this.$api.goodsApi.goodGroupList({pager:0}).then((function(e){0===e.error?t.goodsGroup=e.list:t.$Message.error("商品组获取失败")}))},handleSave:function(){this.multiple?this.$emit("on-change",this.selectRows):this.$emit("on-change",this.selectRow),this.handleCancel()},handleCancel:function(){this.$emit("on-cancel"),this.activity.show=!1},resetSearch:function(){this.search={keywords:"",group:""}},viewActivity:function(t){console.log(t,"data>>>>>>>>viewActivity"),t.is_activity_goods&&(this.activity.show=!0,this.activity.data=t.join_activity)},getTime:function(t){return"0000-00-00 00:00:00"===t?"-":t}},watch:{value:{handler:function(t){t&&(this.multiple?this.selectRows=(0,i.default)(this.currentList)||[]:this.selectRow=this.current,this.resetSearch(),this.resetPage(),this.getShopList())},immediate:!0}}};e.default=r},"668e":function(t,e,a){"use strict";a.r(e);var s=a("ba00"),i=a.n(s);for(var o in s)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(o);e["default"]=i.a},"6da0":function(t,e,a){"use strict";a.r(e);var s=a("2e1d"),i=a.n(s);for(var o in s)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(o);e["default"]=i.a},"72ea":function(t,e,a){"use strict";a("f9e7")},"91b4":function(t,e,a){"use strict";a.r(e);var s=a("f6f2"),i=a("668e");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("72ea");var n=a("2877"),r=Object(n["a"])(i["default"],s["a"],s["b"],!1,null,"1e7c19ab",null);e["default"]=r.exports},a308:function(t,e,a){"use strict";a("c792")},ba00:function(t,e,a){var s=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d81d"),a("a434"),a("fb6a");var i=s(a("0659")),o={name:"index",components:{GoodsSelector:i.default},data:function(){var t=this;this.$createElement;return{model:{name:"",status:1,goods_id:[]},rules:{name:[{required:!0,message:"商品组名称必填"}],goods_id:[{required:!0,type:"array",min:1,message:"商品必选"}]},shop:{columns:[{title:"商品",key:"shop",minWidth:200,render:function(e,a){var s;switch(a.row.type){case"0":s={goodsText:"实"};break;case"1":s={goodsText:"虚"};break;case"2":s={goodsText:"密"};break;case"3":s={goodsText:"预"};break}return e("div",{class:{"shop-box":!0}},[e("div",{class:{image:!0}},[e("img",{attrs:{src:t.$media(a.row.thumb)},on:{error:function(e){t.replaceImage(e)}}})]),e("div",{class:{content:!0}},[e("div",{class:{"content-text":!0}},[e("span",{class:{mark:!0},style:{display:"1"===a.row.has_option?"inline-block":"none"}},"多"),e("span",{class:{mark:!0,real:"0"===a.row.type,virtual:"1"===a.row.type,secret:"2"===a.row.type}},s.goodsText),e("span",{class:{text:!0}},a.row.title)])])])}},{title:"价格",key:"price",minWidth:80,render:function(t,e){return"1"===e.row.has_option?t("div",{class:"price"},[t("span",["￥",e.row.min_price," ~ ￥",e.row.max_price])]):t("div",{class:"price"},[t("span",["￥",e.row[e.column.key]])])}},{title:"库存",key:"stock",minWidth:80,render:function(t,e){var a=e.row[e.column.key];return t("div",{class:"inventory"},[t("span",[a])])}},{title:"操作",key:"action",width:100,render:function(e,a){return e("div",{class:{action:!0}},[e("Button",{props:{type:"text"},on:{click:function(){t.deleteShop(a.index,a.row)}}},"删除")])}}],data:[],total:0},selector:{value:!1,data:[]},page:{pageSize:10,pageNumber:1},id:0,loading:!1,type:"新增商品组"}},methods:{getData:function(){var t=this;this.$api.goodsApi.getGoodGroup({id:this.id}).then((function(e){0===e.error&&(t.model=e.data,t.selector.data=e.data.goods||[],delete t.model.goods,t.model.goods_id=t.selector.data.map((function(t){return t.id})),t.getPageShopData())})).catch()},selectorChange:function(t){this.selector.data=t,this.model.goods_id=t.map((function(t){return t.id})),this.resetPage(),this.getPageShopData(),this.selectorCancel(),console.log(this.shop.data)},selectorCancel:function(){this.selector.value=!1},addShop:function(){this.selector.value=!0},deleteShop:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"确认删除该商品？",onOk:function(){var a=(e.page.pageNumber-1)*e.page.pageSize+t;e.selector.data.splice(a,1),e.model.goods_id.splice(a,1),e.resetPage(),e.getPageShopData()},onCancel:function(){}})},handlePageChange:function(t){this.page=t,this.getPageShopData()},resetPage:function(){this.page.pageSize=10,this.page.pageNumber=1,this.$refs["page"].reset()},getPageShopData:function(){this.shop.total=this.selector.data.length;var t=this.page.pageSize*(this.page.pageNumber-1),e=this.page.pageSize*this.page.pageNumber;this.shop.data=this.selector.data.slice(t,e)},handleSave:function(){var t=this;this.$refs["form"].validate((function(e){e&&(t.id?t.editGoodGroup():t.addGoodGroup())}))},addGoodGroup:function(){var t=this;this.loading=!0,this.$api.goodsApi.addGoodGroup(this.model).then((function(e){t.loading=!1,0===e.error&&(t.$Message.success("商品组新增成功"),t.$router.go(-1))}))},editGoodGroup:function(){var t=this;this.loading=!0;var e=Object.assign({},this.model,{id:this.id});this.$api.goodsApi.editGoodGroup(e).then((function(e){t.loading=!1,0===e.error&&(t.$Message.success("商品组修改成功"),t.$router.go(-1))}))},init:function(){this.id=this.$route.query.id||0,this.id?(this.getData(),this.type="修改商品组"):(this.model={name:"",status:1,goods_id:[]},this.shop.data=[],this.type="新增商品组")},goBack:function(){this.$router.go(-1)}},mounted:function(){this.init()}};e.default=o},c792:function(t,e,a){},f6f2:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-content-bar",{scopedSlots:t._u([{key:"btn",fn:function(){return[a("Button",{staticClass:"primary-long",on:{click:t.handleSave}},[t._v("保存")]),a("Button",{staticClass:"default-long",on:{click:t.goBack}},[t._v("返回列表")])]},proxy:!0}])},[a("div",{staticClass:"good-group-add"},[a("div",{staticClass:"add-group-content"},[a("kdx-form-title",[t._v(t._s(t.type))]),a("Form",{ref:"form",attrs:{model:t.model,rules:t.rules,"label-width":120}},[a("FormItem",{attrs:{label:"名称：",prop:"name"}},[a("Input",{staticClass:"width-160",attrs:{type:"text",placeholder:"请输入商品组名称"},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"状态："}},[a("RadioGroup",{model:{value:t.model.status,callback:function(e){t.$set(t.model,"status",e)},expression:"model.status"}},[a("Radio",{attrs:{label:1}},[t._v("启用")]),a("Radio",{attrs:{label:0}},[t._v("禁用")])],1)],1),a("FormItem",{attrs:{label:"组内商品：",prop:"goods_id"}},[a("div",[a("Button",{staticClass:"default-primary",on:{click:t.addShop}},[t._v("+添加")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.shop.data&&t.shop.data.length>0,expression:"shop.data && shop.data.length > 0"}],staticClass:"goods-box"},[a("div",{staticClass:"goods-table"},[a("Table",{ref:"table",attrs:{columns:t.shop.columns,data:t.shop.data}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.shop.total>10,expression:"shop.total > 10"}],staticClass:"footer-page"},[a("kdx-page-component",{ref:"page",attrs:{total:t.shop.total},on:{"on-change":t.handlePageChange}})],1)])])],1)],1)]),a("goods-selector",{attrs:{multiple:!0,"current-list":t.selector.data},on:{"on-change":t.selectorChange,"on-cancel":t.selectorCancel},model:{value:t.selector.value,callback:function(e){t.$set(t.selector,"value",e)},expression:"selector.value"}})],1)},i=[]},f859:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-modal-frame",{attrs:{value:t.value,title:"商品选择器",width:"1000","ok-text":"保存"},on:{"on-ok":t.handleSave,"on-cancel":t.handleCancel},scopedSlots:t._u([{key:"footer",fn:function(){return[t.activity.show?a("div",{staticClass:"btn-group"},[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.activity.show=!1}}},[t._v("返回选择商品")])],1):t._e()]},proxy:!0}])},[a("div",{staticClass:"goods-preview"},[a("div",{ref:"scrollBox",staticClass:"goods-preview-content"},[t.activity.show?t._e():a("div",{staticClass:"search"},[a("Input",{staticClass:"width-250",attrs:{search:"","enter-button":"搜索",placeholder:"请输入"},on:{"on-search":t.handleSearch,"on-enter":t.handleSearch},model:{value:t.search.keywords,callback:function(e){t.$set(t.search,"keywords",e)},expression:"search.keywords"}})],1),t.activity.show?t._e():a("Table",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],ref:"table",attrs:{columns:t.columns,data:t.table.data}}),t.activity.show?a("Table",{ref:"activityTable",attrs:{columns:t.activity.columns,data:t.activity.data},scopedSlots:t._u([{key:"status",fn:function(e){var s=e.row;return[1===+s.status?a("kdx-status-text",{attrs:{type:"success"}},[t._v("进行中")]):t._e(),-1===+s.status?a("kdx-status-text",{attrs:{type:"danger"}},[t._v("已停止")]):t._e(),-2===+s.status?a("kdx-status-text",{attrs:{type:"danger"}},[t._v("手动停止")]):t._e(),0===+s.status?a("kdx-status-text",{attrs:{type:"warning"}},[t._v("未开始")]):t._e()]}},{key:"date",fn:function(e){var s=e.row;return[a("div",{staticClass:"time"},[t._v("起："+t._s(t.getTime(s.start_time)))]),a("div",{staticClass:"time"},[t._v("止："+t._s(t.getTime(s.end_time)))])]}}],null,!1,940490386)}):t._e()],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.table.total>10&&!t.activity.show,expression:"table.total > 10&&!activity.show"}],staticClass:"footer-page"},[a("kdx-page-component",{ref:"page",attrs:{total:t.table.total},on:{"on-change":t.handlePageChange}})],1)])])},i=[]},f9e7:function(t,e,a){}}]);