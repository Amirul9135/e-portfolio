
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
export enum SkillCategory{
  PR = "Programming Language", //incl markup
  FR = "Framework/Library",
  OT = "Others"
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
  PHP = "PHP",
  DGO = "Digital Ocean"
} 
export namespace PROJECTSS {
 export const SMKB = [Skills.ASPNET, Skills.VBNET, Skills.HTML,Skills.BootStrap,Skills.JavaScript, Skills.JQuery, Skills.MsSQL]
 export const eportfolio = [Skills.React,Skills.TypeScript, Skills.SCSS, Skills.HTML, Skills.DGO]
 export const FUKURO = [Skills.Flutter,Skills.Dart,Skills.NodeJS,Skills.ExpressJS,Skills.MySQL, Skills.Phyton, Skills.REST, Skills.WebSocket, Skills.OneSignal, Skills.DGO]
 export const HIS = [Skills.HTML,Skills.BootStrap,Skills.JavaScript,Skills.NodeJS,Skills.ExpressJS,Skills.MySQL,Skills.REST,Skills.WebSocket]
 export const SPMS = [Skills.HTML,Skills.BootStrap,Skills.JavaScript,Skills.NodeJS,Skills.ExpressJS,Skills.MySQL,Skills.REST,Skills.WebSocket]
 export const BDOCMQ = [Skills.JavaScript,Skills.NodeJS]
 export const ENamecard = [Skills.HTML,Skills.CSS]
 export const Formaid = [Skills.WordPress]
 export const HomeDecor = [Skills.CSharp,Skills.Unity,Skills.Vuforia,Skills.AR]
 export const LifeBuddy = [Skills.HTML,Skills.CSS,Skills.JavaScript,Skills.CSharp]
 export const SPRP = [Skills.HTML,Skills.CSS,Skills.JavaScript,Skills.PHP,Skills.MySQL]
 
};
export class Project{
  name:string
  skills:Array<String>
  constructor(name:string,skills:Array<String>) {
    this.skills = []
    this.name = name
    this.addSkill(skills)
  }
  
  addSkill(addskl:Array<String>){
    this.skills = [...this.skills,...addskl]
  }
}

export class Skill {
  project:Array<Project>
  name:string
  category:SkillCategory

  constructor(name:string,category:SkillCategory,projects?:Array<Project>) {
    this.project = []
    this.name = name
    this.category = category
    if(projects){
      this.addProjects(projects)
    }
  }

  addProjects(addprojects:Array<Project>){
    this.project = [...this.project,...addprojects]
  }


}

export const ProjectList = new Array<Project>() 
ProjectList.push(new Project("SMKB",PROJECTSS.SMKB))
ProjectList.push(new Project("E-Portfolio",PROJECTSS.eportfolio))
ProjectList.push(new Project("FUKURO",PROJECTSS.FUKURO))
ProjectList.push(new Project("HIS",PROJECTSS.HIS))
ProjectList.push(new Project("SPMS",PROJECTSS.SPMS))
ProjectList.push(new Project("BDOCMQ",PROJECTSS.BDOCMQ))
ProjectList.push(new Project("E-Namecard",PROJECTSS.ENamecard))
ProjectList.push(new Project("Formaid", PROJECTSS.Formaid))
ProjectList.push(new Project("HomeDecor",PROJECTSS.HomeDecor))
ProjectList.push(new Project("LifeBuddy",PROJECTSS.LifeBuddy))
ProjectList.push(new Project("SPRP",PROJECTSS.SPRP))       

function filterProject(skilname:Skills){
  let tmpsubarr = new Array<Project>()
  ProjectList.forEach(p=>{
    if(p.skills.includes(skilname)){
      tmpsubarr.push(p)
    }
  })
  return tmpsubarr
}
function generateSkill(skillname:Skills, category:SkillCategory){
  return new Skill(skillname, category ,filterProject(skillname))
}


export const SkillList = new Array<Skill>()
SkillList.push(generateSkill(Skills.ASPNET,SkillCategory.PR))
SkillList.push(generateSkill(Skills.VBNET,SkillCategory.PR))
SkillList.push(generateSkill(Skills.JavaScript,SkillCategory.PR))
SkillList.push(generateSkill(Skills.JQuery,SkillCategory.FR))
SkillList.push(generateSkill(Skills.MsSQL,SkillCategory.PR))
SkillList.push(generateSkill(Skills.TypeScript,SkillCategory.PR))
SkillList.push(generateSkill(Skills.React,SkillCategory.PR))
SkillList.push(generateSkill(Skills.HTML,SkillCategory.PR))
SkillList.push(generateSkill(Skills.CSS,SkillCategory.PR))
SkillList.push(generateSkill(Skills.SCSS,SkillCategory.PR))
SkillList.push(generateSkill(Skills.Flutter,SkillCategory.FR))
SkillList.push(generateSkill(Skills.NodeJS,SkillCategory.FR))
SkillList.push(generateSkill(Skills.Dart,SkillCategory.PR))
SkillList.push(generateSkill(Skills.ExpressJS,SkillCategory.FR))
SkillList.push(generateSkill(Skills.MySQL,SkillCategory.PR))
SkillList.push(generateSkill(Skills.Phyton,SkillCategory.PR))
SkillList.push(generateSkill(Skills.REST,SkillCategory.OT))
SkillList.push(generateSkill(Skills.WebSocket,SkillCategory.OT))
SkillList.push(generateSkill(Skills.OneSignal,SkillCategory.OT))
SkillList.push(generateSkill(Skills.BootStrap,SkillCategory.FR))
SkillList.push(generateSkill(Skills.WordPress,SkillCategory.OT))
SkillList.push(generateSkill(Skills.Unity,SkillCategory.OT))
SkillList.push(generateSkill(Skills.CSharp,SkillCategory.PR))
SkillList.push(generateSkill(Skills.Vuforia,SkillCategory.FR))
SkillList.push(generateSkill(Skills.AR,SkillCategory.OT))
SkillList.push(generateSkill(Skills.PHP,SkillCategory.PR))
SkillList.push(generateSkill(Skills.DGO,SkillCategory.OT))


function MaxProjectCount():number{
  let largest = 0
  SkillList.forEach(e=>{
    if(e.project.length > largest){
      largest = e.project.length
    }
  })
  return largest
}

export const MAXProjectCount = MaxProjectCount()


console.log(SkillList)
export default { EventType, Skills, EventTypeClass, PROJECTSS, Skill }