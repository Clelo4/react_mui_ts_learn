export const login = async(data: any) => {
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

export const logout = async() => {
  return await fetch('/api/user/logout', {
    method: 'post',
  })
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  }).catch(() => {});
}

export const getUser = async() => {
  return await fetch('/api/authless/user/get', {
    method: 'get',
  })
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  }).catch(() => {});
}