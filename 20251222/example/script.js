// ===================================
// まとめクイズ - メインスクリプト
// ===================================

// クイズデータ（全15問）
const allQuestions = [
    // ===== HTML 問題 (3問) =====
    {
        id: 1,
        category: "html",
        categoryLabel: "HTML",
        type: "choice",
        question: "ページの一番大きな見出しを作るタグはどれ？",
        options: ["<p>", "<h1>", "<div>", "<span>"],
        correct: 1,
        explanation: "<h1>は「見出し1」を意味し、ページで最も大きな見出しに使います。h1〜h6まであり、数字が大きくなるほど小さな見出しになります。"
    },
    {
        id: 2,
        category: "html",
        categoryLabel: "HTML",
        type: "choice",
        question: "ボタンを作るためのHTMLタグはどれ？",
        options: ["<btn>", "<input>", "<button>", "<click>"],
        correct: 2,
        explanation: "<button>タグでクリックできるボタンを作れます。<button>クリック</button>のように書きます。"
    },
    {
        id: 3,
        category: "html",
        categoryLabel: "HTML",
        type: "fill",
        question: "CSSファイルをHTMLに読み込むタグは何？",
        codeTemplate: '<_____ rel="stylesheet" href="style.css">',
        correct: "link",
        explanation: "<link>タグでCSSファイルを読み込みます。rel=\"stylesheet\"でスタイルシートであることを示します。"
    },

    // ===== CSS 問題 (3問) =====
    {
        id: 4,
        category: "css",
        categoryLabel: "CSS",
        type: "choice",
        question: "背景色を変えるCSSプロパティはどれ？",
        options: ["color", "background-color", "font-color", "bg-color"],
        correct: 1,
        explanation: "background-colorで背景色を設定します。colorは文字の色を変えるプロパティです。"
    },
    {
        id: 5,
        category: "css",
        categoryLabel: "CSS",
        type: "choice",
        question: "文字の色を赤にするにはどう書く？",
        options: ["color: red;", "text: red;", "font-color: red;", "red: color;"],
        correct: 0,
        explanation: "color: red; で文字を赤色にできます。色は red や blue などの名前、または #ff0000 のようなコードで指定できます。"
    },
    {
        id: 6,
        category: "css",
        categoryLabel: "CSS",
        type: "fill",
        question: "文字のサイズを32ピクセルにするには？",
        codeTemplate: "h1 {\n    font-_____: 32px;\n}",
        correct: "size",
        explanation: "font-size で文字の大きさを指定します。px（ピクセル）は大きさの単位です。"
    },

    // ===== JavaScript 基礎問題 (3問) =====
    {
        id: 7,
        category: "js",
        categoryLabel: "JavaScript",
        type: "choice",
        question: "変数を作るときに使うキーワードはどれ？",
        options: ["var count = 0;", "let count = 0;", "variable count = 0;", "set count = 0;"],
        correct: 1,
        explanation: "let または const で変数を作ります。let は後から値を変えられる変数、const は変えられない変数です。"
    },
    {
        id: 8,
        category: "js",
        categoryLabel: "JavaScript",
        type: "choice",
        question: "id=\"myButton\" のボタンを取得するには？",
        options: [
            "document.getElement('myButton')",
            "document.getElementById('myButton')",
            "document.findById('myButton')",
            "document.select('myButton')"
        ],
        correct: 1,
        explanation: "document.getElementById('ID名') で、そのIDを持つ要素を取得できます。"
    },
    {
        id: 9,
        category: "js",
        categoryLabel: "JavaScript",
        type: "fill",
        question: "ボタンがクリックされたときの処理を書くには？",
        codeTemplate: "button.addEventListener('_____', function() {\n    // 処理\n});",
        correct: "click",
        explanation: "addEventListener('click', ...) でクリックイベントを設定します。他にも 'mouseover'（マウスを乗せた時）などがあります。"
    },

    // ===== ファイル構成問題 (3問) =====
    {
        id: 10,
        category: "files",
        categoryLabel: "ファイル構成",
        type: "choice",
        question: "HTMLの役割は何？",
        options: [
            "ページの見た目を整える",
            "ページの骨組み（構造）を作る",
            "ページに動きをつける",
            "ページの色を変える"
        ],
        correct: 1,
        explanation: "HTMLはページの「骨組み」を作ります。CSSは「見た目」、JavaScriptは「動き」を担当します。"
    },
    {
        id: 11,
        category: "files",
        categoryLabel: "ファイル構成",
        type: "choice",
        question: "JavaScriptファイルを読み込む <script> タグは、どこに書くのがおすすめ？",
        options: [
            "<head> の中",
            "<body> の最初",
            "</body> の直前",
            "どこでも同じ"
        ],
        correct: 2,
        explanation: "</body>の直前に書くと、ページの内容が先に読み込まれてからJavaScriptが実行されます。"
    },
    {
        id: 12,
        category: "files",
        categoryLabel: "ファイル構成",
        type: "fill",
        question: "css フォルダの中にある style.css を読み込むには？",
        codeTemplate: '<link rel="stylesheet" href="_____/style.css">',
        correct: "css",
        explanation: "フォルダ名/ファイル名 の形式でパスを書きます。css/style.css で css フォルダの中の style.css を指定できます。"
    },

    // ===== 配列問題 (3問) =====
    {
        id: 13,
        category: "array",
        categoryLabel: "配列",
        type: "choice",
        question: "配列 colors = [\"赤\", \"青\", \"緑\"] で、「青」を取り出すには？",
        options: ["colors[1]", "colors[2]", "colors[\"青\"]", "colors.青"],
        correct: 0,
        explanation: "配列の番号は 0 から始まります。赤=0番目、青=1番目、緑=2番目 です。"
    },
    {
        id: 14,
        category: "array",
        categoryLabel: "配列",
        type: "fill",
        question: "配列の要素の数を取得するには？",
        codeTemplate: "const colors = [\"赤\", \"青\", \"緑\"];\nconsole.log(colors._____); // 3が表示される",
        correct: "length",
        explanation: "配列.length で配列の要素数を取得できます。この場合、3つの要素があるので 3 が返ります。"
    },
    {
        id: 15,
        category: "array",
        categoryLabel: "配列",
        type: "choice",
        question: "0〜5のランダムな整数を作るには？",
        options: [
            "Math.random(5)",
            "Math.random() * 5",
            "Math.floor(Math.random() * 6)",
            "random(0, 5)"
        ],
        correct: 2,
        explanation: "Math.random() は 0〜1 の小数を返します。6をかけて Math.floor() で小数点以下を切り捨てると、0〜5の整数になります。"
    }
];

