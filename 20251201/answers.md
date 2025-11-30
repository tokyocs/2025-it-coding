# チャレンジ問題の答え

ここには、`README.md` にあるチャレンジ問題の答えがあります。
自分で考えてから見てね！😊

---

## ★☆☆ チャレンジ1：ファイルのつながりを見つけよう

**元のコード：**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>マイページ</title>
    <link rel="stylesheet" href="design.css">
</head>
<body>
    <h1>こんにちは</h1>
    <button id="btn">クリック</button>
    
    <script src="app.js"></script>
</body>
</html>
```

**答え：**

1. **CSSファイルを読み込んでいますか？**
   - はい、読み込んでいます
   - ファイル名：`design.css`
   - `<link rel="stylesheet" href="design.css">` で読み込んでいます

2. **JavaScriptファイルを読み込んでいますか？**
   - はい、読み込んでいます
   - ファイル名：`app.js`
   - `<script src="app.js"></script>` で読み込んでいます

3. **`<link>` タグはどこに書かれていますか？**
   - `<head>` タグの中に書かれています
   - これが正しい場所です！

---

## ★☆☆ チャレンジ2：フォルダ構成を考えよう

**ファイルリスト：**

- index.html
- about.html
- main.css
- reset.css
- app.js
- logo.png
- background.jpg

**答え（例）：**

```
my-project/
├── index.html          ← HTMLファイルはトップに
├── about.html          ← HTMLファイルはトップに
├── css/                ← CSSファイル用のフォルダ
│   ├── reset.css
│   └── main.css
├── js/                 ← JavaScriptファイル用のフォルダ
│   └── app.js
└── images/             ← 画像ファイル用のフォルダ
    ├── logo.png
    └── background.jpg
```

**ポイント：**

- HTMLファイルはプロジェクトのトップに置く
- CSSファイルは `css/` フォルダにまとめる
- JavaScriptファイルは `js/` フォルダにまとめる
- 画像ファイルは `images/` フォルダにまとめる

**別の例（もっとシンプル）：**

```
my-project/
├── index.html
├── about.html
├── styles/             ← 「styles」という名前でもOK
│   ├── reset.css
│   └── main.css
├── scripts/            ← 「scripts」という名前でもOK
│   └── app.js
└── img/                ← 「img」という短い名前でもOK
    ├── logo.png
    └── background.jpg
```

どちらでもOK！大事なのは、**一貫性のある整理の仕方**です。

---

## ★★☆ チャレンジ3：パスを直そう

**フォルダ構成：**

```
my-site/
├── index.html
├── styles/
│   └── main.css
└── scripts/
    └── app.js
```

**答え：**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>マイサイト</title>
    <!-- CSSの読み込み -->
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <h1>マイサイト</h1>
    
    <!-- JavaScriptの読み込み -->
    <script src="scripts/app.js"></script>
</body>
</html>
```

**ポイント：**

- `href="styles/main.css"` → `styles` フォルダの中の `main.css`
- `src="scripts/app.js"` → `scripts` フォルダの中の `app.js`
- フォルダ名とファイル名の間は `/` （スラッシュ）で区切る

---

## ★★☆ チャレンジ4：エラーを見つけよう

**フォルダ構成：**

```
project/
├── index.html
├── css/
│   └── style.css
└── js/
    └── main.js
```

**まちがっているコード：**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>プロジェクト</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>タイトル</h1>
    <button id="btn">ボタン</button>
    
    <script src="main.js"></script>
</body>
</html>
```

**答え：**

1. **CSSファイルの読み込みにまちがいがありますか？**
   - はい、あります！
   - `href="style.css"` となっているが、実際は `css/` フォルダの中にある

2. **JavaScriptファイルの読み込みにまちがいがありますか？**
   - はい、あります！
   - `src="main.js"` となっているが、実際は `js/` フォルダの中にある

3. **正しい書き方は？**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>プロジェクト</title>
    <!-- フォルダ名も含める -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>タイトル</h1>
    <button id="btn">ボタン</button>
    
    <!-- フォルダ名も含める -->
    <script src="js/main.js"></script>
</body>
</html>
```

**ポイント：**
ファイルがフォルダの中にある場合は、フォルダ名も含めてパスを書きます！

---

## ★★★ チャレンジ5：複数のCSSファイルを読み込もう

**やりたいこと：**
以下の3つのCSSファイルを読み込みたい：

1. `reset.css` - ブラウザのデフォルトスタイルをリセット
2. `style.css` - メインのスタイル
3. `animation.css` - アニメーション

**答え：**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>マイサイト</title>
    
    <!-- 複数のCSSファイルを順番に読み込む -->
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="animation.css">
</head>
<body>
    <!-- ページの内容 -->
</body>
</html>
```

**ポイント：**

- `<link>` タグを複数書けます
- **順番が大事！** 上から順番に読み込まれます
- `reset.css` を最初に読み込むのが一般的

**フォルダに整理している場合：**

```
project/
├── index.html
└── css/
    ├── reset.css
    ├── style.css
    └── animation.css
