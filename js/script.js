var dashify = function(sentence){
  var newsentence = sentence.split('')
  var vowels = ["a","e","i","o","u"]
  for(x=0; x < newsentence.length; x++){
    vowels.forEach(function(letter){
      if(newsentence[x] === letter){
        newsentence[x]= "-";
      };
    });
  }
  console.log(newsentence)
  return newsentence;
}

$(document).ready(function() {
  $('form#list').submit(function(event){
     event.preventDefault()



  var words = $('#words').val()

  var newsentence = dashify(words)

  $('#output').append(newsentence)

  $("#display").append(x);
})


  });
