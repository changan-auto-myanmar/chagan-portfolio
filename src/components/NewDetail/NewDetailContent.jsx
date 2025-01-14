function NewDetailContent({ desc }) {
  return (
    <div className="lg:w-[1000px] mx-auto py-[64px] px-5 lg:px-0">
      {/* {NewDetailArray.map((newdetail) => ( */}
      <div className="mt-10">
        {/* <p className="header-text font-bold mt-5">{newdetail.title}</p> */}
        <p className="body-text mt-5 leading-10">{desc}</p>
      </div>
      {/* ))} */}
    </div>
  );
}

export default NewDetailContent;
