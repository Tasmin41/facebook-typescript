import axios from "axios";


export const BASE_URL ="http://localhost:3333"
axios.defaults.withCredentials = true;
const callApi = async (
  url: string,
  method: "get" | "post" = "get",
  body: {} | null = null,
  is_response_allow: boolean = false,
  isErrHandlingEnabled: boolean = true,
) => {
  if (url.charAt(0) !== "/") {
    url = "/" + url;
  }

  let apiUrl = url;
  console.log(apiUrl,'api')

  if (isErrHandlingEnabled) {
    try {
      const res = await axios({
        url:BASE_URL+apiUrl,
        method: method,
        data: body,
      });
      return res.data;
    } catch (e) {
      if (is_response_allow) {
        return e?.response;
      }
      if (e.response) {
        if (e?.response?.status === 400 || e?.response?.status === 401) {
          // msg.e(e.response.data?.msg || e.response.data?.message || "Something went wrong");
        } else if (e.response.status === 422) {
          // msg.showBackendErrors(e.response);
        } else if (e.response.status === 403) {
          window.location.href = "/login";
        } else if (e.response.data.msg || e.response.data.message) {
          // msg.e(e.response.data.msg || e.response.data.message);
        } else {
          // msg.swr();
        }
      } else {
        // msg.swr();
      }
      if (is_response_allow) {
        return e?.response;
      }
      return false;
    }
  } else {
    const res = await axios({
      url: apiUrl,
      method: method,
      data: body,
    });
    return res.data;
  }
};

export default callApi;
