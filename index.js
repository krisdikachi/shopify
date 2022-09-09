


 const emoji= document.querySelector(".emoji");
 function mouseover(){emoji.innerHTML='<i class="fa fa-angle-down" style="font-size:36px ;font-weight: 20px;color: navy;" ></i>';}
 emoji.addEventListener("mouseover", mouseover);
 function mouseout(){emoji.innerHTML='<i class="fa fa-bars" style="font-size:36px ;font-weight: 20px;color: navy;" ></i>'};
 emoji.addEventListener("mouseleave", mouseout);


 const btn1= document.querySelector(".btn1");
 function handleMouseover(){btn1.innerHTML='<i class="fa fa-user-plus" style="font-size:25px ;font-weight: 20px;color: white;" ></i>';}
 btn1.addEventListener("mouseover", handleMouseover);
 function handleMouseout(){btn1.innerHTML='register'};
 btn1.addEventListener("mouseleave", handleMouseout);



 const btn2= document.querySelector(".btn2");
 function knobMouseover(){btn2.innerHTML='<i class="fa-solid fa-right-to-bracket"></i>';}
 btn2.addEventListener("mouseover", knobMouseover);
 function knobMouseout(){btn2.innerHTML='log in'};
 btn2.addEventListener("mouseleave", knobMouseout);











