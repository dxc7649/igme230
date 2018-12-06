$(".top").click(function() {
    $(this).next().slideToggle("slow");
})

let showcontent = ("article0.txt")
$("article").load(showcontent);

$("input[name=story][value='article1.txt']").click(function () {
    showcontent = ("article1.txt");
    $("article").load(showcontent);
})

$("input[name=story][value='article2.txt']").click(function () {
    showcontent = ("article2.txt");
    $("article").load(showcontent);
})