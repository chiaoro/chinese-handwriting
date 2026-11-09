# 六上國語生字手寫闖關

這是獨立靜態網站，入口為 `dist/index.html`。原有 `chinese-quiz` 國語閱讀網站未接入此站，檔案與部署識別均分開。

## 模組

- `dist/handwriting-bank.js`：第一至六課 101 字（期中，依課本生字欄）＋第七至十二課 109 字（期末，依「國語期末生字表.pdf」核對，無頁碼）。字與注音依所附六份課本 PDF 生字欄核對；語詞和練習句並非課文原句。學習地圖缺少可獨立核對的生字欄，未編造題目。
- `dist/handwriting-canvas.js`：Pointer Events、多筆畫、復原、清空、裝置像素比、尺寸重繪與 PNG 匯出方法。
- `dist/handwriting-grading.js`：自我核對積分與未來辨識服務介面。目前無自動辨識或筆順判定。
- `dist/handwriting-storage.js`：瀏覽器本機紀錄及 JSON 匯出／匯入。
- `dist/handwriting-selection.js`：記住各模式、課次最近出過的字，下一回合優先抽未出現的字；全部題目會重新排列。
- `dist/sw.js`：HTTPS 首次成功載入後快取本站檔案，供離線重開。

## 使用與限制

四種模式為基礎描紅、一般挑戰、進階挑戰及錯字再挑戰。單課不足 20 題時會提示改選 10 題或全部；錯字清單不足 10 題仍可開始。一般與進階模式須先書寫才能交卷，交卷後顯示正字，由學生自行核對。提示題保留待複習狀態；錯字模式可選每字連寫三次。各課全部生字完成且無待複習狀態時顯示星星。

紀錄僅存在目前瀏覽器與裝置的 LocalStorage，不會跨裝置同步。匯入檔案會覆蓋該裝置紀錄，請先匯出備份。筆跡預設不上傳。

## 測試與部署

在本資料夾執行 `node test-handwriting.cjs`，涵蓋題庫、跨回合出題、計分、錯字狀態、本機儲存、畫布多筆畫、尺寸重繪及獨立首頁。網站可將 `dist` 作為靜態網站目錄發布。Service Worker 需要 HTTPS 或 localhost。

仍需在 iPhone Safari、iPad Safari（含 Apple Pencil）、Android Chrome 及桌面瀏覽器做實機書寫驗收。
