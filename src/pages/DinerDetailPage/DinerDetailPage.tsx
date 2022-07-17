import { useParams } from "react-router-dom";

const DinerDetailPage = () => {
  const { dinerId } = useParams<{ dinerId: string }>();

  return <div>음식점 아이디 : {dinerId}</div>;
};

export default DinerDetailPage;
