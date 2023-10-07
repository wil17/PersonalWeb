let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)

var mixer = mixitup('.portfolio-gallery');

// Sticky Navbar //
const header = document.querySelector("header");
window.addEventListener("scroll",function() {
    header.classList.toggle("sticky",window.scrollY > 50)
})

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("open");
}

//Submit Form/

function sendMessage(){
    (function(){
        emailjs.init("O-Zd3Tl3XGua-GO9d");
        console.log('Inisialisasi EmailJS');
    })();

    var serviceID = "service_vsjp2lc";
    var templateID = "template_6g17f9r";

    var params = {
        sendername: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        address: document.querySelector("#address").value,
        phone : document.querySelector("#phone").value,
        message : document.querySelector("#message").value
    };

    emailjs.send(serviceID, templateID, params)
    .then( res => {
        alert('Terima kasih, ' + params['sendername'] + '! Pesan anda berhasil dikirim.');
    })
    .catch(error => {
        console.error('Kesalahan mengirim email:', error);
    });    
}