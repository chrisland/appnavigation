
var _tasks = {
  home: function () {
    console.log('home');
  },
  show: function () {
    console.log('show');
  }
};

var _app = {
  init: function () {

    this.eventListener();
    this.renderPage('home', $('#nav .pageBtn.start'));

  },
  eventListener: function () {

    $('.pageBtn').on('click', function (e) {
      var page = $(this).data('page');
      if (page) {
        _app.renderPage(page, this);
      }
    });

  },
  eventTask: function(page) {

    if (typeof _tasks[page] === 'function') {
      _tasks[page]();
    }

  },
  renderPage: function (page, btn) {

    $('#page').load('tmpl/'+page+'.html', function () {
      _app.setNavActive(btn);
      _app.eventTask(page);
      _app.eventListener();
    });


  },
  setNavActive: function (btn) {

    $('#nav').find('.pageBtn.active').removeClass('active');
    $(btn).addClass('active');

  }

};


$( document ).ready(function() {

  _app.init();

});
