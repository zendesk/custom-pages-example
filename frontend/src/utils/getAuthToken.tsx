

export const getAuthToken = async () => {
    const request: RequestInfo = new Request( 'https://testcustompages.free.beeceptor.com' + '/authenticate', {  //process.env.REACT_APP_API_URL
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            key: process.env.REACT_APP_USER_KEY,
            id: process.env.REACT_APP_USER_ID,
            name: process.env.REACT_APP_USER_NAME
        }),
      });

      const res = await fetch(request);

      const data = await res.json();
      return data.token;
};


