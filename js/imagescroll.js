
/* 有的浏览器第一次加载不会动画  刷新当前页面一次 可以不加的*/
function reurl(){
	   url = location.href;var times = url.split("?");
	   if(times[1] != 1){ url += "?1";self.location.replace(index.html);}
}
 onload=reurl ;
/* 有的浏览器第一次加载不会动画  刷新当前页面一次 */

$(document).ready(function () {
    var box0 = $(".one"),v0 = 1.5; //这里添加滚动的对象和其速率
	var box1 = $(".two"),v1 = 1;
	Rin(box0,v0);
	Rin(box1,v1); 

		 function Rin($Box,v){//$Box移动的对象，v对象移动的速率
           var $Box_ul = $Box.find("ul"),
               $Box_li = $Box_ul.find("li"),
               $Box_li_span = $Box_li.find("span"),
	           left = 0,
	           s=0,
	           timer;//定时器

			      $Box_li.each(function(index){
			       $($Box_li_span[index]).width($(this).width());//hover
                   s += $(this).outerWidth(true); //即要滚动的长度
			     })
			      
		window.requestAnimationFrame = window.requestAnimationFrame||function(Tmove){return setTimeout(Tmove,1000/60)};
	    window.cancelAnimationFrame = window.cancelAnimationFrame||clearTimeout;
			      
                  if( s>=$Box.width()){//如果滚动长度超出Box长度即开始滚动，没有的话就不执行滚动
                           $Box_li.clone(true).appendTo($Box_ul);                       
					       Tmove();
						      function Tmove(){
						           //运动是移动left  从0到-s;（个人习惯往左滚）
						           left -= v;
						           if(left <= -s){left = 0;$Box_ul.css("left",left)}else{ $Box_ul.css("left",left) }
					                   timer = requestAnimationFrame(Tmove);   
						      }
					    $Box_ul.hover(function(){cancelAnimationFrame(timer)},function(){Tmove()})    
		          }  
 
	} 	 	
}) 	