// おみくじの結果リスト（配列）
const results = [
    { text: '大吉', class: 'daikichi', color: '#ff0000' },
    { text: '中吉', class: 'chukichi', color: '#ff9900' },
    { text: '吉', class: 'kichi', color: '#0099ff' },
    { text: '小吉', class: 'suekichi', color: '#666666' },
    { text: '末吉', class: 'suekichi', color: '#999999' },
    { text: '凶', class: 'kyo', color: '#6666ff' }
];

// HTMLの要素を取ってくる
const resultBox = document.getElementById('resultBox');
const resultText = document.getElementById('resultText');
const drawButton = document.getElementById('drawButton');

// おみくじボタンが押されたとき
drawButton.addEventListener('click', function() {
    // アニメーションを開始
    resultBox.classList.add('spinning');
    
    // 0.5秒後に結果を表示
    setTimeout(function() {
        // ランダムな数を作る（0から5までのどれか）
        const randomIndex = Math.floor(Math.random() * results.length);
        
        // その数の結果を取り出す
        const result = results[randomIndex];
        
        // 結果を表示する
        resultText.textContent = result.text;
        resultText.style.color = result.color;
        
        // 背景の色を変える
        resultBox.className = 'result-box ' + result.class;
        
        // コンソールに表示
        console.log('おみくじの結果：' + result.text);
    }, 500);
});

