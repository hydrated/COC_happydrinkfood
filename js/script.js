window.fbAsyncInit = function() {
  FB.init({
    appId      : '526288334205427',
    xfbml      : true,
    version    : 'v2.5'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));



function findID(){
  FB.login(function(response){
    console.log(response);
    if (response.status == "connected"){
      FB.api("/me", function(response){
        console.log(response);
      });
    } else {
      console.log("connect fall");
    }
  });
  
}