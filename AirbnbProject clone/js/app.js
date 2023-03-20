// ***************************************
var display;
let onClick1 = document.getElementById("onClick1");

let dropDown1 = document.getElementById("dropDown1");

onClick1.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();
  display = onClick1.classList.toggle("hi");
  onClick1.classList.add("bye");
  if (display === true) {
    dropDown1.style.display = "block";
  } else {
    dropDown1.style.display = "none";
  }
});
let bdy = window;
bdy.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();
  console.log(display);
  if (display) {
    dropDown1.style.display = "none";
    onClick1.classList.remove("hi");
  }
});


// //footer

var media;
let drop = document.getElementById("drop");

let lock = document.getElementById("lock");

drop.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();
  media = drop.classList.toggle("fgfg");
  if (media === true) {
    lock.style.display = "block";
  } else {
    lock.style.display = "none";
  }
});
let bc = window;
bc.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();
  console.log(media);
  if (media) {
    lock.style.display = "none";
    drop.classList.remove("fgfg");
  }
});





// nav bar
let navshow;

let search = document.getElementById("searchSection");
let onex = document.getElementById("onexSection");
let dropdownBottom = document.getElementById("out");
let imgsections = document.getElementById("imgsections");


search.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();
  navshow = drop.classList.toggle("nav");
  if (navshow === true) {
    e.preventDefault();
    e.stopPropagation();
    onex.style.display = "block";
    search.style.display = "none";
    dropdownBottom.style.display = "block";
    imgsections.style.display = "invisible";
  } else {
    onex.style.display = "none";
  }
});

let xyz = document.getElementById("elements");
xyz.addEventListener("click", e => {
  console.log(navshow);
       
  if (navshow) {
     e.preventDefault();
     e.stopPropagation();
    onex.style.display = "none";

 
       dropdownBottom.style.display = "none";
       imgsections.style.display = "invisible";
      

    searchSection.classList.remove("nav");
     search.style.display = "flex";
  }
});


//////////////////////////////search to return

let searchbar = document.getElementById("bootmIcon");

searchbar.onclick = function (e) {
  e.preventDefault();

  if (search.classList.toggle("active")) {
    onex.style.display = "none";
    dropdownBottom.style.display = "none";
  search.style.display = "flex";
  } 
};


// where destination

let whereDestination = document.getElementById("whereDestination");

let destination = document.getElementById("destination");

// whereDestination.onclick = function (e) {
//   e.preventDefault();
//   if (whereDestination.classList.toggle("active")) {
//     destination.style.display="block"
//   }
//   else {
//     destination.style.display = "none";
//   }
// }

// search  destination lock
let d1;
whereDestination.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();
  d1 = whereDestination.classList.toggle("dest");
  if (d1 === true) {
    destination.style.display="block"
  } else {
    destination.style.display = "none";
  }
});

window.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();
  console.log(d1)
  if (d1) {
    destination.style.display = "none";
    whereDestination.classList.remove("dest");
  }
});



//calaneder

const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});


//calender dropdown


let calendre = document.getElementById("calendre");
let datecheckout =document.getElementById("datecheckout")
let calander = document.getElementById("calander");

calendre.onclick = function (e) {
  e.preventDefault();
  if (calendre.classList.toggle("active")) {
    calander.style.display="block"
  }
  else {
    calander.style.display = "none";
  }
}


datecheckout.onclick = function (e) {
  e.preventDefault();
  if (calendre.classList.toggle("active")) {
    calander.style.display="block"
  }
  else {
    calander.style.display = "none";
  }
}




let addguest =document.getElementById("addguest");
let Guest=  document.getElementById("Guest")

addguest.onclick=function(e){
  e.preventDefault();
 if(addguest.classList.toggle("active")){
     Guest.style.display="block";
 }
 else{
  Guest.style.display="none";

 }
}
//
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("searchSection").style.display = "flex";
    onex.style.display = "none";
   dropdownBottom.style.display = "none";
   destination.style.display="none"
    imgsections.style.display = "visible";
    
    calander.style.display="none"
    Guest.style.display="none"

  } else {
    document.getElementById("searchSection").style.top = "none";
  }
}