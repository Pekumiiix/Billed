const menu = document.querySelector('.menu')
const menuButton = document.querySelector('.menu-button') 

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active')
})

function slideCards() {
    const previousButton = document.getElementById('previous')
    const nextButton = document.getElementById('next')
    const cardList = document.querySelector('.slider')
    const maxScrollLeft = cardList.scrollWidth - cardList.clientWidth

    const handleSlideButtons = () => {
        previousButton.disabled = cardList.scrollLeft <= 0 ? true : false;
        nextButton.disabled = cardList.scrollLeft >= maxScrollLeft ? true : false;
    }

    cardList.addEventListener('scroll', () => {
        handleSlideButtons()
    })

    nextButton.addEventListener('click', () => {
        const direction = 1
        const scrollAmount = cardList.clientWidth * direction;

        cardList.scrollBy({ left: scrollAmount, behavior: "smooth" })
    })

    nextButton.addEventListener('click', (event) => {
        if(event.key === 'Enter') {
            const direction = 1
            const scrollAmount = cardList.clientWidth * direction;

            cardList.scrollBy({ left: scrollAmount, behavior: "smooth" })
        }
    })

    previousButton.addEventListener('click', () => {
        const direction = -1
        const scrollAmount = cardList.clientWidth * direction;

        cardList.scrollBy({ left: scrollAmount, behavior: "smooth" })

        previousButton.disabled = false;
    })

    previousButton.addEventListener('click', (event) => {
        if(event.key === 'Enter') {
            const direction = -1
            const scrollAmount = cardList.clientWidth * direction;

            cardList.scrollBy({ left: scrollAmount, behavior: "smooth" })
        }
    })
}

slideCards()

//console.log(screen.width)