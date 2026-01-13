#!/usr/bin/env python
import time
import sys
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
input = (2,3)
GPIO.setup(input, GPIO.IN) # GPIO 17 input

ref = db.reference('')

def readSwitch1():
	if (GPIO.input(2)==1):
		lamp1 = str2bool(ref.child('lamp1').get())
		lamp1 = not lamp1 #toggle
		ref.child('lamp1').set(str(lamp1))
	
def readSwitch2():
	if (GPIO.input(3)==1): 
		lamp2 = str2bool(ref.child('lamp2').get())
		lamp2 = not lamp2 #toggle
		ref.child('lamp2').set(str(lamp2))
		
def str2bool(str):
	if(str == "True"):
		return True
	else:
		return False	

		
while True:
	readSwitch1()
	readSwitch2()
	time.sleep(0.3)