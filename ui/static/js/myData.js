
var small_film_set = [
	{ id:1, title:"The Shawshank Redemption", year:1994, votes:678790, rating:9.2, rank:1, category:"Thriller"},
	{ id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2, category:"Crime"},
	{ id:3, title:"The Godfather: Part II", year:1974, votes:319352, rating:9.0, rank:3, category:"Crime"},
	{ id:4, title:"The Good, the Bad and the Ugly", year:1966, votes:213030, rating:8.9, rank:4, category:"Western"},
	{ id:5, title:"Pulp fiction", year:1994, votes:533848, rating:8.9, rank:5, category:"Crime"},
	{ id:6, title:"12 Angry Men", year:1957, votes:164558, rating:8.9, rank:6, category:"Western"}
  ];
//   var addItem

//item = {id:1, title:"Title", year:1987}
const url = new URLSearchParams(window.location.search);
fnRequest(url)
  function addItem(){
	var item = mainTable.getSelectedItem();
	var item2 = item.getItem(elements);
	console.log(item2)
  }
//   function addItem(){
// 	console.log(mainTable.lenght)
//   }

var mainTable=webix.ui({
    rows:[
        { view:"toolbar",
            css:"webix_dark",
            cols:[
                { view:"label", label:"My app"},
                {},
                {height: 40, type:"icon", icon:"wxi-user",  view:"button", label:"Profile", width:100, css:"webix_transparent"}
            ]},
        {cols:[
            {
    view: "list",
    id:"mylist",
    scroll:false,
    select:true,
    width:200,
    css:"list_color",
    data:[
        {value:"Dashboard",},
        {value:"Users"},
        {value:"Products"},
        {value:"Location"}
    ]
},
{view: "resizer"},
    {view:"datatable",
    id:"film_list",
    scroll:"y",
    autoConfig: true,
    data:small_film_set},
    {view:"form", id:'film_form', width: 350,
elements:[
    { type:"section", template:"EDIT FILMS"},
    { view:"text", name:"title", label:"Title",id:"Title" },
    { view:"text", name:"year", label:"Year" },
    { view:"text", name:"rating", label:"Rating" },
    { view:"text", name:"votes", label:"Votes" },
    {
        margin:10,
        cols:[
                { view:"button", id:"btn_add", minWidth:65, value:"Add new", css:"webix_primary", click:addItem},
                { view:"button", id:"btn_clear", minWidth:65, value:"Clear", click:"clearForm"}
        ]
    },
    {}
]},

]},
        {cols:[
{height: 30, template:"The software is provided by <a href='#'>webix.com</a>. All rights reserved (c)", css:"center_text"}
]}
    ]
	
});
// var item2 = mainTable.getItemNode();
// document.addEventListener("DOMContentLoaded", ready);

function fnRequest(someUrl) {
    let req = new XMLHttpRequest();
    req.addEventListener("load", renderResponse);
    req.open("GET", someUrl);
    req.send();
  }
  //Вспомогательная функция для fnRequest(), парсинг полученной страницы формата JSON и получение необходимых параметров
  function renderResponse() {
    let resp = JSON.parse(this.response);
    
    let charts = parse(resp.Charts)

//   document.getElementById("Name").innerHTML = allStruct[0].name;
//   document.getElementById("Position").innerHTML = allStruct[0].position;

  renderChart(allStruct)
  }