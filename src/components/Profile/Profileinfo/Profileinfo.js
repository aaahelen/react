import s from './Profileinfo.module.css'

function ProfileInfo() {
    return (
        <div>
             <div>
                <img src="https://avatars.mds.yandex.net/i?id=0d9be7e07c58d4f7d95b3a90d5cd1506f9b131d5-5103338-images-thumbs&n=13" alt=""/>              </div>
            <div className={s.descriptionBlock}>
                ava+opisanie
            </div>
        </div>

    )
}
export default ProfileInfo;