// ゲーム状態
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let answered = false;
let categoryResults = {
    html: { correct: 0, total: 0 },
    css: { correct: 0, total: 0 },
    js: { correct: 0, total: 0 },
    files: { correct: 0, total: 0 },
    array: { correct: 0, total: 0 }
};

// DOM要素
const quizArea = document.getElementById('quizArea');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const scoreValue = document.getElementById('scoreValue');
const resultScreen = document.getElementById('resultScreen');
const categoryNav = document.getElementById('categoryNav');
const restartBtn = document.getElementById('restartBtn');

// 初期化
function init() {
    currentQuestions = [...allQuestions];
    shuffleArray(currentQuestions);
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    answered = false;
    categoryResults = {
        html: { correct: 0, total: 0 },
        css: { correct: 0, total: 0 },
        js: { correct: 0, total: 0 },
        files: { correct: 0, total: 0 },
        array: { correct: 0, total: 0 }
    };
    
    resultScreen.style.display = 'none';
    quizArea.style.display = 'block';
    categoryNav.style.display = 'flex';
    
    updateProgress();
    updateScore();
    showQuestion();
}

// 配列をシャッフル
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// カテゴリでフィルタ
function filterByCategory(category) {
    if (category === 'all') {
        currentQuestions = [...allQuestions];
    } else {
        currentQuestions = allQuestions.filter(q => q.category === category);
    }
    shuffleArray(currentQuestions);
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    answered = false;
    
    // カテゴリ結果をリセット
    Object.keys(categoryResults).forEach(key => {
        categoryResults[key] = { correct: 0, total: 0 };
    });
    
    resultScreen.style.display = 'none';
    quizArea.style.display = 'block';
    
    updateProgress();
    updateScore();
    showQuestion();
}

