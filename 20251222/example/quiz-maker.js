// ===================================
// クイズメーカー - メインスクリプト
// ===================================

// 作成した問題を保存する配列
let myQuestions = [];
let previewIndex = 0;
let previewAnswered = false;
let previewSelected = null;

// DOM要素
const navTabs = document.querySelectorAll('.nav-tab');
const createTab = document.getElementById('createTab');
const previewTab = document.getElementById('previewTab');
const myquizTab = document.getElementById('myquizTab');

const questionType = document.getElementById('questionType');
const questionCategory = document.getElementById('questionCategory');
const questionText = document.getElementById('questionText');
const choiceInputs = document.getElementById('choiceInputs');
const fillInputs = document.getElementById('fillInputs');
const codeTemplate = document.getElementById('codeTemplate');
const correctFill = document.getElementById('correctFill');
const explanation = document.getElementById('explanation');

const addQuestionBtn = document.getElementById('addQuestionBtn');
const clearFormBtn = document.getElementById('clearFormBtn');
const exportBtn = document.getElementById('exportBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const copyCodeBtn = document.getElementById('copyCodeBtn');

const previewArea = document.getElementById('previewArea');
const previewBtns = document.getElementById('previewBtns');
const checkPreviewBtn = document.getElementById('checkPreviewBtn');
const nextPreviewBtn = document.getElementById('nextPreviewBtn');

const quizList = document.getElementById('quizList');
const exportCard = document.getElementById('exportCard');
const exportCode = document.getElementById('exportCode');

// カテゴリラベルのマップ
const categoryLabels = {
    html: 'HTML',
    css: 'CSS',
    js: 'JavaScript',
    files: 'ファイル構成',
    array: '配列',
    other: 'その他'
};

// ===== タブ切り替え =====
navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // アクティブ状態を更新
        navTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // タブコンテンツを切り替え
        const tabName = tab.dataset.tab;
        createTab.classList.toggle('hidden', tabName !== 'create');
        previewTab.classList.toggle('hidden', tabName !== 'preview');
        myquizTab.classList.toggle('hidden', tabName !== 'myquiz');
        
        // プレビュータブに移動したらプレビューを更新
        if (tabName === 'preview') {
            previewIndex = 0;
            previewAnswered = false;
            showPreview();
        }
        
        // マイクイズタブに移動したらリストを更新
        if (tabName === 'myquiz') {
            updateQuizList();
        }
    });
});

// ===== 問題タイプ切り替え =====
questionType.addEventListener('change', () => {
    if (questionType.value === 'choice') {
        choiceInputs.classList.remove('hidden');
        fillInputs.classList.add('hidden');
    } else {
        choiceInputs.classList.add('hidden');
        fillInputs.classList.remove('hidden');
    }
});

// ===== 問題を追加 =====
addQuestionBtn.addEventListener('click', () => {
    // バリデーション
    if (!questionText.value.trim()) {
        showToast('問題文を入力してください', 'error');
        questionText.focus();
        return;
    }
    
    if (!explanation.value.trim()) {
        showToast('解説を入力してください', 'error');
        explanation.focus();
        return;
    }
    
    const type = questionType.value;
    let newQuestion;
    
    if (type === 'choice') {
        // 選択肢のバリデーション
        const options = [];
        for (let i = 0; i < 4; i++) {
            const optionValue = document.getElementById(`option${i}`).value.trim();
            if (!optionValue) {
                showToast(`選択肢${String.fromCharCode(65 + i)}を入力してください`, 'error');
                document.getElementById(`option${i}`).focus();
                return;
            }
            options.push(optionValue);
        }
        
        const correct = parseInt(document.querySelector('input[name="correctAnswer"]:checked').value);
        
        newQuestion = {
            id: Date.now(),
            category: questionCategory.value,
            categoryLabel: categoryLabels[questionCategory.value],
            type: 'choice',
            question: questionText.value.trim(),
            options: options,
            correct: correct,
            explanation: explanation.value.trim()
        };
    } else {
        // 穴埋めのバリデーション
        if (!codeTemplate.value.trim()) {
            showToast('コードテンプレートを入力してください', 'error');
            codeTemplate.focus();
            return;
        }
        
        if (!codeTemplate.value.includes('_____')) {
            showToast('穴埋め部分を「_____」で指定してください', 'error');
            codeTemplate.focus();
            return;
        }
        
        if (!correctFill.value.trim()) {
            showToast('正解を入力してください', 'error');
            correctFill.focus();
            return;
        }
        
        newQuestion = {
            id: Date.now(),
            category: questionCategory.value,
            categoryLabel: categoryLabels[questionCategory.value],
            type: 'fill',
            question: questionText.value.trim(),
            codeTemplate: codeTemplate.value.trim(),
            correct: correctFill.value.trim(),
            explanation: explanation.value.trim()
        };
    }
    
    // 問題を追加
    myQuestions.push(newQuestion);
    saveToLocalStorage();
    
    // フォームをクリア
    clearForm();
    
    // 成功メッセージ
    showToast('問題を追加しました！ ✨');
    
    // ボタンの状態を更新
    updateButtonStates();
});

