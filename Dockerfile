#imagem base
FROM node:18-alpine

#diretorio de trabalho
WORKDIR /usr/src/app

#Instalar dependencias
COPY package*.json ./
RUN npm install --force

#Copiar arquivos
COPY . .

#Iniciar aplicação

CMD ["npx", "expo", "start", ]