// プログレス更新
function updateProgress() {
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex} / ${currentQuestions.length}`;
}

// スコア更新
function updateScore() {
    scoreValue.textContent = score;
    document.querySelector('.score-total').textContent = `/ ${currentQuestions.length}`;
}

// 問題を表示
function showQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showResult();
        return;
    }
    
    const q = currentQuestions[currentQuestionIndex];
    selectedOption = null;
    answered = false;
    
    let html = `
        <div class="question-card">
            <span class="question-category">${q.categoryLabel}</span>
            <div class="question-number">問題 ${currentQuestionIndex + 1} / ${currentQuestions.length}</div>
            <div class="question-text">${q.question}</div>
    `;
    
    if (q.type === 'choice') {
        html += '<div class="options-list">';
        q.options.forEach((option, index) => {
            const letter = String.fromCharCode(65 + index); // A, B, C, D
            html += `
                <button class="option-btn" data-index="${index}">
                    <span class="option-letter">${letter}</span>
                    <span class="option-text">${escapeHtml(option)}</span>
                </button>
            `;
        });
        html += '</div>';
    } else if (q.type === 'fill') {
        // 穴埋め問題
        const codeWithInput = q.codeTemplate.replace('_____', 
            '<input type="text" class="code-input" id="fillInput" placeholder="答えを入力" autocomplete="off">'
        );
        html += `
            <div class="code-question">
                <pre>${codeWithInput}</pre>
            </div>
        `;
    }
    
    html += `
            <div class="explanation" id="explanation">
                <div class="explanation-title">💡 解説</div>
                <div class="explanation-text">${q.explanation}</div>
            </div>
            
            <div class="btn-group">
                <button class="check-btn" id="checkBtn" disabled>答えを確認</button>
                <button class="next-btn" id="nextBtn">次の問題 →</button>
            </div>
        </div>
    `;
    
    quizArea.innerHTML = html;
    
    // イベントリスナーを設定
    setupEventListeners(q);
}

// HTMLエスケープ
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// イベントリスナー設定
function setupEventListeners(question) {
    const checkBtn = document.getElementById('checkBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (question.type === 'choice') {
        // 選択肢のクリック
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (answered) return;
                
                document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedOption = parseInt(btn.dataset.index);
                checkBtn.disabled = false;
            });
        });
    } else if (question.type === 'fill') {
        // 入力欄
        const fillInput = document.getElementById('fillInput');
        fillInput.addEventListener('input', () => {
            checkBtn.disabled = fillInput.value.trim() === '';
        });
        fillInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && fillInput.value.trim() !== '') {
                checkAnswer(question);
            }
        });
    }
    
    // 答えを確認
    checkBtn.addEventListener('click', () => checkAnswer(question));
    
    // 次の問題
    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        updateProgress();
        showQuestion();
    });
}

// 答えをチェック
function checkAnswer(question) {
    if (answered) return;
    answered = true;
    
    const checkBtn = document.getElementById('checkBtn');
    const nextBtn = document.getElementById('nextBtn');
    const explanation = document.getElementById('explanation');
    
    let isCorrect = false;
    
    if (question.type === 'choice') {
        isCorrect = selectedOption === question.correct;
        
        // 選択肢の状態を更新
        document.querySelectorAll('.option-btn').forEach((btn, index) => {
            btn.classList.add('disabled');
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === selectedOption && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
    } else if (question.type === 'fill') {
        const fillInput = document.getElementById('fillInput');
        const userAnswer = fillInput.value.trim().toLowerCase();
        const correctAnswer = question.correct.toLowerCase();
        
        isCorrect = userAnswer === correctAnswer;
        
        fillInput.disabled = true;
        if (isCorrect) {
            fillInput.classList.add('correct');
        } else {
            fillInput.classList.add('incorrect');
            // 正解を表示
            fillInput.value = question.correct;
        }
    }
    
    // 結果を記録
    categoryResults[question.category].total++;
    if (isCorrect) {
        score++;
        categoryResults[question.category].correct++;
        updateScore();
    }
    
    // 解説を表示
    explanation.classList.add('show');
    
    // ボタンの状態を更新
    checkBtn.style.display = 'none';
    nextBtn.classList.add('show');
    
    // フィードバックアニメーション
    const feedbackIcon = document.createElement('div');
    feedbackIcon.className = `feedback-icon ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackIcon.textContent = isCorrect ? '⭕' : '❌';
    quizArea.insertBefore(feedbackIcon, quizArea.firstChild);
}

// 結果を表示
function showResult() {
    quizArea.style.display = 'none';
    resultScreen.style.display = 'block';
    categoryNav.style.display = 'none';
    
    const finalScore = document.getElementById('finalScore');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const resultBreakdown = document.getElementById('resultBreakdown');
    
    finalScore.textContent = score;
    document.querySelector('.final-total').textContent = `/ ${currentQuestions.length} 問正解`;
    
    // 結果に応じたメッセージ
    const percentage = (score / currentQuestions.length) * 100;
    if (percentage === 100) {
        resultTitle.textContent = '🏆 パーフェクト！';
        resultMessage.textContent = 'すべて正解！すばらしい！これまでの授業をしっかり理解していますね！';
    } else if (percentage >= 80) {
        resultTitle.textContent = '🎉 すごい！';
        resultMessage.textContent = 'とてもよくできました！しっかり復習できていますね！';
    } else if (percentage >= 60) {
        resultTitle.textContent = '👍 がんばりました！';
        resultMessage.textContent = '基本は理解できています！間違えたところを復習してみましょう。';
    } else if (percentage >= 40) {
        resultTitle.textContent = '📚 もう少し！';
        resultMessage.textContent = 'もう一度チャレンジしてみましょう！READMEを読み返すと良いかも。';
    } else {
        resultTitle.textContent = '💪 ファイト！';
        resultMessage.textContent = '今回は難しかったかな？これまでの授業を復習してみましょう！';
    }
    
    // カテゴリ別結果
    let breakdownHtml = '';
    const categoryLabels = {
        html: 'HTML',
        css: 'CSS',
        js: 'JavaScript',
        files: 'ファイル構成',
        array: '配列'
    };
    
    Object.keys(categoryResults).forEach(key => {
        const result = categoryResults[key];
        if (result.total > 0) {
            const isCorrect = result.correct === result.total;
            breakdownHtml += `
                <div class="breakdown-item ${isCorrect ? 'correct' : (result.correct === 0 ? 'incorrect' : '')}">
                    ${categoryLabels[key]}: ${result.correct}/${result.total}
                </div>
            `;
        }
    });
    resultBreakdown.innerHTML = breakdownHtml;
}

// カテゴリボタンのイベント
categoryNav.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-btn')) {
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        filterByCategory(e.target.dataset.category);
    }
});

// リスタートボタン
restartBtn.addEventListener('click', () => {
    // 全部カテゴリに戻す
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');
    init();
});

// ゲーム開始
init();

