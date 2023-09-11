var settingsMenu = document.querySelector('.settings-menu') //we need to hide the setting menu.and we have toadjust the height accordingly.
var darkBtn = document.getElementById('dark-btn')

//for settings menu
function settingsMenuToggle(){
    settingsMenu.classList.toggle('settings-menu-height');
}
darkBtn.onclick = ()=>{
    darkBtn.classList.toggle('dark-btn-on') /**add the class on css */
    document.body.classList.toggle('dark-theme')  //class in the css for dark mode

    //use the localstorage on this dark btn when clicked
    if(localStorage.getItem('theme')=="light"){
        localStorage.setItem('theme','dark')
    }
    else{
        localStorage.setItem('theme','light')
    }
}

/**to read whether the local storage is there or not */

if(localStorage.getItem("theme")=="light"){
    darkBtn.classList.remove("dark-btn-on") /**make the button off */
    document.body.classList.remove('dark-theme') /***remove the class from body */

}
else if(localStorage.getItem('theme')=='dark'){
    darkBtn.classList.add('dark-btn-on')
    document.body.classList.add('dark-theme')
}
else{
   /*when we refresh the website,already made the drk theme will disappear,so to store the changes we use local storage */
//whenever user make first appearance to the site, it will make the following changes

localStorage.setItem('theme','light')  /**name theme and value dark */

}
