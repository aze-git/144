$(function () {


  /////////////////////////
  //// ヘッダにマウスオーバーした時のアクション
  /////////////////////////

  $('.nav__item-btn').hover(
    function () {
      $(this).find('.nav__item-en').css('color', '#D4004E');
      $(this).find('.nav__item-jp').css('color', '#D4004E');
    },
    function () {
      $(this).find('.nav__item-en').css('color', '#000000');
      $(this).find('.nav__item-jp').css('color', '#777777');
    }
  );


  /////////////////////////
  //// NEWSページのページネーション
  /////////////////////////

  var $max_page_number = 12;

  //1. ページネーションの数字をクリックされた時の動き
  $('.page').click(function () {

    //1-1. 遷移先で表示されるページ番号の一覧に変える
    var $next_page_number = Number($(this).text());
    changePageNumbers($next_page_number);

    //1-2. 遷移先ページ番号の色を変える
    var $current_page = $('.pagenation').find('.selected-page');
    var $next_page = $(".color-changable:contains(" + $next_page_number + ")");
    changeSelectedPage($current_page, $next_page);

  });


  //2. 次へをクリックされた時の動き
  $('.move-to-next-news').click(function () {

    //2-1. 遷移先で表示されるページ番号の一覧に変える
    var $current_page = $('.pagenation').find('.selected-page');
    var $current_page_number = $($current_page).text();
    $current_page_number = Number($current_page_number);

    var $next_page_number;
    if ($current_page_number === $max_page_number) {
      $next_page_number = $max_page_number;
    } else {
      $next_page_number = $current_page_number + 1;
    }

    changePageNumbers($next_page_number);

    //2. クリックされたページの色を変える
    var $next_page = $(".color-changable:contains(" + $next_page_number + ")");
    changeSelectedPage($current_page, $next_page);

  });


  //3. 前へをクリックされた時の動き
  $('.move-to-before-news').click(function () {

    //2-1. 遷移先で表示されるページ番号の一覧に変える
    var $current_page = $('.pagenation').find('.selected-page');
    var $current_page_number = $($current_page).text();
    $current_page_number = Number($current_page_number);

    var $next_page_number;
    if ($current_page_number === 1) {
      $next_page_number = 1;
    } else {
      $next_page_number = $current_page_number - 1;
    }

    changePageNumbers($next_page_number);

    //2. クリックされたページの色を変える
    var $next_page = $(".color-changable:contains(" + $next_page_number + ")");
    changeSelectedPage($current_page, $next_page);

  });



  ////////////
  // Functionの定義
  ////////////
  function changePageNumbers($next_page_number) {
    if ($next_page_number <= 2) {
      $('.initial-page').css('display', 'none');
      $('.last-page').css('display', 'inline');
      $('.first-page').text(1);
      $('.second-page').text(2);
      $('.third-page').text(3);
      $('.fourth-page').text(4);
      $('.fifth-page').text(5);
    } else if ($next_page_number >= 3 && $next_page_number <= ($max_page_number - 6)) {
      $('.initial-page').css('display', 'inline');
      $('.last-page').css('display', 'inline');
      $('.first-page').text($next_page_number);
      $('.second-page').text($next_page_number + 1);
      $('.third-page').text($next_page_number + 2);
      $('.fourth-page').text($next_page_number + 3);
      $('.fifth-page').text($next_page_number + 4);
    } else if ($next_page_number === ($max_page_number - 5)) {
      $('.initial-page').css('display', 'inline');
      $('.last-page').css('display', 'none');
      $('.first-page').text($next_page_number);
      $('.second-page').text($next_page_number + 1);
      $('.third-page').text($next_page_number + 2);
      $('.fourth-page').text($next_page_number + 3);
      $('.fifth-page').text($next_page_number + 4);
    } else if ($next_page_number >= ($max_page_number - 4)) {
      $('.initial-page').css('display', 'inline');
      $('.last-page').css('display', 'none');
      $('.first-page').text($max_page_number - 4);
      $('.second-page').text($max_page_number - 3);
      $('.third-page').text($max_page_number - 2);
      $('.fourth-page').text($max_page_number - 1);
      $('.fifth-page').text($max_page_number);
    }
  }

  function changeSelectedPage($current_page, $next_page) {
    $($current_page).removeClass('selected-page');
    $($next_page).addClass('selected-page');
  }
  ////////////
  // Functionの定義終わり
  ////////////

});