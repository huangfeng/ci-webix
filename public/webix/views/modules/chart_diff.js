define("views/modules/chart_diff", [], function() {
    function e(e, t) {
        for (var i = 0, a = 0; a < t.length; a++) i += parseFloat(t[a].sales) || 0, i += parseFloat(t[a].sales2) || 0;
        return t.length ? i / (2 * t.length) : 0
    }
    var t = [{
            sales: 4.1,
            sales2: 8,
            year: "08"
        }, {
            sales: 4.3,
            sales2: 9,
            year: "09"
        }, {
            sales: 7.6,
            sales2: 11,
            year: "10"
        }, {
            sales: 7.8,
            sales2: 13,
            year: "11"
        }, {
            sales: 7.2,
            sales2: 10,
            year: "12"
        }, {
            sales: 5.3,
            sales2: 14,
            year: "13"
        }, {
            sales: 4.8,
            sales2: 12,
            year: "14"
        }],
        i = {
            view: "chart",
            type: "bar",
            barWidth: 40,
            padding: {
                left: 30,
                bottom: 60
            },
            radius: 0,
            yAxis: {},
            xAxis: {
                lines: !0,
                title: "Sales per year<br/>&nbsp;",
                template: "'#id#"
            },
            legend: {
                layout: "y",
                width: 100,
                align: "right",
                valign: "middle",
                values: [{
                    text: "Asia",
                    color: "#61b5ee"
                }, {
                    text: "Europe",
                    color: "#e9df40"
                }, {
                    text: "Average",
                    toggle: !0,
                    markerType: "item"
                }]
            },
            scheme: {
                $group: {
                    by: "year",
                    map: {
                        salesA: ["sales2", "any"],
                        salesB: ["sales", "any"],
                        salesAverage: ["sales", e]
                    }
                }
            },
            series: [{
                value: "#salesA#",
                color: "#61b5ee",
                gradient: "falling",
                alpha: .8
            }, {
                type: "area",
                alpha: .4,
                value: "#salesB#",
                color: "#e9df40"
            }, {
                type: "line",
                value: "#salesAverage#",
                item: {
                    radius: 2,
                    borderColor: "#27ae60"
                },
                line: {
                    color: "#27ae60",
                    width: 2
                }
            }],
            data: t
        };
    return {
        $ui: i
    }
})