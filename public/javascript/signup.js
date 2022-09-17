async function autoLoginHandler(username, password){
    if(username && password){
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok){
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

async function signupFormHandler(event){
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const resubmitPsw = document.querySelector('#resubmit-password').value.trim();

    if(username && password && resubmitPsw){
        if(password === resubmitPsw){
            const response = await fetch('/api/users', {
                method: 'post',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: {'Content-Type': 'application/json'}
            });

            if(response.ok){
                console.log('success!');
                autoLoginHandler(username, password);
            } else {
                alert(response.statusText);
            }
        } else {
            alert("Passwords do not match!");
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);