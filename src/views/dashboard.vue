<template>
  <div class="container-fluid">
    <div class="row">
      <aside class="col-2 px-0 fixed-top" id="left">
        <router-link class="navbar-brand p-0 text-center w-100" to="/products">
          <u>Stone Shop</u>
        </router-link>

        <div class="list-group w-100 text-center">
          <a href="#" class="list-group-item active">Dashboard</a>
          <a href="#" class="list-group-item">Tables</a>
          <a href="#" class="list-group-item">Tasks</a>
          <a href="#" class="list-group-item">Settings</a>
          <a href="#" class="list-group-item">Files</a>
          <a href="#" class="list-group-item">Access</a>
          <a href="#" class="list-group-item">Server</a>
          <a href="#" class="list-group-item">Repos</a>
        </div>

      </aside>
      <main class="col-10 invisible">
        <!--hidden spacer-->
      </main>
      <main class="col offset-2 h-100">
        <div class="row top">
          <div class="col-12 py-4">
          </div>
        </div>
        <div class="row bg-white">
          <div class="chart-container">
            <canvas id="chart1"></canvas>
          </div>
          <div class="chart-container">
            <canvas id="chart2"></canvas>
          </div>
        </div>
        <div class="third-chart">
          <canvas id="chart3"></canvas>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'dashboard',
    data () {
      return {
        title: 'dashboard',
      }
    },
    mounted() {
      axios.get("./static/chartData.json")
        .then(response =>
          this.createCharts(response.data))
    },

    methods: {
      createCharts(chartData) {
        let ctx1 = document.getElementById('chart1').getContext('2d');
        let ctx2 = document.getElementById('chart2').getContext('2d');
        let ctx3 = document.getElementById('chart3').getContext('2d');

        let chart1 = new Chart(ctx1, {
          type: 'pie',
          data: {
            labels: chartData.chart1.labels,
            datasets: [{
              label: "Income",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#c45850","#a5a5a5"],
              data: chartData.chart1.data.income
            }]
          },
          options: {
            responsive:true,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Most popular products by income'
            }
          }
        });

        let chart2 = new Chart(ctx2, {
          // The type of chart we want to create
          type: 'bar',
          // The data for our dataset
          data: {
            labels: chartData.chart2.labels,
            datasets: [
              {
                label: "Current month",
                backgroundColor: "#3e95cd",
                data: chartData.chart2.data.current
              }, {
                label: "Last month",
                backgroundColor: "#8e5ea2",
                data: chartData.chart2.data.previous
              }
            ]
          },

          // Configuration options go here
          options: {
            responsive:true,
            maintainAspectRatio: false,

            title: {
              display: true,
              text: 'Average order value current month vs previous'
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: "Value"
                },
                ticks: {
                  beginAtZero: true
                }

              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: "Day of month"
                }
              }]
            }
          }
        });
        let chart3 = new Chart(ctx3, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: chartData.chart3.labels,
            datasets: [{
              label: 'Revenue growth',
              borderColor: '#3e95cd',
              data: chartData.chart3.data.real,
              fill: false
            }, {
              label: 'Goal',
              borderColor: '#8e5ea2',
              data: chartData.chart3.data.goal,
              fill: false
            }]
          },

          // Configuration options go here
          options: {
            responsive:true,
            maintainAspectRatio: false,

            title: {
              display: true,
              text: 'Monthly revenue growth vs goal'
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: "Value"
                },
                ticks: {
                  beginAtZero: true
                }

              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: "Day of month"
                }
              }]
            }
          }
        });
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/dashboard.css';
</style>
