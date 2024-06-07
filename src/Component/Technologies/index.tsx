import Java from "@/assets/image/icon/java-original.svg";
import Python from "@/assets/image/icon//python-original.svg";
import CSharp from "@/assets/image/icon/csharp-original.svg";
import HTML5 from "@/assets/image/icon/html5-original.svg";
import CSS3 from "@/assets/image/icon/css3-original.svg";
import Javascript from "@/assets/image/icon/javascript-plain.svg";
import TypeScript from "@/assets/image/icon/typescript-plain.svg";
import Selenium from "@/assets/image/icon/selenium-original.svg";
import Cucumber from "@/assets/image/icon/cucumber-plain.svg";
import GitHub from "@/assets/image/icon/github-original.svg";
import Git from "@/assets/image/icon/git-plain.svg";
import AzureDevOps from "@/assets/image/icon/azuredevops-original.svg";
import MySQL from "@/assets/image/icon/mysql-original.svg";
import SQLite from "@/assets/image/icon/sqlite-original.svg";
import AndroidStudio from "@/assets/image/icon/androidstudio-original.svg";
import ASP from "@/assets/image/icon/netframework.svg";;
import React_icon from "@/assets/image/icon/react-original.svg";
import Tailwind_icon from "@/assets/image/icon/tailwindcss-original.svg";
import Vite_icon from "@/assets/image/icon/vitejs-original.svg";
import VisualStudio from "@/assets/image/icon/visualstudio-plain.svg";
import VSCode from "@/assets/image/icon/vscode-original.svg";
import IntelliJ from "@/assets/image/icon/intellij-original.svg";
import Pycharm from "@/assets/image/icon/pycharm-original.svg";

let listItemClass = "h-full sm:h-full aspect-square flex items-center justify-center";
let imageItemClass = "h-1/2 aspect-square m-auto";
          
type Props = {
    technologies : string;
}

const index = ({technologies}: Props) => {

    let technologyList = technologies.split("-")

  return (
    <div className='h-full w-full flex items-center justify-center'>
        <ul className='w-full h-3/4 sm:h-full flex flex-row overflow-auto custom-scrollbar-h'>
            { technologyList.includes('visualstudio') && <li className={`${listItemClass}`}><img src={VisualStudio} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('vscode') && <li className={`${listItemClass}`}><img src={VSCode} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('androidstudio') && <li className={`${listItemClass}`}><img src={AndroidStudio} className={`${imageItemClass}`}/></li>}
            { technologyList.includes('intellij') && <li className={`${listItemClass}`}><img src={IntelliJ} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('pycharm') && <li className={`${listItemClass}`}><img src={Pycharm} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('java') && <li className={`${listItemClass}`}><img src={Java} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('python') && <li className={`${listItemClass}`}><img src={Python} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('csharp') && <li className={`${listItemClass}`}><img src={CSharp} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('html') && <li className={`${listItemClass}`}><img src={HTML5} className={`${imageItemClass}`}/></li>}
            { technologyList.includes('css') && <li className={`${listItemClass}`}><img src={CSS3} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('javascript') && <li className={`${listItemClass}`}><img src={Javascript} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('typescript') && <li className={`${listItemClass}`}><img src={TypeScript} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('selenium') && <li className={`${listItemClass}`}><img src={Selenium} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('cucumber') && <li className={`${listItemClass}`}><img src={Cucumber} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('github') && <li className={`${listItemClass}`}><img src={GitHub} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('git') && <li className={`${listItemClass}`}><img src={Git} className={`${imageItemClass}`}/></li>}
            { technologyList.includes('azuredevops') && <li className={`${listItemClass}`}><img src={AzureDevOps} className={`${imageItemClass}`}/></li>}  
            { technologyList.includes('mysql') && <li className={`${listItemClass}`}><img src={MySQL} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('sqlite') && <li className={`${listItemClass}`}><img src={SQLite} className={`${imageItemClass}`}/></li>}  
            { technologyList.includes('asp') && <li className={`${listItemClass}`}><img src={ASP} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('react') && <li className={`${listItemClass}`}><img src={React_icon} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('tailwind') && <li className={`${listItemClass}`}><img src={Tailwind_icon} className={`${imageItemClass}`}/></li>} 
            { technologyList.includes('vite') && <li className={`${listItemClass}`}><img src={Vite_icon} className={`${imageItemClass}`}/></li>} 
        </ul>
    </div>
  )
}

export default index
