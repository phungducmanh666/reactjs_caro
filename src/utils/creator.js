export function create2DMaxtrix(m, n) {
  let arr = new Array(n); // Tạo mảng có n phần tử

  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n); // Mỗi phần tử trong mảng là một mảng con có n phần tử
  }

  return arr;
}
