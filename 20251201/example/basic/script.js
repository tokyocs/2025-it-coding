// 基本的な構成のJavaScript

// ボタンとメッセージ表示エリアを取得
const button = document.getElementById('testButton');
const message = document.getElementById('message');

// クリック回数をカウント
let clickCount = 0;

// ボタンがクリックされたとき
button.addEventListener('click', function() {
    clickCount++;
    
    // メッセージを表示
    message.textContent = `${clickCount}回クリックされました！`;
    
    // コンソールにも表示
    console.log('ボタンがクリックされました！回数：' + clickCount);
    
    // 10回クリックされたら特別なメッセージ
    if (clickCount === 10) {
        alert('🎉 10回達成！すごい！');
    }
});

// ページが読み込まれたときにコンソールに表示
console.log('基本的な構成のプロジェクトが読み込まれました！');
console.log('ファイル構成：すべてのファイルが同じフォルダにあります');

