export const login = async (data: { email: string; password: string; hcaptchaToken: string }) => {
  return await fetch('/api/authless/user/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .catch(() => {});
};

export const logout = async () => {
  return await fetch('/api/user/logout', {
    method: 'post'
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .catch(() => {});
};

export const getUserInfo = async () => {
  return await fetch('/api/authless/user/info', {
    method: 'get'
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .catch(() => {});
};
