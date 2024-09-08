import FollowerMember from "@/Component/FollowerMember";

interface followerText { text : string }
  
const index = ({ text } : followerText) => {
  return (
    <div>
        {/*<FollowerMember size="20" latence={1} followerIndex="circle1" />*/}
        <FollowerMember size="20" latence={50} followerIndex="circle1" followerText={text}/>
    </div>
  )
}

export default index