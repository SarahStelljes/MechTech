const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

async function editFormHandler(event){
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const post_text = document.querySelector('#post-text').value.trim();

    if(title && post_text){
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                post_text
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

async function deletePostHandler(event){
    event.preventDefault();

    const confirmDelete = confirm(`You are about to delete this post. Would you like to continue?`);

    if(confirmDelete){
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE'
        });
        
        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.update-post-form').addEventListener('submit', editFormHandler);
document.querySelector('.delete-btn').addEventListener('click', deletePostHandler);