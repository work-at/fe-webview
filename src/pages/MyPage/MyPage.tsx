import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useFlow } from "@/stack";

const MyPage = () => {
  const { push } = useFlow();

  return (
    <StackLayout appBar={{ title: "마이페이지" }} navigationPath="my-page">
      <button type="button" onClick={() => push("Test", {})}>
        TEST_BUTTON
      </button>
    </StackLayout>
  );
};

export default MyPage;
