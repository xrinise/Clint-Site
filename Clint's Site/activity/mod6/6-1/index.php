<html>
<head>
    <title> SVG Animation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <svg
  width="900"
  height="780"
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg">

    <path d="
          M 100, 100
          m -75, 0
          a 75,75 0 1,0 150,0
          a 75,75 0 1,0 -150,0" id="path-circle" fill="none" />
      <text>
          <textPath href="#path-circle">
        A boomerang returns back to the person who throws it
            </textPath>
        </text>

  </svg>
</body>

</html>
