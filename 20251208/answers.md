# チャレンジ問題の答え

ここには、`README.md` にあるチャレンジ問題の答えがあります。
自分で考えてから見てね！😊

---

## ★☆☆ チャレンジ1：色を変えてみよう

**やりたいこと：**
「海」テーマの背景色を、もっと明るい青に変えたい

**答え：**

`script.js` の最初の方にある `themes` 配列を編集します：

```javascript
const themes = [
    {
        name: "海",
        background: "#00bfff",  // 水色に変更！
        text: "#ffffff"
    },
    // ... 他のテーマ
];
```

**試してみよう：**
- `#4169e1` - ロイヤルブルー
- `#1e90ff` - ドジャーブルー
- `#87ceeb` - スカイブルー
- `#00ced1` - ダークターコイズ

---

## ★☆☆ チャレンジ2：テーマの名前を変えよう

**やりたいこと：**
「夕焼け」を「ピンク」に変えたい

**答え：**

```javascript
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
        name: "ピンク",          // 名前を変更！
        background: "#ff69b4",   // 背景色もピンクに！
        text: "#ffffff"
    }
];
```

**ポイント：**
- `name` と `background` の両方を変えると、名前と色が一致して分かりやすい

---

## ★★☆ チャレンジ3：新しいテーマを追加しよう

**やりたいこと：**
「宇宙」テーマを追加したい

**答え：**

```javascript
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
        name: "宇宙",            // 新しいテーマを追加！
        background: "#1a1a2e",   // 暗い青紫
        text: "#ffffff"          // 文字は白
    }
];
```

**注意ポイント：**
- 3番目のテーマ（夕焼け）の後ろにカンマ `,` を追加する
- 4番目のテーマ（宇宙）の後ろにはカンマを**つけない**

**よくあるミス：**
```javascript
// ❌ これはエラーになる（夕焼けの後ろにカンマがない）
{
    name: "夕焼け",
    background: "#ff6b6b",
    text: "#ffffff"
}
{
    name: "宇宙",
    // ...
}

// ✅ 正しい（夕焼けの後ろにカンマがある）
{
    name: "夕焼け",
    background: "#ff6b6b",
    text: "#ffffff"
},
{
    name: "宇宙",
    // ...
}
```

---

## ★★☆ チャレンジ4：テーマをたくさん追加しよう

**やりたいこと：**
虹のように7色のテーマを作りたい

**答え：**

```javascript
const themes = [
    {
        name: "赤",
        background: "#ff0000",
        text: "#ffffff"
    },
    {
        name: "オレンジ",
        background: "#ff7f00",
        text: "#ffffff"
    },
    {
        name: "黄色",
        background: "#ffff00",
        text: "#000000"  // 黄色の背景には黒文字が見やすい
    },
    {
        name: "緑",
        background: "#00ff00",
        text: "#000000"  // 緑の背景にも黒文字が見やすい
    },
    {
        name: "青",
        background: "#0000ff",
        text: "#ffffff"
    },
    {
        name: "藍色",
        background: "#4b0082",
        text: "#ffffff"
    },
    {
        name: "紫",
        background: "#9400d3",
        text: "#ffffff"
    }
];
```

**ポイント：**
- 明るい色（黄色、緑）のときは、文字を黒（`#000000`）にすると見やすい
- 暗い色のときは、文字を白（`#ffffff`）にすると見やすい

---

## ★★★ チャレンジ5：「前のテーマ」ボタンを追加しよう

**やりたいこと：**
「前のテーマ」ボタンを追加して、戻れるようにしたい

**答え：**

### ステップ1：HTMLにボタンを追加（index.html）

`<div class="button-group">` の中に新しいボタンを追加：

```html
<div class="button-group">
    <button id="prevButton" class="btn">◀ 前のテーマ</button>
    <button id="nextButton" class="btn">次のテーマ ▶</button>
</div>
```

### ステップ2：JavaScriptに処理を追加（script.js）

`// HTMLの要素を取得` の部分に追加：

```javascript
const prevButton = document.getElementById('prevButton');
```

そして、最後の方に以下を追加：

```javascript
// 前のテーマボタンが押されたとき
prevButton.addEventListener('click', function() {
    currentTheme = currentTheme - 1;
    
    // 最初より前に行ったら最後に戻る
    if (currentTheme < 0) {
        currentTheme = themes.length - 1;
    }
    
    applyTheme();
    console.log('前のテーマに変更：' + themes[currentTheme].name);
});
```

**ポイント：**
- `currentTheme - 1` で番号を減らす
- 0より小さくなったら、最後のテーマに戻る（ループする）

