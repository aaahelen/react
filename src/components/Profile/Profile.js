import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=0d9be7e07c58d4f7d95b3a90d5cd1506f9b131d5-5103338-images-thumbs&n=13" alt=""/>              </div>
            <div>
                ava+opisanie
            </div>
            <MyPosts />
        </div>

    )
}
 export default Profile;
