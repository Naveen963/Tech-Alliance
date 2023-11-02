import supabase from "./supabase";

export default async function getCourseRegistrations() {
  let { data: userregcourses, error } = await supabase.from("userregcourses")
    .select(`
    *,
    courses(
     *
    ),
    users(
        *
        )
  `);
  if (error) {
    throw new Error("Data can't be loaded....Please try again");
  }
  return userregcourses;
}
