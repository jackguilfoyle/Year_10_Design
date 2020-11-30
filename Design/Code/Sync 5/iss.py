
import time
import urllib.request, urllib.error, urllib.parse
import json

while True:
	time.sleep(5)

	req = urllib.request.Request("http://api.open-notify.org/iss-now.json")
	response = urllib.request.urlopen(req)

	obj = json.loads(response.read())

	print('')
	print('Retrive status')
	print(obj['message'])
	print('')
	print('Time')
	print(obj['timestamp'])
	print('')
	print('ISS location')
	print('longitude')
	print(obj['iss_position']['longitude'])
	print('')
	print('latitude')
	print(obj['iss_position']['latitude'])
	print('')

