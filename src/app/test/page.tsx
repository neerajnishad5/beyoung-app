const Test = () => {
  return (
    <div className="flex flex-row md:flex-row">
      <div className="w-full md:w-6/10 p-4 bg-gray-200">
        {/* First column content */}
        <p>
          This is the first column with 70% width on medium and larger screens.
        </p>
      </div>
      <div className="w-full md:w-4/10 p-4 bg-gray-400">
        {/* Second column content */}
        <p>
          This is the second column with 30% width on medium and larger screens.
        </p>
      </div>
    </div>
  );
};

export default Test;
