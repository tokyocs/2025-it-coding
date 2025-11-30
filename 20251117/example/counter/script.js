// 今の数を入れておく「箱」（変数）
let count = 0;

// HTMLの要素を取ってくる
const numberDisplay = document.getElementById('number');
const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
const resetButton = document.getElementById('resetButton');

// 数字を画面に表示する関数
function updateDisplay() {
    numberDisplay.textContent = count;
}

// ＋ボタンが押されたとき
plusButton.addEventListener('click', function() {
    count = count + 1;  // 数を1増やす
    updateDisplay();     // 画面を更新
    console.log('増やしました！今の数：' + count);
});

// －ボタンが押されたとき
minusButton.addEventListener('click', function() {
    count = count - 1;  // 数を1減らす
    updateDisplay();     // 画面を更新
    console.log('減らしました！今の数：' + count);
});

// リセットボタンが押されたとき
resetButton.addEventListener('click', function() {
    count = 0;          // 数を0に戻す
    updateDisplay();     // 画面を更新
    console.log('リセットしました！');
});

