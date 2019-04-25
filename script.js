/* global $ */
//index.html
// $("#sad").click(function(){
//           $('#name').show;
//           });

var input=$("#names").val();


//overall
function emptySongInfo(){
    $("#songname").empty();
     $("#artists").empty();
      $("#lengths").empty();
       $("#images").empty();
        $("#links").empty();
}

//sad.html
var url = "https://api.soundcloud.com/tracks?q=sad&client_id=5aa8e389ba4e24b6106af5159ab3e344";
$("#search-button").click(function(){    
    $("#name").hide();
    $("#search-button").hide();
   var input = $("#names").val();
   console.log(input)
   $("#title").append("<h1>"+input+"'s Playlist</h1>");
   emptySongInfo();
    $.ajax({
        url:url,
        method: "GET",
        success: function(response) {
            var songs=[];
            console.log(response);
            response.forEach(function(song){
                songs.push(song.title);
            });
            console.log(songs);
            songs.forEach(function(eachsong){
                $("#songname").append("<p>"+eachsong+"</p>");
            });
            
            var songlinks=[];
            console.log(response);
            response.forEach(function(song){
            songlinks.push(song.permalink_url);
            });
            console.log(songs);
            songlinks.forEach(function(eachlink){
                $("#links").append("<a href="+eachlink+">Song Link</a>");
            });
            
            
            var songimg=[];
            console.log(response);
            response.forEach(function(song){
            songimg.push(song.artwork_url);
            });
            console.log(songs);
            songimg.forEach(function(eachimg){
                $("#images").append("<img src="+eachimg+">");
            });
            
            var songowners=[];
            console.log(response);
            response.forEach(function(song){
            songowners.push(song.user.permalink_url);
            });
            songowners.forEach(function(eachowner){
                $("#owners").append("<a href="+eachowner+">Owner of the song</a>");
            });
            
            var songreposts=[];
            console.log(response);
            response.forEach(function(song){
            songreposts.push(song.reposts_count);
            });
            console.log(songs);
            songreposts.forEach(function(eachrepost){
                $("#artists").append("<p>Repost:"+eachrepost+"</p>");
            });
        }
    }); 
});


//party.html
var url1 = "https://api.soundcloud.com/tracks?q=party&client_id=5aa8e389ba4e24b6106af5159ab3e344";
$("#search-button").click(function(){    
    $("#name").hide();
    $("#search-button").hide();
   var input = $("#names").val();
   console.log(input)
   $("#title1").append("<h1>"+input+"'s Playlist</h1>");
    $("#songname1").empty();
     $("#artists1").empty();
      $("#lengths1").empty();
       $("#images1").empty();
        $("#links1").empty();
    $.ajax({
        url:url1,
        method: "GET",
        success: function(response) {
            var songs1=[];
            console.log(response);
            response.forEach(function(song){
                songs1.push(song.title);
            });
            songs1.forEach(function(eachsong){
                $("#songname1").append("<p>"+eachsong+"</p>");
            });
            
            var songlinks1=[];
            console.log(response);
            response.forEach(function(song){
            songlinks1.push(song.permalink_url);
            });
            songlinks1.forEach(function(eachlink){
                $("#links1").append("<a href="+eachlink+">Song Link</a>");
            });
            
            
            var songimg1=[];
            console.log(response);
            response.forEach(function(song){
            songimg1.push(song.artwork_url);
            });
            songimg1.forEach(function(eachimg){
                $("#images1").append("<img src="+eachimg+">");
            });
            
            var songowners1=[];
            console.log(response);
            response.forEach(function(song){
            songowners1.push(song.user.permalink_url);
            });
            songowners1.forEach(function(eachowner){
                $("#owners1").append("<a href="+eachowner+">Owner of the song</a>");
            });
            
            var songreposts1=[];
            console.log(response);
            response.forEach(function(song){
            songreposts1.push(song.reposts_count);
            });
            songreposts1.forEach(function(eachrepost){
                $("#artists1").append("<p>Repost:"+eachrepost+"</p>");
            });
            
        }
    }); 
});


