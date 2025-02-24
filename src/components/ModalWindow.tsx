
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddChart from "./AddChart";
import { Button, MenuItem, TextField } from "@mui/material";
import dataseries from "../data/dataseries.json";
import { useState } from "react";

interface ModalWindowProps {
  onAddChart: (chartName: string, selectedChart: string) => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};
const textFieldStyle = {
  width: "100%",
  marginBottom: "10px",
};

const types = [
  {
    value: "line",
    label: "Line",
  },
  {
    value: "bar",
    label: "Bar",
  },
];

const colors = [
  {
    value: "black",
    label: "Black",
  },
  {
    value: "green",
    label: "Green",
  },
];

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 1,
  mt: 2,
};

const axisContainerStyle = {
  display: "flex",
  flexDirection: "row",
  gap: 1,
  width: "100%",
};

const allDataseries = dataseries.map((series) => ({
  value: series.name,
  label: series.name,
}));

export default function ModalWindow({ onAddChart }: ModalWindowProps) {
  const [open, setOpen] = useState(false);
  const [chartName, setChartName] = useState("");
  const [selectedChart, setSelectedChart] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddChart = () => {
    if (chartName) {
      onAddChart(chartName, selectedChart);
      handleClose();
      setChartName("");
    }
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <AddChart onAddChart={handleOpen}></AddChart>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", marginBottom: 2, marginTop: 0 }}
          >
            Add Chart
          </Typography>
          <TextField
            sx={textFieldStyle}
            id="filled-basic"
            label="Name"
            variant="outlined"
            placeholder=""
            required
            value={chartName}
            onChange={(e) => setChartName(e.target.value)}
          >
            Name
          </TextField>
          <TextField
            sx={textFieldStyle}
            required
            id="outlined-required"
            label="Type"
            select
          >
            {types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            sx={textFieldStyle}
            required
            id="outlined-required"
            label="Color"
            select
          >
            {colors.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            sx={textFieldStyle}
            required
            id="outlined-required"
            label="Dataseries"
            select
            onChange={(e) => setSelectedChart(e.target.value)}
          >
            {allDataseries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Box sx={axisContainerStyle}>
            <TextField
              sx={textFieldStyle}
              id="outlined-required"
              label="X-axis name"
            >
              X-axis name
            </TextField>
            <TextField
              sx={textFieldStyle}
              id="outlined-required"
              label="Y-axis name"
            >
              Y-axis name
            </TextField>
          </Box>

          <TextField sx={textFieldStyle} label="Text description">
            Text description
          </TextField>
          <Box sx={buttonContainerStyle}>
            <Button
              sx={{ color: "grey", fontWeight: "bold" }}
              onClick={handleClose}
            >
              CANCEL
            </Button>
            <Button sx={{ fontWeight: "bold" }} onClick={handleAddChart}>
              ADD CHART
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
