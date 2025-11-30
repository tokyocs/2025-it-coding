# 2025年11月17日 - 第3回 動くウェブページを作ろう

## 今日の目標

今日は、JavaScriptを使って、ボタンを押すと数字が変わる「カウンターアプリ」を作ります！

- ボタンを押すと数が増える
- ボタンを押すと数が減る
- リセットボタンで0に戻る

**できる人は**、最後に「おみくじアプリ」にも挑戦してみよう！

## 🚀 はじめに - 最初に何をすればいい？

### ステップ1：カウンターアプリを動かしてみよう

1. この `20251117` フォルダの中に `example` フォルダがあります
2. `example` → `counter` フォルダを開きます
3. `index.html` をダブルクリックします
4. カウンターアプリが開きます！
5. 「＋」「－」「リセット」ボタンを押してみましょう

数字が変わったら成功！🎉

### ステップ2：おみくじアプリも試してみよう

1. `example` → `omikuji` フォルダを開きます
2. `index.html` をダブルクリックします
3. 「おみくじを引く」ボタンを押してみましょう

ランダムに結果が出たら成功！✨

### ステップ3：詳しい説明を読む

動かせたら、このファイルを下までスクロールして読んでみてください。
JavaScriptの仕組みやチャレンジ問題があります。

---

### 📚 ファイル構成

このフォルダには以下のファイルがあります：

- **README.md（このファイル）** - 授業の説明とチャレンジ問題
- **answers.md** - チャレンジ問題の答え（わからないときに見てね！）
- **prompt-examples.md** - AIに指示を出すときの例
- **example/** - サンプルファイル
  - `README.md` - サンプルの使い方（詳しい手順）
  - **counter/** - カウンターアプリのサンプル（index.html, style.css, script.js）
  - **omikuji/** - おみくじアプリのサンプル（index.html, style.css, script.js）

---

## これまでに学んだこと

| 回 | 学んだこと |
|----|-----------|
| 第1回 | HTML, CSS, JavaScriptの基本 / アラートを出す |
| 第2回 | CSSで色や文字の大きさを変える |
| **第3回（今日）** | **JavaScriptでページの中身を変える** |

---

## 準備：サンプルファイルを見てみよう

**まずはサンプルを見てみましょう！**

`example/counter/` フォルダの中にサンプルファイルがあります：

- `index.html` - ページの構造
- `style.css` - デザイン
- `script.js` - 動作のプログラム

**サンプルを開く方法：**

1. `example/counter/` フォルダを開く
2. `index.html` をブラウザで開く

サンプルを見たら、自分で作ってみましょう！
**ファイルの作り方がわからない人は、[Visual Studio Codeの使い方ガイド](../vscode-guide.md)を見てください！**

---

## パート1：カウンターアプリを作ろう

### ステップ1：HTMLファイルを作る

まずは、ページの「骨組み」を作ります。

**ファイル名：`index.html`**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>カウンターアプリ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>✨ カウンターアプリ ✨</h1>
        
        <div class="counter-box">
            <p>今の数字：</p>
            <p id="number" class="big-number">0</p>
        </div>
        
        <div class="button-group">
            <button id="plusButton" class="btn btn-plus">＋ ふやす</button>
            <button id="minusButton" class="btn btn-minus">－ へらす</button>
            <button id="resetButton" class="btn btn-reset">🔄 リセット</button>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

**ポイント**

- `<p id="number">0</p>` ← ここの数字をJavaScriptで変えます！
- `id="plusButton"` ← ボタンに名前（ID）をつけています
- `<script src="script.js"></script>` ← JavaScriptファイルを読みこみます

---

### ステップ2：CSSファイルを作る

次に、見た目をきれいにします。

**ファイル名：`style.css`**

```css
/* ページ全体のスタイル */
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 20px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 中央のコンテナ */
.container {
    background-color: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 400px;
    width: 100%;
}

/* タイトル */
h1 {
    color: #667eea;
    font-size: 32px;
    margin-bottom: 30px;
}

