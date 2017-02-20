//Task 4---
//Coger la url del archivo JSON
var url = "https://nytimes-ubiqum.herokuapp.com/congress/113/house";

// Hacer una funcion que guarde la pagina para despues cargarla
$(function() {

    console.log("Getting the JSON");

    $.getJSON(url, doTheWork);

    console.log("JSON is coming...");
});

function doTheWork(data) {

    var all = data.results[0].members;
    console.log("Recived JSON with " + all.length + " members");

    //Generar tabla houseLeast-------------------------------------
    generatablalest(all)

    //Generar tabla houseMost-------------------------------------
    generartablamost(all)

    //Genera tabla houseGlance-----------------------------------
    genera_tablahouseglance(all)
}




//Genera tabla houseLeast----------------------------------
function generatablalest(members) {

    var least = document.getElementById("houseleastloyal");


    members = members.sort(function (a,b) {return a.votes_with_party_pct-b.votes_with_party_pct});

    var tabla = "<h3>Least Loyal (Top 10% Loyalty)</h3><table class='table table-hover'><tbody><th>Name</th><th>No. Party Votes </th><th> % Party Votes</th>";

    for (var i = 0; i<members.length*0.1; i++) {

        var nopartyvotes = (((members[i].total_votes) * (members[i].votes_with_party_pct)) / 100).toFixed(0);

        tabla += "<tr>";

        for (var j = 0; j<3; j++) {
            if (members[i].middle_name==null) {
                members[i].middle_name="";
            }
            var name = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;

            var result = name.link(members[i].url);

            var date =[result, nopartyvotes, members[i].votes_with_party_pct +"%"];


            tabla += "<td>" + date[j] + "</td>"


        }

        tabla += "</tr>"

    }
    tabla += "</tbody></table>"

    least.innerHTML = tabla;  
}



//Generar tabla houseMost------------------------------------
function generartablamost(members){

    var most = document.getElementById("housemostloyal");

    members.sort(function (a,b) {return b.votes_with_party_pct-a.votes_with_party_pct});

    var tabla = "<h3>Most Loyal (Top 10% Loyalty)</h3><table class='table table-hover'><tbody><th>Name</th><th>No. Party Votes </th><th> % Party Votes</th>";

    for (var i = 0; i<members.length*0.1; i++) {

        var nopartyvotes = (((members[i].total_votes) * (members[i].votes_with_party_pct)) / 100).toFixed(0);

        tabla += "<tr>";

        for (var j = 0; j<3; j++) {
            if (members[i].middle_name==null) {
                members[i].middle_name="";
            }
            var name = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;

            var result = name.link(members[i].url);

            var date =[result, nopartyvotes,(members[i].votes_with_party_pct +"%")];


            tabla += "<td>" + date[j] + "</td>"


        }

        tabla += "</tr>"

    }
    tabla += "</tbody></table>"

    most.innerHTML = tabla;  
}



//Genera tabla houseGlance-------------------------------------

function genera_tablahouseglance(members) {

    //Declarar variables vacias para cada partido
    var numberpartyr = glancehouse[0].reps;
    var numberpartyd = glancehouse[1].reps;
    var numberpartyi = glancehouse[2].reps;
    var votesrepublicans = glancehouse[0].votes;
    var votesdemocrats = glancehouse[1].votes;
    var votesindependents = glancehouse[2].votes;
    var totalparty = glancehouse[3].reps;
    var totalpartycent = glancehouse[3].votes;



    //Sumar cantidad de personas por partido
    for (var e = 0; e<members.length; e++) {

        if (members[e].party == "R") {
            glancehouse[0].reps++;
            var voteswithparty = parseFloat(members[e].votes_with_party_pct);
            glancehouse[0].votes += voteswithparty;
        }
        else if (members[e].party == "D") {
            glancehouse[1].reps++;
            var voteswithparty = parseFloat(members[e].votes_with_party_pct);
            glancehouse[1].votes += voteswithparty;
        }
        else if (members[e].party == "I") {
            glancehouse[2].reps++;
            var voteswithparty = parseFloat(members[e].votes_with_party_pct);
            glancehouse[2].votes += voteswithparty;
        }
    }

    glancehouse[3].votes = ((glancehouse[0].votes + glancehouse[1].votes + glancehouse[2].votes) / members.length).toFixed(2) ;

    glancehouse[0].votes = glancehouse[0].votes / glancehouse[0].reps;
    glancehouse[1].votes = glancehouse[1].votes / glancehouse[1].reps;
    glancehouse[2].votes = glancehouse[2].votes / glancehouse[2].reps;


    //Sumar las 3 variables para saber el total
    glancehouse[3].reps = glancehouse[0].reps + glancehouse[1].reps + glancehouse[2].reps;



    //Escrbir en la consola los resultados
    console.log("House at a glance");
    console.log("Party R " + numberpartyr);
    console.log("% votesrepublicans " + votesrepublicans.toFixed(2));
    console.log("Party D " + numberpartyd);
    console.log("% votesdemocrats " + votesdemocrats.toFixed(2));
    console.log("Party I " + numberpartyi);
    console.log("% votesindependents " + votesindependents.toFixed(2));
    console.log("Total " + totalparty);
    console.log("&VotesTotal " +  totalpartycent);


    var sd = document.getElementById("houseglanceloyal");


    var tabla = "<h3>House at a glance</h3><table class='table table-hover'><tbody><th>Party</th><th>Number of Reps </th><th>% Voted with Prty</th>";



    tabla += "<tr>";

    for (var j = 0; j<3; j++) {


        var infor =[glancehouse[0].party, glancehouse[0].reps, glancehouse[0].votes.toFixed(2)];
        tabla += "<td>" + infor[j] + "</td>"


    }
    tabla += "</tr>";

    tabla += "<tr>";
    for (var j = 0; j<3; j++){

        var infod =[glancehouse[1].party, glancehouse[1].reps, glancehouse[1].votes.toFixed(2)];
        tabla += "<td>" + infod[j] + "</td>"

    }
    tabla += "</tr>";

    tabla += "<tr>";
    for (var j = 0; j<3; j++){

        var infoi =[glancehouse[2].party, glancehouse[2].reps, glancehouse[2].votes.toFixed(2)];
        tabla += "<td>" + infoi[j] + "</td>"

    }

    tabla += "</tr>";

    tabla += "<tr>";
    for (var j = 0; j<3; j++){

        var infot =[glancehouse[3].party, glancehouse[3].reps, glancehouse[3].votes];
        tabla += "<td>" + infot[j] + "</td>"

    }

    tabla += "</tr>";


    tabla += "</tbody></table>"

    sd.innerHTML = tabla; 

}