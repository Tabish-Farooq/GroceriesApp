# Grocery App - React Native

<p>A modern and responsive grocery shopping app built with <strong>React Native</strong>, Redux Toolkit, and dummy API data. This app allows users to explore groceries, add items to the cart, mark favourites, and view detailed product information.</p>

<hr />

## Table of Contents

<ul>
  <li><a href="#features">Features</a></li>
  <li><a href="#app-flow">App Flow</a></li>
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

## App Flow

<p>The app follows this flow from start to finish:</p>

<div style="text-align:center;">
  <strong>HomeScreen → LoginScreen → OTPScreen → APIFetchScreen → MainScreen → ProductDetailScreen → ExploreScreen → EmptyCartScreen → CartScreen → EmptyFavouriteScreen → FavouriteScreen → ProfileScreen</strong>
</div>

<div style="text-align:center; margin-top:10px;">
  <img src="C:/Users/DELL/Downloads/projectSS/Screenshot (43).png" alt="App Flow Diagram" width="600"/>
</div>

<hr />

## Screenshots

| Home Screen | Login Screen | OTP Screen |
|-------------|--------------|------------|
| <img src="./src/assets/screenshots/HomeScreen.jpg" width="250"/> &nbsp; | <img src="./src/assets/screenshots/LoginScreen.jpg" width="250"/> &nbsp; | <img src="./src/assets/screenshots/OTPScreen.jpg" width="250"/> |

| API Fetch | Main Screen | Product Detail |
|-----------|-------------|----------------|
| <img src="./src/assets/screenshots/apiFetchScreen.jpg" width="250"/> &nbsp; | <img src="./src/assets/screenshots/MainScreen.jpg" width="250"/> &nbsp; | <img src="./src/assets/screenshots/ProductDetailScreen.jpg" width="250"/> |

| Explore Screen | Cart Screen | Empty Cart Screen |
|----------------|-------------|-------------------|
| <img src="./src/assets/screenshots/ExploreScreen.jpg" width="250"/> &nbsp; | <img src="./src/assets/screenshots/CartScreen.jpg" width="250"/> &nbsp; | <img src="./src/assets/screenshots/EmptyCartScreen.jpg" width="250"/> |

| Empty Favourite | Profile Screen |   |
|-----------------|----------------|---|
| <img src="./src/assets/screenshots/EmptyFavouriteScreen.jpg" width="250"/> &nbsp; | <img src="./src/assets/screenshots/ProfileScreen.jpg" width="250"/> &nbsp; |   |




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
  <li>Clone the repository:
    <pre><code>git clone https://github.com/Tabish-Farooq/GroceriesApp.git</code></pre>
  </li>
  <li>Navigate to project folder:
    <pre><code>cd GroceriesApp</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install
# or
yarn install</code></pre>
  </li>
  <li>Start Metro bundler:
    <pre><code>npm start
# or
yarn start</code></pre>
  </li>
  <li>Run on Android:
    <pre><code>npm run android
# or
yarn android</code></pre>
  </li>
  <li>Run on iOS (Mac only):
    <pre><code>bundle install
bundle exec pod install
npm run ios
# or
yarn ios</code></pre>
  </li>
</ol>

<p>💡 Tip: Use <code>npx react-native doctor</code> to check your environment setup</p>