/* カウンターのボックス */
.counter-box {
    background-color: #f7f7f7;
    border-radius: 15px;
    padding: 30px;
    margin: 20px 0;
}

.counter-box p {
    margin: 5px 0;
    color: #555;
    font-size: 18px;
}

/* 大きい数字 */
.big-number {
    font-size: 72px !important;
    font-weight: bold;
    color: #667eea !important;
    margin: 10px 0 !important;
}

/* ボタンのグループ */
.button-group {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
}

/* ボタンの基本スタイル */
.btn {
    padding: 15px 30px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s;
}

.btn:hover {
    transform: scale(1.05);
}

/* ふやすボタン */
.btn-plus {
    background-color: #4CAF50;
    color: white;
}

.btn-plus:hover {
    background-color: #45a049;
}

/* へらすボタン */
.btn-minus {
    background-color: #f44336;
    color: white;
}

.btn-minus:hover {
    background-color: #da190b;
}

/* リセットボタン */
.btn-reset {
    background-color: #2196F3;
    color: white;
}

.btn-reset:hover {
    background-color: #0b7dda;
}
```

**ポイント**

- `linear-gradient` で背景をグラデーションにしています
- ボタンをマウスでホバーすると、少し大きくなります（`transform: scale(1.05)`）
- 色分けでボタンの役わりがわかりやすくなっています

---

### ステップ3：JavaScriptファイルを作る（穴埋めチャレンジ！）

いよいよ、ボタンを押すと数字が変わるようにします！

**まずはお手本通りに作ってみよう**

**ファイル名：`script.js`**

```javascript
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
```

**動いたら、次のチャレンジに進もう！**

---

## ファイルを開いて確認しよう

1. `index.html` をブラウザで開いてください
2. ボタンをクリックしてみましょう
3. 数字が変わったら成功です！🎉

---

## JavaScriptの仕組みを理解しよう

### 1. 変数（へんすう）ってなに？

**変数**は、数や文字を入れておく「箱」のようなものです。

```javascript
let count = 0;
```

- `let` は「変数を作るよ」という命令
- `count` は変数の名前（自分で決められます）
- `0` は最初に入れる数

### 2. 要素を取ってくる

```javascript
const numberDisplay = document.getElementById('number');
```

- `document.getElementById('number')` は、HTMLの中から `id="number"` の要素を探してくる命令
- `const` は「変わらない変数」を作る命令

### 3. イベントリスナーってなに？

```javascript
plusButton.addEventListener('click', function() {
    // ボタンがクリックされたときの処理
});
```

- `addEventListener` は「〜が起きたら、この処理をする」という命令
- `'click'` は「クリックされたとき」
- `function() { ... }` の中に、やりたい処理を書きます

### 4. 数を変える

```javascript
count = count + 1;  // 今の数に1を足す
```

これは以下のように書くこともできます：

```javascript
count++;  // 1増やす（簡単な書き方）
count--;  // 1減らす（簡単な書き方）
```

---

## カスタマイズチャレンジ

基本のカウンターができたら、以下のチャレンジに挑戦してみよう！
**答えは `answers.md` ファイルに書いてあるよ。わからなかったら見てもOK！**

### ★☆☆ チャレンジ1：10ずつ増やしてみよう

**やりたいこと：**

- ＋ボタンを押したら、1じゃなくて10ずつ増えるようにしたい

**ヒント：**

- `script.js` の `count = count + 1;` の部分を変えてみよう
- `1` を別の数に変えると、その数ずつ増えるよ

**考えてみよう：**

```javascript
plusButton.addEventListener('click', function() {
    count = count + ?????;  // ここに何を書けばいい？
    updateDisplay();
});
```

---

### ★☆☆ チャレンジ2：マイナスにならないようにしよう

**やりたいこと：**

- 数が0のとき、－ボタンを押してもマイナスにならないようにしたい

**ヒント：**

- `if` を使って、「もし count が 0 より大きかったら」という条件をつけよう
- 条件：`if (count > 0) { ... }`

**考えてみよう：**

```javascript
minusButton.addEventListener('click', function() {
    if (?????) {  // ここにどんな条件を書けばいい？
        count = count - 1;
        updateDisplay();
    }
});
```

---

### ★★☆ チャレンジ3：数字の色を変えてみよう

**やりたいこと：**

- プラスの数のとき → 緑色
- マイナスの数のとき → 赤色
- 0のとき → 青色

**ヒント：**

- `updateDisplay()` 関数の中に、色を変えるコードを追加しよう
- `numberDisplay.style.color = '色のコード';` で色を変えられるよ
- `if` と `else if` を使って、条件で分けよう

**考えてみよう：**

```javascript
function updateDisplay() {
    numberDisplay.textContent = count;
    
    // 数によって色を変える
    if (?????) {
        numberDisplay.style.color = '#4CAF50';  // 緑
    } else if (?????) {
        numberDisplay.style.color = '#f44336';  // 赤
    } else {
        numberDisplay.style.color = '#667eea';  // 青
    }
}
```

---

### ★★☆ チャレンジ4：+10ボタンと-10ボタンを作ろう

**やりたいこと：**

- 新しいボタンを2つ追加したい
- 「+10」ボタンと「-10」ボタン

**ステップ：**

1. `index.html` に新しいボタンを追加する
2. `script.js` でボタンを取得する
3. クリックイベントを設定する

**HTMLに追加：**

```html
<button id="plus10Button" class="btn btn-plus">＋10</button>
<button id="minus10Button" class="btn btn-minus">－10</button>
```

**JavaScriptで何を書く？**

```javascript
// ボタンを取得（どう書く？）
const plus10Button = ?????;

