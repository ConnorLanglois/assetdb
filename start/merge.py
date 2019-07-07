import glob

with open('merge.js', 'w') as fileMerge:
	for filename in glob.glob('../src/*.js'):
		with open(filename) as fileScript:
			fileMerge.write(fileScript.read() + '\n')
