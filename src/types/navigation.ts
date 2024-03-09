export type BaseStackProps = {
  List: undefined;
  Details: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BaseStackProps {}
  }
}
