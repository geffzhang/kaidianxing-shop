(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[68],{"0474":function(e,t,a){},"05a5":function(e,t,a){"use strict";a("09f9")},"09f9":function(e,t,a){},"1b77":function(e,t,a){var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("5530")),l={name:"SearchHeader",components:{},props:{groups:{type:Array,default:function(){return[]}},levels:{type:Array,default:function(){return[]}},group_id:{type:String,default:""},level_id:{type:String,default:""}},data:function(){return{model:{keyword:"",source:"all",level_id:"all",group_id:"all",is_black:"all",registerTime:[]},optionData:{blacklist:[{id:1,name:"是"},{id:0,name:"否"}]}}},computed:{sourceList:function(){var e=[{id:"all",name:"全部"},{id:20,name:"微信公众号"},{id:10,name:"H5"},{id:21,name:"微信小程序"},{id:30,name:"抖音小程序"}];return e}},watch:{groups:{handler:function(e){e&&this.group_id&&(this.model.group_id=this.group_id)}},levels:{handler:function(e){e&&this.level_id&&(this.model.level_id=this.level_id)}}},methods:{handleSearch:function(){delete this.model.export,this.$emit("on-search",this.model)},handleReset:function(e,t){var a=this;for(var i in e)""===e[i]&&delete e[i];this.model=(0,r.default)({keyword:"",source:"all",level_id:"all",group_id:"all",is_black:"all",registerTime:[]},e),this.$emit("refreshTable",this.model,t),this.$refs["form"].resetFields(),this.$nextTick((function(){e&&(a.model=(0,r.default)({keyword:"",source:"all",level_id:"all",group_id:"all",is_black:"all",registerTime:[]},e))}))},handleExport:function(){this.$emit("on-export")},exportMember:function(){this.$emit("export")}}};t.default=l},2992:function(e,t,a){var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("5530"));a("ac1f"),a("841c"),a("4de4"),a("d3b7");var l=i(a("6180")),n=i(a("3b2e")),s=a("d1be"),o=a("8194"),c=a("3b02"),d={name:"index",inject:["returnToTop"],components:{SearchHeader:l.default,TableList:n.default},props:{},data:function(){return{data:[],groups:[],levels:[],page:{pageSize:10,pageNumber:1},search:{registerTime:[],group_id:"",level_id:"",keyword:"",source:"all",is_black:""},loading:!1}},computed:{},created:function(){},mounted:function(){var e=this;this.$history.setRoute(this.$route).getData((function(t){e.search=t.search||{registerTime:[],group_id:"",level_id:"",keyword:"",source:"all",is_black:""},e.page=e.$utils.deepCopy(t.page)||{pageSize:10,pageNumber:1},e.$route.query.group_id&&(e.search.group_id=e.$route.query.group_id),e.$route.query.level_id&&(e.search.level_id=e.$route.query.level_id),e.$nextTick((function(){e.$refs.search.handleReset(e.search,e.page)}))}))},methods:{getList:function(){var e=this;this.returnToTop(),this.loading=!0;var t=(0,r.default)((0,r.default)({},this.search),{},{source:"all"==this.search.source?"":this.search.source,level_id:"all"==this.search.level_id?"":this.search.level_id,group_id:"all"==this.search.group_id?"":this.search.group_id,is_black:"all"==this.search.is_black?"":this.search.is_black,pagesize:this.page.pageSize,page:this.page.pageNumber});2==this.search.registerTime.length&&this.search.registerTime[0]&&this.search.registerTime[1]&&(t.start_time=(0,s.formatDate)(this.search.registerTime[0],"yyyy-MM-dd hh:mm:ss"),t.end_time=(0,s.formatDate)(this.search.registerTime[1],"yyyy-MM-dd hh:mm:ss")),this.$history.setData({search:(0,r.default)((0,r.default)({},this.search),{},{registerTime:[t.start_time,t.end_time].filter((function(e){return e}))}),page:this.page}),delete t.registerTime,this.$api.memberApi.memberList(t).then((function(t){e.loading=!1,0===t.error&&(e.data=t.list,e.groups=t.groups,e.levels=t.levels,e.page.total=t.total)}))},refreshTable:function(e,t){e&&(this.search=e),t&&this.$refs.tabList.reset(t),this.page=(0,r.default)({pageSize:10,pageNumber:1},t),this.getList()},handleSearch:function(e,t){console.log(e,":::::::::::",t),this.search=e,this.refreshTable()},handleExport:function(){var e=(0,r.default)((0,r.default)({export:1},this.search),{},{source:"all"==this.search.source?"":this.search.source,level_id:"all"==this.search.level_id?"":this.search.level_id,group_id:"all"==this.search.group_id?"":this.search.group_id,is_black:"all"==this.search.is_black?"":this.search.is_black,start_time:(0,s.formatDate)(this.search.registerTime[0],"yyyy-MM-dd hh:mm:ss"),end_time:(0,s.formatDate)(this.search.registerTime[1],"yyyy-MM-dd hh:mm:ss")});(0,c.Export)(o.memberApi.memberList.api,e)},changePage:function(e){this.page=e,this.getList()}}};t.default=d},"31e3":function(e,t,a){},"3b02":function(e,t,a){var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.Export=void 0;var r=i(a("5530")),l=a("d8cc"),n=i(a("4328")),s=a("384d"),o=i(a("1cc8")),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(console.log(e,"---------downloadPath"),e){var a="";if(-1===e.indexOf(l.config.base_url)){var i={baseURL:l.config.base_url,url:e};(0,o.default)(i),a=i.baseURL+i.url}else a=e;a=a.indexOf("?")>-1?a:a+"?",t=(0,r.default)((0,r.default)({},t),(0,s.getUserInfo)()),a+="&".concat(n.default.stringify(t)),window.open(a)}};t.Export=c},"3b2e":function(e,t,a){"use strict";a.r(t);var i=a("8e3f"),r=a("bdba");for(var l in r)["default"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(l);a("741e"),a("05a5");var n=a("2877"),s=Object(n["a"])(r["default"],i["a"],i["b"],!1,null,"1439a90a",null);t["default"]=s.exports},4301:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3"),a("d81d"),a("ac1f"),a("1276"),a("d3b7"),a("159b");var i={name:"TableList",props:{list:{type:Array,default:function(){return[]}},total:{type:[String,Number],default:0},groupList:{type:Array,default:function(){return[]}},levelList:{type:Array,default:function(){return[]}}},data:function(){var e=this;this.$createElement;return{data:[],selectRows:[],isSelectAll:!1,group:{modal:!1,group_id:""},level:{modal:!1,level_id:""},sourceHtml:"",columns:[{type:"selection",width:40,align:"center"},{title:"会员",key:"shop",minWidth:150,render:function(t,a){return t("kdx-hint-tooltip",{attrs:{type:"form",placement:"right"}},[t("div",{class:"vip-information",slot:"header"},[t("div",{class:"user-image"},[t("img",{attrs:{src:e.$media(a.row.avatar)},on:{error:function(t){e.replaceImage(t,"avatar")}}})]),t("div",{class:"vip-content"},[t("p",{class:"vip-name"},[a.row.nickname||"-"]),t("div",{class:"vip-platform"},[10==a.row.source?t("span",{class:"iconfont icon-H"}):20==a.row.source?t("span",{class:"iconfont icon-weixin"}):21==a.row.source?t("span",{class:"iconfont icon-weixinxiaochengxu"}):30==a.row.source?t("kdx-svg-icon",{class:"iconfont",attrs:{type:"icon-qudao-toutiao2"}}):32==a.row.source?t("kdx-svg-icon",{class:"iconfont",attrs:{type:"icon-qudao-toutiaojisuban"}}):31==a.row.source?t("kdx-svg-icon",{class:"iconfont",attrs:{type:"icon-douyin"}}):70==a.row.source?t("span",{class:"iconfont icon-PCduan"}):"",1==a.row.is_black?t("span",{class:"table-blacklist"},[t("span",{class:"blacklist-icon iconfont icon-huiyuan-heimingdan"}),t("span",["黑名单"])]):""])])]),t("Form",{attrs:{"label-width":60}},[t("FormItem",{attrs:{label:"ID："}},[t("span",[a.row.id])]),t("FormItem",{attrs:{label:"推荐人："}},[a.row.inviter_name?t("div",{class:"invited-box"},[t("div",{class:"image"},[t("img",{class:"invited-img",attrs:{src:e.$media(a.row.inviter_avatar)},on:{error:function(t){e.replaceImage(t,"avatar")}}})]),t("span",[0==a.row.inviter?"":[a.row.inviter],a.row.inviter_name])]):"无"]),t("FormItem",{attrs:{label:"手机号："}},[t("span",[a.row.mobile||"未绑定"])]),t("FormItem",{attrs:{label:"是否关注："}},[t("span",[a.row.is_follow_name])]),t("FormItem",{attrs:{label:"状态："}},[t("span",[a.row.is_black?"禁用":"正常"])])])])}},{title:"会员等级",key:"level_name",minWidth:80,render:function(e,t){var a;return null!==(a=t.row)&&void 0!==a&&a.is_default_level?e("div",{class:"vip-grade"},[e("span",{class:"text"},[t.row.level_name||"普通会员"])]):e("div",{class:"vip-grade"},[e("kdx-svg-icon",{attrs:{type:"icon-huiyuan-bg"},class:"icon"}),e("span",{class:"text"},[t.row.level_name])])}},{title:"标签组",key:"group_name",minWidth:100,render:function(e,t){if(t.row.group_name){var a=t.row.group_name.split(",").map((function(t){return e("kdx-tag-label",{attrs:{type:"info",size:"small"}},[t])}));return e("div",{class:"group-name"},[a])}return e("div",["-"])}},{title:"注册时间",key:"created_at",width:120,render:function(e,t){return e("p",{style:{"word-break":"normal"}},t.row.created_at)}},{title:"积分/余额",key:"credit",minWidth:120,render:function(e,t){return e("div",[e("p",[e("span","积分："),e("span",{class:{"vip-table-number":!0}},t.row.credit)]),e("p",[e("span","余额："),e("span",{class:{"vip-table-number":!0}},t.row.balance)])])}},{title:"成交",key:"order_count",minWidth:100,render:function(e,t){return e("div",[e("p",[e("span","订单："),e("span",{class:{"vip-table-number":!0}},t.row.order_count)]),e("p",[e("span","金额："),e("span",{class:{"vip-table-number":!0}},t.row.money_count?t.row.money_count:"0")])])}},{title:"优惠券",key:"coupon_count",minWidth:80},{title:"操作",key:"action",width:120,render:function(t,a){return t("div",{class:"action"},[t("Button",{attrs:{type:"text"},on:{click:function(){e.handleEdit(a.row.id)}}},["编辑"]),t("Button",{attrs:{type:"text",target:"_blank"},on:{click:function(){e.toOrder(a.row.id)}}},["订单"])])}}]}},watch:{list:{handler:function(e){this.data=e},immediate:!0}},computed:{selectDisabled:function(){return 0===this.selectRows.length},noManagePerm:function(){return!this.$getPermMap("member.list.manage")}},methods:{reset:function(e){this.$refs.page.reset(e)},toOrder:function(e){this.$utils.openNewWindowPage("/order/list/all",{keywords:e,search_field:"member_id"})},settingBlackStatus:function(e,t){var a=this,i="",r="";"setting"===e?(i="确认设置黑名单?",r="设置黑名单操作成功"):"cancel"===e&&(i="确认取消黑名单?",r="取消黑名单操作成功"),this.$Modal.confirm({title:"提示",content:i,onOk:function(){var e=a.selectRows.map((function(e){return e.id}));a.$api.memberApi.setMemberBlackStatus({id:e,is_black:t}).then((function(e){0==e.error&&(a.selectRows=[],a.isSelectAll=!1,a.$Message.success(r),a.$emit("getList"))}))},onCancel:function(){}})},handleMoreDelete:function(){var e=this;this.$Modal.confirm({title:"提示",content:"确认删除？",onOk:function(){var t=e.selectRows.map((function(e){return e.id}));e.$api.memberApi.deleteBatchMember({ids:t}).then((function(t){0==t.error&&(e.$Message.success("操作成功"),e.$emit("getList"))}))},onCancel:function(){}})},editGroup:function(){this.group.modal=!0},handleGroupCancel:function(){this.group.modal=!1,this.group.group_id=""},handleGroupOk:function(){var e=this,t=this.selectRows.map((function(e){return e.id}));this.$api.memberApi.changeMemberGroup({id:t,group_ids:this.group.group_id}).then((function(t){0==t.error&&(e.$Message.success("操作成功"),e.$emit("getList")),e.group.modal=!1}))},editGrade:function(){this.level.modal=!0},handleGradeCancel:function(){this.level.modal=!1,this.level.level_id=""},handleGradeOk:function(){var e=this,t=this.selectRows.map((function(e){return e.id}));this.$api.memberApi.changeMemberLevel({id:t,level_id:this.level.level_id}).then((function(t){0==t.error&&(e.$Message.success("操作成功"),e.$emit("getList")),e.level.modal=!1}))},selectChange:function(e){this.selectRows=e,this.isSelectAll=this.selectRows.length===this.data.length},checkboxChange:function(e){var t=this;this.$refs["table"].selectAll(e),this.data.forEach((function(a,i){t.$set(t.data[i],"_checked",e)})),this.selectRows=e?this.data:[]},changePage:function(e){this.$emit("on-page-change",e),this.initFooterData()},initFooterData:function(){this.isSelectAll=!1,this.selectRows=[]},handleEdit:function(e){this.$router.push({path:"/member/detail",query:{id:e}})},handleExport:function(){this.$refs.table.exportCsv({filename:"会员",columns:this.columns,data:this.data})}}};t.default=i},"5bdf":function(e,t,a){"use strict";a.r(t);var i=a("2992"),r=a.n(i);for(var l in i)["default"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(l);t["default"]=r.a},6180:function(e,t,a){"use strict";a.r(t);var i=a("90a8"),r=a("d062");for(var l in r)["default"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(l);var n=a("2877"),s=Object(n["a"])(r["default"],i["a"],i["b"],!1,null,"944e29c6",null);t["default"]=s.exports},"741e":function(e,t,a){"use strict";a("0474")},"8e3f":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return r}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"good-list-table-list"},[a("Table",{ref:"table",attrs:{columns:e.columns,data:e.data},on:{"on-selection-change":e.selectChange}}),e.data.length>0?a("div",{staticClass:"footer-action"},[a("Checkbox",{on:{"on-change":e.checkboxChange},model:{value:e.isSelectAll,callback:function(t){e.isSelectAll=t},expression:"isSelectAll"}}),a("Button",{attrs:{disabled:e.selectDisabled},on:{click:function(t){return e.settingBlackStatus("setting","1")}}},[e._v("设置黑名单")]),a("Button",{attrs:{disabled:e.selectDisabled},on:{click:function(t){return e.settingBlackStatus("cancel","0")}}},[e._v("取消黑名单")]),a("Button",{attrs:{disabled:e.selectDisabled},on:{click:e.editGroup}},[e._v("修改标签组")]),a("Button",{attrs:{disabled:e.selectDisabled},on:{click:e.editGrade}},[e._v("修改等级")])],1):e._e(),a("div",{staticClass:"footer-page"},[a("kdx-page-component",{ref:"page",attrs:{total:e.total},on:{"on-change":e.changePage}})],1),a("kdx-modal-frame",{attrs:{title:"批量修改标签组",width:400},on:{"on-cancel":e.handleGroupCancel,"on-ok":e.handleGroupOk},model:{value:e.group.modal,callback:function(t){e.$set(e.group,"modal",t)},expression:"group.modal"}},[a("Form",{ref:"form-group",staticStyle:{"margin-top":"20px"},attrs:{"label-width":120}},[a("FormItem",{attrs:{label:"标签组：",prop:"group"}},[a("Select",{staticClass:"width-160",attrs:{placeholder:"请选择"},model:{value:e.group.group_id,callback:function(t){e.$set(e.group,"group_id",t)},expression:"group.group_id"}},e._l(e.groupList,(function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.group_name)+" ")])})),1)],1)],1)],1),a("kdx-modal-frame",{attrs:{title:"批量修改会员等级",width:400},on:{"on-cancel":e.handleGradeCancel,"on-ok":e.handleGradeOk},model:{value:e.level.modal,callback:function(t){e.$set(e.level,"modal",t)},expression:"level.modal"}},[a("Form",{ref:"form-level",staticStyle:{"margin-top":"20px"},attrs:{"label-width":120}},[a("FormItem",{attrs:{label:"会员等级：",prop:"group"}},[a("Select",{staticClass:"width-160",attrs:{placeholder:"请选择"},model:{value:e.level.level_id,callback:function(t){e.$set(e.level,"level_id",t)},expression:"level.level_id"}},e._l(e.levelList,(function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.level_name)+" ")])})),1)],1)],1)],1)],1)},r=[]},"90a8":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return r}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-header-bar",[a("Form",{ref:"form",attrs:{model:e.model,"label-width":100,inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[a("FormItem",{attrs:{label:"关键词："}},[a("Input",{staticClass:"width-340",attrs:{type:"text",placeholder:"可搜索昵称/姓名/手机号"},on:{"on-enter":e.handleSearch},model:{value:e.model.keyword,callback:function(t){e.$set(e.model,"keyword",t)},expression:"model.keyword"}})],1),a("FormItem",{attrs:{label:"用户来源："}},[a("Select",{staticClass:"width-160",attrs:{placeholder:"全部"},model:{value:e.model.source,callback:function(t){e.$set(e.model,"source",t)},expression:"model.source"}},e._l(e.sourceList,(function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])})),1)],1),a("FormItem",{attrs:{label:"用户等级："}},[a("Select",{staticClass:"width-160",attrs:{placeholder:"全部"},model:{value:e.model.level_id,callback:function(t){e.$set(e.model,"level_id",t)},expression:"model.level_id"}},[a("Option",{key:"all",attrs:{value:"all"}},[e._v("全部")]),e._l(e.levels,(function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.level_name))])}))],2)],1),a("FormItem",{attrs:{label:"标签组："}},[a("Select",{staticClass:"width-160",attrs:{placeholder:"全部"},model:{value:e.model.group_id,callback:function(t){e.$set(e.model,"group_id",t)},expression:"model.group_id"}},[a("Option",{key:"all",attrs:{value:"all"}},[e._v("全部")]),e._l(e.groups,(function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.group_name))])}))],2)],1),a("FormItem",{attrs:{label:"注册时间："}},[a("DatePicker",{staticClass:"width-340",attrs:{type:"datetimerange",placeholder:"注册时间",format:"yyyy-MM-dd HH:mm"},model:{value:e.model.registerTime,callback:function(t){e.$set(e.model,"registerTime",t)},expression:"model.registerTime"}})],1),a("FormItem",{attrs:{label:"黑名单："}},[a("Select",{staticClass:"width-160",attrs:{placeholder:"all"},model:{value:e.model.is_black,callback:function(t){e.$set(e.model,"is_black",t)},expression:"model.is_black"}},[a("Option",{key:"all",attrs:{value:"all"}},[e._v("全部")]),e._l(e.optionData.blacklist,(function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}))],2)],1),a("div",{staticClass:"ivu-form-item-btn"},[a("Button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")]),a("Button",{attrs:{type:"text"},on:{click:e.handleReset}},[e._v("重置")]),a("Button",{attrs:{type:"text"},on:{click:e.handleExport}},[e._v("导出")])],1)],1)],1)},r=[]},b3ec:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return r}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vip-list"},[a("search-header",{ref:"search",attrs:{group_id:e.search.group_id,level_id:e.search.level_id,groups:e.groups,levels:e.levels},on:{"on-search":e.handleSearch,"on-export":e.handleExport,refreshTable:e.refreshTable}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table-list"},[a("table-list",{ref:"tabList",attrs:{list:e.data,total:e.page.total,groupList:e.groups,levelList:e.levels},on:{getList:e.getList,"on-page-change":e.changePage}})],1),e._t("default")],2)},r=[]},bb7b:function(e,t,a){"use strict";a.r(t);var i=a("b3ec"),r=a("5bdf");for(var l in r)["default"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(l);a("edea");var n=a("2877"),s=Object(n["a"])(r["default"],i["a"],i["b"],!1,null,"1f2c6898",null);t["default"]=s.exports},bdba:function(e,t,a){"use strict";a.r(t);var i=a("4301"),r=a.n(i);for(var l in i)["default"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(l);t["default"]=r.a},d062:function(e,t,a){"use strict";a.r(t);var i=a("1b77"),r=a.n(i);for(var l in i)["default"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(l);t["default"]=r.a},edea:function(e,t,a){"use strict";a("31e3")}}]);