// ====================================
// 🎋 ここを自分の好きなように変えてね！
// ====================================

const omikuji = [
    {
        text: "大吉",           // ← 結果のテキスト
        message: "最高の運勢！今日はいいことがあるよ！",  // ← メッセージ
        background: "#ff6b6b", // ← 背景色
        textColor: "#c0392b"   // ← 文字色
    },
    {
        text: "中吉",
        message: "なかなかいい運勢！がんばろう！",
        background: "#f39c12",
        textColor: "#d35400"
    },
    {
        text: "小吉",
        message: "まあまあの運勢。コツコツいこう！",
        background: "#3498db",
        textColor: "#2980b9"
    },
    {
        text: "吉",
        message: "普通の運勢。いつも通りでOK！",
        background: "#2ecc71",
        textColor: "#27ae60"
    },
    {
        text: "末吉",
        message: "これから良くなる運勢！",
        background: "#9b59b6",
        textColor: "#8e44ad"
    },
    {
        text: "凶",
        message: "気をつけて過ごそう...",
        background: "#34495e",
        textColor: "#2c3e50"
    }
];

// ====================================
// ここから下はプログラムの部分
// ====================================

// HTMLの要素を取得
const resultBox = document.getElementById('resultBox');
const resultText = document.getElementById('resultText');
const messageText = document.getElementById('messageText');
const drawButton = document.getElementById('drawButton');

// おみくじを引く関数
function drawOmikuji() {
    // ランダムな番号を作る
    const randomIndex = Math.floor(Math.random() * omikuji.length);
    
    // その番号の結果を取得
    const result = omikuji[randomIndex];
    
    // 結果を表示
    resultText.textContent = result.text;
    messageText.textContent = result.message;
    
    // 色を変える
    resultText.style.color = result.textColor;
    resultBox.style.borderLeft = `8px solid ${result.textColor}`;
    resultBox.style.borderRight = `8px solid ${result.textColor}`;
    
    // コンソールに表示
    console.log('おみくじの結果：' + result.text);
}

// ボタンが押されたとき
drawButton.addEventListener('click', function() {
    // ボタンを一瞬押せなくする（連打防止）
    drawButton.disabled = true;
    
    // 結果をシャッフル風に表示
    resultText.textContent = "・・・";
    messageText.textContent = "";
    
    // 0.5秒後に結果を表示
    setTimeout(function() {
        drawOmikuji();
        drawButton.disabled = false;
    }, 500);
});

// ページが読み込まれたとき
console.log('おみくじアプリが読み込まれました！');
console.log('結果の種類：' + omikuji.length + '種類');

