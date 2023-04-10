export const fetchData = async () => {
    const response = await fetch('http://localhost:3333/posts');
    const data = await response.json();
    return data;
  }
export const signupURL= "http://localhost:3333/users"