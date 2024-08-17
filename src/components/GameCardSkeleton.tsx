import { Card, CardFooter, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardFooter>
        <SkeletonText width="300px" borderRadius={10} overflow="hidden" />
      </CardFooter>
    </Card>
  );
};

export default GameCardSkeleton;
