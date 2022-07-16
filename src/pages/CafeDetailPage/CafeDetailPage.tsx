import { useParams } from "react-router-dom";

const CafeDetailPage = () => {
  const { cafeId } = useParams<{ cafeId: string }>();

  return <div>카페 아이디 : {cafeId}</div>;
};

export default CafeDetailPage;
