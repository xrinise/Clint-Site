<!DOCTYPE html>
<html>
<head>
  <title>SVG</title>
  <link rel = "stylesheet" href = "style.css"	>
</head>
<body>
  <svg class="LineCircle">
    <circle cx="100" cy="100" r="50" fill="#eefa45"></circle>
      <circle cx="75" cy="85" r="5" fill="#000000"></circle>
      <circle cx="125" cy="85" r="5" fill="#000000">
    </circle>
    <line x1="75" y1="115" x2="125" y2="115" style="stroke:#000000 ;
    stroke-linecap:line;
    stroke-width:5" />
  </svg>

  <svg class = "CircleRect">
    <circle cx="100" cy="100" r="50" fill="#eefa45"></circle>
      <circle cx="75" cy="85" r="5" fill="#000000"></circle>
      <circle cx="125" cy="85" r="5" fill="#000000">
    </circle>
    <line x1="75" y1="115" x2="125" y2="115" style="stroke:#000000 ;
    stroke-linecap:rectangle;
    stroke-width:25" />
  </svg>
  <svg class = "PolylineCircle">
    <circle cx="100" cy="100" r="100" fill="#eefa45"></circle>
    <circle cx="75" cy="85" r="5" fill="#000000"></circle>
    <circle cx="125" cy="85" r="5" fill="#000000">
      </circle>
    <polyline points="0,100 50,25 50,75 100,0" />
    <line x1="75" y1="115" x2="125" y2="115" style="stroke:#000000 ;
    stroke-linecap:round;
    stroke-width:25" />
</svg>
<svg class= "PolygonEllipse">
  <ellipse cx="100" cy="120" rx="50" ry="80" fill="#eefa45"></ellipse>
  <polygon points="95 80, 8 200, 190 200," fill="white" stroke="#000"/>
</svg>
<svg class= "Circlelinerectangle">
  <circle cx="100" cy="100" r="50" fill="#eefa45"></circle>
    <circle cx="75" cy="85" r="5" fill="#000000"></circle>
    <circle cx="125" cy="85" r="5" fill="#000000">
  </circle>
  <line x1="75" y1="115" x2="125" y2="115" style="stroke:#000000 ;
  stroke-linecap:rectangle;
  stroke-width:25" />
  <line x1="100" y1="115" x2="-200" y2="115" style="stroke:#000000 ;
  stroke-linecap:line;
  stroke-width:5" />
  <line x1="100" y1="115" x2="200" y2="115" style="stroke:#000000 ;
  stroke-linecap:line;
  stroke-width:5" />
</svg>
<svg class= "PolylinePolygon">
  <polyline points="100,200 50,50 100,75 0,0" />
  <polygon points="150 80, 8 200, 100 200," fill="white" stroke="#000"/>
</svg>
<svg class= "CircleRectanglePolylinePolygonEllipse">
  <circle cx="100" cy="100" r="50" fill="#eefa45"></circle>
    <circle cx="75" cy="85" r="5" fill="#000000"></circle>
    <circle cx="125" cy="85" r="5" fill="#000000">
  </circle>
  <line x1="75" y1="115" x2="125" y2="115" style="stroke:#000000 ;
  stroke-linecap:rectangle;
  stroke-width:25" />
  <ellipse cx="100" cy="50" rx="10" ry="20" fill="black"></ellipse>
  <polygon points="95 115, 200 190, 150 200," fill="white" stroke="#000"/>
   <polyline points="80 60,20 100,20 100,90 170," style="fill:none;stroke:black;stroke-width:3" />
</svg>







</body>
</html>
