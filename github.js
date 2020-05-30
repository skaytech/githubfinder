class Github {
    constructor() {
        this.client_id = '5fe56bc18d9d088556b1';
        this.client_secret = 'cb55bf71a46511ab7c6b53d946a9e19dd9ef1362';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(username) {
        const response = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await response.json();

        const repos = await repoResponse.json();

        return {
            //This returns the JSON in the format of profile:profile
            profile,
            repos
        };
    }
}