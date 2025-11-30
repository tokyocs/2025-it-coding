// ボタンを取得する
const button = document.getElementById('greetButton');

// ボタンがクリックされたときの処理
button.addEventListener('click', function() {
    alert('こんにちは！私のサイトへようこそ！');
    console.log('挨拶ボタンがクリックされました！');
});

// ページが読み込まれたときのメッセージ
console.log('自己紹介サイトが読み込まれました！');

