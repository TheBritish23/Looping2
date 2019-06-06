var dashify = function(sentence){
  var newsentence = sentence.split('')
  var vowels = ["a","e","i","o","u"]
  console.log(newsentence.length)
  for(x=0; x <= newsentence.length; x++){
    vowels.forEach(function(letter){
      console.log(letter + " " + newsentence[x])
      if(newsentence[x] === letter){
        newsentence[x]= "-";
      };
    });
    console.log(newsentence)
    return;
  }
}

$(document).ready(function() {
  $('form#list').submit(function(event){
     event.preventDefault()



  var words = $('#words').val()

  var newsentence = dashify(words)

  $('output').append(newsentence)

  $("#display").append(x);
})


  });
