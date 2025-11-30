# 2025年12月1日 - 第4回 ファイル構成を理解しよう

## 今日の目標

今日は、ウェブページを作るときの「ファイル構成」について学びます！

- HTML、CSS、JavaScriptの役割を理解する
- ファイル同士がどうつながっているかを知る
- フォルダの整理の仕方を学ぶ
- 正しいファイルの読み込み方を覚える

**これまでファイルを作ってきたけど、なぜ3つのファイルが必要なのか、どうつながっているのかを理解しよう！**

### 📚 ファイル構成

このフォルダには以下のファイルがあります：

- **README.md（このファイル）** - 授業の説明とチャレンジ問題
- **answers.md** - チャレンジ問題の答え
- **example/** - サンプルプロジェクト
  - **basic/** - 基本的な構成
  - **organized/** - 整理された構成
  - **advanced/** - 発展的な構成

---

## これまでに学んだこと

| 回 | 学んだこと |
|----|-----------|
| 第1回 | HTML, CSS, JavaScriptの基本 / アラートを出す |
| 第2回 | CSSで色や文字の大きさを変える |
| 第3回 | JavaScriptでページの中身を変える |
| **第4回（今日）** | **ファイル構成を理解する** |

---

## パート1：3つのファイルの役割を理解しよう

ウェブページは、3つのファイルで作られています。それぞれに役割があります！

### 🏗️ HTML（エイチティーエムエル）

**役割：ページの「骨組み」**

- どこにボタンを置くか
- どこに文字を書くか
- ページの構造を決める

```html
<!-- HTMLはこんな感じ -->
<h1>タイトル</h1>
<p>文章</p>
<button>ボタン</button>
```

**例え：** 家の「柱」や「壁」のようなもの

---

### 🎨 CSS（シーエスエス）

**役割：ページの「見た目」**

- 色を変える
- 大きさを変える
- 位置を整える

```css
/* CSSはこんな感じ */
h1 {
    color: blue;
    font-size: 32px;
}
```

**例え：** 家の「ペンキ」や「インテリア」のようなもの

---

### ⚙️ JavaScript（ジャバスクリプト）

**役割：ページの「動き」**

- ボタンを押したときの動作
- 数字を計算する
- ページの内容を変える

```javascript
// JavaScriptはこんな感じ
button.addEventListener('click', function() {
    alert('ボタンが押されました！');
});
```

**例え：** 家の「電気」や「水道」のようなもの

---

## パート2：ファイルはどうつながっている？

### 基本的なファイル構成

```
my-project/
├── index.html
├── style.css
└── script.js
```

### ファイルのつながり図

```
┌─────────────────┐
│   index.html    │ ← メインファイル（最初に開くファイル）
│                 │
│  <link href="   │ ─┐
│    style.css">  │  │ CSSを読み込む
│                 │  │
│  <script src="  │ ─┼─┐
│    script.js">  │  │ │ JavaScriptを読み込む
└─────────────────┘  │ │
         │            │ │
         ▼            ▼ ▼
┌──────────┐   ┌─────────┐
│style.css │   │script.js│
│          │   │         │
│見た目の  │   │動きの   │
│ルール    │   │プログラム│
└──────────┘   └─────────┘
```

---

## パート3：HTMLからCSSとJavaScriptを読み込む方法

### CSSを読み込む（`<link>`タグ）

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

**ポイント：**

- `<head>` の中に書く
- `rel="stylesheet"` は「スタイルシートだよ」という意味
- `href="style.css"` はファイルの場所

---

### JavaScriptを読み込む（`<script>`タグ）

```html
<body>
    <!-- ページの内容 -->
    
    <script src="script.js"></script>
</body>
```

**ポイント：**

- `<body>` の一番下に書く
- `src="script.js"` はファイルの場所
- なぜ下？→ページの内容を先に読み込んでからJavaScriptを実行するため

---

## パート4：フォルダで整理しよう

プロジェクトが大きくなったら、フォルダで整理します！

### レベル1：基本的な構成

```
my-project/
├── index.html
├── style.css
└── script.js
```

**いつ使う？** → 小さいプロジェクト

---

### レベル2：整理された構成

```
my-project/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── logo.png
    └── background.jpg
```

**いつ使う？** → 中くらいのプロジェクト

**HTMLから読み込む方法が変わる！**

```html
<head>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <img src="images/logo.png" alt="ロゴ">
    <script src="js/script.js"></script>
</body>
```

---

### レベル3：発展的な構成

```
my-website/
├── index.html
├── about.html
├── contact.html
├── css/
│   ├── style.css
│   ├── reset.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── form.js
│   └── animation.js
└── images/
    ├── icons/
    │   ├── home.svg
    │   └── menu.svg
    └── photos/
        ├── photo1.jpg
        └── photo2.jpg
```

**いつ使う？** → 大きなプロジェクト

---

## パート5：よくあるまちがいと直し方

### ❌ まちがい1：ファイル名がちがう

```html
<!-- HTMLに書いた名前 -->
<link rel="stylesheet" href="style.css">

