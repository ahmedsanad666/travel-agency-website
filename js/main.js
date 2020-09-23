$(function () {
    //  header hieght 
    $('header').height($(window).height() - 50);
    $('nav').height(0);

    $(window).resize(function () {

        $('header').height($(window).height());
        $('nav').height(0);
    })
    // header  animation 
    // preloader
    $('.loader').fadeOut(4000);
    //logo
    gsap.from('.logo h3', { xPercent: -80, duration: 2, opacity: 0 })
    let logoani = gsap.to('.logo i', { rotate: 360, duration: 1, repeat: -1, paused: true })
    $('.logo i').hover(() => { logoani.play() }, () => { logoani.pause(); });
    // plane anim 
    gsap.timeline().from('.planee img', { x: -1000, opacity: 0, duration: 3 }).to('.planee img', { opacity: 1, x: 1100, duration: 3 }, '-=2')
        .to('.planee img', { x: 200, opacity: .4, duration: 3 });
    // p   
    $('#icon1').hover(
        function () {
            $('.i').animate({ width: '100' }, 1000)
        },
        function () {
            $('.i').animate({ width: '0' }, 1000)
        }
    )
    $('#icon2').hover(
        function () {
            $('.i2').animate({ width: '100' }, 1000)
        },
        function () {
            $('.i2').animate({ width: '0' }, 1000)
        }
    )
    // $('#icon1').mouseout(function(){
    //     $('.i').animate({
    // width:'0'
    //     },1000);

    // });


    // $('#icon2').click(function(){
    //     $('.i2').animate({
    // width:'100'

    //     },2000);

    // });


    // $('#icon2').mouseout(function(){
    //     $('.i2').animate({
    // width:'100'

    //     },2000);

    // });
    // ....................
    // slider 
    $(document).ready(function () {
        $(".city #lightSlider").lightSlider();
        $(".resortSlider #lightSlider").lightSlider();
        $('.videos #lightSlider').lightSlider();

    });
    // ...........................
    // landscape animation ......................

    gsap.from('.ani', {
        duration: '1.5', y: '-50', opacity: '0', stagger: 1,
        scrollTrigger: {
            trigger: 'ani',
            toggleActions: 'restart pause reset reset'
        }, delay: '0'
    });
    gsap.from('.city #lightSlider li', {
        duration: '2', opacity: '0', y: '80', scrollTrigger: {
            trigger: '#lightSlider li',
            // toggleAction:'onenter onleave onenterback onleaveback
            toggleActions: 'restart restart restart restart',
        }, delay: '.5'
    });
    // resort contaier..........................
    gsap.from('.resortContainer', {
        y: "200", duration: '2.5', opacity: '0', scrollTrigger: {
            trigger: '.resortContainer',
            toggleActions: 'restart reset restart restart',
        }
    });

    //our autoslider
    (function autoSlider() {
        $('.autoSlider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(1300).fadeOut(2000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                })
            } else {
                $(this).delay(1300).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.autoSlider li').eq(0).addClass('active').fadeIn();
                    autoSlider();
                })
            }
        })
        // email submit
    $('#btn').click(()=>{
        $('#signUp').show(500);
        $('#signUp a').show(500);
       
    })
   //nicescroll
   $("body").niceScroll({
    cursorcolor:'#c0392b',
    cursorwidth:'10px',
    cursorborder:'none',
   });
    }());

});