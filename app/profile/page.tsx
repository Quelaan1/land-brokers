
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import Profile from "./Profile";

const ProfilePage = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    return (
      <ClientOnly>
        <Profile currentUser={currentUser} />
      </ClientOnly>
    )
  } else {
    return <div>Please Login</div>
  }
}

export default ProfilePage;
