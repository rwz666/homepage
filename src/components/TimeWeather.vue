<template>
  <div class="time-weather cards">
    <div class="time">
      <div class="date">
        {{ curDate }}
      </div>
      <div class="text">
        {{ curTime }}
      </div>
    </div>

    <div class="weather" @click="getLocationAndWeather">
      <span>{{ city }}</span>
      <span>{{ weather }}</span>
      <span>{{ temperature }}℃</span>
      <span>{{ winddirection }}</span>
      <span>{{ windpower }}&nbsp;级</span>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import { getOtherWeather } from '@/api';

const mainKey = import.meta.env.VITE_BAIDU_MAP_KEY;

onMounted(() => {
  // 1. 获取当前日期-时间
  getCurDateAndTime();
  // 2. 获取位置和天气
  getLocationAndWeather();
})

// 1. 获取当前日期-时间
let curDate = ref(`2024 年 01 月 01 日 星期一`);
let curTime = ref(new Date().toLocaleTimeString());

const getCurDateAndTime = () => {
  // 获取当前日期
  let curYear = ref(new Date().getFullYear());
  let curMonth = ref(new Date().getMonth() + 1); // getMonth()返回的月份是从0开始的，所以需要加1
  let curDay = ref(new Date().getDate());
  let xingqi = ref(["日", "一", "二", "三", "四", "五", "六"][curDay.value]);
  // 获取当前时间
  curDate.value = `${curYear.value} 年 ${curMonth.value} 月 ${curDay.value} 日 星期${xingqi.value}`
  // 每秒更新一次时间
  setInterval(() => {
    curTime.value = new Date().toLocaleTimeString();
  }, 1000);
}
// 2. 获取天气和位置
let city = ref('未知地区');
let temperature = ref(-1);
let weather = ref('晴');
let winddirection = ref('风向')
let windpower = ref('风力')


// 2.1 定义对象存储信息
const weatherData = reactive({
  weather: {
    weather: '', // 天气
    temperature: null as any, // 温度
    winddirection: '', // 风向
    windpower: '', // 风力
    humidity: '', // 湿度
    reporttime: null, // 报告时间
  },
  location: {
    lat: 0,
    lng: 0,
    city: '',
    district: '',
    street: '',
    street_number: '',
    adcode: null, // 行政区划代码
  }
})
// 2.2 获取位置信息（navigator 和 百度地图）
const getLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    // 获取经纬度
    weatherData.location.lat = position.coords.latitude;
    weatherData.location.lng = position.coords.longitude;
    let myGeo = new BMapGL.Geocoder();
    // 根据经纬度获取地址信息
    myGeo.getLocation(new BMapGL.Point(weatherData.location.lng, weatherData.location.lat), function (result) {
      Object.assign(weatherData.location, result.addressComponents);
      // console.log('location:', weatherData.location);
      // console.log(result.addressComponents)
    });
  }, function (error) {
    console.error(error);
  });
}
// 2.3 获取天气
function getTemperature(max_degree: number, min_degree: number) {
  try {
    let avg = Math.round((max_degree + min_degree) / 2);
    return avg;
  } catch (error) {
    console.error(error);
    return 'NaN';
  }
}
// 获取天气信息
const getWeatherData = async () => {
  const result = await getOtherWeather();
  const data = result.result;
  const condition = data.condition
  weatherData.weather = {
    weather: condition.day_weather,
    winddirection: condition.day_wind_direction,
    windpower: condition.day_wind_power,
    temperature: getTemperature(Number(condition.max_degree), Number(condition.min_degree)),
    humidity: condition.day_humidity,
    reporttime: data.reporttime
  }
  // console.log('result: ', data)
  // console.log(weatherData.weather);
}
// 2.4 封装函数 给界面上的元素赋值
let requestCount = 5; //限制请求次数
async function getLocationAndWeather() {
  getLocation();
  await getWeatherData();
  console.log('天气和位置信息', weatherData);
  city.value = weatherData.location.city;
  temperature.value = weatherData.weather.temperature;
  weather.value = weatherData.weather.weather;
  winddirection.value = weatherData.weather.winddirection;
  windpower.value = weatherData.weather.windpower;

  console.log('city: ', weatherData.location.city)

  if (requestCount > 0 && city.value === '') {
    requestCount--;
    setTimeout(() => {
      getLocationAndWeather();
    }, 2000)
  }
}

</script>



<style lang="scss" scoped>
.time-weather {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 16px;

  .time {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    text-align: center;

    .date {
      font-size: 1.1rem;
    }

    .text {
      font-size: 3rem;
      margin-top: 10px;
      letter-spacing: 2px;
      font-family: "UnidreamLED";
    }
  }

  .weather {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;

  }
}
</style>