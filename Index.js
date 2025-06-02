const showBtn = document.getElementById('show-btn');
const hideBtn = document.getElementById('hide-btn');

showBtn.addEventListener('click', function() {
  showBtn.style.transform = 'scale(0.2)';
  hideBtn.style.transform = 'scale(2)';
  // ...
});

hideBtn.addEventListener('click', function() {
  hideBtn.style.transform = 'scale(0.2)';
  showBtn.style.transform = 'scale(2)';
  // ...
});
function calculateAge(birthDateStr) {
      const today = new Date(); 
      const birthDate = new Date(birthDateStr);

      let age = today.getFullYear() - birthDate.getFullYear();


      const hasBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

      if (!hasBirthdayPassed) {
        age--; 
      }

      return age;
    }

    const birthDate = "2008-09-14";
    const age = calculateAge(birthDate);

 const text = `I'm a ${age}-year-old self-taught developer. I know HTML, CSS, and JavaScript. You can call me enzo, or whatever you feel like—I’m not really particular about names. I'm into programming. I’ve been learning JavaScript; still got a lot to learn, but I enjoy figuring things out bit by bit. I’m kinda cold and introvert, but I guess you just need to get used to it.`;

let index = 0;
const output = document.getElementById("output");

 document.getElementById("show-btn").addEventListener("click", () => {
 output.innerHTML = ''; 
 index = 0;

const intervalId = setInterval(() => {
 if (index < text.length) {
 output.innerHTML += text[index];
 index++;
 } else {
  clearInterval(intervalId);
 }
 }, 20);
 
 }); 
 
 document.getElementById("hide-btn").addEventListener("click", () => {
  const hideIntervalId = setInterval(() => {
    if (output.innerHTML.length > 0) {
      output.innerHTML = output.innerHTML.slice(0, -1);
    } else {
      clearInterval(hideIntervalId);
    }
  }, 20);
});

const text1 = "Hi, I’m Lawrence";
let index1 = 0;
let isTyping = true;
const names = document.getElementById("name");
const intervalId1 = setInterval(() => {
  if (isTyping) {
    if (index1 < text1.length) {
      names.innerHTML += text1[index1];
      index1++;
    } else {
      isTyping = false;
    }
  } else {
    if (names.innerHTML.length > 0) {
      names.innerHTML = names.innerHTML.slice(0, -1);
    } else {
      isTyping = true;
      index1 = 0;
    }
  }
}, 300);

document.getElementById("darkMode").addEventListener("click", function () {
  const body = document.body;
  
  const currentColor = window.getComputedStyle(body).backgroundColor;
  
  if (currentColor === "rgb(255, 255, 255)") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
});
