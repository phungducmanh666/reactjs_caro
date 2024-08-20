function onRow(matrix, i, j, n, col) {
  const player = matrix[i][j];
  let count = 1;
  let start = { i, j };
  //left
  for (let y = j - 1; y >= 0; y--) {
    const e = matrix[i][y];
    if (e == player) {
      count++;
      start = { i, j: y };
    } else break;
    if (count == n) break;
  }
  //right
  for (let y = j + 1; y < col; y++) {
    const e = matrix[i][y];
    if (e == player) count++;
    else break;
    if (count == n) break;
  }

  if (count == n) {
    return {
      player,
      start,
      type: "r",
    };
  }
  return null;
}

function onCol(matrix, i, j, n, row) {
  const player = matrix[i][j];
  let count = 1;
  let start = { i, j };
  //left
  for (let x = i - 1; x >= 0; x--) {
    const e = matrix[x][j];
    if (e == player) {
      count++;
      start = { i: x, j };
    } else break;
    if (count == n) break;
  }
  //right
  for (let x = i + 1; x < row; x++) {
    const e = matrix[x][j];
    if (e == player) count++;
    else break;
    if (count == n) break;
  }

  if (count == n) {
    return {
      player,
      start,
      type: "c",
    };
  }
  return null;
}

function onDc1(matrix, i, j, n, row, col) {
  let k = Math.min(i, j);
  let m = Math.min(row - i, col - j);

  let count = 1;
  const player = matrix[i][j];

  let start = { i, j };
  for (let idx = 1; idx <= k; idx++) {
    const newI = i - idx;
    const newJ = j - idx;
    const e = matrix[newI][newJ];
    if (e == player) {
      count++;
      start = { i: newI, j: newJ };
    } else break;
    if (count == n) break;
  }

  for (let idx = 1; idx < m; idx++) {
    const newI = i + idx;
    const newJ = j + idx;
    const e = matrix[newI][newJ];
    if (e == player) {
      count++;
    } else break;
    if (count == n) break;
  }

  if (count == n) {
    return {
      player,
      start,
      type: "dc1",
    };
  }
  return null;
}

function onDc2(matrix, i, j, n, row, col) {
  let k = Math.max(i, j);
  let m = Math.max(row - i, col - j);

  console.log(`K :: ${k} ___ M :: ${m}`);

  let count = 1;
  const player = matrix[i][j];

  let start = { i, j };
  for (let idx = 1; idx <= k; idx++) {
    const newI = i - idx;
    const newJ = j + idx;
    try {
      const e = matrix[newI][newJ];
      if (e == player) {
        count++;
        start = { i: newI, j: newJ };
      } else break;
      if (count == n) break;
    } catch (error) {
      break;
    }
  }

  for (let idx = 1; idx < m; idx++) {
    const newI = i + idx;
    const newJ = j - idx;
    try {
      const e = matrix[newI][newJ];
      if (e == player) {
        count++;
      } else break;
      if (count == n) break;
    } catch (error) {
      break;
    }
  }

  if (count == n) {
    return {
      player,
      start,
      type: "dc2",
    };
  }
  return null;
}

export function checkWinner(matrix, i, j, n) {
  const col = matrix[i].length;
  const row = matrix.length;
  const r = onRow(matrix, i, j, n, col);
  if (r) return r;
  const c = onCol(matrix, i, j, n, col);
  if (c) return c;
  const dc1 = onDc1(matrix, i, j, n, row, col);
  if (dc1) return dc1;
  const dc2 = onDc2(matrix, i, j, n, row, col);
  if (dc2) return dc2;

  return null;
}
