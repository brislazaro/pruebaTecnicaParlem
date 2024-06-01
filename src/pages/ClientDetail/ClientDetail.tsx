import { useParams } from "react-router-dom";

function ClientDetail() {
  const { id } = useParams();
  console.log(id);
  return <p>hola</p>;
}

export default ClientDetail;
