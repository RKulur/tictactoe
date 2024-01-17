export default function clearBoard(element: Element) {
  const gridArr = Array.from(element.children);
  for (let grid of gridArr) {
    grid.innerHTML = "";
  }
}
