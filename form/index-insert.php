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
    $db->query("INSERT INTO test (info) VALUES ('$inf')");
    
    
    
    $db->close();
    
    print('切断しました。<br>');
    
    ?>
