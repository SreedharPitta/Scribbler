
function showDeletePostModal(id){
    var deletePostModal = document.getElementById('deletePostModal');
    closeOpenedModals();
    var yesBtn = document.getElementsByClassName("yes-btn");
    var postNo = id.getAttribute('data-id');
    var postId  = 'post' + postNo;
    yesBtn[0].setAttribute('data-post', postId); 
    deletePostModal.style.display = "block";
}

function deletePost(){
    var postId = document.getElementsByClassName('yes-btn')[0].getAttribute('data-post');
    console.log("Post Id " + postId);
    var post = document.getElementById(postId);
    post.style.display = "none";
    closeOpenedModals();
}