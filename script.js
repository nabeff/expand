document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const boxes = document.querySelectorAll(".box");
      const activeContent = document.getElementById("active-content");

      function setActiveContent(box) {
        const dataType = box.getAttribute("data-type");
        const title = box.querySelector("h1").textContent;
        const paragraph = data[dataType].paragraph;
        const bgColor = data[dataType].backgroundColor;

        // Move active content box
        box.insertAdjacentElement("afterend", activeContent);

        // Update active content
        activeContent.querySelector("h1").textContent = title;
        activeContent.querySelector("p").textContent = paragraph;
        activeContent.style.backgroundColor = bgColor;
      }

      boxes.forEach((box) => {
        box.addEventListener("click", function () {
          setActiveContent(box);
        });
      });

      // Initially set the first box as active
      setActiveContent(boxes[0]);
    })
    .catch((error) => console.error("Error loading the data:", error));
});
