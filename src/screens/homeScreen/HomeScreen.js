import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import "./_homeScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPopularVideos } from "../../redux/actions/videos.action";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos } = useSelector((state) => state.homeVideos);

  return (
    <Container>
      <CategoriesBar />
      <Row>
        {
          videos.map((video) => {
            return (
              <Col lg={3} md={4} key={video.id}>
                <Video video={video} />
              </Col>
            );
          })
        }
      </Row>
    </Container>
  );
};

export default HomeScreen;
