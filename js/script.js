// $('.セレクタ名').on('click', function(event) {
//   イベント発生時に行われる処理
// });

$(function() {
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
  event.preventDefault();
  });
});

