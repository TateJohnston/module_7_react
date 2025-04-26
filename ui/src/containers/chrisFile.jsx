import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

const currencies = [
  { name: "USD", symbol: "$" },
  { name: "AUD", symbol: "$" },
  { name: "NZD", symbol: "$" },
  { name: "GBP", symbol: "£" },
  { name: "EUR", symbol: "€" },
  { name: "SGD", symbol: "$" },
];
const BitcoinRates = () => {
  // VARIABLES/STATE LIVE HERE
  const [searchParams] = useSearchParams();
  const optionalCur = searchParams.get("currency");

  // QUERY VALUE 'currency' react-router-dom
  const [currency, setCurrency] = useState(
    optionalCur ? optionalCur : currencies[0].name
  );

  const data = useQuery(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  );

  const [currencySymbol, setCurrencySymbol] = useState(currencies[0].symbol);
  const [result, setResult] = useState();
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const getCurrencyFromQueryData = (data, key) => {
      if (data && key) {
        setResult(data.bitcoin[key]);
      }
    };

    getCurrencyFromQueryData(data, currency.toLowerCase());
    console.log("data", data);
  }, [data]);

  // useEffect(() => {
  //   fetch(
  //     `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("res", res);
  //       setResult(res.bitcoin[currency.toLowerCase()]);
  //     });
  // }, [currency]);

  // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
  const handleCurrencySelection = (e) => {
    let matchedItem = currencies.find((curr) => {
      if (curr.name === e.target.value) {
        return curr.symbol;
      }
    });
    setCurrencySymbol(matchedItem.symbol);
    setCurrency(e.target.value);
  };
  const currencyOptions = currencies.map((curr) => (
    <MenuItem value={curr.name} key={curr.name}>
      {curr.name}
    </MenuItem>
  ));

  const calculateBitcoinPrice = (pricePerOne, amount) => {
    console.log(pricePerOne, amount);
    return pricePerOne * amount;
  };

  return (
    <>
      <Typography sx={{ padding: "20px" }}>Choose currency:</Typography>
      <Box>
        <TextField
          sx={{ m: 1 }}
          id="outlined-basic"
          placeholder={currencySymbol}
          label="Amount"
          variant="outlined"
          onChange={(e) => setAmount(e.target.value)}
        />
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="currency-rates-label">Currency</InputLabel>
          <Select
            labelId="currency-rates-label"
            id="currency-rates"
            value={currency}
            label="Currency"
            onChange={handleCurrencySelection}
          >
            {currencyOptions}
          </Select>
        </FormControl>
        <Typography>
          {amount} x Bitcoin = {currencySymbol}{" "}
          {calculateBitcoinPrice(result, amount)}
        </Typography>
      </Box>
    </>
  );
};
export default BitcoinRates;
