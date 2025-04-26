import { Box, Typography, Select, MenuItem } from "@mui/material";
import { useDataContext, emojiStatus } from "../stores/dataStore";

const LabThree = () => {
  const { emoji, displayEmojiHandler } = useDataContext();

  const handleChange = (event) => {
    displayEmojiHandler(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ margin: "20px" }}>
        Lab Three Content
      </Typography>
      <Typography variant="h4">{emoji}</Typography>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={emoji}
        label="Emoji State"
        onChange={handleChange}
      >
        <MenuItem value={emojiStatus.happy}>Happy</MenuItem>
        <MenuItem value={emojiStatus.throwTable}>Throw</MenuItem>
        <MenuItem value={emojiStatus.unhappy}>unhappy</MenuItem>
      </Select>
    </Box>
  );
};

export default LabThree;
