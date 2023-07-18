import { useState, useEffect, useRef } from "react";
import { Card, Container, Spinner, Button, Modal, Form } from "react-bootstrap";

export default function FavList() {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState([]);
    const newComment = useRef('');
    const img_API = "https://image.tmdb.org/t/p/original";

    const handleClose = () => {
        setShowModal((prevShowModal) => prevShowModal.map(() => false));
    };

    const handleShow = (index) => {
        setShowModal((prevShowModal) => {
            const newShowModal = [...prevShowModal];
            newShowModal[index] = true;
            return newShowModal;
        });
    };

    async function handledelete(id) {
        const url = process.env.REACT_APP_BACK_END_URL;
        // console.log(url);
        await fetch(`${url}/delete/${id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.text()).then(json => console.log(json));
    }
    function handleSubmit(e, id) {
        e.preventDefault();
        console.log(id);
        const updateComment = (newComment.current.value);
        console.log(updateComment);
        // console.log(e);
        handleupdate(id,updateComment);
    }

    async function handleupdate(id,c) {
        const url = process.env.REACT_APP_BACK_END_URL;
        await fetch(`${url}/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                newComment: c
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        handleClose()
    }

    async function fetchDataBase() {
        // console.log(process.env.Back_end_url);
        const url = process.env.REACT_APP_BACK_END_URL;
        // console.log(url);
        const response = await fetch(`${url}/getmovies`);
        const movies = await response.json();
        setData(movies);
    }

    useEffect(() => {
        fetchDataBase();
    }, [data]);

    return (
        <Container className="d-flex flex-wrap mt-4 gap-5">
            {data.length === 0 ? (
                <Container style={{ marginTop: "100px" }}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
            ) : (
                data.map((movie, i) => {
                    return (
                        <Card key={i} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img_API + movie.image} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.comment}
                                </Card.Text>
                                <Button onClick={() => handleShow(i)} variant="primary">
                                    Update
                                </Button>
                                <Button onClick={() => handledelete(movie.id)} className="mx-2" variant="danger">
                                    Delete
                                </Button>
                            </Card.Body>

                            {/* Update Modal */}
                            <Modal show={showModal[i]} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Update Comment</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={(e) => handleSubmit(e, movie.id)}>
                                        <Card style={{ width: '100%' }}>
                                            <Card.Img style={{ height: "400px" }} variant="top" src={img_API + movie.image} />
                                            <Card.Body>
                                                <Card.Title>{movie.title}</Card.Title>
                                            </Card.Body>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="p-2">Comment</Form.Label>
                                                <Form.Control ref={newComment} type="text" placeholder={movie.comment} />
                                            </Form.Group>
                                            <Card.Footer>
                                                <Button type="submit" variant="primary" >Update Comment</Button>
                                            </Card.Footer>
                                        </Card>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Card>
                    );
                })
            )}
        </Container>
    );
}
