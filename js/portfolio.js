// ポートフォリオの生成、更新をするスクリプト

jQuery(function ($) {
  


  
  var title_list = ['none', 'Midsummer twilight', 'The last adventure', 'Natural world', 'Subtle memory', 'The end of a fairy tale', 'Secret situation', 'Boundary line', 'Spare pallet', 'Flow', 'A bridge that ascends to heaven', 'Neon', 'Outside of wall', 'Mystery pond', 'Characters and Characters', 'Country road', 'Impure love', 'MEL', 'Resting place', 'Superb view', 'Fruit-like bird', 'Flower', 'Earth', 'Heaven', 'Depth', 'Skyscraper', 'To you, who is tinged with purple', 'Sparkle of life', 'Secret situation', 'Ancient', 'Beach']


  for (var i = 1; i < img_amount + 1; i++) {
    var img = new Image();
    img.src = './images/por/th_por' + i + '.jpg';
    var img_width = img.width; // 幅
    var img_height = img.height; // 高さ

    if (img_height > img_width) { //portrait
      console.log(i);
      $('.Portfolio_grid').append(
        $('<div class="Portfolio_item Portfolio_item_pr"/>').append(
          $(`<div class="Portfolio_item-content"/>`).append(
            $('<a href="./images/por/por' + i + '.jpg" data-lightbox="por" data-title="' + title_list[i] + '"/>').append(
              '<img class="Portfolio_img_pr" src="./images/por/th_por' + i + '.jpg"><p class="Portfolio_img_title">' + title_list[i]
            )
          )
        )
      );
    } else if (img_height < img_width) { //landscape
      $('.Portfolio_grid').append(
        $('<div class="Portfolio_item Portfolio_item_ls"/>').append(
          $(`<div class="Portfolio_item-content"/>`).append(
            $('<a href="./images/por/por' + i + '.jpg" data-lightbox="por" data-title="' + title_list[i] + '"/>').append(
              '<img class="Portfolio_img_ls" src="./images/por/th_por' + i + '.jpg"><p class="Portfolio_img_title">' + title_list[i]
            )
          )
        )
      );
    } else {
      $('.Portfolio_grid').append( //square
        $('<div class="Portfolio_item"/>').append(
          $(`<div class="Portfolio_item-content"/>`).append(
            $('<a href="./images/por/por' + i + '.jpg" data-lightbox="por" data-title="' + title_list[i] + '"/>').append(
              '<img class="Portfolio_img_sq" src="./images/por/th_por' + i + '.jpg"><p class="Portfolio_img_title">' + title_list[i]
            )
          )
        )
      );
    }
  }
});
