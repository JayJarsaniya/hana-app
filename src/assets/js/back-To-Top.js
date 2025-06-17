jQuery(document).ready(function () {
  var path = document.querySelector(".progress-wrap path");

  if (!path) return;

  var pathLength = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = "none";
  path.style.strokeDasharray = pathLength + " " + pathLength;
  path.style.strokeDashoffset = pathLength;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 10ms linear";

  var updateProgress = function () {
    var scroll = jQuery(window).scrollTop(),
        height = jQuery(document).height() - jQuery(window).height(),
        progress = pathLength - (scroll * pathLength) / height;
    path.style.strokeDashoffset = progress;
  };

  updateProgress();
  jQuery(window).scroll(updateProgress);

  jQuery(window).on("scroll", function () {
    jQuery(this).scrollTop() > 50
      ? jQuery(".progress-wrap").addClass("active-progress")
      : jQuery(".progress-wrap").removeClass("active-progress");
  });

  jQuery(".progress-wrap").on("click", function (e) {
    e.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, 550);
    return false;
  });
});
