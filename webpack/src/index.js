alert('Работает 1 древний и Очень легкий уровень сложности');
import ancientsData from '../../data/ancients';
import difficulties from '../../data/difficulties';
import blueCardsData from '../../data/mythicCards/blue/index';
/* import cardsData from '../../data/mythicCards/brown/index';
import cardsData from '../../data/mythicCards/blue/index';
import cardsData from '../../data/mythicCards/green/index'; */
import brownCardsData from '../../data/mythicCards/brown/index';
import greenCardsData from '../../data/mythicCards/green/index';

const ancients = document.querySelectorAll('.ancient__hero');
const difficultyLevelBtn = document.querySelectorAll('.difficulty-level__btn');
const difficultyLevel = document.querySelector('.difficulty-level');
const main = document.querySelector('.main');
const tracker = document.querySelector('.tracker');
const cardDeck = document.querySelector('.card-deck');
const shuffleDeckBtn = document.querySelector('.shuffle-deck__btn');
const cardDeckShirt = document.querySelector('.card-deck__shirt');
const cardDeckFace = document.querySelector('.card-deck__face');
let imgFaceCard = document.querySelector('.card-deck__face-img');

let indexDifficulties;
let finalBlueArrow = [];
let finalBrownArrow = [];
let finalGreenArrow = [];
let maxGreenCards;
let maxBlueCards;
let maxBrownCards;
let blueArrow = [];
let brownArrow = [];
let greenArrow = [];


//Выбор Древнего
ancients.forEach((item, index) => {
    item.addEventListener('click', (event) => {
       
                ancients.forEach(item => {
                    item.classList.remove('_activ');
                });
                item.classList.add('_activ');
            
            difficultyLevel.classList.add('display_activ');

            if( index === 0 ) {
                maxGreenCards = 5;
                maxBlueCards = 2;
                maxBrownCards = 9;
            }
            //console.log(ancientsData)
           
    });
})

// Выбор уровня сложности
difficultyLevelBtn.forEach( (item, index) => {
    item.addEventListener('click', (event) => {
        indexDifficulties = item.dataset.index;

        difficultyLevelBtn.forEach(item => {
            item.classList.remove('difficulty-level__btn_activ');
        });
        item.classList.add('difficulty-level__btn_activ');

        shuffleDeckBtn.classList.add('shuffle-deck__btn_activ');
        
        if(tracker.classList.contains('tracker_activ')){
            tracker.classList.remove('tracker_activ');
            cardDeck.classList.remove('cardDeck_activ');
        }
        
        if( index === 0 ) {

            blueArrow = searchBlueCard(maxBlueCards);
           // console.log(blueArrow);

            brownArrow = searchBrownCard(maxBrownCards);
           // console.log(brownArrow)

            greenArrow = searchGreenCard(maxGreenCards);
           // console.log(greenArrow);
                
        }
    });
});

let res;
let resFirstStage;
let resSecondStage;
let resThirdStage;

// Замешать колоду мифов кнопка
shuffleDeckBtn.addEventListener('click', () => {
    tracker.classList.add('tracker_activ');
    cardDeck.classList.add('cardDeck_activ');
    shuffleDeckBtn.classList.remove('shuffle-deck__btn_activ');



resFirstStage = createDeckFirstStage(blueArrow, brownArrow, greenArrow);
console.log(resFirstStage);

resSecondStage = createDeckSecondStage(blueArrow, brownArrow, greenArrow);
console.log(resSecondStage);

resThirdStage = createDeckThirdStage(blueArrow, brownArrow, greenArrow);
console.log(resThirdStage);

    
});
let myNull = 0
cardDeckShirt.addEventListener('click', () => { 
   // res = createDeckAllStage(blueArrow, brownArrow, greenArrow);
        if( resFirstStage.length != 0 ) {
            imgFaceCard.src =  resFirstStage[0].cardFace;
            resFirstStage.shift();
        } else if( resSecondStage.length != 0 ) {
            imgFaceCard.src =  resSecondStage[0].cardFace;
            resSecondStage.shift();
        } else if( resThirdStage.length != 0 ) {
            imgFaceCard.src =  resThirdStage[0].cardFace;
            resThirdStage.shift();
        } else if( resThirdStage.length === 0){
            imgFaceCard.style.display = 'none';
        }
        
        /* if(myNull < 3){
            myNull++
        } */
        /*  if( resFirstStage.length != 0 ) {
            
        }
        i++;
        console.log(i) */

    
    /* if( resFirstStage.l)
    imgFaceCard.src =  res[0][0].cardFace;
    console.log(res) */
});



