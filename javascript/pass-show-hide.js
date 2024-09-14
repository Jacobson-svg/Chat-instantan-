const pswrdfield = document.querySelector('.form .field input[type="password"]');
var toggleBtn = document.querySelector('.form .field img');
var img = document.querySelector('.form .field img');

toggleBtn.onclick = () => {
    if(pswrdfield.type == 'password'){
        pswrdfield.type = 'text';
        img.src = 'images/aveugle.png';
    }else{
        pswrdfield.type = 'password';
        img.src = 'images/visible.png';
    }
}