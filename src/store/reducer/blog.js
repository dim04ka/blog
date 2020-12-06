const initialState = {
  list: [
    { id: 1,
      title: 'Новости JS',
      category: 'js',
      date: 'June 28, 2019',
      comment: [
        { name: 'John Doe', date: 'June 27, 2019', textComment: 'lorem lorem lorem' },
        { name: 'John Doe2', date: 'June 28, 2019', textComment: 'lorem lorem lorem2' },
        { name: 'John Doe3', date: 'June 29, 2019', textComment: 'lorem lorem lorem3' },
      ],
      img: 'https://preview.colorlib.com/theme/andrea/images/image_1.jpg',
      shortDiscription: 'Короткое описание статьи, средставленное тезисно в нескольких предложениях',
      discription: `A paragraph with *emphasis* and **strong importance**.
 
      > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
     
    * Lists
    * [ ] todo
    * [x] done
     
    A table:
     
    | a | b |
    | - | - |
    ` },
    { id: 2, title: 'Рисуем треугольник на CSS ', category: 'css', img: 'https://preview.colorlib.com/theme/andrea/images/image_2.jpg', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 3, title: 'Жизненный цикл компонента REACT', category: 'react', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 4, title: 'Event Loop js. Разбираем как работает', category: 'js', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 5, title: 'Работа с элементами DOM', category: 'js', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 6, title: 'React наше все', category: 'react', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 7, title: 'Нfстройка redux в react прилоениях', category: 'react', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 8, title: 'Настраиваем eslint всесте', category: 'react', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 11, title: 'Новости JS', category: 'js', discription: `A paragraph with *emphasis* and **strong importance**.
    > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
    * Lists
    * [ ] todo
    * [x] done
    
    A table:
    
    | a | b |
    | - | - |
    ` },
    { id: 12, title: 'Рисуем треугольник на CSS ', category: 'css', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 13, title: 'Жизненный цикл компонента REACT', category: 'react', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 14, title: 'Event Loop js. Разбираем как работает', category: 'js', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 15, title: 'Работа с элементами DOM', category: 'js', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 16, title: 'React наше все', category: 'react', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 17, title: 'Нfстройка redux в react прилоениях', category: 'react', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 18, title: 'Настраиваем eslint всесте', category: 'react', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 21, title: 'Новости JS', category: 'js', discription: `A paragraph with *emphasis* and **strong importance**.
  
      > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
    
    * Lists
    * [ ] todo
    * [x] done
    
    A table:
    
    | a | b |
    | - | - |
    ` },
    { id: 22, title: 'Рисуем треугольник на CSS ', category: 'css', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 23, title: 'Жизненный цикл компонента REACT', category: 'react', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 24, title: 'Event Loop js. Разбираем как работает', category: 'js', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 25, title: 'Работа с элементами DOM', category: 'js', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 26, title: 'React наше все', category: 'react', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 27, title: 'Нfстройка redux в react прилоениях', category: 'react', discription: 'Полное описание ноновсти с картинками и прочим' },
    { id: 28, title: 'Настраиваем eslint всесте', category: 'react', discription: 'Полное описание ноновсти с картинками и прочим' },
  ]
};

export const blogReducer = (state = initialState) => {
  console.log('');
  return state;
};