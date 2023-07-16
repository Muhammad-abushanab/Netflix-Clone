import { Card } from "react-bootstrap";
import theme from "../../theme/theme";
import ModalMovie from "../ModalMovie/ModalMovie";
function Movie({ title, image, overview, key, date,lang,type }) {
    const img_API = "https://image.tmdb.org/t/p/original";
    return (
        <Card key={key} style={{ boxShadow: '6px 4px 4px rgba(0,0,0,0.1)', width: '18rem', height: "500px", marginTop: '20px', marginLeft: "20px", border: `solid 2px transparent` ,borderRadius:'8px'}}>
            <Card.Img variant="top"  height={"350px"} src={img_API + image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {date}
                </Card.Text>
                {/* <Button  >Add to Favirote</Button> */}
            </Card.Body>
            <ModalMovie title={title} image={image} img_url={img_API} overview={overview} type={type} lang={lang} />
        </Card>
    )
}
export default Movie;