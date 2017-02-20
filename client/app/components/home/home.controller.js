class HomeController {

  constructor() {
    this.name = 'home';
    this.urlData = {
      date: "",
      timeStart: 0,
      timeEnd: 0
    };
    this.urlMessage = 'avatar/';
    this.resentUsers = [{
        name: 'Olga Golovatska',
        photo: this.urlMessage + 'CV.jpg'
      },
      {
        name: 'kristina',
        photo: this.urlMessage + 'DA.jpg'
      },
      {
        name: 'Oleg',
        photo: this.urlMessage + 'MO.jpg'
      },
      {
        name: 'Dima',
        photo: this.urlMessage + 'HD.jpg'
      },
      {
        name: 'Shenya',
        photo: this.urlMessage + 'LV.jpg'
      },
      {
        name: 'Kirl',
        photo: this.urlMessage + 'Kv.jpg'
      }

    ];
    this.simpleUsers = [{
        name: 'Kolya',
        photo: this.urlMessage + 'EM.jpg'
      },
      {
        name: 'Vova',
        photo: this.urlMessage + 'OV.jpg'
      },
      {
        name: 'Stas',
        photo: this.urlMessage + 'PO.jpg'
      },
      {
        name: 'Dekan',
        photo: this.urlMessage + 'SVETA.jpg'
      },
      {
        name: 'Vitya',
        photo: this.urlMessage + 'VO.jpg'
      }

    ];
  }

  cancel() {
    location.pathname = "/diary";
  }
  callOnLoad() {
    if (location.search.split('&')[0]) {
      this.urlData.date = location.search.split('&')[0].split('=')[1];
    }
    if (location.search.split('&')[1]) {
      this.urlData.timeStart = location.search.split('&')[1].split('=')[1];
    }
    if (location.search.split('&')[2]) {
      this.urlData.timeEnd = location.search.split('&')[2].split('=')[1];
    }

    console.log(this.urlData);
  }

}

export default HomeController;
