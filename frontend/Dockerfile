FROM node:18

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json package-lock.json* ./
RUN pnpm install

COPY . .

CMD ["pnpm", "run", "dev"]
