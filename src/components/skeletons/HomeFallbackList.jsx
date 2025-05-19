import HomeFallback from "./HomeFallback";

export default function SkeletonList({count}) {
    return new Array(count).fill(0).map((_,index) => <HomeFallback key={index}/>)
}