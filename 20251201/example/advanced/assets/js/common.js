// 共通JavaScript - すべてのページで使われる

// ページが読み込まれたときに実行
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== 発展的な構成のサンプル ===');
    console.log('ファイル構成：assets/css/, assets/js/ で整理');
    console.log('共通スクリプト（common.js）が読み込まれました');
    
    // 現在のページを表示
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    console.log('現在のページ：' + currentPage);
});

// スムーズスクロール機能
function smoothScrollTo(element) {
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 時刻を返す関数
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// ページロード時間を測定
const pageLoadStart = performance.now();

window.addEventListener('load', function() {
    const pageLoadEnd = performance.now();
    const loadTime = (pageLoadEnd - pageLoadStart).toFixed(2);
    console.log(`ページの読み込み時間：${loadTime}ms`);
});

