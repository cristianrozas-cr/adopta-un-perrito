import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';

function MyCard({url, nombre, descripcion, color, raza}) {
    return (
      <>
      <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}
          </Card.Text>
          <Tags variant="primary" color={color} raza={raza}/>
        </Card.Body>
      </Card>
      </div>
      </>
    )
  }
  
  export default MyCard
  