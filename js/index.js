function getRepositories() {
  const name = document.getElementById('username').value;
  const uri = 'https://api.github.com' + '/users/' + name + '/repos';
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', displayRepositories);
  xhr.open('GET', uri);
  xhr.send();
  return false;
}

function getCommits(x) {
  const repoName = x.dataset.repository;
  const uri = 'https://api.github.com' + '/repos/' + x.dataset.username + '/repos';
}

function displayCommits() {
  
}

function getBranches() {
  
}

function displayBranches() {
  
}