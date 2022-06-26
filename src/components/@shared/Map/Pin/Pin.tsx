export type PinItem = {
  id: string;
  x: number;
  y: number;
  name: string;
};

export type PinProps = {
  name: string;
};

const Pin = ({}: PinProps) => {
  return <div>Pin</div>;
};

export default Pin;
