from mongoengine import *

class Medallion(Document):
    license_number = StringField()
    licensee_name = StringField()
    license_type = StringField()
    driver_record_status = StringField()
    license_plate = StringField()
    vin = StringField()
    vehicle_type = StringField()
    model_year = IntField()
    agent_number = StringField()

    meta = {
	'indexes': ['license_number','vin','license_plate','agent_number']
    }

class MedallionLicenseType(Document):
    license_number = StringField()
    agent_number = StringField()
    licensee_name = StringField()
    address = StringField()
    city = StringField()
    state = StringField()
    zip = StringField()
    telephone = StringField()
    license_type = StringField()

    meta = {
	'indexes': ['license_number', 'agent_number', 'zip']
    }

class DriversByMedallion(Document):
    medallion_number = StringField()
    medallion_owner = StringField()
    tlc_driver_license_number = StringField()
    driver_name = StringField()
    license_expiration = StringField()

    meta = {
	'indexes': ['medallion_number', 'tlc_driver_license_number']
    }

class Insurance(Document):
    license_number = StringField()
    license_type = StringField()
    dmv_plate = StringField()
    vin = StringField()
    code = StringField()
    policy_number = StringField()
    vehicle_owner = StringField()
    agent_fleet_number = StringField()

    meta = {
	'indexes': ['license_number', 'vin']
    }
