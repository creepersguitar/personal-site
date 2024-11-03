#!/bin/bash

# Set script to exit on any error
set -e

echo "Starting the build process..."

# Clean previous build artifacts (optional)
rm -rf build/
rm -rf dist/

# Install dependencies
echo "Installing dependencies..."
npm install    # For Node.js applications

# Build the application
echo "Building the application..."
npm run build  # Assuming you have a build script defined in your package.json

# Optionally build Docker images if you're using Docker
# docker build -t your-app-name .

echo "Build process completed successfully!"
