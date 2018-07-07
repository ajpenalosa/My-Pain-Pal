
var ctx = document.getElementById('myChart');
var canvas = ctx.getContext('2d');


var gradient = canvas.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'blue');

canvas.fillStyle = gradient;
canvas.fillRect(0, 0, 1, 1);

function keepUserIn(userId){
 $.get("/api/getid/", function (data) {
    userId = data.user;
    console.log("we need the users id help:",data.user);
    getChartStats(userId);
})
};

keepUserIn();

function getChartStats(userId) {
    console.log("Heyyy - user chart")
    var userIdString = userId || "";
    console.log(userIdString);
    if (userIdString) {
        userIdString = "/id/" + userIdString;
    }
    $.get("/api/chart/" + userId, function (data) {
        console.log("these posts are: ", data);
        posts = data;
        console.log("what is this: ", posts[0].Posts)
        var usersPosts = posts[0].Posts;
        console.log("this one is the users posts console: ", usersPosts);

       
        var chartArr = [0, 0, 0, 0, 0, 0, 0]

        for (var i = 0; i < usersPosts.length; i++) {
            var painIntensity = usersPosts[i].pain_intensity
            var createdAt = moment(usersPosts[i].createdAt).format("dddd");
            console.log("user post: " + usersPosts[i].pain_intensity);
            console.log("day of the week " + createdAt);


            switch(createdAt) {
                case 'Sunday': 
                    chartArr[0] = painIntensity;
                    break;
                case 'Monday':
                    chartArr[1] = painIntensity;
                    break;
                case 'Tuesday':
                    chartArr[2] = painIntensity;
                    break;
                case 'Wednesday':
                    chartArr[3] = painIntensity;
                    break;
                case 'Thursday':
                    chartArr[4] = painIntensity;
                    break;
                case 'Friday':
                    chartArr[5] = painIntensity;
                    break;
                case 'Satday':
                    chartArr[6] = painIntensity;
                    break;
            }

        }
        console.log("this is the new array: " + chartArr);
        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    label: usersPosts[0].body_part,
                    backgroundColor: 'rgba(197, 96, 45, 0.65)',
                    borderColor: 'rgba(197, 96, 45, 1)',
                    borderWidth: 4,
                    fill: false,
                    data: chartArr,
                // }, 
                // {
                //     label: usersPosts[5].body_part,
                //     backgroundColor: 'rgba(75, 192, 192, 1)',
                //     borderColor: 'rgba(75, 192, 192, 1)',
                //     borderDash: [5, 5],
                //     borderWidth: 4,
                //     fill: false,
                //     data: chartArr2
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

});

}

getChartStats();


