$(document).ready(function(){
    $.getJSON("/api/v1/bestmenu", function(result){
        let html = "";
        $.each(result, function(i, field){
            // $("div").append(field + " ");
            // console.log(field.menu);
            // console.log(field['price']);
            // console.log(field.img);

            html += "<h3>" + field.menu + "<br></h3>";
            html += "<h5>" + field.price + "<br></h5>";
            html += "<img src='" + field.img + "' width='350'>";

        });
        $("#bestmenu").html(html);
    });
});
