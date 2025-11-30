// 整理された構成のJavaScript

// カウンターの値
let count = 0;

// HTML要素を取得
const counterDisplay = document.getElementById('counter');
const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
const resetButton = document.getElementById('resetButton');

// カウンターを更新する関数
function updateCounter() {
    counterDisplay.textContent = count;
    
    // 色を変える
    if (count > 0) {
        counterDisplay.style.color = '#4CAF50';
    } else if (count < 0) {
        counterDisplay.style.color = '#ff6b6b';
    } else {
        counterDisplay.style.color = '#f5576c';
    }
}

// ＋ボタン
plusButton.addEventListener('click', function() {
    count++;
    updateCounter();
    console.log('カウントアップ：' + count);
});

// －ボタン
minusButton.addEventListener('click', function() {
    count--;
    updateCounter();
    console.log('カウントダウン：' + count);
});

// リセットボタン
resetButton.addEventListener('click', function() {
    count = 0;
    updateCounter();
    console.log('リセット：' + count);
});

// ページが読み込まれたときにコンソールに表示
console.log('整理された構成のプロジェクトが読み込まれました！');
console.log('ファイル構成：css/, js/, images/ フォルダで整理されています');

