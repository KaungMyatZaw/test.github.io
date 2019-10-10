varEventUtil ={
          stopPropagation: function(event){
            if(event.stopPropagation){
              event.stopPropagation();
            }
            else{
              event.cancelBubble = true;
            }
          }
        }