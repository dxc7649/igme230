/* Don't use <script> tags in a linked js file! */
$(".menuitem").click(function() {
    $(this).next().slideToggle("slow");
})

let showcontent = ("content1.txt")
$("#choose-content").val(showcontent);
$("#content").load(showcontent);

$("choose-content").change(function (){
    showcontent = $(this).val();
    $("#content").load(showcontent);
});