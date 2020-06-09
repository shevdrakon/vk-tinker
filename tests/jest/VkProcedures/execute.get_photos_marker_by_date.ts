const items = [
  {id: 12, date: 12},
  {id: 11, date: 11},
  {id: 10, date: 10},
  {id: 9, date: 9},
  {id: 8, date: 8},
  {id: 7, date: 7},
  {id: 6, date: 6},
  {id: 5, date: 5},
  {id: 4, date: 4},
  {id: 3, date: 3},
  {id: 2, date: 2},
  {id: 1, date: 1},
];

const API = {
  photos: {
    getAll: (args: any) => {
      const {offset} = args;
      const item= items[offset] || {date: null};
      return {
        items: [item],
      }
    }
  }
};

const procedure = (Args) => {
  var groupId = -106168410;
  var start_date = Args.start_date;
  var end_date = Args.end_date;
  var stepSize = Args.stepSize ? Args.stepSize : 200;

  var tries = 25;
  var markers = [];

  var i = 1;

  var start = null;
  var end = null;

  while (end == null && i < tries) {
    var offset = i * stepSize;

    var photo = API.photos.getAll({
      "owner_id": groupId,
      "extended": 0,
      "photo_sizes": 0,
      "count": 1,
      "offset": offset,
    }).items[0];

    if (start == null) {
      if (end_date == photo.date) {
        start = offset;
        markers.push({index: offset, date: photo.date});
      } else if (end_date > photo.date) {
        start = offset - stepSize;
        markers.push({index: offset, date: photo.date});
      }
    }

    if (start_date >= photo.date) {
      end = offset;
      markers.push({index: offset, date: photo.date});
    }

    i = i + 1;
  }

  return {
    range: [start, end],
    markers: markers,
  };
}

export default procedure;
