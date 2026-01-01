# Stars Stacker

![License](https://img.shields.io/github/license/dy0110/stars-stacker)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5-5A0EF8?logo=daisyui)

UCG盤面管理ツール

![Stars Stacker Screenshot](public/screenshot.png)

## 機能

- **ラウンド管理**: ラウンドごとにカード枠が自動的に追加されます。画面右側の「追加」ボタンで新しいラウンドを開始できます。
- **BP操作**: BPの上げ下げ、グレードアップ、グレードダウンなど、BPの変化を記録できます。
- **先行/後攻切替**: 中央の「先行」または「後攻」ボタンで、自分と相手の順番を切り替えられます。

## 技術スタック

- **フレームワーク**: React 19, React Router 7
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS 4, DaisyUI 5
- **ビルドツール**: Vite
- **PWA**: vite-plugin-pwa

## 始め方

### インストール

依存関係をインストールします：

```bash
npm install
```

### 開発

開発サーバーを起動します：

```bash
npm run dev
```

アプリケーションは `http://localhost:5173` で利用可能になります。

### 本番ビルド

本番用ビルドを作成します：

```bash
npm run build
```

## ライセンス

このプロジェクトは MPL-2.0 ライセンスの下で公開されています。
