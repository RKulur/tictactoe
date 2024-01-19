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
  if (checkGridEmpty(grids, [a, b, c])) {
    return {
      player: "",
      isSame: false,
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
  let symbol;
  for (let i = 1; i < positions.length; i++) {
    if (
      getSymbol(grids[positions[i - 1]]) === null &&
      getSymbol(grids[positions[i]]) === null
    ) {
      symbol = true;
      continue;
    }
    symbol = false;
  }
  // console.log(symbol);
  return symbol;
}

export default function checkWinner(board: Element): string | null {
  const grids = Array.from(board.children) as HTMLDivElement[];
  if (compareGrids(grids, 0, 1, 2)?.isSame) {
    return `Player ${
      compareGrids(grids, 0, 1, 2)?.player === "cross" ? "X" : "O"
    } won!!`;
  }
  if (compareGrids(grids, 3, 4, 5)?.isSame) {
    return `Player ${
      compareGrids(grids, 3, 4, 5)?.player === "cross" ? "X" : "O"
    } won!!`;
  }
  if (compareGrids(grids, 6, 7, 8)?.isSame) {
    return `Player ${
      compareGrids(grids, 6, 7, 8)?.player === "cross" ? "X" : "O"
    } won!!`;
  }
  if (compareGrids(grids, 0, 3, 6)?.isSame) {
    return `Player ${
      compareGrids(grids, 0, 3, 6)?.player === "cross" ? "X" : "O"
    } won!!`;
  }
  if (compareGrids(grids, 1, 4, 7)?.isSame) {
    return `Player ${
      compareGrids(grids, 1, 4, 7)?.player === "cross" ? "X" : "O"
    } won!!`;
  }
  if (compareGrids(grids, 2, 5, 8)?.isSame) {
    return `Player ${
      compareGrids(grids, 2, 5, 8)?.player === "cross" ? "X" : "O"
    } won!!`;
  }
  if (compareGrids(grids, 2, 4, 6)?.isSame) {
    return `Player ${
      compareGrids(grids, 2, 4, 6)?.player === "cross" ? "X" : "O"
    } won!!`;
  }
  if (compareGrids(grids, 0, 4, 8)?.isSame) {
    return `Player ${
      compareGrids(grids, 0, 4, 8)?.player === "cross" ? "X" : "O"
    } won!!`;
  }
  return null;
}
