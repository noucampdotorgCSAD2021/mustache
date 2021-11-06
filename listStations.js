$('document').ready(function() {
    var template = $("#stationTemplate").html();
    var result = Mustache.render(template,{"stations": stations});
    $("#container").html(result);
});
