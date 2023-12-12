
export enum EventType {
  Work,
  Education,
  Achievement,
  Project,
  Event
}
export function EventTypeClass(type: EventType) {
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
export enum Skills {
  ASPNET = "ASP.NET",
  VBNET= "VB.NET",
  JavaScript= "JavaScript",
  JQuery= "JQuery",
  MsSQL= "MsSQL",
  TypeScript = "TypeScript",
  React = "React",
  HTML = "HTML",
  CSS = "CSS",
  SCSS = "SCSS",
  Flutter = "Flutter",
  Dart = "Dart",
  NodeJS = "NodeJS",
  ExpressJS = "ExpressJS",
  MySQL = "MySQL",
  Phyton = "Phyton",
  REST = "REST",
  WebSocket = "WebSocket",
  OneSignal = "OneSignal",
  BootStrap = "BootStrap",
  WordPress = "WordPress",
  Unity = "Unity",
  CSharp = "C#",
  Vuforia = "Vuforia",
  AR = "AR",
  PHP = "PHP"
} 
export namespace PROJECTSS {
 export const SMKB = [Skills.ASPNET, Skills.VBNET, Skills.HTML,Skills.BootStrap,Skills.JavaScript, Skills.JQuery, Skills.MsSQL]
 export const eportfolio = [Skills.React,Skills.TypeScript, Skills.SCSS, Skills.HTML]
 export const FUKURO = [Skills.Flutter,Skills.Dart,Skills.NodeJS,Skills.ExpressJS,Skills.MySQL, Skills.Phyton, Skills.REST, Skills.WebSocket]
 export const HIS = [Skills.HTML,Skills.BootStrap,Skills.JavaScript,Skills.NodeJS,Skills.ExpressJS,Skills.MySQL,Skills.REST,Skills.WebSocket]
 export const SPMS = [Skills.HTML,Skills.BootStrap,Skills.JavaScript,Skills.NodeJS,Skills.ExpressJS,Skills.MySQL,Skills.REST,Skills.WebSocket]
 export const BDOCMQ = [Skills.JavaScript,Skills.NodeJS]
 export const ENamecard = [Skills.HTML,Skills.CSS]
 export const Formaid = [Skills.WordPress]
 export const HomeDecor = [Skills.CSharp,Skills.Unity,Skills.Vuforia,Skills.AR]
 export const LifeBuddy = [Skills.HTML,Skills.CSS,Skills.JavaScript,Skills.CSharp]
 export const SPRP = [Skills.HTML,Skills.CSS,Skills.JavaScript,Skills.PHP,Skills.MySQL]
 
};


export default { EventType, Skills, EventTypeClass, PROJECTSS }