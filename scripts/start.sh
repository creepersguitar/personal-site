#!/bin/bash

# Set script to exit on any error
set -e

echo "Starting the application..."

# Start the application (modify this part according to your setup)
# Example for a Node.js application
npm start  # This assumes you have a start script defined in your package.json

# Alternatively, if using Docker
# docker-compose up -d

echo "Application has started successfully!"
