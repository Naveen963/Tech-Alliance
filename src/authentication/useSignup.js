import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";
import { registerUser } from "../services/auth";

export function useSignup() {
  const queryClient = useQueryClient();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: registerUser,
    onSuccess: (user) => {
      toast.success("Account Created Successfully.");
      queryClient.invalidateQueries(["registrations"]);
    },
    onError: (error) => {
      //  console.log(error, error.message);
      toast.error("Unable to SignUp...Please enter correct details");
    },
  });

  return { signup, isLoading };
}
