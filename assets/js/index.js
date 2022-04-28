let btn=document.querySelector(" .writebox h1")
btn.addEventListener("mouseover",add)


function add(e){
    let value=e
    value=e.target;
    value.style.background=`#${e.offsetX}`
    console.log(value)

}


let form=document.querySelector(".small form")

let name=document.querySelector("#name")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let address=document.querySelector("#address")
let BD=document.querySelector("#BD")

form.addEventListener("submit",mess)

function mess(e){
    e.preventDefault();
    let user={
        Name:name.value,
        email:email.value,
        password:password.value,
        address:address.value,
        BD:BD.value
    }
    console.log(user);
    Name.value="";
    email.value="";
    password.value="";
    address.value="";
    BD.value="";
}



    
