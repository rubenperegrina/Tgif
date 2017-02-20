//Task 4---
//Coger la url del archivo JSON
var url = "https://nytimes-ubiqum.herokuapp.com/congress/113/senate";

// Hacer una funcion que guarde la pagina para despues cargarla
$(function() {

    console.log("Getting the JSON");
    
    $.getJSON(url, doTheWork);
    
    console.log("JSON is coming...");
});

function doTheWork(data) {
    
    var all = data.results[0].members;
    console.log("Recived JSON with " + all.length + " members");
    
    //Generar tabla senateLeast-------------------------------------
    generatablalest(all)

    //Generar tabla senateMost-------------------------------------
    generartablamost(all)

    //Genera tabla senateGlance-----------------------------------
    genera_tablasenateglance(all);
}




//Generar tabla senateLeast------------------------------------
function generatablalest(members) {

    var least = document.getElementById("senateleastengaged");


    members = members.sort(function (a,b) {return b.missed_votes_pct-a.missed_votes_pct});




    var tabla = "<h3>Least Engaged (Bottom   10% Attendance)</h3><table class='table table-hover'><tbody><th>Name</th><th>No.Missed Votes </th><th> % Missed</th>";

    for (var i = 0; i<members.length*0.1; i++) {

        tabla += "<tr>";

        for (var j = 0; j<3; j++) {
            if (members[i].middle_name==null) {
                members[i].middle_name="";
            }
            var name = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;

            var result = name.link(members[i].url);

            var date =[result, members[i].missed_votes,(members[i].missed_votes_pct +"%")];


            tabla += "<td>" + date[j] + "</td>"


        }

        tabla += "</tr>"

    }
    tabla += "</tbody></table>"

    least.innerHTML = tabla;  
}




//Generar tabla senateMost------------------------------------
function generartablamost(members){

    var most = document.getElementById("senatemostengaged");

    members.sort(function (a,b) {return a.missed_votes_pct-b.missed_votes_pct});


    var tabla = "<h3>Most Engaged (Top 10% Attendance)</h3><table class='table table-hover'><tbody><th>Name</th><th>No.Missed Votes </th><th> % Missed</th>";

    for (var i = 0; i<members.length*0.1; i++) {

        tabla += "<tr>";

        for (var j = 0; j<3; j++) {
            if (members[i].middle_name==null) {
                members[i].middle_name="";
            }
            var name = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;

            var result = name.link(members[i].url);

            var date =[result, members[i].missed_votes,(members[i].missed_votes_pct +"%")];


            tabla += "<td>" + date[j] + "</td>"


        }

        tabla += "</tr>"

    }
    tabla += "</tbody></table>"

    most.innerHTML = tabla;  
}






//Genera tabla senateGlance-------------------------------------

function genera_tablasenateglance(members) {

    //Declarar variables vacias para cada partido
    var numberpartyr = glancesenate[0].reps;
    var numberpartyd = glancesenate[1].reps;
    var numberpartyi = glancesenate[2].reps;
    var votesrepublicans = glancesenate[0].votes;
    var votesdemocrats = glancesenate[1].votes;
    var votesindependents = glancesenate[2].votes;
    var totalparty = glancesenate[3].reps;
    var totalpartycent = glancesenate[3].votes;



    //Sumar cantidad de personas por partido
    for (var e = 0; e<members.length; e++) {

        if (members[e].party == "R") {
            glancesenate[0].reps++;
            var voteswithparty = parseFloat(members[e].votes_with_party_pct);
            glancesenate[0].votes += voteswithparty;
        }
        else if (members[e].party == "D") {
            glancesenate[1].reps++;
            var voteswithparty = parseFloat(members[e].votes_with_party_pct);
            glancesenate[1].votes += voteswithparty;
        }
        else if (members[e].party == "I") {
            glancesenate[2].reps++;
            var voteswithparty = parseFloat(members[e].votes_with_party_pct);
            glancesenate[2].votes += voteswithparty;
        }
    }

    glancesenate[3].votes = ((glancesenate[0].votes + glancesenate[1].votes + glancesenate[2].votes) / members.length).toFixed(2) ;

    glancesenate[0].votes = glancesenate[0].votes / glancesenate[0].reps;
    glancesenate[1].votes = glancesenate[1].votes / glancesenate[1].reps;
    glancesenate[2].votes = glancesenate[2].votes / glancesenate[2].reps;


    //Sumar las 3 variables para saber el total
    glancesenate[3].reps = glancesenate[0].reps + glancesenate[1].reps + glancesenate[2].reps;



    //Escrbir en la consola los resultados
    console.log("Senate at a glance");
    console.log("Party R " + numberpartyr);
    console.log("% votesrepublicans " + votesrepublicans.toFixed(2));
    console.log("Party D " + numberpartyd);
    console.log("% votesdemocrats " + votesdemocrats.toFixed(2));
    console.log("Party I " + numberpartyi);
    console.log("% votesindependents " + votesindependents.toFixed(2));
    console.log("Total " + totalparty);
    console.log("&VotesTotal " +  totalpartycent);


    var sd = document.getElementById("senateglance");


    var tabla = "<h3>Senate at a glance</h3><table class='table table-hover'><tbody><th>Party</th><th>Number of Reps </th><th>% Voted with Prty</th>";



    tabla += "<tr>";

    for (var j = 0; j<3; j++) {


        var infor =[glancesenate[0].party, glancesenate[0].reps, glancesenate[0].votes.toFixed(2)];
        tabla += "<td>" + infor[j] + "</td>"


    }
    tabla += "</tr>";

    tabla += "<tr>";
    for (var j = 0; j<3; j++){

        var infod =[glancesenate[1].party, glancesenate[1].reps, glancesenate[1].votes.toFixed(2)];
        tabla += "<td>" + infod[j] + "</td>"

    }
    tabla += "</tr>";

    tabla += "<tr>";
    for (var j = 0; j<3; j++){

        var infoi =[glancesenate[2].party, glancesenate[2].reps, glancesenate[2].votes.toFixed(2)];
        tabla += "<td>" + infoi[j] + "</td>"

    }

    tabla += "</tr>";

    tabla += "<tr>";
    for (var j = 0; j<3; j++){

        var infot =[glancesenate[3].party, glancesenate[3].reps, glancesenate[3].votes];
        tabla += "<td>" + infot[j] + "</td>"

    }

    tabla += "</tr>";


    tabla += "</tbody></table>"

    sd.innerHTML = tabla; 

}