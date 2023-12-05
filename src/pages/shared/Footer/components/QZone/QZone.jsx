import qZone1 from "../../../../../assets/qZone1.png";
import qZone2 from "../../../../../assets/qZone2.png";
import qZone3 from "../../../../../assets/qZone3.png";
import bg from "../../../../../assets/bg.png";

const QZone = () => {
  return (
    <>
      <div className="bg-light mt-3 rounded p-3">
        <h5>Q-Zone</h5>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      <div
        style={{ backgroundImage: `url('${bg}')` }}
        className="p-5 text-center text-white"
      >
        <h4 className="fs-3 fw-semibold">Create an Amazing Newspaper</h4>
        <p className="mt-4">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn btn-danger">Read More</button>
      </div>
    </>
  );
};

export default QZone;