---

## ★★★ チャレンジ6：ランダムボタンを追加しよう

**やりたいこと：**
ボタンを押すと、ランダムにテーマが変わるようにしたい

**答え：**

### ステップ1：HTMLにボタンを追加（index.html）

```html
<div class="button-group">
    <button id="prevButton" class="btn">◀ 前</button>
    <button id="randomButton" class="btn btn-random">🎲 ランダム</button>
    <button id="nextButton" class="btn">次 ▶</button>
</div>
```

### ステップ2：CSSにスタイルを追加（style.css）

```css
.btn-random {
    background-color: #9b59b6;
}

.btn-random:hover {
    background-color: #8e44ad;
}
```

### ステップ3：JavaScriptに処理を追加（script.js）

```javascript
// ランダムボタンを取得
const randomButton = document.getElementById('randomButton');

// ランダムボタンが押されたとき
randomButton.addEventListener('click', function() {
    // 0 から テーマの数-1 までのランダムな数
    currentTheme = Math.floor(Math.random() * themes.length);
    
    applyTheme();
    console.log('ランダムに変更：' + themes[currentTheme].name);
});
```

**解説：**
- `Math.random()` → 0から1の間のランダムな数（例：0.7234）
- `Math.random() * themes.length` → 0からテーマ数の間の数（例：2.1702）
- `Math.floor(...)` → 小数点以下を切り捨て（例：2）

---

## ★★★ チャレンジ7：アニメーションをつけよう

**やりたいこと：**
色が変わるとき、ふわっと変わるようにしたい

**答え：**

### style.css に追加

```css
body {
    /* 既存のスタイル */
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    
    /* これを追加！ */
    transition: background-color 0.5s ease, color 0.5s ease;
}
```

**解説：**
- `transition` → 変化をなめらかにする
- `background-color 0.5s` → 背景色を0.5秒かけて変化
- `color 0.5s` → 文字色を0.5秒かけて変化
- `ease` → 最初と最後をゆっくり、中間を速く変化させる

**応用：速さを変える**

```css
/* ゆっくり（1秒） */
transition: background-color 1s ease, color 1s ease;

/* 速く（0.2秒） */
transition: background-color 0.2s ease, color 0.2s ease;

/* とてもゆっくり（2秒） */
transition: background-color 2s ease, color 2s ease;
```

---

## おまけ：全部入りの完成版

すべてのチャレンジを実装した完成版コードです！

### index.html（完成版）

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>テーマ切り替えアプリ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>🎨 テーマ切り替え</h1>
        
        <div class="theme-display">
            <p>今のテーマ：</p>
            <p id="themeName" class="theme-name">海</p>
        </div>
        
        <div class="button-group">
            <button id="prevButton" class="btn">◀ 前</button>
            <button id="randomButton" class="btn btn-random">🎲</button>
            <button id="nextButton" class="btn">次 ▶</button>
        </div>
        
        <p class="hint">ボタンを押すと色が変わるよ！</p>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

### script.js（完成版）

```javascript
// テーマの配列（虹色7色）
const themes = [
    { name: "赤", background: "#ff0000", text: "#ffffff" },
    { name: "オレンジ", background: "#ff7f00", text: "#ffffff" },
    { name: "黄色", background: "#ffff00", text: "#000000" },
    { name: "緑", background: "#00ff00", text: "#000000" },
    { name: "青", background: "#0000ff", text: "#ffffff" },
    { name: "藍色", background: "#4b0082", text: "#ffffff" },
    { name: "紫", background: "#9400d3", text: "#ffffff" }
];

// 今のテーマ番号
let currentTheme = 0;

// HTMLの要素を取得
const themeName = document.getElementById('themeName');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const randomButton = document.getElementById('randomButton');

// テーマを適用する関数
function applyTheme() {
    const theme = themes[currentTheme];
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;
    themeName.textContent = theme.name;
}

// 次のテーマボタン
nextButton.addEventListener('click', function() {
    currentTheme = currentTheme + 1;
    if (currentTheme >= themes.length) {
        currentTheme = 0;
    }
    applyTheme();
});

// 前のテーマボタン
prevButton.addEventListener('click', function() {
    currentTheme = currentTheme - 1;
    if (currentTheme < 0) {
        currentTheme = themes.length - 1;
    }
    applyTheme();
});

// ランダムボタン
randomButton.addEventListener('click', function() {
    currentTheme = Math.floor(Math.random() * themes.length);
    applyTheme();
});

// 最初のテーマを適用
applyTheme();
```

---

お疲れさまでした！✨

