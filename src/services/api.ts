function get<T>(url: string): Promise<T> {
  return fetch(url)
    .then((response) => response.json())
    .then((response: T) => response)
    .catch((error: Error) => {
      throw error;
    });
}

const api = {
  get,
};

export default api;
