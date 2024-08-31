const endpoint = "http://192.168.1.16";

function setDapurLed() {
  fetch(endpoint + "/dapur", {
    method: "POST",
  })
    .then((response) => response)
    .then(() => location.reload());
  ledDapur.style.backgroundColor = "red";
  dapurLedImage.src = "assets/led-on.png";
}
function setTamuLed() {
  fetch(endpoint + "/tamu", {
    method: "POST",
  })
    .then((response) => response)
    .then(() => location.reload());
  ledTamu.style.backgroundColor = "red";
  tamuLedImage.src = "assets/led-on.png";
}
function setMakanLed() {
  fetch(endpoint + "/makan", {
    method: "POST",
  })
    .then((response) => response)
    .then(() => location.reload());
  ledMakan.style.backgroundColor = "red";
  makanLedImage.src = "assets/led-on.png";
}
function setToiletLed() {
  fetch(endpoint + "/toilet", {
    method: "POST",
  })
    .then((response) => response)
    .then(() => location.reload());
  ledToilet.style.backgroundColor = "red";
  toiletLedImage.src = "assets/led-on.png";
}

function getDapurLed() {
  fetch(endpoint + "/dapur", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        ledDapur.style.backgroundColor = "red";
        ledDapur.innerText = "TURN OFF";
        dapurLedImage.src = "assets/led-on.png";
      } else {
        ledDapur.style.backgroundColor = "#579fff";
        dapurLedImage.src = "assets/led-off.png";
      }
    });
}
function getTamuLed() {
  fetch(endpoint + "/tamu", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        ledTamu.style.backgroundColor = "red";
        ledTamu.innerText = "TURN OFF";
        tamuLedImage.src = "assets/led-on.png";
      } else {
        ledTamu.style.backgroundColor = "#579fff";
        tamuLedImage.src = "assets/led-off.png";
      }
    });
}
function getMakanLed() {
  fetch(endpoint + "/makan", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        ledMakan.style.backgroundColor = "red";
        ledMakan.innerText = "TURN OFF";
        makanLedImage.src = "assets/led-on.png";
      } else {
        ledMakan.style.backgroundColor = "#579fff";
        makanLedImage.src = "assets/led-off.png";
      }
    });
}
function getToiletLed() {
  fetch(endpoint + "/toilet", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        ledToilet.style.backgroundColor = "red";
        ledToilet.innerText = "TURN OFF";
        toiletLedImage.src = "assets/led-on.png";
      } else {
        ledToilet.style.backgroundColor = "#579fff";
        toiletLedImage.src = "assets/led-off.png";
      }
    });
}

getDapurLed();
getTamuLed();
getMakanLed();
getToiletLed();
