import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { AccommodationRegion } from "@/domains/accommodation/accommodation.dto";
import { useFlow } from "@/stack";
import { useCallback } from "react";

const AccommodationPage = () => {
  const { push } = useFlow();

  const handleAccommodationListRoute = useCallback(
    () => push("AccommodationList", { region: "JEJU" as AccommodationRegion }),
    [push]
  );

  return (
    <StackLayout appBar={{ title: "숙소" }} navigationPath="accommodation">
      <button type="button" onClick={handleAccommodationListRoute}>
        숙소 리스트 열기
      </button>
    </StackLayout>
  );
};

export default AccommodationPage;
