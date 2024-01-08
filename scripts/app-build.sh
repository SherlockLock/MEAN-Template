#!/bin/sh

#This script is used on your local machine to automatically create the angular build folder for the server to send

# Remove current production folder
echo 'Removing current production build'
rm -r ../backend/app

# Build new angular project
echo 'Building production folder'
pushd ../frontend && ng build && popd || exit

# Move created dist project to backend
echo 'Moving production folder to backend'
mv ../frontend/dist/app ../backend/app || exit

# Delete dist folder from frontend
echo 'Removing dist folder from frontend'
rm -r ../frontend/dist || exit

echo 'Completed app build'
exit
