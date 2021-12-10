function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(); // Fill in
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
