//array list for the label and url. code given from teacher. This will be were I add new items to my table of contents each week.
const links = [{
        label: "Week1 notes",
        url: "week1/index.html",
    },
    {
        label: "Week2 notes",
        url: "week2/index.html",
    },
    {
        label: "Week3 notes",
        url: "week3/index.html",
    },
    {
        label: "Week4 notes",
        url: "week4/index.html",
    },
    {
        label: "Week5 notes",
        url: "week5/index.html",
    },
    {
        label: "ToDo App",
        url: "todoapp/todoapp.html",
    },
    {
        label: "Week7 notes",
        url: "week7/index.html",
    },
    {
        label: "Week8 notes",
        url: "week8/index.html",
    },
    {
        label: "Week9 notes",
        url: "week9/index.html",
    },
    {
        label: "Week10 notes",
        url: "week10/index.html",
    },
    {
        label: "Week11 Team Assignment",
        url: "week11/client/week11.html",
    },
    {
        label: "Block 2 Assignment",
        url: "block2assignment/index.html",
    },
    {
        label: "Final Portfolio Video",
        url: "https://www.loom.com/share/0881ed03b1e3469d8033bcc15355633a",
    },
];

//Getting the ol list from the HTML code
var ol = document.getElementById("list");

//creating a loop to create the li and a elements
for (var i = 0; i < links.length; i++) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    
    //references the array above to get the information
    a.href = links[i].url;
    a.innerHTML = links[i].label;
    a.target="_blank";
    
    //puts the a inside the li and the li inside the ol. creating the element structure. 
    li.appendChild(a);
    ol.appendChild(li);
 }
