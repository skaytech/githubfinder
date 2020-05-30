class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    showProfile(profileData) {
        this.profile.innerHTML =
            `
            <div class="card card-body mb-3">
              <div class="row">
                <div class="col-md-3">
                  <img class="img-fluid mb-2" src="${profileData.avatar_url}">
                  <a href="${profileData.html_url}" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                  <span class="badge badge-primary p-3 mr-1 mb-1">Public Repos: ${profileData.public_repos}</span>
                  <span class="badge badge-success p-3 mr-1 mb-1">Public Gists: ${profileData.public_gists}</span>
                  <span class="badge badge-warning p-3 mr-1">Followers: ${profileData.followers}</span>
                  <span class="badge badge-danger p-3 mr-1">Following: ${profileData.following}</span>
                  <br>
                  <br>
                  <ul class="list-group">
                    <li class="list-group-item">Company: ${profileData.company}</li>
                    <li class="list-group-item">Website/Blog: ${profileData.blog}</li>
                    <li class="list-group-item">Location: ${profileData.location}</li>
                    <li class="list-group-item">Member Since: ${profileData.created_at}</li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 class="page-heading text-white mb-3">Latest Repos</h3>
            <div id="repos"></div>           
    `
    }

    showRepos(repos) {
        console.log(repos);
        const repoDiv = document.querySelector('#repos');
        let output = '';
        repos.forEach(function(repo) {
            output += `
          <div class="card card-body mb-2">
            <div class="row">
              <div class="col-md-6">
                <a href="${repo.html_url} target="_blank">${repo.name}</a>
              </div>
              <div class="col-md-6">
                <span class="badge badge-primary p-3 mr-1">Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-warning p-3 mr-1">Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-success p-3 mr-1">Forks: ${repo.forms_count}</span>
              </div>
            </div>
          </div>    
        `
        });
        repoDiv.innerHTML = output;
    }

    showAlert(msg, className) {
        this.clearAlert();
        const errorDiv = document.createElement('div');
        errorDiv.className = className;
        errorDiv.appendChild(document.createTextNode(msg));
        const parent = document.querySelector('.search-container');
        const searchDiv = document.querySelector('.search');
        parent.insertBefore(errorDiv, searchDiv);

        setTimeout(() => {
            errorDiv.remove();
        }, 2000)
    }

    clearAlert() {
        const errorDiv = document.querySelector('.alert');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}