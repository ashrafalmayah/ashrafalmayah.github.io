
const commentTemplate = document.querySelector('.comment-container');
const commentsList = document.querySelector('.comments-list');
fetch('data.json').then(response => response.json()).then(data => {
    data.comments.forEach(comment => {
        let newComment = setUpComment(comment, data.currentUser);
        
        comment.replies.forEach(replay => {
            let newReplay = setUpComment(replay, data.currentUser);
            newReplay.querySelector('.replying-to').innerText = "@" + replay.replyingTo + " ";

            newComment.querySelector('.replies-list').appendChild(newReplay);
        });
        commentsList.appendChild(newComment);
    });
});

function setUpComment(comment, currentUser){
    let newComment = commentTemplate.cloneNode(true);
    newComment.classList.remove('hidden');
    newComment.querySelector('header img').setAttribute('src',comment.user.image.png);
    newComment.querySelector('.comment-name').innerText = comment.user.username;
    newComment.querySelector('.comment-created-at').innerText = comment.createdAt;
    newComment.querySelector('.comment-content .comment-text').innerText = comment.content;
    newComment.querySelector('.comment-score span').innerText = comment.score;

    if(comment.user.username == currentUser.username){
        newComment.querySelector('.you-stamp').classList.remove('hidden');
        newComment.querySelector('#edit-btn').classList.remove('hidden');
        newComment.querySelector('#delete-btn').classList.remove('hidden');
    }else{
        newComment.querySelector('#replay-btn').classList.remove('hidden');
    }
    
    return newComment;
}