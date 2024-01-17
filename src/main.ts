import addBorder from "./addBorder";
import addSymbol from "./addSymbol";
import clearBoard from "./clearBoard";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="flex h-screen w-full items-center justify-center flex-col gap-6"> 
    <h1 class="font-bold text-4xl p-5">TIC-TAC-TOE</h1>
    <div id="board" class='h-[450px] w-[450px] grid grid-cols-3 grid-rows-3'>
      <div id="no1" class="flex items-center justify-center"></div>
      <div id="no2" class="flex items-center justify-center"></div>
      <div id="no3" class="flex items-center justify-center"></div>
      <div id="no4" class="flex items-center justify-center"></div>
      <div id="no5" class="flex items-center justify-center"></div>
      <div id="no6" class="flex items-center justify-center"></div>
      <div id="no7" class="flex items-center justify-center"></div>
      <div id="no8" class="flex items-center justify-center"></div>
      <div id="no9" class="flex items-center justify-center"></div>
    </div>
    <button id="clearBtn" class="bg-green-500 py-2 px-4 text-white active:scale-95 transition-all rounded-md">Clear</button>
  </div>
`;
const board = document.querySelector("#board") as HTMLDivElement;
addBorder(board);

let count = 0;

board.addEventListener("click", (e: Event) => {
  if (!e.target) {
    return;
  }

  const target = e.target as HTMLDivElement;
  const isSymbolPresent = Object.keys(target.dataset).length;
  if (isSymbolPresent) {
    return;
  }

  count++;
  const gridElem = board.querySelector(`#${target.id}`)!;
  addSymbol(gridElem, count);
});

const clearBtn = document.querySelector("#clearBtn");
clearBtn?.addEventListener("click", () => {
  clearBoard(board);
});
