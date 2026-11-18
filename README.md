# 聖經時間軸 Bible Timeline

依時間順序排列舊約與新約的 14 個時代、140 個事件，以兩條主軸架構：大衛・鮑森（David Pawson）是歷史軸，左側時間軸用他《新舊約縱覽全集》的四段五百年與兩段四百年沉默；提摩太・凱勒（Timothy Keller）是福音軸，每個事件標出它在「創造、墮落、救贖、更新」中的位置，每個時代附上凱勒「真正更美的那一位」的對照。每個事件都有雙語關鍵經文（和合本神版＋KJV）、背景與前因後果、預表與應驗，以及鮑森、凱勒兩人觀點並列；有爭議的題目收在「議題」，加入路易斯、巴刻、柯德納、陳恩藩、奈契托的分析。凱勒觀點只收錄找得到出處的事件，其餘留白。

- `index.html`：App 本體（純前端，無需建置）
- English version: tap "EN" in the header (stored in localStorage `bt-ui`). All interface text and content switch to English; scripture is KJV only. Translations live in `data/en/`, and `data/en/apply.js` swaps them in before the app starts.
- `data/`：時代、主題、牧者名單、事件資料（`events-ot.js`、`events-nt.js`）；`pawson-framework.js` 是鮑森框架（上層）；`keller.js` 是凱勒的福音軸與時代導讀；`issues.js` 是議題對照；`pawson-zonglan.js` 是《新舊約縱覽》逐講的導讀與事件觀點（已完成：啟示錄）
- `bible/zh`、`bible/en`：分卷經文 JSON

經文來源：新標點和合本（神版）取自 BibleAquifer（CC0 公有領域）；King James Version（公有領域）。ESV 有版權，僅以外部連結到 esv.org。牧者觀點為轉述摘要，請以原書核對。

GitHub Pages：Settings → Pages → Deploy from branch `main` / root。

## iPhone 使用

用 Safari 打開 GitHub Pages 網址 → 分享 → 「加入主畫面」，就會像 App 一樣全螢幕開啟。讀過的章節會快取，離線也能讀。手機上可左右滑動切換事件或章節，「字級」按鈕調整經文大小。
