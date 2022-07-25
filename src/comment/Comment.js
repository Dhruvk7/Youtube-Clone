import moment from 'moment'
import React from 'react'
import './_comment.scss'


const Comment = ({ comment }) => {

    const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } = comment;

    return (
        <div className="comment d-flex p-2">
            <img
                src={authorProfileImageUrl}
                alt="authorImage"
                className='rounded-circle me-3' />

            <div className="commment__body">
                <p className="comment__header mb-1">
                    {authorDisplayName} • {moment(publishedAt).fromNow()}
                </p>

                <p className='mb-0'>{textDisplay}</p>
            </div>


        </div>
    )
}

export default Comment