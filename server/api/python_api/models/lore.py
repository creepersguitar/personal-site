# models/lore.py
from django import db


class Lore(db.Model):
    __tablename__ = 'lore'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    faction = db.Column(db.String)
    date_discovered = db.Column(db.String)
    tags = db.Column(db.String)
    source_url = db.Column(db.String)
