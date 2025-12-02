// Saare boxes select karo
const boxes = document.querySelectorAll(".box");

// Har box pe click event
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Agar pehle se checked hai to hata do
    if (box.classList.contains("checked")) {
      box.classList.remove("checked");
      box.textContent = ""; // ✅ hatao
    } else {
      box.classList.add("checked");
      box.textContent = "✔️"; // ✅ add karo
    }
  });
});
