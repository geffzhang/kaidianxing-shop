(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19,32,33,34],{1758:function(t,i,s){},"245f":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"el-box"},[i("div",{staticClass:"title line2"},[t._v(" "+t._s(t.goodsDetail.title||"")+" ")]),i("p",{staticClass:"subTitle"},[i("span",{staticClass:"seckill"},[t._v("秒杀")]),t._v(" "+t._s(t.goodsDetail.sub_title||""))]),i("div",{staticClass:"price-box flex"},[i("div",{staticClass:"top-left"},[t.getPrice.length<10?i("p",[t._v(t._s(t.getPrice||""))]):i("p",{staticClass:"small"},[t._v(t._s(t.getPrice||""))])]),i("div",{staticClass:"top-right"},[i("div",{staticClass:"time-box"},[i("span",[t._v(t._s(t.timeTitle))]),i("div",{staticClass:"time-out"},t._l(t.countDownArr,(function(s,e){return i("div",{key:e},[s?i("div",{staticClass:"flex"},[i("span",[t._v(t._s(s))]),0===e?i("i",{staticClass:"day"},[t._v("天")]):0!=e&&e+1!=t.countDownArr.length?i("i",[t._v(":")]):t._e()]):t._e()])})),0)]),i("div",{staticClass:"sales"},[i("span",[t._v(t._s(t.goodsDetail.sales||"0"))]),i("p",[t._v("销量")])])])])])},a=[],o=s("01fe"),n={name:"seckill",props:{goodsDetail:{type:Object},actionsData:{type:Object},seckillInfo:{type:Object}},data(){return{countDownArr:[],timeTitle:"距离结束还剩",endTime:"",temp:null}},watch:{goodsDetail:{immediate:!0,handler:function(t){t&&this.getTimeOut()}},actionsData:{immediate:!0,handler:function(t){t&&console.log(t,"data")}}},computed:{hasOption(){return"1"==this.goodsDetail.has_option},getPrice(){if(this.actionsData.goods_id)return this.actionsData.activity?this.actionsData.activity.seckill.activity_price:this.actionsData.price;if(this.hasOption){let{min_price:t,max_price:i}=this.seckillInfo.price_range,s=`${this.formatMoney(t)}-${this.formatMoney(i)}`;return this.$utils.formartPrice(s)}var t;return this.formatMoney(null===(t=this.seckillInfo)||void 0===t?void 0:t.activity_price)}},methods:{formatMoney(t){return"number"===typeof t||"string"===typeof t&&""!==t.trim()?t>=1e4?parseFloat(t/1e4).toFixed(2)+"万":parseFloat(t).toFixed(2):0},getTimeOut(){clearInterval(this.temp);let t=new Date(this.seckillInfo.end_time).getTime(),i=new Date(this.seckillInfo.start_time).getTime(),s=(new Date).getTime();this.endTime=t-s,this.timeTitle=i>s?"距开始还剩":"距离结束还剩",i>s&&(this.timeTitle="距开始还剩",this.endTime=i-s),this.endTime<=0?this.countDownArr=[null,"00","00","00"]:(this.countDownArr=Object(o["countDownFun"])(this.endTime),this.temp=setInterval(()=>{this.endTime-=1e3,this.countDownArr=Object(o["countDownFun"])(this.endTime)},1e3))}},beforeDestroy(){clearInterval(this.temp)}},c=n,r=(s("3019"),s("2877")),l=Object(r["a"])(c,e,a,!1,null,"5100fb4e",null);i["default"]=l.exports},"2ece":function(t,i,s){"use strict";s("1758")},3019:function(t,i,s){"use strict";s("60df")},3430:function(t,i,s){},"3a10":function(t,i,s){"use strict";var e=s("4020");const a={getComment:(t,i)=>e["a"].get("/order/comment/list",t,i),confirm:(t,i)=>e["a"].post("/order/create/confirm",t,i),create:(t,i)=>e["a"].post("/order/create/index",t,i),allOrderList:(t,i)=>e["a"].get("/order/list/all",t,i),payOrderList:(t,i)=>e["a"].get("/order/list/pay",t,i),sendOrderList:(t,i)=>e["a"].get("/order/list/send",t,i),pickOrderList:(t,i)=>e["a"].get("/order/list/pick",t,i),finishOrderList:(t,i)=>e["a"].get("/order/list/finish",t,i),refundOrderList:(t,i)=>e["a"].get("/order/refund/list",t,i),orderDetail:(t,i)=>e["a"].get("/order/detail/index",t,i),orderPayList:(t,i)=>e["a"].get("/pay/index",t,i),orderPay:(t,i)=>e["a"].post("/pay/index/pay",t,i),orderPayCheck:(t,i)=>e["a"].post("/pay/index/check",t,i),orderGetTotal:t=>e["a"].post("/order/list/get-total",{},t),orderCancel:(t,i)=>e["a"].post("/order/op/cancel",t,i),orderDelete:(t,i)=>e["a"].post("/order/op/delete",t,i),orderFinish:(t,i)=>e["a"].post("/order/op/finish",t,i),getExpress:(t,i)=>e["a"].get("/order/detail/get-express",t,i),orderRefund:(t,i)=>e["a"].get("/order/refund",t,i),refundSubmit:(t,i)=>e["a"].post("/order/refund/submit",t,i),refundDetail:(t,i)=>e["a"].get("/order/refund/detail",t,i),refundCancel:(t,i)=>e["a"].get("/order/refund/cancel",t,i),getCommentList:(t,i)=>e["a"].get("/order/comment/wait-list",t,i),getCommentGoods:(t,i)=>e["a"].get("/order/comment/write-comment",t,i),submitComment:(t,i)=>e["a"].post("/order/comment/write-comment",t,i)};i["a"]=a},"60df":function(t,i,s){},"6d38":function(t,i,s){"use strict";s("3430")},7548:function(t,i,s){"use strict";s("c158")},b6da:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"el-box"},[i("div",{staticClass:"title"},[t._v(" "+t._s(t.goodsDetail.title||"")+" ")]),i("p",{staticClass:"subTitle"},[t._v(" "+t._s(t.goodsDetail.sub_title||""))]),i("div",{staticClass:"price-box flex"},[i("div",{staticClass:"top-left"},[t.actionsData.original_price>0||t.goodsDetail.original_price>0?i("span",[t._v("原价：￥"+t._s(t.actionsData.original_price||t.goodsDetail.original_price))]):t._e(),i("p",[t._v(t._s(t.getPrice))])]),t.goodsDetail.ext_field&&1==t.goodsDetail.ext_field.show_sales?i("div",{staticClass:"top-right"},[i("span",[t._v(t._s(t.goodsDetail.sales||"0"))]),i("p",[t._v("销量")])]):t._e()])])},a=[],o={name:"normal",props:["goodsDetail","actionsData"],computed:{hasOption(){return"1"==this.goodsDetail.has_option},getPrice(){if(this.actionsData.goods_id)return this.actionsData.price;if(this.hasOption){let{min_price:t,max_price:i}=this.goodsDetail,s=`${this.formatMoney(t)}-${this.formatMoney(i)}`;return this.$utils.formartPrice(s)}var t;return this.formatMoney(null===(t=this.goodsDetail)||void 0===t?void 0:t.price)}},methods:{formatMoney(t){return"number"===typeof t||"string"===typeof t&&""!==t.trim()?t>=1e4?parseFloat(t/1e4).toFixed(2)+"万":parseFloat(t).toFixed(2):0}}},n=o,c=(s("c44f"),s("2877")),r=Object(c["a"])(n,e,a,!1,null,"08bae731",null);i["default"]=r.exports},bbcb:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t._self._c;return i("div",{staticStyle:{"background-color":"#FFFFFF","min-height":"calc(100vh - 351px)"}},[i("div",{staticClass:"detail-line"}),i("Container",[i("div",{staticClass:"goods-box"},[i("div",{staticClass:"goods-top"},[i("div",{staticClass:"goods-swiper"},[i("div",{staticClass:"img-box"},[-1!=t.showIndexImg?i("img",{attrs:{src:t.$utils.mediaUrl(t.getDefaultImg),alt:""}}):i("video",{attrs:{controls:"controls",src:t.$utils.mediaUrl(t.goodsDetail.video),alt:""}})]),i("div",{staticClass:"swiper-li"},[i("div",{staticClass:"left-icon icon",on:{click:t.toLeft}},[i("Icon",{attrs:{type:"ios-arrow-forward"}})],1),i("ul",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],ref:"swiperBox"},[t.goodsDetail.video?i("li",{staticClass:"video-css",on:{mouseenter:function(i){return t.mouseenter(t.goodsDetail.video_thumb,-1)}}},[i("img",{class:[-1==t.showIndexImg?"active":""],attrs:{src:t.$utils.mediaUrl(t.getVideoThumb),alt:""}})]):t._e(),t._l(t.swiperList,(function(s,e){return i("li",{key:e,on:{mouseenter:function(i){return t.mouseenter(s,e)}}},[i("img",{class:[e==t.showIndexImg?"active":""],attrs:{src:t.$utils.mediaUrl(s),alt:""}})])}))],2),i("div",{staticClass:"right-icon icon",on:{click:t.toRight}},[i("Icon",{attrs:{type:"ios-arrow-forward"}})],1)]),i("div",{staticClass:"collect-box"},[i("div",{on:{click:t.clickFavorite}},[t.isFavorite?i("span",[i("i",{staticClass:"iconfont icon-yishoucang2"}),t._v("已收藏")]):i("span",[i("i",{staticClass:"iconfont icon-shoucang"}),t._v(" 收藏")])])])]),i("div",{staticClass:"goods-info"},["1"==t.goodsDetail.is_seckill?i("seckill",{attrs:{goodsDetail:t.goodsDetail,seckillInfo:t.seckillInfo,actionsData:t.actionsData}}):t.activity.member_price?i("vip",{attrs:{goodsDetail:t.goodsDetail,member_price:t.activity.member_price,actionsData:t.actionsData}}):i("normal",{attrs:{goodsDetail:t.goodsDetail,actionsData:t.actionsData}}),t.goodsDetail.is_seckill?i("div",{staticStyle:{height:"30px"}}):i("div",{staticClass:"coupon-box"},[i("div",{staticClass:"center flex"},[i("div",{staticClass:"center-left"},[t._v("优惠券")]),i("div",{staticClass:"center-right"},[i("ul",[t._l(t.goodsCoupon,(function(s,e){return[e<3?i("li",{key:e},[i("div",{staticClass:"flex"},["1"==s.coupon_sale_type?i("p",{staticClass:"name"},[t._v("满减券")]):i("p",{staticClass:"name"},[t._v("折扣券")]),i("span",{staticClass:"price"},[t._v(t._s(s.content||""))]),i("span",{staticClass:"time"},[t._v(t._s(s.time_content))])]),i("div",{staticClass:"get"},[s.can_receive_count>0||-1===s.can_receive_count?i("span",{staticClass:"isGet",on:{click:function(i){return t.getCoupon(s)}}},[t._v("领取")]):t._e(),s.can_receive_count>0?i("span",{staticStyle:{"margin-left":"5px"}},[t._v("( "+t._s(s.has_receive_count)+"/"+t._s(s.has_receive_count+s.can_receive_count)+" )")]):t._e(),-1===s.can_receive_count?i("span",{staticStyle:{"margin-left":"5px"}},[t._v("无限制")]):t._e(),"1"==s.is_has&&0===s.can_receive_count?i("span",[t._v("已领完")]):t._e()])]):t._e()]}))],2)])]),i("div",{staticClass:"bottom flex"},[i("div",{staticClass:"flex noselect",on:{click:t.showMoreCoupon}},[t._v(" 更多优惠 "),i("Icon",{class:[t.moreCoupon?"iconRotate":""],attrs:{type:"ios-arrow-down"}})],1),i("div",{staticClass:"more",class:[t.moreCoupon?"moreDown":""]},[i("div",{staticClass:"center-left"},[t._v(" ")]),i("div",{staticClass:"center-right"},[i("ul",[t._l(t.goodsCoupon,(function(s,e){return[e>=3?i("li",{key:e},[i("div",{staticClass:"flex"},["1"==s.coupon_sale_type?i("p",{staticClass:"name"},[t._v("满减券")]):i("p",{staticClass:"name"},[t._v("折扣券")]),i("span",{staticClass:"price"},[t._v(t._s(s.content||""))]),i("span",{staticClass:"time"},[t._v(t._s(s.time_content))])]),i("div",{staticClass:"get"},[s.can_receive_count>0||-1===s.can_receive_count?i("span",{staticClass:"isGet",on:{click:function(i){return t.getCoupon(s)}}},[t._v("领取")]):t._e(),s.can_receive_count>0?i("span",{staticStyle:{"margin-left":"5px"}},[t._v("( "+t._s(s.has_receive_count)+"/"+t._s(s.has_receive_count+s.can_receive_count)+" )")]):t._e(),-1===s.can_receive_count&&"0"==s.get_max_type?i("span",{staticStyle:{"margin-left":"5px"}},[t._v("无限制")]):t._e(),"1"==s.is_has&&0===s.can_receive_count?i("span",[t._v("已领完")]):t._e()])]):t._e()]}))],2)])])])]),i("div",{staticClass:"goods-specs"},["1"==t.goodsDetail.has_option?t._l(t.spec,(function(s,e){return i("div",{key:e,staticClass:"item flex"},[i("div",{staticClass:"name"},[t._v(t._s(s.title))]),i("div",{staticClass:"specs"},[i("ul",{staticClass:"flex"},[t._l(s.items,(function(s){return i("li",{key:s.id,class:[t.getItemClass(s.id),t.selectIds[e]==s.id?"active":""],on:{click:function(i){return t.clicktypeId(e,s.id)}}},[t._v(t._s(s.title)+" "),i("i",{directives:[{name:"show",rawName:"v-show",value:t.selectIds[e]==s.id,expression:"selectIds[index] == el.id"}],staticClass:"iconfont icon-a-chenggongde21"})])}))],2)])])})):t._e(),i("div",{staticClass:"item flex",staticStyle:{"padding-top":"10px"}},[i("div",{staticClass:"name"},[t._v("数量")]),i("div",{staticClass:"stepper"},[i("InputNumber",{attrs:{min:1,max:Number(t.stock),"controls-outside":""},model:{value:t.buyTotal,callback:function(i){t.buyTotal=i},expression:"buyTotal"}}),i("div",{staticClass:"inventory"},[t._v("（库存"+t._s(t.actionsData.stock||t.stock)+"件）")])],1)])],2),i("div",{staticClass:"class-shopping"},[t.goodsDetail.is_seckill?t._e():["0"==t.goodsDetail.type||"3"==t.goodsDetail.type?i("Button",{attrs:{disabled:t.stock<=0,type:"error"},on:{click:t.addShopping}},[t._v("加入购物车 ")]):t._e()],i("Button",{attrs:{disabled:t.actionsData.stock<=0||t.stock<=0},on:{click:t.buyGoods}},[t._v("立即购买")])],2)],1)]),i("div",{staticClass:"goods-bottom"},[i("div",{staticClass:"params-hd"},[i("div",{staticClass:"params-type flex"},[i("div",{class:[0===t.barIndex?"active":""],on:{click:function(i){return t.tabIndex(0)}}},[t._v("产品详情")]),i("div",{staticClass:"line"}),i("div",{class:[1===t.barIndex?"active":""],on:{click:function(i){return t.tabIndex(1)}}},[t._v(" 累计评论("+t._s(t.commentList.length||"0")+") ")])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.barIndex,expression:"barIndex === 0"}],staticClass:"goods-params"},[i("div",{domProps:{innerHTML:t._s(t.goodsDetail.content)}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:1===t.barIndex,expression:"barIndex === 1"}],staticClass:"goods-comment"},[i("div",{staticClass:"comment-list"},t._l(t.commentList,(function(s,e){return i("div",{key:e,staticClass:"item"},[i("div",{staticClass:"item-hd flex"},[i("div",{staticClass:"image"},[i("img",{attrs:{src:t.$utils.mediaUrl(s.avatar)}})]),i("div",{staticClass:"text"},[i("div",{staticClass:"flex name"},[t._v(" "+t._s(s.nickname||"")+" "),i("div",{staticClass:"star"},[i("Rate",{attrs:{disabled:""},model:{value:s.level,callback:function(i){t.$set(s,"level",i)},expression:"item.level"}})],1)]),i("div",{staticClass:"time"},[t._v(t._s(s.create_time||""))])])]),i("div",{staticClass:"item-bd"},[i("div",[t._v(t._s(s.content||""))]),"object"===typeof s.images?i("div",{staticClass:"image-wrapper"},t._l(s.images,(function(e,a){return i("div",{key:a,staticClass:"image",on:{click:function(i){return t.previewImg(!0,a,s.images)}}},[i("div",{staticClass:"el-image",staticStyle:{width:"auto",height:"54px"}},[i("img",{attrs:{src:t.$utils.mediaUrl(e)}})])])})),0):t._e(),s.reply_content?i("div",{staticClass:"reply"},[i("div",{staticClass:"item"},[i("span",[t._v("卖家回复：")]),t._v(t._s(s.reply_content)+" ")])]):t._e()])])})),0),0===t.commentList.length?i("div",{staticClass:"empty"},[i("EmptyPage",{attrs:{msg:"暂无评论～"}})],1):t._e()])])])]),i("PreviewImg",{directives:[{name:"show",rawName:"v-show",value:t.imageModal,expression:"imageModal"}],attrs:{imgList:t.previewList||[],currentIndex:t.imgcurrentIndex},on:{"on-close":function(i){return t.previewImg(!1)}}})],1)},a=[],o=(s("caad"),function(){var t=this,i=t._self._c;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"mask"}),i("span",{staticClass:"btn close",on:{click:t.close}},[i("Icon",{attrs:{type:"ios-close-circle-outline"}})],1),i("span",{staticClass:"btn prev",on:{click:t.prevImg}},[i("i",{staticClass:"iconfont icon-line-left"})]),i("span",{staticClass:"btn next",on:{click:t.nextImg}},[i("i",{staticClass:"iconfont icon-line-right"})]),i("div",{staticClass:"btn actions"},[i("div",{staticClass:"inner"},[i("i",{staticClass:"iconfont icon-tupianyulan-suoxiao",on:{click:t.scaleSmall}}),i("i",{staticClass:"iconfont icon-tupianyulan-fangda",on:{click:t.scaleBig}}),t.fullScreen?t._e():i("i",{staticClass:"iconfont icon-tupianyulan-quanping",on:{click:function(i){return t.changeFull(!0)}}}),t.fullScreen?i("i",{staticClass:"iconfont icon-tupianyulan-_",on:{click:function(i){return t.changeFull(!1)}}}):t._e(),i("i",{staticClass:"iconfont icon-tupianyulan-xuanzhuan-zuo",on:{click:t.rotateLeft}}),i("i",{staticClass:"iconfont icon-tupianyulan-xuanzhuan-you",on:{click:t.rotateRight}})])]),i("div",{staticClass:"canvas"},[i("img",{staticClass:"img",style:t.getStyle,attrs:{src:t.$utils.mediaUrl(t.imgList[t.current])}})])])}),n=[],c={props:{imgList:{type:Array,default:()=>[]},currentIndex:{type:Number,default:0}},data(){return{current:0,style:{scale:1,deg:0,left:0,top:0,height:90,width:90},fullScreen:!0}},computed:{getStyle(){let t={transform:`scale(${this.style.scale}) rotate(${this.style.deg}deg)`,marginLeft:this.style.left+"px",marginTop:this.style.top+"px"};return this.fullScreen||(t={...t,maxHeight:this.style.height+"%",maxWidth:this.style.width+"%"}),t}},watch:{currentIndex(t){this.current=t,this.initStyle()},current(){this.initStyle()}},mounted(){this.currentIndex&&(this.current=this.currentIndex),this.initStyle()},methods:{initStyle(){this.style={scale:1,deg:0,left:0,top:0,height:90,width:90}},prevImg(){0==this.current?this.current=this.imgList.length-1:this.current--},nextImg(){this.current<this.imgList.length-1?this.current++:this.current=0},scaleSmall(){this.style.scale>=.4&&(this.style.scale-=.2)},scaleBig(){this.style.scale<=5&&(this.style.scale+=.2)},changeFull(t){this.fullScreen=t},rotateLeft(){this.style.deg-=90},rotateRight(){this.style.deg+=90},close(){this.$emit("on-close"),this.$emit("on-change",this.current)}}},r=c,l=(s("6d38"),s("2877")),d=Object(l["a"])(r,o,n,!1,null,"44aa11ab",null),u=d.exports,h=s("b6da"),p=s("245f"),m=s("beea"),g=s("d084"),_=s("3a10"),v=s("fab2"),f={name:"detail",components:{PreviewImg:u,normal:h["default"],seckill:p["default"],vip:m["default"]},data(){return{isFavorite:!1,moreCoupon:!1,buyTotal:1,imageModal:!1,imgcurrentIndex:0,swiperList:[],goodsDetail:{},activity:{},seckillInfo:{},couponList:[],previewList:[],commentList:[],goodsCoupon:[],spec:[],options:[],stock:"",showIndexImg:0,scrollDistance:100,barIndex:0,commentTab:[{name:"全部",id:1},{name:"好评",id:2},{name:"中评",id:3},{name:"差评",id:3}],commentTabIndex:0,selectIds:[],actionsData:{},single_max_buy:"",single_min_buy:"",disabled:[]}},created(){this.getDetail()},methods:{getItemClass(t){return this.disabled.includes(t)?"disabled":""},async getCoupon(t){await this.checkLoginStatus(),v["a"].getCoupon({id:t.id},{hideSuccessTip:!0,success:t=>{0===t.error&&(this.$Message.success("领取成功"),this.getDetail())}})},showMoreCoupon(){this.moreCoupon=!this.moreCoupon},clicktypeId(t,i){this.$set(this.selectIds,t,i);let s=this.selectIds.join(",");this.options.hasOwnProperty(s)&&(this.actionsData=this.options[s])},getDetail(){g["a"].getDetail({id:this.$route.query.id||""},{hideSuccessTip:!0,success:t=>{var i,s,e,a,o,n,c;0===t.error&&(this.swiperList=(null===(i=t.data)||void 0===i||null===(s=i.goods)||void 0===s?void 0:s.thumb_all)||[],this.goodsDetail=t.data.goods||{},this.goodsDetail.video&&(this.showIndexImg=-1),this.activity=t.activity||{},this.seckillInfo=(null===(e=t.activity)||void 0===e?void 0:e.seckill)||{},this.single_max_buy=(null===(a=t.data.goods)||void 0===a||null===(o=a.ext_field)||void 0===o?void 0:o.single_max_buy)||"",this.single_min_buy=(null===(n=t.data.goods)||void 0===n||null===(c=n.ext_field)||void 0===c?void 0:c.single_min_buy)||"",this.goodsCoupon=t.goods_coupon,this.isFavorite=t.is_favorite,this.stock=t.data.goods.stock,"1"==t.data.goods.has_option&&this.getOption(),this.UpdateBasic(`${this.goodsDetail.title} - ${this.channelTitle}`))}}),_["a"].getComment({goods_id:this.$route.query.id||""},{hideSuccessTip:!0,success:t=>{0===t.error&&(t.list.forEach(t=>{t.level=Number(t.level)}),this.commentList=t.list)}})},getOption(){g["a"].getOption({goods_id:this.$route.query.id||""},{hideSuccessTip:!0,success:t=>{0===t.error&&(this.options=t.options,this.spec=t.spec)}})},clickFavorite(){g["a"].favorite({goods_id:this.$route.query.id,is_add:this.isFavorite?"0":"1"},{hideSuccessTip:!0,hideErrorTip:!0,success:t=>{0===t.error&&(this.getDetail(),this.isFavorite||this.$Message.success("收藏成功"))}})},async addShopping(){await this.checkLoginStatus(),"0"!=this.goodsDetail.has_option?this.actionsData.hasOwnProperty("goods_id")?g["a"].changeTotal({goods_id:this.actionsData.goods_id,option_id:this.actionsData.id,total:this.buyTotal,mode:1,is_activity_goods:0},{hideSuccessTip:!0,success:t=>{0===t.error&&(this.$store.dispatch("common/getCartCount"),this.$Message.success("加入购物车成功"))}}):this.$Message.warning("请选择商品规格"):g["a"].changeTotal({goods_id:this.$route.query.id||"",option_id:0,total:this.buyTotal,mode:1,is_activity_goods:0},{hideSuccessTip:!0,success:t=>{0===t.error&&(this.$store.dispatch("common/getCartCount"),this.$Message.success("加入购物车成功"))}})},async buyGoods(){if(await this.checkLoginStatus(),""!=this.single_max_buy&&this.buyTotal>this.single_max_buy)return void this.$Message.warning(`此商品最多购买${this.single_max_buy}件`);if(""!=this.single_min_buy&&this.buyTotal<this.single_min_buy)return void this.$Message.warning(`此商品最少购买${this.single_min_buy}件`);let t={goods_id:this.$route.query.id,option_id:0,total:this.buyTotal,type:this.goodsDetail.type};if("1"===this.goodsDetail.has_option){if(!this.actionsData.hasOwnProperty("goods_id"))return void this.$Message.warning("请选择商品规格");t.option_id=this.actionsData.id}this.$router.push({path:"/order/confirm",query:t})},previewImg(t,i,s){this.imgcurrentIndex=i,this.previewList=s,this.imageModal=t},changeComment(t){this.commentTabIndex=t},tabIndex(t){this.barIndex=t},toRight(){let t=this.scrollDistance,i=this.$refs.swiperBox.scrollLeft,s=Number(i)+t;this.$refs.swiperBox.scrollTo(s,0)},toLeft(){let t=this.scrollDistance,i=this.$refs.swiperBox.scrollLeft,s=Number(i)-t<0?0:Number(i)-t;this.$refs.swiperBox.scrollTo(s,0)},mouseenter(t,i){this.showIndexImg=i}},computed:{getVideoThumb(){let t="";return t=""!=this.goodsDetail.video_thumb?this.goodsDetail.video_thumb:this.swiperList[0],t},getDefaultImg(){return-1!=this.showIndexImg?this.swiperList[this.showIndexImg]:this.swiperList[0]}}},y=f,C=(s("7548"),Object(l["a"])(y,e,a,!1,null,"3f17bc63",null));i["default"]=C.exports},beea:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"el-box"},[i("div",{staticClass:"title"},[t._v(" "+t._s(t.goodsDetail.title||"")+" ")]),i("p",{staticClass:"subTitle"},[t._v(" "+t._s(t.goodsDetail.sub_title||""))]),i("div",{staticClass:"price-box flex"},[i("div",{staticClass:"top-left"},[t.actionsData.original_price>0||t.goodsDetail.original_price>0?i("span",[t._v("原价：￥"+t._s(t.actionsData.original_price||t.goodsDetail.original_price))]):t._e(),i("p",[t._v(t._s(t.getPrice))])]),i("div",{staticClass:"top-right"},[i("span",[t._v(t._s(t.goodsDetail.sales||"0"))]),i("p",[t._v("销量")])])])])},a=[],o={name:"vip",props:["goodsDetail","actionsData","member_price"],computed:{hasOption(){return"1"==this.goodsDetail.has_option},getPrice(){if(this.actionsData.goods_id)return console.log(this.actionsData),this.actionsData.activity?this.actionsData.activity.member_price.min_price:this.actionsData.price;if(this.hasOption){let{min_price:t,max_price:i}=this.member_price,s=`${this.formatMoney(t)}-${this.formatMoney(i)}`;return this.$utils.formartPrice(s)}var t;return this.formatMoney(null===(t=this.member_price)||void 0===t?void 0:t.min_price)}},methods:{formatMoney(t){return"number"===typeof t||"string"===typeof t&&""!==t.trim()?t>=1e4?parseFloat(t/1e4).toFixed(2)+"万":parseFloat(t).toFixed(2):0}}},n=o,c=(s("2ece"),s("2877")),r=Object(c["a"])(n,e,a,!1,null,"9f2fd10a",null);i["default"]=r.exports},c158:function(t,i,s){},c44f:function(t,i,s){"use strict";s("c781")},c781:function(t,i,s){}}]);