from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route("/members")
def members():
    return {"members": ["member1", "member2", "member3"]}

# Login route
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        if email == "test@example.com" and password == "password123":
            return jsonify({"message": "Login successful"})
        return jsonify({"message": "Invalid credentials"}), 401
    return render_template("login.html")

if __name__ == "__main__":
    app.run(debug=True)
