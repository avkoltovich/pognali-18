ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    "map", {
      center: [59.936397, 30.321166],
      controls: [],
      zoom: 16
    },
    (myPlacemark = new ymaps.Placemark(
      [59.936397, 30.321166], {
        hintContent: "Погнали?"
      }, {
        iconLayout: "default#image",
        iconImageHref: "img/map-marker.svg",
        iconImageSize: [36, 36]
      }
    ))
  );

  var zoomControl = new ymaps.control.ZoomControl();
  myMap.controls.add(zoomControl, {
    size: "small",
    float: "none",
    position: {
      bottom: "50px",
      right: "20px"
    }
  });

  myMap.controls.add('routeButtonControl', {
    size: "auto",
    float: "none",
    position: {
      top: "50px",
      left: "20px"
    }
  });

  var route = myMap.controls.get('routeButtonControl');
  route.routePanel.geolocate('from');
  route.routePanel.state.set({
    fromEnabled: false,
    toEnabled: false,
    to: "Большая Конюшенная улица, 19/8",
    type: "auto"
  });

  route.options.set("popupWidth", "250px");


  if (document.documentElement.clientWidth > 767) {
    zoomControl.options.set("position", {
      bottom: 80,
      right: 20
    });

    route.options.set("position", {
      top: 80,
      left: 20
    });

    route.options.set("popupWidth", "350px");

    myPlacemark.options.set("iconImageSize", [57, 57]);
  }

  myMap.geoObjects.add(myPlacemark);
}
