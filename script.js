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

function hide() {
    var Opa = 100 - window.pageYOffset / 4;
    var Sca = 1 - window.pageYOffset / 5000;
    document.getElementById("header").style.opacity = Opa + "%";
    document.getElementById("header").style.transform = "scale(" + Sca + "," + Sca + ")";
}

window.addEventListener("scroll", function() {
    hide();
});