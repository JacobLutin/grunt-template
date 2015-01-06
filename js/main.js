var coffee;

coffee = function(message) {
  var answer;
  if (message == null) {
    message = "Ready for some coffee?";
  }
  answer = confirm(message);
  return "Your answer is " + answer;
};

$(function() {
  var changeTab;
  changeTab = function(e) {
    var num;
    e.preventDefault();
    $('.tabs li').removeClass('active');
    $(this).toggleClass('active');
    num = $(this).html();
    return $('.box').html(num);
  };
  return $('.tabs li').click(changeTab);
});
