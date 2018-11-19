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
function coord_a(pos_x, pos_y) {
  arr = []
  arr.push(pos_x - 2)
  arr.push(pos_y - 2)
  return arr
}

function coord_b(pos_x, pos_y) {
  arr = []
  arr.push(pos_x - 2)
  arr.push(pos_y + 2)
  return arr
}

function coord_c(pos_x, pos_y) {
  arr = []
  arr.push(pos_x + 2)
  arr.push(pos_y - 2)
  return arr
}

function coord_d(pos_x, pos_y) {
  arr = []
  arr.push(pos_x + 2)
  arr.push(pos_y + 2)
  return arr
}
//  модифицируем координаты углов  //

// заполняем картеж значением, где присваиваем координаты
//   {
//     "a": [25,25],
//     "b": [25,30],
//     "c": [30,25],
//     "d": [30,30]
//   }
//
function add_node(pos_x = 20, pos_y = 20) {
  node = generate_node()
  node['a'] = coord_a(pos_x, pos_y)
  node['b'] = coord_b(pos_x, pos_y)
  node['c'] = coord_c(pos_x, pos_y)
  node['d'] = coord_d(pos_x, pos_y)
  return node
}

// ищет незанятую область, вокруг квадрата
function get_new_center(array_node, node) {
  console.log("start ",node);
  key = Object.keys(node)
  for (let i = 0; i < key.length; i++) {
    switch (key[i]) {
      case 'a':
        temp_arr = []
        console.log('a ', node[key[i]]);
        for (let j = 0; j < node[key[i]].length; j++) {
          switch (j) {
            case 0:
              temp_arr.push(node[key[i]][j] - 2)
              break;
            case 1:
              temp_arr.push(node[key[i]][j] - 2)
              break;
            default:
              break;
          }

        }
        console.log('new center', temp_arr);
        array_node.push(add_node(temp_arr[0], temp_arr[1]))
        break;
      case 'b':
        temp_arr = []
        console.log('b ', node[key[i]]);
        for (let j = 0; j < node[key[i]].length; j++) {
          switch (j) {
            case 0:
              temp_arr.push(node[key[i]][j] - 2)
              break;
            case 1:
              temp_arr.push(node[key[i]][j] + 2)
              break;
            default:
              break;
          }
        }
        console.log('new center', temp_arr);
        array_node.push(add_node(temp_arr[0], temp_arr[1]))
        break;
      case 'c':
        temp_arr = []
        console.log('c ', node[key[i]]);
        for (let j = 0; j < node[key[i]].length; j++) {
          switch (j) {
            case 0:
              temp_arr.push(node[key[i]][j] + 2)
              break;
            case 1:
              temp_arr.push(node[key[i]][j] - 2)
              break;
            default:
              break;
          }
        }
        console.log('new center', temp_arr);
        array_node.push(add_node(temp_arr[0], temp_arr[1]))
        break;
      case 'd':
        temp_arr = []
        console.log('d ', node[key[i]]);
        for (let j = 0; j < node[key[i]].length; j++) {
          switch (j) {
            case 0:
              temp_arr.push(node[key[i]][j] + 2)
              break;
            case 1:
              temp_arr.push(node[key[i]][j] + 2)
              break;
            default:
              break;
          }
        }
        console.log('new center', temp_arr);
        array_node.push(add_node(temp_arr[0], temp_arr[1]))
        break;
      default:
        break;
    }
  }
}

// iter = 0 - кривая первого порядка
// iter = 1 - кривая второго порядка
// iter > 0 - in progress
// pos_x, pos_y
function wave(iter = 1, pos_x = 15, pos_y = 15) {
  // создаем массив квадратиков (пустой)
  array_node = []
  array_node.push(add_node(pos_x, pos_y))
  for (let i = 0; i < iter; i++) {
    get_new_center(array_node, array_node[i])
  }
  return array_node
}

function main() {
  console.log(wave())
}

main()
