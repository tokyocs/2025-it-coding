# 2025年10月20日 - 第1回 コーディング授業

## 🚀 はじめに - 最初に何をすればいい？

### ステップ1：サンプルを動かしてみよう

1. この `20251020` フォルダの中に `example` フォルダがあります
2. `example` フォルダを開きます
3. `index.html` をダブルクリックします
4. ブラウザで自己紹介サイトが開きます！
5. ボタンを押してみましょう

**これで完了！** 動くウェブページを見ることができました！🎉

### ステップ2：このREADMEを読む

サンプルを見たら、このファイルを下までスクロールして読んでみてください。
HTMLやCSS、JavaScriptの基本が書いてあります。

### ステップ3：自分で作ってみる

サンプルのコードを見ながら、自分でも作ってみましょう！
詳しい手順は `example` フォルダの中の `README.md` に書いてあります。

---

## 📚 ファイル構成

このフォルダには以下のファイルがあります：

- **README.md（このファイル）** - HTML、CSS、JavaScriptの基礎知識
- **example/** - 自己紹介サイトのサンプルファイル
  - `README.md` - サンプルの使い方（詳しい手順）
  - `index.html` - ページの構造
  - `style.css` - デザイン
  - `script.js` - 動作のプログラム

---

## プロンプト例

以下のプロンプトをコピーして、AIに指示してみましょう：

```
### タスク ###
自己紹介サイトのサンプルを作成してください．
### 条件 ###
- HTML, CSS, JavaScriptのファイルを別々に作成してください．
- 名前、趣味、好きなものを表示してください
- ボタンをクリックすると、挨拶のアラートが表示されるようにしてください
- 見た目を工夫してください（色、フォント、レイアウトなど）
```

## HTML の基礎

HTMLは、ウェブページの構造を作るための言語です。

### よく使うタグ

| タグ | 説明 | 使用例 |
|------|------|--------|
| `<h1>` ~ `<h6>` | 見出し（h1が最も大きい） | `<h1>タイトル</h1>` |
| `<p>` | 段落（パラグラフ） | `<p>これは段落です</p>` |
| `<div>` | コンテンツのまとまり（ブロック） | `<div>コンテンツ</div>` |
| `<span>` | テキストの一部をグループ化 | `<span>強調</span>` |
| `<a>` | リンク | `<a href="https://example.com">リンク</a>` |
| `<img>` | 画像 | `<img src="image.jpg" alt="説明">` |
| `<button>` | ボタン | `<button>クリック</button>` |
| `<ul>`, `<li>` | 箇条書きリスト | `<ul><li>項目1</li></ul>` |
| `<ol>`, `<li>` | 番号付きリスト | `<ol><li>項目1</li></ol>` |

### HTML の基本構造

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ページタイトル</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>こんにちは</h1>
    <p>ここにコンテンツを書きます</p>
    <script src="script.js"></script>
</body>
</html>
```

## CSS の基礎

CSSは、ウェブページの見た目（デザイン）を整えるための言語です。

### よく使うプロパティ

#### 背景色 (background-color)

要素の背景色を設定します。

```css
body {
    background-color: #f0f0f0; /* 明るい灰色 */
}

.box {
    background-color: lightblue; /* 薄い青 */
}
```

#### 文字色 (color)

テキストの色を設定します。

```css
h1 {
    color: #333333; /* 濃い灰色 */
}

p {
    color: rgb(0, 0, 0); /* 黒 */
}
```

#### 文字の大きさ (font-size)

テキストのサイズを設定します。

```css
h1 {
    font-size: 32px; /* 32ピクセル */
}

p {
    font-size: 16px; /* 16ピクセル */
}
```

#### パディング (padding)

要素の内側の余白を設定します。

```css
.box {
    padding: 20px; /* 全方向に20px */
    padding-top: 10px; /* 上だけ10px */
    padding: 10px 20px; /* 上下10px、左右20px */
}
```

#### マージン (margin)

要素の外側の余白を設定します。

```css
.box {
    margin: 20px; /* 全方向に20px */
    margin-bottom: 30px; /* 下だけ30px */
    margin: 10px auto; /* 上下10px、左右は中央揃え */
}
```

### CSS の書き方

CSSファイル（style.css）の例：

```css
/* 全体のスタイル */
body {
    background-color: #f5f5f5;
    color: #333;
    font-size: 16px;
    margin: 0;
    padding: 20px;
}

/* 見出しのスタイル */
h1 {
    color: #0066cc;
    font-size: 28px;
    margin-bottom: 20px;
}

/* ボックスのスタイル */
.info-box {
    background-color: white;
    padding: 20px;
    margin: 10px 0;
    border-radius: 8px;
}
```

## JavaScript の基礎

JavaScriptは、ウェブページに動きをつけるための言語です。

### ボタンをクリックしたらアラートを表示する

#### HTML でボタンを作る

```html
<button id="myButton">クリックしてね！</button>
```

#### JavaScript でアラートを表示する

**方法1: HTMLに直接書く**

```html
<button onclick="alert('こんにちは！')">クリックしてね！</button>
```

**方法2: JavaScriptファイルに書く（推奨）**

HTMLファイル：

```html
<button id="myButton">クリックしてね！</button>
<script src="script.js"></script>
```

JavaScriptファイル（script.js）：

```javascript
// ボタンを取得する
const button = document.getElementById('myButton');

// ボタンがクリックされたときの処理
button.addEventListener('click', function() {
    alert('こんにちは！');
});
```

### JavaScript の基本的な書き方

```javascript
// 要素を取得する
const element = document.getElementById('要素のID');
const elements = document.querySelectorAll('.クラス名');

// テキストを変更する
element.textContent = '新しいテキスト';

// クリックイベントを設定する
element.addEventListener('click', function() {
    alert('クリックされました！');
    console.log('コンソールに表示');
});

// 複数の処理をまとめる
function greet() {
    const name = 'たろう';
    alert('こんにちは、' + name + 'さん！');
}

// ボタンクリックで関数を実行
button.addEventListener('click', greet);
```

## 実践のヒント

1. **ファイルを分ける理由**
   - HTML：構造を作る
   - CSS：見た目を整える
   - JavaScript：動きをつける
   - それぞれの役割が明確になり、管理しやすくなります

2. **開発ツール（DevTools）を活用**
   - ブラウザで `F12` キーを押すと開発ツールが開きます
   - コンソールでエラーを確認できます
   - 要素を調査して、CSSを試すことができます

3. **少しずつ作る**
   - まずHTMLで構造を作る
   - 次にCSSで見た目を整える
   - 最後にJavaScriptで動きをつける

頑張ってください！ 🚀
