
$(document).ready(function () {
    $(".graph_call_info").on("click", function (event) {
        $(".i-frame").empty();
        $(".meta_data").empty();
        const url = $("#url").val();
        if (!url) {
            $(".warning").show();
        } else {
            $(".warning").hide();
            $(".loading").show();
            $.ajax({
                url: "https://graph.facebook.com/?id=" + url + "&scrape=true&fields=og_object",
                success: function (data) {
                    console.log("response", JSON.stringify(data, null, 4));
                    $(".loading").hide();
                    const img_url = data.id.replace("watch?v=", "embed/");
                    $(".i-frame").append(
                        "<iframe type='text/html' width='260' height='180'" +
                        "src=" +
                        img_url +
                        " frameborder='0' > </iframe>"
                    );
                    $(".meta_data").append("<h4>" + data.og_object.title + "</h4>");
                    $(".meta_data").append(
                        "<p>" + data.og_object.description + "</p>"
                    );
                    $("#url").val('');
                }
            });
        }
    });
});

window.fbAsyncInit = function () {
    FB.init({
        appId: "1831873327134052",
        cookie: true,
        xfbml: true,
        version: "v2.10"
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