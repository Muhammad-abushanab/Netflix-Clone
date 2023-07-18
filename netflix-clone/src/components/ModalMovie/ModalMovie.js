import { useRef, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import theme from '../../theme/theme';
function ModalMovie({ title, image, overview, img_url, type, lang }) {
    const [show, setShow] = useState(false);
    const [comment, setComment] = useState('');
    const commentInput = useRef('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleSubmit(e) {
        console.log('submitted');
        e.preventDefault();
        console.log(commentInput.current.value);
        setComment(commentInput.current.value);
    }
    function addTofav() {
        const url = process.env.REACT_APP_BACK_END_URL;
        fetch(`${url}/addmovies`, {
            method: "POST",
            body: JSON.stringify({
                title: title,
                lang: lang,
                type: type || 'Movie-rated',
                comment: comment,
                image : image
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.text()).then(json => console.log(json));
        handleClose();
    }
    return (
        <>
            <Button style={{ background: theme.variant.primary, border: theme.palette.darkBlue, borderRadius: '0', height: '50px' }} onClick={handleShow}>
                Add to favorite
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img style={{ display: "block", margin: '20px' }} width={'100px'} alt='shanab' src={img_url + image} />
                    {overview}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control ref={commentInput} type="text"
                                placeholder="Add comment"
                                 />
                        </Form.Group>
                        <div style={{margin:'10px'}}>{comment}</div>
                        <Button variant="primary" type="submit">
                            Add Comment
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ backgroundColor: theme.palette.darkBlue }} onClick={handleClose}>
                        Close
                    </Button>
                    <Button style={{ backgroundColor: theme.palette.babyBlue, border: `${theme.palette.babyBlue}` }} onClick={addTofav} >
                        Save Changes
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default ModalMovie;