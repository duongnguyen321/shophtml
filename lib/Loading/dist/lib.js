const loading = document.querySelector("#loading")
window.onload = function () {
    setTimeout(() => {
        loading.classList.remove("active")
    }, 1000);
}
