import { Icon } from "@mui/material";
import { CryptoCurrency } from "./types";

export const currencies: CryptoCurrency[] = [
  {
    symbol: "DOGE",
    name: "Dogecoin",
    icon: <Icon component="img" src="/icons/doge.svg" alt="Dogecoin" />,
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    icon: <Icon component="img" src="/icons/bitcoin-btc-logo.svg" alt="Bitcoin" />,
  },
  {
    symbol: "SOL",
    name: "Solana",
    icon: <Icon component="img" src="/icons/solana-sol-logo.svg" alt="Solana" />,
  },
  {
    symbol: "MONA",
    name: "MonaCoin",
    icon: <Icon component="img" src="/icons/monacoin-mona-logo.svg" alt="MonaCoin" />,
  },
];
