const name = document.getElementById("name");
const mobile = document.getElementById("mobile");
const email = document.getElementById("email");
const comment = document.getElementById("comment");
const btn = document.getElementById("btn");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    // const obj = {
    //     cname : name.value,
    //     cmobile : mobile.value,
    //     email : email.value,
    //     comment : comment.value
    // }
    console.log(`${name.value}`);
    console.log(`${mobile.value}`);
    console.log(`${email.value}`);
    console.log(`${comment.value}`);
    
})