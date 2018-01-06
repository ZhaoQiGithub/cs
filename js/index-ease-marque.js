window.onload=function(){
var oBanner=document.getElementById("banner");
var oBanner_ul=getByClass(oBanner,'banner_img')[0].getElementsByTagName("ul")[0];
var oBanner_li=oBanner_ul.getElementsByTagName("li");
var timer=null;

oBanner_ul.innerHTML += oBanner_ul.innerHTML;
oBanner_ul.style.height=oBanner_li.length*oBanner_li.offsetHeight+"px";
timer=setInterval(function(){
	if(oBanner_ul.offsetTop<-oBanner_ul.offsetHeight/2){
		oBanner_ul.style.top=0;
	}
	oBanner_ul.style.top=oBanner_ul.offsetTop-270+"px";
},40);

var oHeadNav=document.getElementById("head-nav");
var oHeadVip=document.getElementById("head-vip");
var oNavLi=getByClass(oHeadNav,"navLi")[0];
var oVipLi=getByClass(oHeadVip,"vip-service")[0];
var oNavDl=document.getElementById("head-navNav");
var oVipDl=document.getElementById("vip-service");

oNavLi.onmouseover=function(){
	oNavDl.style.border="1px solid#BBBBBB";
	startMove(oNavDl,'opacity',100,function(){
		startMove(oNavDl,'height',180);
	});
}
oNavLi.onmouseout=function(){
	startMove(oNavDl,'height',0,function(){
		startMove(oNavDl,'opacity',0);
	});

}
oVipLi.onmouseover=function(){
	oVipDl.style.border="1px solid#BBBBBB";
	startMove(oVipDl,'opacity',100,function(){
		startMove(oVipDl,'height',150);
	});
}
oVipLi.onmouseout=function(){
	startMove(oVipDl,'height',0,function(){
		startMove(oVipDl,'opacity',0);
	});
}

function getByClass(oParent,oClass){
	var allEle=document.getElementsByTagName("*");
	var aResult=[];

	for(var i=0;i<allEle.length;i++){
		if(allEle[i].className==oClass){
			aResult.push(allEle[i]);
		}

	}
	return aResult;
}

	function getStyle(obj,attr){//1.获取css内嵌样式中某个属性的值
		if(obj.currentStyle){//IE
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj,false)[attr];
		}
	}
//obj:元素名称, attr:属性, iTarget:目的地, fn:回调函数
	function startMove(obj,attr,iTarget,fn){//2.缓动框架
		
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var iCur=0;
			if(attr=="opacity"){
				iCur=parseInt(parseFloat(getStyle(obj,attr))*100);//原有的alpha
			}else{
				iCur=parseInt(getStyle(obj,attr));
			}

			var iSpeed=(iTarget-iCur)/8;
			iSpeed=iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed) ;//1.速度

			if(iTarget==iCur){//2.判断是否到达目的地
				clearInterval(obj.timer);
				if(fn) fn(); //停止后,执行回调函数.
			}else{
				if(attr=="opacity"){
					iCur += iSpeed;
					obj.style.opacity=iCur/100;
					obj.style.filter='alpha(opacity:'+iCur+')';
				}else{
					obj.style[attr]=iCur+iSpeed+"px";
				}				
			}
		},10);
	}


}