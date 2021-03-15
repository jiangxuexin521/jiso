//图表的tooltip自动定时滚动显示函数
function autoTip(total, index, myechart) {
  timer = setInterval(function () {
    myechart.dispatchAction({
      type: "showTip",
      seriesIndex: "0",
      dataIndex: index,
    });
    index += 1;
    if (index > total) {
      index = 0;
    }
  }, 1000);
}
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myechart = echarts.init(document.getElementById("chart"));
  var fontColor = "#4c9bfd";
  option = {
    color: ["#02cdff", "#0090ff", "#f9e264"],
    textStyle: {
      fontSize: 10,
    },
    grid: {
      left: "0",
      right: "3%",
      bottom: "3%",
      top: "18%",
      containLabel: true,
      show: true,
      borderColor: "rgba(0, 240, 255, 0.3)",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        label: {
          show: true,
          backgroundColor: "#333",
        },
      },
    },
    legend: {
      show: true,
      x: "center",
      top: "0",
      textStyle: {
        color: fontColor,
      },
      data: ["风险等级", "风险点", "风险管理"],
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisTick: {
          alignWithLabel: false,
          show: false,
        },
        axisLabel: {
          color: "#4c9bfd",
        },
        data: ["12.22", "12.23", "12.24", "12.25", "12.25"],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "次数",
        nameTextStyle: {
          color: "#ffffff",
          fontSize: 10,
        },
        axisLabel: {
          color: "#4c9bfd",
        },
        splitLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)",
          },
        },
      },
    ],
    series: [
      {
        name: "风险等级",
        type: "line",
        stack: "总量",
        symbolSize: 5,
        label: {
          normal: {
            show: true,
            position: "top",
          },
        },
        itemStyle: {
          normal: {
            areaStyle: {
              //color: '#94C9EC'
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: "rgba(7,46,101,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(0,166,246,0.9)",
                },
              ]),
            },
          },
        },
        data: [120, 132, 101, 134, 90],
      },
      {
        name: "风险点",
        type: "line",
        stack: "总量",
        symbol: "circle",
        symbolSize: 5,
        label: {
          normal: {
            show: true,
            position: "top",
          },
        },
        itemStyle: {
          normal: {
            areaStyle: {
              //color: '#94C9EC'
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: "rgba(7,44,90,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(0,212,199,0.9)",
                },
              ]),
            },
          },
        },
        data: [220, 85, 191, 90, 230],
      },
      {
        name: "风险管理",
        type: "line",
        stack: "总量",
        symbol: "circle",
        symbolSize: 5,
        label: {
          normal: {
            show: true,
            position: "top",
          },
        },
        itemStyle: {
          normal: {
            areaStyle: {
              //color: '#94C9EC'
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: "rgba(7,44,90,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(0,212,199,0.9)",
                },
              ]),
            },
          },
        },
        data: [150, 232, 201, 154, 190],
      },
    ],
  };

  myechart.setOption(option);
  window.addEventListener("resize", function () {
    myechart.resize();
  });
  var total = option.xAxis[0].data.length;
  var index = 0;
  autoTip(total, index, myechart);
})();