// ===== フォームをクリア =====
clearFormBtn.addEventListener('click', clearForm);

function clearForm() {
    questionText.value = '';
    explanation.value = '';
    codeTemplate.value = '';
    correctFill.value = '';
    
    for (let i = 0; i < 4; i++) {
        document.getElementById(`option${i}`).value = '';
    }
    document.querySelector('input[name="correctAnswer"][value="0"]').checked = true;
}

// ===== プレビュー表示 =====
function showPreview() {
    if (myQuestions.length === 0) {
        previewArea.innerHTML = '<p class="no-questions">まだ問題がありません。<br>「作成する」タブで問題を追加してね！</p>';
        previewBtns.classList.add('hidden');
        return;
    }
    
    previewBtns.classList.remove('hidden');
    checkPreviewBtn.classList.remove('hidden');
    nextPreviewBtn.classList.add('hidden');
    previewAnswered = false;
    previewSelected = null;
    
    const q = myQuestions[previewIndex];
    
    let html = `
        <div class="preview-question">
            <span class="preview-category">${q.categoryLabel}</span>
            <div class="preview-text">${escapeHtml(q.question)}</div>
    `;
    
    if (q.type === 'choice') {
        html += '<div class="preview-options">';
        q.options.forEach((option, index) => {
            const letter = String.fromCharCode(65 + index);
            html += `
                <button class="preview-option" data-index="${index}">
                    <span class="preview-letter">${letter}</span>
                    <span>${escapeHtml(option)}</span>
                </button>
            `;
        });
        html += '</div>';
    } else {
        const codeWithInput = escapeHtml(q.codeTemplate).replace('_____', 
            '<input type="text" class="preview-fill-input" id="previewFillInput" placeholder="答えを入力">'
        );
        html += `<div class="preview-code">${codeWithInput}</div>`;
    }
    
    html += `
            <div class="preview-explanation" id="previewExplanation">
                <div class="preview-explanation-title">💡 解説</div>
                <div class="preview-explanation-text">${escapeHtml(q.explanation)}</div>
            </div>
        </div>
    `;
    
    previewArea.innerHTML = html;
    
    // イベントリスナーを設定
    setupPreviewListeners(q);
}

function setupPreviewListeners(question) {
    if (question.type === 'choice') {
        document.querySelectorAll('.preview-option').forEach(btn => {
            btn.addEventListener('click', () => {
                if (previewAnswered) return;
                
                document.querySelectorAll('.preview-option').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                previewSelected = parseInt(btn.dataset.index);
            });
        });
    }
}

// 答えを確認
checkPreviewBtn.addEventListener('click', () => {
    if (myQuestions.length === 0 || previewAnswered) return;
    
    const q = myQuestions[previewIndex];
    previewAnswered = true;
    
    if (q.type === 'choice') {
        if (previewSelected === null) {
            showToast('選択肢を選んでください', 'error');
            previewAnswered = false;
            return;
        }
        
        document.querySelectorAll('.preview-option').forEach((btn, index) => {
            if (index === q.correct) {
                btn.classList.add('correct');
            } else if (index === previewSelected && previewSelected !== q.correct) {
                btn.classList.add('incorrect');
            }
        });
    } else {
        const input = document.getElementById('previewFillInput');
        if (!input.value.trim()) {
            showToast('答えを入力してください', 'error');
            previewAnswered = false;
            return;
        }
        
        const isCorrect = input.value.trim().toLowerCase() === q.correct.toLowerCase();
        input.disabled = true;
        
        if (isCorrect) {
            input.classList.add('correct');
        } else {
            input.classList.add('incorrect');
            input.value = q.correct;
        }
    }
    
    // 解説を表示
    document.getElementById('previewExplanation').classList.add('show');
    
    // ボタンを更新
    checkPreviewBtn.classList.add('hidden');
    nextPreviewBtn.classList.remove('hidden');
    if (previewIndex < myQuestions.length - 1) {
        nextPreviewBtn.textContent = '次の問題 →';
    } else {
        nextPreviewBtn.textContent = '最初に戻る 🔄';
    }
});

