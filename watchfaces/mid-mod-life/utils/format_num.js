export function formatK(number) {
    const rounded = Math.trunc(number / 100);
    const formatted = (rounded / 10).toString();
    return `${formatted}k`;
}

export function formatDateString(number) {
    let numberString = '';
    if (number > 9) {
        numberString = number.toString();
    } else {
        numberString = `0${number.toString()}`
    }
    return numberString;
}