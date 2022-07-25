import './_watchScreen.scss';
import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import VideoMetaData from '../../components/videoMetaData/VideoMetaData';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';
import Comments from '../../components/comments/Comments'
import { useParams } from 'react-router-dom'
import { getRelatedVideos, getVideoById } from '../../redux/actions/videos.action';
import { useDispatch, useSelector } from 'react-redux'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const WatchScreen = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getVideoById(id))

        dispatch(getRelatedVideos(id))

    }, [dispatch, id])


    const { video, loading } = useSelector(state => state.selectedVideo);

    const { videos, loading: relatedVideoLoading } = useSelector(state => state.relatedVideos)

    return (
        <Row>
            <Col lg={8}>

                <div className="watchScreen__player">

                    <iframe width="100%" height="100%"
                        frameBorder='0'
                        title={video?.snippet?.title}
                        allowFullScreen
                        src={`https://www.youtube.com/embed/${id}`}>
                    </iframe>
                </div>

                {
                    !loading ? <VideoMetaData video={video} videoId={id} /> : <h6>Loading...</h6>
                }


                <Comments videoId={id} totalComments={video?.statistics?.commentCount} />
            </Col>


            <Col lg={4}>

                {!relatedVideoLoading ?
                    videos?.filter(video => video.snippet).map((video) => <VideoHorizontal video={video} key={video.id.videoId} />)
                    :
                    <SkeletonTheme baseColor='#343a40' highlightColor='#3c4147'>
                        <Skeleton width='100%' height='130px' count={15} />

                    </SkeletonTheme>
                }
            </Col>

        </Row>
    )
}

export default WatchScreen