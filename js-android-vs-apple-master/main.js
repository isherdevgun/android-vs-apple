document.getElementById('android-btn').addEventListener('click',setAndroid);

function setAndroid() {
 document.getElementById('main-img').src = 'images/Android-Logo.jpg';
 document.getElementById('debate').innerHTML= 'Android Home';
 document.getElementById('debate').style.backgroundColor= '#a4c93b';
 document.getElementById('debate').href= 'https://www.android.com/';
 document.getElementById('main').style.backgroundColor='#a4c93b';
}

document.getElementById('apple-btn').addEventListener('click',setapple);

function setapple() {
 document.getElementById('main-img').src = 'images/Apple-Logo.jpg';
 document.getElementById('debate').innerHTML= 'Apple Home';
 document.getElementById('debate').style.backgroundColor= '#b6bcca';
 document.getElementById('debate').href= 'https://www.apple.com/';
 document.getElementById('main').style.backgroundColor='#b6bcca';
}
