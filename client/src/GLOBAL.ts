
namespace GLOBAL {
    export  enum EventType{
        Work,
        Education,
        Achievement,
        Project,
        Event
    }
    export function EventTypeClass(type:EventType){
      switch (type) {
        case EventType.Work:
          return 'evt-work';
        case EventType.Education:
          return 'evt-education';
        case EventType.Achievement:
          return 'evt-achievement';
        case EventType.Project:
          return 'evt-project';
        case EventType.Event:
          return 'evt-event';
        default:
          throw new Error('Invalid EventType');
      }
    }
  }
  

export default GLOBAL