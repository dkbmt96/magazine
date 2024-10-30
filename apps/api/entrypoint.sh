#!/bin/sh

# Wait for MongoDB to be ready
until nc -z mongo 27017; do
  echo "Waiting for MongoDB..."
  sleep 2
done

echo "MongoDB is up and running!"

# Run the seed script
node seed.js

# Start the application
node index.js
