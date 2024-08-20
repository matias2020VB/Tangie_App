from flask_sqlalchemy import SQLAlchemy


# Inicializamos objeto sqlalchemy

db = SQLAlchemy()

# Configuracion de BD

USER_DB = 'postgres'
PASS_DB = '0033'
URL_DB = 'localhost'
NAME_DB = 'proyectoFinalDB'
FULL_URL_DB = f'postgresql://{USER_DB}:{PASS_DB}@{URL_DB}/{NAME_DB}'

