import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  return (
    <Badge fontSize={14} paddingX={2} borderRadius={"4"}>
      {score}
    </Badge>
  );
};

export default CriticScore;
