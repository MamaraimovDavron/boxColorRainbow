const boxes = document.querySelectorAll(".box");

for (const box of boxes) {
  // console.log(box);
  box.onmouseover = () => {
    box.style.backgroundColor = "coral";
    box.innerHTML = "coral";
    box.style.transition = "0.2s";

    new Promise((resolve, reject) => {
      setTimeout(() => {
        box.style.backgroundColor = "red";
        box.innerHTML = "red";
        resolve("green");
      }, 500);
    }).then((color) => {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          box.style.backgroundColor = color;
          box.innerHTML = color;

          // resolve("rgb(28, 24, 24)");
          resolve("blue");
        }, 500);
      }).then((color) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            box.style.backgroundColor = color;
            // box.style.transition = "2s";
            box.innerHTML = color;

            resolve("rgb(28, 24, 24)");
          }, 500);
        }).then((color) => {
          setTimeout(() => {
            box.style.backgroundColor = color;
            box.innerHTML = "";
            // box.innerHTML = "";
            box.style.transition = "2s";
          }, 500);
        });
      });
    });
  };
}
