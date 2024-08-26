from flask import jsonify, request, Blueprint
from database import db
from models.User import User
import requests

auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.route('/login', methods=['POST'])

def login():
    print("login del back")
    data = request.get_json()
    email = request.json.get('email')
    password = request.json.get('password')
    
    # Solicito que la base de datos liste el primer email que coincida con el ignresado
    emailDb = User.query.filter_by(email=email).first()
    role = emailDb.role
    print('role', role)
    
    if emailDb and emailDb.password == password:
        print('logueado correctamente')
        return jsonify(role=role),200
    else:
        response = {'Mensaje': 'Error'}
        print('error de contraseña')
        return jsonify(response), 401


@auth.route('/register', methods=['POST'])
def register():
    print("entre al register")
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    print(name, email, password)
    role = '2'
    
    
    # Solicito que la base de datos liste el primer email que coincida con el ingresado.
    if User.query.filter_by(email=email).first():
        print('Error de registro, Email ya existe')
        return jsonify({'message': 'Error'}), 401
    else:
        user = User(name=name, email=email, password=password, role=role)
        db.session.add(user)
        db.session.commit()
        
        return jsonify(role=role), 200

