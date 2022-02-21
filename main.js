let dragItem = null
const boardZone = document.querySelector('.board_zone')
const cardZone = document.querySelector('.card_zone')
const createBoardBtn = document.querySelector('.new_board')
const createCardBtn = document.querySelector('.create_card')


createBoardBtn.addEventListener('click' , ()=>{
    boardZone.innerHTML+=createBoard()
    dragNdrop()
})

const createBoard = () =>{
    return`
        <div class="board">
            <h2 class="board_title">New Board</h2>
            <div class="card_zone">
            </div>
        </div>
    `
}


createCardBtn.addEventListener('click' , ()=>{
    newCard()
    dragNdrop()
})

const newCard = ()=>{
    cardZone.innerHTML+=createCard()
}
 
const createCard = () =>{
    return`
        <div class="card" draggable="true">
            <h3 class="card_title">Title1</h3>
            <p class="card_text">Text</p>
        </div>
    `
}

const dragNdrop = () =>{
    const cards = document.querySelectorAll('.card')
    const cardZone = document.querySelectorAll('.card_zone')

    for (let index = 0; index < cards.length; index++) {
        const element = cards[index];

        element.addEventListener('dragstart' , ()=>{
            dragItem = element

            setTimeout(() => {
                    element.style.display = 'none'
            }, 0);

        })
        
        element.addEventListener('dragend' , ()=>{
            setTimeout(() => {
                element.style.display = 'block'
                dragItem = null
            }, 0);
        })

        for (let j = 0; j < cardZone.length; j++) {
            const zone = cardZone[j];

            zone.addEventListener('dragover' , e => e.preventDefault())

            zone.addEventListener('dragenter' , function(e){
                e.preventDefault()
                this.style.background = 'rgba(0,0,0, .3)'
            })
            
            zone.addEventListener('drop' , function(e){
                this.style.background = 'rgba(0,0,0, .0)'
                this.append(dragItem)
            })
        }
    }
}
newCard()
dragNdrop()