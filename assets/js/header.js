const basePath = window.location.hostname.includes("github.io")
  ? "/razsolutions"
  : "";

fetch(`${basePath}/header.html`)
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
    });