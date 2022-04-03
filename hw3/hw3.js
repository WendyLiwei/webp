var end, start;
var result ='';

document.addEventListener('keydown',logKey);

start = new Date();
function logKey(k){
    end = new Date();
    var characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    
    //當鍵盤按鍵=最右邊的字，字就被消除
    if(result.substr(-1)==k.key.toUpperCase())
        result=result.substring(0,result.length-1);

    //產生Ａ-Z亂數，平均每秒2.5字
    for(var i=0;i<((end.getTime() - start.getTime())*2.5/1000);i++){
        result=characters.charAt(Math.floor(Math.random() * charactersLength))+result;
    }

    document.getElementById('text').textContent=result;    
    start=end;
}