<!-- でも実際のファイル名は -->
Style.css ← 大文字になっている！
```

**直し方：** ファイル名は完全に一致させる（大文字・小文字も！）

---

### ❌ まちがい2：フォルダの場所がまちがっている

```
my-project/
├── index.html
└── styles/
    └── style.css
```

```html
<!-- これはまちがい -->
<link rel="stylesheet" href="style.css">

<!-- 正しくは -->
<link rel="stylesheet" href="styles/style.css">
```

**直し方：** フォルダ名も含めて正しいパスを書く

---

### ❌ まちがい3：スクリプトが先に読み込まれている

```html
<body>
    <script src="script.js"></script>
    
    <button id="myButton">ボタン</button>
</body>
```

このとき、JavaScriptは `myButton` を見つけられません！

**直し方：** スクリプトは `</body>` の直前に書く

```html
<body>
    <button id="myButton">ボタン</button>
    
    <script src="script.js"></script>
</body>
```

---

## チャレンジ問題

### ★☆☆ チャレンジ1：ファイルのつながりを見つけよう

以下のHTMLファイルを見て、質問に答えよう！

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

**質問：**

1. このHTMLファイルは、CSSファイルを読み込んでいますか？読み込んでいる場合、ファイル名は？
2. このHTMLファイルは、JavaScriptファイルを読み込んでいますか？読み込んでいる場合、ファイル名は？
3. `<link>` タグはどこに書かれていますか？

**答えは `answers.md` を見てね！**

---

### ★☆☆ チャレンジ2：フォルダ構成を考えよう

以下のようなファイルがあります。整理されたフォルダ構成を考えよう！

**ファイルリスト：**

- index.html
- about.html
- main.css
- reset.css
- app.js
- logo.png
- background.jpg

**質問：**

どんなフォルダを作って、どのファイルをどこに入れますか？

**考えてみよう！** 答えは `answers.md` にあるよ。

---

### ★★☆ チャレンジ3：パスを直そう

以下のフォルダ構成で、HTMLからCSSとJavaScriptを正しく読み込むには？

```
my-site/
├── index.html
├── styles/
│   └── main.css
└── scripts/
    └── app.js
```

**index.htmlに何を書けばいい？**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>マイサイト</title>
    <!-- ここにCSSの読み込みを書こう -->
    <link rel="stylesheet" href="?????">
</head>
<body>
    <h1>マイサイト</h1>
    
    <!-- ここにJavaScriptの読み込みを書こう -->
    <script src="?????"></script>
</body>
</html>
```

**ヒント：** フォルダ名も含めてパスを書こう！

---

### ★★☆ チャレンジ4：エラーを見つけよう

以下のコードにはまちがいがあります。どこがまちがっているか見つけよう！

**フォルダ構成：**

```
project/
├── index.html
├── css/
│   └── style.css
└── js/
    └── main.js
```

**index.html：**

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

**質問：**

1. CSSファイルの読み込みにまちがいがありますか？
2. JavaScriptファイルの読み込みにまちがいがありますか？
3. 正しい書き方は？

---

### ★★★ チャレンジ5：複数のCSSファイルを読み込もう

複数のCSSファイルを読み込むこともできます！

**やりたいこと：**

以下の3つのCSSファイルを読み込みたい：

1. `reset.css` - ブラウザのデフォルトスタイルをリセット
2. `style.css` - メインのスタイル
3. `animation.css` - アニメーション

**質問：**

HTMLの `<head>` には何を書けばいいでしょうか？

**ヒント：** `<link>` タグを複数書けるよ！順番も大事！

---

### ★★★ チャレンジ6：相対パスと絶対パス

ファイルのパスには2種類あります：

**相対パス（そうたいパス）：** 今いる場所から見たパス

```html
<link rel="stylesheet" href="css/style.css">
```

**絶対パス（ぜったいパス）：** 完全なURL

```html
<link rel="stylesheet" href="https://example.com/css/style.css">
```

**質問：**

1. 自分で作ったCSSファイルを読み込むとき、相対パスと絶対パス、どちらを使いますか？
2. インターネット上の他のサイトのCSSを読み込むとき、相対パスと絶対パス、どちらを使いますか？

---

### ★★★ チャレンジ7：実際にフォルダを作ってみよう

実際に以下のフォルダ構成でプロジェクトを作ってみよう！

**作るフォルダ構成：**

```
my-first-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    └── （好きな画像を1つ入れよう）
```

**やること：**

1. フォルダとファイルを作る
2. HTMLから正しくCSSとJavaScriptを読み込む
3. 画像も表示してみる
4. ブラウザで開いて、すべて正しく動くか確認する

**ヒント：**

- Visual Studio Codeでフォルダを作るには、フォルダ名を右クリック → 「新しいフォルダー」
- 画像を表示するには `<img src="images/ファイル名.jpg" alt="説明">`

---

## パート6：実際のプロジェクトを見てみよう

### 例1：カウンターアプリ

これまで作ってきたカウンターアプリの構成：

```
counter-app/
├── index.html        ← ボタンとカウンターの表示
├── style.css         ← ボタンの色やレイアウト
└── script.js         ← クリックしたときの処理
```

**ファイルのつながり：**

