 // select landing page element
 let landingPage=document.querySelector(".landing-page");
    
 let imgarray=["01.jpg","02.jpg","03.jpg"];
 
 setInterval(()=>{
     let randomNumber=Math.floor(Math.random()*imgarray.length);
      landingPage.style.backgroundImage='url("imgs/'+imgarray[randomNumber]+'")';
 },1000);
 // end landing

 
    // recommmended product slide buttons
    
    const boxrec = document.getElementById("slide");
    const leftbuttonrec = document.getElementById("next-slide");
    const rightbuttonrec = document.getElementById("prev-slide");
    
    leftbuttonrec.addEventListener("click" , ()=>{
        boxrec.style.scrollBehavior= "smooth";
        boxrec.scrollLeft+= 400;
        
    });
    
    rightbuttonrec.addEventListener("click" , ()=>{
        boxrec.style.scrollBehavior= "smooth";
        boxrec.scrollLeft-=400;
        
    });
    // paint products slide buttons
    const boxpaint = document.getElementById("slide-paint");
    const leftbuttonpaint = document.getElementById("next-slide-paint");
    const rightbuttonpaint = document.getElementById("prev-slide-paint");
    
    leftbuttonpaint.addEventListener("click" , ()=>{
        boxpaint.style.scrollBehavior= "smooth";
        boxpaint.scrollLeft+= 400;
        
    });
    
    rightbuttonpaint.addEventListener("click" , ()=>{
        boxpaint.style.scrollBehavior= "smooth";
        boxpaint.scrollLeft-=400;
        
    });
    // floor products slide buttons
    const boxfloor = document.getElementById("slide-floor");
    const leftbuttonfloor = document.getElementById("next-slide-floor");
    const rightbuttonfloor = document.getElementById("prev-slide-floor");
    
    leftbuttonfloor.addEventListener("click" , ()=>{
        boxfloor.style.scrollBehavior= "smooth";
        boxfloor.scrollLeft+= 400;
        
    });
    
    rightbuttonfloor.addEventListener("click" , ()=>{
        boxfloor.style.scrollBehavior= "smooth";
        boxfloor.scrollLeft-=400;
        
    });
    // dinner products slide buttons
    const boxdinner = document.getElementById("slide-dinner");
    const leftbuttondinner = document.getElementById("next-slide-dinner");
    const rightbuttondinner = document.getElementById("prev-slide-dinner");
    
    leftbuttondinner.addEventListener("click" , ()=>{
        boxdinner.style.scrollBehavior= "smooth";
        boxdinner.scrollLeft+= 400;
        
    });
    
    rightbuttondinner.addEventListener("click" , ()=>{
        boxdinner.style.scrollBehavior= "smooth";
        boxdinner.scrollLeft-=400;
        
    });

     // nav as sidebar
     function showsidebar(){
        const sidebar=document.querySelector('.backbar');
        sidebar.style.left='0';
      
      };
      function hidesidebar(){
        const sidebar=document.querySelector('.backbar');
        sidebar.style.left='-1600px';
      };
      
      
      function toggleone() {
        var x = document.querySelector(".open1");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
      function toggletwo() {
        var x = document.querySelector(".open2");
        if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
      }
      function togglethree() {
        var x = document.querySelector(".open3");
        if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
      }
      function togglefour() {
        var x = document.querySelector(".open4");
        if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
      }
      function togglefive() {
        var x = document.querySelector(".open5");
        if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
      }
      function togglesix() {
        var x = document.querySelector(".open6");
        if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
      }
      function toggleseven() {
        var x = document.querySelector(".open7");
        if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
      }
      function toggleeight() {
        var x = document.querySelector(".open8");
      if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
      function togglenine() {
        var x = document.querySelector(".open9");
      if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
      function myFunctionzero() {
        const sidebar= document.querySelector(".zero");
        if (sidebar.style.display === "flex"){
            sidebar.style.display='none';
        }else{
            sidebar.style.display = "flex";  
        }
      }
      
      function myFunctionone() {
        const sidebar=document.querySelector('.one');
        if (sidebar.style.display === "flex"){
            sidebar.style.display='none';
        }else{
            sidebar.style.display = "flex";  
        }
      }
      function myFunctiontwo(){
        const sidebar=document.querySelector('.two');
        if (sidebar.style.display === "flex"){
            sidebar.style.display='none';
        }else{
            sidebar.style.display = "flex";  
        }
        
      }
      function myFunctionthree(){
        const sidebar=document.querySelector('.three');
        if (sidebar.style.display === "flex"){
            sidebar.style.display='none';
        }else{
            sidebar.style.display = "flex";  
        }
        
      }
      function myFunctionfour(){
        const sidebar=document.querySelector('.four');
        if (sidebar.style.display === "flex"){
            sidebar.style.display='none';
        }else{
            sidebar.style.display = "flex";  
        }
      }
      function myFunctionfive(){
        const sidebar=document.querySelector('.five');
        if (sidebar.style.display === "flex"){
            sidebar.style.display='none';
        }else{
            sidebar.style.display = "flex";  
        }
      }
      function myFunctionsix(){
        const sidebar=document.querySelector('.six');
        if (sidebar.style.display === "flex"){
            sidebar.style.display='none';
        }else{
            sidebar.style.display = "flex";  
        }
      }
      function myFunctionseven(){
        const sidebar=document.querySelector('.seven');
        if (sidebar.style.display === "flex"){
            sidebar.style.display='none';
        }else{
            sidebar.style.display = "flex";  
        }
      }
      function myFunctioneight(){
        const sidebar=document.querySelector('.eight');
        if (sidebar.style.display === "flex"){
            sidebar.style.display='none';
        }else{
            sidebar.style.display = "flex";  
        }
      }
      
      // end sidebar

        // show cart side bar
        function cartsideshow(){
            const cartoverlay=document.querySelector('.cart-sidebar-overlay');
            cartoverlay.style.right="0";
        };
        // close cart side bar
        function closesidebarcart(){
            const cartoverlay=document.querySelector('.cart-sidebar-overlay');
            cartoverlay.style.right="-2000px";
        };



        //  scrollup button
    let btn =document.querySelector(".scroll");
    window.onscroll=function(){
    if(window.scrollY>=200){
    btn.style.display="block";
    }else{
      btn.style.display="none";
    }
    };
    
    btn.onclick=function(){
      window.scrollTo({
        left:0 ,
        top:0, 
        behavior:"smooth",
      });
    };
    // end scroll up

    
    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function myFunctiondrop() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      // Close the dropdown menu if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
      
      // open drop down menu in moblie media 
      function myFunctiondrop2() {
        const card= document.querySelector(".dropdown-content2");
                  card.style.display="flex";
      }
      
      // close drop down menu in moblie media 
      function closedropdown() {
                  const card= document.querySelector(".dropdown-content2");
                  card.style.display="none";
                }

                // about us read more
                function showreadmore(){
                    const read=document.querySelector(".about-info span")
                    const btnreadm=document.querySelector(".about-info .more")
                    const btnreadl=document.querySelector(".about-info .less")
                    read.style.display="inline";
                    btnreadm.style.display="none";
                    btnreadl.style.display="block";
                }
                function hidereadmore(){
                    const read=document.querySelector(".about-info span")
                    const btnreadm=document.querySelector(".about-info .more")
                    const btnreadl=document.querySelector(".about-info .less")
                    read.style.display="none";
                    btnreadm.style.display="block";
                    btnreadl.style.display="none";
                }

                function openfilter() {
                    var filterbar = document.querySelector(".filter");
                  
                      if (filterbar.style.display === "none") {
                        filterbar.style.display = "block";
                      } else {
                        filterbar.style.display = "none";
                      }
                    }
                    // Add event listener to check when the window is resized
window.addEventListener("resize", function() {
    if (window.innerWidth >= 992) {
      document.querySelector(".filter").style.display = "block";
    }
    else{
      document.querySelector(".filter").style.display = "none";
    }
  });

  // +&- product
const plus=document.querySelector(".plus");
const minus=document.querySelector(".minus");
const num=document.querySelector(".num");

let a=1;
plus.addEventListener("click",()=>{
    a++;
    a=(a<10)?"0"+a:a;
    num.innerText=a;
});

minus.addEventListener("click",()=>{
    if(a>1){
    a--;
    a=(a<10)?"0"+a:a;
    num.innerText=a;
    }
});

function opencard2() {
    const card= document.querySelector(".checkout .payment .overlay");
    const cardtwo= document.querySelector(".checkout .payment .credit-card");
    card.style.display="flex";
    cardtwo.style.display="flex";
  }
  
function closecard() {
    const card= document.querySelector(".checkout .payment .overlay");
    const cardtwo= document.querySelector(".checkout .payment .credit-card");
    card.style.display="none";
    cardtwo.style.display="none";
  }
function opencardinst() {
    const card= document.querySelector(".checkout .payment .overlay2");
    const cardtwo= document.querySelector(".checkout .payment .instapay-number");
    card.style.display="flex";
    cardtwo.style.display="flex";

  }
  
function closecardinst() {
    const card= document.querySelector(".checkout .payment .overlay2");
    const cardtwo= document.querySelector(".checkout .payment .instapay-number");
    card.style.display="none";
    cardtwo.style.display="none";
  }
  
function opencard() {
    const card= document.querySelector(".credit-card");
    const credit= document.querySelector(".credit");
    const valu= document.querySelector(".valu");
    const cash= document.querySelector(".cash");
    const insta= document.querySelector(".instapay");
    const instnum=document.querySelector(".instapay-number");
    card.style.display="flex";
    cash.style.border="none";
    valu.style.border="none";
    insta.style.border="none";
    instnum.style.display="none";
    credit.style.border="2px solid #ab6a2d";
    
  }
function closecard1() {
    const card= document.querySelector(".credit-card");
    const credit= document.querySelector(".credit");
    const valu= document.querySelector(".valu");
    const cash= document.querySelector(".cash");
    const insta= document.querySelector(".instapay");
    const instnum=document.querySelector(".instapay-number");
    card.style.display="none";
    cash.style.border="none";
    credit.style.border="none";
    insta.style.border="none";
    instnum.style.display="none";
    valu.style.border="2px solid #ab6a2d";
  }
function closecard2() {
    const card= document.querySelector(".credit-card");
    const credit= document.querySelector(".credit");
    const valu= document.querySelector(".valu");
    const cash= document.querySelector(".cash");
    const insta= document.querySelector(".instapay");
    const instnum=document.querySelector(".instapay-number");
    card.style.display="none";
    credit.style.border="none";
    valu.style.border="none";
    instnum.style.display="none";
    cash.style.border="2px solid #ab6a2d";
    insta.style.border="none";
  }
function closecard3() {
    const card= document.querySelector(".credit-card");
    const credit= document.querySelector(".credit");
    const valu= document.querySelector(".valu");
    const cash= document.querySelector(".cash");
    const insta= document.querySelector(".instapay");
    const instnum=document.querySelector(".instapay-number");
    instnum.style.display="flex";
    card.style.display="none";
    credit.style.border="none";
    valu.style.border="none";
    cash.style.border="none";
    insta.style.border="2px solid #ab6a2d";
  }
  
  