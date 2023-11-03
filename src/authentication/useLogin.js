import { useMutation, useQueryClient } from "@tanstack/react-query";
import login from "../services/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: userLogin, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user, payloadData) => {
      queryClient.setQueryData(["user"], user.user); //making to store in cache
      navigate("/home", { replace: true });
    },
    onError: () => {
      toast.error("Invalid Credentials");
    },
  });
  return { userLogin, isLoading };
}
