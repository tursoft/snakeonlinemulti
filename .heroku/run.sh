# Check OS version
echo "Client: Check OS version =============="
cat /etc/os-release

echo "Client: Copy to Server =============="
# mv ./.heroku ./server/.heroku-scripts
mv ./client ./server/client

# Debug - List Folder Content
echo "Debug - List Folder Content =============="
ls -la ./server