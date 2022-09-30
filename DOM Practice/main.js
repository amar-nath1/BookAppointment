document.title = "DOM Practice";
document.querySelector('h1').innerText='DOM Practice'
const myform=document.querySelector('#my-form')
const nameInput=document.querySelector('#name')
const emailInput=document.querySelector('#email')
const msg=document.querySelector('.msg')

myform.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault()
    if(nameInput.value==='' || emailInput.value===''){

        msg.classList.add('error')
        msg.innerHTML="Name and Email both are mandatory fields"

        setTimeout(()=>msg.remove(),3000)
    }
    else{
        console.log(`Name- ${nameInput.value} \nEmail- ${emailInput.value}`)
    }

}

