(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[79],{"081e":function(e,t,i){"use strict";var o=i("479c"),n=i.n(o);n.a},"12c6":function(e,t,i){var o=i("4b78");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("6caa38f4",o,!0,{sourceMap:!1,shadowMode:!1})},"2fa9":function(e,t,i){"use strict";var o;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return o}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("theme-content",[i("v-uni-view",{staticClass:"goods-info-box",class:e.show_style?"two-lines flex":""},[i("v-uni-view",{staticClass:"goods-card-item line",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toDetail(e.goodsData.id)}}},[i("v-uni-view",{staticClass:"goods-card-inner",class:e.show_style?"flex-column":"flex"},[i("v-uni-view",{staticClass:"label-box"},[i("v-uni-view",{staticClass:"label-icon"},[e.goodsData.stock<1?i("v-uni-view",{staticClass:"sale-img"},[i("v-uni-image",{staticClass:"sale-img-soldout",attrs:{src:e.getSoldOutIcon}})],1):"seckill"==e.getActName?[i("v-uni-view",{staticClass:"seckill-tag"},[i("i",{staticClass:"iconfont-m- icon-m-shandian badge-icon"}),i("span",{staticClass:"badge-text"},[e._v("限时秒杀")])])]:[1==e.goodsData.is_recommand?i("v-uni-view",{staticClass:"recommend"},[i("v-uni-image",{attrs:{src:e.$utils.staticMediaUrl("goods/3.png")}}),i("span",[e._v("推荐")])],1):1==e.goodsData.is_new?i("v-uni-view",{staticClass:"recommend"},[i("v-uni-image",{attrs:{src:e.$utils.staticMediaUrl("goods/1.png")}}),i("span",[e._v("新品")])],1):1==e.goodsData.is_hot?i("v-uni-view",{staticClass:"hot"},[i("v-uni-image",{attrs:{src:e.$utils.staticMediaUrl("goods/4.png")}}),i("span",[e._v("热卖")])],1):e._e()]],2),e.goodsData.activities&&e.goodsData.activities.commission?i("v-uni-view",{staticClass:"commision-money"},[e._v("预计佣金￥"+e._s(e.goodsData.activities.commission))]):e._e(),i("v-uni-view",{staticClass:"goods-img",style:e.backgroundImage},[e.loading&&e.preloading?i("v-uni-image",{staticClass:"goods-img-img preload",attrs:{src:e.getLoadingSrc}}):e._e(),i("v-uni-image",{staticClass:"goods-img-img",class:{loading:e.loading&&e.preloading},attrs:{src:e.$utils.mediaUrl(e.goodsData.thumb)},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.loaded.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.loaded.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"goods-info flex1 flex-column flex-between"},[i("v-uni-view",{staticClass:"goods-title"},[i("v-uni-view",{staticClass:"title two-line-hide"},[e._v(e._s(e.goodsData.title))]),e.show_style?e._e():i("v-uni-view",{staticClass:"sub-title line-hide"},[e._v(e._s(e.goodsData.sub_name))])],1),[i("v-uni-view",{staticClass:"price-box",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t)}}},[i("v-uni-view",{staticClass:"flex-between"},[i("v-uni-view",[[e.goodsData.activities&&null!=e.goodsData.activities.member_price?i("v-uni-view",{staticClass:"price"},[e._v("￥"),i("v-uni-text",{staticClass:"primary-price"},[e._v(e._s(e.goodsData.activities.member_price))])],1):"seckill"==e.getActName?i("v-uni-view",{staticClass:"price"},[e._v(e._s(e.getSeckillPrice))]):i("v-uni-view",{staticClass:"price"},[e._v("￥"),i("v-uni-text",{staticClass:"primary-price"},[e._v(e._s(e.goodsData.price))])],1)],e.goodsData.original_price&&0!=e.goodsData.original_price?i("v-uni-view",{staticClass:"original_price"},[e._v("￥"+e._s(e._f("formatMoney")(e.goodsData.original_price)))]):e._e()],2),e.getActName?[e.goodsData.ext_field&&1==e.goodsData.ext_field.show_sales&&"seckill"!==e.getActName?i("v-uni-view",{staticClass:"sales"},[e._v("销量:"+e._s(e.goodsData.sales))]):e._e(),i("div",{staticClass:"buy-btn-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toDetail(e.goodsData.id)}}},[i("div",{staticClass:"btn  theme-primary-border"},[i("span",{staticClass:"buybtn theme-primary-color"},[e._v("去购买")]),i("i",{staticClass:"iconfont-m- icon-m-right theme-primary-color"})])])]:[i("v-uni-view",{staticClass:"right"},[e.isAddIcon?i("v-uni-view",{staticClass:"cart-icon",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.addCart.apply(void 0,arguments)}}},[i("i",{staticClass:"iconfont-m- icon-m-buy1 theme-primary-color"})]):e._e(),e.goodsData.ext_field&&1==e.goodsData.ext_field.show_sales?i("v-uni-view",{staticClass:"sales"},[e._v("销量:"+e._s(e.goodsData.sales))]):e._e()],1)]],2)],1)]],2)],1)],1)],1)],1)},a=[]},"30f5":function(e,t,i){var o=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("55dd"),i("5df3"),i("96cf");var n=o(i("3b8d"));i("ac6a");var a=o(i("571e")),s=o(i("a64f")),l=0,r={mixins:[s.default],components:{GoodsInfo:a.default},data:function(){return{userInfo:{},scrollTo:0,scrolling:!1,bar:"",bar2:"",levels:[],currentLevel:{demon:{}}}},computed:{unitLength:function(){return uni.upx2px(270)},myLevel:function(){var e=this,t={level_id:"",level:""};return this.userInfo&&this.levels.forEach((function(i,o){i.level_id==e.userInfo.level_id&&(t={level_id:i.level_id,level:i.level,index:o},e.currentLevel=i,e.$nextTick((function(){e.scrollTo=o*e.unitLength})))})),t}},watch:{scrolling:function(){if(!this.scrolling){var e=Math.abs(Math.round(this.scrollTo/l));this.currentLevel=this.levels[e],this.scrollTo-e*l>l&&(e+=1),this.scrollTo!=e*l&&this.clickItem(e)}}},mounted:function(){var e=this;l=uni.upx2px(270),uni.upx2px(10)/10,this.$api.memberApi.levelList().then(function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=i.error){t.next=6;break}return t.next=3,Promise.all(i.data.sort((function(e,t){return e.level-t.level})).map((function(t,i){return e.asyncWorker(t,i)})));case 3:e.levels=t.sent,t.next=7;break;case 6:e.$toast(i.message);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.$api.memberApi.getUserInfo().then((function(t){var i=t.data;0==t.error?e.userInfo=i:e.$toast(t.message)}))},methods:{scroll:function(e){var t=this;this.scrolling=!0,clearTimeout(this.bar2),this.bar2=setTimeout((function(){t.scrollTo=e.detail.scrollLeft,t.scrolling=!1}),34)},clickItem:function(e){clearTimeout(this.bar2),this.currentLevel=this.levels[e],this.scrollTo=e*l},asyncWorker:function(e,t){var i=this;return new Promise(function(){var o=(0,n.default)(regeneratorRuntime.mark((function o(n,a){var s;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if("3"!==e.update_condition){o.next=6;break}return o.next=3,i.goodList(e.goods_ids);case 3:s=o.sent,o.next=7;break;case 6:s=[];case 7:n({level:e.level,index:t,level_name:e.level_name,level_id:e.id,demon:{demon:"1"===e.is_default?"系统默认会员等级。":"0"===e.update_condition?"商城用户不可自动升级成为该等级下的用户。":"".concat(e.update_text,"可升级到该等级(").concat(e.level_name,")，可享受").concat(parseFloat(e.discount),"折权益哦"),update_condition:e.update_condition,update_text:"1"===e.is_default?"无":"0"===e.update_condition?"不自动升级":e.update_text,is_discount:e.is_discount,discount:parseFloat(e.discount),goodsList:s}});case 8:case"end":return o.stop()}}),o)})));return function(e,t){return o.apply(this,arguments)}}())},goodList:function(e){var t=this;return new Promise((function(i,o){t.$api.goodApi.goodList({id:e}).then((function(e){0===e.error?i(e.list):i([])}))}))}},beforeDestroy:function(){clearInterval(this.bar)}};t.default=r},"479c":function(e,t,i){var o=i("a0d8");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("1136f1ab",o,!0,{sourceMap:!1,shadowMode:!1})},"49ad":function(e,t,i){"use strict";i.r(t);var o=i("cdb1"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(a);t["default"]=n.a},"4b78":function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 开店星新零售管理系统\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\n * @author 青岛开店星信息技术有限公司\n * @link https://www.kaidianxing.com\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\n * @copyright 版权归青岛开店星信息技术有限公司所有\n * @warning Unauthorized deletion of copyright information is prohibited.\n * @warning 未经许可禁止私自删除版权信息\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.goods-info-box .loading[data-v-18c0454e]{display:block;height:0;opacity:0}.goods-info-box.two-lines[data-v-18c0454e]{-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.goods-info-box.two-lines .goods-card-item[data-v-18c0454e]{width:%?344?%;margin-bottom:%?16?%;background-color:#fff;border-radius:%?12?%;box-sizing:border-box}.goods-info-box.two-lines .goods-card-item .label-box[data-v-18c0454e]{position:relative}.goods-info-box.two-lines .goods-card-item.line[data-v-18c0454e]::after{content:"";border:0}.goods-info-box.two-lines .goods-card-item .goods-info[data-v-18c0454e]{padding:%?16?%;height:%?204?%;box-sizing:border-box}.goods-info-box.two-lines .goods-card-item .goods-info .goods-title[data-v-18c0454e]{height:%?130?%}.goods-info-box.two-lines .goods-card-item .goods-img[data-v-18c0454e]{width:%?344?%;height:%?344?%;background-repeat:no-repeat;background-size:cover}.goods-info-box.two-lines .goods-card-item .goods-img .goods-img-img[data-v-18c0454e]{width:%?344?%;height:%?344?%}.goods-info-box.two-lines .goods-card-item .deposit[data-v-18c0454e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?8?%}.goods-info-box.two-lines .goods-card-item .deposit .deposit-text[data-v-18c0454e]{width:%?74?%;height:%?38?%;font-size:%?24?%;border-radius:%?20?% 0 0 %?20?%;background-color:#ff3c29;color:#fff;text-align:center}.goods-info-box.two-lines .goods-card-item .deposit .deposit-price[data-v-18c0454e]{padding:0 %?16?%;height:%?38?%;font-size:%?24?%;border-radius:0 %?20?% %?20?% 0;background-color:#fff;color:#ff3c29;border:1px solid #ff3c29}.goods-info-box.two-lines .goods-card-item .buy-btn-box[data-v-18c0454e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.goods-info-box.two-lines .goods-card-item .buy-btn-box .btn[data-v-18c0454e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?16?%;height:%?54?%;margin:0;border-radius:%?30?%;border:1px solid #ff3c29}.goods-info-box.two-lines .goods-card-item .buy-btn-box .btn .buybtn[data-v-18c0454e]{margin-right:%?8?%;font-size:%?24?%;line-height:%?34?%;color:#ff3c29}.goods-info-box.two-lines .goods-card-item .buy-btn-box .btn .iconfont-m-[data-v-18c0454e]{font-size:%?24?%;color:#ff3c29}.goods-info-box.two-lines .goods-card-item .sub-title[data-v-18c0454e]{height:%?50?%}.commision-money[data-v-18c0454e]{position:absolute;bottom:0;left:0;z-index:999;width:100%;height:%?42?%;font-size:%?20?%;line-height:%?42?%;text-align:center;color:#fff;background:-webkit-linear-gradient(278.34deg,#ff3c29,#ff6f29 94.38%);background:linear-gradient(171.66deg,#ff3c29,#ff6f29 94.38%)}.goods-card-item .goods-card-inner .goods-info .price.bargaining[data-v-18c0454e]{font-size:%?28?%}',""]),e.exports=t},5182:function(e,t,i){"use strict";i.r(t);var o=i("30f5"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(a);t["default"]=n.a},"571e":function(e,t,i){"use strict";i.r(t);var o=i("2fa9"),n=i("49ad");for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("b099");var s,l=i("f0c5"),r=Object(l["a"])(n["default"],o["b"],o["c"],!1,null,"18c0454e",null,!1,o["a"],s);t["default"]=r.exports},6313:function(e,t,i){"use strict";i.r(t);var o=i("c360"),n=i("5182");for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("081e");var s,l=i("f0c5"),r=Object(l["a"])(n["default"],o["b"],o["c"],!1,null,"557a02e6",null,!1,o["a"],s);t["default"]=r.exports},a0d8:function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 开店星新零售管理系统\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\n * @author 青岛开店星信息技术有限公司\n * @link https://www.kaidianxing.com\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\n * @copyright 版权归青岛开店星信息技术有限公司所有\n * @warning Unauthorized deletion of copyright information is prohibited.\n * @warning 未经许可禁止私自删除版权信息\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.scroll-view[data-v-557a02e6] ::-webkit-scrollbar{width:0;height:0;background-color:initial}.level-demon[data-v-557a02e6]{width:100%;height:100vh;position:absolute;top:0;bottom:0;left:0}.level-demon .page-bg[data-v-557a02e6]{position:absolute;width:100%;height:100%;top:0;left:0}.level-demon .avart[data-v-557a02e6]{position:relative;z-index:10;width:%?100?%;height:%?100?%;display:block;border-radius:50%;margin:%?48?% auto %?16?%}.level-demon .info[data-v-557a02e6]{text-align:center;margin:0 auto %?64?%;position:relative;color:#fff}.level-demon .info .name[data-v-557a02e6]{line-height:%?40?%}.level-demon .demon[data-v-557a02e6]{width:auto;height:calc(100vh - %?450?%);height:calc(100vh - %?538?%);position:relative;border-radius:%?12?%;background:#fff;padding-top:%?2?%;margin-left:%?24?%;margin-right:%?24?%;margin-bottom:%?32?%;padding-top:%?32?%;padding-bottom:%?32?%;box-sizing:border-box}.level-demon .demon[data-v-557a02e6]::before{content:"";width:%?20?%;height:%?20?%;background:#fff;position:absolute;top:%?-10?%;left:0;right:0;margin:0 auto;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.level-demon .demon .title[data-v-557a02e6]{height:%?108?%;font-size:%?32?%;line-height:%?32?%;padding:%?38?% %?48?%;border-bottom:%?1?% solid #e6e7eb;color:#212121;font-weight:700}.level-demon .demon .body[data-v-557a02e6]{padding-left:%?48?%}.level-demon .demon .body > div:nth-child(1) .body-title[data-v-557a02e6]{margin-top:0}.level-demon .demon .body > div:nth-child(3) .body-content[data-v-557a02e6]{padding-bottom:%?16?%}.level-demon .demon .body .body-title[data-v-557a02e6]{font-size:%?32?%;line-height:%?44?%;margin:%?32?% 0 %?16?% 0;color:#212121;font-weight:700}.level-demon .demon .body .body-content[data-v-557a02e6]{font-size:%?24?%;line-height:%?34?%;border-bottom:%?1?% solid #e6e7eb;padding-right:%?48?%;padding-bottom:%?32?%;color:#969696}.level-demon .demon .body .goods-list[data-v-557a02e6]{padding-right:%?48?%}.level-demon .demon .body .goods-list[data-v-557a02e6] .goods-card-item{padding-top:%?16?%;padding-bottom:%?16?%}.level-demon .demon .body .goods-list li[data-v-557a02e6]:last-child .goods-card-item:after{border-bottom:none}.level-demon .demon .key[data-v-557a02e6]{color:#ff3c29}.level-demon .commonVip[data-v-557a02e6]{padding-top:%?128?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.level-demon .commonVip .vip-level[data-v-557a02e6]{margin-bottom:%?32?%;width:%?200?%;height:%?200?%}.level-demon .commonVip .common-demon[data-v-557a02e6]{font-size:%?24?%;line-height:%?34?%;text-align:center;color:#969696}.level-demon[data-v-557a02e6] .levels-scroll{width:100%}.level-demon[data-v-557a02e6] .levels-scroll ._ul{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.level-demon[data-v-557a02e6] .levels-scroll .level{width:%?270?%;height:%?150?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;color:#fff}.level-demon[data-v-557a02e6] .levels-scroll .level .name{font-size:%?24?%;line-height:%?34?%;-webkit-transform:translate(-53%);transform:translate(-53%);text-align:center;margin-bottom:%?22?%;white-space:nowrap}.level-demon[data-v-557a02e6] .levels-scroll .level .name.current{color:#ebbe59;line-height:%?36?%}.level-demon[data-v-557a02e6] .levels-scroll .level .limit{font-size:%?24?%;line-height:%?34?%;-webkit-transform:translate(-50%);transform:translate(-50%);text-align:center;padding:%?28?% 0 %?22?%}.level-demon[data-v-557a02e6] .levels-scroll .level .line{width:%?270?%;height:%?4?%;background:#969696;position:relative}.level-demon[data-v-557a02e6] .levels-scroll .level .line .dot{width:%?16?%;height:%?16?%;background:#969696;border-radius:50%;top:0;left:0;-webkit-transform:translate(-100%,-35%);transform:translate(-100%,-35%)}.level-demon[data-v-557a02e6] .levels-scroll .level .line .dot.active{background:#ebbe59}.level-demon[data-v-557a02e6] .levels-scroll .level .line.last-child{width:0}.level-demon[data-v-557a02e6] .levels-scroll .level .line.active{background:#ebbe59}.level-demon[data-v-557a02e6] .levels-scroll .level.first{width:%?380?%}.level-demon[data-v-557a02e6] .levels-scroll .level.last{width:%?110?%}.level-demon[data-v-557a02e6] .levels-scroll .level.curIndex .name{-webkit-transform:translate(-53%,-10%);transform:translate(-53%,-10%);font-size:%?32?%}',""]),e.exports=t},a64f:function(e,t,i){(function(e){var o=i("288e");i("8e6e"),i("ac6a"),i("456d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("28a5");var n=o(i("bd86")),a=i("2f62"),s=o(i("fead")),l=(o(i("b531")),i("3014"));function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){(0,n.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var c={created:function(){this.startTime=+new Date},data:function(){return{loadingFlg:0}},watch:{isSkeleton:function(e){e||++this.loadingFlg}},mounted:function(){e.error("组建的渲染时间："+this.__route__+"："+(+new Date-this.startTime))},computed:d(d({},(0,a.mapGetters)("loading",["isSkeleton"])),(0,a.mapState)("setting",{shareTitle:function(e){var t,i;return(null===(t=e.systemSetting)||void 0===t||null===(i=t.share)||void 0===i?void 0:i.title)||""},shareDesc:function(e){var t,i;return(null===(t=e.systemSetting)||void 0===t||null===(i=t.share)||void 0===i?void 0:i.description)||""},shareLogo:function(e){var t,i;return null===(t=e.systemSetting)||void 0===t||null===(i=t.share)||void 0===i?void 0:i.logo}})),methods:{handlerOptions:function(e){if(null!==e&&void 0!==e&&e.scene){for(var t=decodeURIComponent(decodeURIComponent(null===e||void 0===e?void 0:e.scene)).split("&"),i={},o=0;o<t.length;o++){var n=t[o].split("=");i[n[0]]=n[1]}null!==i&&void 0!==i&&i.inviter_id&&l.sessionStorage.setItem("inviter-id",i.inviter_id)}}},onPullDownRefresh:function(){var e=this;"function"==typeof this.pullDownRefresh&&this.pullDownRefresh(),setTimeout((function(){e.$closePageLoading()}),2e3)},onLoad:function(e){this.showTabbar=!0},onShow:function(){var e,t,i;uni.hideLoading(),s.default.setNavigationBarColor(this.$Route),this.$decorator.getPage(this.$Route.path).onLoad();var o,n,a,r,d=this.$Route.query;(null!==d&&void 0!==d&&d.inviter_id&&l.sessionStorage.setItem("inviter-id",d.inviter_id),this.$decorator.getDecorateModel({pagePath:this.$Route.path,otherdata:d}),null!==(e=this.pageInfo)&&void 0!==e&&e.gotop&&null!==(t=this.pageInfo.gotop.params)&&void 0!==t&&t.scrollTop)?this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:(null===(o=this.pageInfo.gotop)||void 0===o||null===(n=o.params)||void 0===n?void 0:n.scrollTop)>=(null===(a=this.pageInfo.gotop)||void 0===a||null===(r=a.params)||void 0===r?void 0:r.gotopheight)}},"pagemixin/onshow1"):null!==(i=this.pageInfo)&&void 0!==i&&i.gotop&&this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:!1,params:{scrolltop:0}}},"pagemixin/onshow2")},onHide:function(){this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:!1}},"pagemixin/onhide"),this.$closePageLoading()},onPageScroll:function(e){this.$decorator.getModule("gotop").onPageScroll(e,this.$Route)}};t.default=c}).call(this,i("5a52")["default"])},b099:function(e,t,i){"use strict";var o=i("12c6"),n=i.n(o);n.a},c360:function(e,t,i){"use strict";var o;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return o}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("page-box",[i("div",{staticClass:"level-demon"},[i("img",{staticClass:"page-bg",attrs:{src:e.$utils.staticMediaUrl("level-bg.png"),alt:""}}),i("img",{staticClass:"avart",attrs:{"lazy-load":!0,mode:"aspectFill",src:e.$utils.mediaUrl(e.userInfo.avatar,e.$utils.staticMediaUrl("decorate/gotop.png")),alt:""}}),i("div",{staticClass:"info"},[i("p",{staticClass:"name"},[e._v(e._s(e.userInfo?e.userInfo.nickname:""))])]),i("v-uni-scroll-view",{staticClass:"levels-scroll scroll-view",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":e.scrollTo},on:{scroll:function(t){arguments[0]=t=e.$handleEvent(t),e.scroll.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"_ul"},[i("v-uni-view",{staticClass:"level first"}),e._l(e.levels,(function(t,o){return i("v-uni-view",{key:o,staticClass:"level",class:{myLevel:e.myLevel.level_id==t.level_id,curIndex:e.currentLevel.index==o},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickItem(o)}}},[i("v-uni-view",{staticClass:"name",class:{current:e.myLevel.level_id==t.level_id}},[e._v(e._s(t.level_name))]),i("v-uni-view",{staticClass:"line",class:{"last-child":o==e.levels.length-1,active:t.index<e.myLevel.index}},[i("v-uni-view",{staticClass:"dot",class:{active:t.index<=e.myLevel.index}})],1),e.myLevel.level_id==t.level_id?i("v-uni-view",{staticClass:"limit"},[e._v("当前等级")]):e._e()],1)})),i("v-uni-view",{staticClass:"level last"})],2)],1),i("v-uni-scroll-view",{staticClass:"demon scroll-view",attrs:{"scroll-y":!0}},["1"===e.currentLevel.demon.is_discount?i("div",{staticClass:"body"},[i("div",[i("p",{staticClass:"body-title"},[e._v("等级说明")]),i("p",{staticClass:"body-content"},[e._v(e._s(e.currentLevel.demon.demon))])]),i("div",[i("p",{staticClass:"body-title"},[e._v("等级权益")]),i("p",{staticClass:"body-content"},[e._v(e._s(e.currentLevel.level_name)+"会员购买商品"),i("span",{staticClass:"key"},[e._v(e._s(e.currentLevel.demon.discount)+"折")])])]),i("div",[i("p",{staticClass:"body-title"},[e._v("升级条件")]),i("p",{staticClass:"body-content",staticStyle:{border:"none"}},[e._v(e._s(e.currentLevel.demon.update_text))]),"3"===e.currentLevel.demon.update_condition?i("div",{staticClass:"goods-list"},[i("ul",e._l(e.currentLevel.demon.goodsList,(function(e,t){return i("li",{key:t},[i("goods-info",{attrs:{goodsData:e,type:"applyGoods"}})],1)})),0)]):e._e()])]):i("div",{staticClass:"commonVip"},[i("img",{staticClass:"vip-level",attrs:{src:e.$utils.staticMediaUrl("default/vip-level.png"),alt:""}}),i("p",{staticClass:"common-demon"},[e._v("当前等级没有任何优惠")])])])],1)])},a=[]},cdb1:function(e,t,i){var o=i("288e");i("8e6e"),i("ac6a"),i("456d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i("bd86")),a=i("eab7"),s=i("2f62");function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){(0,n.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var d={name:"GoodsInfo",props:{goodsData:{type:Object,default:function(){}},show_style:{type:Boolean,default:!1},isAddIcon:{type:Boolean,default:!1},quickPurchase:{type:Boolean,default:!1}},data:function(){return{loading:!0,preloading:!0}},computed:r(r({},(0,s.mapState)("setting",{sale_out:function(e){var t,i;return(null===(t=e.systemSetting)||void 0===t||null===(i=t.basic)||void 0===i?void 0:i.sale_out)||""}})),{},{getSoldOutIcon:function(){return this.sale_out?this.$utils.mediaUrl(this.sale_out):this.$utils.staticMediaUrl("decorate/sale_out.png")},getLoadingSrc:function(){var e,t;return null!==(e=this.$store.state.setting.systemSetting)&&void 0!==e&&null!==(t=e.basic)&&void 0!==t&&t.loading?this.$store.state.setting.cacheLoadingImg||this.$utils.mediaUrl(this.$store.state.setting.systemSetting.basic.loading):this.$utils.staticMediaUrl("decorate/goods_col2.png")},getActName:function(){return this.goodsData.activities?(0,a.getActivityName)(this.goodsData.activities):""},getSeckillPrice:function(){if("1"==this.goodsData.has_option){var e,t,i=(null===(e=this.goodsData.activities)||void 0===e||null===(t=e.seckill)||void 0===t?void 0:t.price_range)||{},o=i.min_price;return"".concat(o)}var n,a,s,l;return null===(n=this.goodsData)||void 0===n||null===(a=n.activities)||void 0===a||null===(s=a.seckill)||void 0===s||null===(l=s.goods_info[0])||void 0===l?void 0:l.activity_price},backgroundImage:function(){return"background-image:url(".concat(this.$utils.staticMediaUrl("decorate/goods_col2.png"),")")}}),mounted:function(){var e=this;setTimeout((function(){e.preloading=!1}),3e3)},methods:{loaded:function(e){this.loading=!1},addCart:function(){this.quickPurchase?this.$emit("custom-event",{type:"addCart",data:{goods_id:this.goodsData.id}}):this.toDetail(this.goodsData.id)},toDetail:function(e){this.$Router.auto({path:"/kdxGoods/detail/index",query:{goods_id:e}})}},filters:{formatMoney:function(e){return"number"===typeof e||"string"===typeof e&&""!==e.trim()?e>=1e4?parseFloat(e/1e4)+"万":parseFloat(e):0}}};t.default=d}}]);