export const asendingSort = (copyData: any) => {
  [...copyData]?.sort((a: any, b: any) => (a.name > b.name ? 1 : -1));
};
