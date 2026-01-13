#!/usr/bin/env python
import cgitb; cgitb.enable()
import time
import RPi.GPIO as GPIO
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# Fetch the service account key JSON file contents
cred = credentials.Certificate('/home/pi/project_cordova_cred.json')
# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://cordova-project-fd4a6.firebaseio.com'
})

GPIO.setmode(GPIO.BCM)
output = (14,15)
GPIO.setup(output, GPIO.OUT)
lamp1 = False
lamp2 = False
lamp1val = ""
lamp2val = ""
GPIO.output(output, False)

def lamp1Changed(x):
	lamp1val = ref.child('lamp1').get()
	lamp1 = str2bool(lamp1val)
	GPIO.output(14, lamp1)
	
def lamp2Changed(x):
	lamp2val = ref.child('lamp2').get()
	lamp2 = str2bool(lamp2val)
	GPIO.output(15, lamp2)

def str2bool(str):
	if(str == "True"):
		return True
	else:
		return False

ref = db.reference('')
ref.child('lamp1').listen(lamp1Changed)
ref.child('lamp2').listen(lamp2Changed)