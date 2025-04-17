const contactModal = () => {

    // Get elements from DOM

    const button = document.querySelector('#contact-button')
    const closeButton = document.querySelector('#contact-close')
    const modal = document.querySelector('#contact-modal')

    // Show modal
    const openModal = () => {
        modal.showModal()
    }

    // Close modal
    const closeModal = () => {
        modal.close()
    }

    // Add events
    button.addEventListener('click', openModal)
    closeButton.addEventListener('click', closeModal)



}

contactModal()