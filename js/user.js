/**
 * Created by Lenovo on 2020/12/18.
 */
$(function(){

//	����ҳ��  �޸ĵ�ַ
    $(".edit").click(function(){
        $(".mask").show();
        $(".adddz").show();
    });

    $(".bc>input").click(function(){
        if($(this).val()=="����"){
            $(".mask").hide();
            $(".adddz").hide();
            $(".bj").hide();
            $(".xg").hide();
            $(".remima").hide();
            $(".pj").hide();
            $(".chak").hide();
        }else{
            $(".mask").hide();
            $(".adddz").hide();
            $(".bj").hide();
            $(".xg").hide();
            $(".remima").hide();
            $(".pj").hide();
            $(".chak").hide();
        }
    });



//	�ҵĶ���tab�л�
    $("#wa li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var txt1=$(this).find("a").text();
        $(".dkuang").find("p.one").each(function(){
            var txt2=$(this).text();
            if(txt1==txt2){
                $(this).parent(".dkuang").show().siblings(".dkuang").hide();
            }
            $("#wa li").eq(0).click(function(){
                $(".dkuang").show();
            })
        });
    });

//	���� tab�л�

    $(".sx div:gt(0)").hide();
    $(".sx div").each(function(i){
        if($(this).html()==''){
            var str = $("#pro li").eq(i).find("a").text();
            var txt ='';
            txt = '<div class="noz">��ǰû��'+str+'��</div>';
            $(this).html(txt);
        }
    });
    $("#pro li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var index=$(this).index();
        $(".sx > div").eq(index).show().siblings().hide();
    });


//		���۴���

    $(".sx dl dd").find("a").click(function(){
        if($(this).text()=="����"){
            $(".mask").show();
            $(".pj").show();
        }else if($(this).text()=="�鿴����"){
            $(".mask").show();
            $(".chak").show();
        }else{
            $(".mask").hide();
            $(".pj").hide();
            $(".chak").hide();
        }

    });
//	���۴���
    $("#xin").each(function(i){
        $("#xin").eq(i).children("a").click(function(){
            var index = $(this).index();
            for(var j = 0; j<5;j++){
                if(j<=index){
                    $("#xin").eq(i).find("a").eq(j).find("img").attr("src","img/hxin.png");
                }
                else{
                    $("#xin").eq(i).find("a").eq(j).find("img").attr("src","img/xin.png");
                }

            }
        })
    })




//	������Ϣ �༭
    $("#edit1").click(function(){
        $(".mask").show();
        $(".bj").show();
    });
    $("#edit2").click(function(){
        $(".mask").show();
        $(".xg").show();
    });

//�޸�ͷ��
    $("#avatar").click(function(){
        $(".mask").show();
        $(".avatar").show();
    });

//	����رհ�ť
    $(".gb").click(function(){
        $(".mask").hide();
        $(".bj").hide();
        $(".xg").hide();
        $(".remima").hide();
        $(".avatar").hide();
        $(".pj").hide();
        $(".chak").hide();
    });









//	address
    $("#addxad").click(function(){
        $(".mask").show();
        $(".adddz").show();
    });
    $("#dizhi").hover(function(){
        var txt="";
        txt='<p class="addp"><a href="#"  id="readd">�޸�</a><a href="#" id="deladd">ɾ��</a></p>'
        $(this).append(txt);
        $("#readd").click(function(){
            $(".mask").show();
            $(".readd").show();
        });
        $("#deladd").click(function(){
            $(this).parents("#dizhi").remove();
        });
    },function(){
        $(".bc>input").click(function(){
            if($(this).val()=="����"){
                $(".mask").hide();
                $(".readd").hide();
            }else{
                $(".mask").hide();
                $(".readd").hide();
            }
        });
        $(".addp").remove();
    });

//	�鿴����
    $(".vewwl").hover(function(){
        $(this).children(".wuliu").fadeIn(100);
    },function(){
        $(this).children(".wuliu").fadeOut(100);
    });

})
