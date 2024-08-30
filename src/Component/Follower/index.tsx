import FollowerMember from "@/Component/FollowerMember";

const index = () => {
  return (
    <div>
        {/*<FollowerMember size="20" latence={1} followerIndex="circle1" />*/}
        <FollowerMember size="20" latence={50} followerIndex="circle1" />
    </div>
  )
}

export default index