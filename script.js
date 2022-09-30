
//En esta función reutilizo el código del ejercico de la diferencia de días. 
function diferenciaDias(dateTocheck){
    date1 = "01-01";
    date2 = dateTocheck;
    var months= [31,28,31,30,31,30,31,31,30,31,30,31];
    var diff = 0;
    var days = 0;
    var day1 = parseInt(date1.split("-")[0]);
    var day2 = parseInt(date2.split("-")[0]);
    var month1 = parseInt(date1.split("-")[1]);
    var month2 = parseInt(date2.split("-")[1]);

    if(month1!=month2){  
        if (month1<month2){
            days = (months[month1-1] - day1) +  day2;  
            for(let i=month1; i<month2-1; i++){
                diff = diff + months[i];    
            }
        }else{
            days = (months[month2-1] - day2) +  day1;  
            for(let i=month2; i<month1-1; i++){
                diff = diff + months[i];    
            }
        }
        diff = diff + days;
    }else{
       diff = Math.abs(day1-day2);
    }
    
    return diff
}

function menor17(birthDate){
    var result;
    var currentDay = "30";
    var currentMonth = "09";
    var currentYear = "2022";
    birthYear = birthDate.substring(birthDate.length - 4);

    if (parseInt(currentYear)-parseInt(birthYear) > 17){
        result = true;
    }else if (parseInt(currentYear)-parseInt(birthYear) <= 16){
        result = false;
    }else if(diferenciaDias(currentDay+"-"+currentMonth) >= diferenciaDias(birthDate.substr(0, birthDate.length - 5))){
        console.log(diferenciaDias(currentDay+"-"+currentMonth));
        console.log(diferenciaDias(birthDate.substr(0, birthDate.length - 5)));
        result = true;
    }
    return result;  
}

function perteneceSIJP(sijp){
 return sijp.toLowerCase() == "si";
}

function actividadSegSoc(segSoc){
    return segSoc.toLowerCase() == "si";
}

function main(){
    var birthDate = document.getElementById("birthDate").value;
    var sijp = document.getElementById("sijp").value;
    var segSoc = document.getElementById("segSoc").value;

    if ((menor17(birthDate) && perteneceSIJP(sijp)) || actividadSegSoc(segSoc)){
        alert("Debe sacarse el CUIL")
    }else{
        alert("No debe sacar el CUIL");
    }
}





