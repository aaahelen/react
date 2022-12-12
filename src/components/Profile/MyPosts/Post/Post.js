import s from './Post.module.css'

function Post(props) {

    return (
        <div className={s.item}>
            <img src="https://avatars.mds.yandex.net/i?id=dabd607f15b2888abcf2518bc4f37ea4a90fa36e-6946998-images-thumbs&n=13" alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}
export default Post;

