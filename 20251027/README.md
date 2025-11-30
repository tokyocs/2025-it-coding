# 2025年10月27日 - 第2回 CSSでデザインをしよう

## 🚀 はじめに - 最初に何をすればいい？

### ステップ1：サンプルを動かしてみよう

1. この `20251027` フォルダの中に `example` フォルダがあります
2. `example` フォルダを開きます
3. `index.html` をダブルクリックします
4. ブラウザでカラフルなボックスが表示されます！

**これで完了！** CSSで色をつけたページを見ることができました！🎉

### ステップ2：色を変えてみよう

1. `example` フォルダの `style.css` を右クリック
2. 「プログラムから開く」→「メモ帳」を選ぶ
3. 色のコード（`#add8e6` など）を別の色に変えてみる
4. 保存する（Ctrl+S または Cmd+S）
5. ブラウザで更新する（F5キー）

色が変わったら成功です！✨

### ステップ3：このREADMEを読む

下にスクロールすると、CSSの詳しい説明があります。
色のコードの意味や、使い方が分かります。

---

## 📚 ファイル構成

このフォルダには以下のファイルがあります：

- **README.md（このファイル）** - CSSの説明と練習問題
- **example/** - CSSの練習用サンプルファイル
  - `README.md` - サンプルの使い方（詳しい手順）
  - `index.html` - ページの構造
  - `style.css` - デザイン
  - `script.js` - （今回は使わない）

---

## 今日のもくひょう

今日は、CSSをつかって、ウェブページをカラフルで見やすくする方法を学びます！

- 背景の色を変える
- 文字の色を変える
- 文字の大きさを変える

## CSSってなに？

CSSは、ウェブページをきれいにかざる魔法のような言語です。
HTMLで作った「骨組み」に、色や大きさをつけて、見やすく、かっこよくします！

## 準備：3つのファイルを作ろう

まず、以下の3つのファイルを作ります。
**ファイルの作り方がわからない人は、[Visual Studio Codeの使い方ガイド](../vscode-guide.md)を見てください！**

### 1. index.html（HTMLファイル）

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSSの練習</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>ようこそ！CSSの世界へ</h1>
    <p class="introduction">ここでは、CSSを使ってページをきれいにします。</p>
    
    <div class="box1">
        <h2>ボックス1</h2>
        <p>このボックスは背景が青色です。</p>
    </div>
    
    <div class="box2">
        <h2>ボックス2</h2>
        <p>このボックスは背景が緑色です。</p>
    </div>
    
    <div class="box3">
        <h2>ボックス3</h2>
        <p class="big-text">このテキストは大きいです！</p>
        <p class="small-text">このテキストは小さいです。</p>
    </div>
</body>
</html>
```

### 2. style.css（CSSファイル）

```css
/* ページ全体の設定 */
body {
    background-color: #f0f8ff; /* 背景色：うすい青 */
    color: #333333; /* 文字色：こい灰色 */
    font-size: 16px; /* 文字の大きさ：16ピクセル */
    padding: 20px;
}

/* メインのタイトル */
h1 {
    color: #ff6b6b; /* 文字色：ピンク */
    font-size: 36px; /* 文字の大きさ：36ピクセル */
    text-align: center; /* 中央ぞろえ */
}

/* 自己紹介文 */
.introduction {
    color: #4a4a4a; /* 文字色：灰色 */
    font-size: 18px; /* 文字の大きさ：18ピクセル */
    text-align: center;
}

/* ボックス1のスタイル */
.box1 {
    background-color: #add8e6; /* 背景色：明るい青 */
    color: #000080; /* 文字色：こい青 */
    padding: 20px;
    margin: 20px 0;
    border-radius: 10px; /* 角を丸くする */
}

/* ボックス2のスタイル */
.box2 {
    background-color: #90ee90; /* 背景色：明るい緑 */
    color: #006400; /* 文字色：こい緑 */
    padding: 20px;
    margin: 20px 0;
    border-radius: 10px;
}

/* ボックス3のスタイル */
.box3 {
    background-color: #ffe4b5; /* 背景色：うすいオレンジ */
    color: #8b4513; /* 文字色：茶色 */
    padding: 20px;
    margin: 20px 0;
    border-radius: 10px;
}

/* 大きい文字 */
.big-text {
    font-size: 24px; /* 文字の大きさ：24ピクセル */
    font-weight: bold; /* 太字にする */
}