//heartbroken.html
var url2 = "https://api.soundcloud.com/tracks?q=heartbroken&client_id=5aa8e389ba4e24b6106af5159ab3e344";
$("#search-button").click(function(){    
  
    $("#name").hide();
    $("#search-button").hide();
   var input = $("#names").val();
   console.log(input)
   $("#title2").append("<h1>"+input+"'s Playlist</h1>");
    $("#songname2").empty();
     $("#artists2").empty();
      $("#lengths2").empty();
       $("#images2").empty();
        $("#links2").empty();
    $.ajax({
        url:url2,
        method: "GET",
        success: function(response) {
            var songs2=[];
            console.log(response);
            response.forEach(function(song){
                songs2.push(song.title);
            });
            songs2.forEach(function(eachsong){
                $("#songname2").append("<p>"+eachsong+"</p>");
            });
            
            var songlinks2=[];
            console.log(response);
            response.forEach(function(song){
            songlinks2.push(song.permalink_url);
            });
            songlinks2.forEach(function(eachlink){
                $("#links2").append("<a href="+eachlink+">Song Link</a>");
            });
            
            
            var songimg2=[];
            console.log(response);
            response.forEach(function(song){
            songimg2.push(song.artwork_url);
            });
            songimg2.forEach(function(eachimg){
                $("#images2").append("<img src="+eachimg+">");
            });
            
            var songowners2=[];
            console.log(response);
            response.forEach(function(song){
            songowners2.push(song.user.permalink_url);
            });
            songowners2.forEach(function(eachowner){
                $("#owners2").append("<a href="+eachowner+">Owner of the song</a>");
            });
            var songreposts2=[];
            console.log(response);
            response.forEach(function(song){
            songreposts2.push(song.reposts_count);
            });
            songreposts2.forEach(function(eachrepost){
                $("#artists2").append("<p>Repost:"+eachrepost+"</p>");
            });
        }
    }); 
});

//bored.html

var url3 = "https://api.soundcloud.com/tracks?q=bored&client_id=5aa8e389ba4e24b6106af5159ab3e344";
$("#search-button").click(function(){    
    $("#name").hide();
    $("#search-button").hide();
   var input = $("#names").val();
   console.log(input)
   $("#title3").append("<h1>"+input+"'s Playlist</h1>");
    $("#songname3").empty();
     $("#artists3").empty();
      $("#lengths3").empty();
       $("#images3").empty();
        $("#links3").empty();
    $.ajax({
        url:url3,
        method: "GET",
        success: function(response) {
            var songs3=[];
            console.log(response);
            response.forEach(function(song){
                songs3.push(song.title);
            });
            songs3.forEach(function(eachsong){
                $("#songname3").append("<p>"+eachsong+"</p>");
            });
            
            var songlinks3=[];
            console.log(response);
            response.forEach(function(song){
            songlinks3.push(song.permalink_url);
            });
            songlinks3.forEach(function(eachlink){
                $("#links3").append("<a href="+eachlink+">Song Link</a>");
            });
            
            
            var songimg3=[];
            console.log(response);
            response.forEach(function(song){
            songimg3.push(song.artwork_url);
            });
            songimg3.forEach(function(eachimg){
                $("#images3").append("<img src="+eachimg+">");
            });
            
            var songowners3=[];
            console.log(response);
            response.forEach(function(song){
            songowners3.push(song.user.permalink_url);
            });
            songowners3.forEach(function(eachowner){
                $("#owners3").append("<a href="+eachowner+">Owner of the song</a>");
            });
            
            var songreposts3=[];
            console.log(response);
            response.forEach(function(song){
            songreposts3.push(song.reposts_count);
            });
            songreposts3.forEach(function(eachrepost){
                $("#artists3").append("<p>Repost:"+eachrepost+"</p>");
            });
        }
    }); 
});

