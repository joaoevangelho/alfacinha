import shops from './../data/shopsData.json';

const listShops = () => {
  return new Promise((resolve, reject) => {
    resolve(shops);
  });
};

export { listShops };
