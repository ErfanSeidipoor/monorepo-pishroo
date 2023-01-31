import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import { LoginAdminInputs } from "@pishroo/dto";

const useData = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<LoginAdminInputs>({
    resolver: classValidatorResolver(LoginAdminInputs),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginAdminInputs> = (data) => console.log(data);

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
  };
};

export default useData;
