function buzzer() {
    console.log('Beeep! By reference to function in a parameter.');
}

function asyncTest() {
    console.log('Loaded async...');
}

function simpleInterval() {
    console.log('2 seconds interval - problem: it starts after 2 sec, not immediately, and than again after 2 sec.')
}

function immediateTest() {
    console.log('Interval launched immediately and continues...')
}

setTimeout(function () {
    console.log('Done! By anonymous function.');
}, 500);

setTimeout(buzzer, 1000);

// asynchronous nature of js:
    console.log('Starting');
    setTimeout(asyncTest, 1500);
    console.log('Finishing');
// end

// intervals
setInterval(simpleInterval, 2000);

// interval which starts immediately
    function setImmediateInterval(funcToRun, ms) {
        // right away call that function
        funcToRun();
        // run a regular interval
        return setInterval(funcToRun, ms);
    }

    setImmediateInterval(immediateTest, 100);

// disabling the interval
    function destroy() {
            document.querySelector('.infobelt').innerHTML = `<p>Destroyed</p>`
            window.removeEventListener('click', bombDisarm);
        }

    const bombTimer = setTimeout(destroy, 3000);

    function bombDisarm() {
        // How to stop it? Make a reference to a setTimeout by closing it in a variable, so you can reach it;
        clearTimeout(bombTimer); // This stops the timer;
        document.querySelector('.infobelt').lastElementChild.innerHTML = `<p>You saved the website!</p>`
        console.log('You clicked and saved the website!')
    }

    window.addEventListener('click', bombDisarm);

// Clearing the interval
    const poopInterval = setInterval(() => {
        console.log('pile of poo');
        console.log('Hi hi hi!');
    }, 100);

    setTimeout(() => {
        clearInterval(poopInterval);
    }, 1500);