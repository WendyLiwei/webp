$(document).ready(function(){
    $.ajax({
        url:'https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24top=420&%24format=JSON',
        type:'get',
        dataType:'json',
        success:function(result){
            console.log(result.length);
            for (var i = 0; i <= 419; i += 21){
                console.log(result[i].OriginStationID + "To" + result[i].DestinationStationID);
                console.log(result[i].OriginStationName.Zh_tw + "To" + result[i].DestinationStationName.Zh_tw);
                console.log(" Time: " + result[i].TravelTime);
                console.log(" Price: " + result[i].Fares[0].Price + " i=" + i);
                $("#row").append(
                    "<tr>"+
                    "<td>"+result[i].TravelTime+"</td>"+
                    "<td>"+result[i].OriginStationName.Zh_tw+ " To " + result[i].DestinationStationName.Zh_tw+'<br>'+result[i].OriginStationID+ " - "+result[i].DestinationStationID+"</td>"+
                    "<td>"+result[i].Fares[0].Price+"</td>"+
                    "</tr>"
                )
            }
        },
        error:function(result){
            console.log('error');
        }
    });
});
