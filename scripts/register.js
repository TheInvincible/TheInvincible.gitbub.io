const userName = document.querySelector("#full-name");
const passWord = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-pc");
const regbtn = document.querySelector(".btn");

function createStore() {
    let store = JSON.parse(localStorage.getItem("store"));
    if (store === null) {
      localStorage.setItem("store", JSON.stringify([]));
      return store;
    } else {
      return store;
    }
  }
  createStore();
  
  function recordUser() {
    let store = createStore();
    let userNameInput = userName.value.trim();
    let passWordInput = passWord.value.trim();
    let confirmPasswordInput = confirmPassword.value.trim();

    const Record = {
        username: userNameInput,
        password: passWordInput,
        confirmPassword: confirmPasswordInput,
      };
      if (passWordInput != confirmPasswordInput){
        alert('Please Enter matching passwords')
        return false;
      }
      store.unshift(Record);
      localStorage.setItem("store", JSON.stringify(store));
    }
    regbtn.onclick = recordUser;
