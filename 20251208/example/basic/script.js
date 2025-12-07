// ====================================
// 🎨 ここを自分の好きな色に変えてね！
// ====================================

const themes = [
    {
        name: "海",              // テーマの名前
        background: "#0077be",  // 背景の色
        text: "#ffffff"         // 文字の色
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
    }
];

// ====================================
// ここから下はプログラムの部分
// （変えなくてもOK！）
// ====================================

// 今のテーマ番号（0からスタート）
let currentTheme = 0;

// HTMLの要素を取得
const themeName = document.getElementById('themeName');
const nextButton = document.getElementById('nextButton');

// テーマを適用する関数
function applyTheme() {
    // 今のテーマのデータを取得
    const theme = themes[currentTheme];
    
    // 背景色を変える
    document.body.style.backgroundColor = theme.background;
    
    // 文字色を変える
    document.body.style.color = theme.text;
    
    // テーマ名を表示
    themeName.textContent = theme.name;
    
    // コンソールにも表示
    console.log('テーマを変更しました：' + theme.name);
}

// 次のテーマボタンが押されたとき
nextButton.addEventListener('click', function() {
    // 次のテーマに進む
    currentTheme = currentTheme + 1;
    
    // 最後まで行ったら最初に戻る
    if (currentTheme >= themes.length) {
        currentTheme = 0;
    }
    
    // テーマを適用
    applyTheme();
});

// ページが読み込まれたとき、最初のテーマを適用
applyTheme();

// デバッグ用のメッセージ
console.log('テーマ切り替えアプリが読み込まれました！');
console.log('テーマの数：' + themes.length);

