const text = "Shashank Talekar";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}

window.onload = typeWriter;
