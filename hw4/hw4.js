$(document).ready(function(){
    $('input').click(function(){
        setInterval(generate,(1/1.5*1000));
        document.addEventListener('keydown',logKey);
    });
});

function generate(){
    var road_List=[];
    for(var j=0;j<6;j++){
        road_List[j]=Math.floor(Math.random()*26)+1;
        var new_Word=document.createElement('img');
        new_Word.src='alphabet/'+road_List[j]+'.png';
        $(".road")[j].append(new_Word);

        if($('.road')[j].children[0].style.left >'96%')
            stopGame();
    }
    $(".road").find("img").animate({left:"97%"},10000);
}

var last_Word;
function logKey(k){
    var erase_Word=document.createElement('img');
    erase_Word.src='alphabet/'+(k.keyCode-64)+'.png';

    for(var j=0;j<6;j++){
        last_Word=$('.road')[j].children[0];
        if(last_Word.src==erase_Word.src){
            $('.road')[j].removeChild(last_Word);
            break;
        }
    }
}

function stopGame(){
    alert("GAME OVER");
}