import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import { Row, Col, Container, Spinner, ButtonGroup, Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
function Home() {
    const [trend, setTrends] = useState([]);
    let [type, setType] = useState('trending');
    function handleType(str) {
        return () => {
            setType(str);
        }
    }
    async function getMovieOrSeries() {
        // console.log(process.env.Back_end_url);
        const url = process.env.REACT_APP_BACK_END_URL;
        // console.log(url);
        const response = await fetch(`${url}/${type}`);
        const movies = await response.json();
        setTrends(movies.results);
    }
    useEffect(() => {
        setTrends([])
        getMovieOrSeries()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type])
    return (
        <>
            <ButtonGroup className='mt-3' aria-label="Basic example">
                <Button className="w-100 text-nowrap text-capitalize" variant="primary" active ={type === 'top-rated'} onClick={handleType('top-rated')} >Top-Rated</Button>
                <Button className="w-100 text-nowrap text-capitalize" variant="primary" active={type === 'trending'} onClick={handleType('trending')}>Trending</Button>
                <Button className="w-100 text-nowrap text-capitalize" variant="primary" active={type === 'tv'} onClick={handleType('tv')}>series</Button>
            </ButtonGroup>
            <Container>
                <Row xs={1} sm={1} md={2} lg={4}>
                    {trend.length === 0  ?
                        <Container style={{ marginTop: "100px" }}>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </Container>
                        : trend.map((obj, i) => (
                            <Col key={i} ><MovieList movie={obj} key={i} /></Col>
                        ))}
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Home;