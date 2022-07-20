import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useActivityParams } from "@stackflow/react";

const WorkChatPage = () => {
  const { workerId } = useActivityParams<{ workerId: string }>();

  if (!workerId) {
    // TODO : 에러 메세지 피드백 후 리디렉션
    throw new Error("워크챗 대상이 지정되지 않았습니다.");
  }

  return <StackLayout appBar={{ title: "워크챗" }}>WorkChatPage</StackLayout>;
};

export default WorkChatPage;
