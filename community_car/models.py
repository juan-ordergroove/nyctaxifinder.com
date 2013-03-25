from mongoengine import *

class CommunityCarBase(Document):
    license_number = StringField()
    licensee_name = StringField()
    alt_licensee_name = StringField()
    address = StringField()
    city = StringField()
    zip = StringField()
    telephone = StringField()
    license_type = StringField()

    meta = {
	'indexes': ['license_number', 'zip']
    }
