function buildTableHtmlWithRowTemplate(all) {

    //Creamos var html vacia
    var rows = "";

    //Cogemos el id del html
    var template = $('#row-template').html();

    //Hacemos un for
    for (var i = 0; i < all.length; i++) {

        var person = all[i];

        var row = Mustache.render(template, person);

        rows += row;
    }

    $('#tabla').html(rows);
}





//Task 4---

// Hacer una funcion que guarde la pagina para despues cargarla
$(function() {

    console.log("Getting the JSON");

    getMembers('senate');

    console.log("JSON is coming...");
});

function getMembers(congress) {
    //Coger la url del archivo JSON
    var url = "https://nytimes-ubiqum.herokuapp.com/congress/113/";
    url += congress;

    $.getJSON(url, doTheWork);
}

function doTheWork(data) {


    var all = data.results[0].members;
    console.log("Recived JSON with " + all.length + " members");

    //Generar tabla senateLeast-------------------------------------
    generatablalest(all);

    //Generar tabla senateMost-------------------------------------
    generartablamost(all);

    //Genera tabla senateGlance-----------------------------------
    genera_tablasenateglance(all);
}