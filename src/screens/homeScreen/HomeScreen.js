import React from "react";
import { Container, Col } from "react-bootstrap";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import "./_homeScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPopularVideos, getVideosByCategory } from "../../redux/actions/videos.action";
import InfiniteScroll from "react-infinite-scroll-component";
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonVideo from "../../components/skeletons/SkeletonVideo";


const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector((state) => state.homeVideos);

  const fetchData = () => {
    if (activeCategory === 'All') {
      dispatch(getPopularVideos());
    }
    else {
      dispatch(getVideosByCategory(activeCategory));
    }
  }

  return (
    <Container>
      <CategoriesBar />

      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <>
            <div className="spinner-border text-danger d-block mx-auto"></div>
          </>
        }
        className='row'>

        {
          !loading ?
            videos.map((video, i) => {
              return (
                <Col lg={3} md={4} key={i} >
                  <Video video={video} />
                </Col>
              );
            })
            :
            [...Array(20)].map((element, i) =>
              <Col lg={3} md={4} key={i} >
                <SkeletonVideo />
              </Col>
            )
        }


      </InfiniteScroll>

    </Container>
  );
};

export default HomeScreen;
