# create Client and server folder separate under one parent folder eg CompletePr 
### Step 1: cd to respective directories
## Client 
### How to create vite using yarn
#### yarn create vite my-project
#### run using the command yarn dev
#### This will run on localhost:5173
####
## Server
### 1: visit https://pip.pypa.io/en/stable/installation/
#### selection you os eg windows as what am using
#### Download the script(right click on the link and save to desktop /onedrive/desktop/(save here).
#### Navigate to powershel and run as an administrator
#### Enter this -> py get-pip.py
#### remember this installs pip into the system and make sure python is installed and is in the sysytem
####
### 2: Installing Django
#### pip install django django restframework
#### python -m django startproject <give prefered project name>
#### cd project<your project name> 
#### run python manage.py startapp api
####
### 3: navigate to settings.py
#### add 'api'
#### 'rest_framework'
#### exit file
####
### 4: create file model.py
#### then run
#### python manage.py makemigrations
#### python manage.py migrate
####
### 5: create file serializer.py
#### add -> from rest_framework import Serialisers
#### (note this makes python have the ability to read the json files)

### 6: Navigate to views.py
### add this imports
#### 1: add -> from rest_framework.decorators import api_view
#### 2: add -> from rest_framework.response import Response
#### 3: add -> from rest_framework.status import status
#### 4: add -> from .models import <name of model for this case is Book>
#### add -> add codes for the POST and GET methods

### 7: creating a connection to communicate with client-side on server-side
#### run -> pip install django-cors-headers
#### add to settings.py and middleware
#### bottom-end set to particluar site or for demo and all set/add -> CORS_ALLOW_ALL_ORIGINS = True

### 8: cloning 
#### before committing code always
#### run -> pip freeze > requirements.txt

### 9: cloning 
#### clone the project
#### run -> python -m venv venv
#### run -> source venv/bin/activate  # macOS/Linux
#### run -> venv\Scripts\activate     # Windows

#### run -> pip install -r requirements.txt