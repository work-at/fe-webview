export const wait = (seconds: number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("worked!");
      resolve(undefined);
    }, seconds * 1000);
  });
