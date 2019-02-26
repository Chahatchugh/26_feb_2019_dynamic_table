
var data =[
    {
        id : 1 ,
        firstname : "ayush",
        lastname : "sharma",
        email : "ayush@gmail.com",
        phone_number : 9992738492,
        date_of_birth :"28/01/1997",
        designation : "Project Manager"
    },
    {
        id : 2 ,
        firstname : "deeksha",
        lastname : "verma",
        email : "d_verma@gmail.com",
        phone_number : 9992738428,
        date_of_birth : "12/11/1996",
        designation : "Team Manager"
    },
    {
        id : 3 ,
        firstname : "beena",
        lastname : "gupta",
        email : "beena@gmail.com",
        phone_number : 9992738490,
        date_of_birth : "18/04/1987",
        designation : "HR"
    },
    {
        id : 4 ,
        firstname : "ritu",
        lastname : "singh",
        email : "ritu@gmail.com",
        phone_number : 9992738564,
        date_of_birth : "23/09/1987" ,
        designation :"Developer"
    },
    {
        id : 5 ,
        firstname : "tina",
        lastname : "rajput",
        email : "tina@gmail.com",
        phone_number : 9992738632,
        date_of_birth : "03/05/1998",
        designation : "Quality Analyst"
    },
    {
        id : 6 ,
        firstname : "pratham",
        lastname : "maheshwari",
        email : "pratham@gmail.com",
        phone_number : 9991438492,
        date_of_birth : "28/01/1997",
        designation : "Senior Manager"
    },
    {
        id : 7 ,
        firstname : "dev",
        lastname : "kaur",
        email : "dev@gmail.com",
        phone_number : 9992338492,
        date_of_birth : "10/03/1992",
        designation : "Senior Developer",
    }
]
var keys ;
var values ;

function Information() {
    keys = Object.keys(data[1])

    values = data.map((elemen,index)=>{
        return Object.values(data[index])
    })

    var text = []
    var td = []
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    table.appendChild(thead)

    for (var i = 0 ; i < keys.length; i++)
    {
        thead.appendChild(document.createElement("th")).appendChild(document.createTextNode(keys[i]))
    }

    for (var i = 0 ; i < values.length; i++)
    {
        var tr = document.createElement('tr'); 
            for (var j = 0 ; j < keys.length; j++)  
            {
                td[j] = document.createElement('td');
                text[j]= document.createTextNode(values[i][j]);
                td[j].appendChild(text[j]);
                tr.appendChild(td[j]);
            }
    table.appendChild(tr);
    }

document.body.appendChild(table);
table.setAttribute("border", "2");

document.getElementById("myBtn").addEventListener("click", function(){

})
}

