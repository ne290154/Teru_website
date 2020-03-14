<html>

<head>
  <meta charset="utf-8" />
</head>

<body>
  <?php
      mb_language("Japanese");
      mb_internal_encoding("UTF-8");

      $to = 'teruakikondo.jp@gmail.com';
      $title = $_POST['title'];
      $content = "送信者名：" . $_POST['name'] . "\n" . $_POST['message'];
      $headers = $_POST['mail_address'];

      if(mb_send_mail($to, $title, $content, $headers)){
        echo "It will return to the top page after 3 seconds.";
      } else {
        echo "The email can’t be sent because of a transmission error.";
        echo "<br>";
        echo "It will return to the top page after 3 seconds.";
      }
    ?>
  <script>
    // 3秒後にトップページへ遷移
    function sleep(waitSec, callbackFunc) {
      var spanedSec = 0;

      var id = setInterval(function() {
        spanedSec++;
        if (spanedSec >= waitSec) {
          clearInterval(id);
          if (callbackFunc) callbackFunc();
        }
      }, 1000);
    }
    sleep(3, function() {
      window.location.href = './index.html';
    });

  </script>
</body>

</html>
