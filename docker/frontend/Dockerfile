# Node.js のイメージをベースにする
FROM node:latest

# アプリケーションのワーキングディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY ./frontend/package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY ./frontend .

# アプリケーションがリッスンするポートを指定
EXPOSE 3000

# アプリケーションの起動コマンド
CMD ["npm", "run", "serve"]
