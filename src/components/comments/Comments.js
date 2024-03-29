import './_comments.scss'
import React, { useRef } from 'react'
import Comment from '../../comment/Comment'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getCommentsOfVideoById } from '../../redux/actions/comments.action'
import { useState } from 'react'

const Comments = ({ videoId, totalComments }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCommentsOfVideoById(videoId))
    }, [videoId, dispatch])

    const comments = useSelector(state => state.commentList.comments)

    const { photoURL } = useSelector(state => state.auth?.user);

    const imgRef = useRef();
    const onImageError = () => imgRef.current.src = 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'

    const _comments = comments?.map(comment => comment?.snippet?.topLevelComment?.snippet)

    const [text, setText] = useState('');


    const handleComment = (e) => {
        e.preventDefault();

        if (text.length === 0) return;

        dispatch(addComment(videoId, text));

        setText('');
    }

    return (

        <div className="comments">
            <p>
                {/* {numeral(totalComments).format('0.a')}  */}
                {totalComments} Comments
            </p>

            <div className="comments__form d-flex w-100 my-2">
                <img
                    src={photoURL}
                    alt="avatar"
                    className='rounded-circle me-3' ref={imgRef} onError={onImageError} />

                <form onSubmit={handleComment} className="d-flex flex-grow-1">
                    <input type="text"
                        className="flex-grow-1 me-2"
                        placeholder='Write a comment...'
                        value={text}
                        onChange={e => setText(e.target.value)} />

                    <button className="border-0 p-2">Comment</button>
                </form>

            </div>

            <div className="comments__list">
                {
                    _comments?.map((comment, i) => <Comment comment={comment} key={i} />)
                }
            </div>
        </div>
    )
}

export default Comments