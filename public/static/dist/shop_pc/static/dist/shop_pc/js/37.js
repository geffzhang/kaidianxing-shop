(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{1483:function(t,a,s){"use strict";s("949b")},"949b":function(t,a,s){},f26d:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t._self._c;return a("Header",{staticClass:"header"},[a("div",{staticClass:"header_main"},[a("div",{staticClass:"header_topNav"},[a("Container",[a("div",{staticClass:"header_topLeft"},[a("div",{staticClass:"header_welcome"},[t.ifLogin?[a("div",{staticClass:"flex header_collection",on:{click:t.collection}},[a("i",{staticClass:"iconfont icon-shoucang"}),a("span",[t._v(" 收藏本站")])])]:[t._v(" 欢迎 "),a("router-link",{attrs:{to:"/account/login"}},[t._v("登录")]),t._v(" "+t._s(t.pcTitle||"商城")+" ")]],2)]),a("div",{staticClass:"header_topRight navHover"},[t.ifLogin?a("div",{staticClass:"header_user"},[a("router-link",{staticClass:"navHover",attrs:{to:"/member"}},[t._v(t._s(t.userInfo.nickname||""))])],1):t._e(),t.ifLogin?a("div",{staticClass:"header_user"},[a("a",{staticClass:"navHover",on:{click:t.logOut}},[t._v("退出登录")])]):[a("div",{staticClass:"header_user"},[a("router-link",{staticClass:"navHover",attrs:{to:"/account/login"}},[t._v("请登录")])],1),a("div",{staticClass:"header_user"},[a("router-link",{staticClass:"navHover",attrs:{to:"/account/register"}},[t._v("注册有礼")])],1)],a("router-link",{staticClass:"navHover",attrs:{to:"/member/order"}},[t._v("我的订单 ")]),a("div",{staticClass:"header_cart"},[a("router-link",{staticClass:"navHover",attrs:{to:"/shoppingCart/index"}},[a("i",{staticClass:"iconfont icon-shuju-jiagou"}),t._v(" 购物车("+t._s(t.commonData.cart_count||"0")+") ")])],1)],2)])],1),a("div",{staticClass:"header_btNav"},[a("Container",[a("div",{staticClass:"flex"},[a("div",{staticClass:"header_logo"},[a("router-link",{attrs:{to:"/index"}},[a("img",{staticStyle:{width:"100px",height:"50px"},attrs:{alt:"",src:t.$utils.mediaUrl(t.commonData.logo)}})])],1),a("div",{staticClass:"header_navItem"},[a("ul",{staticClass:"flex"},t._l(t.commonData.topMenus,(function(s,e){return a("li",{key:e},[e<5?a("a",{on:{click:function(a){return t.toPages(s)}}},[t._v(t._s(s.name))]):t._e()])})),0)])]),a("div",{staticClass:"header_search"},[a("Input",{attrs:{placeholder:"搜索商品"},on:{"on-enter":t.toSearch},model:{value:t.searchVal,callback:function(a){t.searchVal=a},expression:"searchVal"}},[a("i",{staticClass:"iconfont icon-sousuo",attrs:{slot:"prefix"},slot:"prefix"}),a("Button",{attrs:{slot:"suffix"},on:{click:t.toSearch},slot:"suffix"},[t._v(" 搜索 ")])],1)],1)])],1)])])},o=[],i=s("2f62"),r={name:"main-header",computed:{...Object(i["c"])("login",{userInfo:t=>t.userInfo,login:t=>t.login}),...Object(i["c"])("common",{commonData:t=>t.commonData}),ifLogin(){return this.$store.state.login.isLogin}},watch:{},data(){return{topNavList:[],searchVal:""}},methods:{toPages(t){location.href=t.url||""},toSearch(){this.$router.push({path:"/categories/list",query:{search:this.searchVal}})},logOut(){this.$store.commit("login/setLogin",!1),this.$store.commit("login/setUserInfo"),localStorage.removeItem("userSessionId"),localStorage.removeItem("userLogin"),this.$router.replace("/account/login")},collection(){let t=window.origin;console.log(t,"url");try{window.external.addFavorite(t,"开店星商城")}catch(a){this.$Message.error("抱歉，您所使用的浏览器无法完成此操作。请使用快捷键Ctrl+D进行添加！")}}}},n=r,c=(s("1483"),s("2877")),l=Object(c["a"])(n,e,o,!1,null,"99f697be",null);a["default"]=l.exports}}]);