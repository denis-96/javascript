from flask import Flask, send_from_directory, request, jsonify, redirect, url_for
from config import FRONTEND_FOLDER

app = Flask(__name__)

@app.route('/')
def index():
    return redirect(url_for('main', path='index.html'))


@app.route('/<path:path>')
def main(path):
    return send_from_directory(FRONTEND_FOLDER, path)


@app.route('/server', methods=['GET', 'POST'])
def server():
    return jsonify(request.values.to_dict() or request.json)


if __name__ == '__main__':
    app.run(debug=True)