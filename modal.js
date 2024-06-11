 
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".folder-extras .item");
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const closeButton = modal.querySelector(".button-close"); // Update this line
  
    items.forEach(item => {
      item.addEventListener("click", function () {
        const text = this.querySelector(".item-text-normal").innerText;
        modalText.innerText = text;
        modal.style.display = "block";
      });
    });
  
    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });