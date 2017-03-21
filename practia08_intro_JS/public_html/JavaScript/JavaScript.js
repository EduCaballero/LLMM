function ejercicio01(){
    var inpu = document.getElementById("entrada");
    var text = inpu.value;
    text = parseInt(text);
    
    for(var i=0; i<=text;){
        console.log(i);
        i=i+2;
    }
}

function ejercicio02(){
    var text = document.getElementById("entrada");
    text = parseInt(text.value);
    var resul = document.getElementById("resultado");
    
    var html = "<ul>";
    for(var i=0;i<text;i++){
        html+="<li>"+i+"</li>";
    }
    
    html = html+"</ul>";
    resul.innerHTML = html;
}
