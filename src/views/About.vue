<template>
  <div>
    <h1>哈哈哈</h1>
    <div id="myChart" style="width: 100%;height:500px"></div>
  </div>
</template>

<script>
import echarts from "echarts";
// import { resizeChart } from "../utils/resizeChart"
export default {
  name: "",
  data() {
    return {
      myChart: {},
      option: {
        title: {
          textStyle: {
            fontWeight: "normal",
            fontSize: 16,
            color: "#F1F1F3"
          },
          left: "6%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#57617B"
            }
          }
        },
        legend: {
          icon: "rect",
          itemWidth: 20,
          itemHeight: 5,
          itemGap: 30,
          data: ["今日", "可比日"],
          right: "4%",
          textStyle: {
            fontSize: 14,
            color: "#292f39"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(126,126,126,0.8)"
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14
              }
            },
            data: [
              "0",
              "1",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(126,126,126,0.8)"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#eee",
                type: "solid"
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14
              }
            }
          }
        ],
        series: [
          {
            name: "今日",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              width: 3,
              color: "#ffc0db",
              shadowColor: "rgba(255,31,127,0.4)",
              shadowBlur: 4,
              shadowOffsetY: 0.5
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(255,31,127,0.4)",
                      opacity: 0.8
                    },
                    {
                      offset: 0.8,
                      color: "rgba(255,31,127,0)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              color: "#ffc0db"
            },
            data: [
              0,
              182,
              191,
              134,
              150,
              120,
              110,
              125,
              134,
              150,
              120,
              110,
              125,
              134,
              150,
              120,
              110,
              125,
              134,
              150,
              120,
              110,
              125
            ]
          },
          {
            name: "可比日",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              width: 3,
              color: "#92e1fb",
              shadowColor: "rgba(49,204,255,0.4)",
              shadowBlur: 4,
              shadowOffsetY: 0.5
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(49,204,255,0.4)",
                      opacity: 0.4
                    },
                    {
                      offset: 0.8,
                      color: "rgba(49,204,255,0)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(255,31,127,0.4)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "#92e1fb"
              }
            },
            data: [
              0,
              110,
              125,
              145,
              122,
              165,
              122,
              220,
              110,
              125,
              145,
              122,
              165,
              122,
              220,
              110,
              125,
              145,
              122,
              165,
              122,
              220,
              22,
              57
            ]
          }
        ]
      }
    };
  },
  mounted: function() {
    this.myChart = echarts.init(document.getElementById("myChart"));
    this.myChart.setOption(this.option);
    this.resizeChart(this.myChart);
  },
  methods: {}
};
</script>
