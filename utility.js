function bgColor() {
    document.getElementById('A1').style.backgroundColor = '#1dd100';
}


function decreaseSeat() {
    const decSeat = document.getElementById('seatNum');

    const value = decSeat.innerText;
    const currrentValue = parseInt(value);

    if ((currrentValue <= 8) && (currrentValue >= 5)) {
        newValue = currrentValue - 1;
        decSeat.innerText = newValue;
        bgColor();
        document.getElementById('A1').disabled = true;

    }

    const chngNum1 = document.getElementById('chngNum');
    const num = chngNum1.innerText;
    const finalNum = parseInt(num);


    if ((finalNum <= 3) && (finalNum >= 0)) {
        newValue = finalNum + 1;
        chngNum1.innerText = newValue;

        const newDiv = document.createElement('div');
        newDiv.id = 'newDiv';

        newDiv.innerHTML = '<h2>A1</h2><h2>Economoy</h2> <h2>550</h2>';
        newDiv.classList.add("flex", "justify-between", "items-center", "mt-4", "w-10/12", "ml-12")
        const hr1 = document.getElementById('hr1');
        const hr2 = document.getElementById('hr2');

        hr1.parentNode.insertBefore(newDiv, hr2);

        const number = document.getElementById('totNum');
        const numValue = number.innerHTML;


        let sum = 550 + parseInt(numValue);

        number.innerText = sum;

        const grandNum = document.getElementById('grandNum');
        const grandValue = grandNum.innerHTML;


        sum = 550 + parseInt(grandValue);

        grandNum.innerText = sum;


        // document.getElementById('mainPage').classList.add('hidden');
        // document.getElementById('next').classList.remove('hidden');
        // document.getElementById('next').classList.add('flex');
    }



}

// 2
function bgColors() {
    document.getElementById('A2').style.backgroundColor = '#1dd100'

}

function decreaseSeats() {
    const deccSeat = document.getElementById('seatNum');


    const values = deccSeat.innerText;
    const currrentValues = parseInt(values);

    if ((currrentValues <= 8) && (currrentValues >= 5)) {
        newsValue = currrentValues - 1;
        deccSeat.innerText = newsValue;
        bgColors();
        document.getElementById('A2').disabled = true;
    }
    const chngNum1 = document.getElementById('chngNum');
    const num = chngNum1.innerText;
    const finalNum = parseInt(num);
   

    if ((finalNum <= 3) && (finalNum >= 0)) {
        newValue = finalNum + 1;
        chngNum1.innerText = newValue;

        const newDiv = document.createElement('div');
        newDiv.id = 'newDiv';

        newDiv.innerHTML = '<h2>A2</h2><h2>Economoy</h2> <h2>550</h2>';
        newDiv.classList.add("flex", "justify-between", "items-center", "mt-4", "w-10/12", "ml-12")
        const hr1 = document.getElementById('hr1');
        const hr2 = document.getElementById('hr2');

        hr1.parentNode.insertBefore(newDiv, hr2);

        const number = document.getElementById('totNum');
        const numValue = number.innerHTML;


        let sum = 550 + parseInt(numValue);

        number.innerText = sum;

        const grandNum = document.getElementById('grandNum');
        const grandValue = grandNum.innerHTML;


        sum = 550 + parseInt(grandValue);

        grandNum.innerText = sum;

    }

}
// 3

function bgColors3() {
    document.getElementById('B1').style.backgroundColor = '#1dd100'

}

function decreaseSeats3() {
    const deccSeat3 = document.getElementById('seatNum');

    const values3 = deccSeat3.innerText;
    const currrentValues3 = parseInt(values3);

    if ((currrentValues3 <= 8) && currrentValues3 >= 5) {
        newsValue = currrentValues3 - 1;
        deccSeat3.innerText = newsValue;
        bgColors3();
        document.getElementById('B1').disabled = true;
    }

    const chngNum1 = document.getElementById('chngNum');
    const num = chngNum1.innerText;
    const finalNum = parseInt(num);
   

    if ((finalNum <= 3) && (finalNum >= 0)) {
        newValue = finalNum + 1;
        chngNum1.innerText = newValue;

        const newDiv = document.createElement('div');
        newDiv.id = 'newDiv';

        newDiv.innerHTML = '<h2>B1</h2><h2>Economoy</h2> <h2>550</h2>';
        newDiv.classList.add("flex", "justify-between", "items-center", "mt-4", "w-10/12", "ml-12")
        const hr1 = document.getElementById('hr1');
        const hr2 = document.getElementById('hr2');

        hr1.parentNode.insertBefore(newDiv, hr2);

        const number = document.getElementById('totNum');
        const numValue = number.innerHTML;


        let sum = 550 + parseInt(numValue);

        number.innerText = sum;

        const grandNum = document.getElementById('grandNum');
        const grandValue = grandNum.innerHTML;


        sum = 550 + parseInt(grandValue);

        grandNum.innerText = sum;
    }

}

