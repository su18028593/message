function move1(obj,json,fn){
    clearInterval( obj.iTime );
    var iCur = 0;
    obj.iTime = setInterval( function(){
        var aBtn = true;
        for( var attr in json ){
            var iTa = json[attr];
            if( attr =='opacity' ) {
                iCur = Math.round(css(obj, 'opacity') * 100);// 四舍五入 取整数 40
            }else{
                iCur = parseInt( css(obj,attr) );
            }

            iSpeed = (iTa - iCur )/8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if( iCur != iTa ){
                aBtn = false;
                if(attr=='opacity') {
                    obj.style.opacity = (iCur + iSpeed) / 100;
                    obj.style.filter = 'alpha(opacity =' + (iCur + iSpeed ) + ')';
                }else{
                    obj.style[attr] = iCur + iSpeed + 'px';
                }
            }
        }
        if( aBtn ){
            clearInterval( obj.iTime );
            fn && fn.call(obj)
        }
    },30);
}
function css(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj, false)[attr];
    }
}