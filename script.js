/*global $*/
//index.html









//sad.html
    var url = "https://api.soundcloud.com/tracks?q=sad&client_id=5aa8e389ba4e24b6106af5159ab3e344";
$("#search-button").click(function(){    
    $.ajax({
    url:url,
    method: "GET",
    success: function(response) {
for(var i=0; i<response.length; i++){
    var songs=[response[i].title];
    console.log(response[i].title);
}
for(var i=0; i<response.length; i++){
    var genres=[response[i].genre];
    console.log(response[i].genre);
}
for(var i=0; i<response.length; i++){
    var songlengths=[response[i].duration];
    console.log(response[i].duration);
}
for(var i=0; i<response.length; i++){
    var links=[response[i].permalink_url];
    console.log(response[i].permalink_url);
}
    songmethod();
     
    }
});    
   
function songmethod(){
   songs.forEach(function(eachsong, index){
            $("#songs").append("<p>"+eachsong+"</p>");
        });
   imgurl.forEach(function(eachimage){
            $("#images").append("<img src="+eachimage+">");
        });
         artist.forEach(function(eachartist){
            $("#artists").append("<p>"+eachartist+"</p>");
        });
         links.forEach(function(eachlink){
            $("#links").append("<a href="+eachlink+">Song Link</a>");
        });
}