import { MapItem } from "../map.type";

type EvaluationType = 'good-food' | 'wide-place' | 'low-price';

type Evaluation = {
  type: EvaluationType;
  point: number;
  price: number;
}

export type Diner = MapItem<Evaluation>