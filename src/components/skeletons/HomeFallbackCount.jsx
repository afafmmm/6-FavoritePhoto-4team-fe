import HomeFallback from "./HomeFallback";

export default function HomeFallbackCount({count = 1}) {
  return ( 
    <>
        {
            Array.from({length : count}).map((_,index) => 
                <HomeFallback key={index}/>
            )
        }
    </>
  );
}
