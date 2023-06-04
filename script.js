function myfunction(e) {
    // e.preventDefault();
    e.stopPropagation();
    let parent = document.getElementById("list_items");

    console.log(e);
    let child = parent.childNodes;
    child.forEach((el) => {
        if (el.className) {
            el.classList.remove("active");
        }
    });
    console.log();
    e.target.parentElement.classList.add("active");
}
function navOpen(e) {
    e.preventDefault();
    e.stopPropagation();
    // console.log(e);
    let c = e.target;
    c.classList.toggle("active");
    let menu = document.getElementById("list_items");
    menu.classList.toggle("active");
}
function monthyear(e) {
    // e.preventDefault();
    e.stopPropagation();
    let month = document.getElementById("month");
    let year = document.getElementById("year");
    month.classList.toggle("active");
    year.classList.toggle("active");
    console.log(e);
    pricingHandler(e);
}

function pricingHandler(event){
    let h1=document.querySelectorAll(".plan_box .number h1");
    let h3=document.querySelectorAll(".plan_box .number h3");
    for (let i = 0; i < h1.length; i++) {
        if(event.target.innerText == "Yearly"){
            h1[i].innerText = `$${parseInt(h1[i].innerText.replace("$",""))*10}`;
            h3[i].innerText = `/year`;
        }else{
            h1[i].innerText = `$${parseInt(h1[i].innerText.replace("$",""))/10}`;
            h3[i].innerText = `/mo`;

        }
    }
}
(function (){const acc = document.getElementsByClassName("contentbox");
console.log("this funtion called immediately");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function (event) {
        let ele = event.target.parentElement;
        ele.classList.toggle("active");
        if(ele.classList.contains("active")){
            gsap.to(ele, { 
            height: "auto"
         })
        }else{
            gsap.to(ele, { 
                height: 80
             })
        }
        
        
    })
}}())
