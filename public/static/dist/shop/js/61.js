(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[61],{"085d":function(e,t,a){"use strict";a.r(t);var n=a("face"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},"08c7d":function(e,t,a){"use strict";a.r(t);var n=a("167e"),i=a("3300");for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("9d3b");var r=a("2877"),l=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"35e9f137",null);t["default"]=l.exports},"0ddb":function(e,t,a){var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d3b7"),a("159b"),a("e9c4"),a("b0c0");var i=n(a("b85c")),s=n(a("5530")),r=n(a("08c7d")),l=a("2f62"),o={name:"index",components:{TreeTable:r.default},inject:["returnToTop"],computed:(0,s.default)((0,s.default)({},(0,l.mapState)("createGoodClassification",{list:function(e){return e.list}})),{},{noManagePerm:function(){return!this.$getPermMap("goods.category.manage")},expand:function(){var e=!1;return this.list.forEach((function(t){t.expand&&(e=!0),t.children&&t.children.length>0&&t.children.forEach((function(t){t.expand&&(e=!0)}))})),e}}),data:function(){return{loading:!1}},methods:(0,s.default)((0,s.default)({},(0,l.mapMutations)("createGoodClassification",["setList","refreshList","setExpandAll","setLevel","addFirstClassify"])),{},{handleSave:function(){var e=this,t=this.validate(this.list);t?this.$Message.error("请填写完整的分类名称和分类图片"):(this.loading=!0,this.formatData(this.list),this.$api.goodsApi.daveGoodClassify({data:JSON.stringify(d(JSON.parse(JSON.stringify(this.list))))}).then((function(t){e.loading=!1,0===t.error&&(e.$Message.success("保存成功"),e.handleRefresh())})).catch())},expandAll:function(){this.setExpandAll(!this.expand)},handleRefresh:function(){var e=this;this.returnToTop(),this.loading=!0,this.$api.goodsApi.goodClassifyList({}).then((function(t){e.loading=!1,0===t.error&&(e.setLevel(t.level||"0"),e.setList(t.list),e.setExpandAll(!0))})).catch()},validate:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.$store.state.createGoodClassification.level,s=(0,i.default)(this.list);try{for(s.s();!(t=s.n()).done;){var r=t.value;if(a)break;if(!r.name||!r.thumb){a=!0;break}if("0"!==n&&r.children&&r.children.length>0){var l,o=(0,i.default)(r.children);try{for(o.s();!(l=o.n()).done;){var d=l.value;if(a)break;if(!d.name||!d.thumb){a=!0;break}if("2"===n&&d.children&&d.children.length>0){var c,u=(0,i.default)(d.children);try{for(u.s();!(c=u.n()).done;){var f=c.value;if(!f.name||!f.thumb){a=!0;break}}}catch(h){u.e(h)}finally{u.f()}}}}catch(h){o.e(h)}finally{o.f()}}}}catch(h){s.e(h)}finally{s.f()}return a},formatData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.forEach((function(t){-1!==t.id.indexOf("cus_")&&(t.id="",t.status="1"),t.children&&t.children.length>0&&e.formatData(t.children)}))}}),mounted:function(){this.handleRefresh()}};function d(e){return e.forEach((function(e){e.children&&(0===e.children.length?delete e.children:e.children.length>0&&d(e.children))})),e}t.default=o},"127a":function(e,t,a){var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("5530"));a("d3b7"),a("3ca3"),a("ddb0"),a("159b"),a("a434");var s=n(a("7177")),r=n(a("5fa5")),l=n(a("344b")),o=a("2f62"),d={name:"TreeTable",components:{ImageSelector:s.default,DragSortList:r.default,DragSortItem1:l.default,DragSortItem2:function(){return a.e(142).then(a.bind(null,"aaf9"))},DragSortItem3:function(){return a.e(143).then(a.bind(null,"b308"))}},computed:(0,i.default)({list:{get:function(){var e=this.$store.state.createGoodClassification.list;return e},set:function(e){this.setList(e)}}},(0,o.mapState)("createGoodClassification",{level:function(e){return e.level}})),data:function(){return{model:{},currentItem:{thumb:""}}},methods:(0,i.default)((0,i.default)({},(0,o.mapMutations)("createGoodClassification",["setList","refreshList","addFirstClassify","setLevel"])),{},{handler:function(e,t){var a=this,n=t.event,i=t.params;switch(n){case"setExpand":i.expand=!i.expand,this.refreshList();break;case"addTwoChild":case"addThreeChild":this.addChild(i);break;case"deleteImage":i.thumb="",this.refreshList();break;case"addImage":this.currentItem=i,this.$nextTick((function(){a.$refs["image_selector"].setValue()}));break;case"setIsShow":this.setIsShow(i);break;case"handleDelete":this.handleDelete(e,i);break}},changeSelector:function(e){this.currentItem.thumb=e,this.refreshList()},addChild:function(e){e.expand=!0,e.children?e.children.push({id:"cus_".concat(Date.now()),name:"",thumb:"",time:"",status:"1"}):e.children=[{id:"cus_".concat(Date.now()),name:"",thumb:"",time:"",status:"1"}],this.refreshList()},setIsShow:function(e){var t=this;this.$api.goodsApi.editGoodClassifyStatus({id:e.id}).then((function(a){0===a.error&&(t.$Message.success("商品分类状态修改成功"),e.status="0"==e.status?"1":"0",t.refreshList())}))},delClass:function(e,t){var a=-1;e.forEach((function(e,n){e===t&&(a=n)})),e.splice(a,1),this.refreshList()},handleDelete:function(e,t){var a=this;this.$Modal.confirm({title:"提示",content:"确认删除该商品分类?",onOk:function(){var n;-1===(null===t||void 0===t||null===(n=t.id)||void 0===n?void 0:n.indexOf("cus_"))?a.$api.goodsApi.deleteGoodClassify({id:t.id}).then((function(n){"0"==n.error&&(a.$Message.success("商品分类删除成功"),a.delClass(e,t))})):(a.$Message.success("商品分类删除成功"),a.delClass(e,t))},onCancel:function(){}})},getDataList:function(){this.$emit("on-refresh")}})};t.default=d},"167e":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"good-classification-tree-table"},[e._m(0),a("div",{ref:"draggle",staticClass:"tree-table-box"},[e.list.length>0?a("div",[a("DragSortList",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.data;return[a("DragSortItem1",{on:{handler:function(t){return e.handler(e.list,t)}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.data;return["0"!=e.level?a("DragSortList",{scopedSlots:e._u([{key:"default",fn:function(t){var i=t.data;return[a("DragSortItem2",{on:{handler:function(t){return e.handler(n,t)}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.data;return["2"==e.level?a("DragSortList",{scopedSlots:e._u([{key:"default",fn:function(t){var i=t.data;return[a("DragSortItem3",{on:{handler:function(t){return e.handler(n,t)}},model:{value:i,callback:function(e){i=e},expression:"item"}})]}}],null,!0),model:{value:n,callback:function(e){n=e},expression:"items"}}):e._e()]}}],null,!0),model:{value:i,callback:function(e){i=e},expression:"itemChildren"}})]}}],null,!0),model:{value:n,callback:function(e){n=e},expression:"children"}}):e._e()]}}],null,!0),model:{value:n,callback:function(e){n=e},expression:"data"}})]}}],null,!1,2421518540),model:{value:e.list,callback:function(t){e.list=t},expression:"list"}})],1):a("div",[a("div",{staticStyle:{"text-align":"center"}},[e._v(" 暂无数据 ")])])]),a("image-selector",{ref:"image_selector",attrs:{current:e.currentItem.thumb},on:{"on-change":e.changeSelector}})],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticClass:"name"},[e._v(" 分类名称 ")]),a("div",{staticClass:"image"},[e._v(" 分类图片 ")]),a("div",{staticClass:"add-time"},[e._v(" 添加时间 ")]),a("div",{staticClass:"status"},[e._v(" 状态 ")]),a("div",{staticClass:"action"},[e._v(" 操作 ")])])}]},2161:function(e,t,a){var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("5530")),s=a("2f62"),r={computed:(0,i.default)({noManagePerm:function(){return!this.$getPermMap("goods.category.manage")}},(0,s.mapState)("createGoodClassification",{level:function(e){return e.level}})),props:{value:{type:Object,default:function(){return{}}}},methods:{handlers:function(e,t){"setAdvs"!=e?this.$emit("handler",{event:e,params:this.value}):this.$router.push({path:"/goods/classify/setting-ad",query:{id:t}})}}};t.default=r},3150:function(e,t,a){"use strict";a.r(t);var n=a("6827"),i=a("8432");for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("bf3d");var r=a("2877"),l=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"773b4acd",null);t["default"]=l.exports},3300:function(e,t,a){"use strict";a.r(t);var n=a("127a"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},"344b":function(e,t,a){"use strict";a.r(t);var n=a("ffd0"),i=a("b6f5");for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("43fb");var r=a("2877"),l=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"a75c71a6",null);t["default"]=l.exports},4075:function(e,t,a){},"43fb":function(e,t,a){"use strict";a("a270")},"5fa5":function(e,t,a){"use strict";a.r(t);var n=a("84ee"),i=a("085d");for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("d2d6");var r=a("2877"),l=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"11d204a6",null);t["default"]=l.exports},"607db":function(e,t,a){},6827:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[a("div",{staticClass:"btn-bottom"},[a("Button",{staticClass:"primary-long",attrs:{disabled:e.noManagePerm},on:{click:e.handleSave}},[e._v("保存")])],1)]},proxy:!0}])},[a("div",{staticClass:"good-classification"},[a("div",{staticClass:"header"},[a("Button",{attrs:{type:"primary",disabled:e.noManagePerm},on:{click:e.addFirstClassify}},[e._v("+添加一级分类")]),a("Button",{class:{"default-primary":!e.noManagePerm},attrs:{disabled:e.noManagePerm,to:"/goods/classify/setting-level"}},[e._v("设置分类层级")]),a("Button",{directives:[{name:"show",rawName:"v-show",value:"0"!==e.$store.state.createGoodClassification.level,expression:"$store.state.createGoodClassification.level!=='0'"}],staticClass:"default-primary",attrs:{icon:e.expand?"ios-arrow-up":"ios-arrow-down"},on:{click:e.expandAll}},[e._v(" "+e._s(e.expand?"全部折叠":"全部展开")+" ")])],1),a("div",{staticClass:"header-space"}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"content"},[a("tree-table",{ref:"tree_table",on:{"on-refresh":e.handleRefresh}})],1)])])},i=[]},8094:function(e,t,a){},8432:function(e,t,a){"use strict";a.r(t);var n=a("0ddb"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},"84ee":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grag-sort-list"},[a("div",{ref:"draggle"},e._l(e.value,(function(t){return a("div",{key:t.id},[a("div",{staticClass:"drag-item"},[e._t("default",null,{data:t})],2)])})),0)])},i=[]},"9d3b":function(e,t,a){"use strict";a("607db")},a270:function(e,t,a){},b6f5:function(e,t,a){"use strict";a.r(t);var n=a("2161"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},bf3d:function(e,t,a){"use strict";a("8094")},d2d6:function(e,t,a){"use strict";a("4075")},face:function(e,t,a){var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a434"),a("d3b7"),a("159b");var i=n(a("aa47")),s={components:{},props:{value:{type:Array,default:function(){return[]}}},watch:{value:{immediate:!0,handler:function(){this.value.length&&this.initSortable()}}},methods:{initSortable:function(){var e=this;this.$nextTick((function(){var t=e.$refs["draggle"];new i.default(t,{handle:".icon",dataIdAttr:"one",onEnd:e.endSortable,animation:150,ghostClass:"blue-background-class"})}))},endSortable:function(e){var t=this.value[e.oldIndex];this.value.splice(e.oldIndex,1),this.value.splice(e.newIndex,0,t),this.value.forEach((function(e,t){e.sort_by=t})),this.$emit("input",this.value)}}};t.default=s},ffd0:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tree-table",staticStyle:{"border-bottom":"none"}},[a("div",{staticClass:"content content-bg-one"},[a("div",{staticClass:"icon"},[a("Icon",{attrs:{type:"md-menu"}})],1),a("div",{staticClass:"tree"},[a("div",{staticClass:"content",staticStyle:{"border-bottom":"none"}},["0"!==e.level&&e.value.children&&e.value.children.length>0?a("div",{staticClass:"icon-box"},[a("span",{class:{"iconfont icon-full-down":e.value.expand,"iconfont icon-full-right":!e.value.expand},on:{click:function(t){return e.handlers("setExpand")}}})]):a("div",{staticClass:"icon-box"}),a("span",{staticClass:"title"},[e._v("一级")]),a("Input",{staticClass:"width-200",attrs:{disabled:e.noManagePerm,maxlength:"10","show-word-limit":"",placeholder:"请输入分类名称"},model:{value:e.value.name,callback:function(t){e.$set(e.value,"name",t)},expression:"value.name"}}),"0"!==e.level?a("Button",{attrs:{disabled:e.noManagePerm,type:"text"},on:{click:function(t){return e.handlers("addTwoChild")}}},[e._v("+添加二级分类")]):e._e()],1)]),a("div",{staticClass:"image"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.value.thumb,expression:"value.thumb"}],staticClass:"image-content"},[a("img",{attrs:{src:e.$media(e.value.thumb),alt:""},on:{error:e.replaceImage}}),e.noManagePerm?e._e():a("Icon",{staticClass:"close",attrs:{type:"ios-close-circle"},on:{click:function(t){return e.handlers("deleteImage")}}}),e.noManagePerm?e._e():a("div",{staticClass:"single-replace",on:{click:function(t){return e.handlers("addImage")}}},[e._v(" 替换 ")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.value.thumb,expression:"!value.thumb"}],staticClass:"add-image",on:{click:function(t){return e.handlers("addImage")}}},[a("kdx-svg-icon",{staticClass:"icon",attrs:{type:"icon-tianjia"}})],1)]),a("div",{staticClass:"add-time"},[e._v(" "+e._s(e.value.created_at)+" ")]),a("div",{staticClass:"status"},[a("span",{class:{show:1==e.value.status,hide:1!=e.value.status}},[e._v(e._s(1==e.value.status?"显示中":"已隐藏"))])]),a("div",{staticClass:"action"},[e.value.id?[-1==e.value.id.indexOf("cus_")?a("Button",{attrs:{type:"text",disabled:e.noManagePerm},on:{click:function(t){return e.handlers("setIsShow")}}},[e._v(e._s(1==e.value.status?"隐藏":"显示"))]):e._e(),a("Button",{attrs:{type:"text",disabled:e.noManagePerm},on:{click:function(t){return e.handlers("setAdvs",e.value.id)}}},[e._v("广告设置")])]:e._e(),a("Button",{attrs:{type:"text",disabled:e.noManagePerm},on:{click:function(t){return e.handlers("handleDelete")}}},[e._v("删除")])],2)]),e.value.children&&e.value.children.length>0&&e.value.expand?a("div",[e._t("default",null,{data:e.value.children})],2):e._e()])},i=[]}}]);