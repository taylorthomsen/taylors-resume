from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def home():
	return render_template('home.html')

@app.route('/about')
def about():
	return render_template('aboutme.html')

@app.route('/resume')
def results():
	return render_template('resume.html')

if __name__ == '__main__':
	app.run(debug=True)