//mad.html
var url4 = "https://api.soundcloud.com/tracks?q=bored&client_id=5aa8e389ba4e24b6106af5159ab3e344";
$("#search-button").click(function(){    
    $("#name").hide();
    $("#search-button").hide();
   var input = $("#names").val();
   console.log(input)
   $("#title4").append("<h1>"+input+"'s Playlist</h1>");
    $("#songname4").empty();
     $("#artists4").empty();
      $("#lengths4").empty();
       $("#images4").empty();
        $("#links4").empty();
    $.ajax({
        url:url4,
        method: "GET",
        success: function(response) {
            var songs4=[];
            console.log(response);
            response.forEach(function(song){
                songs4.push(song.title);
            });
            songs4.forEach(function(eachsong){
                $("#songname4").append("<p>"+eachsong+"</p>");
            });
            
            var songlinks4=[];
            console.log(response);
            response.forEach(function(song){
            songlinks4.push(song.permalink_url);
            });
            songlinks4.forEach(function(eachlink){
                $("#links4").append("<a href="+eachlink+">Song Link</a>");
            });
            
            
            var songimg4=[];
            console.log(response);
            response.forEach(function(song){
            songimg4.push(song.artwork_url);
            });
            songimg4.forEach(function(eachimg){
                $("#images4").append("<img src="+eachimg+">");
            });
            
            var songowners4=[];
            console.log(response);
            response.forEach(function(song){
            songowners4.push(song.user.permalink_url);
            });
            songowners4.forEach(function(eachowner){
                $("#owners4").append("<a href="+eachowner+">Owner of the song</a>");
            });
            
            var songreposts4=[];
            console.log(response);
            response.forEach(function(song){
            songreposts4.push(song.reposts_count);
            });
            songreposts4.forEach(function(eachrepost){
                $("#artists4").append("<p>Repost:"+eachrepost+"</p>");
            });
        }
    }); 
});
//love.html
var url5 = "https://api.soundcloud.com/tracks?q=love&client_id=5aa8e389ba4e24b6106af5159ab3e344";
$("#search-button").click(function(){    
    $("#name").hide();
    $("#search-button").hide();
   var input = $("#names").val();
   console.log(input)
   $("#title5").append("<h1>"+input+"'s Playlist</h1>");
    $("#songname5").empty();
     $("#artists5").empty();
      $("#lengths5").empty();
       $("#images5").empty();
        $("#links5").empty();
    $.ajax({
        url:url5,
        method: "GET",
        success: function(response) {
            var songs5=[];
            console.log(response);
            response.forEach(function(song){
                songs5.push(song.title);
            });
            songs5.forEach(function(eachsong){
                $("#songname5").append("<p>"+eachsong+"</p>");
            });
            
            var songlinks5=[];
            console.log(response);
            response.forEach(function(song){
            songlinks5.push(song.permalink_url);
            });
            songlinks5.forEach(function(eachlink){
                $("#links5").append("<a href="+eachlink+">Song Link</a>");
            });
            
            
            var songimg5=[];
            console.log(response);
            response.forEach(function(song){
            songimg5.push(song.artwork_url);
            });
            songimg5.forEach(function(eachimg){
                $("#images5").append("<img src="+eachimg+">");
            });
            
            var songowners5=[];
            console.log(response);
            response.forEach(function(song){
            songowners5.push(song.user.permalink_url);
            });
            songowners5.forEach(function(eachowner){
                $("#owners5").append("<a href="+eachowner+">Owner of the song</a>");
            });
            
            var songreposts5=[];
            console.log(response);
            response.forEach(function(song){
            songreposts5.push(song.reposts_count);
            });
            songreposts5.forEach(function(eachrepost){
                $("#artists5").append("<p>Repost:"+eachrepost+"</p>");
            });
        }
    }); 
});
//tired.html
var url6 = "https://api.soundcloud.com/tracks?q=tired&client_id=5aa8e389ba4e24b6106af5159ab3e344";
$("#search-button").click(function(){    
    $("#name").hide();
    $("#search-button").hide();
   var input = $("#names").val();
   console.log(input)
   $("#title6").append("<h1>"+input+"'s Playlist</h1>");
    $("#songname6").empty();
     $("#artists6").empty();
      $("#lengths6").empty();
       $("#images6").empty();
        $("#links6").empty();
    $.ajax({
        url:url6,
        method: "GET",
        success: function(response) {
            var songs6=[];
            console.log(response);
            response.forEach(function(song){
                songs6.push(song.title);
            });
            songs6.forEach(function(eachsong){
                $("#songname6").append("<p>"+eachsong+"</p>");
            });
            
            var songlinks6=[];
            console.log(response);
            response.forEach(function(song){
            songlinks6.push(song.permalink_url);
            });
            songlinks6.forEach(function(eachlink){
                $("#links6").append("<a href="+eachlink+">Song Link</a>");
            });
            
            
            var songimg6=[];
            console.log(response);
            response.forEach(function(song){
            songimg6.push(song.artwork_url);
            });
            songimg6.forEach(function(eachimg){
                $("#images6").append("<img src="+eachimg+">");
            });
            
            var songowners6=[];
            console.log(response);
            response.forEach(function(song){
            songowners6.push(song.user.permalink_url);
            });
            songowners6.forEach(function(eachowner){
                $("#owners6").append("<a href="+eachowner+">Owner of the song</a>");
            });
            
            var songreposts6=[];
            console.log(response);
            response.forEach(function(song){
            songreposts6.push(song.reposts_count);
            });
            songreposts6.forEach(function(eachrepost){
                $("#artists6").append("<p>Repost:"+eachrepost+"</p>");
            });
        }
    }); 
});
//happy.html
var url7 = "https://api.soundcloud.com/tracks?q=happy&client_id=5aa8e389ba4e24b6106af5159ab3e344";
$("#search-button").click(function(){    
    $("#name").hide();
    $("#search-button").hide();
   var input = $("#names").val();
   console.log(input)
   $("#title7").append("<h1>"+input+"'s Playlist</h1>");
    $("#songname7").empty();
     $("#artists7").empty();
      $("#lengths7").empty();
       $("#images7").empty();
        $("#links7").empty();
    $.ajax({
        url:url7,
        method: "GET",
        success: function(response) {
            var songs7=[];
            console.log(response);
            response.forEach(function(song){
                songs7.push(song.title);
            });
            songs7.forEach(function(eachsong){
                $("#songname7").append("<p>"+eachsong+"</p>");
            });
            
            var songlinks7=[];
            console.log(response);
            response.forEach(function(song){
            songlinks7.push(song.permalink_url);
            });
            songlinks7.forEach(function(eachlink){
                $("#links7").append("<a href="+eachlink+">Song Link</a>");
            });
            
            
            var songimg7=[];
            console.log(response);
            response.forEach(function(song){
            songimg7.push(song.artwork_url);
            });
            songimg7.forEach(function(eachimg){
                $("#images7").append("<img src="+eachimg+">");
            });
            
            var songowners7=[];
            console.log(response);
            response.forEach(function(song){
            songowners7.push(song.user.permalink_url);
            });
            songowners7.forEach(function(eachowner){
                $("#owners7").append("<a href="+eachowner+">Owner of the song</a>");
            });
            
            var songreposts7=[];
            console.log(response);
            response.forEach(function(song){
            songreposts7.push(song.reposts_count);
            });
            songreposts7.forEach(function(eachrepost){
                $("#artists7").append("<p>Repost:"+eachrepost+"</p>");
            });
        }
    
    }); 
});