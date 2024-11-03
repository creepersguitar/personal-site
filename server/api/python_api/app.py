from flask import Flask, jsonify, request, abort
from flask_sqlalchemy import SQLAlchemy # type: ignore
from datetime import datetime
from lore import db  # Assuming db is initialized in another module
from lore.models import Lore  # type: ignore # Assuming Lore model is in models.py

# Initialize the Flask application
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///lore.db'  # Replace with your database URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# Example route for the homepage
@app.route('/')
def index():
    return "Welcome to the Imperial Lore Repository"

# Route to get all lore entries
@app.route('/lore', methods=['GET'])
def get_all_lore():
    lore_entries = Lore.query.all()
    result = [
        {
            "id": lore.id,
            "title": lore.title,
            "description": lore.description,
            "faction": lore.faction,
            "date_discovered": lore.date_discovered,
            "tags": lore.tags,
            "source_url": lore.source_url
        } for lore in lore_entries
    ]
    return jsonify(result)

# Route to get a specific lore entry by ID
@app.route('/lore/<int:lore_id>', methods=['GET'])
def get_lore(lore_id):
    lore = Lore.query.get_or_404(lore_id)
    return jsonify({
        "id": lore.id,
        "title": lore.title,
        "description": lore.description,
        "faction": lore.faction,
        "date_discovered": lore.date_discovered,
        "tags": lore.tags,
        "source_url": lore.source_url
    })

# Route to add a new lore entry
@app.route('/lore', methods=['POST'])
def create_lore():
    data = request.get_json()
    new_lore = Lore(
        title=data.get("title"),
        description=data.get("description"),
        faction=data.get("faction"),
        date_discovered=data.get("date_discovered"),
        tags=data.get("tags"),
        source_url=data.get("source_url")
    )
    db.session.add(new_lore)
    db.session.commit()
    return jsonify({"message": "Lore entry created successfully", "lore_id": new_lore.id}), 201

# Route to update an existing lore entry
@app.route('/lore/<int:lore_id>', methods=['PUT'])
def update_lore(lore_id):
    lore = Lore.query.get_or_404(lore_id)
    data = request.get_json()

    lore.title = data.get("title", lore.title)
    lore.description = data.get("description", lore.description)
    lore.faction = data.get("faction", lore.faction)
    lore.date_discovered = data.get("date_discovered", lore.date_discovered)
    lore.tags = data.get("tags", lore.tags)
    lore.source_url = data.get("source_url", lore.source_url)

    db.session.commit()
    return jsonify({"message": "Lore entry updated successfully"})

# Route to delete a lore entry
@app.route('/lore/<int:lore_id>', methods=['DELETE'])
def delete_lore(lore_id):
    lore = Lore.query.get_or_404(lore_id)
    db.session.delete(lore)
    db.session.commit()
    return jsonify({"message": "Lore entry deleted successfully"})

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
