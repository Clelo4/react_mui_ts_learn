export const sleep = async(microSecond: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, microSecond);
  });
}

export const isAbsoluteUrl = (url: string) => {
  if (!url) return false;
  return url.startsWith('http://') || url.startsWith('https://');
}