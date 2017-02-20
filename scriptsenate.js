//Cojer informacion del json------------------------
var all = data.results[0].members;
//Coje elementos del HTML----------------------------
var R = document.getElementById("R");
R.addEventListener("click",check);
var D = document.getElementById("D");
D.addEventListener("click",check);
var I = document.getElementById("I");
I.addEventListener("click",check);
//Generar tabla-------------------------------------
genera_tabla(all);
//Generar dropdown---------------------------------
genera_dd(all);
//Filtrar states-----------------------------------
$("select").change(check);




//Filtra tabla partidos y states---------------------------

function republicans(member)
{
    return member.party == "R";
}
function democrats(member)
{
    return member.party == "D";
}
function independents(member)
{
    return member.party == "I";
}
function stateFilter(member)
{
    var state = document.querySelector('#statedropdown option:checked').value;
    return member.state === state;
}


//Genera tablas filtradas por partidos y states---------------------------

function check ()
{
    //Hacemos una variable selector y state para comprobar que checkbox y dropdown estan marcadas

    var selector = document.querySelectorAll("#party_filter input:checked");
    var state = document.querySelector('#statedropdown option:checked').value;

    // Creamos variables vacias para que no nos de undefined

    var results=[]; var rfilter=[]; var dfilter=[]; var ifilter=[];


    //Filtramos members si hay un estado seleccionado
    if (state !== "all") {
        var members = all.filter(stateFilter);
    } else {
        var members = all;
    }


    //Recorremos las 3 posiciones de selector(0,1,2)

    for (var i = 0; i<selector.length; i++){

        if (selector[i].value == "R") {
            rfilter = members.filter(republicans);
        }
        if (selector[i].value == "D") {
            dfilter = members.filter(democrats);
        }
        if (selector[i].value == "I") {
            ifilter = members.filter(independents);
        }
    }

    //Comprobamos si hay algun checkbox marcado
    if (!R.checked && !D.checked && !I.checked) {
        results = members;
    } else {
        results = results.concat(rfilter, dfilter, ifilter);
    }



    //Gerera la tabla con los checkbox marcados
    genera_tabla(results);

    // Si ninguno esta marcado y el state esta en All muestra todos

    if (!R.checked && !D.checked && !I.checked && state == 'all') {
        genera_tabla(all);
    } 
}



//Generar tabla------------------------------------

function genera_tabla(members) {

    var sd = document.getElementById("senate-data");


    var tabla = "<table><tbody><th>Name</th><th>Party</th><th>State</th><th>Years in Office</th><th>% Votes w/Party</th>";

    for (var i = 0; i<members.length; i++) {

        tabla += "<tr>";

        for (var j = 0; j<5; j++) {
            if (members[i].middle_name==null) {
                members[i].middle_name="";
            }
            var name = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;

            var result = name.link(all[i].url);

            var date =[result, members[i].party,members[i ].state,members[i].seniority,(members[i].votes_with_party_pct +"%")];


            tabla += "<td>" + date[j] + "</td>"


        }

        tabla += "</tr>"

    }
    tabla += "</tbody></table>"

    sd.innerHTML = tabla; 

}



//Dropdown State--------------------------------------

//Crear funcion para llamar al dropdown despues

function genera_dd(members){

    //Cojer el div donde va a ir el dropdown del html

    var sdd = document.getElementById("statedropdown");


    //Abrir el form y el select

    var dd = "<div class='row'><div class='col-xs-3'><label>Slect state:</label></div> <div class='col-xs-9'><form><select>";

    //Crear la variable states vacia para poder poner el state recorrido

    var states = [];

    //Recorrer todos los miembros

    for (var i = 0; i<members.length; i++) {

        //Metemos los state recorridos dentro de states y no mostramos los repetidos

        if (states.indexOf( members[i].state ) == -1) {
            states.push( members[i].state );
        }
    }
    // Ordenamos los states alfabeticamente

    states.sort();

    //Añadimos una option All con vaue all y la dejamos selected

    dd += "<option value='all' selected>All</option>";

    //Recorremos todos los states

    for (var i = 0; i<states.length; i++) {

        //Añadimos a dd: los states dentro de un option

        dd += "<option  id= " + states[i] + " value=" + states[i] + ">" + states[i] + "</option>";
    }


    //Añadimos a dd el cierre de form y select
    dd += "</select></form></div></div>"


    sdd.innerHTML = dd;
}