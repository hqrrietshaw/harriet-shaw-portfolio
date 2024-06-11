//jquery

$(document).ready(function() {

  /* framework */

  $('.item').click(function() {
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
    $(this).children('.item-arrow').hide();
    $(this).children('.item-arrow-blue').show();
    $('.column-1').children('.column-2-holder').show();
    $(this).siblings().children('.item-arrow').show();
    $(this).siblings().children('.item-arrow-blue').hide();
  });

  $('.item-icon-folder, .item-icon-normal').on('dragstart', function(event) { event.preventDefault(); });

  /* column-1 */

  /* projects */

  $('#item-1-projects').click(function(){
      $('#item-1-projects').removeClass("old-selected");
      $('#item-1-projects').children(".item-arrow-grey").hide();
      $('#item-1-projects').siblings().removeClass("old-selected");
      $('#item-1-projects').siblings().children(".item-arrow-grey").hide();
      $('.folder-projects').show();
      $('.folder-projects').siblings().hide();
      $('.folder-projects').children().removeClass("selected");
      $('.folder-projects').children().removeClass("old-selected");
      $('.folder-projects').children().children(".item-arrow-grey").hide();
      $('.folder-projects').children().children(".item-arrow-blue").hide();
      $('.folder-projects').children().children(".item-arrow").show();
  });

  /* about */

  $('#item-1-about').click(function(){
      $('#item-1-about').removeClass("old-selected");
      $('#item-1-about').children(".item-arrow-grey").hide();
      $('#item-1-about').siblings().removeClass("old-selected");
      $('#item-1-about').siblings().children(".item-arrow-grey").hide();
      $('.folder-about').show();
      $('.folder-about').siblings().hide();
      $('.folder-about').children().removeClass("selected");
      $('.folder-about').children().removeClass("old-selected");
      $('.folder-about').children().children(".item-arrow-grey").hide();
      $('.folder-about').children().children(".item-arrow-blue").hide();
      $('.folder-about').children().children(".item-arrow").show();
  });

  /* contact */


  $('#item-1-contact').click(function(){
      $('#item-1-contact').removeClass("old-selected");
      $('#item-1-contact').children(".item-arrow-grey").hide();
      $('#item-1-contact').siblings().removeClass("old-selected");
      $('#item-1-contact').siblings().children(".item-arrow-grey").hide();
      $('.folder-contact').show();
      $('.folder-contact').siblings().hide();
      $('.folder-contact').children().removeClass("selected");
      $('.folder-contact').children().removeClass("old-selected");
      $('.folder-contact').children().children(".item-arrow-grey").hide();
      $('.folder-contact').children().children(".item-arrow-blue").hide();
      $('.folder-contact').children().children(".item-arrow").show();
  });

  /* Column-2 */

  /* projects */

  var container = $('.folder-projects');
  var path = $('#item-1-projects');
  container.click(function(){
    path.removeClass("selected");
    path.addClass("old-selected");
    path.children(".item-arrow-blue").hide();
    path.children(".item-arrow").hide();
    path.children(".item-arrow-grey").show();
  });

  /* print */

  $('#item-2-print').click(function(){
      $('.column-3-holder').show();
      $('.folder-print').show();
      $('.folder-print').siblings().hide();
      $('.folder-print').children().removeClass("old-selected");
      $('.folder-print').children().removeClass("selected");
      $('#item-2-print').removeClass("old-selected");
      $('#item-2-print').children(".item-arrow-grey").hide();
      $('#item-2-print').children(".item-arrow").hide();
      $('#item-2-print').siblings().removeClass("old-selected");
      $('#item-2-print').siblings().children(".item-arrow-grey").hide();
  });

  /* websites */

  $('#item-2-websites').click(function(){
      $('.column-3-holder').show();
      $('.folder-websites').show();
      $('.folder-websites').siblings().hide();
      $('.folder-websites').children().removeClass("old-selected");
      $('.folder-websites').children().removeClass("selected");
      $('#item-2-websites').removeClass("old-selected");
      $('#item-2-websites').children(".item-arrow-grey").hide();
      $('#item-2-websites').children(".item-arrow").hide();
      $('#item-2-websites').siblings().removeClass("old-selected");
      $('#item-2-websites').siblings().children(".item-arrow-grey").hide();
  });

  /* extras */

  $('#item-2-extras').click(function(){
      $('.column-3-holder').show();
      $('.folder-extras').show();
      $('.folder-extras').siblings().hide();
      $('.folder-extras').children().removeClass("old-selected");
      $('.folder-extras').children().removeClass("selected");
      $('#item-2-extras').removeClass("old-selected");
      $('#item-2-extras').children(".item-arrow-grey").hide();
      $('#item-2-extras').children(".item-arrow").hide();
      $('#item-2-extras').siblings().removeClass("old-selected");
      $('#item-2-extras').siblings().children(".item-arrow-grey").hide();
  });

  $('#item-2-idk').click(function(){
    $('.column-3-holder').show();
    $('.folder-idk').show();
    $('.folder-idk').siblings().hide();
    $('.folder-idk').children().removeClass("old-selected");
    $('.folder-idk').children().removeClass("selected");
    $('#item-2-idk').removeClass("old-selected");
    $('#item-2-idk').children(".item-arrow-grey").hide();
    $('#item-2-idk').children(".item-arrow").hide();
    $('#item-2-idk').siblings().removeClass("old-selected");
    $('#item-2-idk').siblings().children(".item-arrow-grey").hide();
});

  /* process idea
$('#item-2-process').click(function(){
  $('.column-3-holder').show();
  $('.folder-process').show();
  $('.folder-process').siblings().hide();
  $('.folder-process').children().removeClass("old-selected");
  $('.folder-process').children().removeClass("selected");
  $('#item-2-process').removeClass("old-selected");
  $('#item-2-process').children(".item-arrow-grey").hide();
  $('#item-2-process').children(".item-arrow").hide();
  $('#item-2-process').siblings().removeClass("old-selected");
  $('#item-2-process').siblings().children(".item-arrow-grey").hide();
});
  /* about */

  var aboutContainer = $('.folder-about');
  aboutContainer.click(function(){
    $('#item-1-about').removeClass("selected");
    $('#item-1-about').addClass("old-selected");
    $('#item-1-about').children(".item-arrow-blue").hide();
    $('#item-1-about').children(".item-arrow").hide();
    $('#item-1-about').children(".item-arrow-grey").show();
  });

  $('#about').dblclick(function() {
    alert("Hi I'm Harriet (she/her). I'm a 24 year old UX designer. I'm also a yoga teacher, dog walker, social media co-ordinator, and a creative intern. I'm open to all design work. Anything to do with design, I'm your gal just send me an email: harrietshawbusiness@gmail.com");
  });


  /* "CV" section */
  $('#item-3-cv').dblclick(function() {
    window.open('Harriet-Shaw-CV-24.png');
  });


  /* Contact */

  var container = $('.folder-contact');
  container.click(function(){
    $('#item-1-contact').removeClass("selected");
    $('#item-1-contact').addClass("old-selected");
    $('#item-1-contact').children(".item-arrow-blue").hide();
    $('#item-1-contact').children(".item-arrow").hide();
    $('#item-1-contact').children(".item-arrow-grey").show();
  });

  /*email*/

  $('#item-2-email').dblclick(function() {
      alert("email address copied to clipboard");
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($("#email-address").text()).select();
      document.execCommand("copy");
      $temp.remove();
  });

  $('#item-2-email').click(function(){
      $('.column-3-holder').hide();
      $('#item-2-email1').siblings().removeClass("old-selected");
      $('#item-2-email1').siblings().children(".item-arrow-grey").hide();
  });
  /* column-3 */

  $('.column-3').click(function(){
      $('.column-2-holder').show();
      $('.column-3-holder').show();
  });

  /* projects */

  /* print */

  var container = $('.folder-print');
  container.click(function(){
    $('.folder-projects').show();
    $('#item-2-print').removeClass("selected");
    $('#item-2-print').addClass("old-selected");
    $('#item-2-print').children(".item-arrow-blue").hide();
    $('#item-2-print').children(".item-arrow").hide();
    $('#item-2-print').children(".item-arrow-grey").show();
    $('#item-1-projects').addClass("old-selected");
    $('#item-1-projects').children(".item-arrow-blue").hide();
    $('#item-1-projects').children(".item-arrow").hide();
    $('#item-1-projects').children(".item-arrow-grey").show();
  });
  
  $('#item-3-fbb').dblclick(function() {
    window.open('https://drive.google.com/drive/u/0/folders/1K-uBWcSjsz6LCcnK-Qii6oo0oAaJHFva');
      window.open('https://drive.google.com/file/d/1uG_eynq4vBAEASNVzqaqlXfq4aDyqhQp/view');
     
  });

  $('#item-3-stem').dblclick(function() {
    window.open('https://drive.google.com/drive/u/0/folders/1wUoKTXtgUXF7brOjyUDOZoJCh71LdBZS'); 
      window.open('vis mockup 1.png');
  });

  $('#item-3-love').dblclick(function() {
      window.open('https://drive.google.com/drive/u/0/folders/1PKivXfl_cdjrx7a78NXXRc0XtxkzFBCt'); 
      window.open('component 1.png'); 
       });

         /*
  $('#item-3-dating').dblclick(function() {
      window.open('phone-final.png');
  });



  /* websites */

  var container = $('.folder-websites');
  container.click(function(){
    $('.folder-projects').show();
    $('#item-2-websites').removeClass("selected");
    $('#item-2-websites').addClass("old-selected");
    $('#item-2-websites').children(".item-arrow-blue").hide();
    $('#item-2-websites').children(".item-arrow").hide();
    $('#item-2-websites').children(".item-arrow-grey").show();
    $('#item-1-projects').addClass("old-selected");
    $('#item-1-projects').children(".item-arrow-blue").hide();
    $('#item-1-projects').children(".item-arrow").hide();
    $('#item-1-projects').children(".item-arrow-grey").show();
  });

  
  $('#item-3-MyHome').dblclick(function() {
    window.open('https://drive.google.com/file/d/1bWfa66qs-zN2M_b804QJ5uWc-Vx8o4A6/view');
    window.open('https://drive.google.com/drive/u/0/folders/1-I2I3RS0O_rZ0afA40uFeCHQ1R0QdZ3N');
    window.open('https://introspect-ux.netlify.app');

    /* folder idea  openNewWindow(500, 315, "Final Project Folder ", "#item-3-myHome"); */
  });


  $('#item-3-ally').dblclick(function() {
      window.open('https://phase3ally.netlify.app');
  });

  $('#item-3-Serene').dblclick(function() {
    window.open('https://serenesite.netlify.app');
});

  $('#item-3-ghost').dblclick(function() {
      window.open('https://phase2ghost.netlify.app');
  });

  $('#item-3-matrix').dblclick(function() {
      window.open('https://thewonderland.netlify.app');
  });

  $('#item-3-gallery').dblclick(function() {
      window.open('https://galleryexhibit.netlify.app');
  });

  $('#item-3-still').dblclick(function() {
      window.open('https://stillimageart.netlify.app');

  });

  $('#item-3-hiv').dblclick(function() {
      window.open('https://hivstory.netlify.app');
  });

  /* extras */

  var container = $('.folder-extras');
  container.click(function(){
     $('.folder-projects').show();
    $('#item-2-extras').removeClass("selected");
    $('#item-2-extras').addClass("old-selected");
    $('#item-2-extras').children(".item-arrow-blue").hide();
    $('#item-2-extras').children(".item-arrow").hide();
    $('#item-2-extras').children(".item-arrow-grey").show();
    $('#item-1-projects').addClass("old-selected");
    $('#item-1-projects').children(".item-arrow-blue").hide();
    $('#item-1-projects').children(".item-arrow").hide();
    $('#item-1-projects').children(".item-arrow-grey").show();
  });


/* $('#item-3-man').dblclick(function() {
      window.open('component-humanplus.png');
  });*/ 

  $('#item-3-hi').dblclick(function() {
      window.open('superhi.html');
  });

  $('#item-3-gif').dblclick(function() {
    openNewWindow(350, 200, "GIFs Folder", "#item-3-gif");

  });
  $('#item-3-diploma').dblclick(function() {
      window.open('uxdip.png');
      window.open('https://drive.google.com/drive/u/0/folders/1MVqdApvFoTshgObH3ielr_9tf5EuwRVS');
  });
/*
  $('#item-3-datavis').dblclick(function() {
    window.open('https://charmed-toothpaste-12b.notion.site/Learning-Journal-YR-2-UNIT-1-bb17028fb52d454d837f8e66f219e549');
});

$('#item-3-coding').dblclick(function() {
  window.open('https://charmed-toothpaste-12b.notion.site/b6c2ad4c03fd464d9e27f93d1cedb48d?v=8590de3a20af4af287aecfb2cc5ece0f');
});

    /* idk */


  var container = $('.folder-idk');
  container.click(function(){
     $('.folder-projects').show();
    $('#item-2-idk').removeClass("selected");
    $('#item-2-idk').addClass("old-selected");
    $('#item-2-idk').children(".item-arrow-blue").hide();
    $('#item-2-idk').children(".item-arrow").hide();
    $('#item-2-idk').children(".item-arrow-grey").show();
    $('#item-1-projects').addClass("old-selected");
    $('#item-1-projects').children(".item-arrow-blue").hide();
    $('#item-1-projects').children(".item-arrow").hide();
    $('#item-1-projects').children(".item-arrow-grey").show();
  });


  $('#item-3-tgtg').dblclick(function() {
    window.open('https://drive.google.com/drive/u/0/folders/1L4SOgaMcomDxZidE22n3WPIbHBIzVVjw');
    window.open('https://drive.google.com/file/d/1Q0hJfJcRJO2FREjkI1SKNwPJAaXw0CgI/view');


  });

  $('#item-3-tube').dblclick(function() {
    window.open('https://drive.google.com/drive/u/0/folders/1yJDcz47KpVyAQPKI8nDCJmUI29R8n1YP');  
    window.open('https://ldnboroughroughsleeping.netlify.app/');  
    window.open('https://abadondedtubemap.netlify.app');  
    window.open('https://youtu.be/GEFz9jTzjPk'); 

  });


$('#item-3-coach').dblclick(function() {
  window.open('https://drive.google.com/drive/u/0/folders/1t4Rmh3-I6hdghfIVtHI3ZGQIiSLxZyaq');
  window.open(' https://youtu.be/5Svh0dwFgRU');

});


$('#item-3-baby').dblclick(function() {
  window.open('https://youtu.be/axRoTJT1Hzc'); 
  window.open('https://drive.google.com/drive/u/0/folders/1ByQokoPmC-VssH6Os-LJW6TYZUUVotV_');
  window.open('https://drive.google.com/drive/u/0/folders/1SMzKSH-xKoBS7rM4c0D13aJSyJ1WOV9H');


});

$('#item-3-discover').dblclick(function() {
  window.open('https://drive.google.com/drive/u/0/folders/1z212a1BnkcnOwFXi0gRseHROyoWe1aHs'); 
  window.open('https://www.youtube.com/watch?v=VAft3TZpIk8'); });
  /* process idea

  var container = $('.process-idk');
  container.click(function(){
     $('.folder-projects').show();
    $('#item-2-process').removeClass("selected");
    $('#item-2-process').addClass("old-selected");
    $('#item-2-process').children(".item-arrow-blue").hide();
    $('#item-2-process').children(".item-arrow").hide();
    $('#item-2-process').children(".item-arrow-grey").show();
    $('#item-1-projects').addClass("old-selected");
    $('#item-1-projects').children(".item-arrow-blue").hide();
    $('#item-1-projects').children(".item-arrow").hide();
    $('#item-1-projects').children(".item-arrow-grey").show();
  });


  $('#item-3-man').dblclick(function() {
      window.open('component-humanplus.png');
  });

  /* contact */


  var container = $('.folder-harry');
  container.click(function(){
    $('.folder-contact').show();
    $('#item-2-harry').removeClass("selected");
    $('#item-2-harry').addClass("old-selected");
    $('#item-2-harry').children(".item-arrow-blue").hide();
    $('#item-2-harry').children(".item-arrow").hide();
    $('#item-2-harry').children(".item-arrow-grey").show();
    $('#item-1-contact').addClass("old-selected");
    $('#item-1-contact').children(".item-arrow-blue").hide();
    $('#item-1-contact').children(".item-arrow").hide();
    $('#item-1-contact').children(".item-arrow-grey").show();
  });



 /// $('#item-3-harry-site').dblclick(function() {
  ////    window.open('https://harryshaw.com/');
 //// });

  //$('#item-3-harry-ig').dblclick(function() {
    //  window.open('https://www.instagram.com/harrietshawbusiness/?hl=en');
 // });

  //$('#item-3-harry-twitter').dblclick(function() {
  //    window.open('http:///');
 // });




function openNewWindow(sizeX, sizeY, title, src, id) {
  $('#window-3 .title').html(title);
  $('#window-3 .title-icon').attr("src", $(id + " .item-icon-normal").attr("src"));
  $('#window-3 .window-content').attr("src", src);
  
  // Calculate the center of the screen
  var centerX = $(window).width() / 2;
  var centerY = $(window).height() / 2;
  
  // Calculate the position of the window relative to the center
  var positionX = centerX - (sizeX / 2);
  var positionY = centerY - (sizeY / 2);
  
  // Set the window position
  $('#window-3').css('left', positionX);
  $('#window-3').css('top', positionY);
  
  $('#window-3').width(sizeX);
  $('#window-3').height(sizeY);
  $('#window-3').show();
  $('#window-3').click();
}

});