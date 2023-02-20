
export const login = async(data: any) => {
  return await fetch('/api/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  });
}