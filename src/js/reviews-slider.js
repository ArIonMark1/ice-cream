var swiper = new Swiper(".mySwiper", {
    // Пагинация
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Перелистывание слайдов по клику мышки
    slideToClickedSlide: true,

    // Клавиатура
    keyboard: {
      // Доступность управления клавиатурой
      enabled: true,
      // Доступность управления клавиатурой только, когда слайдер видно
      onlyInVieport: true,
    },

    // Расстояние между слайдами
    spaceBetween: 30,
    // Бесконечный слайдер
    loop: true,

    // Автопрокрутка
    autoplay: {
      // Пауза между прокруткой
      delay: 10000,
      // Закончить на последнем слайде
      stopOnLastSlide: false,
      // Отключить после ручного переключения
      disableOnInteraction: false,
    },

    // Скорость
    speed: 800,

    // Доступность
    a11y: {
      // Включить/выключить
      enabled: true,
      // Сообщения
      prevSlideMessage: 'Previous review',
      nextSlideMessage: 'Next review',
      firstSlideMessage: 'This is the first review',
      lastSlideMessage: 'This is the last review',
      paginationBulletMessage: 'Go to review {{index}}',
      notificationClass: 'swiper-notification',
    }
  });