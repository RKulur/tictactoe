import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="flex h-screen w-full items-center justify-center"> 
    <div id="board" class='h-[500px] w-[500px] grid grid-cols-3 grid-rows-3'>
      <div id="no1" class="flex items-center justify-center">1</div>
      <div id="no2" class="flex items-center justify-center">2</div>
      <div id="no3" class="flex items-center justify-center">3</div>
      <div id="no4" class="flex items-center justify-center">4</div>
      <div id="no5" class="flex items-center justify-center">
        <div class="h-full w-full flex pl-2 border-2 relative">
          <div class="bg-black rounded-full h-full w-7 rotate-45 translate-x-14 origin-center"></div>
          <div class="bg-black rounded-full h-full w-7 -rotate-45 translate-x-8 origin-center "></div>
        </div>
      </div>
      <div id="no6" class="flex items-center justify-center">
        <div class="h-full flex w-full p-4 relative">
          <div class="bg-black h-full w-full p-6 rounded-full">
            <div class="bg-white h-full w-full rounded-full"></div>
          </div>
        </div>
      </div>
      <div id="no7" class="flex items-center justify-center">7</div>
      <div id="no8" class="flex items-center justify-center">8</div>
      <div id="no9" class="flex items-center justify-center">9</div>
    </div>
  </div>
`;

const board = document.querySelector("#board") as HTMLDivElement;
addBorder(board);
function addBorder(element: Element) {
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
