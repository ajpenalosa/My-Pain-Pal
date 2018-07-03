

var ctx = $("#myChart");

var myChart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'area',

        // The data for our dataset
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        },

        // Configuration options go here
        options: {
            plugins: {
                filler: {
                    propagate: true
                }
            }
        }
    });

    new Chart(ctx, {
        data: {
            datasets: [
                { fill: 'origin' },
                { fill: '' },
                { fill: false },
                { fill: " " }
            ]
        }
    });

   


// require(['dist/Chart.bundle.min.js'], function (Chart) {





// });

