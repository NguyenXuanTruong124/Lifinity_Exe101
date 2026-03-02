# Sử dụng node phiên bản nhẹ
FROM node:20-alpine

WORKDIR /app

# Cài đặt công cụ 'serve'
RUN npm install -g serve

# Copy package files
COPY package*.json ./

# SỬA LẠI DÒNG NÀY: 
# Cài đặt đầy đủ các dependency, bao gồm cả các gói binary cho Linux
RUN npm install --include=optional && npm install @rollup/rollup-linux-x64-musl

# Copy toàn bộ source code
COPY . .

# Build ứng dụng
RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]