# Grocery App - React Native

<p>A modern and responsive grocery shopping app built with <strong>React Native</strong>, Redux Toolkit, and dummy API data. This app allows users to explore groceries, add items to the cart, mark favourites, and view detailed product information.</p>

<hr />

## Table of Contents

<ul>
  <li><a href="#features">Features</a></li>
  <li><a href="#screenshots">Screenshots</a></li>
  <li><a href="#technologies-used">Technologies Used</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#folder-structure">Folder Structure</a></li>
  <li><a href="#redux-state-management">Redux State Management</a></li>
  <li><a href="#api-integration">API Integration</a></li>
  <li><a href="#troubleshooting">Troubleshooting</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
</ul>

<hr />

## Features

<ul>
  <li>Browse exclusive, best-selling, and grocery products</li>
  <li>Search bar functionality for quick product search</li>
  <li>Add items to the cart with dynamic quantity selection</li>
  <li>Favourite products with heart toggle</li>
  <li>Product details screen with description and price</li>
  <li>Bottom Tab Navigation for easy access to Shop, Explore, Cart, Favourite, and Account screens</li>
  <li>Responsive UI compatible with different screen sizes</li>
</ul>

<hr />

## Screenshots

<p><em>(Add screenshots of your app here)</em></p>

<div>
  <h4>Home Screen</h4>
  <img src="./assets/screenshots/home.png" alt="Home Screen" width="300"/>
</div>

<div>
  <h4>Product Detail Screen</h4>
  <img src="./assets/screenshots/product_detail.png" alt="Product Detail" width="300"/>
</div>

<div>
  <h4>Cart Screen</h4>
  <img src="./assets/screenshots/cart.png" alt="Cart Screen" width="300"/>
</div>

<hr />

## Technologies Used

<ul>
  <li><strong>React Native</strong> – Framework for building cross-platform mobile apps</li>
  <li><strong>Redux Toolkit</strong> – Efficient state management solution</li>
  <li><strong>React Navigation</strong> – Stack & Bottom Tab navigation</li>
  <li><strong>DummyJSON API</strong> – Fetch grocery product data</li>
  <li><strong>React Native Vector Icons</strong> – For icons in the app</li>
</ul>

<hr />

## Installation

<p><strong>Note:</strong> Make sure you have completed the <a href="https://reactnative.dev/docs/environment-setup">Set Up Your Environment</a> guide before proceeding.</p>

<ol>
  <li>
    <p>Clone the repository:</p>
    <pre><code>git clone https://github.com/Tabish-Farooq/GroceriesApp.git</code></pre>
  </li>
  <li>
    <p>Navigate to project folder:</p>
    <pre><code>cd GroceriesApp</code></pre>
  </li>
  <li>
    <p>Install dependencies:</p>
    <pre><code>npm install
# or
yarn install</code></pre>
  </li>
  <li>
    <p>Start Metro bundler:</p>
    <pre><code>npm start
# or
yarn start</code></pre>
  </li>
  <li>
    <p>Run on Android:</p>
    <pre><code>npm run android
# or
yarn android</code></pre>
  </li>
  <li>
    <p>Run on iOS (Mac only):</p>
    <pre><code>bundle install
bundle exec pod install
npm run ios
# or
yarn ios</code></pre>
  </li>
</ol>

<p>💡 Tip: Use <code>npx react-native doctor</code> to check your environment setup</p>

<hr />

## Usage

<ul>
  <li>Explore grocery products on <strong>Home Screen</strong></li>
  <li>Tap heart icon to mark items as favourites</li>
  <li>Add items to <strong>Cart</strong> and modify quantity</li>
  <li>View detailed <strong>Product Information</strong> by tapping any item</li>
  <li>Use Bottom Tab Navigation to switch between Shop, Explore, Cart, Favourite, and Account</li>
  <li>Fast Refresh updates app automatically on save</li>
</ul>

<p><strong>Force Reload:</strong></p>
<ul>
  <li>Android: Press <kbd>R</kbd> twice or <kbd>Ctrl</kbd> + <kbd>M</kbd> / <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> for Dev Menu</li>
  <li>iOS: Press <kbd>R</kbd> in iOS Simulator</li>
</ul>

<hr />

## Folder Structure

<pre>
GroceriesApp/
├─ android/              # Android native files
├─ ios/                  # iOS native files
├─ src/
│  ├─ assets/            # Images, fonts, icons
│  ├─ components/        # Reusable UI components
│  ├─ screens/           # All app screens
│  ├─ redux/             # Redux slices and store
│  ├─ Navigation/        # React Navigation setup
│  ├─ repository/        # API requests and data fetching
│  └─ utils/             # Constants, endpoints, helpers
├─ App.jsx               # Root component
├─ package.json
└─ README.md
</pre>

<hr />

## Redux State Management

<ul>
  <li><strong>cartSlice.js</strong> – Manage cart items, total quantity, and total price</li>
  <li><strong>favouriteSlice.js</strong> – Handle favourite products toggle</li>
  <li><strong>store.js</strong> – Combine slices and provide Redux store to the app</li>
</ul>

<hr />

## API Integration

<ul>
  <li><strong>API Used:</strong> DummyJSON API</li>
  <li><strong>Product Fields:</strong> name, price, description, image</li>
  <li><strong>File:</strong> src/repository/ProductsRepository.js</li>
  <li>Can be replaced with a real backend API if needed</li>
</ul>

<hr />

## Troubleshooting

<ul>
  <li>Use <code>npx react-native doctor</code> to identify environment issues</li>
  <li>Ensure ADB is running and device/emulator is connected for Android</li>
  <li>Reset Metro cache: <code>npm start --reset-cache</code> or <code>yarn start --reset-cache</code></li>
  <li>For iOS: Make sure CocoaPods dependencies are installed</li>
</ul>

<hr />

## Contributing

<ol>
  <li>Fork the repository</li>
  <li>Create a new branch: <code>git checkout -b feature/YourFeature</code></li>
  <li>Commit changes: <code>git commit -m "Add new feature"</code></li>
  <li>Push to branch: <code>git push origin feature/YourFeature</code></li>
  <li>Open a Pull Request</li>
</ol>

<hr />

## License

<p>This project is licensed under the <strong>MIT License</strong>. See the <a href="LICENSE">LICENSE</a> file for details.</p>
