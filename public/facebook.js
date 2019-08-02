
function statusChangeCallback(response) {
    $(document).ready(function () {
        $(".graph_call_info").on("click", function () {
            $(".loading").show();
            $(".my_data").empty();
            $(".meta_data").empty();
            var url = $("#comment").val();
            $.ajax({
                url: "https://graph.facebook.com/?id=" + url + "&scrape=true",
                success: function (data) {
                    $(".loading").hide();
                    console.log(JSON.stringify(data, null, 4));
                    const img_url = data.id.replace("watch?v=", "embed/");
                    $(".my_data").append(
                        "<iframe type='text/html' width='260' height='180'" +
                        "src=" +
                        img_url +
                        " frameborder='0' > </iframe>"
                    );
                    $(".meta_data").append("<h4>Title:" + data.og_object.title + "</h4>");
                    $(".meta_data").append(
                        "<p>Description:" + data.og_object.description + "</p>"
                    );
                }
            });
        });
    });

    if (response.status === "connected") {
        testAPI();
    } else {
        document.getElementById("status").innerHTML = "Please log " + "into this app.";
    }
}

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function () {
    FB.init({
        appId: "1831873327134052",
        cookie: true,
        xfbml: true,
        version: "v2.8"
    });
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
};

(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

function testAPI() {
    FB.api("/me", function (response) {
        document.getElementById("status").innerHTML = "Thanks for logging in, " + response.name + "!";
        console.log(response);
    });
}