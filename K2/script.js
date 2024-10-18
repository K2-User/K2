document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const indicators = document.querySelectorAll(".indicators li");
    const numberdisṕlay = document.querySelector(".number");
    let currentIndex = 0;
 
    function showItem(index) {
        items.forEach(items => items.classList.remove ("active"));
        indicators.forEach(indicator => indicator.classList.remove("active"));
 
        items[index].classList.add("active");
        indicators[index].classList.add("active");
        numberdisṕlay.textContent = (index + 1).toString().padStar(2, "0");
    }
 
    function nextItem() {
        currentIndex =(currentIndex + 1) % items.legth;
        showItem(currentIndex);
    }
 
    function prevItem() {
        currentIndex =(currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }
 
    nextBtn.addEventListener("click", nextBtn);
    prevBtn.addEventListener("click", prevBtn);
 
    //inicializar
    showItem(currentIndex);
});