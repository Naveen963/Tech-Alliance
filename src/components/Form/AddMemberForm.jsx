import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
import { useSignup } from "../../authentication/useSignup";
import styled from "styled-components";
import { getActiveCourses } from "../../services/getCourses";
import Heading from "../../ui/Heading";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const Select = styled.select`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

const Option = styled.option`
  
  font-weight: 500;
`

const sections = ['A', 'B', 'C', 'D', 'E', 'F'];
const years = ['1', '2', '3', '4']
function AddMemberForm() {



  // const { register, handleSubmit, reset, getValues, formState } = useForm();
  // const { errors } = formState;

  // const queryClient = useQueryClient();

  // const { mutate, isLoading: isCreating } = useMutation({
  //   mutationFn: createCabin,
  //   onSuccess: () => {
  //     toast.success("New cabin successfully created");
  //     queryClient.invalidateQueries({ queryKey: ["cabins"] });
  //     reset();
  //   },
  //   onError: (err) => toast.error(err.message),
  // });

  // function onSubmit(data) {
  //   mutate({ ...data, image: data.image[0] });
  // }

  // function onError(errors) {
  //   // console.log(errors);
  // }
  const navigate = useNavigate();

  const { signup, isLoading } = useSignup();
  const { data: activeCourses } = useQuery({
    queryKey: ['activecourses'],
    queryFn: getActiveCourses
  })
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const submitHandler = (data) => {
    const skillVal = data?.skill == '' ? activeCourses[0] : activeCourses?.filter(c => c.name == data.skill)?.[0]
    signup(
      { ...data, skill: skillVal, image: data.image?.[0] },
      {
        onSettled: () => reset()
      }
    );
    navigate('/login')
  }
  return (
    <>
      <Heading as="h4">Welcome To Tech Alliance</Heading>
      <Form style={{ width: '80%', margin: 'auto' }} onSubmit={handleSubmit(submitHandler)} >
        <FormRow label="Name" error={errors?.name?.message} >
          <Input
            type="text"
            id="name"
            disabled={isLoading}
            {...register("name",
              {
                required: "This field is required",
                validate: (value) => value.length > 4 || "Name should be minumum 4 characters long."
              })}
          />
        </FormRow>

        <FormRow label="Registration No" error={errors?.reg_no?.message} >
          <Input
            type="text"
            id="reg_no"
            disabled={isLoading}
            {...register("reg_no", {
              required: "This field is required",
              validate: (value) => value.length > 9 || "Please Enter Valid Registration Number"
            })}
          />
        </FormRow>

        <FormRow label="Email" error={errors?.email?.message} >
          <Input
            type="email"
            id="email"
            disabled={isLoading}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </FormRow>

        {/* <FormRow label="Phone" error={errors?.phone?.message} >
        <Input
          type="text"
          id="phone"
          {...register("phone", { required: "This field is required" })}
        />

      </FormRow> */}
        <FormRow label="Year" >
          <Select id="year" disabled={isLoading} {...register("year")} style={{ width: '12rem' }}>
            {years?.map((c, index) => (<Option key={index} value={c}>{c}</Option>))}

          </Select>


        </FormRow>
        <FormRow label="Branch" error={errors?.branch?.message} >
          <>
            <Input
              type="text"
              id="branch"
              disabled={isLoading}
              {...register("branch", { required: "This field is required" })}
            />

            <Select id="section" disabled={isLoading}  {...register("section")} style={{ width: 'max-content' }}>
              {sections?.map((c, index) => (<Option key={index} value={c}>{c}</Option>))}

            </Select>
          </>

        </FormRow>
        <FormRow label="Password" error={errors?.password?.message} >
          <Input
            type="password"
            id="password"
            disabled={isLoading}
            {...register("password", {
              required: "This field is required",
              validate: value => value.length > 6 || "Password should be atleast 6 characters"
            })}
          />

        </FormRow>
        <FormRow label="Course" >
          <Select id="skill"
            disabled={isLoading}
            {...register("skill")}>
            {activeCourses?.map((c, index) => (<Option key={index} value={c?.name}>{c?.name}</Option>))}

          </Select>


        </FormRow>


        <FormRow label="Image">
          <FileInput
            id="image"
            disabled={isLoading}
            accept="image/*"
            {...register("image")}
          />
        </FormRow>

        <FormRow disabled={isLoading}>
          {/* type is an HTML attribute! */}
          <Button variation="secondary" type="reset" style={{ border: 'none', color: 'var( --color-brand-600)', fontWeight: '600' }} onClick={() => navigate('/login')}>
            Sign In
          </Button>
          <Button variation="primary" type="submit" >
            SignUp
          </Button>
        </FormRow>
      </Form>
    </>
  );
}

export default AddMemberForm;
