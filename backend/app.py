from flask import Flask
from flask_cors import CORS
from routes import auth
from database import db, FULL_URL_DB
from flask_migrate import Migrate


app = Flask(__name__)
CORS(app)

# Realizamos la conexion a la base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = FULL_URL_DB

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicializamos DB

db.init_app(app)

# Config Flask-Migrate

migrate = Migrate()
migrate.init_app(app, db)

app.register_blueprint(auth)

if __name__ == "__main__":
    app.run(port=5000)




