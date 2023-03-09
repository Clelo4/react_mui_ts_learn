import { sleep } from "./index";

export const login = async(data: any) => {
  await sleep(2000);
  return await fetch('/api/authless/user/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  }).catch(() => {});
}