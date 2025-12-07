// ====================================
// 🎨 ここを自分の好きな色に変えてね！
// ====================================

const themes = [
    {
        name: "海",
        background: "#0077be",
        text: "#ffffff"
    },
    {
        name: "森",
        background: "#228b22",
        text: "#ffffff"
    },
    {
        name: "夕焼け",
        background: "#ff6b6b",
        text: "#ffffff"
    },
    {
        name: "夜空",
        background: "#1a1a2e",
        text: "#ffffff"
    },
    {
        name: "さくら",
        background: "#ffb7c5",
        text: "#333333"
    }
];

// ====================================
// ここから下はプログラムの部分
// ====================================

// 今のテーマ番号（0からスタート）
let currentTheme = 0;

// HTMLの要素を取得
const themeName = document.getElementById('themeName');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const randomButton = document.getElementById('randomButton');

// テーマを適用する関数
function applyTheme() {
    const theme = themes[currentTheme];
    
    // 背景色と文字色を変える
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;
    
    // テーマ名を表示
    themeName.textContent = theme.name;
    
    console.log('テーマを変更：' + theme.name);
}

// 次のテーマボタン
nextButton.addEventListener('click', function() {
    currentTheme = currentTheme + 1;
    
    // 最後まで行ったら最初に戻る
    if (currentTheme >= themes.length) {
        currentTheme = 0;
    }
    
    applyTheme();
});

// 前のテーマボタン
prevButton.addEventListener('click', function() {
    currentTheme = currentTheme - 1;
    
    // 最初より前に行ったら最後に戻る
    if (currentTheme < 0) {
        currentTheme = themes.length - 1;
    }
    
    applyTheme();
});

// ランダムボタン
randomButton.addEventListener('click', function() {
    // 今と違うテーマをランダムに選ぶ
    let newTheme;
    do {
        newTheme = Math.floor(Math.random() * themes.length);
    } while (newTheme === currentTheme && themes.length > 1);
    
    currentTheme = newTheme;
    applyTheme();
    
    console.log('ランダムに変更！');
});

// 最初のテーマを適用
applyTheme();

console.log('テーマ切り替えアプリ（フル版）が読み込まれました！');
console.log('テーマの数：' + themes.length);

