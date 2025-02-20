import { TextField, Stack, InputAdornment } from "@mui/material";
import { useForm } from "react-hook-form";
import { Search } from "@mui/icons-material";
import AddChart from "./AddChart";

type FormValues = {
  search: string;
};

export default function SearchBar() {
  const form = useForm<FormValues>({
    defaultValues: {
      search: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} width={210}>
          <TextField
            id="filled-basic"
            label="Search..."
            variant="filled"
            placeholder=""
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              },
            }}
            {...register("search", {})}
            error={!!errors.search}
            helperText={errors.search?.message}
          />
          <AddChart />
        </Stack>
      </form>
    </>
  );
}
