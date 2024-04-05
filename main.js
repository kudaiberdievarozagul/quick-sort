function quicksort(arr) {
  // Если массив содержит один элемент или пуст, он уже отсортирован
  if (arr.length <= 1) {
    return arr;
  }

  // Шаг 1: Выбор опорного элемента (пивота)
  var pivot = arr[Math.floor(arr.length / 2)];

  // Шаг 2: Разделение на подмассивы
  var left = [];
  var right = [];

  // Проходим по всем элементам массива и распределяем их по соответствующим подмассивам
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  // Шаг 3: Рекурсивное применение алгоритма
  // Рекурсивно вызываем quicksort для обоих подмассивов
  // и объединяем результаты с опорным элементом в центре
  return quicksort(left).concat(pivot, quicksort(right));
}

// Тестируем на числах
var numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Before sorting:", numbers);
console.log("After sorting:", quicksort(numbers));

// Тестируем на строках
var strings = ["banana", "apple", "orange", "grape", "kiwi"];
console.log("Before sorting:", strings);
console.log("After sorting:", quicksort(strings));

// Тестируем на пользовательских объектах
var objects = [
  { name: "John", age: 30 } /*  */,
  { name: "Jane", age: 25 },
  { name: "Alice", age: 35 },
];
console.log("Before sorting:", objects);
console.log("After sorting:", quicksort(objects));
