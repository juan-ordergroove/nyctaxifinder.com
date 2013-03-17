    import csv
from yellow_cab.models import *
Medallion.objects.all()
f = open('/opt/pythonenv/nyctaxifinder-env/yellowcabmedallion.csv', 'rb')
csv_r = csv.reader(f)
for row in csv_r:
 print 'Saving '+', '.join(row)
 Medallion(
  license_number=row[1]
  , licensee_name=row[2]
  , license_type=row[3]
  , driver_record_status=row[4]
  , license_plate=row[5]
  , vin=row[6]
  , vehicle_type=row[7]
  , model_year=row[8]
  , agent_number=row[10] if row[10] else ''
  ).save(safe=True)

f.close()

------

import csv
from yellow_cab.models import MedallionLicenseType
f = open('/opt/pythonenv/nyctaxifinder-env/yellowcabmedallionlicensetype.csv', 'rb')
csv_r = csv.reader(f)
for row in csv_r:
 print 'Saving '+', '.join(row)
 MedallionLicenseType(
  license_number=row[1]
  , agent_number=row[2]
  , licensee_name=row[3]
  , address=row[4]
  , city=row[5]
  , state=row[6]
  , zip=row[7]
  , telephone=row[8]
  , license_type=row[9]
  ).save(safe=True)

f.close()

----

import csv
from yellow_cab.models import Insurance
f = open('/opt/pythonenv/nyctaxifinder-env/insurance.csv', 'rb')
csv_r = csv.reader(f)
for row in csv_r:
 print 'Saving '+', '.join(row)
 Insurance(
  license_number=row[1]
  , license_type=row[2]
  , dmv_plate=row[3]
  , vin=row[4]
  , code=row[5]
  , policy_number=row[6]
  , vehicle_owner=row[7]
  , agent_fleet_number=row[8]
  ).save(safe=True)

f.close()

----

import csv
from yellow_cab.models import DriversByMedallion
f = open('/opt/pythonenv/nyctaxifinder-env/driversbymedallion.csv', 'rb')
csv_r = csv.reader(f)
for row in csv_r:
 print 'Saving '+', '.join(row)
 DriversByMedallion(
  medallion_number=row[1]
  , medallion_owner=row[2]
  , tlc_driver_license_number=row[3]
  , driver_name=row[4]
  , license_expiration=row[7]
  ).save(safe=True)

f.close()
