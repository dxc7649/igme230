$(".top").click(function() {
    $(this).next().slideToggle("slow");
})

let showcontent = ("article0.txt")

$("article").load(showcontent);

$("[article1.txt]").checked(function (){
    showcontent = ("article1.txt")
})

$("input:contains('Article 2')").click(function (){
    showcontent = ("article2.txt")
})
