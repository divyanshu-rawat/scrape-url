 function statusChangeCallback(response) {
           

            console.log('statusChangeCallback');
            // console.log(JSON.stringify(response,null,4));
            // The response object is returned with a status field that lets the
            // app know the current login status of the person.
            // Full docs on the response object can be found in the documentation
            // for FB.getLoginStatus().

            // var access_token = response.authResponse.accessToken;

            // var access_token = "EAACEdEose0cBAIzsAFxkclarmbdGmYxZBzYkevzrEpCRkDW9KpTx2ukaXZAqkYVKiLQX0JpCbSQtn5hNg7AHkZBV5RxdDuS4eNet4ZCeuZBTZCdjY3H1PybT0WIXJMYEA2xgqIb3ZA03p6TFfz12KBoWpkU7n08ShlbDgm3ZCVzRb63apERjStDs2iAQjxZAeWYMZD"

	            $(document).ready(function () {
	            $('.graph_call_info').on('click',function () {

					$('.loading').show();
					$('.my_data').empty();
					$('.meta_data').empty();



	            		var url= $("#comment").val();
				        $.ajax({
				        url: 'https://graph.facebook.com/?id='+url+'&scrape=true',
				            success: function(data){
				               $('.loading').hide();



				               console.log(JSON.stringify(data,null,4));

				               var img_url = data.id.replace("watch?v=", "embed/"); 

  								 $('.my_data').append("<iframe type='text/html' width='260' height='180'" + 
    								"src="+img_url+" frameborder='0' > </iframe>");  



  								$('.meta_data').append("<h4>Title:"+data.og_object.title+"</h4>"); 

  								$('.meta_data').append("<p>Description:"+data.og_object.description+"</p>"); 


				           }
				    });



			});

});

            if (response.status === 'connected') {
                // Logged into your app and Facebook.
                testAPI();
            } else {
                // The person is not logged into your app or we are unable to tell.
                document.getElementById('status').innerHTML = 'Please log ' +
                    'into this app.';
            }
        }

        // This function is called when someone finishes with the Login
        // Button.  See the onlogin handler attached to it in the sample
        // code below.
        function checkLoginState() {
            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
        }

        window.fbAsyncInit = function() {
            FB.init({
                appId: '1831873327134052',
                cookie: true, // enable cookies to allow the server to access 
                // the session
                xfbml: true, // parse social plugins on this page
                version: 'v2.8' // use graph api version 2.8
            });

            // Now that we've initialized the JavaScript SDK, we call 
            // FB.getLoginStatus().  This function gets the state of the
            // person visiting this page and can return one of three states to
            // the callback you provide.  They can be:
            //
            // 1. Logged into your app ('connected')
            // 2. Logged into Facebook, but not your app ('not_authorized')
            // 3. Not logged into Facebook and can't tell if they are logged into
            //    your app or not.
            //
            // These three cases are handled in the callback function.

            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });

        };

        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // Here we run a very simple test of the Graph API after login is
        // successful.  See statusChangeCallback() for when this call is made.
        function testAPI() {
            // console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function(response) {
                // console.log('Successful login for: ' + response.name);
                document.getElementById('status').innerHTML =
                    'Thanks for logging in, ' + response.name + '!';

                    console.log(response);
            });
        }



 // Additional Information.


				// 	 	FB.api('/me/friends','GET',{},
				// 	  function(response) {
				// 	      console.log(JSON.stringify(response,null,4));

				// 	  }
				// 	);

				// 	 FB.api(
				// 			  '/me',
				// 			  'GET',
				// 			  {"fields":"id,name,birthday,email,education"},
				// 			  function(response) {
				// 			  	$('.loading').hide();
				// 			  	$('.my_data').show();
				// 			      console.log(JSON.stringify(response,null,4));

				// 			      $('.generated_data').append(
				// 					      "<tr>"+
				// 					        "<th>"+ response.name+"</th>"+
				// 					        "<th>"+ response.birthday+"</th>"+
				// 					        "<th>"+ response.email+"</th>"+
				// 					        "<th>"+ response.education[0].school.name+"</th>"+
				// 					      "</tr>"
				// 			);


				// });