// クリックイベント（どう書く？）
plus10Button.addEventListener(?????, function() {
    count = ?????;
    updateDisplay();
});
```

---

### ★★★ チャレンジ5：数が100以上になったらメッセージを出そう

**やりたいこと：**

- 数が100以上になったら、「すごい！」というアラートを出したい

**ヒント：**

- `updateDisplay()` の中に条件を追加しよう
- `if (count >= 100)` で100以上かチェックできるよ
- `alert('メッセージ');` でアラートが出せるよ

**考えてみよう：**
どこに、どんなコードを書けばいいかな？

---

### ★★★ チャレンジ6：ボタンの色を変えよう

**やりたいこと：**

- 数がプラスのとき、－ボタンを明るくしたい
- 数が0のとき、－ボタンを暗くしたい（押せない感じ）

**ヒント：**

- `minusButton.disabled = true;` でボタンを無効化できるよ
- `minusButton.disabled = false;` で有効化できるよ
- `updateDisplay()` の中に追加しよう

### ★★★ チャレンジ7：音をつけよう

**やりたいこと：**

- ボタンを押したときに「ポン」という音を出したい

**ヒント：**

- 音を鳴らす関数 `playSound()` を作ろう
- ボタンが押されたときに、その関数を呼び出そう

**考えてみよう：**

```javascript
// 音を出す関数
function playSound() {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjGH0fPTgjMGHm7A7+OZTRQNULL0+65gGQg+mtzy1YI2Bjxx0PLgi0IMFmS+7+ibUBMOTKXh8bllHAc3jtT0zn4xBSl+zPLaizsIGGS56+mjUBELTKHf77h4LQYsgM7y2Ik3CBlov+3jn00QDFCn4/C2YxwGOJHX8sV5LAUod8fw3ZFACRVftOnqpVYTCkef4PKxaSAHMYfR89iBMwcdbcDv45lNFA1QsvT7q2EVBz+Z2/LNeCwEKXnM8tqKOgcXZrnr45RPFQ1NoN/yuWYdBzmM0/PKfDEFK3vK8tmKOQcZZrrp46ROEA1Np+Lwt2IdBjiR1/LMeCwFKHfH8N2RQAkVXrTp6qVWEwpHn+DysWkgBzGH0fPYgTMHHW3A7+OZTRQNULLz+6thFQc/mdvy0HksBSl5zPLaijsHF2a56+OUTxQNTqDf8rplHQc5jNPzyn4xBSt7yvLZizsHGWa66OSkTw==');
    audio.play();
}

