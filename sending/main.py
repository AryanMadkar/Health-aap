from flask import Flask,request

app = Flask(__name__)


@app.route("/")
def welcome():
    return "Welcome to the Health App!"


@app.route("/dibeties", methods=["POST"])
def dibeties():
    data = request.get_json()


@app.route("/heart", methods=["POST"])
def heart():
    pass


@app.route("/lungcancer", methods=["POST"])
def lungcancer():
    pass


@app.route("/brestcancer", methods=["POST"])
def brestcancer():
    pass



if __name__ == "__main__":
    app.run(debug=True, port=5000)
