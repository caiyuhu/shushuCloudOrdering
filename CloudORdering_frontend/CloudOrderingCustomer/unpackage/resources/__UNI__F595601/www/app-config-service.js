
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/center/index","pages/login/login","pages/orders/orders","pages/search/search","pages/searchDetail/searchDetail","pages/vendor/vendor","pages/submitOrder/submitOrder","pages/paySuccess/paySuccess"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uView","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#232629","selectedColor":"#232629","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tabBarImage/index.png","selectedIconPath":"static/tabBarImage/index-selected.png","text":"首页"},{"pagePath":"pages/orders/orders","iconPath":"static/tabBarImage/order.png","selectedIconPath":"static/tabBarImage/order-selected.png","text":"订单"},{"pagePath":"pages/center/index","iconPath":"static/tabBarImage/center.png","selectedIconPath":"static/tabBarImage/center-selected.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"CloundOrdering","compilerVersion":"3.4.7","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":true}},{"path":"/pages/center/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"用户中心","enablePullDownRefresh":true}},{"path":"/pages/login/login","meta":{},"window":{"enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/orders/orders","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"订单","enablePullDownRefresh":true}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/searchDetail/searchDetail","meta":{},"window":{"navigationBarTitleText":"","navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/vendor/vendor","meta":{},"window":{"navigationBarTitleText":"","navigationStyle":"custom","enablePullDownRefresh":true}},{"path":"/pages/submitOrder/submitOrder","meta":{},"window":{"navigationBarTitleText":"确认订单","enablePullDownRefresh":false}},{"path":"/pages/paySuccess/paySuccess","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":true,"navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});