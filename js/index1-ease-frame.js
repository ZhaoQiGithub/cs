window.onload=function(){
var oHeadNav=document.getElementById("head-nav");
var oHeadVip=document.getElementById("head-vip");
var oNavLi=getByClass(oHeadNav,"navLi")[0];
var oVipLi=getByClass(oHeadVip,"vip-service")[0];
var oNavDl=document.getElementById("head-navNav");
var oVipDl=document.getElementById("vip-service");
var oContent=document.getElementById("content");
var oContNav=getByClass(oContent,"cont_nav")[0];
var oNavHover=getByClass(oContent,"nav_hover")[0];
var oNavNav=getByClass(oContNav,"nav_nav")[0];
window.onscroll=function(){
	var oTop=0;
	oTop=document.documentElement.scrollTop||document.body.scrollTop;
	var oA_bg=getByClass(oContNav,"a_bg")[0];
	var oContLiA=oNavNav.getElementsByTagName("a");
	var oContLiSpan=oNavNav.getElementsByTagName("span");
	if(oTop>=70){
		// alert();
		oContent.style.height="40px";
		oContent.style.position="fixed";
		oContent.style.zIndex="99";
		oContent.style.top="0";
		oContent.style.left="0";
		oContent.style.transition="all 0.3s";
		oA_bg.style.width="100px";
		oA_bg.style.height="28px";
		oA_bg.style.marginTop="5px";
		oNavHover.style.top="40px";
		for(var i=0;i<oContLiA.length;i++){
			oContLiA[i].style.lineHeight="40px";
			oContLiSpan[i].style.fontSize="16px";
		}
	}else{
		oContent.style.height="90px";
		oContent.style.position="absolute";
		oContent.style.zIndex="1";
		oContent.style.top="40px";
		oContent.style.left="0";
		oContent.style.transition="all 0.3s";
		oA_bg.style.width="152px";
		oA_bg.style.height="42px";
		oA_bg.style.marginTop="23px";
		oNavHover.style.top="90px";
		for(var i=0;i<oContLiA.length;i++){
			oContLiA[i].style.lineHeight="90px";
			oContLiSpan[i].style.fontSize="18px";
		}
	}
}
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

oNavNav.onmouseover=function(){
	startMove(oNavHover,'opacity',100,function(){
		startMove(oNavHover,'height',180);
		oNavHover.style.display="block";
	});
		
}
oNavNav.onmouseout=function(){
	startMove(oNavHover,'height',0,function(){
		startMove(oNavHover,'opacity',0);
		oNavHover.style.display="none";
	});
		
}
oNavHover.onmouseover=function(){
	startMove(oNavHover,'opacity',100,function(){
		startMove(oNavHover,'height',180);
		oNavHover.style.display="block";
	});
		
}
oNavHover .onmouseout=function(){
	startMove(oNavHover,'height',0,function(){
		startMove(oNavHover,'opacity',0);
		oNavHover.style.display="none";
	});
		
}


var timer=null;
var iNow=0;
var oTab=document.getElementById("tab");
var tabUl=oTab.getElementsByTagName("ul")[0];
var tabLi=tabUl.getElementsByTagName("li");
var	oRun=document.getElementById("run");
var orunA=oRun.getElementsByTagName("a");
tabLi[0].style.opacity="1";
orunA[0].className="tabOn";
autoPlay();
function autoPlay(){
	clearInterval(timer);
	timer=setInterval(function(){
		iNow++;
		if(iNow==orunA.length){
			iNow=0;
		}
		tab();
	},4000);
}
for(var h=0;h<orunA.length;h++){
	orunA[h].index=h;
	orunA[h].onclick=function(){
		for(var j=0;j<orunA.length;j++){
			orunA[j].className="";
			startMove1(tabLi[j],"opacity","0");
		}
		this.className="tabOn";
		startMove1(tabLi[this.index],"opacity","100");
	}
}
function tab(){
		for(var j=0;j<orunA.length;j++){
			orunA[j].className="";
			startMove1(tabLi[j],"opacity","0");
		}
		orunA[iNow].className="tabOn";
		startMove1(tabLi[iNow],"opacity","100");
	}


var oNews=document.getElementById("news");
var oNewNav=getByClass(oNews,"newNav")[0];
var oNewNavA=oNewNav.getElementsByTagName("a");
var oNewNavP=oNewNav.getElementsByTagName("p");
var oNewsList=getByClass(oNews,"newsList")[0];
var oNewsUl=oNewsList.getElementsByTagName("ul");
oNewsUl[0].style.display="block";
oNewNavP[0].className="borderOn";
for(var numA=0;numA<oNewNavA.length-1;numA++){
	oNewNavA[numA].index=numA;
	oNewNavA[numA].onclick=function(){
		for(var numUl=0;numUl<oNewNavA.length-1;numUl++){
			oNewsUl[numUl].style.display="none"
			oNewNavP[numUl].className="";
		}
		oNewsUl[this.index].style.display="block";
		oNewNavP[this.index].className="borderOn";
	}

}


var oNavObj=document.getElementById("navObj");
var oNavMsg=document.getElementById("navMsg");
var oNavObjA=oNavObj.getElementsByTagName("a");
var oNavMsgLi=oNavMsg.getElementsByTagName("li");
var iSpeed=0;
var timer=null;
oNavMsgLi[0].style.left="20px";
for(var numObj=0;numObj<oNavObjA.length;numObj++){
	
	oNavObjA[numObj].index=numObj;
	oNavObjA[numObj].onclick=function(){
		for(var numobj=0;numobj<oNavObjA.length;numobj++ ){
			oNavObjA[numobj].style.color="#aab9e5";
			oNavMsgLi[numobj].style.left="-255px";
		}	
		this.style.color="#e1e9ff";
		var p=this.index;
		clearInterval(timer);
		timer=setInterval(function(){
			iSpeed+=(20-oNavMsgLi[p].offsetLeft)/100;
			iSpeed*=0.9;
			oNavMsgLi[p].style.left=oNavMsgLi[p].offsetLeft+iSpeed+"px";
			console.log(oNavMsgLi[p].style.left);
		},7);
	
	}
}


var oChoice=document.getElementById("choice");
var oCtTr=getByClass(oChoice,"ctTr")[0];
var oCtTrA=oCtTr.getElementsByTagName("a");
var oPlayerL=getByClass(oChoice,"playerL");
var oPlayerPic=getByClass(oChoice,"playerPic");
var iSpeedLi=0;
var iSpeedPic=0;
oPlayerL[0].style.left="20px";
oPlayerPic[0].style.left="0";
oCtTrA[0].style.color="#3b4771";
for(var cttrA=0;cttrA<2;cttrA++){
	oCtTrA[cttrA].index=cttrA;
	oCtTrA[cttrA].onclick=function(){
		for(var nA=0;nA<2;nA++){
			oCtTrA[nA].style.color="#868ca4";
			oPlayerL[nA].style.left="-130px";
			oPlayerPic[nA].style.left="220px";
		}
		this.style.color="#3b4771";
		var x=this.index;
		clearInterval(timer);
		timer=setInterval(function(){
			iSpeedLi+=(20-oPlayerL[x].offsetLeft)/100;
			iSpeedLi*=0.9;
			iSpeedPic+=(0-oPlayerPic[x].offsetLeft)/100;
			iSpeedPic*=0.9;
			oPlayerL[x].style.left=oPlayerL[x].offsetLeft+iSpeedLi+"px";
			oPlayerPic[x].style.left=oPlayerPic[x].offsetLeft+iSpeedPic+"px";
		},6);
	}
}

var oOnline=document.getElementById("online");
var oPartner=getByClass(oOnline,"partner")[0];
var oPartnerUl=oPartner.getElementsByTagName("ul")[0];
var oPartnerLi=oPartnerUl.getElementsByTagName("li");
var oPrev=getByClass(oOnline,"prev")[0];
var oNext=getByClass(oOnline,"next")[0];
var iSpeedPar=-1;
var timer=null
oPartnerUl.innerHTML += oPartnerUl.innerHTML;//将原有的Ul增长一倍,实现圆的循环
oPartnerUl.style.width=oPartnerLi.length*oPartnerLi[0].offsetWidth+"px";//计算出两组ul的实际宽度


timer=setInterval(function(){
		partnerMove();
	},12);
function partnerMove(){
	if(oPartnerUl.offsetLeft<-oPartnerUl.offsetWidth/2){
		oPartnerUl.style.left=0;
	}else if(oPartnerUl.offsetLeft>0){
		oPartnerUl.style.left=-oPartnerUl.offsetWidth/2+"px";
	}
	oPartnerUl.style.left=oPartnerUl.offsetLeft+iSpeedPar+"px";
}
oPartnerUl.onmouseover=function(){
		clearInterval(timer);
	}
oPartnerUl.onmouseout=function(){
	timer=setInterval(function(){
	partnerMove();
	},10);
}
oPrev.onclick=function(){
		iSpeedPar=-1;
		
	}
oNext.onclick=function(){
		iSpeedPar=1;
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
		},8);
	}
	function startMove1(obj,attr,iTarget,fn){//2.缓动框架
		
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
		},50);
	}



}