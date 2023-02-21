export const sleep = async(microSecond: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, microSecond);
  });
}