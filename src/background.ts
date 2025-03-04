import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

const walletList = {
  "Binance": [
    "53unSgGWqEWANcPYRF35B2Bgf8BkszUtcccKiXwGGLyr",
    "6QJzieMYfp7yr3EdrePaQoG3Ghxs2wM98xSLRu8Xh56U",
    "3gd3dqgtJ4jWfBfLYTX67DALFetjc5iS72sCgRhCkW2u",
    "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM",
    "5tzFkiKscXHK5ZXCGbXZxdw7gTjjD1mBwuoFbhUvuAi9",
    "2ojv9BAiHUrvsm9gxDe7fJSzbNZSJcxZvf8dqmWGHG8S",
    "3yFwqXBfZY4jBVUafQ1YEXw189y2dN3V5KQq9uzBDy1E"
  ],
  "CoinBase": [
    "59L2oxymiQQ9Hvhh92nt8Y7nDYjsauFkdb3SybdnsG6h",
    "XkCriyrNwS3G4rzAXtG5B1nnvb5Ka1JtCku93VqeKAr",
    "H8sMJSCQxfKiFTCfDR3DUMLPwcRbM61LGFJ8N4dK3WjS",
    "2AQdpHJ2JpcEgPiATUXjQxA8QmafFegfQwSLWSprPicm",
    "9obNtb5GyUegcs3a1CbBkLuc5hEWynWfJC6gjz5uWQkE",
    "CW9C7HBwAMgqNdXkNgFg9Ujr3edR2Ab9ymEuQnVacd1A",
    "9W3QTgBhkU4Bwg6cwnDJo6eGZ9BtZafSdu1Lo9JmWws7",
    "GJRs4FwHtemZ5ZE9x3FNvJ8TMwitKTh21yxdRPqn7npE",
    "D89hHJT5Aqyx1trP6EnGY9jJUB3whgnq3aUvvCqedvzf",
    "DPqsobysNf5iA9w7zrQM8HLzCKZEDMkZsWbiidsAt1xo"
  ],
  "Bitget": ["A77HErqtfN1hLLpvZ9pCtu66FEtM8BveoaKbbMoZ4RiR"],
  "Bitstamp": [
    "i57ExrKB2i4mSgjSuq2xz617mQXmu33WG2WEYypmdvX",
    "HBxZShcE86UMmF93KUM8eWJKqeEXi5cqWCLYLMMhqMYm",
    "ETZY5TjMKdV2KdHVmUNTN56pWhMc8TyjrXtQ7YexDCmG"
  ],
  "Kucoin": [
    "57vSaRTqN9iXaemgh4AoDsZ63mcaoshfMK8NP3Z5QNbs",
    "BmFdpraQhkiDQE6SnfG5omcA1VwzqfXrwtNYBwWTymy6",
    "HVh6wHNBAsG3pq1Bj5oCzRjoWKVogEDHwUHkRz3ekFgt"
  ],
  "OKX": [
    "5VCwKtCXgCJ6kit5FybXjvriW3xELsFDhYrPSqtJNmcD",
    "9un5wqE3q4oCjyrDkwsdD48KteCJitQX5978Vh7KKxHo"
  ],
  "Bybit": ["AC5RDfQFmDS1deWZos921JfqscXdByf8BKHs5ACWjtW2"],
  "Backpack": [
    "43DbAvKxhXh1oSxkJSqGosNw3HpBnmsWiak6tB5wpecN",
    "BbHG9GvPActFGogv3iNrpDAj4qpXr8t3jF16uGxXcKci"
  ],
  "Bitfinex": ["FxteHmLwG9nk1eL4pjNve3Eub2goGkkz6g6TbvdmW46a"],
  "SwissBorg": [
    "Fe7SEekiKygziaEGKxsDsgLVzrCfNvVBvAYsaJBwFA8s",
    "2E1UKoiiZPwsp4vn6tUh5k61kG2UqYpT7oBrFaJUJXXd",
    "2XxP4kS2vfkiMvpLpGNxry3fPUYimsuAmSbqL1KnuwZ8"
  ],
  "Gate.io": [
    "HiRpdAZifEsZGdzQ5Xo5wcnaH3D2Jj9SoNsUzcYNK78J",
    "u6PJ8DtQuPFnfmwHbGFULQ4u4EgjDiyYKjVEsynXq2w"
  ],
  "Crypto.com": [
    "6FEVkH17P9y8Q9aCkDdPcMDjvj7SVxrTETaYEm8f51Jy",
    "AobVSwdW9BbpMdJvTqeCN4hPAmh4rHm7vwLnQ5ATSyrS",
    "22Wnk8PwyWZV7BfkZGJEKT9jGGdtvu7xY6EXeRh7zkBa"
  ],
  "Kraken": [
    "FWznbcNXWQuHTawe9RxvQ2LdCENssh12dsznf4RiouN5",
    "krakeNd6ednDPEXxHAmoBs1qKVM8kLg79PvWF2mhXV1"
  ],
  "MEXC": ["ASTyfSima4LLAdDgoFGkgqoKowG1LZFDr9fAQrg7iaJZ"],
  "Huobi": ["88xTWZMeKfiTgbfEmPLdsUCQcZinwUfk25EBQZ21XMAZ"]
}

