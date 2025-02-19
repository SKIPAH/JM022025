import { useForm } from "react-hook-form";

let renderCount = 0;
export default function TestHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  renderCount++;
  console.log(errors);
  const firstName = watch("firstName");

  return (
    <div>
      <h1>Render count: {renderCount}</h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          {...register("firstName", { required: "This is required." })}
          placeholder="First Name"
        />
        <p>{firstName}</p>
        <p>{errors.firstName?.message}</p>
        <input
          {...register("lastName", {
            required: "This is required",
            minLength: {
              value: 4,
              message: "Minimum length is 4 characters",
            },
          })}
          placeholder="Last Name"
        />
        <p>{errors.lastName?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
}
