import 'vitest-canvas-mock';
import createFetchMock from 'vitest-fetch-mock';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';
import MockGaugeComponent from './tests/__mock_d3';
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'
import { configure as configureReact } from "@testing-library/react";
import { configure as configureDom } from "@testing-library/dom";

configureReact({ asyncUtilTimeout: 10000 });
configureDom({ asyncUtilTimeout: 10000 });



const fetchMocker = createFetchMock(vi);
global.fetch = fetch;
global.jest = jest;
vi.mock("react-gauge-component", () => ({
    default: MockGaugeComponent,
  }));
fetchMocker.enableMocks();
const mockResponse1 =  [
    {

datetime: "2023-11-24T00:00:00",
values: 
    {
      i_24: 1,
      i_22: 2,
      i_23: 3,
      i_17: 4,
      i_13: 5,
      i_14: 6,
      i_12: 7,
      fc_21: 8,
      i_45: 9,
      i_1: 10,
      i_2: 11,
      i_3: 12,
      i_4: 13,
      i_5: 14,
      i_6: 15,
      i_7: 16,
      i_8: 17,
      i_11: 18,
      fc_22: 1,
      fc_25: 2,
      fc_32: 3,
      fc_33: 4,
      fc_34: 5,
      fc_35: 6,
      fc_36: 7,
      i_17str: 'test',i_15: 14
    },
    // Add more mock data objects as needed
}];

