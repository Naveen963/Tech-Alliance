import supabase from "./supabase";

export default async function registerCourse(register) {
  const { data, error } = await supabase
    .from("userregcourses")
    .insert([register])
    .select();
  if (error) {
    console.log(error, error.message, error.hint);
    throw new Error("Couldn't enroll to Course");
  }
  return data;
}
