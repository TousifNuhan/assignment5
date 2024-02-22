function press1() {
    decreaseSeat();
    const last = document.getElementById('nextBtn').addEventListener("click", function () {
        document.getElementById('mainPage').classList.add('hidden');
        document.getElementById('next').classList.remove('hidden');
        document.getElementById('next').classList.add('flex');

    })




}

function press2() {
    decreaseSeats();
    const last = document.getElementById('nextBtn').addEventListener("click", function () {
        document.getElementById('mainPage').classList.add('hidden');
        document.getElementById('next').classList.remove('hidden');
        document.getElementById('next').classList.add('flex');

    })
}

function press3() {

    decreaseSeats3();
    const last = document.getElementById('nextBtn').addEventListener("click", function () {
        document.getElementById('mainPage').classList.add('hidden');
        document.getElementById('next').classList.remove('hidden');
        document.getElementById('next').classList.add('flex');

    })
}
function press4() {

    decreaseSeats4();
    const last = document.getElementById('nextBtn').addEventListener("click", function () {
        document.getElementById('mainPage').classList.add('hidden');
        document.getElementById('next').classList.remove('hidden');
        document.getElementById('next').classList.add('flex');

    })
}

function press5() {
    decreaseSeats5();
    const last = document.getElementById('nextBtn').addEventListener("click", function () {
        document.getElementById('mainPage').classList.add('hidden');
        document.getElementById('next').classList.remove('hidden');
        document.getElementById('next').classList.add('flex');

    })
}
function press6() {

    decreaseSeats6();
    const last = document.getElementById('nextBtn').addEventListener("click", function () {
        document.getElementById('mainPage').classList.add('hidden');
        document.getElementById('next').classList.remove('hidden');
        document.getElementById('next').classList.add('flex');

    })
}


function press7() {
    decreaseSeats7();
    const last = document.getElementById('nextBtn').addEventListener("click", function () {
        document.getElementById('mainPage').classList.add('hidden');
        document.getElementById('next').classList.remove('hidden');
        document.getElementById('next').classList.add('flex');

    })
}

function press8() {

    decreaseSeats8();
    const last = document.getElementById('nextBtn').addEventListener("click", function () {
        document.getElementById('mainPage').classList.add('hidden');
        document.getElementById('next').classList.remove('hidden');
        document.getElementById('next').classList.add('flex');

    })
}

function applyBtn() {
    const input = document.querySelector('#inputBtn');
    const inputValue = input.value;
    if (inputValue === 'NEW15') {
        const takeGrandNum = document.getElementById('grandNum');
        const grandValue = takeGrandNum.innerHTML;
        if (parseInt(grandValue) === 2200) {
            const chngGrandNum = grandValue * 15 / 100;
            const finalGrandNum = grandValue - chngGrandNum;
            takeGrandNum.innerText = finalGrandNum;

            document.getElementById('fullInputField').classList.add('hidden');
        }
    }
    else if (inputValue === 'Couple 20') {
        const takeGrandNum = document.getElementById('grandNum');
        const grandValue = takeGrandNum.innerHTML;
        if (parseInt(grandValue) === 2200) {
            const chngGrandNum = grandValue * 20 / 100;
            const finalGrandNum = grandValue - chngGrandNum;
            takeGrandNum.innerText = finalGrandNum;

            document.getElementById('fullInputField').classList.add('hidden');
        }
    }
}

// last


// function anotherPage() {
//     document.getElementById('mainPage').classList.add('hidden');
//     document.getElementById('next').classList.remove('hidden');
//     document.getElementById('next').classList.add('flex');
// }