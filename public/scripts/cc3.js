console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );


var newJoke = function(){
  objectToSend = {
  whoseJoke: $('#whoseJokeIn').val(),
  jokeQuestion: $('#questionIn').val(),
  punchLine: $('#punchlineIn').val()
};
};

//post
var postData = function(){

  //start AJAX
  $.ajax({
    type: 'POST',
    url: '/',
    data: objectToSend,
    success: function(data){
       console.log( 'back from post call:', data);
       for(var i = 0; i < data.length; i++){
        $('#outputDiv').append('<p>'+'<strong>' + 'Whose Joke: ' + '</strong>' + data[i].whoseJoke + '</p>');
        $('#outputDiv').append('<p>'+ '<strong>'  +'Question: '+ '</strong>' + data[i].jokeQuestion + '</p>');
        $('#outputDiv').append('<p>'+ '<strong>' +'Punchline: '+ '</strong>' + data[i].punchLine + '</p>');
       }

    }
});

getJokes();
}; //end postData

//GET
var getJokes = function (){
  $.ajax({
    type: 'GET',
    url: '/returnJoke',
    success: function(data) {
      console.log('get joke: ', data);

    }


  });

};//end GET



  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');
    newJoke();
    postData();
    $('#whoseJokeIn').val('');
    $('#questionIn').val('');
    $('#punchlineIn').val('');
  }); // end addJokeButton on click





}); // end doc ready