const mockResponse2 = [ {
  datetime: "2023-11-24T00:00:00",
  values: { mb_o_103: 1, mb_o_114: 2, mb_o_84: 3, mb_o_93: 4 },}
    // Add more mock data objects as needed
  ];

  const mockResponse3 = [ {
    datetime: "2023-11-24T00:00:00",
    values: { a25: 1, a26: 2, a27: 3, a30: 4, a50: 5, a51:6, a52: 7, a53: 8 },}
      // Add more mock data objects as needed
    ];

    const mockResponse4 = [{
    datetime: "2023-11-24T00:00:00",
values: {
  "lvl_a50": "No Alert",
  "shap_a25": -1.3679925080014017,
  "cause_r02": null,
  "shap_a26": -0.6186590211489166,
  "cause_r01": "ORP",
  "shap_a27": -0.034762475552445424,
  "shap_a53": -0.19158304455869046,
  "shap_a50": -1.2676698093967205,
  "shap_a51": -0.46992494459416756,
  "shap_a30": -0.928025791498977,
  "shap_a52": -0.2804543427774399,
  "lvl_a27": "Critical",
  "lvl_a26": "No Alert",
  "anomaly_r01": -1,
  "anomaly_r02": 1,
  "lvl_a53": "No Alert",
  "lvl_a30": "No Alert",
  "lvl_a52": "No Alert",
  "lvl_a51": "No Alert",
  "anomaly_scores_r01": 0.5880474799798956,
  "lvl_a25": "No Alert",
  "anomaly_scores_r02": 0.570961436389109
}
    }];

    const mockResponse5 = [{
      datetime: "2023-11-24T00:00:00",
      values: {
          "ph": 7.56347952380222,
          "do": 0.025200664470424,
          "issued": "2023-11-02 04:20:00",
          "orp": -208.234866899002
      }
    }]; 

    const mockResponse6 = [{
      datetime: "2023-11-24T00:00:00",
      values: {
          "a19": 7,
          "a32": 10
      }
    }];

    const mockResponse7 = [{
      datetime: "2023-11-24T00:00:00",
      values: {
        "a70": 0.83,
        "a3": 5,
        a2: 2,
        cod: 9,
        ivf: 2,
      }
    }];

    const mockResponse8 = [{
      datetime: "2023-11-24T00:00:00",
      values: {
          "ssp20": 18095.505678003057,
          "ssp21": 1338847.3028150764,
          "ssp08": 0.65,
          "ssp09": 0.27,
          "ssp02": 341.73,
          "ssp24": 3.4992837978726645,
          "ssp03": 42.75746,
          "ssp25": 0.6224936205739875,
          "ssp22": 0.65,
          "ssp01": 133.58,
          "ssp23": 101,
          "ssp06": 3.1548584818654346,
          "ssp07": 2.2,
          "ssp04": 5.03978,
          "ssp05": 286.132112528528,
          "ssp10": 0.3,
          "ssp19": 210.78419871565777,
          "ssp13": 31.23,
          "ssp14": 2.24,
          "ssp11": 131,
          "ssp12": 82.1,
          "ssp17": 188.3760348770917,
          "ssp18": 31.773965122908294,
          "ssp15": 20.14,
          "ssp16": 220.15
        
      }
    }];

    const mockResponse9 = [{
      datetime: "2023-11-24T00:00:00",
      values: {
        
          "ssp20": 19091.5193752533,
          "ssp21": 2719020.7117972337,
          "ssp08": 0.76,
          "ssp09": 0.35,
          "ssp02": 341.73,
          "ssp24": 2.9,
          "ssp03": 42.75746,
          "ssp25": 0.69,
          "ssp22": 0.76,
          "ssp01": 133.58,
          "ssp23": 122,
          "ssp06": 3.269805679661454,
          "ssp07": 3.437646890692165,
          "ssp04": 5.03978,
          "ssp05": 249.517525601585,
          "ssp10": 0.42,
          "ssp19": 203.4,
          "ssp13": 17.2,
          "ssp14": 1.17,
          "ssp11": 122,
          "ssp12": 55.3,
          "ssp17": 174.2,
          "ssp18": 22.938561836349095,
          "ssp15": 15,
          "ssp16": 205.3
        }
      
    }];

    const mockResponse10 = [{
      "datetime": "2023-10-18T00:00:00",
      "values": {
        "ssp20": 19851.2,
        "ssp21": 28023,
        "ssp08": 0.7992283696563901,
        "ssp09": 0.23365586569697772,
        "ssp02": 341.73,
        "ssp24": 2.98,
        "ssp03": 42.75746,
        "ssp25": 0.72,
        "ssp22": 0.7992283696563901,
        "ssp01": 133.58,
        "ssp23": 108.12114498918,
        "ssp06": 3.269805679661454,
        "ssp07": 2.9,
        "ssp04": 5.03978,
        "ssp05": 249.517525601585,
        "ssp10": 0.527796347610348,
        "ssp19": 199.5,
        "ssp13": 25.3,
        "ssp14": 1.01,
        "ssp11": 108.12114498918,
        "ssp12": 52.3,
        "ssp17": 163.2,
        "ssp18": 32.20000000000002,
        "ssp15": 12,
        "ssp16": 195.4
      }
    }];

    const mockResponse11 = [{
        "id": "a1",
        "type": "DOUBLE",
        "name": "Feeding pump",
        "defaultValue": "1",
        "group": null,
        "meta": {
            "unit": null
        }
    },
    {
      "id": "a2",
      "type": "DOUBLE",
      "name": "TCOD",
      "defaultValue": "520.416255531203",
      "group": null,
      "meta": {
          "unit": "mg/L"
      }
  }
  ];

  const mockResponse12 = [{
    "datetime": "2023-10-18T00:00:00",
"values": {
  "a3a32p": 0.6660130718954249,
  "a6a58p": 0.048593350383631675,
  "a3a57p": 0.6738562091503267,
  "a6a33p": 0
}
  }];

  const mockResponse13 = [{
    "timeSeriesId": "lab_data_extension",
    "column": "a76a85s",
    "timestamp": new Date("2023-11-24T00:00:00").toISOString(),
    "severity": "CRITICAL"
  }, {
    "timeSeriesId": "lab_data_extension",
    "column": "a77a86s",
    "timestamp": new Date("2023-11-24T00:00:00").toISOString(),
    "severity": "HIGH"
  }]



