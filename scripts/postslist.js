// This is for Showing Delete Modal
function showDeletePostModal(id){
    var deletePostModal = document.getElementById('deletePostModal');
    closeOpenedModals();
    var yesBtn = document.getElementsByClassName("yes-btn");
    var post = document.getElementById(id);
    var postNo = post.getAttribute('data-id');
    var postId  = 'post' + postNo;
    yesBtn[0].setAttribute('data-post', postId); 
    deletePostModal.style.display = 'block';
}
//This is for Deleting Post
function deletePost(){
    var postId = document.getElementsByClassName('yes-btn')[0].getAttribute('data-post');
    var post = document.getElementById(postId);
    post.style.display = 'none';
    closeOpenedModals();
}
//This is for Showing Post Details in new Page
function viewPostDetails(id){
    var post = document.getElementById(id);
    var author = btoa(post.querySelector('.postAuthor').innerHTML);
    var title = btoa(post.querySelector(".postTitle").innerHTML);
    var content = btoa(post.querySelector('.postContent').innerHTML);
    var postUrl = 'post.html?author='+author + '&title='+ title+"&content="+content;
    window.location.href=postUrl;
}