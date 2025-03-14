import DetailContents from "@/components/DetailContents";

const detailPage = ({
  params
}: {
  params: {
    id: string;
  };
}) => {
  return <DetailContents params={params} />;
};

export default detailPage;
