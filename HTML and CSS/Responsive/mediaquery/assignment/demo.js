document.addEventListener("DOMContentLoaded", () => {
    const dropArea = document.getElementById("drop-area");
    const pizzaImage = document.createElement("img"); // Create an image element for the pizza
    const crustImages = document.querySelectorAll(".crust-image");

    crustImages.forEach((crustImage) => {
      const crustName = crustImage.nextElementSibling;
      crustImage.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", crustName.textContent);
        event.dataTransfer.setDragImage(crustImage.querySelector("img"), 0, 0);
      });
    });
    
    dropArea.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
  
    dropArea.addEventListener("drop", (event) => {
      event.preventDefault();
      const data = event.dataTransfer.getData("text/plain");
      dropArea.innerHTML = `Selected: ${data}`;
      dropArea.style.backgroundColor = "lightgreen";
  
      // Update the pizza image based on selected base and ingredients
      pizzaImage.src = `${data.toLowerCase()}.jpg`; // Assumes image filenames are lowercase
      pizzaImage.alt = data;
      dropArea.appendChild(pizzaImage);
    });
  
    const pizzaBases = document.querySelectorAll(".pizza-base");
    const ingredientOptions = document.querySelectorAll(".ingredient-option");
  
    ingredientOptions.forEach((ingredient) => {
      ingredient.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", ingredient.id);
        event.dataTransfer.setDragImage(ingredient.querySelector("img"), 0, 0); // Set drag image
      });
    });
  
    pizzaBases.forEach((base) => {
      base.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", base.id);
      });
    });
  });