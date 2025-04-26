import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Skeleton,
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "../stores/useQuery";

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
  const optionalCur = searchParams.get("currency");
  const [currency, setCurrency] = useState(
    optionalCur ? optionalCur : currencies[0].name
  );

  const [data, isLoading] = useQuery(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  );

  const [currencySymbol, setCurrencySymbol] = useState(currencies[0].symbol);
  const [bitcoinConversionTotal, setBitcoinConversionTotal] = useState();
  const [bitcoinAmount, setBitcoinAmount] = useState(1);

  useEffect(() => {
    const getCurrencyFromQueryData = (data, key) => {
      if (data && key) {
        setBitcoinConversionTotal(data.bitcoin[key]);
      }
    };
    getCurrencyFromQueryData(data, currency.toLowerCase());
    console.log("data", data);
  }, [data]);

  //   useEffect((`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`) => {
  //     axios
  //       .get()
  //       .then((response) => {
  //         const data = response.data.bitcoin[currency.toLowerCase()];

  //         setBitcoinConversionTotal(data);
  //       })
  //       .catch((error) => console.log(error, "error"));
  //   }, [currency]);

  const handleCurrencySelection = (e) => {
    let matchedItem = currencies.find((curr) => curr.name === e.target.value);
    if (matchedItem) {
      setCurrencySymbol(matchedItem.symbol);
      setCurrency(matchedItem.name);
    }
  };

  const convertAmount = (amount, bitcoinValue) => {
    console.log("amount", amount, bitcoinConversionTotal);
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
            onChange={(e) => {
              console.log("e", e.target.value);
              convertAmount(e.target.value);
            }}
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
          {isLoading ? (
            <Skeleton variant="rectangular"></Skeleton>
          ) : (
            <Typography>
              {bitcoinAmount} Bitcoin = {currencySymbol}
              {bitcoinConversionTotal?.toLocaleString()} {currency}
              {/* make it a function here */}
            </Typography>
          )}
          {/* <Typography>
            {bitcoinAmount} Bitcoin = {currencySymbol}
            {bitcoinConversionTotal?.toLocaleString()}
            {/* make it a function here */}
          {/* </Typography> */}
        </Box>
      </Box>
    </>
  );
};
export default LabOne;
