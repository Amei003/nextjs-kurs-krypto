"use server";

import { currencies } from "./currencies";
import { CryptoDataResponse, CryptoPrices, CryptoTimeSeries } from "./types";

const apiKey = process.env.CRYPTOCOMPARE_API_KEY;

const baseUrl = "https://min-api.cryptocompare.com";

// Info om cryptocompare: https://min-api.cryptocompare.com/documentation

export const fetchPrices = async () => {
  const fsyms = currencies.map((currency) => currency.symbol).join(",");

  // Info om dette endepunktet: https://min-api.cryptocompare.com/documentation?key=Price&cat=multipleSymbolsPriceEndpoint
  const url = `${baseUrl}/data/pricemulti?fsyms=${fsyms}&tsyms=USD`;

  const response = await fetch(url, {
    headers: {
      authorization: `Apikey ${apiKey}`,
    },
    next: {
      revalidate: 60, // cache for 60 seconds
    },
  });

  const data = (await response.json()) as CryptoPrices;

  return data;
};

export const fetchChartData = async (
  currency: string
): Promise<CryptoTimeSeries> => {
  // Info om dette endepunktet: https://min-api.cryptocompare.com/documentation?key=Historical&cat=dataHistoday
  const url = `${baseUrl}/data/v2/histoday?fsym=${currency}&tsym=USD&limit=90&e=CCCAGG`;

  const response = await fetch(url, {
    headers: {
      authorization: `Apikey ${apiKey}`,
    },
    next: {
      revalidate: 60, // cache for 60 seconds
    },
  });

  const data = (await response.json()) as CryptoDataResponse;

  return data.Data;
};

// Hvis du ønsker å lese mer om cachingen: https://nextjs.org/docs/app/api-reference/functions/fetch
