document.addEventListener("DOMContentLoaded", function () {
    var drag = d3.drag()
        .on("start", started);

        var data = [
            { x: 900, y: 520, w: 275, title1: "⚠️ I'm still working out the kinks ⚠️", text: "I hope you enjoy my work...🧩 my portfolio is still a work in progress (WIP)👷‍♀️🛠️. It's best viewed on a full desktop screen 💻, not yet on mobile view📱.", img: "image1.jpg" },
            { x: 900, y: 90, w: 300, title1: "About me", text: "", img: "about2.png", link: "Harriet-Shaw-CV-24.png" },
            { x: 50, y: 100, w: 290, title1: "Contact me", text: "", img: "email2.png" }
        ];

    var winElems = d3.select("body").selectAll("article")
        .data(data)
        .enter()
        .append("article")
        .attr("class", "draggable")
        .style("left", function (d) { return d.x + "px"; })
        .style("top", function (d) { return d.y + "px"; })
        .style("width", function (d) { return d.w + "px"; })
        .style("z-index", function (d, i) { return i; });

    winElems.append("div")
        .attr("class", "title1")
        .html(function (d) { return "<h2>" + d.title1 + "</h2>"; });

    winElems.append("div")
        .attr("class", "content")
        .html(function (d) {
            if (d.title1 === "Contact me") {
                return "<a href='mailto:Harrietshawbusiness@gmail.com'><img src='" + d.img + "' alt='" + d.title1 + "'></a>";
            } else if (d.title1 === "About me") {
                return "<a href='" + d.link + "' target='_blank'><img src='" + d.img + "' alt='" + d.title1 + "'></a>";
            } else {
                return "<img src='" + d.img + "' alt='" + "'><p class='text'>" + d.text + "</p>";
            }
        });

    // Call drag function
    winElems.call(drag);

    function started() {
        var dragElem = d3.select(this).classed("dragging", true);
        dragElem.style("z-index", 1);

        d3.event.on("drag", dragged).on("end", ended);

        function dragged(d) {
            d.x = d3.event.x;
            d.y = d3.event.y;
            dragElem
                .style("left", d.x + "px")
                .style("top", d.y + "px");
        }

        function ended() {
            dragElem.classed("dragging", false);
        }
    }
});
