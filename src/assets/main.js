// var XMLHttpRequestObject = false; 
// if (window.XMLHttpRequest) { 
//  XMLHttpRequestObject = new XMLHttpRequest();
// }
// // else if (window.ActiveXObject) { 
// //  XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
// //  }

window.onscroll = (event) => {
    
    const nav = document.querySelector('.navbar');
    const navlink = document.querySelectorAll('.navbar a');
    const navitem = document.querySelectorAll('.navbar nav-item');

    const navtog = document.querySelector('.navbar-toggler');
    if(window.scrollY <= 80){
        nav.style.backgroundColor= "transparent";
        navtog.style.backgroundColor = "transparent"; 
        navlink.forEach(function(nava){
            nava.style.color= "white";  
        })

        // navlink.forEach(function(nava){
        //     nava.style.backgroundcolor= "transparent";  
        // })
    } 
    else{
        nav.style.backgroundColor= "#F4F5FD"; 
        navtog.style.backgroundColor="black"
        // navitem.forEach(function(nava){
        //     nava.style.backgroundColor= "#F4F5FD";  
        // })
        navlink.forEach(function(nava){
            nava.style.color= "black";  
        })

    }  
  };


//   // select elements
// var elements = Array.from(document.querySelectorAll('.path1'));

// // add event listeners
// elements.forEach(function(el) {
//    el.addEventListener("mouseover", updateAjaxCount);
// });

// function updateAjaxCount(){
//     console.log(this.getAttribute("name"));
//     var url =  "https://covid19-india-adhikansh.herokuapp.com/state/";
//     var name = this.getAttribute("name");
//     var finurl = url+name;
//     getData(finurl);
// };

// function getData(dataSource) {
//     if(XMLHttpRequestObject) {
//      var con = document.getElementById("confirmed"); 
//      var act = document.getElementById("active"); 
//      var rec = document.getElementById("recovered"); 
//      var des = document.getElementById("deceased"); 

//      XMLHttpRequestObject.open("GET", dataSource); 

//      XMLHttpRequestObject.onreadystatechange = function(){
//       if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){ 
//     //    alert(JSON.parse(XMLHttpRequestObject.responseText));
//    con.innerHTML = JSON.parse(XMLHttpRequestObject.responseText).data[0].total; 

//    act.innerHTML = JSON.parse(XMLHttpRequestObject.responseText).data[0].confirmed; 
//    rec.innerHTML = JSON.parse(XMLHttpRequestObject.responseText).data[0].cured; 
//    des.innerHTML = JSON.parse(XMLHttpRequestObject.responseText).data[0].death; 
//       }
//      } 
//      XMLHttpRequestObject.send(null); 
//     }
//    }

    // document.read
    // new Chart(document.getElementById("line-chart"), {
    //   type: 'line',
    //   data: {
    //     labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    //     datasets: [{ 
    //         data: [86,114,106,106,107,111,133,221,783,2478],
    //         label: "Africa",
    //         borderColor: "#3e95cd",
    //         fill: false
    //       }, { 
    //         data: [282,350,411,502,635,809,947,1402,3700,5267],
    //         label: "Asia",
    //         borderColor: "#8e5ea2",
    //         fill: false
    //       }, { 
    //         data: [168,170,178,190,203,276,408,547,675,734],
    //         label: "Europe",
    //         borderColor: "#3cba9f",
    //         fill: false
    //       }, { 
    //         data: [40,20,10,16,24,38,74,167,508,784],
    //         label: "Latin America",
    //         borderColor: "#e8c3b9",
    //         fill: false
    //       }, { 
    //         data: [6,3,2,2,7,26,82,172,312,433],
    //         label: "North America",
    //         borderColor: "#c45850",
    //         fill: false
    //       }
    //     ]
    //   },
    //   options: {
    //     title: {
    //       display: true,
    //       text: 'World population per region (in millions)'
    //     }
    //   }
    // });
    
    // new Chart(document.getElementById("doughnut-chart"), {
    //     type: 'doughnut',
    //     data: {
    //       labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    //       datasets: [
    //         {
    //           label: "Population (millions)",
    //           backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
    //           data: [2478,5267,734,784,433]
    //         }
    //       ]
    //     },
    //     options: {
    //       title: {
    //         display: true,
    //         text: 'Predicted world population (millions) in 2050'
    //       }
    //     }
    // });
