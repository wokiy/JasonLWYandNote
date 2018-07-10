## 移动端 pc端判断 
```
  $(function(){
 toMobile();
})
function toMobile(){
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad"; //ipad
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os"; //苹果系统
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc = sUserAgent.match(/ucbrowser/i) == "ucbrowser"; //UC浏览器
  var bIsAndroid = sUserAgent.match(/android/i) == "android"; //安卓系统
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce"; //微软掌上电脑
  var bIsQQ = sUserAgent.match(/qq/i) == "qq";//内置qq及QQ浏览器
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  var bIsIE = sUserAgent.match(/iemobile/i) == "iemobile";
  var bIsWx = sUserAgent.match(/MicroMessenger/i)=="micromessenger"//微信内置浏览器
    if (bIsIpad || bIsMidp  || bIsAndroid || bIsCE || bIsWM||bIsIE) {
        alert(sUserAgent);
    }else if (bIsIphoneOs) {
     if (bIsUc) {
        alert("uc");
     }else if (bIsQQ) {
        alert("qq");
     }else if (bIsWx) {
        alert("wx");
     }
   }else{
        }
}
```
