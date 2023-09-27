//Main JS Code

$(document).ready(function () {
  $('h3').text('TVBD');
});
function _0x415e(_0x2a5773, _0xbdbcf9) {
  var _0x54cf11 = _0x54cf();
  _0x415e = function (_0x415e36, _0x1926be) {
    _0x415e36 = _0x415e36 - 0x128;
    var _0x44eaa4 = _0x54cf11[_0x415e36];
    return _0x44eaa4;
  };
  return _0x415e(_0x2a5773, _0xbdbcf9);
}
var _0x2d72eb = _0x415e;
function _0x54cf() {
  var _0x3b099b = ['player/js.html?sv=', '#clickclapper', '#clickvjs', '#clickkaltura', 'ready', 'click', 'player/oven.html?sv=', '3405XrSkFx', '321213yYBNCx', 'player/clapper.html?sv=', 'val', 'filter', 'href', '7915257ZqdtrX', '.col-sm-4', '3427216GLOOzU', 'toggle', '#clickjs', '#search', '#link', '3337271ldYQHU', 'text', 'toLowerCase', 'location', 'indexOf', '2524176ixXQfA', '186616phrAOC', '8FYnOsT', 'player/kaltura.html?sv=', 'player/vjs.html?sv=', '2756mbGhPN'];
  _0x54cf = function () {
    return _0x3b099b;
  };
  return _0x54cf();
}
(function (_0x2dfb6a, _0x38d47f) {
  var _0x5518ad = _0x2dfb6a();
  while (true) {
    try {
      var _0x1f5772 = -parseInt(_0x415e(0x133)) / 0x1 + parseInt(_0x415e(0x134)) / 0x2 * (-parseInt(_0x415e(0x140)) / 0x3) + parseInt(_0x415e(0x137)) / 0x4 * (parseInt(_0x415e(0x13f)) / 0x5) + parseInt(_0x415e(0x132)) / 0x6 + parseInt(_0x415e(0x12d)) / 0x7 + parseInt(_0x415e(0x128)) / 0x8 + -parseInt(_0x415e(0x145)) / 0x9;
      if (_0x1f5772 === _0x38d47f) {
        break;
      } else {
        _0x5518ad.push(_0x5518ad.shift());
      }
    } catch (_0x49c146) {
      _0x5518ad.push(_0x5518ad.shift());
    }
  }
})(_0x54cf, 0x4968f);
$(document).ready(function () {
  $("#clickjw").click(function () {
    window.location.href = "player/vjs.html?sv=" + $("#link").val();
  });
  $('#clickply').click(function () {
    window.location.href = "player/kaltura.html?sv=" + $("#link").val();
  });
  $("#clickclapper").click(function () {
    window.location.href = "player/clapper.html?sv=" + $("#link").val();
  });
  $("#clickkaltura").click(function () {
    window.location.href = "player/oven.html?sv=" + $('#link').val();
  });
  $("#clicknetflix").click(function () {
    window.location.href = "player/js.html?sv=" + $("#link").val();
  });
  $("#search").on('keyup', function () {
    var _0x4eb18d = $(this).val().toLowerCase();
    $(".col-sm-4").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(_0x4eb18d) > -0x1);
    });
  });
});
$(document).ready(function () {
  $("#menuimg").click(function () {
    $("#drop").slideToggle("fast");
  });
});
