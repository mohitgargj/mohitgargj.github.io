function setFlag(){
    var view = document.getElementById("hidden");
    console.log("flag{hello_world}");
}
$(document).ready(function(){
    $("form").submit(function(event){
      event.preventDefault();
      var teamname = $("#teamname").val();
      var playername = $("#playername").val();
      var submit = $("#submit").val();
      $("#toast").load("startgame.php",{
        teamname : teamname,
        playername : playername,
        start_game :submit
      });
    });
   });

