var dashify = function(sentence){
  console.log(sentence)
 return;
}

$(document).ready(function() {
  $('form#list').submit(function(event){
     event.preventDefault()

  var words = $('#words').val()

  var newsentence = dashify(words);

  $('output').append(newsentence)

  var dashify = ['A', 'E', 'I', 'O', 'U'];
  for (var index = 0; index < languages.length; index += 1) {
    alert('I love ' + dashify[index] + '!');
  }


  });
});
