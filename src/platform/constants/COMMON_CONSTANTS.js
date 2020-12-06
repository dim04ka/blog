export default {
  // MODAL
  MODAL_INIT: 'MODAL_INIT',
  MODAL_CLOSE: 'MODAL_CLOSE',
  MODAL_OPEN: 'MODAL_OPEN',
  MODAL_DELETE: 'MODAL_DELETE',
  MODAL_CLOSE_ALL: 'MODAL_CLOSE_ALL',
  MODAL_CHANGE_FIELDS: 'MODAL_CHANGE_FIELDS',

  MODAL_POPUP: 'MODAL_POPUP',

  POPUP_INIT: 'POPUP_INIT',
  POPUP_DELETE: 'POPUP_DELETE',
  POPUP_DELETE_ALL: 'POPUP_DELETE_ALL',
  POPUP_SUCCESS: 'POPUP_SUCCESS',
  POPUP_ERROR: 'POPUP_ERROR',
  POPUP_WARNING: 'POPUP_WARNING',
  POPUP_CONFIRM: 'POPUP_CONFIRM',

  // USER
  SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN',

  // LOADER
  APP_LOADING: 'APP_LOADING',
  APP_LOADED: 'APP_LOADED',
  SHOW_LOADER: 'SHOW_LOADER',
  HIDE_LOADER: 'HIDE_LOADER',
  PROGRESS_LOADER: 'PROGRESS_LOADER',
  LOADING_USER_DATA: 'LOADING_USER_DATA',
  LOADED_USER_DATA: 'LOADED_USER_DATA',

  // MENU
  MENU_FLAG: 'MENU_FLAG',

  // GRIDS
  GRID_INIT: 'GRID_INIT',
  GRID_LOADER: 'GRID_LOADER',
  GRID_ERROR: 'GRID_ERROR',
  GRID_CLOSE: 'GRID_CLOSE',
  GRID_CLOSE_ALL: 'GRID_CLOSE_ALL',
  GRID_CHANGE_FIELDS: 'GRID_CHANGE_FIELDS',
  GRID_FILTER_INIT: 'GRID_FILTER_INIT',
  GRID_FILTER_CHANGE: 'GRID_FILTER_CHANGE',
  GRID_FILTER_REMOVE: 'GRID_FILTER_REMOVE',
  // DEVICE
  PLATFORM: 'PLATFORM',
  WIDTH: 'WIDTH',
  HEIGHT: 'HEIGHT',
  BREAKPOINT: 'BREAKPOINT',
  // UPLOAD FILES
  ADD_UPLOAD_FILES: 'ADD_UPLOAD_FILES',
  DELETE_UPLOAD_FILES: 'DELETE_UPLOAD_FILES',
  DELETE_INPUT_UPLOAD_FILES: 'DELETE_INPUT_UPLOAD_FILES',
  DELETE_ALL_UPLOAD_FILES: 'DELETE_ALL_UPLOAD_FILES',

  // FILES
  IMAGE_FILES: '.jpeg, .jpg, .gif, .png, .JPG, .JPEG, .PNG, .GIF',
  DOC_IMG_FILES: '.pdf, .jpeg, .jpg, .gif, .png, .JPG, .JPEG, .PNG, .GIF, .PDF',

  // URL IMAGE
  URL_IMAGE: 'http://192.168.55.190:30687',
  DEFAULT_IMAGE: 'https://preview.colorlib.com/theme/andrea/images/image_1.jpg',
  GRID_POSTS: 'GRID_POSTS',
  INITIAL_POSTS: [
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
