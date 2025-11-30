// ホームページ専用のJavaScript

// ページが読み込まれたら実行
document.addEventListener('DOMContentLoaded', function() {
    console.log('ホームページ用スクリプト（home.js）が読み込まれました');
    
    // インタラクティブカードの機能
    setupInteractiveCards();
});

// インタラクティブカードの設定
function setupInteractiveCards() {
    const cards = document.querySelectorAll('.interactive-card');
    
    cards.forEach((card, index) => {
        // カードをクリックしたときの処理
        card.addEventListener('click', function() {
            // flippedクラスをトグル（追加/削除）
            this.classList.toggle('flipped');
            
            // カードの番号を取得
            const cardNumber = this.getAttribute('data-number');
            
            // 状態を判定
            const isFlipped = this.classList.contains('flipped');
            
            if (isFlipped) {
                console.log(`カード ${cardNumber} がひっくり返されました！`);
            } else {
                console.log(`カード ${cardNumber} が元に戻されました`);
            }
        });
        
        // ホバーエフェクト（マウスが乗ったとき）
        card.addEventListener('mouseenter', function() {
            console.log(`カード ${index + 1} にマウスが乗りました`);
        });
    });
    
    console.log(`${cards.length}枚のインタラクティブカードを設定しました`);
}

// すべてのカードをリセットする関数
function resetAllCards() {
    const cards = document.querySelectorAll('.interactive-card');
    cards.forEach(card => {
        card.classList.remove('flipped');
    });
    console.log('すべてのカードをリセットしました');
}

// すべてのカードをひっくり返す関数
function flipAllCards() {
    const cards = document.querySelectorAll('.interactive-card');
    cards.forEach(card => {
        card.classList.add('flipped');
    });
    console.log('すべてのカードをひっくり返しました');
}

// コンソールからカードを操作できるように関数をグローバルに公開
window.resetAllCards = resetAllCards;
window.flipAllCards = flipAllCards;

console.log('💡 ヒント：コンソールで resetAllCards() または flipAllCards() を実行してみてね！');

