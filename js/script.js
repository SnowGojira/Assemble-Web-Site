//adaptation
var maxWidth = document.documentElement.clientWidth;
var maxHeight = document.documentElement.clientHeight;

$(document).ready(function() {


        console.log("设备宽："+maxWidth+"设备高："+maxHeight);
        $('#grid-6').click(function(){
            window.location.href="https://mp.weixin.qq.com/s?__biz=MzI1NDYzMTM2NQ==&mid=2247483836&idx=1&sn=ea6adf3a14beb09af8f6a7e0c746841f&chksm=e9c30d16deb48400dcf19291e94a9666d923bf9537337dc8f1a3316762a8f2ef2cdbf6d23984&mpshare=1&scene=1&srcid=0328dL3vgEAr7k7ZADrAaHri#rd";
        });
        if (maxHeight>maxWidth) {
            $('#glitch-img').attr('src', 'img/gif1.jpg');
            $('#glitch-img').css('width',maxWidth);
            $('#glitch-img').css('height',maxHeight);

            //add the tap show logic
            $('.grid-text').css("opacity","1");

        }else {
            $('#grid1').hover(function () {
                $('#grid1').css("opacity","1");
            },function () {
                $('#grid1').css("opacity","0");
            });

            $('#grid1').hover(function () {
                $('#grid1').css("opacity","1");
            },function () {
                $('#grid1').css("opacity","0");
            });

            $('#grid2').hover(function () {
                $('#grid2').css("opacity","1");
            },function () {
                $('#grid2').css("opacity","0");
            });

            $('#grid3').hover(function () {
                $('#grid3').css("opacity","1");
            },function () {
                $('#grid3').css("opacity","0");
            });

            $('#grid4').hover(function () {
                $('#grid4').css("opacity","1");
            },function () {
                $('#grid4').css("opacity","0");
            });

            $('#grid5').hover(function () {
                $('#grid5').css("opacity","1");
            },function () {
                $('#grid5').css("opacity","0");
            });

            $('#grid6').hover(function () {
                $('#grid6').css("opacity","1");
            },function () {
                $('#grid6').css("opacity","0");
            });

            $('#grid8').hover(function () {
                $('#grid8').css("opacity","1");
            },function () {
                $('#grid8').css("opacity","0");
            });

            $('#grid7').hover(function () {
                $('#grid7').css("opacity","1");
            },function () {
                $('#grid7').css("opacity","0");
            });


        }


});


  // niceScroll
  $("html").niceScroll();
    
    
  // Stick menu
  $(".menu").sticky({topSpacing:0});

  // $(".menu-click").sticky({topSpacing:0});


  // Menu Scroll to content and Active menu
  var lastId,
    topMenu = $("#menu"),
    topMenuHeight = topMenu.outerHeight()+145,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

   $('a[href*=#]').bind('click', function(e) {
	e.preventDefault();
       
	var target = $(this).attr("href");
			

	$('html, body').stop().animate({ scrollTop: $(target).offset().top-140 }, 1000, function() {

	});
			
	return false;
   });

  $(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
  });  
  

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

    $(".menu-media").sticky({topSpacing:0});
    $(".footer").css( "position", "relative" );
    $(".contact").css( "marginBottom", "0" );

}
else 
{

  // FadeTo elements
  if ( $(window).width() > 1023) {  

    tiles = $("h2, h3, .column-one, .column-two, .column-three, .grid li, .contact .content .form, .contact .content .contact-text ").fadeTo(0, 0);

    $(window).scroll(function(d,h) {
      tiles.each(function(i) {
          a = $(this).offset().top + $(this).height();
          b = $(window).scrollTop() + $(window).height();
          if (a < b) $(this).fadeTo(1000,1);
      });
    });

  }

}



  //Menu mobile click
  $( ".icon" ).click(function() {
    $( " ul.menu-click" ).slideToggle( "slow", function() {
    // Animation complete.
    });
  });


$(window).load(function(){

$(".preloader").delay(1000).fadeOut("slow")

  // Parallax
  if ($('.parallax-background').length) {
    $(".parallax-background").parallax();
  }
  
  // Parallax
  if ($('.parallax-background-partners').length) {
    $(".parallax-background-partners").parallax();
  }

    /**
     * weixin Interface
     * 微信接口
     */
    WeChat();

    shareAjax();

});

  //add glitch effect
  $( function(){
          $("#glitch-logo").mgGlitch({
              destroy : false, // set 'true' to stop the plugin
              glitch: true, // set 'false' to stop glitching
              scale: true, // set 'false' to stop scaling
              blend : true, // set 'false' to stop glitch blending
              blendModeType : 'hue', // select blend mode type
              glitch1TimeMin : 400, // set min time for glitch 1 elem
              glitch1TimeMax : 600, // set max time for glitch 1 elem
              glitch2TimeMin : 10, // set min time for glitch 2 elem
              glitch2TimeMax : 115, // set max time for glitch 2 elem
          });
      }
  );


// add the terminal effect to the slogan

consoleText(['Live the way you think or you will end up thinking the way you live'], 'text',['white']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function() {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function() {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
}

//add share logic
function WeChat() {
    $.ajax(
        {type:'get',
            url:'ajax_getconfig.php',
            success:function(data){
                console.log("ajax success:"+data);
                console.log("ajax success:"+JSON.parse(data).appId);
                console.log("ajax success:"+JSON.parse(data).timestamp);
                console.log("ajax success:"+JSON.parse(data).nonceStr);
                console.log("ajax success:"+JSON.parse(data).signature);

                wx.config({
                    debug: true,
                    appId:JSON.parse(data).appId,
                    timestamp: JSON.parse(data).timestamp,
                    nonceStr: JSON.parse(data).nonceStr,
                    signature: JSON.parse(data).signature,
                    jsApiList: [
                        // 所有要调用的 API 都要加到这个列表中
                        'checkJsApi',
                        'onMenuShareTimeline',//
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo'

                    ]
                });

            }
        });

}

function shareAjax(){
    /**
     * url需要更改为正式服务器的地址
     */
    var url="http://www.assemblemedia.cn/";
    var imageUrl=url+"img/share-icon.png";
    var sharetitle='Assemble Media Studio';
    var sharedesc="Live the way you think or you will end up thinking the way you live";
    var shareLink=url+'index.html';

    wx.ready(function(){
        wx.onMenuShareTimeline({
            title:sharedesc, // 分享标题
            link: shareLink, // 分享链接
            imgUrl: imageUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareAppMessage({
            title: sharetitle, // 分享标题
            desc: sharedesc, // 分享描述
            link: shareLink, // 分享链接
            imgUrl: imageUrl, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareQQ({
            title: sharetitle, // 分享标题
            desc: sharedesc, // 分享描述
            link: shareLink, // 分享链接
            imgUrl: imageUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareWeibo({
            title: sharetitle, // 分享标题
            desc: sharedesc, // 分享描述
            link: shareLink, // 分享链接
            imgUrl: imageUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
    });

}