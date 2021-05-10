//To show singup Modal
function showSignUpModal(){
    var signUpModal = document.getElementById('signUpModal');
    closeOpenedModals();
    signUpModal.style.display = "block";
}

//To show Sign In Model
function showSignInModal(){
    var signInModal = document.getElementById('signInModal');
    closeOpenedModals();
    signInModal.style.display = "block";
}

//To close all opened Modals before opening desired Modal
function closeOpenedModals(){
    var openModals = document.getElementsByClassName('modal');
    for(var i =0; i < openModals.length; i++){
        var openModal = openModals[i];
        if(openModal.style.display == "block"){
            openModal.style.display = "none";
        }
    }
}

//Close Modal by Clicking on close button
function closeModal(modal){
    modal.style.display = "none";
}