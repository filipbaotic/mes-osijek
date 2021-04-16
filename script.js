$(document).ready(function() {
    $(".n1").click(function(e) {
        $(".n1").toggleClass("active");
        $(".s1").toggleClass("active");
        $(".n2").removeClass("active");
        $(".s2").removeClass("active");
        $(".n3").removeClass("active");
        $(".s3").removeClass("active");
        $(".n4").removeClass("active");
        $(".s4").removeClass("active");
    });
    $(".n2").click(function(e) {
        $(".n1").removeClass("active");
        $(".s1").removeClass("active");
        $(".n2").toggleClass("active");
        $(".s2").toggleClass("active");
        $(".n3").removeClass("active");
        $(".s3").removeClass("active");
        $(".n4").removeClass("active");
        $(".s4").removeClass("active");
    });
    $(".n3").click(function(e) {
        $(".n1").removeClass("active");
        $(".s1").removeClass("active");
        $(".n2").removeClass("active");
        $(".s2").removeClass("active");
        $(".n3").toggleClass("active");
        $(".s3").toggleClass("active");
        $(".n4").removeClass("active");
        $(".s4").removeClass("active");
    });
    $(".n4").click(function(e) {
        $(".n1").removeClass("active");
        $(".s1").removeClass("active");
        $(".n2").removeClass("active");
        $(".s2").removeClass("active");
        $(".n3").removeClass("active");
        $(".s3").removeClass("active");
        $(".n4").toggleClass("active");
        $(".s4").toggleClass("active");
    });
});

function parallax() {
    var yPosT = 40 + window.pageYOffset / 1;
    var yPosB = 16 - window.pageYOffset * 1;
    var Opa = 100 - window.pageYOffset / 3.5;
    var Sca = 1 - window.pageYOffset / 6500;
    document.getElementById("header").style.margin = yPosT + "px 0 " + yPosB + "px 0";
    document.getElementById("header").style.opacity = Opa + "%";
    document.getElementById("header").style.transform = "scale(" + Sca + "," + Sca + ")";
}

window.addEventListener("scroll", function() {
    parallax();
});