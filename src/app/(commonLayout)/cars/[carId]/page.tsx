/* eslint-disable @typescript-eslint/no-explicit-any */

interface ICardProps {
  params: { carId: string };
  searchParams?: any;
}

const page = ({ params, searchParams }: ICardProps) => {
  const { carId } = params;
  const searchParamsKeys = Object.keys(searchParams);
  return (
    <div>
      <h2>
        The car{`'`}s Id: {carId}
      </h2>
      <p>Car name is: {searchParams[searchParamsKeys[0]]}</p>
    </div>
  );
};

export default page;
