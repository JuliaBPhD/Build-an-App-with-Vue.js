// var Vue = require('Vue');

new Vue ({
    el: "#events",

    data: {
        event: { name: '',  description: '', date: ''},
        events: []
    },

    ready: function() {
       this.fetchEvents();
    },

    methods: {

        fetchEvents: function () {
          var events = [];
          this.$http.get('/api/events')
           .success(function (events) {
               this.$set('events',events);
            });
            .error(function (error) {
               console.log(error);
            });
          },

          addEvent: function() {
            if (this.event.name) {
               this.events.push(this.event);
               this.event = { name: ' ', description: ' ', date: ' ' };
               this.$http.get("/api/events")
                 .success(function(events) {
                    this.$set('events', events);
                    console.log(events);
                 })
                 .error(function(error){
                   console.log(error);
                 });
            },
            deleteEvent: function(index) {
              if (confirm("Are you sure you want to delete this event?")) {
              this.$http.delete("api/events/" + event.id)
                 .success(function(res){
                 this.events.splice(index, 1);
              )}
              .error(function(error)  {
                  console.log(error);
              });
         }
      }
    }
});

  //end of code, I am not sure where the rest of this code should go
            /*{
               id: 1,
               name: "TIFF",
               description: "Toronto International Film Festival",
               date: "2015-09-10"
             },
             {
               id: 2,
               name: "The Martian Premiere",
               description: "The Martian comes to theaters",
               date: "2015-10-02",
             },
             {
               id: 3,
               name: "SXSW",
               description: "Music, film, and interactive festival in Austin, TX",
               date: "2016-03-11"
             },
          ];
          this.$set("events," events);
        },


        }
    }
      });
*/
