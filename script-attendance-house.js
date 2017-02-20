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

    buildTablehouseglance(all)
}

function buildTablehouseglance(all) {

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



    //Creamos var html vacia
    var info = "";

    //Cogemos el id del html
    var template = $('#row-template').html();

    //Hacemos un for
    for (var i = 0; i < all.length; i++) {

        var person = all[i];
        
        var infor = {
            party: glancehouse[0].party,
            numberofreps: glancehouse[0].reps,
            votedwithparty: glancehouse[0].votes.toFixed(2)
        };
        var infod = {
            party: glancehouse[1].party,
            numberofreps: glancehouse[1].reps,
            votedwithparty: glancehouse[1].votes.toFixed(2)
        };
        var infoi = {
            party: glancehouse[2].party,
            numberofreps: glancehouse[2].reps,
            votedwithparty: glancehouse[2].votes.toFixed(2)
        };
        var infot = {
            party: glancehouse[3].party,
            numberofreps: glancehouse[3].reps,
            votedwithparty: glancehouse[3].votes.toFixed(2)
        };

        var row = Mustache.render(template, infor, infod, infoi, infot);

        info += row;
    }

    $('#houseglance').html(info);
}
