function random() {
    let randompin = Math.round(Math.random() * 10000)
    if (randompin.toString().length === 4) {
        return parseInt(randompin);
    } else {
        return random();
    }
}
document.getElementById('Generate-pin').addEventListener('click', () => {

    let pin = random();
    document.getElementById('pinField').value = pin;
})
document.getElementById('CalcButton').addEventListener('click', (e) => {
    let inp = e.target.innerText;
    let valueDisp = document.getElementById('calcDisplay');
    if (isNaN(inp)) {
        if (inp === 'C') {
            document.getElementById('calcDisplay').value = ' ';
        } else if (inp === '<') {
            currentval = valueDisp.value;
            trim = currentval.split('');
            trim.pop();
            remainingval = trim.join('');
            valueDisp.value = remainingval;
        }
    } else {
        prevvalue = valueDisp.value;
        newval = prevvalue + inp;
        valueDisp.value = newval;
    }
})
document.getElementById('check').addEventListener('click', () => {
    let valueDisp = document.getElementById('calcDisplay').value;
    let securepin = document.getElementById('pinField').value;
    let message = document.getElementById('chance');
    if (valueDisp == securepin) {
        message.style.color = "#00ff00";
        message.innerText = "Success";
        document.getElementById('wrong').style.display = 'none';
        document.getElementById('right').style.display = 'block';
    } else if (valueDisp != securepin) {
        message.style.color = "red";
        message.innerText = "Wrong";
        document.getElementById('right').style.display = 'none';
        document.getElementById('wrong').style.display = 'block';
    }

})
