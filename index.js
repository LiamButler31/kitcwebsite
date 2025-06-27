const showSection = (activeSection) => {
    let allCollapsibleSections = document.getElementsByClassName("collapsible")
    if (activeSection.style.display == "block") {
        activeSection.style.display = "none"
    } else {
        for (let section of allCollapsibleSections) {
            section.style.display = "none"
        }
        activeSection.style.display = "block"
        activeSection.scrollIntoView({behavior:"smooth"})
    }
    
}

let contactButton = document.getElementById("contact-button")
let pricingButton = document.getElementById("pricing-button")
let termsButton = document.getElementById("terms-button")
let contactSection = document.getElementById("contact-details")
let pricingSection = document.getElementById("pricing-info")
let termsSection = document.getElementById("terms-conditions")

contactButton.addEventListener("click", () => showSection(contactSection))
pricingButton.addEventListener("click", () => showSection(pricingSection))
termsButton.addEventListener("click", () => showSection(termsSection))


