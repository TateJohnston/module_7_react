import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const currencies = [
  { name: "USD", symbol: "$" },
  { name: "AUD", symbol: "$" },
  { name: "NZD", symbol: "$" },
  { name: "GBP", symbol: "£" },
  { name: "EUR", symbol: "€" },
  { name: "SGD", symbol: "$" },
];
const LabOne = () => {
  const [searchParams] = useSearchParams();
  const optionalCur = searchParams.get("currency").toUpperCase();
  const [currency, setCurrency] = useState(
    optionalCur ? optionalCur : currencies[0].name
  );
  const [currencySymbol, setCurrencySymbol] = useState(currencies[0].symbol);
  const [bitcoinConversionTotal, setBitcoinConversionTotal] = useState();
  const [bitcoinAmount, setBitcoinAmount] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
      )
      .then((response) => {
        const data = response.data.bitcoin[currency.toLowerCase()];

        setBitcoinConversionTotal(data);
      })
      .catch((error) => console.log(error, "error"));
  }, [currency]);

  const handleCurrencySelection = (e) => {
    let matchedItem = currencies.find((curr) => curr.name === e.target.value);
    if (matchedItem) {
      setCurrencySymbol(matchedItem.symbol);
      setCurrency(matchedItem.name);
    }
  };

  const convertAmount = (amount) => {
    setBitcoinConversionTotal(bitcoinConversionTotal * amount);
    setBitcoinAmount(amount);
  };

  const currencyOptions = currencies.map((curr) => (
    <MenuItem value={curr.name} key={curr.name}>
      {curr.name}
    </MenuItem>
  ));
  return (
    <>
      <Box>
        <Typography sx={{ marginTop: "20px" }} variant="h4">
          Lab One Content
        </Typography>
        <Typography sx={{ padding: "20px" }}>Choose currency:</Typography>
        <Box>
          <TextField
            sx={{ m: 1 }}
            id="outlined-basic"
            placeholder={currencySymbol}
            label="Amount"
            type="number"
            variant="outlined"
            onChange={(e) => convertAmount(e.target.value)}
          />
          <FormControl sx={{ m: 1 }}>
            <InputLabel id="currency-rates-label"> Currency</InputLabel>
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
        </Box>
        <Box>
          <Typography>
            {bitcoinAmount} Bitcoin = {currencySymbol}
            {bitcoinConversionTotal?.toLocaleString()}
            {/* make it a function here */}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default LabOne;
