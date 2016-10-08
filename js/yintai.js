$(function(){
//下拉菜单
    var list1=$(".list");
    var tc1=$(".tc");
    for (var i = 0; i < list1.length; i++) {
      list1[i].index=i;
      hover(list1[i],function(){
        tc1[this.index].style.display="block";
      },function(){
        tc1[this.index].style.display="none";
      })
    };

//banner图
    var btns=$(".banner-btn1");
    var tus=$(".banner-tu");
    var bg=$(".banner-box")[0];
    var arr=["#0175AE","#F8F8F8","#E73C3C","#AADBFC"]     //声明一个数组，内容为背景颜色
    for (var i = 0; i < btns.length; i++) {      //遍历按钮数组
        btns[i].index=i;
        //给每一个按钮对象添加一个index属性 值为它在集合中的下标
        btns[i].onmouseover=function(){            //
              for (var i = 0; i < btns.length; i++) {
                  tus[i].style.zIndex="1"
                  btns[i].style.borderColor="#fff"
              };
              tus[this.index].style.zIndex="2"     //this  当前触发事件的对象
              this.style.borderColor="#ccc"
              bg.style.backgroundColor=arr[this.index]
        }       
    };
    //动画
        var lunbo=setInterval(move,3000)
        var num=0;
        function move(){
              num++;
              if (num==tus.length) {
                      num=0;
          };
            for (var i = 0; i < btns.length; i++) {
                  tus[i].style.zIndex="1";
                  btns[i].style.borderColor="#fff"
              tus[num].style.zIndex="2";
            };
              btns[num].style.borderColor="#ccc"
              bg.style.backgroundColor=arr[num];       
             bg.onmouseover=function(){
                clearInterval(lunbo);
             }
             bg.onmouseout=function(){
                lunbo=setInterval(move,3000)
             } 
        }

//超值选项卡
    var csgs=$(".chaozhi-shang1");
       var cxas=$(".chaozhi-xia");
         for (var i = 0; i < csgs.length; i++) {
           csgs[i].onmouseover=(function(aa){
            function bb(){
               for (var i = 0; i < csgs.length; i++) {
                  cxas[i].style.display="none";
               };
                  cxas[aa].style.display="block";
            }
            return bb
           })(i)
         };
//百货选项卡
       var bz1s=$(".baihuo-zi1");
       var br3s=$(".baihuo-r3");
         for (var i = 0; i <  bz1s.length; i++) {
            bz1s[i].onmouseover=(function(cc){
            function dd(){
               for (var i = 0; i <  bz1s.length; i++) {
                  br3s[i].style.display="none";
               };
                  br3s[cc].style.display="block";
            }
            return dd
           })(i)
         };

//箭头按钮切换图片
         //箭头按钮控制
        var box1s=$(".mingpingbox");
        var leftbtns=$(".leftbtn");
        var rightbtns=$(".rightbtn");
        var btnboxs=$(".mingpingbtnbox");              
        var items=$(".mingpinginner");
            for (var i = 0; i < box1s.length; i++) {
             huantu(box1s[i],leftbtns[i],rightbtns[i],btnboxs[i],items[i])
            };
        function huantu(box1s,leftbtns,rightbtns,btnboxs,items){
            var circles=btnboxs.getElementsByTagName("div");
              var flag=true;
          box1s.onmouseover=function(){
            animate(leftbtns,{left:0},200)
            animate(rightbtns,{right:0},200)
          }
          box1s.onmouseout=function(){
            animate(leftbtns,{left:-30},200)
            animate(rightbtns,{right:-30},200)
          }
        //鼠标移入移出箭头改变颜色
          leftbtns.onmouseover=function(){
            this.style.backgroundPosition="left bottom"
          }
          rightbtns.onmouseover=function(){
           if (flag) {
           this.style.backgroundPosition="right bottom"
           }
          }
          leftbtns.onmouseout=function(){
           this.style.backgroundPosition="left top"
           }
          rightbtns.onmouseout=function(){
           this.style.backgroundPosition="right top"
          }
        //鼠标的改变引起按钮颜色样式的改变
          rightbtns.onclick=moveright;
          leftbtns.onclick=moveleft;
          circles[0].onclick=moveleft;
          circles[1].onclick=moveright;
          function moveright(){
              flag=false;
            animate(items,{marginLeft:-390})
            circles[0].style.background="#555";
            circles[1].style.background="red";
          }
          function moveleft(){
              flag=true;
            animate(items,{marginLeft:0})
            circles[1].style.background="#555";
            circles[0].style.background="red";
          }
        } 
//移动鼠标显示边框       
        function b(obj,time){
        obj.style.position="relative";
        var div1=document.createElement("div");
        var div2=document.createElement("div");
        var div3=document.createElement("div");
        var div4=document.createElement("div");
        div1.style.cssText="position:absolute;background:#000;left:0px;top:0px;height:2px;";
        div2.style.cssText="position:absolute;background:#000;left:0px;top:0px;width:2px;";
        div3.style.cssText="position:absolute;background:#000;right:0px;bottom:0px;height:2px;";
        div4.style.cssText="position:absolute;background:#000;right:0px;bottom:0px;width:2px;";
            obj.appendChild(div1)
            obj.appendChild(div2)
            obj.appendChild(div3)
            obj.appendChild(div4)
        var width=parseInt(getStyle(obj,"width"));
        var height=parseInt(getStyle(obj,"height"));
        obj.onmouseover=function(){
            animate(div1,{width:width},time)
            animate(div2,{height:height},time)
            animate(div3,{width:width},time)
            animate(div4,{height:height},time)
        }
        obj.onmouseout=function(){
            animate(div1,{width:0},time)
            animate(div2,{height:0},time)
            animate(div3,{width:0},time)
            animate(div4,{height:0},time)
        }
     }
        var one=$(".chaozhi-xia1");
           for (var i = 0; i < one.length; i++) {
               b(one[i],500)
           };
        var two=$(".baihuo-tuwen");
           for (var i = 0; i < two.length; i++) {
               b(two[i],500)
           };
        var three=$(".mingpingtu");
           for (var i = 0; i < three.length; i++) {
               b(three[i],500)
           };
//侧栏效果
    var anniu=$(".celan-anniu");
    var masks=$(".celan-mask");
      for (var i = 0; i < anniu.length; i++) {
        anniu[i].index=i;
        anniu[i].onmouseover=function(){
          masks[this.index].style.opacity="1";
        }
        anniu[i].onmouseout=function(){
          masks[this.index].style.opacity="0"
        }
      }
    //侧栏滚动效果
    var cl=$(".celan")[0];
      document.documentElement.scrollTop=1;
          if (document.documentElement.scrollTop=1) {
            var scrollobj=document.documentElement;
          }else{
            var scrollobj=document.body;
          }
          var flag1=true;
          var flag2=true;
          addEventListener('scroll',function(){
            var st=scrollobj.scrollTop;
            if (st>746) {
              if (flag1) {
              flag1=false;
              flag2=true;  
                animate(cl,{width:62,height:448},100)
                };
            };
            if (st<746) {
              flag1=true;
              flag2=false;
              animate(cl,{width:0,height:0},100)
            };
          })
          //通过点击不同的按钮，获取对应的楼层的offsetTop  再把获取到的这个值通过动画赋给可视窗口的scrollTop
    var mb=$(".mingping-box");
    var db=$(".jj")[0];
          for (var i = 0; i < masks.length; i++) {
            masks[i].index=i;
            masks[i].onclick=function(){
              var ot=mb[this.index].offsetTop;
              animate(scrollobj,{scrollTop:ot})
            }
          };  
          // addEventListener('scroll',function(){ 
          //   var anniu=$(".celan-anniu");
          //   var stl=scrollobj.scrollTop;
          //   for (var i = 0; i < mb.length; i++) {
          //     if (stl+300>mb[i].offsetTop) {
          //       for (var j = 0; j < anniu.length; j++) {
          //         anniu[j].style.background=""
          //       };
          //         anniu[j].style.background="red"
          //     };
          //   };
          // })
          db.onclick=function(){
             animate(scrollobj,{scrollTop:0})
          }
//banner弹出选项
        var blan=$(".banner-lan");
        var tc=$(".banner-tanchu");
        for (var i = 0; i < blan.length; i++) {
          blan[i].index=i;
          hover(blan[i],function(){
            tc[this.index].style.display="block";
            console.log(this.index);
            },function(){
          tc[this.index].style.display="none";
            });
          tc[i].index = i;
          hover(tc[i],function(){
            tc[this.index].style.display="block";
            console.log(this.index);
            },function(){
          tc[this.index].style.display="none";
            });             
        }

  //无缝轮播
  var item1=$(".mingping-item");
  var lb=$(".mingping-d7");
  var rb=$(".mingping-d8");
  for (var i = 0; i < lb.length; i++) {
    diandong(item1[i],lb[i],rb[i])
  };
  function diandong(item1,lb,rb){
    rb.onclick=function(){                  
            animate(item1,{marginLeft:-166},500,function(){ 
            var first=getFirst(item1);            
            item1.appendChild(first);
            item1.style.marginLeft=0;
                }) 
        }
        lb.onclick=function(){  
            var last=getLast(item1);
            var first=getFirst(item1);
            item1.insertBefore(last,first)
            item1.style.marginLeft="-166px";
            animate(item1,{marginLeft:0},500) 
        }
  }
     

     //按需加载
  var boxs=$(".anxubox");         //获取存放图片的盒子
  var arr=[];               //声明一个新数组,用来存放盒子的高度值
  var doc=document.body;           //兼容性
      doc.scrollTop=1;
  if (doc.scrollTop!=1) {
    doc=document.documentElement;
  };
        for (var i = 0; i < boxs.length; i++) {         //遍历存放图片的盒子
            arr.push(boxs[i].offsetTop)              //将盒子的高度值放入数组
        };   
           addEventListener('scroll',function(){               //添加滚动条事件
              for (var i = 0; i < boxs.length; i++) {        //遍历存放图片的盒子
                // var a;             
                if(doc.scrollTop+600>arr[i]&&boxs[i].getAttribute("flag")!="true"){            //  用当前滚动条的高度与盒子的高度比较，如果滚动条的高度大于盒子的高度
                var img=$("img",boxs[i]);                 //
                for (var j = 0; j < img.length; j++) {           //遍历获取的盒子中的图片
                  img[j].src=img[j].getAttribute("asrc")          //将img里面的asrc属性赋值给img的src
                  // console.log(++a)
                };  
                  boxs[i].setAttribute("flag",true)     
                }

              };
            })

})

 
