# Dockerfile pour le frontend
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Construire le projet React
RUN npm run build

# Exposer le port 3000 pour le frontend
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
