//遷移時にlangを遷移先に渡して、表示言語を切り替えるスクリプト

$(window).on("load", function(e){
  
  //遷移時の言語によって表示言語を切り替え
  var query = location.search;
  var value = query.split('=');

  if(typeof value[1] === "undefined"){
    console.log("英語にします。")
    var lang = "en"; //デフォルト言語は英語
    $(".jp").hide();
    $(".en").show();
  }else{
    console.log(decodeURIComponent(value[1]));
    var lang = value[1];
    if(lang == "en"){
      $(".jp").hide();
      $(".en").show();
    }else{
      $(".en").hide();
      $(".jp").show();
    }
  }
  

  //遷移と値渡し
  $(".menu_home").on("click", function(){
    location.href = './index.html?lang=' +  encodeURIComponent(lang);
  });
  $(".menu_about").on("click", function(){
    location.href = './about.html?lang=' +  encodeURIComponent(lang);
  });
  $(".menu_portfolio").on("click", function(){
    location.href = './portfolio.html?lang=' +  encodeURIComponent(lang);
  });
  $(".menu_contact").on("click", function(){
    location.href = './contact.html?lang=' +  encodeURIComponent(lang);
  });
  

  //ページ内に英語の文章を表示
  $(document).on('click', '.lang_en', function() {
    $(".jp").hide();
    $(".en").show();
    lang = "en";
  });

  //ページ内に日本語の文章を表示
  $(document).on('click', '.lang_jp', function() {
    $(".en").hide();
    $(".jp").show();
    lang = "jp";
  });
});