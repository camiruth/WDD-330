const links = [{
        label: "Week1 notes",
        url: "week1/index.html",
    },
    {
        label: "Week2 notes",
        url: "week2/index.html",
    },
];

var ol = document.getElementById("list");
for (var i = 0; i < links.length; i++) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    
    a.href = links[i].url;
    a.innerHTML = links[i].label;
    
    li.appendChild(a);
    ol.appendChild(li);
 }
