export default function parseDate(date) {
    const dObj = {d: date.slice(0,2), m: date.slice(3,5), y: date.slice(6,10)};
    return Date.parse(`${dObj.y}-${dObj.m}-${dObj.d}`);
}