export const restHandlers = [
  http.get('http://77.68.121.183/zprime/data/json/dp_demo2/pbr_indicators_output', () => {
    return HttpResponse.json(mockResponse1)
  }),
  http.get('http://77.68.121.183/zprime/data/json/dp_demo2/pbr_model_output', () => {
    return HttpResponse.json(mockResponse2)
  }),
  http.get('http://77.68.121.183/zprime/data/json/dp_demo2/sensor_data_clean', () => {
    return HttpResponse.json(mockResponse3)
  }),
  http.get('http://77.68.121.183/zprime/data/json/dp_demo2/alerts', () => {
    return HttpResponse.json(mockResponse4)
  }),
  http.get('http://77.68.121.183/zprime/data/json/dp_demo2/reactor01_forecast_30min', () => {
    return HttpResponse.json(mockResponse5)
  }),
  http.get('http://77.68.121.183/zprime/data/json/dp_demo2/reactor01_forecast_60min', () => {
    return HttpResponse.json(mockResponse5)
  }),
  http.get('http://77.68.121.183/zprime/data/json/dp_demo2/reactor01_forecast_120min', () => {
    return HttpResponse.json(mockResponse5)
  }),
  http.get('http://77.68.121.183/zprime/data/json/dp_demo1/lab_data', () => {
    return HttpResponse.json(mockResponse6)
  }),
  http.get('http://77.68.121.183/zprime/data/json/dp_demo2/lab_data', () => {
    return HttpResponse.json(mockResponse7)
  }),
 http.get('http://77.68.121.183/zprime/data/json/dp_demo2/baseline_srt', () => {
  return HttpResponse.json(mockResponse8)
}),
http.get('http://77.68.121.183/zprime/data/json/dp_demo2/scenario1_srt', () => {
  return HttpResponse.json(mockResponse9)
}),
http.get('http://77.68.121.183/zprime/data/json/dp_demo2/scenario2_srt', () => {
  return HttpResponse.json(mockResponse10)
}),
http.get('http://77.68.121.183/zprime/parameters/process/dp_demo2', () => {
  return HttpResponse.json(mockResponse11)
}),
//http://77.68.121.183/zprime/data/json/dp_demo2/lab_data_extension
http.get('http://77.68.121.183/zprime/data/json/dp_demo2/lab_data_extension', () => {
  return HttpResponse.json(mockResponse12)
}),
// http://77.68.121.183/zprime/alerts/process/dp_demo2
http.get('http://77.68.121.183/zprime/alerts/process/dp_demo2', () => {
  return HttpResponse.json(mockResponse13)
}),
  http.get('https://api.open-meteo.com/v1/forecast', () => {
    return HttpResponse.json(
        {
          utcOffsetSeconds: () => 3600, // example offset in seconds (1 hour)
          hourly: () => ({
            time: () => 1625158800, // example start time in UNIX timestamp
            timeEnd: () => 1625202000, // example end time in UNIX timestamp
            interval: () => 3600, // example interval in seconds (1 hour)
            variables: (index) => ({
              valuesArray: () => {
                switch (index) {
                  case 0: return new Float32Array([20.5, 21.0, 19.8]); // temperature values
                  case 1: return new Float32Array([0.1, 0.0, 0.2]); // precipitation values
                  case 2: return new Float32Array([300, 500, 400]); // radiation values
                  case 3: return new Float32Array([18.0, 18.5, 18.2]); // temperatureMin values
                  default: return new Float32Array([]);
                }
              },
            }),
          }),
          daily: () => ({
            time: () => 1625158800, // example start time in UNIX timestamp
            timeEnd: () => 1627740800, // example end time in UNIX timestamp (10 days later)
            interval: () => 86400, // example interval in seconds (1 day)
            variables: (index) => ({
              valuesArray: () => {
                switch (index) {
                  case 0: return new Float32Array([20.5, 21.0, 19.8, 20.0, 22.0]); // temperature values
                  case 1: return new Float32Array([0.1, 0.0, 0.2, 0.3, 0.0]); // precipitation values
                  case 2: return new Float32Array([300, 500, 400, 350, 450]); // radiation values
                  case 3: return new Float32Array([18.0, 18.5, 18.2, 19.0, 20.0]); // temperatureMin values
                  default: return new Float32Array([]);
                }
              },
            }),
          }),
        }
      )
  })
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => {
  
  server.listen({ onUnhandledRequest: 'error' })
})

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())

