(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49,126],{"0a4f":function(t,e,i){"use strict";i("d8ed")},"0f30":function(t,e,i){"use strict";i("1444")},"0fe9":function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"MarketOverview",components:{},props:{title:{type:String,default:"活动营销概览"},icon_show:{type:Boolean,default:!1},countData:{type:Object,default:function(){return{pay_price_sum:"0",order_count:"0",goods_view_count:"0",sales_goods_total:"0"}}},time:{type:String,default:""},showHover:{type:Boolean,default:!1}},data:function(){return{data:{}}},computed:{updateTime:function(){var t,e,i,a;return console.log("update-time",null===(t=this.$store.state.config)||void 0===t||null===(e=t.data)||void 0===e?void 0:e.updateTimeText),null===(i=this.$store.state.config)||void 0===i||null===(a=i.data)||void 0===a?void 0:a.updateTimeText}},watch:{},created:function(){},mounted:function(){},methods:{}};e.default=i},1324:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAABLUExURQCwf9j06wDKjgDLji/Gmavn1QDIjEdwTACvfNf068Xv4szw5Y3dx9Hy6N317UzbsADMj+D27w7PlTfXpyPTnqXr1mrgvYPkx8Dw4W4mga4AAAAPdFJOUxnGp9ouV2QAC/p6jDua4jaJMJMAAALzSURBVFjDvZjpgqsgDIVjRQdsO7K49P2f9AJuCQLV1rn8aKcznc+ck4QNfnKDc1gH5zz3VUhDIDL4WVCUkmXBSUwSBacxCRR8gImi4DPOnhSA4MTIgDicGjwFOsmhJPiCQ0jwDQeT4CsOIsEn+YrlDo5yHo88CQ4JY02h1O8jJw7ec1hlKarvVZGzCd4Jq55CqdegpexVlREH2YAed0sRo5FuDOqeCQnSAXljRD9R7NBCZPyGRECzMU6S1KY17n1MaeMzKGeM1F3rh0UZ9UyHBPuAsDEzxQ8phWDJkCAICBvTmRYPbbU1yZAIKDAmGMZqKzIgnjTGGApzpZTUBnNADBtjJiVhXJ0tpaS2BfQbGuPC6jSx20id1gaTskb11JiFIKXBdqfbZAbdVevCMdvDuzUKqi3VJjOoUr0LCP2LWaPAoGSbrCkTQmMVnWwjIJ1pk2Xc1UBFRCJyyTBqLG8sN5NabRonaMkW+q0vCB96WadZhdI0QbusTdUhhI3XsxKgxmojNWMrynRrHbkfbXX0QvXTR8uKS2TqJSXt0bX9PUWa0bXQiP9ex7UZSXrLdFOVu4fLbni5WaGl1t+is7wasd1L+nzBD72lvAacTWdfPCLm8hFMHKsxi6SO1FoZLUl4KkPs3owRQ6zOW6qMI2391rbYmKFd0hB0Xr3vta1NfNpXY5QzxjeZ8W84IF1CAuTaZFnDvDF20p2nJ2+WJHMKVcbhh7aJ3Iy5P6C+ufnNzCjdkXxKFpsh51JyX/fGPJcmn1jtfhBlgCd/1yYvb0xR4YexuowsKoYUEQ/WNbcaFc2+hditDJe5QFm4QFZNamOG7JpW8NtugTy8Dd3scvVR75bsE/vQ2S5XDOV+E3FuZ+ztChqf5zdaWYkli2y0PtiskzmbH9qMHt2zwzfnh/32+CvSySPEu8PI5Yea645ZERJDr8cPftcdRREpFgQ7fji+7rh+Mnc8e6Xx6UXE312yXHftcwT1/6/GLrysW24Pj18f/gOh226F5EkqAQAAAABJRU5ErkJggg=="},1444:function(t,e,i){},1475:function(t,e,i){var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d81d"),i("b0c0"),i("b64b");var n=a(i("e484")),r=a(i("2793")),o=a(i("597c")),s={components:{MarketOverview:n.default,ActivityChat:r.default,DataList:o.default},data:function(){return{data:{pay_price_sum:0,order_count:0},chartLine:{color:["#4A67FF","#FF9900"],data:[],legend:["浏览量（PV）","访客量（UV）"],xAxis:[],yAxis:{name:"单位(人)",minInterval:1},legendStyle:{right:"30",top:"25"},grid:{left:60,right:40,bottom:30}},chartPie:{legend:{orient:"vertical",left:60,top:90,bottom:0,data:[]},radius:["40%","60%"],center:["70%","50%"],data:[]},activityData:[],activityId:"",activity:{data:[],page:{pageSize:10,pageNumber:1}},goods:{data:[],page:{pageSize:10,pageNumber:1}}}},mounted:function(){this.getStatistics(),this.getLine(),this.getAllActivity(),this.getActivityData(),this.getGoodsData()},methods:{getStatistics:function(){var t=this;this.$api.groupsApi.getGroupsStatistics().then((function(e){var i,a,n;0===e.error&&(t.data=null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.count,t.chartPie.data=(null===(a=e.data)||void 0===a?void 0:a.channel)||[],t.chartPie.legend.data=null===(n=e.data)||void 0===n?void 0:n.channel.map((function(t){return t.name})),t.$nextTick((function(){var e;null===(e=t.$refs.activity_chart)||void 0===e||e.renderPie()})))}))},getLine:function(){var t=this,e={};this.activityId&&(e.activity_id=this.activityId),this.$api.groupsApi.getGroupsLineData(e).then((function(e){0===e.error&&(t.chartLine.xAxis=Object.keys(e.data),t.chartLine.data=[t.chartLine.xAxis.map((function(t){var i;return(null===(i=e.data[t])||void 0===i?void 0:i.goods_view_count)||0})),t.chartLine.xAxis.map((function(t){var i;return(null===(i=e.data[t])||void 0===i?void 0:i.member_view_count)||0}))],t.$nextTick((function(){var e;null===(e=t.$refs.activity_chart)||void 0===e||e.renderLine()})))}))},getAllActivity:function(){var t=this;this.$api.groupsApi.getGroupActivities({is_all:1}).then((function(e){0===e.error&&(t.activityData=e.list,t.activityData.unshift({title:"全部",id:"all"}))}))},getActivityData:function(){var t=this,e={page:this.activity.page.pageNumber,pagesize:this.activity.page.pageSize};this.$api.groupsApi.getGroupsActivityData(e).then((function(e){0===e.error&&(console.log("res",e),t.activity.data=e.list||[],t.activity.total=e.total)}))},getGoodsData:function(){var t=this,e={page:this.goods.page.pageNumber,pagesize:this.goods.page.pageSize};this.$api.groupsApi.getGroupsGoodsData(e).then((function(e){0===e.error&&(t.goods.data=e.list||[],t.goods.total=e.total)}))},changeLine:function(t){this.activityId=t,this.getLine()},changeActivityPage:function(t){this.activity.page=t,this.getActivityData()},changeGoodsPage:function(t){this.goods.page=t,this.getGoodsData()}}};e.default=s},"154a":function(t,e,i){"use strict";i("20b7")},"20b7":function(t,e,i){},2793:function(t,e,i){"use strict";i.r(e);var a=i("4b9b"),n=i("a6dd");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("0a4f");var o=i("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"2fea0513",null);e["default"]=s.exports},"2b2c":function(t,e,i){"use strict";i("8d13")},"2d61":function(t,e,i){"use strict";i.r(e);var a=i("ec4a"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"2e16":function(t,e,i){"use strict";i.r(e);var a=i("be05"),n=i("c5c3");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("154a");var o=i("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"61c6331c",null);e["default"]=s.exports},"3e10":function(t,e,i){var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("e9c4"),i("b0c0"),i("a15b"),i("99af"),i("d3b7"),i("159b");var n=a(i("313e")),r=a(i("89bd")),o={name:"ChartLine",props:{id:{type:String,required:!0},data:{type:Array,default:function(){return[]}},legend:{type:[Object,Boolean],default:function(){}},height:{type:Number,default:130},loading:{type:Boolean,default:!1},radius:{type:[Array,String],default:function(){return["70%","90%"]}},label:{type:Object,default:function(){}},hoverOffset:{type:Number,default:2},center:{type:Array,default:function(){return["50%","50%"]}},width:{type:[String,Number],default:"100%"}},data:function(){return{myCharts:null,option:{title:{},grid:{left:"0%",right:"0%",bottom:"0%",containLabel:!1},tooltip:{trigger:"item",padding:[0]},legend:{icon:"circle",itemWidth:8,itemHeight:8,textStyle:{color:"#636669"}},series:[{type:"pie",radius:this.radius,hoverOffset:this.hoverOffset,center:this.center,label:{normal:{show:!1,position:"center",formatter:"{b}132: \n{d}",rich:{b:{color:"#636669",fontSize:12,lineHeight:16,fontFamily:"din,PingFang SC,Microsoft YaHei"},d:{color:"#636669",fontSize:20,lineHeight:28,fontWeight:"bold",fontFamily:"din,PingFang SC,Microsoft YaHei"}}}},emphasis:{label:{show:!0,rich:{a:{color:"#636669",fontSize:12,lineHeight:16,fontFamily:"din,PingFang SC,Microsoft YaHei"},b:{color:"#262b30",fontSize:20,lineHeight:32,fontWeight:"bold",fontFamily:"din,PingFang SC,Microsoft YaHei"}}}}}]}}},methods:{init:function(){n.default.registerTheme("theme",r.default),this.myCharts=n.default.init(document.getElementById("pie_".concat(this.id)),r.default)},render:function(){var t=this;this.myCharts||this.init();var e=JSON.parse(JSON.stringify(this.option));this.legend?Object.assign(e.legend,this.legend):delete e.legend,e.series[0].data=this.data,e.series[0].emphasis.label.formatter=function(t){var e=t.name,i=t.percent;return["{a|".concat(e,"}"),"{b|".concat(i,"%}")].join("\n")},e.tooltip.formatter=function(t){var e=t.name,i=t.percent,a=t.color;return'<div style="background:#fff;border-radius: 2px;padding: 12px 48px 12px 12px;box-shadow: 0px 4px 10px rgba(0, 49, 95, 0.08);">\n                    <div style="display:flex;align-items:center;margin-top:4px;">\n                        <span style="display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:8px;background:'.concat(a,';"></span>\n                        <span style="color:#636669;">').concat(e,"：").concat(i,"%</span>\n                    </div>\n                </div>")},this.myCharts.setOption(e);var i=0;this.myCharts.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:i}),this.myCharts.on("mouseover",(function(e){t.data.forEach((function(e,i){t.myCharts.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:i})})),t.myCharts.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:e.dataIndex})})),this.myCharts.on("mouseout",(function(e){i=e.dataIndex,t.myCharts.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:e.dataIndex})}))},handleResize:function(){this.myCharts&&this.myCharts.resize()}},mounted:function(){window.addEventListener("resize",this.handleResize)}};e.default=o},"43b6":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"market-overview"},[a("div",{staticClass:"card-panel-title"},[a("span",{staticClass:"title"},[t._v(t._s(t.title))]),t.updateTime?a("span",{staticClass:"time"},[t._v(t._s(t.updateTime))]):t._e()]),a("Row",{attrs:{gutter:20}},[a("Col",{attrs:{span:"6"}},[a("div",{staticClass:"card-panel-box",class:{"card-hover":t.showHover}},[a("div",{staticClass:"flex card-panel-price"},[t.icon_show?a("div",{staticClass:"icon"},[a("img",{attrs:{src:i("1324"),alt:""}})]):t._e(),a("div",[a("div",[t._v("成交总金额 "),a("kdx-hint-tooltip",[t._v(" 全部拼团活动的支付金额的总和，包含退款金额 ")])],1),a("div",{staticClass:"price"},[t._v("¥"+t._s(t.countData.pay_price_sum||0))])])])])]),a("Col",{attrs:{span:"6"}},[a("div",{staticClass:"card-panel-box",class:{"card-hover":t.showHover}},[a("div",{staticClass:"flex card-panel-price"},[t.icon_show?a("div",{staticClass:"icon"},[a("img",{attrs:{src:i("e7ea"),alt:""}})]):t._e(),a("div",[a("div",[t._v("累计订单数 "),a("kdx-hint-tooltip",[t._v(" 全部拼团活动的订单总数，包含取消订单数 ")])],1),a("div",{staticClass:"price"},[t._v(t._s(t.countData.order_count||0))])])])])]),a("Col",{attrs:{span:"6"}},[a("div",{staticClass:"card-panel-box",class:{"card-hover":t.showHover}},[a("div",{staticClass:"flex card-panel-price"},[t.icon_show?a("div",{staticClass:"icon"},[a("img",{attrs:{src:i("fe87"),alt:""}})]):t._e(),a("div",[a("div",[t._v("活动总浏览量 "),a("kdx-hint-tooltip",[t._v(" 全部拼团活动，浏览商品详情的数据的累计，不去重 ")])],1),a("div",{staticClass:"price"},[t._v(t._s(t.countData.goods_view_count||0))])])])])]),a("Col",{attrs:{span:"6"}},[a("div",{staticClass:"card-panel-box",class:{"card-hover":t.showHover}},[a("div",{staticClass:"flex card-panel-price"},[t.icon_show?a("div",{staticClass:"icon"},[a("img",{attrs:{src:i("ad02"),alt:""}})]):t._e(),a("div",[a("div",[t._v("活动商品数量 "),a("kdx-hint-tooltip",[t._v(" 拼团活动在数据更新时，所有参与活动的商品总数量 ")])],1),a("div",{staticClass:"price"},[t._v(t._s(t.countData.sales_goods_total||0))])])])])])],1)],1)},n=[]},"4b9b":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"activity-chart"},[i("div",{staticClass:"activity-line"},[i("div",{staticClass:"activity-line-header"},[i("div",{staticClass:"title"},[t._v(" 活动曝光 ")]),i("div",{staticClass:"name"},[i("div",{staticClass:"label"},[t._v(" 活动名称： ")]),i("div",{staticClass:"content"},[i("Select",{staticClass:"width-250 active-name",attrs:{filterable:"",placeholder:"请选择"},on:{"on-change":t.changeActivity},model:{value:t.activity_id,callback:function(e){t.activity_id=e},expression:"activity_id"}},t._l(t.activityData,(function(t){return i("Option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1)])]),i("div",{staticClass:"chart-line"},[i("chart-line",{ref:"chart_line",attrs:{id:"groups_line",data:t.chartLine.data,"x-axis":t.chartLine.xAxis,"y-axis":t.chartLine.yAxis,legend:t.chartLine.legend,"legend-style":t.chartLine.legendStyle,grid:t.chartLine.grid,height:328}})],1)]),i("div",{staticClass:"activity-pie"},[i("div",{staticClass:"activity-pie-header"},[t._v(" 销售占比 ")]),i("div",{staticClass:"chart-pie"},[i("chart-pie",{ref:"chart_pie",attrs:{id:"groups_pie",legend:t.chartPie.legend,height:328,data:t.chartPie.data,center:t.chartPie.center,radius:t.chartPie.radius}})],1)])])},n=[]},"597c":function(t,e,i){"use strict";i.r(e);var a=i("b4d4"),n=i("2d61");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("0f30");var o=i("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"492aba23",null);e["default"]=s.exports},"62dd":function(t,e,i){var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5530"));i("a9e3"),i("e9c4"),i("d81d"),i("d3b7"),i("159b"),i("b680"),i("b0c0"),i("99af");var r=a(i("313e")),o=a(i("89bd")),s={name:"ChartLine",props:{id:{type:String,required:!0},data:{type:Array,default:function(){return[]}},legend:{type:Array,default:function(){return[]}},legendStyle:{type:Object,default:function(){return{right:"0",top:"25"}}},xAxis:{type:Array,default:function(){return[]}},yAxis:{type:[Array,Object],default:function(){}},height:{type:Number,default:450},isAreaStyle:{type:Boolean,default:!1},areaStyle:{type:[Array,Object],default:function(){return[]}},loading:{type:Boolean,default:!1},grid:{type:Object,default:function(){}},lineColors:{type:Array,default:function(){return[]}},showYAxis:{type:Boolean,default:!1}},data:function(){return{myCharts:null,option:{title:{},grid:{left:"3%",right:"4%",bottom:"10%",containLabel:!1},tooltip:{trigger:"axis",axisPointer:{animation:!1,lineStyle:{color:"#BFBFBF"}},padding:[0],textStyle:{color:"#262B30",fontSize:12}},legend:(0,n.default)({icon:"circle",itemWidth:8,itemHeight:8,textStyle:{color:"#939799"},data:this.legend},this.legendStyle),xAxis:{type:"category",boundaryGap:!1,data:this.xAxis},yAxis:{nameTextStyle:{color:"#262B30"},splitLine:{lineStyle:{type:"dashed"}},axisLabel:{}},series:this.data}}},methods:{init:function(){r.default.registerTheme("theme",o.default),this.myCharts=r.default.init(document.getElementById("line_".concat(this.id)),o.default)},render:function(){var t=this;this.myCharts||this.init();var e=JSON.parse(JSON.stringify(this.option));if(Object.assign(e.grid,this.grid),e.legend.data=this.legend,this.lineColors.length&&(e.color=this.lineColors),e.xAxis.data=this.xAxis,this.yAxis instanceof Array)e.yAxis=this.yAxis.map((function(i,a){return i.splitLine=e.yAxis.splitLine,t.showYAxis&&1==a&&(i.inverse=!1),i}))||[],e.yAxis.forEach((function(t){var e;null!==t&&void 0!==t&&null!==(e=t.axisLabel)&&void 0!==e&&e.formatter||(t.axisLabel=(0,n.default)((0,n.default)({},t.axisLabel),{},{formatter:function(t){return t>=1e3?"".concat(parseFloat(t/1e3).toFixed(1),"K"):t}}))}));else if(this.yAxis instanceof Object){var i,a;e.yAxis=Object.assign(e.yAxis,this.yAxis),null!==(i=e.yAxis)&&void 0!==i&&null!==(a=i.axisLabel)&&void 0!==a&&a.formatter||(e.yAxis.axisLabel.formatter=function(t){return t>=1e3?"".concat(parseFloat(t/1e3).toFixed(1),"K"):t})}this.legend.length>1?e.series=this.legend.map((function(e,i){var a={name:e,type:"line",data:t.data[i]||[]};return t.showYAxis&&1==i&&(a.yAxisIndex=1),t.isAreaStyle&&(a.areaStyle=t.areaStyle[i]||{}),a})):(e.series=[{name:this.legend[0],type:"line",data:this.data||[]}],this.isAreaStyle&&(e.series[0].areaStyle=this.areaStyle||{})),e.tooltip.formatter=function(t){var e="",i=t[0].name;return t.forEach((function(t){var i=t.seriesName,a=t.value,n=t.color;e+='\n                                  <div style="display:flex;align-items:center;margin-top:4px;">\n                                  <span style="display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:8px;background:'.concat(n,';"></span>\n                                  <span style="color:#636669;">').concat(i,"：").concat(a,"</span>\n                                  </div>")})),'<div style="background:#fff;border-radius: 2px;padding: 12px 48px 12px 12px;box-shadow: 0px 4px 10px rgba(0, 49, 95, 0.08);">\n                                <div>'.concat(i,"</div>\n                                ").concat(e,"\n                        </div>")},this.myCharts.setOption(e)},handleResize:function(){this.myCharts&&this.myCharts.resize()}},mounted:function(){this.$emit("chartLineMounted"),window.addEventListener("resize",this.handleResize)}};e.default=s},"6ab3":function(t,e,i){"use strict";i.r(e);var a=i("eff1"),n=i("e17c");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("9f05");var o=i("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"8c3f8a16",null);e["default"]=s.exports},"7a39":function(t,e,i){},"844b":function(t,e,i){"use strict";i.r(e);var a=i("1475"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"8d13":function(t,e,i){},"9f05":function(t,e,i){"use strict";i("7a39")},a6dd:function(t,e,i){"use strict";i.r(e);var a=i("e2c1"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},ad02:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAqUExURUdwTP+ZPf+YN/+YPf+ZPv+ZPv+ZP/+XOP+ZPv+ZP////v/Fkv/w4v+sYxH2jKsAAAAJdFJOUwAZChLGpuUWa516CZEAAAG+SURBVEjHrZa/TsMwEMbTMrD2kkrtmDZD16YLcxd2BiTYEWIMBdSZAd6AwaJ5ANy8QJsnAMQDVOJhSOok9vlf3IpvaaX8dP5sn+/O85C60RLgYTb2zOrGUCkITUwEgmZ6ZgRICwcGwFeZCShSYp2ARlMJutdBgxZDGltdMChsD4RCGQOJoUZmiIcyM3yDpxYIkgqKbVDQaptbr1Ybnt8i3TwzU4m4t2si6U3cH7u2IVHEQoFgqa9CF9xUZelRhebsS49b6hshn5+SGQr4nZgh4EdpgcImuS3Q1Ou0Q0mTS3sor7/nItRD0DvdMIb9mTeJFx8NrRAUNK+yhFL6UUM7ARogiNA1g7YZQRCI0HYfgaRfaxECDK3oT/nzSz8tUEqzTemfBTRAxXrZd04raxxCxgs3tFC2I8S8u2KpktoQCYqlC07zfCddcKBAmizwcRaYoM4/QT239HV6CE5Pyu1xOj3zThuU8NLzZC09tXMVEot0ZepVZu7EcliX8ZdLpCtUyOvjHFi7i7XY+4e0DVsDgsNamVNTdGqvbo3aFGpx+PCgH0PCYwYaDeXrBqiJA+M2rrkNfoXG0RnAUh4h/wCPrwb31nuEpgAAAABJRU5ErkJggg=="},b4d4:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"groups-data-list"},[i("Tabs",{attrs:{value:"name1",animated:!1}},[i("TabPane",{attrs:{label:"活动数据",name:"name1"}},[i("Table",{attrs:{columns:t.activity.columns,data:t.activityData},scopedSlots:t._u([{key:"activity_time",fn:function(e){var a=e.row;return[i("div",{staticClass:"time flex"},[t._v("起："+t._s(t.getTime(a.start_time)))]),i("div",{staticClass:"time flex"},[t._v("止："+t._s(t.getTime(a.end_time)))])]}},{key:"pay_price_sum",fn:function(e){var a=e.row;return[i("div",{staticClass:"activity-price"},[t._v(" "+t._s(a.pay_price_sum)+" ")])]}}])}),i("div",{staticClass:"footer-page"},[i("kdx-page-component",{ref:"page",attrs:{total:t.activityTotal},on:{"on-change":t.changeActivityPage}})],1)],1),i("TabPane",{attrs:{label:"商品数据",name:"name2"}},[i("Table",{attrs:{columns:t.goods.columns,data:t.goodsData},scopedSlots:t._u([{key:"goods",fn:function(e){var a=e.row;return[i("div",{staticClass:"goods"},[i("div",{staticClass:"image"},[i("img",{attrs:{src:t.$media(a.thumb),alt:""},on:{error:t.replaceImage}})]),i("div",{staticClass:"title"},[t._v(" "+t._s(a.title)+" ")])])]}},{key:"pay_price",fn:function(e){var a=e.row;return[i("div",{staticClass:"activity-price"},[t._v(" "+t._s(a.pay_price)+" ")])]}},{key:"refund_price",fn:function(e){var a=e.row;return[i("div",{staticClass:"activity-price"},[t._v(" "+t._s(a.refund_price)+" ")])]}}])}),i("div",{staticClass:"footer-page"},[i("kdx-page-component",{ref:"page",attrs:{total:t.goodsTotal},on:{"on-change":t.changeGoodsPage}})],1)],1)],1)],1)},n=[]},be05:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"data_charts_pie"},[i("div",{style:{width:t.width,height:t.height+"px"},attrs:{id:"pie_"+t.id}})])},n=[]},bf71:function(t,e,i){"use strict";i.r(e);var a=i("0fe9"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},c0ee:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"data-transaction-make-info"},[i("div",{staticClass:"market-overview-box"},[i("market-overview",{attrs:{icon_show:!0,"count-data":t.data}})],1),i("activity-chat",{ref:"activity_chart",attrs:{"chart-line":t.chartLine,"chart-pie":t.chartPie,"activity-data":t.activityData},on:{"on-line-change":t.changeLine}}),i("data-list",{attrs:{"activity-data":t.activity.data,"activity-total":t.activity.total,"goods-data":t.goods.data,"goods-total":t.goods.total},on:{"on-activity-page":t.changeActivityPage,"on-goods-page":t.changeGoodsPage}}),t._t("default")],2)},n=[]},c1b6:function(t,e,i){},c5c3:function(t,e,i){"use strict";i.r(e);var a=i("3e10"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},d17a:function(t,e,i){"use strict";i.r(e);var a=i("c0ee"),n=i("844b");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("2b2c");var o=i("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"1f06312c",null);e["default"]=s.exports},d8ed:function(t,e,i){},e17c:function(t,e,i){"use strict";i.r(e);var a=i("62dd"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},e2c1:function(t,e,i){var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("6ab3")),r=a(i("2e16")),o={name:"ActivityChat",components:{ChartPie:r.default,ChartLine:n.default},props:{chartLine:{type:Object,default:function(){}},chartPie:{type:Object,default:function(){}},activityData:{type:Array,default:function(){return[]}}},data:function(){return{activity_id:"all"}},methods:{changeActivity:function(){"all"===this.activity_id?this.$emit("on-line-change",""):this.$emit("on-line-change",this.activity_id)},renderLine:function(){this.$refs["chart_line"].render()},renderPie:function(){this.$refs["chart_pie"].render()}}};e.default=o},e484:function(t,e,i){"use strict";i.r(e);var a=i("43b6"),n=i("bf71");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("f0d3");var o=i("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"19fe95f6",null);e["default"]=s.exports},e7ea:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5UExURf9Ac/54mv9DcPv3+/9EcP9CcPz1+kdwTP86av9DcP9DcPry+Pzm7v9DcPv8//6huf53mPzV4f9XgI8DmYEAAAANdFJOUxM6h/PixKkACOGjmGz/NK5mAAABoklEQVRYw+3Y0XKDIBAF0Is26WqKKP//sTVmmlHYXVnUTh963xKdM0sgCotPJUSEd+YP2r2QFTAhK8QqqgUjI1IwMwKFCoalUOfkUgLBEAUimEISZHS2Eg44GwlHnLWEQ85KQs18cXMHzXFfj/s7jy9VgjIw1w6btE4ZHModXYI8sPuQ5S4PDnxBrmma3Bna+WvHlwS2oJv3PjLQEOcLPVsSuIIa/0zLVLRcaLiSwBXULfeHHArLhY4rCdwv9ILilBUUBYgWKJ+GD89K08thIOiQ92NYZfz5VoBIgfh03KIEtxjtEE6E6ByISqExngOFYRdCCRSGcWdo2IPicxVunVpoiolTB81SmziVkI9h9KdAZevoHyqBfuNPG/hnvx2KY5KoQX/vCXnew199HU2r7L2ONCiu32txD6LjQyNhE2GGpG2NFSJpo1UNEbNhU9KLW7+0JNepBTlxM5qV5PqbmN4p2+Pak8hq64+DR5H0CFEv0WXHrErpyqNojXT1cd04d6S2NGobEdc1WQqpwkaUnalpjcHYrCMyKGrXL20fQm8ffgOxRV4MelFd7wAAAABJRU5ErkJggg=="},ec4a:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var a={name:"DataList",props:{activityData:{type:Array,default:function(){return[]}},goodsData:{type:Array,default:function(){return[]}},activityTotal:{type:Number,default:0},goodsTotal:{type:Number,default:0}},data:function(){var t=this;this.$createElement;return{activity:{columns:[{title:"活动名称",key:"title",minWidth:230},{title:"活动时间",slot:"activity_time",minWidth:130,maxWidth:300},{title:"停止时间",key:"stop_time",render:function(e,i){return e("div",[t.getTime(i.row[i.column.key])])}},{title:"拼团订单",key:"order_count",render:function(e,i){return e("div",[t.formatData(i.row.order_count)])}},{title:"成交金额",slot:"pay_price_sum",render:function(e,i){return e("div",[t.formatData(i.row.pay_price_sum)])}},{title:"退款金额",slot:"refund_price_sum",minWidth:90,render:function(e,i){return e("div",[t.formatData(i.row.refund_price_sum)])}},{title:"参与人数",key:"pay_member_count",minWidth:90,maxWidth:200,render:function(e,i){return e("div",[t.formatData(i.row.pay_member_count)])}}]},goods:{columns:[{title:"商品名称",slot:"goods"},{title:"成交商品数",key:"order_count"},{title:"成交金额",slot:"pay_price"},{title:"退款金额",slot:"refund_price"},{title:"参与人数",key:"member_count"}]}}},methods:{changeActivityPage:function(t){this.$emit("on-activity-page",t)},changeGoodsPage:function(t){this.$emit("on-goods-page",t)},getTime:function(t){return"0000-00-00 00:00:00"===t?"-":t},formatData:function(t){return t&&"number"!=typeof t?t:"-"}}};e.default=a},eff1:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"data_charts_line"},[i("div",{style:{width:"100%",height:t.height+"px"},attrs:{id:"line_"+t.id}})])},n=[]},f0d3:function(t,e,i){"use strict";i("c1b6")},fe87:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAgVBMVEUmZv8AAAAgY/8iZv8haf8eb/8yYv8iZ/8gav8hav8haf8hav8jav8haf8hZv8hav8hav8haP8haf8gav8ha/8kaP8eaf8hav/////j7f8uc/90ov9Yj/88fP/x9v/I2v/H2f+sx/9mmP/x9f+evv+Cq/+Cqv9Lhv9Khv/V4//V4v+E3yzjAAAAF3RSTlMUAAkP4gYDMZimbHtPTiPxiV3TXl1AIguHyaIAAAJiSURBVFjDtZjZcqMwEEV7WkgGL7GdSdLsXrLO/P8HDpUQBOrRYpVynuwq+5TuBQkJ+OVAIQr4QghE6fqtXTQ4GAJVoIhbuOsGEYITVGEiBC8YIJIQhPSJEAJBp0jBDSgm4rEi4oE7Vng8YJ5IEzBPpAl0P1FIU6QgEmWIwMLqYZMXxWHzsAILWmQvaJvvaSIrdq6awF7QOiODbG2vCWzBtlrjU2kRD3aXk4X8jof7File8T1ZyXjt3yJkHh0ryISjyOfxm75EaPaTkYd7syf8FAlYkpOXHJaIQcSqXlMAO5YNWLKMAshYNjCTrSmItZFtELkHVL+eqrLsz6+dc0iDRhozY6l5KScunaslBUZFBc1oq3JG9eG4cAhoT9aUBg1p9qZo2fUjad5LRkua1bJtQ/SbJrpqTNTWdB0/97OejoZoyYYmLqOn/mx9NJ1pYuMUHVhBV2r6qqGWhcvBhb5of8Z/ElVDJKpLc0hFoOg0/rOmfshHNH796xHxma+zNNVzQ1d2BxzAwFb26X9lX/xl88vfj6Yr1e3oqeyX31CtSNOWjA/HDYmwYB86RTI21xzr7Pty0rY0ozBFyrWMdBftealdy4j0LWzd2+l5GMz5rXYvbMmW2lSLvxxEZrZtxIBApXpARj6ysyeWLM0mQqTd1gwAN93iESpq6/dk3foNCPeeVpPtgCHSbY/9G/Zi5trn3g27Dsd5PB7yosg3R9sRQiQ71CQ8ZqU/+MWbMO3hOP1xXaMEBCPUj77S0EgRNBwZ8tpHxL324SgUQRou4sjYV2McpV3M4hFxJKIQkwOV67f/ACKAi+LikajGAAAAAElFTkSuQmCC"}}]);