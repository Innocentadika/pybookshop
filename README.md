# create Client and server folder separate under one parent folder eg CompletePr 
### Step 1: cd to respective directories
## Client 
### How to create vite using yarn
#### yarn create vite my-project
#### run using the command yarn dev
#### This will run on localhost:5173
####
## Server
### visit pip.pya.io/en/stable/installation
#### selection you os eg windows as what am using
#### Download the script(right click on the link and save to desktop /onedrive/desktop/<paste here>
#### Navigate to powershel and run as an administrator
#### Enter this -> py get-pip.py
#### remember this installs pip into the system and make sure python is installed and is in the sysytem
####
### Installing Django
#### python -m django startproject <give prefered project name>
#### cd <your project name> 
#### run python manage.py startapp api
####
### navigate to settings.py
#### add 'api'
#### 'rest_framework'
#### exit file
####
### create file model.py
#### then run
#### python manage.py makemigrations
#### python manage.py migrate
####
### create file serializer.py
#### add -> from rest_framework import Serialisers
#### (note this makes python have the ability to read the json files)

### Navigate to views.py
### add this imports
#### 1: add -> from rest_framework.decorators import api_view
#### 2: add -> from rest_framework.response import Response
#### 3: add -> from rest_framework.status import status
#### 4: add -> from .models import <name of model for this case is Book>
#### add -> add codes for the POST and GET methods