// 4

function bgColors4() {
    const a = document.getElementById('B2').style.backgroundColor = '#1dd100'

}

function decreaseSeats4() {
    const deccSeat4 = document.getElementById('seatNum');

    const values4 = deccSeat4.innerText;
    const currrentValues4 = parseInt(values4);

    if ((currrentValues4 <= 8) && (currrentValues4 >= 5)) {
        newsValue = currrentValues4 - 1;
        deccSeat4.innerText = newsValue;
        bgColors4();
        document.getElementById('B2').disabled = true;
    }

    const chngNum1 = document.getElementById('chngNum');
    const num = chngNum1.innerText;
    const finalNum = parseInt(num);
   

    if ((finalNum <= 3) && (finalNum >= 0)) {
        newValue = finalNum + 1;
        chngNum1.innerText = newValue;

        const newDiv = document.createElement('div');
        newDiv.id = 'newDiv';

        newDiv.innerHTML = '<h2>B2</h2><h2>Economoy</h2> <h2>550</h2>';
        newDiv.classList.add("flex", "justify-between", "items-center", "mt-4", "w-10/12", "ml-12")
        const hr1 = document.getElementById('hr1');
        const hr2 = document.getElementById('hr2');

        hr1.parentNode.insertBefore(newDiv, hr2);

        const number = document.getElementById('totNum');
        const numValue = number.innerHTML;


        let sum = 550 + parseInt(numValue);

        number.innerText = sum;

        const grandNum = document.getElementById('grandNum');
        const grandValue = grandNum.innerHTML;


        sum = 550 + parseInt(grandValue);

        grandNum.innerText = sum;


    }

}

// 5

function bgColors5() {
    const a = document.getElementById('A3').style.backgroundColor = '#1dd100'

}

function decreaseSeats5() {
    const deccSeat5 = document.getElementById('seatNum');
    const values5 = deccSeat5.innerText;
    const currrentValues5 = parseInt(values5);

    if ((currrentValues5) <= 8 && (currrentValues5 >= 5)) {
        newsValue = currrentValues5 - 1;
        deccSeat5.innerText = newsValue;
        bgColors5();
        document.getElementById('A3').disabled = true;
    }

    const chngNum1 = document.getElementById('chngNum');
    const num = chngNum1.innerText;
    const finalNum = parseInt(num);
   

    if ((finalNum <= 3) && (finalNum >= 0)) {
        newValue = finalNum + 1;
        chngNum1.innerText = newValue;

        const newDiv = document.createElement('div');
        newDiv.id = 'newDiv';

        newDiv.innerHTML = '<h2>A3</h2><h2>Economoy</h2> <h2>550</h2>';
        newDiv.classList.add("flex", "justify-between", "items-center", "mt-4", "w-10/12", "ml-12")
        const hr1 = document.getElementById('hr1');
        const hr2 = document.getElementById('hr2');

        hr1.parentNode.insertBefore(newDiv, hr2);

        const number = document.getElementById('totNum');
        const numValue = number.innerHTML;


        let sum = 550 + parseInt(numValue);

        number.innerText = sum;

        const grandNum = document.getElementById('grandNum');
        const grandValue = grandNum.innerHTML;


        sum = 550 + parseInt(grandValue);

        grandNum.innerText = sum;
    }

}
// 6

function bgColors6() {
    const a = document.getElementById('A4').style.backgroundColor = '#1dd100'

}

