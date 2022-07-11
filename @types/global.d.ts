declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";

  const content: (props: SVGProps<SVGElement>) => ReactElement;
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