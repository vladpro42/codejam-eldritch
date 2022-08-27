import ancientsData from './data/ancients';
const ancients = document.querySelectorAll('.ancient__hero');
const difficultyLevelBtn = document.querySelectorAll('.difficulty-level__btn');
const difficultyLevel = document.querySelector('.difficulty-level');
const main = document.querySelector('.main');
const tracker = document.querySelector('.tracker');
const cardDeck = document.querySelector('.card-deck');
const shuffleDeckBtn = document.querySelector('.shuffle-deck__btn');
const cardDeckShirt = document.querySelector('.card-deck__shirt');
const cardDeckFace = document.querySelector('.card-deck__face');

//Выбор Древнего
ancients.forEach((item, index) => {
    item.addEventListener('click', (event) => {
       
                ancients.forEach(item => {
                    item.classList.remove('_activ');
                });
                item.classList.add('_activ');
            
            difficultyLevel.classList.add('display_activ');

            if( index === 0 ) {
                greenCards = 5;
                blueCards = 2;
                brownCards = 9;
            }
            console.log(ancientsData)
           
    });
})

// Выбор уровня сложности
difficultyLevelBtn.forEach( item => {
    item.addEventListener('click', (event) => {
       // if(event.target.classList.contains('difficulty-level__btn')){
            difficultyLevelBtn.forEach(item => {
                item.classList.remove('difficulty-level__btn_activ');
            });
            item.classList.add('difficulty-level__btn_activ');
        //}
            shuffleDeckBtn.classList.add('shuffle-deck__btn_activ');
            
            if(tracker.classList.contains('tracker_activ')){
                tracker.classList.remove('tracker_activ');
                cardDeck.classList.remove('cardDeck_activ');
            }

    });
});

// Замешать колоду мифов кнопка
shuffleDeckBtn.addEventListener('click', () => {
    tracker.classList.add('tracker_activ');
    cardDeck.classList.add('cardDeck_activ');
    shuffleDeckBtn.classList.remove('shuffle-deck__btn_activ');
});

/* function  */