function decreaseSeats6() {
    const deccSeat5 = document.getElementById('seatNum');
    const values5 = deccSeat5.innerText;
    const currrentValues5 = parseInt(values5);

    if ((currrentValues5) <= 8 && (currrentValues5 >= 5)) {
        newsValue = currrentValues5 - 1;
        deccSeat5.innerText = newsValue;
        bgColors6();
        document.getElementById('A4').disabled = true;
    }

    const chngNum1 = document.getElementById('chngNum');
    const num = chngNum1.innerText;
    const finalNum = parseInt(num);
    

    if ((finalNum <= 3) && (finalNum >= 0)) {
        newValue = finalNum + 1;
        chngNum1.innerText = newValue;

        const newDiv = document.createElement('div');
        newDiv.id = 'newDiv';

        newDiv.innerHTML = '<h2>A4</h2><h2>Economoy</h2> <h2>550</h2>';
        newDiv.classList.add("flex", "justify-between", "items-center", "mt-4", "w-10/12", "ml-12")
        const hr1 = document.getElementById('hr1');
        const hr2 = document.getElementById('hr2');

        hr1.parentNode.insertBefore(newDiv, hr2);

        const number = document.getElementById('totNum');
        const numValue = number.innerHTML;


        let sum = 550 + parseInt(numValue);

        number.innerText = sum;

        const grandNum = document.getElementById('grandNum');
        const grandValue = grandNum.innerHTML;


        sum = 550 + parseInt(grandValue);

        grandNum.innerText = sum;
    }

}

// 7

function bgColors7() {
    const a = document.getElementById('B3').style.backgroundColor = '#1dd100'

}

function decreaseSeats7() {
    const deccSeat5 = document.getElementById('seatNum');
    const values5 = deccSeat5.innerText;
    const currrentValues5 = parseInt(values5);

    if ((currrentValues5) <= 8 && (currrentValues5 >= 5)) {
        newsValue = currrentValues5 - 1;
        deccSeat5.innerText = newsValue;
        bgColors7();
        document.getElementById('B3').disabled = true;
    }

    const chngNum1 = document.getElementById('chngNum');
    const num = chngNum1.innerText;
    const finalNum = parseInt(num);
   

    if ((finalNum <= 3) && (finalNum >= 0)) {
        newValue = finalNum + 1;
        chngNum1.innerText = newValue;

        const newDiv = document.createElement('div');
        newDiv.id = 'newDiv';

        newDiv.innerHTML = '<h2>B3</h2><h2>Economoy</h2> <h2>550</h2>';
        newDiv.classList.add("flex", "justify-between", "items-center", "mt-4", "w-10/12", "ml-12")
        const hr1 = document.getElementById('hr1');
        const hr2 = document.getElementById('hr2');

        hr1.parentNode.insertBefore(newDiv, hr2);

        const number = document.getElementById('totNum');
        const numValue = number.innerHTML;


        let sum = 550 + parseInt(numValue);

        number.innerText = sum;

        const grandNum = document.getElementById('grandNum');
        const grandValue = grandNum.innerHTML;


        sum = 550 + parseInt(grandValue);

        grandNum.innerText = sum;
    }

}
// 8

function bgColors8() {
    const a = document.getElementById('B4').style.backgroundColor = '#1dd100'
}

function decreaseSeats8() {
    const deccSeat5 = document.getElementById('seatNum');
    const values5 = deccSeat5.innerText;
    const currrentValues5 = parseInt(values5);

    if ((currrentValues5) <= 8 && (currrentValues5 >= 5)) {
        newsValue = currrentValues5 - 1;
        deccSeat5.innerText = newsValue;
        bgColors8();
        document.getElementById('B4').disabled = true;
    }

    const chngNum1 = document.getElementById('chngNum');
    const num = chngNum1.innerText;
    const finalNum = parseInt(num);
   

    if ((finalNum <= 3) && (finalNum >= 0)) {
        newValue = finalNum + 1;
        chngNum1.innerText = newValue;

        const newDiv = document.createElement('div');
        newDiv.id = 'newDiv';

        newDiv.innerHTML = '<h2>B4</h2><h2>Economoy</h2> <h2>550</h2>';
        newDiv.classList.add("flex", "justify-between", "items-center", "mt-4", "w-10/12", "ml-12")
        const hr1 = document.getElementById('hr1');
        const hr2 = document.getElementById('hr2');

        hr1.parentNode.insertBefore(newDiv, hr2);

        const number = document.getElementById('totNum');
        const numValue = number.innerHTML;


        let sum = 550 + parseInt(numValue);

        number.innerText = sum;

        const grandNum = document.getElementById('grandNum');
        const grandValue = grandNum.innerHTML;


        sum = 550 + parseInt(grandValue);

        grandNum.innerText = sum;
    }

}