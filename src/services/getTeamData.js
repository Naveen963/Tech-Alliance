import supabase from "./supabase";

export default async function getTeamData() {
  let { data: team, error } = await supabase.from("team").select("*");

  if (error) {
    throw new Error("Courses can't be loaded");
  }
  return team;
}
