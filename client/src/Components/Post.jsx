/* eslint-disable react/prop-types */
import classes from './Post.module.css';

function Post({author,body}) {
    return (
        <li className={classes.Post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
        </li>
    );
}

export default Post;
