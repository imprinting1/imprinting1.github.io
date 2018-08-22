/* Navbar container */
nav {
    overflow: hidden;
    background-color: #333;
    font-family: Arial;
  }
nav ul{
    margin:0px;
    padding:0px;
    list-style: none;
}

  /* Links inside the navbar */
 nav ul li a {
    float: left;
    font-size: 16px;
    display:block;
    color: white;
    text-align: center;
    padding: 14px 100px;
    text-decoration: none;
  }
nav a:hover {
    background-color: pink;
}

nav ul li ul li{
    display: none;
}
nav ul li:hover ul li{
    display: block;
}