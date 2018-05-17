export type StringOmit<L1 extends string, L2 extends string> = ({ [P in L1]: P } &
  { [P in L2]: never } & { [key: string]: never })[L1];
export type ObjectOmit<O, K extends string> = Pick<O, StringOmit<keyof O, K>>;

declare module "mobx-react" {
  export function inject<D>(
    mapStoreToProps: (store: any) => D
  ): <A extends D>(
    component: React.ComponentType<A>
  ) => React.SFC<ObjectOmit<A, keyof D>>;
}
