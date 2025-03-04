# Photon Chrome Extension

Photon Chrome Extension is designed to display the token creator's funding wallet address and its SOL and token balance. If the funding wallet belongs to a Centralized Exchange (CEX), the extension will also show the CEX name (e.g., Coinbase). The extension adds a "Show Funding" button on the [Photon Memescope](https://photon-sol.tinyastro.io/en/memescope/*) page for easy access to wallet details.

https://github.com/user-attachments/assets/03fe9e41-0397-4b74-936b-2e0e99c32c83

## Features

- **Funding Wallet Address**: Displays the wallet address of the token creator.
- **SOL and Token Balances**: Shows the balance of SOL and tokens in the funding wallet.
- **CEX Detection**: If the funding wallet is associated with a CEX account, the extension will display the name of the CEX (e.g., Coinbase).
- **"Show Funding" Button**: Adds a button on the [Photon Memescope](https://photon-sol.tinyastro.io/en/memescope/*) page to easily reveal the funding wallet details.

## Setup Instructions

### 1. Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/ilertha/Photon-Chrome-Extension.git
cd Photon-Chrome-Extension
```

### 2. Install Dependencies

Make sure you have Node.js and npm installed. Then, install the required dependencies by running:

```bash
npm install
```

### 3. Run the Build Script

To compile the source code and generate the necessary JavaScript files, run the following command:

```bash
npx webpack --config webpack.config
```
This will create a dist/ folder containing the bundled JavaScript files.

### 4. Load the Extension in Chrome

- Open Chrome and go to chrome://extensions/.
- Enable "Developer mode" by toggling the switch at the top-right corner.
- Click the "Load unpacked" button.
- Select the dist/ folder where the compiled extension files are located.

### 5. Use the Extension

Once the extension is loaded, go to Photon Memescope. You should see a "Show Funding" button that, when clicked, will display the funding wallet address, CEX name (if applicable), and wallet balances.

## Development

If you wish to modify the extension or work on its code, follow these steps:

1. Modify the source code as needed.
2. Run the webpack build process to update the dist/ folder:

```
npx webpack --config webpack.config
```
3. Reload the extension in Chrome by clicking the "Reload" button in the chrome://extensions/ page.

## Contact

Telegram ID: @ethualtera 
X ID: @ilertha 
