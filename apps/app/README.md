https://bobbyhadz.com/blog/react-module-not-found-cant-resolve-babel-runtime#module-not-found-cant-resolve-babelruntimehelpers

# 👇️  (macOS/Linux) delete node_modules and package-lock.json
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# 👇️ clean npm cache
npm cache clean --force

# 👇️ install packages
npm install

