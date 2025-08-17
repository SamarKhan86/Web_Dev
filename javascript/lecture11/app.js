let h1 = document.querySelector("h1");

function colorChange( color, delay ) {
  return new Promise( (resolve, reject ) => {
    setTimeout( () => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

colorChange("red", 1000)
  .then( () => {
    console.log("the color was changed to red");
    return colorChange("orange", 1000);
  })
  .then( () => {
    console.log("the color was changed to orange");
    return colorChange("yellow", 1000);
  })
  .then( () => {
    console.log("the color was changed to yellow");
    return colorChange("blue", 1000);
  })
  .then( () => {
    console.log("the color was changed to blue");
  });
