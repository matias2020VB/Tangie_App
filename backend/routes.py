from flask import jsonify, request, Blueprint

auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.route('/login', methods=['POST'])

def login():
    print("login del back")
    email = request.json.get('email')
    password = request.json.get('password')
    print(email, password)
    
    return jsonify({'message': 'correcto'}), 200