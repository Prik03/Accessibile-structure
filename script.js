$(document).ready(function() {
console.log("Script loaded successfully.");

$('.showtags').on('mouseenter',function() {
    var tagName = $(this).prop("tagName").toLowerCase();
     $('.tag-label-first, .tag-label-last').remove();
    $(this).wrap("<div class='tag-wrapper'></div>");
    $(this).before("<span class='tag-label-first'>&lt;" + tagName + "&gt; </span>");
    $(this).after("<span class='tag-label-last'>&lt;/" + tagName + "&gt; </span>");
});

$('.showtags').on('mouseleave',function() {
    $(this).siblings('.tag-label-first').remove();
    $(this).siblings('.tag-label-last').remove();
    $(this).unwrap();   
});

});
