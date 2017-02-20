//Cojer informacion del json------------------------
var all = data.results[0].members;



//Generar tabla houseLeast-------------------------------------
function generatablalest(members);
//Generar tabla houseMost-------------------------------------
function generartablamost(members)
//Genera tabla houseGlance-----------------------------------
genera_tablahouseglance(all);




//tablashouse-----------------------------------------------

//Generar tabla houseLeast------------------------------------

function generatablalest(members) {

    var least = document.getElementById("houseleastengaged");


    members.sort(function (a,b) {return b.missed_votes-a.missed_votes});

    var tabla = "<h3>Least Engaged (Top 10% Attendance)</h3><table class='table table-hover'><tbody><th>Name</th><th>No.Missed Votes </th><th> % Missed</th>";

    for (var i = 0; i<members.length*0.1; i++) {

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

    least.innerHTML = tabla;  
}




//Generar tabla houseMost------------------------------------
function generartablamost(members){

    var most = document.getElementById("housemostengaged");

    members.sort(function (a,b) {return a.missed_votes-b.missed_votes});


    var tabla = "<h3>Most Engaged (Top 10% Attendance)</h3><table class='table table-hover'><tbody><th>Name</th><th>No.Missed Votes </th><th> % Missed</th>";

    for (var i = 0; i<members.length*0.1; i++) {

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

    most.innerHTML = tabla;  
}
