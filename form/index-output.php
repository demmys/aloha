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
    
    
    $result = $db->query('SELECT * FROM test');
    while ($row = $result->fetchArray()) {
        echo $row[0],"\n";
        echo $row[1],"\n";
        echo $row[2],"\n";
        echo $row[3],"\n";
    }
    
    $db->close();
    
<<<<<<< HEAD
    ?>
=======
    ?>
>>>>>>> 75296495e5aab8f7533dca2eb623b40db3981b20
