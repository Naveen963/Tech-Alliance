import toast from "react-hot-toast";
import supabase, { supabaseUrl } from "./supabase";
export default async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function registerUser(userObj) {
  const user = { ...userObj };
  // const skill = user?.skill;
  // delete user?.skill;
  let imagePath = "";
  let imageName = "";
  if (user?.image?.name) {
    imageName = `${Math.random()}-${user?.image?.name}`.replaceAll("/", "");
    //https://lxxxraiswfwdfbwqtffk.supabase.co/storage/v1/object/public/userimages/TECH%20ALAINCE%20LOGO.jpg
    imagePath = `${supabaseUrl}/storage/v1/object/public/userimages/${imageName}`;
  }
  const { data, error } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
    options: {
      data: {
        fullName: user.name,
        imageUrl: imagePath,
      },
    },
  });
  if (error) {
    throw new Error(error.message);
  }

  delete user.password;
  const { data: userStored, error: userError } = await supabase
    .from("usersData")
    .insert([{ ...user, image: imagePath, user_auth_id: data?.user?.id }])
    .select();
  if (userError) {
    // console.log(data?.user);
    // const { data: d, error } = await supabase
    //   .from( "auth.users")
    //   .delete()
    //   .eq("id", data?.user?.id); //(data?.user?.id);
    // console.log(d, error);
    console.log(userError, userError.message);
    throw new Error(userError.message);
  }
  if (imageName != "") {
    const { error: imageError } = await supabase.storage
      .from("userimages")
      .upload(imageName, user.image);

    if (imageError) {
      console.log(imageError);
      throw new Error(imageError.message);
    }
  }

  // const { error: courseError } = await supabase
  //   .from("userregcourses")
  //   .insert([{ course_id: skill.id, user_id: userStored[0].id }])
  //   .select();
  // if (courseError) {
  //   console.log(courseError, userStored);
  //   throw new Error(courseError.message);
  // }
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw new Error(error.message);
  }
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}