function createDeckAllStage(blueArrow, brownArrow, greenArrow) {
    let firstStageObject = (ancientsData[0].firstStage);
    let secondStageObject = (ancientsData[0].secondStage);
    let thirdStageObject = (ancientsData[0].thirdStage);
    let firstStageArrow = [];
    let secondStageArrow = [];
    let thirdStageArrow = [];
    
    greenArrow.sort(()=>Math.random()-0.5);
    brownArrow.sort(()=>Math.random()-0.5);
    blueArrow.sort(()=>Math.random()-0.5);

    for( let i = 0 ; i != firstStageObject.greenCards ; i++ ) {
        firstStageArrow.push(greenArrow.pop())
    }
    for( let i = 0 ; i != firstStageObject.blueCards ; i++ ) {
        firstStageArrow.push(blueArrow.pop())
    }
    for( let i = 0 ; i != firstStageObject.brownCards ; i++ ) {
        firstStageArrow.push(brownArrow.pop())
    }

    
    for( let i = 0 ; i != secondStageObject.greenCards ; i++ ) {
        secondStageArrow.push(greenArrow.pop())
    }
    for( let i = 0 ; i != secondStageObject.blueCards ; i++ ) {
        secondStageArrow.push(blueArrow.pop())
    }
    for( let i = 0 ; i != secondStageObject.brownCards ; i++ ) {
        secondStageArrow.push(brownArrow.pop())
    }


    for( let i = 0 ; i != thirdStageObject.greenCards ; i++ ) {
        thirdStageArrow.push(greenArrow.pop())
    }
    for( let i = 0 ; i != thirdStageObject.blueCards ; i++ ) {
        thirdStageArrow.push(blueArrow.pop())
    }
    for( let i = 0 ; i != thirdStageObject.brownCards ; i++ ) {
        thirdStageArrow.push(brownArrow.pop())
    }

    firstStageArrow.sort(()=>Math.random()-0.5);
    secondStageArrow.sort(()=>Math.random()-0.5);
    thirdStageArrow.sort(()=>Math.random()-0.5);

    return [firstStageArrow, secondStageArrow, thirdStageArrow]
}

function createDeckFirstStage(blueArrow, brownArrow, greenArrow) {
    let firstStageArrow = [];
    let firstStageObject = (ancientsData[0].firstStage);

    greenArrow.sort(()=>Math.random()-0.5);
    brownArrow.sort(()=>Math.random()-0.5);
    blueArrow.sort(()=>Math.random()-0.5);

    for( let i = 0 ; i != firstStageObject.greenCards ; i++ ) {
        firstStageArrow.push(greenArrow.pop())
    }
    for( let i = 0 ; i != firstStageObject.blueCards ; i++ ) {
        firstStageArrow.push(blueArrow.pop())
    }
    for( let i = 0 ; i != firstStageObject.brownCards ; i++ ) {
        firstStageArrow.push(brownArrow.pop())
    }

    firstStageArrow.sort(()=>Math.random()-0.5);

    return firstStageArrow
}

