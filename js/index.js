var splide = null;
var trigered = false;

var splideComponent = document.getElementById("splide");
splideComponent.style.display = "none";

var firstAimation = anime({
    targets: '#first',
    opacity: [1,0.0],
    translateY: 140,
    easing: "easeInOutExpo",
    duration: 1000,
    autoplay: false,
    update: function(anim) {

        if(Math.round(anim.progress) >= 60){
            if (trigered) return;

            trigered = true;

            var first = document.getElementById("first");
            first.remove();

            splideComponent.style.display = "initial";

            anime({
                targets: '#second',
                opacity: [0.3, 1.0],
                duration: 300,
                easing: 'easeInOutCirc',
            });

            splide = new Splide( '#splide', {
                direction: 'ttb',
                start: 1,
                arrows: false,
                height   : 'calc(var(--vh, 1vh) * 100)', 
                pagination: true,
                drag: true,
            } );

            splide.on( 'mounted', function () {
                
            } );

            splide.on( 'moved', function (newIndex, oldIndex, destIndex) {
                if(newIndex == 1){
                    document.getElementById("name").style.visibility = 'visible';
                    document.getElementById("garis").style.visibility = 'visible';
                    document.getElementById("k-1").style.visibility = 'visible';
                    document.getElementById("k-2").style.visibility = 'visible';
                    document.getElementById("k-3").style.visibility = 'visible';
                    document.getElementById("k-4").style.visibility = 'visible';
                    animationName.restart();
                    garisAnimation.restart();
                    k1.restart();
                    k2.restart();
                    k3.restart();
                    k4.restart();
                }else{
                    document.getElementById("name").style.visibility = 'hidden';
                    document.getElementById("garis").style.visibility = 'hidden';
                    document.getElementById("garis").style.opacity = 0;
                    document.getElementById("k-1").style.visibility = 'hidden';
                    document.getElementById("k-1").style.opacity = 0;
                    document.getElementById("k-2").style.visibility = 'hidden';
                    document.getElementById("k-2").style.opacity = 0;
                    document.getElementById("k-3").style.visibility = 'hidden';
                    document.getElementById("k-3").style.opacity = 0;
                    document.getElementById("k-4").style.visibility = 'hidden';
                    document.getElementById("k-4").style.opacity = 0;
                }
            } );

            splide.mount();
            animationName.play();
            garisAnimation.play();
            k1.play();
            k2.play();
            k3.play();
            k4.play();
        }
    }
});

var animationName = anime.timeline({loop: false, autoplay:false})
    .add({
        targets: '.name .line',
        opacity: [0.5,1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
    }).add({
        targets: '.name .line',
        duration: 600,
        easing: "easeOutExpo",
        translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
    }).add({
        targets: '.name .ampersand',
        opacity: [0,1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
    }).add({
        targets: '.name .letters-left',
        opacity: [0,1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
    }).add({
        targets: '.name .letters-right',
        opacity: [0,1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
    });
var k1 = anime.timeline({loop: false, autoplay:false})
    .add({
        targets: '.k-1',
        opacity: [0,1],
        easing: "easeInOutExpo",
        duration: 700   
    }).add({
        targets: '.k-1',
        translateY: 35,
        easing: "linear",
        duration: 700,
        offset: '-=700'
    });
var k2 = anime.timeline({loop: false, autoplay:false})
    .add({
        targets: '.k-2',
        opacity: [0,1],
        easing: "easeInOutExpo",
        delay: 700,
        duration: 700   
    }).add({
        targets: '.k-2',
        translateY: 30,
        easing: "linear",
        duration: 700,
        offset: '-=700'
    });

var k3in = anime({
        targets: '.k-3',
        translateY: -10,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        autoplay:false
    });

var k3 = anime.timeline({loop: false, autoplay:false,
    complete: function(anim) {
        k3in.play();
    },begin: function(anim) {
        k3in.pause();
    }})
    .add({
        targets: '.k-3',
        opacity: [0,1],
        easing: "easeInOutExpo",
        delay: 1200,
        duration: 400   
    });
var k4 = anime.timeline({loop: false, autoplay:false})
    .add({
        targets: '.k-4',
        opacity: [0,1],
        easing: "easeInOutExpo",
        delay: 700,
        duration: 700   
    }).add({
        targets: '.k-4',
        translateY: 30,
        easing: "linear",
        duration: 700,
        offset: '-=700'
    });

var garisAnimation = anime.timeline({loop: false, autoplay:false})
    .add({
        targets: '.garis',
        opacity: [0,1],
        easing: "easeInOutExpo",
        duration: 200,
    });

start = function(){
    firstAimation.play();

    var audio = new Audio('musics/ost.mp3');
    audio.play()
    audio.loop = true;
}