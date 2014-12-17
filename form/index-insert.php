<?php
    
    ////データベースの名前はtest.sqlite3
    ////テーブルの名前はtest
    ////カルムはname picture title info
    ///それぞれの変数は$nam $pic $tit $inf
    
    
    
    // 接続（DBが存在しない場合はDB作成）
    $db = new SQLite3('test.sqlite3');
    if (!$db) {
        die('接続失敗です'.$sqliteerror);
    }
    print('接続に成功しました。<br>');
    
    
    
    $db->query("INSERT INTO test (name) VALUES ('$nam')");
    $db->query("INSERT INTO test (picture) VALUES ('$pic')");
    $db->query("INSERT INTO test (title) VALUES ('$tit')");
<<<<<<< HEAD
    $db->query("INSERT INTO test (info) VALUES ('inf')");
=======
    $db->query("INSERT INTO test (info) VALUES ('$inf')");
>>>>>>> 75296495e5aab8f7533dca2eb623b40db3981b20
    
    
    
    $db->close();
    
    print('切断しました。<br>');
    
<<<<<<< HEAD
    ?>
=======
    ?>
>>>>>>> 75296495e5aab8f7533dca2eb623b40db3981b20
