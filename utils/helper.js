export function convertNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const helper = {
    convertNumber
}

export default helper;