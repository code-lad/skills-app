//        Getting Document Ready
$(document).ready(function() {
  //        -------------------------------------------------------------
  //        Materializecss
  //        --------------
  //        Carousel Slides
  $(".carousel").carousel();
  //        Side Nav Trigger
  $(".sidenav").sidenav();
  //        Picture Zoom On Click
  $(".materialboxed").materialbox();
  //        Parallax
  $(".parallax").parallax();
  //        Tab Nav Trigger
  $(".tabs").tabs();
  //        Date Picker Trigger
  $(".datepicker").datepicker({
    disableWeekends: true,
  });
  //        Page Scrollspy Trigger
  $(".scrollspy").scrollSpy();
  //        Dropdown Trigger
  $(".dropdown-trigger").dropdown();
  //        Slider Trigger
  $(".slider").slider();
  //        Modal Trigger
  $(".modal").modal();
  //        Collapsible Trigger
  $(".collapsible").collapsible();
  $("#textarea").characterCounter();
});
