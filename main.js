let web1 = document.getElementById("cc1");
let web2 = document.getElementById("cc2");
let web3 = document.getElementById("cc3");
let web4 = document.getElementById("cc4");
let cpp = document.getElementById("cc5");
let python = document.getElementById("cc6");


let tvv = document.getElementById("tv");
let tvv2 = document.getElementById("tv2");
let no = document.getElementById("no");


function book1 (){

    web2.classList.remove("d-block");
    web2.classList.add("d-none");
    web4.classList.remove("d-block");
    web4.classList.add("d-none");
    web3.classList.remove("d-block");
    web3.classList.add("d-none");
    cpp.classList.remove("d-block");
    cpp.classList.add("d-none");
    python.classList.remove("d-block");
    python.classList.add("d-none");

    
    web1.classList.remove("d-none");
    web1.classList.add("d-block");


}


function book2 (){

    web3.classList.remove("d-block");
    web3.classList.add("d-none");
    web4.classList.remove("d-block");
    web4.classList.add("d-none");
    web1.classList.remove("d-block");
    web1.classList.add("d-none");
    cpp.classList.remove("d-block");
    cpp.classList.add("d-none");
    python.classList.remove("d-block");
    python.classList.add("d-none");

    
    web2.classList.remove("d-none");
    web2.classList.add("d-block");

}


function book3 (){

    web2.classList.remove("d-block");
    web2.classList.add("d-none");
    web4.classList.remove("d-block");
    web4.classList.add("d-none");
    web1.classList.remove("d-block");
    web1.classList.add("d-none");
    cpp.classList.remove("d-block");
    cpp.classList.add("d-none");
    python.classList.remove("d-block");
    python.classList.add("d-none");

    
    web3.classList.remove("d-none");
    web3.classList.add("d-block");

}


function book4 (){

    web2.classList.remove("d-block");
    web2.classList.add("d-none");
    web3.classList.remove("d-block");
    web3.classList.add("d-none");
    web1.classList.remove("d-block");
    web1.classList.add("d-none");
    cpp.classList.remove("d-block");
    cpp.classList.add("d-none");
    python.classList.remove("d-block");
    python.classList.add("d-none");
    
    web4.classList.remove("d-none");
    web4.classList.add("d-block");

}


function book5 (){

    web2.classList.remove("d-block");
    web2.classList.add("d-none");
    web4.classList.remove("d-block");
    web4.classList.add("d-none");
    web1.classList.remove("d-block");
    web1.classList.add("d-none");
    web3.classList.remove("d-block");
    web3.classList.add("d-none");
    python.classList.remove("d-block");
    python.classList.add("d-none");
    
    cpp.classList.remove("d-none");
    cpp.classList.add("d-block");

}


function book6 (){

    web2.classList.remove("d-block");
    web2.classList.add("d-none");
    web4.classList.remove("d-block");
    web4.classList.add("d-none");
    web1.classList.remove("d-block");
    web1.classList.add("d-none");
    cpp.classList.remove("d-block");
    cpp.classList.add("d-none");
    web3.classList.remove("d-block");
    web3.classList.add("d-none");
    
    python.classList.remove("d-none");
    python.classList.add("d-block");

}


function hide (){

    web2.classList.remove("d-block");
    web2.classList.add("d-none");
    web4.classList.remove("d-block");
    web4.classList.add("d-none");
    web1.classList.remove("d-block");
    web1.classList.add("d-none");
    cpp.classList.remove("d-block");
    cpp.classList.add("d-none");
    web3.classList.remove("d-block");
    web3.classList.add("d-none");
    python.classList.remove("d-block");
    python.classList.add("d-none");

}


function tv(){

    tvv.classList.remove("d-none");
    tvv.classList.add("d-block");
    tvv.style.transition="all 0.5s";
   
    no.classList.remove("d-none");
    no.classList.add("d-block");


    ok.classList.remove("d-block");
    ok.classList.add("d-none");

   
}


function tvhide(){


   tvv.classList.remove("d-block");
   tvv.classList.add("d-none");

   ok.classList.remove("d-none");
   ok.classList.add("d-block");

   no.classList.remove("d-block");
   no.classList.add("d-none");

  
          
}