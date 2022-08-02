
// ---------- In function in GlobalScope ----------
function funcInGlobal (){
  console.log("In function in Global Scope =>", this)
};

// ---------- In Cnstructor ----------
class DemoClass{
  constructor(){
    console.log("In The Constructor =>", this)
    this.demoKey = "demoValue"
  }
};

// ---------- In Object ----------
const demoObject = {
  demoKey: "demoValue",
  aRegularFuncInSomeObject(){
    console.log("In Reguar Funcrion in Some Object =>", this)
  },
  anArrowFuncInSomeObject: () => console.log("In Arrow Funcrion in Some Object =>", this)
};

// ---------- Using call or bind ----------
function printDemoKey() {
  console.log("In bind Or call =>", this.demoKey)
}


console.log("In Global Scope =>", this); // בסקופ הגלובלי
funcInGlobal();                          // בפונקציה רגילה שמוגדרת בסקופ הגלובלי
new DemoClass();                         // בקונסטרקטור של אובייקט מטיפוס כלשהוא
demoObject.aRegularFuncInSomeObject();   // בפונקצייה רגילה ששיכת לאובייקט מסויים
demoObject.anArrowFuncInSomeObject();    // בפונקציית חץ ששיכת לאובייקט מסוים
printDemoKey.call(demoObject)            // call-בפונקציה רגילה תוך שימוש ב
printDemoKey.bind(demoObject)()          // bind-בפונקציה רגילה תוך שימוש ב


