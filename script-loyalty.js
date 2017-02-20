//Cojer informacion del json------------------------
var all = data.results[0].members;

//Generar tabla houseLeast-------------------------------------
genera_tablahouseleast(all);
//Generar tabla houseMost-------------------------------------
genera_tablahousemost(all);
//Genera tabla houseGlance-----------------------------------
genera_tablahouseglance(all);


//Generar tabla senateLeast-------------------------------------
genera_tablasenateleast(all);
//Generar tabla senateMost-------------------------------------
genera_tablasenatemost(all);
//Genera tabla senateGlance-----------------------------------
genera_tablasenateglance(all);

//tablashouse-----------------------------------------------

//Generar tabla houseLeast------------------------------------

function genera_tablahouseleast(members) {

    var sd = document.getElementById("houseleastengaged");


    var tabla = "<h3>Least Loyal (Bottom 10% of Party)</h3><table class='table table-hover'><tbody><th>Name</th><th>No.Missed Votes </th><th> % Missed</th>";

    for (var i = 0; i<members.length; i++) {

        tabla += "<tr>";

        for (var j = 0; j<3; j++) {
            if (members[i].middle_name==null) {
                members[i].middle_name="";
            }
            var name = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;

            var result = name.link(all[i].url);

            var date =[result, members[i].missed_votes,(members[i].missed_votes_pct +"%")];


            tabla += "<td>" + date[j] + "</td>"


        }

        tabla += "</tr>"

    }
    tabla += "</tbody></table>"

    sd.innerHTML = tabla; 

}



//Generar tabla houseMost------------------------------------

function genera_tablahousemost(members) {

    var sd = document.getElementById("housemostengaged");


    var tabla = "<h3>Most Loyal (Top 10% of Party)</h3><table class='table table-hover'><tbody><th>Name</th><th>No.Missed Votes </th><th> % Missed</th>";

    for (var i = 0; i<members.length; i++) {

        tabla += "<tr>";

        for (var j = 0; j<3; j++) {
            if (members[i].middle_name==null) {
                members[i].middle_name="";
            }
            var name = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;

            var result = name.link(all[i].url);

            var date =[result, members[i].missed_votes,(members[i].missed_votes_pct +"%")];


            tabla += "<td>" + date[j] + "</td>"


        }

        tabla += "</tr>"

    }
    tabla += "</tbody></table>"

    sd.innerHTML = tabla; 

}


//Genera tabla houseGlance-------------------------------------

function genera_tablahouseglance(members) {

    var sd = document.getElementById("houseglance");


    var tabla = "<h3>Senate at a glance</h3><table class='table table-hover'><tbody><th>Party</th><th>Number of Reps </th><th>% Voted with Prty</th>";

    for (var i = 0; i<members.length; i++) {

        tabla += "<tr>";

        for (var j = 0; j<3; j++) {
            if (members[i].middle_name==null) {
                members[i].middle_name="";
            }
            var name = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;

            var result = name.link(all[i].url);

            var date =[result, members[i].missed_votes,(members[i].missed_votes_pct +"%")];


            tabla += "<td>" + date[j] + "</td>"


        }

        tabla += "</tr>"

    }
    tabla += "</tbody></table>"

    sd.innerHTML = tabla; 

}


//tablassenate----------------------------------------------

//Generar tabla senateLeast------------------------------------

function genera_tablasenateleast(members) {

    var sd = document.getElementById("senateleastengaged");


    var tabla = "<h3>Least Loyal (Bottom 10% of Party)</h3><table class='table table-hover'><tbody><th>Name</th><th>No.Missed Votes </th><th> % Missed</th>";

    for (var i = 0; i<members.length; i++) {

        tabla += "<tr>";

        for (var j = 0; j<3; j++) {
            if (members[i].middle_name==null) {
                members[i].middle_name="";
            }
            var name = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;

            var result = name.link(all[i].url);

            var date =[result, members[i].missed_votes,(members[i].missed_votes_pct +"%")];


            tabla += "<td>" + date[j] + "</td>"


        }

        tabla += "</tr>"

    }
    tabla += "</tbody></table>"

    sd.innerHTML = tabla; 

}



//Generar tabla senateMost------------------------------------

function genera_tablasenatemost(members) {

    var sd = document.getElementById("senatemostengaged");


    var tabla = "<h3>Most Loyal (Top 10% of Party)</h3><table class='table table-hover'><tbody><th>Name</th><th>No.Missed Votes </th><th> % Missed</th>";

    for (var i = 0; i<members.length; i++) {

        tabla += "<tr>";

        for (var j = 0; j<3; j++) {
            if (members[i].middle_name==null) {
                members[i].middle_name="";
            }
            var name = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;

            var result = name.link(all[i].url);

            var date =[result, members[i].missed_votes,(members[i].missed_votes_pct +"%")];


            tabla += "<td>" + date[j] + "</td>"


        }

        tabla += "</tr>"

    }
    tabla += "</tbody></table>"

    sd.innerHTML = tabla; 

}


//Genera tabla senateGlance-------------------------------------

function genera_tablasenateglance(members) {

    var sd = document.getElementById("senateglance");


    var tabla = "<h3>Senate at a glance</h3><table class='table table-hover'><tbody><th>Party</th><th>Number of Reps </th><th>% Voted with Prty</th>";

    for (var i = 0; i<members.length; i++) {

        tabla += "<tr>";

        for (var j = 0; j<3; j++) {
            if (members[i].middle_name==null) {
                members[i].middle_name="";
            }
            var name = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;

            var result = name.link(all[i].url);

            var date =[result, members[i].missed_votes,(members[i].missed_votes_pct +"%")];


            tabla += "<td>" + date[j] + "</td>"


        }

        tabla += "</tr>"

    }
    tabla += "</tbody></table>"

    sd.innerHTML = tabla; 

}