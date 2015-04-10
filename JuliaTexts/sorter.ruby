require 'csv'

$Oct = 0
$Nov = 0
$Dec = 0
$Jan = 0
$Feb = 0
$Mar = 0
$Apr = 0
$May = 0
$Jun = 0
$Jul = 0
$Aug = 0
$Sep = 0
$Octr2 = 0

$am = 0
$pm = 0

$mon = 0
$tues = 0
$wed = 0
$thurs = 0
$fri = 0
$sat = 0
$sun = 0


$interestwho = 0
$interestart = 0
$interestmusic = 0
$interestbo = 0
$interesttfios = 0

$numOkat = 0
$numheart = 0

$James = 0
$Julia = 0

$Total = 0


def getInterests(intro)
	v = intro.split(' ')
	puts v
	
	v.each { |v|
	
	if(v.casecmp("tardis") == 0|| v.casecmp("Rose") == 0 || v.casecmp("doctor") == 0)
		$interestwho += 1
	elsif (v.casecmp("bo") == 0 || v.casecmp("burnham")  == 0 || v.casecmp("zach") == 0)
		$interestbo += 1
	elsif (v.casecmp("photography") == 0|| v.casecmp("photo") == 0)
		$interestart += 1
	elsif (v.casecmp("music") == 0|| v.casecmp("ukelele") == 0 || v.casecmp("doctor") == 0)
		$interestmusic += 1
	elsif (v.casecmp("tfios") == 0 || v.casecmp("hazel") == 0 || v.casecmp("gus") == 0)
		$interesttfios += 1
	end
	}
end

def addMonthCounter(datestr)
	#Oct 14, 2013, 8:53:31 AM
	p = datestr.split(' ')[0].strip # "Oct"
	$yr = datestr.split(' ')[2]
	
	
	if (p == 'Oct') && ($yr == '2013,')
	   $Oct +=1
	elsif p == 'Nov'
	   $Nov +=1
	elsif p == 'Dec'
	   $Dec +=1
	elsif p == 'Jan'
	   $Jan +=1
	elsif p == 'Feb'
	   $Feb +=1
	elsif p == 'Mar'
	   $Mar +=1
	elsif p == 'Apr'
	   $Apr +=1
	elsif p == 'May'
	   $May +=1
	elsif p == 'Jun'
	   $Jun +=1
	elsif p == 'Jul'
	   $Jul +=1
	elsif p == 'Aug'
	   $Aug +=1
	elsif p == 'Sep'
	   $Sep +=1
	elsif (p == 'Oct') and ($yr == '2014,')
	   $Octr2 +=1
	end
end

def addampmCounter(datestr)
	#Oct 14, 2013, 8:53:31 AM
	p = datestr.split(' ')[0].strip # "Oct"
	$ampm = datestr.split(' ')[4] #AM or PM
	
	
	if $ampm == 'AM'
	   $am +=1
	elsif $ampm == 'PM'
	   $pm +=1
	end
end

def getDayOfWeek(datestr)
	#Oct 14, 2013, 8:53:31 AM
	p = datestr.split(' ')[0].strip # "Oct"
	$d = datestr.split(' ')[1] # number day of the month
	
	puts datestr.split(' ')[2]

	$m = 0
	$y = 0#check this
	$c =0#check this
	
	if (p == 'Oct')
	   $m = 0
	elsif p == 'Nov'
	   $m = 3
	elsif p == 'Dec'
	   $m = 5
	elsif p == 'Jan'
	   $m = 0
	elsif p == 'Feb'
	   $m = 3
	elsif p == 'Mar'
	   $m = 3
	elsif p == 'Apr'
	   $m = 6
	elsif p == 'May'
	   $m = 1
	elsif p == 'Jun'
	   $m = 4
	elsif p == 'Jul'
	   $m = 6
	elsif p == 'Aug'
	   $m = 2
	elsif p == 'Sep'
	   $m = 5
	end
end

def checkOkat(intro)
	#puts intro
	#f = "okat"
	#if (intro.chomp == "💙")
	#	$numOkat +=1
	#	puts "\nOkats: #$numOkats"
	#end
	v = intro.split(' ')
	f = "okat"

	#puts "|#v|"
	
	v.each { |v|
	
	if(v.casecmp(f) == 0)
		$numOkat +=1
	end
	
	if(v.casecmp("💙") == 0)
		$numheart +=1
	end
	}

	
