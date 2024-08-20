from flask import jsonify, request, Blueprint
from database import db
from models.User import User

auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.route('/login', methods=['POST'])
def login():
    print("login del back")
    email = request.json.get('email')
    password = request.json.get('password')
    print(email, password)
    
    return jsonify({'message': 'correcto'}), 200


@auth.route('/register', methods=['POST'])
def register():
    print("entre al register")
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    print(name, email, password)
    
    if User.query.filter_by(email=email).first():
        print('Error de registro, Email ya existe')
        return jsonify({'message': 'Error'}), 401
    else:
        user = User(name=name, email=email, password=password)
        db.session.add(user)
        db.session.commit()
        
        return jsonify({'message': 'correcto'}), 200

