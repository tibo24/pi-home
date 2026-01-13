#!/usr/bin/env python
import time
import sys
from datetime import datetime
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# Fetch the service account key JSON file contents
cred = credentials.Certificate('/home/pi/project_cordova_cred.json')
# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://cordova-project-fd4a6.firebaseio.com'
})

ref = db.reference('')

def readTemp():
	idTempSensor = "10-00080355b4f2"
	tfile = open("/sys/bus/w1/devices/"+ idTempSensor +"/w1_slave")
	text = tfile.read()
	tfile.close()
	secondline = text.split("\n")[1]
	temperaturedata = secondline.split(" ")[9]
	temperature = float(temperaturedata[2:])
	temp = round((temperature / 1000),1)
	#print "temperatuur =", temp, "graden."
	return str(temp)
	
def str2bool(str):
	if(str == "True"):
		return True
	else:
		return False	
		
	
while True:
	tijd = datetime.now()
	if(tijd.second == 0):
		temp = readTemp()
		firstItem = ref.child('temper').order_by_key().limit_to_first(1).get()
		childName = list(firstItem)[0]
		ref.child('temper').child(childName).delete()
		childTijd = int(time.time())
		ref.child('temper').child(str(childTijd)).set(temp)
		time.sleep(1)
	if(str(tijd.second)[-1:] == '0'):
		print(tijd.second)
		temp = readTemp()
		ref.child('temperatuur').set(temp)
		time.sleep(1)
	time.sleep(0.3)