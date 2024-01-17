export default function addBorder(element: Element) {
  const grids = element.children;
  for (let grid of Array.from(grids)) {
    const gridId = grid.id.slice(2);
    grid.classList.add("border-r-4", "border-b-4", "border-black");
    if (gridId === "3" || gridId === "6" || gridId === "9") {
      grid.classList.remove("border-r-4");
    }
    if (gridId === "7" || gridId === "8" || gridId === "9") {
      grid.classList.remove("border-b-4");
    }
  }
}
