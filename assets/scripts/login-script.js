/** @module Login-Script */
/**
 * Membuat variabel LoginFormElement untuk tampilan form.
 * @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');


/**
* Membuat variabel InputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');


/**
* Membuat variabel InputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Membuat variabel ExpectedEmail untuk menyimpan informasi email sementara.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';


/**
* Membuat variabel ExpectedPassword untuk menyimpan informasi password sementara.
* @constant {string}
*/
const expectedPassword = 'superpassword';


/* comment : menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

 /**
 * Membuat variabel email untuk menyimpan nilai email yang didapatkan saat button di tekan.
 * @constant {string}
 */
  const email = inputEmailElement.value;
  
  /**
  * Membuat variabel password untuk menyimpan nilai password yang didapatkan pada saat button di tekan.
  * @constant {string}
  */
  const password = inputPasswordElement.value;
  
  
   /* comment : memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan */
  if (email == expectedEmail && password == expectedPassword) {
    
    /* comment : jika sesuai maka program berpindah ke halaman home */
    goToHome();
    
  } else {
    
    /* comment : namunn jika tidak sesuai maka akan menampilkan informasi bahwa input salah*/
    showPopUp();
  }
});
