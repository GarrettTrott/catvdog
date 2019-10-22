$(document).ready(function(){
  $(".dogpic").click(function(){
    $("ul#doglist").prepend("<li>Woof</li>");
  });
  $(".catpic").click(function(){
    $("ul#catlist").prepend("<li>Meow</li>");
  });
});
