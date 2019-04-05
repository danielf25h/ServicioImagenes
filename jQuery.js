$(function () {
    $("#btnBuscar").click(function () {
        $("#images").html("");
        animal = $("#txtAnimal").val();

        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=" + animal + "&tagmode=any&format=json&jsoncallback=?",
            function (data) {
                $.each(data.items, function (i, item) {
                    $("<img/>").attr("src", item.media.m).appendTo("#images");
                    if (i == 3) return false;
                });
            });
    });
});

