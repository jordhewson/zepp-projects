export function formatK(number) {
    const rounded = Math.trunc(number / 100);
    const formatted = (rounded / 10).toString();
    return `${formatted}k`;
}