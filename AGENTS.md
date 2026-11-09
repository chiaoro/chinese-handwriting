# 六上國語生字手寫闖關

## 專案用途

六上國語第一至十二課生字（期末範圍第七至十二課）的手寫練習網站（描紅、一般、進階、錯字再挑戰四種模式），紀錄存在瀏覽器 LocalStorage。詳細模組說明見 `README.md`。

## 執行方式

- 入口：`dist/index.html`（純靜態網站，不需安裝套件）。
- 本機預覽：`python -m http.server 8000 --directory dist`，再開 http://localhost:8000 （Service Worker 需要 HTTPS 或 localhost）。
- 測試：`node test-handwriting.cjs`。
- 發布：GitHub Pages https://chiaoro.github.io/chinese-handwriting/ （推送 main 後由 `.github/workflows/pages.yml` 自動發布 dist，repo 已於 2026-11-09 經使用者同意改公開；推送流程檔需用 gh 憑證）。備用：Claude Artifact https://claude.ai/artifact/7ZXyGQoraDEcqxaw1dGSdC ，頁面為 `dist/publish.html`（index.html 去掉外殼），連同 dist 內 css／js 一起發布。

## 工作規則

- 所有說明與 commit 訊息一律使用繁體中文（台灣用語）。
- 開始工作前先 git pull；每完成一項功能或修正，就用繁體中文寫 commit 說明並 push 到 GitHub。
- 不要把密碼、Token 寫死在程式裡；需要時放在 `.env`（已被 `.gitignore` 排除）。
