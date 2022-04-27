var data=[
    {
        "stationNo": "C0AD1",
        "stationName": "八里",
        "recTime": "202204271600",
        "rain": 0
    },
    {
        "stationNo": "C0AD0",
        "stationName": "三芝",
        "recTime": "202204271600",
        "rain": 0
    },
    {
        "stationNo": "C0AD4",
        "stationName": "土城",
        "recTime": "202204271600",
        "rain": 0
    },
    {
        "stationNo": "318",
        "stationName": "大安福州山",
        "recTime": "202204271602",
        "rain": 0
    },
    {
        "stationNo": "01A43",
        "stationName": "福山",
        "recTime": "202204271600",
        "rain": 0
    },
    {
        "stationNo": "C0AD3",
        "stationName": "蘆洲",
        "recTime": "202204271600",
        "rain": 0
    }
];
    
for (var i = 0; i <= 5; i ++){
    console.log(data[i].stationNo,data[i].stationName,data[i].recTime,data[i].rain);
    $("#row").append(
        "<tr>"+
        "<td>"+data[i].stationNo+"</td>"+
        "<td>"+data[i].stationName+"</td>"+
        "<td>"+data[i].recTime.substring(0,4)+'年'
        +data[i].recTime.substring(4,6)+'月'
        +data[i].recTime.substring(6,8)+'號'
        +data[i].recTime.substring(8,10)+':'
        +data[i].recTime.substring(10,12)
        +"</td>"+
        "<td>"+data[i].rain+"</td>"+
        "</tr>"
    )
}
