# Use Node.js Alpine image
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY . .

# Install dependencies
RUN npm install

# Build the application
RUN yarn build

# Use a smaller image for serving the app
FROM nginx:alpine

# Copy built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/default.conf /etc/nginx/conf.d

# Expose the port
EXPOSE 5173

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
