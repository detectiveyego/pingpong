var pingExec = function(userIn){
  var result = [];
  for(var i = 1; i <= userIn; i++){
      var index = result.indexOf(i);
      if(i % 15 === 0) {
        result.splice(index, 0);
        result.push('pingpong');
      }else if(i % 5 === 0) {
        result.splice(index, 0);
        result.push('pong');
      }else if(i % 3 === 0) {
        result.splice(index, 0);
        result.push('ping');
      }else{
        result.push(i);
      }
  }

  return result;
};

$(document).ready(function(){
  $("#usr_input").submit(function(event){
    $("#sys_output").empty();
    var userIn = parseInt($("input#userIn").val());
    var output = pingExec(userIn);

    output.forEach(function(item){
      $("#sys_output").append('<li>' + item + '</li>');
    });
    event.preventDefault();
  });
});
