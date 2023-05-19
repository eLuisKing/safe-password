let charts = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','&','*'];

function random(){
    var max = charts.length;
    return Math.floor(Math.random() * max);
}


function genPass(){
    var newPass = '';
    for(var i=0;i<=12;i++){
        var randomUp = Math.floor(Math.random() * 2);
        if(randomUp == 1){
            var insertpass = charts[random()].toUpperCase();
        }else{
            var insertpass = charts[random()];
        }
        
        newPass = newPass + insertpass;
    }
    return newPass;
}

console.log(genPass());