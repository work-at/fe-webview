declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";

  // eslint-disable-next-line no-unused-vars
  // const content: (props: SVGProps<SVGElement>) => ReactElement;
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
	export default src;
}

declare module "*.gif" {
  const value: any;
  export default value;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}