# 六上國語生字手寫本

## 專案用途

六上國語第一至十二課生字的手寫練習與測驗網站（2026-11-09 合併 Claude 版生字手寫本與舊版生字手寫闖關，入口 `dist/index.html` 單一檔案；舊版保留在 `dist/classic/`），紀錄存在瀏覽器 LocalStorage。詳細模組說明見 `README.md`。

## 執行方式

- 入口：`dist/index.html`（純靜態網站，不需安裝套件）。
- 本機預覽：`python -m http.server 8000 --directory dist`，再開 http://localhost:8000 （Service Worker 需要 HTTPS 或 localhost）。
- 測試：`node test-handwriting.cjs`。
- 發布：GitHub Pages https://chiaoro.github.io/chinese-handwriting/ （推送 main 後由 `.github/workflows/pages.yml` 自動發布 dist，repo 已於 2026-11-09 經使用者同意改公開；推送流程檔需用 gh 憑證）。舊的 Claude Artifact 備用版（7ZXyGQoraDEcqxaw1dGSdC）停在合併前的版本，不再更新。

## 工作規則

- 所有說明與 commit 訊息一律使用繁體中文（台灣用語）。
- 開始工作前先 git pull；每完成一項功能或修正，就用繁體中文寫 commit 說明並 push 到 GitHub。
- 不要把密碼、Token 寫死在程式裡；需要時放在 `.env`（已被 `.gitignore` 排除）。
