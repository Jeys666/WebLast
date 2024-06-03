function validation() {
    let inputnama = document.getElementById('nama').value
    let inputemail = document.getElementById('email').value
    let inputpass = document.getElementById('password').value
    if (inputnama && inputemail && inputpass) {
        alert('Berhasil TOL ')
    } else{
        alert('Kurang Lengkao BLOK ')
    }
}