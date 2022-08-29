import { AccommodationReviewTag } from "./accommodation.dto";

export type AccommodationReviewCommand = {
  accommodationId: number;
  tags: AccommodationReviewTag[];
};
