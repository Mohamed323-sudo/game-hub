import { Card, CardFooter, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardFooter>
        <SkeletonText />
      </CardFooter>
    </Card>
  );
};

export default GameCardSkeleton;
