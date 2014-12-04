<?php

$link = sqlite_open('test.db', 0666, $sqliteerror);
if (!$link) {
    die('接続失敗です。'.$sqliteerror);
}

print('接続に成功しました。<br>');

$sql = "SELECT id, name FROM datas";
$result = sqlite_query($link, $sql, SQLITE_BOTH, $sqliteerror);
if (!$result) {
    die('クエリーが失敗しました。'.$sqliteerror);
}

for ($i = 0 ; $i < sqlite_num_rows($result) ; $i++){
    $rows = sqlite_fetch_array($result, SQLITE_ASSOC);
    print('id='.$rows['id']);
    print(',name='.$rows['name'].'<br>');
}

sqlite_close($link);

print('切断しました。<br>');

?>
