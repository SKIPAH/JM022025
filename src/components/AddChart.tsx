import { Button } from "@mui/material";

interface AddChartProps {
  onAddChart: () => void;
}

function AddChart({ onAddChart }: AddChartProps) {
  return (
    <Button
      sx={{ width: 200, my: 2 }}
      onClick={onAddChart}
      type="button"
      variant="contained"
      color="primary"
    >
      + Add Chart
    </Button>
  );
}

export default AddChart;
