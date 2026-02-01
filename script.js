const toastBox = document.getElementById("toastBox");
const successMsg = "Successfully submitted";
const errorMsg = "Please fix the error!";
const invalidMsg = "Invalid input, check again";

function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes("error")){
        toast.classList.add("error");
    }
    if(msg.includes("Invalid")){
        toast.classList.add("Invalid");
    };
};