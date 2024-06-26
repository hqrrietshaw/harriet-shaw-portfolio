$(document).ready(function() {

  $('.window').children('.buttons').mouseenter(function(){
    $(this).children('.buttons_hover_yes').show();
  });

  $('.window').children('.buttons').mouseleave(function(){
    $(this).children('.buttons_hover_yes').hide();
  });

  $('.button-close').click(function(){
    $(this).closest('.window').hide();
    if ($(this).closest('.window').attr("id") == "window-3") $("#window-3 .window-content").attr("src", "");
    $('.show').show();
  });

  $('.show').click(function(){
    $('.window').show();
    $(this).hide()
  });

  $('.button-rotate').click(function() {
    if ($(this).closest('.window').css('transform').localeCompare('matrix(1, 0, 0, 1, 0, 0)')==0){
      var rot = Math.random() * 360 - 0;
      $(this).closest('.window').css('transform', 'rotate(' + rot + 'deg) scale(1)');
    }
    else $(this).closest('.window').css('transform','rotate(0deg) scale(1)');
	});

  $('.button-transparent').click(function() {
    if ($(this).closest('.window').css('opacity') == 1)
      $(this).closest('.window').css({opacity: (Math.random() * 1)});
    else $(this).closest('.window').css({opacity: 1});
  });

  $(".window").draggable({handle: ".handle"});
  $(".window").resizable({
    minWidth: 300,
    minHeight: 200,
    create: function( event, ui ) {
        $(".ui-resizable-s").css("cursor","ns-resize");
        $(".ui-resizable-se").css("cursor","nwse-resize");
        $(".ui-resizable-e").css("cursor","ew-resize");
    },
    resize: function(event, ui ){
      var properHeight = $(".column-1").width();
      $(".column-2").height("100%");
      $(".column-3").height("100%");
      $(".column-2-holder").height("100%");
      $(".column-3-holder").height("100%");
    }
  });
  $(".column-1").resizable({
    containment: ".content-area",
    minWidth: 130,
    handles: "e",
      create: function( event, ui ) {
          $(".ui-resizable-e").css("cursor","ew-resize");
      },
      resize: function (event, ui){
        $(".column-2-holder").css("left",$(".column-1").width()+"px");
        $(".column-3-holder").css("left",$(".column-2").width()+"px");
        $(".column-4-holder").css("left",$(".column-3").width()+"px");
      }
    });
  $(".column-2-holder").css("left","150px");
  $(".column-2-holder").resizable({
    containment: ".content-area",
    alsoResize: ".column-2",
    minWidth: 150,
    handles: "e",
      create: function( event, ui ) {
          $(".ui-resizable-e").css("cursor","ew-resize");
      },
      resize: function (event, ui) {
          $(".column-3-holder").css("left",$(".column-2").width()+"px");
          $(".column-4-holder").css("left",$(".column-3").width()+"px");
      }
    });
  $(".column-3-holder").css("left","150px");
  $(".column-3-holder").resizable({
    containment: ".content-area",
    alsoResize: ".column-3",
    minWidth: 150,
    handles: "e",
      create: function( event, ui ) {
          $(".ui-resizable-e").css("cursor","ew-resize");
      },
      resize: function (event, ui) {
          $(".column-4-holder").css("left",$(".column-3").width()+"px");
      }
    });
  $(".column-4-holder").css("left","150px");

});
