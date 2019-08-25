const form = document.querySelector("#form");
const userName = document.querySelector("#full-name");
const passWord = document.querySelector("#password");
const loginBtn = document.querySelector(".login");

function checkStore() {

  let store = JSON.parse(localStorage.getItem("store"));
  for (let i = 0; i < store.length; i++) {            //Keep adding items to storage with the beginning point at zero items
    if ((userName.value != store[i].username) || (passWord.value != store[i].password)) { //check the store
      alert('User does not exist')
      return false;
    }
    else {
      localStorage.setItem('username', store[i].username)  //set the login details to storage.
      window.location.href = "test.html";
      return true;
    }
    
  }
 }
// checkStore();
loginBtn.onclick = checkStore;


document.querySelector('.forgot').onclick = function forgotPassword() {
  
  let getPass = document.querySelector('#reset');
    if(getPass.style.display === 'none') {
      getPass.style.display = 'block';
    } else {
      getPass.style.display = 'none';
    }
}

console.log(forgotPassword());
