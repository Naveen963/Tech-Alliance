import supabase from "./supabase";

export default async function getUserData(id) {
  let { data: team, error } = await supabase
    .from("usersData")
    .select("*")
    .eq("user_auth_id", id);

  if (error) {
    throw new Error("Courses can't be loaded");
  }
  return team;
}
