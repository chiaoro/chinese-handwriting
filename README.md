# 六上國語生字手寫本

線上版：https://chiaoro.github.io/chinese-handwriting/ （推送 main 後由 `.github/workflows/pages.yml` 自動發布 `dist`）

## 內容

- `dist/index.html`：合併版「國語生字手寫本」，單一檔案。以 Claude 版「生字手寫本」為主體（大田字格、筆跡平滑、防手掌誤觸、對照課本字、錯字本、家長檢查、最終測驗＋家長批改），加入舊版「生字手寫闖關」的期中／期末範圍、描紅與進階（限時 90 秒）模式、錯字連寫三次、紀錄匯出／匯入。
  - 第一～六課 108 字沿用生字手寫本（依課本生字欄）；第七～十二課 109 字依「國語期末生字表.pdf」與課本生字欄核對。語詞取自課文或常見詞。
  - 紀錄存在瀏覽器 LocalStorage（key `hanziWrite.v2`），含手寫筆跡縮圖，不會上傳。
- `dist/sw.js`：首次開啟後快取，可離線使用。
- `dist/classic/`：舊版「生字手寫闖關」原檔保留（紀錄 key `grade6-chinese-handwriting-v1`，與新版分開）。

## 測試

- 新版：用 `python -m http.server 8000 --directory dist` 開啟，實際手寫測試（電腦與手機尺寸）。
- 舊版模組測試：`node test-handwriting.cjs`（測 `dist/classic`）。
