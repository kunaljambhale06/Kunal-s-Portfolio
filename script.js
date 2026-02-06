
let contrastToggle = false;
function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-theme";
    }else{
        document.body.classList.remove("dark-theme");
    }
    
}
function contact(event) {
    console.log("contact triggered");
    event.preventDefault();

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

    // Show loading
    loading.classList.add("modal__overlay--visible");

    // Submit using EmailJS
    emailjs.sendForm(
        'service_hre3epu',
        'template_e6y1rwb',
        event.target,
        '4cNZPhPvhdeokjYlM'
    ).then(() => {
        // Hide loading and show success
        loading.classList.remove("modal__overlay--visible");
        success.classList.add("modal__overlay--visible");

        // Reset form
        document.getElementById("contact__form").reset();

        // Optionally hide success after 90s
        setTimeout(() => {
            success.classList.remove("modal__overlay--visible");
        }, 9000);

    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert("OOPS! Unable To Submit The Form");
    });
}
let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}
/*function toggleModal() {
    console.log('Function is called')
     isModalOpen = !isModalOpen;
    if (isModalOpen) {
        document.body.classList.remove("modal--open");
    }
    document.body.classList.add("modal--open");

}*/