function createDeckSecondStage(blueArrow, brownArrow, greenArrow) {
    let secondStageArrow = [];
    let secondStageObject = (ancientsData[0].secondStage);

    greenArrow.sort(()=>Math.random()-0.5);
    brownArrow.sort(()=>Math.random()-0.5);
    blueArrow.sort(()=>Math.random()-0.5);

    for( let i = 0 ; i != secondStageObject.greenCards ; i++ ) {
        secondStageArrow.push(greenArrow.pop())
    }
    for( let i = 0 ; i != secondStageObject.blueCards ; i++ ) {
        secondStageArrow.push(blueArrow.pop())
    }
    for( let i = 0 ; i != secondStageObject.brownCards ; i++ ) {
        secondStageArrow.push(brownArrow.pop())
    }

    secondStageArrow.sort(()=>Math.random()-0.5);

    return secondStageArrow
}

function createDeckThirdStage(blueArrow, brownArrow, greenArrow) {
    let thirdStageArrow = [];
    let thirdStageObject = (ancientsData[0].thirdStage);

    greenArrow.sort(()=>Math.random()-0.5);
    brownArrow.sort(()=>Math.random()-0.5);
    blueArrow.sort(()=>Math.random()-0.5);

    for( let i = 0 ; i != thirdStageObject.greenCards ; i++ ) {
        thirdStageArrow.push(greenArrow.pop())
    }
    for( let i = 0 ; i != thirdStageObject.blueCards ; i++ ) {
        thirdStageArrow.push(blueArrow.pop())
    }
    for( let i = 0 ; i != thirdStageObject.brownCards ; i++ ) {
        thirdStageArrow.push(brownArrow.pop())
    }

    thirdStageArrow.sort(()=>Math.random()-0.5);

    return thirdStageArrow
}



function createBlueDeck(arrowBlue) {
    let deckArrow = [];

    blueArrow.sort(()=>Math.random()-0.5);
    while( true ) {
        //let randomCard = blueArrow.pop();
        finalBlueArrow.push(blueArrow.pop());
        if(finalBlueArrow.length === maxBlueCards) {
            break;
        }
    }
}

function searchBrownCard(maxBrownCards) {
    let colorArrow;
    let newBrownArrow;

    colorArrow = brownCardsData.filter( item => {
        if(item.difficulty === 'easy'){
            return item
        }
    });

    if( colorArrow.length < maxBrownCards ) {
    newBrownArrow = brownCardsData.filter( item => {
        if(item.difficulty === 'normal'){
            return item
        }
    });

    while ( true ) {
        let box = null;
        box = newBrownArrow.pop()
        colorArrow.push(box);
        if( colorArrow.length === maxBrownCards) {
            break;
        }
    }
    }
    return colorArrow
}

function searchBlueCard(maxBlueCards) {
    let colorArrow;
    let newBlueArrow;

    colorArrow = blueCardsData.filter( item => {
        if(item.difficulty === 'easy'){
            return item
        }
    });

    if( colorArrow.length < maxBlueCards ) {
        newBlueArrow = blueCardsData.filter( item => {
            if(item.difficulty === 'normal'){
                return item
            }
        });

        while ( true ) {
            let box = null;
            box = newBlueArrow.pop()
            colorArrow.push(box);
            if( colorArrow.length === maxBlueCards) {
                break;
            }
        }
        }
        return colorArrow
}

function searchGreenCard(maxGreenCards) {
    let colorArrow;
    let newGreenArrow;

    colorArrow = greenCardsData.filter( item => {
        if(item.difficulty === 'easy'){
            return item
        }
    });

    if( colorArrow.length < maxGreenCards ) {
    newGreenArrow = greenCardsData.filter( item => {
        if(item.difficulty === 'normal'){
            return item
        }
    });

    while ( true ) {
        let box = null;
        box = newGreenArrow.pop()
        colorArrow.push(box);
        if( colorArrow.length === maxGreenCards) {
            break;
        }
    }
    }
    return colorArrow
}

function getIndexDifficulty(){
    if(indexDifficulties === 0 ){

    }
}