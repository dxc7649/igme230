/* Don't use <script> tags in a linked js file! */
$(".menubox:first").click(function() {
    $(".submenu:first").slideToggle("slow");
})

$(".menubox: nth-child(2)").click(function() {
    $(".submenu:second").slideToggle("slow");
})