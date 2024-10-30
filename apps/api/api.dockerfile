# Use Node.js Alpine image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Copy the entrypoint script
COPY entrypoint.sh ./entrypoint.sh

# Give execute permissions
RUN chmod +x entrypoint.sh

# Expose the application port
EXPOSE 8911

# Set the entrypoint
ENTRYPOINT ["./entrypoint.sh"]