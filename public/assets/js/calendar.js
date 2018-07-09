$(document).ready(function () {

    function keepUserIn(userId) {
        $.get("/api/getid/", function (data) {
            userId = data.user;
            console.log("we need the users id help:", data.user);
            getCalendarInfo(userId);
        })
    };

    keepUserIn();


    function getCalendarInfo(userId) {
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

            console.log("is this the time?!?!?" + moment(new Date()).format("YYYY-MM-DD"));

            var calendarEvents = [];

            for (var i = 0; i < usersPosts.length; i++) {
                var painIntensity = usersPosts[i].pain_intensity;
                var createdAt = moment(usersPosts[i].createdAt).format("dddd");
                console.log("user post: " + usersPosts[i].pain_intensity);
                console.log("day of the week " + createdAt);


                var calendarObj = {
                    title: usersPosts[i].pain_intensity + " " +  usersPosts[i].body_part,
                    start: moment(usersPosts[i].createdAt).format("YYYY-MM-DD")
                };

                calendarEvents.push(calendarObj);
            }

            var windowWidth = $(window).width();
            var calendarView = "month";

            function generateCalendar() {
                $('#calendar').fullCalendar({
                    defaultView: calendarView,
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay'
                    },
                    defaultDate: moment(new Date()).format("YYYY-MM-DD"),
                    navLinks: true, // can click day/week names to navigate views
                    selectable: false,
                    selectHelper: true,
                    select: function (start, end) {
                        var title = prompt('Event Title:');
                        var eventData;
                        if (title) {
                            eventData = {
                                title: title,
                                start: start,
                                end: end
                            };
                            $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
                        }
                        $('#calendar').fullCalendar('unselect');
                    },
                    editable: true,
                    eventLimit: true, // allow "more" link when too many events
                    events: calendarEvents
                });
            };

            if (windowWidth < 767) {
                calendarView = "listWeek";
                generateCalendar();
            }
            else  {
                calendarView = "month";
                generateCalendar();
            }

            $(window).on('resize', function (){

                windowWidth = $(window).width();

                if (windowWidth < 767) {
                    calendarView = "listWeek";
                    generateCalendar();
                }
                else  {
                    calendarView = "month";
                    generateCalendar();
                }
            });

        })
    }


});