function getSymbol(grid: Element) {
  if (!grid.children.length) {
    return null;
  }
  const symbol = grid.children[0] as HTMLDivElement;
  return symbol.dataset.symbol;
}

function compareGrids(
  grids: HTMLDivElement[],
  a: number,
  b: number,
  c: number,
) {
  // console.log(
  //   getSymbol(grids[a]) === getSymbol(grids[b]) &&
  //     getSymbol(grids[b]) === getSymbol(grids[c]),
  // );
  if (checkGridEmpty(grids, [a, b, c])) {
    return {
      player: "",
      isSame: true,
    };
  }

  if (
    getSymbol(grids[a]) === getSymbol(grids[b]) &&
    getSymbol(grids[b]) === getSymbol(grids[c])
  ) {
    return {
      player: `${getSymbol(grids[a])}`,
      isSame: true,
    };
  }
}

function checkGridEmpty(grids: Element[], positions: number[]) {
  for (let idx in positions) {
    if (!getSymbol(grids[idx])) {
      console.log(getSymbol(grids[idx]));
      return true;
    }
  }
}

export default function checkWinner(board: Element) {
  const grids = Array.from(board.children) as HTMLDivElement[];
  if (compareGrids(grids, 0, 1, 2)?.isSame) {
    console.log(compareGrids(grids, 0, 1, 2)?.player);
    return;
  }
  if (compareGrids(grids, 3, 4, 5)) {
    console.log("Winner");
    return;
  }
  if (compareGrids(grids, 6, 7, 8)) {
    console.log("Winner");
    return;
  }
  if (compareGrids(grids, 0, 3, 6)) {
    console.log("Winner");
    return;
  }
  if (compareGrids(grids, 1, 4, 7)) {
    console.log("Winner");
    return;
  }
  if (compareGrids(grids, 2, 5, 8)) {
    console.log("Winner");
    return;
  }
}
