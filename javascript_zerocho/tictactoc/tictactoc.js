var body = document.body;
var table = document.createElement('table');
var lineValue = [];
var boxValue = []; 

var callsB = function(e){
   
};

for(i=1; i<=3; i++){
    var line = document.createElement('tr');
    lineValue.push(line);
    boxValue.push([]);
    for(j=1; j<=3; j++){
        var box = document.createElement("td");

        box.addEventListener('click',callsB)
        boxValue[i-0].push(box);
        line.appendChild(box);
    }
    table.appendChild(line);
}
body.appendChild(table);
