#!/bin/bash

# Set script to exit on any error
set -e

echo "Starting the deployment process..."

# Check for required environment variables
if [ -z "$DEPLOY_ENV" ]; then
    echo "Error: DEPLOY_ENV is not set. Please set it to 'production' or 'staging'."
    exit 1
fi

# Deploy the application (modify this part according to your deployment method)
if [ "$DEPLOY_ENV" == "production" ]; then
    echo "Deploying to production environment..."
    # Example for Docker
    docker-compose -f docker-compose.prod.yml up -d --build

elif [ "$DEPLOY_ENV" == "staging" ]; then
    echo "Deploying to staging environment..."
    docker-compose -f docker-compose.staging.yml up -d --build

else
    echo "Unknown environment: $DEPLOY_ENV"
    exit 1
fi

echo "Deployment process completed successfully!"
