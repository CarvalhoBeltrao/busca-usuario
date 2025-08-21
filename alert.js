function closeToast() {
  const liveToast = document.querySelector("#liveToast");
  liveToast.style.display = "none";
}

function showToast() {
  const liveToast = document.querySelector("#liveToast");
  liveToast.style.display = "block";
  setTimeout(() => {
    if (liveToast.style.display != "none") {
        liveToast.style.display = "none";
    }
  }, 3000);
}

function setLiveToast(title, description) {
  const toastTitle = document.querySelector("#toastTitle");
  const toastDescription = document.querySelector("#toastDescription");

  toastTitle.innerHTML = title;
  toastDescription.innerHTML = description;

  showToast();
}
