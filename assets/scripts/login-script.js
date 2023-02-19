/* 
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* comment : membuat variabel untuk setiap elemen view */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* comment : membuat variabel untuk menyimpan informasi email dan password */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* comment : menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /* comment : mendapatkan nilai dari masing-masing input (email dan password) ketika tombol di tekan */
  const email = inputEmailElement.value;
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
