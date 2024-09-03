function eToX(x, n) {
    const precision = n + 10;
    Decimal.set({ precision });
    let sumEToX = new Decimal(0);
    let term = new Decimal(1);
    let factorial = new Decimal(1);

    for (let k = 0; k < precision; k++) {
        if (k > 0) {
            factorial = factorial.mul(k);
        }
        term = new Decimal(x).pow(k).div(factorial);
        sumEToX = sumEToX.add(term);
    }

    return sumEToX.toFixed(n);
}

function arctan(x, n) {
    const precision = n + 10;
    Decimal.set({ precision });
    let sumArctan = new Decimal(0);
    let term = new Decimal(x);
    let x2 = new Decimal(x).pow(2);
    let k = 1;

    while (term.abs().greaterThan(Number.EPSILON)) {
        sumArctan = sumArctan.add(term);
        term = term.mul(-x2).div((2 * k) + 1);
        k++;
    }

    return sumArctan.toFixed(n);
}

function calculatePi() {
    const n = parseInt(document.getElementById('piNInput').value);
    const arctan1_5 = arctan(new Decimal(1).div(5), n);
    const arctan1_239 = arctan(new Decimal(1).div(239), n);
    let pi = new Decimal(16).mul(arctan1_5).sub(new Decimal(4).mul(arctan1_239));

    document.getElementById('piResult').innerHTML = `<b>Result:</b> ${pi.toFixed(n)}`;
}

function calculateEToX() {
    const x = parseFloat(document.getElementById('eXInput').value);
    const n = parseInt(document.getElementById('eNInput').value);
    const result = eToX(x, n);

    document.getElementById('eResult').innerHTML = `<b>Result:</b> ${result}`;
}
