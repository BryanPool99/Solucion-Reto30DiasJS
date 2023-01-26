//obtener los valores de los inputs y del form
const form=document.getElementById("form");
const inputs=document.querySelectorAll("input");
const Regex={
    name:/^[A-Za-z0-9\s]{3,16}$/,
    lastname:/^[A-Za-z0-9\s]{3,16}$/,
    email:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    password:/^[A-Za-z0-9\_\-\@]{6,20}$/,
    phone:/^\d{3}-\d{3}-\d{4}$/,
    bio:/^[A-Za-z0-9\_\-\s]{8,50}$/,
}
const fields={
    name:false,
    lastname:false,
    email:false,
    password:false,
    phone:false,
    bio:false
}
const validateForm=(e)=>{
    switch (e.target.name) {
        case "name":
            validateField(Regex.name,e.target,"name");
            break;
        case "lastname":
            validateField(Regex.lastname,e.target,"lastname");
            break;
        case "email":
            validateField(Regex.email,e.target,"email");
            break;
        case "password":
            validateField(Regex.password,e.target,"password");
            break;
        case "phone":
            validateField(Regex.phone,e.target,"phone");
            break;
        case "bio":
            validateField(Regex.bio,e.target,"bio");
            break;
    }
}
const validateField=(regex,input,field)=>{
    if(regex.test(input.value)){
        document.getElementById(`error-${field}`).classList.remove("active");
        document.getElementById(`${field}`).classList.add("valid");
        fields[field]=true;
    }   
    else{
        document.getElementById(`error-${field}`).classList.add("active");
        document.getElementById(`${field}`).classList.remove("valid");
        fields[field]=false;
    }
}
inputs.forEach((input)=>{
    input.addEventListener("keyup",validateForm);
    input.addEventListener("blur",validateForm);
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(
        fields.name && fields.lastname && fields.email && fields.password 
        && fields.phone && fields.bio
    ){
        alert("Enviado con exito");
        inputs.forEach(e=>{
            e.classList.remove("valid");
        })
        form.reset();
    }else{
        alert("Complete correctamente los campos");
    }
})
