# Check OS version
echo "Client: Check OS version =============="
cat /etc/os-release

# Install Nodejs
echo "Client: Install Nodejs =============="
# curl -sL https://deb.nodesource.com/setup_12.x |
# apt-get update
# apt install -y nodejs

echo "Client: Node and Npm Versions =============="
node --version
npm --version


# Prepare Client
echo "Client: Install Dependencies =============="
cd ./client
npm install

# Build Angular
echo "Client: Build Angular =============="
npm run build

# Copy Client Layer to Server Layer to Host
echo "Client: Copy to Dist to Server Layer =============="
mv ./client/dist ./src/views -y

# Helm Chart - Copy to Server Layer
echo "Helm Chart - Copy to Server Layer =============="
mv ./charts/*.* ./src/views/charts -y

# Debug - List Folder Content
echo "Debug - List Folder Content =============="
cd ../src/views
ls -la ./
ls -la ./charts
cat ./charts/index.yaml