import { useParams } from "react-router-dom";

const WorkerDetailPage = () => {
  const { workerId } = useParams<{ workerId: string }>();

  return <div>워케이셔너 아이디 : {workerId}</div>;
};

export default WorkerDetailPage;
