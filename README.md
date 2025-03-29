# 藝術風格 - 個人藝術電商網站

這是一個專為藝術家設計的個人電商網站，用於展示和銷售藝術作品、服飾和珠寶。網站採用現代化的設計，具有藝術風格，並提供良好的用戶體驗。

## 功能特色

- **首頁**: 展示藝術家簡介和特色產品
- **關於我**: 詳細介紹藝術家背景和創作理念
- **產品展示**: 分類展示藝術作品、服飾和珠寶
- **聯絡方式**: 提供聯絡表單和聯絡資訊

## 技術棧

- [Next.js](https://nextjs.org/) - React 框架
- [TypeScript](https://www.typescriptlang.org/) - 靜態類型檢查
- [Tailwind CSS](https://tailwindcss.com/) - 用於快速UI設計的CSS框架
- [React Icons](https://react-icons.github.io/react-icons/) - 圖標庫
- [Framer Motion](https://www.framer.com/motion/) - 動畫庫

## 開始使用

### 安裝依賴

```bash
npm install
```

### 運行開發環境

```bash
npm run dev
```

打開 [http://localhost:3000](http://localhost:3000) 在瀏覽器中查看網站。

### 構建生產版本

```bash
npm run build
```

### 啟動生產服務器

```bash
npm run start
```

## 項目結構

```
/src
  /app                # Next.js App Router
    /about            # 關於我頁面
    /artwork          # 藝術作品頁面
    /clothing         # 服飾頁面
    /jewelry          # 珠寶頁面
    /contact          # 聯絡頁面
  /components         # 可重用組件
  /styles             # 全局樣式
/public               # 靜態資源
  /images             # 圖片資源
```

## 自定義和擴展

### 添加新產品

在相應的產品頁面中添加新產品數據。例如，在 `src/app/artwork/page.tsx` 中添加新的藝術作品。

### 修改主題顏色

主題顏色在 `src/app/globals.css` 中定義，可以根據需要進行修改。

```css
:root {
  --foreground-rgb: 51, 51, 51;
  --background-rgb: 249, 246, 240;
  --accent-color: 186, 121, 95;
  --accent-light: 225, 179, 156;
  --accent-dark: 112, 66, 50;
  --text-color: 51, 51, 51;
}
```

## SEO 優化

網站已經進行了基本的SEO優化，包括：

- 適當的標題標籤
- Meta描述
- 語義化HTML
- 響應式設計

## 貢獻

歡迎提交問題和改進建議。

## 許可證

MIT
