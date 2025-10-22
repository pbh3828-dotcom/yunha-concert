$(document).ready(function() {

    const poster = $('.poster-container');
    const light = $('.light-effect');
    const texts = $('.text-top, .text-title, .text-md');
    const music = $('#poster-music')[0];

    poster.on('mouseenter', function() {
        light.css('opacity', 1);
    });

    poster.one('mouseenter', function() {
        console.log("마우스 올림! 음악 재생을 시도합니다.");
        music.play().catch(error => {
            console.log("음악 재생 실패:", error);
        }); 
    });

    poster.on('mouseleave', function() {
        light.css('opacity', 0);
        texts.removeClass('text-glow');
    });

    poster.on('mousemove', function(e) {
        let mouseX = e.pageX - $(this).offset().left;
        let mouseY = e.pageY - $(this).offset().top;
        light.css({'left': mouseX + 'px', 'top': mouseY + 'px'});

        texts.each(function() {
            const text = $(this);
            const textOffset = text.offset();
            const textLeft = textOffset.left - poster.offset().left;
            const textTop = textOffset.top - poster.offset().top;
            const textWidth = text.outerWidth();
            const textHeight = text.outerHeight();

            if (mouseX > textLeft && mouseX < textLeft + textWidth && mouseY > textTop && mouseY < textTop + textHeight) {
                text.addClass('text-glow');
            } else {
                text.removeClass('text-glow');
            }
        });
    });

    setTimeout(function() {
        $('.text-title').addClass('fade-in-title');
    }, 500);

    setTimeout(function() {
        $('.text-date-animated').addClass('start-slide-animation');
    }, 1000); 

    
    setTimeout(function() {
        poster.addClass('show-second-image');
    }, 8000); 

    
    setTimeout(function() {
        $('.ending-scene').addClass('show'); 
        
        setTimeout(function() {
            $('.ending-credits').addClass('start-scroll'); 
        }, 2000); 
        
    }, 21000); 

});