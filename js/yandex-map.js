(() => {
  ymaps.ready(init);
  function init() {
    const mapElem = document.querySelector('#yandex-map');
    const myMap = new ymaps.Map(
      "yandex-map",
      {
        center: [55.760382, 37.614437],
        zoom: 15,
        controls: []
      }, {
      suppressMapOpenBlock: true,
    }
    );

    const myPlacemark = new ymaps.Placemark(
      [55.760382, 37.614437],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: 'img/yandex-marker.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0],
      }
    );

    myMap.controls.add('zoomControl', {
      float: 'none',
      size: 'small',
      position: {
        right: 17,
        top: 263
      }

    }).add('geolocationControl', {
      float: 'none',
      maxWidth: [100],
      position: {
        right: 17,
        top: 355
      }
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.container.fitToViewport();
    myMap.behaviors.disable('scrollZoom')
  }
})();
