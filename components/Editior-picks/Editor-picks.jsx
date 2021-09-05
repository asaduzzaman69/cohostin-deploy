import EditorsPickItem from "../Editor-Picks-Item/Editor-Picks-Item"
import { GridLayout } from "./Editior-picks.styled";

const EditiorPicks = ({posts}) => {
    
    return ( 

        <div  style={{
        }}>
            <h5 className='my-4' style={{
                fontSize: '40px'
            }}>Editors Pick</h5>

       <GridLayout>
            
            {
                posts.slice(1,5).map((el,idx) =>  <EditorsPickItem key={`editor-picks-id-${idx}`}  {...el}/>)
            }

        </GridLayout>

        </div>
     );
}
 
export default EditiorPicks;