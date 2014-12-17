<?php
    
    ////データベースの名前はtest.sqlite3
    ////テーブルの名前はtest
    ////カルムはname picture title info
    
    
    
    // 接続（DBが存在しない場合はDB作成）
    $db = new SQLite3('test.sqlite3');
    if (!$db) {
        die('接続失敗です'.$sqliteerror);
    }
    print('接続に成功しました。<br>');
    
    
    
    $db->query("INSERT INTO test (name) VALUES ('foo')");
    $db->query("INSERT INTO test (picture) VALUES ('baz')");
    $db->query("INSERT INTO test (title) VALUES ('hoge')");
    $db->query("INSERT INTO test (info) VALUES ('foge')");
    
    
    
    $db->close();
    
    print('切断しました。<br>');
    
    ?>