import {useParams} from "react-router";

const EditPost = () => {
  const params = useParams();
  return <h1>Edit Post: {params.id} </h1>;
};
export default EditPost;
