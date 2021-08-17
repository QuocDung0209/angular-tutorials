# Build application for production
yarn build
# npm run build # For NPM package manager

# Move to build folder
# dist/custom-directive-angular is "outputPath" in angular.json
cd dist/custom-directive-angular

# Clone index.html into 200.html
# This helps solve the "Page not found" issue when refreshing page with routing
cp index.html 200.html

# Start deploying via Surege
# The command means deploy current folder to domain angulartutorials.surge.sh
surge . angulartutorials.surge.sh
