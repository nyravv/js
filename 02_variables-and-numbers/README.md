Задание 1
Цель задания
Научиться совместно применять переменные, математические операторы и функции объекта Math.

Задание
Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка, x2, y2 — вторая точка. Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. Выведите результат с помощью console.log.

Проверка результата
Для проверки подставляйте разные значения в переменные x1, y1, x2, y2 и смотрите на получившуюся площадь. Примеры для проверки:
Для x1 = 2, y1 = 3, x2 = 10, y2 = 5 площадь равна 16;
Для x1 = 10, y1 = 5, x2 = 2, y2 = 3 площадь равна 16;
Для x1 = -5, y1 = 8, x2 = 10, y2 = 5 площадь равна 45;
Для x1 = 5, y1 = 8, x2 = 5, y2 = 5 площадь равна 0;
Для x1 = 8, y1 = 1, x2 = 5, y2 = 1 площадь равна 0.


Задание 2
Цель задания
Научиться округлять и надёжно сравнивать дробные части чисел с помощью console.log

Задание
Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log. Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.

Проверка результата
Для проверки подставляйте разные значения переменных a, b и n и проверяйте получившийся результат. Сравнения должны давать соответствующий результат true или false в зависимости от получившихся дробных частей.

Примеры для проверки:
Для a = 13.123456789, b = 2.123, n = 5 дробные части: 12345, 12300.
Для a = 13.890123, b = 2.891564, n = 2 дробные части: 89, 89.
Для a = 13.890123, b = 2.891564, n = 3 дробные части: 890, 891.


Задание 3
Цель задания
Попрактиковаться в написании универсального кода, поддерживающего различные ситуации. Научиться применять Math.random и другие функции объекта Math.

Задание
Написать генератор нечётных случайных чисел в диапазоне между n и m включительно. Учесть, что n и m могут быть отрицательными, а также может быть n > m или n < m. Вывести результат с помощью console.log.

Проверка результата
Для проверки подставляйте различные значения m и n и смотрите на корректность результата. Так как число случайное, для одного набора входных параметров рекомендуется запустить код 5–10 раз. Примеры чисел m и n, для которых алгоритм должен корректно работать:
n = 0, m = 100;
n = 2, m = 5;
n = 100, m = −5;
n = -3, m = −10.