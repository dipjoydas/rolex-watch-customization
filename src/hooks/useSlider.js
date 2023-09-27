import React, { useEffect, useState } from 'react';
import starp1 from '../assets/BODY/Body default.png'
import starp2 from '../assets/BODY/Body.png'
// dials baguettel
import dialsBAGUETTE1 from '../assets/1K Renders rolex watch/Baguette watch/Dial/Black.png'
import dialsBAGUETTE2 from '../assets/1K Renders rolex watch/Baguette watch/Dial/Blue.png'
import dialsBAGUETTE3 from '../assets/1K Renders rolex watch/Baguette watch/Dial/Green.png'
import dialsBAGUETTE4 from '../assets/1K Renders rolex watch/Baguette watch/Dial/Grey.png'
import dialsBAGUETTE5 from '../assets/1K Renders rolex watch/Baguette watch/Dial/Pink.png'
import dialsBAGUETTE6 from '../assets/1K Renders rolex watch/Baguette watch/Dial/Purple.png'
import dialsBAGUETTE7 from '../assets/1K Renders rolex watch/Baguette watch/Dial/Red.png'
import dialsBAGUETTE8 from '../assets/1K Renders rolex watch/Baguette watch/Dial/White.png'
// dials BRUSHED
import dialsBRUSHED1 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/Black Logo.png'
import dialsBRUSHED2 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/Blue Logo.png'
import dialsBRUSHED3 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/Green Logo.png'
import dialsBRUSHED4 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/Grey Logo.png'
import dialsBRUSHED5 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/Pink Logo.png'
import dialsBRUSHED6 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/Purple Logo.png'
import dialsBRUSHED7 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/Red Logo.png'
import dialsBRUSHED8 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Dial/White Logo.png'
// dials ROMAN
import dialsROMAN1 from '../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Black.png'
import dialsROMAN2 from '../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Blue.png'
import dialsROMAN3 from '../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Green.png'
import dialsROMAN4 from '../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Grey.png'
import dialsROMAN5 from '../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Pink.png'
import dialsROMAN6 from '../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Purple.png'
import dialsROMAN7 from '../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/Red.png'
import dialsROMAN8 from '../assets/1K Renders rolex watch/Double Diamond rolex watch/Dial/White.png'

// bezzels 
import bezzel1 from '../assets/bezzels/Nbezzle-1.svg'
import bezzel2 from '../assets/bezzels/Nbezzle-2.svg'
import bezzel3 from '../assets/bezzels/Nbezzle-3.svg'
import bezzel4 from '../assets/bezzels/Nbezzle-4.svg'
import bezzel5 from '../assets/bezzels/Nbezzle-5.svg'
import bezzel6 from '../assets/bezzels/Nbezzle-6.svg'
// extra straps 
import extraStarp1 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Body/Black strap.png'
import extraStarp2 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Body/Blue strap.png'
import extraStarp3 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Body/Green strap.png'
import extraStarp4 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Body/Grey strap.png'
import extraStarp5 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Body/Pink strap.png'
import extraStarp6 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Body/Purple strap.png'
import extraStarp7 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Body/Red strap.png'
import extraStarp8 from '../assets/1K Renders rolex watch/Rolex rubberband watch/Body/White strap.png'

// NEW  DIALS 






