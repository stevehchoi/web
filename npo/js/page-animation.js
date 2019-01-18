$(function () {
    $(".news-hover").mouseover(function () {
        $('#news-hover').css('background', '#aaa');
        $('#news-hover a').removeClass('c-news');
        $('#news-hover a').css('color', '#fff');
        $('#news-hover .news-a').css('border', '3px solid #fff')
    })
    $(".news-hover").mouseout(function () {
        $('#news-hover').css('background', '#fff');
        $('#news-hover a').addClass('c-news');
        $('#news-hover .news-a').css('border', '3px solid #aaa')
    })
    $(".face-hover").mouseover(function () {
        $('#face-hover').css('background', '#2369EB');
        $('#face-hover a').removeClass('c-face');
        $('#face-hover a').css('color', '#fff');
        $('#face-hover .face-a').css('border', '3px solid #fff')
    });
    $(".face-hover").mouseout(function () {
        $('#face-hover').css('background', '#fff');
        $('#face-hover a').addClass('c-face');
        $('#face-hover .face-a').css('border', '3px solid #2369EB')
    });
    $(".blog-hover").mouseover(function () {
        $('#blog-hover').css('background', '#790aff');
        $('#blog-hover a').removeClass('c-blog');
        $('#blog-hover a').css('color', '#fff');
        $('#blog-hover .blog-a').css('border', '3px solid #fff')
    });
    $(".blog-hover").mouseout(function () {
        $('#blog-hover').css('background', '#fff');
        $('#blog-hover a').addClass('c-blog');
        $('#blog-hover .blog-a').css('border', '3px solid #790aff')
    });
    $(".aka-hover").mouseover(function () {
        $('#aka-hover').css('background', '#00C8E1');
        $('#aka-hover a').removeClass('c-aka');
        $('#aka-hover a').css('color', '#fff');
        $('#aka-hover .aka-a').css('border', '3px solid #fff')
    });
    $(".aka-hover").mouseout(function () {
        $('#aka-hover').css('background', '#fff');
        $('#aka-hover a').addClass('c-aka');
        $('#aka-hover .aka-a').css('border', '3px solid #00C8E1')
    });
});

