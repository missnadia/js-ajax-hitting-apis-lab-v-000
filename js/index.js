function getRepositories() {
  const name = document.getElementById('username').value;
  const uri = 'https://api.github.com' + '/users/' + name + '/repos';
  const xhr = new XMLHttpRequest();
}