```

```html
<head>
    <meta charset="UTF-8">
    <title>マイサイト</title>
    
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/animation.css">
</head>
```

---

## ★★★ チャレンジ6：相対パスと絶対パス

**答え：**

1. **自分で作ったCSSファイルを読み込むとき、相対パスと絶対パス、どちらを使いますか？**

   **答え：相対パス**

   ```html
   <link rel="stylesheet" href="css/style.css">
   ```

   **理由：**
   - 自分のプロジェクトのファイルは、プロジェクトフォルダの中にある
   - 相対パスを使うと、フォルダごと移動してもリンクが壊れない
   - サーバーにアップロードするときも、相対パスのままでOK

2. **インターネット上の他のサイトのCSSを読み込むとき、相対パスと絶対パス、どちらを使いますか？**

   **答え：絶対パス**

   ```html
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto">
   ```

   **理由：**
   - 他のサイトのファイルは、完全なURLで指定する必要がある
   - 例：Google Fontsのフォントを読み込むときなど

**まとめ：**

- 自分のファイル → 相対パス（`css/style.css`）
- 他のサイトのファイル → 絶対パス（`https://...`）

---

## ★★★ チャレンジ7：実際にフォルダを作ってみよう

**作るフォルダ構成：**

```
my-first-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    └── photo.jpg
```

**答え：**

### ステップ1：フォルダとファイルを作る

1. `my-first-website` フォルダを作る
2. その中に `css`, `js`, `images` フォルダを作る
3. 各ファイルを作る

### ステップ2：HTMLファイルを作る

**ファイル名：`index.html`**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>私のウェブサイト</title>
    <!-- CSSを読み込む -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <h1>私のウェブサイトへようこそ！</h1>
        <p>これは私が作った最初のウェブサイトです。</p>
        
        <!-- 画像を表示 -->
        <img src="images/photo.jpg" alt="写真">
        
        <!-- ボタン -->
        <button id="myButton">クリックしてね！</button>
    </div>
    
    <!-- JavaScriptを読み込む -->
    <script src="js/script.js"></script>
</body>
</html>
```

### ステップ3：CSSファイルを作る

**ファイル名：`css/style.css`**

```css
/* ページ全体のスタイル */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 20px;
}

/* コンテナ */
.container {
    max-width: 600px;
    margin: 0 auto;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* タイトル */
h1 {
    color: #333;
    text-align: center;
}

/* 文章 */
p {
    color: #666;
    line-height: 1.6;
}

/* 画像 */
img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 20px 0;
}

/* ボタン */
button {
    display: block;
    width: 100%;
    padding: 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;
}
```

### ステップ4：JavaScriptファイルを作る

**ファイル名：`js/script.js`**

```javascript
// ボタンの要素を取得
const button = document.getElementById('myButton');

// ボタンがクリックされたときの処理
button.addEventListener('click', function() {
    alert('ボタンがクリックされました！🎉');
    console.log('ボタンがクリックされました！');
});
```

### ステップ5：画像を追加

`images` フォルダに好きな画像を入れて、`photo.jpg` という名前にする。
（または、HTMLの `src="images/photo.jpg"` を実際の画像ファイル名に変える）

### ステップ6：確認

1. `index.html` をブラウザで開く
2. スタイルが適用されているか確認
3. ボタンをクリックして、アラートが出るか確認
4. 開発者ツール（F12）で、すべてのファイルが読み込まれているか確認

**できたら成功！🎉**

---

## おまけ：もっと詳しく知りたい人へ

### パスの書き方いろいろ

**1. 同じフォルダ内のファイル：**

```html
<link rel="stylesheet" href="style.css">
```

**2. 子フォルダ内のファイル：**

```html
<link rel="stylesheet" href="css/style.css">
```

**3. 孫フォルダ内のファイル：**

```html
<link rel="stylesheet" href="css/components/button.css">
```

**4. 親フォルダ内のファイル：**

```html
<link rel="stylesheet" href="../style.css">
```

（`..` は「1つ上のフォルダ」という意味）

**5. ルートから指定：**

```html
<link rel="stylesheet" href="/css/style.css">
```

（`/` で始まると、サイトのルートから指定）

---

### よく使うフォルダ名

| フォルダ名 | 意味 | 入れるもの |
|-----------|------|-----------|
| `css` または `styles` | スタイルシート | CSSファイル |
| `js` または `scripts` | スクリプト | JavaScriptファイル |
| `images` または `img` | 画像 | 画像ファイル |
| `assets` | 資材 | CSS、JS、画像などすべて |
| `fonts` | フォント | フォントファイル |
| `data` | データ | JSONファイルなど |
| `components` | コンポーネント | 再利用可能なパーツ |

---

### プロジェクトのテンプレート

新しいプロジェクトを始めるときに使えるテンプレート：

**シンプル版：**

```
project/
├── index.html
├── style.css
└── script.js
```

**標準版：**

```
project/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
```

**本格版：**

```
project/
├── index.html
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── common.css
│   │   └── style.css
│   ├── js/
│   │   ├── common.js
│   │   └── main.js
│   ├── images/
│   │   ├── icons/
│   │   └── photos/
│   └── fonts/
├── pages/
│   ├── about.html
│   └── contact.html
└── README.md
```

---

## まとめ：覚えておくべき3つのこと

### 1️⃣ ファイルの役割を理解する

- HTML → 構造
- CSS → 見た目
- JavaScript → 動き

### 2️⃣ 正しく読み込む

- CSSは `<head>` の中で `<link>` タグ
- JavaScriptは `<body>` の最後で `<script>` タグ

### 3️⃣ パスを正しく書く

- フォルダ名も含めて書く
- 大文字・小文字を正確に
- 自分のファイルは相対パスで

---

お疲れさまでした！✨
