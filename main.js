//Targeting Element By ID
let form = document.getElementById("form");
let input = document.getElementById("input");
let message = document.getElementById("msg");
let posts = document.getElementById("posts");
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    console.log("button.clicked");
    formValidation();
});

let formValidation=()=>{
    if(input.value==="")
    {
        message.innerHTML="Post cannot be blank";
        console.log("Failed");
    }
    else
    {
        message.innerHTML="";
        console.log("Success");
        acceptData();
    }
};

let data={};

let acceptData=()=>{
    data["text"]=input.value;
    createPost();
    console.log(data);
};

let createPost=()=>{
    posts.innerHTML+=
    `<div>
        <p>${data.text}</p>
        <span class="options">
            <i onclick="deletePost(this)" class="fas fa-trash"></i>
            <i onclick="editPost(this)" class="fas fa-edit"></i>
        </span>
    </div>`;
    input.value="";
};


let deletePost=(e)=>{
    e.parentElement.parentElement.remove();
};

let editPost=(e)=>{
    input.value=e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
    //e.deletePost(input.value);
};