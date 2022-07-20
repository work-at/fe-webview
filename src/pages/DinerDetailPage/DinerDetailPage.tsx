import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useActivityParams } from "@stackflow/react";

const DinerDetailPage = () => {
  const { dinerId } = useActivityParams<{ dinerId: string }>();

  return <StackLayout>음식점 아이디 : {dinerId}</StackLayout>;
};

export default DinerDetailPage;
