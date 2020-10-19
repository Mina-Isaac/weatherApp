const cities = [
  {
    name: "Tokyo",
    lat: 35.6897,
    lng: 139.6922,
  },
  {
    name: "Jakarta",
    lat: -6.2146,
    lng: 106.8451,
  },
  {
    name: "Delhi",
    lat: 28.66,
    lng: 77.23,
  },
  {
    name: "Mumbai",
    lat: 18.9667,
    lng: 72.8333,
  },
  {
    name: "Manila",
    lat: 14.5958,
    lng: 120.9772,
  },
  {
    name: "Shanghai",
    lat: 31.1667,
    lng: 121.4667,
  },
  {
    name: "Sao Paulo",
    lat: -23.5504,
    lng: -46.6339,
  },
  {
    name: "Seoul",
    lat: 37.5833,
    lng: 127,
  },
  {
    name: "Mexico City",
    lat: 19.4333,
    lng: -99.1333,
  },
  {
    name: "Guangzhou",
    lat: 23.1288,
    lng: 113.259,
  },
  {
    name: "Beijing",
    lat: 39.905,
    lng: 116.3914,
  },
  {
    name: "Cairo",
    lat: 30.0561,
    lng: 31.2394,
  },
  {
    name: "New York",
    lat: 40.6943,
    lng: -73.9249,
  },
  {
    name: "Kolkata",
    lat: 22.5411,
    lng: 88.3378,
  },
  {
    name: "Moscow",
    lat: 55.7558,
    lng: 37.6178,
  },
  {
    name: "Bangkok",
    lat: 13.75,
    lng: 100.5167,
  },
  {
    name: "Buenos Aires",
    lat: -34.5997,
    lng: -58.3819,
  },
  {
    name: "Shenzhen",
    lat: 22.535,
    lng: 114.054,
  },
  {
    name: "Dhaka",
    lat: 23.7161,
    lng: 90.3961,
  },
  {
    name: "Lagos",
    lat: 6.45,
    lng: 3.4,
  },
  {
    name: "Istanbul",
    lat: 41.01,
    lng: 28.9603,
  },
  {
    name: "Osaka",
    lat: 34.6936,
    lng: 135.5019,
  },
  {
    name: "Karachi",
    lat: 24.86,
    lng: 67.01,
  },
  {
    name: "Bangalore",
    lat: 12.9699,
    lng: 77.598,
  },
  {
    name: "Tehran",
    lat: 35.7,
    lng: 51.4167,
  },
  {
    name: "Kinshasa",
    lat: -4.3317,
    lng: 15.3139,
  },
  {
    name: "Ho Chi Minh City",
    lat: 10.8167,
    lng: 106.6333,
  },
  {
    name: "Los Angeles",
    lat: 34.1139,
    lng: -118.4068,
  },
  {
    name: "Rio de Janeiro",
    lat: -22.9083,
    lng: -43.1964,
  },
  {
    name: "Nanyang",
    lat: 32.9987,
    lng: 112.5292,
  },
  {
    name: "Chennai",
    lat: 13.0825,
    lng: 80.275,
  },
  {
    name: "Chengdu",
    lat: 30.6636,
    lng: 104.0667,
  },
  {
    name: "Lahore",
    lat: 31.5497,
    lng: 74.3436,
  },
  {
    name: "Paris",
    lat: 48.8566,
    lng: 2.3522,
  },
  {
    name: "London",
    lat: 51.5072,
    lng: -0.1275,
  },
  {
    name: "Linyi",
    lat: 35.0606,
    lng: 118.3425,
  },
  {
    name: "Tianjin",
    lat: 39.1467,
    lng: 117.2056,
  },
  {
    name: "Shijiazhuang",
    lat: 38.0422,
    lng: 114.5086,
  },
  {
    name: "Baoding",
    lat: 38.8671,
    lng: 115.4845,
  },
  {
    name: "Zhoukou",
    lat: 33.625,
    lng: 114.6418,
  },
  {
    name: "Lima",
    lat: -12.05,
    lng: -77.0333,
  },
  {
    name: "Hyderabad",
    lat: 17.3667,
    lng: 78.4667,
  },
  {
    name: "Bogota",
    lat: 4.6126,
    lng: -74.0705,
  },
  {
    name: "Weifang",
    lat: 36.7167,
    lng: 119.1,
  },
  {
    name: "Nagoya",
    lat: 35.1167,
    lng: 136.9333,
  },
  {
    name: "Wuhan",
    lat: 30.5872,
    lng: 114.2881,
  },
  {
    name: "Heze",
    lat: 35.2333,
    lng: 115.4333,
  },
  {
    name: "Ganzhou",
    lat: 25.8292,
    lng: 114.9336,
  },
  {
    name: "Tongshan",
    lat: 34.261,
    lng: 117.1859,
  },
  {
    name: "Chicago",
    lat: 41.8373,
    lng: -87.6862,
  },
  {
    name: "Handan",
    lat: 36.6116,
    lng: 114.4894,
  },
  {
    name: "Luanda",
    lat: -8.8383,
    lng: 13.2344,
  },
  {
    name: "Fuyang",
    lat: 32.8986,
    lng: 115.8045,
  },
  {
    name: "Kuala Lumpur",
    lat: 3.1478,
    lng: 101.6953,
  },
  {
    name: "Jining",
    lat: 35.4,
    lng: 116.5667,
  },
  {
    name: "Dongguan",
    lat: 23.0475,
    lng: 113.7493,
  },
  {
    name: "Hanoi",
    lat: 21.0245,
    lng: 105.8412,
  },
  {
    name: "Pune",
    lat: 18.5196,
    lng: 73.8553,
  },
  {
    name: "Chongqing",
    lat: 29.55,
    lng: 106.5069,
  },
  {
    name: "Changchun",
    lat: 43.9,
    lng: 125.2,
  },
  {
    name: "Zhumadian",
    lat: 32.9773,
    lng: 114.0253,
  },
  {
    name: "Ningbo",
    lat: 29.875,
    lng: 121.5492,
  },
  {
    name: "Onitsha",
    lat: 6.1667,
    lng: 6.7833,
  },
  {
    name: "Nanjing",
    lat: 32.05,
    lng: 118.7667,
  },
  {
    name: "Hefei",
    lat: 31.8639,
    lng: 117.2808,
  },
  {
    name: "Ahmadabad",
    lat: 23.03,
    lng: 72.58,
  },
  {
    name: "Hong Kong",
    lat: 22.305,
    lng: 114.185,
  },
  {
    name: "Khartoum",
    lat: 15.6031,
    lng: 32.5265,
  },
  {
    name: "Nantong",
    lat: 31.9829,
    lng: 120.8873,
  },
  {
    name: "Yancheng",
    lat: 33.3936,
    lng: 120.1339,
  },
  {
    name: "Foshan",
    lat: 23.0292,
    lng: 113.1056,
  },
  {
    name: "Nanning",
    lat: 22.8192,
    lng: 108.315,
  },
  {
    name: "Hengyang",
    lat: 26.8968,
    lng: 112.5857,
  },
  {
    name: "Xi'an",
    lat: 34.2667,
    lng: 108.9,
  },
  {
    name: "Shenyang",
    lat: 41.8039,
    lng: 123.4258,
  },
  {
    name: "Tangshan",
    lat: 39.6292,
    lng: 118.1742,
  },
  {
    name: "Shaoyang",
    lat: 27.2418,
    lng: 111.4725,
  },
  {
    name: "Changsha",
    lat: 28.1987,
    lng: 112.9709,
  },
  {
    name: "Santiago",
    lat: -33.45,
    lng: -70.6667,
  },
  {
    name: "Zhengzhou",
    lat: 34.7492,
    lng: 113.6605,
  },
  {
    name: "Zhanjiang",
    lat: 21.1967,
    lng: 110.4031,
  },
  {
    name: "Riyadh",
    lat: 24.65,
    lng: 46.71,
  },
  {
    name: "Cangzhou",
    lat: 38.3037,
    lng: 116.8452,
  },
  {
    name: "Dar es Salaam",
    lat: -6.8,
    lng: 39.2833,
  },
  {
    name: "Maoming",
    lat: 21.6618,
    lng: 110.9178,
  },
  {
    name: "Huanggang",
    lat: 30.45,
    lng: 114.875,
  },
  {
    name: "Xinyang",
    lat: 32.1264,
    lng: 114.0672,
  },
  {
    name: "Shangrao",
    lat: 28.4419,
    lng: 117.9633,
  },
  {
    name: "Luoyang",
    lat: 34.6587,
    lng: 112.4245,
  },
  {
    name: "Bijie",
    lat: 27.3019,
    lng: 105.2863,
  },
  {
    name: "Yantai",
    lat: 37.3997,
    lng: 121.2664,
  },
  {
    name: "Quanzhou",
    lat: 24.9139,
    lng: 118.5858,
  },
  {
    name: "Hangzhou",
    lat: 30.25,
    lng: 120.1675,
  },
  {
    name: "Miami",
    lat: 25.7839,
    lng: -80.2102,
  },
  {
    name: "Kunming",
    lat: 25.0433,
    lng: 102.7061,
  },
  {
    name: "Nanchong",
    lat: 30.7991,
    lng: 106.0784,
  },
  {
    name: "Zunyi",
    lat: 27.705,
    lng: 106.9336,
  },
  {
    name: "Lu'an",
    lat: 31.7542,
    lng: 116.5078,
  },
  {
    name: "Yichun",
    lat: 27.8041,
    lng: 114.383,
  },
  {
    name: "Madrid",
    lat: 19.0833,
    lng: -103.8667,
  },
  {
    name: "Taizhou",
    lat: 28.6583,
    lng: 121.4221,
  },
  {
    name: "Liaocheng",
    lat: 36.45,
    lng: 115.9833,
  },
  {
    name: "Qujing",
    lat: 25.5102,
    lng: 103.8029,
  },
  {
    name: "Xiangyang",
    lat: 32.0654,
    lng: 112.1531,
  },
  {
    name: "Surat",
    lat: 21.17,
    lng: 72.83,
  },
  {
    name: "Baghdad",
    lat: 33.35,
    lng: 44.4167,
  },
  {
    name: "Qingdao",
    lat: 36.1167,
    lng: 120.4,
  },
  {
    name: "Singapore",
    lat: 1.3,
    lng: 103.8,
  },
  {
    name: "Dallas",
    lat: 32.7936,
    lng: -96.7662,
  },
  {
    name: "Changde",
    lat: 29.0397,
    lng: 111.6839,
  },
  {
    name: "Dazhou",
    lat: 31.2152,
    lng: 107.4947,
  },
  {
    name: "Suzhou",
    lat: 33.6333,
    lng: 116.9683,
  },
  {
    name: "Philadelphia",
    lat: 40.0077,
    lng: -75.1339,
  },
  {
    name: "Jieyang",
    lat: 23.5533,
    lng: 116.3649,
  },
  {
    name: "Nairobi",
    lat: -1.2864,
    lng: 36.8172,
  },
  {
    name: "Nangandao",
    lat: 35.2992,
    lng: 113.8851,
  },
  {
    name: "Ankara",
    lat: 39.93,
    lng: 32.85,
  },
  {
    name: "Tai'an",
    lat: 36.2001,
    lng: 117.0809,
  },
  {
    name: "Yulin",
    lat: 22.6293,
    lng: 110.1507,
  },
  {
    name: "Dezhou",
    lat: 37.4513,
    lng: 116.3105,
  },
  {
    name: "Houston",
    lat: 29.7863,
    lng: -95.3889,
  },
  {
    name: "Atlanta",
    lat: 33.7627,
    lng: -84.4224,
  },
  {
    name: "Rangoon",
    lat: 16.8,
    lng: 96.15,
  },
  {
    name: "Toronto",
    lat: 43.7417,
    lng: -79.3733,
  },
  {
    name: "Suihua",
    lat: 46.6384,
    lng: 126.9808,
  },
  {
    name: "Washington",
    lat: 38.9047,
    lng: -77.0163,
  },
  {
    name: "Qiqihar",
    lat: 47.3398,
    lng: 123.9512,
  },
  {
    name: "Jinhua",
    lat: 29.1046,
    lng: 119.6494,
  },
  {
    name: "Saint Petersburg",
    lat: 59.95,
    lng: 30.3167,
  },
  {
    name: "Shantou",
    lat: 23.3735,
    lng: 116.6941,
  },
  {
    name: "Sydney",
    lat: -33.865,
    lng: 151.2094,
  },
  {
    name: "Weinan",
    lat: 34.4996,
    lng: 109.4684,
  },
  {
    name: "Suqian",
    lat: 33.9331,
    lng: 118.2831,
  },
  {
    name: "Guadalajara",
    lat: 20.6767,
    lng: -103.3475,
  },
  {
    name: "Suzhou",
    lat: 31.304,
    lng: 120.6164,
  },
  {
    name: "Fuzhou",
    lat: 26.0769,
    lng: 119.2917,
  },
  {
    name: "Zhaotong",
    lat: 27.3328,
    lng: 103.7144,
  },
  {
    name: "Pudong",
    lat: 31.2231,
    lng: 121.5397,
  },
  {
    name: "Yongzhou",
    lat: 26.4515,
    lng: 111.5953,
  },
  {
    name: "Belo Horizonte",
    lat: -19.8917,
    lng: -43.9478,
  },
  {
    name: "Zhangzhou",
    lat: 24.5093,
    lng: 117.6612,
  },
  {
    name: "Bozhou",
    lat: 33.8626,
    lng: 115.7742,
  },
  {
    name: "Melbourne",
    lat: -37.8136,
    lng: 144.9631,
  },
  {
    name: "Nanchang",
    lat: 28.6842,
    lng: 115.8872,
  },
  {
    name: "Xianyang",
    lat: 34.35,
    lng: 108.7167,
  },
  {
    name: "Taizhou",
    lat: 32.4831,
    lng: 119.9,
  },
  {
    name: "Surabaya",
    lat: -7.2458,
    lng: 112.7378,
  },
  {
    name: "Abidjan",
    lat: 5.3364,
    lng: -4.0267,
  },
  {
    name: "Ji'an",
    lat: 27.1172,
    lng: 114.9793,
  },
  {
    name: "Mianyang",
    lat: 31.4669,
    lng: 104.7385,
  },
  {
    name: "Shaoxing",
    lat: 30,
    lng: 120.5833,
  },
  {
    name: "Alexandria",
    lat: 31.2,
    lng: 29.9167,
  },
  {
    name: "Yuncheng",
    lat: 35.0304,
    lng: 110.998,
  },
  {
    name: "Pingdingshan",
    lat: 33.735,
    lng: 113.2999,
  },
  {
    name: "Huai'an",
    lat: 33.5,
    lng: 119.1331,
  },
  {
    name: "Xinpu",
    lat: 34.5906,
    lng: 119.1801,
  },
  {
    name: "Guilin",
    lat: 25.2667,
    lng: 110.2833,
  },
  {
    name: "Huaihua",
    lat: 27.5494,
    lng: 109.9592,
  },
  {
    name: "Jiujiang",
    lat: 29.7048,
    lng: 116.0021,
  },
  {
    name: "Anqing",
    lat: 30.5,
    lng: 117.0333,
  },
  {
    name: "Boston",
    lat: 42.3188,
    lng: -71.0846,
  },
  {
    name: "Huanglongsi",
    lat: 34.7936,
    lng: 114.3403,
  },
  {
    name: "Xiaoganzhan",
    lat: 30.9273,
    lng: 113.911,
  },
  {
    name: "Changzhou",
    lat: 31.8122,
    lng: 119.9692,
  },
  {
    name: "Barcelona",
    lat: 41.3825,
    lng: 2.1769,
  },
  {
    name: "Chenzhou",
    lat: 25.7989,
    lng: 113.0267,
  },
  {
    name: "Wuxi",
    lat: 31.5667,
    lng: 120.2833,
  },
  {
    name: "Zibo",
    lat: 36.7831,
    lng: 118.0497,
  },
  {
    name: "Jiaxing",
    lat: 30.7522,
    lng: 120.75,
  },
  {
    name: "Dalian",
    lat: 38.9131,
    lng: 121.61,
  },
  {
    name: "Harbin",
    lat: 45.75,
    lng: 126.6333,
  },
  {
    name: "Yangzhou",
    lat: 32.3912,
    lng: 119.4363,
  },
  {
    name: "Yibin",
    lat: 28.7596,
    lng: 104.64,
  },
  {
    name: "Jiangmen",
    lat: 22.5833,
    lng: 113.0833,
  },
  {
    name: "Johannesburg",
    lat: -26.2044,
    lng: 28.0416,
  },
  {
    name: "Meizhou",
    lat: 24.2998,
    lng: 116.1191,
  },
  {
    name: "Chifeng",
    lat: 42.2663,
    lng: 118.9223,
  },
  {
    name: "Casablanca",
    lat: 33.5992,
    lng: -7.62,
  },
  {
    name: "Guiyang",
    lat: 26.5794,
    lng: 106.7078,
  },
  {
    name: "Langfang",
    lat: 39.5196,
    lng: 116.7006,
  },
  {
    name: "Zhangjiakou",
    lat: 40.8108,
    lng: 114.8811,
  },
  {
    name: "Izmir",
    lat: 38.4127,
    lng: 27.1384,
  },
  {
    name: "Linfen",
    lat: 36.0812,
    lng: 111.5087,
  },
  {
    name: "Wenzhou",
    lat: 27.9991,
    lng: 120.6561,
  },
  {
    name: "Monterrey",
    lat: 25.6667,
    lng: -100.3,
  },
  {
    name: "Luzhou",
    lat: 28.8918,
    lng: 105.4409,
  },
  {
    name: "Jiangguanchi",
    lat: 34.0244,
    lng: 113.8201,
  },
  {
    name: "Neijiang",
    lat: 29.5872,
    lng: 105.0635,
  },
  {
    name: "Phoenix",
    lat: 33.5722,
    lng: -112.0891,
  },
  {
    name: "Yanjiang",
    lat: 30.1256,
    lng: 104.6397,
  },
  {
    name: "Yiyang",
    lat: 28.5833,
    lng: 112.3333,
  },
  {
    name: "Zhaoqing",
    lat: 23.047,
    lng: 112.465,
  },
  {
    name: "Hengshui",
    lat: 37.7348,
    lng: 115.686,
  },
  {
    name: "Guigang",
    lat: 23.0961,
    lng: 109.6092,
  },
  {
    name: "Xiaoxita",
    lat: 30.7083,
    lng: 111.2803,
  },
  {
    name: "Xiamen",
    lat: 24.4797,
    lng: 118.0819,
  },
  {
    name: "Chuzhou",
    lat: 32.3062,
    lng: 118.3115,
  },
  {
    name: "Fuzhou",
    lat: 27.9814,
    lng: 116.3577,
  },
  {
    name: "Amman",
    lat: 31.95,
    lng: 35.9333,
  },
  {
    name: "Jeddah",
    lat: 21.5428,
    lng: 39.1728,
  },
  {
    name: "Sialkot City",
    lat: 32.5,
    lng: 74.5333,
  },
  {
    name: "Huizhou",
    lat: 23.1115,
    lng: 114.4152,
  },
  {
    name: "Qingyuan",
    lat: 23.6842,
    lng: 113.0507,
  },
  {
    name: "Zhuzhou",
    lat: 27.8407,
    lng: 113.1469,
  },
  {
    name: "Wuhu",
    lat: 31.334,
    lng: 118.3622,
  },
  {
    name: "Hechi",
    lat: 23.0965,
    lng: 109.6091,
  },
  {
    name: "Seattle",
    lat: 47.6211,
    lng: -122.3244,
  },
  {
    name: "Loudi",
    lat: 27.7378,
    lng: 111.9974,
  },
  {
    name: "Binzhou",
    lat: 37.3806,
    lng: 118.0125,
  },
  {
    name: "Liuzhou",
    lat: 24.3181,
    lng: 109.4069,
  },
  {
    name: "Yokohama",
    lat: 35.4333,
    lng: 139.6333,
  },
  {
    name: "Baojishi",
    lat: 34.3609,
    lng: 107.1751,
  },
  {
    name: "Guang'an",
    lat: 30.4673,
    lng: 106.6336,
  },
  {
    name: "Hanzhong",
    lat: 33.0794,
    lng: 107.026,
  },
  {
    name: "Kabul",
    lat: 34.5328,
    lng: 69.1658,
  },
  {
    name: "Zaozhuang",
    lat: 34.8667,
    lng: 117.55,
  },
  {
    name: "Berlin",
    lat: 52.5167,
    lng: 13.3833,
  },
  {
    name: "Anshan",
    lat: 41.1066,
    lng: 122.9895,
  },
  {
    name: "Deyang",
    lat: 31.1289,
    lng: 104.395,
  },
  {
    name: "Lanzhou",
    lat: 36.0617,
    lng: 103.8318,
  },
  {
    name: "Chengde",
    lat: 40.9739,
    lng: 117.9322,
  },
  {
    name: "San Francisco",
    lat: 37.7562,
    lng: -122.443,
  },
  {
    name: "Puyang",
    lat: 35.7639,
    lng: 115.03,
  },
  {
    name: "Suining",
    lat: 30.5098,
    lng: 105.5737,
  },
  {
    name: "Jiaozuo",
    lat: 35.229,
    lng: 113.2304,
  },
  {
    name: "Bengbu",
    lat: 32.9354,
    lng: 117.3531,
  },
  {
    name: "Montreal",
    lat: 45.5089,
    lng: -73.5617,
  },
  {
    name: "Detroit",
    lat: 42.3834,
    lng: -83.1024,
  },
  {
    name: "Baicheng",
    lat: 23.901,
    lng: 106.6194,
  },
  {
    name: "Busan",
    lat: 35.1,
    lng: 129.0403,
  },
  {
    name: "Algiers",
    lat: 36.7764,
    lng: 3.0586,
  },
  {
    name: "Qincheng",
    lat: 34.5809,
    lng: 105.7311,
  },
  {
    name: "Taiyuan",
    lat: 37.8733,
    lng: 112.5425,
  },
  {
    name: "Lucknow",
    lat: 26.847,
    lng: 80.947,
  },
  {
    name: "Chaoyang",
    lat: 41.5757,
    lng: 120.4486,
  },
  {
    name: "Hechi",
    lat: 24.6928,
    lng: 108.085,
  },
  {
    name: "Leshan",
    lat: 29.5854,
    lng: 103.7575,
  },
  {
    name: "Yulinshi",
    lat: 38.2655,
    lng: 109.7388,
  },
  {
    name: "Siping",
    lat: 43.1715,
    lng: 124.3644,
  },
  {
    name: "Madrid",
    lat: 40.4189,
    lng: -3.6919,
  },
  {
    name: "Jinan",
    lat: 36.6667,
    lng: 116.9833,
  },
  {
    name: "Shiyan",
    lat: 32.6351,
    lng: 110.7755,
  },
  {
    name: "Changzhi",
    lat: 36.1953,
    lng: 113.097,
  },
  {
    name: "San Diego",
    lat: 32.8312,
    lng: -117.1225,
  },
  {
    name: "Faisalabad",
    lat: 31.418,
    lng: 73.079,
  },
  {
    name: "Santa Cruz",
    lat: -17.7892,
    lng: -63.1975,
  },
  {
    name: "Bazhou",
    lat: 31.8576,
    lng: 106.7559,
  },
  {
    name: "Zhongshan",
    lat: 22.5333,
    lng: 113.35,
  },
  {
    name: "Zhenjiang",
    lat: 32.2109,
    lng: 119.4551,
  },
  {
    name: "Urumqi",
    lat: 43.825,
    lng: 87.6,
  },
  {
    name: "Tongliao",
    lat: 43.6172,
    lng: 122.264,
  },
  {
    name: "Heyuan",
    lat: 23.7503,
    lng: 114.6923,
  },
  {
    name: "Tongren",
    lat: 27.7233,
    lng: 109.1885,
  },
  {
    name: "Qinzhou",
    lat: 21.95,
    lng: 108.6167,
  },
  {
    name: "Jaipur",
    lat: 26.9167,
    lng: 75.8667,
  },
  {
    name: "Xinzhou",
    lat: 38.4178,
    lng: 112.7233,
  },
  {
    name: "Addis Ababa",
    lat: 9.0272,
    lng: 38.7369,
  },
  {
    name: "Giza",
    lat: 29.987,
    lng: 31.2118,
  },
  {
    name: "Meishan",
    lat: 30.0575,
    lng: 103.8381,
  },
  {
    name: "Brasilia",
    lat: -15.7744,
    lng: -48.0773,
  },
  {
    name: "Mashhad",
    lat: 36.3069,
    lng: 59.6042,
  },
  {
    name: "Jinzhou",
    lat: 41.1144,
    lng: 121.1292,
  },
  {
    name: "Tieling",
    lat: 42.2841,
    lng: 123.8365,
  },
  {
    name: "Shaoguan",
    lat: 24.8011,
    lng: 113.5927,
  },
  {
    name: "Shanwei",
    lat: 22.7664,
    lng: 115.3331,
  },
  {
    name: "Minneapolis",
    lat: 44.9635,
    lng: -93.2678,
  },
  {
    name: "Kyiv",
    lat: 50.45,
    lng: 30.5236,
  },
  {
    name: "Sanaa",
    lat: 15.35,
    lng: 44.2,
  },
  {
    name: "Quezon City",
    lat: 14.6333,
    lng: 121.0333,
  },
  {
    name: "Dingxi",
    lat: 35.5806,
    lng: 104.6263,
  },
  {
    name: "Salvador",
    lat: -12.9708,
    lng: -38.5108,
  },
  {
    name: "Incheon",
    lat: 37.4639,
    lng: 126.6486,
  },
  {
    name: "Bursa",
    lat: 40.1833,
    lng: 29.0667,
  },
  {
    name: "Ningde",
    lat: 26.6667,
    lng: 119.5167,
  },
  {
    name: "Tampa",
    lat: 27.9942,
    lng: -82.4451,
  },
  {
    name: "Daqing",
    lat: 46.5979,
    lng: 125.008,
  },
  {
    name: "Birmingham",
    lat: 52.48,
    lng: -1.9025,
  },
  {
    name: "Putian",
    lat: 25.4394,
    lng: 119.0103,
  },
  {
    name: "Huzhou",
    lat: 30.8695,
    lng: 120.0958,
  },
  {
    name: "Wuzhou",
    lat: 23.4833,
    lng: 111.3167,
  },
  {
    name: "Denver",
    lat: 39.7621,
    lng: -104.8759,
  },
  {
    name: "Rome",
    lat: 41.8931,
    lng: 12.4828,
  },
  {
    name: "La Paz",
    lat: -16.4942,
    lng: -68.1475,
  },
  {
    name: "Pyongyang",
    lat: 39.03,
    lng: 125.73,
  },
  {
    name: "Kano",
    lat: 12,
    lng: 8.5167,
  },
  {
    name: "Taichung",
    lat: 24.15,
    lng: 120.6667,
  },
  {
    name: "Omdurman",
    lat: 15.6835,
    lng: 32.4629,
  },
  {
    name: "Zigong",
    lat: 29.3498,
    lng: 104.7645,
  },
  {
    name: "Qinhuangdao",
    lat: 39.9398,
    lng: 119.5881,
  },
  {
    name: "Mudanjiang",
    lat: 44.5861,
    lng: 129.5997,
  },
  {
    name: "Huludao",
    lat: 40.7094,
    lng: 120.8378,
  },
  {
    name: "Kaohsiung",
    lat: 22.6167,
    lng: 120.3,
  },
  {
    name: "Xiangtan",
    lat: 27.8431,
    lng: 112.9228,
  },
  {
    name: "Guayaquil",
    lat: -2.1833,
    lng: -79.8833,
  },
  {
    name: "Rizhao",
    lat: 35.4164,
    lng: 119.4331,
  },
  {
    name: "Manchester",
    lat: 53.4794,
    lng: -2.2453,
  },
  {
    name: "Cawnpore",
    lat: 26.4725,
    lng: 80.3311,
  },
  {
    name: "Baotou",
    lat: 40.6562,
    lng: 109.8345,
  },
  {
    name: "Taipei",
    lat: 25.0478,
    lng: 121.5319,
  },
  {
    name: "Nanping",
    lat: 26.6448,
    lng: 118.1728,
  },
  {
    name: "Longyan",
    lat: 25.0881,
    lng: 117.0244,
  },
  {
    name: "Ibadan",
    lat: 7.3964,
    lng: 3.9167,
  },
  {
    name: "Hohhot",
    lat: 40.8151,
    lng: 111.6629,
  },
  {
    name: "Chaozhou",
    lat: 23.67,
    lng: 116.63,
  },
  {
    name: "Antananarivo",
    lat: -18.9386,
    lng: 47.5214,
  },
  {
    name: "Longba",
    lat: 33.535,
    lng: 105.349,
  },
  {
    name: "Weihai",
    lat: 37.5,
    lng: 122.1,
  },
  {
    name: "Chattogram",
    lat: 22.335,
    lng: 91.8325,
  },
  {
    name: "Santo Domingo",
    lat: 18.4764,
    lng: -69.8933,
  },
  {
    name: "Xuanzhou",
    lat: 30.9475,
    lng: 118.7518,
  },
  {
    name: "Sanming",
    lat: 26.2658,
    lng: 117.6302,
  },
  {
    name: "Brooklyn",
    lat: 40.6501,
    lng: -73.9496,
  },
  {
    name: "Medellin",
    lat: 6.2447,
    lng: -75.5748,
  },
  {
    name: "Brisbane",
    lat: -27.4678,
    lng: 153.0281,
  },
  {
    name: "Baoshan",
    lat: 25.1211,
    lng: 99.169,
  },
  {
    name: "Dubai",
    lat: 25.2697,
    lng: 55.3094,
  },
  {
    name: "Luohe",
    lat: 33.583,
    lng: 114.0109,
  },
  {
    name: "Qinbaling",
    lat: 35.7278,
    lng: 107.64,
  },
  {
    name: "Mirzapur",
    lat: 25.15,
    lng: 82.58,
  },
  {
    name: "Guangyuan",
    lat: 32.4353,
    lng: 105.8398,
  },
  {
    name: "Cali",
    lat: 3.44,
    lng: -76.5197,
  },
  {
    name: "Daegu",
    lat: 35.8667,
    lng: 128.6,
  },
  {
    name: "Fortaleza",
    lat: -3.7275,
    lng: -38.5275,
  },
  {
    name: "Guatemala City",
    lat: 14.6099,
    lng: -90.5252,
  },
  {
    name: "Yaounde",
    lat: 3.8578,
    lng: 11.5181,
  },
  {
    name: "Douala",
    lat: 4.05,
    lng: 9.7,
  },
  {
    name: "Jilin",
    lat: 43.85,
    lng: 126.55,
  },
  {
    name: "Lianshan",
    lat: 40.7503,
    lng: 120.83,
  },
  {
    name: "Lincang",
    lat: 23.8864,
    lng: 100.0871,
  },
  {
    name: "Antalya",
    lat: 36.9081,
    lng: 30.6956,
  },
  {
    name: "Tashkent",
    lat: 41.3,
    lng: 69.2667,
  },
  {
    name: "Huangshi",
    lat: 30.2018,
    lng: 115.0326,
  },
  {
    name: "Bandung",
    lat: -6.95,
    lng: 107.5667,
  },
  {
    name: "Nagpur",
    lat: 21.1539,
    lng: 79.0831,
  },
  {
    name: "Dandong",
    lat: 40.1167,
    lng: 124.3833,
  },
  {
    name: "Huainan",
    lat: 32.4831,
    lng: 117.0164,
  },
  {
    name: "Shangzhou",
    lat: 33.868,
    lng: 109.9244,
  },
  {
    name: "Bekasi",
    lat: -6.2333,
    lng: 107,
  },
  {
    name: "Ghaziabad",
    lat: 28.6667,
    lng: 77.4167,
  },
  {
    name: "Tijuana",
    lat: 32.525,
    lng: -117.0333,
  },
  {
    name: "Jiamusi",
    lat: 46.8081,
    lng: 130.3653,
  },
  {
    name: "Yangjiang",
    lat: 21.8556,
    lng: 111.9627,
  },
  {
    name: "Accra",
    lat: 5.6037,
    lng: -0.187,
  },
  {
    name: "Yuxi",
    lat: 24.3495,
    lng: 102.5432,
  },
  {
    name: "Fushun",
    lat: 41.8708,
    lng: 123.8917,
  },
  {
    name: "Anshun",
    lat: 26.2456,
    lng: 105.934,
  },
  {
    name: "Vancouver",
    lat: 49.25,
    lng: -123.1,
  },
  {
    name: "Tangerang",
    lat: -6.1783,
    lng: 106.6319,
  },
  {
    name: "Konya",
    lat: 37.8714,
    lng: 32.4847,
  },
  {
    name: "Queens",
    lat: 40.7498,
    lng: -73.7976,
  },
  {
    name: "Yingkou",
    lat: 40.6653,
    lng: 122.2297,
  },
  {
    name: "Adana",
    lat: 37,
    lng: 35.325,
  },
  {
    name: "Medan",
    lat: 3.6667,
    lng: 98.6667,
  },
  {
    name: "Sanmenxia",
    lat: 34.7736,
    lng: 111.195,
  },
  {
    name: "Indore",
    lat: 22.7206,
    lng: 75.8472,
  },
  {
    name: "Ma'anshan",
    lat: 31.7135,
    lng: 118.3605,
  },
  {
    name: "Pingliang",
    lat: 35.5412,
    lng: 106.6819,
  },
  {
    name: "Quzhou",
    lat: 28.9545,
    lng: 118.8763,
  },
  {
    name: "Baku",
    lat: 40.3667,
    lng: 49.8352,
  },
  {
    name: "Gaoping",
    lat: 30.7804,
    lng: 106.13,
  },
  {
    name: "Huaibei",
    lat: 33.9562,
    lng: 116.789,
  },
  {
    name: "Xining",
    lat: 36.6239,
    lng: 101.7787,
  },
  {
    name: "Yan'an",
    lat: 36.5952,
    lng: 109.4863,
  },
  {
    name: "Havana",
    lat: 23.1367,
    lng: -82.3589,
  },
  {
    name: "Phnom Penh",
    lat: 11.5696,
    lng: 104.921,
  },
  {
    name: "Fukuoka",
    lat: 33.5903,
    lng: 130.4019,
  },
  {
    name: "Mogadishu",
    lat: 2.0408,
    lng: 45.3425,
  },
  {
    name: "Jincheng",
    lat: 35.4906,
    lng: 112.8483,
  },
  {
    name: "Lishui",
    lat: 28.45,
    lng: 119.9167,
  },
  {
    name: "Qingyang",
    lat: 24.8141,
    lng: 118.5792,
  },
  {
    name: "Riverside",
    lat: 33.9381,
    lng: -117.3948,
  },
  {
    name: "Baltimore",
    lat: 39.3051,
    lng: -76.6144,
  },
  {
    name: "Haiphong",
    lat: 20.8,
    lng: 106.6667,
  },
  {
    name: "Las Vegas",
    lat: 36.2333,
    lng: -115.2654,
  },
  {
    name: "Laibin",
    lat: 23.7333,
    lng: 109.2333,
  },
  {
    name: "Rawalpindi",
    lat: 33.6007,
    lng: 73.0679,
  },
  {
    name: "Kumasi",
    lat: 6.6833,
    lng: -1.6167,
  },
  {
    name: "Portland",
    lat: 45.5372,
    lng: -122.65,
  },
  {
    name: "Vadodara",
    lat: 22.3,
    lng: 73.2,
  },
  {
    name: "Perth",
    lat: -31.9522,
    lng: 115.8589,
  },
  {
    name: "Puning",
    lat: 23.2993,
    lng: 116.1586,
  },
  {
    name: "San Antonio",
    lat: 29.4658,
    lng: -98.5253,
  },
  {
    name: "Haikou",
    lat: 20.02,
    lng: 110.32,
  },
  {
    name: "Vishakhapatnam",
    lat: 17.7333,
    lng: 83.3167,
  },
  {
    name: "Gaziantep",
    lat: 37.0667,
    lng: 37.3833,
  },
  {
    name: "Minsk",
    lat: 53.9022,
    lng: 27.5618,
  },
  {
    name: "St. Louis",
    lat: 38.6358,
    lng: -90.2451,
  },
  {
    name: "Bamako",
    lat: 12.6458,
    lng: -7.9922,
  },
  {
    name: "Quito",
    lat: -0.2186,
    lng: -78.5097,
  },
  {
    name: "Pingxiang",
    lat: 27.6333,
    lng: 113.85,
  },
  {
    name: "Chongzuo",
    lat: 22.4167,
    lng: 107.3667,
  },
  {
    name: "Sanliurfa",
    lat: 37.1583,
    lng: 38.7917,
  },
  {
    name: "Kananga",
    lat: -5.897,
    lng: 22.4488,
  },
  {
    name: "Peshawar",
    lat: 34,
    lng: 71.5,
  },
  {
    name: "Sapporo",
    lat: 43.0621,
    lng: 141.3544,
  },
  {
    name: "Jixi",
    lat: 45.2937,
    lng: 130.965,
  },
  {
    name: "Caracas",
    lat: 10.5,
    lng: -66.9333,
  },
  {
    name: "Fuxin",
    lat: 42.0127,
    lng: 121.6486,
  },
  {
    name: "Leeds",
    lat: 53.7997,
    lng: -1.5492,
  },
  {
    name: "Sacramento",
    lat: 38.5667,
    lng: -121.4683,
  },
  {
    name: "Blantyre",
    lat: -15.7861,
    lng: 35.0058,
  },
  {
    name: "Tainan",
    lat: 22.9833,
    lng: 120.1833,
  },
  {
    name: "Bucharest",
    lat: 44.4,
    lng: 26.0833,
  },
  {
    name: "Wuwei",
    lat: 37.9278,
    lng: 102.6329,
  },
  {
    name: "Bhopal",
    lat: 23.25,
    lng: 77.4167,
  },
  {
    name: "Curitiba",
    lat: -25.4297,
    lng: -49.2719,
  },
  {
    name: "Xiping",
    lat: 40.08,
    lng: 113.3,
  },
  {
    name: "Asuncion",
    lat: -25.3,
    lng: -57.6333,
  },
  {
    name: "Saidu Sharif",
    lat: 34.75,
    lng: 72.3572,
  },
  {
    name: "Vienna",
    lat: 48.2083,
    lng: 16.3731,
  },
  {
    name: "Aleppo",
    lat: 36.2,
    lng: 37.15,
  },
  {
    name: "Hamburg",
    lat: 53.55,
    lng: 10,
  },
  {
    name: "Meru",
    lat: 0.05,
    lng: 37.65,
  },
  {
    name: "Brazzaville",
    lat: -4.2667,
    lng: 15.2833,
  },
  {
    name: "Orlando",
    lat: 28.4772,
    lng: -81.3369,
  },
  {
    name: "Mersin",
    lat: 36.8,
    lng: 34.6167,
  },
  {
    name: "Almaty",
    lat: 43.25,
    lng: 76.9,
  },
  {
    name: "Barranquilla",
    lat: 10.96,
    lng: -74.8,
  },
  {
    name: "Kyoto",
    lat: 35.0111,
    lng: 135.7669,
  },
  {
    name: "Manaus",
    lat: -3.1,
    lng: -60.0167,
  },
  {
    name: "Liaoyang",
    lat: 41.2643,
    lng: 123.1772,
  },
  {
    name: "Baiyin",
    lat: 36.5448,
    lng: 104.1766,
  },
  {
    name: "San Jose",
    lat: 37.3019,
    lng: -121.8486,
  },
  {
    name: "Warsaw",
    lat: 52.2167,
    lng: 21.0333,
  },
  {
    name: "Shengli",
    lat: 37.45,
    lng: 118.4667,
  },
  {
    name: "Lubumbashi",
    lat: -11.6697,
    lng: 27.4581,
  },
  {
    name: "Damascus",
    lat: 33.5131,
    lng: 36.2919,
  },
  {
    name: "Shuyangzha",
    lat: 34.1299,
    lng: 118.7734,
  },
  {
    name: "Shangqiu",
    lat: 34.4504,
    lng: 115.65,
  },
  {
    name: "Esfahan",
    lat: 32.6447,
    lng: 51.6675,
  },
  {
    name: "Budapest",
    lat: 47.4983,
    lng: 19.0408,
  },
  {
    name: "Heihe",
    lat: 50.2458,
    lng: 127.4886,
  },
  {
    name: "Lusaka",
    lat: -15.4167,
    lng: 28.2833,
  },
  {
    name: "Diyarbakir",
    lat: 37.9108,
    lng: 40.2367,
  },
  {
    name: "Chinchvad",
    lat: 18.6278,
    lng: 73.8131,
  },
  {
    name: "Shuozhou",
    lat: 39.3408,
    lng: 112.4292,
  },
  {
    name: "Vitoria",
    lat: -20.324,
    lng: -40.366,
  },
  {
    name: "Cleveland",
    lat: 41.4767,
    lng: -81.6804,
  },
  {
    name: "Pittsburgh",
    lat: 40.4396,
    lng: -79.9762,
  },
  {
    name: "Mecca",
    lat: 21.4225,
    lng: 39.8261,
  },
  {
    name: "Patna",
    lat: 25.61,
    lng: 85.1414,
  },
  {
    name: "Mosul",
    lat: 36.3667,
    lng: 43.1167,
  },
  {
    name: "Austin",
    lat: 30.3004,
    lng: -97.7522,
  },
  {
    name: "Sanzhou",
    lat: 30.82,
    lng: 108.4,
  },
  {
    name: "Conakry",
    lat: 9.5092,
    lng: -13.7122,
  },
  {
    name: "Kampala",
    lat: 0.3136,
    lng: 32.5811,
  },
  {
    name: "Ecatepec",
    lat: 19.6097,
    lng: -99.06,
  },
  {
    name: "Cincinnati",
    lat: 39.1413,
    lng: -84.5061,
  },
  {
    name: "Makassar",
    lat: -5.1331,
    lng: 119.4136,
  },
  {
    name: "Yushan",
    lat: 31.3867,
    lng: 120.9766,
  },
  {
    name: "Ludhiana",
    lat: 30.9083,
    lng: 75.8486,
  },
  {
    name: "Newcastle",
    lat: 55.0077,
    lng: -1.6578,
  },
  {
    name: "Depok",
    lat: -6.394,
    lng: 106.8225,
  },
  {
    name: "Zhongli",
    lat: 24.965,
    lng: 121.2168,
  },
  {
    name: "Kansas City",
    lat: 39.1239,
    lng: -94.5541,
  },
  {
    name: "Rabat",
    lat: 34.0253,
    lng: -6.8361,
  },
  {
    name: "Ouagadougou",
    lat: 12.3572,
    lng: -1.5353,
  },
  {
    name: "Davao",
    lat: 7.0667,
    lng: 125.6,
  },
  {
    name: "Manhattan",
    lat: 40.7834,
    lng: -73.9662,
  },
  {
    name: "Semarang",
    lat: -6.9667,
    lng: 110.4167,
  },
  {
    name: "Yinchuan",
    lat: 38.4795,
    lng: 106.2254,
  },
  {
    name: "Multan",
    lat: 30.1978,
    lng: 71.4711,
  },
  {
    name: "Caloocan City",
    lat: 14.65,
    lng: 120.9667,
  },
  {
    name: "Harare",
    lat: -17.8292,
    lng: 31.0522,
  },
  {
    name: "Novosibirsk",
    lat: 55.0333,
    lng: 82.9167,
  },
  {
    name: "Chengtangcun",
    lat: 35.0833,
    lng: 117.15,
  },
  {
    name: "Agra",
    lat: 27.18,
    lng: 78.02,
  },
  {
    name: "Karaj",
    lat: 35.8327,
    lng: 50.9915,
  },
  {
    name: "Indianapolis",
    lat: 39.7771,
    lng: -86.1458,
  },
  {
    name: "Jingdezhen",
    lat: 29.2942,
    lng: 117.2036,
  },
  {
    name: "Puebla",
    lat: 19.0333,
    lng: -98.1833,
  },
  {
    name: "Kalyan",
    lat: 19.2502,
    lng: 73.1602,
  },
  {
    name: "Madurai",
    lat: 9.9197,
    lng: 78.1194,
  },
  {
    name: "Gujranwala",
    lat: 32.15,
    lng: 74.1833,
  },
  {
    name: "Benxi",
    lat: 41.292,
    lng: 123.761,
  },
  {
    name: "Jamshedpur",
    lat: 22.8,
    lng: 86.1833,
  },
  {
    name: "Zhuhai",
    lat: 22.2769,
    lng: 113.5678,
  },
  {
    name: "Recife",
    lat: -8.0539,
    lng: -34.8808,
  },
  {
    name: "Columbus",
    lat: 39.9862,
    lng: -82.985,
  },
  {
    name: "Tabriz",
    lat: 38.0833,
    lng: 46.2833,
  },
  {
    name: "Santiago",
    lat: 19.5,
    lng: -70.67,
  },
  {
    name: "Maracaibo",
    lat: 10.6333,
    lng: -71.6333,
  },
  {
    name: "Beihai",
    lat: 21.4667,
    lng: 109.1,
  },
  {
    name: "Shuangyashan",
    lat: 46.6388,
    lng: 131.1545,
  },
  {
    name: "Kobe",
    lat: 34.6913,
    lng: 135.183,
  },
  {
    name: "Charlotte",
    lat: 35.208,
    lng: -80.8304,
  },
  {
    name: "Yucheng",
    lat: 29.9888,
    lng: 103.0007,
  },
  {
    name: "Changshu",
    lat: 31.65,
    lng: 120.7333,
  },
  {
    name: "Ximeicun",
    lat: 24.9633,
    lng: 118.3811,
  },
  {
    name: "Jianguang",
    lat: 28.1958,
    lng: 115.7833,
  },
  {
    name: "Gwangju",
    lat: 35.1667,
    lng: 126.9167,
  },
  {
    name: "Xushan",
    lat: 30.1697,
    lng: 121.2665,
  },
  {
    name: "Guiping",
    lat: 23.4,
    lng: 110.0833,
  },
  {
    name: "Nasik",
    lat: 20,
    lng: 73.7833,
  },
  {
    name: "Porto Alegre",
    lat: -30.0328,
    lng: -51.23,
  },
  {
    name: "Zhangjiajie",
    lat: 29.1255,
    lng: 110.4844,
  },
  {
    name: "Valencia",
    lat: 10.1667,
    lng: -68,
  },
  {
    name: "Virginia Beach",
    lat: 36.7335,
    lng: -76.0435,
  },
  {
    name: "Daejeon",
    lat: 36.351,
    lng: 127.385,
  },
  {
    name: "Munich",
    lat: 48.1372,
    lng: 11.5755,
  },
  {
    name: "Yekaterinburg",
    lat: 56.8356,
    lng: 60.6128,
  },
  {
    name: "Auckland",
    lat: -36.85,
    lng: 174.7833,
  },
  {
    name: "Yunfu",
    lat: 22.9242,
    lng: 112.0353,
  },
  {
    name: "Huangshan",
    lat: 29.7132,
    lng: 118.3151,
  },
  {
    name: "Huazhou",
    lat: 32.6832,
    lng: 112.079,
  },
  {
    name: "Shiraz",
    lat: 29.61,
    lng: 52.5425,
  },
  {
    name: "Leon de los Aldama",
    lat: 21.1167,
    lng: -101.6833,
  },
  {
    name: "Pizhou",
    lat: 34.3422,
    lng: 118.0097,
  },
  {
    name: "Palembang",
    lat: -2.9833,
    lng: 104.7644,
  },
  {
    name: "Kharkiv",
    lat: 50,
    lng: 36.2292,
  },
  {
    name: "Kawanakajima",
    lat: 35.53,
    lng: 139.705,
  },
  {
    name: "Lianjiang",
    lat: 21.6146,
    lng: 110.2794,
  },
  {
    name: "Chizhou",
    lat: 30.6583,
    lng: 117.4849,
  },
  {
    name: "Leizhou",
    lat: 20.9147,
    lng: 110.0806,
  },
  {
    name: "Guyuan",
    lat: 36.008,
    lng: 106.2782,
  },
  {
    name: "Rui'an",
    lat: 27.778,
    lng: 120.6526,
  },
  {
    name: "Birstall",
    lat: 52.6736,
    lng: -1.12,
  },
  {
    name: "Muscat",
    lat: 23.6139,
    lng: 58.5922,
  },
  {
    name: "Hebi",
    lat: 35.7497,
    lng: 114.2887,
  },
  {
    name: "Jingling",
    lat: 30.6667,
    lng: 113.1667,
  },
  {
    name: "Bronx",
    lat: 40.8501,
    lng: -73.8662,
  },
  {
    name: "The Hague",
    lat: 52.08,
    lng: 4.27,
  },
  {
    name: "Owerri",
    lat: 5.4833,
    lng: 7.0333,
  },
  {
    name: "Sharjah",
    lat: 25.3575,
    lng: 55.3919,
  },
  {
    name: "Faridabad",
    lat: 28.4333,
    lng: 77.3167,
  },
  {
    name: "Ulaanbaatar",
    lat: 47.9203,
    lng: 106.9172,
  },
  {
    name: "Goiania",
    lat: -16.6789,
    lng: -49.2539,
  },
  {
    name: "Belem",
    lat: -1.4558,
    lng: -48.5039,
  },
  {
    name: "Kayseri",
    lat: 38.7333,
    lng: 35.4833,
  },
  {
    name: "Yueqing",
    lat: 28.1188,
    lng: 120.9621,
  },
  {
    name: "Belgrade",
    lat: 44.8167,
    lng: 20.4667,
  },
  {
    name: "Pingdu",
    lat: 36.7833,
    lng: 119.9556,
  },
  {
    name: "Aurangabad",
    lat: 19.88,
    lng: 75.32,
  },
  {
    name: "Yutan",
    lat: 28.3147,
    lng: 112.554,
  },
  {
    name: "Wenling",
    lat: 28.3797,
    lng: 121.3718,
  },
  {
    name: "Islamabad",
    lat: 33.6989,
    lng: 73.0369,
  },
  {
    name: "Milwaukee",
    lat: 43.0642,
    lng: -87.9673,
  },
  {
    name: "Milan",
    lat: 45.4669,
    lng: 9.19,
  },
  {
    name: "Sofia",
    lat: 42.6975,
    lng: 23.3241,
  },
  {
    name: "Adelaide",
    lat: -34.9289,
    lng: 138.6011,
  },
  {
    name: "Samsun",
    lat: 41.2867,
    lng: 36.33,
  },
  {
    name: "Rajkot",
    lat: 22.2969,
    lng: 70.7984,
  },
  {
    name: "Khulna",
    lat: 22.8167,
    lng: 89.55,
  },
  {
    name: "Cordoba",
    lat: -31.4167,
    lng: -64.1833,
  },
  {
    name: "Guarulhos",
    lat: -23.4667,
    lng: -46.5333,
  },
  {
    name: "Juarez",
    lat: 31.7386,
    lng: -106.487,
  },
  {
    name: "Prague",
    lat: 50.0833,
    lng: 14.4167,
  },
  {
    name: "Montevideo",
    lat: -34.8667,
    lng: -56.1667,
  },
  {
    name: "Mbuji-Mayi",
    lat: -6.1209,
    lng: 23.5967,
  },
  {
    name: "Fuqing",
    lat: 25.7232,
    lng: 119.3735,
  },
  {
    name: "Xintai",
    lat: 35.91,
    lng: 117.78,
  },
  {
    name: "Doha",
    lat: 25.3,
    lng: 51.5333,
  },
  {
    name: "Saitama",
    lat: 35.8617,
    lng: 139.6453,
  },
  {
    name: "Hiroshima",
    lat: 34.3853,
    lng: 132.4553,
  },
  {
    name: "Meerut",
    lat: 28.99,
    lng: 77.7,
  },
  {
    name: "Yushu",
    lat: 44.8249,
    lng: 126.5451,
  },
  {
    name: "Rongcheng",
    lat: 26.2312,
    lng: 104.0966,
  },
  {
    name: "Yangquan",
    lat: 37.8576,
    lng: 113.5762,
  },
  {
    name: "Haicheng",
    lat: 40.8523,
    lng: 122.7474,
  },
  {
    name: "Gaozhou",
    lat: 21.9392,
    lng: 110.8461,
  },
  {
    name: "Yingtan",
    lat: 28.2333,
    lng: 117,
  },
  {
    name: "Huaiyin",
    lat: 33.58,
    lng: 119.03,
  },
  {
    name: "Wuzhong",
    lat: 37.9874,
    lng: 106.1919,
  },
  {
    name: "Jabalpur",
    lat: 23.1667,
    lng: 79.9333,
  },
  {
    name: "Thane",
    lat: 19.18,
    lng: 72.9633,
  },
  {
    name: "Zhangye",
    lat: 38.9355,
    lng: 100.4553,
  },
  {
    name: "Rucheng",
    lat: 32.3852,
    lng: 120.5634,
  },
  {
    name: "Nizhniy Novgorod",
    lat: 56.3269,
    lng: 44.0075,
  },
  {
    name: "Comayaguela",
    lat: 14.0833,
    lng: -87.2167,
  },
  {
    name: "Yangshe",
    lat: 31.8775,
    lng: 120.5512,
  },
  {
    name: "Shaoyang",
    lat: 32.9387,
    lng: 119.8404,
  },
  {
    name: "Dhanbad",
    lat: 23.7928,
    lng: 86.435,
  },
  {
    name: "Yichun",
    lat: 47.7235,
    lng: 128.8893,
  },
  {
    name: "Laiwu",
    lat: 36.1833,
    lng: 117.6667,
  },
  {
    name: "Kazan'",
    lat: 55.7908,
    lng: 49.1144,
  },
  {
    name: "Dayan",
    lat: 26.8808,
    lng: 100.2208,
  },
  {
    name: "Suwon",
    lat: 37.2858,
    lng: 127.01,
  },
  {
    name: "Jiangyin",
    lat: 31.9087,
    lng: 120.2653,
  },
  {
    name: "Yongcheng",
    lat: 33.9317,
    lng: 116.4459,
  },
  {
    name: "Calgary",
    lat: 51.05,
    lng: -114.0667,
  },
  {
    name: "Can Tho",
    lat: 10.0333,
    lng: 105.7833,
  },
  {
    name: "Abuja",
    lat: 9.0556,
    lng: 7.4914,
  },
  {
    name: "Yiwu",
    lat: 29.3081,
    lng: 120.0698,
  },
  {
    name: "Mandalay",
    lat: 21.9769,
    lng: 96.0869,
  },
  {
    name: "Beidao",
    lat: 34.6,
    lng: 105.92,
  },
  {
    name: "Al Basrah",
    lat: 30.4889,
    lng: 47.81,
  },
  {
    name: "Shuangshui",
    lat: 26.5944,
    lng: 104.8333,
  },
  {
    name: "Sevilla",
    lat: 37.3828,
    lng: -5.9731,
  },
  {
    name: "Vila Velha",
    lat: 3.2167,
    lng: -51.2167,
  },
  {
    name: "Allahabad",
    lat: 25.455,
    lng: 81.84,
  },
  {
    name: "Varanasi",
    lat: 25.3189,
    lng: 83.0128,
  },
  {
    name: "Tunis",
    lat: 36.8008,
    lng: 10.18,
  },
  {
    name: "Chelyabinsk",
    lat: 55.15,
    lng: 61.4,
  },
  {
    name: "Mombasa",
    lat: -4.05,
    lng: 39.6667,
  },
  {
    name: "Providence",
    lat: 41.823,
    lng: -71.4187,
  },
  {
    name: "Qom",
    lat: 34.6461,
    lng: 50.8789,
  },
  {
    name: "Maiduguri",
    lat: 11.8333,
    lng: 13.15,
  },
  {
    name: "Maputo",
    lat: -25.9153,
    lng: 32.5764,
  },
  {
    name: "Rosario",
    lat: -32.9575,
    lng: -60.6394,
  },
  {
    name: "Benin City",
    lat: 6.3176,
    lng: 5.6145,
  },
  {
    name: "Xinyu",
    lat: 27.795,
    lng: 114.9242,
  },
  {
    name: "Ahvaz",
    lat: 31.3203,
    lng: 48.6692,
  },
  {
    name: "Dublin",
    lat: 53.3425,
    lng: -6.2658,
  },
  {
    name: "Jacksonville",
    lat: 30.3322,
    lng: -81.6749,
  },
  {
    name: "Medina",
    lat: 24.4667,
    lng: 39.6,
  },
  {
    name: "Srinagar",
    lat: 34.0911,
    lng: 74.8061,
  },
  {
    name: "Omsk",
    lat: 54.9667,
    lng: 73.3833,
  },
  {
    name: "Huazhou",
    lat: 21.654,
    lng: 110.6294,
  },
  {
    name: "Cilacap",
    lat: -7.7167,
    lng: 109.017,
  },
  {
    name: "Xiantao",
    lat: 30.3833,
    lng: 113.4,
  },
  {
    name: "Bandar Lampung",
    lat: -5.4294,
    lng: 105.2625,
  },
  {
    name: "Samara",
    lat: 53.1833,
    lng: 50.1167,
  },
  {
    name: "Guankou",
    lat: 28.1417,
    lng: 113.625,
  },
  {
    name: "Ulsan",
    lat: 35.55,
    lng: 129.3167,
  },
  {
    name: "Dingzhou",
    lat: 38.5158,
    lng: 114.9845,
  },
  {
    name: "Campinas",
    lat: -22.9009,
    lng: -47.0573,
  },
  {
    name: "Lianyuan",
    lat: 27.6961,
    lng: 111.6659,
  },
  {
    name: "Rongcheng",
    lat: 29.8239,
    lng: 112.9019,
  },
  {
    name: "Kaiyuan",
    lat: 36.0656,
    lng: 113.8153,
  },
  {
    name: "Nay Pyi Taw",
    lat: 19.8028,
    lng: 96.1583,
  },
  {
    name: "Dakar",
    lat: 14.7319,
    lng: -17.4572,
  },
  {
    name: "Zhuji",
    lat: 29.7169,
    lng: 120.2314,
  },
  {
    name: "Zapopan",
    lat: 20.7167,
    lng: -103.4,
  },
  {
    name: "Leiyang",
    lat: 26.4179,
    lng: 112.8457,
  },
  {
    name: "Dadukou",
    lat: 26.5849,
    lng: 101.7149,
  },
  {
    name: "Quetta",
    lat: 30.192,
    lng: 67.007,
  },
  {
    name: "Amritsar",
    lat: 31.6167,
    lng: 74.85,
  },
  {
    name: "Callao",
    lat: -12.0611,
    lng: -77.1333,
  },
  {
    name: "Aligarh",
    lat: 27.88,
    lng: 78.08,
  },
  {
    name: "Yingchuan",
    lat: 34.1511,
    lng: 113.4733,
  },
  {
    name: "Tegucigalpa",
    lat: 14.0942,
    lng: -87.2067,
  },
  {
    name: "Ciudad Nezahualcoyotl",
    lat: 19.41,
    lng: -99.03,
  },
  {
    name: "Tripoli",
    lat: 32.8752,
    lng: 13.1875,
  },
  {
    name: "Rostov",
    lat: 47.2333,
    lng: 39.7167,
  },
  {
    name: "Nezahualcoyotl",
    lat: 19.4,
    lng: -98.9889,
  },
  {
    name: "Bhiwandi",
    lat: 19.3,
    lng: 73.0667,
  },
  {
    name: "Zhoushan",
    lat: 30.0162,
    lng: 122.0988,
  },
  {
    name: "Tbilisi",
    lat: 41.7225,
    lng: 44.7925,
  },
  {
    name: "Ufa",
    lat: 54.7333,
    lng: 55.9667,
  },
  {
    name: "Fes",
    lat: 34.0433,
    lng: -5.0033,
  },
  {
    name: "Bien Hoa",
    lat: 10.9575,
    lng: 106.8426,
  },
  {
    name: "Mexicali",
    lat: 32.6633,
    lng: -115.4678,
  },
  {
    name: "Gwalior",
    lat: 26.215,
    lng: 78.1931,
  },
  {
    name: "Ankang",
    lat: 32.6877,
    lng: 109.0235,
  },
  {
    name: "Ikare",
    lat: 7.5304,
    lng: 5.76,
  },
  {
    name: "Hegang",
    lat: 47.3139,
    lng: 130.2775,
  },
  {
    name: "Salt Lake City",
    lat: 40.7777,
    lng: -111.9306,
  },
  {
    name: "Bhilai",
    lat: 21.2167,
    lng: 81.4333,
  },
  {
    name: "Yuyao",
    lat: 30.0372,
    lng: 121.1546,
  },
  {
    name: "N'Djamena",
    lat: 12.11,
    lng: 15.05,
  },
  {
    name: "Hanchuan",
    lat: 30.652,
    lng: 113.8274,
  },
  {
    name: "Gongzhuling",
    lat: 43.5036,
    lng: 124.8088,
  },
  {
    name: "Copenhagen",
    lat: 55.6786,
    lng: 12.5635,
  },
  {
    name: "Irbid",
    lat: 32.5556,
    lng: 35.85,
  },
  {
    name: "Haora",
    lat: 22.59,
    lng: 88.31,
  },
  {
    name: "Cologne",
    lat: 50.9422,
    lng: 6.9578,
  },
  {
    name: "Krasnoyarsk",
    lat: 56.0167,
    lng: 92.8667,
  },
  {
    name: "Yicheng",
    lat: 31.3697,
    lng: 119.8239,
  },
  {
    name: "Mizhou",
    lat: 36,
    lng: 119.4167,
  },
  {
    name: "Nashville",
    lat: 36.1715,
    lng: -86.7843,
  },
  {
    name: "Yerevan",
    lat: 40.1814,
    lng: 44.5144,
  },
  {
    name: "Ranchi",
    lat: 23.3556,
    lng: 85.3347,
  },
  {
    name: "Nur-Sultan",
    lat: 51.1333,
    lng: 71.4333,
  },
  {
    name: "Nouakchott",
    lat: 18.0783,
    lng: -15.9744,
  },
  {
    name: "Vereeniging",
    lat: -26.6736,
    lng: 27.9319,
  },
  {
    name: "Richmond",
    lat: 37.5295,
    lng: -77.4756,
  },
  {
    name: "Sao Luis",
    lat: -2.53,
    lng: -44.3028,
  },
  {
    name: "San Pedro Sula",
    lat: 15.5,
    lng: -88.0333,
  },
  {
    name: "Taixing",
    lat: 32.1724,
    lng: 120.0142,
  },
  {
    name: "Memphis",
    lat: 35.1046,
    lng: -89.9773,
  },
  {
    name: "Goyang",
    lat: 37.6564,
    lng: 126.835,
  },
  {
    name: "Bezwada",
    lat: 16.5167,
    lng: 80.6167,
  },
  {
    name: "Edmonton",
    lat: 53.5344,
    lng: -113.4903,
  },
  {
    name: "Xishan",
    lat: 27.6609,
    lng: 113.4946,
  },
  {
    name: "Barquisimeto",
    lat: 10.0678,
    lng: -69.3467,
  },
  {
    name: "Sendai",
    lat: 38.2683,
    lng: 140.8694,
  },
  {
    name: "Voronezh",
    lat: 51.6717,
    lng: 39.2106,
  },
  {
    name: "Changwon",
    lat: 35.2281,
    lng: 128.6811,
  },
  {
    name: "Zhongwei",
    lat: 37.5139,
    lng: 105.1884,
  },
  {
    name: "Shouguang",
    lat: 36.8833,
    lng: 118.7333,
  },
  {
    name: "Bogor",
    lat: -6.6,
    lng: 106.8,
  },
  {
    name: "Raleigh",
    lat: 35.8325,
    lng: -78.6435,
  },
  {
    name: "Cartagena",
    lat: 10.4236,
    lng: -75.5253,
  },
  {
    name: "Chandigarh",
    lat: 30.7353,
    lng: 76.7911,
  },
  {
    name: "Bishkek",
    lat: 42.8667,
    lng: 74.5667,
  },
  {
    name: "Amsterdam",
    lat: 52.35,
    lng: 4.9166,
  },
  {
    name: "Matola",
    lat: -25.9667,
    lng: 32.4667,
  },
  {
    name: "Ogbomoso",
    lat: 8.1333,
    lng: 4.25,
  },
  {
    name: "Ashgabat",
    lat: 37.95,
    lng: 58.3833,
  },
  {
    name: "E'zhou",
    lat: 30.3972,
    lng: 114.8842,
  },
  {
    name: "Maceio",
    lat: -9.6658,
    lng: -35.735,
  },
  {
    name: "Niamey",
    lat: 13.5086,
    lng: 2.1111,
  },
  {
    name: "Managua",
    lat: 12.15,
    lng: -86.2667,
  },
  {
    name: "Patam",
    lat: 1.0678,
    lng: 104.0167,
  },
  {
    name: "Tekirdag",
    lat: 40.9833,
    lng: 27.5167,
  },
  {
    name: "Linhai",
    lat: 28.8523,
    lng: 121.1409,
  },
  {
    name: "Shubra al Khaymah",
    lat: 30.1286,
    lng: 31.2422,
  },
  {
    name: "Monrovia",
    lat: 6.3106,
    lng: -10.8047,
  },
  {
    name: "Wafangdian",
    lat: 39.6271,
    lng: 121.9972,
  },
  {
    name: "Zhongxiang",
    lat: 31.169,
    lng: 112.5853,
  },
  {
    name: "Shymkent",
    lat: 42.3,
    lng: 69.6,
  },
  {
    name: "New Orleans",
    lat: 30.0687,
    lng: -89.9288,
  },
  {
    name: "Volgograd",
    lat: 48.7,
    lng: 44.4833,
  },
  {
    name: "Port-au-Prince",
    lat: 18.5425,
    lng: -72.3386,
  },
  {
    name: "Mysore",
    lat: 12.3086,
    lng: 76.6531,
  },
  {
    name: "Odesa",
    lat: 46.4775,
    lng: 30.7326,
  },
  {
    name: "Kathmandu",
    lat: 27.7167,
    lng: 85.3667,
  },
  {
    name: "Raipur",
    lat: 21.2379,
    lng: 81.6337,
  },
  {
    name: "Nice",
    lat: 43.7034,
    lng: 7.2663,
  },
  {
    name: "Arequipa",
    lat: -16.3988,
    lng: -71.5369,
  },
  {
    name: "Port Harcourt",
    lat: 4.75,
    lng: 7,
  },
  {
    name: "Rotterdam",
    lat: 51.92,
    lng: 4.48,
  },
  {
    name: "Louisville",
    lat: 38.1663,
    lng: -85.6485,
  },
  {
    name: "Zaoyang",
    lat: 32.1287,
    lng: 112.7581,
  },
  {
    name: "Shuizhai",
    lat: 33.4433,
    lng: 114.8994,
  },
  {
    name: "Kota",
    lat: 25.18,
    lng: 75.83,
  },
  {
    name: "Abu Dhabi",
    lat: 24.4781,
    lng: 54.3686,
  },
  {
    name: "Stockholm",
    lat: 59.3294,
    lng: 18.0686,
  },
  {
    name: "Ottawa",
    lat: 45.4247,
    lng: -75.695,
  },
  {
    name: "Asmara",
    lat: 15.3333,
    lng: 38.9167,
  },
  {
    name: "Freetown",
    lat: 8.4833,
    lng: -13.2331,
  },
  {
    name: "Jerusalem",
    lat: 31.7833,
    lng: 35.2167,
  },
  {
    name: "Panama City",
    lat: 9,
    lng: -79.5,
  },
  {
    name: "Lome",
    lat: 6.1319,
    lng: 1.2228,
  },
  {
    name: "Libreville",
    lat: 0.3901,
    lng: 9.4544,
  },
  {
    name: "Zagreb",
    lat: 45.8,
    lng: 15.95,
  },
  {
    name: "Dushanbe",
    lat: 38.5731,
    lng: 68.7864,
  },
  {
    name: "Lilongwe",
    lat: -13.9833,
    lng: 33.7833,
  },
  {
    name: "Cotonou",
    lat: 6.4,
    lng: 2.52,
  },
  {
    name: "Vientiane",
    lat: 17.9667,
    lng: 102.6,
  },
  {
    name: "Colombo",
    lat: 6.9167,
    lng: 79.8333,
  },
  {
    name: "Kigali",
    lat: -1.9536,
    lng: 30.0606,
  },
  {
    name: "Pretoria",
    lat: -25.7464,
    lng: 28.1881,
  },
  {
    name: "Bangui",
    lat: 4.3732,
    lng: 18.5628,
  },
  {
    name: "Winnipeg",
    lat: 49.8844,
    lng: -97.1464,
  },
  {
    name: "Quebec City",
    lat: 46.8139,
    lng: -71.2081,
  },
  {
    name: "Riga",
    lat: 56.9475,
    lng: 24.1069,
  },
  {
    name: "Oslo",
    lat: 59.9111,
    lng: 10.7528,
  },
  {
    name: "Chisinau",
    lat: 47.0056,
    lng: 28.8575,
  },
  {
    name: "Athens",
    lat: 37.9794,
    lng: 23.7161,
  },
  {
    name: "Bujumbura",
    lat: -3.3825,
    lng: 29.3611,
  },
  {
    name: "Helsinki",
    lat: 60.1756,
    lng: 24.9342,
  },
  {
    name: "Skopje",
    lat: 41.9833,
    lng: 21.4333,
  },
  {
    name: "Kuwait City",
    lat: 29.375,
    lng: 47.98,
  },
  {
    name: "Kingston",
    lat: 17.9714,
    lng: -76.7931,
  },
  {
    name: "Vilnius",
    lat: 54.6833,
    lng: 25.2833,
  },
  {
    name: "San Salvador",
    lat: 13.6989,
    lng: -89.1914,
  },
  {
    name: "Djibouti",
    lat: 11.595,
    lng: 43.1481,
  },
  {
    name: "Lisbon",
    lat: 38.7452,
    lng: -9.1604,
  },
  {
    name: "Kitchener",
    lat: 43.4186,
    lng: -80.4728,
  },
  {
    name: "Tallinn",
    lat: 59.4372,
    lng: 24.745,
  },
  {
    name: "Cape Town",
    lat: -33.925,
    lng: 18.425,
  },
  {
    name: "Bratislava",
    lat: 48.1447,
    lng: 17.1128,
  },
  {
    name: "Tirana",
    lat: 41.33,
    lng: 19.82,
  },
  {
    name: "Canberra",
    lat: -35.2931,
    lng: 149.1269,
  },
  {
    name: "Wellington",
    lat: -41.2889,
    lng: 174.7772,
  },
  {
    name: "Beirut",
    lat: 33.8869,
    lng: 35.5131,
  },
  {
    name: "Dodoma",
    lat: -6.25,
    lng: 35.75,
  },
  {
    name: "Halifax",
    lat: 44.6475,
    lng: -63.5906,
  },
  {
    name: "Bissau",
    lat: 11.8592,
    lng: -15.5956,
  },
  {
    name: "Juba",
    lat: 4.85,
    lng: 31.6,
  },
  {
    name: "Port Moresby",
    lat: -9.4789,
    lng: 147.1494,
  },
  {
    name: "Yamoussoukro",
    lat: 6.8161,
    lng: -5.2742,
  },
  {
    name: "Victoria",
    lat: 48.4283,
    lng: -123.3647,
  },
  {
    name: "Maseru",
    lat: -29.31,
    lng: 27.48,
  },
  {
    name: "Nicosia",
    lat: 35.1725,
    lng: 33.365,
  },
  {
    name: "Windhoek",
    lat: -22.57,
    lng: 17.0836,
  },
  {
    name: "Porto-Novo",
    lat: 6.4833,
    lng: 2.6167,
  },
  {
    name: "Sucre",
    lat: -19.0431,
    lng: -65.2592,
  },
  {
    name: "San Jose",
    lat: 9.9333,
    lng: -84.0833,
  },
  {
    name: "Ljubljana",
    lat: 46.05,
    lng: 14.5167,
  },
  {
    name: "Sarajevo",
    lat: 43.8667,
    lng: 18.4167,
  },
  {
    name: "Nassau",
    lat: 25.0667,
    lng: -77.3333,
  },
  {
    name: "Bloemfontein",
    lat: -29.1,
    lng: 26.2167,
  },
  {
    name: "Gaborone",
    lat: -24.6569,
    lng: 25.9086,
  },
  {
    name: "Paramaribo",
    lat: 5.8667,
    lng: -55.1667,
  },
  {
    name: "Dili",
    lat: -8.5586,
    lng: 125.5736,
  },
  {
    name: "Pristina",
    lat: 42.6667,
    lng: 21.1667,
  },
  {
    name: "Georgetown",
    lat: 6.7833,
    lng: -58.1667,
  },
  {
    name: "Malabo",
    lat: 3.7521,
    lng: 8.7737,
  },
  {
    name: "Brussels",
    lat: 50.8467,
    lng: 4.3517,
  },
  {
    name: "Male",
    lat: 4.175,
    lng: 73.5083,
  },
  {
    name: "Podgorica",
    lat: 42.4397,
    lng: 19.2661,
  },
  {
    name: "Manama",
    lat: 26.2167,
    lng: 50.5831,
  },
  {
    name: "Port Louis",
    lat: -20.1667,
    lng: 57.5,
  },
  {
    name: "New Delhi",
    lat: 28.7,
    lng: 77.2,
  },
  {
    name: "Bern",
    lat: 46.948,
    lng: 7.4474,
  },
  {
    name: "Reykjavik",
    lat: 64.1475,
    lng: -21.935,
  },
  {
    name: "Praia",
    lat: 14.9177,
    lng: -23.5092,
  },
  {
    name: "Luxembourg",
    lat: 49.6106,
    lng: 6.1328,
  },
  {
    name: "Sri Jayewardenepura Kotte",
    lat: 6.9,
    lng: 79.9164,
  },
  {
    name: "Bridgetown",
    lat: 13.0975,
    lng: -59.6167,
  },
  {
    name: "Moroni",
    lat: -11.7036,
    lng: 43.2536,
  },
  {
    name: "Thimphu",
    lat: 27.4833,
    lng: 89.6333,
  },
  {
    name: "Mbabane",
    lat: -26.3167,
    lng: 31.1333,
  },
  {
    name: "Honiara",
    lat: -9.4333,
    lng: 159.95,
  },
  {
    name: "Suva",
    lat: -18.1333,
    lng: 178.4333,
  },
  {
    name: "Castries",
    lat: 14.0167,
    lng: -60.9833,
  },
  {
    name: "Sao Tome",
    lat: 0.3333,
    lng: 6.7333,
  },
  {
    name: "Port-Vila",
    lat: -17.75,
    lng: 168.3,
  },
  {
    name: "Bandar Seri Begawan",
    lat: 4.9167,
    lng: 114.9167,
  },
  {
    name: "Monaco",
    lat: 43.7396,
    lng: 7.4069,
  },
  {
    name: "Gitega",
    lat: -3.4264,
    lng: 29.9306,
  },
  {
    name: "Port of Spain",
    lat: 10.6667,
    lng: -61.5167,
  },
  {
    name: "Apia",
    lat: -13.8333,
    lng: -171.8333,
  },
  {
    name: "Vaduz",
    lat: 47.1415,
    lng: 9.5215,
  },
  {
    name: "Banjul",
    lat: 13.4531,
    lng: -16.5775,
  },
  {
    name: "Tarawa",
    lat: 1.3382,
    lng: 173.0176,
  },
  {
    name: "Victoria",
    lat: -4.6236,
    lng: 55.4544,
  },
  {
    name: "Majuro",
    lat: 7.1167,
    lng: 171.3667,
  },
  {
    name: "Kingstown",
    lat: 13.1667,
    lng: -61.2333,
  },
  {
    name: "Nuku`alofa",
    lat: -21.1347,
    lng: -175.2083,
  },
  {
    name: "Saint John's",
    lat: 17.1211,
    lng: -61.8447,
  },
  {
    name: "Andorra la Vella",
    lat: 42.5,
    lng: 1.5,
  },
  {
    name: "Belmopan",
    lat: 17.25,
    lng: -88.7675,
  },
  {
    name: "Roseau",
    lat: 15.3,
    lng: -61.3833,
  },
  {
    name: "Basseterre",
    lat: 17.2983,
    lng: -62.7342,
  },
  {
    name: "Pago Pago",
    lat: -14.274,
    lng: -170.7046,
  },
  {
    name: "Valletta",
    lat: 35.8978,
    lng: 14.5125,
  },
  {
    name: "Palikir",
    lat: 6.9178,
    lng: 158.185,
  },
  {
    name: "Funafuti",
    lat: -8.5167,
    lng: 179.2167,
  },
  {
    name: "Lobamba",
    lat: -26.4167,
    lng: 31.1667,
  },
  {
    name: "Saint George's",
    lat: 12.0444,
    lng: -61.7417,
  },
  {
    name: "San Marino",
    lat: 43.932,
    lng: 12.4484,
  },
  {
    name: "Al Quds",
    lat: 31.7764,
    lng: 35.2269,
  },
  {
    name: "Capitol Hill",
    lat: 15.2137,
    lng: 145.7546,
  },
  {
    name: "Hagta",
    lat: 13.4745,
    lng: 144.7504,
  },
  {
    name: "Ngerulmud",
    lat: 7.5006,
    lng: 134.6242,
  },
  {
    name: "Bareilly",
    lat: 28.364,
    lng: 79.415,
  },
  {
    name: "Quang Ha",
    lat: 16.06,
    lng: 108.25,
  },
  {
    name: "Kitaku",
    lat: 33.8704,
    lng: 130.82,
  },
  {
    name: "Jodhpur",
    lat: 26.2918,
    lng: 73.0168,
  },
  {
    name: "Xingcheng",
    lat: 24.1681,
    lng: 115.6669,
  },
  {
    name: "Dongtai",
    lat: 32.8534,
    lng: 120.3037,
  },
  {
    name: "Joinvile",
    lat: -26.32,
    lng: -48.8399,
  },
  {
    name: "Yingcheng",
    lat: 24.1876,
    lng: 113.4042,
  },
  {
    name: "Dnipro",
    lat: 48.45,
    lng: 34.9833,
  },
  {
    name: "Glasgow",
    lat: 55.8609,
    lng: -4.2514,
  },
  {
    name: "Chiba",
    lat: 35.6,
    lng: 140.1,
  },
  {
    name: "Danyang",
    lat: 31.9948,
    lng: 119.575,
  },
  {
    name: "Natal",
    lat: -6.9838,
    lng: -60.2699,
  },
  {
    name: "Naples",
    lat: 40.8333,
    lng: 14.25,
  },
  {
    name: "Zhaodong",
    lat: 46.0635,
    lng: 125.9773,
  },
  {
    name: "Xibeijie",
    lat: 39.737,
    lng: 98.5049,
  },
  {
    name: "Kirkuk",
    lat: 35.4667,
    lng: 44.4,
  },
  {
    name: "Huilong",
    lat: 31.8131,
    lng: 121.6574,
  },
  {
    name: "Tongjin",
    lat: 37.2361,
    lng: 127.2011,
  },
  {
    name: "Oklahoma City",
    lat: 35.4676,
    lng: -97.5136,
  },
  {
    name: "Toulouse",
    lat: 43.6045,
    lng: 1.444,
  },
  {
    name: "Denizli",
    lat: 37.7731,
    lng: 29.0878,
  },
  {
    name: "Dispur",
    lat: 26.15,
    lng: 91.77,
  },
  {
    name: "Coimbatore",
    lat: 11,
    lng: 76.9667,
  },
  {
    name: "Luocheng",
    lat: 22.7645,
    lng: 111.5745,
  },
  {
    name: "Guwahati",
    lat: 26.1667,
    lng: 91.7667,
  },
  {
    name: "Shima",
    lat: 24.4475,
    lng: 117.8118,
  },
  {
    name: "Songnam",
    lat: 37.4386,
    lng: 127.1378,
  },
  {
    name: "Solapur",
    lat: 17.6833,
    lng: 75.9167,
  },
  {
    name: "Tangier",
    lat: 35.7847,
    lng: -5.8125,
  },
  {
    name: "Anqiu",
    lat: 36.3619,
    lng: 119.1072,
  },
  {
    name: "Feicheng",
    lat: 36.186,
    lng: 116.772,
  },
  {
    name: "Taishan",
    lat: 22.2486,
    lng: 112.785,
  },
  {
    name: "Meishan",
    lat: 34.1736,
    lng: 112.839,
  },
  {
    name: "Kisangani",
    lat: 0.5153,
    lng: 25.1911,
  },
  {
    name: "Khartoum North",
    lat: 15.6333,
    lng: 32.6333,
  },
  {
    name: "Aguascalientes",
    lat: 21.876,
    lng: -102.296,
  },
  {
    name: "Marrakech",
    lat: 31.6295,
    lng: -7.9811,
  },
  {
    name: "Nada",
    lat: 19.5,
    lng: 109.5833,
  },
  {
    name: "Donetsk",
    lat: 48.0089,
    lng: 37.8042,
  },
  {
    name: "Taihecun",
    lat: 45.768,
    lng: 131.0063,
  },
  {
    name: "Wuchuan",
    lat: 21.4571,
    lng: 110.7659,
  },
  {
    name: "Trujillo",
    lat: -8.1119,
    lng: -79.0289,
  },
  {
    name: "Cebu City",
    lat: 10.3,
    lng: 123.9,
  },
  {
    name: "Taihe",
    lat: 30.8706,
    lng: 105.3784,
  },
  {
    name: "Olinda",
    lat: -8,
    lng: -34.85,
  },
  {
    name: "Bridgeport",
    lat: 41.1918,
    lng: -73.1953,
  },
  {
    name: "Trichinopoly",
    lat: 10.8269,
    lng: 78.6928,
  },
  {
    name: "Xin'an",
    lat: 34.3662,
    lng: 118.3369,
  },
  {
    name: "Padang",
    lat: -0.9556,
    lng: 100.3606,
  },
  {
    name: "Qingzhou",
    lat: 36.6967,
    lng: 118.4797,
  },
  {
    name: "Buffalo",
    lat: 42.9016,
    lng: -78.8487,
  },
  {
    name: "Xinyi",
    lat: 22.3559,
    lng: 110.9369,
  },
  {
    name: "Lichuan",
    lat: 30.2965,
    lng: 108.9378,
  },
  {
    name: "Daye",
    lat: 30.1003,
    lng: 114.9699,
  },
  {
    name: "Fort Worth",
    lat: 32.7811,
    lng: -97.3473,
  },
  {
    name: "Zhuanghe",
    lat: 39.6896,
    lng: 122.9664,
  },
  {
    name: "Hartford",
    lat: 41.7661,
    lng: -72.6834,
  },
  {
    name: "Ad Dammam",
    lat: 26.4333,
    lng: 50.1,
  },
  {
    name: "Bucheon",
    lat: 37.4989,
    lng: 126.7831,
  },
  {
    name: "Lhasa",
    lat: 29.65,
    lng: 91.1,
  },
  {
    name: "Homs",
    lat: 34.7333,
    lng: 36.7167,
  },
  {
    name: "Jiaozhou",
    lat: 36.2481,
    lng: 119.9625,
  },
  {
    name: "Merida",
    lat: 20.97,
    lng: -89.62,
  },
  {
    name: "Dengtalu",
    lat: 36.08,
    lng: 114.35,
  },
  {
    name: "Zaria",
    lat: 11.0667,
    lng: 7.7,
  },
  {
    name: "Hubli",
    lat: 15.36,
    lng: 75.125,
  },
  {
    name: "Abeokuta",
    lat: 7.15,
    lng: 3.35,
  },
  {
    name: "Tucson",
    lat: 32.1545,
    lng: -110.8782,
  },
  {
    name: "Krasnodar",
    lat: 45.0333,
    lng: 38.9833,
  },
  {
    name: "Natal",
    lat: -5.795,
    lng: -35.2089,
  },
  {
    name: "Novo Hamburgo",
    lat: -29.7096,
    lng: -51.14,
  },
  {
    name: "Chihuahua",
    lat: 28.6353,
    lng: -106.0889,
  },
  {
    name: "Klang",
    lat: 3.0333,
    lng: 101.45,
  },
  {
    name: "Turin",
    lat: 45.0667,
    lng: 7.7,
  },
  {
    name: "Jos",
    lat: 9.9333,
    lng: 8.8833,
  },
  {
    name: "Laiyang",
    lat: 36.9758,
    lng: 120.7136,
  },
  {
    name: "Jalandhar",
    lat: 31.3256,
    lng: 75.5792,
  },
  {
    name: "Campo Grande",
    lat: -20.4686,
    lng: -54.6222,
  },
  {
    name: "Sale",
    lat: 34.05,
    lng: -6.8167,
  },
  {
    name: "Barinas",
    lat: 8.6333,
    lng: -70.2167,
  },
  {
    name: "Marseille",
    lat: 43.2964,
    lng: 5.37,
  },
  {
    name: "Kaifeng Chengguanzhen",
    lat: 34.85,
    lng: 114.35,
  },
  {
    name: "Eskisehir",
    lat: 39.7767,
    lng: 30.5206,
  },
  {
    name: "Gaomi",
    lat: 36.3833,
    lng: 119.75,
  },
  {
    name: "Ipoh",
    lat: 4.6,
    lng: 101.07,
  },
  {
    name: "Hai'an",
    lat: 32.532,
    lng: 120.4604,
  },
  {
    name: "Liverpool",
    lat: 53.4,
    lng: -2.9833,
  },
  {
    name: "Zamboanga City",
    lat: 6.9167,
    lng: 122.0833,
  },
  {
    name: "Oran",
    lat: 35.6969,
    lng: -0.6331,
  },
  {
    name: "Southampton",
    lat: 50.9,
    lng: -1.4,
  },
  {
    name: "Weichanglu",
    lat: 37.1792,
    lng: 119.9333,
  },
  {
    name: "Pekanbaru",
    lat: 0.5333,
    lng: 101.45,
  },
  {
    name: "Portsmouth",
    lat: 50.8058,
    lng: -1.0872,
  },
  {
    name: "Leping",
    lat: 28.9632,
    lng: 117.1203,
  },
  {
    name: "Erbil",
    lat: 36.1911,
    lng: 44.0094,
  },
  {
    name: "Kermanshah",
    lat: 34.3167,
    lng: 47.0686,
  },
  {
    name: "Hailun",
    lat: 47.4585,
    lng: 126.9632,
  },
  {
    name: "Yangchun",
    lat: 22.1667,
    lng: 111.7833,
  },
  {
    name: "Macheng",
    lat: 31.1817,
    lng: 115.0189,
  },
  {
    name: "Ilorin",
    lat: 8.5,
    lng: 4.55,
  },
  {
    name: "Teresina",
    lat: -5.0949,
    lng: -42.8042,
  },
  {
    name: "Omaha",
    lat: 41.2627,
    lng: -96.0522,
  },
  {
    name: "Yuci",
    lat: 37.6804,
    lng: 112.73,
  },
  {
    name: "Saratov",
    lat: 51.5333,
    lng: 46,
  },
  {
    name: "Iguacu",
    lat: -22.74,
    lng: -43.47,
  },
  {
    name: "El Paso",
    lat: 31.8479,
    lng: -106.4309,
  },
  {
    name: "Denpasar",
    lat: -8.6667,
    lng: 115.2167,
  },
  {
    name: "Dehui",
    lat: 44.5323,
    lng: 125.6965,
  },
  {
    name: "Naucalpan de Juarez",
    lat: 19.4753,
    lng: -99.2378,
  },
  {
    name: "Bhubaneshwar",
    lat: 20.2644,
    lng: 85.8281,
  },
  {
    name: "Tongchuan",
    lat: 34.9057,
    lng: 108.9422,
  },
  {
    name: "Cheongju",
    lat: 36.6372,
    lng: 127.4897,
  },
  {
    name: "Warri",
    lat: 5.5167,
    lng: 5.75,
  },
  {
    name: "Pointe-Noire",
    lat: -4.7889,
    lng: 11.8653,
  },
  {
    name: "Rongjiawan",
    lat: 29.3801,
    lng: 113.1,
  },
  {
    name: "San Luis Potosi",
    lat: 22.1511,
    lng: -100.9761,
  },
  {
    name: "Butterworth",
    lat: 5.3942,
    lng: 100.3664,
  },
  {
    name: "Bhayandar",
    lat: 19.3,
    lng: 72.85,
  },
  {
    name: "Renqiu",
    lat: 38.7094,
    lng: 116.1008,
  },
  {
    name: "Toluca",
    lat: 19.2925,
    lng: -99.6569,
  },
  {
    name: "Honolulu",
    lat: 21.3294,
    lng: -157.846,
  },
  {
    name: "Queretaro",
    lat: 20.5875,
    lng: -100.3928,
  },
  {
    name: "Xindi",
    lat: 29.8182,
    lng: 113.4653,
  },
  {
    name: "Wu'an",
    lat: 36.6941,
    lng: 114.1847,
  },
  {
    name: "Sao Bernardo do Campo",
    lat: -23.6939,
    lng: -46.565,
  },
  {
    name: "Hermosillo",
    lat: 29.0989,
    lng: -110.9542,
  },
  {
    name: "Wutong",
    lat: 30.6326,
    lng: 120.5474,
  },
  {
    name: "Taguig City",
    lat: 14.5167,
    lng: 121.05,
  },
  {
    name: "Saltillo",
    lat: 25.4333,
    lng: -101,
  },
  {
    name: "Gaoyou",
    lat: 32.7847,
    lng: 119.4432,
  },
  {
    name: "Hejian",
    lat: 38.4451,
    lng: 116.0897,
  },
  {
    name: "Yiyang",
    lat: 26.4103,
    lng: 112.3913,
  },
  {
    name: "Puxi",
    lat: 35.2125,
    lng: 114.735,
  },
  {
    name: "Zijinglu",
    lat: 34.7513,
    lng: 112.9854,
  },
  {
    name: "Xiashi",
    lat: 30.5333,
    lng: 120.6833,
  },
  {
    name: "Trabzon",
    lat: 41.005,
    lng: 39.7225,
  },
  {
    name: "Joao Pessoa",
    lat: -7.0833,
    lng: -34.8333,
  },
  {
    name: "Dongyang",
    lat: 29.2785,
    lng: 120.2282,
  },
  {
    name: "McAllen",
    lat: 26.2273,
    lng: -98.2471,
  },
  {
    name: "Valencia",
    lat: 39.4667,
    lng: -0.375,
  },
  {
    name: "Qingping",
    lat: 34.538,
    lng: 113.3796,
  },
  {
    name: "Niigata",
    lat: 37.9161,
    lng: 139.0364,
  },
  {
    name: "Hamamatsu",
    lat: 34.7167,
    lng: 137.7333,
  },
  {
    name: "Morelia",
    lat: 19.7683,
    lng: -101.1894,
  },
  {
    name: "Pasig City",
    lat: 14.575,
    lng: 121.0833,
  },
  {
    name: "Moradabad",
    lat: 28.8418,
    lng: 78.7568,
  },
  {
    name: "Culiacan",
    lat: 24.8069,
    lng: -107.3939,
  },
  {
    name: "Xiangxiang",
    lat: 27.7389,
    lng: 112.5223,
  },
  {
    name: "Malang",
    lat: -7.98,
    lng: 112.62,
  },
  {
    name: "Xingyi",
    lat: 25.091,
    lng: 104.9011,
  },
  {
    name: "Chaohucun",
    lat: 31.6783,
    lng: 117.7353,
  },
  {
    name: "Fuyang",
    lat: 30.0533,
    lng: 119.9519,
  },
  {
    name: "Antipolo",
    lat: 14.5842,
    lng: 121.1763,
  },
  {
    name: "Nottingham",
    lat: 52.95,
    lng: -1.15,
  },
  {
    name: "Cencheng",
    lat: 22.9297,
    lng: 111.0186,
  },
  {
    name: "Krakow",
    lat: 50.0614,
    lng: 19.9372,
  },
  {
    name: "Hempstead",
    lat: 40.6629,
    lng: -73.6089,
  },
  {
    name: "Erzurum",
    lat: 39.9097,
    lng: 41.2756,
  },
  {
    name: "Al `Ayn",
    lat: 24.2075,
    lng: 55.7447,
  },
  {
    name: "Songzi",
    lat: 30.1772,
    lng: 111.7732,
  },
  {
    name: "Laixi",
    lat: 36.8667,
    lng: 120.5333,
  },
  {
    name: "Zhongba",
    lat: 31.7761,
    lng: 104.7406,
  },
  {
    name: "Qingnian",
    lat: 36.8494,
    lng: 115.7061,
  },
  {
    name: "Albuquerque",
    lat: 35.1053,
    lng: -106.6464,
  },
  {
    name: "Kaduna",
    lat: 10.5231,
    lng: 7.4403,
  },
  {
    name: "Tlalnepantla",
    lat: 19.5367,
    lng: -99.1947,
  },
  {
    name: "Xinhualu",
    lat: 34.3962,
    lng: 113.7249,
  },
  {
    name: "Guangshui",
    lat: 31.6189,
    lng: 113.8229,
  },
  {
    name: "Frankfurt",
    lat: 50.1136,
    lng: 8.6797,
  },
  {
    name: "Samarinda",
    lat: -0.5022,
    lng: 117.1536,
  },
  {
    name: "Changhua",
    lat: 24.0667,
    lng: 120.5333,
  },
  {
    name: "Pietermaritzburg",
    lat: -29.5833,
    lng: 30.4167,
  },
  {
    name: "Hungnam",
    lat: 39.8231,
    lng: 127.6232,
  },
  {
    name: "Kolhapur",
    lat: 16.7,
    lng: 74.2333,
  },
  {
    name: "Ciudad Guayana",
    lat: 8.3596,
    lng: -62.6517,
  },
  {
    name: "Cucuta",
    lat: 7.9075,
    lng: -72.5047,
  },
  {
    name: "Licheng",
    lat: 31.4174,
    lng: 119.4786,
  },
  {
    name: "Thiruvananthapuram",
    lat: 8.5,
    lng: 76.8997,
  },
  {
    name: "Tyumen'",
    lat: 57.15,
    lng: 65.5333,
  },
  {
    name: "San Cristobal",
    lat: 7.7682,
    lng: -72.2322,
  },
  {
    name: "Zaporizhzhia",
    lat: 47.8378,
    lng: 35.1383,
  },
  {
    name: "Cancun",
    lat: 21.1606,
    lng: -86.8475,
  },
  {
    name: "Kumamoto",
    lat: 32.8031,
    lng: 130.7078,
  },
  {
    name: "Chengguan",
    lat: 35.4599,
    lng: 113.7975,
  },
  {
    name: "Nehe",
    lat: 48.48,
    lng: 124.8738,
  },
  {
    name: "Sokoto",
    lat: 13.0622,
    lng: 5.2339,
  },
  {
    name: "Birmingham",
    lat: 33.5277,
    lng: -86.7987,
  },
  {
    name: "Zunhua",
    lat: 40.1881,
    lng: 117.9593,
  },
  {
    name: "Orumiyeh",
    lat: 37.55,
    lng: 45.1,
  },
  {
    name: "Oyo",
    lat: 7.8333,
    lng: 3.9333,
  },
  {
    name: "Wugang",
    lat: 26.7345,
    lng: 110.6293,
  },
  {
    name: "Shuangqiao",
    lat: 35.0833,
    lng: 112.5833,
  },
  {
    name: "Rennes",
    lat: 48.1147,
    lng: -1.6794,
  },
  {
    name: "Sizhan",
    lat: 39.0099,
    lng: 106.3694,
  },
  {
    name: "Langzhong",
    lat: 31.5833,
    lng: 105.972,
  },
  {
    name: "Bristol",
    lat: 51.45,
    lng: -2.5833,
  },
  {
    name: "Qian'an",
    lat: 40.0059,
    lng: 118.6973,
  },
  {
    name: "Lviv",
    lat: 49.8419,
    lng: 24.0315,
  },
  {
    name: "Zouping",
    lat: 36.8625,
    lng: 117.7424,
  },
  {
    name: "Bremen",
    lat: 53.1153,
    lng: 8.7975,
  },
  {
    name: "Reynosa",
    lat: 26.0922,
    lng: -98.2778,
  },
  {
    name: "An Najaf",
    lat: 32.029,
    lng: 44.3396,
  },
  {
    name: "Sagamihara",
    lat: 35.5667,
    lng: 139.3667,
  },
  {
    name: "Guli",
    lat: 28.9008,
    lng: 120.0284,
  },
  {
    name: "Sarasota",
    lat: 27.3386,
    lng: -82.5431,
  },
  {
    name: "Okayama",
    lat: 34.65,
    lng: 133.9167,
  },
  {
    name: "Mississauga",
    lat: 43.6,
    lng: -79.65,
  },
  {
    name: "Lingbao Chengguanzhen",
    lat: 34.5221,
    lng: 110.8786,
  },
  {
    name: "Anlu",
    lat: 31.2575,
    lng: 113.6783,
  },
  {
    name: "Wusong",
    lat: 30.9333,
    lng: 117.7667,
  },
  {
    name: "Dayton",
    lat: 39.7797,
    lng: -84.1998,
  },
  {
    name: "Enugu",
    lat: 6.4403,
    lng: 7.4942,
  },
  {
    name: "George Town",
    lat: 5.4145,
    lng: 100.3292,
  },
  {
    name: "Jaboatao",
    lat: -8.1803,
    lng: -35.0014,
  },
  {
    name: "Santo Andre",
    lat: -23.6572,
    lng: -46.5333,
  },
  {
    name: "Xichang",
    lat: 27.8983,
    lng: 102.2706,
  },
  {
    name: "Soledad",
    lat: 10.92,
    lng: -74.77,
  },
  {
    name: "Chengxiang",
    lat: 31.4515,
    lng: 121.1043,
  },
  {
    name: "Tol'yatti",
    lat: 53.5167,
    lng: 49.4167,
  },
  {
    name: "Saharanpur",
    lat: 29.964,
    lng: 77.546,
  },
  {
    name: "Warangal",
    lat: 17.9756,
    lng: 79.6011,
  },
  {
    name: "Osasco",
    lat: -23.5328,
    lng: -46.7919,
  },
  {
    name: "Dashiqiao",
    lat: 40.6328,
    lng: 122.5021,
  },
  {
    name: "Latakia",
    lat: 35.5236,
    lng: 35.7917,
  },
  {
    name: "Rochester",
    lat: 43.168,
    lng: -77.6162,
  },
  {
    name: "Fresno",
    lat: 36.7831,
    lng: -119.7941,
  },
  {
    name: "Banjarmasin",
    lat: -3.3333,
    lng: 114.5833,
  },
  {
    name: "Salem",
    lat: 11.65,
    lng: 78.1667,
  },
  {
    name: "Changsha",
    lat: 22.3762,
    lng: 112.6877,
  },
  {
    name: "Grenoble",
    lat: 45.1715,
    lng: 5.7224,
  },
  {
    name: "Shishi",
    lat: 24.7355,
    lng: 118.6434,
  },
  {
    name: "Guadalupe",
    lat: 25.6775,
    lng: -100.2597,
  },
  {
    name: "Aracaju",
    lat: -10.9111,
    lng: -37.0717,
  },
  {
    name: "Bauchi",
    lat: 10.3158,
    lng: 9.8442,
  },
  {
    name: "Hamilton",
    lat: 43.2567,
    lng: -79.8692,
  },
  {
    name: "Lodz",
    lat: 51.7769,
    lng: 19.4547,
  },
  {
    name: "Miluo Chengguanzhen",
    lat: 28.8049,
    lng: 113.0745,
  },
  {
    name: "Gaizhou",
    lat: 40.4019,
    lng: 122.3499,
  },
  {
    name: "Shizuoka",
    lat: 34.9756,
    lng: 138.3825,
  },
  {
    name: "Malegaon",
    lat: 20.55,
    lng: 74.55,
  },
  {
    name: "Karbala'",
    lat: 32.6167,
    lng: 44.0333,
  },
  {
    name: "Leling",
    lat: 37.7333,
    lng: 117.2167,
  },
  {
    name: "Sao Jose dos Campos",
    lat: -23.1789,
    lng: -45.8869,
  },
  {
    name: "Jianshe",
    lat: 34.2189,
    lng: 113.7693,
  },
  {
    name: "Acapulco de Juarez",
    lat: 16.8636,
    lng: -99.8825,
  },
  {
    name: "Sheffield",
    lat: 53.3833,
    lng: -1.4667,
  },
  {
    name: "Jingcheng",
    lat: 32.0058,
    lng: 120.2547,
  },
  {
    name: "City of Paranaque",
    lat: 14.4667,
    lng: 121.0167,
  },
  {
    name: "Kochi",
    lat: 9.9667,
    lng: 76.2833,
  },
  {
    name: "Allentown",
    lat: 40.5961,
    lng: -75.4756,
  },
  {
    name: "Bahawalpur",
    lat: 29.3956,
    lng: 71.6722,
  },
  {
    name: "Tasikmalaya",
    lat: -7.3333,
    lng: 108.2,
  },
  {
    name: "Macau",
    lat: 22.203,
    lng: 113.545,
  },
  {
    name: "Torreon",
    lat: 25.5394,
    lng: -103.4486,
  },
  {
    name: "Xinmin",
    lat: 41.9952,
    lng: 122.8224,
  },
  {
    name: "Shanhu",
    lat: 29.5908,
    lng: 120.8176,
  },
  {
    name: "Zhongshu",
    lat: 27.8116,
    lng: 106.4133,
  },
  {
    name: "Xigaze",
    lat: 29.2649,
    lng: 88.8799,
  },
  {
    name: "Gold Coast",
    lat: -28.0167,
    lng: 153.4,
  },
  {
    name: "Palermo",
    lat: 38.1157,
    lng: 13.3613,
  },
  {
    name: "Cagayan de Oro",
    lat: 8.4833,
    lng: 124.65,
  },
  {
    name: "Gorakhpur",
    lat: 26.7611,
    lng: 83.3667,
  },
  {
    name: "Pinghu",
    lat: 30.7005,
    lng: 121.0104,
  },
  {
    name: "Guankou",
    lat: 30.9933,
    lng: 103.624,
  },
  {
    name: "Tulsa",
    lat: 36.1284,
    lng: -95.9042,
  },
  {
    name: "Yatou",
    lat: 37.1653,
    lng: 122.4867,
  },
  {
    name: "Songyang",
    lat: 34.4161,
    lng: 113.0424,
  },
  {
    name: "Cape Coral",
    lat: 26.6446,
    lng: -81.9956,
  },
  {
    name: "Ch'ongjin",
    lat: 41.8,
    lng: 129.7831,
  },
  {
    name: "Sao Jose dos Pinhais",
    lat: -25.57,
    lng: -49.18,
  },
  {
    name: "Puyang Chengguanzhen",
    lat: 35.7004,
    lng: 114.98,
  },
  {
    name: "Qionghu",
    lat: 28.8417,
    lng: 112.3595,
  },
  {
    name: "Yanshi Chengguanzhen",
    lat: 34.723,
    lng: 112.7796,
  },
  {
    name: "Ribeirao Preto",
    lat: -21.1783,
    lng: -47.8067,
  },
  {
    name: "Dasmarinas",
    lat: 14.3294,
    lng: 120.9367,
  },
  {
    name: "Huambo",
    lat: -12.7667,
    lng: 15.7333,
  },
  {
    name: "Wenchang",
    lat: 31.054,
    lng: 116.9507,
  },
  {
    name: "Shulan",
    lat: 44.4167,
    lng: 126.95,
  },
  {
    name: "Catia La Mar",
    lat: 10.6,
    lng: -67.0333,
  },
  {
    name: "Bouake",
    lat: 7.6833,
    lng: -5.0331,
  },
  {
    name: "As Sulaymaniyah",
    lat: 35.55,
    lng: 45.4333,
  },
  {
    name: "Hwasu-dong",
    lat: 37.2,
    lng: 126.7667,
  },
  {
    name: "Jeonju",
    lat: 35.8219,
    lng: 127.1489,
  },
  {
    name: "Durango",
    lat: 24.0167,
    lng: -104.6667,
  },
  {
    name: "Shimoga",
    lat: 13.9304,
    lng: 75.56,
  },
  {
    name: "Ansan",
    lat: 37.3236,
    lng: 126.8219,
  },
  {
    name: "Bulawayo",
    lat: -20.1667,
    lng: 28.5667,
  },
  {
    name: "Xiping",
    lat: 25.6005,
    lng: 103.8166,
  },
  {
    name: "Sanhe",
    lat: 39.9808,
    lng: 117.0701,
  },
  {
    name: "Guntur",
    lat: 16.3,
    lng: 80.45,
  },
  {
    name: "Dali",
    lat: 25.7003,
    lng: 100.1564,
  },
  {
    name: "Concord",
    lat: 37.9722,
    lng: -122.0016,
  },
  {
    name: "Tiruppur",
    lat: 11.1075,
    lng: 77.3398,
  },
  {
    name: "Ch'onan",
    lat: 36.8064,
    lng: 127.1522,
  },
  {
    name: "Zaragoza",
    lat: 41.6483,
    lng: -0.883,
  },
  {
    name: "Izhevsk",
    lat: 56.85,
    lng: 53.2167,
  },
  {
    name: "Guixi",
    lat: 28.2861,
    lng: 117.2083,
  },
  {
    name: "Honcho",
    lat: 35.6947,
    lng: 139.9825,
  },
  {
    name: "Sorocaba",
    lat: -23.5019,
    lng: -47.4578,
  },
  {
    name: "Villahermosa",
    lat: 17.9892,
    lng: -92.9281,
  },
  {
    name: "Petaling Jaya",
    lat: 3.1073,
    lng: 101.6067,
  },
  {
    name: "Wuxue",
    lat: 29.8518,
    lng: 115.5539,
  },
  {
    name: "Utrecht",
    lat: 52.1003,
    lng: 5.12,
  },
  {
    name: "Kikwit",
    lat: -5.0333,
    lng: 18.8167,
  },
  {
    name: "Colorado Springs",
    lat: 38.8674,
    lng: -104.7606,
  },
  {
    name: "Valenzuela",
    lat: 14.7,
    lng: 120.9833,
  },
  {
    name: "Gaobeidian",
    lat: 39.3257,
    lng: 115.8678,
  },
  {
    name: "Qufu",
    lat: 35.6,
    lng: 116.9833,
  },
  {
    name: "Ruiming",
    lat: 25.8833,
    lng: 116.0333,
  },
  {
    name: "Wroclaw",
    lat: 51.1077,
    lng: 17.0353,
  },
  {
    name: "Rasht",
    lat: 37.2833,
    lng: 49.6,
  },
  {
    name: "Nantes",
    lat: 47.2181,
    lng: -1.5528,
  },
  {
    name: "Stuttgart",
    lat: 48.7761,
    lng: 9.1775,
  },
  {
    name: "Al Hufuf",
    lat: 25.3608,
    lng: 49.5997,
  },
  {
    name: "Xinshi",
    lat: 31.0236,
    lng: 113.1079,
  },
  {
    name: "Cochabamba",
    lat: -17.3935,
    lng: -66.157,
  },
  {
    name: "Barnaul",
    lat: 53.3567,
    lng: 83.7872,
  },
  {
    name: "Tripoli",
    lat: 34.4333,
    lng: 35.8333,
  },
  {
    name: "Jin'e",
    lat: 29.3395,
    lng: 105.2868,
  },
  {
    name: "Benghazi",
    lat: 32.1167,
    lng: 20.0667,
  },
  {
    name: "Kryvyy Rih",
    lat: 47.9086,
    lng: 33.3433,
  },
  {
    name: "Yanggok",
    lat: 37.6367,
    lng: 127.2142,
  },
  {
    name: "Changping",
    lat: 40.2248,
    lng: 116.1944,
  },
  {
    name: "Raurkela",
    lat: 22.2492,
    lng: 84.8828,
  },
  {
    name: "Halwan",
    lat: 29.8419,
    lng: 31.3342,
  },
  {
    name: "Charleston",
    lat: 32.8153,
    lng: -79.9628,
  },
  {
    name: "Chimalhuacan",
    lat: 19.4167,
    lng: -98.9,
  },
  {
    name: "Xinxing",
    lat: 39.8734,
    lng: 124.1453,
  },
  {
    name: "Suohe",
    lat: 34.7879,
    lng: 113.392,
  },
  {
    name: "Mangalore",
    lat: 12.8703,
    lng: 74.8806,
  },
  {
    name: "Zhuangyuan",
    lat: 37.3,
    lng: 120.8333,
  },
  {
    name: "Ul'yanovsk",
    lat: 54.3167,
    lng: 48.3667,
  },
  {
    name: "Irkutsk",
    lat: 52.2833,
    lng: 104.3,
  },
  {
    name: "Nanded",
    lat: 19.15,
    lng: 77.3333,
  },
  {
    name: "Bacoor",
    lat: 14.4624,
    lng: 120.9645,
  },
  {
    name: "Pontianak",
    lat: -0.0206,
    lng: 109.3414,
  },
  {
    name: "Bazhou",
    lat: 39.1235,
    lng: 116.386,
  },
  {
    name: "Springfield",
    lat: 42.1155,
    lng: -72.5395,
  },
  {
    name: "Turpan",
    lat: 42.95,
    lng: 89.1822,
  },
  {
    name: "Dusseldorf",
    lat: 51.2311,
    lng: 6.7724,
  },
  {
    name: "Xingtai",
    lat: 37.0659,
    lng: 114.4753,
  },
  {
    name: "Meihekou",
    lat: 42.5279,
    lng: 125.678,
  },
  {
    name: "Jurong",
    lat: 31.9579,
    lng: 119.1595,
  },
  {
    name: "Zhugang",
    lat: 28.1277,
    lng: 121.2288,
  },
  {
    name: "Khabarovsk",
    lat: 48.4833,
    lng: 135.0667,
  },
  {
    name: "Xinji",
    lat: 37.9423,
    lng: 115.2118,
  },
  {
    name: "Hamhung",
    lat: 39.9167,
    lng: 127.5333,
  },
  {
    name: "Serang",
    lat: -6.12,
    lng: 106.1503,
  },
  {
    name: "Buraydah",
    lat: 26.3333,
    lng: 43.9667,
  },
  {
    name: "Ta`izz",
    lat: 13.5789,
    lng: 44.0219,
  },
  {
    name: "Montpellier",
    lat: 43.6119,
    lng: 3.8772,
  },
  {
    name: "San Miguel de Tucuman",
    lat: -26.8167,
    lng: -65.2167,
  },
  {
    name: "Yaroslavl'",
    lat: 57.6167,
    lng: 39.85,
  },
  {
    name: "Zhangshu",
    lat: 28.0667,
    lng: 115.5375,
  },
  {
    name: "Grand Rapids",
    lat: 42.962,
    lng: -85.6562,
  },
  {
    name: "Vladivostok",
    lat: 43.1167,
    lng: 131.9,
  },
  {
    name: "Kuantan",
    lat: 3.8167,
    lng: 103.3333,
  },
  {
    name: "Cuttack",
    lat: 20.45,
    lng: 85.8667,
  },
  {
    name: "Jambi",
    lat: -1.59,
    lng: 103.61,
  },
  {
    name: "Zhuozhou",
    lat: 39.4887,
    lng: 115.9918,
  },
  {
    name: "Uberlandia",
    lat: -18.9189,
    lng: -48.2769,
  },
  {
    name: "Gothenburg",
    lat: 57.6717,
    lng: 11.981,
  },
  {
    name: "Tianchang",
    lat: 32.6853,
    lng: 119.0041,
  },
  {
    name: "Canoas",
    lat: -29.92,
    lng: -51.18,
  },
  {
    name: "Sargodha",
    lat: 32.0836,
    lng: 72.6711,
  },
  {
    name: "Las Pinas City",
    lat: 14.45,
    lng: 120.9833,
  },
  {
    name: "Cimahi",
    lat: -6.8833,
    lng: 107.5333,
  },
  {
    name: "Kawaguchi",
    lat: 35.8078,
    lng: 139.7242,
  },
  {
    name: "Tuxtla",
    lat: 16.7528,
    lng: -93.1167,
  },
  {
    name: "Balikpapan",
    lat: -1.1489,
    lng: 116.9031,
  },
  {
    name: "Qamdo",
    lat: 31.1375,
    lng: 97.1777,
  },
  {
    name: "Durban",
    lat: -29.8583,
    lng: 31.025,
  },
  {
    name: "Kagoshima",
    lat: 31.58,
    lng: 130.5281,
  },
  {
    name: "General Santos",
    lat: 6.1167,
    lng: 125.1667,
  },
  {
    name: "Chanda",
    lat: 19.95,
    lng: 79.3,
  },
  {
    name: "Al Hillah",
    lat: 23.4895,
    lng: 46.7564,
  },
  {
    name: "Makhachkala",
    lat: 42.9833,
    lng: 47.4833,
  },
  {
    name: "Mar del Plata",
    lat: -38,
    lng: -57.55,
  },
  {
    name: "Brampton",
    lat: 43.6833,
    lng: -79.7667,
  },
  {
    name: "Luocheng",
    lat: 30.9793,
    lng: 104.28,
  },
  {
    name: "Mission Viejo",
    lat: 33.6095,
    lng: -117.655,
  },
  {
    name: "Dortmund",
    lat: 51.5139,
    lng: 7.4653,
  },
  {
    name: "Chuxiong",
    lat: 25.0461,
    lng: 101.5436,
  },
  {
    name: "Makati City",
    lat: 14.55,
    lng: 121.0333,
  },
  {
    name: "Albany",
    lat: 42.6664,
    lng: -73.7987,
  },
  {
    name: "Shah Alam",
    lat: 3.0833,
    lng: 101.5333,
  },
  {
    name: "Knoxville",
    lat: 35.9692,
    lng: -83.9496,
  },
  {
    name: "Essen",
    lat: 51.4508,
    lng: 7.0131,
  },
  {
    name: "Cuiaba",
    lat: -15.5958,
    lng: -56.0969,
  },
  {
    name: "Shangzhi",
    lat: 45.2116,
    lng: 127.962,
  },
  {
    name: "Botou",
    lat: 38.06,
    lng: 116.56,
  },
  {
    name: "Bucaramanga",
    lat: 7.1186,
    lng: -73.1161,
  },
  {
    name: "Anyang",
    lat: 37.3925,
    lng: 126.9269,
  },
  {
    name: "Genoa",
    lat: 44.4072,
    lng: 8.934,
  },
  {
    name: "Kuiju",
    lat: 36.8528,
    lng: 119.3904,
  },
  {
    name: "Tlaquepaque",
    lat: 20.6167,
    lng: -103.3167,
  },
  {
    name: "Hachioji",
    lat: 35.6667,
    lng: 139.3167,
  },
  {
    name: "Dehra Dun",
    lat: 30.318,
    lng: 78.029,
  },
  {
    name: "At Ta'if",
    lat: 21.2667,
    lng: 40.4167,
  },
  {
    name: "San Jose del Monte",
    lat: 14.8139,
    lng: 121.0453,
  },
  {
    name: "Bakersfield",
    lat: 35.3529,
    lng: -119.0359,
  },
  {
    name: "Ogden",
    lat: 41.2278,
    lng: -111.9682,
  },
  {
    name: "Xiulin",
    lat: 29.7211,
    lng: 112.4037,
  },
  {
    name: "Fu'an",
    lat: 27.1,
    lng: 119.6333,
  },
  {
    name: "Malaga",
    lat: 36.7167,
    lng: -4.4167,
  },
  {
    name: "Tomsk",
    lat: 56.4886,
    lng: 84.9522,
  },
  {
    name: "Kerman",
    lat: 30.2833,
    lng: 57.0667,
  },
  {
    name: "Kingston upon Hull",
    lat: 53.7444,
    lng: -0.3325,
  },
  {
    name: "Al Mahallah al Kubra",
    lat: 30.9667,
    lng: 31.1667,
  },
  {
    name: "Luofeng",
    lat: 37.359,
    lng: 120.396,
  },
  {
    name: "Lingyuan",
    lat: 41.2407,
    lng: 119.3957,
  },
  {
    name: "Baton Rouge",
    lat: 30.4418,
    lng: -91.131,
  },
  {
    name: "Pereira",
    lat: 4.8104,
    lng: -75.68,
  },
  {
    name: "Ciudad Bolivar",
    lat: 8.1167,
    lng: -63.55,
  },
  {
    name: "Durgapur",
    lat: 23.55,
    lng: 87.32,
  },
  {
    name: "Orenburg",
    lat: 51.7667,
    lng: 55.1,
  },
  {
    name: "Shenzhou",
    lat: 38.0005,
    lng: 115.5541,
  },
  {
    name: "Asansol",
    lat: 23.6833,
    lng: 86.9667,
  },
  {
    name: "Bacolod",
    lat: 10.6765,
    lng: 122.9509,
  },
  {
    name: "Akron",
    lat: 41.0798,
    lng: -81.5219,
  },
  {
    name: "New Haven",
    lat: 41.3112,
    lng: -72.9246,
  },
  {
    name: "Zhenzhou",
    lat: 32.2739,
    lng: 119.1619,
  },
  {
    name: "Surakarta",
    lat: -7.5667,
    lng: 110.8167,
  },
  {
    name: "Tlajomulco de Zuniga",
    lat: 20.4736,
    lng: -103.4431,
  },
  {
    name: "Jieshou",
    lat: 33.2605,
    lng: 115.3618,
  },
  {
    name: "Lanxi",
    lat: 29.2167,
    lng: 119.4722,
  },
  {
    name: "Zahedan",
    lat: 29.4833,
    lng: 60.8667,
  },
  {
    name: "Dangyang",
    lat: 30.8258,
    lng: 111.791,
  },
  {
    name: "Columbia",
    lat: 34.0376,
    lng: -80.9037,
  },
  {
    name: "Kemerovo",
    lat: 55.3333,
    lng: 86.0667,
  },
  {
    name: "Dresden",
    lat: 51.0493,
    lng: 13.7384,
  },
  {
    name: "Uyo",
    lat: 5.008,
    lng: 7.85,
  },
  {
    name: "Bhavnagar",
    lat: 21.765,
    lng: 72.1369,
  },
  {
    name: "Luanzhou",
    lat: 39.7396,
    lng: 118.6978,
  },
  {
    name: "Veracruz",
    lat: 19.1903,
    lng: -96.1533,
  },
  {
    name: "Novokuznetsk",
    lat: 53.75,
    lng: 87.1167,
  },
  {
    name: "Nellore",
    lat: 14.4333,
    lng: 79.9667,
  },
  {
    name: "Chiclayo",
    lat: -6.763,
    lng: -79.8366,
  },
  {
    name: "Al Hudaydah",
    lat: 14.8022,
    lng: 42.9511,
  },
  {
    name: "Eslamshahr",
    lat: 35.5333,
    lng: 51.2,
  },
  {
    name: "Cabinda",
    lat: -5.55,
    lng: 12.2,
  },
  {
    name: "Amravati",
    lat: 20.9333,
    lng: 77.75,
  },
  {
    name: "Korla",
    lat: 41.7646,
    lng: 86.1527,
  },
  {
    name: "Huanghua",
    lat: 38.371,
    lng: 117.3329,
  },
  {
    name: "Xingcheng",
    lat: 40.6189,
    lng: 120.7205,
  },
  {
    name: "Wancheng",
    lat: 18.8,
    lng: 110.4,
  },
  {
    name: "Kaiyuan",
    lat: 42.538,
    lng: 124.0371,
  },
  {
    name: "Leipzig",
    lat: 51.35,
    lng: 12.3833,
  },
  {
    name: "Fengcheng",
    lat: 40.4543,
    lng: 124.0646,
  },
  {
    name: "Ajmer",
    lat: 26.468,
    lng: 74.639,
  },
  {
    name: "Sihui",
    lat: 23.3448,
    lng: 112.6956,
  },
  {
    name: "Tinnevelly",
    lat: 8.7289,
    lng: 77.7081,
  },
  {
    name: "Fuding",
    lat: 27.2,
    lng: 120.2,
  },
  {
    name: "Maturin",
    lat: 9.7457,
    lng: -63.1832,
  },
  {
    name: "An Nasiriyah",
    lat: 31.0539,
    lng: 46.2503,
  },
  {
    name: "Al Hillah",
    lat: 32.4833,
    lng: 44.4333,
  },
  {
    name: "Ibague",
    lat: 4.4378,
    lng: -75.2006,
  },
  {
    name: "Hannover",
    lat: 52.3744,
    lng: 9.7386,
  },
  {
    name: "Poznan",
    lat: 52.4,
    lng: 16.9167,
  },
  {
    name: "Ryazan'",
    lat: 54.6167,
    lng: 39.7167,
  },
  {
    name: "Panshi",
    lat: 42.9392,
    lng: 126.0561,
  },
  {
    name: "Kassala",
    lat: 15.45,
    lng: 36.4,
  },
  {
    name: "Chang'an",
    lat: 29.4761,
    lng: 113.448,
  },
  {
    name: "Wencheng",
    lat: 19.6167,
    lng: 110.75,
  },
  {
    name: "Shashi",
    lat: 30.32,
    lng: 112.23,
  },
  {
    name: "Aksu",
    lat: 41.1664,
    lng: 80.25,
  },
  {
    name: "Salta",
    lat: -24.7883,
    lng: -65.4106,
  },
  {
    name: "Kimhae",
    lat: 35.2342,
    lng: 128.8811,
  },
  {
    name: "Astrakhan'",
    lat: 46.3333,
    lng: 48.0167,
  },
  {
    name: "Mingguang",
    lat: 32.7816,
    lng: 117.9899,
  },
  {
    name: "Naberezhnyye Chelny",
    lat: 55.7,
    lng: 52.3333,
  },
  {
    name: "Antwerp",
    lat: 51.2211,
    lng: 4.3997,
  },
  {
    name: "Bikaner",
    lat: 28.0181,
    lng: 73.3169,
  },
  {
    name: "Agartala",
    lat: 23.8333,
    lng: 91.2667,
  },
  {
    name: "Xalapa",
    lat: 19.54,
    lng: -96.9275,
  },
  {
    name: "Ndola",
    lat: -12.9683,
    lng: 28.6337,
  },
  {
    name: "Hamadan",
    lat: 34.8065,
    lng: 48.5162,
  },
  {
    name: "Villavicencio",
    lat: 4.1425,
    lng: -73.6294,
  },
  {
    name: "Ailan Mubage",
    lat: 43.9167,
    lng: 81.3167,
  },
  {
    name: "Ensenada",
    lat: 31.8578,
    lng: -116.6058,
  },
  {
    name: "Lyon",
    lat: 45.76,
    lng: 4.84,
  },
  {
    name: "Bac Ninh",
    lat: 21.1861,
    lng: 106.0763,
  },
  {
    name: "Ciudad Apodaca",
    lat: 25.7833,
    lng: -100.1833,
  },
  {
    name: "Santa Teresa del Tuy",
    lat: 10.2333,
    lng: -66.65,
  },
  {
    name: "Londrina",
    lat: -23.3,
    lng: -51.18,
  },
  {
    name: "Penza",
    lat: 53.2,
    lng: 45,
  },
  {
    name: "Heroica Matamoros",
    lat: 25.8797,
    lng: -97.5042,
  },
  {
    name: "Port Said",
    lat: 31.25,
    lng: 32.2833,
  },
  {
    name: "New Mirpur",
    lat: 33.1333,
    lng: 73.75,
  },
  {
    name: "Yucheng",
    lat: 36.9329,
    lng: 116.6403,
  },
  {
    name: "Bello",
    lat: 6.33,
    lng: -75.57,
  },
  {
    name: "Meknes",
    lat: 33.8833,
    lng: -5.55,
  },
  {
    name: "Nuremberg",
    lat: 49.4528,
    lng: 11.0778,
  },
  {
    name: "Pohang",
    lat: 36.0322,
    lng: 129.365,
  },
  {
    name: "Utsunomiya",
    lat: 36.55,
    lng: 139.8833,
  },
  {
    name: "Anda",
    lat: 46.4078,
    lng: 125.3252,
  },
  {
    name: "Jinghong",
    lat: 22.0057,
    lng: 100.7948,
  },
  {
    name: "Liaoyuan",
    lat: 42.8976,
    lng: 125.1381,
  },
  {
    name: "Mesa",
    lat: 33.4017,
    lng: -111.718,
  },
  {
    name: "Surrey",
    lat: 49.19,
    lng: -122.8489,
  },
  {
    name: "Cuautitlan Izcalli",
    lat: 19.65,
    lng: -99.25,
  },
  {
    name: "Ujjain",
    lat: 23.1828,
    lng: 75.7772,
  },
  {
    name: "Santa Marta",
    lat: 11.2361,
    lng: -74.2017,
  },
  {
    name: "Beining",
    lat: 41.5933,
    lng: 121.7932,
  },
  {
    name: "Hai Duong",
    lat: 20.9411,
    lng: 106.3331,
  },
  {
    name: "Carrefour",
    lat: 18.5333,
    lng: -72.4,
  },
  {
    name: "Homyel'",
    lat: 52.4417,
    lng: 30.9833,
  },
  {
    name: "Leicester",
    lat: 52.6333,
    lng: -1.1333,
  },
  {
    name: "Yanji",
    lat: 42.9044,
    lng: 129.5067,
  },
  {
    name: "Benguela",
    lat: -12.55,
    lng: 13.4167,
  },
  {
    name: "Yicheng",
    lat: 31.7117,
    lng: 112.2551,
  },
  {
    name: "Tabuk",
    lat: 28.3972,
    lng: 36.5789,
  },
  {
    name: "Lipetsk",
    lat: 52.6167,
    lng: 39.6,
  },
  {
    name: "Ulhasnagar",
    lat: 19.2167,
    lng: 73.15,
  },
  {
    name: "Matsuyama",
    lat: 33.8333,
    lng: 132.7667,
  },
  {
    name: "Muntinlupa City",
    lat: 14.3833,
    lng: 121.05,
  },
  {
    name: "Kashgar",
    lat: 39.45,
    lng: 75.9833,
  },
  {
    name: "Linghai",
    lat: 41.1676,
    lng: 121.3558,
  },
  {
    name: "Aden",
    lat: 12.8,
    lng: 45.0333,
  },
  {
    name: "Jhansi",
    lat: 25.4486,
    lng: 78.5696,
  },
  {
    name: "Kitwe",
    lat: -12.8208,
    lng: 28.2119,
  },
  {
    name: "Aba",
    lat: 5.1167,
    lng: 7.3667,
  },
  {
    name: "Palm Bay",
    lat: 27.955,
    lng: -80.6627,
  },
  {
    name: "Pingtung",
    lat: 22.6761,
    lng: 120.4942,
  },
  {
    name: "Samarkand",
    lat: 39.6542,
    lng: 66.9597,
  },
  {
    name: "Davangere",
    lat: 14.4667,
    lng: 75.9167,
  },
  {
    name: "Ichikawa",
    lat: 35.7219,
    lng: 139.9311,
  },
  {
    name: "Jammu",
    lat: 32.7333,
    lng: 74.85,
  },
  {
    name: "Mazatlan",
    lat: 23.22,
    lng: -106.42,
  },
  {
    name: "Higashi-osaka",
    lat: 34.6794,
    lng: 135.6008,
  },
  {
    name: "Ile-Ife",
    lat: 7.4667,
    lng: 4.5667,
  },
  {
    name: "Kirov",
    lat: 58.6,
    lng: 49.65,
  },
  {
    name: "Madinat as Sadis min Uktubar",
    lat: 29.9361,
    lng: 30.9269,
  },
  {
    name: "Qaraghandy",
    lat: 49.8,
    lng: 73.1167,
  },
  {
    name: "Mazatan",
    lat: 29.0167,
    lng: -110.1333,
  },
  {
    name: "Duisburg",
    lat: 51.4322,
    lng: 6.7611,
  },
  {
    name: "Mykolaiv",
    lat: 46.9667,
    lng: 32,
  },
  {
    name: "Matsudo",
    lat: 35.7878,
    lng: 139.9031,
  },
  {
    name: "Provo",
    lat: 40.2457,
    lng: -111.6457,
  },
  {
    name: "Meicheng",
    lat: 30.6412,
    lng: 116.5689,
  },
  {
    name: "Niteroi",
    lat: -22.8833,
    lng: -43.1036,
  },
  {
    name: "Rouen",
    lat: 49.4428,
    lng: 1.0886,
  },
  {
    name: "Oujda-Angad",
    lat: 34.6867,
    lng: -1.9114,
  },
  {
    name: "Johor Bahru",
    lat: 1.4556,
    lng: 103.7611,
  },
  {
    name: "Worcester",
    lat: 42.2705,
    lng: -71.8079,
  },
  {
    name: "Hongjiang",
    lat: 27.1167,
    lng: 109.95,
  },
  {
    name: "Chimbote",
    lat: -9.0745,
    lng: -78.5936,
  },
  {
    name: "Dengtacun",
    lat: 41.4237,
    lng: 123.3203,
  },
  {
    name: "Ixtapaluca",
    lat: 19.3186,
    lng: -98.8822,
  },
  {
    name: "Zhijiang",
    lat: 30.4271,
    lng: 111.7506,
  },
  {
    name: "Chengjiao",
    lat: 35.4043,
    lng: 114.0593,
  },
  {
    name: "Beipiao",
    lat: 41.802,
    lng: 120.7621,
  },
  {
    name: "Murrieta",
    lat: 33.572,
    lng: -117.1909,
  },
  {
    name: "Kota Bharu",
    lat: 6.1333,
    lng: 102.25,
  },
  {
    name: "Heshan",
    lat: 22.7697,
    lng: 112.9578,
  },
  {
    name: "Ciudad Lopez Mateos",
    lat: 19.55,
    lng: -99.2833,
  },
  {
    name: "Vinh",
    lat: 18.6733,
    lng: 105.6922,
  },
  {
    name: "Tultitlan de Mariano Escobedo",
    lat: 19.645,
    lng: -99.1694,
  },
  {
    name: "Duyun",
    lat: 26.2672,
    lng: 107.5143,
  },
  {
    name: "Encheng",
    lat: 22.1879,
    lng: 112.3131,
  },
  {
    name: "Nishinomiya-hama",
    lat: 34.7333,
    lng: 135.3333,
  },
  {
    name: "Kandahar",
    lat: 31.6078,
    lng: 65.7053,
  },
  {
    name: "Cheboksary",
    lat: 56.1333,
    lng: 47.25,
  },
  {
    name: "Yuanping",
    lat: 38.7299,
    lng: 112.7134,
  },
  {
    name: "Port Sudan",
    lat: 19.6158,
    lng: 37.2164,
  },
  {
    name: "Valledupar",
    lat: 10.4603,
    lng: -73.2597,
  },
  {
    name: "Edinburgh",
    lat: 55.953,
    lng: -3.189,
  },
  {
    name: "Belgaum",
    lat: 15.8667,
    lng: 74.5,
  },
  {
    name: "Tula",
    lat: 54.2,
    lng: 37.6167,
  },
  {
    name: "Taozhou",
    lat: 30.8956,
    lng: 119.411,
  },
  {
    name: "Suez",
    lat: 29.9667,
    lng: 32.5333,
  },
  {
    name: "Shahe",
    lat: 36.8622,
    lng: 114.502,
  },
  {
    name: "Yazd",
    lat: 31.8972,
    lng: 54.3678,
  },
  {
    name: "Nazret",
    lat: 8.55,
    lng: 39.27,
  },
  {
    name: "Gaoping",
    lat: 35.7911,
    lng: 112.9259,
  },
  {
    name: "Brookhaven",
    lat: 40.8321,
    lng: -72.9518,
  },
  {
    name: "Greenville",
    lat: 34.8353,
    lng: -82.3647,
  },
  {
    name: "Arak",
    lat: 34.08,
    lng: 49.7,
  },
  {
    name: "San Nicolas de los Garza",
    lat: 25.75,
    lng: -100.2833,
  },
  {
    name: "Gulbarga",
    lat: 17.3333,
    lng: 76.8333,
  },
  {
    name: "Juiz de Fora",
    lat: -21.7642,
    lng: -43.3503,
  },
  {
    name: "Dunhua",
    lat: 43.3667,
    lng: 128.2333,
  },
  {
    name: "Feira de Santana",
    lat: -12.25,
    lng: -38.97,
  },
  {
    name: "Jiaji",
    lat: 19.2431,
    lng: 110.4642,
  },
  {
    name: "Az Zarqa'",
    lat: 32.0833,
    lng: 36.1,
  },
  {
    name: "Americana",
    lat: -22.7392,
    lng: -47.3314,
  },
  {
    name: "Ardabil",
    lat: 38.25,
    lng: 48.3,
  },
  {
    name: "Sylhet",
    lat: 24.9,
    lng: 91.8667,
  },
  {
    name: "Wichita",
    lat: 37.6896,
    lng: -97.3442,
  },
  {
    name: "Toledo",
    lat: 41.6639,
    lng: -83.5822,
  },
  {
    name: "Kaihua",
    lat: 23.3715,
    lng: 104.2437,
  },
  {
    name: "Caerdydd",
    lat: 51.4833,
    lng: -3.1833,
  },
  {
    name: "Jamnagar",
    lat: 22.47,
    lng: 70.07,
  },
  {
    name: "Fuyuan",
    lat: 48.3614,
    lng: 134.2875,
  },
  {
    name: "Dhulia",
    lat: 20.9,
    lng: 74.7833,
  },
  {
    name: "Nampula",
    lat: -15.1167,
    lng: 39.2667,
  },
  {
    name: "Gaya",
    lat: 24.75,
    lng: 85.0167,
  },
  {
    name: "Piraeus",
    lat: 37.95,
    lng: 23.7,
  },
  {
    name: "Oita",
    lat: 33.2333,
    lng: 131.6067,
  },
  {
    name: "Florianopolis",
    lat: -27.5933,
    lng: -48.553,
  },
  {
    name: "Chiniot",
    lat: 31.7167,
    lng: 72.9833,
  },
  {
    name: "Jiannan",
    lat: 31.3446,
    lng: 104.1994,
  },
  {
    name: "Wuhai",
    lat: 39.6708,
    lng: 106.8114,
  },
  {
    name: "Kaliningrad",
    lat: 54.7167,
    lng: 20.5,
  },
  {
    name: "Sukkur",
    lat: 27.6995,
    lng: 68.8673,
  },
  {
    name: "Nangong",
    lat: 37.3606,
    lng: 115.3803,
  },
  {
    name: "Staten Island",
    lat: 40.5834,
    lng: -74.1496,
  },
  {
    name: "San Juan",
    lat: -31.5375,
    lng: -68.5364,
  },
  {
    name: "Vila Velha",
    lat: -20.3364,
    lng: -40.2936,
  },
  {
    name: "Macapa",
    lat: 0.033,
    lng: -51.0653,
  },
  {
    name: "Des Moines",
    lat: 41.5725,
    lng: -93.6105,
  },
  {
    name: "Piura",
    lat: -5.2008,
    lng: -80.6253,
  },
  {
    name: "Jiaojiangcun",
    lat: 28.6804,
    lng: 121.45,
  },
  {
    name: "Laohekou",
    lat: 32.3849,
    lng: 111.6695,
  },
  {
    name: "Fujin",
    lat: 47.2489,
    lng: 132.0341,
  },
  {
    name: "Beian",
    lat: 48.2395,
    lng: 126.5037,
  },
  {
    name: "Celaya",
    lat: 20.5222,
    lng: -100.8122,
  },
  {
    name: "Xiaoyi",
    lat: 37.1449,
    lng: 111.7718,
  },
  {
    name: "Strasbourg",
    lat: 48.5833,
    lng: 7.7458,
  },
  {
    name: "Lanus",
    lat: -34.7,
    lng: -58.4,
  },
  {
    name: "Qingzhen",
    lat: 26.5555,
    lng: 106.4646,
  },
  {
    name: "Jiangshan",
    lat: 28.7412,
    lng: 118.6225,
  },
  {
    name: "Ba`qubah",
    lat: 33.7447,
    lng: 44.6436,
  },
  {
    name: "Tamale",
    lat: 9.4075,
    lng: -0.8533,
  },
  {
    name: "Gdansk",
    lat: 54.3667,
    lng: 18.6333,
  },
  {
    name: "Kanazawa",
    lat: 36.5667,
    lng: 136.65,
  },
  {
    name: "Manado",
    lat: 1.4931,
    lng: 124.8413,
  },
  {
    name: "Jinchang",
    lat: 38.5168,
    lng: 102.1866,
  },
  {
    name: "Calabar",
    lat: 4.95,
    lng: 8.325,
  },
  {
    name: "Fukuyama",
    lat: 34.4858,
    lng: 133.3625,
  },
  {
    name: "Long Beach",
    lat: 33.7981,
    lng: -118.1675,
  },
  {
    name: "Malatya",
    lat: 38.3554,
    lng: 38.3337,
  },
  {
    name: "Hue",
    lat: 16.4667,
    lng: 107.5833,
  },
  {
    name: "Jalgaon",
    lat: 21.0167,
    lng: 75.5667,
  },
  {
    name: "Port St. Lucie",
    lat: 27.2796,
    lng: -80.3883,
  },
  {
    name: "Maua",
    lat: -23.6678,
    lng: -46.4608,
  },
  {
    name: "Monteria",
    lat: 8.76,
    lng: -75.8856,
  },
  {
    name: "Tel Aviv-Yafo",
    lat: 32.0833,
    lng: 34.8,
  },
  {
    name: "Xicheng",
    lat: 23.3629,
    lng: 103.1545,
  },
  {
    name: "Marikina City",
    lat: 14.65,
    lng: 121.1,
  },
  {
    name: "Pyeongtaek",
    lat: 36.9947,
    lng: 127.0889,
  },
  {
    name: "Kurnool",
    lat: 15.8222,
    lng: 78.035,
  },
  {
    name: "Sfax",
    lat: 34.75,
    lng: 10.72,
  },
  {
    name: "City of Calamba",
    lat: 14.2167,
    lng: 121.1667,
  },
  {
    name: "Denton",
    lat: 33.2176,
    lng: -97.1419,
  },
  {
    name: "Ar Ramadi",
    lat: 33.4167,
    lng: 43.3,
  },
  {
    name: "Melaka",
    lat: 2.1889,
    lng: 102.2511,
  },
  {
    name: "Volta Redonda",
    lat: -22.5196,
    lng: -44.095,
  },
  {
    name: "Jian'ou",
    lat: 27.0387,
    lng: 118.3215,
  },
  {
    name: "Shenmu",
    lat: 38.8389,
    lng: 110.4896,
  },
  {
    name: "Huadian",
    lat: 42.9688,
    lng: 126.7388,
  },
  {
    name: "Taoyuan District",
    lat: 24.9889,
    lng: 121.3111,
  },
  {
    name: "Iloilo",
    lat: 10.7167,
    lng: 122.5667,
  },
  {
    name: "Kota Kinabalu",
    lat: 5.975,
    lng: 116.0725,
  },
  {
    name: "Minzhu",
    lat: 43.7192,
    lng: 127.337,
  },
  {
    name: "Rajshahi",
    lat: 24.3667,
    lng: 88.6,
  },
  {
    name: "Tanta",
    lat: 30.7833,
    lng: 31,
  },
  {
    name: "Balashikha",
    lat: 55.8,
    lng: 37.95,
  },
  {
    name: "Udaipur",
    lat: 24.5833,
    lng: 73.6833,
  },
  {
    name: "Kursk",
    lat: 51.7372,
    lng: 36.1872,
  },
  {
    name: "Mariupol",
    lat: 47.1306,
    lng: 37.5639,
  },
  {
    name: "Bukavu",
    lat: -2.5,
    lng: 28.8667,
  },
  {
    name: "Hsinchu",
    lat: 24.8047,
    lng: 120.9714,
  },
  {
    name: "Barcelona",
    lat: 10.1333,
    lng: -64.6833,
  },
  {
    name: "Constantine",
    lat: 36.365,
    lng: 6.6147,
  },
  {
    name: "Tanbei",
    lat: 35.0907,
    lng: 112.9317,
  },
  {
    name: "Ado-Ekiti",
    lat: 7.6167,
    lng: 5.2167,
  },
  {
    name: "Batman",
    lat: 37.8833,
    lng: 41.1333,
  },
  {
    name: "Pasay City",
    lat: 14.55,
    lng: 121,
  },
  {
    name: "Madison",
    lat: 43.0826,
    lng: -89.3931,
  },
  {
    name: "Pingquan",
    lat: 41.0042,
    lng: 118.6848,
  },
  {
    name: "Baisha",
    lat: 29.4774,
    lng: 119.2853,
  },
  {
    name: "Bellary",
    lat: 15.15,
    lng: 76.915,
  },
  {
    name: "Santiago de Cuba",
    lat: 20.0283,
    lng: -75.8206,
  },
  {
    name: "Yongji",
    lat: 34.867,
    lng: 110.4417,
  },
  {
    name: "Reno",
    lat: 39.5497,
    lng: -119.8483,
  },
  {
    name: "Danjiangkou",
    lat: 32.5408,
    lng: 111.5098,
  },
  {
    name: "Kahramanmaras",
    lat: 37.5875,
    lng: 36.9453,
  },
  {
    name: "Sao Jose do Rio Preto",
    lat: -20.82,
    lng: -49.3789,
  },
  {
    name: "Andijon",
    lat: 40.7,
    lng: 72.35,
  },
  {
    name: "Harrisburg",
    lat: 40.2752,
    lng: -76.8843,
  },
  {
    name: "Nancy",
    lat: 48.6936,
    lng: 6.1846,
  },
  {
    name: "Al Mansurah",
    lat: 31.05,
    lng: 31.3833,
  },
  {
    name: "Machida",
    lat: 35.5486,
    lng: 139.4467,
  },
  {
    name: "Ning'an",
    lat: 44.3429,
    lng: 129.4621,
  },
  {
    name: "Beira",
    lat: -19.8333,
    lng: 34.85,
  },
  {
    name: "Little Rock",
    lat: 34.7256,
    lng: -92.3576,
  },
  {
    name: "Zurich",
    lat: 47.3786,
    lng: 8.54,
  },
  {
    name: "Zhangjiakou Shi Xuanhua Qu",
    lat: 40.5944,
    lng: 115.0243,
  },
  {
    name: "Sunch'on",
    lat: 39.4167,
    lng: 125.9333,
  },
  {
    name: "Diadema",
    lat: -23.6858,
    lng: -46.6228,
  },
  {
    name: "Guangming",
    lat: 45.3357,
    lng: 122.7765,
  },
  {
    name: "Sangli",
    lat: 16.8667,
    lng: 74.5667,
  },
  {
    name: "Tuticorin",
    lat: 8.7833,
    lng: 78.1333,
  },
  {
    name: "Herat",
    lat: 34.3738,
    lng: 62.1792,
  },
  {
    name: "Kupang",
    lat: -10.1633,
    lng: 123.5778,
  },
  {
    name: "Larkana",
    lat: 27.56,
    lng: 68.2264,
  },
  {
    name: "Jeju",
    lat: 33.5097,
    lng: 126.5219,
  },
  {
    name: "Bandar `Abbas",
    lat: 27.2,
    lng: 56.25,
  },
  {
    name: "Santos",
    lat: -23.9608,
    lng: -46.3339,
  },
  {
    name: "Stavropol'",
    lat: 45.05,
    lng: 41.9833,
  },
  {
    name: "Katsina",
    lat: 12.9908,
    lng: 7.6017,
  },
  {
    name: "Yogyakarta",
    lat: -7.8014,
    lng: 110.3644,
  },
  {
    name: "Calicut",
    lat: 11.25,
    lng: 75.7667,
  },
  {
    name: "Zanjan",
    lat: 36.6667,
    lng: 48.4833,
  },
  {
    name: "Welkom",
    lat: -27.9831,
    lng: 26.7208,
  },
  {
    name: "Ulan-Ude",
    lat: 51.8272,
    lng: 107.6064,
  },
  {
    name: "Oakland",
    lat: 37.7903,
    lng: -122.2165,
  },
  {
    name: "Kashiwa",
    lat: 35.8544,
    lng: 139.9689,
  },
  {
    name: "Mazar-e Sharif",
    lat: 36.7,
    lng: 67.1167,
  },
  {
    name: "Kashan",
    lat: 33.9833,
    lng: 51.4333,
  },
  {
    name: "Kenitra",
    lat: 34.25,
    lng: -6.5833,
  },
  {
    name: "Khamis Mushayt",
    lat: 18.3,
    lng: 42.7333,
  },
  {
    name: "Masan",
    lat: 35.1833,
    lng: 128.55,
  },
  {
    name: "Cusco",
    lat: -13.5183,
    lng: -71.9781,
  },
  {
    name: "Sevastopol",
    lat: 44.6,
    lng: 33.5333,
  },
  {
    name: "Mandaluyong City",
    lat: 14.5833,
    lng: 121.0333,
  },
  {
    name: "Kihung",
    lat: 37.4167,
    lng: 127.1167,
  },
  {
    name: "Toyota",
    lat: 35.0833,
    lng: 137.1567,
  },
  {
    name: "Akola",
    lat: 20.7333,
    lng: 77,
  },
  {
    name: "Yan'an Beilu",
    lat: 44.0222,
    lng: 87.2961,
  },
  {
    name: "Agadir",
    lat: 30.4167,
    lng: -9.5833,
  },
  {
    name: "Mogi das Cruzes",
    lat: -23.5228,
    lng: -46.1931,
  },
  {
    name: "Durham",
    lat: 35.9794,
    lng: -78.9031,
  },
  {
    name: "Likasi",
    lat: -10.9833,
    lng: 26.7333,
  },
  {
    name: "Laval",
    lat: 45.5833,
    lng: -73.75,
  },
  {
    name: "Winston-Salem",
    lat: 36.1029,
    lng: -80.2611,
  },
  {
    name: "Uijeongbu",
    lat: 37.7486,
    lng: 127.0389,
  },
  {
    name: "Tver'",
    lat: 56.8578,
    lng: 35.9219,
  },
  {
    name: "Elazig",
    lat: 38.6667,
    lng: 39.2167,
  },
  {
    name: "Akure",
    lat: 7.25,
    lng: 5.195,
  },
  {
    name: "Kumi",
    lat: 36.21,
    lng: 128.3544,
  },
  {
    name: "Hpa-An",
    lat: 16.8906,
    lng: 97.6333,
  },
  {
    name: "Bonita Springs",
    lat: 26.3559,
    lng: -81.7861,
  },
  {
    name: "Hailin",
    lat: 44.5735,
    lng: 129.3825,
  },
  {
    name: "Seremban",
    lat: 2.7297,
    lng: 101.9381,
  },
  {
    name: "Takamatsu",
    lat: 34.35,
    lng: 134.05,
  },
  {
    name: "Lecheng",
    lat: 25.1307,
    lng: 113.3472,
  },
  {
    name: "Zhengjiatun",
    lat: 43.513,
    lng: 123.5003,
  },
  {
    name: "Luhansk",
    lat: 48.5833,
    lng: 39.3333,
  },
  {
    name: "Pencheng",
    lat: 29.6792,
    lng: 115.6611,
  },
  {
    name: "Magnitogorsk",
    lat: 53.3833,
    lng: 59.0333,
  },
  {
    name: "Angeles City",
    lat: 15.1472,
    lng: 120.5847,
  },
  {
    name: "El Obeid",
    lat: 13.1833,
    lng: 30.2167,
  },
  {
    name: "Dalai",
    lat: 45.505,
    lng: 124.2863,
  },
  {
    name: "Xingren",
    lat: 25.4352,
    lng: 105.1907,
  },
  {
    name: "Palma",
    lat: 39.5667,
    lng: 2.6497,
  },
  {
    name: "Kolwezi",
    lat: -10.7167,
    lng: 25.4667,
  },
  {
    name: "Wenlan",
    lat: 23.3689,
    lng: 103.3881,
  },
  {
    name: "Indio",
    lat: 33.7346,
    lng: -116.2346,
  },
  {
    name: "Palm Coast",
    lat: 29.5392,
    lng: -81.246,
  },
  {
    name: "Arusha",
    lat: -3.3667,
    lng: 36.6833,
  },
  {
    name: "Fenyang",
    lat: 37.2652,
    lng: 111.7793,
  },
  {
    name: "Toyama",
    lat: 36.7,
    lng: 137.22,
  },
  {
    name: "Paju",
    lat: 37.8328,
    lng: 126.8169,
  },
  {
    name: "Mataram",
    lat: -8.5833,
    lng: 116.1167,
  },
  {
    name: "Chattanooga",
    lat: 35.0657,
    lng: -85.2488,
  },
  {
    name: "Lapu-Lapu City",
    lat: 10.315,
    lng: 123.9761,
  },
  {
    name: "Nagqu",
    lat: 31.4766,
    lng: 92.0569,
  },
  {
    name: "Kisumu",
    lat: -0.1,
    lng: 34.75,
  },
  {
    name: "Jayapura",
    lat: -2.5333,
    lng: 140.7167,
  },
  {
    name: "Fangting",
    lat: 31.1282,
    lng: 104.1695,
  },
  {
    name: "Nagasaki",
    lat: 32.7833,
    lng: 129.8667,
  },
  {
    name: "Spokane",
    lat: 47.6671,
    lng: -117.433,
  },
  {
    name: "Shekhupura",
    lat: 31.7083,
    lng: 74,
  },
  {
    name: "Sochi",
    lat: 43.5853,
    lng: 39.7203,
  },
  {
    name: "Bhagalpur",
    lat: 25.25,
    lng: 87.0167,
  },
  {
    name: "Ipatinga",
    lat: -19.4796,
    lng: -42.52,
  },
  {
    name: "Ivanovo",
    lat: 57,
    lng: 41,
  },
  {
    name: "Osogbo",
    lat: 7.7667,
    lng: 4.5667,
  },
  {
    name: "Imus",
    lat: 14.4297,
    lng: 120.9367,
  },
  {
    name: "Ciudad Obregon",
    lat: 27.4939,
    lng: -109.9389,
  },
  {
    name: "Turkmenabat",
    lat: 39.1,
    lng: 63.5667,
  },
  {
    name: "Namangan",
    lat: 40.9953,
    lng: 71.6725,
  },
  {
    name: "Bryansk",
    lat: 53.25,
    lng: 34.3667,
  },
  {
    name: "Basuo",
    lat: 19.1,
    lng: 108.65,
  },
  {
    name: "Taiping",
    lat: 32.0691,
    lng: 108.0351,
  },
  {
    name: "Maracay",
    lat: 10.2469,
    lng: -67.5958,
  },
  {
    name: "Murcia",
    lat: 37.9866,
    lng: -1.1415,
  },
  {
    name: "Jiexiu",
    lat: 37.0282,
    lng: 111.9103,
  },
  {
    name: "Mbale",
    lat: 1.0806,
    lng: 34.175,
  },
  {
    name: "Taraz",
    lat: 42.8833,
    lng: 71.3667,
  },
  {
    name: "Asyut",
    lat: 27.1869,
    lng: 31.1714,
  },
  {
    name: "Santa Fe",
    lat: -31.6333,
    lng: -60.7,
  },
  {
    name: "Campina Grande",
    lat: -7.2306,
    lng: -35.8811,
  },
  {
    name: "Szczecin",
    lat: 53.4247,
    lng: 14.5553,
  },
  {
    name: "Ghulja",
    lat: 43.9,
    lng: 81.35,
  },
  {
    name: "Syracuse",
    lat: 43.0409,
    lng: -76.1438,
  },
  {
    name: "Carapicuiba",
    lat: -23.5228,
    lng: -46.8358,
  },
  {
    name: "Gifu",
    lat: 35.4167,
    lng: 136.7667,
  },
  {
    name: "Quilon",
    lat: 8.8853,
    lng: 76.5864,
  },
  {
    name: "Jundiai",
    lat: -23.1864,
    lng: -46.8842,
  },
  {
    name: "Lancaster",
    lat: 40.0421,
    lng: -76.3012,
  },
  {
    name: "Eindhoven",
    lat: 51.43,
    lng: 5.5,
  },
  {
    name: "Sikar",
    lat: 27.6119,
    lng: 75.1397,
  },
  {
    name: "Tumkur",
    lat: 13.33,
    lng: 77.1,
  },
  {
    name: "Jiangjiafan",
    lat: 31.0304,
    lng: 112.1,
  },
  {
    name: "Miyazaki",
    lat: 31.9167,
    lng: 131.4167,
  },
  {
    name: "Arlington",
    lat: 32.6998,
    lng: -97.125,
  },
  {
    name: "Stockton",
    lat: 37.9765,
    lng: -121.3109,
  },
  {
    name: "Bhatpara",
    lat: 22.8667,
    lng: 88.4167,
  },
  {
    name: "Sandakan",
    lat: 5.8388,
    lng: 118.1173,
  },
  {
    name: "Hejin",
    lat: 35.5914,
    lng: 110.706,
  },
  {
    name: "Thanh Hoa",
    lat: 19.8075,
    lng: 105.7764,
  },
  {
    name: "Muzaffarnagar",
    lat: 29.4708,
    lng: 77.7033,
  },
  {
    name: "Poughkeepsie",
    lat: 41.6949,
    lng: -73.921,
  },
  {
    name: "Comilla",
    lat: 23.4704,
    lng: 91.17,
  },
  {
    name: "Metz",
    lat: 49.1203,
    lng: 6.1778,
  },
  {
    name: "Campos",
    lat: -21.7523,
    lng: -41.3304,
  },
  {
    name: "Nha Trang",
    lat: 12.25,
    lng: 109.1833,
  },
  {
    name: "Belgorod",
    lat: 50.6,
    lng: 36.6,
  },
  {
    name: "Yola",
    lat: 9.2,
    lng: 12.4833,
  },
  {
    name: "Minamisuita",
    lat: 34.7667,
    lng: 135.5167,
  },
  {
    name: "San Lorenzo",
    lat: -25.3431,
    lng: -57.5094,
  },
  {
    name: "Ad Diwaniyah",
    lat: 31.9892,
    lng: 44.9247,
  },
  {
    name: "Hancheng",
    lat: 35.4603,
    lng: 110.4292,
  },
  {
    name: "Fuyu",
    lat: 45.1804,
    lng: 124.82,
  },
  {
    name: "Bologna",
    lat: 44.4939,
    lng: 11.3428,
  },
  {
    name: "Karamay",
    lat: 45.5928,
    lng: 84.8711,
  },
  {
    name: "Kakinada",
    lat: 16.9333,
    lng: 82.2167,
  },
  {
    name: "Augusta",
    lat: 33.3645,
    lng: -82.0708,
  },
  {
    name: "Bhilwara",
    lat: 25.35,
    lng: 74.6333,
  },
  {
    name: "Caxias do Sul",
    lat: -29.18,
    lng: -51.17,
  },
  {
    name: "Tieli",
    lat: 46.9804,
    lng: 128.045,
  },
  {
    name: "Cilegon",
    lat: -6.0027,
    lng: 106.0112,
  },
  {
    name: "Baicheng",
    lat: 45.6148,
    lng: 122.832,
  },
  {
    name: "Nizamabad",
    lat: 18.6704,
    lng: 78.1,
  },
  {
    name: "Boise",
    lat: 43.6007,
    lng: -116.2312,
  },
  {
    name: "Tonala",
    lat: 20.6167,
    lng: -103.2333,
  },
  {
    name: "Okazaki",
    lat: 34.95,
    lng: 137.1667,
  },
  {
    name: "Mwanza",
    lat: -2.5167,
    lng: 32.9,
  },
  {
    name: "Aqtobe",
    lat: 50.3,
    lng: 57.1667,
  },
  {
    name: "Plovdiv",
    lat: 42.1433,
    lng: 24.7489,
  },
  {
    name: "Oxnard",
    lat: 34.1963,
    lng: -119.1815,
  },
  {
    name: "Tetouan",
    lat: 35.5667,
    lng: -5.3667,
  },
  {
    name: "Florence",
    lat: 43.7714,
    lng: 11.2542,
  },
  {
    name: "Ha'il",
    lat: 27.5236,
    lng: 41.7001,
  },
  {
    name: "Yidu",
    lat: 30.388,
    lng: 111.4505,
  },
  {
    name: "Lianzhou",
    lat: 24.7868,
    lng: 112.3735,
  },
  {
    name: "Scranton",
    lat: 41.4044,
    lng: -75.6649,
  },
  {
    name: "London",
    lat: 42.9836,
    lng: -81.2497,
  },
  {
    name: "Las Palmas",
    lat: 28.1272,
    lng: -15.4314,
  },
  {
    name: "Rio Branco",
    lat: -9.9781,
    lng: -67.8117,
  },
  {
    name: "Modesto",
    lat: 37.6374,
    lng: -121.0028,
  },
  {
    name: "Ichinomiya",
    lat: 35.3039,
    lng: 136.8031,
  },
  {
    name: "Brno",
    lat: 49.1953,
    lng: 16.6083,
  },
  {
    name: "Kissimmee",
    lat: 28.3042,
    lng: -81.4164,
  },
  {
    name: "Pasto",
    lat: 1.2136,
    lng: -77.2811,
  },
  {
    name: "Qazvin",
    lat: 36.2688,
    lng: 50.0041,
  },
  {
    name: "Irapuato",
    lat: 20.6667,
    lng: -101.35,
  },
  {
    name: "Novi Sad",
    lat: 45.2644,
    lng: 19.8317,
  },
  {
    name: "Antofagasta",
    lat: -23.6464,
    lng: -70.398,
  },
  {
    name: "Shihezi",
    lat: 44.3,
    lng: 86.0333,
  },
  {
    name: "Shache",
    lat: 38.4261,
    lng: 77.25,
  },
  {
    name: "Panihati",
    lat: 22.69,
    lng: 88.37,
  },
  {
    name: "Huancayo",
    lat: -12.0667,
    lng: -75.2167,
  },
  {
    name: "Aurora",
    lat: 39.7087,
    lng: -104.7273,
  },
  {
    name: "Malabon",
    lat: 14.6625,
    lng: 120.9567,
  },
  {
    name: "Parbhani",
    lat: 19.2704,
    lng: 76.76,
  },
  {
    name: "Usulutan",
    lat: 13.35,
    lng: -88.45,
  },
  {
    name: "Youngstown",
    lat: 41.0993,
    lng: -80.6463,
  },
  {
    name: "Christchurch",
    lat: -43.5309,
    lng: 172.6365,
  },
  {
    name: "Hatay",
    lat: 36.2,
    lng: 36.15,
  },
  {
    name: "Iquitos",
    lat: -3.7333,
    lng: -73.25,
  },
  {
    name: "Sivas",
    lat: 39.75,
    lng: 37.0167,
  },
  {
    name: "Helixi",
    lat: 30.6267,
    lng: 118.9861,
  },
  {
    name: "A Coruna",
    lat: 43.3713,
    lng: -8.4188,
  },
  {
    name: "Manizales",
    lat: 5.06,
    lng: -75.52,
  },
  {
    name: "Manukau City",
    lat: -36.9833,
    lng: 174.8833,
  },
  {
    name: "Stoke-on-Trent",
    lat: 53,
    lng: -2.1833,
  },
  {
    name: "Cumana",
    lat: 10.45,
    lng: -64.1667,
  },
  {
    name: "Vinnytsia",
    lat: 49.2372,
    lng: 28.4672,
  },
  {
    name: "Rohtak",
    lat: 28.9,
    lng: 76.5667,
  },
  {
    name: "Latur",
    lat: 18.4004,
    lng: 76.57,
  },
  {
    name: "Toyohashi",
    lat: 34.7667,
    lng: 137.3833,
  },
  {
    name: "Sanandaj",
    lat: 35.3097,
    lng: 46.9989,
  },
  {
    name: "Nuevo Laredo",
    lat: 27.4861,
    lng: -99.5069,
  },
  {
    name: "Anguo",
    lat: 38.4177,
    lng: 115.3204,
  },
  {
    name: "Ambon",
    lat: -3.705,
    lng: 128.17,
  },
  {
    name: "Mandaue City",
    lat: 10.3333,
    lng: 123.9333,
  },
  {
    name: "Keelung",
    lat: 25.1283,
    lng: 121.7419,
  },
  {
    name: "Varna",
    lat: 43.2078,
    lng: 27.9169,
  },
  {
    name: "Lengshuijiang",
    lat: 27.6858,
    lng: 111.4279,
  },
  {
    name: "Rajapalaiyam",
    lat: 9.4204,
    lng: 77.58,
  },
  {
    name: "Nagano",
    lat: 36.6486,
    lng: 138.1928,
  },
  {
    name: "Az Zubayr",
    lat: 30.3892,
    lng: 47.7081,
  },
  {
    name: "Al Qatif",
    lat: 26.5196,
    lng: 50.0115,
  },
  {
    name: "Cuernavaca",
    lat: 18.9186,
    lng: -99.2342,
  },
  {
    name: "Sanya",
    lat: 18.2536,
    lng: 109.5019,
  },
  {
    name: "Nicolas Romero",
    lat: 19.5833,
    lng: -99.3667,
  },
  {
    name: "Huichang",
    lat: 34.9136,
    lng: 112.7852,
  },
  {
    name: "Vitsyebsk",
    lat: 55.1833,
    lng: 30.1667,
  },
  {
    name: "Bauru",
    lat: -22.3147,
    lng: -49.0606,
  },
  {
    name: "Bochum",
    lat: 51.4833,
    lng: 7.2167,
  },
  {
    name: "Anapolis",
    lat: -16.3269,
    lng: -48.9528,
  },
  {
    name: "Coventry",
    lat: 52.4081,
    lng: -1.5106,
  },
  {
    name: "Zalantun",
    lat: 48.0033,
    lng: 122.7365,
  },
  {
    name: "Tecamac",
    lat: 19.7131,
    lng: -98.9683,
  },
  {
    name: "Jhang City",
    lat: 31.2681,
    lng: 72.3181,
  },
  {
    name: "Ciudad General Escobedo",
    lat: 25.7933,
    lng: -100.1583,
  },
  {
    name: "Wonsan",
    lat: 39.1475,
    lng: 127.4461,
  },
  {
    name: "Kocaeli",
    lat: 40.7656,
    lng: 29.9406,
  },
  {
    name: "Bengkulu",
    lat: -3.7956,
    lng: 102.2592,
  },
  {
    name: "Montes Claros",
    lat: -16.7322,
    lng: -43.8636,
  },
  {
    name: "Petion-Ville",
    lat: 18.5098,
    lng: -72.2856,
  },
  {
    name: "Shuanghejiedao",
    lat: 30.3866,
    lng: 106.7756,
  },
  {
    name: "Bydgoszcz",
    lat: 53.1167,
    lng: 18,
  },
  {
    name: "Surgut",
    lat: 61.25,
    lng: 73.4333,
  },
  {
    name: "Donostia",
    lat: 43.3204,
    lng: -1.98,
  },
  {
    name: "Bobo-Dioulasso",
    lat: 11.1833,
    lng: -4.2833,
  },
  {
    name: "Umuahia",
    lat: 5.5333,
    lng: 7.4833,
  },
  {
    name: "Gedaref",
    lat: 14.0333,
    lng: 35.3833,
  },
  {
    name: "Palu",
    lat: -0.895,
    lng: 119.8594,
  },
  {
    name: "Santa Rosa",
    lat: 14.3167,
    lng: 121.1167,
  },
  {
    name: "Pokhara",
    lat: 28.2097,
    lng: 83.9853,
  },
  {
    name: "Mahilyow",
    lat: 53.9089,
    lng: 30.343,
  },
  {
    name: "Wudalianchi",
    lat: 48.6433,
    lng: 126.1408,
  },
  {
    name: "Sungai Petani",
    lat: 5.65,
    lng: 100.48,
  },
  {
    name: "Nam Dinh",
    lat: 20.42,
    lng: 106.1683,
  },
  {
    name: "Sinuiju",
    lat: 40.1,
    lng: 124.4,
  },
  {
    name: "Hrodna",
    lat: 53.6667,
    lng: 23.8167,
  },
  {
    name: "Vladimir",
    lat: 56.1333,
    lng: 40.4167,
  },
  {
    name: "Sao Vicente",
    lat: -23.9633,
    lng: -46.3922,
  },
  {
    name: "Wakayama",
    lat: 34.2333,
    lng: 135.1667,
  },
  {
    name: "Yong'an",
    lat: 25.9733,
    lng: 117.3593,
  },
  {
    name: "Itaquaquecetuba",
    lat: -23.4864,
    lng: -46.3486,
  },
  {
    name: "Wuppertal",
    lat: 51.2667,
    lng: 7.1833,
  },
  {
    name: "Minatitlan",
    lat: 17.9833,
    lng: -94.55,
  },
  {
    name: "Nizhniy Tagil",
    lat: 57.9167,
    lng: 59.9667,
  },
  {
    name: "Nara",
    lat: 34.6833,
    lng: 135.7833,
  },
  {
    name: "Hongzhai",
    lat: 35.0476,
    lng: 104.6394,
  },
  {
    name: "Bilbao",
    lat: 43.2622,
    lng: -2.9533,
  },
  {
    name: "Haarlem",
    lat: 52.3804,
    lng: 4.63,
  },
  {
    name: "Pavlodar",
    lat: 52.3156,
    lng: 76.9564,
  },
  {
    name: "Gimpo",
    lat: 37.6236,
    lng: 126.7142,
  },
  {
    name: "Rahimyar Khan",
    lat: 28.4202,
    lng: 70.2952,
  },
  {
    name: "Van",
    lat: 38.5019,
    lng: 43.4167,
  },
  {
    name: "Corrientes",
    lat: -27.4833,
    lng: -58.8167,
  },
  {
    name: "San Pedro",
    lat: 14.3583,
    lng: 121.0583,
  },
  {
    name: "Arkhangel'sk",
    lat: 64.55,
    lng: 40.5333,
  },
  {
    name: "Licheng",
    lat: 24.4935,
    lng: 110.3902,
  },
  {
    name: "Cabimas",
    lat: 10.4,
    lng: -71.4333,
  },
  {
    name: "Yakeshi",
    lat: 49.2842,
    lng: 120.7283,
  },
  {
    name: "Baguio City",
    lat: 16.4152,
    lng: 120.5956,
  },
  {
    name: "Ahmadnagar",
    lat: 19.0833,
    lng: 74.7333,
  },
  {
    name: "Fayetteville",
    lat: 36.0713,
    lng: -94.166,
  },
  {
    name: "Koshigaya",
    lat: 35.8911,
    lng: 139.7908,
  },
  {
    name: "Holguin",
    lat: 20.8883,
    lng: -76.2558,
  },
  {
    name: "Qo`qon",
    lat: 40.5404,
    lng: 70.94,
  },
  {
    name: "Anaheim",
    lat: 33.839,
    lng: -117.8572,
  },
  {
    name: "Yingmen",
    lat: 39.83,
    lng: 97.73,
  },
  {
    name: "Piracicaba",
    lat: -22.725,
    lng: -47.6489,
  },
  {
    name: "Khorramabad",
    lat: 33.4667,
    lng: 48.35,
  },
  {
    name: "Rajahmundry",
    lat: 16.9833,
    lng: 81.7833,
  },
  {
    name: "Chita",
    lat: 52.0333,
    lng: 113.5,
  },
  {
    name: "Sari",
    lat: 36.5658,
    lng: 53.0597,
  },
  {
    name: "Makiivka",
    lat: 48.0556,
    lng: 37.9611,
  },
  {
    name: "Chitungwiza",
    lat: -18,
    lng: 31.1,
  },
  {
    name: "Pensacola",
    lat: 30.4427,
    lng: -87.1886,
  },
  {
    name: "Victorville",
    lat: 34.5277,
    lng: -117.3536,
  },
  {
    name: "Tokorozawa",
    lat: 35.7994,
    lng: 139.4689,
  },
  {
    name: "Tanch'on",
    lat: 40.458,
    lng: 128.911,
  },
  {
    name: "Sumqayit",
    lat: 40.5917,
    lng: 49.6397,
  },
  {
    name: "Kusti",
    lat: 13.17,
    lng: 32.66,
  },
  {
    name: "Al `Amarah",
    lat: 31.8416,
    lng: 47.1512,
  },
  {
    name: "Cuddapah",
    lat: 14.4667,
    lng: 78.8167,
  },
  {
    name: "Simferopol",
    lat: 44.9484,
    lng: 34.1,
  },
  {
    name: "Tarlac City",
    lat: 15.4802,
    lng: 120.5979,
  },
  {
    name: "Lancaster",
    lat: 34.6935,
    lng: -118.1753,
  },
  {
    name: "Greensboro",
    lat: 36.0956,
    lng: -79.8269,
  },
  {
    name: "Iligan",
    lat: 8.2333,
    lng: 124.25,
  },
  {
    name: "East London",
    lat: -33.0153,
    lng: 27.9116,
  },
  {
    name: "Otsu",
    lat: 35.0167,
    lng: 135.85,
  },
  {
    name: "Franca",
    lat: -20.5389,
    lng: -47.4008,
  },
  {
    name: "Kaluga",
    lat: 54.5333,
    lng: 36.2667,
  },
  {
    name: "Yeosu",
    lat: 34.7368,
    lng: 127.7458,
  },
  {
    name: "Corpus Christi",
    lat: 27.726,
    lng: -97.3755,
  },
  {
    name: "Muzaffarpur",
    lat: 26.12,
    lng: 85.3833,
  },
  {
    name: "Lublin",
    lat: 51.2333,
    lng: 22.5667,
  },
  {
    name: "Brest",
    lat: 52.0847,
    lng: 23.6569,
  },
  {
    name: "Lianran",
    lat: 24.9211,
    lng: 102.4778,
  },
  {
    name: "Alwar",
    lat: 27.5667,
    lng: 76.6167,
  },
  {
    name: "Baishan",
    lat: 41.9377,
    lng: 126.4179,
  },
  {
    name: "Kawagoe",
    lat: 35.9177,
    lng: 139.4911,
  },
  {
    name: "Farg`ona",
    lat: 40.3864,
    lng: 71.7864,
  },
  {
    name: "Tamuramachi-moriyama",
    lat: 37.41,
    lng: 140.38,
  },
  {
    name: "Brahmapur",
    lat: 19.32,
    lng: 84.8,
  },
  {
    name: "Buon Ma Thuot",
    lat: 12.6667,
    lng: 108.05,
  },
  {
    name: "Binan",
    lat: 14.3333,
    lng: 121.0833,
  },
  {
    name: "Iwaki",
    lat: 37.0333,
    lng: 140.8833,
  },
  {
    name: "Semey",
    lat: 50.4111,
    lng: 80.2275,
  },
  {
    name: "Tarsus",
    lat: 36.9167,
    lng: 34.9,
  },
  {
    name: "Randburg",
    lat: -26.0936,
    lng: 28.0064,
  },
  {
    name: "Tepic",
    lat: 21.5083,
    lng: -104.8931,
  },
  {
    name: "Jitpur",
    lat: 27.6666,
    lng: 85.3333,
  },
  {
    name: "Kaesong",
    lat: 37.964,
    lng: 126.5644,
  },
  {
    name: "Beni",
    lat: 0.5,
    lng: 29.4667,
  },
  {
    name: "Chinju",
    lat: 35.1928,
    lng: 128.0847,
  },
  {
    name: "Tangdong",
    lat: 25.9755,
    lng: 113.2302,
  },
  {
    name: "Butuan",
    lat: 8.9534,
    lng: 125.5288,
  },
  {
    name: "Reading",
    lat: 51.4542,
    lng: -0.9731,
  },
  {
    name: "Belfast",
    lat: 54.5964,
    lng: -5.93,
  },
  {
    name: "Alicante",
    lat: 38.3453,
    lng: -0.4831,
  },
  {
    name: "Blida",
    lat: 36.4722,
    lng: 2.8333,
  },
  {
    name: "Hangu",
    lat: 39.232,
    lng: 117.777,
  },
  {
    name: "Yingzhong",
    lat: 32.2381,
    lng: 119.8133,
  },
  {
    name: "Vina del Mar",
    lat: -33.0244,
    lng: -71.5517,
  },
  {
    name: "Asahikawa",
    lat: 43.7706,
    lng: 142.365,
  },
  {
    name: "Bielefeld",
    lat: 52.0167,
    lng: 8.5333,
  },
  {
    name: "Cuenca",
    lat: -2.8974,
    lng: -79.0045,
  },
  {
    name: "Fort Wayne",
    lat: 41.0886,
    lng: -85.1437,
  },
  {
    name: "Maebashi",
    lat: 36.3833,
    lng: 139.0667,
  },
  {
    name: "Lipa City",
    lat: 13.9411,
    lng: 121.1622,
  },
  {
    name: "Wad Medani",
    lat: 14.4,
    lng: 33.51,
  },
  {
    name: "Islip",
    lat: 40.7384,
    lng: -73.1887,
  },
  {
    name: "Sousse",
    lat: 35.83,
    lng: 10.625,
  },
  {
    name: "Kamarhati",
    lat: 22.67,
    lng: 88.37,
  },
  {
    name: "Thessaloniki",
    lat: 40.6333,
    lng: 22.95,
  },
  {
    name: "Ganca",
    lat: 40.6828,
    lng: 46.3606,
  },
  {
    name: "Bilaspur",
    lat: 22.15,
    lng: 82.0167,
  },
  {
    name: "Santa Ana",
    lat: 33.7366,
    lng: -117.8819,
  },
  {
    name: "Mymensingh",
    lat: 24.7504,
    lng: 90.38,
  },
  {
    name: "Al Fayyum",
    lat: 29.3,
    lng: 30.8333,
  },
  {
    name: "Flint",
    lat: 43.0235,
    lng: -83.6922,
  },
  {
    name: "Kendari",
    lat: -3.9675,
    lng: 122.5947,
  },
  {
    name: "Balikesir",
    lat: 39.6511,
    lng: 27.8842,
  },
  {
    name: "Az Zaqaziq",
    lat: 30.5667,
    lng: 31.5,
  },
  {
    name: "Thai Nguyen",
    lat: 21.6,
    lng: 105.85,
  },
  {
    name: "Smolensk",
    lat: 54.7828,
    lng: 32.0453,
  },
  {
    name: "Wonju",
    lat: 37.3417,
    lng: 127.9208,
  },
  {
    name: "Maringa",
    lat: -23.4095,
    lng: -51.93,
  },
  {
    name: "San Juan",
    lat: 18.4037,
    lng: -66.0636,
  },
  {
    name: "Dahuk",
    lat: 36.85,
    lng: 42.9833,
  },
  {
    name: "Batangas",
    lat: 13.75,
    lng: 121.05,
  },
  {
    name: "Mathura",
    lat: 27.4833,
    lng: 77.6833,
  },
  {
    name: "Pelotas",
    lat: -31.75,
    lng: -52.33,
  },
  {
    name: "Bamiantong",
    lat: 44.9164,
    lng: 130.5212,
  },
  {
    name: "Kochi",
    lat: 33.5667,
    lng: 133.5333,
  },
  {
    name: "Patiala",
    lat: 30.3204,
    lng: 76.385,
  },
  {
    name: "Gujrat",
    lat: 32.5736,
    lng: 74.0789,
  },
  {
    name: "Bonn",
    lat: 50.7339,
    lng: 7.0997,
  },
  {
    name: "Vung Tau",
    lat: 10.4042,
    lng: 107.1417,
  },
  {
    name: "Markham",
    lat: 43.8767,
    lng: -79.2633,
  },
  {
    name: "Saugor",
    lat: 23.8504,
    lng: 78.75,
  },
  {
    name: "Roodepoort",
    lat: -26.1625,
    lng: 27.8725,
  },
  {
    name: "Gomez Palacio",
    lat: 25.5611,
    lng: -103.4983,
  },
  {
    name: "Volzhskiy",
    lat: 48.7833,
    lng: 44.7667,
  },
  {
    name: "Bari",
    lat: 41.1253,
    lng: 16.8667,
  },
  {
    name: "Bijapur",
    lat: 16.8244,
    lng: 75.7154,
  },
  {
    name: "Sukabumi",
    lat: -6.9197,
    lng: 106.9272,
  },
  {
    name: "Ulanhot",
    lat: 46.0726,
    lng: 122.0719,
  },
  {
    name: "Fayetteville",
    lat: 35.0846,
    lng: -78.9776,
  },
  {
    name: "Itajai",
    lat: -26.8996,
    lng: -48.68,
  },
  {
    name: "Nakuru",
    lat: -0.2833,
    lng: 36.0667,
  },
  {
    name: "Yunzhong",
    lat: 39.8143,
    lng: 113.0946,
  },
  {
    name: "Al Fallujah",
    lat: 33.35,
    lng: 43.7833,
  },
  {
    name: "Boa Vista",
    lat: 2.82,
    lng: -60.6719,
  },
  {
    name: "Cluj-Napoca",
    lat: 46.78,
    lng: 23.5594,
  },
  {
    name: "Malmo",
    lat: 55.5932,
    lng: 13.0214,
  },
  {
    name: "Gwangmyeongni",
    lat: 37.4772,
    lng: 126.8664,
  },
  {
    name: "Pucallpa",
    lat: -8.3833,
    lng: -74.55,
  },
  {
    name: "Cordoba",
    lat: 37.8833,
    lng: -4.7667,
  },
  {
    name: "Kuching",
    lat: 1.5397,
    lng: 110.3542,
  },
  {
    name: "Zinder",
    lat: 13.8,
    lng: 8.9833,
  },
  {
    name: "Naha",
    lat: 26.2122,
    lng: 127.6789,
  },
  {
    name: "Gonder",
    lat: 12.6,
    lng: 37.4667,
  },
  {
    name: "Uberaba",
    lat: -19.7478,
    lng: -47.9319,
  },
  {
    name: "Jackson",
    lat: 32.3163,
    lng: -90.2124,
  },
  {
    name: "Mekele",
    lat: 13.4833,
    lng: 39.4667,
  },
  {
    name: "Kulti",
    lat: 23.73,
    lng: 86.85,
  },
  {
    name: "Santa Rosa",
    lat: 38.4458,
    lng: -122.7067,
  },
  {
    name: "Gonaives",
    lat: 19.45,
    lng: -72.6833,
  },
  {
    name: "Lansing",
    lat: 42.7142,
    lng: -84.5601,
  },
  {
    name: "Binxian",
    lat: 35.0364,
    lng: 108.0764,
  },
  {
    name: "Newcastle",
    lat: -32.9167,
    lng: 151.75,
  },
  {
    name: "Kurgan",
    lat: 55.4408,
    lng: 65.3411,
  },
  {
    name: "Kaiyuan",
    lat: 23.7147,
    lng: 103.2585,
  },
  {
    name: "Temara",
    lat: 33.9234,
    lng: -6.9076,
  },
  {
    name: "Uruapan",
    lat: 19.4208,
    lng: -102.0628,
  },
  {
    name: "Hotan",
    lat: 37.1012,
    lng: 79.9327,
  },
  {
    name: "Camaguey",
    lat: 21.3786,
    lng: -77.9186,
  },
  {
    name: "Ann Arbor",
    lat: 42.2755,
    lng: -83.7312,
  },
  {
    name: "San Salvador de Jujuy",
    lat: -24.1856,
    lng: -65.2994,
  },
  {
    name: "Timisoara",
    lat: 45.7597,
    lng: 21.23,
  },
  {
    name: "Al Kut",
    lat: 32.4907,
    lng: 45.8304,
  },
  {
    name: "Tapachula",
    lat: 14.9,
    lng: -92.2667,
  },
  {
    name: "Shahjanpur",
    lat: 27.8804,
    lng: 79.905,
  },
  {
    name: "Cherepovets",
    lat: 59.1333,
    lng: 37.9167,
  },
  {
    name: "Poltava",
    lat: 49.5744,
    lng: 34.5686,
  },
  {
    name: "Henderson",
    lat: 36.0133,
    lng: -115.038,
  },
  {
    name: "Maroua",
    lat: 10.5823,
    lng: 14.3275,
  },
  {
    name: "Kaech'on",
    lat: 39.6986,
    lng: 125.9061,
  },
  {
    name: "Asan",
    lat: 36.35,
    lng: 126.9167,
  },
  {
    name: "Coatzacoalcos",
    lat: 18.15,
    lng: -94.4333,
  },
  {
    name: "Huntsville",
    lat: 34.6988,
    lng: -86.6412,
  },
  {
    name: "Trichur",
    lat: 10.52,
    lng: 76.21,
  },
  {
    name: "General Trias",
    lat: 14.3833,
    lng: 120.8833,
  },
  {
    name: "Cirebon",
    lat: -6.7167,
    lng: 108.5667,
  },
  {
    name: "Tampico",
    lat: 22.2553,
    lng: -97.8686,
  },
  {
    name: "Lexington",
    lat: 38.0423,
    lng: -84.4587,
  },
  {
    name: "Boaco",
    lat: 12.4722,
    lng: -85.6586,
  },
  {
    name: "Oskemen",
    lat: 49.95,
    lng: 82.6167,
  },
  {
    name: "Ca Mau",
    lat: 9.1833,
    lng: 105.15,
  },
  {
    name: "Neiva",
    lat: 2.9275,
    lng: -75.2875,
  },
  {
    name: "Cabuyao",
    lat: 14.275,
    lng: 121.125,
  },
  {
    name: "Vologda",
    lat: 59.2167,
    lng: 39.9,
  },
  {
    name: "Saransk",
    lat: 54.1833,
    lng: 45.1833,
  },
  {
    name: "Mobile",
    lat: 30.6783,
    lng: -88.1162,
  },
  {
    name: "Bor",
    lat: 6.2167,
    lng: 31.55,
  },
  {
    name: "Munster",
    lat: 51.9625,
    lng: 7.6256,
  },
  {
    name: "Barddhaman",
    lat: 23.25,
    lng: 87.85,
  },
  {
    name: "Ksar El Kebir",
    lat: 35.0204,
    lng: -5.91,
  },
  {
    name: "Karlsruhe",
    lat: 49.0167,
    lng: 8.4,
  },
  {
    name: "Kasur",
    lat: 31.1167,
    lng: 74.45,
  },
  {
    name: "Yakou",
    lat: 33.2937,
    lng: 113.5203,
  },
  {
    name: "Orel",
    lat: 52.9667,
    lng: 36.0833,
  },
  {
    name: "Safi",
    lat: 32.2833,
    lng: -9.2333,
  },
  {
    name: "Shahr-e Qods",
    lat: 35.7214,
    lng: 51.1089,
  },
  {
    name: "Vitoria da Conquista",
    lat: -14.8661,
    lng: -40.8394,
  },
  {
    name: "Hamah",
    lat: 35.1333,
    lng: 36.75,
  },
  {
    name: "Guaruja",
    lat: -23.9936,
    lng: -46.2564,
  },
  {
    name: "Catania",
    lat: 37.5027,
    lng: 15.0873,
  },
  {
    name: "Purnea",
    lat: 25.78,
    lng: 87.47,
  },
  {
    name: "Fort Collins",
    lat: 40.5478,
    lng: -105.0656,
  },
  {
    name: "Port Elizabeth",
    lat: -33.9581,
    lng: 25.6,
  },
  {
    name: "Alanya",
    lat: 36.5436,
    lng: 31.9997,
  },
  {
    name: "Asheville",
    lat: 35.5704,
    lng: -82.5536,
  },
  {
    name: "Santa Clarita",
    lat: 34.4175,
    lng: -118.4964,
  },
  {
    name: "Gorgan",
    lat: 36.83,
    lng: 54.48,
  },
  {
    name: "Porto Velho",
    lat: -8.7619,
    lng: -63.9039,
  },
  {
    name: "Quy Nhon",
    lat: 13.7765,
    lng: 109.2237,
  },
  {
    name: "Sambalpur",
    lat: 21.4704,
    lng: 83.9701,
  },
  {
    name: "Yokkaichi",
    lat: 34.9667,
    lng: 136.6167,
  },
  {
    name: "Chalco",
    lat: 19.2647,
    lng: -98.8975,
  },
  {
    name: "Mannheim",
    lat: 49.4878,
    lng: 8.4661,
  },
  {
    name: "Namp'o",
    lat: 38.7333,
    lng: 125.4,
  },
  {
    name: "Shahriar",
    lat: 35.6597,
    lng: 51.0592,
  },
  {
    name: "Kasugai",
    lat: 35.25,
    lng: 136.9667,
  },
  {
    name: "Sapele",
    lat: 5.8904,
    lng: 5.68,
  },
  {
    name: "Blumenau",
    lat: -26.9189,
    lng: -49.0658,
  },
  {
    name: "Sariwon",
    lat: 38.5039,
    lng: 125.7589,
  },
  {
    name: "St. Catharines",
    lat: 43.1833,
    lng: -79.2333,
  },
  {
    name: "Matadi",
    lat: -5.8167,
    lng: 13.4833,
  },
  {
    name: "Niagara Falls",
    lat: 43.06,
    lng: -79.1067,
  },
  {
    name: "Firozabad",
    lat: 27.15,
    lng: 78.3949,
  },
  {
    name: "San Fernando",
    lat: 15.0333,
    lng: 120.6833,
  },
  {
    name: "St. Paul",
    lat: 44.9477,
    lng: -93.104,
  },
  {
    name: "Vladikavkaz",
    lat: 43.0167,
    lng: 44.65,
  },
  {
    name: "Yakutsk",
    lat: 62.0272,
    lng: 129.7319,
  },
  {
    name: "Minna",
    lat: 9.6139,
    lng: 6.5569,
  },
  {
    name: "Hisar",
    lat: 29.1489,
    lng: 75.7367,
  },
  {
    name: "Puerto La Cruz",
    lat: 10.2167,
    lng: -64.6167,
  },
  {
    name: "Ciudad del Este",
    lat: -25.5167,
    lng: -54.6167,
  },
  {
    name: "Podol'sk",
    lat: 55.4297,
    lng: 37.5444,
  },
  {
    name: "Ciudad Victoria",
    lat: 23.7333,
    lng: -99.1333,
  },
  {
    name: "Akita",
    lat: 39.7197,
    lng: 140.1025,
  },
  {
    name: "Kumul",
    lat: 42.827,
    lng: 93.515,
  },
  {
    name: "Vaughan",
    lat: 43.8333,
    lng: -79.5,
  },
  {
    name: "Oakashicho",
    lat: 34.6431,
    lng: 134.9975,
  },
  {
    name: "Pekalongan",
    lat: -6.8883,
    lng: 109.6753,
  },
  {
    name: "Adiyaman",
    lat: 37.7644,
    lng: 38.2763,
  },
  {
    name: "Vila Nova de Gaia",
    lat: 41.1333,
    lng: -8.6167,
  },
  {
    name: "Curepipe",
    lat: -20.3162,
    lng: 57.5166,
  },
  {
    name: "Cabanatuan City",
    lat: 15.4833,
    lng: 120.9667,
  },
  {
    name: "Oaxaca",
    lat: 17.0833,
    lng: -96.75,
  },
  {
    name: "Armenia",
    lat: 4.5389,
    lng: -75.6725,
  },
  {
    name: "Wollongong",
    lat: -34.4331,
    lng: 150.8831,
  },
  {
    name: "Brest",
    lat: 48.39,
    lng: -4.49,
  },
  {
    name: "Awka",
    lat: 6.2,
    lng: 7.0667,
  },
  {
    name: "Iksan",
    lat: 35.9439,
    lng: 126.9544,
  },
  {
    name: "Taubate",
    lat: -23.0333,
    lng: -45.55,
  },
  {
    name: "Antioch",
    lat: 37.9789,
    lng: -121.7958,
  },
  {
    name: "Lakeland",
    lat: 28.0556,
    lng: -81.9545,
  },
  {
    name: "Cadiz",
    lat: 10.9587,
    lng: 123.3086,
  },
  {
    name: "Soc Trang",
    lat: 9.6,
    lng: 105.9719,
  },
  {
    name: "Awasa",
    lat: 7.05,
    lng: 38.4667,
  },
  {
    name: "Mardan",
    lat: 34.1958,
    lng: 72.0447,
  },
  {
    name: "Popayan",
    lat: 2.4411,
    lng: -76.6061,
  },
  {
    name: "Praia Grande",
    lat: -24.0058,
    lng: -46.4028,
  },
  {
    name: "Qianzhou",
    lat: 28.3185,
    lng: 109.7318,
  },
  {
    name: "Cotabato",
    lat: 7.2167,
    lng: 124.25,
  },
  {
    name: "Bidar",
    lat: 17.9229,
    lng: 77.5175,
  },
  {
    name: "Bialystok",
    lat: 53.1167,
    lng: 23.1667,
  },
  {
    name: "Merida",
    lat: 8.5833,
    lng: -71.1333,
  },
  {
    name: "Murmansk",
    lat: 68.9667,
    lng: 33.0833,
  },
  {
    name: "Afyonkarahisar",
    lat: 38.7581,
    lng: 30.5386,
  },
  {
    name: "Valladolid",
    lat: 41.652,
    lng: -4.7286,
  },
  {
    name: "Jember",
    lat: -8.1727,
    lng: 113.6873,
  },
  {
    name: "Bahia Blanca",
    lat: -38.7167,
    lng: -62.2667,
  },
  {
    name: "Iskenderun",
    lat: 36.5804,
    lng: 36.17,
  },
  {
    name: "Al Mubarraz",
    lat: 25.4416,
    lng: 49.6642,
  },
  {
    name: "Petropolis",
    lat: -22.505,
    lng: -43.1789,
  },
  {
    name: "Al Kharj",
    lat: 24.1556,
    lng: 47.312,
  },
  {
    name: "Rampur",
    lat: 28.8154,
    lng: 79.025,
  },
  {
    name: "Najran",
    lat: 17.4917,
    lng: 44.1322,
  },
  {
    name: "Chernihiv",
    lat: 51.5,
    lng: 31.3,
  },
  {
    name: "Yangsan",
    lat: 35.3386,
    lng: 129.0386,
  },
  {
    name: "Vigo",
    lat: 42.2358,
    lng: -8.7267,
  },
  {
    name: "Oyster Bay",
    lat: 40.7845,
    lng: -73.5139,
  },
  {
    name: "Valparaiso",
    lat: -33.0458,
    lng: -71.6197,
  },
  {
    name: "Augsburg",
    lat: 48.3717,
    lng: 10.8983,
  },
  {
    name: "Mbeya",
    lat: -8.9,
    lng: 33.45,
  },
  {
    name: "Limeira",
    lat: -22.5647,
    lng: -47.4017,
  },
  {
    name: "Rangpur",
    lat: 25.75,
    lng: 89.25,
  },
  {
    name: "Ponta Grossa",
    lat: -25.09,
    lng: -50.16,
  },
  {
    name: "Shiliguri",
    lat: 26.72,
    lng: 88.42,
  },
  {
    name: "Aksaray",
    lat: 38.3686,
    lng: 34.0297,
  },
  {
    name: "Navotas",
    lat: 14.6667,
    lng: 120.9417,
  },
  {
    name: "Corum",
    lat: 40.5489,
    lng: 34.9533,
  },
  {
    name: "Bali",
    lat: 22.65,
    lng: 88.34,
  },
  {
    name: "Ismailia",
    lat: 30.5833,
    lng: 32.2667,
  },
  {
    name: "Panipat",
    lat: 29.4004,
    lng: 76.97,
  },
  {
    name: "Cagliari",
    lat: 39.2224,
    lng: 9.104,
  },
  {
    name: "Delmas",
    lat: 18.55,
    lng: -72.3,
  },
  {
    name: "Batna",
    lat: 35.55,
    lng: 6.1667,
  },
  {
    name: "Kunp'o",
    lat: 37.3675,
    lng: 126.9469,
  },
  {
    name: "Tambov",
    lat: 52.7167,
    lng: 41.4333,
  },
  {
    name: "Iasi",
    lat: 47.1622,
    lng: 27.5889,
  },
  {
    name: "Thies",
    lat: 14.7833,
    lng: -16.9167,
  },
  {
    name: "Makurdi",
    lat: 7.73,
    lng: 8.53,
  },
  {
    name: "Morioka",
    lat: 39.6833,
    lng: 141.15,
  },
  {
    name: "Kherson",
    lat: 46.6333,
    lng: 32.6,
  },
  {
    name: "Groznyy",
    lat: 43.3125,
    lng: 45.6986,
  },
  {
    name: "Hong'an",
    lat: 47.21,
    lng: 123.61,
  },
  {
    name: "Bafoussam",
    lat: 5.4667,
    lng: 10.4167,
  },
  {
    name: "Resistencia",
    lat: -27.4514,
    lng: -58.9867,
  },
  {
    name: "Brasov",
    lat: 45.65,
    lng: 25.6,
  },
  {
    name: "Juliaca",
    lat: -15.4908,
    lng: -70.1269,
  },
  {
    name: "Graz",
    lat: 47.0667,
    lng: 15.4333,
  },
  {
    name: "Karimnagar",
    lat: 18.4333,
    lng: 79.15,
  },
  {
    name: "Setif",
    lat: 36.19,
    lng: 5.41,
  },
  {
    name: "Trenton",
    lat: 40.2236,
    lng: -74.7641,
  },
  {
    name: "Kaunas",
    lat: 54.9,
    lng: 23.9333,
  },
  {
    name: "Mulhouse",
    lat: 47.75,
    lng: 7.34,
  },
  {
    name: "Hulin",
    lat: 45.7671,
    lng: 132.9646,
  },
  {
    name: "Sekondi",
    lat: 4.9433,
    lng: -1.704,
  },
  {
    name: "Lincoln",
    lat: 40.809,
    lng: -96.6788,
  },
  {
    name: "Bhuj",
    lat: 23.2504,
    lng: 69.81,
  },
  {
    name: "Ostrava",
    lat: 49.8356,
    lng: 18.2925,
  },
  {
    name: "Ichalkaranji",
    lat: 16.7,
    lng: 74.47,
  },
  {
    name: "Tirupati",
    lat: 13.65,
    lng: 79.42,
  },
  {
    name: "Springfield",
    lat: 37.1943,
    lng: -93.2916,
  },
  {
    name: "Punto Fijo",
    lat: 11.7167,
    lng: -70.1833,
  },
  {
    name: "Plano",
    lat: 33.0502,
    lng: -96.7487,
  },
  {
    name: "Irvine",
    lat: 33.6772,
    lng: -117.7738,
  },
  {
    name: "Fukushima",
    lat: 37.7608,
    lng: 140.4733,
  },
  {
    name: "Orleans",
    lat: 47.9025,
    lng: 1.909,
  },
  {
    name: "Hospet",
    lat: 15.2667,
    lng: 76.4,
  },
  {
    name: "Tacna",
    lat: -18.0556,
    lng: -70.2483,
  },
  {
    name: "Korhogo",
    lat: 9.4578,
    lng: -5.6294,
  },
  {
    name: "Constanta",
    lat: 44.1733,
    lng: 28.6383,
  },
  {
    name: "Haifa",
    lat: 32.8,
    lng: 34.9833,
  },
  {
    name: "Coacalco",
    lat: 19.6333,
    lng: -99.0931,
  },
  {
    name: "Crato",
    lat: -7.2342,
    lng: -39.4094,
  },
  {
    name: "Limoges",
    lat: 45.8353,
    lng: 1.2625,
  },
  {
    name: "Davenport",
    lat: 41.5563,
    lng: -90.6052,
  },
  {
    name: "Coro",
    lat: 11.395,
    lng: -69.6816,
  },
  {
    name: "Bago",
    lat: 17.3433,
    lng: 96.4981,
  },
  {
    name: "Fuquan",
    lat: 26.7039,
    lng: 107.5087,
  },
  {
    name: "Tongchuanshi",
    lat: 35.08,
    lng: 109.03,
  },
  {
    name: "Aizawl",
    lat: 23.7104,
    lng: 92.72,
  },
  {
    name: "Taboao da Serra",
    lat: -23.6019,
    lng: -46.7528,
  },
  {
    name: "Sannai",
    lat: 24.16,
    lng: 80.83,
  },
  {
    name: "Huozhou",
    lat: 36.5726,
    lng: 111.7176,
  },
  {
    name: "Temuco",
    lat: -38.7399,
    lng: -72.5901,
  },
  {
    name: "Sterlitamak",
    lat: 53.6333,
    lng: 55.95,
  },
  {
    name: "Rockford",
    lat: 42.2597,
    lng: -89.0641,
  },
  {
    name: "Tegal",
    lat: -6.8667,
    lng: 109.1333,
  },
  {
    name: "Ica",
    lat: -14.0667,
    lng: -75.7333,
  },
  {
    name: "Newark",
    lat: 40.7245,
    lng: -74.1725,
  },
  {
    name: "Jining",
    lat: 41.03,
    lng: 113.08,
  },
  {
    name: "Chuncheon",
    lat: 37.8747,
    lng: 127.7342,
  },
  {
    name: "Malard",
    lat: 35.6658,
    lng: 50.9767,
  },
  {
    name: "Pematangsiantar",
    lat: 2.96,
    lng: 99.06,
  },
  {
    name: "Long Xuyen",
    lat: 10.3686,
    lng: 105.4234,
  },
  {
    name: "Petrozavodsk",
    lat: 61.7833,
    lng: 34.35,
  },
  {
    name: "South Bend",
    lat: 41.6767,
    lng: -86.2696,
  },
  {
    name: "Mingaora",
    lat: 34.7717,
    lng: 72.36,
  },
  {
    name: "Barasat",
    lat: 22.2333,
    lng: 88.45,
  },
  {
    name: "Shreveport",
    lat: 32.4656,
    lng: -93.7956,
  },
  {
    name: "Sincelejo",
    lat: 9.2994,
    lng: -75.3958,
  },
  {
    name: "Viet Tri",
    lat: 21.3228,
    lng: 105.4019,
  },
  {
    name: "Cherkasy",
    lat: 49.4444,
    lng: 32.0597,
  },
  {
    name: "Wiesbaden",
    lat: 50.0825,
    lng: 8.24,
  },
  {
    name: "Kostroma",
    lat: 57.7667,
    lng: 40.9333,
  },
  {
    name: "Round Lake Beach",
    lat: 42.379,
    lng: -88.0811,
  },
  {
    name: "Gyeongsan",
    lat: 35.8167,
    lng: 128.7333,
  },
  {
    name: "Katowice",
    lat: 50.25,
    lng: 19,
  },
  {
    name: "Shaowu",
    lat: 27.3417,
    lng: 117.4869,
  },
  {
    name: "Linxia Chengguanzhen",
    lat: 35.6,
    lng: 103.2167,
  },
  {
    name: "Pachuca",
    lat: 20.1,
    lng: -98.75,
  },
  {
    name: "Dire Dawa",
    lat: 9.5833,
    lng: 41.8667,
  },
  {
    name: "Khmelnytskyi",
    lat: 49.42,
    lng: 27,
  },
  {
    name: "Aomori",
    lat: 40.8222,
    lng: 140.7475,
  },
  {
    name: "Owo",
    lat: 7.2004,
    lng: 5.59,
  },
  {
    name: "Savannah",
    lat: 32.0281,
    lng: -81.1784,
  },
  {
    name: "Posadas",
    lat: -27.3667,
    lng: -55.8969,
  },
  {
    name: "Gatineau",
    lat: 45.4833,
    lng: -75.65,
  },
  {
    name: "Windsor",
    lat: 42.2833,
    lng: -83,
  },
  {
    name: "Tsu",
    lat: 34.7186,
    lng: 136.5056,
  },
  {
    name: "Myrtle Beach",
    lat: 33.7096,
    lng: -78.8843,
  },
  {
    name: "Mbandaka",
    lat: 0.0486,
    lng: 18.2603,
  },
  {
    name: "Tehuacan",
    lat: 18.4617,
    lng: -97.3928,
  },
  {
    name: "La Guaira",
    lat: 10.6,
    lng: -66.9331,
  },
  {
    name: "Kunsan",
    lat: 35.9786,
    lng: 126.7114,
  },
  {
    name: "Nizhnevartovsk",
    lat: 60.9389,
    lng: 76.595,
  },
  {
    name: "Chula Vista",
    lat: 32.6281,
    lng: -117.0145,
  },
  {
    name: "Ratlam",
    lat: 23.3167,
    lng: 75.0667,
  },
  {
    name: "Yeosu",
    lat: 34.7607,
    lng: 127.6622,
  },
  {
    name: "Crato",
    lat: -7.4639,
    lng: -63.04,
  },
  {
    name: "Derby",
    lat: 52.9167,
    lng: -1.4667,
  },
  {
    name: "Kafr ad Dawwar",
    lat: 31.1417,
    lng: 30.1272,
  },
  {
    name: "Eugene",
    lat: 44.0563,
    lng: -123.1173,
  },
  {
    name: "Gijon",
    lat: 43.5293,
    lng: -5.6773,
  },
  {
    name: "Chiayi",
    lat: 23.48,
    lng: 120.4497,
  },
  {
    name: "Fuchu",
    lat: 35.6689,
    lng: 139.4778,
  },
  {
    name: "Palmas",
    lat: -10.2128,
    lng: -48.3603,
  },
  {
    name: "Craiova",
    lat: 44.3333,
    lng: 23.8167,
  },
  {
    name: "Maradi",
    lat: 13.5,
    lng: 7.1,
  },
  {
    name: "Sorong",
    lat: -0.8667,
    lng: 131.25,
  },
  {
    name: "Majene",
    lat: -3.5336,
    lng: 118.966,
  },
  {
    name: "Bukhara",
    lat: 39.7747,
    lng: 64.4286,
  },
  {
    name: "Thai Binh",
    lat: 20.4461,
    lng: 106.3422,
  },
  {
    name: "Binjai",
    lat: 3.6,
    lng: 98.4853,
  },
  {
    name: "Oral",
    lat: 51.2333,
    lng: 51.3667,
  },
  {
    name: "Brahmanbaria",
    lat: 23.9667,
    lng: 91.1,
  },
  {
    name: "Sarta",
    lat: 36.5504,
    lng: 53.1,
  },
  {
    name: "Imphal",
    lat: 24.82,
    lng: 93.95,
  },
  {
    name: "Plymouth",
    lat: 50.3714,
    lng: -4.1422,
  },
  {
    name: "Ichihara",
    lat: 35.4981,
    lng: 140.1156,
  },
  {
    name: "Santo Domingo de los Colorados",
    lat: -0.2542,
    lng: -79.1719,
  },
  {
    name: "Novorossiysk",
    lat: 44.7167,
    lng: 37.7667,
  },
  {
    name: "Santa Ana",
    lat: 13.9833,
    lng: -89.5333,
  },
  {
    name: "Zhytomyr",
    lat: 50.2544,
    lng: 28.6578,
  },
  {
    name: "Mito",
    lat: 36.3667,
    lng: 140.4667,
  },
  {
    name: "Gombe",
    lat: 10.2904,
    lng: 11.17,
  },
  {
    name: "Espoo",
    lat: 60.21,
    lng: 24.66,
  },
  {
    name: "Drug",
    lat: 21.19,
    lng: 81.28,
  },
  {
    name: "Bamenda",
    lat: 5.9333,
    lng: 10.1667,
  },
  {
    name: "Handwara",
    lat: 34.4,
    lng: 74.28,
  },
  {
    name: "Lucena",
    lat: 13.9333,
    lng: 121.6167,
  },
  {
    name: "Canton",
    lat: 40.8075,
    lng: -81.3677,
  },
  {
    name: "Yoshkar-Ola",
    lat: 56.6328,
    lng: 47.8958,
  },
  {
    name: "Nal'chik",
    lat: 43.4833,
    lng: 43.6167,
  },
  {
    name: "Aswan",
    lat: 24.0889,
    lng: 32.8997,
  },
  {
    name: "Salamanca",
    lat: 20.5703,
    lng: -101.1972,
  },
  {
    name: "Inegol",
    lat: 40.0806,
    lng: 29.5097,
  },
  {
    name: "Chernivtsi",
    lat: 48.2908,
    lng: 25.9344,
  },
  {
    name: "Yao",
    lat: 34.6269,
    lng: 135.6008,
  },
  {
    name: "Sumare",
    lat: -22.8219,
    lng: -47.2669,
  },
  {
    name: "Lubbock",
    lat: 33.5659,
    lng: -101.8878,
  },
  {
    name: "Yanbu`",
    lat: 24.0943,
    lng: 38.0493,
  },
  {
    name: "Sumy",
    lat: 50.9068,
    lng: 34.7992,
  },
  {
    name: "Tshikapa",
    lat: -6.4167,
    lng: 20.8,
  },
  {
    name: "Anantapur",
    lat: 14.6833,
    lng: 77.6,
  },
  {
    name: "San Pablo",
    lat: 14.0667,
    lng: 121.3167,
  },
  {
    name: "Reading",
    lat: 40.34,
    lng: -75.9267,
  },
  {
    name: "Winter Haven",
    lat: 28.0118,
    lng: -81.7017,
  },
  {
    name: "Myeik",
    lat: 12.4394,
    lng: 98.6003,
  },
  {
    name: "Maraba",
    lat: -5.3689,
    lng: -49.1178,
  },
  {
    name: "Kutahya",
    lat: 39.4242,
    lng: 29.9833,
  },
  {
    name: "Salem",
    lat: 44.9231,
    lng: -123.0246,
  },
  {
    name: "Djelfa",
    lat: 34.6667,
    lng: 3.25,
  },
  {
    name: "Petrolina",
    lat: -9.38,
    lng: -40.51,
  },
  {
    name: "Suncheon",
    lat: 34.9506,
    lng: 127.4875,
  },
  {
    name: "St. Petersburg",
    lat: 27.7931,
    lng: -82.6652,
  },
  {
    name: "Dera Ghazi Khan",
    lat: 30.05,
    lng: 70.6333,
  },
  {
    name: "Kindu",
    lat: -2.95,
    lng: 25.9167,
  },
  {
    name: "Oruro",
    lat: -17.9667,
    lng: -67.1167,
  },
  {
    name: "Dezful",
    lat: 32.3878,
    lng: 48.4033,
  },
  {
    name: "Osmaniye",
    lat: 37.075,
    lng: 36.25,
  },
  {
    name: "Lafayette",
    lat: 30.2084,
    lng: -92.0323,
  },
  {
    name: "Kyongju",
    lat: 35.85,
    lng: 129.2167,
  },
  {
    name: "Dumai",
    lat: 1.6667,
    lng: 101.45,
  },
  {
    name: "Kakogawacho-honmachi",
    lat: 34.7569,
    lng: 134.8414,
  },
  {
    name: "Gent",
    lat: 51.0536,
    lng: 3.7253,
  },
  {
    name: "Geelong",
    lat: -38.15,
    lng: 144.35,
  },
  {
    name: "Corlu",
    lat: 41.1597,
    lng: 27.8028,
  },
  {
    name: "Nawabshah",
    lat: 26.2442,
    lng: 68.41,
  },
  {
    name: "Gelsenkirchen",
    lat: 51.5167,
    lng: 7.1,
  },
  {
    name: "Fukui",
    lat: 36.0641,
    lng: 136.2196,
  },
  {
    name: "Monchengladbach",
    lat: 51.2,
    lng: 6.4333,
  },
  {
    name: "Bordeaux",
    lat: 44.84,
    lng: -0.58,
  },
  {
    name: "Annaba",
    lat: 36.9,
    lng: 7.7667,
  },
  {
    name: "Venice",
    lat: 45.4397,
    lng: 12.3319,
  },
  {
    name: "Barueri",
    lat: -23.5111,
    lng: -46.8764,
  },
  {
    name: "Nonthaburi",
    lat: 13.8667,
    lng: 100.5167,
  },
  {
    name: "Laredo",
    lat: 27.5629,
    lng: -99.4875,
  },
  {
    name: "Jersey City",
    lat: 40.7161,
    lng: -74.0682,
  },
  {
    name: "Quang Ngai",
    lat: 15.1206,
    lng: 108.7922,
  },
  {
    name: "Concord",
    lat: 35.3933,
    lng: -80.6366,
  },
  {
    name: "Damanhur",
    lat: 31.05,
    lng: 30.4667,
  },
  {
    name: "Dongta",
    lat: 38.0937,
    lng: 106.3321,
  },
  {
    name: "Ciudad Benito Juarez",
    lat: 25.65,
    lng: -100.0833,
  },
  {
    name: "Cascavel",
    lat: -24.9558,
    lng: -53.4553,
  },
  {
    name: "Hiratsuka",
    lat: 35.3231,
    lng: 139.3422,
  },
  {
    name: "Columbus",
    lat: 32.51,
    lng: -84.8771,
  },
  {
    name: "Chandler",
    lat: 33.2826,
    lng: -111.8516,
  },
  {
    name: "Governador Valadares",
    lat: -18.87,
    lng: -41.97,
  },
  {
    name: "Sakarya",
    lat: 40.7778,
    lng: 30.4028,
  },
  {
    name: "Tagum",
    lat: 7.4478,
    lng: 125.8078,
  },
  {
    name: "Kunduz",
    lat: 36.728,
    lng: 68.8725,
  },
  {
    name: "Ciudad Santa Catarina",
    lat: 25.6833,
    lng: -100.45,
  },
  {
    name: "Los Mochis",
    lat: 25.7835,
    lng: -108.9937,
  },
  {
    name: "Soka",
    lat: 35.8256,
    lng: 139.8056,
  },
  {
    name: "Texcoco",
    lat: 19.52,
    lng: -98.88,
  },
  {
    name: "Misratah",
    lat: 32.3778,
    lng: 15.0901,
  },
  {
    name: "Isparta",
    lat: 37.7667,
    lng: 30.55,
  },
  {
    name: "Etawah",
    lat: 26.7855,
    lng: 79.015,
  },
  {
    name: "Huayin",
    lat: 34.5664,
    lng: 110.0866,
  },
  {
    name: "McKinney",
    lat: 33.2015,
    lng: -96.6669,
  },
  {
    name: "Playa del Carmen",
    lat: 20.6275,
    lng: -87.0811,
  },
  {
    name: "Scottsdale",
    lat: 33.6872,
    lng: -111.8651,
  },
  {
    name: "Wolverhampton",
    lat: 52.5833,
    lng: -2.1333,
  },
  {
    name: "Killeen",
    lat: 31.0754,
    lng: -97.7296,
  },
  {
    name: "Bergen",
    lat: 60.3925,
    lng: 5.3233,
  },
  {
    name: "Tallahassee",
    lat: 30.4551,
    lng: -84.2526,
  },
  {
    name: "Shinozaki",
    lat: 33.95,
    lng: 130.9333,
  },
  {
    name: "Horlivka",
    lat: 48.3336,
    lng: 38.0925,
  },
  {
    name: "Antsirabe",
    lat: -19.8667,
    lng: 47.0333,
  },
  {
    name: "Ondo",
    lat: 7.0904,
    lng: 4.84,
  },
  {
    name: "Hakodate",
    lat: 41.7733,
    lng: 140.7261,
  },
  {
    name: "Ap Da Loi",
    lat: 11.9304,
    lng: 108.42,
  },
  {
    name: "Foz do Iguacu",
    lat: -25.5478,
    lng: -54.5878,
  },
  {
    name: "Tokushima",
    lat: 34.0667,
    lng: 134.55,
  },
  {
    name: "Peoria",
    lat: 40.752,
    lng: -89.6153,
  },
  {
    name: "Santa Maria",
    lat: -29.6833,
    lng: -53.8,
  },
  {
    name: "Kediri",
    lat: -7.8166,
    lng: 112.0119,
  },
  {
    name: "Fort-de-France",
    lat: 14.6104,
    lng: -61.08,
  },
  {
    name: "Damaturu",
    lat: 11.75,
    lng: 11.9667,
  },
  {
    name: "Malolos",
    lat: 14.8433,
    lng: 120.8114,
  },
  {
    name: "La Paz",
    lat: 24.1422,
    lng: -110.3108,
  },
  {
    name: "Wilmington",
    lat: 34.21,
    lng: -77.8866,
  },
  {
    name: "Raichur",
    lat: 16.2104,
    lng: 77.355,
  },
  {
    name: "Mawlamyine",
    lat: 16.4847,
    lng: 97.6258,
  },
  {
    name: "Turmero",
    lat: 10.2283,
    lng: -67.4753,
  },
  {
    name: "Kuala Terengganu",
    lat: 5.3303,
    lng: 103.1408,
  },
  {
    name: "Daloa",
    lat: 6.89,
    lng: -6.45,
  },
  {
    name: "Puerto Princesa",
    lat: 9.75,
    lng: 118.75,
  },
  {
    name: "Qarshi",
    lat: 38.8667,
    lng: 65.8,
  },
  {
    name: "Montgomery",
    lat: 32.3473,
    lng: -86.2666,
  },
  {
    name: "Gilbert",
    lat: 33.3101,
    lng: -111.7463,
  },
  {
    name: "Rishon LeZiyyon",
    lat: 31.95,
    lng: 34.8,
  },
  {
    name: "Ongole",
    lat: 15.5,
    lng: 80.05,
  },
  {
    name: "Arua",
    lat: 3.03,
    lng: 30.91,
  },
  {
    name: "Verona",
    lat: 45.4386,
    lng: 10.9928,
  },
  {
    name: "Bharatpur",
    lat: 27.2172,
    lng: 77.49,
  },
  {
    name: "Rach Gia",
    lat: 10.0125,
    lng: 105.0808,
  },
  {
    name: "Kanggye",
    lat: 40.9667,
    lng: 126.6,
  },
  {
    name: "Taganrog",
    lat: 47.2333,
    lng: 38.9,
  },
  {
    name: "Buenaventura",
    lat: 3.8724,
    lng: -77.0505,
  },
  {
    name: "Kiziltepe",
    lat: 37.1939,
    lng: 40.5861,
  },
  {
    name: "Vitoria-Gasteiz",
    lat: 42.8467,
    lng: -2.6731,
  },
  {
    name: "El Fasher",
    lat: 13.63,
    lng: 25.35,
  },
  {
    name: "Varzea Grande",
    lat: -15.65,
    lng: -56.14,
  },
  {
    name: "Glendale",
    lat: 33.5791,
    lng: -112.2311,
  },
  {
    name: "Santiago del Estero",
    lat: -27.7844,
    lng: -64.2669,
  },
  {
    name: "Usak",
    lat: 38.6833,
    lng: 29.4,
  },
  {
    name: "Begusarai",
    lat: 25.42,
    lng: 86.13,
  },
  {
    name: "North Las Vegas",
    lat: 36.288,
    lng: -115.0901,
  },
  {
    name: "Sonipat",
    lat: 28.9958,
    lng: 77.0114,
  },
  {
    name: "Los Teques",
    lat: 10.3411,
    lng: -67.0406,
  },
  {
    name: "Mabalacat",
    lat: 15.2167,
    lng: 120.5833,
  },
  {
    name: "Jinshi",
    lat: 29.6334,
    lng: 111.8746,
  },
  {
    name: "Osh",
    lat: 40.5333,
    lng: 72.7833,
  },
  {
    name: "Iwo",
    lat: 7.63,
    lng: 4.18,
  },
  {
    name: "Bata",
    lat: 1.85,
    lng: 9.75,
  },
  {
    name: "Chofugaoka",
    lat: 35.6506,
    lng: 139.5408,
  },
  {
    name: "Komsomol'sk-na-Amure",
    lat: 50.55,
    lng: 137,
  },
  {
    name: "Babol",
    lat: 36.55,
    lng: 52.6833,
  },
  {
    name: "Galati",
    lat: 45.4233,
    lng: 28.0425,
  },
  {
    name: "Al Bayda'",
    lat: 32.7628,
    lng: 21.755,
  },
  {
    name: "Yamagata",
    lat: 38.25,
    lng: 140.3333,
  },
  {
    name: "Manzhouli",
    lat: 49.5881,
    lng: 117.4525,
  },
  {
    name: "Kiel",
    lat: 54.3233,
    lng: 10.1394,
  },
  {
    name: "Braunschweig",
    lat: 52.2692,
    lng: 10.5211,
  },
  {
    name: "Rivne",
    lat: 50.6197,
    lng: 26.2514,
  },
  {
    name: "Gdynia",
    lat: 54.5189,
    lng: 18.5319,
  },
  {
    name: "Palangkaraya",
    lat: -2.21,
    lng: 113.92,
  },
  {
    name: "Al Minya",
    lat: 28.0833,
    lng: 30.75,
  },
  {
    name: "Hafr al Batin",
    lat: 28.4337,
    lng: 45.9601,
  },
  {
    name: "Caruaru",
    lat: -8.28,
    lng: -35.98,
  },
  {
    name: "San Bernardo",
    lat: -33.6,
    lng: -70.7,
  },
  {
    name: "Bukan",
    lat: 36.5208,
    lng: 46.2117,
  },
  {
    name: "Aachen",
    lat: 50.7762,
    lng: 6.0838,
  },
  {
    name: "Sahiwal",
    lat: 30.6706,
    lng: 73.1064,
  },
  {
    name: "Chigasaki",
    lat: 35.3339,
    lng: 139.4047,
  },
  {
    name: "Thu Dau Mot",
    lat: 11.0042,
    lng: 106.6583,
  },
  {
    name: "Sibu",
    lat: 2.3,
    lng: 111.8167,
  },
  {
    name: "Anchorage",
    lat: 61.1508,
    lng: -149.1091,
  },
  {
    name: "Parana",
    lat: -31.7444,
    lng: -60.5175,
  },
  {
    name: "Oruro",
    lat: -17.98,
    lng: -67.13,
  },
  {
    name: "Merlo",
    lat: -34.6653,
    lng: -58.7275,
  },
  {
    name: "Syktyvkar",
    lat: 61.6667,
    lng: 50.8167,
  },
  {
    name: "Khimki",
    lat: 55.8892,
    lng: 37.445,
  },
  {
    name: "Biratnagar",
    lat: 26.4833,
    lng: 87.2833,
  },
  {
    name: "Chemnitz",
    lat: 50.8333,
    lng: 12.9167,
  },
  {
    name: "Saskatoon",
    lat: 52.1333,
    lng: -106.6833,
  },
  {
    name: "Yato",
    lat: 35.4693,
    lng: 139.4616,
  },
  {
    name: "Colon",
    lat: 9.3598,
    lng: -79.9004,
  },
  {
    name: "Abertawe",
    lat: 51.6167,
    lng: -3.95,
  },
  {
    name: "Fuji",
    lat: 35.1614,
    lng: 138.6764,
  },
  {
    name: "Puerto Montt",
    lat: -41.4718,
    lng: -72.9396,
  },
  {
    name: "Jessore",
    lat: 23.1704,
    lng: 89.2,
  },
  {
    name: "Beichengqu",
    lat: 40.4348,
    lng: 113.1565,
  },
  {
    name: "Tuy Hoa",
    lat: 13.0875,
    lng: 109.3106,
  },
  {
    name: "Shrirampur",
    lat: 22.75,
    lng: 88.34,
  },
  {
    name: "Chesapeake",
    lat: 36.6778,
    lng: -76.3024,
  },
  {
    name: "Hapur",
    lat: 28.7437,
    lng: 77.7628,
  },
  {
    name: "Bahir Dar",
    lat: 11.585,
    lng: 37.39,
  },
  {
    name: "Manisa",
    lat: 38.6131,
    lng: 27.4258,
  },
  {
    name: "Tanga",
    lat: -5.0667,
    lng: 39.1,
  },
  {
    name: "Sabzevar",
    lat: 36.2167,
    lng: 57.6667,
  },
  {
    name: "Ramgundam",
    lat: 18.8,
    lng: 79.45,
  },
  {
    name: "Porto",
    lat: 41.1495,
    lng: -8.6108,
  },
  {
    name: "Tacloban",
    lat: 11.2444,
    lng: 125.0039,
  },
  {
    name: "Myitkyina",
    lat: 25.3867,
    lng: 97.3936,
  },
  {
    name: "Barnstable",
    lat: 41.6722,
    lng: -70.3599,
  },
  {
    name: "Haeju",
    lat: 38.0333,
    lng: 125.7167,
  },
  {
    name: "Petah Tiqwa",
    lat: 32.0833,
    lng: 34.8833,
  },
  {
    name: "Norfolk",
    lat: 36.8945,
    lng: -76.259,
  },
  {
    name: "Gonzalez Catan",
    lat: -34.7708,
    lng: -58.6464,
  },
  {
    name: "Juazeiro do Norte",
    lat: -7.21,
    lng: -39.32,
  },
  {
    name: "Diaobingshancun",
    lat: 42.4391,
    lng: 123.5426,
  },
  {
    name: "Tarapoto",
    lat: -6.4833,
    lng: -76.3667,
  },
  {
    name: "Zhangping",
    lat: 25.2938,
    lng: 117.4148,
  },
  {
    name: "San Juan del Rio",
    lat: 20.3833,
    lng: -99.9833,
  },
  {
    name: "Tsukuba-kenkyugakuen-toshi",
    lat: 36.0333,
    lng: 140.0667,
  },
  {
    name: "Sao Carlos",
    lat: -22.0178,
    lng: -47.8908,
  },
  {
    name: "Ilheus",
    lat: -14.7936,
    lng: -39.0395,
  },
  {
    name: "Fremont",
    lat: 37.5265,
    lng: -121.9852,
  },
  {
    name: "Halle",
    lat: 51.4828,
    lng: 11.9697,
  },
  {
    name: "Duzce",
    lat: 40.8417,
    lng: 31.1583,
  },
  {
    name: "Anju",
    lat: 39.6167,
    lng: 125.6667,
  },
  {
    name: "Aarhus",
    lat: 56.1572,
    lng: 10.2107,
  },
  {
    name: "Kennewick",
    lat: 46.1978,
    lng: -119.1732,
  },
  {
    name: "Hobart",
    lat: -42.8806,
    lng: 147.325,
  },
  {
    name: "Artux",
    lat: 39.7114,
    lng: 76.1753,
  },
  {
    name: "Chimoio",
    lat: -19.1167,
    lng: 33.45,
  },
  {
    name: "Limassol",
    lat: 34.675,
    lng: 33.0443,
  },
  {
    name: "Garland",
    lat: 32.91,
    lng: -96.6305,
  },
  {
    name: "Magdeburg",
    lat: 52.1278,
    lng: 11.6292,
  },
  {
    name: "Irving",
    lat: 32.8584,
    lng: -96.9702,
  },
  {
    name: "Hachimancho",
    lat: 40.51,
    lng: 141.54,
  },
  {
    name: "Longueuil",
    lat: 45.5333,
    lng: -73.5167,
  },
  {
    name: "Mokpo",
    lat: 34.7936,
    lng: 126.3886,
  },
  {
    name: "Kosice",
    lat: 48.7167,
    lng: 21.25,
  },
  {
    name: "`Ajman",
    lat: 25.3994,
    lng: 55.4797,
  },
  {
    name: "Lille",
    lat: 50.6278,
    lng: 3.0583,
  },
  {
    name: "Neya",
    lat: 34.7661,
    lng: 135.6281,
  },
  {
    name: "Banda Aceh",
    lat: 5.55,
    lng: 95.3175,
  },
  {
    name: "Le Havre",
    lat: 49.49,
    lng: 0.1,
  },
  {
    name: "Taiping",
    lat: 4.85,
    lng: 100.7333,
  },
  {
    name: "P'yong-dong",
    lat: 39.25,
    lng: 125.85,
  },
  {
    name: "Springs",
    lat: -26.2547,
    lng: 28.4428,
  },
  {
    name: "Ivano-Frankivsk",
    lat: 48.9228,
    lng: 24.7106,
  },
  {
    name: "As Sib",
    lat: 23.6802,
    lng: 58.1825,
  },
  {
    name: "Narayanganj",
    lat: 23.6167,
    lng: 90.5,
  },
  {
    name: "Wuyishan",
    lat: 27.7562,
    lng: 118.0267,
  },
  {
    name: "Sato",
    lat: 33.1631,
    lng: 129.7177,
  },
  {
    name: "Amol",
    lat: 36.4669,
    lng: 52.3569,
  },
  {
    name: "Quilmes",
    lat: -34.7167,
    lng: -58.2667,
  },
  {
    name: "Mirpur Khas",
    lat: 25.5269,
    lng: 69.0111,
  },
  {
    name: "Nizhnekamsk",
    lat: 55.6333,
    lng: 51.8167,
  },
  {
    name: "Visalia",
    lat: 36.3276,
    lng: -119.3269,
  },
  {
    name: "Al Jubayl",
    lat: 27.0046,
    lng: 49.646,
  },
  {
    name: "Pathein",
    lat: 16.7667,
    lng: 94.7333,
  },
  {
    name: "Secunderabad",
    lat: 17.45,
    lng: 78.5,
  },
  {
    name: "Chishui",
    lat: 28.5902,
    lng: 105.6946,
  },
  {
    name: "Centurion",
    lat: -25.8603,
    lng: 28.1894,
  },
  {
    name: "Atlantic City",
    lat: 39.3797,
    lng: -74.4527,
  },
  {
    name: "Uluberiya",
    lat: 22.47,
    lng: 88.11,
  },
  {
    name: "Shakhty",
    lat: 47.7,
    lng: 40.2333,
  },
  {
    name: "Messina",
    lat: 38.1833,
    lng: 15.55,
  },
  {
    name: "Pakdasht",
    lat: 35.4817,
    lng: 51.6803,
  },
  {
    name: "El Tigre",
    lat: 8.8858,
    lng: -64.2611,
  },
  {
    name: "Kremenchuk",
    lat: 49.0775,
    lng: 33.4239,
  },
  {
    name: "Abha",
    lat: 18.2167,
    lng: 42.5,
  },
  {
    name: "Ibb",
    lat: 13.9759,
    lng: 44.1709,
  },
  {
    name: "Garoua",
    lat: 9.3,
    lng: 13.4,
  },
  {
    name: "Bole",
    lat: 44.898,
    lng: 82.0726,
  },
  {
    name: "Najafabad",
    lat: 32.6342,
    lng: 51.3667,
  },
  {
    name: "Bayamo",
    lat: 20.3817,
    lng: -76.6428,
  },
  {
    name: "Porbandar",
    lat: 21.6425,
    lng: 69.6047,
  },
  {
    name: "Granada",
    lat: 37.1781,
    lng: -3.6008,
  },
  {
    name: "Kamianske",
    lat: 48.5076,
    lng: 34.6132,
  },
  {
    name: "Borujerd",
    lat: 33.8972,
    lng: 48.7514,
  },
  {
    name: "Singaraja",
    lat: -8.1152,
    lng: 115.0944,
  },
  {
    name: "Miri",
    lat: 4.4028,
    lng: 113.9933,
  },
  {
    name: "Machala",
    lat: -3.2667,
    lng: -79.9667,
  },
  {
    name: "Longquan",
    lat: 28.0733,
    lng: 119.1277,
  },
  {
    name: "Monclova",
    lat: 26.9103,
    lng: -101.4222,
  },
  {
    name: "Puducherry",
    lat: 11.93,
    lng: 79.83,
  },
  {
    name: "Olongapo",
    lat: 14.8333,
    lng: 120.2833,
  },
  {
    name: "Saga",
    lat: 33.2667,
    lng: 130.3,
  },
  {
    name: "Nashua",
    lat: 42.7491,
    lng: -71.491,
  },
  {
    name: "Santarem",
    lat: -2.4431,
    lng: -54.7083,
  },
  {
    name: "Paradise",
    lat: 36.0807,
    lng: -115.1369,
  },
  {
    name: "Okara",
    lat: 30.81,
    lng: 73.4597,
  },
  {
    name: "Kasukabe",
    lat: 35.9753,
    lng: 139.7525,
  },
  {
    name: "Talisay",
    lat: 10.25,
    lng: 123.8333,
  },
  {
    name: "Hialeah",
    lat: 25.8696,
    lng: -80.3046,
  },
  {
    name: "Saidpur",
    lat: 25.8004,
    lng: 89,
  },
  {
    name: "York",
    lat: 39.9651,
    lng: -76.7315,
  },
  {
    name: "Burnaby",
    lat: 49.2667,
    lng: -122.9667,
  },
  {
    name: "Rancagua",
    lat: -34.1654,
    lng: -70.7398,
  },
  {
    name: "Dzerzhinsk",
    lat: 56.2333,
    lng: 43.45,
  },
  {
    name: "Milton Keynes",
    lat: 52.04,
    lng: -0.76,
  },
  {
    name: "Marilia",
    lat: -22.2139,
    lng: -49.9458,
  },
  {
    name: "Barishal",
    lat: 22.7,
    lng: 90.3667,
  },
  {
    name: "Bratsk",
    lat: 56.1667,
    lng: 101.6167,
  },
  {
    name: "Jiayuguan",
    lat: 39.8112,
    lng: 98.2862,
  },
  {
    name: "Arlington",
    lat: 38.8786,
    lng: -77.1011,
  },
  {
    name: "Indaiatuba",
    lat: -23.0903,
    lng: -47.2181,
  },
  {
    name: "Freiburg im Breisgau",
    lat: 47.9947,
    lng: 7.8497,
  },
  {
    name: "Madan",
    lat: 30.3392,
    lng: 48.3042,
  },
  {
    name: "Qarchak",
    lat: 35.4394,
    lng: 51.5689,
  },
  {
    name: "Itabuna",
    lat: -14.7896,
    lng: -39.28,
  },
  {
    name: "Neuquen",
    lat: -38.9573,
    lng: -68.0455,
  },
  {
    name: "Ibb",
    lat: 13.9667,
    lng: 44.1667,
  },
  {
    name: "Ageoshimo",
    lat: 35.9775,
    lng: 139.5933,
  },
  {
    name: "Badalona",
    lat: 41.4333,
    lng: 2.2333,
  },
  {
    name: "Singkawang",
    lat: 0.9,
    lng: 108.9833,
  },
  {
    name: "Orsk",
    lat: 51.2145,
    lng: 58.5441,
  },
  {
    name: "Vizianagaram",
    lat: 18.1167,
    lng: 83.4167,
  },
  {
    name: "Evansville",
    lat: 37.9881,
    lng: -87.5341,
  },
  {
    name: "Cotia",
    lat: -23.6039,
    lng: -46.9189,
  },
  {
    name: "North Hempstead",
    lat: 40.7912,
    lng: -73.6688,
  },
  {
    name: "Pali",
    lat: 25.7725,
    lng: 73.3233,
  },
  {
    name: "Noginsk",
    lat: 64.4833,
    lng: 91.2333,
  },
  {
    name: "Kropyvnytskyi",
    lat: 48.5103,
    lng: 32.2667,
  },
  {
    name: "Czestochowa",
    lat: 50.8,
    lng: 19.1167,
  },
  {
    name: "Guantanamo",
    lat: 20.1383,
    lng: -75.2061,
  },
  {
    name: "Krefeld",
    lat: 51.3333,
    lng: 6.5667,
  },
  {
    name: "Guadalupe",
    lat: 22.7528,
    lng: -102.5078,
  },
  {
    name: "Kolpino",
    lat: 59.73,
    lng: 30.65,
  },
  {
    name: "Huixquilucan",
    lat: 19.3611,
    lng: -99.3508,
  },
  {
    name: "Burgas",
    lat: 42.5,
    lng: 27.4667,
  },
  {
    name: "Puerto Vallarta",
    lat: 20.6667,
    lng: -105.2667,
  },
  {
    name: "Avondale",
    lat: 33.3858,
    lng: -112.3236,
  },
  {
    name: "Nyala",
    lat: 12.05,
    lng: 24.8833,
  },
  {
    name: "Brownsville",
    lat: 25.998,
    lng: -97.4565,
  },
  {
    name: "Sakurazuka",
    lat: 34.8,
    lng: 135.3603,
  },
  {
    name: "Dasoguz",
    lat: 41.8167,
    lng: 59.9831,
  },
  {
    name: "Turkistan",
    lat: 43.3,
    lng: 68.2436,
  },
  {
    name: "Probolinggo",
    lat: -7.75,
    lng: 113.2167,
  },
  {
    name: "Atsugicho",
    lat: 35.4333,
    lng: 139.3667,
  },
  {
    name: "Jacarei",
    lat: -23.305,
    lng: -45.9658,
  },
  {
    name: "Gusau",
    lat: 12.1704,
    lng: 6.66,
  },
  {
    name: "Buenavista",
    lat: 19.6083,
    lng: -99.1694,
  },
  {
    name: "Quetzaltenango",
    lat: 14.8333,
    lng: -91.5167,
  },
  {
    name: "Araraquara",
    lat: -21.7939,
    lng: -48.1758,
  },
  {
    name: "Angarsk",
    lat: 52.5667,
    lng: 103.9167,
  },
  {
    name: "Nagercoil",
    lat: 8.17,
    lng: 77.43,
  },
  {
    name: "Heroica Nogales",
    lat: 31.3186,
    lng: -110.9458,
  },
  {
    name: "Apapa",
    lat: 6.4489,
    lng: 3.3589,
  },
  {
    name: "Nyanza",
    lat: -2.3496,
    lng: 29.74,
  },
  {
    name: "Itapevi",
    lat: -23.5489,
    lng: -46.9342,
  },
  {
    name: "Bac Lieu",
    lat: 9.2833,
    lng: 105.7167,
  },
  {
    name: "Varamin",
    lat: 35.2714,
    lng: 51.6511,
  },
  {
    name: "Padangsidempuan",
    lat: 1.3667,
    lng: 99.2667,
  },
  {
    name: "Karnal",
    lat: 29.6804,
    lng: 76.97,
  },
  {
    name: "Mubi",
    lat: 10.2686,
    lng: 13.267,
  },
  {
    name: "Toamasina",
    lat: -18.1492,
    lng: 49.4023,
  },
  {
    name: "Engel's",
    lat: 51.4667,
    lng: 46.1167,
  },
  {
    name: "Campeche",
    lat: 19.85,
    lng: -90.5306,
  },
  {
    name: "Korolev",
    lat: 55.9167,
    lng: 37.8167,
  },
  {
    name: "Cidade de Nacala",
    lat: -14.5186,
    lng: 40.715,
  },
  {
    name: "Hunchun",
    lat: 42.8679,
    lng: 130.3585,
  },
  {
    name: "Tampere",
    lat: 61.4981,
    lng: 23.7608,
  },
  {
    name: "Minamiozuma",
    lat: 36.2404,
    lng: 137.97,
  },
  {
    name: "Blagoveshchensk",
    lat: 50.2578,
    lng: 127.5364,
  },
  {
    name: "Velikiy Novgorod",
    lat: 58.521,
    lng: 31.2758,
  },
  {
    name: "Ashdod",
    lat: 31.7978,
    lng: 34.6503,
  },
  {
    name: "Carlos Manuel de Cespedes",
    lat: 21.5767,
    lng: -78.2775,
  },
  {
    name: "Nigde",
    lat: 37.9667,
    lng: 34.6792,
  },
  {
    name: "Sandton",
    lat: -26.107,
    lng: 28.0517,
  },
  {
    name: "Tanjore",
    lat: 10.8,
    lng: 79.15,
  },
  {
    name: "Staryy Oskol",
    lat: 51.2981,
    lng: 37.835,
  },
  {
    name: "Puri",
    lat: 19.8,
    lng: 85.8167,
  },
  {
    name: "Cartago",
    lat: 9.8667,
    lng: -83.9167,
  },
  {
    name: "Ji'an Shi",
    lat: 41.1231,
    lng: 126.1815,
  },
  {
    name: "Soledad de Graciano Sanchez",
    lat: 22.1833,
    lng: -100.9333,
  },
  {
    name: "Presidente Prudente",
    lat: -22.1258,
    lng: -51.3889,
  },
  {
    name: "Jose C. Paz",
    lat: -34.5167,
    lng: -58.7667,
  },
  {
    name: "Ternopil",
    lat: 49.5667,
    lng: 25.6,
  },
  {
    name: "Rufisque",
    lat: 14.7167,
    lng: -17.2667,
  },
  {
    name: "Gueckedou",
    lat: 8.5667,
    lng: -10.1333,
  },
  {
    name: "Formosa",
    lat: -26.1847,
    lng: -58.1758,
  },
  {
    name: "Gabes",
    lat: 33.9004,
    lng: 10.1,
  },
  {
    name: "Imperatriz",
    lat: -5.52,
    lng: -47.49,
  },
  {
    name: "Sambhal",
    lat: 28.58,
    lng: 78.55,
  },
  {
    name: "Polokwane",
    lat: -23.9,
    lng: 29.45,
  },
  {
    name: "Neyshabur",
    lat: 36.22,
    lng: 58.82,
  },
  {
    name: "Sidon",
    lat: 33.5606,
    lng: 35.3981,
  },
  {
    name: "Radom",
    lat: 51.4036,
    lng: 21.1567,
  },
  {
    name: "Lutsk",
    lat: 50.7478,
    lng: 25.3244,
  },
  {
    name: "La Serena",
    lat: -29.9027,
    lng: -71.252,
  },
  {
    name: "Gujiao",
    lat: 37.9069,
    lng: 112.17,
  },
  {
    name: "Gulfport",
    lat: 30.4271,
    lng: -89.0703,
  },
  {
    name: "San Felipe",
    lat: 10.3353,
    lng: -68.7458,
  },
  {
    name: "Saveh",
    lat: 35.0211,
    lng: 50.3564,
  },
  {
    name: "La Vega",
    lat: 19.2242,
    lng: -70.5283,
  },
  {
    name: "Appleton",
    lat: 44.2779,
    lng: -88.3891,
  },
  {
    name: "Khomeyni Shahr",
    lat: 32.7,
    lng: 51.5211,
  },
  {
    name: "Al Khubar",
    lat: 26.3,
    lng: 50.2167,
  },
  {
    name: "Islington",
    lat: 51.544,
    lng: -0.1027,
  },
  {
    name: "Cordoba",
    lat: 18.8942,
    lng: -96.9347,
  },
  {
    name: "San Pedro de Macoris",
    lat: 18.4504,
    lng: -69.3,
  },
  {
    name: "Ciudad Acuna",
    lat: 29.3242,
    lng: -100.9317,
  },
  {
    name: "Sabadell",
    lat: 41.5483,
    lng: 2.1075,
  },
  {
    name: "Hortolandia",
    lat: -22.8583,
    lng: -47.22,
  },
  {
    name: "Bitung",
    lat: 1.4472,
    lng: 125.1978,
  },
  {
    name: "Naihati",
    lat: 22.9,
    lng: 88.42,
  },
  {
    name: "Damietta",
    lat: 31.4167,
    lng: 31.8167,
  },
  {
    name: "Groningen",
    lat: 53.2204,
    lng: 6.58,
  },
  {
    name: "Kure",
    lat: 34.2492,
    lng: 132.5658,
  },
  {
    name: "Manta",
    lat: -0.95,
    lng: -80.7162,
  },
  {
    name: "Butembo",
    lat: 0.1251,
    lng: 29.299,
  },
  {
    name: "San Miguel",
    lat: 13.4833,
    lng: -88.1833,
  },
  {
    name: "Concepcion",
    lat: -36.8271,
    lng: -73.0503,
  },
  {
    name: "Netanya",
    lat: 32.3328,
    lng: 34.86,
  },
  {
    name: "Bremerton",
    lat: 47.5436,
    lng: -122.7122,
  },
  {
    name: "Alor Setar",
    lat: 6.1167,
    lng: 100.3667,
  },
  {
    name: "Hickory",
    lat: 35.7425,
    lng: -81.323,
  },
  {
    name: "Lubeck",
    lat: 53.8697,
    lng: 10.6864,
  },
  {
    name: "Los Angeles",
    lat: -37.4707,
    lng: -72.3517,
  },
  {
    name: "Aberdeen",
    lat: 57.15,
    lng: -2.11,
  },
  {
    name: "Luton",
    lat: 51.8783,
    lng: -0.4147,
  },
  {
    name: "Tacoma",
    lat: 47.2431,
    lng: -122.4531,
  },
  {
    name: "Denov",
    lat: 38.2772,
    lng: 67.8872,
  },
  {
    name: "Qostanay",
    lat: 53.2144,
    lng: 63.6246,
  },
  {
    name: "Banjarbaru",
    lat: -3.4667,
    lng: 114.75,
  },
  {
    name: "Sa Dec",
    lat: 10.3105,
    lng: 105.7397,
  },
  {
    name: "Norwich",
    lat: 52.63,
    lng: 1.297,
  },
  {
    name: "Petropavl",
    lat: 54.8622,
    lng: 69.1408,
  },
  {
    name: "Marg`ilon",
    lat: 40.4667,
    lng: 71.7167,
  },
  {
    name: "Gangneung",
    lat: 37.7556,
    lng: 128.8961,
  },
  {
    name: "San Bernardino",
    lat: 34.1417,
    lng: -117.2946,
  },
  {
    name: "Cua",
    lat: 10.1667,
    lng: -66.8833,
  },
  {
    name: "Meycauayan",
    lat: 14.7333,
    lng: 120.95,
  },
  {
    name: "Vantaa",
    lat: 60.3,
    lng: 25.0333,
  },
  {
    name: "As Samawah",
    lat: 31.3167,
    lng: 45.2833,
  },
  {
    name: "Ormoc",
    lat: 11.0167,
    lng: 124.6167,
  },
  {
    name: "College Station",
    lat: 30.5852,
    lng: -96.296,
  },
  {
    name: "Golmud",
    lat: 36.4028,
    lng: 94.9042,
  },
  {
    name: "Kalamazoo",
    lat: 42.2749,
    lng: -85.5882,
  },
  {
    name: "Cartagena",
    lat: 37.6,
    lng: -0.9819,
  },
  {
    name: "Regina",
    lat: 50.4547,
    lng: -104.6067,
  },
  {
    name: "Thousand Oaks",
    lat: 34.1914,
    lng: -118.8755,
  },
  {
    name: "La Victoria",
    lat: 10.2278,
    lng: -67.3336,
  },
  {
    name: "Shimla",
    lat: 31.1033,
    lng: 77.1722,
  },
  {
    name: "Mohammedia",
    lat: 33.6833,
    lng: -7.3833,
  },
  {
    name: "Babruysk",
    lat: 53.15,
    lng: 29.2333,
  },
  {
    name: "Roanoke",
    lat: 37.2785,
    lng: -79.958,
  },
  {
    name: "Osan",
    lat: 37.145,
    lng: 127.0694,
  },
  {
    name: "Geneva",
    lat: 46.2,
    lng: 6.15,
  },
  {
    name: "Criciuma",
    lat: -28.68,
    lng: -49.39,
  },
  {
    name: "Fontana",
    lat: 34.0968,
    lng: -117.4599,
  },
  {
    name: "Sikasso",
    lat: 11.3167,
    lng: -5.6667,
  },
  {
    name: "Warnes",
    lat: -17.5103,
    lng: -63.1647,
  },
  {
    name: "Padova",
    lat: 45.4064,
    lng: 11.8778,
  },
  {
    name: "Ciudad Madero",
    lat: 22.25,
    lng: -97.8333,
  },
  {
    name: "Oberhausen",
    lat: 51.4699,
    lng: 6.8514,
  },
  {
    name: "Jalalabad",
    lat: 34.4303,
    lng: 70.4528,
  },
  {
    name: "Moreno Valley",
    lat: 33.9244,
    lng: -117.2045,
  },
  {
    name: "Sidi Bel Abbes",
    lat: 35.2,
    lng: -0.6333,
  },
  {
    name: "Jerez de la Frontera",
    lat: 36.7,
    lng: -6.1167,
  },
  {
    name: "Limbe",
    lat: 4.0167,
    lng: 9.2167,
  },
  {
    name: "Timon",
    lat: -5.115,
    lng: -42.845,
  },
  {
    name: "Ploiesti",
    lat: 44.9386,
    lng: 26.0225,
  },
  {
    name: "Metepec",
    lat: 19.2511,
    lng: -99.6047,
  },
  {
    name: "Pskov",
    lat: 57.8167,
    lng: 28.3333,
  },
  {
    name: "Bila Tserkva",
    lat: 49.7956,
    lng: 30.1167,
  },
  {
    name: "Dayr az Zawr",
    lat: 35.3333,
    lng: 40.15,
  },
  {
    name: "Babylon",
    lat: 40.6924,
    lng: -73.3585,
  },
  {
    name: "Chungju",
    lat: 36.9706,
    lng: 127.9322,
  },
  {
    name: "San-Pedro",
    lat: 4.7704,
    lng: -6.64,
  },
  {
    name: "Bukit Mertajam",
    lat: 5.3617,
    lng: 100.461,
  },
  {
    name: "Ijebu-Ode",
    lat: 6.8204,
    lng: 3.92,
  },
  {
    name: "Cork",
    lat: 51.9,
    lng: -8.4731,
  },
  {
    name: "Pamplona",
    lat: 42.8167,
    lng: -1.65,
  },
  {
    name: "Guarenas",
    lat: 10.4739,
    lng: -66.5383,
  },
  {
    name: "Rostock",
    lat: 54.0833,
    lng: 12.1333,
  },
  {
    name: "Dongning",
    lat: 44.0608,
    lng: 131.1187,
  },
  {
    name: "Moratuwa",
    lat: 6.7804,
    lng: 79.88,
  },
  {
    name: "Ich'on",
    lat: 37.2792,
    lng: 127.4425,
  },
  {
    name: "Puerto Cabello",
    lat: 10.4667,
    lng: -68.0167,
  },
  {
    name: "Beersheba",
    lat: 31.2589,
    lng: 34.7978,
  },
  {
    name: "Nasim Shahr",
    lat: 35.5644,
    lng: 51.1647,
  },
  {
    name: "North Port",
    lat: 27.0577,
    lng: -82.1975,
  },
  {
    name: "La Romana",
    lat: 18.417,
    lng: -68.9666,
  },
  {
    name: "Lubuklinggau",
    lat: -3.2967,
    lng: 102.8617,
  },
  {
    name: "Qina",
    lat: 26.1667,
    lng: 32.7167,
  },
  {
    name: "Mary",
    lat: 37.6,
    lng: 61.8333,
  },
  {
    name: "Santa Cruz",
    lat: 28.4667,
    lng: -16.25,
  },
  {
    name: "Fargo",
    lat: 46.8652,
    lng: -96.8292,
  },
  {
    name: "Huangyan",
    lat: 28.65,
    lng: 121.25,
  },
  {
    name: "Santa Clara",
    lat: 22.4067,
    lng: -79.9531,
  },
  {
    name: "Kharagpur",
    lat: 22.3302,
    lng: 87.3237,
  },
  {
    name: "Northcote",
    lat: -36.7913,
    lng: 174.7758,
  },
  {
    name: "Waitakere",
    lat: -36.849,
    lng: 174.543,
  },
  {
    name: "Lobito",
    lat: -12.37,
    lng: 13.5412,
  },
  {
    name: "Monywa",
    lat: 22.1083,
    lng: 95.1358,
  },
  {
    name: "Dindigul",
    lat: 10.35,
    lng: 77.95,
  },
  {
    name: "Morogoro",
    lat: -6.8242,
    lng: 37.6633,
  },
  {
    name: "Green Bay",
    lat: 44.515,
    lng: -87.9896,
  },
  {
    name: "Portoviejo",
    lat: -1.0544,
    lng: -80.4544,
  },
  {
    name: "Pingzhen",
    lat: 24.9439,
    lng: 121.2161,
  },
  {
    name: "Linz",
    lat: 48.3,
    lng: 14.2833,
  },
  {
    name: "Trieste",
    lat: 45.6361,
    lng: 13.8042,
  },
  {
    name: "Sacala",
    lat: -14.45,
    lng: 40.6667,
  },
  {
    name: "Itami",
    lat: 34.7867,
    lng: 135.4056,
  },
  {
    name: "Phan Thiet",
    lat: 10.9375,
    lng: 108.1583,
  },
  {
    name: "Kalemie",
    lat: -5.9147,
    lng: 29.1939,
  },
  {
    name: "Biskra",
    lat: 34.85,
    lng: 5.7333,
  },
  {
    name: "Ingraj Bazar",
    lat: 25,
    lng: 88.15,
  },
  {
    name: "Bani Suwayf",
    lat: 29.0667,
    lng: 31.0833,
  },
  {
    name: "Ellore",
    lat: 16.7,
    lng: 81.1,
  },
  {
    name: "Mossoro",
    lat: -5.19,
    lng: -37.34,
  },
  {
    name: "Mytishchi",
    lat: 55.9167,
    lng: 37.7333,
  },
  {
    name: "Zanzibar",
    lat: -6.1667,
    lng: 39.2,
  },
  {
    name: "Jiutai",
    lat: 44.1447,
    lng: 125.8443,
  },
  {
    name: "Qa'em Shahr",
    lat: 36.4611,
    lng: 52.8606,
  },
  {
    name: "Bolu",
    lat: 40.7333,
    lng: 31.6,
  },
  {
    name: "Amarillo",
    lat: 35.1988,
    lng: -101.8311,
  },
  {
    name: "Ziguinchor",
    lat: 12.5833,
    lng: -16.2667,
  },
  {
    name: "Ternate",
    lat: 0.7833,
    lng: 127.3667,
  },
  {
    name: "Puqi",
    lat: 29.7204,
    lng: 113.88,
  },
  {
    name: "Sete Lagoas",
    lat: -19.4496,
    lng: -44.25,
  },
  {
    name: "Bene Beraq",
    lat: 32.0807,
    lng: 34.8338,
  },
  {
    name: "Torun",
    lat: 53.0167,
    lng: 18.6167,
  },
  {
    name: "Coquimbo",
    lat: -29.9532,
    lng: -71.338,
  },
  {
    name: "Mandi Burewala",
    lat: 30.15,
    lng: 72.6833,
  },
  {
    name: "Kamirenjaku",
    lat: 35.6833,
    lng: 139.5594,
  },
  {
    name: "Marawi City",
    lat: 8,
    lng: 124.3,
  },
  {
    name: "Erfurt",
    lat: 50.9787,
    lng: 11.0328,
  },
  {
    name: "Portland",
    lat: 43.6773,
    lng: -70.2715,
  },
  {
    name: "Matsue",
    lat: 35.4681,
    lng: 133.0486,
  },
  {
    name: "Biysk",
    lat: 52.5167,
    lng: 85.1667,
  },
  {
    name: "Charleroi",
    lat: 50.4167,
    lng: 4.4442,
  },
  {
    name: "Kassel",
    lat: 51.3158,
    lng: 9.4979,
  },
  {
    name: "Poza Rica de Hidalgo",
    lat: 20.5333,
    lng: -97.45,
  },
  {
    name: "Tanjungpinang",
    lat: 0.9188,
    lng: 104.4554,
  },
  {
    name: "Zhubei",
    lat: 24.8333,
    lng: 121.0119,
  },
  {
    name: "Djougou",
    lat: 9.7004,
    lng: 1.68,
  },
  {
    name: "Luxor",
    lat: 25.6969,
    lng: 32.6422,
  },
  {
    name: "Huntington",
    lat: 40.8522,
    lng: -73.3824,
  },
  {
    name: "Tarakan",
    lat: 3.3,
    lng: 117.6333,
  },
  {
    name: "Santa Barbara",
    lat: 34.4285,
    lng: -119.7202,
  },
  {
    name: "Gainesville",
    lat: 29.6804,
    lng: -82.3458,
  },
  {
    name: "Las Tunas",
    lat: 20.9667,
    lng: -76.95,
  },
  {
    name: "Lyubertsy",
    lat: 55.6814,
    lng: 37.8939,
  },
  {
    name: "Sosnowiec",
    lat: 50.3,
    lng: 19.1667,
  },
  {
    name: "Arica",
    lat: -18.4784,
    lng: -70.3211,
  },
  {
    name: "Huacho",
    lat: -11.1083,
    lng: -77.6083,
  },
  {
    name: "Debrecen",
    lat: 47.53,
    lng: 21.6392,
  },
  {
    name: "Nandyal",
    lat: 15.48,
    lng: 78.48,
  },
  {
    name: "Cajamarca",
    lat: -7.1644,
    lng: -78.5106,
  },
  {
    name: "Croydon",
    lat: 51.3727,
    lng: -0.1099,
  },
  {
    name: "Lashkar Gah",
    lat: 31.5938,
    lng: 64.3716,
  },
  {
    name: "Yachiyo",
    lat: 35.7225,
    lng: 140.0997,
  },
  {
    name: "Haldia",
    lat: 22.0257,
    lng: 88.0583,
  },
  {
    name: "San Pablo de las Salinas",
    lat: 19.6656,
    lng: -99.0917,
  },
  {
    name: "Jacobabad",
    lat: 28.2769,
    lng: 68.4514,
  },
  {
    name: "Tokat",
    lat: 40.3097,
    lng: 36.5542,
  },
  {
    name: "Qyzylorda",
    lat: 44.8479,
    lng: 65.4999,
  },
  {
    name: "Nema",
    lat: 16.6171,
    lng: -7.25,
  },
  {
    name: "Olympia",
    lat: 47.0417,
    lng: -122.8959,
  },
  {
    name: "Gurgaon",
    lat: 28.45,
    lng: 77.02,
  },
  {
    name: "Liege",
    lat: 50.625,
    lng: 5.5907,
  },
  {
    name: "Oulu",
    lat: 65.0142,
    lng: 25.4719,
  },
  {
    name: "El Jadid",
    lat: 33.2333,
    lng: -8.5,
  },
  {
    name: "Frisco",
    lat: 33.1555,
    lng: -96.8215,
  },
  {
    name: "Isidro Casanova",
    lat: -34.7,
    lng: -58.5833,
  },
  {
    name: "Maimanah",
    lat: 35.9302,
    lng: 64.7701,
  },
  {
    name: "Yonkers",
    lat: 40.9466,
    lng: -73.8674,
  },
  {
    name: "Rio Claro",
    lat: -22.4108,
    lng: -47.5608,
  },
  {
    name: "Norwich",
    lat: 41.5495,
    lng: -72.0882,
  },
  {
    name: "Az Zawiyah",
    lat: 32.7604,
    lng: 12.72,
  },
  {
    name: "Bulandshahr",
    lat: 28.4104,
    lng: 77.8484,
  },
  {
    name: "Kasama",
    lat: -10.1996,
    lng: 31.1799,
  },
  {
    name: "Divinopolis",
    lat: -20.1495,
    lng: -44.9,
  },
  {
    name: "Puerto Cortes",
    lat: 15.8833,
    lng: -87.95,
  },
  {
    name: "Lahad Datu",
    lat: 5.03,
    lng: 118.34,
  },
  {
    name: "Bojnurd",
    lat: 37.4667,
    lng: 57.3333,
  },
  {
    name: "Spring Valley",
    lat: 36.0987,
    lng: -115.2619,
  },
  {
    name: "Pagadian",
    lat: 7.8333,
    lng: 123.4333,
  },
  {
    name: "Nagareyama",
    lat: 35.8561,
    lng: 139.9025,
  },
  {
    name: "Banja Luka",
    lat: 44.7667,
    lng: 17.1833,
  },
  {
    name: "Glendale",
    lat: 34.1818,
    lng: -118.2468,
  },
  {
    name: "Huntington Beach",
    lat: 33.696,
    lng: -118.0025,
  },
  {
    name: "Almeria",
    lat: 36.8333,
    lng: -2.45,
  },
  {
    name: "Brescia",
    lat: 45.5389,
    lng: 10.2203,
  },
  {
    name: "Baharampur",
    lat: 24.1,
    lng: 88.25,
  },
  {
    name: "Taranto",
    lat: 40.4181,
    lng: 17.2408,
  },
  {
    name: "Ashino",
    lat: 42.975,
    lng: 144.3747,
  },
  {
    name: "Talca",
    lat: -35.455,
    lng: -71.67,
  },
  {
    name: "Martapura",
    lat: -3.4135,
    lng: 114.8365,
  },
  {
    name: "Chakradharpur",
    lat: 22.7,
    lng: 85.63,
  },
  {
    name: "Deltona",
    lat: 28.905,
    lng: -81.2137,
  },
  {
    name: "Chilpancingo",
    lat: 17.55,
    lng: -99.5,
  },
  {
    name: "Naga City",
    lat: 13.6167,
    lng: 123.1667,
  },
  {
    name: "Richmond",
    lat: 49.1667,
    lng: -123.1333,
  },
  {
    name: "Holon",
    lat: 32.0167,
    lng: 34.7667,
  },
  {
    name: "Gemena",
    lat: 3.25,
    lng: 19.7667,
  },
  {
    name: "Tocuyito",
    lat: 10.0889,
    lng: -68.0922,
  },
  {
    name: "Oradea",
    lat: 47.0722,
    lng: 21.9211,
  },
  {
    name: "Legazpi City",
    lat: 13.1333,
    lng: 123.7333,
  },
  {
    name: "Hedong",
    lat: 42.5404,
    lng: 129.0039,
  },
  {
    name: "Madhyamgram",
    lat: 22.7,
    lng: 88.45,
  },
  {
    name: "Aurora",
    lat: 41.7637,
    lng: -88.2901,
  },
  {
    name: "Bhiwani",
    lat: 28.7833,
    lng: 76.1333,
  },
  {
    name: "Burhanpur",
    lat: 21.3004,
    lng: 76.13,
  },
  {
    name: "Mbanza-Ngungu",
    lat: -5.2496,
    lng: 14.86,
  },
  {
    name: "Huanuco",
    lat: -9.9294,
    lng: -76.2397,
  },
  {
    name: "Prokop'yevsk",
    lat: 53.8833,
    lng: 86.7167,
  },
  {
    name: "Rajin",
    lat: 42.3444,
    lng: 130.3844,
  },
  {
    name: "Ghandinagar",
    lat: 23.22,
    lng: 72.68,
  },
  {
    name: "Eldoret",
    lat: 0.5167,
    lng: 35.2833,
  },
  {
    name: "Tegucigalpita",
    lat: 15.78,
    lng: -86.7878,
  },
  {
    name: "Hino",
    lat: 35.6714,
    lng: 139.395,
  },
  {
    name: "Kusong",
    lat: 39.9667,
    lng: 125.1667,
  },
  {
    name: "Suhaj",
    lat: 26.5606,
    lng: 31.6917,
  },
  {
    name: "Suzuka",
    lat: 34.8822,
    lng: 136.5842,
  },
  {
    name: "Khammam",
    lat: 17.25,
    lng: 80.15,
  },
  {
    name: "Kirikkale",
    lat: 39.8417,
    lng: 33.5139,
  },
  {
    name: "Ar Raqqah",
    lat: 35.95,
    lng: 39.0167,
  },
  {
    name: "Kumagaya",
    lat: 36.1472,
    lng: 139.3886,
  },
  {
    name: "Higashi-Hiroshima",
    lat: 34.4167,
    lng: 132.7333,
  },
  {
    name: "Brikama",
    lat: 13.2804,
    lng: -16.6599,
  },
  {
    name: "Acarigua",
    lat: 9.5597,
    lng: -69.2019,
  },
  {
    name: "Hugli",
    lat: 22.9,
    lng: 88.39,
  },
  {
    name: "Viransehir",
    lat: 37.2306,
    lng: 39.7653,
  },
  {
    name: "San Luis Rio Colorado",
    lat: 32.4767,
    lng: -114.7625,
  },
  {
    name: "Iskandar",
    lat: 41.5507,
    lng: 69.6807,
  },
  {
    name: "Tempe",
    lat: 33.3881,
    lng: -111.9318,
  },
  {
    name: "Naka",
    lat: 37.4504,
    lng: 138.86,
  },
  {
    name: "Kenema",
    lat: 7.8833,
    lng: -11.1833,
  },
  {
    name: "Overland Park",
    lat: 38.887,
    lng: -94.687,
  },
  {
    name: "Bandar-e Bushehr",
    lat: 28.9667,
    lng: 50.8333,
  },
  {
    name: "Yamaguchi",
    lat: 34.1781,
    lng: 131.4739,
  },
  {
    name: "Parma",
    lat: 44.8015,
    lng: 10.328,
  },
  {
    name: "Anseong",
    lat: 37.0078,
    lng: 127.2797,
  },
  {
    name: "Yuzhno-Sakhalinsk",
    lat: 46.95,
    lng: 142.7333,
  },
  {
    name: "Richmond Hill",
    lat: 43.8667,
    lng: -79.4333,
  },
  {
    name: "Dese",
    lat: 11.1333,
    lng: 39.6333,
  },
  {
    name: "Gorontalo",
    lat: 0.5411,
    lng: 123.0594,
  },
  {
    name: "Cholula de Rivadabia",
    lat: 19.0633,
    lng: -98.3064,
  },
  {
    name: "Guacara",
    lat: 10.2261,
    lng: -67.877,
  },
  {
    name: "Grand Prairie",
    lat: 32.6872,
    lng: -97.0209,
  },
  {
    name: "Quelimane",
    lat: -17.8764,
    lng: 36.8872,
  },
  {
    name: "Tebessa",
    lat: 35.4,
    lng: 8.1167,
  },
  {
    name: "San Fernando",
    lat: 7.894,
    lng: -67.473,
  },
  {
    name: "Al Jahra'",
    lat: 29.3375,
    lng: 47.6581,
  },
  {
    name: "Karaman",
    lat: 37.1833,
    lng: 33.2167,
  },
  {
    name: "Cap-Haitien",
    lat: 19.75,
    lng: -72.2,
  },
  {
    name: "Oakville",
    lat: 43.45,
    lng: -79.6833,
  },
  {
    name: "Muar",
    lat: 2.05,
    lng: 102.56,
  },
  {
    name: "Prato",
    lat: 43.8808,
    lng: 11.0966,
  },
  {
    name: "Godoy Cruz",
    lat: -32.9167,
    lng: -68.8333,
  },
  {
    name: "Mus",
    lat: 38.7333,
    lng: 41.4911,
  },
  {
    name: "Hyesan",
    lat: 41.4,
    lng: 128.1833,
  },
  {
    name: "Kielce",
    lat: 50.8725,
    lng: 20.6319,
  },
  {
    name: "Arapiraca",
    lat: -9.7525,
    lng: -36.6611,
  },
  {
    name: "Valencia",
    lat: 7.9,
    lng: 125.0833,
  },
  {
    name: "Sunrise Manor",
    lat: 36.1785,
    lng: -115.049,
  },
  {
    name: "Aracatuba",
    lat: -21.2089,
    lng: -50.4328,
  },
  {
    name: "Swindon",
    lat: 51.56,
    lng: -1.78,
  },
  {
    name: "Guanare",
    lat: 9.0436,
    lng: -69.7489,
  },
  {
    name: "Waco",
    lat: 31.5598,
    lng: -97.1881,
  },
  {
    name: "Basildon",
    lat: 51.5761,
    lng: 0.4886,
  },
  {
    name: "Madiun",
    lat: -7.63,
    lng: 111.5231,
  },
  {
    name: "Kawara",
    lat: 35.2647,
    lng: 139.1522,
  },
  {
    name: "Gibraltar",
    lat: 36.1324,
    lng: -5.3781,
  },
  {
    name: "Valera",
    lat: 9.32,
    lng: -70.62,
  },
  {
    name: "Barrancabermeja",
    lat: 7.09,
    lng: -73.85,
  },
  {
    name: "Mahbubnagar",
    lat: 16.7333,
    lng: 77.9833,
  },
  {
    name: "Pasuruan",
    lat: -7.6406,
    lng: 112.9065,
  },
  {
    name: "Aydin",
    lat: 37.8481,
    lng: 27.8453,
  },
  {
    name: "Shibin al Kawm",
    lat: 30.592,
    lng: 30.9,
  },
  {
    name: "Armavir",
    lat: 45,
    lng: 41.1167,
  },
  {
    name: "Balakovo",
    lat: 52.039,
    lng: 47.7839,
  },
  {
    name: "Rio Grande",
    lat: -32.0495,
    lng: -52.12,
  },
  {
    name: "Batu",
    lat: -7.8672,
    lng: 112.5239,
  },
  {
    name: "Salinas",
    lat: 36.6884,
    lng: -121.6317,
  },
  {
    name: "Mwene-Ditu",
    lat: -7,
    lng: 23.45,
  },
  {
    name: "Son Tay",
    lat: 21.1382,
    lng: 105.505,
  },
  {
    name: "Ferraz de Vasconcelos",
    lat: -23.5411,
    lng: -46.3689,
  },
  {
    name: "Santa Barbara d'Oeste",
    lat: -22.7539,
    lng: -47.4139,
  },
  {
    name: "Oviedo",
    lat: 43.3634,
    lng: -5.8423,
  },
  {
    name: "Saddiqabad",
    lat: 28.3006,
    lng: 70.1302,
  },
  {
    name: "Rybinsk",
    lat: 58.05,
    lng: 38.8333,
  },
  {
    name: "Anjomachi",
    lat: 34.9667,
    lng: 137.0833,
  },
  {
    name: "Chongju",
    lat: 39.65,
    lng: 125.3333,
  },
  {
    name: "Cachoeiro de Itapemirim",
    lat: -20.8489,
    lng: -41.1128,
  },
  {
    name: "Joetsu",
    lat: 37.15,
    lng: 138.2333,
  },
  {
    name: "Saint-Denis",
    lat: -20.8789,
    lng: 55.4481,
  },
  {
    name: "Hagen",
    lat: 51.3594,
    lng: 7.475,
  },
  {
    name: "Ngaoundere",
    lat: 7.3214,
    lng: 13.5839,
  },
  {
    name: "Potosi",
    lat: -19.5833,
    lng: -65.75,
  },
  {
    name: "San Carlos City",
    lat: 15.9281,
    lng: 120.3489,
  },
  {
    name: "Pak Kret",
    lat: 13.9125,
    lng: 100.4978,
  },
  {
    name: "Waterbury",
    lat: 41.5583,
    lng: -73.0361,
  },
  {
    name: "Donghua",
    lat: 35.2175,
    lng: 106.6545,
  },
  {
    name: "Parakou",
    lat: 9.34,
    lng: 2.62,
  },
  {
    name: "Mutare",
    lat: -18.9728,
    lng: 32.6694,
  },
  {
    name: "Kofu",
    lat: 35.6667,
    lng: 138.5667,
  },
  {
    name: "Mataro",
    lat: 41.54,
    lng: 2.45,
  },
  {
    name: "Narsingdi",
    lat: 23.9,
    lng: 90.7167,
  },
  {
    name: "Araure",
    lat: 9.5667,
    lng: -69.2167,
  },
  {
    name: "Tottori",
    lat: 35.5011,
    lng: 134.235,
  },
  {
    name: "Pinar del Rio",
    lat: 22.4122,
    lng: -83.6719,
  },
  {
    name: "Clarksville",
    lat: 36.5695,
    lng: -87.342,
  },
  {
    name: "Raiganj",
    lat: 25.6167,
    lng: 88.1167,
  },
  {
    name: "Prabumulih",
    lat: -3.4328,
    lng: 104.2356,
  },
  {
    name: "Tachikawa",
    lat: 35.6939,
    lng: 139.4194,
  },
  {
    name: "Al Hasakah",
    lat: 36.5117,
    lng: 40.7422,
  },
  {
    name: "Turku",
    lat: 60.4517,
    lng: 22.27,
  },
  {
    name: "Guatire",
    lat: 10.4717,
    lng: -66.5406,
  },
  {
    name: "Iquique",
    lat: -20.2141,
    lng: -70.1524,
  },
  {
    name: "Cedar Rapids",
    lat: 41.9665,
    lng: -91.6782,
  },
  {
    name: "San Diego",
    lat: 10.2558,
    lng: -67.9539,
  },
  {
    name: "Gharyan",
    lat: 32.1669,
    lng: 13.0167,
  },
  {
    name: "Bournemouth",
    lat: 50.72,
    lng: -1.88,
  },
  {
    name: "Chaedok",
    lat: 40.6723,
    lng: 129.2027,
  },
  {
    name: "Izuo",
    lat: 34.4836,
    lng: 135.4236,
  },
  {
    name: "La Plata",
    lat: -34.9333,
    lng: -57.95,
  },
  {
    name: "Prizren",
    lat: 42.2167,
    lng: 20.7333,
  },
  {
    name: "Sioux Falls",
    lat: 43.5397,
    lng: -96.732,
  },
  {
    name: "Mainz",
    lat: 50,
    lng: 8.2711,
  },
  {
    name: "Cabo Frio",
    lat: -22.8789,
    lng: -42.0189,
  },
  {
    name: "Shendi",
    lat: 16.6805,
    lng: 33.42,
  },
  {
    name: "Reims",
    lat: 49.2628,
    lng: 4.0347,
  },
  {
    name: "Ed Damazin",
    lat: 11.7704,
    lng: 34.35,
  },
  {
    name: "Khujand",
    lat: 40.2833,
    lng: 69.6167,
  },
  {
    name: "Huntington",
    lat: 38.4109,
    lng: -82.4344,
  },
  {
    name: "Dunhuang",
    lat: 40.1411,
    lng: 94.6616,
  },
  {
    name: "Mahesana",
    lat: 23.6,
    lng: 72.4,
  },
  {
    name: "Modena",
    lat: 44.6458,
    lng: 10.9257,
  },
  {
    name: "Guri",
    lat: 37.5947,
    lng: 127.1428,
  },
  {
    name: "Jamaame",
    lat: 0.0722,
    lng: 42.7506,
  },
  {
    name: "Panabo",
    lat: 7.3,
    lng: 125.6833,
  },
  {
    name: "Adoni",
    lat: 15.63,
    lng: 77.28,
  },
  {
    name: "Temirtau",
    lat: 50.0667,
    lng: 72.9667,
  },
  {
    name: "Basel",
    lat: 47.5606,
    lng: 7.5906,
  },
  {
    name: "Yei",
    lat: 4.0904,
    lng: 30.68,
  },
  {
    name: "Santo Agostinho",
    lat: -8.2869,
    lng: -35.035,
  },
  {
    name: "Ontario",
    lat: 34.0393,
    lng: -117.6064,
  },
  {
    name: "Toyokawa",
    lat: 34.8268,
    lng: 137.3759,
  },
  {
    name: "Luzhang",
    lat: 25.8519,
    lng: 98.8562,
  },
  {
    name: "Hagerstown",
    lat: 39.6401,
    lng: -77.7217,
  },
  {
    name: "Al Qamishli",
    lat: 37.05,
    lng: 41.2167,
  },
  {
    name: "Manzanillo",
    lat: 19.0522,
    lng: -104.3158,
  },
  {
    name: "Erie",
    lat: 42.1168,
    lng: -80.0733,
  },
  {
    name: "Vancouver",
    lat: 45.6366,
    lng: -122.5967,
  },
  {
    name: "Nampa",
    lat: 43.5845,
    lng: -116.5631,
  },
  {
    name: "Fardis",
    lat: 35.7247,
    lng: 50.9883,
  },
  {
    name: "Fianarantsoa",
    lat: -21.4333,
    lng: 47.0833,
  },
  {
    name: "Banjar",
    lat: -7.3667,
    lng: 108.5333,
  },
  {
    name: "Severodvinsk",
    lat: 64.5667,
    lng: 39.85,
  },
  {
    name: "Rzeszow",
    lat: 50.05,
    lng: 22,
  },
  {
    name: "Calbayog City",
    lat: 12.0667,
    lng: 124.6,
  },
  {
    name: "Bhusaval",
    lat: 21.02,
    lng: 75.83,
  },
  {
    name: "Trondheim",
    lat: 63.44,
    lng: 10.4,
  },
  {
    name: "Uji",
    lat: 34.8808,
    lng: 135.7794,
  },
  {
    name: "Passo Fundo",
    lat: -28.25,
    lng: -52.42,
  },
  {
    name: "Aqtau",
    lat: 43.65,
    lng: 51.15,
  },
  {
    name: "Reggio di Calabria",
    lat: 38.1144,
    lng: 15.65,
  },
  {
    name: "Nis",
    lat: 43.3192,
    lng: 21.8961,
  },
  {
    name: "Abakan",
    lat: 53.7167,
    lng: 91.4167,
  },
  {
    name: "Burlington",
    lat: 43.3167,
    lng: -79.8,
  },
  {
    name: "Bahraigh",
    lat: 27.6204,
    lng: 81.6699,
  },
  {
    name: "Bo",
    lat: 7.9564,
    lng: -11.74,
  },
  {
    name: "Worthing",
    lat: 50.8147,
    lng: -0.3714,
  },
  {
    name: "Pinrang",
    lat: -3.7857,
    lng: 119.6522,
  },
  {
    name: "Spartanburg",
    lat: 34.9437,
    lng: -81.9257,
  },
  {
    name: "Braila",
    lat: 45.2692,
    lng: 27.9575,
  },
  {
    name: "Nova Friburgo",
    lat: -22.26,
    lng: -42.54,
  },
  {
    name: "Gastonia",
    lat: 35.2494,
    lng: -81.1853,
  },
  {
    name: "Amadora",
    lat: 38.75,
    lng: -9.2333,
  },
  {
    name: "Braga",
    lat: 41.5333,
    lng: -8.4167,
  },
  {
    name: "Fort Lauderdale",
    lat: 26.1412,
    lng: -80.1464,
  },
  {
    name: "Kabankalan",
    lat: 9.9833,
    lng: 122.8167,
  },
  {
    name: "Tonk",
    lat: 26.1505,
    lng: 75.79,
  },
  {
    name: "Berazategui",
    lat: -34.7679,
    lng: -58.2133,
  },
  {
    name: "Khowy",
    lat: 38.5503,
    lng: 44.9519,
  },
  {
    name: "Sirsa",
    lat: 29.4904,
    lng: 75.03,
  },
  {
    name: "Narashino",
    lat: 35.6808,
    lng: 140.0267,
  },
  {
    name: "Tangail",
    lat: 24.25,
    lng: 89.92,
  },
  {
    name: "Jaunpur",
    lat: 25.7333,
    lng: 82.6833,
  },
  {
    name: "Saarbrucken",
    lat: 49.2333,
    lng: 7,
  },
  {
    name: "Santo Tomas",
    lat: 14.0833,
    lng: 121.1833,
  },
  {
    name: "Petropavlovsk-Kamchatskiy",
    lat: 53.0167,
    lng: 158.65,
  },
  {
    name: "Sittwe",
    lat: 20.1444,
    lng: 92.8969,
  },
  {
    name: "Phan Rang-Thap Cham",
    lat: 11.5643,
    lng: 108.9886,
  },
  {
    name: "Jima",
    lat: 7.6667,
    lng: 36.8333,
  },
  {
    name: "Townsville",
    lat: -19.2564,
    lng: 146.8183,
  },
  {
    name: "Lhokseumawe",
    lat: 5.18,
    lng: 97.1506,
  },
  {
    name: "Gliwice",
    lat: 50.2976,
    lng: 18.6766,
  },
  {
    name: "Funtua",
    lat: 11.5204,
    lng: 7.32,
  },
  {
    name: "Hinthada",
    lat: 17.6483,
    lng: 95.4679,
  },
  {
    name: "La Rioja",
    lat: -29.4131,
    lng: -66.8558,
  },
  {
    name: "Canakkale",
    lat: 40.15,
    lng: 26.4,
  },
  {
    name: "Madanapalle",
    lat: 13.55,
    lng: 78.5,
  },
  {
    name: "Palopo",
    lat: -3,
    lng: 120.2,
  },
  {
    name: "Ayacucho",
    lat: -13.1631,
    lng: -74.2244,
  },
  {
    name: "Tunja",
    lat: 5.5403,
    lng: -73.3614,
  },
  {
    name: "Obuase",
    lat: 6.2,
    lng: -1.6833,
  },
  {
    name: "Alleppey",
    lat: 9.5004,
    lng: 76.37,
  },
  {
    name: "Ipswich",
    lat: 52.0594,
    lng: 1.1556,
  },
  {
    name: "Boma",
    lat: -5.85,
    lng: 13.05,
  },
  {
    name: "Tiaret",
    lat: 35.3667,
    lng: 1.3167,
  },
  {
    name: "Edirne",
    lat: 41.6781,
    lng: 26.5594,
  },
  {
    name: "Chicoloapan",
    lat: 19.4167,
    lng: -98.9,
  },
  {
    name: "Longjing",
    lat: 42.77,
    lng: 129.4197,
  },
  {
    name: "Split",
    lat: 43.51,
    lng: 16.45,
  },
  {
    name: "Lorain",
    lat: 41.4409,
    lng: -82.184,
  },
  {
    name: "Klerksdorp",
    lat: -26.8667,
    lng: 26.6667,
  },
  {
    name: "Murfreesboro",
    lat: 35.8492,
    lng: -86.4119,
  },
  {
    name: "High Point",
    lat: 35.9907,
    lng: -79.9938,
  },
  {
    name: "Hamm",
    lat: 51.6667,
    lng: 7.8167,
  },
  {
    name: "Tarija",
    lat: -21.5317,
    lng: -64.7311,
  },
  {
    name: "Al `Arish",
    lat: 31.1249,
    lng: 33.8006,
  },
  {
    name: "El Oued",
    lat: 33.3704,
    lng: 6.86,
  },
  {
    name: "Paita",
    lat: -5.0667,
    lng: -81.1,
  },
  {
    name: "Newport News",
    lat: 37.1051,
    lng: -76.5185,
  },
  {
    name: "Torbali",
    lat: 38.1619,
    lng: 27.3583,
  },
  {
    name: "Potsdam",
    lat: 52.4,
    lng: 13.0667,
  },
  {
    name: "Langsa",
    lat: 4.4667,
    lng: 97.95,
  },
  {
    name: "Bade",
    lat: 24.9575,
    lng: 121.2989,
  },
  {
    name: "Bida",
    lat: 9.0804,
    lng: 6.01,
  },
  {
    name: "Salalah",
    lat: 17.0197,
    lng: 54.0897,
  },
  {
    name: "Matosinhos",
    lat: 41.2077,
    lng: -8.6674,
  },
  {
    name: "Baranavichy",
    lat: 53.1167,
    lng: 25.9833,
  },
  {
    name: "Birjand",
    lat: 32.8667,
    lng: 59.2,
  },
  {
    name: "Vellore",
    lat: 12.9204,
    lng: 79.15,
  },
  {
    name: "Dam Dam",
    lat: 22.62,
    lng: 88.42,
  },
  {
    name: "Bejaia",
    lat: 36.75,
    lng: 5.0667,
  },
  {
    name: "Rancho Cucamonga",
    lat: 34.1248,
    lng: -117.5666,
  },
  {
    name: "Noril'sk",
    lat: 69.3333,
    lng: 88.2167,
  },
  {
    name: "Santander",
    lat: 43.4667,
    lng: -3.8,
  },
  {
    name: "Hemet",
    lat: 33.7341,
    lng: -116.9969,
  },
  {
    name: "Yangmei",
    lat: 24.9167,
    lng: 121.15,
  },
  {
    name: "Ciudad Valles",
    lat: 21.9833,
    lng: -99.0167,
  },
  {
    name: "Kadugli",
    lat: 11.01,
    lng: 29.7,
  },
  {
    name: "Les Cayes",
    lat: 18.2004,
    lng: -73.75,
  },
  {
    name: "Hitachi",
    lat: 36.6,
    lng: 140.65,
  },
  {
    name: "Sunderland",
    lat: 54.9061,
    lng: -1.3811,
  },
  {
    name: "Letpandan",
    lat: 17.7866,
    lng: 95.7507,
  },
  {
    name: "Kamakurayama",
    lat: 35.3197,
    lng: 139.5525,
  },
  {
    name: "Zabrze",
    lat: 50.3,
    lng: 18.7833,
  },
  {
    name: "Almada",
    lat: 38.6803,
    lng: -9.1583,
  },
  {
    name: "Ilford",
    lat: 51.5588,
    lng: 0.0855,
  },
  {
    name: "Cuautla",
    lat: 18.8167,
    lng: -98.95,
  },
  {
    name: "Santa Cruz",
    lat: 36.9789,
    lng: -122.0346,
  },
  {
    name: "Saint-Louis",
    lat: 16.0333,
    lng: -16.5,
  },
  {
    name: "Barra Mansa",
    lat: -22.56,
    lng: -44.17,
  },
  {
    name: "Ait Melloul",
    lat: 30.3342,
    lng: -9.4972,
  },
  {
    name: "Plzen",
    lat: 49.7414,
    lng: 13.3825,
  },
  {
    name: "Ciudad del Carmen",
    lat: 18.6333,
    lng: -91.8333,
  },
  {
    name: "Danbury",
    lat: 41.4016,
    lng: -73.471,
  },
  {
    name: "Toulon",
    lat: 43.1258,
    lng: 5.9306,
  },
  {
    name: "Peoria",
    lat: 33.7844,
    lng: -112.2989,
  },
  {
    name: "Oeiras",
    lat: 38.697,
    lng: -9.3017,
  },
  {
    name: "Dagupan City",
    lat: 16.0333,
    lng: 120.3333,
  },
  {
    name: "Eregli",
    lat: 41.2583,
    lng: 31.425,
  },
  {
    name: "Oceanside",
    lat: 33.2247,
    lng: -117.3083,
  },
  {
    name: "Shibirghan",
    lat: 36.665,
    lng: 65.752,
  },
  {
    name: "Chandannagar",
    lat: 22.8667,
    lng: 88.3833,
  },
  {
    name: "Harar",
    lat: 9.32,
    lng: 42.15,
  },
  {
    name: "Middlesbrough",
    lat: 54.5767,
    lng: -1.2355,
  },
  {
    name: "Tyre",
    lat: 33.2667,
    lng: 35.2,
  },
  {
    name: "Koronadal",
    lat: 6.5,
    lng: 124.85,
  },
  {
    name: "Olsztyn",
    lat: 53.78,
    lng: 20.4942,
  },
  {
    name: "Cuddalore",
    lat: 11.75,
    lng: 79.75,
  },
  {
    name: "Maragheh",
    lat: 37.3833,
    lng: 46.2667,
  },
  {
    name: "Obiraki",
    lat: 40.57,
    lng: 140.47,
  },
  {
    name: "Tebingtinggi",
    lat: 3.3283,
    lng: 99.1625,
  },
  {
    name: "Comitan",
    lat: 16.2511,
    lng: -92.1342,
  },
  {
    name: "San Francisco de Macoris",
    lat: 19.3,
    lng: -70.25,
  },
  {
    name: "Takaoka",
    lat: 42.6504,
    lng: 141.55,
  },
  {
    name: "Sirjan",
    lat: 29.47,
    lng: 55.73,
  },
  {
    name: "Tanauan",
    lat: 14.0833,
    lng: 121.15,
  },
  {
    name: "Menemen",
    lat: 38.6,
    lng: 27.0667,
  },
  {
    name: "Malaybalay",
    lat: 8.1575,
    lng: 125.1278,
  },
  {
    name: "Elk Grove",
    lat: 38.416,
    lng: -121.3842,
  },
  {
    name: "Syzran'",
    lat: 53.1667,
    lng: 48.4667,
  },
  {
    name: "Carupano",
    lat: 10.6722,
    lng: -63.2403,
  },
  {
    name: "Saint-Etienne",
    lat: 45.4347,
    lng: 4.3903,
  },
  {
    name: "Lagos de Moreno",
    lat: 21.3564,
    lng: -101.9292,
  },
  {
    name: "Leon",
    lat: 12.4333,
    lng: -86.8833,
  },
  {
    name: "Chirala",
    lat: 15.82,
    lng: 80.35,
  },
  {
    name: "Titagarh",
    lat: 22.74,
    lng: 88.37,
  },
  {
    name: "Bielsko-Biala",
    lat: 49.8225,
    lng: 19.0444,
  },
  {
    name: "Beppucho",
    lat: 42.9304,
    lng: 143.17,
  },
  {
    name: "Bytom",
    lat: 50.347,
    lng: 18.923,
  },
  {
    name: "Linjiang",
    lat: 41.8082,
    lng: 126.9137,
  },
  {
    name: "Ha Long",
    lat: 20.95,
    lng: 107.0833,
  },
  {
    name: "Deo",
    lat: 24.6561,
    lng: 84.4356,
  },
  {
    name: "Pembroke Pines",
    lat: 26.0128,
    lng: -80.3382,
  },
  {
    name: "Tlemcen",
    lat: 34.8828,
    lng: -1.3167,
  },
  {
    name: "Albacete",
    lat: 38.9956,
    lng: -1.8558,
  },
  {
    name: "Castellon de la Plana",
    lat: 39.97,
    lng: -0.05,
  },
  {
    name: "Shahin Shahr",
    lat: 32.8639,
    lng: 51.5475,
  },
  {
    name: "Comodoro Rivadavia",
    lat: -45.8667,
    lng: -67.5,
  },
  {
    name: "Ludwigshafen",
    lat: 49.4811,
    lng: 8.4353,
  },
  {
    name: "Vallejo",
    lat: 38.1133,
    lng: -122.2358,
  },
  {
    name: "Escuintla",
    lat: 14.305,
    lng: -90.785,
  },
  {
    name: "Izumo",
    lat: 35.3681,
    lng: 132.755,
  },
  {
    name: "Bertoua",
    lat: 4.5833,
    lng: 13.6833,
  },
  {
    name: "Banyuwangi",
    lat: -8.195,
    lng: 114.3696,
  },
  {
    name: "Mulheim",
    lat: 51.4283,
    lng: 6.8789,
  },
  {
    name: "Sacaba",
    lat: -17.4042,
    lng: -66.0408,
  },
  {
    name: "Carpina",
    lat: -7.8508,
    lng: -35.2547,
  },
  {
    name: "Banha",
    lat: 30.4628,
    lng: 31.1797,
  },
  {
    name: "Barrie",
    lat: 44.3711,
    lng: -79.6769,
  },
  {
    name: "Krasnogorsk",
    lat: 55.8167,
    lng: 37.3333,
  },
  {
    name: "Kaolack",
    lat: 14.152,
    lng: -16.0726,
  },
  {
    name: "Sakura",
    lat: 35.7239,
    lng: 140.2239,
  },
  {
    name: "Burgos",
    lat: 42.35,
    lng: -3.6822,
  },
  {
    name: "Guanajuato",
    lat: 21.0178,
    lng: -101.2567,
  },
  {
    name: "Reggio Emilia",
    lat: 44.7,
    lng: 10.6333,
  },
  {
    name: "Francisco Morato",
    lat: -23.2817,
    lng: -46.7425,
  },
  {
    name: "Garden Grove",
    lat: 33.7787,
    lng: -117.9601,
  },
  {
    name: "Volgodonsk",
    lat: 47.5167,
    lng: 42.15,
  },
  {
    name: "Bago",
    lat: 10.5388,
    lng: 122.8384,
  },
  {
    name: "Niiza",
    lat: 35.7933,
    lng: 139.5653,
  },
  {
    name: "Toledo",
    lat: 10.3833,
    lng: 123.65,
  },
  {
    name: "Kamensk-Ural'skiy",
    lat: 56.4,
    lng: 61.9333,
  },
  {
    name: "Kohat",
    lat: 33.5869,
    lng: 71.4414,
  },
  {
    name: "Nishio",
    lat: 34.8667,
    lng: 137.0667,
  },
  {
    name: "Loja",
    lat: -3.9906,
    lng: -79.205,
  },
  {
    name: "Cuauhtemoc",
    lat: 28.405,
    lng: -106.8667,
  },
  {
    name: "Medford",
    lat: 42.3372,
    lng: -122.8537,
  },
  {
    name: "Hamilton",
    lat: -37.7833,
    lng: 175.2833,
  },
  {
    name: "Ussuriysk",
    lat: 43.8,
    lng: 131.95,
  },
  {
    name: "Uvira",
    lat: -3.4044,
    lng: 29.1379,
  },
  {
    name: "Portmore",
    lat: 17.9667,
    lng: -76.8667,
  },
  {
    name: "Machilipatnam",
    lat: 16.1667,
    lng: 81.1333,
  },
  {
    name: "Bordj Bou Arreridj",
    lat: 36.0667,
    lng: 4.7667,
  },
  {
    name: "Nukus",
    lat: 42.4647,
    lng: 59.6022,
  },
  {
    name: "Malayer",
    lat: 34.2942,
    lng: 48.82,
  },
  {
    name: "N'Zerekore",
    lat: 7.76,
    lng: -8.83,
  },
  {
    name: "Cary",
    lat: 35.782,
    lng: -78.8191,
  },
  {
    name: "Kluang",
    lat: 2.0383,
    lng: 103.3179,
  },
  {
    name: "Novocherkassk",
    lat: 47.4222,
    lng: 40.0939,
  },
  {
    name: "Marysville",
    lat: 48.0809,
    lng: -122.1561,
  },
  {
    name: "Digos",
    lat: 6.75,
    lng: 125.35,
  },
  {
    name: "San Luis",
    lat: -33.2994,
    lng: -66.3392,
  },
  {
    name: "Corona",
    lat: 33.8616,
    lng: -117.5649,
  },
  {
    name: "Oldenburg",
    lat: 53.1439,
    lng: 8.2139,
  },
  {
    name: "Medinipur",
    lat: 22.4333,
    lng: 87.3333,
  },
  {
    name: "Fenglu",
    lat: 24.6728,
    lng: 102.9149,
  },
  {
    name: "Al Marj",
    lat: 32.5005,
    lng: 20.83,
  },
  {
    name: "Sosan",
    lat: 36.7817,
    lng: 126.4522,
  },
  {
    name: "Ocala",
    lat: 29.178,
    lng: -82.1511,
  },
  {
    name: "Sonsonate",
    lat: 13.72,
    lng: -89.73,
  },
  {
    name: "Gondomar",
    lat: 41.15,
    lng: -8.5333,
  },
  {
    name: "Sarh",
    lat: 9.15,
    lng: 18.3833,
  },
  {
    name: "Jamalpur",
    lat: 24.9004,
    lng: 89.95,
  },
  {
    name: "Fredericksburg",
    lat: 38.2992,
    lng: -77.4872,
  },
  {
    name: "Sobral",
    lat: -3.6861,
    lng: -40.3497,
  },
  {
    name: "Ambato",
    lat: -1.2417,
    lng: -78.6197,
  },
  {
    name: "Baramula",
    lat: 34.2,
    lng: 74.34,
  },
  {
    name: "Roxas City",
    lat: 11.5833,
    lng: 122.75,
  },
  {
    name: "Sorsogon",
    lat: 12.9667,
    lng: 124,
  },
  {
    name: "Oyama",
    lat: 36.3147,
    lng: 139.8003,
  },
  {
    name: "Takaoka",
    lat: 36.75,
    lng: 137.0333,
  },
  {
    name: "Tanjungbalai",
    lat: 2.9667,
    lng: 99.8,
  },
  {
    name: "Huich'on",
    lat: 40.1711,
    lng: 126.2758,
  },
  {
    name: "Uppsala",
    lat: 59.8498,
    lng: 17.6389,
  },
  {
    name: "Itapecerica da Serra",
    lat: -23.7172,
    lng: -46.8494,
  },
  {
    name: "Sao Caetano do Sul",
    lat: -23.6228,
    lng: -46.5508,
  },
  {
    name: "Zlatoust",
    lat: 55.1667,
    lng: 59.6667,
  },
  {
    name: "Rustenburg",
    lat: -25.65,
    lng: 27.24,
  },
  {
    name: "Patra",
    lat: 38.25,
    lng: 21.7333,
  },
  {
    name: "Riohacha",
    lat: 11.5442,
    lng: -72.9069,
  },
  {
    name: "Nador",
    lat: 35.1667,
    lng: -2.9333,
  },
  {
    name: "Iwata",
    lat: 34.7178,
    lng: 137.8514,
  },
  {
    name: "Gainesville",
    lat: 34.2903,
    lng: -83.8301,
  },
  {
    name: "Itu",
    lat: -23.2642,
    lng: -47.2992,
  },
  {
    name: "Fatehpur",
    lat: 25.8804,
    lng: 80.8,
  },
  {
    name: "`Ar`ar",
    lat: 30.9833,
    lng: 41.0167,
  },
  {
    name: "Ha Tinh",
    lat: 18.3428,
    lng: 105.9058,
  },
  {
    name: "Al Kufah",
    lat: 32.03,
    lng: 44.4,
  },
  {
    name: "Kimberley",
    lat: -28.7386,
    lng: 24.7586,
  },
  {
    name: "Tenali",
    lat: 16.243,
    lng: 80.64,
  },
  {
    name: "Skikda",
    lat: 36.8667,
    lng: 6.9,
  },
  {
    name: "Nantou",
    lat: 23.9167,
    lng: 120.6833,
  },
  {
    name: "Siirt",
    lat: 37.8417,
    lng: 41.9458,
  },
  {
    name: "Kuytun",
    lat: 44.4196,
    lng: 84.9012,
  },
  {
    name: "Osnabruck",
    lat: 52.2789,
    lng: 8.0431,
  },
  {
    name: "Rio Largo",
    lat: -9.4783,
    lng: -35.8533,
  },
  {
    name: "Korfez",
    lat: 40.7706,
    lng: 29.7661,
  },
  {
    name: "Perugia",
    lat: 43.1121,
    lng: 12.3888,
  },
  {
    name: "Udipi",
    lat: 13.3322,
    lng: 74.7461,
  },
  {
    name: "Oshawa",
    lat: 43.9,
    lng: -78.85,
  },
  {
    name: "Klaipeda",
    lat: 55.7075,
    lng: 21.1428,
  },
  {
    name: "Leverkusen",
    lat: 51.0333,
    lng: 6.9833,
  },
  {
    name: "Tulua",
    lat: 4.0904,
    lng: -76.21,
  },
  {
    name: "Idlib",
    lat: 35.9333,
    lng: 36.6333,
  },
  {
    name: "Warrington",
    lat: 53.3917,
    lng: -2.5972,
  },
  {
    name: "Sitalpur",
    lat: 27.63,
    lng: 80.75,
  },
  {
    name: "Cienfuegos",
    lat: 22.1456,
    lng: -80.4364,
  },
  {
    name: "Bayamon",
    lat: 18.3793,
    lng: -66.1635,
  },
  {
    name: "Proddatur",
    lat: 14.73,
    lng: 78.55,
  },
  {
    name: "Conjeeveram",
    lat: 12.8308,
    lng: 79.7078,
  },
  {
    name: "Saqqez",
    lat: 36.2497,
    lng: 46.2733,
  },
  {
    name: "Dourados",
    lat: -22.23,
    lng: -54.81,
  },
  {
    name: "Huddersfield",
    lat: 53.645,
    lng: -1.7798,
  },
  {
    name: "Fukang",
    lat: 44.1523,
    lng: 87.9793,
  },
  {
    name: "Ube",
    lat: 33.9517,
    lng: 131.2467,
  },
  {
    name: "Slough",
    lat: 51.51,
    lng: -0.59,
  },
  {
    name: "Bhisho",
    lat: -32.8494,
    lng: 27.4381,
  },
  {
    name: "Chillan",
    lat: -36.6067,
    lng: -72.1033,
  },
  {
    name: "Enterprise",
    lat: 36.0164,
    lng: -115.2208,
  },
  {
    name: "Odense",
    lat: 55.4004,
    lng: 10.3833,
  },
  {
    name: "Metro",
    lat: -5.1167,
    lng: 105.3,
  },
  {
    name: "Ramat Gan",
    lat: 32.0833,
    lng: 34.8167,
  },
  {
    name: "Muridke",
    lat: 31.802,
    lng: 74.255,
  },
  {
    name: "Ipswich",
    lat: -27.6167,
    lng: 152.7667,
  },
  {
    name: "Ruse",
    lat: 43.8475,
    lng: 25.9544,
  },
  {
    name: "Myingyan",
    lat: 21.4618,
    lng: 95.3914,
  },
  {
    name: "Chapeco",
    lat: -27.1,
    lng: -52.64,
  },
  {
    name: "Tangjin",
    lat: 36.8944,
    lng: 126.6297,
  },
  {
    name: "Tema",
    lat: 5.6667,
    lng: -0.0167,
  },
  {
    name: "`Unayzah",
    lat: 26.084,
    lng: 43.994,
  },
  {
    name: "Barreiras",
    lat: -12.1528,
    lng: -44.99,
  },
  {
    name: "Piedras Negras",
    lat: 28.7,
    lng: -100.5231,
  },
  {
    name: "Itapetininga",
    lat: -23.5917,
    lng: -48.0531,
  },
  {
    name: "Pocheon",
    lat: 37.8944,
    lng: 127.1992,
  },
  {
    name: "Turgutlu",
    lat: 38.5,
    lng: 27.7,
  },
  {
    name: "Navsari",
    lat: 20.8504,
    lng: 72.92,
  },
  {
    name: "Wau",
    lat: 7.7,
    lng: 27.9833,
  },
  {
    name: "Golcuk",
    lat: 40.6667,
    lng: 29.8333,
  },
  {
    name: "Muzaffargarh",
    lat: 30.0703,
    lng: 71.1933,
  },
  {
    name: "Jizzax",
    lat: 40.1167,
    lng: 67.85,
  },
  {
    name: "Atyrau",
    lat: 47.1167,
    lng: 51.8833,
  },
  {
    name: "Simao",
    lat: 22.7807,
    lng: 100.9782,
  },
  {
    name: "Mostar",
    lat: 43.3494,
    lng: 17.8125,
  },
  {
    name: "El Geneina",
    lat: 13.45,
    lng: 22.44,
  },
  {
    name: "Bandar-e Mahshahr",
    lat: 30.5589,
    lng: 49.1981,
  },
  {
    name: "Manchester",
    lat: 42.9848,
    lng: -71.4447,
  },
  {
    name: "Anaco",
    lat: 9.4333,
    lng: -64.4667,
  },
  {
    name: "Sullana",
    lat: -4.9,
    lng: -80.7,
  },
  {
    name: "Godhra",
    lat: 22.7755,
    lng: 73.6149,
  },
  {
    name: "Zemun",
    lat: 44.85,
    lng: 20.4,
  },
  {
    name: "Mahabad",
    lat: 36.7704,
    lng: 45.72,
  },
  {
    name: "Budaun",
    lat: 28.03,
    lng: 79.09,
  },
  {
    name: "Chittoor",
    lat: 13.2,
    lng: 79.1167,
  },
  {
    name: "Andong",
    lat: 36.5656,
    lng: 128.725,
  },
  {
    name: "Ash Shatrah",
    lat: 31.4175,
    lng: 46.1772,
  },
  {
    name: "Mocamedes",
    lat: -15.1953,
    lng: 12.1508,
  },
  {
    name: "Rafsanjan",
    lat: 30.4,
    lng: 56,
  },
  {
    name: "Benoni",
    lat: -26.1883,
    lng: 28.3206,
  },
  {
    name: "Heidelberg",
    lat: 49.4122,
    lng: 8.71,
  },
  {
    name: "Al Ghardaqah",
    lat: 27.2578,
    lng: 33.8117,
  },
  {
    name: "Salihli",
    lat: 38.4811,
    lng: 28.1392,
  },
  {
    name: "Elektrostal'",
    lat: 55.8,
    lng: 38.45,
  },
  {
    name: "Bontang",
    lat: 0.1333,
    lng: 117.5,
  },
  {
    name: "Dong Hoi",
    lat: 17.4833,
    lng: 106.6,
  },
  {
    name: "Krishnanagar",
    lat: 23.4,
    lng: 88.5,
  },
  {
    name: "Szeged",
    lat: 46.25,
    lng: 20.1667,
  },
  {
    name: "Sherbrooke",
    lat: 45.4,
    lng: -71.9,
  },
  {
    name: "Solingen",
    lat: 51.1667,
    lng: 7.0833,
  },
  {
    name: "Tacheng",
    lat: 46.7468,
    lng: 82.979,
  },
  {
    name: "Dhamar",
    lat: 14.55,
    lng: 44.4017,
  },
  {
    name: "Jose Maria Ezeiza",
    lat: -34.8333,
    lng: -58.5167,
  },
  {
    name: "Braganca Paulista",
    lat: -22.9189,
    lng: -46.5425,
  },
  {
    name: "Ra's al Khaymah",
    lat: 25.7915,
    lng: 55.9428,
  },
  {
    name: "Pindamonhangaba",
    lat: -22.9239,
    lng: -45.4617,
  },
  {
    name: "Dijon",
    lat: 47.3167,
    lng: 5.0167,
  },
  {
    name: "Livorno",
    lat: 43.55,
    lng: 10.3167,
  },
  {
    name: "Khost",
    lat: 33.3333,
    lng: 69.9167,
  },
  {
    name: "Darmstadt",
    lat: 49.8667,
    lng: 8.65,
  },
  {
    name: "Saint-Marc",
    lat: 19.1167,
    lng: -72.7,
  },
  {
    name: "Arad",
    lat: 46.1667,
    lng: 21.3167,
  },
  {
    name: "Khanpur",
    lat: 28.6471,
    lng: 70.662,
  },
  {
    name: "Matsuzaka",
    lat: 34.5781,
    lng: 136.5275,
  },
  {
    name: "Taunggyi",
    lat: 20.7833,
    lng: 96.9667,
  },
  {
    name: "Bingol",
    lat: 38.8861,
    lng: 40.5017,
  },
  {
    name: "San Nicolas de los Arroyos",
    lat: -33.3333,
    lng: -60.2167,
  },
  {
    name: "Huaycan",
    lat: -12.0139,
    lng: -76.825,
  },
  {
    name: "Tiraspol",
    lat: 46.8319,
    lng: 29.5767,
  },
  {
    name: "Shahr-e Kord",
    lat: 32.3256,
    lng: 50.8644,
  },
  {
    name: "Talas",
    lat: 38.6833,
    lng: 35.5667,
  },
  {
    name: "Punta del Este",
    lat: -34.97,
    lng: -54.95,
  },
  {
    name: "Ekibastuz",
    lat: 51.7298,
    lng: 75.3266,
  },
  {
    name: "Trece Martires City",
    lat: 14.2833,
    lng: 120.8667,
  },
  {
    name: "Ogaki",
    lat: 35.3594,
    lng: 136.6128,
  },
  {
    name: "Hat Yai",
    lat: 7.0167,
    lng: 100.4667,
  },
  {
    name: "Chirchiq",
    lat: 41.4667,
    lng: 69.5833,
  },
  {
    name: "Catamarca",
    lat: -28.4686,
    lng: -65.7792,
  },
  {
    name: "Nakhodka",
    lat: 67.7504,
    lng: 77.52,
  },
  {
    name: "Jijiga",
    lat: 9.35,
    lng: 42.8,
  },
  {
    name: "Kramatorsk",
    lat: 48.7208,
    lng: 37.5556,
  },
  {
    name: "Champaign",
    lat: 40.1144,
    lng: -88.2735,
  },
  {
    name: "Alexandria",
    lat: 38.8185,
    lng: -77.0861,
  },
  {
    name: "George",
    lat: -33.9667,
    lng: 22.45,
  },
  {
    name: "Herne",
    lat: 51.5426,
    lng: 7.219,
  },
  {
    name: "Ravenna",
    lat: 44.4178,
    lng: 12.1994,
  },
  {
    name: "Zarzis",
    lat: 33.5104,
    lng: 11.1,
  },
  {
    name: "Hayward",
    lat: 37.6328,
    lng: -122.0772,
  },
  {
    name: "La Laguna",
    lat: 28.48,
    lng: -16.32,
  },
  {
    name: "Higashi-murayama",
    lat: 35.7547,
    lng: 139.4686,
  },
  {
    name: "Saharsa",
    lat: 25.88,
    lng: 86.6,
  },
  {
    name: "Stara Zagora",
    lat: 42.4247,
    lng: 25.6256,
  },
  {
    name: "Chau Doc",
    lat: 10.7,
    lng: 105.1167,
  },
  {
    name: "Guimaraes",
    lat: 41.445,
    lng: -8.2908,
  },
  {
    name: "Haripur",
    lat: 31.52,
    lng: 75.98,
  },
  {
    name: "Springfield",
    lat: 39.771,
    lng: -89.6538,
  },
  {
    name: "San Cristobal",
    lat: 16.7367,
    lng: -92.6383,
  },
  {
    name: "Rafael Castillo",
    lat: -34.7167,
    lng: -58.6167,
  },
  {
    name: "Villanueva",
    lat: 15.3167,
    lng: -88.0167,
  },
  {
    name: "Gojra",
    lat: 31.15,
    lng: 72.6833,
  },
  {
    name: "Lakewood",
    lat: 39.6977,
    lng: -105.1168,
  },
  {
    name: "Oxford",
    lat: 51.7519,
    lng: -1.2578,
  },
  {
    name: "Villeurbanne",
    lat: 45.7667,
    lng: 4.8803,
  },
  {
    name: "Lafayette",
    lat: 40.399,
    lng: -86.8594,
  },
  {
    name: "Fethiye",
    lat: 36.6206,
    lng: 29.1142,
  },
  {
    name: "Uiwang",
    lat: 37.3447,
    lng: 126.9683,
  },
  {
    name: "Navojoa",
    lat: 27.0813,
    lng: -109.4461,
  },
  {
    name: "Calama",
    lat: -22.4624,
    lng: -68.9272,
  },
  {
    name: "Erzincan",
    lat: 39.7464,
    lng: 39.4914,
  },
  {
    name: "Middelburg",
    lat: -25.7684,
    lng: 29.4783,
  },
  {
    name: "Mandi Bahauddin",
    lat: 32.5861,
    lng: 73.4917,
  },
  {
    name: "Zonguldak",
    lat: 41.4304,
    lng: 31.78,
  },
  {
    name: "Hitachi-Naka",
    lat: 36.3964,
    lng: 140.5344,
  },
  {
    name: "Isiro",
    lat: 2.7833,
    lng: 27.6167,
  },
  {
    name: "Jinggangshan",
    lat: 26.5736,
    lng: 114.1639,
  },
  {
    name: "Jiutepec",
    lat: 18.8833,
    lng: -99.1667,
  },
  {
    name: "Batumi",
    lat: 41.6458,
    lng: 41.6417,
  },
  {
    name: "Pathankot",
    lat: 32.2689,
    lng: 75.6497,
  },
  {
    name: "Nazilli",
    lat: 37.9125,
    lng: 28.3206,
  },
  {
    name: "Frederick",
    lat: 39.4336,
    lng: -77.4141,
  },
  {
    name: "Lajes",
    lat: -27.8158,
    lng: -50.3258,
  },
  {
    name: "Pitesti",
    lat: 44.8667,
    lng: 24.8833,
  },
  {
    name: "Chlef",
    lat: 36.1647,
    lng: 1.3317,
  },
  {
    name: "Chetumal",
    lat: 18.5036,
    lng: -88.3053,
  },
  {
    name: "Rondonopolis",
    lat: -16.4695,
    lng: -54.64,
  },
  {
    name: "Esmeraldas",
    lat: 0.95,
    lng: -79.6667,
  },
  {
    name: "Angers",
    lat: 47.4736,
    lng: -0.5542,
  },
  {
    name: "Hanam",
    lat: 37.5392,
    lng: 127.2147,
  },
  {
    name: "Daiwanishi",
    lat: 34.83,
    lng: 135.4172,
  },
  {
    name: "Matagalpa",
    lat: 12.9167,
    lng: -85.9167,
  },
  {
    name: "Salzburg",
    lat: 47.7972,
    lng: 13.0477,
  },
  {
    name: "Vidisha",
    lat: 23.5239,
    lng: 77.8061,
  },
  {
    name: "Cam Pha",
    lat: 21.0071,
    lng: 107.2845,
  },
  {
    name: "Kariya",
    lat: 34.9833,
    lng: 137,
  },
  {
    name: "Tochigi",
    lat: 36.3824,
    lng: 139.7341,
  },
  {
    name: "Lake Charles",
    lat: 30.2012,
    lng: -93.2122,
  },
  {
    name: "Odessa",
    lat: 31.8831,
    lng: -102.3406,
  },
  {
    name: "Nalgonda",
    lat: 17.05,
    lng: 79.27,
  },
  {
    name: "Ordu",
    lat: 40.9833,
    lng: 37.8833,
  },
  {
    name: "San Cristobal",
    lat: 18.416,
    lng: -70.109,
  },
  {
    name: "Tuscaloosa",
    lat: 33.2348,
    lng: -87.5267,
  },
  {
    name: "Horad Barysaw",
    lat: 54.226,
    lng: 28.4922,
  },
  {
    name: "Neuss",
    lat: 51.2003,
    lng: 6.6939,
  },
  {
    name: "Miskolc",
    lat: 48.1,
    lng: 20.7833,
  },
  {
    name: "Warner Robins",
    lat: 32.597,
    lng: -83.6529,
  },
  {
    name: "Bartin",
    lat: 41.6344,
    lng: 32.3375,
  },
  {
    name: "Palmdale",
    lat: 34.5944,
    lng: -118.1057,
  },
  {
    name: "Melitopol'",
    lat: 46.8333,
    lng: 35.3667,
  },
  {
    name: "Zango",
    lat: 12.9333,
    lng: 8.5333,
  },
  {
    name: "Tama",
    lat: 35.6333,
    lng: 139.45,
  },
  {
    name: "Hollywood",
    lat: 26.0294,
    lng: -80.1679,
  },
  {
    name: "Balurghat",
    lat: 25.2167,
    lng: 88.7667,
  },
  {
    name: "Midland",
    lat: 32.0249,
    lng: -102.1137,
  },
  {
    name: "Surigao",
    lat: 9.7833,
    lng: 125.4833,
  },
  {
    name: "Dibrugarh",
    lat: 27.4833,
    lng: 95,
  },
  {
    name: "Mahajanga",
    lat: -15.67,
    lng: 46.345,
  },
  {
    name: "Salavat",
    lat: 53.3667,
    lng: 55.9333,
  },
  {
    name: "Bandirma",
    lat: 40.3542,
    lng: 27.9725,
  },
  {
    name: "Leesburg",
    lat: 28.7657,
    lng: -81.8996,
  },
  {
    name: "Tuguegarao",
    lat: 17.6167,
    lng: 121.7167,
  },
  {
    name: "Gandajika",
    lat: -6.75,
    lng: 23.9667,
  },
  {
    name: "Silao",
    lat: 20.9478,
    lng: -101.4281,
  },
  {
    name: "Regensburg",
    lat: 49.0167,
    lng: 12.0833,
  },
  {
    name: "Ueda",
    lat: 36.4019,
    lng: 138.2492,
  },
  {
    name: "Port Arthur",
    lat: 29.8554,
    lng: -93.9264,
  },
  {
    name: "York",
    lat: 53.9583,
    lng: -1.0803,
  },
  {
    name: "Palo Negro",
    lat: 10.16,
    lng: -67.5582,
  },
  {
    name: "Al'met'yevsk",
    lat: 54.9,
    lng: 52.3,
  },
  {
    name: "Kafr ash Shaykh",
    lat: 31.1,
    lng: 30.95,
  },
  {
    name: "Noda",
    lat: 35.955,
    lng: 139.8747,
  },
  {
    name: "Seogwipo",
    lat: 33.2497,
    lng: 126.56,
  },
  {
    name: "Moanda",
    lat: -5.9229,
    lng: 12.355,
  },
  {
    name: "Tete",
    lat: -16.1579,
    lng: 33.5898,
  },
  {
    name: "Mzuzu",
    lat: -11.45,
    lng: 34.0333,
  },
  {
    name: "Fyzabad",
    lat: 26.7504,
    lng: 82.17,
  },
  {
    name: "Harrow",
    lat: 51.5836,
    lng: -0.3464,
  },
  {
    name: "Poole",
    lat: 50.7167,
    lng: -1.9833,
  },
  {
    name: "Semnan",
    lat: 35.5833,
    lng: 53.3833,
  },
  {
    name: "Hoeryong",
    lat: 42.4333,
    lng: 129.75,
  },
  {
    name: "Kirsehir",
    lat: 39.145,
    lng: 34.1608,
  },
  {
    name: "Muskegon",
    lat: 43.2281,
    lng: -86.2563,
  },
  {
    name: "Sievierodonetsk",
    lat: 48.95,
    lng: 38.4833,
  },
  {
    name: "Guarapuava",
    lat: -25.38,
    lng: -51.48,
  },
  {
    name: "Sinp'o",
    lat: 40.0833,
    lng: 128.25,
  },
  {
    name: "Silchar",
    lat: 24.7904,
    lng: 92.79,
  },
  {
    name: "Macon",
    lat: 32.8065,
    lng: -83.6974,
  },
  {
    name: "Kokshetau",
    lat: 53.2824,
    lng: 69.3969,
  },
  {
    name: "Macae",
    lat: -22.38,
    lng: -41.79,
  },
  {
    name: "Cairns",
    lat: -16.9303,
    lng: 145.7703,
  },
  {
    name: "Yilan",
    lat: 24.75,
    lng: 121.75,
  },
  {
    name: "Papantla de Olarte",
    lat: 20.4478,
    lng: -97.32,
  },
  {
    name: "Kansas City",
    lat: 39.1234,
    lng: -94.7443,
  },
  {
    name: "Ciudad de Melilla",
    lat: 35.2937,
    lng: -2.9383,
  },
  {
    name: "Shantipur",
    lat: 23.25,
    lng: 88.43,
  },
  {
    name: "Kukichuo",
    lat: 36.0622,
    lng: 139.6669,
  },
  {
    name: "Golmeh",
    lat: 33.6304,
    lng: 46.43,
  },
  {
    name: "Zabid",
    lat: 14.1951,
    lng: 43.3155,
  },
  {
    name: "Peristeri",
    lat: 38.0167,
    lng: 23.6833,
  },
  {
    name: "Hindupur",
    lat: 13.83,
    lng: 77.49,
  },
  {
    name: "Sunnyvale",
    lat: 37.3836,
    lng: -122.0256,
  },
  {
    name: "Baubau",
    lat: -5.4667,
    lng: 122.633,
  },
  {
    name: "Mudon",
    lat: 16.2618,
    lng: 97.7215,
  },
  {
    name: "Sayama",
    lat: 35.8531,
    lng: 139.4122,
  },
  {
    name: "Taza",
    lat: 34.2144,
    lng: -4.0088,
  },
  {
    name: "Settat",
    lat: 33.0023,
    lng: -7.6198,
  },
  {
    name: "Imabari",
    lat: 34.0661,
    lng: 132.9978,
  },
  {
    name: "Foggia",
    lat: 41.4584,
    lng: 15.5519,
  },
  {
    name: "Erode",
    lat: 11.3408,
    lng: 77.7172,
  },
  {
    name: "Pocos de Caldas",
    lat: -21.78,
    lng: -46.57,
  },
  {
    name: "Gwangyang",
    lat: 34.9403,
    lng: 127.7017,
  },
  {
    name: "Tororo",
    lat: 0.6928,
    lng: 34.1808,
  },
  {
    name: "Gonbad-e Kavus",
    lat: 37.25,
    lng: 55.1672,
  },
  {
    name: "Al Manaqil",
    lat: 14.2504,
    lng: 32.98,
  },
  {
    name: "Miass",
    lat: 55.05,
    lng: 60.1,
  },
  {
    name: "Tulancingo",
    lat: 20.0833,
    lng: -98.3667,
  },
  {
    name: "Nimes",
    lat: 43.838,
    lng: 4.361,
  },
  {
    name: "Chinandega",
    lat: 12.6242,
    lng: -87.1297,
  },
  {
    name: "Saint Albans",
    lat: 51.755,
    lng: -0.336,
  },
  {
    name: "Nakhodka",
    lat: 42.8167,
    lng: 132.8833,
  },
  {
    name: "Quevedo",
    lat: -1.0333,
    lng: -79.45,
  },
  {
    name: "Bintulu",
    lat: 3.17,
    lng: 113.03,
  },
  {
    name: "Pomona",
    lat: 34.0585,
    lng: -117.7626,
  },
  {
    name: "Siem Reap",
    lat: 13.3622,
    lng: 103.8597,
  },
  {
    name: "Escondido",
    lat: 33.1347,
    lng: -117.0722,
  },
  {
    name: "Cao Lanh",
    lat: 10.4603,
    lng: 105.6331,
  },
  {
    name: "Riobamba",
    lat: -1.6743,
    lng: -78.6483,
  },
  {
    name: "Vryheid",
    lat: -27.7694,
    lng: 30.7914,
  },
  {
    name: "As Suwayhirah as Sahil",
    lat: 24.362,
    lng: 56.7344,
  },
  {
    name: "Paderborn",
    lat: 51.7167,
    lng: 8.7667,
  },
  {
    name: "Zamora",
    lat: 19.9833,
    lng: -102.2833,
  },
  {
    name: "Manzanillo",
    lat: 20.3397,
    lng: -77.1086,
  },
  {
    name: "Pasadena",
    lat: 29.6583,
    lng: -95.1499,
  },
  {
    name: "Florencio Varela",
    lat: -34.8167,
    lng: -58.3833,
  },
  {
    name: "Komaki",
    lat: 35.2833,
    lng: 136.9167,
  },
  {
    name: "Talcahuano",
    lat: -36.7145,
    lng: -73.1141,
  },
  {
    name: "Kerch",
    lat: 45.3386,
    lng: 36.4681,
  },
  {
    name: "Patos de Minas",
    lat: -18.5871,
    lng: -46.5149,
  },
  {
    name: "Copiapo",
    lat: -27.3665,
    lng: -70.3323,
  },
  {
    name: "Badajoz",
    lat: 38.8803,
    lng: -6.9753,
  },
  {
    name: "M'Sila",
    lat: 35.7,
    lng: 4.545,
  },
  {
    name: "Kragujevac",
    lat: 44.0142,
    lng: 20.9394,
  },
  {
    name: "Pointe-a-Pitre",
    lat: 16.2415,
    lng: -61.533,
  },
  {
    name: "Willemstad",
    lat: 12.1167,
    lng: -68.9333,
  },
  {
    name: "Rimini",
    lat: 44.0594,
    lng: 12.5683,
  },
  {
    name: "Dundee",
    lat: 56.462,
    lng: -2.9707,
  },
  {
    name: "Jijel",
    lat: 36.822,
    lng: 5.766,
  },
  {
    name: "Ocumare del Tuy",
    lat: 10.1136,
    lng: -66.7814,
  },
  {
    name: "Valdivia",
    lat: -39.8142,
    lng: -73.2459,
  },
  {
    name: "Gulu",
    lat: 2.7667,
    lng: 32.3056,
  },
  {
    name: "La Ceiba",
    lat: 15.7631,
    lng: -86.797,
  },
  {
    name: "Shahrud",
    lat: 36.4167,
    lng: 55.0167,
  },
  {
    name: "Iruma",
    lat: 35.8358,
    lng: 139.3911,
  },
  {
    name: "Kashikishi",
    lat: -9.3172,
    lng: 28.7331,
  },
  {
    name: "Sumbawanga",
    lat: -7.9667,
    lng: 31.6167,
  },
  {
    name: "Keren",
    lat: 15.6804,
    lng: 38.45,
  },
  {
    name: "Odivelas",
    lat: 38.8,
    lng: -9.1833,
  },
  {
    name: "New Bedford",
    lat: 41.6697,
    lng: -70.9428,
  },
  {
    name: "Jamuria",
    lat: 23.7,
    lng: 87.08,
  },
  {
    name: "Kutaisi",
    lat: 42.25,
    lng: 42.7,
  },
  {
    name: "Potchefstroom",
    lat: -26.715,
    lng: 27.1033,
  },
  {
    name: "Shimotoda",
    lat: 35.8175,
    lng: 139.6778,
  },
  {
    name: "Concordia",
    lat: -31.3922,
    lng: -58.0169,
  },
  {
    name: "Abbottabad",
    lat: 34.15,
    lng: 73.2167,
  },
  {
    name: "Delicias",
    lat: 28.1931,
    lng: -105.4717,
  },
  {
    name: "Mallawi",
    lat: 27.7306,
    lng: 30.8425,
  },
  {
    name: "Agri",
    lat: 39.7225,
    lng: 43.0544,
  },
  {
    name: "Amasya",
    lat: 40.65,
    lng: 35.8333,
  },
  {
    name: "Lang Son",
    lat: 21.8478,
    lng: 106.7578,
  },
  {
    name: "Salamanca",
    lat: 40.9667,
    lng: -5.6639,
  },
  {
    name: "Kastamonu",
    lat: 41.3833,
    lng: 33.7833,
  },
  {
    name: "Marvdasht",
    lat: 29.8742,
    lng: 52.8025,
  },
  {
    name: "Goma",
    lat: -1.69,
    lng: 29.22,
  },
  {
    name: "Yonago",
    lat: 35.4281,
    lng: 133.3311,
  },
  {
    name: "Chingola",
    lat: -12.5447,
    lng: 27.8708,
  },
  {
    name: "Fairfield",
    lat: 38.2592,
    lng: -122.0324,
  },
  {
    name: "Mostaganem",
    lat: 35.9333,
    lng: 0.0903,
  },
  {
    name: "Habra",
    lat: 22.83,
    lng: 88.63,
  },
  {
    name: "Mauli",
    lat: 30.7194,
    lng: 76.7181,
  },
  {
    name: "Sibiu",
    lat: 45.8,
    lng: 24.15,
  },
  {
    name: "Naperville",
    lat: 41.7483,
    lng: -88.1657,
  },
  {
    name: "Quilpue",
    lat: -33.0498,
    lng: -71.4415,
  },
  {
    name: "Dolores Hidalgo Cuna de la Independencia Nacional",
    lat: 21.1516,
    lng: -100.9369,
  },
  {
    name: "Kopeysk",
    lat: 55.1,
    lng: 61.6167,
  },
  {
    name: "Luleburgaz",
    lat: 41.4056,
    lng: 27.3569,
  },
  {
    name: "Al Hawiyah",
    lat: 21.4411,
    lng: 40.4975,
  },
  {
    name: "Bellevue",
    lat: 47.5951,
    lng: -122.1535,
  },
  {
    name: "Binghamton",
    lat: 42.1014,
    lng: -75.9093,
  },
  {
    name: "Nchelenge",
    lat: -9.3467,
    lng: 28.7344,
  },
  {
    name: "Negombo",
    lat: 7.2111,
    lng: 79.8386,
  },
  {
    name: "Ambala",
    lat: 30.3786,
    lng: 76.7725,
  },
  {
    name: "Disuq",
    lat: 31.1308,
    lng: 30.6479,
  },
  {
    name: "Mangghystau",
    lat: 43.6905,
    lng: 51.1417,
  },
  {
    name: "Malakal",
    lat: 9.5333,
    lng: 31.65,
  },
  {
    name: "Bacau",
    lat: 46.5833,
    lng: 26.9167,
  },
  {
    name: "Osorno",
    lat: -40.5667,
    lng: -73.15,
  },
  {
    name: "Elkhart",
    lat: 41.6916,
    lng: -85.9628,
  },
  {
    name: "Topeka",
    lat: 39.0346,
    lng: -95.6955,
  },
  {
    name: "Mogi Guacu",
    lat: -22.3719,
    lng: -46.9419,
  },
  {
    name: "Man",
    lat: 7.4004,
    lng: -7.55,
  },
  {
    name: "Joliet",
    lat: 41.5189,
    lng: -88.1499,
  },
  {
    name: "Pyatigorsk",
    lat: 44.0333,
    lng: 43.05,
  },
  {
    name: "Clermont-Ferrand",
    lat: 45.7831,
    lng: 3.0824,
  },
  {
    name: "Moshi",
    lat: -3.3349,
    lng: 37.3404,
  },
  {
    name: "Dar`a",
    lat: 32.625,
    lng: 36.105,
  },
  {
    name: "Rubtsovsk",
    lat: 51.5167,
    lng: 81.2,
  },
  {
    name: "Cam Ranh",
    lat: 11.902,
    lng: 109.2207,
  },
  {
    name: "Wamba",
    lat: 2.1404,
    lng: 27.99,
  },
  {
    name: "Franco da Rocha",
    lat: -23.3286,
    lng: -46.7244,
  },
  {
    name: "Dadu",
    lat: 26.7319,
    lng: 67.775,
  },
  {
    name: "Sagay",
    lat: 10.9,
    lng: 123.4167,
  },
  {
    name: "Balti",
    lat: 47.7617,
    lng: 27.9289,
  },
  {
    name: "San Juan",
    lat: 14.6,
    lng: 121.0333,
  },
  {
    name: "Kolomna",
    lat: 55.0833,
    lng: 38.7833,
  },
  {
    name: "Larisa",
    lat: 39.6385,
    lng: 22.4131,
  },
  {
    name: "Misato",
    lat: 35.8303,
    lng: 139.8725,
  },
  {
    name: "San Miguel de Allende",
    lat: 20.9142,
    lng: -100.7436,
  },
  {
    name: "Beaumont",
    lat: 30.0849,
    lng: -94.1451,
  },
  {
    name: "Paranagua",
    lat: -25.5279,
    lng: -48.5345,
  },
  {
    name: "Garcia",
    lat: 25.8167,
    lng: -100.5833,
  },
  {
    name: "Kakamigahara",
    lat: 35.3989,
    lng: 136.8486,
  },
  {
    name: "Logrono",
    lat: 42.4704,
    lng: -2.43,
  },
  {
    name: "Matanzas",
    lat: 23.0494,
    lng: -81.5736,
  },
  {
    name: "Ilagan",
    lat: 17.1333,
    lng: 121.8833,
  },
  {
    name: "David",
    lat: 8.4333,
    lng: -82.4333,
  },
  {
    name: "Le Mans",
    lat: 48.0077,
    lng: 0.1984,
  },
  {
    name: "San Justo",
    lat: -34.6833,
    lng: -58.55,
  },
  {
    name: "Quchan",
    lat: 37.1118,
    lng: 58.5015,
  },
  {
    name: "Berezniki",
    lat: 59.4167,
    lng: 56.7833,
  },
  {
    name: "Shillong",
    lat: 25.5744,
    lng: 91.8789,
  },
  {
    name: "Eregli",
    lat: 37.5058,
    lng: 34.0517,
  },
  {
    name: "Tizi Ouzou",
    lat: 36.8,
    lng: 4.0333,
  },
  {
    name: "Durres",
    lat: 41.3167,
    lng: 19.45,
  },
  {
    name: "Yalova",
    lat: 40.6556,
    lng: 29.275,
  },
  {
    name: "Villa de Cura",
    lat: 10.0386,
    lng: -67.4894,
  },
  {
    name: "Paterson",
    lat: 40.9147,
    lng: -74.1624,
  },
  {
    name: "Merced",
    lat: 37.3057,
    lng: -120.4778,
  },
  {
    name: "Kolar",
    lat: 13.1333,
    lng: 78.1333,
  },
  {
    name: "Cape Coast",
    lat: 5.1,
    lng: -1.25,
  },
  {
    name: "Al Mukalla",
    lat: 14.5333,
    lng: 49.1333,
  },
  {
    name: "Dongxing",
    lat: 21.5833,
    lng: 108.05,
  },
  {
    name: "Comayagua",
    lat: 14.46,
    lng: -87.65,
  },
  {
    name: "Barranca",
    lat: -10.7539,
    lng: -77.761,
  },
  {
    name: "Khasavyurt",
    lat: 43.25,
    lng: 46.5833,
  },
  {
    name: "Saguenay",
    lat: 48.4167,
    lng: -71.0667,
  },
  {
    name: "Tuxtepec",
    lat: 18.1,
    lng: -96.1167,
  },
  {
    name: "Kairouan",
    lat: 35.6804,
    lng: 10.1,
  },
  {
    name: "Marbella",
    lat: 36.5114,
    lng: -4.8834,
  },
  {
    name: "Huelva",
    lat: 37.25,
    lng: -6.95,
  },
  {
    name: "Kumba",
    lat: 4.6333,
    lng: 9.45,
  },
  {
    name: "Parnaiba",
    lat: -2.91,
    lng: -41.77,
  },
  {
    name: "Barrechid",
    lat: 33.27,
    lng: -7.5872,
  },
  {
    name: "Bharatpur",
    lat: 27.6833,
    lng: 84.4333,
  },
  {
    name: "Saida",
    lat: 34.8404,
    lng: 0.14,
  },
  {
    name: "Kusatsu",
    lat: 35.0167,
    lng: 135.9667,
  },
  {
    name: "Florencia",
    lat: 1.6142,
    lng: -75.6117,
  },
  {
    name: "Pueblo",
    lat: 38.2705,
    lng: -104.6112,
  },
  {
    name: "Pleiku",
    lat: 13.9833,
    lng: 108,
  },
  {
    name: "Coimbra",
    lat: 40.2111,
    lng: -8.4291,
  },
  {
    name: "Ajdabiya",
    lat: 30.77,
    lng: 20.22,
  },
  {
    name: "Tyler",
    lat: 32.3184,
    lng: -95.3062,
  },
  {
    name: "Ciego de Avila",
    lat: 21.8481,
    lng: -78.7631,
  },
  {
    name: "Pecs",
    lat: 46.0708,
    lng: 18.2331,
  },
  {
    name: "Ghazni",
    lat: 33.5492,
    lng: 68.4233,
  },
  {
    name: "Blackpool",
    lat: 53.8142,
    lng: -3.0503,
  },
  {
    name: "Nawabganj",
    lat: 24.5804,
    lng: 88.35,
  },
  {
    name: "Altay",
    lat: 47.8666,
    lng: 88.1166,
  },
  {
    name: "El Progreso",
    lat: 15.4,
    lng: -87.8,
  },
  {
    name: "Torrance",
    lat: 33.8346,
    lng: -118.3417,
  },
  {
    name: "Pemba",
    lat: -12.9667,
    lng: 40.5167,
  },
  {
    name: "Jau",
    lat: -22.2958,
    lng: -48.5578,
  },
  {
    name: "Metairie",
    lat: 29.9977,
    lng: -90.178,
  },
  {
    name: "Touggourt",
    lat: 33.1,
    lng: 6.0667,
  },
  {
    name: "Tuxpam de Rodriguez Cano",
    lat: 20.95,
    lng: -97.4,
  },
  {
    name: "Nevsehir",
    lat: 38.625,
    lng: 34.7122,
  },
  {
    name: "Bechar",
    lat: 31.6111,
    lng: -2.23,
  },
  {
    name: "Levis",
    lat: 46.8,
    lng: -71.1833,
  },
  {
    name: "Bhimavaram",
    lat: 16.5333,
    lng: 81.5333,
  },
  {
    name: "Bilbays",
    lat: 30.4167,
    lng: 31.5667,
  },
  {
    name: "Tottenham",
    lat: 51.588,
    lng: -0.072,
  },
  {
    name: "Aix-en-Provence",
    lat: 43.5263,
    lng: 5.4454,
  },
  {
    name: "Cizre",
    lat: 37.325,
    lng: 42.1958,
  },
  {
    name: "Arnhem",
    lat: 51.988,
    lng: 5.923,
  },
  {
    name: "Gisenyi",
    lat: -1.6928,
    lng: 29.25,
  },
  {
    name: "Fukayacho",
    lat: 36.2,
    lng: 139.2833,
  },
  {
    name: "Yuma",
    lat: 32.5992,
    lng: -114.5488,
  },
  {
    name: "Telford",
    lat: 52.6766,
    lng: -2.4469,
  },
  {
    name: "Lichinga",
    lat: -13.3,
    lng: 35.2456,
  },
  {
    name: "Ozamiz City",
    lat: 8.15,
    lng: 123.85,
  },
  {
    name: "Moundou",
    lat: 8.5667,
    lng: 16.0833,
  },
  {
    name: "Tetovo",
    lat: 42.0103,
    lng: 20.9714,
  },
  {
    name: "Nizip",
    lat: 37.0104,
    lng: 37.7985,
  },
  {
    name: "Maykop",
    lat: 44.6,
    lng: 40.0833,
  },
  {
    name: "Lausanne",
    lat: 46.5333,
    lng: 6.6333,
  },
  {
    name: "Kamalshahr",
    lat: 35.8622,
    lng: 50.8717,
  },
  {
    name: "Gweru",
    lat: -19.458,
    lng: 29.82,
  },
  {
    name: "Kelowna",
    lat: 49.8881,
    lng: -119.4956,
  },
  {
    name: "Castanhal",
    lat: -1.2939,
    lng: -47.9264,
  },
  {
    name: "Irakleio",
    lat: 35.3333,
    lng: 25.1333,
  },
  {
    name: "Mandsaur",
    lat: 24.03,
    lng: 75.08,
  },
  {
    name: "Rybnik",
    lat: 50.0833,
    lng: 18.5,
  },
  {
    name: "Nong'an",
    lat: 44.4304,
    lng: 125.1701,
  },
  {
    name: "Rize",
    lat: 41.0167,
    lng: 40.5167,
  },
  {
    name: "Vlore",
    lat: 40.45,
    lng: 19.4833,
  },
  {
    name: "Bizerte",
    lat: 37.2904,
    lng: 9.855,
  },
  {
    name: "Jahrom",
    lat: 28.5,
    lng: 53.56,
  },
  {
    name: "Surprise",
    lat: 33.68,
    lng: -112.4524,
  },
  {
    name: "Columbia",
    lat: 38.9478,
    lng: -92.3256,
  },
  {
    name: "Colima",
    lat: 19.2433,
    lng: -103.7247,
  },
  {
    name: "Ishizaki",
    lat: 38.4281,
    lng: 141.3061,
  },
  {
    name: "Athens",
    lat: 33.9508,
    lng: -83.3689,
  },
  {
    name: "Roseville",
    lat: 38.7703,
    lng: -121.3196,
  },
  {
    name: "Thornton",
    lat: 39.9197,
    lng: -104.9438,
  },
  {
    name: "Khuzdar",
    lat: 27.8,
    lng: 66.6167,
  },
  {
    name: "Tepatitlan de Morelos",
    lat: 20.817,
    lng: -102.733,
  },
  {
    name: "Abbotsford",
    lat: 49.05,
    lng: -122.3167,
  },
  {
    name: "Mati",
    lat: 6.95,
    lng: 126.2333,
  },
  {
    name: "Ruda Slaska",
    lat: 50.2628,
    lng: 18.8536,
  },
  {
    name: "Miramar",
    lat: 25.9773,
    lng: -80.3351,
  },
  {
    name: "Batu Pahat",
    lat: 1.85,
    lng: 102.93,
  },
  {
    name: "Schaarbeek",
    lat: 50.8675,
    lng: 4.3736,
  },
  {
    name: "Pasadena",
    lat: 34.1597,
    lng: -118.139,
  },
  {
    name: "Kovrov",
    lat: 56.3606,
    lng: 41.3197,
  },
  {
    name: "Mesquite",
    lat: 32.7623,
    lng: -96.5889,
  },
  {
    name: "Odintsovo",
    lat: 55.6733,
    lng: 37.2733,
  },
  {
    name: "Kuwana",
    lat: 35.0622,
    lng: 136.6839,
  },
  {
    name: "Kidapawan",
    lat: 7.0083,
    lng: 125.0894,
  },
  {
    name: "Santa Maria",
    lat: 34.9334,
    lng: -120.4432,
  },
  {
    name: "Olathe",
    lat: 38.8832,
    lng: -94.8198,
  },
  {
    name: "Masaya",
    lat: 11.9667,
    lng: -86.1,
  },
  {
    name: "Medea",
    lat: 36.2675,
    lng: 2.75,
  },
  {
    name: "Yaritagua",
    lat: 10.08,
    lng: -69.1261,
  },
  {
    name: "San Jose",
    lat: 15.7833,
    lng: 121,
  },
  {
    name: "Houma",
    lat: 29.5799,
    lng: -90.7058,
  },
  {
    name: "Samarra'",
    lat: 34.1959,
    lng: 43.8857,
  },
  {
    name: "Koga",
    lat: 36.1833,
    lng: 139.7,
  },
  {
    name: "Sale",
    lat: 53.424,
    lng: -2.322,
  },
  {
    name: "Carolina",
    lat: 18.4054,
    lng: -65.9792,
  },
  {
    name: "Al `Aqabah",
    lat: 29.5167,
    lng: 35,
  },
  {
    name: "Torbat-e Heydariyeh",
    lat: 35.2739,
    lng: 59.2194,
  },
  {
    name: "Dawei",
    lat: 14.0367,
    lng: 98.1867,
  },
  {
    name: "Boulogne-Billancourt",
    lat: 48.8352,
    lng: 2.2409,
  },
  {
    name: "Zielona Gora",
    lat: 51.9397,
    lng: 15.505,
  },
  {
    name: "Atbara",
    lat: 17.7167,
    lng: 33.9833,
  },
  {
    name: "Tours",
    lat: 47.2436,
    lng: 0.6892,
  },
  {
    name: "Pakpattan",
    lat: 30.35,
    lng: 73.4,
  },
  {
    name: "Shizuishan",
    lat: 39.2333,
    lng: 106.769,
  },
  {
    name: "Tsuchiura",
    lat: 36.0667,
    lng: 140.2,
  },
  {
    name: "Chicacole",
    lat: 18.3,
    lng: 83.9,
  },
  {
    name: "Botucatu",
    lat: -22.8858,
    lng: -48.445,
  },
  {
    name: "Dhahran",
    lat: 26.2667,
    lng: 50.15,
  },
  {
    name: "Pabna",
    lat: 24.0004,
    lng: 89.25,
  },
  {
    name: "Coquitlam",
    lat: 49.2839,
    lng: -122.7919,
  },
  {
    name: "Carrollton",
    lat: 32.989,
    lng: -96.8999,
  },
  {
    name: "Tan An",
    lat: 10.5322,
    lng: 106.4042,
  },
  {
    name: "Souk Ahras",
    lat: 36.2904,
    lng: 7.95,
  },
  {
    name: "Caxias",
    lat: -4.833,
    lng: -43.35,
  },
  {
    name: "Grand Junction",
    lat: 39.0876,
    lng: -108.5673,
  },
  {
    name: "Zacatecas",
    lat: 22.7736,
    lng: -102.5736,
  },
  {
    name: "Barahona",
    lat: 18.2079,
    lng: -71.0996,
  },
  {
    name: "Kokubunji",
    lat: 35.7108,
    lng: 139.4622,
  },
  {
    name: "Piranshahr",
    lat: 36.6944,
    lng: 45.1417,
  },
  {
    name: "Tiruvannamalai",
    lat: 12.2604,
    lng: 79.1,
  },
  {
    name: "Amiens",
    lat: 49.892,
    lng: 2.299,
  },
  {
    name: "Umtata",
    lat: -31.58,
    lng: 28.79,
  },
  {
    name: "Charleston",
    lat: 38.3484,
    lng: -81.6323,
  },
  {
    name: "Orange",
    lat: 33.8038,
    lng: -117.8218,
  },
  {
    name: "Fullerton",
    lat: 33.8841,
    lng: -117.9279,
  },
  {
    name: "Sancti Spiritus",
    lat: 21.9339,
    lng: -79.4439,
  },
  {
    name: "Boulogne-sur-Mer",
    lat: 50.7264,
    lng: 1.6147,
  },
  {
    name: "Jequie",
    lat: -13.85,
    lng: -40.08,
  },
  {
    name: "Bat Yam",
    lat: 32.0231,
    lng: 34.7503,
  },
  {
    name: "Boca del Rio",
    lat: 19.1056,
    lng: -96.1078,
  },
  {
    name: "Mojokerto",
    lat: -7.4722,
    lng: 112.4336,
  },
  {
    name: "Darwin",
    lat: -12.4381,
    lng: 130.8411,
  },
  {
    name: "Zama",
    lat: 35.4886,
    lng: 139.4075,
  },
  {
    name: "Ingolstadt",
    lat: 48.7636,
    lng: 11.4261,
  },
  {
    name: "Mandya",
    lat: 12.5242,
    lng: 76.8958,
  },
  {
    name: "Greeley",
    lat: 40.4151,
    lng: -104.7706,
  },
  {
    name: "Ch'ungmu",
    lat: 34.8458,
    lng: 128.4236,
  },
  {
    name: "Al Khmissat",
    lat: 33.81,
    lng: -6.06,
  },
  {
    name: "Birganj",
    lat: 27,
    lng: 84.8667,
  },
  {
    name: "Igdir",
    lat: 39.9167,
    lng: 44.0333,
  },
  {
    name: "Lira",
    lat: 2.2604,
    lng: 32.89,
  },
  {
    name: "Jicheon",
    lat: 36.1192,
    lng: 128.1153,
  },
  {
    name: "Yaizu",
    lat: 34.8667,
    lng: 138.3167,
  },
  {
    name: "Gunungsitoli",
    lat: 1.1167,
    lng: 97.5667,
  },
  {
    name: "Danao",
    lat: 10.5333,
    lng: 123.9333,
  },
  {
    name: "Yunxian Chengguanzhen",
    lat: 32.8082,
    lng: 110.8136,
  },
  {
    name: "Atibaia",
    lat: -23.1172,
    lng: -46.5506,
  },
  {
    name: "Jyvaskyla",
    lat: 62.2333,
    lng: 25.7333,
  },
  {
    name: "Bankura",
    lat: 23.25,
    lng: 87.0667,
  },
  {
    name: "Inazawa",
    lat: 35.25,
    lng: 136.7833,
  },
  {
    name: "Salerno",
    lat: 40.6806,
    lng: 14.7597,
  },
  {
    name: "Vila Franca de Xira",
    lat: 38.95,
    lng: -8.9833,
  },
  {
    name: "Quillacollo",
    lat: -17.3975,
    lng: -66.2817,
  },
  {
    name: "Santa Maria Texmelucan",
    lat: 19.2833,
    lng: -98.4333,
  },
  {
    name: "Livingstone",
    lat: -17.85,
    lng: 25.8667,
  },
  {
    name: "Toowoomba",
    lat: -27.5667,
    lng: 151.95,
  },
  {
    name: "Bima",
    lat: -8.4667,
    lng: 118.717,
  },
  {
    name: "Porto Amboim",
    lat: -10.7183,
    lng: 13.75,
  },
  {
    name: "Maia",
    lat: 41.2333,
    lng: -8.6167,
  },
  {
    name: "Tarragona",
    lat: 41.1187,
    lng: 1.2453,
  },
  {
    name: "Encarnacion",
    lat: -27.3333,
    lng: -55.8667,
  },
  {
    name: "Kisarazu",
    lat: 35.3761,
    lng: 139.9169,
  },
  {
    name: "Marivan",
    lat: 35.5269,
    lng: 46.1761,
  },
  {
    name: "Uppsala",
    lat: 59.8601,
    lng: 17.64,
  },
  {
    name: "Chech'on",
    lat: 37.1361,
    lng: 128.2119,
  },
  {
    name: "Jinotega",
    lat: 13.0833,
    lng: -86,
  },
  {
    name: "Pageralam",
    lat: -4.0217,
    lng: 103.2522,
  },
  {
    name: "Giresun",
    lat: 40.9,
    lng: 38.4167,
  },
  {
    name: "Termiz",
    lat: 37.2242,
    lng: 67.2783,
  },
  {
    name: "Zinacantepec",
    lat: 19.2833,
    lng: -99.7333,
  },
  {
    name: "Targu-Mures",
    lat: 46.5497,
    lng: 24.5597,
  },
  {
    name: "Las Cruces",
    lat: 32.3265,
    lng: -106.7892,
  },
  {
    name: "'s-Hertogenbosch",
    lat: 51.6833,
    lng: 5.3167,
  },
  {
    name: "Panama City",
    lat: 30.1995,
    lng: -85.6004,
  },
  {
    name: "Blitar",
    lat: -8.1,
    lng: 112.15,
  },
  {
    name: "Harlingen",
    lat: 26.1917,
    lng: -97.6976,
  },
  {
    name: "Chiang Mai",
    lat: 18.7889,
    lng: 98.9833,
  },
  {
    name: "Brighton",
    lat: 50.8429,
    lng: -0.1313,
  },
  {
    name: "Tobruk",
    lat: 32.0833,
    lng: 23.95,
  },
  {
    name: "Tauranga",
    lat: -37.6858,
    lng: 176.1667,
  },
  {
    name: "Pyay",
    lat: 18.8165,
    lng: 95.2114,
  },
  {
    name: "Cartago",
    lat: 4.75,
    lng: -75.91,
  },
  {
    name: "Santiago",
    lat: 16.6833,
    lng: 121.55,
  },
  {
    name: "May Pen",
    lat: 17.95,
    lng: -77.25,
  },
  {
    name: "Urganch",
    lat: 41.5345,
    lng: 60.6249,
  },
  {
    name: "Zakhu",
    lat: 37.1436,
    lng: 42.6819,
  },
  {
    name: "Dumaguete City",
    lat: 9.3103,
    lng: 123.3081,
  },
  {
    name: "West Valley City",
    lat: 40.6889,
    lng: -112.0115,
  },
  {
    name: "Shuangcheng",
    lat: 45.3503,
    lng: 126.28,
  },
  {
    name: "Andimeshk",
    lat: 32.45,
    lng: 48.35,
  },
  {
    name: "Ome",
    lat: 35.7883,
    lng: 139.275,
  },
  {
    name: "Tabaco",
    lat: 13.35,
    lng: 123.7333,
  },
  {
    name: "Nakhon Ratchasima",
    lat: 14.9736,
    lng: 102.0831,
  },
  {
    name: "Isahaya",
    lat: 32.8442,
    lng: 130.0536,
  },
  {
    name: "Ashqelon",
    lat: 31.6658,
    lng: 34.5664,
  },
  {
    name: "Shahreza",
    lat: 32.0089,
    lng: 51.8667,
  },
  {
    name: "Zabol",
    lat: 31.0308,
    lng: 61.4972,
  },
  {
    name: "Ramapo",
    lat: 41.1404,
    lng: -74.1072,
  },
  {
    name: "Hampton",
    lat: 37.0551,
    lng: -76.363,
  },
  {
    name: "Calapan",
    lat: 13.3667,
    lng: 121.2,
  },
  {
    name: "Trois-Rivieres",
    lat: 46.35,
    lng: -72.55,
  },
  {
    name: "Urdaneta",
    lat: 15.9761,
    lng: 120.5711,
  },
  {
    name: "Milagro",
    lat: -2.1347,
    lng: -79.5872,
  },
  {
    name: "Heroica Guaymas",
    lat: 27.9183,
    lng: -110.8989,
  },
  {
    name: "Apatzingan de la Constitucion",
    lat: 19.0886,
    lng: -102.3508,
  },
  {
    name: "Batticaloa",
    lat: 7.717,
    lng: 81.7,
  },
  {
    name: "Rehovot",
    lat: 31.8914,
    lng: 34.8078,
  },
  {
    name: "Abiko",
    lat: 35.8642,
    lng: 140.0282,
  },
  {
    name: "Idfu",
    lat: 24.9781,
    lng: 32.8789,
  },
  {
    name: "Tando Allahyar",
    lat: 25.4667,
    lng: 68.7167,
  },
  {
    name: "Warren",
    lat: 42.4934,
    lng: -83.027,
  },
  {
    name: "Mauldin",
    lat: 34.7849,
    lng: -82.3005,
  },
  {
    name: "Bloomington",
    lat: 40.4757,
    lng: -88.9703,
  },
  {
    name: "Enfield",
    lat: 51.6522,
    lng: -0.0808,
  },
  {
    name: "Segou",
    lat: 13.45,
    lng: -6.2667,
  },
  {
    name: "Coral Springs",
    lat: 26.2702,
    lng: -80.2591,
  },
  {
    name: "Innsbruck",
    lat: 47.2683,
    lng: 11.3933,
  },
  {
    name: "Battambang",
    lat: 13.1,
    lng: 103.2,
  },
  {
    name: "Hassan",
    lat: 13.005,
    lng: 76.1028,
  },
  {
    name: "Round Rock",
    lat: 30.5254,
    lng: -97.666,
  },
  {
    name: "Yakima",
    lat: 46.5923,
    lng: -120.5496,
  },
  {
    name: "Khorramshahr",
    lat: 30.4333,
    lng: 48.1833,
  },
  {
    name: "Onomichi",
    lat: 34.4089,
    lng: 133.205,
  },
  {
    name: "Papeete",
    lat: -17.5334,
    lng: -149.5667,
  },
  {
    name: "Ouargla",
    lat: 31.95,
    lng: 5.3167,
  },
  {
    name: "Tra Vinh",
    lat: 9.9369,
    lng: 106.3411,
  },
  {
    name: "Narita",
    lat: 35.7833,
    lng: 140.3167,
  },
  {
    name: "Ninh Binh",
    lat: 20.2539,
    lng: 105.975,
  },
  {
    name: "San Carlos",
    lat: 10.4929,
    lng: 123.4095,
  },
  {
    name: "Gyor",
    lat: 47.6842,
    lng: 17.6344,
  },
  {
    name: "Odemis",
    lat: 38.2311,
    lng: 27.9719,
  },
  {
    name: "Kamez",
    lat: 41.3833,
    lng: 19.7667,
  },
  {
    name: "San Luis",
    lat: 16.2,
    lng: -89.44,
  },
  {
    name: "Ibarra",
    lat: 0.3628,
    lng: -78.13,
  },
  {
    name: "Sterling Heights",
    lat: 42.5809,
    lng: -83.0305,
  },
  {
    name: "Stavanger",
    lat: 58.9701,
    lng: 5.7333,
  },
  {
    name: "Yavatmal",
    lat: 20.4,
    lng: 78.1333,
  },
  {
    name: "Ferrara",
    lat: 44.8353,
    lng: 11.6199,
  },
  {
    name: "Kent",
    lat: 47.3887,
    lng: -122.2129,
  },
  {
    name: "Karabuk",
    lat: 41.2,
    lng: 32.6333,
  },
  {
    name: "High Wycombe",
    lat: 51.6287,
    lng: -0.7482,
  },
  {
    name: "Jaragua do Sul",
    lat: -26.48,
    lng: -49.1,
  },
  {
    name: "Calabozo",
    lat: 8.9219,
    lng: -67.4283,
  },
  {
    name: "Lae",
    lat: -6.7333,
    lng: 146.9833,
  },
  {
    name: "Kigoma",
    lat: -4.8833,
    lng: 29.6333,
  },
  {
    name: "Pilibhit",
    lat: 28.64,
    lng: 79.81,
  },
  {
    name: "Guelph",
    lat: 43.55,
    lng: -80.25,
  },
  {
    name: "Palghat",
    lat: 10.7792,
    lng: 76.6547,
  },
  {
    name: "Buea",
    lat: 4.1667,
    lng: 9.2333,
  },
  {
    name: "Los Guayos",
    lat: 10.1833,
    lng: -67.9333,
  },
  {
    name: "Rijeka",
    lat: 45.3297,
    lng: 14.4322,
  },
  {
    name: "Spanish Town",
    lat: 17.9961,
    lng: -76.9547,
  },
  {
    name: "Palakollu",
    lat: 16.5333,
    lng: 81.7333,
  },
  {
    name: "Kislovodsk",
    lat: 43.91,
    lng: 42.72,
  },
  {
    name: "Dipolog",
    lat: 8.5667,
    lng: 123.3333,
  },
  {
    name: "Surat Thani",
    lat: 9.1397,
    lng: 99.3306,
  },
  {
    name: "Cienaga",
    lat: 11.0104,
    lng: -74.25,
  },
  {
    name: "Parepare",
    lat: -4.0167,
    lng: 119.6236,
  },
  {
    name: "Girardot",
    lat: 4.31,
    lng: -74.81,
  },
  {
    name: "Burlington",
    lat: 36.0758,
    lng: -79.4686,
  },
  {
    name: "Abohar",
    lat: 30.1204,
    lng: 74.29,
  },
  {
    name: "Tychy",
    lat: 50.1667,
    lng: 19,
  },
  {
    name: "Marand",
    lat: 38.4167,
    lng: 45.7667,
  },
  {
    name: "Quibdo",
    lat: 5.6923,
    lng: -76.6582,
  },
  {
    name: "Kanchrapara",
    lat: 22.97,
    lng: 88.43,
  },
  {
    name: "Annecy",
    lat: 45.916,
    lng: 6.133,
  },
  {
    name: "Bellingham",
    lat: 48.7543,
    lng: -122.4687,
  },
  {
    name: "Kozan",
    lat: 37.4507,
    lng: 35.8123,
  },
  {
    name: "Udon Thani",
    lat: 17.4164,
    lng: 102.75,
  },
  {
    name: "Iwakuni",
    lat: 34.1669,
    lng: 132.2197,
  },
  {
    name: "Jiroft",
    lat: 28.6781,
    lng: 57.7406,
  },
  {
    name: "Tabora",
    lat: -5.0167,
    lng: 32.8,
  },
  {
    name: "Santa Clara",
    lat: 37.3645,
    lng: -121.968,
  },
  {
    name: "Vasteras",
    lat: 59.6173,
    lng: 16.5422,
  },
  {
    name: "Cayirova",
    lat: 40.8265,
    lng: 29.3745,
  },
  {
    name: "Sannar",
    lat: 13.55,
    lng: 33.6,
  },
  {
    name: "Lucheng",
    lat: 30.05,
    lng: 101.9667,
  },
  {
    name: "Racine",
    lat: 42.7274,
    lng: -87.8135,
  },
  {
    name: "Greenville",
    lat: 35.5956,
    lng: -77.3768,
  },
  {
    name: "Esteli",
    lat: 13.0833,
    lng: -86.35,
  },
  {
    name: "Taldyqorghan",
    lat: 45.0167,
    lng: 78.3667,
  },
  {
    name: "Cambridge",
    lat: 43.3972,
    lng: -80.3114,
  },
  {
    name: "Calabayan",
    lat: 16.7667,
    lng: 121.7833,
  },
  {
    name: "Baidoa",
    lat: 3.1167,
    lng: 43.65,
  },
  {
    name: "Jaramana",
    lat: 33.4833,
    lng: 36.35,
  },
  {
    name: "Furth",
    lat: 49.4783,
    lng: 10.9903,
  },
  {
    name: "Serpukhov",
    lat: 54.9167,
    lng: 37.4,
  },
  {
    name: "Bolton",
    lat: 53.578,
    lng: -2.429,
  },
  {
    name: "Tukuyu",
    lat: -9.2583,
    lng: 33.6417,
  },
  {
    name: "Stamford",
    lat: 41.1035,
    lng: -73.5583,
  },
  {
    name: "Villa Alemana",
    lat: -33.0428,
    lng: -71.3744,
  },
  {
    name: "Kadoma",
    lat: 34.7333,
    lng: 135.5833,
  },
  {
    name: "Tariba",
    lat: 7.8167,
    lng: -72.2167,
  },
  {
    name: "Wurzburg",
    lat: 49.7944,
    lng: 9.9294,
  },
  {
    name: "Songnim",
    lat: 38.7333,
    lng: 125.6333,
  },
  {
    name: "Mansa",
    lat: -11.1822,
    lng: 28.8833,
  },
  {
    name: "Elizabeth",
    lat: 40.6657,
    lng: -74.1912,
  },
  {
    name: "Opole",
    lat: 50.6722,
    lng: 17.9253,
  },
  {
    name: "Novocheboksarsk",
    lat: 56.1167,
    lng: 47.5,
  },
  {
    name: "Araras",
    lat: -22.3569,
    lng: -47.3839,
  },
  {
    name: "Romford",
    lat: 51.5768,
    lng: 0.1801,
  },
  {
    name: "Mit Ghamr",
    lat: 30.7192,
    lng: 31.2628,
  },
  {
    name: "Puno",
    lat: -15.8433,
    lng: -70.0236,
  },
  {
    name: "Jaranwala",
    lat: 31.3342,
    lng: 73.4194,
  },
  {
    name: "Salto",
    lat: -31.3883,
    lng: -57.9606,
  },
  {
    name: "Newport",
    lat: 51.5833,
    lng: -3,
  },
  {
    name: "Alagoinhas",
    lat: -12.1356,
    lng: -38.4192,
  },
  {
    name: "Omiyacho",
    lat: 35.2222,
    lng: 138.6214,
  },
  {
    name: "Kamina",
    lat: -8.73,
    lng: 25.01,
  },
  {
    name: "Seto",
    lat: 35.2167,
    lng: 137.0833,
  },
  {
    name: "Pinsk",
    lat: 52.1228,
    lng: 26.095,
  },
  {
    name: "Vihari",
    lat: 30.0419,
    lng: 72.3528,
  },
  {
    name: "Porto Seguro",
    lat: -16.4296,
    lng: -39.08,
  },
  {
    name: "Koforidua",
    lat: 6.1,
    lng: -0.2667,
  },
  {
    name: "Ixtlahuaca",
    lat: 19.5689,
    lng: -99.7669,
  },
  {
    name: "Temperley",
    lat: -34.7667,
    lng: -58.3833,
  },
  {
    name: "Bataysk",
    lat: 47.1333,
    lng: 39.75,
  },
  {
    name: "Whitby",
    lat: 43.8833,
    lng: -78.9417,
  },
  {
    name: "Sakaka",
    lat: 30,
    lng: 40.1333,
  },
  {
    name: "Tumen",
    lat: 42.9661,
    lng: 129.8425,
  },
  {
    name: "Orebro",
    lat: 59.2669,
    lng: 15.1965,
  },
  {
    name: "My Tho",
    lat: 10.35,
    lng: 106.35,
  },
  {
    name: "Hathras",
    lat: 27.6,
    lng: 78.05,
  },
  {
    name: "Divo",
    lat: 5.8372,
    lng: -5.3572,
  },
  {
    name: "Guasdualito",
    lat: 7.2467,
    lng: -70.7292,
  },
  {
    name: "Domodedovo",
    lat: 55.4333,
    lng: 37.75,
  },
  {
    name: "Darnah",
    lat: 32.7648,
    lng: 22.6391,
  },
  {
    name: "Port Blair",
    lat: 11.6667,
    lng: 92.75,
  },
  {
    name: "Cubatao",
    lat: -23.8953,
    lng: -46.4256,
  },
  {
    name: "Jazan",
    lat: 16.8892,
    lng: 42.5611,
  },
  {
    name: "Anderlecht",
    lat: 50.8392,
    lng: 4.3297,
  },
  {
    name: "Alipur Duar",
    lat: 26.4837,
    lng: 89.5667,
  },
  {
    name: "Neftekamsk",
    lat: 56.0833,
    lng: 54.25,
  },
  {
    name: "Johnson City",
    lat: 36.3406,
    lng: -82.3803,
  },
  {
    name: "Silay",
    lat: 10.8,
    lng: 122.9667,
  },
  {
    name: "Chilapa de Alvarez",
    lat: 17.5944,
    lng: -99.1778,
  },
  {
    name: "Leon",
    lat: 42.5989,
    lng: -5.5669,
  },
  {
    name: "Bam",
    lat: 29.1083,
    lng: 58.3583,
  },
  {
    name: "Ulm",
    lat: 48.3984,
    lng: 9.9916,
  },
  {
    name: "Lafia",
    lat: 8.4904,
    lng: 8.52,
  },
  {
    name: "Tay Ninh",
    lat: 11.3131,
    lng: 106.0963,
  },
  {
    name: "Iizuka",
    lat: 33.6458,
    lng: 130.6914,
  },
  {
    name: "Santana de Parnaiba",
    lat: -23.4439,
    lng: -46.9178,
  },
  {
    name: "Heilbronn",
    lat: 49.1404,
    lng: 9.218,
  },
  {
    name: "Rustavi",
    lat: 41.5333,
    lng: 45,
  },
  {
    name: "Pakokku",
    lat: 21.332,
    lng: 95.0866,
  },
  {
    name: "Payakumbuh",
    lat: -0.2244,
    lng: 100.6325,
  },
  {
    name: "Angren",
    lat: 41.0167,
    lng: 70.1333,
  },
  {
    name: "Sogamoso",
    lat: 5.72,
    lng: -72.94,
  },
  {
    name: "Leiria",
    lat: 39.7431,
    lng: -8.8069,
  },
  {
    name: "Basirhat",
    lat: 22.6572,
    lng: 88.8942,
  },
  {
    name: "Miramar",
    lat: 22.3375,
    lng: -97.8694,
  },
  {
    name: "Leeuwarden",
    lat: 53.2504,
    lng: 5.7834,
  },
  {
    name: "Gafsa",
    lat: 34.4204,
    lng: 8.78,
  },
  {
    name: "Unye",
    lat: 41.1271,
    lng: 37.2882,
  },
  {
    name: "Ramos Mejia",
    lat: -34.65,
    lng: -58.5667,
  },
  {
    name: "Navadwip",
    lat: 23.4088,
    lng: 88.3657,
  },
  {
    name: "Pforzheim",
    lat: 48.895,
    lng: 8.705,
  },
  {
    name: "Exeter",
    lat: 50.7167,
    lng: -3.5333,
  },
  {
    name: "Lynchburg",
    lat: 37.4003,
    lng: -79.1909,
  },
  {
    name: "Guntakal",
    lat: 15.17,
    lng: 77.38,
  },
  {
    name: "Pangkalpinang",
    lat: -2.1,
    lng: 106.1,
  },
  {
    name: "Latina",
    lat: 41.4676,
    lng: 12.9037,
  },
  {
    name: "Simi Valley",
    lat: 34.2663,
    lng: -118.749,
  },
  {
    name: "Daitocho",
    lat: 34.7119,
    lng: 135.6233,
  },
  {
    name: "Aalborg",
    lat: 57.0337,
    lng: 9.9166,
  },
  {
    name: "Guelma",
    lat: 36.466,
    lng: 7.428,
  },
  {
    name: "Barbacena",
    lat: -21.2258,
    lng: -43.7739,
  },
  {
    name: "Monza",
    lat: 45.5836,
    lng: 9.2736,
  },
  {
    name: "Tengyue",
    lat: 25.0333,
    lng: 98.4666,
  },
  {
    name: "Solihull",
    lat: 52.413,
    lng: -1.778,
  },
  {
    name: "Dunedin",
    lat: -45.8667,
    lng: 170.5,
  },
  {
    name: "Halisahar",
    lat: 22.95,
    lng: 88.42,
  },
  {
    name: "Nefteyugansk",
    lat: 61.1,
    lng: 72.6,
  },
  {
    name: "Magway",
    lat: 20.15,
    lng: 94.95,
  },
  {
    name: "Shashemene",
    lat: 7.2004,
    lng: 38.59,
  },
  {
    name: "Rishra",
    lat: 22.71,
    lng: 88.35,
  },
  {
    name: "Malanje",
    lat: -9.54,
    lng: 16.34,
  },
  {
    name: "Magelang",
    lat: -7.4706,
    lng: 110.2178,
  },
  {
    name: "Gashua",
    lat: 12.8705,
    lng: 11.04,
  },
  {
    name: "Shchelkovo",
    lat: 55.9167,
    lng: 38,
  },
  {
    name: "Kampong Cham",
    lat: 12,
    lng: 105.45,
  },
  {
    name: "Santa Tecla",
    lat: 13.674,
    lng: -89.29,
  },
  {
    name: "Novomoskovsk",
    lat: 54.0333,
    lng: 38.2667,
  },
  {
    name: "Gorzow Wielkopolski",
    lat: 52.7333,
    lng: 15.25,
  },
  {
    name: "Cam Ranh",
    lat: 11.9136,
    lng: 109.1369,
  },
  {
    name: "Giugliano in Campania",
    lat: 40.9319,
    lng: 14.1956,
  },
  {
    name: "Kumbo",
    lat: 6.2,
    lng: 10.66,
  },
  {
    name: "Cagua",
    lat: 10.1831,
    lng: -67.45,
  },
  {
    name: "Cadiz",
    lat: 36.535,
    lng: -6.2975,
  },
  {
    name: "Jandira",
    lat: -23.5278,
    lng: -46.9028,
  },
  {
    name: "Ghardaia",
    lat: 32.49,
    lng: 3.67,
  },
  {
    name: "Gateshead",
    lat: 54.95,
    lng: -1.6,
  },
  {
    name: "Honcho",
    lat: 35.7581,
    lng: 139.5297,
  },
  {
    name: "Uruguaiana",
    lat: -29.755,
    lng: -57.0878,
  },
  {
    name: "Curico",
    lat: -34.9854,
    lng: -71.2394,
  },
  {
    name: "Orizaba",
    lat: 18.85,
    lng: -97.1,
  },
  {
    name: "Ciudad de Atlixco",
    lat: 18.9,
    lng: -98.45,
  },
  {
    name: "Fort Smith",
    lat: 35.3493,
    lng: -94.3695,
  },
  {
    name: "Resende",
    lat: -22.4689,
    lng: -44.4469,
  },
  {
    name: "Polatli",
    lat: 39.5842,
    lng: 32.1472,
  },
  {
    name: "Porlamar",
    lat: 10.9556,
    lng: -63.8478,
  },
  {
    name: "Kenosha",
    lat: 42.5864,
    lng: -87.8765,
  },
  {
    name: "Amherst",
    lat: 43.0117,
    lng: -78.7569,
  },
  {
    name: "Gingoog",
    lat: 8.8167,
    lng: 125.1,
  },
  {
    name: "Duma",
    lat: 33.5722,
    lng: 36.4019,
  },
  {
    name: "Wolfsburg",
    lat: 52.4231,
    lng: 10.7872,
  },
  {
    name: "South Lyon",
    lat: 42.4614,
    lng: -83.6526,
  },
  {
    name: "Pouso Alegre",
    lat: -22.22,
    lng: -45.94,
  },
  {
    name: "Maastricht",
    lat: 50.853,
    lng: 5.677,
  },
  {
    name: "Pervoural'sk",
    lat: 56.9167,
    lng: 59.95,
  },
  {
    name: "Hosan",
    lat: 36.2039,
    lng: 127.0847,
  },
  {
    name: "Ise",
    lat: 34.4833,
    lng: 136.7167,
  },
  {
    name: "Boulder",
    lat: 40.0249,
    lng: -105.2523,
  },
  {
    name: "Bimbo",
    lat: 4.3313,
    lng: 18.5163,
  },
  {
    name: "Baia Mare",
    lat: 47.6597,
    lng: 23.5819,
  },
  {
    name: "Savannakhet",
    lat: 16.55,
    lng: 104.75,
  },
  {
    name: "Al Hajar al Aswad",
    lat: 33.4581,
    lng: 36.3053,
  },
  {
    name: "Kadirli",
    lat: 37.3739,
    lng: 36.0961,
  },
  {
    name: "Brits",
    lat: -25.6167,
    lng: 27.7667,
  },
  {
    name: "Cherkessk",
    lat: 44.2222,
    lng: 42.0575,
  },
  {
    name: "Indramayu",
    lat: -6.3356,
    lng: 108.319,
  },
  {
    name: "Higuey",
    lat: 18.616,
    lng: -68.708,
  },
  {
    name: "Rudnyy",
    lat: 52.9527,
    lng: 63.13,
  },
  {
    name: "Khrustalnyi",
    lat: 48.1214,
    lng: 38.9453,
  },
  {
    name: "Honmachi",
    lat: 32.5178,
    lng: 130.6181,
  },
  {
    name: "Pescara",
    lat: 42.4643,
    lng: 14.2142,
  },
  {
    name: "San Pedro Garza Garcia",
    lat: 25.6667,
    lng: -100.3,
  },
  {
    name: "Pleven",
    lat: 43.4078,
    lng: 24.6203,
  },
  {
    name: "Hoi An",
    lat: 15.8733,
    lng: 108.3327,
  },
  {
    name: "Derbent",
    lat: 42.0692,
    lng: 48.2958,
  },
  {
    name: "Preston",
    lat: 53.759,
    lng: -2.699,
  },
  {
    name: "Villa de Alvarez",
    lat: 19.25,
    lng: -103.7333,
  },
  {
    name: "Pati",
    lat: -6.7415,
    lng: 111.0347,
  },
  {
    name: "Tsuruoka",
    lat: 38.7217,
    lng: 139.8217,
  },
  {
    name: "Munuf",
    lat: 30.4667,
    lng: 30.9333,
  },
  {
    name: "Gagnoa",
    lat: 6.1333,
    lng: -5.9333,
  },
  {
    name: "Punta Arenas",
    lat: -53.1627,
    lng: -70.9081,
  },
  {
    name: "Dabrowa Gornicza",
    lat: 50.3239,
    lng: 19.1947,
  },
  {
    name: "Munch'on",
    lat: 39.259,
    lng: 127.356,
  },
  {
    name: "Khenifra",
    lat: 32.93,
    lng: -5.66,
  },
  {
    name: "Alberton",
    lat: -26.2672,
    lng: 28.1219,
  },
  {
    name: "Lianhe",
    lat: 47.1364,
    lng: 129.2859,
  },
  {
    name: "San Fernando",
    lat: 16.6167,
    lng: 120.3167,
  },
  {
    name: "Jirja",
    lat: 26.3419,
    lng: 31.8894,
  },
  {
    name: "Patnos",
    lat: 39.2358,
    lng: 42.8686,
  },
  {
    name: "Bergamo",
    lat: 45.695,
    lng: 9.67,
  },
  {
    name: "Blackburn",
    lat: 53.748,
    lng: -2.482,
  },
  {
    name: "Barretos",
    lat: -20.5569,
    lng: -48.5678,
  },
  {
    name: "Machiques",
    lat: 10.0667,
    lng: -72.5667,
  },
  {
    name: "Ciudad Hidalgo",
    lat: 19.6923,
    lng: -100.5574,
  },
  {
    name: "Jalapa",
    lat: 14.6379,
    lng: -89.9904,
  },
  {
    name: "Yonashiro-teruma",
    lat: 26.3792,
    lng: 127.8575,
  },
  {
    name: "Behbahan",
    lat: 30.5958,
    lng: 50.2417,
  },
  {
    name: "Elblag",
    lat: 54.1667,
    lng: 19.4,
  },
  {
    name: "Baidyabati",
    lat: 22.79,
    lng: 88.32,
  },
  {
    name: "Pearland",
    lat: 29.5585,
    lng: -95.3215,
  },
  {
    name: "Mufulira",
    lat: -12.5546,
    lng: 28.2604,
  },
  {
    name: "Maina",
    lat: 13.4692,
    lng: 144.7332,
  },
  {
    name: "Kashiwara",
    lat: 34.5094,
    lng: 135.7925,
  },
  {
    name: "Kotamobagu",
    lat: 0.7333,
    lng: 124.3167,
  },
  {
    name: "Dharmavaram",
    lat: 14.4142,
    lng: 77.715,
  },
  {
    name: "Edea",
    lat: 3.8,
    lng: 10.1333,
  },
  {
    name: "Setubal",
    lat: 38.5243,
    lng: -8.8926,
  },
  {
    name: "Montreuil",
    lat: 48.8611,
    lng: 2.4436,
  },
  {
    name: "Ciudad Ojeda",
    lat: 10.2,
    lng: -71.3,
  },
  {
    name: "Pedro Juan Caballero",
    lat: -22.5667,
    lng: -55.7167,
  },
  {
    name: "Fier",
    lat: 40.7167,
    lng: 19.55,
  },
  {
    name: "Orekhovo-Zuyevo",
    lat: 55.8,
    lng: 38.9667,
  },
  {
    name: "Kamalia",
    lat: 30.7258,
    lng: 72.6447,
  },
  {
    name: "Gyumri",
    lat: 40.7833,
    lng: 43.8333,
  },
  {
    name: "Hoa Binh",
    lat: 20.8172,
    lng: 105.3375,
  },
  {
    name: "Perpignan",
    lat: 42.6986,
    lng: 2.8956,
  },
  {
    name: "Larache",
    lat: 35.2004,
    lng: -6.16,
  },
  {
    name: "Siracusa",
    lat: 37.0692,
    lng: 15.2875,
  },
  {
    name: "Dorud",
    lat: 33.4933,
    lng: 49.075,
  },
  {
    name: "Puerto Barrios",
    lat: 15.73,
    lng: -88.6,
  },
  {
    name: "Ribeirao Pires",
    lat: -23.7108,
    lng: -46.4128,
  },
  {
    name: "Samandag",
    lat: 36.085,
    lng: 35.9806,
  },
  {
    name: "Upington",
    lat: -28.4572,
    lng: 21.2425,
  },
  {
    name: "Walthamstow",
    lat: 51.59,
    lng: 0,
  },
  {
    name: "Berkeley",
    lat: 37.8723,
    lng: -122.276,
  },
  {
    name: "Plock",
    lat: 52.55,
    lng: 19.7,
  },
  {
    name: "Richardson",
    lat: 32.9717,
    lng: -96.7093,
  },
  {
    name: "Dogubayazit",
    lat: 39.55,
    lng: 44.0833,
  },
  {
    name: "Redding",
    lat: 40.5698,
    lng: -122.365,
  },
  {
    name: "Arvada",
    lat: 39.8321,
    lng: -105.1511,
  },
  {
    name: "Valinhos",
    lat: -22.9708,
    lng: -46.9958,
  },
  {
    name: "St. George",
    lat: 37.077,
    lng: -113.577,
  },
  {
    name: "Kot Addu",
    lat: 30.47,
    lng: 70.9644,
  },
  {
    name: "Kallithea",
    lat: 37.95,
    lng: 23.7,
  },
  {
    name: "Gottingen",
    lat: 51.5339,
    lng: 9.9356,
  },
  {
    name: "Pakxe",
    lat: 15.1167,
    lng: 105.7833,
  },
  {
    name: "Billings",
    lat: 45.7891,
    lng: -108.5524,
  },
  {
    name: "Carcar",
    lat: 10.1167,
    lng: 123.6333,
  },
  {
    name: "Handa",
    lat: 34.8992,
    lng: 136.9267,
  },
  {
    name: "Gao",
    lat: 16.2666,
    lng: -0.05,
  },
  {
    name: "Guelmim",
    lat: 28.9833,
    lng: -10.0667,
  },
  {
    name: "Puerto Plata",
    lat: 19.7902,
    lng: -70.6902,
  },
  {
    name: "Darjeeling",
    lat: 27.0417,
    lng: 88.2631,
  },
  {
    name: "Yuba City",
    lat: 39.1357,
    lng: -121.6381,
  },
  {
    name: "Mohammad Shahr",
    lat: 35.7631,
    lng: 50.9172,
  },
  {
    name: "Sertaozinho",
    lat: -21.1378,
    lng: -47.99,
  },
  {
    name: "Fujimino",
    lat: 35.8794,
    lng: 139.5197,
  },
  {
    name: "Poa",
    lat: -23.5286,
    lng: -46.345,
  },
  {
    name: "Ebetsu",
    lat: 43.1039,
    lng: 141.5361,
  },
  {
    name: "Saint-Denis",
    lat: 48.9356,
    lng: 2.3539,
  },
  {
    name: "San Carlos",
    lat: 9.65,
    lng: -68.5833,
  },
  {
    name: "Ciudad Choluteca",
    lat: 13.3167,
    lng: -87.2167,
  },
  {
    name: "Varzea Paulista",
    lat: -23.2108,
    lng: -46.8278,
  },
  {
    name: "Rochester",
    lat: 44.0151,
    lng: -92.4778,
  },
  {
    name: "Kaspiysk",
    lat: 42.8833,
    lng: 47.6333,
  },
  {
    name: "Zahle",
    lat: 33.8439,
    lng: 35.9072,
  },
  {
    name: "East Los Angeles",
    lat: 34.0326,
    lng: -118.1691,
  },
  {
    name: "Gudivada",
    lat: 16.43,
    lng: 80.99,
  },
  {
    name: "Nazarabad",
    lat: 35.9522,
    lng: 50.6075,
  },
  {
    name: "Leominster",
    lat: 42.5209,
    lng: -71.7717,
  },
  {
    name: "Ajax",
    lat: 43.8583,
    lng: -79.0364,
  },
  {
    name: "Kingsport",
    lat: 36.5224,
    lng: -82.5453,
  },
  {
    name: "Butwal",
    lat: 27.7,
    lng: 83.45,
  },
  {
    name: "Nouadhibou",
    lat: 20.95,
    lng: -17.0333,
  },
  {
    name: "Duluth",
    lat: 46.7756,
    lng: -92.1392,
  },
  {
    name: "Nobeoka",
    lat: 32.5822,
    lng: 131.665,
  },
  {
    name: "Beppu",
    lat: 33.2847,
    lng: 131.4911,
  },
  {
    name: "Nazran'",
    lat: 43.2167,
    lng: 44.7667,
  },
  {
    name: "Sopur",
    lat: 34.3,
    lng: 74.47,
  },
  {
    name: "Iguala de la Independencia",
    lat: 18.35,
    lng: -99.5333,
  },
  {
    name: "Guaratingueta",
    lat: -22.8167,
    lng: -45.2278,
  },
  {
    name: "Lehigh Acres",
    lat: 26.612,
    lng: -81.6388,
  },
  {
    name: "Huaraz",
    lat: -9.5333,
    lng: -77.5333,
  },
  {
    name: "Konosu",
    lat: 36.0658,
    lng: 139.5222,
  },
  {
    name: "Rock Hill",
    lat: 34.9416,
    lng: -81.0244,
  },
  {
    name: "Ikoma",
    lat: 34.6919,
    lng: 135.7006,
  },
  {
    name: "Gilroy",
    lat: 37.0047,
    lng: -121.5855,
  },
  {
    name: "Cheltenham",
    lat: 51.9,
    lng: -2.0667,
  },
  {
    name: "Cambridge",
    lat: 42.3759,
    lng: -71.1185,
  },
  {
    name: "Nevinnomyssk",
    lat: 44.6333,
    lng: 41.9333,
  },
  {
    name: "Bruges",
    lat: 51.2089,
    lng: 3.2242,
  },
  {
    name: "Lahti",
    lat: 60.9833,
    lng: 25.6556,
  },
  {
    name: "Reutov",
    lat: 55.7667,
    lng: 37.8667,
  },
  {
    name: "Bandundu",
    lat: -3.31,
    lng: 17.38,
  },
  {
    name: "Charallave",
    lat: 10.2431,
    lng: -66.8622,
  },
  {
    name: "Nowshera",
    lat: 34.0153,
    lng: 71.9747,
  },
  {
    name: "Dharan",
    lat: 26.8167,
    lng: 87.2667,
  },
  {
    name: "Anuradhapura",
    lat: 8.335,
    lng: 80.4108,
  },
  {
    name: "Birigui",
    lat: -21.2889,
    lng: -50.34,
  },
  {
    name: "Bottrop",
    lat: 51.5232,
    lng: 6.9253,
  },
  {
    name: "Santa Cruz do Sul",
    lat: -29.7178,
    lng: -52.4258,
  },
  {
    name: "Sugar Land",
    lat: 29.5935,
    lng: -95.6357,
  },
  {
    name: "Akishima",
    lat: 35.7056,
    lng: 139.3536,
  },
  {
    name: "Karatepe",
    lat: 40.6883,
    lng: 30.0144,
  },
  {
    name: "Forli",
    lat: 44.2225,
    lng: 12.0408,
  },
  {
    name: "Cuautitlan",
    lat: 19.6833,
    lng: -99.1833,
  },
  {
    name: "Tecoman",
    lat: 18.9089,
    lng: -103.8747,
  },
  {
    name: "Giyon",
    lat: 8.5304,
    lng: 37.97,
  },
  {
    name: "Texas City",
    lat: 29.4128,
    lng: -94.9658,
  },
  {
    name: "Bama",
    lat: 11.5204,
    lng: 13.69,
  },
  {
    name: "Bayawan",
    lat: 9.3667,
    lng: 122.8,
  },
  {
    name: "Iowa City",
    lat: 41.6559,
    lng: -91.5303,
  },
  {
    name: "Saginaw",
    lat: 43.4199,
    lng: -83.9501,
  },
  {
    name: "Trento",
    lat: 46.0667,
    lng: 11.1167,
  },
  {
    name: "Kabwe",
    lat: -14.4333,
    lng: 28.45,
  },
  {
    name: "Jalingo",
    lat: 8.9004,
    lng: 11.36,
  },
  {
    name: "Luanshya",
    lat: -13.1333,
    lng: 28.4,
  },
  {
    name: "Agadez",
    lat: 16.9959,
    lng: 7.9828,
  },
  {
    name: "Uzhhorod",
    lat: 48.6239,
    lng: 22.295,
  },
  {
    name: "Besancon",
    lat: 47.24,
    lng: 6.02,
  },
  {
    name: "Adilabad",
    lat: 19.6667,
    lng: 78.5333,
  },
  {
    name: "Obninsk",
    lat: 55.1,
    lng: 36.6167,
  },
  {
    name: "Chico",
    lat: 39.7575,
    lng: -121.8152,
  },
  {
    name: "San Martin",
    lat: -33.0806,
    lng: -68.4706,
  },
  {
    name: "Kapakli",
    lat: 41.3333,
    lng: 27.9667,
  },
  {
    name: "Basingstoke",
    lat: 51.2667,
    lng: -1.0876,
  },
  {
    name: "Walbrzych",
    lat: 50.7667,
    lng: 16.2833,
  },
  {
    name: "Maidstone",
    lat: 51.272,
    lng: 0.529,
  },
  {
    name: "Xai-Xai",
    lat: -25.05,
    lng: 33.65,
  },
  {
    name: "Linkoping",
    lat: 58.4094,
    lng: 15.6257,
  },
  {
    name: "Reutlingen",
    lat: 48.4833,
    lng: 9.2167,
  },
  {
    name: "Langley",
    lat: 49.1044,
    lng: -122.5827,
  },
  {
    name: "Dover",
    lat: 39.161,
    lng: -75.5203,
  },
  {
    name: "Temixco",
    lat: 18.85,
    lng: -99.2333,
  },
  {
    name: "Belfort",
    lat: 47.64,
    lng: 6.85,
  },
  {
    name: "Kindia",
    lat: 10.06,
    lng: -12.87,
  },
  {
    name: "Narasaraopet",
    lat: 16.236,
    lng: 80.054,
  },
  {
    name: "Nyiregyhaza",
    lat: 47.95,
    lng: 21.7167,
  },
  {
    name: "Kyzyl",
    lat: 51.7167,
    lng: 94.45,
  },
  {
    name: "Conselheiro Lafaiete",
    lat: -20.67,
    lng: -43.79,
  },
  {
    name: "Machakos",
    lat: -1.5167,
    lng: 37.2667,
  },
  {
    name: "Nkongsamba",
    lat: 4.95,
    lng: 9.9167,
  },
  {
    name: "Smithtown",
    lat: 40.8662,
    lng: -73.2164,
  },
  {
    name: "Norman",
    lat: 35.2335,
    lng: -97.3471,
  },
  {
    name: "Mendoza",
    lat: -32.8833,
    lng: -68.8333,
  },
  {
    name: "Clearwater",
    lat: 27.9789,
    lng: -82.7622,
  },
  {
    name: "Tandil",
    lat: -37.3167,
    lng: -59.1333,
  },
  {
    name: "Manp'o",
    lat: 41.157,
    lng: 126.29,
  },
  {
    name: "Koencho",
    lat: 43.8081,
    lng: 143.8942,
  },
  {
    name: "Buzau",
    lat: 45.1517,
    lng: 26.8167,
  },
  {
    name: "Araguari",
    lat: -18.6489,
    lng: -48.1869,
  },
  {
    name: "Tatui",
    lat: -23.3556,
    lng: -47.8569,
  },
  {
    name: "Niihama",
    lat: 33.9603,
    lng: 133.2834,
  },
  {
    name: "Naga",
    lat: 10.2167,
    lng: 123.75,
  },
  {
    name: "Dimitrovgrad",
    lat: 54.2333,
    lng: 49.5833,
  },
  {
    name: "Port-Gentil",
    lat: -0.7167,
    lng: 8.7833,
  },
  {
    name: "Sassari",
    lat: 40.7267,
    lng: 8.5592,
  },
  {
    name: "Coeur d'Alene",
    lat: 47.7041,
    lng: -116.7935,
  },
  {
    name: "Ponce",
    lat: 18.012,
    lng: -66.6198,
  },
  {
    name: "Chittaurgarh",
    lat: 24.8894,
    lng: 74.6239,
  },
  {
    name: "Seaside",
    lat: 36.6224,
    lng: -121.8191,
  },
  {
    name: "Independence",
    lat: 39.0871,
    lng: -94.3501,
  },
  {
    name: "Argenteuil",
    lat: 48.95,
    lng: 2.25,
  },
  {
    name: "Boke",
    lat: 10.94,
    lng: -14.3,
  },
  {
    name: "West Jordan",
    lat: 40.6024,
    lng: -112.0008,
  },
  {
    name: "Abilene",
    lat: 32.4543,
    lng: -99.7384,
  },
  {
    name: "Phatthaya",
    lat: 12.9496,
    lng: 100.893,
  },
  {
    name: "Khon Kaen",
    lat: 16.4297,
    lng: 102.8297,
  },
  {
    name: "Ramenskoye",
    lat: 55.5669,
    lng: 38.2303,
  },
  {
    name: "Nasushiobara",
    lat: 36.9617,
    lng: 140.0461,
  },
  {
    name: "Kilis",
    lat: 36.7167,
    lng: 37.1167,
  },
  {
    name: "Shibuya",
    lat: 35.6536,
    lng: 139.7092,
  },
  {
    name: "Nabeul",
    lat: 36.4603,
    lng: 10.73,
  },
  {
    name: "Parral",
    lat: 26.9333,
    lng: -105.6667,
  },
  {
    name: "Swabi",
    lat: 34.1167,
    lng: 72.4667,
  },
  {
    name: "Sano",
    lat: 36.3144,
    lng: 139.5783,
  },
  {
    name: "Huejutla de Reyes",
    lat: 21.1333,
    lng: -98.4167,
  },
  {
    name: "Sabha",
    lat: 27.0333,
    lng: 14.4333,
  },
  {
    name: "Tahoua",
    lat: 14.9,
    lng: 5.2599,
  },
  {
    name: "Chelmsford",
    lat: 51.7361,
    lng: 0.4798,
  },
  {
    name: "Doncaster",
    lat: 53.515,
    lng: -1.133,
  },
  {
    name: "Valle de La Pascua",
    lat: 9.2033,
    lng: -66.0103,
  },
  {
    name: "Bloomington",
    lat: 39.1637,
    lng: -86.5257,
  },
  {
    name: "Toliara",
    lat: -23.35,
    lng: 43.6667,
  },
  {
    name: "Garanhuns",
    lat: -8.89,
    lng: -36.5,
  },
  {
    name: "Berdyans'k",
    lat: 46.7598,
    lng: 36.7845,
  },
  {
    name: "El Monte",
    lat: 34.0739,
    lng: -118.0291,
  },
  {
    name: "Otaru",
    lat: 43.1833,
    lng: 141,
  },
  {
    name: "Carlsbad",
    lat: 33.1247,
    lng: -117.2837,
  },
  {
    name: "North Charleston",
    lat: 32.9066,
    lng: -80.0722,
  },
  {
    name: "Bansbaria",
    lat: 22.97,
    lng: 88.4,
  },
  {
    name: "Puerto Madryn",
    lat: -42.773,
    lng: -65.0366,
  },
  {
    name: "Helsingborg",
    lat: 56.0424,
    lng: 12.721,
  },
  {
    name: "Nagahama",
    lat: 35.3833,
    lng: 136.2833,
  },
  {
    name: "Hatsukaichi",
    lat: 34.3486,
    lng: 132.3317,
  },
  {
    name: "Sloviansk",
    lat: 48.87,
    lng: 37.625,
  },
  {
    name: "Koblenz",
    lat: 50.3597,
    lng: 7.5978,
  },
  {
    name: "Oktyabr'skiy",
    lat: 54.4833,
    lng: 53.4833,
  },
  {
    name: "Maribor",
    lat: 46.55,
    lng: 15.6333,
  },
  {
    name: "St. Cloud",
    lat: 45.5339,
    lng: -94.1718,
  },
  {
    name: "Salto",
    lat: -23.2008,
    lng: -47.2869,
  },
  {
    name: "Zhijiang",
    lat: 27.4409,
    lng: 109.678,
  },
  {
    name: "Chorzow",
    lat: 50.3,
    lng: 18.95,
  },
  {
    name: "Hofu",
    lat: 34.05,
    lng: 131.5667,
  },
  {
    name: "Las Delicias",
    lat: 28.2,
    lng: -105.5,
  },
  {
    name: "Lilan",
    lat: 23.8163,
    lng: 108.8847,
  },
  {
    name: "Bijeljina",
    lat: 44.75,
    lng: 19.2167,
  },
  {
    name: "Temecula",
    lat: 33.4928,
    lng: -117.1315,
  },
  {
    name: "Bremerhaven",
    lat: 53.55,
    lng: 8.5833,
  },
  {
    name: "Kamagaya",
    lat: 35.7769,
    lng: 140.0008,
  },
  {
    name: "Bet Shemesh",
    lat: 31.7514,
    lng: 34.9886,
  },
  {
    name: "Ciudad de la Costa",
    lat: -34.8167,
    lng: -55.95,
  },
  {
    name: "Clovis",
    lat: 36.8278,
    lng: -119.6831,
  },
  {
    name: "Bernal",
    lat: -34.7,
    lng: -58.2833,
  },
  {
    name: "Valparai",
    lat: 10.3204,
    lng: 76.97,
  },
  {
    name: "Iringa",
    lat: -7.77,
    lng: 35.69,
  },
  {
    name: "Kandy",
    lat: 7.297,
    lng: 80.6385,
  },
  {
    name: "Hikone",
    lat: 35.2744,
    lng: 136.2597,
  },
  {
    name: "Cuito",
    lat: -12.38,
    lng: 16.94,
  },
  {
    name: "Oshu",
    lat: 39.1444,
    lng: 141.1389,
  },
  {
    name: "Nikopol'",
    lat: 47.5772,
    lng: 34.3575,
  },
  {
    name: "Laghouat",
    lat: 33.81,
    lng: 2.88,
  },
  {
    name: "Meridian",
    lat: 43.6112,
    lng: -116.3968,
  },
  {
    name: "Saanich",
    lat: 48.484,
    lng: -123.381,
  },
  {
    name: "Asela",
    lat: 7.95,
    lng: 39.1167,
  },
  {
    name: "Kankan",
    lat: 10.39,
    lng: -9.31,
  },
  {
    name: "Kusadasi",
    lat: 37.8586,
    lng: 27.2594,
  },
  {
    name: "Jounie",
    lat: 33.9697,
    lng: 35.6156,
  },
  {
    name: "Colchester",
    lat: 51.8917,
    lng: 0.903,
  },
  {
    name: "Recklinghausen",
    lat: 51.6167,
    lng: 7.2,
  },
  {
    name: "Pul-e Khumri",
    lat: 35.95,
    lng: 68.7,
  },
  {
    name: "Tawau",
    lat: 4.2981,
    lng: 117.8831,
  },
  {
    name: "San Francisco del Rincon",
    lat: 21.0228,
    lng: -101.86,
  },
  {
    name: "Vicenza",
    lat: 45.55,
    lng: 11.55,
  },
  {
    name: "Paarl",
    lat: -33.7242,
    lng: 18.9558,
  },
  {
    name: "Iranshahr",
    lat: 27.2025,
    lng: 60.6847,
  },
  {
    name: "Sorum",
    lat: 59.9135,
    lng: 11.3472,
  },
  {
    name: "Habikino",
    lat: 34.5578,
    lng: 135.6061,
  },
  {
    name: "Itatiba",
    lat: -23.0058,
    lng: -46.8389,
  },
  {
    name: "Uba",
    lat: -21.12,
    lng: -42.9428,
  },
  {
    name: "Caraguatatuba",
    lat: -23.62,
    lng: -45.4128,
  },
  {
    name: "Bukittinggi",
    lat: -0.3097,
    lng: 100.3753,
  },
  {
    name: "Higashiomi",
    lat: 35.1128,
    lng: 136.2078,
  },
  {
    name: "Wythenshawe",
    lat: 53.392,
    lng: -2.264,
  },
  {
    name: "Erlangen",
    lat: 49.5964,
    lng: 11.0044,
  },
  {
    name: "Sa-ch'on",
    lat: 35.2347,
    lng: 128.3575,
  },
  {
    name: "Kipushi",
    lat: -11.76,
    lng: 27.25,
  },
  {
    name: "Linhares",
    lat: -19.39,
    lng: -40.05,
  },
  {
    name: "Catanduva",
    lat: -21.14,
    lng: -48.98,
  },
  {
    name: "Akcakale",
    lat: 36.7108,
    lng: 38.9478,
  },
  {
    name: "Bergisch Gladbach",
    lat: 50.9917,
    lng: 7.1367,
  },
  {
    name: "City of Isabela",
    lat: 6.7,
    lng: 121.9667,
  },
  {
    name: "Brandon",
    lat: 27.9367,
    lng: -82.3,
  },
  {
    name: "Jaen",
    lat: 37.7697,
    lng: -3.7889,
  },
  {
    name: "Novyy Urengoy",
    lat: 66.0847,
    lng: 76.6789,
  },
  {
    name: "Montero",
    lat: -17.3333,
    lng: -63.3833,
  },
  {
    name: "Burdur",
    lat: 37.7167,
    lng: 30.2833,
  },
  {
    name: "Westminster",
    lat: 39.8837,
    lng: -105.0624,
  },
  {
    name: "Castelar",
    lat: -34.65,
    lng: -58.65,
  },
  {
    name: "Sokode",
    lat: 8.9833,
    lng: 1.1333,
  },
  {
    name: "Costa Mesa",
    lat: 33.6667,
    lng: -117.9135,
  },
  {
    name: "Rotherham",
    lat: 53.43,
    lng: -1.357,
  },
  {
    name: "Hualien",
    lat: 23.9769,
    lng: 121.6044,
  },
  {
    name: "San Carlos de Bariloche",
    lat: -41.15,
    lng: -71.3,
  },
  {
    name: "Tondabayashicho",
    lat: 34.4992,
    lng: 135.5972,
  },
  {
    name: "Monroe",
    lat: 32.5183,
    lng: -92.0774,
  },
  {
    name: "Zwolle",
    lat: 52.524,
    lng: 6.097,
  },
  {
    name: "Utica",
    lat: 43.0961,
    lng: -75.226,
  },
  {
    name: "Santa Lucia",
    lat: 10.2606,
    lng: -66.6639,
  },
  {
    name: "Carora",
    lat: 10.1755,
    lng: -70.0828,
  },
  {
    name: "Khenchela",
    lat: 35.4167,
    lng: 7.1333,
  },
  {
    name: "Iriga City",
    lat: 13.4167,
    lng: 123.4167,
  },
  {
    name: "Champdani",
    lat: 22.8,
    lng: 88.37,
  },
  {
    name: "Remscheid",
    lat: 51.1906,
    lng: 7.2247,
  },
  {
    name: "Kamyshin",
    lat: 50.0833,
    lng: 45.4,
  },
  {
    name: "Osmanabad",
    lat: 18.1667,
    lng: 76.05,
  },
  {
    name: "Algeciras",
    lat: 36.1267,
    lng: -5.4665,
  },
  {
    name: "Esteban Echeverria",
    lat: -34.8167,
    lng: -58.4667,
  },
  {
    name: "Dolgoprudnyy",
    lat: 55.9333,
    lng: 37.5,
  },
  {
    name: "Shkoder",
    lat: 42.0667,
    lng: 19.5,
  },
  {
    name: "Jena",
    lat: 50.9272,
    lng: 11.5864,
  },
  {
    name: "Mopti",
    lat: 14.49,
    lng: -4.18,
  },
  {
    name: "Kars",
    lat: 40.6069,
    lng: 43.0931,
  },
  {
    name: "Olmaliq",
    lat: 40.85,
    lng: 69.6,
  },
  {
    name: "Cavite City",
    lat: 14.4833,
    lng: 120.9,
  },
  {
    name: "Kuopio",
    lat: 62.8925,
    lng: 27.6783,
  },
  {
    name: "Ciudad Mante",
    lat: 22.7333,
    lng: -98.95,
  },
  {
    name: "Pompano Beach",
    lat: 26.2428,
    lng: -80.1312,
  },
  {
    name: "Tablada",
    lat: -34.6833,
    lng: -58.5333,
  },
  {
    name: "Laoag",
    lat: 18.2,
    lng: 120.6,
  },
  {
    name: "Zhukovskiy",
    lat: 55.6011,
    lng: 38.1161,
  },
  {
    name: "West Palm Beach",
    lat: 26.7468,
    lng: -80.1316,
  },
  {
    name: "Funchal",
    lat: 32.65,
    lng: -16.9167,
  },
  {
    name: "Ligao",
    lat: 13.2167,
    lng: 123.5167,
  },
  {
    name: "Kuqa",
    lat: 41.7277,
    lng: 82.9364,
  },
  {
    name: "Nsukka",
    lat: 6.8567,
    lng: 7.3958,
  },
  {
    name: "Escuintla",
    lat: 15.3194,
    lng: -92.6583,
  },
  {
    name: "Kazo",
    lat: 36.1314,
    lng: 139.6019,
  },
  {
    name: "Hounslow",
    lat: 51.4668,
    lng: -0.375,
  },
  {
    name: "Terni",
    lat: 42.5667,
    lng: 12.65,
  },
  {
    name: "Waterloo",
    lat: 42.492,
    lng: -92.3522,
  },
  {
    name: "Trier",
    lat: 49.7567,
    lng: 6.6414,
  },
  {
    name: "Terrebonne",
    lat: 45.7,
    lng: -73.6333,
  },
  {
    name: "Namur",
    lat: 50.4667,
    lng: 4.8667,
  },
  {
    name: "Rochdale",
    lat: 53.6136,
    lng: -2.161,
  },
  {
    name: "Murom",
    lat: 55.5725,
    lng: 42.0514,
  },
  {
    name: "Bedford",
    lat: 52.135,
    lng: -0.47,
  },
  {
    name: "Everett",
    lat: 47.9525,
    lng: -122.1669,
  },
  {
    name: "Manzini",
    lat: -26.4833,
    lng: 31.3667,
  },
  {
    name: "El Centro",
    lat: 32.7867,
    lng: -115.5586,
  },
  {
    name: "Villa Mercedes",
    lat: -33.6667,
    lng: -65.4667,
  },
  {
    name: "Winterthur",
    lat: 47.4992,
    lng: 8.7267,
  },
  {
    name: "Jawhar",
    lat: 2.767,
    lng: 45.5166,
  },
  {
    name: "Sandacho",
    lat: 34.8894,
    lng: 135.2253,
  },
  {
    name: "Tuzla",
    lat: 44.5381,
    lng: 18.6761,
  },
  {
    name: "Tarnow",
    lat: 50.0125,
    lng: 20.9883,
  },
  {
    name: "Santa Fe",
    lat: 35.6619,
    lng: -105.9819,
  },
  {
    name: "Khardah",
    lat: 22.72,
    lng: 88.38,
  },
  {
    name: "Gapan",
    lat: 15.3075,
    lng: 120.9453,
  },
  {
    name: "Nguru",
    lat: 12.8804,
    lng: 10.45,
  },
  {
    name: "Downey",
    lat: 33.9379,
    lng: -118.1312,
  },
  {
    name: "Stockport",
    lat: 53.4083,
    lng: -2.1494,
  },
  {
    name: "Kecskemet",
    lat: 46.9074,
    lng: 19.6917,
  },
  {
    name: "Lowell",
    lat: 42.6389,
    lng: -71.3217,
  },
  {
    name: "Ahuachapan",
    lat: 13.9214,
    lng: -89.845,
  },
  {
    name: "Fresnillo",
    lat: 23.175,
    lng: -102.8675,
  },
  {
    name: "Centennial",
    lat: 39.5926,
    lng: -104.8674,
  },
  {
    name: "Wloclawek",
    lat: 52.65,
    lng: 19.05,
  },
  {
    name: "Fasa",
    lat: 28.9381,
    lng: 53.6481,
  },
  {
    name: "As Salamiyah",
    lat: 35.0111,
    lng: 37.0531,
  },
  {
    name: "Yessentuki",
    lat: 44.0431,
    lng: 42.8644,
  },
  {
    name: "Elgin",
    lat: 42.0385,
    lng: -88.3229,
  },
  {
    name: "Tabuk",
    lat: 17.45,
    lng: 121.4583,
  },
  {
    name: "Kiffa",
    lat: 16.6164,
    lng: -11.4044,
  },
  {
    name: "Dali",
    lat: 34.7953,
    lng: 109.9378,
  },
  {
    name: "Yenangyaung",
    lat: 20.4583,
    lng: 94.8732,
  },
  {
    name: "Ourinhos",
    lat: -22.9789,
    lng: -49.8708,
  },
  {
    name: "Quibor",
    lat: 9.9281,
    lng: -69.5778,
  },
  {
    name: "Borazjan",
    lat: 29.2667,
    lng: 51.2158,
  },
  {
    name: "Richmond",
    lat: 37.9477,
    lng: -122.339,
  },
  {
    name: "Shinyanga",
    lat: -3.6619,
    lng: 33.4231,
  },
  {
    name: "Ash Shaykh `Uthman",
    lat: 12.8866,
    lng: 45.0279,
  },
  {
    name: "Genhe",
    lat: 50.7833,
    lng: 121.5167,
  },
  {
    name: "Montego Bay",
    lat: 18.4667,
    lng: -77.9167,
  },
  {
    name: "Jeonghae",
    lat: 35.5653,
    lng: 126.8561,
  },
  {
    name: "Shirayamamachi",
    lat: 36.5144,
    lng: 136.5656,
  },
  {
    name: "Baneh",
    lat: 35.9975,
    lng: 45.8853,
  },
  {
    name: "Mascara",
    lat: 35.4,
    lng: 0.1333,
  },
  {
    name: "Darlington",
    lat: 54.527,
    lng: -1.5526,
  },
  {
    name: "Broken Arrow",
    lat: 36.0365,
    lng: -95.7809,
  },
  {
    name: "Tinaquillo",
    lat: 9.9167,
    lng: -68.3,
  },
  {
    name: "Milton",
    lat: 43.5083,
    lng: -79.8833,
  },
  {
    name: "Yoju",
    lat: 37.2939,
    lng: 127.6383,
  },
  {
    name: "Bangaon",
    lat: 23.07,
    lng: 88.82,
  },
  {
    name: "Miami Gardens",
    lat: 25.9433,
    lng: -80.2426,
  },
  {
    name: "Bage",
    lat: -31.32,
    lng: -54.1,
  },
  {
    name: "Pisco",
    lat: -13.71,
    lng: -76.2032,
  },
  {
    name: "Dera Ismail Khan",
    lat: 31.8167,
    lng: 70.9167,
  },
  {
    name: "Taitung",
    lat: 22.7583,
    lng: 121.1444,
  },
  {
    name: "Mineshita",
    lat: 35.1186,
    lng: 138.9186,
  },
  {
    name: "The Woodlands",
    lat: 30.1738,
    lng: -95.5134,
  },
  {
    name: "Bend",
    lat: 44.0562,
    lng: -121.3087,
  },
  {
    name: "Burlington",
    lat: 44.4877,
    lng: -73.2314,
  },
  {
    name: "Kandi",
    lat: 11.1304,
    lng: 2.94,
  },
  {
    name: "Taourirt",
    lat: 34.41,
    lng: -2.89,
  },
  {
    name: "Apucarana",
    lat: -23.55,
    lng: -51.47,
  },
  {
    name: "Koszalin",
    lat: 54.1903,
    lng: 16.1817,
  },
  {
    name: "Baybay",
    lat: 10.6833,
    lng: 124.8,
  },
  {
    name: "Labe",
    lat: 11.3167,
    lng: -12.2833,
  },
  {
    name: "Jurupa Valley",
    lat: 34.001,
    lng: -117.4705,
  },
  {
    name: "Gualeguaychu",
    lat: -33.0078,
    lng: -58.5111,
  },
  {
    name: "Caen",
    lat: 49.18,
    lng: -0.37,
  },
  {
    name: "Botosani",
    lat: 47.7486,
    lng: 26.6694,
  },
  {
    name: "Sandy Springs",
    lat: 33.9366,
    lng: -84.3703,
  },
  {
    name: "Yongju",
    lat: 36.8217,
    lng: 128.6308,
  },
  {
    name: "Gresham",
    lat: 45.5023,
    lng: -122.4413,
  },
  {
    name: "Uitenhage",
    lat: -33.75,
    lng: 25.4,
  },
  {
    name: "Bukoba",
    lat: -1.3333,
    lng: 31.8167,
  },
  {
    name: "Corumba",
    lat: -19.0089,
    lng: -57.6528,
  },
  {
    name: "Maxixe",
    lat: -23.8597,
    lng: 35.3472,
  },
  {
    name: "Lewisville",
    lat: 33.0452,
    lng: -96.9823,
  },
  {
    name: "Ipiales",
    lat: 0.8289,
    lng: -77.6406,
  },
  {
    name: "Hillsboro",
    lat: 45.5272,
    lng: -122.9361,
  },
  {
    name: "Soma",
    lat: 39.1833,
    lng: 27.6056,
  },
  {
    name: "San Buenaventura",
    lat: 34.2741,
    lng: -119.2314,
  },
  {
    name: "Musoma",
    lat: -1.5069,
    lng: 33.8042,
  },
  {
    name: "Novoshakhtinsk",
    lat: 47.7667,
    lng: 39.9167,
  },
  {
    name: "Crawley",
    lat: 51.1092,
    lng: -0.1872,
  },
  {
    name: "Ferizaj",
    lat: 42.3667,
    lng: 21.1667,
  },
  {
    name: "Ikeda",
    lat: 34.8167,
    lng: 135.4333,
  },
  {
    name: "St. John's",
    lat: 47.4817,
    lng: -52.7971,
  },
  {
    name: "Jacksonville",
    lat: 34.7288,
    lng: -77.3941,
  },
  {
    name: "Salford",
    lat: 53.483,
    lng: -2.2931,
  },
  {
    name: "Wembley",
    lat: 51.5528,
    lng: -0.2979,
  },
  {
    name: "Pottstown",
    lat: 40.2507,
    lng: -75.6444,
  },
  {
    name: "Tajimi",
    lat: 35.3328,
    lng: 137.1322,
  },
  {
    name: "Moncton",
    lat: 46.1328,
    lng: -64.7714,
  },
  {
    name: "Tadpatri",
    lat: 14.92,
    lng: 78.02,
  },
  {
    name: "Huauchinango",
    lat: 20.1767,
    lng: -98.0528,
  },
  {
    name: "Yasuj",
    lat: 30.6667,
    lng: 51.5833,
  },
  {
    name: "Jalpaiguri",
    lat: 26.5167,
    lng: 88.7333,
  },
  {
    name: "Dagenham",
    lat: 51.5397,
    lng: 0.1422,
  },
  {
    name: "Barletta",
    lat: 41.32,
    lng: 16.27,
  },
  {
    name: "Birnin Kebbi",
    lat: 12.4504,
    lng: 4.1999,
  },
  {
    name: "Siauliai",
    lat: 55.9281,
    lng: 23.3167,
  },
  {
    name: "Seversk",
    lat: 56.6,
    lng: 84.85,
  },
  {
    name: "Teofilo Otoni",
    lat: -17.87,
    lng: -41.5,
  },
  {
    name: "El Limon",
    lat: 10.3059,
    lng: -67.6321,
  },
  {
    name: "Inglewood",
    lat: 33.9566,
    lng: -118.3444,
  },
  {
    name: "Orsha",
    lat: 54.5092,
    lng: 30.4258,
  },
  {
    name: "An Nuhud",
    lat: 12.6904,
    lng: 28.42,
  },
  {
    name: "San Rafael",
    lat: -34.6175,
    lng: -68.3356,
  },
  {
    name: "Tagbilaran City",
    lat: 9.65,
    lng: 123.85,
  },
  {
    name: "Thunder Bay",
    lat: 48.3822,
    lng: -89.2461,
  },
  {
    name: "Pavlohrad",
    lat: 48.52,
    lng: 35.87,
  },
  {
    name: "Spring Hill",
    lat: 28.4797,
    lng: -82.53,
  },
  {
    name: "Yevpatoriya",
    lat: 45.2,
    lng: 33.3583,
  },
  {
    name: "Douliu",
    lat: 23.7075,
    lng: 120.5439,
  },
  {
    name: "Juazeiro",
    lat: -9.42,
    lng: -40.5,
  },
  {
    name: "Chaman",
    lat: 30.921,
    lng: 66.4597,
  },
  {
    name: "Queenstown",
    lat: -31.9,
    lng: 26.8833,
  },
  {
    name: "Umm Qasr",
    lat: 30.0342,
    lng: 47.9294,
  },
  {
    name: "Sliven",
    lat: 42.6808,
    lng: 26.3164,
  },
  {
    name: "Suriapet",
    lat: 17.15,
    lng: 79.6167,
  },
  {
    name: "Kogon Shahri",
    lat: 39.7211,
    lng: 64.5458,
  },
  {
    name: "League City",
    lat: 29.4873,
    lng: -95.1087,
  },
  {
    name: "Kefar Sava",
    lat: 32.1858,
    lng: 34.9077,
  },
  {
    name: "Alchevsk",
    lat: 48.4672,
    lng: 38.7983,
  },
  {
    name: "Gillingham",
    lat: 51.385,
    lng: 0.55,
  },
  {
    name: "Eau Claire",
    lat: 44.8199,
    lng: -91.4949,
  },
  {
    name: "Bolzano",
    lat: 46.5,
    lng: 11.35,
  },
  {
    name: "Charsadda",
    lat: 34.1453,
    lng: 71.7308,
  },
  {
    name: "Roubaix",
    lat: 50.6901,
    lng: 3.1817,
  },
  {
    name: "Turlock",
    lat: 37.5053,
    lng: -120.8588,
  },
  {
    name: "Temple",
    lat: 31.1076,
    lng: -97.3894,
  },
  {
    name: "La Piedad",
    lat: 20.3333,
    lng: -102.0167,
  },
  {
    name: "Himamaylan",
    lat: 10.1,
    lng: 122.8667,
  },
  {
    name: "Mansfield",
    lat: 53.15,
    lng: -1.2,
  },
  {
    name: "Mmabatho",
    lat: -25.85,
    lng: 25.6333,
  },
  {
    name: "Ilebo",
    lat: -4.3167,
    lng: 20.6,
  },
  {
    name: "Taungoo",
    lat: 18.9483,
    lng: 96.4179,
  },
  {
    name: "Dieppe",
    lat: 46.0989,
    lng: -64.7242,
  },
  {
    name: "Arzamas",
    lat: 55.3833,
    lng: 43.8,
  },
  {
    name: "Moron",
    lat: -34.65,
    lng: -58.6167,
  },
  {
    name: "Longjiang",
    lat: 47.3404,
    lng: 123.18,
  },
  {
    name: "San Felipe",
    lat: 21.4833,
    lng: -101.2167,
  },
  {
    name: "Songea",
    lat: -10.6833,
    lng: 35.65,
  },
  {
    name: "Artem",
    lat: 43.35,
    lng: 132.1833,
  },
  {
    name: "Noyabr'sk",
    lat: 63.2017,
    lng: 75.4517,
  },
  {
    name: "Nakhon Si Thammarat",
    lat: 8.4333,
    lng: 99.9667,
  },
  {
    name: "Petrzalka",
    lat: 48.1333,
    lng: 17.1167,
  },
  {
    name: "Chabahar",
    lat: 25.2836,
    lng: 60.6236,
  },
  {
    name: "Raba",
    lat: -8.4614,
    lng: 118.747,
  },
  {
    name: "La Banda",
    lat: -27.7333,
    lng: -64.25,
  },
  {
    name: "Ourense",
    lat: 42.3364,
    lng: -7.8633,
  },
  {
    name: "Sioux City",
    lat: 42.4959,
    lng: -96.3901,
  },
  {
    name: "Kemalpasa",
    lat: 38.4261,
    lng: 27.4172,
  },
  {
    name: "Salisbury",
    lat: 38.3756,
    lng: -75.5867,
  },
  {
    name: "Vinh Long",
    lat: 10.255,
    lng: 105.9753,
  },
  {
    name: "Ballarat",
    lat: -37.55,
    lng: 143.85,
  },
  {
    name: "Davie",
    lat: 26.0789,
    lng: -80.287,
  },
  {
    name: "Achinsk",
    lat: 56.2817,
    lng: 90.5039,
  },
  {
    name: "Daly City",
    lat: 37.6862,
    lng: -122.4685,
  },
  {
    name: "Toride",
    lat: 35.9114,
    lng: 140.0503,
  },
  {
    name: "Subotica",
    lat: 46.0983,
    lng: 19.67,
  },
  {
    name: "Nusaybin",
    lat: 37.0833,
    lng: 41.2167,
  },
  {
    name: "Trincomalee",
    lat: 8.5667,
    lng: 81.2333,
  },
  {
    name: "Akhmim",
    lat: 26.5642,
    lng: 31.7461,
  },
  {
    name: "Azare",
    lat: 11.6804,
    lng: 10.19,
  },
  {
    name: "Brovary",
    lat: 50.5114,
    lng: 30.7903,
  },
  {
    name: "Yelets",
    lat: 52.6167,
    lng: 38.4667,
  },
  {
    name: "Pushkino",
    lat: 56.0167,
    lng: 37.85,
  },
  {
    name: "Liberec",
    lat: 50.77,
    lng: 15.0584,
  },
  {
    name: "Mazyr",
    lat: 52.05,
    lng: 29.2333,
  },
  {
    name: "Tikrit",
    lat: 34.6,
    lng: 43.6833,
  },
  {
    name: "Robat Karim",
    lat: 35.4847,
    lng: 51.0828,
  },
  {
    name: "Koutiala",
    lat: 12.3904,
    lng: -5.47,
  },
  {
    name: "Passos",
    lat: -20.71,
    lng: -46.61,
  },
  {
    name: "Lerma",
    lat: 19.2847,
    lng: -99.5119,
  },
  {
    name: "Ciudad Rio Bravo",
    lat: 25.9861,
    lng: -98.0889,
  },
  {
    name: "Allen",
    lat: 33.1088,
    lng: -96.6735,
  },
  {
    name: "Tarim",
    lat: 16.05,
    lng: 49,
  },
  {
    name: "Kroonstad",
    lat: -27.6456,
    lng: 27.2317,
  },
  {
    name: "Kandhkot",
    lat: 28.4,
    lng: 69.3,
  },
  {
    name: "Granada",
    lat: 11.93,
    lng: -85.9561,
  },
  {
    name: "Novara",
    lat: 45.45,
    lng: 8.6167,
  },
  {
    name: "Kongolo",
    lat: -5.3795,
    lng: 26.98,
  },
  {
    name: "Moers",
    lat: 51.4592,
    lng: 6.6197,
  },
  {
    name: "Kalisz",
    lat: 51.757,
    lng: 18.083,
  },
  {
    name: "Saijo",
    lat: 33.9196,
    lng: 133.1812,
  },
  {
    name: "Yozgat",
    lat: 39.8208,
    lng: 34.8083,
  },
  {
    name: "Highlands Ranch",
    lat: 39.5419,
    lng: -104.9708,
  },
  {
    name: "Al Faw",
    lat: 29.98,
    lng: 48.47,
  },
  {
    name: "West Covina",
    lat: 34.0555,
    lng: -117.9112,
  },
  {
    name: "Salzgitter",
    lat: 52.1503,
    lng: 10.3593,
  },
  {
    name: "Berdsk",
    lat: 54.75,
    lng: 83.1,
  },
  {
    name: "Sparks",
    lat: 39.5729,
    lng: -119.7157,
  },
  {
    name: "Waterloo",
    lat: 43.4667,
    lng: -80.5167,
  },
  {
    name: "Galle",
    lat: 6.0395,
    lng: 80.2194,
  },
  {
    name: "Tadepallegudem",
    lat: 16.8333,
    lng: 81.5,
  },
  {
    name: "Zomba",
    lat: -15.3833,
    lng: 35.3333,
  },
  {
    name: "Dobrich",
    lat: 43.5667,
    lng: 27.8333,
  },
  {
    name: "Sergiyev Posad",
    lat: 56.3,
    lng: 38.1333,
  },
  {
    name: "Konotop",
    lat: 51.2369,
    lng: 33.2027,
  },
  {
    name: "Courbevoic",
    lat: 48.8978,
    lng: 2.2531,
  },
  {
    name: "Zihuatanejo",
    lat: 17.6444,
    lng: -101.5511,
  },
  {
    name: "Bouskoura",
    lat: 33.4489,
    lng: -7.6486,
  },
  {
    name: "Lysychansk",
    lat: 48.9169,
    lng: 38.4306,
  },
  {
    name: "Khak-e `Ali",
    lat: 36.1283,
    lng: 50.1764,
  },
  {
    name: "Maumere",
    lat: -8.6189,
    lng: 122.2123,
  },
  {
    name: "Samal",
    lat: 7.05,
    lng: 125.7333,
  },
  {
    name: "Girona",
    lat: 41.9833,
    lng: 2.8167,
  },
  {
    name: "San Mateo",
    lat: 37.5521,
    lng: -122.3122,
  },
  {
    name: "Villa Luzuriaga",
    lat: -34.6667,
    lng: -58.5833,
  },
  {
    name: "Eastbourne",
    lat: 50.77,
    lng: 0.28,
  },
  {
    name: "Worcester",
    lat: 52.192,
    lng: -2.22,
  },
  {
    name: "Caseros",
    lat: -34.6167,
    lng: -58.5333,
  },
  {
    name: "Fyfield",
    lat: 51.739,
    lng: 0.2722,
  },
  {
    name: "Tula de Allende",
    lat: 20.05,
    lng: -99.35,
  },
  {
    name: "Catbalogan",
    lat: 11.7833,
    lng: 124.8833,
  },
  {
    name: "Chongshan",
    lat: 18.7787,
    lng: 109.5117,
  },
  {
    name: "Abengourou",
    lat: 6.7297,
    lng: -3.4964,
  },
  {
    name: "Lower Hutt",
    lat: -41.2167,
    lng: 174.9167,
  },
  {
    name: "Kalyani",
    lat: 22.975,
    lng: 88.4344,
  },
  {
    name: "Kilinochchi",
    lat: 9.4004,
    lng: 80.3999,
  },
  {
    name: "Sakado",
    lat: 35.9572,
    lng: 139.4031,
  },
  {
    name: "Isehara",
    lat: 35.4028,
    lng: 139.315,
  },
  {
    name: "Piacenza",
    lat: 45.05,
    lng: 9.7,
  },
  {
    name: "Ed Damer",
    lat: 17.59,
    lng: 33.96,
  },
  {
    name: "Norwalk",
    lat: 33.9069,
    lng: -118.0829,
  },
  {
    name: "Santa Rosa",
    lat: -36.6203,
    lng: -64.2906,
  },
  {
    name: "Dolisie",
    lat: -4.1961,
    lng: 12.6731,
  },
  {
    name: "Negapatam",
    lat: 10.7667,
    lng: 79.8333,
  },
  {
    name: "Wigan",
    lat: 53.5448,
    lng: -2.6318,
  },
  {
    name: "Tourcoing",
    lat: 50.7239,
    lng: 3.1612,
  },
  {
    name: "Osijek",
    lat: 45.5603,
    lng: 18.6703,
  },
  {
    name: "Ariana",
    lat: 36.8667,
    lng: 10.2,
  },
  {
    name: "Siegen",
    lat: 50.8756,
    lng: 8.0167,
  },
  {
    name: "Gardez",
    lat: 33.5931,
    lng: 69.2297,
  },
  {
    name: "Biak",
    lat: -1.1615,
    lng: 136.0485,
  },
  {
    name: "Columbia",
    lat: 39.2004,
    lng: -76.859,
  },
  {
    name: "Elista",
    lat: 46.3167,
    lng: 44.2667,
  },
  {
    name: "Libertad",
    lat: -34.6833,
    lng: -58.6833,
  },
  {
    name: "Rialto",
    lat: 34.1174,
    lng: -117.3894,
  },
  {
    name: "Thika",
    lat: -1.0396,
    lng: 37.09,
  },
  {
    name: "Manteca",
    lat: 37.7927,
    lng: -121.2264,
  },
  {
    name: "Araxa",
    lat: -19.5928,
    lng: -46.9408,
  },
  {
    name: "Bumba",
    lat: 2.19,
    lng: 22.46,
  },
  {
    name: "Bayugan",
    lat: 8.7143,
    lng: 125.7481,
  },
  {
    name: "Burzaco",
    lat: -34.8167,
    lng: -58.3667,
  },
  {
    name: "Talara",
    lat: -4.5833,
    lng: -81.2667,
  },
  {
    name: "Novokuybyshevsk",
    lat: 53.1,
    lng: 49.9167,
  },
  {
    name: "Bergama",
    lat: 39.1228,
    lng: 27.1783,
  },
  {
    name: "Miryang",
    lat: 35.4933,
    lng: 128.7489,
  },
  {
    name: "Nyeri",
    lat: -0.4167,
    lng: 36.95,
  },
  {
    name: "Satu Mare",
    lat: 47.79,
    lng: 22.89,
  },
  {
    name: "Houzhuang",
    lat: 35.62,
    lng: 111.21,
  },
  {
    name: "Hildesheim",
    lat: 52.15,
    lng: 9.95,
  },
  {
    name: "Ginowan",
    lat: 26.2817,
    lng: 127.7783,
  },
  {
    name: "Sangju",
    lat: 36.4153,
    lng: 128.1606,
  },
  {
    name: "Kirklareli",
    lat: 41.7347,
    lng: 27.2253,
  },
  {
    name: "Hove",
    lat: 50.8352,
    lng: -0.1758,
  },
  {
    name: "Legnica",
    lat: 51.2101,
    lng: 16.1619,
  },
  {
    name: "Nanterre",
    lat: 48.8988,
    lng: 2.1969,
  },
  {
    name: "Bhadreswar",
    lat: 22.82,
    lng: 88.35,
  },
  {
    name: "Noginsk",
    lat: 55.85,
    lng: 38.4333,
  },
  {
    name: "Nikaia",
    lat: 37.9667,
    lng: 23.6333,
  },
  {
    name: "Lida",
    lat: 53.8872,
    lng: 25.3028,
  },
  {
    name: "Saint Helens",
    lat: 53.4541,
    lng: -2.7461,
  },
  {
    name: "Talisay",
    lat: 10.7333,
    lng: 122.9667,
  },
  {
    name: "El Cajon",
    lat: 32.8017,
    lng: -116.9605,
  },
  {
    name: "Bethal",
    lat: -26.45,
    lng: 29.45,
  },
  {
    name: "Mumias",
    lat: 0.3333,
    lng: 34.4833,
  },
  {
    name: "Burbank",
    lat: 34.1879,
    lng: -118.3235,
  },
  {
    name: "Longmont",
    lat: 40.1686,
    lng: -105.1005,
  },
  {
    name: "Yunfu",
    lat: 28.6331,
    lng: 104.4181,
  },
  {
    name: "Mayari",
    lat: 20.6592,
    lng: -75.6781,
  },
  {
    name: "Mositai",
    lat: 45.5266,
    lng: 119.6506,
  },
  {
    name: "Dhangadhi",
    lat: 28.6833,
    lng: 80.6,
  },
  {
    name: "Kashmar",
    lat: 35.2383,
    lng: 58.4656,
  },
  {
    name: "San Felipe del Progreso",
    lat: 19.7125,
    lng: -99.9511,
  },
  {
    name: "Klagenfurt",
    lat: 46.6167,
    lng: 14.3,
  },
  {
    name: "Delta",
    lat: 49.0847,
    lng: -123.0586,
  },
  {
    name: "Chilakalurupet",
    lat: 16.0892,
    lng: 80.1672,
  },
  {
    name: "Coatepec",
    lat: 19.4553,
    lng: -96.9586,
  },
  {
    name: "Sabratah",
    lat: 32.7922,
    lng: 12.4842,
  },
  {
    name: "Trindade",
    lat: -16.65,
    lng: -49.5,
  },
  {
    name: "Boryeong",
    lat: 36.3333,
    lng: 126.6167,
  },
  {
    name: "Shushtar",
    lat: 32.0436,
    lng: 48.8569,
  },
  {
    name: "Santo Antonio de Jesus",
    lat: -12.9692,
    lng: -39.2611,
  },
  {
    name: "Teluk Intan",
    lat: 4.0333,
    lng: 101.0167,
  },
  {
    name: "Hemel Hempstead",
    lat: 51.7526,
    lng: -0.4692,
  },
  {
    name: "Assis",
    lat: -22.6619,
    lng: -50.4119,
  },
  {
    name: "Berisso",
    lat: -34.8667,
    lng: -57.8667,
  },
  {
    name: "Renton",
    lat: 47.4784,
    lng: -122.1919,
  },
  {
    name: "Inzai",
    lat: 35.8322,
    lng: 140.1458,
  },
  {
    name: "Duitama",
    lat: 5.8305,
    lng: -73.02,
  },
  {
    name: "Chatham",
    lat: 42.4229,
    lng: -82.1324,
  },
  {
    name: "`Ibri",
    lat: 23.2254,
    lng: 56.517,
  },
  {
    name: "Vista",
    lat: 33.1896,
    lng: -117.2386,
  },
  {
    name: "Olomouc",
    lat: 49.5939,
    lng: 17.2508,
  },
  {
    name: "Zheleznogorsk",
    lat: 52.3333,
    lng: 35.3667,
  },
  {
    name: "Logan",
    lat: 41.74,
    lng: -111.8419,
  },
  {
    name: "Patos",
    lat: -7.0196,
    lng: -37.29,
  },
  {
    name: "Sungai Penuh",
    lat: -2.0636,
    lng: 101.3961,
  },
  {
    name: "Vitry-sur-Seine",
    lat: 48.7875,
    lng: 2.3928,
  },
  {
    name: "Tizayuca",
    lat: 19.8333,
    lng: -98.9833,
  },
  {
    name: "Socopo",
    lat: 8.2322,
    lng: -70.8206,
  },
  {
    name: "Prescott Valley",
    lat: 34.5983,
    lng: -112.3176,
  },
  {
    name: "Ancona",
    lat: 43.6167,
    lng: 13.5167,
  },
  {
    name: "Trinidad",
    lat: -14.8333,
    lng: -64.9,
  },
  {
    name: "Salihorsk",
    lat: 52.7842,
    lng: 27.5425,
  },
  {
    name: "Vacaville",
    lat: 38.359,
    lng: -121.968,
  },
  {
    name: "San Luis de la Paz",
    lat: 21.3,
    lng: -100.5167,
  },
  {
    name: "Wakefield",
    lat: 53.68,
    lng: -1.49,
  },
  {
    name: "Chikusei",
    lat: 36.3072,
    lng: 139.9831,
  },
  {
    name: "Oued Zem",
    lat: 32.86,
    lng: -6.56,
  },
  {
    name: "Kani",
    lat: 35.4258,
    lng: 137.0611,
  },
  {
    name: "Edinburg",
    lat: 26.3197,
    lng: -98.1596,
  },
  {
    name: "Konan",
    lat: 35.3333,
    lng: 136.8667,
  },
  {
    name: "Mishan",
    lat: 45.5504,
    lng: 131.88,
  },
  {
    name: "Gutersloh",
    lat: 51.9,
    lng: 8.3833,
  },
  {
    name: "Sakata",
    lat: 38.9144,
    lng: 139.8364,
  },
  {
    name: "Carmel",
    lat: 39.965,
    lng: -86.146,
  },
  {
    name: "Spokane Valley",
    lat: 47.6626,
    lng: -117.2346,
  },
  {
    name: "Oum el Bouaghi",
    lat: 35.8706,
    lng: 7.115,
  },
  {
    name: "Watford",
    lat: 51.655,
    lng: -0.3957,
  },
  {
    name: "Jilotepec",
    lat: 19.9519,
    lng: -99.5328,
  },
  {
    name: "Navapolatsk",
    lat: 55.5333,
    lng: 28.6667,
  },
  {
    name: "Cottbus",
    lat: 51.7606,
    lng: 14.3342,
  },
  {
    name: "Edison",
    lat: 40.536,
    lng: -74.3697,
  },
  {
    name: "Kpalime",
    lat: 6.91,
    lng: 0.6281,
  },
  {
    name: "San Angelo",
    lat: 31.4424,
    lng: -100.4506,
  },
  {
    name: "Lakewood",
    lat: 40.0763,
    lng: -74.2031,
  },
  {
    name: "Kaiserslautern",
    lat: 49.4447,
    lng: 7.7689,
  },
  {
    name: "Gangtok",
    lat: 27.33,
    lng: 88.62,
  },
  {
    name: "La Crosse",
    lat: 43.824,
    lng: -91.2268,
  },
  {
    name: "Ahar",
    lat: 38.475,
    lng: 47.0603,
  },
  {
    name: "Diourbel",
    lat: 14.655,
    lng: -16.2314,
  },
  {
    name: "Andria",
    lat: 41.2317,
    lng: 16.3083,
  },
  {
    name: "Tsuyama",
    lat: 35.1406,
    lng: 134.0319,
  },
  {
    name: "Arden-Arcade",
    lat: 38.6034,
    lng: -121.381,
  },
  {
    name: "Masjed Soleyman",
    lat: 31.9333,
    lng: 49.3,
  },
  {
    name: "Mairipora",
    lat: -23.3189,
    lng: -46.5869,
  },
  {
    name: "Torbat-e Jam",
    lat: 35.2439,
    lng: 60.6225,
  },
  {
    name: "Magangue",
    lat: 9.23,
    lng: -74.74,
  },
  {
    name: "Kam'yanets'-Podil's'kyy",
    lat: 48.6806,
    lng: 26.5806,
  },
  {
    name: "Idaho Falls",
    lat: 43.4872,
    lng: -112.0362,
  },
  {
    name: "Holland",
    lat: 42.7677,
    lng: -86.0985,
  },
  {
    name: "Red Deer",
    lat: 52.2681,
    lng: -113.8111,
  },
  {
    name: "Charlottesville",
    lat: 38.0375,
    lng: -78.4855,
  },
  {
    name: "Drohobych",
    lat: 49.35,
    lng: 23.5,
  },
  {
    name: "Shahrisabz",
    lat: 39.05,
    lng: 66.8333,
  },
  {
    name: "Lincoln",
    lat: 53.2344,
    lng: -0.5386,
  },
  {
    name: "Longview",
    lat: 32.5193,
    lng: -94.7621,
  },
  {
    name: "Woodbridge",
    lat: 40.5611,
    lng: -74.2943,
  },
  {
    name: "Tracy",
    lat: 37.7269,
    lng: -121.4522,
  },
  {
    name: "Kamloops",
    lat: 50.6761,
    lng: -120.3408,
  },
  {
    name: "Bento Goncalves",
    lat: -29.1695,
    lng: -51.52,
  },
  {
    name: "Ramnicu Valcea",
    lat: 45.1047,
    lng: 24.3756,
  },
  {
    name: "Erechim",
    lat: -27.63,
    lng: -52.27,
  },
  {
    name: "Kettering",
    lat: 52.3931,
    lng: -0.7229,
  },
  {
    name: "Viseu",
    lat: 40.6667,
    lng: -7.9167,
  },
  {
    name: "Kohima",
    lat: 25.6667,
    lng: 94.1194,
  },
  {
    name: "Mingacevir",
    lat: 40.77,
    lng: 47.0489,
  },
  {
    name: "Janakpur",
    lat: 26.7122,
    lng: 85.9217,
  },
  {
    name: "Chipata",
    lat: -13.6386,
    lng: 32.6453,
  },
  {
    name: "Tultepec",
    lat: 19.685,
    lng: -99.1281,
  },
  {
    name: "Ciudad General Belgrano",
    lat: -34.7261,
    lng: -58.5289,
  },
  {
    name: "Khanty-Mansiysk",
    lat: 61,
    lng: 69,
  },
  {
    name: "Creteil",
    lat: 48.7911,
    lng: 2.4628,
  },
  {
    name: "Bismarck",
    lat: 46.8144,
    lng: -100.7694,
  },
  {
    name: "Herzliyya",
    lat: 32.1556,
    lng: 34.8422,
  },
  {
    name: "Yen Bai",
    lat: 21.7,
    lng: 104.8667,
  },
  {
    name: "Shumen",
    lat: 43.27,
    lng: 26.9244,
  },
  {
    name: "Orem",
    lat: 40.2983,
    lng: -111.6992,
  },
  {
    name: "Yashio",
    lat: 35.8228,
    lng: 139.8392,
  },
  {
    name: "Half Way Tree",
    lat: 18.0106,
    lng: -76.7975,
  },
  {
    name: "Vi Thanh",
    lat: 9.7833,
    lng: 105.4708,
  },
  {
    name: "Tumbes",
    lat: -3.5667,
    lng: -80.45,
  },
  {
    name: "Malindi",
    lat: -3.21,
    lng: 40.1,
  },
  {
    name: "Szekesfehervar",
    lat: 47.2,
    lng: 18.4167,
  },
  {
    name: "Xirdalan",
    lat: 40.4486,
    lng: 49.7564,
  },
  {
    name: "Tenancingo",
    lat: 18.9608,
    lng: -99.5906,
  },
  {
    name: "Ponta Pora",
    lat: -22.5361,
    lng: -55.7256,
  },
  {
    name: "Wangqing",
    lat: 43.3248,
    lng: 129.7343,
  },
  {
    name: "Sibolga",
    lat: 1.7425,
    lng: 98.7792,
  },
  {
    name: "Aubervilliers",
    lat: 48.9131,
    lng: 2.3831,
  },
  {
    name: "Balanga",
    lat: 14.6833,
    lng: 120.5333,
  },
  {
    name: "Bunia",
    lat: 1.5604,
    lng: 30.24,
  },
  {
    name: "Arauca",
    lat: 7.0903,
    lng: -70.7617,
  },
  {
    name: "Totonicapan",
    lat: 14.9108,
    lng: -91.3606,
  },
  {
    name: "Sidi Slimane",
    lat: 34.26,
    lng: -5.93,
  },
  {
    name: "Peje",
    lat: 42.65,
    lng: 20.3,
  },
  {
    name: "Yishui",
    lat: 35.7904,
    lng: 118.62,
  },
  {
    name: "Fulham",
    lat: 51.4828,
    lng: -0.195,
  },
  {
    name: "Muriae",
    lat: -21.13,
    lng: -42.39,
  },
  {
    name: "Schwerin",
    lat: 53.6333,
    lng: 11.4167,
  },
  {
    name: "San Francisco Solano",
    lat: -34.7667,
    lng: -58.3167,
  },
  {
    name: "Tartu",
    lat: 58.38,
    lng: 26.7225,
  },
  {
    name: "Zifta",
    lat: 30.7119,
    lng: 31.2394,
  },
  {
    name: "Ceske Budejovice",
    lat: 48.9747,
    lng: 14.4747,
  },
  {
    name: "Colombes",
    lat: 48.9236,
    lng: 2.2522,
  },
  {
    name: "Cankiri",
    lat: 40.6,
    lng: 33.6167,
  },
  {
    name: "East Ham",
    lat: 51.5323,
    lng: 0.0554,
  },
  {
    name: "Masbate",
    lat: 12.3667,
    lng: 123.6167,
  },
  {
    name: "Kakamega",
    lat: 0.2833,
    lng: 34.75,
  },
  {
    name: "Rio Gallegos",
    lat: -51.6333,
    lng: -69.2333,
  },
  {
    name: "Ludwigsburg",
    lat: 48.8975,
    lng: 9.1919,
  },
  {
    name: "Compton",
    lat: 33.893,
    lng: -118.2275,
  },
  {
    name: "Errachidia",
    lat: 31.9319,
    lng: -4.4244,
  },
  {
    name: "Esslingen",
    lat: 48.7406,
    lng: 9.3108,
  },
  {
    name: "Al Bahah",
    lat: 20.0129,
    lng: 41.4677,
  },
  {
    name: "Yotsukaido",
    lat: 35.67,
    lng: 140.1683,
  },
  {
    name: "Sunrise",
    lat: 26.1547,
    lng: -80.2997,
  },
  {
    name: "Noumea",
    lat: -22.2625,
    lng: 166.4443,
  },
  {
    name: "Barnsley",
    lat: 53.5537,
    lng: -1.4791,
  },
  {
    name: "Hartlepool",
    lat: 54.69,
    lng: -1.21,
  },
  {
    name: "Obu",
    lat: 35.0167,
    lng: 136.9667,
  },
  {
    name: "Gjakove",
    lat: 42.3833,
    lng: 20.4333,
  },
  {
    name: "Mtwara",
    lat: -10.2736,
    lng: 40.1828,
  },
  {
    name: "Ealing",
    lat: 51.5175,
    lng: -0.2988,
  },
  {
    name: "Birkenhead",
    lat: 53.393,
    lng: -3.014,
  },
  {
    name: "Guercif",
    lat: 34.23,
    lng: -3.36,
  },
  {
    name: "Quincy",
    lat: 42.2516,
    lng: -71.0183,
  },
  {
    name: "Lynn",
    lat: 42.4779,
    lng: -70.9663,
  },
  {
    name: "Monte Chingolo",
    lat: -34.7333,
    lng: -58.35,
  },
  {
    name: "Drobeta-Turnu Severin",
    lat: 44.6361,
    lng: 22.6556,
  },
  {
    name: "Nisshin",
    lat: 35.1333,
    lng: 137.0333,
  },
  {
    name: "Haskovo",
    lat: 41.9311,
    lng: 25.5575,
  },
  {
    name: "Suceava",
    lat: 47.6514,
    lng: 26.2556,
  },
  {
    name: "Hradec Kralove",
    lat: 50.2092,
    lng: 15.8319,
  },
  {
    name: "Al Fujayrah",
    lat: 25.1308,
    lng: 56.3347,
  },
  {
    name: "Usti nad Labem",
    lat: 50.6592,
    lng: 14.0417,
  },
  {
    name: "Ciudad Lazaro Cardenas",
    lat: 17.9561,
    lng: -102.1922,
  },
  {
    name: "Sirnak",
    lat: 37.5164,
    lng: 42.4611,
  },
  {
    name: "South Gate",
    lat: 33.9448,
    lng: -118.1926,
  },
  {
    name: "Miaoli",
    lat: 24.57,
    lng: 120.82,
  },
  {
    name: "Makeni",
    lat: 8.8817,
    lng: -12.0442,
  },
  {
    name: "Nuneaton",
    lat: 52.523,
    lng: -1.468,
  },
  {
    name: "Itanhaem",
    lat: -24.1831,
    lng: -46.7889,
  },
  {
    name: "Brixton",
    lat: 51.463,
    lng: -0.106,
  },
  {
    name: "Kirkland",
    lat: 47.6974,
    lng: -122.2054,
  },
  {
    name: "Levallois-Perret",
    lat: 48.895,
    lng: 2.2872,
  },
  {
    name: "Brusque",
    lat: -27.13,
    lng: -48.93,
  },
  {
    name: "Santiago de Compostela",
    lat: 42.8805,
    lng: -8.5457,
  },
  {
    name: "Magadan",
    lat: 59.5667,
    lng: 150.8,
  },
  {
    name: "Pardubice",
    lat: 50.0386,
    lng: 15.7792,
  },
  {
    name: "Bender",
    lat: 46.8333,
    lng: 29.4833,
  },
  {
    name: "Panevezys",
    lat: 55.725,
    lng: 24.3639,
  },
  {
    name: "Jaffna",
    lat: 9.6647,
    lng: 80.0167,
  },
  {
    name: "Bromley",
    lat: 51.407,
    lng: 0.021,
  },
  {
    name: "Abaetetuba",
    lat: -1.7245,
    lng: -48.8849,
  },
  {
    name: "Queluz",
    lat: 38.7566,
    lng: -9.2545,
  },
  {
    name: "Bath",
    lat: 51.38,
    lng: -2.36,
  },
  {
    name: "Santana",
    lat: -0.0583,
    lng: -51.1817,
  },
  {
    name: "`Amran",
    lat: 15.65,
    lng: 43.9333,
  },
  {
    name: "Edmonton",
    lat: 51.6154,
    lng: -0.0708,
  },
  {
    name: "Lqoliaa",
    lat: 30.2942,
    lng: -9.4544,
  },
  {
    name: "Hayes",
    lat: 51.5127,
    lng: -0.4211,
  },
  {
    name: "Lobnya",
    lat: 56.0167,
    lng: 37.4833,
  },
  {
    name: "Francistown",
    lat: -21.1736,
    lng: 27.5125,
  },
  {
    name: "Catanzaro",
    lat: 38.91,
    lng: 16.5875,
  },
  {
    name: "Aulnay-sous-Bois",
    lat: 48.9386,
    lng: 2.4906,
  },
  {
    name: "Jonkoping",
    lat: 57.7713,
    lng: 14.165,
  },
  {
    name: "Germantown",
    lat: 39.1755,
    lng: -77.2643,
  },
  {
    name: "Babahoyo",
    lat: -1.8167,
    lng: -79.5167,
  },
  {
    name: "Takasagocho-takasemachi",
    lat: 34.7658,
    lng: 134.7906,
  },
  {
    name: "Glyfada",
    lat: 37.88,
    lng: 23.7533,
  },
  {
    name: "Cadereyta Jimenez",
    lat: 25.6,
    lng: -100,
  },
  {
    name: "Westminster",
    lat: 33.7523,
    lng: -117.9938,
  },
  {
    name: "Remedios de Escalada",
    lat: -34.7167,
    lng: -58.4,
  },
  {
    name: "Vanadzor",
    lat: 40.8128,
    lng: 44.4883,
  },
  {
    name: "Kitanagoya",
    lat: 35.25,
    lng: 136.8667,
  },
  {
    name: "Higashiyamato",
    lat: 35.7456,
    lng: 139.4267,
  },
  {
    name: "Tartus",
    lat: 34.8833,
    lng: 35.8833,
  },
  {
    name: "Valjevo",
    lat: 44.2667,
    lng: 19.8833,
  },
  {
    name: "Santa Monica",
    lat: 34.0232,
    lng: -118.4813,
  },
  {
    name: "Poitiers",
    lat: 46.58,
    lng: 0.34,
  },
  {
    name: "Acayucan",
    lat: 17.9422,
    lng: -94.9103,
  },
  {
    name: "Gjilan",
    lat: 42.47,
    lng: 21.47,
  },
  {
    name: "Jalal-Abad",
    lat: 40.9375,
    lng: 72.9861,
  },
  {
    name: "Umea",
    lat: 63.8285,
    lng: 20.2706,
  },
  {
    name: "Presov",
    lat: 49,
    lng: 21.2333,
  },
  {
    name: "Balkanabat",
    lat: 39.5119,
    lng: 54.365,
  },
  {
    name: "Mechelen",
    lat: 51.0281,
    lng: 4.4803,
  },
  {
    name: "Mukacheve",
    lat: 48.4414,
    lng: 22.7136,
  },
  {
    name: "As Salt",
    lat: 32.0333,
    lng: 35.7333,
  },
  {
    name: "Ciudad de Ceuta",
    lat: 35.8867,
    lng: -5.3,
  },
  {
    name: "Versailles",
    lat: 48.8053,
    lng: 2.135,
  },
  {
    name: "Caceres",
    lat: -16.05,
    lng: -57.51,
  },
  {
    name: "Volos",
    lat: 39.3611,
    lng: 22.9425,
  },
  {
    name: "Carrieres-sur-Seine",
    lat: 48.9108,
    lng: 2.2889,
  },
  {
    name: "Paulo Afonso",
    lat: -9.3307,
    lng: -38.2657,
  },
  {
    name: "Viana do Castelo",
    lat: 41.7,
    lng: -8.8333,
  },
  {
    name: "Woolwich",
    lat: 51.488,
    lng: 0.063,
  },
  {
    name: "Miami Beach",
    lat: 25.8171,
    lng: -80.1396,
  },
  {
    name: "San Leandro",
    lat: 37.7071,
    lng: -122.1601,
  },
  {
    name: "Bracknell",
    lat: 51.416,
    lng: -0.749,
  },
  {
    name: "Podujeve",
    lat: 42.9167,
    lng: 21.2,
  },
  {
    name: "Apizaco",
    lat: 19.4167,
    lng: -98.1333,
  },
  {
    name: "Coronel Oviedo",
    lat: -25.45,
    lng: -56.44,
  },
  {
    name: "Codo",
    lat: -4.4796,
    lng: -43.88,
  },
  {
    name: "Fuentes del Valle",
    lat: 19.6325,
    lng: -99.1386,
  },
  {
    name: "Ebolowa",
    lat: 2.9,
    lng: 11.15,
  },
  {
    name: "San Juan de los Morros",
    lat: 9.901,
    lng: -67.354,
  },
  {
    name: "Citrus Heights",
    lat: 38.6948,
    lng: -121.288,
  },
  {
    name: "State College",
    lat: 40.7909,
    lng: -77.8568,
  },
  {
    name: "Koudougou",
    lat: 12.25,
    lng: -2.3667,
  },
  {
    name: "Darayya",
    lat: 33.4589,
    lng: 36.2372,
  },
  {
    name: "Lokossa",
    lat: 6.615,
    lng: 1.715,
  },
  {
    name: "Salina Cruz",
    lat: 16.1671,
    lng: -95.2,
  },
  {
    name: "Concepcion",
    lat: -23.4025,
    lng: -57.4414,
  },
  {
    name: "Jalpa de Mendez",
    lat: 18.1764,
    lng: -93.0631,
  },
  {
    name: "Mardin",
    lat: 37.3167,
    lng: 40.7378,
  },
  {
    name: "Nakhon Sawan",
    lat: 15.7133,
    lng: 100.1353,
  },
  {
    name: "Como",
    lat: 45.8103,
    lng: 9.0861,
  },
  {
    name: "Nacajuca",
    lat: 18.1692,
    lng: -93.0197,
  },
  {
    name: "Cardenas",
    lat: 17.983,
    lng: -93.367,
  },
  {
    name: "Loznica",
    lat: 44.5333,
    lng: 19.2258,
  },
  {
    name: "Edgware",
    lat: 51.6185,
    lng: -0.2729,
  },
  {
    name: "Tucupita",
    lat: 9.0575,
    lng: -62.0452,
  },
  {
    name: "Nabatiye",
    lat: 33.3833,
    lng: 35.45,
  },
  {
    name: "Kanasin",
    lat: 20.9344,
    lng: -89.5578,
  },
  {
    name: "Ezpeleta",
    lat: -34.7517,
    lng: -58.2344,
  },
  {
    name: "Derry",
    lat: 55.0004,
    lng: -7.3333,
  },
  {
    name: "Piatra Neamt",
    lat: 46.9275,
    lng: 26.3708,
  },
  {
    name: "Ath Thawrah",
    lat: 35.8344,
    lng: 38.5464,
  },
  {
    name: "Hawthorne",
    lat: 33.9146,
    lng: -118.3476,
  },
  {
    name: "Lavras",
    lat: -21.2453,
    lng: -44.9997,
  },
  {
    name: "Avare",
    lat: -23.0986,
    lng: -48.9258,
  },
  {
    name: "Busto Arsizio",
    lat: 45.612,
    lng: 8.8518,
  },
  {
    name: "Maasin",
    lat: 10.1333,
    lng: 124.85,
  },
  {
    name: "Kouvola",
    lat: 60.8681,
    lng: 26.7042,
  },
  {
    name: "Kuznetsk",
    lat: 53.1167,
    lng: 46.6,
  },
  {
    name: "Owariasahi",
    lat: 35.2167,
    lng: 137.0333,
  },
  {
    name: "Daugavpils",
    lat: 55.8714,
    lng: 26.5161,
  },
  {
    name: "Ciudad Lerdo",
    lat: 25.55,
    lng: -103.5167,
  },
  {
    name: "Issy-les-Moulineaux",
    lat: 48.8239,
    lng: 2.27,
  },
  {
    name: "Pori",
    lat: 61.4847,
    lng: 21.7972,
  },
  {
    name: "Scunthorpe",
    lat: 53.5809,
    lng: -0.6502,
  },
  {
    name: "Yambol",
    lat: 42.4844,
    lng: 26.5086,
  },
  {
    name: "Louga",
    lat: 15.6167,
    lng: -16.2167,
  },
  {
    name: "Manfalut",
    lat: 27.3128,
    lng: 30.9703,
  },
  {
    name: "Whittier",
    lat: 33.9678,
    lng: -118.0188,
  },
  {
    name: "Clifton",
    lat: 40.8631,
    lng: -74.1575,
  },
  {
    name: "Puerto Maldonado",
    lat: -12.6,
    lng: -69.1833,
  },
  {
    name: "Hetauda",
    lat: 27.4167,
    lng: 85.0333,
  },
  {
    name: "Formosa",
    lat: -15.5395,
    lng: -47.34,
  },
  {
    name: "Chaguanas",
    lat: 10.5144,
    lng: -61.4075,
  },
  {
    name: "Cunduacan",
    lat: 18.0667,
    lng: -93.1667,
  },
  {
    name: "Chimaltenango",
    lat: 14.662,
    lng: -90.82,
  },
  {
    name: "Pazardzhik",
    lat: 42.1892,
    lng: 24.3317,
  },
  {
    name: "Uman'",
    lat: 48.75,
    lng: 30.2167,
  },
  {
    name: "Nagaoka",
    lat: 34.9267,
    lng: 135.6956,
  },
  {
    name: "Nazareth",
    lat: 32.7021,
    lng: 35.2978,
  },
  {
    name: "Ivanteyevka",
    lat: 55.97,
    lng: 37.92,
  },
  {
    name: "Tucurui",
    lat: -3.68,
    lng: -49.72,
  },
  {
    name: "Chervonohrad",
    lat: 50.3822,
    lng: 24.2275,
  },
  {
    name: "Cozumel",
    lat: 20.5104,
    lng: -86.9493,
  },
  {
    name: "Cukai",
    lat: 4.2332,
    lng: 103.4479,
  },
  {
    name: "Mbarara",
    lat: -0.5996,
    lng: 30.65,
  },
  {
    name: "Champigny-sur-Marne",
    lat: 48.8172,
    lng: 2.5156,
  },
  {
    name: "Lucerne",
    lat: 47.0523,
    lng: 8.3059,
  },
  {
    name: "Mitrovice",
    lat: 42.8833,
    lng: 20.8667,
  },
  {
    name: "Cabo San Lucas",
    lat: 22.8897,
    lng: -109.9156,
  },
  {
    name: "Rivera",
    lat: -30.9025,
    lng: -55.5506,
  },
  {
    name: "Kunitachi",
    lat: 35.6839,
    lng: 139.4414,
  },
  {
    name: "Saint-Ouen",
    lat: 48.9123,
    lng: 2.3342,
  },
  {
    name: "Ouidah",
    lat: 6.3604,
    lng: 2.09,
  },
  {
    name: "Newmarket",
    lat: 44.05,
    lng: -79.4667,
  },
  {
    name: "Bitola",
    lat: 41.0319,
    lng: 21.3347,
  },
  {
    name: "Itumbiara",
    lat: -18.3996,
    lng: -49.21,
  },
  {
    name: "Milpitas",
    lat: 37.4339,
    lng: -121.8921,
  },
  {
    name: "Pernik",
    lat: 42.6097,
    lng: 23.0308,
  },
  {
    name: "Clichy",
    lat: 48.9044,
    lng: 2.3064,
  },
  {
    name: "Phuket",
    lat: 7.8881,
    lng: 98.3975,
  },
  {
    name: "Ho",
    lat: 6.6114,
    lng: 0.4703,
  },
  {
    name: "West Bromwich",
    lat: 52.519,
    lng: -1.995,
  },
  {
    name: "Alhambra",
    lat: 34.084,
    lng: -118.1355,
  },
  {
    name: "Zilina",
    lat: 49.2167,
    lng: 18.7333,
  },
  {
    name: "Resita",
    lat: 45.297,
    lng: 21.8865,
  },
  {
    name: "Shinkai",
    lat: 35.8367,
    lng: 139.5803,
  },
  {
    name: "Chatham",
    lat: 51.37,
    lng: 0.52,
  },
  {
    name: "Rueil-Malmaison",
    lat: 48.876,
    lng: 2.181,
  },
  {
    name: "Antsiranana",
    lat: -12.2765,
    lng: 49.3115,
  },
  {
    name: "Dudley",
    lat: 52.508,
    lng: -2.089,
  },
  {
    name: "Itauna",
    lat: -20.0753,
    lng: -44.5764,
  },
  {
    name: "Ban Talat Rangsit",
    lat: 13.987,
    lng: 100.6095,
  },
  {
    name: "Lodwar",
    lat: 3.1167,
    lng: 35.6,
  },
  {
    name: "Targu Jiu",
    lat: 45.0342,
    lng: 23.2747,
  },
  {
    name: "Zacatlan",
    lat: 19.9319,
    lng: -97.96,
  },
  {
    name: "Upper Darby",
    lat: 39.949,
    lng: -75.2892,
  },
  {
    name: "Abomey",
    lat: 7.1853,
    lng: 1.9914,
  },
  {
    name: "Mountain View",
    lat: 37.4,
    lng: -122.0796,
  },
  {
    name: "Blagoevgrad",
    lat: 42.0219,
    lng: 23.0975,
  },
  {
    name: "Kasserine",
    lat: 35.1804,
    lng: 8.83,
  },
  {
    name: "Elbasan",
    lat: 41.1125,
    lng: 20.0822,
  },
  {
    name: "Al Muharraq",
    lat: 26.25,
    lng: 50.6167,
  },
  {
    name: "White Rock",
    lat: 49.025,
    lng: -122.8028,
  },
  {
    name: "Nea Ionia",
    lat: 38.0333,
    lng: 23.75,
  },
  {
    name: "Kayes",
    lat: 14.45,
    lng: -11.4167,
  },
  {
    name: "Sao Mateus",
    lat: -18.7201,
    lng: -39.8589,
  },
  {
    name: "South Shields",
    lat: 54.995,
    lng: -1.43,
  },
  {
    name: "Paisley",
    lat: 55.8466,
    lng: -4.4236,
  },
  {
    name: "Weston-super-Mare",
    lat: 51.346,
    lng: -2.977,
  },
  {
    name: "Goiana",
    lat: -7.5606,
    lng: -35.0025,
  },
  {
    name: "Bilecik",
    lat: 40.1431,
    lng: 29.9792,
  },
  {
    name: "Juchitan de Zaragoza",
    lat: 16.4333,
    lng: -95.0194,
  },
  {
    name: "Buena Park",
    lat: 33.8572,
    lng: -118.0046,
  },
  {
    name: "Saint-Maur-des-Fosses",
    lat: 48.7994,
    lng: 2.4997,
  },
  {
    name: "Hakkari",
    lat: 37.5744,
    lng: 43.7408,
  },
  {
    name: "Somerville",
    lat: 42.3908,
    lng: -71.1013,
  },
  {
    name: "Chalandri",
    lat: 38.0167,
    lng: 23.8,
  },
  {
    name: "Bury",
    lat: 53.593,
    lng: -2.298,
  },
  {
    name: "Tres Lagoas",
    lat: -20.7876,
    lng: -51.7034,
  },
  {
    name: "Jatai",
    lat: -17.8794,
    lng: -51.7217,
  },
  {
    name: "Gravesend",
    lat: 51.4415,
    lng: 0.3685,
  },
  {
    name: "Aviles",
    lat: 43.5561,
    lng: -5.9222,
  },
  {
    name: "Deerfield Beach",
    lat: 26.305,
    lng: -80.1277,
  },
  {
    name: "Targoviste",
    lat: 44.9244,
    lng: 25.4572,
  },
  {
    name: "Altamira",
    lat: -3.1996,
    lng: -52.21,
  },
  {
    name: "Galway",
    lat: 53.2729,
    lng: -9.0418,
  },
  {
    name: "Natitingou",
    lat: 10.3204,
    lng: 1.39,
  },
  {
    name: "Sao Joao del Rei",
    lat: -21.13,
    lng: -44.25,
  },
  {
    name: "Barreiro",
    lat: 38.6609,
    lng: -9.0733,
  },
  {
    name: "Paysandu",
    lat: -32.32,
    lng: -58.0756,
  },
  {
    name: "Cicero",
    lat: 41.8445,
    lng: -87.7593,
  },
  {
    name: "Atakpame",
    lat: 7.53,
    lng: 1.12,
  },
  {
    name: "Focsani",
    lat: 45.6997,
    lng: 27.1797,
  },
  {
    name: "Palmerston North",
    lat: -40.3549,
    lng: 175.6095,
  },
  {
    name: "Iguatu",
    lat: -6.3594,
    lng: -39.2986,
  },
  {
    name: "Drancy",
    lat: 48.93,
    lng: 2.45,
  },
  {
    name: "Adigrat",
    lat: 14.2667,
    lng: 39.45,
  },
  {
    name: "Zuwarah",
    lat: 32.9333,
    lng: 12.0833,
  },
  {
    name: "Shancheng",
    lat: 34.7904,
    lng: 116.08,
  },
  {
    name: "Sidi Qacem",
    lat: 34.21,
    lng: -5.7,
  },
  {
    name: "Puerto Ayacucho",
    lat: 5.6631,
    lng: -67.6264,
  },
  {
    name: "Lawrence",
    lat: 42.7003,
    lng: -71.1626,
  },
  {
    name: "Erdenet",
    lat: 49.0278,
    lng: 104.0444,
  },
  {
    name: "Rubi",
    lat: 41.4933,
    lng: 2.0325,
  },
  {
    name: "Temoaya",
    lat: 19.4686,
    lng: -99.5933,
  },
  {
    name: "Ouahigouya",
    lat: 13.5833,
    lng: -2.4167,
  },
  {
    name: "Silver Spring",
    lat: 39.0028,
    lng: -77.0207,
  },
  {
    name: "Nakhon Pathom",
    lat: 13.8194,
    lng: 100.0581,
  },
  {
    name: "Lowestoft",
    lat: 52.48,
    lng: 1.75,
  },
  {
    name: "Pau",
    lat: 43.3,
    lng: -0.37,
  },
  {
    name: "Tejupilco",
    lat: 18.9058,
    lng: -100.1528,
  },
  {
    name: "Cheyenne",
    lat: 41.1351,
    lng: -104.79,
  },
  {
    name: "Ubon Ratchathani",
    lat: 15.2281,
    lng: 104.8594,
  },
  {
    name: "Tustin",
    lat: 33.7309,
    lng: -117.8106,
  },
  {
    name: "Lakewood",
    lat: 33.8471,
    lng: -118.1221,
  },
  {
    name: "Carlisle",
    lat: 54.891,
    lng: -2.944,
  },
  {
    name: "Lisala",
    lat: 2.14,
    lng: 21.51,
  },
  {
    name: "Szombathely",
    lat: 47.2333,
    lng: 16.6333,
  },
  {
    name: "Banska Bystrica",
    lat: 48.7353,
    lng: 19.1453,
  },
  {
    name: "Ra`ananna",
    lat: 32.1833,
    lng: 34.8667,
  },
  {
    name: "Harrogate",
    lat: 53.9919,
    lng: -1.5378,
  },
  {
    name: "Aveiro",
    lat: 40.6389,
    lng: -8.6553,
  },
  {
    name: "Tambacounda",
    lat: 13.7689,
    lng: -13.6672,
  },
  {
    name: "Newcastle under Lyme",
    lat: 53.0109,
    lng: -2.2278,
  },
  {
    name: "Inowroclaw",
    lat: 52.7958,
    lng: 18.2611,
  },
  {
    name: "New Rochelle",
    lat: 40.9305,
    lng: -73.7836,
  },
  {
    name: "Kensington",
    lat: 51.5,
    lng: -0.19,
  },
  {
    name: "La Rochelle",
    lat: 46.1591,
    lng: -1.1517,
  },
  {
    name: "Lebanon",
    lat: 40.3412,
    lng: -76.4227,
  },
  {
    name: "East Kilbride",
    lat: 55.7645,
    lng: -4.1771,
  },
  {
    name: "Wa",
    lat: 10.0667,
    lng: -2.5,
  },
  {
    name: "Nitra",
    lat: 48.3147,
    lng: 18.0875,
  },
  {
    name: "Lomas del Mirador",
    lat: -34.6667,
    lng: -58.5297,
  },
  {
    name: "Maghaghah",
    lat: 28.6483,
    lng: 30.8422,
  },
  {
    name: "Mpanda",
    lat: -6.3436,
    lng: 31.0694,
  },
  {
    name: "Bacabal",
    lat: -4.23,
    lng: -44.8,
  },
  {
    name: "Gladbeck",
    lat: 51.5713,
    lng: 6.9827,
  },
  {
    name: "Sankt Gallen",
    lat: 47.4233,
    lng: 9.3772,
  },
  {
    name: "Cachoeira do Sul",
    lat: -30.03,
    lng: -52.91,
  },
  {
    name: "Campo Mourao",
    lat: -24.0496,
    lng: -52.42,
  },
  {
    name: "Cannes",
    lat: 43.5513,
    lng: 7.0128,
  },
  {
    name: "Alameda",
    lat: 37.767,
    lng: -122.2672,
  },
  {
    name: "Thornton Heath",
    lat: 51.4002,
    lng: -0.1086,
  },
  {
    name: "Watsonville",
    lat: 36.9206,
    lng: -121.7706,
  },
  {
    name: "Taluqan",
    lat: 36.7167,
    lng: 69.5167,
  },
  {
    name: "Juventino Rosas",
    lat: 20.65,
    lng: -101,
  },
  {
    name: "Jinja",
    lat: 0.4431,
    lng: 33.2128,
  },
  {
    name: "Davis",
    lat: 38.5552,
    lng: -121.7365,
  },
  {
    name: "Berberati",
    lat: 4.2667,
    lng: 15.7833,
  },
  {
    name: "Esbjerg",
    lat: 55.467,
    lng: 8.45,
  },
  {
    name: "Zrenjanin",
    lat: 45.3778,
    lng: 20.3861,
  },
  {
    name: "Las Piedras",
    lat: -34.7167,
    lng: -56.2167,
  },
  {
    name: "Surt",
    lat: 31.2,
    lng: 16.6,
  },
  {
    name: "Tamazunchale",
    lat: 21.2667,
    lng: -98.7833,
  },
  {
    name: "Pancevo",
    lat: 44.8739,
    lng: 20.6519,
  },
  {
    name: "Chiryu",
    lat: 35,
    lng: 137.1167,
  },
  {
    name: "Abeche",
    lat: 13.8331,
    lng: 20.8347,
  },
  {
    name: "Bellflower",
    lat: 33.888,
    lng: -118.1271,
  },
  {
    name: "Ashford",
    lat: 51.1465,
    lng: 0.8676,
  },
  {
    name: "Bokhtar",
    lat: 37.8364,
    lng: 68.7803,
  },
  {
    name: "Musashimurayama",
    lat: 35.7547,
    lng: 139.3875,
  },
  {
    name: "Nek'emte",
    lat: 9.0905,
    lng: 36.53,
  },
  {
    name: "Calais",
    lat: 50.9481,
    lng: 1.8564,
  },
  {
    name: "Tamanrasset",
    lat: 22.785,
    lng: 5.5228,
  },
  {
    name: "Ramla",
    lat: 31.9318,
    lng: 34.8736,
  },
  {
    name: "Montrouge",
    lat: 48.8172,
    lng: 2.3219,
  },
  {
    name: "Zadar",
    lat: 44.1167,
    lng: 15.2167,
  },
  {
    name: "Southall",
    lat: 51.5121,
    lng: -0.3779,
  },
  {
    name: "Guamuchil",
    lat: 25.4639,
    lng: -108.0794,
  },
  {
    name: "Quang Tri",
    lat: 16.7504,
    lng: 107.2,
  },
  {
    name: "Antibes",
    lat: 43.5808,
    lng: 7.1239,
  },
  {
    name: "Zlin",
    lat: 49.2331,
    lng: 17.6669,
  },
  {
    name: "Paracatu",
    lat: -17.2217,
    lng: -46.875,
  },
  {
    name: "Bistrita",
    lat: 47.1333,
    lng: 24.4833,
  },
  {
    name: "Tissemsilt",
    lat: 35.6072,
    lng: 1.8106,
  },
  {
    name: "Pine Hills",
    lat: 28.5818,
    lng: -81.4693,
  },
  {
    name: "Joensuu",
    lat: 62.6,
    lng: 29.7639,
  },
  {
    name: "Bella Vista",
    lat: -34.5333,
    lng: -58.6667,
  },
  {
    name: "Rugby",
    lat: 52.37,
    lng: -1.26,
  },
  {
    name: "Darhan",
    lat: 49.4689,
    lng: 105.9575,
  },
  {
    name: "Centreville",
    lat: 38.8391,
    lng: -77.4388,
  },
  {
    name: "Guasave",
    lat: 25.5744,
    lng: -108.4706,
  },
  {
    name: "Teyateyaneng",
    lat: -29.15,
    lng: 27.7333,
  },
  {
    name: "Burton upon Trent",
    lat: 52.8019,
    lng: -1.6367,
  },
  {
    name: "Karlstad",
    lat: 59.3671,
    lng: 13.4999,
  },
  {
    name: "Uxbridge",
    lat: 51.5404,
    lng: -0.4778,
  },
  {
    name: "Baldwin Park",
    lat: 34.0829,
    lng: -117.9721,
  },
  {
    name: "Rioverde",
    lat: 21.93,
    lng: -99.98,
  },
  {
    name: "Toledo",
    lat: 39.867,
    lng: -4.0167,
  },
  {
    name: "Prey Veng",
    lat: 11.484,
    lng: 105.324,
  },
  {
    name: "Caguas",
    lat: 18.2319,
    lng: -66.0388,
  },
  {
    name: "Parintins",
    lat: -2.61,
    lng: -56.74,
  },
  {
    name: "Kiyosu",
    lat: 35.2,
    lng: 136.85,
  },
  {
    name: "Hekinan",
    lat: 34.8833,
    lng: 137,
  },
  {
    name: "Crewe",
    lat: 53.099,
    lng: -2.44,
  },
  {
    name: "Matehuala",
    lat: 23.6528,
    lng: -100.6444,
  },
  {
    name: "San Andres",
    lat: 12.5847,
    lng: -81.7006,
  },
  {
    name: "Ijui",
    lat: -28.3878,
    lng: -53.9147,
  },
  {
    name: "Naxcivan",
    lat: 39.2089,
    lng: 45.4122,
  },
  {
    name: "Garissa",
    lat: -0.4569,
    lng: 39.6583,
  },
  {
    name: "Manokwari",
    lat: -0.8711,
    lng: 134.0693,
  },
  {
    name: "Masvingo",
    lat: -20.0744,
    lng: 30.8328,
  },
  {
    name: "Vincennes",
    lat: 48.8478,
    lng: 2.4392,
  },
  {
    name: "Assab",
    lat: 13.0078,
    lng: 42.7411,
  },
  {
    name: "Gosport",
    lat: 50.7948,
    lng: -1.1243,
  },
  {
    name: "Wandsworth",
    lat: 51.455,
    lng: -0.192,
  },
  {
    name: "Porto Uniao",
    lat: -26.2396,
    lng: -51.08,
  },
  {
    name: "Salima",
    lat: -13.7829,
    lng: 34.4333,
  },
  {
    name: "Tulcea",
    lat: 45.19,
    lng: 28.8,
  },
  {
    name: "Birobidzhan",
    lat: 48.7833,
    lng: 132.9333,
  },
  {
    name: "Tsurugashima",
    lat: 35.9344,
    lng: 139.3931,
  },
  {
    name: "Yoshikawa",
    lat: 35.8911,
    lng: 139.8414,
  },
  {
    name: "Cabadbaran",
    lat: 9.1228,
    lng: 125.5346,
  },
  {
    name: "Kirtipur",
    lat: 27.6667,
    lng: 85.2833,
  },
  {
    name: "Irece",
    lat: -11.3042,
    lng: -41.8558,
  },
  {
    name: "Yawata-shimizui",
    lat: 34.8756,
    lng: 135.7078,
  },
  {
    name: "Frontera",
    lat: 26.926,
    lng: -101.449,
  },
  {
    name: "Neuilly-sur-Seine",
    lat: 48.8881,
    lng: 2.2686,
  },
  {
    name: "Farah",
    lat: 32.3436,
    lng: 62.1194,
  },
  {
    name: "Warzat",
    lat: 30.9167,
    lng: -6.9167,
  },
  {
    name: "Finchley",
    lat: 51.599,
    lng: -0.187,
  },
  {
    name: "Monastir",
    lat: 35.7307,
    lng: 10.7673,
  },
  {
    name: "Camden",
    lat: 39.9362,
    lng: -75.1073,
  },
  {
    name: "Evanston",
    lat: 42.0463,
    lng: -87.6942,
  },
  {
    name: "Havirov",
    lat: 49.7778,
    lng: 18.4228,
  },
  {
    name: "Skien",
    lat: 59.2096,
    lng: 9.609,
  },
  {
    name: "Noisy-le-Grand",
    lat: 48.8478,
    lng: 2.5528,
  },
  {
    name: "Kismaayo",
    lat: -0.3603,
    lng: 42.5489,
  },
  {
    name: "San Juan",
    lat: 18.807,
    lng: -71.229,
  },
  {
    name: "Debre Mark'os",
    lat: 10.34,
    lng: 37.72,
  },
  {
    name: "Dabou",
    lat: 5.3256,
    lng: -4.3767,
  },
  {
    name: "Sa`dah",
    lat: 16.9358,
    lng: 43.7644,
  },
  {
    name: "Inverness",
    lat: 57.4781,
    lng: -4.2233,
  },
  {
    name: "Feltham",
    lat: 51.4496,
    lng: -0.4089,
  },
  {
    name: "Lappeenranta",
    lat: 61.0583,
    lng: 28.1861,
  },
  {
    name: "Thohoyandou",
    lat: -22.95,
    lng: 30.4833,
  },
  {
    name: "Chingford",
    lat: 51.631,
    lng: 0.016,
  },
  {
    name: "New Britain",
    lat: 41.6758,
    lng: -72.7862,
  },
  {
    name: "Arba Minch'",
    lat: 6.04,
    lng: 37.55,
  },
  {
    name: "Abancay",
    lat: -13.6333,
    lng: -72.8833,
  },
  {
    name: "Toyoake",
    lat: 35.0625,
    lng: 137.0089,
  },
  {
    name: "Veliko Tarnovo",
    lat: 43.0822,
    lng: 25.6317,
  },
  {
    name: "Ivry-sur-Seine",
    lat: 48.8078,
    lng: 2.3747,
  },
  {
    name: "Wilde",
    lat: -34.7,
    lng: -58.3167,
  },
  {
    name: "Pawtucket",
    lat: 41.8744,
    lng: -71.3743,
  },
  {
    name: "Cacak",
    lat: 43.8914,
    lng: 20.3497,
  },
  {
    name: "La Chorrera",
    lat: 8.8792,
    lng: -79.7822,
  },
  {
    name: "Washington",
    lat: 54.9,
    lng: -1.52,
  },
  {
    name: "Lauderhill",
    lat: 26.1605,
    lng: -80.2242,
  },
  {
    name: "Balsas",
    lat: -7.5325,
    lng: -46.0356,
  },
  {
    name: "Matara",
    lat: 5.949,
    lng: 80.5428,
  },
  {
    name: "Al Qusiyah",
    lat: 27.4403,
    lng: 30.8183,
  },
  {
    name: "Szolnok",
    lat: 47.1747,
    lng: 20.1764,
  },
  {
    name: "Mamou",
    lat: 10.3736,
    lng: -12.0847,
  },
  {
    name: "Slatina",
    lat: 44.4297,
    lng: 24.3642,
  },
  {
    name: "Youssoufia",
    lat: 32.25,
    lng: -8.53,
  },
  {
    name: "Bitlis",
    lat: 38.4,
    lng: 42.1167,
  },
  {
    name: "Ajaccio",
    lat: 41.9267,
    lng: 8.7369,
  },
  {
    name: "Maidenhead",
    lat: 51.5217,
    lng: -0.7177,
  },
  {
    name: "Kasese",
    lat: 0.23,
    lng: 29.9883,
  },
  {
    name: "Phitsanulok",
    lat: 16.8158,
    lng: 100.2636,
  },
  {
    name: "Comonfort",
    lat: 20.7167,
    lng: -100.7667,
  },
  {
    name: "Misantla",
    lat: 19.9333,
    lng: -96.85,
  },
  {
    name: "Zinjibar",
    lat: 13.1283,
    lng: 45.3803,
  },
  {
    name: "Oroquieta",
    lat: 8.4833,
    lng: 123.8,
  },
  {
    name: "New Westminster",
    lat: 49.2069,
    lng: -122.9111,
  },
  {
    name: "Fujiidera",
    lat: 34.5747,
    lng: 135.5975,
  },
  {
    name: "Kumanovo",
    lat: 42.1403,
    lng: 21.7136,
  },
  {
    name: "Giv`atayim",
    lat: 32.0697,
    lng: 34.8117,
  },
  {
    name: "Valle Hermoso",
    lat: 25.6736,
    lng: -97.8144,
  },
  {
    name: "Mindelo",
    lat: 16.8914,
    lng: -24.988,
  },
  {
    name: "Chiang Rai",
    lat: 19.9094,
    lng: 99.8275,
  },
  {
    name: "Aksum",
    lat: 14.1284,
    lng: 38.7173,
  },
  {
    name: "Benalmadena",
    lat: 36.5969,
    lng: -4.5535,
  },
  {
    name: "Wimbledon",
    lat: 51.422,
    lng: -0.208,
  },
  {
    name: "Sunyani",
    lat: 7.336,
    lng: -2.336,
  },
  {
    name: "Liepaja",
    lat: 56.5083,
    lng: 21.0111,
  },
  {
    name: "Loughborough",
    lat: 52.7705,
    lng: -1.2046,
  },
  {
    name: "Colonia del Sol",
    lat: 22.9125,
    lng: -109.9208,
  },
  {
    name: "Courcouronnes",
    lat: 48.6239,
    lng: 2.4294,
  },
  {
    name: "Sagaing",
    lat: 21.8822,
    lng: 95.9786,
  },
  {
    name: "Wilmington",
    lat: 39.7415,
    lng: -75.5413,
  },
  {
    name: "Thakhek",
    lat: 17.4,
    lng: 104.8,
  },
  {
    name: "Nizwa",
    lat: 22.9333,
    lng: 57.5333,
  },
  {
    name: "Tynemouth",
    lat: 55.017,
    lng: -1.423,
  },
  {
    name: "Vushtrri",
    lat: 42.8222,
    lng: 20.9694,
  },
  {
    name: "Walsall",
    lat: 52.58,
    lng: -1.98,
  },
  {
    name: "Moquegua",
    lat: -17.2,
    lng: -70.9333,
  },
  {
    name: "Itapeva",
    lat: -23.9822,
    lng: -48.8756,
  },
  {
    name: "Lynwood",
    lat: 33.924,
    lng: -118.2017,
  },
  {
    name: "Castellammare di Stabia",
    lat: 40.7,
    lng: 14.4833,
  },
  {
    name: "Rochester",
    lat: 51.375,
    lng: 0.5,
  },
  {
    name: "Georgiyevsk",
    lat: 44.15,
    lng: 43.4667,
  },
  {
    name: "Venissieux",
    lat: 45.6978,
    lng: 4.8867,
  },
  {
    name: "Passaic",
    lat: 40.8574,
    lng: -74.1282,
  },
  {
    name: "Guaynabo",
    lat: 18.3839,
    lng: -66.1134,
  },
  {
    name: "Valenca",
    lat: -13.3703,
    lng: -39.0731,
  },
  {
    name: "Santa Ines",
    lat: -3.6667,
    lng: -45.38,
  },
  {
    name: "Vratsa",
    lat: 43.2,
    lng: 23.55,
  },
  {
    name: "Putrajaya",
    lat: 2.914,
    lng: 101.7019,
  },
  {
    name: "Santo Angelo",
    lat: -28.3,
    lng: -54.28,
  },
  {
    name: "Cergy",
    lat: 49.0361,
    lng: 2.0631,
  },
  {
    name: "Debre Birhan",
    lat: 9.6804,
    lng: 39.53,
  },
  {
    name: "Borongan",
    lat: 11.6,
    lng: 125.4333,
  },
  {
    name: "Itapetinga",
    lat: -15.2489,
    lng: -40.2478,
  },
  {
    name: "Playas de Rosarito",
    lat: 32.3422,
    lng: -117.0561,
  },
  {
    name: "Acton",
    lat: 51.5135,
    lng: -0.2707,
  },
  {
    name: "Bouira",
    lat: 36.3783,
    lng: 3.8925,
  },
  {
    name: "Antony",
    lat: 48.7539,
    lng: 2.2975,
  },
  {
    name: "Mitcham",
    lat: 51.4009,
    lng: -0.1517,
  },
  {
    name: "San Jose del Guaviare",
    lat: 2.5653,
    lng: -72.6386,
  },
  {
    name: "Ponta Delgada",
    lat: 37.74,
    lng: -25.67,
  },
  {
    name: "Kitamoto",
    lat: 36.0269,
    lng: 139.53,
  },
  {
    name: "Gavle",
    lat: 60.667,
    lng: 17.1666,
  },
  {
    name: "Pantin",
    lat: 48.8966,
    lng: 2.4017,
  },
  {
    name: "L'Aquila",
    lat: 42.3504,
    lng: 13.39,
  },
  {
    name: "Wrecsam",
    lat: 53.046,
    lng: -2.993,
  },
  {
    name: "Gurupi",
    lat: -11.7292,
    lng: -49.0686,
  },
  {
    name: "Villa Dominico",
    lat: -34.6917,
    lng: -58.3333,
  },
  {
    name: "Saki",
    lat: 41.1919,
    lng: 47.1706,
  },
  {
    name: "Marsa Matruh",
    lat: 31.3333,
    lng: 27.2333,
  },
  {
    name: "Waterlooville",
    lat: 50.88,
    lng: -1.03,
  },
  {
    name: "Buynaksk",
    lat: 42.8167,
    lng: 47.1167,
  },
  {
    name: "Hameenlinna",
    lat: 61,
    lng: 24.4414,
  },
  {
    name: "Gaithersburg",
    lat: 39.1346,
    lng: -77.2132,
  },
  {
    name: "Union City",
    lat: 40.7674,
    lng: -74.0323,
  },
  {
    name: "Picos",
    lat: -7.0769,
    lng: -41.4669,
  },
  {
    name: "Scarborough",
    lat: 54.2773,
    lng: -0.4017,
  },
  {
    name: "Cacador",
    lat: -26.7753,
    lng: -51.015,
  },
  {
    name: "South San Francisco",
    lat: 37.6536,
    lng: -122.4197,
  },
  {
    name: "Timbauba",
    lat: -7.5053,
    lng: -35.3183,
  },
  {
    name: "Curvelo",
    lat: -18.7564,
    lng: -44.4308,
  },
  {
    name: "Manacapuru",
    lat: -3.2997,
    lng: -60.6206,
  },
  {
    name: "Tecate",
    lat: 32.5667,
    lng: -116.6331,
  },
  {
    name: "Lao Cai",
    lat: 22.4194,
    lng: 103.995,
  },
  {
    name: "Farnborough",
    lat: 51.29,
    lng: -0.75,
  },
  {
    name: "Vaasa",
    lat: 63.1,
    lng: 21.6167,
  },
  {
    name: "Molepolole",
    lat: -24.4066,
    lng: 25.4951,
  },
  {
    name: "Potenza",
    lat: 40.6333,
    lng: 15.8,
  },
  {
    name: "Dimbokro",
    lat: 6.6505,
    lng: -4.71,
  },
  {
    name: "El Bayadh",
    lat: 33.6904,
    lng: 1.01,
  },
  {
    name: "Valle de Bravo",
    lat: 19.1925,
    lng: -100.1306,
  },
  {
    name: "Mount Vernon",
    lat: 40.9136,
    lng: -73.8291,
  },
  {
    name: "Amozoc",
    lat: 19.0333,
    lng: -98.05,
  },
  {
    name: "Twickenham",
    lat: 51.449,
    lng: -0.337,
  },
  {
    name: "Stourbridge",
    lat: 52.4575,
    lng: -2.1479,
  },
  {
    name: "Fryazino",
    lat: 55.95,
    lng: 38.05,
  },
  {
    name: "Linares",
    lat: 24.8597,
    lng: -99.5679,
  },
  {
    name: "Streatham",
    lat: 51.4279,
    lng: -0.1235,
  },
  {
    name: "Barking",
    lat: 51.54,
    lng: 0.08,
  },
  {
    name: "Epinay-sur-Seine",
    lat: 48.9553,
    lng: 2.3092,
  },
  {
    name: "Bolgatanga",
    lat: 10.7856,
    lng: -0.8514,
  },
  {
    name: "Tomigusuku",
    lat: 26.1772,
    lng: 127.6811,
  },
  {
    name: "Sabinas",
    lat: 27.86,
    lng: -101.12,
  },
  {
    name: "Prilep",
    lat: 41.3464,
    lng: 21.5542,
  },
  {
    name: "Sokhumi",
    lat: 43.0033,
    lng: 41.0153,
  },
  {
    name: "Redondo Beach",
    lat: 33.8574,
    lng: -118.3766,
  },
  {
    name: "Kraljevo",
    lat: 43.7234,
    lng: 20.687,
  },
  {
    name: "Tamarac",
    lat: 26.2056,
    lng: -80.2542,
  },
  {
    name: "Novi Pazar",
    lat: 43.15,
    lng: 20.5167,
  },
  {
    name: "Bayburt",
    lat: 40.2546,
    lng: 40.226,
  },
  {
    name: "Nalut",
    lat: 31.8804,
    lng: 10.97,
  },
  {
    name: "Tatabanya",
    lat: 47.5862,
    lng: 18.3949,
  },
  {
    name: "La Seyne-sur-Mer",
    lat: 43.1,
    lng: 5.883,
  },
  {
    name: "Acambaro",
    lat: 20.0361,
    lng: -100.7314,
  },
  {
    name: "Mazatenango",
    lat: 14.5304,
    lng: -91.51,
  },
  {
    name: "Trnava",
    lat: 48.3777,
    lng: 17.5862,
  },
  {
    name: "Caratinga",
    lat: -19.79,
    lng: -42.14,
  },
  {
    name: "Los Polvorines",
    lat: -34.5,
    lng: -58.7,
  },
  {
    name: "Kardzhali",
    lat: 41.64,
    lng: 25.3708,
  },
  {
    name: "Troyes",
    lat: 48.2997,
    lng: 4.0792,
  },
  {
    name: "Villejuif",
    lat: 48.7919,
    lng: 2.3636,
  },
  {
    name: "Goz-Beida",
    lat: 12.2236,
    lng: 21.4144,
  },
  {
    name: "Masaka",
    lat: -0.3296,
    lng: 31.73,
  },
  {
    name: "Singida",
    lat: -4.8186,
    lng: 34.7506,
  },
  {
    name: "Dewsbury",
    lat: 53.691,
    lng: -1.633,
  },
  {
    name: "Arrecife",
    lat: 28.9625,
    lng: -13.5506,
  },
  {
    name: "Ioannina",
    lat: 39.6647,
    lng: 20.8519,
  },
  {
    name: "Calarasi",
    lat: 44.2,
    lng: 27.3333,
  },
  {
    name: "Maisons-Alfort",
    lat: 48.8058,
    lng: 2.4378,
  },
  {
    name: "La Linea de la Concepcion",
    lat: 36.1611,
    lng: -5.3486,
  },
  {
    name: "Sarcelles",
    lat: 48.9956,
    lng: 2.3808,
  },
  {
    name: "Vilhena",
    lat: -12.7166,
    lng: -60.1166,
  },
  {
    name: "Altamira",
    lat: 22.3375,
    lng: -97.8694,
  },
  {
    name: "Widnes",
    lat: 53.363,
    lng: -2.728,
  },
  {
    name: "Granollers",
    lat: 41.6083,
    lng: 2.2889,
  },
  {
    name: "Coban",
    lat: 15.47,
    lng: -90.38,
  },
  {
    name: "Schenectady",
    lat: 42.8025,
    lng: -73.9276,
  },
  {
    name: "Cortazar",
    lat: 20.483,
    lng: -100.933,
  },
  {
    name: "Rundu",
    lat: -17.9167,
    lng: 19.7667,
  },
  {
    name: "Songkhla",
    lat: 7.2061,
    lng: 100.5967,
  },
  {
    name: "Solwezi",
    lat: -12.1833,
    lng: 26.4,
  },
  {
    name: "Kitale",
    lat: 1.0167,
    lng: 35,
  },
  {
    name: "As Suwayda'",
    lat: 32.7,
    lng: 36.5667,
  },
  {
    name: "Ouezzane",
    lat: 34.8,
    lng: -5.6,
  },
  {
    name: "Bayonne",
    lat: 40.6661,
    lng: -74.1141,
  },
  {
    name: "Faro",
    lat: 37.0167,
    lng: -7.9333,
  },
  {
    name: "Faizabad",
    lat: 37.1298,
    lng: 70.5792,
  },
  {
    name: "Sinop",
    lat: 42.0267,
    lng: 35.1511,
  },
  {
    name: "Yoro",
    lat: 15.1333,
    lng: -87.1333,
  },
  {
    name: "Pruszkow",
    lat: 52.1667,
    lng: 20.8,
  },
  {
    name: "East Orange",
    lat: 40.7651,
    lng: -74.2117,
  },
  {
    name: "Nagari",
    lat: 13.33,
    lng: 79.58,
  },
  {
    name: "Latacunga",
    lat: -0.9333,
    lng: -78.6167,
  },
  {
    name: "Inhambane",
    lat: -23.865,
    lng: 35.3833,
  },
  {
    name: "Tsushima",
    lat: 35.1833,
    lng: 136.7333,
  },
  {
    name: "Taunton",
    lat: 51.019,
    lng: -3.1,
  },
  {
    name: "Bangor",
    lat: 54.66,
    lng: -5.67,
  },
  {
    name: "Florence-Graham",
    lat: 33.9682,
    lng: -118.2447,
  },
  {
    name: "Alba Iulia",
    lat: 46.0764,
    lng: 23.5728,
  },
  {
    name: "Pirapora",
    lat: -17.345,
    lng: -44.9419,
  },
  {
    name: "Aylesbury",
    lat: 51.8168,
    lng: -0.8124,
  },
  {
    name: "Sombrerete",
    lat: 23.6333,
    lng: -103.6397,
  },
  {
    name: "Cayenne",
    lat: 4.933,
    lng: -52.33,
  },
  {
    name: "Bondy",
    lat: 48.9022,
    lng: 2.4828,
  },
  {
    name: "Gorno-Altaysk",
    lat: 51.96,
    lng: 85.96,
  },
  {
    name: "Braganca",
    lat: -1.0536,
    lng: -46.7656,
  },
  {
    name: "Mukocho",
    lat: 34.9486,
    lng: 135.6983,
  },
  {
    name: "Hasuda",
    lat: 35.9942,
    lng: 139.6622,
  },
  {
    name: "Le Blanc-Mesnil",
    lat: 48.9387,
    lng: 2.4614,
  },
  {
    name: "Sao Borja",
    lat: -28.6606,
    lng: -56.0044,
  },
  {
    name: "Sayama",
    lat: 34.5036,
    lng: 135.5556,
  },
  {
    name: "Halesowen",
    lat: 52.4502,
    lng: -2.0509,
  },
  {
    name: "Azua",
    lat: 18.454,
    lng: -70.729,
  },
  {
    name: "Elk",
    lat: 53.8167,
    lng: 22.35,
  },
  {
    name: "Nkhotakota",
    lat: -12.9163,
    lng: 34.3,
  },
  {
    name: "Kyustendil",
    lat: 42.2811,
    lng: 22.6889,
  },
  {
    name: "Karakol",
    lat: 42.5,
    lng: 78.3833,
  },
  {
    name: "Canela",
    lat: -29.36,
    lng: -50.81,
  },
  {
    name: "Cherbourg",
    lat: 49.6504,
    lng: -1.65,
  },
  {
    name: "Ruislip",
    lat: 51.576,
    lng: -0.433,
  },
  {
    name: "Gabrovo",
    lat: 42.8711,
    lng: 25.315,
  },
  {
    name: "Fussa",
    lat: 35.7386,
    lng: 139.3267,
  },
  {
    name: "Kratie",
    lat: 12.4881,
    lng: 106.0188,
  },
  {
    name: "Assen",
    lat: 53,
    lng: 6.55,
  },
  {
    name: "Beledweyne",
    lat: 4.736,
    lng: 45.204,
  },
  {
    name: "Royal Tunbridge Wells",
    lat: 51.132,
    lng: 0.263,
  },
  {
    name: "Brentwood",
    lat: 40.7839,
    lng: -73.2522,
  },
  {
    name: "Maldonado",
    lat: -34.9088,
    lng: -54.9581,
  },
  {
    name: "Khartsyzk",
    lat: 48.0333,
    lng: 38.15,
  },
  {
    name: "Wallasey",
    lat: 53.4158,
    lng: -3.0233,
  },
  {
    name: "Barrow in Furness",
    lat: 54.1108,
    lng: -3.2261,
  },
  {
    name: "Napier",
    lat: -39.4833,
    lng: 176.9167,
  },
  {
    name: "Stryy",
    lat: 49.25,
    lng: 23.85,
  },
  {
    name: "Sopron",
    lat: 47.6833,
    lng: 16.5833,
  },
  {
    name: "North Miami",
    lat: 25.9007,
    lng: -80.1686,
  },
  {
    name: "Skokie",
    lat: 42.0359,
    lng: -87.74,
  },
  {
    name: "Telemaco Borba",
    lat: -24.3239,
    lng: -50.6156,
  },
  {
    name: "Leskovac",
    lat: 42.9981,
    lng: 21.9461,
  },
  {
    name: "Santa Rosa",
    lat: -27.8708,
    lng: -54.4814,
  },
  {
    name: "Tataouine",
    lat: 33,
    lng: 10.4667,
  },
  {
    name: "Saraburi",
    lat: 14.5286,
    lng: 100.9114,
  },
  {
    name: "Fontenay-sous-Bois",
    lat: 48.8517,
    lng: 2.4772,
  },
  {
    name: "Rayong",
    lat: 12.6742,
    lng: 101.2789,
  },
  {
    name: "Kolda",
    lat: 12.8958,
    lng: -14.9408,
  },
  {
    name: "Santarem",
    lat: 39.2369,
    lng: -8.685,
  },
  {
    name: "Suresnes",
    lat: 48.87,
    lng: 2.22,
  },
  {
    name: "Chornomors'k",
    lat: 46.3017,
    lng: 30.6569,
  },
  {
    name: "Bobigny",
    lat: 48.9106,
    lng: 2.4397,
  },
  {
    name: "Puerto Limon",
    lat: 10.0022,
    lng: -83.084,
  },
  {
    name: "Madang",
    lat: -5.2248,
    lng: 145.7853,
  },
  {
    name: "Lytkarino",
    lat: 55.5833,
    lng: 37.8833,
  },
  {
    name: "Rafael Calzada",
    lat: -34.7833,
    lng: -58.3667,
  },
  {
    name: "Pico Rivera",
    lat: 33.9902,
    lng: -118.0888,
  },
  {
    name: "Kaposvar",
    lat: 46.3667,
    lng: 17.7833,
  },
  {
    name: "North Bergen",
    lat: 40.7938,
    lng: -74.0242,
  },
  {
    name: "Montebello",
    lat: 34.0155,
    lng: -118.1108,
  },
  {
    name: "Caico",
    lat: -6.4596,
    lng: -37.1,
  },
  {
    name: "Bamyan",
    lat: 34.8167,
    lng: 67.8167,
  },
  {
    name: "Medenine",
    lat: 33.4,
    lng: 10.4167,
  },
  {
    name: "Portugalete",
    lat: 43.3194,
    lng: -3.0196,
  },
  {
    name: "Rovaniemi",
    lat: 66.5014,
    lng: 25.7347,
  },
  {
    name: "Yala",
    lat: 6.5397,
    lng: 101.2811,
  },
  {
    name: "Giurgiu",
    lat: 43.9,
    lng: 25.9667,
  },
  {
    name: "Chambery",
    lat: 45.57,
    lng: 5.9118,
  },
  {
    name: "Samut Sakhon",
    lat: 13.5486,
    lng: 100.2775,
  },
  {
    name: "Janauba",
    lat: -15.8025,
    lng: -43.3089,
  },
  {
    name: "Seinajoki",
    lat: 62.7903,
    lng: 22.8403,
  },
  {
    name: "Ruhengeri",
    lat: -1.4944,
    lng: 29.6417,
  },
  {
    name: "Suileng",
    lat: 47.246,
    lng: 127.106,
  },
  {
    name: "National City",
    lat: 32.6654,
    lng: -117.0983,
  },
  {
    name: "Guanambi",
    lat: -14.2233,
    lng: -42.7814,
  },
  {
    name: "Benslimane",
    lat: 33.6122,
    lng: -7.1211,
  },
  {
    name: "Koja",
    lat: 26.3643,
    lng: 127.8328,
  },
  {
    name: "Ariquemes",
    lat: -9.9396,
    lng: -63.08,
  },
  {
    name: "Coconut Creek",
    lat: 26.2803,
    lng: -80.1842,
  },
  {
    name: "Ben Tre",
    lat: 10.2333,
    lng: 106.3833,
  },
  {
    name: "Gaalkacyo",
    lat: 6.7697,
    lng: 47.4308,
  },
  {
    name: "Limerick",
    lat: 52.6653,
    lng: -8.6238,
  },
  {
    name: "Yopal",
    lat: 5.347,
    lng: -72.406,
  },
  {
    name: "Lorient",
    lat: 47.75,
    lng: -3.36,
  },
  {
    name: "Trang",
    lat: 7.5561,
    lng: 99.6114,
  },
  {
    name: "Vacaria",
    lat: -28.5122,
    lng: -50.9339,
  },
  {
    name: "Melo",
    lat: -32.3595,
    lng: -54.18,
  },
  {
    name: "Sao Gabriel",
    lat: -30.3364,
    lng: -54.32,
  },
  {
    name: "Oyem",
    lat: 1.6,
    lng: 11.5667,
  },
  {
    name: "Lokoja",
    lat: 7.8004,
    lng: 6.7399,
  },
  {
    name: "Juigalpa",
    lat: 12.0833,
    lng: -85.4,
  },
  {
    name: "Sao Jose de Ribamar",
    lat: -2.55,
    lng: -44.07,
  },
  {
    name: "Vaxjo",
    lat: 56.8837,
    lng: 14.8167,
  },
  {
    name: "La Habra",
    lat: 33.9278,
    lng: -117.9513,
  },
  {
    name: "The Hammocks",
    lat: 25.67,
    lng: -80.4483,
  },
  {
    name: "Malden",
    lat: 42.4305,
    lng: -71.0576,
  },
  {
    name: "Banfora",
    lat: 10.6308,
    lng: -4.7589,
  },
  {
    name: "San Pedro",
    lat: 25.7589,
    lng: -102.9844,
  },
  {
    name: "Hamura",
    lat: 35.7672,
    lng: 139.3111,
  },
  {
    name: "Swidnica",
    lat: 50.8438,
    lng: 16.4886,
  },
  {
    name: "Uige",
    lat: -7.62,
    lng: 15.05,
  },
  {
    name: "Estancia",
    lat: -11.2683,
    lng: -37.4383,
  },
  {
    name: "Arcoverde",
    lat: -8.42,
    lng: -37.07,
  },
  {
    name: "Zushi",
    lat: 35.2956,
    lng: 139.5803,
  },
  {
    name: "Temascalcingo",
    lat: 19.9147,
    lng: -100.0036,
  },
  {
    name: "Hereford",
    lat: 52.0565,
    lng: -2.716,
  },
  {
    name: "Mbanza Kongo",
    lat: -6.2667,
    lng: 14.25,
  },
  {
    name: "Veszprem",
    lat: 47.1,
    lng: 17.9167,
  },
  {
    name: "Itapipoca",
    lat: -3.4995,
    lng: -39.58,
  },
  {
    name: "Ellesmere Port",
    lat: 53.279,
    lng: -2.897,
  },
  {
    name: "Serrinha",
    lat: -11.6642,
    lng: -39.0075,
  },
  {
    name: "South Whittier",
    lat: 33.9336,
    lng: -118.0311,
  },
  {
    name: "Etchojoa",
    lat: 26.8667,
    lng: -109.65,
  },
  {
    name: "West Allis",
    lat: 43.0068,
    lng: -88.0296,
  },
  {
    name: "Ban Bang Kaeo",
    lat: 13.6371,
    lng: 100.6636,
  },
  {
    name: "Uzice",
    lat: 43.85,
    lng: 19.85,
  },
  {
    name: "Fountainebleau",
    lat: 25.7723,
    lng: -80.3458,
  },
  {
    name: "Taylorsville",
    lat: 40.657,
    lng: -111.9493,
  },
  {
    name: "Itanagar",
    lat: 27.1,
    lng: 93.62,
  },
  {
    name: "Romita",
    lat: 20.8708,
    lng: -101.5169,
  },
  {
    name: "Suhareke",
    lat: 42.38,
    lng: 20.8219,
  },
  {
    name: "Beja",
    lat: 36.7304,
    lng: 9.19,
  },
  {
    name: "Klimovsk",
    lat: 55.3667,
    lng: 37.5333,
  },
  {
    name: "Bungoma",
    lat: 0.5666,
    lng: 34.5666,
  },
  {
    name: "San Jose Iturbide",
    lat: 21,
    lng: -100.3833,
  },
  {
    name: "Monterey Park",
    lat: 34.0497,
    lng: -118.1326,
  },
  {
    name: "Concordia",
    lat: -27.2342,
    lng: -52.0278,
  },
  {
    name: "Hod HaSharon",
    lat: 32.15,
    lng: 34.8833,
  },
  {
    name: "Puteaux",
    lat: 48.885,
    lng: 2.2389,
  },
  {
    name: "Rodos",
    lat: 36.4412,
    lng: 28.2225,
  },
  {
    name: "Formiga",
    lat: -20.4644,
    lng: -45.4264,
  },
  {
    name: "Samannud",
    lat: 30.9667,
    lng: 31.25,
  },
  {
    name: "Merida",
    lat: 38.9158,
    lng: -6.3333,
  },
  {
    name: "Gardena",
    lat: 33.8944,
    lng: -118.3073,
  },
  {
    name: "Bekescsaba",
    lat: 46.6833,
    lng: 21.0833,
  },
  {
    name: "Cupertino",
    lat: 37.3168,
    lng: -122.0465,
  },
  {
    name: "La Mesa",
    lat: 32.7703,
    lng: -117.0204,
  },
  {
    name: "Brookline",
    lat: 42.3243,
    lng: -71.1408,
  },
  {
    name: "Dzerzhinskiy",
    lat: 55.6333,
    lng: 37.85,
  },
  {
    name: "Artemisa",
    lat: 22.8136,
    lng: -82.7633,
  },
  {
    name: "San Buenaventura",
    lat: 19.2641,
    lng: -99.6746,
  },
  {
    name: "Actopan",
    lat: 20.267,
    lng: -98.933,
  },
  {
    name: "Kitgum",
    lat: 3.3004,
    lng: 32.87,
  },
  {
    name: "Yevlax",
    lat: 40.6172,
    lng: 47.15,
  },
  {
    name: "Viedma",
    lat: -40.8,
    lng: -63,
  },
  {
    name: "Cerro de Pasco",
    lat: -10.6864,
    lng: -76.2625,
  },
  {
    name: "Kabinda",
    lat: -6.1296,
    lng: 24.48,
  },
  {
    name: "Braintree",
    lat: 51.878,
    lng: 0.55,
  },
  {
    name: "Tacuarembo",
    lat: -31.71,
    lng: -55.98,
  },
  {
    name: "Clamart",
    lat: 48.8014,
    lng: 2.2628,
  },
  {
    name: "Coari",
    lat: -4.085,
    lng: -63.1414,
  },
  {
    name: "Crateus",
    lat: -5.1783,
    lng: -40.6775,
  },
  {
    name: "Krusevac",
    lat: 43.5833,
    lng: 21.3267,
  },
  {
    name: "Margate",
    lat: 26.2466,
    lng: -80.2119,
  },
  {
    name: "Qiryat Ata",
    lat: 32.8,
    lng: 35.1,
  },
  {
    name: "Carson City",
    lat: 39.1512,
    lng: -119.7474,
  },
  {
    name: "Sevran",
    lat: 48.9333,
    lng: 2.5333,
  },
  {
    name: "Mandapeta",
    lat: 16.87,
    lng: 81.93,
  },
  {
    name: "Evora",
    lat: 38.5667,
    lng: -7.9,
  },
  {
    name: "Port Coquitlam",
    lat: 49.2625,
    lng: -122.7811,
  },
  {
    name: "Rosh Ha`Ayin",
    lat: 32.0833,
    lng: 34.95,
  },
  {
    name: "Middletown",
    lat: 41.4459,
    lng: -74.4236,
  },
  {
    name: "Chelles",
    lat: 48.8833,
    lng: 2.6,
  },
  {
    name: "Bondoukou",
    lat: 8.04,
    lng: -2.8,
  },
  {
    name: "Kendale Lakes",
    lat: 25.7081,
    lng: -80.4078,
  },
  {
    name: "San Fernando",
    lat: 10.2833,
    lng: -61.4667,
  },
  {
    name: "Meaux",
    lat: 48.9603,
    lng: 2.8883,
  },
  {
    name: "Novohrad-Volynskyi",
    lat: 50.5833,
    lng: 27.6333,
  },
  {
    name: "Huamantla",
    lat: 19.3133,
    lng: -97.9228,
  },
  {
    name: "Chania",
    lat: 35.5167,
    lng: 24.0167,
  },
  {
    name: "Union",
    lat: 40.6953,
    lng: -74.2697,
  },
  {
    name: "Vidin",
    lat: 43.9853,
    lng: 22.8764,
  },
  {
    name: "White Plains",
    lat: 41.022,
    lng: -73.7549,
  },
  {
    name: "Huehuetenango",
    lat: 15.3147,
    lng: -91.4761,
  },
  {
    name: "Sartrouville",
    lat: 48.9372,
    lng: 2.1644,
  },
  {
    name: "Jefferson City",
    lat: 38.5676,
    lng: -92.1759,
  },
  {
    name: "Zalaegerszeg",
    lat: 46.8392,
    lng: 16.8511,
  },
  {
    name: "Hendon",
    lat: 51.5837,
    lng: -0.2252,
  },
  {
    name: "Arcadia",
    lat: 34.1342,
    lng: -118.0373,
  },
  {
    name: "Hilden",
    lat: 51.1714,
    lng: 6.9394,
  },
  {
    name: "Slavonski Brod",
    lat: 45.1553,
    lng: 18.0144,
  },
  {
    name: "Magong",
    lat: 23.5667,
    lng: 119.5833,
  },
  {
    name: "Jocotitlan",
    lat: 19.7072,
    lng: -99.7867,
  },
  {
    name: "Umm el Fahm",
    lat: 32.5158,
    lng: 35.1525,
  },
  {
    name: "Alfortville",
    lat: 48.805,
    lng: 2.4239,
  },
  {
    name: "Samut Prakan",
    lat: 13.6004,
    lng: 100.5964,
  },
  {
    name: "Nuevo Casas Grandes",
    lat: 30.4167,
    lng: -107.9167,
  },
  {
    name: "Kidderminster",
    lat: 52.3885,
    lng: -2.249,
  },
  {
    name: "Lipjan",
    lat: 42.53,
    lng: 21.1386,
  },
  {
    name: "Zumpango",
    lat: 19.7969,
    lng: -99.0992,
  },
  {
    name: "Crosby",
    lat: 53.4872,
    lng: -3.0343,
  },
  {
    name: "Al Mafraq",
    lat: 32.2833,
    lng: 36.2333,
  },
  {
    name: "Hamilton",
    lat: 55.777,
    lng: -4.039,
  },
  {
    name: "Altrincham",
    lat: 53.3838,
    lng: -2.3547,
  },
  {
    name: "Tamiami",
    lat: 25.7556,
    lng: -80.4016,
  },
  {
    name: "Huntington Park",
    lat: 33.98,
    lng: -118.2167,
  },
  {
    name: "Mafeteng",
    lat: -29.8167,
    lng: 27.25,
  },
  {
    name: "Medford",
    lat: 42.4234,
    lng: -71.1087,
  },
  {
    name: "Chinhoyi",
    lat: -17.35,
    lng: 30.2,
  },
  {
    name: "Gumushane",
    lat: 40.4597,
    lng: 39.4778,
  },
  {
    name: "Pithapuram",
    lat: 17.1167,
    lng: 82.2667,
  },
  {
    name: "Araguaina",
    lat: -7.19,
    lng: -48.21,
  },
  {
    name: "Belize City",
    lat: 17.4986,
    lng: -88.1886,
  },
  {
    name: "Acatzingo",
    lat: 18.9817,
    lng: -97.7822,
  },
  {
    name: "Barri",
    lat: 51.405,
    lng: -3.27,
  },
  {
    name: "Adrar",
    lat: 27.8742,
    lng: -0.2939,
  },
  {
    name: "Biel/Bienne",
    lat: 47.1372,
    lng: 7.2472,
  },
  {
    name: "Bac Giang",
    lat: 21.2731,
    lng: 106.1947,
  },
  {
    name: "Ushuaia",
    lat: -54.8072,
    lng: -68.3044,
  },
  {
    name: "Royal Leamington Spa",
    lat: 52.292,
    lng: -1.537,
  },
  {
    name: "Jelgava",
    lat: 56.6522,
    lng: 23.7244,
  },
  {
    name: "Zalau",
    lat: 47.1911,
    lng: 23.0572,
  },
  {
    name: "Dunfermline",
    lat: 56.0719,
    lng: -3.4393,
  },
  {
    name: "Itacoatiara",
    lat: -3.1431,
    lng: -58.4442,
  },
  {
    name: "Sfantu-Gheorghe",
    lat: 45.8636,
    lng: 25.7875,
  },
  {
    name: "Mugla",
    lat: 37.2167,
    lng: 28.3667,
  },
  {
    name: "Llanelli",
    lat: 51.684,
    lng: -4.163,
  },
  {
    name: "Tandag",
    lat: 9.0667,
    lng: 126.1833,
  },
  {
    name: "Phra Nakhon Si Ayutthaya",
    lat: 14.355,
    lng: 100.565,
  },
  {
    name: "Kranj",
    lat: 46.2389,
    lng: 14.3556,
  },
  {
    name: "Salama",
    lat: 15.1052,
    lng: -90.316,
  },
  {
    name: "Zouerate",
    lat: 22.7344,
    lng: -12.4725,
  },
  {
    name: "Trencin",
    lat: 48.8942,
    lng: 18.0406,
  },
  {
    name: "Rahovec",
    lat: 42.3994,
    lng: 20.6547,
  },
  {
    name: "Vaslui",
    lat: 46.6383,
    lng: 27.7292,
  },
  {
    name: "Saint-Quentin",
    lat: 49.8486,
    lng: 3.2864,
  },
  {
    name: "Castelo Branco",
    lat: 39.823,
    lng: -7.4931,
  },
  {
    name: "Rio Tinto",
    lat: 41.1833,
    lng: -8.5667,
  },
  {
    name: "Rio Verde",
    lat: -17.8196,
    lng: -50.93,
  },
  {
    name: "Sankt Polten",
    lat: 48.2,
    lng: 15.6167,
  },
  {
    name: "Vigan",
    lat: 17.5747,
    lng: 120.3869,
  },
  {
    name: "Weymouth",
    lat: 50.613,
    lng: -2.457,
  },
  {
    name: "Santa Rosa de Copan",
    lat: 14.7667,
    lng: -88.7833,
  },
  {
    name: "Halmstad",
    lat: 56.6718,
    lng: 12.8556,
  },
  {
    name: "Barra do Garcas",
    lat: -15.8796,
    lng: -52.26,
  },
  {
    name: "Florida",
    lat: -34.5167,
    lng: -58.5,
  },
  {
    name: "Ohrid",
    lat: 41.1169,
    lng: 20.8019,
  },
  {
    name: "Greenford",
    lat: 51.5299,
    lng: -0.3488,
  },
  {
    name: "Ponte Nova",
    lat: -20.4164,
    lng: -42.9086,
  },
  {
    name: "Matamoros",
    lat: 25.533,
    lng: -103.25,
  },
  {
    name: "Guliston",
    lat: 40.4833,
    lng: 68.7833,
  },
  {
    name: "Rowley Regis",
    lat: 52.48,
    lng: -2.06,
  },
  {
    name: "Bootle",
    lat: 53.4457,
    lng: -2.9891,
  },
  {
    name: "Francisco I. Madero",
    lat: 25.7753,
    lng: -103.2731,
  },
  {
    name: "New Brunswick",
    lat: 40.487,
    lng: -74.445,
  },
  {
    name: "Aloha",
    lat: 45.492,
    lng: -122.8726,
  },
  {
    name: "Lautoka",
    lat: -17.6242,
    lng: 177.4528,
  },
  {
    name: "Senhor do Bonfim",
    lat: -10.4614,
    lng: -40.1894,
  },
  {
    name: "Itaberaba",
    lat: -12.5275,
    lng: -40.3069,
  },
  {
    name: "Fountain Valley",
    lat: 33.7105,
    lng: -117.9514,
  },
  {
    name: "Villagran",
    lat: 20.517,
    lng: -100.983,
  },
  {
    name: "Massy",
    lat: 48.7309,
    lng: 2.2713,
  },
  {
    name: "Paignton",
    lat: 50.4353,
    lng: -3.5625,
  },
  {
    name: "Lampang",
    lat: 18.3,
    lng: 99.5,
  },
  {
    name: "Lancaster",
    lat: 54.047,
    lng: -2.801,
  },
  {
    name: "Vranje",
    lat: 42.5542,
    lng: 21.8972,
  },
  {
    name: "Abu Qir",
    lat: 31.3167,
    lng: 30.0667,
  },
  {
    name: "Ithaca",
    lat: 42.4442,
    lng: -76.5032,
  },
  {
    name: "Chiapa de Corzo",
    lat: 16.7083,
    lng: -93.0169,
  },
  {
    name: "Madinat Hamad",
    lat: 26.1128,
    lng: 50.5139,
  },
  {
    name: "Oak Lawn",
    lat: 41.7139,
    lng: -87.7528,
  },
  {
    name: "Quixada",
    lat: -4.9714,
    lng: -39.0153,
  },
  {
    name: "Padangpanjang",
    lat: -0.45,
    lng: 100.4167,
  },
  {
    name: "Mikkeli",
    lat: 61.6875,
    lng: 27.2736,
  },
  {
    name: "Corbeil-Essonnes",
    lat: 48.6139,
    lng: 2.482,
  },
  {
    name: "Malisheve",
    lat: 42.4828,
    lng: 20.7458,
  },
  {
    name: "Breves",
    lat: -1.6822,
    lng: -50.4803,
  },
  {
    name: "Busia",
    lat: 0.4669,
    lng: 34.09,
  },
  {
    name: "Morden",
    lat: 51.4015,
    lng: -0.1949,
  },
  {
    name: "Catford",
    lat: 51.4452,
    lng: -0.0207,
  },
  {
    name: "Folkestone",
    lat: 51.081,
    lng: 1.166,
  },
  {
    name: "Berwyn",
    lat: 41.8433,
    lng: -87.7909,
  },
  {
    name: "Charikar",
    lat: 35.0183,
    lng: 69.1679,
  },
  {
    name: "Ibiza",
    lat: 38.9089,
    lng: 1.4328,
  },
  {
    name: "Shiraoka",
    lat: 36.0189,
    lng: 139.6769,
  },
  {
    name: "Prachuap Khiri Khan",
    lat: 11.8067,
    lng: 99.7956,
  },
  {
    name: "Korce",
    lat: 40.6167,
    lng: 20.7667,
  },
  {
    name: "Rosemead",
    lat: 34.0689,
    lng: -118.0823,
  },
  {
    name: "Tulcan",
    lat: 0.8117,
    lng: -77.7186,
  },
  {
    name: "Irvington",
    lat: 40.7242,
    lng: -74.2318,
  },
  {
    name: "Paramount",
    lat: 33.8976,
    lng: -118.1652,
  },
  {
    name: "Louangphabang",
    lat: 19.8931,
    lng: 102.1381,
  },
  {
    name: "Stratford",
    lat: 51.5423,
    lng: -0.0026,
  },
  {
    name: "Iganga",
    lat: 0.6092,
    lng: 33.4686,
  },
  {
    name: "Sakon Nakhon",
    lat: 17.1564,
    lng: 104.1456,
  },
  {
    name: "Cagnes-sur-Mer",
    lat: 43.6644,
    lng: 7.1489,
  },
  {
    name: "Sutton in Ashfield",
    lat: 53.125,
    lng: -1.261,
  },
  {
    name: "Pursat",
    lat: 12.5337,
    lng: 103.9167,
  },
  {
    name: "Macclesfield",
    lat: 53.2581,
    lng: -2.1274,
  },
  {
    name: "Whangarei",
    lat: -35.725,
    lng: 174.3236,
  },
  {
    name: "Eger",
    lat: 47.8989,
    lng: 20.3747,
  },
  {
    name: "Nes Ziyyona",
    lat: 31.9333,
    lng: 34.8,
  },
  {
    name: "Santiago Teyahualco",
    lat: 19.6667,
    lng: -99.1333,
  },
  {
    name: "Marondera",
    lat: -18.1833,
    lng: 31.55,
  },
  {
    name: "Wellingborough",
    lat: 52.2939,
    lng: -0.6964,
  },
  {
    name: "Moskovskiy",
    lat: 55.5991,
    lng: 37.355,
  },
  {
    name: "Rosny-sous-Bois",
    lat: 48.8667,
    lng: 2.4833,
  },
  {
    name: "Maha Sarakham",
    lat: 16.1772,
    lng: 103.3008,
  },
  {
    name: "Revere",
    lat: 42.4192,
    lng: -71.0036,
  },
  {
    name: "Barra do Corda",
    lat: -5.5031,
    lng: -45.2369,
  },
  {
    name: "Helena",
    lat: 46.5965,
    lng: -112.0202,
  },
  {
    name: "Takeo",
    lat: 10.9833,
    lng: 104.7833,
  },
  {
    name: "Barnet",
    lat: 51.6444,
    lng: -0.1997,
  },
  {
    name: "Vejle",
    lat: 55.709,
    lng: 9.535,
  },
  {
    name: "Kirkcaldy",
    lat: 56.1107,
    lng: -3.1674,
  },
  {
    name: "Aspen Hill",
    lat: 39.0928,
    lng: -77.0823,
  },
  {
    name: "Leopoldina",
    lat: -21.5319,
    lng: -42.6431,
  },
  {
    name: "Cumbernauld",
    lat: 55.945,
    lng: -3.994,
  },
  {
    name: "Valladolid",
    lat: 20.6894,
    lng: -88.2017,
  },
  {
    name: "West New York",
    lat: 40.7856,
    lng: -74.0093,
  },
  {
    name: "Mangochi",
    lat: -14.4781,
    lng: 35.2645,
  },
  {
    name: "Hoboken",
    lat: 40.7453,
    lng: -74.0279,
  },
  {
    name: "Mongu",
    lat: -15.2796,
    lng: 23.12,
  },
  {
    name: "Alytus",
    lat: 54.4014,
    lng: 24.0492,
  },
  {
    name: "Choisy-le-Roi",
    lat: 48.763,
    lng: 2.409,
  },
  {
    name: "Myrnohrad",
    lat: 48.3022,
    lng: 37.2614,
  },
  {
    name: "Aracati",
    lat: -4.5617,
    lng: -37.7697,
  },
  {
    name: "Iwakura",
    lat: 35.2833,
    lng: 136.8667,
  },
  {
    name: "Boujad",
    lat: 32.76,
    lng: -6.4,
  },
  {
    name: "Oak Park",
    lat: 41.8872,
    lng: -87.7899,
  },
  {
    name: "Batley",
    lat: 53.716,
    lng: -1.627,
  },
  {
    name: "Jinotepe",
    lat: 11.85,
    lng: -86.2,
  },
  {
    name: "Ain El Aouda",
    lat: 33.8111,
    lng: -6.7922,
  },
  {
    name: "Takahama",
    lat: 34.9276,
    lng: 136.9877,
  },
  {
    name: "Elmshorn",
    lat: 53.7547,
    lng: 9.6536,
  },
  {
    name: "Floriano",
    lat: -6.7669,
    lng: -43.0225,
  },
  {
    name: "Bang Bua Thong",
    lat: 13.9099,
    lng: 100.4263,
  },
  {
    name: "Lamia",
    lat: 38.8972,
    lng: 22.4311,
  },
  {
    name: "Noisy-le-Sec",
    lat: 48.8894,
    lng: 2.4503,
  },
  {
    name: "Chake Chake",
    lat: -5.2395,
    lng: 39.77,
  },
  {
    name: "Lankaran",
    lat: 38.7536,
    lng: 48.8511,
  },
  {
    name: "Suzukawa",
    lat: 35.3731,
    lng: 139.3842,
  },
  {
    name: "Vila Real",
    lat: 41.3002,
    lng: -7.7398,
  },
  {
    name: "Ocosingo",
    lat: 16.9072,
    lng: -92.0961,
  },
  {
    name: "Campo Belo",
    lat: -20.8896,
    lng: -45.28,
  },
  {
    name: "Cameta",
    lat: -2.2396,
    lng: -49.51,
  },
  {
    name: "Vaulx-en-Velin",
    lat: 45.7768,
    lng: 4.9186,
  },
  {
    name: "Itamaraju",
    lat: -17.0392,
    lng: -39.5311,
  },
  {
    name: "Pen-y-Bont ar Ogwr",
    lat: 51.5072,
    lng: -3.5784,
  },
  {
    name: "Teplice",
    lat: 50.6333,
    lng: 13.8167,
  },
  {
    name: "Ramos Arizpe",
    lat: 25.55,
    lng: -100.9667,
  },
  {
    name: "Jihlava",
    lat: 49.4003,
    lng: 15.5906,
  },
  {
    name: "Ratnapura",
    lat: 6.693,
    lng: 80.386,
  },
  {
    name: "Jendouba",
    lat: 36.5,
    lng: 8.75,
  },
  {
    name: "Sombor",
    lat: 45.78,
    lng: 19.12,
  },
  {
    name: "Campobasso",
    lat: 41.563,
    lng: 14.656,
  },
  {
    name: "Vryburg",
    lat: -26.95,
    lng: 24.7333,
  },
  {
    name: "Eltham",
    lat: 51.451,
    lng: 0.052,
  },
  {
    name: "Levittown",
    lat: 40.7241,
    lng: -73.5125,
  },
  {
    name: "Surbiton",
    lat: 51.394,
    lng: -0.307,
  },
  {
    name: "Perth Amboy",
    lat: 40.5203,
    lng: -74.2724,
  },
  {
    name: "Ashton",
    lat: 53.4897,
    lng: -2.0952,
  },
  {
    name: "Tizimin",
    lat: 21.1425,
    lng: -88.1647,
  },
  {
    name: "Seguela",
    lat: 7.9611,
    lng: -6.6731,
  },
  {
    name: "Placentia",
    lat: 33.8807,
    lng: -117.8553,
  },
  {
    name: "Stretford",
    lat: 53.4466,
    lng: -2.3086,
  },
  {
    name: "Sar-e Pul",
    lat: 36.2214,
    lng: 65.9278,
  },
  {
    name: "Komotini",
    lat: 41.1167,
    lng: 25.4,
  },
  {
    name: "Camocim",
    lat: -2.9022,
    lng: -40.8411,
  },
  {
    name: "Loreto",
    lat: 22.2667,
    lng: -101.9833,
  },
  {
    name: "Larnaca",
    lat: 34.9233,
    lng: 33.6305,
  },
  {
    name: "Capanema",
    lat: -1.1958,
    lng: -47.1808,
  },
  {
    name: "Bodupal",
    lat: 17.4139,
    lng: 78.5783,
  },
  {
    name: "Longchamps",
    lat: -34.8596,
    lng: -58.387,
  },
  {
    name: "Jutiapa",
    lat: 14.29,
    lng: -89.9,
  },
  {
    name: "Kasuga",
    lat: 33.6108,
    lng: 130.4806,
  },
  {
    name: "Sisophon",
    lat: 13.5833,
    lng: 102.9833,
  },
  {
    name: "Aliso Viejo",
    lat: 33.5792,
    lng: -117.7289,
  },
  {
    name: "Skenderaj",
    lat: 42.7467,
    lng: 20.7886,
  },
  {
    name: "Jarash",
    lat: 32.2723,
    lng: 35.8914,
  },
  {
    name: "Harasta",
    lat: 33.5586,
    lng: 36.365,
  },
  {
    name: "Puttalam",
    lat: 8.033,
    lng: 79.826,
  },
  {
    name: "Welwyn Garden City",
    lat: 51.8062,
    lng: -0.1932,
  },
  {
    name: "Guaxupe",
    lat: -21.3053,
    lng: -46.7128,
  },
  {
    name: "Gbadolite",
    lat: 4.275,
    lng: 21,
  },
  {
    name: "La Reja",
    lat: -34.6394,
    lng: -58.8283,
  },
  {
    name: "West Bridgford",
    lat: 52.932,
    lng: -1.127,
  },
  {
    name: "Gennevilliers",
    lat: 48.9333,
    lng: 2.3,
  },
  {
    name: "Wheaton",
    lat: 39.0492,
    lng: -77.0572,
  },
  {
    name: "Goianesia",
    lat: -15.3175,
    lng: -49.1175,
  },
  {
    name: "Yeovil",
    lat: 50.9452,
    lng: -2.637,
  },
  {
    name: "Beckenham",
    lat: 51.408,
    lng: -0.022,
  },
  {
    name: "Gracias",
    lat: 14.5833,
    lng: -88.5833,
  },
  {
    name: "Ma`an",
    lat: 30.192,
    lng: 35.736,
  },
  {
    name: "Cojutepeque",
    lat: 13.7167,
    lng: -88.9333,
  },
  {
    name: "Selibe Phikwe",
    lat: -21.9667,
    lng: 27.9167,
  },
  {
    name: "Villa Alsina",
    lat: -34.6667,
    lng: -58.4167,
  },
  {
    name: "Bom Jesus da Lapa",
    lat: -13.2495,
    lng: -43.44,
  },
  {
    name: "Plainfield",
    lat: 40.6154,
    lng: -74.4157,
  },
  {
    name: "Garges-les-Gonesse",
    lat: 48.9728,
    lng: 2.4008,
  },
  {
    name: "North Bethesda",
    lat: 39.0393,
    lng: -77.1191,
  },
  {
    name: "Livry-Gargan",
    lat: 48.9192,
    lng: 2.5361,
  },
  {
    name: "Bagneux",
    lat: 48.7983,
    lng: 2.3137,
  },
  {
    name: "Tlalmanalco",
    lat: 19.2044,
    lng: -98.8025,
  },
  {
    name: "Moyobamba",
    lat: -6.0333,
    lng: -76.9667,
  },
  {
    name: "Al Kharijah",
    lat: 25.44,
    lng: 30.55,
  },
  {
    name: "Kotel'niki",
    lat: 55.65,
    lng: 37.8667,
  },
  {
    name: "Al Balyana",
    lat: 26.2329,
    lng: 31.9993,
  },
  {
    name: "Maun",
    lat: -19.9833,
    lng: 23.4167,
  },
  {
    name: "Zaranj",
    lat: 30.96,
    lng: 61.86,
  },
  {
    name: "La Garenne-Colombes",
    lat: 48.9056,
    lng: 2.2445,
  },
  {
    name: "Odienne",
    lat: 9.5,
    lng: -7.5667,
  },
  {
    name: "Cheshunt",
    lat: 51.702,
    lng: -0.035,
  },
  {
    name: "Nausori",
    lat: -18.0244,
    lng: 178.5454,
  },
  {
    name: "Hagere Hiywet",
    lat: 8.9833,
    lng: 37.85,
  },
  {
    name: "Cerritos",
    lat: 33.8677,
    lng: -118.0686,
  },
  {
    name: "Meudon",
    lat: 48.8123,
    lng: 2.2382,
  },
  {
    name: "Dosso",
    lat: 13.05,
    lng: 3.2,
  },
  {
    name: "Kangar",
    lat: 6.4414,
    lng: 100.1986,
  },
  {
    name: "Al Aaroui",
    lat: 35.0104,
    lng: -3.0073,
  },
  {
    name: "Country Club",
    lat: 25.9407,
    lng: -80.3102,
  },
  {
    name: "Lakewood",
    lat: 41.4824,
    lng: -81.8008,
  },
  {
    name: "Coyhaique",
    lat: -45.5712,
    lng: -72.0685,
  },
  {
    name: "Montana",
    lat: 43.4078,
    lng: 23.225,
  },
  {
    name: "Huancavelica",
    lat: -12.785,
    lng: -74.9714,
  },
  {
    name: "Perth",
    lat: 56.397,
    lng: -3.437,
  },
  {
    name: "Brumado",
    lat: -14.2036,
    lng: -41.6653,
  },
  {
    name: "Dollard-des-Ormeaux",
    lat: 45.4833,
    lng: -73.8167,
  },
  {
    name: "Couva",
    lat: 10.4167,
    lng: -61.45,
  },
  {
    name: "Waterford",
    lat: 52.2583,
    lng: -7.119,
  },
  {
    name: "Bagnolet",
    lat: 48.8692,
    lng: 2.4181,
  },
  {
    name: "Ramat HaSharon",
    lat: 32.1461,
    lng: 34.8394,
  },
  {
    name: "Nelson",
    lat: -41.2931,
    lng: 173.2381,
  },
  {
    name: "Mantes-la-Jolie",
    lat: 48.9908,
    lng: 1.7172,
  },
  {
    name: "Wajir",
    lat: 1.75,
    lng: 40.0667,
  },
  {
    name: "Caninde",
    lat: -4.3589,
    lng: -39.3117,
  },
  {
    name: "Karlovy Vary",
    lat: 50.2306,
    lng: 12.8725,
  },
  {
    name: "San Isidro",
    lat: -34.4667,
    lng: -58.5167,
  },
  {
    name: "Lulea",
    lat: 65.5838,
    lng: 22.1915,
  },
  {
    name: "Florin",
    lat: 38.4832,
    lng: -121.4042,
  },
  {
    name: "Piripiri",
    lat: -4.2733,
    lng: -41.7769,
  },
  {
    name: "Ayr",
    lat: 55.458,
    lng: -4.629,
  },
  {
    name: "Jose Marmol",
    lat: -34.7833,
    lng: -58.3667,
  },
  {
    name: "Jurmala",
    lat: 56.968,
    lng: 23.7704,
  },
  {
    name: "Banbury",
    lat: 52.061,
    lng: -1.336,
  },
  {
    name: "Wokingham",
    lat: 51.41,
    lng: -0.84,
  },
  {
    name: "Moroleon",
    lat: 20.1333,
    lng: -101.2,
  },
  {
    name: "Cypress",
    lat: 33.8171,
    lng: -118.0386,
  },
  {
    name: "Hollister",
    lat: 36.8563,
    lng: -121.3981,
  },
  {
    name: "Mao",
    lat: 19.552,
    lng: -71.075,
  },
  {
    name: "North Highlands",
    lat: 38.6713,
    lng: -121.3721,
  },
  {
    name: "Inhumas",
    lat: -16.3578,
    lng: -49.4961,
  },
  {
    name: "Rovenky",
    lat: 48.0833,
    lng: 39.3667,
  },
  {
    name: "Asadabad",
    lat: 34.8742,
    lng: 71.1528,
  },
  {
    name: "Bloomfield",
    lat: 40.8098,
    lng: -74.1868,
  },
  {
    name: "Tlapa de Comonfort",
    lat: 17.5461,
    lng: -98.5764,
  },
  {
    name: "Invercargill",
    lat: -46.429,
    lng: 168.362,
  },
  {
    name: "Chatillon",
    lat: 48.8,
    lng: 2.29,
  },
  {
    name: "Birendranagar",
    lat: 28.6,
    lng: 81.6333,
  },
  {
    name: "Nueva Loja",
    lat: 0.0844,
    lng: -76.8911,
  },
  {
    name: "Krasnoznamensk",
    lat: 55.6,
    lng: 37.0333,
  },
  {
    name: "Ceres",
    lat: 37.5953,
    lng: -120.9625,
  },
  {
    name: "Puerto Escondido",
    lat: 15.8619,
    lng: -97.0672,
  },
  {
    name: "Serowe",
    lat: -22.3833,
    lng: 26.7167,
  },
  {
    name: "Kingston upon Thames",
    lat: 51.4103,
    lng: -0.2995,
  },
  {
    name: "Mandeville",
    lat: 18.0417,
    lng: -77.5072,
  },
  {
    name: "Nong Khai",
    lat: 17.8842,
    lng: 102.7467,
  },
  {
    name: "Salekhard",
    lat: 66.5333,
    lng: 66.6333,
  },
  {
    name: "Mercedes",
    lat: -33.25,
    lng: -58.0319,
  },
  {
    name: "Parras de la Fuente",
    lat: 25.4403,
    lng: -102.1792,
  },
  {
    name: "Emiliano Zapata",
    lat: 18.8667,
    lng: -99.15,
  },
  {
    name: "Bindura",
    lat: -17.3,
    lng: 31.3333,
  },
  {
    name: "La Courneuve",
    lat: 48.9322,
    lng: 2.3967,
  },
  {
    name: "Gori",
    lat: 41.9817,
    lng: 44.1124,
  },
  {
    name: "Isiolo",
    lat: 0.35,
    lng: 37.5833,
  },
  {
    name: "La Mirada",
    lat: 33.9025,
    lng: -118.0093,
  },
  {
    name: "Bastia",
    lat: 42.7008,
    lng: 9.4503,
  },
  {
    name: "El Kef",
    lat: 36.1826,
    lng: 8.7148,
  },
  {
    name: "Havant",
    lat: 50.85,
    lng: -0.98,
  },
  {
    name: "Talence",
    lat: 44.8,
    lng: -0.584,
  },
  {
    name: "Inuma",
    lat: 36,
    lng: 139.6239,
  },
  {
    name: "Leribe",
    lat: -28.8734,
    lng: 28.0416,
  },
  {
    name: "Chalon-sur-Saone",
    lat: 46.7806,
    lng: 4.8528,
  },
  {
    name: "Kanash",
    lat: 55.5167,
    lng: 47.5,
  },
  {
    name: "Hinckley",
    lat: 52.5413,
    lng: -1.3725,
  },
  {
    name: "Njombe",
    lat: -9.3296,
    lng: 34.77,
  },
  {
    name: "Erith",
    lat: 51.48,
    lng: 0.1778,
  },
  {
    name: "New Amsterdam",
    lat: 6.25,
    lng: -57.5167,
  },
  {
    name: "Karmi'el",
    lat: 32.9,
    lng: 35.2833,
  },
  {
    name: "Morley",
    lat: 53.7492,
    lng: -1.6023,
  },
  {
    name: "Hajjah",
    lat: 15.695,
    lng: 43.5975,
  },
  {
    name: "Empalme",
    lat: 27.9617,
    lng: -110.8125,
  },
  {
    name: "Kokkola",
    lat: 63.8333,
    lng: 23.1333,
  },
  {
    name: "Middelburg",
    lat: 51.502,
    lng: 3.61,
  },
  {
    name: "Covina",
    lat: 34.0903,
    lng: -117.8817,
  },
  {
    name: "Bang Kruai",
    lat: 13.8042,
    lng: 100.4755,
  },
  {
    name: "Tepalcatepec",
    lat: 19.1833,
    lng: -102.85,
  },
  {
    name: "Caluire-et-Cuire",
    lat: 45.7953,
    lng: 4.8472,
  },
  {
    name: "Antelope",
    lat: 38.7153,
    lng: -121.361,
  },
  {
    name: "Murzuq",
    lat: 25.9136,
    lng: 13.9336,
  },
  {
    name: "Rosso",
    lat: 16.5128,
    lng: -15.805,
  },
  {
    name: "Naj` Hammadi",
    lat: 26.05,
    lng: 32.25,
  },
  {
    name: "Charenton-le-Pont",
    lat: 48.8265,
    lng: 2.405,
  },
  {
    name: "Chitre",
    lat: 7.9667,
    lng: -80.4333,
  },
  {
    name: "Salgueiro",
    lat: -8.0742,
    lng: -39.1192,
  },
  {
    name: "Badulla",
    lat: 6.9847,
    lng: 81.0564,
  },
  {
    name: "Nagykanizsa",
    lat: 46.4558,
    lng: 16.9975,
  },
  {
    name: "Malakoff",
    lat: 48.8169,
    lng: 2.2944,
  },
  {
    name: "Welling",
    lat: 51.4594,
    lng: 0.1097,
  },
  {
    name: "Viti",
    lat: 42.3167,
    lng: 21.35,
  },
  {
    name: "Boosaaso",
    lat: 11.28,
    lng: 49.18,
  },
  {
    name: "Izucar de Matamoros",
    lat: 18.6,
    lng: -98.4667,
  },
  {
    name: "Qiryat Ono",
    lat: 32.0636,
    lng: 34.8553,
  },
  {
    name: "Castleford",
    lat: 53.716,
    lng: -1.356,
  },
  {
    name: "Santiago",
    lat: 8.1004,
    lng: -80.9833,
  },
  {
    name: "Le Cannet",
    lat: 43.5769,
    lng: 7.0194,
  },
  {
    name: "Fareham",
    lat: 50.85,
    lng: -1.18,
  },
  {
    name: "Kanye",
    lat: -24.9833,
    lng: 25.35,
  },
  {
    name: "Embu",
    lat: -0.5333,
    lng: 37.45,
  },
  {
    name: "Choma",
    lat: -16.8095,
    lng: 26.97,
  },
  {
    name: "Saint-Brieuc",
    lat: 48.5136,
    lng: -2.7653,
  },
  {
    name: "Aweil",
    lat: 8.7666,
    lng: 27.4,
  },
  {
    name: "Ostersund",
    lat: 63.1833,
    lng: 14.65,
  },
  {
    name: "Merthyr Tudful",
    lat: 51.743,
    lng: -3.378,
  },
  {
    name: "Stains",
    lat: 48.95,
    lng: 2.3833,
  },
  {
    name: "Rye",
    lat: 41.0076,
    lng: -73.6872,
  },
  {
    name: "Trollhattan",
    lat: 58.2671,
    lng: 12.3,
  },
  {
    name: "Valenciennes",
    lat: 50.358,
    lng: 3.5233,
  },
  {
    name: "Mahdia",
    lat: 35.4839,
    lng: 11.0409,
  },
  {
    name: "Everett",
    lat: 42.4064,
    lng: -71.0545,
  },
  {
    name: "Sibenik",
    lat: 43.7339,
    lng: 15.8956,
  },
  {
    name: "Cobija",
    lat: -11.0183,
    lng: -68.7537,
  },
  {
    name: "University",
    lat: 28.0771,
    lng: -82.4335,
  },
  {
    name: "Urmston",
    lat: 53.4487,
    lng: -2.3747,
  },
  {
    name: "Antigua Guatemala",
    lat: 14.5567,
    lng: -90.7337,
  },
  {
    name: "Nueva Gerona",
    lat: 21.8847,
    lng: -82.8011,
  },
  {
    name: "Solola",
    lat: 14.773,
    lng: -91.183,
  },
  {
    name: "Slobozia",
    lat: 44.5639,
    lng: 27.3661,
  },
  {
    name: "Vilvoorde",
    lat: 50.9281,
    lng: 4.4245,
  },
  {
    name: "Penedo",
    lat: -10.2903,
    lng: -36.5864,
  },
  {
    name: "Kingswood",
    lat: 51.46,
    lng: -2.505,
  },
  {
    name: "Ararangua",
    lat: -28.9357,
    lng: -49.4954,
  },
  {
    name: "Jerada",
    lat: 34.31,
    lng: -2.16,
  },
  {
    name: "Gbarnga",
    lat: 7.0104,
    lng: -9.49,
  },
  {
    name: "Alexandria",
    lat: 43.9686,
    lng: 25.3333,
  },
  {
    name: "Madinat `Isa",
    lat: 26.1736,
    lng: 50.5478,
  },
  {
    name: "Frutal",
    lat: -20.0247,
    lng: -48.9406,
  },
  {
    name: "Thun",
    lat: 46.759,
    lng: 7.63,
  },
  {
    name: "Vanves",
    lat: 48.8208,
    lng: 2.2897,
  },
  {
    name: "Buta",
    lat: 2.82,
    lng: 24.74,
  },
  {
    name: "Targovishte",
    lat: 43.2467,
    lng: 26.5719,
  },
  {
    name: "Jaltipan de Morelos",
    lat: 17.9703,
    lng: -94.7144,
  },
  {
    name: "Bluefields",
    lat: 12,
    lng: -83.75,
  },
  {
    name: "Bron",
    lat: 45.7394,
    lng: 4.9139,
  },
  {
    name: "Strumica",
    lat: 41.4375,
    lng: 22.6431,
  },
  {
    name: "Liberia",
    lat: 10.6338,
    lng: -85.4333,
  },
  {
    name: "Bellinzona",
    lat: 46.1956,
    lng: 9.0238,
  },
  {
    name: "Pattani",
    lat: 6.8664,
    lng: 101.2508,
  },
  {
    name: "Artigas",
    lat: -30.4667,
    lng: -56.4667,
  },
  {
    name: "Penjamo",
    lat: 20.4311,
    lng: -101.7222,
  },
  {
    name: "Pinneberg",
    lat: 53.6591,
    lng: 9.8009,
  },
  {
    name: "Palmeira dos Indios",
    lat: -9.4166,
    lng: -36.6166,
  },
  {
    name: "Gagny",
    lat: 48.8833,
    lng: 2.5333,
  },
  {
    name: "Newbury",
    lat: 51.401,
    lng: -1.323,
  },
  {
    name: "Oakland Park",
    lat: 26.178,
    lng: -80.1528,
  },
  {
    name: "Veles",
    lat: 41.7153,
    lng: 21.7753,
  },
  {
    name: "Arlington",
    lat: 42.4187,
    lng: -71.164,
  },
  {
    name: "Altadena",
    lat: 34.1928,
    lng: -118.1345,
  },
  {
    name: "Melun",
    lat: 48.5406,
    lng: 2.66,
  },
  {
    name: "Dunaujvaros",
    lat: 46.9833,
    lng: 18.9167,
  },
  {
    name: "Sutton",
    lat: 51.3656,
    lng: -0.1963,
  },
  {
    name: "Jaguaquara",
    lat: -13.53,
    lng: -39.97,
  },
  {
    name: "Bridgwater",
    lat: 51.128,
    lng: -2.993,
  },
  {
    name: "Kabale",
    lat: -1.2496,
    lng: 29.98,
  },
  {
    name: "Swidnik",
    lat: 51.2333,
    lng: 22.7,
  },
  {
    name: "Pinheiro",
    lat: -2.5196,
    lng: -45.09,
  },
  {
    name: "Russas",
    lat: -4.9403,
    lng: -37.9758,
  },
  {
    name: "Qiryat Bialik",
    lat: 32.8331,
    lng: 35.0664,
  },
  {
    name: "Bishops Stortford",
    lat: 51.872,
    lng: 0.1725,
  },
  {
    name: "Trujillo Alto",
    lat: 18.3601,
    lng: -66.0103,
  },
  {
    name: "Bois-Colombes",
    lat: 48.9175,
    lng: 2.2683,
  },
  {
    name: "Lecherias",
    lat: 10.1889,
    lng: -64.6951,
  },
  {
    name: "Umm al Qaywayn",
    lat: 25.5653,
    lng: 55.5533,
  },
  {
    name: "Duncan",
    lat: 48.7787,
    lng: -123.7079,
  },
  {
    name: "El Aioun",
    lat: 34.5853,
    lng: -2.5056,
  },
  {
    name: "Kirkby",
    lat: 53.4826,
    lng: -2.892,
  },
  {
    name: "Salisbury",
    lat: 51.074,
    lng: -1.7936,
  },
  {
    name: "Boumerdes",
    lat: 36.7594,
    lng: 3.4728,
  },
  {
    name: "North Lauderdale",
    lat: 26.2113,
    lng: -80.2209,
  },
  {
    name: "Caerphilly",
    lat: 51.578,
    lng: -3.218,
  },
  {
    name: "Tarbes",
    lat: 43.23,
    lng: 0.07,
  },
  {
    name: "Hackensack",
    lat: 40.889,
    lng: -74.0461,
  },
  {
    name: "Arras",
    lat: 50.292,
    lng: 2.78,
  },
  {
    name: "Caloundra",
    lat: -26.7986,
    lng: 153.1289,
  },
  {
    name: "Reze",
    lat: 47.1833,
    lng: -1.55,
  },
  {
    name: "Wattrelos",
    lat: 50.7,
    lng: 3.217,
  },
  {
    name: "Kampong Chhnang",
    lat: 12.25,
    lng: 104.6667,
  },
  {
    name: "Cleveland Heights",
    lat: 41.5112,
    lng: -81.5636,
  },
  {
    name: "Fort Portal",
    lat: 0.671,
    lng: 30.275,
  },
  {
    name: "Ermezinde",
    lat: 41.2133,
    lng: -8.5472,
  },
  {
    name: "Haedo",
    lat: -34.65,
    lng: -58.6,
  },
  {
    name: "Paracho de Verduzco",
    lat: 19.65,
    lng: -102.0667,
  },
  {
    name: "Stip",
    lat: 41.7358,
    lng: 22.1914,
  },
  {
    name: "Annandale",
    lat: 38.8324,
    lng: -77.196,
  },
  {
    name: "Drogheda",
    lat: 53.7139,
    lng: -6.3503,
  },
  {
    name: "Shefar`am",
    lat: 32.8056,
    lng: 35.1694,
  },
  {
    name: "Munro",
    lat: -34.5333,
    lng: -58.5167,
  },
  {
    name: "Mineiros",
    lat: -17.5694,
    lng: -52.5511,
  },
  {
    name: "Concord",
    lat: 43.2305,
    lng: -71.5595,
  },
  {
    name: "Uman",
    lat: 20.8833,
    lng: -89.75,
  },
  {
    name: "Grays",
    lat: 51.475,
    lng: 0.33,
  },
  {
    name: "Remanso",
    lat: -9.5996,
    lng: -42.11,
  },
  {
    name: "Abingdon",
    lat: 51.667,
    lng: -1.283,
  },
  {
    name: "Nanuque",
    lat: -17.8392,
    lng: -40.3539,
  },
  {
    name: "San Diego de la Union",
    lat: 21.4656,
    lng: -100.8736,
  },
  {
    name: "Hodmezovasarhely",
    lat: 46.4303,
    lng: 20.3189,
  },
  {
    name: "Ramsgate",
    lat: 51.336,
    lng: 1.416,
  },
  {
    name: "Kalmar",
    lat: 56.6694,
    lng: 16.3218,
  },
  {
    name: "Nogent-sur-Marne",
    lat: 48.8375,
    lng: 2.4833,
  },
  {
    name: "Rohnert Park",
    lat: 38.348,
    lng: -122.6964,
  },
  {
    name: "Zugdidi",
    lat: 42.5083,
    lng: 41.8667,
  },
  {
    name: "Mityana",
    lat: 0.4004,
    lng: 32.05,
  },
  {
    name: "Cacem",
    lat: 38.7704,
    lng: -9.3081,
  },
  {
    name: "Le Kremlin-Bicetre",
    lat: 48.81,
    lng: 2.3581,
  },
  {
    name: "Diamantina",
    lat: -18.24,
    lng: -43.61,
  },
  {
    name: "Salem",
    lat: 42.5129,
    lng: -70.902,
  },
  {
    name: "Ilkeston",
    lat: 52.971,
    lng: -1.309,
  },
  {
    name: "Kapan",
    lat: 39.2011,
    lng: 46.415,
  },
  {
    name: "Aldershot",
    lat: 51.248,
    lng: -0.758,
  },
  {
    name: "Cleethorpes",
    lat: 53.5533,
    lng: -0.0215,
  },
  {
    name: "Minas",
    lat: -34.3667,
    lng: -55.2333,
  },
  {
    name: "Leighton Buzzard",
    lat: 51.9165,
    lng: -0.6617,
  },
  {
    name: "Alajuela",
    lat: 10.0278,
    lng: -84.2041,
  },
  {
    name: "Whitney",
    lat: 36.1005,
    lng: -115.038,
  },
  {
    name: "North Miami Beach",
    lat: 25.9302,
    lng: -80.166,
  },
  {
    name: "Franceville",
    lat: -1.6333,
    lng: 13.5833,
  },
  {
    name: "Garbahaarrey",
    lat: 3.35,
    lng: 42.2667,
  },
  {
    name: "Perote",
    lat: 19.562,
    lng: -97.242,
  },
  {
    name: "Xique-Xique",
    lat: -10.8229,
    lng: -42.7281,
  },
  {
    name: "Freeport",
    lat: 40.6515,
    lng: -73.585,
  },
  {
    name: "West Babylon",
    lat: 40.7112,
    lng: -73.3567,
  },
  {
    name: "Dubrovnik",
    lat: 42.6403,
    lng: 18.1083,
  },
  {
    name: "Blyth",
    lat: 55.126,
    lng: -1.514,
  },
  {
    name: "Ciudad Manuel Doblado",
    lat: 20.7303,
    lng: -101.9533,
  },
  {
    name: "San Bruno",
    lat: 37.6254,
    lng: -122.4313,
  },
  {
    name: "Quinhamel",
    lat: 11.8869,
    lng: -15.8556,
  },
  {
    name: "Le Perreux-Sur-Marne",
    lat: 48.8422,
    lng: 2.5036,
  },
  {
    name: "Silistra",
    lat: 44.1186,
    lng: 27.2603,
  },
  {
    name: "Hicksville",
    lat: 40.7637,
    lng: -73.5245,
  },
  {
    name: "Guarda",
    lat: 40.5364,
    lng: -7.2683,
  },
  {
    name: "Si Sa Ket",
    lat: 15.1069,
    lng: 104.3294,
  },
  {
    name: "Aldridge",
    lat: 52.606,
    lng: -1.9179,
  },
  {
    name: "Nakama",
    lat: 33.8167,
    lng: 130.709,
  },
  {
    name: "Kampot",
    lat: 10.6,
    lng: 104.1667,
  },
  {
    name: "Fribourg",
    lat: 46.8,
    lng: 7.15,
  },
  {
    name: "Long Eaton",
    lat: 52.898,
    lng: -1.271,
  },
  {
    name: "Annemasse",
    lat: 46.1958,
    lng: 6.2364,
  },
  {
    name: "La Barca",
    lat: 20.2903,
    lng: -102.5456,
  },
  {
    name: "Arnold",
    lat: 53.005,
    lng: -1.127,
  },
  {
    name: "Lovech",
    lat: 43.1342,
    lng: 24.7172,
  },
  {
    name: "Itapecuru Mirim",
    lat: -3.3925,
    lng: -44.3586,
  },
  {
    name: "Berat",
    lat: 40.7049,
    lng: 19.9497,
  },
  {
    name: "Small Heath",
    lat: 52.4629,
    lng: -1.8542,
  },
  {
    name: "Myrhorod",
    lat: 49.964,
    lng: 33.6124,
  },
  {
    name: "Sidi Bouzid",
    lat: 35.0167,
    lng: 9.5,
  },
  {
    name: "Ardahan",
    lat: 41.1167,
    lng: 42.7,
  },
  {
    name: "Saint-Martin-d'Heres",
    lat: 45.1672,
    lng: 5.7653,
  },
  {
    name: "Douai",
    lat: 50.3714,
    lng: 3.08,
  },
  {
    name: "Dock Sur",
    lat: -34.6417,
    lng: -58.3478,
  },
  {
    name: "Bambari",
    lat: 5.7667,
    lng: 20.6833,
  },
  {
    name: "Herne Bay",
    lat: 51.37,
    lng: 1.13,
  },
  {
    name: "Tonala",
    lat: 16.0894,
    lng: -93.7514,
  },
  {
    name: "Joacaba",
    lat: -27.17,
    lng: -51.5,
  },
  {
    name: "Cao Bang",
    lat: 22.6731,
    lng: 106.25,
  },
  {
    name: "San Jose",
    lat: -34.3333,
    lng: -56.7167,
  },
  {
    name: "Aberdare",
    lat: 51.713,
    lng: -3.445,
  },
  {
    name: "Franconville",
    lat: 48.9889,
    lng: 2.2314,
  },
  {
    name: "Daman",
    lat: 20.417,
    lng: 72.85,
  },
  {
    name: "Bell Gardens",
    lat: 33.9663,
    lng: -118.155,
  },
  {
    name: "Laguna",
    lat: -28.48,
    lng: -48.78,
  },
  {
    name: "Razgrad",
    lat: 43.5267,
    lng: 26.5242,
  },
  {
    name: "Glenrothes",
    lat: 56.198,
    lng: -3.178,
  },
  {
    name: "Savigny-sur-Orge",
    lat: 48.6797,
    lng: 2.3457,
  },
  {
    name: "Kahama",
    lat: -3.84,
    lng: 32.6,
  },
  {
    name: "Amudalavalasa",
    lat: 18.4167,
    lng: 83.9,
  },
  {
    name: "Lindi",
    lat: -9.9969,
    lng: 39.7144,
  },
  {
    name: "Chiquimula",
    lat: 14.797,
    lng: -89.544,
  },
  {
    name: "Campbell",
    lat: 37.2802,
    lng: -121.9538,
  },
  {
    name: "Port Talbot",
    lat: 51.5906,
    lng: -3.7986,
  },
  {
    name: "Bodo",
    lat: 67.2827,
    lng: 14.3751,
  },
  {
    name: "Puntarenas",
    lat: 9.9764,
    lng: -84.8339,
  },
  {
    name: "Woonsocket",
    lat: 42.001,
    lng: -71.4993,
  },
  {
    name: "Xico",
    lat: 19.417,
    lng: -97,
  },
  {
    name: "Narathiwat",
    lat: 6.4264,
    lng: 101.8231,
  },
  {
    name: "Nueva Rosita",
    lat: 27.939,
    lng: -101.218,
  },
  {
    name: "Coroata",
    lat: -4.13,
    lng: -44.1242,
  },
  {
    name: "La Paz",
    lat: 14.3169,
    lng: -87.6831,
  },
  {
    name: "Villa Adelina",
    lat: -34.5175,
    lng: -58.5475,
  },
  {
    name: "Morshansk",
    lat: 53.45,
    lng: 41.8,
  },
  {
    name: "Echirolles",
    lat: 45.1436,
    lng: 5.7183,
  },
  {
    name: "Palayan City",
    lat: 15.5333,
    lng: 121.0833,
  },
  {
    name: "Lusambo",
    lat: -4.9696,
    lng: 23.43,
  },
  {
    name: "Salvatierra",
    lat: 20.2156,
    lng: -100.8961,
  },
  {
    name: "Marcq-en-Baroeul",
    lat: 50.6711,
    lng: 3.0972,
  },
  {
    name: "Villarrica",
    lat: -25.75,
    lng: -56.4333,
  },
  {
    name: "Saurimo",
    lat: -9.6596,
    lng: 20.39,
  },
  {
    name: "Kisii",
    lat: -0.6817,
    lng: 34.7667,
  },
  {
    name: "Oriximina",
    lat: -1.7656,
    lng: -55.8661,
  },
  {
    name: "Kozani",
    lat: 40.3007,
    lng: 21.789,
  },
  {
    name: "Puerto Francisco de Orellana",
    lat: -0.4625,
    lng: -76.9842,
  },
  {
    name: "Vredenburg",
    lat: -32.9,
    lng: 17.9833,
  },
  {
    name: "Malbork",
    lat: 54.0285,
    lng: 19.0444,
  },
  {
    name: "Panaji",
    lat: 15.48,
    lng: 73.83,
  },
  {
    name: "Greenacres",
    lat: 26.6272,
    lng: -80.1371,
  },
  {
    name: "Villefranche-sur-Saone",
    lat: 45.9833,
    lng: 4.7167,
  },
  {
    name: "Hyde",
    lat: 53.4474,
    lng: -2.082,
  },
  {
    name: "Famagusta",
    lat: 35.1167,
    lng: 33.95,
  },
  {
    name: "Cachan",
    lat: 48.7919,
    lng: 2.3319,
  },
  {
    name: "Ngozi",
    lat: -2.9,
    lng: 29.8167,
  },
  {
    name: "Miyoshidai",
    lat: 35.8283,
    lng: 139.5267,
  },
  {
    name: "Barreiros",
    lat: -8.8183,
    lng: -35.1864,
  },
  {
    name: "Chartres",
    lat: 48.456,
    lng: 1.484,
  },
  {
    name: "Wilkes-Barre",
    lat: 41.2468,
    lng: -75.8759,
  },
  {
    name: "Fleet",
    lat: 51.2834,
    lng: -0.8456,
  },
  {
    name: "Samkir",
    lat: 40.8564,
    lng: 46.0172,
  },
  {
    name: "Parnu",
    lat: 58.3844,
    lng: 24.4989,
  },
  {
    name: "Whitley Bay",
    lat: 55.0456,
    lng: -1.4443,
  },
  {
    name: "Dun Dealgan",
    lat: 54.009,
    lng: -6.4049,
  },
  {
    name: "Al Karnak",
    lat: 25.7184,
    lng: 32.6581,
  },
  {
    name: "Rosario do Sul",
    lat: -30.2583,
    lng: -54.9142,
  },
  {
    name: "Teaneck",
    lat: 40.89,
    lng: -74.0107,
  },
  {
    name: "Poissy",
    lat: 48.9294,
    lng: 2.0456,
  },
  {
    name: "Bjelovar",
    lat: 45.8989,
    lng: 16.8422,
  },
  {
    name: "Al Bayda'",
    lat: 13.979,
    lng: 45.574,
  },
  {
    name: "Waipahu",
    lat: 21.3858,
    lng: -158.0103,
  },
  {
    name: "Yambio",
    lat: 4.5705,
    lng: 28.4163,
  },
  {
    name: "Bouar",
    lat: 5.95,
    lng: 15.6,
  },
  {
    name: "Beeston",
    lat: 52.927,
    lng: -1.215,
  },
  {
    name: "Kanie",
    lat: 35.1322,
    lng: 136.7869,
  },
  {
    name: "Villepinte",
    lat: 48.955,
    lng: 2.541,
  },
  {
    name: "Ban Sai Ma Tai",
    lat: 13.8444,
    lng: 100.4829,
  },
  {
    name: "Camberley",
    lat: 51.335,
    lng: -0.742,
  },
  {
    name: "Agualva",
    lat: 38.77,
    lng: -9.2988,
  },
  {
    name: "Kaya",
    lat: 13.0904,
    lng: -1.09,
  },
  {
    name: "Al Wasitah",
    lat: 29.3372,
    lng: 31.2036,
  },
  {
    name: "Inongo",
    lat: -1.94,
    lng: 18.28,
  },
  {
    name: "Montclair",
    lat: 34.0714,
    lng: -117.698,
  },
  {
    name: "Retalhuleu",
    lat: 14.5333,
    lng: -91.6833,
  },
  {
    name: "Maues",
    lat: -3.3896,
    lng: -57.72,
  },
  {
    name: "Decan",
    lat: 42.5333,
    lng: 20.2833,
  },
  {
    name: "Dunstable",
    lat: 51.886,
    lng: -0.521,
  },
  {
    name: "Xacmaz",
    lat: 41.4681,
    lng: 48.8028,
  },
  {
    name: "Chachoengsao",
    lat: 13.6903,
    lng: 101.0703,
  },
  {
    name: "Bletchley",
    lat: 51.994,
    lng: -0.732,
  },
  {
    name: "Sainte-Genevieve-des-Bois",
    lat: 48.6369,
    lng: 2.3403,
  },
  {
    name: "Denton",
    lat: 53.4554,
    lng: -2.1122,
  },
  {
    name: "Surin",
    lat: 14.8833,
    lng: 103.4931,
  },
  {
    name: "San Gabriel",
    lat: 34.0948,
    lng: -118.099,
  },
  {
    name: "Neuilly-sur-Marne",
    lat: 48.8537,
    lng: 2.549,
  },
  {
    name: "Koumra",
    lat: 8.9,
    lng: 17.55,
  },
  {
    name: "North Shields",
    lat: 55.0097,
    lng: -1.4448,
  },
  {
    name: "Zacatecoluca",
    lat: 13.508,
    lng: -88.868,
  },
  {
    name: "Hallandale Beach",
    lat: 25.9854,
    lng: -80.1423,
  },
  {
    name: "Massawa",
    lat: 15.6,
    lng: 39.4333,
  },
  {
    name: "Pont-y-pwl",
    lat: 51.703,
    lng: -3.041,
  },
  {
    name: "Santa Elena",
    lat: -2.2267,
    lng: -80.8583,
  },
  {
    name: "Kenton",
    lat: 51.5878,
    lng: -0.3086,
  },
  {
    name: "Keizer",
    lat: 45.0029,
    lng: -123.0241,
  },
  {
    name: "Mochudi",
    lat: -24.377,
    lng: 26.152,
  },
  {
    name: "Vernier",
    lat: 46.2,
    lng: 6.1,
  },
  {
    name: "Chelsea",
    lat: 42.3959,
    lng: -71.0325,
  },
  {
    name: "Bridlington",
    lat: 54.0819,
    lng: -0.1923,
  },
  {
    name: "Sopot",
    lat: 54.4419,
    lng: 18.5478,
  },
  {
    name: "La Puente",
    lat: 34.0323,
    lng: -117.9533,
  },
  {
    name: "Conflans-Sainte-Honorine",
    lat: 48.9992,
    lng: 2.0983,
  },
  {
    name: "Tozeur",
    lat: 33.9304,
    lng: 8.13,
  },
  {
    name: "Celje",
    lat: 46.2291,
    lng: 15.2641,
  },
  {
    name: "Kendall West",
    lat: 25.7065,
    lng: -80.4388,
  },
  {
    name: "Cristalina",
    lat: -16.7677,
    lng: -47.6153,
  },
  {
    name: "Florida",
    lat: -34.1,
    lng: -56.2167,
  },
  {
    name: "Port-de-Paix",
    lat: 19.9318,
    lng: -72.8295,
  },
  {
    name: "Istog",
    lat: 42.7833,
    lng: 20.4833,
  },
  {
    name: "Miercurea-Ciuc",
    lat: 46.3594,
    lng: 25.8039,
  },
  {
    name: "Mission Bend",
    lat: 29.6948,
    lng: -95.6657,
  },
  {
    name: "Agcabadi",
    lat: 40.0489,
    lng: 47.4502,
  },
  {
    name: "Annapolis",
    lat: 38.9706,
    lng: -76.5047,
  },
  {
    name: "Culver City",
    lat: 34.0058,
    lng: -118.3968,
  },
  {
    name: "Walkden",
    lat: 53.5239,
    lng: -2.3991,
  },
  {
    name: "Durazno",
    lat: -33.3833,
    lng: -56.5167,
  },
  {
    name: "Houilles",
    lat: 48.9261,
    lng: 2.1892,
  },
  {
    name: "Sao Francisco do Sul",
    lat: -26.2433,
    lng: -48.6381,
  },
  {
    name: "Panuco",
    lat: 22.05,
    lng: -98.1833,
  },
  {
    name: "Creil",
    lat: 49.2583,
    lng: 2.4833,
  },
  {
    name: "Nueva Italia de Ruiz",
    lat: 19.0194,
    lng: -102.1089,
  },
  {
    name: "Xam Nua",
    lat: 20.4133,
    lng: 104.048,
  },
  {
    name: "Tromso",
    lat: 69.6489,
    lng: 18.9551,
  },
  {
    name: "Januaria",
    lat: -15.4886,
    lng: -44.36,
  },
  {
    name: "Northolt",
    lat: 51.547,
    lng: -0.362,
  },
  {
    name: "Dedougou",
    lat: 12.4667,
    lng: -3.4667,
  },
  {
    name: "Frankfort",
    lat: 38.1924,
    lng: -84.8643,
  },
  {
    name: "Brzeg",
    lat: 50.8667,
    lng: 17.4833,
  },
  {
    name: "Northglenn",
    lat: 39.9108,
    lng: -104.9783,
  },
  {
    name: "Kavadarci",
    lat: 41.4328,
    lng: 22.0117,
  },
  {
    name: "Morrinhos",
    lat: -17.7311,
    lng: -49.0994,
  },
  {
    name: "Barda",
    lat: 40.3831,
    lng: 47.1186,
  },
  {
    name: "Ha Giang",
    lat: 22.8233,
    lng: 104.9836,
  },
  {
    name: "Tuyen Quang",
    lat: 21.8281,
    lng: 105.2156,
  },
  {
    name: "Karonga",
    lat: -9.9329,
    lng: 33.9333,
  },
  {
    name: "Fort Lee",
    lat: 40.8509,
    lng: -73.9712,
  },
  {
    name: "Highbury",
    lat: 51.552,
    lng: -0.097,
  },
  {
    name: "Zinacantan",
    lat: 16.7597,
    lng: -92.7222,
  },
  {
    name: "Le Plessis-Robinson",
    lat: 48.7811,
    lng: 2.2633,
  },
  {
    name: "Ewell",
    lat: 51.35,
    lng: -0.249,
  },
  {
    name: "Tunceli",
    lat: 39.1061,
    lng: 39.5481,
  },
  {
    name: "Les Lilas",
    lat: 48.88,
    lng: 2.42,
  },
  {
    name: "Lake Worth",
    lat: 26.6196,
    lng: -80.0591,
  },
  {
    name: "Wisbech",
    lat: 52.664,
    lng: 0.16,
  },
  {
    name: "Bossangoa",
    lat: 6.4833,
    lng: 17.45,
  },
  {
    name: "Kline",
    lat: 42.6217,
    lng: 20.5778,
  },
  {
    name: "Bucha",
    lat: 50.5464,
    lng: 30.235,
  },
  {
    name: "Chorley",
    lat: 53.653,
    lng: -2.632,
  },
  {
    name: "Zaio",
    lat: 34.9396,
    lng: -2.7334,
  },
  {
    name: "Jacarezinho",
    lat: -23.1606,
    lng: -49.9694,
  },
  {
    name: "Zeghanghane",
    lat: 35.1575,
    lng: -3.0017,
  },
  {
    name: "Hanwell",
    lat: 51.5189,
    lng: -0.3376,
  },
  {
    name: "L'Hay-les-Roses",
    lat: 48.78,
    lng: 2.3374,
  },
  {
    name: "Jimenez",
    lat: 27.13,
    lng: -104.9067,
  },
  {
    name: "Tuxpan",
    lat: 21.8667,
    lng: -105.45,
  },
  {
    name: "Falkirk",
    lat: 56.0011,
    lng: -3.7835,
  },
  {
    name: "Montclair",
    lat: 40.8254,
    lng: -74.211,
  },
  {
    name: "Choybalsan",
    lat: 48.0706,
    lng: 114.5228,
  },
  {
    name: "Am-Timan",
    lat: 11.0333,
    lng: 20.2833,
  },
  {
    name: "Tenkodogo",
    lat: 11.7804,
    lng: -0.3697,
  },
  {
    name: "Massama",
    lat: 38.7568,
    lng: -9.2748,
  },
  {
    name: "Trujillo",
    lat: 9.3667,
    lng: -70.4331,
  },
  {
    name: "Macuspana",
    lat: 17.7667,
    lng: -92.6,
  },
  {
    name: "Palaiseau",
    lat: 48.7145,
    lng: 2.2457,
  },
  {
    name: "Stanton",
    lat: 33.8002,
    lng: -117.9935,
  },
  {
    name: "Redcar",
    lat: 54.618,
    lng: -1.069,
  },
  {
    name: "Kikinda",
    lat: 45.8244,
    lng: 20.4592,
  },
  {
    name: "Athis-Mons",
    lat: 48.7074,
    lng: 2.3889,
  },
  {
    name: "Flores",
    lat: 16.9337,
    lng: -89.8833,
  },
  {
    name: "Paphos",
    lat: 34.7761,
    lng: 32.4265,
  },
  {
    name: "Ali Sabieh",
    lat: 11.1558,
    lng: 42.7125,
  },
  {
    name: "Adjumani",
    lat: 3.3614,
    lng: 31.8097,
  },
  {
    name: "Richmond West",
    lat: 25.6105,
    lng: -80.4297,
  },
  {
    name: "Spalding",
    lat: 52.7858,
    lng: -0.1529,
  },
  {
    name: "South Miami Heights",
    lat: 25.5886,
    lng: -80.3862,
  },
  {
    name: "Dori",
    lat: 14.05,
    lng: 0.05,
  },
  {
    name: "Capitao Poco",
    lat: -1.7464,
    lng: -47.0594,
  },
  {
    name: "Esch-sur-Alzette",
    lat: 49.4969,
    lng: 5.9806,
  },
  {
    name: "Escuinapa",
    lat: 22.9822,
    lng: -105.7031,
  },
  {
    name: "Kajaani",
    lat: 64.225,
    lng: 27.7333,
  },
  {
    name: "Salto del Guaira",
    lat: -24.02,
    lng: -54.34,
  },
  {
    name: "Pierrefitte-sur-Seine",
    lat: 48.9656,
    lng: 2.3614,
  },
  {
    name: "San Vicente",
    lat: 13.641,
    lng: -88.785,
  },
  {
    name: "Schaffhausen",
    lat: 47.6965,
    lng: 8.6339,
  },
  {
    name: "La Presa",
    lat: 32.711,
    lng: -117.0027,
  },
  {
    name: "Valley Stream",
    lat: 40.6647,
    lng: -73.7044,
  },
  {
    name: "Hanover Park",
    lat: 41.9819,
    lng: -88.1447,
  },
  {
    name: "Ojuelos de Jalisco",
    lat: 21.8642,
    lng: -101.5933,
  },
  {
    name: "Hitchin",
    lat: 51.947,
    lng: -0.283,
  },
  {
    name: "East Meadow",
    lat: 40.7197,
    lng: -73.5604,
  },
  {
    name: "`Ataq",
    lat: 14.55,
    lng: 46.8,
  },
  {
    name: "Villeneuve-Saint-Georges",
    lat: 48.7325,
    lng: 2.4497,
  },
  {
    name: "Chatenay-Malabry",
    lat: 48.7653,
    lng: 2.2781,
  },
  {
    name: "Strood",
    lat: 51.393,
    lng: 0.478,
  },
  {
    name: "Clichy-sous-Bois",
    lat: 48.9102,
    lng: 2.5532,
  },
  {
    name: "Oranjestad",
    lat: 12.5186,
    lng: -70.0358,
  },
  {
    name: "Prijepolje",
    lat: 43.5439,
    lng: 19.6514,
  },
  {
    name: "Bocaiuva",
    lat: -17.1078,
    lng: -43.815,
  },
  {
    name: "Al Qunaytirah",
    lat: 33.1256,
    lng: 35.8239,
  },
  {
    name: "Chaiyaphum",
    lat: 15.8056,
    lng: 102.0311,
  },
  {
    name: "Villemomble",
    lat: 48.8833,
    lng: 2.5,
  },
  {
    name: "Egypt Lake-Leto",
    lat: 28.0177,
    lng: -82.5062,
  },
  {
    name: "Swords",
    lat: 53.4597,
    lng: -6.2181,
  },
  {
    name: "Aventura",
    lat: 25.9565,
    lng: -80.1372,
  },
  {
    name: "Nishihara",
    lat: 26.2261,
    lng: 127.7656,
  },
  {
    name: "Osorio",
    lat: -29.8867,
    lng: -50.2697,
  },
  {
    name: "Park Ridge",
    lat: 42.0125,
    lng: -87.8436,
  },
  {
    name: "Tenosique",
    lat: 17.4756,
    lng: -91.4225,
  },
  {
    name: "Thonon-les-Bains",
    lat: 46.3627,
    lng: 6.475,
  },
  {
    name: "Saint-Mande",
    lat: 48.8422,
    lng: 2.4186,
  },
  {
    name: "Falun",
    lat: 60.613,
    lng: 15.647,
  },
  {
    name: "Letchworth",
    lat: 51.978,
    lng: -0.23,
  },
  {
    name: "Agen",
    lat: 44.2049,
    lng: 0.6212,
  },
  {
    name: "Santa Isabel",
    lat: 32.6314,
    lng: -115.5756,
  },
  {
    name: "Ratchaburi",
    lat: 13.5367,
    lng: 99.8169,
  },
  {
    name: "Wigston Magna",
    lat: 52.5812,
    lng: -1.093,
  },
  {
    name: "Saint Helier",
    lat: 49.1833,
    lng: -2.1167,
  },
  {
    name: "Marijampole",
    lat: 54.5567,
    lng: 23.3544,
  },
  {
    name: "Roanne",
    lat: 46.0367,
    lng: 4.0689,
  },
  {
    name: "Pinner",
    lat: 51.5932,
    lng: -0.3894,
  },
  {
    name: "Bezons",
    lat: 48.9261,
    lng: 2.2178,
  },
  {
    name: "Karlskrona",
    lat: 56.203,
    lng: 15.296,
  },
  {
    name: "Ticul",
    lat: 20.3953,
    lng: -89.5339,
  },
  {
    name: "Calpulalpan",
    lat: 19.5869,
    lng: -98.5683,
  },
  {
    name: "Ebebiyin",
    lat: 2.15,
    lng: 11.3167,
  },
  {
    name: "Trowbridge",
    lat: 51.32,
    lng: -2.21,
  },
  {
    name: "Czeladz",
    lat: 50.3333,
    lng: 19.0833,
  },
  {
    name: "Rayleigh",
    lat: 51.5864,
    lng: 0.6049,
  },
  {
    name: "West Hollywood",
    lat: 34.0882,
    lng: -118.3718,
  },
  {
    name: "Earley",
    lat: 51.433,
    lng: -0.933,
  },
  {
    name: "Viry-Chatillon",
    lat: 48.6713,
    lng: 2.375,
  },
  {
    name: "Paso de Ovejas",
    lat: 19.285,
    lng: -96.44,
  },
  {
    name: "Bicester",
    lat: 51.9,
    lng: -1.15,
  },
  {
    name: "Abasolo",
    lat: 20.4511,
    lng: -101.5289,
  },
  {
    name: "Moron",
    lat: 49.6375,
    lng: 100.1614,
  },
  {
    name: "Gisborne",
    lat: -38.6625,
    lng: 178.0178,
  },
  {
    name: "Goba",
    lat: 7.01,
    lng: 39.97,
  },
  {
    name: "Schiltigheim",
    lat: 48.6078,
    lng: 7.75,
  },
  {
    name: "Goycay",
    lat: 40.6553,
    lng: 47.7389,
  },
  {
    name: "Richfield",
    lat: 44.8762,
    lng: -93.2833,
  },
  {
    name: "Rutherglen",
    lat: 55.8286,
    lng: -4.2139,
  },
  {
    name: "Campo Maior",
    lat: -4.8278,
    lng: -42.1686,
  },
  {
    name: "Kearns",
    lat: 40.652,
    lng: -112.0093,
  },
  {
    name: "Lincoln Park",
    lat: 42.2432,
    lng: -83.1811,
  },
  {
    name: "Chur",
    lat: 46.8521,
    lng: 9.5297,
  },
  {
    name: "Minamishiro",
    lat: 36.0225,
    lng: 139.7228,
  },
  {
    name: "Ryde",
    lat: 50.7271,
    lng: -1.1618,
  },
  {
    name: "Amecameca de Juarez",
    lat: 19.1238,
    lng: -98.7665,
  },
  {
    name: "Zacapa",
    lat: 14.972,
    lng: -89.529,
  },
  {
    name: "Lichfield",
    lat: 52.6835,
    lng: -1.8265,
  },
  {
    name: "Ecclesfield",
    lat: 53.4429,
    lng: -1.4698,
  },
  {
    name: "Ometepec",
    lat: 16.6833,
    lng: -98.4167,
  },
  {
    name: "Lauderdale Lakes",
    lat: 26.1682,
    lng: -80.2017,
  },
  {
    name: "Montigny-le-Bretonneux",
    lat: 48.7711,
    lng: 2.0333,
  },
  {
    name: "Chatou",
    lat: 48.8897,
    lng: 2.1573,
  },
  {
    name: "Pontypridd",
    lat: 51.602,
    lng: -3.342,
  },
  {
    name: "Krong Kep",
    lat: 10.4828,
    lng: 104.3167,
  },
  {
    name: "Kornwestheim",
    lat: 48.8597,
    lng: 9.185,
  },
  {
    name: "Prestwich",
    lat: 53.5333,
    lng: -2.2833,
  },
  {
    name: "Kamenice",
    lat: 42.5839,
    lng: 21.575,
  },
  {
    name: "Viborg",
    lat: 56.4333,
    lng: 9.4,
  },
  {
    name: "Belleville",
    lat: 40.795,
    lng: -74.1616,
  },
  {
    name: "Gostivar",
    lat: 41.8,
    lng: 20.9167,
  },
  {
    name: "Elmont",
    lat: 40.7033,
    lng: -73.7078,
  },
  {
    name: "Ventspils",
    lat: 57.3897,
    lng: 21.5644,
  },
  {
    name: "Watertown Town",
    lat: 42.37,
    lng: -71.1774,
  },
  {
    name: "Beja",
    lat: 38.0333,
    lng: -7.8833,
  },
  {
    name: "Vrsac",
    lat: 45.1206,
    lng: 21.2986,
  },
  {
    name: "Paranaiba",
    lat: -19.6772,
    lng: -51.1908,
  },
  {
    name: "Brighouse",
    lat: 53.707,
    lng: -1.794,
  },
  {
    name: "Temple City",
    lat: 34.1021,
    lng: -118.0579,
  },
  {
    name: "Farnworth",
    lat: 53.5452,
    lng: -2.3999,
  },
  {
    name: "Chillum",
    lat: 38.9667,
    lng: -76.979,
  },
  {
    name: "Ermont",
    lat: 48.9922,
    lng: 2.2603,
  },
  {
    name: "La Asuncion",
    lat: 11.0333,
    lng: -63.8833,
  },
  {
    name: "Cradock",
    lat: -32.1833,
    lng: 25.6167,
  },
  {
    name: "Stroud",
    lat: 51.744,
    lng: -2.215,
  },
  {
    name: "Darwen",
    lat: 53.698,
    lng: -2.461,
  },
  {
    name: "Chuhuiv",
    lat: 49.8353,
    lng: 36.6756,
  },
  {
    name: "Ixtapan de la Sal",
    lat: 18.8333,
    lng: -99.6833,
  },
  {
    name: "Trappes",
    lat: 48.7775,
    lng: 2.0025,
  },
  {
    name: "Dover",
    lat: 51.1295,
    lng: 1.3089,
  },
  {
    name: "Timbuktu",
    lat: 16.7733,
    lng: -2.9994,
  },
  {
    name: "Bexleyheath",
    lat: 51.459,
    lng: 0.138,
  },
  {
    name: "Byumba",
    lat: -1.5794,
    lng: 30.0694,
  },
  {
    name: "Bell",
    lat: 33.9801,
    lng: -118.1798,
  },
  {
    name: "Taibao",
    lat: 23.45,
    lng: 120.3333,
  },
  {
    name: "Roi Et",
    lat: 16.0578,
    lng: 103.6514,
  },
  {
    name: "Villanueva",
    lat: 22.3536,
    lng: -102.8831,
  },
  {
    name: "Talas",
    lat: 42.5184,
    lng: 72.2429,
  },
  {
    name: "Champoton",
    lat: 19.35,
    lng: -90.7167,
  },
  {
    name: "Nelson",
    lat: 53.8346,
    lng: -2.218,
  },
  {
    name: "Braganca",
    lat: 41.8,
    lng: -6.75,
  },
  {
    name: "Phatthalung",
    lat: 7.6178,
    lng: 100.0778,
  },
  {
    name: "Les Mureaux",
    lat: 48.9875,
    lng: 1.9172,
  },
  {
    name: "Neuchatel",
    lat: 46.9903,
    lng: 6.9306,
  },
  {
    name: "Romainville",
    lat: 48.884,
    lng: 2.435,
  },
  {
    name: "Huyton",
    lat: 53.41,
    lng: -2.843,
  },
  {
    name: "Santa Cruz del Quiche",
    lat: 15.05,
    lng: -91.25,
  },
  {
    name: "Luebo",
    lat: -5.3495,
    lng: 21.41,
  },
  {
    name: "Bria",
    lat: 6.5369,
    lng: 21.9919,
  },
  {
    name: "Nea Filadelfeia",
    lat: 38.035,
    lng: 23.7381,
  },
  {
    name: "Manhattan Beach",
    lat: 33.8895,
    lng: -118.3972,
  },
  {
    name: "Coatepec Harinas",
    lat: 18.9,
    lng: -99.7167,
  },
  {
    name: "Fresnes",
    lat: 48.755,
    lng: 2.3221,
  },
  {
    name: "Artvin",
    lat: 41.1822,
    lng: 41.8194,
  },
  {
    name: "Maidan Shahr",
    lat: 34.3972,
    lng: 68.8697,
  },
  {
    name: "Nevers",
    lat: 46.9933,
    lng: 3.1572,
  },
  {
    name: "Villiers-sur-Marne",
    lat: 48.8275,
    lng: 2.5447,
  },
  {
    name: "Catemaco",
    lat: 18.4167,
    lng: -95.1167,
  },
  {
    name: "Pabellon de Arteaga",
    lat: 22.15,
    lng: -102.2667,
  },
  {
    name: "San Pedro de Ycuamandiyu",
    lat: -24.1,
    lng: -57.0833,
  },
  {
    name: "Dikhil",
    lat: 11.1086,
    lng: 42.3667,
  },
  {
    name: "Ocotal",
    lat: 13.6333,
    lng: -86.4833,
  },
  {
    name: "Pontoise",
    lat: 49.0516,
    lng: 2.1017,
  },
  {
    name: "Grigny",
    lat: 48.6562,
    lng: 2.3849,
  },
  {
    name: "Englewood",
    lat: 39.6468,
    lng: -104.9942,
  },
  {
    name: "Kampong Thom",
    lat: 12.7111,
    lng: 104.8886,
  },
  {
    name: "Tucano",
    lat: -10.9582,
    lng: -38.7908,
  },
  {
    name: "Golden Glades",
    lat: 25.9129,
    lng: -80.2013,
  },
  {
    name: "Dragash",
    lat: 42.0611,
    lng: 20.6528,
  },
  {
    name: "Naryn",
    lat: 41.4333,
    lng: 76,
  },
  {
    name: "Lahij",
    lat: 13.05,
    lng: 44.8833,
  },
  {
    name: "Vigneux-sur-Seine",
    lat: 48.7001,
    lng: 2.417,
  },
  {
    name: "Aosta",
    lat: 45.737,
    lng: 7.315,
  },
  {
    name: "Oildale",
    lat: 35.4249,
    lng: -119.0279,
  },
  {
    name: "Ciudad Sabinas Hidalgo",
    lat: 26.5,
    lng: -100.1833,
  },
  {
    name: "Almenara",
    lat: -16.17,
    lng: -40.7,
  },
  {
    name: "Kalasin",
    lat: 16.4333,
    lng: 103.5,
  },
  {
    name: "Saint Neots",
    lat: 52.228,
    lng: -0.27,
  },
  {
    name: "Villa Celina",
    lat: -34.7006,
    lng: -58.4825,
  },
  {
    name: "Fontenay-aux-Roses",
    lat: 48.7893,
    lng: 2.2888,
  },
  {
    name: "Jacmel",
    lat: 18.235,
    lng: -72.537,
  },
  {
    name: "Santa Cruz",
    lat: -6.22,
    lng: -36.03,
  },
  {
    name: "Swakopmund",
    lat: -22.6667,
    lng: 14.5333,
  },
  {
    name: "Barra do Bugres",
    lat: -15.0725,
    lng: -57.1811,
  },
  {
    name: "Lens",
    lat: 50.4322,
    lng: 2.8333,
  },
  {
    name: "Azogues",
    lat: -2.7333,
    lng: -78.8333,
  },
  {
    name: "Huatabampo",
    lat: 26.8304,
    lng: -109.63,
  },
  {
    name: "Escarcega",
    lat: 18.6067,
    lng: -90.7344,
  },
  {
    name: "Norristown",
    lat: 40.1224,
    lng: -75.3398,
  },
  {
    name: "Swadlincote",
    lat: 52.774,
    lng: -1.557,
  },
  {
    name: "Saint-Cloud",
    lat: 48.84,
    lng: 2.22,
  },
  {
    name: "Wishaw",
    lat: 55.7739,
    lng: -3.9189,
  },
  {
    name: "Ico",
    lat: -6.4,
    lng: -38.85,
  },
  {
    name: "Ozumba",
    lat: 19.0392,
    lng: -98.7936,
  },
  {
    name: "Deal",
    lat: 51.2226,
    lng: 1.4006,
  },
  {
    name: "Cananea",
    lat: 30.9819,
    lng: -110.3006,
  },
  {
    name: "Homa Bay",
    lat: -0.5167,
    lng: 34.45,
  },
  {
    name: "Bor",
    lat: 44.1303,
    lng: 22.1036,
  },
  {
    name: "Mazeikiai",
    lat: 56.3111,
    lng: 22.3361,
  },
  {
    name: "Busia",
    lat: 0.4608,
    lng: 34.1108,
  },
  {
    name: "Sao Luis Gonzaga",
    lat: -28.4083,
    lng: -54.9608,
  },
  {
    name: "University City",
    lat: 38.6657,
    lng: -90.3315,
  },
  {
    name: "Borehamwood",
    lat: 51.6578,
    lng: -0.2723,
  },
  {
    name: "Ubaitaba",
    lat: -14.3,
    lng: -39.33,
  },
  {
    name: "Fushe Kosove",
    lat: 42.63,
    lng: 21.12,
  },
  {
    name: "Midvale",
    lat: 40.6148,
    lng: -111.8928,
  },
  {
    name: "Uttaradit",
    lat: 17.6256,
    lng: 100.0942,
  },
  {
    name: "Buenaventura Lakes",
    lat: 28.3349,
    lng: -81.3539,
  },
  {
    name: "Owando",
    lat: -0.4833,
    lng: 15.9,
  },
  {
    name: "Kakata",
    lat: 6.53,
    lng: -10.3517,
  },
  {
    name: "Chester",
    lat: 39.8456,
    lng: -75.3718,
  },
  {
    name: "Kampong Speu",
    lat: 11.45,
    lng: 104.5333,
  },
  {
    name: "Fada Ngourma",
    lat: 12.05,
    lng: 0.3667,
  },
  {
    name: "Barros Blancos",
    lat: -34.7542,
    lng: -56.0042,
  },
  {
    name: "Salgotarjan",
    lat: 48.0853,
    lng: 19.7867,
  },
  {
    name: "Foster City",
    lat: 37.5553,
    lng: -122.2659,
  },
  {
    name: "Pontefract",
    lat: 53.691,
    lng: -1.312,
  },
  {
    name: "Montgomery Village",
    lat: 39.1783,
    lng: -77.1957,
  },
  {
    name: "Beverly Hills",
    lat: 34.0786,
    lng: -118.4021,
  },
  {
    name: "Ciudad Sahagun",
    lat: 19.7714,
    lng: -98.5803,
  },
  {
    name: "Thiais",
    lat: 48.765,
    lng: 2.3923,
  },
  {
    name: "Foothill Farms",
    lat: 38.6867,
    lng: -121.3475,
  },
  {
    name: "Westmont",
    lat: 33.9417,
    lng: -118.3018,
  },
  {
    name: "Willenhall",
    lat: 52.5798,
    lng: -2.0605,
  },
  {
    name: "Chumphon",
    lat: 10.4939,
    lng: 99.18,
  },
  {
    name: "Fair Oaks",
    lat: 38.8653,
    lng: -77.3586,
  },
  {
    name: "Nykoping",
    lat: 58.7582,
    lng: 17.0185,
  },
  {
    name: "Masindi",
    lat: 1.6744,
    lng: 31.715,
  },
  {
    name: "Glendale Heights",
    lat: 41.9196,
    lng: -88.0785,
  },
  {
    name: "Bilwi",
    lat: 14.05,
    lng: -83.3833,
  },
  {
    name: "Iturama",
    lat: -19.73,
    lng: -50.2,
  },
  {
    name: "Kacanik",
    lat: 42.2467,
    lng: 21.2553,
  },
  {
    name: "Long Beach",
    lat: 40.5887,
    lng: -73.666,
  },
  {
    name: "Longton",
    lat: 52.9877,
    lng: -2.1327,
  },
  {
    name: "Mamoudzou",
    lat: -12.7871,
    lng: 45.275,
  },
  {
    name: "Plympton",
    lat: 50.386,
    lng: -4.051,
  },
  {
    name: "Sisak",
    lat: 45.4878,
    lng: 16.3742,
  },
  {
    name: "West Little River",
    lat: 25.857,
    lng: -80.2367,
  },
  {
    name: "Birkirkara",
    lat: 35.9,
    lng: 14.4667,
  },
  {
    name: "Koh Kong",
    lat: 11.6167,
    lng: 102.9833,
  },
  {
    name: "Kyrenia",
    lat: 35.3403,
    lng: 33.3192,
  },
  {
    name: "Vandoeuvre-les-Nancy",
    lat: 48.6567,
    lng: 6.1683,
  },
  {
    name: "Juticalpa",
    lat: 14.6664,
    lng: -86.2186,
  },
  {
    name: "Huntington Station",
    lat: 40.8446,
    lng: -73.405,
  },
  {
    name: "Bromsgrove",
    lat: 52.3353,
    lng: -2.0579,
  },
  {
    name: "Goussainville",
    lat: 49.0325,
    lng: 2.4747,
  },
  {
    name: "Mukdahan",
    lat: 16.5431,
    lng: 104.7228,
  },
  {
    name: "Obidos",
    lat: -1.91,
    lng: -55.52,
  },
  {
    name: "Adrogue",
    lat: -34.8,
    lng: -58.3833,
  },
  {
    name: "Lievin",
    lat: 50.4228,
    lng: 2.7786,
  },
  {
    name: "Bulwell",
    lat: 53.001,
    lng: -1.197,
  },
  {
    name: "Rincon de Romos",
    lat: 22.2333,
    lng: -102.3167,
  },
  {
    name: "Presidente Dutra",
    lat: -5.29,
    lng: -44.49,
  },
  {
    name: "Kericho",
    lat: -0.3692,
    lng: 35.2839,
  },
  {
    name: "Sotteville-les-Rouen",
    lat: 49.4092,
    lng: 1.09,
  },
  {
    name: "Eastchester",
    lat: 40.9536,
    lng: -73.8134,
  },
  {
    name: "Pilar",
    lat: -26.8569,
    lng: -58.3039,
  },
  {
    name: "Kokhma",
    lat: 56.9333,
    lng: 41.0833,
  },
  {
    name: "Reddish",
    lat: 53.4383,
    lng: -2.1613,
  },
  {
    name: "Fair Lawn",
    lat: 40.9359,
    lng: -74.1177,
  },
  {
    name: "Zumpango del Rio",
    lat: 17.65,
    lng: -99.5,
  },
  {
    name: "Chkalov",
    lat: 40.2386,
    lng: 69.6967,
  },
  {
    name: "Un'goofaaru",
    lat: 5.6681,
    lng: 73.0302,
  },
  {
    name: "Harper",
    lat: 4.3754,
    lng: -7.717,
  },
  {
    name: "Lambersart",
    lat: 50.65,
    lng: 3.025,
  },
  {
    name: "Perigueux",
    lat: 45.1929,
    lng: 0.7217,
  },
  {
    name: "Cramlington",
    lat: 55.082,
    lng: -1.585,
  },
  {
    name: "Ris-Orangis",
    lat: 48.6537,
    lng: 2.4161,
  },
  {
    name: "Savigny-le-Temple",
    lat: 48.5841,
    lng: 2.5832,
  },
  {
    name: "Ban Bang Krang",
    lat: 13.8442,
    lng: 100.4612,
  },
  {
    name: "Dagestanskiye Ogni",
    lat: 42.1167,
    lng: 48.2,
  },
  {
    name: "Mount Lebanon",
    lat: 40.3752,
    lng: -80.0493,
  },
  {
    name: "Soledad de Doblado",
    lat: 19.0447,
    lng: -96.4233,
  },
  {
    name: "Kendal",
    lat: 54.326,
    lng: -2.745,
  },
  {
    name: "North Providence",
    lat: 41.8616,
    lng: -71.4575,
  },
  {
    name: "Leticia",
    lat: -4.215,
    lng: -69.9411,
  },
  {
    name: "Cote-Saint-Luc",
    lat: 45.4687,
    lng: -73.6673,
  },
  {
    name: "Perry Barr",
    lat: 52.5249,
    lng: -1.9042,
  },
  {
    name: "Mandera",
    lat: 3.9167,
    lng: 41.8333,
  },
  {
    name: "Lawndale",
    lat: 33.8884,
    lng: -118.3531,
  },
  {
    name: "Yverdon-les-Bains",
    lat: 46.7785,
    lng: 6.6408,
  },
  {
    name: "Franklin Square",
    lat: 40.7002,
    lng: -73.6775,
  },
  {
    name: "Spring Valley",
    lat: 41.1151,
    lng: -74.0486,
  },
  {
    name: "Otumba",
    lat: 19.6969,
    lng: -98.7547,
  },
  {
    name: "Bangassou",
    lat: 4.737,
    lng: 22.819,
  },
  {
    name: "Cambuslang",
    lat: 55.819,
    lng: -4.1671,
  },
  {
    name: "Chachapoyas",
    lat: -6.2167,
    lng: -77.85,
  },
  {
    name: "Darlaston",
    lat: 52.5708,
    lng: -2.0457,
  },
  {
    name: "West Ham",
    lat: 51.5347,
    lng: 0.0077,
  },
  {
    name: "College Park",
    lat: 38.996,
    lng: -76.9337,
  },
  {
    name: "Rumbek",
    lat: 6.8,
    lng: 29.6833,
  },
  {
    name: "Szekszard",
    lat: 46.3558,
    lng: 18.7039,
  },
  {
    name: "Boende",
    lat: -0.2196,
    lng: 20.86,
  },
  {
    name: "Alamo",
    lat: 20.9167,
    lng: -97.675,
  },
  {
    name: "Niquelandia",
    lat: -14.4696,
    lng: -48.47,
  },
  {
    name: "Rivas",
    lat: 11.4404,
    lng: -85.82,
  },
  {
    name: "Rillieux-la-Pape",
    lat: 45.8214,
    lng: 4.8983,
  },
  {
    name: "Eastpointe",
    lat: 42.4657,
    lng: -82.9461,
  },
  {
    name: "Acarau",
    lat: -2.8896,
    lng: -40.12,
  },
  {
    name: "Yerres",
    lat: 48.7171,
    lng: 2.4881,
  },
  {
    name: "Bourg-la-Reine",
    lat: 48.7796,
    lng: 2.3151,
  },
  {
    name: "Ulundi",
    lat: -28.335,
    lng: 31.4161,
  },
  {
    name: "Zug",
    lat: 47.1692,
    lng: 8.5164,
  },
  {
    name: "San Juan",
    lat: 9.9609,
    lng: -84.0731,
  },
  {
    name: "Cuitzeo del Porvenir",
    lat: 19.9686,
    lng: -101.1394,
  },
  {
    name: "Aix-les-Bains",
    lat: 45.6885,
    lng: 5.9153,
  },
  {
    name: "Navolato",
    lat: 24.7656,
    lng: -107.7019,
  },
  {
    name: "Uniondale",
    lat: 40.7176,
    lng: -73.5947,
  },
  {
    name: "Jeremie",
    lat: 18.6339,
    lng: -74.1184,
  },
  {
    name: "Rawson",
    lat: -43.3,
    lng: -65.1,
  },
  {
    name: "Garfield",
    lat: 40.8791,
    lng: -74.1085,
  },
  {
    name: "Sannois",
    lat: 48.9722,
    lng: 2.2578,
  },
  {
    name: "Oullins",
    lat: 45.715,
    lng: 4.8083,
  },
  {
    name: "El Salto",
    lat: 23.7823,
    lng: -105.3585,
  },
  {
    name: "Shumerlya",
    lat: 55.5,
    lng: 46.4167,
  },
  {
    name: "Clifton",
    lat: 52.904,
    lng: -1.177,
  },
  {
    name: "Dieppe",
    lat: 49.92,
    lng: 1.08,
  },
  {
    name: "Babati",
    lat: -4.2117,
    lng: 35.7475,
  },
  {
    name: "Saint-Laurent-du-Var",
    lat: 43.668,
    lng: 7.188,
  },
  {
    name: "Wood Green",
    lat: 51.5981,
    lng: -0.1149,
  },
  {
    name: "Chon Buri",
    lat: 13.3611,
    lng: 100.985,
  },
  {
    name: "Parkville",
    lat: 39.3832,
    lng: -76.5519,
  },
  {
    name: "Frome",
    lat: 51.2279,
    lng: -2.3215,
  },
  {
    name: "Les Pavillons-sous-Bois",
    lat: 48.9,
    lng: 2.5,
  },
  {
    name: "Arcueil",
    lat: 48.8075,
    lng: 2.3361,
  },
  {
    name: "Smolyan",
    lat: 41.5753,
    lng: 24.7128,
  },
  {
    name: "Pallisa",
    lat: 1.145,
    lng: 33.7094,
  },
  {
    name: "Kaita",
    lat: 34.3722,
    lng: 132.5361,
  },
  {
    name: "Alenquer",
    lat: -1.9396,
    lng: -54.79,
  },
  {
    name: "Villiers-le-Bel",
    lat: 49.0094,
    lng: 2.3911,
  },
  {
    name: "Ipu",
    lat: -4.3196,
    lng: -40.7201,
  },
  {
    name: "Miracema",
    lat: -21.41,
    lng: -42.2,
  },
  {
    name: "Viana",
    lat: -3.2096,
    lng: -45,
  },
  {
    name: "Zaqatala",
    lat: 41.6336,
    lng: 46.6433,
  },
  {
    name: "Miami Lakes",
    lat: 25.9125,
    lng: -80.3214,
  },
  {
    name: "San Fernando",
    lat: 24.8504,
    lng: -98.16,
  },
  {
    name: "Imisli",
    lat: 39.8697,
    lng: 48.06,
  },
  {
    name: "Montfermeil",
    lat: 48.9,
    lng: 2.5667,
  },
  {
    name: "Newton Abbot",
    lat: 50.529,
    lng: -3.61,
  },
  {
    name: "Pefki",
    lat: 38.0667,
    lng: 23.8,
  },
  {
    name: "Ipora",
    lat: -16.45,
    lng: -51.13,
  },
  {
    name: "Contla",
    lat: 19.3333,
    lng: -98.1667,
  },
  {
    name: "Hertford",
    lat: 51.795,
    lng: -0.078,
  },
  {
    name: "Brevnov",
    lat: 50.0833,
    lng: 14.3579,
  },
  {
    name: "Oceanside",
    lat: 40.6328,
    lng: -73.6364,
  },
  {
    name: "Pando",
    lat: -34.7167,
    lng: -55.9583,
  },
  {
    name: "Begles",
    lat: 44.8086,
    lng: -0.5478,
  },
  {
    name: "Ridley",
    lat: 39.8854,
    lng: -75.328,
  },
  {
    name: "Wete",
    lat: -5.0567,
    lng: 39.7281,
  },
  {
    name: "Mytilini",
    lat: 39.1114,
    lng: 26.5621,
  },
  {
    name: "Udomlya",
    lat: 57.8833,
    lng: 35.0167,
  },
  {
    name: "Arendal",
    lat: 58.4617,
    lng: 8.7721,
  },
  {
    name: "Nebbi",
    lat: 2.4758,
    lng: 31.1025,
  },
  {
    name: "Ashington",
    lat: 55.181,
    lng: -1.568,
  },
  {
    name: "Santa Vitoria do Palmar",
    lat: -33.52,
    lng: -53.37,
  },
  {
    name: "Desnogorsk",
    lat: 54.1531,
    lng: 33.2903,
  },
  {
    name: "Menton",
    lat: 43.775,
    lng: 7.5,
  },
  {
    name: "Diffa",
    lat: 13.3171,
    lng: 12.6089,
  },
  {
    name: "San Pablo",
    lat: 37.9628,
    lng: -122.3425,
  },
  {
    name: "Rhyl",
    lat: 53.321,
    lng: -3.48,
  },
  {
    name: "Ungheni",
    lat: 47.2042,
    lng: 27.7958,
  },
  {
    name: "Burlingame",
    lat: 37.586,
    lng: -122.3669,
  },
  {
    name: "Tripoli",
    lat: 37.5083,
    lng: 22.375,
  },
  {
    name: "Cakovec",
    lat: 46.3833,
    lng: 16.4333,
  },
  {
    name: "Guyancourt",
    lat: 48.7714,
    lng: 2.0739,
  },
  {
    name: "Soissons",
    lat: 49.3817,
    lng: 3.3236,
  },
  {
    name: "Longbridge",
    lat: 52.395,
    lng: -1.979,
  },
  {
    name: "Rainham",
    lat: 51.36,
    lng: 0.61,
  },
  {
    name: "Pljevlja",
    lat: 43.3566,
    lng: 19.3502,
  },
  {
    name: "Ninomiya",
    lat: 35.2994,
    lng: 139.2553,
  },
  {
    name: "Kuala Belait",
    lat: 4.5833,
    lng: 114.1833,
  },
  {
    name: "Lobatse",
    lat: -25.2167,
    lng: 25.6667,
  },
  {
    name: "Conceicao do Araguaia",
    lat: -8.25,
    lng: -49.29,
  },
  {
    name: "Bay Shore",
    lat: 40.7317,
    lng: -73.2505,
  },
  {
    name: "Yate",
    lat: 51.5402,
    lng: -2.411,
  },
  {
    name: "Melton Mowbray",
    lat: 52.7661,
    lng: -0.886,
  },
  {
    name: "Krabi",
    lat: 8.0592,
    lng: 98.9189,
  },
  {
    name: "Eaubonne",
    lat: 48.9922,
    lng: 2.2806,
  },
  {
    name: "Xalisco",
    lat: 21.4481,
    lng: -104.9,
  },
  {
    name: "Carouge",
    lat: 46.1817,
    lng: 6.1404,
  },
  {
    name: "Avellaneda",
    lat: -34.6625,
    lng: -58.3678,
  },
  {
    name: "Kizuki",
    lat: 33.85,
    lng: 130.7,
  },
  {
    name: "Nova Cruz",
    lat: -6.4696,
    lng: -35.44,
  },
  {
    name: "Boscombe",
    lat: 50.725,
    lng: -1.84,
  },
  {
    name: "Ketrzyn",
    lat: 54.0833,
    lng: 21.3833,
  },
  {
    name: "City of Orange",
    lat: 40.7682,
    lng: -74.2348,
  },
  {
    name: "Salyan",
    lat: 39.5968,
    lng: 48.9837,
  },
  {
    name: "Portel",
    lat: -1.95,
    lng: -50.82,
  },
  {
    name: "Barnstaple",
    lat: 51.08,
    lng: -4.06,
  },
  {
    name: "Sterling",
    lat: 39.0052,
    lng: -77.405,
  },
  {
    name: "Heredia",
    lat: 9.9985,
    lng: -84.1169,
  },
  {
    name: "Chichester",
    lat: 50.8365,
    lng: -0.7792,
  },
  {
    name: "Newton Mearns",
    lat: 55.7716,
    lng: -4.3347,
  },
  {
    name: "Jaynagar-Majilpur",
    lat: 22.1772,
    lng: 88.4258,
  },
  {
    name: "Chatan",
    lat: 26.32,
    lng: 127.7639,
  },
  {
    name: "Ladera Ranch",
    lat: 33.5491,
    lng: -117.6416,
  },
  {
    name: "Jamay",
    lat: 20.2944,
    lng: -102.7097,
  },
  {
    name: "Long Branch",
    lat: 40.2965,
    lng: -73.9915,
  },
  {
    name: "Santa Paula",
    lat: 34.3521,
    lng: -119.0698,
  },
  {
    name: "Colinas",
    lat: -6.0395,
    lng: -44.24,
  },
  {
    name: "Banqiao",
    lat: 25.0143,
    lng: 121.4672,
  },
  {
    name: "Westchester",
    lat: 25.7474,
    lng: -80.3358,
  },
  {
    name: "Mount Hagen",
    lat: -5.8667,
    lng: 144.2167,
  },
  {
    name: "San Carlos",
    lat: 37.4982,
    lng: -122.268,
  },
  {
    name: "Savanna-la-Mar",
    lat: 18.2167,
    lng: -78.1333,
  },
  {
    name: "Vicente Lopez",
    lat: -34.5333,
    lng: -58.475,
  },
  {
    name: "Bilston",
    lat: 52.566,
    lng: -2.0728,
  },
  {
    name: "Mutsamudu",
    lat: -12.1667,
    lng: 44.4,
  },
  {
    name: "Cahul",
    lat: 45.9075,
    lng: 28.1944,
  },
  {
    name: "Felipe Carrillo Puerto",
    lat: 19.5786,
    lng: -88.0453,
  },
  {
    name: "Golden Gate",
    lat: 26.1844,
    lng: -81.7031,
  },
  {
    name: "Didcot",
    lat: 51.606,
    lng: -1.241,
  },
  {
    name: "Ojinaga",
    lat: 29.5644,
    lng: -104.4164,
  },
  {
    name: "Shotley Bridge",
    lat: 54.87,
    lng: -1.86,
  },
  {
    name: "Stepney",
    lat: 51.5152,
    lng: -0.0462,
  },
  {
    name: "Dubendorf",
    lat: 47.3981,
    lng: 8.6194,
  },
  {
    name: "Granja",
    lat: -3.1195,
    lng: -40.84,
  },
  {
    name: "Billericay",
    lat: 51.628,
    lng: 0.4184,
  },
  {
    name: "Trujillo",
    lat: 15.9167,
    lng: -86,
  },
  {
    name: "Moyale",
    lat: 3.527,
    lng: 39.056,
  },
  {
    name: "Limeil-Brevannes",
    lat: 48.7464,
    lng: 2.4883,
  },
  {
    name: "Treinta y Tres",
    lat: -33.2308,
    lng: -54.3822,
  },
  {
    name: "Stung Treng",
    lat: 13.5167,
    lng: 105.9667,
  },
  {
    name: "Bournville",
    lat: 52.4299,
    lng: -1.9355,
  },
  {
    name: "Rahway",
    lat: 40.6077,
    lng: -74.2807,
  },
  {
    name: "Dietikon",
    lat: 47.4056,
    lng: 8.4039,
  },
  {
    name: "Leyton",
    lat: 51.5606,
    lng: -0.0155,
  },
  {
    name: "Tralee",
    lat: 52.2675,
    lng: -9.6962,
  },
  {
    name: "Newton Aycliffe",
    lat: 54.62,
    lng: -1.58,
  },
  {
    name: "Rezekne",
    lat: 56.5067,
    lng: 27.3308,
  },
  {
    name: "Ban Krathum Lom",
    lat: 13.7482,
    lng: 100.3139,
  },
  {
    name: "Bussy-Saint-Georges",
    lat: 48.8422,
    lng: 2.6983,
  },
  {
    name: "Walton upon Thames",
    lat: 51.3868,
    lng: -0.4133,
  },
  {
    name: "Eastleigh",
    lat: 50.9667,
    lng: -1.35,
  },
  {
    name: "Brunoy",
    lat: 48.6979,
    lng: 2.5044,
  },
  {
    name: "Kanchanaburi",
    lat: 14.0194,
    lng: 99.5311,
  },
  {
    name: "Agdas",
    lat: 40.65,
    lng: 47.4833,
  },
  {
    name: "Doba",
    lat: 8.65,
    lng: 16.85,
  },
  {
    name: "Bregenz",
    lat: 47.505,
    lng: 9.7492,
  },
  {
    name: "Suisun City",
    lat: 38.2473,
    lng: -122.009,
  },
  {
    name: "Cheadle Hulme",
    lat: 53.3761,
    lng: -2.1897,
  },
  {
    name: "Nuwara Eliya",
    lat: 6.9667,
    lng: 80.7667,
  },
  {
    name: "Frontera",
    lat: 18.5336,
    lng: -92.6469,
  },
  {
    name: "Katima Mulilo",
    lat: -17.5039,
    lng: 24.275,
  },
  {
    name: "Hindley",
    lat: 53.5355,
    lng: -2.5658,
  },
  {
    name: "Chalatenango",
    lat: 14.072,
    lng: -89.094,
  },
  {
    name: "Mortsel",
    lat: 51.1703,
    lng: 4.4567,
  },
  {
    name: "Haverhill",
    lat: 52.08,
    lng: 0.44,
  },
  {
    name: "Bac Kan",
    lat: 22.1333,
    lng: 105.8333,
  },
  {
    name: "Backa Palanka",
    lat: 45.2506,
    lng: 19.3886,
  },
  {
    name: "Armentieres",
    lat: 50.6881,
    lng: 2.8811,
  },
  {
    name: "Nogales",
    lat: 18.8167,
    lng: -97.1667,
  },
  {
    name: "Villeparisis",
    lat: 48.9503,
    lng: 2.6025,
  },
  {
    name: "Northfield",
    lat: 52.408,
    lng: -1.963,
  },
  {
    name: "Burntwood",
    lat: 52.6831,
    lng: -1.92,
  },
  {
    name: "Westhoughton",
    lat: 53.549,
    lng: -2.529,
  },
  {
    name: "Cenon",
    lat: 44.8578,
    lng: -0.5317,
  },
  {
    name: "Oak Park",
    lat: 42.4649,
    lng: -83.1824,
  },
  {
    name: "Linden",
    lat: 6,
    lng: -58.3,
  },
  {
    name: "Rocha",
    lat: -34.4833,
    lng: -54.35,
  },
  {
    name: "Estoril",
    lat: 38.7057,
    lng: -9.3977,
  },
  {
    name: "Santa Barbara",
    lat: 14.9167,
    lng: -88.2333,
  },
  {
    name: "Khorugh",
    lat: 37.4917,
    lng: 71.5575,
  },
  {
    name: "Colonia del Sacramento",
    lat: -34.4714,
    lng: -57.8442,
  },
  {
    name: "Hillerod",
    lat: 55.9333,
    lng: 12.3167,
  },
  {
    name: "Kamphaeng Phet",
    lat: 16.4811,
    lng: 99.5222,
  },
  {
    name: "Tulum",
    lat: 20.2119,
    lng: -87.4658,
  },
  {
    name: "Cueramaro",
    lat: 20.6258,
    lng: -101.6739,
  },
  {
    name: "East Palo Alto",
    lat: 37.4671,
    lng: -122.1352,
  },
  {
    name: "Saint-Sebastien-sur-Loire",
    lat: 47.2081,
    lng: -1.5014,
  },
  {
    name: "Port Chester",
    lat: 41.0052,
    lng: -73.668,
  },
  {
    name: "Samut Songkhram",
    lat: 13.4097,
    lng: 100.0017,
  },
  {
    name: "West Falls Church",
    lat: 38.8648,
    lng: -77.1878,
  },
  {
    name: "Leigh-on-Sea",
    lat: 51.5425,
    lng: 0.6535,
  },
  {
    name: "Penonome",
    lat: 8.51,
    lng: -80.36,
  },
  {
    name: "Armavir",
    lat: 40.15,
    lng: 44.04,
  },
  {
    name: "Qaha",
    lat: 30.2833,
    lng: 31.2,
  },
  {
    name: "Clydebank",
    lat: 55.8997,
    lng: -4.4006,
  },
  {
    name: "Taverny",
    lat: 49.0264,
    lng: 2.2275,
  },
  {
    name: "Sevres",
    lat: 48.8239,
    lng: 2.2117,
  },
  {
    name: "Hunucma",
    lat: 21.0153,
    lng: -89.8744,
  },
  {
    name: "Vallauris",
    lat: 43.5805,
    lng: 7.0538,
  },
  {
    name: "Villeneuve-la-Garenne",
    lat: 48.9372,
    lng: 2.3278,
  },
  {
    name: "Buri Ram",
    lat: 14.9942,
    lng: 103.1022,
  },
  {
    name: "Bretigny-sur-Orge",
    lat: 48.6114,
    lng: 2.3059,
  },
  {
    name: "Mons-en-Baroeul",
    lat: 50.6369,
    lng: 3.1103,
  },
  {
    name: "Olgiy",
    lat: 48.9656,
    lng: 89.9632,
  },
  {
    name: "Dollis Hill",
    lat: 51.5641,
    lng: -0.2341,
  },
  {
    name: "Wellington",
    lat: 52.7001,
    lng: -2.5157,
  },
  {
    name: "Sao Lourenco do Sul",
    lat: -31.37,
    lng: -51.98,
  },
  {
    name: "Sucy-en-Brie",
    lat: 48.7697,
    lng: 2.5228,
  },
  {
    name: "Pimenta Bueno",
    lat: -11.64,
    lng: -61.21,
  },
  {
    name: "Saint-Gratien",
    lat: 48.9719,
    lng: 2.2828,
  },
  {
    name: "Mendefera",
    lat: 14.8833,
    lng: 38.8167,
  },
  {
    name: "Consett",
    lat: 54.85,
    lng: -1.83,
  },
  {
    name: "Droylsden",
    lat: 53.4828,
    lng: -2.1582,
  },
  {
    name: "Nutley",
    lat: 40.8192,
    lng: -74.1571,
  },
  {
    name: "Otjiwarongo",
    lat: -20.4642,
    lng: 16.6528,
  },
  {
    name: "Vichy",
    lat: 46.1278,
    lng: 3.4267,
  },
  {
    name: "Shamokin",
    lat: 40.7883,
    lng: -76.555,
  },
  {
    name: "Tapiales",
    lat: -34.7058,
    lng: -58.5047,
  },
  {
    name: "Kocani",
    lat: 41.9167,
    lng: 22.4125,
  },
  {
    name: "Englewood",
    lat: 40.8917,
    lng: -73.9736,
  },
  {
    name: "Mitu",
    lat: 1.2503,
    lng: -70.235,
  },
  {
    name: "Pires do Rio",
    lat: -17.2995,
    lng: -48.28,
  },
  {
    name: "Lapa",
    lat: -25.76,
    lng: -49.73,
  },
  {
    name: "Balham",
    lat: 51.4434,
    lng: -0.1525,
  },
  {
    name: "Harborne",
    lat: 52.46,
    lng: -1.95,
  },
  {
    name: "Shenley Brook End",
    lat: 52.009,
    lng: -0.789,
  },
  {
    name: "Winchester",
    lat: 36.1368,
    lng: -115.1299,
  },
  {
    name: "Ouesso",
    lat: 1.6167,
    lng: 16.05,
  },
  {
    name: "Alencon",
    lat: 48.4306,
    lng: 0.0931,
  },
  {
    name: "Burbank",
    lat: 41.7444,
    lng: -87.7686,
  },
  {
    name: "Bloxwich",
    lat: 52.614,
    lng: -2.004,
  },
  {
    name: "Caxito",
    lat: -8.6467,
    lng: 13.6642,
  },
  {
    name: "Upminster",
    lat: 51.5557,
    lng: 0.2512,
  },
  {
    name: "Vevey",
    lat: 46.4667,
    lng: 6.85,
  },
  {
    name: "Itambe",
    lat: -15.2396,
    lng: -40.63,
  },
  {
    name: "Tixtla de Guerrero",
    lat: 17.5667,
    lng: -99.4,
  },
  {
    name: "Santa Maria da Vitoria",
    lat: -13.39,
    lng: -44.21,
  },
  {
    name: "Popondetta",
    lat: -8.7656,
    lng: 148.2347,
  },
  {
    name: "Drexel Hill",
    lat: 39.9495,
    lng: -75.3039,
  },
  {
    name: "Littleover",
    lat: 52.906,
    lng: -1.505,
  },
  {
    name: "Le Bouscat",
    lat: 44.8651,
    lng: -0.5996,
  },
  {
    name: "Fleetwood",
    lat: 53.923,
    lng: -3.015,
  },
  {
    name: "Highgate",
    lat: 51.5716,
    lng: -0.1448,
  },
  {
    name: "Market Harborough",
    lat: 52.4775,
    lng: -0.9206,
  },
  {
    name: "Aldama",
    lat: 28.8386,
    lng: -105.9111,
  },
  {
    name: "Champs-Sur-Marne",
    lat: 48.8529,
    lng: 2.6027,
  },
  {
    name: "Qazax",
    lat: 41.0933,
    lng: 45.3661,
  },
  {
    name: "Deuil-la-Barre",
    lat: 48.9767,
    lng: 2.3272,
  },
  {
    name: "Elancourt",
    lat: 48.7847,
    lng: 1.9589,
  },
  {
    name: "Losino-Petrovskiy",
    lat: 55.8667,
    lng: 38.2,
  },
  {
    name: "Oadby",
    lat: 52.5987,
    lng: -1.0763,
  },
  {
    name: "Hamar",
    lat: 60.7945,
    lng: 11.068,
  },
  {
    name: "Melrose",
    lat: 42.4556,
    lng: -71.059,
  },
  {
    name: "Ocatlan",
    lat: 19.3167,
    lng: -98.2283,
  },
  {
    name: "Renens",
    lat: 46.5353,
    lng: 6.5897,
  },
  {
    name: "Erdington",
    lat: 52.5236,
    lng: -1.8378,
  },
  {
    name: "Mililani Town",
    lat: 21.4465,
    lng: -158.0147,
  },
  {
    name: "Le Grand-Quevilly",
    lat: 49.4072,
    lng: 1.0531,
  },
  {
    name: "Jonava",
    lat: 55.0722,
    lng: 24.2806,
  },
  {
    name: "Bongor",
    lat: 10.2806,
    lng: 15.3722,
  },
  {
    name: "Mongo",
    lat: 12.1837,
    lng: 18.7,
  },
  {
    name: "La Madeleine",
    lat: 50.6558,
    lng: 3.071,
  },
  {
    name: "Penarth",
    lat: 51.43,
    lng: -3.17,
  },
  {
    name: "Acomb",
    lat: 53.955,
    lng: -1.126,
  },
  {
    name: "Dunleary",
    lat: 53.3,
    lng: -6.14,
  },
  {
    name: "Koulikoro",
    lat: 12.8833,
    lng: -7.55,
  },
  {
    name: "Bethune",
    lat: 50.5303,
    lng: 2.6408,
  },
  {
    name: "Neuilly-Plaisance",
    lat: 48.8619,
    lng: 2.5064,
  },
  {
    name: "Don Bosco",
    lat: -34.7,
    lng: -58.2833,
  },
  {
    name: "Tantoyuca",
    lat: 21.35,
    lng: -98.2333,
  },
  {
    name: "Isla Vista",
    lat: 34.4144,
    lng: -119.8581,
  },
  {
    name: "Portishead",
    lat: 51.484,
    lng: -2.7626,
  },
  {
    name: "Tepetlaoxtoc",
    lat: 19.5731,
    lng: -98.8203,
  },
  {
    name: "Kicevo",
    lat: 41.5142,
    lng: 20.9631,
  },
  {
    name: "Koper",
    lat: 45.5475,
    lng: 13.7307,
  },
  {
    name: "Rehoboth",
    lat: -23.3167,
    lng: 17.0833,
  },
  {
    name: "Ciudad Altamirano",
    lat: 18.3583,
    lng: -100.6667,
  },
  {
    name: "Caversham",
    lat: 51.467,
    lng: -0.973,
  },
  {
    name: "Kings Norton",
    lat: 52.4072,
    lng: -1.9272,
  },
  {
    name: "Imperial Beach",
    lat: 32.5689,
    lng: -117.1184,
  },
  {
    name: "Magdalena de Kino",
    lat: 30.6167,
    lng: -111.05,
  },
  {
    name: "Al Ghayzah",
    lat: 16.2394,
    lng: 52.1638,
  },
  {
    name: "Shtime",
    lat: 42.4333,
    lng: 21.0333,
  },
  {
    name: "Hackney",
    lat: 51.5414,
    lng: -0.0266,
  },
  {
    name: "Velenje",
    lat: 46.3667,
    lng: 15.1167,
  },
  {
    name: "Bishopbriggs",
    lat: 55.9046,
    lng: -4.225,
  },
  {
    name: "Piastow",
    lat: 52.1833,
    lng: 20.85,
  },
  {
    name: "Bergenfield",
    lat: 40.9236,
    lng: -73.9983,
  },
  {
    name: "Thornaby on Tees",
    lat: 54.5556,
    lng: -1.3049,
  },
  {
    name: "Stalybridge",
    lat: 53.4834,
    lng: -2.04,
  },
  {
    name: "Cerro Azul",
    lat: 21.2,
    lng: -97.7331,
  },
  {
    name: "Kingswinford",
    lat: 52.4981,
    lng: -2.1657,
  },
  {
    name: "Easton",
    lat: 40.6858,
    lng: -75.2209,
  },
  {
    name: "Priboj",
    lat: 43.5816,
    lng: 19.5273,
  },
  {
    name: "Xoxocotla",
    lat: 18.685,
    lng: -99.2439,
  },
  {
    name: "West Whittier-Los Nietos",
    lat: 33.9759,
    lng: -118.0689,
  },
  {
    name: "Indiana",
    lat: 40.622,
    lng: -79.1552,
  },
  {
    name: "Farnley",
    lat: 53.7876,
    lng: -1.6159,
  },
  {
    name: "Sensuntepeque",
    lat: 13.88,
    lng: -88.63,
  },
  {
    name: "Orly",
    lat: 48.7439,
    lng: 2.3928,
  },
  {
    name: "Siliana",
    lat: 36.0833,
    lng: 9.3833,
  },
  {
    name: "Catio",
    lat: 11.2833,
    lng: -15.25,
  },
  {
    name: "La Union",
    lat: 13.332,
    lng: -87.839,
  },
  {
    name: "Chapala",
    lat: 20.2933,
    lng: -103.1897,
  },
  {
    name: "Weingarten",
    lat: 47.8078,
    lng: 9.6417,
  },
  {
    name: "Maywood",
    lat: 33.9885,
    lng: -118.1877,
  },
  {
    name: "Cormeilles-en-Parisis",
    lat: 48.9739,
    lng: 2.2014,
  },
  {
    name: "Belmont",
    lat: 37.5154,
    lng: -122.2955,
  },
  {
    name: "Reisterstown",
    lat: 39.4552,
    lng: -76.8144,
  },
  {
    name: "Alfreton",
    lat: 53.097,
    lng: -1.38,
  },
  {
    name: "Maisons-Laffitte",
    lat: 48.9469,
    lng: 2.1456,
  },
  {
    name: "Atlatlahucan",
    lat: 18.935,
    lng: -98.9,
  },
  {
    name: "Rolim de Moura",
    lat: -11.7302,
    lng: -61.7806,
  },
  {
    name: "Elgin",
    lat: 57.65,
    lng: -3.315,
  },
  {
    name: "Itaberai",
    lat: -16.02,
    lng: -49.81,
  },
  {
    name: "Koscian",
    lat: 52.0833,
    lng: 16.65,
  },
  {
    name: "Nola",
    lat: 3.5337,
    lng: 16.0666,
  },
  {
    name: "La Valette-du-Var",
    lat: 43.1383,
    lng: 5.9831,
  },
  {
    name: "Kiryas Joel",
    lat: 41.3406,
    lng: -74.166,
  },
  {
    name: "Lemon Grove",
    lat: 32.7331,
    lng: -117.0344,
  },
  {
    name: "Lindenhurst",
    lat: 40.6858,
    lng: -73.371,
  },
  {
    name: "Meoqui",
    lat: 28.2722,
    lng: -105.4819,
  },
  {
    name: "Felixstowe",
    lat: 51.9639,
    lng: 1.3515,
  },
  {
    name: "Ocampo",
    lat: 21.65,
    lng: -101.5,
  },
  {
    name: "Bayanhongor",
    lat: 46.1944,
    lng: 100.7181,
  },
  {
    name: "Blenheim",
    lat: -41.5167,
    lng: 173.95,
  },
  {
    name: "Moyo",
    lat: 3.6504,
    lng: 31.72,
  },
  {
    name: "Camborne",
    lat: 50.213,
    lng: -5.3,
  },
  {
    name: "Voinjama",
    lat: 8.4167,
    lng: -9.75,
  },
  {
    name: "Nakhon Phanom",
    lat: 17.4069,
    lng: 104.7808,
  },
  {
    name: "Atherton",
    lat: 53.523,
    lng: -2.495,
  },
  {
    name: "Meyrin",
    lat: 46.2322,
    lng: 6.0791,
  },
  {
    name: "Utena",
    lat: 55.5,
    lng: 25.6028,
  },
  {
    name: "Stanmore",
    lat: 51.618,
    lng: -0.314,
  },
  {
    name: "Valmiera",
    lat: 57.5381,
    lng: 25.4231,
  },
  {
    name: "Suphan Buri",
    lat: 14.4675,
    lng: 100.1169,
  },
  {
    name: "Failsworth",
    lat: 53.5102,
    lng: -2.1575,
  },
  {
    name: "Torcy",
    lat: 48.8502,
    lng: 2.6508,
  },
  {
    name: "Dongola",
    lat: 19.1769,
    lng: 30.4839,
  },
  {
    name: "Mendi",
    lat: -6.1478,
    lng: 143.6572,
  },
  {
    name: "Viseu",
    lat: -1.1965,
    lng: -46.14,
  },
  {
    name: "Ulaangom",
    lat: 49.9833,
    lng: 92.0667,
  },
  {
    name: "University Park",
    lat: 25.7469,
    lng: -80.3684,
  },
  {
    name: "Rodez",
    lat: 44.3506,
    lng: 2.575,
  },
  {
    name: "Whitefield",
    lat: 53.5521,
    lng: -2.2992,
  },
  {
    name: "Apodi",
    lat: -5.65,
    lng: -37.8,
  },
  {
    name: "Belper",
    lat: 53.029,
    lng: -1.475,
  },
  {
    name: "Oxkutzkab",
    lat: 20.3028,
    lng: -89.4183,
  },
  {
    name: "Soledad",
    lat: 36.4432,
    lng: -121.3426,
  },
  {
    name: "Gjirokaster",
    lat: 40.0758,
    lng: 20.1389,
  },
  {
    name: "Lormont",
    lat: 44.8792,
    lng: -0.5217,
  },
  {
    name: "Chaville",
    lat: 48.8086,
    lng: 2.1886,
  },
  {
    name: "Malinalco",
    lat: 18.9483,
    lng: -99.4947,
  },
  {
    name: "Cliffside Park",
    lat: 40.8221,
    lng: -73.988,
  },
  {
    name: "Eirunepe",
    lat: -6.66,
    lng: -69.8738,
  },
  {
    name: "Svay Rieng",
    lat: 11.0878,
    lng: 105.7994,
  },
  {
    name: "Leisure City",
    lat: 25.4937,
    lng: -80.4369,
  },
  {
    name: "Sumbe",
    lat: -11.2052,
    lng: 13.8417,
  },
  {
    name: "Bajina Basta",
    lat: 43.9731,
    lng: 19.5597,
  },
  {
    name: "Heroica Ciudad de Tlaxiaco",
    lat: 17.2704,
    lng: -97.68,
  },
  {
    name: "Belmont",
    lat: 42.396,
    lng: -71.1795,
  },
  {
    name: "Clevedon",
    lat: 51.438,
    lng: -2.854,
  },
  {
    name: "Sainte-Therese",
    lat: 45.6333,
    lng: -73.85,
  },
  {
    name: "Hovd",
    lat: 48.0167,
    lng: 91.5667,
  },
  {
    name: "Le Petit-Quevilly",
    lat: 49.4311,
    lng: 1.0539,
  },
  {
    name: "Castanos",
    lat: 26.7833,
    lng: -101.4167,
  },
  {
    name: "Fontaine",
    lat: 45.1939,
    lng: 5.6856,
  },
  {
    name: "Calilabad",
    lat: 39.2042,
    lng: 48.4958,
  },
  {
    name: "Litherland",
    lat: 53.4727,
    lng: -2.999,
  },
  {
    name: "Chandlers Ford",
    lat: 50.984,
    lng: -1.3792,
  },
  {
    name: "Nango",
    lat: 34.6003,
    lng: 135.6956,
  },
  {
    name: "Jardim",
    lat: -21.4799,
    lng: -56.15,
  },
  {
    name: "Amnat Charoen",
    lat: 15.85,
    lng: 104.6333,
  },
  {
    name: "Morsang-sur-Orge",
    lat: 48.6618,
    lng: 2.3461,
  },
  {
    name: "Montgeron",
    lat: 48.7039,
    lng: 2.4605,
  },
  {
    name: "Itupiranga",
    lat: -5.12,
    lng: -49.3,
  },
  {
    name: "Croix",
    lat: 50.6781,
    lng: 3.1508,
  },
  {
    name: "Penwortham",
    lat: 53.74,
    lng: -2.72,
  },
  {
    name: "Szczytno",
    lat: 53.5628,
    lng: 20.9853,
  },
  {
    name: "El Tarf",
    lat: 36.7669,
    lng: 8.3136,
  },
  {
    name: "Atoyac de Alvarez",
    lat: 17.2,
    lng: -100.4333,
  },
  {
    name: "Nar'yan-Mar",
    lat: 67.6378,
    lng: 53.0067,
  },
  {
    name: "Kidsgrove",
    lat: 53.0874,
    lng: -2.2478,
  },
  {
    name: "Ewa Gentry",
    lat: 21.3344,
    lng: -158.0262,
  },
  {
    name: "Onex",
    lat: 46.1833,
    lng: 6.1,
  },
  {
    name: "San Juan Zitlaltepec",
    lat: 19.7167,
    lng: -99.05,
  },
  {
    name: "San Marcos",
    lat: 14.966,
    lng: -91.8,
  },
  {
    name: "Baturite",
    lat: -4.3296,
    lng: -38.88,
  },
  {
    name: "Zwedru",
    lat: 6.0704,
    lng: -8.13,
  },
  {
    name: "Decatur",
    lat: 33.7711,
    lng: -84.2968,
  },
  {
    name: "Tipasa",
    lat: 36.5942,
    lng: 2.443,
  },
  {
    name: "Kafr Shukr",
    lat: 30.547,
    lng: 31.2673,
  },
  {
    name: "South Bradenton",
    lat: 27.4612,
    lng: -82.5821,
  },
  {
    name: "Laurel",
    lat: 39.095,
    lng: -76.8622,
  },
  {
    name: "Guiseley",
    lat: 53.875,
    lng: -1.706,
  },
  {
    name: "Fray Bentos",
    lat: -33.1333,
    lng: -58.3,
  },
  {
    name: "Loos",
    lat: 50.6128,
    lng: 3.0144,
  },
  {
    name: "Northwood",
    lat: 51.601,
    lng: -0.4176,
  },
  {
    name: "Longjumeau",
    lat: 48.6943,
    lng: 2.2958,
  },
  {
    name: "Artashat",
    lat: 39.9539,
    lng: 44.5506,
  },
  {
    name: "Swinton",
    lat: 53.5122,
    lng: -2.3412,
  },
  {
    name: "El Cerrito",
    lat: 37.9197,
    lng: -122.3025,
  },
  {
    name: "At Tafilah",
    lat: 30.8375,
    lng: 35.6042,
  },
  {
    name: "Penistone",
    lat: 53.525,
    lng: -1.629,
  },
  {
    name: "Kerkyra",
    lat: 39.6239,
    lng: 19.9214,
  },
  {
    name: "Holborn",
    lat: 51.5172,
    lng: -0.1182,
  },
  {
    name: "Ossett",
    lat: 53.68,
    lng: -1.58,
  },
  {
    name: "Dronfield",
    lat: 53.3024,
    lng: -1.4664,
  },
  {
    name: "Sainte-Foy-les-Lyon",
    lat: 45.73,
    lng: 4.8,
  },
  {
    name: "San Lorenzo",
    lat: 37.6737,
    lng: -122.1349,
  },
  {
    name: "Canelones",
    lat: -34.538,
    lng: -56.284,
  },
  {
    name: "Puyo",
    lat: -1.483,
    lng: -77.987,
  },
  {
    name: "Friern Barnet",
    lat: 51.6126,
    lng: -0.1584,
  },
  {
    name: "Kafr Qasim",
    lat: 32.1142,
    lng: 34.9772,
  },
  {
    name: "South Pasadena",
    lat: 34.1103,
    lng: -118.1573,
  },
  {
    name: "Kenilworth",
    lat: 52.341,
    lng: -1.566,
  },
  {
    name: "Lambarene",
    lat: -0.6883,
    lng: 10.2319,
  },
  {
    name: "Maesteg",
    lat: 51.61,
    lng: -3.65,
  },
  {
    name: "Valinda",
    lat: 34.0401,
    lng: -117.93,
  },
  {
    name: "Visby",
    lat: 57.629,
    lng: 18.3071,
  },
  {
    name: "Montigny-les-Metz",
    lat: 49.1006,
    lng: 6.1539,
  },
  {
    name: "Ban Khlong Ton Madua",
    lat: 13.6372,
    lng: 100.2967,
  },
  {
    name: "Coral Terrace",
    lat: 25.7464,
    lng: -80.3049,
  },
  {
    name: "Paracuru",
    lat: -3.3995,
    lng: -39.04,
  },
  {
    name: "Mohale's Hoek",
    lat: -30.159,
    lng: 27.48,
  },
  {
    name: "Levittown",
    lat: 18.4454,
    lng: -66.1759,
  },
  {
    name: "Palm Springs",
    lat: 26.6349,
    lng: -80.0968,
  },
  {
    name: "Vukovar",
    lat: 45.35,
    lng: 19.0033,
  },
  {
    name: "Wewak",
    lat: -3.55,
    lng: 143.6333,
  },
  {
    name: "Sheldon",
    lat: 52.45,
    lng: -1.7666,
  },
  {
    name: "Baldwin",
    lat: 40.6634,
    lng: -73.6104,
  },
  {
    name: "Haci Zeynalabdin",
    lat: 40.6242,
    lng: 49.5575,
  },
  {
    name: "Juneau",
    lat: 58.4546,
    lng: -134.1739,
  },
  {
    name: "Santiago Ixcuintla",
    lat: 21.811,
    lng: -105.2079,
  },
  {
    name: "Normanton",
    lat: 53.697,
    lng: -1.416,
  },
  {
    name: "Kaga Bandoro",
    lat: 7.0006,
    lng: 19.1808,
  },
  {
    name: "Tbeng Meanchey",
    lat: 13.8167,
    lng: 104.9667,
  },
  {
    name: "Portalegre",
    lat: 39.3167,
    lng: -7.4167,
  },
  {
    name: "University Park",
    lat: 32.8506,
    lng: -96.7937,
  },
  {
    name: "Bispham",
    lat: 53.852,
    lng: -3.041,
  },
  {
    name: "Cloverleaf",
    lat: 29.7882,
    lng: -95.1724,
  },
  {
    name: "Le Plessis-Trevise",
    lat: 48.8111,
    lng: 2.5717,
  },
  {
    name: "Ptuj",
    lat: 46.4186,
    lng: 15.8714,
  },
  {
    name: "Krathum Baen",
    lat: 13.6519,
    lng: 100.2572,
  },
  {
    name: "Riverbank",
    lat: 37.7268,
    lng: -120.9402,
  },
  {
    name: "Tassin-la-Demi-Lune",
    lat: 45.764,
    lng: 4.78,
  },
  {
    name: "Stratton Saint Margaret",
    lat: 51.586,
    lng: -1.762,
  },
  {
    name: "Lincolnia",
    lat: 38.8158,
    lng: -77.1543,
  },
  {
    name: "Kanmaki",
    lat: 34.5628,
    lng: 135.7167,
  },
  {
    name: "March",
    lat: 52.551,
    lng: 0.088,
  },
  {
    name: "Tequixquiac",
    lat: 19.9097,
    lng: -99.1417,
  },
  {
    name: "Melrose Park",
    lat: 41.9029,
    lng: -87.8642,
  },
  {
    name: "Kasamatsucho",
    lat: 35.3672,
    lng: 136.7633,
  },
  {
    name: "Suhbaatar",
    lat: 50.2364,
    lng: 106.2064,
  },
  {
    name: "Reyes Acozac",
    lat: 19.7667,
    lng: -98.9833,
  },
  {
    name: "Baalbek",
    lat: 34.0061,
    lng: 36.2086,
  },
  {
    name: "Palmers Green",
    lat: 51.6178,
    lng: -0.1092,
  },
  {
    name: "Montmorency",
    lat: 48.9906,
    lng: 2.3228,
  },
  {
    name: "Hornsey",
    lat: 51.587,
    lng: -0.118,
  },
  {
    name: "Herndon",
    lat: 38.9699,
    lng: -77.3867,
  },
  {
    name: "Maplewood",
    lat: 40.733,
    lng: -74.2711,
  },
  {
    name: "Falmouth",
    lat: 50.15,
    lng: -5.07,
  },
  {
    name: "Royton",
    lat: 53.566,
    lng: -2.121,
  },
  {
    name: "Bailey's Crossroads",
    lat: 38.8477,
    lng: -77.1305,
  },
  {
    name: "Chiconcuac",
    lat: 19.55,
    lng: -98.9,
  },
  {
    name: "Falagueira",
    lat: 38.759,
    lng: -9.2199,
  },
  {
    name: "Sharunah",
    lat: 28.5667,
    lng: 30.85,
  },
  {
    name: "Rockville Centre",
    lat: 40.6644,
    lng: -73.6383,
  },
  {
    name: "Linslade",
    lat: 51.9243,
    lng: -0.6774,
  },
  {
    name: "Lop Buri",
    lat: 14.8,
    lng: 100.6269,
  },
  {
    name: "Newquay",
    lat: 50.412,
    lng: -5.0757,
  },
  {
    name: "Gan Yavne",
    lat: 31.7886,
    lng: 34.7053,
  },
  {
    name: "Plumstead",
    lat: 51.49,
    lng: 0.09,
  },
  {
    name: "Watauga",
    lat: 32.8718,
    lng: -97.2515,
  },
  {
    name: "Cotija de la Paz",
    lat: 19.81,
    lng: -102.7047,
  },
  {
    name: "Carlow",
    lat: 52.8306,
    lng: -6.9317,
  },
  {
    name: "La Celle-Saint-Cloud",
    lat: 48.8411,
    lng: 2.1344,
  },
  {
    name: "Sao Joao da Madeira",
    lat: 40.9,
    lng: -8.5,
  },
  {
    name: "Montigny-les-Cormeilles",
    lat: 48.9944,
    lng: 2.1958,
  },
  {
    name: "Suitland",
    lat: 38.8492,
    lng: -76.9225,
  },
  {
    name: "Fatick",
    lat: 14.3167,
    lng: -16.4167,
  },
  {
    name: "Chesham",
    lat: 51.712,
    lng: -0.612,
  },
  {
    name: "Lodi",
    lat: 40.8784,
    lng: -74.0814,
  },
  {
    name: "Villa Sarmiento",
    lat: -34.6333,
    lng: -58.5667,
  },
  {
    name: "San Fernando",
    lat: 34.2886,
    lng: -118.4363,
  },
  {
    name: "Chanthaburi",
    lat: 12.6086,
    lng: 102.1039,
  },
  {
    name: "Peekskill",
    lat: 41.2883,
    lng: -73.9227,
  },
  {
    name: "Barras",
    lat: -4.25,
    lng: -42.3,
  },
  {
    name: "Terrytown",
    lat: 29.9014,
    lng: -90.0279,
  },
  {
    name: "Velizy-Villacoublay",
    lat: 48.7834,
    lng: 2.1834,
  },
  {
    name: "Kedainiai",
    lat: 55.2833,
    lng: 23.9667,
  },
  {
    name: "Newton in Makerfield",
    lat: 53.45,
    lng: -2.633,
  },
  {
    name: "Vrbas",
    lat: 45.5697,
    lng: 19.6378,
  },
  {
    name: "Neath",
    lat: 51.66,
    lng: -3.81,
  },
  {
    name: "Huskvarna",
    lat: 57.7919,
    lng: 14.2756,
  },
  {
    name: "Atar",
    lat: 20.5167,
    lng: -13.05,
  },
  {
    name: "Motul",
    lat: 21.1667,
    lng: -89.4667,
  },
  {
    name: "Elmwood Park",
    lat: 41.9225,
    lng: -87.8163,
  },
  {
    name: "Novo Mesto",
    lat: 45.7981,
    lng: 15.1628,
  },
  {
    name: "Renfrew",
    lat: 55.8791,
    lng: -4.3868,
  },
  {
    name: "Horwich",
    lat: 53.592,
    lng: -2.54,
  },
  {
    name: "Cottingham",
    lat: 53.7822,
    lng: -0.4136,
  },
  {
    name: "Southgate",
    lat: 51.6316,
    lng: -0.1265,
  },
  {
    name: "Guaranda",
    lat: -1.6056,
    lng: -79.0031,
  },
  {
    name: "Kibaha",
    lat: -6.7586,
    lng: 38.9289,
  },
  {
    name: "Tysons",
    lat: 38.9215,
    lng: -77.2273,
  },
  {
    name: "Tewkesbury",
    lat: 51.99,
    lng: -2.16,
  },
  {
    name: "Palm Tree",
    lat: 41.3411,
    lng: -74.1667,
  },
  {
    name: "Satun",
    lat: 6.6147,
    lng: 100.0681,
  },
  {
    name: "Villeneuve-le-Roi",
    lat: 48.7333,
    lng: 2.4167,
  },
  {
    name: "Phetchaburi",
    lat: 13.1119,
    lng: 99.9458,
  },
  {
    name: "Copiague",
    lat: 40.6728,
    lng: -73.3932,
  },
  {
    name: "Oak Ridge",
    lat: 28.4727,
    lng: -81.4169,
  },
  {
    name: "Chilly-Mazarin",
    lat: 48.7025,
    lng: 2.3125,
  },
  {
    name: "Ashland",
    lat: 37.6942,
    lng: -122.1159,
  },
  {
    name: "West Puente Valley",
    lat: 34.0512,
    lng: -117.9681,
  },
  {
    name: "Rosemont",
    lat: 38.5477,
    lng: -121.3553,
  },
  {
    name: "Southbourne",
    lat: 50.722,
    lng: -1.798,
  },
  {
    name: "Peterlee",
    lat: 54.76,
    lng: -1.33,
  },
  {
    name: "Kirkstall",
    lat: 53.816,
    lng: -1.602,
  },
  {
    name: "Penzance",
    lat: 50.119,
    lng: -5.537,
  },
  {
    name: "Ogre",
    lat: 56.8169,
    lng: 24.6047,
  },
  {
    name: "Cudahy",
    lat: 33.9631,
    lng: -118.183,
  },
  {
    name: "The Crossings",
    lat: 25.6708,
    lng: -80.4018,
  },
  {
    name: "Shoreham-by-Sea",
    lat: 50.834,
    lng: -0.273,
  },
  {
    name: "Seaham",
    lat: 54.84,
    lng: -1.34,
  },
  {
    name: "Allschwil",
    lat: 47.5508,
    lng: 7.5358,
  },
  {
    name: "Coudekerque-Branche",
    lat: 51.0253,
    lng: 2.3917,
  },
  {
    name: "Nkhata Bay",
    lat: -11.6333,
    lng: 34.3,
  },
  {
    name: "Hialeah Gardens",
    lat: 25.8878,
    lng: -80.3569,
  },
  {
    name: "Sukhodilsk",
    lat: 48.35,
    lng: 39.7167,
  },
  {
    name: "Mantes-la-Ville",
    lat: 48.975,
    lng: 1.7117,
  },
  {
    name: "Carteret",
    lat: 40.5848,
    lng: -74.2284,
  },
  {
    name: "Woodlawn",
    lat: 38.7332,
    lng: -77.1149,
  },
  {
    name: "Opfikon",
    lat: 47.4331,
    lng: 8.5719,
  },
  {
    name: "Tena",
    lat: -0.989,
    lng: -77.8159,
  },
  {
    name: "Wasquehal",
    lat: 50.6694,
    lng: 3.1308,
  },
  {
    name: "Peto",
    lat: 20.1256,
    lng: -88.9214,
  },
  {
    name: "Biddulph",
    lat: 53.12,
    lng: -2.17,
  },
  {
    name: "Killingworth",
    lat: 55.0318,
    lng: -1.5557,
  },
  {
    name: "Loreto",
    lat: 26.0128,
    lng: -111.3433,
  },
  {
    name: "Naas",
    lat: 53.2158,
    lng: -6.6669,
  },
  {
    name: "Sacavem",
    lat: 38.7944,
    lng: -9.1053,
  },
  {
    name: "Jekabpils",
    lat: 56.4975,
    lng: 25.8664,
  },
  {
    name: "Caterham",
    lat: 51.2803,
    lng: -0.0816,
  },
  {
    name: "Yonabaru",
    lat: 26.1994,
    lng: 127.7547,
  },
  {
    name: "Nyon",
    lat: 46.382,
    lng: 6.2389,
  },
  {
    name: "Ciudad Miguel Aleman",
    lat: 26.4003,
    lng: -99.0253,
  },
  {
    name: "Bellshill",
    lat: 55.8165,
    lng: -4.0262,
  },
  {
    name: "Worcester Park",
    lat: 51.3752,
    lng: -0.239,
  },
  {
    name: "Maywood",
    lat: 41.8798,
    lng: -87.8442,
  },
  {
    name: "Davyhulme",
    lat: 53.4559,
    lng: -2.3683,
  },
  {
    name: "Fleury-les-Aubrais",
    lat: 47.9512,
    lng: 1.8745,
  },
  {
    name: "Hidalgotitlan",
    lat: 17.7833,
    lng: -94.6333,
  },
  {
    name: "Winter Gardens",
    lat: 32.8376,
    lng: -116.9268,
  },
  {
    name: "Le Mee-sur-Seine",
    lat: 48.5333,
    lng: 2.6289,
  },
  {
    name: "Acheres",
    lat: 48.9602,
    lng: 2.0684,
  },
  {
    name: "Kilkenny",
    lat: 52.6477,
    lng: -7.2561,
  },
  {
    name: "Alloa",
    lat: 56.116,
    lng: -3.793,
  },
  {
    name: "Aarau",
    lat: 47.3923,
    lng: 8.0446,
  },
  {
    name: "West Rancho Dominguez",
    lat: 33.9057,
    lng: -118.2682,
  },
  {
    name: "Blue Island",
    lat: 41.6578,
    lng: -87.6812,
  },
  {
    name: "Lamu",
    lat: -2.2686,
    lng: 40.9003,
  },
  {
    name: "Bilasuvar",
    lat: 39.4481,
    lng: 48.5428,
  },
  {
    name: "Kayanza",
    lat: -2.9221,
    lng: 29.6293,
  },
  {
    name: "Sibiti",
    lat: -3.6833,
    lng: 13.35,
  },
  {
    name: "Llandudno",
    lat: 53.325,
    lng: -3.826,
  },
  {
    name: "Madingou",
    lat: -4.1536,
    lng: 13.55,
  },
  {
    name: "Bathgate",
    lat: 55.9024,
    lng: -3.6431,
  },
  {
    name: "Mzimba",
    lat: -11.9,
    lng: 33.6,
  },
  {
    name: "Sibut",
    lat: 5.7378,
    lng: 19.0867,
  },
  {
    name: "Rothwell",
    lat: 53.7485,
    lng: -1.478,
  },
  {
    name: "Goodmayes",
    lat: 51.5584,
    lng: 0.1119,
  },
  {
    name: "Uliastay",
    lat: 47.7417,
    lng: 96.8444,
  },
  {
    name: "Ives Estates",
    lat: 25.9632,
    lng: -80.183,
  },
  {
    name: "Burnham-on-Sea",
    lat: 51.2376,
    lng: -2.9935,
  },
  {
    name: "Ahfir",
    lat: 34.9514,
    lng: -2.1025,
  },
  {
    name: "Nogent-sur-Oise",
    lat: 49.2756,
    lng: 2.4683,
  },
  {
    name: "Modling",
    lat: 48.0856,
    lng: 16.2831,
  },
  {
    name: "Quedgeley",
    lat: 51.825,
    lng: -2.28,
  },
  {
    name: "Kayunga",
    lat: 0.7025,
    lng: 32.8886,
  },
  {
    name: "Dukinfield",
    lat: 53.4739,
    lng: -2.0828,
  },
  {
    name: "Mulanje",
    lat: -16.0316,
    lng: 35.5,
  },
  {
    name: "West Carson",
    lat: 33.8229,
    lng: -118.2931,
  },
  {
    name: "Prestatyn",
    lat: 53.331,
    lng: -3.405,
  },
  {
    name: "Bafata",
    lat: 12.1719,
    lng: -14.6575,
  },
  {
    name: "Dingle",
    lat: 53.3774,
    lng: -2.9613,
  },
  {
    name: "Phichit",
    lat: 16.4431,
    lng: 100.3467,
  },
  {
    name: "Mouila",
    lat: -1.8667,
    lng: 11.055,
  },
  {
    name: "Huanimaro",
    lat: 20.3675,
    lng: -101.4969,
  },
  {
    name: "Loei",
    lat: 17.4903,
    lng: 101.725,
  },
  {
    name: "Willowbrook",
    lat: 33.9199,
    lng: -118.2362,
  },
  {
    name: "Millbrae",
    lat: 37.5994,
    lng: -122.4023,
  },
  {
    name: "East Barnet",
    lat: 51.643,
    lng: -0.163,
  },
  {
    name: "Molesey",
    lat: 51.401,
    lng: -0.363,
  },
  {
    name: "Mbaiki",
    lat: 3.8833,
    lng: 18,
  },
  {
    name: "Soroca",
    lat: 48.1558,
    lng: 28.2975,
  },
  {
    name: "Hayesville",
    lat: 44.9794,
    lng: -122.9739,
  },
  {
    name: "Nsanje",
    lat: -16.9167,
    lng: 35.2667,
  },
  {
    name: "Connahs Quay",
    lat: 53.2179,
    lng: -3.0573,
  },
  {
    name: "Truro",
    lat: 50.26,
    lng: -5.051,
  },
  {
    name: "Phetchabun",
    lat: 16.4169,
    lng: 101.1533,
  },
  {
    name: "Liversedge",
    lat: 53.7067,
    lng: -1.69,
  },
  {
    name: "Bella Union",
    lat: -30.26,
    lng: -57.5992,
  },
  {
    name: "Caacupe",
    lat: -25.387,
    lng: -57.14,
  },
  {
    name: "Antrim",
    lat: 54.7173,
    lng: -6.2055,
  },
  {
    name: "Fortin de las Flores",
    lat: 18.9,
    lng: -97,
  },
  {
    name: "Mocoa",
    lat: 1.15,
    lng: -76.63,
  },
  {
    name: "Monsey",
    lat: 41.1181,
    lng: -74.0681,
  },
  {
    name: "Telsiai",
    lat: 55.9833,
    lng: 22.25,
  },
  {
    name: "Guayama",
    lat: 17.9744,
    lng: -66.1104,
  },
  {
    name: "Landover",
    lat: 38.9241,
    lng: -76.8875,
  },
  {
    name: "Linlithgow",
    lat: 55.9791,
    lng: -3.6105,
  },
  {
    name: "Keynsham",
    lat: 51.4135,
    lng: -2.4968,
  },
  {
    name: "Taurage",
    lat: 55.2514,
    lng: 22.2903,
  },
  {
    name: "Kegalle",
    lat: 7.2531,
    lng: 80.3453,
  },
  {
    name: "Ghat",
    lat: 24.95,
    lng: 10.3167,
  },
  {
    name: "Moreton",
    lat: 53.401,
    lng: -3.111,
  },
  {
    name: "Bedlington",
    lat: 55.133,
    lng: -1.583,
  },
  {
    name: "Hillside",
    lat: 40.6961,
    lng: -74.2286,
  },
  {
    name: "Reinach",
    lat: 47.4936,
    lng: 7.5908,
  },
  {
    name: "Al Karak",
    lat: 31.1833,
    lng: 35.7,
  },
  {
    name: "Massapequa",
    lat: 40.6676,
    lng: -73.4706,
  },
  {
    name: "Saint-Lambert",
    lat: 45.5,
    lng: -73.5167,
  },
  {
    name: "Woodhouse",
    lat: 53.358,
    lng: -1.373,
  },
  {
    name: "Aldo Bonzi",
    lat: -34.7083,
    lng: -58.5181,
  },
  {
    name: "Westbury",
    lat: 51.26,
    lng: -2.191,
  },
  {
    name: "Hadleigh",
    lat: 51.5535,
    lng: 0.6095,
  },
  {
    name: "Goroka",
    lat: -6.0833,
    lng: 145.3833,
  },
  {
    name: "Kew Green",
    lat: 51.5308,
    lng: -0.2248,
  },
  {
    name: "Roselle",
    lat: 40.6527,
    lng: -74.2599,
  },
  {
    name: "Sunny Isles Beach",
    lat: 25.9385,
    lng: -80.1246,
  },
  {
    name: "Kitagata",
    lat: 35.4369,
    lng: 136.6861,
  },
  {
    name: "Calne",
    lat: 51.438,
    lng: -2.005,
  },
  {
    name: "Jasmine Estates",
    lat: 28.293,
    lng: -82.6907,
  },
  {
    name: "Carmelo",
    lat: -33.9999,
    lng: -58.2847,
  },
  {
    name: "Acatlan de Osorio",
    lat: 18.2086,
    lng: -98.0575,
  },
  {
    name: "Nantwich",
    lat: 53.067,
    lng: -2.522,
  },
  {
    name: "Nong Bua Lamphu",
    lat: 17.2042,
    lng: 102.4444,
  },
  {
    name: "Ashtarak",
    lat: 40.3,
    lng: 44.4,
  },
  {
    name: "Abbots Langley",
    lat: 51.701,
    lng: -0.416,
  },
  {
    name: "Obiliq",
    lat: 42.69,
    lng: 21.0778,
  },
  {
    name: "North Lynnwood",
    lat: 47.8533,
    lng: -122.2762,
  },
  {
    name: "Hamtramck",
    lat: 42.3954,
    lng: -83.056,
  },
  {
    name: "Hampton",
    lat: 51.422,
    lng: -0.367,
  },
  {
    name: "Haciqabul",
    lat: 40.0375,
    lng: 48.935,
  },
  {
    name: "Ayutla de los Libres",
    lat: 16.9,
    lng: -99.2167,
  },
  {
    name: "Schlieren",
    lat: 47.3989,
    lng: 8.4497,
  },
  {
    name: "Johnstone",
    lat: 55.8346,
    lng: -4.5027,
  },
  {
    name: "Bozoum",
    lat: 6.3172,
    lng: 16.3783,
  },
  {
    name: "Dover",
    lat: 40.002,
    lng: -76.8699,
  },
  {
    name: "Kapolei",
    lat: 21.3403,
    lng: -158.0665,
  },
  {
    name: "Mchinji",
    lat: -13.8167,
    lng: 32.9,
  },
  {
    name: "Pully",
    lat: 46.5167,
    lng: 6.6667,
  },
  {
    name: "Patcham",
    lat: 50.864,
    lng: -0.15,
  },
  {
    name: "Dawlish",
    lat: 50.581,
    lng: -3.466,
  },
  {
    name: "Virovitica",
    lat: 45.8333,
    lng: 17.3833,
  },
  {
    name: "Mickleover",
    lat: 52.901,
    lng: -1.552,
  },
  {
    name: "Redhill",
    lat: 51.2393,
    lng: -0.1726,
  },
  {
    name: "Maralal",
    lat: 1.1,
    lng: 36.7,
  },
  {
    name: "Mountlake Terrace",
    lat: 47.7921,
    lng: -122.3076,
  },
  {
    name: "Lennox",
    lat: 33.938,
    lng: -118.3586,
  },
  {
    name: "Hebburn",
    lat: 54.9718,
    lng: -1.5128,
  },
  {
    name: "North Plainfield",
    lat: 40.6209,
    lng: -74.4386,
  },
  {
    name: "Lealman",
    lat: 27.8197,
    lng: -82.6847,
  },
  {
    name: "Ukmerge",
    lat: 55.2667,
    lng: 24.75,
  },
  {
    name: "Santa Lucia",
    lat: -34.4525,
    lng: -56.3964,
  },
  {
    name: "Obock",
    lat: 11.9667,
    lng: 43.2833,
  },
  {
    name: "Orhei",
    lat: 47.3831,
    lng: 28.8231,
  },
  {
    name: "Rutana",
    lat: -3.931,
    lng: 29.993,
  },
  {
    name: "Adliswil",
    lat: 47.3122,
    lng: 8.5256,
  },
  {
    name: "La Esperanza",
    lat: 14.3,
    lng: -88.1833,
  },
  {
    name: "Luena",
    lat: -11.79,
    lng: 19.9,
  },
  {
    name: "Tadaoka-higashi",
    lat: 34.4869,
    lng: 135.4011,
  },
  {
    name: "North Bay Shore",
    lat: 40.7601,
    lng: -73.2618,
  },
  {
    name: "Thalwil",
    lat: 47.2953,
    lng: 8.5647,
  },
  {
    name: "Horsforth",
    lat: 53.8341,
    lng: -1.6429,
  },
  {
    name: "Sweetwater",
    lat: 25.7786,
    lng: -80.376,
  },
  {
    name: "Telavi",
    lat: 41.9167,
    lng: 45.4833,
  },
  {
    name: "Ceres",
    lat: -15.3033,
    lng: -49.6052,
  },
  {
    name: "Hednesford",
    lat: 52.7115,
    lng: -2.0006,
  },
  {
    name: "Makakilo",
    lat: 21.3591,
    lng: -158.0813,
  },
  {
    name: "Wolfratshausen",
    lat: 47.9133,
    lng: 11.4278,
  },
  {
    name: "Impfondo",
    lat: 1.6333,
    lng: 18.0667,
  },
  {
    name: "Quba",
    lat: 41.3653,
    lng: 48.5264,
  },
  {
    name: "Birstall",
    lat: 53.7343,
    lng: -1.6609,
  },
  {
    name: "Moston",
    lat: 53.5156,
    lng: -2.1848,
  },
  {
    name: "Staines-upon-Thames",
    lat: 51.433,
    lng: -0.517,
  },
  {
    name: "Dolores",
    lat: -33.5333,
    lng: -58.2167,
  },
  {
    name: "Tecpan de Galeana",
    lat: 17.25,
    lng: -100.6833,
  },
  {
    name: "Chemax",
    lat: 20.655,
    lng: -87.9372,
  },
  {
    name: "El Rosario",
    lat: 22.9922,
    lng: -105.8572,
  },
  {
    name: "Miahuatlan de Porfirio Diaz",
    lat: 16.33,
    lng: -96.6,
  },
  {
    name: "McNair",
    lat: 38.9513,
    lng: -77.4116,
  },
  {
    name: "Wibsey",
    lat: 53.7672,
    lng: -1.7728,
  },
  {
    name: "Palisades Park",
    lat: 40.8472,
    lng: -73.9967,
  },
  {
    name: "Ismayilli",
    lat: 40.7839,
    lng: 48.1439,
  },
  {
    name: "Ati",
    lat: 13.2139,
    lng: 18.3403,
  },
  {
    name: "El Dorado",
    lat: 24.3228,
    lng: -107.363,
  },
  {
    name: "Nan",
    lat: 18.7833,
    lng: 100.7833,
  },
  {
    name: "Cowley",
    lat: 51.733,
    lng: -1.215,
  },
  {
    name: "Palau",
    lat: 27.9167,
    lng: -101.4167,
  },
  {
    name: "Porthcawl",
    lat: 51.48,
    lng: -3.69,
  },
  {
    name: "New Brighton",
    lat: 53.432,
    lng: -3.049,
  },
  {
    name: "Bingley",
    lat: 53.8509,
    lng: -1.838,
  },
  {
    name: "South San Jose Hills",
    lat: 34.0123,
    lng: -117.9041,
  },
  {
    name: "Yasothon",
    lat: 15.7883,
    lng: 104.1506,
  },
  {
    name: "South El Monte",
    lat: 34.0493,
    lng: -118.0484,
  },
  {
    name: "Belgrave",
    lat: 52.6566,
    lng: -1.1262,
  },
  {
    name: "Baguley",
    lat: 53.399,
    lng: -2.276,
  },
  {
    name: "Warminster",
    lat: 51.205,
    lng: -2.181,
  },
  {
    name: "Ostermundigen",
    lat: 46.9553,
    lng: 7.4833,
  },
  {
    name: "West Derby",
    lat: 53.4338,
    lng: -2.907,
  },
  {
    name: "Haslingden",
    lat: 53.705,
    lng: -2.328,
  },
  {
    name: "Bubanza",
    lat: -3.0833,
    lng: 29.4,
  },
  {
    name: "Columbia Heights",
    lat: 45.0484,
    lng: -93.2472,
  },
  {
    name: "Sunbury",
    lat: 51.423,
    lng: -0.424,
  },
  {
    name: "Stoke Gifford",
    lat: 51.517,
    lng: -2.548,
  },
  {
    name: "Nailsea",
    lat: 51.43,
    lng: -2.76,
  },
  {
    name: "Cleckheaton",
    lat: 53.725,
    lng: -1.719,
  },
  {
    name: "Somoto",
    lat: 13.4833,
    lng: -86.5833,
  },
  {
    name: "Senta",
    lat: 45.9231,
    lng: 20.0731,
  },
  {
    name: "Shirley",
    lat: 51.3813,
    lng: -0.0543,
  },
  {
    name: "Leagrave",
    lat: 51.903,
    lng: -0.466,
  },
  {
    name: "Santiago Tuxtla",
    lat: 18.4704,
    lng: -95.3,
  },
  {
    name: "Lomita",
    lat: 33.7933,
    lng: -118.3175,
  },
  {
    name: "Cosham",
    lat: 50.8424,
    lng: -1.066,
  },
  {
    name: "Bayshore Gardens",
    lat: 27.4345,
    lng: -82.5794,
  },
  {
    name: "Enfield Lock",
    lat: 51.6686,
    lng: -0.026,
  },
  {
    name: "Acala",
    lat: 16.5533,
    lng: -92.8069,
  },
  {
    name: "Agsu",
    lat: 40.5708,
    lng: 48.3928,
  },
  {
    name: "Asosa",
    lat: 10.0667,
    lng: 34.5167,
  },
  {
    name: "North Bellmore",
    lat: 40.6904,
    lng: -73.539,
  },
  {
    name: "Agstafa",
    lat: 41.1167,
    lng: 45.45,
  },
  {
    name: "Harwich",
    lat: 51.934,
    lng: 1.266,
  },
  {
    name: "Saffron Walden",
    lat: 52.022,
    lng: 0.243,
  },
  {
    name: "Basford",
    lat: 52.978,
    lng: -1.169,
  },
  {
    name: "Comrat",
    lat: 46.3003,
    lng: 28.6572,
  },
  {
    name: "Guastatoya",
    lat: 14.8539,
    lng: -90.0686,
  },
  {
    name: "Kirkland",
    lat: 45.45,
    lng: -73.8667,
  },
  {
    name: "Qormi",
    lat: 35.8794,
    lng: 14.4722,
  },
  {
    name: "West Hempstead",
    lat: 40.6959,
    lng: -73.6507,
  },
  {
    name: "Arvayheer",
    lat: 46.2639,
    lng: 102.775,
  },
  {
    name: "Tyldesley",
    lat: 53.5166,
    lng: -2.4667,
  },
  {
    name: "Sligo",
    lat: 54.2667,
    lng: -8.4833,
  },
  {
    name: "Harrison",
    lat: 40.7431,
    lng: -74.1531,
  },
  {
    name: "Hilsea",
    lat: 50.83,
    lng: -1.07,
  },
  {
    name: "West Chester",
    lat: 39.9601,
    lng: -75.6058,
  },
  {
    name: "Hakha",
    lat: 22.65,
    lng: 93.6167,
  },
  {
    name: "Mubende",
    lat: 0.5904,
    lng: 31.37,
  },
  {
    name: "Ulcinj",
    lat: 41.9236,
    lng: 19.2056,
  },
  {
    name: "Tidjikja",
    lat: 18.55,
    lng: -11.4166,
  },
  {
    name: "Elmwood Park",
    lat: 40.905,
    lng: -74.1201,
  },
  {
    name: "Stone",
    lat: 52.9,
    lng: -2.15,
  },
  {
    name: "Morges",
    lat: 46.5094,
    lng: 6.4986,
  },
  {
    name: "The Mumbles",
    lat: 51.573,
    lng: -3.9992,
  },
  {
    name: "Westmount",
    lat: 45.4833,
    lng: -73.6,
  },
  {
    name: "Fazakerley",
    lat: 53.4676,
    lng: -2.9408,
  },
  {
    name: "Maldon",
    lat: 51.7318,
    lng: 0.6758,
  },
  {
    name: "Kebili",
    lat: 33.69,
    lng: 8.971,
  },
  {
    name: "Wombwell",
    lat: 53.516,
    lng: -1.4,
  },
  {
    name: "Eldama Ravine",
    lat: 0.0504,
    lng: 35.72,
  },
  {
    name: "Tilbury",
    lat: 51.4606,
    lng: 0.3582,
  },
  {
    name: "Ciudad de Huitzuco",
    lat: 18.3,
    lng: -99.35,
  },
  {
    name: "La Cruz",
    lat: 23.9214,
    lng: -106.8919,
  },
  {
    name: "Tlaxcala",
    lat: 19.3191,
    lng: -98.1998,
  },
  {
    name: "Larkhall",
    lat: 55.737,
    lng: -3.972,
  },
  {
    name: "Tecuala",
    lat: 22.4004,
    lng: -105.46,
  },
  {
    name: "Schofield Barracks",
    lat: 21.4936,
    lng: -158.0617,
  },
  {
    name: "Norwood",
    lat: 39.1605,
    lng: -84.4535,
  },
  {
    name: "Ciudad Guadalupe Victoria",
    lat: 24.4497,
    lng: -104.1225,
  },
  {
    name: "Kavieng",
    lat: -2.5667,
    lng: 150.8,
  },
  {
    name: "Franconia",
    lat: 38.7682,
    lng: -77.1587,
  },
  {
    name: "Clayton",
    lat: 53.782,
    lng: -1.8135,
  },
  {
    name: "Albany",
    lat: 37.8898,
    lng: -122.3018,
  },
  {
    name: "Faranah",
    lat: 10.0404,
    lng: -10.75,
  },
  {
    name: "Phra Pradaeng",
    lat: 13.659,
    lng: 100.5329,
  },
  {
    name: "Milton",
    lat: 53.05,
    lng: -2.142,
  },
  {
    name: "Santa Catarina Juquila",
    lat: 16.2364,
    lng: -97.2919,
  },
  {
    name: "Kidbrooke",
    lat: 51.465,
    lng: 0.033,
  },
  {
    name: "Shipley",
    lat: 53.833,
    lng: -1.777,
  },
  {
    name: "Lezhe",
    lat: 41.7805,
    lng: 19.6434,
  },
  {
    name: "Santiago Tulantepec",
    lat: 20.0397,
    lng: -98.3575,
  },
  {
    name: "Central Falls",
    lat: 41.89,
    lng: -71.3934,
  },
  {
    name: "Whickham",
    lat: 54.9456,
    lng: -1.6726,
  },
  {
    name: "Rodolfo Sanchez Taboada",
    lat: 31.7958,
    lng: -116.5911,
  },
  {
    name: "Deysbrook",
    lat: 53.429,
    lng: -2.934,
  },
  {
    name: "Mont-Royal",
    lat: 45.5161,
    lng: -73.6431,
  },
  {
    name: "La Crescenta-Montrose",
    lat: 34.2322,
    lng: -118.2353,
  },
  {
    name: "Ciudad Hidalgo",
    lat: 14.6792,
    lng: -92.1497,
  },
  {
    name: "Cardenas",
    lat: 22.0103,
    lng: -99.6522,
  },
  {
    name: "Barton upon Irwell",
    lat: 53.476,
    lng: -2.36,
  },
  {
    name: "Solothurn",
    lat: 47.2081,
    lng: 7.5375,
  },
  {
    name: "Lynbrook",
    lat: 40.6579,
    lng: -73.6742,
  },
  {
    name: "Lai",
    lat: 9.4,
    lng: 16.3,
  },
  {
    name: "Bonnyrigg",
    lat: 55.8747,
    lng: -3.1031,
  },
  {
    name: "Budva",
    lat: 42.2847,
    lng: 18.8453,
  },
  {
    name: "Son La",
    lat: 21.327,
    lng: 103.9141,
  },
  {
    name: "Tchibanga",
    lat: -2.9331,
    lng: 10.9831,
  },
  {
    name: "Macas",
    lat: -2.3,
    lng: -78.1167,
  },
  {
    name: "Partick",
    lat: 55.8699,
    lng: -4.3125,
  },
  {
    name: "Netherton",
    lat: 52.4908,
    lng: -2.0835,
  },
  {
    name: "Hermosa Beach",
    lat: 33.8654,
    lng: -118.3966,
  },
  {
    name: "Tillaberi",
    lat: 14.212,
    lng: 1.4531,
  },
  {
    name: "Seacroft",
    lat: 53.8222,
    lng: -1.4599,
  },
  {
    name: "Kawachicho",
    lat: 34.5783,
    lng: 135.7367,
  },
  {
    name: "Tepoztlan",
    lat: 18.9853,
    lng: -99.0997,
  },
  {
    name: "Attapu",
    lat: 14.8,
    lng: 106.8333,
  },
  {
    name: "Langley Park",
    lat: 38.9897,
    lng: -76.9808,
  },
  {
    name: "Morristown",
    lat: 40.7966,
    lng: -74.4772,
  },
  {
    name: "Baildon",
    lat: 53.851,
    lng: -1.763,
  },
  {
    name: "Sherrelwood",
    lat: 39.839,
    lng: -105.0014,
  },
  {
    name: "Mineola",
    lat: 40.7469,
    lng: -73.6392,
  },
  {
    name: "North Valley Stream",
    lat: 40.684,
    lng: -73.7077,
  },
  {
    name: "Harrow Weald",
    lat: 51.604,
    lng: -0.339,
  },
  {
    name: "Evergreen Park",
    lat: 41.7213,
    lng: -87.7013,
  },
  {
    name: "Addlestone",
    lat: 51.3695,
    lng: -0.4901,
  },
  {
    name: "Pemberton",
    lat: 53.536,
    lng: -2.6738,
  },
  {
    name: "Baabda",
    lat: 33.8333,
    lng: 35.5333,
  },
  {
    name: "West Wickham",
    lat: 51.3765,
    lng: -0.0193,
  },
  {
    name: "Binningen",
    lat: 47.5333,
    lng: 7.5667,
  },
  {
    name: "Apaxco de Ocampo",
    lat: 19.9733,
    lng: -99.17,
  },
  {
    name: "Mao",
    lat: 14.1194,
    lng: 15.3133,
  },
  {
    name: "Saltash",
    lat: 50.408,
    lng: -4.212,
  },
  {
    name: "Dzuunmod",
    lat: 47.7069,
    lng: 106.9494,
  },
  {
    name: "Wellington",
    lat: 50.9755,
    lng: -3.2243,
  },
  {
    name: "Bellaire",
    lat: 29.704,
    lng: -95.4622,
  },
  {
    name: "Harnosand",
    lat: 62.6323,
    lng: 17.9379,
  },
  {
    name: "Keetmanshoop",
    lat: -26.5833,
    lng: 18.1333,
  },
  {
    name: "Paraguari",
    lat: -25.62,
    lng: -57.16,
  },
  {
    name: "Hazel Grove",
    lat: 53.375,
    lng: -2.111,
  },
  {
    name: "Northenden",
    lat: 53.4075,
    lng: -2.2583,
  },
  {
    name: "Hinche",
    lat: 19.143,
    lng: -72.004,
  },
  {
    name: "Hun",
    lat: 29.1167,
    lng: 15.9333,
  },
  {
    name: "Kimbe",
    lat: -5.55,
    lng: 150.143,
  },
  {
    name: "Dong Ha",
    lat: 16.8056,
    lng: 107.0906,
  },
  {
    name: "Pureparo de Echaiz",
    lat: 19.9,
    lng: -102,
  },
  {
    name: "Visaginas",
    lat: 55.6,
    lng: 26.4333,
  },
  {
    name: "Avenel",
    lat: 40.5839,
    lng: -74.272,
  },
  {
    name: "North Amityville",
    lat: 40.7005,
    lng: -73.4118,
  },
  {
    name: "Mansa Konko",
    lat: 13.3773,
    lng: -15.6786,
  },
  {
    name: "Prestwick",
    lat: 55.4956,
    lng: -4.6142,
  },
  {
    name: "Point Pleasant",
    lat: 40.0772,
    lng: -74.0702,
  },
  {
    name: "Pakwach",
    lat: 2.45,
    lng: 31.5,
  },
  {
    name: "Hawthorne",
    lat: 40.9579,
    lng: -74.1581,
  },
  {
    name: "La Crucecita",
    lat: 15.7753,
    lng: -96.1425,
  },
  {
    name: "Rwamagana",
    lat: -1.9525,
    lng: 30.4378,
  },
  {
    name: "Buckley",
    lat: 53.172,
    lng: -3.086,
  },
  {
    name: "Rock Ferry",
    lat: 53.373,
    lng: -3.008,
  },
  {
    name: "Banstead",
    lat: 51.322,
    lng: -0.204,
  },
  {
    name: "Siyazan",
    lat: 41.0783,
    lng: 49.1061,
  },
  {
    name: "Hythe",
    lat: 51.0716,
    lng: 1.084,
  },
  {
    name: "Bellwood",
    lat: 41.8829,
    lng: -87.8762,
  },
  {
    name: "Vicente Guerrero",
    lat: 23.75,
    lng: -103.9833,
  },
  {
    name: "Leposaviq",
    lat: 43.1,
    lng: 20.8,
  },
  {
    name: "Goulmima",
    lat: 31.6944,
    lng: -4.9592,
  },
  {
    name: "Sabirabad",
    lat: 40.0053,
    lng: 48.4719,
  },
  {
    name: "Clitheroe",
    lat: 53.8711,
    lng: -2.3916,
  },
  {
    name: "Bromborough",
    lat: 53.336,
    lng: -2.978,
  },
  {
    name: "North Massapequa",
    lat: 40.7031,
    lng: -73.4678,
  },
  {
    name: "Molde",
    lat: 62.7483,
    lng: 7.1833,
  },
  {
    name: "Viljandi",
    lat: 58.3633,
    lng: 25.5956,
  },
  {
    name: "Hendaye",
    lat: 43.3586,
    lng: -1.7744,
  },
  {
    name: "Tsetserleg",
    lat: 47.4769,
    lng: 101.4503,
  },
  {
    name: "Winthrop",
    lat: 42.3751,
    lng: -70.9847,
  },
  {
    name: "Cerritos",
    lat: 22.4275,
    lng: -100.2783,
  },
  {
    name: "Straseni",
    lat: 47.1414,
    lng: 28.6103,
  },
  {
    name: "Beausoleil",
    lat: 43.7419,
    lng: 7.4236,
  },
  {
    name: "Pedreiras",
    lat: -4.5696,
    lng: -44.67,
  },
  {
    name: "Idylwood",
    lat: 38.8896,
    lng: -77.2055,
  },
  {
    name: "Izamal",
    lat: 20.9314,
    lng: -89.0178,
  },
  {
    name: "Melksham",
    lat: 51.371,
    lng: -2.138,
  },
  {
    name: "Yiewsley",
    lat: 51.513,
    lng: -0.471,
  },
  {
    name: "Coquimatlan",
    lat: 19.2038,
    lng: -103.8086,
  },
  {
    name: "Bidston",
    lat: 53.402,
    lng: -3.078,
  },
  {
    name: "Bryn Mawr-Skyway",
    lat: 47.4949,
    lng: -122.2411,
  },
  {
    name: "Seabrook",
    lat: 38.9802,
    lng: -76.8502,
  },
  {
    name: "Yamazaki",
    lat: 34.9028,
    lng: 135.6886,
  },
  {
    name: "East Massapequa",
    lat: 40.6743,
    lng: -73.4358,
  },
  {
    name: "Forfar",
    lat: 56.6442,
    lng: -2.8884,
  },
  {
    name: "Wallisellen",
    lat: 47.4122,
    lng: 8.5922,
  },
  {
    name: "Sao Gabriel da Cachoeira",
    lat: -0.1332,
    lng: -67.0833,
  },
  {
    name: "Brookfield",
    lat: 41.8245,
    lng: -87.847,
  },
  {
    name: "Rutherford",
    lat: 40.8203,
    lng: -74.1057,
  },
  {
    name: "Bebington",
    lat: 53.35,
    lng: -3.003,
  },
  {
    name: "Madera",
    lat: 29.19,
    lng: -108.1414,
  },
  {
    name: "Iselin",
    lat: 40.5702,
    lng: -74.317,
  },
  {
    name: "Tindouf",
    lat: 27.6742,
    lng: -8.1478,
  },
  {
    name: "Kedougou",
    lat: 12.5556,
    lng: -12.1807,
  },
  {
    name: "Burke Centre",
    lat: 38.7903,
    lng: -77.2999,
  },
  {
    name: "Hyattsville",
    lat: 38.9612,
    lng: -76.9548,
  },
  {
    name: "Pendlebury",
    lat: 53.5075,
    lng: -2.3154,
  },
  {
    name: "Dedza",
    lat: -14.3667,
    lng: 34.3333,
  },
  {
    name: "Gornalwood",
    lat: 52.523,
    lng: -2.124,
  },
  {
    name: "Llantrisant",
    lat: 51.5423,
    lng: -3.3785,
  },
  {
    name: "Sing Buri",
    lat: 14.8911,
    lng: 100.4031,
  },
  {
    name: "Hessle",
    lat: 53.7239,
    lng: -0.4319,
  },
  {
    name: "Royston",
    lat: 52.0471,
    lng: -0.0202,
  },
  {
    name: "Prachin Buri",
    lat: 14.0567,
    lng: 101.3739,
  },
  {
    name: "Amblecote",
    lat: 52.46,
    lng: -2.16,
  },
  {
    name: "Saint Budeaux",
    lat: 50.4033,
    lng: -4.1856,
  },
  {
    name: "Plunge",
    lat: 55.9167,
    lng: 21.85,
  },
  {
    name: "Sainte-Marthe-sur-le-Lac",
    lat: 45.53,
    lng: -73.93,
  },
  {
    name: "Tunapuna",
    lat: 10.6333,
    lng: -61.3833,
  },
  {
    name: "Prilly",
    lat: 46.5333,
    lng: 6.6,
  },
  {
    name: "Selby",
    lat: 53.7818,
    lng: -1.0703,
  },
  {
    name: "Orange Walk",
    lat: 18.075,
    lng: -88.5583,
  },
  {
    name: "Torit",
    lat: 4.4167,
    lng: 32.5667,
  },
  {
    name: "Saatli",
    lat: 39.9311,
    lng: 48.3697,
  },
  {
    name: "Stapleford",
    lat: 52.929,
    lng: -1.274,
  },
  {
    name: "Akhaltsikhe",
    lat: 41.6389,
    lng: 42.9861,
  },
  {
    name: "Sa Kaeo",
    lat: 13.8206,
    lng: 102.0589,
  },
  {
    name: "Bourne",
    lat: 52.7684,
    lng: -0.3775,
  },
  {
    name: "Cedar Mill",
    lat: 45.5355,
    lng: -122.8006,
  },
  {
    name: "Piran",
    lat: 45.5271,
    lng: 13.5685,
  },
  {
    name: "Eppelheim",
    lat: 49.4011,
    lng: 8.6297,
  },
  {
    name: "Kretinga",
    lat: 55.8758,
    lng: 21.2508,
  },
  {
    name: "Thonex",
    lat: 46.2,
    lng: 6.2167,
  },
  {
    name: "West Drayton",
    lat: 51.5043,
    lng: -0.4646,
  },
  {
    name: "Perivale",
    lat: 51.5383,
    lng: -0.3192,
  },
  {
    name: "Khasab",
    lat: 26.1833,
    lng: 56.25,
  },
  {
    name: "Guerrero Negro",
    lat: 27.9589,
    lng: -114.0561,
  },
  {
    name: "Merrifield",
    lat: 38.8731,
    lng: -77.2426,
  },
  {
    name: "Kidlington",
    lat: 51.823,
    lng: -1.291,
  },
  {
    name: "Santa Rosalia",
    lat: 27.3389,
    lng: -112.2669,
  },
  {
    name: "Valparaiso",
    lat: 22.7667,
    lng: -103.5667,
  },
  {
    name: "Rosyth",
    lat: 56.0339,
    lng: -3.4323,
  },
  {
    name: "Ban Houayxay",
    lat: 20.2833,
    lng: 100.4167,
  },
  {
    name: "Kukes",
    lat: 42.0758,
    lng: 20.4231,
  },
  {
    name: "Dover",
    lat: 40.8859,
    lng: -74.5597,
  },
  {
    name: "Takoma Park",
    lat: 38.981,
    lng: -77.0028,
  },
  {
    name: "Puerto Ayora",
    lat: -0.7444,
    lng: -90.3139,
  },
  {
    name: "Brierley Hill",
    lat: 52.4795,
    lng: -2.1245,
  },
  {
    name: "Swinton",
    lat: 53.4877,
    lng: -1.3149,
  },
  {
    name: "Little Hulton",
    lat: 53.53,
    lng: -2.418,
  },
  {
    name: "Marlow",
    lat: 51.57,
    lng: -0.78,
  },
  {
    name: "Esquimalt",
    lat: 48.4306,
    lng: -123.4147,
  },
  {
    name: "Greenfield",
    lat: 36.3232,
    lng: -121.2451,
  },
  {
    name: "Glassmanor",
    lat: 38.8181,
    lng: -76.9836,
  },
  {
    name: "Tak",
    lat: 16.8711,
    lng: 99.125,
  },
  {
    name: "Sudley",
    lat: 38.7878,
    lng: -77.4961,
  },
  {
    name: "Phayao",
    lat: 19.1653,
    lng: 99.9036,
  },
  {
    name: "Caerfyrddin",
    lat: 51.856,
    lng: -4.316,
  },
  {
    name: "Deux-Montagnes",
    lat: 45.5333,
    lng: -73.8833,
  },
  {
    name: "Mehtar Lam",
    lat: 34.65,
    lng: 70.1833,
  },
  {
    name: "Villa Union",
    lat: 23.1883,
    lng: -106.2158,
  },
  {
    name: "Chitipa",
    lat: -9.7019,
    lng: 33.27,
  },
  {
    name: "Bostonia",
    lat: 32.8189,
    lng: -116.9479,
  },
  {
    name: "Dumont",
    lat: 40.9452,
    lng: -73.9923,
  },
  {
    name: "Gobabis",
    lat: -22.45,
    lng: 18.9667,
  },
  {
    name: "Manassas Park",
    lat: 38.7719,
    lng: -77.445,
  },
  {
    name: "Rossington",
    lat: 53.4759,
    lng: -1.0613,
  },
  {
    name: "Woodmere",
    lat: 40.6374,
    lng: -73.7219,
  },
  {
    name: "Ojus",
    lat: 25.9563,
    lng: -80.1606,
  },
  {
    name: "Dutse",
    lat: 11.7992,
    lng: 9.3503,
  },
  {
    name: "Stanley",
    lat: 53.7145,
    lng: -1.476,
  },
  {
    name: "Lowton",
    lat: 53.471,
    lng: -2.569,
  },
  {
    name: "South Houston",
    lat: 29.6611,
    lng: -95.2285,
  },
  {
    name: "Ringwood",
    lat: 50.85,
    lng: -1.78,
  },
  {
    name: "Sudbury",
    lat: 51.5537,
    lng: -0.3199,
  },
  {
    name: "Wahiawa",
    lat: 21.5005,
    lng: -158.0198,
  },
  {
    name: "Ilkley",
    lat: 53.925,
    lng: -1.822,
  },
  {
    name: "Guachochi",
    lat: 26.8194,
    lng: -107.07,
  },
  {
    name: "Live Oak",
    lat: 36.986,
    lng: -121.9804,
  },
  {
    name: "Kamuli",
    lat: 0.9472,
    lng: 33.1197,
  },
  {
    name: "Juan Aldama",
    lat: 24.291,
    lng: -103.394,
  },
  {
    name: "Ovenden",
    lat: 53.7432,
    lng: -1.8779,
  },
  {
    name: "Childwall",
    lat: 53.395,
    lng: -2.881,
  },
  {
    name: "Verwood",
    lat: 50.8815,
    lng: -1.8785,
  },
  {
    name: "Balancan",
    lat: 17.8,
    lng: -91.53,
  },
  {
    name: "Whitby",
    lat: 54.4858,
    lng: -0.6206,
  },
  {
    name: "Hetton le Hole",
    lat: 54.8208,
    lng: -1.4488,
  },
  {
    name: "Marsabit",
    lat: 2.3333,
    lng: 37.9833,
  },
  {
    name: "Egg Buckland",
    lat: 50.4006,
    lng: -4.1136,
  },
  {
    name: "Trstenik",
    lat: 43.6186,
    lng: 20.9972,
  },
  {
    name: "Hawick",
    lat: 55.422,
    lng: -2.787,
  },
  {
    name: "Wanstead",
    lat: 51.5778,
    lng: 0.0286,
  },
  {
    name: "Newport Pagnell",
    lat: 52.087,
    lng: -0.722,
  },
  {
    name: "Kingstowne",
    lat: 38.7625,
    lng: -77.1445,
  },
  {
    name: "Brownsville",
    lat: 25.8216,
    lng: -80.2417,
  },
  {
    name: "Tilehurst",
    lat: 51.4579,
    lng: -1.0406,
  },
  {
    name: "Massapequa Park",
    lat: 40.6817,
    lng: -73.4496,
  },
  {
    name: "Country Walk",
    lat: 25.6331,
    lng: -80.4353,
  },
  {
    name: "Ma'rib",
    lat: 15.4228,
    lng: 45.3375,
  },
  {
    name: "Tukums",
    lat: 56.9669,
    lng: 23.1531,
  },
  {
    name: "Lansdale",
    lat: 40.2417,
    lng: -75.2812,
  },
  {
    name: "Makokou",
    lat: 0.5667,
    lng: 12.8667,
  },
  {
    name: "Shenley Church End",
    lat: 52.022,
    lng: -0.788,
  },
  {
    name: "Calkini",
    lat: 20.3667,
    lng: -90.05,
  },
  {
    name: "Pinewood",
    lat: 25.8697,
    lng: -80.2174,
  },
  {
    name: "Vincent",
    lat: 34.0982,
    lng: -117.9238,
  },
  {
    name: "Zaghouan",
    lat: 36.4,
    lng: 10.147,
  },
  {
    name: "Chaddesden",
    lat: 52.9301,
    lng: -1.4383,
  },
  {
    name: "San Ignacio",
    lat: 17.1588,
    lng: -89.0696,
  },
  {
    name: "East Cleveland",
    lat: 41.5318,
    lng: -81.5795,
  },
  {
    name: "Arbon",
    lat: 47.5167,
    lng: 9.4333,
  },
  {
    name: "Smethwick",
    lat: 52.4928,
    lng: -1.9682,
  },
  {
    name: "Coseley",
    lat: 52.55,
    lng: -2.083,
  },
  {
    name: "Brackley",
    lat: 52.032,
    lng: -1.147,
  },
  {
    name: "Tempoal de Sanchez",
    lat: 21.5167,
    lng: -98.3833,
  },
  {
    name: "Salaspils",
    lat: 56.8614,
    lng: 24.35,
  },
  {
    name: "Armthorpe",
    lat: 53.5352,
    lng: -1.0522,
  },
  {
    name: "Astara",
    lat: 38.44,
    lng: 48.875,
  },
  {
    name: "Phrae",
    lat: 18.1436,
    lng: 100.1417,
  },
  {
    name: "Milngavie",
    lat: 55.9421,
    lng: -4.3137,
  },
  {
    name: "Yauco",
    lat: 18.0344,
    lng: -66.8615,
  },
  {
    name: "Zvecan",
    lat: 42.9,
    lng: 20.8333,
  },
  {
    name: "Puerto Carreno",
    lat: 6.1889,
    lng: -67.4858,
  },
  {
    name: "Bodmin",
    lat: 50.466,
    lng: -4.718,
  },
  {
    name: "Ntungamo",
    lat: -0.8794,
    lng: 30.2642,
  },
  {
    name: "Clayton",
    lat: 38.6444,
    lng: -90.3302,
  },
  {
    name: "L'Ancienne-Lorette",
    lat: 46.8,
    lng: -71.35,
  },
  {
    name: "Redruth",
    lat: 50.233,
    lng: -5.224,
  },
  {
    name: "Walsall Wood",
    lat: 52.6277,
    lng: -1.9301,
  },
  {
    name: "East Rancho Dominguez",
    lat: 33.895,
    lng: -118.1956,
  },
  {
    name: "Cuilapa",
    lat: 14.279,
    lng: -90.298,
  },
  {
    name: "Hollinwood",
    lat: 53.5183,
    lng: -2.144,
  },
  {
    name: "Struga",
    lat: 41.1775,
    lng: 20.6789,
  },
  {
    name: "Streetly",
    lat: 52.577,
    lng: -1.884,
  },
  {
    name: "Fraserburgh",
    lat: 57.693,
    lng: -2.005,
  },
  {
    name: "Vicente Guerrero",
    lat: 30.7264,
    lng: -115.9903,
  },
  {
    name: "Pathum Thani",
    lat: 13.9841,
    lng: 100.5512,
  },
  {
    name: "Conisbrough",
    lat: 53.479,
    lng: -1.227,
  },
  {
    name: "Thorpe Saint Andrew",
    lat: 52.6354,
    lng: 1.3431,
  },
  {
    name: "Rakvere",
    lat: 59.3506,
    lng: 26.3611,
  },
  {
    name: "Artesia",
    lat: 33.8676,
    lng: -118.0806,
  },
  {
    name: "Richmond",
    lat: -41.3333,
    lng: 173.1833,
  },
  {
    name: "Blunsdon Saint Andrew",
    lat: 51.61,
    lng: -1.79,
  },
  {
    name: "Herceg Novi",
    lat: 42.4531,
    lng: 18.5375,
  },
  {
    name: "Evington",
    lat: 52.621,
    lng: -1.072,
  },
  {
    name: "Chojnow",
    lat: 51.2667,
    lng: 15.9333,
  },
  {
    name: "Broughty Ferry",
    lat: 56.4672,
    lng: -2.8699,
  },
  {
    name: "Kitui",
    lat: -1.3667,
    lng: 38.0167,
  },
  {
    name: "Milford Haven",
    lat: 51.7142,
    lng: -5.0427,
  },
  {
    name: "San Francisco",
    lat: 13.7,
    lng: -88.1,
  },
  {
    name: "South Orange Village",
    lat: 40.7491,
    lng: -74.2602,
  },
  {
    name: "Bredbury",
    lat: 53.42,
    lng: -2.113,
  },
  {
    name: "New Milford",
    lat: 40.9337,
    lng: -74.0196,
  },
  {
    name: "Hall in Tirol",
    lat: 47.2833,
    lng: 11.5,
  },
  {
    name: "Glenmont",
    lat: 39.0698,
    lng: -77.0467,
  },
  {
    name: "Cherryland",
    lat: 37.6792,
    lng: -122.1038,
  },
  {
    name: "Little Lever",
    lat: 53.563,
    lng: -2.369,
  },
  {
    name: "Moussoro",
    lat: 13.6333,
    lng: 16.4833,
  },
  {
    name: "Hazel Park",
    lat: 42.4619,
    lng: -83.0977,
  },
  {
    name: "Ranong",
    lat: 9.9619,
    lng: 98.6389,
  },
  {
    name: "Hybla Valley",
    lat: 38.7485,
    lng: -77.0822,
  },
  {
    name: "Nakhon Nayok",
    lat: 14.2031,
    lng: 101.215,
  },
  {
    name: "Thatto Heath",
    lat: 53.4352,
    lng: -2.7481,
  },
  {
    name: "Mahikeng",
    lat: -25.8653,
    lng: 25.6442,
  },
  {
    name: "Radovis",
    lat: 41.6381,
    lng: 22.4644,
  },
  {
    name: "Sedgley",
    lat: 52.54,
    lng: -2.123,
  },
  {
    name: "Minehead",
    lat: 51.2038,
    lng: -3.4738,
  },
  {
    name: "Xaignabouli",
    lat: 19.2576,
    lng: 101.7103,
  },
  {
    name: "Roosevelt",
    lat: 40.6797,
    lng: -73.5837,
  },
  {
    name: "Koulamoutou",
    lat: -1.1333,
    lng: 12.4833,
  },
  {
    name: "Villa Hayes",
    lat: -25.09,
    lng: -57.53,
  },
  {
    name: "Wollaston",
    lat: 52.4619,
    lng: -2.1663,
  },
  {
    name: "Backa Topola",
    lat: 45.8089,
    lng: 19.635,
  },
  {
    name: "Broadwater",
    lat: 50.8282,
    lng: -0.3742,
  },
  {
    name: "Aldama",
    lat: 22.9194,
    lng: -98.0736,
  },
  {
    name: "Hillcrest Heights",
    lat: 38.8373,
    lng: -76.9641,
  },
  {
    name: "Mexicaltzingo",
    lat: 19.2092,
    lng: -99.5858,
  },
  {
    name: "Buckingham",
    lat: 51.995,
    lng: -0.986,
  },
  {
    name: "Castle Bromwich",
    lat: 52.505,
    lng: -1.7856,
  },
  {
    name: "Aylestone",
    lat: 52.604,
    lng: -1.154,
  },
  {
    name: "Chard",
    lat: 50.8728,
    lng: -2.9587,
  },
  {
    name: "Spitalfields",
    lat: 51.5166,
    lng: -0.075,
  },
  {
    name: "Four Corners",
    lat: 44.9291,
    lng: -122.9731,
  },
  {
    name: "Walnut Park",
    lat: 33.9683,
    lng: -118.222,
  },
  {
    name: "Bryn",
    lat: 53.499,
    lng: -2.657,
  },
  {
    name: "Causeni",
    lat: 46.6442,
    lng: 29.4139,
  },
  {
    name: "Sutton on Hull",
    lat: 53.7806,
    lng: -0.3047,
  },
  {
    name: "Midsomer Norton",
    lat: 51.2842,
    lng: -2.4817,
  },
  {
    name: "Palmetto Estates",
    lat: 25.6211,
    lng: -80.3616,
  },
  {
    name: "Silute",
    lat: 55.35,
    lng: 21.4833,
  },
  {
    name: "Angel R. Cabada",
    lat: 18.5969,
    lng: -95.4453,
  },
  {
    name: "East San Gabriel",
    lat: 34.1198,
    lng: -118.0807,
  },
  {
    name: "Southwick",
    lat: 50.836,
    lng: -0.239,
  },
  {
    name: "Avocado Heights",
    lat: 34.0381,
    lng: -118.0026,
  },
  {
    name: "Anadyr'",
    lat: 64.7333,
    lng: 177.5167,
  },
  {
    name: "Longbenton",
    lat: 55,
    lng: -1.57,
  },
  {
    name: "Pelsall",
    lat: 52.631,
    lng: -1.972,
  },
  {
    name: "Parkway",
    lat: 38.4993,
    lng: -121.452,
  },
  {
    name: "Maliana",
    lat: -8.9917,
    lng: 125.2197,
  },
  {
    name: "Whakatane",
    lat: -37.964,
    lng: 176.984,
  },
  {
    name: "White Center",
    lat: 47.5086,
    lng: -122.348,
  },
  {
    name: "Candelaria",
    lat: 18.4043,
    lng: -66.2175,
  },
  {
    name: "Ascension",
    lat: 31.0928,
    lng: -107.9964,
  },
  {
    name: "Floral Park",
    lat: 40.7226,
    lng: -73.7029,
  },
  {
    name: "Sukhothai",
    lat: 17.0142,
    lng: 99.8219,
  },
  {
    name: "Altay",
    lat: 46.3728,
    lng: 96.2572,
  },
  {
    name: "Asperg",
    lat: 48.9064,
    lng: 9.1414,
  },
  {
    name: "Thornbury",
    lat: 51.6094,
    lng: -2.5249,
  },
  {
    name: "South River",
    lat: 40.4455,
    lng: -74.3784,
  },
  {
    name: "Peshkopi",
    lat: 41.6831,
    lng: 20.4289,
  },
  {
    name: "Adelphi",
    lat: 39.0017,
    lng: -76.9649,
  },
  {
    name: "Gevgelija",
    lat: 41.1392,
    lng: 22.5025,
  },
  {
    name: "Bellmore",
    lat: 40.6569,
    lng: -73.5285,
  },
  {
    name: "North New Hyde Park",
    lat: 40.746,
    lng: -73.6876,
  },
  {
    name: "Allestree",
    lat: 52.9519,
    lng: -1.4856,
  },
  {
    name: "Lye",
    lat: 52.459,
    lng: -2.116,
  },
  {
    name: "Mosgiel",
    lat: -45.875,
    lng: 170.348,
  },
  {
    name: "Brownhills",
    lat: 52.647,
    lng: -1.933,
  },
  {
    name: "North Arlington",
    lat: 40.7875,
    lng: -74.1273,
  },
  {
    name: "Bull Run",
    lat: 38.7802,
    lng: -77.5204,
  },
  {
    name: "Stranraer",
    lat: 54.902,
    lng: -5.027,
  },
  {
    name: "Stanford",
    lat: 37.4252,
    lng: -122.1674,
  },
  {
    name: "McFarland",
    lat: 35.6781,
    lng: -119.2414,
  },
  {
    name: "Uthai Thani",
    lat: 15.38,
    lng: 100.025,
  },
  {
    name: "Fenton",
    lat: 52.9977,
    lng: -2.1578,
  },
  {
    name: "Ainaro",
    lat: -8.9833,
    lng: 125.5,
  },
  {
    name: "Parlier",
    lat: 36.6087,
    lng: -119.5434,
  },
  {
    name: "Edinet",
    lat: 48.1681,
    lng: 27.305,
  },
  {
    name: "West University Place",
    lat: 29.7157,
    lng: -95.4321,
  },
  {
    name: "Palanga",
    lat: 55.9167,
    lng: 21.0639,
  },
  {
    name: "Knutsford",
    lat: 53.3025,
    lng: -2.3708,
  },
  {
    name: "Chepstow",
    lat: 51.642,
    lng: -2.675,
  },
  {
    name: "Kiboga",
    lat: 0.9161,
    lng: 31.7742,
  },
  {
    name: "Eggertsville",
    lat: 42.9665,
    lng: -78.8065,
  },
  {
    name: "Chilwell",
    lat: 52.916,
    lng: -1.235,
  },
  {
    name: "Corsham",
    lat: 51.43,
    lng: -2.19,
  },
  {
    name: "East Riverdale",
    lat: 38.96,
    lng: -76.9108,
  },
  {
    name: "Schwyz",
    lat: 47.0205,
    lng: 8.6583,
  },
  {
    name: "Sonoita",
    lat: 31.8614,
    lng: -112.8544,
  },
  {
    name: "Kurdamir",
    lat: 40.3383,
    lng: 48.1608,
  },
  {
    name: "La Palma",
    lat: 33.8504,
    lng: -118.0406,
  },
  {
    name: "La Tour-de-Peilz",
    lat: 46.45,
    lng: 6.8667,
  },
  {
    name: "Pacific Grove",
    lat: 36.6192,
    lng: -121.9255,
  },
  {
    name: "Asbury Park",
    lat: 40.2226,
    lng: -74.0119,
  },
  {
    name: "Cesis",
    lat: 57.3131,
    lng: 25.2747,
  },
  {
    name: "Goygol",
    lat: 40.5905,
    lng: 46.3239,
  },
  {
    name: "Hamworthy",
    lat: 50.7207,
    lng: -2.0109,
  },
  {
    name: "Berkley",
    lat: 42.4986,
    lng: -83.1853,
  },
  {
    name: "Anenecuilco",
    lat: 18.7781,
    lng: -98.9861,
  },
  {
    name: "Westbury",
    lat: 40.7599,
    lng: -73.5891,
  },
  {
    name: "Manga",
    lat: 11.6667,
    lng: -1.0667,
  },
  {
    name: "La Grange",
    lat: 41.8072,
    lng: -87.8741,
  },
  {
    name: "Devizes",
    lat: 51.353,
    lng: -1.994,
  },
  {
    name: "Bartica",
    lat: 6.4,
    lng: -58.6167,
  },
  {
    name: "Radviliskis",
    lat: 55.8,
    lng: 23.55,
  },
  {
    name: "Wilkinsburg",
    lat: 40.4442,
    lng: -79.8733,
  },
  {
    name: "El Fuerte",
    lat: 26.4214,
    lng: -108.62,
  },
  {
    name: "Zubin Potok",
    lat: 42.9167,
    lng: 20.6833,
  },
  {
    name: "Isla Mujeres",
    lat: 21.2084,
    lng: -86.7115,
  },
  {
    name: "La Magdalena Chichicaspa",
    lat: 19.4181,
    lng: -99.3228,
  },
  {
    name: "Campbelltown",
    lat: -34.0733,
    lng: 150.8261,
  },
  {
    name: "Liestal",
    lat: 47.4839,
    lng: 7.735,
  },
  {
    name: "Chene-Bougeries",
    lat: 46.1833,
    lng: 6.1833,
  },
  {
    name: "Wordsley",
    lat: 52.483,
    lng: -2.15,
  },
  {
    name: "Snaresbrook",
    lat: 51.587,
    lng: 0.0146,
  },
  {
    name: "Santa Maria Huazolotitlan",
    lat: 16.3014,
    lng: -97.9125,
  },
  {
    name: "Paro",
    lat: 27.4333,
    lng: 89.4167,
  },
  {
    name: "Broughton Astley",
    lat: 52.5278,
    lng: -1.2275,
  },
  {
    name: "Seaford",
    lat: 40.6678,
    lng: -73.4922,
  },
  {
    name: "Ecublens",
    lat: 46.5276,
    lng: 6.5605,
  },
  {
    name: "Phongsali",
    lat: 21.6836,
    lng: 102.1053,
  },
  {
    name: "Lambeth",
    lat: 51.4903,
    lng: -0.1193,
  },
  {
    name: "Cuencame de Ceniceros",
    lat: 24.8667,
    lng: -103.7,
  },
  {
    name: "Quthing",
    lat: -30.4001,
    lng: 27.7002,
  },
  {
    name: "West Park",
    lat: 25.984,
    lng: -80.1923,
  },
  {
    name: "Wallingford",
    lat: 51.599,
    lng: -1.125,
  },
  {
    name: "Timperley",
    lat: 53.387,
    lng: -2.328,
  },
  {
    name: "Parkstone",
    lat: 50.71,
    lng: -1.95,
  },
  {
    name: "San Isidro Buen Suceso",
    lat: 19.1528,
    lng: -98.1069,
  },
  {
    name: "Sandridge",
    lat: 51.7808,
    lng: -0.3038,
  },
  {
    name: "Gwanda",
    lat: -20.945,
    lng: 29.025,
  },
  {
    name: "Olton",
    lat: 52.4377,
    lng: -1.8058,
  },
  {
    name: "Masalli",
    lat: 39.0183,
    lng: 48.6669,
  },
  {
    name: "Kenmore",
    lat: 42.9646,
    lng: -78.8713,
  },
  {
    name: "Fayroz Koh",
    lat: 34.5225,
    lng: 65.2517,
  },
  {
    name: "Leopold",
    lat: -38.1892,
    lng: 144.4644,
  },
  {
    name: "Baucau",
    lat: -8.4667,
    lng: 126.45,
  },
  {
    name: "Saucillo",
    lat: 28.0333,
    lng: -105.2833,
  },
  {
    name: "Jose Maria Morelos",
    lat: 19.75,
    lng: -88.7,
  },
  {
    name: "South Farmingdale",
    lat: 40.7175,
    lng: -73.4471,
  },
  {
    name: "Woolton",
    lat: 53.374,
    lng: -2.865,
  },
  {
    name: "Fords",
    lat: 40.5415,
    lng: -74.3124,
  },
  {
    name: "Le Grand-Saconnex",
    lat: 46.2333,
    lng: 6.1167,
  },
  {
    name: "Newport",
    lat: 39.0855,
    lng: -84.4868,
  },
  {
    name: "Killamarsh",
    lat: 53.3205,
    lng: -1.3116,
  },
  {
    name: "Prescot",
    lat: 53.422,
    lng: -2.814,
  },
  {
    name: "Huntington",
    lat: 53.9926,
    lng: -1.043,
  },
  {
    name: "Dzitbalche",
    lat: 20.3167,
    lng: -90.05,
  },
  {
    name: "Caldicot",
    lat: 51.591,
    lng: -2.7492,
  },
  {
    name: "Tadjourah",
    lat: 11.7833,
    lng: 42.8833,
  },
  {
    name: "Abergavenny",
    lat: 51.824,
    lng: -3.0167,
  },
  {
    name: "Eisenstadt",
    lat: 47.8456,
    lng: 16.5189,
  },
  {
    name: "Rorschach",
    lat: 47.4786,
    lng: 9.4936,
  },
  {
    name: "Lykovrysi",
    lat: 38.0667,
    lng: 23.7833,
  },
  {
    name: "Ondorhaan",
    lat: 47.3167,
    lng: 110.65,
  },
  {
    name: "Sironko",
    lat: 1.2294,
    lng: 34.2481,
  },
  {
    name: "Debar",
    lat: 41.525,
    lng: 20.5272,
  },
  {
    name: "Ewa Beach",
    lat: 21.3181,
    lng: -158.0073,
  },
  {
    name: "Hwlffordd",
    lat: 51.8,
    lng: -4.97,
  },
  {
    name: "Pierre",
    lat: 44.3748,
    lng: -100.3205,
  },
  {
    name: "Abertillery",
    lat: 51.73,
    lng: -3.13,
  },
  {
    name: "Hoyland Nether",
    lat: 53.4985,
    lng: -1.4406,
  },
  {
    name: "New Cassel",
    lat: 40.76,
    lng: -73.5649,
  },
  {
    name: "Halawa",
    lat: 21.3753,
    lng: -157.9185,
  },
  {
    name: "Bargoed",
    lat: 51.69,
    lng: -3.24,
  },
  {
    name: "Falls Church",
    lat: 38.8847,
    lng: -77.1751,
  },
  {
    name: "Franklin Park",
    lat: 40.4439,
    lng: -74.5432,
  },
  {
    name: "Cayey",
    lat: 18.115,
    lng: -66.163,
  },
  {
    name: "Luganville",
    lat: -15.5126,
    lng: 167.1766,
  },
  {
    name: "Kriva Palanka",
    lat: 42.2017,
    lng: 22.3317,
  },
  {
    name: "Forecariah",
    lat: 9.43,
    lng: -13.098,
  },
  {
    name: "Jaltenango",
    lat: 15.8725,
    lng: -92.725,
  },
  {
    name: "Pincourt",
    lat: 45.3833,
    lng: -73.9833,
  },
  {
    name: "Tierra Colorada",
    lat: 17.1656,
    lng: -99.5264,
  },
  {
    name: "North Fair Oaks",
    lat: 37.4754,
    lng: -122.2035,
  },
  {
    name: "Basse Santa Su",
    lat: 13.31,
    lng: -14.223,
  },
  {
    name: "Ar Rommani",
    lat: 33.5333,
    lng: -6.6,
  },
  {
    name: "Baruun-Urt",
    lat: 46.6806,
    lng: 113.2792,
  },
  {
    name: "Villa Union",
    lat: 23.9667,
    lng: -104.0333,
  },
  {
    name: "Olympia Heights",
    lat: 25.7241,
    lng: -80.339,
  },
  {
    name: "Haddon",
    lat: 39.9063,
    lng: -75.0625,
  },
  {
    name: "Carnoustie",
    lat: 56.5005,
    lng: -2.7147,
  },
  {
    name: "Port Antonio",
    lat: 18.1667,
    lng: -76.45,
  },
  {
    name: "Rayon",
    lat: 19.1481,
    lng: -99.58,
  },
  {
    name: "Gabu",
    lat: 12.2833,
    lng: -14.2167,
  },
  {
    name: "Ashby de la Zouch",
    lat: 52.746,
    lng: -1.476,
  },
  {
    name: "Tonyrefail",
    lat: 51.584,
    lng: -3.4306,
  },
  {
    name: "Wath upon Dearne",
    lat: 53.5022,
    lng: -1.3402,
  },
  {
    name: "Alsager",
    lat: 53.0961,
    lng: -2.3048,
  },
  {
    name: "Birsfelden",
    lat: 47.5531,
    lng: 7.6231,
  },
  {
    name: "Bacalar",
    lat: 18.6769,
    lng: -88.3953,
  },
  {
    name: "Muna",
    lat: 20.48,
    lng: -89.72,
  },
  {
    name: "Hambantota",
    lat: 6.1241,
    lng: 81.1185,
  },
  {
    name: "Weehawken",
    lat: 40.7676,
    lng: -74.0167,
  },
  {
    name: "Haydock",
    lat: 53.4678,
    lng: -2.6609,
  },
  {
    name: "Neftcala",
    lat: 39.3791,
    lng: 49.2486,
  },
  {
    name: "Cudworth",
    lat: 53.5784,
    lng: -1.4149,
  },
  {
    name: "Zefyri",
    lat: 38.0667,
    lng: 23.7167,
  },
  {
    name: "Qusar",
    lat: 41.4219,
    lng: 48.4214,
  },
  {
    name: "Villars-sur-Glane",
    lat: 46.7833,
    lng: 7.1167,
  },
  {
    name: "Brislington",
    lat: 51.4316,
    lng: -2.5439,
  },
  {
    name: "Shoeburyness",
    lat: 51.5316,
    lng: 0.7978,
  },
  {
    name: "Coalcoman de Vazquez Pallares",
    lat: 18.7771,
    lng: -103.1596,
  },
  {
    name: "Nuevo Progreso",
    lat: 26.0561,
    lng: -97.9522,
  },
  {
    name: "Cowley",
    lat: 51.528,
    lng: -0.481,
  },
  {
    name: "Yehud",
    lat: 32.0333,
    lng: 34.8833,
  },
  {
    name: "Fairview",
    lat: 40.8182,
    lng: -74.0022,
  },
  {
    name: "Halstead",
    lat: 51.9451,
    lng: 0.6411,
  },
  {
    name: "Hawaiian Gardens",
    lat: 33.8303,
    lng: -118.0728,
  },
  {
    name: "Norridge",
    lat: 41.9637,
    lng: -87.8231,
  },
  {
    name: "Wealdstone",
    lat: 51.5957,
    lng: -0.3352,
  },
  {
    name: "Gillingham",
    lat: 51.0375,
    lng: -2.2748,
  },
  {
    name: "Oakham",
    lat: 52.6705,
    lng: -0.7333,
  },
  {
    name: "Hatch End",
    lat: 51.601,
    lng: -0.3743,
  },
  {
    name: "Lemington",
    lat: 54.972,
    lng: -1.723,
  },
  {
    name: "Street",
    lat: 51.1235,
    lng: -2.7381,
  },
  {
    name: "Cowes",
    lat: 50.7595,
    lng: -1.3002,
  },
  {
    name: "Willowick",
    lat: 41.6343,
    lng: -81.468,
  },
  {
    name: "Lemon Hill",
    lat: 38.5172,
    lng: -121.4573,
  },
  {
    name: "Sjenica",
    lat: 43.2667,
    lng: 20,
  },
  {
    name: "Raynes Park",
    lat: 51.4033,
    lng: -0.2321,
  },
  {
    name: "Burslem",
    lat: 53.0426,
    lng: -2.1879,
  },
  {
    name: "Ocean Pointe",
    lat: 21.3145,
    lng: -158.0289,
  },
  {
    name: "Chinsali",
    lat: -10.5496,
    lng: 32.06,
  },
  {
    name: "Ryhope",
    lat: 54.8679,
    lng: -1.3698,
  },
  {
    name: "Chichihualco",
    lat: 17.655,
    lng: -99.674,
  },
  {
    name: "Bishops Cleeve",
    lat: 51.947,
    lng: -2.061,
  },
  {
    name: "Helston",
    lat: 50.1,
    lng: -5.27,
  },
  {
    name: "Cetinje",
    lat: 42.3933,
    lng: 18.9219,
  },
  {
    name: "Kisoro",
    lat: -1.3539,
    lng: 29.6983,
  },
  {
    name: "Nacaome",
    lat: 13.5333,
    lng: -87.4833,
  },
  {
    name: "Kuressaare",
    lat: 58.2533,
    lng: 22.4861,
  },
  {
    name: "Altamirano",
    lat: 16.7361,
    lng: -92.0389,
  },
  {
    name: "Royston",
    lat: 53.61,
    lng: -1.45,
  },
  {
    name: "Lerma",
    lat: 19.8,
    lng: -90.6,
  },
  {
    name: "Chicago Ridge",
    lat: 41.7034,
    lng: -87.7795,
  },
  {
    name: "Kippax",
    lat: 53.7669,
    lng: -1.3705,
  },
  {
    name: "Bishopstoke",
    lat: 50.9679,
    lng: -1.3278,
  },
  {
    name: "Canatlan",
    lat: 24.52,
    lng: -104.78,
  },
  {
    name: "Nova Gorica",
    lat: 45.9667,
    lng: 13.65,
  },
  {
    name: "Collingswood",
    lat: 39.916,
    lng: -75.0759,
  },
  {
    name: "Kinkala",
    lat: -4.35,
    lng: 14.76,
  },
  {
    name: "Concord",
    lat: -33.8444,
    lng: 151.0903,
  },
  {
    name: "Negele",
    lat: 5.3166,
    lng: 39.5833,
  },
  {
    name: "Risca",
    lat: 51.608,
    lng: -3.091,
  },
  {
    name: "Kemp Mill",
    lat: 39.0412,
    lng: -77.0215,
  },
  {
    name: "Glascote",
    lat: 52.6245,
    lng: -1.668,
  },
  {
    name: "Cheam",
    lat: 51.36,
    lng: -0.21,
  },
  {
    name: "Plav",
    lat: 42.5956,
    lng: 19.945,
  },
  {
    name: "Saint Ann's Bay",
    lat: 18.435,
    lng: -77.2017,
  },
  {
    name: "Sveti Nikole",
    lat: 41.865,
    lng: 21.9425,
  },
  {
    name: "Whitefish Bay",
    lat: 43.1132,
    lng: -87.9004,
  },
  {
    name: "Bexley",
    lat: 39.965,
    lng: -82.9343,
  },
  {
    name: "San Patricio",
    lat: 19.2,
    lng: -104.6833,
  },
  {
    name: "Harper Woods",
    lat: 42.439,
    lng: -82.9292,
  },
  {
    name: "Las Veredas",
    lat: 23.15,
    lng: -109.7,
  },
  {
    name: "Gonzalez",
    lat: 22.8281,
    lng: -98.4306,
  },
  {
    name: "Naifaru",
    lat: 5.4442,
    lng: 73.3662,
  },
  {
    name: "Highland Park",
    lat: 40.5006,
    lng: -74.4283,
  },
  {
    name: "Tovuz",
    lat: 40.9864,
    lng: 45.6275,
  },
  {
    name: "Forest Park",
    lat: 41.8683,
    lng: -87.8157,
  },
  {
    name: "Ang Thong",
    lat: 14.5925,
    lng: 100.4572,
  },
  {
    name: "Henley on Thames",
    lat: 51.536,
    lng: -0.898,
  },
  {
    name: "Weiz",
    lat: 47.2189,
    lng: 15.6253,
  },
  {
    name: "Shterpce",
    lat: 42.2333,
    lng: 21.0167,
  },
  {
    name: "Aberaman",
    lat: 51.7,
    lng: -3.4333,
  },
  {
    name: "Torpoint",
    lat: 50.376,
    lng: -4.205,
  },
  {
    name: "Hirnyk",
    lat: 48.05,
    lng: 37.3667,
  },
  {
    name: "Roselle Park",
    lat: 40.6653,
    lng: -74.2666,
  },
  {
    name: "San Luis de La Loma",
    lat: 17.2714,
    lng: -100.8911,
  },
  {
    name: "Santa Ana",
    lat: 9.932,
    lng: -84.176,
  },
  {
    name: "Akil",
    lat: 20.2656,
    lng: -89.3478,
  },
  {
    name: "Tavistock",
    lat: 50.545,
    lng: -4.15,
  },
  {
    name: "Cupar",
    lat: 56.32,
    lng: -3.01,
  },
  {
    name: "Marton",
    lat: 54.5406,
    lng: -1.2124,
  },
  {
    name: "San Carlos",
    lat: 11.2,
    lng: -84.8333,
  },
  {
    name: "Stanwell",
    lat: 51.457,
    lng: -0.4715,
  },
  {
    name: "Ciudad Cuauhtemoc",
    lat: 22.1842,
    lng: -97.8325,
  },
  {
    name: "Grover Beach",
    lat: 35.1204,
    lng: -120.6199,
  },
  {
    name: "Brierfield",
    lat: 53.824,
    lng: -2.235,
  },
  {
    name: "Chatteris",
    lat: 52.456,
    lng: 0.055,
  },
  {
    name: "Princeton Meadows",
    lat: 40.3332,
    lng: -74.5628,
  },
  {
    name: "Ifield",
    lat: 51.1234,
    lng: -0.2073,
  },
  {
    name: "Buckhurst Hill",
    lat: 51.632,
    lng: 0.036,
  },
  {
    name: "Newport",
    lat: 52.7691,
    lng: -2.3787,
  },
  {
    name: "Nuevo Ideal",
    lat: 24.8875,
    lng: -105.0728,
  },
  {
    name: "Faya",
    lat: 17.93,
    lng: 19.1031,
  },
  {
    name: "Eaton Socon",
    lat: 52.22,
    lng: -0.29,
  },
  {
    name: "Negotino",
    lat: 41.4839,
    lng: 22.0892,
  },
  {
    name: "Waimalu",
    lat: 21.3913,
    lng: -157.9345,
  },
  {
    name: "Horsell",
    lat: 51.3286,
    lng: -0.5617,
  },
  {
    name: "Whitchurch",
    lat: 52.969,
    lng: -2.682,
  },
  {
    name: "Platon Sanchez",
    lat: 21.2833,
    lng: -98.3667,
  },
  {
    name: "Edgewater",
    lat: 40.8237,
    lng: -73.974,
  },
  {
    name: "Santa Barbara",
    lat: 26.8133,
    lng: -105.8203,
  },
  {
    name: "Corinda",
    lat: -27.4833,
    lng: 153.1,
  },
  {
    name: "Kumi",
    lat: 1.4608,
    lng: 33.9361,
  },
  {
    name: "Stocksbridge",
    lat: 53.478,
    lng: -1.588,
  },
  {
    name: "Gladeview",
    lat: 25.8395,
    lng: -80.2368,
  },
  {
    name: "Kilsyth",
    lat: 55.98,
    lng: -4.06,
  },
  {
    name: "Villa de Etla",
    lat: 17.2062,
    lng: -96.7989,
  },
  {
    name: "Drochia",
    lat: 48.0308,
    lng: 27.8126,
  },
  {
    name: "Tlacotalpan",
    lat: 18.6167,
    lng: -95.6667,
  },
  {
    name: "Delemont",
    lat: 47.3653,
    lng: 7.3472,
  },
  {
    name: "Mannedorf",
    lat: 47.2553,
    lng: 8.6917,
  },
  {
    name: "Nieuw Nickerie",
    lat: 5.9261,
    lng: -56.9731,
  },
  {
    name: "Mwanza",
    lat: -15.6167,
    lng: 34.5167,
  },
  {
    name: "Barnoldswick",
    lat: 53.9147,
    lng: -2.1895,
  },
  {
    name: "Tixkokob",
    lat: 21.0022,
    lng: -89.3936,
  },
  {
    name: "Santa Ana",
    lat: 30.5406,
    lng: -111.1205,
  },
  {
    name: "Magugpo Poblacion",
    lat: 7.3821,
    lng: 125.8017,
  },
  {
    name: "Acanceh",
    lat: 20.8133,
    lng: -89.4524,
  },
  {
    name: "La Grange Park",
    lat: 41.8308,
    lng: -87.8723,
  },
  {
    name: "Goldenrod",
    lat: 28.6114,
    lng: -81.2916,
  },
  {
    name: "Shorewood",
    lat: 43.0914,
    lng: -87.8864,
  },
  {
    name: "Flixton",
    lat: 53.447,
    lng: -2.391,
  },
  {
    name: "Huntington",
    lat: 38.7916,
    lng: -77.074,
  },
  {
    name: "Bocas del Toro",
    lat: 9.3333,
    lng: -82.25,
  },
  {
    name: "Ormoz",
    lat: 46.4071,
    lng: 16.1505,
  },
  {
    name: "Tetela del Volcan",
    lat: 18.8931,
    lng: -98.7297,
  },
  {
    name: "Steinbach am Taunus",
    lat: 50.1678,
    lng: 8.5719,
  },
  {
    name: "Ardmore",
    lat: 40.0033,
    lng: -75.2947,
  },
  {
    name: "Handsworth",
    lat: 53.37,
    lng: -1.4,
  },
  {
    name: "Coatesville",
    lat: 39.9849,
    lng: -75.8199,
  },
  {
    name: "Kibuye",
    lat: -2.0594,
    lng: 29.3481,
  },
  {
    name: "Pajacuaran",
    lat: 20.1178,
    lng: -102.5667,
  },
  {
    name: "Hellesdon",
    lat: 52.6485,
    lng: 1.2509,
  },
  {
    name: "Shepton Mallet",
    lat: 51.193,
    lng: -2.546,
  },
  {
    name: "Menongue",
    lat: -14.6666,
    lng: 17.7,
  },
  {
    name: "Mariental",
    lat: -24.6333,
    lng: 17.9667,
  },
  {
    name: "La Huacana",
    lat: 18.9625,
    lng: -101.8069,
  },
  {
    name: "Inverurie",
    lat: 57.28,
    lng: -2.38,
  },
  {
    name: "Steinkjer",
    lat: 64.0147,
    lng: 11.4942,
  },
  {
    name: "Stone Ridge",
    lat: 38.9295,
    lng: -77.5553,
  },
  {
    name: "Novo Airao",
    lat: -2.6208,
    lng: -60.9438,
  },
  {
    name: "Rio Grande",
    lat: 18.3789,
    lng: -65.8388,
  },
  {
    name: "New Carrollton",
    lat: 38.9654,
    lng: -76.8773,
  },
  {
    name: "San Ignacio Cohuirimpo",
    lat: 27.05,
    lng: -109.4167,
  },
  {
    name: "Valga",
    lat: 57.7769,
    lng: 26.0311,
  },
  {
    name: "Ialoveni",
    lat: 46.9431,
    lng: 28.7778,
  },
  {
    name: "Ridgefield Park",
    lat: 40.8543,
    lng: -74.0201,
  },
  {
    name: "Manati",
    lat: 18.4283,
    lng: -66.4823,
  },
  {
    name: "Obo",
    lat: 5.4,
    lng: 26.5,
  },
  {
    name: "Daru",
    lat: -9.0833,
    lng: 143.2,
  },
  {
    name: "Lamphun",
    lat: 18.5803,
    lng: 99.0072,
  },
  {
    name: "Cuatro Cienegas de Carranza",
    lat: 26.9861,
    lng: -102.0664,
  },
  {
    name: "Ziniare",
    lat: 12.577,
    lng: -1.293,
  },
  {
    name: "Key Biscayne",
    lat: 25.6908,
    lng: -80.1653,
  },
  {
    name: "Federal Heights",
    lat: 39.8651,
    lng: -105.0154,
  },
  {
    name: "Cornelius",
    lat: 45.519,
    lng: -123.0514,
  },
  {
    name: "Kingston",
    lat: 41.2652,
    lng: -75.8875,
  },
  {
    name: "Tacotalpa",
    lat: 17.5931,
    lng: -92.8258,
  },
  {
    name: "University Heights",
    lat: 41.4948,
    lng: -81.5348,
  },
  {
    name: "Candelaria",
    lat: 18.1844,
    lng: -91.0461,
  },
  {
    name: "Chai Nat",
    lat: 15.1872,
    lng: 100.1283,
  },
  {
    name: "Rokiskis",
    lat: 55.9616,
    lng: 25.5807,
  },
  {
    name: "Wilton Manors",
    lat: 26.1593,
    lng: -80.1395,
  },
  {
    name: "Valadares",
    lat: 41.0997,
    lng: -8.6403,
  },
  {
    name: "At Tur",
    lat: 28.2333,
    lng: 33.6167,
  },
  {
    name: "Blackwood",
    lat: 51.67,
    lng: -3.19,
  },
  {
    name: "Voru",
    lat: 57.8486,
    lng: 26.9928,
  },
  {
    name: "Exhall",
    lat: 52.47,
    lng: -1.48,
  },
  {
    name: "Tartar",
    lat: 40.3353,
    lng: 46.9303,
  },
  {
    name: "Clarkston",
    lat: 33.8117,
    lng: -84.2404,
  },
  {
    name: "Glarus",
    lat: 47.0331,
    lng: 9.0664,
  },
  {
    name: "Caernarfon",
    lat: 53.14,
    lng: -4.27,
  },
  {
    name: "Shildon",
    lat: 54.63,
    lng: -1.65,
  },
  {
    name: "Tlahualilo de Zaragoza",
    lat: 26.1167,
    lng: -103.45,
  },
  {
    name: "Druskininkai",
    lat: 54.0206,
    lng: 23.9725,
  },
  {
    name: "Kralendijk",
    lat: 12.1508,
    lng: -68.2767,
  },
  {
    name: "Cherry Creek",
    lat: 39.6094,
    lng: -104.8645,
  },
  {
    name: "Hincesti",
    lat: 46.8258,
    lng: 28.5936,
  },
  {
    name: "Nairn",
    lat: 57.586,
    lng: -3.869,
  },
  {
    name: "Ermoupoli",
    lat: 37.4504,
    lng: 24.9333,
  },
  {
    name: "Lantana",
    lat: 26.5834,
    lng: -80.0564,
  },
  {
    name: "Sugarland Run",
    lat: 39.0309,
    lng: -77.3762,
  },
  {
    name: "Ahuacatlan",
    lat: 21.0536,
    lng: -104.4869,
  },
  {
    name: "Roby",
    lat: 53.413,
    lng: -2.852,
  },
  {
    name: "Ntcheu",
    lat: -14.8167,
    lng: 34.6333,
  },
  {
    name: "Singerei",
    lat: 47.6406,
    lng: 28.1419,
  },
  {
    name: "Pelham",
    lat: 40.9,
    lng: -73.8064,
  },
  {
    name: "Nueva Palmira",
    lat: -33.87,
    lng: -58.408,
  },
  {
    name: "Broadstone",
    lat: 50.7605,
    lng: -1.995,
  },
  {
    name: "Murska Sobota",
    lat: 46.6586,
    lng: 16.1619,
  },
  {
    name: "Bradford-on-Avon",
    lat: 51.347,
    lng: -2.251,
  },
  {
    name: "Worsley",
    lat: 53.5093,
    lng: -2.3845,
  },
  {
    name: "Chapeltown",
    lat: 53.462,
    lng: -1.466,
  },
  {
    name: "Ciudad Tula",
    lat: 23,
    lng: -99.72,
  },
  {
    name: "Bulgan",
    lat: 48.8103,
    lng: 103.5408,
  },
  {
    name: "Mariehamn",
    lat: 60.0986,
    lng: 19.9444,
  },
  {
    name: "Taraclia",
    lat: 45.9,
    lng: 28.6689,
  },
  {
    name: "Warfield",
    lat: 51.442,
    lng: -0.737,
  },
  {
    name: "Zamora",
    lat: -4.0692,
    lng: -78.9567,
  },
  {
    name: "Utley",
    lat: 53.88,
    lng: -1.91,
  },
  {
    name: "Larbert",
    lat: 56.0229,
    lng: -3.826,
  },
  {
    name: "Beylaqan",
    lat: 39.7692,
    lng: 47.6156,
  },
  {
    name: "Patchogue",
    lat: 40.7621,
    lng: -73.0185,
  },
  {
    name: "Allington",
    lat: 51.2903,
    lng: 0.5019,
  },
  {
    name: "Heybridge",
    lat: 51.7417,
    lng: 0.6897,
  },
  {
    name: "Sinop",
    lat: -11.85,
    lng: -55.46,
  },
  {
    name: "North Merrick",
    lat: 40.6871,
    lng: -73.5615,
  },
  {
    name: "Qalat",
    lat: 32.1061,
    lng: 66.9069,
  },
  {
    name: "Chuy",
    lat: -33.6833,
    lng: -53.45,
  },
  {
    name: "Batken",
    lat: 40.0625,
    lng: 70.8194,
  },
  {
    name: "Ayapango",
    lat: 19.1264,
    lng: -98.8028,
  },
  {
    name: "Porto Nacional",
    lat: -10.7,
    lng: -48.4199,
  },
  {
    name: "Falesti",
    lat: 47.5736,
    lng: 27.7092,
  },
  {
    name: "Xicotencatl",
    lat: 22.9958,
    lng: -98.9447,
  },
  {
    name: "Westwood Lakes",
    lat: 25.7237,
    lng: -80.3717,
  },
  {
    name: "Assomada",
    lat: 15.0949,
    lng: -23.6654,
  },
  {
    name: "Tottington",
    lat: 53.613,
    lng: -2.339,
  },
  {
    name: "Minnehaha",
    lat: 45.6577,
    lng: -122.6204,
  },
  {
    name: "Floresti",
    lat: 47.8933,
    lng: 28.3014,
  },
  {
    name: "Emeryville",
    lat: 37.8382,
    lng: -122.2932,
  },
  {
    name: "Cimislia",
    lat: 46.52,
    lng: 28.7842,
  },
  {
    name: "Choix",
    lat: 26.7061,
    lng: -108.3219,
  },
  {
    name: "Dinnington",
    lat: 53.3667,
    lng: -1.2,
  },
  {
    name: "Tzucacab",
    lat: 20.0708,
    lng: -89.0506,
  },
  {
    name: "Anahuac",
    lat: 28.48,
    lng: -106.7442,
  },
  {
    name: "Barwell",
    lat: 52.5682,
    lng: -1.3462,
  },
  {
    name: "Tekit",
    lat: 20.5322,
    lng: -89.3314,
  },
  {
    name: "Mpigi",
    lat: 0.225,
    lng: 32.3136,
  },
  {
    name: "Greenhill",
    lat: 51.36,
    lng: 1.103,
  },
  {
    name: "Robertsport",
    lat: 6.7533,
    lng: -11.3686,
  },
  {
    name: "Dundo",
    lat: -7.38,
    lng: 20.83,
  },
  {
    name: "Hasbrouck Heights",
    lat: 40.8618,
    lng: -74.0741,
  },
  {
    name: "Clayton le Moors",
    lat: 53.775,
    lng: -2.384,
  },
  {
    name: "Dowlais",
    lat: 51.7585,
    lng: -3.3416,
  },
  {
    name: "Red Bank",
    lat: 40.3481,
    lng: -74.0672,
  },
  {
    name: "Oak Hills",
    lat: 45.5403,
    lng: -122.8413,
  },
  {
    name: "Saint Peters",
    lat: 51.3651,
    lng: 1.4191,
  },
  {
    name: "Amatlan de los Reyes",
    lat: 18.8457,
    lng: -96.9149,
  },
  {
    name: "Lydney",
    lat: 51.7286,
    lng: -2.5285,
  },
  {
    name: "South Miami",
    lat: 25.7079,
    lng: -80.2952,
  },
  {
    name: "Llantwit Major",
    lat: 51.4062,
    lng: -3.475,
  },
  {
    name: "Sezana",
    lat: 45.7,
    lng: 13.85,
  },
  {
    name: "Rosario",
    lat: -34.3139,
    lng: -57.3525,
  },
  {
    name: "Gedling",
    lat: 52.975,
    lng: -1.081,
  },
  {
    name: "Da Nang",
    lat: 16.0748,
    lng: 108.224,
  },
  {
    name: "San Jose el Viejo",
    lat: 23.1226,
    lng: -109.712,
  },
  {
    name: "Rosario",
    lat: -2.94,
    lng: -44.26,
  },
  {
    name: "Sigulda",
    lat: 57.1539,
    lng: 24.8544,
  },
  {
    name: "Catarman",
    lat: 12.4989,
    lng: 124.6377,
  },
  {
    name: "Kirkwall",
    lat: 58.981,
    lng: -2.96,
  },
  {
    name: "Clawson",
    lat: 42.5367,
    lng: -83.1504,
  },
  {
    name: "Ferney-Voltaire",
    lat: 46.2558,
    lng: 6.1081,
  },
  {
    name: "North Wantagh",
    lat: 40.6983,
    lng: -73.5086,
  },
  {
    name: "Berane",
    lat: 42.8473,
    lng: 19.8694,
  },
  {
    name: "Alum Rock",
    lat: 37.3695,
    lng: -121.8241,
  },
  {
    name: "Launceston",
    lat: 50.635,
    lng: -4.354,
  },
  {
    name: "Kuldiga",
    lat: 56.9672,
    lng: 21.97,
  },
  {
    name: "Newman",
    lat: 37.3157,
    lng: -121.0211,
  },
  {
    name: "Birtley",
    lat: 54.9,
    lng: -1.577,
  },
  {
    name: "Tiptree",
    lat: 51.81,
    lng: 0.75,
  },
  {
    name: "Ndele",
    lat: 8.4091,
    lng: 20.653,
  },
  {
    name: "Woodbridge",
    lat: 52.094,
    lng: 1.318,
  },
  {
    name: "Fort Liberte",
    lat: 19.6656,
    lng: -71.8448,
  },
  {
    name: "Salisbury",
    lat: 40.7454,
    lng: -73.5604,
  },
  {
    name: "Boxley",
    lat: 51.3024,
    lng: 0.5429,
  },
  {
    name: "Bol",
    lat: 13.4586,
    lng: 14.7147,
  },
  {
    name: "Tocantinopolis",
    lat: -6.3196,
    lng: -47.42,
  },
  {
    name: "Sidney",
    lat: 48.6506,
    lng: -123.3986,
  },
  {
    name: "Higuera de Zaragoza",
    lat: 25.95,
    lng: -109.2833,
  },
  {
    name: "Thornhill",
    lat: 53.6622,
    lng: -1.6124,
  },
  {
    name: "Alotau",
    lat: -10.3167,
    lng: 150.4333,
  },
  {
    name: "Brandon",
    lat: 52.4474,
    lng: 0.6242,
  },
  {
    name: "View Park-Windsor Hills",
    lat: 33.9955,
    lng: -118.3484,
  },
  {
    name: "Mountain Ash",
    lat: 51.6814,
    lng: -3.3792,
  },
  {
    name: "Tlatlauquitepec",
    lat: 19.8528,
    lng: -97.4953,
  },
  {
    name: "Delcevo",
    lat: 41.9661,
    lng: 22.7747,
  },
  {
    name: "Saron",
    lat: -33.181,
    lng: 19.01,
  },
  {
    name: "La Junta",
    lat: 28.4778,
    lng: -107.3317,
  },
  {
    name: "Waipio",
    lat: 21.4143,
    lng: -157.9965,
  },
  {
    name: "Cuauhtemoc",
    lat: 19.3281,
    lng: -103.6028,
  },
  {
    name: "Yeadon",
    lat: 39.9325,
    lng: -75.2527,
  },
  {
    name: "Wallington",
    lat: 40.8535,
    lng: -74.1069,
  },
  {
    name: "Sanniquellie",
    lat: 7.371,
    lng: -8.685,
  },
  {
    name: "Cam",
    lat: 51.7,
    lng: -2.3667,
  },
  {
    name: "Qax",
    lat: 41.4194,
    lng: 46.9181,
  },
  {
    name: "Home Gardens",
    lat: 33.8784,
    lng: -117.5116,
  },
  {
    name: "Sandiacre",
    lat: 52.923,
    lng: -1.291,
  },
  {
    name: "River Edge",
    lat: 40.9268,
    lng: -74.0387,
  },
  {
    name: "Yuscaran",
    lat: 13.9433,
    lng: -86.8667,
  },
  {
    name: "Halacho",
    lat: 20.4764,
    lng: -90.0819,
  },
  {
    name: "Signal Hill",
    lat: 33.8029,
    lng: -118.1681,
  },
  {
    name: "Hadibu",
    lat: 12.6519,
    lng: 54.0239,
  },
  {
    name: "Richmond Heights",
    lat: 25.6347,
    lng: -80.372,
  },
  {
    name: "Weissenthurm",
    lat: 50.4144,
    lng: 7.4606,
  },
  {
    name: "Leven",
    lat: 56.195,
    lng: -2.9942,
  },
  {
    name: "Concordia",
    lat: 23.2883,
    lng: -106.0675,
  },
  {
    name: "Leavesden Green",
    lat: 51.6967,
    lng: -0.3991,
  },
  {
    name: "Glastonbury",
    lat: 51.1485,
    lng: -2.714,
  },
  {
    name: "Mahadipur",
    lat: 24.8566,
    lng: 88.1248,
  },
  {
    name: "Dunbar",
    lat: 56.0027,
    lng: -2.5169,
  },
  {
    name: "Narborough",
    lat: 52.5727,
    lng: -1.2023,
  },
  {
    name: "Bolton upon Dearne",
    lat: 53.5197,
    lng: -1.3148,
  },
  {
    name: "Zacapoaxtla",
    lat: 19.8833,
    lng: -97.5833,
  },
  {
    name: "Cullercoats",
    lat: 55.033,
    lng: -1.433,
  },
  {
    name: "Yarm",
    lat: 54.505,
    lng: -1.348,
  },
  {
    name: "Elektrenai",
    lat: 54.7886,
    lng: 24.6612,
  },
  {
    name: "Vanimo",
    lat: -2.6817,
    lng: 141.3014,
  },
  {
    name: "Olaine",
    lat: 56.7844,
    lng: 23.9369,
  },
  {
    name: "Stopsley",
    lat: 51.899,
    lng: -0.396,
  },
  {
    name: "Rye",
    lat: 50.95,
    lng: 0.73,
  },
  {
    name: "Rossmoor",
    lat: 33.7886,
    lng: -118.0803,
  },
  {
    name: "Magas",
    lat: 43.1667,
    lng: 44.8167,
  },
  {
    name: "Coamo",
    lat: 18.0765,
    lng: -66.3638,
  },
  {
    name: "Westgate on Sea",
    lat: 51.3814,
    lng: 1.3381,
  },
  {
    name: "Piedmont",
    lat: 37.8226,
    lng: -122.23,
  },
  {
    name: "Great Burstead",
    lat: 51.604,
    lng: 0.445,
  },
  {
    name: "Guttenberg",
    lat: 40.7927,
    lng: -74.0048,
  },
  {
    name: "Summit",
    lat: 41.7877,
    lng: -87.8146,
  },
  {
    name: "Rezina",
    lat: 47.7492,
    lng: 28.9622,
  },
  {
    name: "Loikaw",
    lat: 19.6742,
    lng: 97.2092,
  },
  {
    name: "Newbold",
    lat: 53.2519,
    lng: -1.4461,
  },
  {
    name: "Orange Cove",
    lat: 36.6211,
    lng: -119.3188,
  },
  {
    name: "Sundon",
    lat: 51.92,
    lng: -0.47,
  },
  {
    name: "Woodchurch",
    lat: 53.375,
    lng: -3.084,
  },
  {
    name: "Biltine",
    lat: 14.5333,
    lng: 20.9167,
  },
  {
    name: "Suffern",
    lat: 41.1138,
    lng: -74.1421,
  },
  {
    name: "La Trinidad",
    lat: 16.4556,
    lng: 120.5903,
  },
  {
    name: "Anenii Noi",
    lat: 46.8817,
    lng: 29.2308,
  },
  {
    name: "Rothwell",
    lat: 52.4254,
    lng: -0.8029,
  },
  {
    name: "Karuzi",
    lat: -3.1,
    lng: 30.163,
  },
  {
    name: "Bedwas",
    lat: 51.5926,
    lng: -3.2061,
  },
  {
    name: "Stonehouse",
    lat: 51.7478,
    lng: -2.2838,
  },
  {
    name: "Bramley",
    lat: 53.4253,
    lng: -1.2648,
  },
  {
    name: "Cocorit",
    lat: 27.5833,
    lng: -109.9667,
  },
  {
    name: "Cross Gates",
    lat: 53.8063,
    lng: -1.4506,
  },
  {
    name: "Calarasi",
    lat: 47.2544,
    lng: 28.3081,
  },
  {
    name: "Vinica",
    lat: 41.8828,
    lng: 22.5092,
  },
  {
    name: "Pyle",
    lat: 51.5291,
    lng: -3.6953,
  },
  {
    name: "La Riviera",
    lat: 38.5683,
    lng: -121.3544,
  },
  {
    name: "Ahumada",
    lat: 30.6186,
    lng: -106.5122,
  },
  {
    name: "Northbrook",
    lat: 39.2467,
    lng: -84.5796,
  },
  {
    name: "Stainforth",
    lat: 53.5958,
    lng: -1.0253,
  },
  {
    name: "Bucksburn",
    lat: 57.177,
    lng: -2.175,
  },
  {
    name: "West Auckland",
    lat: 54.6318,
    lng: -1.721,
  },
  {
    name: "Marlborough",
    lat: 51.42,
    lng: -1.73,
  },
  {
    name: "Maili",
    lat: 21.4134,
    lng: -158.1702,
  },
  {
    name: "Citrus",
    lat: 34.1161,
    lng: -117.889,
  },
  {
    name: "Izola",
    lat: 45.5395,
    lng: 13.6604,
  },
  {
    name: "Little Ferry",
    lat: 40.8463,
    lng: -74.0388,
  },
  {
    name: "Gowerton",
    lat: 51.648,
    lng: -4.043,
  },
  {
    name: "Daskasan",
    lat: 40.5181,
    lng: 46.0828,
  },
  {
    name: "Shifnal",
    lat: 52.665,
    lng: -2.373,
  },
  {
    name: "Gracanice",
    lat: 42.6,
    lng: 21.2,
  },
  {
    name: "Bela Crkva",
    lat: 44.8975,
    lng: 21.4172,
  },
  {
    name: "Naranja",
    lat: 25.5164,
    lng: -80.4221,
  },
  {
    name: "Darby",
    lat: 39.921,
    lng: -75.2611,
  },
  {
    name: "Oban",
    lat: 56.412,
    lng: -5.472,
  },
  {
    name: "Kavaratti",
    lat: 10.5626,
    lng: 72.6369,
  },
  {
    name: "El Higo",
    lat: 21.7667,
    lng: -98.45,
  },
  {
    name: "Johvi",
    lat: 59.3575,
    lng: 27.4122,
  },
  {
    name: "Latchford",
    lat: 53.3796,
    lng: -2.5645,
  },
  {
    name: "Lansdowne",
    lat: 39.9408,
    lng: -75.276,
  },
  {
    name: "Harworth",
    lat: 53.417,
    lng: -1.075,
  },
  {
    name: "Guadalupe Yancuictlalpan",
    lat: 19.1831,
    lng: -99.4583,
  },
  {
    name: "Al Mahwit",
    lat: 15.4694,
    lng: 43.5453,
  },
  {
    name: "Ada",
    lat: 45.8014,
    lng: 20.1222,
  },
  {
    name: "Greenville",
    lat: 5.0111,
    lng: -9.0388,
  },
  {
    name: "Lake Stickney",
    lat: 47.8709,
    lng: -122.2596,
  },
  {
    name: "North Lindenhurst",
    lat: 40.7072,
    lng: -73.3859,
  },
  {
    name: "Kantunilkin",
    lat: 21.1,
    lng: -87.4833,
  },
  {
    name: "Birzai",
    lat: 56.2,
    lng: 24.75,
  },
  {
    name: "Kirundo",
    lat: -2.5833,
    lng: 30.1,
  },
  {
    name: "Haapsalu",
    lat: 58.9469,
    lng: 23.5369,
  },
  {
    name: "Gorleston-on-Sea",
    lat: 52.5757,
    lng: 1.7235,
  },
  {
    name: "Penryn",
    lat: 50.169,
    lng: -5.107,
  },
  {
    name: "Trat",
    lat: 12.2417,
    lng: 102.5125,
  },
  {
    name: "Sarnen",
    lat: 46.8969,
    lng: 8.2469,
  },
  {
    name: "Phangnga",
    lat: 8.4644,
    lng: 98.5317,
  },
  {
    name: "West Perrine",
    lat: 25.6061,
    lng: -80.3639,
  },
  {
    name: "Filadelfia",
    lat: -22.34,
    lng: -60.03,
  },
  {
    name: "Jacinto City",
    lat: 29.7663,
    lng: -95.241,
  },
  {
    name: "Santa Maria Huatulco",
    lat: 15.85,
    lng: -96.3333,
  },
  {
    name: "Church",
    lat: 53.755,
    lng: -2.386,
  },
  {
    name: "Anstey",
    lat: 52.6715,
    lng: -1.1955,
  },
  {
    name: "Ordubad",
    lat: 38.9047,
    lng: 46.0231,
  },
  {
    name: "Lascano",
    lat: -33.6731,
    lng: -54.2078,
  },
  {
    name: "Wickersley",
    lat: 53.4199,
    lng: -1.2792,
  },
  {
    name: "Jurbarkas",
    lat: 55.0825,
    lng: 22.7714,
  },
  {
    name: "East Whittier",
    lat: 33.9244,
    lng: -117.9887,
  },
  {
    name: "Cromer",
    lat: 52.931,
    lng: 1.302,
  },
  {
    name: "Butha-Buthe",
    lat: -28.7833,
    lng: 28.2333,
  },
  {
    name: "Saldus",
    lat: 56.6667,
    lng: 22.4936,
  },
  {
    name: "Altdorf",
    lat: 46.8806,
    lng: 8.6394,
  },
  {
    name: "Wistaston",
    lat: 53.0821,
    lng: -2.4747,
  },
  {
    name: "Cramond",
    lat: 55.9797,
    lng: -3.3007,
  },
  {
    name: "Roatan",
    lat: 16.33,
    lng: -86.519,
  },
  {
    name: "Sliema",
    lat: 35.9125,
    lng: 14.5019,
  },
  {
    name: "Kanjiza",
    lat: 46.0667,
    lng: 20.05,
  },
  {
    name: "Great Neck",
    lat: 40.8028,
    lng: -73.7332,
  },
  {
    name: "Timberlane",
    lat: 29.8781,
    lng: -90.0303,
  },
  {
    name: "West Haverstraw",
    lat: 41.2063,
    lng: -73.9883,
  },
  {
    name: "Ondjiva",
    lat: -17.0667,
    lng: 15.7333,
  },
  {
    name: "Bound Brook",
    lat: 40.5676,
    lng: -74.5383,
  },
  {
    name: "Birao",
    lat: 10.2837,
    lng: 22.7833,
  },
  {
    name: "Kirkham",
    lat: 53.782,
    lng: -2.87,
  },
  {
    name: "Buctzotz",
    lat: 21.2017,
    lng: -88.7928,
  },
  {
    name: "Radlett",
    lat: 51.685,
    lng: -0.318,
  },
  {
    name: "Nisporeni",
    lat: 47.0814,
    lng: 28.1783,
  },
  {
    name: "Vrnjacka Banja",
    lat: 43.6167,
    lng: 20.9,
  },
  {
    name: "Godmanchester",
    lat: 52.3176,
    lng: -0.1725,
  },
  {
    name: "Clowne",
    lat: 53.276,
    lng: -1.263,
  },
  {
    name: "Mojkovac",
    lat: 42.96,
    lng: 19.58,
  },
  {
    name: "Muyinga",
    lat: -2.85,
    lng: 30.3333,
  },
  {
    name: "Lincoln Village",
    lat: 39.9532,
    lng: -83.1314,
  },
  {
    name: "Coppull",
    lat: 53.62,
    lng: -2.661,
  },
  {
    name: "Del Aire",
    lat: 33.9168,
    lng: -118.3693,
  },
  {
    name: "Crieff",
    lat: 56.3757,
    lng: -3.8426,
  },
  {
    name: "San Francisco del Mar",
    lat: 16.3394,
    lng: -94.515,
  },
  {
    name: "Tarin Kot",
    lat: 32.6333,
    lng: 65.8667,
  },
  {
    name: "Hucknall under Huthwaite",
    lat: 53.125,
    lng: -1.301,
  },
  {
    name: "Westgate",
    lat: 26.6994,
    lng: -80.0989,
  },
  {
    name: "Altar",
    lat: 30.7136,
    lng: -111.8353,
  },
  {
    name: "Capitola",
    lat: 36.9772,
    lng: -121.9538,
  },
  {
    name: "Castillos",
    lat: -34.1989,
    lng: -53.8575,
  },
  {
    name: "Frampton Cotterell",
    lat: 51.54,
    lng: -2.48,
  },
  {
    name: "Whetstone",
    lat: 52.5724,
    lng: -1.1799,
  },
  {
    name: "Thrapston",
    lat: 52.397,
    lng: -0.538,
  },
  {
    name: "Cacheu",
    lat: 12.278,
    lng: -16.165,
  },
  {
    name: "Watervliet",
    lat: 42.7243,
    lng: -73.7068,
  },
  {
    name: "Vilkaviskis",
    lat: 54.6667,
    lng: 23.0333,
  },
  {
    name: "Celestun",
    lat: 20.8583,
    lng: -90.4,
  },
  {
    name: "Hopelchen",
    lat: 19.7444,
    lng: -89.8453,
  },
  {
    name: "Duntocher",
    lat: 55.924,
    lng: -4.417,
  },
  {
    name: "Aintree",
    lat: 53.4793,
    lng: -2.9373,
  },
  {
    name: "East Rockaway",
    lat: 40.6432,
    lng: -73.6672,
  },
  {
    name: "New Hyde Park",
    lat: 40.7324,
    lng: -73.6858,
  },
  {
    name: "Inwood",
    lat: 40.6218,
    lng: -73.7507,
  },
  {
    name: "Nueva Ocotepeque",
    lat: 14.4333,
    lng: -89.1833,
  },
  {
    name: "Marina del Rey",
    lat: 33.9765,
    lng: -118.4486,
  },
  {
    name: "Huningue",
    lat: 47.5914,
    lng: 7.5831,
  },
  {
    name: "Charter Oak",
    lat: 34.1025,
    lng: -117.8564,
  },
  {
    name: "Partington",
    lat: 53.42,
    lng: -2.43,
  },
  {
    name: "Novoberde",
    lat: 42.6,
    lng: 21.4333,
  },
  {
    name: "Makamba",
    lat: -4.1333,
    lng: 29.8,
  },
  {
    name: "Highbridge",
    lat: 51.2189,
    lng: -2.973,
  },
  {
    name: "Pembroke",
    lat: 51.676,
    lng: -4.9158,
  },
  {
    name: "Tshabong",
    lat: -26.02,
    lng: 22.4056,
  },
  {
    name: "Thames Ditton",
    lat: 51.389,
    lng: -0.331,
  },
  {
    name: "Brechin",
    lat: 56.7299,
    lng: -2.6553,
  },
  {
    name: "Djambala",
    lat: -2.55,
    lng: 14.75,
  },
  {
    name: "Keansburg",
    lat: 40.4471,
    lng: -74.1316,
  },
  {
    name: "Llantwit Fardre",
    lat: 51.5578,
    lng: -3.3341,
  },
  {
    name: "Maywood",
    lat: 40.9025,
    lng: -74.0634,
  },
  {
    name: "Barrowford",
    lat: 53.851,
    lng: -2.221,
  },
  {
    name: "Pedra Badejo",
    lat: 15.1375,
    lng: -23.5333,
  },
  {
    name: "Littleborough",
    lat: 53.644,
    lng: -2.098,
  },
  {
    name: "Sherburn in Elmet",
    lat: 53.7973,
    lng: -1.2331,
  },
  {
    name: "Kundiawa",
    lat: -6.023,
    lng: 144.96,
  },
  {
    name: "Dinas Powys",
    lat: 51.4331,
    lng: -3.2134,
  },
  {
    name: "Ikeja",
    lat: 6.5965,
    lng: 3.3421,
  },
  {
    name: "Pajaros",
    lat: 18.3609,
    lng: -66.2184,
  },
  {
    name: "Withernsea",
    lat: 53.7285,
    lng: 0.0382,
  },
  {
    name: "Brookdale",
    lat: 40.8348,
    lng: -74.1798,
  },
  {
    name: "Wadsley",
    lat: 53.41,
    lng: -1.52,
  },
  {
    name: "Stonegate",
    lat: 39.5356,
    lng: -104.8033,
  },
  {
    name: "Wardle",
    lat: 53.647,
    lng: -2.132,
  },
  {
    name: "Bois-des-Filion",
    lat: 45.6667,
    lng: -73.75,
  },
  {
    name: "Coral Hills",
    lat: 38.8709,
    lng: -76.9234,
  },
  {
    name: "Ojo Caliente",
    lat: 21.8606,
    lng: -102.684,
  },
  {
    name: "Govan",
    lat: 55.8615,
    lng: -4.3083,
  },
  {
    name: "Rozaje",
    lat: 42.8442,
    lng: 20.1679,
  },
  {
    name: "Aiea",
    lat: 21.3865,
    lng: -157.9232,
  },
  {
    name: "Hani i Elezit",
    lat: 42.1475,
    lng: 21.2992,
  },
  {
    name: "Bladensburg",
    lat: 38.9424,
    lng: -76.9263,
  },
  {
    name: "Bauska",
    lat: 56.4067,
    lng: 24.1875,
  },
  {
    name: "Thyolo",
    lat: -16.0667,
    lng: 35.1333,
  },
  {
    name: "Temascal",
    lat: 18.2394,
    lng: -96.4031,
  },
  {
    name: "Sabana Grande",
    lat: 18.0821,
    lng: -66.9673,
  },
  {
    name: "Kirriemuir",
    lat: 56.6692,
    lng: -3.0051,
  },
  {
    name: "Porth",
    lat: 51.6138,
    lng: -3.4095,
  },
  {
    name: "Tettenhall",
    lat: 52.5983,
    lng: -2.168,
  },
  {
    name: "North Kensington",
    lat: 39.0392,
    lng: -77.0723,
  },
  {
    name: "Harlescott",
    lat: 52.7365,
    lng: -2.7226,
  },
  {
    name: "Woodlyn",
    lat: 39.8774,
    lng: -75.3445,
  },
  {
    name: "Leisure World",
    lat: 39.1023,
    lng: -77.0691,
  },
  {
    name: "Riscani",
    lat: 47.9561,
    lng: 27.5536,
  },
  {
    name: "Long Ditton",
    lat: 51.385,
    lng: -0.321,
  },
  {
    name: "Sawston",
    lat: 52.1247,
    lng: 0.1731,
  },
  {
    name: "Dobele",
    lat: 56.6258,
    lng: 23.2811,
  },
  {
    name: "Wood-Ridge",
    lat: 40.8507,
    lng: -74.0878,
  },
  {
    name: "Talsi",
    lat: 57.2447,
    lng: 22.5889,
  },
  {
    name: "Ashbourne",
    lat: 53.016,
    lng: -1.731,
  },
  {
    name: "Las Tablas",
    lat: 7.7667,
    lng: -80.2833,
  },
  {
    name: "Brentwood",
    lat: 40.3734,
    lng: -79.9757,
  },
  {
    name: "Kasane",
    lat: -17.7983,
    lng: 25.1536,
  },
  {
    name: "Katakwi",
    lat: 1.8911,
    lng: 33.9661,
  },
  {
    name: "Alcester",
    lat: 52.215,
    lng: -1.876,
  },
  {
    name: "Plainedge",
    lat: 40.724,
    lng: -73.477,
  },
  {
    name: "Anyksciai",
    lat: 55.5344,
    lng: 25.1072,
  },
  {
    name: "Evinayong",
    lat: 1.45,
    lng: 10.5667,
  },
  {
    name: "Zabalj",
    lat: 45.3667,
    lng: 20.0667,
  },
  {
    name: "Boulder Hill",
    lat: 41.7112,
    lng: -88.3353,
  },
  {
    name: "South Amboy",
    lat: 40.4852,
    lng: -74.2831,
  },
  {
    name: "Dursley",
    lat: 51.6811,
    lng: -2.3543,
  },
  {
    name: "Stepps",
    lat: 55.8908,
    lng: -4.1522,
  },
  {
    name: "Lerwick",
    lat: 60.155,
    lng: -1.145,
  },
  {
    name: "Sauce",
    lat: -34.6469,
    lng: -56.0628,
  },
  {
    name: "Stans",
    lat: 46.9594,
    lng: 8.3667,
  },
  {
    name: "Saltburn-by-the-Sea",
    lat: 54.5828,
    lng: -0.9732,
  },
  {
    name: "Billinge",
    lat: 53.4932,
    lng: -2.7129,
  },
  {
    name: "Dangriga",
    lat: 16.9667,
    lng: -88.2167,
  },
  {
    name: "Derby",
    lat: 39.8401,
    lng: -104.9171,
  },
  {
    name: "Broughton",
    lat: 53.5638,
    lng: -0.5465,
  },
  {
    name: "Inirida",
    lat: 3.854,
    lng: -67.9061,
  },
  {
    name: "Ewo",
    lat: -0.8667,
    lng: 14.8167,
  },
  {
    name: "Filey",
    lat: 54.2101,
    lng: -0.2893,
  },
  {
    name: "Manatuto",
    lat: -8.5167,
    lng: 126.0167,
  },
  {
    name: "Odzaci",
    lat: 45.5167,
    lng: 19.2667,
  },
  {
    name: "Cove",
    lat: 51.2965,
    lng: -0.7939,
  },
  {
    name: "Leonia",
    lat: 40.8638,
    lng: -73.9899,
  },
  {
    name: "Gizo",
    lat: -8.1,
    lng: 156.85,
  },
  {
    name: "Stansted Mountfitchet",
    lat: 51.898,
    lng: 0.198,
  },
  {
    name: "Farmingdale",
    lat: 40.7328,
    lng: -73.4465,
  },
  {
    name: "Wentworthville",
    lat: -33.8233,
    lng: 150.9678,
  },
  {
    name: "Stony Brook University",
    lat: 40.9099,
    lng: -73.1213,
  },
  {
    name: "Lexden",
    lat: 51.8833,
    lng: 0.8667,
  },
  {
    name: "Sremski Karlovci",
    lat: 45.2,
    lng: 19.9333,
  },
  {
    name: "Temozon",
    lat: 20.8042,
    lng: -88.2028,
  },
  {
    name: "Gleno",
    lat: -8.7239,
    lng: 125.4361,
  },
  {
    name: "Budleigh Salterton",
    lat: 50.6284,
    lng: -3.3205,
  },
  {
    name: "Long Ashton",
    lat: 51.43,
    lng: -2.65,
  },
  {
    name: "Mokhotlong",
    lat: -29.2885,
    lng: 29.0656,
  },
  {
    name: "Cheddar",
    lat: 51.279,
    lng: -2.778,
  },
  {
    name: "Pontardawe",
    lat: 51.722,
    lng: -3.851,
  },
  {
    name: "Corozal",
    lat: 18.4,
    lng: -88.4,
  },
  {
    name: "Gavarr",
    lat: 40.3667,
    lng: 45.1333,
  },
  {
    name: "Dore",
    lat: 53.3268,
    lng: -1.5345,
  },
  {
    name: "North Petherton",
    lat: 51.091,
    lng: -3.013,
  },
  {
    name: "Egham",
    lat: 51.429,
    lng: -0.548,
  },
  {
    name: "Collingdale",
    lat: 39.9151,
    lng: -75.2776,
  },
  {
    name: "Pontardulais",
    lat: 51.71,
    lng: -4.04,
  },
  {
    name: "Saynshand",
    lat: 44.8917,
    lng: 110.1367,
  },
  {
    name: "Joniskis",
    lat: 56.2433,
    lng: 23.6179,
  },
  {
    name: "Eichwalde",
    lat: 52.3667,
    lng: 13.6167,
  },
  {
    name: "Frimley",
    lat: 51.3143,
    lng: -0.7387,
  },
  {
    name: "August",
    lat: 37.9797,
    lng: -121.2625,
  },
  {
    name: "Leona Vicario",
    lat: 20.9922,
    lng: -87.2028,
  },
  {
    name: "West Miami",
    lat: 25.7578,
    lng: -80.2969,
  },
  {
    name: "New Square",
    lat: 41.141,
    lng: -74.0294,
  },
  {
    name: "Glodeni",
    lat: 47.7708,
    lng: 27.5144,
  },
  {
    name: "Folsom",
    lat: 39.8924,
    lng: -75.3287,
  },
  {
    name: "Becal",
    lat: 20.4414,
    lng: -90.0275,
  },
  {
    name: "Great Wakering",
    lat: 51.5516,
    lng: 0.8165,
  },
  {
    name: "Paide",
    lat: 58.8833,
    lng: 25.5667,
  },
  {
    name: "Santo Domingo Este",
    lat: 18.4885,
    lng: -69.8571,
  },
  {
    name: "Griffithstown",
    lat: 51.6853,
    lng: -3.0284,
  },
  {
    name: "Aleg",
    lat: 17.058,
    lng: -13.909,
  },
  {
    name: "Littlemore",
    lat: 51.72,
    lng: -1.227,
  },
  {
    name: "Swissvale",
    lat: 40.4207,
    lng: -79.8858,
  },
  {
    name: "South San Gabriel",
    lat: 34.0489,
    lng: -118.0961,
  },
  {
    name: "Prienai",
    lat: 54.6333,
    lng: 23.9417,
  },
  {
    name: "Audubon",
    lat: 39.8906,
    lng: -75.0722,
  },
  {
    name: "Heage",
    lat: 53.05,
    lng: -1.447,
  },
  {
    name: "Handforth",
    lat: 53.35,
    lng: -2.216,
  },
  {
    name: "Galleywood",
    lat: 51.697,
    lng: 0.474,
  },
  {
    name: "Seven Corners",
    lat: 38.8658,
    lng: -77.1445,
  },
  {
    name: "Greenbriar",
    lat: 38.8717,
    lng: -77.397,
  },
  {
    name: "West Athens",
    lat: 33.9235,
    lng: -118.3033,
  },
  {
    name: "Four Corners",
    lat: 39.0235,
    lng: -77.0102,
  },
  {
    name: "Harleston",
    lat: 52.4024,
    lng: 1.2996,
  },
  {
    name: "San Antonino Castillo Velasco",
    lat: 16.8031,
    lng: -96.6839,
  },
  {
    name: "Basarabeasca",
    lat: 46.3333,
    lng: 28.9667,
  },
  {
    name: "Teaoraereke",
    lat: 1.3333,
    lng: 173,
  },
  {
    name: "Zardab",
    lat: 40.2111,
    lng: 47.7108,
  },
  {
    name: "Tadcaster",
    lat: 53.8852,
    lng: -1.262,
  },
  {
    name: "Great Meols",
    lat: 53.4014,
    lng: -3.1553,
  },
  {
    name: "Greymouth",
    lat: -42.4667,
    lng: 171.2,
  },
  {
    name: "Varena",
    lat: 54.2111,
    lng: 24.5722,
  },
  {
    name: "Malverne",
    lat: 40.6746,
    lng: -73.6721,
  },
  {
    name: "Amble",
    lat: 55.3306,
    lng: -1.5783,
  },
  {
    name: "Wotton-under-Edge",
    lat: 51.638,
    lng: -2.349,
  },
  {
    name: "Paulton",
    lat: 51.3069,
    lng: -2.5027,
  },
  {
    name: "Stotfold",
    lat: 52.018,
    lng: -0.228,
  },
  {
    name: "Midway City",
    lat: 33.7451,
    lng: -117.9849,
  },
  {
    name: "Brokopondo",
    lat: 5.0404,
    lng: -55.02,
  },
  {
    name: "Aibonito",
    lat: 18.1398,
    lng: -66.2659,
  },
  {
    name: "Kalibo",
    lat: 11.7086,
    lng: 122.3648,
  },
  {
    name: "Hoylake",
    lat: 53.39,
    lng: -3.18,
  },
  {
    name: "Bogota",
    lat: 40.875,
    lng: -74.0293,
  },
  {
    name: "Harwood Heights",
    lat: 41.9663,
    lng: -87.8057,
  },
  {
    name: "Grandview Heights",
    lat: 39.9793,
    lng: -83.0408,
  },
  {
    name: "Puerto San Carlos",
    lat: 24.7894,
    lng: -112.1083,
  },
  {
    name: "Soro",
    lat: 55.433,
    lng: 11.5667,
  },
  {
    name: "Haledon",
    lat: 40.9363,
    lng: -74.1887,
  },
  {
    name: "Dormont",
    lat: 40.3941,
    lng: -80.0377,
  },
  {
    name: "Arlesey",
    lat: 52.007,
    lng: -0.2654,
  },
  {
    name: "Wincanton",
    lat: 51.0559,
    lng: -2.4102,
  },
  {
    name: "Tayoltita",
    lat: 24.0833,
    lng: -105.9333,
  },
  {
    name: "Tetbury",
    lat: 51.636,
    lng: -2.158,
  },
  {
    name: "Balakan",
    lat: 41.7233,
    lng: 46.3919,
  },
  {
    name: "Teabo",
    lat: 20.3997,
    lng: -89.2844,
  },
  {
    name: "Kelme",
    lat: 55.6333,
    lng: 22.9333,
  },
  {
    name: "Yeghegnadzor",
    lat: 39.7667,
    lng: 45.35,
  },
  {
    name: "Ormesby",
    lat: 54.5492,
    lng: -1.1817,
  },
  {
    name: "Hengoed",
    lat: 51.65,
    lng: -3.23,
  },
  {
    name: "Ndalatando",
    lat: -9.3,
    lng: 14.9167,
  },
  {
    name: "Cheviot",
    lat: 39.1577,
    lng: -84.6139,
  },
  {
    name: "Brynmawr",
    lat: 51.796,
    lng: -3.183,
  },
  {
    name: "Magor",
    lat: 51.5798,
    lng: -2.8312,
  },
  {
    name: "Beocin",
    lat: 45.1922,
    lng: 19.7203,
  },
  {
    name: "Qobustan",
    lat: 40.5333,
    lng: 48.9333,
  },
  {
    name: "Soroti",
    lat: 1.6833,
    lng: 33.6167,
  },
  {
    name: "Sao Filipe",
    lat: 14.8966,
    lng: -24.4955,
  },
  {
    name: "Piste",
    lat: 20.6981,
    lng: -88.5886,
  },
  {
    name: "Alondra Park",
    lat: 33.8885,
    lng: -118.335,
  },
  {
    name: "Mount Rainier",
    lat: 38.9423,
    lng: -76.9645,
  },
  {
    name: "Maplewood",
    lat: 38.6121,
    lng: -90.324,
  },
  {
    name: "Algodones",
    lat: 32.7153,
    lng: -114.7289,
  },
  {
    name: "Port Maria",
    lat: 18.3703,
    lng: -76.8903,
  },
  {
    name: "Ludza",
    lat: 56.5439,
    lng: 27.7211,
  },
  {
    name: "Guadalupe y Calvo",
    lat: 26.095,
    lng: -106.9644,
  },
  {
    name: "Garden City Park",
    lat: 40.7436,
    lng: -73.6639,
  },
  {
    name: "Nangan",
    lat: 26.1598,
    lng: 119.9432,
  },
  {
    name: "Broadview Park",
    lat: 26.0979,
    lng: -80.2088,
  },
  {
    name: "Malmesbury",
    lat: 51.584,
    lng: -2.098,
  },
  {
    name: "North Bay Village",
    lat: 25.8487,
    lng: -80.1535,
  },
  {
    name: "Conshohocken",
    lat: 40.0772,
    lng: -75.3035,
  },
  {
    name: "Newent",
    lat: 51.9302,
    lng: -2.4048,
  },
  {
    name: "Bellevue",
    lat: 40.4945,
    lng: -80.055,
  },
  {
    name: "Calderitas",
    lat: 18.5544,
    lng: -88.2583,
  },
  {
    name: "Panindicuaro",
    lat: 19.9828,
    lng: -101.7606,
  },
  {
    name: "Mtskheta",
    lat: 41.85,
    lng: 44.7167,
  },
  {
    name: "Sokobanja",
    lat: 43.6394,
    lng: 21.8694,
  },
  {
    name: "Kraslava",
    lat: 55.8956,
    lng: 27.1644,
  },
  {
    name: "Panaba",
    lat: 21.2964,
    lng: -88.2706,
  },
  {
    name: "Juncos",
    lat: 18.2264,
    lng: -65.9163,
  },
  {
    name: "Illizi",
    lat: 26.4834,
    lng: 8.4666,
  },
  {
    name: "Elderslie",
    lat: 55.8306,
    lng: -4.4842,
  },
  {
    name: "Caldwell",
    lat: 40.839,
    lng: -74.2776,
  },
  {
    name: "Fgura",
    lat: 35.8703,
    lng: 14.5133,
  },
  {
    name: "San Juan Bautista",
    lat: -26.68,
    lng: -57.15,
  },
  {
    name: "Riverside",
    lat: 40.0358,
    lng: -74.9564,
  },
  {
    name: "Falmouth",
    lat: 18.4936,
    lng: -77.6558,
  },
  {
    name: "Temple Hills",
    lat: 38.8106,
    lng: -76.9495,
  },
  {
    name: "Boyes Hot Springs",
    lat: 38.3126,
    lng: -122.4888,
  },
  {
    name: "Mahmud-e Raqi",
    lat: 35.0167,
    lng: 69.3333,
  },
  {
    name: "Hamrun",
    lat: 35.8847,
    lng: 14.4844,
  },
  {
    name: "Aizkraukle",
    lat: 56.6008,
    lng: 25.255,
  },
  {
    name: "Koboko",
    lat: 3.4136,
    lng: 30.9599,
  },
  {
    name: "Luquillo",
    lat: 18.3735,
    lng: -65.7218,
  },
  {
    name: "Naftalan",
    lat: 40.5058,
    lng: 46.8192,
  },
  {
    name: "Bentiu",
    lat: 9.25,
    lng: 29.8,
  },
  {
    name: "Wilson",
    lat: 40.6844,
    lng: -75.2407,
  },
  {
    name: "Palo Alto",
    lat: 21.9167,
    lng: -101.9667,
  },
  {
    name: "Rio Bravo",
    lat: 27.3648,
    lng: -99.482,
  },
  {
    name: "Luba",
    lat: 3.45,
    lng: 8.55,
  },
  {
    name: "Sheriff Hill",
    lat: 54.939,
    lng: -1.586,
  },
  {
    name: "Guadalupe",
    lat: 34.9608,
    lng: -120.5735,
  },
  {
    name: "Pinchbeck",
    lat: 52.8147,
    lng: -0.1605,
  },
  {
    name: "Chickerell",
    lat: 50.624,
    lng: -2.5047,
  },
  {
    name: "Sabana Seca",
    lat: 18.4273,
    lng: -66.1809,
  },
  {
    name: "West Samoset",
    lat: 27.4702,
    lng: -82.5552,
  },
  {
    name: "Fanwood",
    lat: 40.6417,
    lng: -74.3857,
  },
  {
    name: "Baldwin Harbor",
    lat: 40.6296,
    lng: -73.6025,
  },
  {
    name: "Xinguara",
    lat: -7.1006,
    lng: -49.948,
  },
  {
    name: "Holtville",
    lat: 32.813,
    lng: -115.378,
  },
  {
    name: "Radstock",
    lat: 51.293,
    lng: -2.448,
  },
  {
    name: "San Lorenzo",
    lat: 18.1894,
    lng: -65.9674,
  },
  {
    name: "Arafat",
    lat: 18.0583,
    lng: -15.9621,
  },
  {
    name: "Angostura",
    lat: 25.3653,
    lng: -108.1622,
  },
  {
    name: "Calumet Park",
    lat: 41.665,
    lng: -87.6578,
  },
  {
    name: "Glen Ridge",
    lat: 40.8041,
    lng: -74.2043,
  },
  {
    name: "Waterbeach",
    lat: 52.2664,
    lng: 0.1908,
  },
  {
    name: "Glenside",
    lat: 40.1032,
    lng: -75.1517,
  },
  {
    name: "Sen Monorom",
    lat: 12.45,
    lng: 107.2,
  },
  {
    name: "Brotton",
    lat: 54.568,
    lng: -0.937,
  },
  {
    name: "Nombre de Dios",
    lat: 23.85,
    lng: -104.2333,
  },
  {
    name: "Gulbene",
    lat: 57.175,
    lng: 26.7564,
  },
  {
    name: "Gurabo",
    lat: 18.2529,
    lng: -65.9786,
  },
  {
    name: "Leova",
    lat: 46.4786,
    lng: 28.2553,
  },
  {
    name: "Hatboro",
    lat: 40.1775,
    lng: -75.1054,
  },
  {
    name: "Tala",
    lat: -34.3436,
    lng: -55.7617,
  },
  {
    name: "Esperanza",
    lat: 27.58,
    lng: -109.9298,
  },
  {
    name: "San Jose",
    lat: 10.745,
    lng: 121.9415,
  },
  {
    name: "Ruse",
    lat: 46.5383,
    lng: 15.5153,
  },
  {
    name: "Park City",
    lat: 42.3522,
    lng: -87.8915,
  },
  {
    name: "Oguz",
    lat: 41.0714,
    lng: 47.4653,
  },
  {
    name: "Hillcrest",
    lat: 41.1298,
    lng: -74.035,
  },
  {
    name: "Brayton",
    lat: 53.7682,
    lng: -1.0907,
  },
  {
    name: "Briceni",
    lat: 48.3628,
    lng: 27.085,
  },
  {
    name: "Mongomo",
    lat: 1.6287,
    lng: 11.3168,
  },
  {
    name: "Goranboy",
    lat: 40.61,
    lng: 46.7872,
  },
  {
    name: "Ruyigi",
    lat: -3.4667,
    lng: 30.25,
  },
  {
    name: "Lerik",
    lat: 38.7753,
    lng: 48.4153,
  },
  {
    name: "Montpelier",
    lat: 44.2658,
    lng: -72.5717,
  },
  {
    name: "Monaghan",
    lat: 54.2479,
    lng: -6.9708,
  },
  {
    name: "Livani",
    lat: 56.3539,
    lng: 26.1761,
  },
  {
    name: "Ocnita",
    lat: 48.4167,
    lng: 27.4833,
  },
  {
    name: "Frontera Corozal",
    lat: 16.8211,
    lng: -90.8903,
  },
  {
    name: "Cwmbach",
    lat: 51.7072,
    lng: -3.4128,
  },
  {
    name: "Mobaye",
    lat: 4.3167,
    lng: 21.1833,
  },
  {
    name: "X-Can",
    lat: 20.8583,
    lng: -87.6681,
  },
  {
    name: "Williston Park",
    lat: 40.7587,
    lng: -73.6465,
  },
  {
    name: "Telenesti",
    lat: 47.4997,
    lng: 28.3656,
  },
  {
    name: "Limbazi",
    lat: 57.5147,
    lng: 24.7131,
  },
  {
    name: "Hola",
    lat: -1.5,
    lng: 40.03,
  },
  {
    name: "Madona",
    lat: 56.8542,
    lng: 26.22,
  },
  {
    name: "Chicxulub Puerto",
    lat: 21.2939,
    lng: -89.6083,
  },
  {
    name: "Dunellen",
    lat: 40.5903,
    lng: -74.4656,
  },
  {
    name: "South Monrovia Island",
    lat: 34.1234,
    lng: -117.9958,
  },
  {
    name: "East Franklin",
    lat: 40.4933,
    lng: -74.4711,
  },
  {
    name: "Lapovo",
    lat: 44.1842,
    lng: 21.0973,
  },
  {
    name: "Glenolden",
    lat: 39.8996,
    lng: -75.292,
  },
  {
    name: "Nyack",
    lat: 41.0919,
    lng: -73.9143,
  },
  {
    name: "Hampstead",
    lat: 45.4833,
    lng: -73.6333,
  },
  {
    name: "Donduseni",
    lat: 48.2244,
    lng: 27.5853,
  },
  {
    name: "Stefan Voda",
    lat: 46.5153,
    lng: 29.6631,
  },
  {
    name: "Ewa Villages",
    lat: 21.3418,
    lng: -158.039,
  },
  {
    name: "Nakasongola",
    lat: 1.3089,
    lng: 32.4564,
  },
  {
    name: "Daet",
    lat: 14.1122,
    lng: 122.9553,
  },
  {
    name: "Souderton",
    lat: 40.311,
    lng: -75.3224,
  },
  {
    name: "Twin Rivers",
    lat: 40.263,
    lng: -74.4917,
  },
  {
    name: "Ridley Park",
    lat: 39.8785,
    lng: -75.3251,
  },
  {
    name: "Waikele",
    lat: 21.4025,
    lng: -158.0058,
  },
  {
    name: "Great Neck Plaza",
    lat: 40.7869,
    lng: -73.7261,
  },
  {
    name: "Berovo",
    lat: 41.7078,
    lng: 22.8564,
  },
  {
    name: "Trindade",
    lat: 0.3,
    lng: 6.6667,
  },
  {
    name: "Orland Hills",
    lat: 41.5905,
    lng: -87.8413,
  },
  {
    name: "Virac",
    lat: 13.5848,
    lng: 124.2374,
  },
  {
    name: "Kratovo",
    lat: 42.0783,
    lng: 22.175,
  },
  {
    name: "Aluksne",
    lat: 57.4239,
    lng: 27.0503,
  },
  {
    name: "South Valley Stream",
    lat: 40.6557,
    lng: -73.7186,
  },
  {
    name: "San Isidro",
    lat: 18.3919,
    lng: -65.8853,
  },
  {
    name: "Senglea",
    lat: 35.8875,
    lng: 14.5169,
  },
  {
    name: "Puerto Real",
    lat: 18.0762,
    lng: -67.1861,
  },
  {
    name: "Mahibadhoo",
    lat: 3.7571,
    lng: 72.9689,
  },
  {
    name: "Ajdovscina",
    lat: 45.8884,
    lng: 13.9052,
  },
  {
    name: "Backi Petrovac",
    lat: 45.3564,
    lng: 19.5883,
  },
  {
    name: "Yabucoa",
    lat: 18.0469,
    lng: -65.8792,
  },
  {
    name: "Farim",
    lat: 12.4833,
    lng: -15.2167,
  },
  {
    name: "Criuleni",
    lat: 47.2167,
    lng: 29.1614,
  },
  {
    name: "Pasvalys",
    lat: 56.0611,
    lng: 24.4028,
  },
  {
    name: "Eydhafushi",
    lat: 5.1038,
    lng: 73.0699,
  },
  {
    name: "Diekirch",
    lat: 49.8678,
    lng: 6.1558,
  },
  {
    name: "Naples Manor",
    lat: 26.0892,
    lng: -81.7254,
  },
  {
    name: "Clifton Heights",
    lat: 39.9301,
    lng: -75.2958,
  },
  {
    name: "Castroville",
    lat: 36.765,
    lng: -121.7535,
  },
  {
    name: "Salcininkai",
    lat: 54.3111,
    lng: 25.3806,
  },
  {
    name: "Ikskile",
    lat: 56.8367,
    lng: 24.4964,
  },
  {
    name: "Lauderdale-by-the-Sea",
    lat: 26.199,
    lng: -80.0972,
  },
  {
    name: "Stratford",
    lat: -39.341,
    lng: 174.284,
  },
  {
    name: "Cedarhurst",
    lat: 40.6252,
    lng: -73.7278,
  },
  {
    name: "Folcroft",
    lat: 39.8891,
    lng: -75.277,
  },
  {
    name: "Guadalupe",
    lat: 33.3664,
    lng: -111.9633,
  },
  {
    name: "Manorhaven",
    lat: 40.8399,
    lng: -73.7127,
  },
  {
    name: "Paloma Creek South",
    lat: 33.21,
    lng: -96.9327,
  },
  {
    name: "Forest Glen",
    lat: 39.0191,
    lng: -77.0445,
  },
  {
    name: "Bayombong",
    lat: 16.4812,
    lng: 121.1497,
  },
  {
    name: "Notre Dame",
    lat: 41.7014,
    lng: -86.2378,
  },
  {
    name: "Tarxien",
    lat: 35.8658,
    lng: 14.515,
  },
  {
    name: "Preili",
    lat: 56.2942,
    lng: 26.7247,
  },
  {
    name: "Tuckahoe",
    lat: 40.953,
    lng: -73.823,
  },
  {
    name: "Mae Hong Son",
    lat: 19.3011,
    lng: 97.97,
  },
  {
    name: "Jolo",
    lat: 6.0522,
    lng: 121.0022,
  },
  {
    name: "Puerto Baquerizo Moreno",
    lat: -0.9025,
    lng: -89.6092,
  },
  {
    name: "Bongao",
    lat: 5.0292,
    lng: 119.7731,
  },
  {
    name: "West View",
    lat: 40.5182,
    lng: -80.0333,
  },
  {
    name: "Contra Costa Centre",
    lat: 37.9261,
    lng: -122.054,
  },
  {
    name: "Prospect Park",
    lat: 39.8858,
    lng: -75.3074,
  },
  {
    name: "Saranap",
    lat: 37.8878,
    lng: -122.076,
  },
  {
    name: "Ambler",
    lat: 40.1564,
    lng: -75.2215,
  },
  {
    name: "Hewlett",
    lat: 40.6422,
    lng: -73.6942,
  },
  {
    name: "Zarasai",
    lat: 55.7306,
    lng: 26.2472,
  },
  {
    name: "Bronxville",
    lat: 40.9394,
    lng: -73.8263,
  },
  {
    name: "Las Piedras",
    lat: 18.1784,
    lng: -65.8708,
  },
  {
    name: "Sal Rei",
    lat: 16.176,
    lng: -22.9171,
  },
  {
    name: "Jogeva",
    lat: 58.7461,
    lng: 26.3956,
  },
  {
    name: "Balvi",
    lat: 57.1292,
    lng: 27.2667,
  },
  {
    name: "Kingston Estates",
    lat: 39.9188,
    lng: -74.9898,
  },
  {
    name: "Kupiskis",
    lat: 55.8333,
    lng: 24.9667,
  },
  {
    name: "Lakeview",
    lat: 40.6775,
    lng: -73.6493,
  },
  {
    name: "Ghanzi",
    lat: -21.7,
    lng: 21.65,
  },
  {
    name: "Polva",
    lat: 58.0536,
    lng: 27.0556,
  },
  {
    name: "Pleasure Point",
    lat: 36.9618,
    lng: -121.9715,
  },
  {
    name: "Ciudad Guzman",
    lat: 19.7,
    lng: -103.4667,
  },
  {
    name: "Cameron Park",
    lat: 25.9705,
    lng: -97.4775,
  },
  {
    name: "Savannah",
    lat: 33.2257,
    lng: -96.9082,
  },
  {
    name: "Fruitridge Pocket",
    lat: 38.5326,
    lng: -121.4558,
  },
  {
    name: "Espargos",
    lat: 16.7546,
    lng: -22.9453,
  },
  {
    name: "Kennett Square",
    lat: 39.8438,
    lng: -75.7113,
  },
  {
    name: "Santa Isabel",
    lat: 17.9687,
    lng: -66.4049,
  },
  {
    name: "Junik",
    lat: 42.4761,
    lng: 20.2775,
  },
  {
    name: "Siteki",
    lat: -26.45,
    lng: 31.95,
  },
  {
    name: "Schaan",
    lat: 47.1667,
    lng: 9.5167,
  },
  {
    name: "Viqueque",
    lat: -8.85,
    lng: 126.3667,
  },
  {
    name: "Lucea",
    lat: 18.4509,
    lng: -78.1736,
  },
  {
    name: "Rapla",
    lat: 58.9944,
    lng: 24.8011,
  },
  {
    name: "Binghamton University",
    lat: 42.0893,
    lng: -75.9684,
  },
  {
    name: "Arroyo",
    lat: 17.9706,
    lng: -66.0609,
  },
  {
    name: "Bac",
    lat: 45.3886,
    lng: 19.2353,
  },
  {
    name: "Ben Arous",
    lat: 36.7545,
    lng: 10.2217,
  },
  {
    name: "Larchmont",
    lat: 40.9258,
    lng: -73.7529,
  },
  {
    name: "Bogdanci",
    lat: 41.2031,
    lng: 22.5728,
  },
  {
    name: "Kazlu Ruda",
    lat: 54.7492,
    lng: 23.4865,
  },
  {
    name: "Lielvarde",
    lat: 56.7175,
    lng: 24.8106,
  },
  {
    name: "District Heights",
    lat: 38.8588,
    lng: -76.8885,
  },
  {
    name: "Muramvya",
    lat: -3.25,
    lng: 29.6,
  },
  {
    name: "Imsida",
    lat: 35.8925,
    lng: 14.4828,
  },
  {
    name: "Soldanesti",
    lat: 47.8153,
    lng: 28.7967,
  },
  {
    name: "Appenzell",
    lat: 47.3333,
    lng: 9.4167,
  },
  {
    name: "Norwood",
    lat: 39.8865,
    lng: -75.2964,
  },
  {
    name: "Echternach",
    lat: 49.8117,
    lng: 6.4217,
  },
  {
    name: "Jamesburg",
    lat: 40.3494,
    lng: -74.44,
  },
  {
    name: "Ranillug",
    lat: 42.492,
    lng: 21.559,
  },
  {
    name: "Elsmere",
    lat: 39.7385,
    lng: -75.5946,
  },
  {
    name: "Idrija",
    lat: 46.0025,
    lng: 14.0275,
  },
  {
    name: "Hrastnik",
    lat: 46.1461,
    lng: 15.0814,
  },
  {
    name: "McKees Rocks",
    lat: 40.4688,
    lng: -80.063,
  },
  {
    name: "Charlemagne",
    lat: 45.7167,
    lng: -73.4833,
  },
  {
    name: "Prospect Park",
    lat: 40.938,
    lng: -74.1736,
  },
  {
    name: "Naval Academy",
    lat: 38.9859,
    lng: -76.488,
  },
  {
    name: "Lorengau",
    lat: -2.0208,
    lng: 147.2667,
  },
  {
    name: "Mayflower Village",
    lat: 34.116,
    lng: -118.0096,
  },
  {
    name: "Plymouth",
    lat: 41.2404,
    lng: -75.9505,
  },
  {
    name: "Bay Harbor Islands",
    lat: 25.8878,
    lng: -80.1335,
  },
  {
    name: "Tevragh Zeina",
    lat: 18.0989,
    lng: -15.9885,
  },
  {
    name: "Cutler",
    lat: 36.5263,
    lng: -119.2884,
  },
  {
    name: "Santa Venera",
    lat: 35.8908,
    lng: 14.4742,
  },
  {
    name: "White City",
    lat: 40.5666,
    lng: -111.8636,
  },
  {
    name: "Sirvintos",
    lat: 55.0361,
    lng: 24.9694,
  },
  {
    name: "Penn Wynne",
    lat: 39.9867,
    lng: -75.2715,
  },
  {
    name: "Mamushe",
    lat: 42.3167,
    lng: 20.7167,
  },
  {
    name: "Fulin",
    lat: 29.35,
    lng: 102.7167,
  },
  {
    name: "Mount Carmel",
    lat: 40.7959,
    lng: -76.4121,
  },
  {
    name: "Bellevue",
    lat: 39.1011,
    lng: -84.4776,
  },
  {
    name: "South Tucson",
    lat: 32.1955,
    lng: -110.9692,
  },
  {
    name: "Lewisburg",
    lat: 40.9642,
    lng: -76.8901,
  },
  {
    name: "Gospic",
    lat: 44.5469,
    lng: 15.3744,
  },
  {
    name: "Sisimiut",
    lat: 66.9389,
    lng: -53.6722,
  },
  {
    name: "Sharon Hill",
    lat: 39.9075,
    lng: -75.2678,
  },
  {
    name: "Media",
    lat: 39.9198,
    lng: -75.3888,
  },
  {
    name: "New Brighton",
    lat: 40.7355,
    lng: -80.3091,
  },
  {
    name: "Kerema",
    lat: -7.927,
    lng: 145.838,
  },
  {
    name: "Surfside",
    lat: 25.8787,
    lng: -80.125,
  },
  {
    name: "Twin Lakes",
    lat: 36.9646,
    lng: -121.9896,
  },
  {
    name: "Skuodas",
    lat: 56.2667,
    lng: 21.5333,
  },
  {
    name: "Pieta",
    lat: 35.8947,
    lng: 14.495,
  },
  {
    name: "Ta' Xbiex",
    lat: 35.8992,
    lng: 14.4944,
  },
  {
    name: "Rochelle Park",
    lat: 40.9069,
    lng: -74.0791,
  },
  {
    name: "Moletai",
    lat: 55.2333,
    lng: 25.4167,
  },
  {
    name: "Partesh",
    lat: 42.4019,
    lng: 21.4336,
  },
  {
    name: "Salavan",
    lat: 15.7167,
    lng: 106.4167,
  },
  {
    name: "Deer Park",
    lat: 39.2039,
    lng: -84.3977,
  },
  {
    name: "Krusevo",
    lat: 41.37,
    lng: 21.2483,
  },
  {
    name: "Belmar",
    lat: 40.1798,
    lng: -74.0255,
  },
  {
    name: "Caazapa",
    lat: -26.2,
    lng: -56.38,
  },
  {
    name: "Anasco",
    lat: 18.286,
    lng: -67.1411,
  },
  {
    name: "Palm Springs North",
    lat: 25.9351,
    lng: -80.3339,
  },
  {
    name: "Thaba-Tseka",
    lat: -29.5333,
    lng: 28.6,
  },
  {
    name: "Shaw Heights",
    lat: 39.8566,
    lng: -105.039,
  },
  {
    name: "Waipio Acres",
    lat: 21.4689,
    lng: -158.0173,
  },
  {
    name: "Qal`ah-ye Now",
    lat: 34.99,
    lng: 63.12,
  },
  {
    name: "Kensington",
    lat: 37.9084,
    lng: -122.2805,
  },
  {
    name: "Tara Hills",
    lat: 37.9939,
    lng: -122.3188,
  },
  {
    name: "Sakiai",
    lat: 54.9556,
    lng: 23.0444,
  },
  {
    name: "Kaser",
    lat: 41.1214,
    lng: -74.0686,
  },
  {
    name: "L'Epiphanie",
    lat: 45.85,
    lng: -73.4833,
  },
  {
    name: "Kalangala",
    lat: -0.3089,
    lng: 32.225,
  },
  {
    name: "Outapi",
    lat: -17.5028,
    lng: 14.9856,
  },
  {
    name: "South Highpoint",
    lat: 27.9086,
    lng: -82.7162,
  },
  {
    name: "Edgewater",
    lat: 39.7507,
    lng: -105.0626,
  },
  {
    name: "Pale",
    lat: -1.4043,
    lng: 5.6322,
  },
  {
    name: "Smiltene",
    lat: 57.4242,
    lng: 25.9064,
  },
  {
    name: "Shillington",
    lat: 40.3029,
    lng: -75.967,
  },
  {
    name: "Bret Harte",
    lat: 37.6021,
    lng: -121.0045,
  },
  {
    name: "Ros Comain",
    lat: 53.6333,
    lng: -8.1833,
  },
  {
    name: "Campanilla",
    lat: 18.4229,
    lng: -66.2382,
  },
  {
    name: "Broadmoor",
    lat: 37.6914,
    lng: -122.4811,
  },
  {
    name: "Albina",
    lat: 5.5,
    lng: -54.05,
  },
  {
    name: "Albertson",
    lat: 40.7715,
    lng: -73.6482,
  },
  {
    name: "Penuelas",
    lat: 18.0595,
    lng: -66.7206,
  },
  {
    name: "Gzira",
    lat: 35.9058,
    lng: 14.4881,
  },
  {
    name: "Wangdue Phodrang",
    lat: 27.4333,
    lng: 89.9167,
  },
  {
    name: "Pine Manor",
    lat: 26.5727,
    lng: -81.8775,
  },
  {
    name: "Friendship Heights Village",
    lat: 38.9633,
    lng: -77.09,
  },
  {
    name: "Highwood",
    lat: 42.206,
    lng: -87.8128,
  },
  {
    name: "Naguabo",
    lat: 18.2116,
    lng: -65.737,
  },
  {
    name: "Manouba",
    lat: 36.8101,
    lng: 10.0956,
  },
  {
    name: "West Loch Estate",
    lat: 21.3617,
    lng: -158.0246,
  },
  {
    name: "Kanifing",
    lat: 13.4464,
    lng: -16.6744,
  },
  {
    name: "Liquica",
    lat: -8.5935,
    lng: 125.3273,
  },
  {
    name: "Glendale",
    lat: 39.7036,
    lng: -104.9352,
  },
  {
    name: "Turtle Creek",
    lat: 40.4085,
    lng: -79.8214,
  },
  {
    name: "Silale",
    lat: 55.4917,
    lng: 22.1778,
  },
  {
    name: "Gadabay",
    lat: 40.5656,
    lng: 45.8161,
  },
  {
    name: "Kenneth City",
    lat: 27.8155,
    lng: -82.7162,
  },
  {
    name: "South Pasadena",
    lat: 27.7526,
    lng: -82.7394,
  },
  {
    name: "Mayfair",
    lat: 36.7693,
    lng: -119.7612,
  },
  {
    name: "Ilulissat",
    lat: 69.2167,
    lng: -51.1,
  },
  {
    name: "Montreal-Ouest",
    lat: 45.4536,
    lng: -73.6472,
  },
  {
    name: "Mechanicville",
    lat: 42.9037,
    lng: -73.6895,
  },
  {
    name: "Punta Gorda",
    lat: 16.1,
    lng: -88.8,
  },
  {
    name: "Punakha",
    lat: 27.6167,
    lng: 89.8667,
  },
  {
    name: "Aibak",
    lat: 36.2534,
    lng: 68.0394,
  },
  {
    name: "Bled",
    lat: 46.3667,
    lng: 14.1167,
  },
  {
    name: "Opuwo",
    lat: -18.0607,
    lng: 13.84,
  },
  {
    name: "Kiambu",
    lat: -1.1714,
    lng: 36.8356,
  },
  {
    name: "Nieuw Amsterdam",
    lat: 5.91,
    lng: -55.07,
  },
  {
    name: "Bolama",
    lat: 11.5776,
    lng: -15.4742,
  },
  {
    name: "Irig",
    lat: 45.1011,
    lng: 19.8583,
  },
  {
    name: "Puerto Lempira",
    lat: 15.2653,
    lng: -83.7744,
  },
  {
    name: "Mauren",
    lat: 47.2197,
    lng: 9.5428,
  },
  {
    name: "Klaksvik",
    lat: 62.2375,
    lng: -6.539,
  },
  {
    name: "Bururi",
    lat: -3.9333,
    lng: 29.6167,
  },
  {
    name: "Ta Khmau",
    lat: 11.4833,
    lng: 104.95,
  },
  {
    name: "Coka",
    lat: 45.9389,
    lng: 20.1394,
  },
  {
    name: "Beni Mellal",
    lat: 32.3373,
    lng: -6.3498,
  },
  {
    name: "Hung Yen",
    lat: 20.6464,
    lng: 106.0511,
  },
  {
    name: "Pakruojis",
    lat: 55.9809,
    lng: 23.8551,
  },
  {
    name: "Bradford",
    lat: 53.8,
    lng: -1.75,
  },
  {
    name: "Valka",
    lat: 57.7753,
    lng: 26.0214,
  },
  {
    name: "Bueng Kan",
    lat: 18.3669,
    lng: 103.6552,
  },
  {
    name: "San Gwann",
    lat: 35.9056,
    lng: 14.4761,
  },
  {
    name: "Rumphi",
    lat: -11.0153,
    lng: 33.7722,
  },
  {
    name: "Dravograd",
    lat: 46.59,
    lng: 15.018,
  },
  {
    name: "Valandovo",
    lat: 41.3169,
    lng: 22.5611,
  },
  {
    name: "Svencionys",
    lat: 55.1333,
    lng: 26.1556,
  },
  {
    name: "Trakai",
    lat: 54.6333,
    lng: 24.9333,
  },
  {
    name: "Remich",
    lat: 49.5444,
    lng: 6.3667,
  },
  {
    name: "Isulan",
    lat: 6.6294,
    lng: 124.6051,
  },
  {
    name: "Black River",
    lat: 18.0264,
    lng: -77.8487,
  },
  {
    name: "Tecax",
    lat: 20.2019,
    lng: -89.2881,
  },
  {
    name: "Aizpute",
    lat: 56.7211,
    lng: 21.6017,
  },
  {
    name: "Calheta de Sao Miguel",
    lat: 15.1875,
    lng: -23.5917,
  },
  {
    name: "Bensonville",
    lat: 6.4456,
    lng: -10.6097,
  },
  {
    name: "Al `Aziziyah",
    lat: 32.5308,
    lng: 13.0211,
  },
  {
    name: "Boac",
    lat: 13.4463,
    lng: 121.84,
  },
  {
    name: "Grevenmacher",
    lat: 49.6747,
    lng: 6.4419,
  },
  {
    name: "Kalvarija",
    lat: 54.4147,
    lng: 23.2281,
  },
  {
    name: "San Giljan",
    lat: 35.9184,
    lng: 14.4898,
  },
  {
    name: "Gornja Radgona",
    lat: 46.681,
    lng: 15.9883,
  },
  {
    name: "Tubod",
    lat: 8.0555,
    lng: 123.7904,
  },
  {
    name: "Mamburao",
    lat: 13.2233,
    lng: 120.596,
  },
  {
    name: "Wabag",
    lat: -5.4833,
    lng: 143.7,
  },
  {
    name: "Baldone",
    lat: 56.7425,
    lng: 24.3908,
  },
  {
    name: "Lazdijai",
    lat: 54.2319,
    lng: 23.517,
  },
  {
    name: "Agdam",
    lat: 39.9833,
    lng: 46.9167,
  },
  {
    name: "Kardla",
    lat: 58.9944,
    lng: 22.75,
  },
  {
    name: "Nabunturan",
    lat: 7.6029,
    lng: 125.9629,
  },
  {
    name: "Bugiri",
    lat: 0.5714,
    lng: 33.7417,
  },
  {
    name: "Kaberamaido",
    lat: 1.7389,
    lng: 33.1594,
  },
  {
    name: "Malita",
    lat: 6.415,
    lng: 125.6117,
  },
  {
    name: "Makedonski Brod",
    lat: 41.5133,
    lng: 21.2153,
  },
  {
    name: "Janjanbureh",
    lat: 13.551,
    lng: -14.767,
  },
  {
    name: "Cankuzo",
    lat: -3.2194,
    lng: 30.5528,
  },
  {
    name: "Moroto",
    lat: 2.5403,
    lng: 34.64,
  },
  {
    name: "Gambela",
    lat: 8.25,
    lng: 34.5833,
  },
  {
    name: "Massenya",
    lat: 11.4028,
    lng: 16.17,
  },
  {
    name: "Kandava",
    lat: 57.0364,
    lng: 22.7761,
  },
  {
    name: "Grobina",
    lat: 56.5358,
    lng: 21.1656,
  },
  {
    name: "Vittoriosa",
    lat: 35.8922,
    lng: 14.5183,
  },
  {
    name: "Ankaran",
    lat: 45.5793,
    lng: 13.7379,
  },
  {
    name: "Balzan",
    lat: 35.9003,
    lng: 14.455,
  },
  {
    name: "Thinadhoo",
    lat: 0.5303,
    lng: 72.9967,
  },
  {
    name: "Funadhoo",
    lat: 6.1509,
    lng: 73.2901,
  },
  {
    name: "Cantemir",
    lat: 46.2781,
    lng: 28.2008,
  },
  {
    name: "Bangued",
    lat: 17.5982,
    lng: 120.6155,
  },
  {
    name: "Alibunar",
    lat: 45.0808,
    lng: 20.9658,
  },
  {
    name: "Hartford",
    lat: 43.621,
    lng: -96.9424,
  },
  {
    name: "Rietavas",
    lat: 55.725,
    lng: 21.9278,
  },
  {
    name: "Mambajao",
    lat: 9.2504,
    lng: 124.7156,
  },
  {
    name: "Groningen",
    lat: 5.797,
    lng: -55.481,
  },
  {
    name: "Pehcevo",
    lat: 41.7592,
    lng: 22.8906,
  },
  {
    name: "Qaqortoq",
    lat: 60.7167,
    lng: -46.0333,
  },
  {
    name: "Louang Namtha",
    lat: 20.95,
    lng: 101.4167,
  },
  {
    name: "Kaabong",
    lat: 3.5204,
    lng: 34.12,
  },
  {
    name: "Kulhudhuffushi",
    lat: 6.6223,
    lng: 73.0702,
  },
  {
    name: "Naval",
    lat: 11.5612,
    lng: 124.3952,
  },
  {
    name: "Plavinas",
    lat: 56.6161,
    lng: 25.7217,
  },
  {
    name: "Probistip",
    lat: 41.9936,
    lng: 22.1767,
  },
  {
    name: "Mullingar",
    lat: 53.5333,
    lng: -7.35,
  },
  {
    name: "Aasiaat",
    lat: 68.7097,
    lng: -52.8694,
  },
  {
    name: "Porto Ingles",
    lat: 15.1375,
    lng: -23.2083,
  },
  {
    name: "Cambridge",
    lat: 52.2053,
    lng: 0.1192,
  },
  {
    name: "Lethem",
    lat: 3.3833,
    lng: -59.8,
  },
  {
    name: "Dhihdhoo",
    lat: 6.8874,
    lng: 73.114,
  },
  {
    name: "Balaka",
    lat: -14.9889,
    lng: 34.9591,
  },
  {
    name: "Mosta",
    lat: 35.9092,
    lng: 14.4256,
  },
  {
    name: "Mabaruma",
    lat: 8.2,
    lng: -59.7833,
  },
  {
    name: "Mandalgovi",
    lat: 45.7667,
    lng: 106.2708,
  },
  {
    name: "Vilani",
    lat: 56.5528,
    lng: 26.9253,
  },
  {
    name: "Saulkrasti",
    lat: 57.2636,
    lng: 24.4164,
  },
  {
    name: "Lendava",
    lat: 46.5662,
    lng: 16.4499,
  },
  {
    name: "Kudahuvadhoo",
    lat: 2.6717,
    lng: 72.8936,
  },
  {
    name: "Kapchorwa",
    lat: 1.3965,
    lng: 34.4509,
  },
  {
    name: "Sao Domingos",
    lat: 15.025,
    lng: -23.5625,
  },
  {
    name: "Rujiena",
    lat: 57.8969,
    lng: 25.3261,
  },
  {
    name: "Arima",
    lat: 10.6374,
    lng: -61.2823,
  },
  {
    name: "Novo Selo",
    lat: 41.4128,
    lng: 22.88,
  },
  {
    name: "Rasdhoo",
    lat: 4.2631,
    lng: 72.9919,
  },
  {
    name: "Kerewan",
    lat: 13.494,
    lng: -16.095,
  },
  {
    name: "Koknese",
    lat: 56.65,
    lng: 25.4333,
  },
  {
    name: "Kolonia",
    lat: 6.9639,
    lng: 158.2083,
  },
  {
    name: "Zabbar",
    lat: 35.8761,
    lng: 14.535,
  },
  {
    name: "Broceni",
    lat: 56.6833,
    lng: 22.5664,
  },
  {
    name: "Al Wakrah",
    lat: 25.18,
    lng: 51.61,
  },
  {
    name: "Tallaght",
    lat: 53.2878,
    lng: -6.3411,
  },
  {
    name: "Barclayville",
    lat: 4.8,
    lng: -8.1667,
  },
  {
    name: "Salacgriva",
    lat: 57.7494,
    lng: 24.3586,
  },
  {
    name: "Floriana",
    lat: 35.8958,
    lng: 14.5083,
  },
  {
    name: "Swieqi",
    lat: 35.9225,
    lng: 14.48,
  },
  {
    name: "Skofja Loka",
    lat: 46.1655,
    lng: 14.3064,
  },
  {
    name: "Iba",
    lat: 15.3276,
    lng: 119.978,
  },
  {
    name: "Kllokot",
    lat: 42.3667,
    lng: 21.3833,
  },
  {
    name: "Cestos City",
    lat: 5.4697,
    lng: -9.5817,
  },
  {
    name: "Bundibugyo",
    lat: 0.7085,
    lng: 30.0634,
  },
  {
    name: "Demir Hisar",
    lat: 41.2208,
    lng: 21.2031,
  },
  {
    name: "Garoowe",
    lat: 8.4,
    lng: 48.4833,
  },
  {
    name: "Demir Kapija",
    lat: 41.4114,
    lng: 22.2422,
  },
  {
    name: "Domzale",
    lat: 46.1333,
    lng: 14.6,
  },
  {
    name: "Lingayen",
    lat: 16.0218,
    lng: 120.2319,
  },
  {
    name: "Fuerte Olimpo",
    lat: -21.0696,
    lng: -57.9,
  },
  {
    name: "Birstonas",
    lat: 54.6056,
    lng: 24.0292,
  },
  {
    name: "Akmene",
    lat: 56.3167,
    lng: 22.9,
  },
  {
    name: "Banlung",
    lat: 13.7394,
    lng: 106.9873,
  },
  {
    name: "Phu Ly",
    lat: 20.5453,
    lng: 105.9122,
  },
  {
    name: "Basse-Terre",
    lat: 16,
    lng: -61.7167,
  },
  {
    name: "Nida",
    lat: 55.304,
    lng: 21.0053,
  },
  {
    name: "Wicklow",
    lat: 52.975,
    lng: -6.0494,
  },
  {
    name: "Ilukste",
    lat: 55.9781,
    lng: 26.2967,
  },
  {
    name: "Cospicua",
    lat: 35.8856,
    lng: 14.5275,
  },
  {
    name: "Kalkara",
    lat: 35.8892,
    lng: 14.5328,
  },
  {
    name: "Auce",
    lat: 56.4611,
    lng: 22.8942,
  },
  {
    name: "Romblon",
    lat: 12.5751,
    lng: 122.2708,
  },
  {
    name: "Ravne na Koroskem",
    lat: 46.5437,
    lng: 14.9642,
  },
  {
    name: "Thulusdhoo",
    lat: 4.3742,
    lng: 73.6517,
  },
  {
    name: "Clonmel",
    lat: 52.355,
    lng: -7.7039,
  },
  {
    name: "Wexford",
    lat: 52.3342,
    lng: -6.4575,
  },
  {
    name: "Naklo",
    lat: 46.2749,
    lng: 14.3176,
  },
  {
    name: "Marsaskala",
    lat: 35.8669,
    lng: 14.5619,
  },
  {
    name: "Marka",
    lat: 1.7156,
    lng: 44.7703,
  },
  {
    name: "Viligili",
    lat: 0.7539,
    lng: 73.4353,
  },
  {
    name: "Cidade Velha",
    lat: 14.9167,
    lng: -23.6042,
  },
  {
    name: "Oshakati",
    lat: -17.8,
    lng: 15.6833,
  },
  {
    name: "Priekule",
    lat: 56.4472,
    lng: 21.5933,
  },
  {
    name: "Kegums",
    lat: 56.7444,
    lng: 24.7214,
  },
  {
    name: "Alabel",
    lat: 6.1018,
    lng: 125.2905,
  },
  {
    name: "Chiradzulu",
    lat: -15.7167,
    lng: 35.2,
  },
  {
    name: "Lija",
    lat: 35.9006,
    lng: 14.4464,
  },
  {
    name: "Dagda",
    lat: 56.0947,
    lng: 27.5369,
  },
  {
    name: "Victoria",
    lat: 36.0444,
    lng: 14.2397,
  },
  {
    name: "Bariadi",
    lat: -2.8,
    lng: 33.9833,
  },
  {
    name: "Onverwacht",
    lat: 5.6,
    lng: -55.2,
  },
  {
    name: "Same",
    lat: -9,
    lng: 125.65,
  },
  {
    name: "Hoima",
    lat: 1.4356,
    lng: 31.3436,
  },
  {
    name: "Baler",
    lat: 15.7589,
    lng: 121.5607,
  },
  {
    name: "Zejtun",
    lat: 35.8558,
    lng: 14.5331,
  },
  {
    name: "Geita",
    lat: -2.8714,
    lng: 32.2294,
  },
  {
    name: "Ennis",
    lat: 52.8463,
    lng: -8.9807,
  },
  {
    name: "Ambrolauri",
    lat: 42.5167,
    lng: 43.15,
  },
  {
    name: "Kabarnet",
    lat: 0.4919,
    lng: 35.743,
  },
  {
    name: "Jagodina",
    lat: 43.975,
    lng: 21.2564,
  },
  {
    name: "Mukono",
    lat: 0.3533,
    lng: 32.7553,
  },
  {
    name: "Karsava",
    lat: 56.7867,
    lng: 27.6739,
  },
  {
    name: "Skrunda",
    lat: 56.6756,
    lng: 22.0164,
  },
  {
    name: "Migori",
    lat: -1.0634,
    lng: 34.4731,
  },
  {
    name: "Kerugoya",
    lat: -0.4989,
    lng: 37.2803,
  },
  {
    name: "Siquijor",
    lat: 9.2142,
    lng: 123.515,
  },
  {
    name: "Yumbe",
    lat: 3.4651,
    lng: 31.2469,
  },
  {
    name: "Fontana",
    lat: 36.0375,
    lng: 14.2361,
  },
  {
    name: "Jaunjelgava",
    lat: 56.6175,
    lng: 25.0814,
  },
  {
    name: "Paola",
    lat: 35.8731,
    lng: 14.4989,
  },
  {
    name: "Sihanoukville",
    lat: 10.6333,
    lng: 103.5,
  },
  {
    name: "Buchanan",
    lat: 5.8833,
    lng: -10.05,
  },
  {
    name: "Varaklani",
    lat: 56.6078,
    lng: 26.755,
  },
  {
    name: "Xghajra",
    lat: 35.8856,
    lng: 14.5475,
  },
  {
    name: "La Palma",
    lat: 8.3982,
    lng: -78.1402,
  },
  {
    name: "Hithadhoo",
    lat: -0.6,
    lng: 73.0833,
  },
  {
    name: "Iklin",
    lat: 35.9092,
    lng: 14.4522,
  },
  {
    name: "Slovenske Konjice",
    lat: 46.3362,
    lng: 15.421,
  },
  {
    name: "Vinh Yen",
    lat: 21.31,
    lng: 105.5967,
  },
  {
    name: "Dar Naim",
    lat: 18.0973,
    lng: -15.9327,
  },
  {
    name: "Iten",
    lat: 0.6703,
    lng: 35.5081,
  },
  {
    name: "Veymandoo",
    lat: 2.1878,
    lng: 73.095,
  },
  {
    name: "Mezica",
    lat: 46.5206,
    lng: 14.8536,
  },
  {
    name: "Phalombe",
    lat: -15.8,
    lng: 35.65,
  },
  {
    name: "Nyamira",
    lat: -0.5633,
    lng: 34.9358,
  },
  {
    name: "Machinga",
    lat: -14.9667,
    lng: 35.5167,
  },
  {
    name: "Totness",
    lat: 5.8904,
    lng: -56.32,
  },
  {
    name: "Longford",
    lat: 53.7333,
    lng: -7.8,
  },
  {
    name: "Auki",
    lat: -8.7678,
    lng: 160.6978,
  },
  {
    name: "Kirkop",
    lat: 35.8422,
    lng: 14.4853,
  },
  {
    name: "Trim",
    lat: 53.555,
    lng: -6.7917,
  },
  {
    name: "Felidhoo",
    lat: 3.4718,
    lng: 73.547,
  },
  {
    name: "Aioun",
    lat: 16.6667,
    lng: -9.6167,
  },
  {
    name: "Xuddur",
    lat: 4.12,
    lng: 43.8878,
  },
  {
    name: "Kasaali",
    lat: -0.6167,
    lng: 31.55,
  },
  {
    name: "Kapsabet",
    lat: 0.2,
    lng: 35.1,
  },
  {
    name: "Pembroke",
    lat: 35.9306,
    lng: 14.4764,
  },
  {
    name: "Lubana",
    lat: 56.9017,
    lng: 26.7228,
  },
  {
    name: "Sabac",
    lat: 44.7558,
    lng: 19.6939,
  },
  {
    name: "Nilandhoo",
    lat: 3.0567,
    lng: 72.89,
  },
  {
    name: "Viesite",
    lat: 56.3453,
    lng: 25.5569,
  },
  {
    name: "Kirakira",
    lat: -10.4544,
    lng: 161.9205,
  },
  {
    name: "Kamnik",
    lat: 46.225,
    lng: 14.6097,
  },
  {
    name: "Radlje ob Dravi",
    lat: 46.6149,
    lng: 15.2226,
  },
  {
    name: "Carrick on Shannon",
    lat: 53.9469,
    lng: -8.09,
  },
  {
    name: "Attard",
    lat: 35.8897,
    lng: 14.4425,
  },
  {
    name: "Marsa",
    lat: 35.8792,
    lng: 14.4953,
  },
  {
    name: "Foammulah",
    lat: -0.3,
    lng: 73.4256,
  },
  {
    name: "Bu'aale",
    lat: 1.0833,
    lng: 42.5833,
  },
  {
    name: "Tullamore",
    lat: 53.2667,
    lng: -7.5,
  },
  {
    name: "Zilupe",
    lat: 56.3856,
    lng: 28.1225,
  },
  {
    name: "Fomboni",
    lat: -12.2822,
    lng: 43.7419,
  },
  {
    name: "Grosuplje",
    lat: 45.9551,
    lng: 14.6562,
  },
  {
    name: "Kurunegala",
    lat: 7.4833,
    lng: 80.3667,
  },
  {
    name: "Cesvaine",
    lat: 56.9683,
    lng: 26.3067,
  },
  {
    name: "Xocali",
    lat: 39.9111,
    lng: 46.7892,
  },
  {
    name: "Murang'a",
    lat: -0.721,
    lng: 37.1526,
  },
  {
    name: "Bududa",
    lat: 1.0112,
    lng: 34.3311,
  },
  {
    name: "Lagawe",
    lat: 16.8,
    lng: 121.1192,
  },
  {
    name: "Gharghur",
    lat: 35.9242,
    lng: 14.4519,
  },
  {
    name: "Zebbug",
    lat: 35.8719,
    lng: 14.4411,
  },
  {
    name: "Zagorje",
    lat: 46.1342,
    lng: 14.9942,
  },
  {
    name: "Slovenj Gradec",
    lat: 46.5093,
    lng: 15.079,
  },
  {
    name: "Sotik Post",
    lat: -0.7813,
    lng: 35.3416,
  },
  {
    name: "Gudja",
    lat: 35.8492,
    lng: 14.5031,
  },
  {
    name: "Vreed-en-Hoop",
    lat: 6.8,
    lng: -58.1833,
  },
  {
    name: "Escaldes-Engordany",
    lat: 42.5085,
    lng: 1.5385,
  },
  {
    name: "Gornji Milanovac",
    lat: 44.0212,
    lng: 20.456,
  },
  {
    name: "Relizane",
    lat: 35.7373,
    lng: 0.556,
  },
  {
    name: "Vilaka",
    lat: 57.1842,
    lng: 27.6722,
  },
  {
    name: "Zalec",
    lat: 46.2516,
    lng: 15.1674,
  },
  {
    name: "Litija",
    lat: 46.0565,
    lng: 14.8303,
  },
  {
    name: "Imqabba",
    lat: 35.8461,
    lng: 14.4672,
  },
  {
    name: "Tam Ky",
    lat: 15.5667,
    lng: 108.4833,
  },
  {
    name: "Saint Paul's Bay",
    lat: 35.9483,
    lng: 14.4006,
  },
  {
    name: "Krsko",
    lat: 45.959,
    lng: 15.4922,
  },
  {
    name: "Jesenice",
    lat: 46.4366,
    lng: 14.0602,
  },
  {
    name: "Radovljica",
    lat: 46.3444,
    lng: 14.1744,
  },
  {
    name: "Marsaxlokk",
    lat: 35.8419,
    lng: 14.5431,
  },
  {
    name: "Prevalje",
    lat: 46.5467,
    lng: 14.98,
  },
  {
    name: "Weno",
    lat: 7.4458,
    lng: 151.85,
  },
  {
    name: "Taro",
    lat: -6.7111,
    lng: 156.3972,
  },
  {
    name: "Ghaxaq",
    lat: 35.8489,
    lng: 14.5167,
  },
  {
    name: "Birzebbuga",
    lat: 35.8258,
    lng: 14.5269,
  },
  {
    name: "Zurrieq",
    lat: 35.8311,
    lng: 14.4742,
  },
  {
    name: "Naxxar",
    lat: 35.9136,
    lng: 14.4436,
  },
  {
    name: "Sopiste",
    lat: 41.9547,
    lng: 21.4275,
  },
  {
    name: "Trbovlje",
    lat: 46.155,
    lng: 15.0533,
  },
  {
    name: "Muli",
    lat: 2.9217,
    lng: 73.5811,
  },
  {
    name: "Ar Rayyan",
    lat: 25.2919,
    lng: 51.4244,
  },
  {
    name: "Mazsalaca",
    lat: 57.8667,
    lng: 25.05,
  },
  {
    name: "Wakiso",
    lat: 0.4044,
    lng: 32.4594,
  },
  {
    name: "Ivancna Gorica",
    lat: 45.9383,
    lng: 14.8044,
  },
  {
    name: "Aloja",
    lat: 57.7669,
    lng: 24.8828,
  },
  {
    name: "Strenci",
    lat: 57.6272,
    lng: 25.685,
  },
  {
    name: "Rogaska Slatina",
    lat: 46.2375,
    lng: 15.6397,
  },
  {
    name: "Lyantonde",
    lat: -0.4031,
    lng: 31.1572,
  },
  {
    name: "Ipil",
    lat: 7.7844,
    lng: 122.5861,
  },
  {
    name: "Ain Temouchent",
    lat: 35.2975,
    lng: -1.1404,
  },
  {
    name: "Aregua",
    lat: -25.3125,
    lng: -57.3847,
  },
  {
    name: "Serravalle",
    lat: 43.9683,
    lng: 12.4811,
  },
  {
    name: "Halba",
    lat: 34.5428,
    lng: 36.0797,
  },
  {
    name: "Nenagh",
    lat: 52.8619,
    lng: -8.1967,
  },
  {
    name: "Akniste",
    lat: 56.1622,
    lng: 25.7411,
  },
  {
    name: "Pavilosta",
    lat: 56.8878,
    lng: 21.1842,
  },
  {
    name: "Ligatne",
    lat: 57.2336,
    lng: 25.0397,
  },
  {
    name: "Lasko",
    lat: 46.1563,
    lng: 15.2386,
  },
  {
    name: "Chikwawa",
    lat: -16.035,
    lng: 34.801,
  },
  {
    name: "Kasungu",
    lat: -13.0364,
    lng: 33.4822,
  },
  {
    name: "Safi",
    lat: 35.8331,
    lng: 14.4847,
  },
  {
    name: "Labuan",
    lat: 5.2803,
    lng: 115.2475,
  },
  {
    name: "Lata",
    lat: -10.738,
    lng: 165.8567,
  },
  {
    name: "Pozega",
    lat: 43.85,
    lng: 20.05,
  },
  {
    name: "Imtarfa",
    lat: 35.8933,
    lng: 14.3989,
  },
  {
    name: "Picos",
    lat: 15.0833,
    lng: -23.65,
  },
  {
    name: "Kercem",
    lat: 36.0419,
    lng: 14.2267,
  },
  {
    name: "An Cabhan",
    lat: 53.9908,
    lng: -7.3606,
  },
  {
    name: "Fonadhoo",
    lat: 1.8342,
    lng: 73.5031,
  },
  {
    name: "Zirovnica",
    lat: 46.4047,
    lng: 14.14,
  },
  {
    name: "Manadhoo",
    lat: 5.7669,
    lng: 73.4136,
  },
  {
    name: "Ribeira Grande",
    lat: 17.1825,
    lng: -25.065,
  },
  {
    name: "Ponta do Sol",
    lat: 17.2014,
    lng: -25.0917,
  },
  {
    name: "Krupanj",
    lat: 44.3656,
    lng: 19.3619,
  },
  {
    name: "Lebane",
    lat: 42.9167,
    lng: 21.7333,
  },
  {
    name: "Store",
    lat: 46.2208,
    lng: 15.3139,
  },
  {
    name: "Siaya",
    lat: 0.0607,
    lng: 34.2881,
  },
  {
    name: "Ape",
    lat: 57.5392,
    lng: 26.6928,
  },
  {
    name: "Cerklje na Gorenjskem",
    lat: 46.2542,
    lng: 14.4886,
  },
  {
    name: "Isale",
    lat: -3.3444,
    lng: 29.4833,
  },
  {
    name: "Sostanj",
    lat: 46.38,
    lng: 15.0486,
  },
  {
    name: "Dien Bien Phu",
    lat: 21.3833,
    lng: 103.0169,
  },
  {
    name: "P'yongsong",
    lat: 39.2464,
    lng: 125.8719,
  },
  {
    name: "Luqa",
    lat: 35.8589,
    lng: 14.4886,
  },
  {
    name: "Scarborough",
    lat: 11.1811,
    lng: -60.7333,
  },
  {
    name: "Diego Martin",
    lat: 10.7208,
    lng: -61.5662,
  },
  {
    name: "Vladicin Han",
    lat: 42.7,
    lng: 22.0667,
  },
  {
    name: "Knjazevac",
    lat: 43.5,
    lng: 22.4333,
  },
  {
    name: "Basco",
    lat: 20.4486,
    lng: 121.9702,
  },
  {
    name: "Ljubovija",
    lat: 44.1896,
    lng: 19.3785,
  },
  {
    name: "Slovenska Bistrica",
    lat: 46.3941,
    lng: 15.5707,
  },
  {
    name: "Smederevska Palanka",
    lat: 44.3655,
    lng: 20.9587,
  },
  {
    name: "Mahonda",
    lat: -5.9897,
    lng: 39.2519,
  },
  {
    name: "Mali Zvornik",
    lat: 44.3992,
    lng: 19.1214,
  },
  {
    name: "Point Fortin",
    lat: 10.1741,
    lng: -61.6841,
  },
  {
    name: "Port Laoise",
    lat: 53.0309,
    lng: -7.3008,
  },
  {
    name: "Surdulica",
    lat: 42.695,
    lng: 22.1672,
  },
  {
    name: "Pozarevac",
    lat: 44.62,
    lng: 21.1897,
  },
  {
    name: "Mayuge",
    lat: 0.4578,
    lng: 33.4806,
  },
  {
    name: "Varazdin",
    lat: 46.3,
    lng: 16.3333,
  },
  {
    name: "Shariff Aguak",
    lat: 6.8647,
    lng: 124.4417,
  },
  {
    name: "Zajecar",
    lat: 43.9042,
    lng: 22.2847,
  },
  {
    name: "Lakatoro",
    lat: -16.1069,
    lng: 167.4208,
  },
  {
    name: "Sentjur",
    lat: 46.2225,
    lng: 15.3973,
  },
  {
    name: "Al Khawr",
    lat: 25.6839,
    lng: 51.5058,
  },
  {
    name: "Dowa",
    lat: -13.6532,
    lng: 33.9385,
  },
  {
    name: "Castlebar",
    lat: 53.85,
    lng: -9.3,
  },
  {
    name: "Ain Defla",
    lat: 36.2641,
    lng: 1.9679,
  },
  {
    name: "Madaba",
    lat: 31.7167,
    lng: 35.8,
  },
  {
    name: "Selibaby",
    lat: 15.167,
    lng: -12.1833,
  },
  {
    name: "Cabarroguis",
    lat: 16.5111,
    lng: 121.5212,
  },
  {
    name: "Asaba",
    lat: 6.1833,
    lng: 6.75,
  },
  {
    name: "Prebold",
    lat: 46.2369,
    lng: 15.0925,
  },
  {
    name: "Tulagi",
    lat: -9.1031,
    lng: 160.1506,
  },
  {
    name: "Miklavz na Dravskem Polju",
    lat: 46.5058,
    lng: 15.6972,
  },
  {
    name: "Jordan",
    lat: 10.6584,
    lng: 122.5963,
  },
  {
    name: "Aranguez",
    lat: 10.6472,
    lng: -61.4461,
  },
  {
    name: "Sempeter pri Gorici",
    lat: 45.9283,
    lng: 13.6378,
  },
  {
    name: "Mozirje",
    lat: 46.3394,
    lng: 14.9633,
  },
  {
    name: "Rumonge",
    lat: -3.9736,
    lng: 29.4386,
  },
  {
    name: "Trebnje",
    lat: 45.9104,
    lng: 15.0086,
  },
  {
    name: "Paracin",
    lat: 43.8667,
    lng: 21.4167,
  },
  {
    name: "Bulambuli",
    lat: 1.1667,
    lng: 34.3833,
  },
  {
    name: "Borgo Maggiore",
    lat: 43.9408,
    lng: 12.4475,
  },
  {
    name: "Maracha",
    lat: 3.2704,
    lng: 30.9553,
  },
  {
    name: "Luwero",
    lat: 0.8492,
    lng: 32.4731,
  },
  {
    name: "Kapenguria",
    lat: 1.2389,
    lng: 35.1119,
  },
  {
    name: "Polzela",
    lat: 46.2833,
    lng: 15.0667,
  },
  {
    name: "Yenagoa",
    lat: 4.9267,
    lng: 6.2676,
  },
  {
    name: "Qrendi",
    lat: 35.8347,
    lng: 14.4583,
  },
  {
    name: "Namayingo",
    lat: 0.2398,
    lng: 33.8849,
  },
  {
    name: "Xewkija",
    lat: 36.0328,
    lng: 14.2581,
  },
  {
    name: "Lucani",
    lat: 43.8667,
    lng: 20.1333,
  },
  {
    name: "Brezice",
    lat: 45.9044,
    lng: 15.5925,
  },
  {
    name: "Suong",
    lat: 11.9167,
    lng: 105.65,
  },
  {
    name: "Ghasri",
    lat: 36.0578,
    lng: 14.2264,
  },
  {
    name: "Gllogovc",
    lat: 42.5872,
    lng: 20.8206,
  },
  {
    name: "Kocevje",
    lat: 45.643,
    lng: 14.8594,
  },
  {
    name: "Smederevo",
    lat: 44.6633,
    lng: 20.9289,
  },
  {
    name: "Dong Xoai",
    lat: 11.5349,
    lng: 106.8832,
  },
  {
    name: "Mila",
    lat: 36.4503,
    lng: 6.2644,
  },
  {
    name: "Al Buraymi",
    lat: 24.2558,
    lng: 55.8025,
  },
  {
    name: "Bontoc",
    lat: 17.0899,
    lng: 120.978,
  },
  {
    name: "Da Lat",
    lat: 11.9359,
    lng: 108.4429,
  },
  {
    name: "Luuka Town",
    lat: 0.7008,
    lng: 33.3002,
  },
  {
    name: "Dingli",
    lat: 35.8614,
    lng: 14.3822,
  },
  {
    name: "Kabugao",
    lat: 18.0231,
    lng: 121.184,
  },
  {
    name: "Hunedoara",
    lat: 45.75,
    lng: 22.9,
  },
  {
    name: "Spodnje Hoce",
    lat: 46.5,
    lng: 15.65,
  },
  {
    name: "Selnica ob Dravi",
    lat: 46.55,
    lng: 15.495,
  },
  {
    name: "Aleksinac",
    lat: 43.5383,
    lng: 21.7047,
  },
  {
    name: "Despotovac",
    lat: 44.0833,
    lng: 21.4333,
  },
  {
    name: "Jincheng",
    lat: 24.4367,
    lng: 118.3183,
  },
  {
    name: "Smartno",
    lat: 46.0444,
    lng: 14.8442,
  },
  {
    name: "Cibitoke",
    lat: -2.8869,
    lng: 29.1248,
  },
  {
    name: "Medvode",
    lat: 46.1333,
    lng: 14.4333,
  },
  {
    name: "Kibuku",
    lat: 1.0433,
    lng: 33.7975,
  },
  {
    name: "Bupoto",
    lat: 0.9061,
    lng: 34.3578,
  },
  {
    name: "Xaghra",
    lat: 36.05,
    lng: 14.2644,
  },
  {
    name: "Lenart v Slovenskih Goricah",
    lat: 46.5755,
    lng: 15.8306,
  },
  {
    name: "Lai Chau",
    lat: 22.3991,
    lng: 103.4393,
  },
  {
    name: "Neno",
    lat: -15.3981,
    lng: 34.6534,
  },
  {
    name: "Moravce",
    lat: 46.1369,
    lng: 14.745,
  },
  {
    name: "Apac",
    lat: 1.9845,
    lng: 32.534,
  },
  {
    name: "Imdina",
    lat: 35.8869,
    lng: 14.4025,
  },
  {
    name: "Kladovo",
    lat: 44.6039,
    lng: 22.6072,
  },
  {
    name: "Kanal",
    lat: 46.0886,
    lng: 13.6397,
  },
  {
    name: "Nadur",
    lat: 36.0378,
    lng: 14.2942,
  },
  {
    name: "Nazarje",
    lat: 46.3176,
    lng: 14.9467,
  },
  {
    name: "Menges",
    lat: 46.1669,
    lng: 14.575,
  },
  {
    name: "Zrece",
    lat: 46.3833,
    lng: 15.3667,
  },
  {
    name: "Preddvor",
    lat: 46.3025,
    lng: 14.4231,
  },
  {
    name: "Rubirizi",
    lat: -0.2989,
    lng: 30.1336,
  },
  {
    name: "Vuzenica",
    lat: 46.5992,
    lng: 15.1669,
  },
  {
    name: "Vwawa",
    lat: -9.1081,
    lng: 32.9347,
  },
  {
    name: "Vrhnika",
    lat: 45.9622,
    lng: 14.2936,
  },
  {
    name: "Pirot",
    lat: 43.1519,
    lng: 22.585,
  },
  {
    name: "Domagnano",
    lat: 43.9492,
    lng: 12.4686,
  },
  {
    name: "Busesa",
    lat: 0.6263,
    lng: 33.6003,
  },
  {
    name: "Sevnica",
    lat: 46.0092,
    lng: 15.3039,
  },
  {
    name: "Poljcane",
    lat: 46.3119,
    lng: 15.5792,
  },
  {
    name: "Vlasotince",
    lat: 42.9667,
    lng: 22.1333,
  },
  {
    name: "Prosperidad",
    lat: 8.58,
    lng: 125.8964,
  },
  {
    name: "Koani",
    lat: -6.1333,
    lng: 39.2833,
  },
  {
    name: "Dhuusamarreeb",
    lat: 5.5375,
    lng: 46.3875,
  },
  {
    name: "Ziri",
    lat: 46.046,
    lng: 14.1083,
  },
  {
    name: "Smarje",
    lat: 46.2272,
    lng: 15.5192,
  },
  {
    name: "Komenda",
    lat: 46.2038,
    lng: 14.5407,
  },
  {
    name: "Metlika",
    lat: 45.6472,
    lng: 15.3142,
  },
  {
    name: "Sannat",
    lat: 36.0244,
    lng: 14.2428,
  },
  {
    name: "Fada",
    lat: 17.1833,
    lng: 21.5833,
  },
  {
    name: "Vojnik",
    lat: 46.2931,
    lng: 15.3028,
  },
  {
    name: "Skofljica",
    lat: 45.9833,
    lng: 14.5767,
  },
  {
    name: "Brezovica",
    lat: 46.0333,
    lng: 14.4,
  },
  {
    name: "Buala",
    lat: -8.1448,
    lng: 159.5905,
  },
  {
    name: "Buikwe",
    lat: 0.3375,
    lng: 33.0106,
  },
  {
    name: "Kagadi",
    lat: 0.9378,
    lng: 30.8089,
  },
  {
    name: "Muta",
    lat: 46.6114,
    lng: 15.1661,
  },
  {
    name: "Radenci",
    lat: 46.6472,
    lng: 16.0442,
  },
  {
    name: "Log",
    lat: 46.0167,
    lng: 14.3667,
  },
  {
    name: "Eschen",
    lat: 47.2109,
    lng: 9.5216,
  },
  {
    name: "Colonia",
    lat: 9.5144,
    lng: 138.1292,
  },
  {
    name: "Spodnji Duplek",
    lat: 46.5031,
    lng: 15.7453,
  },
  {
    name: "Bushenyi",
    lat: -0.5853,
    lng: 30.2114,
  },
  {
    name: "Waitangi",
    lat: -43.951,
    lng: -176.561,
  },
  {
    name: "Schellenberg",
    lat: 47.2283,
    lng: 9.5395,
  },
  {
    name: "Eenhana",
    lat: -17.4667,
    lng: 16.3333,
  },
  {
    name: "Acquaviva",
    lat: 43.9453,
    lng: 12.4183,
  },
  {
    name: "Siggiewi",
    lat: 35.8556,
    lng: 14.4364,
  },
  {
    name: "Kon Tum",
    lat: 14.3417,
    lng: 107.9792,
  },
  {
    name: "Rabat",
    lat: 35.8822,
    lng: 14.3981,
  },
  {
    name: "Ash Shihaniyah",
    lat: 25.3709,
    lng: 51.2226,
  },
  {
    name: "Borovnica",
    lat: 45.918,
    lng: 14.3642,
  },
  {
    name: "Kaliro",
    lat: 0.8949,
    lng: 33.5048,
  },
  {
    name: "Ljutomer",
    lat: 46.5208,
    lng: 16.1975,
  },
  {
    name: "Aracinovo",
    lat: 42.0264,
    lng: 21.5619,
  },
  {
    name: "Prokuplje",
    lat: 43.2339,
    lng: 21.5861,
  },
  {
    name: "Batocina",
    lat: 44.15,
    lng: 21.0833,
  },
  {
    name: "Afega",
    lat: -13.7973,
    lng: -171.8531,
  },
  {
    name: "Mellieha",
    lat: 35.9564,
    lng: 14.3622,
  },
  {
    name: "Umm Salal `Ali",
    lat: 25.4697,
    lng: 51.3975,
  },
  {
    name: "Aileu",
    lat: -8.7281,
    lng: 125.5664,
  },
  {
    name: "Oplotnica",
    lat: 46.3878,
    lng: 15.4467,
  },
  {
    name: "Fiorentino",
    lat: 43.9092,
    lng: 12.4581,
  },
  {
    name: "Butebo",
    lat: 1.1942,
    lng: 33.9222,
  },
  {
    name: "Akjoujt",
    lat: 19.747,
    lng: -14.391,
  },
  {
    name: "Namutumba",
    lat: 0.8363,
    lng: 33.6858,
  },
  {
    name: "Debe",
    lat: 10.2,
    lng: -61.45,
  },
  {
    name: "Miragoane",
    lat: 18.4411,
    lng: -73.0883,
  },
  {
    name: "Lukovica",
    lat: 46.1667,
    lng: 14.7,
  },
  {
    name: "Dogbo",
    lat: 6.8167,
    lng: 1.7833,
  },
  {
    name: "Smartno",
    lat: 46.3333,
    lng: 15.0333,
  },
  {
    name: "Abakaliki",
    lat: 6.3249,
    lng: 8.1137,
  },
  {
    name: "Manafwa",
    lat: 0.9784,
    lng: 34.3743,
  },
  {
    name: "Dimitrovgrad",
    lat: 43.0167,
    lng: 22.7833,
  },
  {
    name: "Sencur",
    lat: 46.2456,
    lng: 14.4197,
  },
  {
    name: "Ibanda",
    lat: -0.1539,
    lng: 30.5319,
  },
  {
    name: "Mirna",
    lat: 45.9553,
    lng: 15.0619,
  },
  {
    name: "Race",
    lat: 46.4519,
    lng: 15.6814,
  },
  {
    name: "Lelystad",
    lat: 52.5176,
    lng: 5.474,
  },
  {
    name: "Crnomelj",
    lat: 45.5711,
    lng: 15.1889,
  },
  {
    name: "Wote",
    lat: -1.7808,
    lng: 37.6288,
  },
  {
    name: "Mwatate",
    lat: -3.505,
    lng: 38.3772,
  },
  {
    name: "Vitanje",
    lat: 46.3817,
    lng: 15.2958,
  },
  {
    name: "Munxar",
    lat: 36.03,
    lng: 14.2333,
  },
  {
    name: "Doljevac",
    lat: 43.1968,
    lng: 21.8334,
  },
  {
    name: "Rukungiri",
    lat: -0.8411,
    lng: 29.9419,
  },
  {
    name: "Ghajnsielem",
    lat: 36.0264,
    lng: 14.285,
  },
  {
    name: "Lifford",
    lat: 54.8356,
    lng: -7.4779,
  },
  {
    name: "Isangel",
    lat: -19.5417,
    lng: 169.2817,
  },
  {
    name: "Koprivnica",
    lat: 46.15,
    lng: 16.8167,
  },
  {
    name: "Toftir",
    lat: 62.0978,
    lng: -6.7369,
  },
  {
    name: "Gombe",
    lat: 0.1818,
    lng: 32.1158,
  },
  {
    name: "Sentjernej",
    lat: 45.84,
    lng: 15.3361,
  },
  {
    name: "Montegiardino",
    lat: 43.9092,
    lng: 12.4833,
  },
  {
    name: "Kyenjojo",
    lat: 0.6328,
    lng: 30.6214,
  },
  {
    name: "`Ajlun",
    lat: 32.3325,
    lng: 35.7517,
  },
  {
    name: "Velika Plana",
    lat: 44.3333,
    lng: 21.0833,
  },
  {
    name: "Az Za`ayin",
    lat: 25.5774,
    lng: 51.4831,
  },
  {
    name: "Qala",
    lat: 36.0361,
    lng: 14.3094,
  },
  {
    name: "Al Jabin",
    lat: 14.704,
    lng: 43.599,
  },
  {
    name: "Mitoma",
    lat: -0.6842,
    lng: 30.07,
  },
  {
    name: "Kalungu",
    lat: -0.1667,
    lng: 31.7569,
  },
  {
    name: "Brvenica",
    lat: 41.9672,
    lng: 20.9808,
  },
  {
    name: "Svilajnac",
    lat: 44.2167,
    lng: 21.2,
  },
  {
    name: "Ad Dali`",
    lat: 13.6957,
    lng: 44.7314,
  },
  {
    name: "Santa Cruz",
    lat: 14.1167,
    lng: 121.2833,
  },
  {
    name: "Santa Lucija",
    lat: 36.0431,
    lng: 14.2172,
  },
  {
    name: "Majsperk",
    lat: 46.3517,
    lng: 15.7336,
  },
  {
    name: "Bukomansimbi",
    lat: -0.1578,
    lng: 31.6042,
  },
  {
    name: "Svrljig",
    lat: 43.4167,
    lng: 22.1167,
  },
  {
    name: "Horjul",
    lat: 46.0236,
    lng: 14.2992,
  },
  {
    name: "Postojna",
    lat: 45.7743,
    lng: 14.2153,
  },
  {
    name: "Luce",
    lat: 46.3561,
    lng: 14.7467,
  },
  {
    name: "Spodnja Hajdina",
    lat: 46.4089,
    lng: 15.8469,
  },
  {
    name: "Nelspruit",
    lat: -25.4745,
    lng: 30.9703,
  },
  {
    name: "Sid",
    lat: 45.1283,
    lng: 19.2264,
  },
  {
    name: "Negotin",
    lat: 44.2167,
    lng: 22.5167,
  },
  {
    name: "Kajiado",
    lat: -1.85,
    lng: 36.7833,
  },
  {
    name: "Vodice",
    lat: 46.2,
    lng: 14.5,
  },
  {
    name: "Rubanda",
    lat: -1.1883,
    lng: 29.8461,
  },
  {
    name: "Dapaong",
    lat: 10.8623,
    lng: 0.2076,
  },
  {
    name: "Pivka",
    lat: 45.6794,
    lng: 14.1967,
  },
  {
    name: "Braslovce",
    lat: 46.2897,
    lng: 15.0389,
  },
  {
    name: "Butaleja",
    lat: 0.9166,
    lng: 33.9563,
  },
  {
    name: "Sakete",
    lat: 6.7362,
    lng: 2.6587,
  },
  {
    name: "Tivat",
    lat: 42.43,
    lng: 18.7,
  },
  {
    name: "Lovrenc na Pohorju",
    lat: 46.5406,
    lng: 15.3931,
  },
  {
    name: "Ruggell",
    lat: 47.245,
    lng: 9.5332,
  },
  {
    name: "Crna na Koroskem",
    lat: 46.4667,
    lng: 14.85,
  },
  {
    name: "Pesnica",
    lat: 46.6069,
    lng: 15.6767,
  },
  {
    name: "Serere",
    lat: 1.518,
    lng: 33.4589,
  },
  {
    name: "Cerknica",
    lat: 45.7964,
    lng: 14.3581,
  },
  {
    name: "Amuria",
    lat: 2.0036,
    lng: 33.6511,
  },
  {
    name: "Gamprin",
    lat: 47.2199,
    lng: 9.5099,
  },
  {
    name: "Kenge",
    lat: -4.8296,
    lng: 16.8999,
  },
  {
    name: "Nsiika",
    lat: -0.3831,
    lng: 30.465,
  },
  {
    name: "Bojnik",
    lat: 43.0142,
    lng: 21.718,
  },
  {
    name: "Kibiito",
    lat: 0.4772,
    lng: 30.1925,
  },
  {
    name: "Kibingo",
    lat: -0.626,
    lng: 30.4359,
  },
  {
    name: "Capellen",
    lat: 49.6444,
    lng: 5.9897,
  },
  {
    name: "Bukedea",
    lat: 1.3169,
    lng: 34.0506,
  },
  {
    name: "Dobrna",
    lat: 46.3375,
    lng: 15.2264,
  },
  {
    name: "Samraong",
    lat: 14.1817,
    lng: 103.5176,
  },
  {
    name: "Ntara",
    lat: 0.0044,
    lng: 30.3658,
  },
  {
    name: "Wiltz",
    lat: 49.9689,
    lng: 5.9319,
  },
  {
    name: "Binyin",
    lat: 1.4167,
    lng: 34.5333,
  },
  {
    name: "Sentilj",
    lat: 46.6817,
    lng: 15.6481,
  },
  {
    name: "Kaedi",
    lat: 16.1503,
    lng: -13.5037,
  },
  {
    name: "Vransko",
    lat: 46.2439,
    lng: 14.9514,
  },
  {
    name: "Lubango",
    lat: -14.9167,
    lng: 13.5,
  },
  {
    name: "Sentrupert",
    lat: 45.9778,
    lng: 15.0956,
  },
  {
    name: "Mparo",
    lat: -1.1647,
    lng: 30.0378,
  },
  {
    name: "Odranci",
    lat: 46.5833,
    lng: 16.2833,
  },
  {
    name: "Kinoni",
    lat: -0.6583,
    lng: 30.4581,
  },
  {
    name: "Ol Kalou",
    lat: -0.2643,
    lng: 36.3788,
  },
  {
    name: "Logatec",
    lat: 45.9144,
    lng: 14.2258,
  },
  {
    name: "Kole",
    lat: 2.4002,
    lng: 32.8003,
  },
  {
    name: "Trzic",
    lat: 46.3667,
    lng: 14.3167,
  },
  {
    name: "Zebbug",
    lat: 36.0722,
    lng: 14.2358,
  },
  {
    name: "Bohinjska Bistrica",
    lat: 46.2769,
    lng: 13.955,
  },
  {
    name: "Zombo",
    lat: 2.5135,
    lng: 30.9091,
  },
  {
    name: "Narok",
    lat: -1.0833,
    lng: 35.8667,
  },
  {
    name: "Rakai",
    lat: -0.72,
    lng: 31.4839,
  },
  {
    name: "Encamp",
    lat: 42.5167,
    lng: 1.5667,
  },
  {
    name: "Lwengo",
    lat: -0.4161,
    lng: 31.4081,
  },
  {
    name: "Trzin",
    lat: 46.1333,
    lng: 14.5667,
  },
  {
    name: "Recica",
    lat: 46.3167,
    lng: 14.9167,
  },
  {
    name: "Heydarabad",
    lat: 39.7229,
    lng: 44.8485,
  },
  {
    name: "Gorisnica",
    lat: 46.4147,
    lng: 16.0139,
  },
  {
    name: "Imgarr",
    lat: 35.9206,
    lng: 14.3664,
  },
  {
    name: "Bukwo",
    lat: 1.3,
    lng: 34.75,
  },
  {
    name: "Omuthiya",
    lat: -18.3592,
    lng: 16.5795,
  },
  {
    name: "Volcja Draga",
    lat: 45.9069,
    lng: 13.6775,
  },
  {
    name: "Kasanda",
    lat: 0.5567,
    lng: 31.8022,
  },
  {
    name: "Dokolo",
    lat: 1.9167,
    lng: 33.172,
  },
  {
    name: "Dornava",
    lat: 46.4367,
    lng: 15.9536,
  },
  {
    name: "Leulumoega",
    lat: -13.823,
    lng: -171.9613,
  },
  {
    name: "Koronadal",
    lat: 6.2541,
    lng: 124.9922,
  },
  {
    name: "Beltinci",
    lat: 46.6053,
    lng: 16.2406,
  },
  {
    name: "Topola",
    lat: 44.2525,
    lng: 20.6761,
  },
  {
    name: "Bogovinje",
    lat: 41.9236,
    lng: 20.9136,
  },
  {
    name: "Balzers",
    lat: 47.0667,
    lng: 9.5025,
  },
  {
    name: "Kamwenge",
    lat: 0.2111,
    lng: 30.4208,
  },
  {
    name: "Zelezniki",
    lat: 46.2333,
    lng: 14.1667,
  },
  {
    name: "Ngora",
    lat: 1.4314,
    lng: 33.7772,
  },
  {
    name: "Kara",
    lat: 9.5511,
    lng: 1.1861,
  },
  {
    name: "Dol",
    lat: 46.0886,
    lng: 14.6008,
  },
  {
    name: "Ig",
    lat: 45.9603,
    lng: 14.5289,
  },
  {
    name: "Techiman",
    lat: 7.5905,
    lng: -1.9395,
  },
  {
    name: "Guadalupe",
    lat: 0.3792,
    lng: 6.6375,
  },
  {
    name: "Alebtong",
    lat: 2.2447,
    lng: 33.2547,
  },
  {
    name: "Brcko",
    lat: 44.8783,
    lng: 18.8092,
  },
  {
    name: "Gorenja Vas",
    lat: 46.1072,
    lng: 14.1481,
  },
  {
    name: "Pante Macassar",
    lat: -9.2,
    lng: 124.3833,
  },
  {
    name: "Gharb",
    lat: 36.06,
    lng: 14.2089,
  },
  {
    name: "Cerkno",
    lat: 46.1256,
    lng: 13.9817,
  },
  {
    name: "Suai",
    lat: -9.3129,
    lng: 125.2565,
  },
  {
    name: "Lospalos",
    lat: -8.5167,
    lng: 127.0333,
  },
  {
    name: "Stari Trg",
    lat: 45.7128,
    lng: 14.4694,
  },
  {
    name: "Chiesanuova",
    lat: 43.9061,
    lng: 12.4214,
  },
  {
    name: "Sveti Jurij",
    lat: 46.5695,
    lng: 16.0235,
  },
  {
    name: "Pombas",
    lat: 17.1503,
    lng: -25.0201,
  },
  {
    name: "Videm",
    lat: 45.85,
    lng: 14.6942,
  },
  {
    name: "Kanungu",
    lat: -0.9575,
    lng: 29.7897,
  },
  {
    name: "Ljubno",
    lat: 46.3456,
    lng: 14.835,
  },
  {
    name: "Ulbroka",
    lat: 56.9363,
    lng: 24.3039,
  },
  {
    name: "Straza",
    lat: 45.78,
    lng: 15.0728,
  },
  {
    name: "Kanoni",
    lat: 0.1772,
    lng: 31.8811,
  },
  {
    name: "Kokopo",
    lat: -4.35,
    lng: 152.2736,
  },
  {
    name: "Oranjestad",
    lat: 17.4817,
    lng: -62.9831,
  },
  {
    name: "Sejong",
    lat: 36.6092,
    lng: 127.2919,
  },
  {
    name: "Tisina",
    lat: 46.6556,
    lng: 16.0933,
  },
  {
    name: "Ramotswa",
    lat: -24.8667,
    lng: 25.8167,
  },
  {
    name: "Mulifanua",
    lat: -13.8318,
    lng: -172.036,
  },
  {
    name: "Smarjeske Toplice",
    lat: 45.862,
    lng: 15.2231,
  },
  {
    name: "Vrapciste",
    lat: 41.8344,
    lng: 20.8856,
  },
  {
    name: "Kidricevo",
    lat: 46.4036,
    lng: 15.7911,
  },
  {
    name: "Semic",
    lat: 45.6461,
    lng: 15.1822,
  },
  {
    name: "Oyam",
    lat: 2.2141,
    lng: 32.3703,
  },
  {
    name: "Pozega",
    lat: 45.3314,
    lng: 17.6744,
  },
  {
    name: "Ilinden",
    lat: 41.9945,
    lng: 21.58,
  },
  {
    name: "Starse",
    lat: 46.4658,
    lng: 15.7672,
  },
  {
    name: "Dobrovo",
    lat: 45.9964,
    lng: 13.5264,
  },
  {
    name: "Turnisce",
    lat: 46.6278,
    lng: 16.3203,
  },
  {
    name: "Gia Nghia",
    lat: 12.0042,
    lng: 107.6907,
  },
  {
    name: "Blace",
    lat: 43.2906,
    lng: 21.2847,
  },
  {
    name: "La Massana",
    lat: 42.5434,
    lng: 1.5148,
  },
  {
    name: "Tabor",
    lat: 46.2361,
    lng: 15.0183,
  },
  {
    name: "Saltangara",
    lat: 62.1156,
    lng: -6.7206,
  },
  {
    name: "Krizevci",
    lat: 46.5683,
    lng: 16.1386,
  },
  {
    name: "Siparia",
    lat: 10.1453,
    lng: -61.5074,
  },
  {
    name: "Tutong",
    lat: 4.8028,
    lng: 114.6492,
  },
  {
    name: "Sembabule",
    lat: -0.0772,
    lng: 31.4567,
  },
  {
    name: "Vianden",
    lat: 49.935,
    lng: 6.2089,
  },
  {
    name: "Tsirang",
    lat: 27.0219,
    lng: 90.1229,
  },
  {
    name: "Kakumiro",
    lat: 0.7806,
    lng: 31.3236,
  },
  {
    name: "Pailin",
    lat: 12.8489,
    lng: 102.6093,
  },
  {
    name: "Petrovec",
    lat: 41.9389,
    lng: 21.615,
  },
  {
    name: "Sveta Trojica v Slovenskih Goricah",
    lat: 46.5767,
    lng: 15.8769,
  },
  {
    name: "Sveta Ana",
    lat: 46.6492,
    lng: 15.8442,
  },
  {
    name: "Tolmin",
    lat: 46.1864,
    lng: 13.7361,
  },
  {
    name: "Rabak",
    lat: 13.188,
    lng: 32.7437,
  },
  {
    name: "Princes Town",
    lat: 10.2718,
    lng: -61.371,
  },
  {
    name: "Tarrafal",
    lat: 16.5667,
    lng: -24.3556,
  },
  {
    name: "Triesen",
    lat: 47.11,
    lng: 9.5239,
  },
  {
    name: "Benedikt",
    lat: 46.6086,
    lng: 15.8883,
  },
  {
    name: "Studenicani",
    lat: 41.9158,
    lng: 21.5306,
  },
  {
    name: "Sant Julia de Loria",
    lat: 42.4664,
    lng: 1.4933,
  },
  {
    name: "Faetano",
    lat: 43.9261,
    lng: 12.4981,
  },
  {
    name: "Buyende",
    lat: 1.1517,
    lng: 33.155,
  },
  {
    name: "Joao Teves",
    lat: 15.0669,
    lng: -23.5892,
  },
  {
    name: "Santana",
    lat: 0.26,
    lng: 6.7414,
  },
  {
    name: "Kalaki",
    lat: 1.816,
    lng: 33.337,
  },
  {
    name: "Kwale",
    lat: -4.1737,
    lng: 39.4521,
  },
  {
    name: "Isingiro",
    lat: -0.8686,
    lng: 30.8302,
  },
  {
    name: "Apatin",
    lat: 45.6667,
    lng: 18.9833,
  },
  {
    name: "Marupe",
    lat: 56.9032,
    lng: 24.0467,
  },
  {
    name: "Kyegegwa",
    lat: 0.5022,
    lng: 31.0414,
  },
  {
    name: "San Lawrenz",
    lat: 36.0556,
    lng: 14.2036,
  },
  {
    name: "Radece",
    lat: 46.0659,
    lng: 15.1729,
  },
  {
    name: "Sefwi Wiawso",
    lat: 6.2058,
    lng: -2.4894,
  },
  {
    name: "Mersch",
    lat: 49.7489,
    lng: 6.1061,
  },
  {
    name: "Ucar",
    lat: 40.5121,
    lng: 47.6519,
  },
  {
    name: "Dolenjske Toplice",
    lat: 45.7667,
    lng: 15.0667,
  },
  {
    name: "Hongseong",
    lat: 36.6009,
    lng: 126.665,
  },
  {
    name: "Strendur",
    lat: 62.1096,
    lng: -6.7617,
  },
  {
    name: "Tearce",
    lat: 42.0767,
    lng: 21.0531,
  },
  {
    name: "Tuzi",
    lat: 42.3656,
    lng: 19.3314,
  },
  {
    name: "Verzej",
    lat: 46.5836,
    lng: 16.1653,
  },
  {
    name: "Zgornja Kungota",
    lat: 46.6392,
    lng: 15.6156,
  },
  {
    name: "Cuprija",
    lat: 43.9231,
    lng: 21.3686,
  },
  {
    name: "Muan",
    lat: 34.9897,
    lng: 126.4714,
  },
  {
    name: "Jegunovce",
    lat: 42.0724,
    lng: 21.1237,
  },
  {
    name: "Crensovci",
    lat: 46.5744,
    lng: 16.2906,
  },
  {
    name: "Zelino",
    lat: 41.9825,
    lng: 21.0624,
  },
  {
    name: "The Bottom",
    lat: 17.6265,
    lng: -63.2497,
  },
  {
    name: "Mirna Pec",
    lat: 45.8603,
    lng: 15.0833,
  },
  {
    name: "Saratamata",
    lat: -15.2869,
    lng: 167.9906,
  },
  {
    name: "Rumuruti",
    lat: 0.2725,
    lng: 36.5381,
  },
  {
    name: "Arilje",
    lat: 43.7519,
    lng: 20.0906,
  },
  {
    name: "Kovin",
    lat: 44.7475,
    lng: 20.9761,
  },
  {
    name: "Butalangu",
    lat: 0.7011,
    lng: 32.2481,
  },
  {
    name: "Boljevac",
    lat: 43.8247,
    lng: 21.9519,
  },
  {
    name: "San Jose de las Lajas",
    lat: 22.9614,
    lng: -82.1511,
  },
  {
    name: "Vipava",
    lat: 45.8463,
    lng: 13.9622,
  },
  {
    name: "Ilirska Bistrica",
    lat: 45.5651,
    lng: 14.2493,
  },
  {
    name: "Markovci",
    lat: 46.3833,
    lng: 15.95,
  },
  {
    name: "Zuzemberk",
    lat: 45.8339,
    lng: 14.9292,
  },
  {
    name: "Phon-Hong",
    lat: 18.4953,
    lng: 102.4153,
  },
  {
    name: "Kosjeric",
    lat: 44,
    lng: 19.9167,
  },
  {
    name: "Tvoroyri",
    lat: 61.5544,
    lng: -6.8063,
  },
  {
    name: "Dobrova",
    lat: 46.055,
    lng: 14.4172,
  },
  {
    name: "Perm'",
    lat: 58.0174,
    lng: 56.2855,
  },
  {
    name: "Amolatar",
    lat: 1.6378,
    lng: 32.8448,
  },
  {
    name: "Lelydorp",
    lat: 5.7,
    lng: -55.2333,
  },
  {
    name: "Velike Lasce",
    lat: 45.8322,
    lng: 14.6364,
  },
  {
    name: "Puconci",
    lat: 46.7067,
    lng: 16.1564,
  },
  {
    name: "Morant Bay",
    lat: 17.8814,
    lng: -76.4092,
  },
  {
    name: "Skocjan",
    lat: 45.9067,
    lng: 15.2914,
  },
  {
    name: "Qubadli",
    lat: 39.3439,
    lng: 46.5797,
  },
  {
    name: "Ozurgeti",
    lat: 41.9333,
    lng: 41.9833,
  },
  {
    name: "Cicevac",
    lat: 43.7167,
    lng: 21.45,
  },
  {
    name: "Mokronog",
    lat: 45.9342,
    lng: 15.1408,
  },
  {
    name: "Bakjagol",
    lat: 36.043,
    lng: 128.0484,
  },
  {
    name: "Plandiste",
    lat: 45.2292,
    lng: 21.1238,
  },
  {
    name: "Kozina",
    lat: 45.61,
    lng: 13.9356,
  },
  {
    name: "Velika Polana",
    lat: 46.5719,
    lng: 16.3469,
  },
  {
    name: "Cankova",
    lat: 46.7208,
    lng: 16.0225,
  },
  {
    name: "Sredisce ob Dravi",
    lat: 46.3942,
    lng: 16.2681,
  },
  {
    name: "Lamwo",
    lat: 3.5297,
    lng: 32.8016,
  },
  {
    name: "Hrazdan",
    lat: 40.5,
    lng: 44.7667,
  },
  {
    name: "Bangolo",
    lat: 7.0123,
    lng: -7.4864,
  },
  {
    name: "Rogasovci",
    lat: 46.8,
    lng: 16.0333,
  },
  {
    name: "Bogatic",
    lat: 44.8376,
    lng: 19.4807,
  },
  {
    name: "Lipkovo",
    lat: 42.1564,
    lng: 21.5853,
  },
  {
    name: "Varvarin",
    lat: 43.7167,
    lng: 21.3667,
  },
  {
    name: "Oblesevo",
    lat: 41.8833,
    lng: 22.3339,
  },
  {
    name: "Razanj",
    lat: 43.6744,
    lng: 21.5492,
  },
  {
    name: "San Jose",
    lat: 10.18,
    lng: 125.5683,
  },
  {
    name: "Ilam",
    lat: 33.6374,
    lng: 46.4227,
  },
  {
    name: "Mongar",
    lat: 27.275,
    lng: 91.24,
  },
  {
    name: "Godawari",
    lat: 28.8755,
    lng: 80.5776,
  },
  {
    name: "Mionica",
    lat: 44.25,
    lng: 20.0833,
  },
  {
    name: "Kurumul",
    lat: -5.855,
    lng: 144.6311,
  },
  {
    name: "Arandelovac",
    lat: 44.3042,
    lng: 20.5561,
  },
  {
    name: "Kula",
    lat: 45.6109,
    lng: 19.5274,
  },
  {
    name: "Nova Vas",
    lat: 45.7717,
    lng: 14.5058,
  },
  {
    name: "Apace",
    lat: 46.6972,
    lng: 15.9106,
  },
  {
    name: "Cerkvenjak",
    lat: 46.5706,
    lng: 15.9436,
  },
  {
    name: "Haa",
    lat: 27.3685,
    lng: 89.2918,
  },
  {
    name: "Krapina",
    lat: 46.1589,
    lng: 15.8744,
  },
  {
    name: "Palenga",
    lat: 2.6131,
    lng: 32.3369,
  },
  {
    name: "Singa",
    lat: 13.1483,
    lng: 33.9311,
  },
  {
    name: "Novi Becej",
    lat: 45.6,
    lng: 20.1167,
  },
  {
    name: "Becej",
    lat: 45.6167,
    lng: 20.0333,
  },
  {
    name: "Kuzma",
    lat: 46.8369,
    lng: 16.0833,
  },
  {
    name: "Sarur",
    lat: 39.5544,
    lng: 44.9826,
  },
  {
    name: "Jursinci",
    lat: 46.4847,
    lng: 15.9714,
  },
  {
    name: "Port Loko",
    lat: 8.7667,
    lng: -12.7833,
  },
  {
    name: "Gornji Grad",
    lat: 46.2953,
    lng: 14.8083,
  },
  {
    name: "Zitorada",
    lat: 43.1833,
    lng: 21.7167,
  },
  {
    name: "Videm pri Ptuju",
    lat: 46.3686,
    lng: 15.9064,
  },
  {
    name: "Kotido",
    lat: 2.9806,
    lng: 34.1331,
  },
  {
    name: "Titel",
    lat: 45.2,
    lng: 20.3,
  },
  {
    name: "Pul-e `Alam",
    lat: 33.9953,
    lng: 69.0227,
  },
  {
    name: "Lacin",
    lat: 39.6408,
    lng: 46.5469,
  },
  {
    name: "Cirkulane",
    lat: 46.3453,
    lng: 15.9952,
  },
  {
    name: "Bar",
    lat: 42.1,
    lng: 19.1,
  },
  {
    name: "Ribnica",
    lat: 45.7386,
    lng: 14.7275,
  },
  {
    name: "Miren",
    lat: 45.8956,
    lng: 13.6075,
  },
  {
    name: "Sharan",
    lat: 33.1757,
    lng: 68.7304,
  },
  {
    name: "Boorama",
    lat: 9.9361,
    lng: 43.1828,
  },
  {
    name: "Tari",
    lat: -5.8489,
    lng: 142.9506,
  },
  {
    name: "Zavrc",
    lat: 46.3917,
    lng: 16.0497,
  },
  {
    name: "Planken",
    lat: 47.1844,
    lng: 9.5436,
  },
  {
    name: "Cocieri",
    lat: 47.3087,
    lng: 29.1101,
  },
  {
    name: "Pader",
    lat: 3.05,
    lng: 33.2167,
  },
  {
    name: "Merosina",
    lat: 43.2813,
    lng: 21.7218,
  },
  {
    name: "Fuglafjordhur",
    lat: 62.2448,
    lng: -6.815,
  },
  {
    name: "Triesenberg",
    lat: 47.1182,
    lng: 9.5444,
  },
  {
    name: "Lufilufi",
    lat: -13.8745,
    lng: -171.5986,
  },
  {
    name: "Bovec",
    lat: 46.3378,
    lng: 13.5522,
  },
  {
    name: "Podlehnik",
    lat: 46.3353,
    lng: 15.88,
  },
  {
    name: "Kotor",
    lat: 42.4254,
    lng: 18.7712,
  },
  {
    name: "Stara Pazova",
    lat: 44.9833,
    lng: 20.1667,
  },
  {
    name: "Carnikava",
    lat: 57.1293,
    lng: 24.2842,
  },
  {
    name: "Clervaux",
    lat: 50.0547,
    lng: 6.0314,
  },
  {
    name: "Redange-sur-Attert",
    lat: 49.7656,
    lng: 5.8908,
  },
  {
    name: "Bosilovo",
    lat: 41.4406,
    lng: 22.7278,
  },
  {
    name: "Goaso",
    lat: 6.8036,
    lng: -2.5172,
  },
  {
    name: "Vevcani",
    lat: 41.2406,
    lng: 20.5933,
  },
  {
    name: "Dambai",
    lat: 8.0662,
    lng: 0.1795,
  },
  {
    name: "Yardimli",
    lat: 38.9206,
    lng: 48.2372,
  },
  {
    name: "Igreja",
    lat: 15.0339,
    lng: -24.325,
  },
  {
    name: "Kaffrine",
    lat: 14.1016,
    lng: -15.5467,
  },
  {
    name: "Ribnica",
    lat: 46.535,
    lng: 15.2728,
  },
  {
    name: "Zgornje Gorje",
    lat: 46.3833,
    lng: 14.0833,
  },
  {
    name: "Kekava",
    lat: 56.8296,
    lng: 24.2318,
  },
  {
    name: "Tomaz pri Ormozu",
    lat: 46.4842,
    lng: 16.0836,
  },
  {
    name: "Sangre Grande",
    lat: 10.5667,
    lng: -61.1333,
  },
  {
    name: "Gaoua",
    lat: 10.2992,
    lng: -3.2508,
  },
  {
    name: "Nhlangano",
    lat: -27.1167,
    lng: 31.2,
  },
  {
    name: "Ordino",
    lat: 42.555,
    lng: 1.5331,
  },
  {
    name: "Bosilegrad",
    lat: 42.5005,
    lng: 22.4728,
  },
  {
    name: "Knic",
    lat: 43.9167,
    lng: 20.7167,
  },
  {
    name: "Kostanjevica na Krki",
    lat: 45.8463,
    lng: 15.4249,
  },
  {
    name: "Canillo",
    lat: 42.567,
    lng: 1.5981,
  },
  {
    name: "Agago",
    lat: 2.8338,
    lng: 33.3336,
  },
  {
    name: "Fort Wellington",
    lat: 6.3909,
    lng: -57.6038,
  },
  {
    name: "Vitomarci",
    lat: 46.5275,
    lng: 15.9394,
  },
  {
    name: "Nova Sintra",
    lat: 14.8714,
    lng: -24.6956,
  },
  {
    name: "Suhar",
    lat: 24.342,
    lng: 56.7299,
  },
  {
    name: "Komen",
    lat: 45.8153,
    lng: 13.7483,
  },
  {
    name: "Secanj",
    lat: 45.3667,
    lng: 20.7725,
  },
  {
    name: "Fuzuli",
    lat: 39.6003,
    lng: 47.1431,
  },
  {
    name: "Nalerigu",
    lat: 10.5273,
    lng: -0.3698,
  },
  {
    name: "Divaca",
    lat: 45.6847,
    lng: 13.9703,
  },
  {
    name: "Destrnik",
    lat: 46.5006,
    lng: 15.875,
  },
  {
    name: "Incukalns",
    lat: 57.0987,
    lng: 24.6863,
  },
  {
    name: "Kozje",
    lat: 46.075,
    lng: 15.5603,
  },
  {
    name: "Nili",
    lat: 33.7218,
    lng: 66.1302,
  },
  {
    name: "Bulisa",
    lat: 2.1178,
    lng: 31.4116,
  },
  {
    name: "Phonsavan",
    lat: 19.45,
    lng: 103.2,
  },
  {
    name: "Plasnica",
    lat: 41.4672,
    lng: 21.1231,
  },
  {
    name: "Amudat",
    lat: 1.95,
    lng: 34.95,
  },
  {
    name: "Jurovski Dol",
    lat: 46.6064,
    lng: 15.7847,
  },
  {
    name: "Kovacica",
    lat: 45.1117,
    lng: 20.6214,
  },
  {
    name: "Nabilatuk",
    lat: 2.0525,
    lng: 34.5734,
  },
  {
    name: "Nkurenkuru",
    lat: -17.6167,
    lng: 18.6,
  },
  {
    name: "Pakxan",
    lat: 18.3831,
    lng: 103.6669,
  },
  {
    name: "Dobje",
    lat: 46.1367,
    lng: 15.4089,
  },
  {
    name: "Gornji Petrovci",
    lat: 46.8053,
    lng: 16.2225,
  },
  {
    name: "Samdrup Jongkhar",
    lat: 26.8007,
    lng: 91.5052,
  },
  {
    name: "Moravske-Toplice",
    lat: 46.6875,
    lng: 16.2256,
  },
  {
    name: "Podvelka",
    lat: 46.5869,
    lng: 15.3306,
  },
  {
    name: "Trnovska Vas",
    lat: 46.5167,
    lng: 15.9,
  },
  {
    name: "Sarpang",
    lat: 26.8639,
    lng: 90.2674,
  },
  {
    name: "Makole",
    lat: 46.3172,
    lng: 15.6672,
  },
  {
    name: "Grad",
    lat: 46.8,
    lng: 16.1,
  },
  {
    name: "Trashigang",
    lat: 27.3333,
    lng: 91.5528,
  },
  {
    name: "Adazi",
    lat: 57.0705,
    lng: 24.3371,
  },
  {
    name: "Qabala",
    lat: 40.9825,
    lng: 47.8491,
  },
  {
    name: "Ozolnieki",
    lat: 56.6899,
    lng: 23.7761,
  },
  {
    name: "Neves",
    lat: 0.3586,
    lng: 6.5525,
  },
  {
    name: "Medveda",
    lat: 42.8333,
    lng: 21.5833,
  },
  {
    name: "Napak",
    lat: 2.2514,
    lng: 34.2501,
  },
  {
    name: "Vagur",
    lat: 61.4733,
    lng: -6.8175,
  },
  {
    name: "Pemagatshel",
    lat: 27.038,
    lng: 91.4031,
  },
  {
    name: "Cova Figueira",
    lat: 14.8833,
    lng: -24.3,
  },
  {
    name: "Zitiste",
    lat: 45.485,
    lng: 20.5497,
  },
  {
    name: "Sofifi",
    lat: 0.7373,
    lng: 127.5588,
  },
  {
    name: "Razkrizje",
    lat: 46.5217,
    lng: 16.2811,
  },
  {
    name: "Rustavi",
    lat: 42.2897,
    lng: 43.8543,
  },
  {
    name: "Cajetina",
    lat: 43.75,
    lng: 19.7167,
  },
  {
    name: "Krivogastani",
    lat: 41.3369,
    lng: 21.3311,
  },
  {
    name: "Rogatec",
    lat: 46.2294,
    lng: 15.7003,
  },
  {
    name: "Qacha's Nek",
    lat: -30.1153,
    lng: 28.6894,
  },
  {
    name: "Sremska Mitrovica",
    lat: 44.9833,
    lng: 19.6167,
  },
  {
    name: "Safotulafai",
    lat: -13.6715,
    lng: -172.1777,
  },
  {
    name: "Ivanjica",
    lat: 43.5811,
    lng: 20.2297,
  },
  {
    name: "Kuacjok",
    lat: 8.31,
    lng: 27.99,
  },
  {
    name: "Sedhiou",
    lat: 12.7081,
    lng: -15.5569,
  },
  {
    name: "Tubmanburg",
    lat: 6.8706,
    lng: -10.8211,
  },
  {
    name: "Indija",
    lat: 45.0492,
    lng: 20.0792,
  },
  {
    name: "Vasilevo",
    lat: 41.4741,
    lng: 22.643,
  },
  {
    name: "Zabari",
    lat: 44.3562,
    lng: 21.2143,
  },
  {
    name: "Ed Daein",
    lat: 11.4672,
    lng: 26.1317,
  },
  {
    name: "Tabuk",
    lat: 17.4084,
    lng: 121.2785,
  },
  {
    name: "Osilnica",
    lat: 45.5292,
    lng: 14.6979,
  },
  {
    name: "Petrovac na Mlavi",
    lat: 44.3783,
    lng: 21.4194,
  },
  {
    name: "Pazin",
    lat: 45.2392,
    lng: 13.9386,
  },
  {
    name: "Savalou",
    lat: 7.9281,
    lng: 1.9756,
  },
  {
    name: "Mali Idos",
    lat: 45.7092,
    lng: 19.6663,
  },
  {
    name: "Centar Zupa",
    lat: 41.4788,
    lng: 20.5586,
  },
  {
    name: "Ub",
    lat: 44.45,
    lng: 20.0667,
  },
  {
    name: "Raca",
    lat: 44.2333,
    lng: 20.9833,
  },
  {
    name: "Srbobran",
    lat: 45.5522,
    lng: 19.8017,
  },
  {
    name: "Ljig",
    lat: 44.2266,
    lng: 20.2394,
  },
  {
    name: "Kiryandongo",
    lat: 1.8763,
    lng: 32.0622,
  },
  {
    name: "Rekovac",
    lat: 43.8667,
    lng: 21.1333,
  },
  {
    name: "Skopun",
    lat: 61.9028,
    lng: -6.8823,
  },
  {
    name: "Mamuju",
    lat: -2.6806,
    lng: 118.8861,
  },
  {
    name: "Hargeysa",
    lat: 9.56,
    lng: 44.065,
  },
  {
    name: "Kiruhura",
    lat: -0.2356,
    lng: 30.8725,
  },
  {
    name: "Leava",
    lat: -14.2933,
    lng: -178.1583,
  },
  {
    name: "Garkalne",
    lat: 57.0449,
    lng: 24.4195,
  },
  {
    name: "Santo Antonio",
    lat: 1.6386,
    lng: 7.4206,
  },
  {
    name: "Zrnovci",
    lat: 41.8542,
    lng: 22.4444,
  },
  {
    name: "Novi Knezevac",
    lat: 46.05,
    lng: 20.1,
  },
  {
    name: "Cabrayil",
    lat: 39.4,
    lng: 47.0261,
  },
  {
    name: "Tsimasham",
    lat: 27.0989,
    lng: 89.536,
  },
  {
    name: "Lajkovac",
    lat: 44.3667,
    lng: 20.1667,
  },
  {
    name: "Ijevan",
    lat: 40.8788,
    lng: 45.1485,
  },
  {
    name: "Bijelo Polje",
    lat: 43.0292,
    lng: 19.7456,
  },
  {
    name: "Madinat ash Shamal",
    lat: 26.1293,
    lng: 51.2009,
  },
  {
    name: "Bazarak",
    lat: 35.3129,
    lng: 69.5152,
  },
  {
    name: "Aleksandrovac",
    lat: 43.4553,
    lng: 21.0514,
  },
  {
    name: "Petnjica",
    lat: 42.9089,
    lng: 19.9644,
  },
  {
    name: "Sodrazica",
    lat: 45.7611,
    lng: 14.6356,
  },
  {
    name: "Samux",
    lat: 40.7649,
    lng: 46.4087,
  },
  {
    name: "Dobrovnik",
    lat: 46.6514,
    lng: 16.3525,
  },
  {
    name: "Pala",
    lat: 9.3646,
    lng: 14.9073,
  },
  {
    name: "Matam",
    lat: 15.6167,
    lng: -13.3333,
  },
  {
    name: "Abim",
    lat: 2.7017,
    lng: 33.6761,
  },
  {
    name: "Dalandzadgad",
    lat: 43.5708,
    lng: 104.425,
  },
  {
    name: "Rio Claro",
    lat: 10.3059,
    lng: -61.1756,
  },
  {
    name: "Malo Crnice",
    lat: 44.5603,
    lng: 21.2906,
  },
  {
    name: "Pinki",
    lat: 56.9419,
    lng: 23.9137,
  },
  {
    name: "Kursumlija",
    lat: 43.1408,
    lng: 21.2678,
  },
  {
    name: "Ntoroko",
    lat: 1.0411,
    lng: 30.4811,
  },
  {
    name: "Davaci",
    lat: 41.2012,
    lng: 48.9871,
  },
  {
    name: "Cucer-Sandevo",
    lat: 42.102,
    lng: 21.3846,
  },
  {
    name: "Raska",
    lat: 43.2856,
    lng: 20.6092,
  },
  {
    name: "Mislinja",
    lat: 46.4411,
    lng: 15.1956,
  },
  {
    name: "Golubac",
    lat: 44.6529,
    lng: 21.6308,
  },
  {
    name: "Nordhragota",
    lat: 62.199,
    lng: -6.7432,
  },
  {
    name: "Pecinci",
    lat: 44.9089,
    lng: 19.9664,
  },
  {
    name: "Qivraq",
    lat: 39.3994,
    lng: 45.1151,
  },
  {
    name: "Nova Crnja",
    lat: 45.6685,
    lng: 20.6042,
  },
  {
    name: "Podcetrtek",
    lat: 46.1569,
    lng: 15.5986,
  },
  {
    name: "Samamea",
    lat: -13.9338,
    lng: -171.5312,
  },
  {
    name: "Xai",
    lat: 20.6922,
    lng: 101.9847,
  },
  {
    name: "Ar Rustaq",
    lat: 23.3908,
    lng: 57.4244,
  },
  {
    name: "Majdanpek",
    lat: 44.4167,
    lng: 21.9333,
  },
  {
    name: "Danilovgrad",
    lat: 42.61,
    lng: 19.05,
  },
  {
    name: "Buka",
    lat: -5.42,
    lng: 154.67,
  },
  {
    name: "Makedonska Kamenica",
    lat: 42.0208,
    lng: 22.5876,
  },
  {
    name: "Satupa`itea",
    lat: -13.7659,
    lng: -172.3269,
  },
  {
    name: "Otuke",
    lat: 2.5004,
    lng: 33.5007,
  },
  {
    name: "Ruma",
    lat: 45.0031,
    lng: 19.8289,
  },
  {
    name: "Samtse",
    lat: 26.8667,
    lng: 89.1,
  },
  {
    name: "Skriveri",
    lat: 56.6485,
    lng: 25.1195,
  },
  {
    name: "Asau",
    lat: -13.5196,
    lng: -172.6378,
  },
  {
    name: "Hrib-Loski Potok",
    lat: 45.7011,
    lng: 14.5911,
  },
  {
    name: "Niksic",
    lat: 42.78,
    lng: 18.94,
  },
  {
    name: "Sur",
    lat: 22.5667,
    lng: 59.5289,
  },
  {
    name: "Dolneni",
    lat: 41.4258,
    lng: 21.454,
  },
  {
    name: "Safotu",
    lat: -13.4513,
    lng: -172.4018,
  },
  {
    name: "Kalbacar",
    lat: 40.1098,
    lng: 46.0445,
  },
  {
    name: "Kobilje",
    lat: 46.6847,
    lng: 16.3978,
  },
  {
    name: "Vladimirci",
    lat: 44.6158,
    lng: 19.7843,
  },
  {
    name: "Vailoa",
    lat: -13.7555,
    lng: -172.307,
  },
  {
    name: "Kranjska Gora",
    lat: 46.4839,
    lng: 13.7894,
  },
  {
    name: "Amuru",
    lat: 2.8139,
    lng: 31.9387,
  },
  {
    name: "Iecava",
    lat: 56.5977,
    lng: 24.2076,
  },
  {
    name: "Rosoman",
    lat: 41.5167,
    lng: 21.9458,
  },
  {
    name: "Priekuli",
    lat: 57.3115,
    lng: 25.3571,
  },
  {
    name: "Buabidi",
    lat: 8.4746,
    lng: -81.6983,
  },
  {
    name: "Gusinje",
    lat: 42.5619,
    lng: 19.8339,
  },
  {
    name: "Ribeira Brava",
    lat: 16.6158,
    lng: -24.2983,
  },
  {
    name: "Ibra'",
    lat: 22.6906,
    lng: 58.5334,
  },
  {
    name: "Zetale",
    lat: 46.275,
    lng: 15.7939,
  },
  {
    name: "Susa",
    lat: 39.7601,
    lng: 46.7499,
  },
  {
    name: "Tutin",
    lat: 42.9875,
    lng: 20.3256,
  },
  {
    name: "Zelenikovo",
    lat: 41.8841,
    lng: 21.5885,
  },
  {
    name: "Resen",
    lat: 41.0893,
    lng: 21.0109,
  },
  {
    name: "Babusnica",
    lat: 43.068,
    lng: 22.4115,
  },
  {
    name: "Xocavand",
    lat: 39.795,
    lng: 47.1117,
  },
  {
    name: "Sorvagur",
    lat: 62.0717,
    lng: -7.3066,
  },
  {
    name: "Kaisiadorys",
    lat: 54.8653,
    lng: 24.4682,
  },
  {
    name: "Brus",
    lat: 43.3836,
    lng: 21.0336,
  },
  {
    name: "Sahbuz",
    lat: 39.4072,
    lng: 45.5739,
  },
  {
    name: "Hvannasund",
    lat: 62.2962,
    lng: -6.5204,
  },
  {
    name: "Eidhi",
    lat: 62.2995,
    lng: -7.0924,
  },
  {
    name: "Massakory",
    lat: 13,
    lng: 15.7333,
  },
  {
    name: "Salovci",
    lat: 46.825,
    lng: 16.2981,
  },
  {
    name: "Osecina",
    lat: 44.3667,
    lng: 19.6,
  },
  {
    name: "Buba",
    lat: 11.59,
    lng: -14.99,
  },
  {
    name: "Al Hazm",
    lat: 16.1641,
    lng: 44.7769,
  },
  {
    name: "Mogila",
    lat: 41.1083,
    lng: 21.3786,
  },
  {
    name: "Nakapiripirit",
    lat: 1.9167,
    lng: 34.7833,
  },
  {
    name: "Barentu",
    lat: 15.1058,
    lng: 37.5907,
  },
  {
    name: "Veliko Gradiste",
    lat: 44.75,
    lng: 21.5167,
  },
  {
    name: "Bangar",
    lat: 4.7083,
    lng: 115.0736,
  },
  {
    name: "Pili",
    lat: 13.7177,
    lng: 123.7448,
  },
  {
    name: "Tofol",
    lat: 5.3261,
    lng: 163.0083,
  },
  {
    name: "Burco",
    lat: 9.5221,
    lng: 45.5336,
  },
  {
    name: "Kucevo",
    lat: 44.4833,
    lng: 21.6667,
  },
  {
    name: "Koceljeva",
    lat: 44.4687,
    lng: 19.8214,
  },
  {
    name: "Oyrarbakki",
    lat: 62.2079,
    lng: -6.9997,
  },
  {
    name: "Arta",
    lat: 11.5264,
    lng: 42.8519,
  },
  {
    name: "Temerin",
    lat: 45.4053,
    lng: 19.8869,
  },
  {
    name: "Vestmanna",
    lat: 62.1548,
    lng: -7.169,
  },
  {
    name: "Porkeri",
    lat: 61.4814,
    lng: -6.745,
  },
  {
    name: "Raseiniai",
    lat: 55.3797,
    lng: 23.1239,
  },
  {
    name: "Gadzin Han",
    lat: 43.2223,
    lng: 22.0333,
  },
  {
    name: "Roja",
    lat: 57.5015,
    lng: 22.8088,
  },
  {
    name: "Gaigirgordub",
    lat: 9.55,
    lng: -78.9667,
  },
  {
    name: "Opovo",
    lat: 45.0522,
    lng: 20.4303,
  },
  {
    name: "Kyankwanzi",
    lat: 1.1987,
    lng: 31.8062,
  },
  {
    name: "Ropazi",
    lat: 56.9747,
    lng: 24.6329,
  },
  {
    name: "Sao Joao dos Angolares",
    lat: 0.1342,
    lng: 6.6494,
  },
  {
    name: "Hvalba",
    lat: 61.6024,
    lng: -6.9606,
  },
  {
    name: "Smarde",
    lat: 56.9533,
    lng: 23.3387,
  },
  {
    name: "Ntchisi",
    lat: -13.3753,
    lng: 34.0036,
  },
  {
    name: "Xekong",
    lat: 15.3503,
    lng: 106.7286,
  },
  {
    name: "Trashi Yangtse",
    lat: 27.6116,
    lng: 91.498,
  },
  {
    name: "Bistrica ob Sotli",
    lat: 46.0569,
    lng: 15.6625,
  },
  {
    name: "Pilsrundale",
    lat: 56.4181,
    lng: 24.0162,
  },
  {
    name: "Sumba",
    lat: 61.4055,
    lng: -6.709,
  },
  {
    name: "Mersrags",
    lat: 57.3364,
    lng: 23.1235,
  },
  {
    name: "Kvivik",
    lat: 62.1186,
    lng: -7.0737,
  },
  {
    name: "Tervete",
    lat: 56.4798,
    lng: 23.3902,
  },
  {
    name: "Karbinci",
    lat: 41.8176,
    lng: 22.2353,
  },
  {
    name: "Malpils",
    lat: 57.0101,
    lng: 24.9578,
  },
  {
    name: "Solcava",
    lat: 46.4194,
    lng: 14.6936,
  },
  {
    name: "Pagegiai",
    lat: 55.1379,
    lng: 21.9138,
  },
  {
    name: "Ragana",
    lat: 57.1821,
    lng: 24.7056,
  },
  {
    name: "Kone",
    lat: -21.0667,
    lng: 164.8667,
  },
  {
    name: "Zalingei",
    lat: 12.9092,
    lng: 23.4706,
  },
  {
    name: "Sandavagur",
    lat: 62.0537,
    lng: -7.1498,
  },
  {
    name: "Hodos",
    lat: 46.8233,
    lng: 16.3342,
  },
  {
    name: "Konce",
    lat: 41.4951,
    lng: 22.3836,
  },
  {
    name: "Rankovce",
    lat: 42.1686,
    lng: 22.1166,
  },
  {
    name: "Lozovo",
    lat: 41.7839,
    lng: 21.9056,
  },
  {
    name: "Andrijevica",
    lat: 42.7339,
    lng: 19.7919,
  },
  {
    name: "Hov",
    lat: 61.5068,
    lng: -6.7599,
  },
  {
    name: "Sala",
    lat: 56.5047,
    lng: 25.7618,
  },
  {
    name: "Nwoya",
    lat: 2.6342,
    lng: 32.0011,
  },
  {
    name: "Saleaula",
    lat: -13.4489,
    lng: -172.3352,
  },
  {
    name: "Zagubica",
    lat: 44.1979,
    lng: 21.7902,
  },
  {
    name: "Koceni",
    lat: 57.5198,
    lng: 25.3404,
  },
  {
    name: "Trgoviste",
    lat: 42.3514,
    lng: 22.0921,
  },
  {
    name: "Sola",
    lat: -13.8761,
    lng: 167.5517,
  },
  {
    name: "Jaunpils",
    lat: 56.7314,
    lng: 23.0125,
  },
  {
    name: "Rostusa",
    lat: 41.61,
    lng: 20.6,
  },
  {
    name: "Rauna",
    lat: 57.3337,
    lng: 25.6085,
  },
  {
    name: "Semera",
    lat: 11.7956,
    lng: 41.0086,
  },
  {
    name: "Gradsko",
    lat: 41.5775,
    lng: 21.9428,
  },
  {
    name: "Ignalina",
    lat: 55.3406,
    lng: 26.1605,
  },
  {
    name: "Vidhareidhi",
    lat: 62.36,
    lng: -6.5313,
  },
  {
    name: "Burtnieki",
    lat: 57.6949,
    lng: 25.275,
  },
  {
    name: "Anew",
    lat: 37.8875,
    lng: 58.516,
  },
  {
    name: "Masunga",
    lat: -20.6245,
    lng: 27.4488,
  },
  {
    name: "Kostel",
    lat: 45.5084,
    lng: 14.9101,
  },
  {
    name: "Xizi",
    lat: 40.9111,
    lng: 49.0694,
  },
  {
    name: "Murmuiza",
    lat: 57.4731,
    lng: 25.4917,
  },
  {
    name: "Trongsa",
    lat: 27.5168,
    lng: 90.5,
  },
  {
    name: "Aglona",
    lat: 56.1327,
    lng: 27.0068,
  },
  {
    name: "Sandur",
    lat: 61.8344,
    lng: -6.8171,
  },
  {
    name: "Nica",
    lat: 56.3456,
    lng: 21.0646,
  },
  {
    name: "Vecumnieki",
    lat: 56.6061,
    lng: 24.5223,
  },
  {
    name: "El Fula",
    lat: 11.712,
    lng: 28.3462,
  },
  {
    name: "Zhemgang",
    lat: 27.2169,
    lng: 90.6579,
  },
  {
    name: "Porto Novo",
    lat: 17.0208,
    lng: -25.0667,
  },
  {
    name: "Damongo",
    lat: 9.083,
    lng: -1.8188,
  },
  {
    name: "Loja",
    lat: 57.1534,
    lng: 24.6433,
  },
  {
    name: "Tanjung Selor",
    lat: 2.8375,
    lng: 117.3653,
  },
  {
    name: "Liegi",
    lat: 56.5797,
    lng: 21.3338,
  },
  {
    name: "Jaunpiebalga",
    lat: 57.1775,
    lng: 26.0284,
  },
  {
    name: "Belcista",
    lat: 41.3028,
    lng: 20.8303,
  },
  {
    name: "Tigoa",
    lat: -11.5531,
    lng: 160.0647,
  },
  {
    name: "Naama",
    lat: 33.2667,
    lng: -0.3167,
  },
  {
    name: "Lupane",
    lat: -18.9315,
    lng: 27.807,
  },
  {
    name: "Riebini",
    lat: 56.3403,
    lng: 26.7999,
  },
  {
    name: "Parun",
    lat: 35.4206,
    lng: 70.9226,
  },
  {
    name: "Vainode",
    lat: 56.4185,
    lng: 21.8541,
  },
  {
    name: "Staro Nagoricane",
    lat: 42.1981,
    lng: 21.8286,
  },
  {
    name: "Stalbe",
    lat: 57.3708,
    lng: 25.0324,
  },
  {
    name: "Ergli",
    lat: 56.8988,
    lng: 25.6429,
  },
  {
    name: "Kolasin",
    lat: 42.825,
    lng: 19.518,
  },
  {
    name: "Fish Town",
    lat: 5.1974,
    lng: -7.8758,
  },
  {
    name: "Bopolu",
    lat: 7.0667,
    lng: -10.4875,
  },
  {
    name: "Vecpiebalga",
    lat: 57.0618,
    lng: 25.8179,
  },
  {
    name: "Anouvong",
    lat: 18.8989,
    lng: 103.0919,
  },
  {
    name: "Loango",
    lat: -4.6519,
    lng: 11.8125,
  },
  {
    name: "Drabesi",
    lat: 57.2433,
    lng: 25.2803,
  },
  {
    name: "Alsunga",
    lat: 56.9801,
    lng: 21.564,
  },
  {
    name: "Laascaanood",
    lat: 8.4774,
    lng: 47.3597,
  },
  {
    name: "Vecvarkava",
    lat: 56.1984,
    lng: 26.5081,
  },
  {
    name: "Navoiy",
    lat: 40.1,
    lng: 65.3667,
  },
  {
    name: "Naukseni",
    lat: 57.8842,
    lng: 25.458,
  },
  {
    name: "Famjin",
    lat: 61.5248,
    lng: -6.8794,
  },
  {
    name: "Husavik",
    lat: 61.8099,
    lng: -6.6813,
  },
  {
    name: "Baltinava",
    lat: 56.9439,
    lng: 27.644,
  },
  {
    name: "Zabljak",
    lat: 43.1547,
    lng: 19.1219,
  },
  {
    name: "Dundaga",
    lat: 57.505,
    lng: 22.3504,
  },
  {
    name: "Georgetown",
    lat: -7.9286,
    lng: -14.4119,
  },
  {
    name: "Nereta",
    lat: 56.2044,
    lng: 25.3077,
  },
  {
    name: "Cibla",
    lat: 56.5498,
    lng: 27.8837,
  },
  {
    name: "Amdjarass",
    lat: 16.0667,
    lng: 22.8354,
  },
  {
    name: "Lhuentse",
    lat: 27.6679,
    lng: 91.1839,
  },
  {
    name: "Jakar",
    lat: 27.5492,
    lng: 90.7525,
  },
  {
    name: "Nova Varos",
    lat: 43.4667,
    lng: 19.8203,
  },
  {
    name: "Ceerigaabo",
    lat: 10.6162,
    lng: 47.3679,
  },
  {
    name: "Skalavik",
    lat: 61.8314,
    lng: -6.6623,
  },
  {
    name: "Rugaji",
    lat: 57.0033,
    lng: 27.1337,
  },
  {
    name: "Kunoy",
    lat: 62.2917,
    lng: -6.6702,
  },
  {
    name: "Daga",
    lat: 27.0753,
    lng: 89.8769,
  },
  {
    name: "Bela Palanka",
    lat: 43.2178,
    lng: 22.3067,
  },
  {
    name: "Novaci",
    lat: 41.042,
    lng: 21.4587,
  },
  {
    name: "Kobarid",
    lat: 46.2471,
    lng: 13.5796,
  },
  {
    name: "Rucava",
    lat: 56.164,
    lng: 21.1627,
  },
  {
    name: "Kirkja",
    lat: 62.3263,
    lng: -6.3238,
  },
  {
    name: "Sowa Town",
    lat: -20.5636,
    lng: 26.2244,
  },
  {
    name: "Zgornje Jezersko",
    lat: 46.3833,
    lng: 14.4667,
  },
  {
    name: "Savnik",
    lat: 42.9564,
    lng: 19.0967,
  },
  {
    name: "Kidal",
    lat: 18.4411,
    lng: 1.4078,
  },
  {
    name: "Crna Trava",
    lat: 42.8071,
    lng: 22.3247,
  },
  {
    name: "Skuvoy",
    lat: 61.771,
    lng: -6.805,
  },
  {
    name: "Pluzine",
    lat: 43.1528,
    lng: 18.8394,
  },
  {
    name: "Choyr",
    lat: 46.3611,
    lng: 108.3611,
  },
  {
    name: "Edinburgh of the Seven Seas",
    lat: -37.0675,
    lng: -12.3105,
  },
  {
    name: "Awbari",
    lat: 26.5833,
    lng: 12.7667,
  },
  {
    name: "Gasa",
    lat: 27.9067,
    lng: 89.7304,
  },
  {
    name: "Idri",
    lat: 27.4471,
    lng: 13.0517,
  },
  {
    name: "Jwaneng",
    lat: -24.6017,
    lng: 24.7281,
  },
  {
    name: "Mahdia",
    lat: 5.2667,
    lng: -59.15,
  },
  {
    name: "Hayma'",
    lat: 19.9333,
    lng: 56.3167,
  },
  {
    name: "Union Choco",
    lat: 8.0778,
    lng: -77.5583,
  },
  {
    name: "Bardai",
    lat: 21.3547,
    lng: 17.0016,
  },
  {
    name: "Al Kufrah",
    lat: 24.1667,
    lng: 23.2696,
  },
  {
    name: "Star Dojran",
    lat: 41.1792,
    lng: 22.7247,
  },
  {
    name: "We",
    lat: -20.9,
    lng: 167.2667,
  },
  {
    name: "Presevo",
    lat: 42.3067,
    lng: 21.65,
  },
  {
    name: "Bujanovac",
    lat: 42.4667,
    lng: 21.7667,
  },
  {
    name: "Kitamilo",
    lat: 0.2222,
    lng: 33.2061,
  },
  {
    name: "Tarrafal",
    lat: 15.2833,
    lng: -23.7667,
  },
  {
    name: "Udine",
    lat: 46.0667,
    lng: 13.2333,
  },
  {
    name: "Debre Zeyit",
    lat: 8.75,
    lng: 38.9833,
  },
  {
    name: "Tayabas",
    lat: 14.0167,
    lng: 121.5833,
  },
  {
    name: "Arlit",
    lat: 18.82,
    lng: 7.33,
  },
  {
    name: "Urgut Shahri",
    lat: 39.4007,
    lng: 67.2607,
  },
  {
    name: "Boca Raton",
    lat: 26.3752,
    lng: -80.108,
  },
  {
    name: "Bendigo",
    lat: -36.75,
    lng: 144.2667,
  },
  {
    name: "Lafayette",
    lat: 39.9949,
    lng: -105.0997,
  },
  {
    name: "Leme",
    lat: -22.1858,
    lng: -47.39,
  },
  {
    name: "Zelenodol'sk",
    lat: 55.85,
    lng: 48.5167,
  },
  {
    name: "Hasilpur",
    lat: 29.6967,
    lng: 72.5542,
  },
  {
    name: "Wichita Falls",
    lat: 33.9072,
    lng: -98.5291,
  },
  {
    name: "Tobol'sk",
    lat: 58.1953,
    lng: 68.2581,
  },
  {
    name: "Rio Rancho",
    lat: 35.2872,
    lng: -106.6981,
  },
  {
    name: "South Fulton",
    lat: 33.6269,
    lng: -84.5802,
  },
  {
    name: "Beaverton",
    lat: 45.4779,
    lng: -122.8168,
  },
  {
    name: "Sarapul",
    lat: 56.4667,
    lng: 53.8,
  },
  {
    name: "Taxco de Alarcon",
    lat: 18.5564,
    lng: -99.605,
  },
  {
    name: "Tacurong",
    lat: 6.6833,
    lng: 124.6667,
  },
  {
    name: "Kontagora",
    lat: 10.4004,
    lng: 5.4699,
  },
  {
    name: "Saku",
    lat: 36.2489,
    lng: 138.4769,
  },
  {
    name: "Khambhat",
    lat: 22.3131,
    lng: 72.6194,
  },
  {
    name: "Lawrence",
    lat: 38.9597,
    lng: -95.2641,
  },
  {
    name: "Zarate",
    lat: -34.0833,
    lng: -59.0333,
  },
  {
    name: "Reyhanli",
    lat: 36.2692,
    lng: 36.5672,
  },
  {
    name: "Lugo",
    lat: 43.0117,
    lng: -7.5572,
  },
  {
    name: "Dongducheon",
    lat: 37.9133,
    lng: 127.0633,
  },
  {
    name: "Worcester",
    lat: -33.645,
    lng: 19.4436,
  },
  {
    name: "Votkinsk",
    lat: 57.05,
    lng: 54,
  },
  {
    name: "Paulinia",
    lat: -22.7611,
    lng: -47.1542,
  },
  {
    name: "Iseyin",
    lat: 7.9667,
    lng: 3.6,
  },
  {
    name: "Iida",
    lat: 35.5147,
    lng: 137.8219,
  },
  {
    name: "Oldham",
    lat: 53.5444,
    lng: -2.1169,
  },
  {
    name: "Witten",
    lat: 51.4333,
    lng: 7.3333,
  },
  {
    name: "Serov",
    lat: 59.6,
    lng: 60.5667,
  },
  {
    name: "Arapongas",
    lat: -23.41,
    lng: -51.43,
  },
  {
    name: "Middletown",
    lat: 39.5032,
    lng: -84.366,
  },
  {
    name: "Fukata",
    lat: 33.8056,
    lng: 130.5406,
  },
  {
    name: "Tubarao",
    lat: -28.4669,
    lng: -49.0069,
  },
  {
    name: "Bafra",
    lat: 41.5682,
    lng: 35.9069,
  },
  {
    name: "Brantford",
    lat: 43.1667,
    lng: -80.25,
  },
  {
    name: "Yacuiba",
    lat: -22.0139,
    lng: -63.6778,
  },
  {
    name: "Hanau",
    lat: 50.1328,
    lng: 8.9169,
  },
  {
    name: "Ituiutaba",
    lat: -19.0151,
    lng: -49.5504,
  },
  {
    name: "Ukhta",
    lat: 63.5667,
    lng: 53.7,
  },
  {
    name: "Mezhdurechensk",
    lat: 53.6833,
    lng: 88.05,
  },
  {
    name: "Tomohon",
    lat: 1.3244,
    lng: 124.8225,
  },
  {
    name: "Sutton Coldfield",
    lat: 52.563,
    lng: -1.822,
  },
  {
    name: "Kazerun",
    lat: 29.6167,
    lng: 51.65,
  },
  {
    name: "San Marcos",
    lat: 33.135,
    lng: -117.1744,
  },
  {
    name: "Wujiaqu",
    lat: 44.2,
    lng: 87.55,
  },
  {
    name: "Aurangabad",
    lat: 24.7704,
    lng: 84.38,
  },
  {
    name: "Sandy",
    lat: 40.571,
    lng: -111.8505,
  },
  {
    name: "Vanderbijlpark",
    lat: -26.6992,
    lng: 27.8356,
  },
  {
    name: "Leninsk-Kuznetskiy",
    lat: 54.65,
    lng: 86.1667,
  },
  {
    name: "Kelo",
    lat: 9.3171,
    lng: 15.8,
  },
  {
    name: "Federal Way",
    lat: 47.3091,
    lng: -122.3358,
  },
  {
    name: "Dovzhansk",
    lat: 48.0846,
    lng: 39.6516,
  },
  {
    name: "Guihulngan",
    lat: 10.1167,
    lng: 123.2667,
  },
  {
    name: "Greece",
    lat: 43.2461,
    lng: -77.6989,
  },
  {
    name: "Grudziadz",
    lat: 53.4925,
    lng: 18.7761,
  },
  {
    name: "Caceres",
    lat: 39.4731,
    lng: -6.3711,
  },
  {
    name: "Muzaffarabad",
    lat: 34.37,
    lng: 73.4711,
  },
  {
    name: "Kamisu",
    lat: 35.89,
    lng: 140.6647,
  },
  {
    name: "Kanuma",
    lat: 36.5672,
    lng: 139.745,
  },
  {
    name: "Mandeville",
    lat: 30.3751,
    lng: -90.0904,
  },
  {
    name: "Mons",
    lat: 50.455,
    lng: 3.952,
  },
  {
    name: "Omura",
    lat: 32.9,
    lng: 129.9583,
  },
  {
    name: "Hesperia",
    lat: 34.3975,
    lng: -117.3147,
  },
  {
    name: "Emmiganur",
    lat: 15.7333,
    lng: 77.4833,
  },
  {
    name: "Brockton",
    lat: 42.0821,
    lng: -71.0242,
  },
  {
    name: "Aliaga",
    lat: 38.7998,
    lng: 26.972,
  },
  {
    name: "Boli",
    lat: 45.7564,
    lng: 130.5759,
  },
  {
    name: "Bogo",
    lat: 10.7361,
    lng: 14.6108,
  },
  {
    name: "Sarov",
    lat: 54.9333,
    lng: 43.3167,
  },
  {
    name: "Kulob",
    lat: 37.9119,
    lng: 69.7808,
  },
  {
    name: "Rubio",
    lat: 7.7,
    lng: -72.35,
  },
  {
    name: "Fishers",
    lat: 39.9589,
    lng: -85.9661,
  },
  {
    name: "Lecce",
    lat: 40.352,
    lng: 18.1691,
  },
  {
    name: "Mianwali",
    lat: 32.5853,
    lng: 71.5436,
  },
  {
    name: "Solikamsk",
    lat: 59.6333,
    lng: 56.7667,
  },
  {
    name: "Nahiyat al Karmah",
    lat: 33.3997,
    lng: 43.9089,
  },
  {
    name: "Bowling Green",
    lat: 36.9719,
    lng: -86.4373,
  },
  {
    name: "Valongo",
    lat: 41.1833,
    lng: -8.5,
  },
  {
    name: "Avignon",
    lat: 43.95,
    lng: 4.8075,
  },
  {
    name: "Biu",
    lat: 10.6204,
    lng: 12.19,
  },
  {
    name: "San Jose del Cabo",
    lat: 23.0614,
    lng: -109.7081,
  },
  {
    name: "Jaworzno",
    lat: 50.2,
    lng: 19.275,
  },
  {
    name: "Bislig",
    lat: 8.1833,
    lng: 126.35,
  },
  {
    name: "Gera",
    lat: 50.8782,
    lng: 12.0824,
  },
  {
    name: "Roswell",
    lat: 34.0391,
    lng: -84.3513,
  },
  {
    name: "Menifee",
    lat: 33.6909,
    lng: -117.1849,
  },
  {
    name: "Azumino",
    lat: 36.3028,
    lng: 137.8997,
  },
  {
    name: "Plantation",
    lat: 26.126,
    lng: -80.2617,
  },
  {
    name: "Dover",
    lat: 43.1887,
    lng: -70.8845,
  },
  {
    name: "Escalante",
    lat: 10.8333,
    lng: 123.5,
  },
  {
    name: "Gatchina",
    lat: 59.5667,
    lng: 30.1333,
  },
  {
    name: "Michurinsk",
    lat: 52.8922,
    lng: 40.4928,
  },
  {
    name: "Lorca",
    lat: 37.6833,
    lng: -1.7,
  },
  {
    name: "Santa Cruz Xoxocotlan",
    lat: 17.0264,
    lng: -96.7333,
  },
  {
    name: "Glazov",
    lat: 58.1333,
    lng: 52.65,
  },
  {
    name: "Portsmouth",
    lat: 36.8468,
    lng: -76.354,
  },
  {
    name: "Chino",
    lat: 33.9836,
    lng: -117.6654,
  },
  {
    name: "Marmaris",
    lat: 36.8564,
    lng: 28.2711,
  },
  {
    name: "Cape Breton",
    lat: 46.1389,
    lng: -60.1931,
  },
  {
    name: "Kwekwe",
    lat: -18.9167,
    lng: 29.9833,
  },
  {
    name: "Hanamaki Onsen",
    lat: 39.3886,
    lng: 141.1167,
  },
  {
    name: "Edmond",
    lat: 35.6689,
    lng: -97.4159,
  },
  {
    name: "Hanford",
    lat: 36.3274,
    lng: -119.6549,
  },
  {
    name: "Dearborn",
    lat: 42.3127,
    lng: -83.2129,
  },
  {
    name: "Menderes",
    lat: 38.254,
    lng: 27.134,
  },
  {
    name: "Voskresensk",
    lat: 55.3167,
    lng: 38.6833,
  },
  {
    name: "Higashi-Matsuyama",
    lat: 36.0422,
    lng: 139.4,
  },
  {
    name: "Epinal",
    lat: 48.1744,
    lng: 6.4512,
  },
  {
    name: "Livonia",
    lat: 42.3972,
    lng: -83.3733,
  },
  {
    name: "Hadera",
    lat: 32.45,
    lng: 34.9167,
  },
  {
    name: "Trelew",
    lat: -43.2533,
    lng: -65.3094,
  },
  {
    name: "Iserlohn",
    lat: 51.3833,
    lng: 7.6667,
  },
  {
    name: "Coronel",
    lat: -37.03,
    lng: -73.16,
  },
  {
    name: "Bafang",
    lat: 5.1704,
    lng: 10.18,
  },
  {
    name: "Teziutlan",
    lat: 19.8178,
    lng: -97.3667,
  },
  {
    name: "Vineland",
    lat: 39.4653,
    lng: -74.9981,
  },
  {
    name: "San Tan Valley",
    lat: 33.1879,
    lng: -111.5472,
  },
  {
    name: "Florence",
    lat: 34.1781,
    lng: -79.7877,
  },
  {
    name: "Portsmouth",
    lat: 43.058,
    lng: -70.7826,
  },
  {
    name: "Slidell",
    lat: 30.2881,
    lng: -89.7826,
  },
  {
    name: "Wukari",
    lat: 7.8704,
    lng: 9.78,
  },
  {
    name: "Samalut",
    lat: 28.3,
    lng: 30.7167,
  },
  {
    name: "Rafaela",
    lat: -31.2667,
    lng: -61.4833,
  },
  {
    name: "Velikiye Luki",
    lat: 56.35,
    lng: 30.5167,
  },
  {
    name: "Missoula",
    lat: 46.875,
    lng: -114.0214,
  },
  {
    name: "Hastings",
    lat: 50.85,
    lng: 0.57,
  },
  {
    name: "Kilosa",
    lat: -6.8396,
    lng: 36.99,
  },
  {
    name: "Auburn",
    lat: 32.6087,
    lng: -85.4899,
  },
  {
    name: "Foumban",
    lat: 5.7167,
    lng: 10.9167,
  },
  {
    name: "Rayachoti",
    lat: 14.05,
    lng: 78.75,
  },
  {
    name: "Naju",
    lat: 35.0283,
    lng: 126.7175,
  },
  {
    name: "Sampit",
    lat: -2.5329,
    lng: 112.95,
  },
  {
    name: "Lethbridge",
    lat: 49.6942,
    lng: -112.8328,
  },
  {
    name: "Rapid City",
    lat: 44.0716,
    lng: -103.2204,
  },
  {
    name: "Kitakami",
    lat: 39.2867,
    lng: 141.1131,
  },
  {
    name: "Rongwo",
    lat: 35.5165,
    lng: 102.0166,
  },
  {
    name: "Grahamstown",
    lat: -33.2996,
    lng: 26.52,
  },
  {
    name: "Itaituba",
    lat: -4.2761,
    lng: -55.9836,
  },
  {
    name: "Lee's Summit",
    lat: 38.9172,
    lng: -94.3816,
  },
  {
    name: "Terre Haute",
    lat: 39.4654,
    lng: -87.3763,
  },
  {
    name: "Saint-Jean-sur-Richelieu",
    lat: 45.3167,
    lng: -73.2667,
  },
  {
    name: "Suffolk",
    lat: 36.6953,
    lng: -76.6398,
  },
  {
    name: "Clarington",
    lat: 43.935,
    lng: -78.6083,
  },
  {
    name: "Kendu Bay",
    lat: -0.3596,
    lng: 34.64,
  },
  {
    name: "Maladzyechna",
    lat: 54.3136,
    lng: 26.8517,
  },
  {
    name: "Blacksburg",
    lat: 37.23,
    lng: -80.4279,
  },
  {
    name: "Arezzo",
    lat: 43.4617,
    lng: 11.875,
  },
  {
    name: "Modi`in Makkabbim Re`ut",
    lat: 31.9339,
    lng: 34.9856,
  },
  {
    name: "Duren",
    lat: 50.8,
    lng: 6.4833,
  },
  {
    name: "Mihara",
    lat: 34.4581,
    lng: 133.0039,
  },
  {
    name: "Pickering",
    lat: 43.8354,
    lng: -79.089,
  },
  {
    name: "Flensburg",
    lat: 54.7819,
    lng: 9.4367,
  },
  {
    name: "Imizucho",
    lat: 36.7125,
    lng: 137.0994,
  },
  {
    name: "Toms River",
    lat: 39.9895,
    lng: -74.1654,
  },
  {
    name: "Mount Pleasant",
    lat: 32.8538,
    lng: -79.8204,
  },
  {
    name: "Mogi Mirim",
    lat: -22.4319,
    lng: -46.9578,
  },
  {
    name: "Yao",
    lat: 12.8508,
    lng: 17.5608,
  },
  {
    name: "Votuporanga",
    lat: -20.4228,
    lng: -49.9728,
  },
  {
    name: "Cacapava",
    lat: -23.1008,
    lng: -45.7069,
  },
  {
    name: "Carson",
    lat: 33.8374,
    lng: -118.2559,
  },
  {
    name: "Tubingen",
    lat: 48.52,
    lng: 9.0556,
  },
  {
    name: "Greenburgh",
    lat: 41.033,
    lng: -73.8413,
  },
  {
    name: "Jalalpur Jattan",
    lat: 32.7667,
    lng: 74.2167,
  },
  {
    name: "Riverview",
    lat: 27.8227,
    lng: -82.3023,
  },
  {
    name: "Drammen",
    lat: 59.7572,
    lng: 10.1907,
  },
  {
    name: "Conroe",
    lat: 30.3239,
    lng: -95.4825,
  },
  {
    name: "Chauk",
    lat: 20.9085,
    lng: 94.823,
  },
  {
    name: "Livermore",
    lat: 37.6862,
    lng: -121.7608,
  },
  {
    name: "Quillota",
    lat: -32.8799,
    lng: -71.2474,
  },
  {
    name: "Lawton",
    lat: 34.6176,
    lng: -98.4203,
  },
  {
    name: "Chililabombwe",
    lat: -12.3667,
    lng: 27.8333,
  },
  {
    name: "Kavali",
    lat: 14.9123,
    lng: 79.9944,
  },
  {
    name: "Nanaimo",
    lat: 49.1642,
    lng: -123.9364,
  },
  {
    name: "Ma`arrat an Nu`man",
    lat: 35.6433,
    lng: 36.6683,
  },
  {
    name: "Mancheral",
    lat: 18.8679,
    lng: 79.4639,
  },
  {
    name: "Southport",
    lat: 53.6475,
    lng: -3.0053,
  },
  {
    name: "Kansk",
    lat: 56.2,
    lng: 95.7,
  },
  {
    name: "Kiselevsk",
    lat: 53.9833,
    lng: 86.7,
  },
  {
    name: "Zwickau",
    lat: 50.7189,
    lng: 12.4961,
  },
  {
    name: "Hezuo",
    lat: 34.9984,
    lng: 102.91,
  },
  {
    name: "Alaminos",
    lat: 16.1553,
    lng: 119.9808,
  },
  {
    name: "Pisa",
    lat: 43.7167,
    lng: 10.4,
  },
  {
    name: "New Braunfels",
    lat: 29.6994,
    lng: -98.1148,
  },
  {
    name: "Eraclea",
    lat: 45.6381,
    lng: 12.6583,
  },
  {
    name: "Tombua",
    lat: -15.8,
    lng: 11.85,
  },
  {
    name: "Kadiri",
    lat: 14.12,
    lng: 78.17,
  },
  {
    name: "Norrkoping",
    lat: 58.5954,
    lng: 16.1787,
  },
  {
    name: "Giessen",
    lat: 50.5833,
    lng: 8.6667,
  },
  {
    name: "Hosa'ina",
    lat: 7.5504,
    lng: 37.85,
  },
  {
    name: "Serdar",
    lat: 38.9764,
    lng: 56.2758,
  },
  {
    name: "Cantaura",
    lat: 9.3005,
    lng: -64.3564,
  },
  {
    name: "Kamensk-Shakhtinskiy",
    lat: 48.3167,
    lng: 40.2667,
  },
  {
    name: "Fall River",
    lat: 41.7137,
    lng: -71.1014,
  },
  {
    name: "Grimsby",
    lat: 53.5595,
    lng: -0.068,
  },
  {
    name: "Chosica",
    lat: -11.9431,
    lng: -76.7094,
  },
  {
    name: "Prijedor",
    lat: 44.9667,
    lng: 16.7,
  },
  {
    name: "Dunkerque",
    lat: 51.0383,
    lng: 2.3775,
  },
  {
    name: "Gitarama",
    lat: -2.0696,
    lng: 29.76,
  },
  {
    name: "Takagi",
    lat: 36.1669,
    lng: 136.2317,
  },
  {
    name: "Albany",
    lat: 31.5776,
    lng: -84.1762,
  },
  {
    name: "Sao Joao da Boa Vista",
    lat: -21.9689,
    lng: -46.7978,
  },
  {
    name: "Shwebo",
    lat: 22.5783,
    lng: 95.6929,
  },
  {
    name: "Halifax",
    lat: 53.725,
    lng: -1.863,
  },
  {
    name: "El Puerto de Santa Maria",
    lat: 36.6015,
    lng: -6.2381,
  },
  {
    name: "Bhakkar",
    lat: 31.6333,
    lng: 71.0667,
  },
  {
    name: "Norwalk",
    lat: 41.1144,
    lng: -73.4215,
  },
  {
    name: "O'Fallon",
    lat: 38.785,
    lng: -90.7175,
  },
  {
    name: "Ootacamund",
    lat: 11.4086,
    lng: 76.6939,
  },
  {
    name: "Victorias",
    lat: 10.9,
    lng: 123.0833,
  },
  {
    name: "Alafaya",
    lat: 28.5278,
    lng: -81.1865,
  },
  {
    name: "La Grita",
    lat: 8.1333,
    lng: -71.9833,
  },
  {
    name: "Launceston",
    lat: -41.4419,
    lng: 147.145,
  },
  {
    name: "Newton",
    lat: 42.3316,
    lng: -71.2085,
  },
  {
    name: "Zhob",
    lat: 31.3417,
    lng: 69.4486,
  },
  {
    name: "Mobara",
    lat: 35.4283,
    lng: 140.2881,
  },
  {
    name: "Qal`at Bishah",
    lat: 20.0087,
    lng: 42.5987,
  },
  {
    name: "Maiquetia",
    lat: 10.5958,
    lng: -66.9772,
  },
  {
    name: "Ratingen",
    lat: 51.3,
    lng: 6.85,
  },
  {
    name: "Sinjar",
    lat: 36.3208,
    lng: 41.8764,
  },
  {
    name: "Sudbury",
    lat: 46.49,
    lng: -81.01,
  },
  {
    name: "Buzuluk",
    lat: 52.7667,
    lng: 52.2667,
  },
  {
    name: "Lunen",
    lat: 51.6167,
    lng: 7.5167,
  },
  {
    name: "Changxing",
    lat: 25.867,
    lng: 116.3167,
  },
  {
    name: "Muncie",
    lat: 40.1989,
    lng: -85.395,
  },
  {
    name: "Jaguey Grande",
    lat: 22.5292,
    lng: -81.1325,
  },
  {
    name: "Fukuroi",
    lat: 34.7503,
    lng: 137.925,
  },
  {
    name: "Hamilton",
    lat: 40.2046,
    lng: -74.6765,
  },
  {
    name: "Ceylanpinar",
    lat: 36.9194,
    lng: 39.905,
  },
  {
    name: "Pergamino",
    lat: -33.8836,
    lng: -60.5669,
  },
  {
    name: "Anakapalle",
    lat: 17.68,
    lng: 83.02,
  },
  {
    name: "Koidu-Bulma",
    lat: 8.4405,
    lng: -10.85,
  },
  {
    name: "Gotenba",
    lat: 35.3086,
    lng: 138.935,
  },
  {
    name: "Paredes",
    lat: 41.2,
    lng: -8.3333,
  },
  {
    name: "Brindisi",
    lat: 40.6383,
    lng: 17.9458,
  },
  {
    name: "Tiflet",
    lat: 33.9,
    lng: -6.33,
  },
  {
    name: "Decatur",
    lat: 39.8556,
    lng: -88.9337,
  },
  {
    name: "Nova Lima",
    lat: -19.9858,
    lng: -43.8469,
  },
  {
    name: "Ad Diwem",
    lat: 13.9904,
    lng: 32.3,
  },
  {
    name: "Jackson",
    lat: 42.2431,
    lng: -84.4037,
  },
  {
    name: "Fort Myers",
    lat: 26.6195,
    lng: -81.8303,
  },
  {
    name: "Qaracuxur",
    lat: 40.3969,
    lng: 49.9733,
  },
  {
    name: "Campana",
    lat: -34.1667,
    lng: -58.9167,
  },
  {
    name: "Sekimachi",
    lat: 35.4958,
    lng: 136.9178,
  },
  {
    name: "Gubkin",
    lat: 51.2833,
    lng: 37.55,
  },
  {
    name: "Cardenas",
    lat: 23.0428,
    lng: -81.2036,
  },
  {
    name: "Goodyear",
    lat: 33.2613,
    lng: -112.3622,
  },
  {
    name: "Cheektowaga",
    lat: 42.9082,
    lng: -78.7466,
  },
  {
    name: "Aalst",
    lat: 50.9333,
    lng: 4.0333,
  },
  {
    name: "Kitakoriyamacho",
    lat: 34.6494,
    lng: 135.7828,
  },
  {
    name: "Kattagan",
    lat: 40.2,
    lng: 64.9167,
  },
  {
    name: "Paraiso",
    lat: 18.3961,
    lng: -93.2128,
  },
  {
    name: "Tumaco",
    lat: 1.81,
    lng: -78.81,
  },
  {
    name: "Novotroitsk",
    lat: 51.2067,
    lng: 58.3281,
  },
  {
    name: "Kharian",
    lat: 32.811,
    lng: 73.865,
  },
  {
    name: "Catalao",
    lat: -18.17,
    lng: -47.9419,
  },
  {
    name: "Keffi",
    lat: 8.849,
    lng: 7.8736,
  },
  {
    name: "Pariaman",
    lat: -0.6261,
    lng: 100.1206,
  },
  {
    name: "Dalton",
    lat: 34.769,
    lng: -84.9712,
  },
  {
    name: "Yokotemachi",
    lat: 39.3106,
    lng: 140.5533,
  },
  {
    name: "Santa Rosa Jauregui",
    lat: 20.7418,
    lng: -100.4473,
  },
  {
    name: "Ubatuba",
    lat: -23.4339,
    lng: -45.0708,
  },
  {
    name: "Clarkstown",
    lat: 41.1319,
    lng: -73.966,
  },
  {
    name: "San Antonio",
    lat: -33.5809,
    lng: -71.6132,
  },
  {
    name: "Shaoshanzhan",
    lat: 27.91,
    lng: 112.48,
  },
  {
    name: "Olavarria",
    lat: -36.9,
    lng: -60.3333,
  },
  {
    name: "Konstanz",
    lat: 47.6633,
    lng: 9.1753,
  },
  {
    name: "Bryan",
    lat: 30.6657,
    lng: -96.3668,
  },
  {
    name: "Zhezqazghan",
    lat: 47.7833,
    lng: 67.7,
  },
  {
    name: "Bugul'ma",
    lat: 54.5333,
    lng: 52.7833,
  },
  {
    name: "Shchekino",
    lat: 54.0143,
    lng: 37.5143,
  },
  {
    name: "Potiskum",
    lat: 11.7104,
    lng: 11.08,
  },
  {
    name: "Waukegan",
    lat: 42.3697,
    lng: -87.8716,
  },
  {
    name: "Ushiku",
    lat: 35.9833,
    lng: 140.15,
  },
  {
    name: "Anderson",
    lat: 40.0891,
    lng: -85.6893,
  },
  {
    name: "North Vancouver",
    lat: 49.3641,
    lng: -123.0066,
  },
  {
    name: "Redwood City",
    lat: 37.5026,
    lng: -122.2252,
  },
  {
    name: "Yeysk",
    lat: 46.7106,
    lng: 38.2778,
  },
  {
    name: "Chita",
    lat: 35,
    lng: 136.8667,
  },
  {
    name: "Hoover",
    lat: 33.3754,
    lng: -86.8064,
  },
  {
    name: "Brossard",
    lat: 45.4667,
    lng: -73.45,
  },
  {
    name: "Villingen-Schwenningen",
    lat: 48.0603,
    lng: 8.4586,
  },
  {
    name: "Town 'n' Country",
    lat: 28.0108,
    lng: -82.576,
  },
  {
    name: "Kineshma",
    lat: 57.45,
    lng: 42.15,
  },
  {
    name: "Lake Forest",
    lat: 33.6606,
    lng: -117.6712,
  },
  {
    name: "Treviso",
    lat: 45.6722,
    lng: 12.2422,
  },
  {
    name: "Napa",
    lat: 38.2976,
    lng: -122.3011,
  },
  {
    name: "Sumenep",
    lat: -7.0049,
    lng: 113.8496,
  },
  {
    name: "Jelenia Gora",
    lat: 50.9,
    lng: 15.7333,
  },
  {
    name: "Walvisbaai",
    lat: -22.9494,
    lng: 14.5069,
  },
  {
    name: "Junin",
    lat: -34.5939,
    lng: -60.9464,
  },
  {
    name: "Stockton-on-Tees",
    lat: 54.57,
    lng: -1.32,
  },
  {
    name: "Korgas",
    lat: 44.1256,
    lng: 80.4144,
  },
  {
    name: "Repentigny",
    lat: 45.7333,
    lng: -73.4667,
  },
  {
    name: "Largo",
    lat: 27.9088,
    lng: -82.7711,
  },
  {
    name: "Bloomington",
    lat: 44.8306,
    lng: -93.3151,
  },
  {
    name: "Marl",
    lat: 51.6667,
    lng: 7.1167,
  },
  {
    name: "Aruja",
    lat: -23.3967,
    lng: -46.3211,
  },
  {
    name: "Guider",
    lat: 9.9342,
    lng: 13.9486,
  },
  {
    name: "Johns Creek",
    lat: 34.0333,
    lng: -84.2027,
  },
  {
    name: "Tire",
    lat: 38.0833,
    lng: 27.7333,
  },
  {
    name: "Newport Beach",
    lat: 33.6151,
    lng: -117.8669,
  },
  {
    name: "Kimje",
    lat: 35.8017,
    lng: 126.8889,
  },
  {
    name: "Mission",
    lat: 26.2041,
    lng: -98.3251,
  },
  {
    name: "Muroran",
    lat: 42.3153,
    lng: 140.9736,
  },
  {
    name: "Worms",
    lat: 49.6319,
    lng: 8.3653,
  },
  {
    name: "Troy",
    lat: 42.5818,
    lng: -83.1457,
  },
  {
    name: "Madera",
    lat: 36.9631,
    lng: -120.0782,
  },
  {
    name: "Joplin",
    lat: 37.0758,
    lng: -94.5018,
  },
  {
    name: "Zheleznogorsk",
    lat: 56.25,
    lng: 93.5333,
  },
  {
    name: "Moriyama",
    lat: 35.0589,
    lng: 135.9944,
  },
  {
    name: "Chino Hills",
    lat: 33.9508,
    lng: -117.7253,
  },
  {
    name: "Sirsilla",
    lat: 18.38,
    lng: 78.83,
  },
  {
    name: "Chilliwack",
    lat: 49.1577,
    lng: -121.9509,
  },
  {
    name: "Pontevedra",
    lat: 42.4336,
    lng: -8.6475,
  },
  {
    name: "Ocana",
    lat: 8.2404,
    lng: -73.35,
  },
  {
    name: "Yurga",
    lat: 55.7333,
    lng: 84.9,
  },
  {
    name: "Redditch",
    lat: 52.3069,
    lng: -1.9492,
  },
  {
    name: "Wiener Neustadt",
    lat: 47.816,
    lng: 16.25,
  },
  {
    name: "Mian Channun",
    lat: 30.4397,
    lng: 72.3544,
  },
  {
    name: "Santana do Livramento",
    lat: -30.8908,
    lng: -55.5328,
  },
  {
    name: "Mijas",
    lat: 36.5956,
    lng: -4.6372,
  },
  {
    name: "Tual",
    lat: -5.6385,
    lng: 132.745,
  },
  {
    name: "Sao Sebastiao",
    lat: -23.76,
    lng: -45.41,
  },
  {
    name: "Chaykovskiy",
    lat: 56.7667,
    lng: 54.1167,
  },
  {
    name: "Franklin",
    lat: 35.9216,
    lng: -86.8525,
  },
  {
    name: "Velbert",
    lat: 51.34,
    lng: 7.0416,
  },
  {
    name: "Nakatsu",
    lat: 33.5983,
    lng: 131.1883,
  },
  {
    name: "Melbourne",
    lat: 28.1085,
    lng: -80.6627,
  },
  {
    name: "Al Hayy",
    lat: 32.1742,
    lng: 46.0433,
  },
  {
    name: "Port Huron",
    lat: 42.9822,
    lng: -82.4387,
  },
  {
    name: "Colonie",
    lat: 42.7396,
    lng: -73.7874,
  },
  {
    name: "Shirvan",
    lat: 37.3967,
    lng: 57.9294,
  },
  {
    name: "Springfield",
    lat: 39.9297,
    lng: -83.7957,
  },
  {
    name: "Kimitsu",
    lat: 35.3306,
    lng: 139.9025,
  },
  {
    name: "Guadalajara",
    lat: 40.6335,
    lng: -3.1669,
  },
  {
    name: "Dapitan",
    lat: 8.6549,
    lng: 123.4243,
  },
  {
    name: "Kaneyama",
    lat: 31.3833,
    lng: 130.85,
  },
  {
    name: "Minden",
    lat: 52.2883,
    lng: 8.9167,
  },
  {
    name: "Zephyrhills",
    lat: 28.2408,
    lng: -82.1796,
  },
  {
    name: "Omihachiman",
    lat: 35.1283,
    lng: 136.0981,
  },
  {
    name: "Bekobod",
    lat: 40.2258,
    lng: 69.2292,
  },
  {
    name: "Maple Ridge",
    lat: 49.2167,
    lng: -122.6,
  },
  {
    name: "La Louviere",
    lat: 50.4778,
    lng: 4.1881,
  },
  {
    name: "St. Augustine",
    lat: 29.8977,
    lng: -81.31,
  },
  {
    name: "Varese",
    lat: 45.8167,
    lng: 8.8333,
  },
  {
    name: "Peterborough",
    lat: 44.3,
    lng: -78.3167,
  },
  {
    name: "Pilar",
    lat: -34.4588,
    lng: -58.9142,
  },
  {
    name: "Science City of Munoz",
    lat: 15.7167,
    lng: 120.9,
  },
  {
    name: "Ust'-Ilimsk",
    lat: 58,
    lng: 102.6667,
  },
  {
    name: "Flagstaff",
    lat: 35.1872,
    lng: -111.6195,
  },
  {
    name: "Presidencia Roque Saenz Pena",
    lat: -26.7833,
    lng: -60.45,
  },
  {
    name: "Azov",
    lat: 47.1,
    lng: 39.4167,
  },
  {
    name: "Lujan",
    lat: -34.5796,
    lng: -59.11,
  },
  {
    name: "Agboville",
    lat: 5.9333,
    lng: -4.2167,
  },
  {
    name: "Campo Limpo",
    lat: -23.2064,
    lng: -46.7844,
  },
  {
    name: "Watampone",
    lat: -4.5328,
    lng: 120.3334,
  },
  {
    name: "Pleasanton",
    lat: 37.6663,
    lng: -121.8805,
  },
  {
    name: "Anapa",
    lat: 44.8944,
    lng: 37.3167,
  },
  {
    name: "Matao",
    lat: -21.6033,
    lng: -48.3658,
  },
  {
    name: "Dessau-Rosslau",
    lat: 51.8333,
    lng: 12.2333,
  },
  {
    name: "Bani Mazar",
    lat: 28.5,
    lng: 30.8,
  },
  {
    name: "Kentau",
    lat: 43.5169,
    lng: 68.5044,
  },
  {
    name: "Westland",
    lat: 42.3192,
    lng: -83.3805,
  },
  {
    name: "Gamagori",
    lat: 34.8264,
    lng: 137.2196,
  },
  {
    name: "Auburn",
    lat: 47.3039,
    lng: -122.2108,
  },
  {
    name: "Cranston",
    lat: 41.7658,
    lng: -71.4857,
  },
  {
    name: "Gobernador Galvez",
    lat: -33.0251,
    lng: -60.6337,
  },
  {
    name: "Kamareddipet",
    lat: 18.3167,
    lng: 78.35,
  },
  {
    name: "Athi River",
    lat: -1.45,
    lng: 36.9833,
  },
  {
    name: "Novoural'sk",
    lat: 57.25,
    lng: 60.0833,
  },
  {
    name: "Folsom",
    lat: 38.6668,
    lng: -121.1422,
  },
  {
    name: "Akiruno",
    lat: 35.7289,
    lng: 139.2942,
  },
  {
    name: "Springdale",
    lat: 36.1899,
    lng: -94.1574,
  },
  {
    name: "Taroudannt",
    lat: 30.4711,
    lng: -8.8778,
  },
  {
    name: "Sefrou",
    lat: 33.83,
    lng: -4.83,
  },
  {
    name: "Polatsk",
    lat: 55.4833,
    lng: 28.8,
  },
  {
    name: "Warwick",
    lat: 41.7062,
    lng: -71.4334,
  },
  {
    name: "Iwamizawa",
    lat: 43.1961,
    lng: 141.7758,
  },
  {
    name: "Passi",
    lat: 11.1,
    lng: 122.6333,
  },
  {
    name: "Albu Kamal",
    lat: 34.4504,
    lng: 40.9186,
  },
  {
    name: "Tanjay",
    lat: 9.5167,
    lng: 123.1583,
  },
  {
    name: "Tepeji del Rio de Ocampo",
    lat: 19.9039,
    lng: -99.3414,
  },
  {
    name: "Svyetlahorsk",
    lat: 52.6333,
    lng: 29.7333,
  },
  {
    name: "Farmington Hills",
    lat: 42.486,
    lng: -83.3771,
  },
  {
    name: "Neumunster",
    lat: 54.0714,
    lng: 9.99,
  },
  {
    name: "Gyoda",
    lat: 36.1389,
    lng: 139.4558,
  },
  {
    name: "Mackay",
    lat: -21.1411,
    lng: 149.1861,
  },
  {
    name: "Norderstedt",
    lat: 53.7064,
    lng: 10.0103,
  },
  {
    name: "Necochea",
    lat: -38.56,
    lng: -58.75,
  },
  {
    name: "Paloncha",
    lat: 17.5815,
    lng: 80.6765,
  },
  {
    name: "Newark",
    lat: 40.0705,
    lng: -82.4251,
  },
  {
    name: "Williamsburg",
    lat: 37.2692,
    lng: -76.7076,
  },
  {
    name: "Brooklyn Park",
    lat: 45.1112,
    lng: -93.3505,
  },
  {
    name: "Uvinza",
    lat: -5.1036,
    lng: 30.3911,
  },
  {
    name: "Hanno",
    lat: 35.8558,
    lng: 139.3278,
  },
  {
    name: "Kottagudem",
    lat: 17.55,
    lng: 80.63,
  },
  {
    name: "Mbalmayo",
    lat: 3.52,
    lng: 11.5122,
  },
  {
    name: "Namsan",
    lat: 42.2304,
    lng: 129.2304,
  },
  {
    name: "Andahuaylas",
    lat: -13.6575,
    lng: -73.3833,
  },
  {
    name: "Hattiesburg",
    lat: 31.3074,
    lng: -89.317,
  },
  {
    name: "Alexandria",
    lat: 31.2923,
    lng: -92.4702,
  },
  {
    name: "Jamshoro",
    lat: 25.4283,
    lng: 68.2822,
  },
  {
    name: "Maizuru",
    lat: 35.45,
    lng: 135.3167,
  },
  {
    name: "Meiganga",
    lat: 6.5172,
    lng: 14.2947,
  },
  {
    name: "Tall `Afar",
    lat: 36.3792,
    lng: 42.4497,
  },
  {
    name: "Balad",
    lat: 34.0147,
    lng: 44.1456,
  },
  {
    name: "Vila do Conde",
    lat: 41.35,
    lng: -8.75,
  },
  {
    name: "Sokcho",
    lat: 38.2083,
    lng: 128.5911,
  },
  {
    name: "San Carlos del Zulia",
    lat: 9,
    lng: -71.95,
  },
  {
    name: "Koktokay",
    lat: 47.0004,
    lng: 89.4666,
  },
  {
    name: "Capenda Camulemba",
    lat: -9.4196,
    lng: 18.43,
  },
  {
    name: "Patzcuaro",
    lat: 19.5164,
    lng: -101.6097,
  },
  {
    name: "Florence",
    lat: 34.8303,
    lng: -87.6654,
  },
  {
    name: "Chester",
    lat: 53.19,
    lng: -2.89,
  },
  {
    name: "Baracoa",
    lat: 20.3444,
    lng: -74.4956,
  },
  {
    name: "Valdosta",
    lat: 30.8502,
    lng: -83.2788,
  },
  {
    name: "Plymouth",
    lat: 45.0225,
    lng: -93.4618,
  },
  {
    name: "Yalta",
    lat: 44.4994,
    lng: 34.1553,
  },
  {
    name: "Cotui",
    lat: 19.06,
    lng: -70.15,
  },
  {
    name: "Torres Vedras",
    lat: 39.0833,
    lng: -9.2667,
  },
  {
    name: "Salmas",
    lat: 38.2,
    lng: 44.7667,
  },
  {
    name: "Buckeye",
    lat: 33.4314,
    lng: -112.6429,
  },
  {
    name: "Georgetown",
    lat: 30.6668,
    lng: -97.6953,
  },
  {
    name: "Natori-shi",
    lat: 38.1717,
    lng: 140.8919,
  },
  {
    name: "Mooka",
    lat: 36.4403,
    lng: 140.0131,
  },
  {
    name: "Pingyi",
    lat: 35.5104,
    lng: 117.62,
  },
  {
    name: "Yenakiieve",
    lat: 48.2311,
    lng: 38.2053,
  },
  {
    name: "Kadoma",
    lat: -18.35,
    lng: 29.9167,
  },
  {
    name: "Tanuku",
    lat: 16.75,
    lng: 81.7,
  },
  {
    name: "Cedar Park",
    lat: 30.5106,
    lng: -97.8196,
  },
  {
    name: "Klin",
    lat: 56.3339,
    lng: 36.7125,
  },
  {
    name: "Villa Maria",
    lat: -32.4103,
    lng: -63.2314,
  },
  {
    name: "Kokomo",
    lat: 40.464,
    lng: -86.1277,
  },
  {
    name: "Perris",
    lat: 33.7899,
    lng: -117.2233,
  },
  {
    name: "Huaral",
    lat: -11.5,
    lng: -77.2167,
  },
  {
    name: "St. Joseph",
    lat: 39.7599,
    lng: -94.821,
  },
  {
    name: "Agua Prieta",
    lat: 31.3258,
    lng: -109.5489,
  },
  {
    name: "Flower Mound",
    lat: 33.0344,
    lng: -97.1146,
  },
  {
    name: "Pharr",
    lat: 26.1685,
    lng: -98.1904,
  },
  {
    name: "Atascocita",
    lat: 29.9777,
    lng: -95.1953,
  },
  {
    name: "Alton",
    lat: 38.9034,
    lng: -90.1523,
  },
  {
    name: "Bamberg",
    lat: 49.8917,
    lng: 10.8917,
  },
  {
    name: "Loveland",
    lat: 40.4166,
    lng: -105.0623,
  },
  {
    name: "Bogo",
    lat: 11.0167,
    lng: 124,
  },
  {
    name: "Subulussalam",
    lat: 2.6422,
    lng: 98.0042,
  },
  {
    name: "Delmenhorst",
    lat: 53.0506,
    lng: 8.6317,
  },
  {
    name: "Essaouira",
    lat: 31.513,
    lng: -9.7687,
  },
  {
    name: "Nikko",
    lat: 36.7198,
    lng: 139.6982,
  },
  {
    name: "Rockhampton",
    lat: -23.375,
    lng: 150.5117,
  },
  {
    name: "Aligudarz",
    lat: 33.4006,
    lng: 49.6947,
  },
  {
    name: "Dondo",
    lat: -19.6167,
    lng: 34.75,
  },
  {
    name: "Boynton Beach",
    lat: 26.5281,
    lng: -80.0811,
  },
  {
    name: "Ban Laem Chabang",
    lat: 13.086,
    lng: 100.9247,
  },
  {
    name: "Tela",
    lat: 15.7833,
    lng: -87.4667,
  },
  {
    name: "Anderson",
    lat: 34.5211,
    lng: -82.6479,
  },
  {
    name: "Vyborg",
    lat: 60.7092,
    lng: 28.7442,
  },
  {
    name: "Manbij",
    lat: 36.5333,
    lng: 37.95,
  },
  {
    name: "Usol'ye-Sibirskoye",
    lat: 52.75,
    lng: 103.65,
  },
  {
    name: "Toyooka",
    lat: 35.5333,
    lng: 134.8167,
  },
  {
    name: "Kropotkin",
    lat: 45.4333,
    lng: 40.5667,
  },
  {
    name: "Maitland",
    lat: -32.7167,
    lng: 151.55,
  },
  {
    name: "Marsala",
    lat: 37.8054,
    lng: 12.4387,
  },
  {
    name: "Parma",
    lat: 41.3843,
    lng: -81.7286,
  },
  {
    name: "Bor",
    lat: 56.3603,
    lng: 44.0592,
  },
  {
    name: "Bodhan",
    lat: 18.67,
    lng: 77.9,
  },
  {
    name: "Layton",
    lat: 41.0769,
    lng: -111.9621,
  },
  {
    name: "Balqash",
    lat: 46.85,
    lng: 75,
  },
  {
    name: "Tsubame",
    lat: 37.6667,
    lng: 138.9667,
  },
  {
    name: "Villa Victoria",
    lat: 19.4333,
    lng: -100,
  },
  {
    name: "Elizabethtown",
    lat: 37.703,
    lng: -85.877,
  },
  {
    name: "Beziers",
    lat: 43.3476,
    lng: 3.219,
  },
  {
    name: "Daisen",
    lat: 39.4531,
    lng: 140.4756,
  },
  {
    name: "Texarkana",
    lat: 33.4487,
    lng: -94.0815,
  },
  {
    name: "Toyomamachi-teraike",
    lat: 38.6919,
    lng: 141.1878,
  },
  {
    name: "Linkou",
    lat: 45.2819,
    lng: 130.2519,
  },
  {
    name: "Honjo",
    lat: 36.2439,
    lng: 139.1903,
  },
  {
    name: "Numan",
    lat: 9.4669,
    lng: 12.0328,
  },
  {
    name: "Ciudad de Huajuapam de Leon",
    lat: 17.8039,
    lng: -97.7758,
  },
  {
    name: "Viersen",
    lat: 51.2556,
    lng: 6.3917,
  },
  {
    name: "Bebedouro",
    lat: -20.9494,
    lng: -48.4792,
  },
  {
    name: "Ryugasaki",
    lat: 35.9167,
    lng: 140.1833,
  },
  {
    name: "Guildford",
    lat: 51.2365,
    lng: -0.5703,
  },
  {
    name: "Sint-Niklaas",
    lat: 51.1644,
    lng: 4.1392,
  },
  {
    name: "Karur",
    lat: 10.9504,
    lng: 78.0833,
  },
  {
    name: "Armant",
    lat: 25.6167,
    lng: 32.5333,
  },
  {
    name: "Zhlobin",
    lat: 52.9,
    lng: 30.0333,
  },
  {
    name: "Bakhmut",
    lat: 48.6044,
    lng: 38.0067,
  },
  {
    name: "The Villages",
    lat: 28.9021,
    lng: -81.9888,
  },
  {
    name: "Pattoki",
    lat: 31.0214,
    lng: 73.8528,
  },
  {
    name: "Marburg",
    lat: 50.8167,
    lng: 8.7667,
  },
  {
    name: "Soke",
    lat: 37.7512,
    lng: 27.4103,
  },
  {
    name: "Kankakee",
    lat: 41.1019,
    lng: -87.8643,
  },
  {
    name: "Ende",
    lat: -8.8333,
    lng: 121.65,
  },
  {
    name: "Porterville",
    lat: 36.0644,
    lng: -119.0338,
  },
  {
    name: "Harunabad",
    lat: 29.61,
    lng: 73.1361,
  },
  {
    name: "Gelendzhik",
    lat: 44.5608,
    lng: 38.0767,
  },
  {
    name: "Chernogorsk",
    lat: 53.8167,
    lng: 91.2833,
  },
  {
    name: "Balkh",
    lat: 36.7581,
    lng: 66.8989,
  },
  {
    name: "Baytown",
    lat: 29.7586,
    lng: -94.9669,
  },
  {
    name: "Upland",
    lat: 34.1178,
    lng: -117.6603,
  },
  {
    name: "Siedlce",
    lat: 52.1833,
    lng: 22.2833,
  },
  {
    name: "Al Musayyib",
    lat: 32.7786,
    lng: 44.29,
  },
  {
    name: "Pyapon",
    lat: 16.2853,
    lng: 95.6786,
  },
  {
    name: "Caserta",
    lat: 41.0667,
    lng: 14.3333,
  },
  {
    name: "Mafra",
    lat: 38.9333,
    lng: -9.3333,
  },
  {
    name: "Camarillo",
    lat: 34.223,
    lng: -119.0322,
  },
  {
    name: "Sarqan",
    lat: 45.4203,
    lng: 79.9149,
  },
  {
    name: "Dschang",
    lat: 5.45,
    lng: 10.05,
  },
  {
    name: "Tuban",
    lat: -6.8995,
    lng: 112.05,
  },
  {
    name: "Fukuchiyama",
    lat: 35.2967,
    lng: 135.1264,
  },
  {
    name: "Balashov",
    lat: 51.55,
    lng: 43.1667,
  },
  {
    name: "Wilhelmshaven",
    lat: 53.5167,
    lng: 8.1333,
  },
  {
    name: "Shostka",
    lat: 51.8657,
    lng: 33.4766,
  },
  {
    name: "Jablah",
    lat: 35.3597,
    lng: 35.9214,
  },
  {
    name: "Asti",
    lat: 44.9,
    lng: 8.2069,
  },
  {
    name: "E'erguna",
    lat: 50.2411,
    lng: 120.172,
  },
  {
    name: "Rheine",
    lat: 52.2833,
    lng: 7.4333,
  },
  {
    name: "South Jordan",
    lat: 40.557,
    lng: -111.9782,
  },
  {
    name: "Palma Soriano",
    lat: 20.2139,
    lng: -75.9919,
  },
  {
    name: "Stakhanov",
    lat: 48.5472,
    lng: 38.6361,
  },
  {
    name: "Nakatsugawa",
    lat: 35.4875,
    lng: 137.5006,
  },
  {
    name: "Bais",
    lat: 9.5907,
    lng: 123.1213,
  },
  {
    name: "Battle Creek",
    lat: 42.2986,
    lng: -85.2296,
  },
  {
    name: "Ibiuna",
    lat: -23.6564,
    lng: -47.2225,
  },
  {
    name: "Venado Tuerto",
    lat: -33.75,
    lng: -61.9667,
  },
  {
    name: "Sangolqui",
    lat: -0.3344,
    lng: -78.4475,
  },
  {
    name: "Livingston",
    lat: 15.83,
    lng: -88.75,
  },
  {
    name: "Myslowice",
    lat: 50.2333,
    lng: 19.1333,
  },
  {
    name: "Berdychiv",
    lat: 49.8919,
    lng: 28.6,
  },
  {
    name: "Jonesboro",
    lat: 35.8212,
    lng: -90.6791,
  },
  {
    name: "Lins",
    lat: -21.6786,
    lng: -49.7425,
  },
  {
    name: "San Marcos",
    lat: 29.8736,
    lng: -97.9381,
  },
  {
    name: "Lod",
    lat: 31.95,
    lng: 34.9,
  },
  {
    name: "Troisdorf",
    lat: 50.8161,
    lng: 7.1556,
  },
  {
    name: "Sasagawa",
    lat: 37.2867,
    lng: 140.3728,
  },
  {
    name: "Piotrkow Trybunalski",
    lat: 51.4,
    lng: 19.6833,
  },
  {
    name: "Tailai",
    lat: 46.3904,
    lng: 123.41,
  },
  {
    name: "San Ramon",
    lat: 37.7625,
    lng: -121.9365,
  },
  {
    name: "Toba Tek Singh",
    lat: 30.9667,
    lng: 72.4833,
  },
  {
    name: "Jabuticabal",
    lat: -21.255,
    lng: -48.3219,
  },
  {
    name: "Ovalle",
    lat: -30.6031,
    lng: -71.203,
  },
  {
    name: "Kengtung",
    lat: 21.2914,
    lng: 99.6039,
  },
  {
    name: "Lake Jackson",
    lat: 29.0516,
    lng: -95.4522,
  },
  {
    name: "Bethlehem",
    lat: 40.6266,
    lng: -75.3679,
  },
  {
    name: "Gandia",
    lat: 38.9667,
    lng: -0.1822,
  },
  {
    name: "Shadrinsk",
    lat: 56.0833,
    lng: 63.6333,
  },
  {
    name: "Bayreuth",
    lat: 49.9481,
    lng: 11.5783,
  },
  {
    name: "Tatebayashi",
    lat: 36.245,
    lng: 139.5422,
  },
  {
    name: "Wyoming",
    lat: 42.8909,
    lng: -85.7066,
  },
  {
    name: "Dubna",
    lat: 56.75,
    lng: 37.15,
  },
  {
    name: "Oshkosh",
    lat: 44.0228,
    lng: -88.5619,
  },
  {
    name: "Bonab",
    lat: 37.3403,
    lng: 46.0561,
  },
  {
    name: "Hammond",
    lat: 41.6169,
    lng: -87.491,
  },
  {
    name: "Yurihonjo",
    lat: 39.3858,
    lng: 140.0489,
  },
  {
    name: "Missouri City",
    lat: 29.563,
    lng: -95.5365,
  },
  {
    name: "Luneburg",
    lat: 53.2525,
    lng: 10.4144,
  },
  {
    name: "Pasco",
    lat: 46.2506,
    lng: -119.1304,
  },
  {
    name: "Mangalagiri",
    lat: 16.43,
    lng: 80.55,
  },
  {
    name: "Kawartha Lakes",
    lat: 44.35,
    lng: -78.75,
  },
  {
    name: "Bombo",
    lat: 0.5833,
    lng: 32.5333,
  },
  {
    name: "Wheeling",
    lat: 40.0752,
    lng: -80.6951,
  },
  {
    name: "Itahari",
    lat: 26.6667,
    lng: 87.2833,
  },
  {
    name: "Tatsunocho-tominaga",
    lat: 34.8581,
    lng: 134.5456,
  },
  {
    name: "Valle Alto",
    lat: 25.5667,
    lng: -100.25,
  },
  {
    name: "Standerton",
    lat: -26.95,
    lng: 29.25,
  },
  {
    name: "Idah",
    lat: 7.1104,
    lng: 6.7399,
  },
  {
    name: "Dorsten",
    lat: 51.66,
    lng: 6.9642,
  },
  {
    name: "Rancho Cordova",
    lat: 38.574,
    lng: -121.2523,
  },
  {
    name: "Brick",
    lat: 40.06,
    lng: -74.1099,
  },
  {
    name: "Gode",
    lat: 5.95,
    lng: 43.45,
  },
  {
    name: "Lamitan",
    lat: 6.65,
    lng: 122.1333,
  },
  {
    name: "Conway",
    lat: 35.0754,
    lng: -92.4694,
  },
  {
    name: "Gary",
    lat: 41.5906,
    lng: -87.3472,
  },
  {
    name: "Bunbury",
    lat: -33.3333,
    lng: 115.6333,
  },
  {
    name: "Castrop-Rauxel",
    lat: 51.55,
    lng: 7.3167,
  },
  {
    name: "Altoona",
    lat: 40.5082,
    lng: -78.4007,
  },
  {
    name: "Lodi",
    lat: 38.1218,
    lng: -121.2932,
  },
  {
    name: "Arlington Heights",
    lat: 42.0955,
    lng: -87.9825,
  },
  {
    name: "Darhan",
    lat: 49.6167,
    lng: 106.35,
  },
  {
    name: "Shibukawa",
    lat: 36.4833,
    lng: 139,
  },
  {
    name: "Nizhyn",
    lat: 51.05,
    lng: 31.9,
  },
  {
    name: "Piracununga",
    lat: -21.9961,
    lng: -47.4258,
  },
  {
    name: "Burnley",
    lat: 53.789,
    lng: -2.248,
  },
  {
    name: "Kasama",
    lat: 36.345,
    lng: 140.3042,
  },
  {
    name: "Kendall",
    lat: 25.6697,
    lng: -80.3556,
  },
  {
    name: "Grand-Bassam",
    lat: 5.2,
    lng: -3.7333,
  },
  {
    name: "Waldorf",
    lat: 38.6085,
    lng: -76.9195,
  },
  {
    name: "Bolingbrook",
    lat: 41.6903,
    lng: -88.1019,
  },
  {
    name: "Inuyama",
    lat: 35.3833,
    lng: 136.95,
  },
  {
    name: "Rochester Hills",
    lat: 42.6645,
    lng: -83.1563,
  },
  {
    name: "Novoaltaysk",
    lat: 53.4,
    lng: 83.9333,
  },
  {
    name: "Winchester",
    lat: 39.1735,
    lng: -78.1746,
  },
  {
    name: "Framingham",
    lat: 42.3085,
    lng: -71.4368,
  },
  {
    name: "Detmold",
    lat: 51.9378,
    lng: 8.8833,
  },
  {
    name: "Cinar",
    lat: 37.7256,
    lng: 40.4147,
  },
  {
    name: "Mineral'nyye Vody",
    lat: 44.2008,
    lng: 43.1125,
  },
  {
    name: "Kara-Balta",
    lat: 42.8306,
    lng: 73.8857,
  },
  {
    name: "Hilton Head Island",
    lat: 32.1896,
    lng: -80.7499,
  },
  {
    name: "Sundsvall",
    lat: 62.4001,
    lng: 17.3167,
  },
  {
    name: "Union City",
    lat: 37.603,
    lng: -122.0187,
  },
  {
    name: "Yelabuga",
    lat: 55.7667,
    lng: 52.0333,
  },
  {
    name: "San Ramon de la Nueva Oran",
    lat: -23.1361,
    lng: -64.3222,
  },
  {
    name: "Troitsk",
    lat: 54.0833,
    lng: 61.5667,
  },
  {
    name: "Owensboro",
    lat: 37.7574,
    lng: -87.1173,
  },
  {
    name: "Jackson",
    lat: 35.6535,
    lng: -88.8353,
  },
  {
    name: "Kairana",
    lat: 29.4,
    lng: 77.2,
  },
  {
    name: "Riberalta",
    lat: -10.983,
    lng: -66.1,
  },
  {
    name: "Arnsberg",
    lat: 51.3967,
    lng: 8.0644,
  },
  {
    name: "Prince George",
    lat: 53.9169,
    lng: -122.7494,
  },
  {
    name: "Kostiantynivka",
    lat: 48.5333,
    lng: 37.7167,
  },
  {
    name: "Ixmiquilpan",
    lat: 20.4861,
    lng: -99.2589,
  },
  {
    name: "Yegor'yevsk",
    lat: 55.3667,
    lng: 39.0167,
  },
  {
    name: "Bawku",
    lat: 11.06,
    lng: -0.2422,
  },
  {
    name: "Bonao",
    lat: 18.942,
    lng: -70.409,
  },
  {
    name: "Otawara",
    lat: 36.8667,
    lng: 140.0167,
  },
  {
    name: "Takestan",
    lat: 36.0694,
    lng: 49.6958,
  },
  {
    name: "Linares",
    lat: -35.8454,
    lng: -71.5979,
  },
  {
    name: "Shrewsbury",
    lat: 52.708,
    lng: -2.754,
  },
  {
    name: "Cleveland",
    lat: 35.1817,
    lng: -84.8707,
  },
  {
    name: "Wausau",
    lat: 44.962,
    lng: -89.6459,
  },
  {
    name: "Ostrowiec Swietokrzyski",
    lat: 50.9333,
    lng: 21.4,
  },
  {
    name: "Dale City",
    lat: 38.6473,
    lng: -77.3459,
  },
  {
    name: "Anniston",
    lat: 33.6712,
    lng: -85.8136,
  },
  {
    name: "Lanxi",
    lat: 46.2664,
    lng: 126.276,
  },
  {
    name: "Brakpan",
    lat: -26.2353,
    lng: 28.37,
  },
  {
    name: "Kirovo-Chepetsk",
    lat: 58.55,
    lng: 50.0167,
  },
  {
    name: "Apple Valley",
    lat: 34.5328,
    lng: -117.2104,
  },
  {
    name: "Ishioka",
    lat: 36.1833,
    lng: 140.2833,
  },
  {
    name: "Ludenscheid",
    lat: 51.2198,
    lng: 7.6273,
  },
  {
    name: "Vinhedo",
    lat: -23.03,
    lng: -46.975,
  },
  {
    name: "Landshut",
    lat: 48.5397,
    lng: 12.1508,
  },
  {
    name: "Katori",
    lat: 35.8978,
    lng: 140.4992,
  },
  {
    name: "Sault Ste. Marie",
    lat: 46.5333,
    lng: -84.35,
  },
  {
    name: "Nepalganj",
    lat: 28.05,
    lng: 81.6167,
  },
  {
    name: "Mansfield",
    lat: 40.7656,
    lng: -82.5275,
  },
  {
    name: "Tatvan",
    lat: 38.5066,
    lng: 42.2816,
  },
  {
    name: "Cuamba",
    lat: -14.82,
    lng: 36.5486,
  },
  {
    name: "Tokar",
    lat: 18.4333,
    lng: 37.7333,
  },
  {
    name: "Shakargarh",
    lat: 32.2628,
    lng: 75.1583,
  },
  {
    name: "Tan-Tan",
    lat: 28.4333,
    lng: -11.1,
  },
  {
    name: "Chapayevsk",
    lat: 52.9833,
    lng: 49.7167,
  },
  {
    name: "Itapira",
    lat: -22.4361,
    lng: -46.8217,
  },
  {
    name: "Kalamata",
    lat: 37.0389,
    lng: 22.1142,
  },
  {
    name: "Vsevolozhsk",
    lat: 60.016,
    lng: 30.6663,
  },
  {
    name: "Montepuez",
    lat: -13.1167,
    lng: 39,
  },
  {
    name: "Keshan",
    lat: 48.0263,
    lng: 125.866,
  },
  {
    name: "Belovo",
    lat: 54.4167,
    lng: 86.3,
  },
  {
    name: "Schaumburg",
    lat: 42.0307,
    lng: -88.0838,
  },
  {
    name: "Pocatello",
    lat: 42.8724,
    lng: -112.4646,
  },
  {
    name: "Tres Coracoes",
    lat: -21.6947,
    lng: -45.2553,
  },
  {
    name: "Woodbury",
    lat: 44.9056,
    lng: -92.923,
  },
  {
    name: "Sotik",
    lat: -0.6796,
    lng: 35.12,
  },
  {
    name: "Southfield",
    lat: 42.4765,
    lng: -83.2605,
  },
  {
    name: "Yafran",
    lat: 32.0628,
    lng: 12.5267,
  },
  {
    name: "Maple Grove",
    lat: 45.1089,
    lng: -93.4626,
  },
  {
    name: "Penafiel",
    lat: 41.2,
    lng: -8.2833,
  },
  {
    name: "Pittsburg",
    lat: 38.0182,
    lng: -121.8964,
  },
  {
    name: "Concepcion del Uruguay",
    lat: -32.4833,
    lng: -58.2333,
  },
  {
    name: "Morgantown",
    lat: 39.638,
    lng: -79.9468,
  },
  {
    name: "Brandenburg",
    lat: 52.4117,
    lng: 12.5561,
  },
  {
    name: "Mansfield",
    lat: 32.569,
    lng: -97.1211,
  },
  {
    name: "Hammond",
    lat: 30.5061,
    lng: -90.4563,
  },
  {
    name: "Dothan",
    lat: 31.2335,
    lng: -85.4069,
  },
  {
    name: "Harrisonburg",
    lat: 38.4361,
    lng: -78.8735,
  },
  {
    name: "Wenatchee",
    lat: 47.4356,
    lng: -120.3283,
  },
  {
    name: "Goya",
    lat: -29.1333,
    lng: -59.25,
  },
  {
    name: "Waukesha",
    lat: 43.0087,
    lng: -88.2464,
  },
  {
    name: "Tagaytay",
    lat: 14.1,
    lng: 120.9333,
  },
  {
    name: "Ellicott City",
    lat: 39.2773,
    lng: -76.8344,
  },
  {
    name: "Colon",
    lat: 22.7225,
    lng: -80.9067,
  },
  {
    name: "Tibati",
    lat: 6.4669,
    lng: 12.6158,
  },
  {
    name: "Coffs Harbour",
    lat: -30.3022,
    lng: 153.1189,
  },
  {
    name: "Mun'gyong",
    lat: 36.5939,
    lng: 128.2014,
  },
  {
    name: "Redmond",
    lat: 47.6762,
    lng: -122.1169,
  },
  {
    name: "Kawm Umbu",
    lat: 24.4667,
    lng: 32.95,
  },
  {
    name: "Uwajima",
    lat: 33.2233,
    lng: 132.5606,
  },
  {
    name: "Florida",
    lat: 21.5294,
    lng: -78.2228,
  },
  {
    name: "Izmayil",
    lat: 45.35,
    lng: 28.8333,
  },
  {
    name: "Bocholt",
    lat: 51.8333,
    lng: 6.6167,
  },
  {
    name: "Aschaffenburg",
    lat: 49.9757,
    lng: 9.1478,
  },
  {
    name: "Lisburn",
    lat: 54.5167,
    lng: -6.0333,
  },
  {
    name: "Sarnia",
    lat: 42.9994,
    lng: -82.3089,
  },
  {
    name: "Keighley",
    lat: 53.867,
    lng: -1.911,
  },
  {
    name: "Wood Buffalo",
    lat: 57.6042,
    lng: -111.3284,
  },
  {
    name: "Merignac",
    lat: 44.8386,
    lng: -0.6436,
  },
  {
    name: "Sumter",
    lat: 33.9392,
    lng: -80.393,
  },
  {
    name: "Gniezno",
    lat: 52.5333,
    lng: 17.6,
  },
  {
    name: "Redlands",
    lat: 34.0511,
    lng: -117.1712,
  },
  {
    name: "Bapatla",
    lat: 15.8889,
    lng: 80.47,
  },
  {
    name: "Daphne",
    lat: 30.6286,
    lng: -87.8866,
  },
  {
    name: "Markapur",
    lat: 15.735,
    lng: 79.27,
  },
  {
    name: "Mount Vernon",
    lat: 48.4202,
    lng: -122.3115,
  },
  {
    name: "Villa Tunari",
    lat: -16.9725,
    lng: -65.42,
  },
  {
    name: "Saint-Nazaire",
    lat: 47.2806,
    lng: -2.2086,
  },
  {
    name: "Malaut",
    lat: 30.19,
    lng: 74.499,
  },
  {
    name: "Guasavito",
    lat: 25.5744,
    lng: -108.4706,
  },
  {
    name: "Verkhnyaya Pyshma",
    lat: 56.9667,
    lng: 60.5833,
  },
  {
    name: "Placetas",
    lat: 22.3158,
    lng: -79.6556,
  },
  {
    name: "Gibara",
    lat: 21.1072,
    lng: -76.1367,
  },
  {
    name: "Kladno",
    lat: 50.1431,
    lng: 14.1053,
  },
  {
    name: "Cabudare",
    lat: 10.0331,
    lng: -69.2633,
  },
  {
    name: "Entebbe",
    lat: 0.05,
    lng: 32.46,
  },
  {
    name: "Baiquan",
    lat: 47.6018,
    lng: 126.0819,
  },
  {
    name: "Weston",
    lat: 26.1006,
    lng: -80.4054,
  },
  {
    name: "Ban Nong Prue",
    lat: 12.9227,
    lng: 100.9375,
  },
  {
    name: "Bundaberg",
    lat: -24.85,
    lng: 152.35,
  },
  {
    name: "Anzhero-Sudzhensk",
    lat: 56.0833,
    lng: 86.0333,
  },
  {
    name: "St. Charles",
    lat: 38.7954,
    lng: -90.5157,
  },
  {
    name: "Cherry Hill",
    lat: 39.9034,
    lng: -74.9947,
  },
  {
    name: "Badvel",
    lat: 14.75,
    lng: 79.05,
  },
  {
    name: "Hujra Shah Muqim",
    lat: 30.7333,
    lng: 73.8167,
  },
  {
    name: "Chateauguay",
    lat: 45.38,
    lng: -73.75,
  },
  {
    name: "Novomoskovs'k",
    lat: 48.6328,
    lng: 35.2239,
  },
  {
    name: "Zenica",
    lat: 44.2039,
    lng: 17.9078,
  },
  {
    name: "Janesville",
    lat: 42.6855,
    lng: -89.0136,
  },
  {
    name: "Kabirwala",
    lat: 30.4068,
    lng: 71.8667,
  },
  {
    name: "Loule",
    lat: 37.144,
    lng: -8.0235,
  },
  {
    name: "Sherman",
    lat: 33.6274,
    lng: -96.6218,
  },
  {
    name: "North Richland Hills",
    lat: 32.8605,
    lng: -97.218,
  },
  {
    name: "Chekhov",
    lat: 55.1481,
    lng: 37.4769,
  },
  {
    name: "Ritto",
    lat: 35.0217,
    lng: 135.9981,
  },
  {
    name: "Reconquista",
    lat: -29.1443,
    lng: -59.6438,
  },
  {
    name: "Bur Fu'ad",
    lat: 31.2314,
    lng: 32.3253,
  },
  {
    name: "Benidorm",
    lat: 38.5342,
    lng: -0.1314,
  },
  {
    name: "Tanabe",
    lat: 33.7333,
    lng: 135.3833,
  },
  {
    name: "Kovel'",
    lat: 51.2167,
    lng: 24.7167,
  },
  {
    name: "Broomfield",
    lat: 39.9541,
    lng: -105.0527,
  },
  {
    name: "Zhanggu",
    lat: 30.9504,
    lng: 101.9167,
  },
  {
    name: "Smila",
    lat: 49.2167,
    lng: 31.8667,
  },
  {
    name: "Sipalay",
    lat: 9.75,
    lng: 122.4,
  },
  {
    name: "El Paso de Robles",
    lat: 35.6394,
    lng: -120.656,
  },
  {
    name: "Bristol",
    lat: 36.5572,
    lng: -82.2154,
  },
  {
    name: "Rosetta",
    lat: 31.4014,
    lng: 30.4194,
  },
  {
    name: "Walnut Creek",
    lat: 37.9024,
    lng: -122.0398,
  },
  {
    name: "Odate",
    lat: 40.2717,
    lng: 140.5647,
  },
  {
    name: "Villa del Rosario",
    lat: 7.8353,
    lng: -72.4736,
  },
  {
    name: "Colmar",
    lat: 48.0817,
    lng: 7.3556,
  },
  {
    name: "Phu Quoc",
    lat: 10.2289,
    lng: 103.9572,
  },
  {
    name: "Qo`ng`irot Shahri",
    lat: 43.0758,
    lng: 58.9067,
  },
  {
    name: "Az Zubaydiyah",
    lat: 32.7588,
    lng: 45.1773,
  },
  {
    name: "Oshnaviyeh",
    lat: 37.0397,
    lng: 45.0983,
  },
  {
    name: "Jorhat",
    lat: 26.75,
    lng: 94.2167,
  },
  {
    name: "Saldanha",
    lat: -32.9978,
    lng: 17.9456,
  },
  {
    name: "Celle",
    lat: 52.6256,
    lng: 10.0825,
  },
  {
    name: "Kempten",
    lat: 47.7333,
    lng: 10.3167,
  },
  {
    name: "Isna",
    lat: 25.2933,
    lng: 32.5564,
  },
  {
    name: "Hasselt",
    lat: 50.9304,
    lng: 5.3383,
  },
  {
    name: "Glen Burnie",
    lat: 39.1559,
    lng: -76.6072,
  },
  {
    name: "Solok",
    lat: -0.7883,
    lng: 100.6542,
  },
  {
    name: "Mansehra",
    lat: 34.3333,
    lng: 73.2,
  },
  {
    name: "Suwalki",
    lat: 54.0833,
    lng: 22.9333,
  },
  {
    name: "Lehi",
    lat: 40.4136,
    lng: -111.8726,
  },
  {
    name: "Casas Adobes",
    lat: 32.3423,
    lng: -111.0114,
  },
  {
    name: "Saint-Jerome",
    lat: 45.7833,
    lng: -74,
  },
  {
    name: "Guajara-Mirim",
    lat: -10.8,
    lng: -65.3499,
  },
  {
    name: "Samch'ok",
    lat: 37.4406,
    lng: 129.1708,
  },
  {
    name: "Homestead",
    lat: 25.4665,
    lng: -80.4472,
  },
  {
    name: "West Bend",
    lat: 43.4184,
    lng: -88.1824,
  },
  {
    name: "Delray Beach",
    lat: 26.455,
    lng: -80.0905,
  },
  {
    name: "Ongjang",
    lat: 37.9371,
    lng: 125.3571,
  },
  {
    name: "Sheboygan",
    lat: 43.7403,
    lng: -87.7316,
  },
  {
    name: "Aqsu",
    lat: 52.0333,
    lng: 76.9167,
  },
  {
    name: "Sabae",
    lat: 35.9567,
    lng: 136.1844,
  },
  {
    name: "Nova Kakhovka",
    lat: 46.7667,
    lng: 33.3667,
  },
  {
    name: "Bafia",
    lat: 4.7425,
    lng: 11.2247,
  },
  {
    name: "Lake Elsinore",
    lat: 33.6847,
    lng: -117.3344,
  },
  {
    name: "Liuhe",
    lat: 42.2789,
    lng: 125.7173,
  },
  {
    name: "Fulda",
    lat: 50.5528,
    lng: 9.6775,
  },
  {
    name: "Daytona Beach",
    lat: 29.1994,
    lng: -81.0982,
  },
  {
    name: "Ragusa",
    lat: 36.93,
    lng: 14.73,
  },
  {
    name: "Minusinsk",
    lat: 53.7,
    lng: 91.6833,
  },
  {
    name: "Mocuba",
    lat: -16.8391,
    lng: 36.9855,
  },
  {
    name: "Villanueva y Geltru",
    lat: 41.2243,
    lng: 1.7259,
  },
  {
    name: "Los Lunas",
    lat: 34.8115,
    lng: -106.7803,
  },
  {
    name: "Mocuba",
    lat: -16.8496,
    lng: 38.26,
  },
  {
    name: "Sosnovyy Bor",
    lat: 59.9,
    lng: 29.1,
  },
  {
    name: "Dinslaken",
    lat: 51.5667,
    lng: 6.7333,
  },
  {
    name: "Chulucanas",
    lat: -5.1092,
    lng: -80.1625,
  },
  {
    name: "Aalen",
    lat: 48.8372,
    lng: 10.0936,
  },
  {
    name: "Say'un",
    lat: 15.943,
    lng: 48.7873,
  },
  {
    name: "Al Ahmadi",
    lat: 29.0769,
    lng: 48.0838,
  },
  {
    name: "Wum",
    lat: 6.3833,
    lng: 10.0667,
  },
  {
    name: "Lima",
    lat: 40.741,
    lng: -84.1121,
  },
  {
    name: "Mococa",
    lat: -21.4678,
    lng: -47.0047,
  },
  {
    name: "Decatur",
    lat: 34.573,
    lng: -86.9906,
  },
  {
    name: "Dmitrov",
    lat: 56.35,
    lng: 37.5333,
  },
  {
    name: "Rocklin",
    lat: 38.8075,
    lng: -121.2488,
  },
  {
    name: "Sabanalarga",
    lat: 10.64,
    lng: -74.92,
  },
  {
    name: "Kati",
    lat: 12.7504,
    lng: -8.08,
  },
  {
    name: "Rogers",
    lat: 36.3172,
    lng: -94.1526,
  },
  {
    name: "Doboj",
    lat: 44.7333,
    lng: 18.1333,
  },
  {
    name: "Hihya",
    lat: 30.6687,
    lng: 31.5904,
  },
  {
    name: "Drummondville",
    lat: 45.8833,
    lng: -72.4833,
  },
  {
    name: "Stafford",
    lat: 52.8066,
    lng: -2.1171,
  },
  {
    name: "Lippstadt",
    lat: 51.6667,
    lng: 8.35,
  },
  {
    name: "Soja",
    lat: 34.6728,
    lng: 133.7467,
  },
  {
    name: "Castle Rock",
    lat: 39.3763,
    lng: -104.8535,
  },
  {
    name: "Otukpo",
    lat: 7.1904,
    lng: 8.13,
  },
  {
    name: "Yachimata",
    lat: 35.6658,
    lng: 140.3183,
  },
  {
    name: "Feodosiya",
    lat: 45.0489,
    lng: 35.3792,
  },
  {
    name: "Ash Shihr",
    lat: 14.7608,
    lng: 49.6069,
  },
  {
    name: "Chengjiao Chengguanzhen",
    lat: 34.4362,
    lng: 104.0306,
  },
  {
    name: "Tuymazy",
    lat: 54.6,
    lng: 53.7,
  },
  {
    name: "Turkmenbasy",
    lat: 40.023,
    lng: 52.9697,
  },
  {
    name: "Lodja",
    lat: -3.49,
    lng: 23.42,
  },
  {
    name: "Fernandopolis",
    lat: -20.2839,
    lng: -50.2458,
  },
  {
    name: "Lala Musa",
    lat: 32.7012,
    lng: 73.9605,
  },
  {
    name: "Hanover",
    lat: 39.8117,
    lng: -76.9835,
  },
  {
    name: "Los Andes",
    lat: -32.8337,
    lng: -70.5982,
  },
  {
    name: "Bossier City",
    lat: 32.5227,
    lng: -93.6666,
  },
  {
    name: "Dubuque",
    lat: 42.5008,
    lng: -90.7067,
  },
  {
    name: "Kashima",
    lat: 35.9658,
    lng: 140.645,
  },
  {
    name: "Przemysl",
    lat: 49.785,
    lng: 22.7673,
  },
  {
    name: "Rockville",
    lat: 39.0834,
    lng: -77.1552,
  },
  {
    name: "Victoria",
    lat: 28.8285,
    lng: -96.985,
  },
  {
    name: "Saratoga Springs",
    lat: 43.0674,
    lng: -73.7775,
  },
  {
    name: "Saiki",
    lat: 32.9603,
    lng: 131.8994,
  },
  {
    name: "Erd",
    lat: 47.3833,
    lng: 18.9167,
  },
  {
    name: "Kstovo",
    lat: 56.1517,
    lng: 44.1956,
  },
  {
    name: "Tepotzotlan",
    lat: 19.7161,
    lng: -99.2236,
  },
  {
    name: "Tzaneen",
    lat: -23.8333,
    lng: 30.1667,
  },
  {
    name: "Ames",
    lat: 42.0259,
    lng: -93.6215,
  },
  {
    name: "West Des Moines",
    lat: 41.5522,
    lng: -93.7805,
  },
  {
    name: "Hashima",
    lat: 35.3167,
    lng: 136.7,
  },
  {
    name: "Ban Suan",
    lat: 13.3616,
    lng: 100.9795,
  },
  {
    name: "Islahiye",
    lat: 37.0264,
    lng: 36.6322,
  },
  {
    name: "Embu-Guacu",
    lat: -23.8322,
    lng: -46.8117,
  },
  {
    name: "Yorba Linda",
    lat: 33.889,
    lng: -117.7714,
  },
  {
    name: "Santa Catarina Otzolotepec",
    lat: 18.5667,
    lng: -97.25,
  },
  {
    name: "Casper",
    lat: 42.842,
    lng: -106.3207,
  },
  {
    name: "Saint John",
    lat: 45.2806,
    lng: -66.0761,
  },
  {
    name: "Ko Samui",
    lat: 9.5157,
    lng: 99.9436,
  },
  {
    name: "Soio",
    lat: -6.1296,
    lng: 12.37,
  },
  {
    name: "Palatine",
    lat: 42.1181,
    lng: -88.043,
  },
  {
    name: "Corvallis",
    lat: 44.5697,
    lng: -123.278,
  },
  {
    name: "Herford",
    lat: 52.1146,
    lng: 8.6734,
  },
  {
    name: "Oktyabr'skiy",
    lat: 52.6636,
    lng: 156.2387,
  },
  {
    name: "Ankeny",
    lat: 41.7285,
    lng: -93.6033,
  },
  {
    name: "Koratla",
    lat: 18.82,
    lng: 78.72,
  },
  {
    name: "Rowlett",
    lat: 32.9157,
    lng: -96.5488,
  },
  {
    name: "Kissidougou",
    lat: 9.1905,
    lng: -10.12,
  },
  {
    name: "Lakeville",
    lat: 44.6774,
    lng: -93.252,
  },
  {
    name: "Tejen",
    lat: 37.3786,
    lng: 60.496,
  },
  {
    name: "Pelileo",
    lat: -1.3306,
    lng: -78.5428,
  },
  {
    name: "Cosmopolis",
    lat: -22.6458,
    lng: -47.1961,
  },
  {
    name: "Moita",
    lat: 38.65,
    lng: -8.9833,
  },
  {
    name: "Alpharetta",
    lat: 34.0704,
    lng: -84.2739,
  },
  {
    name: "Rio Negro",
    lat: -26.1,
    lng: -49.79,
  },
  {
    name: "Poinciana",
    lat: 28.1217,
    lng: -81.482,
  },
  {
    name: "Aflao",
    lat: 6.1188,
    lng: 1.1946,
  },
  {
    name: "Longview",
    lat: 46.1461,
    lng: -122.9629,
  },
  {
    name: "Vidnoye",
    lat: 55.55,
    lng: 37.7,
  },
  {
    name: "Guines",
    lat: 22.8475,
    lng: -82.0236,
  },
  {
    name: "Bani",
    lat: 18.28,
    lng: -70.331,
  },
  {
    name: "Shiojiri",
    lat: 36.1167,
    lng: 137.95,
  },
  {
    name: "DeKalb",
    lat: 41.9313,
    lng: -88.7482,
  },
  {
    name: "Pabianice",
    lat: 51.6642,
    lng: 19.35,
  },
  {
    name: "Petaluma",
    lat: 38.2423,
    lng: -122.6267,
  },
  {
    name: "Ferrol",
    lat: 43.4667,
    lng: -8.25,
  },
  {
    name: "Pulivendla",
    lat: 14.4167,
    lng: 78.2333,
  },
  {
    name: "Most",
    lat: 50.5031,
    lng: 13.6367,
  },
  {
    name: "Kerpen",
    lat: 50.8719,
    lng: 6.6961,
  },
  {
    name: "Ina",
    lat: 35.8275,
    lng: 137.9539,
  },
  {
    name: "Las Heras",
    lat: -32.825,
    lng: -68.8017,
  },
  {
    name: "Belogorsk",
    lat: 50.9167,
    lng: 128.4833,
  },
  {
    name: "Gwacheon",
    lat: 37.4289,
    lng: 126.9892,
  },
  {
    name: "Huinan",
    lat: 42.6229,
    lng: 126.2614,
  },
  {
    name: "Ishim",
    lat: 56.1167,
    lng: 69.5,
  },
  {
    name: "Caledon",
    lat: 43.8667,
    lng: -79.8667,
  },
  {
    name: "Gukovo",
    lat: 48.05,
    lng: 39.9333,
  },
  {
    name: "P'yongsan",
    lat: 38.3367,
    lng: 126.3866,
  },
  {
    name: "Urla",
    lat: 38.3222,
    lng: 26.7647,
  },
  {
    name: "Kalush",
    lat: 49.0442,
    lng: 24.3597,
  },
  {
    name: "Stupino",
    lat: 54.8869,
    lng: 38.0772,
  },
  {
    name: "Laguna Niguel",
    lat: 33.5275,
    lng: -117.705,
  },
  {
    name: "Eagan",
    lat: 44.8169,
    lng: -93.1638,
  },
  {
    name: "Slavyansk-na-Kubani",
    lat: 45.2586,
    lng: 38.1247,
  },
  {
    name: "Ilo",
    lat: -17.6486,
    lng: -71.3306,
  },
  {
    name: "Kenner",
    lat: 30.0109,
    lng: -90.2549,
  },
  {
    name: "Kungur",
    lat: 57.4333,
    lng: 56.9333,
  },
  {
    name: "Lencois Paulista",
    lat: -22.5986,
    lng: -48.8003,
  },
  {
    name: "Sodo",
    lat: 6.9,
    lng: 37.75,
  },
  {
    name: "Obera",
    lat: -27.4833,
    lng: -55.1333,
  },
  {
    name: "Sindelfingen",
    lat: 48.7133,
    lng: 9.0028,
  },
  {
    name: "Bay City",
    lat: 43.5903,
    lng: -83.8886,
  },
  {
    name: "Seraing",
    lat: 50.5986,
    lng: 5.5122,
  },
  {
    name: "Lahat",
    lat: -3.8,
    lng: 103.5333,
  },
  {
    name: "Armur",
    lat: 18.79,
    lng: 78.29,
  },
  {
    name: "Old Bridge",
    lat: 40.4004,
    lng: -74.3126,
  },
  {
    name: "North Little Rock",
    lat: 34.7808,
    lng: -92.2371,
  },
  {
    name: "Sammamish",
    lat: 47.6017,
    lng: -122.0416,
  },
  {
    name: "Weimar",
    lat: 50.9833,
    lng: 11.3167,
  },
  {
    name: "Shawnee",
    lat: 39.0158,
    lng: -94.8076,
  },
  {
    name: "Jupiter",
    lat: 26.9199,
    lng: -80.1128,
  },
  {
    name: "Tupa",
    lat: -21.935,
    lng: -50.5139,
  },
  {
    name: "Doral",
    lat: 25.8151,
    lng: -80.3565,
  },
  {
    name: "Zarechnyy",
    lat: 53.2,
    lng: 45.1667,
  },
  {
    name: "Carbondale",
    lat: 37.7221,
    lng: -89.2238,
  },
  {
    name: "Daule",
    lat: -1.8667,
    lng: -79.9833,
  },
  {
    name: "Blaine",
    lat: 45.1696,
    lng: -93.2077,
  },
  {
    name: "St. Albert",
    lat: 53.6303,
    lng: -113.6258,
  },
  {
    name: "Pavlovskiy Posad",
    lat: 55.7833,
    lng: 38.65,
  },
  {
    name: "Weirton",
    lat: 40.406,
    lng: -80.5671,
  },
  {
    name: "Plauen",
    lat: 50.495,
    lng: 12.1383,
  },
  {
    name: "Chelm",
    lat: 51.1333,
    lng: 23.4833,
  },
  {
    name: "Tulare",
    lat: 36.1996,
    lng: -119.34,
  },
  {
    name: "Valence",
    lat: 44.9333,
    lng: 4.8917,
  },
  {
    name: "Beloretsk",
    lat: 53.9667,
    lng: 58.4,
  },
  {
    name: "Jaisalmer",
    lat: 26.9167,
    lng: 70.9167,
  },
  {
    name: "Bourges",
    lat: 47.0844,
    lng: 2.3964,
  },
  {
    name: "Boras",
    lat: 57.7304,
    lng: 12.92,
  },
  {
    name: "Middletown",
    lat: 40.3893,
    lng: -74.082,
  },
  {
    name: "Franklin Township",
    lat: 40.4759,
    lng: -74.5515,
  },
  {
    name: "Ishimbay",
    lat: 53.45,
    lng: 56.0333,
  },
  {
    name: "Korosten",
    lat: 50.95,
    lng: 28.65,
  },
  {
    name: "Wellington",
    lat: 26.6461,
    lng: -80.2699,
  },
  {
    name: "Kurihara",
    lat: 38.7303,
    lng: 141.0214,
  },
  {
    name: "Tamana",
    lat: 32.9281,
    lng: 130.5597,
  },
  {
    name: "Pflugerville",
    lat: 30.452,
    lng: -97.6022,
  },
  {
    name: "Birnin Konni",
    lat: 13.7904,
    lng: 5.2599,
  },
  {
    name: "Palo Alto",
    lat: 37.3913,
    lng: -122.1468,
  },
  {
    name: "Pessac",
    lat: 44.8067,
    lng: -0.6311,
  },
  {
    name: "Neuwied",
    lat: 50.4286,
    lng: 7.4614,
  },
  {
    name: "Torquay",
    lat: 50.47,
    lng: -3.53,
  },
  {
    name: "Bhairahawa",
    lat: 27.5,
    lng: 83.45,
  },
  {
    name: "Halabjah",
    lat: 35.1833,
    lng: 45.9833,
  },
  {
    name: "Great Falls",
    lat: 47.5022,
    lng: -111.2995,
  },
  {
    name: "Esquipulas",
    lat: 14.6167,
    lng: -89.2,
  },
  {
    name: "Dormagen",
    lat: 51.0964,
    lng: 6.84,
  },
  {
    name: "Caripito",
    lat: 10.111,
    lng: -63.1048,
  },
  {
    name: "Michigan City",
    lat: 41.7099,
    lng: -86.8705,
  },
  {
    name: "Pokrovsk",
    lat: 48.2833,
    lng: 37.1833,
  },
  {
    name: "Ji-Parana",
    lat: -10.8333,
    lng: -61.967,
  },
  {
    name: "Rosenheim",
    lat: 47.8561,
    lng: 12.1289,
  },
  {
    name: "Bucak",
    lat: 37.4592,
    lng: 30.595,
  },
  {
    name: "Hornchurch",
    lat: 51.5565,
    lng: 0.2128,
  },
  {
    name: "Donskoy",
    lat: 53.9667,
    lng: 38.3167,
  },
  {
    name: "Tadepalle",
    lat: 16.4667,
    lng: 80.6,
  },
  {
    name: "La Carlota",
    lat: 10.4167,
    lng: 122.9167,
  },
  {
    name: "Eden Prairie",
    lat: 44.8488,
    lng: -93.4595,
  },
  {
    name: "Port Orange",
    lat: 29.1084,
    lng: -81.0137,
  },
  {
    name: "Teoloyucan",
    lat: 19.7442,
    lng: -99.1811,
  },
  {
    name: "Neubrandenburg",
    lat: 53.5569,
    lng: 13.2608,
  },
  {
    name: "Dublin",
    lat: 37.7161,
    lng: -121.8963,
  },
  {
    name: "Asahi",
    lat: 35.7203,
    lng: 140.6467,
  },
  {
    name: "Carmichael",
    lat: 38.6337,
    lng: -121.323,
  },
  {
    name: "Gadwal",
    lat: 16.23,
    lng: 77.8,
  },
  {
    name: "Rafha",
    lat: 29.6202,
    lng: 43.4948,
  },
  {
    name: "Grand Forks",
    lat: 47.9218,
    lng: -97.0886,
  },
  {
    name: "Tsuruga",
    lat: 35.6372,
    lng: 136.0806,
  },
  {
    name: "Santo Domingo Tehuantepec",
    lat: 16.3184,
    lng: -95.2478,
  },
  {
    name: "Binga",
    lat: 2.3834,
    lng: 20.42,
  },
  {
    name: "Noblesville",
    lat: 40.0354,
    lng: -86.0042,
  },
  {
    name: "Jatani",
    lat: 20.17,
    lng: 85.7,
  },
  {
    name: "Rahat",
    lat: 31.3925,
    lng: 34.7544,
  },
  {
    name: "Apaseo el Alto",
    lat: 20.45,
    lng: -100.6167,
  },
  {
    name: "Qinggang",
    lat: 46.69,
    lng: 126.1,
  },
  {
    name: "San Felipe",
    lat: -32.7507,
    lng: -70.7251,
  },
  {
    name: "San Clemente",
    lat: 33.4498,
    lng: -117.6103,
  },
  {
    name: "Ban Lam Sam Kaeo",
    lat: 13.9726,
    lng: 100.6506,
  },
  {
    name: "Santiago Tianguistenco",
    lat: 19.1797,
    lng: -99.4706,
  },
  {
    name: "Brentwood",
    lat: 37.9355,
    lng: -121.7191,
  },
  {
    name: "Kristiansand",
    lat: 58.1467,
    lng: 7.9956,
  },
  {
    name: "Sittingbourne",
    lat: 51.34,
    lng: 0.74,
  },
  {
    name: "Zvornik",
    lat: 44.3833,
    lng: 19.1,
  },
  {
    name: "Grevenbroich",
    lat: 51.0883,
    lng: 6.5875,
  },
  {
    name: "Asbest",
    lat: 57,
    lng: 61.4667,
  },
  {
    name: "Povoa de Varzim",
    lat: 41.3916,
    lng: -8.7571,
  },
  {
    name: "Bandar-e Genaveh",
    lat: 29.5833,
    lng: 50.5167,
  },
  {
    name: "Eastvale",
    lat: 33.9617,
    lng: -117.5802,
  },
  {
    name: "Nawa",
    lat: 32.8833,
    lng: 36.05,
  },
  {
    name: "At Tall",
    lat: 33.6103,
    lng: 36.3106,
  },
  {
    name: "Mazabuka",
    lat: -15.86,
    lng: 27.76,
  },
  {
    name: "Chapel Hill",
    lat: 35.927,
    lng: -79.0391,
  },
  {
    name: "Rocky Mount",
    lat: 35.9676,
    lng: -77.8048,
  },
  {
    name: "Lugano",
    lat: 46.0103,
    lng: 8.9625,
  },
  {
    name: "Haverhill",
    lat: 42.7838,
    lng: -71.0871,
  },
  {
    name: "Gaya",
    lat: 11.8878,
    lng: 3.4467,
  },
  {
    name: "Klintsy",
    lat: 52.7528,
    lng: 32.2361,
  },
  {
    name: "Fujioka",
    lat: 36.2667,
    lng: 139.0667,
  },
  {
    name: "Woking",
    lat: 51.3162,
    lng: -0.561,
  },
  {
    name: "Zarand",
    lat: 30.8128,
    lng: 56.5639,
  },
  {
    name: "Beloit",
    lat: 42.523,
    lng: -89.0184,
  },
  {
    name: "Quimper",
    lat: 47.9967,
    lng: -4.0964,
  },
  {
    name: "Nankana Sahib",
    lat: 31.4492,
    lng: 73.7124,
  },
  {
    name: "Velika Gorica",
    lat: 45.7,
    lng: 16.0667,
  },
  {
    name: "Gloucester",
    lat: 39.7924,
    lng: -75.0363,
  },
  {
    name: "Chincha Alta",
    lat: -13.45,
    lng: -76.1333,
  },
  {
    name: "Shiroi",
    lat: 35.7917,
    lng: 140.0564,
  },
  {
    name: "San Juan de Sabinas",
    lat: 27.9167,
    lng: -101.3,
  },
  {
    name: "Budennovsk",
    lat: 44.7833,
    lng: 44.15,
  },
  {
    name: "Glens Falls",
    lat: 43.3109,
    lng: -73.6459,
  },
  {
    name: "Graaff-Reinet",
    lat: -32.2522,
    lng: 24.5406,
  },
  {
    name: "Ain Sefra",
    lat: 32.7604,
    lng: -0.5799,
  },
  {
    name: "Herten",
    lat: 51.6,
    lng: 7.1333,
  },
  {
    name: "Granby",
    lat: 45.4,
    lng: -72.7333,
  },
  {
    name: "Tangub",
    lat: 8.0667,
    lng: 123.75,
  },
  {
    name: "Roeselare",
    lat: 50.9447,
    lng: 3.1233,
  },
  {
    name: "Moca",
    lat: 19.397,
    lng: -70.523,
  },
  {
    name: "Castro Valley",
    lat: 37.7091,
    lng: -122.0631,
  },
  {
    name: "Medicine Hat",
    lat: 50.0417,
    lng: -110.6775,
  },
  {
    name: "Fairbanks",
    lat: 64.8353,
    lng: -147.6534,
  },
  {
    name: "Vol'sk",
    lat: 52.05,
    lng: 47.3833,
  },
  {
    name: "Springfield",
    lat: 44.0538,
    lng: -122.981,
  },
  {
    name: "Balboa",
    lat: 8.9571,
    lng: -79.5593,
  },
  {
    name: "Rhondda",
    lat: 51.6159,
    lng: -3.4175,
  },
  {
    name: "Novaya Balakhna",
    lat: 56.4943,
    lng: 43.5944,
  },
  {
    name: "Grande Prairie",
    lat: 55.1708,
    lng: -118.7947,
  },
  {
    name: "Oudtshoorn",
    lat: -33.5833,
    lng: 22.2,
  },
  {
    name: "Johnstown",
    lat: 40.3258,
    lng: -78.9193,
  },
  {
    name: "West Hartford",
    lat: 41.7669,
    lng: -72.7536,
  },
  {
    name: "Bannu",
    lat: 32.9889,
    lng: 70.6056,
  },
  {
    name: "Lomza",
    lat: 53.1833,
    lng: 22.0833,
  },
  {
    name: "Caldiran",
    lat: 39.1419,
    lng: 43.9139,
  },
  {
    name: "Kasongo",
    lat: -4.45,
    lng: 26.66,
  },
  {
    name: "Nago",
    lat: 26.5917,
    lng: 127.9775,
  },
  {
    name: "Coon Rapids",
    lat: 45.1755,
    lng: -93.3095,
  },
  {
    name: "Elmira",
    lat: 42.0938,
    lng: -76.8097,
  },
  {
    name: "Palmela",
    lat: 38.5667,
    lng: -8.9,
  },
  {
    name: "Yurimaguas",
    lat: -5.9,
    lng: -76.0833,
  },
  {
    name: "Deva",
    lat: 45.8719,
    lng: 22.9117,
  },
  {
    name: "Mankato",
    lat: 44.1712,
    lng: -93.9773,
  },
  {
    name: "Nkawkaw",
    lat: 6.5505,
    lng: -0.78,
  },
  {
    name: "Albany",
    lat: 44.6274,
    lng: -123.0966,
  },
  {
    name: "Mut",
    lat: 36.6458,
    lng: 33.4375,
  },
  {
    name: "Cruz Alta",
    lat: -28.6386,
    lng: -53.6064,
  },
  {
    name: "Rossosh'",
    lat: 50.1983,
    lng: 39.5672,
  },
  {
    name: "Kolomyya",
    lat: 48.5167,
    lng: 25.0333,
  },
  {
    name: "Dundalk",
    lat: 39.2703,
    lng: -76.4942,
  },
  {
    name: "Margate",
    lat: 51.385,
    lng: 1.3838,
  },
  {
    name: "Revda",
    lat: 56.8,
    lng: 59.9167,
  },
  {
    name: "Borisoglebsk",
    lat: 51.3667,
    lng: 42.0833,
  },
  {
    name: "Kotlas",
    lat: 61.25,
    lng: 46.65,
  },
  {
    name: "Encinitas",
    lat: 33.049,
    lng: -117.2613,
  },
  {
    name: "Montelimar",
    lat: 44.5581,
    lng: 4.7508,
  },
  {
    name: "Runcorn",
    lat: 53.341,
    lng: -2.729,
  },
  {
    name: "Ogoshi",
    lat: 32.8858,
    lng: 130.7897,
  },
  {
    name: "Zelenogorsk",
    lat: 56.1,
    lng: 94.5833,
  },
  {
    name: "Leander",
    lat: 30.5728,
    lng: -97.8618,
  },
  {
    name: "Mobarakeh",
    lat: 32.3464,
    lng: 51.5044,
  },
  {
    name: "Tendo",
    lat: 38.3622,
    lng: 140.3783,
  },
  {
    name: "Mayaguez",
    lat: 18.2003,
    lng: -67.1397,
  },
  {
    name: "Leninogorsk",
    lat: 54.5989,
    lng: 52.4423,
  },
  {
    name: "Greenwich",
    lat: 41.0665,
    lng: -73.6368,
  },
  {
    name: "Wels",
    lat: 48.15,
    lng: 14.0167,
  },
  {
    name: "Parkersburg",
    lat: 39.2624,
    lng: -81.542,
  },
  {
    name: "Kayes",
    lat: -4.1806,
    lng: 13.2889,
  },
  {
    name: "Villa Carlos Paz",
    lat: -31.4,
    lng: -64.5167,
  },
  {
    name: "Waltham",
    lat: 42.3889,
    lng: -71.2423,
  },
  {
    name: "Tanjungpandan",
    lat: -2.75,
    lng: 107.65,
  },
  {
    name: "Bethesda",
    lat: 38.9866,
    lng: -77.1188,
  },
  {
    name: "Morecambe",
    lat: 54.073,
    lng: -2.87,
  },
  {
    name: "Boryspil'",
    lat: 50.35,
    lng: 30.95,
  },
  {
    name: "Villach",
    lat: 46.6167,
    lng: 13.8333,
  },
  {
    name: "Tuapse",
    lat: 44.1,
    lng: 39.0833,
  },
  {
    name: "Dajabon",
    lat: 19.5667,
    lng: -71.71,
  },
  {
    name: "San Luis Obispo",
    lat: 35.2669,
    lng: -120.6691,
  },
  {
    name: "Figueira da Foz",
    lat: 40.1508,
    lng: -8.8618,
  },
  {
    name: "Benevento",
    lat: 41.1256,
    lng: 14.7811,
  },
  {
    name: "Bergheim",
    lat: 50.9667,
    lng: 6.65,
  },
  {
    name: "Sebring",
    lat: 27.477,
    lng: -81.453,
  },
  {
    name: "Chistopol'",
    lat: 55.3648,
    lng: 50.6407,
  },
  {
    name: "Puerto Penasco",
    lat: 31.3167,
    lng: -113.5369,
  },
  {
    name: "Council Bluffs",
    lat: 41.2369,
    lng: -95.8517,
  },
  {
    name: "Ocoyoacac",
    lat: 19.2739,
    lng: -99.4606,
  },
  {
    name: "Penapolis",
    lat: -21.42,
    lng: -50.0778,
  },
  {
    name: "Aisai",
    lat: 35.15,
    lng: 136.7333,
  },
  {
    name: "Hamilton",
    lat: 39.3938,
    lng: -84.5653,
  },
  {
    name: "Ferkessedougou",
    lat: 9.5928,
    lng: -5.1944,
  },
  {
    name: "Moore",
    lat: 35.3293,
    lng: -97.4758,
  },
  {
    name: "Zaraza",
    lat: 9.3394,
    lng: -65.3167,
  },
  {
    name: "San Francisco",
    lat: -31.4356,
    lng: -62.0714,
  },
  {
    name: "Civitavecchia",
    lat: 42.1004,
    lng: 11.8,
  },
  {
    name: "Palm Harbor",
    lat: 28.0847,
    lng: -82.7481,
  },
  {
    name: "Casa Grande",
    lat: 32.9068,
    lng: -111.7624,
  },
  {
    name: "Monessen",
    lat: 40.1519,
    lng: -79.8828,
  },
  {
    name: "San Antonio del Tachira",
    lat: 7.8145,
    lng: -72.4431,
  },
  {
    name: "Mielec",
    lat: 50.2833,
    lng: 21.4333,
  },
  {
    name: "Polevskoy",
    lat: 56.45,
    lng: 60.1833,
  },
  {
    name: "Coburg",
    lat: 50.2666,
    lng: 10.9666,
  },
  {
    name: "Satbaev",
    lat: 47.9,
    lng: 67.5333,
  },
  {
    name: "Sarandi",
    lat: -34.6833,
    lng: -58.3333,
  },
  {
    name: "Derik",
    lat: 37.3644,
    lng: 40.2689,
  },
  {
    name: "Heroica Caborca",
    lat: 30.7167,
    lng: -112.15,
  },
  {
    name: "Ar Rastan",
    lat: 34.9167,
    lng: 36.7333,
  },
  {
    name: "Itoman",
    lat: 26.1236,
    lng: 127.6658,
  },
  {
    name: "Zamora",
    lat: 41.5033,
    lng: -5.7556,
  },
  {
    name: "Lys'va",
    lat: 58.1086,
    lng: 57.8053,
  },
  {
    name: "Trikala",
    lat: 39.55,
    lng: 21.7667,
  },
  {
    name: "Slutsk",
    lat: 53.0167,
    lng: 27.55,
  },
  {
    name: "Friedrichshafen",
    lat: 47.6542,
    lng: 9.4792,
  },
  {
    name: "Schwabisch Gmund",
    lat: 48.8,
    lng: 9.8,
  },
  {
    name: "Rubizhne",
    lat: 49.0167,
    lng: 38.3667,
  },
  {
    name: "St. Thomas",
    lat: 42.775,
    lng: -81.1833,
  },
  {
    name: "Sibay",
    lat: 52.7,
    lng: 58.65,
  },
  {
    name: "Sawahlunto",
    lat: -0.6828,
    lng: 100.7783,
  },
  {
    name: "Tarnowskie Gory",
    lat: 50.45,
    lng: 18.8667,
  },
  {
    name: "Fairfield",
    lat: 41.1775,
    lng: -73.2733,
  },
  {
    name: "Airdrie",
    lat: 51.2917,
    lng: -114.0144,
  },
  {
    name: "Wanparti",
    lat: 16.361,
    lng: 78.0627,
  },
  {
    name: "Uzunkopru",
    lat: 41.2669,
    lng: 26.6875,
  },
  {
    name: "Rome",
    lat: 34.2661,
    lng: -85.1862,
  },
  {
    name: "Garbsen",
    lat: 52.4183,
    lng: 9.5981,
  },
  {
    name: "Ban Map Ta Phut",
    lat: 12.7258,
    lng: 101.1722,
  },
  {
    name: "Millcreek",
    lat: 40.6892,
    lng: -111.8291,
  },
  {
    name: "Sanford",
    lat: 28.7893,
    lng: -81.276,
  },
  {
    name: "Carazinho",
    lat: -28.2839,
    lng: -52.7864,
  },
  {
    name: "Hurth",
    lat: 50.8775,
    lng: 6.8761,
  },
  {
    name: "Hashimoto",
    lat: 34.3167,
    lng: 135.6,
  },
  {
    name: "Burnsville",
    lat: 44.7648,
    lng: -93.2795,
  },
  {
    name: "Montauban",
    lat: 44.0181,
    lng: 1.3558,
  },
  {
    name: "Candon",
    lat: 17.2,
    lng: 120.45,
  },
  {
    name: "Hamden",
    lat: 41.3961,
    lng: -72.9215,
  },
  {
    name: "Port Charlotte",
    lat: 26.9918,
    lng: -82.114,
  },
  {
    name: "Morristown",
    lat: 36.2046,
    lng: -83.3006,
  },
  {
    name: "Halton Hills",
    lat: 43.63,
    lng: -79.95,
  },
  {
    name: "Owada",
    lat: 40.6128,
    lng: 141.2058,
  },
  {
    name: "Idiofa",
    lat: -4.9596,
    lng: 19.5986,
  },
  {
    name: "Sonbong",
    lat: 42.3377,
    lng: 130.4027,
  },
  {
    name: "Skhirate",
    lat: 33.85,
    lng: -7.03,
  },
  {
    name: "Bouafle",
    lat: 6.9903,
    lng: -5.7442,
  },
  {
    name: "El Carmen de Bolivar",
    lat: 9.7204,
    lng: -75.13,
  },
  {
    name: "Savona",
    lat: 44.308,
    lng: 8.481,
  },
  {
    name: "Lakewood",
    lat: 47.1628,
    lng: -122.5299,
  },
  {
    name: "Nahariyya",
    lat: 33.0036,
    lng: 35.0925,
  },
  {
    name: "Stralsund",
    lat: 54.3,
    lng: 13.0833,
  },
  {
    name: "Gadsden",
    lat: 34.009,
    lng: -86.0156,
  },
  {
    name: "Chalkida",
    lat: 38.4625,
    lng: 23.595,
  },
  {
    name: "Taylor",
    lat: 42.226,
    lng: -83.2688,
  },
  {
    name: "Novi",
    lat: 42.4786,
    lng: -83.4893,
  },
  {
    name: "Marietta",
    lat: 33.9533,
    lng: -84.5422,
  },
  {
    name: "Montemorelos",
    lat: 25.1872,
    lng: -99.8267,
  },
  {
    name: "Wesel",
    lat: 51.6586,
    lng: 6.6178,
  },
  {
    name: "Tartagal",
    lat: -22.5,
    lng: -63.8333,
  },
  {
    name: "Hot Springs",
    lat: 34.4892,
    lng: -93.0501,
  },
  {
    name: "Belchatow",
    lat: 51.3667,
    lng: 19.3667,
  },
  {
    name: "Tahara",
    lat: 34.6414,
    lng: 137.1831,
  },
  {
    name: "Druzhkivka",
    lat: 48.6203,
    lng: 37.5278,
  },
  {
    name: "Soasio",
    lat: 0.6964,
    lng: 127.436,
  },
  {
    name: "Batatais",
    lat: -20.8911,
    lng: -47.585,
  },
  {
    name: "Autlan de Navarro",
    lat: 19.7667,
    lng: -104.3667,
  },
  {
    name: "Woodland",
    lat: 38.6712,
    lng: -121.75,
  },
  {
    name: "Greifswald",
    lat: 54.0833,
    lng: 13.3833,
  },
  {
    name: "Kumertau",
    lat: 52.7667,
    lng: 55.7833,
  },
  {
    name: "Koga",
    lat: 33.7333,
    lng: 130.4667,
  },
  {
    name: "Rzhev",
    lat: 56.2656,
    lng: 34.3276,
  },
  {
    name: "Molfetta",
    lat: 41.2,
    lng: 16.6,
  },
  {
    name: "Ponnuru",
    lat: 16.0667,
    lng: 80.5667,
  },
  {
    name: "Belladere",
    lat: 18.85,
    lng: -71.7833,
  },
  {
    name: "Mossel Bay",
    lat: -34.1833,
    lng: 22.1333,
  },
  {
    name: "Xo`jayli Shahri",
    lat: 42.4047,
    lng: 59.4517,
  },
  {
    name: "Chichibu",
    lat: 35.9917,
    lng: 139.0856,
  },
  {
    name: "Offenburg",
    lat: 48.4708,
    lng: 7.9408,
  },
  {
    name: "Bor",
    lat: 37.8833,
    lng: 34.5667,
  },
  {
    name: "Bensalem",
    lat: 40.1086,
    lng: -74.9431,
  },
  {
    name: "Langenfeld",
    lat: 51.1167,
    lng: 6.95,
  },
  {
    name: "Crotone",
    lat: 39.0833,
    lng: 17.1233,
  },
  {
    name: "Commerce City",
    lat: 39.8642,
    lng: -104.8434,
  },
  {
    name: "Reston",
    lat: 38.9497,
    lng: -77.3461,
  },
  {
    name: "Belebey",
    lat: 54.1,
    lng: 54.1333,
  },
  {
    name: "Manhica",
    lat: -25.4,
    lng: 32.8,
  },
  {
    name: "Labinsk",
    lat: 44.6333,
    lng: 40.7333,
  },
  {
    name: "Shimotsuke",
    lat: 36.3872,
    lng: 139.8422,
  },
  {
    name: "Urus-Martan",
    lat: 43.1224,
    lng: 45.5366,
  },
  {
    name: "Kapchagay",
    lat: 43.8833,
    lng: 77.0833,
  },
  {
    name: "Suifenhe",
    lat: 44.3945,
    lng: 131.1563,
  },
  {
    name: "Joso",
    lat: 36.0236,
    lng: 139.9939,
  },
  {
    name: "Vinukonda",
    lat: 16.05,
    lng: 79.75,
  },
  {
    name: "Linares",
    lat: 38.0833,
    lng: -3.6334,
  },
  {
    name: "Kribi",
    lat: 2.95,
    lng: 9.9167,
  },
  {
    name: "Chajari",
    lat: -30.7667,
    lng: -57.9833,
  },
  {
    name: "Bristol",
    lat: 41.6812,
    lng: -72.9407,
  },
  {
    name: "Shirakawa",
    lat: 37.1264,
    lng: 140.2108,
  },
  {
    name: "Columbus",
    lat: 39.2093,
    lng: -85.9183,
  },
  {
    name: "Asenovgrad",
    lat: 42.0069,
    lng: 24.8756,
  },
  {
    name: "Choshi",
    lat: 35.7347,
    lng: 140.8267,
  },
  {
    name: "Shuya",
    lat: 56.85,
    lng: 41.3667,
  },
  {
    name: "Uriangato",
    lat: 20.1333,
    lng: -101.1667,
  },
  {
    name: "Huehuetoca",
    lat: 19.8342,
    lng: -99.2033,
  },
  {
    name: "Bangor",
    lat: 44.8322,
    lng: -68.7906,
  },
  {
    name: "Lesosibirsk",
    lat: 58.2333,
    lng: 92.4833,
  },
  {
    name: "Tezpur",
    lat: 26.6338,
    lng: 92.8,
  },
  {
    name: "Date",
    lat: 37.8189,
    lng: 140.5631,
  },
  {
    name: "Saint-Hyacinthe",
    lat: 45.6167,
    lng: -72.95,
  },
  {
    name: "Narasapur",
    lat: 16.4333,
    lng: 81.6833,
  },
  {
    name: "Agrigento",
    lat: 37.3111,
    lng: 13.5765,
  },
  {
    name: "Chibuto",
    lat: -24.6867,
    lng: 33.5306,
  },
  {
    name: "Prokhladnyy",
    lat: 43.7575,
    lng: 44.0297,
  },
  {
    name: "Niort",
    lat: 46.3258,
    lng: -0.4606,
  },
  {
    name: "Yara",
    lat: 20.2767,
    lng: -76.9469,
  },
  {
    name: "Moron",
    lat: 22.1108,
    lng: -78.6278,
  },
  {
    name: "Kokawa",
    lat: 34.2697,
    lng: 135.3625,
  },
  {
    name: "Greenwood",
    lat: 39.6019,
    lng: -86.1073,
  },
  {
    name: "Hua Hin",
    lat: 12.5686,
    lng: 99.9578,
  },
  {
    name: "Bartlett",
    lat: 35.2337,
    lng: -89.8195,
  },
  {
    name: "Bradenton",
    lat: 27.49,
    lng: -82.5739,
  },
  {
    name: "Pontiac",
    lat: 42.6493,
    lng: -83.2878,
  },
  {
    name: "Staunton",
    lat: 38.1593,
    lng: -79.0611,
  },
  {
    name: "Neu-Ulm",
    lat: 48.3833,
    lng: 10,
  },
  {
    name: "Gannan",
    lat: 47.9204,
    lng: 123.51,
  },
  {
    name: "Clay",
    lat: 43.1809,
    lng: -76.1955,
  },
  {
    name: "Meriden",
    lat: 41.5367,
    lng: -72.7944,
  },
  {
    name: "Aleksandrov",
    lat: 56.3936,
    lng: 38.715,
  },
  {
    name: "Togane",
    lat: 35.56,
    lng: 140.3661,
  },
  {
    name: "Plymouth",
    lat: 41.8783,
    lng: -70.6309,
  },
  {
    name: "Apex",
    lat: 35.7239,
    lng: -78.8728,
  },
  {
    name: "Unna",
    lat: 51.5347,
    lng: 7.6889,
  },
  {
    name: "Royal Oak",
    lat: 42.5084,
    lng: -83.1539,
  },
  {
    name: "Benton Harbor",
    lat: 42.1159,
    lng: -86.4488,
  },
  {
    name: "Kattaqo'rg'on Shahri",
    lat: 39.8958,
    lng: 66.2656,
  },
  {
    name: "Kosai",
    lat: 34.7186,
    lng: 137.5317,
  },
  {
    name: "Bilhorod-Dnistrovs'kyy",
    lat: 46.1833,
    lng: 30.3333,
  },
  {
    name: "St. Clair Shores",
    lat: 42.4921,
    lng: -82.8957,
  },
  {
    name: "Sandnes",
    lat: 58.85,
    lng: 5.7333,
  },
  {
    name: "Des Plaines",
    lat: 42.0345,
    lng: -87.9009,
  },
  {
    name: "Lac-Brome",
    lat: 45.2167,
    lng: -72.5167,
  },
  {
    name: "Tokoname",
    lat: 34.8833,
    lng: 136.8333,
  },
  {
    name: "Lewiston",
    lat: 44.0915,
    lng: -70.1681,
  },
  {
    name: "Jovellanos",
    lat: 22.8106,
    lng: -81.1981,
  },
  {
    name: "Midland",
    lat: 43.6241,
    lng: -84.2319,
  },
  {
    name: "Timargara",
    lat: 34.8281,
    lng: 71.8408,
  },
  {
    name: "Mikhaylovka",
    lat: 50.0667,
    lng: 43.2333,
  },
  {
    name: "Spring",
    lat: 30.0613,
    lng: -95.383,
  },
  {
    name: "Lower Merion",
    lat: 40.0282,
    lng: -75.2807,
  },
  {
    name: "Izberbash",
    lat: 42.5667,
    lng: 47.8667,
  },
  {
    name: "Bowie",
    lat: 38.9569,
    lng: -76.7409,
  },
  {
    name: "Kas",
    lat: 36.2018,
    lng: 29.6377,
  },
  {
    name: "Tlaltenango de Sanchez Roman",
    lat: 21.7815,
    lng: -103.3059,
  },
  {
    name: "Aketi",
    lat: 2.7405,
    lng: 23.78,
  },
  {
    name: "Qaskeleng",
    lat: 43.1983,
    lng: 76.6311,
  },
  {
    name: "Felgueiras",
    lat: 41.3667,
    lng: -8.1833,
  },
  {
    name: "Motril",
    lat: 36.7453,
    lng: -3.5206,
  },
  {
    name: "Goppingen",
    lat: 48.7025,
    lng: 9.6528,
  },
  {
    name: "Lambayeque",
    lat: -6.7,
    lng: -79.9,
  },
  {
    name: "Tiznit",
    lat: 29.7104,
    lng: -9.74,
  },
  {
    name: "Iskitim",
    lat: 54.6333,
    lng: 83.3,
  },
  {
    name: "Caldwell",
    lat: 43.6453,
    lng: -116.6591,
  },
  {
    name: "San Pedro",
    lat: -24.2196,
    lng: -64.87,
  },
  {
    name: "Ma'erkang",
    lat: 31.9046,
    lng: 102.2167,
  },
  {
    name: "San Rafael",
    lat: 37.9905,
    lng: -122.5222,
  },
  {
    name: "San Fernando",
    lat: -34.5839,
    lng: -70.9891,
  },
  {
    name: "Euskirchen",
    lat: 50.6597,
    lng: 6.7917,
  },
  {
    name: "Serres",
    lat: 41.0833,
    lng: 23.55,
  },
  {
    name: "Ishikari",
    lat: 43.1783,
    lng: 141.3067,
  },
  {
    name: "Towson",
    lat: 39.3944,
    lng: -76.619,
  },
  {
    name: "Nyagan'",
    lat: 62.1333,
    lng: 65.3833,
  },
  {
    name: "Sirvan",
    lat: 39.9319,
    lng: 48.9203,
  },
  {
    name: "Frankfurt (Oder)",
    lat: 52.35,
    lng: 14.55,
  },
  {
    name: "Richland",
    lat: 46.2824,
    lng: -119.2938,
  },
  {
    name: "Fredericton",
    lat: 45.9636,
    lng: -66.6431,
  },
  {
    name: "St. Peters",
    lat: 38.7824,
    lng: -90.6061,
  },
  {
    name: "Tama",
    lat: 34.4919,
    lng: 133.9458,
  },
  {
    name: "South Hill",
    lat: 47.1203,
    lng: -122.2848,
  },
  {
    name: "Pula",
    lat: 44.8667,
    lng: 13.8333,
  },
  {
    name: "Tikhvin",
    lat: 59.6333,
    lng: 33.5,
  },
  {
    name: "Murakami",
    lat: 38.2239,
    lng: 139.4801,
  },
  {
    name: "Hendersonville",
    lat: 36.3063,
    lng: -86.5998,
  },
  {
    name: "Hamburg",
    lat: 42.7394,
    lng: -78.8581,
  },
  {
    name: "Huntersville",
    lat: 35.4058,
    lng: -80.8727,
  },
  {
    name: "Mirassol",
    lat: -20.8189,
    lng: -49.5208,
  },
  {
    name: "Santee",
    lat: 32.8554,
    lng: -116.9851,
  },
  {
    name: "Hameln",
    lat: 52.1031,
    lng: 9.36,
  },
  {
    name: "Wagga Wagga",
    lat: -35.1189,
    lng: 147.3689,
  },
  {
    name: "Meleuz",
    lat: 52.9647,
    lng: 55.9328,
  },
  {
    name: "Livingston",
    lat: 55.8834,
    lng: -3.5157,
  },
  {
    name: "Avila",
    lat: 40.6543,
    lng: -4.6962,
  },
  {
    name: "Allanmyo",
    lat: 19.3783,
    lng: 95.2279,
  },
  {
    name: "Southampton",
    lat: 40.8996,
    lng: -72.4937,
  },
  {
    name: "Aleksin",
    lat: 54.5,
    lng: 37.0667,
  },
  {
    name: "Narva",
    lat: 59.3792,
    lng: 28.2006,
  },
  {
    name: "Antonio Enes",
    lat: -16.2308,
    lng: 39.9105,
  },
  {
    name: "Manchester",
    lat: 41.7753,
    lng: -72.5242,
  },
  {
    name: "Berezovskiy",
    lat: 56.9,
    lng: 60.8,
  },
  {
    name: "Beckley",
    lat: 37.7878,
    lng: -81.1841,
  },
  {
    name: "Samalkot",
    lat: 17.0531,
    lng: 82.1695,
  },
  {
    name: "Alexandroupoli",
    lat: 40.85,
    lng: 25.8667,
  },
  {
    name: "Titusville",
    lat: 28.5727,
    lng: -80.8193,
  },
  {
    name: "Cartersville",
    lat: 34.1639,
    lng: -84.8007,
  },
  {
    name: "Walla Walla",
    lat: 46.067,
    lng: -118.3366,
  },
  {
    name: "Orland Park",
    lat: 41.6074,
    lng: -87.8619,
  },
  {
    name: "Tikhoretsk",
    lat: 45.85,
    lng: 40.1167,
  },
  {
    name: "Kothapet",
    lat: 19.3333,
    lng: 79.4833,
  },
  {
    name: "Kan'onjicho",
    lat: 34.1283,
    lng: 133.6628,
  },
  {
    name: "Biala Podlaska",
    lat: 52.0333,
    lng: 23.1167,
  },
  {
    name: "Qunghirot",
    lat: 43.0704,
    lng: 58.9,
  },
  {
    name: "Weymouth",
    lat: 42.1984,
    lng: -70.9466,
  },
  {
    name: "Ibitinga",
    lat: -21.7578,
    lng: -48.8289,
  },
  {
    name: "Moa",
    lat: 20.6397,
    lng: -74.9175,
  },
  {
    name: "Macherla",
    lat: 16.48,
    lng: 79.43,
  },
  {
    name: "Jerez de Garcia Salinas",
    lat: 22.6481,
    lng: -102.9903,
  },
  {
    name: "Parker",
    lat: 39.5084,
    lng: -104.7753,
  },
  {
    name: "Palm Beach Gardens",
    lat: 26.8466,
    lng: -80.1679,
  },
  {
    name: "Ejmiatsin",
    lat: 40.1728,
    lng: 44.2925,
  },
  {
    name: "Krasnotur'insk",
    lat: 59.7733,
    lng: 60.1853,
  },
  {
    name: "Bozeman",
    lat: 45.6832,
    lng: -111.0552,
  },
  {
    name: "Kandukur",
    lat: 15.2165,
    lng: 79.9042,
  },
  {
    name: "Diriamba",
    lat: 11.85,
    lng: -86.2333,
  },
  {
    name: "Beni Enzar",
    lat: 35.2569,
    lng: -2.9342,
  },
  {
    name: "Beauvais",
    lat: 49.4303,
    lng: 2.0952,
  },
  {
    name: "Sal'sk",
    lat: 46.4833,
    lng: 41.5333,
  },
  {
    name: "Sicuani",
    lat: -14.2694,
    lng: -71.2261,
  },
  {
    name: "Kojske",
    lat: 42.53,
    lng: 21.1386,
  },
  {
    name: "East Stroudsburg",
    lat: 41.0023,
    lng: -75.1779,
  },
  {
    name: "Minokamo",
    lat: 35.4333,
    lng: 137.0167,
  },
  {
    name: "Nova Odessa",
    lat: -22.7797,
    lng: -47.2962,
  },
  {
    name: "Taunton",
    lat: 41.9036,
    lng: -71.0943,
  },
  {
    name: "Istaravshan",
    lat: 39.9108,
    lng: 69.0064,
  },
  {
    name: "Khlong Luang",
    lat: 14.0649,
    lng: 100.6447,
  },
  {
    name: "Midwest City",
    lat: 35.463,
    lng: -97.3709,
  },
  {
    name: "Sankt Augustin",
    lat: 50.77,
    lng: 7.1867,
  },
  {
    name: "Stolberg",
    lat: 50.7667,
    lng: 6.2333,
  },
  {
    name: "Damghan",
    lat: 36.1681,
    lng: 54.3481,
  },
  {
    name: "Bobbili",
    lat: 18.5667,
    lng: 83.4167,
  },
  {
    name: "Irpin'",
    lat: 50.5167,
    lng: 30.25,
  },
  {
    name: "Sattenapalle",
    lat: 16.3962,
    lng: 80.1497,
  },
  {
    name: "Krymsk",
    lat: 44.9333,
    lng: 38,
  },
  {
    name: "Andradina",
    lat: -20.8654,
    lng: -51.3157,
  },
  {
    name: "Goldsboro",
    lat: 35.3778,
    lng: -77.972,
  },
  {
    name: "Kudamatsu",
    lat: 34.015,
    lng: 131.8703,
  },
  {
    name: "Punta Alta",
    lat: -38.88,
    lng: -62.08,
  },
  {
    name: "Tikapur",
    lat: 28.5,
    lng: 81.1333,
  },
  {
    name: "Euless",
    lat: 32.8508,
    lng: -97.0799,
  },
  {
    name: "Gorlitz",
    lat: 51.1528,
    lng: 14.9872,
  },
  {
    name: "Pacos de Ferreira",
    lat: 41.2833,
    lng: -8.3833,
  },
  {
    name: "Eschweiler",
    lat: 50.8167,
    lng: 6.2833,
  },
  {
    name: "Vrindavan",
    lat: 27.5806,
    lng: 77.7006,
  },
  {
    name: "Ribnita",
    lat: 47.7664,
    lng: 29.0006,
  },
  {
    name: "Opava",
    lat: 49.9381,
    lng: 17.9044,
  },
  {
    name: "Meerbusch",
    lat: 51.2667,
    lng: 6.6667,
  },
  {
    name: "General Pico",
    lat: -35.6667,
    lng: -63.7333,
  },
  {
    name: "Manhattan",
    lat: 39.1886,
    lng: -96.6046,
  },
  {
    name: "Shoreline",
    lat: 47.7564,
    lng: -122.3426,
  },
  {
    name: "Neryungri",
    lat: 56.6583,
    lng: 124.725,
  },
  {
    name: "Piscataway",
    lat: 40.5467,
    lng: -74.4636,
  },
  {
    name: "Nova Vicosa",
    lat: -17.8919,
    lng: -39.3719,
  },
  {
    name: "Brentwood",
    lat: 51.6204,
    lng: 0.305,
  },
  {
    name: "Clacton-on-Sea",
    lat: 51.7918,
    lng: 1.1457,
  },
  {
    name: "Cruzeiro do Sul",
    lat: -7.63,
    lng: -72.67,
  },
  {
    name: "Acambay",
    lat: 19.9539,
    lng: -99.8431,
  },
  {
    name: "Nogata",
    lat: 33.7439,
    lng: 130.7297,
  },
  {
    name: "Lake Havasu City",
    lat: 34.5006,
    lng: -114.3113,
  },
  {
    name: "Garzon",
    lat: 2.2104,
    lng: -75.65,
  },
  {
    name: "Waiblingen",
    lat: 48.8303,
    lng: 9.3169,
  },
  {
    name: "Taquaritinga",
    lat: -21.4058,
    lng: -48.505,
  },
  {
    name: "Bertioga",
    lat: -23.8539,
    lng: -46.1389,
  },
  {
    name: "Smyrna",
    lat: 33.8633,
    lng: -84.5168,
  },
  {
    name: "Tonsberg",
    lat: 59.2981,
    lng: 10.4236,
  },
  {
    name: "Frydek-Mistek",
    lat: 49.6881,
    lng: 18.3536,
  },
  {
    name: "Toki",
    lat: 35.3525,
    lng: 137.1833,
  },
  {
    name: "Jackson",
    lat: 40.098,
    lng: -74.3579,
  },
  {
    name: "Taybad",
    lat: 34.74,
    lng: 60.7756,
  },
  {
    name: "Cape Girardeau",
    lat: 37.3108,
    lng: -89.5597,
  },
  {
    name: "Amealco",
    lat: 20.1881,
    lng: -100.1439,
  },
  {
    name: "Hassa",
    lat: 36.8,
    lng: 36.53,
  },
  {
    name: "Hohoe",
    lat: 7.149,
    lng: 0.4746,
  },
  {
    name: "Amarante",
    lat: 41.2667,
    lng: -8.0833,
  },
  {
    name: "Belampalli",
    lat: 19.0558,
    lng: 79.4931,
  },
  {
    name: "Bayan Hot",
    lat: 38.839,
    lng: 105.6686,
  },
  {
    name: "Narutocho-mitsuishi",
    lat: 34.1667,
    lng: 134.6167,
  },
  {
    name: "Hidaka",
    lat: 35.9078,
    lng: 139.3392,
  },
  {
    name: "Xinqing",
    lat: 48.2363,
    lng: 129.5059,
  },
  {
    name: "Blainville",
    lat: 45.67,
    lng: -73.88,
  },
  {
    name: "Gulariya",
    lat: 28.2331,
    lng: 81.3331,
  },
  {
    name: "Registro",
    lat: -24.4878,
    lng: -47.8439,
  },
  {
    name: "Antratsyt",
    lat: 48.1167,
    lng: 39.0833,
  },
  {
    name: "Vranjak",
    lat: 42.3994,
    lng: 20.6547,
  },
  {
    name: "Xanthi",
    lat: 41.1333,
    lng: 24.8833,
  },
  {
    name: "Zarrin Shahr",
    lat: 32.3894,
    lng: 51.3764,
  },
  {
    name: "Lozova",
    lat: 48.8892,
    lng: 36.3161,
  },
  {
    name: "Khan Shaykhun",
    lat: 35.4419,
    lng: 36.6508,
  },
  {
    name: "Kazanlak",
    lat: 42.6167,
    lng: 25.4,
  },
  {
    name: "Vorkuta",
    lat: 67.5,
    lng: 64.0333,
  },
  {
    name: "Katerini",
    lat: 40.2667,
    lng: 22.5,
  },
  {
    name: "Parachinar",
    lat: 33.8992,
    lng: 70.1008,
  },
  {
    name: "Bhimunipatnam",
    lat: 17.8864,
    lng: 83.4471,
  },
  {
    name: "Hyeres",
    lat: 43.1199,
    lng: 6.1316,
  },
  {
    name: "Canterbury",
    lat: 51.28,
    lng: 1.08,
  },
  {
    name: "Boituva",
    lat: -23.2833,
    lng: -47.6722,
  },
  {
    name: "Portimao",
    lat: 37.1333,
    lng: -8.5333,
  },
  {
    name: "Volzhsk",
    lat: 55.8667,
    lng: 48.35,
  },
  {
    name: "Changling",
    lat: 44.27,
    lng: 123.99,
  },
  {
    name: "Grants Pass",
    lat: 42.4333,
    lng: -123.3317,
  },
  {
    name: "Blue Springs",
    lat: 39.0124,
    lng: -94.2721,
  },
  {
    name: "Xiva",
    lat: 41.3783,
    lng: 60.3639,
  },
  {
    name: "Porirua",
    lat: -41.1333,
    lng: 174.85,
  },
  {
    name: "Gus'-Khrustal'nyy",
    lat: 55.6167,
    lng: 40.65,
  },
  {
    name: "Martin",
    lat: 49.0636,
    lng: 18.9214,
  },
  {
    name: "Southaven",
    lat: 34.9514,
    lng: -89.9787,
  },
  {
    name: "Annaka",
    lat: 36.3264,
    lng: 138.8872,
  },
  {
    name: "Umm Ruwaba",
    lat: 12.9058,
    lng: 31.2156,
  },
  {
    name: "Tinley Park",
    lat: 41.567,
    lng: -87.805,
  },
  {
    name: "Apatity",
    lat: 67.5675,
    lng: 33.3933,
  },
  {
    name: "Chino",
    lat: 35.9956,
    lng: 138.1589,
  },
  {
    name: "Azul",
    lat: -36.7833,
    lng: -59.85,
  },
  {
    name: "Diamond Bar",
    lat: 33.9991,
    lng: -117.8161,
  },
  {
    name: "Pittsfield",
    lat: 42.4517,
    lng: -73.2605,
  },
  {
    name: "Eagle Pass",
    lat: 28.7125,
    lng: -100.484,
  },
  {
    name: "Aran Bidgol",
    lat: 34.0578,
    lng: 51.4842,
  },
  {
    name: "Monte Mor",
    lat: -22.9467,
    lng: -47.315,
  },
  {
    name: "Lenexa",
    lat: 38.9609,
    lng: -94.8018,
  },
  {
    name: "Corby",
    lat: 52.4914,
    lng: -0.6965,
  },
  {
    name: "Hazleton",
    lat: 40.9504,
    lng: -75.9724,
  },
  {
    name: "Abington",
    lat: 40.1108,
    lng: -75.1146,
  },
  {
    name: "Sakurai",
    lat: 34.5189,
    lng: 135.8519,
  },
  {
    name: "Twin Falls",
    lat: 42.5645,
    lng: -114.4615,
  },
  {
    name: "Brookhaven",
    lat: 33.8744,
    lng: -84.3314,
  },
  {
    name: "Schweinfurt",
    lat: 50.05,
    lng: 10.2333,
  },
  {
    name: "Batac",
    lat: 18.0554,
    lng: 120.5649,
  },
  {
    name: "Baden-Baden",
    lat: 48.7619,
    lng: 8.2408,
  },
  {
    name: "Novato",
    lat: 38.092,
    lng: -122.5576,
  },
  {
    name: "Tigard",
    lat: 45.4237,
    lng: -122.7845,
  },
  {
    name: "Aurora",
    lat: 44,
    lng: -79.4667,
  },
  {
    name: "Highland",
    lat: 34.1113,
    lng: -117.1654,
  },
  {
    name: "Langenhagen",
    lat: 52.4394,
    lng: 9.74,
  },
  {
    name: "Dearborn Heights",
    lat: 42.3164,
    lng: -83.2769,
  },
  {
    name: "Puttur",
    lat: 13.45,
    lng: 79.55,
  },
  {
    name: "New Plymouth",
    lat: -39.0578,
    lng: 174.0742,
  },
  {
    name: "Hattingen",
    lat: 51.3992,
    lng: 7.1858,
  },
  {
    name: "Bad Homburg",
    lat: 50.2292,
    lng: 8.6105,
  },
  {
    name: "Pombal",
    lat: 39.9162,
    lng: -8.6279,
  },
  {
    name: "Grapevine",
    lat: 32.9343,
    lng: -97.0744,
  },
  {
    name: "Hervey Bay",
    lat: -25.2853,
    lng: 152.8728,
  },
  {
    name: "Amalapuram",
    lat: 16.5833,
    lng: 82.0167,
  },
  {
    name: "Fond du Lac",
    lat: 43.7718,
    lng: -88.4396,
  },
  {
    name: "Punganuru",
    lat: 13.3667,
    lng: 78.5833,
  },
  {
    name: "Nandod",
    lat: 21.8704,
    lng: 73.5026,
  },
  {
    name: "Apple Valley",
    lat: 44.7457,
    lng: -93.2006,
  },
  {
    name: "Qiryat Gat",
    lat: 31.6061,
    lng: 34.7717,
  },
  {
    name: "Chicopee",
    lat: 42.1764,
    lng: -72.5719,
  },
  {
    name: "Zhushan",
    lat: 23.6889,
    lng: 120.7289,
  },
  {
    name: "Camaqua",
    lat: -30.8511,
    lng: -51.8122,
  },
  {
    name: "Wesley Chapel",
    lat: 28.2106,
    lng: -82.3238,
  },
  {
    name: "Narbonne",
    lat: 43.1836,
    lng: 3.0042,
  },
  {
    name: "Tequisquiapan",
    lat: 20.5206,
    lng: -99.8958,
  },
  {
    name: "Cathedral City",
    lat: 33.8363,
    lng: -116.4642,
  },
  {
    name: "La Roche-sur-Yon",
    lat: 46.6705,
    lng: -1.426,
  },
  {
    name: "San Cristobal Verapaz",
    lat: 15.365,
    lng: -90.4792,
  },
  {
    name: "Porto Ferreira",
    lat: -21.8539,
    lng: -47.4789,
  },
  {
    name: "Hacienda Heights",
    lat: 33.997,
    lng: -117.9728,
  },
  {
    name: "Funato",
    lat: 34.2564,
    lng: 135.3111,
  },
  {
    name: "Vannes",
    lat: 47.6559,
    lng: -2.7603,
  },
  {
    name: "Delano",
    lat: 35.767,
    lng: -119.2637,
  },
  {
    name: "Bentonville",
    lat: 36.3546,
    lng: -94.2306,
  },
  {
    name: "Stonecrest",
    lat: 33.6842,
    lng: -84.1372,
  },
  {
    name: "Kettering",
    lat: 39.6957,
    lng: -84.1495,
  },
  {
    name: "Canlaon",
    lat: 10.3833,
    lng: 123.2,
  },
  {
    name: "Sarpsborg",
    lat: 59.2839,
    lng: 11.1096,
  },
  {
    name: "Colton",
    lat: 34.0538,
    lng: -117.3254,
  },
  {
    name: "Pulheim",
    lat: 51,
    lng: 6.8,
  },
  {
    name: "Kingston",
    lat: 41.9295,
    lng: -73.9968,
  },
  {
    name: "Ostroleka",
    lat: 53.0833,
    lng: 21.5667,
  },
  {
    name: "Hanyu",
    lat: 36.1728,
    lng: 139.5486,
  },
  {
    name: "Mutsu",
    lat: 41.2931,
    lng: 141.1831,
  },
  {
    name: "Chota",
    lat: -6.5614,
    lng: -78.6486,
  },
  {
    name: "Lingen",
    lat: 52.5233,
    lng: 7.3172,
  },
  {
    name: "Bad Salzuflen",
    lat: 52.0875,
    lng: 8.7506,
  },
  {
    name: "West Haven",
    lat: 41.2739,
    lng: -72.9672,
  },
  {
    name: "El Banco",
    lat: 9.0003,
    lng: -73.98,
  },
  {
    name: "St. Cloud",
    lat: 28.2294,
    lng: -81.2829,
  },
  {
    name: "Sertolovo",
    lat: 60.15,
    lng: 30.2,
  },
  {
    name: "Chivilcoy",
    lat: -34.9,
    lng: -60.0167,
  },
  {
    name: "Cholet",
    lat: 47.06,
    lng: -0.8783,
  },
  {
    name: "Rotorua",
    lat: -38.1378,
    lng: 176.2514,
  },
  {
    name: "Sao Jose do Rio Pardo",
    lat: -21.5958,
    lng: -46.8889,
  },
  {
    name: "Kotka",
    lat: 60.4667,
    lng: 26.9458,
  },
  {
    name: "Kavala",
    lat: 40.9396,
    lng: 24.4069,
  },
  {
    name: "Normal",
    lat: 40.5218,
    lng: -88.9881,
  },
  {
    name: "Palmaner",
    lat: 13.2,
    lng: 78.75,
  },
  {
    name: "Qing'an",
    lat: 46.8719,
    lng: 127.5118,
  },
  {
    name: "Chiquinquira",
    lat: 5.6204,
    lng: -73.8199,
  },
  {
    name: "Itupeva",
    lat: -23.1531,
    lng: -47.0578,
  },
  {
    name: "Tarma",
    lat: -11.4167,
    lng: -75.6833,
  },
  {
    name: "Jalor",
    lat: 25.35,
    lng: 72.6167,
  },
  {
    name: "Zarafshon Shahri",
    lat: 41.5667,
    lng: 64.2,
  },
  {
    name: "Vikarabad",
    lat: 17.33,
    lng: 77.9,
  },
  {
    name: "Guillermo E. Hudson",
    lat: -34.7903,
    lng: -58.1486,
  },
  {
    name: "Hashtpar",
    lat: 37.7992,
    lng: 48.9053,
  },
  {
    name: "Union",
    lat: 42.1258,
    lng: -76.0329,
  },
  {
    name: "Siena",
    lat: 43.3183,
    lng: 11.3314,
  },
  {
    name: "Ruteng",
    lat: -8.6118,
    lng: 120.4698,
  },
  {
    name: "Tokmok",
    lat: 42.839,
    lng: 75.291,
  },
  {
    name: "Wayne",
    lat: 40.9481,
    lng: -74.2453,
  },
  {
    name: "Ban Om Noi",
    lat: 13.7001,
    lng: 100.3241,
  },
  {
    name: "Zhigulevsk",
    lat: 53.4,
    lng: 49.5,
  },
  {
    name: "Arroyo Grande",
    lat: 35.1241,
    lng: -120.5845,
  },
  {
    name: "Progreso",
    lat: 21.28,
    lng: -89.67,
  },
  {
    name: "Minnetonka",
    lat: 44.9322,
    lng: -93.4598,
  },
  {
    name: "Jagtial",
    lat: 18.8,
    lng: 78.93,
  },
  {
    name: "Dholka",
    lat: 22.72,
    lng: 72.47,
  },
  {
    name: "Milford",
    lat: 41.2256,
    lng: -73.0616,
  },
  {
    name: "Shali",
    lat: 43.15,
    lng: 45.9,
  },
  {
    name: "La Lima",
    lat: 15.433,
    lng: -87.917,
  },
  {
    name: "Liski",
    lat: 50.9822,
    lng: 39.4994,
  },
  {
    name: "Tuni",
    lat: 17.35,
    lng: 82.55,
  },
  {
    name: "Yucaipa",
    lat: 34.0336,
    lng: -117.0429,
  },
  {
    name: "Markala",
    lat: 13.6704,
    lng: -6.07,
  },
  {
    name: "Svobodnyy",
    lat: 51.3833,
    lng: 128.1333,
  },
  {
    name: "Jaggayyapeta",
    lat: 16.892,
    lng: 80.0976,
  },
  {
    name: "Salo",
    lat: 60.3831,
    lng: 23.1331,
  },
  {
    name: "Brunswick",
    lat: 31.145,
    lng: -81.474,
  },
  {
    name: "Bijar",
    lat: 35.8741,
    lng: 47.5937,
  },
  {
    name: "Williamsport",
    lat: 41.2398,
    lng: -77.0371,
  },
  {
    name: "Bristol",
    lat: 40.1216,
    lng: -74.8667,
  },
  {
    name: "Pamplona",
    lat: 7.3904,
    lng: -72.66,
  },
  {
    name: "Minami-Soma",
    lat: 37.6422,
    lng: 140.9572,
  },
  {
    name: "Nordhorn",
    lat: 52.4333,
    lng: 7.0667,
  },
  {
    name: "Elyria",
    lat: 41.3761,
    lng: -82.1063,
  },
  {
    name: "Leesburg",
    lat: 39.1058,
    lng: -77.5544,
  },
  {
    name: "Millcreek Township",
    lat: 42.0861,
    lng: -80.1193,
  },
  {
    name: "Mount Prospect",
    lat: 42.0641,
    lng: -87.9375,
  },
  {
    name: "Marco de Canavezes",
    lat: 41.1833,
    lng: -8.15,
  },
  {
    name: "Krasnokamsk",
    lat: 58.0833,
    lng: 55.75,
  },
  {
    name: "Imaricho-ko",
    lat: 33.2647,
    lng: 129.8808,
  },
  {
    name: "Upata",
    lat: 8.0204,
    lng: -62.41,
  },
  {
    name: "Port Shepstone",
    lat: -30.7411,
    lng: 30.4547,
  },
  {
    name: "Wetzlar",
    lat: 50.5667,
    lng: 8.5,
  },
  {
    name: "Enerhodar",
    lat: 47.4989,
    lng: 34.6558,
  },
  {
    name: "Pinellas Park",
    lat: 27.8589,
    lng: -82.7078,
  },
  {
    name: "Frechen",
    lat: 50.9167,
    lng: 6.8167,
  },
  {
    name: "Hamilton",
    lat: 32.2942,
    lng: -64.7839,
  },
  {
    name: "Neustadt",
    lat: 49.35,
    lng: 8.15,
  },
  {
    name: "Pijijiapan",
    lat: 15.6867,
    lng: -93.2092,
  },
  {
    name: "Bellevue",
    lat: 41.1535,
    lng: -95.9357,
  },
  {
    name: "West Sacramento",
    lat: 38.5557,
    lng: -121.5504,
  },
  {
    name: "Gudermes",
    lat: 43.35,
    lng: 46.1,
  },
  {
    name: "Apopka",
    lat: 28.7014,
    lng: -81.5304,
  },
  {
    name: "Olimpia",
    lat: -20.7369,
    lng: -48.915,
  },
  {
    name: "Lewiston",
    lat: 46.3934,
    lng: -116.9934,
  },
  {
    name: "Capivari",
    lat: -22.995,
    lng: -47.5078,
  },
  {
    name: "Angol",
    lat: -37.7988,
    lng: -72.7086,
  },
  {
    name: "Grand Island",
    lat: 40.9214,
    lng: -98.3584,
  },
  {
    name: "Palm Desert",
    lat: 33.7378,
    lng: -116.3695,
  },
  {
    name: "Karlovac",
    lat: 45.4931,
    lng: 15.5558,
  },
  {
    name: "Vyksa",
    lat: 55.3194,
    lng: 42.1731,
  },
  {
    name: "Passau",
    lat: 48.5667,
    lng: 13.4667,
  },
  {
    name: "Frejus",
    lat: 43.433,
    lng: 6.737,
  },
  {
    name: "Milford city",
    lat: 41.2256,
    lng: -73.0625,
  },
  {
    name: "Bayonne",
    lat: 43.49,
    lng: -1.48,
  },
  {
    name: "Watertown",
    lat: 43.9734,
    lng: -75.9094,
  },
  {
    name: "Sagua la Grande",
    lat: 22.8086,
    lng: -80.0711,
  },
  {
    name: "Little Elm",
    lat: 33.1856,
    lng: -96.929,
  },
  {
    name: "Pasaje",
    lat: -3.3269,
    lng: -79.8049,
  },
  {
    name: "Chambersburg",
    lat: 39.9315,
    lng: -77.6556,
  },
  {
    name: "Peabody",
    lat: 42.5335,
    lng: -70.9724,
  },
  {
    name: "Wylie",
    lat: 33.0362,
    lng: -96.5161,
  },
  {
    name: "Beaufort",
    lat: 32.4597,
    lng: -80.7235,
  },
  {
    name: "Arsen'yev",
    lat: 44.1667,
    lng: 133.2667,
  },
  {
    name: "Karvina",
    lat: 49.8542,
    lng: 18.5428,
  },
  {
    name: "Mercedes",
    lat: -34.65,
    lng: -59.4333,
  },
  {
    name: "Ahlen",
    lat: 51.7633,
    lng: 7.8911,
  },
  {
    name: "DeSoto",
    lat: 32.5992,
    lng: -96.8633,
  },
  {
    name: "Venkatagiri",
    lat: 13.9667,
    lng: 79.5833,
  },
  {
    name: "Tomiya",
    lat: 38.4,
    lng: 140.8953,
  },
  {
    name: "Torrelavega",
    lat: 43.3531,
    lng: -4.0458,
  },
  {
    name: "Sihor",
    lat: 21.7,
    lng: 71.97,
  },
  {
    name: "Lorica",
    lat: 9.2419,
    lng: -75.816,
  },
  {
    name: "Chone",
    lat: -0.6833,
    lng: -80.1,
  },
  {
    name: "Jangaon",
    lat: 17.72,
    lng: 79.18,
  },
  {
    name: "Poprad",
    lat: 49.05,
    lng: 20.3,
  },
  {
    name: "Mongagua",
    lat: -24.0869,
    lng: -46.6289,
  },
  {
    name: "Edina",
    lat: 44.8914,
    lng: -93.3602,
  },
  {
    name: "Wolfenbuttel",
    lat: 52.1622,
    lng: 10.5369,
  },
  {
    name: "Krasnokamensk",
    lat: 50.1,
    lng: 118.0333,
  },
  {
    name: "San Jose Villa de Allende",
    lat: 19.3747,
    lng: -100.1475,
  },
  {
    name: "Parsippany-Troy Hills",
    lat: 40.8601,
    lng: -74.4238,
  },
  {
    name: "Wheaton",
    lat: 41.8561,
    lng: -88.1083,
  },
  {
    name: "Thongwa",
    lat: 16.7547,
    lng: 96.5193,
  },
  {
    name: "Jaen",
    lat: -5.6992,
    lng: -78.8009,
  },
  {
    name: "Alesund",
    lat: 62.4723,
    lng: 6.1549,
  },
  {
    name: "Kobryn",
    lat: 52.2167,
    lng: 24.3667,
  },
  {
    name: "Pacora",
    lat: 9.08,
    lng: -79.28,
  },
  {
    name: "Horishni Plavni",
    lat: 49.0107,
    lng: 33.6562,
  },
  {
    name: "An Nabk",
    lat: 34.025,
    lng: 36.7344,
  },
  {
    name: "Arles",
    lat: 43.6767,
    lng: 4.6278,
  },
  {
    name: "Mandamari",
    lat: 18.9822,
    lng: 79.4811,
  },
  {
    name: "Lacey",
    lat: 47.046,
    lng: -122.7934,
  },
  {
    name: "Summerville",
    lat: 33.0015,
    lng: -80.1799,
  },
  {
    name: "Vyaz'ma",
    lat: 55.2103,
    lng: 34.285,
  },
  {
    name: "Miyako",
    lat: 39.6414,
    lng: 141.9572,
  },
  {
    name: "Ibbenburen",
    lat: 52.2778,
    lng: 7.7167,
  },
  {
    name: "Kleve",
    lat: 51.79,
    lng: 6.14,
  },
  {
    name: "Bando",
    lat: 36.0483,
    lng: 139.8889,
  },
  {
    name: "Welland",
    lat: 42.9833,
    lng: -79.2333,
  },
  {
    name: "Stratford",
    lat: 41.207,
    lng: -73.1305,
  },
  {
    name: "Jaguariuna",
    lat: -22.68,
    lng: -46.99,
  },
  {
    name: "Satte",
    lat: 36.0781,
    lng: 139.7258,
  },
  {
    name: "Tefe",
    lat: -3.3684,
    lng: -64.7205,
  },
  {
    name: "Novovolynsk",
    lat: 50.7333,
    lng: 24.1667,
  },
  {
    name: "Basankusu",
    lat: 1.2222,
    lng: 19.8028,
  },
  {
    name: "Arao",
    lat: 32.9867,
    lng: 130.4333,
  },
  {
    name: "Cruz del Eje",
    lat: -30.7333,
    lng: -64.8,
  },
  {
    name: "Belorechensk",
    lat: 44.7667,
    lng: 39.8667,
  },
  {
    name: "Abdul Hakim",
    lat: 30.5522,
    lng: 72.1278,
  },
  {
    name: "Porto Feliz",
    lat: -23.215,
    lng: -47.5239,
  },
  {
    name: "Lompoc",
    lat: 34.6618,
    lng: -120.4714,
  },
  {
    name: "Timashevsk",
    lat: 45.6167,
    lng: 38.9333,
  },
  {
    name: "Metpalli",
    lat: 18.8297,
    lng: 78.5878,
  },
  {
    name: "Howell",
    lat: 40.1819,
    lng: -74.1977,
  },
  {
    name: "Caldas da Rainha",
    lat: 39.4069,
    lng: -9.1363,
  },
  {
    name: "Gwadar",
    lat: 25.1264,
    lng: 62.3225,
  },
  {
    name: "Kentwood",
    lat: 42.8852,
    lng: -85.5925,
  },
  {
    name: "Berriozabal",
    lat: 16.7993,
    lng: -93.2725,
  },
  {
    name: "Covilha",
    lat: 40.2833,
    lng: -7.5,
  },
  {
    name: "Bad Kreuznach",
    lat: 49.8469,
    lng: 7.8669,
  },
  {
    name: "Shepparton",
    lat: -36.3833,
    lng: 145.4,
  },
  {
    name: "Villareal",
    lat: 39.9378,
    lng: -0.1014,
  },
  {
    name: "Sakaidecho",
    lat: 34.3164,
    lng: 133.8606,
  },
  {
    name: "Solnechnogorsk",
    lat: 56.1844,
    lng: 36.995,
  },
  {
    name: "Caleta Olivia",
    lat: -46.4333,
    lng: -67.5333,
  },
  {
    name: "Sierra Vista",
    lat: 31.563,
    lng: -110.3153,
  },
  {
    name: "Levittown",
    lat: 40.1537,
    lng: -74.853,
  },
  {
    name: "Grasse",
    lat: 43.6667,
    lng: 6.9167,
  },
  {
    name: "Tulsipur",
    lat: 28.1278,
    lng: 82.2956,
  },
  {
    name: "Madison",
    lat: 34.7114,
    lng: -86.7626,
  },
  {
    name: "Yuki",
    lat: 36.3053,
    lng: 139.8775,
  },
  {
    name: "Smyrna",
    lat: 35.9722,
    lng: -86.5253,
  },
  {
    name: "Speyer",
    lat: 49.3194,
    lng: 8.4311,
  },
  {
    name: "North Bay",
    lat: 46.3,
    lng: -79.45,
  },
  {
    name: "Knysna",
    lat: -34.0356,
    lng: 23.0489,
  },
  {
    name: "Glendora",
    lat: 34.1449,
    lng: -117.8468,
  },
  {
    name: "Butare",
    lat: -2.6,
    lng: 29.75,
  },
  {
    name: "El Talar de Pacheco",
    lat: -34.4719,
    lng: -58.655,
  },
  {
    name: "Tsukubamirai",
    lat: 35.9631,
    lng: 140.0372,
  },
  {
    name: "Burien",
    lat: 47.4762,
    lng: -122.3394,
  },
  {
    name: "Uzlovaya",
    lat: 53.9791,
    lng: 38.1601,
  },
  {
    name: "Boblingen",
    lat: 48.6833,
    lng: 9,
  },
  {
    name: "Montijo",
    lat: 38.7049,
    lng: -8.9757,
  },
  {
    name: "Herriman",
    lat: 40.4899,
    lng: -112.0171,
  },
  {
    name: "Willich",
    lat: 51.2631,
    lng: 6.5492,
  },
  {
    name: "Severomorsk",
    lat: 69.0692,
    lng: 33.4167,
  },
  {
    name: "Tadmur",
    lat: 34.56,
    lng: 38.2672,
  },
  {
    name: "Farmington",
    lat: 36.7555,
    lng: -108.1823,
  },
  {
    name: "New Bern",
    lat: 35.0955,
    lng: -77.0723,
  },
  {
    name: "Cheremkhovo",
    lat: 53.15,
    lng: 103.0667,
  },
  {
    name: "Gummersbach",
    lat: 51.0333,
    lng: 7.5667,
  },
  {
    name: "Nichinan",
    lat: 31.6019,
    lng: 131.3789,
  },
  {
    name: "Hinesville",
    lat: 31.8247,
    lng: -81.6135,
  },
  {
    name: "Repalle",
    lat: 16.02,
    lng: 80.85,
  },
  {
    name: "Snezhinsk",
    lat: 56.0833,
    lng: 60.7333,
  },
  {
    name: "Ravensburg",
    lat: 47.7831,
    lng: 9.6114,
  },
  {
    name: "Hassan Abdal",
    lat: 33.8195,
    lng: 72.689,
  },
  {
    name: "Konibodom",
    lat: 40.2833,
    lng: 70.4167,
  },
  {
    name: "Miyoshi",
    lat: 34.8058,
    lng: 132.8517,
  },
  {
    name: "Beaumont",
    lat: 33.9076,
    lng: -116.9766,
  },
  {
    name: "Goslar",
    lat: 51.906,
    lng: 10.4292,
  },
  {
    name: "Yasu",
    lat: 35.0675,
    lng: 136.0258,
  },
  {
    name: "Horsham",
    lat: 51.062,
    lng: -0.325,
  },
  {
    name: "Collierville",
    lat: 35.0471,
    lng: -89.6988,
  },
  {
    name: "Campos do Jordao",
    lat: -22.7394,
    lng: -45.5914,
  },
  {
    name: "Nazarovo",
    lat: 56.0064,
    lng: 90.3914,
  },
  {
    name: "West Lafayette",
    lat: 40.4432,
    lng: -86.9239,
  },
  {
    name: "Laval",
    lat: 48.0733,
    lng: -0.7689,
  },
  {
    name: "Noshiromachi",
    lat: 40.2122,
    lng: 140.0267,
  },
  {
    name: "Florissant",
    lat: 38.7996,
    lng: -90.3269,
  },
  {
    name: "Hoffman Estates",
    lat: 42.0639,
    lng: -88.1468,
  },
  {
    name: "Mozhga",
    lat: 56.45,
    lng: 52.2167,
  },
  {
    name: "Kirishi",
    lat: 59.45,
    lng: 32.0167,
  },
  {
    name: "Ye",
    lat: 15.2533,
    lng: 97.8679,
  },
  {
    name: "Queen Creek",
    lat: 33.2386,
    lng: -111.6343,
  },
  {
    name: "Kizlyar",
    lat: 43.85,
    lng: 46.7167,
  },
  {
    name: "Fafe",
    lat: 41.45,
    lng: -8.1667,
  },
  {
    name: "Bani Walid",
    lat: 31.7455,
    lng: 13.9835,
  },
  {
    name: "Kannapolis",
    lat: 35.4764,
    lng: -80.6403,
  },
  {
    name: "Tokamachi",
    lat: 37.1275,
    lng: 138.7557,
  },
  {
    name: "Pulawy",
    lat: 51.4166,
    lng: 21.9694,
  },
  {
    name: "To`rtko`l Shahri",
    lat: 41.55,
    lng: 61,
  },
  {
    name: "Beloeil",
    lat: 45.5667,
    lng: -73.2,
  },
  {
    name: "Maricopa",
    lat: 33.0404,
    lng: -112.0006,
  },
  {
    name: "Mahalapye",
    lat: -23.1041,
    lng: 26.8142,
  },
  {
    name: "Mweka",
    lat: -4.8519,
    lng: 21.5594,
  },
  {
    name: "Belleville",
    lat: 44.1667,
    lng: -77.3833,
  },
  {
    name: "Beruniy",
    lat: 41.6833,
    lng: 60.75,
  },
  {
    name: "Methuen Town",
    lat: 42.734,
    lng: -71.1889,
  },
  {
    name: "Kulu",
    lat: 39.0901,
    lng: 33.0807,
  },
  {
    name: "El Salvador",
    lat: 8.5667,
    lng: 124.5167,
  },
  {
    name: "Shakhtarsk",
    lat: 48.0333,
    lng: 38.4833,
  },
  {
    name: "Rastatt",
    lat: 48.8572,
    lng: 8.2031,
  },
  {
    name: "Starogard Gdanski",
    lat: 53.9667,
    lng: 18.5333,
  },
  {
    name: "Sahuarita",
    lat: 31.9323,
    lng: -110.9654,
  },
  {
    name: "Rowland Heights",
    lat: 33.9716,
    lng: -117.8911,
  },
  {
    name: "Lorrach",
    lat: 47.6156,
    lng: 7.6614,
  },
  {
    name: "Turbo",
    lat: 8.1004,
    lng: -76.74,
  },
  {
    name: "Arjona",
    lat: 10.26,
    lng: -75.35,
  },
  {
    name: "Traverse City",
    lat: 44.7547,
    lng: -85.6035,
  },
  {
    name: "Mirabel",
    lat: 45.65,
    lng: -74.0833,
  },
  {
    name: "East Hartford",
    lat: 41.7634,
    lng: -72.6152,
  },
  {
    name: "Irondequoit",
    lat: 43.2096,
    lng: -77.5705,
  },
  {
    name: "Catalina Foothills",
    lat: 32.3041,
    lng: -110.8835,
  },
  {
    name: "Pozi",
    lat: 23.4611,
    lng: 120.242,
  },
  {
    name: "Amora",
    lat: 38.6265,
    lng: -9.1189,
  },
  {
    name: "Cookeville",
    lat: 36.1484,
    lng: -85.5114,
  },
  {
    name: "Buguruslan",
    lat: 53.6167,
    lng: 52.4167,
  },
  {
    name: "Siguiri",
    lat: 11.4171,
    lng: -9.1666,
  },
  {
    name: "Leith",
    lat: 55.98,
    lng: -3.17,
  },
  {
    name: "Peine",
    lat: 52.3203,
    lng: 10.2336,
  },
  {
    name: "Mishawaka",
    lat: 41.6736,
    lng: -86.1669,
  },
  {
    name: "Emden",
    lat: 53.3669,
    lng: 7.2061,
  },
  {
    name: "Bullhead City",
    lat: 35.1205,
    lng: -114.546,
  },
  {
    name: "Chomutov",
    lat: 50.4628,
    lng: 13.4111,
  },
  {
    name: "Ashburn",
    lat: 39.03,
    lng: -77.4711,
  },
  {
    name: "Tajura'",
    lat: 32.8819,
    lng: 13.34,
  },
  {
    name: "Forney",
    lat: 32.744,
    lng: -96.4529,
  },
  {
    name: "Sao Joaquim da Barra",
    lat: -20.5808,
    lng: -47.855,
  },
  {
    name: "Hikari",
    lat: 33.9617,
    lng: 131.9422,
  },
  {
    name: "Erftstadt",
    lat: 50.8167,
    lng: 6.7667,
  },
  {
    name: "Lindong",
    lat: 43.9837,
    lng: 119.1834,
  },
  {
    name: "Borovichi",
    lat: 58.4,
    lng: 33.9167,
  },
  {
    name: "Itarare",
    lat: -24.1125,
    lng: -49.3317,
  },
  {
    name: "Bhainsa",
    lat: 19.1,
    lng: 77.9667,
  },
  {
    name: "Slonim",
    lat: 53.0833,
    lng: 25.3167,
  },
  {
    name: "Roslavl'",
    lat: 53.9492,
    lng: 32.8569,
  },
  {
    name: "Gogrial",
    lat: 8.5337,
    lng: 28.1167,
  },
  {
    name: "Tomisato",
    lat: 35.7267,
    lng: 140.3431,
  },
  {
    name: "Sardasht",
    lat: 36.1553,
    lng: 45.4789,
  },
  {
    name: "Albi",
    lat: 43.9289,
    lng: 2.1464,
  },
  {
    name: "Suzaka",
    lat: 36.6511,
    lng: 138.3069,
  },
  {
    name: "Shawinigan",
    lat: 46.5667,
    lng: -72.75,
  },
  {
    name: "Tepeapulco",
    lat: 19.7856,
    lng: -98.5517,
  },
  {
    name: "Severn",
    lat: 39.1355,
    lng: -76.6958,
  },
  {
    name: "Orangetown",
    lat: 41.0526,
    lng: -73.9475,
  },
  {
    name: "Kahemba",
    lat: -7.2829,
    lng: 19,
  },
  {
    name: "Porvoo",
    lat: 60.3931,
    lng: 25.6639,
  },
  {
    name: "Nenjiang",
    lat: 49.1745,
    lng: 125.216,
  },
  {
    name: "Heidenheim",
    lat: 48.6761,
    lng: 10.1544,
  },
  {
    name: "Azusa",
    lat: 34.1386,
    lng: -117.9124,
  },
  {
    name: "Upper Buchanan",
    lat: 5.9161,
    lng: -10.0525,
  },
  {
    name: "Yamaga",
    lat: 33.0167,
    lng: 130.6914,
  },
  {
    name: "Xankandi",
    lat: 39.8153,
    lng: 46.7519,
  },
  {
    name: "Ramhormoz",
    lat: 31.2783,
    lng: 49.6064,
  },
  {
    name: "Bloomsburg",
    lat: 41.0027,
    lng: -76.4561,
  },
  {
    name: "Bergkamen",
    lat: 51.6167,
    lng: 7.6333,
  },
  {
    name: "Nomimachi",
    lat: 36.4375,
    lng: 136.4961,
  },
  {
    name: "Morehead City",
    lat: 34.7308,
    lng: -76.7387,
  },
  {
    name: "Sesimbra",
    lat: 38.4437,
    lng: -9.0996,
  },
  {
    name: "Leonberg",
    lat: 48.8014,
    lng: 9.0131,
  },
  {
    name: "Ridder",
    lat: 50.35,
    lng: 83.5167,
  },
  {
    name: "Coral Gables",
    lat: 25.7037,
    lng: -80.2715,
  },
  {
    name: "Ifakara",
    lat: -8.1296,
    lng: 36.68,
  },
  {
    name: "Frankenthal",
    lat: 49.5333,
    lng: 8.35,
  },
  {
    name: "Zyryanovsk",
    lat: 49.7453,
    lng: 84.2548,
  },
  {
    name: "Evreux",
    lat: 49.02,
    lng: 1.15,
  },
  {
    name: "Sanmu",
    lat: 35.6028,
    lng: 140.4136,
  },
  {
    name: "Berber",
    lat: 18.017,
    lng: 33.9833,
  },
  {
    name: "Omitama",
    lat: 36.2394,
    lng: 140.3525,
  },
  {
    name: "Oroville",
    lat: 39.4999,
    lng: -121.5634,
  },
  {
    name: "Ozgon",
    lat: 40.7667,
    lng: 73.3,
  },
  {
    name: "Wilson",
    lat: 35.7312,
    lng: -77.9284,
  },
  {
    name: "Okhtyrka",
    lat: 50.3074,
    lng: 34.9016,
  },
  {
    name: "Lawrence",
    lat: 39.8674,
    lng: -85.9905,
  },
  {
    name: "Bad Oeynhausen",
    lat: 52.2,
    lng: 8.8,
  },
  {
    name: "Villaguay",
    lat: -31.85,
    lng: -59.0167,
  },
  {
    name: "Muhanga",
    lat: -2.0783,
    lng: 29.7581,
  },
  {
    name: "Portage",
    lat: 42.2,
    lng: -85.5906,
  },
  {
    name: "Christchurch",
    lat: 50.73,
    lng: -1.78,
  },
  {
    name: "Albury",
    lat: -36.0806,
    lng: 146.9158,
  },
  {
    name: "Minot",
    lat: 48.2375,
    lng: -101.2781,
  },
  {
    name: "Cwmbran",
    lat: 51.653,
    lng: -3.021,
  },
  {
    name: "Yong'an",
    lat: 31.0504,
    lng: 109.5167,
  },
  {
    name: "Changyon",
    lat: 38.2517,
    lng: 125.1021,
  },
  {
    name: "Dunwoody",
    lat: 33.9418,
    lng: -84.3122,
  },
  {
    name: "Shimotsucho-kominami",
    lat: 34.1556,
    lng: 135.2092,
  },
  {
    name: "Poway",
    lat: 32.9871,
    lng: -117.0201,
  },
  {
    name: "Libertador General San Martin",
    lat: -23.8,
    lng: -64.7833,
  },
  {
    name: "Santa Rosa",
    lat: -3.4522,
    lng: -79.9617,
  },
  {
    name: "Prievidza",
    lat: 48.7714,
    lng: 18.6242,
  },
  {
    name: "Timimoun",
    lat: 29.2365,
    lng: 0.27,
  },
  {
    name: "I-n-Salah",
    lat: 27.2166,
    lng: 2.4666,
  },
  {
    name: "San Jacinto",
    lat: 33.797,
    lng: -116.9916,
  },
  {
    name: "Lesnoy",
    lat: 58.6333,
    lng: 59.7833,
  },
  {
    name: "Freising",
    lat: 48.4028,
    lng: 11.7489,
  },
  {
    name: "Haverford",
    lat: 39.9868,
    lng: -75.3164,
  },
  {
    name: "Troy",
    lat: 42.7354,
    lng: -73.6751,
  },
  {
    name: "Newark",
    lat: 37.5204,
    lng: -122.0312,
  },
  {
    name: "Suwa",
    lat: 36.0392,
    lng: 138.1142,
  },
  {
    name: "Cuyahoga Falls",
    lat: 41.1641,
    lng: -81.5207,
  },
  {
    name: "Rheda-Wiedenbruck",
    lat: 51.8417,
    lng: 8.3,
  },
  {
    name: "Downers Grove",
    lat: 41.7949,
    lng: -88.017,
  },
  {
    name: "Jales",
    lat: -20.2689,
    lng: -50.5458,
  },
  {
    name: "Bedford",
    lat: 32.8464,
    lng: -97.135,
  },
  {
    name: "Reedley",
    lat: 36.5987,
    lng: -119.4473,
  },
  {
    name: "Dublin",
    lat: 40.1112,
    lng: -83.1454,
  },
  {
    name: "Marana",
    lat: 32.4355,
    lng: -111.1558,
  },
  {
    name: "Stillwater",
    lat: 36.1316,
    lng: -97.074,
  },
  {
    name: "Decin",
    lat: 50.7736,
    lng: 14.1961,
  },
  {
    name: "Al Mayadin",
    lat: 35.0208,
    lng: 40.4533,
  },
  {
    name: "Huaquillas",
    lat: -3.4803,
    lng: -80.2317,
  },
  {
    name: "Murray",
    lat: 40.6498,
    lng: -111.8874,
  },
  {
    name: "Bornheim",
    lat: 50.7592,
    lng: 7.005,
  },
  {
    name: "Hitachi-ota",
    lat: 36.5383,
    lng: 140.5311,
  },
  {
    name: "Roswell",
    lat: 33.373,
    lng: -104.5294,
  },
  {
    name: "Ena",
    lat: 35.4494,
    lng: 137.4128,
  },
  {
    name: "Pascagoula",
    lat: 30.3665,
    lng: -88.5507,
  },
  {
    name: "Waingapu",
    lat: -9.6582,
    lng: 120.253,
  },
  {
    name: "Brandon",
    lat: 49.8483,
    lng: -99.95,
  },
  {
    name: "Martigues",
    lat: 43.4053,
    lng: 5.0475,
  },
  {
    name: "Sanare",
    lat: 9.7822,
    lng: -69.7931,
  },
  {
    name: "Dachau",
    lat: 48.2603,
    lng: 11.4342,
  },
  {
    name: "Lower Paxton",
    lat: 40.3183,
    lng: -76.7983,
  },
  {
    name: "Jasdan",
    lat: 22.03,
    lng: 71.2,
  },
  {
    name: "Ladysmith",
    lat: -28.5539,
    lng: 29.7825,
  },
  {
    name: "Kozlu",
    lat: 41.4333,
    lng: 31.75,
  },
  {
    name: "Megion",
    lat: 61.0331,
    lng: 76.1097,
  },
  {
    name: "Gronau",
    lat: 52.2125,
    lng: 7.0417,
  },
  {
    name: "Wakema",
    lat: 16.6133,
    lng: 95.1829,
  },
  {
    name: "Port Macquarie",
    lat: -31.4333,
    lng: 152.9,
  },
  {
    name: "Rimouski",
    lat: 48.45,
    lng: -68.53,
  },
  {
    name: "St. Louis Park",
    lat: 44.9488,
    lng: -93.3649,
  },
  {
    name: "Cuxhaven",
    lat: 53.8667,
    lng: 8.7,
  },
  {
    name: "Namtu",
    lat: 23.0837,
    lng: 97.4,
  },
  {
    name: "Rio Grande City",
    lat: 26.3808,
    lng: -98.8215,
  },
  {
    name: "Matay",
    lat: 28.4167,
    lng: 30.7833,
  },
  {
    name: "Draper",
    lat: 40.4957,
    lng: -111.8605,
  },
  {
    name: "Rumia",
    lat: 54.5667,
    lng: 18.4,
  },
  {
    name: "Kolobrzeg",
    lat: 54.1667,
    lng: 15.5667,
  },
  {
    name: "Tubarjal",
    lat: 30.5,
    lng: 38.2167,
  },
  {
    name: "Palm Springs",
    lat: 33.8017,
    lng: -116.5382,
  },
  {
    name: "Kurganinsk",
    lat: 44.8833,
    lng: 40.6,
  },
  {
    name: "Alsdorf",
    lat: 50.8744,
    lng: 6.1615,
  },
  {
    name: "Straubing",
    lat: 48.8772,
    lng: 12.5758,
  },
  {
    name: "Gosen",
    lat: 37.75,
    lng: 139.1833,
  },
  {
    name: "Tonami",
    lat: 36.65,
    lng: 136.9667,
  },
  {
    name: "Paducah",
    lat: 37.0711,
    lng: -88.6436,
  },
  {
    name: "`Akko",
    lat: 32.9261,
    lng: 35.0839,
  },
  {
    name: "Findlay",
    lat: 41.0467,
    lng: -83.6379,
  },
  {
    name: "Dornbirn",
    lat: 47.4167,
    lng: 9.75,
  },
  {
    name: "Ami",
    lat: 36.0308,
    lng: 140.215,
  },
  {
    name: "Marhanets'",
    lat: 47.648,
    lng: 34.6167,
  },
  {
    name: "Bulungu",
    lat: -4.5496,
    lng: 18.6,
  },
  {
    name: "Kyle",
    lat: 29.9937,
    lng: -97.8859,
  },
  {
    name: "Tarnobrzeg",
    lat: 50.5833,
    lng: 21.6833,
  },
  {
    name: "Ishigaki",
    lat: 24.3333,
    lng: 124.15,
  },
  {
    name: "Durham",
    lat: 54.7761,
    lng: -1.5733,
  },
  {
    name: "Monroe",
    lat: 41.9154,
    lng: -83.385,
  },
  {
    name: "Rio Grande da Serra",
    lat: -23.7439,
    lng: -46.3978,
  },
  {
    name: "Beypazari",
    lat: 40.1703,
    lng: 31.9211,
  },
  {
    name: "Tuckahoe",
    lat: 37.5878,
    lng: -77.5858,
  },
  {
    name: "Lincoln",
    lat: 38.8759,
    lng: -121.2916,
  },
  {
    name: "Bel Air South",
    lat: 39.5051,
    lng: -76.3197,
  },
  {
    name: "Ocoee",
    lat: 28.5787,
    lng: -81.5338,
  },
  {
    name: "Brianka",
    lat: 48.5133,
    lng: 38.6431,
  },
  {
    name: "Takeocho-takeo",
    lat: 33.1939,
    lng: 130.0192,
  },
  {
    name: "Burleson",
    lat: 32.517,
    lng: -97.3343,
  },
  {
    name: "Kita",
    lat: 13.0504,
    lng: -9.4833,
  },
  {
    name: "Finike",
    lat: 36.3,
    lng: 30.15,
  },
  {
    name: "Donetsk",
    lat: 48.3369,
    lng: 39.9449,
  },
  {
    name: "Alta Gracia",
    lat: -31.6667,
    lng: -64.4333,
  },
  {
    name: "Farmers Branch",
    lat: 32.9272,
    lng: -96.8804,
  },
  {
    name: "Higashine",
    lat: 38.4314,
    lng: 140.3911,
  },
  {
    name: "East Lansing",
    lat: 42.748,
    lng: -84.4835,
  },
  {
    name: "Uniontown",
    lat: 39.8994,
    lng: -79.7244,
  },
  {
    name: "Kashira",
    lat: 54.8333,
    lng: 38.15,
  },
  {
    name: "Shelekhov",
    lat: 52.2,
    lng: 104.1,
  },
  {
    name: "Jeffersonville",
    lat: 38.3376,
    lng: -85.7026,
  },
  {
    name: "Winder",
    lat: 33.9917,
    lng: -83.7218,
  },
  {
    name: "Wauwatosa",
    lat: 43.0615,
    lng: -88.0347,
  },
  {
    name: "Vila Verde",
    lat: 41.65,
    lng: -8.4333,
  },
  {
    name: "Skierniewice",
    lat: 51.9528,
    lng: 20.1417,
  },
  {
    name: "Littleton",
    lat: 39.5915,
    lng: -105.0188,
  },
  {
    name: "Otradnyy",
    lat: 53.3667,
    lng: 51.35,
  },
  {
    name: "Kikugawa",
    lat: 34.7578,
    lng: 138.0842,
  },
  {
    name: "Tomioka",
    lat: 36.26,
    lng: 138.89,
  },
  {
    name: "Noboribetsu",
    lat: 42.4128,
    lng: 141.1067,
  },
  {
    name: "Soest",
    lat: 51.5711,
    lng: 8.1092,
  },
  {
    name: "East Brunswick",
    lat: 40.4281,
    lng: -74.4179,
  },
  {
    name: "Cumberland",
    lat: 39.6515,
    lng: -78.7585,
  },
  {
    name: "Stade",
    lat: 53.6008,
    lng: 9.4764,
  },
  {
    name: "Cedar Hill",
    lat: 32.581,
    lng: -96.9591,
  },
  {
    name: "Brive-la-Gaillarde",
    lat: 45.1583,
    lng: 1.5321,
  },
  {
    name: "Carrollton",
    lat: 33.5817,
    lng: -85.0837,
  },
  {
    name: "Enid",
    lat: 36.4061,
    lng: -97.8701,
  },
  {
    name: "Golpayegan",
    lat: 33.4536,
    lng: 50.2883,
  },
  {
    name: "Dila",
    lat: 6.4104,
    lng: 38.31,
  },
  {
    name: "Rancho Santa Margarita",
    lat: 33.6318,
    lng: -117.5989,
  },
  {
    name: "Pakenham",
    lat: -38.0712,
    lng: 145.4878,
  },
  {
    name: "Lousada",
    lat: 41.2833,
    lng: -8.2833,
  },
  {
    name: "Charleville-Mezieres",
    lat: 49.7719,
    lng: 4.7161,
  },
  {
    name: "Poti",
    lat: 42.15,
    lng: 41.6667,
  },
  {
    name: "Luwuk",
    lat: -0.9396,
    lng: 122.79,
  },
  {
    name: "Washington Township",
    lat: 39.747,
    lng: -75.0724,
  },
  {
    name: "Herzogenrath",
    lat: 50.8667,
    lng: 6.1,
  },
  {
    name: "Vyshniy Volochek",
    lat: 57.5913,
    lng: 34.5645,
  },
  {
    name: "East Honolulu",
    lat: 21.2975,
    lng: -157.7211,
  },
  {
    name: "Al Madrah Sama'il",
    lat: 23.3032,
    lng: 57.9782,
  },
  {
    name: "Al Majma`ah",
    lat: 25.9039,
    lng: 45.3456,
  },
  {
    name: "Beavercreek",
    lat: 39.731,
    lng: -84.0624,
  },
  {
    name: "Saint-Herblain",
    lat: 47.2122,
    lng: -1.6497,
  },
  {
    name: "Niagara Falls",
    lat: 43.0921,
    lng: -79.0147,
  },
  {
    name: "Snizhne",
    lat: 48.0167,
    lng: 38.7667,
  },
  {
    name: "Amahai",
    lat: -3.3281,
    lng: 128.9405,
  },
  {
    name: "`Amuda",
    lat: 37.1042,
    lng: 40.93,
  },
  {
    name: "Saint-Priest",
    lat: 45.6972,
    lng: 4.9447,
  },
  {
    name: "San Lorenzo",
    lat: -28.12,
    lng: -58.77,
  },
  {
    name: "East Providence",
    lat: 41.8065,
    lng: -71.3565,
  },
  {
    name: "Kamiyoshida",
    lat: 35.4875,
    lng: 138.8081,
  },
  {
    name: "Kafue",
    lat: -15.78,
    lng: 28.18,
  },
  {
    name: "Kutno",
    lat: 52.2333,
    lng: 19.3667,
  },
  {
    name: "Livny",
    lat: 52.4253,
    lng: 37.6083,
  },
  {
    name: "Azna",
    lat: 33.4539,
    lng: 49.455,
  },
  {
    name: "Chesterfield",
    lat: 38.6588,
    lng: -90.5804,
  },
  {
    name: "Irati",
    lat: -25.4672,
    lng: -50.6511,
  },
  {
    name: "Capao Bonito",
    lat: -24.0058,
    lng: -48.3494,
  },
  {
    name: "Ban Plai Bua Phatthana",
    lat: 13.9032,
    lng: 100.3989,
  },
  {
    name: "Santa Ana Chiautempan",
    lat: 19.3167,
    lng: -98.1833,
  },
  {
    name: "Tamagawa",
    lat: 33.6317,
    lng: 130.7997,
  },
  {
    name: "Lohja",
    lat: 60.25,
    lng: 24.0667,
  },
  {
    name: "Qingyuan",
    lat: 24.5004,
    lng: 108.6667,
  },
  {
    name: "Kasaoka",
    lat: 34.5072,
    lng: 133.5072,
  },
  {
    name: "Sayanogorsk",
    lat: 53.1,
    lng: 91.4,
  },
  {
    name: "Sanski Most",
    lat: 44.7667,
    lng: 16.6667,
  },
  {
    name: "Bothell",
    lat: 47.7735,
    lng: -122.2044,
  },
  {
    name: "Jobabo",
    lat: 20.9078,
    lng: -77.2831,
  },
  {
    name: "Villa Constitucion",
    lat: -33.2333,
    lng: -60.3333,
  },
  {
    name: "Tangdukou",
    lat: 27,
    lng: 111.2001,
  },
  {
    name: "Kingisepp",
    lat: 59.3667,
    lng: 28.6,
  },
  {
    name: "Talghar",
    lat: 43.3,
    lng: 77.2333,
  },
  {
    name: "Nakai",
    lat: 33.5756,
    lng: 133.6414,
  },
  {
    name: "Fellbach",
    lat: 48.8086,
    lng: 9.2758,
  },
  {
    name: "Blois",
    lat: 47.5939,
    lng: 1.3281,
  },
  {
    name: "Yabrud",
    lat: 33.9672,
    lng: 36.6572,
  },
  {
    name: "Glenview",
    lat: 42.0825,
    lng: -87.8216,
  },
  {
    name: "Ban Bang Mae Nang",
    lat: 13.8815,
    lng: 100.3759,
  },
  {
    name: "Tursunzoda",
    lat: 38.5108,
    lng: 68.2303,
  },
  {
    name: "Saint-Malo",
    lat: 48.6481,
    lng: -2.0075,
  },
  {
    name: "Oberursel",
    lat: 50.2028,
    lng: 8.5769,
  },
  {
    name: "Mentor",
    lat: 41.6895,
    lng: -81.3361,
  },
  {
    name: "Antalaha",
    lat: -14.8833,
    lng: 50.2833,
  },
  {
    name: "Landau",
    lat: 49.1994,
    lng: 8.1231,
  },
  {
    name: "Jablonec nad Nisou",
    lat: 50.7278,
    lng: 15.17,
  },
  {
    name: "Keller",
    lat: 32.9337,
    lng: -97.2255,
  },
  {
    name: "West Orange",
    lat: 40.7893,
    lng: -74.2627,
  },
  {
    name: "Shima",
    lat: 34.3283,
    lng: 136.8306,
  },
  {
    name: "Takashima",
    lat: 35.3528,
    lng: 136.0356,
  },
  {
    name: "Zarinsk",
    lat: 53.7,
    lng: 84.9167,
  },
  {
    name: "Huatan",
    lat: 24.0316,
    lng: 120.558,
  },
  {
    name: "Schwerte",
    lat: 51.4458,
    lng: 7.5653,
  },
  {
    name: "Aubagne",
    lat: 43.2908,
    lng: 5.5708,
  },
  {
    name: "Poso",
    lat: -1.3896,
    lng: 120.76,
  },
  {
    name: "Tres Arroyos",
    lat: -38.3667,
    lng: -60.2667,
  },
  {
    name: "Nysa",
    lat: 50.4738,
    lng: 17.3344,
  },
  {
    name: "Kurayoshi",
    lat: 35.43,
    lng: 133.8256,
  },
  {
    name: "Calimaya",
    lat: 19.1608,
    lng: -99.6172,
  },
  {
    name: "Neunkirchen",
    lat: 49.3448,
    lng: 7.1799,
  },
  {
    name: "McLean",
    lat: 38.9436,
    lng: -77.1943,
  },
  {
    name: "Danville",
    lat: 40.1423,
    lng: -87.6114,
  },
  {
    name: "Spring Hill",
    lat: 35.7438,
    lng: -86.9116,
  },
  {
    name: "Al Qusayr",
    lat: 34.5089,
    lng: 36.5797,
  },
  {
    name: "Roseville",
    lat: 42.5074,
    lng: -82.9369,
  },
  {
    name: "Filderstadt",
    lat: 48.6667,
    lng: 9.2167,
  },
  {
    name: "Fastiv",
    lat: 50.0747,
    lng: 29.9181,
  },
  {
    name: "Tocoa",
    lat: 15.6833,
    lng: -86,
  },
  {
    name: "Agrinio",
    lat: 38.6167,
    lng: 21.4,
  },
  {
    name: "Lukavac",
    lat: 44.5333,
    lng: 18.5333,
  },
  {
    name: "T'aebaek",
    lat: 37.1731,
    lng: 128.9861,
  },
  {
    name: "Dulmen",
    lat: 51.8308,
    lng: 7.2783,
  },
  {
    name: "Ban Saen Suk",
    lat: 13.2882,
    lng: 100.9144,
  },
  {
    name: "Lubny",
    lat: 50.0186,
    lng: 32.9869,
  },
  {
    name: "Carcassonne",
    lat: 43.21,
    lng: 2.35,
  },
  {
    name: "San Francisco de los Romo",
    lat: 22.0833,
    lng: -102.2667,
  },
  {
    name: "Berezovskiy",
    lat: 55.6667,
    lng: 86.25,
  },
  {
    name: "Elmhurst",
    lat: 41.8973,
    lng: -87.9432,
  },
  {
    name: "Hof",
    lat: 50.3167,
    lng: 11.9167,
  },
  {
    name: "Kariya",
    lat: 34.7889,
    lng: 134.3724,
  },
  {
    name: "Cabreuva",
    lat: -23.3075,
    lng: -47.1331,
  },
  {
    name: "New Philadelphia",
    lat: 40.486,
    lng: -81.4402,
  },
  {
    name: "Melle",
    lat: 52.2031,
    lng: 8.3361,
  },
  {
    name: "Santa Cruz do Rio Pardo",
    lat: -22.8989,
    lng: -49.6328,
  },
  {
    name: "Sandusky",
    lat: 41.4437,
    lng: -82.7149,
  },
  {
    name: "Hokota",
    lat: 36.1586,
    lng: 140.5164,
  },
  {
    name: "Hyvinkaa",
    lat: 60.6306,
    lng: 24.8597,
  },
  {
    name: "Cornwall",
    lat: 45.0275,
    lng: -74.74,
  },
  {
    name: "Perinton",
    lat: 43.0781,
    lng: -77.4283,
  },
  {
    name: "Euclid",
    lat: 41.5904,
    lng: -81.5188,
  },
  {
    name: "Gryazi",
    lat: 52.5,
    lng: 39.9333,
  },
  {
    name: "Shimeo",
    lat: 33.5914,
    lng: 130.4797,
  },
  {
    name: "Kingman",
    lat: 35.217,
    lng: -114.0105,
  },
  {
    name: "Galveston",
    lat: 29.2487,
    lng: -94.891,
  },
  {
    name: "Dendermonde",
    lat: 51.0167,
    lng: 4.1,
  },
  {
    name: "Kilmarnock",
    lat: 55.6111,
    lng: -4.4957,
  },
  {
    name: "Chalons-en-Champagne",
    lat: 48.9575,
    lng: 4.365,
  },
  {
    name: "Berekum",
    lat: 7.4504,
    lng: -2.59,
  },
  {
    name: "Rio Tercero",
    lat: -32.1768,
    lng: -64.113,
  },
  {
    name: "Montecristi",
    lat: -1.05,
    lng: -80.6667,
  },
  {
    name: "Torzhok",
    lat: 57.0333,
    lng: 34.9667,
  },
  {
    name: "Gotha",
    lat: 50.9489,
    lng: 10.7183,
  },
  {
    name: "Tingo Maria",
    lat: -9.3015,
    lng: -76.0361,
  },
  {
    name: "Jammalamadugu",
    lat: 14.85,
    lng: 78.38,
  },
  {
    name: "Salina",
    lat: 38.8137,
    lng: -97.6143,
  },
  {
    name: "Farmington",
    lat: 37.7821,
    lng: -90.4288,
  },
  {
    name: "Ciechanow",
    lat: 52.8817,
    lng: 20.6106,
  },
  {
    name: "Bunde",
    lat: 52.2,
    lng: 8.6,
  },
  {
    name: "Mlada Boleslav",
    lat: 50.4125,
    lng: 14.9064,
  },
  {
    name: "Hilo",
    lat: 19.6886,
    lng: -155.0864,
  },
  {
    name: "Weatherford",
    lat: 32.7536,
    lng: -97.7723,
  },
  {
    name: "Middletown",
    lat: 41.5476,
    lng: -72.6549,
  },
  {
    name: "Mairinque",
    lat: -23.5464,
    lng: -47.1836,
  },
  {
    name: "Roseburg",
    lat: 43.2232,
    lng: -123.3518,
  },
  {
    name: "Biloxi",
    lat: 30.4422,
    lng: -88.9512,
  },
  {
    name: "Wittenberg",
    lat: 51.8671,
    lng: 12.6484,
  },
  {
    name: "Roskilde",
    lat: 55.65,
    lng: 12.0833,
  },
  {
    name: "Leavenworth",
    lat: 39.3239,
    lng: -94.924,
  },
  {
    name: "Salon-de-Provence",
    lat: 43.6406,
    lng: 5.0972,
  },
  {
    name: "Hokuto",
    lat: 41.8242,
    lng: 140.6531,
  },
  {
    name: "Bajil",
    lat: 15.0583,
    lng: 43.285,
  },
  {
    name: "Manono",
    lat: -7.2947,
    lng: 27.4545,
  },
  {
    name: "Pearl City",
    lat: 21.4031,
    lng: -157.9566,
  },
  {
    name: "Pontal",
    lat: -21.0225,
    lng: -48.0372,
  },
  {
    name: "Fort Pierce",
    lat: 27.4256,
    lng: -80.3431,
  },
  {
    name: "Weinheim",
    lat: 49.5561,
    lng: 8.6697,
  },
  {
    name: "Winter Garden",
    lat: 28.5421,
    lng: -81.5966,
  },
  {
    name: "Oro Valley",
    lat: 32.4208,
    lng: -110.9768,
  },
  {
    name: "Ourem",
    lat: 39.65,
    lng: -8.5833,
  },
  {
    name: "Erkrath",
    lat: 51.2239,
    lng: 6.9147,
  },
  {
    name: "Morgan Hill",
    lat: 37.1326,
    lng: -121.6417,
  },
  {
    name: "Ciudad Constitucion",
    lat: 25.0322,
    lng: -111.6703,
  },
  {
    name: "Haymana",
    lat: 39.4311,
    lng: 32.4956,
  },
  {
    name: "Pinehurst",
    lat: 35.1922,
    lng: -79.4684,
  },
  {
    name: "Chippenham",
    lat: 51.4585,
    lng: -2.1158,
  },
  {
    name: "Rodgau",
    lat: 50.0256,
    lng: 8.8841,
  },
  {
    name: "Winchester",
    lat: 51.0632,
    lng: -1.308,
  },
  {
    name: "Danville",
    lat: 36.5831,
    lng: -79.4087,
  },
  {
    name: "Rockwall",
    lat: 32.9169,
    lng: -96.4377,
  },
  {
    name: "Dracena",
    lat: -21.4825,
    lng: -51.5328,
  },
  {
    name: "Salvador",
    lat: 20.2094,
    lng: -75.2231,
  },
  {
    name: "Stouffville",
    lat: 43.9667,
    lng: -79.25,
  },
  {
    name: "Potomac",
    lat: 39.0141,
    lng: -77.1943,
  },
  {
    name: "Coachella",
    lat: 33.6905,
    lng: -116.143,
  },
  {
    name: "Olhao",
    lat: 37.0278,
    lng: -7.8389,
  },
  {
    name: "Salcedo",
    lat: 19.383,
    lng: -70.4167,
  },
  {
    name: "Tateyama",
    lat: 34.9967,
    lng: 139.87,
  },
  {
    name: "Les Sables-d'Olonne",
    lat: 46.4972,
    lng: -1.7833,
  },
  {
    name: "Sugito",
    lat: 36.0256,
    lng: 139.7367,
  },
  {
    name: "Rameswaram",
    lat: 9.28,
    lng: 79.3,
  },
  {
    name: "Albstadt",
    lat: 48.2119,
    lng: 9.0239,
  },
  {
    name: "Inabe",
    lat: 35.1158,
    lng: 136.5614,
  },
  {
    name: "Cuautepec de Hinojosa",
    lat: 20.15,
    lng: -98.4333,
  },
  {
    name: "Wake Forest",
    lat: 35.9629,
    lng: -78.5141,
  },
  {
    name: "Saint-Germain-en-Laye",
    lat: 48.8989,
    lng: 2.0938,
  },
  {
    name: "Bruhl",
    lat: 50.8333,
    lng: 6.9,
  },
  {
    name: "El Dorado Hills",
    lat: 38.675,
    lng: -121.049,
  },
  {
    name: "Beaufort West",
    lat: -32.35,
    lng: 22.5833,
  },
  {
    name: "Biella",
    lat: 45.5664,
    lng: 8.0533,
  },
  {
    name: "Rada`",
    lat: 14.4295,
    lng: 44.8341,
  },
  {
    name: "Aliwal North",
    lat: -30.7,
    lng: 26.7,
  },
  {
    name: "Chateauroux",
    lat: 46.8103,
    lng: 1.6911,
  },
  {
    name: "Wallsend",
    lat: 54.991,
    lng: -1.534,
  },
  {
    name: "Olbia",
    lat: 40.9143,
    lng: 9.5151,
  },
  {
    name: "Hagi",
    lat: 34.4078,
    lng: 131.3989,
  },
  {
    name: "Cerquilho Velho",
    lat: -23.165,
    lng: -47.7436,
  },
  {
    name: "Kamen'-na-Obi",
    lat: 53.7919,
    lng: 81.3486,
  },
  {
    name: "Tupelo",
    lat: 34.2692,
    lng: -88.7318,
  },
  {
    name: "Haugesund",
    lat: 59.4164,
    lng: 5.27,
  },
  {
    name: "Carnot",
    lat: 4.9333,
    lng: 15.8667,
  },
  {
    name: "Birak",
    lat: 27.5333,
    lng: 14.2834,
  },
  {
    name: "Pinamar",
    lat: -37.1,
    lng: -56.85,
  },
  {
    name: "Georgina",
    lat: 44.3,
    lng: -79.4333,
  },
  {
    name: "Imbituba",
    lat: -28.2296,
    lng: -48.66,
  },
  {
    name: "Masuda",
    lat: 34.675,
    lng: 131.8428,
  },
  {
    name: "Coatbridge",
    lat: 55.8625,
    lng: -4.0266,
  },
  {
    name: "West Seneca",
    lat: 42.8374,
    lng: -78.7509,
  },
  {
    name: "Svitlovods'k",
    lat: 49.0833,
    lng: 33.25,
  },
  {
    name: "Victoriaville",
    lat: 46.05,
    lng: -71.9667,
  },
  {
    name: "Ruzayevka",
    lat: 54.0667,
    lng: 44.95,
  },
  {
    name: "Actopan",
    lat: 19.5036,
    lng: -96.6192,
  },
  {
    name: "South Brunswick",
    lat: 40.384,
    lng: -74.5256,
  },
  {
    name: "Attleboro",
    lat: 41.9311,
    lng: -71.295,
  },
  {
    name: "Tank",
    lat: 32.2167,
    lng: 70.3833,
  },
  {
    name: "Pine Bluff",
    lat: 34.2116,
    lng: -92.0178,
  },
  {
    name: "Evesham",
    lat: 39.8605,
    lng: -74.8947,
  },
  {
    name: "Dimitrovgrad",
    lat: 42.0611,
    lng: 25.5933,
  },
  {
    name: "Marion",
    lat: 40.5933,
    lng: -83.1237,
  },
  {
    name: "`Afula",
    lat: 32.6078,
    lng: 35.2897,
  },
  {
    name: "Aksay",
    lat: 47.2667,
    lng: 39.8667,
  },
  {
    name: "Winneba",
    lat: 5.35,
    lng: -0.6333,
  },
  {
    name: "Middletown Township",
    lat: 40.179,
    lng: -74.9059,
  },
  {
    name: "Zhovti Vody",
    lat: 48.35,
    lng: 33.5167,
  },
  {
    name: "Sete",
    lat: 43.4053,
    lng: 3.6975,
  },
  {
    name: "Bruchsal",
    lat: 49.1333,
    lng: 8.6,
  },
  {
    name: "Grantham",
    lat: 52.918,
    lng: -0.638,
  },
  {
    name: "Buenos Aires",
    lat: 9.1497,
    lng: -83.3334,
  },
  {
    name: "Himi",
    lat: 36.85,
    lng: 136.9833,
  },
  {
    name: "Kimry",
    lat: 56.8667,
    lng: 37.35,
  },
  {
    name: "Shahhat",
    lat: 32.8281,
    lng: 21.8622,
  },
  {
    name: "Shchuchinsk",
    lat: 52.9333,
    lng: 70.2,
  },
  {
    name: "Parma",
    lat: 65.923,
    lng: 57.403,
  },
  {
    name: "Sidcup",
    lat: 51.4263,
    lng: 0.1024,
  },
  {
    name: "Yatagan",
    lat: 37.3425,
    lng: 28.1393,
  },
  {
    name: "Kaufbeuren",
    lat: 47.88,
    lng: 10.6225,
  },
  {
    name: "Pederneiras",
    lat: -22.3517,
    lng: -48.775,
  },
  {
    name: "Rasskazovo",
    lat: 52.6667,
    lng: 41.8833,
  },
  {
    name: "Nadym",
    lat: 65.5333,
    lng: 72.5167,
  },
  {
    name: "Drama",
    lat: 41.1514,
    lng: 24.1392,
  },
  {
    name: "Vallenar",
    lat: -28.57,
    lng: -70.76,
  },
  {
    name: "Dunakeszi",
    lat: 47.6297,
    lng: 19.1381,
  },
  {
    name: "Pemangkat",
    lat: 1.1727,
    lng: 108.9808,
  },
  {
    name: "Volkhov",
    lat: 59.9167,
    lng: 32.35,
  },
  {
    name: "Mount Pleasant",
    lat: 41.112,
    lng: -73.8122,
  },
  {
    name: "Lufkin",
    lat: 31.3217,
    lng: -94.7277,
  },
  {
    name: "Darcheh",
    lat: 32.6153,
    lng: 51.5556,
  },
  {
    name: "Middleton",
    lat: 53.555,
    lng: -2.187,
  },
  {
    name: "Falkensee",
    lat: 52.5583,
    lng: 13.0917,
  },
  {
    name: "Paraguacu Paulista",
    lat: -22.4197,
    lng: -50.5797,
  },
  {
    name: "Bexhill",
    lat: 50.8424,
    lng: 0.4676,
  },
  {
    name: "Shinshiro",
    lat: 34.9,
    lng: 137.5,
  },
  {
    name: "Chusovoy",
    lat: 58.2833,
    lng: 57.8167,
  },
  {
    name: "Oranienburg",
    lat: 52.7544,
    lng: 13.2369,
  },
  {
    name: "Jisr ash Shughur",
    lat: 35.8,
    lng: 36.3167,
  },
  {
    name: "Wallingford",
    lat: 41.4587,
    lng: -72.8039,
  },
  {
    name: "Manitowoc",
    lat: 44.0991,
    lng: -87.6811,
  },
  {
    name: "Prostejov",
    lat: 49.4722,
    lng: 17.1106,
  },
  {
    name: "Nidadavole",
    lat: 16.92,
    lng: 81.67,
  },
  {
    name: "Sandefjord",
    lat: 59.1312,
    lng: 10.2166,
  },
  {
    name: "Taketoyo",
    lat: 34.8514,
    lng: 136.915,
  },
  {
    name: "Bridgewater",
    lat: 40.5934,
    lng: -74.6076,
  },
  {
    name: "Selma",
    lat: 36.5715,
    lng: -119.6143,
  },
  {
    name: "Strongsville",
    lat: 41.3128,
    lng: -81.8313,
  },
  {
    name: "Louveira",
    lat: -23.0864,
    lng: -46.9506,
  },
  {
    name: "Seferhisar",
    lat: 38.1975,
    lng: 26.8388,
  },
  {
    name: "Garca",
    lat: -22.2153,
    lng: -49.6511,
  },
  {
    name: "Vernon",
    lat: 50.267,
    lng: -119.272,
  },
  {
    name: "Kaarst",
    lat: 51.2278,
    lng: 6.6273,
  },
  {
    name: "Tiberias",
    lat: 32.7897,
    lng: 35.5247,
  },
  {
    name: "Abovyan",
    lat: 40.2739,
    lng: 44.6256,
  },
  {
    name: "Danville",
    lat: 37.8121,
    lng: -121.9698,
  },
  {
    name: "Makinohara",
    lat: 34.74,
    lng: 138.2247,
  },
  {
    name: "Petatlan",
    lat: 17.5383,
    lng: -101.2739,
  },
  {
    name: "Bietigheim-Bissingen",
    lat: 48.9667,
    lng: 9.1333,
  },
  {
    name: "Otofuke",
    lat: 42.9942,
    lng: 143.1981,
  },
  {
    name: "Quincy",
    lat: 39.9335,
    lng: -91.3799,
  },
  {
    name: "Memmingen",
    lat: 47.9878,
    lng: 10.1811,
  },
  {
    name: "Enfield",
    lat: 41.9839,
    lng: -72.5548,
  },
  {
    name: "Lancaster",
    lat: 39.7249,
    lng: -82.6049,
  },
  {
    name: "Riverton",
    lat: 40.5177,
    lng: -111.9635,
  },
  {
    name: "The Colony",
    lat: 33.0925,
    lng: -96.8977,
  },
  {
    name: "Lake Ridge",
    lat: 38.6843,
    lng: -77.3059,
  },
  {
    name: "Neustadt am Rubenberge",
    lat: 52.5055,
    lng: 9.4636,
  },
  {
    name: "Urbandale",
    lat: 41.639,
    lng: -93.7813,
  },
  {
    name: "Lehrte",
    lat: 52.3725,
    lng: 9.9769,
  },
  {
    name: "Volksrust",
    lat: -27.3667,
    lng: 29.8833,
  },
  {
    name: "Plainfield",
    lat: 41.6206,
    lng: -88.2252,
  },
  {
    name: "Lombard",
    lat: 41.8742,
    lng: -88.0157,
  },
  {
    name: "Prescott",
    lat: 34.585,
    lng: -112.4475,
  },
  {
    name: "Dikili",
    lat: 39.071,
    lng: 26.8902,
  },
  {
    name: "Korogwe",
    lat: -5.1558,
    lng: 38.4503,
  },
  {
    name: "Krasnodon",
    lat: 48.3,
    lng: 39.7333,
  },
  {
    name: "Webster",
    lat: 43.2294,
    lng: -77.4454,
  },
  {
    name: "Eureka",
    lat: 40.7942,
    lng: -124.1568,
  },
  {
    name: "Addanki",
    lat: 15.811,
    lng: 79.9738,
  },
  {
    name: "Catacamas",
    lat: 14.8,
    lng: -85.9,
  },
  {
    name: "Kuybyshev",
    lat: 55.4503,
    lng: 78.3075,
  },
  {
    name: "Sayreville",
    lat: 40.4656,
    lng: -74.3237,
  },
  {
    name: "Saint-Eustache",
    lat: 45.57,
    lng: -73.9,
  },
  {
    name: "Altamonte Springs",
    lat: 28.6615,
    lng: -81.3953,
  },
  {
    name: "Yartsevo",
    lat: 55.0667,
    lng: 32.6833,
  },
  {
    name: "Del Rio",
    lat: 29.3708,
    lng: -100.88,
  },
  {
    name: "Kobayashi",
    lat: 31.9967,
    lng: 130.9728,
  },
  {
    name: "Voluntari",
    lat: 44.4925,
    lng: 26.1914,
  },
  {
    name: "Kastel Stari",
    lat: 43.5483,
    lng: 16.3383,
  },
  {
    name: "Shimabara",
    lat: 32.7756,
    lng: 130.3381,
  },
  {
    name: "Pantanal",
    lat: 18.5103,
    lng: -68.3694,
  },
  {
    name: "Ogimachi",
    lat: 33.2506,
    lng: 130.2017,
  },
  {
    name: "Comendador",
    lat: 18.876,
    lng: -71.707,
  },
  {
    name: "Kamen",
    lat: 51.5917,
    lng: 7.6653,
  },
  {
    name: "Natanz",
    lat: 33.5,
    lng: 51.9,
  },
  {
    name: "Pinhal",
    lat: -22.1908,
    lng: -46.7408,
  },
  {
    name: "Zongolica",
    lat: 18.6642,
    lng: -97.0011,
  },
  {
    name: "Bountiful",
    lat: 40.8722,
    lng: -111.8647,
  },
  {
    name: "Desert Hot Springs",
    lat: 33.9551,
    lng: -116.543,
  },
  {
    name: "Nabire",
    lat: -3.3515,
    lng: 135.5134,
  },
  {
    name: "Peachtree Corners",
    lat: 33.967,
    lng: -84.2319,
  },
  {
    name: "Haltom City",
    lat: 32.8176,
    lng: -97.2707,
  },
  {
    name: "Castro",
    lat: -24.7893,
    lng: -50.0123,
  },
  {
    name: "Baniyas",
    lat: 35.1822,
    lng: 35.9403,
  },
  {
    name: "Batouri",
    lat: 4.4333,
    lng: 14.3667,
  },
  {
    name: "Monroe",
    lat: 40.3191,
    lng: -74.4286,
  },
  {
    name: "Ad Dir`iyah",
    lat: 24.7333,
    lng: 46.5756,
  },
  {
    name: "Southington",
    lat: 41.605,
    lng: -72.8802,
  },
  {
    name: "Worksop",
    lat: 53.3042,
    lng: -1.1244,
  },
  {
    name: "Ormond Beach",
    lat: 29.296,
    lng: -81.1003,
  },
  {
    name: "Sambava",
    lat: -14.2662,
    lng: 50.1666,
  },
  {
    name: "Takab",
    lat: 36.4008,
    lng: 47.1131,
  },
  {
    name: "Erkelenz",
    lat: 51.08,
    lng: 6.3156,
  },
  {
    name: "Salto de Pirapora",
    lat: -23.6489,
    lng: -47.5728,
  },
  {
    name: "Basoko",
    lat: 1.2333,
    lng: 23.6,
  },
  {
    name: "Cutler Bay",
    lat: 25.5765,
    lng: -80.3356,
  },
  {
    name: "Of",
    lat: 40.945,
    lng: 40.2644,
  },
  {
    name: "Macenta",
    lat: 8.5504,
    lng: -9.48,
  },
  {
    name: "Chefchaouene",
    lat: 35.1714,
    lng: -5.2697,
  },
  {
    name: "Adrian",
    lat: 41.8994,
    lng: -84.0446,
  },
  {
    name: "Nuevo Mexico",
    lat: 20.75,
    lng: -103.433,
  },
  {
    name: "Lota",
    lat: -37.0944,
    lng: -73.1563,
  },
  {
    name: "Angouleme",
    lat: 45.65,
    lng: 0.16,
  },
  {
    name: "Otwock",
    lat: 52.1167,
    lng: 21.2667,
  },
  {
    name: "Goose Creek",
    lat: 32.9925,
    lng: -80.0054,
  },
  {
    name: "Et Taiyiba",
    lat: 32.2667,
    lng: 35,
  },
  {
    name: "Moorhead",
    lat: 46.8673,
    lng: -96.7461,
  },
  {
    name: "Westfield",
    lat: 40.0333,
    lng: -86.1532,
  },
  {
    name: "Santa Cruz",
    lat: 32.675,
    lng: -16.8309,
  },
  {
    name: "Cesme",
    lat: 38.32,
    lng: 26.3053,
  },
  {
    name: "Ponte de Lima",
    lat: 41.7667,
    lng: -8.5833,
  },
  {
    name: "Musina",
    lat: -22.3381,
    lng: 30.0417,
  },
  {
    name: "Birsk",
    lat: 55.4167,
    lng: 55.5333,
  },
  {
    name: "Prerov",
    lat: 49.4556,
    lng: 17.4511,
  },
  {
    name: "Quinte West",
    lat: 44.1833,
    lng: -77.5667,
  },
  {
    name: "Wismar",
    lat: 53.8925,
    lng: 11.465,
  },
  {
    name: "Presidente Epitacio",
    lat: -21.7633,
    lng: -52.1156,
  },
  {
    name: "Bahia Honda",
    lat: 22.9064,
    lng: -83.1639,
  },
  {
    name: "Istres",
    lat: 43.5151,
    lng: 4.9895,
  },
  {
    name: "Tamworth",
    lat: -31.0833,
    lng: 150.9167,
  },
  {
    name: "Pedro Celestino Negrete",
    lat: 24.726,
    lng: -102.984,
  },
  {
    name: "Zharkent",
    lat: 44.1667,
    lng: 80.0067,
  },
  {
    name: "Futtsu",
    lat: 35.3042,
    lng: 139.8569,
  },
  {
    name: "Canoinhas",
    lat: -26.1772,
    lng: -50.39,
  },
  {
    name: "Sawakin",
    lat: 19.1,
    lng: 37.3333,
  },
  {
    name: "Manchester",
    lat: 39.9651,
    lng: -74.3738,
  },
  {
    name: "Henrietta",
    lat: 43.0555,
    lng: -77.6413,
  },
  {
    name: "Esperanza",
    lat: -31.4167,
    lng: -60.9333,
  },
  {
    name: "Kemer",
    lat: 36.6,
    lng: 30.55,
  },
  {
    name: "Rantepao",
    lat: -2.969,
    lng: 119.9,
  },
  {
    name: "Brea",
    lat: 33.9254,
    lng: -117.8656,
  },
  {
    name: "Klamath Falls",
    lat: 42.2191,
    lng: -121.7754,
  },
  {
    name: "Al Wajh",
    lat: 26.2324,
    lng: 36.4636,
  },
  {
    name: "King's Lynn",
    lat: 52.7543,
    lng: 0.3976,
  },
  {
    name: "Siegburg",
    lat: 50.8014,
    lng: 7.2044,
  },
  {
    name: "San Lorenzo",
    lat: 13.3667,
    lng: -87.2667,
  },
  {
    name: "Ambatondrazaka",
    lat: -17.8329,
    lng: 48.4167,
  },
  {
    name: "Veroia",
    lat: 40.5203,
    lng: 22.2019,
  },
  {
    name: "Nadi",
    lat: -17.8,
    lng: 177.4167,
  },
  {
    name: "Bourg-en-Bresse",
    lat: 46.2056,
    lng: 5.2289,
  },
  {
    name: "Kol'chugino",
    lat: 56.2992,
    lng: 39.3831,
  },
  {
    name: "Jesus Maria",
    lat: 21.9667,
    lng: -102.35,
  },
  {
    name: "Lubao",
    lat: -5.3896,
    lng: 25.75,
  },
  {
    name: "Singhanakhon",
    lat: 7.2389,
    lng: 100.5506,
  },
  {
    name: "Bihac",
    lat: 44.8167,
    lng: 15.8667,
  },
  {
    name: "Obita",
    lat: 32.8253,
    lng: 129.875,
  },
  {
    name: "Billerica",
    lat: 42.5587,
    lng: -71.2673,
  },
  {
    name: "Yendi",
    lat: 9.4337,
    lng: -0.0167,
  },
  {
    name: "Gualeguay",
    lat: -33.15,
    lng: -59.3167,
  },
  {
    name: "Egg Harbor",
    lat: 39.3787,
    lng: -74.6102,
  },
  {
    name: "Nettetal",
    lat: 51.3167,
    lng: 6.2833,
  },
  {
    name: "Osinniki",
    lat: 53.6167,
    lng: 87.3333,
  },
  {
    name: "Lancaster",
    lat: 42.9099,
    lng: -78.6378,
  },
  {
    name: "Sieradz",
    lat: 51.6,
    lng: 18.75,
  },
  {
    name: "Yuzawa",
    lat: 39.1644,
    lng: 140.4958,
  },
  {
    name: "Gifhorn",
    lat: 52.4886,
    lng: 10.5464,
  },
  {
    name: "Centralia",
    lat: 46.7226,
    lng: -122.9696,
  },
  {
    name: "Gallatin",
    lat: 36.3782,
    lng: -86.4696,
  },
  {
    name: "Atenco",
    lat: 19.5167,
    lng: -98.9167,
  },
  {
    name: "Zvolen",
    lat: 48.5831,
    lng: 19.1331,
  },
  {
    name: "Samborondon",
    lat: -1.9611,
    lng: -79.7256,
  },
  {
    name: "Dreieich",
    lat: 50.0189,
    lng: 8.6961,
  },
  {
    name: "Stevens Point",
    lat: 44.5241,
    lng: -89.5508,
  },
  {
    name: "Nurmijarvi",
    lat: 60.4667,
    lng: 24.8083,
  },
  {
    name: "Orlandia",
    lat: -20.7203,
    lng: -47.8867,
  },
  {
    name: "Borken",
    lat: 51.8439,
    lng: 6.8583,
  },
  {
    name: "Brentwood",
    lat: 35.9918,
    lng: -86.7758,
  },
  {
    name: "Amberg",
    lat: 49.4444,
    lng: 11.8483,
  },
  {
    name: "Eisenach",
    lat: 50.9747,
    lng: 10.3244,
  },
  {
    name: "Nakano",
    lat: 36.7419,
    lng: 138.3694,
  },
  {
    name: "Temsia",
    lat: 30.3633,
    lng: -9.4144,
  },
  {
    name: "Burke",
    lat: 38.7773,
    lng: -77.2633,
  },
  {
    name: "Fianga",
    lat: 9.9153,
    lng: 15.1375,
  },
  {
    name: "Hwange",
    lat: -18.3647,
    lng: 26.5,
  },
  {
    name: "Sansanne-Mango",
    lat: 10.3556,
    lng: 0.4756,
  },
  {
    name: "Leigh",
    lat: 53.4975,
    lng: -2.515,
  },
  {
    name: "Macerata",
    lat: 43.3003,
    lng: 13.4533,
  },
  {
    name: "Vawkavysk",
    lat: 53.1667,
    lng: 24.4667,
  },
  {
    name: "Mariel",
    lat: 22.9936,
    lng: -82.7539,
  },
  {
    name: "Laatzen",
    lat: 52.3077,
    lng: 9.8133,
  },
  {
    name: "Qiryat Yam",
    lat: 32.8331,
    lng: 35.0664,
  },
  {
    name: "Edmonds",
    lat: 47.8115,
    lng: -122.3533,
  },
  {
    name: "Charlottetown",
    lat: 46.2403,
    lng: -63.1347,
  },
  {
    name: "Mikolow",
    lat: 50.171,
    lng: 18.9041,
  },
  {
    name: "Apache Junction",
    lat: 33.3985,
    lng: -111.5351,
  },
  {
    name: "Fairfield",
    lat: 39.3301,
    lng: -84.5409,
  },
  {
    name: "Bury Saint Edmunds",
    lat: 52.2474,
    lng: 0.7183,
  },
  {
    name: "Oakley",
    lat: 37.9929,
    lng: -121.6951,
  },
  {
    name: "Hutchinson",
    lat: 38.0671,
    lng: -97.9081,
  },
  {
    name: "Shebekino",
    lat: 50.4167,
    lng: 36.9,
  },
  {
    name: "Mascouche",
    lat: 45.75,
    lng: -73.6,
  },
  {
    name: "Shimo-tsuma",
    lat: 36.1844,
    lng: 139.9675,
  },
  {
    name: "Dayr Mawas",
    lat: 27.6414,
    lng: 30.8494,
  },
  {
    name: "West Vancouver",
    lat: 49.3667,
    lng: -123.1667,
  },
  {
    name: "Shepetivka",
    lat: 50.1833,
    lng: 27.0667,
  },
  {
    name: "Shu",
    lat: 43.5953,
    lng: 73.7448,
  },
  {
    name: "Cortlandt",
    lat: 41.2553,
    lng: -73.9019,
  },
  {
    name: "Alerce",
    lat: -41.3969,
    lng: -72.9037,
  },
  {
    name: "Greenwood",
    lat: 34.1945,
    lng: -82.1542,
  },
  {
    name: "Tome",
    lat: -36.6171,
    lng: -72.9575,
  },
  {
    name: "Salaberry-de-Valleyfield",
    lat: 45.25,
    lng: -74.13,
  },
  {
    name: "Balykchy",
    lat: 42.4667,
    lng: 76.1833,
  },
  {
    name: "Heinsberg",
    lat: 51.0631,
    lng: 6.0964,
  },
  {
    name: "Itapolis",
    lat: -21.5958,
    lng: -48.8128,
  },
  {
    name: "Richmond",
    lat: 39.8318,
    lng: -84.8905,
  },
  {
    name: "Puyallup",
    lat: 47.1794,
    lng: -122.2902,
  },
  {
    name: "Linden",
    lat: 40.6251,
    lng: -74.2381,
  },
  {
    name: "Nanbei",
    lat: 35.3206,
    lng: 139.1,
  },
  {
    name: "Kitaibaraki",
    lat: 36.8019,
    lng: 140.7511,
  },
  {
    name: "Qazyan",
    lat: 39.2015,
    lng: 46.415,
  },
  {
    name: "Rajgir",
    lat: 25.03,
    lng: 85.42,
  },
  {
    name: "Rouyn-Noranda",
    lat: 48.2333,
    lng: -79.0167,
  },
  {
    name: "Koniz",
    lat: 46.925,
    lng: 7.4153,
  },
  {
    name: "Homburg",
    lat: 49.3167,
    lng: 7.3333,
  },
  {
    name: "Beitbridge",
    lat: -22.2167,
    lng: 30,
  },
  {
    name: "Ansbach",
    lat: 49.3,
    lng: 10.5833,
  },
  {
    name: "Germering",
    lat: 48.1333,
    lng: 11.3667,
  },
  {
    name: "Gay",
    lat: 51.4747,
    lng: 58.4543,
  },
  {
    name: "Urbana",
    lat: 40.1106,
    lng: -88.1972,
  },
  {
    name: "Aurich",
    lat: 53.4714,
    lng: 7.4836,
  },
  {
    name: "Qapshaghay",
    lat: 43.8844,
    lng: 77.0687,
  },
  {
    name: "Nordhausen",
    lat: 51.505,
    lng: 10.7911,
  },
  {
    name: "Beverly",
    lat: 42.5681,
    lng: -70.8627,
  },
  {
    name: "Safonovo",
    lat: 55.1,
    lng: 33.25,
  },
  {
    name: "Clovis",
    lat: 34.4376,
    lng: -103.1923,
  },
  {
    name: "Monchegorsk",
    lat: 67.9394,
    lng: 32.9156,
  },
  {
    name: "Soran",
    lat: 49.7908,
    lng: 72.8374,
  },
  {
    name: "Statesboro",
    lat: 32.4376,
    lng: -81.775,
  },
  {
    name: "Hobbs",
    lat: 32.7282,
    lng: -103.16,
  },
  {
    name: "Sarab",
    lat: 37.9408,
    lng: 47.5367,
  },
  {
    name: "Su-ngai Kolok",
    lat: 6.0297,
    lng: 101.9668,
  },
  {
    name: "Korenovsk",
    lat: 45.4667,
    lng: 39.45,
  },
  {
    name: "Qiryat Mozqin",
    lat: 32.8381,
    lng: 35.0794,
  },
  {
    name: "McMinnville",
    lat: 45.211,
    lng: -123.1918,
  },
  {
    name: "Castres",
    lat: 43.6,
    lng: 2.25,
  },
  {
    name: "Ales",
    lat: 44.1281,
    lng: 4.0817,
  },
  {
    name: "Schertz",
    lat: 29.5649,
    lng: -98.2537,
  },
  {
    name: "Tequila",
    lat: 20.8794,
    lng: -103.8356,
  },
  {
    name: "Moatize",
    lat: -16.1167,
    lng: 33.75,
  },
  {
    name: "Alta Floresta",
    lat: -9.9,
    lng: -55.91,
  },
  {
    name: "Greenock",
    lat: 55.95,
    lng: -4.765,
  },
  {
    name: "Chapadinha",
    lat: -3.7417,
    lng: -43.3603,
  },
  {
    name: "Nurtingen",
    lat: 48.6267,
    lng: 9.3353,
  },
  {
    name: "Spassk-Dal'niy",
    lat: 44.6,
    lng: 132.8167,
  },
  {
    name: "Tulun",
    lat: 54.5667,
    lng: 100.5667,
  },
  {
    name: "North Brunswick",
    lat: 40.4505,
    lng: -74.4798,
  },
  {
    name: "Channelview",
    lat: 29.7914,
    lng: -95.1145,
  },
  {
    name: "Rajaori",
    lat: 33.38,
    lng: 74.3,
  },
  {
    name: "Wunstorf",
    lat: 52.4238,
    lng: 9.4359,
  },
  {
    name: "Muban Phimon Rat",
    lat: 13.9189,
    lng: 100.3922,
  },
  {
    name: "Jardinopolis",
    lat: -21.0178,
    lng: -47.7639,
  },
  {
    name: "Bayt al Faqih",
    lat: 14.5167,
    lng: 43.3167,
  },
  {
    name: "San",
    lat: 13.3004,
    lng: -4.9,
  },
  {
    name: "Oviedo",
    lat: 28.658,
    lng: -81.1872,
  },
  {
    name: "Odenton",
    lat: 39.0661,
    lng: -76.6939,
  },
  {
    name: "Kwidzyn",
    lat: 53.7358,
    lng: 18.9308,
  },
  {
    name: "Satka",
    lat: 55.05,
    lng: 59.05,
  },
  {
    name: "Grove City",
    lat: 39.8659,
    lng: -83.0694,
  },
  {
    name: "Schwabach",
    lat: 49.3292,
    lng: 11.0208,
  },
  {
    name: "Mozdok",
    lat: 43.75,
    lng: 44.65,
  },
  {
    name: "Timmins",
    lat: 48.4667,
    lng: -81.3333,
  },
  {
    name: "Konigswinter",
    lat: 50.6833,
    lng: 7.1833,
  },
  {
    name: "Wentzville",
    lat: 38.8152,
    lng: -90.8667,
  },
  {
    name: "Ita",
    lat: -25.5096,
    lng: -57.36,
  },
  {
    name: "Myski",
    lat: 53.7,
    lng: 87.8167,
  },
  {
    name: "La Quinta",
    lat: 33.6536,
    lng: -116.2785,
  },
  {
    name: "Strezhevoy",
    lat: 60.7333,
    lng: 77.5833,
  },
  {
    name: "Podilsk",
    lat: 47.7419,
    lng: 29.535,
  },
  {
    name: "Freiberg",
    lat: 50.9119,
    lng: 13.3428,
  },
  {
    name: "Sarande",
    lat: 39.8833,
    lng: 20.0167,
  },
  {
    name: "Ust'-Kut",
    lat: 56.8,
    lng: 105.8333,
  },
  {
    name: "North Fort Myers",
    lat: 26.7243,
    lng: -81.8491,
  },
  {
    name: "Swinoujscie",
    lat: 53.9167,
    lng: 14.25,
  },
  {
    name: "Yakacik",
    lat: 36.75,
    lng: 36.2167,
  },
  {
    name: "Ihnasya al Madinah",
    lat: 29.0856,
    lng: 30.9344,
  },
  {
    name: "Lokeren",
    lat: 51.1,
    lng: 3.9833,
  },
  {
    name: "Berkeley",
    lat: 39.9156,
    lng: -74.1923,
  },
  {
    name: "Weslaco",
    lat: 26.1648,
    lng: -97.9898,
  },
  {
    name: "Sorel-Tracy",
    lat: 46.0333,
    lng: -73.1167,
  },
  {
    name: "Karabulak",
    lat: 43.3,
    lng: 44.9,
  },
  {
    name: "Naini Tal",
    lat: 29.3919,
    lng: 79.4542,
  },
  {
    name: "Ayagoz",
    lat: 47.9645,
    lng: 80.4344,
  },
  {
    name: "Zanesville",
    lat: 39.9565,
    lng: -82.0132,
  },
  {
    name: "Newnan",
    lat: 33.3766,
    lng: -84.7761,
  },
  {
    name: "Shakopee",
    lat: 44.7744,
    lng: -93.4764,
  },
  {
    name: "Nowa Sol",
    lat: 51.8,
    lng: 15.7167,
  },
  {
    name: "Brighton",
    lat: 39.9716,
    lng: -104.7964,
  },
  {
    name: "Rancho Palos Verdes",
    lat: 33.7554,
    lng: -118.3637,
  },
  {
    name: "Thionville",
    lat: 49.3589,
    lng: 6.1692,
  },
  {
    name: "Kirchheim unter Teck",
    lat: 48.6483,
    lng: 9.4511,
  },
  {
    name: "Penn Hills",
    lat: 40.4762,
    lng: -79.8255,
  },
  {
    name: "Mount Laurel",
    lat: 39.9484,
    lng: -74.9047,
  },
  {
    name: "Catonsville",
    lat: 39.2646,
    lng: -76.7424,
  },
  {
    name: "Verkhnyaya Salda",
    lat: 58.05,
    lng: 60.55,
  },
  {
    name: "Erzin",
    lat: 36.9539,
    lng: 36.2022,
  },
  {
    name: "New Tecumseth",
    lat: 44.0833,
    lng: -79.75,
  },
  {
    name: "Leinfelden-Echterdingen",
    lat: 48.6928,
    lng: 9.1428,
  },
  {
    name: "Coppell",
    lat: 32.9638,
    lng: -96.9905,
  },
  {
    name: "Sovetsk",
    lat: 55.0833,
    lng: 21.8833,
  },
  {
    name: "Itoigawa",
    lat: 37.0333,
    lng: 137.85,
  },
  {
    name: "Moline",
    lat: 41.4821,
    lng: -90.4921,
  },
  {
    name: "El Tocuyo",
    lat: 9.7822,
    lng: -69.7931,
  },
  {
    name: "Aquidauana",
    lat: -20.4711,
    lng: -55.7872,
  },
  {
    name: "Chaves",
    lat: 41.7399,
    lng: -7.4707,
  },
  {
    name: "Ozu",
    lat: 33.5064,
    lng: 132.5447,
  },
  {
    name: "Antequera",
    lat: 37.0184,
    lng: -4.5597,
  },
  {
    name: "Delaware",
    lat: 40.2866,
    lng: -83.0747,
  },
  {
    name: "Kovvur",
    lat: 17.0167,
    lng: 81.7333,
  },
  {
    name: "Gap",
    lat: 44.5594,
    lng: 6.0786,
  },
  {
    name: "Temryuk",
    lat: 45.2667,
    lng: 37.3833,
  },
  {
    name: "Westfield",
    lat: 42.1382,
    lng: -72.7561,
  },
  {
    name: "Jarvenpaa",
    lat: 60.4722,
    lng: 25.0889,
  },
  {
    name: "Vyshneve",
    lat: 50.3833,
    lng: 30.3667,
  },
  {
    name: "Bensheim",
    lat: 49.6811,
    lng: 8.6228,
  },
  {
    name: "Hempfield",
    lat: 40.2847,
    lng: -79.5841,
  },
  {
    name: "Boleslawiec",
    lat: 51.2667,
    lng: 15.5667,
  },
  {
    name: "Shelton",
    lat: 41.306,
    lng: -73.1383,
  },
  {
    name: "Baft",
    lat: 29.2331,
    lng: 56.6022,
  },
  {
    name: "Westerville",
    lat: 40.1241,
    lng: -82.9209,
  },
  {
    name: "Lemgo",
    lat: 52.0277,
    lng: 8.9043,
  },
  {
    name: "Kasumigaura",
    lat: 36.1519,
    lng: 140.2372,
  },
  {
    name: "Linton Hall",
    lat: 38.7551,
    lng: -77.575,
  },
  {
    name: "Manassas",
    lat: 38.7479,
    lng: -77.4839,
  },
  {
    name: "Eberswalde",
    lat: 52.8331,
    lng: 13.8331,
  },
  {
    name: "Tonbridge",
    lat: 51.1987,
    lng: 0.2764,
  },
  {
    name: "Upper Hutt",
    lat: -41.1333,
    lng: 175.05,
  },
  {
    name: "Salinopolis",
    lat: -0.6136,
    lng: -47.3561,
  },
  {
    name: "Pirmasens",
    lat: 49.2,
    lng: 7.6,
  },
  {
    name: "Kearny",
    lat: 40.7528,
    lng: -74.1202,
  },
  {
    name: "Chambas",
    lat: 22.1967,
    lng: -78.9133,
  },
  {
    name: "Ostfildern",
    lat: 48.7228,
    lng: 9.2631,
  },
  {
    name: "Siguatepeque",
    lat: 14.6167,
    lng: -87.8333,
  },
  {
    name: "Bagua Grande",
    lat: -5.7572,
    lng: -78.4453,
  },
  {
    name: "South Valley",
    lat: 35.0092,
    lng: -106.6819,
  },
  {
    name: "Pyt'-Yakh",
    lat: 60.75,
    lng: 72.7833,
  },
  {
    name: "Novozybkov",
    lat: 52.5333,
    lng: 31.9333,
  },
  {
    name: "Los Banos",
    lat: 37.063,
    lng: -120.8406,
  },
  {
    name: "Richmond",
    lat: 37.7306,
    lng: -84.2926,
  },
  {
    name: "Compiegne",
    lat: 49.4149,
    lng: 2.8231,
  },
  {
    name: "Kabuga",
    lat: -1.9765,
    lng: 30.2247,
  },
  {
    name: "Chebarkul'",
    lat: 54.9778,
    lng: 60.37,
  },
  {
    name: "Romny",
    lat: 50.7428,
    lng: 33.4879,
  },
  {
    name: "Spanish Fork",
    lat: 40.1101,
    lng: -111.6406,
  },
  {
    name: "Woodstock",
    lat: 43.1306,
    lng: -80.7467,
  },
  {
    name: "Belleville",
    lat: 38.5165,
    lng: -89.99,
  },
  {
    name: "Ilhavo",
    lat: 40.6,
    lng: -8.6667,
  },
  {
    name: "Maplewood",
    lat: 44.9842,
    lng: -93.0247,
  },
  {
    name: "Komono",
    lat: 35.02,
    lng: 136.5075,
  },
  {
    name: "Gishi",
    lat: 26.1911,
    lng: 127.7286,
  },
  {
    name: "Schwabisch Hall",
    lat: 49.1122,
    lng: 9.7375,
  },
  {
    name: "Abadan",
    lat: 38.0517,
    lng: 58.21,
  },
  {
    name: "Sasayama",
    lat: 35.0758,
    lng: 135.2192,
  },
  {
    name: "Pereslavl'-Zalesskiy",
    lat: 56.7381,
    lng: 38.8562,
  },
  {
    name: "Petrich",
    lat: 41.3953,
    lng: 23.2069,
  },
  {
    name: "Tomar",
    lat: 39.6,
    lng: -8.4167,
  },
  {
    name: "Colomiers",
    lat: 43.6139,
    lng: 1.3367,
  },
  {
    name: "Weissenfels",
    lat: 51.2,
    lng: 11.9667,
  },
  {
    name: "Boucherville",
    lat: 45.6,
    lng: -73.45,
  },
  {
    name: "Yalutorovsk",
    lat: 56.65,
    lng: 66.3,
  },
  {
    name: "Arys",
    lat: 42.4333,
    lng: 68.8,
  },
  {
    name: "Freital",
    lat: 51.0167,
    lng: 13.65,
  },
  {
    name: "Vahdat",
    lat: 38.5531,
    lng: 69.0197,
  },
  {
    name: "Channarayapatna",
    lat: 12.9,
    lng: 76.39,
  },
  {
    name: "Pottsville",
    lat: 40.6798,
    lng: -76.2092,
  },
  {
    name: "Buxtehude",
    lat: 53.4769,
    lng: 9.7011,
  },
  {
    name: "Columbia",
    lat: 35.6235,
    lng: -87.0486,
  },
  {
    name: "Bayindir",
    lat: 38.2192,
    lng: 27.6481,
  },
  {
    name: "Pechora",
    lat: 65.1442,
    lng: 57.2197,
  },
  {
    name: "Bartlett",
    lat: 41.9803,
    lng: -88.2069,
  },
  {
    name: "Bluefield",
    lat: 37.2608,
    lng: -81.2143,
  },
  {
    name: "Fitchburg",
    lat: 42.5912,
    lng: -71.8156,
  },
  {
    name: "Orange",
    lat: -33.2833,
    lng: 149.1,
  },
  {
    name: "Marion",
    lat: 40.5496,
    lng: -85.66,
  },
  {
    name: "Huckelhoven",
    lat: 51.0608,
    lng: 6.2197,
  },
  {
    name: "Huaura",
    lat: -11.1,
    lng: -77.6,
  },
  {
    name: "Farnham",
    lat: 51.215,
    lng: -0.799,
  },
  {
    name: "Uray",
    lat: 60.1333,
    lng: 64.7833,
  },
  {
    name: "Maihar",
    lat: 24.27,
    lng: 80.75,
  },
  {
    name: "Halberstadt",
    lat: 51.8958,
    lng: 11.0467,
  },
  {
    name: "Cedar Falls",
    lat: 42.5195,
    lng: -92.4534,
  },
  {
    name: "Aizawa",
    lat: 35.5289,
    lng: 139.3217,
  },
  {
    name: "Yi'an",
    lat: 47.8804,
    lng: 125.3,
  },
  {
    name: "Maintal",
    lat: 50.15,
    lng: 8.8333,
  },
  {
    name: "Neumarkt",
    lat: 49.2833,
    lng: 11.4667,
  },
  {
    name: "Binh Long",
    lat: 11.6504,
    lng: 106.6,
  },
  {
    name: "Pyu",
    lat: 18.4779,
    lng: 96.4379,
  },
  {
    name: "Buffalo Grove",
    lat: 42.1673,
    lng: -87.9616,
  },
  {
    name: "Jamestown",
    lat: 42.0975,
    lng: -79.2366,
  },
  {
    name: "Essex",
    lat: 39.3024,
    lng: -76.4457,
  },
  {
    name: "Sagae",
    lat: 38.3811,
    lng: 140.2761,
  },
  {
    name: "Huntsville",
    lat: 30.705,
    lng: -95.5544,
  },
  {
    name: "Mableton",
    lat: 33.8132,
    lng: -84.5656,
  },
  {
    name: "Hofheim",
    lat: 50.0876,
    lng: 8.4447,
  },
  {
    name: "Anglet",
    lat: 43.485,
    lng: -1.5183,
  },
  {
    name: "Sao Manuel",
    lat: -22.7308,
    lng: -48.5708,
  },
  {
    name: "Clarksburg",
    lat: 39.2863,
    lng: -80.323,
  },
  {
    name: "Zainsk",
    lat: 55.3,
    lng: 52.0167,
  },
  {
    name: "Royal Palm Beach",
    lat: 26.7038,
    lng: -80.2241,
  },
  {
    name: "Lohne",
    lat: 52.2,
    lng: 8.7,
  },
  {
    name: "Jipijapa",
    lat: -1.3486,
    lng: -80.5786,
  },
  {
    name: "Al Qa`idah",
    lat: 13.7569,
    lng: 44.1392,
  },
  {
    name: "Marion",
    lat: 42.045,
    lng: -91.5846,
  },
  {
    name: "Oswiecim",
    lat: 50.0333,
    lng: 19.2333,
  },
  {
    name: "Covington",
    lat: 39.0334,
    lng: -84.5166,
  },
  {
    name: "Junnar",
    lat: 19.2,
    lng: 73.88,
  },
  {
    name: "Schorndorf",
    lat: 48.8,
    lng: 9.5333,
  },
  {
    name: "Kurobeshin",
    lat: 36.8667,
    lng: 137.45,
  },
  {
    name: "Belaya Kalitva",
    lat: 48.1667,
    lng: 40.7833,
  },
  {
    name: "Whanganui",
    lat: -39.9333,
    lng: 175.05,
  },
  {
    name: "Takikawa",
    lat: 43.5578,
    lng: 141.9106,
  },
  {
    name: "Tiete",
    lat: -23.1019,
    lng: -47.715,
  },
  {
    name: "Friendswood",
    lat: 29.5111,
    lng: -95.1979,
  },
  {
    name: "Arawa",
    lat: -6.228,
    lng: 155.566,
  },
  {
    name: "Povazska Bystrica",
    lat: 49.1167,
    lng: 18.45,
  },
  {
    name: "Indian Trail",
    lat: 35.0698,
    lng: -80.6457,
  },
  {
    name: "Woburn",
    lat: 42.4869,
    lng: -71.1543,
  },
  {
    name: "Camargo",
    lat: 27.667,
    lng: -105.167,
  },
  {
    name: "Mtsensk",
    lat: 53.2833,
    lng: 36.5667,
  },
  {
    name: "Tutayev",
    lat: 57.8833,
    lng: 39.5333,
  },
  {
    name: "Tipton",
    lat: 52.5259,
    lng: -2.0751,
  },
  {
    name: "Ban Bang Khu Lat",
    lat: 13.9134,
    lng: 100.369,
  },
  {
    name: "Oroqen Zizhiqi",
    lat: 50.5667,
    lng: 123.7167,
  },
  {
    name: "Ad Dilam",
    lat: 23.9934,
    lng: 47.1643,
  },
  {
    name: "Marlboro",
    lat: 40.3427,
    lng: -74.2567,
  },
  {
    name: "Hangu",
    lat: 33.5281,
    lng: 71.0572,
  },
  {
    name: "Raub",
    lat: 3.7931,
    lng: 101.8569,
  },
  {
    name: "Holyoke",
    lat: 42.2125,
    lng: -72.6411,
  },
  {
    name: "Amursk",
    lat: 50.2167,
    lng: 136.9,
  },
  {
    name: "Arecibo",
    lat: 18.4491,
    lng: -66.7387,
  },
  {
    name: "Baksan",
    lat: 43.6833,
    lng: 43.5333,
  },
  {
    name: "Mibu",
    lat: 36.4272,
    lng: 139.8039,
  },
  {
    name: "Plasencia",
    lat: 40.0275,
    lng: -6.0908,
  },
  {
    name: "Altagracia de Orituco",
    lat: 9.8504,
    lng: -66.38,
  },
  {
    name: "Draguignan",
    lat: 43.5403,
    lng: 6.4667,
  },
  {
    name: "Isfara",
    lat: 40.1167,
    lng: 70.6333,
  },
  {
    name: "Inashiki",
    lat: 35.9567,
    lng: 140.3239,
  },
  {
    name: "Otavalo",
    lat: 0.2333,
    lng: -78.2667,
  },
  {
    name: "Ettlingen",
    lat: 48.9333,
    lng: 8.4,
  },
  {
    name: "Alashankou",
    lat: 45.1714,
    lng: 82.5731,
  },
  {
    name: "Clinton",
    lat: 38.7499,
    lng: -76.9063,
  },
  {
    name: "Jayrud",
    lat: 33.8072,
    lng: 36.7403,
  },
  {
    name: "Hitachiomiya",
    lat: 36.5517,
    lng: 140.4119,
  },
  {
    name: "Chrzanow",
    lat: 50.1333,
    lng: 19.4,
  },
  {
    name: "Torrington",
    lat: 41.8349,
    lng: -73.1281,
  },
  {
    name: "Cedar City",
    lat: 37.6834,
    lng: -113.0956,
  },
  {
    name: "Coram",
    lat: 40.8813,
    lng: -73.0059,
  },
  {
    name: "Halle",
    lat: 50.7361,
    lng: 4.2372,
  },
  {
    name: "Rauma",
    lat: 61.1167,
    lng: 21.5,
  },
  {
    name: "Volklingen",
    lat: 49.25,
    lng: 6.8333,
  },
  {
    name: "Yecapixtla",
    lat: 18.8833,
    lng: -98.865,
  },
  {
    name: "Jaroslaw",
    lat: 50.0162,
    lng: 22.6778,
  },
  {
    name: "Ecija",
    lat: 37.5411,
    lng: -5.0792,
  },
  {
    name: "Sakuragawa",
    lat: 36.3272,
    lng: 140.0906,
  },
  {
    name: "Michalovce",
    lat: 48.7575,
    lng: 21.9183,
  },
  {
    name: "Matias Romero",
    lat: 16.8798,
    lng: -95.0391,
  },
  {
    name: "Manalapan",
    lat: 40.28,
    lng: -74.3436,
  },
  {
    name: "Wurselen",
    lat: 50.8247,
    lng: 6.1275,
  },
  {
    name: "Crystal Lake",
    lat: 42.2333,
    lng: -88.3351,
  },
  {
    name: "Calexico",
    lat: 32.6849,
    lng: -115.4944,
  },
  {
    name: "Lake Oswego",
    lat: 45.413,
    lng: -122.7003,
  },
  {
    name: "Villamontes",
    lat: -21.2647,
    lng: -63.4586,
  },
  {
    name: "Apsheronsk",
    lat: 44.4608,
    lng: 39.7406,
  },
  {
    name: "Muskogee",
    lat: 35.7431,
    lng: -95.3568,
  },
  {
    name: "Steyr",
    lat: 48.05,
    lng: 14.4167,
  },
  {
    name: "Romeoville",
    lat: 41.6318,
    lng: -88.0996,
  },
  {
    name: "Plant City",
    lat: 28.014,
    lng: -82.1201,
  },
  {
    name: "Mettmann",
    lat: 51.25,
    lng: 6.9667,
  },
  {
    name: "Amherst",
    lat: 42.3645,
    lng: -72.5069,
  },
  {
    name: "Solan",
    lat: 30.92,
    lng: 77.12,
  },
  {
    name: "Novodvinsk",
    lat: 64.4167,
    lng: 40.8167,
  },
  {
    name: "Zacatelco",
    lat: 19.2167,
    lng: -98.2333,
  },
  {
    name: "New Berlin",
    lat: 42.9726,
    lng: -88.1291,
  },
  {
    name: "La Chaux-de-Fonds",
    lat: 47.0996,
    lng: 6.8296,
  },
  {
    name: "The Acreage",
    lat: 26.7741,
    lng: -80.2779,
  },
  {
    name: "Socorro",
    lat: -22.5908,
    lng: -46.5289,
  },
  {
    name: "Gujo",
    lat: 35.7486,
    lng: 136.9644,
  },
  {
    name: "Roy",
    lat: 41.1715,
    lng: -112.0485,
  },
  {
    name: "Villa del Carbon",
    lat: 19.7272,
    lng: -99.5417,
  },
  {
    name: "Dupnitsa",
    lat: 42.265,
    lng: 23.1178,
  },
  {
    name: "Marlborough",
    lat: 42.3494,
    lng: -71.5468,
  },
  {
    name: "Milton",
    lat: 34.1353,
    lng: -84.3138,
  },
  {
    name: "Stendal",
    lat: 52.6,
    lng: 11.85,
  },
  {
    name: "Novo Horizonte",
    lat: -21.4678,
    lng: -49.2208,
  },
  {
    name: "Trofa",
    lat: 41.3374,
    lng: -8.5596,
  },
  {
    name: "Pokrov",
    lat: 47.6632,
    lng: 34.0811,
  },
  {
    name: "Higashimatsushima",
    lat: 38.4264,
    lng: 141.2106,
  },
  {
    name: "Andover",
    lat: 51.208,
    lng: -1.48,
  },
  {
    name: "Borlange",
    lat: 60.4833,
    lng: 15.4167,
  },
  {
    name: "Issaquah",
    lat: 47.544,
    lng: -122.0471,
  },
  {
    name: "Ahaus",
    lat: 52.0794,
    lng: 7.0134,
  },
  {
    name: "Presidente Venceslau",
    lat: -21.8761,
    lng: -51.8439,
  },
  {
    name: "Nishiwaki",
    lat: 34.9933,
    lng: 134.9694,
  },
  {
    name: "Sayansk",
    lat: 54.1167,
    lng: 102.1667,
  },
  {
    name: "Szigetszentmiklos",
    lat: 47.3453,
    lng: 19.0483,
  },
  {
    name: "Hillsborough",
    lat: 40.4985,
    lng: -74.674,
  },
  {
    name: "Eccles",
    lat: 53.4824,
    lng: -2.339,
  },
  {
    name: "Apan",
    lat: 19.7,
    lng: -98.4333,
  },
  {
    name: "Sun City",
    lat: 33.6165,
    lng: -112.2819,
  },
  {
    name: "Palmas",
    lat: -26.4842,
    lng: -51.9906,
  },
  {
    name: "Ibara",
    lat: 34.5978,
    lng: 133.4639,
  },
  {
    name: "Northampton Township",
    lat: 40.2104,
    lng: -75.0014,
  },
  {
    name: "Bartlesville",
    lat: 36.7357,
    lng: -95.9453,
  },
  {
    name: "Baghlan",
    lat: 36.1328,
    lng: 68.7,
  },
  {
    name: "Niederkassel",
    lat: 50.8167,
    lng: 7.0333,
  },
  {
    name: "Volodymyr-Volyns'kyy",
    lat: 50.8481,
    lng: 24.3222,
  },
  {
    name: "Ilmenau",
    lat: 50.6872,
    lng: 10.9142,
  },
  {
    name: "Hatfield",
    lat: 51.762,
    lng: -0.228,
  },
  {
    name: "Lancaster",
    lat: 32.5922,
    lng: -96.7737,
  },
  {
    name: "Streamwood",
    lat: 42.0209,
    lng: -88.1778,
  },
  {
    name: "Germantown",
    lat: 35.0829,
    lng: -89.7825,
  },
  {
    name: "Great Yarmouth",
    lat: 52.606,
    lng: 1.729,
  },
  {
    name: "Neu Isenburg",
    lat: 50.0558,
    lng: 8.6971,
  },
  {
    name: "Yelizovo",
    lat: 53.1833,
    lng: 158.3833,
  },
  {
    name: "Langen",
    lat: 49.9893,
    lng: 8.6803,
  },
  {
    name: "Carol Stream",
    lat: 41.9182,
    lng: -88.1308,
  },
  {
    name: "Misawa",
    lat: 40.6833,
    lng: 141.3689,
  },
  {
    name: "Guiglo",
    lat: 6.5436,
    lng: -7.4933,
  },
  {
    name: "Asheboro",
    lat: 35.7158,
    lng: -79.8129,
  },
  {
    name: "Kalispell",
    lat: 48.2156,
    lng: -114.3262,
  },
  {
    name: "Cayambe",
    lat: 0.0439,
    lng: -78.1561,
  },
  {
    name: "Baikonur",
    lat: 45.63,
    lng: 63.314,
  },
  {
    name: "Dwarka",
    lat: 22.2403,
    lng: 68.9686,
  },
  {
    name: "Lynnwood",
    lat: 47.8284,
    lng: -122.3033,
  },
  {
    name: "Mooresville",
    lat: 35.5849,
    lng: -80.8265,
  },
  {
    name: "Kachkanar",
    lat: 58.7,
    lng: 59.4833,
  },
  {
    name: "Al Malikiyah",
    lat: 37.1781,
    lng: 42.1403,
  },
  {
    name: "Brookfield",
    lat: 43.064,
    lng: -88.1231,
  },
  {
    name: "Groton",
    lat: 41.3597,
    lng: -72.0293,
  },
  {
    name: "Nuevitas",
    lat: 21.5403,
    lng: -77.2644,
  },
  {
    name: "Crestview",
    lat: 30.748,
    lng: -86.5784,
  },
  {
    name: "Toumodi",
    lat: 6.552,
    lng: -5.019,
  },
  {
    name: "Kurchatov",
    lat: 51.6667,
    lng: 35.65,
  },
  {
    name: "Pirna",
    lat: 50.9622,
    lng: 13.9403,
  },
  {
    name: "Rtishchevo",
    lat: 52.25,
    lng: 43.7833,
  },
  {
    name: "Pala Oua",
    lat: 9.35,
    lng: 14.9667,
  },
  {
    name: "Moses Lake",
    lat: 47.128,
    lng: -119.2761,
  },
  {
    name: "Joue-les-Tours",
    lat: 47.3514,
    lng: 0.6625,
  },
  {
    name: "Vasyl'kiv",
    lat: 50.1775,
    lng: 30.3217,
  },
  {
    name: "Woodlawn",
    lat: 39.3054,
    lng: -76.7489,
  },
  {
    name: "Tshela",
    lat: -4.9696,
    lng: 12.93,
  },
  {
    name: "Dubno",
    lat: 50.3931,
    lng: 25.735,
  },
  {
    name: "Galeana",
    lat: 24.8333,
    lng: -100.0667,
  },
  {
    name: "New Castle",
    lat: 40.9956,
    lng: -80.3459,
  },
  {
    name: "Olive Branch",
    lat: 34.961,
    lng: -89.8469,
  },
  {
    name: "Winslow",
    lat: 39.7027,
    lng: -74.9029,
  },
  {
    name: "Bitterfeld",
    lat: 51.6167,
    lng: 12.3167,
  },
  {
    name: "Enterprise",
    lat: 31.3276,
    lng: -85.8459,
  },
  {
    name: "Bautzen",
    lat: 51.1814,
    lng: 14.4239,
  },
  {
    name: "Marinha Grande",
    lat: 39.75,
    lng: -8.9333,
  },
  {
    name: "Melchor Ocampo",
    lat: 19.7083,
    lng: -99.1444,
  },
  {
    name: "Umi",
    lat: 33.5678,
    lng: 130.5111,
  },
  {
    name: "Skelmersdale",
    lat: 53.55,
    lng: -2.776,
  },
  {
    name: "Furstenfeldbruck",
    lat: 48.1778,
    lng: 11.2556,
  },
  {
    name: "Balcarce",
    lat: -37.8464,
    lng: -58.2556,
  },
  {
    name: "Mission",
    lat: 49.1337,
    lng: -122.3112,
  },
  {
    name: "Pervomaisk",
    lat: 48.6333,
    lng: 38.5167,
  },
  {
    name: "Bukama",
    lat: -9.2,
    lng: 25.8333,
  },
  {
    name: "Promissao",
    lat: -21.5369,
    lng: -49.8583,
  },
  {
    name: "Faraskur",
    lat: 31.3298,
    lng: 31.7151,
  },
  {
    name: "Dabola",
    lat: 10.75,
    lng: -11.1167,
  },
  {
    name: "Warren",
    lat: 41.239,
    lng: -80.8174,
  },
  {
    name: "Duncanville",
    lat: 32.646,
    lng: -96.9127,
  },
  {
    name: "Dzhankoy",
    lat: 45.7086,
    lng: 34.3933,
  },
  {
    name: "Nove Zamky",
    lat: 47.9831,
    lng: 18.1728,
  },
  {
    name: "Hurst",
    lat: 32.8353,
    lng: -97.1808,
  },
  {
    name: "Clermont",
    lat: 28.5402,
    lng: -81.7259,
  },
  {
    name: "Mariinsk",
    lat: 56.2167,
    lng: 87.75,
  },
  {
    name: "Wheeling",
    lat: 42.1308,
    lng: -87.924,
  },
  {
    name: "Guariba",
    lat: -21.36,
    lng: -48.2283,
  },
  {
    name: "Krasnoufimsk",
    lat: 56.6167,
    lng: 57.7667,
  },
  {
    name: "Zary",
    lat: 51.6333,
    lng: 15.1333,
  },
  {
    name: "Abinsk",
    lat: 44.8667,
    lng: 38.1667,
  },
  {
    name: "Dubbo",
    lat: -32.2569,
    lng: 148.6011,
  },
  {
    name: "Daraw",
    lat: 24.4003,
    lng: 32.9306,
  },
  {
    name: "San Felipe Orizatlan",
    lat: 21.1719,
    lng: -98.6064,
  },
  {
    name: "Uryupinsk",
    lat: 50.8,
    lng: 42.0167,
  },
  {
    name: "Severna Park",
    lat: 39.087,
    lng: -76.5687,
  },
  {
    name: "Karditsa",
    lat: 39.3647,
    lng: 21.9219,
  },
  {
    name: "Khalkhal",
    lat: 37.6189,
    lng: 48.5258,
  },
  {
    name: "Pacifica",
    lat: 37.6112,
    lng: -122.4781,
  },
  {
    name: "Caibarien",
    lat: 22.5158,
    lng: -79.4722,
  },
  {
    name: "Konakovo",
    lat: 56.7129,
    lng: 36.7783,
  },
  {
    name: "Lebanon",
    lat: 36.204,
    lng: -86.3481,
  },
  {
    name: "Falavarjan",
    lat: 32.5553,
    lng: 51.5097,
  },
  {
    name: "Americo Brasiliense",
    lat: -21.7361,
    lng: -48.1114,
  },
  {
    name: "Sassandra",
    lat: 4.9504,
    lng: -6.0833,
  },
  {
    name: "Ventanas",
    lat: -1.45,
    lng: -79.47,
  },
  {
    name: "Hanumannagar",
    lat: 26.5394,
    lng: 86.7483,
  },
  {
    name: "San Jacinto de Buena Fe",
    lat: -0.8932,
    lng: -79.4907,
  },
  {
    name: "Kaka",
    lat: 37.3503,
    lng: 59.6,
  },
  {
    name: "Eagle Mountain",
    lat: 40.3137,
    lng: -112.0114,
  },
  {
    name: "Usinsk",
    lat: 65.9998,
    lng: 57.5414,
  },
  {
    name: "Sharypovo",
    lat: 55.525,
    lng: 89.2,
  },
  {
    name: "Atamyrat",
    lat: 37.8167,
    lng: 65.2,
  },
  {
    name: "Alekseyevka",
    lat: 50.6333,
    lng: 38.6833,
  },
  {
    name: "Bol'shoy Kamen'",
    lat: 43.1167,
    lng: 132.35,
  },
  {
    name: "Reynoldsburg",
    lat: 39.9587,
    lng: -82.7944,
  },
  {
    name: "Sabang",
    lat: 5.8931,
    lng: 95.32,
  },
  {
    name: "Pathanamthitta",
    lat: 9.2647,
    lng: 76.7872,
  },
  {
    name: "Krasnyy Sulin",
    lat: 47.8833,
    lng: 40.0667,
  },
  {
    name: "Lyudinovo",
    lat: 53.8667,
    lng: 34.4667,
  },
  {
    name: "Oxford",
    lat: 34.3627,
    lng: -89.5336,
  },
  {
    name: "Rosenberg",
    lat: 29.546,
    lng: -95.822,
  },
  {
    name: "Pitangueiras",
    lat: -21.0094,
    lng: -48.2217,
  },
  {
    name: "Martinez",
    lat: 37.9985,
    lng: -122.116,
  },
  {
    name: "Zavolzh'ye",
    lat: 56.6425,
    lng: 43.3928,
  },
  {
    name: "Pleasant Grove",
    lat: 40.3716,
    lng: -111.7412,
  },
  {
    name: "Backnang",
    lat: 48.9464,
    lng: 9.4306,
  },
  {
    name: "Valrico",
    lat: 27.9193,
    lng: -82.2293,
  },
  {
    name: "Houghton le Spring",
    lat: 54.841,
    lng: -1.468,
  },
  {
    name: "Taounate",
    lat: 34.5358,
    lng: -4.64,
  },
  {
    name: "Izobil'nyy",
    lat: 45.3667,
    lng: 41.7167,
  },
  {
    name: "Huber Heights",
    lat: 39.8595,
    lng: -84.113,
  },
  {
    name: "Security-Widefield",
    lat: 38.7489,
    lng: -104.7142,
  },
  {
    name: "Vaudreuil-Dorion",
    lat: 45.4,
    lng: -74.0333,
  },
  {
    name: "Maroantsetra",
    lat: -15.4333,
    lng: 49.7333,
  },
  {
    name: "Katsuragi",
    lat: 34.4892,
    lng: 135.7267,
  },
  {
    name: "Visconde do Rio Branco",
    lat: -21.0103,
    lng: -42.8406,
  },
  {
    name: "Boryslav",
    lat: 49.2881,
    lng: 23.4267,
  },
  {
    name: "Ceska Lipa",
    lat: 50.6856,
    lng: 14.5377,
  },
  {
    name: "Yuzhnoural'sk",
    lat: 54.45,
    lng: 61.25,
  },
  {
    name: "Fuchucho",
    lat: 34.5683,
    lng: 133.2364,
  },
  {
    name: "Acu",
    lat: -5.5796,
    lng: -36.9101,
  },
  {
    name: "Guira de Melena",
    lat: 22.8019,
    lng: -82.5047,
  },
  {
    name: "Aristobulo del Valle",
    lat: -27.0952,
    lng: -54.897,
  },
  {
    name: "Mullaittivu",
    lat: 9.2833,
    lng: 80.8,
  },
  {
    name: "Mixquiahuala de Juarez",
    lat: 20.2311,
    lng: -99.2131,
  },
  {
    name: "Menomonee Falls",
    lat: 43.1487,
    lng: -88.1227,
  },
  {
    name: "Bathurst",
    lat: -33.42,
    lng: 149.5778,
  },
  {
    name: "Maibara",
    lat: 35.3153,
    lng: 136.2839,
  },
  {
    name: "Granbury",
    lat: 32.4484,
    lng: -97.7685,
  },
  {
    name: "Waxahachie",
    lat: 32.4032,
    lng: -96.8444,
  },
  {
    name: "Kamp-Lintfort",
    lat: 51.5,
    lng: 6.5333,
  },
  {
    name: "Sighetu Marmatiei",
    lat: 47.9309,
    lng: 23.8947,
  },
  {
    name: "Argun",
    lat: 43.3,
    lng: 45.8667,
  },
  {
    name: "Constitucion",
    lat: -35.3296,
    lng: -72.42,
  },
  {
    name: "Greven",
    lat: 52.0917,
    lng: 7.6083,
  },
  {
    name: "Kapiri Mposhi",
    lat: -13.9696,
    lng: 28.66,
  },
  {
    name: "Santiago",
    lat: 25.4333,
    lng: -100.1333,
  },
  {
    name: "Shakhtinsk",
    lat: 49.71,
    lng: 72.5872,
  },
  {
    name: "Papenburg",
    lat: 53.0667,
    lng: 7.4,
  },
  {
    name: "Akhtubinsk",
    lat: 48.2833,
    lng: 46.1667,
  },
  {
    name: "Spisska Nova Ves",
    lat: 48.95,
    lng: 20.5667,
  },
  {
    name: "Stirling",
    lat: 56.1166,
    lng: -3.9369,
  },
  {
    name: "Emirdag",
    lat: 39.0197,
    lng: 31.15,
  },
  {
    name: "Al Qaryatayn",
    lat: 34.2294,
    lng: 37.2406,
  },
  {
    name: "Ma`arratmisrin",
    lat: 36.0114,
    lng: 36.6717,
  },
  {
    name: "Holly Springs",
    lat: 35.653,
    lng: -78.8397,
  },
  {
    name: "Malmesbury",
    lat: -33.45,
    lng: 18.7333,
  },
  {
    name: "Butler",
    lat: 40.8616,
    lng: -79.8962,
  },
  {
    name: "Juanjui",
    lat: -7.1802,
    lng: -76.7265,
  },
  {
    name: "Geraldton",
    lat: -28.7744,
    lng: 114.6089,
  },
  {
    name: "Lampa",
    lat: -33.2864,
    lng: -70.8729,
  },
  {
    name: "Albertville",
    lat: 34.2634,
    lng: -86.2107,
  },
  {
    name: "Aboisso",
    lat: 5.4667,
    lng: -3.2,
  },
  {
    name: "Ossining",
    lat: 41.1559,
    lng: -73.8565,
  },
  {
    name: "Uchaly",
    lat: 54.3167,
    lng: 59.3833,
  },
  {
    name: "Tunduma",
    lat: -9.3,
    lng: 32.7667,
  },
  {
    name: "Kalinkavichy",
    lat: 52.1333,
    lng: 29.3333,
  },
  {
    name: "Sunbury",
    lat: -37.5811,
    lng: 144.7139,
  },
  {
    name: "London",
    lat: 37.1175,
    lng: -84.0767,
  },
  {
    name: "Reo",
    lat: 12.3335,
    lng: -2.4669,
  },
  {
    name: "Wesseling",
    lat: 50.8207,
    lng: 6.9786,
  },
  {
    name: "Yasugicho",
    lat: 35.4317,
    lng: 133.2508,
  },
  {
    name: "Nowra",
    lat: -34.8833,
    lng: 150.6,
  },
  {
    name: "Cottage Grove",
    lat: 44.8161,
    lng: -92.9274,
  },
  {
    name: "Beckum",
    lat: 51.7558,
    lng: 8.0408,
  },
  {
    name: "Konigs Wusterhausen",
    lat: 52.2917,
    lng: 13.625,
  },
  {
    name: "Frolovo",
    lat: 49.7714,
    lng: 43.6622,
  },
  {
    name: "Alapayevsk",
    lat: 57.85,
    lng: 61.7,
  },
  {
    name: "St. Marys",
    lat: 30.7567,
    lng: -81.5722,
  },
  {
    name: "Tosno",
    lat: 59.54,
    lng: 30.8775,
  },
  {
    name: "Dal'negorsk",
    lat: 44.5539,
    lng: 135.5661,
  },
  {
    name: "Goryachiy Klyuch",
    lat: 44.6308,
    lng: 39.13,
  },
  {
    name: "Malgobek",
    lat: 43.5167,
    lng: 44.5833,
  },
  {
    name: "Mechanicsville",
    lat: 37.6262,
    lng: -77.3561,
  },
  {
    name: "Komatsushimacho",
    lat: 34.0047,
    lng: 134.5906,
  },
  {
    name: "San Blas",
    lat: 21.5397,
    lng: -105.2856,
  },
  {
    name: "Compostela",
    lat: 21.2389,
    lng: -104.9,
  },
  {
    name: "Molndal",
    lat: 57.6542,
    lng: 12.0139,
  },
  {
    name: "Kannan",
    lat: 35.0894,
    lng: 138.9453,
  },
  {
    name: "Risalpur Cantonment",
    lat: 34.0049,
    lng: 71.9989,
  },
  {
    name: "Cleburne",
    lat: 32.357,
    lng: -97.4152,
  },
  {
    name: "Moss",
    lat: 59.437,
    lng: 10.6692,
  },
  {
    name: "Yirga `Alem",
    lat: 6.7504,
    lng: 38.41,
  },
  {
    name: "Warendorf",
    lat: 51.9539,
    lng: 7.9933,
  },
  {
    name: "Montlucon",
    lat: 46.3408,
    lng: 2.6033,
  },
  {
    name: "Holubivske",
    lat: 48.6375,
    lng: 38.6433,
  },
  {
    name: "Yugorsk",
    lat: 61.3167,
    lng: 63.35,
  },
  {
    name: "Oswego",
    lat: 43.4516,
    lng: -76.5005,
  },
  {
    name: "Lierre",
    lat: 51.1311,
    lng: 4.5697,
  },
  {
    name: "Mizunami",
    lat: 35.3619,
    lng: 137.2544,
  },
  {
    name: "Lebork",
    lat: 54.55,
    lng: 17.75,
  },
  {
    name: "Koryazhma",
    lat: 61.3,
    lng: 47.1667,
  },
  {
    name: "Oregon City",
    lat: 45.3415,
    lng: -122.5927,
  },
  {
    name: "Masyaf",
    lat: 35.0653,
    lng: 36.3421,
  },
  {
    name: "Guaira",
    lat: -24.09,
    lng: -54.27,
  },
  {
    name: "Winter Springs",
    lat: 28.6889,
    lng: -81.2704,
  },
  {
    name: "Morondava",
    lat: -20.2833,
    lng: 44.2833,
  },
  {
    name: "Kizilyurt",
    lat: 43.2,
    lng: 46.8667,
  },
  {
    name: "Carpentersville",
    lat: 42.1227,
    lng: -88.2895,
  },
  {
    name: "Mangai",
    lat: -4.0396,
    lng: 19.53,
  },
  {
    name: "Irbit",
    lat: 57.6667,
    lng: 63.0667,
  },
  {
    name: "Frankston",
    lat: -38.158,
    lng: 145.135,
  },
  {
    name: "Wildomar",
    lat: 33.6173,
    lng: -117.2582,
  },
  {
    name: "Greenfield",
    lat: 42.9619,
    lng: -88.0051,
  },
  {
    name: "Suhl",
    lat: 50.6106,
    lng: 10.6931,
  },
  {
    name: "Braintree",
    lat: 42.2039,
    lng: -71.0022,
  },
  {
    name: "Parkland",
    lat: 47.1417,
    lng: -122.4376,
  },
  {
    name: "Oakton",
    lat: 38.8887,
    lng: -77.3016,
  },
  {
    name: "Protvino",
    lat: 54.8667,
    lng: 37.2167,
  },
  {
    name: "Silves",
    lat: 37.1833,
    lng: -8.4333,
  },
  {
    name: "Penfield",
    lat: 43.1602,
    lng: -77.4483,
  },
  {
    name: "Rezh",
    lat: 57.3667,
    lng: 61.4,
  },
  {
    name: "Rock Island",
    lat: 41.4699,
    lng: -90.5827,
  },
  {
    name: "Haverstraw",
    lat: 41.2055,
    lng: -74.0384,
  },
  {
    name: "Yasynuvata",
    lat: 48.1167,
    lng: 37.8333,
  },
  {
    name: "Cheltenham",
    lat: 40.0781,
    lng: -75.1382,
  },
  {
    name: "Beslan",
    lat: 43.1833,
    lng: 44.5333,
  },
  {
    name: "Erding",
    lat: 48.3001,
    lng: 11.9082,
  },
  {
    name: "Tsubata",
    lat: 36.6686,
    lng: 136.7283,
  },
  {
    name: "Qulsary",
    lat: 46.9833,
    lng: 54.0165,
  },
  {
    name: "Partizansk",
    lat: 43.1333,
    lng: 133.1333,
  },
  {
    name: "Kampene",
    lat: -3.5968,
    lng: 26.6671,
  },
  {
    name: "Kanada",
    lat: 33.7761,
    lng: 130.9806,
  },
  {
    name: "West Fargo",
    lat: 46.8573,
    lng: -96.9057,
  },
  {
    name: "Kyshtym",
    lat: 55.7139,
    lng: 60.5528,
  },
  {
    name: "Lesozavodsk",
    lat: 45.4667,
    lng: 133.4,
  },
  {
    name: "Shrewsbury",
    lat: 42.2842,
    lng: -71.7154,
  },
  {
    name: "Boston",
    lat: 52.974,
    lng: -0.0214,
  },
  {
    name: "Mount Juliet",
    lat: 36.1991,
    lng: -86.5114,
  },
  {
    name: "San Juan",
    lat: 26.1903,
    lng: -98.152,
  },
  {
    name: "Land O' Lakes",
    lat: 28.2075,
    lng: -82.4476,
  },
  {
    name: "Georgetown",
    lat: 38.2249,
    lng: -84.5482,
  },
  {
    name: "Portage",
    lat: 41.5866,
    lng: -87.1792,
  },
  {
    name: "Netishyn",
    lat: 50.33,
    lng: 26.64,
  },
  {
    name: "Caimito",
    lat: 22.9575,
    lng: -82.5964,
  },
  {
    name: "Owasso",
    lat: 36.2882,
    lng: -95.8328,
  },
  {
    name: "Komarno",
    lat: 47.7633,
    lng: 18.1283,
  },
  {
    name: "Sokol",
    lat: 59.4667,
    lng: 40.1167,
  },
  {
    name: "Commack",
    lat: 40.8443,
    lng: -73.2834,
  },
  {
    name: "Morohongo",
    lat: 35.9417,
    lng: 139.3161,
  },
  {
    name: "Chimboy Shahri",
    lat: 42.9311,
    lng: 59.7708,
  },
  {
    name: "Foley",
    lat: 30.3983,
    lng: -87.6649,
  },
  {
    name: "Billingham",
    lat: 54.61,
    lng: -1.27,
  },
  {
    name: "Torres Novas",
    lat: 39.4833,
    lng: -8.5333,
  },
  {
    name: "New Albany",
    lat: 38.3089,
    lng: -85.8234,
  },
  {
    name: "Kohtla-Jarve",
    lat: 59.4,
    lng: 27.2833,
  },
  {
    name: "Oakville",
    lat: 38.4472,
    lng: -90.3199,
  },
  {
    name: "Benton",
    lat: 34.5775,
    lng: -92.5712,
  },
  {
    name: "Voi",
    lat: -3.3696,
    lng: 38.57,
  },
  {
    name: "Merritt Island",
    lat: 28.3146,
    lng: -80.6713,
  },
  {
    name: "Koneurgench",
    lat: 42.3167,
    lng: 59.1586,
  },
  {
    name: "`Afrin",
    lat: 36.5119,
    lng: 36.8694,
  },
  {
    name: "Kambove",
    lat: -10.87,
    lng: 26.6,
  },
  {
    name: "Esik",
    lat: 43.3552,
    lng: 77.4524,
  },
  {
    name: "Clifton Park",
    lat: 42.8587,
    lng: -73.8242,
  },
  {
    name: "Airdrie",
    lat: 55.86,
    lng: -3.98,
  },
  {
    name: "Brant",
    lat: 43.1167,
    lng: -80.3667,
  },
  {
    name: "Esquel",
    lat: -42.9,
    lng: -71.3167,
  },
  {
    name: "Meridian",
    lat: 32.3846,
    lng: -88.6896,
  },
  {
    name: "Atami",
    lat: 35.0961,
    lng: 139.0717,
  },
  {
    name: "Kailua",
    lat: 21.392,
    lng: -157.7396,
  },
  {
    name: "Usuki",
    lat: 33.1258,
    lng: 131.8047,
  },
  {
    name: "Zvishavane",
    lat: -20.3296,
    lng: 30.05,
  },
  {
    name: "Zhetisay",
    lat: 40.7753,
    lng: 68.3272,
  },
  {
    name: "Kinel'",
    lat: 53.2333,
    lng: 50.6167,
  },
  {
    name: "Kodaikanal",
    lat: 10.23,
    lng: 77.48,
  },
  {
    name: "Yorktown",
    lat: 41.2727,
    lng: -73.8092,
  },
  {
    name: "Lakeshore",
    lat: 42.2399,
    lng: -82.6511,
  },
  {
    name: "Masasi",
    lat: -10.7296,
    lng: 38.7999,
  },
  {
    name: "Minami-Boso",
    lat: 35.0433,
    lng: 139.8403,
  },
  {
    name: "Kehl",
    lat: 48.5711,
    lng: 7.8089,
  },
  {
    name: "Innisfil",
    lat: 44.3,
    lng: -79.5833,
  },
  {
    name: "Barra Bonita",
    lat: -22.4947,
    lng: -48.5581,
  },
  {
    name: "Agudos",
    lat: -22.4739,
    lng: -48.9836,
  },
  {
    name: "Miyajima",
    lat: 33.1525,
    lng: 130.4747,
  },
  {
    name: "Bettendorf",
    lat: 41.5656,
    lng: -90.4764,
  },
  {
    name: "Dunedin",
    lat: 28.0329,
    lng: -82.7863,
  },
  {
    name: "Hilliard",
    lat: 40.0353,
    lng: -83.1578,
  },
  {
    name: "Warrnambool",
    lat: -38.3833,
    lng: 142.4833,
  },
  {
    name: "Emsdetten",
    lat: 52.1728,
    lng: 7.5344,
  },
  {
    name: "Kaniama",
    lat: -7.5696,
    lng: 24.17,
  },
  {
    name: "Nueve de Julio",
    lat: -35.45,
    lng: -60.8833,
  },
  {
    name: "Phenix City",
    lat: 32.4588,
    lng: -85.0251,
  },
  {
    name: "Sambir",
    lat: 49.5167,
    lng: 23.2,
  },
  {
    name: "Addison",
    lat: 41.9314,
    lng: -88.0085,
  },
  {
    name: "Muhlhausen",
    lat: 51.2167,
    lng: 10.45,
  },
  {
    name: "Selcuk",
    lat: 37.95,
    lng: 27.3667,
  },
  {
    name: "Coesfeld",
    lat: 51.9458,
    lng: 7.1675,
  },
  {
    name: "Roseville",
    lat: 45.0155,
    lng: -93.1545,
  },
  {
    name: "Brighton Township",
    lat: 43.1175,
    lng: -77.5835,
  },
  {
    name: "Galloway",
    lat: 39.4914,
    lng: -74.4803,
  },
  {
    name: "Ma`alot Tarshiha",
    lat: 33.0167,
    lng: 35.2708,
  },
  {
    name: "Sankt Ingbert",
    lat: 49.3,
    lng: 7.1167,
  },
  {
    name: "Zhmerynka",
    lat: 49.0425,
    lng: 28.0992,
  },
  {
    name: "Tudela",
    lat: 42.0653,
    lng: -1.6067,
  },
  {
    name: "Nyaungdon",
    lat: 17.0433,
    lng: 95.6429,
  },
  {
    name: "Udhampur",
    lat: 32.93,
    lng: 75.13,
  },
  {
    name: "Kerava",
    lat: 60.4028,
    lng: 25.1,
  },
  {
    name: "Tucker",
    lat: 33.8436,
    lng: -84.2021,
  },
  {
    name: "Rifu",
    lat: 38.3303,
    lng: 140.9756,
  },
  {
    name: "Queanbeyan",
    lat: -35.3533,
    lng: 149.2342,
  },
  {
    name: "Moorpark",
    lat: 34.2855,
    lng: -118.877,
  },
  {
    name: "Smarhon'",
    lat: 54.4836,
    lng: 26.4,
  },
  {
    name: "Monrovia",
    lat: 34.165,
    lng: -117.9921,
  },
  {
    name: "Oak Creek",
    lat: 42.8803,
    lng: -87.9009,
  },
  {
    name: "Claremont",
    lat: 34.1259,
    lng: -117.7153,
  },
  {
    name: "Oswego",
    lat: 41.6834,
    lng: -88.3372,
  },
  {
    name: "Post Falls",
    lat: 47.7213,
    lng: -116.9385,
  },
  {
    name: "La Ciotat",
    lat: 43.1769,
    lng: 5.6086,
  },
  {
    name: "Peachtree City",
    lat: 33.3943,
    lng: -84.5712,
  },
  {
    name: "Palapye",
    lat: -22.55,
    lng: 27.1333,
  },
  {
    name: "At Turrah",
    lat: 32.6368,
    lng: 35.99,
  },
  {
    name: "Kamata",
    lat: 33.5633,
    lng: 130.7117,
  },
  {
    name: "Meadow Woods",
    lat: 28.3698,
    lng: -81.3467,
  },
  {
    name: "Pahrump",
    lat: 36.2411,
    lng: -116.0176,
  },
  {
    name: "Trumbull",
    lat: 41.2602,
    lng: -73.2083,
  },
  {
    name: "Zacatepec",
    lat: 18.6833,
    lng: -99.1833,
  },
  {
    name: "Avdiivka",
    lat: 48.1333,
    lng: 37.75,
  },
  {
    name: "Tuttlingen",
    lat: 47.985,
    lng: 8.8233,
  },
  {
    name: "Farafenni",
    lat: 13.5667,
    lng: -15.6,
  },
  {
    name: "Portsmouth",
    lat: 38.7539,
    lng: -82.9446,
  },
  {
    name: "Viru",
    lat: -8.4143,
    lng: -78.7524,
  },
  {
    name: "Natick",
    lat: 42.2847,
    lng: -71.3497,
  },
  {
    name: "Martinez",
    lat: 33.5209,
    lng: -82.0985,
  },
  {
    name: "Shawnee",
    lat: 35.3529,
    lng: -96.965,
  },
  {
    name: "Trebic",
    lat: 49.215,
    lng: 15.8817,
  },
  {
    name: "Ewing",
    lat: 40.265,
    lng: -74.8005,
  },
  {
    name: "Gillette",
    lat: 44.2752,
    lng: -105.4983,
  },
  {
    name: "Limburg",
    lat: 50.3833,
    lng: 8.0667,
  },
  {
    name: "Hato Mayor",
    lat: 18.764,
    lng: -69.257,
  },
  {
    name: "Guayaramerin",
    lat: -10.8267,
    lng: -65.3567,
  },
  {
    name: "Porta Westfalica",
    lat: 52.2167,
    lng: 8.9333,
  },
  {
    name: "Salinas",
    lat: -2.2083,
    lng: -80.9681,
  },
  {
    name: "Accrington",
    lat: 53.7534,
    lng: -2.3638,
  },
  {
    name: "Velasco Ibarra",
    lat: -1.0439,
    lng: -79.6383,
  },
  {
    name: "Boyarka",
    lat: 70.767,
    lng: 97.5,
  },
  {
    name: "Prattville",
    lat: 32.4605,
    lng: -86.4588,
  },
  {
    name: "Kamenka",
    lat: 53.1833,
    lng: 44.05,
  },
  {
    name: "Chortoq",
    lat: 41.0692,
    lng: 71.8237,
  },
  {
    name: "Woodburn",
    lat: 45.1473,
    lng: -122.8603,
  },
  {
    name: "Chernyakhovsk",
    lat: 54.6333,
    lng: 21.8167,
  },
  {
    name: "Prince Albert",
    lat: 53.2,
    lng: -105.75,
  },
  {
    name: "Calumet City",
    lat: 41.6134,
    lng: -87.5505,
  },
  {
    name: "Praya",
    lat: -8.7223,
    lng: 116.2923,
  },
  {
    name: "San Juan Capistrano",
    lat: 33.5009,
    lng: -117.6544,
  },
  {
    name: "Vyazniki",
    lat: 56.2433,
    lng: 42.1292,
  },
  {
    name: "Toretsk",
    lat: 48.4,
    lng: 37.8333,
  },
  {
    name: "Sion",
    lat: 46.2304,
    lng: 7.3661,
  },
  {
    name: "Kumo",
    lat: 10.0431,
    lng: 11.2183,
  },
  {
    name: "Xonobod",
    lat: 40.8127,
    lng: 72.9731,
  },
  {
    name: "Zefat",
    lat: 32.9658,
    lng: 35.4983,
  },
  {
    name: "Karak",
    lat: 33.1167,
    lng: 71.0833,
  },
  {
    name: "Ingelheim",
    lat: 49.9747,
    lng: 8.0564,
  },
  {
    name: "Tallkalakh",
    lat: 34.6683,
    lng: 36.2597,
  },
  {
    name: "Pak Chong",
    lat: 14.6796,
    lng: 101.3976,
  },
  {
    name: "Atbasar",
    lat: 51.8219,
    lng: 68.3477,
  },
  {
    name: "Dayr Hafir",
    lat: 36.1592,
    lng: 37.704,
  },
  {
    name: "Franklin",
    lat: 42.8854,
    lng: -88.0104,
  },
  {
    name: "Cooper City",
    lat: 26.0463,
    lng: -80.2862,
  },
  {
    name: "Leyland",
    lat: 53.692,
    lng: -2.697,
  },
  {
    name: "Kundian",
    lat: 32.4522,
    lng: 71.4718,
  },
  {
    name: "Svetlograd",
    lat: 45.3308,
    lng: 42.8511,
  },
  {
    name: "El Mirage",
    lat: 33.5905,
    lng: -112.3271,
  },
  {
    name: "Woodley",
    lat: 51.453,
    lng: -0.902,
  },
  {
    name: "Sinsheim",
    lat: 49.25,
    lng: 8.8833,
  },
  {
    name: "LaGrange",
    lat: 33.0274,
    lng: -85.0384,
  },
  {
    name: "Cieszyn",
    lat: 49.75,
    lng: 18.6333,
  },
  {
    name: "La Vergne",
    lat: 36.0203,
    lng: -86.5582,
  },
  {
    name: "Middletown",
    lat: 39.4453,
    lng: -75.7166,
  },
  {
    name: "Mount Pleasant",
    lat: 43.5966,
    lng: -84.7759,
  },
  {
    name: "Iyo",
    lat: 33.7575,
    lng: 132.7039,
  },
  {
    name: "Boyarka",
    lat: 50.3292,
    lng: 30.2886,
  },
  {
    name: "Junction City",
    lat: 39.0271,
    lng: -96.8496,
  },
  {
    name: "Inver Grove Heights",
    lat: 44.8247,
    lng: -93.0596,
  },
  {
    name: "Gurpinar",
    lat: 38.3269,
    lng: 43.4133,
  },
  {
    name: "Cegled",
    lat: 47.1772,
    lng: 19.7981,
  },
  {
    name: "Camara de Lobos",
    lat: 32.65,
    lng: -16.9667,
  },
  {
    name: "Kilimli",
    lat: 41.4833,
    lng: 31.8333,
  },
  {
    name: "Guilderland",
    lat: 42.708,
    lng: -73.9631,
  },
  {
    name: "Kuala Kapuas",
    lat: -3.0996,
    lng: 114.35,
  },
  {
    name: "Uster",
    lat: 47.3492,
    lng: 8.7192,
  },
  {
    name: "Ofunato",
    lat: 39.0822,
    lng: 141.7083,
  },
  {
    name: "Pennsauken",
    lat: 39.9649,
    lng: -75.0563,
  },
  {
    name: "Cha-am",
    lat: 12.7997,
    lng: 99.9669,
  },
  {
    name: "Onteniente",
    lat: 38.8222,
    lng: -0.6072,
  },
  {
    name: "La Troncal",
    lat: -2.4278,
    lng: -79.3389,
  },
  {
    name: "Bougouni",
    lat: 11.4204,
    lng: -7.49,
  },
  {
    name: "Morfelden-Walldorf",
    lat: 49.9896,
    lng: 8.5661,
  },
  {
    name: "Andover",
    lat: 42.6466,
    lng: -71.1651,
  },
  {
    name: "Saint-Chamond",
    lat: 45.4775,
    lng: 4.5153,
  },
  {
    name: "Dietzenbach",
    lat: 50.0086,
    lng: 8.7756,
  },
  {
    name: "Jose Bonifacio",
    lat: -21.0528,
    lng: -49.6878,
  },
  {
    name: "Yangambi",
    lat: 0.7675,
    lng: 24.4414,
  },
  {
    name: "Meppen",
    lat: 52.6906,
    lng: 7.291,
  },
  {
    name: "Honda",
    lat: 5.1903,
    lng: -74.75,
  },
  {
    name: "Navarre",
    lat: 30.4174,
    lng: -86.8907,
  },
  {
    name: "Monroe",
    lat: 35.0061,
    lng: -80.5595,
  },
  {
    name: "Savonlinna",
    lat: 61.8667,
    lng: 28.8831,
  },
  {
    name: "Sosa",
    lat: 35.7078,
    lng: 140.5644,
  },
  {
    name: "Yayladagi",
    lat: 35.9025,
    lng: 36.0603,
  },
  {
    name: "Cutral-Co",
    lat: -38.9333,
    lng: -69.2333,
  },
  {
    name: "Lage",
    lat: 51.9833,
    lng: 8.8,
  },
  {
    name: "Vichuga",
    lat: 57.2,
    lng: 41.9167,
  },
  {
    name: "Villenave-d'Ornon",
    lat: 44.7806,
    lng: -0.5658,
  },
  {
    name: "Gahanna",
    lat: 40.0251,
    lng: -82.8637,
  },
  {
    name: "Saint-Benoit",
    lat: -21.0335,
    lng: 55.7128,
  },
  {
    name: "Sanford",
    lat: 35.4874,
    lng: -79.1772,
  },
  {
    name: "Riviera Beach",
    lat: 26.7812,
    lng: -80.0742,
  },
  {
    name: "Tamuin",
    lat: 22,
    lng: -98.7833,
  },
  {
    name: "Ikot Abasi",
    lat: 4.5704,
    lng: 7.56,
  },
  {
    name: "Saint-Raphael",
    lat: 43.4252,
    lng: 6.7684,
  },
  {
    name: "Wildwood",
    lat: 38.5799,
    lng: -90.6699,
  },
  {
    name: "Burriana",
    lat: 39.8894,
    lng: -0.0925,
  },
  {
    name: "Angra do Heroismo",
    lat: 38.6558,
    lng: -27.2153,
  },
  {
    name: "Trinec",
    lat: 49.6776,
    lng: 18.6708,
  },
  {
    name: "Cloppenburg",
    lat: 52.8478,
    lng: 8.0439,
  },
  {
    name: "Millerovo",
    lat: 48.9167,
    lng: 40.4,
  },
  {
    name: "La Palma",
    lat: 22.7472,
    lng: -83.5525,
  },
  {
    name: "Tooele",
    lat: 40.5393,
    lng: -112.3082,
  },
  {
    name: "Upper Arlington",
    lat: 40.0272,
    lng: -83.0704,
  },
  {
    name: "Yarumal",
    lat: 7.0306,
    lng: -75.5905,
  },
  {
    name: "Auxerre",
    lat: 47.7986,
    lng: 3.5672,
  },
  {
    name: "Saarlouis",
    lat: 49.3167,
    lng: 6.75,
  },
  {
    name: "Langford Station",
    lat: 48.4506,
    lng: -123.5058,
  },
  {
    name: "Kahoku",
    lat: 36.72,
    lng: 136.7067,
  },
  {
    name: "Bradford West Gwillimbury",
    lat: 44.1333,
    lng: -79.6333,
  },
  {
    name: "Radebeul",
    lat: 51.1033,
    lng: 13.67,
  },
  {
    name: "Auburn",
    lat: 38.895,
    lng: -121.0778,
  },
  {
    name: "Yellandu",
    lat: 17.6,
    lng: 80.33,
  },
  {
    name: "Bad Vilbel",
    lat: 50.1781,
    lng: 8.7361,
  },
  {
    name: "Plainfield",
    lat: 39.6953,
    lng: -86.3717,
  },
  {
    name: "Olney",
    lat: 39.1465,
    lng: -77.0715,
  },
  {
    name: "Abashiri",
    lat: 44.0206,
    lng: 144.2736,
  },
  {
    name: "Luga",
    lat: 58.7333,
    lng: 29.85,
  },
  {
    name: "Giddalur",
    lat: 15.3784,
    lng: 78.9265,
  },
  {
    name: "Colwyn Bay",
    lat: 53.29,
    lng: -3.7,
  },
  {
    name: "Voznesens'k",
    lat: 47.5725,
    lng: 31.3119,
  },
  {
    name: "Gorizia",
    lat: 45.9352,
    lng: 13.6193,
  },
  {
    name: "Ieper",
    lat: 50.85,
    lng: 2.8833,
  },
  {
    name: "Wermelskirchen",
    lat: 51.1392,
    lng: 7.2051,
  },
  {
    name: "Oak Harbor",
    lat: 48.2965,
    lng: -122.6333,
  },
  {
    name: "Yarim",
    lat: 14.2978,
    lng: 44.3778,
  },
  {
    name: "Mirnyy",
    lat: 62.5333,
    lng: 113.95,
  },
  {
    name: "Winsen",
    lat: 53.3667,
    lng: 10.2167,
  },
  {
    name: "Yefremov",
    lat: 53.1492,
    lng: 38.0826,
  },
  {
    name: "Kamsar",
    lat: 10.65,
    lng: -14.6167,
  },
  {
    name: "Umarkot",
    lat: 25.3614,
    lng: 69.7361,
  },
  {
    name: "Kotah-ye `Ashro",
    lat: 34.45,
    lng: 68.8,
  },
  {
    name: "Wodonga",
    lat: -36.1214,
    lng: 146.8881,
  },
  {
    name: "Gorna Oryahovitsa",
    lat: 43.1222,
    lng: 25.6897,
  },
  {
    name: "Tamra",
    lat: 32.8511,
    lng: 35.2071,
  },
  {
    name: "Campbell River",
    lat: 50.0244,
    lng: -125.2475,
  },
  {
    name: "Datteln",
    lat: 51.6539,
    lng: 7.3417,
  },
  {
    name: "Adamantina",
    lat: -21.6847,
    lng: -51.0733,
  },
  {
    name: "Freehold",
    lat: 40.2233,
    lng: -74.2986,
  },
  {
    name: "Kempen",
    lat: 51.3658,
    lng: 6.4194,
  },
  {
    name: "Carrollwood",
    lat: 28.0577,
    lng: -82.5149,
  },
  {
    name: "Qadsayya",
    lat: 33.5333,
    lng: 36.2167,
  },
  {
    name: "Chelmsford",
    lat: 42.6,
    lng: -71.3631,
  },
  {
    name: "Casilda",
    lat: -33.0442,
    lng: -61.1681,
  },
  {
    name: "Seelze",
    lat: 52.3961,
    lng: 9.5981,
  },
  {
    name: "Bagamoyo",
    lat: -6.4333,
    lng: 38.9,
  },
  {
    name: "Acaxochitlan",
    lat: 20.1667,
    lng: -98.2,
  },
  {
    name: "Blagoveshchensk",
    lat: 55.0333,
    lng: 55.9833,
  },
  {
    name: "Korkino",
    lat: 54.8833,
    lng: 61.4,
  },
  {
    name: "Baja",
    lat: 46.1833,
    lng: 18.9536,
  },
  {
    name: "Leer",
    lat: 53.2308,
    lng: 7.4528,
  },
  {
    name: "La Porte",
    lat: 29.6689,
    lng: -95.0484,
  },
  {
    name: "Aguai",
    lat: -22.0603,
    lng: -46.9736,
  },
  {
    name: "Uonuma",
    lat: 37.2333,
    lng: 138.9667,
  },
  {
    name: "Macon",
    lat: 46.3063,
    lng: 4.8313,
  },
  {
    name: "Aznakayevo",
    lat: 54.85,
    lng: 53.0667,
  },
  {
    name: "Ozu",
    lat: 32.8789,
    lng: 130.8683,
  },
  {
    name: "Randallstown",
    lat: 39.3723,
    lng: -76.8024,
  },
  {
    name: "Bethlehem",
    lat: 42.5856,
    lng: -73.8219,
  },
  {
    name: "Brunswick",
    lat: 41.2464,
    lng: -81.8198,
  },
  {
    name: "East Point",
    lat: 33.6696,
    lng: -84.4701,
  },
  {
    name: "DeLand",
    lat: 29.0224,
    lng: -81.2873,
  },
  {
    name: "Meyzieu",
    lat: 45.7667,
    lng: 5.0036,
  },
  {
    name: "Pleasant Hill",
    lat: 37.954,
    lng: -122.0759,
  },
  {
    name: "Angamali",
    lat: 10.196,
    lng: 76.386,
  },
  {
    name: "Tabor",
    lat: 49.4145,
    lng: 14.6578,
  },
  {
    name: "Aksay",
    lat: 51.1714,
    lng: 53.0349,
  },
  {
    name: "Merrillville",
    lat: 41.4728,
    lng: -87.3197,
  },
  {
    name: "Stow",
    lat: 41.1765,
    lng: -81.4344,
  },
  {
    name: "Orangevale",
    lat: 38.6881,
    lng: -121.2209,
  },
  {
    name: "Calhoun",
    lat: 34.4918,
    lng: -84.9391,
  },
  {
    name: "Nagua",
    lat: 19.376,
    lng: -69.847,
  },
  {
    name: "Ban Ang Sila",
    lat: 13.3364,
    lng: 100.9278,
  },
  {
    name: "Sarpol-e Zahab",
    lat: 34.4614,
    lng: 45.8647,
  },
  {
    name: "Crailsheim",
    lat: 49.1347,
    lng: 10.0706,
  },
  {
    name: "Leawood",
    lat: 38.9076,
    lng: -94.6258,
  },
  {
    name: "Zelenokumsk",
    lat: 44.4,
    lng: 43.867,
  },
  {
    name: "Merseburg",
    lat: 51.3544,
    lng: 11.9928,
  },
  {
    name: "Haguenau",
    lat: 48.82,
    lng: 7.79,
  },
  {
    name: "Phra Phutthabat",
    lat: 14.7212,
    lng: 100.8047,
  },
  {
    name: "Menlo Park",
    lat: 37.4686,
    lng: -122.1672,
  },
  {
    name: "Zweibrucken",
    lat: 49.2494,
    lng: 7.3608,
  },
  {
    name: "Vibo Valentia",
    lat: 38.6666,
    lng: 16.1,
  },
  {
    name: "Biharamulo",
    lat: -2.6296,
    lng: 31.31,
  },
  {
    name: "Sun Prairie",
    lat: 43.1827,
    lng: -89.2358,
  },
  {
    name: "Bugojno",
    lat: 44.0572,
    lng: 17.4508,
  },
  {
    name: "New City",
    lat: 41.1543,
    lng: -73.9909,
  },
  {
    name: "Cumberland",
    lat: 41.9703,
    lng: -71.4198,
  },
  {
    name: "Arcata",
    lat: 40.8615,
    lng: -124.0757,
  },
  {
    name: "Esposende",
    lat: 41.5333,
    lng: -8.7833,
  },
  {
    name: "Chacabuco",
    lat: -34.65,
    lng: -60.49,
  },
  {
    name: "Shrirangapattana",
    lat: 12.4181,
    lng: 76.6947,
  },
  {
    name: "Balingen",
    lat: 48.2731,
    lng: 8.8506,
  },
  {
    name: "Hemer",
    lat: 51.3833,
    lng: 7.7667,
  },
  {
    name: "Glastonbury",
    lat: 41.6922,
    lng: -72.5472,
  },
  {
    name: "Coventry",
    lat: 41.6933,
    lng: -71.6611,
  },
  {
    name: "Barsinghausen",
    lat: 52.3031,
    lng: 9.4606,
  },
  {
    name: "Lockport",
    lat: 43.1698,
    lng: -78.6956,
  },
  {
    name: "Boardman",
    lat: 41.0334,
    lng: -80.6671,
  },
  {
    name: "Kopavogur",
    lat: 64.1167,
    lng: -21.7667,
  },
  {
    name: "Wedel",
    lat: 53.5833,
    lng: 9.7,
  },
  {
    name: "Albany",
    lat: -35.0228,
    lng: 117.8814,
  },
  {
    name: "Marignane",
    lat: 43.416,
    lng: 5.2145,
  },
  {
    name: "Zimapan",
    lat: 20.7333,
    lng: -99.3833,
  },
  {
    name: "Banes",
    lat: 20.9697,
    lng: -75.7117,
  },
  {
    name: "Owings Mills",
    lat: 39.4115,
    lng: -76.7913,
  },
  {
    name: "Shobara",
    lat: 34.8578,
    lng: 133.0167,
  },
  {
    name: "Exmouth",
    lat: 50.62,
    lng: -3.413,
  },
  {
    name: "Pullman",
    lat: 46.734,
    lng: -117.1669,
  },
  {
    name: "Ahrensburg",
    lat: 53.6747,
    lng: 10.2411,
  },
  {
    name: "Nacogdoches",
    lat: 31.6134,
    lng: -94.6528,
  },
  {
    name: "Merauke",
    lat: -8.4932,
    lng: 140.4018,
  },
  {
    name: "Kearney",
    lat: 40.701,
    lng: -99.0834,
  },
  {
    name: "Shingu",
    lat: 33.7153,
    lng: 130.4467,
  },
  {
    name: "Ferry Pass",
    lat: 30.5203,
    lng: -87.1903,
  },
  {
    name: "Vestavia Hills",
    lat: 33.4518,
    lng: -86.7438,
  },
  {
    name: "North Ridgeville",
    lat: 41.3851,
    lng: -82.0194,
  },
  {
    name: "Steinfurt",
    lat: 52.1504,
    lng: 7.3366,
  },
  {
    name: "Windsor",
    lat: 51.4791,
    lng: -0.6095,
  },
  {
    name: "Evans",
    lat: 33.5619,
    lng: -82.1351,
  },
  {
    name: "Socorro",
    lat: 31.6384,
    lng: -106.2601,
  },
  {
    name: "Randolph",
    lat: 42.1778,
    lng: -71.0539,
  },
  {
    name: "Gladstone",
    lat: -23.8489,
    lng: 151.2625,
  },
  {
    name: "Gul'kevichi",
    lat: 45.3603,
    lng: 40.6945,
  },
  {
    name: "Dartmouth",
    lat: 41.6138,
    lng: -70.9973,
  },
  {
    name: "Vitrolles",
    lat: 43.46,
    lng: 5.2486,
  },
  {
    name: "Bogorodsk",
    lat: 56.0997,
    lng: 43.5072,
  },
  {
    name: "Znojmo",
    lat: 48.8555,
    lng: 16.0488,
  },
  {
    name: "Businga",
    lat: 3.3404,
    lng: 20.87,
  },
  {
    name: "Cambrai",
    lat: 50.1767,
    lng: 3.2356,
  },
  {
    name: "Dakota Ridge",
    lat: 39.6192,
    lng: -105.1344,
  },
  {
    name: "Shahin Dezh",
    lat: 36.6792,
    lng: 46.5667,
  },
  {
    name: "Redmond",
    lat: 44.2631,
    lng: -121.1798,
  },
  {
    name: "Valuyki",
    lat: 50.1833,
    lng: 38.1167,
  },
  {
    name: "Firestone",
    lat: 40.1563,
    lng: -104.9494,
  },
  {
    name: "Carmel",
    lat: 41.3898,
    lng: -73.7239,
  },
  {
    name: "Cravinhos",
    lat: -21.3403,
    lng: -47.7294,
  },
  {
    name: "Goshen",
    lat: 41.5743,
    lng: -85.8308,
  },
  {
    name: "Russellville",
    lat: 35.2763,
    lng: -93.1383,
  },
  {
    name: "Nowy Targ",
    lat: 49.4833,
    lng: 20.0333,
  },
  {
    name: "Romans-sur-Isere",
    lat: 45.0464,
    lng: 5.0517,
  },
  {
    name: "Grass Valley",
    lat: 39.2237,
    lng: -121.0521,
  },
  {
    name: "Kamaishi",
    lat: 39.2758,
    lng: 141.8856,
  },
  {
    name: "Menen",
    lat: 50.7956,
    lng: 3.1217,
  },
  {
    name: "Tuquerres",
    lat: 1.09,
    lng: -77.6199,
  },
  {
    name: "Geldern",
    lat: 51.5197,
    lng: 6.3325,
  },
  {
    name: "Viernheim",
    lat: 49.538,
    lng: 8.5792,
  },
  {
    name: "Parkland",
    lat: 26.3218,
    lng: -80.2533,
  },
  {
    name: "Wickford",
    lat: 51.6114,
    lng: 0.5207,
  },
  {
    name: "Six-Fours-les-Plages",
    lat: 43.1009,
    lng: 5.82,
  },
  {
    name: "Binche",
    lat: 50.4103,
    lng: 4.1652,
  },
  {
    name: "Bariri",
    lat: -22.0744,
    lng: -48.7403,
  },
  {
    name: "Goch",
    lat: 51.6839,
    lng: 6.1619,
  },
  {
    name: "Franklin",
    lat: 42.0862,
    lng: -71.4113,
  },
  {
    name: "San Antonio de los Banos",
    lat: 22.8889,
    lng: -82.4989,
  },
  {
    name: "Kennesaw",
    lat: 34.026,
    lng: -84.6177,
  },
  {
    name: "Victoria Falls",
    lat: -17.9333,
    lng: 25.8333,
  },
  {
    name: "Spruce Grove",
    lat: 53.545,
    lng: -113.9008,
  },
  {
    name: "Villena",
    lat: 38.635,
    lng: -0.8658,
  },
  {
    name: "Osawa",
    lat: 33.2067,
    lng: 130.3839,
  },
  {
    name: "Adelanto",
    lat: 34.5815,
    lng: -117.4397,
  },
  {
    name: "Irvine",
    lat: 55.6201,
    lng: -4.6614,
  },
  {
    name: "Carlsbad",
    lat: 32.4011,
    lng: -104.2389,
  },
  {
    name: "Puerto Berrio",
    lat: 6.4804,
    lng: -74.42,
  },
  {
    name: "Deggendorf",
    lat: 48.8353,
    lng: 12.9644,
  },
  {
    name: "University Place",
    lat: 47.2147,
    lng: -122.5461,
  },
  {
    name: "Baltiysk",
    lat: 54.65,
    lng: 19.9167,
  },
  {
    name: "Douglasville",
    lat: 33.7384,
    lng: -84.7065,
  },
  {
    name: "Salisbury",
    lat: 35.6656,
    lng: -80.4909,
  },
  {
    name: "Sakaiminato",
    lat: 35.5397,
    lng: 133.2317,
  },
  {
    name: "Ronda",
    lat: 36.7372,
    lng: -5.1647,
  },
  {
    name: "Furmanov",
    lat: 57.25,
    lng: 41.1,
  },
  {
    name: "Laramie",
    lat: 41.3099,
    lng: -105.6085,
  },
  {
    name: "Nizhneudinsk",
    lat: 54.9,
    lng: 99.0167,
  },
  {
    name: "Lake Stevens",
    lat: 48.0028,
    lng: -122.096,
  },
  {
    name: "Valparaiso",
    lat: 41.4782,
    lng: -87.0507,
  },
  {
    name: "Moose Jaw",
    lat: 50.3933,
    lng: -105.5519,
  },
  {
    name: "Fairborn",
    lat: 39.801,
    lng: -84.0093,
  },
  {
    name: "Ban Pak Phun",
    lat: 8.5391,
    lng: 99.9702,
  },
  {
    name: "Estero",
    lat: 26.4277,
    lng: -81.7951,
  },
  {
    name: "Mason",
    lat: 39.3571,
    lng: -84.3023,
  },
  {
    name: "Uelzen",
    lat: 52.9647,
    lng: 10.5658,
  },
  {
    name: "Bell Ville",
    lat: -32.6333,
    lng: -62.6833,
  },
  {
    name: "Cottonwood Heights",
    lat: 40.6137,
    lng: -111.8144,
  },
  {
    name: "Sonoma",
    lat: 38.2902,
    lng: -122.4598,
  },
  {
    name: "Luuq",
    lat: 3.8005,
    lng: 42.55,
  },
  {
    name: "Falls",
    lat: 40.1686,
    lng: -74.7915,
  },
  {
    name: "Geraardsbergen",
    lat: 50.7667,
    lng: 3.8667,
  },
  {
    name: "French Valley",
    lat: 33.5998,
    lng: -117.1069,
  },
  {
    name: "Ken Caryl",
    lat: 39.577,
    lng: -105.1144,
  },
  {
    name: "Galesburg",
    lat: 40.9506,
    lng: -90.3763,
  },
  {
    name: "Penticton",
    lat: 49.4911,
    lng: -119.5886,
  },
  {
    name: "Gimbi",
    lat: 9.1667,
    lng: 35.8333,
  },
  {
    name: "Belen",
    lat: 36.4917,
    lng: 36.1917,
  },
  {
    name: "Kaneohe",
    lat: 21.4062,
    lng: -157.7904,
  },
  {
    name: "Chilecito",
    lat: -29.1667,
    lng: -67.5,
  },
  {
    name: "Wakabadai",
    lat: 45.4,
    lng: 141.7,
  },
  {
    name: "Teykovo",
    lat: 56.85,
    lng: 40.55,
  },
  {
    name: "Sukhoy Log",
    lat: 56.9167,
    lng: 62.05,
  },
  {
    name: "Vyatskiye Polyany",
    lat: 56.2184,
    lng: 51.0686,
  },
  {
    name: "Mosonmagyarovar",
    lat: 47.8667,
    lng: 17.2667,
  },
  {
    name: "Warsaw",
    lat: 41.2448,
    lng: -85.8464,
  },
  {
    name: "Fatehpur Sikri",
    lat: 27.0911,
    lng: 77.6611,
  },
  {
    name: "Korschenbroich",
    lat: 51.1833,
    lng: 6.5167,
  },
  {
    name: "Korsakov",
    lat: 46.6333,
    lng: 142.7667,
  },
  {
    name: "Ibate",
    lat: -21.955,
    lng: -47.9969,
  },
  {
    name: "Lebowakgomo",
    lat: -24.305,
    lng: 29.565,
  },
  {
    name: "Mildura",
    lat: -34.1889,
    lng: 142.1583,
  },
  {
    name: "Riverhead",
    lat: 40.9409,
    lng: -72.7095,
  },
  {
    name: "San Dimas",
    lat: 34.1082,
    lng: -117.809,
  },
  {
    name: "Kuji",
    lat: 40.1903,
    lng: 141.7753,
  },
  {
    name: "Rheinfelden (Baden)",
    lat: 47.5611,
    lng: 7.7917,
  },
  {
    name: "Ayvacik",
    lat: 39.6011,
    lng: 26.4047,
  },
  {
    name: "Zhitiqara",
    lat: 52.1902,
    lng: 61.1989,
  },
  {
    name: "Ciudad Tecun Uman",
    lat: 14.6833,
    lng: -92.1333,
  },
  {
    name: "Dana Point",
    lat: 33.4733,
    lng: -117.6968,
  },
  {
    name: "Ipero",
    lat: -23.3503,
    lng: -47.6886,
  },
  {
    name: "Panjakent",
    lat: 39.5031,
    lng: 67.615,
  },
  {
    name: "Port Moody",
    lat: 49.2831,
    lng: -122.8317,
  },
  {
    name: "Castro",
    lat: -42.4824,
    lng: -73.7643,
  },
  {
    name: "Oyama",
    lat: 35.2719,
    lng: 139.5864,
  },
  {
    name: "Slobodskoy",
    lat: 58.7242,
    lng: 50.1612,
  },
  {
    name: "Midlothian",
    lat: 32.4668,
    lng: -96.9892,
  },
  {
    name: "Newark",
    lat: 39.6776,
    lng: -75.7573,
  },
  {
    name: "Derry",
    lat: 42.8888,
    lng: -71.2804,
  },
  {
    name: "Alamogordo",
    lat: 32.8837,
    lng: -105.9624,
  },
  {
    name: "Shiroishi",
    lat: 38.0022,
    lng: 140.6197,
  },
  {
    name: "Kasulu",
    lat: -4.5767,
    lng: 30.1025,
  },
  {
    name: "Alabaster",
    lat: 33.2198,
    lng: -86.8225,
  },
  {
    name: "Hlukhiv",
    lat: 51.6765,
    lng: 33.9078,
  },
  {
    name: "Qarqan",
    lat: 38.1338,
    lng: 85.5333,
  },
  {
    name: "Lexington",
    lat: 42.4456,
    lng: -71.2307,
  },
  {
    name: "Pribram",
    lat: 49.69,
    lng: 14.0105,
  },
  {
    name: "Kaizu",
    lat: 35.2206,
    lng: 136.6367,
  },
  {
    name: "Deer Park",
    lat: 29.6898,
    lng: -95.1151,
  },
  {
    name: "Dumfries",
    lat: 55.07,
    lng: -3.603,
  },
  {
    name: "Navodari",
    lat: 44.3208,
    lng: 28.6125,
  },
  {
    name: "Nokia",
    lat: 61.4778,
    lng: 23.5097,
  },
  {
    name: "Woodridge",
    lat: 41.7368,
    lng: -88.0408,
  },
  {
    name: "Biberach",
    lat: 48.0981,
    lng: 9.7886,
  },
  {
    name: "Southport",
    lat: -27.9667,
    lng: 153.4,
  },
  {
    name: "Pikesville",
    lat: 39.3893,
    lng: -76.702,
  },
  {
    name: "Bridgeton",
    lat: 39.4286,
    lng: -75.2281,
  },
  {
    name: "Greer",
    lat: 34.9313,
    lng: -82.2315,
  },
  {
    name: "Tayshet",
    lat: 55.9333,
    lng: 98.0167,
  },
  {
    name: "Umaria",
    lat: 23.5245,
    lng: 80.8365,
  },
  {
    name: "Tavda",
    lat: 58.05,
    lng: 65.2667,
  },
  {
    name: "Vac",
    lat: 47.7753,
    lng: 19.1311,
  },
  {
    name: "Police",
    lat: 53.55,
    lng: 14.5708,
  },
  {
    name: "Zgorzelec",
    lat: 51.1528,
    lng: 15,
  },
  {
    name: "Tynda",
    lat: 55.15,
    lng: 124.7167,
  },
  {
    name: "Springville",
    lat: 40.1638,
    lng: -111.6206,
  },
  {
    name: "Obukhiv",
    lat: 50.1,
    lng: 30.6167,
  },
  {
    name: "Espinho",
    lat: 41.01,
    lng: -8.64,
  },
  {
    name: "Canavieiras",
    lat: -15.675,
    lng: -38.9472,
  },
  {
    name: "Saratoga Springs",
    lat: 40.3449,
    lng: -111.9152,
  },
  {
    name: "Levice",
    lat: 48.2136,
    lng: 18.6069,
  },
  {
    name: "Dimona",
    lat: 31.07,
    lng: 35.03,
  },
  {
    name: "Temascalapa",
    lat: 19.8,
    lng: -98.9,
  },
  {
    name: "Shatura",
    lat: 55.5667,
    lng: 39.5333,
  },
  {
    name: "Bragado",
    lat: -35.1167,
    lng: -60.5,
  },
  {
    name: "Copperas Cove",
    lat: 31.1192,
    lng: -97.914,
  },
  {
    name: "Epsom",
    lat: 51.336,
    lng: -0.267,
  },
  {
    name: "Bou Ahmed",
    lat: 33.1119,
    lng: -7.4058,
  },
  {
    name: "Motherwell",
    lat: 55.7839,
    lng: -3.9852,
  },
  {
    name: "American Fork",
    lat: 40.3792,
    lng: -111.7952,
  },
  {
    name: "Franklin",
    lat: 41.1101,
    lng: -74.5886,
  },
  {
    name: "Bad Nauheim",
    lat: 50.3667,
    lng: 8.75,
  },
  {
    name: "Motosu",
    lat: 35.4831,
    lng: 136.6786,
  },
  {
    name: "Andover",
    lat: 45.2571,
    lng: -93.3265,
  },
  {
    name: "Matthews",
    lat: 35.1195,
    lng: -80.7101,
  },
  {
    name: "Plaisir",
    lat: 48.8183,
    lng: 1.9472,
  },
  {
    name: "De Aar",
    lat: -30.65,
    lng: 24.0167,
  },
  {
    name: "Djenne",
    lat: 13.9,
    lng: -4.55,
  },
  {
    name: "Oiso",
    lat: 35.3069,
    lng: 139.3114,
  },
  {
    name: "Yorii",
    lat: 36.1183,
    lng: 139.1931,
  },
  {
    name: "Mushie",
    lat: -3.0196,
    lng: 16.92,
  },
  {
    name: "Liptovsky Mikulas",
    lat: 49.0811,
    lng: 19.6181,
  },
  {
    name: "Sarikaya",
    lat: 39.4936,
    lng: 35.3769,
  },
  {
    name: "Woodstock",
    lat: 34.1026,
    lng: -84.509,
  },
  {
    name: "Forbe Oroya",
    lat: -11.5333,
    lng: -75.9,
  },
  {
    name: "Bardejov",
    lat: 49.295,
    lng: 21.2758,
  },
  {
    name: "Descalvado",
    lat: -21.9039,
    lng: -47.6189,
  },
  {
    name: "Fallbrook",
    lat: 33.3693,
    lng: -117.2259,
  },
  {
    name: "Itzehoe",
    lat: 53.925,
    lng: 9.5164,
  },
  {
    name: "Florence",
    lat: 38.99,
    lng: -84.647,
  },
  {
    name: "Glossop",
    lat: 53.443,
    lng: -1.949,
  },
  {
    name: "Fruit Cove",
    lat: 30.0972,
    lng: -81.6176,
  },
  {
    name: "Julich",
    lat: 50.9222,
    lng: 6.3583,
  },
  {
    name: "Leamington",
    lat: 42.0667,
    lng: -82.5833,
  },
  {
    name: "Lampertheim",
    lat: 49.5942,
    lng: 8.4671,
  },
  {
    name: "Chernushka",
    lat: 56.5,
    lng: 56.0833,
  },
  {
    name: "Reggane",
    lat: 26.7,
    lng: 0.1666,
  },
  {
    name: "Winsford",
    lat: 53.194,
    lng: -2.52,
  },
  {
    name: "Bernburg",
    lat: 51.8,
    lng: 11.7333,
  },
  {
    name: "Northbrook",
    lat: 42.1292,
    lng: -87.8353,
  },
  {
    name: "Baragua",
    lat: 21.6819,
    lng: -78.6244,
  },
  {
    name: "Wernigerode",
    lat: 51.835,
    lng: 10.7853,
  },
  {
    name: "Odacho-oda",
    lat: 35.1922,
    lng: 132.4997,
  },
  {
    name: "Ozd",
    lat: 48.2192,
    lng: 20.2869,
  },
  {
    name: "Salina",
    lat: 43.1031,
    lng: -76.1758,
  },
  {
    name: "Trekhgornyy",
    lat: 54.8,
    lng: 58.45,
  },
  {
    name: "Nagato",
    lat: 34.3711,
    lng: 131.1822,
  },
  {
    name: "Forchheim",
    lat: 49.7197,
    lng: 11.0581,
  },
  {
    name: "St. Charles",
    lat: 41.9193,
    lng: -88.3109,
  },
  {
    name: "Kolin",
    lat: 50.0282,
    lng: 15.2006,
  },
  {
    name: "Zentsujicho",
    lat: 34.2283,
    lng: 133.7872,
  },
  {
    name: "Santa Cruz das Palmeiras",
    lat: -21.8269,
    lng: -47.2489,
  },
  {
    name: "San Luis",
    lat: 32.4911,
    lng: -114.7089,
  },
  {
    name: "Fairmont",
    lat: 39.4768,
    lng: -80.1491,
  },
  {
    name: "Naumburg",
    lat: 51.1521,
    lng: 11.8098,
  },
  {
    name: "Baraawe",
    lat: 1.1133,
    lng: 44.0303,
  },
  {
    name: "Safita",
    lat: 34.8208,
    lng: 36.1173,
  },
  {
    name: "Kaarina",
    lat: 60.4069,
    lng: 22.3722,
  },
  {
    name: "Sao Miguel Arcanjo",
    lat: -23.8778,
    lng: -47.9969,
  },
  {
    name: "Ylojarvi",
    lat: 61.55,
    lng: 23.5833,
  },
  {
    name: "Vechta",
    lat: 52.7306,
    lng: 8.2886,
  },
  {
    name: "Lawrence",
    lat: 40.2954,
    lng: -74.7205,
  },
  {
    name: "Altenburg",
    lat: 50.985,
    lng: 12.4333,
  },
  {
    name: "Namegata",
    lat: 35.9903,
    lng: 140.4892,
  },
  {
    name: "Nurlat",
    lat: 54.4333,
    lng: 50.8,
  },
  {
    name: "Yashiki",
    lat: 32.7914,
    lng: 130.8164,
  },
  {
    name: "Chancay",
    lat: -11.5653,
    lng: -77.2714,
  },
  {
    name: "Dobryanka",
    lat: 58.45,
    lng: 56.4167,
  },
  {
    name: "Ridgecrest",
    lat: 35.6308,
    lng: -117.6621,
  },
  {
    name: "East Kelowna",
    lat: 49.8625,
    lng: -119.5833,
  },
  {
    name: "Godollo",
    lat: 47.6,
    lng: 19.3667,
  },
  {
    name: "Redcliff",
    lat: -19.0333,
    lng: 29.7833,
  },
  {
    name: "Ostrogozhsk",
    lat: 50.8667,
    lng: 39.0667,
  },
  {
    name: "Shimotoba",
    lat: 34.8839,
    lng: 135.6628,
  },
  {
    name: "Mioveni",
    lat: 44.9553,
    lng: 24.9356,
  },
  {
    name: "Lower Makefield",
    lat: 40.2309,
    lng: -74.855,
  },
  {
    name: "Shimizucho",
    lat: 35.0992,
    lng: 138.9028,
  },
  {
    name: "Massillon",
    lat: 40.7838,
    lng: -81.5254,
  },
  {
    name: "Kulebaki",
    lat: 55.4167,
    lng: 42.5167,
  },
  {
    name: "Rethymno",
    lat: 35.3667,
    lng: 24.4667,
  },
  {
    name: "Starkville",
    lat: 33.4608,
    lng: -88.8297,
  },
  {
    name: "Horizon West",
    lat: 28.4417,
    lng: -81.6145,
  },
  {
    name: "Slantsy",
    lat: 59.1167,
    lng: 28.0833,
  },
  {
    name: "Kuroishi",
    lat: 40.6428,
    lng: 140.5944,
  },
  {
    name: "Louvain-la-Neuve",
    lat: 50.6696,
    lng: 4.6112,
  },
  {
    name: "Tawaramoto",
    lat: 34.5567,
    lng: 135.795,
  },
  {
    name: "Osvaldo Cruz",
    lat: -21.7967,
    lng: -50.8786,
  },
  {
    name: "Yawatahama-shi",
    lat: 33.4631,
    lng: 132.4233,
  },
  {
    name: "La Calera",
    lat: -31.3439,
    lng: -64.3353,
  },
  {
    name: "Hoyerswerda",
    lat: 51.4331,
    lng: 14.25,
  },
  {
    name: "Warminster",
    lat: 40.2043,
    lng: -75.0915,
  },
  {
    name: "Staryy Beyneu",
    lat: 45.1834,
    lng: 55.1,
  },
  {
    name: "Chatellerault",
    lat: 46.8178,
    lng: 0.5461,
  },
  {
    name: "Maputsoe",
    lat: -28.8833,
    lng: 27.9,
  },
  {
    name: "Landecy",
    lat: 46.1897,
    lng: 6.1158,
  },
  {
    name: "Harker Heights",
    lat: 31.0572,
    lng: -97.6445,
  },
  {
    name: "Mohyliv-Podil's'kyy",
    lat: 48.45,
    lng: 27.7833,
  },
  {
    name: "Cachoeira Paulista",
    lat: -22.665,
    lng: -45.0094,
  },
  {
    name: "Georgsmarienhutte",
    lat: 52.2031,
    lng: 8.0447,
  },
  {
    name: "Castro-Urdiales",
    lat: 43.3844,
    lng: -3.215,
  },
  {
    name: "Elk Grove Village",
    lat: 42.0063,
    lng: -87.9921,
  },
  {
    name: "Furstenwalde",
    lat: 52.3667,
    lng: 14.0667,
  },
  {
    name: "Komagane",
    lat: 35.7289,
    lng: 137.9339,
  },
  {
    name: "Kaysville",
    lat: 41.029,
    lng: -111.9456,
  },
  {
    name: "Guararapes",
    lat: -21.2608,
    lng: -50.6428,
  },
  {
    name: "Achim",
    lat: 53.013,
    lng: 9.033,
  },
  {
    name: "Southlake",
    lat: 32.9545,
    lng: -97.1503,
  },
  {
    name: "Kristianstad",
    lat: 56.0337,
    lng: 14.1333,
  },
  {
    name: "Maebara",
    lat: 35.1142,
    lng: 140.0989,
  },
  {
    name: "Savage",
    lat: 44.7544,
    lng: -93.3631,
  },
  {
    name: "Redan",
    lat: 33.7394,
    lng: -84.1644,
  },
  {
    name: "Des Moines",
    lat: 47.3915,
    lng: -122.3157,
  },
  {
    name: "Ferrenafe",
    lat: -6.6391,
    lng: -79.788,
  },
  {
    name: "Bethel Park",
    lat: 40.3239,
    lng: -80.0364,
  },
  {
    name: "Ra's Gharib",
    lat: 28.3597,
    lng: 33.0775,
  },
  {
    name: "East Lake",
    lat: 28.1205,
    lng: -82.6868,
  },
  {
    name: "Kahului",
    lat: 20.8715,
    lng: -156.4603,
  },
  {
    name: "Cheb",
    lat: 50.0798,
    lng: 12.374,
  },
  {
    name: "Dreux",
    lat: 48.7372,
    lng: 1.3664,
  },
  {
    name: "Warwick",
    lat: 52.28,
    lng: -1.59,
  },
  {
    name: "Mangur",
    lat: 17.9373,
    lng: 80.8185,
  },
  {
    name: "Ribeira Grande",
    lat: 37.8167,
    lng: -25.5167,
  },
  {
    name: "Ilhabela",
    lat: -23.7778,
    lng: -45.3578,
  },
  {
    name: "Koupela",
    lat: 12.177,
    lng: -0.356,
  },
  {
    name: "Capulhuac",
    lat: 19.2,
    lng: -99.4667,
  },
  {
    name: "Dania Beach",
    lat: 26.0594,
    lng: -80.1637,
  },
  {
    name: "Ayabe",
    lat: 35.2989,
    lng: 135.2586,
  },
  {
    name: "Oer-Erkenschwick",
    lat: 51.6422,
    lng: 7.2508,
  },
  {
    name: "Katagami",
    lat: 39.8833,
    lng: 139.9889,
  },
  {
    name: "Bowling Green",
    lat: 41.3773,
    lng: -83.65,
  },
  {
    name: "Primorsko-Akhtarsk",
    lat: 46.05,
    lng: 38.1833,
  },
  {
    name: "Pedana",
    lat: 16.2667,
    lng: 81.1667,
  },
  {
    name: "Mirnyy",
    lat: 62.7603,
    lng: 40.3353,
  },
  {
    name: "Novovoronezh",
    lat: 51.3167,
    lng: 39.2167,
  },
  {
    name: "Whitstable",
    lat: 51.361,
    lng: 1.026,
  },
  {
    name: "Uglich",
    lat: 57.5333,
    lng: 38.3333,
  },
  {
    name: "Coos Bay",
    lat: 43.3789,
    lng: -124.233,
  },
  {
    name: "Smithfield",
    lat: 35.5131,
    lng: -78.3497,
  },
  {
    name: "Delbruck",
    lat: 51.7667,
    lng: 8.5667,
  },
  {
    name: "Sechura",
    lat: -5.5576,
    lng: -80.8223,
  },
  {
    name: "Spanaway",
    lat: 47.0979,
    lng: -122.4233,
  },
  {
    name: "Yaguaron",
    lat: -25.5621,
    lng: -57.284,
  },
  {
    name: "Clarence",
    lat: 43.0196,
    lng: -78.6375,
  },
  {
    name: "Yuzhne",
    lat: 46.6222,
    lng: 31.1008,
  },
  {
    name: "Clearfield",
    lat: 41.103,
    lng: -112.0237,
  },
  {
    name: "Serdobsk",
    lat: 52.4667,
    lng: 44.2167,
  },
  {
    name: "Zapala",
    lat: -38.9028,
    lng: -70.065,
  },
  {
    name: "Shima",
    lat: 39.5547,
    lng: 141.1678,
  },
  {
    name: "Liberty",
    lat: 39.2394,
    lng: -94.4191,
  },
  {
    name: "Marrero",
    lat: 29.8871,
    lng: -90.1127,
  },
  {
    name: "Atotonilco de Tula",
    lat: 20.05,
    lng: -99.1833,
  },
  {
    name: "El Golea",
    lat: 30.5666,
    lng: 2.8833,
  },
  {
    name: "Pekin",
    lat: 40.5679,
    lng: -89.6262,
  },
  {
    name: "Westlake",
    lat: 41.4524,
    lng: -81.9295,
  },
  {
    name: "Centereach",
    lat: 40.8696,
    lng: -73.0808,
  },
  {
    name: "Herrenberg",
    lat: 48.5967,
    lng: 8.8708,
  },
  {
    name: "Manlius",
    lat: 43.049,
    lng: -75.9793,
  },
  {
    name: "Chillicothe",
    lat: 39.3393,
    lng: -82.9937,
  },
  {
    name: "Pativilca",
    lat: -10.6996,
    lng: -77.8,
  },
  {
    name: "La Verne",
    lat: 34.1208,
    lng: -117.7702,
  },
  {
    name: "Lower Macungie",
    lat: 40.5303,
    lng: -75.57,
  },
  {
    name: "Jaral del Progreso",
    lat: 20.3667,
    lng: -101.0667,
  },
  {
    name: "Santa Rita",
    lat: 10.5367,
    lng: -71.5108,
  },
  {
    name: "Placerville",
    lat: 38.7308,
    lng: -120.7978,
  },
  {
    name: "Nanyuki",
    lat: 0.0167,
    lng: 37.0667,
  },
  {
    name: "Sakhnin",
    lat: 32.8667,
    lng: 35.3,
  },
  {
    name: "Turicato",
    lat: 19.05,
    lng: -101.4167,
  },
  {
    name: "Grajau",
    lat: -5.8194,
    lng: -46.1386,
  },
  {
    name: "El Oro de Hidalgo",
    lat: 19.8008,
    lng: -100.1314,
  },
  {
    name: "I`zaz",
    lat: 36.5888,
    lng: 37.0441,
  },
  {
    name: "Touba",
    lat: 8.2833,
    lng: -7.6833,
  },
  {
    name: "Dandenong",
    lat: -37.981,
    lng: 145.215,
  },
  {
    name: "Martinsville",
    lat: 36.6827,
    lng: -79.8636,
  },
  {
    name: "Gevelsberg",
    lat: 51.3265,
    lng: 7.3559,
  },
  {
    name: "Rome",
    lat: 43.226,
    lng: -75.4909,
  },
  {
    name: "Val-d'Or",
    lat: 48.1,
    lng: -77.7833,
  },
  {
    name: "Pueblo West",
    lat: 38.3551,
    lng: -104.7266,
  },
  {
    name: "Central Islip",
    lat: 40.7837,
    lng: -73.1945,
  },
  {
    name: "Buzovna",
    lat: 40.5167,
    lng: 50.1167,
  },
  {
    name: "Owen Sound",
    lat: 44.5667,
    lng: -80.9333,
  },
  {
    name: "Velikiy Ustyug",
    lat: 60.7589,
    lng: 46.3039,
  },
  {
    name: "Yaita",
    lat: 36.8067,
    lng: 139.9242,
  },
  {
    name: "Chum Phae",
    lat: 16.5431,
    lng: 102.1104,
  },
  {
    name: "Temascaltepec de Gonzalez",
    lat: 19.0433,
    lng: -100.0414,
  },
  {
    name: "Kyzyl-Kyya",
    lat: 40.25,
    lng: 72.1167,
  },
  {
    name: "Kasimov",
    lat: 54.9583,
    lng: 41.3972,
  },
  {
    name: "Radnor",
    lat: 40.0287,
    lng: -75.3675,
  },
  {
    name: "Haan",
    lat: 51.1931,
    lng: 7.0131,
  },
  {
    name: "Omaezaki",
    lat: 34.6381,
    lng: 138.1281,
  },
  {
    name: "Kulat",
    lat: -8.7151,
    lng: 115.1841,
  },
  {
    name: "Radolfzell am Bodensee",
    lat: 47.7369,
    lng: 8.9697,
  },
  {
    name: "Kotovsk",
    lat: 52.5833,
    lng: 41.5,
  },
  {
    name: "Weil am Rhein",
    lat: 47.5947,
    lng: 7.6108,
  },
  {
    name: "Prairieville",
    lat: 30.3151,
    lng: -90.9571,
  },
  {
    name: "Balyqshy",
    lat: 47.0666,
    lng: 51.8666,
  },
  {
    name: "Jesus Maria",
    lat: -30.9817,
    lng: -64.0942,
  },
  {
    name: "Zepce",
    lat: 44.4333,
    lng: 18.0333,
  },
  {
    name: "Bedworth",
    lat: 52.475,
    lng: -1.477,
  },
  {
    name: "Sasaguri",
    lat: 33.6156,
    lng: 130.5511,
  },
  {
    name: "Tecozautla",
    lat: 20.5333,
    lng: -99.6333,
  },
  {
    name: "Jacareacanga",
    lat: -6.2222,
    lng: -57.7528,
  },
  {
    name: "Villarrica",
    lat: -39.28,
    lng: -72.23,
  },
  {
    name: "Morro Agudo",
    lat: -20.7314,
    lng: -48.0578,
  },
  {
    name: "Kreuztal",
    lat: 50.962,
    lng: 8.0064,
  },
  {
    name: "Kanzakimachi-kanzaki",
    lat: 33.3108,
    lng: 130.3731,
  },
  {
    name: "Mae Sot",
    lat: 16.7101,
    lng: 98.5707,
  },
  {
    name: "Spring Valley",
    lat: 32.7316,
    lng: -116.9766,
  },
  {
    name: "Oudenaarde",
    lat: 50.85,
    lng: 3.6,
  },
  {
    name: "Bel Air North",
    lat: 39.5544,
    lng: -76.3733,
  },
  {
    name: "Maubeuge",
    lat: 50.2775,
    lng: 3.9734,
  },
  {
    name: "Hopkinsville",
    lat: 36.8386,
    lng: -87.4776,
  },
  {
    name: "Zima",
    lat: 53.9167,
    lng: 102.05,
  },
  {
    name: "Kosonsoy",
    lat: 41.2492,
    lng: 71.5458,
  },
  {
    name: "Willingboro",
    lat: 40.028,
    lng: -74.8882,
  },
  {
    name: "Kaminokawa",
    lat: 36.4392,
    lng: 139.91,
  },
  {
    name: "Rochester",
    lat: 43.299,
    lng: -70.9787,
  },
  {
    name: "Marks",
    lat: 51.7,
    lng: 46.75,
  },
  {
    name: "Rheinberg",
    lat: 51.5467,
    lng: 6.6006,
  },
  {
    name: "Kostopil'",
    lat: 50.8833,
    lng: 26.4431,
  },
  {
    name: "Santa Fe do Sul",
    lat: -20.2108,
    lng: -50.9258,
  },
  {
    name: "Deinze",
    lat: 50.9833,
    lng: 3.5272,
  },
  {
    name: "Save",
    lat: 8.0342,
    lng: 2.4866,
  },
  {
    name: "Saint-Medard-en-Jalles",
    lat: 44.8964,
    lng: -0.7164,
  },
  {
    name: "Geesthacht",
    lat: 53.4381,
    lng: 10.3747,
  },
  {
    name: "Milledgeville",
    lat: 33.0874,
    lng: -83.2414,
  },
  {
    name: "Stratford",
    lat: 43.3708,
    lng: -80.9819,
  },
  {
    name: "Yingyangcun",
    lat: 22.0974,
    lng: 106.7567,
  },
  {
    name: "Syracuse",
    lat: 41.086,
    lng: -112.0698,
  },
  {
    name: "Netivot",
    lat: 31.4167,
    lng: 34.5833,
  },
  {
    name: "Eldersburg",
    lat: 39.4041,
    lng: -76.9529,
  },
  {
    name: "Aracoiaba da Serra",
    lat: -23.5053,
    lng: -47.6142,
  },
  {
    name: "Barrinha",
    lat: -21.1936,
    lng: -48.1639,
  },
  {
    name: "Trebinje",
    lat: 42.7089,
    lng: 18.3217,
  },
  {
    name: "Tiquipaya",
    lat: -17.3381,
    lng: -66.2189,
  },
  {
    name: "Sherwood",
    lat: 34.8508,
    lng: -92.2028,
  },
  {
    name: "Quesada",
    lat: 10.3305,
    lng: -84.44,
  },
  {
    name: "Lloydminster",
    lat: 53.2783,
    lng: -110.005,
  },
  {
    name: "Garner",
    lat: 35.6934,
    lng: -78.6196,
  },
  {
    name: "Key West",
    lat: 24.5637,
    lng: -81.7768,
  },
  {
    name: "Cauquenes",
    lat: -35.9671,
    lng: -72.3154,
  },
  {
    name: "Pointe-Claire",
    lat: 45.45,
    lng: -73.8167,
  },
  {
    name: "Kudymkar",
    lat: 59.0167,
    lng: 54.6667,
  },
  {
    name: "Skelleftea",
    lat: 64.7721,
    lng: 20.95,
  },
  {
    name: "Yunoshima",
    lat: 35.8058,
    lng: 137.2442,
  },
  {
    name: "Petersburg",
    lat: 37.2043,
    lng: -77.3913,
  },
  {
    name: "Al Husayniyah",
    lat: 30.8611,
    lng: 31.9198,
  },
  {
    name: "North Olmsted",
    lat: 41.415,
    lng: -81.919,
  },
  {
    name: "Kandalaksha",
    lat: 67.1569,
    lng: 32.4117,
  },
  {
    name: "Wheat Ridge",
    lat: 39.7728,
    lng: -105.1029,
  },
  {
    name: "Pontes e Lacerda",
    lat: -15.2196,
    lng: -59.35,
  },
  {
    name: "Ono",
    lat: 35.9806,
    lng: 136.4875,
  },
  {
    name: "Masaki",
    lat: 33.7875,
    lng: 132.7114,
  },
  {
    name: "Cibolo",
    lat: 29.5639,
    lng: -98.2123,
  },
  {
    name: "Buurhakaba",
    lat: 2.7837,
    lng: 44.0833,
  },
  {
    name: "Marovoay",
    lat: -16.0995,
    lng: 46.6333,
  },
  {
    name: "Dracut",
    lat: 42.6832,
    lng: -71.301,
  },
  {
    name: "Uran",
    lat: 18.89,
    lng: 72.95,
  },
  {
    name: "Biritiba-Mirim",
    lat: -23.5728,
    lng: -46.0389,
  },
  {
    name: "Alliance",
    lat: 40.9107,
    lng: -81.1189,
  },
  {
    name: "Lukow",
    lat: 51.9167,
    lng: 22.3833,
  },
  {
    name: "Banning",
    lat: 33.946,
    lng: -116.8992,
  },
  {
    name: "Burgess Hill",
    lat: 50.9535,
    lng: -0.1262,
  },
  {
    name: "Tsuruno",
    lat: 40.8089,
    lng: 140.38,
  },
  {
    name: "Laguna Hills",
    lat: 33.592,
    lng: -117.6992,
  },
  {
    name: "Lagos",
    lat: 37.1,
    lng: -8.6667,
  },
  {
    name: "Bogoroditsk",
    lat: 53.7667,
    lng: 38.1333,
  },
  {
    name: "Lushnje",
    lat: 40.9333,
    lng: 19.7,
  },
  {
    name: "Princeton",
    lat: 40.3563,
    lng: -74.6693,
  },
  {
    name: "Athens",
    lat: 34.7847,
    lng: -86.951,
  },
  {
    name: "Falmouth",
    lat: 41.5915,
    lng: -70.5914,
  },
  {
    name: "Werl",
    lat: 51.5528,
    lng: 7.9139,
  },
  {
    name: "Warwick",
    lat: 41.2598,
    lng: -74.3615,
  },
  {
    name: "Loughton",
    lat: 51.6494,
    lng: 0.0735,
  },
  {
    name: "Orillia",
    lat: 44.6,
    lng: -79.4167,
  },
  {
    name: "Tokmak",
    lat: 47.2514,
    lng: 35.7058,
  },
  {
    name: "Chitral",
    lat: 35.8511,
    lng: 71.7889,
  },
  {
    name: "Candido Mota",
    lat: -22.7464,
    lng: -50.3869,
  },
  {
    name: "Bramsche",
    lat: 52.4089,
    lng: 7.9728,
  },
  {
    name: "Springfield",
    lat: 38.7809,
    lng: -77.1839,
  },
  {
    name: "Naugatuck",
    lat: 41.489,
    lng: -73.0518,
  },
  {
    name: "Rio Grande",
    lat: -53.7914,
    lng: -67.699,
  },
  {
    name: "Columbus",
    lat: 33.5088,
    lng: -88.4096,
  },
  {
    name: "Bochnia",
    lat: 49.9833,
    lng: 20.4333,
  },
  {
    name: "Schonebeck",
    lat: 52.0167,
    lng: 11.75,
  },
  {
    name: "South Riding",
    lat: 38.912,
    lng: -77.5132,
  },
  {
    name: "Mundelein",
    lat: 42.2691,
    lng: -88.0101,
  },
  {
    name: "Lucapa",
    lat: -8.4196,
    lng: 20.74,
  },
  {
    name: "Bielawa",
    lat: 50.6908,
    lng: 16.623,
  },
  {
    name: "Cicero",
    lat: 43.1664,
    lng: -76.0661,
  },
  {
    name: "Dyurtyuli",
    lat: 55.4833,
    lng: 54.8667,
  },
  {
    name: "Harpenden",
    lat: 51.8175,
    lng: -0.3524,
  },
  {
    name: "Fair Oaks",
    lat: 38.6504,
    lng: -121.2497,
  },
  {
    name: "Tewksbury",
    lat: 42.612,
    lng: -71.2278,
  },
  {
    name: "Mocimboa da Praia",
    lat: -11.35,
    lng: 40.3333,
  },
  {
    name: "Huamachuco",
    lat: -7.8121,
    lng: -78.0487,
  },
  {
    name: "Nartkala",
    lat: 43.55,
    lng: 43.85,
  },
  {
    name: "Amircan",
    lat: 40.4236,
    lng: 49.9886,
  },
  {
    name: "Rexburg",
    lat: 43.8224,
    lng: -111.792,
  },
  {
    name: "Burgdorf",
    lat: 52.45,
    lng: 10.0083,
  },
  {
    name: "Rostov",
    lat: 57.1833,
    lng: 39.4167,
  },
  {
    name: "Ambanja",
    lat: -13.6786,
    lng: 48.4522,
  },
  {
    name: "Einbeck",
    lat: 51.8167,
    lng: 9.8667,
  },
  {
    name: "Neuruppin",
    lat: 52.9222,
    lng: 12.8,
  },
  {
    name: "Mossendjo",
    lat: -2.9458,
    lng: 12.7147,
  },
  {
    name: "Nogales",
    lat: 31.3624,
    lng: -110.9336,
  },
  {
    name: "Nicholasville",
    lat: 37.8902,
    lng: -84.5669,
  },
  {
    name: "Hirakawacho",
    lat: 40.5842,
    lng: 140.5664,
  },
  {
    name: "Goleta",
    lat: 34.436,
    lng: -119.8596,
  },
  {
    name: "Opelika",
    lat: 32.6612,
    lng: -85.3769,
  },
  {
    name: "Layla",
    lat: 22.2833,
    lng: 46.7333,
  },
  {
    name: "Butte",
    lat: 45.902,
    lng: -112.6571,
  },
  {
    name: "Alma",
    lat: 48.55,
    lng: -71.65,
  },
  {
    name: "Algonquin",
    lat: 42.1629,
    lng: -88.3159,
  },
  {
    name: "Pisek",
    lat: 49.3089,
    lng: 14.1475,
  },
  {
    name: "Motomiya",
    lat: 37.5133,
    lng: 140.3939,
  },
  {
    name: "Lakeside",
    lat: 30.1356,
    lng: -81.7674,
  },
  {
    name: "Radcliffe",
    lat: 53.5615,
    lng: -2.3268,
  },
  {
    name: "Aiken",
    lat: 33.531,
    lng: -81.7268,
  },
  {
    name: "Princeton",
    lat: 25.5396,
    lng: -80.3971,
  },
  {
    name: "Unterschleissheim",
    lat: 48.2833,
    lng: 11.5667,
  },
  {
    name: "Lawrenceville",
    lat: 33.9523,
    lng: -83.9931,
  },
  {
    name: "Navahrudak",
    lat: 53.5833,
    lng: 25.8167,
  },
  {
    name: "Lohmar",
    lat: 50.8415,
    lng: 7.2166,
  },
  {
    name: "Winter Park",
    lat: 28.5987,
    lng: -81.3438,
  },
  {
    name: "Granger",
    lat: 41.7373,
    lng: -86.135,
  },
  {
    name: "Novoyavorovskoye",
    lat: 49.9311,
    lng: 23.5731,
  },
  {
    name: "Artemovskiy",
    lat: 57.3667,
    lng: 61.8667,
  },
  {
    name: "Carshalton",
    lat: 51.3652,
    lng: -0.1676,
  },
  {
    name: "Fitchburg",
    lat: 42.9859,
    lng: -89.4255,
  },
  {
    name: "Togitsu",
    lat: 32.8289,
    lng: 129.8486,
  },
  {
    name: "Qahderijan",
    lat: 32.5767,
    lng: 51.455,
  },
  {
    name: "Arcos de la Frontera",
    lat: 36.7483,
    lng: -5.8063,
  },
  {
    name: "Tekeli",
    lat: 44.8333,
    lng: 78.8167,
  },
  {
    name: "Wooster",
    lat: 40.8171,
    lng: -81.9335,
  },
  {
    name: "Synel'nykove",
    lat: 48.3178,
    lng: 35.5119,
  },
  {
    name: "Matsubushi",
    lat: 35.9258,
    lng: 139.8153,
  },
  {
    name: "South Kingstown",
    lat: 41.4457,
    lng: -71.544,
  },
  {
    name: "Fountain",
    lat: 38.6886,
    lng: -104.6829,
  },
  {
    name: "Needham",
    lat: 42.2814,
    lng: -71.2411,
  },
  {
    name: "Sandanski",
    lat: 41.5589,
    lng: 23.2744,
  },
  {
    name: "Orangeville",
    lat: 43.9167,
    lng: -80.1167,
  },
  {
    name: "Emmen",
    lat: 47.0772,
    lng: 8.3,
  },
  {
    name: "Ross Township",
    lat: 40.5256,
    lng: -80.0243,
  },
  {
    name: "Papa",
    lat: 47.3306,
    lng: 17.4658,
  },
  {
    name: "Fort Erie",
    lat: 42.9167,
    lng: -79.0167,
  },
  {
    name: "Madruga",
    lat: 22.9164,
    lng: -81.9239,
  },
  {
    name: "Newburgh",
    lat: 41.553,
    lng: -74.0599,
  },
  {
    name: "Juquitiba",
    lat: -23.9319,
    lng: -47.0686,
  },
  {
    name: "Draveil",
    lat: 48.6852,
    lng: 2.408,
  },
  {
    name: "Ar Rahmaniyah",
    lat: 31.1062,
    lng: 30.6337,
  },
  {
    name: "Brooklyn Center",
    lat: 45.0681,
    lng: -93.3162,
  },
  {
    name: "Puerto de la Cruz",
    lat: 28.4167,
    lng: -16.55,
  },
  {
    name: "Mlawa",
    lat: 53.1167,
    lng: 20.3667,
  },
  {
    name: "Banamba",
    lat: 13.5504,
    lng: -7.45,
  },
  {
    name: "Mercedes",
    lat: -29.2,
    lng: -58.0833,
  },
  {
    name: "Thung Song",
    lat: 8.1645,
    lng: 99.6804,
  },
  {
    name: "Curanilahue",
    lat: -37.48,
    lng: -73.34,
  },
  {
    name: "Piest'any",
    lat: 48.5833,
    lng: 17.8333,
  },
  {
    name: "Victoria",
    lat: -32.6167,
    lng: -60.1667,
  },
  {
    name: "Kerrville",
    lat: 30.0398,
    lng: -99.132,
  },
  {
    name: "Wuyuan",
    lat: 41.0896,
    lng: 108.2722,
  },
  {
    name: "Barstow",
    lat: 34.8661,
    lng: -117.0472,
  },
  {
    name: "Ennepetal",
    lat: 51.3021,
    lng: 7.3425,
  },
  {
    name: "Ypacarai",
    lat: -25.41,
    lng: -57.28,
  },
  {
    name: "Chimakurti",
    lat: 15.5819,
    lng: 79.868,
  },
  {
    name: "North Andover",
    lat: 42.6713,
    lng: -71.0865,
  },
  {
    name: "Riesa",
    lat: 51.3081,
    lng: 13.2939,
  },
  {
    name: "Mount Gambier",
    lat: -37.8294,
    lng: 140.7828,
  },
  {
    name: "Kirov",
    lat: 54.0833,
    lng: 34.3,
  },
  {
    name: "Blagodarnyy",
    lat: 45.1029,
    lng: 43.4252,
  },
  {
    name: "Cranberry",
    lat: 40.7104,
    lng: -80.1059,
  },
  {
    name: "G'ijduvon Shahri",
    lat: 40.1,
    lng: 64.6667,
  },
  {
    name: "Horki",
    lat: 54.2833,
    lng: 30.9833,
  },
  {
    name: "Canton",
    lat: 34.2467,
    lng: -84.49,
  },
  {
    name: "Andernach",
    lat: 50.4397,
    lng: 7.4017,
  },
  {
    name: "Trutnov",
    lat: 50.561,
    lng: 15.9128,
  },
  {
    name: "Villa Donato Guerra",
    lat: 19.3083,
    lng: -100.1422,
  },
  {
    name: "Ob'",
    lat: 54.9917,
    lng: 82.7125,
  },
  {
    name: "Hajduboszormeny",
    lat: 47.6667,
    lng: 21.5167,
  },
  {
    name: "Sevenoaks",
    lat: 51.2781,
    lng: 0.1874,
  },
  {
    name: "Auburn",
    lat: 42.9338,
    lng: -76.5684,
  },
  {
    name: "Osterholz-Scharmbeck",
    lat: 53.2269,
    lng: 8.7947,
  },
  {
    name: "North Huntingdon",
    lat: 40.3293,
    lng: -79.7335,
  },
  {
    name: "Ts'khinvali",
    lat: 42.2257,
    lng: 43.9701,
  },
  {
    name: "Orcutt",
    lat: 34.8668,
    lng: -120.4269,
  },
  {
    name: "Crown Point",
    lat: 41.4141,
    lng: -87.3457,
  },
  {
    name: "Slavgorod",
    lat: 53,
    lng: 78.65,
  },
  {
    name: "Windsor",
    lat: 40.4693,
    lng: -104.9213,
  },
  {
    name: "Korinthos",
    lat: 37.9333,
    lng: 22.9333,
  },
  {
    name: "Deptford",
    lat: 39.8157,
    lng: -75.1181,
  },
  {
    name: "Taunusstein",
    lat: 50.1435,
    lng: 8.1606,
  },
  {
    name: "Gloucester",
    lat: 42.626,
    lng: -70.6897,
  },
  {
    name: "Ust'-Dzheguta",
    lat: 44.0928,
    lng: 41.9822,
  },
  {
    name: "Iguape",
    lat: -24.7081,
    lng: -47.5553,
  },
  {
    name: "Mont-de-Marsan",
    lat: 43.89,
    lng: -0.5,
  },
  {
    name: "Telimele",
    lat: 10.905,
    lng: -13.043,
  },
  {
    name: "Huanta",
    lat: -12.9397,
    lng: -74.2475,
  },
  {
    name: "Gurnee",
    lat: 42.3708,
    lng: -87.9392,
  },
  {
    name: "Orangeburg",
    lat: 33.4928,
    lng: -80.867,
  },
  {
    name: "Vinces",
    lat: -1.55,
    lng: -79.7333,
  },
  {
    name: "Holladay",
    lat: 40.6599,
    lng: -111.8226,
  },
  {
    name: "Fuquay-Varina",
    lat: 35.5958,
    lng: -78.7794,
  },
  {
    name: "Newington",
    lat: 41.687,
    lng: -72.7308,
  },
  {
    name: "Chamblee",
    lat: 33.8842,
    lng: -84.3008,
  },
  {
    name: "Kondopoga",
    lat: 62.2,
    lng: 34.2667,
  },
  {
    name: "Decines-Charpieu",
    lat: 45.7694,
    lng: 4.9594,
  },
  {
    name: "Yoshinaga",
    lat: 34.7708,
    lng: 138.2519,
  },
  {
    name: "Peru",
    lat: 41.3484,
    lng: -89.137,
  },
  {
    name: "Kibiti",
    lat: -7.7296,
    lng: 38.95,
  },
  {
    name: "Cihuatlan",
    lat: 19.25,
    lng: -104.5667,
  },
  {
    name: "Rushden",
    lat: 52.288,
    lng: -0.601,
  },
  {
    name: "Kombissiri",
    lat: 12.064,
    lng: -1.334,
  },
  {
    name: "Cornelius",
    lat: 35.4725,
    lng: -80.8801,
  },
  {
    name: "Gorodets",
    lat: 56.6503,
    lng: 43.4703,
  },
  {
    name: "Ban Aranyik",
    lat: 16.8146,
    lng: 100.3051,
  },
  {
    name: "North Tonawanda",
    lat: 43.0457,
    lng: -78.8659,
  },
  {
    name: "Gaggenau",
    lat: 48.8039,
    lng: 8.3194,
  },
  {
    name: "Los Gatos",
    lat: 37.2303,
    lng: -121.956,
  },
  {
    name: "Mozhaysk",
    lat: 55.5,
    lng: 36.0333,
  },
  {
    name: "Moanda",
    lat: -1.5655,
    lng: 13.2,
  },
  {
    name: "Bad Hersfeld",
    lat: 50.8683,
    lng: 9.7067,
  },
  {
    name: "Saint-Etienne-du-Rouvray",
    lat: 49.3786,
    lng: 1.105,
  },
  {
    name: "South Lake Tahoe",
    lat: 38.9393,
    lng: -119.9828,
  },
  {
    name: "LaSalle",
    lat: 42.2167,
    lng: -83.0667,
  },
  {
    name: "Friedberg",
    lat: 48.35,
    lng: 10.9833,
  },
  {
    name: "Clinton",
    lat: 41.8434,
    lng: -90.2408,
  },
  {
    name: "Northfleet",
    lat: 51.44,
    lng: 0.34,
  },
  {
    name: "Saratoga",
    lat: 37.2684,
    lng: -122.0263,
  },
  {
    name: "Kalgoorlie",
    lat: -30.7489,
    lng: 121.4658,
  },
  {
    name: "Lismore",
    lat: -28.8167,
    lng: 153.2833,
  },
  {
    name: "Sue",
    lat: 33.5872,
    lng: 130.5072,
  },
  {
    name: "Sainte-Julie",
    lat: 45.5833,
    lng: -73.3333,
  },
  {
    name: "Los Altos",
    lat: 37.3685,
    lng: -122.0966,
  },
  {
    name: "Pervomaiskyi",
    lat: 49.3869,
    lng: 36.2142,
  },
  {
    name: "Vienne",
    lat: 45.5242,
    lng: 4.8781,
  },
  {
    name: "Ballwin",
    lat: 38.5951,
    lng: -90.55,
  },
  {
    name: "Atascadero",
    lat: 35.4827,
    lng: -120.6858,
  },
  {
    name: "Soledade",
    lat: -28.8178,
    lng: -52.51,
  },
  {
    name: "North Royalton",
    lat: 41.3138,
    lng: -81.7452,
  },
  {
    name: "Budaors",
    lat: 47.4606,
    lng: 18.9578,
  },
  {
    name: "Villa Angela",
    lat: -27.5833,
    lng: -60.7167,
  },
  {
    name: "Schwedt (Oder)",
    lat: 53.0631,
    lng: 14.2831,
  },
  {
    name: "Saalfeld",
    lat: 50.6506,
    lng: 11.3542,
  },
  {
    name: "Meschede",
    lat: 51.3503,
    lng: 8.2836,
  },
  {
    name: "Somerset",
    lat: 37.0815,
    lng: -84.6091,
  },
  {
    name: "Villa Regina",
    lat: -39.1,
    lng: -67.0667,
  },
  {
    name: "Derne",
    lat: 51.6667,
    lng: 7.6167,
  },
  {
    name: "Siraha",
    lat: 26.6528,
    lng: 86.2069,
  },
  {
    name: "Neuburg",
    lat: 48.7333,
    lng: 11.1833,
  },
  {
    name: "Casma",
    lat: -9.4742,
    lng: -78.3106,
  },
  {
    name: "Devarkonda",
    lat: 16.7,
    lng: 78.9333,
  },
  {
    name: "Merzig",
    lat: 49.4471,
    lng: 6.6312,
  },
  {
    name: "Bourem Guindou",
    lat: 16.9004,
    lng: -0.35,
  },
  {
    name: "Kelkheim (Taunus)",
    lat: 50.138,
    lng: 8.4525,
  },
  {
    name: "Mavinga",
    lat: -15.7895,
    lng: 20.36,
  },
  {
    name: "Leduc",
    lat: 53.2594,
    lng: -113.5492,
  },
  {
    name: "Arlon",
    lat: 49.6836,
    lng: 5.8167,
  },
  {
    name: "Milford Mill",
    lat: 39.3444,
    lng: -76.7668,
  },
  {
    name: "Waltrop",
    lat: 51.6167,
    lng: 7.3833,
  },
  {
    name: "Tonisvorst",
    lat: 51.3208,
    lng: 6.4931,
  },
  {
    name: "Svendborg",
    lat: 55.0704,
    lng: 10.6167,
  },
  {
    name: "Giannitsa",
    lat: 40.7962,
    lng: 22.4145,
  },
  {
    name: "Schwelm",
    lat: 51.2904,
    lng: 7.2972,
  },
  {
    name: "Asipovichy",
    lat: 53.3,
    lng: 28.65,
  },
  {
    name: "Cannock",
    lat: 52.691,
    lng: -2.027,
  },
  {
    name: "Casa Branca",
    lat: -21.7739,
    lng: -47.0858,
  },
  {
    name: "Paraparaumu",
    lat: -40.9167,
    lng: 175.0167,
  },
  {
    name: "Stockbridge",
    lat: 33.5253,
    lng: -84.2294,
  },
  {
    name: "Orlova",
    lat: 49.8452,
    lng: 18.4302,
  },
  {
    name: "East Liverpool",
    lat: 40.6333,
    lng: -80.5677,
  },
  {
    name: "Leonding",
    lat: 48.2792,
    lng: 14.2528,
  },
  {
    name: "Aral",
    lat: 46.8,
    lng: 61.6667,
  },
  {
    name: "Madison Heights",
    lat: 42.5073,
    lng: -83.1034,
  },
  {
    name: "Gyongyos",
    lat: 47.7833,
    lng: 19.9333,
  },
  {
    name: "Vaihingen an der Enz",
    lat: 48.9328,
    lng: 8.9564,
  },
  {
    name: "Kinik",
    lat: 39.0872,
    lng: 27.3833,
  },
  {
    name: "Kabalo",
    lat: -6.05,
    lng: 26.91,
  },
  {
    name: "Williston",
    lat: 48.1814,
    lng: -103.6364,
  },
  {
    name: "Labasa",
    lat: -16.4333,
    lng: 179.3667,
  },
  {
    name: "Dedovsk",
    lat: 55.8667,
    lng: 37.1333,
  },
  {
    name: "Heywood",
    lat: 53.59,
    lng: -2.219,
  },
  {
    name: "Shiyeli",
    lat: 44.167,
    lng: 66.75,
  },
  {
    name: "Bretten",
    lat: 49.0364,
    lng: 8.7061,
  },
  {
    name: "Mandali",
    lat: 33.7436,
    lng: 45.5464,
  },
  {
    name: "Eagle",
    lat: 43.7223,
    lng: -116.3862,
  },
  {
    name: "Lake Magdalene",
    lat: 28.0875,
    lng: -82.4791,
  },
  {
    name: "Igarapava",
    lat: -20.0383,
    lng: -47.7469,
  },
  {
    name: "Alushta",
    lat: 44.6672,
    lng: 34.3978,
  },
  {
    name: "Nirasaki",
    lat: 35.7089,
    lng: 138.4464,
  },
  {
    name: "Rancharia",
    lat: -22.2289,
    lng: -50.8928,
  },
  {
    name: "Steinheim am Main",
    lat: 50.1257,
    lng: 8.83,
  },
  {
    name: "Alquizar",
    lat: 22.8067,
    lng: -82.5828,
  },
  {
    name: "Hanawa",
    lat: 40.2158,
    lng: 140.7883,
  },
  {
    name: "Friedberg",
    lat: 50.3353,
    lng: 8.755,
  },
  {
    name: "Carney",
    lat: 39.405,
    lng: -76.5236,
  },
  {
    name: "Maryville",
    lat: 35.7468,
    lng: -83.9789,
  },
  {
    name: "Rietberg",
    lat: 51.8,
    lng: 8.4333,
  },
  {
    name: "Piraju",
    lat: -23.1936,
    lng: -49.3839,
  },
  {
    name: "Mamaroneck",
    lat: 40.9443,
    lng: -73.7487,
  },
  {
    name: "Asha",
    lat: 55,
    lng: 57.25,
  },
  {
    name: "Bosanska Krupa",
    lat: 44.8833,
    lng: 16.15,
  },
  {
    name: "Hirado",
    lat: 33.3681,
    lng: 129.5539,
  },
  {
    name: "Livingston",
    lat: 40.7855,
    lng: -74.3291,
  },
  {
    name: "Walnut",
    lat: 34.0334,
    lng: -117.8593,
  },
  {
    name: "North Cowichan",
    lat: 48.8236,
    lng: -123.7192,
  },
  {
    name: "Rendsburg",
    lat: 54.3044,
    lng: 9.6644,
  },
  {
    name: "Garden City",
    lat: 37.9754,
    lng: -100.8529,
  },
  {
    name: "Texarkana",
    lat: 33.4361,
    lng: -93.996,
  },
  {
    name: "Gustrow",
    lat: 53.7939,
    lng: 12.1764,
  },
  {
    name: "Kent",
    lat: 41.149,
    lng: -81.361,
  },
  {
    name: "Hampden",
    lat: 40.2602,
    lng: -76.9809,
  },
  {
    name: "Landsberg",
    lat: 48.0528,
    lng: 10.8689,
  },
  {
    name: "Ogawa",
    lat: 36.0567,
    lng: 139.2619,
  },
  {
    name: "North Chicago",
    lat: 42.3172,
    lng: -87.8596,
  },
  {
    name: "Greenville",
    lat: 33.385,
    lng: -91.0514,
  },
  {
    name: "Oelde",
    lat: 51.8258,
    lng: 8.1436,
  },
  {
    name: "Aberdeen",
    lat: 46.9757,
    lng: -123.8094,
  },
  {
    name: "Duluth",
    lat: 34.0053,
    lng: -84.1492,
  },
  {
    name: "Konigsbrunn",
    lat: 48.2689,
    lng: 10.8908,
  },
  {
    name: "Winona",
    lat: 44.0505,
    lng: -91.6684,
  },
  {
    name: "O'Fallon",
    lat: 38.5976,
    lng: -89.9155,
  },
  {
    name: "Ukiah",
    lat: 39.1463,
    lng: -123.2105,
  },
  {
    name: "Atwater",
    lat: 37.3543,
    lng: -120.5981,
  },
  {
    name: "Krotoszyn",
    lat: 51.697,
    lng: 17.4357,
  },
  {
    name: "Sanford",
    lat: 43.4244,
    lng: -70.7573,
  },
  {
    name: "Ja`ar",
    lat: 13.2167,
    lng: 45.3,
  },
  {
    name: "Highland Park",
    lat: 42.1823,
    lng: -87.8105,
  },
  {
    name: "Drexel Heights",
    lat: 32.1457,
    lng: -111.0478,
  },
  {
    name: "Westfield",
    lat: 40.6515,
    lng: -74.3433,
  },
  {
    name: "Hermiston",
    lat: 45.8323,
    lng: -119.2858,
  },
  {
    name: "Riihimaki",
    lat: 60.7333,
    lng: 24.7667,
  },
  {
    name: "Fortuna Foothills",
    lat: 32.6616,
    lng: -114.3973,
  },
  {
    name: "Tredyffrin",
    lat: 40.0663,
    lng: -75.454,
  },
  {
    name: "Bourgoin-Jallieu",
    lat: 45.5861,
    lng: 5.2736,
  },
  {
    name: "Orchard Park",
    lat: 42.7517,
    lng: -78.7455,
  },
  {
    name: "Rotterdam",
    lat: 42.8133,
    lng: -74.0129,
  },
  {
    name: "Likino-Dulevo",
    lat: 55.7,
    lng: 38.95,
  },
  {
    name: "Rosrath",
    lat: 50.9,
    lng: 7.1833,
  },
  {
    name: "Kavaje",
    lat: 41.1833,
    lng: 19.55,
  },
  {
    name: "Gyula",
    lat: 46.65,
    lng: 21.2828,
  },
  {
    name: "Kiskunfelegyhaza",
    lat: 46.705,
    lng: 19.85,
  },
  {
    name: "Upper Merion",
    lat: 40.0902,
    lng: -75.3791,
  },
  {
    name: "Kostomuksha",
    lat: 64.5833,
    lng: 30.6,
  },
  {
    name: "Ra's al `Ayn",
    lat: 36.8503,
    lng: 40.0706,
  },
  {
    name: "Glenville",
    lat: 42.8869,
    lng: -73.9925,
  },
  {
    name: "Central",
    lat: 30.5593,
    lng: -91.0369,
  },
  {
    name: "Quivican",
    lat: 22.8247,
    lng: -82.3558,
  },
  {
    name: "Pittsford",
    lat: 43.0732,
    lng: -77.5268,
  },
  {
    name: "Winnenden",
    lat: 48.8764,
    lng: 9.3978,
  },
  {
    name: "Izu",
    lat: 34.9767,
    lng: 138.9469,
  },
  {
    name: "Chicago Heights",
    lat: 41.5101,
    lng: -87.6345,
  },
  {
    name: "Divnogorsk",
    lat: 55.95,
    lng: 92.3833,
  },
  {
    name: "Orange",
    lat: 44.1383,
    lng: 4.8097,
  },
  {
    name: "Northeim",
    lat: 51.7067,
    lng: 10.0011,
  },
  {
    name: "Khmil'nyk",
    lat: 49.55,
    lng: 27.9667,
  },
  {
    name: "Namaacha",
    lat: -25.9667,
    lng: 32.0333,
  },
  {
    name: "Oyabe",
    lat: 36.6833,
    lng: 136.8667,
  },
  {
    name: "Buhl",
    lat: 48.6953,
    lng: 8.135,
  },
  {
    name: "Aioi",
    lat: 34.8036,
    lng: 134.4681,
  },
  {
    name: "Mahon",
    lat: 39.8894,
    lng: 4.2642,
  },
  {
    name: "Anadia",
    lat: 40.4333,
    lng: -8.4333,
  },
  {
    name: "Truskavets'",
    lat: 49.2806,
    lng: 23.505,
  },
  {
    name: "Bogdanovich",
    lat: 56.7833,
    lng: 62.05,
  },
  {
    name: "Canada de Gomez",
    lat: -32.8167,
    lng: -61.4,
  },
  {
    name: "Chortkiv",
    lat: 49.0167,
    lng: 25.8,
  },
  {
    name: "Palpa",
    lat: 27.8667,
    lng: 83.55,
  },
  {
    name: "Cyangugu",
    lat: -2.4833,
    lng: 28.8967,
  },
  {
    name: "Johnston",
    lat: 41.8274,
    lng: -71.5202,
  },
  {
    name: "East Fishkill",
    lat: 41.5567,
    lng: -73.7824,
  },
  {
    name: "Newberg",
    lat: 45.3075,
    lng: -122.9601,
  },
  {
    name: "Viacha",
    lat: -16.6333,
    lng: -68.2833,
  },
  {
    name: "Voorhees",
    lat: 39.845,
    lng: -74.955,
  },
  {
    name: "Cottica",
    lat: 3.8547,
    lng: -54.2289,
  },
  {
    name: "Cheshire",
    lat: 41.5114,
    lng: -72.9036,
  },
  {
    name: "Norwood",
    lat: 42.1861,
    lng: -71.1948,
  },
  {
    name: "Wellesley",
    lat: 42.3043,
    lng: -71.2855,
  },
  {
    name: "Ornskoldsvik",
    lat: 63.318,
    lng: 18.7167,
  },
  {
    name: "Lewes",
    lat: 38.7777,
    lng: -75.1448,
  },
  {
    name: "Kromeriz",
    lat: 49.2979,
    lng: 17.3931,
  },
  {
    name: "Aleysk",
    lat: 52.5,
    lng: 82.7833,
  },
  {
    name: "Washington",
    lat: 37.1304,
    lng: -113.4877,
  },
  {
    name: "Primero de Enero",
    lat: 21.9453,
    lng: -78.4189,
  },
  {
    name: "Vernon",
    lat: 41.8364,
    lng: -72.4606,
  },
  {
    name: "Oak Ridge",
    lat: 35.9639,
    lng: -84.2938,
  },
  {
    name: "La Concordia",
    lat: 0.0069,
    lng: -79.3958,
  },
  {
    name: "San Cristobal",
    lat: 22.7169,
    lng: -83.0511,
  },
  {
    name: "Agde",
    lat: 43.3108,
    lng: 3.4758,
  },
  {
    name: "Laplace",
    lat: 30.0731,
    lng: -90.4758,
  },
  {
    name: "Beverley",
    lat: 53.845,
    lng: -0.427,
  },
  {
    name: "Salem",
    lat: 42.7902,
    lng: -71.2202,
  },
  {
    name: "Carpentras",
    lat: 44.0558,
    lng: 5.0489,
  },
  {
    name: "Springe",
    lat: 52.2167,
    lng: 9.55,
  },
  {
    name: "Samokov",
    lat: 42.3381,
    lng: 23.56,
  },
  {
    name: "Madinat Zayid",
    lat: 23.6522,
    lng: 53.6536,
  },
  {
    name: "Ban Phai",
    lat: 16.073,
    lng: 102.7362,
  },
  {
    name: "Athens",
    lat: 39.3269,
    lng: -82.0988,
  },
  {
    name: "Chambly",
    lat: 45.4311,
    lng: -73.2873,
  },
  {
    name: "North Attleborough",
    lat: 41.9699,
    lng: -71.3345,
  },
  {
    name: "Tame",
    lat: 6.4603,
    lng: -71.74,
  },
  {
    name: "Old Harbour",
    lat: 17.9414,
    lng: -77.109,
  },
  {
    name: "Nouna",
    lat: 12.7329,
    lng: -3.8622,
  },
  {
    name: "Benavente",
    lat: 38.9833,
    lng: -8.8167,
  },
  {
    name: "Mirandopolis",
    lat: -21.1336,
    lng: -51.1017,
  },
  {
    name: "Schwandorf",
    lat: 49.3236,
    lng: 12.0993,
  },
  {
    name: "Gagarin",
    lat: 55.55,
    lng: 35,
  },
  {
    name: "Tocache Nuevo",
    lat: -8.1886,
    lng: -76.5103,
  },
  {
    name: "Dzyarzhynsk",
    lat: 53.6833,
    lng: 27.1333,
  },
  {
    name: "San Javier",
    lat: -35.5924,
    lng: -71.7353,
  },
  {
    name: "SeaTac",
    lat: 47.4444,
    lng: -122.2986,
  },
  {
    name: "Staraya Russa",
    lat: 57.9833,
    lng: 31.35,
  },
  {
    name: "Cajati",
    lat: -24.7361,
    lng: -48.1228,
  },
  {
    name: "Hoxter",
    lat: 51.7667,
    lng: 9.3667,
  },
  {
    name: "Lubon",
    lat: 52.3333,
    lng: 16.8833,
  },
  {
    name: "Raytown",
    lat: 38.9944,
    lng: -94.4641,
  },
  {
    name: "Rosa Zarate",
    lat: 0.3272,
    lng: -79.4689,
  },
  {
    name: "Yemanzhelinsk",
    lat: 54.75,
    lng: 61.3167,
  },
  {
    name: "Southgate",
    lat: 42.2047,
    lng: -83.2057,
  },
  {
    name: "West Warwick",
    lat: 41.6986,
    lng: -71.5156,
  },
  {
    name: "Meissen",
    lat: 51.1636,
    lng: 13.4775,
  },
  {
    name: "Barabinsk",
    lat: 55.35,
    lng: 78.35,
  },
  {
    name: "Harrison",
    lat: 41.0233,
    lng: -73.7192,
  },
  {
    name: "Niles",
    lat: 42.0278,
    lng: -87.8099,
  },
  {
    name: "Fernandina Beach",
    lat: 30.6579,
    lng: -81.4504,
  },
  {
    name: "Windsor",
    lat: 41.871,
    lng: -72.6736,
  },
  {
    name: "Big Spring",
    lat: 32.2387,
    lng: -101.4802,
  },
  {
    name: "Petrovsk",
    lat: 52.3167,
    lng: 45.3833,
  },
  {
    name: "Balakliia",
    lat: 49.4564,
    lng: 36.8389,
  },
  {
    name: "Hafnarfjordhur",
    lat: 64.0667,
    lng: -21.95,
  },
  {
    name: "Quakers Hill",
    lat: -33.7344,
    lng: 150.8789,
  },
  {
    name: "Chiredzi",
    lat: -21.0496,
    lng: 31.66,
  },
  {
    name: "Stanford le Hope",
    lat: 51.514,
    lng: 0.4244,
  },
  {
    name: "Borzya",
    lat: 50.3833,
    lng: 116.5333,
  },
  {
    name: "Novyy Rozdil",
    lat: 49.4703,
    lng: 24.13,
  },
  {
    name: "Okotoks",
    lat: 50.725,
    lng: -113.975,
  },
  {
    name: "Bella Vista",
    lat: 36.4667,
    lng: -94.2707,
  },
  {
    name: "Mount Olive",
    lat: 40.8662,
    lng: -74.7426,
  },
  {
    name: "East Haven",
    lat: 41.2984,
    lng: -72.8577,
  },
  {
    name: "Herentals",
    lat: 51.1767,
    lng: 4.8364,
  },
  {
    name: "Milton",
    lat: 41.009,
    lng: -76.8507,
  },
  {
    name: "Morrisville",
    lat: 35.8367,
    lng: -78.8348,
  },
  {
    name: "Balzar",
    lat: -1.36,
    lng: -79.9,
  },
  {
    name: "Harelbeke",
    lat: 50.8567,
    lng: 3.3131,
  },
  {
    name: "Kakuda",
    lat: 37.9772,
    lng: 140.7819,
  },
  {
    name: "Qaratau",
    lat: 43.1667,
    lng: 70.4667,
  },
  {
    name: "Milford",
    lat: 42.1565,
    lng: -71.5188,
  },
  {
    name: "Zeitz",
    lat: 51.0478,
    lng: 12.1383,
  },
  {
    name: "Leichlingen",
    lat: 51.1167,
    lng: 7.0167,
  },
  {
    name: "San Salvador",
    lat: 20.2833,
    lng: -99.0153,
  },
  {
    name: "Gorlice",
    lat: 49.6556,
    lng: 21.1604,
  },
  {
    name: "Yangiyer",
    lat: 40.2667,
    lng: 68.8167,
  },
  {
    name: "Casselberry",
    lat: 28.6625,
    lng: -81.3218,
  },
  {
    name: "Plattsburgh",
    lat: 44.6951,
    lng: -73.4563,
  },
  {
    name: "Seguin",
    lat: 29.5889,
    lng: -97.9671,
  },
  {
    name: "Naranjito",
    lat: -2.1667,
    lng: -79.4653,
  },
  {
    name: "Tainai",
    lat: 38.0667,
    lng: 139.4167,
  },
  {
    name: "Griesheim",
    lat: 49.8594,
    lng: 8.5525,
  },
  {
    name: "Emmendingen",
    lat: 48.1214,
    lng: 7.8492,
  },
  {
    name: "Shirley",
    lat: 40.7949,
    lng: -72.8743,
  },
  {
    name: "Ouda-yamaguchi",
    lat: 34.5278,
    lng: 135.9525,
  },
  {
    name: "Olching",
    lat: 48.2,
    lng: 11.3167,
  },
  {
    name: "Belle Glade",
    lat: 26.692,
    lng: -80.6672,
  },
  {
    name: "Obama",
    lat: 35.4956,
    lng: 135.7467,
  },
  {
    name: "George Town",
    lat: 19.2866,
    lng: -81.3744,
  },
  {
    name: "Wasco",
    lat: 35.5938,
    lng: -119.3671,
  },
  {
    name: "Lake in the Hills",
    lat: 42.1913,
    lng: -88.3476,
  },
  {
    name: "Eibar",
    lat: 43.1843,
    lng: -2.4733,
  },
  {
    name: "Witney",
    lat: 51.78,
    lng: -1.49,
  },
  {
    name: "Idar-Oberstein",
    lat: 49.7019,
    lng: 7.3253,
  },
  {
    name: "Wallkill",
    lat: 41.4854,
    lng: -74.3939,
  },
  {
    name: "Kartaly",
    lat: 53.05,
    lng: 60.65,
  },
  {
    name: "Gojo",
    lat: 34.3528,
    lng: 135.6989,
  },
  {
    name: "Agawam",
    lat: 42.0657,
    lng: -72.6526,
  },
  {
    name: "Pokhvistnevo",
    lat: 53.65,
    lng: 52.1333,
  },
  {
    name: "East Lake-Orient Park",
    lat: 27.9971,
    lng: -82.3653,
  },
  {
    name: "Khashuri",
    lat: 41.9897,
    lng: 43.59,
  },
  {
    name: "Dubasari",
    lat: 47.2667,
    lng: 29.1667,
  },
  {
    name: "Bilgoraj",
    lat: 50.55,
    lng: 22.7333,
  },
  {
    name: "McCandless",
    lat: 40.5836,
    lng: -80.0283,
  },
  {
    name: "Tournefeuille",
    lat: 43.5853,
    lng: 1.3442,
  },
  {
    name: "Nzega",
    lat: -4.2096,
    lng: 33.18,
  },
  {
    name: "Lacey",
    lat: 39.8564,
    lng: -74.2624,
  },
  {
    name: "Naranjal",
    lat: -2.6736,
    lng: -79.6183,
  },
  {
    name: "Kitsuki",
    lat: 33.4169,
    lng: 131.6161,
  },
  {
    name: "Lucenec",
    lat: 48.3314,
    lng: 19.6708,
  },
  {
    name: "Burton",
    lat: 42.9974,
    lng: -83.6175,
  },
  {
    name: "Chili",
    lat: 43.0845,
    lng: -77.7541,
  },
  {
    name: "Geneva",
    lat: 42.8644,
    lng: -76.9827,
  },
  {
    name: "Baradero",
    lat: -33.8,
    lng: -59.5167,
  },
  {
    name: "Khust",
    lat: 48.1814,
    lng: 23.2978,
  },
  {
    name: "Byaroza",
    lat: 52.55,
    lng: 24.9667,
  },
  {
    name: "Gusev",
    lat: 54.5922,
    lng: 22.1997,
  },
  {
    name: "Reinbek",
    lat: 53.5089,
    lng: 10.2483,
  },
  {
    name: "Stoughton",
    lat: 42.1192,
    lng: -71.1019,
  },
  {
    name: "Sept-Iles",
    lat: 50.2167,
    lng: -66.3833,
  },
  {
    name: "Fleming Island",
    lat: 30.0988,
    lng: -81.7124,
  },
  {
    name: "Schererville",
    lat: 41.486,
    lng: -87.444,
  },
  {
    name: "Independence",
    lat: 38.951,
    lng: -84.5492,
  },
  {
    name: "West Springfield",
    lat: 42.1253,
    lng: -72.6503,
  },
  {
    name: "Timaru",
    lat: -44.4,
    lng: 171.25,
  },
  {
    name: "Wegberg",
    lat: 51.1333,
    lng: 6.2667,
  },
  {
    name: "Geislingen an der Steige",
    lat: 48.6244,
    lng: 9.8306,
  },
  {
    name: "Gates",
    lat: 43.1514,
    lng: -77.713,
  },
  {
    name: "Baunatal",
    lat: 51.2589,
    lng: 9.4183,
  },
  {
    name: "Burlington",
    lat: 40.8072,
    lng: -91.1247,
  },
  {
    name: "Mpika",
    lat: -11.83,
    lng: 31.46,
  },
  {
    name: "Serra Negra",
    lat: -22.6119,
    lng: -46.7008,
  },
  {
    name: "New Iberia",
    lat: 30.0049,
    lng: -91.8202,
  },
  {
    name: "Silvassa",
    lat: 20.2666,
    lng: 73.0166,
  },
  {
    name: "Northampton",
    lat: 42.3266,
    lng: -72.6745,
  },
  {
    name: "Guararema",
    lat: -23.415,
    lng: -46.035,
  },
  {
    name: "Esztergom",
    lat: 47.7856,
    lng: 18.7403,
  },
  {
    name: "Ciro Redondo",
    lat: 22.0189,
    lng: -78.7031,
  },
  {
    name: "Jeffrey's Bay",
    lat: -34.0333,
    lng: 24.9167,
  },
  {
    name: "Pershotravens'k",
    lat: 48.3464,
    lng: 36.4044,
  },
  {
    name: "Warin Chamrap",
    lat: 15.2008,
    lng: 104.8612,
  },
  {
    name: "Austintown",
    lat: 41.0932,
    lng: -80.7405,
  },
  {
    name: "Crofton",
    lat: 39.0144,
    lng: -76.68,
  },
  {
    name: "Mehlville",
    lat: 38.5018,
    lng: -90.3149,
  },
  {
    name: "Bermejo",
    lat: -22.7322,
    lng: -64.3425,
  },
  {
    name: "Niimi",
    lat: 34.9772,
    lng: 133.4703,
  },
  {
    name: "Zionsville",
    lat: 39.9897,
    lng: -86.3182,
  },
  {
    name: "Pilar do Sul",
    lat: -23.8128,
    lng: -47.7158,
  },
  {
    name: "Ternivka",
    lat: 48.5231,
    lng: 36.0826,
  },
  {
    name: "Pasadena",
    lat: 39.1552,
    lng: -76.5537,
  },
  {
    name: "Mollendo",
    lat: -17.0167,
    lng: -72.0167,
  },
  {
    name: "Hiji",
    lat: 33.3694,
    lng: 131.5325,
  },
  {
    name: "Shaler",
    lat: 40.5229,
    lng: -79.9632,
  },
  {
    name: "Vineyard",
    lat: 38.4744,
    lng: -121.319,
  },
  {
    name: "Wetter (Ruhr)",
    lat: 51.3881,
    lng: 7.395,
  },
  {
    name: "Grimma",
    lat: 51.2386,
    lng: 12.7253,
  },
  {
    name: "Kevelaer",
    lat: 51.5833,
    lng: 6.25,
  },
  {
    name: "Ajka",
    lat: 47.1006,
    lng: 17.5522,
  },
  {
    name: "Klodzko",
    lat: 50.4378,
    lng: 16.6528,
  },
  {
    name: "Lumberton",
    lat: 34.6312,
    lng: -79.0186,
  },
  {
    name: "Leimen",
    lat: 49.3481,
    lng: 8.6911,
  },
  {
    name: "Alga",
    lat: 49.9032,
    lng: 57.335,
  },
  {
    name: "Safaja",
    lat: 26.7517,
    lng: 33.9344,
  },
  {
    name: "Bad Neuenahr-Ahrweiler",
    lat: 50.5447,
    lng: 7.1133,
  },
  {
    name: "Benicia",
    lat: 38.0725,
    lng: -122.1525,
  },
  {
    name: "Ban Chang",
    lat: 12.7209,
    lng: 101.0669,
  },
  {
    name: "Jacksonville",
    lat: 34.8807,
    lng: -92.1302,
  },
  {
    name: "Capljina",
    lat: 43.11,
    lng: 17.7,
  },
  {
    name: "Villa Luvianos",
    lat: 18.92,
    lng: -100.2983,
  },
  {
    name: "Rockledge",
    lat: 28.3201,
    lng: -80.732,
  },
  {
    name: "Honcho",
    lat: 41.8958,
    lng: 140.6944,
  },
  {
    name: "Henderson",
    lat: 37.8397,
    lng: -87.5798,
  },
  {
    name: "Rapperswil-Jona",
    lat: 47.2286,
    lng: 8.8317,
  },
  {
    name: "Oktyabr'sk",
    lat: 49.4731,
    lng: 57.4449,
  },
  {
    name: "Itako",
    lat: 35.9472,
    lng: 140.5553,
  },
  {
    name: "Graham",
    lat: 47.0407,
    lng: -122.2756,
  },
  {
    name: "Centre Wellington",
    lat: 43.7,
    lng: -80.3667,
  },
  {
    name: "Ancud",
    lat: -41.8682,
    lng: -73.8287,
  },
  {
    name: "Bo`ka",
    lat: 40.8111,
    lng: 69.1942,
  },
  {
    name: "Monterey",
    lat: 36.5922,
    lng: -121.8807,
  },
  {
    name: "Arqalyq",
    lat: 50.2486,
    lng: 66.9114,
  },
  {
    name: "Converse",
    lat: 29.5091,
    lng: -98.3084,
  },
  {
    name: "Khrestivka",
    lat: 48.15,
    lng: 38.3667,
  },
  {
    name: "Vestal",
    lat: 42.0492,
    lng: -76.026,
  },
  {
    name: "Granite City",
    lat: 38.7292,
    lng: -90.1266,
  },
  {
    name: "Saugus",
    lat: 42.4681,
    lng: -71.0145,
  },
  {
    name: "Llallagua",
    lat: -18.4231,
    lng: -66.5856,
  },
  {
    name: "Aberdeen",
    lat: 45.4646,
    lng: -98.468,
  },
  {
    name: "Perry Hall",
    lat: 39.4067,
    lng: -76.4781,
  },
  {
    name: "Illkirch-Graffenstaden",
    lat: 48.53,
    lng: 7.72,
  },
  {
    name: "Gaoua",
    lat: 10.325,
    lng: -3.174,
  },
  {
    name: "Nallihan",
    lat: 40.1859,
    lng: 31.3508,
  },
  {
    name: "Tara",
    lat: 56.8753,
    lng: 74.4136,
  },
  {
    name: "Khulm",
    lat: 36.6833,
    lng: 67.6833,
  },
  {
    name: "Xochistlahuaca",
    lat: 16.7914,
    lng: -98.2419,
  },
  {
    name: "Branford",
    lat: 41.2841,
    lng: -72.7981,
  },
  {
    name: "Yukon",
    lat: 35.5201,
    lng: -97.7639,
  },
  {
    name: "Kushva",
    lat: 58.2833,
    lng: 59.7333,
  },
  {
    name: "Villazon",
    lat: -22.091,
    lng: -65.596,
  },
  {
    name: "South Laurel",
    lat: 39.0603,
    lng: -76.8456,
  },
  {
    name: "Ballina",
    lat: -28.8333,
    lng: 153.5333,
  },
  {
    name: "Taree",
    lat: -31.9,
    lng: 152.45,
  },
  {
    name: "Sorochinsk",
    lat: 52.4333,
    lng: 53.15,
  },
  {
    name: "Sonora",
    lat: 37.9819,
    lng: -120.3828,
  },
  {
    name: "Kuaidamao",
    lat: 41.68,
    lng: 125.75,
  },
  {
    name: "Kasangulu",
    lat: -4.5796,
    lng: 15.18,
  },
  {
    name: "West Windsor",
    lat: 40.2897,
    lng: -74.6267,
  },
  {
    name: "Takahagi",
    lat: 36.7136,
    lng: 140.7097,
  },
  {
    name: "Baesweiler",
    lat: 50.9,
    lng: 6.1833,
  },
  {
    name: "Chios",
    lat: 38.3725,
    lng: 26.1375,
  },
  {
    name: "Camiri",
    lat: -20.05,
    lng: -63.52,
  },
  {
    name: "Kriens",
    lat: 47.0344,
    lng: 8.28,
  },
  {
    name: "Imatra",
    lat: 61.1931,
    lng: 28.7764,
  },
  {
    name: "Kholmsk",
    lat: 47.0403,
    lng: 142.0431,
  },
  {
    name: "Wisconsin Rapids",
    lat: 44.3927,
    lng: -89.8265,
  },
  {
    name: "Nochistlan de Mejia",
    lat: 21.3642,
    lng: -102.8464,
  },
  {
    name: "San Martin de los Andes",
    lat: -40.1667,
    lng: -71.35,
  },
  {
    name: "Dembi Dolo",
    lat: 8.5333,
    lng: 34.8,
  },
  {
    name: "Galt",
    lat: 38.2693,
    lng: -121.3,
  },
  {
    name: "Mocimboa",
    lat: -11.3196,
    lng: 40.35,
  },
  {
    name: "Hutto",
    lat: 30.5373,
    lng: -97.5516,
  },
  {
    name: "Forest Hills",
    lat: 42.9577,
    lng: -85.4895,
  },
  {
    name: "Sundern",
    lat: 51.3167,
    lng: 8,
  },
  {
    name: "Jaguarao",
    lat: -32.5658,
    lng: -53.3758,
  },
  {
    name: "Bixby",
    lat: 35.9454,
    lng: -95.8773,
  },
  {
    name: "Hobart",
    lat: 41.5139,
    lng: -87.2729,
  },
  {
    name: "Tlalpujahua de Rayon",
    lat: 19.805,
    lng: -100.1744,
  },
  {
    name: "Oakdale",
    lat: 44.9876,
    lng: -92.9641,
  },
  {
    name: "Sabaneta",
    lat: 8.7522,
    lng: -69.9325,
  },
  {
    name: "Sunbury",
    lat: 40.8617,
    lng: -76.7874,
  },
  {
    name: "Dakovo",
    lat: 45.3,
    lng: 18.4,
  },
  {
    name: "Bolobo",
    lat: -2.16,
    lng: 16.24,
  },
  {
    name: "Hadishahr",
    lat: 38.8478,
    lng: 45.6622,
  },
  {
    name: "Topki",
    lat: 55.2833,
    lng: 85.6167,
  },
  {
    name: "Vyshhorod",
    lat: 50.5833,
    lng: 30.5,
  },
  {
    name: "Salinas Victoria",
    lat: 25.9667,
    lng: -100.3,
  },
  {
    name: "Atlautla",
    lat: 19,
    lng: -98.7167,
  },
  {
    name: "Zolotonosha",
    lat: 49.6833,
    lng: 32.0333,
  },
  {
    name: "Ormskirk",
    lat: 53.5665,
    lng: -2.8869,
  },
  {
    name: "Newtown",
    lat: 41.3988,
    lng: -73.2927,
  },
  {
    name: "Fuman",
    lat: 37.2239,
    lng: 49.3125,
  },
  {
    name: "New Smyrna Beach",
    lat: 29.0249,
    lng: -80.9651,
  },
  {
    name: "Westport",
    lat: 41.1428,
    lng: -73.3475,
  },
  {
    name: "Tualatin",
    lat: 45.3772,
    lng: -122.7746,
  },
  {
    name: "Neustadt",
    lat: 48.8111,
    lng: 9.3656,
  },
  {
    name: "Fridley",
    lat: 45.0841,
    lng: -93.2595,
  },
  {
    name: "Maloyaroslavets",
    lat: 55,
    lng: 36.4667,
  },
  {
    name: "Zakopane",
    lat: 49.2994,
    lng: 19.9519,
  },
  {
    name: "East Chicago",
    lat: 41.6484,
    lng: -87.4536,
  },
  {
    name: "Ofaqim",
    lat: 31.2833,
    lng: 34.6167,
  },
  {
    name: "Awara",
    lat: 36.2114,
    lng: 136.2289,
  },
  {
    name: "Kirkwood",
    lat: 38.5788,
    lng: -90.4203,
  },
  {
    name: "San Martin Hidalgo",
    lat: 20.435,
    lng: -103.9286,
  },
  {
    name: "Mechernich",
    lat: 50.6,
    lng: 6.65,
  },
  {
    name: "'Araba",
    lat: 32.8511,
    lng: 35.3386,
  },
  {
    name: "Arnstadt",
    lat: 50.8342,
    lng: 10.9464,
  },
  {
    name: "Littlehampton",
    lat: 50.8094,
    lng: -0.5409,
  },
  {
    name: "Havran",
    lat: 39.5583,
    lng: 27.0983,
  },
  {
    name: "Sanger",
    lat: 36.699,
    lng: -119.5575,
  },
  {
    name: "Mananjary",
    lat: -21.2167,
    lng: 48.3333,
  },
  {
    name: "Jarrow",
    lat: 54.9797,
    lng: -1.4804,
  },
  {
    name: "Morgan City",
    lat: 29.7041,
    lng: -91.192,
  },
  {
    name: "Ramsey",
    lat: 45.2617,
    lng: -93.4494,
  },
  {
    name: "Ruston",
    lat: 32.5329,
    lng: -92.6363,
  },
  {
    name: "Jeffersontown",
    lat: 38.2048,
    lng: -85.5701,
  },
  {
    name: "Glen Ellyn",
    lat: 41.8667,
    lng: -88.0629,
  },
  {
    name: "Zarechnyy",
    lat: 56.8167,
    lng: 61.3167,
  },
  {
    name: "Bandipura",
    lat: 34.4225,
    lng: 74.6375,
  },
  {
    name: "Borsa",
    lat: 47.6553,
    lng: 24.6631,
  },
  {
    name: "Canon City",
    lat: 38.443,
    lng: -105.2203,
  },
  {
    name: "Lichtenburg",
    lat: -26.15,
    lng: 26.1667,
  },
  {
    name: "Monticello",
    lat: 45.298,
    lng: -93.7984,
  },
  {
    name: "Oktyabr'sk",
    lat: 53.1667,
    lng: 48.6667,
  },
  {
    name: "Ashtabula",
    lat: 41.8806,
    lng: -80.7984,
  },
  {
    name: "Wiesloch",
    lat: 49.2942,
    lng: 8.6983,
  },
  {
    name: "Ban Nong Sam Rong",
    lat: 17.4514,
    lng: 102.765,
  },
  {
    name: "Danvers",
    lat: 42.574,
    lng: -70.9494,
  },
  {
    name: "Oroshaza",
    lat: 46.5678,
    lng: 20.6428,
  },
  {
    name: "Bridgewater",
    lat: 41.9728,
    lng: -70.9749,
  },
  {
    name: "Mint Hill",
    lat: 35.1782,
    lng: -80.6533,
  },
  {
    name: "Jarinu",
    lat: -23.1014,
    lng: -46.7283,
  },
  {
    name: "Neptune",
    lat: 40.2105,
    lng: -74.0539,
  },
  {
    name: "Panauti",
    lat: 27.5833,
    lng: 85.5167,
  },
  {
    name: "Stratford-upon-Avon",
    lat: 52.1928,
    lng: -1.7064,
  },
  {
    name: "Tongyangdao",
    lat: 41.7676,
    lng: 109.9711,
  },
  {
    name: "Milton",
    lat: 42.2413,
    lng: -71.0844,
  },
  {
    name: "Jaszbereny",
    lat: 47.5,
    lng: 19.9167,
  },
  {
    name: "Neckarsulm",
    lat: 49.1917,
    lng: 9.2244,
  },
  {
    name: "Geilenkirchen",
    lat: 50.9653,
    lng: 6.1194,
  },
  {
    name: "Bidur",
    lat: 27.89,
    lng: 85.1597,
  },
  {
    name: "Ipsala",
    lat: 40.9181,
    lng: 26.3831,
  },
  {
    name: "Santa Rita do Passa Quatro",
    lat: -21.71,
    lng: -47.4778,
  },
  {
    name: "Ashford",
    lat: 51.434,
    lng: -0.464,
  },
  {
    name: "Miramas",
    lat: 43.5822,
    lng: 5.0019,
  },
  {
    name: "Gawler",
    lat: -34.5981,
    lng: 138.745,
  },
  {
    name: "Statesville",
    lat: 35.7842,
    lng: -80.8714,
  },
  {
    name: "Kathu",
    lat: 7.9112,
    lng: 98.3475,
  },
  {
    name: "Short Pump",
    lat: 37.6549,
    lng: -77.6201,
  },
  {
    name: "Queensbury",
    lat: 43.3568,
    lng: -73.6765,
  },
  {
    name: "Verkhniy Ufaley",
    lat: 56.05,
    lng: 60.2333,
  },
  {
    name: "Sena Madureira",
    lat: -9.07,
    lng: -68.67,
  },
  {
    name: "Gloversville",
    lat: 43.0491,
    lng: -74.3465,
  },
  {
    name: "Santiago de Tolu",
    lat: 9.5358,
    lng: -75.572,
  },
  {
    name: "Summerlin South",
    lat: 36.1242,
    lng: -115.3324,
  },
  {
    name: "Chillan Viejo",
    lat: -36.6229,
    lng: -72.1317,
  },
  {
    name: "Gladstone",
    lat: 39.2133,
    lng: -94.5593,
  },
  {
    name: "Rambouillet",
    lat: 48.6444,
    lng: 1.8308,
  },
  {
    name: "Bielsk Podlaski",
    lat: 52.7667,
    lng: 23.2,
  },
  {
    name: "Spring Township",
    lat: 40.3037,
    lng: -76.0263,
  },
  {
    name: "East Grinstead",
    lat: 51.129,
    lng: -0.007,
  },
  {
    name: "Qorday",
    lat: 43.0369,
    lng: 74.7114,
  },
  {
    name: "Fremont",
    lat: 41.4396,
    lng: -96.4879,
  },
  {
    name: "Laranjal Paulista",
    lat: -23.0506,
    lng: -47.8376,
  },
  {
    name: "Rheinbach",
    lat: 50.6256,
    lng: 6.9491,
  },
  {
    name: "Garfield Heights",
    lat: 41.4199,
    lng: -81.6038,
  },
  {
    name: "Maryborough",
    lat: -25.5375,
    lng: 152.7019,
  },
  {
    name: "Seneca",
    lat: 34.6815,
    lng: -82.9609,
  },
  {
    name: "Overath",
    lat: 50.95,
    lng: 7.3,
  },
  {
    name: "Zempoala",
    lat: 19.9167,
    lng: -98.6667,
  },
  {
    name: "Thatcham",
    lat: 51.405,
    lng: -1.264,
  },
  {
    name: "Vilyeyka",
    lat: 54.4833,
    lng: 26.9167,
  },
  {
    name: "Klosterneuburg",
    lat: 48.3042,
    lng: 16.3167,
  },
  {
    name: "Whitehall",
    lat: 40.6571,
    lng: -75.5046,
  },
  {
    name: "Bakhchysaray",
    lat: 44.7528,
    lng: 33.8608,
  },
  {
    name: "Lansing",
    lat: 41.5648,
    lng: -87.5462,
  },
  {
    name: "Aschersleben",
    lat: 51.75,
    lng: 11.4667,
  },
  {
    name: "Huaquechula",
    lat: 18.7667,
    lng: -98.55,
  },
  {
    name: "Millville",
    lat: 39.3903,
    lng: -75.0561,
  },
  {
    name: "Monroeville",
    lat: 40.4262,
    lng: -79.7605,
  },
  {
    name: "Miyanaga",
    lat: 33.7236,
    lng: 130.6667,
  },
  {
    name: "Tarui",
    lat: 35.3703,
    lng: 136.5269,
  },
  {
    name: "Saint-Constant",
    lat: 45.37,
    lng: -73.57,
  },
  {
    name: "St. Helens",
    lat: 45.8571,
    lng: -122.8164,
  },
  {
    name: "Lunel",
    lat: 43.6778,
    lng: 4.1361,
  },
  {
    name: "Biarritz",
    lat: 43.48,
    lng: -1.56,
  },
  {
    name: "Bergerac",
    lat: 44.85,
    lng: 0.48,
  },
  {
    name: "Andenne",
    lat: 50.4833,
    lng: 5.1,
  },
  {
    name: "Paragould",
    lat: 36.0555,
    lng: -90.5149,
  },
  {
    name: "Pemberton",
    lat: 39.9562,
    lng: -74.6,
  },
  {
    name: "Gonesse",
    lat: 48.9875,
    lng: 2.4494,
  },
  {
    name: "Atitalaquia",
    lat: 20.0583,
    lng: -99.2208,
  },
  {
    name: "Shingu",
    lat: 33.7167,
    lng: 136,
  },
  {
    name: "Grimsby",
    lat: 43.2,
    lng: -79.55,
  },
  {
    name: "Tepehuacan de Guerrero",
    lat: 21.0131,
    lng: -98.8442,
  },
  {
    name: "Grodzisk Mazowiecki",
    lat: 52.1039,
    lng: 20.6337,
  },
  {
    name: "East Windsor",
    lat: 40.2606,
    lng: -74.5295,
  },
  {
    name: "Heiligenhaus",
    lat: 51.3265,
    lng: 6.971,
  },
  {
    name: "Henin-Beaumont",
    lat: 50.4217,
    lng: 2.9508,
  },
  {
    name: "Conchal",
    lat: -22.33,
    lng: -47.1728,
  },
  {
    name: "Deer Park",
    lat: 40.7623,
    lng: -73.3219,
  },
  {
    name: "Horn Lake",
    lat: 34.9512,
    lng: -90.0501,
  },
  {
    name: "Pereyaslav-Khmel'nyts'kyy",
    lat: 50.0661,
    lng: 31.4422,
  },
  {
    name: "Orvault",
    lat: 47.2717,
    lng: -1.6225,
  },
  {
    name: "Oakleaf Plantation",
    lat: 30.1689,
    lng: -81.8337,
  },
  {
    name: "Estarreja",
    lat: 40.75,
    lng: -8.5667,
  },
  {
    name: "Prior Lake",
    lat: 44.7251,
    lng: -93.4409,
  },
  {
    name: "Gubkinskiy",
    lat: 64.4333,
    lng: 76.5,
  },
  {
    name: "Caboolture",
    lat: -27.0667,
    lng: 152.967,
  },
  {
    name: "Huntley",
    lat: 42.1599,
    lng: -88.433,
  },
  {
    name: "Maple Valley",
    lat: 47.3659,
    lng: -122.0368,
  },
  {
    name: "New Milford",
    lat: 41.6043,
    lng: -73.4213,
  },
  {
    name: "San Agustin Tlaxiaca",
    lat: 20.1144,
    lng: -98.8867,
  },
  {
    name: "Cavaillon",
    lat: 43.8375,
    lng: 5.0381,
  },
  {
    name: "Oak Forest",
    lat: 41.6054,
    lng: -87.7527,
  },
  {
    name: "Schloss Holte-Stukenbrock",
    lat: 51.8833,
    lng: 8.6167,
  },
  {
    name: "Mayskiy",
    lat: 43.6333,
    lng: 44.0667,
  },
  {
    name: "Glen Cove",
    lat: 40.8709,
    lng: -73.6287,
  },
  {
    name: "Saumur",
    lat: 47.26,
    lng: -0.0769,
  },
  {
    name: "Wangen im Allgau",
    lat: 47.6858,
    lng: 9.8342,
  },
  {
    name: "Szentes",
    lat: 46.6519,
    lng: 20.2572,
  },
  {
    name: "Colider",
    lat: -10.8173,
    lng: -55.4506,
  },
  {
    name: "West Islip",
    lat: 40.7097,
    lng: -73.2971,
  },
  {
    name: "Sikonge",
    lat: -5.6295,
    lng: 32.77,
  },
  {
    name: "Otake",
    lat: 34.2381,
    lng: 132.2222,
  },
  {
    name: "Kiskunhalas",
    lat: 46.4319,
    lng: 19.4883,
  },
  {
    name: "Shoreview",
    lat: 45.0842,
    lng: -93.1358,
  },
  {
    name: "Windsor",
    lat: 38.5417,
    lng: -122.8086,
  },
  {
    name: "Sterling",
    lat: 41.7995,
    lng: -89.6956,
  },
  {
    name: "Bernards",
    lat: 40.6761,
    lng: -74.5678,
  },
  {
    name: "Hennigsdorf",
    lat: 52.6378,
    lng: 13.2036,
  },
  {
    name: "Sens",
    lat: 48.1975,
    lng: 3.2877,
  },
  {
    name: "Ronse",
    lat: 50.75,
    lng: 3.6,
  },
  {
    name: "Tlaxcoapan",
    lat: 20.0953,
    lng: -99.22,
  },
  {
    name: "Sol'-Iletsk",
    lat: 51.1667,
    lng: 54.9833,
  },
  {
    name: "Colleyville",
    lat: 32.8913,
    lng: -97.1486,
  },
  {
    name: "Wilmette",
    lat: 42.0771,
    lng: -87.7282,
  },
  {
    name: "Plum",
    lat: 40.5024,
    lng: -79.7496,
  },
  {
    name: "Mount Pleasant",
    lat: 42.7129,
    lng: -87.8875,
  },
  {
    name: "Libenge",
    lat: 3.6604,
    lng: 18.62,
  },
  {
    name: "Dodge City",
    lat: 37.761,
    lng: -100.0183,
  },
  {
    name: "Stafford",
    lat: 39.7049,
    lng: -74.2643,
  },
  {
    name: "Pamidi",
    lat: 14.95,
    lng: 77.5833,
  },
  {
    name: "Amatepec",
    lat: 18.65,
    lng: -100.15,
  },
  {
    name: "Ruzomberok",
    lat: 49.0786,
    lng: 19.3083,
  },
  {
    name: "McHenry",
    lat: 42.3388,
    lng: -88.2931,
  },
  {
    name: "Burlington",
    lat: 42.5022,
    lng: -71.2027,
  },
  {
    name: "Lohne",
    lat: 52.6667,
    lng: 8.2386,
  },
  {
    name: "Kazincbarcika",
    lat: 48.2531,
    lng: 20.6456,
  },
  {
    name: "Waterville",
    lat: 44.5441,
    lng: -69.6624,
  },
  {
    name: "Gradignan",
    lat: 44.7725,
    lng: -0.6156,
  },
  {
    name: "Walcz",
    lat: 53.2667,
    lng: 16.4667,
  },
  {
    name: "Montbeliard",
    lat: 47.51,
    lng: 6.8,
  },
  {
    name: "Norfolk",
    lat: 42.0327,
    lng: -97.4208,
  },
  {
    name: "Shaker Heights",
    lat: 41.4744,
    lng: -81.5496,
  },
  {
    name: "Xalatlaco",
    lat: 19.1811,
    lng: -99.4164,
  },
  {
    name: "Teltow",
    lat: 52.4022,
    lng: 13.2706,
  },
  {
    name: "Marcos Juarez",
    lat: -32.7,
    lng: -62.1,
  },
  {
    name: "New Windsor",
    lat: 41.4742,
    lng: -74.1089,
  },
  {
    name: "Erie",
    lat: 40.0403,
    lng: -105.0398,
  },
  {
    name: "Brownsburg",
    lat: 39.833,
    lng: -86.3824,
  },

  {
    name: "Chaska",
    lat: 44.8164,
    lng: -93.6092,
  },
  {
    name: "Aripuana",
    lat: -9.17,
    lng: -60.64,
  },
  {
    name: "Strausberg",
    lat: 52.5808,
    lng: 13.8814,
  },
  {
    name: "Shelby",
    lat: 35.2904,
    lng: -81.5451,
  },
  {
    name: "Karpinsk",
    lat: 59.7667,
    lng: 60,
  },
  {
    name: "Uyuni",
    lat: -20.4627,
    lng: -66.824,
  },
  {
    name: "Wakefield",
    lat: 42.5035,
    lng: -71.0656,
  },
  {
    name: "Lauf",
    lat: 49.5103,
    lng: 11.2772,
  },
  {
    name: "Leo",
    lat: 11.094,
    lng: -2.098,
  },
  {
    name: "Maryland Heights",
    lat: 38.7189,
    lng: -90.4749,
  },
  {
    name: "Kamyshlov",
    lat: 56.85,
    lng: 62.7167,
  },
  {
    name: "Magna",
    lat: 40.7634,
    lng: -112.1599,
  },
  {
    name: "Xenia",
    lat: 39.6828,
    lng: -83.9414,
  },
  {
    name: "Allen Park",
    lat: 42.2595,
    lng: -83.2107,
  },
  {
    name: "Khanabad",
    lat: 36.6831,
    lng: 69.1636,
  },
  {
    name: "New Lenox",
    lat: 41.5097,
    lng: -87.97,
  },
  {
    name: "Jaltenco",
    lat: 19.7511,
    lng: -99.0931,
  },
  {
    name: "Pinarbasi",
    lat: 38.722,
    lng: 36.391,
  },
  {
    name: "Hanahan",
    lat: 32.9302,
    lng: -80.0027,
  },
  {
    name: "Karasuk",
    lat: 53.7333,
    lng: 78.0333,
  },
  {
    name: "Douglas",
    lat: 54.15,
    lng: -4.4819,
  },
  {
    name: "Hamminkeln",
    lat: 51.7319,
    lng: 6.5908,
  },
  {
    name: "Kinston",
    lat: 35.2748,
    lng: -77.5936,
  },
  {
    name: "Searcy",
    lat: 35.2418,
    lng: -91.7351,
  },
  {
    name: "Saikaicho-kobago",
    lat: 32.9331,
    lng: 129.6431,
  },
  {
    name: "Fern Down",
    lat: 50.81,
    lng: -1.9,
  },
  {
    name: "Boisbriand",
    lat: 45.62,
    lng: -73.83,
  },
  {
    name: "Brzozow",
    lat: 49.6953,
    lng: 22.0194,
  },
  {
    name: "Pacasmayo",
    lat: -7.4003,
    lng: -79.57,
  },
  {
    name: "Doctor Mora",
    lat: 21.1425,
    lng: -100.3192,
  },
  {
    name: "New London",
    lat: 41.3502,
    lng: -72.1023,
  },
  {
    name: "Lamego",
    lat: 41.0833,
    lng: -7.8667,
  },
  {
    name: "Bafoulabe",
    lat: 13.8064,
    lng: -10.8322,
  },
  {
    name: "Ocean",
    lat: 40.2519,
    lng: -74.0392,
  },
  {
    name: "Dix Hills",
    lat: 40.8035,
    lng: -73.337,
  },
  {
    name: "West Chicago",
    lat: 41.896,
    lng: -88.2253,
  },
  {
    name: "Dyat'kovo",
    lat: 53.6,
    lng: 34.3333,
  },
  {
    name: "Springettsbury",
    lat: 39.9907,
    lng: -76.6736,
  },
  {
    name: "Novoaleksandrovsk",
    lat: 45.4933,
    lng: 41.2183,
  },
  {
    name: "Saint-Dizier",
    lat: 48.6383,
    lng: 4.9497,
  },
  {
    name: "La Garde",
    lat: 43.1256,
    lng: 6.0108,
  },
  {
    name: "Obertshausen",
    lat: 50.0715,
    lng: 8.8482,
  },
  {
    name: "Semiluki",
    lat: 51.6833,
    lng: 39.0333,
  },
  {
    name: "Immokalee",
    lat: 26.4253,
    lng: -81.4251,
  },
  {
    name: "McDonough",
    lat: 33.4399,
    lng: -84.1509,
  },
  {
    name: "Sumperk",
    lat: 49.9653,
    lng: 16.9707,
  },
  {
    name: "Montreux",
    lat: 46.4333,
    lng: 6.9167,
  },
  {
    name: "Piracaia",
    lat: -23.0539,
    lng: -46.3581,
  },
  {
    name: "Narasannapeta",
    lat: 18.4151,
    lng: 84.0447,
  },
  {
    name: "Polysayevo",
    lat: 54.6,
    lng: 86.2833,
  },
  {
    name: "Bayonet Point",
    lat: 28.3254,
    lng: -82.6834,
  },
  {
    name: "West Linn",
    lat: 45.3669,
    lng: -122.6399,
  },
  {
    name: "Weiterstadt",
    lat: 49.9,
    lng: 8.6,
  },
  {
    name: "Cortland",
    lat: 42.6004,
    lng: -76.1784,
  },
  {
    name: "Lemoore",
    lat: 36.2949,
    lng: -119.7983,
  },
  {
    name: "Alvin",
    lat: 29.3871,
    lng: -95.2933,
  },
  {
    name: "Bushey",
    lat: 51.6429,
    lng: -0.3604,
  },
  {
    name: "Sarubetsu",
    lat: 42.9083,
    lng: 143.3561,
  },
  {
    name: "Kirzhach",
    lat: 56.15,
    lng: 38.8667,
  },
  {
    name: "Temescal Valley",
    lat: 33.7581,
    lng: -117.4677,
  },
  {
    name: "Tubize",
    lat: 50.6928,
    lng: 4.205,
  },
  {
    name: "Nova Zagora",
    lat: 42.4903,
    lng: 26.0122,
  },
  {
    name: "Wappinger",
    lat: 41.59,
    lng: -73.8918,
  },
  {
    name: "Hohen Neuendorf",
    lat: 52.6667,
    lng: 13.2831,
  },
  {
    name: "Waynesboro",
    lat: 39.7525,
    lng: -77.5822,
  },
  {
    name: "Krasnoarmeysk",
    lat: 56.1,
    lng: 38.1333,
  },
  {
    name: "Betong",
    lat: 5.7731,
    lng: 101.0725,
  },
  {
    name: "Sosnogorsk",
    lat: 63.5833,
    lng: 53.9333,
  },
  {
    name: "Segezha",
    lat: 63.7415,
    lng: 34.3222,
  },
  {
    name: "Lebanon",
    lat: 43.6353,
    lng: -72.2531,
  },
  {
    name: "Thomasville",
    lat: 35.8813,
    lng: -80.0807,
  },
  {
    name: "Ilchester",
    lat: 39.2187,
    lng: -76.7684,
  },
  {
    name: "Macka",
    lat: 40.8186,
    lng: 39.6136,
  },
  {
    name: "Temple Terrace",
    lat: 28.0437,
    lng: -82.3774,
  },
  {
    name: "Lafayette",
    lat: 37.8919,
    lng: -122.1189,
  },
  {
    name: "Kunisakimachi-tsurugawa",
    lat: 33.5653,
    lng: 131.7317,
  },
  {
    name: "Coulsdon",
    lat: 51.3211,
    lng: -0.1386,
  },
  {
    name: "Az Zabadani",
    lat: 33.7247,
    lng: 36.1003,
  },
  {
    name: "Dal'nerechensk",
    lat: 45.9333,
    lng: 133.7333,
  },
  {
    name: "Norco",
    lat: 33.9252,
    lng: -117.5499,
  },
  {
    name: "Pirapozinho",
    lat: -22.2753,
    lng: -51.5,
  },
  {
    name: "Kirovsk",
    lat: 67.6142,
    lng: 33.6717,
  },
  {
    name: "Khadbari",
    lat: 27.3667,
    lng: 87.2167,
  },
  {
    name: "Bolkhov",
    lat: 53.45,
    lng: 36,
  },
  {
    name: "As Sanamayn",
    lat: 33.0711,
    lng: 36.1842,
  },
  {
    name: "Shalqar",
    lat: 47.8333,
    lng: 59.6,
  },
  {
    name: "Hermanus",
    lat: -34.4167,
    lng: 19.3,
  },
  {
    name: "Dois Corregos",
    lat: -22.3661,
    lng: -48.3803,
  },
  {
    name: "Ureshinomachi-shimojuku",
    lat: 33.1278,
    lng: 130.06,
  },
  {
    name: "Muhlacker",
    lat: 48.95,
    lng: 8.8392,
  },
  {
    name: "Severoural'sk",
    lat: 60.15,
    lng: 59.9333,
  },
  {
    name: "San Antonio del Sur",
    lat: 20.0569,
    lng: -74.8078,
  },
  {
    name: "Congleton",
    lat: 53.162,
    lng: -2.217,
  },
  {
    name: "La Union",
    lat: -40.2952,
    lng: -73.0822,
  },
  {
    name: "Traralgon",
    lat: -38.1958,
    lng: 146.5403,
  },
  {
    name: "Heppenheim",
    lat: 49.6415,
    lng: 8.645,
  },
  {
    name: "Vernon Hills",
    lat: 42.234,
    lng: -87.9608,
  },
  {
    name: "Pearl",
    lat: 32.273,
    lng: -90.0918,
  },
  {
    name: "Horsham",
    lat: 40.1993,
    lng: -75.1665,
  },
  {
    name: "Nordenham",
    lat: 53.5,
    lng: 8.4667,
  },
  {
    name: "Marquette",
    lat: 46.544,
    lng: -87.4082,
  },
  {
    name: "Zirndorf",
    lat: 49.45,
    lng: 10.95,
  },
  {
    name: "Omachi",
    lat: 36.5,
    lng: 137.85,
  },
  {
    name: "Oltenita",
    lat: 44.0864,
    lng: 26.6364,
  },
  {
    name: "Citrus Park",
    lat: 28.073,
    lng: -82.5628,
  },
  {
    name: "Sedalia",
    lat: 38.7042,
    lng: -93.2351,
  },
  {
    name: "Bessemer",
    lat: 33.3709,
    lng: -86.9713,
  },
  {
    name: "Migdal Ha`Emeq",
    lat: 32.6786,
    lng: 35.2444,
  },
  {
    name: "Butzbach",
    lat: 50.4367,
    lng: 8.6622,
  },
  {
    name: "Selm",
    lat: 51.6833,
    lng: 7.4833,
  },
  {
    name: "Uherske Hradiste",
    lat: 49.0698,
    lng: 17.4597,
  },
  {
    name: "Oldbury",
    lat: 52.505,
    lng: -2.0159,
  },
  {
    name: "Aurillac",
    lat: 44.9261,
    lng: 2.4406,
  },
  {
    name: "Vsetin",
    lat: 49.3387,
    lng: 17.9962,
  },
  {
    name: "Sangerhausen",
    lat: 51.4667,
    lng: 11.3,
  },
  {
    name: "New Milton",
    lat: 50.76,
    lng: -1.65,
  },
  {
    name: "Batavia",
    lat: 41.8479,
    lng: -88.311,
  },
  {
    name: "Lower Providence",
    lat: 40.1485,
    lng: -75.4267,
  },
  {
    name: "Topol'cany",
    lat: 48.55,
    lng: 18.1833,
  },
  {
    name: "Kirovsk",
    lat: 59.8667,
    lng: 30.9833,
  },
  {
    name: "West Milford",
    lat: 41.1062,
    lng: -74.3913,
  },
  {
    name: "Ocuilan de Arteaga",
    lat: 19,
    lng: -99.4,
  },
  {
    name: "Garden City",
    lat: 42.3244,
    lng: -83.3412,
  },
  {
    name: "Ehingen an der Donau",
    lat: 48.2833,
    lng: 9.7236,
  },
  {
    name: "Chanhassen",
    lat: 44.8544,
    lng: -93.5621,
  },
  {
    name: "Ilha Solteira",
    lat: -20.4272,
    lng: -51.3436,
  },
  {
    name: "Daventry",
    lat: 52.26,
    lng: -1.16,
  },
  {
    name: "Frauenfeld",
    lat: 47.5558,
    lng: 8.8964,
  },
  {
    name: "Cabot",
    lat: 34.9768,
    lng: -92.0274,
  },
  {
    name: "Bad Honnef am Rhein",
    lat: 50.645,
    lng: 7.2269,
  },
  {
    name: "Pukekohe East",
    lat: -37.195,
    lng: 174.9481,
  },
  {
    name: "Ludwigsfelde",
    lat: 52.2997,
    lng: 13.2667,
  },
  {
    name: "Kalfou",
    lat: 10.284,
    lng: 14.9298,
  },
  {
    name: "Vicksburg",
    lat: 32.3173,
    lng: -90.8868,
  },
  {
    name: "Karoi",
    lat: -16.8196,
    lng: 29.68,
  },
  {
    name: "Bingen am Rhein",
    lat: 49.9669,
    lng: 7.895,
  },
  {
    name: "Kluczbork",
    lat: 50.9833,
    lng: 18.2167,
  },
  {
    name: "Mahwah",
    lat: 41.0816,
    lng: -74.1856,
  },
  {
    name: "Schleswig",
    lat: 54.5153,
    lng: 9.5697,
  },
  {
    name: "Ayorou",
    lat: 14.7318,
    lng: 0.9195,
  },
  {
    name: "Farafangana",
    lat: -22.8166,
    lng: 47.8332,
  },
  {
    name: "Brawley",
    lat: 32.9783,
    lng: -115.5287,
  },
  {
    name: "Bouknadel",
    lat: 34.1245,
    lng: -6.748,
  },
  {
    name: "Geretsried",
    lat: 47.8667,
    lng: 11.4667,
  },
  {
    name: "Neenah",
    lat: 44.167,
    lng: -88.4764,
  },
  {
    name: "Perevalsk",
    lat: 48.4333,
    lng: 38.8167,
  },
  {
    name: "Snoqualmie",
    lat: 47.5293,
    lng: -121.8412,
  },
  {
    name: "Holbrook",
    lat: 40.7944,
    lng: -73.0707,
  },
  {
    name: "Montemor-o-Velho",
    lat: 40.1667,
    lng: -8.6833,
  },
  {
    name: "Labytnangi",
    lat: 66.65,
    lng: 66.4,
  },
  {
    name: "Troy",
    lat: 40.0436,
    lng: -84.2191,
  },
  {
    name: "West Odessa",
    lat: 31.8388,
    lng: -102.4996,
  },
  {
    name: "Hercules",
    lat: 38.0064,
    lng: -122.2564,
  },
  {
    name: "Semirom",
    lat: 31.4142,
    lng: 51.5694,
  },
  {
    name: "Lake City",
    lat: 30.1901,
    lng: -82.647,
  },
  {
    name: "Lochearn",
    lat: 39.346,
    lng: -76.7307,
  },
  {
    name: "Upper Dublin",
    lat: 40.1502,
    lng: -75.1813,
  },
  {
    name: "Bishop Auckland",
    lat: 54.6566,
    lng: -1.6768,
  },
  {
    name: "Wethersfield",
    lat: 41.7013,
    lng: -72.6703,
  },
  {
    name: "Paramus",
    lat: 40.9455,
    lng: -74.0712,
  },
  {
    name: "Lindau",
    lat: 47.5458,
    lng: 9.6839,
  },
  {
    name: "Greenville",
    lat: 33.1116,
    lng: -96.1098,
  },
  {
    name: "Elefsina",
    lat: 38.0414,
    lng: 23.5453,
  },
  {
    name: "Okeechobee",
    lat: 27.2414,
    lng: -80.8298,
  },
  {
    name: "La Teste-de-Buch",
    lat: 44.62,
    lng: -1.1457,
  },
  {
    name: "Vierzon",
    lat: 47.2225,
    lng: 2.0694,
  },
  {
    name: "Malyn",
    lat: 50.7689,
    lng: 29.27,
  },
  {
    name: "Sasovo",
    lat: 54.35,
    lng: 41.9167,
  },
  {
    name: "Swiecie",
    lat: 53.4167,
    lng: 18.4333,
  },
  {
    name: "Edgewood",
    lat: 39.421,
    lng: -76.2968,
  },
  {
    name: "Wilmslow",
    lat: 53.325,
    lng: -2.239,
  },
  {
    name: "Tavira",
    lat: 37.1309,
    lng: -7.6506,
  },
  {
    name: "North Kingstown",
    lat: 41.5687,
    lng: -71.4629,
  },
  {
    name: "Yuanchang",
    lat: 23.642,
    lng: 120.323,
  },
  {
    name: "Conception Bay South",
    lat: 47.5167,
    lng: -52.9833,
  },
  {
    name: "Pfaffenhofen",
    lat: 48.5333,
    lng: 11.5167,
  },
  {
    name: "Kulmbach",
    lat: 50.1,
    lng: 11.4333,
  },
  {
    name: "Lice",
    lat: 38.4549,
    lng: 40.6519,
  },
  {
    name: "Puerto Varas",
    lat: -41.3178,
    lng: -72.9827,
  },
  {
    name: "Muscatine",
    lat: 41.4196,
    lng: -91.068,
  },
  {
    name: "Novopavlovsk",
    lat: 43.9636,
    lng: 43.6394,
  },
  {
    name: "Boone",
    lat: 36.2111,
    lng: -81.6668,
  },
  {
    name: "Moscow",
    lat: 46.7307,
    lng: -116.9986,
  },
  {
    name: "Oum Hadjer",
    lat: 13.2833,
    lng: 19.6833,
  },
  {
    name: "Libourne",
    lat: 44.92,
    lng: -0.24,
  },
  {
    name: "Toktogul",
    lat: 41.8826,
    lng: 72.9372,
  },
  {
    name: "Santiago Papasquiaro",
    lat: 25.0439,
    lng: -105.4192,
  },
  {
    name: "Sebastian",
    lat: 27.7882,
    lng: -80.4813,
  },
  {
    name: "Northport",
    lat: 33.2589,
    lng: -87.5984,
  },
  {
    name: "Helmstedt",
    lat: 52.2281,
    lng: 11.0106,
  },
  {
    name: "Mizdah",
    lat: 31.4337,
    lng: 12.9833,
  },
  {
    name: "Saint-Bruno-de-Montarville",
    lat: 45.5333,
    lng: -73.35,
  },
  {
    name: "Natchez",
    lat: 31.5437,
    lng: -91.3867,
  },
  {
    name: "Zacualtipan",
    lat: 20.65,
    lng: -98.65,
  },
  {
    name: "Sankt Wendel",
    lat: 49.4667,
    lng: 7.1667,
  },
  {
    name: "Winchester",
    lat: 38.0017,
    lng: -84.1907,
  },
  {
    name: "Odemira",
    lat: 37.5833,
    lng: -8.6333,
  },
  {
    name: "Itai",
    lat: -23.4178,
    lng: -49.0906,
  },
  {
    name: "Zavodoukovsk",
    lat: 56.5,
    lng: 66.55,
  },
  {
    name: "Traun",
    lat: 48.2217,
    lng: 14.2397,
  },
  {
    name: "Saintes",
    lat: 45.7464,
    lng: -0.6333,
  },
  {
    name: "Kamo",
    lat: 37.6667,
    lng: 139.0333,
  },
  {
    name: "Puerto Piritu",
    lat: 10.0667,
    lng: -65.05,
  },
  {
    name: "East St. Louis",
    lat: 38.6156,
    lng: -90.1304,
  },
  {
    name: "Sachse",
    lat: 32.9726,
    lng: -96.5793,
  },
  {
    name: "Tinipuka",
    lat: -4.5496,
    lng: 136.89,
  },
  {
    name: "Yamagata",
    lat: 35.5061,
    lng: 136.7814,
  },
  {
    name: "Friedrichsdorf",
    lat: 50.2569,
    lng: 8.6418,
  },
  {
    name: "Diapaga",
    lat: 12.077,
    lng: 1.796,
  },
  {
    name: "Achern",
    lat: 48.6314,
    lng: 8.0739,
  },
  {
    name: "Paris",
    lat: 33.6688,
    lng: -95.546,
  },
  {
    name: "Haines City",
    lat: 28.11,
    lng: -81.6157,
  },
  {
    name: "Tono",
    lat: 39.3275,
    lng: 141.5336,
  },
  {
    name: "Mason City",
    lat: 43.1487,
    lng: -93.1998,
  },
  {
    name: "Salamina",
    lat: 37.9333,
    lng: 23.5,
  },
  {
    name: "Marshalltown",
    lat: 42.0341,
    lng: -92.9067,
  },
  {
    name: "Kurchaloy",
    lat: 43.2019,
    lng: 46.0881,
  },
  {
    name: "Kimovsk",
    lat: 53.9667,
    lng: 38.5333,
  },
  {
    name: "Montgomery Township",
    lat: 40.2411,
    lng: -75.2319,
  },
  {
    name: "Superior",
    lat: 46.6941,
    lng: -92.0823,
  },
  {
    name: "Mansfield",
    lat: 41.7892,
    lng: -72.2287,
  },
  {
    name: "Timberwood Park",
    lat: 29.6994,
    lng: -98.4838,
  },
  {
    name: "Karlovo",
    lat: 42.643,
    lng: 24.8053,
  },
  {
    name: "Marmara Ereglisi",
    lat: 40.9697,
    lng: 27.9553,
  },
  {
    name: "Pantelimon",
    lat: 44.4528,
    lng: 26.2036,
  },
  {
    name: "Alamos",
    lat: 27.0275,
    lng: -108.94,
  },
  {
    name: "Medina",
    lat: 41.1358,
    lng: -81.8694,
  },
  {
    name: "Conway",
    lat: 33.8399,
    lng: -79.0424,
  },
  {
    name: "Barberton",
    lat: 41.0094,
    lng: -81.6038,
  },
  {
    name: "Espanola",
    lat: 36.0041,
    lng: -106.0669,
  },
  {
    name: "Koko",
    lat: 11.4232,
    lng: 4.517,
  },
  {
    name: "Armidale",
    lat: -30.5,
    lng: 151.65,
  },
  {
    name: "San Vicente de Canete",
    lat: -13.0833,
    lng: -76.4,
  },
  {
    name: "Cuajinicuilapa",
    lat: 16.4717,
    lng: -98.4153,
  },
  {
    name: "Newport",
    lat: 50.701,
    lng: -1.2883,
  },
  {
    name: "Ishii",
    lat: 34.0747,
    lng: 134.4406,
  },
  {
    name: "Malangawa",
    lat: 26.8667,
    lng: 85.5667,
  },
  {
    name: "Wetzikon",
    lat: 47.3208,
    lng: 8.7931,
  },
  {
    name: "Rock Springs",
    lat: 41.5951,
    lng: -109.2238,
  },
  {
    name: "Wagrowiec",
    lat: 52.8,
    lng: 17.2,
  },
  {
    name: "Plainview",
    lat: 40.7832,
    lng: -73.4732,
  },
  {
    name: "Neiba",
    lat: 18.4666,
    lng: -71.4166,
  },
  {
    name: "Mercer Island",
    lat: 47.5661,
    lng: -122.232,
  },
  {
    name: "Lubbecke",
    lat: 52.3081,
    lng: 8.6231,
  },
  {
    name: "Heber",
    lat: 40.5068,
    lng: -111.3984,
  },
  {
    name: "White Bear Lake",
    lat: 45.0657,
    lng: -93.015,
  },
  {
    name: "Roth",
    lat: 49.2461,
    lng: 11.0911,
  },
  {
    name: "Chester-le-Street",
    lat: 54.8594,
    lng: -1.5699,
  },
  {
    name: "Verl",
    lat: 51.8831,
    lng: 8.5167,
  },
  {
    name: "Cochrane",
    lat: 51.189,
    lng: -114.467,
  },
  {
    name: "Blagnac",
    lat: 43.6364,
    lng: 1.3906,
  },
  {
    name: "Laurel",
    lat: 31.6956,
    lng: -89.1448,
  },
  {
    name: "Wall",
    lat: 40.1674,
    lng: -74.0974,
  },
  {
    name: "Villanueva de la Serena",
    lat: 38.9739,
    lng: -5.8003,
  },
  {
    name: "Yany Kapu",
    lat: 45.9675,
    lng: 33.8003,
  },
  {
    name: "Broadstairs",
    lat: 51.3589,
    lng: 1.4394,
  },
  {
    name: "South Windsor",
    lat: 41.8353,
    lng: -72.5733,
  },
  {
    name: "Huejotzingo",
    lat: 19.1594,
    lng: -98.4073,
  },
  {
    name: "Kireyevsk",
    lat: 53.9333,
    lng: 37.9333,
  },
  {
    name: "Merrimack",
    lat: 42.8547,
    lng: -71.5188,
  },
  {
    name: "Haskoy",
    lat: 38.6864,
    lng: 41.6936,
  },
  {
    name: "Velingrad",
    lat: 42.0267,
    lng: 23.991,
  },
  {
    name: "Surgidero de Batabano",
    lat: 22.6986,
    lng: -82.2939,
  },
  {
    name: "Pereira Barreto",
    lat: -20.6383,
    lng: -51.1092,
  },
  {
    name: "Cave Spring",
    lat: 37.2254,
    lng: -80.0073,
  },
  {
    name: "Exeter Township",
    lat: 40.3139,
    lng: -75.834,
  },
  {
    name: "Woodstock",
    lat: 42.3096,
    lng: -88.4352,
  },
  {
    name: "Gross-Gerau",
    lat: 49.9214,
    lng: 8.4818,
  },
  {
    name: "Zittau",
    lat: 50.8961,
    lng: 14.8072,
  },
  {
    name: "Santa Rosa de Viterbo",
    lat: -21.4728,
    lng: -47.3628,
  },
  {
    name: "Marshfield",
    lat: 42.114,
    lng: -70.715,
  },
  {
    name: "Green",
    lat: 40.9483,
    lng: -81.4757,
  },
  {
    name: "Saky",
    lat: 45.1336,
    lng: 33.5772,
  },
  {
    name: "Pfungstadt",
    lat: 49.8056,
    lng: 8.6044,
  },
  {
    name: "Oga",
    lat: 39.8867,
    lng: 139.8478,
  },
  {
    name: "Rinteln",
    lat: 52.1906,
    lng: 9.0814,
  },
  {
    name: "Golborne",
    lat: 53.4758,
    lng: -2.5943,
  },
  {
    name: "Thetford Mines",
    lat: 46.1,
    lng: -71.3,
  },
  {
    name: "Ditzingen",
    lat: 48.8264,
    lng: 9.0667,
  },
  {
    name: "Pooler",
    lat: 32.1043,
    lng: -81.2568,
  },
  {
    name: "Lennestadt",
    lat: 51.1236,
    lng: 8.0681,
  },
  {
    name: "Balabanovo",
    lat: 55.1833,
    lng: 36.65,
  },
  {
    name: "Haysyn",
    lat: 48.8094,
    lng: 29.3906,
  },
  {
    name: "Siofok",
    lat: 46.9,
    lng: 18.05,
  },
  {
    name: "Madison",
    lat: 32.4738,
    lng: -90.13,
  },
  {
    name: "Nesher",
    lat: 32.7667,
    lng: 35.05,
  },
  {
    name: "Randolph",
    lat: 40.8434,
    lng: -74.5818,
  },
  {
    name: "Lancaster",
    lat: 34.7247,
    lng: -80.7801,
  },
  {
    name: "Otradnoye",
    lat: 59.7833,
    lng: 30.8167,
  },
  {
    name: "Jumilla",
    lat: 38.4792,
    lng: -1.325,
  },
  {
    name: "Rottweil",
    lat: 48.1681,
    lng: 8.6247,
  },
  {
    name: "Austin",
    lat: 43.6718,
    lng: -92.9783,
  },
  {
    name: "Lockport",
    lat: 41.5904,
    lng: -88.0292,
  },
  {
    name: "Franklin",
    lat: 39.4938,
    lng: -86.0546,
  },
  {
    name: "Wiehl",
    lat: 50.95,
    lng: 7.5333,
  },
  {
    name: "Courtenay",
    lat: 49.6878,
    lng: -124.9944,
  },
  {
    name: "Vynohradiv",
    lat: 48.1397,
    lng: 23.0331,
  },
  {
    name: "Gosforth",
    lat: 55.007,
    lng: -1.623,
  },
  {
    name: "South Salt Lake",
    lat: 40.7056,
    lng: -111.8986,
  },
  {
    name: "Saint-Ouen-l'Aumone",
    lat: 49.0447,
    lng: 2.1111,
  },
  {
    name: "Plettenberg",
    lat: 51.2128,
    lng: 7.8715,
  },
  {
    name: "Tarpon Springs",
    lat: 28.1493,
    lng: -82.7623,
  },
  {
    name: "Etampes",
    lat: 48.4343,
    lng: 2.1615,
  },
  {
    name: "Busselton",
    lat: -33.6478,
    lng: 115.3458,
  },
  {
    name: "Rudolstadt",
    lat: 50.7169,
    lng: 11.3275,
  },
  {
    name: "Tougue",
    lat: 11.44,
    lng: -11.67,
  },
  {
    name: "Stassfurt",
    lat: 51.8667,
    lng: 11.5667,
  },
  {
    name: "Sevierville",
    lat: 35.8873,
    lng: -83.5677,
  },
  {
    name: "Bluffton",
    lat: 32.2135,
    lng: -80.9316,
  },
  {
    name: "Forest Grove",
    lat: 45.5244,
    lng: -123.1101,
  },
  {
    name: "Farmington",
    lat: 41.7288,
    lng: -72.8407,
  },
  {
    name: "Holt",
    lat: 42.6416,
    lng: -84.5307,
  },
  {
    name: "Yanaul",
    lat: 56.2667,
    lng: 54.9333,
  },
  {
    name: "South Portland",
    lat: 43.631,
    lng: -70.2895,
  },
  {
    name: "Londonderry",
    lat: 42.8796,
    lng: -71.3873,
  },
  {
    name: "Denison",
    lat: 33.7672,
    lng: -96.5807,
  },
  {
    name: "Maaseik",
    lat: 51.1019,
    lng: 5.7856,
  },
  {
    name: "Brilon",
    lat: 51.3956,
    lng: 8.5678,
  },
  {
    name: "Bialogard",
    lat: 54.007,
    lng: 15.9875,
  },
  {
    name: "Tanabi",
    lat: -20.6258,
    lng: -49.6489,
  },
  {
    name: "Owatonna",
    lat: 44.0914,
    lng: -93.2304,
  },
  {
    name: "Korostyshiv",
    lat: 50.3186,
    lng: 29.0592,
  },
  {
    name: "Workington",
    lat: 54.6365,
    lng: -3.5549,
  },
  {
    name: "Witham",
    lat: 51.7978,
    lng: 0.6373,
  },
  {
    name: "Moon",
    lat: 40.5082,
    lng: -80.2073,
  },
  {
    name: "Markkleeberg",
    lat: 51.2778,
    lng: 12.3833,
  },
  {
    name: "Laon",
    lat: 49.5639,
    lng: 3.6244,
  },
  {
    name: "Inta",
    lat: 66.0398,
    lng: 60.1315,
  },
  {
    name: "Sun City West",
    lat: 33.6693,
    lng: -112.3575,
  },
  {
    name: "Freeport City",
    lat: 26.5333,
    lng: -78.7,
  },
  {
    name: "Ozery",
    lat: 54.85,
    lng: 38.55,
  },
  {
    name: "Albergaria-a-Velha",
    lat: 40.6936,
    lng: -8.4806,
  },
  {
    name: "Sevlievo",
    lat: 43.0258,
    lng: 25.1039,
  },
  {
    name: "Harsewinkel",
    lat: 51.9667,
    lng: 8.2331,
  },
  {
    name: "Meckenheim",
    lat: 50.6333,
    lng: 7.0167,
  },
  {
    name: "Claremore",
    lat: 36.3143,
    lng: -95.6099,
  },
  {
    name: "Whitehaven",
    lat: 54.548,
    lng: -3.5855,
  },
  {
    name: "Kose",
    lat: 34.4633,
    lng: 135.7403,
  },
  {
    name: "Homewood",
    lat: 33.4617,
    lng: -86.8092,
  },
  {
    name: "Dedham",
    lat: 42.2466,
    lng: -71.1777,
  },
  {
    name: "Muret",
    lat: 43.4611,
    lng: 1.3267,
  },
  {
    name: "Chiromo",
    lat: -16.55,
    lng: 35.1332,
  },
  {
    name: "Fort Hood",
    lat: 31.1345,
    lng: -97.7797,
  },
  {
    name: "De Witt",
    lat: 43.0503,
    lng: -76.0712,
  },
  {
    name: "Magog",
    lat: 45.2667,
    lng: -72.15,
  },
  {
    name: "Mednogorsk",
    lat: 51.4221,
    lng: 57.5953,
  },
  {
    name: "Jawor",
    lat: 51.05,
    lng: 16.1833,
  },
  {
    name: "Middle River",
    lat: 39.3345,
    lng: -76.4318,
  },
  {
    name: "Guanhaes",
    lat: -18.78,
    lng: -42.95,
  },
  {
    name: "Horb am Neckar",
    lat: 48.445,
    lng: 8.6911,
  },
  {
    name: "Farmington",
    lat: 40.9846,
    lng: -111.9065,
  },
  {
    name: "Zheleznovodsk",
    lat: 44.1333,
    lng: 43.0333,
  },
  {
    name: "Senboku",
    lat: 39.7,
    lng: 140.7306,
  },
  {
    name: "Pinal de Amoles",
    lat: 21.1342,
    lng: -99.4586,
  },
  {
    name: "Forest City",
    lat: 35.3338,
    lng: -81.8702,
  },
  {
    name: "Rochefort",
    lat: 45.9421,
    lng: -0.9588,
  },
  {
    name: "Salem",
    lat: 37.2864,
    lng: -80.0555,
  },
  {
    name: "Baar",
    lat: 47.1956,
    lng: 8.5264,
  },
  {
    name: "Bainbridge Island",
    lat: 47.6439,
    lng: -122.5434,
  },
  {
    name: "Norden",
    lat: 53.5967,
    lng: 7.2056,
  },
  {
    name: "Salzkotten",
    lat: 51.6708,
    lng: 8.6047,
  },
  {
    name: "Nasukarasuyama",
    lat: 36.6569,
    lng: 140.1517,
  },
  {
    name: "Petershagen",
    lat: 52.3833,
    lng: 8.9667,
  },
  {
    name: "Khed Brahma",
    lat: 24.0299,
    lng: 73.0463,
  },
  {
    name: "Caledonia",
    lat: 42.7986,
    lng: -87.8762,
  },
  {
    name: "Cajuru",
    lat: -21.2753,
    lng: -47.3042,
  },
  {
    name: "Champlin",
    lat: 45.1702,
    lng: -93.3903,
  },
  {
    name: "Sprockhovel",
    lat: 51.3614,
    lng: 7.244,
  },
  {
    name: "Lom",
    lat: 43.8272,
    lng: 23.2364,
  },
  {
    name: "Thetford",
    lat: 52.41,
    lng: 0.74,
  },
  {
    name: "Kariba",
    lat: -16.5333,
    lng: 28.8,
  },
  {
    name: "Frederikshavn",
    lat: 57.4337,
    lng: 10.5333,
  },
  {
    name: "Sastamala",
    lat: 61.3417,
    lng: 22.9083,
  },
  {
    name: "Apiai",
    lat: -24.5097,
    lng: -48.8428,
  },
  {
    name: "Edwardsville",
    lat: 38.7923,
    lng: -89.9877,
  },
  {
    name: "Fajardo",
    lat: 18.333,
    lng: -65.6592,
  },
  {
    name: "Palm City",
    lat: 27.1736,
    lng: -80.2861,
  },
  {
    name: "Bad Oldesloe",
    lat: 53.8117,
    lng: 10.3742,
  },
  {
    name: "Morozovsk",
    lat: 48.35,
    lng: 41.8333,
  },
  {
    name: "Villarrobledo",
    lat: 39.2667,
    lng: -2.6,
  },
  {
    name: "Elk River",
    lat: 45.3314,
    lng: -93.567,
  },
  {
    name: "Idstein",
    lat: 50.2206,
    lng: 8.2692,
  },
  {
    name: "Rosemount",
    lat: 44.7465,
    lng: -93.0662,
  },
  {
    name: "Dolores",
    lat: -36.33,
    lng: -57.69,
  },
  {
    name: "Fountain Hills",
    lat: 33.6073,
    lng: -111.7398,
  },
  {
    name: "Droitwich",
    lat: 52.267,
    lng: -2.153,
  },
  {
    name: "Otuzco",
    lat: -7.9025,
    lng: -78.5657,
  },
  {
    name: "Shaqlawah",
    lat: 36.3964,
    lng: 44.3436,
  },
  {
    name: "Santa Maria Tonameca",
    lat: 15.7458,
    lng: -96.5472,
  },
  {
    name: "Hudson",
    lat: 42.7639,
    lng: -71.4072,
  },
  {
    name: "Raahe",
    lat: 64.6847,
    lng: 24.4792,
  },
  {
    name: "Litomerice",
    lat: 50.5336,
    lng: 14.1319,
  },
  {
    name: "Socorro",
    lat: 6.4603,
    lng: -73.27,
  },
  {
    name: "Bay Point",
    lat: 38.0329,
    lng: -121.9614,
  },
  {
    name: "Great Sankey",
    lat: 53.3918,
    lng: -2.6383,
  },
  {
    name: "Ch'arents'avan",
    lat: 40.4097,
    lng: 44.6431,
  },
  {
    name: "Delitzsch",
    lat: 51.5264,
    lng: 12.3425,
  },
  {
    name: "Atkarsk",
    lat: 51.8667,
    lng: 45,
  },
  {
    name: "Sovetskaya Gavan'",
    lat: 48.9667,
    lng: 140.2833,
  },
  {
    name: "Belvidere",
    lat: 42.2544,
    lng: -88.8649,
  },
  {
    name: "Ereymentau",
    lat: 51.6303,
    lng: 73.1049,
  },
  {
    name: "Eysines",
    lat: 44.8853,
    lng: -0.65,
  },
  {
    name: "Sakai",
    lat: 36.1086,
    lng: 139.795,
  },
  {
    name: "Riverside",
    lat: 39.7836,
    lng: -84.1219,
  },
  {
    name: "Muskego",
    lat: 42.886,
    lng: -88.1291,
  },
  {
    name: "Jaleshwar",
    lat: 26.6333,
    lng: 85.8,
  },
  {
    name: "Wolfsberg",
    lat: 46.8419,
    lng: 14.8408,
  },
  {
    name: "Kingsville",
    lat: 27.5094,
    lng: -97.8611,
  },
  {
    name: "Hazelwood",
    lat: 38.7931,
    lng: -90.3899,
  },
  {
    name: "Scottsbluff",
    lat: 41.8684,
    lng: -103.6616,
  },
  {
    name: "Pitsea",
    lat: 51.569,
    lng: 0.504,
  },
  {
    name: "Canyon Lake",
    lat: 29.8761,
    lng: -98.2611,
  },
  {
    name: "Santo Tomas",
    lat: -14.45,
    lng: -72.082,
  },
  {
    name: "Reading",
    lat: 42.5351,
    lng: -71.1056,
  },
  {
    name: "Columbine",
    lat: 39.5879,
    lng: -105.0694,
  },
  {
    name: "Krems an der Donau",
    lat: 48.4167,
    lng: 15.6167,
  },
  {
    name: "Whitehorse",
    lat: 60.7029,
    lng: -135.0691,
  },
  {
    name: "Walpole",
    lat: 42.1465,
    lng: -71.2555,
  },
  {
    name: "Ridgefield",
    lat: 41.3065,
    lng: -73.5023,
  },
  {
    name: "Breclav",
    lat: 48.759,
    lng: 16.882,
  },
  {
    name: "Turnu Magurele",
    lat: 43.7517,
    lng: 24.8708,
  },
  {
    name: "Ridgewood",
    lat: 40.9822,
    lng: -74.1128,
  },
  {
    name: "Slavutych",
    lat: 51.5206,
    lng: 30.7569,
  },
  {
    name: "Yucca Valley",
    lat: 34.1234,
    lng: -116.4216,
  },
  {
    name: "Derry Township",
    lat: 40.2709,
    lng: -76.6561,
  },
  {
    name: "Branson",
    lat: 36.651,
    lng: -93.2635,
  },
  {
    name: "Sultepec",
    lat: 18.8667,
    lng: -99.95,
  },
  {
    name: "Dainyor",
    lat: 35.9206,
    lng: 74.3783,
  },
  {
    name: "Seaford",
    lat: 50.77,
    lng: 0.1,
  },
  {
    name: "Uvarovo",
    lat: 51.9833,
    lng: 42.2667,
  },
  {
    name: "Sandomierz",
    lat: 50.6833,
    lng: 21.75,
  },
  {
    name: "Ma`bar",
    lat: 14.7939,
    lng: 44.2936,
  },
  {
    name: "Eisenhuttenstadt",
    lat: 52.145,
    lng: 14.6728,
  },
  {
    name: "Cesky Tesin",
    lat: 49.7461,
    lng: 18.6262,
  },
  {
    name: "Balch Springs",
    lat: 32.7194,
    lng: -96.6151,
  },
  {
    name: "Woolwich",
    lat: 43.5667,
    lng: -80.4833,
  },
  {
    name: "Ubach-Palenberg",
    lat: 50.9197,
    lng: 6.1194,
  },
  {
    name: "Warstein",
    lat: 51.45,
    lng: 8.3667,
  },
  {
    name: "Ronnenberg",
    lat: 52.3194,
    lng: 9.6556,
  },
  {
    name: "Santa Gertrudes",
    lat: -22.4569,
    lng: -47.53,
  },
  {
    name: "Espelkamp",
    lat: 52.3772,
    lng: 8.6328,
  },
  {
    name: "Olpe",
    lat: 51.0289,
    lng: 7.8514,
  },
  {
    name: "De Pere",
    lat: 44.4309,
    lng: -88.0785,
  },
  {
    name: "Schmallenberg",
    lat: 51.1333,
    lng: 8.3,
  },
  {
    name: "Marysville",
    lat: 40.2278,
    lng: -83.3595,
  },
  {
    name: "Madaoua",
    lat: 14.0762,
    lng: 5.9586,
  },
  {
    name: "Derby",
    lat: 37.5571,
    lng: -97.2552,
  },
  {
    name: "Trebisov",
    lat: 48.6333,
    lng: 21.7167,
  },
  {
    name: "Plymstock",
    lat: 50.3569,
    lng: -4.09,
  },
  {
    name: "Wilsonville",
    lat: 45.3107,
    lng: -122.7705,
  },
  {
    name: "Wil",
    lat: 47.4664,
    lng: 9.0497,
  },
  {
    name: "Wajimazakimachi",
    lat: 37.3906,
    lng: 136.8992,
  },
  {
    name: "Hodonin",
    lat: 48.849,
    lng: 17.1324,
  },
  {
    name: "Shar'ya",
    lat: 58.3667,
    lng: 45.5,
  },
  {
    name: "Catano",
    lat: 18.4415,
    lng: -66.1388,
  },
  {
    name: "Clayton",
    lat: 35.6591,
    lng: -78.4499,
  },
  {
    name: "Brookings",
    lat: 44.3022,
    lng: -96.7859,
  },
  {
    name: "Pavlovsk",
    lat: 50.45,
    lng: 40.0667,
  },
  {
    name: "Evesham",
    lat: 52.092,
    lng: -1.947,
  },
  {
    name: "Leoben",
    lat: 47.3817,
    lng: 15.0972,
  },
  {
    name: "Walker",
    lat: 42.9853,
    lng: -85.7446,
  },
  {
    name: "Colon",
    lat: -32.2241,
    lng: -58.1419,
  },
  {
    name: "Wyandotte",
    lat: 42.2113,
    lng: -83.1558,
  },
  {
    name: "Susquehanna Township",
    lat: 40.3111,
    lng: -76.8699,
  },
  {
    name: "Grandview",
    lat: 38.8802,
    lng: -94.5227,
  },
  {
    name: "Forest Lake",
    lat: 45.2536,
    lng: -92.9583,
  },
  {
    name: "Chesapeake Beach",
    lat: 38.6881,
    lng: -76.5448,
  },
  {
    name: "Hudson",
    lat: 44.9637,
    lng: -92.7316,
  },
  {
    name: "Fairland",
    lat: 39.0804,
    lng: -76.9527,
  },
  {
    name: "Kulachi",
    lat: 31.9286,
    lng: 70.4592,
  },
  {
    name: "Aytos",
    lat: 42.7,
    lng: 27.25,
  },
  {
    name: "Lincoln",
    lat: -34.85,
    lng: -61.5167,
  },
  {
    name: "Rockaway",
    lat: 40.9602,
    lng: -74.4988,
  },
  {
    name: "Vertou",
    lat: 47.1689,
    lng: -1.4697,
  },
  {
    name: "Raisio",
    lat: 60.4861,
    lng: 22.1694,
  },
  {
    name: "Brasileia",
    lat: -11.01,
    lng: -68.7478,
  },
  {
    name: "Ludinghausen",
    lat: 51.7681,
    lng: 7.4444,
  },
  {
    name: "Kakonko",
    lat: -3.2796,
    lng: 30.96,
  },
  {
    name: "Roissy-en-Brie",
    lat: 48.7906,
    lng: 2.6519,
  },
  {
    name: "Buy",
    lat: 58.4833,
    lng: 41.5167,
  },
  {
    name: "South Elgin",
    lat: 41.9906,
    lng: -88.3134,
  },
  {
    name: "Samaxi",
    lat: 40.6339,
    lng: 48.6392,
  },
  {
    name: "Auburn Hills",
    lat: 42.6735,
    lng: -83.2447,
  },
  {
    name: "Cadca",
    lat: 49.4386,
    lng: 18.7883,
  },
  {
    name: "North Tustin",
    lat: 33.7644,
    lng: -117.7945,
  },
  {
    name: "Ohringen",
    lat: 49.2,
    lng: 9.5,
  },
  {
    name: "Larvik",
    lat: 59.0532,
    lng: 10.0271,
  },
  {
    name: "Igaracu do Tiete",
    lat: -22.5092,
    lng: -48.5578,
  },
  {
    name: "Ontario",
    lat: 44.0259,
    lng: -116.9759,
  },
  {
    name: "Takehara",
    lat: 34.3417,
    lng: 132.9069,
  },
  {
    name: "Takhli",
    lat: 15.2667,
    lng: 100.35,
  },
  {
    name: "`Arad",
    lat: 31.2603,
    lng: 35.2147,
  },
  {
    name: "Vizela",
    lat: 41.3833,
    lng: -8.3,
  },
  {
    name: "Burlington",
    lat: 42.6746,
    lng: -88.2723,
  },
  {
    name: "Windham",
    lat: 41.7102,
    lng: -72.1671,
  },
  {
    name: "Swatara",
    lat: 40.2463,
    lng: -76.803,
  },
  {
    name: "Hannoversch Munden",
    lat: 51.4167,
    lng: 9.65,
  },
  {
    name: "Alvares Machado",
    lat: -22.0789,
    lng: -51.4719,
  },
  {
    name: "Norton Shores",
    lat: 43.1621,
    lng: -86.2519,
  },
  {
    name: "Kernersville",
    lat: 36.1066,
    lng: -80.0844,
  },
  {
    name: "Rickmansworth",
    lat: 51.6383,
    lng: -0.4659,
  },
  {
    name: "Khajuraho",
    lat: 24.85,
    lng: 79.9333,
  },
  {
    name: "Meiningen",
    lat: 50.55,
    lng: 10.4167,
  },
  {
    name: "Keystone",
    lat: 28.1312,
    lng: -82.5999,
  },
  {
    name: "North Laurel",
    lat: 39.1286,
    lng: -76.8476,
  },
  {
    name: "Sugar Hill",
    lat: 34.1081,
    lng: -84.056,
  },
  {
    name: "Attendorn",
    lat: 51.1264,
    lng: 7.9033,
  },
  {
    name: "San Borja",
    lat: -14.8583,
    lng: -66.7475,
  },
  {
    name: "Fresno",
    lat: 29.5358,
    lng: -95.4696,
  },
  {
    name: "Zernograd",
    lat: 46.85,
    lng: 40.3,
  },
  {
    name: "Victoria",
    lat: -38.2395,
    lng: -72.34,
  },
  {
    name: "Prosper",
    lat: 33.2394,
    lng: -96.8087,
  },
  {
    name: "Pirajui",
    lat: -21.9989,
    lng: -49.4569,
  },
  {
    name: "Gyal",
    lat: 47.3822,
    lng: 19.2136,
  },
  {
    name: "Chantilly",
    lat: 38.8868,
    lng: -77.4453,
  },
  {
    name: "Dubnica nad Vahom",
    lat: 48.9575,
    lng: 18.1658,
  },
  {
    name: "Kaniv",
    lat: 49.7447,
    lng: 31.4558,
  },
  {
    name: "Waverly",
    lat: 42.7401,
    lng: -84.6353,
  },
  {
    name: "Syke",
    lat: 52.9161,
    lng: 8.8186,
  },
  {
    name: "Krychaw",
    lat: 53.7194,
    lng: 31.7139,
  },
  {
    name: "Waldshut-Tiengen",
    lat: 47.6231,
    lng: 8.2144,
  },
  {
    name: "Watsa",
    lat: 3.04,
    lng: 29.53,
  },
  {
    name: "Waldkraiburg",
    lat: 48.2167,
    lng: 12.4,
  },
  {
    name: "Somerset",
    lat: 40.5083,
    lng: -74.501,
  },
  {
    name: "Rathenow",
    lat: 52.6,
    lng: 12.3333,
  },
  {
    name: "Palmetto Bay",
    lat: 25.622,
    lng: -80.3221,
  },
  {
    name: "Svishtov",
    lat: 43.6186,
    lng: 25.3439,
  },
  {
    name: "Simsbury",
    lat: 41.8729,
    lng: -72.8256,
  },
  {
    name: "Emporia",
    lat: 38.4028,
    lng: -96.1924,
  },
  {
    name: "Clarence-Rockland",
    lat: 45.4833,
    lng: -75.2,
  },
  {
    name: "Limbach-Oberfrohna",
    lat: 50.8667,
    lng: 12.75,
  },
  {
    name: "Middleborough",
    lat: 41.8803,
    lng: -70.8745,
  },
  {
    name: "Avon Lake",
    lat: 41.4945,
    lng: -82.016,
  },
  {
    name: "Pyrgos",
    lat: 37.6667,
    lng: 21.4333,
  },
  {
    name: "Vernon",
    lat: 49.09,
    lng: 1.49,
  },
  {
    name: "Nyuzen",
    lat: 36.9333,
    lng: 137.5,
  },
  {
    name: "Neftekumsk",
    lat: 44.7506,
    lng: 44.9797,
  },
  {
    name: "Xinxing",
    lat: 47.1601,
    lng: 123.8,
  },
  {
    name: "Lathrop",
    lat: 37.809,
    lng: -121.3131,
  },
  {
    name: "Loma Linda",
    lat: 34.0451,
    lng: -117.2498,
  },
  {
    name: "Homer Glen",
    lat: 41.6044,
    lng: -87.9497,
  },
  {
    name: "Tifton",
    lat: 31.4625,
    lng: -83.5205,
  },
  {
    name: "Senftenberg",
    lat: 51.5167,
    lng: 14.0167,
  },
  {
    name: "Tocopilla",
    lat: -22.0941,
    lng: -70.201,
  },
  {
    name: "Dinuba",
    lat: 36.5453,
    lng: -119.3987,
  },
  {
    name: "Bad Soden am Taunus",
    lat: 50.1424,
    lng: 8.4997,
  },
  {
    name: "Stroitel'",
    lat: 50.7833,
    lng: 36.4833,
  },
  {
    name: "Amarapura",
    lat: 21.9,
    lng: 96.0458,
  },
  {
    name: "Selydove",
    lat: 48.15,
    lng: 37.3,
  },
  {
    name: "Westmont",
    lat: 41.7948,
    lng: -87.9742,
  },
  {
    name: "Hachimantai",
    lat: 39.9264,
    lng: 141.0953,
  },
  {
    name: "Clinton",
    lat: 32.354,
    lng: -90.3403,
  },
  {
    name: "Porto de Mos",
    lat: 39.6,
    lng: -8.8167,
  },
  {
    name: "Opelousas",
    lat: 30.528,
    lng: -92.0851,
  },
  {
    name: "Kotel'nich",
    lat: 58.3089,
    lng: 48.3481,
  },
  {
    name: "Camas",
    lat: 45.6005,
    lng: -122.4305,
  },
  {
    name: "Semenov",
    lat: 56.8,
    lng: 44.5,
  },
  {
    name: "Harvey",
    lat: 41.6076,
    lng: -87.6521,
  },
  {
    name: "Trotwood",
    lat: 39.7927,
    lng: -84.3165,
  },
  {
    name: "West Memphis",
    lat: 35.1531,
    lng: -90.1995,
  },
  {
    name: "Bethany",
    lat: 45.5613,
    lng: -122.8369,
  },
  {
    name: "Collinsville",
    lat: 38.6769,
    lng: -90.0059,
  },
  {
    name: "Mequon",
    lat: 43.2352,
    lng: -87.9838,
  },
  {
    name: "Ellensburg",
    lat: 46.9994,
    lng: -120.5477,
  },
  {
    name: "Rodniki",
    lat: 57.1,
    lng: 41.7333,
  },
  {
    name: "Marple",
    lat: 53.397,
    lng: -2.061,
  },
  {
    name: "Asino",
    lat: 57,
    lng: 86.15,
  },
  {
    name: "Al Qusayr",
    lat: 26.1091,
    lng: 34.276,
  },
  {
    name: "Shelbyville",
    lat: 38.2069,
    lng: -85.2293,
  },
  {
    name: "Dole",
    lat: 47.0931,
    lng: 5.4906,
  },
  {
    name: "Buturlinovka",
    lat: 50.825,
    lng: 40.5889,
  },
  {
    name: "Goulburn",
    lat: -34.7547,
    lng: 149.6186,
  },
  {
    name: "Newport",
    lat: 41.4803,
    lng: -71.3205,
  },
  {
    name: "East Hempfield",
    lat: 40.0825,
    lng: -76.3831,
  },
  {
    name: "Nueva Paz",
    lat: 22.7667,
    lng: -81.75,
  },
  {
    name: "Rimavska Sobota",
    lat: 48.3814,
    lng: 20.02,
  },
  {
    name: "Saginaw",
    lat: 32.8657,
    lng: -97.3654,
  },
  {
    name: "Easton",
    lat: 42.0362,
    lng: -71.1103,
  },
  {
    name: "Saint-Laurent-du-Maroni",
    lat: 5.4976,
    lng: -54.0325,
  },
  {
    name: "Port Angeles",
    lat: 48.1142,
    lng: -123.4565,
  },
  {
    name: "Brandon",
    lat: 32.2778,
    lng: -89.9896,
  },
  {
    name: "Inkster",
    lat: 42.2935,
    lng: -83.3148,
  },
  {
    name: "Wednesfield",
    lat: 52.5998,
    lng: -2.0817,
  },
  {
    name: "Thomasville",
    lat: 30.8394,
    lng: -83.9782,
  },
  {
    name: "Ponca City",
    lat: 36.7235,
    lng: -97.0679,
  },
  {
    name: "Camillus",
    lat: 43.0539,
    lng: -76.3057,
  },
  {
    name: "Gazojak",
    lat: 41.1833,
    lng: 61.4,
  },
  {
    name: "Tecolutla",
    lat: 20.4797,
    lng: -97.01,
  },
  {
    name: "Oiapoque",
    lat: 3.8428,
    lng: -51.835,
  },
  {
    name: "West Melbourne",
    lat: 28.0693,
    lng: -80.6734,
  },
  {
    name: "Faribault",
    lat: 44.2985,
    lng: -93.2786,
  },
  {
    name: "Medford",
    lat: 40.822,
    lng: -72.9859,
  },
  {
    name: "San Benito",
    lat: 26.1298,
    lng: -97.644,
  },
  {
    name: "Litvinov",
    lat: 50.6008,
    lng: 13.6112,
  },
  {
    name: "Diest",
    lat: 50.9847,
    lng: 5.0514,
  },
  {
    name: "Springfield Township",
    lat: 39.928,
    lng: -75.3362,
  },
  {
    name: "Lincolnton",
    lat: 35.4747,
    lng: -81.2385,
  },
  {
    name: "Bierun Stary",
    lat: 50.0897,
    lng: 19.0928,
  },
  {
    name: "Simpsonville",
    lat: 34.7287,
    lng: -82.2573,
  },
  {
    name: "Almonte",
    lat: 37.2612,
    lng: -6.5176,
  },
  {
    name: "Varel",
    lat: 53.3969,
    lng: 8.1361,
  },
  {
    name: "Uchquduq Shahri",
    lat: 42.1567,
    lng: 63.5556,
  },
  {
    name: "Westford",
    lat: 42.5864,
    lng: -71.4401,
  },
  {
    name: "Rugeley",
    lat: 52.7599,
    lng: -1.9388,
  },
  {
    name: "Angatuba",
    lat: -23.4745,
    lng: -48.4256,
  },
  {
    name: "Scotch Plains",
    lat: 40.6332,
    lng: -74.3739,
  },
  {
    name: "Fort Washington",
    lat: 38.7339,
    lng: -77.0069,
  },
  {
    name: "Diu",
    lat: 20.7197,
    lng: 70.9904,
  },
  {
    name: "Grootfontein",
    lat: -19.5658,
    lng: 18.1036,
  },
  {
    name: "Gauripur",
    lat: 26.08,
    lng: 89.97,
  },
  {
    name: "Ashton in Makerfield",
    lat: 53.487,
    lng: -2.641,
  },
  {
    name: "Quedlinburg",
    lat: 51.7917,
    lng: 11.1472,
  },
  {
    name: "Fort Saskatchewan",
    lat: 53.7128,
    lng: -113.2133,
  },
  {
    name: "Upper Moreland",
    lat: 40.1572,
    lng: -75.1021,
  },
  {
    name: "North Potomac",
    lat: 39.0955,
    lng: -77.2372,
  },
  {
    name: "Al Jawf",
    lat: 24.2167,
    lng: 23.3,
  },
  {
    name: "Sattahip",
    lat: 12.6636,
    lng: 100.9036,
  },
  {
    name: "Zolochiv",
    lat: 49.8075,
    lng: 24.9031,
  },
  {
    name: "Ottumwa",
    lat: 41.0196,
    lng: -92.4186,
  },
  {
    name: "Formby",
    lat: 53.5586,
    lng: -3.0666,
  },
  {
    name: "Sonneberg",
    lat: 50.35,
    lng: 11.1667,
  },
  {
    name: "Dobeln",
    lat: 51.1194,
    lng: 13.1128,
  },
  {
    name: "Amstetten",
    lat: 48.1167,
    lng: 14.8667,
  },
  {
    name: "Koilkuntla",
    lat: 15.2333,
    lng: 78.3167,
  },
  {
    name: "Ridgeland",
    lat: 32.4236,
    lng: -90.1481,
  },
  {
    name: "Hastings",
    lat: 40.5963,
    lng: -98.3914,
  },
  {
    name: "North Platte",
    lat: 41.1266,
    lng: -100.764,
  },
  {
    name: "As Sulayyil",
    lat: 20.4623,
    lng: 45.5722,
  },
  {
    name: "Charles Town",
    lat: 39.2745,
    lng: -77.8632,
  },
  {
    name: "Freeport",
    lat: 42.2893,
    lng: -89.6347,
  },
  {
    name: "Waukee",
    lat: 41.5984,
    lng: -93.8872,
  },
  {
    name: "Warrington",
    lat: 40.2489,
    lng: -75.158,
  },
  {
    name: "Vero Beach South",
    lat: 27.6164,
    lng: -80.413,
  },
  {
    name: "Lanester",
    lat: 47.7647,
    lng: -3.3422,
  },
  {
    name: "Ban Phru",
    lat: 6.948,
    lng: 100.4794,
  },
  {
    name: "Ventimiglia",
    lat: 43.7903,
    lng: 7.6083,
  },
  {
    name: "Bognor Regis",
    lat: 50.7824,
    lng: -0.6764,
  },
  {
    name: "Zawyat an Nwacer",
    lat: 33.3611,
    lng: -7.6114,
  },
  {
    name: "Tayga",
    lat: 56.0667,
    lng: 85.6167,
  },
  {
    name: "Socastee",
    lat: 33.6871,
    lng: -79.0086,
  },
  {
    name: "Husum",
    lat: 54.4769,
    lng: 9.0511,
  },
  {
    name: "South Plainfield",
    lat: 40.5748,
    lng: -74.4153,
  },
  {
    name: "Konstancin-Jeziorna",
    lat: 52.0938,
    lng: 21.1176,
  },
  {
    name: "Wadsworth",
    lat: 41.0279,
    lng: -81.7324,
  },
  {
    name: "Kourou",
    lat: 5.16,
    lng: -52.6499,
  },
  {
    name: "Horley",
    lat: 51.174,
    lng: -0.172,
  },
  {
    name: "Puerto San Jose",
    lat: 13.9333,
    lng: -90.8167,
  },
  {
    name: "Sokolov",
    lat: 50.1814,
    lng: 12.6402,
  },
  {
    name: "Zorgo",
    lat: 12.243,
    lng: -0.611,
  },
  {
    name: "Nava",
    lat: 28.4214,
    lng: -100.7675,
  },
  {
    name: "Luninyets",
    lat: 52.25,
    lng: 26.8,
  },
  {
    name: "Tumwater",
    lat: 46.989,
    lng: -122.9173,
  },
  {
    name: "Candler-McAfee",
    lat: 33.7267,
    lng: -84.2723,
  },
  {
    name: "Herouville-Saint-Clair",
    lat: 49.2044,
    lng: -0.3253,
  },
  {
    name: "Fairfax",
    lat: 38.8531,
    lng: -77.2998,
  },
  {
    name: "Hoh Ereg",
    lat: 41.0955,
    lng: 111.4408,
  },
  {
    name: "East Gwillimbury",
    lat: 44.1333,
    lng: -79.4167,
  },
  {
    name: "Venice",
    lat: 27.1163,
    lng: -82.4135,
  },
  {
    name: "Calw",
    lat: 48.7144,
    lng: 8.7375,
  },
  {
    name: "Grande-Synthe",
    lat: 51.0139,
    lng: 2.3028,
  },
  {
    name: "Kelishad va Sudarjan",
    lat: 32.5542,
    lng: 51.525,
  },
  {
    name: "Hajduszoboszlo",
    lat: 47.45,
    lng: 21.3833,
  },
  {
    name: "Harmanli",
    lat: 41.9297,
    lng: 25.9019,
  },
  {
    name: "Halfmoon",
    lat: 42.864,
    lng: -73.7275,
  },
  {
    name: "Kalach-na-Donu",
    lat: 48.6833,
    lng: 43.5333,
  },
  {
    name: "Cottage Lake",
    lat: 47.7466,
    lng: -122.0755,
  },
  {
    name: "La Mana",
    lat: -0.9417,
    lng: -79.2347,
  },
  {
    name: "Haren",
    lat: 52.7667,
    lng: 7.2167,
  },
  {
    name: "Bogotol",
    lat: 56.2,
    lng: 89.5167,
  },
  {
    name: "Caras",
    lat: -9.0483,
    lng: -77.8108,
  },
  {
    name: "Edgewater",
    lat: 28.9594,
    lng: -80.9407,
  },
  {
    name: "Tlacolula",
    lat: 20,
    lng: -97,
  },
  {
    name: "Okemos",
    lat: 42.7057,
    lng: -84.4135,
  },
  {
    name: "Pelham",
    lat: 33.3114,
    lng: -86.7573,
  },
  {
    name: "Si Racha",
    lat: 13.1744,
    lng: 100.9306,
  },
  {
    name: "Monte Aprazivel",
    lat: -20.7728,
    lng: -49.7139,
  },
  {
    name: "Taupo",
    lat: -38.69,
    lng: 176.08,
  },
  {
    name: "Novy Jicin",
    lat: 49.5944,
    lng: 18.0103,
  },
  {
    name: "Seal Beach",
    lat: 33.7542,
    lng: -118.0714,
  },
  {
    name: "Ciudad Serdan",
    lat: 18.9833,
    lng: -97.45,
  },
  {
    name: "Bad Mergentheim",
    lat: 49.5,
    lng: 9.7667,
  },
  {
    name: "Mirandela",
    lat: 41.4833,
    lng: -7.1833,
  },
  {
    name: "Alice Springs",
    lat: -23.7,
    lng: 133.8667,
  },
  {
    name: "Combs-la-Ville",
    lat: 48.67,
    lng: 2.56,
  },
  {
    name: "Cranford",
    lat: 40.6564,
    lng: -74.3036,
  },
  {
    name: "Qift",
    lat: 26,
    lng: 32.8167,
  },
  {
    name: "Starnberg",
    lat: 47.9972,
    lng: 11.3406,
  },
  {
    name: "Dunkirk",
    lat: 42.4803,
    lng: -79.3323,
  },
  {
    name: "Zeya",
    lat: 53.7333,
    lng: 127.25,
  },
  {
    name: "Chrudim",
    lat: 49.9511,
    lng: 15.7956,
  },
  {
    name: "Calabasas",
    lat: 34.1375,
    lng: -118.6689,
  },
  {
    name: "Abbeville",
    lat: 50.1058,
    lng: 1.8358,
  },
  {
    name: "Lustenau",
    lat: 47.4271,
    lng: 9.6711,
  },
  {
    name: "Berehove",
    lat: 48.2025,
    lng: 22.6375,
  },
  {
    name: "North Augusta",
    lat: 33.5214,
    lng: -81.9547,
  },
  {
    name: "Step'anavan",
    lat: 41.0075,
    lng: 44.3867,
  },
  {
    name: "Ostrow Mazowiecka",
    lat: 52.8,
    lng: 21.9,
  },
  {
    name: "Kafr Sa`d",
    lat: 31.3557,
    lng: 31.6848,
  },
  {
    name: "Bedburg",
    lat: 51,
    lng: 6.5625,
  },
  {
    name: "Mount Pocono",
    lat: 41.1225,
    lng: -75.3582,
  },
  {
    name: "Fort Dodge",
    lat: 42.5098,
    lng: -94.1751,
  },
  {
    name: "Havlickuv Brod",
    lat: 49.6079,
    lng: 15.5807,
  },
  {
    name: "Brody",
    lat: 50.0781,
    lng: 25.1542,
  },
  {
    name: "Quartier Militaire",
    lat: -20.25,
    lng: 57.55,
  },
  {
    name: "Lincoln",
    lat: 43.13,
    lng: -79.43,
  },
  {
    name: "North Haven",
    lat: 41.3818,
    lng: -72.8573,
  },
  {
    name: "Krnov",
    lat: 50.0897,
    lng: 17.7039,
  },
  {
    name: "Farragut",
    lat: 35.8731,
    lng: -84.1822,
  },
  {
    name: "Gobo",
    lat: 33.8914,
    lng: 135.1525,
  },
  {
    name: "Mosbach",
    lat: 49.35,
    lng: 9.1333,
  },
  {
    name: "Korbach",
    lat: 51.2719,
    lng: 8.8731,
  },
  {
    name: "Kuvandyk",
    lat: 51.4833,
    lng: 57.35,
  },
  {
    name: "Jenks",
    lat: 35.9981,
    lng: -95.9737,
  },
  {
    name: "Mansfield",
    lat: 42.0163,
    lng: -71.2187,
  },
  {
    name: "Fria",
    lat: 10.3804,
    lng: -13.55,
  },
  {
    name: "Bloomingdale",
    lat: 27.8784,
    lng: -82.2624,
  },
  {
    name: "Huntingdon",
    lat: 52.3364,
    lng: -0.1717,
  },
  {
    name: "Pace",
    lat: 30.6187,
    lng: -87.1667,
  },
  {
    name: "Herdecke",
    lat: 51.4,
    lng: 7.4333,
  },
  {
    name: "Ayancik",
    lat: 41.95,
    lng: 34.5833,
  },
  {
    name: "Palatka",
    lat: 29.6493,
    lng: -81.6705,
  },
  {
    name: "Tatarsk",
    lat: 55.2167,
    lng: 75.9667,
  },
  {
    name: "Salzwedel",
    lat: 52.85,
    lng: 11.15,
  },
  {
    name: "Coronado",
    lat: 32.664,
    lng: -117.16,
  },
  {
    name: "Lubartow",
    lat: 51.4667,
    lng: 22.6,
  },
  {
    name: "Khromtau",
    lat: 50.2699,
    lng: 58.45,
  },
  {
    name: "Epernay",
    lat: 49.0403,
    lng: 3.96,
  },
  {
    name: "Freudenstadt",
    lat: 48.4633,
    lng: 8.4111,
  },
  {
    name: "Montgomery",
    lat: 41.5399,
    lng: -74.2073,
  },
  {
    name: "Marple",
    lat: 39.9654,
    lng: -75.3658,
  },
  {
    name: "Nagykoros",
    lat: 47.0331,
    lng: 19.7839,
  },
  {
    name: "Bauta",
    lat: 22.9919,
    lng: -82.5492,
  },
  {
    name: "Centerville",
    lat: 39.6339,
    lng: -84.1449,
  },
  {
    name: "Aracuai",
    lat: -16.8596,
    lng: -42.0699,
  },
  {
    name: "Nikaho",
    lat: 39.2031,
    lng: 139.9078,
  },
  {
    name: "Maracaju",
    lat: -21.61,
    lng: -55.18,
  },
  {
    name: "Kreuzlingen",
    lat: 47.6458,
    lng: 9.1783,
  },
  {
    name: "Sredneural'sk",
    lat: 56.9833,
    lng: 60.4667,
  },
  {
    name: "Greeneville",
    lat: 36.168,
    lng: -82.8197,
  },
  {
    name: "Van Buren",
    lat: 35.448,
    lng: -94.3528,
  },
  {
    name: "Tata",
    lat: 47.65,
    lng: 18.3167,
  },
  {
    name: "Waycross",
    lat: 31.2108,
    lng: -82.3579,
  },
  {
    name: "Ayapel",
    lat: 8.3304,
    lng: -75.15,
  },
  {
    name: "Kozyatyn",
    lat: 49.7167,
    lng: 28.8333,
  },
  {
    name: "Partizanske",
    lat: 48.6333,
    lng: 18.3667,
  },
  {
    name: "Soledad Atzompa",
    lat: 18.755,
    lng: -97.1522,
  },
  {
    name: "Juchen",
    lat: 51.1011,
    lng: 6.5017,
  },
  {
    name: "Bulle",
    lat: 46.6167,
    lng: 7.05,
  },
  {
    name: "Wilmington",
    lat: 42.5609,
    lng: -71.1654,
  },
  {
    name: "Carletonville",
    lat: -26.3581,
    lng: 27.3981,
  },
  {
    name: "Half Moon Bay",
    lat: 37.4688,
    lng: -122.4383,
  },
  {
    name: "Juchitepec",
    lat: 19.0997,
    lng: -98.8792,
  },
  {
    name: "Zheleznogorsk-Ilimskiy",
    lat: 56.5833,
    lng: 104.1167,
  },
  {
    name: "Dillenburg",
    lat: 50.7333,
    lng: 8.2833,
  },
  {
    name: "Gitega",
    lat: -3.426,
    lng: 29.8436,
  },
  {
    name: "Belton",
    lat: 38.8193,
    lng: -94.5334,
  },
  {
    name: "Westchase",
    lat: 28.0597,
  },
  {