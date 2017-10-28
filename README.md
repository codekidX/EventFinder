# Event Finder

### Import MongoDB database
> Make sure your mongo db instance is running with `--dbpath` as config folder inside your clone

`mongod --dbpath ` **drag and drop config folder here**
and
`cd db && mongoimport --db events --collection events --file events.json`

### Running server


First Run:
`npm install`

Consecutive Runs:
`npm start`
> Will open url automatically

### Instructions

Enter start date - `2017-11-05 20:00:00`
Enter end date - `2017-11-15 20:00:00`
Enter event type - 254

> Output
```
[{"_id":"59f45a639c0589fda823b6a5","createdBy":"Ashish","title":"Sports Fest","description":"Sports time","address":"B-13, Bhaveshwardeep, Road no. 21, Chembur, Mumbai-400071","startDate":"2017-11-10T14:30:00.000Z","endDate":"2017-11-15T14:30:00.000Z","eventType":254,"eventStatus":"99/100","price":"Rs. 5000","image":"http://event1.jpg","atendees":[{"name":"Jeff Bezos","image":"http://jeff.jpg","description":"Amazon Founder"},{"name":"Sundar Pichai","image":"http://sundar.jpg","description":"Google CEO"}]}]
```

Enter start date - `2017-11-15 20:00:00`
Enter end date - `2017-11-20 20:00:00`
Enter event type - 254
```
[{"_id":"59f464e482dc1faaa41bb8bd","createdBy":"Nodd","title":"Chillout Fest","description":"Chilling time","address":"B-13, Bhaveshwardeep, Road no. 21, Chembur, Mumbai-400071","startDate":"2017-11-15T14:30:00.000Z","endDate":"2017-11-20T14:30:00.000Z","eventType":254,"eventStatus":"99/100","price":"Rs. 5000","image":"http://event1.jpg","start":"2017-11-15T14:30:00.000Z","atendees":[{"name":"Jeff Bezos","image":"http://jeff.jpg","description":"Amazon Founder"},{"name":"Bill Gates","image":"http://bill.jpg","description":"Microsoft Founder"}]}]
```

Enter start date - `2017-11-15 20:00:00`
Enter end date - `2017-11-20 20:00:00`
Enter event type - 111

> Output
```
[{"_id":"59f45bcd9c0589fda823b6a6","createdBy":"Ashish","title":"Sports Fest","description":"Sports time","address":"B-13, Bhaveshwardeep, Road no. 21, Chembur, Mumbai-400071","startDate":"2017-11-10T14:30:00.000Z","endDate":"2017-11-15T14:30:00.000Z","eventType":111,"eventStatus":"99/100","price":"Rs. 5000","image":"http://event1.jpg","atendees":[{"name":"Jeff Bezos","image":"http://jeff.jpg","description":"Amazon Founder"}]}]
```
