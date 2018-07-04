
var ctx = document.getElementById('myChart');
var canvas = ctx.getContext('2d');


var gradient = canvas.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'blue');

canvas.fillStyle = gradient;
canvas.fillRect(0, 0, 1, 1);

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
            label: 'INJURY 1',
            backgroundColor: 'rgba(255, 206, 86, 1)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 4,
            fill: false,
            data: [10, 6, 6, 8, 5, 8, 8],
        }, {
            label: 'INJURY 2',
            backgroundColor: 'rgba(75, 192, 192, 1)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderDash: [5, 5],
            borderWidth: 4,
            fill: false,
            data: [5, 3, 7, 2, 8, 4, 6]
        }]     
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'My Pain Level Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        onHover: {
            mode: 'nearest',
            intersect: true
        }, 
        maintainAsepectRation: false,
        scales: {
            xAxes: [{
                stacked: true,
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Weekly'
                },
            }],
            yAxes: [{
                // stacked: true,
                gridLines: {
                    display: true,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Pain Level',
                },
            }]
        }
    }
});

// var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

// var myChart = new Chart(ctx, {
//         // The type of chart we want to create
//         type: 'area',

//         // The data for our dataset
//         data: {
//             labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//             datasets: [{
//                 label: "My First dataset",
//                 backgroundColor: 'rgb(255, 99, 132)',
//                 borderColor: 'rgb(255, 99, 132)',
//                 data: [0, 10, 5, 2, 20, 30, 45],
//             }]
//         },

//         // Configuration options go here
//         options: {
//             plugins: {
//                 filler: {
//                     propagate: true
//                 }
//             }
//         }
//     });

//     new Chart(ctx, {
//         data: {
//             datasets: [
//                 { fill: 'origin' },
//                 { fill: '' },
//                 { fill: false },
//                 { fill: " " }
//             ]
//         }
//     });

   




