function showSignUpModal(){
    var signUpModal = document.getElementById('signUpModal');
    closeOpenedModals();
    signUpModal.style.display = "block";
}

function showSignInModal(){
    var signInModal = document.getElementById('signInModal');
    closeOpenedModals();
    signInModal.style.display = "block";
}

function closeOpenedModals(){
    var openModals = document.getElementsByClassName('modal');
    for(var i =0; i < openModals.length; i++){
        var openModal = openModals[i];
        if(openModal.style.display == "block"){
            openModal.style.display = "none";
        }
    }
}

function closeModal(modal){
    modal.style.display = "none";
}