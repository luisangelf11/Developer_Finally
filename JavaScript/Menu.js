//Functions of menu

$(".subClick").click(function(){
    $(this).children("ul").slideToggle();
    let sub = document.getElementById("sub2");
    sub.style.display = "none";
});

$("ul").click(function(ev){
    ev.stopPropagation();
  })

$(".subClick2").click(function(){
    $(this).children("ul").slideToggle();
    let sub = document.getElementById("sub1");
    sub.style.display = "none";
});

