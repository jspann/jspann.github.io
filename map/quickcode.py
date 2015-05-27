import json
import urllib2
from pprint import pprint

f = open("newaddr.json","w")
f.write("[")
with open('names.json') as data_file:    
    data = json.load(data_file)
#pprint(data)
print len(data)
for x in xrange(0,len(data)):
	addr = data[x]["Address"]
	address=addr.replace(" ", "+")
	url="https://maps.googleapis.com/maps/api/geocode/json?address=%s" % address
	response = urllib2.urlopen(url)
	jsongeocode = response.read()
	d = json.loads(jsongeocode)
	if d["status"] != "OK":
		raw_input("WE HAVE AN ERROR!" + str(x))
	else:
		#print d["results"][0]["geometry"]["location"]["lat"]
		f.write("{")
		f.write("\" lat\": " + str(d["results"][0]["geometry"]["location"]["lat"])+",")
		f.write("\" lng\": " + str(d["results"][0]["geometry"]["location"]["lng"]))
		if (x == len(data)-1):
			f.write("}")
		else:
			f.write("},")
			print str(x) + "no"
f.write("]")
f.close()