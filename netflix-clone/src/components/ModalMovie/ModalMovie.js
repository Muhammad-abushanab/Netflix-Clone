import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import theme from '../../theme/theme';
function ModalMovie({ title, image, overview, img_url, type, lang }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleSubmit(e) {
        console.log('submitted');
        e.preventDefault();
        const url = process.env.REACT_APP_BACK_END_URL;
        fetch(`${url}/addmovies`, {
            method: "POST",
            body: JSON.stringify({
                title: title,
                lang: lang,
                type: type || 'Movie-rated'
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
            <Button style={{ background: theme.palette.darkBlue, border: theme.palette.darkBlue, borderRadius: '0', height: '50px', width: '100%' }} onClick={handleShow}>
                Add to favorite
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <img style={{ display: "block", margin: '20px' }} width={'100px'} alt='shanab' src={img_url + image} />
                        {overview}

                        <Form.Group className="mt-3 mb-3" controlId="formBasicEmail">
                            <Form.Label className='mt-2 p-2 text-capitalize'>comment</Form.Label>
                            <Form.Control name='comment' type="text" placeholder="I really Like this Movie" />
                        </Form.Group>
                        {/* <Button variant="primary" type="submit">
                            Add Comment
                        </Button> */}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button style={{ backgroundColor: theme.palette.darkBlue }} onClick={handleClose}>
                            Close
                        </Button>
                        <Button type='submit' style={{ backgroundColor: theme.palette.babyBlue, border: `${theme.palette.babyBlue}` }} onClick={handleSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default ModalMovie;