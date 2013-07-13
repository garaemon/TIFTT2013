$(function() {
    $("#hotstage")
        .append(new EJS({url: 'views/tt_column.ejs'})
                .render({stage_name: "hot stage"}));
    $("#dollfactory").append(new EJS({url: 'views/tt_column.ejs'})
                             .render({stage_name: "doll factory"}));
    $("#enjoystudium").append(new EJS({url: 'views/tt_column.ejs'})
                              .render({stage_name: "enjoy studim"}));
    $("#azurestage").append(new EJS({url: 'views/tt_column.ejs'})
                            .render({stage_name: "azure stage"}));
    $("#smilegarden").append(new EJS({url: 'views/tt_column.ejs'})
                             .render({stage_name: "smile graden"}));
    $("#vinuschurch").append(new EJS({url: 'views/tt_column.ejs'})
                             .render({stage_name: "vinus church"}));
    $("#infocenter").append(new EJS({url: 'views/tt_column.ejs'})
                            .render({stage_name: "info center"}));


    function timeToTopPosition(hour, min) {
        var start_hour = 9;
        var hour_num = parseInt(hour, 10);
        var min_num = parseInt(min, 10);
        // 15
        var hour_diff = hour_num - start_hour;
        return (15 + 1) * (min_num + hour_diff * 60) / 5 + hour_diff;
    }

    function addEvent(event_spec) {
        var idol = event_spec.idol;
        var stage = event_spec.stage;
        var start = event_spec.start;
        var end = event_spec.end;
        var top = timeToTopPosition(start.split(":")[0],
                                    start.split(":")[1]);
        var bottom = timeToTopPosition(end.split(":")[0],
                                       end.split(":")[1]);
        var html = $('<div></div>');
        html.addClass("event")
            .css("top", top + "px")
            .css("height", (bottom - top) + "px");
        html.append('<div class="time">' + start + "~" + end + '</div>'
                    + '<div class="idol">' + idol + '</div>')
                    
        $("#" + stage + " .tt").append(html);
    }
    
    
    var events = [{
        idol: "リンダIII世",
        stage: "hotstage",
        start: "10:30",
        end: "10:50"
    },
                 ];
    for (var i = 0; i < events.length; i++) {
        addEvent(events[i]);
    }
});
