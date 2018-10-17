// получаем такого вида картеж
// { a: [], b: [], c: [], d: [] }
function generate_node() {
  obj = {}
  obj['a'] = []
  obj['b'] = []
  obj['c'] = []
  obj['d'] = []
  return obj
}

// модифицируем координаты углов //
function coord_a(width, height) {
  arr = []
  arr.push(width/2 - 2)
  arr.push(height/2 - 2)
  return arr
}

function coord_b(width, height) {
  arr = []
  arr.push(width/2 - 2)
  arr.push(height/2 + 2)
  return arr
}

function coord_c(width, height) {
  arr = []
  arr.push(width/2 + 2)
  arr.push(height/2 - 2)
  return arr
}

function coord_d(width, height) {
  arr = []
  arr.push(width/2 + 2)
  arr.push(height/2 + 2)
  return arr
}
//  модифицируем координаты углов  //


// заполняем картеж значением
//   {
//     "a": [25,25],
//     "b": [25,30],
//     "c": [30,25],
//     "d": [30,30]
//   }
function add_node(width = 200, height = 200) {
  node = generate_node()
  node['a'] = coord_a(width, height)
  node['b'] = coord_b(width, height)
  node['c'] = coord_c(width, height)
  node['d'] = coord_d(width, height)
  return node
}

function get_info(node) {
  console.log(node.length);
  node_keys = Object.keys(node[0])
  console.log(node_keys);
}

function main() {
  // создаем массив квадратиков (пустой)
  array_node = []
  // наполняем массив квадратов новым квадратом (первый по середине)
  array_node.push(add_node())
  // выводим
  // [ { a: [ 98, 98 ], b: [ 98, 102 ], c: [ 102, 98 ], d: [ 102, 102 ] } ]
  console.log(array_node)
}

main()






// // преобразование координат
// function siep(arr) {
//
// }
//
//
//
//
// // тут используем канвас
// function draw(...) {
//
// }
