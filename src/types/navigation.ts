export type BaseStackProps = {
  List: undefined;
  Details: { imdbID: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BaseStackProps {}
  }
}
