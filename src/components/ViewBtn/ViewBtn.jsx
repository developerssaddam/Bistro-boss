const ViewBtn = ({btnText}) => {
  return (
    <div className="flex justify-center mt-10">
      <button className="btn btn-outline border-0 border-b-4 uppercase">
        {btnText}
      </button>
    </div>
  );
};

export default ViewBtn;
