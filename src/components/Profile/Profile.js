import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";
import state from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>

    )
}
 export default Profile;
