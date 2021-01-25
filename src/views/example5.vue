<template>
<div class="home">
<header id="header" >
<div class="topnav" id="myTopnav">
  <img class ="a" src="http://ipta.nthu.edu.tw/wp-content/uploads/2019/02/cropped-NTHU-logo.png" alt="國立清華大學logo" style="float:left;width:80px;height:80px;">
	<a class="a1"></a>
  <div class="a dropdown">
    <button class="dropbtn"><router-link to="/example5">聯絡</router-link>
      <i class="fa fa-caret-down"></i>
    </button>
  </div>

  <div class="a dropdown">
    <button class="dropbtn"><router-link to="/example4">招生<span class="caret"></span></router-link>
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#home"><router-link to="/example4">招生 Q&A</router-link></a>
      <a href="#home"><router-link to="/example4">春之清華獎學金</router-link></a>
    </div>
  </div>
  <div class="a dropdown">
    <button class="dropbtn"><router-link to="/example3">學士班<span class="caret"></span></router-link>
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#home"><router-link to="/example3">學士班簡介</router-link></a>
      <a href="#home"><router-link to="/example3">學士班課程</router-link></a>
      <a href="#home"><router-link to="/example3">藝術學院大樓(new)</router-link></a>
    </div>
  </div>
  <div class="a dropdown">
    <button class="dropbtn"><router-link to="/example2">科藝賞析<span class="caret"></span></router-link>
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#home"><router-link to="/example2">數位文創作品</router-link></a>
      <a href="#home"><router-link to="/example2">互動藝術作品</router-link></a>
      <a href="#home"><router-link to="/example2-3">動力藝術作品</router-link></a>
    </div>
  </div>
  <div class="a dropdown">
    <button class="dropbtn active" style="background-color: #4493b8;"><router-link to="/">Home</router-link>
      <i class="fa fa-caret-down"></i>
    </button>
  </div>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
</div>
</header>
</div>

<div class="background">
	<center>
    <div class="background" style="width:100% ;height:3em;"></div> 
	<header id="banner" class="major-alt-style1" style="border-radius: 30px;width:100%;height:15em;">
		<center><h2>
      <div><h1><h1><h1></h1></h1></h1></div>
		<font class="header-major-h1">
			<font>聯 絡 資 訊</font>
		</font>
		</h2>
		<p>
		<font>
			<font></font>
		</font>
		</p>
    </center>
	</header>
	</center>
	<div id="two" style="margin: 0em 30em 0em 30em;">
  <center><div class="middle">
    <article id="post-19" class="section section-text">
	<div class="row">
				<div class="col-md-8 col-md-offset-2 page-content-wrap">
			<div class="vc_row wpb_row vc_row-fluid"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner "><div class="wpb_wrapper">
	<div class="wpb_text_column wpb_content_element ">
		<div class="wpb_wrapper">
			<h2 class="hestia-title" style="font-size:30px;">聯繫 Contact</h2>
<h5 class="description" style="color: rgb(116, 116, 116);font-size:15px;">國立清華大學藝術學院</h5>
<div class="hestia-description">
<div class="hestia-info info info-horizontal">
<div class="icon icon-primary"><span style="color: #000000;font-size:23px">國立清華大學藝術學院學士班<br>
30014新竹市南大路521號（教學大樓3F）</span></div>
<h2></h2>
<div class="icon icon-primary"><span style="color: #000000;font-size:20px">+886-3-5715131 #78802 / ipta@my.nthu.edu.tw</span></div>
</div>
</div>

		</div>
	</div>
</div></div></div></div>
		</div>
			</div>
</article>
  </div></center>
	</div>
</div>

</template>

<script>
// import P5 from 'p5';

export default {
  name: "科藝賞析",
	data() {
		return {
			open1: false,
			btnText: "",
			check: 12,
			show: false,
			hightline: true,
			title: "藝 術 學 院 學 士 班",
		};
	},

  myFunction(){
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
},
}
</script>

<style>
.wpb_wrapper{
  box-sizing: border-box;
    padding-left: 100px;
    padding-right: 30px;
    width: 100%;
    text-align: left;

}
.home {
box-sizing: border-box;

}


/* .a1 {
margin-right: 750px;
padding: 30px;
font-size: 20px;
}  */

.a {
margin-left: 24px;
padding: 18px;
font-size: 20px;
}
.caret {
display: inline-block;
width: 0;
height: 0;
margin-left: 2px;
vertical-align: middle;
border-top: 4px dashed;
border-top: 4px solid \9;
border-right: 4px solid transparent;
border-left: 4px solid transparent;
}

#header {
background-attachment: fixed;
display: flex;
left: 0;
position: fixed;
top: 0;
width: 100%;
padding-bottom: 1em;
font-size: 18px;
box-shadow: 0px 0px 15px rgba(15, 1, 1, 0.2);
color: #fff;
z-index: 100;
}
#banner {
padding: 8em 0 3.4em 0;
position: relative;

}
.background {
background-color: rgb(235, 234, 228);
width: 100%;
height: 100%;
top: -5em;
}

.major-alt-style1 {
background-color: #5eadbb;
padding: 0em 0em;
margin: 0em 0em 0em 0em;
color: #fff;
width: 1200px;
height: 200px;
z-index: 77;
}
.header-major-h1 {
color: inherit;
font-size: 2.1em;
margin-bottom: 0em;
position: relative;
padding-bottom: 0.65em;
text-align: center;
}
.split {
padding: 4.5em 2.5em 2.1em 2.5em;
margin-left: 0em;
width: 50%;
position: right;
top: 4.5em;
}
#two {
z-index: 80;
top: -4.5em;
background-color: rgb(255, 255, 255);
text-align: center;
position: relative;
padding: 6em 6em 6em 6em;
margin: 0em 15em 0em 15em;
border-radius: 50px;
box-shadow: 0px 0px 15px rgba(15, 1, 1, 0.2);
}
.topnav {
  background-color: #333;
  overflow: hidden;
  width: 100%;
  z-index: 101;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: right;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
/* Add an active class to highlight the current page */
.active {
  background-color: #4493b8;
  color: white;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}

/* Dropdown container - needed to position the dropdown content */
.dropdown {
  float: right;
  overflow: hidden;
}

/* Style the dropdown button to fit inside the topnav */
.dropdown .dropbtn {
  font-size: 17px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

/* Style the dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: fixed;
  background-color: #d1fffd;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 100;
}

/* Style the links inside the dropdown */
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a dark background on topnav links and the dropdown button on hover */
.topnav a:hover, .dropdown:hover .dropbtn {
  background-color: #555;
  color: white;
}

/* Add a grey background to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

/* Show the dropdown menu when the user moves the mouse over the dropdown button */
.dropdown:hover .dropdown-content {
  display: block;
}


/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
  .topnav a:not(:first-child), .dropdown .dropbtn {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive a.icon {
    position: fixed;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .topnav.responsive .dropdown {float: none;}
  .topnav.responsive .dropdown-content {position: relative;}
  .topnav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
  }
}
</style>