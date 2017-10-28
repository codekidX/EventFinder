let Event = require('../models/event');

// GET /events
function getAllEvents(req, res) {
  let query = Event.find({});
  query.exec(function (err, events) {
    if (err) { res.send(err) }

    res.json(events);
  });
};

function getEventsByDateAndType(req, res) {
  // console.log(req.params.start);
  // console.log(req.params.end);
  // console.log(req.params.type);
  let query = Event.find({
    startDate: {
      $gte: new Date(req.params.start)
    },
    endDate: {
      $lte: new Date(req.params.end)
    },
    eventType: req.params.type
  });
  query.exec(function (err, events) {
    if (err) { res.send(err) }

    res.json(events);
  });
};


module.exports = { getAllEvents, getEventsByDateAndType }