const useSlider = () => {
    const [size,setSize]=useState(10)
    const [activeWatch,setActiveWatch] = useState(0)
    const [extraStrap,setExtraStrap] =useState()
    const [selectedSize, setSelectedSize] = useState('41')
    const [selectedExtraStrapsIndex,setSelectedExtraStapsIndex] =useState([])
    const [activeNavigetor2, setActiveNavigetor2] = useState(0)
    // 4th array element is array position in parents array
    const straps =[[starp1,"DateJust Oyester",11250,0],[starp2,"DateJust Jubilee",12000,1]]
    const dialsBAGUETTE = [
        [dialsBAGUETTE1,"Baguette",2500,0],
        [dialsBAGUETTE2,"Baguette",2500,1],
        [dialsBAGUETTE3,"Baguette",2500,2],
        [dialsBAGUETTE4,"Baguette",2500,3],
        [dialsBAGUETTE5,"Baguette",2500,4],
        [dialsBAGUETTE6,"Baguette",2500,5],
        [dialsBAGUETTE7,"Baguette",2500,6],
        [dialsBAGUETTE8,"Baguette",2500,7],
    ]
    const dialsBRUSHED =[
        [dialsBRUSHED1,"Brushed",1000,8],
        [dialsBRUSHED2,"Brushed",1000,9],
        [dialsBRUSHED3,"Brushed",1000,10],
        [dialsBRUSHED4,"Brushed",1000,11],
        [dialsBRUSHED5,"Brushed",1000,12],
        [dialsBRUSHED6,"Brushed",1000,13],
        [dialsBRUSHED7,"Brushed",1000,14],
        [dialsBRUSHED8,"Brushed",1000,15],

    ]
    const dialsROMAN = [
        [dialsROMAN1,"Roman",1000,16],
        [dialsROMAN2,"Roman",1000,17],
        [dialsROMAN3,"Roman",1000,18],
        [dialsROMAN4,"Roman",1000,19],
        [dialsROMAN5,"Roman",1000,20],
        [dialsROMAN6,"Roman",1000,21],
        [dialsROMAN7,"Roman",1000,22],
        [dialsROMAN8,"Roman",1000,23],

    ]
    const dials =[...dialsBAGUETTE,...dialsBRUSHED,...dialsROMAN]
    const bazzels = [
        [bezzel1,"Domed",0,0],
        [bezzel3,"Double Row",2500,1],
        [bezzel2,"Single Row",2500,2],
        [bezzel4,"Single Row",2500,3],
        [bezzel5,"Single Row",2500,4],
        [bezzel6,"Single Row",2500,5],
       

    ]
    const extraStraps =[
        [extraStarp1,"des",500,0],
        [extraStarp2,"des",500,1],
        [extraStarp3,"des",500,2],
        [extraStarp4,"des",500,3],
        [extraStarp5,"des",500,4],
        [extraStarp6,"des",500,5],
        [extraStarp7,"des",500,6],
        [extraStarp8,"des",500,7],
        // [extraStarp9,"des","200",8],
    ]
    const initialWatchContainer =[
        [straps[0],dialsBAGUETTE[0],bazzels[0],36],
        [straps[1],dialsBAGUETTE[1],bazzels[1],41]
     ]
    const [initialWatch,setInitialWatch]=useState(initialWatchContainer)
   
    

    const activator  =(activeIndex)=>{
        const activeElement = document.getElementsByClassName('imgContainer')[activeIndex]
        activeElement.style.left ="0%"
        const textElement = document.getElementsByClassName('textContainer')
        
        const textcontainer1 =document.getElementsByClassName('textContainer2')

        for(let i of textcontainer1){
         i.style.display  ='none'
     
        }
        for(let i of textElement){
         i.style.display  ='none'
     
        }
        textElement[activeIndex].style.display  ='block'
        textcontainer1[activeIndex].style.display  ='block'
        const greaterThan =[]
        const lessThan =[]
        initialWatch.map((i,index)=>{
            // console.log(index,'inddex')
            if(index<activeIndex){
                lessThan.push(index )
               
            }
            if(index>activeIndex){
                
                greaterThan.push(index)
    
            }
        })
        greaterThan.map((i,index)=>{
            document.getElementsByClassName('imgContainer')[i].style.left =`${(index +1)*200}%`
            document.getElementsByClassName('imgContainer')[i].style.transition =`all 1s`
    
        })
        lessThan.map(i=>{
            document.getElementsByClassName('imgContainer')[i].style.left =`-${(lessThan.length - i)*110}%`
            document.getElementsByClassName('imgContainer')[i].style.transition =`all 1s`
    
        })
        // now update the active element state 
        // initialWatch
        setActiveWatch(activeIndex)
        


    }
    const bazzelsActivator =(activeBazzelsIndex)=>{
        const activeElement = document.getElementsByClassName('imgContainer2')[activeBazzelsIndex]
        activeElement.style.left ="0%"
        const greaterThan =[]
        const lessThan =[]
        bazzels.map((i,index)=>{
            // console.log(index,'inddex')
            if(index<activeBazzelsIndex){
                lessThan.push(index )
               
            }
            if(index>activeBazzelsIndex){
                
                greaterThan.push(index)
    
            }
        })
        greaterThan.map((i,index)=>{
            document.getElementsByClassName('imgContainer2')[i].style.left =`${(index +1)*200}%`
            document.getElementsByClassName('imgContainer2')[i].style.transition =`all 1s`
    
        })
        lessThan.map(i=>{
            document.getElementsByClassName('imgContainer2')[i].style.left =`-${(lessThan.length - i)*110}%`
            document.getElementsByClassName('imgContainer2')[i].style.transition =`all 1s`
    
        })

        // now made a change in initial watch
        // initialWatch[activeWatch][2]=bazzels[activeBazzelsIndex]
        const copyInitialWatch =[...initialWatch]
        copyInitialWatch[activeWatch][2]=bazzels[activeBazzelsIndex]
        setInitialWatch([...copyInitialWatch])

        // console.log(copyInitialWatch,"initial wathc afer change")
        console.log(initialWatch,"initial watch")



    }
    const dialsActivator =(activeDialsIndex)=>{
        const activeElement = document.getElementsByClassName('imgContainer3')[activeDialsIndex]
        // window.alert(activeDialsIndex)
        activeElement.style.left ="0%"
        const greaterThan =[]
        const lessThan =[]
        console.log(bazzels,'bazzels')
        dials.map((i,index)=>{
            // console.log(index,'inddex')
            if(index<activeDialsIndex){
                lessThan.push(index )
               
            }
            if(index>activeDialsIndex){
                
                greaterThan.push(index)
    
            }
        })
        greaterThan.map((i,index)=>{
            document.getElementsByClassName('imgContainer3')[i].style.left =`${(index +1)*200}%`
            document.getElementsByClassName('imgContainer3')[i].style.transition =`all 1s`
    
        })
        lessThan.map(i=>{
            document.getElementsByClassName('imgContainer3')[i].style.left =`-${(lessThan.length - i)*110}%`
            document.getElementsByClassName('imgContainer3')[i].style.transition =`all 1s`
    
        })
        // now made a change in initial watch
        const copyInitialWatch =[...initialWatch]
        copyInitialWatch[activeWatch][1]=dials[activeDialsIndex]
        setInitialWatch([...copyInitialWatch])
        console.log(initialWatch,"initial watc")

    }


    const extraStrapsActivator =(activeExtraStrapsIndex)=>{
        // set extra straps 
        setExtraStrap(activeExtraStrapsIndex)
        const activeElement = document.getElementsByClassName('imgContainer4')[activeExtraStrapsIndex]
        activeElement.style.left ="0%"
        const greaterThan =[]
        const lessThan =[]
        extraStraps.map((i,index)=>{
            // console.log(index,'inddex')
            if(index<activeExtraStrapsIndex){
                lessThan.push(index )
               
            }
            if(index>activeExtraStrapsIndex){
                
                greaterThan.push(index)
    
            }
        })
        greaterThan.map((i,index)=>{
            document.getElementsByClassName('imgContainer4')[i].style.left =`${(index +1)*200}%`
            document.getElementsByClassName('imgContainer4')[i].style.transition =`all 1s`
    
        })
        lessThan.map(i=>{
            document.getElementsByClassName('imgContainer4')[i].style.left =`-${(lessThan.length - i)*110}%`
            document.getElementsByClassName('imgContainer4')[i].style.transition =`all 1s`
    
        })

    }
    
    useEffect(()=>{
        console.log(initialWatch,"initial from useeffect watch")

    },[initialWatch])
    const extraStrapsSelector =(e,indexValue)=>{
        
        if(e.target.checked){
            setSelectedExtraStapsIndex([...selectedExtraStrapsIndex,indexValue])
            
            
        }else{
            let selected = selectedExtraStrapsIndex
           const index = selected.indexOf(indexValue)
           
           selected.splice(index,1)
           setSelectedExtraStapsIndex([...selected])
           
            
    
        }


    }
    useEffect(()=>{
        console.log(selectedExtraStrapsIndex,"selected straps")

    },[selectedExtraStrapsIndex])
    return {
        size,
        setSize,
        initialWatch,
        setInitialWatch,
       
        straps,
        dialsBAGUETTE,
        dialsBRUSHED,
        dialsROMAN,
        dials,
        bazzels,
        activator,
        activeWatch,
        bazzelsActivator,
        dialsActivator,
        extraStraps,
        extraStrapsActivator,
        extraStrap,
        setExtraStrap,
        selectedSize,
        setSelectedSize,
        extraStrapsSelector,
        selectedExtraStrapsIndex,
        activeNavigetor2,
        setActiveNavigetor2
    }
   
};

export default useSlider;