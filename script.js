document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);  

window.onload = function() {
  const date = new Date();
  const hour = date.getHours();
  const content = document.getElementById("content");
  const timeImage = document.getElementById("timeImage");
  const message = document.getElementById("message");

  if (hour >= 5 && hour < 12) {
    // Morning
    document.body.className = 'morning';
    timeImage.src = 'images/morning.jpg';
    message.textContent = 'Good morning!'; 
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    document.body.className = 'afternoon';
    timeImage.src = 'images/afternoon.jpg';
    message.textContent = 'Good afternoon!'; 
  } else if (hour >= 18 && hour < 23) {
    // Evening
    document.body.className = 'evening';
    timeImage.src = 'images/evening.jpg';
    message.textContent = 'Good evening!'; 
  } else {
    // Night
    document.body.className = 'night';
    timeImage.src = 'images/night.jpg';
    message.textContent = 'Good night!';
  }
}
