import { create } from 'apisauce';
import { API_TIMEOUT } from '~/constants/api';
import configs from '~/constants/configs';

const API = create({
  baseURL: configs.endPoint,
  timeout: API_TIMEOUT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

if (__DEV__) {
  API.addMonitor(response => {
    const { url, method, timeout } = response.config;
    const { data, ok, status, duration } = response;
    console.log(
      `###############################\n\t\tAPI MONITOR\nRequest: ${url}\nmethod: ${method}\ntimeout: ${timeout}\n\nResponse: ${ok
        ? 'OK'
        : 'ERROR'}\nstatus: ${status}\nduration: ${duration},\ndata:\n${JSON.stringify(
        data
      )}\n###############################`
    );
  });
}

export { API };
