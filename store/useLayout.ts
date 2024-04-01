export enum Layouts {
  Default = 'default',
  Custom = 'custom',
}

export const useLayout = defineStore('useLayout', () => {
  const layout = ref(Layouts.Default);
  const count = ref(0);

  const set = (ly: Layouts) => {
    layout.value = ly;
  };

  const increment = () => {
    count.value++;
  };

  return {
    layout,
    set,
    count,
    increment,
  };
});
