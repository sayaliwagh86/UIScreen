/*
Testing file to check the working of the fetchCall function.
*/

import React from "react";
import { configure } from "enzyme";
import "@testing-library/jest-dom/extend-expect";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";
import fetchCall from "./fetchCall";
import * as Constant from "../../../Constant/constant";
import { logMessage } from "../../utlis/Logger";

// Mocking the axios to use the mocked version of axios
jest.mock("axios");

configure({ adapter: new Adapter() });

// Mock data for the mock function
const data = {
  coord: {
    lon: 85.85,
    lat: 19.8,
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03d",
    },
  ],
  base: "stations",
  main: {
    temp: 307.15,
    feels_like: 314.1,
    temp_min: 307.15,
    temp_max: 307.15,
    pressure: 1003,
    humidity: 71,
  },
  visibility: 6000,
  wind: {
    speed: 2.1,
    deg: 190,
  },
  clouds: {
    all: 40,
  },
  dt: 1600328286,
  sys: {
    type: 1,
    id: 9113,
    country: "IN",
    sunrise: 1600301070,
    sunset: 1600345070,
  },
  timezone: 19800,
  id: 1259184,
  name: "Puri",
  cod: 200,
};

// Testing the get method
describe("fetchCall api testing for get method", () => {
  // Testing if it returns the data correctly
  test("successfull axios call, returns the correct data", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ status: 200, data })
    );
    await fetchCall(
      Constant.Weather_API + "puri&APPID=" + Constant.APPID,
      "get"
    )
      .then((res) => {
        expect(res).toEqual(data);
      })
      .catch((err) => logMessage("Error is ", err));
  });
  // Testing if it returns the error correctly
  test("unsuccessfull axios call, returns error", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject({ status: 200, data })
    );
    await fetchCall(
      Constant.Weather_API + "puri&APPID=" + Constant.APPID,
      "get"
    )
      .then((res) => {
        expect(res).toBe(undefined);
      })
      .catch((err) => logMessage("Error is ", err));
  });
});

// Testing the post method
describe("fetchCall api testing for post method", () => {
  const body = {
    completed: false,
    id: 201,
    title: "clean room",
    userId: 1,
  };
  // Testing if it returns the status correctly
  test("successfull axios call, returns the correct data", async () => {
    axios.post.mockImplementationOnce(() =>
      Promise.resolve({ status: 201, body })
    );
    await fetchCall(
      "https://jsonplaceholder.typicode.com/todos",
      "post",
      undefined,
      body
    )
      .then((res) => {
        logMessage("APi is ", res.status);
      })
      .catch((err) => logMessage("Error is from post", err));
  });
  // Testing if it returns the error correctly
  test("unsuccessfull axios call, returns error", async () => {
    axios.post.mockImplementationOnce(() =>
      Promise.reject({ status: 201, body })
    );
    await fetchCall(
      "https://jsonplaceholder.typicode.com/todos",
      "post",
      undefined,
      body
    )
      .then((res) => {
        logMessage("Error from post then is ", res);
      })
      .catch((err) => logMessage("Error is ", err));
  });
});

// Testing the put method
describe("fetchCall api testing for put method", () => {
  const body = {
    completed: false,
    id: 5,
    title: "hello task",
    userId: 1,
  };
  // Testing if it returns the status correctly
  test("successfull axios call, returns the correct data", async () => {
    axios.put.mockImplementationOnce(() =>
      Promise.resolve({ status: 200, body })
    );
    await fetchCall(
      "https://jsonplaceholder.typicode.com/todos/5",
      "put",
      undefined,
      body
    )
      .then((res) => {
        logMessage("APi is ", res);
      })
      .catch((err) => logMessage("Error is from put", err));
  });
  // Testing if it returns the error correctly
  test("unsuccessfull axios call, returns error", async () => {
    axios.put.mockImplementationOnce(() =>
      Promise.reject({ status: 200, body })
    );
    await fetchCall(
      "https://jsonplaceholder.typicode.com/todos/5",
      "put",
      undefined,
      body
    )
      .then((res) => {
        logMessage("Error from put then is ", res);
      })
      .catch((err) => logMessage("Error is ", err));
  });
});

// Testing the delete method
describe("fetchCall api testing for delete method", () => {
  const body = {};
  // Testing if it returns the status correctly
  test("successfull axios call, returns the correct data", async () => {
    axios.delete.mockImplementationOnce(() =>
      Promise.resolve({ status: 200, body })
    );
    await fetchCall(
      "https://jsonplaceholder.typicode.com/todos/5",
      "delete",
      undefined,
      body
    )
      .then((res) => {
        logMessage("APi is ", res);
      })
      .catch((err) => logMessage("Error is from put", err));
  });
  // Testing if it returns the error correctly
  test("unsuccessfull axios call, returns error", async () => {
    axios.delete.mockImplementationOnce(() =>
      Promise.reject({ status: 200, body })
    );
    await fetchCall(
      "https://jsonplaceholder.typicode.com/todos/5",
      "delete",
      undefined,
      body
    )
      .then((res) => {
        logMessage("Error from put then is ", res);
      })
      .catch((err) => logMessage("Error is ", err));
  });
});

// Test for the invalid case of the switch case. When user sends invalid methodType
describe("envoking the default case of the switch case", () => {
  test("should console: Invalid methodType", () => {
    const consoleSpy = jest.spyOn(console, "log");
    fetchCall(undefined, "patch");
    expect(consoleSpy).toHaveBeenCalledWith("Invalid methodType");
  });
});

// Test for Offline mode i.e., when the user is not connected to the internet
describe("when browser is offLine", () => {
  test("should display an alert window with: You are not connected to the internet. Please check your connection", () => {
    const logSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    jest.spyOn(navigator, "onLine", "get").mockReturnValueOnce(false);
    fetchCall();
    expect(logSpy).toBeCalledWith(
      "You are not connected to the internet. Please check your connection"
    );
  });
});
