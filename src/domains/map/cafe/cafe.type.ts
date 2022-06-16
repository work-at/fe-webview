import { MapItem } from "../map.type";

type CafeEvaluationType = 'good-wifi' | 'not-confusing' | 'low-price';

type CafeEvaluation = {
  type: CafeEvaluationType;
  point: number;
  price: number;
}

export type Cafe = MapItem<CafeEvaluation>;