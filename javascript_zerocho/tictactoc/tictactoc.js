var body = document.body;
var table = document.createElement('table');

for(i=1; i<=3; i++){
    var line = document.createElement('tr');
    for(j=1; j<=3; j++){
        var box = document.createElement("td");
        line.appendChild(box);
    }
    table.appendChild(line);
}
body.appendChild(table);
