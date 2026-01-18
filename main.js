document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior:"smooth" });
  });
});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(top < windowHeight - 100){
      el.classList.add("active");
    }
  });
});

const serviceButtons = document.querySelectorAll(".service-btn");

serviceButtons.forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const serviceName = this.getAttribute("data-service");

    const phoneNumber = "9024791337"; // 👈 apna number yahan
    const message = `Hi LF EDITOR, I am interested in ${serviceName}. Please share details.`;

    const whatsappURL =
      "https://wa.me/" +
      phoneNumber +
      "?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  });
});