const SOLANA_RPC_URL = "YOUR RPC URL HERE";
const connection = new Connection(SOLANA_RPC_URL, 'confirmed');

// Create a walletMap for faster lookups
const walletMap = new Map<string, Set<string>>();
for (const [key, values] of Object.entries(walletList)) {
  walletMap.set(key, new Set(values));
}

function getHotWallet(hashedValue: string): string {
  for (const [key, valueSet] of walletMap.entries()) {
    if (valueSet.has(hashedValue)) {
      return key;
    }
  }
  return hashedValue;
}

async function getSolBalanceAndTokenBalance(address: string): Promise<{ success: boolean; solBalance?: number; tokenBalance?: number, error?: string }> {
  try {
    const fundingAddress = new PublicKey(address);
    const solBalance = await connection.getBalance(fundingAddress);

    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(fundingAddress, { programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA') });

    return { success: true, solBalance: solBalance / LAMPORTS_PER_SOL, tokenBalance: tokenAccounts.value.length };
  } catch (error) {
    console.error('Error:', error);
    return { success: false, error: (error as Error).message };
  }
}

async function getCreator(mint: string): Promise<{ success: boolean; creator?: string; error?: string }> {
  try {
    const mintAddress = new PublicKey(mint);

    const metadata = await connection.getParsedAccountInfo(mintAddress);

    if (metadata.value && 'parsed' in metadata.value.data && metadata.value.data.parsed.info) {
      const splTokenCreatorAddress = metadata.value.data.parsed.info.mintAuthority;
      if (splTokenCreatorAddress) {
        return { success: true, creator: splTokenCreatorAddress };
      }

      const response = await fetch(`https://pumpfun_API_URL/${mintAddress}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const pumpTokenMetaData = await response.json();

      if ('creator' in pumpTokenMetaData) {
        return { success: true, creator: pumpTokenMetaData.creator };
      } else {
        // In Other cases, if you ping me I will help you.
      }
    } else {
      return { success: false, error: "Metadata not found or invalid." };
    }
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

async function getFunding(mintAddress: string): Promise<{ success: boolean; funding?: string; solBalance?: number; tokenBalance?: number; tokenAmount?: number; error?: string }> {
  try {
    const response = await getCreator(mintAddress);

    if (!response.success) {
      throw new Error(response.error || "No creator found.");
    }

    const creatorAddress = response.creator!;
    const txs = await connection.getSignaturesForAddress(new PublicKey(creatorAddress), { limit: 1000 });

    if (txs.length === 0) {
      return { success: false, error: "No transactions found for the creator address." };
    }

    // Loop through the transactions to find the funding transaction
    // If you need more, please ping me.

    return { success: false, error: "No funding transaction found." };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

chrome.runtime.onInstalled.addListener(() => {
  // console.log("Debug#1 - Background script installed");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getCreatorFundingWalletAndBalance') {
    getFunding(request.data.mintAddress).then(sendResponse);
    return true;
  }
});
