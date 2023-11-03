import supabase from "./supabase";

export async function getActiveCourses() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .eq("course_type", "active");

  if (error) {
    throw new Error("Courses can't be loaded");
  }
  return courses;
}
export async function getUpcomingCourses() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .eq("course_type", "upcoming");

  if (error) {
    throw new Error("Courses can't be loaded");
  }
  return courses;
}

export async function getDashboardData() {
  let { data: userregcourses, error } = await supabase.from("userregcourses")
    .select(`
  *,
  courses (
    *
  ),
  users(*)
`);

  if (error) {
    throw new Error("Courses can't be loaded");
  }
  return userregcourses;
}
