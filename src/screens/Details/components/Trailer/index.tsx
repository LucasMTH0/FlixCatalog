import { useEffect, useState } from "react";
import { TrailerContainer, Video } from "./styles";
import { getTrailerLink } from "../../../../services/trailer";
type Props = {
       movieTitle: any
}
export function Trailer({ movieTitle }: Props) {
   const [trailer, setTrailer] = useState("");

   async function getTrailer() {
       console.log("nome do filme: ", movieTitle)
       const data = await getTrailerLink(movieTitle);
       console.log("data: ", data)
       if (data) {
              setTrailer(data);
       }
   }

   useEffect(() => {
       getTrailer()
   }, [])

   return (
       
       <TrailerContainer>
           <Video src={trailer}></Video>
       </TrailerContainer>
   )
}