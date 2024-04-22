import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';

function Tags({raza, color}) {
    return (
        <Badge bg={color}>{raza}</Badge>

    )
  }
  
  export default Tags