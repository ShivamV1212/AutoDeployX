# Use official lightweight node image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy rest of the project files
COPY . .

# Expose the port your app uses
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]
