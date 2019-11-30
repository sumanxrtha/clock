$(document).ready(function() {
    var arr1 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    arr1.forEach(function(currentItem, Index) {
        $("ul.hours").append("<li>" + currentItem + "</li>");
        $("ul.minutes, ul.seconds").append("<li>" + currentItem * 5 + "</li>");

    });

    var myFunc = function() {
        var myDate = new Date();
        var seconds = myDate.getSeconds();
        var minutes = myDate.getMinutes();
        var hours = myDate.getHours();
        // console.log(hours+" "+minutes+" "+seconds);

        $(".seconds").css('transform', 'rotate(' + (seconds) * 6 + 'deg)');
        $(".minutes").css('transform', 'rotate(' + (minutes) * 6 + 'deg)');
        $(".hours").css('transform', 'rotate(' + (hours % 12) * 30 + 'deg)');



    }
    setInterval(myFunc, 1000);
});