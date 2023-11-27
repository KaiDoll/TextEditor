const butInstall = document.getElementById('buttonInstall'); //ref to html button id

window.addEventListener('beforeinstallprompt', (event) => {//prompt user to install.
    window.deferredPrompt = event; //Saves the installation prompt event in here.
    butInstall.classList.toggle('hidden', false); //makes the button visible by removing the hidden class.
});  


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt; //when the install button is clicked it retrieves the prompt.

    if(!promptEvent) {
        return;
    } //if no need to install 

    promptEvent.prompt();

    window.defferedPrompt = null; //once installed it will turn to null

    butInstall.classList.toggle('hidden', true); //hides the install button
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null; //app is installed
});
