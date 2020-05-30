//Initialize Github
const github = new Github();

//Initialize UI
const ui = new UI();

//Add Event Listener to textbox
document.querySelector('#searchUsers').addEventListener('keyup',
    e => {
        //Get input string
        const username = e.target.value;

        if (username !== '') {
            github.getUser(username)
                .then(data => {
                    if (data.profile.message === 'Not Found') {
                        //Show Alert
                        ui.showAlert('User not found', 'alert alert-danger');
                    } else {
                        //Show Profile
                        ui.showProfile(data.profile);
                        ui.showRepos(data.repos);
                    }
                });
        } else {
            ui.clearProfile();
        }


    });