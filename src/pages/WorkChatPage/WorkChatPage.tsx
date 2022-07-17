import { useParams } from "react-router-dom";

const WorkChatPage = () => {
  const { workerId } = useParams<{ workerId: string }>();

  if (!workerId) {
    // TODO : 에러 메세지 피드백 후 리디렉션
    throw new Error("워크챗 대상이 지정되지 않았습니다.");
  }

  return <div>WorkChatPage</div>;
};

export default WorkChatPage;
