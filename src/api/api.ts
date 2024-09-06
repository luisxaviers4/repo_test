import axios from "axios";


const request = axios.create();
const baseUrl = import.meta.env.VITE_BASE_URL;
const userName = import.meta.env.VITE_USER_NAME;
const userPassword = import.meta.env.VITE_PASSWORD;

const encodeCredentials = (email: string, password: string) => {
    return btoa(`${email}:${password}`);
};

const apis: any = {

    getsustainablePlaningData: (type: string, from: string | null, to: string | null, columns: string | null, limit: number | null) => {
        let url = `${baseUrl}/data/json/dp_demo2/${type}`
        if (from && to) {
            url += `?from=${from}&to=${to}`;
        }
        if (from && to && columns) {
            url += `&columns=${columns}`
        } else if ((!from || !to) && columns) {
            url += `?from=${from}&to=${to}columns=${columns}`
        }
        if (limit) {
            url += `&limit=${limit}`
        }
        return request
            .get(
                url,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Basic ${encodeCredentials(userName, userPassword)}`
                    },
                }
            )
            .then((res) => {
                return {
                    data: res ? res.data : null,
                };
            })
            .catch((error) => {
                return { statusCode: error && error.response.status, data: [] };
            });
    },

    getData: (demoType: string, dataType: string, columns: string, limit: string | null, from: string | null, to: string | null) => {
        let url = `${baseUrl}/data/json/${demoType}/${dataType}?`
        if (from && to) {
            url += `from=${from}&to=${to}`;
        }
        if (columns) {
            url += `&columns=${columns}`
        }
        if (limit) {
            url += `&limit=${limit}`
        }

        return request
            .get(
                url,//${baseUrl}/data/json/${demoType}/${dataType}?columns=${columns}
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Basic ${encodeCredentials(userName, userPassword)}`
                    },
                }
            )
            .then((res) => {
                return {
                    data: res ? res.data : null,
                };
            })
            .catch((error) => {
                return { statusCode: error && error.response.status };
            });
    },

    fetchNotifications: () => {
      const  url = `${baseUrl}/alerts/process/dp_demo2`

        return request
            .get(
                url,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Basic ${encodeCredentials(userName, userPassword)}`
                    },
                }
            )
            .then((res) => {
                return {
                    data: res ? res.data : null,
                };
            })
            .catch((error) => {
                return { statusCode: error && error.response.status };
            })}
            ,
    getParameters: () => {
        let url = `${baseUrl}/parameters/process/dp_demo2`

        return request
            .get(
                url,//${baseUrl}/data/json/${demoType}/${dataType}?columns=${columns}
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Basic ${encodeCredentials(userName, userPassword)}`
                    },
                }
            )
            .then((res) => {
                return {
                    data: res ? res.data : null,
                };
            })
            .catch((error) => {
                return { statusCode: error && error.response.status };
            });
    },

    handleLogin: async (username: string, password: string) => {
        try {
          const response = await axios.post(
            "http://77.68.121.183/zprime/login-submit",
            `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
            { headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" } }
          );
          if (response.status === 204) {
            // Success, navigate to processes or home page
            return {
                data: response,
            };
          }
        } catch (error: any) {
            return { statusCode: error && error?.response.status };
        }
      },
      handleLogout: async () => {
        try {
          const response = await axios.post("http://77.68.121.183/zprime/logout");
          return {
            data: response,
        }
        } catch (err: any) {
            return { statusCode: err && err?.response.status }
        }
      }

}

export default apis;