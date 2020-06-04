


exports.getDate = getDate;

function getDate(){

  var today = new Date();


  //creates an options object to use with toLocaleDateString
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  //getting full length date with options parameters and language
  var day = today.toLocaleDateString("en-US", options);
  return day;
}

exports.add = function(num1,num2){

  let total = num1+num2;
  return total;
}
