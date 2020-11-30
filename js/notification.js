let notification = document.querySelector('.align-notification div');
let closeNotification = document.querySelector('#closeNotification');

function showNotification() {

    notification.classList.add('show-notification');

    closeNotification.addEventListener("click", () => {
        sound.pause(); 
        notification.classList.remove('show-notification');
    });

}
