import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useFlow } from "@/stack";

const AccommodationPage = () => {
  const { push } = useFlow();
  return (
    <StackLayout appBar={{ title: "숙소" }} navigationPath="accommodation">
      <button type="button" onClick={() => push("Test", {})}>
        TEST_BUTTON
      </button>
    </StackLayout>
  );
};

export default AccommodationPage;