function numberCount(seconds) {
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: seconds,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

function numberCount2(name, seconds, number) {
    $('.' +  name).each(function () {
        $(this).prop('Counter',0).animate({
            Counter: number
        }, {
            duration: seconds,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

function numberCount3(name, seconds) {
    $('#' +  name + " .count").each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: seconds,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

var myFullpage = new fullpage('#fullpage', {
    sectionsColor: [
        '#fff',
        '#999',
        '#999',
        '#999',
        '#999',
        '#999',
        '#999',
        '#2369EB',
        '#2369EB',
        '#2369EB',
        '#2369EB',
        '#2369EB',
        '#2369EB',
        '#790aff',
        '#790aff',
        '#790aff',
        '#790aff',
        '#790aff',
        '#790aff',
        '#00C8E1',
        '#00C8E1',
        '#00C8E1',
        '#00C8E1',
        '#00C8E1',
        '#00C8E1',
        '#00C8E1',
        '#00C8E1'],
    anchors: [
        'index',
        'news-1',
        'news-2',
        'news-3',
        'news-4',
        'news-5',
        'news-6',
        'face-1',
        'face-2',
        'face-3',
        'face-4',
        'face-5',
        'face-6',
        'blog-1',
        'blog-2',
        'blog-3',
        'blog-4',
        'blog-5',
        'blog-6',
        'aka-1',
        'aka-2',
        'aka-3',
        'aka-4',
        'aka-5',
        'aka-6',
        'aka-7'
    ],
    menu: '#menu',
    scrollOverflow: true,
    continuousVertical: true,
    onLeave: function(anchorLink, index){
        var loadedSection = $(this);

        // //using index
        // if(index == 3){
        //     alert("Section 3 ended loading");
        // }
        console.log(index.index)


        if(index.anchor == 'index') {
            $('.page').addClass('dn');
            $('.nav-ani').addClass('dn');
        } else {
            $('.page').removeClass('dn');
            $('.nav-ani').removeClass('dn')
        }

        $('.nav li a').removeClass('c-white');
        $('.nav li a i').addClass('dn');

        $('.nav #' + index.anchor + '-li a').addClass('c-white');
        $('.nav #' + index.anchor + '-li a i').removeClass('dn');
        $('.box-slide').slideUp();
        // $('.box-slide').css('height', 0);
        // $('.box-slide').addClass('dn');
        // $('.slide-hide').addClass('dn');
        // $('.box-slide').removeClass('db-8');

        $('.news-menu a').removeClass('bg-news');
        $('.face-menu a').removeClass('bg-face');
        $('.blog-menu a').removeClass('bg-blog');
        $('.aka-menu a').removeClass('bg-aka');

        $('.center-vertical').removeClass('first-vertical');




        if(index.index <= 6 && index.index != 0) {
            $('.face-nav').addClass('dn');
            $('.blog-nav').addClass('dn');
            $('.aka-nav').addClass('dn');
            $('.news-menu a').addClass('bg-news');
        } else if (index.index > 6 && index.index <= 12) {
            $('.news-nav').addClass('dn');
            $('.blog-nav').addClass('dn');
            $('.aka-nav').addClass('dn');
            $('.face-menu a').addClass('bg-face');
        } else if (index.index > 12 && index.index <= 18) {
            $('.news-nav').addClass('dn');
            $('.face-nav').addClass('dn');
            $('.aka-nav').addClass('dn');
            $('.blog-menu a').addClass('bg-blog');
        } else {
            $('.news-nav').addClass('dn');
            $('.face-nav').addClass('dn');
            $('.blog-nav').addClass('dn');
            $('.aka-menu a').addClass('bg-aka');
        }

        $('.page h3').removeClass('c-news').removeClass('c-face');

        //using anchorLink
        if(index.anchor == 'news-1') {
            $("#current").text('1');
            $("#end").text('6');
            $('#news-sec-1').addClass('animated fadeInUp slow');
        } else if(index.anchor == 'news-2'){
            $("#current").text('2');
            $("#end").text('6');0
            $('#news-sec-2').addClass('animated fadeInUp slow');
            numberCount2('news-count-1',1500, 87);
            numberCount2('news-count-2',1500, 5949);
        } else if(index.anchor == 'news-3') {
            $("#current").text('3');
            $("#end").text('6');
            numberCount3('news-chart-1', 1000);
            $("#news-chart-1 .chart-bar").css('height', 0);
            for (var i=2; i <= 33; i++)
                $('#news-chart-1 ul li:nth-of-type('+i+') .chart-bar').stop().animate({height: $('#news-chart-1 ul li:nth-of-type('+i+') .chart-bar').data('target')}, 1400);
        } else if(index.anchor == 'news-4') {
            $("#current").text('4');
            $("#end").text('6');
            numberCount3('news-chart-2', 1000);
            $("#news-chart-2 .chart-bar").css('height', 0);
            for (var i=2; i <= 30; i++)
            $('#news-chart-2 ul li:nth-of-type('+i+') .chart-bar').stop().animate({height: $('#news-chart-2 ul li:nth-of-type('+i+') .chart-bar').data('target')}, 1400);
        } else if(index.anchor == 'news-5') {
            $("#current").text('5');
            $("#end").text('6');
            // $('#box-slide-1 .slide-hide').removeClass('dn');
            // $('#box-slide-1').addClass('db-8');
            // $('#box-slide-1').stop().animate({height: 250}, 600, function () {
            //     $('#box-slide-2').addClass('db-8');
            //     $('#box-slide-2 .slide-hide').removeClass('dn');
            //     $('#box-slide-2').stop().animate({height: 250}, 600, function () {
            //         $('#box-slide-3').addClass('db-8');
            //         $('#box-slide-3 .slide-hide').removeClass('dn');
            //         $('#box-slide-3').stop().animate({height: 250}, 600, function () {
            //         })
            //     });
            // })
            $('#box-slide-1').slideDown(900);
            $('#box-slide-2').slideDown(1100);
            $('#box-slide-3').slideDown(1300);
        } else if(index.anchor == 'news-6') {
            $("#current").text('6');
            $("#end").text('6');
        } else if(index.anchor == 'face-1') {
            $("#current").text('1');
            $("#end").text('6');
            $('#face-sec-1').addClass('animated fadeInUp slow');
        } else if(index.anchor == 'face-2') {
            $("#current").text('2');
            $("#end").text('6');
            $('#face-sec-1').addClass('animated fadeInUp slow');
            $('.box-1').addClass('animated fadeInUp');
            numberCount3('face-sec-2', 1000);
        } else if(index.anchor == 'face-3') {
            $("#current").text('3');
            $("#end").text('6');
            numberCount3('face-chart-1', 1000);
            $("#face-chart-1 .chart-bar").css('height', 0);
            for (var i=2; i <= 33; i++)
                $('#face-chart-1 ul li:nth-of-type('+i+') .chart-bar').stop().animate({height: $('#face-chart-1 ul li:nth-of-type('+i+') .chart-bar').data('target')}, 1400);
        } else if(index.anchor == 'face-4') {
            $("#current").text('4');
            $('.page h3').addClass('c-face');
            $("#end").text('6');
            $('.face-count').text('0');
            $("#tg-section-5 .bg-gra").stop().animate({height: '100%'}, 700, function () {
                numberCount2('count-4',700, 238);
                $("#tg-section-4 .bg-gra").stop().animate({height: '100%'}, 700, function () {
                    numberCount2('count-3',700, 8419);
                    $("#tg-section-3 .bg-gra").stop().animate({height: '100%'}, 700, function () {
                        numberCount2('count-2',700, 75505);
                        $("#tg-section-2 .bg-gra").stop().animate({height: '100%'}, 700, function () {
                            numberCount2('count-1',700, 137588);
                            $("#tg-section-1 .bg-gra").stop().animate({height: '100%'}, 700);
                        })
                    })
                })
            })
        } else if(index.anchor == 'face-5') {
            $("#current").text('5');
            $("#end").text('6');
            $('#box-slide-4').slideDown(900);
            $('#box-slide-5').slideDown(1100);
            $('#box-slide-6').slideDown(1300);
        } else if(index.anchor == 'face-6') {
            $("#current").text('6');
            $("#end").text('6');
            $('.watch').addClass('animated fadeInUpBig slow');
            for (i=1; i <=7; i++) {
                if( i <= 4) {
                    $('.circle-list li:nth-of-type('+i+')').stop().animate({opacity: 1}, 300 + i * 100);
                } else {
                    $('.circle-list li:nth-of-type('+i+')').stop().animate({opacity: 1}, 300 + i * 200);
                }
            }
        } else if(index.anchor == 'blog-1') {
            $("#current").text('1');
            $("#end").text('6');
        } else if(index.anchor == 'blog-2') {
            $("#current").text('2');
            $("#end").text('6');
            numberCount2('blog-count-1',1500, 157711);
            numberCount2('blog-count-2',1500, 25);
            numberCount2('blog-count-2-2',1500, 29);
            numberCount2('blog-count-3',1500, 32);
            numberCount2('blog-count-3-3',1500, 68);
            numberCount2('blog-count-4',1500, 301);
        } else if(index.anchor == 'blog-3') {
            $("#current").text('3');
            $("#end").text('6');
            numberCount3('blog-chart-1', 1000);
            $("#blog-chart-1 .chart-bar").css('height', 0);
            for (var i=2; i <= 41; i++)
                $('#blog-chart-1 ul li:nth-of-type('+i+') .chart-bar').stop().animate({height: $('#blog-chart-1 ul li:nth-of-type('+i+') .chart-bar').data('target')}, 1400);
        } else if(index.anchor == 'blog-4') {
            $("#current").text('4');
            $("#end").text('6');
            numberCount3('blog-chart-2', 1000);
            $("#blog-chart-2 .chart-bar").css('height', 0);
            for (var i=2; i <= 41; i++)
                $('#blog-chart-2 ul li:nth-of-type('+i+') .chart-bar').stop().animate({height: $('#blog-chart-2 ul li:nth-of-type('+i+') .chart-bar').data('target')}, 1400);
        } else if(index.anchor == 'blog-5') {
            $("#current").text('5');
            $("#end").text('6');
            $('#box-slide-7').slideDown(900);
            $('#box-slide-8').slideDown(1100);
            $('#box-slide-9').slideDown(1300);
        } else if(index.anchor == 'blog-6') {
            $("#current").text('6');
            $("#end").text('6');
            $('.ranking').stop().slideDown(1500, function () {
                $('.search').stop().fadeIn();
            })
        } else if(index.anchor == 'aka-1') {
            $("#current").text('1');
            $("#end").text('7');
        } else if(index.anchor == 'aka-2') {
            $("#current").text('2');
            $("#end").text('7');
            numberCount2('aka-count-1',1500, 1871);
            numberCount2('aka-count-2',1500, 68);
        }  else if(index.anchor == 'aka-3') {
            $("#current").text('3');
            $("#end").text('7');
            $(".boxbox").stop().animate({height: 100+'%'}, 2000)
        }  else if(index.anchor == 'aka-4') {
            $("#current").text('4');
            $("#end").text('7');
            $(".aka-chart-1").stop().animate({width: 5+'%'}, 200, function () {
                $(".aka-chart-2").stop().animate({width: 4+'%'}, 300, function () {
                    $(".aka-chart-3").stop().animate({width: 11+'%'}, 350, function () {
                        $(".aka-chart-4").stop().animate({width: 16+'%'}, 400, function () {
                            $(".aka-chart-5").stop().animate({width: 15+'%'}, 500, function () {
                                $(".aka-chart-6").stop().animate({width: 18+'%'}, 700, function () {
                                    $(".aka-chart-7").stop().animate({width: 21+'%'}, 900, function () {
                                        $(".aka-chart-8").stop().animate({width: 7+'%'}, 700, function () {
                                            $(".aka-chart-9").stop().animate({width: 3+'%'}, 700, function () {

                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }  else if(index.anchor == 'aka-5') {
            $("#current").text('5');
            $("#end").text('7');
            $('#box-slide-10').slideDown(900);
            $('#box-slide-11').slideDown(1100);
            $('#box-slide-12').slideDown(1300);
            $('#box-slide-13').slideDown(1500);
            $('#box-slide-14').slideDown(1700);
        }  else if(index.anchor == 'aka-6') {
            $("#current").text('6');
            $("#end").text('7');
            for (i=1; i <=70; i++) {
                $('.keyword a:nth-of-type('+i+') li').stop().animate({opacity: 1}, i*50);
            }
            // $('.keyword a:nth-of-type(1) li').stop().fadeIn(200, function () {
            //     $('.keyword a:nth-of-type(2) li').stop().fadeIn(200, function () {
            //         $('.keyword a:nth-of-type(3) li').stop().fadeIn(200, function () {
            //             $('.keyword a:nth-of-type(4) li').stop().fadeIn(200, function () {
            //
            //             });
            //         });
            //     });
            // });
        }  else if(index.anchor == 'aka-7') {
            $("#current").text('7');
            $("#end").text('7');
        } else if(index.anchor == 'index') {
            $('.center-vertical').addClass('first-vertical')

        }

        if (index.anchor == 'index') {
            $('#menu').css('display', 'none');
        } else {
            $('#menu').css('display', 'block');
        }
    }

});

$(function () {
    let news_1 = 0;
   $("#news-chart-1-next").click(function () {
       if(news_1 >= 5) {
           news_1 = 0;
           $('#news-chart-1 ul').stop().animate({left: -(250*news_1)}, 500)
       } else {
           $('#news-chart-1 ul').stop().animate({left: -(250*++news_1)}, 500);
       }
   })
    let news_2 = 0;
    $("#news-chart-2-next").click(function () {
        if(news_2 >= 5) {
            news_2 = 0;
            $('#news-chart-2 ul').stop().animate({left: -(250*news_2)}, 500)
        } else {
            $('#news-chart-2 ul').stop().animate({left: -(250*++news_2)}, 500);
        }
    })
    let face_1 = 0;
    $("#face-chart-1-next").click(function () {
        if(face_1 >= 4) {
            face_1 = 0;
            $('#face-chart-1 ul').stop().animate({left: -(270*face_1)}, 500)
        } else {
            $('#face-chart-1 ul').stop().animate({left: -(270*++face_1)}, 500);
        }
    })
    let blog_1 = 0;
    $("#blog-chart-1-next").click(function () {
        if(blog_1 >= 7) {
            blog_1 = 0;
            $('#blog-chart-1 ul').stop().animate({left: -(280*blog_1)}, 500)
        } else {
            $('#blog-chart-1 ul').stop().animate({left: -(280*++blog_1)}, 500);
        }
    })
    let blog_2 = 0;
    $("#blog-chart-2-next").click(function () {
        if(blog_2 >= 7) {
            blog_2 = 0;
            $('#blog-chart-2 ul').stop().animate({left: -(280*blog_2)}, 500)
        } else {
            $('#blog-chart-2 ul').stop().animate({left: -(280*++blog_2)}, 500);
        }
    })
    let aka_1 = 0;
    $("#aka-chart-1-next").click(function () {
        if(aka_1 >= 3) {
            aka_1 = 0;
            $('#aka-chart-1 ul').stop().animate({left: -(300*aka_1)}, 500)
        } else {
            $('#aka-chart-1 ul').stop().animate({left: -(300*++aka_1)}, 500);
        }
    })
    let aka_2 = 0;
    $("#aka-chart-2-next").click(function () {
        if(aka_2 >= 3) {
            aka_2 = 0;
            $('#aka-chart-2 ul').stop().animate({left: -(260*aka_2)}, 500)
            $('.model p').stop().animate({left: -(190*aka_2)}, 500)
        } else {
            $('#aka-chart-2 ul').stop().animate({left: -(260*++aka_2)}, 500);
            $('.model p').stop().animate({left: -(190*aka_2)}, 500);
        }
    })
});
