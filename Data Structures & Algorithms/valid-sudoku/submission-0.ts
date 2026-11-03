class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
isValidSudoku(board: string[][]): boolean {
  //requirements: time and space complexity = cell visited once, store up to all cells
  // first idea:
  /**
   * row, column, matrix Set.
   */

  const row: Set<number>[] = Array.from({ length: 9 }, () => new Set<number>());
  const column: Set<number>[] = Array.from(
    { length: 9 },
    () => new Set<number>(),
  );
  const grid: Set<number>[] = Array.from(
    { length: 9 },
    () => new Set<number>(),
  );

  const check = (
    rowIdx: number,
    colIdx: number,
    gridIdx: number,
    value: number,
  ) =>
    row[rowIdx].has(value) ||
    column[colIdx].has(value) ||
    grid[gridIdx].has(value);
  const getGrid = (rowIdx: number, colIdx: number) =>
    Math.trunc(rowIdx / 3) * 3 + Math.trunc(colIdx / 3);
  for (const [rowIdx, boardRow] of board.entries()) {
    for (const [cellIdx, cell] of boardRow.entries()) {
      if (cell === ".") {
        continue;
      }
      const num = Number(cell);
      const gridIdx = getGrid(rowIdx, cellIdx);
      if (check(rowIdx, cellIdx, gridIdx, num)) {
        return false;
      }
      row[rowIdx].add(num);
      column[cellIdx].add(num);
      grid[gridIdx].add(num);
    }
  }
  return true;
}
}
