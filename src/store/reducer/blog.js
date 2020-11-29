const initialState = {
  list: [
    { id: 1, title: 'Новости JS', category: 'js', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 2, title: 'Рисуем треугольник на CSS ', category: 'css', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 3, title: 'Жизненный цикл компонента REACT', category: 'react', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 4, title: 'Event Loop js. Разбираем как работает', category: 'js', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 5, title: 'Работа с элементами DOM', category: 'js', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 6, title: 'React наше все', category: 'react', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 7, title: 'Нfстройка redux в react прилоениях', category: 'react', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 8, title: 'Настраиваем eslint всесте', category: 'react', discription: 'Полное описание ноновсти с картинками и прочим' },
  ]
};

export const blogReducer = (state = initialState) => {
  console.log('');
  return state;
};