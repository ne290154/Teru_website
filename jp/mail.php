<html>
  <head>
      <meta charset="utf-8" />
  </head>
  <body>
    <?php
      mb_language("Japanese");
      mb_internal_encoding("UTF-8");

      $to = 'tk.art.414@gmail.com';
      $title = $_POST['title'];
      $content = "送信者名：" . $_POST['name'] . "\n" . $_POST['message'];
      $headers = $_POST['mail_address'];

      if(mb_send_mail($to, $title, $content, $headers)){
        echo "３秒後にトップページに戻ります";
      } else {
        echo "メールの送信に失敗しました";
      }
    ?>
    <script>
      function sleep(waitSec, callbackFunc) {
          var spanedSec = 0;

          var id = setInterval(function () {
              spanedSec++;
              if (spanedSec >= waitSec) {
                  clearInterval(id);
                  if (callbackFunc) callbackFunc();
              }
          }, 1000);
      }
      sleep(3, function () {
        window.location.href = './index.html';
      });
    </script>
  </body>
</html>