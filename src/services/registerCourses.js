import supabase from "./supabase";

export default async function registerCourse(register) {
  const { data, error } = await supabase
    .from("userregcourses")
    .insert([register])
    .select();
  if (error) {
    throw new Error("Already Enrolled to Course");
  }
  return data;
}