```
index.html
  ↓ link で読み込み
style.css ← ボタンの色やサイズを指定
  
index.html
  ↓ script で読み込み
script.js ← ボタンがクリックされたときの処理
```

---

### 例2：もっと大きなプロジェクト

本格的なウェブサイトの構成：

```
my-website/
├── index.html              ← トップページ
├── about.html              ← 自己紹介ページ
├── contact.html            ← お問い合わせページ
├── assets/                 ← 資材フォルダ
│   ├── css/
│   │   ├── reset.css       ← リセット用CSS
│   │   ├── common.css      ← 共通スタイル
│   │   └── page.css        ← ページごとのスタイル
│   ├── js/
│   │   ├── common.js       ← 共通の処理
│   │   └── form.js         ← フォームの処理
│   └── images/
│       ├── logo.svg        ← ロゴ
│       ├── icons/          ← アイコン用フォルダ
│       └── photos/         ← 写真用フォルダ
└── README.md               ← プロジェクトの説明
```

---

## パート7：便利な命名ルール

ファイルやフォルダの名前をつけるときのルール：

### ✅ 良い名前の付け方

1. **小文字を使う**
   - ✅ `style.css`
   - ❌ `Style.css` や `STYLE.CSS`

2. **スペースを使わない**
   - ✅ `my-page.html` や `my_page.html`
   - ❌ `my page.html`

3. **わかりやすい名前をつける**
   - ✅ `header-style.css`
   - ❌ `aaa.css` や `style1.css`

4. **日本語を使わない**
   - ✅ `about.html`
   - ❌ `じこしょうかい.html`

---

## パート8：開発者ツールで確認しよう

ファイルが正しく読み込まれているか確認する方法：

1. ブラウザでHTMLファイルを開く
2. `F12` キーを押して開発者ツールを開く
3. 「Network」タブをクリック
4. ページをリロード（`F5` キー）
5. 読み込まれたファイルの一覧が表示される

**見るポイント：**

- ✅ すべてのファイルが「200」（成功）になっているか
- ❌ 「404」（見つからない）がないか

---

## まとめ

今日学んだこと：

✅ **HTML** → ページの骨組み

✅ **CSS** → ページの見た目

✅ **JavaScript** → ページの動き

✅ **`<link>` タグ** → CSSを読み込む（`<head>` の中）

✅ **`<script>` タグ** → JavaScriptを読み込む（`<body>` の最後）

✅ **フォルダで整理** → css/, js/, images/ などに分ける

✅ **相対パス** → フォルダを含めた正しいパスを書く

---

## 困ったときは

### CSSが効かないとき

1. ファイル名を確認しよう（大文字・小文字も！）
2. `<link>` タグが `<head>` の中にあるか確認
3. `href` のパスが正しいか確認
4. 開発者ツール（F12）の「Network」タブでファイルが読み込まれているか確認

---

### JavaScriptが動かないとき

1. ファイル名を確認しよう
2. `<script>` タグが `</body>` の直前にあるか確認
3. `src` のパスが正しいか確認
4. 開発者ツール（F12）の「Console」タブでエラーがないか確認

---

### よくあるエラーとその意味

| エラー | 意味 | 直し方 |
|--------|------|--------|
| `404 Not Found` | ファイルが見つからない | パスやファイル名を確認 |
| `Failed to load resource` | ファイルの読み込みに失敗 | パスやファイル名を確認 |
| `Uncaught TypeError: ... is null` | 要素が見つからない | JavaScriptが先に実行されていないか確認 |

---

## 次回の予告

次回は、実際にもっと複雑なプロジェクトを作ります！

- 複数のページを持つウェブサイト
- ページ間の移動
- データの保存と読み込み

今日もお疲れさまでした！🎉

---

## ふろく：覚えておくと便利なこと

### コメントの書き方

コメントは、プログラムには影響しない「メモ」です。

**HTML：**

```html
<!-- これはコメントです -->
<h1>タイトル</h1>
```

**CSS：**

```css
/* これはコメントです */
h1 {
    color: blue;
}
```

**JavaScript：**

```javascript
// これはコメントです（1行）
let count = 0;

/*
これもコメントです
（複数行）
*/
```

---

### ファイルの拡張子

| 拡張子 | 意味 | 用途 |
|--------|------|------|
| `.html` | HTMLファイル | ページの構造 |
| `.css` | CSSファイル | スタイル |
| `.js` | JavaScriptファイル | プログラム |
| `.jpg`, `.png` | 画像ファイル | 写真やイラスト |
| `.svg` | SVG画像ファイル | アイコンやロゴ（拡大しても綺麗） |
| `.md` | Markdownファイル | ドキュメント |

---

### プロジェクトの始め方チェックリスト

新しいプロジェクトを始めるときのチェックリスト：

- [ ] プロジェクト用のフォルダを作る
- [ ] `index.html` を作る
- [ ] `css` フォルダを作る
- [ ] `js` フォルダを作る
- [ ] `images` フォルダを作る（必要なら）
- [ ] HTMLから正しくCSSとJavaScriptを読み込む
- [ ] ブラウザで開いて確認する

---
