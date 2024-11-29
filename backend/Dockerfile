# Dockerfile pour le backend
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Exposer le port 3001 pour le backend
EXPOSE 3001

# Commande pour démarrer le backend
CMD ["npm", "run", "start:dev"]