// ＋ボタンが押されたときに音を鳴らす
plusButton.addEventListener('click', function() {
    count = count + 1;
    updateDisplay();
    ?????();  // ここに何を書けばいい？
});
```

---

---

## パート2：おみくじアプリに挑戦！（できる人向け）

カウンターのチャレンジができた人は、おみくじアプリも作ってみましょう！

### おみくじアプリを作ろう

**お手本通りに作るバージョン**

新しいファイル `omikuji.html` を作ります。

**ファイル名：`omikuji.html`**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>おみくじアプリ</title>
    <link rel="stylesheet" href="omikuji-style.css">
</head>
<body>
    <div class="container">
        <h1>🎋 おみくじ 🎋</h1>
        
        <div class="result-box" id="resultBox">
            <p class="result-text" id="resultText">ボタンをおしてね！</p>
        </div>
        
        <button id="drawButton" class="draw-btn">🎲 おみくじを引く</button>
    </div>
    
    <script src="omikuji-script.js"></script>
</body>
</html>
```

---

**ファイル名：`omikuji-style.css`**

```css
body {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 20px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    background-color: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    text-align: center;
    max-width: 400px;
    width: 100%;
}

h1 {
    color: #f5576c;
    font-size: 36px;
    margin-bottom: 30px;
}

.result-box {
    background-color: #fff9e6;
    border: 3px solid #ffd700;
    border-radius: 15px;
    padding: 40px 20px;
    margin: 20px 0;
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.result-text {
    font-size: 48px;
    font-weight: bold;
    margin: 0;
}

.draw-btn {
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 20px 40px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
}

.draw-btn:hover {
    background-color: #ff5252;
    transform: scale(1.1);
}

/* 結果ごとの色 */
.daikichi {
    background-color: #ffe6e6;
    border-color: #ff0000;
}

.chukichi {
    background-color: #fff0e6;
    border-color: #ff9900;
}

.kichi {
    background-color: #e6f7ff;
    border-color: #0099ff;
}

.suekichi {
    background-color: #f0f0f0;
    border-color: #999999;
}

.kyo {
    background-color: #e6e6ff;
    border-color: #6666ff;
}
```

---

**ファイル名：`omikuji-script.js`**

```javascript
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
});
```

---

## おみくじの仕組みを理解しよう

### 1. 配列（はいれつ）ってなに？

**配列**は、たくさんのデータをまとめて入れておく「棚」のようなものです。

```javascript
const results = ['大吉', '中吉', '吉', '小吉', '末吉', '凶'];
```

- `[]` の中に、カンマ `,` で区切ってデータを入れます
- `results[0]` で最初のデータ（大吉）を取り出せます
- `results[1]` で2番目のデータ（中吉）を取り出せます

**ポイント：番号は0から始まります！**

### 2. ランダムな数を作る

```javascript
Math.random()
```

- `Math.random()` は、0から1の間のランダムな数を作ります
- 例：0.123456、0.789012 など

```javascript
Math.random() * 6
```

- 6をかけると、0から6の間の数になります
- 例：0.5、3.2、5.9 など

```javascript
Math.floor(Math.random() * 6)
```

- `Math.floor()` は、小数点以下を切り捨てます
- 結果：0、1、2、3、4、5 のどれか

### 3. 配列の長さを取得

```javascript
results.length
```

- 配列に入っているデータの数を教えてくれます
- 今回は6つなので、`results.length` は `6` になります

---

## おみくじのカスタマイズチャレンジ

おみくじが動いたら、以下のチャレンジに挑戦してみよう！

