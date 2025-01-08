import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z, ZodType } from "zod";

import { useHistory } from "src/hooks/useHistory";
import Cookie from "src/lib/cookie";
import { useSignIn } from "src/mutates/auth";
import { useGetMe } from "src/queries/user/info";

type LoginFormValues = {
  email: string;
  password: string;
};

const schema: ZodType<Partial<LoginFormValues>> = z.object({
  email: z
    .string({
      message: "Username is required",
    })
    .nonempty("Username is required")
    .email("Invalid email"),
  password: z
    .string({
      message: "Username is required",
    })
    .nonempty("Password is required"),
});

const useLogin = () => {
  const { replace } = useHistory();

  const { refetch } = useGetMe({
    enabled: false,
  });

  const { mutateAsync } = useSignIn({
    onSuccess: async (data) => {
      toast.success("Sign in successfully");
      Cookie.setToken(data?.token);

      const me = await refetch();
      const meRes = me?.data as Response.User;

      Cookie.setMe(meRes);

      const isAdminRole = meRes.role === "admin" || meRes.surname === "Admin";

      replace({
        pathName: isAdminRole ? "/admin" : "/",
      });
    },
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
    shouldFocusError: true,
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    await mutateAsync(data);
  };

  return { form, onSubmit };
};

export default useLogin;
