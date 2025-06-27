//Loading of script set to defer in HTML head

//Declare function to toggle which section is visible via a separate button
//Only one section may be visible at a time
//Accounts for fade transitions managed via CSS opacity settings
const showSection = (activeSection, activeButton) => {
    if (activeSection.style.display == "block") {
        //Collapse visible section if toggled while already showing
        window.scrollTo({top: 0, behavior: "smooth"})
        activeSection.style.opacity = "0"
        //Timeout set at half of opacity transition time (1s) to speed up lag on disappearing side scroll bar while still maintaining scroll and fade effects
        setTimeout(() => activeSection.style.display = "none",500)
    } else {
        //Collapse all sections before expanding selected section
        let allCollapsibleSections = document.getElementsByClassName("collapsible")
        for (let section of allCollapsibleSections) {
            section.style.display = "none"
            section.style.opacity = "0"
        }
        activeSection.style.display = "block"
        activeButton.scrollIntoView({behavior:"smooth"})
        activeSection.style.opacity = "1" 
    } 
}

//Store relevant elements as variables
let contactButton = document.getElementById("contact-button")
let pricingButton = document.getElementById("pricing-button")
let termsButton = document.getElementById("terms-button")
let contactSection = document.getElementById("contact-details")
let pricingSection = document.getElementById("pricing-info")
let termsSection = document.getElementById("terms-conditions")

//Apply event listeners to div buttons to control toggling of collapsible sections
contactButton.addEventListener("click", () => showSection(contactSection, contactButton))
pricingButton.addEventListener("click", () => showSection(pricingSection, pricingButton))
termsButton.addEventListener("click", () => showSection(termsSection, termsButton))


//Change mailto: functionality to copy email address to clipboard and notify user rather than opening email client
let emailLink = document.getElementById("email-link")
let copiedMessage = document.getElementById("copied-message")
emailLink.addEventListener("click",()=>{
    navigator.clipboard.writeText("kittiesinthecitylondon@gmail.com")
    copiedMessage.style.visibility = "visible"
    copiedMessage.style.transition = "opacity 3s"
    copiedMessage.style.opacity = "0"
    copiedMessage.addEventListener("transitionend", () => {
        copiedMessage.style.visibility = "hidden"
        copiedMessage.style.transition = "opacity 0s"
        copiedMessage.style.opacity = "1"
    })
})