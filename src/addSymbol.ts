function addCross(element: Element) {
  element.innerHTML = `
        <div data-symbol="cross" class="h-full w-full flex pl-2 relative">
          <div data-symbol="cross" class="bg-black rounded-full h-full w-7 rotate-45 translate-x-14 origin-center"></div>
          <div data-symbol="cross" class="bg-black rounded-full h-full w-7 -rotate-45 translate-x-8 origin-center"></div>
        </div>
      </div>`;
}

function addNought(element: Element) {
  element.innerHTML = `<div data-symbol="nought" class="h-full flex w-full p-4 relative">
          <div data-symbol="nought" class="bg-black h-full w-full p-6 rounded-full">
            <div data-symbol="nought" class="bg-white h-full w-full rounded-full"></div>
          </div> 
        </div>`;
}

export default function addSymbol(element: Element, player: number) {
  if (player % 2 == 0) {
    addCross(element);
    return;
  }
  addNought(element);
}
