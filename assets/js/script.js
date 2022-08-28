const p = document.getElementById("text");
const btns = document.querySelectorAll("button");

document.body.addEventListener("keydown", (event) => {
  let alpha = event.code.substring(event.code.length - 1, event.code.length);

  if (event.code >= "KeyA" && event.code <= "KeyZ") {
    btns.forEach((btn) => {
      if (btn.id.toUpperCase() === alpha) {
        add(btn);
        p.innerHTML += event.key;
      }
    });
  } else if (event.code == "Backspace") {
    add(btns[10]);
    p.innerHTML = p.innerHTML.substring(0, p.innerHTML.length - 1);
  } else if (event.code == "Space") {
    add(btns[btns.length - 1]);
    p.innerHTML += " ";
  }
});

document.body.addEventListener("keyup", (event) => {
  let alpha = event.code.substring(event.code.length - 1, event.code.length);

  if (event.code >= "KeyA" && event.code <= "KeyZ") {
    btns.forEach((btn) => {
      if (btn.id.toUpperCase() === alpha) {
        remove(btn);
      }
    });
  } else if (event.code == "Backspace") {
    remove(btns[10]);
  } else if (event.code == "Space") {
    remove(btns[btns.length - 1]);
  }
});

function add(button) {
  button.classList.add("shadow");
}

function remove(button) {
  button.classList.remove("shadow");
}