#	if ($v == f)
#		puts "good"
#	end
end

def createFile()
	#http://theartofdoing.com/category/word-cloud/
	#http://stackoverflow.com/questions/7474354/include-jquery-in-the-javascript-console
	f = open("index.html","w")
	f.write("<html>\n<head>\n  <title>stupidfaceaversary</title>\n<link href='http://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800' rel='stylesheet' type='text/css'>\n</head>\n")
	f.write ("<script type=\"text/javascript\" src=\"http://code.jquery.com/jquery-1.7.1.min.js\"></script>\n\n")
	f.write ("<script type=\"text/javascript\" src=\"Chart.js\"></script>\n\n")

	#AM PM graph data
	f.write("<script type=\"text/javascript\">\nvar pieData = [\n\t\t\t\t{\n\t\t\t\t\tvalue: #$am,\n\t\t\t\t\tcolor: \"\#FDB45C\",\n\t\t\t\t\thighlight: \"\#FFC870\",\n\t\t\t\t\tlabel: \"Day\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tvalue: #$pm,\n\t\t\t\t\tcolor: \"\#4D5360\",\n\t\t\t\t\thighlight: \"\#616774\",\n\t\t\t\t\tlabel: \"Night\"\n\t\t\t\t}\n\n\t\t\t];\n\nfunction showampmgraph(){\n\tconsole.log(\"got here\");\nvar ctx = document.getElementById(\"ampmgraph\").getContext(\"2d\");\n\twindow.myPie = new Chart(ctx).Pie(pieData);\n}\n</script>\n\n")
	f.write("<script type=\"text/javascript\">\n\t\tvar randomScalingFactor = function(){ return Math.round(Math.random()*100)};\n\t\tvar lineChartData = {\n\t\t\tlabels : [\"October 2013\",\"November\",\"December\",\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October 2014\"],\n\t\t\tdatasets : [\n\t\t\t\t{\n\t\t\t\t\tlabel: \"Months\",\n\t\t\t\t\tfillColor : \"rgba(151,187,205,0.2)\",\n\t\t\t\t\tstrokeColor : \"rgba(151,187,205,1)\",\n\t\t\t\t\tpointColor : \"rgba(151,187,205,1)\",\n\t\t\t\t\tpointStrokeColor : \"#fff\",\n\t\t\t\t\tpointHighlightFill : \"#fff\",\n\t\t\t\t\tpointHighlightStroke : \"rgba(151,187,205,1)\",\n\t\t\t\t\tdata : [#$Oct,#$Nov,#$Dec,#$Jan,#$Feb,#$Mar,#$Apr,#$May,#$Jun,#$Jul,#$Aug,#$Sep,#$Octr2 ]\n\t\t\t\t}\t\t\t]\n\t\t}\n\tfunction setupgraph(){\n\t\tvar ctx = document.getElementById(\"canvas\").getContext(\"2d\");\n\t\twindow.myLine = new Chart(ctx).Line(lineChartData, {\n\t\t\tresponsive: true\n\t\t});\n\t}\n\n</script>\n")
	
	#day of week graph
	f.write("<script type=\"text/javascript\">\n\t\t\n\t\tvar lineChartDataz = {\n\t\t\tlabels : [\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"],\n\t\t\tdatasets : [\n\t\t\t\t{\n\t\t\t\t\tlabel: \"Days\",\n\t\t\t\t\tfillColor : \"rgba(151,187,205,0.2)\",\n\t\t\t\t\tstrokeColor : \"rgba(151,187,205,1)\",\n\t\t\t\t\tpointColor : \"rgba(151,187,205,1)\",\n\t\t\t\t\tpointStrokeColor : \"#fff\",\n\t\t\t\t\tpointHighlightFill : \"#fff\",\n\t\t\t\t\tpointHighlightStroke : \"rgba(151,187,205,1)\",\n\t\t\t\t\tdata : [#$mon,#$tues,#$wed,#$thurs,#$fri,#$sat,#$sun]\n\t\t\t\t}\t\t\t]\n\t\t}\n\tfunction weeklygraph(){\n\t\tvar ctx = document.getElementById(\"weeklygraph\").getContext(\"2d\");\n\t\twindow.myLine = new Chart(ctx).Line(lineChartDataz, {\n\t\t\tresponsive: true\n\t\t});\n\t}\n\n</script>\n")

	
	#radar graph data
f.write("<script type=\"text/javascript\">\n        var radarChartData = {
		labels: [\"Doctor Who\", \"Music\", \"Art\", \"Bo Burnham\", \"TFIOS\"],
		datasets: [
			{
				label: \"Interests\",
				fillColor: \"rgba(220,220,220,0.2)\",
				strokeColor: \"rgba(220,220,220,1)\",
				pointColor: \"rgba(220,220,220,1)\",
				pointStrokeColor: \"\#fff\",
				pointHighlightFill: \"\#fff\",
				pointHighlightStroke: \"rgba(220,220,220,1)\",
				data: [#$interestwho,#$interestmusic,#$interestart,#$interestbo,#$interesttfios]
			}
		]
	};
	
	function loadRadar(){\n	    window.myRadar = new Chart(document.getElementById(\"interestcanvas\").getContext(\"2d\")).Radar(radarChartData, {\n			responsive: true\n        });}\n\n        window.onload = function(){\n                document.getElementById(\"hayleyaudio\").volume = 0.0;\nconsole.log(\"ok james\")	}\n</script>\n\n")
	#Second Line graph f.write("<script>\n\t\tvar lineChartData = {\n\t\t\tlabels : [\"October 2013\",\"November\",\"December\",\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October 2014\"],\n\t\t\tdatasets : [\n\t\t\t\t{\n\t\t\t\t\tlabel: \"Days\",\n\t\t\t\t\tfillColor : \"rgba(151,187,205,0.2)\",\n\t\t\t\t\tstrokeColor : \"rgba(151,187,205,1)\",\n\t\t\t\t\tpointColor : \"rgba(151,187,205,1)\",\n\t\t\t\t\tpointStrokeColor : \"#fff\",\n\t\t\t\t\tpointHighlightFill : \"#fff\",\n\t\t\t\t\tpointHighlightStroke : \"rgba(151,187,205,1)\",\n\t\t\t\t\tdata : [#$Oct,#$Nov,#$Dec,#$Jan,#$Feb,#$Mar,#$Apr,#$May,#$Jun,#$Jul,#$Aug,#$Sep,#$Octr2 ]\n\t\t\t\t}\t\t\t]\n\t\t}\n\tfunction setupgraph(){\n\t\tvar ctx = document.getElementById(\"canvas\").getContext(\"2d\");\n\t\twindow.myLine = new Chart(ctx).Line(lineChartData, {\n\t\t\tresponsive: true\n\t\t});\n\t}\n\n</script>")
	f.write("<script>\n$(document).ready(function() {\n\n    /* Every time the window is scrolled ... */\n    $(window).scroll( function(){\n\t/* Check the location of each desired element */\n        $('.hideme').each( function(i){\n            var bottom_of_object = $(this).position().top + $(this).outerHeight();\n            var bottom_of_window = $(window).scrollTop() + $(window).height();\n            /* If the object is completely visible in the window, fade it it */\n            if( bottom_of_window > bottom_of_object ){\n\n\t\t$(this).animate({'opacity':'1'},600);\nif($(this).attr(\"id\") == \"canvas\" && ($(this).css(\"opacity\") == 0)){setupgraph();}\nif($(this).attr(\"id\") == \"ampmgraph\" && ($(this).css(\"opacity\") == 0)){\nshowampmgraph();\n}\nif($(this).attr(\"id\") == \"interestcanvas\" && ($(this).css(\"opacity\") == 0)){loadRadar();}        \nif($(this).attr(\"id\") == \"weeklygraph\" && ($(this).css(\"opacity\") == 0)){weeklygraph();}}\n\t});\n    });\n\n\n\n")
	f.write ("});\n</script>\n\n")
	f.write("<script>\n\n	$(document).ready(function() {\n    /* Every time the window is scrolled ... */\n    $(window).scroll( function(){\n\t/* Check the location of each desired element */\n        $('.hideme').each( function(i){\n            var bottom_of_object = $(this).position().top + $(this).outerHeight();\n            var bottom_of_window = $(window).scrollTop() + $(window).height();\n            /* If the object is completely visible in the window, fade it it */\n            if( bottom_of_window > bottom_of_object ){\n\n\t\tif($(this).attr(\"id\") == \"paramoreimage\"){\n                    \n                    console.log(\"audio detected\");\n                    $(\"#hayleyaudio\").animate({volume: 1}, 1000);\n                console.log(\"yeah boi\");\n                }else{\n\n                $(\"#hayleyaudio\").animate({volume: 0}, 1000);\n                console.log(\"no no no\");\n                }\n            }\n\t});\n    });\n\n});\n\n</script>\n\n")
	f.write("<script type=\"text/javascript\">\n$(document).ready(function()\n{\n    console.log(\"jquery is on\");\n});\n</script>\n\n")
	f.write ("<script type=\"text/javascript\">\nfunction goToTop(){\n\t$('html, body').animate({ scrollTop: 0 }, 'fast');\n}\n</script>\n\n")
	f.write("<style>\nbody{\n    background-color:#F5F5DC;\n        overflow-y:hidden;\n}\n\n.hideme{\n    opacity:0;\n}\n\n#welcometext{\n   text-align:center;\n    font-size: 100%;\n    font-family: 'Dosis', sans-serif;\n \n}\n\n#upbutton{\n    position:fixed;    top: 5px;    right: 5px;   opacity:0.3;\n}\ntextarea:focus, input:focus{\n    outline: 0;\n}\n*:focus {\n    outline: 0;\n}\n.graphdiv{\n        width: 50%;\n    margin: 0 auto;\n}\np{\n    font-family: 'Dosis', sans-serif;\n        font-weight: bold;\n} .quotes{\n    opacity:0;\n    padding 5px;\n}\n#cloud a.tag1 { font-size: 0.7em; font-weight: 100; }
#cloud a.tag2 { font-size: 0.8em; font-weight: 200; }
#cloud a.tag3 { font-size: 0.9em; font-weight: 300; }
#cloud a.tag4 { font-size: 1.0em; font-weight: 400; }
#cloud a.tag5 { font-size: 1.2em; font-weight: 500; }
#cloud a.tag6 { font-size: 1.4em; font-weight: 600; }
#cloud a.tag7 { font-size: 1.6em; font-weight: 700; }
#cloud a.tag8 { font-size: 1.8em; font-weight: 800; }
#cloud a.tag9 { font-size: 2.2em; font-weight: 900; }
#cloud a.tag10 {
     font-size: 2.5em; font-weight: 900;
    -ms-transform: rotate(7deg); /* IE 9 */
    -webkit-transform: rotate(7deg); /* Chrome, Safari, Opera */
    transform: rotate(90deg);
}

#cloud { padding: 2px; line-height: 3em; text-align: center; } #cloud a { padding: 0px; }

#cloud { margin: 0; } #cloud li { display: inline; }

#roundness {
    border-radius: 50%;
    border: 3px solid red;

}

</style>")
	f.write("<body>\n    <input type=\"image\" src=\"up.png\" alt=\"up\" width=\"48\" height=\"48\" id=\"upbutton\" onclick=\"goToTop()\">\n</br>\n<p id=\"welcometext\">What does friendship mean?</p>\n")
	f.write("</br></br></br></br></br></br></br></br></br></br></br></br></br></br>\n")
	f.write("<p class=\"hideme\">It means communication </p>\n")
	f.write("<div class=\"graphdiv\">\n    <canvas id=\"canvas\" height=\"450\" width=\"700\" class=\"hideme\"></canvas>\n</div>	")#The graph
	f.write("</br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br>\n")

	#ampmgraph
	f.write("<p class= \"hideme\">Day or night</p>\n")
	f.write("<div class=\"graphdiv\">\n    <canvas id=\"ampmgraph\" width=\"300\" height=\"300\" class=\"hideme\"/>\n</div>\n")
	f.write("</br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br>\n")


	#Side quote
	#YAY BC WERE ULTIMATE BEST WHO FRIENDS OKAY 
	#Oct 12, 2013, 7:53:17 PM
	f.write("<p class=\"hideme\" style=\"text-align:right;\">\"YAY BC WERE ULTIMATE BEST WHO FRIENDS OKAY\"</p><br><p class=\"hideme\" style=\"text-align:right;\">Oct 12, 2013, 7:53:17 PM</p>")
	
	#Zach stone stat
	#f.write("<p class=\"hideme\">3 hilarious hours of Zach Stone trying to become famous.</p>")
		
	#goodtimes
	f.write("<div class=\"graphdiv\">\n <p>Through the good times</p>\n <img src=\"img/zachstone.jpg\" alt=\"good times\" width=\"500\" height=\"285.5\" class=\"hideme\">\n</div></br>")

	#Badtimes
	f.write("<div class=\"graphdiv\">\n <p>and the bad</p>\n <img src=\"img/gwen-fall.jpg\" alt=\"bad times\" width=\"630\" height=\"420\" class=\"hideme\">\n</div>")
	
	#Side quote
	#Here is a rock,\nA horse,\nAnd and arctic duck
	#Nov 2, 2013, 7:43:00 PM
	f.write("<p class=\"hideme\" style=\"text-align:left;\">\"Here is a rock,<br>\nA horse,<br>\nAnd and arctic duck\"</p><br><p class=\"hideme\" style=\"text-align:left;\">Nov 2, 2013, 7:43:00 PM</p>")

	#word cloud
	f.write("<div class=\"graphdiv\" id=\"roundness\"><p class= \"hideme\" style=\"text-align:center;\">Creating our own little worlds...</p><ul id=\"cloud\">
    <li><a class=\"tag4\">Whovian</a></li>
    <li><a class=\"tag3\">Basic Tags for a Web Site</a></li></br>
    <li><a class=\"tag7\">Zach stone</a></li>
    <li><a class=\"tag4\">Crazy Whovians </a></li>
<li><a class=\"tag5\">Andrew Garfied</a></li></br>
    <li><a class=\"tag7\">Sutter and Aimee</a></li>
    <li><a class=\"tag2\">Love</a></li>
    <li><a class=\"tag10\">Hulia</a></li>
    
    <li><a class=\"tag4\">Hayley</a></li>
    <li><a class=\"tag6\">little infinities</a></li>
<li><a class=\"tag7\">Best Web Design Software</a></li></br>
    <li><a class=\"tag2\">Building a Web Page for the Totally Lost</a></li>
<li><a class=\"tag7\">Building a Web Page for the Totally Lost</a></li>
    <li><a class=\"tag10\">OKAT</a></li>
</ul></div>\n")
	#f.write("</div>")
	
	#TFIOS image
	f.write("</br></br><p class= \"hideme\" style=\"text-align:center;\">or infinities in this case.</p>\n")
	f.write("<div class=\"graphdiv\">\n <img src=\"img/infinities.jpg\" alt=\"tfios photo\" width=\"521\" height=\"521\" class=\"hideme\">\n</div></br>")

	#side quote
	#NO I KEEP ALL THE JAMES HUGS
	#Nov 15, 2013, 6:15:16 PM
	f.write("<p class=\"hideme\" style=\"text-align:right;\">\"NO I KEEP ALL THE JAMES HUGS\"</p><p class=\"hideme\" style=\"text-align:right;\">Nov 15, 2013, 6:15:16 PM</p><br>")


	#Okat count
	f.write("")
	f.write("<div class=\"graphdiv\"><p class= \"hideme\">Defining our own style</p>\n\n <p style=\"font-size: 50px\">#$numOkat</p> <p style=\"font-size: 30px\">okats</p><p>#$numheart <img src=\"img/blueheart.png\" width=\"20px\" height=\"20px\">s </p></div></br></br></br>\n")

	f.write("<div class=\"graphdiv\"><p class= \"hideme\"><p class= \"hideme\">even if people look at us funny.</p>\n<img src=\"img/ugh.jpg\" alt=\"ugh\" width=\"300\" height=\"300\" class=\"hideme\" id=\"ugh\">\n</div>\n")

	#Bo burnahm waht.
	f.write("")
	f.write("<br></br></br><div class=\"graphdiv\">\n <p class= \"hideme\">Laughing at the things we love</p>\n <img src=\"img/what.png\" alt=\"bo burnham\" width=\"568\" height=\"320\" class=\"hideme\">\n</div></br>")

	
	#how to basic video
	f.write("<div class=\"graphdiv\"> <p class= \"hideme\">without asking if it made sense.</p></br> <video width=\"550\" class=\"hideme\" id=\"howtovideo\" autoplay muted loop>\n  <source src=\"img/How To Make a Rainbow Cake.mp4\" type=\"video/mp4\">\n  Your browser does not support HTML5 video.\n</video>\n</div>\n</br></br></br>")

	#side quote
	#Landon or max?
	#May 18, 2014, 5:26:35 PM
	f.write("<p class=\"hideme\" style=\"text-align:left;\">\"Landon or max?\"</p><p class=\"hideme\" style=\"text-align:left;\">May 18, 2014, 5:26:35 PM</p><br>")

	#paramore ain't it fun
	f.write("<div class=\"graphdiv\">\n<p class= \"hideme\">Just Jammin' out</p>\n<img src=\"img/Paramore.png\" alt=\"paramorecover\" width=\"300\" height=\"300\" class=\"hideme\" id=\"paramoreimage\">\n<audio id=\"hayleyaudio\" autoplay>\n <source src=\"img/Paramore - Ain't It Fun.mp3\" type=\"audio/mp3\">\nYour browser does not support the audio element.\n</audio></div>\n")
	
	f.write("</br></br></br><div class=\"graphdiv\">\n<p class= \"hideme\">and letting the good times roll</p>\n<img src=\"img/rollingRizzuti.jpg\" alt=\"rollingRizzuti\" width=\"568\" height=\"320\" class=\"hideme\">\n</div>")
	f.write("<p class= \"hideme\">Giggling at our failures</p>\n")
	f.write("<p class= \"hideme\">and glorifying our successes.</p>\n")
	
	#Julia's TFIOS art
	f.write("</br></br><div class\"graphdiv\">\n<p class= \"hideme\">Expressing our connection</p>\n <img src=\"img/juliasAmazingArt.jpg\" alt=\"superamazingdrawing\" width=\"306\" height=\"408\" class=\"hideme\" id=\"artimage\">\n</div>\n")
	
	#John Green's response
	f.write("<div class=\"graphdiv\"><p class= \"hideme\"><p class= \"hideme\">and telling the world.</p>\n<img src=\"img/johngreen.jpg\" alt=\"john green response\" width=\"300\" height=\"300\" class=\"hideme\" id=\"responseimage\">\n</div>\n")
	
	
	#side quote
	#Oh my god you psycho
	#May 16, 2014, 9:15:01 PM
	f.write("<p class=\"hideme\" style=\"text-align:right;\">\"Oh my god you psycho\"</p><p class=\"hideme\" style=\"text-align:right;\">May 16, 2014, 9:15:01 PM</p><br>")

	#radar interest graph
	f.write("<div class=\"graphdiv\"><p class= \"hideme\">It means that there is someone else out there who is just as weird as you are.</p>\n    <canvas id=\"interestcanvas\" height=\"450\" width=\"700\" class=\"hideme\"></canvas></div></div>")


	#f.write("<div class=\"graphdiv\">\n    <canvas id=\"weeklygraph\" height=\"450\" width=\"700\" class=\"hideme\"></canvas>\n</div>	")#The graph




	f.write("</body>\n</html>")
	f.close() # you can omit in most cases as the destructor will call if
end

	#texts = CSV.read('texts.csv')
	#csv = CSV.new(body)
	CSV.foreach('texts.csv') do |row|
	if row[0] == 'Me'
	   $James +=1
	else
	   $Julia +=1
	end

	
	$Total +=1
	
	
	addMonthCounter(row[3])
	addampmCounter(row[3])
	checkOkat(row[2])
	getInterests(row[2])
end
	
END {
   #puts "Julia: #$Julia"
   #puts "James: #$James"
    puts "October 2013: #$Oct \nNovember: #$Nov \nDecember: #$Dec \nJanuary: #$Jan \nFebuary: #$Feb \nMarch: #$Mar \nApril: #$Apr \nMay: #$May \nJune: #$Jun \nJuly: #$Jul \nAugust: #$Aug \nSeptember: #$Sep \nOctober 2014: #$Octr2"
	puts "\nDay: #$am \nNight: #$pm"
	puts "\nNumber of OKATs: #$numOkat"

	puts "\n\nTotal: #$Total texts"
	
	createFile()

}

BEGIN {
	puts "Starting text search..."
}