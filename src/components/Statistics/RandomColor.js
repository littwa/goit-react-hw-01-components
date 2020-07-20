export default function () {
  return "#" + Math.random().toString(16).substring(2, 8).toLowerCase();
}

// -----------------------v2------------------------------
// function generateColor() {
//   return '#' + Math.floor(Math.random()*16777215).toString(16)
// }