// 次の問題
nextPreviewBtn.addEventListener('click', () => {
    previewIndex++;
    if (previewIndex >= myQuestions.length) {
        previewIndex = 0;
    }
    showPreview();
});

// ===== マイクイズリスト更新 =====
function updateQuizList() {
    if (myQuestions.length === 0) {
        quizList.innerHTML = '<p class="no-questions">まだ問題がありません。</p>';
        exportCard.classList.add('hidden');
        return;
    }
    
    let html = '';
    myQuestions.forEach((q, index) => {
        const typeLabel = q.type === 'choice' ? '選択式' : '穴埋め式';
        html += `
            <div class="quiz-item" data-id="${q.id}">
                <div class="quiz-item-content">
                    <span class="quiz-item-category">${q.categoryLabel}</span>
                    <div class="quiz-item-text">${escapeHtml(q.question)}</div>
                    <div class="quiz-item-type">📝 ${typeLabel}</div>
                </div>
                <div class="quiz-item-actions">
                    <button class="quiz-item-btn delete" data-id="${q.id}">🗑️ 削除</button>
                </div>
            </div>
        `;
    });
    
    quizList.innerHTML = html;
    
    // 削除ボタンのイベント
    document.querySelectorAll('.quiz-item-btn.delete').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            myQuestions = myQuestions.filter(q => q.id !== id);
            saveToLocalStorage();
            updateQuizList();
            updateButtonStates();
            showToast('問題を削除しました');
        });
    });
}

// ===== エクスポート =====
exportBtn.addEventListener('click', () => {
    if (myQuestions.length === 0) return;
    
    exportCard.classList.remove('hidden');
    
    // JavaScript形式で出力
    let code = '// ===== 自作クイズ =====\n';
    code += 'const myCustomQuestions = [\n';
    
    myQuestions.forEach((q, index) => {
        code += '    {\n';
        code += `        id: ${q.id},\n`;
        code += `        category: "${q.category}",\n`;
        code += `        categoryLabel: "${q.categoryLabel}",\n`;
        code += `        type: "${q.type}",\n`;
        code += `        question: "${escapeForJS(q.question)}",\n`;
        
        if (q.type === 'choice') {
            code += `        options: ${JSON.stringify(q.options)},\n`;
            code += `        correct: ${q.correct},\n`;
        } else {
            code += `        codeTemplate: "${escapeForJS(q.codeTemplate)}",\n`;
            code += `        correct: "${escapeForJS(q.correct)}",\n`;
        }
        
        code += `        explanation: "${escapeForJS(q.explanation)}"\n`;
        code += '    }';
        if (index < myQuestions.length - 1) code += ',';
        code += '\n';
    });
    
    code += '];\n';
    
    exportCode.value = code;
});

// コピー
copyCodeBtn.addEventListener('click', () => {
    exportCode.select();
    document.execCommand('copy');
    showToast('コピーしました！ 📋');
});

// ===== 全削除 =====
clearAllBtn.addEventListener('click', () => {
    if (confirm('本当にすべての問題を削除しますか？')) {
        myQuestions = [];
        saveToLocalStorage();
        updateQuizList();
        updateButtonStates();
        exportCard.classList.add('hidden');
        showToast('すべての問題を削除しました');
    }
});

// ===== ユーティリティ =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function escapeForJS(text) {
    return text.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'success-toast';
    toast.textContent = message;
    if (type === 'error') {
        toast.style.background = '#ef4444';
    }
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function updateButtonStates() {
    const hasQuestions = myQuestions.length > 0;
    exportBtn.disabled = !hasQuestions;
    clearAllBtn.disabled = !hasQuestions;
}

// ===== ローカルストレージ =====
function saveToLocalStorage() {
    localStorage.setItem('myQuizQuestions', JSON.stringify(myQuestions));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('myQuizQuestions');
    if (saved) {
        try {
            myQuestions = JSON.parse(saved);
        } catch (e) {
            myQuestions = [];
        }
    }
}

// ===== 初期化 =====
function init() {
    loadFromLocalStorage();
    updateButtonStates();
}

init();

