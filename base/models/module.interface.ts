export interface IMenuItem {
  icon: JSX.Element;
  link: string;
  name?: string;
}
export interface ISearchProps {
  onFocusChange: (focused: boolean) => void;
}