### ★☆☆ チャレンジ8：自分だけの結果を作ろう

**やりたいこと：**

- 「大吉」「中吉」じゃなくて、自分の好きな言葉にしたい
- 例：「最高！」「いいね！」「がんばれ」など

**ヒント：**

- `results` 配列の中の `text: '大吉'` の部分を変えてみよう

**考えてみよう：**

```javascript
const results = [
    { text: '?????', class: 'daikichi', color: '#ff0000' },
    { text: '?????', class: 'chukichi', color: '#ff9900' },
    // どんな言葉にする？
];
```

---

### ★★☆ チャレンジ9：結果に絵文字をつけよう

**やりたいこと：**

- 結果と一緒に絵文字も表示したい
- 例：「大吉 🎉」「凶 😭」

**ヒント：**

- `text: '大吉'` を `text: '大吉 🎉'` に変えるだけ！

---

### ★★★ チャレンジ10：アニメーションをつけよう

**やりたいこと：**

- ボタンを押したら、結果がくるくる回って表示されるようにしたい

**ステップ：**

1. CSSにアニメーションを追加
2. JavaScriptで `setTimeout` を使って、0.5秒後に結果を表示

**CSSに追加：**

```css
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.spinning {
    animation: spin 0.5s ease-in-out;
}
```

**JavaScriptはどう変える？**

```javascript
drawButton.addEventListener('click', function() {
    // アニメーション開始
    resultBox.classList.add('spinning');
    
    // 0.5秒後に結果を表示（どう書く？）
    setTimeout(?????, ?????);
});
```

**ヒント：** 答えは `answers.md` を見てね！

---

## 困ったときは

### うまく動かないとき

1. **ファイル名を確認しよう**
   - `index.html`, `style.css`, `script.js` のつづりは正しいですか？

2. **コンソールを見よう**
   - ブラウザで `F12` キーを押して、コンソールを開きます
   - エラーメッセージが出ていませんか？

3. **セミコロン `;` を確認しよう**
   - JavaScriptでは、文の終わりに `;` をつけます

4. **カッコを確認しよう**
   - `{` で開いたら、`}` で閉じます
   - `(` で開いたら、`)` で閉じます

### よくあるエラー

| エラーメッセージ | 原因 | 直し方 |
|----------------|------|--------|
| `Uncaught TypeError: Cannot read property 'addEventListener' of null` | IDが見つからない | HTMLの `id` とJavaScriptの `getElementById` が同じか確認 |
| `Uncaught SyntaxError: Unexpected token` | 書き方がまちがっている | カッコやカンマを確認 |

---

## まとめ

今日学んだこと：

✅ **変数（へんすう）** → データを入れておく「箱」

✅ **イベントリスナー** → 「クリックされたら〜する」という命令

✅ **DOM操作** → JavaScriptでHTMLの中身を変える

✅ **配列（はいれつ）** → データをまとめて入れておく「棚」

✅ **Math.random()** → ランダムな数を作る

---

## 次回の予告

次回は、もっとすごいことができるようになります！

- 入力した文字を表示する
- データを保存する（ブラウザを閉じても消えない！）
- もっと複雑なアプリを作る

今日もお疲れさまでした！🎉

---

## ふろく：便利なJavaScriptのコード

### アラートを出す

```javascript
alert('こんにちは！');
```

### コンソールに表示

```javascript
console.log('デバッグ用のメッセージ');
```

### 確認ダイアログ

```javascript
const answer = confirm('本当にリセットしますか？');
if (answer) {
    console.log('はい が押されました');
} else {
    console.log('いいえ が押されました');
}
```

### 入力ダイアログ

```javascript
const name = prompt('名前を入力してください');
console.log('こんにちは、' + name + 'さん！');
```

### 時間を遅らせる

```javascript
setTimeout(function() {
    console.log('3秒後に表示されます');
}, 3000);  // 3000ミリ秒 = 3秒
```

### 繰り返し実行

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4 と表示される
}
```

---
