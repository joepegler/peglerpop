var app={
    title : ['line up', 'location', 'pricing'],
    swiper: $('.swiper-container').swiper({
        onSlideChangeStart : function(){
            $('.nav-a').removeClass('active');
            $('#menu nav ul li:nth-child('+(app.swiper.activeSlide+1)+') a').addClass('active');
            $('#slide_title').html(app.title[app.swiper.activeSlide]);
        } 
    }),
    navigate : function(page){
        switch(page){
            case "line up":
                app.swiper.swipeTo(0);
            break;
            case "location":
                app.swiper.swipeTo(1);
            break;
            case "pricing":
                app.swiper.swipeTo(2);
            break;
            default:
                console.log("Could not match a switch case");
            break;
        }
    }
}