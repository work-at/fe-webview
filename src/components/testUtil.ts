export const wait = (seconds: number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(undefined);
    }, seconds * 1000);
  });
