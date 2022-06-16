export type MapItem<Evaluation> = {
  id: string;
  name: string;
  imageUrl?: string;
  evaluations: Evaluation[];
  coordinates: {
    x: number;
    y: number;
  };
};
