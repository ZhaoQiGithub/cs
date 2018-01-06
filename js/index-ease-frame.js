
function getStyle(obj,attr){//获取css内嵌式属性
	if(obj.currentStyle){//IE
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}

}
// console.log(getStyle(oDiv[0],'width'));
// console.log(parseInt(getStyle(oDiv[0],'width')));
//obj:元素名称,attr:属性,iTarget:目标
function startMove(obj,attr,iTarget){//缓动框架
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var iCur=0;
		if(attr=='opacity'){
			iCur=parseFloat(getStyle(obj,attr))*100;//原有的alpha值
		}else{
 			iCur=parseInt(getStyle(obj,attr));
		}
		var iSpeed=(iTarget-iCur)/8;//1.获取速度
		iSpeed=iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
		if(iCur==iTarget){//2.判断是否到达目的地
			clearInterval(obj.timer);
		}else{
			if(attr=='opacity'){
				iCur += iSpeed;
				obj.style.opacity=iCur/100;
				obj.style.filter='alpha(opacity:'+iCur+')';
			}else{
				obj.style[attr]=iCur+iSpeed+"px";
			}
			
		}
	},10);
	}
	