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
                document.location.replace('/login');
            } else {
                alert(response.statusText);
            }
        } else {
            alert("Passwords do not match!");
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);