export type InputType = {
  placeholder: string;
  value?: string | number;
  setValue?: ((val: string) => void) | ((val: number) => void) | any;
  id: string;
  type: string;
};
