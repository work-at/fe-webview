import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useFlow } from "@/stack";

const CommunityPage = () => {
  const { push } = useFlow();

  return (
    <StackLayout appBar={{ title: "커뮤니티" }}>
      <button type="button" onClick={() => push("Test", {})}>
        TEST_BUTTON
      </button>
    </StackLayout>
  );
};

export default CommunityPage;
