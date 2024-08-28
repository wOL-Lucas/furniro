FROM node:18 AS builder

WORKDIR /app

COPY .env .env

COPY api/package*.json ./

RUN npm install

COPY api/ ./

RUN npm run build

FROM node:18

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/dist ./dist

COPY --from=builder /app/.env .env

EXPOSE 3000

CMD ["node", "dist/main"]

