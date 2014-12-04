<?php

new $link('test.db', password, $sqliteerror);
if (!$link) {
    die('接続失敗です'.$sqliteerror);
}

print('接続に成功しました。\n');

$sql = "INSERT INTO test (id, name) VALUES (1, 'テスト1');";
$sql = $sql."INSERT INTO test (id, name) VALUES (2, 'テスト2')";
$result_flag = sqlite_exec($link, $sql, $sqliteerror);

if (!$result_flag) {
    die('クエリーが失敗しました'.$sqliteerror);
}else{
    print(sqlite_changes($link).'件のレコードを追加しました\n');
}


sqlite_close($link);

print('切断しました。<br>');

?>