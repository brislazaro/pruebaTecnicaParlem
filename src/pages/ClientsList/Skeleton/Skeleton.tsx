function Skeleton() {
  return (
    <ul
      className="flex flex-col divide-y divide-gray-700 pt-4 gap-3"
      data-testid="clientsSkeleton"
    >
      <li className="w-full h-28 bg-white bg-opacity-10 rounded-md animate-pulse"></li>
      <li className="w-full h-28 bg-white bg-opacity-10 rounded-md animate-pulse"></li>
      <li className="w-full h-28 bg-white bg-opacity-10 rounded-md animate-pulse"></li>
    </ul>
  );
}

export default Skeleton;
