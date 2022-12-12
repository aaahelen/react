import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";

function Profile() {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>

    )
}
 export default Profile;
