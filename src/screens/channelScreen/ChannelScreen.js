import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getVideosByChannel } from '../../redux/actions/videos.action';
import './_channelScreen.scss'
import { Container, Col, Row } from 'react-bootstrap'
import Video from '../../components/video/Video';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { getChannelDetails } from '../../redux/actions/channel.action';
import numeral from 'numeral';




const ChannelScreen = () => {

    const { channelId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideosByChannel(channelId))
        dispatch(getChannelDetails(channelId))
    }, [dispatch, channelId]);

    const { videos, loading } = useSelector(state => state.channelVideos);
    const { snippet, statistics } = useSelector(state => state.channelDetails.channel);

    return (

        <>

            {/* channel Details  */}
            <div className="px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader">
                <div className="d-flex align-items-center channelHeader__left">
                    <img src={snippet?.thumbnails?.default?.url} alt="channel icon" />

                    <div className="ml-3 channelHeader__details">
                        <h3>{snippet?.title}</h3>
                        <span>
                            {numeral(statistics?.subscriberCount).format('0.a')} {' '}
                            subscribers
                        </span>
                    </div>
                </div>

                <button>Subscribe</button>
            </div>



            {/* Channel Videos  */}
            <Container>
                <Row className="mt-2">
                    {
                        !loading ? videos?.map(video => <Col md={4} lg={3} key={video.id}>
                            <Video video={video} channelScreen />
                        </Col>)
                            :
                            (
                                [...Array(20)].map((element, i) =>
                                    <Col md={4} lg={3} key={i}>
                                        <SkeletonTheme baseColor='#343a40' highlightColor='#3c4147'>
                                            <Skeleton width='100%' height='140px' />
                                        </SkeletonTheme>
                                    </Col>

                                )
                            )
                    }
                </Row>

            </Container>
        </>
    )
}

export default ChannelScreen