/* 小さい文字 */
.small-text {
    font-size: 12px; /* 文字の大きさ：12ピクセル */
}
```

### 3. script.js（JavaScriptファイル - 今日は使いません）

```javascript
// 今日は使わないけど、ファイルだけ作っておこう
console.log('CSSの練習をがんばろう！');
```

## やってみよう！ステップバイステップ

### ステップ1：背景の色を変えてみよう

style.cssの中の `background-color` を変えてみましょう！

**練習1：bodyの背景色を変える**

```css
body {
    background-color: #ffb6c1; /* うすいピンクに変えてみよう！ */
}
```

**練習2：ボックスの背景色を変える**

```css
.box1 {
    background-color: #ffd700; /* 金色に変えてみよう！ */
}
```

#### よく使う色のコード

| 色の名前 | コード | 色 |
|---------|--------|-----|
| 赤 | `#ff0000` | 🔴 |
| 青 | `#0000ff` | 🔵 |
| 緑 | `#00ff00` | 🟢 |
| 黄色 | `#ffff00` | 🟡 |
| ピンク | `#ff69b4` | 💗 |
| オレンジ | `#ffa500` | 🟠 |
| 紫 | `#800080` | 🟣 |
| 白 | `#ffffff` | ⚪ |
| 黒 | `#000000` | ⚫ |

### ステップ2：文字の色を変えてみよう

style.cssの中の `color` を変えてみましょう！

**練習3：h1の文字色を変える**

```css
h1 {
    color: #0000ff; /* 青色に変えてみよう！ */
}
```

**練習4：ボックスの中の文字色を変える**

```css
.box2 {
    color: #ff0000; /* 赤色に変えてみよう！ */
}
```

### ステップ3：文字の大きさを変えてみよう

style.cssの中の `font-size` を変えてみましょう！

**練習5：h1の文字を大きくする**

```css
h1 {
    font-size: 48px; /* もっと大きくしてみよう！ */
}
```

**練習6：普通の文字の大きさを変える**

```css
body {
    font-size: 20px; /* 全体の文字を少し大きくしてみよう！ */
}
```

#### 文字の大きさの目安

| 大きさ | 使う場所 |
|--------|---------|
| 12px～14px | 小さい説明文 |
| 16px～18px | 普通の文章 |
| 20px～24px | 少し大きめの文章 |
| 28px～36px | 小さい見出し |
| 40px～48px | 大きい見出し |

## チャレンジ！自分だけのデザインを作ろう

### チャレンジ1：好きな色の組み合わせを作る

以下のように、自分の好きな色でボックスを作ってみましょう：

```css
.my-box {
    background-color: #あなたの好きな色;
    color: #あなたの好きな文字色;
    padding: 20px;
    margin: 20px 0;
    border-radius: 10px;
}
```

HTMLにも追加してね：

```html
<div class="my-box">
    <h2>私のボックス</h2>
    <p>これは私が作ったボックスです！</p>
</div>
```

### チャレンジ2：虹色のボックスを作る

7つのボックスを作って、虹の色にしてみよう！

```css
.rainbow1 { background-color: #ff0000; } /* 赤 */
.rainbow2 { background-color: #ff7f00; } /* オレンジ */
.rainbow3 { background-color: #ffff00; } /* 黄色 */
.rainbow4 { background-color: #00ff00; } /* 緑 */
.rainbow5 { background-color: #0000ff; } /* 青 */
.rainbow6 { background-color: #4b0082; } /* 藍色 */
.rainbow7 { background-color: #9400d3; } /* 紫 */
```

### チャレンジ3：文字の大きさをアニメーションのように変える

小さい文字から大きい文字まで、順番に並べてみよう！

```css
.size1 { font-size: 10px; }
.size2 { font-size: 15px; }
.size3 { font-size: 20px; }
.size4 { font-size: 25px; }
.size5 { font-size: 30px; }
```

## 便利なヒント

### 1. 色を簡単に選ぶ方法

**方法1：色の名前を使う**

```css
background-color: red; /* 赤 */
background-color: blue; /* 青 */
background-color: lightblue; /* うすい青 */
```

**方法2：カラーピッカーを使う**

- Googleで「カラーピッカー」と検索すると、色を選べるツールが出てきます！
- 選んだ色のコードをコピーして、CSSにはりつけましょう

### 2. ファイルを保存したら、ブラウザを更新しよう

CSSファイルを変更したら：

1. ファイルを保存する（Ctrl+S または Cmd+S）
2. ブラウザで更新ボタンを押す（F5キー）
3. 変更が反映されているか確認する

### 3. うまくいかないときは

- ファイルの名前が正しいか確認しよう（style.css）
- HTMLで `<link rel="stylesheet" href="style.css">` が書かれているか確認しよう
- スペルミスがないか確認しよう（background-color のつづり など）
- セミコロン `;` を忘れていないか確認しよう

## まとめ

今日学んだこと：

✅ **背景色を変える** → `background-color: #色のコード;`

✅ **文字の色を変える** → `color: #色のコード;`

✅ **文字の大きさを変える** → `font-size: 大きさpx;`

これらを組み合わせると、とってもカラフルで見やすいウェブページが作れます！

次回は、もっとたくさんのCSSのテクニックを学んでいきましょう！

がんばりましたね！🎉
